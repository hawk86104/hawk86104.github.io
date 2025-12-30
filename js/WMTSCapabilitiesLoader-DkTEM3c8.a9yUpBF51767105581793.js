import { importShared } from './index.BxB45aCK1767105581793.js';
import { h, y, E as E$1, zt } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { GLTFLoader } from './GLTFLoader.CAD9c_1U1767105581793.js';
import { FullScreenQuad } from './Pass.Cu0Sc_JX1767105581793.js';

const V = "https://tile.googleapis.com/v1/createSession";
let oe$1 = class oe {
  get isMapTilesSession() {
    return this.authURL === V;
  }
  constructor(o = {}) {
    const { apiToken: t, sessionOptions: e = null, autoRefreshToken: n = false } = o;
    this.apiToken = t, this.autoRefreshToken = n, this.authURL = V, this.sessionToken = null, this.sessionOptions = e, this._tokenRefreshPromise = null;
  }
  async fetch(o, t) {
    this.sessionToken === null && this.isMapTilesSession && this.refreshToken(t), await this._tokenRefreshPromise;
    const e = new URL(o);
    e.searchParams.set("key", this.apiToken), this.sessionToken && e.searchParams.set("session", this.sessionToken);
    let n = await fetch(e, t);
    return n.status >= 400 && n.status <= 499 && this.autoRefreshToken && (await this.refreshToken(t), this.sessionToken && e.searchParams.set("session", this.sessionToken), n = await fetch(e, t)), this.sessionToken === null && !this.isMapTilesSession ? n.json().then((T) => (this.sessionToken = q$1(T), T)) : n;
  }
  refreshToken(o) {
    if (this._tokenRefreshPromise === null) {
      const t = new URL(this.authURL);
      t.searchParams.set("key", this.apiToken);
      const e = { ...o };
      this.isMapTilesSession && (e.method = "POST", e.body = JSON.stringify(this.sessionOptions), e.headers = e.headers || {}, e.headers = {
        ...e.headers,
        "Content-Type": "application/json"
      }), this._tokenRefreshPromise = fetch(t, e).then((n) => {
        if (!n.ok)
          throw new Error(`GoogleCloudAuth: Failed to load data with error code ${n.status}`);
        return n.json();
      }).then((n) => (this.sessionToken = q$1(n), this._tokenRefreshPromise = null, n));
    }
    return this._tokenRefreshPromise;
  }
};
function q$1(i) {
  if ("session" in i)
    return i.session;
  {
    let o = null;
    const t = i.root;
    return h(t, (e) => {
      if (e.content && e.content.uri) {
        const [, n] = e.content.uri.split("?");
        return o = new URLSearchParams(n).get("session"), true;
      }
      return false;
    }), o;
  }
}
let re$1 = class re {
  constructor(o = {}) {
    const { apiToken: t, autoRefreshToken: e = false } = o;
    this.apiToken = t, this.autoRefreshToken = e, this.authURL = null, this._tokenRefreshPromise = null, this._bearerToken = null;
  }
  async fetch(o, t) {
    await this._tokenRefreshPromise;
    const e = { ...t };
    e.headers = e.headers || {}, e.headers = {
      ...e.headers,
      Authorization: this._bearerToken
    };
    const n = await fetch(o, e);
    return n.status >= 400 && n.status <= 499 && this.autoRefreshToken ? (await this.refreshToken(t), e.headers.Authorization = this._bearerToken, fetch(o, e)) : n;
  }
  refreshToken(o) {
    if (this._tokenRefreshPromise === null) {
      const t = new URL(this.authURL);
      t.searchParams.set("access_token", this.apiToken), this._tokenRefreshPromise = fetch(t, o).then((e) => {
        if (!e.ok)
          throw new Error(`CesiumIonAuthPlugin: Failed to load data with error code ${e.status}`);
        return e.json();
      }).then((e) => (this._bearerToken = `Bearer ${e.accessToken}`, this._tokenRefreshPromise = null, e));
    }
    return this._tokenRefreshPromise;
  }
};
function _(i) {
  return i >> 1 ^ -(i & 1);
}
let ie$1 = class ie extends y {
  constructor(...o) {
    super(...o), this.fetchOptions.header = {
      Accept: "application/vnd.quantized-mesh,application/octet-stream;q=0.9"
    };
  }
  loadAsync(...o) {
    const { fetchOptions: t } = this;
    return t.header = t.header || {}, t.header.Accept = "application/vnd.quantized-mesh,application/octet-stream;q=0.9", t.header.Accept += ";extensions=octvertexnormals-watermask-metadata", super.loadAsync(...o);
  }
  parse(o) {
    let t = 0;
    const e = new DataView(o), n = () => {
      const s = e.getFloat64(t, true);
      return t += 8, s;
    }, T = () => {
      const s = e.getFloat32(t, true);
      return t += 4, s;
    }, l = () => {
      const s = e.getUint32(t, true);
      return t += 4, s;
    }, N = () => {
      const s = e.getUint8(t);
      return t += 1, s;
    }, a = (s, r) => {
      const c = new r(o, t, s);
      return t += s * r.BYTES_PER_ELEMENT, c;
    }, j = {
      center: [n(), n(), n()],
      minHeight: T(),
      maxHeight: T(),
      sphereCenter: [n(), n(), n()],
      sphereRadius: n(),
      horizonOcclusionPoint: [n(), n(), n()]
    }, h = l(), G = a(h, Uint16Array), $ = a(h, Uint16Array), H = a(h, Uint16Array), m = new Float32Array(h), R = new Float32Array(h), L = new Float32Array(h);
    let x = 0, v = 0, S = 0;
    const P = 32767;
    for (let s = 0; s < h; ++s)
      x += _(G[s]), v += _($[s]), S += _(H[s]), m[s] = x / P, R[s] = v / P, L[s] = S / P;
    const M = h > 65536, p = M ? Uint32Array : Uint16Array;
    M ? t = Math.ceil(t / 4) * 4 : t = Math.ceil(t / 2) * 2;
    const J = l(), w = a(J * 3, p);
    let C = 0;
    for (var g = 0; g < w.length; ++g) {
      const s = w[g];
      w[g] = C - s, s === 0 && ++C;
    }
    const O = (s, r) => R[r] - R[s], Q = (s, r) => -O(s, r), b = (s, r) => m[s] - m[r], X = (s, r) => -b(s, r), Z = l(), z = a(Z, p);
    z.sort(O);
    const Y = l(), B = a(Y, p);
    B.sort(b);
    const K = l(), F = a(K, p);
    F.sort(Q);
    const W = l(), I = a(W, p);
    I.sort(X);
    const ee = {
      westIndices: z,
      southIndices: B,
      eastIndices: F,
      northIndices: I
    }, A = {};
    for (; t < e.byteLength; ) {
      const s = N(), r = l();
      if (s === 1) {
        const c = a(h * 2, Uint8Array), f = new Float32Array(h * 3);
        for (let u = 0; u < h; u++) {
          let k = c[2 * u + 0] / 255 * 2 - 1, d = c[2 * u + 1] / 255 * 2 - 1;
          const y = 1 - (Math.abs(k) + Math.abs(d));
          if (y < 0) {
            const E = k;
            k = (1 - Math.abs(d)) * D(E), d = (1 - Math.abs(E)) * D(d);
          }
          const U = Math.sqrt(k * k + d * d + y * y);
          f[3 * u + 0] = k / U, f[3 * u + 1] = d / U, f[3 * u + 2] = y / U;
        }
        A.octvertexnormals = {
          extensionId: s,
          normals: f
        };
      } else if (s === 2) {
        const c = r === 1 ? 1 : 256, f = a(c * c, Uint8Array);
        A.watermask = {
          extensionId: s,
          mask: f,
          size: c
        };
      } else if (s === 4) {
        const c = l(), f = a(c, Uint8Array), u = new TextDecoder().decode(f);
        A.metadata = {
          extensionId: s,
          json: JSON.parse(u)
        };
      }
    }
    return {
      header: j,
      indices: w,
      vertexData: {
        u: m,
        v: R,
        height: L
      },
      edgeIndices: ee,
      extensions: A
    };
  }
};
function D(i) {
  return i < 0 ? -1 : 1;
}

const bi = await importShared('three');

