import { importShared, Kk, tk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

/**
 * FakeGlow material by Anderson Mancini - Fec 2024.
 */
const {ShaderMaterial,Uniform,Color,AdditiveBlending,FrontSide,BackSide,DoubleSide} = await importShared('three');


class FakeGlowMaterial extends ShaderMaterial {

  /**
   * Create a FakeGlowMaterial.
   *
   * @param {Object} parameters - The parameters to configure the material.
   * @param {number} [parameters.falloff=0.1] - The falloff factor for the glow effect.
   * @param {number} [parameters.glowInternalRadius=6.0] - The internal radius for the glow effect.
   * @param {Color} [parameters.glowColor=new Color('#00d5ff')] - The color of the glow effect.
   * @param {number} [parameters.glowSharpness=0.5] - The sharpness of the glow effect.
   * @param {number} [parameters.opacity=1.0] - The opacity of the hologram.
   * @param {number} [parameters.side=THREE.FrontSide] - The rendering side. Use `THREE.FrontSide`, `THREE.BackSide`, or `THREE.DoubleSide`.
   * @param {boolean} [parameters.depthTest=false] - Enable or disable depth testing.
   */

  constructor(parameters = {}) {
    super();

    this.vertexShader = /*GLSL */
      `
      varying vec3 vPosition;
      varying vec3 vNormal;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * modelPosition;
        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
        vPosition = modelPosition.xyz;
        vNormal = modelNormal.xyz;

      }
    `;

    this.fragmentShader = /*GLSL */
      `
      uniform vec3 glowColor;
      uniform float falloff;
      uniform float glowSharpness;
      uniform float glowInternalRadius;
      uniform float opacity;

      varying vec3 vPosition;
      varying vec3 vNormal;

      void main()
      {
        // Normal
        vec3 normal = normalize(vNormal);
        if(!gl_FrontFacing)
            normal *= - 1.0;
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = dot(viewDirection, normal);
        fresnel = pow(fresnel, glowInternalRadius + 0.1);
        float falloff = smoothstep(0., falloff, fresnel);
        float fakeGlow = fresnel;
        fakeGlow += fresnel * glowSharpness;
        fakeGlow *= falloff;
        gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., opacity));

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      } 
      `;

    // Set default values or modify existing properties if needed
    this.uniforms = {

      /**
       * The opacity for the glow effect.
       * @type {Uniform<number>}
       * @default 1.0
       */
      opacity: new Uniform(parameters.opacity !== undefined ? parameters.opacity : 1.0),

      /**
       * The strength of the glowInternalRadius.
       * @type {Uniform<number>}
       * @default 6.0
       */
      glowInternalRadius: new Uniform(parameters.glowInternalRadius !== undefined ? parameters.glowInternalRadius : 6.0),

      /**
       * The glowSharpness.
       * @type {Uniform<number>}
       * @default 0.5
       */
      glowSharpness: new Uniform(parameters.glowSharpness !== undefined ? parameters.glowSharpness : 0.5),

      /**
       * The falloff.
       * @type {Uniform<number>}
       * @default 0.1
       */
      falloff: new Uniform(parameters.falloff !== undefined ? parameters.falloff : 0.1),

      /**
       * The color of the glow.
       * @type {Uniform<Color>}
       * @default new Color(#00d5ff)
       */
      glowColor: new Uniform(parameters.glowColor !== undefined ? new Color(parameters.glowColor) : new Color("#00d5ff")),

    };

    this.setValues(parameters);
    this.depthTest = parameters.depthTest !== undefined ? parameters.depthTest : false;
    this.blending = parameters.blendMode !== undefined ? parameters.blendMode : AdditiveBlending;
    this.transparent = true;
    this.side = parameters.side !== undefined ? parameters.side : DoubleSide;

  }

}

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent} = await importShared('vue');

const _hoisted_1 = { position: [0, 6, 0] };
const _hoisted_2 = ["object"];
const {reactive,watchEffect} = await importShared('vue');
const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fakeGlow",
  setup(__props) {
    const paneControl = new Pane({
      title: "辉光参数",
      expanded: true
    });
    const fakeGlowState = reactive({
      glowColor: "#a058c1",
      falloff: 1.4,
      glowInternalRadius: 3.7,
      glowSharpness: 0,
      opacity: 1,
      side: THREE.FrontSide,
      depthTest: false
    });
    const fgMaterial = new FakeGlowMaterial();
    const fakeGlowMesh = new THREE.Mesh(new THREE.TorusKnotGeometry(4, 3.8, 128, 128), fgMaterial);
    paneControl.addBinding(fakeGlowState, "glowColor", {
      label: "颜色"
    });
    paneControl.addBinding(fakeGlowState, "falloff", {
      label: "衰减",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(fakeGlowState, "glowInternalRadius", {
      label: "内半径",
      min: -5,
      max: 5,
      step: 0.1
    });
    paneControl.addBinding(fakeGlowState, "glowSharpness", {
      label: "清晰度",
      min: 0,
      max: 10,
      step: 0.1
    });
    paneControl.addBinding(fakeGlowState, "opacity", {
      label: "透明",
      min: 0,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(fakeGlowState, "side", {
      label: "材质面",
      options: {
        FrontSide: THREE.FrontSide,
        BackSide: THREE.BackSide,
        DoubleSide: THREE.DoubleSide
      }
    });
    watchEffect(() => {
      fgMaterial.uniforms.falloff.value = fakeGlowState.falloff;
      fgMaterial.uniforms.glowColor.value = new THREE.Color(fakeGlowState.glowColor);
      fgMaterial.uniforms.glowInternalRadius.value = fakeGlowState.glowInternalRadius;
      fgMaterial.uniforms.glowSharpness.value = fakeGlowState.glowSharpness;
      fgMaterial.uniforms.opacity.value = fakeGlowState.opacity;
      fgMaterial.side = fakeGlowState.side;
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        "window-size": "",
        clearColor: 1
      }, {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 25, 25],
            near: 0.1,
            fov: 65
          }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 1.5 }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
            position: [100, 100, 60],
            intensity: 20
          }, null, -1)),
          _createVNode(_unref(Kk), { autoRotate: "" }),
          _cache[4] || (_cache[4] = _createElementVNode("TresGridHelper", { args: [20, 10] }, null, -1)),
          _createElementVNode("TresGroup", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode("TresMesh", null, [
              _createElementVNode("TresTorusKnotGeometry", { args: [4, 0.5, 128, 128] }),
              _createElementVNode("TresMeshPhysicalMaterial", {
                color: "blue",
                roughness: 0.2,
                clearcoat: 1
              })
            ], -1)),
            _createElementVNode("primitive", { object: _unref(fakeGlowMesh) }, null, 8, _hoisted_2)
          ]),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_unref(tk), {
                files: ["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"],
                path: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["path"])
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
//# sourceMappingURL=fakeGlow.B3vOvLVE1767105581793.js.map
