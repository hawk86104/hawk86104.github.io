const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.74ZWg8L31776759150043.js","./3d-tiles-renderer.DGvROtvg1776759150043.js","./runtime-core.esm-bundler.lozGpi4i1776759150043.js","../css/index.OpIsgPhW1776759150043.css","./index.CLHaA7Z91776759150043.js","./index.vue_vue_type_script_setup_true_lang.DuVkx1Eu1776759150043.js","./utils.sbhH34FI1776759150043.js","./three.webgpu.BWKSogVl1776759150043.js","./three.Cyea0abz1776759150043.js","./index.DXs4uDKk1776759150043.js","./useSeek.BLQ2gt3M1776759150043.js","./shapeConfigurator.C3dnpzEn1776759150043.js","./index.Dd18YEZf1776759150043.js","./flexiblePipe.vue_vue_type_script_setup_true_lang.qKInL6R11776759150043.js","./Resource._8J0DCC61776759150043.js","./DRACOLoader.m9YNGDrV1776759150043.js","./HDRLoader.ZcR7uPLc1776759150043.js","./buildFlexiblePipe.CmPxZ7GD1776759150043.js","./flexiblePipe2.vue_vue_type_script_setup_true_lang.DEFM55ey1776759150043.js","./material.vue_vue_type_script_setup_true_lang.CuZ0Kaes1776759150043.js"])))=>i.map(i=>d[i]);
import{importShared as m}from"./3d-tiles-renderer.DGvROtvg1776759150043.js";import{useTres as F,RGBELoader as be,useLoop as V,objectHash as yt,__vitePreload as q,TorusKnot_default as xt,Torus_default as Mt,Tetrahedron_default as St,Sphere_default as bt,RoundedBox_default as wt,Ring_default as Pt,Plane_default as kt,Octahedron_default as Rt,Icosahedron_default as Ct,Dodecahedron_default as Tt,Cylinder_default as Et,Cone_default as It,Circle_default as Dt,Box_default as At}from"./index.74ZWg8L31776759150043.js";import{shaderMaterial as xe}from"./shaderMaterial.KaqGTSdO1776759150043.js";import{FullScreenQuad as Bt}from"./Pass.uhntLwuw1776759150043.js";import"./index.vue_vue_type_script_setup_true_lang.DuVkx1Eu1776759150043.js";import{instance as we}from"./Resource._8J0DCC61776759150043.js";import{NCard as zt}from"./Card.CCmYgCG61776759150043.js";import{NSpace as Ft}from"./Space.CeVSxDId1776759150043.js";import{NSelect as Ot,NSlider as Nt,NSwitch as $t}from"./Switch.CoznIvAX1776759150043.js";import{NForm as Lt,NFormItem as jt}from"./FormItem.CoivEgP71776759150043.js";import{B as nt}from"./three-custom-shader-material.es.irnKsfsk1776759150043.js";const{Scene:Ht,Object3D:Vt,Mesh:Ut}=await m("three");class qt extends Vt{constructor(){super(),this.virtualScene=null,this.virtualScene=new Ht}add(...e){return this.virtualScene.add(...e),this}destructor(){this.virtualScene.traverse(e=>{e instanceof Ut&&(e.geometry.dispose(),e.material.dispose(),e.material.map&&e.material.map.dispose(),this.virtualScene.remove(e))}),this.virtualScene=null}}const K={sunset:"venice/venice_sunset_1k.hdr",studio:"studio/poly_haven_studio_1k.hdr",city:"city/canary_wharf_1k.hdr",umbrellas:"outdoor/outdoor_umbrellas_1k.hdr",night:"outdoor/satara_night_1k.hdr",forest:"outood/mossy_forest_1k.hdr",snow:"outdoor/snowy_forest_path_01_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",hangar:"indoor/small_hangar_01_1k.hdr",urban:"indoor/abandoned_games_room_02_1k.hdr",modern:"city/modern_buildings_2_1k.hdr",shangai:"city/shanghai_bund_1k.hdr"},{CubeReflectionMapping:Wt,CubeTextureLoader:Gt,EquirectangularReflectionMapping:Pe}=await m("three"),{computed:ke,ref:oe,toRefs:Kt,unref:ie,watch:N}=await m("vue"),Yt="https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";async function Zt(a,e){const{scene:t,invalidate:n}=F();N(a,()=>{n()});const{preset:r,blur:o,files:i=oe([]),path:s=oe(""),background:c}=Kt(a),f=oe(null),u=ke(()=>Array.isArray(i.value)),d=ke(()=>u.value?Gt:be);return N([i,s],async([l,p])=>{if(l&&l.length>0&&!r?.value){try{f.value=await Ye(d.value,u.value?[...ie(l)]:ie(l),v=>{p&&v.setPath(ie(p))})}catch(v){throw new Error(`Failed to load environment map: ${v}`)}f.value&&(f.value.mapping=u.value?Wt:Pe),n()}},{immediate:!0}),N(f,l=>{t.value&&l&&(t.value.environment=l)},{immediate:!0}),N([c,f],([l,p])=>{if(t.value){let v=e?.value?e.value.texture:p,_=t.value.background;_?.isColor||(_=void 0),t.value.background=l?v:_}},{immediate:!0}),N(()=>o?.value,l=>{t.value&&l&&(t.value.backgroundBlurriness=l)},{immediate:!0}),N(()=>r?.value,async l=>{if(l&&l in K){const p=Yt,v=K[l];try{f.value=await Ye(be,v,_=>{p&&_.setPath(p)})}catch(_){throw new Error(`Failed to load environment map: ${_}`)}f.value&&f.value&&(f.value.mapping=Pe),n()}else if(l&&!(l in K))throw new Error(`Preset must be one of: ${Object.keys(K).join(", ")}`)},{immediate:!0}),f}const{withAsyncContext:Xt,defineComponent:Qt}=await m("vue"),{unref:Jt,renderSlot:ea,openBlock:ta,createElementBlock:aa,createCommentVNode:na}=await m("vue"),{ref:se,useSlots:ra,onUnmounted:oa,watch:le,toRaw:ia}=await m("vue"),{WebGLCubeRenderTarget:sa,CubeCamera:la,HalfFloatType:Re,UnsignedByteType:ca,NearestFilter:Ce}=await m("three"),Wo=Qt({__name:"component",props:{background:{type:[Boolean,String],default:!1},blur:{default:0},files:{default:[]},path:{default:""},preset:{default:void 0},resolution:{default:256},near:{default:1},far:{default:1e3},frames:{default:1/0},useDefaultScene:{type:Boolean,default:!1}},async setup(a,{expose:e}){let t,n;const r=a,o=se(null);e({texture:o});const{extend:i,renderer:s,scene:c}=F();let f=null,u=se(null),d=null;const l=se(null);oa(()=>{l.value?.destructor(),u.value?.dispose()});const{onBeforeRender:p}=V();let v=1;p(()=>{d&&l.value&&u.value&&(r.frames===1/0||v<r.frames)&&(r.useDefaultScene?d.update(s,c.value):d.update(s,ia(l.value.virtualScene)),v++)});const _=([t,n]=Xt(()=>Zt(r,u)),t=await t,n(),t),M=y=>{y?(c.value.environment=y.texture,r.background&&(c.value.background=y.texture)):(c.value.environment=_.value,r.background&&(c.value.background=_.value))};le(_,y=>{u.value&&M(u.value)},{immediate:!0,deep:!0}),i({EnvSence:qt});const P=()=>{u.value?.dispose(),u.value=new sa(r.resolution),d=new la(r.near,r.far,u.value),r.useDefaultScene?(u.value.texture.type=ca,u.value.texture.generateMipmaps=!1,u.value.texture.minFilter=Ce,u.value.texture.magFilter=Ce):u.value.texture.type=Re,M(u.value)};return le(()=>ra().default,y=>{if(y&&(!u.value||u.value.texture.type!==Re)&&(f=y(),Array.isArray(f)&&f.length>0&&typeof f[0]?.type!="symbol")){P();return}u.value?.dispose(),u.value=null,M(null)},{immediate:!0,deep:!0}),o.value=_,le(()=>r.useDefaultScene,y=>{u.value&&P()}),(y,k)=>Jt(u)?(ta(),aa("TresEnvSence",{key:0,ref_key:"envSence",ref:l},[ea(y.$slots,"default")],512)):na("",!0)}}),{defineComponent:ua}=await m("vue"),{openBlock:W,createElementBlock:Y,createBlock:ma,unref:fa,createElementVNode:da}=await m("vue"),pa={key:0,args:[0,1,64]},va={key:1,args:[.5,1,64]},ha={key:2},ga=["toneMapped","map","side","color"],{ref:_a,watchEffect:ya,onMounted:xa,watch:Ma}=await m("vue"),{Color:Sa,DoubleSide:ba}=await m("three"),Go=ua({__name:"index",props:{args:{default:null},from:{default:"rect"},toneMapped:{type:Boolean,default:!1},map:{default:null},intensity:{default:1},color:{default:new Sa(16777215)}},setup(a){const e=a,t=_a();return ya(()=>{t.value&&(t.value.color.multiplyScalar(e.intensity),t.value.needsUpdate=!0)}),Ma(()=>e.color,n=>{t.value&&(t.value.color.set(n),t.value.color.multiplyScalar(e.intensity),t.value.needsUpdate=!0)}),xa(()=>{}),(n,r)=>(W(),Y("TresMesh",null,[e.from==="circle"?(W(),Y("TresRingGeometry",pa)):e.from==="ring"?(W(),Y("TresRingGeometry",va)):e.from==="rect"?(W(),Y("TresPlaneGeometry",ha)):(W(),ma(e.from,{key:3,args:e})),da("TresMeshBasicMaterial",{ref_key:"material",ref:t,toneMapped:n.toneMapped,map:n.map,side:fa(ba),color:n.color},null,8,ga)]))}}),{DepthTexture:wa,DepthFormat:Pa,UnsignedShortType:ka,HalfFloatType:Ra,LinearFilter:Te,WebGLRenderTarget:Ca}=await m("three"),{isReactive:Ta,onBeforeUnmount:Ea,reactive:Ia,ref:Da,toRefs:Ee,watchEffect:Aa,toRaw:ce}=await m("vue");function Ie(a){const e=Da(null),{height:t,width:n,settings:r,depth:o,isLoop:i}=Ta(a)?Ee(a):Ee(Ia(a)),{onRender:s}=V(),{camera:c,renderer:f,scene:u,sizes:d}=F();return Aa(()=>{e.value?.dispose(),e.value=new Ca(n?.value||d.width.value,t?.value||d.height.value,{minFilter:Te,magFilter:Te,type:Ra,...r?.value}),o?.value&&(e.value.depthTexture=new wa(n?.value||d.width.value,t?.value||d.height.value),e.value.depthTexture.format=Pa,e.value.depthTexture.type=ka)}),s(()=>{i?.value&&(f.setRenderTarget(ce(e.value)),f.clear(),f.render(ce(u.value),ce(c.value)),f.setRenderTarget(null))}),Ea(()=>{e.value?.dispose()}),e}const $=await m("three");function Z(a=1024,e=1024,t){var n=a,r=e,o=t||{};const{samples:i=0,depth:s,...c}=o,f=s??o.depthBuffer;var u=new $.WebGLRenderTarget(n,r,{minFilter:$.LinearFilter,magFilter:$.LinearFilter,type:$.HalfFloatType,...c});return f&&(u.depthTexture=new $.DepthTexture(n,r,$.FloatType)),u.samples=i,u}const g=await m("three"),Ba=a=>a?.isVector3;function De(a=g.FrontSide){const e={value:new g.Matrix4};return Object.assign(new g.MeshNormalMaterial({side:a}),{viewMatrix:e,onBeforeCompile:t=>{t.uniforms.viewMatrix=e,t.fragmentShader=`vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
           return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
         }
`+t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
           normal = inverseTransformDirection( normal, viewMatrix );
`)}})}const za=xe({causticsTexture:null,causticsTextureB:null,color:new g.Color,lightProjMatrix:new g.Matrix4,lightViewMatrix:new g.Matrix4},`varying vec3 vWorldPosition;   
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
    #include <${parseInt(g.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
   }`),Fa=xe({cameraMatrixWorld:new g.Matrix4,cameraProjectionMatrixInv:new g.Matrix4,normalTexture:null,depthTexture:null,lightDir:new g.Vector3(0,1,0),lightPlaneNormal:new g.Vector3(0,1,0),lightPlaneConstant:0,near:.1,far:100,modelMatrix:new g.Matrix4,worldRadius:1/40,ior:1.1,bounces:0,resolution:1024,size:10,intensity:.5},`
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
  }`),Ae={depthBuffer:!0,minFilter:g.LinearFilter,magFilter:g.LinearFilter,type:g.UnsignedByteType},ue={minFilter:g.LinearMipmapLinearFilter,magFilter:g.LinearFilter,type:g.FloatType,generateMipmaps:!0};function Oa(a){const e=De(),t=De(g.BackSide),n=new Fa,r=new Bt(n);let o=0;const i=new g.Vector3,s=new g.Frustum,c=new g.Matrix4,f=new g.Plane,u=new g.Vector3,d=new g.Vector3,l=new g.Box3,p=new g.Vector3,v=[],_=[],M=[],P=[],y=new g.Vector3;for(let k=0;k<8;k++)v.push(new g.Vector3),_.push(new g.Vector3),M.push(new g.Vector3),P.push(new g.Vector3);return function(R){const{params:S,helper:B,camera:w,plane:I,normalTarget:U,normalTargetB:ae,causticsTarget:mt,causticsTargetB:ft,scene:D,group:dt}=a();if(S.frames===1/0||S.frames&&o++<S.frames){var Me;Ba(S.lightSource)?u.copy(S.lightSource).normalize():S.lightSource&&u.copy(dt.worldToLocal(S.lightSource.getWorldPosition(i)).normalize()),d.copy(u).multiplyScalar(-1),(Me=D.parent)==null||Me.matrixWorld.identity(),l.setFromObject(D,!0),v[0].set(l.min.x,l.min.y,l.min.z),v[1].set(l.min.x,l.min.y,l.max.z),v[2].set(l.min.x,l.max.y,l.min.z),v[3].set(l.min.x,l.max.y,l.max.z),v[4].set(l.max.x,l.min.y,l.min.z),v[5].set(l.max.x,l.min.y,l.max.z),v[6].set(l.max.x,l.max.y,l.min.z),v[7].set(l.max.x,l.max.y,l.max.z);for(let b=0;b<8;b++)_[b].copy(v[b]);l.getCenter(p),v.map(b=>b.sub(p));const pt=f.set(d,0);v.map((b,E)=>pt.projectPoint(b,M[E]));const vt=M.reduce((b,E)=>b.add(E),i.set(0,0,0)).divideScalar(M.length),O=M.map(b=>b.distanceTo(vt)).reduce((b,E)=>Math.max(b,E)),ht=v.map(b=>b.dot(u)).reduce((b,E)=>Math.max(b,E));w.position.copy(y.copy(u).multiplyScalar(ht).add(p)),w.lookAt(D.localToWorld(p));const gt=c.lookAt(w.position,p,i.set(0,1,0));if(w.left=-O,w.right=O,w.top=O,w.bottom=-O,S.near&&(w.near=S.near),S.far)w.far=S.far;else{const b=i.set(0,O,0).applyMatrix4(gt),E=(w.position.y+b.y)/u.y;w.far=E}w.updateProjectionMatrix(),w.updateMatrixWorld();const ne=_.map((b,E)=>b.add(P[E].copy(u).multiplyScalar(-b.y/u.y))),re=ne.reduce((b,E)=>b.add(E),i.set(0,0,0)).divideScalar(ne.length),_t=2*ne.map(b=>Math.hypot(b.x-re.x,b.z-re.z)).reduce((b,E)=>Math.max(b,E));I.scale.setScalar(_t),I.position.copy(re),B!=null&&B.parent&&B.update(),t.viewMatrix.value=e.viewMatrix.value=w.matrixWorldInverse;const Se=s.setFromProjectionMatrix(c.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse)).planes[4];n.cameraMatrixWorld=w.matrixWorld,n.cameraProjectionMatrixInv=w.projectionMatrixInverse,n.lightDir=d,n.lightPlaneNormal=Se.normal,n.lightPlaneConstant=Se.constant,n.near=w.near,n.far=w.far,S.resolution&&(n.resolution=S.resolution),n.size=O,S.intensity&&(n.intensity=S.intensity),S.worldRadius&&(n.worldRadius=S.worldRadius),D.visible=!0,R.setRenderTarget(U),R.clear(),D.overrideMaterial=e,R.render(D,w),R.setRenderTarget(ae),R.clear(),S.backside&&(D.overrideMaterial=t,R.render(D,w)),D.overrideMaterial=null,S.ior&&(n.ior=S.ior),I.material.lightProjMatrix=w.projectionMatrix,I.material.lightViewMatrix=w.matrixWorldInverse,n.normalTexture=U.texture,n.depthTexture=U.depthTexture,R.setRenderTarget(mt),R.clear(),r.render(R),S.backsideIOR&&(n.ior=S.backsideIOR),n.normalTexture=ae.texture,n.depthTexture=ae.depthTexture,R.setRenderTarget(ft),R.clear(),S.backside&&r.render(R),R.setRenderTarget(null),S.causticsOnly&&(D.visible=!1)}}}const Na=(a,{frames:e=1,causticsOnly:t=!1,ior:n=1.1,backside:r=!1,backsideIOR:o=1.1,worldRadius:i=.3125,color:s=new g.Color("white"),intensity:c=.05,resolution:f=2024,lightSource:u=new g.Vector3(1,1,1),near:d=.1,far:l=0}={})=>{const p={frames:e,ior:n,color:s,causticsOnly:t,backside:r,backsideIOR:o,worldRadius:i,intensity:c,resolution:f,lightSource:u,near:d,far:l},v=new g.Group;v.name="caustics_group";const _=new g.OrthographicCamera,M=new g.Scene;M.name="caustics_scene";const P=a,y=new g.CameraHelper(_);y.name="caustics_helper";const k=p.resolution,R=Z(k,k,Ae),S=Z(k,k,Ae);a.extensions.get("OES_texture_float_linear")||(console.warn("Caustics: OES_texture_float_linear extension is not supported, using HalfFloatType instead."),ue.type=g.HalfFloatType);const B=Z(k,k,ue),w=Z(k,k,ue),I=new g.Mesh(new g.PlaneGeometry(1,1),new za({transparent:!0,color:p.color,causticsTexture:B.texture,causticsTextureB:w.texture,blending:g.CustomBlending,blendSrc:g.OneFactor,blendDst:g.SrcAlphaFactor,depthWrite:!1}));I.name="caustics_plane",I.rotation.x=-Math.PI/2,I.renderOrder=2,v.add(M,I),v.updateWorldMatrix(!1,!0);const U=Oa(()=>({params:p,scene:M,group:v,camera:_,plane:I,normalTarget:R,normalTargetB:S,causticsTarget:B,causticsTargetB:w,helper:y}));return{scene:M,group:v,helper:y,params:p,update:U.bind({},P),normalTarget:R,normalTargetB:S,causticsTarget:B,causticsTargetB:w}},$a=xe({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }"),Be=await m("three");class ze extends Be.MeshPhysicalMaterial{constructor({samples:e=6,transmissionSampler:t=!1,chromaticAberration:n=.05,transmission:r=0,_transmission:o=1,transmissionMap:i=null,roughness:s=0,thickness:c=0,thicknessMap:f=null,attenuationDistance:u=1/0,attenuationColor:d=new Be.Color("white"),anisotropicBlur:l=.1,time:p=0,distortion:v=0,distortionScale:_=.5,temporalDistortion:M=0,buffer:P=null}={}){super(),this.uniforms={chromaticAberration:{value:n},transmission:{value:r},_transmission:{value:o},transmissionMap:{value:i},roughness:{value:s},thickness:{value:c},thicknessMap:{value:f},attenuationDistance:{value:u},attenuationColor:{value:d},anisotropicBlur:{value:l},time:{value:p},distortion:{value:v},distortionScale:{value:_},temporalDistortion:{value:M},buffer:{value:P}},this.onBeforeCompile=y=>{y.uniforms={...y.uniforms,...this.uniforms},t?y.defines.USE_SAMPLER="":y.defines.USE_TRANSMISSION="",y.fragmentShader=`
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
`+y.fragmentShader,y.fragmentShader=y.fragmentShader.replace("#include <transmission_pars_fragment>",`
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
`),y.fragmentShader=y.fragmentShader.replace("#include <transmission_fragment>",`  
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
        for (float i = 0.0; i < ${e}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${e})) , material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${e})), material.thickness + thickness_smear * (i + randomCoords) / float(${e}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${e}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(y=>Object.defineProperty(this,y,{get:()=>this.uniforms[y].value,set:k=>this.uniforms[y].value=k}))}}const{defineComponent:La}=await m("vue"),{unref:Fe,openBlock:ja,createElementBlock:Ha}=await m("vue"),Va=["buffer","side"],{shallowRef:Oe,nextTick:Ua,onMounted:qa}=await m("vue"),{BackSide:Wa,DoubleSide:Ga}=await m("three"),Ka=0,Ko=La({__name:"index",props:{backside:{type:Boolean,default:!0},thickness:{default:1},backsideThickness:{default:.5},fboResolution:{default:256}},setup(a,{expose:e}){const t=Oe(),{extend:n,scene:r,renderer:o,camera:i}=F(),s=Oe(),c=a;n({MeshTransmissionMaterial:ze});function f(y,k){let R;return y.traverse(S=>{S.isMesh&&S.material&&S.material.uuid===k&&(R=S)}),R}const u=new $a,{onBeforeRender:d}=V(),l=Ie({width:c.fboResolution,height:c.fboResolution,isLoop:!1}),p=Ie({width:c.fboResolution,height:c.fboResolution,isLoop:!1});qa(async()=>{await Ua(),s.value=f(r.value,t.value.uuid)});let v,_,M,P;return d(({elapsed:y})=>{t.value&&(t.value.time=y,t.value.buffer===p.value.texture&&s.value&&(M=o.toneMapping,v=r.value.background,_=t.value.envMapIntensity,P=s.value.material.side,s.value.material=u,c.backside&&(o.setRenderTarget(l.value),o.render(r.value,i.value),s.value.material=t.value,s.value.material.thickness=c.backsideThickness,s.value.material.buffer=l.value.texture,s.value.material.side=Wa,s.value.material.envMapIntensity=Ka),o.setRenderTarget(p.value),o.render(r.value,i.value),s.value.material.buffer=p.value.texture,s.value.material=t.value,s.value.material.thickness=c.thickness,s.value.material.side=P,s.value.material.envMapIntensity=_,r.value.background=v,o.setRenderTarget(null),o.toneMapping=M))}),e({root:t,constructor:ze}),(y,k)=>(ja(),Ha("TresMeshTransmissionMaterial",{ref_key:"MeshTransmissionMaterialClass",ref:t,buffer:Fe(p).texture,side:Fe(Ga)},null,8,Va))}}),{defineComponent:Ya}=await m("vue"),{renderSlot:Za,createElementVNode:Ne,openBlock:Xa,createElementBlock:Qa}=await m("vue"),{ref:me,onMounted:Ja}=await m("vue"),{Box3:en,Vector3:tn,Sphere:an}=await m("three"),Yo=Ya({__name:"index",props:{precise:{type:Boolean,default:!0},top:{type:Boolean,default:!1},right:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},front:{type:Boolean,default:!1},back:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},disableX:{type:Boolean,default:!1},disableY:{type:Boolean,default:!1},disableZ:{type:Boolean,default:!1}},setup(a){const e=a,t=me(null),n=me(null),r=me(null);return Ja(()=>{if(!n.value||!r.value)return;n.value.matrixWorld.identity();const o=new en().setFromObject(r.value,e.precise),i=new tn,s=new an,c=o.max.x-o.min.x,f=o.max.y-o.min.y,u=o.max.z-o.min.z;o.getCenter(i),o.getBoundingSphere(s);const d=e.top?f/2:e.bottom?-f/2:0,l=e.left?-c/2:e.right?c/2:0,p=e.front?u/2:e.back?-u/2:0;n.value.position.set(e.disable||e.disableX?0:-i.x+l,e.disable||e.disableY?0:-i.y+d,e.disable||e.disableZ?0:-i.z+p)}),(o,i)=>(Xa(),Qa("TresGroup",{ref_key:"gref",ref:t},[Ne("TresGroup",{ref_key:"outer",ref:n},[Ne("TresGroup",{ref_key:"inner",ref:r},[Za(o.$slots,"default")],512)],512)],512))}}),{defineComponent:nn}=await m("vue"),{renderSlot:rn,createElementVNode:fe,unref:$e,Fragment:on,openBlock:sn,createElementBlock:ln}=await m("vue"),cn=["object"],un=["object"],{shallowRef:mn,watch:de,watchEffect:fn}=await m("vue"),dn=await m("three"),Zo=nn({__name:"index",props:{color:{default:"#ffffff"},ior:{default:1.1},backsideIOR:{default:1.1},far:{default:15},worldRadius:{default:.3},intensity:{default:.05},causticsOnly:{type:Boolean,default:!1},lightSource:{default:{x:1,y:1,z:1}},resolution:{default:1024}},setup(a){const e=a,{renderer:t}=F(),n=Na(t,{frames:1/0,resolution:e.resolution,worldRadius:e.worldRadius});n.params.backside=!0;const r=mn(null);de(r,i=>{i&&n.scene.add(i)});const{onBeforeRender:o}=V();return o(({elapsed:i})=>{n.update()}),fn(()=>{e.color&&n.params.color.set(e.color),e.ior&&(n.params.ior=e.ior),e.backsideIOR&&(n.params.backsideIOR=e.backsideIOR),e.far&&(n.params.far=e.far),e.worldRadius&&(n.params.worldRadius=e.worldRadius),e.intensity&&(n.params.intensity=e.intensity)}),de(()=>e.causticsOnly,i=>{n.params.causticsOnly=i}),de(()=>e.lightSource,i=>{i&&n.params.lightSource instanceof dn.Vector3&&n.params.lightSource.set(i.x,i.y,i.z)},{deep:!0}),(i,s)=>(sn(),ln(on,null,[fe("TresGroup",{ref_key:"group",ref:r},[rn(i.$slots,"default")],512),fe("primitive",{object:$e(n).group,position:[0,.003,0]},null,8,cn),fe("primitive",{object:$e(n).helper,visible:!1},null,8,un)],64))}}),X=await m("three");function pn(a,e,t){e.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{a.properties.remove(r),r.dispose()}):(a.properties.remove(n.material),n.material.dispose()))}),a.info.programs.length=0,a.compile(e,t)}const vn=({focus:a=0,size:e=25,samples:t=10}={})=>{const n=X.ShaderChunk.shadowmap_pars_fragment;return X.ShaderChunk.shadowmap_pars_fragment=X.ShaderChunk.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP

    #define PENUMBRA_FILTER_SIZE float(${e})
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
      float blockerDepthSum = float(${a});
      float blockers = 0.0;
    
      int j = 0;
      vec2 offset = vec2(0.);
      float depth = 0.;
    
      #pragma unroll_loop_start
      for(int i = 0; i < ${t}; i ++) {
        offset = (vogelDiskSample(j, ${t}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
      for (int i = 0; i < ${t}; i++) {
        vogelSample = vogelDiskSample(j, ${t}, angle) * texelSize;
        offset = vogelSample * (1.0 + filterRadius * float(${e}));
        shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
        j++;
      }
      #pragma unroll_loop_end
      return shadow * 1.0 / ${t}.0;
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
#if defined( SHADOWMAP_TYPE_PCF )`),(r,o,i)=>{X.ShaderChunk.shadowmap_pars_fragment=n,pn(r,o,i)}},{defineComponent:hn}=await m("vue"),{watch:gn}=await m("vue"),{Mesh:_n}=await m("three"),Xo=hn({__name:"index",props:{enabled:{type:Boolean,default:!0},size:{default:25},focus:{default:0},samples:{default:10}},setup(a){const e=a,{camera:t,renderer:n,scene:r}=F();let o=null;const i=s=>{const{enabled:c,size:f,focus:u,samples:d}=s;o&&(o(n,r.value,t.value),o=null),c&&(o=vn({focus:u,size:f,samples:d}),r.value.traverse(l=>{l instanceof _n&&l.material.dispose()}))};return i(e),gn(e,()=>{i(e)}),(s,c)=>null}}),yn=await m("three"),{HalfFloatType:xn,WebGLCubeRenderTarget:Mn}=await m("three"),{onBeforeUnmount:Sn,ref:G,watch:Le}=await m("vue");function bn({resolution:a=256,near:e=.1,far:t=1e3,envMap:n,fog:r}={}){const{renderer:o,scene:i}=F(),s=G(null),c=G(a),f=G(e),u=G(t),d=G(null);Le(()=>c,_=>{s.value?.dispose(),s.value=new Mn(_.value),s.value.texture.type=xn},{immediate:!0}),Le([f,u,s],([_,M,P])=>{P&&(d.value=new yn.CubeCamera(_,M,P))},{immediate:!0}),Sn(()=>{s.value?.dispose()});let l,p;return{fbo:s,camera:d,update:()=>{l=i.value.fog,p=i.value.background,i.value.background=n||p,i.value.fog=r||l,d.value?.update(o,i.value),i.value.fog=l,i.value.background=p}}}const{defineComponent:wn}=await m("vue"),{unref:Pn,createElementVNode:je,renderSlot:kn,openBlock:Rn,createElementBlock:Cn}=await m("vue"),Tn=["object"],{ref:En}=await m("vue"),Qo=wn({__name:"index",props:{resolution:{default:256},near:{default:.1},far:{default:1e3},envMap:{default:null},fog:{default:null},frames:{default:1/0}},setup(a,{expose:e}){const t=a,{fbo:n,camera:r,update:o}=bn({resolution:t.resolution,near:t.near,far:t.far,envMap:t.envMap,fog:t.fog}),{onBeforeRender:i}=V();let s=0;const c=En(null);return i(()=>{c.value&&(t.frames===1/0||s<t.frames)&&(c.value.visible=!1,o(),c.value.visible=!0,s++)}),e({texture:n.value?.texture}),(f,u)=>(Rn(),Cn("TresGroup",null,[je("primitive",{object:Pn(r)},null,8,Tn),je("TresGroup",{ref_key:"rgRef",ref:c},[kn(f.$slots,"default")],512)]))}}),pe=await m("three");function Jo(a,e,t,n){const r=class extends pe.ShaderMaterial{constructor(o={}){const i=Object.entries(a);super({uniforms:i.reduce((s,[c,f])=>{const u=pe.UniformsUtils.clone({[c]:{value:f}});return{...s,...u}},{}),vertexShader:e,fragmentShader:t}),this.key="",i.forEach(([s])=>Object.defineProperty(this,s,{get:()=>this.uniforms[s].value,set:c=>this.uniforms[s].value=c})),Object.assign(this,o),n&&n(this)}};return r.key=pe.MathUtils.generateUUID(),r}const _e=await m("three");function In(a,e){if(typeof a!="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function rt(a){var e=In(a,"string");return typeof e=="symbol"?e:String(e)}function x(a,e,t){return e=rt(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function He(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),t.push.apply(t,n)}return t}function L(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?He(Object(t),!0).forEach(function(n){x(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Dn(a,e){if(a==null)return{};var t={},n=Object.keys(a),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(t[r]=a[r]);return t}function An(a,e){if(a==null)return{};var t=Dn(a,e),n,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}function Bn(a){if(Array.isArray(a))return a}function zn(a,e){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var n,r,o,i,s=[],c=!0,f=!1;try{if(o=(t=t.call(a)).next,e!==0)for(;!(c=(n=o.call(t)).done)&&(s.push(n.value),s.length!==e);c=!0);}catch(u){f=!0,r=u}finally{try{if(!c&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw r}}return s}}function Ve(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function Fn(a,e){if(a){if(typeof a=="string")return Ve(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ve(a,e)}}function On(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(a,e){return Bn(a)||zn(a,e)||Fn(a,e)||On()}function Nn(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function $n(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,rt(n.key),n)}}function Ln(a,e,t){return e&&$n(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function ot(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ye(a,e){return ye=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ye(a,e)}function jn(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&ye(a,e)}function ee(a){return ee=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ee(a)}function Hn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vn(a,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ot(a)}function Un(a){var e=Hn();return function(){var n=ee(a),r;if(e){var o=ee(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Vn(this,r)}}var h={diffuse:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",position:"csm_Position",positionRaw:"csm_PositionRaw"},C,qn=(C={},x(C,"".concat(h.position),"*"),x(C,"".concat(h.positionRaw),"*"),x(C,"".concat(h.normal),"*"),x(C,"".concat(h.pointSize),["PointsMaterial"]),x(C,"".concat(h.diffuse),"*"),x(C,"".concat(h.fragColor),"*"),x(C,"".concat(h.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(C,"".concat(h.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(C,"".concat(h.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(C,"".concat(h.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),x(C,"".concat(h.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),x(C,"".concat(h.depthAlpha),["MeshDepthMaterial"]),x(C,"".concat(h.clearcoat),["MeshPhysicalMaterial"]),x(C,"".concat(h.clearcoatRoughness),["MeshPhysicalMaterial"]),x(C,"".concat(h.clearcoatNormal),["MeshPhysicalMaterial"]),C),Wn={"#include <lights_physical_fragment>":_e.ShaderChunk.lights_physical_fragment},T,j,Gn=(T={},x(T,"".concat(h.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(h.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),x(T,"".concat(h.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(h.position,`;
  `)}),x(T,"".concat(h.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(h.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),x(T,"".concat(h.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(h.pointSize,`;
    `)}),x(T,"".concat(h.diffuse),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(h.diffuse,`;
  `)}),x(T,"".concat(h.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(h.fragColor,`;
  `)}),x(T,"".concat(h.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(h.emissive,`;
    `)}),x(T,"".concat(h.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(h.roughness,`;
    `)}),x(T,"".concat(h.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(h.metalness,`;
    `)}),x(T,"".concat(h.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(h.ao,`;
    `)}),x(T,"".concat(h.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(h.bump," - (dot(").concat(h.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),x(T,"".concat(h.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(h.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(h.depthAlpha,`;
    `)}),x(T,"".concat(h.clearcoat),{"material.clearcoat = clearcoat;":"material.clearcoat = ".concat(h.clearcoat,";")}),x(T,"".concat(h.clearcoatRoughness),{"material.clearcoatRoughness = clearcoatRoughness;":"material.clearcoatRoughness = ".concat(h.clearcoatRoughness,";")}),x(T,"".concat(h.clearcoatNormal),{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `}),T),Kn=(j={},x(j,"".concat(h.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(h.position,`, 1.0 );
  `)}),x(j,"".concat(h.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(h.position,`;
  `)}),x(j,"".concat(h.diffuse),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(h.diffuse,`;
  `)}),x(j,"".concat(h.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(h.fragColor,`;
  `)}),j),Yn={clearcoat:[h.clearcoat,h.clearcoatNormal,h.clearcoatRoughness]},Zn=`
    
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
`,Xn=`

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
`,Qn=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Jn=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,er=`
    varying mat4 csm_internal_vModelViewMatrix;
`,tr=`
    
`,ar=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],nr=function(e){return yt(e,{excludeValues:!0})},qe=function(e,t,n){return e.split(t).join(n)},rr=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},We=function(e,t){return new RegExp("\\b".concat(rr(t),"\\b")).test(e)};function or(a){try{new a}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function ir(a,e){Object.assign(a,e);var t=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(t)).filter(function(n){var r=typeof n[1].get=="function",o=typeof n[1].set=="function",i=typeof n[1].value=="function",s=n[0]==="constructor";return(r||o||i)&&!s}).forEach(function(n){typeof a[n[0]]!="function"&&Object.defineProperty(a,n[0],n[1])})}function sr(a){var e=a.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function Ge(a){return a?a.replace(/\s/g,""):void 0}function Ke(a){return a.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,"")}function lr(a,e,t){var n=a.lastIndexOf(e);return n===-1?a:a.substring(0,n)+t+a.substring(n+e.length)}var cr=function(a){jn(t,a);var e=Un(t);function t(n){var r,o=n.baseMaterial,i=n.fragmentShader,s=n.vertexShader,c=n.uniforms,f=n.patchMap,u=n.cacheKey,d=n.silent,l=An(n,ar);Nn(this,t);var p;if(or(o)?p=new o(l):(p=o,Object.assign(p,l)),p.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=e.call(this),ir(ot(r),p),r.__csm={patchMap:f||{},fragmentShader:i||"",vertexShader:s||"",cacheKey:u,baseMaterial:o,instanceID:_e.MathUtils.generateUUID(),type:p.type,isAlreadyExtended:!sr(p.onBeforeCompile),cacheHash:"",silent:d},r.uniforms=L(L({},r.uniforms||{}),c||{});{var v=r.__csm,_=v.fragmentShader,M=v.vertexShader,P=r.uniforms;r.__csm.cacheHash=r._getCacheHash(),r._generateMaterial(_,M,P)}return r}return Ln(t,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var o=this.__csm,i=o.fragmentShader,s=o.vertexShader,c=this.uniforms,f=this._getCacheHash();this.__csm.cacheHash=f,this._generateMaterial(i,s,c)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},o=new this.constructor(r);return Object.assign(this,o),o}},{key:"_getCacheHash",value:function(){var r=this.__csm,o=r.fragmentShader,i=r.vertexShader,s=this.uniforms,c=[Ge(o),Ge(i),s].filter(function(f){return f!==void 0});return c.length>0?nr(c):this.customProgramCacheKey()}},{key:"_generateMaterial",value:function(r,o,i){var s=this;this.uniforms=i||{},this.customProgramCacheKey=function(){return s.__csm.cacheHash};var c=function(d){try{var l=s._getMaterialDefine();if(r){var p=s._patchShader(Ke(r),d.fragmentShader,!0);d.fragmentShader=l+p}if(o){var v=s._patchShader(Ke(o),d.vertexShader);d.vertexShader=`#define IS_VERTEX;
`+v,d.vertexShader=l+d.vertexShader}d.uniforms=L(L({},d.uniforms),s.uniforms),s.uniforms=d.uniforms}catch(_){console.error(_)}};if(this.__csm.isAlreadyExtended){var f=this.onBeforeCompile;this.onBeforeCompile=function(u,d){f(u,d),c(u)}}else this.onBeforeCompile=c;this.needsUpdate=!0}},{key:"_patchShader",value:function(r,o,i){var s=this,c=o,f=L(L({},this._getPatchMapForMaterial()),this.__csm.patchMap);Object.entries(Yn).forEach(function(v){var _=Ue(v,2),M=_[0],P=_[1],y=P.find(function(k){return We(r,k)});if(y&&!s[M])throw new Error('CSM: Property "'.concat(M,'" is required to use output "').concat(y,'". Shader cannot compile.'))}),Object.entries(Wn).forEach(function(v){var _=Ue(v,2),M=_[0],P=_[1];c=qe(c,M,P)}),Object.keys(f).forEach(function(v){Object.keys(f[v]).forEach(function(_){var M=qn[v],P=s.__csm.type;if(v==="*"||We(r,v))if(!M||Array.isArray(M)&&M.includes(P)||M==="*")c=qe(c,_,f[v][_]);else throw new Error("CSM: ".concat(v," is not available in ").concat(P,". Shader cannot compile."))})});var u="csm_main_"+this.__csm.instanceID.replace(/-/g,"_"),d=r.replace(/void\s+main\s*\(\s*\)/g,"void ".concat(u,"()")),l=r.includes("void main()"),p=c.includes("// #_CSM_#");return l&&(p&&this.__csm.isAlreadyExtended?(c=c.replace("void main() {",`
            `.concat(d,`
            
            void main() {
          `)),c=lr(c,"// #_CSM_#",`
            `.concat(u,`();
            // #_CSM_#
          `))):c=c.replace("void main() {",`
            #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
              `.concat(i?er:Qn,`
              #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
            #endif
    
            `).concat(Zn,`
    
            `).concat(d,`
            
            void main() {
              #ifndef CSM_IS_DEFAULTS_DEFINED
                `).concat(Xn,`
                #define CSM_IS_DEFAULTS_DEFINED 1
              #endif
              
              #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
                `).concat(i?tr:Jn,`
                #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
              #endif
  
              `).concat(u,`();
              // #_CSM_#
          `))),c}},{key:"_getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"_getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return Kn;default:return Gn}}}]),t}(_e.Material),ur=`vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
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
}`,mr=`const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
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
}`;const{defineComponent:fr}=await m("vue"),{unref:dr,openBlock:pr,createElementBlock:vr}=await m("vue"),hr=["object"],gr=await m("three"),{watchEffect:_r}=await m("vue"),ei=fr({__name:"index",props:{color:{default:"#ff00fc"},metalness:{default:1},roughness:{default:1},clearcoat:{default:1},clearcoatRoughness:{default:0}},setup(a){const e=a,t={baseMaterial:gr.MeshPhysicalMaterial,metalness:e.metalness,roughness:e.roughness,clearcoat:e.clearcoat,clearcoatRoughness:e.clearcoatRoughness,color:e.color,vertexShader:`
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
			${mr}
      ${ur}
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
		`},n=new cr(t);return _r(()=>{n.color.setStyle(e.color),n.metalness=e.metalness,n.roughness=e.roughness,n.clearcoat=e.clearcoat,n.clearcoatRoughness=e.clearcoatRoughness}),(r,o)=>(pr(),vr("primitive",{object:dr(n)},null,8,hr))}}),{watch:yr}=await m("vue");async function ti(a){const e=a.split("/").pop();we.getResource("TextureLoader",a,e);const t=we.getReactiveItem(e);return new Promise((n,r)=>{const o=t();if(o){n(o);return}const i=yr(()=>t(),s=>{s?(i(),n(s)):r(new Error("useTexture 加载失败，未得到模型"))})})}function xr(a){const e={nodes:{},materials:{}};return a&&a.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}async function Ye(a,e,t,n,r){const o=new a;return r&&r(o),t&&t(o),await new Promise((i,s)=>{o.load(e,c=>{const f=c;f.scene&&Object.assign(f,xr(f.scene)),i(f)},n,c=>{s(c)})})}const{TextureLoader:Mr}=await m("three"),Sr=Array.isArray;async function ai(a,e){const t=new Mr(e),n=r=>new Promise((o,i)=>{t.load(r,s=>o(s),()=>null,()=>{i(new Error("[useTextures] - Failed to load texture"))})});if(Sr(a)){const r=await Promise.all(a.map(o=>n(o)));return a.length>1?r:r[0]}else{const{map:r,displacementMap:o,normalMap:i,roughnessMap:s,metalnessMap:c,aoMap:f,alphaMap:u,matcap:d}=a;return{map:r?await n(r):null,displacementMap:o?await n(o):null,normalMap:i?await n(i):null,roughnessMap:s?await n(s):null,metalnessMap:c?await n(c):null,aoMap:f?await n(f):null,alphaMap:u?await n(u):null,matcap:d?await n(d):null}}}const te={color:"#ffffff",emissive:"#000000",emissiveIntensity:.02,metalness:1,roughness:1,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:2,ior:1.52,specularIntensity:1,liquidMetalIntensity:1,normalStrength:1.5,displacementStrength:.065,fresnelStrength:1.4,uScale:1e-5,uShapeReactivity:2.2,uDistortion:1.35,uEdgeProtection:.32,iridescence:.85,iridescenceIOR:1.32,iridescenceThicknessMin:759,iridescenceThicknessMax:800},br={color:{name:"基础颜色",com:"ColorPicker"},emissive:{name:"发光颜色",com:"ColorPicker"},emissiveIntensity:{name:"发光强度",com:"Slider",min:0,max:2,step:.01},metalness:{name:"金属度",com:"Slider",min:0,max:1,step:.01},roughness:{name:"粗糙度",com:"Slider",min:0,max:1,step:.01},clearcoat:{name:"清漆层",com:"Slider",min:0,max:1,step:.01},clearcoatRoughness:{name:"清漆粗糙度",com:"Slider",min:0,max:1,step:.01},envMapIntensity:{name:"环境反射",com:"Slider",min:0,max:5,step:.01},ior:{name:"IOR",com:"Slider",min:1,max:2.333,step:.01},specularIntensity:{name:"高光强度",com:"Slider",min:0,max:2,step:.01},liquidMetalIntensity:{name:"液态金属强度",com:"Slider",min:0,max:1.5,step:.01},normalStrength:{name:"法线扰动",com:"Slider",min:0,max:1.5,step:.01},displacementStrength:{name:"位移强度",com:"Slider",min:0,max:.35,step:.001},fresnelStrength:{name:"边缘高光",com:"Slider",min:0,max:3,step:.01},uScale:{name:"Ripple Scale",com:"Slider",min:1e-4,max:.015,step:1e-4},uShapeReactivity:{name:"Shape Reactivity",com:"Slider",min:0,max:5,step:.01},uDistortion:{name:"Distortion",com:"Slider",min:0,max:5,step:.01},uEdgeProtection:{name:"Edge Sharpness",com:"Slider",min:0,max:1,step:.01},iridescence:{name:"Intensity",com:"Slider",min:0,max:1,step:.01},iridescenceIOR:{name:"Index of Refraction",com:"Slider",min:1,max:3,step:.01},iridescenceThicknessMin:{name:"Thickness Min",com:"Slider",min:0,max:1500,step:1},iridescenceThicknessMax:{name:"Thickness Max",com:"Slider",min:0,max:1500,step:1}},wr=[{title:"Liquid Metal",fields:["liquidMetalIntensity","normalStrength","displacementStrength","fresnelStrength","color","emissive","envMapIntensity"]},{title:"Fluid Dynamics",fields:["uScale","uShapeReactivity","uDistortion","uEdgeProtection"]},{title:"Iridescence (Rainbow)",fields:["iridescence","iridescenceIOR","iridescenceThicknessMin","iridescenceThicknessMax"]},{title:"Base Material",fields:["roughness","metalness","clearcoat"]}];function ni(a={}){return{...te,...a}}const{FrontSide:it,BackSide:Pr,DoubleSide:kr,NormalBlending:st,AdditiveBlending:Rr,SubtractiveBlending:Cr,MultiplyBlending:Tr,NoBlending:Er}=await m("three"),ri=[{label:"FrontSide",value:it},{label:"BackSide",value:Pr},{label:"DoubleSide",value:kr}],oi=[{label:"NoBlending",value:Er},{label:"NormalBlending",value:st},{label:"AdditiveBlending",value:Rr},{label:"SubtractiveBlending",value:Cr},{label:"MultiplyBlending",value:Tr}],z={color:"#ffffff",map:null,wireframe:!1,opacity:1,transparent:!1,side:it,alphaTest:0,blending:st,depthTest:!0,depthWrite:!0},Ir={emissive:"#000000",emissiveIntensity:1,emissiveMap:null,reflectivity:1,refractionRatio:.98},Dr={emissive:"#000000",emissiveIntensity:1,specular:"#111111",shininess:30,specularMap:null,emissiveMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1},displacementMap:null,displacementScale:1,displacementBias:0},lt={emissive:"#000000",emissiveIntensity:1,metalness:.5,roughness:.5,metalnessMap:null,roughnessMap:null,normalMap:null,normalScale:{x:1,y:1},bumpMap:null,bumpScale:1,displacementMap:null,displacementScale:1,displacementBias:0,aoMap:null,aoMapIntensity:1,envMap:null,envMapIntensity:1},Ar={...lt,clearcoat:.2,clearcoatRoughness:.1,reflectivity:.5,transmission:0,ior:1.5,thickness:.01,attenuationColor:"#ffffff",attenuationDistance:0,specularIntensity:1,specularColor:"#ffffff",sheen:0,sheenColor:"#ffffff",clearcoatNormalMap:null,clearcoatNormalScale:{x:1,y:1}},Br={gradientMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1}},zr={metalness:.5,roughness:0},Fr={color:"#ffffff",roughness:0,reflectivity:.5,attenuationColor:"#ffffff",attenuationDistance:2,chromaticAberration:.05,anisotropicBlur:.1,distortion:0,temporalDistortion:0,backside:!0,thickness:1,backsideThickness:.5},Or={color:"#ff00fc",metalness:1,roughness:1,clearcoat:1,clearcoatRoughness:0},Nr={...te},$r={color:"#B520A9",uEdgeColor:"#4d9bff",uEdge:6,uFreq:.41,uAmp:20,uProgress:-1,metalness:1,roughness:1},ct={MeshBasicMaterial:{component:"TresMeshBasicMaterial",props:{...z}},MeshLambertMaterial:{component:"TresMeshLambertMaterial",props:{...z,...Ir}},MeshPhongMaterial:{component:"TresMeshPhongMaterial",props:{...z,...Dr}},MeshStandardMaterial:{component:"TresMeshStandardMaterial",props:{...z,...lt}},MeshPhysicalMaterial:{component:"TresMeshPhysicalMaterial",props:{...z,...Ar}},MeshToonMaterial:{component:"TresMeshToonMaterial",props:{...z,...Br}},MeshGlassMaterial:{component:async()=>(await q(()=>import("./index.74ZWg8L31776759150043.js").then(e=>e.trescientos),__vite__mapDeps([0,1,2,3]),import.meta.url)).MeshGlassMaterial,props:{...z,...zr}},TransmissionMaterial:{component:async()=>(await q(()=>import("./index.CLHaA7Z91776759150043.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).TransmissionMaterial,props:{...Fr}},ClearcoatMaterial:{component:async()=>(await q(()=>import("./index.CLHaA7Z91776759150043.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).ClearcoatMaterial,props:{...Or}},LiquidMetalMaterial:{component:async()=>(await q(()=>import("./index.CLHaA7Z91776759150043.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).LiquidMetalMaterial,props:{...Nr}},dissolveEffectMaterial:{component:async()=>(await q(()=>import("./index.Dd18YEZf1776759150043.js"),__vite__mapDeps([12,13,1,0,2,3,14,15,16,17,18,19]),import.meta.url)).dissolveEffectMaterial,props:{...$r}}},{markRaw:Lr}=await m("vue");async function jr(a){let t=ct[a].component;return typeof t=="function"&&(t=Lr(await t())),t}function Hr(a){return ct[a].props}const{defineComponent:Vr}=await m("vue"),{resolveDynamicComponent:Ur,mergeProps:qr,openBlock:Wr,createBlock:Gr}=await m("vue"),{ref:ve,watch:Ze}=await m("vue"),Kr=Vr({__name:"index",props:{type:{},materialProps:{}},setup(a){const e=a,t=ve(null),n=ve({}),r=ve(null);let o=!1;return Ze(()=>e.type,async i=>{if(r.value)try{r.value.dispose?.(),console.log("已释放旧材质组件")}catch(s){console.warn("释放材质组件失败:",s)}o=!1,t.value=await jr(i),o=!0,n.value={...Hr(i),...e.materialProps}},{immediate:!0}),Ze(()=>[e.type,e.materialProps],([i,s],[c])=>{i===c&&o&&(n.value=s)},{deep:!0}),(i,s)=>(Wr(),Gr(Ur(t.value),qr(n.value,{ref_key:"materialRef",ref:r}),null,16))}}),Xe={Box:{params:[{key:"width",label:"width",type:"number",default:1},{key:"height",label:"height",type:"number",default:1},{key:"depth",label:"depth",type:"number",default:1},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:6,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:6,step:1},{key:"depthSegments",label:"depthSegments",type:"number",default:1,min:1,max:6,step:1}]},Circle:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:32,min:3,max:64,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cone:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cylinder:{params:[{key:"radiusTop",label:"radiusTop",type:"number",default:1,min:0},{key:"radiusBottom",label:"radiusBottom",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Dodecahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Icosahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Octahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Plane:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:64,step:1}]},Ring:{params:[{key:"innerRadius",label:"innerRadius",type:"number",default:.5,min:0},{key:"outerRadius",label:"outerRadius",type:"number",default:1,min:0},{key:"thetaSegments",label:"thetaSegments",type:"number",default:8,min:3,max:64,step:1},{key:"phiSegments",label:"phiSegments",type:"number",default:1,min:1,max:16,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},RoundedBox:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"depth",label:"depth",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:2,min:0,max:8,step:.1},{key:"radius",label:"radius",type:"number",default:.1,min:0,max:1,step:.01}]},Sphere:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:32,min:3,max:128,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:16,min:2,max:128,step:1},{key:"phiStart",label:"phiStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"phiLength",label:"phiLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI,min:.1,max:Math.PI,step:.01}]},Tetrahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Torus:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"arc",label:"arc",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},TorusKnot:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:128,step:1},{key:"p",label:"p",type:"number",default:2,min:1,max:10,step:.1},{key:"q",label:"q",type:"number",default:3,min:1,max:10,step:.1}]}},{defineComponent:Yr}=await m("vue"),{unref:A,createVNode:Q,renderList:Zr,Fragment:Xr,openBlock:H,createElementBlock:he,mergeProps:Qr,createBlock:ge,createCommentVNode:Qe,withCtx:J}=await m("vue"),Jr={class:"shape-configurator"},{ref:eo,reactive:to,computed:Je,watch:ao}=await m("vue"),ii=Yr({__name:"shapeConfigurator",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:e}){const t=a,n=e,r=Object.keys(Xe).map(d=>({label:d,value:d})),o=eo(t.modelValue?.type??"Box"),i=Je(()=>Xe[o.value]),s=to({});function c(d=!0){const l=i.value;if(l){for(const p of l.params)if(s[p.key]=p.default,d&&t.modelValue&&t.modelValue.args){const v=l.params.findIndex(_=>_.key===p.key);v!==-1&&t.modelValue.args[v]!==void 0&&(s[p.key]=t.modelValue.args[v])}}}const f=Je(()=>{const d=i.value;return d?d.params.map(l=>s[l.key]):[]});ao(()=>({type:o.value,args:f.value}),d=>n("update:modelValue",d),{deep:!0,immediate:!0}),c();function u(d){return d.type!=="number"?{}:{min:d.min??.1,max:d.max??5,step:d.step??.1}}return(d,l)=>(H(),he("div",Jr,[Q(A(zt),null,{default:J(()=>[Q(A(Ft),{vertical:"",size:"small"},{default:J(()=>[Q(A(Ot),{value:o.value,"onUpdate:value":[l[0]||(l[0]=p=>o.value=p),l[1]||(l[1]=p=>c(!1))],options:A(r),placeholder:"选择图形类型"},null,8,["value","options"]),i.value?(H(),ge(A(Lt),{key:0,size:"small","label-placement":"left","label-width":100},{default:J(()=>[(H(!0),he(Xr,null,Zr(i.value.params,p=>(H(),he("div",{key:p.key,style:{"margin-bottom":"12px"}},[Q(A(jt),{label:p.label},{default:J(()=>[p.type==="number"?(H(),ge(A(Nt),Qr({key:0,size:"tiny",value:s[p.key],"onUpdate:value":v=>s[p.key]=v},{ref_for:!0},u(p),{style:{width:"100%"}}),null,16,["value","onUpdate:value"])):p.type==="boolean"?(H(),ge(A($t),{key:1,size:"small",value:s[p.key],"onUpdate:value":v=>s[p.key]=v},null,8,["value","onUpdate:value"])):Qe("",!0)]),_:2},1032,["label"])]))),128))]),_:1})):Qe("",!0)]),_:1})]),_:1})]))}}),{defineComponent:no}=await m("vue"),{renderSlot:ro,resolveDynamicComponent:oo,withCtx:io,openBlock:so,createBlock:lo,createCommentVNode:co}=await m("vue"),{computed:uo}=await m("vue"),mo=no({__name:"shapeRenderer",props:{modelValue:{}},setup(a){const e={Box:At,Circle:Dt,Cone:It,Cylinder:Et,Dodecahedron:Tt,Icosahedron:Ct,Octahedron:Rt,Plane:kt,Ring:Pt,RoundedBox:wt,Sphere:bt,Tetrahedron:St,Torus:Mt,TorusKnot:xt},t=a,n=uo(()=>e[t.modelValue?.type]??null);return(r,o)=>n.value?(so(),lo(oo(n.value),{key:0,args:r.modelValue.args},{default:io(()=>[ro(r.$slots,"default")]),_:3},8,["args"])):co("",!0)}}),{defineComponent:fo}=await m("vue"),{unref:et,createVNode:po,withCtx:vo,openBlock:ho,createBlock:go}=await m("vue"),si=fo({__name:"forEditor",props:{shape:{default:{type:"Box",args:[2,1,1]}},materialType:{type:String,default:"MeshStandardMaterial"},materialProps:{type:Object,required:!0}},setup(a){return(e,t)=>(ho(),go(et(mo),{position:[0,.5,0],modelValue:a.shape},{default:vo(()=>[po(et(Kr),{type:a.materialType,"material-props":a.materialProps},null,8,["type","material-props"])]),_:1},8,["modelValue"]))}}),{defineComponent:_o}=await m("vue"),{openBlock:yo,createElementBlock:xo}=await m("vue"),Mo=["object"],{shallowRef:So,watch:tt,useAttrs:bo}=await m("vue"),wo=await m("three"),li=_o({__name:"customShaderMaterial",props:{baseMaterial:{},vertexShader:{},fragmentShader:{},uniforms:{}},setup(a){const e=bo(),t=a,n=So(null);return tt(()=>t.baseMaterial,r=>{n.value&&n.value.dispose(),n.value=new nt({baseMaterial:wo[r],vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,uniforms:t.uniforms})},{immediate:!0}),tt(()=>({...e}),r=>{const o=n.value;o&&Object.keys(r).forEach(i=>{if(!(i in o))return;const s=r[i];s===!0&&typeof o[i]!="boolean"||o[i]!==s&&(o[i]=s,o.needsUpdate=!0)})},{immediate:!0,deep:!1}),(r,o)=>(yo(),xo("primitive",{object:n.value},null,8,Mo))}}),ut=`
vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0);
    vec4 p = permute(
        permute(
            permute(i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)
        )
        + i.x + vec4(0.0, i1.x, i2.x, 1.0)
    );

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;

    return 42.0 * dot(
        m * m,
        vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))
    );
}

float fbm(vec3 p, float detail) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {
        float enabled = step(float(i) + 0.5, detail);
        value += amplitude * snoise(p * frequency) * enabled;
        frequency *= 2.0;
        amplitude *= 0.5;
    }

    return value * 0.5 + 0.5;
}
`,Po=`
varying vec3 vLocalPosition;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying float vShapeMask;
varying float vRippleHeight;

uniform float uTime;
uniform float uDisplacementStrength;
uniform float uScale;
uniform float uShapeReactivity;
uniform float uDistortion;
uniform float uEdgeProtection;

${ut}

float getRippleFrequency() {
    return 1.0 / max(uScale * 250.0, 0.001);
}

float getShapeMask(vec3 worldPos, vec3 worldNormal, vec3 viewDirection) {
    float silhouette = 1.0 - abs(dot(normalize(worldNormal), normalize(viewDirection)));
    float reactivePower = mix(0.8, 4.0, clamp(uShapeReactivity / 5.0, 0.0, 1.0));
    return pow(clamp(silhouette, 0.0, 1.0), reactivePower);
}

float getLiquidHeight(vec3 samplePos, float time) {
    float n1 = snoise(samplePos + vec3(time * 0.22, -time * 0.15, time * 0.11));
    float n2 = snoise(samplePos * 1.8 + vec3(-time * 0.08, time * 0.17, -time * 0.13));
    float n3 = fbm(samplePos.yzx * 1.25 + vec3(time * 0.05, -time * 0.07, time * 0.09), 5.0) * 2.0 - 1.0;
    return n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
}

void main() {
    float time = uTime;
    float rippleFrequency = getRippleFrequency();
    vec3 liquidWorldPosition = (modelMatrix * vec4(csm_Position, 1.0)).xyz;
    vec3 liquidWorldNormal = normalize(normalMatrix * csm_Normal);
    vec3 viewDirection = normalize(cameraPosition - liquidWorldPosition);
    float shapeMask = getShapeMask(liquidWorldPosition, liquidWorldNormal, viewDirection);
    float edgeProtection = mix(1.0, 1.0 - shapeMask, clamp(uEdgeProtection, 0.0, 1.0));
    vec3 rippleSample = liquidWorldPosition * rippleFrequency;

    float liquidHeight = getLiquidHeight(rippleSample, time) * (0.35 + clamp(uDistortion, 0.0, 5.0) * 0.25);
    float displacement = liquidHeight * uDisplacementStrength * edgeProtection;

    csm_Position += csm_Normal * displacement;

    vLocalPosition = csm_Position;
    vWorldPosition = (modelMatrix * vec4(csm_Position, 1.0)).xyz;
    vViewDirection = normalize(cameraPosition - vWorldPosition);
    vShapeMask = shapeMask;
    vRippleHeight = liquidHeight;
}
`,ko=`
varying vec3 vLocalPosition;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying float vShapeMask;
varying float vRippleHeight;

uniform float uTime;
uniform float uLiquidMetalIntensity;
uniform float uNormalStrength;
uniform float uFresnelStrength;
uniform float uScale;
uniform float uShapeReactivity;
uniform float uDistortion;
uniform float uEdgeProtection;

${ut}

float saturateFloat(float value) {
    return clamp(value, 0.0, 1.0);
}

float getRippleFrequency() {
    return 1.0 / max(uScale * 250.0, 0.001);
}

float getLiquidHeight(vec3 samplePos, float time) {
    float n1 = snoise(samplePos + vec3(time * 0.22, -time * 0.15, time * 0.11));
    float n2 = snoise(samplePos * 1.8 + vec3(-time * 0.08, time * 0.17, -time * 0.13));
    float n3 = fbm(samplePos.yzx * 1.25 + vec3(time * 0.05, -time * 0.07, time * 0.09), 5.0) * 2.0 - 1.0;
    return n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
}

void main() {
    float time = uTime;
    float rippleFrequency = getRippleFrequency();
    float distortionStrength = clamp(uDistortion, 0.0, 5.0);
    float edgeProtection = mix(1.0, 1.0 - vShapeMask, clamp(uEdgeProtection, 0.0, 1.0));

    vec3 sampleBase = vWorldPosition * rippleFrequency;
    float heightX = getLiquidHeight(sampleBase + vec3(0.015, 0.0, 0.0), time);
    float heightY = getLiquidHeight(sampleBase + vec3(0.0, 0.015, 0.0), time);
    float heightZ = getLiquidHeight(sampleBase + vec3(0.0, 0.0, 0.015), time);

    vec3 liquidVector = vec3(heightX - vRippleHeight, heightY - vRippleHeight, heightZ - vRippleHeight);
    liquidVector *= (0.45 + distortionStrength * 0.18) * edgeProtection;

    float reactiveMask = saturateFloat(vShapeMask * (0.35 + clamp(uShapeReactivity, 0.0, 5.0) * 0.2));
    float liquidMask = saturateFloat(0.55 + vRippleHeight * 0.45 + reactiveMask * 0.35);
    float fresnel = pow(1.0 - saturateFloat(dot(normalize(csm_FragNormal + liquidVector * 0.08), normalize(vViewDirection))), 3.0);

    vec3 liquidHighlight = mix(csm_DiffuseColor.rgb, vec3(1.0), saturateFloat(fresnel * uFresnelStrength));

    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, liquidHighlight, liquidMask * 0.42 * uLiquidMetalIntensity);
    csm_Bump = liquidVector * uNormalStrength * (0.35 + liquidMask * 0.65) * uLiquidMetalIntensity;
    csm_ClearcoatNormal = liquidVector * uNormalStrength * 0.12 * uLiquidMetalIntensity;
    csm_Roughness = clamp(mix(csm_Roughness, csm_Roughness * (0.38 - liquidMask * 0.18) + 0.025, uLiquidMetalIntensity), 0.02, 1.0);
    csm_Metalness = clamp(csm_Metalness + liquidMask * 0.06 * uLiquidMetalIntensity, 0.0, 1.0);
    csm_Clearcoat = clamp(csm_Clearcoat + liquidMask * 0.14 * uLiquidMetalIntensity, 0.0, 1.0);
    csm_ClearcoatRoughness = clamp(csm_ClearcoatRoughness * (1.0 - liquidMask * 0.48 * uLiquidMetalIntensity) + 0.02 * reactiveMask, 0.0, 1.0);
    csm_Iridescence = clamp(csm_Iridescence * (0.85 + liquidMask * 0.3 + fresnel * 0.2), 0.0, 1.0);
}
`,{mergeDefaults:Ro,defineComponent:Co}=await m("vue"),{unref:To,openBlock:Eo,createElementBlock:Io}=await m("vue"),Do=["object"],at=await m("three"),{watchEffect:Ao,onUnmounted:Bo}=await m("vue"),ci=Co({__name:"index",props:Ro({color:{},emissive:{},emissiveIntensity:{},metalness:{},roughness:{},clearcoat:{},clearcoatRoughness:{},envMapIntensity:{},ior:{},specularIntensity:{},liquidMetalIntensity:{},normalStrength:{},displacementStrength:{},fresnelStrength:{},uScale:{},uShapeReactivity:{},uDistortion:{},uEdgeProtection:{},iridescence:{},iridescenceIOR:{},iridescenceThicknessMin:{},iridescenceThicknessMax:{}},te),setup(a,{expose:e}){const t=a,n={uTime:{value:0},uLiquidMetalIntensity:{value:t.liquidMetalIntensity},uNormalStrength:{value:t.normalStrength},uDisplacementStrength:{value:t.displacementStrength},uFresnelStrength:{value:t.fresnelStrength},uScale:{value:t.uScale},uShapeReactivity:{value:t.uShapeReactivity},uDistortion:{value:t.uDistortion},uEdgeProtection:{value:t.uEdgeProtection}},r=new nt({baseMaterial:at.MeshPhysicalMaterial,vertexShader:Po,fragmentShader:ko,uniforms:n,color:t.color,emissive:t.emissive,emissiveIntensity:t.emissiveIntensity,metalness:t.metalness,roughness:t.roughness,clearcoat:Math.max(t.clearcoat,1e-4),clearcoatRoughness:t.clearcoatRoughness,envMapIntensity:t.envMapIntensity,ior:t.ior,specularIntensity:t.specularIntensity,iridescence:Math.max(t.iridescence,1e-4),iridescenceIOR:t.iridescenceIOR,iridescenceThicknessRange:[t.iridescenceThicknessMin,t.iridescenceThicknessMax]});r.userData.uScale=r.uniforms.uScale,r.userData.uShapeReactivity=r.uniforms.uShapeReactivity,r.userData.uDistortion=r.uniforms.uDistortion,r.userData.uEdgeProtection=r.uniforms.uEdgeProtection;const{onBeforeRender:o}=V();return o(({elapsed:i})=>{r.uniforms.uTime.value=i}),Ao(()=>{r.color.setStyle(t.color),r.emissive.setStyle(t.emissive),r.emissiveIntensity=t.emissiveIntensity,r.metalness=t.metalness,r.roughness=t.roughness,r.clearcoat=Math.max(t.clearcoat,1e-4),r.clearcoatRoughness=t.clearcoatRoughness,r.envMapIntensity=t.envMapIntensity,r.ior=t.ior,r.specularIntensity=t.specularIntensity,r.iridescence=Math.max(t.iridescence,1e-4),r.iridescenceIOR=t.iridescenceIOR,r.iridescenceThicknessRange=[Math.min(t.iridescenceThicknessMin,t.iridescenceThicknessMax),Math.max(t.iridescenceThicknessMin,t.iridescenceThicknessMax)],r.uniforms.uLiquidMetalIntensity.value=t.liquidMetalIntensity,r.uniforms.uNormalStrength.value=t.normalStrength,r.uniforms.uDisplacementStrength.value=t.displacementStrength,r.uniforms.uFresnelStrength.value=t.fresnelStrength,r.uniforms.uScale.value=t.uScale,r.uniforms.uShapeReactivity.value=t.uShapeReactivity,r.uniforms.uDistortion.value=t.uDistortion,r.uniforms.uEdgeProtection.value=t.uEdgeProtection}),Bo(()=>{r.dispose()}),e({root:r,constructor:at.MeshPhysicalMaterial,defaults:te,controlGroups:wr,schema:br,dispose:()=>r.dispose()}),(i,s)=>(Eo(),Io("primitive",{object:To(r)},null,8,Do))}});export{Jo as CientosShaderMaterial,$a as MeshDiscardMaterial,ze as MeshTransmissionMaterial,Wo as _sfc_main,Go as _sfc_main$1,si as _sfc_main$10,li as _sfc_main$11,ci as _sfc_main$12,ii as _sfc_main$13,Ko as _sfc_main$2,Yo as _sfc_main$3,Zo as _sfc_main$4,Xo as _sfc_main$5,Qo as _sfc_main$6,ei as _sfc_main$7,Kr as _sfc_main$8,mo as _sfc_main$9,oi as blendingOptions,ni as createLiquidMetalMaterialState,wr as liquidMetalMaterialControlGroups,br as liquidMetalMaterialSchema,ct as materialPresets,ri as sideOptions,Ie as useFBO,Ye as useLoader,ti as useTexture,ai as useTexture$1};
