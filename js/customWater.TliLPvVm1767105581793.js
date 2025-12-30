import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import './staticWater.vue_vue_type_script_setup_true_lang.4m35QlAa1767105581793.js';
import './iceFloor.vue_vue_type_script_setup_true_lang.Bffk1fiK1767105581793.js';
import './gerstnerWater.vue_vue_type_script_setup_true_lang.CK3FxufO1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './customWaterMesh.vue_vue_type_script_setup_true_lang.DP0YOBvn1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const THREE = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "customWater",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      windowSize: true,
      clearColor: 10066329
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const gridState = reactive({
      cellSize: 0.6,
      cellThickness: 1.1,
      cellColor: "#627179",
      sectionColor: "#3a78a2",
      sectionSize: 2.4,
      sectionThickness: 1.8,
      fadeDistance: 27,
      fadeStrength: 0.76,
      followCamera: false,
      infiniteGrid: true
    });
    const customWaterState = reactive({
      height: 0.2,
      Flatshading: false,
      waterColor: "#52a7f7",
      waterHighlight: "#b3ffff",
      brightness: 1,
      baseMaterial: "MeshPhysicalMaterial",
      roughness: 0.2,
      metalness: 0.1,
      speed: 1
    });
    const paneControl = new Pane();
    paneControl.addBinding(customWaterState, "height", {
      label: "高度",
      min: 0.1,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(customWaterState, "speed", {
      label: "速度",
      min: 0,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(customWaterState, "roughness", {
      label: "粗糙度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(customWaterState, "metalness", {
      label: "金属度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(customWaterState, "waterColor", {
      label: "水体颜色"
    });
    paneControl.addBinding(customWaterState, "waterHighlight", {
      label: "浪头颜色"
    });
    paneControl.addBinding(customWaterState, "brightness", {
      label: "亮度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(customWaterState, "Flatshading", {
      label: "Flatshading"
    });
    paneControl.addBlade({
      view: "list",
      label: "材质",
      options: [
        { text: "MeshPhysicalMaterial", value: "MeshPhysicalMaterial" },
        { text: "MeshBasicMaterial", value: "MeshBasicMaterial" },
        { text: "MeshNormalMaterial", value: "MeshNormalMaterial" },
        { text: "MeshStandardMaterial", value: "MeshStandardMaterial" },
        { text: "MeshPhongMaterial", value: "MeshPhongMaterial" },
        { text: "MeshToonMaterial", value: "MeshToonMaterial" },
        { text: "MeshLambertMaterial", value: "MeshLambertMaterial" },
        { text: "MeshDepthMaterial", value: "MeshDepthMaterial" }
      ],
      value: customWaterState.baseMaterial
    });
    paneControl.on("change", (e) => {
      if (e.target.label === "材质") {
        customWaterState.baseMaterial = e.value;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 5, 5],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [15, 15, 15],
            intensity: 1
          }, null, -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(customWaterState)), null, 16),
          _createVNode(_unref(_sfc_main$2), _mergeProps({ args: [3, 3] }, gridState, { position: [0, -0.5, 0] }), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$3), {
                files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["path"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=customWater.TliLPvVm1767105581793.js.map
