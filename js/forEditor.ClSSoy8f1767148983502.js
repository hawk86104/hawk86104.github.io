import{importShared as u}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";const{BackSide:y,BoxGeometry:k,Mesh:E,ShaderMaterial:T,UniformsUtils:b,Vector3:d}=await u("three");class v extends E{constructor(){const e=v.SkyShader,n=new T({name:e.name,uniforms:b.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:y,depthWrite:!1});super(new k(1,1,1),n),this.isSky=!0}}v.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new d},up:{value:new d(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const{AnimationClip:R,AnimationMixer:C,Matrix4:z,Quaternion:B,QuaternionKeyframeTrack:A,SkeletonHelper:L,Vector3:O,VectorKeyframeTrack:_}=await u("three");function w(t){const e=new Map,n=new Map,a=t.clone();return h(t,a,function(o,i){e.set(i,o),n.set(o,i)}),a.traverse(function(o){if(!o.isSkinnedMesh)return;const i=o,r=e.get(o),c=r.skeleton.bones;i.skeleton=r.skeleton.clone(),i.bindMatrix.copy(r.bindMatrix),i.skeleton.bones=c.map(function(l){return n.get(l)}),i.bind(i.skeleton,i.bindMatrix)}),a}function h(t,e,n){n(t,e);for(let a=0;a<t.children.length;a++)h(t.children[a],e.children[a],n)}const{ref:F,shallowReactive:D}=await u("vue"),s=await u("three");function S(t){let e=!1;return t.traverse(n=>{n.isSkinnedMesh&&(e=!0)}),e}function x(t){let e=null;return S(t)?(e=w(t),e.updateMatrixWorld(!0)):e=t.clone(),e}function M(t){const e=new s.Box3().setFromObject(t),n=new s.Vector3;e.getCenter(n);const a=new s.Vector3;e.getSize(a);const o=e.min.y,i=new s.Group;return i.name="centeredGroup",t.position.sub(n),t.position.y=-o,i.add(t),i}function V(t){const e=x(t);return M(e)}function W(t,e){if(!t||!e?.length)return;const n=e.filter(c=>c.enabled);if(!n.length)return;const a=n.find(c=>c.eventType==="click"),o=n.find(c=>c.eventType==="doubleclick");let i=null;const r=(c,l)=>{const{currentObject:f,point:p,object:g,distance:m}=l;c.function(l,f,p,g,m)};(a||o)&&(a&&(t.addEventListener("click",c=>{i&&clearTimeout(i),o?i=setTimeout(()=>r(a,c),250):r(a,c)}),console.log(`✅ 已绑定 click uuid=${t.uuid}`)),o&&(t.addEventListener("dblclick",c=>{i&&(clearTimeout(i),i=null),r(o,c)}),console.log(`✅ 已绑定 dblclick uuid=${t.uuid}`)));for(const c of n)["click","doubleclick"].includes(c.eventType)||(t.addEventListener(c.eventType,l=>r(c,l)),console.log(`✅ 已绑定 ${c.eventType} uuid=${t.uuid}`))}function I(t){const e={},n={click:null,doubleclick:null,contextmenu:null,pointerenter:null,pointerleave:null};for(const o of t)o.enabled&&typeof o.function=="function"&&(n[o.eventType]=i=>{const{currentObject:r,point:c,object:l,distance:f}=i;o.function(i,r,c,l,f)},console.log(`✅ 已绑定 ${o.eventType} `));let a=null;(n.click||n.doubleclick)&&(e.click=o=>{a&&clearTimeout(a),n.doubleclick?a=setTimeout(()=>{n.click?.(o)},250):n.click?.(o)},n.doubleclick&&(e.dblclick=o=>{a&&(clearTimeout(a),a=null),n.doubleclick?.(o)}));for(const o of["contextmenu","pointerenter","pointerleave"])n[o]&&(e[o]=n[o]);return e}function G(){window.globalTvtFun&&window.globalTvtFun?.gerstnerWater_updateMeshList&&window.globalTvtFun?.gerstnerWater_updateMeshList(!0)}export{v as Sky,I as extendMakeEvent,W as meshAddEvent,G as onReadySenceOnce,V as standardizationMeshCopy};
