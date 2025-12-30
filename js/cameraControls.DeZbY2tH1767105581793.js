import { importShared, jk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,mergeProps:_mergeProps,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,shallowRef} = await importShared('vue');
const {MathUtils,BasicShadowMap,SRGBColorSpace,NoToneMapping} = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cameraControls",
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
      distance: 5,
      minDistance: 1,
      maxDistance: 100,
      // 是否启用无限缩放 注意需要 搭配 minDistance一起用 并且 minDistance不能为0
      infinityDolly: true
    });
    const controlsRef = shallowRef();
    const boxMeshRef = shallowRef();
    const pane = new Pane();
    const distanceFolder = pane.addFolder({ title: "距离参数" });
    distanceFolder.addBinding(controlsState, "distance", {
      label: "设置距离",
      step: 0.01,
      min: 0.1,
      max: 100
    });
    distanceFolder.addBinding(controlsState, "minDistance", {
      label: "最小距离",
      step: 0.01,
      min: 0,
      max: 10
    });
    distanceFolder.addBinding(controlsState, "maxDistance", {
      label: "最大距离",
      step: 0.01,
      min: 0,
      max: 100
    });
    const dollyFolder = pane.addFolder({ title: "远近" });
    dollyFolder.addButton({ title: "(+1)" }).on("click", () => {
      controlsRef?.value?.instance?.dolly(1, true);
    });
    dollyFolder.addButton({ title: "(-1)" }).on("click", () => {
      controlsRef?.value?.instance?.dolly(-1, true);
    });
    const rotateFolder = pane.addFolder({ title: "旋转" });
    rotateFolder.addButton({ title: "Rotate theta 45°" }).on("click", () => {
      controlsRef?.value?.instance?.rotate(45 * MathUtils.DEG2RAD, 0, true);
    });
    rotateFolder.addButton({ title: "Rotate theta -90°" }).on("click", () => {
      controlsRef?.value?.instance?.rotate(-90 * MathUtils.DEG2RAD, 0, true);
    });
    rotateFolder.addButton({ title: "Rotate theta 360°" }).on("click", () => {
      controlsRef?.value?.instance?.rotate(360 * MathUtils.DEG2RAD, 0, true);
    });
    rotateFolder.addButton({ title: "Rotate phi 20°" }).on("click", () => {
      controlsRef?.value?.instance?.rotate(0, 20 * MathUtils.DEG2RAD, true);
    });
    const moveFolder = pane.addFolder({ title: "移动" });
    moveFolder.addButton({ title: "对焦到 box of the mesh" }).on("click", () => {
      controlsRef?.value?.instance?.fitToBox(boxMeshRef.value, true);
    });
    function onChange() {
      console.log("change");
    }
    function onStart() {
      console.log("start");
    }
    function onEnd() {
      console.log("end");
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _createVNode(_unref(jk), _mergeProps(controlsState, {
            ref_key: "controlsRef",
            ref: controlsRef,
            "make-default": "",
            onChange,
            onStart,
            onEnd
          }), null, 16),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { position: [0, -1, 0] }, null, -1)),
          _createElementVNode("TresMesh", {
            ref_key: "boxMeshRef",
            ref: boxMeshRef
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }, null, -1),
            _createElementVNode("TresMeshBasicMaterial", {
              color: "orange",
              wireframe: ""
            }, null, -1)
          ])], 512),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cameraControls.DeZbY2tH1767105581793.js.map
