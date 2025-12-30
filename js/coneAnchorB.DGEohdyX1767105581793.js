import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main$1 as _sfc_main$2 } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
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
  __name: "coneAnchorB",
  setup(__props) {
    const paneControl = new Pane({
      expanded: true
    });
    const configState = reactive({
      anchorColor: "#0059ff",
      rotateSpeed: 0.05,
      floorSize: 12,
      floorColor: "#0059ff",
      floorSpeed: 0.6,
      depthTest: true
    });
    paneControl.addBinding(configState, "anchorColor", { label: "浮标颜色" });
    paneControl.addBinding(configState, "rotateSpeed", { label: "旋转速度", min: -0.2, max: 0.2, step: 1e-3 });
    paneControl.addBinding(configState, "floorColor", { label: "波浪颜色" });
    paneControl.addBinding(configState, "floorSize", { label: "波浪大小", min: 0.1, max: 20, step: 0.1 });
    paneControl.addBinding(configState, "floorSpeed", { label: "波浪速度", min: -2, max: 3, step: 0.1 });
    paneControl.addBinding(configState, "depthTest", { label: "是否遮挡" });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, { ref: "pagesShowRef" }, {
        ability: _withCtx(() => [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), _mergeProps({
                position: [60, 19, 0],
                scale: 6
              }, configState), null, 16)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                position: [319, 19, 119],
                scale: 3,
                anchorColor: "#ffffff",
                floorColor: "#ffffff",
                depthTest: false
              })
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                position: [-319, 19, 619],
                scale: 5,
                anchorColor: "#ff0000",
                floorColor: "#ffff00"
              })
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$2), {
                position: [-319, 19, -619],
                scale: 8,
                anchorColor: "#ffff00",
                floorColor: "#ffff00"
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
//# sourceMappingURL=coneAnchorB.DGEohdyX1767105581793.js.map
