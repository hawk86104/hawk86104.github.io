import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$7 as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rubberTilesPage",
  setup(__props) {
    const rtState = reactive({
      color: "#cccccc",
      repeat: {
        x: 3,
        y: 3
      },
      metalness: 1,
      roughness: 0.66,
      normalScale: 2
    });
    const paneControl = new Pane({
      expanded: true
    });
    paneControl.addBinding(rtState, "color", { label: "颜色" });
    paneControl.addBinding(rtState, "repeat", { label: "贴图重复", x: { min: 0.1, max: 10, step: 0.1 }, y: { min: 0.1, max: 10, step: 0.1 } });
    paneControl.addBinding(rtState, "metalness", { label: "金属度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "roughness", { label: "粗糙度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "normalScale", { label: "法线缩放", min: 0.1, max: 30, step: 0.1 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#000000",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [10, 12, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [0, 8, 0],
            intensity: 2,
            color: "#fff"
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(rtState)), null, 16)
            ]),
            _: 1
          })),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", {
            args: [10, 10],
            position: [0, -0.8, 0]
          }, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rubberTilesPage.CE2nPEGZ1767105581793.js.map
