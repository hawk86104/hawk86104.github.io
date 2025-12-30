import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var waveC_default$1="uniform float uTime;\n\nuniform vec3 uPeakColor;\nuniform vec3 uValleyColor;\nuniform float uColorOffset;\nuniform float uColorDamping;\n\nuniform vec2 uSinWaveFrequency;\nuniform float uWaveAmplitude;\nuniform vec2 uSinWaveSpeed;\n\nuniform float uPerlinWaveIterations;\nuniform float uPerlinWaveFrequency;\nuniform float uPerlinWaveAmplitude;\nuniform float uPerlinWaveSpeed;\n\nvarying vec2 vUv;\nvarying float vElevation;\nvarying vec3 vPeakColor;\nvarying vec3 vValleyColor;\n\n# define MAX_ITERATIONS 100.0\n#define M_PI 3.1415926535897932384626433832795\n\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nvec4 permute(vec4 x) {return mod(((x*34.0)+1.0)*x, 289.0);}\n\nfloat cnoise(vec3 P){\n  vec3 Pi0 = floor(P); \n  vec3 Pi1 = Pi0 + vec3(1.0); \n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P); \n  vec3 Pf1 = Pf0 - vec3(1.0); \n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nvoid main()\n{\n  vUv = uv;\n  vPeakColor = uPeakColor;\n  vValleyColor = uValleyColor;\n  \n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n  float elevation =\n    sin(modelPosition.x * uSinWaveFrequency.x + uTime * uSinWaveSpeed.x)\n    * sin(modelPosition.z * uSinWaveFrequency.y + uTime * uSinWaveSpeed.y)\n    * uWaveAmplitude;\n\n  for (float i = 1.; i < MAX_ITERATIONS; i++) {\n    if (i > uPerlinWaveIterations) break;\n    elevation -= abs(cnoise(vec3(\n      modelPosition.x * uPerlinWaveFrequency * i,\n      modelPosition.z * uPerlinWaveFrequency * i,\n      uTime * uPerlinWaveSpeed / i\n    ))) * uPerlinWaveAmplitude / i;\n  }\n\n  modelPosition.y += elevation;\n  vElevation = min(1.0, (elevation + uColorOffset) / uColorDamping);\n\n  vec4 viewPosition = viewMatrix * modelPosition;\n\n  vec4 projectedPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectedPosition;\n}";

