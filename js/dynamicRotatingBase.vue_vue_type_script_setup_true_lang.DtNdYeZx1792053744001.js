import{importShared as x}from"./3d-tiles-renderer.dDcENhaA1792053744001.js";import{useTres as pe,useLoop as Q,useTextures as Ve,useGLTF as te,useAnimations as De,useTexture as Re,customShaderMaterial_default as We,useTresContext as Ue}from"./index.TynH4WPb1792053744001.js";import{useFBO as ue,useTexture as Ie}from"./index.vue_vue_type_script_setup_true_lang.CMFsDM5F1792053744001.js";import"./index.vue_vue_type_script_setup_true_lang.b5ezMMcE1792053744001.js";import{instance as oe}from"./Resource.B6gM5cgj1792053744001.js";import{EffectComposer as Fe,RenderPass as Oe,ShaderPass as Ne}from"./RenderPass.CF8ZGk931792053744001.js";import{UnrealBloomPass as Ge}from"./UnrealBloomPass.CDnn_Ck51792053744001.js";import{gsapWithCSS as He}from"./index.C1NmcAq51792053744001.js";import{BatchedRenderer as je,QuarksLoader as Qe,ConstantValue as Xe,ConstantColor as Ye}from"./three.quarks.esm.Bi0Ge5vi1792053744001.js";var Ze=Object.defineProperty,Je=(v,e,n)=>e in v?Ze(v,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):v[e]=n,ne=(v,e,n)=>(Je(v,typeof e!="symbol"?e+"":e,n),n);const{OrthographicCamera:Ke,PlaneGeometry:qe,Mesh:et}=await x("three");class me{constructor(e){ne(this,"camera",new Ke(-1,1,1,-1,0,1)),ne(this,"geometry",new qe(2,2)),ne(this,"mesh"),this.mesh=new et(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}const tt={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
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
  `},{BackSide:at,BoxGeometry:ot,InstancedMesh:nt,Mesh:O,MeshLambertMaterial:st,MeshStandardMaterial:fe,PointLight:rt,Scene:it,Object3D:lt}=await x("three");class Be extends it{constructor(){super();const e=new ot;e.deleteAttribute("uv");const n=new fe({side:at}),o=new fe,l=new rt(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const a=new O(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const s=new nt(e,o,6),i=new lt;i.position.set(-10.906,2.009,1.846),i.rotation.set(0,-.195,0),i.scale.set(2.328,7.905,4.651),i.updateMatrix(),s.setMatrixAt(0,i.matrix),i.position.set(-5.607,-.754,-.758),i.rotation.set(0,.994,0),i.scale.set(1.97,1.534,3.955),i.updateMatrix(),s.setMatrixAt(1,i.matrix),i.position.set(6.167,.857,7.803),i.rotation.set(0,.561,0),i.scale.set(3.927,6.285,3.687),i.updateMatrix(),s.setMatrixAt(2,i.matrix),i.position.set(-2.017,.018,6.124),i.rotation.set(0,.333,0),i.scale.set(2.002,4.566,2.064),i.updateMatrix(),s.setMatrixAt(3,i.matrix),i.position.set(2.291,-.756,-2.621),i.rotation.set(0,-.286,0),i.scale.set(1.546,1.552,1.496),i.updateMatrix(),s.setMatrixAt(4,i.matrix),i.position.set(-2.193,-.369,-5.547),i.rotation.set(0,.516,0),i.scale.set(3.875,3.487,2.986),i.updateMatrix(),s.setMatrixAt(5,i.matrix),this.add(s);const c=new O(e,H(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const t=new O(e,H(50));t.position.set(-16.109,18.021,-8.207),t.scale.set(.1,2.425,2.751),this.add(t);const r=new O(e,H(17));r.position.set(14.904,12.198,-1.832),r.scale.set(.15,4.265,6.331),this.add(r);const p=new O(e,H(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const w=new O(e,H(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,.1),this.add(w);const d=new O(e,H(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function H(v){return new st({color:0,emissive:16777215,emissiveIntensity:v})}const ct=`

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

`,{UniformsUtils:pt,Vector2:de}=await x("three");function X(v){const e={...v};return"defines"in v&&(e.defines={...v.defines}),"uniforms"in v&&(e.uniforms=pt.clone(v.uniforms)),e}const ut={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new de},parentMapSize:{value:new de},parentLevel:{value:0}},vertexShader:`
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

		${ct}

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
	`},{Color:mt,ShaderMaterial:Y,MathUtils:ve,WebGLRenderTarget:ft,NearestFilter:he}=await x("three"),ge=new mt;class dt{constructor(e){e||(e=`

				#pragma unroll_loop
				for ( int i = 0; i < SAMPLES; i ++ ) {

					gl_FragColor += samples[ i ] * weights[ i ];

				}

			`);const n=X(ut);n.fragmentShader=n.fragmentShader.replace(/<mipmap_logic>/g,e);const o=new Array(4);o[0]=new Y(X(n)),o[0].defines.X_IS_EVEN=0,o[0].defines.Y_IS_EVEN=0,o[1]=new Y(X(n)),o[1].defines.X_IS_EVEN=1,o[1].defines.Y_IS_EVEN=0,o[2]=new Y(X(n)),o[2].defines.X_IS_EVEN=0,o[2].defines.Y_IS_EVEN=1,o[3]=new Y(X(n)),o[3].defines.X_IS_EVEN=1,o[3].defines.Y_IS_EVEN=1;const l=new ft;l.texture.minFilter=he,l.texture.magFilter=he,this._swapTarget=l,this._copyQuad=new me(new Y(tt)),this._mipQuad=new me(null),this._mipMaterials=o}update(e,n,o,l=!1){e.isWebGLRenderTarget&&(e=e.texture);const a=o.autoClear,s=o.getClearAlpha(),i=o.getRenderTarget();o.getClearColor(ge);const c=this._copyQuad,t=this._mipQuad,r=this._swapTarget,p=this._mipMaterials;let w,d;l?(w=ve.floorPowerOfTwo(e.image.width),d=ve.floorPowerOfTwo(e.image.height)):(w=Math.floor(e.image.width),d=Math.floor(e.image.height));const b=Math.floor(w*1.5),y=Math.floor(d);n.setSize(b,y),r.texture.type!==n.texture.type?(r.dispose(),r.copy(n),r.texture.image={...r.texture.image}):r.setSize(b,y),o.autoClear=!1,o.setClearColor(0),o.setClearAlpha(),c.material.uniforms.tDiffuse.value=e,c.camera.setViewOffset(w,d,0,0,b,y),o.setRenderTarget(n),o.clear(),c.render(o),o.setRenderTarget(r),o.clear(),c.render(o);let _=w,E=d,M=0;for(;_>1&&E>1;){const h=(_%2===0?1:0)|(E%2===0?2:0),g=p[h];g.uniforms.map.value=r.texture,g.uniforms.parentLevel.value=M,g.uniforms.parentMapSize.value.set(_,E),g.uniforms.originalMapSize.value.set(w,d),t.material=g,_=Math.floor(_/2),E=Math.floor(E/2);const P=y-2*E;o.setRenderTarget(n),t.camera.setViewOffset(_,E,-w,-P,b,y),t.render(o),o.setRenderTarget(r),g.uniforms.map.value=n.texture,t.render(o),M++}return o.setRenderTarget(i),o.setClearAlpha(s),o.setClearColor(ge),o.autoClear=a,M+1}dispose(){this._swapTarget.dispose(),this._mipQuad.dispose(),this._copyQuad.dispose(),this._mipMaterials.forEach(e=>e.dispose())}}const{defineComponent:vt}=await x("vue"),k=await x("three"),Sa=vt({__name:"reflectorMipMap",props:{parent:{},resolution:{default:512},ignoreObjects:{default:[]}},setup(v,{expose:e}){const n=v,o=new k.Plane,l=new k.Matrix4,a=new k.PerspectiveCamera,s=new dt,i=ue({width:n.resolution,height:n.resolution,settings:{type:k.UnsignedByteType}}),c=ue({width:n.resolution,height:n.resolution,settings:{type:k.UnsignedByteType}}),{camera:t,renderer:r,scene:p}=pe(),w=()=>{if(!t.value)return;o.set(new k.Vector3(0,1,0),0),o.applyMatrix4(n.parent.matrixWorld),a.copy(t.value);const b=new k.Vector3(0,0,1).clone().negate(),y=t.value.getWorldPosition(new k.Vector3);b.reflect(o.normal);const _=new k.Vector3;o.projectPoint(y,_);const E=_.clone();E.sub(y),E.add(_),a.position.copy(E);const M=new k.Vector3(0,0,-1);M.applyQuaternion(t.value.getWorldQuaternion(new k.Quaternion)),M.add(y);const u=new k.Vector3;n.parent.getWorldPosition(u),u.sub(M),u.reflect(o.normal).negate(),u.add(n.parent.getWorldPosition(new k.Vector3)),a.up.set(0,1,0),a.applyQuaternion(t.value.getWorldQuaternion(new k.Quaternion)),a.up.reflect(o.normal),a.lookAt(u),a.updateMatrixWorld();const S=new k.Matrix4;S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(a.projectionMatrix),S.multiply(a.matrixWorldInverse),l.copy(S),o.applyMatrix4(a.matrixWorldInverse);const h=new k.Vector4(o.normal.x,o.normal.y,o.normal.z,o.constant),g=a.projectionMatrix,P=new k.Vector4;P.x=(Math.sign(h.x)+g.elements[8])/g.elements[0],P.y=(Math.sign(h.y)+g.elements[9])/g.elements[5],P.z=-1,P.w=(1+g.elements[10])/g.elements[14],h.multiplyScalar(2/h.dot(P)),g.elements[2]=h.x,g.elements[6]=h.y,g.elements[10]=h.z+1,g.elements[14]=h.w;const C=r.getRenderTarget();r.setRenderTarget(i.value),r.state.buffers.depth.setMask(!0),r.autoClear===!1&&r.clear(),n.ignoreObjects.forEach(B=>B.visible=!1),r.render(p.value,a),n.ignoreObjects.forEach(B=>B.visible=!0),r.setRenderTarget(C)},{onBeforeRender:d}=Q();return d(()=>{w(),i.value&&c.value&&r&&s.update(i.value.texture,c.value,r)}),e({matrix:l,renderTarget:c}),(b,y)=>null}}),{withAsyncContext:ht,defineComponent:gt}=await x("vue"),{createElementVNode:se,unref:J,openBlock:wt,createElementBlock:xt}=await x("vue"),St=["rotateX","receiveShadow"],yt=["color","map","normalMap","metalnessMap","roughnessMap","metalness","roughness","normalScale","side"],{watch:we}=await x("vue"),j=await x("three"),ya=gt({__name:"rubberTiles",props:{color:{default:"#FFFFFF"},repeat:{default:{x:1,y:1}},metalness:{default:1},roughness:{default:.66},normalScale:{default:1},receiveShadow:{type:Boolean,default:!1}},async setup(v){let e,n;const o=v,{textures:l}=([e,n]=ht(()=>Ve(["./plugins/floor/image/rubber_tiles_diff_1k.jpg","./plugins/floor/image/rubber_tiles_nor_gl_1k.jpg","./plugins/floor/image/rubber_tiles_arm_1k.jpg"])),e=await e,n(),e);return we([l],([a])=>{if(a&&a.length)for(let s=0;s<a.length;s++)a[s].colorSpace=j.LinearSRGBColorSpace,a[s].wrapS=j.RepeatWrapping,a[s].wrapT=j.RepeatWrapping,a[s].magFilter=j.LinearFilter,a[s].minFilter=j.LinearMipmapLinearFilter,a[s].repeat.set(o.repeat.x,o.repeat.y)}),we(()=>o.repeat,a=>{for(let s=0;s<l.value.length;s++)l.value[s].repeat.set(a.x,a.y)},{deep:!0}),(a,s)=>(wt(),xt("TresGroup",null,[se("TresMesh",{rotateX:-Math.PI/2,receiveShadow:a.receiveShadow},[s[0]||(s[0]=se("TresPlaneGeometry",{args:[10,10]},null,-1)),se("TresMeshStandardMaterial",{color:o.color,map:J(l)[0],normalMap:J(l)[1],metalnessMap:J(l)[2],roughnessMap:J(l)[2],metalness:a.metalness,roughness:a.roughness,normalScale:a.normalScale,side:j.DoubleSide},null,8,yt)],8,St)]))}}),{defineComponent:_t}=await x("vue"),{openBlock:xe,createElementBlock:Se,createCommentVNode:Mt}=await x("vue"),Pt=["object"],{ref:ye,toRaw:bt,watch:K}=await x("vue"),_a=_t({__name:"topoBase",props:{selected:{default:"baseModelA"},type:{default:["baseModelA","baseModelB"]},colorlist:{default:["#6381EE","#FFFFFF"]},roughness:{default:.5},metalness:{default:.6}},setup(v){const e=v,n=ye(!1);(async()=>{for(const t of e.type)await oe.getResource("GLTFLoader",`./plugins/floor/models/topoBase/${t}.glb`,`topo-${t}.glb`);n.value=!0})();const l=ye(null),a={};K(()=>n.value,t=>{t&&(l.value=oe.getReactiveItem(`topo-${e.selected}.glb`)().scene.clone(),s(l.value))},{immediate:!0}),K(()=>e.selected,async t=>{l.value=oe.getReactiveItem(`topo-${t}.glb`)().scene.clone(),s(l.value)});const s=t=>{for(const r in a)a[r].dispose(),delete a[r];t.traverse(r=>{if(r.isMesh&&r.material){const p=r.material;a[p.uuid]||(a[p.uuid]=p.clone()),r.material=a[p.uuid]}}),i(e.colorlist)},i=t=>{let r=0;for(const p in a)a.hasOwnProperty(p)&&a[p].color.set(t[r]),r++},c=(t,r)=>{for(const p in a)a.hasOwnProperty(p)&&(a[p][t]=r)};return K(()=>e.colorlist,t=>{i(t)},{deep:!0}),K(()=>[e.roughness,e.metalness],([t,r])=>{c("roughness",t),c("metalness",r)},{deep:!0}),(t,r)=>(xe(),Se("TresGroup",null,[l.value?(xe(),Se("primitive",{key:0,object:bt(l.value)},null,8,Pt)):Mt("",!0)]))}}),{defineComponent:Tt}=await x("vue"),{createElementVNode:_e,unref:Me,openBlock:Pe,createElementBlock:be,createCommentVNode:Te}=await x("vue"),Et={key:0},Ct=["object"],zt=["object"],kt=["object"],{onMounted:$t,watch:re,computed:ie}=await x("vue"),N=await x("three"),Ma=Tt({__name:"mechaFloor",props:{color:{default:"#ffed00"}},setup(v){const{renderer:e,scene:n,camera:o,sizes:l}=pe(),a=v;let s=null;const i={uniforms:{tDiffuse:{value:null},contrast:{value:1.8}},vertexShader:`
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
    `},{state:c}=te("https://opensource.cdn.icegl.cn/model/floor/baseModelJ.glb",{draco:!0,decoderPath:"./draco/"}),t=ie(()=>c?.value?.scene),{state:r}=te("plugins/floor/models/topoBase/baseModelL.glb",{draco:!0,decoderPath:"./draco/"}),{state:p}=te("https://opensource.cdn.icegl.cn/model/floor/baseModelK.glb",{draco:!0,decoderPath:"./draco/"}),w=ie(()=>p.value?.animations||[]),d=ie(()=>p?.value?.scene),{actions:b}=De(w,d);re(b,M=>{M.Scene&&M.Scene.play()}),re(t,M=>{M&&M.traverse(u=>{u instanceof N.Mesh&&(u.material.emissive=new N.Color("#ffed00"),u.material.emissiveIntensity=20.5,u.material.toneMapped=!0,u.material.needsUpdate=!0)})});const y=()=>{if(!e||!o.value||!l.width.value)return;s=new Fe(e);const M=new Oe(n.value,o.value);s.addPass(M);const u=new Ge(new N.Vector2(l.width.value,l.height.value),.1,.1,.1);s.addPass(u);const S=new Ne(i);S.uniforms.contrast.value=1.1,s.addPass(S)},_=()=>{const M=new N.PMREMGenerator(e),u=new Be,S=M.fromScene(u).texture;n.value.environment=S,t.value&&t.value.traverse(h=>{h instanceof N.Mesh&&h.material&&(h.material.envMap=S,h.material.needsUpdate=!0)}),u.dispose()},{onRender:E}=Q();return E(()=>{s&&s.render()}),$t(()=>{_(),setTimeout(()=>{y()},200)}),re(()=>[a.color],([M])=>{t.value&&t.value.traverse(u=>{u instanceof N.Mesh&&u.material&&(u.material.emissive=new N.Color(M))})}),(M,u)=>t.value&&d.value?(Pe(),be("TresGroup",Et,[_e("primitive",{object:t.value,"position-y":.01},null,8,Ct),Me(r)?(Pe(),be("primitive",{key:0,object:Me(r)?.scene,"position-y":.1},null,8,zt)):Te("",!0),_e("primitive",{object:d.value,"position-y":.1},null,8,kt)])):Te("",!0)}}),{defineComponent:At}=await x("vue"),{unref:Ee,openBlock:Ce,createElementBlock:ze,createCommentVNode:Lt}=await x("vue"),Rt=["object"],{watch:q}=await x("vue"),F=await x("three"),Pa=At({__name:"hexagonalFloor",props:{floorColor:{default:"#ff0000"},floorMetalness:{default:.8},floorRoughness:{default:.2},floorEnvMapIntensity:{default:2.5},sideColor:{default:"#ffffff"},sideOpacity:{default:.9},speed:{default:.3}},setup(v){const{renderer:e}=pe(),n=v,{state:o}=Re("./plugins/floor/image/concrete_wet_floor_basecolor.jpg");q(o,t=>{t&&(t.wrapS=F.RepeatWrapping,t.wrapT=F.RepeatWrapping,t.repeat.set(10,10))});const{state:l}=te("https://opensource.cdn.icegl.cn/model/floor/baseModelI.glb",{draco:!0,decoderPath:"./draco/"}),a=[],s=He.timeline();q(()=>l.value,t=>{if(!t.scene)return;t.scene.traverse(p=>{if(p instanceof F.Mesh){const w=p.position.clone(),d=p.rotation.clone(),b=Math.random()-.5,y=new F.Vector3(w.x,w.y+b,w.z),_=Math.PI/12,E=new F.Euler(d.x+(Math.random()-.5)*_,d.y+(Math.random()-.5)*_,d.z);a.push({mesh:p,originalPosition:w,scatteredPosition:y,originalRotation:d,scatteredRotation:E}),p.name.includes("_")?(p.material.emissiveIntensity=2,p.material.metalness=1,p.material.roughness=0,p.material.transparent=!0):p.material.map=o.value,p.material.needsUpdate=!0}}),a.forEach(({mesh:p,scatteredPosition:w,scatteredRotation:d},b)=>{s.to(p.position,{x:w.x,y:w.y,z:w.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0),s.to(p.rotation,{x:d.x,y:d.y,z:d.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0)}),i()});const i=()=>{const t=new F.PMREMGenerator(e),r=new Be,p=t.fromScene(r).texture;l.value.scene.traverse(w=>{w instanceof F.Mesh&&w.material&&(w.material.envMap=p,w.material.needsUpdate=!0)}),r.dispose(),c(n.sideColor,n.floorColor,n.sideOpacity,n.floorMetalness,n.floorRoughness,n.floorEnvMapIntensity)},c=(t,r,p,w,d,b)=>{l.value?.scene&&l.value.scene.traverse(y=>{y instanceof F.Mesh&&y.material&&(y.name.includes("_")?(y.material.emissive.set(t),y.material.opacity=p):(y.material.color.set(r),y.material.metalness=w,y.material.roughness=d,y.material.envMapIntensity=b))})};return q(()=>[n.sideColor,n.floorColor,n.sideOpacity,n.floorMetalness,n.floorRoughness,n.floorEnvMapIntensity],([t,r,p,w,d,b])=>{c(t,r,p,w,d,b)}),q(()=>[n.speed],([t])=>{s.timeScale(t)},{immediate:!0}),(t,r)=>(Ce(),ze("TresGroup",null,[Ee(l)?(Ce(),ze("primitive",{key:0,object:Ee(l)?.scene,position:[0,-.1,0]},null,8,Rt)):Lt("",!0)]))}}),{unref:le,createElementVNode:ee,openBlock:Bt,createElementBlock:Vt}=await x("vue"),Dt=["geometry"],Wt=["color","transparent","opacity","side"],Ut=["geometry"],It=["map","side"],{watch:Ft}=await x("vue"),$=await x("three"),ba={__name:"ribbonArrow",props:{length:{default:20},width:{default:1},bendPosition:{default:.5},curvature:{default:.4},backgroundColor:{default:"#00aaff"},backgroundAlpha:{default:.25},segments:{default:240},arrowColor:{default:"#ffffff"},arrowWidth:{default:.3},arrowHeight:{default:.5},arrowSpacing:{default:.5},arrowOffset:{default:0},arrowLineWidth:{default:2},arrowStyle:{default:"chevron"},speed:{default:.5},pixelWorldScale:{default:.03}},setup(v){const e=v,n=()=>{const u=Math.max(1e-4,e.length),S=$.MathUtils.clamp(e.bendPosition,0,1),h=u*S,g=u-h,P=Math.min(h,g),C=e.curvature>0&&S>0&&S<1?Math.min(P*.9,u*.2*e.curvature):0,B=Math.max(0,h-C),m=C>0?Math.PI*C/2:0,V=Math.max(0,g-C);return{fullLen:B+m+V,L1val:h,radius:C,len1:B,arcLen:m}};let{fullLen:o,L1val:l,radius:a,len1:s,arcLen:i}=n();const c=u=>{if(u=$.MathUtils.clamp(u,0,o),u<=s)return new $.Vector2(u,0);if(u<=s+i&&a>0){const S=(u-s)/i,h=-Math.PI/2+S*(Math.PI/2),g=l-a,P=a;return new $.Vector2(g+Math.cos(h)*a,P+Math.sin(h)*a)}else{const S=u-(s+i);return new $.Vector2(l,a+S)}};let t=[],r=[],p=0;const w=()=>{t=[],r=[];const u=Math.max(8,Math.floor(e.segments));let S=c(0),h=0;t.push(S),r.push(0),p=0;for(let g=1;g<=u;g++){const P=o*(g/u),C=c(P),B=C.clone().sub(S).length();h+=B,t.push(C),r.push(h),S=C}p=h};w();let d=null;const b=()=>{const u=t.length*2,S=new Float32Array(u*3),h=new Float32Array(u*3),g=new Float32Array(u*2),P=[],C=e.width/2;function B(m){return m===0?t[1].clone().sub(t[0]).normalize():m===t.length-1?t[m].clone().sub(t[m-1]).normalize():t[m+1].clone().sub(t[m-1]).normalize()}for(let m=0;m<t.length;m++){const V=t[m],D=B(m),A=new $.Vector2(-D.y,D.x).normalize(),W=V.x-A.x*C,f=V.y-A.y*C,z=V.x+A.x*C,ae=V.y+A.y*C;S[(m*2+0)*3+0]=W,S[(m*2+0)*3+1]=f,S[(m*2+0)*3+2]=0,S[(m*2+1)*3+0]=z,S[(m*2+1)*3+1]=ae,S[(m*2+1)*3+2]=0,h[(m*2+0)*3+0]=0,h[(m*2+0)*3+1]=0,h[(m*2+0)*3+2]=1,h[(m*2+1)*3+0]=0,h[(m*2+1)*3+1]=0,h[(m*2+1)*3+2]=1;const L=r[m]/(e.arrowWidth+e.arrowSpacing);g[(m*2+0)*2+0]=L,g[(m*2+0)*2+1]=0,g[(m*2+1)*2+0]=L,g[(m*2+1)*2+1]=1}for(let m=0;m<t.length-1;m++){const V=m*2,D=m*2+1,A=(m+1)*2,W=(m+1)*2+1;P.push(V,A,D),P.push(D,A,W)}d&&d.dispose(),d=new $.BufferGeometry,d.setAttribute("position",new $.BufferAttribute(S,3)),d.setAttribute("normal",new $.BufferAttribute(h,3)),d.setAttribute("uv",new $.BufferAttribute(g,2)),d.setIndex(P),d.computeBoundingBox(),d.computeBoundingSphere()};b();const y=({arrowWidthPx:u,arrowHeightPx:S,spacingPx:h,style:g,color:P,lineWidth:C,offset:B})=>{const m=h,V=u+m*2,D=S+m*2,A=Math.max(1,window.devicePixelRatio||1),W=document.createElement("canvas");W.width=V*A,W.height=D*A,W.style.width=V+"px",W.style.height=D+"px";const f=W.getContext("2d");f.scale(A,A),f.clearRect(0,0,V,D),f.strokeStyle=P,f.fillStyle=P,f.lineWidth=C,f.lineJoin="round",f.lineCap="round";const z=m,ae=m,L=u,R=S,Z=z+L/2,T=ae+R/2+B;g==="chevron"?(f.beginPath(),f.moveTo(z,T-R/2),f.lineTo(z+L,T),f.lineTo(z,T+R/2),f.stroke()):g==="double"?(f.beginPath(),f.moveTo(z,T-R/2),f.lineTo(z+L*.7,T),f.lineTo(z,T+R/2),f.stroke(),f.beginPath(),f.moveTo(z+L*.8,T-R/2),f.lineTo(z+L*1.5,T),f.lineTo(z+L*.8,T+R/2),f.stroke()):g==="triangle"?(f.beginPath(),f.moveTo(z,T-R/2),f.lineTo(z+L,T),f.lineTo(z,T+R/2),f.closePath(),f.fill()):g==="diamond"?(f.beginPath(),f.moveTo(Z,T-R/2),f.lineTo(Z+L/2,T),f.lineTo(Z,T+R/2),f.lineTo(Z-L/2,T),f.closePath(),f.fill()):(f.beginPath(),f.moveTo(z,T-R/2),f.lineTo(z+L,T),f.lineTo(z,T+R/2),f.stroke());const I=new $.CanvasTexture(W);return I.generateMipmaps=!1,I.minFilter=$.LinearFilter,I.magFilter=$.LinearFilter,I.wrapS=$.RepeatWrapping,I.wrapT=$.ClampToEdgeWrapping,I.repeat.set(p/(e.arrowWidth+e.arrowSpacing),1),I.needsUpdate=!0,I};let _=null;const E=()=>{_&&_.dispose(),_=y({arrowWidthPx:e.arrowWidth/e.pixelWorldScale,arrowHeightPx:e.arrowHeight/e.pixelWorldScale,spacingPx:e.arrowSpacing/e.pixelWorldScale,style:e.arrowStyle,color:e.arrowColor,lineWidth:e.arrowLineWidth,offset:e.arrowOffset})};E(),Ft(()=>[e.length,e.width,e.bendPosition,e.curvature,e.segments,e.arrowColor,e.arrowWidth,e.arrowHeight,e.arrowSpacing,e.arrowOffset,e.arrowLineWidth,e.arrowStyle,e.pixelWorldScale],()=>{({fullLen:o,L1val:l,radius:a,len1:s,arcLen:i}=n()),w(),b(),E()});const{onBeforeRender:M}=Q();return M(()=>{if(_){const u=e.speed*.01;_.offset.x=(_.offset.x-u)%1,_.offset.x>1&&(_.offset.x-=1),_.needsUpdate=!0}}),(u,S)=>(Bt(),Vt("TresGroup",null,[ee("TresMesh",{geometry:le(d)},[ee("TresMeshBasicMaterial",{color:v.backgroundColor,transparent:v.backgroundAlpha<1,opacity:v.backgroundAlpha,side:$.DoubleSide,depthWrite:""},null,8,Wt)],8,Dt),ee("TresMesh",{geometry:le(d)},[ee("TresMeshBasicMaterial",{map:le(_),transparent:"",side:$.DoubleSide,depthWrite:"",renderOrder:1},null,8,It)],8,Ut)]))}},{defineComponent:Ot}=await x("vue"),{createElementVNode:ke,unref:Nt,createVNode:Gt,openBlock:Ht,createElementBlock:jt}=await x("vue"),Qt=["rotation-x"],G=await x("three"),{watch:$e}=await x("vue"),Xt=`
varying vec2 vUv;
varying vec3 vPosition;
void main(){
	vUv=uv;
	vPosition=position;
	csm_Position=position;
}
`,Yt=`
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
`,Ta=Ot({__name:"shaderCircleWave",props:{color:{default:"#ffffff"},colorDark:{default:"#000000"},speed:{default:1}},setup(v){const e=v,n={uTime:{value:0},uScanTex:{value:null},uScanColor:{value:new G.Color(e.color)},uScanColorDark:{value:new G.Color(e.colorDark)}},{state:o}=Re("./plugins/floor/image/scan.png");$e(()=>o.value,a=>{a&&(a.wrapS=G.RepeatWrapping,a.wrapT=G.RepeatWrapping,a.needsUpdate=!0,n.uScanTex.value=a)}),$e(()=>[e.color,e.colorDark],([a,s])=>{n.uScanColor.value.set(a),n.uScanColorDark.value.set(s)});const{onBeforeRender:l}=Q();return l(()=>{n.uTime.value+=.01*e.speed}),(a,s)=>(Ht(),jt("TresGroup",null,[ke("TresMesh",{"rotation-x":-Math.PI/2},[s[0]||(s[0]=ke("TresPlaneGeometry",{args:[1,1]},null,-1)),Gt(Nt(We),{baseMaterial:G.MeshBasicMaterial,vertexShader:Xt,fragmentShader:Yt,uniforms:n,side:G.DoubleSide,transparent:"",blending:G.AdditiveBlending,flatShading:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,silent:""},null,8,["baseMaterial","side","blending"])],8,Qt)]))}}),{defineComponent:Zt}=await x("vue"),{unref:Jt,createElementVNode:Kt,openBlock:qt,createElementBlock:ea}=await x("vue"),ta=["object"],ce=await x("three"),{watch:aa,onUnmounted:oa}=await x("vue"),Ea=Zt({__name:"cartoonMagic",props:{color:{default:"#00ffff"},speed:{default:1}},setup(v){const e=v,n=c=>{const t=new ce.Color(e.color),r=new ce.Vector4(t.r,t.g,t.b,c);return new Ye(r)},o=new je,l=new Qe;l.setCrossOrigin("");const{scene:a}=Ue(),s=new ce.Group;a.value.add(s),oa(()=>{a.value.remove(s)}),l.load("./plugins/floor/json/CartoonMagicZone2.json",c=>{c.traverse(t=>{if(t.type==="ParticleEmitter"){t.name==="BasicZoneRedEmitter"&&t.rotation.set(Math.PI/2,0,0);const r=t.system;r.startSpeed.value===-.25&&(r.startSpeed=new Xe(-.5)),r.startColor=n(r.startColor.color.w),o.addSystem(r)}}),c.type==="ParticleEmitter"&&o.addSystem(c.system),s.add(c)});const{onBeforeRender:i}=Q();return i(()=>{o.update(.01*e.speed)}),aa(()=>[e.color],()=>{o.systemToBatchIndex.forEach((c,t)=>{t.startColor=n(t.startColor.color.w)})}),(c,t)=>(qt(),ea("TresGroup",null,[Kt("primitive",{object:Jt(o)},null,8,ta)]))}}),{defineComponent:na}=await x("vue"),{createElementVNode:Ae,normalizeProps:sa,guardReactiveProps:ra,openBlock:ia,createElementBlock:la}=await x("vue"),U=await x("three"),{watch:Le,reactive:ca,ref:pa}=await x("vue"),Ca=na({__name:"dynamicRotatingBase",props:{type:{default:"imgA"},color:{default:"#fff"},opacity:{default:.95},rotationZ:{default:.01},videoLoop:{type:Boolean,default:!1}},setup(v){const e=pa(),{onBeforeRender:n}=Q();n(()=>{e.value&&(e.value.rotation.z+=l.rotationZ)});const o={imgA:{type:"img",path:"./plugins/floor/image/imgFloor1.png"},imgB:{type:"img",path:"./plugins/floor/image/imgFloor2.png"},imgC:{type:"img",path:"./plugins/floor/image/imgFloor3.png"},videoA:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV1.mp4"},videoB:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV2.mp4"},videoC:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV3.mp4"}},l=v,a=ca({color:l.color,map:null,side:U.DoubleSide,transparent:!0,opacity:l.opacity,blending:U.AdditiveBlending,depthTest:!0,depthWrite:!1}),s=document.createElement("video");return Le(()=>l.type,async i=>{if(a.map?.dispose(),o[i].type==="img"){const c=await Ie(o[i].path);c.colorSpace=U.SRGBColorSpace,c.wrapS=U.RepeatWrapping,c.wrapT=U.RepeatWrapping,c.repeat.set(1,1),a.map=c}else if(o[i].type==="video"){s.src=o[i].path,s.crossOrigin="anonymous",s.loop=l.videoLoop,s.muted=!0,s.play();const c=new U.VideoTexture(s);c.colorSpace=U.SRGBColorSpace,c.wrapS=U.RepeatWrapping,c.wrapT=U.RepeatWrapping,c.repeat.set(1,1),a.map=c}},{immediate:!0}),Le(()=>[l.color,l.opacity,l.videoLoop],([i,c,t])=>{a.color=new U.Color(i),a.opacity=c,s.loop=t}),(i,c)=>(ia(),la("TresMesh",{ref_key:"tmRef",ref:e},[c[0]||(c[0]=Ae("TresPlaneGeometry",{args:[10,10]},null,-1)),Ae("TresMeshBasicMaterial",sa(ra(a)),null,16)],512))}});export{Ea as _sfc_main,Ta as _sfc_main$1,Ca as _sfc_main$2,Pa as _sfc_main$3,Ma as _sfc_main$4,ba as _sfc_main$5,ya as _sfc_main$6,_a as _sfc_main$7,Sa as _sfc_main$8};
