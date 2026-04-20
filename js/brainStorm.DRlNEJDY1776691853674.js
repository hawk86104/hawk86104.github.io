import{importShared as R}from"./3d-tiles-renderer.DtzJa0qA1776691853674.js";import{useLoop as ve,useTres as Ne,useTresContext as at,OrbitControls_default as nt,_export_sfc as it}from"./index.zkNEHgvi1776691853674.js";import{Pane as lt}from"./tweakpane.BQRZXf8M1776691853674.js";import"./index.vue_vue_type_script_setup_true_lang.g8dCI-951776691853674.js";import"./index.vue_vue_type_script_setup_true_lang.DgNBp9EG1776691853674.js";import{useGLTF as st}from"./index.AItqu2Dr1776691853674.js";import{Pass as ut,FullScreenQuad as ct}from"./Pass.UAEV0dr91776691853674.js";import{EffectComposer as dt,RenderPass as pt}from"./RenderPass.CBl7yAnJ1776691853674.js";import{OutputPass as ft}from"./OutputPass.DOyXYaRK1776691853674.js";import{UnrealBloomPass as mt}from"./UnrealBloomPass.Dix_46P41776691853674.js";const ge={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`},{Color:vt,HalfFloatType:ht,MeshDepthMaterial:bt,NearestFilter:Oe,NoBlending:gt,RGBADepthPacking:xt,ShaderMaterial:wt,UniformsUtils:Ct,WebGLRenderTarget:yt}=await R("three");class St extends ut{constructor(e,r,c){super(),this.scene=e,this.camera=r;const a=c.focus!==void 0?c.focus:1,P=c.aperture!==void 0?c.aperture:.025,n=c.maxblur!==void 0?c.maxblur:1;this._renderTargetDepth=new yt(1,1,{minFilter:Oe,magFilter:Oe,type:ht}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new bt,this._materialDepth.depthPacking=xt,this._materialDepth.blending=gt;const s=Ct.clone(ge.uniforms);s.tDepth.value=this._renderTargetDepth.texture,s.focus.value=a,s.aspect.value=r.aspect,s.aperture.value=P,s.maxblur.value=n,s.nearClip.value=r.near,s.farClip.value=r.far,this.materialBokeh=new wt({defines:Object.assign({},ge.defines),uniforms:s,vertexShader:ge.vertexShader,fragmentShader:ge.fragmentShader}),this.uniforms=s,this._fsQuad=new ct(this.materialBokeh),this._oldClearColor=new vt}render(e,r,c){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const a=e.getClearAlpha(),P=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=c.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(a),e.autoClear=P}setSize(e,r){this.materialBokeh.uniforms.aspect.value=e/r,this._renderTargetDepth.setSize(e,r)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const{defineComponent:Pt}=await R("vue"),{openBlock:Rt,createElementBlock:Bt}=await R("vue"),Mt=["object","visible"],{onUnmounted:_t,watchEffect:Et}=await R("vue"),se=await R("three"),At=Pt({__name:"brainShell",props:{model:{},visible:{type:Boolean,default:!0},baseColor:{default:"#492469"},fresnelColor:{default:"#b3a1cf"},fresnelPower:{default:2.5},fresnelIntensity:{default:1.2},specularIntensity:{default:.6},specularShininess:{default:32},roughness:{default:.3},electricColor:{default:"#8b5cf6"},electricIntensity:{default:2.5},electricSpeed:{default:1.5},electricFrequency:{default:8},lightX:{default:2},lightY:{default:3},lightZ:{default:2}},setup(V){const e=V,r=new se.ShaderMaterial({uniforms:{uBaseColor:{value:new se.Color(e.baseColor)},uFresnelColor:{value:new se.Color(e.fresnelColor)},uFresnelPower:{value:e.fresnelPower},uFresnelIntensity:{value:e.fresnelIntensity},uSpecularIntensity:{value:e.specularIntensity},uSpecularShininess:{value:e.specularShininess},uRoughness:{value:e.roughness},uLightPosition:{value:new se.Vector3(e.lightX,e.lightY,e.lightZ)},uTime:{value:0},uElectricColor:{value:new se.Color(e.electricColor)},uElectricIntensity:{value:e.electricIntensity},uElectricSpeed:{value:e.electricSpeed},uElectricFrequency:{value:e.electricFrequency}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

            gl_Position = projectionMatrix * mvPosition;
        }
    `,fragmentShader:`
        uniform vec3 uBaseColor;
        uniform vec3 uFresnelColor;
        uniform float uFresnelPower;
        uniform float uFresnelIntensity;

        uniform float uSpecularIntensity;
        uniform float uSpecularShininess;
        uniform float uRoughness;
        uniform vec3 uLightPosition;

        uniform float uTime;
        uniform vec3 uElectricColor;
        uniform float uElectricIntensity;
        uniform float uElectricSpeed;
        uniform float uElectricFrequency;

        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        float specularLight(vec3 normal, vec3 viewDir, vec3 lightDir, float shininess) {
            vec3 halfVector = normalize(lightDir + viewDir);
            float specAngle = max(dot(halfVector, normal), 0.0);
            return pow(specAngle, shininess);
        }

        float fresnelLight(vec3 normal, vec3 viewDir, float power) {
            return pow(1.0 - max(dot(normal, viewDir), 0.0), power);
        }

        float ambientOcclusion(vec3 normal, vec3 viewDir) {
            float ao = dot(normal, viewDir);
            ao = smoothstep(0.0, 0.5, ao);
            return mix(0.6, 1.0, ao);
        }

        void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            vec3 worldNormal = normalize(vWorldNormal);
            vec3 lightDir = normalize(uLightPosition - vWorldPosition);

            float diffuse = max(dot(worldNormal, lightDir), 0.0);
            diffuse = mix(0.28, 1.0, diffuse);

            float ao = ambientOcclusion(normal, viewDir);
            vec3 color = uBaseColor * diffuse * ao;

            float spec = specularLight(worldNormal, normalize(cameraPosition - vWorldPosition), lightDir, uSpecularShininess);
            spec *= 1.0 - uRoughness;
            color += vec3(1.0) * spec * uSpecularIntensity;

            float fresnelValue = fresnelLight(normal, viewDir, uFresnelPower);
            color += uFresnelColor * fresnelValue * uFresnelIntensity;
            color += vec3(1.0) * pow(fresnelValue, 3.0) * 0.24;

            float wave1 = sin(vWorldPosition.y * uElectricFrequency + uTime * uElectricSpeed) * 0.5 + 0.5;
            float wave2 = sin(vWorldPosition.x * uElectricFrequency * 1.3 - uTime * uElectricSpeed * 0.8) * 0.5 + 0.5;
            float wave3 = sin(vWorldPosition.z * uElectricFrequency * 0.7 + uTime * uElectricSpeed * 1.2) * 0.5 + 0.5;

            float electricPulse = wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2;
            electricPulse = pow(electricPulse, 2.0);

            float electricHighlight = pow(pow(fresnelValue, 1.5) * electricPulse, 0.8);
            vec3 electricGlow = uElectricColor * electricHighlight * uElectricIntensity;
            electricGlow += vec3(1.0, 0.9, 0.8) * pow(electricHighlight, 3.0) * 1.8;

            gl_FragColor = vec4(color + electricGlow, 1.0);
        }
    `,side:se.FrontSide,depthWrite:!0,depthTest:!0});e.model.traverse(a=>{a instanceof se.Mesh&&(a.material=r,a.castShadow=!0,a.receiveShadow=!0,a.renderOrder=0)}),Et(()=>{e.model.visible=e.visible,r.uniforms.uBaseColor.value.set(e.baseColor),r.uniforms.uFresnelColor.value.set(e.fresnelColor),r.uniforms.uFresnelPower.value=e.fresnelPower,r.uniforms.uFresnelIntensity.value=e.fresnelIntensity,r.uniforms.uSpecularIntensity.value=e.specularIntensity,r.uniforms.uSpecularShininess.value=e.specularShininess,r.uniforms.uRoughness.value=e.roughness,r.uniforms.uElectricColor.value.set(e.electricColor),r.uniforms.uElectricIntensity.value=e.electricIntensity,r.uniforms.uElectricSpeed.value=e.electricSpeed,r.uniforms.uElectricFrequency.value=e.electricFrequency,r.uniforms.uLightPosition.value.set(e.lightX,e.lightY,e.lightZ)});const{onBeforeRender:c}=ve();return c(({elapsed:a})=>{e.visible&&(r.uniforms.uTime.value=a)}),_t(()=>{r.dispose()}),(a,P)=>(Rt(),Bt("primitive",{object:a.model,visible:a.visible},null,8,Mt))}}),{defineComponent:zt}=await R("vue"),{onUnmounted:Tt,watch:ke,watchEffect:Dt}=await R("vue"),xe=await R("three"),Ft=zt({__name:"brainBokehPass",props:{enabled:{type:Boolean,default:!0},bloomEnabled:{type:Boolean,default:!0},bloomStrength:{default:.18},bloomThreshold:{default:.62},bloomRadius:{default:.24},dofEnabled:{type:Boolean,default:!0},focus:{default:1.8},aperture:{default:.0283},maxblur:{default:.02},resolutionScale:{default:1}},setup(V){const e=V;class r extends St{constructor(){super(...arguments),this.hiddenObjects=[],this.baseWidth=1,this.baseHeight=1,this.depthResolutionScale=1}setResolutionScale(M){this.depthResolutionScale=xe.MathUtils.clamp(M,.75,1),this.applyScaledSize()}setSize(M,U){this.baseWidth=M,this.baseHeight=U,this.applyScaledSize()}render(M,U,W){this.hiddenObjects.length=0,this.scene.traverse(g=>{!g.visible||!this.shouldSkipDepthPrepass(g)||(this.hiddenObjects.push(g),g.visible=!1)});try{super.render(M,U,W)}finally{this.hiddenObjects.forEach(g=>{g.visible=!0}),this.hiddenObjects.length=0}}applyScaledSize(){const M=Math.max(1,Math.floor(this.baseWidth*this.depthResolutionScale)),U=Math.max(1,Math.floor(this.baseHeight*this.depthResolutionScale));super.setSize(M,U)}shouldSkipDepthPrepass(M){const U=M;return U.isPoints||M.renderOrder!==0?!0:U.material?(Array.isArray(U.material)?U.material:[U.material]).some(g=>g.transparent||g.blending!==xe.NormalBlending||g.side===xe.BackSide):!1}}const{scene:c,camera:a,renderer:P,sizes:n}=Ne(),{renderer:s}=at();let d=null,o=null,l=null,v=null,S=null;const $=f=>{!c.value||!a.value||(P.render(c.value,a.value),f())},A=()=>{!d||!l||!v||(l.enabled=e.enabled&&e.bloomEnabled,l.strength=e.bloomStrength,l.threshold=e.bloomThreshold,l.radius=e.bloomRadius,v.enabled=e.enabled&&e.dofEnabled,v.uniforms.focus.value=e.focus,v.uniforms.aperture.value=e.aperture,v.uniforms.maxblur.value=e.maxblur,v.setResolutionScale(e.resolutionScale))},O=()=>{s.replaceRenderFunction(f=>{if(!e.enabled||!d){$(f);return}d.render(),f()})},D=()=>{l?.dispose(),v?.dispose(),S?.dispose(),d?.dispose(),d=null,o=null,l=null,v=null,S=null},q=()=>{!c.value||!a.value||!n.width.value||!n.height.value||(D(),d=new dt(P),d.setPixelRatio(P.getPixelRatio()),d.setSize(n.width.value,n.height.value),o=new pt(c.value,a.value),l=new mt(new xe.Vector2(n.width.value,n.height.value),e.bloomStrength,e.bloomRadius,e.bloomThreshold),v=new r(c.value,a.value,{focus:e.focus,aperture:e.aperture,maxblur:e.maxblur}),S=new ft,d.addPass(o),d.addPass(l),d.addPass(v),d.addPass(S),A(),O())};return ke(()=>[c.value,a.value],()=>{q()},{immediate:!0}),ke(()=>[n.width.value,n.height.value],([f,M])=>{if(!(!f||!M)){if(!d){q();return}d.setSize(f,M),d.setPixelRatio(P.getPixelRatio()),A()}},{immediate:!0}),Dt(()=>{A(),O()}),Tt(()=>{D(),s.replaceRenderFunction($)}),(f,M)=>null}}),Ae=await R("three"),Se=(V=1)=>{let e=V>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)},L=(V,e,r)=>e+(r-e)*V(),Vt=V=>{let e=null;return V.traverse(r=>{!e&&r instanceof Ae.Mesh&&(e=r)}),e},Ot=V=>{const e=new Ae.Vector3;Math.abs(V.y)<.99?e.set(0,1,0).cross(V).normalize():e.set(1,0,0).cross(V).normalize();const r=new Ae.Vector3().crossVectors(V,e).normalize();return{tangent:e,bitangent:r}},{defineComponent:kt}=await R("vue"),{openBlock:Ut,createElementBlock:It,createCommentVNode:$t}=await R("vue"),Gt=["object"],{onUnmounted:Lt,shallowRef:qt,watch:Nt,watchEffect:Wt}=await R("vue"),X=await R("three"),jt=kt({__name:"grooveParticles",props:{mesh:{},visible:{type:Boolean,default:!0},count:{default:2600},size:{default:22},speed:{default:1.2},outset:{default:.004},spread:{default:.007},threshold:{default:.52},color1:{default:"#ffb26b"},color2:{default:"#ff6b38"},seed:{default:17}},setup(V){const e=V,r=qt(null);let c=null,a=null;const P=Math.min(window.devicePixelRatio||1,1.25),n=()=>{c?.dispose(),a?.dispose(),c=null,a=null,r.value=null},s=()=>{const l=e.mesh.geometry,v=l.getAttribute("position"),S=l.getAttribute("normal"),$=l.getAttribute("color"),A=e.mesh.matrixWorld.clone(),O=new X.Matrix3().getNormalMatrix(A),D=[];for(let f=0;f<v.count;f++){if($){const W=$.getX(f),g=$.getY(f),Y=$.getZ(f);if(!(W>e.threshold&&W>g*1.4&&W>Y*1.4))continue}const M=new X.Vector3().fromBufferAttribute(v,f).applyMatrix4(A),U=S?new X.Vector3().fromBufferAttribute(S,f).applyMatrix3(O).normalize():M.clone().normalize();D.push({position:M,normal:U})}if(D.length>0)return D;const q=Math.max(1,Math.floor(v.count/Math.max(e.count,1)));for(let f=0;f<v.count;f+=q){const M=new X.Vector3().fromBufferAttribute(v,f).applyMatrix4(A),U=S?new X.Vector3().fromBufferAttribute(S,f).applyMatrix3(O).normalize():M.clone().normalize();D.push({position:M,normal:U})}return D},d=()=>{n();const l=Se(e.seed),v=s(),S=Math.max(1,e.count),$=new Float32Array(S*3),A=new Float32Array(S),O=new Float32Array(S);for(let q=0;q<S;q++){const f=v[Math.floor(l()*v.length)],{tangent:M,bitangent:U}=Ot(f.normal),W=L(l,-e.spread,e.spread),g=L(l,-e.spread,e.spread),Y=L(l,-e.outset*.4,e.outset*.4),G=f.position.clone().addScaledVector(f.normal,e.outset+Y).addScaledVector(M,W).addScaledVector(U,g);$[q*3]=G.x,$[q*3+1]=G.y,$[q*3+2]=G.z,A[q]=l(),O[q]=L(l,.55,1.45)}c=new X.BufferGeometry,c.setAttribute("position",new X.BufferAttribute($,3)),c.setAttribute("aRandom",new X.BufferAttribute(A,1)),c.setAttribute("aSize",new X.BufferAttribute(O,1)),a=new X.ShaderMaterial({uniforms:{uTime:{value:0},uSize:{value:e.size},uSpeed:{value:e.speed},uPixelRatio:{value:P},uColor1:{value:new X.Color(e.color1)},uColor2:{value:new X.Color(e.color2)}},vertexShader:`
            uniform float uTime;
            uniform float uSize;
            uniform float uSpeed;
            uniform float uPixelRatio;

            attribute float aRandom;
            attribute float aSize;

            varying float vRandom;
            varying float vPulse;

            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float pulse = sin(uTime * uSpeed * 3.0 + aRandom * 24.0) * 0.5 + 0.5;
                float pointSize = uSize * aSize * (0.65 + pulse * 0.9);

                gl_PointSize = pointSize * uPixelRatio * (1.0 / -mvPosition.z);
                gl_PointSize = max(gl_PointSize, 1.0);
                gl_Position = projectionMatrix * mvPosition;

                vRandom = aRandom;
                vPulse = pulse;
            }
        `,fragmentShader:`
            uniform vec3 uColor1;
            uniform vec3 uColor2;

            varying float vRandom;
            varying float vPulse;

            void main() {
                vec2 centered = gl_PointCoord - 0.5;
                float dist = length(centered);

                if (dist > 0.5) {
                    discard;
                }

                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                alpha = pow(alpha, 2.0);

                vec3 color = mix(uColor1, uColor2, vPulse * 0.75 + vRandom * 0.25);
                gl_FragColor = vec4(color, alpha * 1.35);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:X.AdditiveBlending});const D=new X.Points(c,a);D.frustumCulled=!1,D.renderOrder=8,D.visible=e.visible,r.value=D};Nt(()=>[e.count,e.outset,e.spread,e.threshold,e.seed],()=>{d()},{immediate:!0}),Wt(()=>{!a||!r.value||(r.value.visible=e.visible,a.uniforms.uSize.value=e.size,a.uniforms.uSpeed.value=e.speed,a.uniforms.uColor1.value.set(e.color1),a.uniforms.uColor2.value.set(e.color2))});const{onBeforeRender:o}=ve();return o(({elapsed:l})=>{e.visible&&a&&(a.uniforms.uTime.value=l)}),Lt(()=>{n()}),(l,v)=>r.value?(Ut(),It("primitive",{key:0,object:r.value},null,8,Gt)):$t("",!0)}}),{defineComponent:Zt}=await R("vue"),{openBlock:Pe,createElementBlock:Re,createCommentVNode:Ue}=await R("vue"),Ht=["object"],Xt=["object"],{onMounted:Yt,onUnmounted:Qt,shallowRef:Be,watch:Ie,watchEffect:Kt}=await R("vue"),m=await R("three"),$e=72,ue=32,Ge=5,Jt=Zt({__name:"neuralThreads",props:{visible:{type:Boolean,default:!0},color:{default:"#b089ff"},opacity:{default:.42},clusterCount:{default:16},threadsPerCluster:{default:5},threadRadiusMin:{default:35e-5},threadRadiusMax:{default:.0028},minLength:{default:.72},maxLength:{default:2.45},startRadiusMin:{default:.34},startRadiusMax:{default:.5},waveAmplitude:{default:.115},waveFrequency:{default:3.8},clusterSpread:{default:.1},animationEnabled:{type:Boolean,default:!0},animationSpeed:{default:2.6},animationAmplitude:{default:.026},animationFrequency:{default:2.3},mouseRepulsionEnabled:{type:Boolean,default:!0},mouseRepulsionRadius:{default:.35},mouseRepulsionStrength:{default:.08},repulsionSmoothness:{default:.15},mouseGlowEnabled:{type:Boolean,default:!0},mouseGlowOpacity:{default:1},glowTransitionSpeed:{default:.1},particlesVisible:{type:Boolean,default:!0},particlesPerThread:{default:4},particleSpeed:{default:.32},particleSize:{default:26},particleColor1:{default:"#7444ff"},particleColor2:{default:"#ff89d0"},seed:{default:27}},setup(V){const e=V,r=Be([]),c=Be(null),a=Be(null);let P=null,n=null,s=null,d=null,o=null,l=null,v=null,S=null,$=!1,A=!1,O=0,D=1;const q=Math.min(window.devicePixelRatio||1,1.25),f=new m.Vector2(2,2),M=new m.Raycaster,{camera:U}=Ne(),W=Ge+1,g=new m.Vector3,Y=new m.Vector3,G=new m.Vector3,F=new m.Vector3,Q=new m.Vector3,Z=new m.Vector3,H=(t,i,h)=>{const u=i*3;return h.set(t[u],t[u+1],t[u+2]),h},j=(t,i,h,u,z)=>{const w=i*3;t[w]=h,t[w+1]=u,t[w+2]=z},te=(t,i)=>l?(l.fill(i,t.alphaOffset,t.alphaOffset+t.vertexCount),!0):!1,J=t=>{const i=t.currentOpacity;return t.baseOpacity=e.opacity*t.opacityFactor,e.mouseGlowEnabled?(t.currentOpacity=Math.max(t.currentOpacity,t.baseOpacity),t.targetOpacity=Math.max(t.targetOpacity,t.baseOpacity)):(t.currentOpacity=t.baseOpacity,t.targetOpacity=t.baseOpacity),Math.abs(t.currentOpacity-i)>1e-4?te(t,t.currentOpacity):!1},ae=()=>{c.value=null,P?.dispose(),n?.dispose(),P=null,n=null,s=null,d=null,o=null,l=null,r.value=[]},ce=()=>{v?.dispose(),S?.dispose(),v=null,S=null,a.value=null},We=(t,i)=>{const h=[];for(let u=0;u<=i;u++){const z=u/i,w=Math.min(z+.01,1),C=Math.max(z-.01,0),x=t.getPointAt(w),_=t.getPointAt(C),B=new m.Vector3().subVectors(x,_).normalize(),b=new m.Vector3;Math.abs(B.x)<.9?b.set(0,B.z,-B.y).normalize():b.set(-B.z,0,B.x).normalize();const p=new m.Vector3().crossVectors(B,b).normalize();h.push({perp1:b,perp2:p})}return h},je=(t,i,h,u,z,w,C,x)=>{const _=i.clone().add(new m.Vector3(L(t,-e.clusterSpread*.5,e.clusterSpread*.5),L(t,-e.clusterSpread*.5,e.clusterSpread*.5),L(t,-e.clusterSpread*.5,e.clusterSpread*.5))),B=L(t,e.minLength,e.maxLength),b=.15,p=h.clone().add(new m.Vector3(L(t,-.15,b),L(t,-.15,b),L(t,-.15,b))).normalize();let y;Math.abs(p.x)<.9?y=new m.Vector3(0,p.z,-p.y).normalize():y=new m.Vector3(-p.z,0,p.x).normalize();const I=new m.Vector3().crossVectors(p,y).normalize(),T=[];for(let K=0;K<=$e;K++){const le=K/$e,tt=le*B,ot=Math.sin(le*Math.PI*z+u)*w,rt=Math.cos(le*Math.PI*z*.7+C)*w*.6;T.push(_.clone().addScaledVector(p,tt).addScaledVector(y,ot).addScaledVector(I,rt))}const E=new m.CatmullRomCurve3(T);E.tension=.5;const k=L(t,e.threadRadiusMin,e.threadRadiusMax),N=new m.TubeGeometry(E,ue,k,Ge,!1),de=L(t,.6,1),ie=e.opacity*de,ne=ue+1,oe=new Float32Array(ne*3);for(let K=0;K<ne;K++){const le=E.getPointAt(K/ue);j(oe,K,le.x,le.y,le.z)}return{geometry:N,state:{id:x,originalPositions:new Float32Array(N.attributes.position.array),originalCenters:oe,currentCenters:oe.slice(),waveOffsets:new Float32Array(ne*3),tubeSegments:ue,perpVectors:We(E,ue),offset:t(),needsUpdate:!1,opacityFactor:de,baseOpacity:ie,targetOpacity:ie,currentOpacity:ie,positionOffset:0,vertexCount:0,alphaOffset:0}}},Ze=()=>{ae(),ce();const t=Se(e.seed),i=[];let h=0;for(let p=0;p<e.clusterCount;p++){const y=t()*Math.PI*2,I=t()*Math.PI,T=L(t,e.startRadiusMin,e.startRadiusMax),E=new m.Vector3(T*Math.sin(I)*Math.cos(y),T*Math.sin(I)*Math.sin(y),T*Math.cos(I)),k=E.clone().normalize(),N=t()*Math.PI*2,de=e.waveFrequency*L(t,.8,1.2),ie=e.waveAmplitude*L(t,.7,1.3),ne=t()*Math.PI*2;for(let oe=0;oe<e.threadsPerCluster;oe++)i.push(je(t,E,k,N,de,ie,ne,h++))}if(!i.length)return;const u=i.reduce((p,y)=>p+y.geometry.attributes.position.count,0),z=i.reduce((p,y)=>p+(y.geometry.index?.count??0),0),w=u>65535?Uint32Array:Uint16Array,C=new w(z);o=new Float32Array(u*3),l=new Float32Array(u);let x=0,_=0,B=0;i.forEach(({geometry:p,state:y})=>{const I=p.attributes.position,T=I.array,E=p.index;if(y.positionOffset=_,y.alphaOffset=x,y.vertexCount=I.count,o?.set(T,_),l?.fill(y.currentOpacity,x,x+I.count),E){const k=E.array;for(let N=0;N<E.count;N++)C[B+N]=k[N]+x;B+=E.count}p.dispose(),x+=I.count,_+=T.length}),P=new m.BufferGeometry,s=new m.BufferAttribute(o,3),s.setUsage(m.DynamicDrawUsage),d=new m.BufferAttribute(l,1),d.setUsage(m.DynamicDrawUsage),P.setAttribute("position",s),P.setAttribute("aAlpha",d),P.setIndex(new m.BufferAttribute(C,1)),P.computeBoundingSphere(),n=new m.ShaderMaterial({uniforms:{uColor:{value:new m.Color(e.color)}},vertexShader:`
            attribute float aAlpha;
            varying float vAlpha;
            void main() {
                vAlpha = aAlpha;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform vec3 uColor;
            varying float vAlpha;
            void main() {
                gl_FragColor = vec4(uColor, vAlpha);
            }
        `,transparent:!0,side:m.FrontSide,blending:m.AdditiveBlending,depthWrite:!1,depthTest:!0});const b=new m.Mesh(P,n);b.frustumCulled=!1,b.renderOrder=12,b.visible=e.visible,c.value=b,r.value=i.map(p=>p.state),ze()},ze=()=>{if(ce(),!r.value.length||e.particlesPerThread<=0)return;const t=r.value.length*e.particlesPerThread,i=new Float32Array(t*3),h=new Float32Array(t),u=new Float32Array(t),z=new Float32Array(t),w=new Float32Array(t),C=Se(e.seed+99);let x=0;r.value.forEach(()=>{for(let p=0;p<e.particlesPerThread;p++){const y=p/e.particlesPerThread;h[x]=(y+C()*.1)%1,u[x]=L(C,.8,1.2),z[x]=C(),w[x]=L(C,.7,1.3),x++}}),v=new m.BufferGeometry;const _=new m.BufferAttribute(i,3);_.setUsage(m.DynamicDrawUsage);const B=new m.BufferAttribute(h,1);B.setUsage(m.DynamicDrawUsage),v.setAttribute("position",_),v.setAttribute("aProgress",B),v.setAttribute("aSpeed",new m.BufferAttribute(u,1)),v.setAttribute("aRandom",new m.BufferAttribute(z,1)),v.setAttribute("aSize",new m.BufferAttribute(w,1)),S=new m.ShaderMaterial({uniforms:{uTime:{value:0},uSize:{value:e.particleSize},uPixelRatio:{value:q},uColor1:{value:new m.Color(e.particleColor1)},uColor2:{value:new m.Color(e.particleColor2)}},vertexShader:`
            uniform float uTime;
            uniform float uSize;
            uniform float uPixelRatio;
            attribute float aProgress;
            attribute float aRandom;
            attribute float aSize;
            varying float vRandom;
            varying float vProgress;
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                float pulse = sin(uTime * 2.0 + aRandom * 6.28318) * 0.3 + 0.7;
                float sizeVariation = aSize * pulse;
                gl_PointSize = uSize * sizeVariation * uPixelRatio;
                gl_PointSize *= (2.0 / -mvPosition.z);
                gl_PointSize = max(gl_PointSize, 1.0);
                gl_Position = projectionMatrix * mvPosition;
                vRandom = aRandom;
                vProgress = aProgress;
            }
        `,fragmentShader:`
            uniform float uTime;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            varying float vRandom;
            varying float vProgress;
            void main() {
                vec2 centered = gl_PointCoord - 0.5;
                float dist = length(centered);
                if (dist > 0.5) {
                    discard;
                }
                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                alpha = pow(alpha, 2.0);
                float fadeOut = 1.0 - smoothstep(0.85, 1.0, vProgress);
                float twinkle = sin(uTime * 4.0 + vRandom * 20.0) * 0.2 + 0.8;
                vec3 color = mix(uColor1, uColor2, vProgress) * 3.0;
                gl_FragColor = vec4(color, alpha * twinkle * fadeOut);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:m.AdditiveBlending});const b=new m.Points(v,S);b.visible=e.visible&&e.particlesVisible,b.frustumCulled=!1,b.renderOrder=13,a.value=b},He=(t,i,h)=>{const u=i*ue,z=Math.floor(u),w=u-z,C=Math.min(z+1,ue);return H(t,z,F),H(t,C,Q),h.copy(F).lerp(Q,w),h},Xe=(t,i)=>{if(!v||!S||!a.value||!e.particlesVisible)return;const h=v.getAttribute("position"),u=v.getAttribute("aProgress"),z=v.getAttribute("aSpeed"),w=h.array,C=u.array,x=z.array;S.uniforms.uTime.value=i;let _=0;r.value.forEach(B=>{for(let b=0;b<e.particlesPerThread;b++){let p=C[_];const y=x[_];p+=t*e.particleSpeed*y*D*.1,p>1&&(p=p%1),C[_]=p,He(B.currentCenters,p,Z),w[_*3]=Z.x,w[_*3+1]=Z.y,w[_*3+2]=Z.z,_++}}),h.needsUpdate=!0,u.needsUpdate=!0},Ye=t=>{if(!o)return;const i=t*e.animationSpeed;let h=!1;r.value.forEach(u=>{let z=!1;for(let w=0;w<=u.tubeSegments;w++){const C=w*3;let x=0,_=0,B=0;if(e.animationEnabled){const b=w/u.tubeSegments,p=b*b,y=Math.sin(b*Math.PI*e.animationFrequency+i+u.offset*Math.PI*2),I=Math.cos(b*Math.PI*e.animationFrequency*1.3+i*.7+u.offset*Math.PI*2),{perp1:T,perp2:E}=u.perpVectors[w],k=e.animationAmplitude*p;x=T.x*y*k+E.x*I*k,_=T.y*y*k+E.y*I*k,B=T.z*y*k+E.z*I*k}if(u.waveOffsets[C]=x,u.waveOffsets[C+1]=_,u.waveOffsets[C+2]=B,j(u.currentCenters,w,u.originalCenters[C]+x,u.originalCenters[C+1]+_,u.originalCenters[C+2]+B),!u.needsUpdate){const b=w*W,p=b+W;for(let y=b;y<p;y++){const I=y*3,T=u.positionOffset+I;o[T]=u.originalPositions[I]+x,o[T+1]=u.originalPositions[I+1]+_,o[T+2]=u.originalPositions[I+2]+B}z=!0}}z&&(h=!0)}),h&&s&&(s.needsUpdate=!0)},he=t=>{if(!o)return;let i=!1;for(let h=0;h<=t.tubeSegments;h++){const u=h*3,z=t.originalCenters[u]+t.waveOffsets[u],w=t.originalCenters[u+1]+t.waveOffsets[u+1],C=t.originalCenters[u+2]+t.waveOffsets[u+2];j(t.currentCenters,h,z,w,C);const x=h*W,_=x+W;for(let B=x;B<_;B++){const b=B*3,p=t.positionOffset+b,y=t.originalPositions[b]+t.waveOffsets[u],I=t.originalPositions[b+1]+t.waveOffsets[u+1],T=t.originalPositions[b+2]+t.waveOffsets[u+2],E=(y-o[p])*e.repulsionSmoothness,k=(I-o[p+1])*e.repulsionSmoothness,N=(T-o[p+2])*e.repulsionSmoothness;(Math.abs(E)>1e-4||Math.abs(k)>1e-4||Math.abs(N)>1e-4)&&(o[p]+=E,o[p+1]+=k,o[p+2]+=N,i=!0)}}s&&(s.needsUpdate=!0),t.needsUpdate=i},Qe=(t,i)=>{if(!o)return;const h=Math.floor(t.tubeSegments*.5);if(H(t.currentCenters,h,g),i.closestPointToPoint(g,Y),g.distanceTo(Y)>e.mouseRepulsionRadius*2){t.needsUpdate&&he(t),e.mouseGlowEnabled&&(t.targetOpacity=t.baseOpacity);return}let z=!1,w=0;for(let C=0;C<=t.tubeSegments;C++){const x=C*3;H(t.currentCenters,C,g),i.closestPointToPoint(g,Y);const _=g.distanceTo(Y);let B=0,b=0,p=0;if(_<e.mouseRepulsionRadius){G.subVectors(g,Y);const T=G.length();if(T>1e-5){G.multiplyScalar(1/T);const E=Math.pow(1-_/e.mouseRepulsionRadius,2),k=Math.sin(C/t.tubeSegments*Math.PI),N=e.mouseRepulsionStrength*E*k;B=G.x*N,b=G.y*N,p=G.z*N,w=Math.max(w,E)}}j(t.currentCenters,C,t.originalCenters[x]+t.waveOffsets[x]+B,t.originalCenters[x+1]+t.waveOffsets[x+1]+b,t.originalCenters[x+2]+t.waveOffsets[x+2]+p);const y=C*W,I=y+W;for(let T=y;T<I;T++){const E=T*3,k=t.positionOffset+E,N=t.originalPositions[E]+t.waveOffsets[x]+B,de=t.originalPositions[E+1]+t.waveOffsets[x+1]+b,ie=t.originalPositions[E+2]+t.waveOffsets[x+2]+p,ne=(N-o[k])*e.repulsionSmoothness,oe=(de-o[k+1])*e.repulsionSmoothness,K=(ie-o[k+2])*e.repulsionSmoothness;(Math.abs(ne)>1e-4||Math.abs(oe)>1e-4||Math.abs(K)>1e-4)&&(o[k]+=ne,o[k+1]+=oe,o[k+2]+=K,z=!0)}}e.mouseGlowEnabled&&(t.targetOpacity=w>0?t.baseOpacity+(e.mouseGlowOpacity-t.baseOpacity)*w:t.baseOpacity),z&&s&&(s.needsUpdate=!0,t.needsUpdate=!0)},Te=()=>r.value.some(t=>t.needsUpdate),Ke=()=>{const t=f.x<=1.5&&f.y<=1.5;if(!e.mouseRepulsionEnabled||!U.value){r.value.forEach(i=>{i.needsUpdate&&he(i),i.targetOpacity=i.baseOpacity});return}if(!t){r.value.forEach(i=>{i.needsUpdate&&he(i),i.targetOpacity=i.baseOpacity});return}M.setFromCamera(f,U.value),r.value.forEach(i=>{Qe(i,M.ray)})},Je=()=>{let t=!1;r.value.forEach(i=>{const h=i.targetOpacity-i.currentOpacity;Math.abs(h)>.001&&(i.currentOpacity+=h*e.glowTransitionSpeed,t=te(i,i.currentOpacity)||t)}),t&&d&&(d.needsUpdate=!0)},De=t=>{f.x=t.clientX/window.innerWidth*2-1,f.y=-(t.clientY/window.innerHeight)*2+1,A=!0},be=()=>{f.set(2,2),A=!0},Fe=()=>{$=!0,A=!0},Ve=()=>{$=!1,A=!0};Yt(()=>{window.addEventListener("pointermove",De),window.addEventListener("pointerleave",be),window.addEventListener("pointercancel",be),window.addEventListener("pointerdown",Fe),window.addEventListener("pointerup",Ve)}),Ie(()=>[e.clusterCount,e.threadsPerCluster,e.threadRadiusMin,e.threadRadiusMax,e.minLength,e.maxLength,e.startRadiusMin,e.startRadiusMax,e.waveAmplitude,e.waveFrequency,e.clusterSpread,e.seed],()=>{Ze()},{immediate:!0}),Ie(()=>[e.particlesPerThread],()=>{ze()}),Kt(()=>{let t=!1;r.value.forEach(i=>{t=J(i)||t}),c.value&&(c.value.visible=e.visible),n&&n.uniforms.uColor.value.set(e.color),t&&d&&(d.needsUpdate=!0),a.value&&(a.value.visible=e.visible&&e.particlesVisible),S&&(S.uniforms.uSize.value=e.particleSize,S.uniforms.uColor1.value.set(e.particleColor1),S.uniforms.uColor2.value.set(e.particleColor2))});const{onBeforeRender:et}=ve();return et(({delta:t,elapsed:i})=>{if(!e.visible&&!e.particlesVisible){Te()&&r.value.forEach(h=>{h.needsUpdate&&he(h),h.targetOpacity=h.baseOpacity}),A=!1,O=0,D+=(1-D)*Math.min(t*4,1);return}D+=(($?3:1)-D)*Math.min(t*4,1),e.visible&&(Ye(i),O+=t,(A||Te()||f.x<=1.5&&f.y<=1.5&&O>=1/30)&&(Ke(),O=0,A=!1),Je()),Xe(t,i)}),Qt(()=>{window.removeEventListener("pointermove",De),window.removeEventListener("pointerleave",be),window.removeEventListener("pointercancel",be),window.removeEventListener("pointerdown",Fe),window.removeEventListener("pointerup",Ve),ae(),ce()}),(t,i)=>(Pe(),Re("TresGroup",null,[c.value?(Pe(),Re("primitive",{key:0,object:c.value},null,8,Ht)):Ue("",!0),a.value?(Pe(),Re("primitive",{key:1,object:a.value},null,8,Xt)):Ue("",!0)]))}}),{defineComponent:eo}=await R("vue"),{openBlock:to,createElementBlock:oo,createCommentVNode:ro}=await R("vue"),ao=["object"],{onUnmounted:no,shallowRef:io,watch:lo,watchEffect:so}=await R("vue"),ee=await R("three"),uo=eo({__name:"sparkleParticles",props:{visible:{type:Boolean,default:!0},count:{default:1800},size:{default:1.6},brightness:{default:2.8},minRadius:{default:1.2},maxRadius:{default:3.2},speed:{default:.45},color1:{default:"#ffffff"},color2:{default:"#e28c45"},seed:{default:33}},setup(V){const e=V,r=io(null);let c=null,a=null;const P=Math.min(window.devicePixelRatio||1,1.25),n=()=>{c?.dispose(),a?.dispose(),c=null,a=null,r.value=null},s=()=>{n();const o=Se(e.seed),l=new Float32Array(e.count*3),v=new Float32Array(e.count),S=new Float32Array(e.count),$=new Float32Array(e.count);for(let O=0;O<e.count;O++){const D=L(o,e.minRadius,e.maxRadius),q=o()*Math.PI*2,f=Math.acos(2*o()-1);l[O*3]=D*Math.sin(f)*Math.cos(q),l[O*3+1]=D*Math.sin(f)*Math.sin(q)-.2,l[O*3+2]=D*Math.cos(f),v[O]=o(),S[O]=L(o,.55,1.5),$[O]=o()}c=new ee.BufferGeometry,c.setAttribute("position",new ee.BufferAttribute(l,3)),c.setAttribute("aRandom",new ee.BufferAttribute(v,1)),c.setAttribute("aSize",new ee.BufferAttribute(S,1)),c.setAttribute("aMix",new ee.BufferAttribute($,1)),a=new ee.ShaderMaterial({uniforms:{uTime:{value:0},uSize:{value:e.size},uSpeed:{value:e.speed},uBrightness:{value:e.brightness},uPixelRatio:{value:P},uColor1:{value:new ee.Color(e.color1)},uColor2:{value:new ee.Color(e.color2)}},vertexShader:`
            uniform float uTime;
            uniform float uSize;
            uniform float uSpeed;
            uniform float uPixelRatio;

            attribute float aRandom;
            attribute float aSize;
            attribute float aMix;

            varying float vRandom;
            varying float vMix;

            void main() {
                vec3 displaced = position;
                float drift = sin(uTime * uSpeed + aRandom * 18.0) * 0.03;
                displaced *= 1.0 + drift * 0.08;

                vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
                gl_PointSize = uSize * aSize * uPixelRatio * (1.2 / -mvPosition.z);
                gl_PointSize = max(gl_PointSize, 1.0);
                gl_Position = projectionMatrix * mvPosition;

                vRandom = aRandom;
                vMix = aMix;
            }
        `,fragmentShader:`
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform float uBrightness;

            varying float vRandom;
            varying float vMix;

            void main() {
                vec2 centered = gl_PointCoord - 0.5;
                float dist = length(centered);

                if (dist > 0.5) {
                    discard;
                }

                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                alpha = pow(alpha, 2.2);

                float twinkle = sin(vRandom * 35.0) * 0.15 + 0.85;
                vec3 color = mix(uColor1, uColor2, vMix) * uBrightness;

                gl_FragColor = vec4(color, alpha * twinkle);
            }
        `,transparent:!0,depthWrite:!1,depthTest:!0,blending:ee.AdditiveBlending});const A=new ee.Points(c,a);A.frustumCulled=!1,A.renderOrder=20,A.visible=e.visible,r.value=A};lo(()=>[e.count,e.minRadius,e.maxRadius,e.seed],()=>{s()},{immediate:!0}),so(()=>{!a||!r.value||(r.value.visible=e.visible,a.uniforms.uSize.value=e.size,a.uniforms.uSpeed.value=e.speed,a.uniforms.uBrightness.value=e.brightness,a.uniforms.uColor1.value.set(e.color1),a.uniforms.uColor2.value.set(e.color2))});const{onBeforeRender:d}=ve();return d(({elapsed:o})=>{e.visible&&a&&(a.uniforms.uTime.value=o)}),no(()=>{n()}),(o,l)=>r.value?(to(),oo("primitive",{key:0,object:r.value},null,8,ao)):ro("",!0)}}),{defineComponent:co}=await R("vue"),{createElementVNode:Le,unref:po,mergeProps:fo,openBlock:mo,createElementBlock:vo,createCommentVNode:ho}=await R("vue"),bo={key:0,scale:[18,18,18],"render-order":-10},go=["side"],{watch:we}=await R("vue"),Me=await R("three"),{BackSide:xo}=await R("three"),wo=co({__name:"spaceDome",props:{visible:{type:Boolean,default:!0},topColor:{default:"#11142f"},bottomColor:{default:"#02030a"},glowColor:{default:"#4f1d95"},glowStrength:{default:.65},speed:{default:.18}},setup(V){const e=V,r={uniforms:{uTime:{value:0},uTopColor:{value:new Me.Color(e.topColor)},uBottomColor:{value:new Me.Color(e.bottomColor)},uGlowColor:{value:new Me.Color(e.glowColor)},uGlowStrength:{value:e.glowStrength}},vertexShader:`
        varying vec3 vPosition;

        void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform vec3 uGlowColor;
        uniform float uGlowStrength;

        varying vec3 vPosition;

        void main() {
            vec3 direction = normalize(vPosition);
            float verticalMix = smoothstep(-0.9, 0.85, direction.y);
            vec3 color = mix(uBottomColor, uTopColor, verticalMix);

            float horizon = 1.0 - abs(direction.y);
            float haze = smoothstep(0.15, 1.0, horizon);
            float nebula = sin(direction.x * 6.0 + uTime * 0.25) * 0.5 + 0.5;
            nebula *= cos(direction.z * 7.0 - uTime * 0.18) * 0.5 + 0.5;

            color += uGlowColor * haze * nebula * uGlowStrength;
            gl_FragColor = vec4(color, 1.0);
        }
    `,depthWrite:!1},{onBeforeRender:c}=ve();return c(({elapsed:a})=>{e.visible&&(r.uniforms.uTime.value=a*e.speed)}),we(()=>e.topColor,a=>{r.uniforms.uTopColor.value.set(a)}),we(()=>e.bottomColor,a=>{r.uniforms.uBottomColor.value.set(a)}),we(()=>e.glowColor,a=>{r.uniforms.uGlowColor.value.set(a)}),we(()=>e.glowStrength,a=>{r.uniforms.uGlowStrength.value=a}),(a,P)=>a.visible?(mo(),vo("TresMesh",bo,[P[0]||(P[0]=Le("TresSphereGeometry",{args:[1,64,64]},null,-1)),Le("TresShaderMaterial",fo(r,{side:po(xo)}),null,16,go)])):ho("",!0)}}),{withAsyncContext:Co,defineComponent:yo}=await R("vue"),{createElementVNode:_e,unref:Ce,normalizeProps:So,guardReactiveProps:Po,createVNode:Ee,openBlock:pe,createBlock:fe,createCommentVNode:me,resolveComponent:Ro,mergeProps:Bo,withCtx:Mo,createElementBlock:_o}=await R("vue"),Eo={class:"brain-storm-page"},Ao={rotation:[0,.55,0]},{computed:ye,onMounted:zo,onUnmounted:To,reactive:re,watchEffect:Do}=await R("vue"),qe=await R("three"),Fo=yo({__name:"brainStorm",async setup(V){let e,r;const c={neuralPulse:{scene:{clearColor:"#121316",exposure:1.2,bloomStrength:.18,bloomRadius:.24,bloomThreshold:.62,domeTopColor:"#1a1228",domeBottomColor:"#090a0f",domeGlowColor:"#772599",domeGlowStrength:.4,domeSpeed:.22,dofEnabled:!0,dofFocusDistance:1.8,dofFocusRange:.55,dofBokehScale:1.9,dofResolutionScale:1},brain:{visible:!0,baseColor:"#492469",fresnelColor:"#b3a1cf",fresnelPower:2.5,fresnelIntensity:1.2,specularIntensity:.6,specularShininess:32,roughness:.3,electricColor:"#8b5cf6",electricIntensity:2.5,electricSpeed:1.5,electricFrequency:8,lightX:2,lightY:3,lightZ:2},groove:{visible:!0,count:3e3,size:24,speed:1,outset:.003,spread:.0065,threshold:.5,color1:"#ff9b57",color2:"#d5750f"},threads:{visible:!0,color:"#b089ff",opacity:.4,clusterCount:16,threadsPerCluster:5,threadRadiusMin:3e-4,threadRadiusMax:.003,minLength:.7,maxLength:2.8,startRadiusMin:.35,startRadiusMax:.5,waveAmplitude:.12,waveFrequency:3.8,clusterSpread:.1,animationEnabled:!0,animationSpeed:3,animationAmplitude:.03,animationFrequency:2,mouseRepulsionEnabled:!0,mouseRepulsionRadius:.35,mouseRepulsionStrength:.08,repulsionSmoothness:.15,mouseGlowEnabled:!0,mouseGlowOpacity:1,glowTransitionSpeed:.1,particlesVisible:!0,particlesPerThread:4,particleSpeed:.32,particleSize:26,particleColor1:"#7444ff",particleColor2:"#ff89d0"},sparkles:{visible:!0,count:2e3,size:.9,brightness:4.4,minRadius:.8,maxRadius:2,speed:.5,color1:"#ffffff",color2:"#895d0d"}},auroraSignal:{scene:{clearColor:"#031017",exposure:1.2,bloomStrength:.5,bloomRadius:.5,bloomThreshold:.5,domeTopColor:"#0b2132",domeBottomColor:"#01090f",domeGlowColor:"#0f766e",domeGlowStrength:.62,domeSpeed:.22,dofEnabled:!0,dofFocusDistance:1.8,dofFocusRange:.5,dofBokehScale:1.7,dofResolutionScale:1},brain:{visible:!0,baseColor:"#173a4d",fresnelColor:"#c7fff7",fresnelPower:2.6,fresnelIntensity:1.15,specularIntensity:.55,specularShininess:34,roughness:.32,electricColor:"#33d1c5",electricIntensity:2.1,electricSpeed:1.3,electricFrequency:6.8,lightX:1.5,lightY:2.8,lightZ:2.3},groove:{visible:!0,count:2400,size:19,speed:.85,outset:.0045,spread:.008,threshold:.5,color1:"#8ef4e8",color2:"#25b6c7"},threads:{visible:!0,color:"#7de6ff",opacity:.36,clusterCount:14,threadsPerCluster:5,threadRadiusMin:4e-4,threadRadiusMax:.0026,minLength:.64,maxLength:2.18,startRadiusMin:.32,startRadiusMax:.46,waveAmplitude:.09,waveFrequency:3.1,clusterSpread:.08,animationEnabled:!0,animationSpeed:2.2,animationAmplitude:.02,animationFrequency:1.9,mouseRepulsionEnabled:!0,mouseRepulsionRadius:.28,mouseRepulsionStrength:.06,repulsionSmoothness:.13,mouseGlowEnabled:!0,mouseGlowOpacity:.8,glowTransitionSpeed:.12,particlesVisible:!0,particlesPerThread:3,particleSpeed:.28,particleSize:22,particleColor1:"#65fff0",particleColor2:"#42b7ff"},sparkles:{visible:!0,count:1500,size:1.4,brightness:2.1,minRadius:1.1,maxRadius:2.9,speed:.36,color1:"#b7fff8",color2:"#6ad4ff"}},amberFlux:{scene:{clearColor:"#12050a",exposure:1.1,bloomStrength:.5,bloomRadius:.5,bloomThreshold:.5,domeTopColor:"#28111c",domeBottomColor:"#070205",domeGlowColor:"#c2410c",domeGlowStrength:.82,domeSpeed:.16,dofEnabled:!0,dofFocusDistance:1.8,dofFocusRange:.58,dofBokehScale:1.85,dofResolutionScale:1},brain:{visible:!0,baseColor:"#5a1a2a",fresnelColor:"#ffd5ad",fresnelPower:2,fresnelIntensity:1.45,specularIntensity:.8,specularShininess:48,roughness:.22,electricColor:"#ff8a4c",electricIntensity:3.2,electricSpeed:1.9,electricFrequency:9.2,lightX:2.6,lightY:2.4,lightZ:1.2},groove:{visible:!0,count:3100,size:24,speed:1.35,outset:.0038,spread:.0065,threshold:.54,color1:"#ffd36e",color2:"#ff6a2f"},threads:{visible:!0,color:"#ff9f67",opacity:.46,clusterCount:18,threadsPerCluster:6,threadRadiusMin:3e-4,threadRadiusMax:.0031,minLength:.8,maxLength:2.7,startRadiusMin:.35,startRadiusMax:.55,waveAmplitude:.13,waveFrequency:4.4,clusterSpread:.12,animationEnabled:!0,animationSpeed:2.9,animationAmplitude:.03,animationFrequency:2.8,mouseRepulsionEnabled:!0,mouseRepulsionRadius:.38,mouseRepulsionStrength:.09,repulsionSmoothness:.16,mouseGlowEnabled:!0,mouseGlowOpacity:1,glowTransitionSpeed:.09,particlesVisible:!0,particlesPerThread:5,particleSpeed:.36,particleSize:28,particleColor1:"#ffb34d",particleColor2:"#ffd3ac"},sparkles:{visible:!0,count:2200,size:1.8,brightness:3.2,minRadius:1.3,maxRadius:3.5,speed:.4,color1:"#fff3d6",color2:"#ff9b52"}}},a=re({preset:"neuralPulse"}),P=re({seed:27}),n=re({...c.neuralPulse.scene}),s=re({...c.neuralPulse.brain}),d=re({...c.neuralPulse.groove}),o=re({...c.neuralPulse.threads}),l=re({...c.neuralPulse.sparkles}),v=re({}),S=re({enableDamping:!0,enablePan:!1,enableZoom:!0,enableRotate:!0,autoRotate:!0,autoRotateSpeed:.5,minDistance:1.5,maxDistance:3}),$=ye(()=>s.visible||d.visible||o.visible||o.particlesVisible||l.visible),A=ye(()=>$.value&&(n.bloomStrength>.001||n.dofEnabled)),O=ye(()=>qe.MathUtils.clamp(n.dofFocusRange/20,.001,.08)),D=ye(()=>qe.MathUtils.clamp(n.dofBokehScale/100,0,.08));Do(()=>{v.clearColor=n.clearColor,v.toneMappingExposure=n.exposure});const{scene:q}=([e,r]=Co(()=>st("./plugins/medical/model/brainStorm/brain.glb")),e=await e,r(),e),f=q.clone(!0);f.updateMatrixWorld(!0);const M=Vt(f),U=G=>{const F=c[G];Object.assign(n,F.scene),Object.assign(s,F.brain),Object.assign(d,F.groove),Object.assign(o,F.threads),Object.assign(l,F.sparkles),g?.refresh()},W=()=>{const G=document.getElementById("brain-storm-pane-theme");G&&G.remove();const F=document.createElement("style");return F.id="brain-storm-pane-theme",F.textContent=`
        .brain-storm-pane {
            position: fixed !important;
            top: 8px !important;
            right: 8px !important;
            width: 280px !important;
            max-height: calc(100vh - 16px) !important;
            overflow-y: auto !important;
            z-index: 10000;
            scrollbar-width: thin;
            scrollbar-color: #7444ff transparent;
            --tp-base-background-color: #121316;
            --tp-base-shadow-color: rgba(0, 0, 0, 0.4);
            --tp-button-background-color: #7444ff;
            --tp-button-background-color-active: #7444ff;
            --tp-button-background-color-focus: #8855ff;
            --tp-button-background-color-hover: #8855ff;
            --tp-button-foreground-color: #ffffff;
            --tp-container-background-color: #28292e;
            --tp-container-background-color-active: #1e1f23;
            --tp-container-background-color-focus: #1e1f23;
            --tp-container-background-color-hover: #1e1f23;
            --tp-container-foreground-color: #ffffff;
            --tp-groove-foreground-color: rgba(255, 255, 255, 0.08);
            --tp-input-background-color: #28292e;
            --tp-input-background-color-active: #1e1f23;
            --tp-input-background-color-focus: #1e1f23;
            --tp-input-background-color-hover: #1e1f23;
            --tp-input-foreground-color: #ffffff;
            --tp-label-foreground-color: rgba(255, 255, 255, 0.6);
            --tp-monitor-background-color: #28292e;
            --tp-monitor-foreground-color: #7444ff;
        }

        .brain-storm-pane::-webkit-scrollbar {
            width: 4px;
        }

        .brain-storm-pane::-webkit-scrollbar-thumb {
            background: #7444ff;
            border-radius: 999px;
        }

        .brain-storm-pane .tp-rotv {
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            backdrop-filter: none;
        }

        .brain-storm-pane .tp-rotv_t,
        .brain-storm-pane .tp-fldv_t {
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        @media (max-width: 960px) {
            .brain-storm-pane {
                width: 240px !important;
            }
        }
    `,document.head.appendChild(F),F};let g=null,Y=null;return zo(()=>{Y=W(),g=new lt({title:"Customize Theme",expanded:!0}),g.element.classList.add("brain-storm-pane");const G=g.addFolder({title:"主题预设",expanded:!0});G.addBlade({view:"list",label:"方案",options:[{text:"神经脉冲",value:"neuralPulse"},{text:"极光信号",value:"auroraSignal"},{text:"琥珀风暴",value:"amberFlux"}],value:a.preset}).on("change",ce=>{a.preset=ce.value,U(ce.value)}),G.addButton({title:"重新生成结构"}).on("click",()=>{P.seed+=1}),G.addButton({title:"重置当前方案"}).on("click",()=>{U(a.preset)});const F=g.addFolder({title:"镜头与辉光",expanded:!0});F.addBinding(S,"autoRotate",{label:"自动旋转"}),F.addBinding(S,"autoRotateSpeed",{label:"旋转速度",min:0,max:3,step:.05}),F.addBinding(n,"exposure",{label:"曝光",min:.5,max:2,step:.01}),F.addBinding(n,"bloomStrength",{label:"泛光强度",min:0,max:3,step:.01}),F.addBinding(n,"bloomRadius",{label:"泛光半径",min:0,max:1,step:.01}),F.addBinding(n,"bloomThreshold",{label:"泛光阈值",min:0,max:1,step:.01});const Q=g.addFolder({title:"背景氛围",expanded:!0});Q.addBinding(n,"clearColor",{label:"底色"}),Q.addBinding(n,"domeTopColor",{label:"顶部颜色"}),Q.addBinding(n,"domeBottomColor",{label:"底部颜色"}),Q.addBinding(n,"domeGlowColor",{label:"雾光颜色"}),Q.addBinding(n,"domeGlowStrength",{label:"雾光强度",min:0,max:1.5,step:.01}),Q.addBinding(n,"domeSpeed",{label:"雾流速度",min:0,max:1,step:.01});const Z=g.addFolder({title:"脑体材质",expanded:!0});Z.addBinding(s,"visible",{label:"显示脑体"}),Z.addBinding(s,"baseColor",{label:"基底颜色"}),Z.addBinding(s,"fresnelColor",{label:"边缘光"}),Z.addBinding(s,"electricColor",{label:"电流颜色"}),Z.addBinding(s,"fresnelPower",{label:"边缘宽度",min:.5,max:6,step:.05}),Z.addBinding(s,"electricIntensity",{label:"电流强度",min:0,max:6,step:.05}),Z.addBinding(s,"electricSpeed",{label:"电流速度",min:0,max:4,step:.05}),Z.addBinding(s,"electricFrequency",{label:"电流频率",min:1,max:16,step:.1}),Z.addBinding(s,"roughness",{label:"粗糙度",min:0,max:1,step:.01});const H=g.addFolder({title:"沟壑粒子",expanded:!0});H.addBinding(d,"visible",{label:"显示粒子"}),H.addBinding(d,"count",{label:"密度",min:200,max:5e3,step:50}),H.addBinding(d,"size",{label:"粒径",min:1,max:40,step:1}),H.addBinding(d,"speed",{label:"脉冲速度",min:0,max:4,step:.05}),H.addBinding(d,"outset",{label:"外扩距离",min:0,max:.02,step:5e-4}),H.addBinding(d,"spread",{label:"横向扩散",min:0,max:.02,step:5e-4}),H.addBinding(d,"threshold",{label:"采样阈值",min:.2,max:.9,step:.01}),H.addBinding(d,"color1",{label:"颜色 A"}),H.addBinding(d,"color2",{label:"颜色 B"});const j=g.addFolder({title:"神经丝线",expanded:!0});j.addBinding(o,"visible",{label:"显示丝线"}),j.addBinding(o,"color",{label:"丝线颜色"}),j.addBinding(o,"opacity",{label:"丝线透明",min:0,max:1,step:.01}),j.addBinding(o,"clusterCount",{label:"簇数量",min:0,max:30,step:1}),j.addBinding(o,"threadsPerCluster",{label:"每簇丝线",min:1,max:12,step:1}),j.addBinding(o,"waveAmplitude",{label:"摆动幅度",min:0,max:.2,step:.001}),j.addBinding(o,"animationSpeed",{label:"摆动速度",min:0,max:4,step:.05}),j.addBinding(o,"mouseRepulsionRadius",{label:"鼠标范围",min:.1,max:1,step:.01}),j.addBinding(o,"mouseRepulsionStrength",{label:"鼠标推力",min:0,max:.3,step:.005}),j.addBinding(o,"mouseGlowEnabled",{label:"鼠标高亮"});const te=g.addFolder({title:"流动粒子",expanded:!0});te.addBinding(o,"particlesVisible",{label:"显示粒子"}),te.addBinding(o,"particlesPerThread",{label:"每线数量",min:0,max:8,step:1}),te.addBinding(o,"particleSpeed",{label:"流速",min:0,max:2,step:.01}),te.addBinding(o,"particleSize",{label:"粒径",min:1,max:40,step:1}),te.addBinding(o,"particleColor1",{label:"起点颜色"}),te.addBinding(o,"particleColor2",{label:"终点颜色"});const J=g.addFolder({title:"空间星屑",expanded:!1});J.addBinding(l,"visible",{label:"显示星屑"}),J.addBinding(l,"count",{label:"数量",min:200,max:4e3,step:50}),J.addBinding(l,"size",{label:"尺寸",min:.1,max:4,step:.1}),J.addBinding(l,"brightness",{label:"亮度",min:.5,max:6,step:.1}),J.addBinding(l,"minRadius",{label:"最小半径",min:.5,max:4,step:.1}),J.addBinding(l,"maxRadius",{label:"最大半径",min:1,max:6,step:.1}),J.addBinding(l,"color1",{label:"颜色 A"}),J.addBinding(l,"color2",{label:"颜色 B"});const ae=g.addFolder({title:"Post Effects",expanded:!1});ae.addBinding(n,"dofEnabled",{label:"Depth Of Field"}),ae.addBinding(n,"dofFocusDistance",{label:"Focus Distance",min:.5,max:4,step:.01}),ae.addBinding(n,"dofFocusRange",{label:"Aperture",min:.1,max:1.2,step:.01}),ae.addBinding(n,"dofBokehScale",{label:"Max Blur",min:0,max:4,step:.01}),ae.addBinding(n,"dofResolutionScale",{label:"DOF Resolution",min:.75,max:1,step:.05})}),To(()=>{g?.dispose(),g=null,Y?.remove(),Y=null}),(G,F)=>{const Q=Ro("TresCanvas");return pe(),_o("div",Eo,[Ee(Q,Bo(v,{"window-size":""}),{default:Mo(()=>[F[0]||(F[0]=_e("TresPerspectiveCamera",{position:[2.2,0,.85],fov:35,near:.05,far:80},null,-1)),Ee(Ce(nt),So(Po(S)),null,16),Ee(wo,{"top-color":n.domeTopColor,"bottom-color":n.domeBottomColor,"glow-color":n.domeGlowColor,"glow-strength":n.domeGlowStrength,speed:n.domeSpeed},null,8,["top-color","bottom-color","glow-color","glow-strength","speed"]),F[1]||(F[1]=_e("TresAmbientLight",{intensity:.1},null,-1)),_e("TresGroup",Ao,[s.visible?(pe(),fe(At,{key:0,model:Ce(f),visible:s.visible,"base-color":s.baseColor,"fresnel-color":s.fresnelColor,"fresnel-power":s.fresnelPower,"fresnel-intensity":s.fresnelIntensity,"specular-intensity":s.specularIntensity,"specular-shininess":s.specularShininess,roughness:s.roughness,"electric-color":s.electricColor,"electric-intensity":s.electricIntensity,"electric-speed":s.electricSpeed,"electric-frequency":s.electricFrequency,"light-x":s.lightX,"light-y":s.lightY,"light-z":s.lightZ},null,8,["model","visible","base-color","fresnel-color","fresnel-power","fresnel-intensity","specular-intensity","specular-shininess","roughness","electric-color","electric-intensity","electric-speed","electric-frequency","light-x","light-y","light-z"])):me("",!0),Ce(M)&&d.visible?(pe(),fe(jt,{key:1,mesh:Ce(M),visible:d.visible,count:d.count,size:d.size,speed:d.speed,outset:d.outset,spread:d.spread,threshold:d.threshold,color1:d.color1,color2:d.color2,seed:P.seed+3},null,8,["mesh","visible","count","size","speed","outset","spread","threshold","color1","color2","seed"])):me("",!0),o.visible||o.particlesVisible?(pe(),fe(Jt,{key:2,visible:o.visible,color:o.color,opacity:o.opacity,"cluster-count":o.clusterCount,"threads-per-cluster":o.threadsPerCluster,"thread-radius-min":o.threadRadiusMin,"thread-radius-max":o.threadRadiusMax,"min-length":o.minLength,"max-length":o.maxLength,"start-radius-min":o.startRadiusMin,"start-radius-max":o.startRadiusMax,"wave-amplitude":o.waveAmplitude,"wave-frequency":o.waveFrequency,"cluster-spread":o.clusterSpread,"animation-enabled":o.animationEnabled,"animation-speed":o.animationSpeed,"animation-amplitude":o.animationAmplitude,"animation-frequency":o.animationFrequency,"mouse-repulsion-enabled":o.mouseRepulsionEnabled,"mouse-repulsion-radius":o.mouseRepulsionRadius,"mouse-repulsion-strength":o.mouseRepulsionStrength,"repulsion-smoothness":o.repulsionSmoothness,"mouse-glow-enabled":o.mouseGlowEnabled,"mouse-glow-opacity":o.mouseGlowOpacity,"glow-transition-speed":o.glowTransitionSpeed,"particles-visible":o.particlesVisible,"particles-per-thread":o.particlesPerThread,"particle-speed":o.particleSpeed,"particle-size":o.particleSize,"particle-color1":o.particleColor1,"particle-color2":o.particleColor2,seed:P.seed+11},null,8,["visible","color","opacity","cluster-count","threads-per-cluster","thread-radius-min","thread-radius-max","min-length","max-length","start-radius-min","start-radius-max","wave-amplitude","wave-frequency","cluster-spread","animation-enabled","animation-speed","animation-amplitude","animation-frequency","mouse-repulsion-enabled","mouse-repulsion-radius","mouse-repulsion-strength","repulsion-smoothness","mouse-glow-enabled","mouse-glow-opacity","glow-transition-speed","particles-visible","particles-per-thread","particle-speed","particle-size","particle-color1","particle-color2","seed"])):me("",!0),l.visible?(pe(),fe(uo,{key:3,visible:l.visible,count:l.count,size:l.size,brightness:l.brightness,"min-radius":l.minRadius,"max-radius":l.maxRadius,speed:l.speed,color1:l.color1,color2:l.color2,seed:P.seed+21},null,8,["visible","count","size","brightness","min-radius","max-radius","speed","color1","color2","seed"])):me("",!0)]),A.value?(pe(),fe(Ft,{key:0,enabled:A.value,"bloom-enabled":n.bloomStrength>.001,"bloom-strength":n.bloomStrength,"bloom-threshold":n.bloomThreshold,"bloom-radius":n.bloomRadius,"dof-enabled":n.dofEnabled&&s.visible,focus:n.dofFocusDistance,aperture:O.value,maxblur:D.value,"resolution-scale":n.dofResolutionScale},null,8,["enabled","bloom-enabled","bloom-strength","bloom-threshold","bloom-radius","dof-enabled","focus","aperture","maxblur","resolution-scale"])):me("",!0)]),_:1},16)])}}}),Wo=it(Fo,[["__scopeId","data-v-7367b67f"]]);export{Wo as default};
