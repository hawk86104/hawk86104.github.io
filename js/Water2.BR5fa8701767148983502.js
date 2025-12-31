import{importShared as B}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Reflector as P}from"./Reflector.D4wJNKNR1767148983502.js";const{Color:F,Matrix4:T,Mesh:N,PerspectiveCamera:H,Plane:E,Quaternion:V,ShaderMaterial:L,UniformsUtils:A,Vector3:v,Vector4:O,WebGLRenderTarget:$,HalfFloatType:q}=await B("three");class y extends N{constructor(h,t={}){super(h),this.isRefractor=!0,this.type="Refractor",this.camera=new H;const n=this,S=t.color!==void 0?new F(t.color):new F(8355711),M=t.textureWidth||512,b=t.textureHeight||512,W=t.clipBias||0,m=t.shader||y.RefractorShader,_=t.multisample!==void 0?t.multisample:4,l=this.camera;l.matrixAutoUpdate=!1,l.userData.refractor=!0;const R=new E,f=new T,d=new $(M,b,{samples:_,type:q});this.material=new L({name:m.name!==void 0?m.name:"unspecified",uniforms:A.clone(m.uniforms),vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,transparent:!0}),this.material.uniforms.color.value=S,this.material.uniforms.tDiffuse.value=d.texture,this.material.uniforms.textureMatrix.value=f;const C=function(){const e=new v,a=new v,r=new T,i=new v,c=new v;return function(s){return e.setFromMatrixPosition(n.matrixWorld),a.setFromMatrixPosition(s.matrixWorld),i.subVectors(e,a),r.extractRotation(n.matrixWorld),c.set(0,0,1),c.applyMatrix4(r),i.dot(c)<0}}(),w=function(){const e=new v,a=new v,r=new V,i=new v;return function(){n.matrixWorld.decompose(a,r,i),e.set(0,0,1).applyQuaternion(r).normalize(),e.negate(),R.setFromNormalAndCoplanarPoint(e,a)}}(),g=function(){const e=new E,a=new O,r=new O;return function(c){l.matrixWorld.copy(c.matrixWorld),l.matrixWorldInverse.copy(l.matrixWorld).invert(),l.projectionMatrix.copy(c.projectionMatrix),l.far=c.far,e.copy(R),e.applyMatrix4(l.matrixWorldInverse),a.set(e.normal.x,e.normal.y,e.normal.z,e.constant);const o=l.projectionMatrix;r.x=(Math.sign(a.x)+o.elements[8])/o.elements[0],r.y=(Math.sign(a.y)+o.elements[9])/o.elements[5],r.z=-1,r.w=(1+o.elements[10])/o.elements[14],a.multiplyScalar(2/a.dot(r)),o.elements[2]=a.x,o.elements[6]=a.y,o.elements[10]=a.z+1-W,o.elements[14]=a.w}}();function p(e){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(e.projectionMatrix),f.multiply(e.matrixWorldInverse),f.multiply(n.matrixWorld)}function x(e,a,r){n.visible=!1;const i=e.getRenderTarget(),c=e.xr.enabled,o=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(d),e.autoClear===!1&&e.clear(),e.render(a,l),e.xr.enabled=c,e.shadowMap.autoUpdate=o,e.setRenderTarget(i);const s=r.viewport;s!==void 0&&e.state.viewport(s),n.visible=!0}this.onBeforeRender=function(e,a,r){r.userData.refractor!==!0&&C(r)&&(w(),p(r),g(r),x(e,a,r))},this.getRenderTarget=function(){return d},this.dispose=function(){d.dispose(),n.material.dispose()}}}y.RefractorShader={name:"RefractorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const{Clock:I,Color:z,Matrix4:k,Mesh:Q,RepeatWrapping:j,ShaderMaterial:G,TextureLoader:X,UniformsLib:J,UniformsUtils:K,Vector2:Y,Vector4:Z}=await B("three");class D extends Q{constructor(h,t={}){super(h),this.isWater=!0,this.type="Water";const n=this,S=t.color!==void 0?new z(t.color):new z(16777215),M=t.textureWidth!==void 0?t.textureWidth:512,b=t.textureHeight!==void 0?t.textureHeight:512,W=t.clipBias!==void 0?t.clipBias:0,m=t.flowDirection!==void 0?t.flowDirection:new Y(1,0),_=t.flowSpeed!==void 0?t.flowSpeed:.03,l=t.reflectivity!==void 0?t.reflectivity:.02,R=t.scale!==void 0?t.scale:1,f=t.shader!==void 0?t.shader:D.WaterShader,d=new X,C=t.flowMap||void 0,w=t.normalMap0||d.load("textures/water/Water_1_M_Normal.jpg"),g=t.normalMap1||d.load("textures/water/Water_2_M_Normal.jpg"),p=.15,x=p*.5,e=new k,a=new I;if(P===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(y===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const r=new P(h,{textureWidth:M,textureHeight:b,clipBias:W}),i=new y(h,{textureWidth:M,textureHeight:b,clipBias:W});r.matrixAutoUpdate=!1,i.matrixAutoUpdate=!1,this.material=new G({name:f.name,uniforms:K.merge([J.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),C!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:C}):this.material.uniforms.flowDirection={type:"v2",value:m},w.wrapS=w.wrapT=j,g.wrapS=g.wrapT=j,this.material.uniforms.tReflectionMap.value=r.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=i.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=w,this.material.uniforms.tNormalMap1.value=g,this.material.uniforms.color.value=S,this.material.uniforms.reflectivity.value=l,this.material.uniforms.textureMatrix.value=e,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=x,this.material.uniforms.config.value.z=x,this.material.uniforms.config.value.w=R;function c(s){e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(s.projectionMatrix),e.multiply(s.matrixWorldInverse),e.multiply(n.matrixWorld)}function o(){const s=a.getDelta(),u=n.material.uniforms.config;u.value.x+=_*s,u.value.y=u.value.x+x,u.value.x>=p?(u.value.x=0,u.value.y=x):u.value.y>=p&&(u.value.y=u.value.y-p)}this.onBeforeRender=function(s,u,U){c(U),o(),n.visible=!1,r.matrixWorld.copy(n.matrixWorld),i.matrixWorld.copy(n.matrixWorld),r.onBeforeRender(s,u,U),i.onBeforeRender(s,u,U),n.visible=!0}}}D.WaterShader={name:"WaterShader",uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Z}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};export{D as Water};
