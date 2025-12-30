import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$2 as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
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
  __name: "dynamicRotatingBase",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 2.6,
      showGridHelper: false,
      scale: 4
    });
    const configState = reactive({
      type: "videoA",
      color: "#fff",
      opacity: 0.95,
      rotationZ: 0.01,
      videoLoop: false
    });
    const paneControl = new Pane();
    paneControl.addBlade({
      view: "list",
      label: "底座类型",
      options: ["imgA", "imgB", "imgC", "videoA", "videoB", "videoC"].map((v) => ({ text: v, value: v })),
      value: configState.type
    }).on("change", (e) => {
      configState.type = e.value;
    });
    paneControl.addBinding(configState, "videoLoop", { label: "视频重复" });
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(configState, "rotationZ", {
      label: "自转速度",
      min: -0.1,
      max: 0.1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 20, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 6 }, null, -1)),
          _createVNode(_unref(_sfc_main$1), _mergeProps({
            "rotation-x": -Math.PI / 2,
            position: [2, -0.6, 2]
          }, configState), null, 16, ["rotation-x"]),
          _createVNode(_unref(_sfc_main$1), {
            "rotation-x": -Math.PI / 2,
            position: [2, 0.1, 2],
            color: "#f605ff",
            type: "imgB"
          }, null, 8, ["rotation-x"]),
          _createVNode(_unref(_sfc_main$1), {
            "rotation-x": -Math.PI / 2,
            position: [-2, 0, -2],
            color: "#02a7ff",
            type: "imgC"
          }, null, 8, ["rotation-x"]),
          _createVNode(_unref(_sfc_main$1), {
            "rotation-x": -Math.PI / 2,
            position: [0, 0, -10],
            color: "#f605ff",
            type: "videoB"
          }, null, 8, ["rotation-x"]),
          _createVNode(_unref(_sfc_main$1), {
            "rotation-x": -Math.PI / 2,
            position: [0, -0.7, -10],
            color: "#02a7ff",
            type: "videoC"
          }, null, 8, ["rotation-x"]),
          _createVNode(_unref(_sfc_main$1), {
            "rotation-x": -Math.PI / 2,
            position: [0, -0.5, 10],
            color: "#f605ff",
            type: "imgA"
          }, null, 8, ["rotation-x"]),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -1, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=dynamicRotatingBase.BWC6AxWZ1767105581793.js.map
