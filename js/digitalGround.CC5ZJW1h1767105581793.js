import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "digitalGround",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: false,
      scale: 1
    });
    const configState = reactive({
      color: "#de62f2",
      speed: 0.8,
      size: 10
    });
    const paneControl = new Pane({
      title: "digitalGround",
      expanded: true
    });
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "speed", {
      label: "速度",
      min: 0.1,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(configState, "size", {
      label: "大小",
      min: 0.1,
      max: 20,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#666666",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [3, 3, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            autoRotate: ""
          }),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=digitalGround.CC5ZJW1h1767105581793.js.map
