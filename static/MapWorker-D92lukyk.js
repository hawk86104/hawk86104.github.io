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

    const fetchingMap = /* @__PURE__ */ new Map();
    self.onmessage = async (e) => {
      const { id, tileNo, url, debug, abort } = e.data;
      if (abort) {
        fetchingMap.get(id)?.abort();
        fetchingMap.delete(id);
        self.postMessage({ id, error: true });
        return;
      }
      try {
        const fetch = new Fetch(url, { cache: "force-cache", mode: "cors" });
        fetchingMap.set(id, fetch);
        const bitmap = await getTileBitmap(tileNo, fetch, debug);
        self.postMessage({ id, bitmap }, [bitmap]);
      } catch (e2) {
        self.postMessage({ id, error: true });
      } finally {
        fetchingMap.delete(id);
      }
    };

})();
//# sourceMappingURL=MapWorker-D92lukyk.js.map
