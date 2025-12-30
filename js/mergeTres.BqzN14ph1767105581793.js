import { defineStore, importShared, _export_sfc, Fs } from './index.BxB45aCK1767105581793.js';
import { AMapLoader } from './index.B9AP4spZ1767105581793.js';

const {shallowRef} = await importShared('vue');


const useMapStore = defineStore('mapStore', () => {
	const aMap = shallowRef(null);
	const mapHandle = shallowRef(null);
	const cameraState = shallowRef(null);

	//导出参数
	return { aMap, mapHandle, cameraState }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { id: "mapContainer" };
const {onMounted} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent({
  __name: "mapContainer",
  props: {
    center: { default: [0, 0] },
    zoom: { default: 14 },
    pitch: { default: 50 },
    mapStyle: { default: "normal" }
  },
  setup(__props) {
    const props = __props;
    const mapStore = useMapStore();
    let map = null;
    onMounted(async () => {
      await AMapLoader.load({
        key: "0c7222955570f1b434c4adfcc1e955e8",
        //可自行修改成自己得高德API key
        version: "2.0"
      }).then((_AMap) => {
        map = new _AMap.Map("mapContainer", {
          center: props.center,
          zooms: [1, 20],
          viewMode: "3D",
          zoom: props.zoom,
          pitch: props.pitch,
          mapStyle: "amap://styles/" + props.mapStyle
        });
        map.on("click", (e) => {
          const text = `您在 [ ${e.lnglat.getLng()},${e.lnglat.getLat()} ] 的位置单击了地图！`;
          console.log(text);
        });
        mapStore.$patch({ aMap: _AMap });
        mapStore.$patch({ mapHandle: map });
      }).catch((e) => {
        console.log(e);
      });
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1);
    };
  }
});

const mapContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e1a7e2c4"]]);

const {watchEffect} = await importShared('vue');


const _sfc_main = {
  __name: 'mergeTres',
  props: {
	center: {
		default: [0, 0]
	}
},
  setup(__props) {

const props = __props;

const { camera, scene, renderer } = Fs();
const mapStore = useMapStore();
let customCoords = null;
let customLayer = null;
watchEffect(() => {
	if (mapStore.aMap) {
		// renderer.autoClear = false
		customCoords = mapStore.mapHandle.customCoords;
		customLayer = new mapStore.aMap.CustomLayer(renderer.domElement, {
			zIndex: 10,
			render: () => {
				renderer.resetState();
				customCoords.setCenter(props.center);
				const { near, far, fov, up, lookAt, position } =
					customCoords.getCameraParams();
				// 这里的顺序不能颠倒，否则可能会出现绘制卡顿的效果。
				camera.value.near = near;
				camera.value.far = far;
				camera.value.fov = fov;
				mapStore.$patch({
					cameraState: {
						near, far, fov, position
					}
				});
				camera.value.position.set(...position);
				camera.value.up.set(...up);
				camera.value.lookAt(...lookAt);
				camera.value.updateProjectionMatrix();
				renderer.render(scene.value, camera.value);
				renderer.resetState();
			},
			alwaysRender: true
		});
		mapStore.mapHandle.add(customLayer);
	}
});

return (_ctx, _cache) => {
  return null
}
}

};

export { _sfc_main, mapContainer, useMapStore };
//# sourceMappingURL=mergeTres.BqzN14ph1767105581793.js.map
