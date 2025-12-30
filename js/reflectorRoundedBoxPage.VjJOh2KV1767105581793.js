import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorRoundedBoxPage",
  setup(__props) {
    const paneControl = new Pane({
      expanded: true
    });
    const rtState = reactive({
      color: "#898989",
      width: 6,
      height: 1.6,
      depth: 6,
      radius: 0.28,
      // 圆角半径
      roughness: 0.5,
      metalness: 0.6,
      reflectorOffset: 0.1,
      mix: 0.1,
      sharpMix: 1
    });
    paneControl.addBinding(rtState, "color", { label: "颜色" });
    paneControl.addBinding(rtState, "width", { label: "宽度", min: 1, max: 10, step: 0.01 });
    paneControl.addBinding(rtState, "height", { label: "高度", min: 1, max: 10, step: 0.01 });
    paneControl.addBinding(rtState, "depth", { label: "深度", min: 1, max: 10, step: 0.01 });
    paneControl.addBinding(rtState, "radius", { label: "圆角半径", min: 0.01, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "metalness", { label: "金属度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "roughness", { label: "粗糙度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "reflectorOffset", { label: "reflectorOffset", min: -1, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "mix", { label: "反射率", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(rtState, "sharpMix", { label: "锐利度", min: 0, max: 5, step: 0.01 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#999999",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [-15, 15, -15],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [3, 4, 2],
            intensity: 1,
            color: "#fff"
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 1.5, 1] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(rtState)), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=reflectorRoundedBoxPage.VjJOh2KV1767105581793.js.map
