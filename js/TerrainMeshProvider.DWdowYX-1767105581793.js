import { importShared } from './index.BxB45aCK1767105581793.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from './ExtensionUtilities.DzCxl7kb1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';

const d2r = Math.PI / 180;
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
 * Get the tile for a point at a specified zoom level
 *
 * const tile = pointToTile(1, 1, 20)
 * //=tile
 */
function pointToTile(lon, lat, z) {
    const tile = pointToTileFraction(lon, lat, z);
    tile[0] = Math.floor(tile[0]);
    tile[1] = Math.floor(tile[1]);
    return tile;
}
/**
 * Get the precise fractional tile location for a point at a zoom level
 *
 * const tile = pointToTileFraction(30.5, 50.5, 15)
 * //=tile
 */
function pointToTileFraction(lon, lat, z) {
    const sin = Math.sin(lat * d2r);
    const z2 = Math.pow(2, z);
    let x = z2 * (lon / 360 + 0.5);
    const y = z2 * (0.5 - (0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI);
    // Wrap Tile X
    x = x % z2;
    if (x < 0)
        x = x + z2;
    return [x, y, z];
}
/**
 * Get the 4 tiles one zoom level higher
 *
 * const tiles = getChildren([5, 10, 10])
 * //=tiles
 */
function getChildren(tile) {
    return [
        [tile[0] * 2, tile[1] * 2, tile[2] + 1],
        [tile[0] * 2 + 1, tile[1] * 2, tile[2] + 1],
        [tile[0] * 2 + 1, tile[1] * 2 + 1, tile[2] + 1],
        [tile[0] * 2, tile[1] * 2 + 1, tile[2] + 1],
    ];
}
function getBboxZoom(bbox) {
    const MAX_ZOOM = 28;
    for (let z = 0; z < MAX_ZOOM; z++) {
        const mask = 1 << (32 - (z + 1));
        if ((bbox[0] & mask) !== (bbox[2] & mask) ||
            (bbox[1] & mask) !== (bbox[3] & mask)) {
            return z;
        }
    }
    return MAX_ZOOM;
}
/**
 * Get the smallest tile to cover a bbox
 *
 * const tile = bboxToTile([ -178, 84, -177, 85 ])
 * //=tile
 */
function bboxToTile(bboxCoords) {
    const min = pointToTile(bboxCoords[0], bboxCoords[1], 32);
    const max = pointToTile(bboxCoords[2], bboxCoords[3], 32);
    const bbox = [min[0], min[1], max[0], max[1]];
    const z = getBboxZoom(bbox);
    if (z === 0)
        return [0, 0, 0];
    const x = bbox[0] >>> (32 - z);
    const y = bbox[1] >>> (32 - z);
    return [x, y, z];
}

const {Box3,Object3D: Object3D$1,Mesh: Mesh$2} = await importShared('three');

class Tile extends Object3D$1 {
  constructor() {
    super();
    this.isDisposed = false;
    this.isReady = false;
    this.childrenTiles = [];
    this.boundingBoxWorld = new Box3();
  }
  init(tileNo, map, parentTile) {
    this.tileNo = tileNo;
    Object.freeze(this.tileNo);
    this.map = map;
    this.parentTile = parentTile;
    this.visible = false;
    this.renderOrder = tileNo[2];
    this.ready();
  }
  async ready() {
    this.content = await this.map.provider.getTile(this.tileNo);
    if (this.isDisposed) {
      return;
    }
    this.add(this.content);
    this.boundingBoxWorld.setFromObject(this.content).applyMatrix4(this.matrixWorld.makeRotationX(-Math.PI / 2));
    this.map.add(this);
    this.visible = true;
    this.isReady = true;
    if (this.parentTile) {
      const siblings = this.parentTile.childrenTiles;
      let readyCount = 0;
      for (let i = 0; i < siblings.length; i++) {
        if (siblings[i].isReady) {
          readyCount++;
        }
      }
      if (readyCount === 4) {
        this.parentTile.visible = false;
      }
    }
    this.update();
  }
  update() {
    if (!this.isReady || this.isDisposed) {
      return;
    }
    const { cameraFrustum, cameraWorldPosition } = this.map;
    if (!cameraFrustum.intersectsBox(this.boundingBoxWorld)) {
      this.simplify();
      return;
    }
    if (this.content instanceof Mesh$2 && this.map.provider.filter) {
      this.content.material.uniforms.t_Matrix.value = this.map.provider.getTranMatrix();
    }
    let distance = this.boundingBoxWorld.distanceToPoint(cameraWorldPosition);
    const z = this.tileNo[2];
    distance /= Math.pow(2, this.map.provider.maxZoom - z);
    if (distance < 60) {
      this.subdivide();
    }
    if (distance > 80) {
      this.simplify();
    }
    const sortedChildren = this.childrenTiles.sort((a, b) => a.boundingBoxWorld.distanceToPoint(cameraWorldPosition) - b.boundingBoxWorld.distanceToPoint(cameraWorldPosition));
    sortedChildren.forEach((child) => child.update());
  }
  subdivide() {
    const { isReady, tileNo, map, childrenTiles } = this;
    const z = tileNo[2];
    if (!isReady || childrenTiles.length > 0 || z >= map.maxZoom) {
      return;
    }
    const childrenTilesNo = getChildren(tileNo);
    childrenTilesNo.forEach((tileNo2) => {
      const tile = new Tile();
      tile.init(tileNo2, map, this);
      childrenTiles.push(tile);
    });
  }
  simplify() {
    this.childrenTiles.forEach((tile) => tile.dispose());
    this.childrenTiles = [];
    this.visible = true;
  }
  dispose() {
    this.map.remove(this);
    this.map.provider.abort(this.tileNo);
    this.childrenTiles.forEach((child) => child.dispose());
    this.childrenTiles = [];
    this.parentTile = void 0;
    if (this.content) {
      this.map.provider.dispose(this.tileNo, this.content);
      this.content = void 0;
    }
    this.isDisposed = true;
  }
}

const {Frustum,Matrix4: Matrix4$1,Object3D,Vector3: Vector3$1,BufferGeometry: BufferGeometry$1,Mesh: Mesh$1} = await importShared('three');
let Map$1 = class Map extends Object3D {
  constructor() {
    super();
    this.bbox = [74.390592, 6.900905, 134.071423, 54.318199];
    this.maxZoom = 20;
    this.rootForward = 0;
    this.cameraFrustum = new Frustum();
    this.cameraWorldPosition = new Vector3$1();
    this.cameraProjectionMatrix = new Matrix4$1();
    this.lastCameraProjectionMatrix = new Matrix4$1();
    this.lastCameraWorldPosition = new Vector3$1();
    this.rootTiles = [];
    this.lastUpdateTime = 0;
    if (!BufferGeometry$1.prototype.computeBoundsTree) {
      BufferGeometry$1.prototype.computeBoundsTree = computeBoundsTree;
    }
    if (!BufferGeometry$1.prototype.disposeBoundsTree) {
      BufferGeometry$1.prototype.disposeBoundsTree = disposeBoundsTree;
    }
    Mesh$1.prototype.raycast = acceleratedRaycast;
  }
  initRootTiles() {
    if (this.rootForward > 3) {
      console.warn("rootForward needs to be 0 - 3.");
      this.rootForward = 3;
    }
    if (this.rootForward < 0) {
      console.warn("rootForward needs to be 0 - 3.");
      this.rootForward = 0;
    }
    const rootTileNos = [];
    let tileNos = [bboxToTile(this.bbox)];
    let rootForward = this.rootForward;
    while (rootForward > 0) {
      const tileNosCopy = [...tileNos];
      tileNos = [];
      tileNosCopy.forEach((t) => {
        const children = getChildren(t);
        tileNos.push(...children);
      });
      rootForward--;
    }
    rootTileNos.push(...tileNos);
    rootTileNos.forEach((no) => {
      const tile = new Tile();
      tile.init(no, this);
      this.rootTiles.push(tile);
    });
  }
  update() {
    if (!this.visible || !this.camera) {
      return;
    }
    const now = Date.now();
    if (now - this.lastUpdateTime < 300) {
      return;
    }
    if (this.rootTiles.length === 0) {
      this.initRootTiles();
      return;
    }
    this.camera.getWorldPosition(this.cameraWorldPosition);
    this.cameraProjectionMatrix.multiplyMatrices(
      this.camera.projectionMatrix,
      this.camera.matrixWorldInverse
    );
    if (this.cameraWorldPosition.equals(this.lastCameraWorldPosition) && this.cameraProjectionMatrix.equals(this.lastCameraProjectionMatrix)) {
      return;
    }
    this.cameraFrustum.setFromProjectionMatrix(this.cameraProjectionMatrix);
    this.rootTiles.forEach((tile) => tile.update());
    this.lastCameraProjectionMatrix.copy(this.cameraProjectionMatrix);
    this.lastCameraWorldPosition.copy(this.cameraWorldPosition);
    this.lastUpdateTime = now;
  }
  dispose() {
    throw new Error("[Map.dispose] Method not implemented.");
  }
  regenerate() {
    throw new Error("[Map.regenerate] Method not implemented.");
  }
};

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

let offscreencanvas;
async function getTileBitmap(tileNo, fetch, debug = false) {
  const res = await fetch.ready();
  const blob = await res.blob();
  const bitmap = await createImageBitmap(blob, debug ? void 0 : { imageOrientation: "flipY" });
  if (!debug) {
    return bitmap;
  }
  if (!offscreencanvas) {
    offscreencanvas = new OffscreenCanvas(256, 256);
  }
  const ctx = offscreencanvas.getContext("2d");
  if (!ctx) {
    throw new Error('Offscreencanvas.getContext("2d") error!');
  }
  const { width, height } = offscreencanvas;
  ctx.drawImage(bitmap, 0, 0);
  ctx.rect(0, 0, width, height);
  ctx.strokeStyle = "#00FFFF";
  ctx.font = "20px Arial";
  ctx.stroke();
  ctx.fillStyle = "#FF4444";
  ctx.fillText(`${tileNo[0]}`, 10, 30);
  ctx.fillStyle = "#44FF44";
  ctx.fillText(`${tileNo[1]}`, 10, 55);
  ctx.fillStyle = "#66AAFF";
  ctx.fillText(`${tileNo[2]}`, 10, 80);
  return await createImageBitmap(offscreencanvas, { imageOrientation: "flipY" });
}

class PromiseWorker {
  constructor(workerFactory) {
    this.terminated = true;
    this.map = /* @__PURE__ */ new Map();
    this.worker = new workerFactory();
    this.worker.onmessage = this.onMessage.bind(this);
    this.terminated = false;
  }
  async postMessage(message) {
    if (this.terminated) {
      return;
    }
    this.worker.postMessage(message);
    return new Promise((resolve, _reject) => {
      this.map.set(message.id, resolve);
    });
  }
  onMessage(e) {
    const { id, error } = e.data;
    const resolve = this.map.get(id);
    if (resolve && !error) {
      resolve(e.data);
    }
    this.map.delete(id);
  }
  terminate() {
    this.worker.onmessage = null;
    this.worker.terminate();
    this.terminated = true;
    this.map.clear();
  }
}

function WorkerWrapper$1(options) {
          return new Worker(
            ""+new URL('../static/MapWorker-D92lukyk.js', import.meta.url).href+"",
            {
        
        name: options?.name
      }
          );
        }

const {Texture} = await importShared('three');
class MapProvider {
  constructor() {
    this.maxZoom = 20;
    this.source = "https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s&x=[x]&y=[y]&z=[z]";
    this.showTileNo = false;
    this._useWorker = false;
    this.fetching = /* @__PURE__ */ new Map();
  }
  set useWorker(use) {
    this._useWorker = use;
    if (!this._useWorker) {
      this._worker?.terminate();
      this._worker = void 0;
    }
  }
  get useWorker() {
    return this._useWorker;
  }
  async getTile(tileNo) {
    const url = this.getUrl(tileNo);
    const texture = new Texture();
    if (this._useWorker) {
      if (!this._worker) {
        this._worker = new PromiseWorker(WorkerWrapper$1);
      }
      const id = this.getId(tileNo);
      const data = await this._worker.postMessage({ id, tileNo, url, debug: this.showTileNo });
      texture.image = data.bitmap;
    } else {
      const fetch = new Fetch(url, { cache: "force-cache", mode: "cors" });
      this.fetching.set(tileNo, fetch);
      try {
        texture.image = await getTileBitmap(tileNo, fetch, this.showTileNo);
      } finally {
        this.fetching.delete(tileNo);
      }
    }
    texture.needsUpdate = true;
    texture.anisotropy = 4;
    return texture;
  }
  abort(tileNo) {
    if (!this._useWorker) {
      const fetch = this.fetching.get(tileNo);
      if (fetch) {
        fetch.abort();
      }
      this.fetching.delete(tileNo);
    } else {
      this._worker?.postMessage({ id: this.getId(tileNo), abort: true });
    }
  }
  dispose(_tileNo, target) {
    target.dispose();
  }
  getId(tileNo) {
    return tileNo.join("-");
  }
  getUrl(tileNo) {
    const [x, y, z] = tileNo;
    if (this.source.indexOf("[x]") === -1) {
      return this.source.replace("{x}", x + "").replace("{y}", y + "").replace("{z}", z + "");
    } else {
      return this.source.replace("[x]", x + "").replace("[y]", y + "").replace("[z]", z + "");
    }
  }
}

const UTM = "utm";
const MERC = "merc";
const R = 6378137;
const D2R = Math.PI / 180;
function lonLatToWebMerctor(lon, lat) {
  const x = R * lon * D2R;
  const y = R * Math.log(Math.tan(Math.PI * 0.25 + lat * D2R * 0.5));
  return [x, y];
}
function webMercatorToLonLat(x, y) {
  let lon = x / (R * Math.PI) * 180;
  let lat = y / (R * Math.PI) * 180;
  lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
  return [lon, lat];
}
function toRadians(n) {
  return n * Math.PI / 180;
}
function toDegrees(n) {
  return n * 180 / Math.PI;
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
function utmToLonLat(easting, northing, zoneOverride) {
  const zone = 50;
  const z = zone;
  const falseEasting2 = 5e5;
  const { a, f } = ellipsoidsWgs84;
  const k0 = 0.9996;
  const x = easting - falseEasting2;
  const y = northing;
  const e = Math.sqrt(f * (2 - f));
  const n = f / (2 - f);
  const n2 = n * n, n3 = n * n2, n4 = n * n3, n5 = n * n4, n6 = n * n5;
  const A = a / (1 + n) * (1 + 1 / 4 * n2 + 1 / 64 * n4 + 1 / 256 * n6);
  const η = x / (k0 * A);
  const ξ = y / (k0 * A);
  const β = [
    null,
    // note β is one-based array (6th order Krüger expressions)
    1 / 2 * n - 2 / 3 * n2 + 37 / 96 * n3 - 1 / 360 * n4 - 81 / 512 * n5 + 96199 / 604800 * n6,
    1 / 48 * n2 + 1 / 15 * n3 - 437 / 1440 * n4 + 46 / 105 * n5 - 1118711 / 3870720 * n6,
    17 / 480 * n3 - 37 / 840 * n4 - 209 / 4480 * n5 + 5569 / 90720 * n6,
    4397 / 161280 * n4 - 11 / 504 * n5 - 830251 / 7257600 * n6,
    4583 / 161280 * n5 - 108847 / 3991680 * n6,
    20648693 / 638668800 * n6
  ];
  let ξʹ = ξ;
  for (let j = 1; j <= 6; j++) ξʹ -= β[j] * Math.sin(2 * j * ξ) * Math.cosh(2 * j * η);
  let ηʹ = η;
  for (let j = 1; j <= 6; j++) ηʹ -= β[j] * Math.cos(2 * j * ξ) * Math.sinh(2 * j * η);
  const sinhηʹ = Math.sinh(ηʹ);
  const sinξʹ = Math.sin(ξʹ), cosξʹ = Math.cos(ξʹ);
  const τʹ = sinξʹ / Math.sqrt(sinhηʹ * sinhηʹ + cosξʹ * cosξʹ);
  let δτi = null;
  let τi = τʹ;
  do {
    const σi = Math.sinh(e * Math.atanh(e * τi / Math.sqrt(1 + τi * τi)));
    const τiʹ = τi * Math.sqrt(1 + σi * σi) - σi * Math.sqrt(1 + τi * τi);
    δτi = (τʹ - τiʹ) / Math.sqrt(1 + τiʹ * τiʹ) * (1 + (1 - e * e) * τi * τi) / ((1 - e * e) * Math.sqrt(1 + τi * τi));
    τi += δτi;
  } while (Math.abs(δτi) > 1e-12);
  const τ = τi;
  const φ = Math.atan(τ);
  let λ = Math.atan2(sinhηʹ, cosξʹ);
  const λ0 = toRadians((z - 1) * 6 - 180 + 3);
  λ += λ0;
  const lat = Number(toDegrees(φ).toFixed(14));
  const lon = Number(toDegrees(λ).toFixed(14));
  return [lon, lat];
}

const {BufferAttribute: BufferAttribute$1,PlaneGeometry} = await importShared('three');
class PlaneProvider {
  constructor() {
    this.utmZone = 50;
    this.coordType = UTM;
    this.maxZoom = 20;
  }
  async getTile(tileNo) {
    const geometry = new PlaneGeometry();
    const bbox = tileToBBOX(tileNo);
    const lt = this.convertCoordinate(bbox[0], bbox[3]);
    const rt = this.convertCoordinate(bbox[2], bbox[3]);
    const lb = this.convertCoordinate(bbox[0], bbox[1]);
    const rb = this.convertCoordinate(bbox[2], bbox[1]);
    const vertex = new Float32Array([
      lt[0],
      lt[1],
      0,
      rt[0],
      rt[1],
      0,
      lb[0],
      lb[1],
      0,
      rb[0],
      rb[1],
      0
    ]);
    geometry.setAttribute("position", new BufferAttribute$1(vertex, 3));
    return geometry;
  }
  abort(_tileNo) {
  }
  dispose(_tileNo, target) {
    target.dispose();
  }
  convertCoordinate(lon, lat) {
    switch (this.coordType) {
      case UTM:
        return lonLatToUtm(lon, lat, this.utmZone);
      case MERC:
        return lonLatToWebMerctor(lon, lat);
      default:
        return lonLatToWebMerctor(lon, lat);
    }
  }
}

function WorkerWrapper(options) {
          return new Worker(
            ""+new URL('../static/MartiniWorker-C6XUu3Yw.js', import.meta.url).href+"",
            {
        
        name: options?.name
      }
          );
        }

const {BufferAttribute,BufferGeometry} = await importShared('three');
class MartiniTerrainProvider {
  constructor() {
    this.maxZoom = 12;
    this.coordType = UTM;
    this.utmZone = 50;
    this._useWorker = true;
    this.source = "https://api.maptiler.com/tiles/terrain-rgb-v2/[z]/[x]/[y].webp?key=L55MtSxL94Yb4hQeWewp";
  }
  set useWorker(use) {
    this._useWorker = use;
    if (!this._useWorker) {
      this._worker?.terminate();
      this._worker = void 0;
    }
  }
  get useWorker() {
    return this._useWorker;
  }
  async getTile(tileNo) {
    if (this._useWorker) {
      return this.getInWorkerThread(tileNo);
    }
    return this.getInMainThread();
  }
  async getInMainThread() {
    const geometry = new BufferGeometry();
    return geometry;
  }
  async getInWorkerThread(tileNo) {
    if (!this._worker) {
      this._worker = new PromiseWorker(WorkerWrapper);
    }
    const message = {
      tileNo,
      id: this.getId(tileNo),
      url: this.getUrl(tileNo),
      maxZ: this.maxZoom,
      coordType: this.coordType,
      utmZone: this.utmZone
    };
    const data = await this._worker.postMessage(message);
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(data.positions, 3));
    geometry.setAttribute("uv", new BufferAttribute(data.uv, 2));
    geometry.setIndex(new BufferAttribute(data.triangles, 1));
    return geometry;
  }
  async abort(tileNo) {
    if (this._useWorker) {
      this._worker?.postMessage({ id: this.getId(tileNo), abort: true });
    }
  }
  async dispose(tileNo, target) {
    target.dispose();
    if (this._useWorker) {
      this._worker?.postMessage({ id: this.getId(tileNo), dispose: true });
    }
  }
  getId(tileNo) {
    return tileNo.join("-");
  }
  getUrl(tileNo) {
    const [x, y, z] = tileNo;
    return this.source.replace("[x]", x + "").replace("[y]", y + "").replace("[z]", z + "");
  }
}

const {Mesh,Vector3} = await importShared('three');

class TerrainMesh extends Mesh {
  constructor(geometry) {
    super(geometry);
    this.center = new Vector3();
  }
}

const {Box3Helper,MeshBasicMaterial,MeshStandardMaterial,SRGBColorSpace,Matrix4} = await importShared('three');
class TerrainMeshProvider {
  constructor(geometryProvider, textureProvider) {
    this.geometryProvider = geometryProvider;
    this.textureProvider = textureProvider;
    this.maxZoom = 20;
    this.showBoundingBox = false;
    this.wireframe = false;
    this.flatShading = false;
    this.useStandardMaterial = false;
    this.filter = null;
  }
  getTranMatrix() {
    let tranMatrix = new Matrix4();
    if (this.filter?.opposite) {
      let oppositeMat = new Matrix4();
      oppositeMat.set(
        -1,
        0,
        0,
        0,
        0,
        -1,
        0,
        0,
        0,
        0,
        -1,
        0,
        1,
        1,
        1,
        1
      );
      tranMatrix.multiply(oppositeMat);
    }
    if (this.filter?.monochrome) {
      let monochromeMat = new Matrix4();
      const rmonoWeight = this.filter.monochrome.r;
      const gmonoWeight = this.filter.monochrome.g;
      const bmonoWeight = this.filter.monochrome.b;
      monochromeMat.set(
        rmonoWeight,
        gmonoWeight,
        bmonoWeight,
        0,
        // Red channel
        rmonoWeight,
        gmonoWeight,
        bmonoWeight,
        0,
        // Green channel
        rmonoWeight,
        gmonoWeight,
        bmonoWeight,
        0,
        // Blue channel
        0,
        0,
        0,
        1
        // rmonoWeight, rmonoWeight, rmonoWeight, 0,
        // gmonoWeight, gmonoWeight, gmonoWeight, 0,
        // bmonoWeight, bmonoWeight, bmonoWeight, 0,
        // 0, 0, 0, 1
      );
      tranMatrix.multiply(monochromeMat);
    }
    if (this.filter?.genBright) {
      let genBrightMat = new Matrix4();
      const genBright = this.filter.genBright;
      genBrightMat.set(
        genBright,
        0,
        0,
        0,
        0,
        genBright,
        0,
        0,
        0,
        0,
        genBright,
        0,
        0,
        0,
        0,
        1
      );
      tranMatrix.multiply(genBrightMat);
    }
    if (this.filter?.genContrast) {
      let genContrastMat = new Matrix4();
      const genContrast1 = this.filter.genContrast;
      const genContrast2 = 0.5 * (1 - genContrast1);
      genContrastMat.set(
        genContrast1,
        0,
        0,
        0,
        0,
        genContrast1,
        0,
        0,
        0,
        0,
        genContrast1,
        0,
        genContrast2,
        genContrast2,
        genContrast2,
        1
      );
      tranMatrix.multiply(genContrastMat);
    }
    if (this.filter?.genSaturate) {
      let genSaturateMat = new Matrix4();
      const genSaturate = this.filter.genSaturate;
      const rWeight = 0.3 * (1 - genSaturate);
      const gWeight = 0.6 * (1 - genSaturate);
      const bWeight = 0.1 * (1 - genSaturate);
      genSaturateMat.set(
        rWeight + genSaturate,
        rWeight,
        rWeight,
        0,
        gWeight,
        gWeight + genSaturate,
        gWeight,
        0,
        bWeight,
        bWeight,
        bWeight + genSaturate,
        0,
        0,
        0,
        0,
        1
      );
      tranMatrix.multiply(genSaturateMat);
    }
    return tranMatrix;
  }
  async getTile(tileNo) {
    const tasks = [
      this.geometryProvider.getTile(tileNo),
      this.textureProvider.getTile(tileNo)
    ];
    const res = await Promise.all(tasks);
    const geometry = res[0];
    const texture = res[1];
    texture.colorSpace = SRGBColorSpace;
    const { wireframe, flatShading } = this;
    let material = null;
    const renderOrder = tileNo[0] + tileNo[1] + tileNo[2];
    material = this.useStandardMaterial ? new MeshStandardMaterial({ map: texture, wireframe, flatShading }) : new MeshBasicMaterial({ map: texture, wireframe });
    if (this.filter) {
      material = new B({
        baseMaterial: material,
        vertexShader: `
                varying vec2 vUv;    //顶点纹理坐标
                void main () {
                    vUv = uv;
                    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 ); 着色器会抖动
                    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    csm_Position = position * vec3(1.0);
                }
                `,
        fragmentShader: `
                uniform sampler2D e_Texture;     //纹理图像
                varying vec2 vUv;               //片元纹理坐标
                uniform mat4 t_Matrix;     //接收变换矩阵
                void main () {
                    // gl_FragColor = texture2D( e_Texture, vUv );

                    // vec4 textureColor = texture2D( e_Texture, vUv );
                    // //计算加权平均值
                    // float w_a = textureColor.r * 0.3 + textureColor.g * 0.6 + textureColor.b * 0.1;
                    // gl_FragColor = vec4(w_a, w_a, w_a, 1.0);

                    vec4 textureColor = texture2D( e_Texture, vUv );
                    //变换矩阵乘以 vec4(R,G,B,1)    --->vec4(R,G,B,1) 是齐次坐标，原本是n维的向量用一个n+1维向量来表示
                    //vec4(R,G,B,1)第四个分量不是透明度
                    vec4 transColor =  vec4(textureColor.r, textureColor.g, textureColor.b, 1.0)*t_Matrix; 
                    //设置透明度
                    transColor.a = 1.0;
                    csm_FragColor = transColor;

                    // if(vUv.x==0.0 || vUv.x==1.0 || vUv.y==0.0 || vUv.y==1.0){
                    //     gl_FragColor.a = 0.0;
                    // }
                }`,
        silent: true,
        // Disables the default warning if true
        flatShading,
        // side: THREE.FrontSide,
        // wireframe: wireframe,
        // depthTest: true,
        // depthWrite: false,
        // //开启多边形偏移
        // polygonOffset: true,
        // //当两个参数都为负值（深度减小）时，网格将被拉向摄影机（因此，位于前面）。
        // //当两个参数都为正值（增加深度）时，网格将被推离摄影机（因此，被推到后面）。
        // polygonOffsetFactor: 0,
        // polygonOffsetUnits: 1.0,
        uniforms: {
          e_Texture: {
            value: texture
          },
          t_Matrix: {
            value: this.getTranMatrix()
          }
        }
      });
    }
    const mesh = new TerrainMesh();
    mesh.renderOrder = renderOrder;
    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(mesh.center);
    geometry.center();
    geometry.computeBoundingSphere();
    geometry.computeBoundsTree();
    mesh.position.copy(mesh.center);
    mesh.geometry = geometry;
    mesh.material = material;
    if (this.showBoundingBox) {
      const boxHelper = new Box3Helper(geometry.boundingBox);
      mesh.add(boxHelper);
    }
    return mesh;
  }
  abort(tileNo) {
    this.geometryProvider.abort(tileNo);
    this.textureProvider.abort(tileNo);
  }
  dispose(tileNo, target) {
    const geometry = target.geometry;
    const material = target.material;
    if (geometry) {
      this.geometryProvider.dispose(tileNo, geometry);
    }
    if (material && material.map) {
      this.textureProvider.dispose(tileNo, material.map);
    }
    material?.dispose();
  }
}

export { MERC, Map$1 as Map, MapProvider, MartiniTerrainProvider, PlaneProvider, TerrainMeshProvider, UTM, lonLatToUtm, lonLatToWebMerctor, utmToLonLat, webMercatorToLonLat };
//# sourceMappingURL=TerrainMeshProvider.DWdowYX-1767105581793.js.map
