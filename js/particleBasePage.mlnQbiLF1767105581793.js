import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "particleBasePage",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: true,
      scale: 1
    });
    const precipitationState = {
      speed: -0.03,
      randomness: 0.5,
      count: 100,
      size: 0.1,
      color: "#ff0",
      areaX: 3,
      areaY: 2,
      areaZ: 3,
      opacity: 1
    };
    const toRefsState = reactive({
      ...precipitationState
    });
    const f1 = new Pane({
      title: "配置",
      expanded: true
    });
    f1.addBinding(toRefsState, "areaX", {
      label: "影响区域宽",
      min: 1,
      max: 10,
      step: 0.1
    });
    f1.addBinding(toRefsState, "areaY", {
      label: "影响区域高",
      min: 1,
      max: 10,
      step: 0.1
    });
    f1.addBinding(toRefsState, "areaZ", {
      label: "影响区域长",
      min: 1,
      max: 10,
      step: 0.1
    });
    f1.addBinding(toRefsState, "speed", {
      label: "速度",
      min: -0.5,
      max: 0.5,
      step: 0.01
    });
    f1.addBinding(toRefsState, "color", {
      label: "颜色"
    });
    f1.addBinding(toRefsState, "size", {
      label: "大小",
      min: 0.01,
      max: 1,
      step: 0.01
    });
    f1.addBinding(toRefsState, "count", {
      label: "数量",
      min: 1,
      max: 200,
      step: 1
    });
    f1.addBinding(toRefsState, "randomness", {
      label: "随机性",
      min: 0,
      max: 1,
      step: 0.01
    });
    f1.addBinding(toRefsState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
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
            position: [5, 5, 5],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [2, 0, 0] }, [
            _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
            _createElementVNode("TresMeshBasicMaterial", { color: "yellow" })
          ], -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [-4, 0.5, 2] }, [
            _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
            _createElementVNode("TresMeshBasicMaterial", { color: "white" })
          ], -1)),
          _createVNode(_sfc_main$1, _mergeProps({ position: [2, -1, 0] }, toRefsState), null, 16),
          _createVNode(_sfc_main$2, _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=particleBasePage.mlnQbiLF1767105581793.js.map
