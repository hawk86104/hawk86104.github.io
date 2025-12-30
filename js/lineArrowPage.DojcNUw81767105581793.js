import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$3 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const THREE = await importShared('three');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lineArrowPage",
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
      showGridHelper: false
    });
    const lineArrowConfig = reactive({
      color: "#00ff97",
      hasArrow: true,
      radius: 0.1,
      length: 5,
      cutoffRatio: 0.9,
      roughness: 0.2,
      metalness: 0
    });
    const pane = new Pane({
      title: "参数",
      expanded: true
    });
    pane.addBinding(lineArrowConfig, "color", { label: "颜色" });
    pane.addBinding(lineArrowConfig, "hasArrow", { label: "箭头" });
    pane.addBinding(lineArrowConfig, "radius", { label: "粗细", step: 0.01, min: 0.01, max: 0.2 });
    pane.addBinding(lineArrowConfig, "length", { label: "长度", step: 0.1, min: 0.1, max: 10 });
    pane.addBinding(lineArrowConfig, "cutoffRatio", { label: "箭头延展", step: 0.01, min: 0.01, max: 0.99 });
    pane.addBinding(lineArrowConfig, "roughness", { label: "roughness", step: 0.01, min: 0.01, max: 1 });
    pane.addBinding(lineArrowConfig, "metalness", { label: "metalness", step: 0.01, min: 0.01, max: 1 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
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
            position: [-2, 1, 0]
          }, null, -1)),
          _createVNode(_unref(_sfc_main$1), _mergeProps(lineArrowConfig, { position: [0, 1, 0] }), null, 16),
          _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(configState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=lineArrowPage.DojcNUw81767105581793.js.map
