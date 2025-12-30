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
import { materialPresets, _sfc_main$9 as _sfc_main$2, _sfc_main$8 as _sfc_main$3 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { shapeConfigurator } from './shapeConfigurator.CuAf_SJY1767105581793.js';
import { ui } from './ui.BDzneBQ-1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref,provide} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "shapesPage",
  setup(__props) {
    const state = {
      clearColor: "#333333",
      shadows: true,
      alpha: false,
      antialias: true
    };
    const shape = ref({
      type: "Box",
      args: [2, 1, 1]
    });
    const currentType = ref("MeshStandardMaterial");
    const currentProps = ref({ ...materialPresets[currentType.value].props });
    provide("MaterialSelectorType", currentType);
    provide("MaterialSelectorProps", currentProps);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(shapeConfigurator), {
          modelValue: shape.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => shape.value = $event)
        }, null, 8, ["modelValue"]),
        _createVNode(ui, { style: { "z-index": "1999" } }),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 10, 5],
              fov: 30,
              near: 1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
              intensity: 6,
              position: [-2, 1, 0]
            }, null, -1)),
            _createVNode(_unref(_sfc_main$1), {
              reflectivity: 2.6,
              showGridHelper: "",
              position: [0, -0.6, 0]
            }),
            _createVNode(_unref(_sfc_main$2), {
              position: [0, 0.5, 0],
              modelValue: shape.value
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$3), {
                  type: currentType.value,
                  "material-props": currentProps.value
                }, null, 8, ["type", "material-props"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=shapesPage.7HLKBbyN1767105581793.js.map
