import { importShared, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { T_, Gy, Hy, _sfc_main as _sfc_main$1, cy, ry, oy, $d, ol, Z_ } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,renderList:_renderList,Fragment:_Fragment,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = ["map", "side"];
const _hoisted_2 = ["map", "side"];
const _hoisted_3 = ["map", "side", "opacity"];
const _hoisted_4 = { class: "css2d-label" };
const {SRGBColorSpace,BasicShadowMap,NoToneMapping,DoubleSide,RepeatWrapping} = await importShared('three');

const {onMounted,reactive,ref,shallowRef,computed} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-real-2",
  setup(__props) {
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
    const cameraPosition = ref({
      heading: 90,
      pitch: -45,
      distance: 27e4,
      longitude: 116.31635810091619,
      latitude: 40.125336671652086
    });
    const hoverAreaName = ref("");
    const focusAreaName = ref("");
    const highlightAreaName = computed(() => focusAreaName.value || hoverAreaName.value);
    const beijingChidlrenGeojson = shallowRef();
    const beijingGeojson = shallowRef();
    const beijingBorder = shallowRef([]);
    onMounted(() => {
      fetch("/plugins/geokit/json/110000.json").then((response) => response.json()).then((data) => {
        beijingGeojson.value = data;
        beijingBorder.value = data.features[0].geometry.coordinates[0][0].map((point) => ({
          lon: point[0],
          lat: point[1],
          height: 5100
        }));
      }).catch((error) => {
        console.error("Error loading Beijing GeoJSON:", error);
      });
      fetch("/plugins/geokit/json/110000.children.json").then((response) => response.json()).then((data) => {
        beijingChidlrenGeojson.value = data;
      }).catch((error) => {
        console.error("Error loading Beijing GeoJSON:", error);
      });
    });
    const goToArea = (areaName) => {
      if (!areaName) return;
      if (focusAreaName.value === areaName) {
        focusAreaName.value = "";
        return;
      }
      focusAreaName.value = areaName;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _cache[3] || (_cache[3] = _createElementVNode("p", { class: "video-link" }, [
          _createElementVNode("a", {
            href: "https://www.bilibili.com/video/BV11C8GziEiH",
            target: "_blank"
          }, "视频教学")
        ], -1)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(T_)),
            _createVNode(_unref(Gy), {
              position: cameraPosition.value,
              "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event),
              "min-distance": 1
            }, null, 8, ["position"]),
            _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
            _createVNode(_sfc_main$1),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(sz), { path: "/plugins/geokit/image/110000.bg.jpg" }, {
                  default: _withCtx(({ state: state2 }) => [
                    _createVNode(_unref(cy), { texture: state2 }, null, 8, ["texture"]),
                    beijingGeojson.value ? (_openBlock(), _createBlock(_unref(ry), {
                      key: 0,
                      geometry: beijingGeojson.value.features[0].geometry,
                      height: 5e3,
                      renderOrder: 10
                    }, {
                      default: _withCtx(() => [
                        _createElementVNode("TresMeshStandardMaterial", {
                          map: state2,
                          side: _unref(DoubleSide),
                          transparent: "",
                          "depth-write": false
                        }, null, 8, _hoisted_1)
                      ]),
                      _: 2
                    }, 1032, ["geometry"])) : _createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/line2.png" }, {
                  default: _withCtx(({ state: state2 }) => [
                    _createVNode(_unref(cy), {
                      texture: state2,
                      rotation: -Math.PI / 2,
                      center: [0.2, 0.5]
                    }, null, 8, ["texture", "rotation"]),
                    beijingGeojson.value ? (_openBlock(), _createBlock(_unref(oy), {
                      key: 0,
                      geometry: beijingGeojson.value.features[0].geometry,
                      height: 5e3,
                      renderOrder: 10
                    }, {
                      default: _withCtx(() => [
                        _createElementVNode("TresMeshStandardMaterial", {
                          map: state2,
                          side: _unref(DoubleSide),
                          transparent: "",
                          "depth-write": false
                        }, null, 8, _hoisted_2)
                      ]),
                      _: 2
                    }, 1032, ["geometry"])) : _createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })),
            beijingBorder.value.length ? (_openBlock(), _createBlock(_Suspense, { key: 0 }, {
              default: _withCtx(() => [
                _createVNode(_unref(sz), { path: "/plugins/digitalCity/image/flyLine4.png" }, {
                  default: _withCtx(({ state: state2 }) => [
                    _createVNode(_unref(cy), {
                      texture: state2,
                      wrapT: _unref(RepeatWrapping),
                      wrapS: _unref(RepeatWrapping)
                    }, null, 8, ["texture", "wrapT", "wrapS"]),
                    _createVNode(_unref($d), { duration: 2e3 }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ol), {
                          points: beijingBorder.value,
                          width: 500,
                          renderOrder: 50,
                          color: "#0057ff",
                          map: state2
                        }, null, 8, ["points", "map"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : _createCommentVNode("", true),
            beijingChidlrenGeojson.value ? (_openBlock(), _createBlock(_Suspense, { key: 1 }, {
              default: _withCtx(() => [
                _createVNode(_unref(sz), { path: "/plugins/floor/image/concrete_wet_floor_basecolor.jpg" }, {
                  default: _withCtx(({ state: state2 }) => [
                    _createVNode(_unref(cy), { texture: state2 }, null, 8, ["texture"]),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(beijingChidlrenGeojson.value.features, (feature, index) => {
                      return _openBlock(), _createElementBlock(_Fragment, { key: index }, [
                        feature ? (_openBlock(), _createBlock(_unref(ry), {
                          key: 0,
                          geometry: feature.geometry,
                          height: 5e3,
                          renderOrder: 20,
                          onPointerenter: ($event) => hoverAreaName.value = feature.properties?.name,
                          onPointerleave: _cache[1] || (_cache[1] = ($event) => hoverAreaName.value = ""),
                          onClick: ($event) => goToArea(feature.properties?.name)
                        }, {
                          default: _withCtx(() => [
                            _createElementVNode("TresMeshStandardMaterial", {
                              map: state2,
                              side: _unref(DoubleSide),
                              transparent: "",
                              opacity: highlightAreaName.value === feature.properties?.name ? 0.7 : 0,
                              "depth-write": false
                            }, null, 8, _hoisted_3)
                          ]),
                          _: 2
                        }, 1032, ["geometry", "onPointerenter", "onClick"])) : _createCommentVNode("", true),
                        (highlightAreaName.value ? highlightAreaName.value === feature.properties?.name : cameraPosition.value.distance < 6e5) ? (_openBlock(), _createBlock(_unref(Z_), {
                          key: 1,
                          point: {
                            lon: feature.properties?.centroid[0],
                            lat: feature.properties?.centroid[1],
                            height: 9e3
                          }
                        }, {
                          default: _withCtx(() => [
                            _createElementVNode("div", _hoisted_4, _toDisplayString(feature.properties?.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["point"])) : _createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : _createCommentVNode("", true)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const caseReal2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a21f76d3"]]);

export { caseReal2 as default };
//# sourceMappingURL=case-real-2.BmOrJMRo1767105581793.js.map
