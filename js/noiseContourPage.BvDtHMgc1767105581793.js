import { importShared, Fs, no, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { ShaderPass, EffectComposer, RenderPass } from './RenderPass.XMM8w9Yd1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1$1 = ["side", "rotation-x"];
const _hoisted_2 = ["side"];
const {watchEffect,watch} = await importShared('vue');
const {DoubleSide,Vector2,LinearFilter,RGBAFormat,WebGLRenderTarget} = await importShared('three');
const VERTEX = `
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
`;
const FRAGMENT = `
    uniform sampler2D tDiffuse;
    uniform sampler2D tShadow;
    uniform vec2 iResolution;

    varying vec2 vUv;
    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)
    float checkSame(vec4 center, vec4 samplef)
    {
        vec2 centerNormal = center.xy;
        float centerDepth = center.z;
        vec2 sampleNormal = samplef.xy;
        float sampleDepth = samplef.z;

        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;
        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;
        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;
        bool isSameDepth = diffDepth < 0.1;

        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;
    }

    void main( )
    {
        vec4 sample0 = texture2D(tDiffuse, vUv);
        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));
        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));
        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));
        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));

        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);

        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);
        float shadow = texture2D(tShadow, vUv).x;
        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);

    }
`;
const FRAGMENT_FINAL = `
uniform sampler2D tDiffuse;
uniform sampler2D tNoise;
uniform float iTime;

varying vec2 vUv;

#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)
#define BackgroundColor vec4(1,0.95,0.85,1)
#define NoiseAmount 0.01
#define ErrorPeriod 30.0
#define ErrorRange 0.003

// Reference: https://www.shadertoy.com/view/MsSGD1
float triangle(float x)
{
    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;
}

float rand(float x)
{
    return fract(sin(x) * 43758.5453);
}

void main()
{
    float time = floor(iTime * 16.0) / 16.0;
    vec2 uv = vUv;
    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,
            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);

    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;
    vec2 uvs[3];
    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);
    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);
    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);

    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;
    float diffuse = texture2D(tDiffuse, uv).g;

    float w = fwidth(diffuse) * 2.0;
    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));
    gl_FragColor = mix(EdgeColor, mCol, edge);
}
`;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "noiseContour",
  setup(__props) {
    const { camera, renderer, scene, sizes } = Fs();
    const { state: pTexture } = no("./plugins/shadertoyToThreejs/image/noise.png");
    const { onRender } = _l();
    const PARAMETERS = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat,
      stencilBuffer: false
    };
    const shadowBuffer = new WebGLRenderTarget(1, 1, PARAMETERS);
    const resolution = new Vector2(window.innerWidth, window.innerHeight);
    const drawShader = {
      uniforms: {
        tDiffuse: { type: "t", value: null },
        tShadow: { type: "t", value: null },
        iResolution: { type: "v2", value: resolution }
      },
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT
    };
    let composer = null;
    const pass = new ShaderPass(drawShader);
    let finalShader = {
      uniforms: {
        tDiffuse: { type: "t", value: null },
        iTime: { type: "f", value: 0 },
        tNoise: { type: "t", value: null }
      },
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT_FINAL
    };
    watch(
      () => pTexture.value,
      (mapv) => {
        if (mapv) {
          finalShader.uniforms.tNoise.value = mapv;
        }
      }
    );
    const passFinal = new ShaderPass(finalShader);
    passFinal.renderToScreen = true;
    watchEffect(() => {
      if (sizes.width.value && renderer && scene.value && camera.value) {
        if (composer) {
          composer.dispose();
        }
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene.value, camera.value));
        composer.addPass(pass);
        composer.addPass(passFinal);
      }
    });
    onRender(({ elapsed }) => {
      renderer.render(scene.value, camera.value, shadowBuffer);
      pass.uniforms.tShadow.value = shadowBuffer.texture;
      passFinal.uniforms.iTime.value = elapsed;
      if (composer) {
        composer.render();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          ref: "noiseContourMeshRef2",
          side: _unref$1(DoubleSide),
          position: [400, 100, 0],
          "rotation-x": 2 * Math.PI / 360 * 90,
          "cast-shadow": ""
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresBoxGeometry", { args: [400, 400, 400] }, null, -1),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: "#ffffff",
            shininess: 0
          }, null, -1)
        ])], 8, _hoisted_1$1),
        _createElementVNode$1("TresMesh", {
          ref: "noiseContourMeshRef1",
          side: _unref$1(DoubleSide),
          position: [0, 150, 0],
          "cast-shadow": ""
        }, [..._cache[1] || (_cache[1] = [
          _createElementVNode$1("TresSphereGeometry", { args: [50, 32, 32] }, null, -1),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: "#ffffff",
            shininess: 0
          }, null, -1)
        ])], 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = {
  ref: "perspectiveCameraRef",
  position: [600, 750, -1221],
  fov: 45,
  near: 1,
  far: 1e4
};
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "noiseContourPage",
  setup(__props) {
    const state = {
      clearColor: "#000000",
      shadows: true,
      alpha: false,
      useLegacyLights: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _createElementVNode("TresPerspectiveCamera", _hoisted_1, null, 512),
          _createVNode(_unref(Kk)),
          _cache[0] || (_cache[0] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresDirectionalLight", {
            position: [400, 400, 400],
            intensity: 1,
            color: "red"
          }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
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
//# sourceMappingURL=noiseContourPage.BvDtHMgc1767105581793.js.map
