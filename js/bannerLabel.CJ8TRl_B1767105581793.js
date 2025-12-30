import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "bannerLabel",
  setup(__props) {
    const paneState = reactive({
      text: "标识",
      fontSize: 32,
      fontColor: "#000000",
      backgroundColor: "#ffaa0066",
      padding: { y: 10, x: 20 },
      align: "left-center",
      scaleFactor: 0.01,
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 2,
      dpi: 2,
      isSprite: true
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(paneState, "isSprite", {
      label: "是否精灵图"
    }).on("change", (ev) => {
      listBlade.disabled = !ev.value;
    });
    paneControl.addBinding(paneState, "text", {
      label: "文字内容"
    });
    paneControl.addBinding(paneState, "fontSize", {
      label: "文字大小",
      min: 1,
      max: 100
    });
    paneControl.addBinding(paneState, "fontColor", {
      label: "文字颜色"
    });
    paneControl.addBinding(paneState, "backgroundColor", {
      label: "背景色"
    });
    paneControl.addBinding(paneState, "padding", {
      label: "内边距",
      x: { min: 1, max: 50 },
      y: { min: 1, max: 50 }
    });
    const dingwei = ["left-top", "left-center", "left-bottom", "center-top", "center", "center-bottom", "right-top", "right-center", "right-bottom"];
    const options = dingwei.map((d) => ({ text: d, value: d }));
    const listBlade = paneControl.addBlade({
      view: "list",
      label: "定位",
      options,
      value: paneState.align,
      disabled: paneState.isSprite === false
    });
    listBlade.on("change", (ev) => {
      paneState.align = ev.value;
    });
    paneControl.addBinding(paneState, "scaleFactor", {
      label: "缩放因子",
      min: 9e-4,
      max: 0.02
    });
    paneControl.addBinding(paneState, "borderColor", {
      label: "边框颜色"
    });
    paneControl.addBinding(paneState, "borderWidth", {
      label: "边框粗细",
      min: 1,
      max: 10,
      step: 0.01
    });
    paneControl.addBinding(paneState, "borderRadius", {
      label: "边框外弧度",
      min: 0,
      max: 20,
      step: 0.1
    });
    paneControl.addBinding(paneState, "dpi", {
      label: "清晰度",
      min: 1,
      max: 10,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#999",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", null, [
            _createElementVNode("TresBoxGeometry"),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_unref(_sfc_main$1), _mergeProps({ position: [0.5, 1, 0] }, paneState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=bannerLabel.CJ8TRl_B1767105581793.js.map
