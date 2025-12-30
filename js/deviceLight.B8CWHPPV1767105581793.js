import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main$6 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$2 } from './device.vue_vue_type_script_setup_true_lang.BD3Sn2Lg1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "deviceLight",
  setup(__props) {
    const state = reactive({
      clearColor: "#000",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      renderMode: "manual"
    });
    const controlsState = reactive({
      autoRotate: true
    });
    const deviceState = reactive({
      threshold: 0,
      // 阈值
      strength: 0.6,
      // 强度
      radius: 0.21
      // 半径
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(deviceState, "threshold", {
      label: "阈值",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(deviceState, "strength", {
      label: "强度",
      min: 0,
      max: 3,
      step: 0.2
    });
    paneControl.addBinding(deviceState, "radius", {
      label: "半径",
      min: 0,
      max: 1,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$1)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 5, 5],
              fov: 45,
              near: 1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(deviceState)), null, 16)
              ]),
              _: 1
            })),
            _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", { position: [0, -1, 0] }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=deviceLight.B8CWHPPV1767105581793.js.map
