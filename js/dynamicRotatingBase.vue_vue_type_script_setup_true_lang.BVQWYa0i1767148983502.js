import{importShared as y}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as oe,_l as H,rz as De,NA as J,kk as Ge,no as Ie,zr as je}from"./index.DTe2qqjO1767148983502.js";import{useFBO as ve,useTexture as He}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{instance as re}from"./Resource.DwxffO9V1767148983502.js";import{gsapWithCSS as fe}from"./index.Cpf5Yeb11767148983502.js";import{EffectComposer as Fe,RenderPass as Oe,ShaderPass as Qe}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as Ne}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";import{BatchedRenderer as Xe,QuarksLoader as Ye,ConstantValue as Ze,ConstantColor as Je}from"./three.quarks.esm.B4t1posA1767148983502.js";var Ke=Object.defineProperty,qe=(_,e,i)=>e in _?Ke(_,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):_[e]=i,se=(_,e,i)=>(qe(_,typeof e!="symbol"?e+"":e,i),i);const{OrthographicCamera:et,PlaneGeometry:tt,Mesh:at}=await y("three");class he{constructor(e){se(this,"camera",new et(-1,1,1,-1,0,1)),se(this,"geometry",new tt(2,2)),se(this,"mesh"),this.mesh=new at(this.geometry,e)}get material(){return this.mesh.material}set material(e){this.mesh.material=e}dispose(){this.mesh.geometry.dispose()}render(e){e.render(this.mesh,this.camera)}}const ot={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
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
  `},{BackSide:nt,BoxGeometry:rt,InstancedMesh:st,Mesh:G,MeshLambertMaterial:it,MeshStandardMaterial:ge,PointLight:lt,Scene:ct,Object3D:pt}=await y("three");class de extends ct{constructor(){super();const e=new rt;e.deleteAttribute("uv");const i=new ge({side:nt}),t=new ge,c=new lt(16777215,900,28,2);c.position.set(.418,16.199,.3),this.add(c);const a=new G(e,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const r=new st(e,t,6),s=new pt;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),r.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),r.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),r.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),r.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),r.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),r.setMatrixAt(5,s.matrix),this.add(r);const u=new G(e,Q(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const o=new G(e,Q(50));o.position.set(-16.109,18.021,-8.207),o.scale.set(.1,2.425,2.751),this.add(o);const n=new G(e,Q(17));n.position.set(14.904,12.198,-1.832),n.scale.set(.15,4.265,6.331),this.add(n);const w=new G(e,Q(43));w.position.set(-.462,8.89,14.52),w.scale.set(4.38,5.441,.088),this.add(w);const h=new G(e,Q(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new G(e,Q(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function Q(_){return new it({color:0,emissive:16777215,emissiveIntensity:_})}const mt=`

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

