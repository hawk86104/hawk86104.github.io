import { importShared, nz, Fs, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { EffectComposer, RenderPass, GodRaysEffect, EffectPass } from './index.s6u766IF1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,withCtx:_withCtx$1,createVNode:_createVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1$1 = ["map"];
const _hoisted_2 = ["envMap"];
const {ref: ref$1,watch: watch$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "screen",
  async setup(__props) {
    let __temp, __restore;
    const texture = ref$1();
    texture.value = ([__temp, __restore] = _withAsyncContext(() => nz("./plugins/visualArts/video/vlg.mp4", { loop: true })), __temp = await __temp, __restore(), __temp);
    texture.value.colorSpace = THREE$1.SRGBColorSpace;
    const cubeCameraRef = ref$1();
    const envMap = ref$1();
    watch$1(cubeCameraRef, (value) => {
      envMap.value = value.texture;
    });
    const tmSceen = ref$1();
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "tmSceen",
          ref: tmSceen,
          position: [0, 0, -16]
        }, [
          _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [16, 10] }, null, -1)),
          _createElementVNode$1("TresMeshBasicMaterial", { map: texture.value }, null, 8, _hoisted_1$1),
          _cache[1] || (_cache[1] = _createElementVNode$1("TresMesh", {
            scale: [16.05, 10.05, 1],
            position: [0, 0, -0.01]
          }, [
            _createElementVNode$1("TresPlaneGeometry"),
            _createElementVNode$1("TresMeshBasicMaterial", { color: "black" })
          ], -1))
        ], 512),
        _createVNode$1(_unref$1(_sfc_main$3), {
          ref_key: "cubeCameraRef",
          ref: cubeCameraRef,
          position: [-3, -1, -5],
          resolution: 256
        }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("TresMesh", null, [
              _cache[2] || (_cache[2] = _createElementVNode$1("TresSphereGeometry", { args: [2, 32, 32] }, null, -1)),
              _createElementVNode$1("TresMeshStandardMaterial", {
                metalness: 1,
                roughness: 0.1,
                envMap: envMap.value
              }, null, 8, _hoisted_2)
            ])
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {watchEffect,toRaw} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "effectComposer",
  props: {
    screen: {}
  },
  setup(__props) {
    const props = __props;
    const { camera, renderer, scene, sizes } = Fs();
    let effectComposer = null;
    let effectPass = null;
    const effects = [];
    const init = (scene2, camera2, renderer2, width, height) => {
      effectComposer = new EffectComposer(renderer2, {
        frameBufferType: THREE.HalfFloatType,
        multisampling: 8
      });
      const renderPass = new RenderPass(scene2, camera2);
      effectComposer.addPass(renderPass);
    };
    const addGodRaysEffect = (camera2) => {
      const sunMaterial = new THREE.MeshBasicMaterial({
        color: 16768426,
        transparent: true,
        fog: false
      });
      const sunGeometry = new THREE.SphereGeometry(0.75, 32, 32);
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      sun.frustumCulled = false;
      sun.matrixAutoUpdate = false;
      const godRaysEffect = new GodRaysEffect(camera2, toRaw(props.screen), {
        blur: true,
        decay: 0.9,
        exposure: 0.34
      });
      effects.push(godRaysEffect);
    };
    const makeEffectPass = (camera2) => {
      effectPass = new EffectPass(camera2, ...effects);
      effectComposer.addPass(effectPass);
    };
    watchEffect(() => {
      if (sizes.width.value) {
        const camerav = camera.value;
        init(scene.value, camerav, renderer, sizes.width.value, sizes.height.value);
        addGodRaysEffect(camerav);
        makeEffectPass(camerav);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const {reactive,ref,watch,nextTick} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "volumetricLightGodray",
  setup(__props) {
    const state = {
      clearColor: "#050505",
      antialias: false,
      renderMode: "manual",
      windowSize: true
    };
    const controlsState = reactive({
      enableDamping: true
    });
    const screenRef = ref(null);
    const tmSceen = ref(null);
    watch(
      () => screenRef,
      (newValue) => {
        nextTick(() => {
          if (newValue && newValue.value.$refs.tmSceen !== void 0) {
            tmSceen.value = newValue.value.$refs.tmSceen;
          }
        });
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _normalizeProps(_guardReactiveProps(state)), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 0, 30],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, {
                ref_key: "screenRef",
                ref: screenRef
              }, null, 512)
            ]),
            _: 1
          })),
          _createElementVNode("TresMesh", {
            position: [0, -5.02, 0],
            receiveShadow: "",
            rotation: [-Math.PI / 2, 0, 0]
          }, [
            _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [50, 50] }, null, -1)),
            _createVNode(_unref(_sfc_main$4), {
              blur: [300, 50],
              resolution: 1024,
              mixBlur: 1,
              mixStrength: 100,
              roughness: 1,
              depthScale: 1.2,
              minDepthThreshold: 0.4,
              maxDepthThreshold: 1.4,
              color: "#202020",
              metalness: 0.8
            })
          ], 8, _hoisted_1),
          tmSceen.value ? (_openBlock(), _createBlock(_sfc_main$1, {
            key: 0,
            screen: tmSceen.value
          }, null, 8, ["screen"])) : _createCommentVNode("", true)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=volumetricLightGodray.GinrUC0b1767105581793.js.map
