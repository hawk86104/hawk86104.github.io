import { importShared, Fs, _l, Tz, Kk } from './index.BxB45aCK1767105581793.js';
import { ClearMaskPass, EffectComposer, RenderPass, MaskPass, ShaderPass, CopyShader } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { Pass, FullScreenQuad } from './Pass.Cu0Sc_JX1767105581793.js';

/**
 * @module DigitalGlitch
 * @three_import import { DigitalGlitch } from 'three/addons/shaders/DigitalGlitch.js';
 */

/**
 * Digital glitch shader.
 *
 * @constant
 * @type {ShaderMaterial~Shader}
 */
const DigitalGlitch = {

	uniforms: {

		'tDiffuse': { value: null }, //diffuse texture
		'tDisp': { value: null }, //displacement texture for digital glitch squares
		'byp': { value: 0 }, //apply the glitch ?
		'amount': { value: 0.08 },
		'angle': { value: 0.02 },
		'seed': { value: 0.02 },
		'seed_x': { value: 0.02 }, //-1,1
		'seed_y': { value: 0.02 }, //-1,1
		'distortion_x': { value: 0.5 },
		'distortion_y': { value: 0.6 },
		'col_s': { value: 0.05 }
	},

	vertexShader: /* glsl */`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

	fragmentShader: /* glsl */`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`

};

const {DataTexture,FloatType,MathUtils,RedFormat,ShaderMaterial,UniformsUtils} = await importShared('three');

/**
 * Pass for creating a glitch effect.
 *
 * ```js
 * const glitchPass = new GlitchPass();
 * composer.addPass( glitchPass );
 * ```
 *
 * @augments Pass
 * @three_import import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
 */
class GlitchPass extends Pass {

	/**
	 * Constructs a new glitch pass.
	 *
	 * @param {number} [dt_size=64] - The size of the displacement texture
	 * for digital glitch squares.
	 */
	constructor( dt_size = 64 ) {

		super();

		/**
		 * The pass uniforms.
		 *
		 * @type {Object}
		 */
		this.uniforms = UniformsUtils.clone( DigitalGlitch.uniforms );

		/**
		 * The pass material.
		 *
		 * @type {ShaderMaterial}
		 */
		this.material = new ShaderMaterial( {
			uniforms: this.uniforms,
			vertexShader: DigitalGlitch.vertexShader,
			fragmentShader: DigitalGlitch.fragmentShader
		} );

		/**
		 * Whether to noticeably increase the effect intensity or not.
		 *
		 * @type {boolean}
		 * @default false
		 */
		this.goWild = false;

		// internals

		this._heightMap = this._generateHeightmap( dt_size );
		this.uniforms[ 'tDisp' ].value = this.heightMap;

		this._fsQuad = new FullScreenQuad( this.material );

		this._curF = 0;
		this._randX = 0;

		this._generateTrigger();

	}

	/**
	 * Performs the glitch pass.
	 *
	 * @param {WebGLRenderer} renderer - The renderer.
	 * @param {WebGLRenderTarget} writeBuffer - The write buffer. This buffer is intended as the rendering
	 * destination for the pass.
	 * @param {WebGLRenderTarget} readBuffer - The read buffer. The pass can access the result from the
	 * previous pass from this buffer.
	 * @param {number} deltaTime - The delta time in seconds.
	 * @param {boolean} maskActive - Whether masking is active or not.
	 */
	render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

		this.uniforms[ 'tDiffuse' ].value = readBuffer.texture;
		this.uniforms[ 'seed' ].value = Math.random(); // default seeding
		this.uniforms[ 'byp' ].value = 0;

		if ( this._curF % this._randX == 0 || this.goWild == true ) {

			this.uniforms[ 'amount' ].value = Math.random() / 30;
			this.uniforms[ 'angle' ].value = MathUtils.randFloat( - Math.PI, Math.PI );
			this.uniforms[ 'seed_x' ].value = MathUtils.randFloat( -1, 1 );
			this.uniforms[ 'seed_y' ].value = MathUtils.randFloat( -1, 1 );
			this.uniforms[ 'distortion_x' ].value = MathUtils.randFloat( 0, 1 );
			this.uniforms[ 'distortion_y' ].value = MathUtils.randFloat( 0, 1 );
			this._curF = 0;
			this._generateTrigger();

		} else if ( this._curF % this._randX < this._randX / 5 ) {

			this.uniforms[ 'amount' ].value = Math.random() / 90;
			this.uniforms[ 'angle' ].value = MathUtils.randFloat( - Math.PI, Math.PI );
			this.uniforms[ 'distortion_x' ].value = MathUtils.randFloat( 0, 1 );
			this.uniforms[ 'distortion_y' ].value = MathUtils.randFloat( 0, 1 );
			this.uniforms[ 'seed_x' ].value = MathUtils.randFloat( -0.3, 0.3 );
			this.uniforms[ 'seed_y' ].value = MathUtils.randFloat( -0.3, 0.3 );

		} else if ( this.goWild == false ) {

			this.uniforms[ 'byp' ].value = 1;

		}

		this._curF ++;

		if ( this.renderToScreen ) {

			renderer.setRenderTarget( null );
			this._fsQuad.render( renderer );

		} else {

			renderer.setRenderTarget( writeBuffer );
			if ( this.clear ) renderer.clear();
			this._fsQuad.render( renderer );

		}

	}

	/**
	 * Frees the GPU-related resources allocated by this instance. Call this
	 * method whenever the pass is no longer used in your app.
	 */
	dispose() {

		this.material.dispose();

		this.heightMap.dispose();

		this._fsQuad.dispose();

	}

	// internals

	_generateTrigger() {

		this._randX = MathUtils.randInt( 120, 240 );

	}

	_generateHeightmap( dt_size ) {

		const data_arr = new Float32Array( dt_size * dt_size );
		const length = dt_size * dt_size;

		for ( let i = 0; i < length; i ++ ) {

			const val = MathUtils.randFloat( 0, 1 );
			data_arr[ i ] = val;

		}

		const texture = new DataTexture( data_arr, dt_size, dt_size, RedFormat, FloatType );
		texture.needsUpdate = true;
		return texture;

	}

}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const {watchEffect} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "MaskPass",
  setup(__props) {
    const clearMask = new ClearMaskPass();
    const { camera, renderer, scene, sizes } = Fs();
    let effectComposer = null;
    const params = {
      threshold: 0,
      strength: 0.972,
      // 强度
      radius: 0.21
      // 半径
    };
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      effectComposer.addPass(renderScene);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer.addPass(bloomPass);
    };
    const glitchPassEffect = (scene3, camera2, renderer2, width, height) => {
      const spotLight1 = new THREE.DirectionalLight(16777215);
      spotLight1.position.set(550, 100, 550);
      spotLight1.intensity = 1.6;
      scene3.add(spotLight1);
      let meshCurve = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
      meshCurve.position.set(1, 2, 4);
      scene3.add(meshCurve);
      var renderPass2 = new RenderPass(scene3, camera2);
      renderPass2.clear = false;
      effectComposer.addPass(renderPass2);
      const maskPass = new MaskPass(scene3, camera2);
      effectComposer.addPass(maskPass);
      const glitchPass = new GlitchPass();
      effectComposer.addPass(glitchPass);
      effectComposer.addPass(clearMask);
    };
    const endEffectCopy = () => {
      const effectCopy = new ShaderPass(CopyShader);
      effectCopy.renderToScreen = true;
      effectComposer.addPass(effectCopy);
    };
    watchEffect(() => {
      if (sizes.width.value && !effectComposer) {
        effectComposer = new EffectComposer(renderer);
        effectComposer.renderTarget1.stencilBuffer = true;
        effectComposer.renderTarget2.stencilBuffer = true;
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        glitchPassEffect(new THREE.Scene(), camera.value, renderer, sizes.width.value, sizes.height.value);
        endEffectCopy();
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        renderer.autoClear = false;
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(Tz), {
        args: [1, 1, 1],
        color: "orange",
        position: [3, 2, 1]
      });
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "MaskPass",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        renderMode: "manual",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=MaskPass.y13L3XLi1767105581793.js.map
