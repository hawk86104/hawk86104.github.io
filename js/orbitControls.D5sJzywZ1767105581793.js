import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,mergeProps:_mergeProps,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');
const {reactive} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "orbitControls",
  setup(__props) {
    const gl = {
      clearColor: "#82DBC5",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    };
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 2,
      maxPolarAngle: Math.PI,
      minPolarAngle: 0,
      maxAzimuthAngle: Math.PI,
      minAzimuthAngle: -Math.PI,
      enablePan: true,
      maxDistance: 100,
      minDistance: 0,
      minZoom: 0,
      maxZoom: 100,
      zoomSpeed: 1,
      enableRotate: true,
      rotateSpeed: 1
    });
    const pane = new Pane();
    pane.addBinding(controlsState, "enableDamping", { label: "启用阻尼" });
    pane.addBinding(controlsState, "dampingFactor", {
      label: "阻尼系数",
      step: 0.01,
      min: 0,
      max: 1
    });
    pane.addBinding(controlsState, "enableZoom", { label: "启用缩放" });
    pane.addBinding(controlsState, "enablePan", { label: "启用移动" });
    const rotateFolder = pane.addFolder({ title: "旋转" });
    rotateFolder.addBinding(controlsState, "autoRotate", { label: "自动旋转" });
    rotateFolder.addBinding(controlsState, "autoRotateSpeed", {
      label: "自动旋转速度",
      step: 0.01,
      min: 0,
      max: Math.PI
    });
    const angleFolder = pane.addFolder({ title: "角度" });
    angleFolder.addBinding(controlsState, "maxPolarAngle", {
      label: "max极角",
      step: 0.01,
      min: 0,
      max: Math.PI
    });
    angleFolder.addBinding(controlsState, "minPolarAngle", {
      label: "min极角",
      step: 0.01,
      min: 0,
      max: Math.PI
    });
    angleFolder.addBinding(controlsState, "maxAzimuthAngle", {
      label: "max方位角",
      step: 0.01,
      min: 0,
      max: 2 * Math.PI
    });
    angleFolder.addBinding(controlsState, "minAzimuthAngle", {
      label: "min方位角",
      step: 0.01,
      min: 0,
      max: 2 * Math.PI
    });
    const distances = pane.addFolder({ title: "距离" });
    distances.addBinding(controlsState, "maxDistance", {
      label: "最大距离",
      step: 0.01,
      min: 0,
      max: 100
    });
    distances.addBinding(controlsState, "minDistance", {
      label: "最小距离",
      step: 0.01,
      min: 0,
      max: 100
    });
    const zoomFolder = pane.addFolder({ title: "缩放" });
    zoomFolder.addBinding(controlsState, "enableZoom", { label: "开启" });
    zoomFolder.addBinding(controlsState, "minZoom", {
      label: "最小",
      step: 0.01,
      min: 0,
      max: 10
    });
    zoomFolder.addBinding(controlsState, "maxZoom", {
      label: "最大",
      step: 0.01,
      min: 0,
      max: 100
    });
    zoomFolder.addBinding(controlsState, "zoomSpeed", {
      label: "速度",
      step: 0.01,
      min: 0,
      max: 20
    });
    function onChange() {
    }
    function onStart() {
    }
    function onEnd() {
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [3, 3, 3] }, null, -1)),
          _createVNode(_unref(Kk), _mergeProps(controlsState, {
            onChange,
            onStart,
            onEnd
          }), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", null, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=orbitControls.D5sJzywZ1767105581793.js.map
