import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { argestCircle_default } from './argestCircle.B4IuVIc61767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [600, 750, -1221],
  fov: 45,
  near: 1,
  far: 1e4
};
const _hoisted_2 = ["rotation-x"];
const {AdditiveBlending,DoubleSide} = await importShared('three');
const stringFrag = `
varying vec2 vUv;
uniform float uTime;
vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(sin(uTime * 0.2) * 0.5 + 0.5, cos(uTime * 0.25) * 0.5 + 0.5, sin(uTime * 0.3 + 1.0) * 0.5 + 0.5);
    
    return a + b * cos(6.28318 * (c * t + d));
}

void main(){
    vec2 uv = vUv-vec2(0.5);
    
    float angle = atan(uv.y, uv.x);
    float radius = length(uv);
    
    int sides = int(5.0 + 4.0 * sin(uTime * 0.5)); 
    angle = mod(angle, 6.28318 / float(sides)) * float(sides);
    
    vec2 uv0 = vec2(radius, angle);
    vec3 finalColor = vec3(0.0);
    
    for(float i = 0.0; i < 5.0; i++) {
        uv0.x = fract(uv0.x * (1.5 + 0.1 * sin(uTime)));
        
        float d = uv0.x * exp(-radius);

        vec3 col = palette(uv0.x + i * 0.4 + uTime * 0.4);

        d = sin(d * (8.0 + 4.0 * sin(uTime * 0.1)) + uTime) / 8.0;
        d = abs(d);

        d = pow(0.01 / d, 1.2 + 0.1 * sin(uTime));

        finalColor += col * d;
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "tunnel",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    const controlsState = { autoRotate: true, enableDamping: true };
    const Material = {
      uniforms: {
        uTime: { type: "f", value: 0 }
      },
      vertexShader: argestCircle_default,
      fragmentShader: stringFrag,
      side: DoubleSide,
      blending: AdditiveBlending,
      depthWrite: false,
      transparent: true
    };
    const onBeforeRender = function() {
      Material.uniforms.uTime.value += 6e-3;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, {
        "window-size": "",
        onLoop: onBeforeRender
      }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 0],
            intensity: 0.5,
            color: "#ffffff"
          }, null, -1)),
          _createElementVNode("TresMesh", {
            ref: "quanMeshRef",
            position: [0, 100, 0],
            "rotation-x": 2 * Math.PI / 360 * 90
          }, [
            _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [1e3, 1e3] }, null, -1)),
            _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(Material)), null, 16)
          ], 8, _hoisted_2),
          _cache[3] || (_cache[3] = _createElementVNode("TresAxesHelper", {
            args: [1e3],
            position: [0, 19, 0]
          }, null, -1)),
          _cache[4] || (_cache[4] = _createElementVNode("TresGridHelper", {
            args: [6e3, 100],
            position: [0, 19, 0]
          }, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=tunnel.CH8a6B7h1767105581793.js.map
