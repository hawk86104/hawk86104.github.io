import { importShared, qiankunWindow_1, ol, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,Fragment:_Fragment} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const _hoisted_2 = {
  key: 0,
  class: "text-center text-white w-full absolute"
};
const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,ref,onMounted,shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "theBasic",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      windowSize: !qiankunWindow_1.__POWERED_BY_QIANKUN__
    });
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
      keyPanSpeed: 7,
      maxDistance: 100,
      minDistance: 0,
      minZoom: 0,
      maxZoom: 100,
      zoomSpeed: 1,
      enableRotate: true,
      rotateSpeed: 1
    });
    const sphereRef = ref();
    const sphereRef2 = ref();
    const TDirectionalLight = shallowRef();
    const onLoop = ({ elapsed }) => {
      if (!sphereRef.value) return;
      sphereRef.value.position.y += Math.sin(elapsed) * 0.01;
      sphereRef2.value.position.y += Math.sin(elapsed) * 0.01;
    };
    function onPointerEnter(ev) {
      if (ev) {
        ev.object.material.color.set("#DFFF45");
      }
    }
    function onPointerLeave(ev) {
      if (ev) {
        ev.eventObject.material.color.set("#006060");
      }
    }
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(1e3, 1e3);
        TDirectionalLight.value.shadow.camera.near = 0.5;
        TDirectionalLight.value.shadow.camera.far = 5e4;
        TDirectionalLight.value.shadow.camera.top = 20;
        TDirectionalLight.value.shadow.camera.right = 20;
        TDirectionalLight.value.shadow.camera.left = -20;
        TDirectionalLight.value.shadow.camera.bottom = -20;
      }
    });
    const height = ref("auto");
    onMounted(() => {
      const parentElement = document.querySelector(".app-main");
      if (parentElement) {
        height.value = `${parentElement.clientHeight}px`;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ol), _mergeProps(state, {
          style: { height: height.value },
          onLoop
        }), {
          default: _withCtx(() => [
            _cache[3] || (_cache[3] = _createElementVNode("TresPerspectiveCamera", {
              position: [15, 15, 15],
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[4] || (_cache[4] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _createElementVNode("TresMesh", {
              ref_key: "sphereRef",
              ref: sphereRef,
              position: [0, 4, 0],
              "cast-shadow": "",
              onPointerEnter,
              onPointerLeave
            }, [..._cache[0] || (_cache[0] = [
              _createElementVNode("TresSphereGeometry", { args: [2, 32, 32] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
            ])], 544),
            _createElementVNode("TresMesh", {
              ref_key: "sphereRef2",
              ref: sphereRef2,
              position: [4, 4, 0],
              "cast-shadow": "",
              onPointerEnter,
              onPointerLeave
            }, [..._cache[1] || (_cache[1] = [
              _createElementVNode("TresSphereGeometry", { args: [2, 32, 32] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
            ])], 544),
            _createElementVNode("TresMesh", {
              rotation: [-Math.PI / 2, 0, 0],
              "receive-shadow": ""
            }, [..._cache[2] || (_cache[2] = [
              _createElementVNode("TresPlaneGeometry", { args: [20, 20, 20, 20] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", null, null, -1)
            ])], 8, _hoisted_1),
            _createElementVNode("TresDirectionalLight", {
              ref_key: "TDirectionalLight",
              ref: TDirectionalLight,
              position: [10, 8, 4],
              intensity: 1,
              "cast-shadow": ""
            }, null, 512),
            _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
              position: [10, 2, 4],
              intensity: 1,
              "cast-shadow": ""
            }, null, -1)),
            _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", null, null, -1))
          ]),
          _: 1
        }, 16, ["style"]),
        !_unref(qiankunWindow_1).__POWERED_BY_QIANKUN__ ? (_openBlock(), _createElementBlock("h1", _hoisted_2, "请通过qiankun主程序访问此页面 ")) : _createCommentVNode("", true)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=theBasic.C_IsNTBw1767105581793.js.map
