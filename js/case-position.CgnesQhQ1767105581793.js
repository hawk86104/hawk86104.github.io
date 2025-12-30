import { importShared } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, _a, By } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-position",
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
          _createVNode(_unref(_a), {
            point: { lon: 118.778677, lat: 32.043848, height: 25 },
            height: 0
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createElementVNode("TresMesh", null, [
                _createElementVNode("TresCylinderGeometry", { args: [2, 2, 50] }),
                _createElementVNode("TresMeshStandardMaterial", { color: "#FF5722" })
              ], -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(_a), { point: { lon: 118.78, lat: 32.045, height: 0 } }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createElementVNode("TresMesh", null, [
                _createElementVNode("TresBoxGeometry", { args: [15, 15, 80] }),
                _createElementVNode("TresMeshStandardMaterial", { color: "#2196F3" })
              ], -1)
            ])]),
            _: 1
          }),
          _createVNode(_unref(_a), { point: { lon: 118.7786, lat: 32.0438, height: 0 } }, {
            default: _withCtx(() => [
              _createVNode(_unref(By), {
                url: "plugins/basic/htmls/model/model.gltf",
                draco: ""
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["position"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=case-position.CgnesQhQ1767105581793.js.map