const {PlaneGeometry:Ot,Mesh:Ee,MeshBasicMaterial:we,Vector2:q,MathUtils:T,Vector3:I,Sphere:ce,Texture:Mi,SRGBColorSpace:Hs,DefaultLoadingManager:vi,BufferGeometry:Vt,MeshStandardMaterial:js,BufferAttribute:K,DataTexture:Ft,RGFormat:Ws,UnsignedByteType:qs,LinearMipMapLinearFilter:Ci,LinearFilter:Xs,Triangle:Nt,Vector4:Pe,Matrix4:Q,Matrix3:Si,Matrix2:Ai,WebGLRenderer:Li,WebGLRenderTarget:Pt,ShaderMaterial:Ys,OneFactor:Ii,ZeroFactor:Ei,CustomBlending:wi,Box2:Pi,FileLoader:Ri,Quaternion:$s,BatchedMesh:Bi,Source:Ui,Box3:st,REVISION:Di,WebGLArrayRenderTarget:Qt,Raycaster:Oi,DoubleSide:Qs,OrthographicCamera:Vi,Color:kt,CanvasTexture:Fi,Ray:Ni,LineSegments:Zs,LineBasicMaterial:ki,EdgesGeometry:Gi,BoxGeometry:zi,Group:Oe,Box3Helper:Hi,PointsMaterial:ji} = await importShared('three');
class tn {
  constructor() {
    this.creditsCount = {};
  }
  _adjustAttributions(e, t) {
    const s = this.creditsCount, i = e.split(/;/g);
    for (let n = 0, r = i.length; n < r; n++) {
      const o = i[n];
      o in s || (s[o] = 0), s[o] += t ? 1 : -1, s[o] <= 0 && delete s[o];
    }
  }
  addAttributions(e) {
    this._adjustAttributions(e, true);
  }
  removeAttributions(e) {
    this._adjustAttributions(e, false);
  }
  toString() {
    return Object.entries(this.creditsCount).sort((t, s) => {
      const i = t[1];
      return s[1] - i;
    }).map((t) => t[0]).join("; ");
  }
}
const sn = "https://tile.googleapis.com/v1/3dtiles/root.json";
class nn {
  constructor({
    apiToken: e,
    sessionOptions: t = null,
    autoRefreshToken: s = false,
    logoUrl: i = null,
    useRecommendedSettings: n = true
  }) {
    this.name = "GOOGLE_CLOUD_AUTH_PLUGIN", this.apiToken = e, this.useRecommendedSettings = n, this.logoUrl = i, this.auth = new oe$1({ apiToken: e, autoRefreshToken: s, sessionOptions: t }), this.tiles = null, this._visibilityChangeCallback = null, this._attributionsManager = new tn(), this._logoAttribution = {
      value: "",
      type: "image",
      collapsible: false
    }, this._attribution = {
      value: "",
      type: "string",
      collapsible: true
    };
  }
  init(e) {
    const { useRecommendedSettings: t, auth: s } = this;
    e.resetFailedTiles(), e.rootURL == null && (e.rootURL = sn), s.sessionOptions || (s.authURL = e.rootURL), t && !s.isMapTilesSession && (e.errorTarget = 20), this.tiles = e, this._visibilityChangeCallback = ({ tile: i, visible: n }) => {
      var o, a;
      const r = ((a = (o = i.cached.metadata) == null ? void 0 : o.asset) == null ? void 0 : a.copyright) || "";
      n ? this._attributionsManager.addAttributions(r) : this._attributionsManager.removeAttributions(r);
    }, e.addEventListener("tile-visibility-change", this._visibilityChangeCallback);
  }
  getAttributions(e) {
    this.tiles.visibleTiles.size > 0 && (this.logoUrl && (this._logoAttribution.value = this.logoUrl, e.push(this._logoAttribution)), this._attribution.value = this._attributionsManager.toString(), e.push(this._attribution));
  }
  dispose() {
    this.tiles.removeEventListener("tile-visibility-change", this._visibilityChangeCallback);
  }
  async fetchData(e, t) {
    return this.auth.fetch(e, t);
  }
}
const he = /* @__PURE__ */ new q(), fe = Symbol("TILE_X"), me = Symbol("TILE_Y"), ne = Symbol("TILE_LEVEL");
class ei {
  get tiling() {
    return this.imageSource.tiling;
  }
  constructor(e = {}) {
    const {
      pixelSize: t = null,
      center: s = false,
      useRecommendedSettings: i = true,
      imageSource: n = null
    } = e;
    this.priority = -10, this.tiles = null, this.imageSource = n, this.pixelSize = t, this.center = s, this.useRecommendedSettings = i, t !== null && console.warn('ImageFormatPlugin: "pixelSize" has been deprecated in favor of scaling the tiles root.');
  }
  // Plugin functions
  init(e) {
    this.useRecommendedSettings && (e.errorTarget = 1), this.tiles = e, this.imageSource.fetchOptions = e.fetchOptions, this.imageSource.fetchData = (t, s) => (e.invokeAllPlugins((i) => t = i.preprocessURL ? i.preprocessURL(t, null) : t), e.invokeOnePlugin((i) => i !== this && i.fetchData && i.fetchData(t, s)));
  }
  async loadRootTileSet() {
    const { tiles: e, imageSource: t } = this;
    return t.url = t.url || e.rootURL, e.invokeAllPlugins((s) => t.url = s.preprocessURL ? s.preprocessURL(t.url, null) : t.url), await t.init(), e.rootURL = t.url, this.getTileset(t.url);
  }
  async parseToMesh(e, t, s, i, n) {
    if (n.aborted)
      return null;
    const { imageSource: r } = this, o = t[fe], a = t[me], c = t[ne], u = await r.processBufferToTexture(e);
    if (n.aborted)
      return u.dispose(), u.image.close(), null;
    r.setData(o, a, c, u);
    let h = 1, d = 1, m = 0, p = 0, f = 0;
    const x = t.boundingVolume.box;
    x && ([m, p, f] = x, h = x[3], d = x[7]);
    const g = new Ot(2 * h, 2 * d), y = new Ee(g, new we({ map: u, transparent: true }));
    y.position.set(m, p, f);
    const _ = r.tiling.getTileContentUVBounds(o, a, c), { uv: M } = g.attributes;
    for (let v = 0; v < M.count; v++)
      he.fromBufferAttribute(M, v), he.x = T.mapLinear(he.x, 0, 1, _[0], _[2]), he.y = T.mapLinear(he.y, 0, 1, _[1], _[3]), M.setXY(v, he.x, he.y);
    return y;
  }
  preprocessNode(e) {
    const { tiling: t } = this, s = t.maxLevel;
    e[ne] < s && e.parent !== null && this.expandChildren(e);
  }
  disposeTile(e) {
    const t = e[fe], s = e[me], i = e[ne], { imageSource: n } = this;
    n.has(t, s, i) && n.release(t, s, i);
  }
  // Local functions
  getTileset(e) {
    const { tiling: t, tiles: s } = this, i = t.minLevel, { tileCountX: n, tileCountY: r } = t.getLevel(i), o = [];
    for (let c = 0; c < n; c++)
      for (let u = 0; u < r; u++) {
        const h = this.createChild(c, u, i);
        h !== null && o.push(h);
      }
    const a = {
      asset: {
        version: "1.1"
      },
      geometricError: 1e5,
      root: {
        refine: "REPLACE",
        geometricError: 1e5,
        boundingVolume: this.createBoundingVolume(0, 0, -1),
        children: o,
        [ne]: -1,
        [fe]: 0,
        [me]: 0
      }
    };
    return s.preprocessTileSet(a, e), a;
  }
  getUrl(e, t, s) {
    return this.imageSource.getUrl(e, t, s);
  }
  createBoundingVolume(e, t, s) {
    const { center: i, pixelSize: n, tiling: r } = this, { pixelWidth: o, pixelHeight: a } = r.getLevel(r.maxLevel), [c, u, h, d] = s === -1 ? r.getContentBounds(true) : r.getTileBounds(e, t, s, true);
    let m = (h - c) / 2, p = (d - u) / 2, f = c + m, x = u + p;
    return i && (f -= 0.5, x -= 0.5), n ? (f *= o * n, m *= o * n, x *= a * n, p *= a * n) : (f *= r.aspectRatio, m *= r.aspectRatio), {
      box: [
        // center
        f,
        x,
        0,
        // x, y, z half vectors
        m,
        0,
        0,
        0,
        p,
        0,
        0,
        0,
        0
      ]
    };
  }
  createChild(e, t, s) {
    const { pixelSize: i, tiling: n } = this;
    if (!n.getTileExists(e, t, s))
      return null;
    const { pixelWidth: r, pixelHeight: o } = n.getLevel(n.maxLevel), { pixelWidth: a, pixelHeight: c } = n.getLevel(s);
    let u = Math.max(1 / a, 1 / c);
    return i && (u *= i * Math.max(r, o)), {
      refine: "REPLACE",
      geometricError: u,
      boundingVolume: this.createBoundingVolume(e, t, s),
      content: {
        uri: this.getUrl(e, t, s)
      },
      children: [],
      // save the tile params so we can expand later
      [fe]: e,
      [me]: t,
      [ne]: s
    };
  }
  expandChildren(e) {
    const t = e[ne], s = e[fe], i = e[me];
    for (let n = 0; n < 2; n++)
      for (let r = 0; r < 2; r++) {
        const o = this.createChild(2 * s + n, 2 * i + r, t + 1);
        o && e.children.push(o);
      }
  }
}
const at = /* @__PURE__ */ new I(), Ve = /* @__PURE__ */ new I();
function rn(l, e, t) {
  const i = t + 1e-5;
  let n = e + 1e-5;
  Math.abs(n) > Math.PI / 2 && (n = n - 1e-5), l.getCartographicToPosition(e, t, 0, at), l.getCartographicToPosition(n, t, 0, Ve);
  const r = at.distanceTo(Ve) / 1e-5;
  return l.getCartographicToPosition(e, i, 0, Ve), [at.distanceTo(Ve) / 1e-5, r];
}
const on = 30, an = 15, lt = /* @__PURE__ */ new I(), Zt = /* @__PURE__ */ new I(), se = /* @__PURE__ */ new q(), ct = /* @__PURE__ */ new ce();
class Gt extends ei {
  get projection() {
    return this.tiling.projection;
  }
  constructor(e = {}) {
    const {
      shape: t = "planar",
      endCaps: s = true,
      ...i
    } = e;
    super(i), this.shape = t, this.endCaps = s;
  }
  // override the parse to mesh logic to support a region mesh
  async parseToMesh(e, t, ...s) {
    const i = await super.parseToMesh(e, t, ...s), { shape: n, projection: r, tiles: o, tiling: a } = this;
    if (n === "ellipsoid") {
      const c = o.ellipsoid, u = t[ne], h = t[fe], d = t[me], [m, p, f, x] = t.boundingVolume.region, g = Math.ceil((x - p) * T.RAD2DEG * 0.25), y = Math.ceil((f - m) * T.RAD2DEG * 0.25), b = Math.max(an, g), _ = Math.max(on, y), M = new Ot(1, 1, _, b), [v, S, L, R] = a.getTileBounds(h, d, u, true, true), N = a.getTileContentUVBounds(h, d, u), { position: k, normal: B, uv: V } = M.attributes, A = k.count;
      t.cached.boundingVolume.getSphere(ct);
      for (let C = 0; C < A; C++) {
        lt.fromBufferAttribute(k, C), se.fromBufferAttribute(V, C);
        const U = r.convertProjectionToLongitude(T.mapLinear(se.x, 0, 1, v, L));
        let w = r.convertProjectionToLatitude(T.mapLinear(se.y, 0, 1, S, R));
        if (r.isMercator && this.endCaps && (R === 1 && se.y === 1 && (w = Math.PI / 2), S === 0 && se.y === 0 && (w = -Math.PI / 2)), r.isMercator && se.y !== 0 && se.y !== 1) {
          const F = r.convertProjectionToLatitude(1), O = 1 / b, z = T.mapLinear(se.y - O, 0, 1, p, x), P = T.mapLinear(se.y + O, 0, 1, p, x);
          w > F && z < F && (w = F), w < -F && P > -F && (w = -F);
        }
        c.getCartographicToPosition(w, U, 0, lt).sub(ct.center), c.getCartographicToNormal(w, U, Zt);
        const D = T.mapLinear(r.convertLongitudeToProjection(U), v, L, N[0], N[2]), H = T.mapLinear(r.convertLatitudeToProjection(w), S, R, N[1], N[3]);
        V.setXY(C, D, H), k.setXYZ(C, ...lt), B.setXYZ(C, ...Zt);
      }
      i.geometry = M, i.position.copy(ct.center);
    }
    return i;
  }
  createBoundingVolume(e, t, s) {
    if (this.shape === "ellipsoid") {
      const { tiling: i, endCaps: n } = this, r = s === -1, o = r ? i.getContentBounds(true) : i.getTileBounds(e, t, s, true, true), a = r ? i.getContentBounds() : i.getTileBounds(e, t, s, false, true);
      return n && (o[3] === 1 && (a[3] = Math.PI / 2), o[1] === 0 && (a[1] = -Math.PI / 2)), {
        region: [...a, -1, 1]
      };
    } else
      return super.createBoundingVolume(e, t, s);
  }
  createChild(...e) {
    const t = super.createChild(...e), { shape: s, projection: i, tiling: n } = this;
    if (t && s === "ellipsoid") {
      const r = t[ne], o = t[fe], a = t[me];
      if (r === -1)
        return t.geometricError = 1e50, parent;
      const [c, u, h, d] = n.getTileBounds(o, a, r, true), { tilePixelWidth: m, tilePixelHeight: p } = n.getLevel(r), f = (h - c) / m, x = (d - u) / p, [
        /* west */
        ,
        g,
        y,
        b
      ] = n.getTileBounds(o, a, r), _ = g > 0 != b > 0 ? 0 : Math.min(Math.abs(g), Math.abs(b)), M = i.convertLatitudeToProjection(_), v = i.getLongitudeDerivativeAtProjection(c), S = i.getLatitudeDerivativeAtProjection(M), [L, R] = rn(this.tiles.ellipsoid, _, y), N = Math.max(f * v * L, x * S * R);
      t.geometricError = N;
    }
    return t;
  }
}
class Re {
  get isMercator() {
    return this.scheme === "EPSG:3857";
  }
  constructor(e = "EPSG:4326") {
    this.scheme = e, this.tileCountX = 1, this.tileCountY = 1, this.setScheme(e);
  }
  setScheme(e) {
    switch (this.scheme = e, e) {
      // equirect
      case "EPSG:4326":
        this.tileCountX = 2, this.tileCountY = 1;
        break;
      // mercator
      case "EPSG:3857":
        this.tileCountX = 1, this.tileCountY = 1;
        break;
      default:
        throw new Error();
    }
  }
  convertProjectionToLatitude(e) {
    if (this.isMercator) {
      const t = T.mapLinear(e, 0, 1, -1, 1);
      return 2 * Math.atan(Math.exp(t * Math.PI)) - Math.PI / 2;
    } else
      return T.mapLinear(e, 0, 1, -Math.PI / 2, Math.PI / 2);
  }
  convertProjectionToLongitude(e) {
    return T.mapLinear(e, 0, 1, -Math.PI, Math.PI);
  }
  convertLatitudeToProjection(e) {
    if (this.isMercator) {
      const t = Math.log(Math.tan(Math.PI / 4 + e / 2));
      return 1 / 2 + 1 * t / (2 * Math.PI);
    } else
      return T.mapLinear(e, -Math.PI / 2, Math.PI / 2, 0, 1);
  }
  convertLongitudeToProjection(e) {
    return (e + Math.PI) / (2 * Math.PI);
  }
  getLongitudeDerivativeAtProjection(e) {
    return 2 * Math.PI;
  }
  getLatitudeDerivativeAtProjection(e) {
    let s = e - 1e-5;
    return s < 0 && (s = e + 1e-5), this.isMercator ? Math.abs(this.convertProjectionToLatitude(e) - this.convertProjectionToLatitude(s)) / 1e-5 : Math.PI;
  }
  getBounds() {
    return [
      this.convertProjectionToLongitude(0),
      this.convertProjectionToLatitude(0),
      this.convertProjectionToLongitude(1),
      this.convertProjectionToLatitude(1)
    ];
  }
}
function _e(...l) {
  return l.join("_");
}
class ln {
  constructor() {
    this.cache = {}, this.count = 0, this.cachedBytes = 0, this.active = 0;
  }
  // overridable
  fetchItem() {
  }
  disposeItem() {
  }
  getMemoryUsage(e) {
    return 0;
  }
  // sets the data in the cache explicitly without need to load
  setData(...e) {
    const { cache: t } = this, s = e.pop(), i = _e(...e);
    if (i in t)
      throw new Error(`DataCache: "${i}" is already present.`);
    return this.cache[i] = {
      abortController: new AbortController(),
      result: s,
      count: 1,
      bytes: this.getMemoryUsage(s)
    }, this.count++, this.cachedBytes += this.cache[i].bytes, s;
  }
  // fetches the associated data if it doesn't exist and increments the lock counter
  lock(...e) {
    const { cache: t } = this, s = _e(...e);
    if (s in t)
      t[s].count++;
    else {
      const i = new AbortController(), n = {
        abortController: i,
        result: null,
        count: 1,
        bytes: 0
      };
      this.active++, n.result = this.fetchItem(e, i.signal), n.result instanceof Promise ? n.result.then((r) => (n.result = r, n.bytes = this.getMemoryUsage(r), this.cachedBytes += n.bytes, r)).finally(() => {
        this.active--;
      }).catch((r) => {
      }) : (this.active--, n.bytes = this.getMemoryUsage(n.result), this.cachedBytes += n.bytes), this.cache[s] = n, this.count++;
    }
    return t[s].result;
  }
  // decrements the lock counter for the item and deletes the item if it has reached zero
  release(...e) {
    const t = _e(...e);
    this.releaseViaFullKey(t);
  }
  // get the loaded item
  get(...e) {
    const { cache: t } = this, s = _e(...e);
    return s in t && t[s].count > 0 ? t[s].result : null;
  }
  has(...e) {
    const { cache: t } = this;
    return _e(...e) in t;
  }
  // dispose all items
  dispose() {
    const { cache: e } = this;
    for (const t in e) {
      const { abortController: s } = e[t];
      s.abort(), this.releaseViaFullKey(t, true);
    }
    this.cache = {};
  }
  // releases an item with an optional force flag
  releaseViaFullKey(e, t = false) {
    const { cache: s } = this;
    if (e in s && s[e].count > 0) {
      const i = s[e];
      if (i.count--, i.count === 0 || t) {
        const n = () => {
          if (s[e] !== i)
            return;
          const { result: r, abortController: o } = i;
          o.abort(), r instanceof Promise ? r.then((a) => {
            this.disposeItem(a), this.count--, this.cachedBytes -= i.bytes;
          }).catch(() => {
          }) : (this.disposeItem(r), this.count--, this.cachedBytes -= i.bytes), delete s[e];
        };
        t ? n() : queueMicrotask(() => {
          i.count === 0 && n();
        });
      }
      return true;
    }
    throw new Error("DataCache: Attempting to release key that does not exist");
  }
}
class ti {
  get levelCount() {
    return this._levels.length;
  }
  get maxLevel() {
    return this.levelCount - 1;
  }
  get minLevel() {
    const e = this._levels;
    for (let t = 0; t < e.length; t++)
      if (e[t] !== null)
        return t;
    return -1;
  }
  // prioritize user-set bounds over projection bounds if present
  get contentBounds() {
    var e;
    return this._contentBounds ?? ((e = this.projection) == null ? void 0 : e.getBounds()) ?? [0, 0, 1, 1];
  }
  get aspectRatio() {
    const { pixelWidth: e, pixelHeight: t } = this.getLevel(this.maxLevel);
    return e / t;
  }
  constructor() {
    this.flipY = false, this.pixelOverlap = 0, this._contentBounds = null, this.projection = null, this._levels = [];
  }
  // build the zoom levels
  setLevel(e, t = {}) {
    const s = this._levels;
    for (; s.length < e; )
      s.push(null);
    const {
      tilePixelWidth: i = 256,
      tilePixelHeight: n = 256,
      tileCountX: r = 2 ** e,
      tileCountY: o = 2 ** e,
      tileBounds: a = null
    } = t, {
      pixelWidth: c = i * r,
      pixelHeight: u = n * o
    } = t;
    s[e] = {
      // The pixel resolution of each tile.
      tilePixelWidth: i,
      tilePixelHeight: n,
      // The total pixel resolution of the final image at this level. These numbers
      // may not be a round multiple of the tile width.
      pixelWidth: c,
      pixelHeight: u,
      // Or the total number of tiles that can be loaded at this level.
      tileCountX: r,
      tileCountY: o,
      // The bounds covered by the extent of the tiles at this loaded. The actual content covered by the overall tile set
      // may be a subset of this range (eg there may be unused space).
      tileBounds: a
    };
  }
  generateLevels(e, t, s, i = {}) {
    const {
      minLevel: n = 0,
      tilePixelWidth: r = 256,
      tilePixelHeight: o = 256
    } = i, a = e - 1, {
      pixelWidth: c = r * t * 2 ** a,
      pixelHeight: u = o * s * 2 ** a
    } = i;
    for (let h = n; h < e; h++) {
      const d = e - h - 1, m = Math.ceil(c * 2 ** -d), p = Math.ceil(u * 2 ** -d), f = Math.ceil(m / r), x = Math.ceil(p / o);
      this.setLevel(h, {
        tilePixelWidth: r,
        tilePixelHeight: o,
        pixelWidth: m,
        pixelHeight: p,
        tileCountX: f,
        tileCountY: x
      });
    }
  }
  getLevel(e) {
    return this._levels[e];
  }
  // bounds representing the contentful region of the image
  setContentBounds(e, t, s, i) {
    this._contentBounds = [e, t, s, i];
  }
  setProjection(e) {
    this.projection = e;
  }
  // query functions
  getTileAtPoint(e, t, s, i = false) {
    const { flipY: n } = this, { tileCountX: r, tileCountY: o, tileBounds: a } = this.getLevel(s), c = 1 / r, u = 1 / o;
    if (i || ([e, t] = this.toNormalizedPoint(e, t)), a) {
      const m = this.toNormalizedRange(a);
      e = T.mapLinear(e, m[0], m[2], 0, 1), t = T.mapLinear(t, m[1], m[3], 0, 1);
    }
    const h = Math.floor(e / c);
    let d = Math.floor(t / u);
    return n && (d = o - 1 - d), [h, d];
  }
  getTilesInRange(e, t, s, i, n, r = false) {
    [e, t, s, i] = this.clampToContentBounds([e, t, s, i], r);
    const o = this.getTileAtPoint(e, t, n, r), a = this.getTileAtPoint(s, i, n, r);
    this.flipY && ([o[1], a[1]] = [a[1], o[1]]);
    const { tileCountX: c, tileCountY: u } = this.getLevel(n), [h, d] = o, [m, p] = a;
    return m < 0 || p < 0 || h >= c || d >= u ? [0, 0, -1, -1] : [
      T.clamp(h, 0, c - 1),
      T.clamp(d, 0, u - 1),
      T.clamp(m, 0, c - 1),
      T.clamp(p, 0, u - 1)
    ];
  }
  getTileExists(e, t, s) {
    const [i, n, r, o] = this.contentBounds, [a, c, u, h] = this.getTileBounds(e, t, s);
    return !(a >= u || c >= h) && a <= r && c <= o && u >= i && h >= n;
  }
  getContentBounds(e = false) {
    const { projection: t } = this, s = [...this.contentBounds];
    return t && e && (s[0] = t.convertLongitudeToProjection(s[0]), s[1] = t.convertLatitudeToProjection(s[1]), s[2] = t.convertLongitudeToProjection(s[2]), s[3] = t.convertLatitudeToProjection(s[3])), s;
  }
  // returns the UV range associated with the content in the given tile
  getTileContentUVBounds(e, t, s) {
    const [i, n, r, o] = this.getTileBounds(e, t, s, true, true), [a, c, u, h] = this.getTileBounds(e, t, s, true, false);
    return [
      T.mapLinear(i, a, u, 0, 1),
      T.mapLinear(n, c, h, 0, 1),
      T.mapLinear(r, a, u, 0, 1),
      T.mapLinear(o, c, h, 0, 1)
    ];
  }
  getTileBounds(e, t, s, i = false, n = true) {
    const { flipY: r, pixelOverlap: o, projection: a } = this, { tilePixelWidth: c, tilePixelHeight: u, pixelWidth: h, pixelHeight: d, tileBounds: m } = this.getLevel(s);
    let p = c * e - o, f = u * t - o, x = p + c + o * 2, g = f + u + o * 2;
    if (p = Math.max(p, 0), f = Math.max(f, 0), x = Math.min(x, h), g = Math.min(g, d), p = p / h, x = x / h, f = f / d, g = g / d, r) {
      const b = (g - f) / 2, M = 1 - (f + g) / 2;
      f = M - b, g = M + b;
    }
    let y = [p, f, x, g];
    if (m) {
      const b = this.toNormalizedRange(m);
      y[0] = T.mapLinear(y[0], 0, 1, b[0], b[2]), y[2] = T.mapLinear(y[2], 0, 1, b[0], b[2]), y[1] = T.mapLinear(y[1], 0, 1, b[1], b[3]), y[3] = T.mapLinear(y[3], 0, 1, b[1], b[3]);
    }
    return n && (y = this.clampToProjectionBounds(y, true)), a && !i && (y[0] = a.convertProjectionToLongitude(y[0]), y[1] = a.convertProjectionToLatitude(y[1]), y[2] = a.convertProjectionToLongitude(y[2]), y[3] = a.convertProjectionToLatitude(y[3])), y;
  }
  toNormalizedPoint(e, t) {
    const { projection: s } = this, i = [e, t];
    return this.projection && (i[0] = s.convertLongitudeToProjection(i[0]), i[1] = s.convertLatitudeToProjection(i[1])), i;
  }
  toNormalizedRange(e) {
    return [
      ...this.toNormalizedPoint(e[0], e[1]),
      ...this.toNormalizedPoint(e[2], e[3])
    ];
  }
  toCartographicPoint(e, t) {
    const { projection: s } = this, i = [e, t];
    if (this.projection)
      i[0] = s.convertProjectionToLongitude(i[0]), i[1] = s.convertProjectionToLatitude(i[1]);
    else
      throw new Error("TilingScheme: Projection not available.");
    return i;
  }
  toCartographicRange(e) {
    return [
      ...this.toCartographicPoint(e[0], e[1]),
      ...this.toCartographicPoint(e[2], e[3])
    ];
  }
  clampToContentBounds(e, t = false) {
    const s = [...e], [i, n, r, o] = this.getContentBounds(t);
    return s[0] = T.clamp(s[0], i, r), s[1] = T.clamp(s[1], n, o), s[2] = T.clamp(s[2], i, r), s[3] = T.clamp(s[3], n, o), s;
  }
  clampToProjectionBounds(e, t = false) {
    const s = [...e], { projection: i } = this;
    let n;
    t || !i ? n = [0, 0, 1, 1] : n = i.getBounds();
    const [r, o, a, c] = n;
    return s[0] = T.clamp(s[0], r, a), s[1] = T.clamp(s[1], o, c), s[2] = T.clamp(s[2], r, a), s[3] = T.clamp(s[3], o, c), s;
  }
}
class it extends ln {
  constructor() {
    super(), this.tiling = new ti(), this.fetchOptions = {}, this.fetchData = (...e) => fetch(...e);
  }
  // async function for initializing the tiled image set
  init() {
  }
  // helper for processing the buffer into a texture
  async processBufferToTexture(e) {
    const t = new Blob([e]), s = await createImageBitmap(t, {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none",
      imageOrientation: "flipY"
    }), i = new Mi(s);
    return i.generateMipmaps = false, i.colorSpace = Hs, i.needsUpdate = true, i;
  }
  getMemoryUsage(e) {
    const { TextureUtils: t } = bi;
    if (!t)
      return 0;
    const { format: s, type: i, image: n, generateMipmaps: r } = e, { width: o, height: a } = n, c = t.getByteLength(o, a, s, i);
    return r ? c * 4 / 3 : c;
  }
  // fetch the item with the given key fields
  fetchItem(e, t) {
    const s = {
      ...this.fetchOptions,
      signal: t
    }, i = this.getUrl(...e);
    return this.fetchData(i, s).then((n) => n.arrayBuffer()).then((n) => this.processBufferToTexture(n));
  }
  // dispose of the item that was fetched
  disposeItem(e) {
    e.dispose(), e.image instanceof ImageBitmap && e.image.close();
  }
  getUrl(...e) {
  }
}
class Ht extends it {
  constructor(e = {}) {
    const { url: t = null } = e;
    super(), this.tileSets = null, this.extension = null, this.url = t;
  }
  getUrl(e, t, s) {
    const { url: i, extension: n, tileSets: r, tiling: o } = this;
    return new URL(`${parseInt(r[s - o.minLevel].href)}/${e}/${t}.${n}`, i).toString();
  }
  init() {
    const { url: e } = this;
    return this.fetchData(new URL("tilemapresource.xml", e), this.fetchOptions).then((t) => t.text()).then((t) => {
      const { tiling: s } = this, i = new DOMParser().parseFromString(t, "text/xml"), n = i.querySelector("BoundingBox"), r = i.querySelector("TileFormat"), a = [...i.querySelector("TileSets").querySelectorAll("TileSet")].map((g) => ({
        href: parseInt(g.getAttribute("href")),
        unitsPerPixel: parseFloat(g.getAttribute("units-per-pixel")),
        order: parseInt(g.getAttribute("order"))
      })).sort((g, y) => g.order - y.order), c = parseFloat(n.getAttribute("minx")) * T.DEG2RAD, u = parseFloat(n.getAttribute("maxx")) * T.DEG2RAD, h = parseFloat(n.getAttribute("miny")) * T.DEG2RAD, d = parseFloat(n.getAttribute("maxy")) * T.DEG2RAD, m = parseInt(r.getAttribute("width")), p = parseInt(r.getAttribute("height")), f = r.getAttribute("extension"), x = i.querySelector("SRS").textContent;
      this.extension = f, this.url = e, this.tileSets = a, s.setProjection(new Re(x)), s.setContentBounds(c, h, u, d), a.forEach(({ order: g }) => {
        s.setLevel(g, {
          tileCountX: s.projection.tileCountX * 2 ** g,
          tilePixelWidth: m,
          tilePixelHeight: p
        });
      });
    });
  }
}
class cn extends Gt {
  constructor(e = {}) {
    const { url: t, ...s } = e;
    super(s), this.name = "TMS_TILES_PLUGIN", this.imageSource = new Ht({ url: t });
  }
}
const Jt = /* @__PURE__ */ new I(), Fe = /* @__PURE__ */ new Nt(), G = /* @__PURE__ */ new I(), ie = /* @__PURE__ */ new I();
class un extends ie$1 {
  constructor(e = vi) {
    super(), this.manager = e, this.ellipsoid = new zt(), this.skirtLength = 1e3, this.smoothSkirtNormals = true, this.solid = false, this.minLat = -Math.PI / 2, this.maxLat = Math.PI / 2, this.minLon = -Math.PI, this.maxLon = Math.PI;
  }
  parse(e) {
    const {
      ellipsoid: t,
      solid: s,
      skirtLength: i,
      smoothSkirtNormals: n,
      minLat: r,
      maxLat: o,
      minLon: a,
      maxLon: c
    } = this, {
      header: u,
      indices: h,
      vertexData: d,
      edgeIndices: m,
      extensions: p
    } = super.parse(e), f = new Vt(), x = new js(), g = new Ee(f, x);
    g.position.set(...u.center);
    const y = "octvertexnormals" in p, b = d.u.length, _ = [], M = [], v = [], S = [];
    let L = 0, R = 0;
    for (let A = 0; A < b; A++)
      k(A, G), B(G.x, G.y, G.z, ie), M.push(G.x, G.y), _.push(...ie);
    for (let A = 0, C = h.length; A < C; A++)
      v.push(h[A]);
    if (y) {
      const A = p.octvertexnormals.normals;
      for (let C = 0, U = A.length; C < U; C++)
        S.push(A[C]);
    }
    if (f.addGroup(L, h.length, R), L += h.length, R++, s) {
      const A = _.length / 3;
      for (let C = 0; C < b; C++)
        k(C, G), B(G.x, G.y, G.z, ie, -i), M.push(G.x, G.y), _.push(...ie);
      for (let C = h.length - 1; C >= 0; C--)
        v.push(h[C] + A);
      if (y) {
        const C = p.octvertexnormals.normals;
        for (let U = 0, w = C.length; U < w; U++)
          S.push(-C[U]);
      }
      f.addGroup(L, h.length, R), L += h.length, R++;
    }
    if (i > 0) {
      const {
        westIndices: A,
        eastIndices: C,
        southIndices: U,
        northIndices: w
      } = m;
      let D;
      const H = V(A);
      D = _.length / 3, M.push(...H.uv), _.push(...H.positions);
      for (let P = 0, $ = H.indices.length; P < $; P++)
        v.push(H.indices[P] + D);
      const F = V(C);
      D = _.length / 3, M.push(...F.uv), _.push(...F.positions);
      for (let P = 0, $ = F.indices.length; P < $; P++)
        v.push(F.indices[P] + D);
      const O = V(U);
      D = _.length / 3, M.push(...O.uv), _.push(...O.positions);
      for (let P = 0, $ = O.indices.length; P < $; P++)
        v.push(O.indices[P] + D);
      const z = V(w);
      D = _.length / 3, M.push(...z.uv), _.push(...z.positions);
      for (let P = 0, $ = z.indices.length; P < $; P++)
        v.push(z.indices[P] + D);
      y && (S.push(...H.normals), S.push(...F.normals), S.push(...O.normals), S.push(...z.normals)), f.addGroup(L, h.length, R), L += h.length, R++;
    }
    for (let A = 0, C = _.length; A < C; A += 3)
      _[A + 0] -= u.center[0], _[A + 1] -= u.center[1], _[A + 2] -= u.center[2];
    const N = _.length / 3 > 65535 ? new Uint32Array(v) : new Uint16Array(v);
    if (f.setIndex(new K(N, 1, false)), f.setAttribute("position", new K(new Float32Array(_), 3, false)), f.setAttribute("uv", new K(new Float32Array(M), 2, false)), y && f.setAttribute("normal", new K(new Float32Array(S), 3, false)), "watermask" in p) {
      const { mask: A, size: C } = p.watermask, U = new Uint8Array(2 * C * C);
      for (let D = 0, H = A.length; D < H; D++) {
        const F = A[D] === 255 ? 0 : 255;
        U[2 * D + 0] = F, U[2 * D + 1] = F;
      }
      const w = new Ft(U, C, C, Ws, qs);
      w.flipY = true, w.minFilter = Ci, w.magFilter = Xs, w.needsUpdate = true, x.roughnessMap = w;
    }
    return g.userData.minHeight = u.minHeight, g.userData.maxHeight = u.maxHeight, "metadata" in p && (g.userData.metadata = p.metadata.json), g;
    function k(A, C) {
      return C.x = d.u[A], C.y = d.v[A], C.z = d.height[A], C;
    }
    function B(A, C, U, w, D = 0) {
      const H = T.lerp(u.minHeight, u.maxHeight, U), F = T.lerp(a, c, A), O = T.lerp(r, o, C);
      return t.getCartographicToPosition(O, F, H + D, w), w;
    }
    function V(A) {
      const C = [], U = [], w = [], D = [], H = [];
      for (let z = 0, P = A.length; z < P; z++)
        k(A[z], G), C.push(G.x, G.y), w.push(G.x, G.y), B(G.x, G.y, G.z, ie), U.push(...ie), B(G.x, G.y, G.z, ie, -i), D.push(...ie);
      const F = A.length - 1;
      for (let z = 0; z < F; z++) {
        const P = z, $ = z + 1, ue = z + A.length, rt = z + A.length + 1;
        H.push(P, ue, $), H.push($, ue, rt);
      }
      let O = null;
      if (y) {
        const z = (U.length + D.length) / 3;
        if (n) {
          O = new Array(z * 3);
          const P = p.octvertexnormals.normals, $ = O.length / 2;
          for (let ue = 0, rt = z / 2; ue < rt; ue++) {
            const ot = A[ue], ge = 3 * ue, Xt = P[3 * ot + 0], Yt = P[3 * ot + 1], $t = P[3 * ot + 2];
            O[ge + 0] = Xt, O[ge + 1] = Yt, O[ge + 2] = $t, O[$ + ge + 0] = Xt, O[$ + ge + 1] = Yt, O[$ + ge + 2] = $t;
          }
        } else {
          O = [], Fe.a.fromArray(U, 0), Fe.b.fromArray(D, 0), Fe.c.fromArray(U, 3), Fe.getNormal(Jt);
          for (let P = 0; P < z; P++)
            O.push(...Jt);
        }
      }
      return {
        uv: [...C, ...w],
        positions: [...U, ...D],
        indices: H,
        normals: O
      };
    }
  }
}
const j = 0, oe = ["a", "b", "c"], E = /* @__PURE__ */ new Pe(), Kt = /* @__PURE__ */ new Pe(), es = /* @__PURE__ */ new Pe(), ts = /* @__PURE__ */ new Pe();
class ii {
  constructor() {
    this.attributeList = null, this.splitOperations = [], this.trianglePool = new hn();
  }
  forEachSplitPermutation(e) {
    const { splitOperations: t } = this, s = (i = 0) => {
      if (i >= t.length) {
        e();
        return;
      }
      t[i].keepPositive = true, s(i + 1), t[i].keepPositive = false, s(i + 1);
    };
    s();
  }
  // Takes an operation that returns a value for the given vertex passed to the callback. Triangles
  // are clipped along edges where the interpolated value is equal to 0. The polygons on the positive
  // side of the operation are kept if "keepPositive" is true.
  // callback( geometry, i0, i1, i2, barycoord );
  addSplitOperation(e, t = true) {
    this.splitOperations.push({
      callback: e,
      keepPositive: t
    });
  }
  // Removes all split operations
  clearSplitOperations() {
    this.splitOperations.length = 0;
  }
  // clips an object hierarchy
  clipObject(e) {
    const t = e.clone(), s = [];
    return t.traverse((i) => {
      i.isMesh && (i.geometry = this.clip(i).geometry, (i.geometry.index ? i.geometry.index.count / 3 : i.attributes.position.count / 3) === 0 && s.push(i));
    }), s.forEach((i) => {
      i.removeFromParent();
    }), t;
  }
  // Returns a new mesh that has been clipped by the split operations. Range indicates the range of
  // elements to include when clipping.
  clip(e, t = null) {
    const s = this.getClippedData(e, t);
    return this.constructMesh(s.attributes, s.index, e);
  }
  // Appends the clip operation data to the given "target" object so multiple ranges can be appended.
  // The "target" object is returned with an "index" field, "vertexIsClipped" field, and series of arrays
  // in "attributes".
  // attributes - set of attribute arrays
  // index - triangle indices referencing vertices in attributes
  // vertexIsClipped - array indicating whether a vertex is on a clipped edge
  getClippedData(e, t = null, s = {}) {
    const { trianglePool: i, splitOperations: n, attributeList: r } = this, o = e.geometry, a = o.attributes.position, c = o.index;
    let u = 0;
    const h = {};
    s.index = s.index || [], s.vertexIsClipped = s.vertexIsClipped || [], s.attributes = s.attributes || {};
    for (const f in o.attributes) {
      if (r !== null) {
        if (r instanceof Function && !r(f))
          continue;
        if (Array.isArray(r) && !r.includes(f))
          continue;
      }
      s.attributes[f] = [];
    }
    let d = 0, m = c ? c.count : a.count;
    t !== null && (d = t.start, m = t.count);
    for (let f = d, x = d + m; f < x; f += 3) {
      let g = f + 0, y = f + 1, b = f + 2;
      c && (g = c.getX(g), y = c.getX(y), b = c.getX(b));
      const _ = i.get();
      _.initFromIndices(g, y, b);
      let M = [_];
      for (let v = 0; v < n.length; v++) {
        const { keepPositive: S, callback: L } = n[v], R = [];
        for (let N = 0; N < M.length; N++) {
          const k = M[N], { indices: B, barycoord: V } = k;
          k.clipValues.a = L(o, B.a, B.b, B.c, V.a, e.matrixWorld), k.clipValues.b = L(o, B.a, B.b, B.c, V.b, e.matrixWorld), k.clipValues.c = L(o, B.a, B.b, B.c, V.c, e.matrixWorld), this.splitTriangle(k, !S, R);
        }
        M = R;
      }
      for (let v = 0, S = M.length; v < S; v++) {
        const L = M[v];
        p(L, o);
      }
      i.reset();
    }
    return s;
    function p(f, x) {
      for (let g = 0; g < 3; g++) {
        const y = f.getVertexHash(g, x);
        y in h || (h[y] = u, u++, f.getVertexData(g, x, s.attributes), s.vertexIsClipped.push(f.clipValues[oe[g]] === j));
        const b = h[y];
        s.index.push(b);
      }
    }
  }
  // Takes the set of resultant data and constructs a mesh
  constructMesh(e, t, s) {
    const i = s.geometry, n = new Vt(), r = e.position.length / 3 > 65535 ? new Uint32Array(t) : new Uint16Array(t);
    n.setIndex(new K(r, 1, false));
    for (const a in e) {
      const c = i.getAttribute(a), u = new c.array.constructor(e[a]), h = new K(u, c.itemSize, c.normalized);
      h.gpuType = c.gpuType, n.setAttribute(a, h);
    }
    const o = new Ee(n, s.material.clone());
    return o.position.copy(s.position), o.quaternion.copy(s.quaternion), o.scale.copy(s.scale), o;
  }
  // Splits the given triangle
  splitTriangle(e, t, s) {
    const { trianglePool: i } = this, n = [], r = [], o = [];
    for (let a = 0; a < 3; a++) {
      const c = oe[a], u = oe[(a + 1) % 3], h = e.clipValues[c], d = e.clipValues[u];
      (h < j != d < j || h === j) && (n.push(a), r.push([c, u]), h === d ? o.push(0) : o.push(T.mapLinear(j, h, d, 0, 1)));
    }
    if (n.length !== 2)
      Math.min(
        e.clipValues.a,
        e.clipValues.b,
        e.clipValues.c
      ) < j === t && s.push(e);
    else if (n.length === 2) {
      const a = i.get().initFromTriangle(e), c = i.get().initFromTriangle(e), u = i.get().initFromTriangle(e);
      (n[0] + 1) % 3 === n[1] ? (a.lerpVertexFromEdge(e, r[0][0], r[0][1], o[0], "a"), a.copyVertex(e, r[0][1], "b"), a.lerpVertexFromEdge(e, r[1][0], r[1][1], o[1], "c"), a.clipValues.a = j, a.clipValues.c = j, c.lerpVertexFromEdge(e, r[0][0], r[0][1], o[0], "a"), c.copyVertex(e, r[1][1], "b"), c.copyVertex(e, r[0][0], "c"), c.clipValues.a = j, u.lerpVertexFromEdge(e, r[0][0], r[0][1], o[0], "a"), u.lerpVertexFromEdge(e, r[1][0], r[1][1], o[1], "b"), u.copyVertex(e, r[1][1], "c"), u.clipValues.a = j, u.clipValues.b = j) : (a.lerpVertexFromEdge(e, r[0][0], r[0][1], o[0], "a"), a.lerpVertexFromEdge(e, r[1][0], r[1][1], o[1], "b"), a.copyVertex(e, r[0][0], "c"), a.clipValues.a = j, a.clipValues.b = j, c.lerpVertexFromEdge(e, r[0][0], r[0][1], o[0], "a"), c.copyVertex(e, r[0][1], "b"), c.lerpVertexFromEdge(e, r[1][0], r[1][1], o[1], "c"), c.clipValues.a = j, c.clipValues.c = j, u.copyVertex(e, r[0][1], "a"), u.copyVertex(e, r[1][0], "b"), u.lerpVertexFromEdge(e, r[1][0], r[1][1], o[1], "c"), u.clipValues.c = j);
      let d, m;
      d = Math.min(a.clipValues.a, a.clipValues.b, a.clipValues.c), m = d < j, m === t && s.push(a), d = Math.min(c.clipValues.a, c.clipValues.b, c.clipValues.c), m = d < j, m === t && s.push(c), d = Math.min(u.clipValues.a, u.clipValues.b, u.clipValues.c), m = d < j, m === t && s.push(u);
    }
  }
}
class hn {
  constructor() {
    this.pool = [], this.index = 0;
  }
  get() {
    if (this.index >= this.pool.length) {
      const t = new dn();
      this.pool.push(t);
    }
    const e = this.pool[this.index];
    return this.index++, e;
  }
  reset() {
    this.index = 0;
  }
}
class dn {
  constructor() {
    this.indices = {
      a: -1,
      b: -1,
      c: -1
    }, this.clipValues = {
      a: -1,
      b: -1,
      c: -1
    }, this.barycoord = new Nt();
  }
  // returns a hash for the given [0, 2] index based on attributes of the referenced geometry
  getVertexHash(e, t) {
    const { barycoord: s, indices: i } = this, n = oe[e], r = s[n];
    if (r.x === 1)
      return i[oe[0]];
    if (r.y === 1)
      return i[oe[1]];
    if (r.z === 1)
      return i[oe[2]];
    {
      const { attributes: o } = t;
      let a = "";
      for (const c in o) {
        const u = o[c];
        switch (ss(u, i.a, i.b, i.c, r, E), (c === "normal" || c === "tangent" || c === "bitangent") && E.normalize(), u.itemSize) {
          case 4:
            a += Ce(E.x, E.y, E.z, E.w);
            break;
          case 3:
            a += Ce(E.x, E.y, E.z);
            break;
          case 2:
            a += Ce(E.x, E.y);
            break;
          case 1:
            a += Ce(E.x);
            break;
        }
        a += "|";
      }
      return a;
    }
  }
  // Accumulate the vertex data in the given attribute arrays
  getVertexData(e, t, s) {
    const { barycoord: i, indices: n } = this, r = oe[e], o = i[r], { attributes: a } = t;
    for (const c in a) {
      if (!s[c])
        continue;
      const u = a[c], h = s[c];
      switch (ss(u, n.a, n.b, n.c, o, E), (c === "normal" || c === "tangent" || c === "bitangent") && E.normalize(), u.itemSize) {
        case 4:
          h.push(E.x, E.y, E.z, E.w);
          break;
        case 3:
          h.push(E.x, E.y, E.z);
          break;
        case 2:
          h.push(E.x, E.y);
          break;
        case 1:
          h.push(E.x);
          break;
      }
    }
  }
  // Copy the indices from a target triangle
  initFromTriangle(e) {
    return this.initFromIndices(
      e.indices.a,
      e.indices.b,
      e.indices.c
    );
  }
  // Set the indices for the given
  initFromIndices(e, t, s) {
    return this.indices.a = e, this.indices.b = t, this.indices.c = s, this.clipValues.a = -1, this.clipValues.b = -1, this.clipValues.c = -1, this.barycoord.a.set(1, 0, 0), this.barycoord.b.set(0, 1, 0), this.barycoord.c.set(0, 0, 1), this;
  }
  // Lerp the given vertex along to the provided edge of the provided triangle
  lerpVertexFromEdge(e, t, s, i, n) {
    this.clipValues[n] = T.lerp(e.clipValues[t], e.clipValues[s], i), this.barycoord[n].lerpVectors(e.barycoord[t], e.barycoord[s], i);
  }
  // Copy a vertex from the provided triangle
  copyVertex(e, t, s) {
    this.clipValues[s] = e.clipValues[t], this.barycoord[s].copy(e.barycoord[t]);
  }
}
function ss(l, e, t, s, i, n) {
  switch (Kt.fromBufferAttribute(l, e), es.fromBufferAttribute(l, t), ts.fromBufferAttribute(l, s), n.set(0, 0, 0, 0).addScaledVector(Kt, i.x).addScaledVector(es, i.y).addScaledVector(ts, i.z), l.itemSize) {
    case 3:
      E.w = 0;
      break;
    case 2:
      E.w = 0, E.z = 0;
      break;
    case 1:
      E.w = 0, E.z = 0, E.y = 0;
      break;
  }
  return n;
}
function Ce(...l) {
  let s = "";
  for (let i = 0, n = l.length; i < n; i++)
    s += ~~(l[i] * 1e5 + 0.5), i !== n - 1 && (s += "_");
  return s;
}
const is = {}, pn = /* @__PURE__ */ new I(), ut = /* @__PURE__ */ new I(), ht = /* @__PURE__ */ new I(), fn = /* @__PURE__ */ new I(), mn = /* @__PURE__ */ new I(), Y = /* @__PURE__ */ new I(), xe = /* @__PURE__ */ new I(), X = /* @__PURE__ */ new q(), re = /* @__PURE__ */ new q(), ns = /* @__PURE__ */ new q();
class gn extends ii {
  constructor() {
    super(), this.ellipsoid = new zt(), this.skirtLength = 1e3, this.smoothSkirtNormals = true, this.solid = false, this.minLat = -Math.PI / 2, this.maxLat = Math.PI / 2, this.minLon = -Math.PI, this.maxLon = Math.PI, this.attributeList = ["position", "normal", "uv"];
  }
  clipToQuadrant(e, t, s) {
    const { solid: i, skirtLength: n, ellipsoid: r, smoothSkirtNormals: o } = this;
    this.clearSplitOperations(), this.addSplitOperation(rs("x"), !t), this.addSplitOperation(rs("y"), !s);
    let a, c;
    const u = e.geometry.groups[0], h = this.getClippedData(e, u);
    if (this.adjustVertices(h, e.position, 0), i) {
      a = {
        index: h.index.slice().reverse(),
        attributes: {}
      };
      for (const M in h.attributes)
        a.attributes[M] = h.attributes[M].slice();
      const _ = a.attributes.normal;
      if (_)
        for (let M = 0; M < _.length; M += 3)
          _[M + 0] *= -1, _[M + 1] *= -1, _[M + 2] *= -1;
      this.adjustVertices(a, e.position, -n);
    }
    if (n > 0) {
      c = {
        index: [],
        attributes: {
          position: [],
          normal: [],
          uv: []
        }
      };
      let _ = 0;
      const M = {}, v = (B, V, A) => {
        const C = Ce(...B, ...A, ...V);
        C in M || (M[C] = _, _++, c.attributes.position.push(...B), c.attributes.normal.push(...A), c.attributes.uv.push(...V)), c.index.push(M[C]);
      }, S = h.index, L = h.attributes.uv, R = h.attributes.position, N = h.attributes.normal, k = h.index.length / 3;
      for (let B = 0; B < k; B++) {
        const V = 3 * B;
        for (let A = 0; A < 3; A++) {
          const C = (A + 1) % 3, U = S[V + A], w = S[V + C];
          if (X.fromArray(L, U * 2), re.fromArray(L, w * 2), X.x === re.x && (X.x === 0 || X.x === 0.5 || X.x === 1) || X.y === re.y && (X.y === 0 || X.y === 0.5 || X.y === 1)) {
            ut.fromArray(R, U * 3), ht.fromArray(R, w * 3);
            const D = ut, H = ht, F = fn.copy(ut), O = mn.copy(ht);
            Y.copy(F).add(e.position), r.getPositionToNormal(Y, Y), F.addScaledVector(Y, -n), Y.copy(O).add(e.position), r.getPositionToNormal(Y, Y), O.addScaledVector(Y, -n), o && N ? (Y.fromArray(N, U * 3), xe.fromArray(N, w * 3)) : (Y.subVectors(D, H), xe.subVectors(D, F).cross(Y).normalize(), Y.copy(xe)), v(H, re, xe), v(D, X, Y), v(F, X, Y), v(H, re, xe), v(F, X, Y), v(O, re, xe);
          }
        }
      }
    }
    const d = h.index.length, m = h;
    if (a) {
      const { index: _, attributes: M } = a, v = m.attributes.position.length / 3;
      for (let S = 0, L = _.length; S < L; S++)
        m.index.push(_[S] + v);
      for (const S in h.attributes)
        m.attributes[S].push(...M[S]);
    }
    if (c) {
      const { index: _, attributes: M } = c, v = m.attributes.position.length / 3;
      for (let S = 0, L = _.length; S < L; S++)
        m.index.push(_[S] + v);
      for (const S in h.attributes)
        m.attributes[S].push(...M[S]);
    }
    const p = t ? 0 : -0.5, f = s ? 0 : -0.5, x = m.attributes.uv;
    for (let _ = 0, M = x.length; _ < M; _ += 2)
      x[_] = (x[_] + p) * 2, x[_ + 1] = (x[_ + 1] + f) * 2;
    const g = this.constructMesh(m.attributes, m.index, e);
    g.userData.minHeight = e.userData.minHeight, g.userData.maxHeight = e.userData.maxHeight;
    let y = 0, b = 0;
    return g.geometry.addGroup(b, d, y), b += d, y++, a && (g.geometry.addGroup(b, a.index.length, y), b += a.index.length, y++), c && (g.geometry.addGroup(b, c.index.length, y), b += c.index.length, y++), g;
  }
  adjustVertices(e, t, s) {
    const { ellipsoid: i, minLat: n, maxLat: r, minLon: o, maxLon: a } = this, { attributes: c, vertexIsClipped: u } = e, h = c.position, d = c.uv, m = h.length / 3;
    for (let p = 0; p < m; p++) {
      const f = X.fromArray(d, p * 2);
      u && u[p] && (Math.abs(f.x - 0.5) < 1e-10 && (f.x = 0.5), Math.abs(f.y - 0.5) < 1e-10 && (f.y = 0.5), X.toArray(d, p * 2));
      const x = T.lerp(n, r, f.y), g = T.lerp(o, a, f.x), y = pn.fromArray(h, p * 3).add(t);
      i.getPositionToCartographic(y, is), i.getCartographicToPosition(x, g, is.height + s, y), y.sub(t), y.toArray(h, p * 3);
    }
  }
}
function rs(l) {
  return (e, t, s, i, n) => {
    const r = e.attributes.uv;
    return X.fromBufferAttribute(r, t), re.fromBufferAttribute(r, s), ns.fromBufferAttribute(r, i), X[l] * n.x + re[l] * n.y + ns[l] * n.z - 0.5;
  };
}
const os = Symbol("TILE_X"), as = Symbol("TILE_Y"), Se = Symbol("TILE_LEVEL"), de = Symbol("TILE_AVAILABLE"), Ne = 1e4, ls = /* @__PURE__ */ new I();
function xn(l, e, t, s) {
  if (l && e < l.length) {
    const i = l[e];
    for (let n = 0, r = i.length; n < r; n++) {
      const { startX: o, startY: a, endX: c, endY: u } = i[n];
      if (t >= o && t <= c && s >= a && s <= u)
        return true;
    }
  }
  return false;
}
function ni(l) {
  const { available: e = null, maxzoom: t = null } = l;
  return t === null ? e.length - 1 : t;
}
function yn(l) {
  const { metadataAvailability: e = -1 } = l;
  return e;
}
function dt(l, e) {
  const t = l[Se], s = yn(e), i = ni(e);
  return t < i && s !== -1 && t % s === 0;
}
function _n(l, e, t, s, i) {
  return i.tiles[0].replace(/{\s*z\s*}/g, t).replace(/{\s*x\s*}/g, l).replace(/{\s*y\s*}/g, e).replace(/{\s*version\s*}/g, s);
}
class Tn {
  constructor(e = {}) {
    const {
      useRecommendedSettings: t = true,
      skirtLength: s = null,
      smoothSkirtNormals: i = true,
      solid: n = false
    } = e;
    this.name = "QUANTIZED_MESH_PLUGIN", this.priority = -1e3, this.tiles = null, this.layer = null, this.useRecommendedSettings = t, this.skirtLength = s, this.smoothSkirtNormals = i, this.solid = n, this.attribution = null, this.tiling = new ti(), this.projection = new Re();
  }
  // Plugin function
  init(e) {
    e.fetchOptions.headers = e.fetchOptions.headers || {}, e.fetchOptions.headers.Accept = "application/vnd.quantized-mesh,application/octet-stream;q=0.9", this.useRecommendedSettings && (e.errorTarget = 2), this.tiles = e;
  }
  loadRootTileSet() {
    const { tiles: e } = this;
    let t = new URL("layer.json", new URL(e.rootURL, location.href));
    return e.invokeAllPlugins((s) => t = s.preprocessURL ? s.preprocessURL(t, null) : t), e.invokeOnePlugin((s) => s.fetchData && s.fetchData(t, this.tiles.fetchOptions)).then((s) => s.json()).then((s) => {
      this.layer = s;
      const {
        projection: i = "EPSG:4326",
        extensions: n = [],
        attribution: r = "",
        available: o = null
      } = s, {
        tiling: a,
        tiles: c,
        projection: u
      } = this;
      r && (this.attribution = {
        value: r,
        type: "string",
        collapsible: true
      }), n.length > 0 && (c.fetchOptions.headers.Accept += `;extensions=${n.join("-")}`), u.setScheme(i);
      const { tileCountX: h, tileCountY: d } = u;
      a.setProjection(u), a.generateLevels(ni(s) + 1, h, d);
      const m = [];
      for (let x = 0; x < h; x++) {
        const g = this.createChild(0, x, 0, o);
        g && m.push(g);
      }
      const p = {
        asset: {
          version: "1.1"
        },
        geometricError: 1 / 0,
        root: {
          refine: "REPLACE",
          geometricError: 1 / 0,
          boundingVolume: {
            region: [...this.tiling.getContentBounds(), -Ne, Ne]
          },
          children: m,
          [de]: o,
          [Se]: -1
        }
      };
      let f = c.rootURL;
      return c.invokeAllPlugins((x) => f = x.preprocessURL ? x.preprocessURL(f, null) : f), c.preprocessTileSet(p, f), p;
    });
  }
  parseToMesh(e, t, s, i) {
    const {
      skirtLength: n,
      solid: r,
      smoothSkirtNormals: o,
      tiles: a
    } = this, c = a.ellipsoid;
    let u;
    if (s === "quantized_tile_split") {
      const p = new URL(i).searchParams, f = p.get("left") === "true", x = p.get("bottom") === "true", g = new gn();
      g.ellipsoid.copy(c), g.solid = r, g.smoothSkirtNormals = o, g.skirtLength = n === null ? t.geometricError : n;
      const [y, b, _, M] = t.parent.boundingVolume.region;
      g.minLat = b, g.maxLat = M, g.minLon = y, g.maxLon = _, u = g.clipToQuadrant(t.parent.cached.scene, f, x);
    } else if (s === "terrain") {
      const p = new un(a.manager);
      p.ellipsoid.copy(c), p.solid = r, p.smoothSkirtNormals = o, p.skirtLength = n === null ? t.geometricError : n;
      const [f, x, g, y] = t.boundingVolume.region;
      p.minLat = x, p.maxLat = y, p.minLon = f, p.maxLon = g, u = p.parse(e);
    } else
      return;
    const { minHeight: h, maxHeight: d, metadata: m } = u.userData;
    return t.boundingVolume.region[4] = h, t.boundingVolume.region[5] = d, t.cached.boundingVolume.setRegionData(c, ...t.boundingVolume.region), m && ("geometricerror" in m && (t.geometricError = m.geometricerror), dt(t, this.layer) && "available" in m && t.children.length === 0 && (t[de] = [
      ...new Array(t[Se] + 1).fill(null),
      ...m.available
    ])), this.expandChildren(t), u;
  }
  getAttributions(e) {
    this.attribution && e.push(this.attribution);
  }
  // Local functions
  createChild(e, t, s, i) {
    const { tiles: n, layer: r, tiling: o, projection: a } = this, c = n.ellipsoid, u = i === null && e === 0 || xn(i, e, t, s), h = _n(t, s, e, 1, r), d = [...o.getTileBounds(t, s, e), -Ne, Ne], [
      /* west */
      ,
      m,
      /* east */
      ,
      p,
      /* minHeight */
      ,
      f
    ] = d, x = m > 0 != p > 0 ? 0 : Math.min(Math.abs(m), Math.abs(p));
    c.getCartographicToPosition(x, 0, f, ls), ls.z = 0;
    const g = a.tileCountX, _ = Math.max(...c.radius) * 2 * Math.PI * 0.25 / (65 * g) / 2 ** e, M = {
      [de]: null,
      [Se]: e,
      [os]: t,
      [as]: s,
      refine: "REPLACE",
      geometricError: _,
      boundingVolume: { region: d },
      content: u ? { uri: h } : null,
      children: []
    };
    return dt(M, r) || (M[de] = i), M;
  }
  expandChildren(e) {
    const t = e[Se], s = e[os], i = e[as], n = e[de];
    if (t >= this.tiling.maxLevel)
      return;
    let r = false;
    for (let o = 0; o < 2; o++)
      for (let a = 0; a < 2; a++) {
        const c = this.createChild(t + 1, 2 * s + o, 2 * i + a, n);
        c.content !== null ? (e.children.push(c), r = true) : (e.children.push(c), c.content = { uri: `tile.quantized_tile_split?bottom=${a === 0}&left=${o === 0}` });
      }
    r || (e.children.length = 0);
  }
  fetchData(e, t) {
    if (/quantized_tile_split/.test(e))
      return new ArrayBuffer();
  }
  disposeTile(e) {
    dt(e, this.layer) && (e[de] = null), de in e && (e.children.forEach((t) => {
      this.tiles.processNodeQueue.remove(t);
    }), e.children.length = 0, e.__childrenProcessed = 0);
  }
}
class Br {
  get apiToken() {
    return this.auth.apiToken;
  }
  set apiToken(e) {
    this.auth.apiToken = e;
  }
  get autoRefreshToken() {
    return this.auth.autoRefreshToken;
  }
  set autoRefreshToken(e) {
    this.auth.autoRefreshToken = e;
  }
  constructor({ apiToken: e, assetId: t = null, autoRefreshToken: s = false, useRecommendedSettings: i = true }) {
    this.name = "CESIUM_ION_AUTH_PLUGIN", this.auth = new re$1({ apiToken: e, autoRefreshToken: s }), this.assetId = t, this.autoRefreshToken = s, this.useRecommendedSettings = i, this.tiles = null, this._tileSetVersion = -1, this._attributions = [];
  }
  init(e) {
    this.assetId !== null && (e.rootURL = `https://api.cesium.com/v1/assets/${this.assetId}/endpoint`), this.tiles = e, this.auth.authURL = e.rootURL, e.resetFailedTiles();
  }
  loadRootTileSet() {
    return this.auth.refreshToken().then((e) => (this._initializeFromAsset(e), this.tiles.invokeOnePlugin((t) => t !== this && t.loadRootTileSet && t.loadRootTileSet()))).catch((e) => {
      this.tiles.dispatchEvent({
        type: "load-error",
        tile: null,
        error: e,
        url: this.auth.authURL
      });
    });
  }
  preprocessURL(e) {
    return e = new URL(e), /^http/.test(e.protocol) && this._tileSetVersion != -1 && e.searchParams.set("v", this._tileSetVersion), e.toString();
  }
  fetchData(e, t) {
    return this.tiles.getPluginByName("GOOGLE_CLOUD_AUTH_PLUGIN") !== null ? null : this.auth.fetch(e, t);
  }
  getAttributions(e) {
    this.tiles.visibleTiles.size > 0 && e.push(...this._attributions);
  }
  _initializeFromAsset(e) {
    const t = this.tiles;
    if ("externalType" in e) {
      const s = new URL(e.options.url);
      t.rootURL = e.options.url, t.registerPlugin(new nn({
        apiToken: s.searchParams.get("key"),
        autoRefreshToken: this.autoRefreshToken,
        useRecommendedSettings: this.useRecommendedSettings
      }));
    } else {
      e.type === "TERRAIN" && t.getPluginByName("QUANTIZED_MESH_PLUGIN") === null ? t.registerPlugin(new Tn({
        useRecommendedSettings: this.useRecommendedSettings
      })) : e.type === "IMAGERY" && t.getPluginByName("TMS_TILES_PLUGIN") === null && t.registerPlugin(new cn({
        useRecommendedSettings: this.useRecommendedSettings,
        shape: "ellipsoid"
      })), t.rootURL = e.url;
      const s = new URL(e.url);
      s.searchParams.has("v") && this._tileSetVersion === -1 && (this._tileSetVersion = s.searchParams.get("v")), e.attributions && (this._attributions = e.attributions.map((i) => ({
        value: i.html,
        type: "html",
        collapsible: i.collapsible
      })));
    }
  }
}
const pt = /* @__PURE__ */ new Q();
class Ur {
  constructor() {
    this.name = "UPDATE_ON_CHANGE_PLUGIN", this.tiles = null, this.needsUpdate = false, this.cameraMatrices = /* @__PURE__ */ new Map();
  }
  init(e) {
    this.tiles = e, this._needsUpdateCallback = () => {
      this.needsUpdate = true;
    }, this._onCameraAdd = ({ camera: t }) => {
      this.needsUpdate = true, this.cameraMatrices.set(t, new Q());
    }, this._onCameraDelete = ({ camera: t }) => {
      this.needsUpdate = true, this.cameraMatrices.delete(t);
    }, e.addEventListener("needs-update", this._needsUpdateCallback), e.addEventListener("add-camera", this._onCameraAdd), e.addEventListener("delete-camera", this._onCameraDelete), e.addEventListener("camera-resolution-change", this._needsUpdateCallback), e.cameras.forEach((t) => {
      this._onCameraAdd({ camera: t });
    });
  }
  doTilesNeedUpdate() {
    const e = this.tiles;
    let t = false;
    this.cameraMatrices.forEach((i, n) => {
      pt.copy(e.group.matrixWorld).premultiply(n.matrixWorldInverse).premultiply(n.projectionMatrixInverse), t = t || !pt.equals(i), i.copy(pt);
    });
    const s = this.needsUpdate;
    return this.needsUpdate = false, s || t;
  }
  preprocessNode() {
    this.needsUpdate = true;
  }
  dispose() {
    const e = this.tiles;
    e.removeEventListener("camera-resolution-change", this._needsUpdateCallback), e.removeEventListener("needs-update", this._needsUpdateCallback), e.removeEventListener("add-camera", this._onCameraAdd), e.removeEventListener("delete-camera", this._onCameraDelete);
  }
}
const cs = new I();
function Te(l, e) {
  if (l.isInterleavedBufferAttribute || l.array instanceof e)
    return l;
  const s = e === Int8Array || e === Int16Array || e === Int32Array ? -1 : 0, i = new e(l.count * l.itemSize), n = new K(i, l.itemSize, true), r = l.itemSize, o = l.count;
  for (let a = 0; a < o; a++)
    for (let c = 0; c < r; c++) {
      const u = T.clamp(l.getComponent(a, c), s, 1);
      n.setComponent(a, c, u);
    }
  return n;
}
function bn(l, e = Int16Array) {
  const t = l.geometry, s = t.attributes, i = s.position;
  if (i.isInterleavedBufferAttribute || i.array instanceof e)
    return i;
  const n = new e(i.count * i.itemSize), r = new K(n, i.itemSize, false), o = i.itemSize, a = i.count;
  t.computeBoundingBox();
  const c = t.boundingBox, { min: u, max: h } = c, d = 2 ** (8 * e.BYTES_PER_ELEMENT - 1) - 1, m = -d;
  for (let p = 0; p < a; p++)
    for (let f = 0; f < o; f++) {
      const x = f === 0 ? "x" : f === 1 ? "y" : "z", g = u[x], y = h[x], b = T.mapLinear(
        i.getComponent(p, f),
        g,
        y,
        m,
        d
      );
      r.setComponent(p, f, b);
    }
  c.getCenter(cs).multiply(l.scale).applyQuaternion(l.quaternion), l.position.add(cs), l.scale.x *= 0.5 * (h.x - u.x) / d, l.scale.y *= 0.5 * (h.y - u.y) / d, l.scale.z *= 0.5 * (h.z - u.z) / d, s.position = r, l.geometry.boundingBox = null, l.geometry.boundingSphere = null, l.updateMatrixWorld();
}
class Dr {
  constructor(e) {
    this._options = {
      // whether to generate normals if they don't already exist.
      generateNormals: false,
      // whether to disable use of mipmaps since they are typically not necessary
      // with something like 3d tiles.
      disableMipmaps: true,
      // whether to compress certain attributes
      compressIndex: true,
      compressNormals: false,
      compressUvs: false,
      compressPosition: false,
      // the TypedArray type to use when compressing the attributes
      uvType: Int8Array,
      normalType: Int8Array,
      positionType: Int16Array,
      ...e
    }, this.name = "TILES_COMPRESSION_PLUGIN", this.priority = -100;
  }
  processTileModel(e, t) {
    const {
      generateNormals: s,
      disableMipmaps: i,
      compressIndex: n,
      compressUvs: r,
      compressNormals: o,
      compressPosition: a,
      uvType: c,
      normalType: u,
      positionType: h
    } = this._options;
    e.traverse((d) => {
      if (d.material && i) {
        const m = d.material;
        for (const p in m) {
          const f = m[p];
          f && f.isTexture && f.generateMipmaps && (f.generateMipmaps = false, f.minFilter = Xs);
        }
      }
      if (d.geometry) {
        const m = d.geometry, p = m.attributes;
        if (r) {
          const { uv: f, uv1: x, uv2: g, uv3: y } = p;
          f && (p.uv = Te(f, c)), x && (p.uv1 = Te(x, c)), g && (p.uv2 = Te(g, c)), y && (p.uv3 = Te(y, c));
        }
        if (s && !p.normals && m.computeVertexNormals(), o && p.normals && (p.normals = Te(p.normals, u)), a && bn(d, h), n && m.index) {
          const f = p.position.count, x = m.index, g = f > 65535 ? Uint32Array : f > 255 ? Uint16Array : Uint8Array;
          if (!(x.array instanceof g)) {
            const y = new g(m.index.count);
            y.set(x.array);
            const b = new K(y, 1);
            m.setIndex(b);
          }
        }
      }
    });
  }
}
function W(l, e, t) {
  return l && e in l ? l[e] : t;
}
function ri(l) {
  return l !== "BOOLEAN" && l !== "STRING" && l !== "ENUM";
}
function Mn(l) {
  return /^FLOAT/.test(l);
}
function Be(l) {
  return /^VEC/.test(l);
}
function Ue(l) {
  return /^MAT/.test(l);
}
function oi(l, e, t, s = null) {
  return Ue(t) || Be(t) ? s.fromArray(l, e) : l[e];
}
function Rt(l) {
  const { type: e, componentType: t } = l;
  switch (e) {
    case "SCALAR":
      return t === "INT64" ? 0n : 0;
    case "VEC2":
      return new q();
    case "VEC3":
      return new I();
    case "VEC4":
      return new Pe();
    case "MAT2":
      return new Ai();
    case "MAT3":
      return new Si();
    case "MAT4":
      return new Q();
    case "BOOLEAN":
      return false;
    case "STRING":
      return "";
    // the final value for enums is a string but are represented as integers
    // during intermediate steps
    case "ENUM":
      return 0;
  }
}
function us(l, e) {
  if (e == null)
    return false;
  switch (l) {
    case "SCALAR":
      return typeof e == "number" || typeof e == "bigint";
    case "VEC2":
      return e.isVector2;
    case "VEC3":
      return e.isVector3;
    case "VEC4":
      return e.isVector4;
    case "MAT2":
      return e.isMatrix2;
    case "MAT3":
      return e.isMatrix3;
    case "MAT4":
      return e.isMatrix4;
    case "BOOLEAN":
      return typeof e == "boolean";
    case "STRING":
      return typeof e == "string";
    case "ENUM":
      return typeof e == "number" || typeof e == "bigint";
  }
  throw new Error("ClassProperty: invalid type.");
}
function Ie(l, e = null) {
  switch (l) {
    case "INT8":
      return Int8Array;
    case "INT16":
      return Int16Array;
    case "INT32":
      return Int32Array;
    case "INT64":
      return BigInt64Array;
    case "UINT8":
      return Uint8Array;
    case "UINT16":
      return Uint16Array;
    case "UINT32":
      return Uint32Array;
    case "UINT64":
      return BigUint64Array;
    case "FLOAT32":
      return Float32Array;
    case "FLOAT64":
      return Float64Array;
  }
  switch (e) {
    case "BOOLEAN":
      return Uint8Array;
    case "STRING":
      return Uint8Array;
  }
  throw new Error("ClassProperty: invalid type.");
}
function vn(l, e = null) {
  if (l.array) {
    e = e && Array.isArray(e) ? e : [], e.length = l.count;
    for (let s = 0, i = e.length; s < i; s++)
      e[s] = Ye(l, e[s]);
  } else
    e = Ye(l, e);
  return e;
}
function Ye(l, e = null) {
  const t = l.default, s = l.type;
  if (e = e || Rt(l), t === null) {
    switch (s) {
      case "SCALAR":
        return 0;
      case "VEC2":
        return e.set(0, 0);
      case "VEC3":
        return e.set(0, 0, 0);
      case "VEC4":
        return e.set(0, 0, 0, 0);
      case "MAT2":
        return e.identity();
      case "MAT3":
        return e.identity();
      case "MAT4":
        return e.identity();
      case "BOOLEAN":
        return false;
      case "STRING":
        return "";
      case "ENUM":
        return "";
    }
    throw new Error("ClassProperty: invalid type.");
  } else if (Ue(s))
    e.fromArray(t);
  else if (Be(s))
    e.fromArray(t);
  else
    return t;
}
function Cn(l, e) {
  if (l.noData === null)
    return e;
  const t = l.noData, s = l.type;
  if (Array.isArray(e))
    for (let r = 0, o = e.length; r < o; r++)
      e[r] = i(e[r]);
  else
    e = i(e);
  return e;
  function i(r) {
    return n(r) && (r = Ye(l, r)), r;
  }
  function n(r) {
    if (Ue(s)) {
      const o = r.elements;
      for (let a = 0, c = t.length; a < c; a++)
        if (t[a] !== o[a])
          return false;
      return true;
    } else if (Be(s)) {
      for (let o = 0, a = t.length; o < a; o++)
        if (t[o] !== r.getComponent(o))
          return false;
      return true;
    } else
      return t === r;
  }
}
function Sn(l, e) {
  switch (l) {
    case "INT8":
      return Math.max(e / 127, -1);
    case "INT16":
      return Math.max(e, 32767, -1);
    case "INT32":
      return Math.max(e / 2147483647, -1);
    case "INT64":
      return Math.max(Number(e) / 9223372036854776e3, -1);
    // eslint-disable-line no-loss-of-precision
    case "UINT8":
      return e / 255;
    case "UINT16":
      return e / 65535;
    case "UINT32":
      return e / 4294967295;
    case "UINT64":
      return Number(e) / 18446744073709552e3;
  }
}
function An(l, e) {
  const {
    type: t,
    componentType: s,
    scale: i,
    offset: n,
    normalized: r
  } = l;
  if (Array.isArray(e))
    for (let h = 0, d = e.length; h < d; h++)
      e[h] = o(e[h]);
  else
    e = o(e);
  return e;
  function o(h) {
    return Ue(t) ? h = c(h) : Be(t) ? h = a(h) : h = u(h), h;
  }
  function a(h) {
    return h.x = u(h.x), h.y = u(h.y), "z" in h && (h.z = u(h.z)), "w" in h && (h.w = u(h.w)), h;
  }
  function c(h) {
    const d = h.elements;
    for (let m = 0, p = d.length; m < p; m++)
      d[m] = u(d[m]);
    return h;
  }
  function u(h) {
    return r && (h = Sn(s, h)), (r || Mn(s)) && (h = h * i + n), h;
  }
}
function jt(l, e, t = null) {
  if (l.array) {
    Array.isArray(e) || (e = new Array(l.count || 0)), e.length = t !== null ? t : l.count;
    for (let s = 0, i = e.length; s < i; s++)
      us(l.type, e[s]) || (e[s] = Rt(l));
  } else
    us(l.type, e) || (e = Rt(l));
  return e;
}
function $e(l, e) {
  for (const t in e)
    t in l || delete e[t];
  for (const t in l) {
    const s = l[t];
    e[t] = jt(s, e[t]);
  }
}
function Ln(l) {
  switch (l) {
    case "ENUM":
      return 1;
    case "SCALAR":
      return 1;
    case "VEC2":
      return 2;
    case "VEC3":
      return 3;
    case "VEC4":
      return 4;
    case "MAT2":
      return 4;
    case "MAT3":
      return 9;
    case "MAT4":
      return 16;
    // unused
    case "BOOLEAN":
      return -1;
    case "STRING":
      return -1;
    default:
      return -1;
  }
}
class nt {
  constructor(e, t, s = null) {
    this.name = t.name || null, this.description = t.description || null, this.type = t.type, this.componentType = t.componentType || null, this.enumType = t.enumType || null, this.array = t.array || false, this.count = t.count || 0, this.normalized = t.normalized || false, this.offset = t.offset || 0, this.scale = W(t, "scale", 1), this.max = W(t, "max", 1 / 0), this.min = W(t, "min", -1 / 0), this.required = t.required || false, this.noData = W(t, "noData", null), this.default = W(t, "default", null), this.semantic = W(t, "semantic", null), this.enumSet = null, this.accessorProperty = s, s && (this.offset = W(s, "offset", this.offset), this.scale = W(s, "scale", this.scale), this.max = W(s, "max", this.max), this.min = W(s, "min", this.min)), t.type === "ENUM" && (this.enumSet = e[this.enumType], this.componentType === null && (this.componentType = W(this.enumSet, "valueType", "UINT16")));
  }
  // shape the given target to match the data type of the property
  // enums are set to their integer value
  shapeToProperty(e, t = null) {
    return jt(this, e, t);
  }
  // resolve the given object to the default value for the property for a single element
  // enums are set to a default string
  resolveDefaultElement(e) {
    return Ye(this, e);
  }
  // resolve the target to the default value for the property for every element if it's an array
  // enums are set to a default string
  resolveDefault(e) {
    return vn(this, e);
  }
  // converts any instances of no data to the default value
  resolveNoData(e) {
    return Cn(this, e);
  }
  // converts enums integers in the given target to strings
  resolveEnumsToStrings(e) {
    const t = this.enumSet;
    if (this.type === "ENUM")
      if (Array.isArray(e))
        for (let i = 0, n = e.length; i < n; i++)
          e[i] = s(e[i]);
      else
        e = s(e);
    return e;
    function s(i) {
      const n = t.values.find((r) => r.value === i);
      return n === null ? "" : n.name;
    }
  }
  // apply scales
  adjustValueScaleOffset(e) {
    return ri(this.type) ? An(this, e) : e;
  }
}
class Wt {
  constructor(e, t = {}, s = {}, i = null) {
    this.definition = e, this.class = t[e.class], this.className = e.class, this.enums = s, this.data = i, this.name = "name" in e ? e.name : null, this.properties = null;
  }
  getPropertyNames() {
    return Object.keys(this.class.properties);
  }
  includesData(e) {
    return !!this.definition.properties[e];
  }
  dispose() {
  }
  _initProperties(e = nt) {
    const t = {};
    for (const s in this.class.properties)
      t[s] = new e(this.enums, this.class.properties[s], this.definition.properties[s]);
    this.properties = t;
  }
}
class In extends nt {
  constructor(e, t, s = null) {
    super(e, t, s), this.attribute = (s == null ? void 0 : s.attribute) ?? null;
  }
}
class En extends Wt {
  constructor(...e) {
    super(...e), this.isPropertyAttributeAccessor = true, this._initProperties(In);
  }
  getData(e, t, s = {}) {
    const i = this.properties;
    $e(i, s);
    for (const n in i)
      s[n] = this.getPropertyValue(n, e, t, s[n]);
    return s;
  }
  getPropertyValue(e, t, s, i = null) {
    if (t >= this.count)
      throw new Error("PropertyAttributeAccessor: Requested index is outside the range of the buffer.");
    const n = this.properties[e], r = n.type;
    if (n) {
      if (!this.definition.properties[e])
        return n.resolveDefault(i);
    } else throw new Error("PropertyAttributeAccessor: Requested class property does not exist.");
    i = n.shapeToProperty(i);
    const o = s.getAttribute(n.attribute.toLowerCase());
    if (Ue(r)) {
      const a = i.elements;
      for (let c = 0, u = a.length; c < u; c < u)
        a[c] = o.getComponent(t, c);
    } else if (Be(r))
      i.fromBufferAttribute(o, t);
    else if (r === "SCALAR" || r === "ENUM")
      i = o.getX(t);
    else
      throw new Error("StructuredMetadata.PropertyAttributeAccessor: BOOLEAN and STRING types are not supported by property attributes.");
    return i = n.adjustValueScaleOffset(i), i = n.resolveEnumsToStrings(i), i = n.resolveNoData(i), i;
  }
}
class wn extends nt {
  constructor(e, t, s = null) {
    super(e, t, s), this.values = (s == null ? void 0 : s.values) ?? null, this.valueLength = Ln(this.type), this.arrayOffsets = W(s, "arrayOffsets", null), this.stringOffsets = W(s, "stringOffsets", null), this.arrayOffsetType = W(s, "arrayOffsetType", "UINT32"), this.stringOffsetType = W(s, "stringOffsetType", "UINT32");
  }
  // returns the necessary array length based on the array offsets if present
  getArrayLengthFromId(e, t) {
    let s = this.count;
    if (this.arrayOffsets !== null) {
      const { arrayOffsets: i, arrayOffsetType: n } = this, r = Ie(n), o = new r(e[i]);
      s = o[t + 1] - o[t];
    }
    return s;
  }
  // returns the index offset into the data buffer for the given id based on the
  // the array offsets if present
  getIndexOffsetFromId(e, t) {
    let s = t;
    if (this.arrayOffsets) {
      const { arrayOffsets: i, arrayOffsetType: n } = this, r = Ie(n);
      s = new r(e[i])[s];
    } else this.array && (s *= this.count);
    return s;
  }
}
class Pn extends Wt {
  constructor(...e) {
    super(...e), this.isPropertyTableAccessor = true, this.count = this.definition.count, this._initProperties(wn);
  }
  getData(e, t = {}) {
    const s = this.properties;
    $e(s, t);
    for (const i in s)
      t[i] = this.getPropertyValue(i, e, t[i]);
    return t;
  }
  // reads an individual element
  _readValueAtIndex(e, t, s, i = null) {
    const n = this.properties[e], { componentType: r, type: o } = n, a = this.data, c = a[n.values], u = Ie(r, o), h = new u(c), d = n.getIndexOffsetFromId(a, t);
    if (ri(o) || o === "ENUM")
      return oi(h, (d + s) * n.valueLength, o, i);
    if (o === "STRING") {
      let m = d + s, p = 0;
      if (n.stringOffsets !== null) {
        const { stringOffsets: x, stringOffsetType: g } = n, y = Ie(g), b = new y(a[x]);
        p = b[m + 1] - b[m], m = b[m];
      }
      const f = new Uint8Array(h.buffer, m, p);
      i = new TextDecoder().decode(f);
    } else if (o === "BOOLEAN") {
      const m = d + s, p = Math.floor(m / 8), f = m % 8;
      i = (h[p] >> f & 1) === 1;
    }
    return i;
  }
  // Reads the data for the given table index
  getPropertyValue(e, t, s = null) {
    if (t >= this.count)
      throw new Error("PropertyTableAccessor: Requested index is outside the range of the table.");
    const i = this.properties[e];
    if (i) {
      if (!this.definition.properties[e])
        return i.resolveDefault(s);
    } else throw new Error("PropertyTableAccessor: Requested property does not exist.");
    const n = i.array, r = this.data, o = i.getArrayLengthFromId(r, t);
    if (s = i.shapeToProperty(s, o), n)
      for (let a = 0, c = s.length; a < c; a++)
        s[a] = this._readValueAtIndex(e, t, a, s[a]);
    else
      s = this._readValueAtIndex(e, t, 0, s);
    return s = i.adjustValueScaleOffset(s), s = i.resolveEnumsToStrings(s), s = i.resolveNoData(s), s;
  }
}
const be = /* @__PURE__ */ new Pi();
class hs {
  constructor() {
    this._renderer = new Li(), this._target = new Pt(1, 1), this._texTarget = new Pt(), this._quad = new FullScreenQuad(new Ys({
      blending: wi,
      blendDst: Ei,
      blendSrc: Ii,
      uniforms: {
        map: { value: null },
        pixel: { value: new q() }
      },
      vertexShader: (
        /* glsl */
        `
				void main() {

					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `
				uniform sampler2D map;
				uniform ivec2 pixel;

				void main() {

					gl_FragColor = texelFetch( map, pixel, 0 );

				}
			`
      )
    }));
  }
  // increases the width of the target render target to support more data
  increaseSizeTo(e) {
    this._target.setSize(Math.max(this._target.width, e), 1);
  }
  // read data from the rendered texture asynchronously
  readDataAsync(e) {
    const { _renderer: t, _target: s } = this;
    return t.readRenderTargetPixelsAsync(s, 0, 0, e.length / 4, 1, e);
  }
  // read data from the rendered texture
  readData(e) {
    const { _renderer: t, _target: s } = this;
    t.readRenderTargetPixels(s, 0, 0, e.length / 4, 1, e);
  }
  // render a single pixel from the source at the destination point on the render target
  // takes the texture, pixel to read from, and pixel to render in to
  renderPixelToTarget(e, t, s) {
    const { _renderer: i, _target: n } = this;
    be.min.copy(t), be.max.copy(t), be.max.x += 1, be.max.y += 1, i.initRenderTarget(n), i.copyTextureToTexture(e, n.texture, be, s, 0);
  }
}
const le = /* @__PURE__ */ new class {
  constructor() {
    let l = null;
    Object.getOwnPropertyNames(hs.prototype).forEach((e) => {
      e !== "constructor" && (this[e] = (...t) => (l = l || new hs(), l[e](...t)));
    });
  }
}(), ds = /* @__PURE__ */ new q(), ps = /* @__PURE__ */ new q(), fs = /* @__PURE__ */ new q();
function Rn(l, e) {
  return e === 0 ? l.getAttribute("uv") : l.getAttribute(`uv${e}`);
}
function ai(l, e, t = new Array(3)) {
  let s = 3 * e, i = 3 * e + 1, n = 3 * e + 2;
  return l.index && (s = l.index.getX(s), i = l.index.getX(i), n = l.index.getX(n)), t[0] = s, t[1] = i, t[2] = n, t;
}
function li(l, e, t, s, i) {
  const [n, r, o] = s, a = Rn(l, e);
  ds.fromBufferAttribute(a, n), ps.fromBufferAttribute(a, r), fs.fromBufferAttribute(a, o), i.set(0, 0, 0).addScaledVector(ds, t.x).addScaledVector(ps, t.y).addScaledVector(fs, t.z);
}
function ci(l, e, t, s) {
  const i = l.x - Math.floor(l.x), n = l.y - Math.floor(l.y), r = Math.floor(i * e % e), o = Math.floor(n * t % t);
  return s.set(r, o), s;
}
const ms = /* @__PURE__ */ new q(), gs = /* @__PURE__ */ new q(), xs = /* @__PURE__ */ new q();
class Bn extends nt {
  constructor(e, t, s = null) {
    super(e, t, s), this.channels = W(s, "channels", [0]), this.index = W(s, "index", null), this.texCoord = W(s, "texCoord", null), this.valueLength = parseInt(this.type.replace(/[^0-9]/g, "")) || 1;
  }
  // takes the buffer to read from and the value index to read
  readDataFromBuffer(e, t, s = null) {
    const i = this.type;
    if (i === "BOOLEAN" || i === "STRING")
      throw new Error("PropertyTextureAccessor: BOOLEAN and STRING types not supported.");
    return oi(e, t * this.valueLength, i, s);
  }
}
class Un extends Wt {
  constructor(...e) {
    super(...e), this.isPropertyTextureAccessor = true, this._asyncRead = false, this._initProperties(Bn);
  }
  // Reads the full set of property data
  getData(e, t, s, i = {}) {
    const n = this.properties;
    $e(n, i);
    const r = Object.keys(n), o = r.map((a) => i[a]);
    return this.getPropertyValuesAtTexel(r, e, t, s, o), r.forEach((a, c) => i[a] = o[c]), i;
  }
  // Reads the full set of property data asynchronously
  async getDataAsync(e, t, s, i = {}) {
    const n = this.properties;
    $e(n, i);
    const r = Object.keys(n), o = r.map((a) => i[a]);
    return await this.getPropertyValuesAtTexelAsync(r, e, t, s, o), r.forEach((a, c) => i[a] = o[c]), i;
  }
  // Reads values asynchronously
  getPropertyValuesAtTexelAsync(...e) {
    this._asyncRead = true;
    const t = this.getPropertyValuesAtTexel(...e);
    return this._asyncRead = false, t;
  }
  // Reads values from the textures synchronously
  getPropertyValuesAtTexel(e, t, s, i, n = []) {
    for (; n.length < e.length; ) n.push(null);
    n.length = e.length, le.increaseSizeTo(n.length);
    const r = this.data, o = this.definition.properties, a = this.properties, c = ai(i, t);
    for (let d = 0, m = e.length; d < m; d++) {
      const p = e[d];
      if (!o[p])
        continue;
      const f = a[p], x = r[f.index];
      li(i, f.texCoord, s, c, ms), ci(ms, x.image.width, x.image.height, gs), xs.set(d, 0), le.renderPixelToTarget(x, gs, xs);
    }
    const u = new Uint8Array(e.length * 4);
    if (this._asyncRead)
      return le.readDataAsync(u).then(() => (h.call(this), n));
    return le.readData(u), h.call(this), n;
    function h() {
      for (let d = 0, m = e.length; d < m; d++) {
        const p = e[d], f = a[p], x = f.type;
        if (n[d] = jt(f, n[d]), f) {
          if (!o[p]) {
            n[d] = f.resolveDefault(n);
            continue;
          }
        } else throw new Error("PropertyTextureAccessor: Requested property does not exist.");
        const g = f.valueLength * (f.count || 1), y = f.channels.map((v) => u[4 * d + v]), b = f.componentType, _ = Ie(b, x), M = new _(g);
        if (new Uint8Array(M.buffer).set(y), f.array) {
          const v = n[d];
          for (let S = 0, L = v.length; S < L; S++)
            v[S] = f.readDataFromBuffer(M, S, v[S]);
        } else
          n[d] = f.readDataFromBuffer(M, 0, n[d]);
        n[d] = f.adjustValueScaleOffset(n[d]), n[d] = f.resolveEnumsToStrings(n[d]), n[d] = f.resolveNoData(n[d]);
      }
    }
  }
  // dispose all of the texture data used
  dispose() {
    this.data.forEach((e) => {
      e && (e.dispose(), e.image instanceof ImageBitmap && e.image.close());
    });
  }
}
class ys {
  constructor(e, t, s, i = null, n = null) {
    const {
      schema: r,
      propertyTables: o = [],
      propertyTextures: a = [],
      propertyAttributes: c = []
    } = e, { enums: u, classes: h } = r, d = o.map((f) => new Pn(f, h, u, s));
    let m = [], p = [];
    i && (i.propertyTextures && (m = i.propertyTextures.map((f) => new Un(a[f], h, u, t))), i.propertyAttributes && (p = i.propertyAttributes.map((f) => new En(c[f], h, u)))), this.schema = r, this.tableAccessors = d, this.textureAccessors = m, this.attributeAccessors = p, this.object = n, this.textures = t, this.nodeMetadata = i;
  }
  // Property Tables
  getPropertyTableData(e, t, s = null) {
    if (!Array.isArray(e) || !Array.isArray(t))
      s = s || {}, s = this.tableAccessors[e].getData(t, s);
    else {
      s = s || [];
      const i = Math.min(e.length, t.length);
      s.length = i;
      for (let n = 0; n < i; n++) {
        const r = this.tableAccessors[e[n]];
        s[n] = r.getData(t[n], s[n]);
      }
    }
    return s;
  }
  getPropertyTableInfo(e = null) {
    if (e === null && (e = this.tableAccessors.map((t, s) => s)), Array.isArray(e))
      return e.map((t) => {
        const s = this.tableAccessors[t];
        return {
          name: s.name,
          className: s.definition.class
        };
      });
    {
      const t = this.tableAccessors[e];
      return {
        name: t.name,
        className: t.definition.class
      };
    }
  }
  // Property Textures
  getPropertyTextureData(e, t, s = []) {
    const i = this.textureAccessors;
    s.length = i.length;
    for (let n = 0; n < i.length; n++) {
      const r = i[n];
      s[n] = r.getData(e, t, this.object.geometry, s[n]);
    }
    return s;
  }
  async getPropertyTextureDataAsync(e, t, s = []) {
    const i = this.textureAccessors;
    s.length = i.length;
    const n = [];
    for (let r = 0; r < i.length; r++) {
      const a = i[r].getDataAsync(e, t, this.object.geometry, s[r]).then((c) => {
        s[r] = c;
      });
      n.push(a);
    }
    return await Promise.all(n), s;
  }
  getPropertyTextureInfo() {
    return this.textureAccessors;
  }
  // Property Attributes
  getPropertyAttributeData(e, t = []) {
    const s = this.attributeAccessors;
    t.length = s.length;
    for (let i = 0; i < s.length; i++) {
      const n = s[i];
      t[i] = n.getData(e, this.object.geometry, t[i]);
    }
    return t;
  }
  getPropertyAttributeInfo() {
    return this.attributeAccessors.map((e) => ({
      name: e.name,
      className: e.definition.class
    }));
  }
  dispose() {
    this.textureAccessors.forEach((e) => e.dispose()), this.tableAccessors.forEach((e) => e.dispose()), this.attributeAccessors.forEach((e) => e.dispose());
  }
}
const Me = "EXT_structural_metadata";
function Dn(l, e = []) {
  var i;
  const t = ((i = l.json.textures) == null ? void 0 : i.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: n }) => {
    for (const r in n) {
      const { index: o } = n[r];
      s[o] === null && (s[o] = l.loadTexture(o));
    }
  }), Promise.all(s);
}
function On(l, e = []) {
  var i;
  const t = ((i = l.json.bufferViews) == null ? void 0 : i.length) || 0, s = new Array(t).fill(null);
  return e.forEach(({ properties: n }) => {
    for (const r in n) {
      const { values: o, arrayOffsets: a, stringOffsets: c } = n[r];
      s[o] === null && (s[o] = l.loadBufferView(o)), s[a] === null && (s[a] = l.loadBufferView(a)), s[c] === null && (s[c] = l.loadBufferView(c));
    }
  }), Promise.all(s);
}
class Vn {
  constructor(e) {
    this.parser = e, this.name = Me;
  }
  async afterRoot({ scene: e, parser: t }) {
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(Me))
      return;
    let i = null, n = t.json.extensions[Me];
    if (n.schemaUri) {
      const { manager: c, path: u, requestHeader: h, crossOrigin: d } = t.options, m = new URL(n.schemaUri, u).toString(), p = new Ri(c);
      p.setCrossOrigin(d), p.setResponseType("json"), p.setRequestHeader(h), i = p.loadAsync(m).then((f) => {
        n = { ...n, schema: f };
      });
    }
    const [r, o] = await Promise.all([
      Dn(t, n.propertyTextures),
      On(t, n.propertyTables),
      i
    ]), a = new ys(n, r, o);
    e.userData.structuralMetadata = a, e.traverse((c) => {
      var u;
      if (t.associations.has(c)) {
        const { meshes: h, primitives: d } = t.associations.get(c), m = (u = t.json.meshes[h]) == null ? void 0 : u.primitives[d];
        if (m && m.extensions && m.extensions[Me]) {
          const p = m.extensions[Me];
          c.userData.structuralMetadata = new ys(n, r, o, p, c);
        } else
          c.userData.structuralMetadata = a;
      }
    });
  }
}
const _s = /* @__PURE__ */ new q(), Ts = /* @__PURE__ */ new q(), bs = /* @__PURE__ */ new q();
function Fn(l) {
  return l.x > l.y && l.x > l.z ? 0 : l.y > l.z ? 1 : 2;
}
class Nn {
  constructor(e, t, s) {
    this.geometry = e, this.textures = t, this.data = s, this._asyncRead = false, this.featureIds = s.featureIds.map((i) => {
      const { texture: n, ...r } = i, o = {
        label: null,
        propertyTable: null,
        nullFeatureId: null,
        ...r
      };
      return n && (o.texture = {
        texCoord: 0,
        channels: [0],
        ...n
      }), o;
    });
  }
  // returns list of textures
  getTextures() {
    return this.textures;
  }
  // returns a set of info for each feature
  getFeatureInfo() {
    return this.featureIds;
  }
  // performs texture data read back asynchronously
  getFeaturesAsync(...e) {
    this._asyncRead = true;
    const t = this.getFeatures(...e);
    return this._asyncRead = false, t;
  }
  // returns all features for the given point on the given triangle
  getFeatures(e, t) {
    const { geometry: s, textures: i, featureIds: n } = this, r = new Array(n.length).fill(null), o = n.length;
    le.increaseSizeTo(o);
    const a = ai(s, e), c = a[Fn(t)];
    for (let d = 0, m = n.length; d < m; d++) {
      const p = n[d], f = "nullFeatureId" in p ? p.nullFeatureId : null;
      if ("texture" in p) {
        const x = i[p.texture.index];
        li(s, p.texture.texCoord, t, a, _s), ci(_s, x.image.width, x.image.height, Ts), bs.set(d, 0), le.renderPixelToTarget(i[p.texture.index], Ts, bs);
      } else if ("attribute" in p) {
        const g = s.getAttribute(`_feature_id_${p.attribute}`).getX(c);
        g !== f && (r[d] = g);
      } else {
        const x = c;
        x !== f && (r[d] = x);
      }
    }
    const u = new Uint8Array(o * 4);
    if (this._asyncRead)
      return le.readDataAsync(u).then(() => (h(), r));
    return le.readData(u), h(), r;
    function h() {
      const d = new Uint32Array(1);
      for (let m = 0, p = n.length; m < p; m++) {
        const f = n[m], x = "nullFeatureId" in f ? f.nullFeatureId : null;
        if ("texture" in f) {
          const { channels: g } = f.texture, y = g.map((_) => u[4 * m + _]);
          new Uint8Array(d.buffer).set(y);
          const b = d[0];
          b !== x && (r[m] = b);
        }
      }
    }
  }
  // dispose all of the texture data used
  dispose() {
    this.textures.forEach((e) => {
      e && (e.dispose(), e.image instanceof ImageBitmap && e.image.close());
    });
  }
}
const Qe = "EXT_mesh_features";
function Ms(l, e, t) {
  l.traverse((s) => {
    var i;
    if (e.associations.has(s)) {
      const { meshes: n, primitives: r } = e.associations.get(s), o = (i = e.json.meshes[n]) == null ? void 0 : i.primitives[r];
      o && o.extensions && o.extensions[Qe] && t(s, o.extensions[Qe]);
    }
  });
}
class kn {
  constructor(e) {
    this.parser = e, this.name = Qe;
  }
  async afterRoot({ scene: e, parser: t }) {
    var o;
    const s = t.json.extensionsUsed;
    if (!s || !s.includes(Qe))
      return;
    const i = ((o = t.json.textures) == null ? void 0 : o.length) || 0, n = new Array(i).fill(null);
    Ms(e, t, (a, { featureIds: c }) => {
      c.forEach((u) => {
        if (u.texture && n[u.texture.index] === null) {
          const h = u.texture.index;
          n[h] = t.loadTexture(h);
        }
      });
    });
    const r = await Promise.all(n);
    Ms(e, t, (a, c) => {
      a.userData.meshFeatures = new Nn(a.geometry, r, c);
    });
  }
}
class Gn {
  constructor() {
    this.name = "CESIUM_RTC";
  }
  afterRoot(e) {
    if (e.parser.json.extensions && e.parser.json.extensions.CESIUM_RTC) {
      const { center: t } = e.parser.json.extensions.CESIUM_RTC;
      t && (e.scene.position.x += t[0], e.scene.position.y += t[1], e.scene.position.z += t[2]);
    }
  }
}
class Or {
  constructor(e) {
    e = {
      metadata: true,
      rtc: true,
      plugins: [],
      dracoLoader: null,
      ktxLoader: null,
      meshoptDecoder: null,
      autoDispose: true,
      ...e
    }, this.tiles = null, this.metadata = e.metadata, this.rtc = e.rtc, this.plugins = e.plugins, this.dracoLoader = e.dracoLoader, this.ktxLoader = e.ktxLoader, this.meshoptDecoder = e.meshoptDecoder, this._gltfRegex = /\.(gltf|glb)$/g, this._dracoRegex = /\.drc$/g, this._loader = null;
  }
  init(e) {
    const t = new GLTFLoader(e.manager);
    this.dracoLoader && (t.setDRACOLoader(this.dracoLoader), e.manager.addHandler(this._dracoRegex, this.dracoLoader)), this.ktxLoader && t.setKTX2Loader(this.ktxLoader), this.meshoptDecoder && t.setMeshoptDecoder(this.meshoptDecoder), this.rtc && t.register(() => new Gn()), this.metadata && (t.register(() => new Vn()), t.register(() => new kn())), this.plugins.forEach((s) => t.register(s)), e.manager.addHandler(this._gltfRegex, t), this.tiles = e, this._loader = t;
  }
  dispose() {
    this.tiles.manager.removeHandler(this._gltfRegex), this.tiles.manager.removeHandler(this._dracoRegex), this.autoDispose && (this.ktxLoader.dispose(), this.dracoLoader.dispose());
  }
}
class Fr {
  set delay(e) {
    this.deferCallbacks.delay = e;
  }
  get delay() {
    return this.deferCallbacks.delay;
  }
  set bytesTarget(e) {
    this.lruCache.minBytesSize = e;
  }
  get bytesTarget() {
    return this.lruCache.minBytesSize;
  }
  get estimatedGpuBytes() {
    return this.lruCache.cachedBytes;
  }
  constructor(e = {}) {
    const {
      delay: t = 0,
      bytesTarget: s = 0
    } = e;
    this.name = "UNLOAD_TILES_PLUGIN", this.tiles = null, this.lruCache = new E$1(), this.deferCallbacks = new zn(), this.delay = t, this.bytesTarget = s;
  }
  init(e) {
    this.tiles = e;
    const { lruCache: t, deferCallbacks: s } = this;
    s.callback = (n) => {
      t.markUnused(n), t.scheduleUnload(false);
    };
    const i = (n) => {
      const r = n.cached.scene;
      e.visibleTiles.has(n) || e.invokeOnePlugin((a) => a.unloadTileFromGPU && a.unloadTileFromGPU(r, n));
    };
    this._onUpdateBefore = () => {
      t.unloadPriorityCallback = e.lruCache.unloadPriorityCallback, t.computeMemoryUsageCallback = e.lruCache.computeMemoryUsageCallback, t.minSize = 1 / 0, t.maxSize = 1 / 0, t.maxBytesSize = 1 / 0, t.unloadPercent = 1, t.autoMarkUnused = false;
    }, this._onVisibilityChangeCallback = ({ tile: n, visible: r }) => {
      r ? (t.add(n, i), e.markTileUsed(n), s.cancel(n)) : s.run(n);
    }, e.forEachLoadedModel((n, r) => {
      const o = e.visibleTiles.has(r);
      this._onVisibilityChangeCallback({ scene: n, visible: o });
    }), e.addEventListener("tile-visibility-change", this._onVisibilityChangeCallback), e.addEventListener("update-before", this._onUpdateBefore);
  }
  unloadTileFromGPU(e, t) {
    e && e.traverse((s) => {
      if (s.material) {
        const i = s.material;
        i.dispose();
        for (const n in i) {
          const r = i[n];
          r && r.isTexture && r.dispose();
        }
      }
      s.geometry && s.geometry.dispose();
    });
  }
  dispose() {
    this.tiles.removeEventListener("tile-visibility-change", this._onVisibilityChangeCallback), this.tiles.removeEventListener("update-before", this._onUpdateBefore), this.deferCallbacks.cancelAll();
  }
}
class zn {
  constructor(e = () => {
  }) {
    this.map = /* @__PURE__ */ new Map(), this.callback = e, this.delay = 0;
  }
  run(e) {
    const { map: t, delay: s } = this;
    if (t.has(e))
      throw new Error("DeferCallbackManager: Callback already initialized.");
    s === 0 ? this.callback(e) : t.set(e, setTimeout(() => this.callback(e), s));
  }
  cancel(e) {
    const { map: t } = this;
    t.has(e) && (clearTimeout(t.get(e)), t.delete(e));
  }
  cancelAll() {
    this.map.forEach((e, t) => {
      this.cancel(t);
    });
  }
}
const { clamp: ft } = T;
class Hn {
  constructor() {
    this.duration = 250, this.fadeCount = 0, this._lastTick = -1, this._fadeState = /* @__PURE__ */ new Map(), this.onFadeComplete = null, this.onFadeStart = null, this.onFadeSetComplete = null, this.onFadeSetStart = null;
  }
  // delete the object from the fade, reset the material data
  deleteObject(e) {
    e && this.completeFade(e);
  }
  // Ensure we're storing a fade timer for the provided object
  // Returns whether a new state had to be added
  guaranteeState(e) {
    const t = this._fadeState;
    if (t.has(e))
      return false;
    const s = {
      fadeInTarget: 0,
      fadeOutTarget: 0,
      fadeIn: 0,
      fadeOut: 0
    };
    return t.set(e, s), true;
  }
  // Force the fade to complete in the direction it is already trending
  completeFade(e) {
    const t = this._fadeState;
    if (!t.has(e))
      return;
    const s = t.get(e).fadeOutTarget === 0;
    t.delete(e), this.fadeCount--, this.onFadeComplete && this.onFadeComplete(e, s), this.fadeCount === 0 && this.onFadeSetComplete && this.onFadeSetComplete();
  }
  completeAllFades() {
    this._fadeState.forEach((e, t) => {
      this.completeFade(t);
    });
  }
  forEachObject(e) {
    this._fadeState.forEach((t, s) => {
      e(s, t);
    });
  }
  // Fade the object in
  fadeIn(e) {
    const t = this.guaranteeState(e), s = this._fadeState.get(e);
    s.fadeInTarget = 1, s.fadeOutTarget = 0, s.fadeOut = 0, t && (this.fadeCount++, this.fadeCount === 1 && this.onFadeSetStart && this.onFadeSetStart(), this.onFadeStart && this.onFadeStart(e));
  }
  // Fade the object out
  fadeOut(e) {
    const t = this.guaranteeState(e), s = this._fadeState.get(e);
    s.fadeOutTarget = 1, t && (s.fadeInTarget = 1, s.fadeIn = 1, this.fadeCount++, this.fadeCount === 1 && this.onFadeSetStart && this.onFadeSetStart(), this.onFadeStart && this.onFadeStart(e));
  }
  isFading(e) {
    return this._fadeState.has(e);
  }
  isFadingOut(e) {
    const t = this._fadeState.get(e);
    return t && t.fadeOutTarget === 1;
  }
  // Tick the fade timer for each actively fading object
  update() {
    const e = window.performance.now();
    this._lastTick === -1 && (this._lastTick = e);
    const t = ft((e - this._lastTick) / this.duration, 0, 1);
    this._lastTick = e, this._fadeState.forEach((i, n) => {
      const {
        fadeOutTarget: r,
        fadeInTarget: o
      } = i;
      let {
        fadeOut: a,
        fadeIn: c
      } = i;
      const u = Math.sign(o - c);
      c = ft(c + u * t, 0, 1);
      const h = Math.sign(r - a);
      a = ft(a + h * t, 0, 1), i.fadeIn = c, i.fadeOut = a, ((a === 1 || a === 0) && (c === 1 || c === 0) || a >= c) && this.completeFade(n);
    });
  }
}
const mt = Symbol("FADE_PARAMS");
function ui(l, e) {
  if (l[mt])
    return l[mt];
  const t = {
    fadeIn: { value: 0 },
    fadeOut: { value: 0 },
    fadeTexture: { value: null }
  };
  return l[mt] = t, l.defines = {
    ...l.defines || {},
    FEATURE_FADE: 0
  }, l.onBeforeCompile = (s) => {
    e && e(s), s.uniforms = {
      ...s.uniforms,
      ...t
    }, s.vertexShader = s.vertexShader.replace(
      /void\s+main\(\)\s+{/,
      (i) => (
        /* glsl */
        `
					#ifdef USE_BATCHING_FRAG

					varying float vBatchId;

					#endif

					${i}

						#ifdef USE_BATCHING_FRAG

						// add 0.5 to the value to avoid floating error that may cause flickering
						vBatchId = getIndirectIndex( gl_DrawID ) + 0.5;

						#endif
				`
      )
    ), s.fragmentShader = s.fragmentShader.replace(/void main\(/, (i) => (
      /* glsl */
      `
				#if FEATURE_FADE

				// adapted from https://www.shadertoy.com/view/Mlt3z8
				float bayerDither2x2( vec2 v ) {

					return mod( 3.0 * v.y + 2.0 * v.x, 4.0 );

				}

				float bayerDither4x4( vec2 v ) {

					vec2 P1 = mod( v, 2.0 );
					vec2 P2 = floor( 0.5 * mod( v, 4.0 ) );
					return 4.0 * bayerDither2x2( P1 ) + bayerDither2x2( P2 );

				}

				// the USE_BATCHING define is not available in fragment shaders
				#ifdef USE_BATCHING_FRAG

				// functions for reading the fade state of a given batch id
				uniform sampler2D fadeTexture;
				varying float vBatchId;
				vec2 getFadeValues( const in float i ) {

					int size = textureSize( fadeTexture, 0 ).x;
					int j = int( i );
					int x = j % size;
					int y = j / size;
					return texelFetch( fadeTexture, ivec2( x, y ), 0 ).rg;

				}

				#else

				uniform float fadeIn;
				uniform float fadeOut;

				#endif

				#endif

				${i}
			`
    )).replace(/#include <dithering_fragment>/, (i) => (
      /* glsl */
      `

				${i}

				#if FEATURE_FADE

				#ifdef USE_BATCHING_FRAG

				vec2 fadeValues = getFadeValues( vBatchId );
				float fadeIn = fadeValues.r;
				float fadeOut = fadeValues.g;

				#endif

				float bayerValue = bayerDither4x4( floor( mod( gl_FragCoord.xy, 4.0 ) ) );
				float bayerBins = 16.0;
				float dither = ( 0.5 + bayerValue ) / bayerBins;
				if ( dither >= fadeIn ) {

					discard;

				}

				if ( dither < fadeOut ) {

					discard;

				}

				#endif

			`
    ));
  }, t;
}
class jn {
  constructor() {
    this._fadeParams = /* @__PURE__ */ new WeakMap(), this.fading = 0;
  }
  // Set the fade parameters for the given scene
  setFade(e, t, s) {
    if (!e)
      return;
    const i = this._fadeParams;
    e.traverse((n) => {
      const r = n.material;
      if (r && i.has(r)) {
        const o = i.get(r);
        o.fadeIn.value = t, o.fadeOut.value = s;
        const u = +(!(t === 0 || t === 1) || !(s === 0 || s === 1));
        r.defines.FEATURE_FADE !== u && (this.fading += u === 1 ? 1 : -1, r.defines.FEATURE_FADE = u, r.needsUpdate = true);
      }
    });
  }
  // initialize materials in the object
  prepareScene(e) {
    e.traverse((t) => {
      t.material && this.prepareMaterial(t.material);
    });
  }
  // delete the object from the fade, reset the material data
  deleteScene(e) {
    if (!e)
      return;
    this.setFade(e, 1, 0);
    const t = this._fadeParams;
    e.traverse((s) => {
      const i = s.material;
      i && t.delete(i);
    });
  }
  // initialize the material
  prepareMaterial(e) {
    const t = this._fadeParams;
    t.has(e) || t.set(e, ui(e, e.onBeforeCompile));
  }
}
class Wn {
  constructor(e, t = new we()) {
    this.other = e, this.material = t, this.visible = true, this.parent = null, this._instanceInfo = [], this._visibilityChanged = true;
    const s = new Proxy(this, {
      get(i, n) {
        if (n in i)
          return i[n];
        {
          const r = e[n];
          return r instanceof Function ? (...o) => (i.syncInstances(), r.call(s, ...o)) : e[n];
        }
      },
      set(i, n, r) {
        return n in i ? i[n] = r : e[n] = r, true;
      },
      deleteProperty(i, n) {
        return n in i ? delete i[n] : delete e[n];
      }
      // ownKeys() {},
      // has(target, key) {},
      // defineProperty(target, key, descriptor) {},
      // getOwnPropertyDescriptor(target, key) {},
    });
    return s;
  }
  syncInstances() {
    const e = this._instanceInfo, t = this.other._instanceInfo;
    for (; t.length > e.length; ) {
      const s = e.length;
      e.push(new Proxy({ visible: false }, {
        get(i, n) {
          return n in i ? i[n] : t[s][n];
        },
        set(i, n, r) {
          return n in i ? i[n] = r : t[s][n] = r, true;
        }
      }));
    }
  }
}
class qn extends Wn {
  constructor(...e) {
    super(...e);
    const t = this.material, s = ui(t, t.onBeforeCompile);
    t.defines.FEATURE_FADE = 1, t.defines.USE_BATCHING_FRAG = 1, t.needsUpdate = true, this.fadeTexture = null, this._fadeParams = s;
  }
  // Set the fade state
  setFadeAt(e, t, s) {
    this._initFadeTexture(), this.fadeTexture.setValueAt(e, t * 255, s * 255);
  }
  // initialize the texture and resize it if needed
  _initFadeTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = e * e * 2, s = this.fadeTexture;
    if (!s || s.image.data.length !== t) {
      const i = new Uint8Array(t), n = new Xn(i, e, e, Ws, qs);
      if (s) {
        s.dispose();
        const r = s.image.data, o = this.fadeTexture.image.data, a = Math.min(r.length, o.length);
        o.set(new r.constructor(r.buffer, 0, a));
      }
      this.fadeTexture = n, this._fadeParams.fadeTexture.value = n, n.needsUpdate = true;
    }
  }
  // dispose the fade texture. Super cannot be used here due to proxy
  dispose() {
    this.fadeTexture && this.fadeTexture.dispose();
  }
}
class Xn extends Ft {
  setValueAt(e, ...t) {
    const { data: s, width: i, height: n } = this.image, r = Math.floor(s.length / (i * n));
    let o = false;
    for (let a = 0; a < r; a++) {
      const c = e * r + a, u = s[c], h = t[a] || 0;
      u !== h && (s[c] = h, o = true);
    }
    o && (this.needsUpdate = true);
  }
}
const vs = Symbol("HAS_POPPED_IN"), Cs = new I(), Ss = new I(), As = new $s(), Ls = new $s(), Is = new I();
function Yn() {
  const l = this._fadeManager, e = this.tiles;
  this._fadingBefore = l.fadeCount, this._displayActiveTiles = e.displayActiveTiles, e.displayActiveTiles = true;
}
function $n() {
  const l = this._fadeManager, e = this._fadeMaterialManager, t = this._displayActiveTiles, s = this._fadingBefore, i = this._prevCameraTransforms, { tiles: n, maximumFadeOutTiles: r, batchedMesh: o } = this, { cameras: a } = n;
  n.displayActiveTiles = t, l.update();
  const c = l.fadeCount;
  if (s !== 0 && c !== 0 && (n.dispatchEvent({ type: "fade-change" }), n.dispatchEvent({ type: "needs-render" })), t || n.visibleTiles.forEach((u) => {
    const h = u.cached.scene;
    h && (h.visible = u.__inFrustum), this.forEachBatchIds(u, (d, m, p) => {
      m.setVisibleAt(d, u.__inFrustum), p.batchedMesh.setVisibleAt(d, u.__inFrustum);
    });
  }), r < this._fadingOutCount) {
    let u = true;
    a.forEach((h) => {
      if (!i.has(h))
        return;
      const d = h.matrixWorld, m = i.get(h);
      d.decompose(Ss, Ls, Is), m.decompose(Cs, As, Is);
      const p = Ls.angleTo(As), f = Ss.distanceTo(Cs);
      u = u && (p > 0.25 || f > 0.1);
    }), u && l.completeAllFades();
  }
  if (a.forEach((u) => {
    i.get(u).copy(u.matrixWorld);
  }), l.forEachObject((u, { fadeIn: h, fadeOut: d }) => {
    const m = u.cached.scene, p = l.isFadingOut(u);
    n.markTileUsed(u), m && (e.setFade(m, h, d), p && (m.visible = true)), this.forEachBatchIds(u, (f, x, g) => {
      x.setFadeAt(f, h, d), x.setVisibleAt(f, true), g.batchedMesh.setVisibleAt(f, false);
    });
  }), o) {
    const u = n.getPluginByName("BATCHED_TILES_PLUGIN").batchedMesh.material;
    o.material.map = u.map;
  }
}
class Nr {
  get fadeDuration() {
    return this._fadeManager.duration;
  }
  set fadeDuration(e) {
    this._fadeManager.duration = Number(e);
  }
  get fadingTiles() {
    return this._fadeManager.fadeCount;
  }
  constructor(e) {
    e = {
      maximumFadeOutTiles: 50,
      fadeRootTiles: false,
      fadeDuration: 250,
      ...e
    }, this.name = "FADE_TILES_PLUGIN", this.priority = -2, this.tiles = null, this.batchedMesh = null, this._quickFadeTiles = /* @__PURE__ */ new Set(), this._fadeManager = new Hn(), this._fadeMaterialManager = new jn(), this._prevCameraTransforms = null, this._fadingOutCount = 0, this.maximumFadeOutTiles = e.maximumFadeOutTiles, this.fadeRootTiles = e.fadeRootTiles, this.fadeDuration = e.fadeDuration;
  }
  init(e) {
    this._onLoadModel = ({ scene: i }) => {
      this._fadeMaterialManager.prepareScene(i);
    }, this._onDisposeModel = ({ tile: i, scene: n }) => {
      this.tiles.visibleTiles.has(i) && this._quickFadeTiles.add(i.parent), this._fadeManager.deleteObject(i), this._fadeMaterialManager.deleteScene(n);
    }, this._onAddCamera = ({ camera: i }) => {
      this._prevCameraTransforms.set(i, new Q());
    }, this._onDeleteCamera = ({ camera: i }) => {
      this._prevCameraTransforms.delete(i);
    }, this._onTileVisibilityChange = ({ tile: i, visible: n }) => {
      const r = i.cached.scene;
      r && (r.visible = true), this.forEachBatchIds(i, (o, a, c) => {
        a.setFadeAt(o, 0, 0), a.setVisibleAt(o, false), c.batchedMesh.setVisibleAt(o, false);
      });
    }, this._onUpdateBefore = () => {
      Yn.call(this);
    }, this._onUpdateAfter = () => {
      $n.call(this);
    }, e.addEventListener("load-model", this._onLoadModel), e.addEventListener("dispose-model", this._onDisposeModel), e.addEventListener("add-camera", this._onAddCamera), e.addEventListener("delete-camera", this._onDeleteCamera), e.addEventListener("update-before", this._onUpdateBefore), e.addEventListener("update-after", this._onUpdateAfter), e.addEventListener("tile-visibility-change", this._onTileVisibilityChange);
    const t = this._fadeManager;
    t.onFadeSetStart = () => {
      e.dispatchEvent({ type: "fade-start" }), e.dispatchEvent({ type: "needs-render" });
    }, t.onFadeSetComplete = () => {
      e.dispatchEvent({ type: "fade-end" }), e.dispatchEvent({ type: "needs-render" });
    }, t.onFadeComplete = (i, n) => {
      this._fadeMaterialManager.setFade(i.cached.scene, 0, 0), this.forEachBatchIds(i, (r, o, a) => {
        o.setFadeAt(r, 0, 0), o.setVisibleAt(r, false), a.batchedMesh.setVisibleAt(r, n);
      }), n || (e.invokeOnePlugin((r) => r !== this && r.setTileVisible && r.setTileVisible(i, false)), this._fadingOutCount--);
    };
    const s = /* @__PURE__ */ new Map();
    e.cameras.forEach((i) => {
      s.set(i, new Q());
    }), e.forEachLoadedModel((i, n) => {
      this._onLoadModel({ scene: i });
    }), this.tiles = e, this._fadeManager = t, this._prevCameraTransforms = s;
  }
  // initializes the batched mesh if it needs to be, dispose if it it's no longer needed
  initBatchedMesh() {
    var t;
    const e = (t = this.tiles.getPluginByName("BATCHED_TILES_PLUGIN")) == null ? void 0 : t.batchedMesh;
    if (e) {
      if (this.batchedMesh === null) {
        this._onBatchedMeshDispose = () => {
          this.batchedMesh.dispose(), this.batchedMesh.removeFromParent(), this.batchedMesh = null, e.removeEventListener("dispose", this._onBatchedMeshDispose);
        };
        const s = e.material.clone();
        s.onBeforeCompile = e.material.onBeforeCompile, this.batchedMesh = new qn(e, s), this.tiles.group.add(this.batchedMesh);
      }
    } else
      this.batchedMesh !== null && (this._onBatchedMeshDispose(), this._onBatchedMeshDispose = null);
  }
  // callback for fading to prevent tiles from being removed until the fade effect has completed
  setTileVisible(e, t) {
    const s = this._fadeManager, i = s.isFading(e);
    if (s.isFadingOut(e) && this._fadingOutCount--, t ? e.__depthFromRenderedParent === 1 ? ((e[vs] || this.fadeRootTiles) && this._fadeManager.fadeIn(e), e[vs] = true) : this._fadeManager.fadeIn(e) : (this._fadingOutCount++, s.fadeOut(e)), this._quickFadeTiles.has(e) && (this._fadeManager.completeFade(e), this._quickFadeTiles.delete(e)), i)
      return true;
    const n = this._fadeManager.isFading(e);
    return !!(!t && n);
  }
  dispose() {
    const e = this.tiles;
    this._fadeManager.completeAllFades(), this.batchedMesh !== null && this._onBatchedMeshDispose(), e.removeEventListener("load-model", this._onLoadModel), e.removeEventListener("dispose-model", this._onDisposeModel), e.removeEventListener("add-camera", this._onAddCamera), e.removeEventListener("delete-camera", this._onDeleteCamera), e.removeEventListener("update-before", this._onUpdateBefore), e.removeEventListener("update-after", this._onUpdateAfter), e.removeEventListener("tile-visibility-change", this._onTileVisibilityChange), e.forEachLoadedModel((t, s) => {
      this._fadeManager.deleteObject(s), t && (t.visible = true);
    });
  }
  // helper for iterating over the batch ids for a given tile
  forEachBatchIds(e, t) {
    if (this.initBatchedMesh(), this.batchedMesh) {
      const s = this.tiles.getPluginByName("BATCHED_TILES_PLUGIN"), i = s.getTileBatchIds(e);
      i && i.forEach((n) => {
        t(n, this.batchedMesh, s);
      });
    }
  }
}
new Q(); new I(); new I();
new Ee();
new FullScreenQuad(new we()); const hi = new Ft(new Uint8Array([255, 255, 255, 255]), 1, 1);
hi.needsUpdate = true;
new I();

export { Br, Dr, Fr, Nr, Or, Ur };
//# sourceMappingURL=WMTSCapabilitiesLoader-DkTEM3c8.a9yUpBF51767105581793.js.map
