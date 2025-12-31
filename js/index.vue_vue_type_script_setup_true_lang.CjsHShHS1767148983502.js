import{importShared as x}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as $,Me as w,_l as H}from"./index.DTe2qqjO1767148983502.js";import{fixSpritesForMirror as R}from"./utils.sbhH34FI1767148983502.js";import{WebGPURenderer as O}from"./three.webgpu.TnOrJG3G1767148983502.js";const{NoBlending:q,ShaderMaterial:G,Uniform:i,Vector2:B,REVISION:J}=await x("three"),X=()=>Number.parseInt(J.replace(/\D+/g,"")),K=X();class Q extends G{constructor(t=new B){super({uniforms:{inputBuffer:new i(null),depthBuffer:new i(null),resolution:new i(new B),texelSize:new i(new B),halfTexelSize:new i(new B),kernel:new i(0),scale:new i(1),cameraNear:new i(0),cameraFar:new i(1),depthEdge0:new i(0),depthEdge1:new i(1),depthScale:new i(0),depthBias:new i(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float depthEdge0;
        uniform float depthEdge1;
        uniform float depthScale;
        uniform float depthBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(
              1.0 - depthEdge1, 1.0 - depthEdge0,
              1.0 - (depth.r * depth.a) + depthBias
            );
            depthFactor = clamp(depthScale * depthFactor + 0.25, 0.0, 1.0);
          #endif

          gl_FragColor = 0.25 * (
            texture2D(inputBuffer, mix(vUv0, vUv, depthFactor))
            + texture2D(inputBuffer, mix(vUv1, vUv, depthFactor))
            + texture2D(inputBuffer, mix(vUv2, vUv, depthFactor))
            + texture2D(inputBuffer, mix(vUv3, vUv, depthFactor))
          );
          
          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${K>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:q,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(t.x,t.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(t,r){this.uniforms.texelSize.value.set(t,r),this.uniforms.halfTexelSize.value.set(t,r).multiplyScalar(.5)}setResolution(t){this.uniforms.resolution.value.copy(t)}}const{BufferAttribute:F,BufferGeometry:Y,Camera:Z,HalfFloatType:ee,LinearFilter:C,Mesh:te,Scene:re,Vector2:ae,WebGLRenderTarget:ie}=await x("three");class oe{constructor({resolution:t,width:r=500,height:g=500,depthEdge0:d=0,depthEdge1:u=1,depthScale:p=0,depthBias:f=.25}){this.renderToScreen=!1,this.renderTargetA=new ie(t,t,{minFilter:C,magFilter:C,stencilBuffer:!1,depthBuffer:!1,type:ee}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new Q,this.convolutionMaterial.setTexelSize(1/r,1/g),this.convolutionMaterial.setResolution(new ae(r,g)),this.scene=new re,this.camera=new Z,this.convolutionMaterial.uniforms.depthEdge0.value=d,this.convolutionMaterial.uniforms.depthEdge1.value=u,this.convolutionMaterial.uniforms.depthScale.value=p,this.convolutionMaterial.uniforms.depthBias.value=f,this.convolutionMaterial.defines.USE_DEPTH=p>0;const h=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),o=new Float32Array([0,0,2,0,0,2]),l=new Y;l.setAttribute("position",new F(h,3)),l.setAttribute("uv",new F(o,2)),this.screen=new te(l,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(t,r,g){const d=this.scene,u=this.camera,p=this.renderTargetA,f=this.renderTargetB,h=this.convolutionMaterial,o=h.uniforms;o.depthBuffer.value=r.depthTexture;const l=h.kernel;let v=r,c,e,s;for(e=0,s=l.length-1;e<s;++e)c=e&1?f:p,o.kernel.value=l[e],o.inputBuffer.value=v.texture,t.setRenderTarget(c),t.render(d,u),v=c;o.kernel.value=l[e],o.inputBuffer.value=v.texture,t.setRenderTarget(this.renderToScreen?null:g),t.render(d,u)}dispose(){this.screen.material.dispose(),this.screen.geometry.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.convolutionMaterial.dispose()}}const{MeshStandardMaterial:le}=await x("three");class ne extends le{constructor(t={}){super(t),this._tDepth={value:null},this._distortionMap={value:null},this._tSharp={value:null},this._tBlur={value:null},this._textureMatrix={value:null},this._mix={value:.5},this._sharpMix={value:0},this._blurMixSmooth={value:0},this._blurMixRough={value:0},this._sharpDepthEdgeMin={value:.9},this._sharpDepthEdgeMax={value:1},this._sharpDepthScale={value:0},this._sharpDepthBias={value:0},this._distortion={value:1},this.setValues(t)}onBeforeCompile(t){t.defines?.USE_UV||(t.defines.USE_UV="");for(const r of Object.keys(t.defines))t.defines[r.toUpperCase()]=t.defines[r];t.uniforms.tSharp=this._tSharp,t.uniforms.tDepth=this._tDepth,t.uniforms.tBlur=this._tBlur,t.uniforms.distortionMap=this._distortionMap,t.uniforms.textureMatrix=this._textureMatrix,t.uniforms.mixMain=this._mix,t.uniforms.sharpMix=this._sharpMix,t.uniforms.sharpDepthScale=this._sharpDepthScale,t.uniforms.sharpDepthEdgeMin=this._sharpDepthEdgeMin,t.uniforms.sharpDepthEdgeMax=this._sharpDepthEdgeMax,t.uniforms.sharpDepthBias=this._sharpDepthBias,t.uniforms.blurMixSmooth=this._blurMixSmooth,t.uniforms.blurMixRough=this._blurMixRough,t.uniforms.distortion=this._distortion,t.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${t.vertexShader}`,t.vertexShader=t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),t.fragmentShader=`
        uniform sampler2D tSharp;
        uniform sampler2D tBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float mixMain;
        uniform float sharpMix;
        uniform float blurMixSmooth;
        uniform float blurMixRough;
        uniform float sharpDepthScale;
        uniform float sharpDepthBias;
        uniform float sharpDepthEdgeMin;
        uniform float sharpDepthEdgeMax;
        varying vec4 my_vUv;
        ${t.fragmentShader}`,t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      vec4 new_vUv = my_vUv;

      #ifdef USE_DISTORTION
        float distortionFactor = (texture(distortionMap, vUv).r - 0.5) * distortion;
        new_vUv.x += distortionFactor;
        new_vUv.y += distortionFactor;
      #endif

      #ifdef USE_NORMALMAP

        vec4 normalColor = texture(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        vec2 normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;

        vec4 sharp = texture(tSharp, normal_uv);

        #ifdef USE_BLUR
          vec4 blur = texture(tBlur, normal_uv);
        #endif

        #ifdef USE_DEPTH
          vec4 depth = texture(tDepth, normal_uv);
        #endif

      #else

        vec4 sharp = textureProj(tSharp, new_vUv);

        #ifdef USE_BLUR
          vec4 blur = textureProj(tBlur, new_vUv);
        #endif

        #ifdef USE_DEPTH
          vec4 depth = textureProj(tDepth, new_vUv);
        #endif

      #endif

      #ifdef USE_DEPTH
        float depthFactor = smoothstep(
          1.0 - sharpDepthEdgeMax, 1.0 - sharpDepthEdgeMin,
          1.0 - (depth.r * depth.a) + sharpDepthBias
        );
        depthFactor = clamp(sharpDepthScale * depthFactor, 0.0, 1.0);

        sharp *= depthFactor;
      #endif

      sharp *= (1.0 - roughnessFactor);
      `),t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`

      #ifdef USE_BLUR
        outgoingLight += mixMain * (
          vec3(sharp) * sharpMix
          + vec3(blur) * (blurMixSmooth * (1.0 - roughnessFactor) + blurMixRough * roughnessFactor)
        );
      #else
        outgoingLight += mixMain * vec3(sharp) * sharpMix;
      #endif

      #include <opaque_fragment>
      `)}get tSharp(){return this._tSharp.value}set tSharp(t){this._tSharp.value=t}get tDepth(){return this._tDepth.value}set tDepth(t){this._tDepth.value=t}get distortionMap(){return this._distortionMap.value}set distortionMap(t){this._distortionMap.value=t}get tBlur(){return this._tBlur.value}set tBlur(t){this._tBlur.value=t}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(t){this._textureMatrix.value=t}get sharpMix(){return this._sharpMix.value}set sharpMix(t){this._sharpMix.value=t}get blurMixSmooth(){return this._blurMixSmooth.value}set blurMixSmooth(t){this._blurMixSmooth.value=t}get blurMixRough(){return this._blurMixRough.value}set blurMixRough(t){this._blurMixRough.value=t}get mix(){return this._mix.value}set mix(t){this._mix.value=t}get sharpDepthScale(){return this._sharpDepthScale.value}set sharpDepthScale(t){this._sharpDepthScale.value=t}get sharpDepthBias(){return this._sharpDepthBias.value}set sharpDepthBias(t){this._sharpDepthBias.value=t}get sharpDepthEdgeMin(){return this._sharpDepthEdgeMin.value}set sharpDepthEdgeMin(t){this._sharpDepthEdgeMin.value=t}get sharpDepthEdgeMax(){return this._sharpDepthEdgeMax.value}set sharpDepthEdgeMax(t){this._sharpDepthEdgeMax.value=t}get distortion(){return this._distortion.value}set distortion(t){this._distortion.value=t}}const{defineComponent:se}=await x("vue"),{unref:T,mergeProps:ue,openBlock:pe,createElementBlock:he}=await x("vue"),ce=["texture-matrix","t-sharp","t-depth","t-blur","defines-USE_BLUR","defines-USE_DEPTH","defines-USE_DISTORTION"],{Color:z,DepthTexture:de,Euler:fe,HalfFloatType:W,LinearFilter:E,Matrix4:A,PerspectiveCamera:ve,Plane:me,TangentSpaceNormalMap:xe,Vector2:ge,Vector3:_,Vector4:k,WebGLRenderer:L,WebGLRenderTarget:V}=await x("three"),{computed:S,onBeforeUnmount:Me,shallowRef:_e,toValue:P,watch:m}=await x("vue"),Ue=se({__name:"index",props:{resolution:{default:256},mix:{default:1},sharpMix:{default:1},sharpDepthScale:{default:1},sharpDepthBias:{default:0},sharpDepthEdgeMin:{default:0},sharpDepthEdgeMax:{default:.2},blurMixSmooth:{default:1},blurMixRough:{default:1},blurDepthScale:{default:1},blurDepthBias:{default:0},blurDepthEdgeMin:{default:0},blurDepthEdgeMax:{default:.2},blurSize:{default:()=>[0,0]},distortionMap:{},distortion:{default:0},reflectorOffset:{default:0},color:{default:()=>new z(3355443)},roughness:{default:1},metalness:{default:0},map:{},lightMap:{},lightMapIntensity:{default:1},aoMap:{},aoMapIntensity:{default:1},emissive:{default:()=>new z(0)},emissiveIntensity:{default:1},emissiveMap:{},bumpMap:{},bumpScale:{default:1},normalMap:{},normalMapType:{default:xe},normalScale:{default:()=>new ge(1,1)},displacementMap:{},displacementScale:{default:1},displacementBias:{default:0},roughnessMap:{default:null},metalnessMap:{},alphaMap:{},envMap:{},envMapRotation:{default:()=>new fe},envMapIntensity:{default:1},wireframe:{type:Boolean,default:!1},wireframeLinewidth:{default:1},wireframeLinecap:{default:"round"},wireframeLinejoin:{default:"round"},flatShading:{type:Boolean,default:!1},fog:{type:Boolean,default:!0}},setup(y,{expose:t}){const r=y,{extend:g,invalidate:d}=$();g({MeshReflectionMaterial:ne});const u=S(()=>500-(Array.isArray(r.blurSize)?r.blurSize[0]:r.blurSize)),p=S(()=>500-(Array.isArray(r.blurSize)?r.blurSize[1]:r.blurSize)),f=S(()=>u.value>0||p.value>0),h=S(()=>r.sharpDepthScale>0||r.blurDepthScale>0),o=S(()=>!!r.distortionMap),l=S(()=>!!r.roughnessMap),v=_e();let c;const e={reflectorPlane:new me,normal:new _,reflectorWorldPosition:new _,cameraWorldPosition:new _,rotationMatrix:new A,lookAtPosition:new _(0,0,-1),clipPlane:new k,view:new _,target:new _,q:new k,virtualCamera:new ve,textureMatrix:new A},s=new V(r.resolution,r.resolution,{minFilter:E,magFilter:E,type:W,depthBuffer:!0,depthTexture:new de(r.resolution,r.resolution)}),U=new V(r.resolution,r.resolution,{minFilter:E,magFilter:E,type:W});m(()=>[r.resolution],()=>{s.setSize(r.resolution,r.resolution),U.setSize(r.resolution,r.resolution)}),m(()=>[r.resolution,u.value,p.value,r.blurDepthEdgeMin,r.blurDepthEdgeMax,r.blurDepthScale,r.blurDepthBias],()=>{c?.dispose(),c=new oe({resolution:r.resolution,width:u.value,height:p.value,depthEdge0:r.blurDepthEdgeMin,depthEdge1:r.blurDepthEdgeMax,depthScale:r.blurDepthScale,depthBias:r.blurDepthBias})},{immediate:!0}),m(()=>[f.value],()=>{w("MeshReflectionMaterial: Setting blurMixRough or blurMixSmooth to 0, then non-zero triggers a recompile.The TresJS core cannot currently handle recompiled materials.")}),m(h,()=>{w("MeshReflectionMaterial: Setting depthScale to 0, then non-zero triggers a recompile.The TresJS core cannot currently handle recompiled materials.")}),m(o,()=>{w("MeshReflectionMaterial: Toggling distortionMap triggers a recompile.The TresJS core cannot currently handle recompiled materials.")}),m(l,()=>{w("MeshReflectionMaterial: Toggling roughnessMap triggers a recompile.The TresJS core cannot currently handle recompiled materials.")}),m(()=>[r.normalMap],()=>{w("MeshReflectionMaterial: Toggling normalMap triggers a recompile.The TresJS core cannot currently handle recompiled materials.")}),Me(()=>{s.dispose(),U.dispose(),c.dispose()});const{onBeforeRender:I}=H();return I(({renderer:a,scene:b,camera:D})=>{const M=v.value?.__tres?.parent;if(M){if(a instanceof O){console.warn("MeshReflectionMaterial: WebGPURenderer is not supported yet");return}if(a instanceof L){d();const j=a.xr.enabled,N=a.shadowMap.autoUpdate;if(e.reflectorWorldPosition.setFromMatrixPosition(M.matrixWorld),e.cameraWorldPosition.setFromMatrixPosition(D.value?.matrixWorld),e.rotationMatrix.extractRotation(M.matrixWorld),e.normal.set(0,0,1),e.normal.applyMatrix4(e.rotationMatrix),e.reflectorWorldPosition.addScaledVector(e.normal,r.reflectorOffset),e.view.subVectors(e.reflectorWorldPosition,e.cameraWorldPosition),e.view.dot(e.normal)>0)return;M.visible=!1,e.view.reflect(e.normal).negate(),e.view.add(e.reflectorWorldPosition),e.rotationMatrix.extractRotation(D.value?.matrixWorld),e.lookAtPosition.set(0,0,-1),e.lookAtPosition.applyMatrix4(e.rotationMatrix),e.lookAtPosition.add(e.cameraWorldPosition),e.target.subVectors(e.reflectorWorldPosition,e.lookAtPosition),e.target.reflect(e.normal).negate(),e.target.add(e.reflectorWorldPosition),e.virtualCamera.position.copy(e.view),e.virtualCamera.up.set(0,1,0),e.virtualCamera.up.applyMatrix4(e.rotationMatrix),e.virtualCamera.up.reflect(e.normal),e.virtualCamera.lookAt(e.target),e.virtualCamera.far=D.value.far,e.virtualCamera.updateMatrixWorld(),e.virtualCamera.far=D.value.far,e.virtualCamera.projectionMatrix.copy(D.value.projectionMatrix),e.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.textureMatrix.multiply(e.virtualCamera.projectionMatrix),e.textureMatrix.multiply(e.virtualCamera.matrixWorldInverse),e.textureMatrix.multiply(M.matrixWorld),e.reflectorPlane.setFromNormalAndCoplanarPoint(e.normal,e.reflectorWorldPosition),e.reflectorPlane.applyMatrix4(e.virtualCamera.matrixWorldInverse),e.clipPlane.set(e.reflectorPlane.normal.x,e.reflectorPlane.normal.y,e.reflectorPlane.normal.z,e.reflectorPlane.constant);const n=e.virtualCamera.projectionMatrix;e.q.x=(Math.sign(e.clipPlane.x)+n.elements[8])/n.elements[0],e.q.y=(Math.sign(e.clipPlane.y)+n.elements[9])/n.elements[5],e.q.z=-1,e.q.w=(1+n.elements[10])/n.elements[14],e.clipPlane.multiplyScalar(2/e.clipPlane.dot(e.q)),n.elements[2]=e.clipPlane.x,n.elements[6]=e.clipPlane.y,n.elements[10]=e.clipPlane.z+1,n.elements[14]=e.clipPlane.w,a.shadowMap.autoUpdate=!1,a.setRenderTarget(s),a.autoClear||a.clear(),R(P(b)),a.render(P(b),e.virtualCamera),a instanceof L&&c.render(a,s,U),R(P(b),!1),a.xr.enabled=j,a.shadowMap.autoUpdate=N,M.visible=!0,a.setRenderTarget(null),d()}}}),t({instance:v}),(a,b)=>(pe(),he("TresMeshReflectionMaterial",ue({key:`key${f.value?"0":"1"}${h.value?"0":"1"}${o.value?"0":"1"}${l.value?"0":"1"}`,ref_key:"materialRef",ref:v},r,{"texture-matrix":e.textureMatrix,"t-sharp":T(s)?.texture,"t-depth":T(s)?.depthTexture,"t-blur":T(U)?.texture,"defines-USE_BLUR":f.value?"":void 0,"defines-USE_DEPTH":h.value?"":void 0,"defines-USE_DISTORTION":o.value?"":void 0}),null,16,ce))}});export{Ue as _sfc_main};
