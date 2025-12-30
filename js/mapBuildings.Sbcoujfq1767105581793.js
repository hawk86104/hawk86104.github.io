import { importShared } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$c, _sfc_main$1 as _sfc_main$d } from './tileMapBuildingsMesh.vue_vue_type_script_setup_true_lang.BAhJ7QKa1767105581793.js';
import './tilesCom.vue_vue_type_script_setup_true_lang.F-6N_4461767105581793.js';
import './obliquePhoto.vue_vue_type_script_setup_true_lang.BUTwkNtD1767105581793.js';
import './mapBoxShow.vue_vue_type_script_setup_true_lang.Bn2M8Kh51767105581793.js';
import './informationDiv.BpVz_Xf81767105581793.js';
import './utils.uRDybWT71767105581793.js';
import { lonLatToUtm } from './TerrainMeshProvider.DWdowYX-1767105581793.js';
import { _sfc_main$1 as _sfc_main$2, _sfc_main as _sfc_main$3, _sfc_main$2 as _sfc_main$4 } from './radraB.vue_vue_type_script_setup_true_lang.CkKBJ52L1767105581793.js';
import { _sfc_main$6 as _sfc_main$b } from './coneAnchorMeshB.vue_vue_type_script_setup_true_lang.BRSVhWtw1767105581793.js';
import { _sfc_main as _sfc_main$8 } from './precipitation.vue_vue_type_script_setup_true_lang.DHN0dZRK1767105581793.js';
import { _sfc_main as _sfc_main$9 } from './cloudMesh.vue_vue_type_script_setup_true_lang.t0Z5pxFM1767105581793.js';
import { _sfc_main as _sfc_main$5 } from './fireA.vue_vue_type_script_setup_true_lang.K7p2c56E1767105581793.js';
import { _sfc_main as _sfc_main$6 } from './fireB.vue_vue_type_script_setup_true_lang.BvbRi80N1767105581793.js';
import { _sfc_main as _sfc_main$7 } from './smokeA.vue_vue_type_script_setup_true_lang.DU_w_c7I1767105581793.js';
import { _sfc_main as _sfc_main$a } from './rippleMesh.vue_vue_type_script_setup_true_lang.BMAAJsoC1767105581793.js';
import './regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js';
import './fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js';
import './utils.-sNu4bkd1767105581793.js';
import { raycasterEvent } from './raycasterEvent.Dgj-Z7aT1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,Suspense:_Suspense$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1,Fragment:_Fragment$1,createElementBlock:_createElementBlock$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "mapBuildingsMoreMeshes",
  props: {
    cPosition: {}
  },
  setup(__props) {
    const p1 = lonLatToUtm(113.9456, 22.5385, 50);
    const p2 = lonLatToUtm(113.9498, 22.5364, 50);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createVNode$1(_unref$1(_sfc_main$2), {
          color: "#00c0ff",
          radius: 300,
          size: 300,
          position: [_ctx.cPosition[0], 8, -_ctx.cPosition[1]]
        }, null, 8, ["position"]),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$3), {
              position: [_ctx.cPosition[0], 8, -_ctx.cPosition[1]],
              scale: 0.13,
              img: "./plugins/digitalCity/image/znsba.png",
              foremost: false
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        _createVNode$1(_unref$1(_sfc_main$4), {
          position: [_ctx.cPosition[0] + 700, 10, -_ctx.cPosition[1] + 300],
          color: "#ffff00",
          height: 0.5,
          "scale-y": 100,
          maxRadius: 200
        }, null, 8, ["position"]),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$3), {
              position: [_ctx.cPosition[0] + 700, 10, -_ctx.cPosition[1] + 300],
              scale: 200,
              img: "./plugins/digitalCity/image/znsb-err.png",
              sizeAttenuation: true,
              foremost: true
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$5), {
              fireScale: 80,
              magnitude: 1.3,
              lacunarity: 2,
              gain: 1,
              position: [_ctx.cPosition[0] + 280, 1, -_ctx.cPosition[1] + 120]
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$6), {
              position: [_ctx.cPosition[0] + 388, 6, -_ctx.cPosition[1] + 330]
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$7), {
              position: [_ctx.cPosition[0] + 388, 6, -_ctx.cPosition[1] + 330]
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$8), {
              speed: 12,
              size: 20,
              count: 2e4,
              color: "#fff",
              type: "snow",
              position: [_ctx.cPosition[0], 300, -_ctx.cPosition[1]],
              areaX: 5e3,
              areaY: 600,
              areaZ: 5e3
            }, null, 8, ["position"])
          ]),
          _: 1
        })),
        _createVNode$1(_unref$1(_sfc_main$9), {
          cPosition: [_ctx.cPosition[0], 600, -_ctx.cPosition[1]]
        }, null, 8, ["cPosition"]),
        _createVNode$1(_unref$1(_sfc_main$a), {
          "position-y": 6,
          positionSrc: [{ x: _unref$1(p1)[0], y: -_unref$1(p1)[1] }, { x: _unref$1(p1)[0], y: -_unref$1(p2)[1] }, { x: _unref$1(p2)[0], y: -_unref$1(p2)[1] }, { x: _unref$1(p2)[0], y: -_unref$1(p1)[1] }, { x: _unref$1(p1)[0], y: -_unref$1(p1)[1] }],
          height: 220,
          color: "#00ffdd"
        }, null, 8, ["positionSrc"]),
        (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$b), {
              position: [500, 10, 340],
              radius: 5,
              geoJson: "plugins/digitalCity/geojson/shenzhen2.geojson"
            })
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,shallowRef} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "mapBuildings",
  setup(__props) {
    const buildsPosition = lonLatToUtm(113.942639739199, 22.53171672540276, 50);
    const tileMapBuildingsMeshRef = shallowRef();
    const state = reactive({
      clearColor: "#000000",
      renderMode: "manual",
      alpha: false,
      shadowMapType: THREE.BasicShadowMap,
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.NoToneMapping
    });
    const mapCenter = [buildsPosition[0], buildsPosition[1], 1700];
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1e7 * 10);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
              position: [100, 100, 0],
              intensity: 0.5,
              color: "#ffffff"
            }, null, -1)),
            _createVNode(_unref(_sfc_main$c), {
              position: [_unref(buildsPosition)[0], 1, -_unref(buildsPosition)[1] + 228],
              camera: _unref(camera)
            }, null, 8, ["position", "camera"]),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$d), {
                  ref_key: "tileMapBuildingsMeshRef",
                  ref: tileMapBuildingsMeshRef,
                  bbox: [104.955976, 20.149765, 120.998419, 30.528687],
                  mapCenter,
                  camera: _unref(camera)
                }, null, 8, ["camera"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, { cPosition: _unref(buildsPosition) }, null, 8, ["cPosition"])
              ]),
              _: 1
            })),
            _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [1e4, 10] }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresAxesHelper", { args: [1e5] }, null, -1))
          ]),
          _: 1
        }, 16),
        _createVNode(raycasterEvent, { tileMapRef: tileMapBuildingsMeshRef.value }, null, 8, ["tileMapRef"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=mapBuildings.Sbcoujfq1767105581793.js.map
