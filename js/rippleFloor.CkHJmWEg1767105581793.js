import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive,onUnmounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "rippleFloor",
  setup(__props) {
    const floorState = reactive({
      flySpeed: 3,
      flyIntensity: 0.3,
      dotSize: 0.03,
      lineColor: "#66f5ff",
      floorColor1: "#4c6480",
      floorColor2: "#acb4c0",
      gridSize: 50,
      lineWidth: 0.02,
      paused: false
    });
    const paneControl = new Pane({
      title: "飞线效果控制",
      expanded: true
    });
    const flyFolder = paneControl.addFolder({
      title: "飞线参数",
      expanded: true
    });
    flyFolder.addBinding(floorState, "flySpeed", {
      label: "飞线速度",
      min: 0,
      max: 10,
      step: 0.1
    });
    flyFolder.addBinding(floorState, "flyIntensity", {
      label: "飞线强度",
      min: 0,
      max: 1,
      step: 0.05
    });
    flyFolder.addBinding(floorState, "dotSize", {
      label: "节点大小",
      min: 0.01,
      max: 0.08,
      step: 5e-3
    });
    flyFolder.addBinding(floorState, "paused", {
      label: "暂停"
    });
    const colorFolder = paneControl.addFolder({
      title: "颜色设置",
      expanded: true
    });
    colorFolder.addBinding(floorState, "lineColor", {
      label: "飞线颜色",
      view: "color"
    });
    colorFolder.addBinding(floorState, "floorColor1", {
      label: "地板颜色1",
      view: "color"
    });
    colorFolder.addBinding(floorState, "floorColor2", {
      label: "地板颜色2",
      view: "color"
    });
    const gridFolder = paneControl.addFolder({
      title: "网格设置",
      expanded: true
    });
    gridFolder.addBinding(floorState, "gridSize", {
      label: "网格大小",
      min: 10,
      max: 100,
      step: 1
    });
    gridFolder.addBinding(floorState, "lineWidth", {
      label: "线条宽度",
      min: 0.01,
      max: 0.1,
      step: 1e-3
    });
    onUnmounted(() => {
      paneControl.dispose();
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#282828",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 50, 150],
            fov: 50,
            near: 0.1,
            far: 2e3
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            "damping-factor": 0.05,
            "min-distance": 20,
            "max-distance": 500,
            "max-polar-angle": Math.PI / 2.1
          }, null, 8, ["max-polar-angle"]),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.8 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [10, 20, 5],
            intensity: 0.5
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _mergeProps(floorState, { scale: 20 }), null, 16)
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
//# sourceMappingURL=rippleFloor.CkHJmWEg1767105581793.js.map
