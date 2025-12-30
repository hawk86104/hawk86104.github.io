import { importShared, Kk, yl, Tz } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withDirectives:_withDirectives,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const _hoisted_1 = {
  position: [0, 8, 0],
  intensity: 10,
  color: "#fff"
};
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorDiffuse",
  setup(__props) {
    const configState = reactive({
      mirror: 0.9,
      // 去除纹理 镜面化 
      mixStrength: 9,
      showGridHelper: true,
      color: "#69a5c2"
    });
    const paneControl = new Pane({
      title: "镜面参数",
      expanded: true
    });
    paneControl.addBinding(configState, "color", { label: "镜面颜色" });
    paneControl.addBinding(configState, "showGridHelper", { label: "显示网格" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [-15, 15, -15],
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
            position: [3, 1, 0]
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [0, 2, 4] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=reflectorDiffuse.Bpy73PL71767105581793.js.map
