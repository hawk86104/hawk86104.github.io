const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.DTe2qqjO1767148983502.js","./3d-tiles-renderer.DZNovkLO1767148983502.js","./runtime-core.esm-bundler.lozGpi4i1767148983502.js","../css/index.h2WmLICC1767148983502.css","./index.Bxnrcw_21767148983502.js","./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js","./utils.sbhH34FI1767148983502.js","./three.webgpu.TnOrJG3G1767148983502.js","./three.CjjHJWB_1767148983502.js","./index.Bk2zy1aS1767148983502.js","./constants.D4Rj9O5x1767148983502.js","./useSeek.BLQ2gt3M1767148983502.js","./shapeConfigurator.Cc6M7LZM1767148983502.js","./index.Csbvztzn1767148983502.js","./flexiblePipe.vue_vue_type_script_setup_true_lang.B1EiCryb1767148983502.js","./Resource.DwxffO9V1767148983502.js","./DRACOLoader.s6KPdFgO1767148983502.js","./HDRLoader.l3JhD1mt1767148983502.js","./buildFlexiblePipe.Dz4Dgd2u1767148983502.js","./flexiblePipe2.vue_vue_type_script_setup_true_lang.ByarhPt41767148983502.js","./material.vue_vue_type_script_setup_true_lang.l9Jm8A0P1767148983502.js"])))=>i.map(i=>d[i]);
import{importShared as O}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as ce,_l as we,__vitePreload as xe,kz as Ft,Uz as zt,Oz as Ot,Dz as Nt,Bz as Lt,Iz as $t,Pz as jt,Nz as Ut,Cz as Vt,Rz as Ht,Ez as Gt,Sz as Wt,wz as Yt,Tz as Kt}from"./index.DTe2qqjO1767148983502.js";import{shaderMaterial as We}from"./shaderMaterial.CBuQXryg1767148983502.js";import{FullScreenQuad as qt}from"./Pass.CNeFv-CX1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{getDefaultExportFromCjs as Xt}from"./_commonjsHelpers.B57D3uns1767148983502.js";import{commonjsRequire as Se}from"./_commonjs-dynamic-modules.DU1V7vIJ1767148983502.js";import{instance as qe}from"./Resource.DwxffO9V1767148983502.js";import{NCard as Zt}from"./Card.CLGorf6I1767148983502.js";import{NSpace as Jt}from"./Space.ugCFVeji1767148983502.js";import{NSelect as Qt,NSlider as en,NSwitch as tn}from"./Switch.BWmbzq8P1767148983502.js";import{NForm as nn,NFormItem as rn}from"./FormItem.BV0Pjtsh1767148983502.js";import{B as an}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";import{RGBELoader as Xe}from"./RGBELoader.DihP6bbm1767148983502.js";const{Scene:on,Object3D:sn,Mesh:ln}=await O("three");class cn extends sn{constructor(){super(),this.virtualScene=null,this.virtualScene=new on}add(...o){return this.virtualScene.add(...o),this}destructor(){this.virtualScene.traverse(o=>{o instanceof ln&&(o.geometry.dispose(),o.material.dispose(),o.material.map&&o.material.map.dispose(),this.virtualScene.remove(o))}),this.virtualScene=null}}const Me={sunset:"venice/venice_sunset_1k.hdr",studio:"studio/poly_haven_studio_1k.hdr",city:"city/canary_wharf_1k.hdr",umbrellas:"outdoor/outdoor_umbrellas_1k.hdr",night:"outdoor/satara_night_1k.hdr",forest:"outood/mossy_forest_1k.hdr",snow:"outdoor/snowy_forest_path_01_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",hangar:"indoor/small_hangar_01_1k.hdr",urban:"indoor/abandoned_games_room_02_1k.hdr",modern:"city/modern_buildings_2_1k.hdr",shangai:"city/shanghai_bund_1k.hdr"},{CubeReflectionMapping:un,CubeTextureLoader:fn,EquirectangularReflectionMapping:Ze}=await O("three"),{computed:Je,ref:Te,toRefs:dn,unref:Be,watch:me}=await O("vue"),mn="https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";async function pn(l,o){const{scene:a,invalidate:i}=ce();me(l,()=>{i()});const{preset:u,blur:p,files:y=Te([]),path:_=Te(""),background:M}=dn(l),A=Te(null),k=Je(()=>Array.isArray(y.value)),B=Je(()=>k.value?fn:Xe);return me([y,_],async([x,R])=>{if(x&&x.length>0&&!u?.value){try{A.value=await wt(B.value,k.value?[...Be(x)]:Be(x),v=>{R&&v.setPath(Be(R))})}catch(v){throw new Error(`Failed to load environment map: ${v}`)}A.value&&(A.value.mapping=k.value?un:Ze),i()}},{immediate:!0}),me(A,x=>{a.value&&x&&(a.value.environment=x)},{immediate:!0}),me([M,A],([x,R])=>{if(a.value){let v=o?.value?o.value.texture:R,P=a.value.background;P?.isColor||(P=void 0),a.value.background=x?v:P}},{immediate:!0}),me(()=>p?.value,x=>{a.value&&x&&(a.value.backgroundBlurriness=x)},{immediate:!0}),me(()=>u?.value,async x=>{if(x&&x in Me){const R=mn,v=Me[x];try{A.value=await wt(Xe,v,P=>{R&&P.setPath(R)})}catch(P){throw new Error(`Failed to load environment map: ${P}`)}A.value&&A.value&&(A.value.mapping=Ze),i()}else if(x&&!(x in Me))throw new Error(`Preset must be one of: ${Object.keys(Me).join(", ")}`)},{immediate:!0}),A}const{withAsyncContext:hn,defineComponent:vn}=await O("vue"),{unref:gn,renderSlot:yn,openBlock:_n,createElementBlock:bn,createCommentVNode:wn}=await O("vue"),{ref:Re,useSlots:xn,onUnmounted:Sn,watch:De,toRaw:Mn}=await O("vue"),{WebGLCubeRenderTarget:En,CubeCamera:Pn,HalfFloatType:Qe,UnsignedByteType:In,NearestFilter:et}=await O("three"),ti=vn({__name:"component",props:{background:{type:[Boolean,String],default:!1},blur:{default:0},files:{default:[]},path:{default:""},preset:{default:void 0},resolution:{default:256},near:{default:1},far:{default:1e3},frames:{default:1/0},useDefaultScene:{type:Boolean,default:!1}},async setup(l,{expose:o}){let a,i;const u=l,p=Re(null);o({texture:p});const{extend:y,renderer:_,scene:M}=ce();let A=null,k=Re(null),B=null;const x=Re(null);Sn(()=>{x.value?.destructor(),k.value?.dispose()});const{onBeforeRender:R}=we();let v=1;R(()=>{B&&x.value&&k.value&&(u.frames===1/0||v<u.frames)&&(u.useDefaultScene?B.update(_,M.value):B.update(_,Mn(x.value.virtualScene)),v++)});const P=([a,i]=hn(()=>pn(u,k)),a=await a,i(),a),d=b=>{b?(M.value.environment=b.texture,u.background&&(M.value.background=b.texture)):(M.value.environment=P.value,u.background&&(M.value.background=P.value))};De(P,b=>{k.value&&d(k.value)},{immediate:!0,deep:!0}),y({EnvSence:cn});const w=()=>{k.value?.dispose(),k.value=new En(u.resolution),B=new Pn(u.near,u.far,k.value),u.useDefaultScene?(k.value.texture.type=In,k.value.texture.generateMipmaps=!1,k.value.texture.minFilter=et,k.value.texture.magFilter=et):k.value.texture.type=Qe,d(k.value)};return De(()=>xn().default,b=>{if(b&&(!k.value||k.value.texture.type!==Qe)&&(A=b(),Array.isArray(A)&&A.length>0&&typeof A[0]?.type!="symbol")){w();return}k.value?.dispose(),k.value=null,d(null)},{immediate:!0,deep:!0}),p.value=P,De(()=>u.useDefaultScene,b=>{k.value&&w()}),(b,E)=>gn(k)?(_n(),bn("TresEnvSence",{key:0,ref_key:"envSence",ref:x},[yn(b.$slots,"default")],512)):wn("",!0)}}),{defineComponent:Cn}=await O("vue"),{openBlock:_e,createElementBlock:Ee,createBlock:kn,unref:An,createElementVNode:Tn}=await O("vue"),Bn={key:0,args:[0,1,64]},Rn={key:1,args:[.5,1,64]},Dn={key:2},Fn=["toneMapped","map","side","color"],{ref:zn,watchEffect:On,onMounted:Nn,watch:Ln}=await O("vue"),{Color:$n,DoubleSide:jn}=await O("three"),ni=Cn({__name:"index",props:{args:{default:null},from:{default:"rect"},toneMapped:{type:Boolean,default:!1},map:{default:null},intensity:{default:1},color:{default:new $n(16777215)}},setup(l){const o=l,a=zn();return On(()=>{a.value&&(a.value.color.multiplyScalar(o.intensity),a.value.needsUpdate=!0)}),Ln(()=>o.color,i=>{a.value&&(a.value.color.set(i),a.value.color.multiplyScalar(o.intensity),a.value.needsUpdate=!0)}),Nn(()=>{}),(i,u)=>(_e(),Ee("TresMesh",null,[o.from==="circle"?(_e(),Ee("TresRingGeometry",Bn)):o.from==="ring"?(_e(),Ee("TresRingGeometry",Rn)):o.from==="rect"?(_e(),Ee("TresPlaneGeometry",Dn)):(_e(),kn(o.from,{key:3,args:o})),Tn("TresMeshBasicMaterial",{ref_key:"material",ref:a,toneMapped:i.toneMapped,map:i.map,side:An(jn),color:i.color},null,8,Fn)]))}}),{DepthTexture:Un,DepthFormat:Vn,UnsignedShortType:Hn,HalfFloatType:Gn,LinearFilter:tt,WebGLRenderTarget:Wn}=await O("three"),{isReactive:Yn,onBeforeUnmount:Kn,reactive:qn,ref:Xn,toRefs:nt,watchEffect:Zn,toRaw:Fe}=await O("vue");function rt(l){const o=Xn(null),{height:a,width:i,settings:u,depth:p,isLoop:y}=Yn(l)?nt(l):nt(qn(l)),{onRender:_}=we(),{camera:M,renderer:A,scene:k,sizes:B}=ce();return Zn(()=>{o.value?.dispose(),o.value=new Wn(i?.value||B.width.value,a?.value||B.height.value,{minFilter:tt,magFilter:tt,type:Gn,...u?.value}),p?.value&&(o.value.depthTexture=new Un(i?.value||B.width.value,a?.value||B.height.value),o.value.depthTexture.format=Vn,o.value.depthTexture.type=Hn)}),_(()=>{y?.value&&(A.setRenderTarget(Fe(o.value)),A.clear(),A.render(Fe(k.value),Fe(M.value)),A.setRenderTarget(null))}),Kn(()=>{o.value?.dispose()}),o}const pe=await O("three");function Pe(l=1024,o=1024,a){var i=l,u=o,p=a||{};const{samples:y=0,depth:_,...M}=p,A=_??p.depthBuffer;var k=new pe.WebGLRenderTarget(i,u,{minFilter:pe.LinearFilter,magFilter:pe.LinearFilter,type:pe.HalfFloatType,...M});return A&&(k.depthTexture=new pe.DepthTexture(i,u,pe.FloatType)),k.samples=y,k}const U=await O("three"),Jn=l=>l?.isVector3;function at(l=U.FrontSide){const o={value:new U.Matrix4};return Object.assign(new U.MeshNormalMaterial({side:l}),{viewMatrix:o,onBeforeCompile:a=>{a.uniforms.viewMatrix=o,a.fragmentShader=`vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
           return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
         }
`+a.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
           normal = inverseTransformDirection( normal, viewMatrix );
`)}})}const Qn=We({causticsTexture:null,causticsTextureB:null,color:new U.Color,lightProjMatrix:new U.Matrix4,lightViewMatrix:new U.Matrix4},`varying vec3 vWorldPosition;   
   void main() {
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
     vec4 worldPosition = modelMatrix * vec4(position, 1.);
     vWorldPosition = worldPosition.xyz;
   }`,`varying vec3 vWorldPosition;
  uniform vec3 color;
  uniform sampler2D causticsTexture; 
  uniform sampler2D causticsTextureB; 
  uniform mat4 lightProjMatrix;
  uniform mat4 lightViewMatrix;
   void main() {
    // Apply caustics  
    vec4 lightSpacePos = lightProjMatrix * lightViewMatrix * vec4(vWorldPosition, 1.0);
    lightSpacePos.xyz /= lightSpacePos.w;
    lightSpacePos.xyz = lightSpacePos.xyz * 0.5 + 0.5; 
    vec3 front = texture2D(causticsTexture, lightSpacePos.xy).rgb;
    vec3 back = texture2D(causticsTextureB, lightSpacePos.xy).rgb;
    gl_FragColor = vec4((front + back) * color, 1.0);
    #include <tonemapping_fragment>
    #include <${parseInt(U.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
   }`),er=We({cameraMatrixWorld:new U.Matrix4,cameraProjectionMatrixInv:new U.Matrix4,normalTexture:null,depthTexture:null,lightDir:new U.Vector3(0,1,0),lightPlaneNormal:new U.Vector3(0,1,0),lightPlaneConstant:0,near:.1,far:100,modelMatrix:new U.Matrix4,worldRadius:1/40,ior:1.1,bounces:0,resolution:1024,size:10,intensity:.5},`
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,`  
  uniform mat4 cameraMatrixWorld;
  uniform mat4 cameraProjectionMatrixInv;
  uniform vec3 lightDir;
  uniform vec3 lightPlaneNormal;
  uniform float lightPlaneConstant;
  uniform float near;
  uniform float far;
  uniform float time;
  uniform float worldRadius;
  uniform float resolution;
  uniform float size;
  uniform float intensity;
  uniform float ior;
  precision highp isampler2D;
  precision highp usampler2D;
  uniform sampler2D normalTexture;
  uniform sampler2D depthTexture;
  uniform float bounces;
  varying vec2 vUv;
  vec3 WorldPosFromDepth(float depth, vec2 coord) {
    float z = depth * 2.0 - 1.0;
    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
    vec4 viewSpacePosition = cameraProjectionMatrixInv * clipSpacePosition;
    // Perspective division
    viewSpacePosition /= viewSpacePosition.w;
    vec4 worldSpacePosition = cameraMatrixWorld * viewSpacePosition;
    return worldSpacePosition.xyz;
  }                  
  float sdPlane( vec3 p, vec3 n, float h ) {
    // n must be normalized
    return dot(p,n) + h;
  }
  float planeIntersect( vec3 ro, vec3 rd, vec4 p ) {
    return -(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);
  }
  vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 pos, vec3 normal, float ior, out vec3 rayOrigin, out vec3 rayDirection) {
    rayOrigin = ro;
    rayDirection = rd;
    rayDirection = refract(rayDirection, normal, 1.0 / ior);
    rayOrigin = pos + rayDirection * 0.1;
    return rayDirection;
  }
  void main() {
    // Each sample consists of random offset in the x and y direction
    float caustic = 0.0;
    float causticTexelSize = (1.0 / resolution) * size * 2.0;
    float texelsNeeded = worldRadius / causticTexelSize;
    float sampleRadius = texelsNeeded / resolution;
    float sum = 0.0;
    if (texture2D(depthTexture, vUv).x == 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }
    vec2 offset1 = vec2(-0.5, -0.5);//vec2(rand() - 0.5, rand() - 0.5);
    vec2 offset2 = vec2(-0.5, 0.5);//vec2(rand() - 0.5, rand() - 0.5);
    vec2 offset3 = vec2(0.5, 0.5);//vec2(rand() - 0.5, rand() - 0.5);
    vec2 offset4 = vec2(0.5, -0.5);//vec2(rand() - 0.5, rand() - 0.5);
    vec2 uv1 = vUv + offset1 * sampleRadius;
    vec2 uv2 = vUv + offset2 * sampleRadius;
    vec2 uv3 = vUv + offset3 * sampleRadius;
    vec2 uv4 = vUv + offset4 * sampleRadius;
    vec3 normal1 = texture2D(normalTexture, uv1, -10.0).rgb * 2.0 - 1.0;
    vec3 normal2 = texture2D(normalTexture, uv2, -10.0).rgb * 2.0 - 1.0;
    vec3 normal3 = texture2D(normalTexture, uv3, -10.0).rgb * 2.0 - 1.0;
    vec3 normal4 = texture2D(normalTexture, uv4, -10.0).rgb * 2.0 - 1.0;
    float depth1 = texture2D(depthTexture, uv1, -10.0).x;
    float depth2 = texture2D(depthTexture, uv2, -10.0).x;
    float depth3 = texture2D(depthTexture, uv3, -10.0).x;
    float depth4 = texture2D(depthTexture, uv4, -10.0).x;
    // Sanity check the depths
    if (depth1 == 1.0 || depth2 == 1.0 || depth3 == 1.0 || depth4 == 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }
    vec3 pos1 = WorldPosFromDepth(depth1, uv1);
    vec3 pos2 = WorldPosFromDepth(depth2, uv2);
    vec3 pos3 = WorldPosFromDepth(depth3, uv3);
    vec3 pos4 = WorldPosFromDepth(depth4, uv4);
    vec3 originPos1 = WorldPosFromDepth(0.0, uv1);
    vec3 originPos2 = WorldPosFromDepth(0.0, uv2);
    vec3 originPos3 = WorldPosFromDepth(0.0, uv3);
    vec3 originPos4 = WorldPosFromDepth(0.0, uv4);
    vec3 endPos1, endPos2, endPos3, endPos4;
    vec3 endDir1, endDir2, endDir3, endDir4;
    totalInternalReflection(originPos1, lightDir, pos1, normal1, ior, endPos1, endDir1);
    totalInternalReflection(originPos2, lightDir, pos2, normal2, ior, endPos2, endDir2);
    totalInternalReflection(originPos3, lightDir, pos3, normal3, ior, endPos3, endDir3);
    totalInternalReflection(originPos4, lightDir, pos4, normal4, ior, endPos4, endDir4);
    float lightPosArea = length(cross(originPos2 - originPos1, originPos3 - originPos1)) + length(cross(originPos3 - originPos1, originPos4 - originPos1));
    float t1 = planeIntersect(endPos1, endDir1, vec4(lightPlaneNormal, lightPlaneConstant));
    float t2 = planeIntersect(endPos2, endDir2, vec4(lightPlaneNormal, lightPlaneConstant));
    float t3 = planeIntersect(endPos3, endDir3, vec4(lightPlaneNormal, lightPlaneConstant));
    float t4 = planeIntersect(endPos4, endDir4, vec4(lightPlaneNormal, lightPlaneConstant));
    vec3 finalPos1 = endPos1 + endDir1 * t1;
    vec3 finalPos2 = endPos2 + endDir2 * t2;
    vec3 finalPos3 = endPos3 + endDir3 * t3;
    vec3 finalPos4 = endPos4 + endDir4 * t4;
    float finalArea = length(cross(finalPos2 - finalPos1, finalPos3 - finalPos1)) + length(cross(finalPos3 - finalPos1, finalPos4 - finalPos1));
    caustic += intensity * (lightPosArea / finalArea);
    // Calculate the area of the triangle in light spaces
    gl_FragColor = vec4(vec3(max(caustic, 0.0)), 1.0);
  }`),ot={depthBuffer:!0,minFilter:U.LinearFilter,magFilter:U.LinearFilter,type:U.UnsignedByteType},ze={minFilter:U.LinearMipmapLinearFilter,magFilter:U.LinearFilter,type:U.FloatType,generateMipmaps:!0};function tr(l){const o=at(),a=at(U.BackSide),i=new er,u=new qt(i);let p=0;const y=new U.Vector3,_=new U.Frustum,M=new U.Matrix4,A=new U.Plane,k=new U.Vector3,B=new U.Vector3,x=new U.Box3,R=new U.Vector3,v=[],P=[],d=[],w=[],b=new U.Vector3;for(let E=0;E<8;E++)v.push(new U.Vector3),P.push(new U.Vector3),d.push(new U.Vector3),w.push(new U.Vector3);return function(S){const{params:T,helper:f,camera:h,plane:n,normalTarget:s,normalTargetB:t,causticsTarget:m,causticsTargetB:g,scene:L,group:$}=l();if(T.frames===1/0||T.frames&&p++<T.frames){var j;Jn(T.lightSource)?k.copy(T.lightSource).normalize():T.lightSource&&k.copy($.worldToLocal(T.lightSource.getWorldPosition(y)).normalize()),B.copy(k).multiplyScalar(-1),(j=L.parent)==null||j.matrixWorld.identity(),x.setFromObject(L,!0),v[0].set(x.min.x,x.min.y,x.min.z),v[1].set(x.min.x,x.min.y,x.max.z),v[2].set(x.min.x,x.max.y,x.min.z),v[3].set(x.min.x,x.max.y,x.max.z),v[4].set(x.max.x,x.min.y,x.min.z),v[5].set(x.max.x,x.min.y,x.max.z),v[6].set(x.max.x,x.max.y,x.min.z),v[7].set(x.max.x,x.max.y,x.max.z);for(let G=0;G<8;G++)P[G].copy(v[G]);x.getCenter(R),v.map(G=>G.sub(R));const z=A.set(B,0);v.map((G,J)=>z.projectPoint(G,d[J]));const Y=d.reduce((G,J)=>G.add(J),y.set(0,0,0)).divideScalar(d.length),q=d.map(G=>G.distanceTo(Y)).reduce((G,J)=>Math.max(G,J)),K=v.map(G=>G.dot(k)).reduce((G,J)=>Math.max(G,J));h.position.copy(b.copy(k).multiplyScalar(K).add(R)),h.lookAt(L.localToWorld(R));const W=M.lookAt(h.position,R,y.set(0,1,0));if(h.left=-q,h.right=q,h.top=q,h.bottom=-q,T.near&&(h.near=T.near),T.far)h.far=T.far;else{const G=y.set(0,q,0).applyMatrix4(W),J=(h.position.y+G.y)/k.y;h.far=J}h.updateProjectionMatrix(),h.updateMatrixWorld();const oe=P.map((G,J)=>G.add(w[J].copy(k).multiplyScalar(-G.y/k.y))),ue=oe.reduce((G,J)=>G.add(J),y.set(0,0,0)).divideScalar(oe.length),fe=2*oe.map(G=>Math.hypot(G.x-ue.x,G.z-ue.z)).reduce((G,J)=>Math.max(G,J));n.scale.setScalar(fe),n.position.copy(ue),f!=null&&f.parent&&f.update(),a.viewMatrix.value=o.viewMatrix.value=h.matrixWorldInverse;const ye=_.setFromProjectionMatrix(M.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse)).planes[4];i.cameraMatrixWorld=h.matrixWorld,i.cameraProjectionMatrixInv=h.projectionMatrixInverse,i.lightDir=B,i.lightPlaneNormal=ye.normal,i.lightPlaneConstant=ye.constant,i.near=h.near,i.far=h.far,T.resolution&&(i.resolution=T.resolution),i.size=q,T.intensity&&(i.intensity=T.intensity),T.worldRadius&&(i.worldRadius=T.worldRadius),L.visible=!0,S.setRenderTarget(s),S.clear(),L.overrideMaterial=o,S.render(L,h),S.setRenderTarget(t),S.clear(),T.backside&&(L.overrideMaterial=a,S.render(L,h)),L.overrideMaterial=null,T.ior&&(i.ior=T.ior),n.material.lightProjMatrix=h.projectionMatrix,n.material.lightViewMatrix=h.matrixWorldInverse,i.normalTexture=s.texture,i.depthTexture=s.depthTexture,S.setRenderTarget(m),S.clear(),u.render(S),T.backsideIOR&&(i.ior=T.backsideIOR),i.normalTexture=t.texture,i.depthTexture=t.depthTexture,S.setRenderTarget(g),S.clear(),T.backside&&u.render(S),S.setRenderTarget(null),T.causticsOnly&&(L.visible=!1)}}}const nr=(l,{frames:o=1,causticsOnly:a=!1,ior:i=1.1,backside:u=!1,backsideIOR:p=1.1,worldRadius:y=.3125,color:_=new U.Color("white"),intensity:M=.05,resolution:A=2024,lightSource:k=new U.Vector3(1,1,1),near:B=.1,far:x=0}={})=>{const R={frames:o,ior:i,color:_,causticsOnly:a,backside:u,backsideIOR:p,worldRadius:y,intensity:M,resolution:A,lightSource:k,near:B,far:x},v=new U.Group;v.name="caustics_group";const P=new U.OrthographicCamera,d=new U.Scene;d.name="caustics_scene";const w=l,b=new U.CameraHelper(P);b.name="caustics_helper";const E=R.resolution,S=Pe(E,E,ot),T=Pe(E,E,ot);l.extensions.get("OES_texture_float_linear")||(console.warn("Caustics: OES_texture_float_linear extension is not supported, using HalfFloatType instead."),ze.type=U.HalfFloatType);const f=Pe(E,E,ze),h=Pe(E,E,ze),n=new U.Mesh(new U.PlaneGeometry(1,1),new Qn({transparent:!0,color:R.color,causticsTexture:f.texture,causticsTextureB:h.texture,blending:U.CustomBlending,blendSrc:U.OneFactor,blendDst:U.SrcAlphaFactor,depthWrite:!1}));n.name="caustics_plane",n.rotation.x=-Math.PI/2,n.renderOrder=2,v.add(d,n),v.updateWorldMatrix(!1,!0);const s=tr(()=>({params:R,scene:d,group:v,camera:P,plane:n,normalTarget:S,normalTargetB:T,causticsTarget:f,causticsTargetB:h,helper:b}));return{scene:d,group:v,helper:b,params:R,update:s.bind({},w),normalTarget:S,normalTargetB:T,causticsTarget:f,causticsTargetB:h}},rr=We({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }"),it=await O("three");class st extends it.MeshPhysicalMaterial{constructor({samples:o=6,transmissionSampler:a=!1,chromaticAberration:i=.05,transmission:u=0,_transmission:p=1,transmissionMap:y=null,roughness:_=0,thickness:M=0,thicknessMap:A=null,attenuationDistance:k=1/0,attenuationColor:B=new it.Color("white"),anisotropicBlur:x=.1,time:R=0,distortion:v=0,distortionScale:P=.5,temporalDistortion:d=0,buffer:w=null}={}){super(),this.uniforms={chromaticAberration:{value:i},transmission:{value:u},_transmission:{value:p},transmissionMap:{value:y},roughness:{value:_},thickness:{value:M},thicknessMap:{value:A},attenuationDistance:{value:k},attenuationColor:{value:B},anisotropicBlur:{value:x},time:{value:R},distortion:{value:v},distortionScale:{value:P},temporalDistortion:{value:d},buffer:{value:w}},this.onBeforeCompile=b=>{b.uniforms={...b.uniforms,...this.uniforms},a?b.defines.USE_SAMPLER="":b.defines.USE_TRANSMISSION="",b.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+b.fragmentShader,b.fragmentShader=b.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),b.fragmentShader=b.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${o}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${o}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${o})) , material.thickness + thickness_smear * (i + randomCoords) / float(${o}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${o})), material.thickness + thickness_smear * (i + randomCoords) / float(${o}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${o}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(b=>Object.defineProperty(this,b,{get:()=>this.uniforms[b].value,set:E=>this.uniforms[b].value=E}))}}const{defineComponent:ar}=await O("vue"),{unref:lt,openBlock:or,createElementBlock:ir}=await O("vue"),sr=["buffer","side"],{shallowRef:ct,nextTick:lr,onMounted:cr}=await O("vue"),{BackSide:ur,DoubleSide:fr}=await O("three"),dr=0,ri=ar({__name:"index",props:{backside:{type:Boolean,default:!0},thickness:{default:1},backsideThickness:{default:.5},fboResolution:{default:256}},setup(l,{expose:o}){const a=ct(),{extend:i,scene:u,renderer:p,camera:y}=ce(),_=ct(),M=l;i({MeshTransmissionMaterial:st});function A(b,E){let S;return b.traverse(T=>{T.isMesh&&T.material&&T.material.uuid===E&&(S=T)}),S}const k=new rr,{onBeforeRender:B}=we(),x=rt({width:M.fboResolution,height:M.fboResolution,isLoop:!1}),R=rt({width:M.fboResolution,height:M.fboResolution,isLoop:!1});cr(async()=>{await lr(),_.value=A(u.value,a.value.uuid)});let v,P,d,w;return B(({elapsed:b})=>{a.value&&(a.value.time=b,a.value.buffer===R.value.texture&&_.value&&(d=p.toneMapping,v=u.value.background,P=a.value.envMapIntensity,w=_.value.material.side,_.value.material=k,M.backside&&(p.setRenderTarget(x.value),p.render(u.value,y.value),_.value.material=a.value,_.value.material.thickness=M.backsideThickness,_.value.material.buffer=x.value.texture,_.value.material.side=ur,_.value.material.envMapIntensity=dr),p.setRenderTarget(R.value),p.render(u.value,y.value),_.value.material.buffer=R.value.texture,_.value.material=a.value,_.value.material.thickness=M.thickness,_.value.material.side=w,_.value.material.envMapIntensity=P,u.value.background=v,p.setRenderTarget(null),p.toneMapping=d))}),o({root:a,constructor:st}),(b,E)=>(or(),ir("TresMeshTransmissionMaterial",{ref_key:"MeshTransmissionMaterialClass",ref:a,buffer:lt(R).texture,side:lt(fr)},null,8,sr))}}),{defineComponent:mr}=await O("vue"),{renderSlot:pr,createElementVNode:ut,openBlock:hr,createElementBlock:vr}=await O("vue"),{ref:Oe,onMounted:gr}=await O("vue"),{Box3:yr,Vector3:_r,Sphere:br}=await O("three"),ai=mr({__name:"index",props:{precise:{type:Boolean,default:!0},top:{type:Boolean,default:!1},right:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},front:{type:Boolean,default:!1},back:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},disableX:{type:Boolean,default:!1},disableY:{type:Boolean,default:!1},disableZ:{type:Boolean,default:!1}},setup(l){const o=l,a=Oe(null),i=Oe(null),u=Oe(null);return gr(()=>{if(!i.value||!u.value)return;i.value.matrixWorld.identity();const p=new yr().setFromObject(u.value,o.precise),y=new _r,_=new br,M=p.max.x-p.min.x,A=p.max.y-p.min.y,k=p.max.z-p.min.z;p.getCenter(y),p.getBoundingSphere(_);const B=o.top?A/2:o.bottom?-A/2:0,x=o.left?-M/2:o.right?M/2:0,R=o.front?k/2:o.back?-k/2:0;i.value.position.set(o.disable||o.disableX?0:-y.x+x,o.disable||o.disableY?0:-y.y+B,o.disable||o.disableZ?0:-y.z+R)}),(p,y)=>(hr(),vr("TresGroup",{ref_key:"gref",ref:a},[ut("TresGroup",{ref_key:"outer",ref:i},[ut("TresGroup",{ref_key:"inner",ref:u},[pr(p.$slots,"default")],512)],512)],512))}}),{defineComponent:wr}=await O("vue"),{renderSlot:xr,createElementVNode:Ne,unref:ft,Fragment:Sr,openBlock:Mr,createElementBlock:Er}=await O("vue"),Pr=["object"],Ir=["object"],{shallowRef:Cr,watch:Le,watchEffect:kr}=await O("vue"),Ar=await O("three"),oi=wr({__name:"index",props:{color:{default:"#ffffff"},ior:{default:1.1},backsideIOR:{default:1.1},far:{default:15},worldRadius:{default:.3},intensity:{default:.05},causticsOnly:{type:Boolean,default:!1},lightSource:{default:{x:1,y:1,z:1}},resolution:{default:1024}},setup(l){const o=l,{renderer:a}=ce(),i=nr(a,{frames:1/0,resolution:o.resolution,worldRadius:o.worldRadius});i.params.backside=!0;const u=Cr(null);Le(u,y=>{y&&i.scene.add(y)});const{onBeforeRender:p}=we();return p(({elapsed:y})=>{i.update()}),kr(()=>{o.color&&i.params.color.set(o.color),o.ior&&(i.params.ior=o.ior),o.backsideIOR&&(i.params.backsideIOR=o.backsideIOR),o.far&&(i.params.far=o.far),o.worldRadius&&(i.params.worldRadius=o.worldRadius),o.intensity&&(i.params.intensity=o.intensity)}),Le(()=>o.causticsOnly,y=>{i.params.causticsOnly=y}),Le(()=>o.lightSource,y=>{y&&i.params.lightSource instanceof Ar.Vector3&&i.params.lightSource.set(y.x,y.y,y.z)},{deep:!0}),(y,_)=>(Mr(),Er(Sr,null,[Ne("TresGroup",{ref_key:"group",ref:u},[xr(y.$slots,"default")],512),Ne("primitive",{object:ft(i).group,position:[0,.003,0]},null,8,Pr),Ne("primitive",{object:ft(i).helper,visible:!1},null,8,Ir)],64))}}),Ie=await O("three");function Tr(l,o,a){o.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material.forEach(u=>{l.properties.remove(u),u.dispose()}):(l.properties.remove(i.material),i.material.dispose()))}),l.info.programs.length=0,l.compile(o,a)}const Br=({focus:l=0,size:o=25,samples:a=10}={})=>{const i=Ie.ShaderChunk.shadowmap_pars_fragment;return Ie.ShaderChunk.shadowmap_pars_fragment=Ie.ShaderChunk.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP

    #define PENUMBRA_FILTER_SIZE float(${o})
    #define RGB_NOISE_FUNCTION(uv) (randRGB(uv))
    vec3 randRGB(vec2 uv) {
      return vec3(
        fract(sin(dot(uv, vec2(12.75613, 38.12123))) * 13234.76575),
        fract(sin(dot(uv, vec2(19.45531, 58.46547))) * 43678.23431),
        fract(sin(dot(uv, vec2(23.67817, 78.23121))) * 93567.23423)
      );
    }
    
    vec3 lowPassRandRGB(vec2 uv) {
      // 3x3 convolution (average)
      // can be implemented as separable with an extra buffer for a total of 6 samples instead of 9
      vec3 result = vec3(0);
      result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, -1.0));
      result += RGB_NOISE_FUNCTION(uv + vec2(-1.0,  0.0));
      result += RGB_NOISE_FUNCTION(uv + vec2(-1.0, +1.0));
      result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, -1.0));
      result += RGB_NOISE_FUNCTION(uv + vec2( 0.0,  0.0));
      result += RGB_NOISE_FUNCTION(uv + vec2( 0.0, +1.0));
      result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, -1.0));
      result += RGB_NOISE_FUNCTION(uv + vec2(+1.0,  0.0));
      result += RGB_NOISE_FUNCTION(uv + vec2(+1.0, +1.0));
      result *= 0.111111111; // 1.0 / 9.0
      return result;
    }
    vec3 highPassRandRGB(vec2 uv) {
      // by subtracting the low-pass signal from the original signal, we're being left with the high-pass signal
      // hp(x) = x - lp(x)
      return RGB_NOISE_FUNCTION(uv) - lowPassRandRGB(uv) + 0.5;
    }
    
    
    vec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {
      const float goldenAngle = 2.399963f; // radians
      float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));
      float theta = float(sampleIndex) * goldenAngle + angle;
      float sine = sin(theta);
      float cosine = cos(theta);
      return vec2(cosine, sine) * r;
    }
    float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
      return (zReceiver - zBlocker) / zBlocker;
    }
    float findBlocker(sampler2D shadowMap, vec2 uv, float compare, float angle) {
      float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
      float blockerDepthSum = float(${l});
      float blockers = 0.0;
    
      int j = 0;
      vec2 offset = vec2(0.);
      float depth = 0.;
    
      #pragma unroll_loop_start
      for(int i = 0; i < ${a}; i ++) {
        offset = (vogelDiskSample(j, ${a}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
        depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset));
        if (depth < compare) {
          blockerDepthSum += depth;
          blockers++;
        }
        j++;
      }
      #pragma unroll_loop_end
    
      if (blockers > 0.0) {
        return blockerDepthSum / blockers;
      }
      return -1.0;
    }
            
    float vogelFilter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius, float angle) {
      float texelSize = 1.0 / float(textureSize(shadowMap, 0).x);
      float shadow = 0.0f;
      int j = 0;
      vec2 vogelSample = vec2(0.0);
      vec2 offset = vec2(0.0);
      #pragma unroll_loop_start
      for (int i = 0; i < ${a}; i++) {
        vogelSample = vogelDiskSample(j, ${a}, angle) * texelSize;
        offset = vogelSample * (1.0 + filterRadius * float(${o}));
        shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
        j++;
      }
      #pragma unroll_loop_end
      return shadow * 1.0 / ${a}.0;
    }
    
    float PCSS (sampler2D shadowMap, vec4 coords) {
      vec2 uv = coords.xy;
      float zReceiver = coords.z; // Assumed to be eye-space z in this code
      float angle = highPassRandRGB(gl_FragCoord.xy).r * PI2;
      float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver, angle);
      if (avgBlockerDepth == -1.0) {
        return 1.0;
      }
      float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
      return vogelFilter(shadowMap, uv, zReceiver, 1.25 * penumbraRatio, angle);
    }`).replace("#if defined( SHADOWMAP_TYPE_PCF )",`
