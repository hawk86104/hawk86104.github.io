import { importShared } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, ey } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-particle-icon",
  setup(__props) {
    const randomColor = () => {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };
    const handlePointClick = (d, i) => {
      alert(`点击了第 ${i} 个,
 JS数据: ${JSON.stringify(d)}`);
    };
    const randomPoints = (center) => {
      return Array.from({ length: 1e4 }, (_, index) => ({
        lon: center.lon + Math.random() * 0.01 - 5e-3,
        lat: center.lat + Math.random() * 0.01 - 5e-3,
        height: 5 + Math.random() * 5,
        color: index % 20 !== 0 ? "#ffffff" : randomColor(),
        id: index
      }));
    };
    const points = ref(randomPoints({ lon: 118.778677, lat: 32.043848 }));
    const sceneConfig = ref({
      effectProps: {
        enabled: true,
        focusArea: 0.7,
        feather: 0.1
      },
      ambientLight: {
        color: "#fff",
        intensity: 1
      },
      directionalLight: {
        color: "#fff",
        intensity: 2,
        position: [-1500, 500, 500]
      },
      background: "/plugins/topoProject/image/farm_field_puresky_2k.jpg"
    });
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 300,
      longitude: 118.778677,
      latitude: 32.043848
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(zy), {
        position: cameraPosition.value,
        "onUpdate:position": _cache[1] || (_cache[1] = ($event) => cameraPosition.value = $event)
      }, {
        default: _withCtx(() => [
          _createVNode(_unref(Gy), {
            position: cameraPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event)
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          _createVNode(_unref(ey), {
            onPointClick: handlePointClick,
            points: points.value,
            icon: "https://img.icons8.com/?size=80&id=TQ3X81dkG8Q1&format=png",
            color: "red",
            size: 20
          }, null, 8, ["points"])
        ]),
        _: 1
      }, 8, ["position"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=case-particle-icon.DrOyRCQn1767105581793.js.map
