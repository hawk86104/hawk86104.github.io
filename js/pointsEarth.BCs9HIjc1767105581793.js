import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { useTexture$1 as useTexture } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var pointsEarth_default$1="uniform float size;\n  uniform sampler2D elevTexture;\n  uniform sampler2D alphaTexture;\n  uniform float uTime;\n  uniform float uWaveHeight;\n  uniform float uWaveSpeed;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n  \n  float random(vec3 st) {\n    return fract(sin(dot(st.xyz, vec3(12.9898,78.233,45.164))) * 43758.5453123);\n}\n\nfloat noise(vec3 st) {\n    vec3 i = floor(st);\n    vec3 f = fract(st);\n\n    \n    float a = random(i);\n    float b = random(i + vec3(1.0, 0.0, 0.0));\n    float c = random(i + vec3(0.0, 1.0, 0.0));\n    float d = random(i + vec3(1.0, 1.0, 0.0));\n    float e = random(i + vec3(0.0, 0.0, 1.0));\n    float f1 = random(i + vec3(1.0, 0.0, 1.0));\n    float g = random(i + vec3(0.0, 1.0, 1.0));\n    float h = random(i + vec3(1.0, 1.0, 1.0));\n\n    vec3 u = f * f * (3.0 - 2.0 * f);\n\n    return mix(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),\n               mix(mix(e, f1, u.x), mix(g, h, u.x), u.y), u.z);\n}\n\nfloat fbm(vec3 st) {\n    float value = 0.0;\n    float amplitude = 0.5;\n\n    for (int i = 0; i < 5; i++) {\n        value += amplitude * noise(st);\n        st *= 2.0;\n        amplitude *= 0.5;\n    }\n    return value;\n}\n\n  void main() {\n    vUv = uv;\n    float alphaLand = 1.0 - texture2D(alphaTexture, vUv).r;\n    vAlpha = alphaLand;\n    vec3 newPosition = position;\n\n    if(alphaLand < 0.5) {\n      \n      \n      float waveHeight = uWaveHeight; \n      float waveSpeed = uWaveSpeed;  \n      float displacement = (fbm(newPosition * 5.0 + uTime * waveSpeed) * 2.0 - 1.0) * waveHeight;\n      vElevation = displacement;\n      newPosition += normal * displacement ;\n    }\n\n    vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );\n    float elv = texture2D(elevTexture, vUv).r;\n    vec3 vNormal = normalMatrix * normal;\n    vVisible = step(0.0, dot( -normalize(mvPosition.xyz), normalize(vNormal)));\n    mvPosition.z += 0.45 * elv;\n\n    \n    float dist = length(mvPosition.xyz);\n    \n    float pointSize = size * (1.0 - dist / 10.0);\n    gl_PointSize = max(pointSize, 1.0);\n    gl_PointSize = pointSize;\n    gl_Position = projectionMatrix * mvPosition;\n  }";

var pointsEarth_default="uniform sampler2D colorTexture;\n  \n  uniform sampler2D earthTexture;\n  uniform sampler2D starTexture;\n\n  varying vec2 vUv;\n  varying float vVisible;\n  varying float vAlpha;\n  varying float vElevation;\n\n  void main() {\n    if (floor(vVisible + 0.1) == 0.0) discard;\n    vec2 coord = gl_PointCoord;\n    float alpha = texture2D(starTexture, coord).a;\n    \n    if (alpha < 0.1) discard;\n\n    \n    vec3 color = texture2D(colorTexture, vUv).rgb;\n    vec3 earth = texture2D(earthTexture, vUv).rgb;\n    color = mix(color, earth, 0.65);\n    if(\n      vAlpha > 0.5\n    ) {\n      gl_FragColor = vec4(color, vAlpha);\n    }else {\n      \n      float elevationEffect = clamp(vElevation*30.0, -1.0, 1.0); \n      vec3 deep_sea_blue = vec3(0.004, 0.227, 0.388);\n      vec3 adjustedColor = mix(deep_sea_blue, earth*1.75, (elevationEffect + 1.0) * 0.5); \n      gl_FragColor = vec4(adjustedColor, 1.0-vAlpha);\n    }\n  }";

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const THREE = await importShared('three');

