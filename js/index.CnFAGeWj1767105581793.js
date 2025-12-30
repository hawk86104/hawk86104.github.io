import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './viewportGizmo.vue_vue_type_script_setup_true_lang.Df9F-KR41767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,ref,shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props) {
    const darkColors = {
      color: 3355443,
      labelColor: 14540253,
      hover: {
        color: 4959364,
        labelColor: 16777215
      }
    };
    const viewportConfig = {
      size: 300,
      lineWidth: 2,
      type: "cube",
      background: {
        color: 4473924,
        hover: { color: 4473924 }
      },
      x: {
        label: "  右  ",
        ...darkColors
      },
      y: {
        label: "上",
        ...darkColors
      },
      z: {
        label: "前",
        ...darkColors
      },
      nx: {
        label: "左",
        ...darkColors
      },
      ny: {
        label: "下",
        ...darkColors
      },
      nz: {
        label: "后",
        ...darkColors
      }
    };
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const sphereRef = ref();
    const sphereRef2 = ref();
    const TDirectionalLight = shallowRef();
    const onLoop = ({ elapsed }) => {
      if (!sphereRef.value) return;
      sphereRef.value.position.y += Math.sin(elapsed) * 0.01;
      sphereRef2.value.position.y += Math.sin(elapsed) * 0.01;
    };
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(1e3, 1e3);
        TDirectionalLight.value.shadow.camera.near = 0.5;
        TDirectionalLight.value.shadow.camera.far = 5e4;
        TDirectionalLight.value.shadow.camera.top = 20;
        TDirectionalLight.value.shadow.camera.right = 20;
        TDirectionalLight.value.shadow.camera.left = -20;
        TDirectionalLight.value.shadow.camera.bottom = -20;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _cache[3] || (_cache[3] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { makeDefault: "" }),
          _cache[4] || (_cache[4] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _createElementVNode("TresMesh", {
            ref_key: "sphereRef",
            ref: sphereRef,
            position: [0, 4, 0],
            "cast-shadow": ""
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresSphereGeometry", { args: [2, 32, 32] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
          ])], 512),
          _createElementVNode("TresMesh", {
            ref_key: "sphereRef2",
            ref: sphereRef2,
            position: [4, 4, 0],
            "cast-shadow": ""
          }, [..._cache[1] || (_cache[1] = [
            _createElementVNode("TresSphereGeometry", { args: [2, 32, 32] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
          ])], 512),
          _createElementVNode("TresMesh", {
            rotation: [-Math.PI / 2, 0, 0],
            "receive-shadow": ""
          }, [..._cache[2] || (_cache[2] = [
            _createElementVNode("TresPlaneGeometry", { args: [20, 20, 20, 20] }, null, -1),
            _createElementVNode("TresMeshToonMaterial", null, null, -1)
          ])], 8, _hoisted_1),
          _createElementVNode("TresDirectionalLight", {
            ref_key: "TDirectionalLight",
            ref: TDirectionalLight,
            position: [10, 8, 4],
            intensity: 1,
            "cast-shadow": ""
          }, null, 512),
          _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
            position: [10, 2, 4],
            intensity: 1,
            "cast-shadow": ""
          }, null, -1)),
          _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", null, null, -1)),
          _createVNode(_unref(_sfc_main$1), _normalizeProps(_guardReactiveProps(viewportConfig)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.CnFAGeWj1767105581793.js.map
