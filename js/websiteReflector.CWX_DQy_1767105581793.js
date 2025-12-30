import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$3 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './laptop.vue_vue_type_script_setup_true_lang.DUfArU1p1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "websiteReflector",
  setup(__props) {
    const configState = {
      reflectivity: 3.6,
      showGridHelper: false
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$1)),
        _createVNode(_component_TresCanvas, {
          clearColor: "#241a1a",
          "window-size": ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [-5, 4, 3] }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              intensity: 2,
              position: [2, 3, 0],
              "cast-shadow": true,
              "shadow-camera-far": 50,
              "shadow-camera-left": -10,
              "shadow-camera-right": 10,
              "shadow-camera-top": 10,
              "shadow-camera-bottom": -10
            }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$3, _normalizeProps(_guardReactiveProps(configState)), null, 16)
              ]),
              _: 1
            }))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=websiteReflector.CWX_DQy_1767105581793.js.map
