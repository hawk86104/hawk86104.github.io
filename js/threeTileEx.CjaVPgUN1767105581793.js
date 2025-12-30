import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './mapBoxShow.vue_vue_type_script_setup_true_lang.Bn2M8Kh51767105581793.js';
import { informationDiv } from './informationDiv.BpVz_Xf81767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "threeTileEx",
  setup(__props) {
    const state = reactive({
      clearColor: "#dbf0ff",
      alpha: true,
      antialias: false,
      logarithmicDepthBuffer: true,
      precision: "highp"
    });
    const controlsState = reactive({
      enableDamping: true,
      makeDefault: true,
      screenSpacePanning: false,
      // minDistance: 0.1,
      // maxDistance: 30000,
      // maxPolarAngle: 1.2,
      // dampingFactor: 0.035,
      keyPanSpeed: 5
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 12, 0],
              fov: 70,
              near: 1,
              far: 4e10
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 16),
        _createVNode(informationDiv)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=threeTileEx.CjaVPgUN1767105581793.js.map
