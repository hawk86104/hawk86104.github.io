import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$8 as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
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
  __name: "topoBasePage",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 2.6,
      showGridHelper: false,
      scale: 4
    });
    const baseType = ["baseModelA", "baseModelB", "baseModelC", "baseModelD", "baseModelE", "baseModelF", "baseModelG", "baseModelH"];
    const baseState = reactive({
      selected: "baseModelC",
      colorlist: ["#6381EE", "#FFFFFF", "#6381EE", "#FFFFFF", "#6381EE", "#FFFFFF"],
      roughness: 0.5,
      metalness: 0.6
    });
    const pane = new Pane();
    pane.addBlade({
      view: "list",
      label: "类型",
      options: baseType.map((item) => ({
        text: item,
        value: item
      })),
      value: baseState.selected
    }).on("change", (ev) => {
      baseState.selected = ev.value;
    });
    pane.addBinding(baseState, "metalness", { label: "金属度", min: 0, max: 1, step: 0.01 });
    pane.addBinding(baseState, "roughness", { label: "粗糙度", min: 0, max: 1, step: 0.01 });
    pane.addBinding(baseState.colorlist, 0, { label: "颜色1" });
    pane.addBinding(baseState.colorlist, 1, { label: "颜色2" });
    pane.addBinding(baseState.colorlist, 2, { label: "颜色3" });
    pane.addBinding(baseState.colorlist, 3, { label: "颜色4" });
    pane.addBinding(baseState.colorlist, 4, { label: "颜色5" });
    pane.addBinding(baseState.colorlist, 5, { label: "颜色6" });
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
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [8, 6, 10],
            intensity: 2
          }, null, -1)),
          _createVNode(_unref(_sfc_main$1), {
            selected: "baseModelA",
            position: [-6, 0, 0],
            scale: 3
          }),
          _createVNode(_unref(_sfc_main$1), _mergeProps(baseState, {
            type: baseType,
            scale: 3
          }), null, 16),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -2, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=topoBasePage.B0mWZyKe1767105581793.js.map
