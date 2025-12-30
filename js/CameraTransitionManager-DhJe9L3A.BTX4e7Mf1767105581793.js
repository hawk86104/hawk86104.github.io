import { importShared } from './index.BxB45aCK1767105581793.js';
import { GLTFLoader } from './GLTFLoader.CAD9c_1U1767105581793.js';
import { estimateBytesUsed } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';

class E {
  get unloadPriorityCallback() {
    return this._unloadPriorityCallback;
  }
  set unloadPriorityCallback(t) {
    t.length === 1 ? (console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'), this._unloadPriorityCallback = (a, e) => {
      const s = t(a), n = t(e);
      return s < n ? -1 : s > n ? 1 : 0;
    }) : this._unloadPriorityCallback = t;
  }
  constructor() {
    this.minSize = 6e3, this.maxSize = 8e3, this.minBytesSize = 0.3 * 1073741824, this.maxBytesSize = 0.4 * 1073741824, this.unloadPercent = 0.05, this.autoMarkUnused = true, this.itemSet = /* @__PURE__ */ new Map(), this.itemList = [], this.usedSet = /* @__PURE__ */ new Set(), this.callbacks = /* @__PURE__ */ new Map(), this.unloadingHandle = -1, this.cachedBytes = 0, this.bytesMap = /* @__PURE__ */ new Map(), this.loadedSet = /* @__PURE__ */ new Set(), this._unloadPriorityCallback = null;
    const t = this.itemSet;
    this.defaultPriorityCallback = (a) => t.get(a);
  }
  // Returns whether or not the cache has reached the maximum size
  isFull() {
    return this.itemSet.size >= this.maxSize || this.cachedBytes >= this.maxBytesSize;
  }
  getMemoryUsage(t) {
    return this.bytesMap.get(t) || 0;
  }
  setMemoryUsage(t, a) {
    const { bytesMap: e, itemSet: s } = this;
    s.has(t) && (this.cachedBytes -= e.get(t) || 0, e.set(t, a), this.cachedBytes += a);
  }
  add(t, a) {
    const e = this.itemSet;
    if (e.has(t) || this.isFull())
      return false;
    const s = this.usedSet, n = this.itemList, l = this.callbacks;
    return n.push(t), s.add(t), e.set(t, Date.now()), l.set(t, a), true;
  }
  has(t) {
    return this.itemSet.has(t);
  }
  remove(t) {
    const a = this.usedSet, e = this.itemSet, s = this.itemList, n = this.bytesMap, l = this.callbacks, c = this.loadedSet;
    if (e.has(t)) {
      this.cachedBytes -= n.get(t) || 0, n.delete(t), l.get(t)(t);
      const d = s.indexOf(t);
      return s.splice(d, 1), a.delete(t), e.delete(t), l.delete(t), c.delete(t), true;
    }
    return false;
  }
  // Marks whether tiles in the cache have been completely loaded or not. Tiles that have not been completely
  // loaded are subject to being disposed early if the cache is full above its max size limits, even if they
  // are marked as used.
  setLoaded(t, a) {
    const { itemSet: e, loadedSet: s } = this;
    e.has(t) && (a === true ? s.add(t) : s.delete(t));
  }
  markUsed(t) {
    const a = this.itemSet, e = this.usedSet;
    a.has(t) && !e.has(t) && (a.set(t, Date.now()), e.add(t));
  }
  markUnused(t) {
    this.usedSet.delete(t);
  }
  markAllUnused() {
    this.usedSet.clear();
  }
  // TODO: this should be renamed because it's not necessarily unloading all unused content
  // Maybe call it "cleanup" or "unloadToMinSize"
  unloadUnusedContent() {
    const {
      unloadPercent: t,
      minSize: a,
      maxSize: e,
      itemList: s,
      itemSet: n,
      usedSet: l,
      loadedSet: c,
      callbacks: d,
      bytesMap: u,
      minBytesSize: h,
      maxBytesSize: m
    } = this, y = s.length - l.size, g = s.length - c.size, S = Math.max(Math.min(s.length - a, y), 0), k = this.cachedBytes - h, C = this.unloadPriorityCallback || this.defaultPriorityCallback;
    let f = false;
    const M = S > 0 && y > 0 || g && s.length > e;
    if (y && this.cachedBytes > h || g && this.cachedBytes > m || M) {
      s.sort((i, r) => {
        const p = l.has(i), L = l.has(r);
        if (p === L) {
          const U = c.has(i), T = c.has(r);
          return U === T ? -C(i, r) : U ? 1 : -1;
        } else
          return p ? 1 : -1;
      });
      const P = Math.max(a * t, S * t), B = Math.ceil(Math.min(P, y, S)), A = Math.max(t * k, t * h), w = Math.min(A, k);
      let o = 0, b = 0;
      for (; this.cachedBytes - b > m || s.length - o > e; ) {
        const i = s[o], r = u.get(i) || 0;
        if (l.has(i) && c.has(i) || this.cachedBytes - b - r < m && s.length - o <= e)
          break;
        b += r, o++;
      }
      for (; b < w || o < B; ) {
        const i = s[o], r = u.get(i) || 0;
        if (l.has(i) || this.cachedBytes - b - r < h && o >= B)
          break;
        b += r, o++;
      }
      s.splice(0, o).forEach((i) => {
        this.cachedBytes -= u.get(i) || 0, d.get(i)(i), u.delete(i), n.delete(i), d.delete(i), c.delete(i), l.delete(i);
      }), f = o < S || b < k && o < y, f = f && o > 0;
    }
    f && (this.unloadingHandle = requestAnimationFrame(() => this.scheduleUnload()));
  }
  scheduleUnload() {
    cancelAnimationFrame(this.unloadingHandle), this.scheduled || (this.scheduled = true, queueMicrotask(() => {
      this.scheduled = false, this.unloadUnusedContent();
    }));
  }
}
let G$2 = class G {
  // returns whether tasks are queued or actively running
  get running() {
    return this.items.length !== 0 || this.currJobs !== 0;
  }
  constructor() {
    this.maxJobs = 6, this.items = [], this.callbacks = /* @__PURE__ */ new Map(), this.currJobs = 0, this.scheduled = false, this.autoUpdate = true, this.priorityCallback = null, this.schedulingCallback = (t) => {
      requestAnimationFrame(t);
    }, this._runjobs = () => {
      this.scheduled = false, this.tryRunJobs();
    };
  }
  sort() {
    const t = this.priorityCallback, a = this.items;
    t !== null && a.sort(t);
  }
  has(t) {
    return this.callbacks.has(t);
  }
  add(t, a) {
    const e = {
      callback: a,
      reject: null,
      resolve: null,
      promise: null
    };
    return e.promise = new Promise((s, n) => {
      const l = this.items, c = this.callbacks;
      e.resolve = s, e.reject = n, l.unshift(t), c.set(t, e), this.autoUpdate && this.scheduleJobRun();
    }), e.promise;
  }
  remove(t) {
    const a = this.items, e = this.callbacks, s = a.indexOf(t);
    if (s !== -1) {
      const n = e.get(t);
      n.promise.catch(() => {
      }), n.reject(new Error("PriorityQueue: Item removed.")), a.splice(s, 1), e.delete(t);
    }
  }
  removeByFilter(t) {
    const { items: a } = this;
    for (let e = 0; e < a.length; e++) {
      const s = a[e];
      t(s) && this.remove(s);
    }
  }
  tryRunJobs() {
    this.sort();
    const t = this.items, a = this.callbacks, e = this.maxJobs;
    let s = 0;
    const n = () => {
      this.currJobs--, this.autoUpdate && this.scheduleJobRun();
    };
    for (; e > this.currJobs && t.length > 0 && s < e; ) {
      this.currJobs++, s++;
      const l = t.pop(), { callback: c, resolve: d, reject: u } = a.get(l);
      a.delete(l);
      let h;
      try {
        h = c(l);
      } catch (m) {
        u(m), n();
      }
      h instanceof Promise ? h.then(d).catch(u).finally(n) : (d(h), n());
    }
  }
  scheduleJobRun() {
    this.scheduled || (this.schedulingCallback(this._runjobs), this.scheduled = true);
  }
};
const J$2 = -1, v$2 = 0, _ = 1, I$2 = 2, R$2 = 3, D$2 = 6378137, N$2 = 6356752314245179e-9;

function h(r, e = null, t = null) {
  const n = [];
  for (n.push(r), n.push(null), n.push(0); n.length > 0; ) {
    const o = n.pop(), i = n.pop(), s = n.pop();
    if (e && e(s, i, o)) {
      t && t(s, i, o);
      return;
    }
    const a = s.children;
    if (a)
      for (let l = a.length - 1; l >= 0; l--)
        n.push(a[l]), n.push(s), n.push(o + 1);
    t && t(s, i, o);
  }
}
function d$1(r) {
  if (r === null || r.byteLength < 4)
    return "";
  let e;
  if (r instanceof DataView ? e = r : e = new DataView(r), String.fromCharCode(e.getUint8(0)) === "{")
    return null;
  let t = "";
  for (let n = 0; n < 4; n++)
    t += String.fromCharCode(e.getUint8(n));
  return t;
}
const p$1 = new TextDecoder();
function f$1(r) {
  return p$1.decode(r);
}
function c(r) {
  return r.replace(/[\\/][^\\/]+$/, "") + "/";
}
let y$2 = class y {
  constructor() {
    this.fetchOptions = {}, this.workingPath = "";
  }
  load(...e) {
    return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'), this.loadAsync(...e);
  }
  loadAsync(e) {
    return fetch(e, this.fetchOptions).then((t) => {
      if (!t.ok)
        throw new Error(`Failed to load file "${e}" with status ${t.status} : ${t.statusText}`);
      return t.arrayBuffer();
    }).then((t) => (this.workingPath === "" && (this.workingPath = c(e)), this.parse(t)));
  }
  resolveExternalURL(e) {
    return new URL(e, this.workingPath).href;
  }
  parse(e) {
    throw new Error("LoaderBase: Parse not implemented.");
  }
};

