import { importShared, Kk } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [-2, -2, -2] };
const _hoisted_2 = ["position", "a-scale"];
const {AdditiveBlending} = await importShared('three');

const {reactive} = await importShared('vue');

const firefliesCount = 3e3;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "shaderParticles",
  setup(__props) {
    const gl = reactive({
      clearColor: "black",
      shadows: true,
      alpha: false
    });
    const shader = {
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
      vertexShader: `
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uTime;
  attribute float aScale;

  void main()
  {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;

      gl_Position = projectionPosition;
      gl_PointSize = aScale * uSize * uPixelRatio;
      gl_PointSize *= (1.0 / - viewPosition.z);
  }
  `,
      fragmentShader: `
  void main()
    {
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      float strength = 0.05 / distanceToCenter - 0.1;

      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
    }
  `,
      uniforms: {
        uSize: { value: 100 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uTime: { value: 0 }
      }
    };
    const positionArray = new Float32Array(firefliesCount * 3);
    const scaleArray = new Float32Array(firefliesCount);
    for (let i = 0; i < firefliesCount; i++) {
      positionArray[i * 3 + 0] = Math.random() * 4;
      positionArray[i * 3 + 1] = Math.random() * 4;
      positionArray[i * 3 + 2] = Math.random() * 4;
      scaleArray[i] = Math.random();
    }
    const onLoop = ({ elapsed }) => {
      shader.uniforms.uTime.value = elapsed;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [5, 5, 5],
            fov: 45,
            near: 0.1,
            far: 1e3,
            "look-at": [-8, 3, -3]
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _createElementVNode("TresPoints", _hoisted_1, [
            _createElementVNode("TresBufferGeometry", {
              position: [_unref(positionArray), 3],
              "a-scale": [_unref(scaleArray), 1]
            }, null, 8, _hoisted_2),
            _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(shader)), null, 16)
          ]),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [0, 2, 4],
            intensity: 1,
            "cast-shadow": ""
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresGridHelper", null, null, -1))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=shaderParticles.tULtV27V1767105581793.js.map
