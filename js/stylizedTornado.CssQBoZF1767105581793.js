import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { loading$2 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { _sfc_main as _sfc_main$8 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

var vertex_default$1="out vec2 vUv;\n\nvoid main()\n{\n    \n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    vUv = uv;\n    \n}";

var fragment_default$1="uniform float uTime;\nuniform vec3 uFrontColor;\nuniform vec3 uBackColor;\nuniform sampler2D uNoise;\nuniform float uPowerOffset;\nuniform float uNoiseCutOff;\nuniform bool uColorBoth;\n\nin vec2 vUv;\n\nvoid clip( float clipValue, float alphaThreshold, int type )\n{\n    \n    switch( type )\n    {\n        case 0: \n            if( clipValue < alphaThreshold ) discard;\n        break;\n\n        case 1: \n            if( clipValue > alphaThreshold ) discard;\n        break;\n\n        case 2: \n            if( clipValue <= alphaThreshold ) discard;\n        break;\n\n        case 3: \n            if( clipValue >= alphaThreshold ) discard;\n        break;\n\n        case 4: \n            if( clipValue == alphaThreshold ) discard;\n        break;\n\n        default: \n            if( clipValue < alphaThreshold ) discard;\n        break;\n    }\n}\nvec2 tileOffset( vec2 uv , vec2 tiling, vec2 offset )\n{\n    return  uv * tiling + offset;\n}\n\nvoid main()\n{\n    vec2 uv = vUv;\n\n    vec2 timeOffset = vec2( uTime * 0.6, 0.0 );\n\n    \n\n    \n    vec3 noiseVoronoi = texture( uNoise, uv ).rgb;\n\n    float uvCutOff = uv.y;\n\n    uvCutOff = smoothstep( 0.02, 1.0, uvCutOff + 0.2  );\n\n    \n    float noiseCutOff = pow( noiseVoronoi.r, uPowerOffset );\n\n    \n\n    \n    vec3 colorFront = uFrontColor;\n    colorFront *= noiseCutOff;\n\n    vec3 colorBack = uBackColor;\n    colorBack *= noiseCutOff;\n\n    \n    vec3 colorFinal = colorFront;\n\n    if( uColorBoth )\n    {\n        colorFinal = ( ( gl_FrontFacing ) ? colorFront : colorBack );\n    }\n\n    \n    clip( noiseCutOff, uNoiseCutOff, 0 );\n\n    gl_FragColor = vec4( colorFinal, noiseCutOff * uvCutOff );\n    \n\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n\n}";

const {defineComponent:_defineComponent$7} = await importShared('vue');

const {normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7} = await importShared('vue');

const {watch: watch$1} = await importShared('vue');

const THREE$4 = await importShared('three');
const _sfc_main$7 = /* @__PURE__ */ _defineComponent$7({
  __name: "meshSpiralMaterial",
  props: {
    frontColor: { default: "#320564" },
    backColor: { default: "#ec22ff" },
    intensity: { default: 1.5 },
    powerOffset: { default: 4 },
    noiseCutOff: { default: 0.32 },
    colorBoth: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const pTexture = instance.getItem("noiseVoronoi.png");
    const tsMaterialConfig = {
      uniforms: {
        uTime: { value: 0 },
        uFrontColor: { value: new THREE$4.Color(props.frontColor) },
        uBackColor: { value: new THREE$4.Color(props.backColor).multiplyScalar(props.intensity) },
        uNoise: { value: pTexture },
        uPowerOffset: { value: props.powerOffset },
        uNoiseCutOff: { value: props.noiseCutOff },
        uColorBoth: { value: props.colorBoth }
      },
      vertexShader: vertex_default$1,
      fragmentShader: fragment_default$1,
      transparent: true,
      side: THREE$4.DoubleSide,
      depthWrite: true,
      depthTest: true
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      tsMaterialConfig.uniforms.uTime.value += delta;
    });
    watch$1(
      () => [props.frontColor, props.backColor],
      ([frontColor, backColor]) => {
        tsMaterialConfig.uniforms.uFrontColor.value.setStyle(frontColor);
        tsMaterialConfig.uniforms.uBackColor.value.setStyle(backColor).multiplyScalar(props.intensity);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$7("TresShaderMaterial", _normalizeProps$1(_guardReactiveProps$1(tsMaterialConfig)), null, 16);
    };
  }
});

const {defineComponent:_defineComponent$6} = await importShared('vue');

const {unref:_unref$4,createVNode:_createVNode$5,createElementVNode:_createElementVNode,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6} = await importShared('vue');

const _hoisted_1$3 = ["geometry"];
const {ref} = await importShared('vue');
const _sfc_main$6 = /* @__PURE__ */ _defineComponent$6({
  __name: "highlightMiddle",
  props: {
    frontColor: { default: "#111111" },
    backColor: { default: "#ff810c" }
  },
  setup(__props) {
    const meshRef = ref(null);
    const { nodes } = instance.getItem("spiral-middle.glb");
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta, elapsed }) => {
      if (meshRef.value) {
        const time = elapsed * 3.4;
        const scale = 0.2 * Math.sin(time) + 0.8;
        meshRef.value.rotation.y += delta * 6;
        meshRef.value.scale.set(scale, scale, scale);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$6(), _createElementBlock$6("TresGroup", null, [
        _createElementVNode("TresMesh", {
          ref_key: "meshRef",
          ref: meshRef,
          geometry: _unref$4(nodes).Cylinder.geometry,
          renderOrder: 999991
        }, [
          _createVNode$5(_sfc_main$7, {
            frontColor: _ctx.frontColor,
            backColor: _ctx.backColor,
            intensity: 2.7,
            powerOffset: 12,
            colorBoth: ""
          }, null, 8, ["frontColor", "backColor"])
        ], 8, _hoisted_1$3)
      ]);
    };
  }
});

var vertex_default="out vec2 vUv;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    vUv = uv;\n}";

var fragment_default="uniform float uTime;\nuniform vec3 uColor;\nuniform float uTwirl;\nuniform vec2 uRadialShear;\nuniform vec2 uTwirlOffset;\nuniform vec2 uRadialOffset;\nuniform vec2 uTwirlCenter;\nuniform vec2 uRadialCenter;\nuniform float uNoisePower;\nuniform float uAlphaThreshold;\nuniform bool uEdge;\n\nin vec2 vUv;\n\nvoid clip( float clipValue, float alphaThreshold, int type )\n{\n    \n    switch( type )\n    {\n        case 0: \n            if( clipValue < alphaThreshold ) discard;\n        break;\n\n        case 1: \n            if( clipValue > alphaThreshold ) discard;\n        break;\n\n        case 2: \n            if( clipValue <= alphaThreshold ) discard;\n        break;\n\n        case 3: \n            if( clipValue >= alphaThreshold ) discard;\n        break;\n\n        case 4: \n            if( clipValue == alphaThreshold ) discard;\n        break;\n\n        default: \n            if( clipValue < alphaThreshold ) discard;\n        break;\n    }\n}\nvec2 twirl(vec2 uv, vec2 center, float strength, vec2 offset)\n{\n    vec2 delta = uv - center;\n    float angle = strength * length(delta);\n    float x = cos(angle) * delta.x - sin(angle) * delta.y;\n    float y = sin(angle) * delta.x + cos(angle) * delta.y;\n    return vec2(x + center.x + offset.x, y + center.y + offset.y);\n}\nvec2 radialShear( vec2 uv, vec2 center, float strength, vec2 offset )\n{\n    vec2 delta = uv - center;\n    float delta2 = dot( delta.xy, delta.xy );\n\n    float deltaOffset = delta2 * strength;\n\n    return uv + vec2( delta.y, -delta.x) * deltaOffset + offset;\n}\n\nvec2 radialShear( vec2 uv, vec2 center, vec2 strength, vec2 offset )\n{\n    vec2 delta = uv - center;\n    vec2 delta2 =  vec2( dot( delta.xy, delta.xy ) );\n\n    vec2 deltaOffset = delta2 * strength;\n\n    return uv + vec2( delta.y, -delta.x) * deltaOffset + offset;\n}\nfloat randomSimple(vec2 n) { \n	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\n\nfloat interpolate( float a, float b, float t )\n{\n    return ( 1.0 - t ) * a + ( t * b );\n}\n\nfloat valueNoise( vec2 uv )\n{\n    vec2 i = floor( uv );\n    vec2 f = fract( uv );\n    f = f * f * ( 3.0 - 2.0 * f );\n\n    uv = abs( fract( uv ) - 0.5 );\n    vec2 c0 = i + vec2(0.0, 0.0);\n    vec2 c1 = i + vec2(1.0, 0.0);\n    vec2 c2 = i + vec2(0.0, 1.0);\n    vec2 c3 = i + vec2(1.0, 1.0);\n    float r0 = randomSimple(c0);\n    float r1 = randomSimple(c1);\n    float r2 = randomSimple(c2);\n    float r3 = randomSimple(c3);\n\n    float bottomOfGrid = interpolate(r0, r1, f.x);\n    float topOfGrid = interpolate(r2, r3, f.x);\n    float t = interpolate(bottomOfGrid, topOfGrid, f.y);\n    return t;\n}\n\nfloat noiseSimple( vec2 UV, float Scale )\n{\n    float t = 0.0;\n\n    float freq = pow(2.0, float(0));\n    float amp = pow(0.5, float(3-0));\n    t += valueNoise(vec2(UV.x*Scale/freq, UV.y*Scale/freq))*amp;\n\n    freq = pow(2.0, float(1));\n    amp = pow(0.5, float(3-1));\n    t += valueNoise(vec2(UV.x*Scale/freq, UV.y*Scale/freq))*amp;\n\n    freq = pow(2.0, float(2));\n    amp = pow(0.5, float(3-2));\n    t += valueNoise(vec2(UV.x * Scale / freq, UV.y * Scale / freq ) ) * amp;\n\n    return t;\n}\nfloat remap( float value, float min1, float max1, float min2, float max2 ) \n{\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvoid main()\n{\n\n    vec2 uv = vUv;\n    float time = uTime;\n\n    vec2 twirlOffset = vec2( time * uTwirlOffset.x, time * uTwirlOffset.y );\n    vec2 radialOffset = vec2( time * uRadialOffset.x, time * uRadialOffset.y );\n\n    float uvCutOff = uv.y;\n    uvCutOff = smoothstep( 0.2, 1.0, uvCutOff + 0.2 );\n\n    vec2 uvRadial = radialShear( uv, uRadialCenter, uRadialShear, radialOffset );\n    vec2 uvTwirl = twirl( uv, uTwirlCenter, uTwirl, twirlOffset );\n\n    float noiseRadial = noiseSimple( uvRadial, 20.0 );\n    float noiseTwirl = noiseSimple( uvTwirl, 20.0 );\n\n    float noise = noiseRadial * noiseTwirl;\n\n    noise = pow( noise, uNoisePower );\n\n    float dissolve = remap( noise, 0.0, 1.0, 1.0, 0.0 );\n\n    vec3 colorFinal = uColor;\n    colorFinal *= noise;\n\n    clip( noise, uAlphaThreshold, 0 );\n\n    vec4 color = vec4( colorFinal, dissolve );\n\n    if( uEdge )\n    {\n        color.a *= uvCutOff;\n    }\n\n    gl_FragColor = color;\n    #include <tonemapping_fragment>\n    #include <colorspace_fragment>\n\n}";

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');

const {watch} = await importShared('vue');

const THREE$3 = await importShared('three');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "meshTornadoMaterial",
  props: {
    colorBase: { default: "#ff821c" },
    colorIntensity: { default: 12 },
    twirlAmount: { default: 8 },
    radialShearAmount: { default: new THREE$3.Vector2(5, 5) },
    twirlOffset: { default: new THREE$3.Vector2(0, 0.5) },
    radialOffset: { default: new THREE$3.Vector2(0, 0.5) },
    twirlCenter: { default: new THREE$3.Vector2(0.5, -0.5) },
    radialCenter: { default: new THREE$3.Vector2(0.5, 0.5) },
    noisePower: { default: 1 },
    alphaThreshold: { default: 0.17 },
    showEdge: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const tsMaterialConfig = {
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE$3.Color(props.colorBase).multiplyScalar(props.colorIntensity) },
        uTwirl: { value: props.twirlAmount },
        uRadialShear: { value: props.radialShearAmount },
        uTwirlOffset: { value: props.twirlOffset },
        uRadialOffset: { value: props.radialOffset },
        uTwirlCenter: { value: props.twirlCenter },
        uRadialCenter: { value: props.radialCenter },
        uNoisePower: { value: props.noisePower },
        uAlphaThreshold: { value: props.alphaThreshold },
        uEdge: { value: props.showEdge }
      },
      vertexShader: vertex_default,
      fragmentShader: fragment_default,
      transparent: true,
      side: THREE$3.DoubleSide,
      depthWrite: true,
      depthTest: true
    };
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      tsMaterialConfig.uniforms.uTime.value += delta;
    });
    watch(
      () => props.colorBase,
      (color) => {
        tsMaterialConfig.uniforms.uColor.value.setStyle(color).multiplyScalar(props.colorIntensity);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$5("TresShaderMaterial", _normalizeProps(_guardReactiveProps(tsMaterialConfig)), null, 16);
    };
  }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$3,createVNode:_createVNode$4,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$2 = ["geometry"];
