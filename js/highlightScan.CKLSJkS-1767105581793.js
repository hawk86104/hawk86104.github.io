import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './earth.vue_vue_type_script_setup_true_lang.BwOFi9NL1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');
const THREE = await importShared('three');

const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "highlightScan",
  props: {
    color: { default: "#FFFFFF" },
    opacity: { default: 1 },
    speed: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const tsm = {
      uniforms: {
        uTime: { value: 0 },
        pointNum: { value: new THREE.Vector2(32, 16) },
        uColor: { value: new THREE.Color(props.color) },
        uOpacity: { value: props.opacity }
      },
      transparent: true,
      vertexShader: `
varying vec2 vUv;

void main(){
    vUv=uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
      fragmentShader: `
float PI = acos(-1.0);
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
varying vec2 vUv;

void main(){
    vec2 uv = vUv+ vec2(0.0, uTime);
    float current = abs(sin(uv.y * PI));
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = mix(1.0, 0.0, current);
    gl_FragColor.a = gl_FragColor.a * uOpacity;
}`
    };
    watch(
      () => [props.color, props.opacity],
      ([color, opacity]) => {
        tsm.uniforms.uColor.value = new THREE.Color(color);
        tsm.uniforms.uOpacity.value = opacity;
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      tsm.uniforms.uTime.value += delta * 0.1 * props.speed;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", null, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresSphereGeometry", { args: [1, 32, 32] }, null, -1)),
        _createElementVNode$1("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsm)), null, 16)
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "highlightScan",
  setup(__props) {
    const configState = reactive({
      color: "#9affea",
      opacity: 0.58,
      speed: 4.8,
      scale: 1.1
    });
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "opacity", { label: "透明度", min: 0, max: 1, step: 0.01 });
    paneControl.addBinding(configState, "speed", { label: "速度", min: 0.1, max: 5, step: 0.1 });
    paneControl.addBinding(configState, "scale", { label: "大小", min: 1.01, max: 2, step: 0.01 });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#201919",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [3, 3, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 3 }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$2)
            ]),
            _: 1
          })),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(configState)), null, 16)
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=highlightScan.CKLSJkS-1767105581793.js.map
