import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { Br, Or } from './WMTSCapabilitiesLoader-DkTEM3c8.a9yUpBF51767105581793.js';
import { DRACOLoader } from './DRACOLoader.COk-ZkRx1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watchEffect} = await importShared('vue');
const THREE = await importShared('three');
const assetId = "354759";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhM2RlZDE0YS03NWNlLTQ2ZmItODFmZi0zMDQyZGMxZjdjNzQiLCJpZCI6NDYzMzQsImlhdCI6MTYxNjA1MjY2Nn0.3BRsxy7UmJgW0LemXo6cMsD7xwe7YvUDITeQ3RLxOHI";
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "cesiumIon3DTile",
  setup(__props) {
    const { camera, renderer, sizes } = Fs();
    function rotationBetweenDirections(dir1, dir2) {
      const rotation = new THREE.Quaternion();
      const a = new THREE.Vector3().crossVectors(dir1, dir2);
      rotation.x = a.x;
      rotation.y = a.y;
      rotation.z = a.z;
      rotation.w = 1 + dir1.clone().dot(dir2);
      rotation.normalize();
      return rotation;
    }
    const tiles = new Ai();
    function setupTiles() {
      tiles.fetchOptions.mode = "cors";
      tiles.registerPlugin(
        new Or({
          dracoLoader: new DRACOLoader().setDecoderPath("./draco/")
        })
      );
    }
    tiles.registerPlugin(new Br({ apiToken: accessToken, assetId }));
    tiles.addEventListener("load-tile-set", () => {
      const sphere = new THREE.Sphere();
      tiles.getBoundingSphere(sphere);
      const position = sphere.center.clone();
      const distanceToEllipsoidCenter = position.length();
      const surfaceDirection = position.normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const rotationToNorthPole = rotationBetweenDirections(surfaceDirection, up);
      tiles.group.quaternion.x = rotationToNorthPole.x;
      tiles.group.quaternion.y = rotationToNorthPole.y;
      tiles.group.quaternion.z = rotationToNorthPole.z;
      tiles.group.quaternion.w = rotationToNorthPole.w;
      tiles.group.position.y = -distanceToEllipsoidCenter;
    });
    setupTiles();
    watchEffect(() => {
      if (sizes.width.value) {
        tiles.setCamera(camera.value);
        tiles.setResolutionFromRenderer(camera.value, renderer);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (camera.value && sizes.width.value && tiles) {
        camera.value.updateMatrixWorld();
        tiles.update();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        _createElementVNode$1("primitive", {
          object: _unref$1(tiles).group
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cesiumIon",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, {
          clearColor: "#201919",
          "window-size": "",
          antialias: ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [1e3, 1e3, -100],
              fov: 60,
              near: 1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            _createVNode(_sfc_main$1),
            _cache[1] || (_cache[1] = _createElementVNode("TresAxesHelper", { args: [100] }, null, -1))
          ]),
          _: 1
        }),
        _cache[2] || (_cache[2] = _createElementVNode("h1", { class: "text-center text-white w-full absolute" }, "若没加载成功，请更换自己的Cesium-Key", -1))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cesiumIon.CKVldnAp1767105581793.js.map
