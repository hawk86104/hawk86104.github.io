import{importShared as h}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Pass as p,FullScreenQuad as r}from"./Pass.CNeFv-CX1767148983502.js";import{CopyShader as i}from"./RenderPass.DewL5X8q1767148983502.js";const s={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`},{HalfFloatType:a,NearestFilter:o,NoBlending:x,ShaderMaterial:n,UniformsUtils:d,WebGLRenderTarget:l}=await h("three");class _ extends p{constructor(e=.96){super(),this.uniforms=d.clone(s.uniforms),this.damp=e,this.compFsMaterial=new n({uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.copyFsMaterial=new n({uniforms:d.clone(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,blending:x,depthTest:!1,depthWrite:!1}),this._textureComp=new l(window.innerWidth,window.innerHeight,{magFilter:o,type:a}),this._textureOld=new l(window.innerWidth,window.innerHeight,{magFilter:o,type:a}),this._compFsQuad=new r(this.compFsMaterial),this._copyFsQuad=new r(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,t,m){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=m.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._copyFsQuad.render(e));const u=this._textureOld;this._textureOld=this._textureComp,this._textureComp=u}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}export{_ as AfterimagePass};
