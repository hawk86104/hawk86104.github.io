import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';
import { EffectComposer, RenderPass, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

/**
 * @module GammaCorrectionShader
 * @three_import import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js';
 */

/**
 * Gamma Correction Shader
 *
 * References:
 * - {@link http://en.wikipedia.org/wiki/gamma_correction}.
 *
 * @constant
 * @type {ShaderMaterial~Shader}
 */
const GammaCorrectionShader = {

	name: 'GammaCorrectionShader',

	uniforms: {

		'tDiffuse': { value: null }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = sRGBTransferOETF( tex );

		}`

};

var buildingsPassA_default$1="varying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main(){\n	vUv=uv;\n	vPosition=position;\n	gl_Position=vec4(position,1.);\n}";

var buildingsPassA_default="varying vec2 vUv;\nvarying vec3 vPosition;\nuniform sampler2D tDiffuse;\nuniform sampler2D depthTexture;\n\nuniform mat4 uProjectionInverse;\nuniform mat4 uMatrixWorld;\n\nuniform float time;\nuniform vec3 uColor;\nuniform float uScalenum;\nuniform float uScaleone;\nuniform float uWidth;\nuniform vec2 uPosition;\n\nvec3 WorldPosFromDepth(float depth){\n	float z=(depth-.5)*2.;\n	vec4 clipSpacePosition=vec4(vPosition.xy,z,1.);\n	vec4 viewSpacePosition=uProjectionInverse*clipSpacePosition;\n	viewSpacePosition/=viewSpacePosition.w;\n	vec4 worldSpacePosition=uMatrixWorld*viewSpacePosition;\n	return worldSpacePosition.xyz;\n}\nvec3 WorldPosFromDepth2(float depth){\n	\n	vec4 ndc=vec4(vPosition.x,vPosition.y,((depth-.5)*2.),1.);\n	\n	vec4 worldSpacePosition=uMatrixWorld*uProjectionInverse*ndc;\n	\n	\n	\n	worldSpacePosition/=worldSpacePosition.w;\n	return worldSpacePosition.xyz;\n}\n\nvoid main(){\n	vec4 base=texture2D(tDiffuse,vUv);\n	float depth=texture2D(depthTexture,vUv).r;\n	\n	\n	vec3 pos=WorldPosFromDepth2(depth);\n	pos.x=pos.x+uPosition.x;\n	pos.z=pos.z+uPosition.y;\n	float dis=distance(pos.xz,vec2(0,0));\n	vec3 color=vec3(base);\n	if(pos.y<=0.){\n		discard;\n	}\n	if(dis<uScalenum){\n		vec3 scanT=uColor;\n		float wave=fract((dis-time*10.)/uScaleone);\n		if(wave<uWidth){\n			float p=wave/uWidth;\n			color=mix(color,scanT+.1,p*(1.-(dis/uScalenum)));\n		}\n	}\n	gl_FragColor=vec4(color,1.);\n}";

const {defineComponent:_defineComponent$1} = await importShared('vue');

const THREE = await importShared('three');

const {watchEffect} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "buildingsPassA",
  props: {
    color: { default: "#FFF" },
    uScalenum: { default: 150 },
    uScaleone: { default: 24 },
    uWidth: { default: 1 },
    speed: { default: 1 },
    uPosition: { default: { x: 0, y: 0 } }
  },
  setup(__props) {
    const props = __props;
    const { renderer, scene, camera, sizes } = Fs();
    let width, height = 0;
    let effectComposer = null;
    let shaderPass = null;
    const initEffectComposer = () => {
      effectComposer = new EffectComposer(renderer);
      const depthTexture = new THREE.DepthTexture(width, height);
      effectComposer.readBuffer.depthBuffer = true;
      effectComposer.readBuffer.depthTexture = depthTexture;
      const renderPass = new RenderPass(scene.value, camera.value);
      effectComposer.addPass(renderPass);
      shaderPass = new ShaderPass(
        new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            tDiffuse: { value: null },
            depthTexture: { value: depthTexture },
            uProjectionInverse: {
              value: camera.value.projectionMatrixInverse
            },
            uMatrixWorld: { value: camera.value.matrixWorld },
            uColor: {
              value: new THREE.Color(props.color)
            },
            uScalenum: { value: props.uScalenum },
            uScaleone: { value: props.uScaleone },
            uWidth: { value: props.uWidth },
            uPosition: { value: new THREE.Vector2(props.uPosition.x, props.uPosition.y) }
          },
          vertexShader: buildingsPassA_default$1,
          fragmentShader: buildingsPassA_default
          // transparent: false,
          // depthWrite: false,
          // depthTest: true,
          // side: THREE.DoubleSide,//双面渲染
        })
      );
      effectComposer.addPass(shaderPass);
      const gammaCorrectionShader = new ShaderPass(GammaCorrectionShader);
      effectComposer.addPass(gammaCorrectionShader);
    };
    watchEffect(() => {
      if (sizes.width.value) {
        width = sizes.width.value;
        height = sizes.height.value;
        initEffectComposer();
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (effectComposer) {
        effectComposer.render();
        shaderPass.uniforms.time.value += props.speed / 60;
      }
    });
    watchEffect(() => {
      if (shaderPass) {
        if (props.color) {
          shaderPass.material.uniforms.uColor.value = new THREE.Color(props.color);
        }
        if (props.uScalenum) {
          shaderPass.material.uniforms.uScalenum.value = props.uScalenum;
        }
        if (props.uScaleone) {
          shaderPass.material.uniforms.uScaleone.value = props.uScaleone;
        }
        if (props.uWidth) {
          shaderPass.material.uniforms.uWidth.value = props.uWidth;
        }
        if (props.uPosition) {
          shaderPass.material.uniforms.uPosition.value.set(props.uPosition.x, props.uPosition.y);
        }
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "buildingsPassA",
  setup(__props) {
    const passState = reactive({
      color: "#00b4fb",
      uScalenum: 250,
      uScaleone: 82,
      uWidth: 0.2,
      speed: 10,
      uPosition: { x: 0, y: 0 }
    });
    const paneControl = new Pane({
      title: "后期效果",
      expanded: true
    });
    paneControl.addBinding(passState, "color", { label: "圈颜色" });
    paneControl.addBinding(passState, "uScalenum", {
      label: "最大范围",
      min: 1,
      max: 500,
      step: 10
    });
    paneControl.addBinding(passState, "uScaleone", {
      label: "单条圈间距",
      min: 1,
      max: 100,
      step: 1
    });
    paneControl.addBinding(passState, "uWidth", {
      label: "单条圈宽度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(passState, "speed", {
      label: "速度",
      min: 1,
      max: 20,
      step: 1
    });
    paneControl.addBinding(passState, "uPosition", {
      picker: "inline",
      label: "位置",
      expanded: true,
      x: { min: -1e3, max: 1e3, step: 10 },
      y: { min: -1e3, max: 1e3, step: 10 }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, {
        disableRender: true,
        showAxesHelper: false
      }, {
        ability: _withCtx(() => [
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(passState)), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=buildingsPassA.DY1l75uG1767105581793.js.map
