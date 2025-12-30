import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './flexiblePipe2.vue_vue_type_script_setup_true_lang.ExGFogAl1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "flexiblePipe2Page",
  setup(__props) {
    const state = {
      clearColor: "#15151a",
      antialias: false,
      logarithmicDepthBuffer: true
    };
    const controlsState = {
      autoRotate: true
    };
    const flexiblePipeState = reactive({
      color: "#ff0000",
      uGapColor: "#ffffff",
      radius: 0.1,
      bodyLength: 2,
      headLength: 1,
      tailLength: 0.5,
      headAngle: 0,
      radialSegments: 16,
      tailAngle: 0,
      filletRadius: 0.3,
      speed: 0.01,
      metalness: 0.3,
      roughness: 0.5,
      reflectivity: 0.5,
      ior: 1.5,
      uStripeScale: 10
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(flexiblePipeState, "color", {
      label: "管体颜色"
    });
    paneControl.addBinding(flexiblePipeState, "uGapColor", {
      label: "间隔颜色"
    });
    paneControl.addBinding(flexiblePipeState, "uStripeScale", {
      label: "条纹数量",
      min: 0,
      max: 20,
      step: 0.1
    });
    paneControl.addBinding(flexiblePipeState, "radius", {
      label: "管道粗细",
      min: 1e-3,
      max: 1,
      step: 1e-3
    });
    paneControl.addBinding(flexiblePipeState, "bodyLength", {
      label: "中间长度",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(flexiblePipeState, "headLength", {
      label: "前段长度",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(flexiblePipeState, "headAngle", {
      label: "前段角度",
      min: 0,
      max: 359,
      step: 1
    });
    paneControl.addBinding(flexiblePipeState, "tailLength", {
      label: "后段长度",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(flexiblePipeState, "tailAngle", {
      label: "后段角度",
      min: 0,
      max: 359,
      step: 1
    });
    paneControl.addBinding(flexiblePipeState, "radialSegments", {
      label: "管平滑",
      min: 2,
      max: 16,
      step: 1
    });
    paneControl.addBinding(flexiblePipeState, "filletRadius", {
      label: "转角平滑",
      min: 0.1,
      max: 1.2,
      step: 0.01
    });
    paneControl.addBinding(flexiblePipeState, "speed", {
      label: "速度",
      min: -0.1,
      max: 0.1,
      step: 1e-3
    });
    paneControl.addBinding(flexiblePipeState, "metalness", {
      label: "金属度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(flexiblePipeState, "roughness", {
      label: "粗糙度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(flexiblePipeState, "reflectivity", {
      label: "反射率",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(flexiblePipeState, "ior", {
      label: "折射率",
      min: 1,
      max: 2.33,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 10, 15],
            fov: 25,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
            color: "#ffffff",
            intensity: 2
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$1), {
                position: [0, -1.562, 0],
                reflectivity: 2.6,
                showGridHelper: false,
                scale: 1.5
              })
            ]),
            _: 1
          })),
          _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(flexiblePipeState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=flexiblePipe2Page.u0ANfprC1767105581793.js.map
