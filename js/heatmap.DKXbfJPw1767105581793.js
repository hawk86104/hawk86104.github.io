import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './heatmapJS.vue_vue_type_script_setup_true_lang.DbMNYVxC1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "heatmap",
  setup(__props) {
    const typeState = reactive({
      show2dCanvas: true,
      heightRatio: 20,
      position: [0, 20, 0],
      Plane: [1e3, 1e3, 1e3, 1e3]
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "show2dCanvas", {
      label: "显示二维图"
    });
    paneControl.addBinding(typeState, "heightRatio", {
      label: "高度",
      min: 10,
      max: 100,
      step: 10
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$1),
        _createVNode(_sfc_main$2, null, {
          ability: _withCtx(() => [
            _createVNode(_sfc_main$3, _mergeProps({ ref: "heatmapJSRef" }, typeState), null, 16)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=heatmap.DKXbfJPw1767105581793.js.map
