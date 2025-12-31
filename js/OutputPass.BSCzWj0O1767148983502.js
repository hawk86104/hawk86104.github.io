import{importShared as o}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Pass as n,FullScreenQuad as r}from"./Pass.CNeFv-CX1767148983502.js";const i={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},{ColorManagement:s,RawShaderMaterial:l,UniformsUtils:p,LinearToneMapping:g,ReinhardToneMapping:f,CineonToneMapping:_,AgXToneMapping:u,ACESFilmicToneMapping:h,NeutralToneMapping:M,CustomToneMapping:m,SRGBTransfer:d}=await o("three");class c extends n{constructor(){super(),this.uniforms=p.clone(i.uniforms),this.material=new l({name:i.name,uniforms:this.uniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this._fsQuad=new r(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,a,t){this.uniforms.tDiffuse.value=t.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},s.getTransfer(this._outputColorSpace)===d&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===g?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===f?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===h?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===u?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===M?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===m&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}export{c as OutputPass};
