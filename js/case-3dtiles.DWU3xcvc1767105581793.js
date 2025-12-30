import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, Uy, _a } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "overlay" };
const _hoisted_2 = { class: "info-panel" };
const _hoisted_3 = { class: "control-panel" };
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-3dtiles",
  setup(__props) {
    const sceneConfig = ref({
      effectProps: {
        enabled: false,
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
    const boxPosition = ref({
      height: 50,
      lon: 118.778677,
      lat: 32.043848
    });
    const position = ref({
      heading: 90,
      pitch: -51,
      distance: 4e3,
      longitude: 118.778677,
      latitude: 32.043848
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _createElementVNode("div", null, "当前距离：" + _toDisplayString(position.value.distance.toFixed(2)) + "米", 1),
            _createElementVNode("div", null, "当前航向：" + _toDisplayString(position.value.heading.toFixed(2)) + "°", 1),
            _createElementVNode("div", null, "当前俯仰：" + _toDisplayString(position.value.pitch.toFixed(2)) + "°", 1),
            _createElementVNode("div", null, "视点经度：" + _toDisplayString(position.value.longitude.toFixed(2)) + "°", 1),
            _createElementVNode("div", null, "视点纬度：" + _toDisplayString(position.value.latitude.toFixed(2)) + "°", 1)
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[0] || (_cache[0] = ($event) => position.value = { ...position.value, distance: position.value.distance + 100 })
            }, "距离 + 100米"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[1] || (_cache[1] = ($event) => position.value = { ...position.value, distance: position.value.distance - 100 })
            }, "距离 - 100米"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[2] || (_cache[2] = ($event) => position.value = { ...position.value, heading: position.value.heading + 10 })
            }, "航向 + 10°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[3] || (_cache[3] = ($event) => position.value = { ...position.value, heading: position.value.heading - 10 })
            }, "航向 - 10°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[4] || (_cache[4] = ($event) => position.value = { ...position.value, pitch: position.value.pitch + 10 })
            }, "俯仰 + 10°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[5] || (_cache[5] = ($event) => position.value = { ...position.value, pitch: position.value.pitch - 10 })
            }, "俯仰 - 10°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[6] || (_cache[6] = ($event) => position.value = { ...position.value, longitude: position.value.longitude + 1e-3 })
            }, "经度 + 0.001°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[7] || (_cache[7] = ($event) => position.value = { ...position.value, longitude: position.value.longitude - 1e-3 })
            }, "经度 - 0.001°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[8] || (_cache[8] = ($event) => position.value = { ...position.value, latitude: position.value.latitude + 1e-3 })
            }, "纬度 + 0.001°"),
            _createElementVNode("button", {
              class: "control-btn",
              onClick: _cache[9] || (_cache[9] = ($event) => position.value = { ...position.value, latitude: position.value.latitude - 1e-3 })
            }, "纬度 - 0.001°")
          ])
        ]),
        _createVNode(_unref(zy), null, {
          default: _withCtx(() => [
            _createVNode(_unref(Gy), {
              position: position.value,
              "onUpdate:position": _cache[10] || (_cache[10] = ($event) => position.value = $event)
            }, null, 8, ["position"]),
            _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
            _createVNode(_sfc_main$1),
            _createVNode(_unref(Uy), { url: "/plugins/geokit/tiles/tileset.json" }),
            _createVNode(_unref(_a), {
              name: "GeoPosition",
              point: boxPosition.value
            }, {
              default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                _createElementVNode("TresMesh", null, [
                  _createElementVNode("TresBoxGeometry", { args: [20, 20, 20] }),
                  _createElementVNode("TresMeshBasicMaterial", { color: "blue" })
                ], -1)
              ])]),
              _: 1
            }, 8, ["point"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const case3dtiles = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b114b733"]]);

export { case3dtiles as default };
//# sourceMappingURL=case-3dtiles.DWU3xcvc1767105581793.js.map
