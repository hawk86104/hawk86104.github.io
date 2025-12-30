import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cartoonMagicZone",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: true,
      scale: 1
    });
    const configState = reactive({
      color: "#ffffff",
      scale: 1
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "scale", {
      label: "大小",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 5, 5],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(configState)), null, 16),
          _createVNode(_unref(_sfc_main$1), {
            color: "yellow",
            scale: 1.5,
            position: [3, 0, 0]
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [3, 0, 0] }, [
            _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
            _createElementVNode("TresMeshBasicMaterial", { color: "yellow" })
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 0, 0] }, [
            _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
            _createElementVNode("TresMeshBasicMaterial", { color: "white" })
          ], -1)),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cartoonMagicZone.B4M0cxOK1767105581793.js.map