function V$1(s) {
  if (!s)
    return null;
  let e = s.length;
  const t = s.indexOf("?"), n = s.indexOf("#");
  t !== -1 && (e = Math.min(e, t)), n !== -1 && (e = Math.min(e, n));
  const r = s.lastIndexOf(".", e), a = s.lastIndexOf("/", e), o = s.indexOf("://");
  return o !== -1 && o + 2 === a || r === -1 || r < a ? null : s.substring(r + 1, e) || null;
}
const w = {
  inView: false,
  error: 1 / 0,
  distanceFromCamera: 1 / 0
}, H$2 = true;
function q$1(s) {
  return s === R$2 || s === J$2;
}
function b$1(s, e) {
  return s.__lastFrameVisited === e && s.__used;
}
function D$1(s) {
  return s.__childrenProcessed === s.children.length;
}
function k$2(s, e) {
  s.__lastFrameVisited !== e.frameCount && (s.__lastFrameVisited = e.frameCount, s.__used = false, s.__inFrustum = false, s.__isLeaf = false, s.__visible = false, s.__active = false, s.__error = 1 / 0, s.__distanceFromCamera = 1 / 0, s.__allChildrenLoaded = false, e.calculateTileViewError(s, w), s.__inFrustum = w.inView, s.__error = w.error, s.__distanceFromCamera = w.distanceFromCamera);
}
function $$2(s, e) {
  if (e.ensureChildrenArePreprocessed(s), k$2(s, e), R$1(s, e), s.__hasUnrenderableContent && D$1(s)) {
    const t = s.children;
    for (let n = 0, r = t.length; n < r; n++)
      $$2(t[n], e);
  }
}
function J$1(s, e) {
  if (e.ensureChildrenArePreprocessed(s), b$1(s, e.frameCount) && (s.__hasContent && e.queueTileForDownload(s), D$1(s))) {
    const t = s.children;
    for (let n = 0, r = t.length; n < r; n++)
      J$1(t[n], e);
  }
}
function R$1(s, e) {
  s.__used || (s.__used = true, e.markTileUsed(s), e.stats.used++, s.__inFrustum === true && e.stats.inFrustum++);
}
function te$1(s, e) {
  return !(s.__error <= e.errorTarget && !s.__hasUnrenderableContent || e.maxDepth > 0 && s.__depth + 1 >= e.maxDepth || !D$1(s));
}
function j$1(s, e) {
  if (e.ensureChildrenArePreprocessed(s), k$2(s, e), !s.__inFrustum)
    return;
  if (!te$1(s, e)) {
    R$1(s, e);
    return;
  }
  let t = false, n = false;
  const r = s.children;
  for (let a = 0, o = r.length; a < o; a++) {
    const c = r[a];
    j$1(c, e), t = t || b$1(c, e.frameCount), n = n || c.__inFrustum;
  }
  if (R$1(s, e), t && s.refine === "REPLACE" && (s.__depth !== 0 || H$2))
    for (let a = 0, o = r.length; a < o; a++) {
      const c = r[a];
      $$2(c, e);
    }
}
function W$2(s, e) {
  const t = e.frameCount;
  if (!b$1(s, t))
    return;
  const n = s.children;
  let r = false;
  for (let a = 0, o = n.length; a < o; a++) {
    const c = n[a];
    r = r || b$1(c, t);
  }
  if (!r)
    s.__isLeaf = true;
  else {
    let a = true;
    for (let o = 0, c = n.length; o < c; o++) {
      const i = n[o];
      if (W$2(i, e), b$1(i, t)) {
        const d = i.__allChildrenLoaded || !i.__hasContent || i.__hasRenderableContent && q$1(i.__loadingState) || i.__hasUnrenderableContent && i.__loadingState === J$2;
        a = a && d;
      }
    }
    s.__allChildrenLoaded = a;
  }
}
function z(s, e) {
  const t = e.stats;
  if (!b$1(s, e.frameCount))
    return;
  if (s.__isLeaf) {
    s.__loadingState === R$2 ? (s.__inFrustum && (s.__visible = true, t.visible++), s.__active = true, t.active++) : s.__hasContent && e.queueTileForDownload(s);
    return;
  }
  const n = s.children, r = s.__hasContent, a = q$1(s.__loadingState) && r, o = (e.errorTarget + 1) * e.errorThreshold, c = s.__error <= o, i = s.refine === "ADD", d = s.__allChildrenLoaded || s.__depth === 0 && !H$2;
  if (r && (c || i) && e.queueTileForDownload(s), (c && a && !d || a && i) && (s.__inFrustum && (s.__visible = true, t.visible++), s.__active = true, t.active++), !i && c && !d)
    for (let h = 0, u = n.length; h < u; h++) {
      const _ = n[h];
      b$1(_, e.frameCount) && J$1(_, e);
    }
  else
    for (let h = 0, u = n.length; h < u; h++)
      z(n[h], e);
}
function K$1(s, e) {
  const t = b$1(s, e.frameCount);
  if (t || s.__usedLastFrame) {
    let n = false, r = false;
    t ? (n = s.__active, e.displayActiveTiles ? r = s.__active || s.__visible : r = s.__visible) : k$2(s, e), s.__hasRenderableContent && s.__loadingState === R$2 && (s.__wasSetActive !== n && e.invokeOnePlugin((o) => o.setTileActive && o.setTileActive(s, n)), s.__wasSetVisible !== r && e.invokeOnePlugin((o) => o.setTileVisible && o.setTileVisible(s, r))), s.__wasSetActive = n, s.__wasSetVisible = r, s.__usedLastFrame = t;
    const a = s.children;
    for (let o = 0, c = a.length; o < c; o++) {
      const i = a[o];
      K$1(i, e);
    }
  }
}
function se$1(s) {
  let e = null;
  return () => {
    e === null && (e = requestAnimationFrame(() => {
      e = null, s();
    }));
  };
}
const G$1 = Symbol("PLUGIN_REGISTERED"), M$1 = (s, e) => {
  const t = s.priority || 0, n = e.priority || 0;
  return t !== n ? t > n ? 1 : -1 : s.__used !== e.__used ? s.__used ? 1 : -1 : s.__error !== e.__error ? s.__error > e.__error ? 1 : -1 : s.__distanceFromCamera !== e.__distanceFromCamera ? s.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : s.__depthFromRenderedParent !== e.__depthFromRenderedParent ? s.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : 0;
}, ne$1 = (s, e) => {
  const t = s.priority || 0, n = e.priority || 0;
  return t !== n ? t > n ? 1 : -1 : s.__lastFrameVisited !== e.__lastFrameVisited ? s.__lastFrameVisited > e.__lastFrameVisited ? -1 : 1 : s.__depthFromRenderedParent !== e.__depthFromRenderedParent ? s.__depthFromRenderedParent > e.__depthFromRenderedParent ? 1 : -1 : s.__loadingState !== e.__loadingState ? s.__loadingState > e.__loadingState ? -1 : 1 : s.__hasUnrenderableContent !== e.__hasUnrenderableContent ? s.__hasUnrenderableContent ? -1 : 1 : s.__error !== e.__error ? s.__error > e.__error ? -1 : 1 : 0;
};
let ie$1 = class ie {
  get root() {
    const e = this.rootTileSet;
    return e ? e.root : null;
  }
  get loadProgress() {
    const { stats: e, isLoading: t } = this, n = e.downloading + e.parsing, r = e.inCacheSinceLoad + (t ? 1 : 0);
    return r === 0 ? 1 : 1 - n / r;
  }
  get errorThreshold() {
    return this._errorThreshold;
  }
  set errorThreshold(e) {
    console.warn('TilesRenderer: The "errorThreshold" option has been deprecated.'), this._errorThreshold = e;
  }
  constructor(e = null) {
    this.rootLoadingState = v$2, this.rootTileSet = null, this.rootURL = e, this.fetchOptions = {}, this.plugins = [], this.queuedTiles = [], this.cachedSinceLoadComplete = /* @__PURE__ */ new Set(), this.isLoading = false;
    const t = new E();
    t.unloadPriorityCallback = ne$1;
    const n = new G$2();
    n.maxJobs = 25, n.priorityCallback = M$1;
    const r = new G$2();
    r.maxJobs = 5, r.priorityCallback = M$1;
    const a = new G$2();
    a.maxJobs = 25, this.processedTiles = /* @__PURE__ */ new WeakSet(), this.visibleTiles = /* @__PURE__ */ new Set(), this.activeTiles = /* @__PURE__ */ new Set(), this.usedSet = /* @__PURE__ */ new Set(), this.lruCache = t, this.downloadQueue = n, this.parseQueue = r, this.processNodeQueue = a, this.stats = {
      inCacheSinceLoad: 0,
      inCache: 0,
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0, this._dispatchNeedsUpdateEvent = se$1(() => {
      this.dispatchEvent({ type: "needs-update" });
    }), this.errorTarget = 16, this._errorThreshold = 1 / 0, this.displayActiveTiles = false, this.maxDepth = 1 / 0;
  }
  // Plugins
  registerPlugin(e) {
    if (e[G$1] === true)
      throw new Error("TilesRendererBase: A plugin can only be registered to a single tile set");
    const t = this.plugins, n = e.priority || 0;
    let r = t.length;
    for (let a = 0; a < t.length; a++)
      if ((t[a].priority || 0) > n) {
        r = a;
        break;
      }
    t.splice(r, 0, e), e[G$1] = true, e.init && e.init(this);
  }
  unregisterPlugin(e) {
    const t = this.plugins;
    if (typeof e == "string" && (e = this.getPluginByName(name)), t.includes(e)) {
      const n = t.indexOf(e);
      return t.splice(n, 1), e.dispose && e.dispose(), true;
    }
    return false;
  }
  getPluginByName(e) {
    return this.plugins.find((t) => t.name === e) || null;
  }
  traverse(e, t, n = true) {
    this.root && h(this.root, (r, ...a) => (n && this.ensureChildrenArePreprocessed(r, true), e ? e(r, ...a) : false), t);
  }
  queueTileForDownload(e) {
    e.__loadingState !== v$2 || this.lruCache.isFull() || this.queuedTiles.push(e);
  }
  markTileUsed(e) {
    this.usedSet.add(e), this.lruCache.markUsed(e);
  }
  // Public API
  update() {
    const { lruCache: e, usedSet: t, stats: n, root: r, downloadQueue: a, parseQueue: o, processNodeQueue: c } = this;
    if (this.rootLoadingState === v$2 && (this.rootLoadingState = _, this.invokeOnePlugin((h) => h.loadRootTileSet && h.loadRootTileSet()).then((h) => {
      let u = this.rootURL;
      u !== null && this.invokeAllPlugins((_) => u = _.preprocessURL ? _.preprocessURL(u, null) : u), this.rootLoadingState = R$2, this.rootTileSet = h, this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), this.dispatchEvent({
        type: "load-tile-set",
        tileSet: h,
        url: u
      });
    }).catch((h) => {
      this.rootLoadingState = J$2, console.error(h), this.rootTileSet = null, this.dispatchEvent({
        type: "load-error",
        tile: null,
        error: h,
        url: this.rootURL
      });
    })), !r)
      return;
    n.inFrustum = 0, n.used = 0, n.active = 0, n.visible = 0, this.frameCount++, t.forEach((h) => e.markUnused(h)), t.clear(), j$1(r, this), W$2(r, this), z(r, this), K$1(r, this);
    const i = this.queuedTiles;
    i.sort(e.unloadPriorityCallback);
    for (let h = 0, u = i.length; h < u && !e.isFull(); h++)
      this.requestTileContents(i[h]);
    i.length = 0, e.scheduleUnload(), (a.running || o.running || c.running) === false && this.isLoading === true && (this.cachedSinceLoadComplete.clear(), n.inCacheSinceLoad = 0, this.dispatchEvent({ type: "tiles-load-end" }), this.isLoading = false);
  }
  resetFailedTiles() {
    this.rootLoadingState === J$2 && (this.rootLoadingState = v$2);
    const e = this.stats;
    e.failed !== 0 && (this.traverse((t) => {
      t.__loadingState === J$2 && (t.__loadingState = v$2);
    }, null, false), e.failed = 0);
  }
  dispose() {
    [...this.plugins].forEach((r) => {
      this.unregisterPlugin(r);
    });
    const t = this.lruCache, n = [];
    this.traverse((r) => (n.push(r), false), null, false);
    for (let r = 0, a = n.length; r < a; r++)
      t.remove(n[r]);
    this.stats = {
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0;
  }
  // Overrideable
  calculateBytesUsed(e, t) {
    return 0;
  }
  dispatchEvent(e) {
  }
  fetchData(e, t) {
    return fetch(e, t);
  }
  parseTile(e, t, n) {
    return null;
  }
  disposeTile(e) {
    e.__visible && (this.invokeOnePlugin((t) => t.setTileVisible && t.setTileVisible(e, false)), e.__visible = false), e.__active && (this.invokeOnePlugin((t) => t.setTileActive && t.setTileActive(e, false)), e.__active = false);
  }
  preprocessNode(e, t, n = null) {
    var r;
    if (this.processedTiles.add(e), e.content && (!("uri" in e.content) && "url" in e.content && (e.content.uri = e.content.url, delete e.content.url), e.content.boundingVolume && !("box" in e.content.boundingVolume || "sphere" in e.content.boundingVolume || "region" in e.content.boundingVolume) && delete e.content.boundingVolume), e.parent = n, e.children = e.children || [], (r = e.content) != null && r.uri) {
      const a = V$1(e.content.uri);
      e.__hasContent = true, e.__hasUnrenderableContent = !!(a && /json$/.test(a)), e.__hasRenderableContent = !e.__hasUnrenderableContent;
    } else
      e.__hasContent = false, e.__hasUnrenderableContent = false, e.__hasRenderableContent = false;
    e.__childrenProcessed = 0, n && n.__childrenProcessed++, e.__distanceFromCamera = 1 / 0, e.__error = 1 / 0, e.__inFrustum = false, e.__isLeaf = false, e.__usedLastFrame = false, e.__used = false, e.__wasSetVisible = false, e.__visible = false, e.__allChildrenLoaded = false, e.__wasSetActive = false, e.__active = false, e.__loadingState = v$2, n === null ? (e.__depth = 0, e.__depthFromRenderedParent = e.__hasRenderableContent ? 1 : 0, e.refine = e.refine || "REPLACE") : (e.__depth = n.__depth + 1, e.__depthFromRenderedParent = n.__depthFromRenderedParent + (e.__hasRenderableContent ? 1 : 0), e.refine = e.refine || n.refine), e.__basePath = t, e.__lastFrameVisited = -1, this.invokeAllPlugins((a) => {
      a !== this && a.preprocessNode && a.preprocessNode(e, t, n);
    });
  }
  setTileActive(e, t) {
    t ? this.activeTiles.add(e) : this.activeTiles.delete(e);
  }
  setTileVisible(e, t) {
    t ? this.visibleTiles.add(e) : this.visibleTiles.delete(e);
  }
  calculateTileViewError(e, t) {
  }
  ensureChildrenArePreprocessed(e, t = false) {
    const n = e.children;
    for (let r = 0, a = n.length; r < a; r++) {
      const o = n[r];
      if ("__depth" in o)
        break;
      t ? (this.processNodeQueue.remove(o), this.preprocessNode(o, e.__basePath, e)) : this.processNodeQueue.has(o) || this.processNodeQueue.add(o, (c) => {
        this.preprocessNode(c, e.__basePath, e), this._dispatchNeedsUpdateEvent();
      });
    }
  }
  // Private Functions
  // returns the total bytes used for by the given tile as reported by all plugins
  getBytesUsed(e) {
    let t = 0;
    return this.invokeAllPlugins((n) => {
      n.calculateBytesUsed && (t += n.calculateBytesUsed(e, e.cached.scene) || 0);
    }), t;
  }
  // force a recalculation of the tile or all tiles if no tile is provided
  recalculateBytesUsed(e = null) {
    const { lruCache: t, processedTiles: n } = this;
    e === null ? t.itemSet.forEach((r) => {
      n.has(r) && t.setMemoryUsage(r, this.getBytesUsed(r));
    }) : t.setMemoryUsage(e, this.getBytesUsed(e));
  }
  preprocessTileSet(e, t, n = null) {
    const r = e.asset.version, [a, o] = r.split(".").map((i) => parseInt(i));
    console.assert(
      a <= 1,
      "TilesRenderer: asset.version is expected to be a 1.x or a compatible version."
    ), a === 1 && o > 0 && console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");
    let c = t.replace(/\/[^/]*$/, "");
    c = new URL(c, window.location.href).toString(), this.preprocessNode(e.root, c, n);
  }
  loadRootTileSet() {
    let e = this.rootURL;
    return this.invokeAllPlugins((n) => e = n.preprocessURL ? n.preprocessURL(e, null) : e), this.invokeOnePlugin((n) => n.fetchData && n.fetchData(e, this.fetchOptions)).then((n) => {
      if (n instanceof Response) {
        if (n.ok)
          return n.json();
        throw new Error(`TilesRenderer: Failed to load tileset "${e}" with status ${n.status} : ${n.statusText}`);
      } else return n;
    }).then((n) => (this.preprocessTileSet(n, e), n));
  }
  requestTileContents(e) {
    if (e.__loadingState !== v$2)
      return;
    let t = false, n = null, r = new URL(e.content.uri, e.__basePath + "/").toString();
    this.invokeAllPlugins((l) => r = l.preprocessURL ? l.preprocessURL(r, e) : r);
    const a = this.stats, o = this.lruCache, c = this.downloadQueue, i = this.parseQueue, d = V$1(r), h = new AbortController(), u = h.signal;
    if (o.add(e, (l) => {
      h.abort(), t ? (l.children.length = 0, l.__childrenProcessed = 0) : this.invokeAllPlugins((f) => {
        f.disposeTile && f.disposeTile(l);
      }), a.inCache--, this.cachedSinceLoadComplete.has(e) && (this.cachedSinceLoadComplete.delete(e), a.inCacheSinceLoad--), l.__loadingState === _ ? a.downloading-- : l.__loadingState === I$2 && a.parsing--, l.__loadingState = v$2, i.remove(l), c.remove(l);
    }))
      return this.isLoading || (this.isLoading = true, this.dispatchEvent({ type: "tiles-load-start" })), o.setMemoryUsage(e, this.getBytesUsed(e)), this.cachedSinceLoadComplete.add(e), a.inCacheSinceLoad++, a.inCache++, a.downloading++, e.__loadingState = _, c.add(e, (l) => {
        if (u.aborted)
          return Promise.resolve();
        const f = this.invokeOnePlugin((g) => g.fetchData && g.fetchData(r, { ...this.fetchOptions, signal: u }));
        return this.dispatchEvent({ type: "tile-download-start", tile: e }), f;
      }).then((l) => {
        if (!u.aborted)
          if (l instanceof Response) {
            if (l.ok)
              return d === "json" ? l.json() : l.arrayBuffer();
            throw new Error(`Failed to load model with error code ${l.status}`);
          } else return l;
      }).then((l) => {
        if (!u.aborted)
          return a.downloading--, a.parsing++, e.__loadingState = I$2, i.add(e, (f) => u.aborted ? Promise.resolve() : d === "json" && l.root ? (this.preprocessTileSet(l, r, e), e.children.push(l.root), n = l, t = true, Promise.resolve()) : this.invokeOnePlugin((g) => g.parseTile && g.parseTile(l, f, d, r, u)));
      }).then(() => {
        if (u.aborted)
          return;
        a.parsing--, e.__loadingState = R$2, o.setLoaded(e, true);
        const l = this.getBytesUsed(e);
        if (o.getMemoryUsage(e) === 0 && l > 0 && o.isFull()) {
          o.remove(e);
          return;
        }
        o.setMemoryUsage(e, l), this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), t && this.dispatchEvent({
          type: "load-tile-set",
          tileSet: n,
          url: r
        }), e.cached.scene && this.dispatchEvent({
          type: "load-model",
          scene: e.cached.scene,
          tile: e
        });
      }).catch((l) => {
        u.aborted || (l.name !== "AbortError" ? (i.remove(e), c.remove(e), e.__loadingState === I$2 ? a.parsing-- : e.__loadingState === _ && a.downloading--, a.failed++, console.error(`TilesRenderer : Failed to load tile at url "${e.content.uri}".`), console.error(l), e.__loadingState = J$2, o.setLoaded(e, true), this.dispatchEvent({
          type: "load-error",
          tile: e,
          error: l,
          url: r
        })) : o.remove(e));
      });
  }
  getAttributions(e = []) {
    return this.invokeAllPlugins((t) => t !== this && t.getAttributions && t.getAttributions(e)), e;
  }
  invokeOnePlugin(e) {
    const t = [...this.plugins, this];
    for (let n = 0; n < t.length; n++) {
      const r = e(t[n]);
      if (r)
        return r;
    }
    return null;
  }
  invokeAllPlugins(e) {
    const t = [...this.plugins, this], n = [];
    for (let r = 0; r < t.length; r++) {
      const a = e(t[r]);
      a && n.push(a);
    }
    return n.length === 0 ? null : Promise.all(n);
  }
};
function Y$2(s, e, t, n, r, a) {
  let o;
  switch (n) {
    case "SCALAR":
      o = 1;
      break;
    case "VEC2":
      o = 2;
      break;
    case "VEC3":
      o = 3;
      break;
    case "VEC4":
      o = 4;
      break;
    default:
      throw new Error(`FeatureTable : Feature type not provided for "${a}".`);
  }
  let c;
  const i = t * o;
  switch (r) {
    case "BYTE":
      c = new Int8Array(s, e, i);
      break;
    case "UNSIGNED_BYTE":
      c = new Uint8Array(s, e, i);
      break;
    case "SHORT":
      c = new Int16Array(s, e, i);
      break;
    case "UNSIGNED_SHORT":
      c = new Uint16Array(s, e, i);
      break;
    case "INT":
      c = new Int32Array(s, e, i);
      break;
    case "UNSIGNED_INT":
      c = new Uint32Array(s, e, i);
      break;
    case "FLOAT":
      c = new Float32Array(s, e, i);
      break;
    case "DOUBLE":
      c = new Float64Array(s, e, i);
      break;
    default:
      throw new Error(`FeatureTable : Feature component type not provided for "${a}".`);
  }
  return c;
}
class P {
  constructor(e, t, n, r) {
    this.buffer = e, this.binOffset = t + n, this.binLength = r;
    let a = null;
    if (n !== 0) {
      const o = new Uint8Array(e, t, n);
      a = JSON.parse(f$1(o));
    } else
      a = {};
    this.header = a;
  }
  getKeys() {
    return Object.keys(this.header).filter((e) => e !== "extensions");
  }
  getData(e, t, n = null, r = null) {
    const a = this.header;
    if (!(e in a))
      return null;
    const o = a[e];
    if (o instanceof Object) {
      if (Array.isArray(o))
        return o;
      {
        const { buffer: c, binOffset: i, binLength: d } = this, h = o.byteOffset || 0, u = o.type || r, _ = o.componentType || n;
        if ("type" in o && r && o.type !== r)
          throw new Error("FeatureTable: Specified type does not match expected type.");
        const l = i + h, f = Y$2(c, l, t, u, _, e);
        if (l + f.byteLength > i + d)
          throw new Error("FeatureTable: Feature data read outside binary body length.");
        return f;
      }
    } else return o;
  }
  getBuffer(e, t) {
    const { buffer: n, binOffset: r } = this;
    return n.slice(r + e, r + e + t);
  }
}
let re$1 = class re {
  constructor(e) {
    this.batchTable = e;
    const t = e.header.extensions["3DTILES_batch_table_hierarchy"];
    this.classes = t.classes;
    for (const r of this.classes) {
      const a = r.instances;
      for (const o in a)
        r.instances[o] = this._parseProperty(a[o], r.length, o);
    }
    if (this.instancesLength = t.instancesLength, this.classIds = this._parseProperty(t.classIds, this.instancesLength, "classIds"), t.parentCounts ? this.parentCounts = this._parseProperty(t.parentCounts, this.instancesLength, "parentCounts") : this.parentCounts = new Array(this.instancesLength).fill(1), t.parentIds) {
      const r = this.parentCounts.reduce((a, o) => a + o, 0);
      this.parentIds = this._parseProperty(t.parentIds, r, "parentIds");
    } else
      this.parentIds = null;
    this.instancesIds = [];
    const n = {};
    for (const r of this.classIds)
      n[r] = n[r] ?? 0, this.instancesIds.push(n[r]), n[r]++;
  }
  _parseProperty(e, t, n) {
    if (Array.isArray(e))
      return e;
    {
      const { buffer: r, binOffset: a } = this.batchTable, o = e.byteOffset, c = e.componentType || "UNSIGNED_SHORT", i = a + o;
      return Y$2(r, i, t, "SCALAR", c, n);
    }
  }
  getDataFromId(e, t = {}) {
    const n = this.parentCounts[e];
    if (this.parentIds && n > 0) {
      let i = 0;
      for (let d = 0; d < e; d++)
        i += this.parentCounts[d];
      for (let d = 0; d < n; d++) {
        const h = this.parentIds[i + d];
        h !== e && this.getDataFromId(h, t);
      }
    }
    const r = this.classIds[e], a = this.classes[r].instances, o = this.classes[r].name, c = this.instancesIds[e];
    for (const i in a)
      t[o] = t[o] || {}, t[o][i] = a[i][c];
    return t;
  }
};
let x$1 = class x extends P {
  get batchSize() {
    return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."), this.count;
  }
  constructor(e, t, n, r, a) {
    super(e, n, r, a), this.count = t, this.extensions = {};
    const o = this.header.extensions;
    o && o["3DTILES_batch_table_hierarchy"] && (this.extensions["3DTILES_batch_table_hierarchy"] = new re$1(this));
  }
  getData(e, t = null, n = null) {
    return console.warn("BatchTable: BatchTable.getData is deprecated. Use BatchTable.getDataFromId to get allproperties for an id or BatchTable.getPropertyArray for getting an array of value for a property."), super.getData(e, this.count, t, n);
  }
  getDataFromId(e, t = {}) {
    if (e < 0 || e >= this.count)
      throw new Error(`BatchTable: id value "${e}" out of bounds for "${this.count}" features number.`);
    for (const n of this.getKeys())
      t[n] = super.getData(n, this.count)[e];
    for (const n in this.extensions) {
      const r = this.extensions[n];
      r.getDataFromId instanceof Function && (t[n] = t[n] || {}, r.getDataFromId(e, t[n]));
    }
    return t;
  }
  getPropertyArray(e) {
    return super.getData(e, this.count);
  }
};
let ce$1 = class ce extends y$2 {
  parse(e) {
    const t = new DataView(e), n = d$1(t);
    console.assert(n === "b3dm");
    const r = t.getUint32(4, true);
    console.assert(r === 1);
    const a = t.getUint32(8, true);
    console.assert(a === e.byteLength);
    const o = t.getUint32(12, true), c = t.getUint32(16, true), i = t.getUint32(20, true), d = t.getUint32(24, true), h = 28, u = e.slice(
      h,
      h + o + c
    ), _ = new P(
      u,
      0,
      o,
      c
    ), l = h + o + c, f = e.slice(
      l,
      l + i + d
    ), g = new x$1(
      f,
      _.getData("BATCH_LENGTH"),
      0,
      i,
      d
    ), S = l + i + d, C = new Uint8Array(e, S, a - S);
    return {
      version: r,
      featureTable: _,
      batchTable: g,
      glbBytes: C
    };
  }
};
let le$1 = class le extends y$2 {
  parse(e) {
    const t = new DataView(e), n = d$1(t);
    console.assert(n === "i3dm");
    const r = t.getUint32(4, true);
    console.assert(r === 1);
    const a = t.getUint32(8, true);
    console.assert(a === e.byteLength);
    const o = t.getUint32(12, true), c$1 = t.getUint32(16, true), i = t.getUint32(20, true), d = t.getUint32(24, true), h = t.getUint32(28, true), u = 32, _ = e.slice(
      u,
      u + o + c$1
    ), l = new P(
      _,
      0,
      o,
      c$1
    ), f = u + o + c$1, g = e.slice(
      f,
      f + i + d
    ), S = new x$1(
      g,
      l.getData("INSTANCES_LENGTH"),
      0,
      i,
      d
    ), C = f + i + d, N = new Uint8Array(e, C, a - C);
    let F = null, I = null, O = null;
    if (h)
      F = N, I = Promise.resolve();
    else {
      const A = this.resolveExternalURL(f$1(N));
      O = c(A), I = fetch(A, this.fetchOptions).then((m) => {
        if (!m.ok)
          throw new Error(`I3DMLoaderBase : Failed to load file "${A}" with status ${m.status} : ${m.statusText}`);
        return m.arrayBuffer();
      }).then((m) => {
        F = new Uint8Array(m);
      });
    }
    return I.then(() => ({
      version: r,
      featureTable: l,
      batchTable: S,
      glbBytes: F,
      gltfWorkingPath: O
    }));
  }
};
let he$1 = class he extends y$2 {
  parse(e) {
    const t = new DataView(e), n = d$1(t);
    console.assert(n === "pnts");
    const r = t.getUint32(4, true);
    console.assert(r === 1);
    const a = t.getUint32(8, true);
    console.assert(a === e.byteLength);
    const o = t.getUint32(12, true), c = t.getUint32(16, true), i = t.getUint32(20, true), d = t.getUint32(24, true), h = 28, u = e.slice(
      h,
      h + o + c
    ), _ = new P(
      u,
      0,
      o,
      c
    ), l = h + o + c, f = e.slice(
      l,
      l + i + d
    ), g = new x$1(
      f,
      _.getData("BATCH_LENGTH") || _.getData("POINTS_LENGTH"),
      0,
      i,
      d
    );
    return Promise.resolve({
      version: r,
      featureTable: _,
      batchTable: g
    });
  }
};
let de$1 = class de extends y$2 {
  parse(e) {
    const t = new DataView(e), n = d$1(t);
    console.assert(n === "cmpt", 'CMPTLoader: The magic bytes equal "cmpt".');
    const r = t.getUint32(4, true);
    console.assert(r === 1, 'CMPTLoader: The version listed in the header is "1".');
    const a = t.getUint32(8, true);
    console.assert(a === e.byteLength, "CMPTLoader: The contents buffer length listed in the header matches the file.");
    const o = t.getUint32(12, true), c = [];
    let i = 16;
    for (let d = 0; d < o; d++) {
      const h = new DataView(e, i, 12), u = d$1(h), _ = h.getUint32(4, true), l = h.getUint32(8, true), f = new Uint8Array(e, i, l);
      c.push({
        type: u,
        buffer: f,
        version: _
      }), i += l;
    }
    return {
      version: r,
      tiles: c
    };
  }
};

