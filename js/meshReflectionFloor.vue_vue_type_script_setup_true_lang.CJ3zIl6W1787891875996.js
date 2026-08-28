import{importShared as v}from"./3d-tiles-renderer.CM78ltZU1787891875996.js";import{useTres as oe,useLoop as H,useTextures as Ie,useGLTF as J,useAnimations as je,useTexture as Fe,customShaderMaterial_default as He,useTresContext as Qe}from"./index.DDKel1FR1787891875996.js";import{useFBO as de,useTexture as Xe}from"./index.vue_vue_type_script_setup_true_lang.DncFgmiJ1787891875996.js";import"./index.vue_vue_type_script_setup_true_lang.D6CsFdOo1787891875996.js";import{instance as se}from"./Resource.BYFk1opT1787891875996.js";import{gsapWithCSS as ue}from"./index.C1NmcAq51787891875996.js";import{EffectComposer as Ne,RenderPass as Oe,ShaderPass as Ye}from"./RenderPass.C4Vs_78w1787891875996.js";import{UnrealBloomPass as Ge}from"./UnrealBloomPass.gzCYBE5D1787891875996.js";import{BatchedRenderer as Ze,QuarksLoader as Je,ConstantValue as Ke,ConstantColor as qe}from"./three.quarks.esm._B7Yyd4H1787891875996.js";var et=Object.defineProperty,tt=(x,e,n)=>e in x?et(x,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):x[e]=n,re=(x,e,n)=>(tt(x,typeof e!="symbol"?e+"":e,n),n);const{OrthographicCamera:at,PlaneGeometry:ot,Mesh:nt}=await v("three");class ve{constructor(e){re(this,"camera",new at(-1,1,1,-1,0,1)),re(this,"geometry",new ot(2,2)),re(this,"mesh"),this.mesh=new nt(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}const st={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
    varying vec2 vUv;

    void main() {

    	vUv = uv;
    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`
    uniform float opacity;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );
    	gl_FragColor = opacity * texel;

    }
  `},{BackSide:rt,BoxGeometry:it,InstancedMesh:lt,Mesh:O,MeshLambertMaterial:ct,MeshStandardMaterial:he,PointLight:pt,Scene:mt,Object3D:ut}=await v("three");class fe extends mt{constructor(){super();const e=new it;e.deleteAttribute("uv");const n=new he({side:rt}),o=new he,l=new pt(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const a=new O(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const s=new lt(e,o,6),i=new ut;i.position.set(-10.906,2.009,1.846),i.rotation.set(0,-.195,0),i.scale.set(2.328,7.905,4.651),i.updateMatrix(),s.setMatrixAt(0,i.matrix),i.position.set(-5.607,-.754,-.758),i.rotation.set(0,.994,0),i.scale.set(1.97,1.534,3.955),i.updateMatrix(),s.setMatrixAt(1,i.matrix),i.position.set(6.167,.857,7.803),i.rotation.set(0,.561,0),i.scale.set(3.927,6.285,3.687),i.updateMatrix(),s.setMatrixAt(2,i.matrix),i.position.set(-2.017,.018,6.124),i.rotation.set(0,.333,0),i.scale.set(2.002,4.566,2.064),i.updateMatrix(),s.setMatrixAt(3,i.matrix),i.position.set(2.291,-.756,-2.621),i.rotation.set(0,-.286,0),i.scale.set(1.546,1.552,1.496),i.updateMatrix(),s.setMatrixAt(4,i.matrix),i.position.set(-2.193,-.369,-5.547),i.rotation.set(0,.516,0),i.scale.set(3.875,3.487,2.986),i.updateMatrix(),s.setMatrixAt(5,i.matrix),this.add(s);const f=new O(e,Q(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const t=new O(e,Q(50));t.position.set(-16.109,18.021,-8.207),t.scale.set(.1,2.425,2.751),this.add(t);const r=new O(e,Q(17));r.position.set(14.904,12.198,-1.832),r.scale.set(.15,4.265,6.331),this.add(r);const p=new O(e,Q(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const S=new O(e,Q(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const h=new O(e,Q(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Q(x){return new ct({color:0,emissive:16777215,emissiveIntensity:x})}const ft=`

	// Without original size argument for power of two targets
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level ) {

		// the fraction of the uv space used by the target mip
		float targetSubview = 1.0 / pow( 2.0, float( level ) );
		float widthRatio = 2.0 / 3.0;
		vec2 scaledDimensions = vec2( targetSubview * widthRatio, targetSubview );

		// all levels > 0 are on the right third of the texture
		// y is offset from the bottom
		vec2 offset = vec2(
			level > 0 ? widthRatio : 0.0,
			level > 0 ? targetSubview : 0.0
		);

		vec2 samplePoint = mix( offset, offset + scaledDimensions, uv );
		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel );

		return mix( minValue, maxValue, ratio );

	}

	// With original size argument
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level, vec2 originalPixelSize ) {

		float floatLevel = float( level );
		vec2 atlasSize;
		atlasSize.x = floor( originalPixelSize.x * 1.5 );
		atlasSize.y = originalPixelSize.y;

		// we stop making mip maps when one dimension == 1
		float maxLevel = min( floor( log2( originalPixelSize.x ) ), floor( log2( originalPixelSize.y ) ) );
		floatLevel = min( floatLevel, maxLevel );

		// use inverse pow of 2 to simulate right bit shift operator
		vec2 currentPixelDimensions = floor( originalPixelSize / pow( 2.0, floatLevel ) );
		vec2 pixelOffset = vec2(
			floatLevel > 0.0 ? originalPixelSize.x : 0.0,
			floatLevel > 0.0 ? currentPixelDimensions.y : 0.0
		);

		// "minPixel / atlasSize" samples the top left piece of the first pixel
		// "maxPixel / atlasSize" samples the bottom right piece of the last pixel
		vec2 minPixel = pixelOffset;
		vec2 maxPixel = pixelOffset + currentPixelDimensions;
		vec2 samplePoint = mix( minPixel, maxPixel, uv );
		samplePoint /= atlasSize;

		vec2 halfPixelSize = 1.0 / ( 2.0 * atlasSize );
		samplePoint = min( samplePoint, maxPixel / atlasSize - halfPixelSize );
		samplePoint = max( samplePoint, minPixel / atlasSize + halfPixelSize );

		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level, vec2 originalPixelSize ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel, originalPixelSize );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel, originalPixelSize );

		return mix( minValue, maxValue, ratio );

	}

`,{UniformsUtils:dt,Vector2:ge}=await v("three");function Y(x){const e={...x};return"defines"in x&&(e.defines={...x.defines}),"uniforms"in x&&(e.uniforms=dt.clone(x.uniforms)),e}const vt={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new ge},parentMapSize:{value:new ge},parentLevel:{value:0}},vertexShader:`
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D map;
		uniform int parentLevel;
		uniform vec2 parentMapSize;
		uniform vec2 originalMapSize;

		${ft}

		#if X_IS_EVEN && Y_IS_EVEN

		#define SAMPLES 4
		#define WIDTH 2
		#define HEIGHT 2

		#elif X_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 2
		#define HEIGHT 3

		#elif Y_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 3
		#define HEIGHT 2

		#else

		#define SAMPLES 9
		#define WIDTH 3
		#define HEIGHT 3

		#endif

		vec4 sampleAt( vec2 uv ) {

			return packedTexture2DLOD( map, uv, parentLevel, originalMapSize );

		}

		void main() {

			vec2 childMapSize = parentMapSize / 2.0;
			// vec2 childPixelSize = 1.0 / childMapSize;
			// vec2 halfChildPixelSize = childPixelSize / 2.0;
			vec2 childPixelPos = floor( vUv * childMapSize );

			vec2 parentPixelSize = 1.0 / parentMapSize;
			vec2 halfParentPixelSize = parentPixelSize / 2.0;
			vec2 parentPixelPos = childPixelPos * 2.0;

			vec2 baseUv = ( parentPixelPos / parentMapSize ) + halfParentPixelSize;

			vec4 samples[ SAMPLES ];
			float weights[ SAMPLES ];

			#if X_IS_EVEN && Y_IS_EVEN

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = 0.25;
			weights[ 1 ] = 0.25;
			weights[ 2 ] = 0.25;
			weights[ 3 ] = 0.25;

			#elif X_IS_EVEN

			float wx0 = 0.5;
			float wx1 = 0.5;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );

			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			samples[ 4 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;

			weights[ 2 ] = wx0 * wy1;
			weights[ 3 ] = wx1 * wy1;

			weights[ 4 ] = wx0 * wy2;
			weights[ 5 ] = wx1 * wy2;

			#elif Y_IS_EVEN

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float wy0 = 0.5;
			float wy1 = 0.5;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			#else

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			samples[ 6 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 7 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );
			samples[ 8 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			weights[ 6 ] = wx0 * wy2;
			weights[ 7 ] = wx1 * wy2;
			weights[ 8 ] = wx2 * wy2;

			#endif

			<mipmap_logic>

		}
	`},{Color:ht,ShaderMaterial:Z,MathUtils:we,WebGLRenderTarget:gt,NearestFilter:xe}=await v("three"),_e=new ht;class wt{constructor(e){e||(e=`

				#pragma unroll_loop
				for ( int i = 0; i < SAMPLES; i ++ ) {

					gl_FragColor += samples[ i ] * weights[ i ];

				}

			`);const n=Y(vt);n.fragmentShader=n.fragmentShader.replace(/<mipmap_logic>/g,e);const o=new Array(4);o[0]=new Z(Y(n)),o[0].defines.X_IS_EVEN=0,o[0].defines.Y_IS_EVEN=0,o[1]=new Z(Y(n)),o[1].defines.X_IS_EVEN=1,o[1].defines.Y_IS_EVEN=0,o[2]=new Z(Y(n)),o[2].defines.X_IS_EVEN=0,o[2].defines.Y_IS_EVEN=1,o[3]=new Z(Y(n)),o[3].defines.X_IS_EVEN=1,o[3].defines.Y_IS_EVEN=1;const l=new gt;l.texture.minFilter=xe,l.texture.magFilter=xe,this._swapTarget=l,this._copyQuad=new ve(new Z(st)),this._mipQuad=new ve(null),this._mipMaterials=o}update(e,n,o,l=!1){e.isWebGLRenderTarget&&(e=e.texture);const a=o.autoClear,s=o.getClearAlpha(),i=o.getRenderTarget();o.getClearColor(_e);const f=this._copyQuad,t=this._mipQuad,r=this._swapTarget,p=this._mipMaterials;let S,h;l?(S=we.floorPowerOfTwo(e.image.width),h=we.floorPowerOfTwo(e.image.height)):(S=Math.floor(e.image.width),h=Math.floor(e.image.height));const E=Math.floor(S*1.5),M=Math.floor(h);n.setSize(E,M),r.texture.type!==n.texture.type?(r.dispose(),r.copy(n),r.texture.image={...r.texture.image}):r.setSize(E,M),o.autoClear=!1,o.setClearColor(0),o.setClearAlpha(),f.material.uniforms.tDiffuse.value=e,f.camera.setViewOffset(S,h,0,0,E,M),o.setRenderTarget(n),o.clear(),f.render(o),o.setRenderTarget(r),o.clear(),f.render(o);let P=S,y=h,u=0;for(;P>1&&y>1;){const d=(P%2===0?1:0)|(y%2===0?2:0),_=p[d];_.uniforms.map.value=r.texture,_.uniforms.parentLevel.value=u,_.uniforms.parentMapSize.value.set(P,y),_.uniforms.originalMapSize.value.set(S,h),t.material=_,P=Math.floor(P/2),y=Math.floor(y/2);const b=M-2*y;o.setRenderTarget(n),t.camera.setViewOffset(P,y,-S,-b,E,M),t.render(o),o.setRenderTarget(r),_.uniforms.map.value=n.texture,t.render(o),u++}return o.setRenderTarget(i),o.setClearAlpha(s),o.setClearColor(_e),o.autoClear=a,u+1}dispose(){this._swapTarget.dispose(),this._mipQuad.dispose(),this._copyQuad.dispose(),this._mipMaterials.forEach(e=>e.dispose())}}const{defineComponent:xt}=await v("vue"),k=await v("three"),Ba=xt({__name:"reflectorMipMap",props:{parent:{},resolution:{default:512},ignoreObjects:{default:[]}},setup(x,{expose:e}){const n=x,o=new k.Plane,l=new k.Matrix4,a=new k.PerspectiveCamera,s=new wt,i=de({width:n.resolution,height:n.resolution,settings:{type:k.UnsignedByteType}}),f=de({width:n.resolution,height:n.resolution,settings:{type:k.UnsignedByteType}}),{camera:t,renderer:r,scene:p}=oe(),S=()=>{if(!t.value)return;o.set(new k.Vector3(0,1,0),0),o.applyMatrix4(n.parent.matrixWorld),a.copy(t.value);const E=new k.Vector3(0,0,1).clone().negate(),M=t.value.getWorldPosition(new k.Vector3);E.reflect(o.normal);const P=new k.Vector3;o.projectPoint(M,P);const y=P.clone();y.sub(M),y.add(P),a.position.copy(y);const u=new k.Vector3(0,0,-1);u.applyQuaternion(t.value.getWorldQuaternion(new k.Quaternion)),u.add(M);const m=new k.Vector3;n.parent.getWorldPosition(m),m.sub(u),m.reflect(o.normal).negate(),m.add(n.parent.getWorldPosition(new k.Vector3)),a.up.set(0,1,0),a.applyQuaternion(t.value.getWorldQuaternion(new k.Quaternion)),a.up.reflect(o.normal),a.lookAt(m),a.updateMatrixWorld();const c=new k.Matrix4;c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),c.multiply(a.projectionMatrix),c.multiply(a.matrixWorldInverse),l.copy(c),o.applyMatrix4(a.matrixWorldInverse);const d=new k.Vector4(o.normal.x,o.normal.y,o.normal.z,o.constant),_=a.projectionMatrix,b=new k.Vector4;b.x=(Math.sign(d.x)+_.elements[8])/_.elements[0],b.y=(Math.sign(d.y)+_.elements[9])/_.elements[5],b.z=-1,b.w=(1+_.elements[10])/_.elements[14],d.multiplyScalar(2/d.dot(b)),_.elements[2]=d.x,_.elements[6]=d.y,_.elements[10]=d.z+1,_.elements[14]=d.w;const C=r.getRenderTarget();r.setRenderTarget(i.value),r.state.buffers.depth.setMask(!0),r.autoClear===!1&&r.clear(),n.ignoreObjects.forEach(R=>R.visible=!1),r.render(p.value,a),n.ignoreObjects.forEach(R=>R.visible=!0),r.setRenderTarget(C)},{onBeforeRender:h}=H();return h(()=>{S(),i.value&&f.value&&r&&s.update(i.value.texture,f.value,r)}),e({matrix:l,renderTarget:f}),(E,M)=>null}}),{withAsyncContext:_t,defineComponent:St}=await v("vue"),{createElementVNode:ie,unref:q,openBlock:yt,createElementBlock:Mt}=await v("vue"),Pt=["rotateX","receiveShadow"],bt=["color","map","normalMap","metalnessMap","roughnessMap","metalness","roughness","normalScale","side"],{watch:Se}=await v("vue"),X=await v("three"),La=St({__name:"rubberTiles",props:{color:{default:"#FFFFFF"},repeat:{default:{x:1,y:1}},metalness:{default:1},roughness:{default:.66},normalScale:{default:1},receiveShadow:{type:Boolean,default:!1}},async setup(x){let e,n;const o=x,{textures:l}=([e,n]=_t(()=>Ie(["./plugins/floor/image/rubber_tiles_diff_1k.jpg","./plugins/floor/image/rubber_tiles_nor_gl_1k.jpg","./plugins/floor/image/rubber_tiles_arm_1k.jpg"])),e=await e,n(),e);return Se([l],([a])=>{if(a&&a.length)for(let s=0;s<a.length;s++)a[s].colorSpace=X.LinearSRGBColorSpace,a[s].wrapS=X.RepeatWrapping,a[s].wrapT=X.RepeatWrapping,a[s].magFilter=X.LinearFilter,a[s].minFilter=X.LinearMipmapLinearFilter,a[s].repeat.set(o.repeat.x,o.repeat.y)}),Se(()=>o.repeat,a=>{for(let s=0;s<l.value.length;s++)l.value[s].repeat.set(a.x,a.y)},{deep:!0}),(a,s)=>(yt(),Mt("TresGroup",null,[ie("TresMesh",{rotateX:-Math.PI/2,receiveShadow:a.receiveShadow},[s[0]||(s[0]=ie("TresPlaneGeometry",{args:[10,10]},null,-1)),ie("TresMeshStandardMaterial",{color:o.color,map:q(l)[0],normalMap:q(l)[1],metalnessMap:q(l)[2],roughnessMap:q(l)[2],metalness:a.metalness,roughness:a.roughness,normalScale:a.normalScale,side:X.DoubleSide},null,8,bt)],8,Pt)]))}}),{defineComponent:Et}=await v("vue"),{openBlock:ye,createElementBlock:Me,createCommentVNode:Ct}=await v("vue"),Tt=["object"],{ref:Pe,toRaw:zt,watch:ee}=await v("vue"),Va=Et({__name:"topoBase",props:{selected:{default:"baseModelA"},type:{default:["baseModelA","baseModelB"]},colorlist:{default:["#6381EE","#FFFFFF"]},roughness:{default:.5},metalness:{default:.6}},setup(x){const e=x,n=Pe(!1);(async()=>{for(const t of e.type)await se.getResource("GLTFLoader",`./plugins/floor/models/topoBase/${t}.glb`,`topo-${t}.glb`);n.value=!0})();const l=Pe(null),a={};ee(()=>n.value,t=>{t&&(l.value=se.getReactiveItem(`topo-${e.selected}.glb`)().scene.clone(),s(l.value))},{immediate:!0}),ee(()=>e.selected,async t=>{l.value=se.getReactiveItem(`topo-${t}.glb`)().scene.clone(),s(l.value)});const s=t=>{for(const r in a)a[r].dispose(),delete a[r];t.traverse(r=>{if(r.isMesh&&r.material){const p=r.material;a[p.uuid]||(a[p.uuid]=p.clone()),r.material=a[p.uuid]}}),i(e.colorlist)},i=t=>{let r=0;for(const p in a)a.hasOwnProperty(p)&&a[p].color.set(t[r]),r++},f=(t,r)=>{for(const p in a)a.hasOwnProperty(p)&&(a[p][t]=r)};return ee(()=>e.colorlist,t=>{i(t)},{deep:!0}),ee(()=>[e.roughness,e.metalness],([t,r])=>{f("roughness",t),f("metalness",r)},{deep:!0}),(t,r)=>(ye(),Me("TresGroup",null,[l.value?(ye(),Me("primitive",{key:0,object:zt(l.value)},null,8,Tt)):Ct("",!0)]))}}),{defineComponent:kt}=await v("vue"),{unref:be,openBlock:$t,createElementBlock:Rt,createCommentVNode:Bt}=await v("vue"),Lt=["object"],{watch:Ee}=await v("vue"),B=await v("three"),Aa=kt({__name:"hexagonalWall",props:{color:{default:"#7432B4"}},setup(x){const{renderer:e,scene:n,camera:o,sizes:l}=oe(),a=x;let s=null;const{textures:i,isLoading:f}=Ie(["./plugins/floor/image/concrete_wet_floor_basecolor.jpg","./plugins/floor/image/metal_plate_diff_1k.jpg"]),{state:t}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelI.glb",{draco:!0,decoderPath:"./draco/"});let r=null;Ee([t,i,f],([y,u,m])=>{y&&u&&!m&&(r=y.scene,r.traverse(c=>{if(c instanceof B.Mesh){const d=c.position.clone(),_=20+Math.random()*30,b=Math.random()*Math.PI*2,C=(Math.random()-.5)*20,R=new B.Vector3(d.x+Math.cos(b)*_,d.y+C,d.z+Math.sin(b)*_);p.push({mesh:c,originalPosition:d,scatteredPosition:R}),c.position.copy(R),c.name.includes("_")?(u[0].wrapS=B.RepeatWrapping,u[0].wrapT=B.RepeatWrapping,u[0].repeat.set(10,10),c.material.map=i.map,c.material.needsUpdate=!0,c.material.emissive=new B.Color("#7432B4"),c.material.emissiveIntensity=3.5):(u[1]&&(u[1].wrapS=B.RepeatWrapping,u[1].wrapT=B.RepeatWrapping,u[1].repeat.set(10,10),c.material.map=u[1]),c.material.color=new B.Color("#7432B4"),c.material.metalness=.8,c.material.roughness=.2,c.material.envMapIntensity=2.5,c.material.needsUpdate=!0)}}),M(),E(),S())});const p=[],S=()=>{if(p.length===0)return;const y=ue.timeline();p.forEach((u,m)=>{const c=Math.random()*.8,d={x:(Math.random()-.5)*Math.PI*2,y:(Math.random()-.5)*Math.PI*2,z:(Math.random()-.5)*Math.PI*2};u.mesh.rotation.set(d.x,d.y,d.z),y.to(u.mesh.position,{x:u.originalPosition.x,y:u.originalPosition.y,z:u.originalPosition.z,duration:3,ease:"power2.out",delay:c},0),y.to(u.mesh.rotation,{x:0,y:0,z:0,duration:3,ease:"power2.out",delay:c},0)}),y.call(()=>{h()}),console.log(`开始拼合动画，共 ${p.length} 个mesh`)},h=()=>{p.forEach((y,u)=>{ue.to(y.mesh.position,{z:y.originalPosition.z+3+u/50,duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut"})}),console.log("Z轴微动动画已启动")},E=()=>{if(!e||!o.value||!l.width.value)return;s=new Ne(e);const y=new Oe(n.value,o.value);s.addPass(y);const u=new Ge(new B.Vector2(l.width.value,l.height.value),.6,.05,.25);s.addPass(u)},M=()=>{const y=new B.PMREMGenerator(e),u=new fe,m=y.fromScene(u).texture;n.value.environment=m,r.traverse(c=>{c instanceof B.Mesh&&c.material&&(c.material.envMap=m,c.material.needsUpdate=!0)}),u.dispose()},{onRender:P}=H();return P(()=>{s&&s.render()}),Ee(()=>[a.color],([y])=>{r.traverse(u=>{u instanceof B.Mesh&&u.material&&(u.material.color=new B.Color(y),u.material.emissive=new B.Color(y))})}),(y,u)=>be(t)?($t(),Rt("primitive",{key:0,object:be(t)?.scene,"position-y":.01},null,8,Lt)):Bt("",!0)}}),{defineComponent:Vt}=await v("vue"),{createElementVNode:Ce,unref:Te,openBlock:ze,createElementBlock:ke,createCommentVNode:$e}=await v("vue"),At={key:0},Dt=["object"],Wt=["object"],Ut=["object"],{onMounted:It,watch:le,computed:ce}=await v("vue"),G=await v("three"),Da=Vt({__name:"mechaFloor",props:{color:{default:"#ffed00"}},setup(x){const{renderer:e,scene:n,camera:o,sizes:l}=oe(),a=x;let s=null;const i={uniforms:{tDiffuse:{value:null},contrast:{value:1.8}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float contrast;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            color.rgb = (color.rgb - 0.5) * contrast + 0.8;
            gl_FragColor = color;
        }
    `},{state:f}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelJ.glb",{draco:!0,decoderPath:"./draco/"}),t=ce(()=>f?.value?.scene),{state:r}=J("plugins/floor/models/topoBase/baseModelL.glb",{draco:!0,decoderPath:"./draco/"}),{state:p}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelK.glb",{draco:!0,decoderPath:"./draco/"}),S=ce(()=>p.value?.animations||[]),h=ce(()=>p?.value?.scene),{actions:E}=je(S,h);le(E,u=>{u.Scene&&u.Scene.play()}),le(t,u=>{u&&u.traverse(m=>{m instanceof G.Mesh&&(m.material.emissive=new G.Color("#ffed00"),m.material.emissiveIntensity=20.5,m.material.toneMapped=!0,m.material.needsUpdate=!0)})});const M=()=>{if(!e||!o.value||!l.width.value)return;s=new Ne(e);const u=new Oe(n.value,o.value);s.addPass(u);const m=new Ge(new G.Vector2(l.width.value,l.height.value),.1,.1,.1);s.addPass(m);const c=new Ye(i);c.uniforms.contrast.value=1.1,s.addPass(c)},P=()=>{const u=new G.PMREMGenerator(e),m=new fe,c=u.fromScene(m).texture;n.value.environment=c,t.value&&t.value.traverse(d=>{d instanceof G.Mesh&&d.material&&(d.material.envMap=c,d.material.needsUpdate=!0)}),m.dispose()},{onRender:y}=H();return y(()=>{s&&s.render()}),It(()=>{P(),setTimeout(()=>{M()},200)}),le(()=>[a.color],([u])=>{t.value&&t.value.traverse(m=>{m instanceof G.Mesh&&m.material&&(m.material.emissive=new G.Color(u))})}),(u,m)=>t.value&&h.value?(ze(),ke("TresGroup",At,[Ce("primitive",{object:t.value,"position-y":.01},null,8,Dt),Te(r)?(ze(),ke("primitive",{key:0,object:Te(r)?.scene,"position-y":.1},null,8,Wt)):$e("",!0),Ce("primitive",{object:h.value,"position-y":.1},null,8,Ut)])):$e("",!0)}}),{defineComponent:Ft}=await v("vue"),{unref:Re,openBlock:Be,createElementBlock:Le,createCommentVNode:Nt}=await v("vue"),Ot=["object"],{watch:te}=await v("vue"),N=await v("three"),Wa=Ft({__name:"hexagonalFloor",props:{floorColor:{default:"#ff0000"},floorMetalness:{default:.8},floorRoughness:{default:.2},floorEnvMapIntensity:{default:2.5},sideColor:{default:"#ffffff"},sideOpacity:{default:.9},speed:{default:.3}},setup(x){const{renderer:e}=oe(),n=x,{state:o}=Fe("./plugins/floor/image/concrete_wet_floor_basecolor.jpg");te(o,t=>{t&&(t.wrapS=N.RepeatWrapping,t.wrapT=N.RepeatWrapping,t.repeat.set(10,10))});const{state:l}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelI.glb",{draco:!0,decoderPath:"./draco/"}),a=[],s=ue.timeline();te(()=>l.value,t=>{if(!t.scene)return;t.scene.traverse(p=>{if(p instanceof N.Mesh){const S=p.position.clone(),h=p.rotation.clone(),E=Math.random()-.5,M=new N.Vector3(S.x,S.y+E,S.z),P=Math.PI/12,y=new N.Euler(h.x+(Math.random()-.5)*P,h.y+(Math.random()-.5)*P,h.z);a.push({mesh:p,originalPosition:S,scatteredPosition:M,originalRotation:h,scatteredRotation:y}),p.name.includes("_")?(p.material.emissiveIntensity=2,p.material.metalness=1,p.material.roughness=0,p.material.transparent=!0):p.material.map=o.value,p.material.needsUpdate=!0}}),a.forEach(({mesh:p,scatteredPosition:S,scatteredRotation:h},E)=>{s.to(p.position,{x:S.x,y:S.y,z:S.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0),s.to(p.rotation,{x:h.x,y:h.y,z:h.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0)}),i()});const i=()=>{const t=new N.PMREMGenerator(e),r=new fe,p=t.fromScene(r).texture;l.value.scene.traverse(S=>{S instanceof N.Mesh&&S.material&&(S.material.envMap=p,S.material.needsUpdate=!0)}),r.dispose(),f(n.sideColor,n.floorColor,n.sideOpacity,n.floorMetalness,n.floorRoughness,n.floorEnvMapIntensity)},f=(t,r,p,S,h,E)=>{l.value?.scene&&l.value.scene.traverse(M=>{M instanceof N.Mesh&&M.material&&(M.name.includes("_")?(M.material.emissive.set(t),M.material.opacity=p):(M.material.color.set(r),M.material.metalness=S,M.material.roughness=h,M.material.envMapIntensity=E))})};return te(()=>[n.sideColor,n.floorColor,n.sideOpacity,n.floorMetalness,n.floorRoughness,n.floorEnvMapIntensity],([t,r,p,S,h,E])=>{f(t,r,p,S,h,E)}),te(()=>[n.speed],([t])=>{s.timeScale(t)},{immediate:!0}),(t,r)=>(Be(),Le("TresGroup",null,[Re(l)?(Be(),Le("primitive",{key:0,object:Re(l)?.scene,position:[0,-.1,0]},null,8,Ot)):Nt("",!0)]))}}),{unref:pe,createElementVNode:ae,openBlock:Gt,createElementBlock:jt}=await v("vue"),Ht=["geometry"],Qt=["color","transparent","opacity","side"],Xt=["geometry"],Yt=["map","side"],{watch:Zt}=await v("vue"),$=await v("three"),Ua={__name:"ribbonArrow",props:{length:{default:20},width:{default:1},bendPosition:{default:.5},curvature:{default:.4},backgroundColor:{default:"#00aaff"},backgroundAlpha:{default:.25},segments:{default:240},arrowColor:{default:"#ffffff"},arrowWidth:{default:.3},arrowHeight:{default:.5},arrowSpacing:{default:.5},arrowOffset:{default:0},arrowLineWidth:{default:2},arrowStyle:{default:"chevron"},speed:{default:.5},pixelWorldScale:{default:.03}},setup(x){const e=x,n=()=>{const m=Math.max(1e-4,e.length),c=$.MathUtils.clamp(e.bendPosition,0,1),d=m*c,_=m-d,b=Math.min(d,_),C=e.curvature>0&&c>0&&c<1?Math.min(b*.9,m*.2*e.curvature):0,R=Math.max(0,d-C),g=C>0?Math.PI*C/2:0,D=Math.max(0,_-C);return{fullLen:R+g+D,L1val:d,radius:C,len1:R,arcLen:g}};let{fullLen:o,L1val:l,radius:a,len1:s,arcLen:i}=n();const f=m=>{if(m=$.MathUtils.clamp(m,0,o),m<=s)return new $.Vector2(m,0);if(m<=s+i&&a>0){const c=(m-s)/i,d=-Math.PI/2+c*(Math.PI/2),_=l-a,b=a;return new $.Vector2(_+Math.cos(d)*a,b+Math.sin(d)*a)}else{const c=m-(s+i);return new $.Vector2(l,a+c)}};let t=[],r=[],p=0;const S=()=>{t=[],r=[];const m=Math.max(8,Math.floor(e.segments));let c=f(0),d=0;t.push(c),r.push(0),p=0;for(let _=1;_<=m;_++){const b=o*(_/m),C=f(b),R=C.clone().sub(c).length();d+=R,t.push(C),r.push(d),c=C}p=d};S();let h=null;const E=()=>{const m=t.length*2,c=new Float32Array(m*3),d=new Float32Array(m*3),_=new Float32Array(m*2),b=[],C=e.width/2;function R(g){return g===0?t[1].clone().sub(t[0]).normalize():g===t.length-1?t[g].clone().sub(t[g-1]).normalize():t[g+1].clone().sub(t[g-1]).normalize()}for(let g=0;g<t.length;g++){const D=t[g],W=R(g),L=new $.Vector2(-W.y,W.x).normalize(),U=D.x-L.x*C,w=D.y-L.y*C,z=D.x+L.x*C,ne=D.y+L.y*C;c[(g*2+0)*3+0]=U,c[(g*2+0)*3+1]=w,c[(g*2+0)*3+2]=0,c[(g*2+1)*3+0]=z,c[(g*2+1)*3+1]=ne,c[(g*2+1)*3+2]=0,d[(g*2+0)*3+0]=0,d[(g*2+0)*3+1]=0,d[(g*2+0)*3+2]=1,d[(g*2+1)*3+0]=0,d[(g*2+1)*3+1]=0,d[(g*2+1)*3+2]=1;const V=r[g]/(e.arrowWidth+e.arrowSpacing);_[(g*2+0)*2+0]=V,_[(g*2+0)*2+1]=0,_[(g*2+1)*2+0]=V,_[(g*2+1)*2+1]=1}for(let g=0;g<t.length-1;g++){const D=g*2,W=g*2+1,L=(g+1)*2,U=(g+1)*2+1;b.push(D,L,W),b.push(W,L,U)}h&&h.dispose(),h=new $.BufferGeometry,h.setAttribute("position",new $.BufferAttribute(c,3)),h.setAttribute("normal",new $.BufferAttribute(d,3)),h.setAttribute("uv",new $.BufferAttribute(_,2)),h.setIndex(b),h.computeBoundingBox(),h.computeBoundingSphere()};E();const M=({arrowWidthPx:m,arrowHeightPx:c,spacingPx:d,style:_,color:b,lineWidth:C,offset:R})=>{const g=d,D=m+g*2,W=c+g*2,L=Math.max(1,window.devicePixelRatio||1),U=document.createElement("canvas");U.width=D*L,U.height=W*L,U.style.width=D+"px",U.style.height=W+"px";const w=U.getContext("2d");w.scale(L,L),w.clearRect(0,0,D,W),w.strokeStyle=b,w.fillStyle=b,w.lineWidth=C,w.lineJoin="round",w.lineCap="round";const z=g,ne=g,V=m,A=c,K=z+V/2,T=ne+A/2+R;_==="chevron"?(w.beginPath(),w.moveTo(z,T-A/2),w.lineTo(z+V,T),w.lineTo(z,T+A/2),w.stroke()):_==="double"?(w.beginPath(),w.moveTo(z,T-A/2),w.lineTo(z+V*.7,T),w.lineTo(z,T+A/2),w.stroke(),w.beginPath(),w.moveTo(z+V*.8,T-A/2),w.lineTo(z+V*1.5,T),w.lineTo(z+V*.8,T+A/2),w.stroke()):_==="triangle"?(w.beginPath(),w.moveTo(z,T-A/2),w.lineTo(z+V,T),w.lineTo(z,T+A/2),w.closePath(),w.fill()):_==="diamond"?(w.beginPath(),w.moveTo(K,T-A/2),w.lineTo(K+V/2,T),w.lineTo(K,T+A/2),w.lineTo(K-V/2,T),w.closePath(),w.fill()):(w.beginPath(),w.moveTo(z,T-A/2),w.lineTo(z+V,T),w.lineTo(z,T+A/2),w.stroke());const F=new $.CanvasTexture(U);return F.generateMipmaps=!1,F.minFilter=$.LinearFilter,F.magFilter=$.LinearFilter,F.wrapS=$.RepeatWrapping,F.wrapT=$.ClampToEdgeWrapping,F.repeat.set(p/(e.arrowWidth+e.arrowSpacing),1),F.needsUpdate=!0,F};let P=null;const y=()=>{P&&P.dispose(),P=M({arrowWidthPx:e.arrowWidth/e.pixelWorldScale,arrowHeightPx:e.arrowHeight/e.pixelWorldScale,spacingPx:e.arrowSpacing/e.pixelWorldScale,style:e.arrowStyle,color:e.arrowColor,lineWidth:e.arrowLineWidth,offset:e.arrowOffset})};y(),Zt(()=>[e.length,e.width,e.bendPosition,e.curvature,e.segments,e.arrowColor,e.arrowWidth,e.arrowHeight,e.arrowSpacing,e.arrowOffset,e.arrowLineWidth,e.arrowStyle,e.pixelWorldScale],()=>{({fullLen:o,L1val:l,radius:a,len1:s,arcLen:i}=n()),S(),E(),y()});const{onBeforeRender:u}=H();return u(()=>{if(P){const m=e.speed*.01;P.offset.x=(P.offset.x-m)%1,P.offset.x>1&&(P.offset.x-=1),P.needsUpdate=!0}}),(m,c)=>(Gt(),jt("TresGroup",null,[ae("TresMesh",{geometry:pe(h)},[ae("TresMeshBasicMaterial",{color:x.backgroundColor,transparent:x.backgroundAlpha<1,opacity:x.backgroundAlpha,side:$.DoubleSide,depthWrite:""},null,8,Qt)],8,Ht),ae("TresMesh",{geometry:pe(h)},[ae("TresMeshBasicMaterial",{map:pe(P),transparent:"",side:$.DoubleSide,depthWrite:"",renderOrder:1},null,8,Yt)],8,Xt)]))}},{defineComponent:Jt}=await v("vue"),{createElementVNode:Ve,unref:Kt,createVNode:qt,openBlock:ea,createElementBlock:ta}=await v("vue"),aa=["rotation-x"],j=await v("three"),{watch:Ae}=await v("vue"),oa=`
varying vec2 vUv;
varying vec3 vPosition;
void main(){
	vUv=uv;
	vPosition=position;
	csm_Position=position;
}
`,na=`
#define uScanOrigin vec3(0.,0.,0.)
#define uScanWaveRatio1 3.2
#define uScanWaveRatio2 2.8

uniform float uTime;
uniform sampler2D uScanTex;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uScanColor;
uniform vec3 uScanColorDark;

float circleWave(vec3 p,vec3 origin,float distRatio){
    float t=uTime;
    float dist=distance(p,origin)*distRatio;
    float radialMove=fract(dist-t);
    float fadeOutMask=1.-smoothstep(1.,3.,dist);
    radialMove*=fadeOutMask;
    float cutInitialMask=1.-step(t,dist);
    radialMove*=cutInitialMask;
    return radialMove;
}

vec3 getScanColor(vec3 worldPos,vec2 uv,vec3 col){
    // mask
    float scanMask=texture(uScanTex,uv).r;
    // waves
    float cw=circleWave(worldPos,uScanOrigin,uScanWaveRatio1);
    float cw2=circleWave(worldPos,uScanOrigin,uScanWaveRatio2);
    // scan
    float mask1=smoothstep(.3,0.,1.-cw);
    mask1*=(1.+scanMask*.7);
    
    float mask2=smoothstep(.07,0.,1.-cw2)*.8;
    mask1+=mask2;
    
    float mask3=smoothstep(.09,0.,1.-cw)*1.5;
    mask1+=mask3;

    // color
    vec3 scanCol=mix(uScanColorDark,uScanColor,mask1);
    col=mix(col,scanCol,mask1);
    
    return col;
		// return vec3(cw);
		// return vec3(scanMask);
		// return worldPos;
		// return vec3(mask1);
		// return scanCol;
}

void main()
{
    vec3 col=vec3(0.);
    col=getScanColor(vPosition,vUv*10.0,col);
    csm_DiffuseColor=vec4(col,1.);
}
`,Ia=Jt({__name:"shaderCircleWave",props:{color:{default:"#ffffff"},colorDark:{default:"#000000"},speed:{default:1}},setup(x){const e=x,n={uTime:{value:0},uScanTex:{value:null},uScanColor:{value:new j.Color(e.color)},uScanColorDark:{value:new j.Color(e.colorDark)}},{state:o}=Fe("./plugins/floor/image/scan.png");Ae(()=>o.value,a=>{a&&(a.wrapS=j.RepeatWrapping,a.wrapT=j.RepeatWrapping,a.needsUpdate=!0,n.uScanTex.value=a)}),Ae(()=>[e.color,e.colorDark],([a,s])=>{n.uScanColor.value.set(a),n.uScanColorDark.value.set(s)});const{onBeforeRender:l}=H();return l(()=>{n.uTime.value+=.01*e.speed}),(a,s)=>(ea(),ta("TresGroup",null,[Ve("TresMesh",{"rotation-x":-Math.PI/2},[s[0]||(s[0]=Ve("TresPlaneGeometry",{args:[1,1]},null,-1)),qt(Kt(He),{baseMaterial:j.MeshBasicMaterial,vertexShader:oa,fragmentShader:na,uniforms:n,side:j.DoubleSide,transparent:"",blending:j.AdditiveBlending,flatShading:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,silent:""},null,8,["baseMaterial","side","blending"])],8,aa)]))}}),{defineComponent:sa}=await v("vue"),{unref:ra,createElementVNode:ia,openBlock:la,createElementBlock:ca}=await v("vue"),pa=["object"],me=await v("three"),{watch:ma,onUnmounted:ua}=await v("vue"),Fa=sa({__name:"cartoonMagic",props:{color:{default:"#00ffff"},speed:{default:1}},setup(x){const e=x,n=f=>{const t=new me.Color(e.color),r=new me.Vector4(t.r,t.g,t.b,f);return new qe(r)},o=new Ze,l=new Je;l.setCrossOrigin("");const{scene:a}=Qe(),s=new me.Group;a.value.add(s),ua(()=>{a.value.remove(s)}),l.load("./plugins/floor/json/CartoonMagicZone2.json",f=>{f.traverse(t=>{if(t.type==="ParticleEmitter"){t.name==="BasicZoneRedEmitter"&&t.rotation.set(Math.PI/2,0,0);const r=t.system;r.startSpeed.value===-.25&&(r.startSpeed=new Ke(-.5)),r.startColor=n(r.startColor.color.w),o.addSystem(r)}}),f.type==="ParticleEmitter"&&o.addSystem(f.system),s.add(f)});const{onBeforeRender:i}=H();return i(()=>{o.update(.01*e.speed)}),ma(()=>[e.color],()=>{o.systemToBatchIndex.forEach((f,t)=>{t.startColor=n(t.startColor.color.w)})}),(f,t)=>(la(),ca("TresGroup",null,[ia("primitive",{object:ra(o)},null,8,pa)]))}}),{defineComponent:fa}=await v("vue"),{createElementVNode:De,normalizeProps:da,guardReactiveProps:va,openBlock:ha,createElementBlock:ga}=await v("vue"),I=await v("three"),{watch:We,reactive:wa,ref:xa}=await v("vue"),Na=fa({__name:"dynamicRotatingBase",props:{type:{default:"imgA"},color:{default:"#fff"},opacity:{default:.95},rotationZ:{default:.01},videoLoop:{type:Boolean,default:!1}},setup(x){const e=xa(),{onBeforeRender:n}=H();n(()=>{e.value&&(e.value.rotation.z+=l.rotationZ)});const o={imgA:{type:"img",path:"./plugins/floor/image/imgFloor1.png"},imgB:{type:"img",path:"./plugins/floor/image/imgFloor2.png"},imgC:{type:"img",path:"./plugins/floor/image/imgFloor3.png"},videoA:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV1.mp4"},videoB:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV2.mp4"},videoC:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV3.mp4"}},l=x,a=wa({color:l.color,map:null,side:I.DoubleSide,transparent:!0,opacity:l.opacity,blending:I.AdditiveBlending,depthTest:!0,depthWrite:!1}),s=document.createElement("video");return We(()=>l.type,async i=>{if(a.map?.dispose(),o[i].type==="img"){const f=await Xe(o[i].path);f.colorSpace=I.SRGBColorSpace,f.wrapS=I.RepeatWrapping,f.wrapT=I.RepeatWrapping,f.repeat.set(1,1),a.map=f}else if(o[i].type==="video"){s.src=o[i].path,s.crossOrigin="anonymous",s.loop=l.videoLoop,s.muted=!0,s.play();const f=new I.VideoTexture(s);f.colorSpace=I.SRGBColorSpace,f.wrapS=I.RepeatWrapping,f.wrapT=I.RepeatWrapping,f.repeat.set(1,1),a.map=f}},{immediate:!0}),We(()=>[l.color,l.opacity,l.videoLoop],([i,f,t])=>{a.color=new I.Color(i),a.opacity=f,s.loop=t}),(i,f)=>(ha(),ga("TresMesh",{ref_key:"tmRef",ref:e},[f[0]||(f[0]=De("TresPlaneGeometry",{args:[10,10]},null,-1)),De("TresMeshBasicMaterial",da(va(a)),null,16)],512))}}),_a=[{label:"无底色贴图",value:""},{label:"砖地板 04",value:"https://asset-manager.icegl.cn/assets/textures/brick_floor_04_diff_1k.jpg"},{label:"湿混凝土地板",value:"https://asset-manager.icegl.cn/assets/textures/concrete_wet_floor_basecolor.jpg"},{label:"瓷砖",value:"https://asset-manager.icegl.cn/assets/images/tiles.jpg"}],Sa=[{label:"无法线贴图",value:""},{label:"湿混凝土地板法线",value:"https://asset-manager.icegl.cn/assets/textures/concrete_wet_floor_normal.jpg"},{label:"瓷砖",value:"https://asset-manager.icegl.cn/assets/images/tiles.jpg"}],ya=[{label:"无扰动贴图",value:""},{label:"Water DUDV",value:"https://asset-manager.icegl.cn/assets/textures/waterdudv.jpg"}],Ue={resolution:256,mix:.27,sharpMix:0,sharpDepthScale:.43,sharpDepthBias:0,sharpDepthEdgeMin:0,sharpDepthEdgeMax:.2,blurMixSmooth:.11,blurMixRough:3.04,blurDepthScale:.8,blurDepthBias:0,blurDepthEdgeMin:0,blurDepthEdgeMax:.2,blurSize:0,reflectorOffset:-.022,color:"#232323",roughness:1,metalness:0,mapIntensity:.15,normalIntensity:3.15,distortion:.16,mapSource:_a[3].value,useLocalMap:!1,mapLocalData:"",normalMapSource:Sa[2].value,useLocalNormalMap:!1,normalMapLocalData:"",distortionMapSource:ya[1].value,useLocalDistortionMap:!1,distortionMapLocalData:"",textureRepeat:{x:1,y:1},textureRotation:0};function Ma(x={}){return{...Ue,textureRepeat:{...Ue.textureRepeat},...x}}Ma();const{defineComponent:Oa}=await v("vue"),{createElementVNode:Ga,mergeProps:ja,createVNode:Ha,openBlock:Qa,createElementBlock:Xa}=await v("vue"),{computed:Ya,onBeforeUnmount:Za,shallowRef:Ja,watch:Ka}=await v("vue"),{NoColorSpace:qa,RepeatWrapping:eo,SRGBColorSpace:to,TextureLoader:ao,Vector2:oo}=await v("three");export{Fa as _sfc_main,Ia as _sfc_main$1,Na as _sfc_main$2,Wa as _sfc_main$3,Aa as _sfc_main$4,Da as _sfc_main$5,Ua as _sfc_main$6,La as _sfc_main$7,Va as _sfc_main$8,Ba as _sfc_main$9};
