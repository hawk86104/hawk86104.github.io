import { importShared } from './index.BxB45aCK1767105581793.js';
import { zy, Gy, Hy, _sfc_main as _sfc_main$1, Z_, _a, ay } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["side"];
const _hoisted_2 = ["side"];
const _hoisted_3 = ["side"];
const _hoisted_4 = ["side"];
const {ref} = await importShared('vue');
const {DoubleSide} = await importShared('three');

const baseText = "GeoCSS2D 提供的文字，内容更新通过ref.update()";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-building",
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
    const textPosition = ref({
      height: 20,
      lon: 118.778677,
      lat: 32.043848
    });
    const text = ref(baseText);
    const geoCSS2D = ref();
    setInterval(() => {
      text.value = baseText + " " + (/* @__PURE__ */ new Date()).toLocaleTimeString();
      geoCSS2D.value?.update();
    }, 1e3);
    const position = ref({
      heading: 90,
      pitch: -51,
      distance: 200,
      longitude: 118.778677,
      latitude: 32.043848
    });
    const buildingGeometry = ref({
      type: "Polygon",
      coordinates: [
        [
          [118.77772328237239, 32.04432612811928],
          [118.77772046053065, 32.044208924944726],
          [118.77811551838028, 32.044187397815065],
          [118.77812116206377, 32.04430699291761],
          [118.77772328237239, 32.04432612811928]
        ]
      ]
    });
    const buildingGeometry2 = ref({
      type: "Polygon",
      coordinates: [
        [
          [118.77743931159796, 32.04358562105831],
          [118.7774233558493, 32.04332924302351],
          [118.77744172943761, 32.04316821866888],
          [118.77753416003719, 32.04297808248843],
          [118.7776246448928, 32.04287470456218],
          [118.77775948676714, 32.042703377054806],
          [118.77799047847617, 32.04256702439322],
          [118.77815265949408, 32.042499435056826],
          [118.77836502708362, 32.04245558899751],
          [118.77860739955867, 32.04243402495692],
          [118.77861524044874, 32.0428919691354],
          [118.77844017268097, 32.04289180087832],
          [118.77833232435626, 32.04291785276172],
          [118.778142046602, 32.04303145682158],
          [118.77800584872159, 32.043090486640594],
          [118.77790973962254, 32.04324048178658],
          [118.77790366180255, 32.043361543431274],
          [118.77791974408183, 32.04354086887459],
          [118.77743931159796, 32.04358562105831]
        ]
      ]
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(zy), null, {
        default: _withCtx(() => [
          _createVNode(_unref(Gy), {
            position: position.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => position.value = $event)
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          _createVNode(_unref(Z_), {
            point: textPosition.value,
            ref_key: "geoCSS2D",
            ref: geoCSS2D
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", null, _toDisplayString(text.value), 1)
            ]),
            _: 1
          }, 8, ["point"]),
          _createVNode(_unref(_a), {
            name: "GeoPosition",
            point: textPosition.value
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createElementVNode("TresMesh", null, [
                _createElementVNode("TresBoxGeometry", { args: [20, 20, 20] }),
                _createElementVNode("TresMeshBasicMaterial", { color: "red" })
              ], -1)
            ])]),
            _: 1
          }, 8, ["point"]),
          _createVNode(_unref(ay), {
            geometry: buildingGeometry.value,
            height: 50,
            "base-height": 0,
            "show-top": true,
            "show-walls": true,
            subdivisions: 1
          }, {
            top: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: "#fff",
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_1)
            ]),
            walls: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: "#fff",
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_2)
            ]),
            _: 1
          }, 8, ["geometry"]),
          _createVNode(_unref(ay), {
            geometry: buildingGeometry2.value,
            height: 20,
            "base-height": 0,
            "show-top": true,
            "show-walls": true,
            subdivisions: 1
          }, {
            top: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: "#fff",
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_3)
            ]),
            walls: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: "#fff",
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_4)
            ]),
            _: 1
          }, 8, ["geometry"])
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=case-building.KerjPRuk1767105581793.js.map
