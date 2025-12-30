import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main$1 as _sfc_main$2, _sfc_main$2 as _sfc_main$3 } from './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
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

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withCtx:_withCtx} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "radars",
  setup(__props) {
    const typeAradarState = reactive({
      show: true,
      color: "#00c0ff",
      radius: 300
    });
    const paneControl = new Pane({
      title: "雷达效果",
      expanded: true
    });
    const f1 = paneControl.addFolder({
      title: "A型"
    });
    f1.addBinding(typeAradarState, "show", { label: "显示" });
    f1.addBinding(typeAradarState, "color", { label: "颜色" });
    f1.addBinding(typeAradarState, "radius", {
      label: "大小",
      min: 1,
      max: 400,
      step: 10
    });
    const typeBradarState = reactive({
      show: true,
      color: "#ffff00",
      maxRadius: 200
    });
    const f2 = paneControl.addFolder({
      title: "B型"
    });
    f2.addBinding(typeBradarState, "show", { label: "显示" });
    f2.addBinding(typeBradarState, "color", { label: "颜色" });
    f2.addBinding(typeBradarState, "maxRadius", {
      label: "大小",
      min: 1,
      max: 500,
      step: 1
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, null, {
        ability: _withCtx(() => [
          typeAradarState.show ? (_openBlock(), _createBlock(_unref(_sfc_main$2), {
            key: 0,
            color: typeAradarState.color,
            radius: typeAradarState.radius,
            size: 300,
            position: [10, 60, 0]
          }, null, 8, ["color", "radius"])) : _createCommentVNode("", true),
          typeBradarState.show ? (_openBlock(), _createBlock(_unref(_sfc_main$3), {
            key: 1,
            position: [600, 30, 0],
            color: typeBradarState.color,
            height: 0.5,
            "scale-y": 100,
            maxRadius: typeBradarState.maxRadius
          }, null, 8, ["color", "maxRadius"])) : _createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=radars.B9Q8yp6_1767105581793.js.map
