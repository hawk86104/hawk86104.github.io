(function () {
    'use strict';

    class AbortableFetch {
      constructor() {
        this._controller = new AbortController();
        this.listeners = /* @__PURE__ */ new Set();
      }
      static {
        this.pendings = /* @__PURE__ */ new Map();
      }
      fetch(url, init = {}) {
        if (AbortableFetch.pendings.has(url)) {
          return;
        }
        AbortableFetch.pendings.set(url, this);
        fetch(url, {
          ...init,
          signal: this._controller.signal
        }).then((res) => {
          this.listeners.forEach((item) => item.resolve(res.clone()));
        }).catch((e) => {
          this.listeners.forEach((item) => item.reject(e));
        }).finally(() => {
          AbortableFetch.pendings.delete(url);
        });
      }
      abort() {
        this._controller.abort();
      }
    }
    class Fetch {
      constructor(url, init) {
        this.url = url;
        this.init = init;
        this.promise = new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
        });
      }
      ready() {
        let abFetch = AbortableFetch.pendings.get(this.url);
        if (!abFetch) {
          abFetch = new AbortableFetch();
          abFetch.fetch(this.url, this.init);
        }
        abFetch.listeners.add(this);
        return this.promise;
      }
      abort() {
        this.reject("User abort.");
        const abFetch = AbortableFetch.pendings.get(this.url);
        if (!abFetch) {
          return;
        }
        abFetch.listeners.delete(this);
        if (abFetch.listeners.size === 0) {
          abFetch.abort();
        }
      }
    }

    class Martini {
      constructor(gridSize = 257) {
        this.gridSize = gridSize;
        const tileSize = gridSize - 1;
        if (tileSize & tileSize - 1) throw new Error(
          `Expected grid size to be 2^n+1, got ${gridSize}.`
        );
        this.numTriangles = tileSize * tileSize * 2 - 2;
        this.numParentTriangles = this.numTriangles - tileSize * tileSize;
        this.indices = new Uint32Array(this.gridSize * this.gridSize);
        this.coords = new Uint16Array(this.numTriangles * 4);
        for (let i = 0; i < this.numTriangles; i++) {
          let id = i + 2;
          let ax = 0, ay = 0, bx = 0, by = 0, cx = 0, cy = 0;
          if (id & 1) {
            bx = by = cx = tileSize;
          } else {
            ax = ay = cy = tileSize;
          }
          while ((id >>= 1) > 1) {
            const mx = ax + bx >> 1;
            const my = ay + by >> 1;
            if (id & 1) {
              bx = ax;
              by = ay;
              ax = cx;
              ay = cy;
            } else {
              ax = bx;
              ay = by;
              bx = cx;
              by = cy;
            }
            cx = mx;
            cy = my;
          }
          const k = i * 4;
          this.coords[k + 0] = ax;
          this.coords[k + 1] = ay;
          this.coords[k + 2] = bx;
          this.coords[k + 3] = by;
        }
      }
      createTile(terrain) {
        return new MartiniTile(terrain, this);
      }
    }
    class MartiniTile {
      constructor(terrain, martini) {
        const size = martini.gridSize;
        if (terrain.length !== size * size) throw new Error(
          `Expected terrain data of length ${size * size} (${size} x ${size}), got ${terrain.length}.`
        );
        this.terrain = terrain;
        this.martini = martini;
        this.errors = new Float32Array(terrain.length);
        this.update();
      }
      update() {
        const { numTriangles, numParentTriangles, coords, gridSize: size } = this.martini;
        const { terrain, errors } = this;
        for (let i = numTriangles - 1; i >= 0; i--) {
          const k = i * 4;
          const ax = coords[k + 0];
          const ay = coords[k + 1];
          const bx = coords[k + 2];
          const by = coords[k + 3];
          const mx = ax + bx >> 1;
          const my = ay + by >> 1;
          const cx = mx + my - ay;
          const cy = my + ax - mx;
          const interpolatedHeight = (terrain[ay * size + ax] + terrain[by * size + bx]) / 2;
          const middleIndex = my * size + mx;
          const middleError = Math.abs(interpolatedHeight - terrain[middleIndex]);
          errors[middleIndex] = Math.max(errors[middleIndex], middleError);
          if (i < numParentTriangles) {
            const leftChildIndex = (ay + cy >> 1) * size + (ax + cx >> 1);
            const rightChildIndex = (by + cy >> 1) * size + (bx + cx >> 1);
            errors[middleIndex] = Math.max(errors[middleIndex], errors[leftChildIndex], errors[rightChildIndex]);
          }
        }
      }
      getMesh(maxError = 0) {
        const { gridSize: size, indices } = this.martini;
        const { errors } = this;
        let numVertices = 0;
        let numTriangles = 0;
        const max = size - 1;
        indices.fill(0);
        function countElements(ax, ay, bx, by, cx, cy) {
          const mx = ax + bx >> 1;
          const my = ay + by >> 1;
          if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
            countElements(cx, cy, ax, ay, mx, my);
            countElements(bx, by, cx, cy, mx, my);
          } else {
            indices[ay * size + ax] = indices[ay * size + ax] || ++numVertices;
            indices[by * size + bx] = indices[by * size + bx] || ++numVertices;
            indices[cy * size + cx] = indices[cy * size + cx] || ++numVertices;
            numTriangles++;
          }
        }
        countElements(0, 0, max, max, max, 0);
        countElements(max, max, 0, 0, 0, max);
        const vertices = new Uint16Array(numVertices * 2);
        const triangles = new Uint32Array(numTriangles * 3);
        let triIndex = 0;
        function processTriangle(ax, ay, bx, by, cx, cy) {
          const mx = ax + bx >> 1;
          const my = ay + by >> 1;
          if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
            processTriangle(cx, cy, ax, ay, mx, my);
            processTriangle(bx, by, cx, cy, mx, my);
          } else {
            const a = indices[ay * size + ax] - 1;
            const b = indices[by * size + bx] - 1;
            const c = indices[cy * size + cx] - 1;
            vertices[2 * a] = ax;
            vertices[2 * a + 1] = ay;
            vertices[2 * b] = bx;
            vertices[2 * b + 1] = by;
            vertices[2 * c] = cx;
            vertices[2 * c + 1] = cy;
            triangles[triIndex++] = a;
            triangles[triIndex++] = b;
            triangles[triIndex++] = c;
          }
        }
        processTriangle(0, 0, max, max, max, 0);
        processTriangle(max, max, 0, 0, 0, max);
        return { vertices, triangles };
      }
      // https://github.com/mapbox/martini/pull/12/commits/4677d0c5cfe446ccc96d3982ff4f442cddba5063
      getMeshWithSkirts(maxError = 0) {
        const { gridSize: size, indices } = this.martini;
        const { errors } = this;
        let numVertices = 0;
        let numTriangles = 0;
        const max = size - 1;
        let aIndex, bIndex, cIndex = 0;
        let leftSkirtIndices = [];
        let rightSkirtIndices = [];
        let bottomSkirtIndices = [];
        let topSkirtIndices = [];
        indices.fill(0);
        function countElements(ax, ay, bx, by, cx, cy) {
          const mx = ax + bx >> 1;
          const my = ay + by >> 1;
          if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
            countElements(cx, cy, ax, ay, mx, my);
            countElements(bx, by, cx, cy, mx, my);
          } else {
            aIndex = ay * size + ax;
            bIndex = by * size + bx;
            cIndex = cy * size + cx;
            if (indices[aIndex] === 0) {
              if (ax === 0)
                leftSkirtIndices.push(numVertices);
              else if (ax === max) {
                rightSkirtIndices.push(numVertices);
              }
              if (ay === 0)
                bottomSkirtIndices.push(numVertices);
              else if (ay === max)
                topSkirtIndices.push(numVertices);
              indices[aIndex] = ++numVertices;
            }
            if (indices[bIndex] === 0) {
              if (bx === 0)
                leftSkirtIndices.push(numVertices);
              else if (bx === max)
                rightSkirtIndices.push(numVertices);
              if (by === 0)
                bottomSkirtIndices.push(numVertices);
              else if (by === max)
                topSkirtIndices.push(numVertices);
              indices[bIndex] = ++numVertices;
            }
            if (indices[cIndex] === 0) {
              if (cx === 0)
                leftSkirtIndices.push(numVertices);
              else if (cx === max)
                rightSkirtIndices.push(numVertices);
              if (cy === 0)
                bottomSkirtIndices.push(numVertices);
              else if (cy === max)
                topSkirtIndices.push(numVertices);
              indices[cIndex] = ++numVertices;
            }
            numTriangles++;
          }
        }
        countElements(0, 0, max, max, max, 0);
        countElements(max, max, 0, 0, 0, max);
        const numTotalVertices = (numVertices + leftSkirtIndices.length + rightSkirtIndices.length + bottomSkirtIndices.length + topSkirtIndices.length) * 2;
        const numTotalTriangles = (numTriangles + (leftSkirtIndices.length - 1) * 2 + (rightSkirtIndices.length - 1) * 2 + (bottomSkirtIndices.length - 1) * 2 + (topSkirtIndices.length - 1) * 2) * 3;
        const vertices = new Uint16Array(numTotalVertices);
        const triangles = new Uint32Array(numTotalTriangles);
        let triIndex = 0;
        function processTriangle(ax, ay, bx, by, cx, cy) {
          const mx = ax + bx >> 1;
          const my = ay + by >> 1;
          if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
            processTriangle(cx, cy, ax, ay, mx, my);
            processTriangle(bx, by, cx, cy, mx, my);
          } else {
            const a = indices[ay * size + ax] - 1;
            const b = indices[by * size + bx] - 1;
            const c = indices[cy * size + cx] - 1;
            vertices[2 * a] = ax;
            vertices[2 * a + 1] = ay;
            vertices[2 * b] = bx;
            vertices[2 * b + 1] = by;
            vertices[2 * c] = cx;
            vertices[2 * c + 1] = cy;
            triangles[triIndex++] = a;
            triangles[triIndex++] = b;
            triangles[triIndex++] = c;
          }
        }
        processTriangle(0, 0, max, max, max, 0);
        processTriangle(max, max, 0, 0, 0, max);
        leftSkirtIndices.sort((a, b) => {
          return vertices[2 * a + 1] - vertices[2 * b + 1];
        });
        rightSkirtIndices.sort((a, b) => {
          return vertices[2 * b + 1] - vertices[2 * a + 1];
        });
        bottomSkirtIndices.sort((a, b) => {
          return vertices[2 * b] - vertices[2 * a];
        });
        topSkirtIndices.sort((a, b) => {
          return vertices[2 * a] - vertices[2 * b];
        });
        let skirtIndex = numVertices * 2;
        let currIndex, nextIndex, currentSkirt, nextSkirt, skirtLength = 0;
        function constructSkirt(skirt) {
          skirtLength = skirt.length;
          for (var i = 0; i < skirtLength - 1; i++) {
            currIndex = skirt[i];
            nextIndex = skirt[i + 1];
            currentSkirt = skirtIndex / 2;
            nextSkirt = (skirtIndex + 2) / 2;
            vertices[skirtIndex++] = vertices[2 * currIndex];
            vertices[skirtIndex++] = vertices[2 * currIndex + 1];
            triangles[triIndex++] = currIndex;
            triangles[triIndex++] = currentSkirt;
            triangles[triIndex++] = nextIndex;
            triangles[triIndex++] = currentSkirt;
            triangles[triIndex++] = nextSkirt;
            triangles[triIndex++] = nextIndex;
          }
          vertices[skirtIndex++] = vertices[2 * skirt[skirtLength - 1]];
          vertices[skirtIndex++] = vertices[2 * skirt[skirtLength - 1] + 1];
        }
        constructSkirt(leftSkirtIndices);
        constructSkirt(rightSkirtIndices);
        constructSkirt(bottomSkirtIndices);
        constructSkirt(topSkirtIndices);
        return { vertices, triangles, numVerticesWithoutSkirts: numVertices };
      }
    }

    const r2d = 180 / Math.PI;
    function tile2lon(x, z) {
        return (x / Math.pow(2, z)) * 360 - 180;
    }
    function tile2lat(y, z) {
        const n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
        return r2d * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    }
    /**
     * Get the bbox of a tile
     *
     * const bbox = tileToBBOX([5, 10, 10])
     * //=bbox
     */
    function tileToBBOX(tile) {
        const e = tile2lon(tile[0] + 1, tile[2]);
        const w = tile2lon(tile[0], tile[2]);
        const s = tile2lat(tile[1] + 1, tile[2]);
        const n = tile2lat(tile[1], tile[2]);
        return [w, s, e, n];
    }
    /**
     * Get the tile one zoom level lower
     *
     * const tile = getParent([5, 10, 10])
     * //=tile
     */
    function getParent(tile) {
        return [tile[0] >> 1, tile[1] >> 1, tile[2] - 1];
    }

    const MERC = "merc";
    const R = 6378137;
    const D2R = Math.PI / 180;
    function lonLatToWebMerctor(lon, lat) {
      const x = R * lon * D2R;
      const y = R * Math.log(Math.tan(Math.PI * 0.25 + lat * D2R * 0.5));
      return [x, y];
    }
    function toRadians(n) {
      return n * Math.PI / 180;
    }
    const ellipsoidsWgs84 = { a: 6378137, f: 1 / 298.257223563 };
    const mgrsLatBands = "CDEFGHJKLMNPQRSTUVWXX";
    const falseEasting = 5e5;
    const falseNorthing = 1e7;
    function lonLatToUtm(lon, lat, zoneOverride) {
      if (!(-80 <= lat && lat <= 84)) throw new RangeError(`latitude ‘${lat}’ outside UTM limits`);
      let zone = zoneOverride || Math.floor((lon + 180) / 6) + 1;
      let λ0 = toRadians((zone - 1) * 6 - 180 + 3);
      const latBand = mgrsLatBands.charAt(Math.floor(lat / 8 + 10));
      if (zone === 31 && latBand === "V" && lon >= 3) {
        zone++;
        λ0 += toRadians(6);
      } else if (zone === 32 && latBand === "X" && lon < 9) {
        zone--;
        λ0 -= toRadians(6);
      } else if (zone === 32 && latBand === "X" && lon >= 9) {
        zone++;
        λ0 += toRadians(6);
      } else if (zone === 34 && latBand === "X" && lon < 21) {
        zone--;
        λ0 -= toRadians(6);
      } else if (zone === 34 && latBand === "X" && lon >= 21) {
        zone++;
        λ0 += toRadians(6);
      } else if (zone === 36 && latBand === "X" && lon < 33) {
        zone--;
        λ0 -= toRadians(6);
      } else if (zone === 36 && latBand === "X" && lon >= 33) {
        zone++;
        λ0 += toRadians(6);
      }
      const φ = toRadians(lat);
      const λ = toRadians(lon) - λ0;
      const { a, f } = ellipsoidsWgs84;
      const k0 = 0.9996;
      const e = Math.sqrt(f * (2 - f));
      const n = f / (2 - f);
      const n2 = n * n, n3 = n * n2, n4 = n * n3, n5 = n * n4, n6 = n * n5;
      const cosλ = Math.cos(λ), sinλ = Math.sin(λ);
      const τ = Math.tan(φ);
      const σ = Math.sinh(e * Math.atanh(e * τ / Math.sqrt(1 + τ * τ)));
      const τʹ = τ * Math.sqrt(1 + σ * σ) - σ * Math.sqrt(1 + τ * τ);
      const ξʹ = Math.atan2(τʹ, cosλ);
      const ηʹ = Math.asinh(sinλ / Math.sqrt(τʹ * τʹ + cosλ * cosλ));
      const A = a / (1 + n) * (1 + 1 / 4 * n2 + 1 / 64 * n4 + 1 / 256 * n6);
      const α = [
        null,
        // note α is one-based array (6th order Krüger expressions)
        1 / 2 * n - 2 / 3 * n2 + 5 / 16 * n3 + 41 / 180 * n4 - 127 / 288 * n5 + 7891 / 37800 * n6,
        13 / 48 * n2 - 3 / 5 * n3 + 557 / 1440 * n4 + 281 / 630 * n5 - 1983433 / 1935360 * n6,
        61 / 240 * n3 - 103 / 140 * n4 + 15061 / 26880 * n5 + 167603 / 181440 * n6,
        49561 / 161280 * n4 - 179 / 168 * n5 + 6601661 / 7257600 * n6,
        34729 / 80640 * n5 - 3418889 / 1995840 * n6,
        212378941 / 319334400 * n6
      ];
      let ξ = ξʹ;
      for (let j = 1; j <= 6; j++) ξ += α[j] * Math.sin(2 * j * ξʹ) * Math.cosh(2 * j * ηʹ);
      let η = ηʹ;
      for (let j = 1; j <= 6; j++) η += α[j] * Math.cos(2 * j * ξʹ) * Math.sinh(2 * j * ηʹ);
      let x = k0 * A * η;
      let y = k0 * A * ξ;
      x = x + falseEasting;
      if (y < 0) y = y + falseNorthing;
      return [x, y];
    }

    class TerrainUtil {
      /**
       * 从图片中解码地形数据
       * @param bitmap 图像数据
       * @param size 瓦片大小
       * @returns 地形数据
       */
      static getFromBitmap(bitmap, size = 256) {
        if (!this.offscreencanvas) {
          this.offscreencanvas = new OffscreenCanvas(512, 512);
        }
        const ctx = this.offscreencanvas.getContext("2d");
        if (!ctx) {
          throw new Error("Get context 2d error.");
        }
        ctx.drawImage(bitmap, 0, 0, size, size);
        const data = ctx.getImageData(0, 0, size, size).data;
        const gridSize = size + 1;
        const terrain = new Float32Array(gridSize * gridSize);
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            const k = (y * size + x) * 4;
            const r = data[k + 0];
            const g = data[k + 1];
            const b = data[k + 2];
            terrain[y * gridSize + x] = (r * 256 * 256 + g * 256 + b) / 10 - 1e4;
          }
        }
        for (let x = 0; x < gridSize - 1; x++) {
          terrain[gridSize * (gridSize - 1) + x] = terrain[gridSize * (gridSize - 2) + x];
        }
        for (let y = 0; y < gridSize; y++) {
          terrain[gridSize * y + gridSize - 1] = terrain[gridSize * y + gridSize - 2];
        }
        return terrain;
      }
      /**
       * 从源地形数据中裁切出一部分
       * @param sourceTerrain 源地形数据
       * @param sourceSize 源地形大小
       * @param x 裁切开始位置 x 坐标
       * @param y 裁切开始位置 y 坐标
       * @param size 裁切大小
       * @returns 裁切后的地形数据
       */
      static clip(sourceTerrain, sourceSize, x, y, size) {
        if (x + size > sourceSize + 1 || y + size > sourceSize + 1) {
          console.log("clip: ", x, y, size);
          throw new RangeError("Clip terrain error");
        }
        const gridSize = size + 1;
        const sourceGridSize = sourceSize + 1;
        const terrain = new Float32Array(gridSize * gridSize);
        for (let row = 0; row < gridSize; row++) {
          for (let col = 0; col < gridSize; col++) {
            terrain[row * gridSize + col] = sourceTerrain[(row + y) * sourceGridSize + (col + x)];
          }
        }
        return terrain;
      }
      static getChildPosition(bigTileNo, bigTileSize, smallTileNo) {
        const bigBbox = tileToBBOX(bigTileNo);
        const smallBbox = tileToBBOX(smallTileNo);
        const bigWidth = bigBbox[2] - bigBbox[0];
        const bigHeight = bigBbox[3] - bigBbox[1];
        const left = (smallBbox[0] - bigBbox[0]) / bigWidth;
        const top = (bigBbox[3] - smallBbox[3]) / bigHeight;
        const x = Math.round(left * bigTileSize);
        const y = Math.round(top * bigTileSize);
        return { x, y, bigBbox, smallBbox };
      }
    }

    class MartiniTileUtil {
      static {
        this.terrainDataMap = /* @__PURE__ */ new Map();
      }
      static {
        this.fetchingMap = /* @__PURE__ */ new Map();
      }
      static {
        this.martiniMap = /* @__PURE__ */ new Map();
      }
      static {
        this.baseSize = 512;
      }
      static getMartini(size) {
        let martini = this.martiniMap.get(size);
        if (!martini) {
          martini = new Martini(size + 1);
          this.martiniMap.set(size, martini);
        }
        return martini;
      }
      /**
       * 从缓存的地形里找到指定瓦片编号的祖先地形数据及其编号
       * @param tileNo 瓦片编号
       * @param maxZ 瓦片数据源所能提供的最大层级
       * @returns 地形数据，及地形所对应的瓦片编号
       */
      static findAncestorTerrainData(tileNo, maxZ) {
        const z = tileNo[2];
        let terrain = void 0;
        let parentTileNo = tileNo;
        const maxClip = z >= maxZ ? z - maxZ : 5;
        for (let i = 0; i < maxClip; i++) {
          parentTileNo = getParent(parentTileNo);
          const _terrain = this.terrainDataMap.get(parentTileNo.join("-"));
          if (_terrain) {
            terrain = _terrain;
            break;
          }
        }
        return { terrain, tileNo: parentTileNo };
      }
      /**
       * 获取地形数据，根据情况从缓存读取祖先地形并切割，或直接从url获取地形图片并解码
       * @param tileNo 瓦片编号
       * @param url 瓦片下载地址
       * @param maxZ 瓦片数据源所能提供的最大层级，大于此层级将从缓存切割瓦片而非下载
       * @returns 地形数据，地形大小，及地形对应的bbox
       */
      static async getTerrainData(tileNo, url, maxZ) {
        const id = tileNo.join("-");
        const { baseSize } = this;
        const { terrain, tileNo: parentTileNo } = this.findAncestorTerrainData(tileNo, maxZ);
        if (terrain) {
          let clipTimes = tileNo[2] - parentTileNo[2];
          let size = this.baseSize;
          while (clipTimes > 0) {
            size = size / 2;
            clipTimes--;
          }
          const { x, y, smallBbox } = TerrainUtil.getChildPosition(parentTileNo, baseSize, tileNo);
          const _terrain = TerrainUtil.clip(terrain, baseSize, x, y, size);
          return { terrain: _terrain, size, bbox: smallBbox };
        }
        const fetch = new Fetch(url, { cache: "force-cache", mode: "cors" });
        this.fetchingMap.set(id, fetch);
        try {
          const res = await fetch.ready();
          const blob = await res.blob();
          const bitmap = await createImageBitmap(blob);
          const _terrain = TerrainUtil.getFromBitmap(bitmap, baseSize);
          this.terrainDataMap.set(id, _terrain);
          return { terrain: _terrain, size: baseSize, bbox: tileToBBOX(tileNo) };
        } finally {
          this.fetchingMap.delete(id);
        }
      }
      /**
       * 根据瓦片编号获取模型数据
       * @param tileNo 瓦片编号
       * @param url 瓦片下载地址
       * @param maxZ 瓦片数据源所能提供的最大层级
       * @param coordType 坐标类型，默认 MERC
       * @param utmZone 当坐标类型为utm时的区号。
       * @returns 几何体顶点、UV、顶点索引
       */
      static async getTileGeometryAttributes(tileNo, url, maxZ, coordType = MERC, utmZone) {
        const { terrain, size, bbox } = await this.getTerrainData(tileNo, url, maxZ);
        const martini = this.getMartini(size);
        const martiniTile = martini.createTile(terrain);
        const { vertices, triangles, numVerticesWithoutSkirts } = martiniTile.getMeshWithSkirts(10);
        const numOfVertices = vertices.length / 2;
        const positions = new Float32Array(numOfVertices * 3);
        const uv = new Float32Array(numOfVertices * 2);
        const z = tileNo[2];
        const gridSize = size + 1;
        const coordConvertMethod = coordType === MERC ? lonLatToWebMerctor : lonLatToUtm;
        for (let i = 0; i < numOfVertices; i++) {
          const x = vertices[2 * i];
          const y = vertices[2 * i + 1];
          const pixelIdx = y * gridSize + x;
          const lon = (bbox[2] - bbox[0]) * x / size + bbox[0];
          const lat = (bbox[3] - bbox[1]) * (size - y) / size + bbox[1];
          const [vx, vy] = coordConvertMethod(lon, lat, utmZone);
          const vz = terrain[pixelIdx];
          const skirtsHeight = (21 - z) * 10;
          positions[3 * i] = vx;
          positions[3 * i + 1] = vy;
          positions[3 * i + 2] = i >= numVerticesWithoutSkirts ? vz - skirtsHeight : vz;
          uv[2 * i + 0] = x / size;
          uv[2 * i + 1] = (size - y) / size;
        }
        return { positions, uv, triangles };
      }
    }

    self.onmessage = async (e) => {
      const { id, tileNo, maxZ, url, coordType, utmZone, abort, dispose } = e.data;
      if (abort) {
        MartiniTileUtil.fetchingMap.get(id)?.abort();
        MartiniTileUtil.fetchingMap.delete(id);
        self.postMessage({ id, error: true });
        return;
      }
      if (dispose) {
        MartiniTileUtil.terrainDataMap.delete(id);
        return;
      }
      try {
        const { positions, uv, triangles } = await MartiniTileUtil.getTileGeometryAttributes(tileNo, url, maxZ, coordType, utmZone);
        const transferableObjects = [
          positions.buffer,
          uv.buffer,
          triangles.buffer
        ];
        self.postMessage({ id, positions, uv, triangles }, transferableObjects);
      } finally {
        MartiniTileUtil.fetchingMap.delete(id);
      }
    };

})();
//# sourceMappingURL=MartiniWorker-C6XUu3Yw.js.map
