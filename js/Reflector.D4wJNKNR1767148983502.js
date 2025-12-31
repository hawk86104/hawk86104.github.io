import{importShared as V}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";const{Color:R,Matrix4:S,Mesh:k,PerspectiveCamera:z,Plane:B,ShaderMaterial:H,UniformsUtils:I,Vector3:c,Vector4:U,WebGLRenderTarget:q,HalfFloatType:E}=await V("three");class M extends k{constructor(W,o={}){super(W),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new z;const l=this,P=o.color!==void 0?new R(o.color):new R(8355711),F=o.textureWidth||512,_=o.textureHeight||512,T=o.clipBias||0,d=o.shader||M.ReflectorShader,j=o.multisample!==void 0?o.multisample:4,i=new B,n=new c,s=new c,w=new c,u=new S,v=new c(0,0,-1),r=new U,m=new c,h=new c,f=new U,p=new S,t=this.camera,b=new q(F,_,{samples:j,type:E}),g=new H({name:d.name!==void 0?d.name:"unspecified",uniforms:I.clone(d.uniforms),fragmentShader:d.fragmentShader,vertexShader:d.vertexShader});g.uniforms.tDiffuse.value=b.texture,g.uniforms.color.value=P,g.uniforms.textureMatrix.value=p,this.material=g,this.onBeforeRender=function(e,A,x){if(s.setFromMatrixPosition(l.matrixWorld),w.setFromMatrixPosition(x.matrixWorld),u.extractRotation(l.matrixWorld),n.set(0,0,1),n.applyMatrix4(u),m.subVectors(s,w),m.dot(n)>0===!0&&this.forceUpdate===!1)return;m.reflect(n).negate(),m.add(s),u.extractRotation(x.matrixWorld),v.set(0,0,-1),v.applyMatrix4(u),v.add(w),h.subVectors(s,v),h.reflect(n).negate(),h.add(s),t.position.copy(m),t.up.set(0,1,0),t.up.applyMatrix4(u),t.up.reflect(n),t.lookAt(h),t.far=x.far,t.updateMatrixWorld(),t.projectionMatrix.copy(x.projectionMatrix),p.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),p.multiply(t.projectionMatrix),p.multiply(t.matrixWorldInverse),p.multiply(l.matrixWorld),i.setFromNormalAndCoplanarPoint(n,s),i.applyMatrix4(t.matrixWorldInverse),r.set(i.normal.x,i.normal.y,i.normal.z,i.constant);const a=t.projectionMatrix;f.x=(Math.sign(r.x)+a.elements[8])/a.elements[0],f.y=(Math.sign(r.y)+a.elements[9])/a.elements[5],f.z=-1,f.w=(1+a.elements[10])/a.elements[14],r.multiplyScalar(2/r.dot(f)),a.elements[2]=r.x,a.elements[6]=r.y,a.elements[10]=r.z+1-T,a.elements[14]=r.w,l.visible=!1;const C=e.getRenderTarget(),D=e.xr.enabled,O=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(b),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(A,t),e.xr.enabled=D,e.shadowMap.autoUpdate=O,e.setRenderTarget(C);const y=x.viewport;y!==void 0&&e.state.viewport(y),l.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),l.material.dispose()}}}M.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};export{M as Reflector};
