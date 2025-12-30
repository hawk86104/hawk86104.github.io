import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main$5 as _sfc_main$2 } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
import './precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js';
import './cloudMesh.vue_vue_type_script_setup_true_lang.t0Z5pxFM1767105581793.js';
import './fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js';
import './fireB.vue_vue_type_script_setup_true_lang.BvbRi80N1767105581793.js';
import './smokeA.vue_vue_type_script_setup_true_lang.DU_w_c7I1767105581793.js';
import './rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js';
import './regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js';
import './fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js';
import './utils.-sNu4bkd1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rectangleGlowPage",
  setup(__props) {
    const rectangleState = reactive({
      pColor: "#00ffdd",
      w: 160,
      h: 90,
      gradientWidth: 0.99,
      glowWidth: 0.99,
      nNumber: 8,
      lineWidth: 2,
      lColor: "#0022ff"
    });
    const paneControl = new Pane({
      title: "区域边界发光",
      expanded: true
    });
    paneControl.addBinding(rectangleState, "pColor", { label: "颜色" });
    paneControl.addBinding(rectangleState, "w", { label: "矩形宽", min: 1, max: 500, step: 1 });
    paneControl.addBinding(rectangleState, "h", { label: "矩形高", min: 1, max: 500, step: 1 });
    paneControl.addBinding(rectangleState, "gradientWidth", { label: "作用宽度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rectangleState, "glowWidth", { label: "渐变宽度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rectangleState, "nNumber", { label: "nNumber", min: 0, max: 20, step: 0.1 });
    paneControl.addBinding(rectangleState, "lineWidth", { label: "边框宽度", min: 0, max: 10, step: 0.1 });
    paneControl.addBinding(rectangleState, "lColor", { label: "边框颜色" });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, { ref: "pagesShowRef" }, {
        ability: _withCtx(() => [
          _createVNode(_unref(_sfc_main$2), {
            renderOrder: 9998,
            position: [93, 28, 28],
            w: 100,
            h: 100,
            lColor: "#ff0000"
          }),
          _createVNode(_unref(_sfc_main$2), _mergeProps({ "position-y": 58 }, rectangleState), null, 16)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rectangleGlowPage.qSrdW6Vi1767105581793.js.map
