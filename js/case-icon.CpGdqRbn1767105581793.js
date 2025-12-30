import { importShared } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, Q_, J_, ty } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-icon",
  setup(__props) {
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
          _createVNode(_unref(Q_), {
            text: "GeoIcon 远近相同",
            color: "#000",
            align: "center",
            point: { lon: 118.778677, lat: 32.043848, height: 42 },
            fontSize: 14
          }),
          _createVNode(_unref(J_), {
            icon: "https://img.icons8.com/?size=80&id=TQ3X81dkG8Q1&format=png",
            point: { lon: 118.778677, lat: 32.043848, height: 40 },
            size: 14
          }),
          _createVNode(_unref(Q_), {
            text: "GeoPoint 近大远小",
            color: "#000",
            align: "right",
            point: { lon: 118.7786, lat: 32.0438, height: 42 },
            fontSize: 14
          }),
          _createVNode(_unref(ty), {
            icon: "https://img.icons8.com/?size=80&id=TQ3X81dkG8Q1&format=png",
            point: { lon: 118.7786, lat: 32.0438, height: 40 },
            size: 20
          })
        ]),
        _: 1
      }, 8, ["position"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=case-icon.CpGdqRbn1767105581793.js.map
