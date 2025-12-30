import { importShared, ol, Kk, tz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "glb",
  setup(__props) {
    const state = reactive({
      clearColor: "#ffffff",
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const modepath = `${"https://opensource.cdn.icegl.cn"}/model/gaussianSplatting/BurntCar-v1.glb`;
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [6, 6, 6],
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 3 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tz), {
                path: modepath,
                draco: "",
                decoderPath: "./draco/",
                position: [0, 1, 0]
              })
            ]),
            _: 1
          })),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [6, 2, 4],
            intensity: 2
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", null, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=glb.CuZ8F4LR1767105581793.js.map
