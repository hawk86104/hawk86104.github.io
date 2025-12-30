import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "imgFloor",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 2.6,
      showGridHelper: false,
      scale: 4
    });
    const configState = reactive({
      color: "#fff",
      opacity: 0.95,
      rotationZ: 0.01
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(configState, "rotationZ", {
      label: "自转速度",
      min: -0.1,
      max: 0.1,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 20, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 6 }, null, -1)),
          _createVNode(_sfc_main$1, _mergeProps({ position: [2, -2, 2] }, configState, { imgSrcPath: "./plugins/floor/image/imgFloor1.png" }), null, 16),
          _createVNode(_sfc_main$1, _mergeProps({ position: [2, 0.1, 2] }, configState, { imgSrcPath: "./plugins/floor/image/imgFloor2.png" }), null, 16),
          _createVNode(_sfc_main$1, {
            position: [-2, 0, -2],
            imgSrcPath: "./plugins/floor/image/imgFloor3.png"
          }),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -2, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=imgFloor.CeFlD-SC1767105581793.js.map
