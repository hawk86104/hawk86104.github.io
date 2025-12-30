import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { materialPresets } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import { ui } from './ui.BDzneBQ-1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');
const {reactive,ref,provide} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "generalFontPage",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.NoToneMapping,
      toneMappingExposure: 1,
      shadowMapType: THREE.PCFSoftShadowMap
    };
    const configState = reactive({
      reflectivity: 0.941,
      mirror: 113.25,
      mixStrength: 12,
      showGridHelper: false,
      scale: 1
    });
    const generalFontState = reactive({
      text: "3D文字展示组件",
      size: 0.5,
      height: 0.2,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4,
      center: true
    });
    const pane = new Pane({
      title: "参数",
      expanded: true
    });
    pane.addBinding(generalFontState, "text", { label: "文字内容" });
    pane.addBinding(generalFontState, "size", { label: "字体大小", min: 0.1, max: 2, step: 0.1 });
    pane.addBinding(generalFontState, "height", { label: "厚度", min: 0.01, max: 1, step: 0.01 });
    pane.addBinding(generalFontState, "curveSegments", { label: "曲线段数", min: 1, max: 20, step: 1 });
    pane.addBinding(generalFontState, "bevelEnabled", { label: "启用倒角" });
    pane.addBinding(generalFontState, "bevelThickness", { label: "倒角厚度", min: 0, max: 0.2, step: 0.01 });
    pane.addBinding(generalFontState, "bevelSize", { label: "倒角大小", min: 0, max: 0.1, step: 0.01 });
    pane.addBinding(generalFontState, "bevelOffset", { label: "倒角偏移", min: -0.1, max: 0.1, step: 0.01 });
    pane.addBinding(generalFontState, "bevelSegments", { label: "倒角段数", min: 1, max: 10, step: 1 });
    pane.addBinding(generalFontState, "center", { label: "居中显示" });
    const materialType = ref("MeshStandardMaterial");
    const materialProps = ref({ ...materialPresets[materialType.value].props });
    provide("MaterialSelectorType", materialType);
    provide("MaterialSelectorProps", materialProps);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [-5, 3, 5],
              fov: 50,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", null, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              intensity: 2,
              position: [2, 2, 2]
            }, null, -1)),
            _createVNode(_unref(_sfc_main$1), _mergeProps({ position: [0, 0.5, 0] }, generalFontState, {
              materialType: materialType.value,
              materialProps: materialProps.value
            }), null, 16, ["materialType", "materialProps"]),
            _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(configState)), null, 16)
          ]),
          _: 1
        }, 16),
        _createVNode(ui, { style: { top: "39px", left: "0px" } })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=generalFontPage.Cyl-83fX1767105581793.js.map
