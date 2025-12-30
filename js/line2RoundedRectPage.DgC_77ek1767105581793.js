import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$2 as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
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
  __name: "line2RoundedRectPage",
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
    const line2Config = reactive({
      linewidth: 10,
      color: "#ffff00",
      width: 2,
      height: 6,
      radius: 0.3,
      cornerSegments: 6
    });
    const pane = new Pane({
      title: "参数",
      expanded: true
    });
    pane.addBinding(line2Config, "linewidth", { label: "线条宽度", step: 0.1, min: 0, max: 20 });
    pane.addBinding(line2Config, "color", { label: "线条颜色" });
    pane.addBinding(line2Config, "width", { label: "宽", step: 0.1, min: 0.1, max: 10 });
    pane.addBinding(line2Config, "height", { label: "长", step: 0.1, min: 0.1, max: 10 });
    pane.addBinding(line2Config, "radius", { label: "角度", step: 1e-3, min: 1e-3, max: 1 });
    pane.addBinding(line2Config, "cornerSegments", { label: "平滑", step: 0.1, min: 0.1, max: 6 });
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
          _createVNode(_unref(_sfc_main$1), _mergeProps({ position: [0, 0.5, 0] }, line2Config), null, 16),
          _createVNode(_sfc_main$2, _normalizeProps(_guardReactiveProps(configState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=line2RoundedRectPage.DgC_77ek1767105581793.js.map
