import { importShared } from './index.BxB45aCK1767105581793.js';
import { loading1, loading, loading$1, vnyoonLoading, loading$2, starLoading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');
const {reactive} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "loadingManagerStyle",
  setup(__props) {
    const paneControl = new Pane({
      title: "样式",
      expanded: true
    });
    const paneState = reactive({
      styleNum: 22,
      showProgress: true
    });
    paneControl.addBinding(paneState, "showProgress", { label: "显示进度" });
    paneControl.addBinding(paneState, "styleNum", {
      label: "样式选择",
      options: {
        样式一: 0,
        样式二: 1,
        样式三: 2,
        样式四: 3,
        样式五: 4,
        样式六: 5,
        样式七: 6,
        样式八: 7,
        A样式: 10,
        B样式: 11,
        C样式: 12,
        D样式: 13,
        E样式: 14,
        F样式: 15,
        G样式: 16,
        气泡圈: 20,
        滚动彩方: 21,
        花瓣: 22,
        星星环绕: 23
      }
    });
    return (_ctx, _cache) => {
      return paneState.styleNum < 10 ? (_openBlock(), _createBlock(_unref(loading1), {
        key: 0,
        styleNum: paneState.styleNum,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["styleNum", "showProgress"])) : paneState.styleNum < 20 ? (_openBlock(), _createBlock(_unref(loading), {
        key: 1,
        styleNum: paneState.styleNum - 10,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["styleNum", "showProgress"])) : paneState.styleNum === 20 ? (_openBlock(), _createBlock(_unref(loading$1), {
        key: 2,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["showProgress"])) : paneState.styleNum === 21 ? (_openBlock(), _createBlock(_unref(vnyoonLoading), {
        key: 3,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["showProgress"])) : paneState.styleNum === 22 ? (_openBlock(), _createBlock(_unref(loading$2), {
        key: 4,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["showProgress"])) : paneState.styleNum === 23 ? (_openBlock(), _createBlock(_unref(starLoading), {
        key: 5,
        isDemo: "",
        showProgress: paneState.showProgress
      }, null, 8, ["showProgress"])) : _createCommentVNode("", true);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=loadingManagerStyle.fE_-9i321767105581793.js.map