`,{UniformsUtils:ut,Vector2:we}=await y("three");function Y(_){const e={..._};return"defines"in _&&(e.defines={..._.defines}),"uniforms"in _&&(e.uniforms=ut.clone(_.uniforms)),e}const ft={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new we},parentMapSize:{value:new we},parentLevel:{value:0}},vertexShader:`
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

		${mt}

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
	`},{Color:dt,ShaderMaterial:Z,MathUtils:xe,WebGLRenderTarget:vt,NearestFilter:ye}=await y("three"),_e=new dt;class ht{constructor(e){e||(e=`

				#pragma unroll_loop
				for ( int i = 0; i < SAMPLES; i ++ ) {

					gl_FragColor += samples[ i ] * weights[ i ];

				}

			`);const i=Y(ft);i.fragmentShader=i.fragmentShader.replace(/<mipmap_logic>/g,e);const t=new Array(4);t[0]=new Z(Y(i)),t[0].defines.X_IS_EVEN=0,t[0].defines.Y_IS_EVEN=0,t[1]=new Z(Y(i)),t[1].defines.X_IS_EVEN=1,t[1].defines.Y_IS_EVEN=0,t[2]=new Z(Y(i)),t[2].defines.X_IS_EVEN=0,t[2].defines.Y_IS_EVEN=1,t[3]=new Z(Y(i)),t[3].defines.X_IS_EVEN=1,t[3].defines.Y_IS_EVEN=1;const c=new vt;c.texture.minFilter=ye,c.texture.magFilter=ye,this._swapTarget=c,this._copyQuad=new he(new Z(ot)),this._mipQuad=new he(null),this._mipMaterials=t}update(e,i,t,c=!1){e.isWebGLRenderTarget&&(e=e.texture);const a=t.autoClear,r=t.getClearAlpha(),s=t.getRenderTarget();t.getClearColor(_e);const u=this._copyQuad,o=this._mipQuad,n=this._swapTarget,w=this._mipMaterials;let h,f;c?(h=xe.floorPowerOfTwo(e.image.width),f=xe.floorPowerOfTwo(e.image.height)):(h=Math.floor(e.image.width),f=Math.floor(e.image.height));const P=Math.floor(h*1.5),b=Math.floor(f);i.setSize(P,b),n.texture.type!==i.texture.type?(n.dispose(),n.copy(i),n.texture.image={...n.texture.image}):n.setSize(P,b),t.autoClear=!1,t.setClearColor(0),t.setClearAlpha(),u.material.uniforms.tDiffuse.value=e,u.camera.setViewOffset(h,f,0,0,P,b),t.setRenderTarget(i),t.clear(),u.render(t),t.setRenderTarget(n),t.clear(),u.render(t);let S=h,M=f,p=0;for(;S>1&&M>1;){const d=(S%2===0?1:0)|(M%2===0?2:0),x=w[d];x.uniforms.map.value=n.texture,x.uniforms.parentLevel.value=p,x.uniforms.parentMapSize.value.set(S,M),x.uniforms.originalMapSize.value.set(h,f),o.material=x,S=Math.floor(S/2),M=Math.floor(M/2);const E=b-2*M;t.setRenderTarget(i),o.camera.setViewOffset(S,M,-h,-E,P,b),o.render(t),t.setRenderTarget(n),x.uniforms.map.value=i.texture,o.render(t),p++}return t.setRenderTarget(s),t.setClearAlpha(r),t.setClearColor(_e),t.autoClear=a,p+1}dispose(){this._swapTarget.dispose(),this._mipQuad.dispose(),this._copyQuad.dispose(),this._mipMaterials.forEach(e=>e.dispose())}}const{defineComponent:gt}=await y("vue"),k=await y("three"),Ea=gt({__name:"reflectorMipMap",props:{parent:{},resolution:{default:512},ignoreObjects:{default:[]}},setup(_,{expose:e}){const i=_,t=new k.Plane,c=new k.Matrix4,a=new k.PerspectiveCamera,r=new ht,s=ve({width:i.resolution,height:i.resolution,settings:{type:k.UnsignedByteType}}),u=ve({width:i.resolution,height:i.resolution,settings:{type:k.UnsignedByteType}}),{camera:o,renderer:n,scene:w}=oe(),h=()=>{if(!o.value)return;t.set(new k.Vector3(0,1,0),0),t.applyMatrix4(i.parent.matrixWorld),a.copy(o.value);const P=new k.Vector3(0,0,1).clone().negate(),b=o.value.getWorldPosition(new k.Vector3);P.reflect(t.normal);const S=new k.Vector3;t.projectPoint(b,S);const M=S.clone();M.sub(b),M.add(S),a.position.copy(M);const p=new k.Vector3(0,0,-1);p.applyQuaternion(o.value.getWorldQuaternion(new k.Quaternion)),p.add(b);const m=new k.Vector3;i.parent.getWorldPosition(m),m.sub(p),m.reflect(t.normal).negate(),m.add(i.parent.getWorldPosition(new k.Vector3)),a.up.set(0,1,0),a.applyQuaternion(o.value.getWorldQuaternion(new k.Quaternion)),a.up.reflect(t.normal),a.lookAt(m),a.updateMatrixWorld();const l=new k.Matrix4;l.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),l.multiply(a.projectionMatrix),l.multiply(a.matrixWorldInverse),c.copy(l),t.applyMatrix4(a.matrixWorldInverse);const d=new k.Vector4(t.normal.x,t.normal.y,t.normal.z,t.constant),x=a.projectionMatrix,E=new k.Vector4;E.x=(Math.sign(d.x)+x.elements[8])/x.elements[0],E.y=(Math.sign(d.y)+x.elements[9])/x.elements[5],E.z=-1,E.w=(1+x.elements[10])/x.elements[14],d.multiplyScalar(2/d.dot(E)),x.elements[2]=d.x,x.elements[6]=d.y,x.elements[10]=d.z+1,x.elements[14]=d.w;const C=n.getRenderTarget();n.setRenderTarget(s.value),n.state.buffers.depth.setMask(!0),n.autoClear===!1&&n.clear(),i.ignoreObjects.forEach(R=>R.visible=!1),n.render(w.value,a),i.ignoreObjects.forEach(R=>R.visible=!0),n.setRenderTarget(C)},{onBeforeRender:f}=H();return f(()=>{h(),s.value&&u.value&&n&&r.update(s.value.texture,u.value,n)}),e({matrix:c,renderTarget:u}),(P,b)=>null}}),{withAsyncContext:wt,defineComponent:xt}=await y("vue"),{createElementVNode:ie,unref:q,openBlock:yt,createElementBlock:_t}=await y("vue"),St=["rotateX","receiveShadow"],Mt=["color","map","normalMap","metalnessMap","roughnessMap","metalness","roughness","normalScale","side"],{watch:Se}=await y("vue"),X=await y("three"),Ca=xt({__name:"rubberTiles",props:{color:{default:"#FFFFFF"},repeat:{default:{x:1,y:1}},metalness:{default:1},roughness:{default:.66},normalScale:{default:1},receiveShadow:{type:Boolean,default:!1}},async setup(_){let e,i;const t=_,{textures:c}=([e,i]=wt(()=>De(["./plugins/floor/image/rubber_tiles_diff_1k.jpg","./plugins/floor/image/rubber_tiles_nor_gl_1k.jpg","./plugins/floor/image/rubber_tiles_arm_1k.jpg"])),e=await e,i(),e);return Se([c],([a])=>{if(a&&a.length)for(let r=0;r<a.length;r++)a[r].colorSpace=X.LinearSRGBColorSpace,a[r].wrapS=X.RepeatWrapping,a[r].wrapT=X.RepeatWrapping,a[r].magFilter=X.LinearFilter,a[r].minFilter=X.LinearMipmapLinearFilter,a[r].repeat.set(t.repeat.x,t.repeat.y)}),Se(()=>t.repeat,a=>{for(let r=0;r<c.value.length;r++)c.value[r].repeat.set(a.x,a.y)},{deep:!0}),(a,r)=>(yt(),_t("TresGroup",null,[ie("TresMesh",{rotateX:-Math.PI/2,receiveShadow:a.receiveShadow},[r[0]||(r[0]=ie("TresPlaneGeometry",{args:[10,10]},null,-1)),ie("TresMeshStandardMaterial",{color:t.color,map:q(c)[0],normalMap:q(c)[1],metalnessMap:q(c)[2],roughnessMap:q(c)[2],metalness:a.metalness,roughness:a.roughness,normalScale:a.normalScale,side:X.DoubleSide},null,8,Mt)],8,St)]))}}),{defineComponent:Pt}=await y("vue"),{openBlock:Me,createElementBlock:Pe,createCommentVNode:bt}=await y("vue"),Et=["object"],{ref:be,toRaw:Ct,watch:ee}=await y("vue"),za=Pt({__name:"topoBase",props:{selected:{default:"baseModelA"},type:{default:["baseModelA","baseModelB"]},colorlist:{default:["#6381EE","#FFFFFF"]},roughness:{default:.5},metalness:{default:.6}},setup(_){const e=_,i=be(!1);(async()=>{for(const o of e.type)await re.getResource("GLTFLoader",`./plugins/floor/models/topoBase/${o}.glb`,`topo-${o}.glb`);i.value=!0})();const c=be(null),a={};ee(()=>i.value,o=>{o&&(c.value=re.getReactiveItem(`topo-${e.selected}.glb`)().scene.clone(),r(c.value))},{immediate:!0}),ee(()=>e.selected,async o=>{c.value=re.getReactiveItem(`topo-${o}.glb`)().scene.clone(),r(c.value)});const r=o=>{for(const n in a)a[n].dispose(),delete a[n];o.traverse(n=>{if(n.isMesh&&n.material){const w=n.material;a[w.uuid]||(a[w.uuid]=w.clone()),n.material=a[w.uuid]}}),s(e.colorlist)},s=o=>{let n=0;for(const w in a)a.hasOwnProperty(w)&&a[w].color.set(o[n]),n++},u=(o,n)=>{for(const w in a)a.hasOwnProperty(w)&&(a[w][o]=n)};return ee(()=>e.colorlist,o=>{s(o)},{deep:!0}),ee(()=>[e.roughness,e.metalness],([o,n])=>{u("roughness",o),u("metalness",n)},{deep:!0}),(o,n)=>(Me(),Pe("TresGroup",null,[c.value?(Me(),Pe("primitive",{key:0,object:Ct(c.value)},null,8,Et)):bt("",!0)]))}}),{defineComponent:zt}=await y("vue"),{unref:Ee,openBlock:Tt,createElementBlock:kt,createCommentVNode:$t}=await y("vue"),Rt=["object"],{watch:Ce}=await y("vue"),A=await y("three"),Ta=zt({__name:"hexagonalWall",props:{color:{default:"#7432B4"}},setup(_){const{renderer:e,scene:i,camera:t,sizes:c}=oe(),a=_;let r=null;const{textures:s,isLoading:u}=De(["./plugins/floor/image/concrete_wet_floor_basecolor.jpg","./plugins/floor/image/metal_plate_diff_1k.jpg"]),{state:o}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelI.glb",{draco:!0,decoderPath:"./draco/"});let n=null;Ce([o,s,u],([M,p,m])=>{M&&p&&!m&&(n=M.scene,n.traverse(l=>{if(l instanceof A.Mesh){const d=l.position.clone(),x=20+Math.random()*30,E=Math.random()*Math.PI*2,C=(Math.random()-.5)*20,R=new A.Vector3(d.x+Math.cos(E)*x,d.y+C,d.z+Math.sin(E)*x);w.push({mesh:l,originalPosition:d,scatteredPosition:R}),l.position.copy(R),l.name.includes("_")?(p[0].wrapS=A.RepeatWrapping,p[0].wrapT=A.RepeatWrapping,p[0].repeat.set(10,10),l.material.map=s.map,l.material.needsUpdate=!0,l.material.emissive=new A.Color("#7432B4"),l.material.emissiveIntensity=3.5):(p[1]&&(p[1].wrapS=A.RepeatWrapping,p[1].wrapT=A.RepeatWrapping,p[1].repeat.set(10,10),l.material.map=p[1]),l.material.color=new A.Color("#7432B4"),l.material.metalness=.8,l.material.roughness=.2,l.material.envMapIntensity=2.5,l.material.needsUpdate=!0)}}),b(),P(),h())});const w=[],h=()=>{if(w.length===0)return;const M=fe.timeline();w.forEach((p,m)=>{const l=Math.random()*.8,d={x:(Math.random()-.5)*Math.PI*2,y:(Math.random()-.5)*Math.PI*2,z:(Math.random()-.5)*Math.PI*2};p.mesh.rotation.set(d.x,d.y,d.z),M.to(p.mesh.position,{x:p.originalPosition.x,y:p.originalPosition.y,z:p.originalPosition.z,duration:3,ease:"power2.out",delay:l},0),M.to(p.mesh.rotation,{x:0,y:0,z:0,duration:3,ease:"power2.out",delay:l},0)}),M.call(()=>{f()}),console.log(`开始拼合动画，共 ${w.length} 个mesh`)},f=()=>{w.forEach((M,p)=>{fe.to(M.mesh.position,{z:M.originalPosition.z+3+p/50,duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut"})}),console.log("Z轴微动动画已启动")},P=()=>{if(!e||!t.value||!c.width.value)return;r=new Fe(e);const M=new Oe(i.value,t.value);r.addPass(M);const p=new Ne(new A.Vector2(c.width.value,c.height.value),.6,.05,.25);r.addPass(p)},b=()=>{const M=new A.PMREMGenerator(e),p=new de,m=M.fromScene(p).texture;i.value.environment=m,n.traverse(l=>{l instanceof A.Mesh&&l.material&&(l.material.envMap=m,l.material.needsUpdate=!0)}),p.dispose()},{onRender:S}=H();return S(()=>{r&&r.render()}),Ce(()=>[a.color],([M])=>{n.traverse(p=>{p instanceof A.Mesh&&p.material&&(p.material.color=new A.Color(M),p.material.emissive=new A.Color(M))})}),(M,p)=>Ee(o)?(Tt(),kt("primitive",{key:0,object:Ee(o)?.scene,"position-y":.01},null,8,Rt)):$t("",!0)}}),{defineComponent:At}=await y("vue"),{createElementVNode:ze,unref:Te,openBlock:ke,createElementBlock:$e,createCommentVNode:Re}=await y("vue"),Bt={key:0},Vt=["object"],Lt=["object"],Wt=["object"],{onMounted:Ut,watch:le,computed:ce}=await y("vue"),j=await y("three"),ka=At({__name:"mechaFloor",props:{color:{default:"#ffed00"}},setup(_){const{renderer:e,scene:i,camera:t,sizes:c}=oe(),a=_;let r=null;const s={uniforms:{tDiffuse:{value:null},contrast:{value:1.8}},vertexShader:`
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
    `},{state:u}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelJ.glb",{draco:!0,decoderPath:"./draco/"}),o=ce(()=>u?.value?.scene),{state:n}=J("plugins/floor/models/topoBase/baseModelL.glb",{draco:!0,decoderPath:"./draco/"}),{state:w}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelK.glb",{draco:!0,decoderPath:"./draco/"}),h=ce(()=>w.value?.animations||[]),f=ce(()=>w?.value?.scene),{actions:P}=Ge(h,f);le(P,p=>{p.Scene&&p.Scene.play()}),le(o,p=>{p&&p.traverse(m=>{m instanceof j.Mesh&&(m.material.emissive=new j.Color("#ffed00"),m.material.emissiveIntensity=20.5,m.material.toneMapped=!0,m.material.needsUpdate=!0)})});const b=()=>{if(!e||!t.value||!c.width.value)return;r=new Fe(e);const p=new Oe(i.value,t.value);r.addPass(p);const m=new Ne(new j.Vector2(c.width.value,c.height.value),.1,.1,.1);r.addPass(m);const l=new Qe(s);l.uniforms.contrast.value=1.1,r.addPass(l)},S=()=>{const p=new j.PMREMGenerator(e),m=new de,l=p.fromScene(m).texture;i.value.environment=l,o.value&&o.value.traverse(d=>{d instanceof j.Mesh&&d.material&&(d.material.envMap=l,d.material.needsUpdate=!0)}),m.dispose()},{onRender:M}=H();return M(()=>{r&&r.render()}),Ut(()=>{S(),setTimeout(()=>{b()},200)}),le(()=>[a.color],([p])=>{o.value&&o.value.traverse(m=>{m instanceof j.Mesh&&m.material&&(m.material.emissive=new j.Color(p))})}),(p,m)=>o.value&&f.value?(ke(),$e("TresGroup",Bt,[ze("primitive",{object:o.value,"position-y":.01},null,8,Vt),Te(n)?(ke(),$e("primitive",{key:0,object:Te(n)?.scene,"position-y":.1},null,8,Lt)):Re("",!0),ze("primitive",{object:f.value,"position-y":.1},null,8,Wt)])):Re("",!0)}}),{defineComponent:Dt}=await y("vue"),{unref:Ae,openBlock:Be,createElementBlock:Ve,createCommentVNode:It}=await y("vue"),Ft=["object"],{watch:te}=await y("vue"),O=await y("three"),$a=Dt({__name:"hexagonalFloor",props:{floorColor:{default:"#ff0000"},floorMetalness:{default:.8},floorRoughness:{default:.2},floorEnvMapIntensity:{default:2.5},sideColor:{default:"#ffffff"},sideOpacity:{default:.9},speed:{default:.3}},setup(_){const{renderer:e,scene:i}=oe(),t=_,{state:c}=Ie("./plugins/floor/image/concrete_wet_floor_basecolor.jpg");te(c,n=>{n&&(n.wrapS=O.RepeatWrapping,n.wrapT=O.RepeatWrapping,n.repeat.set(10,10))});const{state:a}=J("https://opensource.cdn.icegl.cn/model/floor/baseModelI.glb",{draco:!0,decoderPath:"./draco/"}),r=[],s=fe.timeline();te(()=>a.value,n=>{if(!n.scene)return;n.scene.traverse(h=>{if(h instanceof O.Mesh){const f=h.position.clone(),P=h.rotation.clone(),b=Math.random()-.5,S=new O.Vector3(f.x,f.y+b,f.z),M=Math.PI/12,p=new O.Euler(P.x+(Math.random()-.5)*M,P.y+(Math.random()-.5)*M,P.z);r.push({mesh:h,originalPosition:f,scatteredPosition:S,originalRotation:P,scatteredRotation:p}),h.name.includes("_")?(h.material.emissiveIntensity=2,h.material.metalness=1,h.material.roughness=0,h.material.transparent=!0):h.material.map=c.value,h.material.needsUpdate=!0}}),r.forEach(({mesh:h,scatteredPosition:f,scatteredRotation:P},b)=>{s.to(h.position,{x:f.x,y:f.y,z:f.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0),s.to(h.rotation,{x:P.x,y:P.y,z:P.z,ease:"power1.inOut",repeat:-1,yoyo:!0},0)}),u()});const u=()=>{const n=new O.PMREMGenerator(e),w=new de,h=n.fromScene(w).texture;i.value.environment=h,a.value.scene.traverse(f=>{f instanceof O.Mesh&&f.material&&(f.material.envMap=h,f.material.needsUpdate=!0)}),w.dispose(),o(t.sideColor,t.floorColor,t.sideOpacity,t.floorMetalness,t.floorRoughness,t.floorEnvMapIntensity)},o=(n,w,h,f,P,b)=>{a.value?.scene&&a.value.scene.traverse(S=>{S instanceof O.Mesh&&S.material&&(S.name.includes("_")?(S.material.emissive.set(n),S.material.opacity=h):(S.material.color.set(w),S.material.metalness=f,S.material.roughness=P,S.material.envMapIntensity=b))})};return te(()=>[t.sideColor,t.floorColor,t.sideOpacity,t.floorMetalness,t.floorRoughness,t.floorEnvMapIntensity],([n,w,h,f,P,b])=>{o(n,w,h,f,P,b)}),te(()=>[t.speed],([n])=>{s.timeScale(n)},{immediate:!0}),(n,w)=>(Be(),Ve("TresGroup",null,[Ae(a)?(Be(),Ve("primitive",{key:0,object:Ae(a)?.scene,position:[0,-.1,0]},null,8,Ft)):It("",!0)]))}}),{unref:pe,createElementVNode:ae,openBlock:Ot,createElementBlock:Nt}=await y("vue"),Gt=["geometry"],jt=["color","transparent","opacity","side"],Ht=["geometry"],Qt=["map","side"],{watch:Xt}=await y("vue"),$=await y("three"),Ra={__name:"ribbonArrow",props:{length:{default:20},width:{default:1},bendPosition:{default:.5},curvature:{default:.4},backgroundColor:{default:"#00aaff"},backgroundAlpha:{default:.25},segments:{default:240},arrowColor:{default:"#ffffff"},arrowWidth:{default:.3},arrowHeight:{default:.5},arrowSpacing:{default:.5},arrowOffset:{default:0},arrowLineWidth:{default:2},arrowStyle:{default:"chevron"},speed:{default:.5},pixelWorldScale:{default:.03}},setup(_){const e=_,i=()=>{const m=Math.max(1e-4,e.length),l=$.MathUtils.clamp(e.bendPosition,0,1),d=m*l,x=m-d,E=Math.min(d,x),C=e.curvature>0&&l>0&&l<1?Math.min(E*.9,m*.2*e.curvature):0,R=Math.max(0,d-C),v=C>0?Math.PI*C/2:0,W=Math.max(0,x-C);return{fullLen:R+v+W,L1val:d,radius:C,len1:R,arcLen:v}};let{fullLen:t,L1val:c,radius:a,len1:r,arcLen:s}=i();const u=m=>{if(m=$.MathUtils.clamp(m,0,t),m<=r)return new $.Vector2(m,0);if(m<=r+s&&a>0){const l=(m-r)/s,d=-Math.PI/2+l*(Math.PI/2),x=c-a,E=a;return new $.Vector2(x+Math.cos(d)*a,E+Math.sin(d)*a)}else{const l=m-(r+s);return new $.Vector2(c,a+l)}};let o=[],n=[],w=0;const h=()=>{o=[],n=[];const m=Math.max(8,Math.floor(e.segments));let l=u(0),d=0;o.push(l),n.push(0),w=0;for(let x=1;x<=m;x++){const E=t*(x/m),C=u(E),R=C.clone().sub(l).length();d+=R,o.push(C),n.push(d),l=C}w=d};h();let f=null;const P=()=>{const m=o.length*2,l=new Float32Array(m*3),d=new Float32Array(m*3),x=new Float32Array(m*2),E=[],C=e.width/2;function R(v){return v===0?o[1].clone().sub(o[0]).normalize():v===o.length-1?o[v].clone().sub(o[v-1]).normalize():o[v+1].clone().sub(o[v-1]).normalize()}for(let v=0;v<o.length;v++){const W=o[v],U=R(v),B=new $.Vector2(-U.y,U.x).normalize(),D=W.x-B.x*C,g=W.y-B.y*C,T=W.x+B.x*C,ne=W.y+B.y*C;l[(v*2+0)*3+0]=D,l[(v*2+0)*3+1]=g,l[(v*2+0)*3+2]=0,l[(v*2+1)*3+0]=T,l[(v*2+1)*3+1]=ne,l[(v*2+1)*3+2]=0,d[(v*2+0)*3+0]=0,d[(v*2+0)*3+1]=0,d[(v*2+0)*3+2]=1,d[(v*2+1)*3+0]=0,d[(v*2+1)*3+1]=0,d[(v*2+1)*3+2]=1;const V=n[v]/(e.arrowWidth+e.arrowSpacing);x[(v*2+0)*2+0]=V,x[(v*2+0)*2+1]=0,x[(v*2+1)*2+0]=V,x[(v*2+1)*2+1]=1}for(let v=0;v<o.length-1;v++){const W=v*2,U=v*2+1,B=(v+1)*2,D=(v+1)*2+1;E.push(W,B,U),E.push(U,B,D)}f&&f.dispose(),f=new $.BufferGeometry,f.setAttribute("position",new $.BufferAttribute(l,3)),f.setAttribute("normal",new $.BufferAttribute(d,3)),f.setAttribute("uv",new $.BufferAttribute(x,2)),f.setIndex(E),f.computeBoundingBox(),f.computeBoundingSphere()};P();const b=({arrowWidthPx:m,arrowHeightPx:l,spacingPx:d,style:x,color:E,lineWidth:C,offset:R})=>{const v=d,W=m+v*2,U=l+v*2,B=Math.max(1,window.devicePixelRatio||1),D=document.createElement("canvas");D.width=W*B,D.height=U*B,D.style.width=W+"px",D.style.height=U+"px";const g=D.getContext("2d");g.scale(B,B),g.clearRect(0,0,W,U),g.strokeStyle=E,g.fillStyle=E,g.lineWidth=C,g.lineJoin="round",g.lineCap="round";const T=v,ne=v,V=m,L=l,K=T+V/2,z=ne+L/2+R;x==="chevron"?(g.beginPath(),g.moveTo(T,z-L/2),g.lineTo(T+V,z),g.lineTo(T,z+L/2),g.stroke()):x==="double"?(g.beginPath(),g.moveTo(T,z-L/2),g.lineTo(T+V*.7,z),g.lineTo(T,z+L/2),g.stroke(),g.beginPath(),g.moveTo(T+V*.8,z-L/2),g.lineTo(T+V*1.5,z),g.lineTo(T+V*.8,z+L/2),g.stroke()):x==="triangle"?(g.beginPath(),g.moveTo(T,z-L/2),g.lineTo(T+V,z),g.lineTo(T,z+L/2),g.closePath(),g.fill()):x==="diamond"?(g.beginPath(),g.moveTo(K,z-L/2),g.lineTo(K+V/2,z),g.lineTo(K,z+L/2),g.lineTo(K-V/2,z),g.closePath(),g.fill()):(g.beginPath(),g.moveTo(T,z-L/2),g.lineTo(T+V,z),g.lineTo(T,z+L/2),g.stroke());const F=new $.CanvasTexture(D);return F.generateMipmaps=!1,F.minFilter=$.LinearFilter,F.magFilter=$.LinearFilter,F.wrapS=$.RepeatWrapping,F.wrapT=$.ClampToEdgeWrapping,F.repeat.set(w/(e.arrowWidth+e.arrowSpacing),1),F.needsUpdate=!0,F};let S=null;const M=()=>{S&&S.dispose(),S=b({arrowWidthPx:e.arrowWidth/e.pixelWorldScale,arrowHeightPx:e.arrowHeight/e.pixelWorldScale,spacingPx:e.arrowSpacing/e.pixelWorldScale,style:e.arrowStyle,color:e.arrowColor,lineWidth:e.arrowLineWidth,offset:e.arrowOffset})};M(),Xt(()=>[e.length,e.width,e.bendPosition,e.curvature,e.segments,e.arrowColor,e.arrowWidth,e.arrowHeight,e.arrowSpacing,e.arrowOffset,e.arrowLineWidth,e.arrowStyle,e.pixelWorldScale],()=>{({fullLen:t,L1val:c,radius:a,len1:r,arcLen:s}=i()),h(),P(),M()});const{onBeforeRender:p}=H();return p(()=>{if(S){const m=e.speed*.01;S.offset.x=(S.offset.x-m)%1,S.offset.x>1&&(S.offset.x-=1),S.needsUpdate=!0}}),(m,l)=>(Ot(),Nt("TresGroup",null,[ae("TresMesh",{geometry:pe(f)},[ae("TresMeshBasicMaterial",{color:_.backgroundColor,transparent:_.backgroundAlpha<1,opacity:_.backgroundAlpha,side:$.DoubleSide,depthWrite:""},null,8,jt)],8,Gt),ae("TresMesh",{geometry:pe(f)},[ae("TresMeshBasicMaterial",{map:pe(S),transparent:"",side:$.DoubleSide,depthWrite:"",renderOrder:1},null,8,Qt)],8,Ht)]))}},{defineComponent:Yt}=await y("vue"),{createElementVNode:me,mergeProps:Zt,openBlock:Jt,createElementBlock:Kt}=await y("vue"),qt=["rotation-x"],N=await y("three"),{reactive:ea,watch:Le,ref:ta}=await y("vue"),Aa=Yt({__name:"shaderCircleWave",props:{color:{default:"#ffffff"},colorDark:{default:"#000000"},speed:{default:1}},setup(_){const e=_,i=ea({side:N.DoubleSide,transparent:!0,blending:N.AdditiveBlending,flatShading:!0,depthTest:!0,depthWrite:!1,uniforms:{uTime:{type:"f",value:0},uScanTex:{type:"t",value:null},uScanColor:{type:"v3",value:new N.Color(e.color)},uScanColorDark:{type:"v3",value:new N.Color(e.colorDark)}},vertexShader:`