return PCSS(shadowMap, shadowCoord);
#if defined( SHADOWMAP_TYPE_PCF )`),(u,p,y)=>{Ie.ShaderChunk.shadowmap_pars_fragment=i,Tr(u,p,y)}},{defineComponent:Rr}=await O("vue"),{watch:Dr}=await O("vue"),{Mesh:Fr}=await O("three"),ii=Rr({__name:"index",props:{enabled:{type:Boolean,default:!0},size:{default:25},focus:{default:0},samples:{default:10}},setup(l){const o=l,{camera:a,renderer:i,scene:u}=ce();let p=null;const y=_=>{const{enabled:M,size:A,focus:k,samples:B}=_;p&&(p(i,u.value,a.value),p=null),M&&(p=Br({focus:k,size:A,samples:B}),u.value.traverse(x=>{x instanceof Fr&&x.material.dispose()}))};return y(o),Dr(o,()=>{y(o)}),(_,M)=>null}}),zr=await O("three"),{HalfFloatType:Or,WebGLCubeRenderTarget:Nr}=await O("three"),{onBeforeUnmount:Lr,ref:be,watch:dt}=await O("vue");function $r({resolution:l=256,near:o=.1,far:a=1e3,envMap:i,fog:u}={}){const{renderer:p,scene:y}=ce(),_=be(null),M=be(l),A=be(o),k=be(a),B=be(null);dt(()=>M,P=>{_.value?.dispose(),_.value=new Nr(P.value),_.value.texture.type=Or},{immediate:!0}),dt([A,k,_],([P,d,w])=>{w&&(B.value=new zr.CubeCamera(P,d,w))},{immediate:!0}),Lr(()=>{_.value?.dispose()});let x,R;return{fbo:_,camera:B,update:()=>{x=y.value.fog,R=y.value.background,y.value.background=i||R,y.value.fog=u||x,B.value?.update(p,y.value),y.value.fog=x,y.value.background=R}}}const{defineComponent:jr}=await O("vue"),{unref:Ur,createElementVNode:mt,renderSlot:Vr,openBlock:Hr,createElementBlock:Gr}=await O("vue"),Wr=["object"],{ref:Yr}=await O("vue"),si=jr({__name:"index",props:{resolution:{default:256},near:{default:.1},far:{default:1e3},envMap:{default:null},fog:{default:null},frames:{default:1/0}},setup(l,{expose:o}){const a=l,{fbo:i,camera:u,update:p}=$r({resolution:a.resolution,near:a.near,far:a.far,envMap:a.envMap,fog:a.fog}),{onBeforeRender:y}=we();let _=0;const M=Yr(null);return y(()=>{M.value&&(a.frames===1/0||_<a.frames)&&(M.value.visible=!1,p(),M.value.visible=!0,_++)}),o({texture:i.value?.texture}),(A,k)=>(Hr(),Gr("TresGroup",null,[mt("primitive",{object:Ur(u)},null,8,Wr),mt("TresGroup",{ref_key:"rgRef",ref:M},[Vr(A.$slots,"default")],512)]))}}),$e=await O("three");function li(l,o,a,i){const u=class extends $e.ShaderMaterial{constructor(p={}){const y=Object.entries(l);super({uniforms:y.reduce((_,[M,A])=>{const k=$e.UniformsUtils.clone({[M]:{value:A}});return{..._,...k}},{}),vertexShader:o,fragmentShader:a}),this.key="",y.forEach(([_])=>Object.defineProperty(this,_,{get:()=>this.uniforms[_].value,set:M=>this.uniforms[_].value=M})),Object.assign(this,p),i&&i(this)}};return u.key=$e.MathUtils.generateUUID(),u}var Ct={exports:{}};(function(l,o){(function(a){l.exports=a()})(function(){return function a(i,u,p){function y(A,k){if(!u[A]){if(!i[A]){var B=typeof Se=="function"&&Se;if(!k&&B)return B(A,!0);if(_)return _(A,!0);throw new Error("Cannot find module '"+A+"'")}k=u[A]={exports:{}},i[A][0].call(k.exports,function(x){var R=i[A][1][x];return y(R||x)},k,k.exports,a,i,u,p)}return u[A].exports}for(var _=typeof Se=="function"&&Se,M=0;M<p.length;M++)y(p[M]);return y}({1:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){var v=a("crypto");function P(f,h){h=b(f,h);var n;return(n=h.algorithm!=="passthrough"?v.createHash(h.algorithm):new T).write===void 0&&(n.write=n.update,n.end=n.update),S(h,n).dispatch(f),n.update||n.end(""),n.digest?n.digest(h.encoding==="buffer"?void 0:h.encoding):(f=n.read(),h.encoding!=="buffer"?f.toString(h.encoding):f)}(u=i.exports=P).sha1=function(f){return P(f)},u.keys=function(f){return P(f,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},u.MD5=function(f){return P(f,{algorithm:"md5",encoding:"hex"})},u.keysMD5=function(f){return P(f,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var d=v.getHashes?v.getHashes().slice():["sha1","md5"],w=(d.push("passthrough"),["buffer","hex","binary","base64"]);function b(f,h){var n={};if(n.algorithm=(h=h||{}).algorithm||"sha1",n.encoding=h.encoding||"hex",n.excludeValues=!!h.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=h.ignoreUnknown===!0,n.respectType=h.respectType!==!1,n.respectFunctionNames=h.respectFunctionNames!==!1,n.respectFunctionProperties=h.respectFunctionProperties!==!1,n.unorderedArrays=h.unorderedArrays===!0,n.unorderedSets=h.unorderedSets!==!1,n.unorderedObjects=h.unorderedObjects!==!1,n.replacer=h.replacer||void 0,n.excludeKeys=h.excludeKeys||void 0,f===void 0)throw new Error("Object argument required.");for(var s=0;s<d.length;++s)d[s].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=d[s]);if(d.indexOf(n.algorithm)===-1)throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+d.join(", "));if(w.indexOf(n.encoding)===-1&&n.algorithm!=="passthrough")throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+w.join(", "));return n}function E(f){if(typeof f=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(f))!=null}function S(f,h,n){n=n||[];function s(t){return h.update?h.update(t,"utf8"):h.write(t,"utf8")}return{dispatch:function(t){return this["_"+((t=f.replacer?f.replacer(t):t)===null?"null":typeof t)](t)},_object:function(t){var m,g=Object.prototype.toString.call(t),L=/\[object (.*)\]/i.exec(g);if(L=(L=L?L[1]:"unknown:["+g+"]").toLowerCase(),0<=(g=n.indexOf(t)))return this.dispatch("[CIRCULAR:"+g+"]");if(n.push(t),_!==void 0&&_.isBuffer&&_.isBuffer(t))return s("buffer:"),s(t);if(L==="object"||L==="function"||L==="asyncfunction")return g=Object.keys(t),f.unorderedObjects&&(g=g.sort()),f.respectType===!1||E(t)||g.splice(0,0,"prototype","__proto__","constructor"),f.excludeKeys&&(g=g.filter(function($){return!f.excludeKeys($)})),s("object:"+g.length+":"),m=this,g.forEach(function($){m.dispatch($),s(":"),f.excludeValues||m.dispatch(t[$]),s(",")});if(!this["_"+L]){if(f.ignoreUnknown)return s("["+L+"]");throw new Error('Unknown object type "'+L+'"')}this["_"+L](t)},_array:function(t,$){$=$!==void 0?$:f.unorderedArrays!==!1;var g=this;if(s("array:"+t.length+":"),!$||t.length<=1)return t.forEach(function(j){return g.dispatch(j)});var L=[],$=t.map(function(j){var z=new T,Y=n.slice();return S(f,z,Y).dispatch(j),L=L.concat(Y.slice(n.length)),z.read().toString()});return n=n.concat(L),$.sort(),this._array($,!1)},_date:function(t){return s("date:"+t.toJSON())},_symbol:function(t){return s("symbol:"+t.toString())},_error:function(t){return s("error:"+t.toString())},_boolean:function(t){return s("bool:"+t.toString())},_string:function(t){s("string:"+t.length+":"),s(t.toString())},_function:function(t){s("fn:"),E(t)?this.dispatch("[native]"):this.dispatch(t.toString()),f.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),f.respectFunctionProperties&&this._object(t)},_number:function(t){return s("number:"+t.toString())},_xml:function(t){return s("xml:"+t.toString())},_null:function(){return s("Null")},_undefined:function(){return s("Undefined")},_regexp:function(t){return s("regex:"+t.toString())},_uint8array:function(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray:function(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array:function(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array:function(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array:function(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array:function(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array:function(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array:function(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array:function(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer:function(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url:function(t){return s("url:"+t.toString())},_map:function(t){return s("map:"),t=Array.from(t),this._array(t,f.unorderedSets!==!1)},_set:function(t){return s("set:"),t=Array.from(t),this._array(t,f.unorderedSets!==!1)},_file:function(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob:function(){if(f.ignoreUnknown)return s("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return s("domwindow")},_bigint:function(t){return s("bigint:"+t.toString())},_process:function(){return s("process")},_timer:function(){return s("timer")},_pipe:function(){return s("pipe")},_tcp:function(){return s("tcp")},_udp:function(){return s("udp")},_tty:function(){return s("tty")},_statwatcher:function(){return s("statwatcher")},_securecontext:function(){return s("securecontext")},_connection:function(){return s("connection")},_zlib:function(){return s("zlib")},_context:function(){return s("context")},_nodescript:function(){return s("nodescript")},_httpparser:function(){return s("httpparser")},_dataview:function(){return s("dataview")},_signal:function(){return s("signal")},_fsevent:function(){return s("fsevent")},_tlswrap:function(){return s("tlswrap")}}}function T(){return{buf:"",write:function(f){this.buf+=f},end:function(f){this.buf+=f},read:function(){return this.buf}}}u.writeToStream=function(f,h,n){return n===void 0&&(n=h,h={}),S(h=b(f,h),n).dispatch(f)}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){(function(v){var P=typeof Uint8Array<"u"?Uint8Array:Array,d=43,w=47,b=48,E=97,S=65,T=45,f=95;function h(n){return n=n.charCodeAt(0),n===d||n===T?62:n===w||n===f?63:n<b?-1:n<b+10?n-b+26+26:n<S+26?n-S:n<E+26?n-E+26:void 0}v.toByteArray=function(n){var s,t;if(0<n.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var m=n.length,m=n.charAt(m-2)==="="?2:n.charAt(m-1)==="="?1:0,g=new P(3*n.length/4-m),L=0<m?n.length-4:n.length,$=0;function j(z){g[$++]=z}for(s=0;s<L;s+=4,0)j((16711680&(t=h(n.charAt(s))<<18|h(n.charAt(s+1))<<12|h(n.charAt(s+2))<<6|h(n.charAt(s+3))))>>16),j((65280&t)>>8),j(255&t);return m==2?j(255&(t=h(n.charAt(s))<<2|h(n.charAt(s+1))>>4)):m==1&&(j((t=h(n.charAt(s))<<10|h(n.charAt(s+1))<<4|h(n.charAt(s+2))>>2)>>8&255),j(255&t)),g},v.fromByteArray=function(n){var s,t,m,g,L=n.length%3,$="";function j(z){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(z)}for(s=0,m=n.length-L;s<m;s+=3)t=(n[s]<<16)+(n[s+1]<<8)+n[s+2],$+=j((g=t)>>18&63)+j(g>>12&63)+j(g>>6&63)+j(63&g);switch(L){case 1:$=($+=j((t=n[n.length-1])>>2))+j(t<<4&63)+"==";break;case 2:$=($=($+=j((t=(n[n.length-2]<<8)+n[n.length-1])>>10))+j(t>>4&63))+j(t<<2&63)+"="}return $}})(u===void 0?this.base64js={}:u)}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(a,i,u){(function(p,y,d,M,A,k,B,x,R){var v=a("base64-js"),P=a("ieee754");function d(e,r,c){if(!(this instanceof d))return new d(e,r,c);var C,I,F,V,X=typeof e;if(r==="base64"&&X=="string")for(e=(V=e).trim?V.trim():V.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if(X=="number")C=q(e);else if(X=="string")C=d.byteLength(e,r);else{if(X!="object")throw new Error("First argument needs to be a number, array or string.");C=q(e.length)}if(d._useTypedArrays?I=d._augment(new Uint8Array(C)):((I=this).length=C,I._isBuffer=!0),d._useTypedArrays&&typeof e.byteLength=="number")I._set(e);else if(K(V=e)||d.isBuffer(V)||V&&typeof V=="object"&&typeof V.length=="number")for(F=0;F<C;F++)d.isBuffer(e)?I[F]=e.readUInt8(F):I[F]=e[F];else if(X=="string")I.write(e,0,r);else if(X=="number"&&!d._useTypedArrays&&!c)for(F=0;F<C;F++)I[F]=0;return I}function w(e,r,c,C){return d._charsWritten=fe(function(I){for(var F=[],V=0;V<I.length;V++)F.push(255&I.charCodeAt(V));return F}(r),e,c,C)}function b(e,r,c,C){return d._charsWritten=fe(function(I){for(var F,V,X=[],Q=0;Q<I.length;Q++)V=I.charCodeAt(Q),F=V>>8,V=V%256,X.push(V),X.push(F);return X}(r),e,c,C)}function E(e,r,c){var C="";c=Math.min(e.length,c);for(var I=r;I<c;I++)C+=String.fromCharCode(e[I]);return C}function S(e,r,c,F){F||(D(typeof c=="boolean","missing or invalid endian"),D(r!=null,"missing offset"),D(r+1<e.length,"Trying to read beyond buffer length"));var I,F=e.length;if(!(F<=r))return c?(I=e[r],r+1<F&&(I|=e[r+1]<<8)):(I=e[r]<<8,r+1<F&&(I|=e[r+1])),I}function T(e,r,c,F){F||(D(typeof c=="boolean","missing or invalid endian"),D(r!=null,"missing offset"),D(r+3<e.length,"Trying to read beyond buffer length"));var I,F=e.length;if(!(F<=r))return c?(r+2<F&&(I=e[r+2]<<16),r+1<F&&(I|=e[r+1]<<8),I|=e[r],r+3<F&&(I+=e[r+3]<<24>>>0)):(r+1<F&&(I=e[r+1]<<16),r+2<F&&(I|=e[r+2]<<8),r+3<F&&(I|=e[r+3]),I+=e[r]<<24>>>0),I}function f(e,r,c,C){if(C||(D(typeof c=="boolean","missing or invalid endian"),D(r!=null,"missing offset"),D(r+1<e.length,"Trying to read beyond buffer length")),!(e.length<=r))return C=S(e,r,c,!0),32768&C?-1*(65535-C+1):C}function h(e,r,c,C){if(C||(D(typeof c=="boolean","missing or invalid endian"),D(r!=null,"missing offset"),D(r+3<e.length,"Trying to read beyond buffer length")),!(e.length<=r))return C=T(e,r,c,!0),2147483648&C?-1*(4294967295-C+1):C}function n(e,r,c,C){return C||(D(typeof c=="boolean","missing or invalid endian"),D(r+3<e.length,"Trying to read beyond buffer length")),P.read(e,r,c,23,4)}function s(e,r,c,C){return C||(D(typeof c=="boolean","missing or invalid endian"),D(r+7<e.length,"Trying to read beyond buffer length")),P.read(e,r,c,52,8)}function t(e,r,c,C,I){if(I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+1<e.length,"trying to write beyond buffer length"),G(r,65535)),I=e.length,!(I<=c))for(var F=0,V=Math.min(I-c,2);F<V;F++)e[c+F]=(r&255<<8*(C?F:1-F))>>>8*(C?F:1-F)}function m(e,r,c,C,I){if(I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+3<e.length,"trying to write beyond buffer length"),G(r,4294967295)),I=e.length,!(I<=c))for(var F=0,V=Math.min(I-c,4);F<V;F++)e[c+F]=r>>>8*(C?F:3-F)&255}function g(e,r,c,C,I){I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+1<e.length,"Trying to write beyond buffer length"),J(r,32767,-32768)),e.length<=c||t(e,0<=r?r:65535+r+1,c,C,I)}function L(e,r,c,C,I){I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+3<e.length,"Trying to write beyond buffer length"),J(r,2147483647,-2147483648)),e.length<=c||m(e,0<=r?r:4294967295+r+1,c,C,I)}function $(e,r,c,C,I){I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+3<e.length,"Trying to write beyond buffer length"),Ye(r,34028234663852886e22,-34028234663852886e22)),e.length<=c||P.write(e,r,c,C,23,4)}function j(e,r,c,C,I){I||(D(r!=null,"missing value"),D(typeof C=="boolean","missing or invalid endian"),D(c!=null,"missing offset"),D(c+7<e.length,"Trying to write beyond buffer length"),Ye(r,17976931348623157e292,-17976931348623157e292)),e.length<=c||P.write(e,r,c,C,52,8)}u.Buffer=d,u.SlowBuffer=d,u.INSPECT_MAX_BYTES=50,d.poolSize=8192,d._useTypedArrays=function(){try{var e=new ArrayBuffer(0),r=new Uint8Array(e);return r.foo=function(){return 42},r.foo()===42&&typeof r.subarray=="function"}catch{return!1}}(),d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.isBuffer=function(e){return!(e==null||!e._isBuffer)},d.byteLength=function(e,r){var c;switch(e+="",r||"utf8"){case"hex":c=e.length/2;break;case"utf8":case"utf-8":c=oe(e).length;break;case"ascii":case"binary":case"raw":c=e.length;break;case"base64":c=ue(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":c=2*e.length;break;default:throw new Error("Unknown encoding")}return c},d.concat=function(e,r){if(D(K(e),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),e.length===0)return new d(0);if(e.length===1)return e[0];if(typeof r!="number")for(I=r=0;I<e.length;I++)r+=e[I].length;for(var c=new d(r),C=0,I=0;I<e.length;I++){var F=e[I];F.copy(c,C),C+=F.length}return c},d.prototype.write=function(e,r,c,C){isFinite(r)?isFinite(c)||(C=c,c=void 0):(Q=C,C=r,r=c,c=Q),r=Number(r)||0;var I,F,V,X,Q=this.length-r;switch((!c||Q<(c=Number(c)))&&(c=Q),C=String(C||"utf8").toLowerCase()){case"hex":I=function(ie,re,ae,ee){ae=Number(ae)||0;var Z=ie.length-ae;(!ee||Z<(ee=Number(ee)))&&(ee=Z),D((Z=re.length)%2==0,"Invalid hex string"),Z/2<ee&&(ee=Z/2);for(var de=0;de<ee;de++){var Ke=parseInt(re.substr(2*de,2),16);D(!isNaN(Ke),"Invalid hex string"),ie[ae+de]=Ke}return d._charsWritten=2*de,de}(this,e,r,c);break;case"utf8":case"utf-8":F=this,V=r,X=c,I=d._charsWritten=fe(oe(e),F,V,X);break;case"ascii":case"binary":I=w(this,e,r,c);break;case"base64":F=this,V=r,X=c,I=d._charsWritten=fe(ue(e),F,V,X);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":I=b(this,e,r,c);break;default:throw new Error("Unknown encoding")}return I},d.prototype.toString=function(e,r,c){var C,I,F,V,X=this;if(e=String(e||"utf8").toLowerCase(),r=Number(r)||0,(c=c!==void 0?Number(c):X.length)===r)return"";switch(e){case"hex":C=function(Q,ie,re){var ae=Q.length;(!ie||ie<0)&&(ie=0),(!re||re<0||ae<re)&&(re=ae);for(var ee="",Z=ie;Z<re;Z++)ee+=W(Q[Z]);return ee}(X,r,c);break;case"utf8":case"utf-8":C=function(Q,ie,re){var ae="",ee="";re=Math.min(Q.length,re);for(var Z=ie;Z<re;Z++)Q[Z]<=127?(ae+=ye(ee)+String.fromCharCode(Q[Z]),ee=""):ee+="%"+Q[Z].toString(16);return ae+ye(ee)}(X,r,c);break;case"ascii":case"binary":C=E(X,r,c);break;case"base64":I=X,V=c,C=(F=r)===0&&V===I.length?v.fromByteArray(I):v.fromByteArray(I.slice(F,V));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":C=function(Q,ie,re){for(var ae=Q.slice(ie,re),ee="",Z=0;Z<ae.length;Z+=2)ee+=String.fromCharCode(ae[Z]+256*ae[Z+1]);return ee}(X,r,c);break;default:throw new Error("Unknown encoding")}return C},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},d.prototype.copy=function(e,r,c,C){if(r=r||0,(C=C||C===0?C:this.length)!==(c=c||0)&&e.length!==0&&this.length!==0){D(c<=C,"sourceEnd < sourceStart"),D(0<=r&&r<e.length,"targetStart out of bounds"),D(0<=c&&c<this.length,"sourceStart out of bounds"),D(0<=C&&C<=this.length,"sourceEnd out of bounds"),C>this.length&&(C=this.length);var I=(C=e.length-r<C-c?e.length-r+c:C)-c;if(I<100||!d._useTypedArrays)for(var F=0;F<I;F++)e[F+r]=this[F+c];else e._set(this.subarray(c,c+I),r)}},d.prototype.slice=function(e,r){var c=this.length;if(e=Y(e,c,0),r=Y(r,c,c),d._useTypedArrays)return d._augment(this.subarray(e,r));for(var C=r-e,I=new d(C,void 0,!0),F=0;F<C;F++)I[F]=this[F+e];return I},d.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},d.prototype.set=function(e,r){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,r)},d.prototype.readUInt8=function(e,r){if(r||(D(e!=null,"missing offset"),D(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},d.prototype.readUInt16LE=function(e,r){return S(this,e,!0,r)},d.prototype.readUInt16BE=function(e,r){return S(this,e,!1,r)},d.prototype.readUInt32LE=function(e,r){return T(this,e,!0,r)},d.prototype.readUInt32BE=function(e,r){return T(this,e,!1,r)},d.prototype.readInt8=function(e,r){if(r||(D(e!=null,"missing offset"),D(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,r){return f(this,e,!0,r)},d.prototype.readInt16BE=function(e,r){return f(this,e,!1,r)},d.prototype.readInt32LE=function(e,r){return h(this,e,!0,r)},d.prototype.readInt32BE=function(e,r){return h(this,e,!1,r)},d.prototype.readFloatLE=function(e,r){return n(this,e,!0,r)},d.prototype.readFloatBE=function(e,r){return n(this,e,!1,r)},d.prototype.readDoubleLE=function(e,r){return s(this,e,!0,r)},d.prototype.readDoubleBE=function(e,r){return s(this,e,!1,r)},d.prototype.writeUInt8=function(e,r,c){c||(D(e!=null,"missing value"),D(r!=null,"missing offset"),D(r<this.length,"trying to write beyond buffer length"),G(e,255)),r>=this.length||(this[r]=e)},d.prototype.writeUInt16LE=function(e,r,c){t(this,e,r,!0,c)},d.prototype.writeUInt16BE=function(e,r,c){t(this,e,r,!1,c)},d.prototype.writeUInt32LE=function(e,r,c){m(this,e,r,!0,c)},d.prototype.writeUInt32BE=function(e,r,c){m(this,e,r,!1,c)},d.prototype.writeInt8=function(e,r,c){c||(D(e!=null,"missing value"),D(r!=null,"missing offset"),D(r<this.length,"Trying to write beyond buffer length"),J(e,127,-128)),r>=this.length||(0<=e?this.writeUInt8(e,r,c):this.writeUInt8(255+e+1,r,c))},d.prototype.writeInt16LE=function(e,r,c){g(this,e,r,!0,c)},d.prototype.writeInt16BE=function(e,r,c){g(this,e,r,!1,c)},d.prototype.writeInt32LE=function(e,r,c){L(this,e,r,!0,c)},d.prototype.writeInt32BE=function(e,r,c){L(this,e,r,!1,c)},d.prototype.writeFloatLE=function(e,r,c){$(this,e,r,!0,c)},d.prototype.writeFloatBE=function(e,r,c){$(this,e,r,!1,c)},d.prototype.writeDoubleLE=function(e,r,c){j(this,e,r,!0,c)},d.prototype.writeDoubleBE=function(e,r,c){j(this,e,r,!1,c)},d.prototype.fill=function(e,r,c){if(r=r||0,c=c||this.length,D(typeof(e=typeof(e=e||0)=="string"?e.charCodeAt(0):e)=="number"&&!isNaN(e),"value is not a number"),D(r<=c,"end < start"),c!==r&&this.length!==0){D(0<=r&&r<this.length,"start out of bounds"),D(0<=c&&c<=this.length,"end out of bounds");for(var C=r;C<c;C++)this[C]=e}},d.prototype.inspect=function(){for(var e=[],r=this.length,c=0;c<r;c++)if(e[c]=W(this[c]),c===u.INSPECT_MAX_BYTES){e[c+1]="...";break}return"<Buffer "+e.join(" ")+">"},d.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(d._useTypedArrays)return new d(this).buffer;for(var e=new Uint8Array(this.length),r=0,c=e.length;r<c;r+=1)e[r]=this[r];return e.buffer};var z=d.prototype;function Y(e,r,c){return typeof e!="number"?c:r<=(e=~~e)?r:0<=e||0<=(e+=r)?e:0}function q(e){return(e=~~Math.ceil(+e))<0?0:e}function K(e){return(Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"})(e)}function W(e){return e<16?"0"+e.toString(16):e.toString(16)}function oe(e){for(var r=[],c=0;c<e.length;c++){var C=e.charCodeAt(c);if(C<=127)r.push(e.charCodeAt(c));else for(var I=c,F=(55296<=C&&C<=57343&&c++,encodeURIComponent(e.slice(I,c+1)).substr(1).split("%")),V=0;V<F.length;V++)r.push(parseInt(F[V],16))}return r}function ue(e){return v.toByteArray(e)}function fe(e,r,c,C){for(var I=0;I<C&&!(I+c>=r.length||I>=e.length);I++)r[I+c]=e[I];return I}function ye(e){try{return decodeURIComponent(e)}catch{return"�"}}function G(e,r){D(typeof e=="number","cannot write a non-number as a number"),D(0<=e,"specified a negative value for writing an unsigned value"),D(e<=r,"value is larger than maximum value for type"),D(Math.floor(e)===e,"value has a fractional component")}function J(e,r,c){D(typeof e=="number","cannot write a non-number as a number"),D(e<=r,"value larger than maximum allowed value"),D(c<=e,"value smaller than minimum allowed value"),D(Math.floor(e)===e,"value has a fractional component")}function Ye(e,r,c){D(typeof e=="number","cannot write a non-number as a number"),D(e<=r,"value larger than maximum allowed value"),D(c<=e,"value smaller than minimum allowed value")}function D(e,r){if(!e)throw new Error(r||"Failed assertion")}d._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=z.get,e.set=z.set,e.write=z.write,e.toString=z.toString,e.toLocaleString=z.toString,e.toJSON=z.toJSON,e.copy=z.copy,e.slice=z.slice,e.readUInt8=z.readUInt8,e.readUInt16LE=z.readUInt16LE,e.readUInt16BE=z.readUInt16BE,e.readUInt32LE=z.readUInt32LE,e.readUInt32BE=z.readUInt32BE,e.readInt8=z.readInt8,e.readInt16LE=z.readInt16LE,e.readInt16BE=z.readInt16BE,e.readInt32LE=z.readInt32LE,e.readInt32BE=z.readInt32BE,e.readFloatLE=z.readFloatLE,e.readFloatBE=z.readFloatBE,e.readDoubleLE=z.readDoubleLE,e.readDoubleBE=z.readDoubleBE,e.writeUInt8=z.writeUInt8,e.writeUInt16LE=z.writeUInt16LE,e.writeUInt16BE=z.writeUInt16BE,e.writeUInt32LE=z.writeUInt32LE,e.writeUInt32BE=z.writeUInt32BE,e.writeInt8=z.writeInt8,e.writeInt16LE=z.writeInt16LE,e.writeInt16BE=z.writeInt16BE,e.writeInt32LE=z.writeInt32LE,e.writeInt32BE=z.writeInt32BE,e.writeFloatLE=z.writeFloatLE,e.writeFloatBE=z.writeFloatBE,e.writeDoubleLE=z.writeDoubleLE,e.writeDoubleBE=z.writeDoubleBE,e.fill=z.fill,e.inspect=z.inspect,e.toArrayBuffer=z.toArrayBuffer,e}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(a,i,u){(function(p,y,v,M,A,k,B,x,R){var v=a("buffer").Buffer,P=4,d=new v(P);d.fill(0),i.exports={hash:function(w,b,E,S){for(var T=b(function(t,m){t.length%P!=0&&(g=t.length+(P-t.length%P),t=v.concat([t,d],g));for(var g,L=[],$=m?t.readInt32BE:t.readInt32LE,j=0;j<t.length;j+=P)L.push($.call(t,j));return L}(w=v.isBuffer(w)?w:new v(w),S),8*w.length),b=S,f=new v(E),h=b?f.writeInt32BE:f.writeInt32LE,n=0;n<T.length;n++)h.call(f,T[n],4*n,!0);return f}}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(a,i,u){(function(p,y,v,M,A,k,B,x,R){var v=a("buffer").Buffer,P=a("./sha"),d=a("./sha256"),w=a("./rng"),b={sha1:P,sha256:d,md5:a("./md5")},E=64,S=new v(E);function T(t,m){var g=b[t=t||"sha1"],L=[];return g||f("algorithm:",t,"is not yet supported"),{update:function($){return v.isBuffer($)||($=new v($)),L.push($),$.length,this},digest:function($){var j=v.concat(L),j=m?function(z,Y,q){v.isBuffer(Y)||(Y=new v(Y)),v.isBuffer(q)||(q=new v(q)),Y.length>E?Y=z(Y):Y.length<E&&(Y=v.concat([Y,S],E));for(var K=new v(E),W=new v(E),oe=0;oe<E;oe++)K[oe]=54^Y[oe],W[oe]=92^Y[oe];return q=z(v.concat([K,q])),z(v.concat([W,q]))}(g,m,j):g(j);return L=null,$?j.toString($):j}}}function f(){var t=[].slice.call(arguments).join(" ");throw new Error([t,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}S.fill(0),u.createHash=function(t){return T(t)},u.createHmac=T,u.randomBytes=function(t,m){if(!m||!m.call)return new v(w(t));try{m.call(this,void 0,new v(w(t)))}catch(g){m(g)}};var h,n=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],s=function(t){u[t]=function(){f("sorry,",t,"is not implemented yet")}};for(h in n)s(n[h])}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){var v=a("./helpers");function P(f,h){f[h>>5]|=128<<h%32,f[14+(h+64>>>9<<4)]=h;for(var n=1732584193,s=-271733879,t=-1732584194,m=271733878,g=0;g<f.length;g+=16){var L=n,$=s,j=t,z=m,n=w(n,s,t,m,f[g+0],7,-680876936),m=w(m,n,s,t,f[g+1],12,-389564586),t=w(t,m,n,s,f[g+2],17,606105819),s=w(s,t,m,n,f[g+3],22,-1044525330);n=w(n,s,t,m,f[g+4],7,-176418897),m=w(m,n,s,t,f[g+5],12,1200080426),t=w(t,m,n,s,f[g+6],17,-1473231341),s=w(s,t,m,n,f[g+7],22,-45705983),n=w(n,s,t,m,f[g+8],7,1770035416),m=w(m,n,s,t,f[g+9],12,-1958414417),t=w(t,m,n,s,f[g+10],17,-42063),s=w(s,t,m,n,f[g+11],22,-1990404162),n=w(n,s,t,m,f[g+12],7,1804603682),m=w(m,n,s,t,f[g+13],12,-40341101),t=w(t,m,n,s,f[g+14],17,-1502002290),n=b(n,s=w(s,t,m,n,f[g+15],22,1236535329),t,m,f[g+1],5,-165796510),m=b(m,n,s,t,f[g+6],9,-1069501632),t=b(t,m,n,s,f[g+11],14,643717713),s=b(s,t,m,n,f[g+0],20,-373897302),n=b(n,s,t,m,f[g+5],5,-701558691),m=b(m,n,s,t,f[g+10],9,38016083),t=b(t,m,n,s,f[g+15],14,-660478335),s=b(s,t,m,n,f[g+4],20,-405537848),n=b(n,s,t,m,f[g+9],5,568446438),m=b(m,n,s,t,f[g+14],9,-1019803690),t=b(t,m,n,s,f[g+3],14,-187363961),s=b(s,t,m,n,f[g+8],20,1163531501),n=b(n,s,t,m,f[g+13],5,-1444681467),m=b(m,n,s,t,f[g+2],9,-51403784),t=b(t,m,n,s,f[g+7],14,1735328473),n=E(n,s=b(s,t,m,n,f[g+12],20,-1926607734),t,m,f[g+5],4,-378558),m=E(m,n,s,t,f[g+8],11,-2022574463),t=E(t,m,n,s,f[g+11],16,1839030562),s=E(s,t,m,n,f[g+14],23,-35309556),n=E(n,s,t,m,f[g+1],4,-1530992060),m=E(m,n,s,t,f[g+4],11,1272893353),t=E(t,m,n,s,f[g+7],16,-155497632),s=E(s,t,m,n,f[g+10],23,-1094730640),n=E(n,s,t,m,f[g+13],4,681279174),m=E(m,n,s,t,f[g+0],11,-358537222),t=E(t,m,n,s,f[g+3],16,-722521979),s=E(s,t,m,n,f[g+6],23,76029189),n=E(n,s,t,m,f[g+9],4,-640364487),m=E(m,n,s,t,f[g+12],11,-421815835),t=E(t,m,n,s,f[g+15],16,530742520),n=S(n,s=E(s,t,m,n,f[g+2],23,-995338651),t,m,f[g+0],6,-198630844),m=S(m,n,s,t,f[g+7],10,1126891415),t=S(t,m,n,s,f[g+14],15,-1416354905),s=S(s,t,m,n,f[g+5],21,-57434055),n=S(n,s,t,m,f[g+12],6,1700485571),m=S(m,n,s,t,f[g+3],10,-1894986606),t=S(t,m,n,s,f[g+10],15,-1051523),s=S(s,t,m,n,f[g+1],21,-2054922799),n=S(n,s,t,m,f[g+8],6,1873313359),m=S(m,n,s,t,f[g+15],10,-30611744),t=S(t,m,n,s,f[g+6],15,-1560198380),s=S(s,t,m,n,f[g+13],21,1309151649),n=S(n,s,t,m,f[g+4],6,-145523070),m=S(m,n,s,t,f[g+11],10,-1120210379),t=S(t,m,n,s,f[g+2],15,718787259),s=S(s,t,m,n,f[g+9],21,-343485551),n=T(n,L),s=T(s,$),t=T(t,j),m=T(m,z)}return Array(n,s,t,m)}function d(f,h,n,s,t,m){return T((h=T(T(h,f),T(s,m)))<<t|h>>>32-t,n)}function w(f,h,n,s,t,m,g){return d(h&n|~h&s,f,h,t,m,g)}function b(f,h,n,s,t,m,g){return d(h&s|n&~s,f,h,t,m,g)}function E(f,h,n,s,t,m,g){return d(h^n^s,f,h,t,m,g)}function S(f,h,n,s,t,m,g){return d(n^(h|~s),f,h,t,m,g)}function T(f,h){var n=(65535&f)+(65535&h);return(f>>16)+(h>>16)+(n>>16)<<16|65535&n}i.exports=function(f){return v.hash(f,P,16)}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){i.exports=function(v){for(var P,d=new Array(v),w=0;w<v;w++)!(3&w)&&(P=4294967296*Math.random()),d[w]=P>>>((3&w)<<3)&255;return d}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){var v=a("./helpers");function P(b,E){b[E>>5]|=128<<24-E%32,b[15+(E+64>>9<<4)]=E;for(var S,T,f,h=Array(80),n=1732584193,s=-271733879,t=-1732584194,m=271733878,g=-1009589776,L=0;L<b.length;L+=16){for(var $=n,j=s,z=t,Y=m,q=g,K=0;K<80;K++){h[K]=K<16?b[L+K]:w(h[K-3]^h[K-8]^h[K-14]^h[K-16],1);var W=d(d(w(n,5),(W=s,T=t,f=m,(S=K)<20?W&T|~W&f:!(S<40)&&S<60?W&T|W&f|T&f:W^T^f)),d(d(g,h[K]),(S=K)<20?1518500249:S<40?1859775393:S<60?-1894007588:-899497514)),g=m,m=t,t=w(s,30),s=n,n=W}n=d(n,$),s=d(s,j),t=d(t,z),m=d(m,Y),g=d(g,q)}return Array(n,s,t,m,g)}function d(b,E){var S=(65535&b)+(65535&E);return(b>>16)+(E>>16)+(S>>16)<<16|65535&S}function w(b,E){return b<<E|b>>>32-E}i.exports=function(b){return v.hash(b,P,20,!0)}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){function v(E,S){var T=(65535&E)+(65535&S);return(E>>16)+(S>>16)+(T>>16)<<16|65535&T}function P(E,S){var T,f=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),h=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);E[S>>5]|=128<<24-S%32,E[15+(S+64>>9<<4)]=S;for(var s,t,m=0;m<E.length;m+=16){for(var g=h[0],L=h[1],$=h[2],j=h[3],z=h[4],Y=h[5],q=h[6],K=h[7],W=0;W<64;W++)n[W]=W<16?E[W+m]:v(v(v((t=n[W-2],w(t,17)^w(t,19)^b(t,10)),n[W-7]),(t=n[W-15],w(t,7)^w(t,18)^b(t,3))),n[W-16]),T=v(v(v(v(K,w(t=z,6)^w(t,11)^w(t,25)),z&Y^~z&q),f[W]),n[W]),s=v(w(s=g,2)^w(s,13)^w(s,22),g&L^g&$^L&$),K=q,q=Y,Y=z,z=v(j,T),j=$,$=L,L=g,g=v(T,s);h[0]=v(g,h[0]),h[1]=v(L,h[1]),h[2]=v($,h[2]),h[3]=v(j,h[3]),h[4]=v(z,h[4]),h[5]=v(Y,h[5]),h[6]=v(q,h[6]),h[7]=v(K,h[7])}return h}var d=a("./helpers"),w=function(E,S){return E>>>S|E<<32-S},b=function(E,S){return E>>>S};i.exports=function(E){return d.hash(E,P,32,!0)}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){u.read=function(v,P,d,w,m){var E,S,T=8*m-w-1,f=(1<<T)-1,h=f>>1,n=-7,s=d?m-1:0,t=d?-1:1,m=v[P+s];for(s+=t,E=m&(1<<-n)-1,m>>=-n,n+=T;0<n;E=256*E+v[P+s],s+=t,n-=8);for(S=E&(1<<-n)-1,E>>=-n,n+=w;0<n;S=256*S+v[P+s],s+=t,n-=8);if(E===0)E=1-h;else{if(E===f)return S?NaN:1/0*(m?-1:1);S+=Math.pow(2,w),E-=h}return(m?-1:1)*S*Math.pow(2,E-w)},u.write=function(v,P,d,w,b,g){var S,T,f=8*g-b-1,h=(1<<f)-1,n=h>>1,s=b===23?Math.pow(2,-24)-Math.pow(2,-77):0,t=w?0:g-1,m=w?1:-1,g=P<0||P===0&&1/P<0?1:0;for(P=Math.abs(P),isNaN(P)||P===1/0?(T=isNaN(P)?1:0,S=h):(S=Math.floor(Math.log(P)/Math.LN2),P*(w=Math.pow(2,-S))<1&&(S--,w*=2),2<=(P+=1<=S+n?s/w:s*Math.pow(2,1-n))*w&&(S++,w/=2),h<=S+n?(T=0,S=h):1<=S+n?(T=(P*w-1)*Math.pow(2,b),S+=n):(T=P*Math.pow(2,n-1)*Math.pow(2,b),S=0));8<=b;v[d+t]=255&T,t+=m,T/=256,b-=8);for(S=S<<b|T,f+=b;0<f;v[d+t]=255&S,t+=m,S/=256,f-=8);v[d+t-m]|=128*g}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(a,i,u){(function(p,y,_,M,A,k,B,x,R){var v,P,d;function w(){}(p=i.exports={}).nextTick=(P=typeof window<"u"&&window.setImmediate,d=typeof window<"u"&&window.postMessage&&window.addEventListener,P?function(b){return window.setImmediate(b)}:d?(v=[],window.addEventListener("message",function(b){var E=b.source;E!==window&&E!==null||b.data!=="process-tick"||(b.stopPropagation(),0<v.length&&v.shift()())},!0),function(b){v.push(b),window.postMessage("process-tick","*")}):function(b){setTimeout(b,0)}),p.title="browser",p.browser=!0,p.env={},p.argv=[],p.on=w,p.addListener=w,p.once=w,p.off=w,p.removeListener=w,p.removeAllListeners=w,p.emit=w,p.binding=function(b){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(b){throw new Error("process.chdir is not supported")}}).call(this,a("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},a("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Ct);var Kr=Ct.exports;const qr=Xt(Kr),He=await O("three");function Xr(l,o){if(typeof l!="object"||l===null)return l;var a=l[Symbol.toPrimitive];if(a!==void 0){var i=a.call(l,o);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(l)}function kt(l){var o=Xr(l,"string");return typeof o=="symbol"?o:String(o)}function H(l,o,a){return o=kt(o),o in l?Object.defineProperty(l,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[o]=a,l}function pt(l,o){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);o&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(l,u).enumerable})),a.push.apply(a,i)}return a}function he(l){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?pt(Object(a),!0).forEach(function(i){H(l,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):pt(Object(a)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(a,i))})}return l}function Zr(l,o){if(l==null)return{};var a={},i=Object.keys(l),u,p;for(p=0;p<i.length;p++)u=i[p],!(o.indexOf(u)>=0)&&(a[u]=l[u]);return a}function Jr(l,o){if(l==null)return{};var a=Zr(l,o),i,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(u=0;u<p.length;u++)i=p[u],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(l,i)&&(a[i]=l[i])}return a}function Qr(l){if(Array.isArray(l))return l}function ea(l,o){var a=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(a!=null){var i,u,p,y,_=[],M=!0,A=!1;try{if(p=(a=a.call(l)).next,o!==0)for(;!(M=(i=p.call(a)).done)&&(_.push(i.value),_.length!==o);M=!0);}catch(k){A=!0,u=k}finally{try{if(!M&&a.return!=null&&(y=a.return(),Object(y)!==y))return}finally{if(A)throw u}}return _}}function ht(l,o){(o==null||o>l.length)&&(o=l.length);for(var a=0,i=new Array(o);a<o;a++)i[a]=l[a];return i}function ta(l,o){if(l){if(typeof l=="string")return ht(l,o);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ht(l,o)}}function na(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(l,o){return Qr(l)||ea(l,o)||ta(l,o)||na()}function ra(l,o){if(!(l instanceof o))throw new TypeError("Cannot call a class as a function")}function aa(l,o){for(var a=0;a<o.length;a++){var i=o[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,kt(i.key),i)}}function oa(l,o,a){return o&&aa(l.prototype,o),Object.defineProperty(l,"prototype",{writable:!1}),l}function At(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function Ge(l,o){return Ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,u){return i.__proto__=u,i},Ge(l,o)}function ia(l,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(o&&o.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),Object.defineProperty(l,"prototype",{writable:!1}),o&&Ge(l,o)}function Ae(l){return Ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},Ae(l)}function sa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function la(l,o){if(o&&(typeof o=="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return At(l)}function ca(l){var o=sa();return function(){var i=Ae(l),u;if(o){var p=Ae(this).constructor;u=Reflect.construct(i,arguments,p)}else u=i.apply(this,arguments);return la(this,u)}}var N={diffuse:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",position:"csm_Position",positionRaw:"csm_PositionRaw"},te,ua=(te={},H(te,"".concat(N.position),"*"),H(te,"".concat(N.positionRaw),"*"),H(te,"".concat(N.normal),"*"),H(te,"".concat(N.pointSize),["PointsMaterial"]),H(te,"".concat(N.diffuse),"*"),H(te,"".concat(N.fragColor),"*"),H(te,"".concat(N.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),H(te,"".concat(N.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),H(te,"".concat(N.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),H(te,"".concat(N.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),H(te,"".concat(N.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),H(te,"".concat(N.depthAlpha),["MeshDepthMaterial"]),H(te,"".concat(N.clearcoat),["MeshPhysicalMaterial"]),H(te,"".concat(N.clearcoatRoughness),["MeshPhysicalMaterial"]),H(te,"".concat(N.clearcoatNormal),["MeshPhysicalMaterial"]),te),fa={"#include <lights_physical_fragment>":He.ShaderChunk.lights_physical_fragment},ne,ve,da=(ne={},H(ne,"".concat(N.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(N.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),H(ne,"".concat(N.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(N.position,`;
  `)}),H(ne,"".concat(N.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(N.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),H(ne,"".concat(N.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(N.pointSize,`;
    `)}),H(ne,"".concat(N.diffuse),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(N.diffuse,`;
  `)}),H(ne,"".concat(N.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(N.fragColor,`;
  `)}),H(ne,"".concat(N.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(N.emissive,`;
    `)}),H(ne,"".concat(N.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(N.roughness,`;
    `)}),H(ne,"".concat(N.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(N.metalness,`;
    `)}),H(ne,"".concat(N.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(N.ao,`;
    `)}),H(ne,"".concat(N.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(N.bump," - (dot(").concat(N.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),H(ne,"".concat(N.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(N.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(N.depthAlpha,`;
    `)}),H(ne,"".concat(N.clearcoat),{"material.clearcoat = clearcoat;":"material.clearcoat = ".concat(N.clearcoat,";")}),H(ne,"".concat(N.clearcoatRoughness),{"material.clearcoatRoughness = clearcoatRoughness;":"material.clearcoatRoughness = ".concat(N.clearcoatRoughness,";")}),H(ne,"".concat(N.clearcoatNormal),{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `}),ne),ma=(ve={},H(ve,"".concat(N.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(N.position,`, 1.0 );
  `)}),H(ve,"".concat(N.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(N.position,`;
  `)}),H(ve,"".concat(N.diffuse),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(N.diffuse,`;
  `)}),H(ve,"".concat(N.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(N.fragColor,`;
  `)}),ve),pa={clearcoat:[N.clearcoat,N.clearcoatNormal,N.clearcoatRoughness]},ha=`
    
#ifdef IS_VERTEX
    vec3 csm_Position;
    vec4 csm_PositionRaw;
    vec3 csm_Normal;

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize;
    #endif
#else
    vec4 csm_DiffuseColor;
    vec4 csm_FragColor;

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive;
        float csm_Roughness;
        float csm_Metalness;
        
        #if defined IS_MESHPHYSICALMATERIAL
            float csm_Clearcoat;
            float csm_ClearcoatRoughness;
            vec3 csm_ClearcoatNormal;
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump;
    #endif

    float csm_DepthAlpha;
#endif
`,va=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        csm_Position = vec3(0.0);
        csm_PositionRaw = vec4(0.0);
        csm_Normal = vec3(0.0);
    #else
        csm_Position = position;
        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            csm_DiffuseColor = vec4(diffuse, opacity);
            csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        csm_Emissive = emissive;
        csm_Roughness = roughness;
        csm_Metalness = metalness;

        #if defined IS_MESHPHYSICALMATERIAL
            #ifdef USE_CLEARCOAT
                csm_Clearcoat = clearcoat;
                csm_ClearcoatRoughness = clearcoatRoughness;
            #else
                csm_Clearcoat = 0.0;
                csm_ClearcoatRoughness = 0.0;
            #endif
        #endif
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        csm_Bump = vec3(0.0);
    #endif

    csm_DepthAlpha = 1.0;
