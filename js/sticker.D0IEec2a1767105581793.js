import { importShared, Fs, _l, sz, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$4 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { MeshTransmissionMaterial, MeshDiscardMaterial, useFBO } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = ["side"];
const {shallowRef,nextTick,onMounted} = await importShared('vue');
const {BackSide,DoubleSide: DoubleSide$1} = await importShared('three');
const backsideThickness = 0;
const thickness = 0;
const backsideEnvMapIntensity = 0;
const fboResolution = 1024;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "stickerTransmisionMaterial",
  setup(__props, { expose: __expose }) {
    const MeshTransmissionMaterialClass = shallowRef();
    const { extend, scene, renderer, camera } = Fs();
    const parent = shallowRef();
    extend({ MeshTransmissionMaterial });
    function findMeshByMaterialUuid(scene2, materialUuid) {
      let foundMesh;
      scene2.traverse((object) => {
        if (object.isMesh && object.material && object.material.uuid === materialUuid) {
          foundMesh = object;
        }
      });
      return foundMesh;
    }
    const discardMaterial = new MeshDiscardMaterial();
    const { onBeforeRender } = _l();
    const fboBack = useFBO({ width: fboResolution, height: fboResolution, isLoop: false });
    const fboMain = useFBO({ width: fboResolution, height: fboResolution, isLoop: false });
    onMounted(async () => {
      await nextTick();
      MeshTransmissionMaterialClass.value.buffer = fboMain.value.texture;
      parent.value = findMeshByMaterialUuid(scene.value, MeshTransmissionMaterialClass.value.uuid);
    });
    let oldBg;
    let oldEnvMapIntensity;
    let oldTone;
    let oldSide;
    onBeforeRender(({ elapsed }) => {
      MeshTransmissionMaterialClass.value.time = elapsed;
      if (MeshTransmissionMaterialClass.value.buffer === fboMain.value.texture) {
        if (parent.value) {
          oldTone = renderer.toneMapping;
          oldBg = scene.value.background;
          oldEnvMapIntensity = MeshTransmissionMaterialClass.value.envMapIntensity;
          oldSide = parent.value.material.side;
          parent.value.material = discardMaterial;
          {
            renderer.setRenderTarget(fboBack.value);
            renderer.render(scene.value, camera.value);
            parent.value.material = MeshTransmissionMaterialClass.value;
            parent.value.material.thickness = backsideThickness;
            parent.value.material.buffer = fboBack.value.texture;
            parent.value.material.side = BackSide;
            parent.value.material.envMapIntensity = backsideEnvMapIntensity;
          }
          renderer.setRenderTarget(fboMain.value);
          renderer.render(scene.value, camera.value);
          parent.value.material.buffer = fboMain.value.texture;
          parent.value.material = MeshTransmissionMaterialClass.value;
          parent.value.material.thickness = thickness;
          parent.value.material.side = oldSide;
          parent.value.material.envMapIntensity = oldEnvMapIntensity;
          scene.value.background = oldBg;
          renderer.setRenderTarget(null);
          renderer.toneMapping = oldTone;
        }
      }
    });
    __expose({ root: MeshTransmissionMaterialClass, constructor: MeshTransmissionMaterial });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$2("TresMeshTransmissionMaterial", {
        ref_key: "MeshTransmissionMaterialClass",
        ref: MeshTransmissionMaterialClass,
        transmission: 0,
        _transmission: 1,
        "anisotropic-blur": 0.1,
        thickness: 0,
        side: _unref$3(DoubleSide$1)
      }, null, 8, _hoisted_1$2);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["geometry", "rotation"];
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "stickerModel",
  async setup(__props) {
    let __temp, __restore;
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF("./plugins/eCommerce/model/pack.glb")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$1("TresMesh", {
        geometry: _unref$2(nodes).Object_4.geometry,
        rotation: [Math.PI / 2, 0, 0],
        "cast-shadow": true,
        "receive-shadow": true
      }, [
        _createVNode$1(_sfc_main$3)
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1 = ["map", "side"];
const {DoubleSide} = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "stickerLogo",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(sz), { path: "./logo.png" }, {
        default: _withCtx$1(({ state: texture }) => [
          _createElementVNode$1("TresMesh", null, [
            _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", null, null, -1)),
            _createElementVNode$1("TresMeshPhysicalMaterial", {
              map: texture,
              transparent: true,
              clearcoat: 1,
              roughness: 1,
              metalness: 0.8,
              side: _unref$1(DoubleSide)
            }, null, 8, _hoisted_1)
          ])
        ]),
        _: 1
      });
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "sticker",
  setup(__props) {
    const tcConfig = {
      clearColor: "#333333",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8,
      shadows: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$4)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 0, 6],
              fov: 45,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(tk), {
                  files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                  path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/",
                  background: false
                }, null, 8, ["path"])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=sticker.D0IEec2a1767105581793.js.map
