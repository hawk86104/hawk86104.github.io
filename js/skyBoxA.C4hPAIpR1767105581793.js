import { importShared, Kk, Tz } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "skyBoxA",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
          _createVNode(_unref(Tz), {
            args: [3, 3, 3],
            color: "orange",
            position: [3, 2, 1],
            "cast-shadow": ""
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", {
            position: [0, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, { texture: "./plugins/skyBox/image/kloofendal_48d_partly_cloudy_puresky.jpg" })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=skyBoxA.C4hPAIpR1767105581793.js.map
