import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { RenderPass, EffectComposer, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { FilmPass } from './FilmPass.DS4qkFAO1767105581793.js';
import { AfterimagePass } from './AfterimagePass.tZwwNUob1767105581793.js';

const {Vector2} = await importShared('three');


/**
 * @module FXAAShader
 * @three_import import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
 */

/**
 * FXAA algorithm from NVIDIA, C# implementation by Jasper Flick, GLSL port by Dave Hoskins.
 *
 * References:
 * - {@link http://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf}.
 * - {@link https://catlikecoding.com/unity/tutorials/advanced-rendering/fxaa/}.
 *
 * @constant
 * @type {ShaderMaterial~Shader}
 */
const FXAAShader = {

	name: 'FXAAShader',

	uniforms: {

		'tDiffuse': { value: null },
		'resolution': { value: new Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`

};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const {watchEffect: watchEffect$1,ref: ref$1} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ecLayerMultiple",
  setup(__props) {
    const normalBox = ref$1();
    const shineBox = ref$1();
    const filmBox = ref$1();
    const glitchSphere = ref$1();
    watchEffect$1(() => {
      if (normalBox.value) {
        normalBox.value.layers.set(0);
      }
      if (shineBox.value) {
        shineBox.value.layers.set(1);
      }
      if (filmBox.value) {
        filmBox.value.layers.set(2);
      }
      if (glitchSphere.value) {
        glitchSphere.value.layers.set(3);
      }
    });
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      strength: 0.572,
      // 强度
      radius: 0.51,
      // 半径
      threshold: 0
    };
    let renderScene = null;
    let bloomEffectComposer = null;
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      renderScene = new RenderPass(scene2, camera2);
      bloomEffectComposer = new EffectComposer(renderer2);
      bloomEffectComposer.renderToScreen = false;
      bloomEffectComposer.addPass(renderScene);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      bloomEffectComposer.addPass(bloomPass);
    };
    let filmEffectComposer = null;
    const filmPassEffect = (renderer2) => {
      filmEffectComposer = new EffectComposer(renderer2);
      filmEffectComposer.renderToScreen = false;
      filmEffectComposer.addPass(renderScene);
      const filmPass = new FilmPass();
      filmEffectComposer.addPass(filmPass);
    };
    let afterImageEffectComposer = null;
    const afterImagePassEffect = (renderer2) => {
      afterImageEffectComposer = new EffectComposer(renderer2);
      afterImageEffectComposer.renderToScreen = false;
      afterImageEffectComposer.addPass(renderScene);
      const afterImagePass = new AfterimagePass();
      afterImageEffectComposer.addPass(afterImagePass);
    };
    let finalComposer = null;
    const makeFinalComposer = (renderer2) => {
      finalComposer = new EffectComposer(renderer2);
      finalComposer.addPass(renderScene);
      const finalShader = new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: bloomEffectComposer.renderTarget2.texture },
          filmTexture: { value: filmEffectComposer.renderTarget2.texture },
          glitchTexture: { value: afterImageEffectComposer.renderTarget2.texture }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,
        fragmentShader: `
            uniform sampler2D baseTexture;
            uniform sampler2D bloomTexture;
						uniform sampler2D filmTexture;
						uniform sampler2D glitchTexture;
            varying vec2 vUv;
            void main() {
                gl_FragColor = ( 
									vec4( 1.0 ) * texture2D( baseTexture, vUv )  + 
									vec4( 1.0 ) * texture2D( bloomTexture, vUv ) + 
									vec4( 1.0 ) * texture2D( filmTexture, vUv ) + 
									vec4( 1.0 ) * texture2D( glitchTexture, vUv ) 
								);
            }
        `,
        defines: {}
      });
      const finalPass = new ShaderPass(finalShader, "baseTexture");
      finalPass.needsSwap = true;
      finalComposer.addPass(finalPass);
      const { width, height } = renderer2.getDrawingBufferSize(new THREE.Vector2());
      const fxaaPass = new ShaderPass(FXAAShader);
      fxaaPass.uniforms.resolution.value.set(1 / width, 1 / height);
      finalComposer.addPass(fxaaPass);
    };
    watchEffect$1(() => {
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        afterImagePassEffect(renderer);
        filmPassEffect(renderer);
        makeFinalComposer(renderer);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (bloomEffectComposer && finalComposer && camera.value) {
        renderer.clear();
        camera.value.layers.set(1);
        bloomEffectComposer.render();
        camera.value.layers.set(2);
        filmEffectComposer.render();
        camera.value.layers.set(3);
        afterImageEffectComposer.render();
        renderer.clearDepth();
        camera.value.layers.set(0);
        finalComposer.render(scene.value, camera.value);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "normalBox",
          ref: normalBox,
          position: [3, 2, 1]
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "shineBox",
          ref: shineBox,
          position: [0, 2, -4]
        }, [..._cache[1] || (_cache[1] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "filmBox",
          ref: filmBox,
          position: [1, 2, 3]
        }, [..._cache[2] || (_cache[2] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "glitchSphere",
          ref: glitchSphere,
          position: [-3, 2, 0]
        }, [..._cache[3] || (_cache[3] = [
          _createElementVNode$1("TresSphereGeometry", { args: [0.8, 32, 16] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {watchEffect,ref} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "effectComposerMultiple",
  setup(__props) {
    const tcRef = ref();
    watchEffect(() => {
      if (tcRef.value) {
        let renderer = tcRef.value.context.renderer.instance;
        renderer.autoClear = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        renderMode: "manual",
        "window-size": "",
        ref_key: "tcRef",
        ref: tcRef
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=effectComposerMultiple.B1gD8mw11767105581793.js.map
