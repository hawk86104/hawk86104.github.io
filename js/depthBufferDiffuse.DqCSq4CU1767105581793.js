import { importShared } from './index.BxB45aCK1767105581793.js';
import './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main$2 as _sfc_main$3 } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
import './precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js';
import './cloudMesh.vue_vue_type_script_setup_true_lang.t0Z5pxFM1767105581793.js';
import './fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js';
import './fireB.vue_vue_type_script_setup_true_lang.BvbRi80N1767105581793.js';
import './smokeA.vue_vue_type_script_setup_true_lang.DU_w_c7I1767105581793.js';
import './rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js';
import './regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js';
import './fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js';
import './utils.-sNu4bkd1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const {reactive,shallowRef,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "depthBufferDiffuse",
  setup(__props) {
    const cmConfig = reactive({
      shieldColor: "#ffff00",
      rimColor: "#ffffff",
      threshold: 2e-4,
      radius: 100
    });
    const paneControl = new Pane();
    paneControl.addBinding(cmConfig, "shieldColor", { label: "圈颜色" });
    paneControl.addBinding(cmConfig, "rimColor", { label: "条颜色" });
    paneControl.addBinding(cmConfig, "threshold", { label: "线条参数", min: 1e-5, max: 2e-3, step: 1e-5 });
    paneControl.addBinding(cmConfig, "radius", { label: "大小", min: 10, max: 200, step: 1 });
    const pagesShowRef = shallowRef(null);
    watch(
      () => pagesShowRef.value?.contextReady,
      (newVal) => {
        if (newVal) {
          pagesShowRef.value.context.context.camera.activeCamera.value.position.set(-135, 250, 320);
        }
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$1)),
        _createVNode(_sfc_main$2, {
          ref_key: "pagesShowRef",
          ref: pagesShowRef
        }, {
          ability: _withCtx(() => [
            _createVNode(_unref(_sfc_main$3), _mergeProps({ position: [0, 30, 0] }, cmConfig), null, 16)
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=depthBufferDiffuse.DqCSq4CU1767105581793.js.map
