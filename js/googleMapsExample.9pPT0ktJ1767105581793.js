import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Wi, Fi, Ai } from './CameraTransitionManager-DhJe9L3A.BTX4e7Mf1767105581793.js';
import { Br, Dr, Ur, Fr, Nr, Or } from './WMTSCapabilitiesLoader-DkTEM3c8.a9yUpBF51767105581793.js';
import { DRACOLoader } from './DRACOLoader.COk-ZkRx1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const assetId = "2275207";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhM2RlZDE0YS03NWNlLTQ2ZmItODFmZi0zMDQyZGMxZjdjNzQiLCJpZCI6NDYzMzQsImlhdCI6MTYxNjA1MjY2Nn0.3BRsxy7UmJgW0LemXo6cMsD7xwe7YvUDITeQ3RLxOHI";
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "googleMaps",
  setup(__props) {
    const { camera, renderer, sizes, scene } = Fs();
    let transition = null;
    let tiles = null;
    let globeControls = null;
    function reinstantiateTiles() {
      tiles = new Ai();
      tiles.registerPlugin(
        new Br({
          apiToken: accessToken,
          assetId,
          autoRefreshToken: true
        })
      );
      tiles.registerPlugin(new Dr());
      tiles.registerPlugin(new Ur());
      tiles.registerPlugin(new Fr());
      tiles.registerPlugin(new Nr());
      tiles.registerPlugin(
        new Or({
          dracoLoader: new DRACOLoader().setDecoderPath("./draco/")
        })
      );
      tiles.group.rotation.x = -Math.PI / 2;
    }
    reinstantiateTiles();
    tiles.setCamera(camera.value);
    tiles.setResolutionFromRenderer(camera.value, renderer);
    transition = new Wi(camera.value, void 0);
    transition.perspectiveCamera.position.set(-3960140, 3689031, -3364162);
    transition.perspectiveCamera.lookAt(0, 0, 0);
    transition.autoSync = false;
    transition.orthographicPositionalZoom = false;
    globeControls = new Fi(scene.value, transition.camera, renderer.domElement, void 0);
    globeControls.enableDamping = true;
    globeControls.setScene(tiles.group);
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (camera.value && sizes.width.value && tiles) {
        globeControls.enabled = !transition.animating;
        globeControls.update();
        transition.update();
        const camerac = transition.camera;
        tiles.setResolutionFromRenderer(camerac, renderer);
        tiles.setCamera(camerac);
        camerac.updateMatrixWorld();
        tiles.update();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        _createElementVNode$1("primitive", {
          object: _unref(tiles).group
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "googleMapsExample",
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
              position: [48e5, 257e4, 1472e4],
              fov: 60,
              near: 1,
              far: 16e7
            }, null, -1)),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        }),
        _cache[1] || (_cache[1] = _createElementVNode("h1", { class: "text-center text-white w-full absolute" }, "若没加载成功，请自行梯子", -1))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=googleMapsExample.9pPT0ktJ1767105581793.js.map