const {shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "pointsEarth",
  async setup(__props) {
    let __temp, __restore;
    const params = {
      color: "#17c5a9",
      pointSize: 4
    };
    const gl = {
      clearColor: "#122148",
      shadows: false,
      alpha: false,
      outputColorSpace: THREE.SRGBColorSpace
    };
    const wireframeMaterial = {
      color: params.color,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    };
    const textures = ([__temp, __restore] = _withAsyncContext(() => useTexture([
      "./plugins/earthSample/image/pointsEarth/00_earthmap1k.jpg",
      "./plugins/earthSample/image/pointsEarth/circle.png",
      "./plugins/earthSample/image/pointsEarth/04_rainbow1k.jpg",
      "./plugins/earthSample/image/pointsEarth/01_earthbump1k.jpg",
      "./plugins/earthSample/image/pointsEarth/02_earthspec1k.jpg"
    ])), __temp = await __temp, __restore(), __temp);
    const earthMap = textures[0];
    const starSprite = textures[1];
    const colorMap = textures[2];
    const elevMap = textures[3];
    const alphaMap = textures[4];
    const pointsShader = {
      uniforms: {
        size: { type: "f", value: params.pointSize },
        uTime: { type: "f", value: 0 },
        uWaveHeight: { type: "f", value: 0.075 },
        uWaveSpeed: { type: "f", value: 0.2 },
        colorTexture: { type: "t", value: colorMap },
        elevTexture: { type: "t", value: elevMap },
        alphaTexture: { type: "t", value: alphaMap },
        earthTexture: { type: "t", value: earthMap },
        starTexture: { type: "t", value: starSprite }
      },
      vertexShader: pointsEarth_default$1,
      fragmentShader: pointsEarth_default,
      transparent: true,
      side: THREE.FrontSide
    };
    const groupRef = shallowRef();
    const wireframeMaterialRef = shallowRef();
    const pane = new Pane();
    const debugFolder = pane.addFolder({ title: "Debug" });
    debugFolder.addBinding(params, "color", { type: "color" }).on("change", ({ value }) => {
      wireframeMaterialRef.value.color.set(value);
    });
    debugFolder.addBinding(pointsShader.uniforms.size, "value", {
      min: 0.1,
      max: 10,
      step: 0.1,
      label: "粒子大小"
    });
    debugFolder.addBinding(pointsShader.uniforms.uWaveHeight, "value", {
      min: 0.01,
      max: 0.5,
      step: 0.01,
      label: "海浪高度"
    });
    debugFolder.addBinding(pointsShader.uniforms.uWaveSpeed, "value", {
      min: 0.01,
      max: 1,
      step: 0.01,
      label: "海浪变化速度"
    });
    const onLoop = ({ delta }) => {
      if (groupRef.value) {
        groupRef.value.rotation.y += 2e-3;
        pointsShader.uniforms.uTime.value += 10 * delta;
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 0, 3.5],
            fov: 45,
            near: 0.1,
            far: 20
          }, null, -1)),
          _createVNode(_unref(Kk), {
            autoRotate: true,
            autoRotateSpeed: 2
          }),
          _createElementVNode("TresGroup", {
            ref_key: "groupRef",
            ref: groupRef
          }, [
            _createElementVNode("TresMesh", null, [
              _cache[0] || (_cache[0] = _createElementVNode("TresIcosahedronGeometry", { args: [1, 4] }, null, -1)),
              _createElementVNode("TresMeshBasicMaterial", _mergeProps({
                ref_key: "wireframeMaterialRef",
                ref: wireframeMaterialRef
              }, wireframeMaterial), null, 16)
            ]),
            _createElementVNode("TresPoints", null, [
              _cache[1] || (_cache[1] = _createElementVNode("TresIcosahedronGeometry", { args: [1, 128] }, null, -1)),
              _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(pointsShader)), null, 16)
            ])
          ], 512),
          _cache[3] || (_cache[3] = _createElementVNode("TresHemisphereLight", { args: ["#ffffff", "#080820", 3] }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=pointsEarth.BCs9HIjc1767105581793.js.map