varying vec2 vUv;
varying vec3 vPosition;
void main(){
	vUv=uv;
	vPosition=position;
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}
`,fragmentShader:`
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
    gl_FragColor=vec4(col,1.);
}
`}),t=ta(null),{state:c}=Ie("./plugins/floor/image/scan.png");Le(()=>c.value,r=>{r&&(r.wrapS=N.RepeatWrapping,r.wrapT=N.RepeatWrapping,i.uniforms.uScanTex.value=r,t.value.needsUpdate=!0,t.value.uniformsNeedUpdate=!0)}),Le(()=>[e.color,e.colorDark],([r,s])=>{i.uniforms.uScanColor.value=new N.Color(r),i.uniforms.uScanColorDark.value=new N.Color(s)});const{onBeforeRender:a}=H();return a(()=>{i.uniforms.uTime.value+=.01*e.speed}),(r,s)=>(Jt(),Kt("TresGroup",null,[me("TresMesh",{"rotation-x":-Math.PI/2},[s[0]||(s[0]=me("TresPlaneGeometry",{args:[1,1]},null,-1)),me("TresShaderMaterial",Zt({ref_key:"tsmRef",ref:t},i),null,16)],8,qt)]))}}),{defineComponent:aa}=await y("vue"),{unref:oa,createElementVNode:na,openBlock:ra,createElementBlock:sa}=await y("vue"),ia=["object"],ue=await y("three"),{watch:la,onUnmounted:ca}=await y("vue"),Ba=aa({__name:"cartoonMagic",props:{color:{default:"#00ffff"},speed:{default:1}},setup(_){const e=_,i=u=>{const o=new ue.Color(e.color),n=new ue.Vector4(o.r,o.g,o.b,u);return new Je(n)},t=new Xe,c=new Ye;c.setCrossOrigin("");const{scene:a}=je(),r=new ue.Group;a.value.add(r),ca(()=>{a.value.remove(r)}),c.load("./plugins/floor/json/CartoonMagicZone2.json",u=>{u.traverse(o=>{if(o.type==="ParticleEmitter"){o.name==="BasicZoneRedEmitter"&&o.rotation.set(Math.PI/2,0,0);const n=o.system;n.startSpeed.value===-.25&&(n.startSpeed=new Ze(-.5)),n.startColor=i(n.startColor.color.w),t.addSystem(n)}}),u.type==="ParticleEmitter"&&t.addSystem(u.system),r.add(u)});const{onBeforeRender:s}=H();return s(()=>{t.update(.01*e.speed)}),la(()=>[e.color],()=>{t.systemToBatchIndex.forEach((u,o)=>{o.startColor=i(o.startColor.color.w)})}),(u,o)=>(ra(),sa("TresGroup",null,[na("primitive",{object:oa(t)},null,8,ia)]))}}),{defineComponent:pa}=await y("vue"),{createElementVNode:We,normalizeProps:ma,guardReactiveProps:ua,openBlock:fa,createElementBlock:da}=await y("vue"),I=await y("three"),{watch:Ue,reactive:va,ref:ha}=await y("vue"),Va=pa({__name:"dynamicRotatingBase",props:{type:{default:"imgA"},color:{default:"#fff"},opacity:{default:.95},rotationZ:{default:.01},videoLoop:{type:Boolean,default:!1}},setup(_){const e=ha(),{onBeforeRender:i}=H();i(()=>{e.value&&(e.value.rotation.z+=c.rotationZ)});const t={imgA:{type:"img",path:"./plugins/floor/image/imgFloor1.png"},imgB:{type:"img",path:"./plugins/floor/image/imgFloor2.png"},imgC:{type:"img",path:"./plugins/floor/image/imgFloor3.png"},videoA:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV1.mp4"},videoB:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV2.mp4"},videoC:{type:"video",path:"https://opensource.cdn.icegl.cn/video/floor/floorV3.mp4"}},c=_,a=va({color:c.color,map:null,side:I.DoubleSide,transparent:!0,opacity:c.opacity,blending:I.AdditiveBlending,depthTest:!0,depthWrite:!1}),r=document.createElement("video");return Ue(()=>c.type,async s=>{if(a.map?.dispose(),t[s].type==="img"){const u=await He(t[s].path);u.colorSpace=I.SRGBColorSpace,u.wrapS=I.RepeatWrapping,u.wrapT=I.RepeatWrapping,u.repeat.set(1,1),a.map=u}else if(t[s].type==="video"){r.src=t[s].path,r.crossOrigin="anonymous",r.loop=c.videoLoop,r.muted=!0,r.play();const u=new I.VideoTexture(r);u.colorSpace=I.SRGBColorSpace,u.wrapS=I.RepeatWrapping,u.wrapT=I.RepeatWrapping,u.repeat.set(1,1),a.map=u}},{immediate:!0}),Ue(()=>[c.color,c.opacity,c.videoLoop],([s,u,o])=>{a.color=new I.Color(s),a.opacity=u,r.loop=o}),(s,u)=>(fa(),da("TresMesh",{ref_key:"tmRef",ref:e},[u[0]||(u[0]=We("TresPlaneGeometry",{args:[10,10]},null,-1)),We("TresMeshBasicMaterial",ma(ua(a)),null,16)],512))}});export{Ba as _sfc_main,Aa as _sfc_main$1,Va as _sfc_main$2,$a as _sfc_main$3,Ta as _sfc_main$4,ka as _sfc_main$5,Ra as _sfc_main$6,Ca as _sfc_main$7,za as _sfc_main$8,Ea as _sfc_main$9};
