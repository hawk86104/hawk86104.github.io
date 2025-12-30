import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$3 as _sfc_main$1 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "hexagonalFloorPage",
  setup(__props) {
    const rtState = reactive({
      floorColor: "#ff0000",
      floorMetalness: 0.8,
      floorRoughness: 0.2,
      floorEnvMapIntensity: 2.5,
      sideColor: "#000000",
      sideOpacity: 0.56,
      speed: 0.1
    });
    const paneControl = new Pane({
      expanded: true
    });
    paneControl.addBinding(rtState, "floorColor", { label: "地板颜色" });
    paneControl.addBinding(rtState, "floorMetalness", { label: "地板金属度", min: 0, max: 1 });
    paneControl.addBinding(rtState, "floorRoughness", { label: "地板粗糙度", min: 0, max: 1 });
    paneControl.addBinding(rtState, "floorEnvMapIntensity", { label: "地板环境光强度", min: 0, max: 10 });
    paneControl.addBinding(rtState, "sideColor", { label: "侧面颜色" });
    paneControl.addBinding(rtState, "sideOpacity", { label: "侧面透明度", min: 0, max: 1 });
    paneControl.addBinding(rtState, "speed", { label: "动画速度", min: 0, max: 1, step: 0.01 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#000000",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [6, 6, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$1), _mergeProps(rtState, {
                scale: 2,
                position: [0, 0.5, 0]
              }), null, 16)
            ]),
            _: 1
          })),
          _createVNode(_sfc_main$2, {
            reflectivity: 1,
            showGridHelper: false,
            scale: 2
          })
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=hexagonalFloorPage.Bb73uHZf1767105581793.js.map
