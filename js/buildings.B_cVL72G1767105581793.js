import { importShared } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { loadCityFBX, _sfc_main as _sfc_main$1, _sfc_main$1 as _sfc_main$2, _sfc_main$2 as _sfc_main$3 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withCtx:_withCtx} = await importShared('vue');

const {reactive,onMounted,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "buildings",
  async setup(__props) {
    let __temp, __restore;
    const showbuildingsLines = ref(false);
    const CityFBX = ([__temp, __restore] = _withAsyncContext(() => loadCityFBX()), __temp = await __temp, __restore(), __temp);
    showbuildingsLines.value = true;
    onMounted(() => {
      const paneControl = new Pane({
        title: "建筑效果",
        expanded: true
      });
      const f1 = paneControl.addFolder({
        title: "线条"
      });
      f1.addBinding(buildingsLinesState, "show", { label: "显示" });
      f1.addBinding(buildingsLinesState, "color", { label: "颜色" });
      f1.addBinding(buildingsLinesState, "width", {
        label: "宽度",
        min: 0,
        max: 10,
        step: 1
      });
      f1.addBinding(buildingsLinesState, "opacity", {
        label: "透明度",
        min: 0,
        max: 1,
        step: 0.1
      });
      const f2 = paneControl.addFolder({
        title: "建筑物"
      });
      f2.addBinding(buildingState, "show", { label: "显示" });
      f2.addBinding(buildingState, "bulidingsColor", { label: "楼宇颜色" });
      f2.addBinding(buildingState, "gradient", { label: "渐变" });
      f2.addBinding(buildingState, "opacity", {
        label: "透明度",
        min: 0,
        max: 1,
        step: 0.1
      });
      f2.addBinding(buildingState, "landColor", { label: "地面颜色" });
    });
    const buildingsLinesState = reactive({
      width: 1,
      color: "#000",
      opacity: 1,
      show: true
    });
    const buildingState = reactive({
      bulidingsColor: "#e523ff",
      landColor: "#112233",
      opacity: 0.9,
      show: true,
      gradient: true
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$1, { showBuildings: false }, {
        ability: _withCtx(() => [
          buildingState.show && showbuildingsLines.value ? (_openBlock(), _createBlock(_sfc_main$2, {
            key: 0,
            model: _unref(CityFBX),
            bulidingsColor: buildingState.bulidingsColor,
            landColor: buildingState.landColor,
            gradient: buildingState.gradient,
            opacity: buildingState.opacity
          }, null, 8, ["model", "bulidingsColor", "landColor", "gradient", "opacity"])) : _createCommentVNode("", true),
          buildingsLinesState.show && showbuildingsLines.value ? (_openBlock(), _createBlock(_sfc_main$3, {
            key: 1,
            builds: _unref(CityFBX).city,
            width: buildingsLinesState.width,
            color: buildingsLinesState.color,
            opacity: buildingsLinesState.opacity
          }, null, 8, ["builds", "width", "color", "opacity"])) : _createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=buildings.B_cVL72G1767105581793.js.map
