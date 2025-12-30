import { importShared, Kk, yl, Tz } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './skyBoxAmesh.vue_vue_type_script_setup_true_lang.Cd3eKmZW1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$1 } from './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withDirectives:_withDirectives,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const THREE = await importShared('three');
const {shallowRef,watchEffect,reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "whiteFloor",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      shadows: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    const configState = reactive({
      size: [20, 20],
      color: "#cbcb96",
      shadowColor: "#b8b59e",
      receiveShadow: true,
      edge: 0.35
    });
    const paneControl = new Pane({
      title: "地板参数",
      expanded: true
    });
    paneControl.addBinding(configState, "edge", {
      label: "边缘模糊",
      min: 0.2,
      max: 0.36,
      step: 0.01
    });
    paneControl.addBinding(configState, "color", { label: "地板颜色" });
    paneControl.addBinding(configState, "shadowColor", { label: "阴影颜色" });
    paneControl.addBinding(configState, "receiveShadow", { label: "显示阴影" });
    const TDirectionalLight = shallowRef();
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(1024, 1024);
        TDirectionalLight.value.shadow.camera.near = 0.1;
        TDirectionalLight.value.shadow.camera.far = 5e3;
        TDirectionalLight.value.shadow.radius = 10;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 10 }, null, -1)),
          _withDirectives(_createElementVNode("TresDirectionalLight", {
            ref_key: "TDirectionalLight",
            ref: TDirectionalLight,
            position: [0, 10, 10],
            intensity: 1,
            color: "#ffffff",
            "cast-shadow": ""
          }, null, 512), [
            [_unref(yl)]
          ]),
          _createVNode(_unref(Tz), {
            args: [1, 1, 1],
            color: "orange",
            position: [3, 2, 1],
            "cast-shadow": ""
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", {
            position: [0, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2, {
                texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/workshop_blur.jpg"
              }, null, 8, ["texture"])
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
//# sourceMappingURL=whiteFloor.DeIi5G_I1767105581793.js.map
