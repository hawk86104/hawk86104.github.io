import { importShared, ol, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$2 as _sfc_main$1 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
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
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  position: [0, 1.9, 0],
  name: "torus"
};
const {ACESFilmicToneMapping} = await importShared('three');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "transmissionMaterial",
  setup(__props) {
    const state = reactive({
      alpha: true,
      toneMapping: ACESFilmicToneMapping,
      windowSize: true,
      clearColor: "#000000",
      disableRender: false
    });
    const controlsState = reactive({
      enableDamping: true,
      autoRotate: false
    });
    const materialState = reactive({
      color: "#ffffff",
      roughness: 0,
      reflectivity: 0.5,
      attenuationColor: "#ffffff",
      attenuationDistance: 2,
      chromaticAberration: 0.05,
      anisotropicBlur: 0.1,
      distortion: 0,
      temporalDistortion: 0,
      backside: true,
      thickness: 1,
      backsideThickness: 0.5
    });
    const paneControl = new Pane();
    paneControl.addBinding(materialState, "color", {
      label: "颜色"
    });
    paneControl.addBinding(materialState, "roughness", {
      label: "roughness",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "reflectivity", {
      label: "reflectivity",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "attenuationColor", {
      label: "attenuationColor"
    });
    paneControl.addBinding(materialState, "attenuationDistance", {
      label: "attenuationDistance",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(materialState, "chromaticAberration", {
      label: "chromaticAberration",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(materialState, "anisotropicBlur", {
      label: "anisotropicBlur",
      min: 0,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(materialState, "distortion", {
      label: "distortion",
      min: 0,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(materialState, "temporalDistortion", {
      label: "temporalDistortion",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(materialState, "backside", {
      label: "backside"
    });
    paneControl.addBinding(materialState, "thickness", {
      label: "thickness",
      min: 0,
      max: 4,
      step: 0.01
    });
    paneControl.addBinding(materialState, "backsideThickness", {
      label: "backsideThickness",
      min: 0,
      max: 4,
      step: 0.01
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [10, 10, 10],
            fov: 45,
            near: 1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [15, 15, 15],
            intensity: 1
          }, null, -1)),
          _createElementVNode("TresMesh", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresTorusKnotGeometry", { args: [1, 0.35, 100, 32] }, null, -1)),
            _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(materialState)), null, 16)
          ]),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", {
            position: [-2.5, 1.5, 2.5],
            "receive-shadow": "",
            "cast-shadow": "",
            name: "cube"
          }, [
            _createElementVNode("TresCylinderGeometry", { args: [1.5, 1.5, 2] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ff33ff",
              roughness: 0,
              metalness: 1
            })
          ], -1)),
          _createVNode(_unref(_sfc_main$2), { args: [3, 3] }),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tk), {
                blur: 0.3,
                background: "",
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
//# sourceMappingURL=transmissionMaterial.BO9-Z80E1767105581793.js.map
