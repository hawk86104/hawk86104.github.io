import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "otherScene",
  setup(__props) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 16711935 });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(-3, 2, 3);
    var oScene = new THREE.Scene();
    var lightAmb = new THREE.AmbientLight(16777215);
    oScene.add(lightAmb);
    oScene.add(cube);
    const { camera, renderer, scene } = Fs();
    if (camera.value) {
      oScene.add(camera.value);
    }
    const { onRender } = _l();
    onRender(() => {
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.02;
      if (renderer && camera.value) {
        renderer.clear();
        renderer.render(oScene, camera.value);
        renderer.render(scene.value, camera.value);
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  ref: "sphereRef",
  position: [3, 3, 0]
};
const _hoisted_2 = ["rotation"];
const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,watchEffect,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "multipleScenes",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping,
      renderMode: "manual",
      windowSize: true
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05
    });
    const tcRef = ref();
    watchEffect(() => {
      if (tcRef.value) {
        const renderer = tcRef.value.context.renderer.instance;
        renderer.autoClear = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        ref_key: "tcRef",
        ref: tcRef
      }), {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresDirectionalLight", {
            position: [10, 8, 4],
            intensity: 1
          }, null, -1)),
          _createElementVNode("TresMesh", _hoisted_1, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
          ])], 512),
          _createElementVNode("TresMesh", {
            rotation: [-Math.PI / 2, 0, 0]
          }, [..._cache[1] || (_cache[1] = [
            _createElementVNode("TresPlaneGeometry", { args: [20, 20, 20, 20] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", null, null, -1)
          ])], 8, _hoisted_2),
          _cache[5] || (_cache[5] = _createElementVNode("TresGridHelper", null, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=multipleScenes.-YySnVRD1767105581793.js.map