const THREE$2 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "tornadoOutter",
  props: {
    color: { default: "#ff5400" }
  },
  setup(__props) {
    const { nodes } = instance.getItem("tornado.glb");
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$4("TresMesh", {
        geometry: _unref$3(nodes).tornado.geometry
      }, [
        _createVNode$4(_sfc_main$5, {
          colorBase: _ctx.color,
          colorIntensity: 2,
          twirlAmount: 6,
          radialShearAmount: new THREE$2.Vector2(0.9, 0.9),
          twirlCenter: new THREE$2.Vector2(0.5, -0.52),
          twirlOffset: new THREE$2.Vector2(-0.5, -0.25),
          radialOffset: new THREE$2.Vector2(-0.5, 0.5),
          alphaThreshold: 0.18,
          showEdge: false
        }, null, 8, ["colorBase", "radialShearAmount", "twirlCenter", "twirlOffset", "radialOffset"])
      ], 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$1 = ["geometry"];
const THREE$1 = await importShared('three');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "tornado",
  props: {
    color: { default: "#ff5400" }
  },
  setup(__props) {
    const { nodes } = instance.getItem("tornado.glb");
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3("TresMesh", {
        geometry: _unref$2(nodes).tornado.geometry
      }, [
        _createVNode$3(_sfc_main$5, {
          colorBase: _ctx.color,
          colorIntensity: 13,
          twirlAmount: 8,
          radialShearAmount: new THREE$1.Vector2(0.7, 0.7),
          twirlCenter: new THREE$1.Vector2(0.5, -0.52),
          twirlOffset: new THREE$1.Vector2(-1, -0.5),
          radialOffset: new THREE$1.Vector2(-1, 0.5),
          alphaThreshold: 0.23,
          showEdge: false
        }, null, 8, ["colorBase", "radialShearAmount", "twirlCenter", "twirlOffset", "radialOffset"])
      ], 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const THREE = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "tornadoInner",
  props: {
    color: { default: "#ff5400" }
  },
  setup(__props) {
    const { nodes } = instance.getItem("tornado.glb");
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("TresMesh", {
        geometry: _unref$1(nodes).tornado.geometry
      }, [
        _createVNode$2(_sfc_main$5, {
          colorBase: _ctx.color,
          colorIntensity: 8,
          radialShearAmount: new THREE.Vector2(0.7, 0.7),
          alphaThreshold: 0.17,
          showEdge: true
        }, null, 8, ["colorBase", "radialShearAmount"])
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "experience",
  props: {
    color0: { default: "#111111" },
    color1: { default: "#ff810c" },
    color2: { default: "#3a3a3a" },
    color3: { default: "#ff821c" },
    color4: { default: "#ff5400" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("TresGroup", null, [
        _createVNode$1(_sfc_main$6, {
          scale: [1.1, 4.6, 1.1],
          position: [0, -2, 0],
          frontColor: _ctx.color0,
          backColor: _ctx.color1
        }, null, 8, ["frontColor", "backColor"]),
        _createVNode$1(_sfc_main$4, {
          scale: [0.6, 0.4, 0.6],
          position: [0, -2.5, 0],
          renderOrder: 999992,
          color: _ctx.color2
        }, null, 8, ["color"]),
        _createVNode$1(_sfc_main$3, {
          scale: [0.44, 0.4, 0.44],
          position: [0, -2.5, 0],
          renderOrder: 999993,
          color: _ctx.color3
        }, null, 8, ["color"]),
        _createVNode$1(_sfc_main$2, {
          scale: 0.4,
          position: [0, -2.5, 0],
          renderOrder: 999994,
          color: _ctx.color4
        }, null, 8, ["color"])
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withCtx:_withCtx,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "stylizedTornado",
  setup(__props) {
    instance.loadResources([
      { functionName: "GLTFLoader", url: "./plugins/digitalCity/model/spiral-middle.glb" },
      { functionName: "GLTFLoader", url: "./plugins/digitalCity/model/tornado.glb" },
      { functionName: "TextureLoader", url: "./plugins/digitalCity/image/noise/noiseVoronoi.png" }
    ]);
    const paneControl = new Pane({
      title: "龙卷风参数",
      expanded: true
    });
    const experienceState = reactive({
      color0: "#111111",
      color1: "#ff810c",
      color2: "#3a3a3a",
      color3: "#ff821c",
      color4: "#ff1800"
    });
    paneControl.addBinding(experienceState, "color0", { label: "颜色0" });
    paneControl.addBinding(experienceState, "color1", { label: "颜色1" });
    paneControl.addBinding(experienceState, "color2", { label: "颜色2" });
    paneControl.addBinding(experienceState, "color3", { label: "颜色3" });
    paneControl.addBinding(experienceState, "color4", { label: "颜色4" });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { useResourceManager: "" }),
        _createVNode(_sfc_main$8, { showAxesHelper: false }, {
          ability: _withCtx(() => [
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, _mergeProps({
              key: 0,
              position: [10, 280, 0],
              scale: 100
            }, experienceState), null, 16)) : _createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=stylizedTornado.CssQBoZF1767105581793.js.map
