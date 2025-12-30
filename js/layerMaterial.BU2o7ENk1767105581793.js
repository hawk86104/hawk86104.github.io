import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2, _sfc_main$1 as _sfc_main$3, _sfc_main$2 as _sfc_main$4 } from './displace.vue_vue_type_script_setup_true_lang.DClcUU_f1767105581793.js';
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

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [0, 0.5, 0] };
const {reactive,shallowReactive} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "layerMaterial",
  setup(__props) {
    const state = reactive({
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      antialias: true,
      pixelRatio: window.devicePixelRatio,
      shadowMapType: THREE.BasicShadowMap,
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.NoToneMapping,
      useLegacyLights: true
    });
    const controlsState = reactive({
      autoRotate: true
    });
    const layerState = shallowReactive({
      color1: "#000000",
      alpha1: 1,
      colorA: "#ed08ff",
      colorB: "#1bff00",
      alpha2: 1.1,
      near: 0.87,
      far: 299.77
    });
    const paneControl = new Pane({
      expanded: true
    });
    const f1 = paneControl.addFolder({
      title: "Color层"
    });
    f1.addBinding(layerState, "color1", { label: "颜色" });
    f1.addBinding(layerState, "alpha1", {
      label: "alpha",
      step: 0.1,
      min: 0,
      max: 2
    });
    const f2 = paneControl.addFolder({
      title: "Depth层"
    });
    f2.addBinding(layerState, "colorA", { label: "颜色A" });
    f2.addBinding(layerState, "colorB", { label: "颜色B" });
    f2.addBinding(layerState, "alpha2", {
      label: "alpha",
      step: 0.1,
      min: 0,
      max: 2
    });
    f2.addBinding(layerState, "near", {
      label: "near",
      step: 0.01,
      min: 0,
      max: 1
    });
    f2.addBinding(layerState, "far", {
      label: "far",
      step: 0.01,
      min: 299,
      max: 300
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 10, 5],
            fov: 30,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", {
            color: "#ffffff",
            intensity: 2
          }, null, -1)),
          _createVNode(_unref(_sfc_main$1), {
            reflectivity: 2.6,
            showGridHelper: "",
            position: [0, -0.6, 0]
          }),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [1, 500, 500] }, null, -1)),
            _createVNode(_unref(_sfc_main$2), {
              color: "white",
              lighting: "physical"
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$3), {
                  color: _unref(layerState).color1,
                  alpha: _unref(layerState).alpha1
                }, null, 8, ["color", "alpha"]),
                _createVNode(_unref(_sfc_main$4), {
                  colorA: _unref(layerState).colorA,
                  colorB: _unref(layerState).colorB,
                  alpha: _unref(layerState).alpha2,
                  mode: "normal",
                  near: _unref(layerState).near,
                  far: _unref(layerState).far,
                  origin: new THREE.Vector3(100, 100, 100)
                }, null, 8, ["colorA", "colorB", "alpha", "near", "far", "origin"])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=layerMaterial.BU2o7ENk1767105581793.js.map
