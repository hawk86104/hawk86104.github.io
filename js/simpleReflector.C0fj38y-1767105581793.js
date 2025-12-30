import { importShared, Kk, yl, Tz } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './reflectorMesh.vue_vue_type_script_setup_true_lang.C0JOAmqn1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withDirectives:_withDirectives,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  position: [0, 10, 0],
  intensity: 10,
  color: "#ffffff"
};
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "simpleReflector",
  setup(__props) {
    const configState = reactive({
      mirrorSize: 16,
      gridSize: 15,
      mirrorColor: "#efefef",
      divisions: 10,
      //网格密度							 初始化时设置
      colorCenterLine: "#444444",
      //网格颜色 中心的XZ轴		  初始化时设置
      colorGrid: "#888888"
      //网格颜色							 初始化时设置
    });
    const paneControl = new Pane({
      title: "地板参数",
      expanded: true
    });
    paneControl.addBinding(configState, "mirrorColor", { label: "镜面颜色" });
    paneControl.addBinding(configState, "mirrorSize", {
      label: "镜面大小",
      min: 10,
      max: 50,
      step: 1
    });
    paneControl.addBinding(configState, "gridSize", {
      label: "网格大小",
      min: 10,
      max: 50,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
          _withDirectives(_createElementVNode("TresDirectionalLight", _hoisted_1, null, 512), [
            [_unref(yl)]
          ]),
          _createVNode(_unref(Tz), {
            args: [1, 1, 1],
            color: "orange",
            position: [3, 2, 1]
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [0, 2, -4] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=simpleReflector.C0fj38y-1767105581793.js.map
