import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { pt, en, controlsEvents, showLocation } from './informationDiv.BpVz_Xf81767105581793.js';
import { Tween } from './tween.esm.DW3Z4hQ71767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "flyTo",
  props: {
    map: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { camera, controls } = Fs();
    let twInstant = [];
    const flyToPos = (cameraPos, centerPos) => {
      if (controls.value) {
        controls.value.target.copy(centerPos);
      }
      const start = camera.value.position;
      twInstant[0] = new Tween(start).to(cameraPos).start();
    };
    const flyToGeo = (cameraGeo, centerGeo) => {
      const getPos = (geo) => {
        return props.map.localToWorld(props.map.geo2pos(geo));
      };
      const cameraPosition = getPos(cameraGeo);
      const centerPosition = getPos(centerGeo);
      flyToPos(cameraPosition, centerPosition);
    };
    const goToGeo = (cameraGeo, centerGeo) => {
      const newCenterPos = props.map.localToWorld(props.map.geo2pos(centerGeo));
      const newCameraPos = props.map.localToWorld(props.map.geo2pos(cameraGeo));
      camera.value.position.copy(newCameraPos);
      controls.value.target.copy(newCenterPos);
      controls.value.dispatchEvent({ type: "change" });
    };
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (twInstant) {
        twInstant[0]?.update();
      }
    });
    __expose({
      flyToGeo,
      goToGeo
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "mapBoxShow",
  setup(__props) {
    const map = new pt({
      // 影像数据源
      imgSource: [new en({ style: "6" }), new en({ style: "8" })],
      // 高程数据源
      // demSource: mapBoxDemSource,
      // 地图投影中央经线经度
      lon0: 90,
      // 最小缩放级别
      minLevel: 2,
      // 最大缩放级别
      maxLevel: 20
    });
    map.rotateX(-Math.PI / 2);
    const centerGeo = new THREE.Vector3(110, 30, 0);
    const camersGeo = new THREE.Vector3(110, 0, 1e7);
    const centerPostion = map.localToWorld(map.geo2map(centerGeo));
    const cameraPosition = map.localToWorld(map.geo2map(camersGeo));
    const tdLight = ref();
    const { camera, controls, scene, renderer } = Fs();
    if (camera.value) {
      camera.value.position.copy(cameraPosition);
    }
    watch(
      () => controls.value,
      (value) => {
        if (value) {
          value.target.copy(centerPostion);
          controlsEvents(value, camera.value, scene.value);
        }
      }
    );
    watch(
      () => tdLight.value,
      (value) => {
        if (value) {
          value.target.position.copy(centerPostion);
        }
      }
    );
    const flyToRef = ref();
    watch(
      () => flyToRef.value,
      (value) => {
        if (value) {
          const newCameraGeo = new THREE.Vector3(118.724693, 32.00741, 9655);
          const newCenterGeo = new THREE.Vector3(118.724419, 32.010354, 0);
          setTimeout(() => {
            value.flyToGeo(newCameraGeo, newCenterGeo);
          }, 500);
        }
      }
    );
    showLocation(camera.value, renderer.domElement, map);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("TresDirectionalLight", {
          ref_key: "tdLight",
          ref: tdLight,
          position: [0, 2e3, 1e3],
          intensity: 1
        }, null, 512),
        _createElementVNode("primitive", { object: _unref(map) }, null, 8, _hoisted_1),
        _createVNode(_sfc_main$1, {
          map: _unref(map),
          ref_key: "flyToRef",
          ref: flyToRef
        }, null, 8, ["map"])
      ], 64);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=mapBoxShow.vue_vue_type_script_setup_true_lang.Bn2M8Kh51767105581793.js.map
