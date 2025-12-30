import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { materialPresets, _sfc_main$8 as _sfc_main$1 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { ui } from './ui.BDzneBQ-1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { position: [0, 1, 0] };
const THREE = await importShared('three');

const {ref,provide} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "materialSelector",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const configState = {
      reflectivity: 0.941,
      mirror: 113.25,
      mixStrength: 12,
      showGridHelper: false
    };
    const currentType = ref("MeshStandardMaterial");
    const currentProps = ref({ ...materialPresets[currentType.value].props });
    provide("MaterialSelectorType", currentType);
    provide("MaterialSelectorProps", currentProps);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
              position: [-5, 3, 5],
              fov: 50,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
              intensity: 6,
              position: [-2, 1, 0]
            }, null, -1)),
            _cache[4] || (_cache[4] = _createElementVNode("TresMesh", { position: [1, 1, -1] }, [
              _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
              _createElementVNode("TresMeshNormalMaterial")
            ], -1)),
            _createElementVNode("TresMesh", _hoisted_1, [
              _cache[0] || (_cache[0] = _createElementVNode("TresBoxGeometry", null, null, -1)),
              _createVNode(_unref(_sfc_main$1), {
                type: currentType.value,
                "material-props": currentProps.value
              }, null, 8, ["type", "material-props"])
            ]),
            _createVNode(_unref(_sfc_main$2), _normalizeProps(_guardReactiveProps(configState)), null, 16)
          ]),
          _: 1
        }, 16),
        _createVNode(ui)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=materialSelector.CRftG-Q81767105581793.js.map
