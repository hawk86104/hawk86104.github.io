import { importShared, Wz } from './index.BxB45aCK1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {watch} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "precipitation",
  props: {
    speed: { default: 12 },
    randomness: { default: 0 },
    count: { default: 6e3 },
    size: { default: 7 },
    areaX: { default: 1500 },
    areaY: { default: 1e3 },
    areaZ: { default: 1500 },
    type: { default: "snow" },
    color: { default: "#fff" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const imgList = {
      snow: "./plugins/digitalCity/image/snow.png",
      rain: "./plugins/digitalCity/image/rain.png",
      point: "./plugins/digitalCity/image/cilcle.png"
    };
    const textureCache = {};
    const preloadTextures = async () => {
      const loader = new THREE.TextureLoader();
      const promises = Object.entries(imgList).map(([key, url]) => {
        return new Promise((resolve, reject) => {
          loader.load(
            url,
            (tex) => {
              tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
              tex.needsUpdate = true;
              textureCache[key] = tex;
              resolve();
            },
            void 0,
            reject
          );
        });
      });
      await Promise.all(promises);
      console.log("✅ 所有图片预加载完成:", Object.keys(textureCache));
    };
    const getTexture = (key) => {
      return textureCache[key];
    };
    [__temp, __restore] = _withAsyncContext(() => preloadTextures()), await __temp, __restore();
    let curRexture = null;
    watch(
      () => props.type,
      (nv, ov) => {
        if (nv !== ov) {
          curRexture = getTexture(nv);
        }
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(Wz), {
        ref: "precipitationRef",
        position: [0, props.areaY / 2, 0],
        speed: props.speed,
        color: props.color,
        alphaTest: 0.5,
        area: [props.areaX, props.areaY, props.areaZ],
        count: props.count,
        depthWrite: true,
        randomness: props.randomness,
        size: props.size,
        opacity: 1,
        map: _unref(curRexture),
        alphaMap: _unref(curRexture)
      }, null, 8, ["position", "speed", "color", "area", "count", "randomness", "size", "map", "alphaMap"]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js.map
