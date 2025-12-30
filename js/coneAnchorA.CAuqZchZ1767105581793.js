import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
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

const {unref:_unref,mergeProps:_mergeProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "coneAnchorA",
  setup(__props) {
    const paneControl = new Pane({
      title: "旋转椎体-参数",
      expanded: true
    });
    const configState = reactive({
      height: 40,
      color: "#00dfff",
      occlusion: true,
      speed: 0.05
    });
    paneControl.addBinding(configState, "height", {
      label: "高度",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "occlusion", { label: "全局遮挡" });
    paneControl.addBinding(configState, "speed", { label: "旋转速度", min: 0.01, max: 0.3, step: 0.01 });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, { ref: "pagesShowRef" }, {
        ability: _withCtx(() => [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, 19, 0] }, configState, { scale: 6 }), null, 16)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                position: [319, 19, 119],
                color: "#2cff00",
                height: 60,
                speed: 0.1,
                scale: 2
              })
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                position: [-319, 19, 619],
                color: "#ffd900",
                height: 30,
                speed: 0.02,
                scale: 1.5
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=coneAnchorA.CAuqZchZ1767105581793.js.map
