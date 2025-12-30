import { importShared, sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { T_, Gy, Hy, _sfc_main as _sfc_main$1, _a, ly, By, cy, $d, ol, J_ } from './DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { scale: [5, 5, 5] };
const {SRGBColorSpace,BasicShadowMap,NoToneMapping,CurvePath,LineCurve,Vector2,RepeatWrapping,Vector3} = await importShared('three');

const {reactive,ref} = await importShared('vue');
const {watch} = await importShared('vue');

const orbitLat = 40;
const orbitHeight = 8e5;
const orbitCenterLon = 90.85;
const period = 500;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "case-real-3",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const ship1Position = ref({ lon: 117.84796240906425, lat: 38.95216229684954, height: 20 });
    const ship2Position = ref({ lon: 117.8533521756129, lat: 38.95128, height: 20 });
    function createInterpolator(inMin, inMax, outMin, outMax, clamp = true) {
      const denom = inMax - inMin;
      return (value) => {
        let t = (value - inMin) / denom;
        if (clamp) t = Math.max(0, Math.min(1, t));
        return outMin + t * (outMax - outMin);
      };
    }
    const cameraRef = ref();
    function vec32ecefHeight(vec3) {
      const x = vec3.x;
      const y = vec3.y;
      const z = vec3.z;
      const a = 6378137;
      const b = 6356752314245e-6;
      const a2 = a * a;
      const b2 = b * b;
      const e2 = (a2 - b2) / a2;
      const ep2 = (a2 - b2) / b2;
      const p = Math.hypot(x, y);
      if (p === 0 && z === 0) {
        return Math.sqrt(x * x + y * y + z * z) - a;
      }
      const theta = Math.atan2(z * a, p * b);
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      const lat = Math.atan2(z + ep2 * b * sinTheta * sinTheta * sinTheta, p - e2 * a * cosTheta * cosTheta * cosTheta);
      const sinLat = Math.sin(lat);
      const cosLat = Math.cos(lat);
      const N = a / Math.sqrt(1 - e2 * sinLat * sinLat);
      if (Math.abs(cosLat) > 1e-12) {
        return p / cosLat - N;
      } else {
        return z / Math.sign(sinLat) - N * (1 - e2);
      }
    }
    const cameraHeight = ref(0);
    const lineRepeat = ref(2e3);
    const lineWidth = ref(100);
    const lineSpeed = ref(1);
    const lineOpacity = ref(1);
    const map5000to1e7_to1to1000 = createInterpolator(5e3, 1e7, 1, 1e3);
    const map5000to1e7_to4000to1 = createInterpolator(5e3, 1e7, 1e-3, 1);
    watch(cameraHeight, (val) => {
      lineRepeat.value = 2e3 / map5000to1e7_to1to1000(val);
      lineWidth.value = 100 * map5000to1e7_to1to1000(val);
      lineSpeed.value = map5000to1e7_to4000to1(val);
      lineOpacity.value = (val - 1e5) / (1e6 - 1e5) * 0.5;
    });
    const speedFactor = ref(1);
    const weiXingPosition = ref({
      lon: orbitCenterLon,
      lat: orbitLat,
      height: orbitHeight
    });
    function animateWeiXing() {
      const now = performance.now();
      const t = now / 1e3 * speedFactor.value;
      const theta = t % period / period * 2 * Math.PI;
      weiXingPosition.value.lon = (orbitCenterLon + theta * 180 / Math.PI) % 360;
      weiXingPosition.value.lat = orbitLat + 5 * Math.cos(theta);
      weiXingPosition.value.height = orbitHeight;
    }
    const onLoop = () => {
      animateWeiXing();
      if (cameraRef.value) {
        cameraHeight.value = vec32ecefHeight(cameraRef.value?.getWorldPosition(new Vector3()));
      }
    };
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
        // [number, number, number]
      },
      background: "/plugins/earthSample/image/menuA/bg-img.png"
    });
    const cameraPosition = ref({
      heading: 90,
      pitch: -60,
      distance: 6e6,
      longitude: 117.85013382539205,
      latitude: 38.95151356092132
    });
    const targetPosition = ref({
      heading: 90,
      pitch: 45,
      distance: 200
    });
    const roadPoints = [
      { lon: 117.85481967875631, lat: 38.95025551631983 },
      { lon: 117.85566616248491, lat: 38.95427209924625 },
      { lon: 117.85712202478027, lat: 38.95970065499051 },
      { lon: 118.10293300958989, lat: 38.92203696242356 },
      { lon: 118.21571040844162, lat: 38.8584869570214 },
      { lon: 118.56457646308445, lat: 38.792815766352845 },
      { lon: 119.52790645782477, lat: 38.717044062084426 },
      { lon: 120.65902562748857, lat: 38.60702467836941 },
      { lon: 120.79461456776448, lat: 38.58622713855249 },
      { lon: 120.92076119840306, lat: 38.52106665879057 },
      { lon: 121.9906916889725, lat: 38.18314251246517 },
      { lon: 124.14446035378819, lat: 37.44557549519065 },
      { lon: 125.9802772978905, lat: 37.39012819157668 },
      { lon: 126.42446686403741, lat: 37.35004753338622 },
      { lon: 126.48154639818023, lat: 37.36107410768207 },
      { lon: 126.56124848326965, lat: 37.40711309766567 },
      { lon: 126.57255884697423, lat: 37.421008747816884 },
      { lon: 126.581932075672, lat: 37.42778825439147 },
      { lon: 126.59275992012022, lat: 37.42831387228446 },
      { lon: 126.60078120441494, lat: 37.42464694776248 }
    ];
    const curve = new CurvePath();
    for (let i = 0; i < roadPoints.length - 1; i++) {
      const start = roadPoints[i];
      const end = roadPoints[i + 1];
      curve.add(new LineCurve(new Vector2(start.lon, start.lat), new Vector2(end.lon, end.lat)));
    }
    const road1 = curve.getSpacedPoints(1e3).map((point) => ({
      lon: point.x,
      lat: point.y,
      height: 20
    }));
    const focusTarget = ref(false);
    const initialCameraPosition = ref({
      heading: 90,
      pitch: -60,
      distance: 6e6,
      longitude: 117.85013382539205,
      latitude: 38.95151356092132
    });
    function focusOnSatellite() {
      cameraPosition.value = {
        heading: 0,
        pitch: -45,
        distance: 1e5,
        longitude: weiXingPosition.value.lon,
        latitude: weiXingPosition.value.lat
      };
      focusTarget.value = true;
    }
    function focusOnShip1() {
      cameraPosition.value = {
        heading: 0,
        pitch: -45,
        distance: 500,
        longitude: ship1Position.value.lon,
        latitude: ship1Position.value.lat
      };
      focusTarget.value = false;
    }
    function focusOnShip2() {
      cameraPosition.value = {
        heading: 0,
        pitch: -45,
        distance: 500,
        longitude: ship2Position.value.lon,
        latitude: ship2Position.value.lat
      };
      focusTarget.value = false;
    }
    function resetCamera() {
      cameraPosition.value = { ...initialCameraPosition.value };
      focusTarget.value = false;
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(state, {
          "window-size": "",
          onLoop
        }), {
          default: _withCtx(() => [
            _createElementVNode("TresPerspectiveCamera", {
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0],
              ref_key: "cameraRef",
              ref: cameraRef
            }, null, 512),
            _createVNode(_unref(T_)),
            _createVNode(_unref(Gy), {
              position: cameraPosition.value,
              "onUpdate:position": _cache[0] || (_cache[0] = ($event) => cameraPosition.value = $event),
              targetPosition: targetPosition.value,
              "onUpdate:targetPosition": _cache[1] || (_cache[1] = ($event) => targetPosition.value = $event),
              target: focusTarget.value ? weiXingPosition.value : null,
              "min-distance": 1
            }, null, 8, ["position", "targetPosition", "target"]),
            _createVNode(_unref(Hy), { sceneConfig: sceneConfig.value }, null, 8, ["sceneConfig"]),
            _createVNode(_sfc_main$1, { layer: "img" }),
            _createVNode(_unref(_a), { point: ship1Position.value }, {
              default: _withCtx(() => [
                _createVNode(_unref(ly), {
                  rotate: -12,
                  "scale-x": 0.9
                }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(By), {
                      url: "/plugins/geokit/case-real-3/model/chuan.glb",
                      draco: ""
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["point"]),
            _createVNode(_unref(_a), { point: ship2Position.value }, {
              default: _withCtx(() => [
                _createVNode(_unref(ly), {
                  rotate: -12,
                  "scale-x": 0.9
                }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(By), {
                      url: "/plugins/geokit/case-real-3/model/chuan.glb",
                      draco: ""
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["point"]),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(sz), { path: "/plugins/geokit/case-real-3/image/road-texture.png" }, {
                  default: _withCtx(({ state: state2 }) => [
                    _createVNode(_unref(cy), {
                      texture: state2,
                      wrapT: _unref(RepeatWrapping),
                      wrapS: _unref(RepeatWrapping)
                    }, null, 8, ["texture", "wrapT", "wrapS"]),
                    _unref(road1).length ? (_openBlock(), _createBlock(_unref($d), {
                      key: 0,
                      speed: lineSpeed.value
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ol), {
                          repeat: [lineRepeat.value, 1],
                          map: state2,
                          duration: 4,
                          points: _unref(road1),
                          width: lineWidth.value,
                          color: "#fff",
                          renderOrder: 500
                        }, null, 8, ["repeat", "map", "points", "width"])
                      ]),
                      _: 2
                    }, 1032, ["speed"])) : _createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })),
            _unref(road1).length ? (_openBlock(), _createBlock(_unref(ol), {
              key: 0,
              points: _unref(road1),
              width: lineWidth.value,
              color: "#fff",
              opacity: lineOpacity.value,
              renderOrder: 200
            }, null, 8, ["points", "width", "opacity"])) : _createCommentVNode("", true),
            _createVNode(_unref(_a), { point: weiXingPosition.value }, {
              default: _withCtx(() => [
                _createVNode(_unref(ly), {
                  rotate: -12,
                  "scale-x": 0.9
                }, {
                  default: _withCtx(() => [
                    _createElementVNode("TresGroup", _hoisted_1, [
                      _createVNode(_unref(By), {
                        url: "/plugins/geokit/case-real-3/model/weixing.glb",
                        draco: ""
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["point"]),
            _createVNode(_unref(J_), {
              icon: "/plugins/geokit/case-real-3/icons/satellite.svg",
              size: 16,
              point: weiXingPosition.value,
              onClick: _cache[2] || (_cache[2] = ($event) => focusTarget.value = !focusTarget.value)
            }, null, 8, ["point"]),
            _createVNode(_unref(J_), {
              icon: "/plugins/geokit/case-real-3/icons/ship.svg",
              size: 16,
              point: ship1Position.value
            }, null, 8, ["point"]),
            _createVNode(_unref(J_), {
              icon: "/plugins/geokit/case-real-3/icons/ship.svg",
              size: 16,
              point: ship2Position.value
            }, null, 8, ["point"])
          ]),
          _: 1
        }, 16),
        _createElementVNode("div", { class: "control-panel" }, [
          _createElementVNode("button", {
            onClick: focusOnSatellite,
            class: "focus-btn satellite-btn"
          }, " 聚焦卫星 "),
          _createElementVNode("button", {
            onClick: focusOnShip1,
            class: "focus-btn ship-btn"
          }, " 聚焦船只1 "),
          _createElementVNode("button", {
            onClick: focusOnShip2,
            class: "focus-btn ship-btn"
          }, " 聚焦船只2 "),
          _createElementVNode("button", {
            onClick: resetCamera,
            class: "reset-btn"
          }, " 还原镜头 ")
        ])
      ], 64);
    };
  }
});

const caseReal3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ac10c4d"]]);

export { caseReal3 as default };
//# sourceMappingURL=case-real-3.NDV3ceUY1767105581793.js.map