const ft$1 = await importShared('three');

const {MathUtils:x,Spherical:ht$1,Vector3:m,Matrix4:A$1,Sphere:xt$1,Ray:mt$1,Euler:Pt$1,Box3:Mt$1,Plane:gt$1} = await importShared('three');
new ht$1(); new m();
function pt$1(a) {
  const { x: t, y: e, z: o } = a;
  a.x = o, a.y = t, a.z = e;
}
function W$1(a) {
  return -a + Math.PI / 2;
}
const ot$1 = new ht$1(), F$1 = new m(), p = new m(), Y$1 = new m(), y$1 = new A$1(), f = new A$1(), nt$1 = new A$1(), Z = new xt$1(), u = new Pt$1(), st$1 = new m(), it = new m(), rt$1 = new m(), T$1 = new m(), O$1 = new mt$1(), Tt$1 = 1e-12, Rt$1 = 0.1, U$1 = 0, at$1 = 1, j = 2;
let zt$1 = class zt {
  constructor(t = 1, e = 1, o = 1) {
    this.name = "", this.radius = new m(t, e, o);
  }
  intersectRay(t, e) {
    return y$1.makeScale(...this.radius).invert(), Z.center.set(0, 0, 0), Z.radius = 1, O$1.copy(t).applyMatrix4(y$1), O$1.intersectSphere(Z, e) ? (y$1.makeScale(...this.radius), e.applyMatrix4(y$1), e) : null;
  }
  // returns a frame with Z indicating altitude, Y pointing north, X pointing east
  getEastNorthUpFrame(t, e, o, s) {
    return o.isMatrix4 && (s = o, o = 0, console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')), this.getEastNorthUpAxes(t, e, st$1, it, rt$1), this.getCartographicToPosition(t, e, o, T$1), s.makeBasis(st$1, it, rt$1).setPosition(T$1);
  }
  // returns a frame with z indicating altitude and az, el, roll rotation within that frame
  // - azimuth: measured off of true north, increasing towards "east" (z-axis)
  // - elevation: measured off of the horizon, increasing towards sky (x-axis)
  // - roll: rotation around northern axis (y-axis)
  getOrientedEastNorthUpFrame(t, e, o, s, n, i, r) {
    return this.getObjectFrame(t, e, o, s, n, i, r, U$1);
  }
  // returns a frame similar to the ENU frame but rotated to match three.js object and camera conventions
  // OBJECT_FRAME: oriented such that "+Y" is up and "+Z" is forward.
  // CAMERA_FRAME: oriented such that "+Y" is up and "-Z" is forward.
  getObjectFrame(t, e, o, s, n, i, r, c = j) {
    return this.getEastNorthUpFrame(t, e, o, y$1), u.set(n, i, -s, "ZXY"), r.makeRotationFromEuler(u).premultiply(y$1), c === at$1 ? (u.set(Math.PI / 2, 0, 0, "XYZ"), f.makeRotationFromEuler(u), r.multiply(f)) : c === j && (u.set(-Math.PI / 2, 0, Math.PI, "XYZ"), f.makeRotationFromEuler(u), r.multiply(f)), r;
  }
  getCartographicFromObjectFrame(t, e, o = j) {
    return o === at$1 ? (u.set(-Math.PI / 2, 0, 0, "XYZ"), f.makeRotationFromEuler(u).premultiply(t)) : o === j ? (u.set(-Math.PI / 2, 0, Math.PI, "XYZ"), f.makeRotationFromEuler(u).premultiply(t)) : f.copy(t), T$1.setFromMatrixPosition(f), this.getPositionToCartographic(T$1, e), this.getEastNorthUpFrame(e.lat, e.lon, 0, y$1).invert(), f.premultiply(y$1), u.setFromRotationMatrix(f, "ZXY"), e.azimuth = -u.z, e.elevation = u.x, e.roll = u.y, e;
  }
  getEastNorthUpAxes(t, e, o, s, n, i = T$1) {
    this.getCartographicToPosition(t, e, 0, i), this.getCartographicToNormal(t, e, n), o.set(-i.y, i.x, 0).normalize(), s.crossVectors(n, o).normalize();
  }
  // azimuth: measured off of true north, increasing towards "east"
  // elevation: measured off of the horizon, increasing towards sky
  // roll: rotation around northern axis
  getAzElRollFromRotationMatrix(t, e, o, s, n = U$1) {
    return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'), this.getCartographicToPosition(t, e, 0, T$1), nt$1.copy(o).setPosition(T$1), this.getCartographicFromObjectFrame(nt$1, s, n), delete s.height, delete s.lat, delete s.lon, s;
  }
  getRotationMatrixFromAzElRoll(t, e, o, s, n, i, r = U$1) {
    return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(t, e, 0, o, s, n, i, r), i.setPosition(0, 0, 0), i;
  }
  getFrame(t, e, o, s, n, i, r, c = U$1) {
    return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(t, e, i, o, s, n, r, c);
  }
  getCartographicToPosition(t, e, o, s) {
    this.getCartographicToNormal(t, e, F$1);
    const n = this.radius;
    p.copy(F$1), p.x *= n.x ** 2, p.y *= n.y ** 2, p.z *= n.z ** 2;
    const i = Math.sqrt(F$1.dot(p));
    return p.divideScalar(i), s.copy(p).addScaledVector(F$1, o);
  }
  getPositionToCartographic(t, e) {
    this.getPositionToSurfacePoint(t, p), this.getPositionToNormal(t, F$1);
    const o = Y$1.subVectors(t, p);
    return e.lon = Math.atan2(F$1.y, F$1.x), e.lat = Math.asin(F$1.z), e.height = Math.sign(o.dot(t)) * o.length(), e;
  }
  getCartographicToNormal(t, e, o) {
    return ot$1.set(1, W$1(t), e), o.setFromSpherical(ot$1).normalize(), pt$1(o), o;
  }
  getPositionToNormal(t, e) {
    const o = this.radius;
    return e.copy(t), e.x /= o.x ** 2, e.y /= o.y ** 2, e.z /= o.z ** 2, e.normalize(), e;
  }
  getPositionToSurfacePoint(t, e) {
    const o = this.radius, s = 1 / o.x ** 2, n = 1 / o.y ** 2, i = 1 / o.z ** 2, r = t.x * t.x * s, c = t.y * t.y * n, l = t.z * t.z * i, h = r + c + l, R = Math.sqrt(1 / h), w = p.copy(t).multiplyScalar(R);
    if (h < Rt$1)
      return isFinite(R) ? e.copy(w) : null;
    const q = Y$1.set(
      w.x * s * 2,
      w.y * n * 2,
      w.z * i * 2
    );
    let g = (1 - R) * t.length() / (0.5 * q.length()), D = 0, _, B, P, M, E, G, V, X, J, K, Q;
    do {
      g -= D, P = 1 / (1 + g * s), M = 1 / (1 + g * n), E = 1 / (1 + g * i), G = P * P, V = M * M, X = E * E, J = G * P, K = V * M, Q = X * E, _ = r * G + c * V + l * X - 1, B = r * J * s + c * K * n + l * Q * i;
      const yt = -2 * B;
      D = _ / yt;
    } while (Math.abs(_) > Tt$1);
    return e.set(
      t.x * P,
      t.y * M,
      t.z * E
    );
  }
  calculateHorizonDistance(t, e) {
    const o = this.calculateEffectiveRadius(t);
    return Math.sqrt(2 * o * e + e ** 2);
  }
  calculateEffectiveRadius(t) {
    const e = this.radius.x, s = 1 - this.radius.z ** 2 / e ** 2, n = t * x.DEG2RAD, i = Math.sin(n) ** 2;
    return e / Math.sqrt(1 - s * i);
  }
  getPositionElevation(t) {
    this.getPositionToSurfacePoint(t, p);
    const e = Y$1.subVectors(t, p);
    return Math.sign(e.dot(t)) * e.length();
  }
  // Returns an estimate of the closest point on the ellipsoid to the ray. Returns
  // the surface intersection if they collide.
  closestPointToRayEstimate(t, e) {
    return this.intersectRay(t, e) ? e : (y$1.makeScale(...this.radius).invert(), O$1.copy(t).applyMatrix4(y$1), p.set(0, 0, 0), O$1.closestPointToPoint(p, e).normalize(), y$1.makeScale(...this.radius), e.applyMatrix4(y$1));
  }
  copy(t) {
    return this.radius.copy(t.radius), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
const L = new m(), k$1 = new m(), d = new m(), I$1 = new mt$1();
let Dt$1 = class Dt {
  constructor(t = new Mt$1(), e = new A$1()) {
    this.box = t.clone(), this.transform = e.clone(), this.inverseTransform = new A$1(), this.points = new Array(8).fill().map(() => new m()), this.planes = new Array(6).fill().map(() => new gt$1());
  }
  copy(t) {
    return this.box.copy(t.box), this.transform.copy(t.transform), this.update(), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Clamps the given point within the bounds of this OBB
   * @param {Vector3} point
   * @param {Vector3} result
   * @returns {Vector3}
   */
  clampPoint(t, e) {
    return e.copy(t).applyMatrix4(this.inverseTransform).clamp(this.box.min, this.box.max).applyMatrix4(this.transform);
  }
  /**
   * Returns the distance from any edge of this OBB to the specified point.
   * If the point lies inside of this box, the distance will be 0.
   * @param {Vector3} point
   * @returns {number}
   */
  distanceToPoint(t) {
    return this.clampPoint(t, d).distanceTo(t);
  }
  containsPoint(t) {
    return d.copy(t).applyMatrix4(this.inverseTransform), this.box.containsPoint(d);
  }
  // returns boolean indicating whether the ray has intersected the obb
  intersectsRay(t) {
    return I$1.copy(t).applyMatrix4(this.inverseTransform), I$1.intersectsBox(this.box);
  }
  // Sets "target" equal to the intersection point.
  // Returns "null" if no intersection found.
  intersectRay(t, e) {
    return I$1.copy(t).applyMatrix4(this.inverseTransform), I$1.intersectBox(this.box, e) ? (e.applyMatrix4(this.transform), e) : null;
  }
  update() {
    const { points: t, inverseTransform: e, transform: o, box: s } = this;
    e.copy(o).invert();
    const { min: n, max: i } = s;
    let r = 0;
    for (let c = -1; c <= 1; c += 2)
      for (let l = -1; l <= 1; l += 2)
        for (let h = -1; h <= 1; h += 2)
          t[r].set(
            c < 0 ? n.x : i.x,
            l < 0 ? n.y : i.y,
            h < 0 ? n.z : i.z
          ).applyMatrix4(o), r++;
    this.updatePlanes();
  }
  updatePlanes() {
    L.copy(this.box.min).applyMatrix4(this.transform), k$1.copy(this.box.max).applyMatrix4(this.transform), d.set(0, 0, 1).transformDirection(this.transform), this.planes[0].setFromNormalAndCoplanarPoint(d, L), this.planes[1].setFromNormalAndCoplanarPoint(d, k$1).negate(), d.set(0, 1, 0).transformDirection(this.transform), this.planes[2].setFromNormalAndCoplanarPoint(d, L), this.planes[3].setFromNormalAndCoplanarPoint(d, k$1).negate(), d.set(1, 0, 0).transformDirection(this.transform), this.planes[4].setFromNormalAndCoplanarPoint(d, L), this.planes[5].setFromNormalAndCoplanarPoint(d, k$1).negate();
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, d), d.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsFrustum(t) {
    return this._intersectsPlaneShape(t.planes, t.points);
  }
  intersectsOBB(t) {
    return this._intersectsPlaneShape(t.planes, t.points);
  }
  // takes a series of 6 planes that define and enclosed shape and the 8 points that lie at the corners
  // of that shape to determine whether the OBB is intersected with.
  _intersectsPlaneShape(t, e) {
    const o = this.points, s = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      let r = -1 / 0;
      for (let c = 0; c < 8; c++) {
        const l = o[c], h = i.distanceToPoint(l);
        r = r < h ? h : r;
      }
      if (r < 0)
        return false;
    }
    for (let n = 0; n < 6; n++) {
      const i = s[n];
      let r = -1 / 0;
      for (let c = 0; c < 8; c++) {
        const l = e[c], h = i.distanceToPoint(l);
        r = r < h ? h : r;
      }
      if (r < 0)
        return false;
    }
    return true;
  }
};
const S = Math.PI, $$1 = S / 2, N$1 = new m(), b = new m(), v$1 = new m(), ct$1 = new A$1();
let C$1 = 0;
const H$1 = [];
function bt$1(a = false) {
  return a ? (H$1[C$1] || (H$1[C$1] = new m()), C$1++, H$1[C$1 - 1]) : new m();
}
function lt$1() {
  C$1 = 0;
}
let Bt$1 = class Bt extends zt$1 {
  constructor(t, e, o, s = -$$1, n = $$1, i = 0, r = 2 * S, c = 0, l = 0) {
    super(t, e, o), this.latStart = s, this.latEnd = n, this.lonStart = i, this.lonEnd = r, this.heightStart = c, this.heightEnd = l;
  }
  _getPoints(t = false) {
    const {
      latStart: e,
      latEnd: o,
      lonStart: s,
      lonEnd: n,
      heightStart: i,
      heightEnd: r
    } = this, c = x.mapLinear(0.5, 0, 1, e, o), l = x.mapLinear(0.5, 0, 1, s, n), h = Math.floor(s / $$1) * $$1, R = [
      [-S / 2, 0],
      [S / 2, 0],
      [0, h],
      [0, h + S / 2],
      [0, h + S],
      [0, h + 3 * S / 2],
      [e, n],
      [o, n],
      [e, s],
      [o, s],
      [0, s],
      [0, n],
      [c, l],
      [e, l],
      [o, l],
      [c, s],
      [c, n]
    ], w = [], q = R.length;
    for (let g = 0; g <= 1; g++) {
      const D = x.mapLinear(g, 0, 1, i, r);
      for (let _ = 0, B = q; _ < B; _++) {
        const [P, M] = R[_];
        if (P >= e && P <= o && M >= s && M <= n) {
          const E = bt$1(t);
          w.push(E), this.getCartographicToPosition(P, M, D, E);
        }
      }
    }
    return w;
  }
  getBoundingBox(t, e) {
    lt$1();
    const {
      latStart: o,
      latEnd: s,
      lonStart: n,
      lonEnd: i
    } = this;
    if (s - o < S / 2) {
      const l = x.mapLinear(0.5, 0, 1, o, s), h = x.mapLinear(0.5, 0, 1, n, i);
      this.getCartographicToNormal(l, h, v$1), b.set(0, 0, 1), N$1.crossVectors(b, v$1), b.crossVectors(N$1, v$1), e.makeBasis(N$1, b, v$1);
    } else
      N$1.set(1, 0, 0), b.set(0, 1, 0), v$1.set(0, 0, 1), e.makeBasis(N$1, b, v$1);
    ct$1.copy(e).invert();
    const c = this._getPoints(true);
    for (let l = 0, h = c.length; l < h; l++)
      c[l].applyMatrix4(ct$1);
    t.makeEmpty(), t.setFromPoints(c);
  }
  getBoundingSphere(t, e) {
    lt$1();
    const o = this._getPoints(true);
    t.makeEmpty(), t.setFromPoints(o, e);
  }
};
function dt$1(a) {
  const { TextureUtils: t } = ft$1;
  if (!t || !a)
    return 0;
  const { format: e, type: o, image: s } = a, { width: n, height: i } = s;
  let r = t.getByteLength(n, i, e, o);
  return r *= a.generateMipmaps ? 4 / 3 : 1, r;
}
function vt$1(a) {
  const t = /* @__PURE__ */ new Set();
  let e = 0;
  return a.traverse((o) => {
    if (o.geometry && !t.has(o.geometry) && (e += estimateBytesUsed(o.geometry), t.add(o.geometry)), o.material) {
      const s = o.material;
      for (const n in s) {
        const i = s[n];
        i && i.isTexture && !t.has(i) && (e += dt$1(i), t.add(i));
      }
    }
  }), e;
}

const {DefaultLoadingManager:Rt,Matrix4:O,Vector3:y,Vector2:F,MathUtils:T,PointsMaterial:He,BufferGeometry:Ge,BufferAttribute:st,Color:je,Points:Ze,InstancedMesh:qe,Quaternion:et,Group:Mt,Ray:zt,Sphere:Qe,Frustum:$e,Matrix3:Ye,LoadingManager:Xe,EventDispatcher:pt,Euler:Ke,Mesh:Je,PlaneGeometry:ti,ShaderMaterial:ei,Plane:_e,Raycaster:ii,Clock:Pe,PerspectiveCamera:$t,OrthographicCamera:ve} = await importShared('three');
class we extends ce$1 {
  constructor(t = Rt) {
    super(), this.manager = t, this.adjustmentTransform = new O();
  }
  parse(t) {
    const e = super.parse(t), i = e.glbBytes.slice().buffer;
    return new Promise((s, o) => {
      const n = this.manager, r = this.fetchOptions, a = n.getHandler("path.gltf") || new GLTFLoader(n);
      r.credentials === "include" && r.mode === "cors" && a.setCrossOrigin("use-credentials"), "credentials" in r && a.setWithCredentials(r.credentials === "include"), r.headers && a.setRequestHeader(r.headers);
      let l = this.workingPath;
      !/[\\/]$/.test(l) && l.length && (l += "/");
      const h = this.adjustmentTransform;
      a.parse(i, l, (c) => {
        const { batchTable: p, featureTable: m } = e, { scene: u } = c, d = m.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
        d && (u.position.x += d[0], u.position.y += d[1], u.position.z += d[2]), c.scene.updateMatrix(), c.scene.matrix.multiply(h), c.scene.matrix.decompose(c.scene.position, c.scene.quaternion, c.scene.scale), c.batchTable = p, c.featureTable = m, u.batchTable = p, u.featureTable = m, s(c);
      }, o);
    });
  }
}
function ri(f) {
  const t = f >> 11, e = f >> 5 & 63, i = f & 31, s = Math.round(t / 31 * 255), o = Math.round(e / 63 * 255), n = Math.round(i / 31 * 255);
  return [s, o, n];
}
const mt = new F();
function ai(f, t, e = new y()) {
  mt.set(f, t).divideScalar(256).multiplyScalar(2).subScalar(1), e.set(mt.x, mt.y, 1 - Math.abs(mt.x) - Math.abs(mt.y));
  const i = T.clamp(-e.z, 0, 1);
  return e.x >= 0 ? e.setX(e.x - i) : e.setX(e.x + i), e.y >= 0 ? e.setY(e.y - i) : e.setY(e.y + i), e.normalize(), e;
}
const Kt = {
  RGB: "color",
  POSITION: "position"
};
class De extends he$1 {
  constructor(t = Rt) {
    super(), this.manager = t;
  }
  parse(t) {
    return super.parse(t).then(async (e) => {
      const { featureTable: i, batchTable: s } = e, o = new He(), n = i.header.extensions, r = new y();
      let a;
      if (n && n["3DTILES_draco_point_compression"]) {
        const { byteOffset: c, byteLength: p, properties: m } = n["3DTILES_draco_point_compression"], u = this.manager.getHandler("draco.drc");
        if (u == null)
          throw new Error("PNTSLoader: dracoLoader not available.");
        const d = {};
        for (const P in m)
          if (P in Kt && P in m) {
            const L = Kt[P];
            d[L] = m[P];
          }
        const x = {
          attributeIDs: d,
          attributeTypes: {
            position: "Float32Array",
            color: "Uint8Array"
          },
          useUniqueIDs: true
        }, S = i.getBuffer(c, p);
        a = await u.decodeGeometry(S, x), a.attributes.color && (o.vertexColors = true);
      } else {
        const c = i.getData("POINTS_LENGTH"), p = i.getData("POSITION", c, "FLOAT", "VEC3"), m = i.getData("NORMAL", c, "FLOAT", "VEC3"), u = i.getData("NORMAL", c, "UNSIGNED_BYTE", "VEC2"), d = i.getData("RGB", c, "UNSIGNED_BYTE", "VEC3"), x = i.getData("RGBA", c, "UNSIGNED_BYTE", "VEC4"), S = i.getData("RGB565", c, "UNSIGNED_SHORT", "SCALAR"), P = i.getData("CONSTANT_RGBA", c, "UNSIGNED_BYTE", "VEC4"), L = i.getData("POSITION_QUANTIZED", c, "UNSIGNED_SHORT", "VEC3"), g = i.getData("QUANTIZED_VOLUME_SCALE", c, "FLOAT", "VEC3"), E = i.getData("QUANTIZED_VOLUME_OFFSET", c, "FLOAT", "VEC3");
        if (a = new Ge(), L) {
          const _ = new Float32Array(c * 3);
          for (let w = 0; w < c; w++)
            for (let z = 0; z < 3; z++) {
              const b = 3 * w + z;
              _[b] = L[b] / 65535 * g[z];
            }
          r.x = E[0], r.y = E[1], r.z = E[2], a.setAttribute("position", new st(_, 3, false));
        } else
          a.setAttribute("position", new st(p, 3, false));
        if (m !== null)
          a.setAttribute("normal", new st(m, 3, false));
        else if (u !== null) {
          const _ = new Float32Array(c * 3), w = new y();
          for (let z = 0; z < c; z++) {
            const b = u[z * 2], j = u[z * 2 + 1], it = ai(b, j, w);
            _[z * 3] = it.x, _[z * 3 + 1] = it.y, _[z * 3 + 2] = it.z;
          }
          a.setAttribute("normal", new st(_, 3, false));
        }
        if (x !== null)
          a.setAttribute("color", new st(x, 4, true)), o.vertexColors = true, o.transparent = true, o.depthWrite = false;
        else if (d !== null)
          a.setAttribute("color", new st(d, 3, true)), o.vertexColors = true;
        else if (S !== null) {
          const _ = new Uint8Array(c * 3);
          for (let w = 0; w < c; w++) {
            const z = ri(S[w]);
            for (let b = 0; b < 3; b++) {
              const j = 3 * w + b;
              _[j] = z[b];
            }
          }
          a.setAttribute("color", new st(_, 3, true)), o.vertexColors = true;
        } else if (P !== null) {
          const _ = new je(P[0], P[1], P[2]);
          o.color = _;
          const w = P[3] / 255;
          w < 1 && (o.opacity = w, o.transparent = true, o.depthWrite = false);
        }
      }
      const l = new Ze(a, o);
      l.position.copy(r), e.scene = l, e.scene.featureTable = i, e.scene.batchTable = s;
      const h = i.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
      return h && (e.scene.position.x += h[0], e.scene.position.y += h[1], e.scene.position.z += h[2]), e;
    });
  }
}
const ut = new zt$1(D$2, D$2, N$2);
ut.name = "WGS84 Earth";
const Jt = /* @__PURE__ */ new y(), At = /* @__PURE__ */ new y(), Ft = /* @__PURE__ */ new y(), Wt = /* @__PURE__ */ new y(), Lt = /* @__PURE__ */ new et(), _t = /* @__PURE__ */ new y(), Pt = /* @__PURE__ */ new O(), te = /* @__PURE__ */ new O(), ee = /* @__PURE__ */ new y(), ie = /* @__PURE__ */ new O(), Ut = /* @__PURE__ */ new et(), Vt = {};
class Ce extends le$1 {
  constructor(t = Rt) {
    super(), this.manager = t, this.adjustmentTransform = new O(), this.ellipsoid = ut.clone();
  }
  resolveExternalURL(t) {
    return this.manager.resolveURL(super.resolveExternalURL(t));
  }
  parse(t) {
    return super.parse(t).then((e) => {
      const { featureTable: i, batchTable: s } = e, o = e.glbBytes.slice().buffer;
      return new Promise((n, r) => {
        const a = this.fetchOptions, l = this.manager, h = l.getHandler("path.gltf") || new GLTFLoader(l);
        a.credentials === "include" && a.mode === "cors" && h.setCrossOrigin("use-credentials"), "credentials" in a && h.setWithCredentials(a.credentials === "include"), a.headers && h.setRequestHeader(a.headers);
        let c = e.gltfWorkingPath ?? this.workingPath;
        /[\\/]$/.test(c) || (c += "/");
        const p = this.adjustmentTransform;
        h.parse(o, c, (m) => {
          const u = i.getData("INSTANCES_LENGTH"), d = i.getData("POSITION", u, "FLOAT", "VEC3"), x = i.getData("NORMAL_UP", u, "FLOAT", "VEC3"), S = i.getData("NORMAL_RIGHT", u, "FLOAT", "VEC3"), P = i.getData("SCALE_NON_UNIFORM", u, "FLOAT", "VEC3"), L = i.getData("SCALE", u, "FLOAT", "SCALAR"), g = i.getData("RTC_CENTER", 1, "FLOAT", "VEC3"), E = i.getData("EAST_NORTH_UP");
          [
            "QUANTIZED_VOLUME_OFFSET",
            "QUANTIZED_VOLUME_SCALE",
            "POSITION_QUANTIZED",
            "NORMAL_UP_OCT32P",
            "NORMAL_RIGHT_OCT32P"
          ].forEach((b) => {
            b in i.header && console.warn(`I3DMLoader: Unsupported FeatureTable feature "${b}" detected.`);
          });
          const _ = new y();
          for (let b = 0; b < u; b++)
            _.x += d[b * 3 + 0] / u, _.y += d[b * 3 + 1] / u, _.z += d[b * 3 + 2] / u;
          const w = [], z = [];
          m.scene.updateMatrixWorld(), m.scene.traverse((b) => {
            if (b.isMesh) {
              z.push(b);
              const { geometry: j, material: it } = b, Z = new qe(j, it, u);
              Z.position.copy(_), g && (Z.position.x += g[0], Z.position.y += g[1], Z.position.z += g[2]), w.push(Z);
            }
          });
          for (let b = 0; b < u; b++) {
            Wt.set(
              d[b * 3 + 0] - _.x,
              d[b * 3 + 1] - _.y,
              d[b * 3 + 2] - _.z
            ), Lt.identity(), x && (At.set(
              x[b * 3 + 0],
              x[b * 3 + 1],
              x[b * 3 + 2]
            ), Ft.set(
              S[b * 3 + 0],
              S[b * 3 + 1],
              S[b * 3 + 2]
            ), Jt.crossVectors(Ft, At).normalize(), Pt.makeBasis(
              Ft,
              At,
              Jt
            ), Lt.setFromRotationMatrix(Pt)), _t.set(1, 1, 1), P && _t.set(
              P[b * 3 + 0],
              P[b * 3 + 1],
              P[b * 3 + 2]
            ), L && _t.multiplyScalar(L[b]);
            for (let j = 0, it = w.length; j < it; j++) {
              const Z = w[j];
              Ut.copy(Lt), E && (Z.updateMatrixWorld(), ee.copy(Wt).applyMatrix4(Z.matrixWorld), this.ellipsoid.getPositionToCartographic(ee, Vt), this.ellipsoid.getEastNorthUpFrame(Vt.lat, Vt.lon, ie), Ut.setFromRotationMatrix(ie)), Pt.compose(Wt, Ut, _t).multiply(p);
              const Fe = z[j];
              te.multiplyMatrices(Pt, Fe.matrixWorld), Z.setMatrixAt(b, te);
            }
          }
          m.scene.clear(), m.scene.add(...w), m.batchTable = s, m.featureTable = i, m.scene.batchTable = s, m.scene.featureTable = i, n(m);
        }, r);
      });
    });
  }
}
class ci extends de$1 {
  constructor(t = Rt) {
    super(), this.manager = t, this.adjustmentTransform = new O(), this.ellipsoid = ut.clone();
  }
  parse(t) {
    const e = super.parse(t), { manager: i, ellipsoid: s, adjustmentTransform: o } = this, n = [];
    for (const r in e.tiles) {
      const { type: a, buffer: l } = e.tiles[r];
      switch (a) {
        case "b3dm": {
          const h = l.slice(), c = new we(i);
          c.workingPath = this.workingPath, c.fetchOptions = this.fetchOptions, c.adjustmentTransform.copy(o);
          const p = c.parse(h.buffer);
          n.push(p);
          break;
        }
        case "pnts": {
          const h = l.slice(), c = new De(i);
          c.workingPath = this.workingPath, c.fetchOptions = this.fetchOptions;
          const p = c.parse(h.buffer);
          n.push(p);
          break;
        }
        case "i3dm": {
          const h = l.slice(), c = new Ce(i);
          c.workingPath = this.workingPath, c.fetchOptions = this.fetchOptions, c.ellipsoid.copy(s), c.adjustmentTransform.copy(o);
          const p = c.parse(h.buffer);
          n.push(p);
          break;
        }
      }
    }
    return Promise.all(n).then((r) => {
      const a = new Mt();
      return r.forEach((l) => {
        a.add(l.scene);
      }), {
        tiles: r,
        scene: a
      };
    });
  }
}
const ft = new O();
class li extends Mt {
  constructor(t) {
    super(), this.isTilesGroup = true, this.name = "TilesRenderer.TilesGroup", this.tilesRenderer = t, this.matrixWorldInverse = new O();
  }
  raycast(t, e) {
    return this.tilesRenderer.optimizeRaycast ? (this.tilesRenderer.raycast(t, e), false) : true;
  }
  updateMatrixWorld(t) {
    if (this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldNeedsUpdate || t) {
      this.parent === null ? ft.copy(this.matrix) : ft.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false;
      const e = ft.elements, i = this.matrixWorld.elements;
      let s = false;
      for (let o = 0; o < 16; o++) {
        const n = e[o], r = i[o];
        if (Math.abs(n - r) > Number.EPSILON) {
          s = true;
          break;
        }
      }
      if (s) {
        this.matrixWorld.copy(ft), this.matrixWorldInverse.copy(ft).invert();
        const o = this.children;
        for (let n = 0, r = o.length; n < r; n++)
          o[n].updateMatrixWorld();
      }
    }
  }
  updateWorldMatrix(t, e) {
    this.parent && t && this.parent.updateWorldMatrix(t, false), this.updateMatrixWorld(true);
  }
}
const Se = new zt(), Nt = new y(), vt = [];
function Ee(f, t) {
  return f.distance - t.distance;
}
function Ie(f, t, e, i) {
  const { scene: s } = f.cached;
  e.invokeOnePlugin((n) => n.raycastTile && n.raycastTile(f, s, t, i)) || t.intersectObject(s, true, i);
}
function hi(f, t, e) {
  Ie(f, t, e, vt), vt.sort(Ee);
  const i = vt[0] || null;
  return vt.length = 0, i;
}
function Oe(f) {
  return "__used" in f;
}
function Re(f, t, e, i = null) {
  const { group: s, activeTiles: o } = f;
  i === null && (i = Se, i.copy(e.ray).applyMatrix4(s.matrixWorldInverse));
  const n = [], r = t.children;
  for (let h = 0, c = r.length; h < c; h++) {
    const p = r[h];
    if (!Oe(p) || !p.__used)
      continue;
    p.cached.boundingVolume.intersectRay(i, Nt) !== null && (Nt.applyMatrix4(s.matrixWorld), n.push({
      distance: Nt.distanceToSquared(e.ray.origin),
      tile: p
    }));
  }
  n.sort(Ee);
  let a = null, l = 1 / 0;
  if (o.has(t)) {
    const h = hi(t, e, f);
    h && (a = h, l = h.distance * h.distance);
  }
  for (let h = 0, c = n.length; h < c; h++) {
    const p = n[h], m = p.distance, u = p.tile;
    if (m > l)
      break;
    const d = Re(f, u, e, i);
    if (d) {
      const x = d.distance * d.distance;
      x < l && (a = d, l = x);
    }
  }
  return a;
}
function ze(f, t, e, i, s = null) {
  if (!Oe(t))
    return;
  const { group: o, activeTiles: n } = f, { boundingVolume: r } = t.cached;
  if (s === null && (s = Se, s.copy(e.ray).applyMatrix4(o.matrixWorldInverse)), !t.__used || !r.intersectsRay(s))
    return;
  n.has(t) && Ie(t, e, f, i);
  const a = t.children;
  for (let l = 0, h = a.length; l < h; l++)
    ze(f, a[l], e, i, s);
}
const q = new y(), Q = new y(), $ = new y(), se = new y(), oe = new y();
class pi {
  constructor() {
    this.sphere = null, this.obb = null, this.region = null, this.regionObb = null;
  }
  intersectsRay(t) {
    const e = this.sphere, i = this.obb || this.regionObb;
    return !(e && !t.intersectsSphere(e) || i && !i.intersectsRay(t));
  }
  intersectRay(t, e = null) {
    const i = this.sphere, s = this.obb || this.regionObb;
    let o = -1 / 0, n = -1 / 0;
    i && t.intersectSphere(i, se) && (o = i.containsPoint(t.origin) ? 0 : t.origin.distanceToSquared(se)), s && s.intersectRay(t, oe) && (n = s.containsPoint(t.origin) ? 0 : t.origin.distanceToSquared(oe));
    const r = Math.max(o, n);
    return r === -1 / 0 ? null : (t.at(Math.sqrt(r), e), e);
  }
  distanceToPoint(t) {
    const e = this.sphere, i = this.obb || this.regionObb;
    let s = -1 / 0, o = -1 / 0;
    return e && (s = Math.max(e.distanceToPoint(t), 0)), i && (o = i.distanceToPoint(t)), s > o ? s : o;
  }
  intersectsFrustum(t) {
    const e = this.obb || this.regionObb, i = this.sphere;
    return i && !t.intersectsSphere(i) || e && !e.intersectsFrustum(t) ? false : !!(i || e);
  }
  intersectsSphere(t) {
    const e = this.obb || this.regionObb, i = this.sphere;
    return i && !i.intersectsSphere(t) || e && !e.intersectsSphere(t) ? false : !!(i || e);
  }
  intersectsOBB(t) {
    const e = this.obb || this.regionObb, i = this.sphere;
    return i && !t.intersectsSphere(i) || e && !e.intersectsOBB(t) ? false : !!(i || e);
  }
  getOBB(t, e) {
    const i = this.obb || this.regionObb;
    i ? (t.copy(i.box), e.copy(i.transform)) : (this.getAABB(t), e.identity());
  }
  getAABB(t) {
    if (this.sphere)
      this.sphere.getBoundingBox(t);
    else {
      const e = this.obb || this.regionObb;
      t.copy(e.box).applyMatrix4(e.transform);
    }
  }
  getSphere(t) {
    if (this.sphere)
      t.copy(this.sphere);
    else if (this.region)
      this.region.getBoundingSphere(t);
    else {
      const e = this.obb || this.regionObb;
      e.box.getBoundingSphere(t), t.applyMatrix4(e.transform);
    }
  }
  setObbData(t, e) {
    const i = new Dt$1();
    q.set(t[3], t[4], t[5]), Q.set(t[6], t[7], t[8]), $.set(t[9], t[10], t[11]);
    const s = q.length(), o = Q.length(), n = $.length();
    q.normalize(), Q.normalize(), $.normalize(), s === 0 && q.crossVectors(Q, $), o === 0 && Q.crossVectors(q, $), n === 0 && $.crossVectors(q, Q), i.transform.set(
      q.x,
      Q.x,
      $.x,
      t[0],
      q.y,
      Q.y,
      $.y,
      t[1],
      q.z,
      Q.z,
      $.z,
      t[2],
      0,
      0,
      0,
      1
    ).premultiply(e), i.box.min.set(-s, -o, -n), i.box.max.set(s, o, n), i.update(), this.obb = i;
  }
  setSphereData(t, e, i, s, o) {
    const n = new Qe();
    n.center.set(t, e, i), n.radius = s, n.applyMatrix4(o), this.sphere = n;
  }
  setRegionData(t, e, i, s, o, n, r) {
    const a = new Bt$1(
      ...t.radius,
      i,
      o,
      e,
      s,
      n,
      r
    ), l = new Dt$1();
    a.getBoundingBox(l.box, l.transform), l.update(), this.region = a, this.regionObb = l;
  }
}
const di = new Ye();
function ui(f, t, e, i) {
  const s = di.set(
    f.normal.x,
    f.normal.y,
    f.normal.z,
    t.normal.x,
    t.normal.y,
    t.normal.z,
    e.normal.x,
    e.normal.y,
    e.normal.z
  );
  return i.set(-f.constant, -t.constant, -e.constant), i.applyMatrix3(s.invert()), i;
}
class mi extends $e {
  constructor() {
    super(), this.points = Array(8).fill().map(() => new y());
  }
  setFromProjectionMatrix(t, e) {
    return super.setFromProjectionMatrix(t, e), this.calculateFrustumPoints(), this;
  }
  calculateFrustumPoints() {
    const { planes: t, points: e } = this;
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
    ].forEach((s, o) => {
      ui(s[0], s[1], s[2], e[o]);
    });
  }
}
const ne = new O(), re = new Ke(), Ae = Symbol("INITIAL_FRUSTUM_CULLED"), Tt = new O(), gt = new y(), kt = new F(), wt = {
  inView: false,
  error: 1 / 0
}, fi = new y(1, 0, 0), gi = new y(0, 1, 0);
function ae(f, t) {
  f.traverse((e) => {
    e.frustumCulled = e[Ae] && t;
  });
}
class Ai extends ie$1 {
  get autoDisableRendererCulling() {
    return this._autoDisableRendererCulling;
  }
  set autoDisableRendererCulling(t) {
    this._autoDisableRendererCulling !== t && (super._autoDisableRendererCulling = t, this.forEachLoadedModel((e) => {
      ae(e, !t);
    }));
  }
  get optimizeRaycast() {
    return this._optimizeRaycast;
  }
  set optimizeRaycast(t) {
    console.warn('TilesRenderer: The "optimizeRaycast" option has been deprecated.'), this._optimizeRaycast = t;
  }
  constructor(...t) {
    super(...t), this.group = new li(this), this.ellipsoid = ut.clone(), this.cameras = [], this.cameraMap = /* @__PURE__ */ new Map(), this.cameraInfo = [], this._optimizeRaycast = true, this._upRotationMatrix = new O(), this._bytesUsed = /* @__PURE__ */ new WeakMap(), this._autoDisableRendererCulling = true;
    const e = new Xe();
    e.setURLModifier((i) => this.preprocessURL ? this.preprocessURL(i) : i), this.manager = e, this._listeners = {};
  }
  addEventListener(...t) {
    pt.prototype.addEventListener.call(this, ...t);
  }
  hasEventListener(...t) {
    pt.prototype.hasEventListener.call(this, ...t);
  }
  removeEventListener(...t) {
    pt.prototype.removeEventListener.call(this, ...t);
  }
  dispatchEvent(...t) {
    pt.prototype.dispatchEvent.call(this, ...t);
  }
  /* Public API */
  getBoundingBox(t) {
    if (!this.root)
      return false;
    const e = this.root.cached.boundingVolume;
    return e ? (e.getAABB(t), true) : false;
  }
  getOrientedBoundingBox(t, e) {
    if (!this.root)
      return false;
    const i = this.root.cached.boundingVolume;
    return i ? (i.getOBB(t, e), true) : false;
  }
  getBoundingSphere(t) {
    if (!this.root)
      return false;
    const e = this.root.cached.boundingVolume;
    return e ? (e.getSphere(t), true) : false;
  }
  forEachLoadedModel(t) {
    this.traverse((e) => {
      const i = e.cached && e.cached.scene;
      i && t(i, e);
    }, null, false);
  }
  raycast(t, e) {
    if (this.root)
      if (t.firstHitOnly) {
        const i = Re(this, this.root, t);
        i && e.push(i);
      } else
        ze(this, this.root, t, e);
  }
  hasCamera(t) {
    return this.cameraMap.has(t);
  }
  setCamera(t) {
    const e = this.cameras, i = this.cameraMap;
    return i.has(t) ? false : (i.set(t, new F()), e.push(t), this.dispatchEvent({ type: "add-camera", camera: t }), true);
  }
  setResolution(t, e, i) {
    const s = this.cameraMap;
    if (!s.has(t))
      return false;
    const o = e.isVector2 ? e.x : e, n = e.isVector2 ? e.y : i, r = s.get(t);
    return (r.width !== o || r.height !== n) && (r.set(o, n), this.dispatchEvent({ type: "camera-resolution-change" })), true;
  }
  setResolutionFromRenderer(t, e) {
    return e.getSize(kt), this.setResolution(t, kt.x, kt.y);
  }
  deleteCamera(t) {
    const e = this.cameras, i = this.cameraMap;
    if (i.has(t)) {
      const s = e.indexOf(t);
      return e.splice(s, 1), i.delete(t), this.dispatchEvent({ type: "delete-camera", camera: t }), true;
    }
    return false;
  }
  /* Overriden */
  loadRootTileSet(...t) {
    return super.loadRootTileSet(...t).then((e) => {
      const { asset: i, extensions: s = {} } = e;
      switch ((i && i.gltfUpAxis || "y").toLowerCase()) {
        case "x":
          this._upRotationMatrix.makeRotationAxis(gi, -Math.PI / 2);
          break;
        case "y":
          this._upRotationMatrix.makeRotationAxis(fi, Math.PI / 2);
          break;
      }
      if ("3DTILES_ellipsoid" in s) {
        const n = s["3DTILES_ellipsoid"], { ellipsoid: r } = this;
        r.name = n.body, n.radii ? r.radius.set(...n.radii) : r.radius.set(1, 1, 1);
      }
      return e;
    });
  }
  update() {
    let t = null;
    if (this.invokeAllPlugins((n) => {
      if (n.doTilesNeedUpdate) {
        const r = n.doTilesNeedUpdate();
        t === null ? t = r : t = !!(t || r);
      }
    }), t === false) {
      this.dispatchEvent({ type: "update-before" }), this.dispatchEvent({ type: "update-after" });
      return;
    }
    this.dispatchEvent({ type: "update-before" });
    const e = this.group, i = this.cameras, s = this.cameraMap, o = this.cameraInfo;
    for (; o.length > i.length; )
      o.pop();
    for (; o.length < i.length; )
      o.push({
        frustum: new mi(),
        isOrthographic: false,
        sseDenominator: -1,
        // used if isOrthographic:false
        position: new y(),
        invScale: -1,
        pixelSize: 0
        // used if isOrthographic:true
      });
    gt.setFromMatrixScale(e.matrixWorldInverse), Math.abs(Math.max(gt.x - gt.y, gt.x - gt.z)) > 1e-6 && console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");
    for (let n = 0, r = o.length; n < r; n++) {
      const a = i[n], l = o[n], h = l.frustum, c = l.position, p = s.get(a);
      (p.width === 0 || p.height === 0) && console.warn("TilesRenderer: resolution for camera error calculation is not set.");
      const m = a.projectionMatrix.elements;
      if (l.isOrthographic = m[15] === 1, l.isOrthographic) {
        const u = 2 / m[0], d = 2 / m[5];
        l.pixelSize = Math.max(d / p.height, u / p.width);
      } else
        l.sseDenominator = 2 / m[5] / p.height;
      Tt.copy(e.matrixWorld), Tt.premultiply(a.matrixWorldInverse), Tt.premultiply(a.projectionMatrix), h.setFromProjectionMatrix(Tt), c.set(0, 0, 0), c.applyMatrix4(a.matrixWorld), c.applyMatrix4(e.matrixWorldInverse);
    }
    if (super.update(), this.dispatchEvent({ type: "update-after" }), i.length === 0 && this.root) {
      let n = false;
      this.invokeAllPlugins((r) => n = n || !!(r !== this && r.calculateTileViewError)), n === false && console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.");
    }
  }
  preprocessNode(t, e, i = null) {
    super.preprocessNode(t, e, i);
    const s = new O();
    if (t.transform) {
      const r = t.transform;
      for (let a = 0; a < 16; a++)
        s.elements[a] = r[a];
    }
    i && s.premultiply(i.cached.transform);
    const o = new O().copy(s).invert(), n = new pi();
    "sphere" in t.boundingVolume && n.setSphereData(...t.boundingVolume.sphere, s), "box" in t.boundingVolume && n.setObbData(t.boundingVolume.box, s), "region" in t.boundingVolume && n.setRegionData(this.ellipsoid, ...t.boundingVolume.region), t.cached = {
      transform: s,
      transformInverse: o,
      active: false,
      boundingVolume: n,
      metadata: null,
      scene: null,
      geometry: null,
      materials: null,
      textures: null
    };
  }
  async parseTile(t, e, i, s, o) {
    const n = e.cached, r = c(s), a = this.fetchOptions, l = this.manager;
    let h = null;
    const c$1 = n.transform, p = this._upRotationMatrix, m = (d$1(t) || i).toLowerCase();
    switch (m) {
      case "b3dm": {
        const g = new we(l);
        g.workingPath = r, g.fetchOptions = a, g.adjustmentTransform.copy(p), h = g.parse(t);
        break;
      }
      case "pnts": {
        const g = new De(l);
        g.workingPath = r, g.fetchOptions = a, h = g.parse(t);
        break;
      }
      case "i3dm": {
        const g = new Ce(l);
        g.workingPath = r, g.fetchOptions = a, g.adjustmentTransform.copy(p), g.ellipsoid.copy(this.ellipsoid), h = g.parse(t);
        break;
      }
      case "cmpt": {
        const g = new ci(l);
        g.workingPath = r, g.fetchOptions = a, g.adjustmentTransform.copy(p), g.ellipsoid.copy(this.ellipsoid), h = g.parse(t).then((E) => E.scene);
        break;
      }
      // 3DTILES_content_gltf
      case "gltf":
      case "glb": {
        const g = l.getHandler("path.gltf") || l.getHandler("path.glb") || new GLTFLoader(l);
        g.setWithCredentials(a.credentials === "include"), g.setRequestHeader(a.headers || {}), a.credentials === "include" && a.mode === "cors" && g.setCrossOrigin("use-credentials");
        let E = g.resourcePath || g.path || r;
        !/[\\/]$/.test(E) && E.length && (E += "/"), h = g.parseAsync(t, E).then((_) => {
          _.scene = _.scene || new Mt();
          const { scene: w } = _;
          return w.updateMatrix(), w.matrix.multiply(p).decompose(w.position, w.quaternion, w.scale), _;
        });
        break;
      }
      default: {
        h = this.invokeOnePlugin((g) => g.parseToMesh && g.parseToMesh(t, e, i, s, o));
        break;
      }
    }
    const u = await h;
    if (u === null)
      throw new Error(`TilesRenderer: Content type "${m}" not supported.`);
    let d, x;
    u.isObject3D ? (d = u, x = null) : (d = u.scene, x = u), d.updateMatrix(), d.matrix.premultiply(c$1), d.matrix.decompose(d.position, d.quaternion, d.scale), await this.invokeAllPlugins((g) => g.processTileModel && g.processTileModel(d, e)), d.traverse((g) => {
      g[Ae] = g.frustumCulled;
    }), ae(d, !this.autoDisableRendererCulling);
    const S = [], P = [], L = [];
    if (d.traverse((g) => {
      if (g.geometry && P.push(g.geometry), g.material) {
        const E = g.material;
        S.push(g.material);
        for (const _ in E) {
          const w = E[_];
          w && w.isTexture && L.push(w);
        }
      }
    }), o.aborted) {
      for (let g = 0, E = L.length; g < E; g++) {
        const _ = L[g];
        _.image instanceof ImageBitmap && _.image.close(), _.dispose();
      }
      return;
    }
    n.materials = S, n.geometry = P, n.textures = L, n.scene = d, n.metadata = x;
  }
  disposeTile(t) {
    super.disposeTile(t);
    const e = t.cached;
    if (e.scene) {
      const i = e.materials, s = e.geometry, o = e.textures, n = e.scene.parent;
      e.scene.traverse((r) => {
        r.userData.meshFeatures && r.userData.meshFeatures.dispose(), r.userData.structuralMetadata && r.userData.structuralMetadata.dispose();
      });
      for (let r = 0, a = s.length; r < a; r++)
        s[r].dispose();
      for (let r = 0, a = i.length; r < a; r++)
        i[r].dispose();
      for (let r = 0, a = o.length; r < a; r++) {
        const l = o[r];
        l.image instanceof ImageBitmap && l.image.close(), l.dispose();
      }
      n && n.remove(e.scene), this.dispatchEvent({
        type: "dispose-model",
        scene: e.scene,
        tile: t
      }), e.scene = null, e.materials = null, e.textures = null, e.geometry = null, e.metadata = null;
    }
  }
  setTileVisible(t, e) {
    const i = t.cached.scene, s = this.group;
    e ? i && (s.add(i), i.updateMatrixWorld(true)) : i && s.remove(i), super.setTileVisible(t, e), this.dispatchEvent({
      type: "tile-visibility-change",
      scene: i,
      tile: t,
      visible: e
    });
  }
  calculateBytesUsed(t, e) {
    const i = this._bytesUsed;
    return !i.has(t) && e && i.set(t, vt$1(e)), i.get(t) ?? null;
  }
  calculateTileViewError(t, e) {
    const i = t.cached, s = this.cameras, o = this.cameraInfo, n = i.boundingVolume;
    let r = false, a = -1 / 0, l = 1 / 0, h = -1 / 0, c = 1 / 0;
    for (let p = 0, m = s.length; p < m; p++) {
      const u = o[p];
      let d, x;
      if (u.isOrthographic) {
        const P = u.pixelSize;
        d = t.geometricError / P, x = 1 / 0;
      } else {
        const P = u.sseDenominator;
        x = n.distanceToPoint(u.position), d = x === 0 ? 1 / 0 : t.geometricError / (x * P);
      }
      const S = o[p].frustum;
      n.intersectsFrustum(S) && (r = true, a = Math.max(a, d), l = Math.min(l, x)), h = Math.max(h, d), c = Math.min(c, x);
    }
    this.invokeAllPlugins((p) => {
      p !== this && p.calculateTileViewError && (p.calculateTileViewError(t, wt), wt.inView && (r = true, a = Math.max(a, wt.error)), h = Math.max(h, wt.error));
    }), r ? (e.inView = true, e.error = a, e.distanceFromCamera = l) : (e.inView = false, e.error = h, e.distanceFromCamera = c);
  }
  // adjust the rotation of the group such that Y is altitude, X is North, and Z is East
  setLatLonToYUp(t, e) {
    console.warn("TilesRenderer: setLatLonToYUp is deprecated. Use the ReorientationPlugin, instead.");
    const { ellipsoid: i, group: s } = this;
    re.set(Math.PI / 2, Math.PI / 2, 0), ne.makeRotationFromEuler(re), i.getEastNorthUpFrame(t, e, 0, s.matrix).multiply(ne).invert().decompose(
      s.position,
      s.quaternion,
      s.scale
    ), s.updateMatrixWorld(true);
  }
  dispose() {
    super.dispose(), this.group.removeFromParent();
  }
}
class yi extends Je {
  constructor() {
    super(new ti(0, 0), new xi()), this.renderOrder = 1 / 0;
  }
  onBeforeRender(t) {
    const e = this.material.uniforms;
    t.getSize(e.resolution.value);
  }
  updateMatrixWorld() {
    this.matrixWorld.makeTranslation(this.position);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class xi extends ei {
  constructor() {
    super({
      depthWrite: false,
      depthTest: false,
      transparent: true,
      uniforms: {
        resolution: { value: new F() },
        size: { value: 15 },
        thickness: { value: 2 },
        opacity: { value: 1 }
      },
      vertexShader: (
        /* glsl */
        `

				uniform float pixelRatio;
				uniform float size;
				uniform float thickness;
				uniform vec2 resolution;
				varying vec2 vUv;

				void main() {

					vUv = uv;

					float aspect = resolution.x / resolution.y;
					vec2 offset = uv * 2.0 - vec2( 1.0 );
					offset.y *= aspect;

					vec4 screenPoint = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					screenPoint.xy += offset * ( size + thickness ) * screenPoint.w / resolution.x;

					gl_Position = screenPoint;

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform float size;
				uniform float thickness;
				uniform float opacity;

				varying vec2 vUv;
				void main() {

					float ht = 0.5 * thickness;
					float planeDim = size + thickness;
					float offset = ( planeDim - ht - 2.0 ) / planeDim;
					float texelThickness = ht / planeDim;

					vec2 vec = vUv * 2.0 - vec2( 1.0 );
					float dist = abs( length( vec ) - offset );
					float fw = fwidth( dist ) * 0.5;
					float a = smoothstep( texelThickness - fw, texelThickness + fw, dist );

					gl_FragColor = vec4( 1, 1, 1, opacity * ( 1.0 - a ) );

				}
			`
      )
    });
  }
}
const ce = new F(), le = new F();
class bi {
  constructor() {
    this.domElement = null, this.buttons = 0, this.pointerType = null, this.pointerOrder = [], this.previousPositions = {}, this.pointerPositions = {}, this.startPositions = {}, this.pointerSetThisFrame = {}, this.hoverPosition = new F(), this.hoverSet = false;
  }
  reset() {
    this.buttons = 0, this.pointerType = null, this.pointerOrder = [], this.previousPositions = {}, this.pointerPositions = {}, this.startPositions = {}, this.pointerSetThisFrame = {}, this.hoverPosition = new F(), this.hoverSet = false;
  }
  // The pointers can be set multiple times per frame so track whether the pointer has
  // been set this frame or not so we don't overwrite the previous position and lose information
  // about pointer movement
  updateFrame() {
    const { previousPositions: t, pointerPositions: e } = this;
    for (const i in e)
      t[i].copy(e[i]);
  }
  setHoverEvent(t) {
    (t.pointerType === "mouse" || t.type === "wheel") && (this.getAdjustedPointer(t, this.hoverPosition), this.hoverSet = true);
  }
  getLatestPoint(t) {
    return this.pointerType !== null ? (this.getCenterPoint(t), t) : this.hoverSet ? (t.copy(this.hoverPosition), t) : null;
  }
  // get the pointer position in the coordinate system of the target element
  getAdjustedPointer(t, e) {
    const s = (this.domElement ? this.domElement : t.target).getBoundingClientRect(), o = t.clientX - s.left, n = t.clientY - s.top;
    e.set(o, n);
  }
  addPointer(t) {
    const e = t.pointerId, i = new F();
    this.getAdjustedPointer(t, i), this.pointerOrder.push(e), this.pointerPositions[e] = i, this.previousPositions[e] = i.clone(), this.startPositions[e] = i.clone(), this.getPointerCount() === 1 && (this.pointerType = t.pointerType, this.buttons = t.buttons);
  }
  updatePointer(t) {
    const e = t.pointerId;
    return e in this.pointerPositions ? (this.getAdjustedPointer(t, this.pointerPositions[e]), true) : false;
  }
  deletePointer(t) {
    const e = t.pointerId, i = this.pointerOrder;
    i.splice(i.indexOf(e), 1), delete this.pointerPositions[e], delete this.previousPositions[e], delete this.startPositions[e], this.getPointerCount.length === 0 && (this.buttons = 0, this.pointerType = null);
  }
  getPointerCount() {
    return this.pointerOrder.length;
  }
  getCenterPoint(t, e = this.pointerPositions) {
    const i = this.pointerOrder;
    if (this.getPointerCount() === 1 || this.getPointerType() === "mouse") {
      const s = i[0];
      return t.copy(e[s]), t;
    } else if (this.getPointerCount() === 2) {
      const s = this.pointerOrder[0], o = this.pointerOrder[1], n = e[s], r = e[o];
      return t.addVectors(n, r).multiplyScalar(0.5), t;
    }
    return null;
  }
  getPreviousCenterPoint(t) {
    return this.getCenterPoint(t, this.previousPositions);
  }
  getStartCenterPoint(t) {
    return this.getCenterPoint(t, this.startPositions);
  }
  getMoveDistance() {
    return this.getCenterPoint(ce), this.getPreviousCenterPoint(le), ce.sub(le).length();
  }
  getTouchPointerDistance(t = this.pointerPositions) {
    if (this.getPointerCount() <= 1 || this.getPointerType() === "mouse")
      return 0;
    const { pointerOrder: e } = this, i = e[0], s = e[1], o = t[i], n = t[s];
    return o.distanceTo(n);
  }
  getPreviousTouchPointerDistance() {
    return this.getTouchPointerDistance(this.previousPositions);
  }
  getStartTouchPointerDistance() {
    return this.getTouchPointerDistance(this.startPositions);
  }
  getPointerType() {
    return this.pointerType;
  }
  isPointerTouch() {
    return this.getPointerType() === "touch";
  }
  getPointerButtons() {
    return this.buttons;
  }
  isLeftClicked() {
    return !!(this.buttons & 1);
  }
  isRightClicked() {
    return !!(this.buttons & 2);
  }
}
const Dt = new O();
new y();
function dt(f, t, e) {
  return e.makeTranslation(-f.x, -f.y, -f.z), Dt.makeRotationFromQuaternion(t), e.premultiply(Dt), Dt.makeTranslation(f.x, f.y, f.z), e.premultiply(Dt), e;
}
function lt(f, t, e, i) {
  i.x = (f - e.offsetLeft) / e.clientWidth * 2 - 1, i.y = -((t - e.offsetTop) / e.clientHeight) * 2 + 1, i.isVector3 && (i.z = 0);
}
function B(f, t, e) {
  const i = f instanceof zt ? f : f.ray, { origin: s, direction: o } = i;
  s.set(t.x, t.y, -1).unproject(e), o.set(t.x, t.y, 1).unproject(e).sub(s), f.isRay || (f.near = 0, f.far = o.length(), f.camera = e), o.normalize();
}
const G = 0, tt = 1, Y = 2, ht = 3, Bt = 4, Ht = 0.05, Gt = 0.025, J = /* @__PURE__ */ new O(), Ct = /* @__PURE__ */ new O(), U = /* @__PURE__ */ new y(), M = /* @__PURE__ */ new y(), St = /* @__PURE__ */ new y(), Et = /* @__PURE__ */ new y(), A = /* @__PURE__ */ new y(), k = /* @__PURE__ */ new y(), jt = /* @__PURE__ */ new y(), It = /* @__PURE__ */ new y(), H = /* @__PURE__ */ new et(), he = /* @__PURE__ */ new _e(), I = /* @__PURE__ */ new y(), Ot = /* @__PURE__ */ new y(), Zt = /* @__PURE__ */ new y(), Mi = /* @__PURE__ */ new et(), D = /* @__PURE__ */ new zt(), yt = /* @__PURE__ */ new F(), R = /* @__PURE__ */ new F(), pe = /* @__PURE__ */ new F(), xt = /* @__PURE__ */ new F(), qt = /* @__PURE__ */ new F(), de = /* @__PURE__ */ new F(), ue = { type: "change" }, me = { type: "start" }, fe = { type: "end" };
class _i extends pt {
  get enabled() {
    return this._enabled;
  }
  set enabled(t) {
    t !== this.enabled && (this._enabled = t, this.resetState(), this.pointerTracker.reset(), this.enabled || (this.dragInertia.set(0, 0, 0), this.rotationInertia.set(0, 0)));
  }
  constructor(t = null, e = null, i = null, s = null) {
    super(), this.isEnvironmentControls = true, this.domElement = null, this.camera = null, this.scene = null, this.tilesRenderer = null, this._enabled = true, this.cameraRadius = 5, this.rotationSpeed = 1, this.minAltitude = 0, this.maxAltitude = 0.45 * Math.PI, this.minDistance = 10, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.zoomSpeed = 1, this.adjustHeight = true, this.enableDamping = false, this.dampingFactor = 0.15, this.fallbackPlane = new _e(new y(0, 1, 0), 0), this.useFallbackPlane = true, this.scaleZoomOrientationAtEdges = false, this.autoAdjustCameraRotation = true, this.state = G, this.pointerTracker = new bi(), this.needsUpdate = false, this.actionHeightOffset = 0, this.pivotPoint = new y(), this.zoomDirectionSet = false, this.zoomPointSet = false, this.zoomDirection = new y(), this.zoomPoint = new y(), this.zoomDelta = 0, this.rotationInertiaPivot = new y(), this.rotationInertia = new F(), this.dragInertia = new y(), this.inertiaTargetDistance = 1 / 0, this.inertiaStableFrames = 0, this.pivotMesh = new yi(), this.pivotMesh.raycast = () => {
    }, this.pivotMesh.scale.setScalar(0.25), this.raycaster = new ii(), this.raycaster.firstHitOnly = true, this.up = new y(0, 1, 0), this.clock = new Pe(), this._detachCallback = null, this._upInitialized = false, this._lastUsedState = G, this._zoomPointWasSet = false, this._tilesOnChangeCallback = () => this.zoomPointSet = false, i && this.attach(i), e && this.setCamera(e), t && this.setScene(t), s && this.setTilesRenderer(s);
  }
  setScene(t) {
    this.scene = t;
  }
  setCamera(t) {
    this.camera = t, this._upInitialized = false, this.zoomDirectionSet = false, this.zoomPointSet = false, this.needsUpdate = true, this.raycaster.camera = t, this.resetState();
  }
  setTilesRenderer(t) {
    console.warn('EnvironmentControls: "setTilesRenderer" has been deprecated. Use "setScene" and "setEllipsoid", instead.'), this.tilesRenderer = t, this.tilesRenderer !== null && this.setScene(this.tilesRenderer.group);
  }
  attach(t) {
    if (this.domElement)
      throw new Error("EnvironmentControls: Controls already attached to element");
    this.domElement = t, this.pointerTracker.domElement = t, t.style.touchAction = "none";
    const e = (h) => {
      this.enabled && h.preventDefault();
    }, i = (h) => {
      if (!this.enabled)
        return;
      h.preventDefault();
      const {
        camera: c,
        raycaster: p,
        domElement: m,
        up: u,
        pivotMesh: d,
        pointerTracker: x,
        scene: S,
        pivotPoint: P,
        enabled: L
      } = this;
      if (x.addPointer(h), this.needsUpdate = true, x.isPointerTouch()) {
        if (d.visible = false, x.getPointerCount() === 0)
          m.setPointerCapture(h.pointerId);
        else if (x.getPointerCount() > 2) {
          this.resetState();
          return;
        }
      }
      x.getCenterPoint(R), lt(R.x, R.y, m, R), B(p, R, c);
      const g = Math.abs(p.ray.direction.dot(u));
      if (g < Ht || g < Gt)
        return;
      const E = this._raycast(p);
      E && (x.getPointerCount() === 2 || x.isRightClicked() || x.isLeftClicked() && h.shiftKey ? (this.setState(x.isPointerTouch() ? Bt : Y), P.copy(E.point), d.position.copy(E.point), d.visible = x.isPointerTouch() ? false : L, d.updateMatrixWorld(), S.add(d)) : x.isLeftClicked() && (this.setState(tt), P.copy(E.point), d.position.copy(E.point), d.updateMatrixWorld(), S.add(d)));
    };
    let s = false;
    const o = (h) => {
      const { pointerTracker: c } = this;
      if (!this.enabled)
        return;
      h.preventDefault();
      const {
        pivotMesh: p,
        enabled: m
      } = this;
      this.zoomDirectionSet = false, this.zoomPointSet = false, this.state !== G && (this.needsUpdate = true), c.setHoverEvent(h), c.updatePointer(h) && (c.isPointerTouch() && c.getPointerCount() === 2 && (s || (s = true, queueMicrotask(() => {
        s = false, c.getCenterPoint(qt);
        const u = c.getStartTouchPointerDistance(), d = c.getTouchPointerDistance(), x = d - u;
        if (this.state === G || this.state === Bt) {
          c.getCenterPoint(qt), c.getStartCenterPoint(de);
          const S = 2 * window.devicePixelRatio, P = qt.distanceTo(de);
          (Math.abs(x) > S || P > S) && (Math.abs(x) > P ? (this.setState(ht), this.zoomDirectionSet = false) : this.setState(Y));
        }
        if (this.state === ht) {
          const S = c.getPreviousTouchPointerDistance();
          this.zoomDelta += d - S, p.visible = false;
        } else this.state === Y && (p.visible = m);
      }))), this.dispatchEvent(ue));
    }, n = (h) => {
      const { pointerTracker: c } = this;
      !this.enabled || c.getPointerCount() === 0 || (c.deletePointer(h), c.getPointerType() === "touch" && c.getPointerCount() === 0 && t.releasePointerCapture(h.pointerId), this.resetState(), this.needsUpdate = true);
    }, r = (h) => {
      if (!this.enabled)
        return;
      h.preventDefault();
      const { pointerTracker: c } = this;
      c.setHoverEvent(h), c.updatePointer(h), this.dispatchEvent(me);
      let p;
      switch (h.deltaMode) {
        case 2:
          p = h.deltaY * 800;
          break;
        case 1:
          p = h.deltaY * 40;
          break;
        case 0:
          p = h.deltaY;
          break;
      }
      const m = Math.sign(p), u = Math.abs(p);
      this.zoomDelta -= 0.25 * m * u, this.needsUpdate = true, this._lastUsedState = ht, this.dispatchEvent(fe);
    }, a = (h) => {
      this.enabled && this.resetState();
    };
    t.addEventListener("contextmenu", e), t.addEventListener("pointerdown", i), t.addEventListener("wheel", r, { passive: false });
    const l = t.getRootNode();
    l.addEventListener("pointermove", o), l.addEventListener("pointerup", n), l.addEventListener("pointerleave", a), this._detachCallback = () => {
      t.removeEventListener("contextmenu", e), t.removeEventListener("pointerdown", i), t.removeEventListener("wheel", r), l.removeEventListener("pointermove", o), l.removeEventListener("pointerup", n), l.removeEventListener("pointerleave", a);
    };
  }
  detach() {
    this.domElement = null, this._detachCallback && (this._detachCallback(), this._detachCallback = null, this.pointerTracker.reset());
  }
  // override-able functions for retrieving the up direction at a point
  getUpDirection(t, e) {
    e.copy(this.up);
  }
  getCameraUpDirection(t) {
    this.getUpDirection(this.camera.position, t);
  }
  // returns the active / last used pivot point for the scene
  getPivotPoint(t) {
    let e = null;
    this._lastUsedState === ht ? this._zoomPointWasSet && (e = t.copy(this.zoomPoint)) : (this._lastUsedState === Y || this._lastUsedState === tt) && (e = t.copy(this.pivotPoint));
    const { camera: i, raycaster: s } = this;
    e !== null && (M.copy(e).project(i), (M.x < -1 || M.x > 1 || M.y < -1 || M.y > 1) && (e = null)), B(s, { x: 0, y: 0 }, i);
    const o = this._raycast(s);
    return o && (e === null || o.distance < e.distanceTo(s.ray.origin)) && (e = t.copy(o.point)), e;
  }
  resetState() {
    this.state !== G && this.dispatchEvent(fe), this.state = G, this.pivotMesh.removeFromParent(), this.pivotMesh.visible = this.enabled, this.actionHeightOffset = 0, this.pointerTracker.reset();
  }
  setState(t = this.state, e = true) {
    this.state !== t && (this.state === G && e && this.dispatchEvent(me), this.pivotMesh.visible = this.enabled, this.dragInertia.set(0, 0, 0), this.rotationInertia.set(0, 0), this.inertiaStableFrames = 0, this.state = t, t !== G && t !== Bt && (this._lastUsedState = t));
  }
  update(t = Math.min(this.clock.getDelta(), 64 / 1e3)) {
    if (!this.enabled || !this.camera || t === 0)
      return;
    const {
      camera: e,
      cameraRadius: i,
      pivotPoint: s,
      up: o,
      state: n,
      adjustHeight: r,
      autoAdjustCameraRotation: a
    } = this;
    e.updateMatrixWorld(), this.getCameraUpDirection(I), this._upInitialized || (this._upInitialized = true, this.up.copy(I)), this.zoomPointSet = false;
    const l = this._inertiaNeedsUpdate(), h = this.needsUpdate || l;
    if (this.needsUpdate || l) {
      const p = this.zoomDelta;
      this._updateZoom(), this._updatePosition(t), this._updateRotation(t), n === tt || n === Y ? (A.set(0, 0, -1).transformDirection(e.matrixWorld), this.inertiaTargetDistance = M.copy(s).sub(e.position).dot(A)) : n === G && this._updateInertia(t), (n !== G || p !== 0 || l) && this.dispatchEvent(ue), this.needsUpdate = false;
    }
    const c = e.isOrthographicCamera ? null : r && this._getPointBelowCamera() || null;
    if (this.getCameraUpDirection(I), this._setFrame(I), (this.state === tt || this.state === Y) && this.actionHeightOffset !== 0) {
      const { actionHeightOffset: p } = this;
      e.position.addScaledVector(o, -p), s.addScaledVector(o, -p), c && (c.distance -= p);
    }
    if (this.actionHeightOffset = 0, c) {
      const p = c.distance;
      if (p < i) {
        const m = i - p;
        e.position.addScaledVector(o, m), s.addScaledVector(o, m), this.actionHeightOffset = m;
      }
    }
    this.pointerTracker.updateFrame(), h && a && (this.getCameraUpDirection(I), this._alignCameraUp(I, 1), this.getCameraUpDirection(I), this._clampRotation(I));
  }
  // updates the camera to position it based on the constraints of the controls
  adjustCamera(t) {
    const { adjustHeight: e, cameraRadius: i } = this;
    if (t.isPerspectiveCamera) {
      this.getUpDirection(t.position, I);
      const s = e && this._getPointBelowCamera(t.position, I) || null;
      if (s) {
        const o = s.distance;
        o < i && t.position.addScaledVector(I, i - o);
      }
    }
  }
  dispose() {
    this.detach();
  }
  // private
  _updateInertia(t) {
    const {
      rotationInertia: e,
      pivotPoint: i,
      dragInertia: s,
      enableDamping: o,
      dampingFactor: n,
      camera: r,
      cameraRadius: a,
      minDistance: l,
      inertiaTargetDistance: h
    } = this;
    if (!this.enableDamping || this.inertiaStableFrames > 1) {
      s.set(0, 0, 0), e.set(0, 0, 0);
      return;
    }
    const c = Math.pow(2, -t / n), p = Math.max(r.near, a, l, h), d = 0.25 * (2 / (2 * 1e3));
    if (e.lengthSq() > 0) {
      B(D, M.set(0, 0, -1), r), D.applyMatrix4(r.matrixWorldInverse), D.direction.normalize(), D.recast(-D.direction.dot(D.origin)).at(p / D.direction.z, M), M.applyMatrix4(r.matrixWorld), B(D, U.set(d, d, -1), r), D.applyMatrix4(r.matrixWorldInverse), D.direction.normalize(), D.recast(-D.direction.dot(D.origin)).at(p / D.direction.z, U), U.applyMatrix4(r.matrixWorld), M.sub(i).normalize(), U.sub(i).normalize();
      const x = M.angleTo(U) / t;
      e.multiplyScalar(c), (e.lengthSq() < x ** 2 || !o) && e.set(0, 0);
    }
    if (s.lengthSq() > 0) {
      B(D, M.set(0, 0, -1), r), D.applyMatrix4(r.matrixWorldInverse), D.direction.normalize(), D.recast(-D.direction.dot(D.origin)).at(p / D.direction.z, M), M.applyMatrix4(r.matrixWorld), B(D, U.set(d, d, -1), r), D.applyMatrix4(r.matrixWorldInverse), D.direction.normalize(), D.recast(-D.direction.dot(D.origin)).at(p / D.direction.z, U), U.applyMatrix4(r.matrixWorld);
      const x = M.distanceTo(U) / t;
      s.multiplyScalar(c), (s.lengthSq() < x ** 2 || !o) && s.set(0, 0, 0);
    }
    e.lengthSq() > 0 && this._applyRotation(e.x * t, e.y * t, i), s.lengthSq() > 0 && (r.position.addScaledVector(s, t), r.updateMatrixWorld());
  }
  _inertiaNeedsUpdate() {
    const { rotationInertia: t, dragInertia: e } = this;
    return t.lengthSq() !== 0 || e.lengthSq() !== 0;
  }
  _updateZoom() {
    const {
      zoomPoint: t,
      zoomDirection: e,
      camera: i,
      minDistance: s,
      maxDistance: o,
      pointerTracker: n,
      domElement: r,
      minZoom: a,
      maxZoom: l,
      zoomSpeed: h,
      state: c
    } = this;
    let p = this.zoomDelta;
    if (this.zoomDelta = 0, !(!n.getLatestPoint(R) || p === 0 && c !== ht))
      if (this.rotationInertia.set(0, 0), this.dragInertia.set(0, 0, 0), i.isOrthographicCamera) {
        this._updateZoomDirection();
        const m = this.zoomPointSet || this._updateZoomPoint();
        Ot.unproject(i);
        const u = Math.pow(0.95, Math.abs(p * 0.05));
        let d = p > 0 ? 1 / Math.abs(u) : u;
        d *= h, d > 1 ? l < i.zoom * d && (d = 1) : a > i.zoom * d && (d = 1), i.zoom *= d, i.updateProjectionMatrix(), m && (lt(R.x, R.y, r, Zt), Zt.unproject(i), i.position.sub(Zt).add(Ot), i.updateMatrixWorld());
      } else {
        this._updateZoomDirection();
        const m = M.copy(e);
        if (this.zoomPointSet || this._updateZoomPoint()) {
          const u = t.distanceTo(i.position);
          if (p < 0) {
            const d = Math.min(0, u - o);
            p = p * u * h * 25e-4, p = Math.max(p, d);
          } else {
            const d = Math.max(0, u - s);
            p = p * Math.max(u - s, 0) * h * 25e-4, p = Math.min(p, d);
          }
          i.position.addScaledVector(e, p), i.updateMatrixWorld();
        } else {
          const u = this._getPointBelowCamera();
          if (u) {
            const d = u.distance;
            m.set(0, 0, -1).transformDirection(i.matrixWorld), i.position.addScaledVector(m, p * d * 0.01), i.updateMatrixWorld();
          }
        }
      }
  }
  _updateZoomDirection() {
    if (this.zoomDirectionSet)
      return;
    const { domElement: t, raycaster: e, camera: i, zoomDirection: s, pointerTracker: o } = this;
    o.getLatestPoint(R), lt(R.x, R.y, t, Ot), B(e, Ot, i), s.copy(e.ray.direction).normalize(), this.zoomDirectionSet = true;
  }
  // update the point being zoomed in to based on the zoom direction
  _updateZoomPoint() {
    const {
      camera: t,
      zoomDirectionSet: e,
      zoomDirection: i,
      raycaster: s,
      zoomPoint: o,
      pointerTracker: n,
      domElement: r
    } = this;
    if (this._zoomPointWasSet = false, !e)
      return false;
    t.isOrthographicCamera && n.getLatestPoint(yt) ? (lt(yt.x, yt.y, r, yt), B(s, yt, t)) : (s.ray.origin.copy(t.position), s.ray.direction.copy(i), s.near = 0, s.far = 1 / 0);
    const a = this._raycast(s);
    return a ? (o.copy(a.point), this.zoomPointSet = true, this._zoomPointWasSet = true, true) : false;
  }
  // returns the point below the camera
  _getPointBelowCamera(t = this.camera.position, e = this.up) {
    const { raycaster: i } = this;
    i.ray.direction.copy(e).multiplyScalar(-1), i.ray.origin.copy(t).addScaledVector(e, 1e5), i.near = 0, i.far = 1 / 0;
    const s = this._raycast(i);
    return s && (s.distance -= 1e5), s;
  }
  // update the drag action
  _updatePosition(t) {
    const {
      raycaster: e,
      camera: i,
      pivotPoint: s,
      up: o,
      pointerTracker: n,
      domElement: r,
      state: a,
      dragInertia: l
    } = this;
    if (a === tt) {
      if (n.getCenterPoint(R), lt(R.x, R.y, r, R), he.setFromNormalAndCoplanarPoint(o, s), B(e, R, i), Math.abs(e.ray.direction.dot(o)) < Ht) {
        const h = Math.acos(Ht);
        It.crossVectors(e.ray.direction, o).normalize(), e.ray.direction.copy(o).applyAxisAngle(It, h).multiplyScalar(-1);
      }
      if (this.getUpDirection(s, I), Math.abs(e.ray.direction.dot(I)) < Gt) {
        const h = Math.acos(Gt);
        It.crossVectors(e.ray.direction, I).normalize(), e.ray.direction.copy(I).applyAxisAngle(It, h).multiplyScalar(-1);
      }
      e.ray.intersectPlane(he, M) && (U.subVectors(s, M), i.position.add(U), i.updateMatrixWorld(), U.multiplyScalar(1 / t), n.getMoveDistance() / t < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (l.copy(U), this.inertiaStableFrames = 0));
    }
  }
  _updateRotation(t) {
    const {
      pivotPoint: e,
      pointerTracker: i,
      domElement: s,
      state: o,
      rotationInertia: n
    } = this;
    o === Y && (i.getCenterPoint(R), i.getPreviousCenterPoint(pe), xt.subVectors(R, pe).multiplyScalar(2 * Math.PI / s.clientHeight), this._applyRotation(xt.x, xt.y, e), xt.multiplyScalar(1 / t), i.getMoveDistance() / t < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (n.copy(xt), this.inertiaStableFrames = 0));
  }
  _applyRotation(t, e, i) {
    if (t === 0 && e === 0)
      return;
    const {
      camera: s,
      minAltitude: o,
      maxAltitude: n,
      rotationSpeed: r
    } = this, a = -t * r;
    let l = e * r;
    A.set(0, 0, 1).transformDirection(s.matrixWorld), k.set(1, 0, 0).transformDirection(s.matrixWorld), this.getUpDirection(i, I);
    let h;
    I.dot(A) > 1 - 1e-10 ? h = 0 : (M.crossVectors(I, A).normalize(), h = Math.sign(M.dot(k)) * I.angleTo(A)), l > 0 ? (l = Math.min(h - o, l), l = Math.max(0, l)) : (l = Math.max(h - n, l), l = Math.min(0, l)), H.setFromAxisAngle(I, a), dt(i, H, J), s.matrixWorld.premultiply(J), k.set(1, 0, 0).transformDirection(s.matrixWorld), H.setFromAxisAngle(k, -l), dt(i, H, J), s.matrixWorld.premultiply(J), s.matrixWorld.decompose(s.position, s.quaternion, M);
  }
  // sets the "up" axis for the current surface of the tile set
  _setFrame(t) {
    const {
      up: e,
      camera: i,
      zoomPoint: s,
      zoomDirectionSet: o,
      zoomPointSet: n,
      scaleZoomOrientationAtEdges: r
    } = this;
    if (o && (n || this._updateZoomPoint())) {
      if (H.setFromUnitVectors(e, t), r) {
        this.getUpDirection(s, M);
        let a = Math.max(M.dot(e) - 0.6, 0) / 0.4;
        a = T.mapLinear(a, 0, 0.5, 0, 1), a = Math.min(a, 1), i.isOrthographicCamera && (a *= 0.1), H.slerp(Mi, 1 - a);
      }
      dt(s, H, J), i.updateMatrixWorld(), i.matrixWorld.premultiply(J), i.matrixWorld.decompose(i.position, i.quaternion, M), this.zoomDirectionSet = false, this._updateZoomDirection();
    }
    e.copy(t), i.updateMatrixWorld();
  }
  _raycast(t) {
    const { scene: e, useFallbackPlane: i, fallbackPlane: s } = this, o = t.intersectObject(e)[0] || null;
    if (o)
      return o;
    if (i) {
      const n = s;
      if (t.ray.intersectPlane(n, M))
        return {
          point: M.clone(),
          distance: t.ray.origin.distanceTo(M)
        };
    }
    return null;
  }
  // tilt the camera to align with the provided "up" value
  _alignCameraUp(t, e = 1) {
    const { camera: i, state: s, pivotPoint: o, zoomPoint: n, zoomPointSet: r } = this;
    i.updateMatrixWorld(), A.set(0, 0, -1).transformDirection(i.matrixWorld), k.set(-1, 0, 0).transformDirection(i.matrixWorld);
    let a = T.mapLinear(1 - Math.abs(A.dot(t)), 0, 0.2, 0, 1);
    a = T.clamp(a, 0, 1), e *= a, jt.crossVectors(t, A), jt.lerp(k, 1 - e).normalize(), H.setFromUnitVectors(k, jt), i.quaternion.premultiply(H);
    let l = null;
    s === tt || s === Y ? l = St.copy(o) : r && (l = St.copy(n)), l && (Ct.copy(i.matrixWorld).invert(), M.copy(l).applyMatrix4(Ct), i.updateMatrixWorld(), M.applyMatrix4(i.matrixWorld), Et.subVectors(l, M), i.position.add(Et)), i.updateMatrixWorld();
  }
  // clamp rotation to the given "up" vector
  _clampRotation(t) {
    const { camera: e, minAltitude: i, maxAltitude: s, state: o, pivotPoint: n, zoomPoint: r, zoomPointSet: a } = this;
    e.updateMatrixWorld(), A.set(0, 0, 1).transformDirection(e.matrixWorld), k.set(1, 0, 0).transformDirection(e.matrixWorld);
    let l;
    t.dot(A) > 1 - 1e-10 ? l = 0 : (M.crossVectors(t, A), l = Math.sign(M.dot(k)) * t.angleTo(A));
    let h;
    if (l > s)
      h = s;
    else if (l < i)
      h = i;
    else
      return;
    A.copy(t), H.setFromAxisAngle(k, h), A.applyQuaternion(H).normalize(), M.crossVectors(A, k).normalize(), J.makeBasis(k, M, A), e.quaternion.setFromRotationMatrix(J);
    let c = null;
    o === tt || o === Y ? c = St.copy(n) : a && (c = St.copy(r)), c && (Ct.copy(e.matrixWorld).invert(), M.copy(c).applyMatrix4(Ct), e.updateMatrixWorld(), M.applyMatrix4(e.matrixWorld), Et.subVectors(c, M), e.position.add(Et)), e.updateMatrixWorld();
  }
}
const ge = /* @__PURE__ */ new O(), at = /* @__PURE__ */ new O(), V = /* @__PURE__ */ new y(), v = /* @__PURE__ */ new y(), X = /* @__PURE__ */ new y(), N = /* @__PURE__ */ new y(), Pi = /* @__PURE__ */ new y(), ct = /* @__PURE__ */ new y(), K = /* @__PURE__ */ new et(), ye = /* @__PURE__ */ new y(), ot = /* @__PURE__ */ new y(), C = /* @__PURE__ */ new zt(), xe = /* @__PURE__ */ new zt$1(), bt = /* @__PURE__ */ new F(), be = {}, vi = 2550;
class Fi extends _i {
  get tilesGroup() {
    return console.warn('GlobeControls: "tilesGroup" has been deprecated. Use "ellipsoidGroup", instead.'), this.ellipsoidFrame;
  }
  get ellipsoidFrame() {
    return this.ellipsoidGroup.matrixWorld;
  }
  get ellipsoidFrameInverse() {
    const { ellipsoidGroup: t, ellipsoidFrame: e, _ellipsoidFrameInverse: i } = this;
    return t.matrixWorldInverse ? t.matrixWorldInverse : i.copy(e).invert();
  }
  constructor(t = null, e = null, i = null, s = null) {
    super(t, e, i), this.isGlobeControls = true, this._dragMode = 0, this._rotationMode = 0, this.maxZoom = 0.01, this.nearMargin = 0.25, this.farMargin = 0, this.useFallbackPlane = false, this.autoAdjustCameraRotation = false, this.globeInertia = new et(), this.globeInertiaFactor = 0, this.ellipsoid = ut.clone(), this.ellipsoidGroup = new Mt(), this._ellipsoidFrameInverse = new O(), s !== null && this.setTilesRenderer(s);
  }
  setTilesRenderer(t) {
    super.setTilesRenderer(t), t !== null && this.setEllipsoid(t.ellipsoid, t.group);
  }
  setEllipsoid(t, e) {
    this.ellipsoid = t || ut.clone(), this.ellipsoidGroup = e || new Mt();
  }
  getPivotPoint(t) {
    const { camera: e, ellipsoidFrame: i, ellipsoidFrameInverse: s, ellipsoid: o } = this;
    return N.set(0, 0, -1).transformDirection(e.matrixWorld), C.origin.copy(e.position), C.direction.copy(N), C.applyMatrix4(s), o.closestPointToRayEstimate(C, v).applyMatrix4(i), (super.getPivotPoint(t) === null || V.subVectors(t, C.origin).dot(C.direction) > V.subVectors(v, C.origin).dot(C.direction)) && t.copy(v), t;
  }
  // get the vector to the center of the provided globe
  getVectorToCenter(t) {
    const { ellipsoidFrame: e, camera: i } = this;
    return t.setFromMatrixPosition(e).sub(i.position);
  }
  // get the distance to the center of the globe
  getDistanceToCenter() {
    return this.getVectorToCenter(v).length();
  }
  getUpDirection(t, e) {
    const { ellipsoidFrame: i, ellipsoidFrameInverse: s, ellipsoid: o } = this;
    v.copy(t).applyMatrix4(s), o.getPositionToNormal(v, e), e.transformDirection(i);
  }
  getCameraUpDirection(t) {
    const { ellipsoidFrame: e, ellipsoidFrameInverse: i, ellipsoid: s, camera: o } = this;
    o.isOrthographicCamera ? (this._getVirtualOrthoCameraPosition(v), v.applyMatrix4(i), s.getPositionToNormal(v, t), t.transformDirection(e)) : this.getUpDirection(o.position, t);
  }
  update(t = Math.min(this.clock.getDelta(), 64 / 1e3)) {
    if (!this.enabled || !this.camera || t === 0)
      return;
    const { camera: e, pivotMesh: i } = this;
    this._isNearControls() ? this.scaleZoomOrientationAtEdges = this.zoomDelta < 0 : (this.state !== G && this._dragMode !== 1 && this._rotationMode !== 1 && (i.visible = false), this.scaleZoomOrientationAtEdges = false);
    const s = this.needsUpdate || this._inertiaNeedsUpdate();
    super.update(t), this.adjustCamera(e), s && this._isNearControls() && (this.getCameraUpDirection(ct), this._alignCameraUp(ct, 1), this.getCameraUpDirection(ct), this._clampRotation(ct));
  }
  // Updates the passed camera near and far clip planes to encapsulate the ellipsoid from the
  // current position in addition to adjusting the height.
  adjustCamera(t) {
    super.adjustCamera(t);
    const { ellipsoidFrame: e, ellipsoidFrameInverse: i, ellipsoid: s, nearMargin: o, farMargin: n } = this, r = Math.max(...s.radius);
    if (t.isPerspectiveCamera) {
      const a = v.setFromMatrixPosition(e).sub(t.position).length(), l = o * r, h = T.clamp((a - r) / l, 0, 1), c = T.lerp(1, 1e3, h);
      t.near = Math.max(c, a - r - l), V.copy(t.position).applyMatrix4(i), s.getPositionToCartographic(V, be);
      const p = Math.max(s.getPositionElevation(V), vi), m = s.calculateHorizonDistance(be.lat, p);
      t.far = m + 0.1 + r * n, t.updateProjectionMatrix();
    } else {
      this._getVirtualOrthoCameraPosition(t.position, t), t.updateMatrixWorld(), ge.copy(t.matrixWorld).invert(), v.setFromMatrixPosition(e).applyMatrix4(ge);
      const a = -v.z;
      t.near = a - r * (1 + o), t.far = a + 0.1 + r * n, t.position.addScaledVector(N, t.near), t.far -= t.near, t.near = 0, t.updateProjectionMatrix(), t.updateMatrixWorld();
    }
  }
  // resets the "stuck" drag modes
  setState(...t) {
    super.setState(...t), this._dragMode = 0, this._rotationMode = 0;
  }
  _updateInertia(t) {
    super._updateInertia(t);
    const {
      globeInertia: e,
      enableDamping: i,
      dampingFactor: s,
      camera: o,
      cameraRadius: n,
      minDistance: r,
      inertiaTargetDistance: a,
      ellipsoidFrame: l
    } = this;
    if (!this.enableDamping || this.inertiaStableFrames > 1) {
      this.globeInertiaFactor = 0, this.globeInertia.identity();
      return;
    }
    const h = Math.pow(2, -t / s), c = Math.max(o.near, n, r, a), u = 0.25 * (2 / (2 * 1e3));
    if (X.setFromMatrixPosition(l), this.globeInertiaFactor !== 0) {
      B(C, v.set(0, 0, -1), o), C.applyMatrix4(o.matrixWorldInverse), C.direction.normalize(), C.recast(-C.direction.dot(C.origin)).at(c / C.direction.z, v), v.applyMatrix4(o.matrixWorld), B(C, V.set(u, u, -1), o), C.applyMatrix4(o.matrixWorldInverse), C.direction.normalize(), C.recast(-C.direction.dot(C.origin)).at(c / C.direction.z, V), V.applyMatrix4(o.matrixWorld), v.sub(X).normalize(), V.sub(X).normalize(), this.globeInertiaFactor *= h;
      const d = v.angleTo(V) / t;
      (2 * Math.acos(e.w) * this.globeInertiaFactor < d || !i) && (this.globeInertiaFactor = 0, e.identity());
    }
    this.globeInertiaFactor !== 0 && (e.w === 1 && (e.x !== 0 || e.y !== 0 || e.z !== 0) && (e.w = Math.min(e.w, 1 - 1e-9)), X.setFromMatrixPosition(l), K.identity().slerp(e, this.globeInertiaFactor * t), dt(X, K, at), o.matrixWorld.premultiply(at), o.matrixWorld.decompose(o.position, o.quaternion, v));
  }
  _inertiaNeedsUpdate() {
    return super._inertiaNeedsUpdate() || this.globeInertiaFactor !== 0;
  }
  _updatePosition(t) {
    if (this.state === tt) {
      this._dragMode === 0 && (this._dragMode = this._isNearControls() ? 1 : -1);
      const {
        raycaster: e,
        camera: i,
        pivotPoint: s,
        pointerTracker: o,
        domElement: n,
        ellipsoidFrame: r,
        ellipsoidFrameInverse: a
      } = this, l = V, h = Pi;
      o.getCenterPoint(bt), lt(bt.x, bt.y, n, bt), B(e, bt, i), e.ray.applyMatrix4(a);
      const c = v.copy(s).applyMatrix4(a).length();
      if (xe.radius.setScalar(c), !xe.intersectRay(e.ray, v)) {
        this.resetState(), this._updateInertia(t);
        return;
      }
      v.applyMatrix4(r), X.setFromMatrixPosition(r), l.subVectors(s, X).normalize(), h.subVectors(v, X).normalize(), K.setFromUnitVectors(h, l), dt(X, K, at), i.matrixWorld.premultiply(at), i.matrixWorld.decompose(i.position, i.quaternion, v), o.getMoveDistance() / t < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (this.globeInertia.copy(K), this.globeInertiaFactor = 1 / t, this.inertiaStableFrames = 0);
    }
  }
  // disable rotation once we're outside the control transition
  _updateRotation(...t) {
    this._rotationMode === 1 || this._isNearControls() ? (this._rotationMode = 1, super._updateRotation(...t)) : (this.pivotMesh.visible = false, this._rotationMode = -1);
  }
  _updateZoom() {
    const { zoomDelta: t, ellipsoid: e, zoomSpeed: i, zoomPoint: s, camera: o, maxZoom: n, state: r } = this;
    if (r !== ht && t === 0)
      return;
    this.rotationInertia.set(0, 0), this.dragInertia.set(0, 0, 0), this.globeInertia.identity(), this.globeInertiaFactor = 0;
    const a = T.clamp(T.mapLinear(Math.abs(t), 0, 20, 0, 1), 0, 1);
    if (this._isNearControls() || t > 0) {
      if (this._updateZoomDirection(), t < 0 && (this.zoomPointSet || this._updateZoomPoint())) {
        N.set(0, 0, -1).transformDirection(o.matrixWorld).normalize(), ot.copy(this.up).multiplyScalar(-1), this.getUpDirection(s, ye);
        const l = T.clamp(T.mapLinear(-ye.dot(ot), 1, 0.95, 0, 1), 0, 1), h = 1 - N.dot(ot), c = o.isOrthographicCamera ? 0.05 : 1, p = T.clamp(a * 3, 0, 1), m = Math.min(l * h * c * p, 0.1);
        ot.lerpVectors(N, ot, m).normalize(), K.setFromUnitVectors(N, ot), dt(s, K, at), o.matrixWorld.premultiply(at), o.matrixWorld.decompose(o.position, o.quaternion, ot), this.zoomDirection.subVectors(s, o.position).normalize();
      }
      super._updateZoom();
    } else if (o.isPerspectiveCamera) {
      const l = this._getPerspectiveTransitionDistance(), h = this._getMaxPerspectiveDistance(), c = T.mapLinear(this.getDistanceToCenter(), l, h, 0, 1);
      this._tiltTowardsCenter(T.lerp(0, 0.4, c * a)), this._alignCameraUpToNorth(T.lerp(0, 0.2, c * a));
      const p = this.getDistanceToCenter() - e.radius.x, m = t * p * i * 25e-4, u = Math.max(m, Math.min(this.getDistanceToCenter() - h, 0));
      this.getVectorToCenter(v).normalize(), this.camera.position.addScaledVector(v, u), this.camera.updateMatrixWorld(), this.zoomDelta = 0;
    } else {
      const l = this._getOrthographicTransitionZoom(), h = this._getMinOrthographicZoom(), c = T.mapLinear(o.zoom, l, h, 0, 1);
      this._tiltTowardsCenter(T.lerp(0, 0.4, c * a)), this._alignCameraUpToNorth(T.lerp(0, 0.2, c * a));
      const p = this.zoomDelta, m = Math.pow(0.95, Math.abs(p * 0.05)), u = p > 0 ? 1 / Math.abs(m) : m, d = h / o.zoom, x = Math.max(u * i, Math.min(d, 1));
      o.zoom = Math.min(n, o.zoom * x), o.updateProjectionMatrix(), this.zoomDelta = 0, this.zoomDirectionSet = false;
    }
  }
  // tilt the camera to align with north
  _alignCameraUpToNorth(t) {
    const { ellipsoidFrame: e } = this;
    ct.set(0, 0, 1).transformDirection(e), this._alignCameraUp(ct, t);
  }
  // tilt the camera to look at the center of the globe
  _tiltTowardsCenter(t) {
    const {
      camera: e,
      ellipsoidFrame: i
    } = this;
    N.set(0, 0, -1).transformDirection(e.matrixWorld).normalize(), v.setFromMatrixPosition(i).sub(e.position).normalize(), v.lerp(N, 1 - t).normalize(), K.setFromUnitVectors(N, v), e.quaternion.premultiply(K), e.updateMatrixWorld();
  }
  // returns the perspective camera transition distance can move to based on globe size and fov
  _getPerspectiveTransitionDistance() {
    const { camera: t, ellipsoid: e } = this;
    if (!t.isPerspectiveCamera)
      throw new Error();
    const i = Math.max(...e.radius), s = 2 * Math.atan(Math.tan(T.DEG2RAD * t.fov * 0.5) * t.aspect), o = i / Math.tan(T.DEG2RAD * t.fov * 0.5), n = i / Math.tan(s * 0.5);
    return Math.max(o, n);
  }
  // returns the max distance the perspective camera can move to based on globe size and fov
  _getMaxPerspectiveDistance() {
    const { camera: t, ellipsoid: e } = this;
    if (!t.isPerspectiveCamera)
      throw new Error();
    const i = Math.max(...e.radius), s = 2 * Math.atan(Math.tan(T.DEG2RAD * t.fov * 0.5) * t.aspect), o = i / Math.tan(T.DEG2RAD * t.fov * 0.5), n = i / Math.tan(s * 0.5);
    return 2 * Math.max(o, n);
  }
  // returns the transition threshold for orthographic zoom based on the globe size and camera settings
  _getOrthographicTransitionZoom() {
    const { camera: t, ellipsoid: e } = this;
    if (!t.isOrthographicCamera)
      throw new Error();
    const i = t.top - t.bottom, s = t.right - t.left, o = Math.max(i, s), r = 2 * Math.max(...e.radius);
    return 2 * o / r;
  }
  // returns the minimum allowed orthographic zoom based on the globe size and camera settings
  _getMinOrthographicZoom() {
    const { camera: t, ellipsoid: e } = this;
    if (!t.isOrthographicCamera)
      throw new Error();
    const i = t.top - t.bottom, s = t.right - t.left, o = Math.min(i, s), r = 2 * Math.max(...e.radius);
    return 0.7 * o / r;
  }
  // returns the "virtual position" of the orthographic based on where it is and
  // where it's looking primarily so we can reasonably position the camera object
  // in space and derive a reasonable "up" value.
  _getVirtualOrthoCameraPosition(t, e = this.camera) {
    const { ellipsoidFrame: i, ellipsoidFrameInverse: s, ellipsoid: o } = this;
    if (!e.isOrthographicCamera)
      throw new Error();
    C.origin.copy(e.position), C.direction.set(0, 0, -1).transformDirection(e.matrixWorld), C.applyMatrix4(s), o.closestPointToRayEstimate(C, V).applyMatrix4(i);
    const n = e.top - e.bottom, r = e.right - e.left, a = Math.max(n, r) / e.zoom;
    N.set(0, 0, -1).transformDirection(e.matrixWorld);
    const l = V.sub(e.position).dot(N);
    t.copy(e.position).addScaledVector(N, l - a * 4);
  }
  _isNearControls() {
    const { camera: t } = this;
    return t.isPerspectiveCamera ? this.getDistanceToCenter() < this._getPerspectiveTransitionDistance() : t.zoom > this._getOrthographicTransitionZoom();
  }
  _raycast(t) {
    const e = super._raycast(t);
    if (e === null) {
      const { ellipsoid: i, ellipsoidFrame: s, ellipsoidFrameInverse: o } = this;
      C.copy(t.ray).applyMatrix4(o);
      const n = i.intersectRay(C, v);
      return n !== null ? (n.applyMatrix4(s), {
        point: n.clone(),
        distance: n.distanceTo(t.ray.origin)
      }) : null;
    } else
      return e;
  }
}
const W = new y(), nt = new y(), rt = new ve(), Ti = new y(), wi = new y(), Di = new y(), Me = new et(), Ci = new et();
class Wi extends pt {
  get animating() {
    return this._alpha !== 0 && this._alpha !== 1;
  }
  get alpha() {
    return this._target === 0 ? 1 - this._alpha : this._alpha;
  }
  get camera() {
    return this._alpha === 0 ? this.perspectiveCamera : this._alpha === 1 ? this.orthographicCamera : this.transitionCamera;
  }
  get mode() {
    return this._target === 0 ? "perspective" : "orthographic";
  }
  set mode(t) {
    if (t === this.mode)
      return;
    const e = this.camera;
    t === "perspective" ? (this._target = 0, this._alpha = 0) : (this._target = 1, this._alpha = 1), this.dispatchEvent({ type: "camera-change", camera: this.camera, prevCamera: e });
  }
  constructor(t = new $t(), e = new ve()) {
    super(), this.perspectiveCamera = t, this.orthographicCamera = e, this.transitionCamera = new $t(), this.orthographicPositionalZoom = true, this.orthographicOffset = 50, this.fixedPoint = new y(), this.duration = 200, this.autoSync = true, this.easeFunction = (i) => i, this._target = 0, this._alpha = 0, this._clock = new Pe();
  }
  toggle() {
    this._target = this._target === 1 ? 0 : 1, this._clock.getDelta(), this.dispatchEvent({ type: "toggle" });
  }
  update(t = Math.min(this._clock.getDelta(), 64 / 1e3)) {
    this.autoSync && this.syncCameras();
    const { perspectiveCamera: e, orthographicCamera: i, transitionCamera: s, camera: o } = this, n = t * 1e3;
    if (this._alpha !== this._target) {
      const h = Math.sign(this._target - this._alpha) * n / this.duration;
      this._alpha = T.clamp(this._alpha + h, 0, 1), this.dispatchEvent({ type: "change", alpha: this.alpha });
    }
    const r = o;
    let a = null;
    this._alpha === 0 ? a = e : this._alpha === 1 ? a = i : (a = s, this._updateTransitionCamera()), r !== a && (a === s && this.dispatchEvent({ type: "transition-start" }), this.dispatchEvent({ type: "camera-change", camera: a, prevCamera: r }), r === s && this.dispatchEvent({ type: "transition-end" }));
  }
  syncCameras() {
    const t = this._getFromCamera(), { perspectiveCamera: e, orthographicCamera: i, transitionCamera: s, fixedPoint: o } = this;
    if (W.set(0, 0, -1).transformDirection(t.matrixWorld).normalize(), t.isPerspectiveCamera) {
      if (this.orthographicPositionalZoom)
        i.position.copy(e.position).addScaledVector(W, -this.orthographicOffset), i.rotation.copy(e.rotation), i.updateMatrixWorld();
      else {
        const l = nt.subVectors(o, i.position).dot(W), h = nt.subVectors(o, e.position).dot(W);
        nt.copy(e.position).addScaledVector(W, h), i.rotation.copy(e.rotation), i.position.copy(nt).addScaledVector(W, -l), i.updateMatrixWorld();
      }
      const n = Math.abs(nt.subVectors(e.position, o).dot(W)), r = 2 * Math.tan(T.DEG2RAD * e.fov * 0.5) * n, a = i.top - i.bottom;
      i.zoom = a / r, i.updateProjectionMatrix();
    } else {
      const n = Math.abs(nt.subVectors(i.position, o).dot(W)), a = (i.top - i.bottom) / i.zoom * 0.5 / Math.tan(T.DEG2RAD * e.fov * 0.5);
      e.rotation.copy(i.rotation), e.position.copy(i.position).addScaledVector(W, n).addScaledVector(W, -a), e.updateMatrixWorld(), this.orthographicPositionalZoom && (i.position.copy(e.position).addScaledVector(W, -this.orthographicOffset), i.updateMatrixWorld());
    }
    s.position.copy(e.position), s.rotation.copy(e.rotation);
  }
  _getTransitionDirection() {
    return Math.sign(this._target - this._alpha);
  }
  _getToCamera() {
    const t = this._getTransitionDirection();
    return t === 0 ? this._target === 0 ? this.perspectiveCamera : this.orthographicCamera : t > 0 ? this.orthographicCamera : this.perspectiveCamera;
  }
  _getFromCamera() {
    const t = this._getTransitionDirection();
    return t === 0 ? this._target === 0 ? this.perspectiveCamera : this.orthographicCamera : t > 0 ? this.perspectiveCamera : this.orthographicCamera;
  }
  _updateTransitionCamera() {
    const { perspectiveCamera: t, orthographicCamera: e, transitionCamera: i, fixedPoint: s } = this, o = this.easeFunction(this._alpha);
    W.set(0, 0, -1).transformDirection(e.matrixWorld).normalize(), rt.copy(e), rt.position.addScaledVector(W, e.near), e.far -= e.near, e.near = 0, W.set(0, 0, -1).transformDirection(t.matrixWorld).normalize();
    const n = Math.abs(nt.subVectors(t.position, s).dot(W)), r = 2 * Math.tan(T.DEG2RAD * t.fov * 0.5) * n, a = Ci.slerpQuaternions(t.quaternion, rt.quaternion, o), l = T.lerp(t.fov, 1, o), h = r * 0.5 / Math.tan(T.DEG2RAD * l * 0.5), c = Di.copy(rt.position).sub(s).applyQuaternion(Me.copy(rt.quaternion).invert()), p = wi.copy(t.position).sub(s).applyQuaternion(Me.copy(t.quaternion).invert()), m = Ti.lerpVectors(p, c, o);
    m.z -= Math.abs(m.z) - h;
    const u = -(p.z - m.z), d = -(c.z - m.z), x = T.lerp(u + t.near, d + rt.near, o), S = T.lerp(u + t.far, d + rt.far, o), P = Math.max(S, 0) - Math.max(x, 0);
    i.aspect = t.aspect, i.fov = l, i.near = Math.max(x, P * 1e-5), i.far = S, i.position.copy(m).applyQuaternion(a).add(s), i.quaternion.copy(a), i.updateProjectionMatrix(), i.updateMatrixWorld();
  }
}

export { Ai, E, Fi, Wi, h, y$2 as y, zt$1 as zt };
//# sourceMappingURL=CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js.map
