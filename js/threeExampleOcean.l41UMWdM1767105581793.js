import { importShared, _l, Kk, qz } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Water } from './Water.CBGqZRZ_1767105581793.js';

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const {RepeatWrapping,Vector3,PlaneGeometry} = await importShared('three');
const {watchEffect} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "threeExampleOcean",
  props: {
    size: { default: 1 },
    distortionScale: { default: 3.7 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const waterGeometry = new PlaneGeometry(1e3, 1e3);
    const waternormals = ([__temp, __restore] = _withAsyncContext(() => useTexture("./plugins/water/images/waternormals.jpg")), __temp = await __temp, __restore(), __temp);
    waternormals.wrapS = waternormals.wrapT = RepeatWrapping;
    const tsWater = new Water(
      waterGeometry,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waternormals,
        sunDirection: new Vector3(),
        sunColor: 16777215,
        waterColor: 7695,
        distortionScale: 3.7
      }
    );
    watchEffect(() => {
      if (props.size) {
        tsWater.material.uniforms.size.value = props.size;
      }
      if (props.distortionScale) {
        tsWater.material.uniforms.distortionScale.value = props.distortionScale;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      tsWater.material.uniforms.time.value += 1 / 60;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("primitive", {
        object: _unref$1(tsWater),
        "rotation-x": -Math.PI / 2
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "threeExampleOcean",
  setup(__props) {
    const gl = {
      clearColor: "#222",
      shadows: true,
      alpha: false
    };
    const teoState = reactive({
      size: 1,
      distortionScale: 3.7
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(teoState, "distortionScale", {
      label: "水变化尺度",
      min: 0,
      max: 8,
      step: 0.1
    });
    paneControl.addBinding(teoState, "size", {
      label: "水精细度",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    const sktState = reactive({
      elevation: 2,
      azimuth: 180
    });
    paneControl.addBinding(sktState, "elevation", {
      label: "太阳地平线高",
      min: 0.1,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(sktState, "azimuth", {
      label: "太阳地方位角",
      min: 0,
      max: 360,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [30, 30, 100] }, null, -1)),
          _createVNode(_unref(Kk)),
          _createVNode(_unref(qz), {
            turbidity: 10,
            rayleigh: 2,
            mieDirectionalG: 0.8,
            elevation: sktState.elevation,
            distance: 1e4,
            azimuth: sktState.azimuth
          }, null, 8, ["elevation", "azimuth"]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(teoState)), null, 16)
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
//# sourceMappingURL=threeExampleOcean.l41UMWdM1767105581793.js.map
