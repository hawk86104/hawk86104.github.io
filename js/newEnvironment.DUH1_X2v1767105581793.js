import { importShared, Kk, yk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$3, _sfc_main$1 as _sfc_main$4, _sfc_main$2 as _sfc_main$5 } from './displace.vue_vue_type_script_setup_true_lang.DClcUU_f1767105581793.js';
import { _sfc_main as _sfc_main$1, _sfc_main$1 as _sfc_main$2 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,Suspense:_Suspense,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { rotation: [0, 0.5, 0] };
const _hoisted_3 = { scale: [100, 100, 100] };
const {ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "newEnvironment",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    const lightFormerPositions = [2, 0, 2, 0, 2, 0, 2, 0];
    const group = ref(null);
    const onLoop = ({ delta }) => {
      if (group.value) {
        (group.value.position.z += delta * 10) > 20 && (group.value.position.z = -60);
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(tcConfig, { onLoop }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", {
            position: [3, 2, 1],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [10, 10, 10] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: "#ffffff",
              metalness: 1,
              roughness: 0.14
            })
          ], -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresMesh", {
            position: [0, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(_sfc_main$1), {
                blur: 1,
                background: "",
                far: 1e4,
                preset: "city"
              }, {
                default: _withCtx(() => [
                  (_openBlock(), _createElementBlock("TresGroup", _hoisted_1, [
                    _createVNode(_unref(_sfc_main$2), {
                      intensity: 0.75,
                      "rotation-x": Math.PI / 2,
                      position: [0, 5, -9],
                      scale: [10, 10, 1]
                    }, null, 8, ["rotation-x"]),
                    _createVNode(_unref(_sfc_main$2), {
                      intensity: 4,
                      "rotation-y": Math.PI / 2,
                      position: [-5, 1, -1],
                      scale: [20, 0.1, 1]
                    }, null, 8, ["rotation-y"]),
                    _createVNode(_unref(_sfc_main$2), {
                      "rotation-y": Math.PI / 2,
                      position: [-5, -1, -1],
                      scale: [20, 0.5, 1]
                    }, null, 8, ["rotation-y"]),
                    _createVNode(_unref(_sfc_main$2), {
                      "rotation-y": -Math.PI / 2,
                      position: [10, 1, 0],
                      scale: [20, 11, 1]
                    }, null, 8, ["rotation-y"]),
                    _createVNode(_unref(yk), {
                      speed: 5,
                      floatFactor: 2,
                      rotationFactor: 2
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(_sfc_main$2), {
                          form: "ring",
                          color: "red",
                          intensity: 1,
                          scale: 10,
                          position: [-15, 4, -18]
                        })
                      ]),
                      _: 1
                    }),
                    _createElementVNode("TresGroup", _hoisted_2, [
                      _createElementVNode("TresGroup", {
                        ref_key: "group",
                        ref: group
                      }, [
                        (_openBlock(), _createElementBlock(_Fragment, null, _renderList(lightFormerPositions, (i, x) => {
                          return _createVNode(_unref(_sfc_main$2), {
                            key: i,
                            form: "circle",
                            intensity: 2,
                            rotation: [Math.PI / 2, 0, 0],
                            position: [x, 4, i * 4],
                            scale: [3, 1, 1]
                          }, null, 8, ["rotation", "position"]);
                        }), 64))
                      ], 512)
                    ]),
                    _createElementVNode("TresMesh", _hoisted_3, [
                      _cache[0] || (_cache[0] = _createElementVNode("TresSphereGeometry", { args: [1, 64, 64] }, null, -1)),
                      _createVNode(_unref(_sfc_main$3), {
                        side: THREE.BackSide
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_unref(_sfc_main$4), {
                            color: "#444",
                            alpha: 1,
                            mode: "normal"
                          }),
                          _createVNode(_unref(_sfc_main$5), {
                            colorA: "blue",
                            colorB: "black",
                            alpha: 0.5,
                            mode: "normal",
                            near: 0,
                            far: 300,
                            origin: new THREE.Vector3(100, 100, 100)
                          }, null, 8, ["origin"])
                        ]),
                        _: 1
                      }, 8, ["side"])
                    ])
                  ])) 
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=newEnvironment.DUH1_X2v1767105581793.js.map
