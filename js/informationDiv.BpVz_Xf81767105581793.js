import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';

var Lt = Object.defineProperty;
var Vt = (n, s, t) => s in n ? Lt(n, s, { enumerable: true, configurable: true, writable: true, value: t }) : n[s] = t;
var d = (n, s, t) => Vt(n, typeof s != "symbol" ? s + "" : s, t);
const {Matrix3:Gt,Frustum:xt,Vector3:K,WebGLCoordinateSystem:Tt,Matrix4:Xt,Object3D:$,Box3:D,Box3Helper:Yt$1,MeshStandardMaterial:Mt,FrontSide:Pt,BufferGeometry:Kt$1,BufferAttribute:H,LoadingManager:St,Vector2:E,Box2:zt,MeshBasicMaterial:gt,Mesh:wt,Texture:tt,CanvasTexture:It,ImageLoader:st,SRGBColorSpace:kt,FileLoader:Rt$1,MathUtils:Ft,Raycaster:Ht,Clock:jt} = await importShared('three');

const I = "0.11.9", Ct$1 = new Gt();
function Jt(n, s, t, o) {
  const e = Ct$1.set(
    n.normal.x,
    n.normal.y,
    n.normal.z,
    s.normal.x,
    s.normal.y,
    s.normal.z,
    t.normal.x,
    t.normal.y,
    t.normal.z
  );
  return o.set(-n.constant, -s.constant, -t.constant), o.applyMatrix3(e.invert()), o;
}
let Ut$1 = class Ut extends xt {
  constructor() {
    super();
    d(this, "points");
    this.points = Array(8).fill(0).map(() => new K());
  }
  setFromProjectionMatrix(t, o = Tt) {
    return super.setFromProjectionMatrix(t, o), this.calculateFrustumPoints(), this;
  }
  calculateFrustumPoints() {
    const { planes: t, points: o } = this;
    [
      [t[0], t[3], t[4]],
      // Near top left
      [t[1], t[3], t[4]],
      // Near top right
      [t[0], t[2], t[4]],
      // Near bottom left
      [t[1], t[2], t[4]],
      // Near bottom right
      [t[0], t[3], t[5]],
      // Far top left
      [t[1], t[3], t[5]],
      // Far top right
      [t[0], t[2], t[5]],
      // Far bottom left
      [t[1], t[2], t[5]]
      // Far bottom right
    ].forEach((i, l) => {
      Jt(i[0], i[1], i[2], o[l]);
    });
  }
};
var U = /* @__PURE__ */ ((n) => (n[n.none = 0] = "none", n[n.create = 1] = "create", n[n.remove = 2] = "remove", n))(U || {});
function Dt(n, s, t, o) {
  if (!n.isLeaf && n.z > t)
    return 2;
  const e = n.distRatio;
  return n.isLeaf && n.inFrustum && n.z < t && e < o && (n.showing || n.z <= s) ? 1 : !n.isLeaf && n.z >= s && e > o ? 2 : 0;
}
function w(n, s, t, o, e, i, l, r) {
  const a = new g(n, s, t);
  return a.position.set(o, e, 0), a.scale.set(i, l, r), a;
}
function Et(n, s) {
  const { x: t, y: o, z: e } = n, i = [], l = t * 2, r = e + 1, a = 0.25, c = 0.5, h = 1;
  if (e === 0 && s.projectionID === "4326") {
    const m = o, Z = 1, y = w(l, m, r, -0.25, 0, c, Z, h), W = w(l + 1, m, r, a, 0, c, Z, h);
    i.push(y, W);
  } else {
    const m = o * 2, Z = 0.5, y = w(l, m, r, -0.25, a, c, Z, h), W = w(l + 1, m, r, a, a, c, Z, h), u = w(l, m + 1, r, -0.25, -0.25, c, Z, h), L = w(l + 1, m + 1, r, a, -0.25, c, Z, h);
    i.push(y, W, u, L);
  }
  return i;
}
const N = new K(), f = new Ut$1(), Nt = new Xt(), ft = new K();
class g extends $ {
  /**
   * 构造函数
   * @param x - 瓦片X坐标，默认：0
   * @param y - 瓦片Y坐标，默认：0
   * @param z - 瓦片层级，默认：0
   */
  constructor(t = 0, o = 0, e = 0) {
    super();
    /** 瓦片x坐标 */
    d(this, "x");
    /** 瓦片y坐标 */
    d(this, "y");
    /** 瓦片层级 */
    d(this, "z");
    /** 是否为瓦片 */
    d(this, "isTile", true);
    /** 瓦片是否正在加载中 */
    d(this, "_isLoading", false);
    /** 根瓦片 */
    d(this, "_root", this);
    /* 瓦片在世界坐标系中的大小*/
    d(this, "_sizeInWorld", -1);
    /** 瓦片包围盒（世界坐标） */
    // private _bbox: Box3 | null = null;
    d(this, "_model");
    d(this, "_subTiles");
    /** 是否为脏瓦片 */
    d(this, "_isDirty", false);
    this.x = t, this.y = o, this.z = e, this.name = `Tile ${e}-${t}-${o}`, this.up.set(0, 0, 1);
  }
  /** 瓦片模型 */
  get model() {
    return this._model;
  }
  /** 子瓦片 */
  get subTiles() {
    return this._subTiles;
  }
  /** 瓦片到相机的距离比例，用于 LOD 评估，值越小瓦片越密集 */
  get distRatio() {
    const t = new K().applyMatrix4(this.matrixWorld);
    t.setY(this.model?.geometry.boundingBox?.max.z || 0);
    const e = N.distanceTo(t) / this._sizeInWorld;
    return this.inFrustum ? e * 0.8 : e * 2;
  }
  /** 瓦片是否在视锥体内 */
  get inFrustum() {
    const t = this.getBBox();
    return f.intersectsBox(t);
  }
  /** 是否为叶子瓦片 */
  get isLeaf() {
    return !this.subTiles;
  }
  /** 取得瓦片是否显示 */
  get showing() {
    return !!this.model && this.model.visible;
  }
  /** 设置瓦片是否显示 */
  set showing(t) {
    this.model ? (t && this._updateShadow(), t != this.showing && (this.model.traverse((o) => o.layers.set(t ? 0 : 31)), this.model.visible = t, this._root.dispatchEvent({ type: "tile-visible-changed", tile: this, visible: t }))) : console.assert(!t);
  }
  _needsLoad(t) {
    return t.downloadingThreads >= t.maxThreads ? false : this.model ? !this._isDirty || !this.inFrustum ? false : !this.subTiles?.some((o) => !o._isDirty) : true;
  }
  /**
   * 瓦片射线检测，仅检测视锥体中的瓦片
   */
  raycast(t) {
    return this.inFrustum;
  }
  /** 计算瓦片包围盒（世界坐标） */
  getBBox() {
    const t = new D(new K(-0.5, -0.5, 0), new K(0.5, 0.5, 0)).applyMatrix4(this.matrixWorld);
    return this.model ? t.max.setY(this.model.geometry.boundingBox?.max.z || 0) : (t.min.setY(-300), t.max.setY(9e3)), t;
  }
  /**
   * 计算瓦片size
   * @returns 瓦片大小
   */
  getTileSize() {
    if (this._sizeInWorld < 0) {
      const t = new D(new K(-0.5, -0.5, 0), new K(0.5, 0.5, 0)).applyMatrix4(this.matrixWorld);
      this._sizeInWorld = t.getSize(ft).length(), console.assert(this._sizeInWorld > 10);
    }
    return this._sizeInWorld;
  }
  _addBBox() {
    const o = this.getBBox().clone().applyMatrix4(this.matrixWorld.clone().invert()), e = new Yt$1(o, 1044480);
    e.name = "tilebox", this.add(e);
  }
  /**
   * 瓦片更新，该函数在每帧渲染中被调用
   * @param params 瓦片更新参数
   */
  update(t) {
    if (!this.parent || this._isLoading)
      return;
    this.parent instanceof g && (this._root = this.parent._root), console.assert(this._root.z === 0);
    const { loader: o, minLevel: e, camera: i } = t;
    if (this.z === 0 && (i.getWorldPosition(N), f.setFromProjectionMatrix(Nt.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse))), this.z >= e && //当前层级>地图最小层级
    this._needsLoad(o)) {
      this._startLoad(o);
      return;
    }
    this.model && o.update(this, this.model), this._updateShadow(), this.LOD(t), this.subTiles?.forEach((l) => l.update(t));
  }
  /** 更新瓦片阴影 */
  _updateShadow() {
    this.model && (this.model.castShadow = this._root.castShadow, this.model.receiveShadow = this._root.receiveShadow);
  }
  /**
   * LOD (Level of Detail).
   * @param threshold - LOD 阈值
   * @returns add or remove
   */
  LOD(t) {
    const { loader: o, minLevel: e, maxLevel: i, LODThreshold: l } = t, r = Dt(this, e, i, l);
    if (r === U.create) {
      const a = Et(this, o);
      this.add(...a), this._subTiles = a, this._subTiles.forEach((c) => {
        c.updateMatrixWorld(), c.updateMatrix(), c.getTileSize(), this._root.dispatchEvent({ type: "tile-created", tile: c });
      });
    } else r === U.remove && this.model && (this.showing = true, this.unLoad(o, false));
    return r;
  }
  /**
   * 瓦片下载完成后，检查4个兄弟瓦片全部下载完成时再显示
   */
  _checkVisible() {
    const t = this.parent;
    if (t instanceof g)
      if (t.model) {
        const o = t.subTiles;
        if (o) {
          const e = !o.some((i) => !i.model);
          o.forEach((i) => i.showing = e), t.showing = !e;
        }
      } else
        this.showing = true;
    return this;
  }
  /**
   * 下载瓦片数据
   * @param loader  - 瓦片加载器
   */
  async _startLoad(t) {
    const o = this._isDirty;
    this._isLoading = true;
    const e = await t.load(this, this.model);
    this.model && this.model.removeFromParent(), this._model = e, e.geometry.computeBoundingBox(), this.add(e), this._root.dispatchEvent({ type: "tile-visible-changed", tile: this, visible: true }), o ? this._isDirty = false : this.isLeaf && this._checkVisible(), t.debug > 1 && this._addBBox(), this._isLoading = false, this._root.dispatchEvent({ type: "tile-loaded", tile: this });
  }
  /**
   * 重新加载瓦片数据
   * @param loader - 瓦片加载器
   * @param dispose - 是否销毁瓦片树
   * @returns this
   */
  reload(t, o = true) {
    return o ? this.unLoad(t, true) : (this.traverse((e) => {
      e instanceof g && (e.model || e._isLoading) && (e._isDirty = true);
    }), this);
  }
  /**
   * 卸载瓦片 (包括其子瓦片)，释放资源
   * @param loader - 瓦片加载器
   * @param unLoadSelf - 是否卸载自身
   * @returns this
   */
  unLoad(t, o = true) {
    return this.subTiles && (this.subTiles.forEach((e) => {
      e.unLoad(t, true);
    }), this.remove(...this.subTiles), this._subTiles = void 0), o && this.model && (this.model.removeFromParent(), t.unload(this.model), this._model = void 0, this._isDirty = false, this._root.dispatchEvent({ type: "tile-unload", tile: this })), t.debug > 1 && this.getObjectByName("tilebox")?.geometry.dispose(), this;
  }
}
class et extends Mt {
  constructor(s = {}) {
    super({ transparent: false, side: Pt, ...s });
  }
}
function j(...n) {
  const s = n, t = s && s.length > 1 && s[0].constructor || null;
  if (!t)
    throw new Error(
      "concatenateTypedArrays - incorrect quantity of arguments or arguments have incompatible data types"
    );
  const o = s.reduce((l, r) => l + r.length, 0), e = new t(o);
  let i = 0;
  for (const l of s)
    e.set(l, i), i += l.length;
  return e;
}
function vt(n, s, t, o) {
  const e = Bt(s), i = e.length, l = new Float32Array(i * 6), r = new Float32Array(i * 4), a = new s.constructor(i * 6), c = new Float32Array(i * 6);
  for (let m = 0; m < i; m++)
    Qt({
      edge: e[m],
      edgeIndex: m,
      attributes: n,
      skirtHeight: t,
      newPosition: l,
      newTexcoord0: r,
      newTriangles: a,
      newNormals: c
    });
  n.position.value = j(n.position.value, l), n.texcoord.value = j(n.texcoord.value, r), n.normal.value = j(n.normal.value, c);
  const h = j(s, a);
  return {
    attributes: n,
    indices: h
  };
}
function Bt(n) {
  const s = [], t = Array.isArray(n) ? n : Array.from(n);
  for (let e = 0; e < t.length; e += 3) {
    const i = t[e], l = t[e + 1], r = t[e + 2];
    s.push([i, l], [l, r], [r, i]);
  }
  s.sort(([e, i], [l, r]) => {
    const a = Math.min(e, i), c = Math.min(l, r);
    return a !== c ? a - c : Math.max(e, i) - Math.max(l, r);
  });
  const o = [];
  for (let e = 0; e < s.length; e++)
    e + 1 < s.length && s[e][0] === s[e + 1][1] && s[e][1] === s[e + 1][0] ? e++ : o.push(s[e]);
  return o;
}
function Qt({
  edge: n,
  edgeIndex: s,
  attributes: t,
  skirtHeight: o,
  newPosition: e,
  newTexcoord0: i,
  newTriangles: l,
  newNormals: r
}) {
  const a = t.position.value.length, c = s * 2, h = c + 1;
  e.set(t.position.value.subarray(n[0] * 3, n[0] * 3 + 3), c * 3), e[c * 3 + 2] = e[c * 3 + 2] - o, e.set(t.position.value.subarray(n[1] * 3, n[1] * 3 + 3), h * 3), e[h * 3 + 2] = e[h * 3 + 2] - o, i.set(t.texcoord.value.subarray(n[0] * 2, n[0] * 2 + 2), c * 2), i.set(t.texcoord.value.subarray(n[1] * 2, n[1] * 2 + 2), h * 2);
  const m = s * 2 * 3;
  l[m] = n[0], l[m + 1] = a / 3 + h, l[m + 2] = n[1], l[m + 3] = a / 3 + h, l[m + 4] = n[0], l[m + 5] = a / 3 + c, r[m] = 0, r[m + 1] = 0, r[m + 2] = 1, r[m + 3] = 0, r[m + 4] = 0, r[m + 5] = 1;
}
function At(n) {
  if (n.length < 4)
    throw new Error(`DEM array must > 4, got ${n.length}!`);
  const s = Math.floor(Math.sqrt(n.length)), t = s, o = s, e = ot(o, t);
  return { attributes: _t(n, o, t), indices: e };
}
function _t(n, s, t) {
  const o = t * s, e = new Float32Array(o * 3), i = new Float32Array(o * 2);
  let l = 0;
  for (let r = 0; r < s; r++)
    for (let a = 0; a < t; a++) {
      const c = a / (t - 1), h = r / (s - 1);
      i[l * 2] = c, i[l * 2 + 1] = h, e[l * 3] = c - 0.5, e[l * 3 + 1] = h - 0.5, e[l * 3 + 2] = n[(s - r - 1) * t + a], l++;
    }
  return {
    // 顶点位置属性
    position: { value: e, size: 3 },
    // UV坐标属性
    texcoord: { value: i, size: 2 },
    // 法线属性
    normal: { value: nt(e, ot(s, t)), size: 3 }
  };
}
function ot(n, s) {
  const t = 6 * (s - 1) * (n - 1), o = new Uint16Array(t);
  let e = 0;
  for (let i = 0; i < n - 1; i++)
    for (let l = 0; l < s - 1; l++) {
      const r = i * s + l, a = r + 1, c = r + s, h = c + 1, m = e * 6;
      o[m] = r, o[m + 1] = a, o[m + 2] = c, o[m + 3] = c, o[m + 4] = a, o[m + 5] = h, e++;
    }
  return o;
}
function nt(n, s) {
  const t = new Float32Array(n.length);
  for (let o = 0; o < s.length; o += 3) {
    const e = s[o] * 3, i = s[o + 1] * 3, l = s[o + 2] * 3, r = n[e], a = n[e + 1], c = n[e + 2], h = n[i], m = n[i + 1], Z = n[i + 2], y = n[l], W = n[l + 1], u = n[l + 2], L = h - r, S = m - a, b = Z - c, V = y - r, X = W - a, T = u - c, G = S * T - b * X, x = b * V - L * T, M = L * X - S * V, P = Math.sqrt(G * G + x * x + M * M), z = [0, 0, 1];
    if (P > 0) {
      const Y = 1 / P;
      z[0] = G * Y, z[1] = x * Y, z[2] = M * Y;
    }
    for (let Y = 0; Y < 3; Y++)
      t[e + Y] = t[i + Y] = t[l + Y] = z[Y];
  }
  return t;
}
let F$1 = class F extends Kt$1 {
  constructor() {
    super();
    d(this, "type", "TileGeometry");
    const t = new Float32Array([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]);
    this.setData(t);
  }
  /**
   * set attribute data to geometry
   * @param data geometry or DEM data
   * @returns this
   */
  setData(t, o = 1e3) {
    let e = t instanceof Float32Array ? At(t) : t;
    e = vt(e.attributes, e.indices, o);
    const { attributes: i, indices: l } = e;
    return this.setIndex(new H(l, 1)), this.setAttribute("position", new H(i.position.value, i.position.size)), this.setAttribute("uv", new H(i.texcoord.value, i.texcoord.size)), this.setAttribute("normal", new H(i.normal.value, i.normal.size)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
};
class $t extends St {
  constructor() {
    super(...arguments);
    d(this, "onParseEnd");
  }
  parseEnd(t) {
    this.onParseEnd && this.onParseEnd(t);
  }
}
const v = { name: "GuoJF" }, p = {
  manager: new $t(),
  // Dict of dem loader
  demLoaderMap: /* @__PURE__ */ new Map(),
  // Dict of img loader
  imgLoaderMap: /* @__PURE__ */ new Map(),
  /**
   * Register material loader
   * @param loader material loader
   */
  registerMaterialLoader(n) {
    p.imgLoaderMap.set(n.dataType, n), n.info.author = n.info.author ?? v.name;
  },
  /**
   * Register geometry loader
   * @param loader geometry loader
   */
  registerGeometryLoader(n) {
    p.demLoaderMap.set(n.dataType, n), n.info.author = n.info.author ?? v.name;
  },
  /**
   * Get material loader from datasource
   * @param source datasource
   * @returns material loader
   */
  getMaterialLoader(n) {
    const s = typeof n == "string" ? n : n.dataType, t = p.imgLoaderMap.get(s);
    if (t)
      return t;
    throw `Image source dataType("${s}") is not support!`;
  },
  /**
   * Get geometry loader from datasource
   * @param source datasouce
   * @returns geometry loader
   */
  getGeometryLoader(n) {
    const s = typeof n == "string" ? n : n.dataType, t = p.demLoaderMap.get(s);
    if (t)
      return t;
    throw `Terrain source dataType("${s}") is not support!`;
  },
  /**
   * Get all loaders
   * @returns Image loaders and terrain loaders
   */
  getLoaders() {
    return {
      imgLoaders: Array.from(p.imgLoaderMap.values()),
      demLoaders: Array.from(p.demLoaderMap.values())
    };
  }
};
function it(n, s) {
  const t = Math.floor(n[0] * s), o = Math.floor(n[1] * s), e = Math.floor((n[2] - n[0]) * s), i = Math.floor((n[3] - n[1]) * s);
  return { sx: t, sy: o, sw: e, sh: i };
}
function lt(n, s, t, o) {
  if (o < n.minLevel)
    return {
      url: void 0,
      clipBounds: [0, 0, 1, 1]
    };
  if (o <= n.maxLevel)
    return {
      url: n.getUrl(s, t, o),
      clipBounds: [0, 0, 1, 1]
    };
  const e = ss(s, t, o, n.maxLevel), i = e.parentCoord;
  return { url: n.getUrl(i.x, i.y, i.z), clipBounds: e.bounds };
}
function ts(n, s) {
  const t = n.width, o = new OffscreenCanvas(t, t), e = o.getContext("2d"), { sx: i, sy: l, sw: r, sh: a } = it(s, n.width);
  return e.drawImage(n, i, l, r, a, 0, 0, t, t), o;
}
function ss(n, s, t, o) {
  const e = t - o, i = { x: n >> e, y: s >> e, z: t - e }, l = Math.pow(2, e), r = Math.pow(0.5, e), a = n % l / l - 0.5 + r / 2, c = s % l / l - 0.5 + r / 2, h = new E(a, c), m = new zt().setFromCenterAndSize(h, new E(r, r)), Z = [m.min.x + 0.5, m.min.y + 0.5, m.max.x + 0.5, m.max.y + 0.5];
  return { parentCoord: i, bounds: Z };
}
function es(n, s, t) {
  if (s[0] <= t[0] && s[1] <= t[1] && s[2] >= t[2] && s[3] >= t[3])
    return n;
  const [o, e, i, l] = s, [r, a, c, h] = t, m = Math.max(o, r), Z = Math.max(e, a), y = Math.min(i, c), W = Math.min(l, h);
  if (m >= y || Z >= W)
    return n;
  const u = new OffscreenCanvas(n.width, n.height), L = u.getContext("2d");
  L.drawImage(n, 0, 0);
  const S = Math.max(r, o), b = Math.min(c, i), V = Math.max(a, e), X = Math.min(h, l);
  L.globalCompositeOperation = "destination-in";
  const T = c - r, G = h - a, x = (S - r) / T * u.width, M = (b - r) / T * u.width, P = u.height - (X - a) / G * u.height, z = u.height - (V - a) / G * u.height;
  return L.beginPath(), L.rect(x, P, M - x, z - P), L.fill(), u;
}
class os {
  constructor() {
    d(this, "_downloadingThreads", 0);
    d(this, "_bounds", [-180, -85, 180, 85]);
    d(this, "_maxThreads", 10);
    d(this, "_imgSource", []);
    d(this, "_demSource");
    /** Debug single */
    d(this, "debug", 0);
    /** Error material */
    d(this, "_errorMaterial", new gt({
      color: 16711680,
      transparent: true,
      opacity: 0,
      name: "error-material"
    }));
  }
  /** Get the map bounds */
  get bounds() {
    return this._bounds;
  }
  /** Set the map bounds */
  set bounds(s) {
    this._bounds = s;
  }
  /** Get the max downloading threads count*/
  get maxThreads() {
    return this._maxThreads;
  }
  /** Set the max downloading threads count*/
  set maxThreads(s) {
    this._maxThreads = s;
  }
  /** Get downloading threads count*/
  get downloadingThreads() {
    return this._downloadingThreads;
  }
  /** Get image source */
  get imgSource() {
    return this._imgSource;
  }
  /** Set image source */
  set imgSource(s) {
    this._imgSource = s;
  }
  /** Get terrain source */
  get demSource() {
    return this._demSource;
  }
  /** Set terrain source */
  set demSource(s) {
    this._demSource = s;
  }
  /** Get map prjection ID */
  get projectionID() {
    return this.imgSource[0].projectionID;
  }
  /** Loader manager */
  get manager() {
    return p.manager;
  }
  /**
   * Load getmetry and materail of tile from x, y and z coordinate.
   * @param params load params(x,y,z,bounds etc.)
   * @param tileMesh tile mesh
   * @returns Promise<TileMesh> tile mesh
   */
  async load(s, t) {
    const o = this.demSource ? 1 : 0 + this.imgSource.length;
    this._downloadingThreads += o;
    let e;
    try {
      const i = await this.loadGeometry(s, t?.geometry), l = await this.loadMaterial(s, t?.material);
      if (t) {
        const r = t.geometry, a = t.material;
        e = t, e.geometry = i, e.material = l, r.userData.toDispose && (r.dispose(), delete r.userData.source, delete r.userData.toDispose), a.forEach((c) => {
          c.userData.toDispose && (c.dispose(), delete c.userData.source, delete c.userData.toDispose);
        });
      } else
        e = new wt(i, l);
      e.geometry.clearGroups();
      for (let r = 0; r < e.material.length; r++)
        e.geometry.addGroup(0, 1 / 0, r);
    } finally {
      this._downloadingThreads -= o;
    }
    return e;
  }
  /**
   * Unload tile mesh data
   * @param tileMesh tile mesh
   */
  unload(s) {
    const t = s.material;
    for (let o = 0; o < t.length; o++)
      t[o].dispose(), s.geometry.groups.pop();
    s.geometry.dispose();
  }
  /**
   * Update material of tile mesh
   * @param params
   * @param tileMesh
   */
  update(s, t) {
    const o = this.imgSource.filter((e) => this._checkBounds(e, s));
    for (let e = 0; e < o.length; e++)
      o[e].dynamic;
  }
  /**
   * Load geometry
   * @returns BufferGeometry
   */
  async loadGeometry(s, t) {
    if (this.demSource && this._checkBounds(this.demSource, s)) {
      if (t) {
        if (this.demSource === t.userData.source)
          return t.userData.toDispose = false, t;
        t.userData.toDispose = true;
      }
      const o = p.getGeometryLoader(this.demSource), e = this.demSource;
      return await o.load({ source: e, ...s }).then((l) => (l.userData.source = e, l)).catch((l) => (this.debug > 0 && console.error("Load Geometry Error:", l), new F$1()));
    } else
      return new F$1();
  }
  /**
   * Load material
   * @param x x coordinate of tile
   * @param y y coordinate of tile
   * @param z z coordinate of tile
   * @returns Material[]
   */
  async loadMaterial(s, t) {
    t && t.forEach((i) => i.userData.toDispose = true);
    const o = [], e = this.imgSource.filter((i) => this._checkBounds(i, s));
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      if (t) {
        const c = t[i];
        if (c && l === c.userData.source) {
          c.userData.toDispose = false, o.push(c);
          continue;
        }
      }
      const a = await p.getMaterialLoader(l).load({ source: l, ...s }).then((c) => (c.userData.source = l, c)).catch((c) => (this.debug > 0 && console.error("Load Material Error:", c.target.src), this._errorMaterial.clone()));
      this._materialClip(a, l, s), o.push(a);
    }
    return o;
  }
  /** Clip the material texture from mapBounds */
  _materialClip(s, t, o) {
    if ("map" in s && s.map instanceof tt) {
      const e = s.map;
      e.image && (e.image = es(e.image, t._projectionBounds, o.bounds)), e.needsUpdate = true;
    }
    return this;
  }
  /** Check the tile is in the source bounds. */
  _checkBounds(s, t) {
    const o = (e, i) => {
      const l = e._projectionBounds;
      return i[2] >= l[0] && i[3] >= l[1] && i[0] <= l[2] && i[1] <= l[3];
    };
    return t.z >= s.minLevel && o(s, t.bounds);
  }
}
class rt {
  constructor() {
    d(this, "info", {
      version: I,
      description: "Terrain loader base class"
    });
    d(this, "dataType", "");
  }
  /**
   * load tile's data from source
   * @param source
   * @param tile
   * @param onError
   * @returns
   */
  async load(s) {
    const { source: t, x: o, y: e, z: i } = s, { url: l, clipBounds: r } = lt(t, o, e, i);
    if (!l)
      return new F$1();
    const a = await this.doLoad(l, { ...s, clipBounds: r });
    return p.manager.parseEnd(a), a;
  }
}
class ns {
  constructor() {
    d(this, "info", {
      version: I,
      description: "Image loader base class"
    });
    d(this, "dataType", "");
    d(this, "_material", new et());
  }
  /** 取得默认材质 */
  get material() {
    return this._material;
  }
  /** 设置默认材质 */
  set material(s) {
    this.material.dispose(), this._material = s;
  }
  /**
   * Load tile material from source
   * @param source
   * @param tile
   * @returns
   */
  async load(s) {
    const { source: t, x: o, y: e, z: i } = s, l = this.createMaterial(s);
    l.transparent = s.source.transparent, l.opacity = s.source.opacity;
    const { url: r, clipBounds: a } = lt(t, o, e, i);
    return r && (l.map = await this.doLoad(r, { ...s, clipBounds: a }), l.addEventListener("dispose", at)), l;
  }
  /**
   * Create material
   * @returns {ITileMaterial} the material of tile
   */
  createMaterial(s) {
    return this.material.clone();
  }
  /**
   * Download terrain data
   * @param url url
   * @returns {Promise<TBuffer>} the buffer of download data
   */
  async doLoad(s, t) {
    return Promise.resolve(void 0);
  }
}
const at = (n) => {
  const s = n.target.map;
  s && (s.image instanceof ImageBitmap && s.image.close(), s.dispose()), n.target.removeEventListener("dispose", at);
};
let ct$1 = class ct extends ns {
  constructor() {
    super(...arguments);
    d(this, "info", {
      version: I,
      description: "Tile image loader. It can load xyz tile image."
    });
    d(this, "dataType", "image");
    d(this, "loader", new st(p.manager));
  }
  /**
   * 加载瓦片图像作为纹理
   *
   * @param url 图像资源的URL
   * @param params 加载参数，包括x, y, z坐标、投影范围，裁剪边界clipBounds
   * @returns 返回一个Promise对象，解析为HTMLImageElement类型。
   */
  async doLoad(t, o) {
    let e = await this.loader.loadAsync(t);
    const i = o.clipBounds;
    i[2] - i[0] < 1 && (e = ts(e, i));
    const l = new tt(e);
    return l.colorSpace = kt, l;
  }
};
yt(new ct$1());
class dt {
  constructor(s = 4) {
    this.pool = s, this.queue = [], this.workers = [], this.workersResolve = [], this.workerStatus = 0;
  }
  _initWorker(s) {
    if (!this.workers[s]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, s)), this.workers[s] = t;
    }
  }
  _getIdleWorker() {
    for (let s = 0; s < this.pool; s++)
      if (!(this.workerStatus & 1 << s)) return s;
    return -1;
  }
  _onMessage(s, t) {
    const o = this.workersResolve[s];
    if (o && o(t), this.queue.length) {
      const { resolve: e, msg: i, transfer: l } = this.queue.shift();
      this.workersResolve[s] = e, this.workers[s].postMessage(i, l);
    } else
      this.workerStatus ^= 1 << s;
  }
  setWorkerCreator(s) {
    this.workerCreator = s;
  }
  setWorkerLimit(s) {
    this.pool = s;
  }
  postMessage(s, t) {
    return new Promise((o) => {
      const e = this._getIdleWorker();
      e !== -1 ? (this._initWorker(e), this.workerStatus |= 1 << e, this.workersResolve[e] = o, this.workers[e].postMessage(s, t)) : this.queue.push({ resolve: o, msg: s, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((s) => s.terminate()), this.workersResolve.length = 0, this.workers.length = 0, this.queue.length = 0, this.workerStatus = 0;
  }
}
const mt$1 = "dmFyIGNlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgbWU9KGosWixxKT0+WiBpbiBqP2NlKGosWix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cX0pOmpbWl09cTt2YXIgTj0oaixaLHEpPT5tZShqLHR5cGVvZiBaIT0ic3ltYm9sIj9aKyIiOloscSk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGooQSxwKXtjb25zdCBrPW5ldyBGbG9hdDMyQXJyYXkoQS5sZW5ndGgpO2ZvcihsZXQgVT0wO1U8cC5sZW5ndGg7VSs9Myl7Y29uc3QgYT1wW1VdKjMsZT1wW1UrMV0qMyxyPXBbVSsyXSozLHM9QVthXSx0PUFbYSsxXSxuPUFbYSsyXSxoPUFbZV0saT1BW2UrMV0sbz1BW2UrMl0sYz1BW3JdLHU9QVtyKzFdLG09QVtyKzJdLHc9aC1zLGw9aS10LGY9by1uLGc9Yy1zLE09dS10LFY9bS1uLGQ9bCpWLWYqTSx5PWYqZy13KlYsST13Kk0tbCpnLHo9TWF0aC5zcXJ0KGQqZCt5KnkrSSpJKSx4PVswLDAsMV07aWYoej4wKXtjb25zdCB2PTEvejt4WzBdPWQqdix4WzFdPXkqdix4WzJdPUkqdn1mb3IobGV0IHY9MDt2PDM7disrKWtbYSt2XT1rW2Urdl09a1tyK3ZdPXhbdl19cmV0dXJuIGt9Y2xhc3MgWntjb25zdHJ1Y3RvcihwPTI1Nyl7Tih0aGlzLCJncmlkU2l6ZSIpO04odGhpcywibnVtVHJpYW5nbGVzIik7Tih0aGlzLCJudW1QYXJlbnRUcmlhbmdsZXMiKTtOKHRoaXMsImluZGljZXMiKTtOKHRoaXMsImNvb3JkcyIpO3RoaXMuZ3JpZFNpemU9cDtjb25zdCBrPXAtMTtpZihrJmstMSl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGdyaWQgc2l6ZSB0byBiZSAyXm4rMSwgZ290ICR7cH0uYCk7dGhpcy5udW1UcmlhbmdsZXM9ayprKjItMix0aGlzLm51bVBhcmVudFRyaWFuZ2xlcz10aGlzLm51bVRyaWFuZ2xlcy1rKmssdGhpcy5pbmRpY2VzPW5ldyBVaW50MzJBcnJheSh0aGlzLmdyaWRTaXplKnRoaXMuZ3JpZFNpemUpLHRoaXMuY29vcmRzPW5ldyBVaW50MTZBcnJheSh0aGlzLm51bVRyaWFuZ2xlcyo0KTtmb3IobGV0IFU9MDtVPHRoaXMubnVtVHJpYW5nbGVzO1UrKyl7bGV0IGE9VSsyLGU9MCxyPTAscz0wLHQ9MCxuPTAsaD0wO2ZvcihhJjE/cz10PW49azplPXI9aD1rOyhhPj49MSk+MTspe2NvbnN0IG89ZStzPj4xLGM9cit0Pj4xO2EmMT8ocz1lLHQ9cixlPW4scj1oKTooZT1zLHI9dCxzPW4sdD1oKSxuPW8saD1jfWNvbnN0IGk9VSo0O3RoaXMuY29vcmRzW2krMF09ZSx0aGlzLmNvb3Jkc1tpKzFdPXIsdGhpcy5jb29yZHNbaSsyXT1zLHRoaXMuY29vcmRzW2krM109dH19Y3JlYXRlVGlsZShwKXtyZXR1cm4gbmV3IHEocCx0aGlzKX19Y2xhc3MgcXtjb25zdHJ1Y3RvcihwLGspe04odGhpcywibWFydGluaSIpO04odGhpcywidGVycmFpbiIpO04odGhpcywiZXJyb3JzIik7Y29uc3QgVT1rLmdyaWRTaXplO2lmKHAubGVuZ3RoIT09VSpVKXRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgdGVycmFpbiBkYXRhIG9mIGxlbmd0aCAke1UqVX0gKCR7VX0geCAke1V9KSwgZ290ICR7cC5sZW5ndGh9LmApO3RoaXMudGVycmFpbj1wLHRoaXMubWFydGluaT1rLHRoaXMuZXJyb3JzPW5ldyBGbG9hdDMyQXJyYXkocC5sZW5ndGgpLHRoaXMudXBkYXRlKCl9dXBkYXRlKCl7Y29uc3R7bnVtVHJpYW5nbGVzOnAsbnVtUGFyZW50VHJpYW5nbGVzOmssY29vcmRzOlUsZ3JpZFNpemU6YX09dGhpcy5tYXJ0aW5pLHt0ZXJyYWluOmUsZXJyb3JzOnJ9PXRoaXM7Zm9yKGxldCBzPXAtMTtzPj0wO3MtLSl7Y29uc3QgdD1zKjQsbj1VW3QrMF0saD1VW3QrMV0saT1VW3QrMl0sbz1VW3QrM10sYz1uK2k+PjEsdT1oK28+PjEsbT1jK3UtaCx3PXUrbi1jLGw9KGVbaCphK25dK2VbbyphK2ldKS8yLGY9dSphK2MsZz1NYXRoLmFicyhsLWVbZl0pO2lmKHJbZl09TWF0aC5tYXgocltmXSxnKSxzPGspe2NvbnN0IE09KGgrdz4+MSkqYSsobittPj4xKSxWPShvK3c+PjEpKmErKGkrbT4+MSk7cltmXT1NYXRoLm1heChyW2ZdLHJbTV0scltWXSl9fX1nZXRHZW9tZXRyeURhdGEocD0wKXtjb25zdHtncmlkU2l6ZTprLGluZGljZXM6VX09dGhpcy5tYXJ0aW5pLHtlcnJvcnM6YX09dGhpcztsZXQgZT0wLHI9MDtjb25zdCBzPWstMTtsZXQgdCxuLGg9MDtVLmZpbGwoMCk7ZnVuY3Rpb24gaShmLGcsTSxWLGQseSl7Y29uc3QgST1mK00+PjEsej1nK1Y+PjE7TWF0aC5hYnMoZi1kKStNYXRoLmFicyhnLXkpPjEmJmFbeiprK0ldPnA/KGkoZCx5LGYsZyxJLHopLGkoTSxWLGQseSxJLHopKToodD1nKmsrZixuPVYqaytNLGg9eSprK2QsVVt0XT09PTAmJihVW3RdPSsrZSksVVtuXT09PTAmJihVW25dPSsrZSksVVtoXT09PTAmJihVW2hdPSsrZSkscisrKX1pKDAsMCxzLHMscywwKSxpKHMscywwLDAsMCxzKTtjb25zdCBvPWUqMixjPXIqMyx1PW5ldyBVaW50MTZBcnJheShvKSxtPW5ldyBVaW50MzJBcnJheShjKTtsZXQgdz0wO2Z1bmN0aW9uIGwoZixnLE0sVixkLHkpe2NvbnN0IEk9ZitNPj4xLHo9ZytWPj4xO2lmKE1hdGguYWJzKGYtZCkrTWF0aC5hYnMoZy15KT4xJiZhW3oqaytJXT5wKWwoZCx5LGYsZyxJLHopLGwoTSxWLGQseSxJLHopO2Vsc2V7Y29uc3QgeD1VW2cqaytmXS0xLHY9VVtWKmsrTV0tMSxEPVVbeSprK2RdLTE7dVsyKnhdPWYsdVsyKngrMV09Zyx1WzIqdl09TSx1WzIqdisxXT1WLHVbMipEXT1kLHVbMipEKzFdPXksbVt3KytdPXgsbVt3KytdPXYsbVt3KytdPUR9fXJldHVybiBsKDAsMCxzLHMscywwKSxsKHMscywwLDAsMCxzKSx7YXR0cmlidXRlczp0aGlzLl9nZXRNZXNoQXR0cmlidXRlcyh0aGlzLnRlcnJhaW4sdSxtKSxpbmRpY2VzOm19fV9nZXRNZXNoQXR0cmlidXRlcyhwLGssVSl7Y29uc3QgYT1NYXRoLmZsb29yKE1hdGguc3FydChwLmxlbmd0aCkpLGU9YS0xLHI9ay5sZW5ndGgvMixzPW5ldyBGbG9hdDMyQXJyYXkociozKSx0PW5ldyBGbG9hdDMyQXJyYXkocioyKTtmb3IobGV0IGg9MDtoPHI7aCsrKXtjb25zdCBpPWtbaCoyXSxvPWtbaCoyKzFdLGM9byphK2k7c1szKmgrMF09aS9lLS41LHNbMypoKzFdPS41LW8vZSxzWzMqaCsyXT1wW2NdLHRbMipoKzBdPWkvZSx0WzIqaCsxXT0xLW8vZX1jb25zdCBuPWoocyxVKTtyZXR1cm57cG9zaXRpb246e3ZhbHVlOnMsc2l6ZTozfSx0ZXhjb29yZDp7dmFsdWU6dCxzaXplOjJ9LG5vcm1hbDp7dmFsdWU6bixzaXplOjN9fX19LyogQ29weXJpZ2h0IDIwMTUtMjAyMSBFc3JpLiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wIEBwcmVzZXJ2ZSAqL2NvbnN0IGVlPWZ1bmN0aW9uKCl7dmFyIEE9e307QS5kZWZhdWx0Tm9EYXRhVmFsdWU9LTM0MDI3OTk5Mzg3OTAxNDg0ZTIyLEEuZGVjb2RlPWZ1bmN0aW9uKHIscyl7cz1zfHx7fTt2YXIgdD1zLmVuY29kZWRNYXNrRGF0YXx8cy5lbmNvZGVkTWFza0RhdGE9PT1udWxsLG49YShyLHMuaW5wdXRPZmZzZXR8fDAsdCksaD1zLm5vRGF0YVZhbHVlIT09bnVsbD9zLm5vRGF0YVZhbHVlOkEuZGVmYXVsdE5vRGF0YVZhbHVlLGk9cChuLHMucGl4ZWxUeXBlfHxGbG9hdDMyQXJyYXkscy5lbmNvZGVkTWFza0RhdGEsaCxzLnJldHVybk1hc2spLG89e3dpZHRoOm4ud2lkdGgsaGVpZ2h0Om4uaGVpZ2h0LHBpeGVsRGF0YTppLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTppLm1pblZhbHVlLG1heFZhbHVlOm4ucGl4ZWxzLm1heFZhbHVlLG5vRGF0YVZhbHVlOmh9O3JldHVybiBpLnJlc3VsdE1hc2smJihvLm1hc2tEYXRhPWkucmVzdWx0TWFzaykscy5yZXR1cm5FbmNvZGVkTWFzayYmbi5tYXNrJiYoby5lbmNvZGVkTWFza0RhdGE9bi5tYXNrLmJpdHNldD9uLm1hc2suYml0c2V0Om51bGwpLHMucmV0dXJuRmlsZUluZm8mJihvLmZpbGVJbmZvPWsobikscy5jb21wdXRlVXNlZEJpdERlcHRocyYmKG8uZmlsZUluZm8uYml0RGVwdGhzPVUobikpKSxvfTt2YXIgcD1mdW5jdGlvbihyLHMsdCxuLGgpe3ZhciBpPTAsbz1yLnBpeGVscy5udW1CbG9ja3NYLGM9ci5waXhlbHMubnVtQmxvY2tzWSx1PU1hdGguZmxvb3Ioci53aWR0aC9vKSxtPU1hdGguZmxvb3Ioci5oZWlnaHQvYyksdz0yKnIubWF4WkVycm9yLGw9TnVtYmVyLk1BWF9WQUxVRSxmO3Q9dHx8KHIubWFzaz9yLm1hc2suYml0c2V0Om51bGwpO3ZhciBnLE07Zz1uZXcgcyhyLndpZHRoKnIuaGVpZ2h0KSxoJiZ0JiYoTT1uZXcgVWludDhBcnJheShyLndpZHRoKnIuaGVpZ2h0KSk7Zm9yKHZhciBWPW5ldyBGbG9hdDMyQXJyYXkodSptKSxkLHksST0wO0k8PWM7SSsrKXt2YXIgej1JIT09Yz9tOnIuaGVpZ2h0JWM7aWYoeiE9PTApZm9yKHZhciB4PTA7eDw9bzt4Kyspe3ZhciB2PXghPT1vP3U6ci53aWR0aCVvO2lmKHYhPT0wKXt2YXIgRD1JKnIud2lkdGgqbSt4KnUsVD1yLndpZHRoLXYsUz1yLnBpeGVscy5ibG9ja3NbaV0sQixMLEY7Uy5lbmNvZGluZzwyPyhTLmVuY29kaW5nPT09MD9CPVMucmF3RGF0YTooZShTLnN0dWZmZWREYXRhLFMuYml0c1BlclBpeGVsLFMubnVtVmFsaWRQaXhlbHMsUy5vZmZzZXQsdyxWLHIucGl4ZWxzLm1heFZhbHVlKSxCPVYpLEw9MCk6Uy5lbmNvZGluZz09PTI/Rj0wOkY9Uy5vZmZzZXQ7dmFyIGI7aWYodClmb3IoeT0wO3k8ejt5Kyspe2ZvcihEJjcmJihiPXRbRD4+M10sYjw8PUQmNyksZD0wO2Q8djtkKyspRCY3fHwoYj10W0Q+PjNdKSxiJjEyOD8oTSYmKE1bRF09MSksZj1TLmVuY29kaW5nPDI/QltMKytdOkYsbD1sPmY/ZjpsLGdbRCsrXT1mKTooTSYmKE1bRF09MCksZ1tEKytdPW4pLGI8PD0xO0QrPVR9ZWxzZSBpZihTLmVuY29kaW5nPDIpZm9yKHk9MDt5PHo7eSsrKXtmb3IoZD0wO2Q8djtkKyspZj1CW0wrK10sbD1sPmY/ZjpsLGdbRCsrXT1mO0QrPVR9ZWxzZSBmb3IobD1sPkY/RjpsLHk9MDt5PHo7eSsrKXtmb3IoZD0wO2Q8djtkKyspZ1tEKytdPUY7RCs9VH1pZihTLmVuY29kaW5nPT09MSYmTCE9PVMubnVtVmFsaWRQaXhlbHMpdGhyb3ciQmxvY2sgYW5kIE1hc2sgZG8gbm90IG1hdGNoIjtpKyt9fX1yZXR1cm57cmVzdWx0UGl4ZWxzOmcscmVzdWx0TWFzazpNLG1pblZhbHVlOmx9fSxrPWZ1bmN0aW9uKHIpe3JldHVybntmaWxlSWRlbnRpZmllclN0cmluZzpyLmZpbGVJZGVudGlmaWVyU3RyaW5nLGZpbGVWZXJzaW9uOnIuZmlsZVZlcnNpb24saW1hZ2VUeXBlOnIuaW1hZ2VUeXBlLGhlaWdodDpyLmhlaWdodCx3aWR0aDpyLndpZHRoLG1heFpFcnJvcjpyLm1heFpFcnJvcixlb2ZPZmZzZXQ6ci5lb2ZPZmZzZXQsbWFzazpyLm1hc2s/e251bUJsb2Nrc1g6ci5tYXNrLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTpyLm1hc2subnVtQmxvY2tzWSxudW1CeXRlczpyLm1hc2subnVtQnl0ZXMsbWF4VmFsdWU6ci5tYXNrLm1heFZhbHVlfTpudWxsLHBpeGVsczp7bnVtQmxvY2tzWDpyLnBpeGVscy5udW1CbG9ja3NYLG51bUJsb2Nrc1k6ci5waXhlbHMubnVtQmxvY2tzWSxudW1CeXRlczpyLnBpeGVscy5udW1CeXRlcyxtYXhWYWx1ZTpyLnBpeGVscy5tYXhWYWx1ZSxub0RhdGFWYWx1ZTpyLm5vRGF0YVZhbHVlfX19LFU9ZnVuY3Rpb24ocil7Zm9yKHZhciBzPXIucGl4ZWxzLm51bUJsb2Nrc1gqci5waXhlbHMubnVtQmxvY2tzWSx0PXt9LG49MDtuPHM7bisrKXt2YXIgaD1yLnBpeGVscy5ibG9ja3Nbbl07aC5lbmNvZGluZz09PTA/dC5mbG9hdDMyPSEwOmguZW5jb2Rpbmc9PT0xP3RbaC5iaXRzUGVyUGl4ZWxdPSEwOnRbMF09ITB9cmV0dXJuIE9iamVjdC5rZXlzKHQpfSxhPWZ1bmN0aW9uKHIscyx0KXt2YXIgbj17fSxoPW5ldyBVaW50OEFycmF5KHIscywxMCk7aWYobi5maWxlSWRlbnRpZmllclN0cmluZz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsaCksbi5maWxlSWRlbnRpZmllclN0cmluZy50cmltKCkhPT0iQ250WkltYWdlIil0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIrbi5maWxlSWRlbnRpZmllclN0cmluZztzKz0xMDt2YXIgaT1uZXcgRGF0YVZpZXcocixzLDI0KTtpZihuLmZpbGVWZXJzaW9uPWkuZ2V0SW50MzIoMCwhMCksbi5pbWFnZVR5cGU9aS5nZXRJbnQzMig0LCEwKSxuLmhlaWdodD1pLmdldFVpbnQzMig4LCEwKSxuLndpZHRoPWkuZ2V0VWludDMyKDEyLCEwKSxuLm1heFpFcnJvcj1pLmdldEZsb2F0NjQoMTYsITApLHMrPTI0LCF0KWlmKGk9bmV3IERhdGFWaWV3KHIscywxNiksbi5tYXNrPXt9LG4ubWFzay5udW1CbG9ja3NZPWkuZ2V0VWludDMyKDAsITApLG4ubWFzay5udW1CbG9ja3NYPWkuZ2V0VWludDMyKDQsITApLG4ubWFzay5udW1CeXRlcz1pLmdldFVpbnQzMig4LCEwKSxuLm1hc2subWF4VmFsdWU9aS5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNixuLm1hc2subnVtQnl0ZXM+MCl7dmFyIG89bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKG4ud2lkdGgqbi5oZWlnaHQvOCkpO2k9bmV3IERhdGFWaWV3KHIscyxuLm1hc2subnVtQnl0ZXMpO3ZhciBjPWkuZ2V0SW50MTYoMCwhMCksdT0yLG09MDtkb3tpZihjPjApZm9yKDtjLS07KW9bbSsrXT1pLmdldFVpbnQ4KHUrKyk7ZWxzZXt2YXIgdz1pLmdldFVpbnQ4KHUrKyk7Zm9yKGM9LWM7Yy0tOylvW20rK109d31jPWkuZ2V0SW50MTYodSwhMCksdSs9Mn13aGlsZSh1PG4ubWFzay5udW1CeXRlcyk7aWYoYyE9PS0zMjc2OHx8bTxvLmxlbmd0aCl0aHJvdyJVbmV4cGVjdGVkIGVuZCBvZiBtYXNrIFJMRSBlbmNvZGluZyI7bi5tYXNrLmJpdHNldD1vLHMrPW4ubWFzay5udW1CeXRlc31lbHNlIG4ubWFzay5udW1CeXRlc3xuLm1hc2subnVtQmxvY2tzWXxuLm1hc2subWF4VmFsdWV8fChuLm1hc2suYml0c2V0PW5ldyBVaW50OEFycmF5KE1hdGguY2VpbChuLndpZHRoKm4uaGVpZ2h0LzgpKSk7aT1uZXcgRGF0YVZpZXcocixzLDE2KSxuLnBpeGVscz17fSxuLnBpeGVscy5udW1CbG9ja3NZPWkuZ2V0VWludDMyKDAsITApLG4ucGl4ZWxzLm51bUJsb2Nrc1g9aS5nZXRVaW50MzIoNCwhMCksbi5waXhlbHMubnVtQnl0ZXM9aS5nZXRVaW50MzIoOCwhMCksbi5waXhlbHMubWF4VmFsdWU9aS5nZXRGbG9hdDMyKDEyLCEwKSxzKz0xNjt2YXIgbD1uLnBpeGVscy5udW1CbG9ja3NYLGY9bi5waXhlbHMubnVtQmxvY2tzWSxnPWwrKG4ud2lkdGglbD4wPzE6MCksTT1mKyhuLmhlaWdodCVmPjA/MTowKTtuLnBpeGVscy5ibG9ja3M9bmV3IEFycmF5KGcqTSk7Zm9yKHZhciBWPTAsZD0wO2Q8TTtkKyspZm9yKHZhciB5PTA7eTxnO3krKyl7dmFyIEk9MCx6PXIuYnl0ZUxlbmd0aC1zO2k9bmV3IERhdGFWaWV3KHIscyxNYXRoLm1pbigxMCx6KSk7dmFyIHg9e307bi5waXhlbHMuYmxvY2tzW1YrK109eDt2YXIgdj1pLmdldFVpbnQ4KDApO2lmKEkrKyx4LmVuY29kaW5nPXYmNjMseC5lbmNvZGluZz4zKXRocm93IkludmFsaWQgYmxvY2sgZW5jb2RpbmcgKCIreC5lbmNvZGluZysiKSI7aWYoeC5lbmNvZGluZz09PTIpe3MrKztjb250aW51ZX1pZih2IT09MCYmdiE9PTIpe2lmKHY+Pj02LHgub2Zmc2V0VHlwZT12LHY9PT0yKXgub2Zmc2V0PWkuZ2V0SW50OCgxKSxJKys7ZWxzZSBpZih2PT09MSl4Lm9mZnNldD1pLmdldEludDE2KDEsITApLEkrPTI7ZWxzZSBpZih2PT09MCl4Lm9mZnNldD1pLmdldEZsb2F0MzIoMSwhMCksSSs9NDtlbHNlIHRocm93IkludmFsaWQgYmxvY2sgb2Zmc2V0IHR5cGUiO2lmKHguZW5jb2Rpbmc9PT0xKWlmKHY9aS5nZXRVaW50OChJKSxJKysseC5iaXRzUGVyUGl4ZWw9diY2Myx2Pj49Nix4Lm51bVZhbGlkUGl4ZWxzVHlwZT12LHY9PT0yKXgubnVtVmFsaWRQaXhlbHM9aS5nZXRVaW50OChJKSxJKys7ZWxzZSBpZih2PT09MSl4Lm51bVZhbGlkUGl4ZWxzPWkuZ2V0VWludDE2KEksITApLEkrPTI7ZWxzZSBpZih2PT09MCl4Lm51bVZhbGlkUGl4ZWxzPWkuZ2V0VWludDMyKEksITApLEkrPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUifWlmKHMrPUkseC5lbmNvZGluZyE9PTMpe3ZhciBELFQ7aWYoeC5lbmNvZGluZz09PTApe3ZhciBTPShuLnBpeGVscy5udW1CeXRlcy0xKS80O2lmKFMhPT1NYXRoLmZsb29yKFMpKXRocm93InVuY29tcHJlc3NlZCBibG9jayBoYXMgaW52YWxpZCBsZW5ndGgiO0Q9bmV3IEFycmF5QnVmZmVyKFMqNCksVD1uZXcgVWludDhBcnJheShEKSxULnNldChuZXcgVWludDhBcnJheShyLHMsUyo0KSk7dmFyIEI9bmV3IEZsb2F0MzJBcnJheShEKTt4LnJhd0RhdGE9QixzKz1TKjR9ZWxzZSBpZih4LmVuY29kaW5nPT09MSl7dmFyIEw9TWF0aC5jZWlsKHgubnVtVmFsaWRQaXhlbHMqeC5iaXRzUGVyUGl4ZWwvOCksRj1NYXRoLmNlaWwoTC80KTtEPW5ldyBBcnJheUJ1ZmZlcihGKjQpLFQ9bmV3IFVpbnQ4QXJyYXkoRCksVC5zZXQobmV3IFVpbnQ4QXJyYXkocixzLEwpKSx4LnN0dWZmZWREYXRhPW5ldyBVaW50MzJBcnJheShEKSxzKz1MfX19cmV0dXJuIG4uZW9mT2Zmc2V0PXMsbn0sZT1mdW5jdGlvbihyLHMsdCxuLGgsaSxvKXt2YXIgYz0oMTw8cyktMSx1PTAsbSx3PTAsbCxmLGc9TWF0aC5jZWlsKChvLW4pL2gpLE09ci5sZW5ndGgqNC1NYXRoLmNlaWwocyp0LzgpO2ZvcihyW3IubGVuZ3RoLTFdPDw9OCpNLG09MDttPHQ7bSsrKXtpZih3PT09MCYmKGY9clt1KytdLHc9MzIpLHc+PXMpbD1mPj4+dy1zJmMsdy09cztlbHNle3ZhciBWPXMtdztsPShmJmMpPDxWJmMsZj1yW3UrK10sdz0zMi1WLGwrPWY+Pj53fWlbbV09bDxnP24rbCpoOm99cmV0dXJuIGl9O3JldHVybiBBfSgpLHJlPWZ1bmN0aW9uKCl7dmFyIEE9e3Vuc3R1ZmY6ZnVuY3Rpb24oYSxlLHIscyx0LG4saCxpKXt2YXIgbz0oMTw8ciktMSxjPTAsdSxtPTAsdyxsLGYsZyxNPWEubGVuZ3RoKjQtTWF0aC5jZWlsKHIqcy84KTtpZihhW2EubGVuZ3RoLTFdPDw9OCpNLHQpZm9yKHU9MDt1PHM7dSsrKW09PT0wJiYobD1hW2MrK10sbT0zMiksbT49cj8odz1sPj4+bS1yJm8sbS09cik6KGY9ci1tLHc9KGwmbyk8PGYmbyxsPWFbYysrXSxtPTMyLWYsdys9bD4+Pm0pLGVbdV09dFt3XTtlbHNlIGZvcihnPU1hdGguY2VpbCgoaS1uKS9oKSx1PTA7dTxzO3UrKyltPT09MCYmKGw9YVtjKytdLG09MzIpLG0+PXI/KHc9bD4+Pm0tciZvLG0tPXIpOihmPXItbSx3PShsJm8pPDxmJm8sbD1hW2MrK10sbT0zMi1mLHcrPWw+Pj5tKSxlW3VdPXc8Zz9uK3cqaDppfSx1bnN0dWZmTFVUOmZ1bmN0aW9uKGEsZSxyLHMsdCxuKXt2YXIgaD0oMTw8ZSktMSxpPTAsbz0wLGM9MCx1PTAsbT0wLHcsbD1bXSxmPWEubGVuZ3RoKjQtTWF0aC5jZWlsKGUqci84KTthW2EubGVuZ3RoLTFdPDw9OCpmO3ZhciBnPU1hdGguY2VpbCgobi1zKS90KTtmb3Iobz0wO288cjtvKyspdT09PTAmJih3PWFbaSsrXSx1PTMyKSx1Pj1lPyhtPXc+Pj51LWUmaCx1LT1lKTooYz1lLXUsbT0odyZoKTw8YyZoLHc9YVtpKytdLHU9MzItYyxtKz13Pj4+dSksbFtvXT1tPGc/cyttKnQ6bjtyZXR1cm4gbC51bnNoaWZ0KHMpLGx9LHVuc3R1ZmYyOmZ1bmN0aW9uKGEsZSxyLHMsdCxuLGgsaSl7dmFyIG89KDE8PHIpLTEsYz0wLHUsbT0wLHc9MCxsLGYsZztpZih0KWZvcih1PTA7dTxzO3UrKyltPT09MCYmKGY9YVtjKytdLG09MzIsdz0wKSxtPj1yPyhsPWY+Pj53Jm8sbS09cix3Kz1yKTooZz1yLW0sbD1mPj4+dyZvLGY9YVtjKytdLG09MzItZyxsfD0oZiYoMTw8ZyktMSk8PHItZyx3PWcpLGVbdV09dFtsXTtlbHNle3ZhciBNPU1hdGguY2VpbCgoaS1uKS9oKTtmb3IodT0wO3U8czt1KyspbT09PTAmJihmPWFbYysrXSxtPTMyLHc9MCksbT49cj8obD1mPj4+dyZvLG0tPXIsdys9cik6KGc9ci1tLGw9Zj4+PncmbyxmPWFbYysrXSxtPTMyLWcsbHw9KGYmKDE8PGcpLTEpPDxyLWcsdz1nKSxlW3VdPWw8TT9uK2wqaDppfXJldHVybiBlfSx1bnN0dWZmTFVUMjpmdW5jdGlvbihhLGUscixzLHQsbil7dmFyIGg9KDE8PGUpLTEsaT0wLG89MCxjPTAsdT0wLG09MCx3PTAsbCxmPVtdLGc9TWF0aC5jZWlsKChuLXMpL3QpO2ZvcihvPTA7bzxyO28rKyl1PT09MCYmKGw9YVtpKytdLHU9MzIsdz0wKSx1Pj1lPyhtPWw+Pj53JmgsdS09ZSx3Kz1lKTooYz1lLXUsbT1sPj4+dyZoLGw9YVtpKytdLHU9MzItYyxtfD0obCYoMTw8YyktMSk8PGUtYyx3PWMpLGZbb109bTxnP3MrbSp0Om47cmV0dXJuIGYudW5zaGlmdChzKSxmfSxvcmlnaW5hbFVuc3R1ZmY6ZnVuY3Rpb24oYSxlLHIscyl7dmFyIHQ9KDE8PHIpLTEsbj0wLGgsaT0wLG8sYyx1LG09YS5sZW5ndGgqNC1NYXRoLmNlaWwocipzLzgpO2ZvcihhW2EubGVuZ3RoLTFdPDw9OCptLGg9MDtoPHM7aCsrKWk9PT0wJiYoYz1hW24rK10saT0zMiksaT49cj8obz1jPj4+aS1yJnQsaS09cik6KHU9ci1pLG89KGMmdCk8PHUmdCxjPWFbbisrXSxpPTMyLXUsbys9Yz4+PmkpLGVbaF09bztyZXR1cm4gZX0sb3JpZ2luYWxVbnN0dWZmMjpmdW5jdGlvbihhLGUscixzKXt2YXIgdD0oMTw8ciktMSxuPTAsaCxpPTAsbz0wLGMsdSxtO2ZvcihoPTA7aDxzO2grKylpPT09MCYmKHU9YVtuKytdLGk9MzIsbz0wKSxpPj1yPyhjPXU+Pj5vJnQsaS09cixvKz1yKToobT1yLWksYz11Pj4+byZ0LHU9YVtuKytdLGk9MzItbSxjfD0odSYoMTw8bSktMSk8PHItbSxvPW0pLGVbaF09YztyZXR1cm4gZX19LHA9e0hVRkZNQU5fTFVUX0JJVFNfTUFYOjEyLGNvbXB1dGVDaGVja3N1bUZsZXRjaGVyMzI6ZnVuY3Rpb24oYSl7Zm9yKHZhciBlPTY1NTM1LHI9NjU1MzUscz1hLmxlbmd0aCx0PU1hdGguZmxvb3Iocy8yKSxuPTA7dDspe3ZhciBoPXQ+PTM1OT8zNTk6dDt0LT1oO2RvIGUrPWFbbisrXTw8OCxyKz1lKz1hW24rK107d2hpbGUoLS1oKTtlPShlJjY1NTM1KSsoZT4+PjE2KSxyPShyJjY1NTM1KSsocj4+PjE2KX1yZXR1cm4gcyYxJiYocis9ZSs9YVtuXTw8OCksZT0oZSY2NTUzNSkrKGU+Pj4xNikscj0ociY2NTUzNSkrKHI+Pj4xNiksKHI8PDE2fGUpPj4+MH0scmVhZEhlYWRlckluZm86ZnVuY3Rpb24oYSxlKXt2YXIgcj1lLnB0cixzPW5ldyBVaW50OEFycmF5KGEsciw2KSx0PXt9O2lmKHQuZmlsZUlkZW50aWZpZXJTdHJpbmc9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHMpLHQuZmlsZUlkZW50aWZpZXJTdHJpbmcubGFzdEluZGV4T2YoIkxlcmMyIiwwKSE9PTApdGhyb3ciVW5leHBlY3RlZCBmaWxlIGlkZW50aWZpZXIgc3RyaW5nIChleHBlY3QgTGVyYzIgKTogIit0LmZpbGVJZGVudGlmaWVyU3RyaW5nO3IrPTY7dmFyIG49bmV3IERhdGFWaWV3KGEsciw4KSxoPW4uZ2V0SW50MzIoMCwhMCk7dC5maWxlVmVyc2lvbj1oLHIrPTQsaD49MyYmKHQuY2hlY2tzdW09bi5nZXRVaW50MzIoNCwhMCkscis9NCksbj1uZXcgRGF0YVZpZXcoYSxyLDEyKSx0LmhlaWdodD1uLmdldFVpbnQzMigwLCEwKSx0LndpZHRoPW4uZ2V0VWludDMyKDQsITApLHIrPTgsaD49ND8odC5udW1EaW1zPW4uZ2V0VWludDMyKDgsITApLHIrPTQpOnQubnVtRGltcz0xLG49bmV3IERhdGFWaWV3KGEsciw0MCksdC5udW1WYWxpZFBpeGVsPW4uZ2V0VWludDMyKDAsITApLHQubWljcm9CbG9ja1NpemU9bi5nZXRJbnQzMig0LCEwKSx0LmJsb2JTaXplPW4uZ2V0SW50MzIoOCwhMCksdC5pbWFnZVR5cGU9bi5nZXRJbnQzMigxMiwhMCksdC5tYXhaRXJyb3I9bi5nZXRGbG9hdDY0KDE2LCEwKSx0LnpNaW49bi5nZXRGbG9hdDY0KDI0LCEwKSx0LnpNYXg9bi5nZXRGbG9hdDY0KDMyLCEwKSxyKz00MCxlLmhlYWRlckluZm89dCxlLnB0cj1yO3ZhciBpLG87aWYoaD49MyYmKG89aD49ND81Mjo0OCxpPXRoaXMuY29tcHV0ZUNoZWNrc3VtRmxldGNoZXIzMihuZXcgVWludDhBcnJheShhLHItbyx0LmJsb2JTaXplLTE0KSksaSE9PXQuY2hlY2tzdW0pKXRocm93IkNoZWNrc3VtIGZhaWxlZC4iO3JldHVybiEwfSxjaGVja01pbk1heFJhbmdlczpmdW5jdGlvbihhLGUpe3ZhciByPWUuaGVhZGVySW5mbyxzPXRoaXMuZ2V0RGF0YVR5cGVBcnJheShyLmltYWdlVHlwZSksdD1yLm51bURpbXMqdGhpcy5nZXREYXRhVHlwZVNpemUoci5pbWFnZVR5cGUpLG49dGhpcy5yZWFkU3ViQXJyYXkoYSxlLnB0cixzLHQpLGg9dGhpcy5yZWFkU3ViQXJyYXkoYSxlLnB0cit0LHMsdCk7ZS5wdHIrPTIqdDt2YXIgaSxvPSEwO2ZvcihpPTA7aTxyLm51bURpbXM7aSsrKWlmKG5baV0hPT1oW2ldKXtvPSExO2JyZWFrfXJldHVybiByLm1pblZhbHVlcz1uLHIubWF4VmFsdWVzPWgsb30scmVhZFN1YkFycmF5OmZ1bmN0aW9uKGEsZSxyLHMpe3ZhciB0O2lmKHI9PT1VaW50OEFycmF5KXQ9bmV3IFVpbnQ4QXJyYXkoYSxlLHMpO2Vsc2V7dmFyIG49bmV3IEFycmF5QnVmZmVyKHMpLGg9bmV3IFVpbnQ4QXJyYXkobik7aC5zZXQobmV3IFVpbnQ4QXJyYXkoYSxlLHMpKSx0PW5ldyByKG4pfXJldHVybiB0fSxyZWFkTWFzazpmdW5jdGlvbihhLGUpe3ZhciByPWUucHRyLHM9ZS5oZWFkZXJJbmZvLHQ9cy53aWR0aCpzLmhlaWdodCxuPXMubnVtVmFsaWRQaXhlbCxoPW5ldyBEYXRhVmlldyhhLHIsNCksaT17fTtpZihpLm51bUJ5dGVzPWguZ2V0VWludDMyKDAsITApLHIrPTQsKG49PT0wfHx0PT09bikmJmkubnVtQnl0ZXMhPT0wKXRocm93ImludmFsaWQgbWFzayI7dmFyIG8sYztpZihuPT09MClvPW5ldyBVaW50OEFycmF5KE1hdGguY2VpbCh0LzgpKSxpLmJpdHNldD1vLGM9bmV3IFVpbnQ4QXJyYXkodCksZS5waXhlbHMucmVzdWx0TWFzaz1jLHIrPWkubnVtQnl0ZXM7ZWxzZSBpZihpLm51bUJ5dGVzPjApe289bmV3IFVpbnQ4QXJyYXkoTWF0aC5jZWlsKHQvOCkpLGg9bmV3IERhdGFWaWV3KGEscixpLm51bUJ5dGVzKTt2YXIgdT1oLmdldEludDE2KDAsITApLG09Mix3PTAsbD0wO2Rve2lmKHU+MClmb3IoO3UtLTspb1t3KytdPWguZ2V0VWludDgobSsrKTtlbHNlIGZvcihsPWguZ2V0VWludDgobSsrKSx1PS11O3UtLTspb1t3KytdPWw7dT1oLmdldEludDE2KG0sITApLG0rPTJ9d2hpbGUobTxpLm51bUJ5dGVzKTtpZih1IT09LTMyNzY4fHx3PG8ubGVuZ3RoKXRocm93IlVuZXhwZWN0ZWQgZW5kIG9mIG1hc2sgUkxFIGVuY29kaW5nIjtjPW5ldyBVaW50OEFycmF5KHQpO3ZhciBmPTAsZz0wO2ZvcihnPTA7Zzx0O2crKylnJjc/KGY9b1tnPj4zXSxmPDw9ZyY3KTpmPW9bZz4+M10sZiYxMjgmJihjW2ddPTEpO2UucGl4ZWxzLnJlc3VsdE1hc2s9YyxpLmJpdHNldD1vLHIrPWkubnVtQnl0ZXN9cmV0dXJuIGUucHRyPXIsZS5tYXNrPWksITB9LHJlYWREYXRhT25lU3dlZXA6ZnVuY3Rpb24oYSxlLHIscyl7dmFyIHQ9ZS5wdHIsbj1lLmhlYWRlckluZm8saD1uLm51bURpbXMsaT1uLndpZHRoKm4uaGVpZ2h0LG89bi5pbWFnZVR5cGUsYz1uLm51bVZhbGlkUGl4ZWwqcC5nZXREYXRhVHlwZVNpemUobykqaCx1LG09ZS5waXhlbHMucmVzdWx0TWFzaztpZihyPT09VWludDhBcnJheSl1PW5ldyBVaW50OEFycmF5KGEsdCxjKTtlbHNle3ZhciB3PW5ldyBBcnJheUJ1ZmZlcihjKSxsPW5ldyBVaW50OEFycmF5KHcpO2wuc2V0KG5ldyBVaW50OEFycmF5KGEsdCxjKSksdT1uZXcgcih3KX1pZih1Lmxlbmd0aD09PWkqaClzP2UucGl4ZWxzLnJlc3VsdFBpeGVscz1wLnN3YXBEaW1lbnNpb25PcmRlcih1LGksaCxyLCEwKTplLnBpeGVscy5yZXN1bHRQaXhlbHM9dTtlbHNle2UucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgcihpKmgpO3ZhciBmPTAsZz0wLE09MCxWPTA7aWYoaD4xKXtpZihzKXtmb3IoZz0wO2c8aTtnKyspaWYobVtnXSlmb3IoVj1nLE09MDtNPGg7TSsrLFYrPWkpZS5waXhlbHMucmVzdWx0UGl4ZWxzW1ZdPXVbZisrXX1lbHNlIGZvcihnPTA7ZzxpO2crKylpZihtW2ddKWZvcihWPWcqaCxNPTA7TTxoO00rKyllLnBpeGVscy5yZXN1bHRQaXhlbHNbVitNXT11W2YrK119ZWxzZSBmb3IoZz0wO2c8aTtnKyspbVtnXSYmKGUucGl4ZWxzLnJlc3VsdFBpeGVsc1tnXT11W2YrK10pfXJldHVybiB0Kz1jLGUucHRyPXQsITB9LHJlYWRIdWZmbWFuVHJlZTpmdW5jdGlvbihhLGUpe3ZhciByPXRoaXMuSFVGRk1BTl9MVVRfQklUU19NQVgscz1uZXcgRGF0YVZpZXcoYSxlLnB0ciwxNik7ZS5wdHIrPTE2O3ZhciB0PXMuZ2V0SW50MzIoMCwhMCk7aWYodDwyKXRocm93InVuc3VwcG9ydGVkIEh1ZmZtYW4gdmVyc2lvbiI7dmFyIG49cy5nZXRJbnQzMig0LCEwKSxoPXMuZ2V0SW50MzIoOCwhMCksaT1zLmdldEludDMyKDEyLCEwKTtpZihoPj1pKXJldHVybiExO3ZhciBvPW5ldyBVaW50MzJBcnJheShpLWgpO3AuZGVjb2RlQml0cyhhLGUsbyk7dmFyIGM9W10sdSxtLHcsbDtmb3IodT1oO3U8aTt1KyspbT11LSh1PG4/MDpuKSxjW21dPXtmaXJzdDpvW3UtaF0sc2Vjb25kOm51bGx9O3ZhciBmPWEuYnl0ZUxlbmd0aC1lLnB0cixnPU1hdGguY2VpbChmLzQpLE09bmV3IEFycmF5QnVmZmVyKGcqNCksVj1uZXcgVWludDhBcnJheShNKTtWLnNldChuZXcgVWludDhBcnJheShhLGUucHRyLGYpKTt2YXIgZD1uZXcgVWludDMyQXJyYXkoTSkseT0wLEksej0wO2ZvcihJPWRbMF0sdT1oO3U8aTt1KyspbT11LSh1PG4/MDpuKSxsPWNbbV0uZmlyc3QsbD4wJiYoY1ttXS5zZWNvbmQ9STw8eT4+PjMyLWwsMzIteT49bD8oeSs9bCx5PT09MzImJih5PTAseisrLEk9ZFt6XSkpOih5Kz1sLTMyLHorKyxJPWRbel0sY1ttXS5zZWNvbmR8PUk+Pj4zMi15KSk7dmFyIHg9MCx2PTAsRD1uZXcgaztmb3IodT0wO3U8Yy5sZW5ndGg7dSsrKWNbdV0hPT12b2lkIDAmJih4PU1hdGgubWF4KHgsY1t1XS5maXJzdCkpO3g+PXI/dj1yOnY9eDt2YXIgVD1bXSxTLEIsTCxGLGIsQztmb3IodT1oO3U8aTt1KyspaWYobT11LSh1PG4/MDpuKSxsPWNbbV0uZmlyc3QsbD4wKWlmKFM9W2wsbV0sbDw9dilmb3IoQj1jW21dLnNlY29uZDw8di1sLEw9MTw8di1sLHc9MDt3PEw7dysrKVRbQnx3XT1TO2Vsc2UgZm9yKEI9Y1ttXS5zZWNvbmQsQz1ELEY9bC0xO0Y+PTA7Ri0tKWI9Qj4+PkYmMSxiPyhDLnJpZ2h0fHwoQy5yaWdodD1uZXcgayksQz1DLnJpZ2h0KTooQy5sZWZ0fHwoQy5sZWZ0PW5ldyBrKSxDPUMubGVmdCksRj09PTAmJiFDLnZhbCYmKEMudmFsPVNbMV0pO3JldHVybntkZWNvZGVMdXQ6VCxudW1CaXRzTFVUUWljazp2LG51bUJpdHNMVVQ6eCx0cmVlOkQsc3R1ZmZlZERhdGE6ZCxzcmNQdHI6eixiaXRQb3M6eX19LHJlYWRIdWZmbWFuOmZ1bmN0aW9uKGEsZSxyLHMpe3ZhciB0PWUuaGVhZGVySW5mbyxuPXQubnVtRGltcyxoPWUuaGVhZGVySW5mby5oZWlnaHQsaT1lLmhlYWRlckluZm8ud2lkdGgsbz1pKmgsYz10aGlzLnJlYWRIdWZmbWFuVHJlZShhLGUpLHU9Yy5kZWNvZGVMdXQsbT1jLnRyZWUsdz1jLnN0dWZmZWREYXRhLGw9Yy5zcmNQdHIsZj1jLmJpdFBvcyxnPWMubnVtQml0c0xVVFFpY2ssTT1jLm51bUJpdHNMVVQsVj1lLmhlYWRlckluZm8uaW1hZ2VUeXBlPT09MD8xMjg6MCxkLHksSSx6PWUucGl4ZWxzLnJlc3VsdE1hc2sseCx2LEQsVCxTLEIsTCxGPTA7Zj4wJiYobCsrLGY9MCk7dmFyIGI9d1tsXSxDPWUuZW5jb2RlTW9kZT09PTEsUj1uZXcgcihvKm4pLE89UixYO2lmKG48Mnx8Qyl7Zm9yKFg9MDtYPG47WCsrKWlmKG4+MSYmKE89bmV3IHIoUi5idWZmZXIsbypYLG8pLEY9MCksZS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWw9PT1pKmgpZm9yKEI9MCxUPTA7VDxoO1QrKylmb3IoUz0wO1M8aTtTKyssQisrKXtpZih5PTAseD1iPDxmPj4+MzItZyx2PXgsMzItZjxnJiYoeHw9d1tsKzFdPj4+NjQtZi1nLHY9eCksdVt2XSl5PXVbdl1bMV0sZis9dVt2XVswXTtlbHNlIGZvcih4PWI8PGY+Pj4zMi1NLHY9eCwzMi1mPE0mJih4fD13W2wrMV0+Pj42NC1mLU0sdj14KSxkPW0sTD0wO0w8TTtMKyspaWYoRD14Pj4+TS1MLTEmMSxkPUQ/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXt5PWQudmFsLGY9ZitMKzE7YnJlYWt9Zj49MzImJihmLT0zMixsKyssYj13W2xdKSxJPXktVixDPyhTPjA/SSs9RjpUPjA/SSs9T1tCLWldOkkrPUYsSSY9MjU1LE9bQl09SSxGPUkpOk9bQl09SX1lbHNlIGZvcihCPTAsVD0wO1Q8aDtUKyspZm9yKFM9MDtTPGk7UysrLEIrKylpZih6W0JdKXtpZih5PTAseD1iPDxmPj4+MzItZyx2PXgsMzItZjxnJiYoeHw9d1tsKzFdPj4+NjQtZi1nLHY9eCksdVt2XSl5PXVbdl1bMV0sZis9dVt2XVswXTtlbHNlIGZvcih4PWI8PGY+Pj4zMi1NLHY9eCwzMi1mPE0mJih4fD13W2wrMV0+Pj42NC1mLU0sdj14KSxkPW0sTD0wO0w8TTtMKyspaWYoRD14Pj4+TS1MLTEmMSxkPUQ/ZC5yaWdodDpkLmxlZnQsIShkLmxlZnR8fGQucmlnaHQpKXt5PWQudmFsLGY9ZitMKzE7YnJlYWt9Zj49MzImJihmLT0zMixsKyssYj13W2xdKSxJPXktVixDPyhTPjAmJnpbQi0xXT9JKz1GOlQ+MCYmeltCLWldP0krPU9bQi1pXTpJKz1GLEkmPTI1NSxPW0JdPUksRj1JKTpPW0JdPUl9fWVsc2UgZm9yKEI9MCxUPTA7VDxoO1QrKylmb3IoUz0wO1M8aTtTKyspaWYoQj1UKmkrUywhenx8eltCXSlmb3IoWD0wO1g8bjtYKyssQis9byl7aWYoeT0wLHg9Yjw8Zj4+PjMyLWcsdj14LDMyLWY8ZyYmKHh8PXdbbCsxXT4+PjY0LWYtZyx2PXgpLHVbdl0peT11W3ZdWzFdLGYrPXVbdl1bMF07ZWxzZSBmb3IoeD1iPDxmPj4+MzItTSx2PXgsMzItZjxNJiYoeHw9d1tsKzFdPj4+NjQtZi1NLHY9eCksZD1tLEw9MDtMPE07TCsrKWlmKEQ9eD4+Pk0tTC0xJjEsZD1EP2QucmlnaHQ6ZC5sZWZ0LCEoZC5sZWZ0fHxkLnJpZ2h0KSl7eT1kLnZhbCxmPWYrTCsxO2JyZWFrfWY+PTMyJiYoZi09MzIsbCsrLGI9d1tsXSksST15LVYsT1tCXT1JfWUucHRyPWUucHRyKyhsKzEpKjQrKGY+MD80OjApLGUucGl4ZWxzLnJlc3VsdFBpeGVscz1SLG4+MSYmIXMmJihlLnBpeGVscy5yZXN1bHRQaXhlbHM9cC5zd2FwRGltZW5zaW9uT3JkZXIoUixvLG4scikpfSxkZWNvZGVCaXRzOmZ1bmN0aW9uKGEsZSxyLHMsdCl7e3ZhciBuPWUuaGVhZGVySW5mbyxoPW4uZmlsZVZlcnNpb24saT0wLG89YS5ieXRlTGVuZ3RoLWUucHRyPj01PzU6YS5ieXRlTGVuZ3RoLWUucHRyLGM9bmV3IERhdGFWaWV3KGEsZS5wdHIsbyksdT1jLmdldFVpbnQ4KDApO2krKzt2YXIgbT11Pj42LHc9bT09PTA/NDozLW0sbD0odSYzMik+MCxmPXUmMzEsZz0wO2lmKHc9PT0xKWc9Yy5nZXRVaW50OChpKSxpKys7ZWxzZSBpZih3PT09MilnPWMuZ2V0VWludDE2KGksITApLGkrPTI7ZWxzZSBpZih3PT09NClnPWMuZ2V0VWludDMyKGksITApLGkrPTQ7ZWxzZSB0aHJvdyJJbnZhbGlkIHZhbGlkIHBpeGVsIGNvdW50IHR5cGUiO3ZhciBNPTIqbi5tYXhaRXJyb3IsVixkLHksSSx6LHgsdixELFQsUz1uLm51bURpbXM+MT9uLm1heFZhbHVlc1t0XTpuLnpNYXg7aWYobCl7Zm9yKGUuY291bnRlci5sdXQrKyxEPWMuZ2V0VWludDgoaSksaSsrLEk9TWF0aC5jZWlsKChELTEpKmYvOCksej1NYXRoLmNlaWwoSS80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLHk9bmV3IFVpbnQ4QXJyYXkoZCksZS5wdHIrPWkseS5zZXQobmV3IFVpbnQ4QXJyYXkoYSxlLnB0cixJKSksdj1uZXcgVWludDMyQXJyYXkoZCksZS5wdHIrPUksVD0wO0QtMT4+PlQ7KVQrKztJPU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoSS80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLHk9bmV3IFVpbnQ4QXJyYXkoZCkseS5zZXQobmV3IFVpbnQ4QXJyYXkoYSxlLnB0cixJKSksVj1uZXcgVWludDMyQXJyYXkoZCksZS5wdHIrPUksaD49Mz94PUEudW5zdHVmZkxVVDIodixmLEQtMSxzLE0sUyk6eD1BLnVuc3R1ZmZMVVQodixmLEQtMSxzLE0sUyksaD49Mz9BLnVuc3R1ZmYyKFYscixULGcseCk6QS51bnN0dWZmKFYscixULGcseCl9ZWxzZSBlLmNvdW50ZXIuYml0c3R1ZmZlcisrLFQ9ZixlLnB0cis9aSxUPjAmJihJPU1hdGguY2VpbChnKlQvOCksej1NYXRoLmNlaWwoSS80KSxkPW5ldyBBcnJheUJ1ZmZlcih6KjQpLHk9bmV3IFVpbnQ4QXJyYXkoZCkseS5zZXQobmV3IFVpbnQ4QXJyYXkoYSxlLnB0cixJKSksVj1uZXcgVWludDMyQXJyYXkoZCksZS5wdHIrPUksaD49Mz9zPT1udWxsP0Eub3JpZ2luYWxVbnN0dWZmMihWLHIsVCxnKTpBLnVuc3R1ZmYyKFYscixULGcsITEscyxNLFMpOnM9PW51bGw/QS5vcmlnaW5hbFVuc3R1ZmYoVixyLFQsZyk6QS51bnN0dWZmKFYscixULGcsITEscyxNLFMpKX19LHJlYWRUaWxlczpmdW5jdGlvbihhLGUscixzKXt2YXIgdD1lLmhlYWRlckluZm8sbj10LndpZHRoLGg9dC5oZWlnaHQsaT1uKmgsbz10Lm1pY3JvQmxvY2tTaXplLGM9dC5pbWFnZVR5cGUsdT1wLmdldERhdGFUeXBlU2l6ZShjKSxtPU1hdGguY2VpbChuL28pLHc9TWF0aC5jZWlsKGgvbyk7ZS5waXhlbHMubnVtQmxvY2tzWT13LGUucGl4ZWxzLm51bUJsb2Nrc1g9bSxlLnBpeGVscy5wdHI9MDt2YXIgbD0wLGY9MCxnPTAsTT0wLFY9MCxkPTAseT0wLEk9MCx6PTAseD0wLHY9MCxEPTAsVD0wLFM9MCxCPTAsTD0wLEYsYixDLFIsTyxYLEc9bmV3IHIobypvKSxsZT1oJW98fG8sdWU9biVvfHxvLEssUSxKPXQubnVtRGltcywkLEU9ZS5waXhlbHMucmVzdWx0TWFzayxZPWUucGl4ZWxzLnJlc3VsdFBpeGVscyxoZT10LmZpbGVWZXJzaW9uLFA9aGU+PTU/MTQ6MTUsXyxXPXQuek1heCxIO2ZvcihnPTA7Zzx3O2crKylmb3IoVj1nIT09dy0xP286bGUsTT0wO008bTtNKyspZm9yKGQ9TSE9PW0tMT9vOnVlLHY9ZypuKm8rTSpvLEQ9bi1kLCQ9MDskPEo7JCsrKXtpZihKPjE/KEg9WSx2PWcqbipvK00qbyxZPW5ldyByKGUucGl4ZWxzLnJlc3VsdFBpeGVscy5idWZmZXIsaSokKnUsaSksVz10Lm1heFZhbHVlc1skXSk6SD1udWxsLHk9YS5ieXRlTGVuZ3RoLWUucHRyLEY9bmV3IERhdGFWaWV3KGEsZS5wdHIsTWF0aC5taW4oMTAseSkpLGI9e30sTD0wLEk9Ri5nZXRVaW50OCgwKSxMKyssXz10LmZpbGVWZXJzaW9uPj01P0kmNDowLHo9ST4+NiYyNTUseD1JPj4yJlAseCE9PShNKm8+PjMmUCl8fF8mJiQ9PT0wKXRocm93ImludGVncml0eSBpc3N1ZSI7aWYoWD1JJjMsWD4zKXRocm93IGUucHRyKz1MLCJJbnZhbGlkIGJsb2NrIGVuY29kaW5nICgiK1grIikiO2lmKFg9PT0yKXtpZihfKWlmKEUpZm9yKGw9MDtsPFY7bCsrKWZvcihmPTA7ZjxkO2YrKylFW3ZdJiYoWVt2XT1IW3ZdKSx2Kys7ZWxzZSBmb3IobD0wO2w8VjtsKyspZm9yKGY9MDtmPGQ7ZisrKVlbdl09SFt2XSx2Kys7ZS5jb3VudGVyLmNvbnN0YW50KyssZS5wdHIrPUw7Y29udGludWV9ZWxzZSBpZihYPT09MCl7aWYoXyl0aHJvdyJpbnRlZ3JpdHkgaXNzdWUiO2lmKGUuY291bnRlci51bmNvbXByZXNzZWQrKyxlLnB0cis9TCxUPVYqZCp1LFM9YS5ieXRlTGVuZ3RoLWUucHRyLFQ9VDxTP1Q6UyxDPW5ldyBBcnJheUJ1ZmZlcihUJXU9PT0wP1Q6VCt1LVQldSksUj1uZXcgVWludDhBcnJheShDKSxSLnNldChuZXcgVWludDhBcnJheShhLGUucHRyLFQpKSxPPW5ldyByKEMpLEI9MCxFKWZvcihsPTA7bDxWO2wrKyl7Zm9yKGY9MDtmPGQ7ZisrKUVbdl0mJihZW3ZdPU9bQisrXSksdisrO3YrPUR9ZWxzZSBmb3IobD0wO2w8VjtsKyspe2ZvcihmPTA7ZjxkO2YrKylZW3YrK109T1tCKytdO3YrPUR9ZS5wdHIrPUIqdX1lbHNlIGlmKEs9cC5nZXREYXRhVHlwZVVzZWQoXyYmYzw2PzQ6Yyx6KSxRPXAuZ2V0T25lUGl4ZWwoYixMLEssRiksTCs9cC5nZXREYXRhVHlwZVNpemUoSyksWD09PTMpaWYoZS5wdHIrPUwsZS5jb3VudGVyLmNvbnN0YW50b2Zmc2V0KyssRSlmb3IobD0wO2w8VjtsKyspe2ZvcihmPTA7ZjxkO2YrKylFW3ZdJiYoWVt2XT1fP01hdGgubWluKFcsSFt2XStRKTpRKSx2Kys7dis9RH1lbHNlIGZvcihsPTA7bDxWO2wrKyl7Zm9yKGY9MDtmPGQ7ZisrKVlbdl09Xz9NYXRoLm1pbihXLEhbdl0rUSk6USx2Kys7dis9RH1lbHNlIGlmKGUucHRyKz1MLHAuZGVjb2RlQml0cyhhLGUsRyxRLCQpLEw9MCxfKWlmKEUpZm9yKGw9MDtsPFY7bCsrKXtmb3IoZj0wO2Y8ZDtmKyspRVt2XSYmKFlbdl09R1tMKytdK0hbdl0pLHYrKzt2Kz1EfWVsc2UgZm9yKGw9MDtsPFY7bCsrKXtmb3IoZj0wO2Y8ZDtmKyspWVt2XT1HW0wrK10rSFt2XSx2Kys7dis9RH1lbHNlIGlmKEUpZm9yKGw9MDtsPFY7bCsrKXtmb3IoZj0wO2Y8ZDtmKyspRVt2XSYmKFlbdl09R1tMKytdKSx2Kys7dis9RH1lbHNlIGZvcihsPTA7bDxWO2wrKyl7Zm9yKGY9MDtmPGQ7ZisrKVlbdisrXT1HW0wrK107dis9RH19Sj4xJiYhcyYmKGUucGl4ZWxzLnJlc3VsdFBpeGVscz1wLnN3YXBEaW1lbnNpb25PcmRlcihlLnBpeGVscy5yZXN1bHRQaXhlbHMsaSxKLHIpKX0sZm9ybWF0RmlsZUluZm86ZnVuY3Rpb24oYSl7cmV0dXJue2ZpbGVJZGVudGlmaWVyU3RyaW5nOmEuaGVhZGVySW5mby5maWxlSWRlbnRpZmllclN0cmluZyxmaWxlVmVyc2lvbjphLmhlYWRlckluZm8uZmlsZVZlcnNpb24saW1hZ2VUeXBlOmEuaGVhZGVySW5mby5pbWFnZVR5cGUsaGVpZ2h0OmEuaGVhZGVySW5mby5oZWlnaHQsd2lkdGg6YS5oZWFkZXJJbmZvLndpZHRoLG51bVZhbGlkUGl4ZWw6YS5oZWFkZXJJbmZvLm51bVZhbGlkUGl4ZWwsbWljcm9CbG9ja1NpemU6YS5oZWFkZXJJbmZvLm1pY3JvQmxvY2tTaXplLGJsb2JTaXplOmEuaGVhZGVySW5mby5ibG9iU2l6ZSxtYXhaRXJyb3I6YS5oZWFkZXJJbmZvLm1heFpFcnJvcixwaXhlbFR5cGU6cC5nZXRQaXhlbFR5cGUoYS5oZWFkZXJJbmZvLmltYWdlVHlwZSksZW9mT2Zmc2V0OmEuZW9mT2Zmc2V0LG1hc2s6YS5tYXNrP3tudW1CeXRlczphLm1hc2subnVtQnl0ZXN9Om51bGwscGl4ZWxzOntudW1CbG9ja3NYOmEucGl4ZWxzLm51bUJsb2Nrc1gsbnVtQmxvY2tzWTphLnBpeGVscy5udW1CbG9ja3NZLG1heFZhbHVlOmEuaGVhZGVySW5mby56TWF4LG1pblZhbHVlOmEuaGVhZGVySW5mby56TWluLG5vRGF0YVZhbHVlOmEubm9EYXRhVmFsdWV9fX0sY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlOmZ1bmN0aW9uKGEsZSl7dmFyIHI9YS5oZWFkZXJJbmZvLnpNYXgscz1hLmhlYWRlckluZm8uek1pbix0PWEuaGVhZGVySW5mby5tYXhWYWx1ZXMsbj1hLmhlYWRlckluZm8ubnVtRGltcyxoPWEuaGVhZGVySW5mby5oZWlnaHQqYS5oZWFkZXJJbmZvLndpZHRoLGk9MCxvPTAsYz0wLHU9YS5waXhlbHMucmVzdWx0TWFzayxtPWEucGl4ZWxzLnJlc3VsdFBpeGVscztpZih1KWlmKG4+MSl7aWYoZSlmb3IoaT0wO2k8bjtpKyspZm9yKGM9aSpoLHI9dFtpXSxvPTA7bzxoO28rKyl1W29dJiYobVtjK29dPXIpO2Vsc2UgZm9yKG89MDtvPGg7bysrKWlmKHVbb10pZm9yKGM9bypuLGk9MDtpPG47aSsrKW1bYytuXT10W2ldfWVsc2UgZm9yKG89MDtvPGg7bysrKXVbb10mJihtW29dPXIpO2Vsc2UgaWYobj4xJiZzIT09cilpZihlKWZvcihpPTA7aTxuO2krKylmb3IoYz1pKmgscj10W2ldLG89MDtvPGg7bysrKW1bYytvXT1yO2Vsc2UgZm9yKG89MDtvPGg7bysrKWZvcihjPW8qbixpPTA7aTxuO2krKyltW2MraV09dFtpXTtlbHNlIGZvcihvPTA7bzxoKm47bysrKW1bb109cn0sZ2V0RGF0YVR5cGVBcnJheTpmdW5jdGlvbihhKXt2YXIgZTtzd2l0Y2goYSl7Y2FzZSAwOmU9SW50OEFycmF5O2JyZWFrO2Nhc2UgMTplPVVpbnQ4QXJyYXk7YnJlYWs7Y2FzZSAyOmU9SW50MTZBcnJheTticmVhaztjYXNlIDM6ZT1VaW50MTZBcnJheTticmVhaztjYXNlIDQ6ZT1JbnQzMkFycmF5O2JyZWFrO2Nhc2UgNTplPVVpbnQzMkFycmF5O2JyZWFrO2Nhc2UgNjplPUZsb2F0MzJBcnJheTticmVhaztjYXNlIDc6ZT1GbG9hdDY0QXJyYXk7YnJlYWs7ZGVmYXVsdDplPUZsb2F0MzJBcnJheX1yZXR1cm4gZX0sZ2V0UGl4ZWxUeXBlOmZ1bmN0aW9uKGEpe3ZhciBlO3N3aXRjaChhKXtjYXNlIDA6ZT0iUzgiO2JyZWFrO2Nhc2UgMTplPSJVOCI7YnJlYWs7Y2FzZSAyOmU9IlMxNiI7YnJlYWs7Y2FzZSAzOmU9IlUxNiI7YnJlYWs7Y2FzZSA0OmU9IlMzMiI7YnJlYWs7Y2FzZSA1OmU9IlUzMiI7YnJlYWs7Y2FzZSA2OmU9IkYzMiI7YnJlYWs7Y2FzZSA3OmU9IkY2NCI7YnJlYWs7ZGVmYXVsdDplPSJGMzIifXJldHVybiBlfSxpc1ZhbGlkUGl4ZWxWYWx1ZTpmdW5jdGlvbihhLGUpe2lmKGU9PW51bGwpcmV0dXJuITE7dmFyIHI7c3dpdGNoKGEpe2Nhc2UgMDpyPWU+PS0xMjgmJmU8PTEyNzticmVhaztjYXNlIDE6cj1lPj0wJiZlPD0yNTU7YnJlYWs7Y2FzZSAyOnI9ZT49LTMyNzY4JiZlPD0zMjc2NzticmVhaztjYXNlIDM6cj1lPj0wJiZlPD02NTUzNjticmVhaztjYXNlIDQ6cj1lPj0tMjE0NzQ4MzY0OCYmZTw9MjE0NzQ4MzY0NzticmVhaztjYXNlIDU6cj1lPj0wJiZlPD00Mjk0OTY3Mjk2O2JyZWFrO2Nhc2UgNjpyPWU+PS0zNDAyNzk5OTM4NzkwMTQ4NGUyMiYmZTw9MzQwMjc5OTkzODc5MDE0ODRlMjI7YnJlYWs7Y2FzZSA3OnI9ZT49LTE3OTc2OTMxMzQ4NjIzMTU3ZTI5MiYmZTw9MTc5NzY5MzEzNDg2MjMxNTdlMjkyO2JyZWFrO2RlZmF1bHQ6cj0hMX1yZXR1cm4gcn0sZ2V0RGF0YVR5cGVTaXplOmZ1bmN0aW9uKGEpe3ZhciBlPTA7c3dpdGNoKGEpe2Nhc2UgMDpjYXNlIDE6ZT0xO2JyZWFrO2Nhc2UgMjpjYXNlIDM6ZT0yO2JyZWFrO2Nhc2UgNDpjYXNlIDU6Y2FzZSA2OmU9NDticmVhaztjYXNlIDc6ZT04O2JyZWFrO2RlZmF1bHQ6ZT1hfXJldHVybiBlfSxnZXREYXRhVHlwZVVzZWQ6ZnVuY3Rpb24oYSxlKXt2YXIgcj1hO3N3aXRjaChhKXtjYXNlIDI6Y2FzZSA0OnI9YS1lO2JyZWFrO2Nhc2UgMzpjYXNlIDU6cj1hLTIqZTticmVhaztjYXNlIDY6ZT09PTA/cj1hOmU9PT0xP3I9MjpyPTE7YnJlYWs7Y2FzZSA3OmU9PT0wP3I9YTpyPWEtMiplKzE7YnJlYWs7ZGVmYXVsdDpyPWE7YnJlYWt9cmV0dXJuIHJ9LGdldE9uZVBpeGVsOmZ1bmN0aW9uKGEsZSxyLHMpe3ZhciB0PTA7c3dpdGNoKHIpe2Nhc2UgMDp0PXMuZ2V0SW50OChlKTticmVhaztjYXNlIDE6dD1zLmdldFVpbnQ4KGUpO2JyZWFrO2Nhc2UgMjp0PXMuZ2V0SW50MTYoZSwhMCk7YnJlYWs7Y2FzZSAzOnQ9cy5nZXRVaW50MTYoZSwhMCk7YnJlYWs7Y2FzZSA0OnQ9cy5nZXRJbnQzMihlLCEwKTticmVhaztjYXNlIDU6dD1zLmdldFVJbnQzMihlLCEwKTticmVhaztjYXNlIDY6dD1zLmdldEZsb2F0MzIoZSwhMCk7YnJlYWs7Y2FzZSA3OnQ9cy5nZXRGbG9hdDY0KGUsITApO2JyZWFrO2RlZmF1bHQ6dGhyb3cidGhlIGRlY29kZXIgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGlzIHBpeGVsIHR5cGUifXJldHVybiB0fSxzd2FwRGltZW5zaW9uT3JkZXI6ZnVuY3Rpb24oYSxlLHIscyx0KXt2YXIgbj0wLGg9MCxpPTAsbz0wLGM9YTtpZihyPjEpaWYoYz1uZXcgcyhlKnIpLHQpZm9yKG49MDtuPGU7bisrKWZvcihvPW4saT0wO2k8cjtpKyssbys9ZSljW29dPWFbaCsrXTtlbHNlIGZvcihuPTA7bjxlO24rKylmb3Iobz1uLGk9MDtpPHI7aSsrLG8rPWUpY1toKytdPWFbb107cmV0dXJuIGN9fSxrPWZ1bmN0aW9uKGEsZSxyKXt0aGlzLnZhbD1hLHRoaXMubGVmdD1lLHRoaXMucmlnaHQ9cn0sVT17ZGVjb2RlOmZ1bmN0aW9uKGEsZSl7ZT1lfHx7fTt2YXIgcj1lLm5vRGF0YVZhbHVlLHM9MCx0PXt9O2lmKHQucHRyPWUuaW5wdXRPZmZzZXR8fDAsdC5waXhlbHM9e30sISFwLnJlYWRIZWFkZXJJbmZvKGEsdCkpe3ZhciBuPXQuaGVhZGVySW5mbyxoPW4uZmlsZVZlcnNpb24saT1wLmdldERhdGFUeXBlQXJyYXkobi5pbWFnZVR5cGUpO2lmKGg+NSl0aHJvdyJ1bnN1cHBvcnRlZCBsZXJjIHZlcnNpb24gMi4iK2g7cC5yZWFkTWFzayhhLHQpLG4ubnVtVmFsaWRQaXhlbCE9PW4ud2lkdGgqbi5oZWlnaHQmJiF0LnBpeGVscy5yZXN1bHRNYXNrJiYodC5waXhlbHMucmVzdWx0TWFzaz1lLm1hc2tEYXRhKTt2YXIgbz1uLndpZHRoKm4uaGVpZ2h0O3QucGl4ZWxzLnJlc3VsdFBpeGVscz1uZXcgaShvKm4ubnVtRGltcyksdC5jb3VudGVyPXtvbmVzd2VlcDowLHVuY29tcHJlc3NlZDowLGx1dDowLGJpdHN0dWZmZXI6MCxjb25zdGFudDowLGNvbnN0YW50b2Zmc2V0OjB9O3ZhciBjPSFlLnJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zO2lmKG4ubnVtVmFsaWRQaXhlbCE9PTApaWYobi56TWF4PT09bi56TWluKXAuY29uc3RydWN0Q29uc3RhbnRTdXJmYWNlKHQsYyk7ZWxzZSBpZihoPj00JiZwLmNoZWNrTWluTWF4UmFuZ2VzKGEsdCkpcC5jb25zdHJ1Y3RDb25zdGFudFN1cmZhY2UodCxjKTtlbHNle3ZhciB1PW5ldyBEYXRhVmlldyhhLHQucHRyLDIpLG09dS5nZXRVaW50OCgwKTtpZih0LnB0cisrLG0pcC5yZWFkRGF0YU9uZVN3ZWVwKGEsdCxpLGMpO2Vsc2UgaWYoaD4xJiZuLmltYWdlVHlwZTw9MSYmTWF0aC5hYnMobi5tYXhaRXJyb3ItLjUpPDFlLTUpe3ZhciB3PXUuZ2V0VWludDgoMSk7aWYodC5wdHIrKyx0LmVuY29kZU1vZGU9dyx3PjJ8fGg8NCYmdz4xKXRocm93IkludmFsaWQgSHVmZm1hbiBmbGFnICIrdzt3P3AucmVhZEh1ZmZtYW4oYSx0LGksYyk6cC5yZWFkVGlsZXMoYSx0LGksYyl9ZWxzZSBwLnJlYWRUaWxlcyhhLHQsaSxjKX10LmVvZk9mZnNldD10LnB0cjt2YXIgbDtlLmlucHV0T2Zmc2V0PyhsPXQuaGVhZGVySW5mby5ibG9iU2l6ZStlLmlucHV0T2Zmc2V0LXQucHRyLE1hdGguYWJzKGwpPj0xJiYodC5lb2ZPZmZzZXQ9ZS5pbnB1dE9mZnNldCt0LmhlYWRlckluZm8uYmxvYlNpemUpKToobD10LmhlYWRlckluZm8uYmxvYlNpemUtdC5wdHIsTWF0aC5hYnMobCk+PTEmJih0LmVvZk9mZnNldD10LmhlYWRlckluZm8uYmxvYlNpemUpKTt2YXIgZj17d2lkdGg6bi53aWR0aCxoZWlnaHQ6bi5oZWlnaHQscGl4ZWxEYXRhOnQucGl4ZWxzLnJlc3VsdFBpeGVscyxtaW5WYWx1ZTpuLnpNaW4sbWF4VmFsdWU6bi56TWF4LHZhbGlkUGl4ZWxDb3VudDpuLm51bVZhbGlkUGl4ZWwsZGltQ291bnQ6bi5udW1EaW1zLGRpbVN0YXRzOnttaW5WYWx1ZXM6bi5taW5WYWx1ZXMsbWF4VmFsdWVzOm4ubWF4VmFsdWVzfSxtYXNrRGF0YTp0LnBpeGVscy5yZXN1bHRNYXNrfTtpZih0LnBpeGVscy5yZXN1bHRNYXNrJiZwLmlzVmFsaWRQaXhlbFZhbHVlKG4uaW1hZ2VUeXBlLHIpKXt2YXIgZz10LnBpeGVscy5yZXN1bHRNYXNrO2ZvcihzPTA7czxvO3MrKylnW3NdfHwoZi5waXhlbERhdGFbc109cik7Zi5ub0RhdGFWYWx1ZT1yfXJldHVybiB0Lm5vRGF0YVZhbHVlPXIsZS5yZXR1cm5GaWxlSW5mbyYmKGYuZmlsZUluZm89cC5mb3JtYXRGaWxlSW5mbyh0KSksZn19LGdldEJhbmRDb3VudDpmdW5jdGlvbihhKXt2YXIgZT0wLHI9MCxzPXt9O2ZvcihzLnB0cj0wLHMucGl4ZWxzPXt9O3I8YS5ieXRlTGVuZ3RoLTU4OylwLnJlYWRIZWFkZXJJbmZvKGEscykscis9cy5oZWFkZXJJbmZvLmJsb2JTaXplLGUrKyxzLnB0cj1yO3JldHVybiBlfX07cmV0dXJuIFV9KCk7dmFyIG5lPWZ1bmN0aW9uKCl7dmFyIEE9bmV3IEFycmF5QnVmZmVyKDQpLHA9bmV3IFVpbnQ4QXJyYXkoQSksaz1uZXcgVWludDMyQXJyYXkoQSk7cmV0dXJuIGtbMF09MSxwWzBdPT09MX0oKSxpZT17ZGVjb2RlOmZ1bmN0aW9uKEEscCl7aWYoIW5lKXRocm93IkJpZyBlbmRpYW4gc3lzdGVtIGlzIG5vdCBzdXBwb3J0ZWQuIjtwPXB8fHt9O3ZhciBrPXAuaW5wdXRPZmZzZXR8fDAsVT1uZXcgVWludDhBcnJheShBLGssMTApLGE9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFUpLGUscjtpZihhLnRyaW0oKT09PSJDbnRaSW1hZ2UiKWU9ZWUscj0xO2Vsc2UgaWYoYS5zdWJzdHJpbmcoMCw1KT09PSJMZXJjMiIpZT1yZSxyPTI7ZWxzZSB0aHJvdyJVbmV4cGVjdGVkIGZpbGUgaWRlbnRpZmllciBzdHJpbmc6ICIrYTtmb3IodmFyIHM9MCx0PUEuYnl0ZUxlbmd0aC0xMCxuLGg9W10saSxvLGM9e3dpZHRoOjAsaGVpZ2h0OjAscGl4ZWxzOltdLHBpeGVsVHlwZTpwLnBpeGVsVHlwZSxtYXNrOm51bGwsc3RhdGlzdGljczpbXX0sdT0wO2s8dDspe3ZhciBtPWUuZGVjb2RlKEEse2lucHV0T2Zmc2V0OmssZW5jb2RlZE1hc2tEYXRhOm4sbWFza0RhdGE6byxyZXR1cm5NYXNrOnM9PT0wLHJldHVybkVuY29kZWRNYXNrOnM9PT0wLHJldHVybkZpbGVJbmZvOiEwLHJldHVyblBpeGVsSW50ZXJsZWF2ZWREaW1zOnAucmV0dXJuUGl4ZWxJbnRlcmxlYXZlZERpbXMscGl4ZWxUeXBlOnAucGl4ZWxUeXBlfHxudWxsLG5vRGF0YVZhbHVlOnAubm9EYXRhVmFsdWV8fG51bGx9KTtrPW0uZmlsZUluZm8uZW9mT2Zmc2V0LG89bS5tYXNrRGF0YSxzPT09MCYmKG49bS5lbmNvZGVkTWFza0RhdGEsYy53aWR0aD1tLndpZHRoLGMuaGVpZ2h0PW0uaGVpZ2h0LGMuZGltQ291bnQ9bS5kaW1Db3VudHx8MSxjLnBpeGVsVHlwZT1tLnBpeGVsVHlwZXx8bS5maWxlSW5mby5waXhlbFR5cGUsYy5tYXNrPW8pLHI+MSYmKG8mJmgucHVzaChvKSxtLmZpbGVJbmZvLm1hc2smJm0uZmlsZUluZm8ubWFzay5udW1CeXRlcz4wJiZ1KyspLHMrKyxjLnBpeGVscy5wdXNoKG0ucGl4ZWxEYXRhKSxjLnN0YXRpc3RpY3MucHVzaCh7bWluVmFsdWU6bS5taW5WYWx1ZSxtYXhWYWx1ZTptLm1heFZhbHVlLG5vRGF0YVZhbHVlOm0ubm9EYXRhVmFsdWUsZGltU3RhdHM6bS5kaW1TdGF0c30pfXZhciB3LGwsZjtpZihyPjEmJnU+MSl7Zm9yKGY9Yy53aWR0aCpjLmhlaWdodCxjLmJhbmRNYXNrcz1oLG89bmV3IFVpbnQ4QXJyYXkoZiksby5zZXQoaFswXSksdz0xO3c8aC5sZW5ndGg7dysrKWZvcihpPWhbd10sbD0wO2w8ZjtsKyspb1tsXT1vW2xdJmlbbF07Yy5tYXNrRGF0YT1vfXJldHVybiBjfX07Y29uc3QgdGU9ezA6N2UzLDE6NmUzLDI6NWUzLDM6NGUzLDQ6M2UzLDU6MjUwMCw2OjJlMyw3OjE1MDAsODo4MDAsOTo1MDAsMTA6MjAwLDExOjEwMCwxMjo0MCwxMzoxMiwxNDo1LDE1OjIsMTY6MSwxNzouNSwxODouMiwxOTouMSwyMDouMDF9O2Z1bmN0aW9uIGFlKEEpe2NvbnN0e2hlaWdodDpwLHdpZHRoOmsscGl4ZWxzOlV9PWllLmRlY29kZShBKSxhPW5ldyBGbG9hdDMyQXJyYXkocCprKTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoO2UrKylhW2VdPVVbMF1bZV07cmV0dXJue2FycmF5OmEsd2lkdGg6ayxoZWlnaHQ6cH19ZnVuY3Rpb24gc2UoQSxwLGspe2xldCBVPWFlKEEpO2tbMl0ta1swXTwxJiYoVT1mZShVLGspKTtjb25zdHthcnJheTphLHdpZHRoOmV9PVUscz1uZXcgWihlKS5jcmVhdGVUaWxlKGEpLHQ9dGVbcF18fDA7cmV0dXJuIHMuZ2V0R2VvbWV0cnlEYXRhKHQpfWZ1bmN0aW9uIGZlKEEscCl7ZnVuY3Rpb24gayhzLHQsbixoLGksbyxjLHUpe2NvbnN0IG09bmV3IEZsb2F0MzJBcnJheShpKm8pO2ZvcihsZXQgbD0wO2w8bztsKyspZm9yKGxldCBmPTA7ZjxpO2YrKyl7Y29uc3QgZz0obCtoKSp0KyhmK24pLE09bCppK2Y7bVtNXT1zW2ddfWNvbnN0IHc9bmV3IEZsb2F0MzJBcnJheSh1KmMpO2ZvcihsZXQgbD0wO2w8dTtsKyspZm9yKGxldCBmPTA7ZjxjO2YrKyl7Y29uc3QgZz1sKnUrZixNPU1hdGgucm91bmQoZipvL3UpLGQ9TWF0aC5yb3VuZChsKmkvYykqaStNO3dbZ109bVtkXX1yZXR1cm4gd31jb25zdCBVPW9lKHAsQS53aWR0aCksYT1VLnN3KzEsZT1VLnNoKzE7cmV0dXJue2FycmF5OmsoQS5hcnJheSxBLndpZHRoLFUuc3gsVS5zeSxVLnN3LFUuc2gsYSxlKSx3aWR0aDphLGhlaWdodDplfX1mdW5jdGlvbiBvZShBLHApe2NvbnN0IGs9TWF0aC5mbG9vcihBWzBdKnApLFU9TWF0aC5mbG9vcihBWzFdKnApLGE9TWF0aC5mbG9vcigoQVsyXS1BWzBdKSpwKSxlPU1hdGguZmxvb3IoKEFbM10tQVsxXSkqcCk7cmV0dXJue3N4Omssc3k6VSxzdzphLHNoOmV9fXNlbGYub25tZXNzYWdlPUE9Pntjb25zdCBwPUEuZGF0YSxrPXNlKHAuZGVtRGF0YSxwLnoscC5jbGlwQm91bmRzKTtzZWxmLnBvc3RNZXNzYWdlKGspfX0pKCk7Cg==", is = (n) => Uint8Array.from(atob(n), (s) => s.charCodeAt(0)), B = typeof self < "u" && self.Blob && new Blob([is(mt$1)], { type: "text/javascript;charset=utf-8" });
function ls(n) {
  let s;
  try {
    if (s = B && (self.URL || self.webkitURL).createObjectURL(B), !s) throw "";
    const t = new Worker(s, {
      name: n?.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(s);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + mt$1,
      {
        name: n?.name
      }
    );
  } finally {
    s && (self.URL || self.webkitURL).revokeObjectURL(s);
  }
}
const rs = 5;
class as extends rt {
  constructor() {
    super();
    d(this, "info", {
      version: I,
      description: "Tile LERC terrain loader. It can load ArcGis-lerc format terrain data."
    });
    d(this, "dataType", "lerc");
    // 图像加载器
    d(this, "fileLoader", new Rt$1(p.manager));
    d(this, "_workerPool", new dt(0));
    this.fileLoader.setResponseType("arraybuffer"), this._workerPool.setWorkerCreator(() => new ls());
  }
  /**
   * 异步加载并解析数据，返回BufferGeometry对象
   *
   * @param url 数据文件的URL
   * @param params 解析参数，包含瓦片xyz和裁剪边界clipBounds
   * @returns 返回解析后的BufferGeometry对象
   */
  async doLoad(t, o) {
    this._workerPool.pool === 0 && this._workerPool.setWorkerLimit(rs);
    const { z: e, clipBounds: i } = o, r = {
      demData: await this.fileLoader.loadAsync(t),
      z: e,
      clipBounds: i
    }, a = (await this._workerPool.postMessage(r)).data;
    return new F$1().setData(a);
  }
}
const ht$1 = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGModCl7cmV0dXJuIGEodC5kYXRhKX1mdW5jdGlvbiBhKHQpe2Z1bmN0aW9uIG4oZSx1KXtjb25zdCByPXUqNCxbaSxmLGcsbF09ZS5zbGljZShyLHIrNCk7cmV0dXJuIGw9PT0wPzA6LTFlNCsoaTw8MTZ8Zjw8OHxnKSouMX1jb25zdCBvPXQubGVuZ3RoPj4+MixzPW5ldyBGbG9hdDMyQXJyYXkobyk7Zm9yKGxldCBlPTA7ZTxvO2UrKylzW2VdPW4odCxlKTtyZXR1cm4gc31zZWxmLm9ubWVzc2FnZT10PT57Y29uc3Qgbj1jKHQuZGF0YS5pbWdEYXRhKTtzZWxmLnBvc3RNZXNzYWdlKG4pfX0pKCk7Cg==", cs = (n) => Uint8Array.from(atob(n), (s) => s.charCodeAt(0)), O = typeof self < "u" && self.Blob && new Blob([cs(ht$1)], { type: "text/javascript;charset=utf-8" });
function ds(n) {
  let s;
  try {
    if (s = O && (self.URL || self.webkitURL).createObjectURL(O), !s) throw "";
    const t = new Worker(s, {
      name: n?.name
    });
    return t.addEventListener("error", () => {
      (self.URL || self.webkitURL).revokeObjectURL(s);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + ht$1,
      {
        name: n?.name
      }
    );
  } finally {
    s && (self.URL || self.webkitURL).revokeObjectURL(s);
  }
}
const ms = 10;
class hs extends rt {
  constructor() {
    super();
    d(this, "info", {
      version: I,
      description: "Mapbox-RGB terrain loader, It can load Mapbox-RGB terrain data."
    });
    // 数据类型标识
    d(this, "dataType", "terrain-rgb");
    // 使用imageLoader下载
    d(this, "imageLoader", new st(p.manager));
    d(this, "_workerPool", new dt(0));
    this._workerPool.setWorkerCreator(() => new ds());
  }
  // 下载数据
  /**
   * 异步加载BufferGeometry对象
   *
   * @param url 图片的URL地址
   * @param params 加载参数，包含瓦片xyz和裁剪边界clipBounds
   * @returns 返回解析后的BufferGeometry对象
   */
  async doLoad(t, o) {
    const e = await this.imageLoader.loadAsync(t), { clipBounds: i, z: l } = o, r = Ft.clamp((l + 2) * 3, 2, 64), a = Zs(e, i, r);
    let c;
    this._workerPool.pool === 0 && this._workerPool.setWorkerLimit(ms), c = (await this._workerPool.postMessage({ imgData: a }, [a.data.buffer])).data;
    const h = new F$1();
    return h.setData(c), h;
  }
}
function Zs(n, s, t) {
  const o = it(s, n.width);
  t = Math.min(t, o.sw);
  const i = new OffscreenCanvas(t, t).getContext("2d");
  return i.imageSmoothingEnabled = false, i.drawImage(n, o.sx, o.sy, o.sw, o.sh, 0, 0, t, t), i.getImageData(0, 0, t, t);
}
class Zt {
  /**
   * constructor
   * @param options SourceOptions
   */
  constructor(s) {
    /** Data type that determines which loader to use for loading and processing data. Default is "image" type */
    d(this, "dataType", "image");
    /** Copyright attribution information for the data source, used for displaying map copyright notices */
    d(this, "attribution", "ThreeTile");
    /** Minimum zoom level supported by the data source. Default is 0 */
    d(this, "minLevel", 0);
    /** Maximum zoom level supported by the data source. Default is 18 */
    d(this, "maxLevel", 18);
    /** Data projection type. Default is "3857" Mercator projection */
    d(this, "projectionID", "3857");
    /** URL template for tile data. Uses variables like {x},{y},{z} to construct tile request URLs */
    d(this, "url", "");
    /** List of URL subdomains for load balancing. Can be an array of strings or a single string */
    d(this, "subdomains", []);
    /** material opacity. Range 0-1, default is 1.0 (completely opaque) */
    d(this, "opacity", 1);
    /** Whether the material is transparent. Default is true (transparent) */
    d(this, "transparent", true);
    /** Whether to use TMS tile coordinate system. Default false uses XYZ system, true uses TMS system */
    d(this, "isTMS", false);
    /** Data bounds in format [minLon, minLat, maxLon, maxLat]. Default is undefined */
    d(this, "bounds");
    // = [-180, -85, 180, 85];
    /** Projected data bounds */
    d(this, "_projectionBounds", [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    Object.assign(this, s);
  }
  _getBBox(s, t, o) {
    const e = Math.PI * 6378137, i = 2 * e / Math.pow(2, o), l = -e + s * i, r = e - (t + 1) * i, a = -e + (s + 1) * i, c = e - t * i;
    return `${l},${r},${a},${c}`;
  }
  /**
   * Get url from tile coordinate, public, overwrite to custom generation tile url from xyz
   * @param x tile x coordinate
   * @param y tile y coordinate
   * @param z tile z coordinate
   * @returns url tile url
   */
  getUrl(s, t, o, e) {
    const i = this.subdomains.length;
    let l;
    if (i > 0) {
      const c = Math.floor(Math.random() * i);
      l = this.subdomains[c];
    }
    const r = this._getBBox(s, t, o);
    t = this.isTMS ? Math.pow(2, o) - 1 - t : t;
    const a = { ...this, x: s, y: t, z: o, s: l, bbox: r, ...e };
    return us(this.url, a);
  }
  /**
   * Get url from tile coordinate, public，called by TileLoader
   * @param x tile x coordinate
   * @param y tile y coordinate
   * @param z tile z coordinate
   * @returns url tile url
   */
  // public _getUrl(x: number, y: number, z: number): string | undefined {
  // 	// reverse y coordinate if TMS scheme
  // 	const reverseY = this.isTMS ? Math.pow(2, z) - 1 - y : y;
  // 	return this.getUrl(x, reverseY, z);
  // }
  /**
   * Create source directly through factoy functions.
   * @param options source options
   * @returns ISource data source instance
   */
  static create(s) {
    return new Zt(s);
  }
}
function us(n, s) {
  const t = /\{ *([\w_-]+) *\}/g;
  return n.replace(t, (o, e) => {
    const i = s[e] ?? (() => {
      throw new Error(`source url template error, No value provided for variable: ${o}`);
    })();
    return typeof i == "function" ? i(s) : i;
  });
}
let ut$1 = class ut {
  /**
   * 构造函数
   * @param centerLon 中央经线
   */
  constructor(s = 0) {
    d(this, "_lon0", 0);
    this._lon0 = s;
  }
  /** 中央经线 */
  get lon0() {
    return this._lon0;
  }
  /**
   * 根据中央经线取得变换后的瓦片X坐标
   * @param x
   * @param z
   * @returns
   */
  getTileXWithCenterLon(s, t) {
    const o = Math.pow(2, t);
    let e = s + Math.round(o / 360 * this._lon0);
    return e >= o ? e -= o : e < 0 && (e += o), e;
  }
  /**
   * 取得瓦片左下角投影坐标
   * @param x
   * @param y
   * @param z
   * @returns
   */
  // private getTileXYZproj(x: number, y: number, z: number) {
  // 	const w = this.mapWidth;
  // 	const h = this.mapHeight / 2;
  // 	const px = (x / Math.pow(2, z)) * w - w / 2;
  // 	const py = h - (y / Math.pow(2, z)) * h * 2;
  // 	return { x: px, y: py };
  // }
  /**
   * 取得经纬度范围的投影坐标
   * @param bounds 经纬度边界
   * @returns 投影坐标
   */
  getProjBoundsFromLonLat(s) {
    const t = s[2] - s[0] > 180, o = this.project(s[0] + (t ? this._lon0 : 0), s[1]), e = this.project(s[2] + (t ? this._lon0 : 0), s[3]);
    return [Math.min(o.x, e.x), Math.min(o.y, e.y), Math.max(o.x, e.x), Math.max(o.y, e.y)];
  }
  /**
  	 * 取得瓦片边界投影坐标范围
  
  	 * @param x 瓦片X坐标
  	 * @param y 瓦片Y坐标
  	 * @param z  瓦片层级
  	 * @returns 
  	 */
  getProjBoundsFromXYZ(s, t, o) {
    const e = Math.PI * 6378137, i = 2 * e / Math.pow(2, o), l = -e + s * i, r = e - (t + 1) * i, a = -e + (s + 1) * i, c = e - t * i;
    return [l, r, a, c];
  }
  getLonLatBoundsFromXYZ(s, t, o) {
    const e = this.getProjBoundsFromXYZ(s, t, o), i = this.unProject(e[0], e[1]), l = this.unProject(e[2], e[3]);
    return [i.lon, i.lat, l.lon, l.lat];
  }
};
const k = 6378137;
class bt extends ut$1 {
  constructor() {
    super(...arguments);
    d(this, "ID", "3857");
    // projeciton ID
    d(this, "mapWidth", 2 * Math.PI * k);
    //E-W scacle Earth's circumference(m)
    d(this, "mapHeight", this.mapWidth);
    //S-N scacle Earth's circumference(m)
    d(this, "mapDepth", 1);
  }
  //Height scale
  /**
   * Latitude and longitude to projected coordinates
   * @param lon longitude
   * @param lat Latitude
   * @returns projected coordinates
   */
  project(t, o) {
    const e = (t - this.lon0) * (Math.PI / 180), i = o * (Math.PI / 180), l = k * e, r = k * Math.log(Math.tan(Math.PI / 4 + i / 2));
    return { x: l, y: r };
  }
  /**
   * Projected coordinates to latitude and longitude
   * @param x projection x
   * @param y projection y
   * @returns latitude and longitude
   */
  unProject(t, o) {
    let e = t / k * (180 / Math.PI) + this.lon0;
    return e > 180 && (e -= 360), { lat: (2 * Math.atan(Math.exp(o / k)) - Math.PI / 2) * (180 / Math.PI), lon: e };
  }
}
class bs extends ut$1 {
  constructor() {
    super(...arguments);
    d(this, "ID", "4326");
    d(this, "mapWidth", 36e3 * 1e3);
    //E-W scacle (*0.01°)
    d(this, "mapHeight", 18e3 * 1e3);
    //S-N scale (*0.01°)
    d(this, "mapDepth", 1);
  }
  //height scale
  project(t, o) {
    return { x: (t - this.lon0) * 100 * 1e3, y: o * 100 * 1e3 };
  }
  unProject(t, o) {
    return { lon: t / (100 * 1e3) + this.lon0, lat: o / (100 * 1e3) };
  }
}
const Q = {
  /**
   * create projection object from projection ID
   *
   * @param id projeciton ID, default: "3857"
   * @returns IProjection instance
   */
  createFromID: (n = "3857", s) => {
    let t;
    switch (n) {
      case "3857":
        t = new bt(s);
        break;
      case "4326":
        t = new bs(s);
        break;
      default:
        throw new Error(`Projection ID: ${n} is not supported.`);
    }
    return t;
  }
};
class Ws extends os {
  constructor() {
    super(...arguments);
    d(this, "_projection", new bt(0));
  }
  get imgSource() {
    return super.imgSource;
  }
  set imgSource(t) {
    super.imgSource = t, this._updateImgProjBounds();
  }
  get demSource() {
    return super.demSource;
  }
  set demSource(t) {
    super.demSource = t, this._updateDemPrjBounds();
  }
  _updateImgProjBounds() {
    const t = this._projection;
    this.imgSource.forEach((o) => {
      o._projectionBounds = t.getProjBoundsFromLonLat(o.bounds || this.bounds);
    });
  }
  _updateDemPrjBounds() {
    const t = this._projection;
    this.demSource && (this.demSource._projectionBounds = t.getProjBoundsFromLonLat(this.demSource.bounds || this.bounds));
  }
  get projection() {
    return this._projection;
  }
  set projection(t) {
    this._projection = t, this._updateImgProjBounds(), this._updateDemPrjBounds();
  }
  async load(t, o) {
    const { x: e, y: i, z: l, bounds: r, lonLatBounds: a } = this.getTileCoords(t);
    return super.load({ x: e, y: i, z: l, bounds: r, lonLatBounds: a }, o);
  }
  update(t, o) {
    const { x: e, y: i, z: l, bounds: r, lonLatBounds: a } = this.getTileCoords(t);
    super.update({ x: e, y: i, z: l, bounds: r, lonLatBounds: a }, o);
  }
  // public override async update(
  // 	tileMesh: Mesh<BufferGeometry, Material[]>,
  // 	params: TileLoadParamsType,
  // 	updateMaterial: boolean,
  // 	updateGeometry: boolean
  // ): Promise<Mesh<BufferGeometry, Material[]>> {
  // 	const { x, y, z, bounds, lonLatBounds } = this.getTileCoords(params);
  // 	return await super.update(tileMesh, { x, y, z, bounds, lonLatBounds }, updateMaterial, updateGeometry);
  // }
  getTileCoords(t) {
    if (!this._projection)
      throw new Error("projection is undefined");
    const { x: o, y: e, z: i } = t, l = this._projection.getTileXWithCenterLon(o, i), r = this._projection.getProjBoundsFromXYZ(o, e, i), a = this._projection.getLonLatBoundsFromXYZ(o, e, i);
    return { x: l, y: e, z: i, bounds: r, lonLatBounds: a };
  }
}
const C = new Ht(), ps = new K(0, -1, 0), A$1 = new K();
function Wt(n, s) {
  const t = s.intersectObject(n.rootTile, true);
  if (t.length > 0) {
    const o = t[0];
    console.assert(o.object.visible);
    const e = n.worldToLocal(o.point.clone()), i = n.map2geo(e);
    return Object.assign(o, {
      location: i
    });
  }
}
function _(n, s) {
  return A$1.set(s.x, 1e4, s.z), C.set(A$1, ps), Wt(n, C);
}
function ys(n, s, t) {
  return C.setFromCamera(t, n), Wt(s, C);
}
function Ls(n) {
  const s = n.loader.manager, t = (o, e) => {
    n.dispatchEvent({ type: o, ...e });
  };
  s.onStart = (o, e, i) => {
    t("loading-start", { url: o, itemsLoaded: e, itemsTotal: i });
  }, s.onError = (o) => {
    t("loading-error", { url: o });
  }, s.onLoad = () => {
    t("loading-complete");
  }, s.onProgress = (o, e, i) => {
    t("loading-progress", { url: o, itemsLoaded: e, itemsTotal: i });
  }, s.onParseEnd = (o) => {
    t("parsing-end", { geometry: o });
  }, n.rootTile.addEventListener("tile-created", (o) => {
    t("tile-created", { tile: o.tile });
  }), n.rootTile.addEventListener("tile-loaded", (o) => {
    t("tile-loaded", { tile: o.tile });
  }), n.rootTile.addEventListener("tile-unload", (o) => {
    t("tile-unload", { tile: o.tile });
  }), n.rootTile.addEventListener("tile-visible-changed", (o) => {
    t("tile-visible-changed", { tile: o.tile });
  });
}
class pt extends $ {
  /**
   * 地图模型构造函数
   * @param params 地图参数 {@link MapParams}
   */
  constructor(t) {
    super();
    /** 名称 */
    d(this, "name", "map");
    /** 调试标志，0：不调试 */
    d(this, "debug", 0);
    /** 瓦片树更新时钟 */
    d(this, "_mapClock", new jt());
    /** 是否为LOD模型（LOD模型，当autoUpdate为真时渲染时会自动调用update方法）*/
    d(this, "isLOD", true);
    /** 地图是否在每帧渲染时自动更新，默认为真 */
    d(this, "autoUpdate", true);
    /** 瓦片树更新间隔，单位毫秒（默认100ms） */
    d(this, "updateInterval", 100);
    /** 根瓦片 */
    d(this, "rootTile");
    /** 瓦片数据加载器 */
    d(this, "loader");
    d(this, "_minLevel", 2);
    d(this, "_maxLevel", 20);
    d(this, "_LODThreshold", 1);
    this.up.set(0, 0, 1);
    const {
      loader: o = new Ws(),
      rootTile: e = new g(),
      minLevel: i = 2,
      imgSource: l,
      demSource: r,
      bounds: a,
      lon0: c = 0,
      debug: h = 0
    } = t;
    this.minLevel = i, this.loader = o, this.rootTile = e, a && (this.loader.bounds = a), this.debug = this.loader.debug = h, this.lon0 = c, this.imgSource = l, this.demSource = r, this.add(e), this._resize(), Ls(this);
    const m = () => {
      this.dispatchEvent({ type: "ready" }), this.removeEventListener("loading-complete", m);
    };
    this.addEventListener("loading-complete", m);
  }
  /** 取得地图最小缩放级别，小于这个级别瓦片树不再加载数据 */
  get minLevel() {
    return this._minLevel;
  }
  /** 设置地图最小缩放级别，小于这个级别瓦片树不再加载数据 */
  set minLevel(t) {
    this._minLevel = t;
  }
  /**  地图最大缩放级别，大于这个级别瓦片树不再更新 */
  get maxLevel() {
    return this._maxLevel;
  }
  /** @deprecated 废弃，它会自动根据数据源的最大缩放级别设置 */
  set maxLevel(t) {
    this._maxLevel = t;
  }
  /** 取得中央子午线经度 */
  get lon0() {
    return this.projection.lon0;
  }
  /** 设置中央子午线经度，中央子午线决定了地图的投影中心经度，可设置为-90，0，90，默认为0 */
  set lon0(t) {
    this.projection.lon0 !== t && (t != 0 && this.minLevel < 1 && console.warn(`Map centralMeridian is ${this.lon0}, minLevel must > 0`), this.projection = Q.createFromID(this.projection.ID, t), this._updateSource());
  }
  /** 取得地图投影对象 */
  get projection() {
    return this.loader.projection;
  }
  /** 设置地图投影对象 */
  set projection(t) {
    (t.ID != this.projection.ID || t.lon0 != this.lon0) && (this.loader.projection = t, this._resize(), this.reload(), this.debug > 0 && console.log("Map Projection Changed:", t.ID, t.lon0), this.dispatchEvent({
      type: "projection-changed",
      projection: t
    }));
  }
  /** 取得影像数据源 */
  get imgSource() {
    return this.loader.imgSource;
  }
  /** 设置影像数据源 */
  set imgSource(t) {
    const o = Array.isArray(t) ? t : [t];
    if (o.length === 0)
      throw new Error("imgSource can not be empty");
    this.loader.imgSource = o, this.projection = Q.createFromID(o[0].projectionID, this.projection.lon0), this.debug > 0 && console.log("Img Source Changed:", o), this._updateSource(), this.dispatchEvent({ type: "source-changed", source: t });
  }
  /** 设置地形数据源 */
  get demSource() {
    return this.loader.demSource;
  }
  /** 取得地形数据源 */
  set demSource(t) {
    this.loader.demSource !== t && (this.loader.demSource = t, this.debug > 0 && console.log("DEM Source Changed:", this.demSource), this._updateSource(), this.dispatchEvent({ type: "source-changed", source: t }));
  }
  /** 取得LOD阈值	 */
  get LODThreshold() {
    return this._LODThreshold;
  }
  /** 设置LOD阈值，LOD阈值越大，瓦片细化，但耗费资源越高，建议取1-2之间，默认为1 */
  set LODThreshold(t) {
    this._LODThreshold = t;
  }
  /** 取得地图经纬度范围 */
  get bounds() {
    return this.loader.bounds;
  }
  /** 设置地图经纬度范围 */
  set bounds(t) {
    this.loader.bounds = t;
  }
  /** 取得最大线下载程数 */
  get maxThreads() {
    return this.loader.maxThreads;
  }
  /** 设置最大线下载程数 */
  set maxThreads(t) {
    this.loader.maxThreads = t;
  }
  /** @deprecated 取得背景色 */
  get backgroundColor() {
    return 0;
  }
  /** @deprecated 设置背景色 */
  set backgroundColor(t) {
  }
  /**
      * 地图创建工厂函数
        @param params 地图参数 {@link MapParams}
        @returns map mesh 地图模型
      */
  static create(t) {
    return new pt(t);
  }
  /**
   * 地图改变大小
   */
  _resize() {
    return this.rootTile.scale.set(this.projection.mapWidth, this.projection.mapHeight, this.projection.mapDepth), this.rootTile.updateMatrix(), this.rootTile.updateMatrixWorld(), this;
  }
  /**
   * 取得最大缩放级别
   * @returns 最大缩放级别
   */
  _getMaxLevel() {
    let t = 0;
    return this.imgSource.forEach((o) => t = Math.max(t, o.maxLevel)), this.demSource && (t = Math.max(t, this.demSource.maxLevel)), this.debug && console.log("Max Level:", t), t;
  }
  /**
   * 模型更新回调函数，地图加入场景后会在每帧更新时被调用，该函数调用根瓦片实现瓦片树更新和数据加载
   * @param camera 摄像机
   */
  update(t) {
    const o = this._mapClock.getElapsedTime();
    o > this.updateInterval / 1e3 && (this.rootTile.update({
      camera: t,
      loader: this.loader,
      minLevel: this.minLevel,
      maxLevel: this.maxLevel,
      LODThreshold: this.LODThreshold
    }), this.rootTile.castShadow = this.castShadow, this.rootTile.receiveShadow = this.receiveShadow, this.dispatchEvent({ type: "update", delta: o }), this._mapClock.start());
  }
  /**
   * 更新地图数据
   */
  _updateSource() {
    this._maxLevel = this._getMaxLevel(), this.rootTile.reload(this.loader, false);
  }
  /**
   * 销毁全部瓦片并重新加载
   */
  reload(t = true) {
    this.rootTile.reload(this.loader, t);
  }
  /**
   * 释放地图资源，并移出场景
   */
  dispose() {
    this.removeFromParent(), this.reload();
  }
  /**
   * 地理坐标转换为地图模型坐标(与geo2map同功能)
   * @param geo 地理坐标（经纬度）
   * @returns 模型坐标
   * @deprecated 废弃. 请使用 geo2map()
   */
  geo2pos(t) {
    return this.geo2map(t);
  }
  /**
   * 地理坐标转换为地图模型坐标(与geo2pos同功能)
   * @param geo 地理坐标（经纬度）
   * @returns 模型坐标
   */
  geo2map(t) {
    const o = this.projection.project(t.x, t.y);
    return new K(o.x, o.y, t.z);
  }
  /**
   * 地理坐标转换为世界坐标
   *
   * @param geo 地理坐标（经纬度）
   * @returns 世界坐标
   */
  geo2world(t) {
    return this.localToWorld(this.geo2map(t));
  }
  /**
   * 地图模型坐标转换为地理坐标(与map2geo同功能)
   * @param pos 模型坐标
   * @returns 地理坐标（经纬度）
   * @deprecated 废弃. 请使用 map2geo()
   */
  pos2geo(t) {
    return this.map2geo(t);
  }
  /**
   * 地图模型坐标转换为地理坐标(与pos2geo同功能)
   * @param map 模型坐标
   * @returns 地理坐标（经纬度）
   */
  map2geo(t) {
    const o = this.projection.unProject(t.x, t.y);
    return new K(o.lon, o.lat, t.z);
  }
  /**
   * 世界坐标转换为地理坐标
   * @param world 世界坐标
   * @returns 地理坐标（经纬度）
   */
  world2geo(t) {
    return this.pos2geo(this.worldToLocal(t.clone()));
  }
  /**
   * 获取指定经纬度的地面信息（法向量、高度等）
   * @param geo 地理坐标
   * @returns 地面信息
   */
  getLocalInfoFromGeo(t) {
    const o = this.geo2world(t);
    return _(this, o);
  }
  /**
   * 获取指定世界坐标的地面信息
   * @param pos 世界坐标
   * @returns 地面信息
   */
  getLocalInfoFromWorld(t) {
    return _(this, t);
  }
  /**
   * 获取指定屏幕坐标的地面信息
   * @param camera 摄像机
   * @param pointer 点的屏幕坐标（-0.5~0.5）
   * @returns 位置信息（经纬度、高度等）
   */
  getLocalInfoFromScreen(t, o) {
    return ys(t, this, o);
  }
  /**
   * 取得当前正在下载的瓦片数量
   */
  get downloading() {
    return this.loader.downloadingThreads;
  }
  /**
   * 取得地图瓦片状态统计信息
   */
  getTileCount() {
    let t = 0, o = 0, e = 0, i = 0, l = 0, r = 0;
    return this.rootTile.traverse((a) => {
      a instanceof g && (t++, a.isLeaf && (l++, a.showing && o++, a.inFrustum && e++), i = Math.max(i, a.z), r = this.loader.downloadingThreads);
    }), { total: t, leaf: l, visible: o, inFrustum: e, maxLevel: i, downloading: r };
  }
}
function yt(n) {
  return p.registerMaterialLoader(n), n;
}
function q(n) {
  return p.registerGeometryLoader(n), n;
}
function Vs() {
  yt(new ct$1()), q(new hs()), q(new as());
}
Vs();

var Ti = Object.defineProperty;
var Di = (i, e, t) => e in i ? Ti(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var A = (i, e, t) => Di(i, typeof e != "symbol" ? e + "" : e, t);
const {EventDispatcher:ki,Clock:ui,Scene:Ci,Color:De,FogExp2:Ut,WebGLRenderer:Fi,PerspectiveCamera:fi,AmbientLight:Li,DirectionalLight:Ai,Controls:Ot,Vector3:pe,Quaternion:ht,MOUSE:Ee,TOUCH:ke,Spherical:Kt,Vector2:be,Ray:Ii,Plane:Ui,MathUtils:Re,Euler:Oi,Mesh:ct,OrthographicCamera:Ri,BufferGeometry:Bi,Float32BufferAttribute:Yt,ShaderMaterial:ut,UniformsUtils:di,WebGLRenderTarget:zi,HalfFloatType:ji,NoBlending:Hi,Box3:pi,Sphere:Vi,PlaneGeometry:Ni,Raycaster:Gi,SphereGeometry:Ki,MeshLambertMaterial:Yi,MeshNormalMaterial:qi,MeshBasicMaterial:vi,ImageLoader:Xi,Texture:Wi,SRGBColorSpace:$i,FileLoader:Rt,TextureLoader:Ji,CanvasTexture:_i,UniformsLib:mt,Cache:$e,Group:Zi} = await importShared('three');
var We = function() {
  return performance.now();
}, ir = (
  /** @class */
  function() {
    function i() {
      this._tweens = {}, this._tweensAddedDuringUpdate = {};
    }
    return i.prototype.getAll = function() {
      var e = this;
      return Object.keys(this._tweens).map(function(t) {
        return e._tweens[t];
      });
    }, i.prototype.removeAll = function() {
      this._tweens = {};
    }, i.prototype.add = function(e) {
      this._tweens[e.getId()] = e, this._tweensAddedDuringUpdate[e.getId()] = e;
    }, i.prototype.remove = function(e) {
      delete this._tweens[e.getId()], delete this._tweensAddedDuringUpdate[e.getId()];
    }, i.prototype.update = function(e, t) {
      e === void 0 && (e = We()), t === void 0 && (t = false);
      var r = Object.keys(this._tweens);
      if (r.length === 0)
        return false;
      for (; r.length > 0; ) {
        this._tweensAddedDuringUpdate = {};
        for (var s = 0; s < r.length; s++) {
          var n = this._tweens[r[s]], o = !t;
          n && n.update(e, o) === false && !t && delete this._tweens[r[s]];
        }
        r = Object.keys(this._tweensAddedDuringUpdate);
      }
      return true;
    }, i;
  }()
), Ct = new ir();
var Ce = Ct;
Ce.getAll.bind(Ce);
Ce.removeAll.bind(Ce);
Ce.add.bind(Ce);
Ce.remove.bind(Ce);
Ce.update.bind(Ce);
new ht();
new Ii(); new Ui(); Math.cos(70 * Re.DEG2RAD); new pe();
new Oi(0, 0, 0, "YXZ"); new pe();
new Ri(-1, 1, 1, -1, 0, 1);
class Ur extends Bi {
  constructor() {
    super(), this.setAttribute("position", new Yt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new Yt([0, 2, 0, 0, 2, 0], 2));
  }
}
new Ur();
var F = {};
(function() {
  var i = function() {
    function s(n) {
      this.message = "JPEG error: " + n;
    }
    return s.prototype = new Error(), s.prototype.name = "JpegError", s.constructor = s, s;
  }(), e = function() {
    var s = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), n = 4017, o = 799, a = 3406, l = 2276, h = 1567, w = 3784, u = 5793, f = 2896;
    function y(M) {
      M == null && (M = {}), M.w == null && (M.w = -1), this.V = M.n, this.N = M.w;
    }
    function L(M, v) {
      for (var p = 0, m = [], b, x, T = 16, R; T > 0 && !M[T - 1]; )
        T--;
      m.push({ children: [], index: 0 });
      var P = m[0];
      for (b = 0; b < T; b++) {
        for (x = 0; x < M[b]; x++) {
          for (P = m.pop(), P.children[P.index] = v[p]; P.index > 0; )
            P = m.pop();
          for (P.index++, m.push(P); m.length <= b; )
            m.push(R = { children: [], index: 0 }), P.children[P.index] = R.children, P = R;
          p++;
        }
        b + 1 < T && (m.push(R = { children: [], index: 0 }), P.children[P.index] = R.children, P = R);
      }
      return m[0].children;
    }
    function g(M, v, p) {
      return 64 * ((M.P + 1) * v + p);
    }
    function c(M, v, p, m, b, x, T, R, P, k) {
      k == null && (k = false);
      var I = p.m, H = p.Z, N = v, V = 0, S = 0, C = 0, E = 0, U, O = 0, G, K, j, z, B, Y, re = 0, q, ee, ie, Q;
      function Z() {
        if (S > 0)
          return S--, V >> S & 1;
        if (V = M[v++], V === 255) {
          var $ = M[v++];
          if ($) {
            if ($ === 220 && k) {
              v += 2;
              var se = t(M, v);
              if (v += 2, se > 0 && se !== p.s)
                throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", se);
            } else if ($ === 217) {
              if (k) {
                var oe = O * 8;
                if (oe > 0 && oe < p.s / 10)
                  throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter", oe);
              }
              throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
            }
            throw new i("unexpected marker");
          }
        }
        return S = 7, V >>> 7;
      }
      function J($) {
        for (var se = $; ; ) {
          switch (se = se[Z()], typeof se) {
            case "number":
              return se;
            case "object":
              continue;
          }
          throw new i("invalid huffman sequence");
        }
      }
      function X($) {
        for (var se = 0; $ > 0; )
          se = se << 1 | Z(), $--;
        return se;
      }
      function W($) {
        if ($ === 1)
          return Z() === 1 ? 1 : -1;
        var se = X($);
        return se >= 1 << $ - 1 ? se : se + (-1 << $) + 1;
      }
      function le($, se) {
        var oe = J($.J), me = oe === 0 ? 0 : W(oe), he = 1;
        for ($.D[se] = $.Q += me; he < 64; ) {
          var ce = J($.i), ue = ce & 15, te = ce >> 4;
          if (ue === 0) {
            if (te < 15)
              break;
            he += 16;
            continue;
          }
          he += te;
          var we = s[he];
          $.D[se + we] = W(ue), he++;
        }
      }
      function fe($, se) {
        var oe = J($.J), me = oe === 0 ? 0 : W(oe) << P;
        $.D[se] = $.Q += me;
      }
      function ve($, se) {
        $.D[se] |= Z() << P;
      }
      function Me($, se) {
        if (C > 0) {
          C--;
          return;
        }
        for (var oe = x, me = T; oe <= me; ) {
          var he = J($.i), ce = he & 15, ue = he >> 4;
          if (ce === 0) {
            if (ue < 15) {
              C = X(ue) + (1 << ue) - 1;
              break;
            }
            oe += 16;
            continue;
          }
          oe += ue;
          var te = s[oe];
          $.D[se + te] = W(ce) * (1 << P), oe++;
        }
      }
      function ne($, se) {
        for (var oe = x, me = T, he = 0, ce, ue; oe <= me; ) {
          var te = se + s[oe], we = $.D[te] < 0 ? -1 : 1;
          switch (E) {
            case 0:
              if (ue = J($.i), ce = ue & 15, he = ue >> 4, ce === 0)
                he < 15 ? (C = X(he) + (1 << he), E = 4) : (he = 16, E = 1);
              else {
                if (ce !== 1)
                  throw new i("invalid ACn encoding");
                U = W(ce), E = he ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              $.D[te] ? $.D[te] += we * (Z() << P) : (he--, he === 0 && (E = E === 2 ? 3 : 0));
              break;
            case 3:
              $.D[te] ? $.D[te] += we * (Z() << P) : ($.D[te] = U << P, E = 0);
              break;
            case 4:
              $.D[te] && ($.D[te] += we * (Z() << P));
              break;
          }
          oe++;
        }
        E === 4 && (C--, C === 0 && (E = 0));
      }
      function de($, se, oe, me, he) {
        var ce = oe / I | 0, ue = oe % I;
        O = ce * $.A + me;
        var te = ue * $.h + he, we = g($, O, te);
        se($, we);
      }
      function Pe($, se, oe) {
        O = oe / $.P | 0;
        var me = oe % $.P, he = g($, O, me);
        se($, he);
      }
      var ye = m.length;
      for (H ? x === 0 ? Y = R === 0 ? fe : ve : Y = R === 0 ? Me : ne : Y = le, ye === 1 ? ee = m[0].P * m[0].c : ee = I * p.R; re <= ee; ) {
        var Be = b ? Math.min(ee - re, b) : ee;
        if (Be > 0) {
          for (K = 0; K < ye; K++)
            m[K].Q = 0;
          if (C = 0, ye === 1)
            for (G = m[0], B = 0; B < Be; B++)
              Pe(G, Y, re), re++;
          else
            for (B = 0; B < Be; B++) {
              for (K = 0; K < ye; K++)
                for (G = m[K], ie = G.h, Q = G.A, j = 0; j < Q; j++)
                  for (z = 0; z < ie; z++)
                    de(G, Y, re, j, z);
              re++;
            }
        }
        if (S = 0, q = D(M, v), !q)
          break;
        if (q.u && (v = q.offset), q.M >= 65488 && q.M <= 65495)
          v += 2;
        else
          break;
      }
      return v - N;
    }
    function d(M, v, p) {
      var m = M.$, b = M.D, x, T, R, P, k, I, H, N, V, S, C, E, U, O, G, K, j;
      if (!m)
        throw new i("missing required Quantization Table.");
      for (var z = 0; z < 64; z += 8) {
        if (V = b[v + z], S = b[v + z + 1], C = b[v + z + 2], E = b[v + z + 3], U = b[v + z + 4], O = b[v + z + 5], G = b[v + z + 6], K = b[v + z + 7], V *= m[z], !(S | C | E | U | O | G | K)) {
          j = u * V + 512 >> 10, p[z] = j, p[z + 1] = j, p[z + 2] = j, p[z + 3] = j, p[z + 4] = j, p[z + 5] = j, p[z + 6] = j, p[z + 7] = j;
          continue;
        }
        S *= m[z + 1], C *= m[z + 2], E *= m[z + 3], U *= m[z + 4], O *= m[z + 5], G *= m[z + 6], K *= m[z + 7], x = u * V + 128 >> 8, T = u * U + 128 >> 8, R = C, P = G, k = f * (S - K) + 128 >> 8, N = f * (S + K) + 128 >> 8, I = E << 4, H = O << 4, x = x + T + 1 >> 1, T = x - T, j = R * w + P * h + 128 >> 8, R = R * h - P * w + 128 >> 8, P = j, k = k + H + 1 >> 1, H = k - H, N = N + I + 1 >> 1, I = N - I, x = x + P + 1 >> 1, P = x - P, T = T + R + 1 >> 1, R = T - R, j = k * l + N * a + 2048 >> 12, k = k * a - N * l + 2048 >> 12, N = j, j = I * o + H * n + 2048 >> 12, I = I * n - H * o + 2048 >> 12, H = j, p[z] = x + N, p[z + 7] = x - N, p[z + 1] = T + H, p[z + 6] = T - H, p[z + 2] = R + I, p[z + 5] = R - I, p[z + 3] = P + k, p[z + 4] = P - k;
      }
      for (var B = 0; B < 8; ++B) {
        if (V = p[B], S = p[B + 8], C = p[B + 16], E = p[B + 24], U = p[B + 32], O = p[B + 40], G = p[B + 48], K = p[B + 56], !(S | C | E | U | O | G | K)) {
          j = u * V + 8192 >> 14, j < -2040 ? j = 0 : j >= 2024 ? j = 255 : j = j + 2056 >> 4, b[v + B] = j, b[v + B + 8] = j, b[v + B + 16] = j, b[v + B + 24] = j, b[v + B + 32] = j, b[v + B + 40] = j, b[v + B + 48] = j, b[v + B + 56] = j;
          continue;
        }
        x = u * V + 2048 >> 12, T = u * U + 2048 >> 12, R = C, P = G, k = f * (S - K) + 2048 >> 12, N = f * (S + K) + 2048 >> 12, I = E, H = O, x = (x + T + 1 >> 1) + 4112, T = x - T, j = R * w + P * h + 2048 >> 12, R = R * h - P * w + 2048 >> 12, P = j, k = k + H + 1 >> 1, H = k - H, N = N + I + 1 >> 1, I = N - I, x = x + P + 1 >> 1, P = x - P, T = T + R + 1 >> 1, R = T - R, j = k * l + N * a + 2048 >> 12, k = k * a - N * l + 2048 >> 12, N = j, j = I * o + H * n + 2048 >> 12, I = I * n - H * o + 2048 >> 12, H = j, V = x + N, K = x - N, S = T + H, G = T - H, C = R + I, O = R - I, E = P + k, U = P - k, V < 16 ? V = 0 : V >= 4080 ? V = 255 : V >>= 4, S < 16 ? S = 0 : S >= 4080 ? S = 255 : S >>= 4, C < 16 ? C = 0 : C >= 4080 ? C = 255 : C >>= 4, E < 16 ? E = 0 : E >= 4080 ? E = 255 : E >>= 4, U < 16 ? U = 0 : U >= 4080 ? U = 255 : U >>= 4, O < 16 ? O = 0 : O >= 4080 ? O = 255 : O >>= 4, G < 16 ? G = 0 : G >= 4080 ? G = 255 : G >>= 4, K < 16 ? K = 0 : K >= 4080 ? K = 255 : K >>= 4, b[v + B] = V, b[v + B + 8] = S, b[v + B + 16] = C, b[v + B + 24] = E, b[v + B + 32] = U, b[v + B + 40] = O, b[v + B + 48] = G, b[v + B + 56] = K;
      }
    }
    function _(M, v) {
      for (var p = v.P, m = v.c, b = new Int16Array(64), x = 0; x < m; x++)
        for (var T = 0; T < p; T++) {
          var R = g(v, x, T);
          d(v, R, b);
        }
      return v.D;
    }
    function D(M, v, p) {
      p == null && (p = v);
      var m = M.length - 1, b = p < v ? p : v;
      if (v >= m)
        return null;
      var x = t(M, v);
      if (x >= 65472 && x <= 65534)
        return { u: null, M: x, offset: v };
      for (var T = t(M, b); !(T >= 65472 && T <= 65534); ) {
        if (++b >= m)
          return null;
        T = t(M, b);
      }
      return { u: x.toString(16), M: T, offset: b };
    }
    return y.prototype = { parse(M, v) {
      v == null && (v = {});
      var p = v.F, m = 0, b = null, x = null, T, R, P = 0;
      function k() {
        var te = t(M, m);
        m += 2;
        var we = m + te - 2, Ae = D(M, we, m);
        Ae && Ae.u && (we = Ae.offset);
        var Te = M.subarray(m, we);
        return m += Te.length, Te;
      }
      function I(te) {
        for (var we = Math.ceil(te.o / 8 / te.X), Ae = Math.ceil(te.s / 8 / te.B), Te = 0; Te < te.W.length; Te++) {
          ne = te.W[Te];
          var Qe = Math.ceil(Math.ceil(te.o / 8) * ne.h / te.X), pt = Math.ceil(Math.ceil(te.s / 8) * ne.A / te.B), vt = we * ne.h, _t = Ae * ne.A, gt = 64 * _t * (vt + 1);
          ne.D = new Int16Array(gt), ne.P = Qe, ne.c = pt;
        }
        te.m = we, te.R = Ae;
      }
      var H = [], N = [], V = [], S = t(M, m);
      if (m += 2, S !== 65496)
        throw new i("SOI not found");
      S = t(M, m), m += 2;
      e: for (; S !== 65497; ) {
        var C, E, U;
        switch (S) {
          case 65504:
          case 65505:
          case 65506:
          case 65507:
          case 65508:
          case 65509:
          case 65510:
          case 65511:
          case 65512:
          case 65513:
          case 65514:
          case 65515:
          case 65516:
          case 65517:
          case 65518:
          case 65519:
          case 65534:
            var O = k();
            S === 65504 && O[0] === 74 && O[1] === 70 && O[2] === 73 && O[3] === 70 && O[4] === 0 && (b = { version: { d: O[5], T: O[6] }, K: O[7], j: O[8] << 8 | O[9], H: O[10] << 8 | O[11], S: O[12], I: O[13], C: O.subarray(14, 14 + 3 * O[12] * O[13]) }), S === 65518 && O[0] === 65 && O[1] === 100 && O[2] === 111 && O[3] === 98 && O[4] === 101 && (x = { version: O[5] << 8 | O[6], k: O[7] << 8 | O[8], q: O[9] << 8 | O[10], a: O[11] });
            break;
          case 65499:
            var G = t(M, m), K;
            m += 2;
            for (var j = G + m - 2; m < j; ) {
              var z = M[m++], B = new Uint16Array(64);
              if (z >> 4)
                if (z >> 4 === 1)
                  for (E = 0; E < 64; E++)
                    K = s[E], B[K] = t(M, m), m += 2;
                else
                  throw new i("DQT - invalid table spec");
              else for (E = 0; E < 64; E++)
                K = s[E], B[K] = M[m++];
              H[z & 15] = B;
            }
            break;
          case 65472:
          case 65473:
          case 65474:
            if (T)
              throw new i("Only single frame JPEGs supported");
            m += 2, T = {}, T.G = S === 65473, T.Z = S === 65474, T.precision = M[m++];
            var Y = t(M, m), re, q = 0, ee = 0;
            m += 2, T.s = p || Y, T.o = t(M, m), m += 2, T.W = [], T._ = {};
            var ie = M[m++];
            for (C = 0; C < ie; C++) {
              re = M[m];
              var Q = M[m + 1] >> 4, Z = M[m + 1] & 15;
              q < Q && (q = Q), ee < Z && (ee = Z);
              var J = M[m + 2];
              U = T.W.push({ h: Q, A: Z, L: J, $: null }), T._[re] = U - 1, m += 3;
            }
            T.X = q, T.B = ee, I(T);
            break;
          case 65476:
            var X = t(M, m);
            for (m += 2, C = 2; C < X; ) {
              var W = M[m++], le = new Uint8Array(16), fe = 0;
              for (E = 0; E < 16; E++, m++)
                fe += le[E] = M[m];
              var ve = new Uint8Array(fe);
              for (E = 0; E < fe; E++, m++)
                ve[E] = M[m];
              C += 17 + fe, (W >> 4 ? N : V)[W & 15] = L(le, ve);
            }
            break;
          case 65501:
            m += 2, R = t(M, m), m += 2;
            break;
          case 65498:
            var Me = ++P === 1 && !p, ne;
            m += 2;
            var de = M[m++], Pe = [];
            for (C = 0; C < de; C++) {
              var ye = M[m++], Be = T._[ye];
              ne = T.W[Be], ne.index = ye;
              var $ = M[m++];
              ne.J = V[$ >> 4], ne.i = N[$ & 15], Pe.push(ne);
            }
            var se = M[m++], oe = M[m++], me = M[m++];
            try {
              var he = c(M, m, T, Pe, R, se, oe, me >> 4, me & 15, Me);
              m += he;
            } catch (te) {
              if (te instanceof DNLMarkerError)
                return this.parse(M, { F: te.s });
              if (te instanceof EOIMarkerError)
                break e;
              throw te;
            }
            break;
          case 65500:
            m += 4;
            break;
          case 65535:
            M[m] !== 255 && m--;
            break;
          default:
            var ce = D(M, m - 2, m - 3);
            if (ce && ce.u) {
              m = ce.offset;
              break;
            }
            if (m >= M.length - 1)
              break e;
            throw new i("JpegImage.parse - unknown marker: " + S.toString(16));
        }
        S = t(M, m), m += 2;
      }
      for (this.width = T.o, this.height = T.s, this.g = b, this.b = x, this.W = [], C = 0; C < T.W.length; C++) {
        ne = T.W[C];
        var ue = H[ne.L];
        ue && (ne.$ = ue), this.W.push({ index: ne.index, e: _(T, ne), l: ne.h / T.X, t: ne.A / T.B, P: ne.P, c: ne.c });
      }
      this.p = this.W.length;
    }, Y(M, v, p) {
      p == null && (p = false);
      var m = this.width / M, b = this.height / v, x, T, R, P, k, I, H, N, V, S, C = 0, E, U = this.W.length, O = M * v * U, G = new Uint8ClampedArray(O), K = new Uint32Array(M), j = 4294967288, z;
      for (H = 0; H < U; H++) {
        if (x = this.W[H], T = x.l * m, R = x.t * b, C = H, E = x.e, P = x.P + 1 << 3, T !== z) {
          for (k = 0; k < M; k++)
            N = 0 | k * T, K[k] = (N & j) << 3 | N & 7;
          z = T;
        }
        for (I = 0; I < v; I++)
          for (N = 0 | I * R, S = P * (N & j) | (N & 7) << 3, k = 0; k < M; k++)
            G[C] = E[S + K[k]], C += U;
      }
      var B = this.V;
      if (!p && U === 4 && !B && (B = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])), B)
        for (H = 0; H < O; )
          for (N = 0, V = 0; N < U; N++, H++, V += 2)
            G[H] = (G[H] * B[V] >> 8) + B[V + 1];
      return G;
    }, get f() {
      return this.b ? !!this.b.a : this.p === 3 ? this.N === 0 ? false : !(this.W[0].index === 82 && this.W[1].index === 71 && this.W[2].index === 66) : this.N === 1;
    }, z: function(v) {
      for (var p, m, b, x = 0, T = v.length; x < T; x += 3)
        p = v[x], m = v[x + 1], b = v[x + 2], v[x] = p - 179.456 + 1.402 * b, v[x + 1] = p + 135.459 - 0.344 * m - 0.714 * b, v[x + 2] = p - 226.816 + 1.772 * m;
      return v;
    }, O: function(v) {
      for (var p, m, b, x, T = 0, R = 0, P = v.length; R < P; R += 4)
        p = v[R], m = v[R + 1], b = v[R + 2], x = v[R + 3], v[T++] = -122.67195406894 + m * (-660635669420364e-19 * m + 437130475926232e-18 * b - 54080610064599e-18 * p + 48449797120281e-17 * x - 0.154362151871126) + b * (-957964378445773e-18 * b + 817076911346625e-18 * p - 0.00477271405408747 * x + 1.53380253221734) + p * (961250184130688e-18 * p - 0.00266257332283933 * x + 0.48357088451265) + x * (-336197177618394e-18 * x + 0.484791561490776), v[T++] = 107.268039397724 + m * (219927104525741e-19 * m - 640992018297945e-18 * b + 659397001245577e-18 * p + 426105652938837e-18 * x - 0.176491792462875) + b * (-778269941513683e-18 * b + 0.00130872261408275 * p + 770482631801132e-18 * x - 0.151051492775562) + p * (0.00126935368114843 * p - 0.00265090189010898 * x + 0.25802910206845) + x * (-318913117588328e-18 * x - 0.213742400323665), v[T++] = -20.810012546947 + m * (-570115196973677e-18 * m - 263409051004589e-19 * b + 0.0020741088115012 * p - 0.00288260236853442 * x + 0.814272968359295) + b * (-153496057440975e-19 * b - 132689043961446e-18 * p + 560833691242812e-18 * x - 0.195152027534049) + p * (0.00174418132927582 * p - 0.00255243321439347 * x + 0.116935020465145) + x * (-343531996510555e-18 * x + 0.24165260232407);
      return v.subarray(0, T);
    }, r: function(v) {
      for (var p, m, b, x = 0, T = v.length; x < T; x += 4)
        p = v[x], m = v[x + 1], b = v[x + 2], v[x] = 434.456 - p - 1.402 * b, v[x + 1] = 119.541 - p + 0.344 * m + 0.714 * b, v[x + 2] = 481.816 - p - 1.772 * m;
      return v;
    }, U: function(v) {
      for (var p, m, b, x, T = 0, R = 0, P = v.length; R < P; R += 4)
        p = v[R], m = v[R + 1], b = v[R + 2], x = v[R + 3], v[T++] = 255 + p * (-6747147073602441e-20 * p + 8379262121013727e-19 * m + 2894718188643294e-19 * b + 0.003264231057537806 * x - 1.1185611867203937) + m * (26374107616089405e-21 * m - 8626949158638572e-20 * b - 2748769067499491e-19 * x - 0.02155688794978967) + b * (-3878099212869363e-20 * b - 3267808279485286e-19 * x + 0.0686742238595345) - x * (3361971776183937e-19 * x + 0.7430659151342254), v[T++] = 255 + p * (13596372813588848e-20 * p + 924537132573585e-18 * m + 10567359618683593e-20 * b + 4791864687436512e-19 * x - 0.3109689587515875) + m * (-23545346108370344e-20 * m + 2702845253534714e-19 * b + 0.0020200308977307156 * x - 0.7488052167015494) + b * (6834815998235662e-20 * b + 15168452363460973e-20 * x - 0.09751927774728933) - x * (3189131175883281e-19 * x + 0.7364883807733168), v[T++] = 255 + p * (13598650411385307e-21 * p + 12423956175490851e-20 * m + 4751985097583589e-19 * b - 36729317476630422e-22 * x - 0.05562186980264034) + m * (16141380598724676e-20 * m + 9692239130725186e-19 * b + 7782692450036253e-19 * x - 0.44015232367526463) + b * (5068882914068769e-22 * b + 0.0017778369011375071 * x - 0.7591454649749609) - x * (3435319965105553e-19 * x + 0.7063770186160144);
      return v.subarray(0, T);
    }, getData: function(M) {
      var v = M.width, p = M.height, m = M.forceRGB, b = M.isSourcePDF;
      if (this.p > 4)
        throw new i("Unsupported color mode");
      var x = this.Y(v, p, b);
      if (this.p === 1 && m) {
        for (var T = x.length, R = new Uint8ClampedArray(T * 3), P = 0, k = 0; k < T; k++) {
          var I = x[k];
          R[P++] = I, R[P++] = I, R[P++] = I;
        }
        return R;
      } else {
        if (this.p === 3 && this.f)
          return this.z(x);
        if (this.p === 4) {
          if (this.f)
            return m ? this.O(x) : this.r(x);
          if (m)
            return this.U(x);
        }
      }
      return x;
    } }, y;
  }();
  function t(r, s) {
    return r[s] << 8 | r[s + 1];
  }
  F.JpegDecoder = e;
})();
F.encodeImage = function(i, e, t, r) {
  var s = {
    t256: [e],
    t257: [t],
    t258: [8, 8, 8, 8],
    t259: [1],
    t262: [2],
    t273: [1e3],
    // strips offset
    t277: [4],
    t278: [t],
    /* rows per strip */
    t279: [e * t * 4],
    // strip byte counts
    t282: [[72, 1]],
    t283: [[72, 1]],
    t284: [1],
    t286: [[0, 1]],
    t287: [[0, 1]],
    t296: [1],
    t305: ["Photopea (UTIF.js)"],
    t338: [1]
  };
  if (r) for (var n in r) s[n] = r[n];
  for (var o = new Uint8Array(F.encode([s])), a = new Uint8Array(i), l = new Uint8Array(1e3 + e * t * 4), n = 0; n < o.length; n++) l[n] = o[n];
  for (var n = 0; n < a.length; n++) l[1e3 + n] = a[n];
  return l.buffer;
};
F.encode = function(i) {
  var e = new Uint8Array(2e4), t = 4, r = F._binBE;
  e[0] = e[1] = 77, r.writeUshort(e, 2, 42);
  var s = 8;
  r.writeUint(e, t, s), t += 4;
  for (var n = 0; n < i.length; n++) {
    var o = F._writeIFD(r, F._types.basic, e, s, i[n]);
    s = o[1], n < i.length - 1 && (s & 3 && (s += 4 - (s & 3)), r.writeUint(e, o[0], s));
  }
  return e.slice(0, s).buffer;
};
F.decode = function(i, e) {
  e == null && (e = { parseMN: true, debug: false });
  var t = new Uint8Array(i), r = 0, s = F._binBE.readASCII(t, r, 2);
  r += 2;
  var n = s == "II" ? F._binLE : F._binBE;
  n.readUshort(t, r), r += 2;
  var o = n.readUint(t, r);
  r += 4;
  for (var a = []; ; ) {
    var l = n.readUshort(t, o), h = n.readUshort(t, o + 4);
    if (l != 0 && (h < 1 || 13 < h)) {
      log("error in TIFF");
      break;
    }
    if (F._readIFD(n, t, o, a, 0, e), o = n.readUint(t, o + 2 + l * 12), o == 0) break;
  }
  return a;
};
F.decodeImage = function(i, e, t) {
  if (!e.data) {
    var r = new Uint8Array(i), s = F._binBE.readASCII(r, 0, 2);
    if (e.t256 != null) {
      e.isLE = s == "II", e.width = e.t256[0], e.height = e.t257[0];
      var n = e.t259 ? e.t259[0] : 1, o = e.t266 ? e.t266[0] : 1;
      e.t284 && e.t284[0] == 2 && log("PlanarConfiguration 2 should not be used!"), n == 7 && e.t258 && e.t258.length > 3 && (e.t258 = e.t258.slice(0, 3));
      var a = e.t277 ? e.t277[0] : 1, l = e.t258 ? e.t258[0] : 1, h = l * a;
      n == 1 && e.t279 != null && e.t278 && e.t262[0] == 32803 && (h = Math.round(e.t279[0] * 8 / (e.width * e.t278[0]))), e.t50885 && e.t50885[0] == 4 && (h = e.t258[0] * 3);
      var w = Math.ceil(e.width * h / 8) * 8, u = e.t273;
      (u == null || e.t322) && (u = e.t324);
      var f = e.t279;
      n == 1 && u.length == 1 && (f = [e.height * (w >>> 3)]), (f == null || e.t322) && (f = e.t325);
      var y = new Uint8Array(e.height * (w >>> 3)), L = 0;
      if (e.t322 != null) {
        var g = e.t322[0], c = e.t323[0], d = Math.floor((e.width + g - 1) / g), _ = Math.floor((e.height + c - 1) / c), D = new Uint8Array(Math.ceil(g * c * h / 8) | 0);
        console.log("====", d, _);
        for (var M = 0; M < _; M++)
          for (var v = 0; v < d; v++) {
            var p = M * d + v;
            D.fill(0), F.decode._decompress(e, t, r, u[p], f[p], n, D, 0, o, g, c), n == 6 ? y = D : F._copyTile(D, Math.ceil(g * h / 8) | 0, c, y, Math.ceil(e.width * h / 8) | 0, e.height, Math.ceil(v * g * h / 8) | 0, M * c);
          }
        L = y.length * 8;
      } else {
        if (u == null) return;
        var m = e.t278 ? e.t278[0] : e.height;
        m = Math.min(m, e.height);
        for (var p = 0; p < u.length; p++)
          F.decode._decompress(e, t, r, u[p], f[p], n, y, Math.ceil(L / 8) | 0, o, e.width, m), L += w * m;
        L = Math.min(L, y.length * 8);
      }
      e.data = new Uint8Array(y.buffer, 0, Math.ceil(L / 8) | 0);
    }
  }
};
F.decode._decompress = function(i, e, t, r, s, n, o, a, l, h, w) {
  if (i.t271 && i.t271[0] == "Panasonic" && i.t45 && i.t45[0] == 6 && (n = 34316), n == 1) for (var u = 0; u < s; u++) o[a + u] = t[r + u];
  else if (n == 2) F.decode._decodeG2(t, r, s, o, a, h, l);
  else if (n == 3) F.decode._decodeG3(t, r, s, o, a, h, l, i.t292 ? (i.t292[0] & 1) == 1 : false);
  else if (n == 4) F.decode._decodeG4(t, r, s, o, a, h, l);
  else if (n == 5) F.decode._decodeLZW(t, r, s, o, a, 8);
  else if (n == 6) F.decode._decodeOldJPEG(i, t, r, s, o, a);
  else if (n == 7 || n == 34892) F.decode._decodeNewJPEG(i, t, r, s, o, a);
  else if (n == 8 || n == 32946) {
    var f = new Uint8Array(t.buffer, r + 2, s - 6), y = F._inflateRaw(f);
    a + y.length <= o.length && o.set(y, a);
  } else n == 9 ? F.decode._decodeVC5(t, r, s, o, a, i.t33422) : n == 32767 ? F.decode._decodeARW(i, t, r, s, o, a) : n == 32773 ? F.decode._decodePackBits(t, r, s, o, a) : n == 32809 ? F.decode._decodeThunder(t, r, s, o, a) : n == 34316 ? F.decode._decodePanasonic(i, t, r, s, o, a) : n == 34713 ? F.decode._decodeNikon(i, e, t, r, s, o, a) : n == 34676 ? F.decode._decodeLogLuv32(i, t, r, s, o, a) : log("Unknown compression", n);
  var L = i.t258 ? Math.min(32, i.t258[0]) : 1, g = i.t277 ? i.t277[0] : 1, c = L * g >>> 3, d = Math.ceil(L * g * h / 8);
  if (L == 16 && !i.isLE && i.t33422 == null)
    for (var _ = 0; _ < w; _++)
      for (var D = a + _ * d, M = 1; M < d; M += 2) {
        var v = o[D + M];
        o[D + M] = o[D + M - 1], o[D + M - 1] = v;
      }
  if (i.t317 && i.t317[0] == 2)
    for (var _ = 0; _ < w; _++) {
      var p = a + _ * d;
      if (L == 16) for (var u = c; u < d; u += 2) {
        var m = (o[p + u + 1] << 8 | o[p + u]) + (o[p + u - c + 1] << 8 | o[p + u - c]);
        o[p + u] = m & 255, o[p + u + 1] = m >>> 8 & 255;
      }
      else if (g == 3) for (var u = 3; u < d; u += 3)
        o[p + u] = o[p + u] + o[p + u - 3] & 255, o[p + u + 1] = o[p + u + 1] + o[p + u - 2] & 255, o[p + u + 2] = o[p + u + 2] + o[p + u - 1] & 255;
      else for (var u = c; u < d; u++) o[p + u] = o[p + u] + o[p + u - c] & 255;
    }
};
F.decode._decodePanasonic = function(i, e, t, r, s, n) {
  var o = e.buffer, a = i.t2[0], l = i.t3[0], h = i.t10[0], w = i.t45[0], u = 0, f = 0, y = 0, L = 0, g = w == 6 ? new Uint32Array(18) : new Uint8Array(16), c, d, _, D = [0, 0], M = [0, 0], v, p = 0, m, b, x, T, R = new Uint8Array(16384), P = new Uint16Array(s.buffer);
  function k(Z) {
    if (y == 0) {
      var J = new Uint8Array(o, t + f + 8184, 8200), X = new Uint8Array(o, t + f, 8184);
      R.set(J), R.set(X, J.length), f += 16384;
    }
    if (w == 5)
      for (c = 0; c < 16; c++)
        g[c] = R[y++], y &= 16383;
    else
      return y = y - Z & 131071, L = y >> 3 ^ 16368, (R[L] | R[L + 1] << 8) >> (y & 7) & ~(-1 << Z);
  }
  function I(Z) {
    return R[y + 15 - Z];
  }
  function H() {
    g[0] = I(0) << 6 | I(1) >> 2, g[1] = ((I(1) & 3) << 12 | I(2) << 4 | I(3) >> 4) & 16383, g[2] = I(3) >> 2 & 3, g[3] = (I(3) & 3) << 8 | I(4), g[4] = I(5) << 2 | I(6) >> 6, g[5] = (I(6) & 63) << 4 | I(7) >> 4, g[6] = I(7) >> 2 & 3, g[7] = (I(7) & 3) << 8 | I(8), g[8] = I(9) << 2 & 1020 | I(10) >> 6, g[9] = (I(10) << 4 | I(11) >> 4) & 1023, g[10] = I(11) >> 2 & 3, g[11] = (I(11) & 3) << 8 | I(12), g[12] = (I(13) << 2 & 1020 | I(14) >> 6) & 1023, g[13] = (I(14) << 4 | I(15) >> 4) & 1023, y += 16, L = 0;
  }
  function N() {
    g[0] = I(0) << 4 | I(1) >> 4, g[1] = ((I(1) & 15) << 8 | I(2)) & 4095, g[2] = I(3) >> 6 & 3, g[3] = (I(3) & 63) << 2 | I(4) >> 6, g[4] = (I(4) & 63) << 2 | I(5) >> 6, g[5] = (I(5) & 63) << 2 | I(6) >> 6, g[6] = I(6) >> 4 & 3, g[7] = (I(6) & 15) << 4 | I(7) >> 4, g[8] = (I(7) & 15) << 4 | I(8) >> 4, g[9] = (I(8) & 15) << 4 | I(9) >> 4, g[10] = I(9) >> 2 & 3, g[11] = (I(9) & 3) << 6 | I(10) >> 2, g[12] = (I(10) & 3) << 6 | I(11) >> 2, g[13] = (I(11) & 3) << 6 | I(12) >> 2, g[14] = I(12) & 3, g[15] = I(13), g[16] = I(14), g[17] = I(15), y += 16, L = 0;
  }
  function V() {
    D[0] = 0, D[1] = 0, M[0] = 0, M[1] = 0;
  }
  if (w == 7)
    throw w;
  if (w == 6) {
    var S = h == 12, C = S ? N : H, E = S ? 14 : 11, U = S ? 128 : 512, O = S ? 2048 : 8192, G = S ? 16383 : 65535, K = S ? 4095 : 16383, j = a / E, z = j * 16, B = S ? 18 : 14;
    for (b = 0; b < l - 15; b += 16) {
      var Y = Math.min(16, l - b), re = z * Y;
      for (R = new Uint8Array(o, t + u, re), y = 0, u += re, T = 0, x = 0; T < Y; T++, x = 0) {
        p = (b + T) * a;
        for (var q = 0; q < j; q++)
          for (C(), V(), _ = 0, m = 0, c = 0; c < E; c++) {
            if (v = c & 1, c % 3 == 2) {
              var ee = L < B ? g[L++] : 0;
              ee == 3 && (ee = 4), m = U << ee, _ = 1 << ee;
            }
            var ie = L < B ? g[L++] : 0;
            D[v] ? (ie *= _, m < O && M[v] > m && (ie += M[v] - m), M[v] = ie) : (D[v] = ie, ie ? M[v] = ie : ie = M[v]), P[p + x++] = ie - 15 <= G ? ie - 15 & G : ie + 2147483633 >> 31 & K;
          }
      }
    }
  } else if (w == 5) {
    var Q = h == 12 ? 10 : 9;
    for (b = 0; b < l; b++)
      for (x = 0; x < a; x += Q)
        k(0), h == 12 ? (P[p++] = ((g[1] & 15) << 8) + g[0], P[p++] = 16 * g[2] + (g[1] >> 4), P[p++] = ((g[4] & 15) << 8) + g[3], P[p++] = 16 * g[5] + (g[4] >> 4), P[p++] = ((g[7] & 15) << 8) + g[6], P[p++] = 16 * g[8] + (g[7] >> 4), P[p++] = ((g[10] & 15) << 8) + g[9], P[p++] = 16 * g[11] + (g[10] >> 4), P[p++] = ((g[13] & 15) << 8) + g[12], P[p++] = 16 * g[14] + (g[13] >> 4)) : h == 14 && (P[p++] = g[0] + ((g[1] & 63) << 8), P[p++] = (g[1] >> 6) + 4 * g[2] + ((g[3] & 15) << 10), P[p++] = (g[3] >> 4) + 16 * g[4] + ((g[5] & 3) << 12), P[p++] = ((g[5] & 252) >> 2) + (g[6] << 6), P[p++] = g[7] + ((g[8] & 63) << 8), P[p++] = (g[8] >> 6) + 4 * g[9] + ((g[10] & 15) << 10), P[p++] = (g[10] >> 4) + 16 * g[11] + ((g[12] & 3) << 12), P[p++] = ((g[12] & 252) >> 2) + (g[13] << 6), P[p++] = g[14] + ((g[15] & 63) << 8));
  } else if (w == 4)
    for (b = 0; b < l; b++)
      for (x = 0; x < a; x++)
        c = x % 14, v = c & 1, c == 0 && V(), c % 3 == 2 && (_ = 4 >> 3 - k(2)), M[v] ? (d = k(8), d != 0 && (D[v] -= 128 << _, (D[v] < 0 || _ == 4) && (D[v] &= ~(-1 << _)), D[v] += d << _)) : (M[v] = k(8), (M[v] || c > 11) && (D[v] = M[v] << 4 | k(4))), P[p++] = D[x & 1];
  else throw w;
};
F.decode._decodeVC5 = function() {
  var i = [1, 0, 1, 0, 2, 2, 1, 1, 3, 7, 1, 2, 5, 25, 1, 3, 6, 48, 1, 4, 6, 54, 1, 5, 7, 111, 1, 8, 7, 99, 1, 6, 7, 105, 12, 0, 7, 107, 1, 7, 8, 209, 20, 0, 8, 212, 1, 9, 8, 220, 1, 10, 9, 393, 1, 11, 9, 394, 32, 0, 9, 416, 1, 12, 9, 427, 1, 13, 10, 887, 1, 18, 10, 784, 1, 14, 10, 790, 1, 15, 10, 835, 60, 0, 10, 852, 1, 16, 10, 885, 1, 17, 11, 1571, 1, 19, 11, 1668, 1, 20, 11, 1669, 100, 0, 11, 1707, 1, 21, 11, 1772, 1, 22, 12, 3547, 1, 29, 12, 3164, 1, 24, 12, 3166, 1, 25, 12, 3140, 1, 23, 12, 3413, 1, 26, 12, 3537, 1, 27, 12, 3539, 1, 28, 13, 7093, 1, 35, 13, 6283, 1, 30, 13, 6331, 1, 31, 13, 6335, 180, 0, 13, 6824, 1, 32, 13, 7072, 1, 33, 13, 7077, 320, 0, 13, 7076, 1, 34, 14, 12565, 1, 36, 14, 12661, 1, 37, 14, 12669, 1, 38, 14, 13651, 1, 39, 14, 14184, 1, 40, 15, 28295, 1, 46, 15, 28371, 1, 47, 15, 25320, 1, 42, 15, 25336, 1, 43, 15, 25128, 1, 41, 15, 27300, 1, 44, 15, 28293, 1, 45, 16, 50259, 1, 48, 16, 50643, 1, 49, 16, 50675, 1, 50, 16, 56740, 1, 53, 16, 56584, 1, 51, 16, 56588, 1, 52, 17, 113483, 1, 61, 17, 113482, 1, 60, 17, 101285, 1, 55, 17, 101349, 1, 56, 17, 109205, 1, 57, 17, 109207, 1, 58, 17, 100516, 1, 54, 17, 113171, 1, 59, 18, 202568, 1, 62, 18, 202696, 1, 63, 18, 218408, 1, 64, 18, 218412, 1, 65, 18, 226340, 1, 66, 18, 226356, 1, 67, 18, 226358, 1, 68, 19, 402068, 1, 69, 19, 405138, 1, 70, 19, 405394, 1, 71, 19, 436818, 1, 72, 19, 436826, 1, 73, 19, 452714, 1, 75, 19, 452718, 1, 76, 19, 452682, 1, 74, 20, 804138, 1, 77, 20, 810279, 1, 78, 20, 810790, 1, 79, 20, 873638, 1, 80, 20, 873654, 1, 81, 20, 905366, 1, 82, 20, 905430, 1, 83, 20, 905438, 1, 84, 21, 1608278, 1, 85, 21, 1620557, 1, 86, 21, 1621582, 1, 87, 21, 1621583, 1, 88, 21, 1747310, 1, 89, 21, 1810734, 1, 90, 21, 1810735, 1, 91, 21, 1810863, 1, 92, 21, 1810879, 1, 93, 22, 3621725, 1, 99, 22, 3621757, 1, 100, 22, 3241112, 1, 94, 22, 3494556, 1, 95, 22, 3494557, 1, 96, 22, 3494622, 1, 97, 22, 3494623, 1, 98, 23, 6482227, 1, 102, 23, 6433117, 1, 101, 23, 6989117, 1, 103, 23, 6989119, 1, 105, 23, 6989118, 1, 104, 23, 7243449, 1, 106, 23, 7243512, 1, 107, 24, 13978233, 1, 111, 24, 12964453, 1, 109, 24, 12866232, 1, 108, 24, 14486897, 1, 113, 24, 13978232, 1, 110, 24, 14486896, 1, 112, 24, 14487026, 1, 114, 24, 14487027, 1, 115, 25, 25732598, 1, 225, 25, 25732597, 1, 189, 25, 25732596, 1, 188, 25, 25732595, 1, 203, 25, 25732594, 1, 202, 25, 25732593, 1, 197, 25, 25732592, 1, 207, 25, 25732591, 1, 169, 25, 25732590, 1, 223, 25, 25732589, 1, 159, 25, 25732522, 1, 235, 25, 25732579, 1, 152, 25, 25732575, 1, 192, 25, 25732489, 1, 179, 25, 25732573, 1, 201, 25, 25732472, 1, 172, 25, 25732576, 1, 149, 25, 25732488, 1, 178, 25, 25732566, 1, 120, 25, 25732571, 1, 219, 25, 25732577, 1, 150, 25, 25732487, 1, 127, 25, 25732506, 1, 211, 25, 25732548, 1, 125, 25, 25732588, 1, 158, 25, 25732486, 1, 247, 25, 25732467, 1, 238, 25, 25732508, 1, 163, 25, 25732552, 1, 228, 25, 25732603, 1, 183, 25, 25732513, 1, 217, 25, 25732587, 1, 168, 25, 25732520, 1, 122, 25, 25732484, 1, 128, 25, 25732562, 1, 249, 25, 25732505, 1, 187, 25, 25732504, 1, 186, 25, 25732483, 1, 136, 25, 25928905, 1, 181, 25, 25732560, 1, 255, 25, 25732500, 1, 230, 25, 25732482, 1, 135, 25, 25732555, 1, 233, 25, 25732568, 1, 222, 25, 25732583, 1, 145, 25, 25732481, 1, 134, 25, 25732586, 1, 167, 25, 25732521, 1, 248, 25, 25732518, 1, 209, 25, 25732480, 1, 243, 25, 25732512, 1, 216, 25, 25732509, 1, 164, 25, 25732547, 1, 140, 25, 25732479, 1, 157, 25, 25732544, 1, 239, 25, 25732574, 1, 191, 25, 25732564, 1, 251, 25, 25732478, 1, 156, 25, 25732546, 1, 139, 25, 25732498, 1, 242, 25, 25732557, 1, 133, 25, 25732477, 1, 162, 25, 25732515, 1, 213, 25, 25732584, 1, 165, 25, 25732514, 1, 212, 25, 25732476, 1, 227, 25, 25732494, 1, 198, 25, 25732531, 1, 236, 25, 25732530, 1, 234, 25, 25732529, 1, 117, 25, 25732528, 1, 215, 25, 25732527, 1, 124, 25, 25732526, 1, 123, 25, 25732525, 1, 254, 25, 25732524, 1, 253, 25, 25732523, 1, 148, 25, 25732570, 1, 218, 25, 25732580, 1, 146, 25, 25732581, 1, 147, 25, 25732569, 1, 224, 25, 25732533, 1, 143, 25, 25732540, 1, 184, 25, 25732541, 1, 185, 25, 25732585, 1, 166, 25, 25732556, 1, 132, 25, 25732485, 1, 129, 25, 25732563, 1, 250, 25, 25732578, 1, 151, 25, 25732501, 1, 119, 25, 25732502, 1, 193, 25, 25732536, 1, 176, 25, 25732496, 1, 245, 25, 25732553, 1, 229, 25, 25732516, 1, 206, 25, 25732582, 1, 144, 25, 25732517, 1, 208, 25, 25732558, 1, 137, 25, 25732543, 1, 241, 25, 25732466, 1, 237, 25, 25732507, 1, 190, 25, 25732542, 1, 240, 25, 25732551, 1, 131, 25, 25732554, 1, 232, 25, 25732565, 1, 252, 25, 25732475, 1, 171, 25, 25732493, 1, 205, 25, 25732492, 1, 204, 25, 25732491, 1, 118, 25, 25732490, 1, 214, 25, 25928904, 1, 180, 25, 25732549, 1, 126, 25, 25732602, 1, 182, 25, 25732539, 1, 175, 25, 25732545, 1, 141, 25, 25732559, 1, 138, 25, 25732537, 1, 177, 25, 25732534, 1, 153, 25, 25732503, 1, 194, 25, 25732606, 1, 160, 25, 25732567, 1, 121, 25, 25732538, 1, 174, 25, 25732497, 1, 246, 25, 25732550, 1, 130, 25, 25732572, 1, 200, 25, 25732474, 1, 170, 25, 25732511, 1, 221, 25, 25732601, 1, 196, 25, 25732532, 1, 142, 25, 25732519, 1, 210, 25, 25732495, 1, 199, 25, 25732605, 1, 155, 25, 25732535, 1, 154, 25, 25732499, 1, 244, 25, 25732510, 1, 220, 25, 25732600, 1, 195, 25, 25732607, 1, 161, 25, 25732604, 1, 231, 25, 25732473, 1, 173, 25, 25732599, 1, 226, 26, 51465122, 1, 116, 26, 51465123, 0, 1], e, t, r, s = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1], n = 24576, o = 16384, a = 8192, l = o | a;
  function h(_) {
    var D = _[1], M = _[0][D >>> 3] >>> 7 - (D & 7) & 1;
    return _[1]++, M;
  }
  function w(_, D) {
    if (e == null) {
      e = {};
      for (var M = 0; M < i.length; M += 4) e[i[M + 1]] = i.slice(M, M + 4);
    }
    for (var v = h(_), p = e[v]; p == null; )
      v = v << 1 | h(_), p = e[v];
    var m = p[3];
    m != 0 && (m = h(_) == 0 ? m : -m), D[0] = p[2], D[1] = m;
  }
  function u(_, D) {
    for (var M = 0; M < D; M++)
      (_ & 1) == 1 && _++, _ = _ >>> 1;
    return _;
  }
  function f(_, D) {
    return _ >> D;
  }
  function y(_, D, M, v, p, m) {
    D[M] = f(f(11 * _[p] - 4 * _[p + m] + _[p + m + m] + 4, 3) + _[v], 1), D[M + m] = f(f(5 * _[p] + 4 * _[p + m] - _[p + m + m] + 4, 3) - _[v], 1);
  }
  function L(_, D, M, v, p, m) {
    var b = _[p - m] - _[p + m], x = _[p], T = _[v];
    D[M] = f(f(b + 4, 3) + x + T, 1), D[M + m] = f(f(-b + 4, 3) + x - T, 1);
  }
  function g(_, D, M, v, p, m) {
    D[M] = f(f(5 * _[p] + 4 * _[p - m] - _[p - m - m] + 4, 3) + _[v], 1), D[M + m] = f(f(11 * _[p] - 4 * _[p - m] + _[p - m - m] + 4, 3) - _[v], 1);
  }
  function c(_) {
    return _ = _ < 0 ? 0 : _ > 4095 ? 4095 : _, _ = r[_] >>> 2, _;
  }
  function d(_, D, M, v, p, m) {
    v = new Uint16Array(v.buffer);
    var b = Date.now(), x = F._binBE, T = D + M, R, P, k, I, H, N, V, S, C, E;
    D += 4;
    for (var U = m[0] == 1; D < T; ) {
      var O = x.readShort(_, D), G = x.readUshort(_, D + 2);
      if (D += 4, O == 12) R = G;
      else if (O == 20) P = G;
      else if (O == 21) k = G;
      else if (O == 48) I = G;
      else if (O == 53) H = G;
      else if (O != 35) {
        if (O == 62) N = G;
        else if (O != 101) {
          if (O == 109) V = G;
          else if (O != 84) {
            if (O != 106) {
              if (O != 107) {
                if (O != 108) {
                  if (O != 102) {
                    if (O == 104) S = G;
                    else if (O != 105) {
                      var K = O < 0 ? -O : O, j = K & 65280, z = 0;
                      if (K & l && (K & a ? (z = G & 65535, z += (K & 255) << 16) : z = G & 65535), (K & n) == n) {
                        if (C == null) {
                          C = [];
                          for (var B = 0; B < 4; B++) C[B] = new Int16Array((P >>> 1) * (k >>> 1));
                          E = new Int16Array((P >>> 1) * (k >>> 1)), t = new Int16Array(1024);
                          for (var B = 0; B < 1024; B++) {
                            var Y = B - 512, re = Math.abs(Y), R = Math.floor(768 * re * re * re / (255 * 255 * 255)) + re;
                            t[B] = Math.sign(Y) * R;
                          }
                          r = new Uint16Array(4096);
                          for (var q = 65535, B = 0; B < 4096; B++) {
                            var ee = B, ie = q * (Math.pow(113, ee / 4095) - 1) / 112;
                            r[B] = Math.min(ie, q);
                          }
                        }
                        var Q = C[N], Z = u(P, 1 + s[I]), J = u(k, 1 + s[I]);
                        if (I == 0)
                          for (var X = 0; X < J; X++) for (var W = 0; W < Z; W++) {
                            var le = D + (X * Z + W) * 2;
                            Q[X * (P >>> 1) + W] = _[le] << 8 | _[le + 1];
                          }
                        else {
                          for (var fe = [_, D * 8], ve = [], Me = 0, ne = Z * J, de = [0, 0], Pe = 0, G = 0; Me < ne; )
                            for (w(fe, de), Pe = de[0], G = de[1]; Pe > 0; )
                              ve[Me++] = G, Pe--;
                          for (var ye = (I - 1) % 3, Be = ye != 1 ? Z : 0, $ = ye != 0 ? J : 0, X = 0; X < J; X++)
                            for (var se = (X + $) * (P >>> 1) + Be, oe = X * Z, W = 0; W < Z; W++) Q[se + W] = t[ve[oe + W] + 512] * H;
                          if (ye == 2) {
                            for (var S = P >>> 1, me = Z * 2, he = J * 2, X = 0; X < J; X++)
                              for (var W = 0; W < me; W++) {
                                var B = X * 2 * S + W, ce = X * S + W, ue = J * S + ce;
                                X == 0 ? y(Q, E, B, ue, ce, S) : X == J - 1 ? g(Q, E, B, ue, ce, S) : L(Q, E, B, ue, ce, S);
                              }
                            var te = Q;
                            Q = E, E = te;
                            for (var X = 0; X < he; X++)
                              for (var W = 0; W < Z; W++) {
                                var B = X * S + 2 * W, ce = X * S + W, ue = Z + ce;
                                W == 0 ? y(Q, E, B, ue, ce, 1) : W == Z - 1 ? g(Q, E, B, ue, ce, 1) : L(Q, E, B, ue, ce, 1);
                              }
                            var te = Q;
                            Q = E, E = te;
                            for (var we = [], Ae = 2 - ~~((I - 1) / 3), Te = 0; Te < 3; Te++) we[Te] = V >> 14 - Te * 2 & 3;
                            var Qe = we[Ae];
                            if (Qe != 0) for (var X = 0; X < he; X++) for (var W = 0; W < me; W++) {
                              var B = X * S + W;
                              Q[B] = Q[B] << Qe;
                            }
                          }
                        }
                        if (I == 9 && N == 3)
                          for (var pt = C[0], vt = C[1], _t = C[2], gt = C[3], X = 0; X < k; X += 2) for (var W = 0; W < P; W += 2) {
                            var Ie = X * P + W, le = (X >>> 1) * (P >>> 1) + (W >>> 1), et = pt[le], Ei = vt[le] - 2048, Pi = _t[le] - 2048, jt = gt[le] - 2048, Ht = (Ei << 1) + et, Vt = (Pi << 1) + et, Nt = et + jt, Gt = et - jt;
                            U ? (v[Ie] = c(Nt), v[Ie + 1] = c(Vt), v[Ie + P] = c(Ht), v[Ie + P + 1] = c(Gt)) : (v[Ie] = c(Ht), v[Ie + 1] = c(Nt), v[Ie + P] = c(Gt), v[Ie + P + 1] = c(Vt));
                          }
                        D += z * 4;
                      } else if (K == 16388)
                        D += z * 4;
                      else if (!(j == 8192 || j == 8448 || j == 9216)) throw K.toString(16);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log(Date.now() - b);
  }
  return d;
}();
F.decode._decodeLogLuv32 = function(i, e, t, r, s, n) {
  for (var o = i.width, a = o * 4, l = 0, h = new Uint8Array(a); l < r; ) {
    for (var w = 0; w < a; ) {
      var u = e[t + l];
      if (l++, u < 128) {
        for (var f = 0; f < u; f++) h[w + f] = e[t + l + f];
        w += u, l += u;
      } else {
        u = u - 126;
        for (var f = 0; f < u; f++) h[w + f] = e[t + l];
        w += u, l++;
      }
    }
    for (var y = 0; y < o; y++)
      s[n + 0] = h[y], s[n + 1] = h[y + o], s[n + 2] = h[y + o * 2], s[n + 4] = h[y + o * 3], n += 6;
  }
};
F.decode._ljpeg_diff = function(i, e, t) {
  var r = F.decode._getbithuff, s, n;
  return s = r(i, e, t[0], t), n = r(i, e, s, 0), n & 1 << s - 1 || (n -= (1 << s) - 1), n;
};
F.decode._decodeARW = function(i, e, t, r, s, n) {
  var o = i.t256[0], a = i.t257[0], l = i.t258[0], h = i.isLE ? F._binLE : F._binBE, w = o * a == r || o * a * 1.5 == r;
  if (!w) {
    a += 8;
    var u = [t, 0, 0, 0], f = new Uint16Array(32770), y = [
      3857,
      3856,
      3599,
      3342,
      3085,
      2828,
      2571,
      2314,
      2057,
      1800,
      1543,
      1286,
      1029,
      772,
      771,
      768,
      514,
      513
    ], V, L, g, x, b, c = 0, d = F.decode._ljpeg_diff;
    for (f[0] = 15, g = V = 0; V < 18; V++)
      for (var _ = 32768 >>> (y[V] >>> 8), L = 0; L < _; L++) f[++g] = y[V];
    for (x = o; x--; )
      for (b = 0; b < a + 1; b += 2)
        if (b == a && (b = 1), c += d(e, u, f), b < a) {
          var D = c & 4095;
          F.decode._putsF(s, (b * o + x) * l, D << 16 - l);
        }
    return;
  }
  if (o * a * 1.5 == r) {
    for (var V = 0; V < r; V += 3) {
      var M = e[t + V + 0], v = e[t + V + 1], p = e[t + V + 2];
      s[n + V] = v << 4 | M >>> 4, s[n + V + 1] = M << 4 | p >>> 4, s[n + V + 2] = p << 4 | v >>> 4;
    }
    return;
  }
  var m = new Uint16Array(16), b, x, T, R, P, k, I, H, N, V, S, C = new Uint8Array(o + 1);
  for (b = 0; b < a; b++) {
    for (var E = 0; E < o; E++) C[E] = e[t++];
    for (S = 0, x = 0; x < o - 30; S += 16) {
      for (R = 2047 & (T = h.readUint(C, S)), P = 2047 & T >>> 11, k = 15 & T >>> 22, I = 15 & T >>> 26, H = 0; H < 4 && 128 << H <= R - P; H++) ;
      for (N = 30, V = 0; V < 16; V++)
        V == k ? m[V] = R : V == I ? m[V] = P : (m[V] = ((h.readUshort(C, S + (N >> 3)) >>> (N & 7) & 127) << H) + P, m[V] > 2047 && (m[V] = 2047), N += 7);
      for (V = 0; V < 16; V++, x += 2) {
        var D = m[V] << 1;
        F.decode._putsF(s, (b * o + x) * l, D << 16 - l);
      }
      x -= x & 1 ? 1 : 31;
    }
  }
};
F.decode._decodeNikon = function(i, e, t, r, s, n, o) {
  var a = [
    [
      0,
      0,
      1,
      5,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      /* 12-bit lossy */
      5,
      4,
      3,
      6,
      2,
      7,
      1,
      0,
      8,
      9,
      11,
      10,
      12
    ],
    [
      0,
      0,
      1,
      5,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      /* 12-bit lossy after split */
      57,
      90,
      56,
      39,
      22,
      5,
      4,
      3,
      2,
      1,
      0,
      11,
      12,
      12
    ],
    [
      0,
      0,
      1,
      4,
      2,
      3,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      /* 12-bit lossless */
      5,
      4,
      6,
      3,
      7,
      2,
      8,
      1,
      9,
      0,
      10,
      11,
      12
    ],
    [
      0,
      0,
      1,
      4,
      3,
      1,
      1,
      1,
      1,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      /* 14-bit lossy */
      5,
      6,
      4,
      7,
      8,
      3,
      9,
      2,
      1,
      0,
      10,
      11,
      12,
      13,
      14
    ],
    [
      0,
      0,
      1,
      5,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      /* 14-bit lossy after split */
      8,
      92,
      75,
      58,
      41,
      7,
      6,
      5,
      4,
      3,
      2,
      1,
      0,
      13,
      14
    ],
    [
      0,
      0,
      1,
      4,
      2,
      2,
      3,
      1,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      /* 14-bit lossless */
      7,
      6,
      8,
      5,
      9,
      4,
      10,
      3,
      11,
      12,
      2,
      0,
      1,
      13,
      14
    ]
  ], l = i.t256[0], h = i.t257[0], w = i.t258[0], u = 0, f = 0, y = F.decode._make_decoder, L = F.decode._getbithuff, g = e[0].exifIFD.makerNote, c = g.t150 ? g.t150 : g.t140, d = 0, _ = c[d++], D = c[d++];
  (_ == 73 || D == 88) && (d += 2110), _ == 70 && (u = 2), w == 14 && (u += 3);
  for (var M = [[0, 0], [0, 0]], v = i.isLE ? F._binLE : F._binBE, T = 0; T < 2; T++) for (var p = 0; p < 2; p++)
    M[T][p] = v.readShort(c, d), d += 2;
  var m = 1 << w & 32767, b = 0, x = v.readShort(c, d);
  d += 2, x > 1 && (b = Math.floor(m / (x - 1))), _ == 68 && D == 32 && b > 0 && (f = v.readShort(c, 562));
  var T, R, P, k, I, H, N = [0, 0], V = y(a[u]), S = [r, 0, 0, 0];
  for (R = 0; R < h; R++)
    for (f && R == f && (V = y(a[u + 1])), P = 0; P < l; P++) {
      T = L(t, S, V[0], V), k = T & 15, I = T >>> 4, H = (L(t, S, k - I, 0) << 1) + 1 << I >>> 1, H & 1 << k - 1 || (H -= (1 << k) - (I == 0 ? 1 : 0)), P < 2 ? N[P] = M[R & 1][P] += H : N[P & 1] += H;
      var C = Math.min(Math.max(N[P & 1], 0), (1 << w) - 1), E = (R * l + P) * w;
      F.decode._putsF(n, E, C << 16 - w);
    }
};
F.decode._putsF = function(i, e, t) {
  t = t << 8 - (e & 7);
  var r = e >>> 3;
  i[r] |= t >>> 16, i[r + 1] |= t >>> 8, i[r + 2] |= t;
};
F.decode._getbithuff = function(i, e, t, r) {
  var s = 0;
  F.decode._get_byte;
  var n, o = e[0], a = e[1], l = e[2], h = e[3];
  if (t == 0 || l < 0) return 0;
  for (; !h && l < t && (n = i[o++]) != -1 && !(h = s); )
    a = (a << 8) + n, l += 8;
  if (n = a << 32 - l >>> 32 - t, r ? (l -= r[n + 1] >>> 8, n = r[n + 1] & 255) : l -= t, l < 0) throw "e";
  return e[0] = o, e[1] = a, e[2] = l, e[3] = h, n;
};
F.decode._make_decoder = function(i) {
  var e, t, r, s, n, o = [];
  for (e = 16; e != 0 && !i[e]; e--) ;
  var a = 17;
  for (o[0] = e, r = t = 1; t <= e; t++)
    for (s = 0; s < i[t]; s++, ++a)
      for (n = 0; n < 1 << e - t; n++)
        r <= 1 << e && (o[r++] = t << 8 | i[a]);
  return o;
};
F.decode._decodeNewJPEG = function(i, e, t, r, s, n) {
  r = Math.min(r, e.length - t);
  var o = i.t347, a = o ? o.length : 0, l = new Uint8Array(a + r);
  if (o) {
    for (var h = 216, w = 217, u = 0, f = 0; f < a - 1 && !(o[f] == 255 && o[f + 1] == w); f++)
      l[u++] = o[f];
    var y = e[t], L = e[t + 1];
    (y != 255 || L != h) && (l[u++] = y, l[u++] = L);
    for (var f = 2; f < r; f++) l[u++] = e[t + f];
  } else for (var f = 0; f < r; f++) l[f] = e[t + f];
  if (i.t262[0] == 32803 || i.t259[0] == 7 && i.t262[0] == 34892) {
    var g = i.t258[0], c = F.LosslessJpegDecode(l), d = c.length;
    if (g == 16)
      if (i.isLE) for (var f = 0; f < d; f++)
        s[n + (f << 1)] = c[f] & 255, s[n + (f << 1) + 1] = c[f] >>> 8;
      else for (var f = 0; f < d; f++)
        s[n + (f << 1)] = c[f] >>> 8, s[n + (f << 1) + 1] = c[f] & 255;
    else if (g == 14 || g == 12 || g == 10)
      for (var _ = 16 - g, f = 0; f < d; f++) F.decode._putsF(s, f * g, c[f] << _);
    else if (g == 8)
      for (var f = 0; f < d; f++) s[n + f] = c[f];
    else throw new Error("unsupported bit depth " + g);
  } else {
    var D = new F.JpegDecoder();
    D.parse(l);
    for (var M = D.getData({ width: D.width, height: D.height, forceRGB: true, isSourcePDF: false }), f = 0; f < M.length; f++) s[n + f] = M[f];
  }
  i.t262[0] == 6 && (i.t262[0] = 2);
};
F.decode._decodeOldJPEGInit = function(i, e, t, r) {
  var s = 216, n = 219, o = 196, a = 221, l = 192, h = 218, w = 0, u = 0, f, y, L = false, g, c, d, _ = i.t513, D = _ ? _[0] : 0, M = i.t514, v = M ? M[0] : 0, p = i.t324 || i.t273 || _, m = i.t530, b = 0, x = 0, T = i.t277 ? i.t277[0] : 1, R = i.t515;
  if (p && (u = p[0], L = p.length > 1), !L) {
    if (e[t] == 255 && e[t + 1] == s) return { jpegOffset: t };
    if (_ != null && (e[t + D] == 255 && e[t + D + 1] == s ? w = t + D : log("JPEGInterchangeFormat does not point to SOI"), M == null ? log("JPEGInterchangeFormatLength field is missing") : (D >= u || D + v <= u) && log("JPEGInterchangeFormatLength field value is invalid"), w != null))
      return { jpegOffset: w };
  }
  if (m != null && (b = m[0], x = m[1]), _ != null && M != null)
    if (v >= 2 && D + v <= u) {
      for (e[t + D + v - 2] == 255 && e[t + D + v - 1] == s ? f = new Uint8Array(v - 2) : f = new Uint8Array(v), g = 0; g < f.length; g++) f[g] = e[t + D + g];
      log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
    } else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
  if (f == null) {
    var P = 0, k = [];
    k[P++] = 255, k[P++] = s;
    var I = i.t519;
    if (I == null) throw new Error("JPEGQTables tag is missing");
    for (g = 0; g < I.length; g++)
      for (k[P++] = 255, k[P++] = n, k[P++] = 0, k[P++] = 67, k[P++] = g, c = 0; c < 64; c++) k[P++] = e[t + I[g] + c];
    for (d = 0; d < 2; d++) {
      var H = i[d == 0 ? "t520" : "t521"];
      if (H == null) throw new Error((d == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
      for (g = 0; g < H.length; g++) {
        k[P++] = 255, k[P++] = o;
        var N = 19;
        for (c = 0; c < 16; c++) N += e[t + H[g] + c];
        for (k[P++] = N >>> 8, k[P++] = N & 255, k[P++] = g | d << 4, c = 0; c < 16; c++) k[P++] = e[t + H[g] + c];
        for (c = 0; c < N; c++) k[P++] = e[t + H[g] + 16 + c];
      }
    }
    if (k[P++] = 255, k[P++] = l, k[P++] = 0, k[P++] = 8 + 3 * T, k[P++] = 8, k[P++] = i.height >>> 8 & 255, k[P++] = i.height & 255, k[P++] = i.width >>> 8 & 255, k[P++] = i.width & 255, k[P++] = T, T == 1)
      k[P++] = 1, k[P++] = 17, k[P++] = 0;
    else for (g = 0; g < 3; g++)
      k[P++] = g + 1, k[P++] = g != 0 ? 17 : (b & 15) << 4 | x & 15, k[P++] = g;
    R != null && R[0] != 0 && (k[P++] = 255, k[P++] = a, k[P++] = 0, k[P++] = 4, k[P++] = R[0] >>> 8 & 255, k[P++] = R[0] & 255), f = new Uint8Array(k);
  }
  var V = -1;
  for (g = 0; g < f.length - 1; ) {
    if (f[g] == 255 && f[g + 1] == l) {
      V = g;
      break;
    }
    g++;
  }
  if (V == -1) {
    var S = new Uint8Array(f.length + 10 + 3 * T);
    S.set(f);
    var C = f.length;
    if (V = f.length, f = S, f[C++] = 255, f[C++] = l, f[C++] = 0, f[C++] = 8 + 3 * T, f[C++] = 8, f[C++] = i.height >>> 8 & 255, f[C++] = i.height & 255, f[C++] = i.width >>> 8 & 255, f[C++] = i.width & 255, f[C++] = T, T == 1)
      f[C++] = 1, f[C++] = 17, f[C++] = 0;
    else for (g = 0; g < 3; g++)
      f[C++] = g + 1, f[C++] = g != 0 ? 17 : (b & 15) << 4 | x & 15, f[C++] = g;
  }
  if (e[u] == 255 && e[u + 1] == h) {
    var E = e[u + 2] << 8 | e[u + 3];
    for (y = new Uint8Array(E + 2), y[0] = e[u], y[1] = e[u + 1], y[2] = e[u + 2], y[3] = e[u + 3], g = 0; g < E - 2; g++) y[g + 4] = e[u + g + 4];
  } else {
    y = new Uint8Array(8 + 2 * T);
    var U = 0;
    if (y[U++] = 255, y[U++] = h, y[U++] = 0, y[U++] = 6 + 2 * T, y[U++] = T, T == 1)
      y[U++] = 1, y[U++] = 0;
    else for (g = 0; g < 3; g++)
      y[U++] = g + 1, y[U++] = g << 4 | g;
    y[U++] = 0, y[U++] = 63, y[U++] = 0;
  }
  return { jpegOffset: t, tables: f, sosMarker: y, sofPosition: V };
};
F.decode._decodeOldJPEG = function(i, e, t, r, s, n) {
  var o, a, l, h, w, u = F.decode._decodeOldJPEGInit(i, e, t, r);
  if (u.jpegOffset != null)
    for (a = t + r - u.jpegOffset, h = new Uint8Array(a), o = 0; o < a; o++) h[o] = e[u.jpegOffset + o];
  else {
    for (l = u.tables.length, h = new Uint8Array(l + u.sosMarker.length + r + 2), h.set(u.tables), w = l, h[u.sofPosition + 5] = i.height >>> 8 & 255, h[u.sofPosition + 6] = i.height & 255, h[u.sofPosition + 7] = i.width >>> 8 & 255, h[u.sofPosition + 8] = i.width & 255, (e[t] != 255 || e[t + 1] != SOS) && (h.set(u.sosMarker, w), w += sosMarker.length), o = 0; o < r; o++) h[w++] = e[t + o];
    h[w++] = 255, h[w++] = EOI;
  }
  var f = new F.JpegDecoder();
  f.parse(h);
  for (var y = f.getData({ width: f.width, height: f.height, forceRGB: true, isSourcePDF: false }), o = 0; o < y.length; o++) s[n + o] = y[o];
  i.t262 && i.t262[0] == 6 && (i.t262[0] = 2);
};
F.decode._decodePackBits = function(i, e, t, r, s) {
  for (var n = new Int8Array(i.buffer), o = new Int8Array(r.buffer), a = e + t; e < a; ) {
    var l = n[e];
    if (e++, l >= 0 && l < 128) for (var h = 0; h < l + 1; h++)
      o[s] = n[e], s++, e++;
    if (l >= -127 && l < 0) {
      for (var h = 0; h < -l + 1; h++)
        o[s] = n[e], s++;
      e++;
    }
  }
  return s;
};
F.decode._decodeThunder = function(i, e, t, r, s) {
  for (var n = [0, 1, 0, -1], o = [0, 1, 2, 3, 0, -3, -2, -1], a = e + t, l = s * 2, h = 0; e < a; ) {
    var w = i[e], u = w >>> 6, f = w & 63;
    if (e++, u == 3 && (h = f & 15, r[l >>> 1] |= h << 4 * (1 - l & 1), l++), u == 0) for (var y = 0; y < f; y++)
      r[l >>> 1] |= h << 4 * (1 - l & 1), l++;
    if (u == 2) for (var y = 0; y < 2; y++) {
      var L = f >>> 3 * (1 - y) & 7;
      L != 4 && (h += o[L], r[l >>> 1] |= h << 4 * (1 - l & 1), l++);
    }
    if (u == 1) for (var y = 0; y < 3; y++) {
      var L = f >>> 2 * (2 - y) & 3;
      L != 2 && (h += n[L], r[l >>> 1] |= h << 4 * (1 - l & 1), l++);
    }
  }
};
F.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 };
F.decode._lens = function() {
  var i = function(l, h, w, u) {
    for (var f = 0; f < h.length; f++) l[h[f]] = w + f * u;
  }, e = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100", t = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111", r = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011", s = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101", n = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
  e = e.split(","), t = t.split(","), r = r.split(","), s = s.split(","), n = n.split(",");
  var o = {}, a = {};
  return i(o, e, 0, 1), i(o, r, 64, 64), i(o, n, 1792, 64), i(a, t, 0, 1), i(a, s, 64, 64), i(a, n, 1792, 64), [o, a];
}();
F.decode._decodeG4 = function(i, e, t, r, s, n, o) {
  for (var a = F.decode, l = e << 3, h = 0, w = "", u = [], f = [], y = 0; y < n; y++) f.push(0);
  f = a._makeDiff(f);
  for (var L = 0, g = 0, c = 0, d = 0, _ = 0, D = 0, M = "", v = 0, p = Math.ceil(n / 8) * 8; l >>> 3 < e + t; ) {
    c = a._findDiff(f, L + (L == 0 ? 0 : 1), 1 - _), d = a._findDiff(f, c, _);
    var m = 0;
    if (o == 1 && (m = i[l >>> 3] >>> 7 - (l & 7) & 1), o == 2 && (m = i[l >>> 3] >>> (l & 7) & 1), l++, w += m, M == "H") {
      if (a._lens[_][w] != null) {
        var b = a._lens[_][w];
        w = "", h += b, b < 64 && (a._addNtimes(u, h, _), L += h, _ = 1 - _, h = 0, v--, v == 0 && (M = ""));
      }
    } else
      w == "0001" && (w = "", a._addNtimes(u, d - L, _), L = d), w == "001" && (w = "", M = "H", v = 2), a._dmap[w] != null && (g = c + a._dmap[w], a._addNtimes(u, g - L, _), L = g, w = "", _ = 1 - _);
    u.length == n && M == "" && (a._writeBits(u, r, s * 8 + D * p), _ = 0, D++, L = 0, f = a._makeDiff(u), u = []);
  }
};
F.decode._findDiff = function(i, e, t) {
  for (var r = 0; r < i.length; r += 2) if (i[r] >= e && i[r + 1] == t) return i[r];
};
F.decode._makeDiff = function(i) {
  var e = [];
  i[0] == 1 && e.push(0, 1);
  for (var t = 1; t < i.length; t++) i[t - 1] != i[t] && e.push(t, i[t]);
  return e.push(i.length, 0, i.length, 1), e;
};
F.decode._decodeG2 = function(i, e, t, r, s, n, o) {
  for (var a = F.decode, l = e << 3, h = 0, w = "", u = [], f = 0, y = 0, L = Math.ceil(n / 8) * 8; l >>> 3 < e + t; ) {
    var g = 0;
    o == 1 && (g = i[l >>> 3] >>> 7 - (l & 7) & 1), o == 2 && (g = i[l >>> 3] >>> (l & 7) & 1), l++, w += g, h = a._lens[f][w], h != null && (a._addNtimes(u, h, f), w = "", h < 64 && (f = 1 - f), u.length == n && (a._writeBits(u, r, s * 8 + y * L), u = [], y++, f = 0, l & 7 && (l += 8 - (l & 7)), h >= 64 && (l += 8)));
  }
};
F.decode._decodeG3 = function(i, e, t, r, s, n, o, a) {
  for (var l = F.decode, h = e << 3, w = 0, u = "", f = [], y = [], L = 0; L < n; L++) f.push(0);
  for (var g = 0, c = 0, d = 0, _ = 0, D = 0, M = -1, v = "", p = 0, m = true, b = Math.ceil(n / 8) * 8; h >>> 3 < e + t; ) {
    d = l._findDiff(y, g + (g == 0 ? 0 : 1), 1 - D), _ = l._findDiff(y, d, D);
    var x = 0;
    if (o == 1 && (x = i[h >>> 3] >>> 7 - (h & 7) & 1), o == 2 && (x = i[h >>> 3] >>> (h & 7) & 1), h++, u += x, m) {
      if (l._lens[D][u] != null) {
        var T = l._lens[D][u];
        u = "", w += T, T < 64 && (l._addNtimes(f, w, D), D = 1 - D, w = 0);
      }
    } else if (v == "H") {
      if (l._lens[D][u] != null) {
        var T = l._lens[D][u];
        u = "", w += T, T < 64 && (l._addNtimes(f, w, D), g += w, D = 1 - D, w = 0, p--, p == 0 && (v = ""));
      }
    } else
      u == "0001" && (u = "", l._addNtimes(f, _ - g, D), g = _), u == "001" && (u = "", v = "H", p = 2), l._dmap[u] != null && (c = d + l._dmap[u], l._addNtimes(f, c - g, D), g = c, u = "", D = 1 - D);
    u.endsWith("000000000001") && (M >= 0 && l._writeBits(f, r, s * 8 + M * b), a && (o == 1 && (m = (i[h >>> 3] >>> 7 - (h & 7) & 1) == 1), o == 2 && (m = (i[h >>> 3] >>> (h & 7) & 1) == 1), h++), u = "", D = 0, M++, g = 0, y = l._makeDiff(f), f = []);
  }
  f.length == n && l._writeBits(f, r, s * 8 + M * b);
};
F.decode._addNtimes = function(i, e, t) {
  for (var r = 0; r < e; r++) i.push(t);
};
F.decode._writeBits = function(i, e, t) {
  for (var r = 0; r < i.length; r++) e[t + r >>> 3] |= i[r] << 7 - (t + r & 7);
};
F.decode._decodeLZW = F.decode._decodeLZW = function() {
  var i, e, t, r, s = 0, n = 0, o = 0, a = 0, l = function() {
    var c = i >>> 3, d = e[c] << 16 | e[c + 1] << 8 | e[c + 2], _ = d >>> 24 - (i & 7) - n & (1 << n) - 1;
    return i += n, _;
  }, h = new Uint32Array(4096 * 4), w = 0, u = function(c) {
    if (c != w) {
      w = c, o = 1 << c, a = o + 1;
      for (var d = 0; d < a + 1; d++)
        h[4 * d] = h[4 * d + 3] = d, h[4 * d + 1] = 65535, h[4 * d + 2] = 1;
    }
  }, f = function(c) {
    n = c + 1, s = a + 1;
  }, y = function(c) {
    for (var d = c << 2, _ = h[d + 2], D = r + _ - 1; d != 65535; )
      t[D--] = h[d], d = h[d + 1];
    r += _;
  }, L = function(c, d) {
    var _ = s << 2, D = c << 2;
    h[_] = h[(d << 2) + 3], h[_ + 1] = D, h[_ + 2] = h[D + 2] + 1, h[_ + 3] = h[D + 3], s++, s + 1 == 1 << n && n != 12 && n++;
  }, g = function(c, d, _, D, M, v) {
    i = d << 3, e = c, t = D, r = M;
    var p = d + _ << 3, m = 0, b = 0;
    for (u(v), f(v); i < p && (m = l()) != a; ) {
      if (m == o) {
        if (f(v), m = l(), m == a) break;
        y(m);
      } else
        m < s ? (y(m), L(b, m)) : (L(b, b), y(s - 1));
      b = m;
    }
    return r;
  };
  return g;
}();
F.tags = {};
F._types = function() {
  var i = new Array(250);
  i.fill(0), i = i.concat([0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 4, 3, 0, 0, 3, 4, 4, 3, 3, 5, 5, 3, 2, 5, 5, 0, 0, 0, 0, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 5, 5, 3, 0, 3, 3, 4, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  var e = { 33432: 2, 33434: 5, 33437: 5, 34665: 4, 34850: 3, 34853: 4, 34855: 3, 34864: 3, 34866: 4, 36864: 7, 36867: 2, 36868: 2, 37121: 7, 37377: 10, 37378: 5, 37380: 10, 37381: 5, 37383: 3, 37384: 3, 37385: 3, 37386: 5, 37510: 7, 37520: 2, 37521: 2, 37522: 2, 40960: 7, 40961: 3, 40962: 4, 40963: 4, 40965: 4, 41486: 5, 41487: 5, 41488: 3, 41985: 3, 41986: 3, 41987: 3, 41988: 5, 41989: 3, 41990: 3, 41993: 3, 41994: 3, 41995: 7, 41996: 3, 42032: 2, 42033: 2, 42034: 5, 42036: 2, 42037: 2, 59932: 7 };
  return {
    basic: {
      main: i,
      rest: e
    },
    gps: {
      main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9],
      rest: { 18: 2, 29: 2 }
    }
  };
}();
F._readIFD = function(i, e, t, r, s, n) {
  var o = i.readUshort(e, t);
  t += 2;
  var a = {};
  n.debug && log("   ".repeat(s), r.length - 1, ">>>----------------");
  for (var l = 0; l < o; l++) {
    var h = i.readUshort(e, t);
    t += 2;
    var w = i.readUshort(e, t);
    t += 2;
    var u = i.readUint(e, t);
    t += 4;
    var f = i.readUint(e, t);
    t += 4;
    var y = [];
    if (w == 1 || w == 7) {
      var L = u < 5 ? t - 4 : f;
      L + u > e.buffer.byteLength && (u = e.buffer.byteLength - L), y = new Uint8Array(e.buffer, L, u);
    }
    if (w == 2) {
      var g = u < 5 ? t - 4 : f, c = e[g], d = Math.max(0, Math.min(u - 1, e.length - g));
      c < 128 || d == 0 ? y.push(i.readASCII(e, g, d)) : y = new Uint8Array(e.buffer, g, d);
    }
    if (w == 3)
      for (var _ = 0; _ < u; _++) y.push(i.readUshort(e, (u < 3 ? t - 4 : f) + 2 * _));
    if (w == 4 || w == 13)
      for (var _ = 0; _ < u; _++) y.push(i.readUint(e, (u < 2 ? t - 4 : f) + 4 * _));
    if (w == 5 || w == 10)
      for (var D = w == 5 ? i.readUint : i.readInt, _ = 0; _ < u; _++) y.push([D(e, f + _ * 8), D(e, f + _ * 8 + 4)]);
    if (w == 8)
      for (var _ = 0; _ < u; _++) y.push(i.readShort(e, (u < 3 ? t - 4 : f) + 2 * _));
    if (w == 9)
      for (var _ = 0; _ < u; _++) y.push(i.readInt(e, (u < 2 ? t - 4 : f) + 4 * _));
    if (w == 11)
      for (var _ = 0; _ < u; _++) y.push(i.readFloat(e, f + _ * 4));
    if (w == 12)
      for (var _ = 0; _ < u; _++) y.push(i.readDouble(e, f + _ * 8));
    if (u != 0 && y.length == 0) {
      if (log(h, "unknown TIFF tag type: ", w, "num:", u), l == 0) return;
      continue;
    }
    if (n.debug && log("   ".repeat(s), h, w, F.tags[h], y), a["t" + h] = y, !(h == 330 && a.t272 && a.t272[0] == "DSLR-A100")) {
      if (h == 330 || h == 34665 || h == 34853 || h == 50740 && i.readUshort(e, i.readUint(y, 0)) < 300 || h == 61440) {
        for (var M = h == 50740 ? [i.readUint(y, 0)] : y, v = [], _ = 0; _ < M.length; _++) F._readIFD(i, e, M[_], v, s + 1, n);
        h == 330 && (a.subIFD = v), h == 34665 && (a.exifIFD = v[0]), h == 34853 && (a.gpsiIFD = v[0]), h == 50740 && (a.dngPrvt = v[0]), h == 61440 && (a.fujiIFD = v[0]);
      }
    }
    if (h == 37500 && n.parseMN) {
      var p = y;
      if (i.readASCII(p, 0, 5) == "Nikon") a.makerNote = F.decode(p.slice(10).buffer)[0];
      else if (i.readASCII(p, 0, 5) == "OLYMP" || i.readASCII(p, 0, 9) == "OM SYSTEM") {
        var m = [8208, 8224, 8240, 8256, 8272], b = [];
        F._readIFD(i, p, p[1] == 77 ? 16 : p[5] == 85 ? 12 : 8, b, s + 1, n);
        for (var x = a.makerNote = b.pop(), _ = 0; _ < m.length; _++) {
          var T = "t" + m[_];
          x[T] != null && (F._readIFD(i, p, x[T][0], b, s + 1, n), x[T] = b.pop());
        }
        x.t12288 && (F._readIFD(i, x.t12288, 0, b, s + 1, n), x.t12288 = b.pop());
      } else if (i.readUshort(e, f) < 300 && i.readUshort(e, f + 4) <= 12) {
        var b = [];
        F._readIFD(i, e, f, b, s + 1, n), a.makerNote = b[0];
      }
    }
  }
  return r.push(a), n.debug && log("   ".repeat(s), "<<<---------------"), t;
};
F._writeIFD = function(i, e, t, r, s) {
  var n = Object.keys(s), o = n.length;
  s.exifIFD && o--, s.gpsiIFD && o--, i.writeUshort(t, r, o), r += 2;
  for (var a = r + o * 12 + 4, l = 0; l < n.length; l++) {
    var h = n[l];
    if (!(h == "t34665" || h == "t34853")) {
      h == "exifIFD" && (h = "t34665"), h == "gpsiIFD" && (h = "t34853");
      var w = parseInt(h.slice(1)), u = e.main[w];
      if (u == null && (u = e.rest[w]), u == null || u == 0) throw new Error("unknown type of tag: " + w);
      var f = s[h];
      if (w == 34665) {
        var y = F._writeIFD(i, e, t, a, s.exifIFD);
        f = [a], a = y[1];
      }
      if (w == 34853) {
        var y = F._writeIFD(i, F._types.gps, t, a, s.gpsiIFD);
        f = [a], a = y[1];
      }
      u == 2 && (f = f[0] + "\0");
      var L = f.length;
      i.writeUshort(t, r, w), r += 2, i.writeUshort(t, r, u), r += 2, i.writeUint(t, r, L), r += 4;
      var g = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][u] * L, c = r;
      if (g > 4 && (i.writeUint(t, r, a), c = a), u == 1 || u == 7)
        for (var d = 0; d < L; d++) t[c + d] = f[d];
      else if (u == 2)
        i.writeASCII(t, c, f);
      else if (u == 3)
        for (var d = 0; d < L; d++) i.writeUshort(t, c + 2 * d, f[d]);
      else if (u == 4)
        for (var d = 0; d < L; d++) i.writeUint(t, c + 4 * d, f[d]);
      else if (u == 5 || u == 10)
        for (var _ = u == 5 ? i.writeUint : i.writeInt, d = 0; d < L; d++) {
          var D = f[d], M = D[0], v = D[1];
          if (M == null) throw "e";
          _(t, c + 8 * d, M), _(t, c + 8 * d + 4, v);
        }
      else if (u == 9)
        for (var d = 0; d < L; d++) i.writeInt(t, c + 4 * d, f[d]);
      else if (u == 12)
        for (var d = 0; d < L; d++) i.writeDouble(t, c + 8 * d, f[d]);
      else throw u;
      g > 4 && (g += g & 1, a += g), r += 4;
    }
  }
  return [r, a];
};
F.toRGBA8 = function(i, e) {
  function t(ve) {
    return ve < 31308e-7 ? 12.92 * ve : 1.055 * Math.pow(ve, 1 / 2.4) - 0.055;
  }
  var r = i.width, s = i.height, n = r * s, o = i.data, a = new Uint8Array(n * 4), l = i.t262 ? i.t262[0] : 2, h = i.t258 ? Math.min(32, i.t258[0]) : 1;
  i.t262 == null && h == 1 && (l = 0);
  var w = i.t277 ? i.t277[0] : i.t258 ? i.t258.length : [1, 1, 3, 1, 1, 4, 3][l], u = i.t339 ? i.t339[0] : null;
  if (l == 1 && h == 32 && u != 3) throw "e";
  var f = Math.ceil(w * h * r / 8);
  if (l == 0) {
    e = 1 / 256;
    for (var y = 0; y < s; y++) {
      var L = y * f, g = y * r;
      if (h == 1) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + (c >> 3)] >> 7 - (c & 7) & 1;
        a[d] = a[d + 1] = a[d + 2] = (1 - _) * 255, a[d + 3] = 255;
      }
      if (h == 4) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + (c >> 1)] >> 4 - 4 * (c & 1) & 15;
        a[d] = a[d + 1] = a[d + 2] = (15 - _) * 17, a[d + 3] = 255;
      }
      if (h == 8) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + c];
        a[d] = a[d + 1] = a[d + 2] = 255 - _, a[d + 3] = 255;
      }
      if (h == 16) for (var c = 0; c < r; c++) {
        var d = g + c << 2, D = L + 2 * c, _ = o[D + 1] << 8 | o[D];
        a[d] = a[d + 1] = a[d + 2] = Math.min(255, 255 - ~~(_ * e)), a[d + 3] = 255;
      }
    }
  } else if (l == 1) {
    e == null && (e = 1 / 256);
    for (var M = o.length & 3 ? null : new Float32Array(o.buffer), y = 0; y < s; y++) {
      var L = y * f, g = y * r;
      if (h == 1) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + (c >> 3)] >> 7 - (c & 7) & 1;
        a[d] = a[d + 1] = a[d + 2] = _ * 255, a[d + 3] = 255;
      }
      if (h == 2) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + (c >> 2)] >> 6 - 2 * (c & 3) & 3;
        a[d] = a[d + 1] = a[d + 2] = _ * 85, a[d + 3] = 255;
      }
      if (h == 8) for (var c = 0; c < r; c++) {
        var d = g + c << 2, _ = o[L + c * w];
        a[d] = a[d + 1] = a[d + 2] = _, a[d + 3] = 255;
      }
      if (h == 16) for (var c = 0; c < r; c++) {
        var d = g + c << 2, D = L + 2 * c, _ = o[D + 1] << 8 | o[D];
        a[d] = a[d + 1] = a[d + 2] = Math.min(255, ~~(_ * e)), a[d + 3] = 255;
      }
      if (h == 32) for (var c = 0; c < r; c++) {
        var d = g + c << 2, D = (L >>> 2) + c, _ = M[D];
        a[d] = a[d + 1] = a[d + 2] = ~~(0.5 + 255 * _), a[d + 3] = 255;
      }
    }
  } else if (l == 2)
    if (h == 8) {
      if (w == 1) for (var c = 0; c < n; c++)
        a[4 * c] = a[4 * c + 1] = a[4 * c + 2] = o[c], a[4 * c + 3] = 255;
      if (w == 3) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * 3;
        a[d] = o[v], a[d + 1] = o[v + 1], a[d + 2] = o[v + 2], a[d + 3] = 255;
      }
      if (w >= 4) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * w;
        a[d] = o[v], a[d + 1] = o[v + 1], a[d + 2] = o[v + 2], a[d + 3] = o[v + 3];
      }
    } else if (h == 16) {
      if (w == 4) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * 8 + 1;
        a[d] = o[v], a[d + 1] = o[v + 2], a[d + 2] = o[v + 4], a[d + 3] = o[v + 6];
      }
      if (w == 3) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * 6 + 1;
        a[d] = o[v], a[d + 1] = o[v + 2], a[d + 2] = o[v + 4], a[d + 3] = 255;
      }
    } else if (h == 32) {
      for (var p = new Float32Array(o.buffer), m = 0, c = 0; c < p.length; c++) m = Math.min(m, p[c]);
      if (m < 0) for (var c = 0; c < o.length; c += 4) {
        var b = o[c];
        o[c] = o[c + 3], o[c + 3] = b, b = o[c + 1], o[c + 1] = o[c + 2], o[c + 2] = b;
      }
      for (var x = [], c = 0; c < 65536; c++) x.push(t(c / 65535));
      for (var c = 0; c < p.length; c++) {
        var T = Math.max(0, Math.min(1, p[c]));
        p[c] = x[~~(0.5 + T * 65535)];
      }
      if (w == 3) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * 3;
        a[d] = ~~(0.5 + p[v] * 255), a[d + 1] = ~~(0.5 + p[v + 1] * 255), a[d + 2] = ~~(0.5 + p[v + 2] * 255), a[d + 3] = 255;
      }
      else if (w == 4) for (var c = 0; c < n; c++) {
        var d = c << 2, v = c * 4;
        a[d] = ~~(0.5 + p[v] * 255), a[d + 1] = ~~(0.5 + p[v + 1] * 255), a[d + 2] = ~~(0.5 + p[v + 2] * 255), a[d + 3] = ~~(0.5 + p[v + 3] * 255);
      }
      else throw w;
    } else throw h;
  else if (l == 3)
    for (var R = i.t320, P = 1 << h, k = h == 8 && w > 1 && i.t338 && i.t338[0] != 0, y = 0; y < s; y++)
      for (var I = 0; I < r; I++) {
        var c = y * r + I, d = c << 2, H = 0, N = y * f;
        if (h == 1) H = o[N + (I >>> 3)] >>> 7 - (I & 7) & 1;
        else if (h == 2) H = o[N + (I >>> 2)] >>> 6 - 2 * (I & 3) & 3;
        else if (h == 4) H = o[N + (I >>> 1)] >>> 4 - 4 * (I & 1) & 15;
        else if (h == 8) H = o[N + I * w];
        else throw h;
        a[d] = R[H] >> 8, a[d + 1] = R[P + H] >> 8, a[d + 2] = R[P + P + H] >> 8, a[d + 3] = k ? o[N + I * w + 1] : 255;
      }
  else if (l == 5)
    for (var V = w > 4 ? 1 : 0, c = 0; c < n; c++) {
      var d = c << 2, S = c * w;
      if (window.UDOC) {
        var C = o[S], E = o[S + 1], U = o[S + 2], O = o[S + 3], G = UDOC.C.cmykToRgb([C * (1 / 255), E * (1 / 255), U * (1 / 255), O * (1 / 255)]);
        a[d] = ~~(0.5 + 255 * G[0]), a[d + 1] = ~~(0.5 + 255 * G[1]), a[d + 2] = ~~(0.5 + 255 * G[2]);
      } else {
        var C = 255 - o[S], E = 255 - o[S + 1], U = 255 - o[S + 2], O = (255 - o[S + 3]) * (1 / 255);
        a[d] = ~~(C * O + 0.5), a[d + 1] = ~~(E * O + 0.5), a[d + 2] = ~~(U * O + 0.5);
      }
      a[d + 3] = 255 * (1 - V) + o[S + 4] * V;
    }
  else if (l == 6 && i.t278)
    for (var K = i.t278[0], y = 0; y < s; y += K)
      for (var c = y * r, j = K * r, z = 0; z < j; z++) {
        var d = 4 * (c + z), S = 3 * c + 4 * (z >>> 1), U = o[S + (z & 1)], B = o[S + 2] - 128, Y = o[S + 3] - 128, re = U + ((Y >> 2) + (Y >> 3) + (Y >> 5)), q = U - ((B >> 2) + (B >> 4) + (B >> 5)) - ((Y >> 1) + (Y >> 3) + (Y >> 4) + (Y >> 5)), ee = U + (B + (B >> 1) + (B >> 2) + (B >> 6));
        a[d] = Math.max(0, Math.min(255, re)), a[d + 1] = Math.max(0, Math.min(255, q)), a[d + 2] = Math.max(0, Math.min(255, ee)), a[d + 3] = 255;
      }
  else if (l == 32845)
    for (var y = 0; y < s; y++)
      for (var I = 0; I < r; I++) {
        var S = (y * r + I) * 6, d = (y * r + I) * 4, ie = o[S + 1] << 8 | o[S], ie = Math.pow(2, (ie + 0.5) / 256 - 64), Q = (o[S + 3] + 0.5) / 410, Z = (o[S + 5] + 0.5) / 410, J = 9 * Q / (6 * Q - 16 * Z + 12), X = 4 * Z / (6 * Q - 16 * Z + 12), W = ie, le = J * W / X, U = W, fe = (1 - J - X) * W / X, re = 2.69 * le - 1.276 * U - 0.414 * fe, q = -1.022 * le + 1.978 * U + 0.044 * fe, ee = 0.061 * le - 0.224 * U + 1.163 * fe;
        a[d] = t(Math.min(re, 1)) * 255, a[d + 1] = t(Math.min(q, 1)) * 255, a[d + 2] = t(Math.min(ee, 1)) * 255, a[d + 3] = 255;
      }
  else log("Unknown Photometric interpretation: " + l);
  return a;
};
F.replaceIMG = function(i) {
  i == null && (i = document.getElementsByTagName("img"));
  for (var e = ["tif", "tiff", "dng", "cr2", "nef"], t = 0; t < i.length; t++) {
    var r = i[t], s = r.getAttribute("src");
    if (s != null) {
      var n = s.split(".").pop().toLowerCase();
      if (e.indexOf(n) != -1) {
        var o = new XMLHttpRequest();
        F._xhrs.push(o), F._imgs.push(r), o.open("GET", s), o.responseType = "arraybuffer", o.onload = F._imgLoaded, o.send();
      }
    }
  }
};
F._xhrs = [];
F._imgs = [];
F._imgLoaded = function(i) {
  var e = F._xhrs.indexOf(i.target), t = F._imgs[e];
  F._xhrs.splice(e, 1), F._imgs.splice(e, 1), t.setAttribute("src", F.bufferToURI(i.target.response));
};
F.bufferToURI = function(i) {
  var e = F.decode(i), t = e, r = 0, s = t[0];
  e[0].subIFD && (t = t.concat(e[0].subIFD));
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    if (!(o.t258 == null || o.t258.length < 3)) {
      var a = o.t256 * o.t257;
      a > r && (r = a, s = o);
    }
  }
  F.decodeImage(i, s, e);
  var l = F.toRGBA8(s), h = s.width, w = s.height, u = document.createElement("canvas");
  u.width = h, u.height = w;
  var f = u.getContext("2d"), y = new ImageData(new Uint8ClampedArray(l.buffer), h, w);
  return f.putImageData(y, 0, 0), u.toDataURL();
};
F._binBE = {
  nextZero: function(i, e) {
    for (; i[e] != 0; ) e++;
    return e;
  },
  readUshort: function(i, e) {
    return i[e] << 8 | i[e + 1];
  },
  readShort: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 1], t[1] = i[e + 0], F._binBE.i16[0];
  },
  readInt: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 3], t[1] = i[e + 2], t[2] = i[e + 1], t[3] = i[e + 0], F._binBE.i32[0];
  },
  readUint: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 3], t[1] = i[e + 2], t[2] = i[e + 1], t[3] = i[e + 0], F._binBE.ui32[0];
  },
  readASCII: function(i, e, t) {
    for (var r = "", s = 0; s < t; s++) r += String.fromCharCode(i[e + s]);
    return r;
  },
  readFloat: function(i, e) {
    for (var t = F._binBE.ui8, r = 0; r < 4; r++) t[r] = i[e + 3 - r];
    return F._binBE.fl32[0];
  },
  readDouble: function(i, e) {
    for (var t = F._binBE.ui8, r = 0; r < 8; r++) t[r] = i[e + 7 - r];
    return F._binBE.fl64[0];
  },
  writeUshort: function(i, e, t) {
    i[e] = t >> 8 & 255, i[e + 1] = t & 255;
  },
  writeInt: function(i, e, t) {
    var r = F._binBE.ui8;
    F._binBE.i32[0] = t, i[e + 3] = r[0], i[e + 2] = r[1], i[e + 1] = r[2], i[e + 0] = r[3];
  },
  writeUint: function(i, e, t) {
    i[e] = t >> 24 & 255, i[e + 1] = t >> 16 & 255, i[e + 2] = t >> 8 & 255, i[e + 3] = t >> 0 & 255;
  },
  writeASCII: function(i, e, t) {
    for (var r = 0; r < t.length; r++) i[e + r] = t.charCodeAt(r);
  },
  writeDouble: function(i, e, t) {
    F._binBE.fl64[0] = t;
    for (var r = 0; r < 8; r++) i[e + r] = F._binBE.ui8[7 - r];
  }
};
F._binBE.ui8 = new Uint8Array(8);
F._binBE.i16 = new Int16Array(F._binBE.ui8.buffer);
F._binBE.i32 = new Int32Array(F._binBE.ui8.buffer);
F._binBE.ui32 = new Uint32Array(F._binBE.ui8.buffer);
F._binBE.fl32 = new Float32Array(F._binBE.ui8.buffer);
F._binBE.fl64 = new Float64Array(F._binBE.ui8.buffer);
F._binLE = {
  nextZero: F._binBE.nextZero,
  readUshort: function(i, e) {
    return i[e + 1] << 8 | i[e];
  },
  readShort: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 0], t[1] = i[e + 1], F._binBE.i16[0];
  },
  readInt: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 0], t[1] = i[e + 1], t[2] = i[e + 2], t[3] = i[e + 3], F._binBE.i32[0];
  },
  readUint: function(i, e) {
    var t = F._binBE.ui8;
    return t[0] = i[e + 0], t[1] = i[e + 1], t[2] = i[e + 2], t[3] = i[e + 3], F._binBE.ui32[0];
  },
  readASCII: F._binBE.readASCII,
  readFloat: function(i, e) {
    for (var t = F._binBE.ui8, r = 0; r < 4; r++) t[r] = i[e + r];
    return F._binBE.fl32[0];
  },
  readDouble: function(i, e) {
    for (var t = F._binBE.ui8, r = 0; r < 8; r++) t[r] = i[e + r];
    return F._binBE.fl64[0];
  },
  writeUshort: function(i, e, t) {
    i[e] = t & 255, i[e + 1] = t >> 8 & 255;
  },
  writeInt: function(i, e, t) {
    var r = F._binBE.ui8;
    F._binBE.i32[0] = t, i[e + 0] = r[0], i[e + 1] = r[1], i[e + 2] = r[2], i[e + 3] = r[3];
  },
  writeUint: function(i, e, t) {
    i[e] = t >>> 0 & 255, i[e + 1] = t >>> 8 & 255, i[e + 2] = t >>> 16 & 255, i[e + 3] = t >>> 24 & 255;
  },
  writeASCII: F._binBE.writeASCII
};
F._copyTile = function(i, e, t, r, s, n, o, a) {
  for (var l = Math.min(e, s - o), h = Math.min(t, n - a), w = 0; w < h; w++)
    for (var u = (a + w) * s + o, f = w * e, y = 0; y < l; y++) r[u + y] = i[f + y];
};
F._inflateRaw = function() {
  var i = {};
  return i.H = {}, i.H.N = function(e, t) {
    var r = Uint8Array, s = 0, n = 0, o = 0, a = 0, l = 0, h = 0, w = 0, u = 0, f = 0, y, L;
    if (e[0] == 3 && e[1] == 0) return t || new r(0);
    var g = i.H, c = g.b, d = g.e, _ = g.R, D = g.n, M = g.A, v = g.Z, p = g.m, m = t == null;
    for (m && (t = new r(e.length >>> 2 << 5)); s == 0; ) {
      if (s = c(e, f, 1), n = c(e, f + 1, 2), f += 3, n == 0) {
        f & 7 && (f += 8 - (f & 7));
        var b = (f >>> 3) + 4, x = e[b - 4] | e[b - 3] << 8;
        m && (t = i.H.W(t, u + x)), t.set(new r(e.buffer, e.byteOffset + b, x), u), f = b + x << 3, u += x;
        continue;
      }
      if (m && (t = i.H.W(t, u + (1 << 17))), n == 1 && (y = p.J, L = p.h, h = 511, w = 31), n == 2) {
        o = d(e, f, 5) + 257, a = d(e, f + 5, 5) + 1, l = d(e, f + 10, 4) + 4, f += 14;
        for (var T = 1, R = 0; R < 38; R += 2)
          p.Q[R] = 0, p.Q[R + 1] = 0;
        for (var R = 0; R < l; R++) {
          var P = d(e, f + R * 3, 3);
          p.Q[(p.X[R] << 1) + 1] = P, P > T && (T = P);
        }
        f += 3 * l, D(p.Q, T), M(p.Q, T, p.u), y = p.w, L = p.d, f = _(p.u, (1 << T) - 1, o + a, e, f, p.v);
        var k = g.V(p.v, 0, o, p.C);
        h = (1 << k) - 1;
        var I = g.V(p.v, o, a, p.D);
        w = (1 << I) - 1, D(p.C, k), M(p.C, k, y), D(p.D, I), M(p.D, I, L);
      }
      for (; ; ) {
        var H = y[v(e, f) & h];
        f += H & 15;
        var N = H >>> 4;
        if (!(N >>> 8))
          t[u++] = N;
        else {
          if (N == 256)
            break;
          var V = u + N - 254;
          if (N > 264) {
            var S = p.q[N - 257];
            V = u + (S >>> 3) + d(e, f, S & 7), f += S & 7;
          }
          var C = L[v(e, f) & w];
          f += C & 15;
          var E = C >>> 4, U = p.c[E], O = (U >>> 4) + c(e, f, U & 15);
          for (f += U & 15; u < V; )
            t[u] = t[u++ - O], t[u] = t[u++ - O], t[u] = t[u++ - O], t[u] = t[u++ - O];
          u = V;
        }
      }
    }
    return t.length == u ? t : t.slice(0, u);
  }, i.H.W = function(e, t) {
    var r = e.length;
    if (t <= r) return e;
    var s = new Uint8Array(r << 1);
    return s.set(e, 0), s;
  }, i.H.R = function(e, t, r, s, n, o) {
    for (var a = i.H.e, l = i.H.Z, h = 0; h < r; ) {
      var w = e[l(s, n) & t];
      n += w & 15;
      var u = w >>> 4;
      if (u <= 15)
        o[h] = u, h++;
      else {
        var f = 0, y = 0;
        u == 16 ? (y = 3 + a(s, n, 2), n += 2, f = o[h - 1]) : u == 17 ? (y = 3 + a(s, n, 3), n += 3) : u == 18 && (y = 11 + a(s, n, 7), n += 7);
        for (var L = h + y; h < L; )
          o[h] = f, h++;
      }
    }
    return n;
  }, i.H.V = function(e, t, r, s) {
    for (var n = 0, o = 0, a = s.length >>> 1; o < r; ) {
      var l = e[o + t];
      s[o << 1] = 0, s[(o << 1) + 1] = l, l > n && (n = l), o++;
    }
    for (; o < a; )
      s[o << 1] = 0, s[(o << 1) + 1] = 0, o++;
    return n;
  }, i.H.n = function(e, t) {
    for (var r = i.H.m, s = e.length, n, o, a, l, h, w = r.j, l = 0; l <= t; l++) w[l] = 0;
    for (l = 1; l < s; l += 2) w[e[l]]++;
    var u = r.K;
    for (n = 0, w[0] = 0, o = 1; o <= t; o++)
      n = n + w[o - 1] << 1, u[o] = n;
    for (a = 0; a < s; a += 2)
      h = e[a + 1], h != 0 && (e[a] = u[h], u[h]++);
  }, i.H.A = function(e, t, r) {
    for (var s = e.length, n = i.H.m, o = n.r, a = 0; a < s; a += 2) if (e[a + 1] != 0)
      for (var l = a >> 1, h = e[a + 1], w = l << 4 | h, u = t - h, f = e[a] << u, y = f + (1 << u); f != y; ) {
        var L = o[f] >>> 15 - t;
        r[L] = w, f++;
      }
  }, i.H.l = function(e, t) {
    for (var r = i.H.m.r, s = 15 - t, n = 0; n < e.length; n += 2) {
      var o = e[n] << t - e[n + 1];
      e[n] = r[o] >>> s;
    }
  }, i.H.M = function(e, t, r) {
    r = r << (t & 7);
    var s = t >>> 3;
    e[s] |= r, e[s + 1] |= r >>> 8;
  }, i.H.I = function(e, t, r) {
    r = r << (t & 7);
    var s = t >>> 3;
    e[s] |= r, e[s + 1] |= r >>> 8, e[s + 2] |= r >>> 16;
  }, i.H.e = function(e, t, r) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8) >>> (t & 7) & (1 << r) - 1;
  }, i.H.b = function(e, t, r) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (t & 7) & (1 << r) - 1;
  }, i.H.Z = function(e, t) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (t & 7);
  }, i.H.i = function(e, t) {
    return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16 | e[(t >>> 3) + 3] << 24) >>> (t & 7);
  }, i.H.m = function() {
    var e = Uint16Array, t = Uint32Array;
    return { K: new e(16), j: new e(16), X: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], S: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], T: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], q: new e(32), p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], z: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], c: new t(32), J: new e(512), _: [], h: new e(32), $: [], w: new e(32768), C: [], v: [], d: new e(32768), D: [], u: new e(512), Q: [], r: new e(32768), s: new t(286), Y: new t(30), a: new t(19), t: new t(15e3), k: new e(65536), g: new e(32768) };
  }(), function() {
    for (var e = i.H.m, t = 32768, r = 0; r < t; r++) {
      var s = r;
      s = (s & 2863311530) >>> 1 | (s & 1431655765) << 1, s = (s & 3435973836) >>> 2 | (s & 858993459) << 2, s = (s & 4042322160) >>> 4 | (s & 252645135) << 4, s = (s & 4278255360) >>> 8 | (s & 16711935) << 8, e.r[r] = (s >>> 16 | s << 16) >>> 17;
    }
    function n(o, a, l) {
      for (; a-- != 0; ) o.push(0, l);
    }
    for (var r = 0; r < 32; r++)
      e.q[r] = e.S[r] << 3 | e.T[r], e.c[r] = e.p[r] << 4 | e.z[r];
    n(e._, 144, 8), n(e._, 112, 9), n(e._, 24, 7), n(e._, 8, 8), i.H.n(e._, 9), i.H.A(e._, 9, e.J), i.H.l(e._, 9), n(e.$, 32, 5), i.H.n(e.$, 5), i.H.A(e.$, 5, e.h), i.H.l(e.$, 5), n(e.Q, 19, 0), n(e.C, 286, 0), n(e.D, 30, 0), n(e.v, 320, 0);
  }(), i.H.N;
}();
F.LosslessJpegDecode = /* @__PURE__ */ function() {
  var i, e;
  function t() {
    return i[e++];
  }
  function r() {
    return i[e++] << 8 | i[e++];
  }
  function s(c) {
    for (var d = t(), _ = [0, 0, 0, 255], D = [], M = 8, v = 0; v < 16; v++) D[v] = t();
    for (var v = 0; v < 16; v++)
      for (var p = 0; p < D[v]; p++) {
        var m = n(_, 0, v + 1, 1);
        _[m + 3] = t();
      }
    var b = new Uint8Array(1 << M);
    c[d] = [new Uint8Array(_), b];
    for (var v = 0; v < 1 << M; v++) {
      for (var x = M, T = v, R = 0, P = 0; _[R + 3] == 255 && x != 0; )
        P = T >> --x & 1, R = _[R + P];
      b[v] = R;
    }
  }
  function n(c, d, _, D) {
    if (c[d + 3] != 255) return 0;
    if (_ == 0) return d;
    for (var M = 0; M < 2; M++) {
      c[d + M] == 0 && (c[d + M] = c.length, c.push(0, 0, D, 255));
      var v = n(c, c[d + M], _ - 1, D + 1);
      if (v != 0) return v;
    }
    return 0;
  }
  function o(c) {
    for (var d = c.b, _ = c.f; d < 25 && c.a < c.d; ) {
      var D = c.data[c.a++];
      D == 255 && !c.c && c.a++, _ = _ << 8 | D, d += 8;
    }
    if (d < 0) throw "e";
    c.b = d, c.f = _;
  }
  function a(c, d) {
    return d.b < c && o(d), d.f >> (d.b -= c) & 65535 >> 16 - c;
  }
  function l(c, d) {
    var _ = c[0], D = 0, M = 255, v = 0;
    d.b < 16 && o(d);
    var p = d.f >> d.b - 8 & 255;
    for (D = c[1][p], M = _[D + 3], d.b -= _[D + 2]; M == 255; )
      v = d.f >> --d.b & 1, D = _[D + v], M = _[D + 3];
    return M;
  }
  function h(c, d) {
    return c < 32768 >> 16 - d && (c += -(1 << d) + 1), c;
  }
  function w(c, d) {
    var _ = l(c, d);
    if (_ == 0) return 0;
    if (_ == 16) return -32768;
    var D = a(_, d);
    return h(D, _);
  }
  function u(c, d, _, D, M, v) {
    for (var p = 0, m = 0; m < v; m++) {
      for (var b = m * d, x = 0; x < d; x += M) {
        p++;
        for (var T = 0; T < M; T++) c[b + x + T] = w(D[T], _);
      }
      if (_.e != 0 && p % _.e == 0 && m != 0) {
        for (var R = _.a, P = _.data; P[R] != 255 || !(208 <= P[R + 1] && P[R + 1] <= 215); ) R--;
        _.a = R + 2, _.f = 0, _.b = 0;
      }
    }
  }
  function f(c, d) {
    return h(a(c, d), c);
  }
  function y(c, d, _, D, M) {
    for (var v = i.length - e, p = 0; p < v; p += 4) {
      var m = i[e + p];
      i[e + p] = i[e + p + 3], i[e + p + 3] = m;
      var m = i[e + p + 1];
      i[e + p + 1] = i[e + p + 2], i[e + p + 2] = m;
    }
    for (var b = 0; b < M; b++)
      for (var x = 32768, T = 32768, R = 0; R < d; R += 2) {
        var P = l(D, _), k = l(D, _);
        P != 0 && (x += f(P, _)), k != 0 && (T += f(k, _)), c[b * d + R] = x & 65535, c[b * d + R + 1] = T & 65535;
      }
  }
  function L(c) {
    if (i = c, e = 0, r() != 65496) throw "e";
    for (var d = [], _ = 0, D = 0, M = 0, v = [], p = [], m = [], b = 0, x = 0, T = 0; ; ) {
      var R = r();
      if (R == 65535) {
        e--;
        continue;
      }
      var P = r();
      if (R == 65475) {
        D = t(), x = r(), T = r(), b = t();
        for (var k = 0; k < b; k++) {
          var I = t(), H = t(), N = t();
          if (N != 0) throw "e";
          d[I] = [k, H >> 4, H & 15];
        }
      } else if (R == 65476)
        for (var V = e + P - 2; e < V; ) s(p);
      else if (R == 65498) {
        e++;
        for (var k = 0; k < b; k++) {
          var S = t(), C = d[S];
          m[C[0]] = p[t() >>> 4], v[C[0]] = C.slice(1);
        }
        _ = t(), e += 2;
        break;
      } else R == 65501 ? M = r() : e += P - 2;
    }
    var E = D > 8 ? Uint16Array : Uint8Array, U = new E(x * T * b), O = { b: 0, f: 0, c: _ == 8, a: e, data: i, d: i.length, e: M };
    if (O.c) y(U, T * b, O, m[0], x);
    else {
      for (var G = [], K = 0, j = 0, k = 0; k < b; k++) {
        var z = v[k], B = z[0], Y = z[1];
        B > K && (K = B), Y > j && (j = Y), G.push(B * Y);
      }
      if (K != 1 || j != 1) {
        if (b != 3 || G[1] != 1 || G[2] != 1 || K != 2 || j != 1 && j != 2) throw "e";
        for (var re = [], q = 0, k = 0; k < b; k++) {
          for (var ee = 0; ee < G[k]; ee++) re.push(m[k]);
          q += G[k];
        }
        var ie = T / K, Q = x / j, Z = ie * Q;
        u(U, ie * q, O, re, q, Q), g(U, _, ie, Q, q - 2, q, q, D);
        var J = new Uint16Array(Z * G[0]);
        if (K == 2 && j == 2) {
          for (var k = 0; k < Z; k++)
            J[4 * k] = U[6 * k], J[4 * k + 1] = U[6 * k + 1], J[4 * k + 2] = U[6 * k + 2], J[4 * k + 3] = U[6 * k + 3];
          g(J, _, ie * 4, Q, 0, 1, 1, D);
          for (var k = 0; k < Z; k++)
            U[6 * k] = J[4 * k], U[6 * k + 1] = J[4 * k + 1], U[6 * k + 2] = J[4 * k + 2], U[6 * k + 3] = J[4 * k + 3];
        }
        if (K == 2 && j == 1) {
          for (var k = 0; k < Z; k++)
            J[2 * k] = U[4 * k], J[2 * k + 1] = U[4 * k + 1];
          g(J, _, ie * 2, Q, 0, 1, 1, D);
          for (var k = 0; k < Z; k++)
            U[4 * k] = J[2 * k], U[4 * k + 1] = J[2 * k + 1];
        }
        for (var X = U.slice(0), Y = 0; Y < x; Y++)
          if (j == 2) for (var B = 0; B < T; B++) {
            var W = (Y * T + B) * b, le = ((Y >>> 1) * ie + (B >>> 1)) * q, fe = (Y & 1) * 2 + (B & 1);
            U[W] = X[le + fe], U[W + 1] = X[le + 4], U[W + 2] = X[le + 5];
          }
          else for (var B = 0; B < T; B++) {
            var W = (Y * T + B) * b, le = (Y * ie + (B >>> 1)) * q, fe = B & 1;
            U[W] = X[le + fe], U[W + 1] = X[le + 2], U[W + 2] = X[le + 3];
          }
      } else if (u(U, T * b, O, m, b, x), M == 0) g(U, _, T, x, 0, b, b, D);
      else
        for (var ve = Math.floor(M / T), Y = 0; Y < x; Y += ve) {
          var Me = U.slice(Y * T * b, (Y + ve) * T * b);
          g(Me, _, T, ve, 0, b, b, D), U.set(Me, Y * T * b);
        }
    }
    return U;
  }
  function g(c, d, _, D, M, v, p, m) {
    for (var b = _ * p, x = M; x < v; x++) c[x] += 1 << m - 1;
    for (var T = p; T < b; T += p) for (var x = M; x < v; x++) c[T + x] += c[T + x - p];
    for (var R = 1; R < D; R++) {
      for (var P = R * b, x = M; x < v; x++) c[P + x] += c[P + x - b];
      for (var T = p; T < b; T += p)
        for (var x = M; x < v; x++) {
          var k = P + T + x, I = k - b, H = c[k - p], N = 0;
          if (d == 0) N = 0;
          else if (d == 1) N = H;
          else if (d == 2) N = c[I];
          else if (d == 3) N = c[I - p];
          else if (d == 4) N = H + (c[I] - c[I - p]);
          else if (d == 5) N = H + (c[I] - c[I - p] >>> 1);
          else if (d == 6) N = c[I] + (H - c[I - p] >>> 1);
          else if (d == 7) N = H + c[I] >>> 1;
          else throw d;
          c[k] += N;
        }
    }
  }
  return L;
}();
(function() {
  var i = 0, e = 1, t = 2, r = 3, s = 4, n = 5, o = 6, a = 7, l = 8, h = 9, w = 10, u = 11, f = 12, y = 13, L = 14, g = 15, c = 16, d = 17, _ = 18;
  function D(S) {
    var C = F._binBE.readUshort, E = { b: C(S, 0), i: S[2], C: S[3], u: S[4], q: C(S, 5), k: C(S, 7), e: C(S, 9), l: C(S, 11), s: S[13], d: C(S, 14) };
    if (E.b != 18771 || E.i > 1 || E.q < 6 || E.q % 6 || E.e < 768 || E.e % 24 || E.l != 768 || E.k < E.l || E.k % E.l || E.k - E.e >= E.l || E.s > 16 || E.s != E.k / E.l || E.s != Math.ceil(E.e / E.l) || E.d != E.q / 6 || E.u != 12 && E.u != 14 && E.u != 16 || E.C != 16 && E.C != 0)
      throw "Invalid data";
    if (E.i == 0)
      throw "Not implemented. We need this file!";
    return E.h = E.C == 16, E.m = (E.h ? E.l * 2 / 3 : E.l >>> 1) | 0, E.A = E.m + 2, E.f = 64, E.g = (1 << E.u) - 1, E.n = 4 * E.u, E;
  }
  function M(S, C) {
    var E = new Array(C.s), U = 4 * C.s, O = 16 + U;
    U & 12 && (O += 16 - (U & 12));
    for (var G = 0, K = 16; G < C.s; K += 4) {
      var j = F._binBE.readUint(S, K);
      E[G] = S.slice(O, O + j), E[G].j = 0, E[G].a = 0, O += j, G++;
    }
    if (O != S.length) throw "Invalid data";
    return E;
  }
  function v(S, C) {
    for (var E = -C[4], U = 0; E <= C[4]; U++, E++)
      S[U] = E <= -276 ? -4 : E <= -67 ? -3 : E <= -18 ? -2 : E < -0 ? -1 : E <= C[0] ? 0 : E < C[1] ? 1 : E < C[2] ? 2 : E < C[3] ? 3 : 4;
  }
  function p(S, C, E) {
    var U = [C, 3 * C + 18, 5 * C + 67, 7 * C + 276, E];
    S.o = C, S.w = (U[4] + 2 * C) / (2 * C + 1) + 1 | 0, S.v = Math.ceil(Math.log2(S.w)), S.t = 9, v(S.c, U);
  }
  function m(S) {
    var C = { c: new Int8Array(2 << S.u) };
    return p(C, 0, S.g), C;
  }
  function b(S) {
    for (var C = [[], [], []], E = Math.max(2, S.w + 32 >>> 6), U = 0; U < 3; U++)
      for (var O = 0; O < 41; O++)
        C[U][O] = [E, 1];
    return C;
  }
  function x(S) {
    for (var C = -1, E = 0; !E; C++)
      E = S[S.j] >>> 7 - S.a & 1, S.a++, S.a &= 7, S.a || S.j++;
    return C;
  }
  function T(S, C) {
    var E = 0, U = 8 - S.a;
    if (S.j, S.a, C) {
      if (C >= U)
        do
          E <<= U, C -= U, E |= S[S.j] & (1 << U) - 1, S.j++, U = 8;
        while (C >= 8);
      C && (E <<= C, U -= C, E |= S[S.j] >>> U & (1 << C) - 1), S.a = 8 - U;
    }
    return E;
  }
  function R(S, C) {
    var E = 0;
    if (C < S)
      for (; E <= 14 && C << ++E < S; ) ;
    return E;
  }
  function P(S, C, E, U, O, G, K, j) {
    j == null && (j = 0);
    var z = G + 1, B = z % 2, Y = 0, re, q, ee = U[O], ie = U[O - 1], Q = U[O - 2][z], Z = ie[z - 1], J = ie[z], X = ie[z + 1], W = ee[z - 1], le = ee[z + 1], fe = Math.abs, ve, Me, ne, de;
    if (B && (ve = fe(X - J), Me = fe(Q - J), ne = fe(Z - J)), B) {
      if (de = ve > ne && Me < ve ? Q + Z : ve < ne && Me < ne ? Q + X : X + Z, de = de + 2 * J >>> 2, j) {
        ee[z] = de;
        return;
      }
      re = C.t * C.c[S.g + J - Q] + C.c[S.g + Z - J];
    } else
      de = J > Z && J > X || J < Z && J < X ? le + W + 2 * J >>> 2 : W + le >>> 1, re = C.t * C.c[S.g + J - Z] + C.c[S.g + Z - W];
    q = fe(re);
    var Pe = x(E);
    if (Pe < S.n - C.v - 1) {
      var ye = R(K[q][0], K[q][1]);
      Y = T(E, ye) + (Pe << ye);
    } else
      Y = T(E, C.v) + 1;
    Y = Y & 1 ? -1 - (Y >>> 1) : Y >>> 1, K[q][0] += fe(Y), K[q][1] == S.f && (K[q][0] >>>= 1, K[q][1] >>>= 1), K[q][1]++, de = re < 0 ? de - Y : de + Y, S.i && (de < 0 ? de += C.w : de > S.g && (de -= C.w)), ee[z] = de >= 0 ? Math.min(de, S.g) : 0;
  }
  function k(S, C, E) {
    for (var U = S[0].length, O = C; O <= E; O++)
      S[O][0] = S[O - 1][1], S[O][U - 1] = S[O - 1][U - 2];
  }
  function I(S) {
    k(S, a, f), k(S, t, s), k(S, g, d);
  }
  function H(S, C, E, U, O, G, K, j, z, B, Y, re, q) {
    for (var ee = 0, ie = 1, Q = O < y && O > s; ie < S.m; )
      ee < S.m && (P(S, C, E, U, O, ee, K[z], S.h && (Q && B || !Q && (Y || (ee & re) == q))), P(S, C, E, U, G, ee, K[z], S.h && (!Q && B || Q && (Y || (ee & re) == q))), ee += 2), ee > 8 && (P(S, C, E, U, O, ie, j[z]), P(S, C, E, U, G, ie, j[z]), ie += 2);
    I(U);
  }
  function N(S, C, E, U, O, G) {
    H(S, C, E, U, t, a, O, G, 0, 0, 1, 0, 8), H(S, C, E, U, l, g, O, G, 1, 0, 1, 0, 8), H(S, C, E, U, r, h, O, G, 2, 1, 0, 3, 0), H(S, C, E, U, w, c, O, G, 0, 0, 0, 3, 2), H(S, C, E, U, s, u, O, G, 1, 0, 0, 3, 2), H(S, C, E, U, f, d, O, G, 2, 1, 0, 3, 0);
  }
  function V(S, C, E, U, O, G) {
    var K = G.length, j = S.l;
    O + 1 == S.s && (j = S.e - O * S.l);
    for (var z = 6 * S.e * U + O * S.l, B = 0; B < 6; B++) {
      for (var Y = 0; Y < j; Y++) {
        var re = G[B % K][Y % K], q;
        re == 0 ? q = t + (B >>> 1) : re == 2 ? q = g + (B >>> 1) : q = a + B;
        var ee = S.h ? (Y * 2 / 3 & 2147483646 | Y % 3 & 1) + (Y % 3 >>> 1) : Y >>> 1;
        C[z + Y] = E[q][ee + 1];
      }
      z += S.e;
    }
  }
  F._decompressRAF = function(S, C) {
    var E = D(S), U = M(S, E), O = m(E), G = new Int16Array(E.e * E.q);
    C == null && (C = E.h ? [[1, 1, 0, 1, 1, 2], [1, 1, 2, 1, 1, 0], [2, 0, 1, 0, 2, 1], [1, 1, 2, 1, 1, 0], [1, 1, 0, 1, 1, 2], [0, 2, 1, 2, 0, 1]] : [[0, 1], [3, 2]]);
    for (var K = [[i, r], [e, s], [n, u], [o, f], [y, c], [L, d]], j = [], z = 0; z < _; z++)
      j[z] = new Uint16Array(E.A);
    for (var B = 0; B < E.s; B++) {
      for (var Y = b(O), re = b(O), z = 0; z < _; z++)
        for (var q = 0; q < E.A; q++)
          j[z][q] = 0;
      for (var ee = 0; ee < E.d; ee++) {
        N(E, O, U[B], j, Y, re);
        for (var z = 0; z < 6; z++)
          for (var q = 0; q < E.A; q++)
            j[K[z][0]][q] = j[K[z][1]][q];
        V(E, G, j, ee, B, C);
        for (var z = t; z < _; z++)
          if ([n, o, y, L].indexOf(z) == -1)
            for (var q = 0; q < E.A; q++)
              j[z][q] = 0;
        I(j);
      }
    }
    return G;
  };
})();
performance.now();
new pe(); new pe();
class $s extends Zt {
  constructor(t) {
    super(t);
    A(this, "token", "");
    A(this, "format", "webp");
    A(this, "style", "mapbox.satellite");
    A(this, "attribution", "MapBox");
    A(this, "maxLevel", 19);
    A(this, "url", "https://api.mapbox.com/v4/{style}/{z}/{x}/{y}.{format}?access_token={token}");
    Object.assign(this, t);
  }
}
class en extends Zt {
  constructor(t) {
    super(t);
    A(this, "dataType", "image");
    A(this, "attribution", "高德[GS(2021)6375号]");
    A(this, "style", "8");
    A(this, "subdomains", "1234");
    A(this, "maxLevel", 18);
    A(this, "url", "https://webst0{s}.is.autonavi.com/appmaptile?style={style}&x={x}&y={y}&z={z}");
    Object.assign(this, t);
  }
}
new pe(); new Gi();
new Ji().load(
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
);
function Oe(i, e) {
  this.x = i, this.y = e;
}
Oe.prototype = {
  /**
   * Clone this point, returning a new point that can be modified
   * without affecting the old one.
   * @return {Point} the clone
   */
  clone() {
    return new Oe(this.x, this.y);
  },
  /**
   * Add this point's x & y coordinates to another point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  add(i) {
    return this.clone()._add(i);
  },
  /**
   * Subtract this point's x & y coordinates to from point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  sub(i) {
    return this.clone()._sub(i);
  },
  /**
   * Multiply this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  multByPoint(i) {
    return this.clone()._multByPoint(i);
  },
  /**
   * Divide this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  divByPoint(i) {
    return this.clone()._divByPoint(i);
  },
  /**
   * Multiply this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  mult(i) {
    return this.clone()._mult(i);
  },
  /**
   * Divide this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  div(i) {
    return this.clone()._div(i);
  },
  /**
   * Rotate this point around the 0, 0 origin by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @return {Point} output point
   */
  rotate(i) {
    return this.clone()._rotate(i);
  },
  /**
   * Rotate this point around p point by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @param {Point} p Point to rotate around
   * @return {Point} output point
   */
  rotateAround(i, e) {
    return this.clone()._rotateAround(i, e);
  },
  /**
   * Multiply this point by a 4x1 transformation matrix
   * @param {[number, number, number, number]} m transformation matrix
   * @return {Point} output point
   */
  matMult(i) {
    return this.clone()._matMult(i);
  },
  /**
   * Calculate this point but as a unit vector from 0, 0, meaning
   * that the distance from the resulting point to the 0, 0
   * coordinate will be equal to 1 and the angle from the resulting
   * point to the 0, 0 coordinate will be the same as before.
   * @return {Point} unit vector point
   */
  unit() {
    return this.clone()._unit();
  },
  /**
   * Compute a perpendicular point, where the new y coordinate
   * is the old x coordinate and the new x coordinate is the old y
   * coordinate multiplied by -1
   * @return {Point} perpendicular point
   */
  perp() {
    return this.clone()._perp();
  },
  /**
   * Return a version of this point with the x & y coordinates
   * rounded to integers.
   * @return {Point} rounded point
   */
  round() {
    return this.clone()._round();
  },
  /**
   * Return the magnitude of this point: this is the Euclidean
   * distance from the 0, 0 coordinate to this point's x and y
   * coordinates.
   * @return {number} magnitude
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  /**
   * Judge whether this point is equal to another point, returning
   * true or false.
   * @param {Point} other the other point
   * @return {boolean} whether the points are equal
   */
  equals(i) {
    return this.x === i.x && this.y === i.y;
  },
  /**
   * Calculate the distance from this point to another point
   * @param {Point} p the other point
   * @return {number} distance
   */
  dist(i) {
    return Math.sqrt(this.distSqr(i));
  },
  /**
   * Calculate the distance from this point to another point,
   * without the square root step. Useful if you're comparing
   * relative distances.
   * @param {Point} p the other point
   * @return {number} distance
   */
  distSqr(i) {
    const e = i.x - this.x, t = i.y - this.y;
    return e * e + t * t;
  },
  /**
   * Get the angle from the 0, 0 coordinate to this point, in radians
   * coordinates.
   * @return {number} angle
   */
  angle() {
    return Math.atan2(this.y, this.x);
  },
  /**
   * Get the angle from this point to another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleTo(i) {
    return Math.atan2(this.y - i.y, this.x - i.x);
  },
  /**
   * Get the angle between this point and another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleWith(i) {
    return this.angleWithSep(i.x, i.y);
  },
  /**
   * Find the angle of the two vectors, solving the formula for
   * the cross product a x b = |a||b|sin(θ) for θ.
   * @param {number} x the x-coordinate
   * @param {number} y the y-coordinate
   * @return {number} the angle in radians
   */
  angleWithSep(i, e) {
    return Math.atan2(
      this.x * e - this.y * i,
      this.x * i + this.y * e
    );
  },
  /** @param {[number, number, number, number]} m */
  _matMult(i) {
    const e = i[0] * this.x + i[1] * this.y, t = i[2] * this.x + i[3] * this.y;
    return this.x = e, this.y = t, this;
  },
  /** @param {Point} p */
  _add(i) {
    return this.x += i.x, this.y += i.y, this;
  },
  /** @param {Point} p */
  _sub(i) {
    return this.x -= i.x, this.y -= i.y, this;
  },
  /** @param {number} k */
  _mult(i) {
    return this.x *= i, this.y *= i, this;
  },
  /** @param {number} k */
  _div(i) {
    return this.x /= i, this.y /= i, this;
  },
  /** @param {Point} p */
  _multByPoint(i) {
    return this.x *= i.x, this.y *= i.y, this;
  },
  /** @param {Point} p */
  _divByPoint(i) {
    return this.x /= i.x, this.y /= i.y, this;
  },
  _unit() {
    return this._div(this.mag()), this;
  },
  _perp() {
    const i = this.y;
    return this.y = this.x, this.x = -i, this;
  },
  /** @param {number} angle */
  _rotate(i) {
    const e = Math.cos(i), t = Math.sin(i), r = e * this.x - t * this.y, s = t * this.x + e * this.y;
    return this.x = r, this.y = s, this;
  },
  /**
   * @param {number} angle
   * @param {Point} p
   */
  _rotateAround(i, e) {
    const t = Math.cos(i), r = Math.sin(i), s = e.x + t * (this.x - e.x) - r * (this.y - e.y), n = e.y + r * (this.x - e.x) + t * (this.y - e.y);
    return this.x = s, this.y = n, this;
  },
  _round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  constructor: Oe
};
Oe.convert = function(i) {
  if (i instanceof Oe)
    return (
      /** @type {Point} */
      i
    );
  if (Array.isArray(i))
    return new Oe(+i[0], +i[1]);
  if (i.x !== void 0 && i.y !== void 0)
    return new Oe(+i.x, +i.y);
  throw new Error("Expected [x, y] or {x, y} point format");
};
typeof TextDecoder > "u" ? null : new TextDecoder("utf-8");
let Ye = null;
$e.add = async function(i, e) {
  if (!$e.enabled || Ye === null) return;
};
$e.get = function(i) {
  if (!$e.enabled || Ye === null) return;
};
new pe(); new pi();

