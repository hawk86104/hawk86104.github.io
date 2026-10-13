import{importShared as c}from"./3d-tiles-renderer.C4Ykm8l_1791882454828.js";import{useTres as $,useLoop as G}from"./index.DgOTDEKm1791882454828.js";import{fixSpritesForMirror as F}from"./utils.sbhH34FI1791882454828.js";import{WebGPURenderer as K}from"./three.webgpu.CMx8SuOS1791882454828.js";const{NoBlending:X,ShaderMaterial:J,Uniform:i,Vector2:E,REVISION:Q}=await c("three"),Y=()=>Number.parseInt(Q.replace(/\D+/g,"")),Z=Y();class ee extends J{constructor(e=new E){super({uniforms:{inputBuffer:new i(null),depthBuffer:new i(null),resolution:new i(new E),texelSize:new i(new E),halfTexelSize:new i(new E),kernel:new i(0),scale:new i(1),cameraNear:new i(0),cameraFar:new i(1),depthEdge0:new i(0),depthEdge1:new i(1),depthScale:new i(0),depthBias:new i(.25)},fragmentShader:`#include <common>
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
          #include <${Z>=154?"colorspace_fragment":"encodings_fragment"}>
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
        }`,blending:X,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,r){this.uniforms.texelSize.value.set(e,r),this.uniforms.halfTexelSize.value.set(e,r).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}const{BufferAttribute:C,BufferGeometry:te,Camera:re,HalfFloatType:ae,LinearFilter:W,Mesh:ie,Scene:oe,Vector2:ne,WebGLRenderTarget:le}=await c("three");class se{constructor({resolution:e,width:r=500,height:m=500,depthEdge0:f=0,depthEdge1:u=1,depthScale:p=0,depthBias:x=.25}){this.renderToScreen=!1,this.renderTargetA=new le(e,e,{minFilter:W,magFilter:W,stencilBuffer:!1,depthBuffer:!1,type:ae}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new ee,this.convolutionMaterial.setTexelSize(1/r,1/m),this.convolutionMaterial.setResolution(new ne(r,m)),this.scene=new oe,this.camera=new re,this.convolutionMaterial.uniforms.depthEdge0.value=f,this.convolutionMaterial.uniforms.depthEdge1.value=u,this.convolutionMaterial.uniforms.depthScale.value=p,this.convolutionMaterial.uniforms.depthBias.value=x,this.convolutionMaterial.defines.USE_DEPTH=p>0;const v=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),o=new Float32Array([0,0,2,0,0,2]),l=new te;l.setAttribute("position",new C(v,3)),l.setAttribute("uv",new C(o,2)),this.screen=new ie(l,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,r,m){const f=this.scene,u=this.camera,p=this.renderTargetA,x=this.renderTargetB,v=this.convolutionMaterial,o=v.uniforms;o.depthBuffer.value=r.depthTexture;const l=v.kernel;let S=r,D,h,M;for(h=0,M=l.length-1;h<M;++h)D=h&1?x:p,o.kernel.value=l[h],o.inputBuffer.value=S.texture,e.setRenderTarget(D),e.render(f,u),S=D;o.kernel.value=l[h],o.inputBuffer.value=S.texture,e.setRenderTarget(this.renderToScreen?null:m),e.render(f,u)}dispose(){this.screen.material.dispose(),this.screen.geometry.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.convolutionMaterial.dispose()}}const{MeshStandardMaterial:ue}=await c("three");class pe extends ue{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tSharp={value:null},this._tBlur={value:null},this._textureMatrix={value:null},this._mix={value:.5},this._sharpMix={value:0},this._blurMixSmooth={value:0},this._blurMixRough={value:0},this._sharpDepthEdgeMin={value:.9},this._sharpDepthEdgeMax={value:1},this._sharpDepthScale={value:0},this._sharpDepthBias={value:0},this._distortion={value:1},this._mapIntensity={value:1},this.setValues(e)}onBeforeCompile(e){e.defines?.USE_UV||(e.defines.USE_UV="");for(const r of Object.keys(e.defines))e.defines[r.toUpperCase()]=e.defines[r];e.uniforms.tSharp=this._tSharp,e.uniforms.tDepth=this._tDepth,e.uniforms.tBlur=this._tBlur,e.uniforms.distortionMap=this._distortionMap,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mixMain=this._mix,e.uniforms.sharpMix=this._sharpMix,e.uniforms.sharpDepthScale=this._sharpDepthScale,e.uniforms.sharpDepthEdgeMin=this._sharpDepthEdgeMin,e.uniforms.sharpDepthEdgeMax=this._sharpDepthEdgeMax,e.uniforms.sharpDepthBias=this._sharpDepthBias,e.uniforms.blurMixSmooth=this._blurMixSmooth,e.uniforms.blurMixRough=this._blurMixRough,e.uniforms.distortion=this._distortion,e.uniforms.mapIntensity=this._mapIntensity,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tSharp;
        uniform sampler2D tBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float mapIntensity;
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
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`vec4 mapBaseDiffuseColor = diffuseColor;
      #include <map_fragment>
      #ifdef USE_MAP
        diffuseColor = mix(mapBaseDiffuseColor, diffuseColor, clamp(mapIntensity, 0.0, 1.0));
      #endif`),e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      vec4 new_vUv = my_vUv;

      #ifdef USE_DISTORTION
        float distortionFactor = (texture(distortionMap, vUv).r - 0.5) * distortion;
        new_vUv.x += distortionFactor;
        new_vUv.y += distortionFactor;
      #endif

      #ifdef USE_NORMALMAP

        vec4 normalColor = texture(normalMap, vNormalMapUv);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        vec2 normal_uv = coord.xy + coord.z * my_normal.xz * normalScale * 0.05;

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
      `),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`

      #ifdef USE_BLUR
        outgoingLight += mixMain * (
          vec3(sharp) * sharpMix
          + vec3(blur) * (blurMixSmooth * (1.0 - roughnessFactor) + blurMixRough * roughnessFactor)
        );
      #else
        outgoingLight += mixMain * vec3(sharp) * sharpMix;
      #endif

      #include <opaque_fragment>
      `)}get tSharp(){return this._tSharp.value}set tSharp(e){this._tSharp.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tBlur(){return this._tBlur.value}set tBlur(e){this._tBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get sharpMix(){return this._sharpMix.value}set sharpMix(e){this._sharpMix.value=e}get blurMixSmooth(){return this._blurMixSmooth.value}set blurMixSmooth(e){this._blurMixSmooth.value=e}get blurMixRough(){return this._blurMixRough.value}set blurMixRough(e){this._blurMixRough.value=e}get mix(){return this._mix.value}set mix(e){this._mix.value=e}get sharpDepthScale(){return this._sharpDepthScale.value}set sharpDepthScale(e){this._sharpDepthScale.value=e}get sharpDepthBias(){return this._sharpDepthBias.value}set sharpDepthBias(e){this._sharpDepthBias.value=e}get sharpDepthEdgeMin(){return this._sharpDepthEdgeMin.value}set sharpDepthEdgeMin(e){this._sharpDepthEdgeMin.value=e}get sharpDepthEdgeMax(){return this._sharpDepthEdgeMax.value}set sharpDepthEdgeMax(e){this._sharpDepthEdgeMax.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mapIntensity(){return this._mapIntensity.value}set mapIntensity(e){this._mapIntensity.value=e}}const{defineComponent:he}=await c("vue"),{unref:T,mergeProps:fe,openBlock:ve,createElementBlock:de}=await c("vue"),ce=["texture-matrix","t-sharp","t-depth","t-blur","defines-USE_BLUR","defines-USE_DEPTH","defines-USE_DISTORTION"],{Color:z,DepthTexture:me,Euler:xe,HalfFloatType:A,LinearFilter:P,Matrix4:I,PerspectiveCamera:Me,Plane:ge,TangentSpaceNormalMap:_e,Vector2:Se,Vector3:_,Vector4:k,WebGLRenderer:L,WebGLRenderTarget:V}=await c("three"),{computed:s,onBeforeUnmount:De,shallowRef:ye,toValue:R,watch:N}=await c("vue"),Ee=he({__name:"index",props:{resolution:{default:256},mix:{default:1},sharpMix:{default:1},sharpDepthScale:{default:1},sharpDepthBias:{default:0},sharpDepthEdgeMin:{default:0},sharpDepthEdgeMax:{default:.2},blurMixSmooth:{default:1},blurMixRough:{default:1},blurDepthScale:{default:1},blurDepthBias:{default:0},blurDepthEdgeMin:{default:0},blurDepthEdgeMax:{default:.2},blurSize:{default:()=>[0,0]},distortionMap:{},distortion:{default:0},reflectorOffset:{default:0},color:{default:()=>new z(3355443)},roughness:{default:1},metalness:{default:0},map:{},mapIntensity:{default:1},lightMap:{},lightMapIntensity:{default:1},aoMap:{},aoMapIntensity:{default:1},emissive:{default:()=>new z(0)},emissiveIntensity:{default:1},emissiveMap:{},bumpMap:{},bumpScale:{default:1},normalMap:{},normalMapType:{default:_e},normalScale:{default:()=>new Se(1,1)},displacementMap:{},displacementScale:{default:1},displacementBias:{default:0},roughnessMap:{default:null},metalnessMap:{},alphaMap:{},envMap:{},envMapRotation:{default:()=>new xe},envMapIntensity:{default:1},wireframe:{type:Boolean,default:!1},wireframeLinewidth:{default:1},wireframeLinecap:{default:"round"},wireframeLinejoin:{default:"round"},flatShading:{type:Boolean,default:!1},fog:{type:Boolean,default:!0}},setup(w,{expose:e}){const r=w,{extend:m,invalidate:f}=$();m({MeshReflectionMaterial:pe});const u=s(()=>500-(Array.isArray(r.blurSize)?r.blurSize[0]:r.blurSize)),p=s(()=>500-(Array.isArray(r.blurSize)?r.blurSize[1]:r.blurSize)),x=s(()=>u.value>0||p.value>0),v=s(()=>r.sharpDepthScale>0||r.blurDepthScale>0),o=s(()=>!!r.distortionMap),l=s(()=>!!r.roughnessMap),S=s(()=>!!r.map),D=s(()=>!!r.normalMap),h=s(()=>[x.value,v.value,o.value,l.value,S.value,D.value].map(Number).join("-")),M=ye();let U;const t={reflectorPlane:new ge,normal:new _,reflectorWorldPosition:new _,cameraWorldPosition:new _,rotationMatrix:new I,lookAtPosition:new _(0,0,-1),clipPlane:new k,view:new _,target:new _,q:new k,virtualCamera:new Me,textureMatrix:new I},g=new V(r.resolution,r.resolution,{minFilter:P,magFilter:P,type:A,depthBuffer:!0,depthTexture:new me(r.resolution,r.resolution)}),b=new V(r.resolution,r.resolution,{minFilter:P,magFilter:P,type:A});N(()=>[r.resolution],()=>{g.setSize(r.resolution,r.resolution),b.setSize(r.resolution,r.resolution)}),N(()=>[r.resolution,u.value,p.value,r.blurDepthEdgeMin,r.blurDepthEdgeMax,r.blurDepthScale,r.blurDepthBias],()=>{U?.dispose(),U=new se({resolution:r.resolution,width:u.value,height:p.value,depthEdge0:r.blurDepthEdgeMin,depthEdge1:r.blurDepthEdgeMax,depthScale:r.blurDepthScale,depthBias:r.blurDepthBias})},{immediate:!0}),De(()=>{g.dispose(),b.dispose(),U.dispose()});const{onBeforeRender:j}=G();return j(({renderer:a,scene:B,camera:y})=>{const d=M.value?.__tres?.parent;if(d?.visible){if(a instanceof K){console.warn("MeshReflectionMaterial: WebGPURenderer is not supported yet");return}if(a instanceof L){f();const H=d.visible,O=a.xr.enabled,q=a.shadowMap.autoUpdate;if(t.reflectorWorldPosition.setFromMatrixPosition(d.matrixWorld),t.cameraWorldPosition.setFromMatrixPosition(y.value?.matrixWorld),t.rotationMatrix.extractRotation(d.matrixWorld),t.normal.set(0,0,1),t.normal.applyMatrix4(t.rotationMatrix),t.reflectorWorldPosition.addScaledVector(t.normal,r.reflectorOffset),t.view.subVectors(t.reflectorWorldPosition,t.cameraWorldPosition),t.view.dot(t.normal)>0)return;d.visible=!1,t.view.reflect(t.normal).negate(),t.view.add(t.reflectorWorldPosition),t.rotationMatrix.extractRotation(y.value?.matrixWorld),t.lookAtPosition.set(0,0,-1),t.lookAtPosition.applyMatrix4(t.rotationMatrix),t.lookAtPosition.add(t.cameraWorldPosition),t.target.subVectors(t.reflectorWorldPosition,t.lookAtPosition),t.target.reflect(t.normal).negate(),t.target.add(t.reflectorWorldPosition),t.virtualCamera.position.copy(t.view),t.virtualCamera.up.set(0,1,0),t.virtualCamera.up.applyMatrix4(t.rotationMatrix),t.virtualCamera.up.reflect(t.normal),t.virtualCamera.lookAt(t.target),t.virtualCamera.far=y.value.far,t.virtualCamera.updateMatrixWorld(),t.virtualCamera.far=y.value.far,t.virtualCamera.projectionMatrix.copy(y.value.projectionMatrix),t.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.textureMatrix.multiply(t.virtualCamera.projectionMatrix),t.textureMatrix.multiply(t.virtualCamera.matrixWorldInverse),t.textureMatrix.multiply(d.matrixWorld),t.reflectorPlane.setFromNormalAndCoplanarPoint(t.normal,t.reflectorWorldPosition),t.reflectorPlane.applyMatrix4(t.virtualCamera.matrixWorldInverse),t.clipPlane.set(t.reflectorPlane.normal.x,t.reflectorPlane.normal.y,t.reflectorPlane.normal.z,t.reflectorPlane.constant);const n=t.virtualCamera.projectionMatrix;t.q.x=(Math.sign(t.clipPlane.x)+n.elements[8])/n.elements[0],t.q.y=(Math.sign(t.clipPlane.y)+n.elements[9])/n.elements[5],t.q.z=-1,t.q.w=(1+n.elements[10])/n.elements[14],t.clipPlane.multiplyScalar(2/t.clipPlane.dot(t.q)),n.elements[2]=t.clipPlane.x,n.elements[6]=t.clipPlane.y,n.elements[10]=t.clipPlane.z+1,n.elements[14]=t.clipPlane.w,a.shadowMap.autoUpdate=!1,a.setRenderTarget(g),a.autoClear||a.clear(),F(R(B)),a.render(R(B),t.virtualCamera),a instanceof L&&U.render(a,g,b),F(R(B),!1),a.xr.enabled=O,a.shadowMap.autoUpdate=q,d.visible=H,a.setRenderTarget(null),f()}}}),e({instance:M}),(a,B)=>(ve(),de("TresMeshReflectionMaterial",fe({key:h.value,ref_key:"materialRef",ref:M},r,{"texture-matrix":t.textureMatrix,"t-sharp":T(g)?.texture,"t-depth":T(g)?.depthTexture,"t-blur":T(b)?.texture,"defines-USE_BLUR":x.value?"":void 0,"defines-USE_DEPTH":v.value?"":void 0,"defines-USE_DISTORTION":o.value?"":void 0}),null,16,ce))}});export{Ee as _sfc_main};