#endif
`,ga=`
    varying mat4 csm_internal_vModelViewMatrix;
`,ya=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,_a=`
    varying mat4 csm_internal_vModelViewMatrix;
`,ba=`
    
`,wa=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],xa=function(o){return qr(o,{excludeValues:!0})},gt=function(o,a,i){return o.split(a).join(i)},Sa=function(o){return o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},yt=function(o,a){return new RegExp("\\b".concat(Sa(a),"\\b")).test(o)};function Ma(l){try{new l}catch(o){if(o.message.indexOf("is not a constructor")>=0)return!1}return!0}function Ea(l,o){Object.assign(l,o);var a=Object.getPrototypeOf(o);Object.entries(Object.getOwnPropertyDescriptors(a)).filter(function(i){var u=typeof i[1].get=="function",p=typeof i[1].set=="function",y=typeof i[1].value=="function",_=i[0]==="constructor";return(u||p||y)&&!_}).forEach(function(i){typeof l[i[0]]!="function"&&Object.defineProperty(l,i[0],i[1])})}function Pa(l){var o=l.toString().trim(),a=o.substring(o.indexOf("{")+1,o.lastIndexOf("}"));return a.trim().length===0}function _t(l){return l?l.replace(/\s/g,""):void 0}function bt(l){return l.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,"")}function Ia(l,o,a){var i=l.lastIndexOf(o);return i===-1?l:l.substring(0,i)+a+l.substring(i+o.length)}var Ca=function(l){ia(a,l);var o=ca(a);function a(i){var u,p=i.baseMaterial,y=i.fragmentShader,_=i.vertexShader,M=i.uniforms,A=i.patchMap,k=i.cacheKey,B=i.silent,x=Jr(i,wa);ra(this,a);var R;if(Ma(p)?R=new p(x):(R=p,Object.assign(R,x)),R.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");u=o.call(this),Ea(At(u),R),u.__csm={patchMap:A||{},fragmentShader:y||"",vertexShader:_||"",cacheKey:k,baseMaterial:p,instanceID:He.MathUtils.generateUUID(),type:R.type,isAlreadyExtended:!Pa(R.onBeforeCompile),cacheHash:"",silent:B},u.uniforms=he(he({},u.uniforms||{}),M||{});{var v=u.__csm,P=v.fragmentShader,d=v.vertexShader,w=u.uniforms;u.__csm.cacheHash=u._getCacheHash(),u._generateMaterial(P,d,w)}return u}return oa(a,[{key:"update",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=u.uniforms||this.uniforms,Object.assign(this.__csm,u);var p=this.__csm,y=p.fragmentShader,_=p.vertexShader,M=this.uniforms,A=this._getCacheHash();this.__csm.cacheHash=A,this._generateMaterial(y,_,M)}},{key:"clone",value:function(){var u={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},p=new this.constructor(u);return Object.assign(this,p),p}},{key:"_getCacheHash",value:function(){var u=this.__csm,p=u.fragmentShader,y=u.vertexShader,_=this.uniforms,M=[_t(p),_t(y),_].filter(function(A){return A!==void 0});return M.length>0?xa(M):this.customProgramCacheKey()}},{key:"_generateMaterial",value:function(u,p,y){var _=this;this.uniforms=y||{},this.customProgramCacheKey=function(){return _.__csm.cacheHash};var M=function(B){try{var x=_._getMaterialDefine();if(u){var R=_._patchShader(bt(u),B.fragmentShader,!0);B.fragmentShader=x+R}if(p){var v=_._patchShader(bt(p),B.vertexShader);B.vertexShader=`#define IS_VERTEX;
`+v,B.vertexShader=x+B.vertexShader}B.uniforms=he(he({},B.uniforms),_.uniforms),_.uniforms=B.uniforms}catch(P){console.error(P)}};if(this.__csm.isAlreadyExtended){var A=this.onBeforeCompile;this.onBeforeCompile=function(k,B){A(k,B),M(k)}}else this.onBeforeCompile=M;this.needsUpdate=!0}},{key:"_patchShader",value:function(u,p,y){var _=this,M=p,A=he(he({},this._getPatchMapForMaterial()),this.__csm.patchMap);Object.entries(pa).forEach(function(v){var P=vt(v,2),d=P[0],w=P[1],b=w.find(function(E){return yt(u,E)});if(b&&!_[d])throw new Error('CSM: Property "'.concat(d,'" is required to use output "').concat(b,'". Shader cannot compile.'))}),Object.entries(fa).forEach(function(v){var P=vt(v,2),d=P[0],w=P[1];M=gt(M,d,w)}),Object.keys(A).forEach(function(v){Object.keys(A[v]).forEach(function(P){var d=ua[v],w=_.__csm.type;if(v==="*"||yt(u,v))if(!d||Array.isArray(d)&&d.includes(w)||d==="*")M=gt(M,P,A[v][P]);else throw new Error("CSM: ".concat(v," is not available in ").concat(w,". Shader cannot compile."))})});var k="csm_main_"+this.__csm.instanceID.replace(/-/g,"_"),B=u.replace(/void\s+main\s*\(\s*\)/g,"void ".concat(k,"()")),x=u.includes("void main()"),R=M.includes("// #_CSM_#");return x&&(R&&this.__csm.isAlreadyExtended?(M=M.replace("void main() {",`
            `.concat(B,`
            
            void main() {
          `)),M=Ia(M,"// #_CSM_#",`
            `.concat(k,`();
            // #_CSM_#
          `))):M=M.replace("void main() {",`
            #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
              `.concat(y?_a:ga,`
              #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
            #endif
    
            `).concat(ha,`
    
            `).concat(B,`
            
            void main() {
              #ifndef CSM_IS_DEFAULTS_DEFINED
                `).concat(va,`
                #define CSM_IS_DEFAULTS_DEFINED 1
              #endif
              
              #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
                `).concat(y?ba:ya,`
                #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
              #endif
  
              `).concat(k,`();
              // #_CSM_#
          `))),M}},{key:"_getMaterialDefine",value:function(){var u=this.__csm.type;return u?"#define IS_".concat(u.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"_getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return ma;default:return da}}}]),a}(He.Material),ka=`vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float pnoise(vec3 P) {
  vec3 Pi0 = floor(P);        
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}`,Aa=`const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
const vec2 mys = vec2(1e4, 1e6);

vec2 rhash(vec2 uv) {
  uv *= myt;
  uv *= mys;
  return fract(fract(uv / mys) * uv);
}

vec3 hash(vec3 p) {
  return fract(
      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),
               dot(p, vec3(113.0, 1.0, 57.0)))) *
      43758.5453);
}

float mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 perm(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

float floatHash(vec3 p) {
  vec3 a = floor(p);
  vec3 d = p - a;
  d = d * d * (3.0 - 2.0 * d);

  vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
  vec4 k1 = perm(b.xyxy);
  vec4 k2 = perm(k1.xyxy + b.zzww);

  vec4 c = k2 + a.zzzz;
  vec4 k3 = perm(c);
  vec4 k4 = perm(c + 1.0);

  vec4 o1 = fract(k3 * (1.0 / 41.0));
  vec4 o2 = fract(k4 * (1.0 / 41.0));

  vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
  vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

  return o4.y * d.y + o4.x * (1.0 - d.y);
}

vec2 voronoi3d(vec3 pos) {
  vec3 baseCell = floor(pos);

  float minDistToCell = 10.0;
  vec3 closestCell;
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      for (int z = -1; z <= 1; z++) {
        vec3 cell = baseCell + vec3(float(x), float(y), float(z));
        vec3 cellPosition = cell + hash(cell);
        vec3 toCell = cellPosition - pos;
        float distToCell = length(toCell);
        if (distToCell < minDistToCell) {
          minDistToCell = distToCell;
          closestCell = cell;
        }
      }
    }
  }

  float random = floatHash(closestCell);
  return vec2(minDistToCell, random);
}`;const{defineComponent:Ta}=await O("vue"),{unref:Ba,openBlock:Ra,createElementBlock:Da}=await O("vue"),Fa=["object"],za=await O("three"),{watchEffect:Oa}=await O("vue"),ci=Ta({__name:"index",props:{color:{default:"#ff00fc"},metalness:{default:1},roughness:{default:1},clearcoat:{default:1},clearcoatRoughness:{default:0}},setup(l){const o=l,a={baseMaterial:za.MeshPhysicalMaterial,metalness:o.metalness,roughness:o.roughness,clearcoat:o.clearcoat,clearcoatRoughness:o.clearcoatRoughness,color:o.color,vertexShader:`
			varying vec3 csm_vPosition;
			varying vec3 csm_vWorldNormal;
			varying vec3 csm_vWorldViewDirection;
			varying vec4 csm_vGlPosition;

			void main() {
					csm_vWorldNormal = normalize((modelMatrix * vec4(normal.xyz, 0.0)).xyz);
					csm_vWorldViewDirection = normalize(cameraPosition - (modelMatrix * vec4(position.xyz, 0.0)).xyz) ;

					csm_vGlPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					csm_vPosition = position;
			}`,fragmentShader:`
			${Aa}
      ${ka}
			varying vec3 csm_vPosition;
			varying vec3 csm_vWorldNormal;
			varying vec3 csm_vWorldViewDirection;
			varying vec4 csm_vGlPosition;

      uniform vec3 uFleckColor;

      const float fresnel_Power = 1.0;

      float fresnel() {
          return pow(1.0 - dot(csm_vWorldNormal, csm_vWorldViewDirection), fresnel_Power);
      }

      float mapLinear(float x, float a1, float a2, float b1, float b2) {
          return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
      }

      void main() {
      // Fresnel
      float fresnelFactor = fresnel();

      // Fleck
      float fleckFactor = voronoi3d(csm_vPosition * 2000.0).y;
      float fleckFactorY = voronoi3d(csm_vPosition * 2000.0 + 100.0).y;
      float fleckFactorZ = voronoi3d(csm_vPosition * 2000.0 + 200.0).y;

      // Distance from camera
      float normalizedDist = csm_vGlPosition.z / csm_vGlPosition.w;
      normalizedDist = smoothstep(0.6, 1.0, normalizedDist);
      // normalizedDist *= fresnelFactor;

      // Fade out flecks as we get further away
      float nonDistanceFleckFactor = fleckFactor;
      fleckFactor *= 1.0 - normalizedDist;

      // Diffuse
      float diffuseFactor = csm_DiffuseColor.g;
      float roughnessFactor2 = fleckFactor;

      roughnessFactor2 = mapLinear(roughnessFactor2, 0.0, 1.0, 0.4, 0.8);
      csm_Roughness = roughnessFactor2;

      // Color
      float fresnelColorFactor = smoothstep(0.0, 1.0, clamp(fresnelFactor, 0.0, 0.4));
      vec3 fresnelColor = mix(csm_DiffuseColor.rgb, uFleckColor, fresnelColorFactor);
      csm_DiffuseColor = vec4(fresnelColor, 1.0);

      float fleckColorFactor = smoothstep(0.99, 0.992, fleckFactor);

      // Orange peel
      float orangePeelFactorX = pnoise(csm_vPosition * 1000.0);
      float orangePeelFactorY = pnoise(csm_vPosition * 1000.0 + 100.0);
      float orangePeelFactorZ = pnoise(csm_vPosition * 1000.0 + 200.0);
      vec3 orangePeelFactor = vec3(orangePeelFactorX, orangePeelFactorY, orangePeelFactorZ);

      csm_ClearcoatNormal = orangePeelFactor * 0.01 * (1.0 - normalizedDist);
      // csm_Clearcoat = 10.0;
      // csm_ClearcoatRoughness = 0.0;

      csm_Bump = vec3(fleckFactor, fleckFactorY, fleckFactorZ) * 1.0 * (1.0 - normalizedDist);
      }
		`},i=new Ca(a);return Oa(()=>{i.color.setStyle(o.color),i.metalness=o.metalness,i.roughness=o.roughness,i.clearcoat=o.clearcoat,i.clearcoatRoughness=o.clearcoatRoughness}),(u,p)=>(Ra(),Da("primitive",{object:Ba(i)},null,8,Fa))}}),{watch:Na}=await O("vue");async function ui(l){const o=l.split("/").pop();qe.getResource("TextureLoader",l,o);const a=qe.getReactiveItem(o);return new Promise((i,u)=>{const p=a();if(p){i(p);return}const y=Na(()=>a(),_=>{_?(y(),i(_)):u(new Error("useTexture 加载失败，未得到模型"))})})}function La(l){const o={nodes:{},materials:{}};return l&&l.traverse(a=>{a.name&&(o.nodes[a.name]=a),a.material&&!o.materials[a.material.name]&&(o.materials[a.material.name]=a.material)}),o}async function wt(l,o,a,i,u){const p=new l;return u&&u(p),a&&a(p),await new Promise((y,_)=>{p.load(o,M=>{const A=M;A.scene&&Object.assign(A,La(A.scene)),y(A)},i,M=>{_(M)})})}const{TextureLoader:$a}=await O("three"),ja=Array.isArray;async function fi(l,o){const a=new $a(o),i=u=>new Promise((p,y)=>{a.load(u,_=>p(_),()=>null,()=>{y(new Error("[useTextures] - Failed to load texture"))})});if(ja(l)){const u=await Promise.all(l.map(p=>i(p)));return l.length>1?u:u[0]}else{const{map:u,displacementMap:p,normalMap:y,roughnessMap:_,metalnessMap:M,aoMap:A,alphaMap:k,matcap:B}=l;return{map:u?await i(u):null,displacementMap:p?await i(p):null,normalMap:y?await i(y):null,roughnessMap:_?await i(_):null,metalnessMap:M?await i(M):null,aoMap:A?await i(A):null,alphaMap:k?await i(k):null,matcap:B?await i(B):null}}}const{FrontSide:Tt,BackSide:Ua,DoubleSide:Va,NormalBlending:Bt,AdditiveBlending:Ha,SubtractiveBlending:Ga,MultiplyBlending:Wa,NoBlending:Ya}=await O("three"),di=[{label:"FrontSide",value:Tt},{label:"BackSide",value:Ua},{label:"DoubleSide",value:Va}],mi=[{label:"NoBlending",value:Ya},{label:"NormalBlending",value:Bt},{label:"AdditiveBlending",value:Ha},{label:"SubtractiveBlending",value:Ga},{label:"MultiplyBlending",value:Wa}],le={color:"#ffffff",map:null,wireframe:!1,opacity:1,transparent:!1,side:Tt,alphaTest:0,blending:Bt,depthTest:!0,depthWrite:!0},Ka={emissive:"#000000",emissiveIntensity:1,emissiveMap:null,reflectivity:1,refractionRatio:.98},qa={emissive:"#000000",emissiveIntensity:1,specular:"#111111",shininess:30,specularMap:null,emissiveMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1},displacementMap:null,displacementScale:1,displacementBias:0},Rt={emissive:"#000000",emissiveIntensity:1,metalness:.5,roughness:.5,metalnessMap:null,roughnessMap:null,normalMap:null,normalScale:{x:1,y:1},bumpMap:null,bumpScale:1,displacementMap:null,displacementScale:1,displacementBias:0,aoMap:null,aoMapIntensity:1,envMap:null,envMapIntensity:1},Xa={...Rt,clearcoat:.2,clearcoatRoughness:.1,reflectivity:.5,transmission:0,ior:1.5,thickness:.01,attenuationColor:"#ffffff",attenuationDistance:0,specularIntensity:1,specularColor:"#ffffff",sheen:0,sheenColor:"#ffffff",clearcoatNormalMap:null,clearcoatNormalScale:{x:1,y:1}},Za={gradientMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1}},Ja={metalness:.5,roughness:0},Qa={color:"#ffffff",roughness:0,reflectivity:.5,attenuationColor:"#ffffff",attenuationDistance:2,chromaticAberration:.05,anisotropicBlur:.1,distortion:0,temporalDistortion:0,backside:!0,thickness:1,backsideThickness:.5},eo={color:"#ff00fc",metalness:1,roughness:1,clearcoat:1,clearcoatRoughness:0},to={color:"#B520A9",uEdgeColor:"#4d9bff",uEdge:6,uFreq:.41,uAmp:20,uProgress:-1,metalness:1,roughness:1},Dt={MeshBasicMaterial:{component:"TresMeshBasicMaterial",props:{...le}},MeshLambertMaterial:{component:"TresMeshLambertMaterial",props:{...le,...Ka}},MeshPhongMaterial:{component:"TresMeshPhongMaterial",props:{...le,...qa}},MeshStandardMaterial:{component:"TresMeshStandardMaterial",props:{...le,...Rt}},MeshPhysicalMaterial:{component:"TresMeshPhysicalMaterial",props:{...le,...Xa}},MeshToonMaterial:{component:"TresMeshToonMaterial",props:{...le,...Za}},MeshGlassMaterial:{component:async()=>(await xe(()=>import("./index.DTe2qqjO1767148983502.js").then(o=>o.trescientos),__vite__mapDeps([0,1,2,3]),import.meta.url)).MeshGlassMaterial,props:{...le,...Ja}},TransmissionMaterial:{component:async()=>(await xe(()=>import("./index.Bxnrcw_21767148983502.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11,12]),import.meta.url)).TransmissionMaterial,props:{...Qa}},ClearcoatMaterial:{component:async()=>(await xe(()=>import("./index.Bxnrcw_21767148983502.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11,12]),import.meta.url)).ClearcoatMaterial,props:{...eo}},dissolveEffectMaterial:{component:async()=>(await xe(()=>import("./index.Csbvztzn1767148983502.js"),__vite__mapDeps([13,14,1,0,2,3,15,16,17,18,19,20]),import.meta.url)).dissolveEffectMaterial,props:{...to}}},{markRaw:no}=await O("vue");async function ro(l){let a=Dt[l].component;return typeof a=="function"&&(a=no(await a())),a}function ao(l){return Dt[l].props}const{defineComponent:oo}=await O("vue"),{resolveDynamicComponent:io,mergeProps:so,openBlock:lo,createBlock:co}=await O("vue"),{ref:je,watch:xt}=await O("vue"),uo=oo({__name:"index",props:{type:{},materialProps:{}},setup(l){const o=l,a=je(null),i=je({}),u=je(null);let p=!1;return xt(()=>o.type,async y=>{if(u.value)try{u.value.dispose?.(),console.log("已释放旧材质组件")}catch(_){console.warn("释放材质组件失败:",_)}p=!1,a.value=await ro(y),p=!0,i.value={...ao(y),...o.materialProps}},{immediate:!0}),xt(()=>[o.type,o.materialProps],([y,_],[M])=>{y===M&&p&&(i.value=_)},{deep:!0}),(y,_)=>(lo(),co(io(a.value),so(i.value,{ref_key:"materialRef",ref:u}),null,16))}}),St={Box:{params:[{key:"width",label:"width",type:"number",default:1},{key:"height",label:"height",type:"number",default:1},{key:"depth",label:"depth",type:"number",default:1},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:6,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:6,step:1},{key:"depthSegments",label:"depthSegments",type:"number",default:1,min:1,max:6,step:1}]},Circle:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:32,min:3,max:64,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cone:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cylinder:{params:[{key:"radiusTop",label:"radiusTop",type:"number",default:1,min:0},{key:"radiusBottom",label:"radiusBottom",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Dodecahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Icosahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Octahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Plane:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:64,step:1}]},Ring:{params:[{key:"innerRadius",label:"innerRadius",type:"number",default:.5,min:0},{key:"outerRadius",label:"outerRadius",type:"number",default:1,min:0},{key:"thetaSegments",label:"thetaSegments",type:"number",default:8,min:3,max:64,step:1},{key:"phiSegments",label:"phiSegments",type:"number",default:1,min:1,max:16,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},RoundedBox:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"depth",label:"depth",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:2,min:0,max:8,step:.1},{key:"radius",label:"radius",type:"number",default:.1,min:0,max:1,step:.01}]},Sphere:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:32,min:3,max:128,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:16,min:2,max:128,step:1},{key:"phiStart",label:"phiStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"phiLength",label:"phiLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI,min:.1,max:Math.PI,step:.01}]},Tetrahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Torus:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"arc",label:"arc",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},TorusKnot:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:128,step:1},{key:"p",label:"p",type:"number",default:2,min:1,max:10,step:.1},{key:"q",label:"q",type:"number",default:3,min:1,max:10,step:.1}]}},{defineComponent:fo}=await O("vue"),{unref:se,createVNode:Ce,renderList:mo,Fragment:po,openBlock:ge,createElementBlock:Ue,mergeProps:ho,createBlock:Ve,createCommentVNode:Mt,withCtx:ke}=await O("vue"),vo={class:"shape-configurator"},{ref:go,reactive:yo,computed:Et,watch:_o}=await O("vue"),pi=fo({__name:"shapeConfigurator",props:{modelValue:{}},emits:["update:modelValue"],setup(l,{emit:o}){const a=l,i=o,u=Object.keys(St).map(B=>({label:B,value:B})),p=go(a.modelValue?.type??"Box"),y=Et(()=>St[p.value]),_=yo({});function M(B=!0){const x=y.value;if(x){for(const R of x.params)if(_[R.key]=R.default,B&&a.modelValue&&a.modelValue.args){const v=x.params.findIndex(P=>P.key===R.key);v!==-1&&a.modelValue.args[v]!==void 0&&(_[R.key]=a.modelValue.args[v])}}}const A=Et(()=>{const B=y.value;return B?B.params.map(x=>_[x.key]):[]});_o(()=>({type:p.value,args:A.value}),B=>i("update:modelValue",B),{deep:!0,immediate:!0}),M();function k(B){return B.type!=="number"?{}:{min:B.min??.1,max:B.max??5,step:B.step??.1}}return(B,x)=>(ge(),Ue("div",vo,[Ce(se(Zt),null,{default:ke(()=>[Ce(se(Jt),{vertical:"",size:"small"},{default:ke(()=>[Ce(se(Qt),{value:p.value,"onUpdate:value":[x[0]||(x[0]=R=>p.value=R),x[1]||(x[1]=R=>M(!1))],options:se(u),placeholder:"选择图形类型"},null,8,["value","options"]),y.value?(ge(),Ve(se(nn),{key:0,size:"small","label-placement":"left","label-width":100},{default:ke(()=>[(ge(!0),Ue(po,null,mo(y.value.params,R=>(ge(),Ue("div",{key:R.key,style:{"margin-bottom":"12px"}},[Ce(se(rn),{label:R.label},{default:ke(()=>[R.type==="number"?(ge(),Ve(se(en),ho({key:0,size:"tiny",value:_[R.key],"onUpdate:value":v=>_[R.key]=v},{ref_for:!0},k(R),{style:{width:"100%"}}),null,16,["value","onUpdate:value"])):R.type==="boolean"?(ge(),Ve(se(tn),{key:1,size:"small",value:_[R.key],"onUpdate:value":v=>_[R.key]=v},null,8,["value","onUpdate:value"])):Mt("",!0)]),_:2},1032,["label"])]))),128))]),_:1})):Mt("",!0)]),_:1})]),_:1})]))}}),{defineComponent:bo}=await O("vue"),{renderSlot:wo,resolveDynamicComponent:xo,withCtx:So,openBlock:Mo,createBlock:Eo,createCommentVNode:Po}=await O("vue"),{computed:Io}=await O("vue"),Co=bo({__name:"shapeRenderer",props:{modelValue:{}},setup(l){const o={Box:Kt,Circle:Yt,Cone:Wt,Cylinder:Gt,Dodecahedron:Ht,Icosahedron:Vt,Octahedron:Ut,Plane:jt,Ring:$t,RoundedBox:Lt,Sphere:Nt,Tetrahedron:Ot,Torus:zt,TorusKnot:Ft},a=l,i=Io(()=>o[a.modelValue?.type]??null);return(u,p)=>i.value?(Mo(),Eo(xo(i.value),{key:0,args:u.modelValue.args},{default:So(()=>[wo(u.$slots,"default")]),_:3},8,["args"])):Po("",!0)}}),{defineComponent:ko}=await O("vue"),{unref:Pt,createVNode:Ao,withCtx:To,openBlock:Bo,createBlock:Ro}=await O("vue"),hi=ko({__name:"forEditor",props:{shape:{default:{type:"Box",args:[2,1,1]}},materialType:{type:String,default:"MeshStandardMaterial"},materialProps:{type:Object,required:!0}},setup(l){return(o,a)=>(Bo(),Ro(Pt(Co),{position:[0,.5,0],modelValue:l.shape},{default:To(()=>[Ao(Pt(uo),{type:l.materialType,"material-props":l.materialProps},null,8,["type","material-props"])]),_:1},8,["modelValue"]))}}),{defineComponent:Do}=await O("vue"),{openBlock:Fo,createElementBlock:zo}=await O("vue"),Oo=["object"],{shallowRef:No,watch:It,useAttrs:Lo}=await O("vue"),$o=await O("three"),vi=Do({__name:"customShaderMaterial",props:{baseMaterial:{},vertexShader:{},fragmentShader:{},uniforms:{}},setup(l){const o=Lo(),a=l,i=No(null);return It(()=>a.baseMaterial,u=>{i.value&&i.value.dispose(),i.value=new an({baseMaterial:$o[u],vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,uniforms:a.uniforms})},{immediate:!0}),It(()=>({...o}),u=>{const p=i.value;p&&Object.keys(u).forEach(y=>{if(!(y in p))return;const _=u[y];_===!0&&typeof p[y]!="boolean"||p[y]!==_&&(p[y]=_,p.needsUpdate=!0)})},{immediate:!0,deep:!1}),(u,p)=>(Fo(),zo("primitive",{object:i.value},null,8,Oo))}});export{li as CientosShaderMaterial,rr as MeshDiscardMaterial,st as MeshTransmissionMaterial,ti as _sfc_main,ni as _sfc_main$1,hi as _sfc_main$10,vi as _sfc_main$11,pi as _sfc_main$12,ri as _sfc_main$2,ai as _sfc_main$3,oi as _sfc_main$4,ii as _sfc_main$5,si as _sfc_main$6,ci as _sfc_main$7,uo as _sfc_main$8,Co as _sfc_main$9,mi as blendingOptions,Dt as materialPresets,di as sideOptions,rt as useFBO,wt as useLoader,ui as useTexture,fi as useTexture$1};
