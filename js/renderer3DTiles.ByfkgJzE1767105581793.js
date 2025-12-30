import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watchEffect: watchEffect$1} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "tilesMesh",
  setup(__props) {
    const tiles = new Ai(
      `${"https://opensource.cdn.icegl.cn"}/3Dtiles/simpleGIS/data/tileset.json`
    );
    tiles.errorTarget = 0;
    const onLoadModel = ({ scene }) => {
      scene.traverse((c) => {
        if (c.isMesh) {
          c.material.side = 2;
          c.receiveShadow = false;
          c.castShadow = false;
        }
      });
      const box = new THREE.Box3();
      const sphere = new THREE.Sphere();
      if (tiles.getBoundingBox(box)) {
        box.getCenter(tiles.group.position);
        tiles.group.position.multiplyScalar(-1);
      } else if (tiles.getBoundingSphere(sphere)) {
        tiles.group.position.copy(sphere.center);
        tiles.group.position.multiplyScalar(-1);
      }
    };
    tiles.addEventListener("load-model", onLoadModel);
    const { camera, renderer, sizes } = Fs();
    watchEffect$1(() => {
      if (sizes.width.value) {
        tiles.setCamera(camera.value);
        tiles.setResolutionFromRenderer(camera.value, renderer);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (camera.value && sizes.width.value) {
        camera.value.updateMatrixWorld();
        tiles.update();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresGroup", null, [
        _createElementVNode$1("primitive", {
          object: _unref$1(tiles).group
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive,watchEffect,shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "renderer3DTiles",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919"
      // alpha: false,
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05
    });
    const TDirectionalLight = shallowRef();
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.position.set(1, 2, 3).multiplyScalar(40);
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [400, 400, 400],
            fov: 60,
            near: 0.1,
            far: 4e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _createElementVNode("TresDirectionalLight", {
            ref_key: "TDirectionalLight",
            ref: TDirectionalLight,
            position: [1, 2, 3],
            intensity: 1.25
          }, null, 512),
          _createVNode(_sfc_main$1),
          _cache[2] || (_cache[2] = _createElementVNode("TresAxesHelper", { args: [100] }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=renderer3DTiles.ByfkgJzE1767105581793.js.map