const THREE = await importShared('three');

const showLocation = (camera, domElement, map, id = "#informationDiv") => {
  const el = document.querySelector(id);
  if (el) {
    const pointer = new THREE.Vector2();
    domElement.addEventListener("pointermove", (evt) => {
      pointer.x = evt.clientX / domElement.clientWidth * 2 - 1;
      pointer.y = -(evt.clientY / domElement.clientHeight) * 2 + 1;
      const info = map.getLocalInfoFromScreen(camera, pointer);
      if (info) {
        el.innerHTML = `经度:${info.location.x.toFixed(3)}°  
                            纬度:${info.location.y.toFixed(3)}°  
                            海拔:${(info.location.z * 1e3).toFixed(1)}m
                            离摄像机距离:${info.distance.toFixed(3)}km `;
      } else {
        el.innerHTML = "";
      }
    });
  }
};
const fogFactor = 1;
const controlsEvents = (controls, camera, scene) => {
  controls.addEventListener("change", () => {
    const polar = Math.max(controls.getPolarAngle(), 0.1);
    const dist = Math.max(controls.getDistance(), 0.1);
    if (scene.fog instanceof THREE.FogExp2) {
      scene.fog.density = polar / (dist + 5) * fogFactor * 0.25;
    }
  });
};
const scaleImg = (map, sw, ne, height) => {
  const p1 = map.geo2map(new THREE.Vector3(sw.x, sw.y));
  const p2 = map.geo2map(new THREE.Vector3(ne.x, ne.y));
  const scale = new THREE.Vector3(p2.x - p1.x, p2.y - p1.y, height);
  return scale;
};

const _sfc_main = {};
const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { id: "informationDiv" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1))
}
const informationDiv = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-d511bb21"]]);

export { $s, controlsEvents, en, informationDiv, pt, scaleImg, showLocation };
//# sourceMappingURL=informationDiv.BpVz_Xf81767105581793.js.map