var waveC_default="precision mediump float;\n\nvarying vec2 vUv;\nvarying float vElevation;\nvarying vec3 vPeakColor;\nvarying vec3 vValleyColor;\n\nuniform float uTime;\n\nvoid main()\n{\n  gl_FragColor = vec4(mix(vValleyColor, vPeakColor, vElevation), 1.0);\n\n  #include <tonemapping_fragment>\n  #include <colorspace_fragment>\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["side", "vertexShader", "fragmentShader", "wireframe"];
const THREE$1 = await importShared('three');
const {watch} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "waveC",
  props: {
    wireframe: { type: Boolean, default: false },
    peakColor: { default: "#b367ff" },
    valleyColor: { default: "#184650" },
    colorOffset: { default: 0.9 },
    colorDamping: { default: 4.5 },
    sinWaveFrequency: { default: { x: 0.4, y: 0.3 } },
    waveAmplitude: { default: 0.8 },
    sinWaveSpeed: { default: { x: 0.6, y: 1.3 } },
    perlinWaveIterations: { default: 3 },
    perlinWaveFrequency: { default: 0.6 },
    perlinWaveAmplitude: { default: 0.5 },
    perlinWaveSpeed: { default: 0.6 }
  },
  setup(__props) {
    const props = __props;
    const uniforms = {
      uTime: { value: 0 },
      uPeakColor: { value: new THREE$1.Color(props.peakColor) },
      uValleyColor: { value: new THREE$1.Color(props.valleyColor) },
      uColorOffset: { value: props.colorOffset },
      uColorDamping: { value: props.colorDamping },
      uSinWaveFrequency: { value: new THREE$1.Vector2(props.sinWaveFrequency.x, props.sinWaveFrequency.y) },
      uWaveAmplitude: { value: props.waveAmplitude },
      uSinWaveSpeed: { value: new THREE$1.Vector2(props.sinWaveSpeed.x, props.sinWaveSpeed.y) },
      uPerlinWaveIterations: { value: props.perlinWaveIterations },
      uPerlinWaveFrequency: { value: props.perlinWaveFrequency },
      uPerlinWaveAmplitude: { value: props.perlinWaveAmplitude },
      uPerlinWaveSpeed: { value: props.perlinWaveSpeed }
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      uniforms.uTime.value = elapsed;
    });
    watch(
      () => props,
      () => {
        uniforms.uPeakColor.value.setStyle(props.peakColor);
        uniforms.uValleyColor.value.setStyle(props.valleyColor);
        uniforms.uColorOffset.value = props.colorOffset;
        uniforms.uColorDamping.value = props.colorDamping;
        uniforms.uSinWaveFrequency.value.set(props.sinWaveFrequency.x, props.sinWaveFrequency.y);
        uniforms.uWaveAmplitude.value = props.waveAmplitude;
        uniforms.uSinWaveSpeed.value.set(props.sinWaveSpeed.x, props.sinWaveSpeed.y);
        uniforms.uPerlinWaveIterations.value = props.perlinWaveIterations;
        uniforms.uPerlinWaveFrequency.value = props.perlinWaveFrequency;
        uniforms.uPerlinWaveAmplitude.value = props.perlinWaveAmplitude;
        uniforms.uPerlinWaveSpeed.value = props.perlinWaveSpeed;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        "rotation-x": -Math.PI / 2,
        "position-y": 1
      }, [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [10, 10, 512, 512] }, null, -1)),
        _createElementVNode$1("TresShaderMaterial", {
          side: THREE$1.DoubleSide,
          vertexShader: _unref$1(waveC_default$1),
          fragmentShader: _unref$1(waveC_default),
          uniforms,
          wireframe: _ctx.wireframe
        }, null, 8, _hoisted_2)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "waveC",
  setup(__props) {
    const gl = {
      clearColor: "#222",
      shadows: true,
      alpha: false,
      shadowMapType: THREE.BasicShadowMap,
      outputColorSpace: THREE.SRGBColorSpace,
      toneMapping: THREE.NoToneMapping,
      useLegacyLights: true,
      antialias: true,
      //开启锯齿
      logarithmicDepthBuffer: true
    };
    const typeState = reactive({
      peakColor: "#ff6767",
      valleyColor: "#310039",
      wireframe: false,
      colorOffset: 0.9,
      colorDamping: 4.5,
      sinWaveFrequency: { x: 0.4, y: 0.3 },
      waveAmplitude: 0.8,
      sinWaveSpeed: { x: 0.6, y: 1.3 },
      perlinWaveIterations: 3,
      perlinWaveFrequency: 0.6,
      perlinWaveAmplitude: 0.5,
      perlinWaveSpeed: 0.6
    });
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    paneControl.addBinding(typeState, "wireframe", {
      label: "网格化"
    });
    paneControl.addBinding(typeState, "peakColor", {
      label: "山峰颜色"
    });
    paneControl.addBinding(typeState, "valleyColor", {
      label: "山谷颜色"
    });
    paneControl.addBinding(typeState, "colorOffset", {
      label: "颜色偏移",
      min: 0.01,
      max: 3,
      step: 0.01
    });
    paneControl.addBinding(typeState, "colorDamping", {
      label: "颜色抑制",
      min: 0.01,
      max: 6,
      step: 0.01
    });
    paneControl.addBinding(typeState, "sinWaveFrequency", {
      label: "正弦波频率",
      picker: "inline",
      x: { min: -1, step: 0.01, max: 1, inverted: true },
      y: { min: -1, step: 0.01, max: 1, inverted: true }
    });
    paneControl.addBinding(typeState, "waveAmplitude", {
      label: "正弦波振幅",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(typeState, "sinWaveSpeed", {
      label: "正弦波速度",
      picker: "inline",
      x: { min: -3, step: 0.01, max: 3, inverted: true },
      y: { min: -3, step: 0.01, max: 3, inverted: true }
    });
    paneControl.addBinding(typeState, "perlinWaveIterations", {
      label: "小波浪层数",
      min: 1,
      max: 7,
      step: 0.1
    });
    paneControl.addBinding(typeState, "perlinWaveFrequency", {
      label: "小波浪频率",
      min: 0,
      max: 5,
      step: 0.01
    });
    paneControl.addBinding(typeState, "perlinWaveAmplitude", {
      label: "小波浪幅度",
      min: 0,
      max: 2,
      step: 0.01
    });
    paneControl.addBinding(typeState, "perlinWaveSpeed", {
      label: "小波浪速度",
      min: 0,
      max: 2,
      step: 0.01
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(typeState)), null, 16)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=waveC.CfWbDC3F1767105581793.js.map
