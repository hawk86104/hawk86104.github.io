import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "videoFloor",
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
    const paneControl = new Pane({
      title: "video地面",
      expanded: true
    });
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
          _createVNode(_sfc_main$1, _mergeProps(configState, {
            position: [0, 0, 10],
            size: [10, 10],
            vSrcPath: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV1.mp4"
          }), null, 16, ["vSrcPath"]),
          _createVNode(_sfc_main$1, {
            color: "#02a7ff",
            position: [0, -1, 10],
            size: [13, 13],
            vSrcPath: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV2.mp4"
          }, null, 8, ["vSrcPath"]),
          _createVNode(_sfc_main$1, {
            color: "#7300a8",
            opacity: 0.6,
            position: [0, 0, -10],
            size: [10, 10],
            vSrcPath: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV3.mp4"
          }, null, 8, ["vSrcPath"]),
          _createVNode(_sfc_main$1, {
            color: "#f605ff",
            rotationZ: -0.01,
            position: [0, -1, -10],
            size: [13, 13],
            vSrcPath: ("https://opensource.cdn.icegl.cn") + "/video/floor/floorV3.mp4"
          }, null, 8, ["vSrcPath"]),
          _createVNode(_sfc_main$1, {
            color: "#02a7ff",
            rotationZ: 0,
            position: [0, -1.99, 0],
            opacity: 0.06,
            textureRepeat: [3, 2],
            size: [40, 40],
            vSrcPath: ("https://opensource.cdn.icegl.cn") + "/video/floor/grid.mp4"
          }, null, 8, ["vSrcPath"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, _mergeProps({ position: [0, -2, 0] }, reflectorState), null, 16)
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
//# sourceMappingURL=videoFloor.B_Gv0sm71767105581793.js.map
