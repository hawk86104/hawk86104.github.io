import { importShared, NA, yk, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main$5 as _sfc_main$4 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1$1 = ["rotation"];
const _hoisted_2 = ["geometry", "material"];
const _hoisted_3 = ["geometry", "material"];
const _hoisted_4 = ["geometry", "material"];
const _hoisted_5 = ["geometry", "material"];
const _hoisted_6 = ["geometry", "material"];
const _hoisted_7 = ["geometry", "material"];
const _hoisted_8 = ["geometry", "material"];
const _hoisted_9 = ["geometry", "material"];
const _hoisted_10 = ["geometry", "material"];
const _hoisted_11 = ["geometry", "material"];
const _hoisted_12 = ["geometry", "material"];
const _hoisted_13 = ["geometry", "material"];
const _hoisted_14 = ["geometry"];
const _hoisted_15 = ["geometry", "material"];
const _hoisted_16 = ["geometry", "material"];
const _hoisted_17 = ["geometry", "material"];
const _hoisted_18 = ["geometry", "material"];
const {toRaw} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "roomMesh",
  setup(__props) {
    const { state, nodes, materials } = NA("./plugins/visualArts/model/room-transformed.glb", { draco: true, decoderPath: "./draco/" });
    return (_ctx, _cache) => {
      return _unref$2(state) ? (_openBlock$2(), _createElementBlock$1("TresGroup", {
        key: 0,
        rotation: [-Math.PI / 2, 0, 0]
      }, [
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: toRaw(_unref$2(nodes).Object_2.geometry),
          material: toRaw(_unref$2(materials)).Material
        }, null, 8, _hoisted_2),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_3.geometry,
          material: _unref$2(materials)[`Material.002`]
        }, null, 8, _hoisted_3),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_4.geometry,
          material: _unref$2(materials)[`Material.003`]
        }, null, 8, _hoisted_4),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_6.geometry,
          material: _unref$2(materials).krzeslo_1
        }, null, 8, _hoisted_5),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_7.geometry,
          material: _unref$2(materials).krzeslo_okno
        }, null, 8, _hoisted_6),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_8.geometry,
          material: _unref$2(materials).krzeslo_prawe
        }, null, 8, _hoisted_7),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_9.geometry,
          material: _unref$2(materials).krzeslo_srodek
        }, null, 8, _hoisted_8),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_10.geometry,
          material: _unref$2(materials).podloga
        }, null, 8, _hoisted_9),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_11.geometry,
          material: _unref$2(materials).sciana_okno
        }, null, 8, _hoisted_10),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_12.geometry,
          material: _unref$2(materials)[`stolik.001`]
        }, null, 8, _hoisted_11),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_16.geometry,
          material: _unref$2(materials)[`Material.006`]
        }, null, 8, _hoisted_12),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_5.geometry,
          material: _unref$2(materials)[`Material.004`]
        }, null, 8, _hoisted_13),
        _createElementVNode$2("TresMesh", {
          geometry: _unref$2(nodes).Object_13.geometry
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$2("TresMeshStandardMaterial", {
            transparent: "",
            opacity: 0.5
          }, null, -1)
        ])], 8, _hoisted_14),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_14.geometry,
          material: _unref$2(materials)[`Material.002`]
        }, null, 8, _hoisted_15),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_15.geometry,
          material: _unref$2(materials)[`Material.005`]
        }, null, 8, _hoisted_16),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_17.geometry,
          material: _unref$2(materials).mata
        }, null, 8, _hoisted_17),
        _createElementVNode$2("TresMesh", {
          castShadow: "",
          receiveShadow: "",
          geometry: _unref$2(nodes).Object_18.geometry,
          material: _unref$2(materials).stolik
        }, null, 8, _hoisted_18)
      ], 8, _hoisted_1$1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "sphere",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(yk), {
        floatFactor: 15,
        speed: 2
      }, {
        default: _withCtx$1(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresMesh", {
            castShadow: "",
            position: [0, 5, 0]
          }, [
            _createElementVNode$1("TresSphereGeometry"),
            _createElementVNode$1("TresMeshBasicMaterial", {
              color: "hotpink",
              roughness: 1
            })
          ], -1)
        ])]),
        _: 1
      });
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,Suspense:_Suspense,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["shadow-mapSize"];
const THREE = await importShared('three');

const {ref,watch,reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "roomup",
  setup(__props) {
    const dLight = ref(null);
    watch(dLight, (newVal) => {
      if (newVal) {
        newVal.shadow.camera = new THREE.OrthographicCamera(-8.5, 8.5, 8.5, -8.5, 0.1, 20);
      }
    });
    const tcConfig = {
      clearColor: "#d0d0d0",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      shadows: true
    };
    const pcssConfig = reactive({
      enabled: true,
      size: 25,
      focus: 0,
      samples: 10
    });
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(pcssConfig, "enabled", {
      label: "开启PCSS"
    });
    paneControl.addBinding(pcssConfig, "size", {
      label: "size",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(pcssConfig, "focus", {
      label: "focus",
      min: 0,
      max: 2,
      step: 0.1
    });
    paneControl.addBinding(pcssConfig, "samples", {
      label: "samples",
      min: 1,
      max: 20,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$3)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 2, 10],
              fov: 45,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _createVNode(_unref(yk), null, {
              default: _withCtx(() => [
                _createElementVNode("TresDirectionalLight", {
                  ref_key: "dLight",
                  ref: dLight,
                  position: [5, 5, -8],
                  castShadow: "",
                  intensity: 5,
                  "shadow-mapSize": new THREE.Vector2(2048, 2048),
                  "shadow-bias": -1e-3
                }, null, 8, _hoisted_1)
              ]),
              _: 1
            }),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2, {
                  scale: 0.5,
                  position: [0, -1, 0]
                })
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$1, { position: [0, 5, -8] }),
            _createVNode(_sfc_main$1, {
              position: [2, 4, -8],
              scale: 0.9
            }),
            _createVNode(_sfc_main$1, {
              position: [-2, 2, -8],
              scale: 0.8
            }),
            _createVNode(_unref(_sfc_main$4), _normalizeProps(_guardReactiveProps(pcssConfig)), null, 16)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=roomup.B7HDbZBQ1767105581793.js.map
