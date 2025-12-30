import { importShared, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { T_, Gy, Hy, _sfc_main as _sfc_main$1, ay, cy, Z_, oy, ry, $d, iy, ol } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,withCtx:_withCtx,Suspense:_Suspense,createBlock:_createBlock,createCommentVNode:_createCommentVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = ["color", "side"];
const _hoisted_2 = ["color", "side"];
const _hoisted_3 = ["color", "side"];
const _hoisted_4 = ["color", "side", "map"];
const _hoisted_5 = ["side", "map"];
const _hoisted_6 = ["side", "map"];
const _hoisted_7 = ["side"];
const {SRGBColorSpace,BasicShadowMap,NoToneMapping,DoubleSide,RepeatWrapping} = await importShared('three');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-real-1",
  setup(__props) {
    const jumpToBuilding = () => {
      window.open(`https://www.baidu.com/s?wd=tvt.js`);
    };
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
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
      background: "/plugins/earthSample/image/menuA/bg-img.png"
    });
    const hoverSchool = ref(false);
    const hoverMainBuilding = ref(false);
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 1e3,
      longitude: 116.4,
      latitude: 39.89
    });
    const lightWall = {
      geometry: {
        coordinates: [
          [
            [116.40062444484641, 39.889318170003946],
            [116.4001166459069, 39.88932218813355],
            [116.40011595163548, 39.8891218914753],
            [116.4006220748131, 39.889125620407725],
            [116.40062444484641, 39.889318170003946]
          ]
        ],
        type: "Polygon"
      }
    };
    const mainBuilding = {
      properties: {
        height: 60,
        color: "#ffffff",
        topColor: "#504945"},
      geometry: {
        coordinates: [
          [
            [116.40014420481106, 39.88927114134762],
            [116.40014420481106, 39.88913976120688],
            [116.400590940131, 39.88914371249297],
            [116.40058450302269, 39.88927114134762],
            [116.40042872500055, 39.88927311698686],
            [116.40043001242219, 39.889290897737766],
            [116.40037722813429, 39.88928892209904],
            [116.40037722813429, 39.88927114134762],
            [116.40014420481106, 39.88927114134762]
          ]
        ],
        type: "Polygon"
      }};
    const buildings = [
      {
        type: "Feature",
        properties: {
          height: 2,
          baseHeight: 60,
          color: "#504945"
        },
        geometry: {
          coordinates: [
            [
              [116.40053533720663, 39.889249911650154],
              [116.40017739101808, 39.88925212335408],
              [116.40017278524135, 39.889157605650865],
              [116.40054154057134, 39.88916386201336],
              [116.40053533720663, 39.889249911650154]
            ]
          ],
          type: "Polygon"
        }
      },
      {
        type: "Feature",
        properties: {
          height: 12,
          color: "#ffffff"
        },
        geometry: {
          coordinates: [
            [
              [116.4000509875824, 39.889359296436],
              [116.39989247312991, 39.88936206755017],
              [116.39989310873028, 39.8892962028674],
              [116.40004924175582, 39.88929441024413],
              [116.4000509875824, 39.889359296436]
            ]
          ],
          type: "Polygon"
        }
      },
      {
        type: "Feature",
        properties: {
          height: 8,
          color: "#ffffff"
        },
        geometry: {
          coordinates: [
            [
              [116.40076351042848, 39.889339235722645],
              [116.40077599720547, 39.88923220866707],
              [116.40101131339742, 39.889232538713486],
              [116.40101886988708, 39.88907676585791],
              [116.40065498932728, 39.889059496620376],
              [116.40066269271313, 39.888942049956626],
              [116.40122206035153, 39.888958815209804],
              [116.4011953578576, 39.889353247053606],
              [116.40076351042848, 39.889339235722645]
            ]
          ],
          type: "Polygon"
        }
      }
    ];
    const moveLine = [
      { lon: 116.40037040420532, lat: 39.88913457626359, height: 2 },
      { lon: 116.4003672801478, lat: 39.88898436108789, height: 2 },
      { lon: 116.40058804688078, lat: 39.88899474831794, height: 2 },
      { lon: 116.40071300918225, lat: 39.889219271909184, height: 2 },
      { lon: 116.4006930606676, lat: 39.88946483590655, height: 2 },
      { lon: 116.40140135311572, lat: 39.88949379078031, height: 2 },
      { lon: 116.40230994137869, lat: 39.889536109418884, height: 2 },
      { lon: 116.40290792635864, lat: 39.889560609283734, height: 2 },
      { lon: 116.40352042515502, lat: 39.889589564117045, height: 2 },
      { lon: 116.40397326786865, lat: 39.88960738246945, height: 2 },
      { lon: 116.40444352769259, lat: 39.889475971544925, height: 2 },
      { lon: 116.40473613342004, lat: 39.889398165665085, height: 2 },
      { lon: 116.40483768131469, lat: 39.889376041349294, height: 2 },
      { lon: 116.40499062999464, lat: 39.889368345933406, height: 2 },
      { lon: 116.40499564470542, lat: 39.88955880722449, height: 2 },
      { lon: 116.40445154858082, lat: 39.88966461882447, height: 2 },
      { lon: 116.40448414420251, lat: 39.889863736573744, height: 2 }
    ];
    const school = {
      geometry: {
        coordinates: [
          [
            [116.40400143273263, 39.89032645785227],
            [116.40399027285565, 39.8902995145053],
            [116.40402563420929, 39.88974295726425],
            [116.40407112221544, 39.88973807097332],
            [116.40407194958078, 39.88967255645244],
            [116.40432411653177, 39.8896726230017],
            [116.40430100031023, 39.88961383892075],
            [116.40486204831541, 39.88948601599472],
            [116.40493147780046, 39.88947746193895],
            [116.40535511205286, 39.88948610850272],
            [116.40532159619062, 39.89001145062542],
            [116.40493536530039, 39.890076964926834],
            [116.40482603974834, 39.89025269018805],
            [116.40440709146338, 39.89033351141137],
            [116.40400143273263, 39.89032645785227]
          ]
        ],
        type: "Polygon"
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        class: {
          "hover-main-building": hoverMainBuilding.value || hoverSchool.value
        }
      }), {
        default: _withCtx(() => [
          _cache[7] || (_cache[7] = _createElementVNode("TresPerspectiveCamera", {
            fov: 29,
            near: 50,
            far: 1e6
          }, null, -1)),
          _createVNode(_unref(T_)),
          _createVNode(_unref(Gy), {
            position: cameraPosition.value,
            "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event),
            "min-distance": 1
          }, null, 8, ["position"]),
          _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
          _createVNode(_sfc_main$1),
          (_openBlock(), _createElementBlock(_Fragment, null, _renderList(buildings, (building, index) => {
            return _createVNode(_unref(ay), {
              key: index,
              geometry: building.geometry,
              "show-top": "",
              height: building.properties.height,
              "base-height": building.properties.baseHeight
            }, {
              top: _withCtx(() => [
                _createElementVNode("TresMeshStandardMaterial", {
                  color: building.properties.color,
                  side: _unref(DoubleSide)
                }, null, 8, _hoisted_1)
              ]),
              walls: _withCtx(() => [
                _createElementVNode("TresMeshStandardMaterial", {
                  color: building.properties.color,
                  side: _unref(DoubleSide)
                }, null, 8, _hoisted_2)
              ]),
              _: 2
            }, 1032, ["geometry", "height", "base-height"]);
          }), 64)),
          _createVNode(_unref(ay), {
            geometry: mainBuilding.geometry,
            "show-top": "",
            height: mainBuilding.properties.height,
            "base-height": 0,
            onPointerover: _cache[1] || (_cache[1] = ($event) => hoverMainBuilding.value = true),
            onPointerleave: _cache[2] || (_cache[2] = ($event) => hoverMainBuilding.value = false),
            onClick: jumpToBuilding
          }, {
            top: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: mainBuilding.properties.topColor,
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_3)
            ]),
            walls: _withCtx(() => [
              (_openBlock(), _createBlock(_Suspense, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(sz), { path: "/plugins/geokit/image/building-wall.png" }, {
                    default: _withCtx(({ state: state2 }) => [
                      _createVNode(_unref(cy), {
                        texture: state2,
                        wrapS: _unref(RepeatWrapping),
                        wrapT: _unref(RepeatWrapping),
                        repeat: [5, 1],
                        center: [0.5, 0.5]
                      }, null, 8, ["texture", "wrapS", "wrapT"]),
                      _createElementVNode("TresMeshStandardMaterial", {
                        color: mainBuilding.properties.color,
                        side: _unref(DoubleSide),
                        map: state2
                      }, null, 8, _hoisted_4)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ]),
            _: 1
          }, 8, ["geometry", "height"]),
          hoverMainBuilding.value ? (_openBlock(), _createBlock(_unref(Z_), {
            key: 0,
            point: { lon: 116.40036727754858, lat: 39.88920339523989, height: 100 }
          }, {
            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createElementVNode("div", { class: "building-label" }, "锦江大楼", -1)
            ])]),
            _: 1
          })) : _createCommentVNode("", true),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/line2.png" }, {
                default: _withCtx(({ state: state2 }) => [
                  hoverMainBuilding.value ? (_openBlock(), _createBlock(_unref(oy), {
                    key: 0,
                    geometry: lightWall.geometry,
                    height: 26
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(cy), {
                        texture: state2,
                        rotation: Math.PI / 2,
                        center: [0.5, 0.5]
                      }, null, 8, ["texture", "rotation"]),
                      _createElementVNode("TresMeshBasicMaterial", {
                        color: "#93adff",
                        transparent: true,
                        opacity: 0.8,
                        side: _unref(DoubleSide),
                        map: state2
                      }, null, 8, _hoisted_5)
                    ]),
                    _: 2
                  }, 1032, ["geometry"])) : _createCommentVNode("", true),
                  _createVNode(_unref(oy), {
                    geometry: school.geometry,
                    height: 20
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(cy), {
                        texture: state2,
                        rotation: Math.PI / 2,
                        center: [0.5, 0.5]
                      }, null, 8, ["texture", "rotation"]),
                      _createElementVNode("TresMeshBasicMaterial", {
                        color: "#00cb91",
                        transparent: true,
                        opacity: 0.8,
                        side: _unref(DoubleSide),
                        map: state2
                      }, null, 8, _hoisted_6)
                    ]),
                    _: 2
                  }, 1032, ["geometry"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          _createVNode(_unref(ry), {
            geometry: school.geometry,
            height: 1,
            subdivisions: 2,
            onPointerover: _cache[3] || (_cache[3] = ($event) => hoverSchool.value = true),
            onPointerleave: _cache[4] || (_cache[4] = ($event) => hoverSchool.value = false)
          }, {
            default: _withCtx(() => [
              _createElementVNode("TresMeshStandardMaterial", {
                color: "#00cb91",
                transparent: "",
                opacity: 0.6,
                side: _unref(DoubleSide)
              }, null, 8, _hoisted_7)
            ]),
            _: 1
          }, 8, ["geometry"]),
          hoverSchool.value ? (_openBlock(), _createBlock(_Suspense, { key: 1 }, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/flyLine1.png" }, {
                default: _withCtx(({ state: state2 }) => [
                  _createVNode(_unref(cy), {
                    texture: state2,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref($d), { duration: 2e3 }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(iy), {
                        map: state2,
                        start: { lon: 116.40463917407055, lat: 39.889897530319814, height: 0 },
                        end: { lon: 116.40036727754858, lat: 39.88920339523989, height: 0 },
                        type: "mesh",
                        color: "#ff6b6b",
                        width: 20,
                        arcHeight: 60,
                        segments: 15
                      }, null, 8, ["map"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : _createCommentVNode("", true),
          _createVNode(_unref(Z_), { point: { lon: 116.40463917407055, lat: 39.889897530319814, height: 80 } }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createElementVNode("div", { class: "building-label" }, "金台书院小学", -1)
            ])]),
            _: 1
          }),
          hoverMainBuilding.value ? (_openBlock(), _createBlock(_Suspense, { key: 2 }, {
            default: _withCtx(() => [
              _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/flyLine5.png" }, {
                default: _withCtx(({ state: state2 }) => [
                  _createVNode(_unref(cy), {
                    texture: state2,
                    wrapT: _unref(RepeatWrapping),
                    wrapS: _unref(RepeatWrapping)
                  }, null, 8, ["texture", "wrapT", "wrapS"]),
                  _createVNode(_unref($d), { duration: 4e3 }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ol), {
                        points: moveLine,
                        color: "#00cb91",
                        width: 6,
                        map: state2
                      }, null, 8, ["map"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : _createCommentVNode("", true)
        ]),
        _: 1
      }, 16, ["class"]);
    };
  }
});

const caseReal1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cfd1927"]]);

export { caseReal1 as default };
//# sourceMappingURL=case-real-1.nngPDCc71767105581793.js.map
