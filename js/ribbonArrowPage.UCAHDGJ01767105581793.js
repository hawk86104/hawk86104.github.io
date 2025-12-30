import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$6 as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ribbonArrowPage",
  setup(__props) {
    const paneControl = new Pane({
      expanded: true
    });
    const raState = reactive({
      length: 20,
      speed: 1,
      width: 1,
      bendPosition: 0.5,
      curvature: 0.4,
      backgroundColor: "#00aaff",
      backgroundAlpha: 0.25,
      segments: 240,
      arrowColor: "#ffffff",
      arrowWidth: 2,
      arrowHeight: 2,
      arrowSpacing: 2,
      arrowOffset: 0,
      arrowLineWidth: 18,
      arrowStyle: "chevron",
      pixelWorldScale: 0.03
    });
    paneControl.addBinding(raState, "length", { label: "长度", min: 1, max: 60, step: 1 });
    paneControl.addBinding(raState, "speed", { label: "速度", min: -5, max: 5, step: 0.01 });
    paneControl.addBinding(raState, "width", { label: "宽度", min: 0.1, max: 5, step: 0.1 });
    paneControl.addBinding(raState, "bendPosition", { label: "弯折位置", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(raState, "curvature", { label: "弯曲度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(raState, "backgroundColor", { label: "背景颜色" });
    paneControl.addBinding(raState, "backgroundAlpha", { label: "背景透明度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(raState, "segments", { label: "分段数", min: 10, max: 500, step: 1 });
    paneControl.addBinding(raState, "arrowColor", { label: "箭头颜色" });
    paneControl.addBinding(raState, "arrowWidth", { label: "箭头高度", min: 0.1, max: 10, step: 0.1 });
    paneControl.addBinding(raState, "arrowHeight", { label: "箭头宽度", min: 0.1, max: 10, step: 0.1 });
    paneControl.addBinding(raState, "arrowSpacing", { label: "箭头间距", min: 0.1, max: 10, step: 0.1 });
    paneControl.addBinding(raState, "arrowOffset", { label: "箭头垂直偏移", min: -5, max: 5, step: 0.01 });
    paneControl.addBinding(raState, "arrowLineWidth", { label: "线条箭头粗细", min: 1, max: 50, step: 1 });
    paneControl.addBinding(raState, "arrowStyle", { label: "箭头样式", options: { Chevron: "chevron", Double: "double", Triangle: "triangle", Diamond: "diamond" } });
    paneControl.addBinding(raState, "pixelWorldScale", { label: "像素到世界单位比例", min: 1e-3, max: 0.1, step: 1e-3 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#333",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [16, 30, -30],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _createVNode(_unref(_sfc_main$1), _mergeProps({ position: [-2, 3, 0] }, raState, {
            "rotation-x": Math.PI / 2
          }), null, 16, ["rotation-x"]),
          _createVNode(_sfc_main$2, {
            reflectivity: 1,
            showGridHelper: false,
            scale: 10
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=ribbonArrowPage.UCAHDGJ01767105581793.js.map
