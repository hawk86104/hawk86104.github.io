const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.BjVPg-2F1784021167877.js","./3d-tiles-renderer.DLbEVYVf1784021167877.js","./runtime-core.esm-bundler.lozGpi4i1784021167877.js","../css/index.OpIsgPhW1784021167877.css","./index.BpOHHYn-1784021167877.js","./index.vue_vue_type_script_setup_true_lang.CP6fotgu1784021167877.js","./utils.sbhH34FI1784021167877.js","./three.webgpu.DIXQBE_31784021167877.js","./three.Cyea0abz1784021167877.js","./index.Bwj8zV871784021167877.js","./useSeek.BLQ2gt3M1784021167877.js","./shapeConfigurator.QzXra1jV1784021167877.js","./index.DyH3OfKI1784021167877.js","./flexiblePipe.vue_vue_type_script_setup_true_lang.z19ZqPgM1784021167877.js","./Resource.cWCVfYj51784021167877.js","./DRACOLoader.SUK-Xlvw1784021167877.js","./HDRLoader.Dw7o6ToM1784021167877.js","./buildFlexiblePipe.B-gUzNX41784021167877.js","./flexiblePipe2.vue_vue_type_script_setup_true_lang.ClDmLxzC1784021167877.js","./material.vue_vue_type_script_setup_true_lang.CkVOQ-Sq1784021167877.js"])))=>i.map(i=>d[i]);
import{importShared as f}from"./3d-tiles-renderer.DLbEVYVf1784021167877.js";import{useTres as F,RGBELoader as Ce,useLoop as N,objectHash as bt,__vitePreload as L,TorusKnot_default as Pt,Torus_default as wt,Tetrahedron_default as kt,Sphere_default as Ct,RoundedBox_default as Tt,Ring_default as Rt,Plane_default as It,Octahedron_default as Et,Icosahedron_default as At,Dodecahedron_default as Dt,Cylinder_default as Bt,Cone_default as zt,Circle_default as jt,Box_default as Ot}from"./index.BjVPg-2F1784021167877.js";import{shaderMaterial as be}from"./shaderMaterial.Bw1mHL5d1784021167877.js";import{FullScreenQuad as Ft}from"./Pass.CalcZgKB1784021167877.js";import"./index.vue_vue_type_script_setup_true_lang.CP6fotgu1784021167877.js";import{instance as Te}from"./Resource.cWCVfYj51784021167877.js";import{NCard as Nt}from"./Card.DSExUGEk1784021167877.js";import{NSpace as $t}from"./Space.UUEo6-Xn1784021167877.js";import{NSelect as Lt,NSlider as Vt,NSwitch as Ht}from"./Switch.CXfOhQ_11784021167877.js";import{NForm as Ut,NFormItem as Gt}from"./FormItem.sp8vqI-S1784021167877.js";import{B as Pe}from"./three-custom-shader-material.es.Cu0_sY0U1784021167877.js";const{Scene:Wt,Object3D:qt,Mesh:Yt}=await f("three");class Kt extends qt{constructor(){super(),this.virtualScene=null,this.virtualScene=new Wt}add(...t){return this.virtualScene.add(...t),this}destructor(){this.virtualScene.traverse(t=>{t instanceof Yt&&(t.geometry.dispose(),t.material.dispose(),t.material.map&&t.material.map.dispose(),this.virtualScene.remove(t))}),this.virtualScene=null}}const J={sunset:"venice/venice_sunset_1k.hdr",studio:"studio/poly_haven_studio_1k.hdr",city:"city/canary_wharf_1k.hdr",umbrellas:"outdoor/outdoor_umbrellas_1k.hdr",night:"outdoor/satara_night_1k.hdr",forest:"outood/mossy_forest_1k.hdr",snow:"outdoor/snowy_forest_path_01_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",hangar:"indoor/small_hangar_01_1k.hdr",urban:"indoor/abandoned_games_room_02_1k.hdr",modern:"city/modern_buildings_2_1k.hdr",shangai:"city/shanghai_bund_1k.hdr"},{CubeReflectionMapping:Jt,CubeTextureLoader:Zt,EquirectangularReflectionMapping:Re}=await f("three"),{computed:Ie,ref:se,toRefs:Xt,unref:le,watch:V}=await f("vue"),Qt="https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";async function ea(a,t){const{scene:e,invalidate:n}=F();V(a,()=>{n()});const{preset:o,blur:i,files:s=se([]),path:r=se(""),background:c}=Xt(a),d=se(null),u=Ie(()=>Array.isArray(s.value)),m=Ie(()=>u.value?Zt:Ce);return V([s,r],async([l,p])=>{if(l&&l.length>0&&!o?.value){try{d.value=await Qe(m.value,u.value?[...le(l)]:le(l),v=>{p&&v.setPath(le(p))})}catch(v){throw new Error(`Failed to load environment map: ${v}`)}d.value&&(d.value.mapping=u.value?Jt:Re),n()}},{immediate:!0}),V(d,l=>{e.value&&l&&(e.value.environment=l)},{immediate:!0}),V([c,d],([l,p])=>{if(e.value){let v=t?.value?t.value.texture:p,y=e.value.background;y?.isColor||(y=void 0),e.value.background=l?v:y}},{immediate:!0}),V(()=>i?.value,l=>{e.value&&l&&(e.value.backgroundBlurriness=l)},{immediate:!0}),V(()=>o?.value,async l=>{if(l&&l in J){const p=Qt,v=J[l];try{d.value=await Qe(Ce,v,y=>{p&&y.setPath(p)})}catch(y){throw new Error(`Failed to load environment map: ${y}`)}d.value&&d.value&&(d.value.mapping=Re),n()}else if(l&&!(l in J))throw new Error(`Preset must be one of: ${Object.keys(J).join(", ")}`)},{immediate:!0}),d}const{withAsyncContext:ta,defineComponent:aa}=await f("vue"),{unref:na,renderSlot:oa,openBlock:ra,createElementBlock:ia,createCommentVNode:sa}=await f("vue"),{ref:ce,useSlots:la,onUnmounted:ca,watch:ue,toRaw:ua}=await f("vue"),{WebGLCubeRenderTarget:ma,CubeCamera:fa,HalfFloatType:Ee,UnsignedByteType:da,NearestFilter:Ae}=await f("three"),di=aa({__name:"component",props:{background:{type:[Boolean,String],default:!1},blur:{default:0},files:{default:[]},path:{default:""},preset:{default:void 0},resolution:{default:256},near:{default:1},far:{default:1e3},frames:{default:1/0},useDefaultScene:{type:Boolean,default:!1}},async setup(a,{expose:t}){let e,n;const o=a,i=ce(null);t({texture:i});const{extend:s,renderer:r,scene:c}=F();let d=null,u=ce(null),m=null;const l=ce(null);ca(()=>{l.value?.destructor(),u.value?.dispose()});const{onBeforeRender:p}=N();let v=1;p(()=>{m&&l.value&&u.value&&(o.frames===1/0||v<o.frames)&&(o.useDefaultScene?m.update(r,c.value):m.update(r,ua(l.value.virtualScene)),v++)});const y=([e,n]=ta(()=>ea(o,u)),e=await e,n(),e),S=_=>{_?(c.value.environment=_.texture,o.background&&(c.value.background=_.texture)):(c.value.environment=y.value,o.background&&(c.value.background=y.value))};ue(y,_=>{u.value&&S(u.value)},{immediate:!0,deep:!0}),s({EnvSence:Kt});const w=()=>{u.value?.dispose(),u.value=new ma(o.resolution),m=new fa(o.near,o.far,u.value),o.useDefaultScene?(u.value.texture.type=da,u.value.texture.generateMipmaps=!1,u.value.texture.minFilter=Ae,u.value.texture.magFilter=Ae):u.value.texture.type=Ee,S(u.value)};return ue(()=>la().default,_=>{if(_&&(!u.value||u.value.texture.type!==Ee)&&(d=_(),Array.isArray(d)&&d.length>0&&typeof d[0]?.type!="symbol")){w();return}u.value?.dispose(),u.value=null,S(null)},{immediate:!0,deep:!0}),i.value=y,ue(()=>o.useDefaultScene,_=>{u.value&&w()}),(_,k)=>na(u)?(ra(),ia("TresEnvSence",{key:0,ref_key:"envSence",ref:l},[oa(_.$slots,"default")],512)):sa("",!0)}}),{defineComponent:pa}=await f("vue"),{openBlock:Y,createElementBlock:Z,createBlock:va,unref:ha,createElementVNode:ga}=await f("vue"),ya={key:0,args:[0,1,64]},_a={key:1,args:[.5,1,64]},xa={key:2},Sa=["toneMapped","map","side","color"],{ref:Ma,watchEffect:ba,onMounted:Pa,watch:wa}=await f("vue"),{Color:ka,DoubleSide:Ca}=await f("three"),pi=pa({__name:"index",props:{args:{default:null},from:{default:"rect"},toneMapped:{type:Boolean,default:!1},map:{default:null},intensity:{default:1},color:{default:new ka(16777215)}},setup(a){const t=a,e=Ma();return ba(()=>{e.value&&(e.value.color.multiplyScalar(t.intensity),e.value.needsUpdate=!0)}),wa(()=>t.color,n=>{e.value&&(e.value.color.set(n),e.value.color.multiplyScalar(t.intensity),e.value.needsUpdate=!0)}),Pa(()=>{}),(n,o)=>(Y(),Z("TresMesh",null,[t.from==="circle"?(Y(),Z("TresRingGeometry",ya)):t.from==="ring"?(Y(),Z("TresRingGeometry",_a)):t.from==="rect"?(Y(),Z("TresPlaneGeometry",xa)):(Y(),va(t.from,{key:3,args:t})),ga("TresMeshBasicMaterial",{ref_key:"material",ref:e,toneMapped:n.toneMapped,map:n.map,side:ha(Ca),color:n.color},null,8,Sa)]))}}),{DepthTexture:Ta,DepthFormat:Ra,UnsignedShortType:Ia,HalfFloatType:Ea,LinearFilter:De,WebGLRenderTarget:Aa}=await f("three"),{isReactive:Da,onBeforeUnmount:Ba,reactive:za,ref:ja,toRefs:Be,watchEffect:Oa,toRaw:me}=await f("vue");function ze(a){const t=ja(null),{height:e,width:n,settings:o,depth:i,isLoop:s}=Da(a)?Be(a):Be(za(a)),{onRender:r}=N(),{camera:c,renderer:d,scene:u,sizes:m}=F();return Oa(()=>{t.value?.dispose(),t.value=new Aa(n?.value||m.width.value,e?.value||m.height.value,{minFilter:De,magFilter:De,type:Ea,...o?.value}),i?.value&&(t.value.depthTexture=new Ta(n?.value||m.width.value,e?.value||m.height.value),t.value.depthTexture.format=Ra,t.value.depthTexture.type=Ia)}),r(()=>{s?.value&&(d.setRenderTarget(me(t.value)),d.clear(),d.render(me(u.value),me(c.value)),d.setRenderTarget(null))}),Ba(()=>{t.value?.dispose()}),t}const H=await f("three");function X(a=1024,t=1024,e){var n=a,o=t,i=e||{};const{samples:s=0,depth:r,...c}=i,d=r??i.depthBuffer;var u=new H.WebGLRenderTarget(n,o,{minFilter:H.LinearFilter,magFilter:H.LinearFilter,type:H.HalfFloatType,...c});return d&&(u.depthTexture=new H.DepthTexture(n,o,H.FloatType)),u.samples=s,u}const g=await f("three"),Fa=a=>a?.isVector3;function je(a=g.FrontSide){const t={value:new g.Matrix4};return Object.assign(new g.MeshNormalMaterial({side:a}),{viewMatrix:t,onBeforeCompile:e=>{e.uniforms.viewMatrix=t,e.fragmentShader=`vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
           return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
         }
`+e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
           normal = inverseTransformDirection( normal, viewMatrix );
`)}})}const Na=be({causticsTexture:null,causticsTextureB:null,color:new g.Color,lightProjMatrix:new g.Matrix4,lightViewMatrix:new g.Matrix4},`varying vec3 vWorldPosition;   
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
   }`),$a=be({cameraMatrixWorld:new g.Matrix4,cameraProjectionMatrixInv:new g.Matrix4,normalTexture:null,depthTexture:null,lightDir:new g.Vector3(0,1,0),lightPlaneNormal:new g.Vector3(0,1,0),lightPlaneConstant:0,near:.1,far:100,modelMatrix:new g.Matrix4,worldRadius:1/40,ior:1.1,bounces:0,resolution:1024,size:10,intensity:.5},`
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
  }`),Oe={depthBuffer:!0,minFilter:g.LinearFilter,magFilter:g.LinearFilter,type:g.UnsignedByteType},fe={minFilter:g.LinearMipmapLinearFilter,magFilter:g.LinearFilter,type:g.FloatType,generateMipmaps:!0};function La(a){const t=je(),e=je(g.BackSide),n=new $a,o=new Ft(n);let i=0;const s=new g.Vector3,r=new g.Frustum,c=new g.Matrix4,d=new g.Plane,u=new g.Vector3,m=new g.Vector3,l=new g.Box3,p=new g.Vector3,v=[],y=[],S=[],w=[],_=new g.Vector3;for(let k=0;k<8;k++)v.push(new g.Vector3),y.push(new g.Vector3),S.push(new g.Vector3),w.push(new g.Vector3);return function(C){const{params:M,helper:j,camera:P,plane:A,normalTarget:q,normalTargetB:oe,causticsTarget:vt,causticsTargetB:ht,scene:D,group:gt}=a();if(M.frames===1/0||M.frames&&i++<M.frames){var we;Fa(M.lightSource)?u.copy(M.lightSource).normalize():M.lightSource&&u.copy(gt.worldToLocal(M.lightSource.getWorldPosition(s)).normalize()),m.copy(u).multiplyScalar(-1),(we=D.parent)==null||we.matrixWorld.identity(),l.setFromObject(D,!0),v[0].set(l.min.x,l.min.y,l.min.z),v[1].set(l.min.x,l.min.y,l.max.z),v[2].set(l.min.x,l.max.y,l.min.z),v[3].set(l.min.x,l.max.y,l.max.z),v[4].set(l.max.x,l.min.y,l.min.z),v[5].set(l.max.x,l.min.y,l.max.z),v[6].set(l.max.x,l.max.y,l.min.z),v[7].set(l.max.x,l.max.y,l.max.z);for(let b=0;b<8;b++)y[b].copy(v[b]);l.getCenter(p),v.map(b=>b.sub(p));const yt=d.set(m,0);v.map((b,E)=>yt.projectPoint(b,S[E]));const _t=S.reduce((b,E)=>b.add(E),s.set(0,0,0)).divideScalar(S.length),$=S.map(b=>b.distanceTo(_t)).reduce((b,E)=>Math.max(b,E)),xt=v.map(b=>b.dot(u)).reduce((b,E)=>Math.max(b,E));P.position.copy(_.copy(u).multiplyScalar(xt).add(p)),P.lookAt(D.localToWorld(p));const St=c.lookAt(P.position,p,s.set(0,1,0));if(P.left=-$,P.right=$,P.top=$,P.bottom=-$,M.near&&(P.near=M.near),M.far)P.far=M.far;else{const b=s.set(0,$,0).applyMatrix4(St),E=(P.position.y+b.y)/u.y;P.far=E}P.updateProjectionMatrix(),P.updateMatrixWorld();const re=y.map((b,E)=>b.add(w[E].copy(u).multiplyScalar(-b.y/u.y))),ie=re.reduce((b,E)=>b.add(E),s.set(0,0,0)).divideScalar(re.length),Mt=2*re.map(b=>Math.hypot(b.x-ie.x,b.z-ie.z)).reduce((b,E)=>Math.max(b,E));A.scale.setScalar(Mt),A.position.copy(ie),j!=null&&j.parent&&j.update(),e.viewMatrix.value=t.viewMatrix.value=P.matrixWorldInverse;const ke=r.setFromProjectionMatrix(c.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse)).planes[4];n.cameraMatrixWorld=P.matrixWorld,n.cameraProjectionMatrixInv=P.projectionMatrixInverse,n.lightDir=m,n.lightPlaneNormal=ke.normal,n.lightPlaneConstant=ke.constant,n.near=P.near,n.far=P.far,M.resolution&&(n.resolution=M.resolution),n.size=$,M.intensity&&(n.intensity=M.intensity),M.worldRadius&&(n.worldRadius=M.worldRadius),D.visible=!0,C.setRenderTarget(q),C.clear(),D.overrideMaterial=t,C.render(D,P),C.setRenderTarget(oe),C.clear(),M.backside&&(D.overrideMaterial=e,C.render(D,P)),D.overrideMaterial=null,M.ior&&(n.ior=M.ior),A.material.lightProjMatrix=P.projectionMatrix,A.material.lightViewMatrix=P.matrixWorldInverse,n.normalTexture=q.texture,n.depthTexture=q.depthTexture,C.setRenderTarget(vt),C.clear(),o.render(C),M.backsideIOR&&(n.ior=M.backsideIOR),n.normalTexture=oe.texture,n.depthTexture=oe.depthTexture,C.setRenderTarget(ht),C.clear(),M.backside&&o.render(C),C.setRenderTarget(null),M.causticsOnly&&(D.visible=!1)}}}const Va=(a,{frames:t=1,causticsOnly:e=!1,ior:n=1.1,backside:o=!1,backsideIOR:i=1.1,worldRadius:s=.3125,color:r=new g.Color("white"),intensity:c=.05,resolution:d=2024,lightSource:u=new g.Vector3(1,1,1),near:m=.1,far:l=0}={})=>{const p={frames:t,ior:n,color:r,causticsOnly:e,backside:o,backsideIOR:i,worldRadius:s,intensity:c,resolution:d,lightSource:u,near:m,far:l},v=new g.Group;v.name="caustics_group";const y=new g.OrthographicCamera,S=new g.Scene;S.name="caustics_scene";const w=a,_=new g.CameraHelper(y);_.name="caustics_helper";const k=p.resolution,C=X(k,k,Oe),M=X(k,k,Oe);a.extensions.get("OES_texture_float_linear")||(console.warn("Caustics: OES_texture_float_linear extension is not supported, using HalfFloatType instead."),fe.type=g.HalfFloatType);const j=X(k,k,fe),P=X(k,k,fe),A=new g.Mesh(new g.PlaneGeometry(1,1),new Na({transparent:!0,color:p.color,causticsTexture:j.texture,causticsTextureB:P.texture,blending:g.CustomBlending,blendSrc:g.OneFactor,blendDst:g.SrcAlphaFactor,depthWrite:!1}));A.name="caustics_plane",A.rotation.x=-Math.PI/2,A.renderOrder=2,v.add(S,A),v.updateWorldMatrix(!1,!0);const q=La(()=>({params:p,scene:S,group:v,camera:y,plane:A,normalTarget:C,normalTargetB:M,causticsTarget:j,causticsTargetB:P,helper:_}));return{scene:S,group:v,helper:_,params:p,update:q.bind({},w),normalTarget:C,normalTargetB:M,causticsTarget:j,causticsTargetB:P}},Ha=be({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }"),Fe=await f("three");class Ne extends Fe.MeshPhysicalMaterial{constructor({samples:t=6,transmissionSampler:e=!1,chromaticAberration:n=.05,transmission:o=0,_transmission:i=1,transmissionMap:s=null,roughness:r=0,thickness:c=0,thicknessMap:d=null,attenuationDistance:u=1/0,attenuationColor:m=new Fe.Color("white"),anisotropicBlur:l=.1,time:p=0,distortion:v=0,distortionScale:y=.5,temporalDistortion:S=0,buffer:w=null}={}){super(),this.uniforms={chromaticAberration:{value:n},transmission:{value:o},_transmission:{value:i},transmissionMap:{value:s},roughness:{value:r},thickness:{value:c},thicknessMap:{value:d},attenuationDistance:{value:u},attenuationColor:{value:m},anisotropicBlur:{value:l},time:{value:p},distortion:{value:v},distortionScale:{value:y},temporalDistortion:{value:S},buffer:{value:w}},this.onBeforeCompile=_=>{_.uniforms={..._.uniforms,...this.uniforms},e?_.defines.USE_SAMPLER="":_.defines.USE_TRANSMISSION="",_.fragmentShader=`
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
`+_.fragmentShader,_.fragmentShader=_.fragmentShader.replace("#include <transmission_pars_fragment>",`
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
`),_.fragmentShader=_.fragmentShader.replace("#include <transmission_fragment>",`  
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
        for (float i = 0.0; i < ${t}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${t})) , material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${t})), material.thickness + thickness_smear * (i + randomCoords) / float(${t}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${t}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(_=>Object.defineProperty(this,_,{get:()=>this.uniforms[_].value,set:k=>this.uniforms[_].value=k}))}}const{defineComponent:Ua}=await f("vue"),{unref:$e,openBlock:Ga,createElementBlock:Wa}=await f("vue"),qa=["buffer","side"],{shallowRef:Le,nextTick:Ya,onMounted:Ka}=await f("vue"),{BackSide:Ja,DoubleSide:Za}=await f("three"),Xa=0,vi=Ua({__name:"index",props:{backside:{type:Boolean,default:!0},thickness:{default:1},backsideThickness:{default:.5},fboResolution:{default:256}},setup(a,{expose:t}){const e=Le(),{extend:n,scene:o,renderer:i,camera:s}=F(),r=Le(),c=a;n({MeshTransmissionMaterial:Ne});function d(_,k){let C;return _.traverse(M=>{M.isMesh&&M.material&&M.material.uuid===k&&(C=M)}),C}const u=new Ha,{onBeforeRender:m}=N(),l=ze({width:c.fboResolution,height:c.fboResolution,isLoop:!1}),p=ze({width:c.fboResolution,height:c.fboResolution,isLoop:!1});Ka(async()=>{await Ya(),r.value=d(o.value,e.value.uuid)});let v,y,S,w;return m(({elapsed:_})=>{e.value&&(e.value.time=_,e.value.buffer===p.value.texture&&r.value&&(S=i.toneMapping,v=o.value.background,y=e.value.envMapIntensity,w=r.value.material.side,r.value.material=u,c.backside&&(i.setRenderTarget(l.value),i.render(o.value,s.value),r.value.material=e.value,r.value.material.thickness=c.backsideThickness,r.value.material.buffer=l.value.texture,r.value.material.side=Ja,r.value.material.envMapIntensity=Xa),i.setRenderTarget(p.value),i.render(o.value,s.value),r.value.material.buffer=p.value.texture,r.value.material=e.value,r.value.material.thickness=c.thickness,r.value.material.side=w,r.value.material.envMapIntensity=y,o.value.background=v,i.setRenderTarget(null),i.toneMapping=S))}),t({root:e,constructor:Ne}),(_,k)=>(Ga(),Wa("TresMeshTransmissionMaterial",{ref_key:"MeshTransmissionMaterialClass",ref:e,buffer:$e(p).texture,side:$e(Za)},null,8,qa))}}),{defineComponent:Qa}=await f("vue"),{renderSlot:en,createElementVNode:Ve,openBlock:tn,createElementBlock:an}=await f("vue"),{ref:de,onMounted:nn}=await f("vue"),{Box3:on,Vector3:rn,Sphere:sn}=await f("three"),hi=Qa({__name:"index",props:{precise:{type:Boolean,default:!0},top:{type:Boolean,default:!1},right:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},front:{type:Boolean,default:!1},back:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},disableX:{type:Boolean,default:!1},disableY:{type:Boolean,default:!1},disableZ:{type:Boolean,default:!1}},setup(a){const t=a,e=de(null),n=de(null),o=de(null);return nn(()=>{if(!n.value||!o.value)return;n.value.matrixWorld.identity();const i=new on().setFromObject(o.value,t.precise),s=new rn,r=new sn,c=i.max.x-i.min.x,d=i.max.y-i.min.y,u=i.max.z-i.min.z;i.getCenter(s),i.getBoundingSphere(r);const m=t.top?d/2:t.bottom?-d/2:0,l=t.left?-c/2:t.right?c/2:0,p=t.front?u/2:t.back?-u/2:0;n.value.position.set(t.disable||t.disableX?0:-s.x+l,t.disable||t.disableY?0:-s.y+m,t.disable||t.disableZ?0:-s.z+p)}),(i,s)=>(tn(),an("TresGroup",{ref_key:"gref",ref:e},[Ve("TresGroup",{ref_key:"outer",ref:n},[Ve("TresGroup",{ref_key:"inner",ref:o},[en(i.$slots,"default")],512)],512)],512))}}),{defineComponent:ln}=await f("vue"),{renderSlot:cn,createElementVNode:pe,unref:He,Fragment:un,openBlock:mn,createElementBlock:fn}=await f("vue"),dn=["object"],pn=["object"],{shallowRef:vn,watch:ve,watchEffect:hn}=await f("vue"),gn=await f("three"),gi=ln({__name:"index",props:{color:{default:"#ffffff"},ior:{default:1.1},backsideIOR:{default:1.1},far:{default:15},worldRadius:{default:.3},intensity:{default:.05},causticsOnly:{type:Boolean,default:!1},lightSource:{default:{x:1,y:1,z:1}},resolution:{default:1024}},setup(a){const t=a,{renderer:e}=F(),n=Va(e,{frames:1/0,resolution:t.resolution,worldRadius:t.worldRadius});n.params.backside=!0;const o=vn(null);ve(o,s=>{s&&n.scene.add(s)});const{onBeforeRender:i}=N();return i(({elapsed:s})=>{n.update()}),hn(()=>{t.color&&n.params.color.set(t.color),t.ior&&(n.params.ior=t.ior),t.backsideIOR&&(n.params.backsideIOR=t.backsideIOR),t.far&&(n.params.far=t.far),t.worldRadius&&(n.params.worldRadius=t.worldRadius),t.intensity&&(n.params.intensity=t.intensity)}),ve(()=>t.causticsOnly,s=>{n.params.causticsOnly=s}),ve(()=>t.lightSource,s=>{s&&n.params.lightSource instanceof gn.Vector3&&n.params.lightSource.set(s.x,s.y,s.z)},{deep:!0}),(s,r)=>(mn(),fn(un,null,[pe("TresGroup",{ref_key:"group",ref:o},[cn(s.$slots,"default")],512),pe("primitive",{object:He(n).group,position:[0,.003,0]},null,8,dn),pe("primitive",{object:He(n).helper,visible:!1},null,8,pn)],64))}}),Q=await f("three");function yn(a,t,e){t.traverse(n=>{n.material&&(Array.isArray(n.material)?n.material.forEach(o=>{a.properties.remove(o),o.dispose()}):(a.properties.remove(n.material),n.material.dispose()))}),a.info.programs.length=0,a.compile(t,e)}const _n=({focus:a=0,size:t=25,samples:e=10}={})=>{const n=Q.ShaderChunk.shadowmap_pars_fragment;return Q.ShaderChunk.shadowmap_pars_fragment=Q.ShaderChunk.shadowmap_pars_fragment.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP

    #define PENUMBRA_FILTER_SIZE float(${t})
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
      for(int i = 0; i < ${e}; i ++) {
        offset = (vogelDiskSample(j, ${e}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
      for (int i = 0; i < ${e}; i++) {
        vogelSample = vogelDiskSample(j, ${e}, angle) * texelSize;
        offset = vogelSample * (1.0 + filterRadius * float(${t}));
        shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
        j++;
      }
      #pragma unroll_loop_end
      return shadow * 1.0 / ${e}.0;
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
#if defined( SHADOWMAP_TYPE_PCF )`),(o,i,s)=>{Q.ShaderChunk.shadowmap_pars_fragment=n,yn(o,i,s)}},{defineComponent:xn}=await f("vue"),{watch:Sn}=await f("vue"),{Mesh:Mn}=await f("three"),yi=xn({__name:"index",props:{enabled:{type:Boolean,default:!0},size:{default:25},focus:{default:0},samples:{default:10}},setup(a){const t=a,{camera:e,renderer:n,scene:o}=F();let i=null;const s=r=>{const{enabled:c,size:d,focus:u,samples:m}=r;i&&(i(n,o.value,e.value),i=null),c&&(i=_n({focus:u,size:d,samples:m}),o.value.traverse(l=>{l instanceof Mn&&l.material.dispose()}))};return s(t),Sn(t,()=>{s(t)}),(r,c)=>null}}),bn=await f("three"),{HalfFloatType:Pn,WebGLCubeRenderTarget:wn}=await f("three"),{onBeforeUnmount:kn,ref:K,watch:Ue}=await f("vue");function Cn({resolution:a=256,near:t=.1,far:e=1e3,envMap:n,fog:o}={}){const{renderer:i,scene:s}=F(),r=K(null),c=K(a),d=K(t),u=K(e),m=K(null);Ue(()=>c,y=>{r.value?.dispose(),r.value=new wn(y.value),r.value.texture.type=Pn},{immediate:!0}),Ue([d,u,r],([y,S,w])=>{w&&(m.value=new bn.CubeCamera(y,S,w))},{immediate:!0}),kn(()=>{r.value?.dispose()});let l,p;return{fbo:r,camera:m,update:()=>{l=s.value.fog,p=s.value.background,s.value.background=n||p,s.value.fog=o||l,m.value?.update(i,s.value),s.value.fog=l,s.value.background=p}}}const{defineComponent:Tn}=await f("vue"),{unref:Rn,createElementVNode:Ge,renderSlot:In,openBlock:En,createElementBlock:An}=await f("vue"),Dn=["object"],{ref:Bn}=await f("vue"),_i=Tn({__name:"index",props:{resolution:{default:256},near:{default:.1},far:{default:1e3},envMap:{default:null},fog:{default:null},frames:{default:1/0}},setup(a,{expose:t}){const e=a,{fbo:n,camera:o,update:i}=Cn({resolution:e.resolution,near:e.near,far:e.far,envMap:e.envMap,fog:e.fog}),{onBeforeRender:s}=N();let r=0;const c=Bn(null);return s(()=>{c.value&&(e.frames===1/0||r<e.frames)&&(c.value.visible=!1,i(),c.value.visible=!0,r++)}),t({texture:n.value?.texture}),(d,u)=>(En(),An("TresGroup",null,[Ge("primitive",{object:Rn(o)},null,8,Dn),Ge("TresGroup",{ref_key:"rgRef",ref:c},[In(d.$slots,"default")],512)]))}}),he=await f("three");function xi(a,t,e,n){const o=class extends he.ShaderMaterial{constructor(i={}){const s=Object.entries(a);super({uniforms:s.reduce((r,[c,d])=>{const u=he.UniformsUtils.clone({[c]:{value:d}});return{...r,...u}},{}),vertexShader:t,fragmentShader:e}),this.key="",s.forEach(([r])=>Object.defineProperty(this,r,{get:()=>this.uniforms[r].value,set:c=>this.uniforms[r].value=c})),Object.assign(this,i),n&&n(this)}};return o.key=he.MathUtils.generateUUID(),o}const Se=await f("three");function zn(a,t){if(typeof a!="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var n=e.call(a,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}function lt(a){var t=zn(a,"string");return typeof t=="symbol"?t:String(t)}function x(a,t,e){return t=lt(t),t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function We(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,n)}return e}function U(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?We(Object(e),!0).forEach(function(n){x(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):We(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function jn(a,t){if(a==null)return{};var e={},n=Object.keys(a),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(e[o]=a[o]);return e}function On(a,t){if(a==null)return{};var e=jn(a,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(a,n)&&(e[n]=a[n])}return e}function Fn(a){if(Array.isArray(a))return a}function Nn(a,t){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var n,o,i,s,r=[],c=!0,d=!1;try{if(i=(e=e.call(a)).next,t!==0)for(;!(c=(n=i.call(e)).done)&&(r.push(n.value),r.length!==t);c=!0);}catch(u){d=!0,o=u}finally{try{if(!c&&e.return!=null&&(s=e.return(),Object(s)!==s))return}finally{if(d)throw o}}return r}}function qe(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=a[e];return n}function $n(a,t){if(a){if(typeof a=="string")return qe(a,t);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qe(a,t)}}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(a,t){return Fn(a)||Nn(a,t)||$n(a,t)||Ln()}function Vn(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function Hn(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,lt(n.key),n)}}function Un(a,t,e){return t&&Hn(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function ct(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Me(a,t){return Me=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Me(a,t)}function Gn(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),t&&Me(a,t)}function ae(a){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(a)}function Wn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qn(a,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ct(a)}function Yn(a){var t=Wn();return function(){var n=ae(a),o;if(t){var i=ae(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return qn(this,o)}}var h={diffuse:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",clearcoat:"csm_Clearcoat",clearcoatRoughness:"csm_ClearcoatRoughness",clearcoatNormal:"csm_ClearcoatNormal",pointSize:"csm_PointSize",fragColor:"csm_FragColor",depthAlpha:"csm_DepthAlpha",position:"csm_Position",positionRaw:"csm_PositionRaw"},R,Kn=(R={},x(R,"".concat(h.position),"*"),x(R,"".concat(h.positionRaw),"*"),x(R,"".concat(h.normal),"*"),x(R,"".concat(h.pointSize),["PointsMaterial"]),x(R,"".concat(h.diffuse),"*"),x(R,"".concat(h.fragColor),"*"),x(R,"".concat(h.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(R,"".concat(h.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(R,"".concat(h.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),x(R,"".concat(h.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),x(R,"".concat(h.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),x(R,"".concat(h.depthAlpha),["MeshDepthMaterial"]),x(R,"".concat(h.clearcoat),["MeshPhysicalMaterial"]),x(R,"".concat(h.clearcoatRoughness),["MeshPhysicalMaterial"]),x(R,"".concat(h.clearcoatNormal),["MeshPhysicalMaterial"]),R),Jn={"#include <lights_physical_fragment>":Se.ShaderChunk.lights_physical_fragment},I,G,Zn=(I={},x(I,"".concat(h.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(h.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),x(I,"".concat(h.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(h.position,`;
  `)}),x(I,"".concat(h.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(h.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),x(I,"".concat(h.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(h.pointSize,`;
    `)}),x(I,"".concat(h.diffuse),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(h.diffuse,`;
  `)}),x(I,"".concat(h.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(h.fragColor,`;
  `)}),x(I,"".concat(h.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(h.emissive,`;
    `)}),x(I,"".concat(h.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(h.roughness,`;
    `)}),x(I,"".concat(h.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(h.metalness,`;
    `)}),x(I,"".concat(h.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(h.ao,`;
    `)}),x(I,"".concat(h.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(h.bump," - (dot(").concat(h.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),x(I,"".concat(h.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(h.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(h.depthAlpha,`;
    `)}),x(I,"".concat(h.clearcoat),{"material.clearcoat = clearcoat;":"material.clearcoat = ".concat(h.clearcoat,";")}),x(I,"".concat(h.clearcoatRoughness),{"material.clearcoatRoughness = clearcoatRoughness;":"material.clearcoatRoughness = ".concat(h.clearcoatRoughness,";")}),x(I,"".concat(h.clearcoatNormal),{"#include <clearcoat_normal_fragment_begin>":`
      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);
      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;
      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);
    `}),I),Xn=(G={},x(G,"".concat(h.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(h.position,`, 1.0 );
  `)}),x(G,"".concat(h.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(h.position,`;
  `)}),x(G,"".concat(h.diffuse),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(h.diffuse,`;
  `)}),x(G,"".concat(h.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(h.fragColor,`;
  `)}),G),Qn={clearcoat:[h.clearcoat,h.clearcoatNormal,h.clearcoatRoughness]},eo=`
    
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
`,to=`

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
`,ao=`
    varying mat4 csm_internal_vModelViewMatrix;
`,no=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,oo=`
    varying mat4 csm_internal_vModelViewMatrix;
`,ro=`
    
`,io=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],so=function(t){return bt(t,{excludeValues:!0})},Ke=function(t,e,n){return t.split(e).join(n)},lo=function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Je=function(t,e){return new RegExp("\\b".concat(lo(e),"\\b")).test(t)};function co(a){try{new a}catch(t){if(t.message.indexOf("is not a constructor")>=0)return!1}return!0}function uo(a,t){Object.assign(a,t);var e=Object.getPrototypeOf(t);Object.entries(Object.getOwnPropertyDescriptors(e)).filter(function(n){var o=typeof n[1].get=="function",i=typeof n[1].set=="function",s=typeof n[1].value=="function",r=n[0]==="constructor";return(o||i||s)&&!r}).forEach(function(n){typeof a[n[0]]!="function"&&Object.defineProperty(a,n[0],n[1])})}function mo(a){var t=a.toString().trim(),e=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"));return e.trim().length===0}function Ze(a){return a?a.replace(/\s/g,""):void 0}function Xe(a){return a.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,"")}function fo(a,t,e){var n=a.lastIndexOf(t);return n===-1?a:a.substring(0,n)+e+a.substring(n+t.length)}var po=function(a){Gn(e,a);var t=Yn(e);function e(n){var o,i=n.baseMaterial,s=n.fragmentShader,r=n.vertexShader,c=n.uniforms,d=n.patchMap,u=n.cacheKey,m=n.silent,l=On(n,io);Vn(this,e);var p;if(co(i)?p=new i(l):(p=i,Object.assign(p,l)),p.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");o=t.call(this),uo(ct(o),p),o.__csm={patchMap:d||{},fragmentShader:s||"",vertexShader:r||"",cacheKey:u,baseMaterial:i,instanceID:Se.MathUtils.generateUUID(),type:p.type,isAlreadyExtended:!mo(p.onBeforeCompile),cacheHash:"",silent:m},o.uniforms=U(U({},o.uniforms||{}),c||{});{var v=o.__csm,y=v.fragmentShader,S=v.vertexShader,w=o.uniforms;o.__csm.cacheHash=o._getCacheHash(),o._generateMaterial(y,S,w)}return o}return Un(e,[{key:"update",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=o.uniforms||this.uniforms,Object.assign(this.__csm,o);var i=this.__csm,s=i.fragmentShader,r=i.vertexShader,c=this.uniforms,d=this._getCacheHash();this.__csm.cacheHash=d,this._generateMaterial(s,r,c)}},{key:"clone",value:function(){var o={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},i=new this.constructor(o);return Object.assign(this,i),i}},{key:"_getCacheHash",value:function(){var o=this.__csm,i=o.fragmentShader,s=o.vertexShader,r=this.uniforms,c=[Ze(i),Ze(s),r].filter(function(d){return d!==void 0});return c.length>0?so(c):this.customProgramCacheKey()}},{key:"_generateMaterial",value:function(o,i,s){var r=this;this.uniforms=s||{},this.customProgramCacheKey=function(){return r.__csm.cacheHash};var c=function(m){try{var l=r._getMaterialDefine();if(o){var p=r._patchShader(Xe(o),m.fragmentShader,!0);m.fragmentShader=l+p}if(i){var v=r._patchShader(Xe(i),m.vertexShader);m.vertexShader=`#define IS_VERTEX;
`+v,m.vertexShader=l+m.vertexShader}m.uniforms=U(U({},m.uniforms),r.uniforms),r.uniforms=m.uniforms}catch(y){console.error(y)}};if(this.__csm.isAlreadyExtended){var d=this.onBeforeCompile;this.onBeforeCompile=function(u,m){d(u,m),c(u)}}else this.onBeforeCompile=c;this.needsUpdate=!0}},{key:"_patchShader",value:function(o,i,s){var r=this,c=i,d=U(U({},this._getPatchMapForMaterial()),this.__csm.patchMap);Object.entries(Qn).forEach(function(v){var y=Ye(v,2),S=y[0],w=y[1],_=w.find(function(k){return Je(o,k)});if(_&&!r[S])throw new Error('CSM: Property "'.concat(S,'" is required to use output "').concat(_,'". Shader cannot compile.'))}),Object.entries(Jn).forEach(function(v){var y=Ye(v,2),S=y[0],w=y[1];c=Ke(c,S,w)}),Object.keys(d).forEach(function(v){Object.keys(d[v]).forEach(function(y){var S=Kn[v],w=r.__csm.type;if(v==="*"||Je(o,v))if(!S||Array.isArray(S)&&S.includes(w)||S==="*")c=Ke(c,y,d[v][y]);else throw new Error("CSM: ".concat(v," is not available in ").concat(w,". Shader cannot compile."))})});var u="csm_main_"+this.__csm.instanceID.replace(/-/g,"_"),m=o.replace(/void\s+main\s*\(\s*\)/g,"void ".concat(u,"()")),l=o.includes("void main()"),p=c.includes("// #_CSM_#");return l&&(p&&this.__csm.isAlreadyExtended?(c=c.replace("void main() {",`
            `.concat(m,`
            
            void main() {
          `)),c=fo(c,"// #_CSM_#",`
            `.concat(u,`();
            // #_CSM_#
          `))):c=c.replace("void main() {",`
            #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
              `.concat(s?oo:ao,`
              #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
            #endif
    
            `).concat(eo,`
    
            `).concat(m,`
            
            void main() {
              #ifndef CSM_IS_DEFAULTS_DEFINED
                `).concat(to,`
                #define CSM_IS_DEFAULTS_DEFINED 1
              #endif
              
              #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
                `).concat(s?ro:no,`
                #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
              #endif
  
              `).concat(u,`();
              // #_CSM_#
          `))),c}},{key:"_getMaterialDefine",value:function(){var o=this.__csm.type;return o?"#define IS_".concat(o.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"_getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return Xn;default:return Zn}}}]),e}(Se.Material),vo=`vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
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
}`,ho=`const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
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
}`;const{defineComponent:go}=await f("vue"),{unref:yo,openBlock:_o,createElementBlock:xo}=await f("vue"),So=["object"],Mo=await f("three"),{watchEffect:bo}=await f("vue"),Si=go({__name:"index",props:{color:{default:"#ff00fc"},metalness:{default:1},roughness:{default:1},clearcoat:{default:1},clearcoatRoughness:{default:0}},setup(a){const t=a,e={baseMaterial:Mo.MeshPhysicalMaterial,metalness:t.metalness,roughness:t.roughness,clearcoat:t.clearcoat,clearcoatRoughness:t.clearcoatRoughness,color:t.color,vertexShader:`
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
			${ho}
      ${vo}
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
		`},n=new po(e);return bo(()=>{n.color.setStyle(t.color),n.metalness=t.metalness,n.roughness=t.roughness,n.clearcoat=t.clearcoat,n.clearcoatRoughness=t.clearcoatRoughness}),(o,i)=>(_o(),xo("primitive",{object:yo(n)},null,8,So))}}),{watch:Po}=await f("vue");async function Mi(a){const t=a.split("/").pop();Te.getResource("TextureLoader",a,t);const e=Te.getReactiveItem(t);return new Promise((n,o)=>{const i=e();if(i){n(i);return}const s=Po(()=>e(),r=>{r?(s(),n(r)):o(new Error("useTexture 加载失败，未得到模型"))})})}function wo(a){const t={nodes:{},materials:{}};return a&&a.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material)}),t}async function Qe(a,t,e,n,o){const i=new a;return o&&o(i),e&&e(i),await new Promise((s,r)=>{i.load(t,c=>{const d=c;d.scene&&Object.assign(d,wo(d.scene)),s(d)},n,c=>{r(c)})})}const{TextureLoader:ko}=await f("three"),Co=Array.isArray;async function bi(a,t){const e=new ko(t),n=o=>new Promise((i,s)=>{e.load(o,r=>i(r),()=>null,()=>{s(new Error("[useTextures] - Failed to load texture"))})});if(Co(a)){const o=await Promise.all(a.map(i=>n(i)));return a.length>1?o:o[0]}else{const{map:o,displacementMap:i,normalMap:s,roughnessMap:r,metalnessMap:c,aoMap:d,alphaMap:u,matcap:m}=a;return{map:o?await n(o):null,displacementMap:i?await n(i):null,normalMap:s?await n(s):null,roughnessMap:r?await n(r):null,metalnessMap:c?await n(c):null,aoMap:d?await n(d):null,alphaMap:u?await n(u):null,matcap:m?await n(m):null}}}const ne={color:"#ffffff",emissive:"#000000",emissiveIntensity:.02,metalness:1,roughness:1,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:2,ior:1.52,specularIntensity:1,liquidMetalIntensity:1,normalStrength:1.5,displacementStrength:.065,fresnelStrength:1.4,uScale:1e-5,uShapeReactivity:2.2,uDistortion:1.35,uEdgeProtection:.32,iridescence:.85,iridescenceIOR:1.32,iridescenceThicknessMin:759,iridescenceThicknessMax:800},To={color:{name:"基础颜色",com:"ColorPicker"},emissive:{name:"发光颜色",com:"ColorPicker"},emissiveIntensity:{name:"发光强度",com:"Slider",min:0,max:2,step:.01},metalness:{name:"金属度",com:"Slider",min:0,max:1,step:.01},roughness:{name:"粗糙度",com:"Slider",min:0,max:1,step:.01},clearcoat:{name:"清漆层",com:"Slider",min:0,max:1,step:.01},clearcoatRoughness:{name:"清漆粗糙度",com:"Slider",min:0,max:1,step:.01},envMapIntensity:{name:"环境反射",com:"Slider",min:0,max:5,step:.01},ior:{name:"IOR",com:"Slider",min:1,max:2.333,step:.01},specularIntensity:{name:"高光强度",com:"Slider",min:0,max:2,step:.01},liquidMetalIntensity:{name:"液态金属强度",com:"Slider",min:0,max:1.5,step:.01},normalStrength:{name:"法线扰动",com:"Slider",min:0,max:1.5,step:.01},displacementStrength:{name:"位移强度",com:"Slider",min:0,max:.35,step:.001},fresnelStrength:{name:"边缘高光",com:"Slider",min:0,max:3,step:.01},uScale:{name:"Ripple Scale",com:"Slider",min:1e-4,max:.015,step:1e-4},uShapeReactivity:{name:"Shape Reactivity",com:"Slider",min:0,max:5,step:.01},uDistortion:{name:"Distortion",com:"Slider",min:0,max:5,step:.01},uEdgeProtection:{name:"Edge Sharpness",com:"Slider",min:0,max:1,step:.01},iridescence:{name:"Intensity",com:"Slider",min:0,max:1,step:.01},iridescenceIOR:{name:"Index of Refraction",com:"Slider",min:1,max:3,step:.01},iridescenceThicknessMin:{name:"Thickness Min",com:"Slider",min:0,max:1500,step:1},iridescenceThicknessMax:{name:"Thickness Max",com:"Slider",min:0,max:1500,step:1}},Ro=[{title:"Liquid Metal",fields:["liquidMetalIntensity","normalStrength","displacementStrength","fresnelStrength","color","emissive","envMapIntensity"]},{title:"Fluid Dynamics",fields:["uScale","uShapeReactivity","uDistortion","uEdgeProtection"]},{title:"Iridescence (Rainbow)",fields:["iridescence","iridescenceIOR","iridescenceThicknessMin","iridescenceThicknessMax"]},{title:"Base Material",fields:["roughness","metalness","clearcoat"]}];function Pi(a={}){return{...ne,...a}}const Io=[{label:"colorful",value:"colorful"},{label:"Aurora",value:"aurora"},{label:"Nebula",value:"nebula"},{label:"Prism",value:"prism"}],ge={colorful:0,aurora:1,nebula:2,prism:3},Eo=Io.reduce((a,t)=>(a[t.label]=t.value,a),{}),T={color:"#363636",emissive:"#000000",emissiveIntensity:0,metalness:.23,roughness:.2,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,ior:1.5,specularIntensity:1,channelAmount:.43,maskAmount:.8,scanDuration:4.78,scanStart:-2,scanEnd:2,scanYOffset:0,scanIntensity:1,gridAmount:.5,tempMaskAmount:.1,tempGridAmount:.05,triplanarScale:.52,paletteScheme:"colorful",paletteFlow:.57,paletteContrast:1.12,emissiveBoost:2.52,diffuseMix:.16,alphaCutoff:.002,maskMapUrl:"./plugins/basic/materials/jumpingBlockMaterial/scan-mask.png",gridMapUrl:"./plugins/basic/materials/jumpingBlockMaterial/grid-mask.png"},Ao={color:T.color,roughness:T.roughness,metalness:T.metalness,envMapIntensity:T.envMapIntensity,channelAmount:T.channelAmount,scanDuration:T.scanDuration,scanYOffset:T.scanYOffset,gridAmount:T.gridAmount,triplanarScale:T.triplanarScale,paletteScheme:T.paletteScheme,paletteFlow:T.paletteFlow,emissiveBoost:T.emissiveBoost},Do={color:{name:"Base Color",com:"ColorPicker"},emissive:{name:"Base Emissive",com:"ColorPicker"},emissiveIntensity:{name:"Base Emissive Intensity",com:"Slider",min:0,max:2,step:.01},metalness:{name:"Metalness",com:"Slider",min:0,max:1,step:.01},roughness:{name:"Roughness",com:"Slider",min:0,max:1,step:.01},clearcoat:{name:"Clearcoat",com:"Slider",min:0,max:1,step:.01},clearcoatRoughness:{name:"Clearcoat Roughness",com:"Slider",min:0,max:1,step:.01},envMapIntensity:{name:"Reflection",com:"Slider",min:0,max:5,step:.01},ior:{name:"IOR",com:"Slider",min:1,max:2.333,step:.01},specularIntensity:{name:"Specular Intensity",com:"Slider",min:0,max:2,step:.01},channelAmount:{name:"Channel Amount",com:"Slider",min:0,max:4,step:.01},maskAmount:{name:"Mask Stage Amount",com:"Slider",min:0,max:1,step:.01},scanDuration:{name:"Scan Duration",com:"Slider",min:.2,max:10,step:.01},scanStart:{name:"Scan Start",com:"Slider",min:-5,max:5,step:.01},scanEnd:{name:"Scan End",com:"Slider",min:-5,max:5,step:.01},scanYOffset:{name:"Scan Y Offset",com:"Slider",min:-3,max:3,step:.01},scanIntensity:{name:"Scan Intensity",com:"Slider",min:0,max:3,step:.01},gridAmount:{name:"Grid Stage Amount",com:"Slider",min:0,max:2,step:.01},tempMaskAmount:{name:"Temp0 Mask Amount",com:"Slider",min:0,max:1,step:.01},tempGridAmount:{name:"Temp0 Grid Amount",com:"Slider",min:0,max:1,step:.01},triplanarScale:{name:"Triplanar Scale",com:"Slider",min:.2,max:6,step:.01},paletteScheme:{name:"Palette Scheme",com:"Select",options:Eo},paletteFlow:{name:"Palette Flow",com:"Slider",min:-2,max:2,step:.01},paletteContrast:{name:"Palette Contrast",com:"Slider",min:.2,max:2,step:.01},emissiveBoost:{name:"Emissive Boost",com:"Slider",min:0,max:8,step:.01},diffuseMix:{name:"Diffuse Mix",com:"Slider",min:0,max:1,step:.01},alphaCutoff:{name:"Alpha Cutoff",com:"Slider",min:0,max:.5,step:.001}},Bo=[{title:"jBMaterial",fields:["channelAmount","emissiveBoost","triplanarScale","gridAmount"]},{title:"Scan",fields:["scanDuration","scanYOffset"]},{title:"Palette",fields:["paletteScheme","paletteFlow"]},{title:"Base Material",fields:["color","roughness","metalness","envMapIntensity"]}];function wi(a={}){return{...T,...a}}const{FrontSide:ut,BackSide:zo,DoubleSide:jo,NormalBlending:mt,AdditiveBlending:Oo,SubtractiveBlending:Fo,MultiplyBlending:No,NoBlending:$o}=await f("three"),ki=[{label:"FrontSide",value:ut},{label:"BackSide",value:zo},{label:"DoubleSide",value:jo}],Ci=[{label:"NoBlending",value:$o},{label:"NormalBlending",value:mt},{label:"AdditiveBlending",value:Oo},{label:"SubtractiveBlending",value:Fo},{label:"MultiplyBlending",value:No}],O={color:"#ffffff",map:null,wireframe:!1,opacity:1,transparent:!1,side:ut,alphaTest:0,blending:mt,depthTest:!0,depthWrite:!0},Lo={emissive:"#000000",emissiveIntensity:1,emissiveMap:null,reflectivity:1,refractionRatio:.98},Vo={emissive:"#000000",emissiveIntensity:1,specular:"#111111",shininess:30,specularMap:null,emissiveMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1},displacementMap:null,displacementScale:1,displacementBias:0},ft={emissive:"#000000",emissiveIntensity:1,metalness:.5,roughness:.5,metalnessMap:null,roughnessMap:null,normalMap:null,normalScale:{x:1,y:1},bumpMap:null,bumpScale:1,displacementMap:null,displacementScale:1,displacementBias:0,aoMap:null,aoMapIntensity:1,envMap:null,envMapIntensity:1},Ho={...ft,clearcoat:.2,clearcoatRoughness:.1,reflectivity:.5,transmission:0,ior:1.5,thickness:.01,attenuationColor:"#ffffff",attenuationDistance:0,specularIntensity:1,specularColor:"#ffffff",sheen:0,sheenColor:"#ffffff",clearcoatNormalMap:null,clearcoatNormalScale:{x:1,y:1}},Uo={gradientMap:null,bumpMap:null,bumpScale:1,normalMap:null,normalScale:{x:1,y:1}},Go={metalness:.5,roughness:0},Wo={color:"#ffffff",roughness:0,reflectivity:.5,attenuationColor:"#ffffff",attenuationDistance:2,chromaticAberration:.05,anisotropicBlur:.1,distortion:0,temporalDistortion:0,backside:!0,thickness:1,backsideThickness:.5},qo={color:"#ff00fc",metalness:1,roughness:1,clearcoat:1,clearcoatRoughness:0},Yo={...ne},Ko={...Ao},Jo={color:"#B520A9",uEdgeColor:"#4d9bff",uEdge:6,uFreq:.41,uAmp:20,uProgress:-1,metalness:1,roughness:1},dt={MeshBasicMaterial:{component:"TresMeshBasicMaterial",props:{...O}},MeshLambertMaterial:{component:"TresMeshLambertMaterial",props:{...O,...Lo}},MeshPhongMaterial:{component:"TresMeshPhongMaterial",props:{...O,...Vo}},MeshStandardMaterial:{component:"TresMeshStandardMaterial",props:{...O,...ft}},MeshPhysicalMaterial:{component:"TresMeshPhysicalMaterial",props:{...O,...Ho}},MeshToonMaterial:{component:"TresMeshToonMaterial",props:{...O,...Uo}},MeshGlassMaterial:{component:async()=>(await L(()=>import("./index.BjVPg-2F1784021167877.js").then(t=>t.trescientos),__vite__mapDeps([0,1,2,3]),import.meta.url)).MeshGlassMaterial,props:{...O,...Go}},TransmissionMaterial:{component:async()=>(await L(()=>import("./index.BpOHHYn-1784021167877.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).TransmissionMaterial,props:{...Wo}},ClearcoatMaterial:{component:async()=>(await L(()=>import("./index.BpOHHYn-1784021167877.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).ClearcoatMaterial,props:{...qo}},LiquidMetalMaterial:{component:async()=>(await L(()=>import("./index.BpOHHYn-1784021167877.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).LiquidMetalMaterial,props:{...Yo}},JumpingBlockMaterial:{component:async()=>(await L(()=>import("./index.BpOHHYn-1784021167877.js"),__vite__mapDeps([4,5,1,0,2,3,6,7,8,9,10,11]),import.meta.url)).JumpingBlockMaterial,props:{...Ko}},dissolveEffectMaterial:{component:async()=>(await L(()=>import("./index.DyH3OfKI1784021167877.js"),__vite__mapDeps([12,13,1,0,2,3,14,15,16,17,18,19]),import.meta.url)).dissolveEffectMaterial,props:{...Jo}}},{markRaw:Zo}=await f("vue");async function Xo(a){let e=dt[a].component;return typeof e=="function"&&(e=Zo(await e())),e}function Qo(a){return dt[a].props}const{defineComponent:er}=await f("vue"),{resolveDynamicComponent:tr,mergeProps:ar,openBlock:nr,createBlock:or}=await f("vue"),{ref:ye,watch:et}=await f("vue"),rr=er({__name:"index",props:{type:{},materialProps:{}},setup(a){const t=a,e=ye(null),n=ye({}),o=ye(null);let i=!1;return et(()=>t.type,async s=>{if(o.value)try{o.value.dispose?.(),console.log("已释放旧材质组件")}catch(r){console.warn("释放材质组件失败:",r)}i=!1,e.value=await Xo(s),i=!0,n.value={...Qo(s),...t.materialProps}},{immediate:!0}),et(()=>[t.type,t.materialProps],([s,r],[c])=>{s===c&&i&&(n.value=r)},{deep:!0}),(s,r)=>(nr(),or(tr(e.value),ar(n.value,{ref_key:"materialRef",ref:o}),null,16))}}),tt={Box:{params:[{key:"width",label:"width",type:"number",default:1},{key:"height",label:"height",type:"number",default:1},{key:"depth",label:"depth",type:"number",default:1},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:6,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:6,step:1},{key:"depthSegments",label:"depthSegments",type:"number",default:1,min:1,max:6,step:1}]},Circle:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:32,min:3,max:64,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cone:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Cylinder:{params:[{key:"radiusTop",label:"radiusTop",type:"number",default:1,min:0},{key:"radiusBottom",label:"radiusBottom",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:2,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:32,step:1},{key:"openEnded",label:"openEnded",type:"boolean",default:!1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},Dodecahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Icosahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Octahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Plane:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:1,min:1,max:64,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:1,min:1,max:64,step:1}]},Ring:{params:[{key:"innerRadius",label:"innerRadius",type:"number",default:.5,min:0},{key:"outerRadius",label:"outerRadius",type:"number",default:1,min:0},{key:"thetaSegments",label:"thetaSegments",type:"number",default:8,min:3,max:64,step:1},{key:"phiSegments",label:"phiSegments",type:"number",default:1,min:1,max:16,step:1},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},RoundedBox:{params:[{key:"width",label:"width",type:"number",default:1,min:0},{key:"height",label:"height",type:"number",default:1,min:0},{key:"depth",label:"depth",type:"number",default:1,min:0},{key:"segments",label:"segments",type:"number",default:2,min:0,max:8,step:.1},{key:"radius",label:"radius",type:"number",default:.1,min:0,max:1,step:.01}]},Sphere:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"widthSegments",label:"widthSegments",type:"number",default:32,min:3,max:128,step:1},{key:"heightSegments",label:"heightSegments",type:"number",default:16,min:2,max:128,step:1},{key:"phiStart",label:"phiStart",type:"number",default:0,min:0,max:Math.PI*2,step:.01},{key:"phiLength",label:"phiLength",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01},{key:"thetaStart",label:"thetaStart",type:"number",default:0,min:0,max:Math.PI,step:.01},{key:"thetaLength",label:"thetaLength",type:"number",default:Math.PI,min:.1,max:Math.PI,step:.01}]},Tetrahedron:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"detail",label:"detail",type:"number",default:0,min:0,max:5,step:1}]},Torus:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:64,step:1},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"arc",label:"arc",type:"number",default:Math.PI*2,min:.1,max:Math.PI*2,step:.01}]},TorusKnot:{params:[{key:"radius",label:"radius",type:"number",default:1,min:0},{key:"tube",label:"tube",type:"number",default:.4,min:0},{key:"tubularSegments",label:"tubularSegments",type:"number",default:64,min:3,max:256,step:1},{key:"radialSegments",label:"radialSegments",type:"number",default:8,min:3,max:128,step:1},{key:"p",label:"p",type:"number",default:2,min:1,max:10,step:.1},{key:"q",label:"q",type:"number",default:3,min:1,max:10,step:.1}]}},{defineComponent:ir}=await f("vue"),{unref:B,createVNode:ee,renderList:sr,Fragment:lr,openBlock:W,createElementBlock:_e,mergeProps:cr,createBlock:xe,createCommentVNode:at,withCtx:te}=await f("vue"),ur={class:"shape-configurator"},{ref:mr,reactive:fr,computed:nt,watch:dr}=await f("vue"),Ti=ir({__name:"shapeConfigurator",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,n=t,o=Object.keys(tt).map(m=>({label:m,value:m})),i=mr(e.modelValue?.type??"Box"),s=nt(()=>tt[i.value]),r=fr({});function c(m=!0){const l=s.value;if(l){for(const p of l.params)if(r[p.key]=p.default,m&&e.modelValue&&e.modelValue.args){const v=l.params.findIndex(y=>y.key===p.key);v!==-1&&e.modelValue.args[v]!==void 0&&(r[p.key]=e.modelValue.args[v])}}}const d=nt(()=>{const m=s.value;return m?m.params.map(l=>r[l.key]):[]});dr(()=>({type:i.value,args:d.value}),m=>n("update:modelValue",m),{deep:!0,immediate:!0}),c();function u(m){return m.type!=="number"?{}:{min:m.min??.1,max:m.max??5,step:m.step??.1}}return(m,l)=>(W(),_e("div",ur,[ee(B(Nt),null,{default:te(()=>[ee(B($t),{vertical:"",size:"small"},{default:te(()=>[ee(B(Lt),{value:i.value,"onUpdate:value":[l[0]||(l[0]=p=>i.value=p),l[1]||(l[1]=p=>c(!1))],options:B(o),placeholder:"选择图形类型"},null,8,["value","options"]),s.value?(W(),xe(B(Ut),{key:0,size:"small","label-placement":"left","label-width":100},{default:te(()=>[(W(!0),_e(lr,null,sr(s.value.params,p=>(W(),_e("div",{key:p.key,style:{"margin-bottom":"12px"}},[ee(B(Gt),{label:p.label},{default:te(()=>[p.type==="number"?(W(),xe(B(Vt),cr({key:0,size:"tiny",value:r[p.key],"onUpdate:value":v=>r[p.key]=v},{ref_for:!0},u(p),{style:{width:"100%"}}),null,16,["value","onUpdate:value"])):p.type==="boolean"?(W(),xe(B(Ht),{key:1,size:"small",value:r[p.key],"onUpdate:value":v=>r[p.key]=v},null,8,["value","onUpdate:value"])):at("",!0)]),_:2},1032,["label"])]))),128))]),_:1})):at("",!0)]),_:1})]),_:1})]))}}),{defineComponent:pr}=await f("vue"),{renderSlot:vr,resolveDynamicComponent:hr,withCtx:gr,openBlock:yr,createBlock:_r,createCommentVNode:xr}=await f("vue"),{computed:Sr}=await f("vue"),Mr=pr({__name:"shapeRenderer",props:{modelValue:{}},setup(a){const t={Box:Ot,Circle:jt,Cone:zt,Cylinder:Bt,Dodecahedron:Dt,Icosahedron:At,Octahedron:Et,Plane:It,Ring:Rt,RoundedBox:Tt,Sphere:Ct,Tetrahedron:kt,Torus:wt,TorusKnot:Pt},e=a,n=Sr(()=>t[e.modelValue?.type]??null);return(o,i)=>n.value?(yr(),_r(hr(n.value),{key:0,args:o.modelValue.args},{default:gr(()=>[vr(o.$slots,"default")]),_:3},8,["args"])):xr("",!0)}}),{defineComponent:br}=await f("vue"),{unref:ot,createVNode:Pr,withCtx:wr,openBlock:kr,createBlock:Cr}=await f("vue"),Ri=br({__name:"forEditor",props:{shape:{default:{type:"Box",args:[2,1,1]}},materialType:{type:String,default:"MeshStandardMaterial"},materialProps:{type:Object,required:!0}},setup(a){return(t,e)=>(kr(),Cr(ot(Mr),{position:[0,.5,0],modelValue:a.shape},{default:wr(()=>[Pr(ot(rr),{type:a.materialType,"material-props":a.materialProps},null,8,["type","material-props"])]),_:1},8,["modelValue"]))}}),{defineComponent:Tr}=await f("vue"),{openBlock:Rr,createElementBlock:Ir}=await f("vue"),Er=["object"],{shallowRef:Ar,watch:rt,useAttrs:Dr}=await f("vue"),Br=await f("three"),Ii=Tr({__name:"customShaderMaterial",props:{baseMaterial:{},vertexShader:{},fragmentShader:{},uniforms:{}},setup(a){const t=Dr(),e=a,n=Ar(null);return rt(()=>e.baseMaterial,o=>{n.value&&n.value.dispose(),n.value=new Pe({baseMaterial:Br[o],vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,uniforms:e.uniforms})},{immediate:!0}),rt(()=>({...t}),o=>{const i=n.value;i&&Object.keys(o).forEach(s=>{if(!(s in i))return;const r=o[s];r===!0&&typeof i[s]!="boolean"||i[s]!==r&&(i[s]=r,i.needsUpdate=!0)})},{immediate:!0,deep:!1}),(o,i)=>(Rr(),Ir("primitive",{object:n.value},null,8,Er))}}),pt=`
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
`,zr=`
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

${pt}

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
`,jr=`
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

${pt}

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
`,{mergeDefaults:Or,defineComponent:Fr}=await f("vue"),{unref:Nr,openBlock:$r,createElementBlock:Lr}=await f("vue"),Vr=["object"],it=await f("three"),{watchEffect:Hr,onUnmounted:Ur}=await f("vue"),Ei=Fr({__name:"index",props:Or({color:{},emissive:{},emissiveIntensity:{},metalness:{},roughness:{},clearcoat:{},clearcoatRoughness:{},envMapIntensity:{},ior:{},specularIntensity:{},liquidMetalIntensity:{},normalStrength:{},displacementStrength:{},fresnelStrength:{},uScale:{},uShapeReactivity:{},uDistortion:{},uEdgeProtection:{},iridescence:{},iridescenceIOR:{},iridescenceThicknessMin:{},iridescenceThicknessMax:{}},ne),setup(a,{expose:t}){const e=a,n={uTime:{value:0},uLiquidMetalIntensity:{value:e.liquidMetalIntensity},uNormalStrength:{value:e.normalStrength},uDisplacementStrength:{value:e.displacementStrength},uFresnelStrength:{value:e.fresnelStrength},uScale:{value:e.uScale},uShapeReactivity:{value:e.uShapeReactivity},uDistortion:{value:e.uDistortion},uEdgeProtection:{value:e.uEdgeProtection}},o=new Pe({baseMaterial:it.MeshPhysicalMaterial,vertexShader:zr,fragmentShader:jr,uniforms:n,color:e.color,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,metalness:e.metalness,roughness:e.roughness,clearcoat:Math.max(e.clearcoat,1e-4),clearcoatRoughness:e.clearcoatRoughness,envMapIntensity:e.envMapIntensity,ior:e.ior,specularIntensity:e.specularIntensity,iridescence:Math.max(e.iridescence,1e-4),iridescenceIOR:e.iridescenceIOR,iridescenceThicknessRange:[e.iridescenceThicknessMin,e.iridescenceThicknessMax]});o.userData.uScale=o.uniforms.uScale,o.userData.uShapeReactivity=o.uniforms.uShapeReactivity,o.userData.uDistortion=o.uniforms.uDistortion,o.userData.uEdgeProtection=o.uniforms.uEdgeProtection;const{onBeforeRender:i}=N();return i(({elapsed:s})=>{o.uniforms.uTime.value=s}),Hr(()=>{o.color.setStyle(e.color),o.emissive.setStyle(e.emissive),o.emissiveIntensity=e.emissiveIntensity,o.metalness=e.metalness,o.roughness=e.roughness,o.clearcoat=Math.max(e.clearcoat,1e-4),o.clearcoatRoughness=e.clearcoatRoughness,o.envMapIntensity=e.envMapIntensity,o.ior=e.ior,o.specularIntensity=e.specularIntensity,o.iridescence=Math.max(e.iridescence,1e-4),o.iridescenceIOR=e.iridescenceIOR,o.iridescenceThicknessRange=[Math.min(e.iridescenceThicknessMin,e.iridescenceThicknessMax),Math.max(e.iridescenceThicknessMin,e.iridescenceThicknessMax)],o.uniforms.uLiquidMetalIntensity.value=e.liquidMetalIntensity,o.uniforms.uNormalStrength.value=e.normalStrength,o.uniforms.uDisplacementStrength.value=e.displacementStrength,o.uniforms.uFresnelStrength.value=e.fresnelStrength,o.uniforms.uScale.value=e.uScale,o.uniforms.uShapeReactivity.value=e.uShapeReactivity,o.uniforms.uDistortion.value=e.uDistortion,o.uniforms.uEdgeProtection.value=e.uEdgeProtection}),Ur(()=>{o.dispose()}),t({root:o,constructor:it.MeshPhysicalMaterial,defaults:ne,controlGroups:Ro,schema:To,dispose:()=>o.dispose()}),(s,r)=>($r(),Lr("primitive",{object:Nr(o)},null,8,Vr))}}),Gr=`
float jbSaturate(float value) {
    return clamp(value, 0.0, 1.0);
}

float jbLuminance(vec3 value) {
    return dot(value, vec3(0.2126, 0.7152, 0.0722));
}

vec4 jbPremultiplyAlpha(vec4 value) {
    return vec4(value.rgb * value.a, value.a);
}

vec4 jbTripSampler1(vec3 uv, vec3 normalValue, sampler2D mapValue) {
    vec3 weight = max(vec3(0.00001), normalValue * normalValue);
    weight /= max(weight.x + weight.y + weight.z, 0.00001);

    vec4 colorValue = vec4(0.0);

    if (weight.z > 0.001) {
        vec2 faceUv = (normalValue.z > 0.0 ? vec2(-1.0, -1.0) : vec2(1.0, -1.0)) * uv.xy;
        colorValue += texture2D(mapValue, faceUv) * weight.z;
    }

    if (weight.y > 0.001) {
        vec2 faceUv = (normalValue.y > 0.0 ? vec2(1.0, -1.0) : vec2(-1.0, -1.0)) * uv.xz;
        colorValue += texture2D(mapValue, faceUv) * weight.y;
    }

    if (weight.x > 0.001) {
        vec2 faceUv = (normalValue.x > 0.0 ? vec2(1.0, -1.0) : vec2(-1.0, -1.0)) * uv.zy;
        colorValue += texture2D(mapValue, faceUv) * weight.x;
    }

    return max(vec4(0.0), colorValue);
}

float jbLinearBlackWhiteBlackGradient(float positionValue) {
    float clampedValue = clamp(positionValue, 0.0, 1.0);
    float insideValue = step(0.0, positionValue) * step(positionValue, 1.0);
    return (1.0 - abs(clampedValue * 2.0 - 1.0)) * insideValue;
}

vec3 jbThreeStopPalette(float value, vec3 colorA, vec3 colorB, vec3 colorC) {
    float t = fract(value);

    if (t <= 0.14) {
        return colorA;
    }

    if (t <= 0.506) {
        return mix(colorA, colorB, clamp((t - 0.14) / (0.506 - 0.14), 0.0, 1.0));
    }

    if (t <= 0.985) {
        return mix(colorB, colorC, clamp((t - 0.506) / (0.985 - 0.506), 0.0, 1.0));
    }

    return colorC;
}

vec3 jbPaletteByScheme(float value, float schemeValue) {
    if (schemeValue < 0.5) {
        return jbThreeStopPalette(value, vec3(0.0078, 1.0, 0.8157), vec3(1.0, 0.0392, 1.0), vec3(1.0));
    }

    if (schemeValue < 1.5) {
        return jbThreeStopPalette(value, vec3(0.0196, 0.9608, 0.8314), vec3(0.2627, 0.4706, 1.0), vec3(0.9608, 1.0, 0.6549));
    }

    if (schemeValue < 2.5) {
        return jbThreeStopPalette(value, vec3(0.1686, 0.8275, 1.0), vec3(1.0, 0.2196, 0.7529), vec3(1.0, 0.8902, 0.3059));
    }

    return jbThreeStopPalette(value, vec3(0.3451, 0.9725, 1.0), vec3(0.7333, 0.4078, 1.0), vec3(1.0));
}
`,Wr=`
varying vec3 vJbObjectPosition;
varying vec3 vJbObjectNormal;
varying vec3 vJbWorldPosition;

void main() {
    vJbObjectPosition = csm_Position;
    vJbObjectNormal = normalize(csm_Normal);
    vJbWorldPosition = (modelMatrix * vec4(csm_Position, 1.0)).xyz;
}
`,qr=`
varying vec3 vJbObjectPosition;
varying vec3 vJbObjectNormal;
varying vec3 vJbWorldPosition;

uniform sampler2D uMaskMap;
uniform sampler2D uGridMap;
uniform float uTime;
uniform float uChannelAmount;
uniform float uMaskAmount;
uniform float uScanDuration;
uniform float uScanStart;
uniform float uScanEnd;
uniform float uScanYOffset;
uniform float uScanIntensity;
uniform float uGridAmount;
uniform float uTempMaskAmount;
uniform float uTempGridAmount;
uniform float uTriplanarScale;
uniform float uPaletteScheme;
uniform float uPaletteFlow;
uniform float uPaletteContrast;
uniform float uEmissiveBoost;
uniform float uDiffuseMix;
uniform float uAlphaCutoff;

${Gr}

void main() {
    vec3 jbTripPosition = vJbObjectPosition * uTriplanarScale;
    vec3 jbTripNormal = normalize(vJbObjectNormal);

    vec4 jbMaskTexture = jbPremultiplyAlpha(jbTripSampler1(jbTripPosition, jbTripNormal, uMaskMap));
    vec4 jbGridTexture = jbPremultiplyAlpha(jbTripSampler1(jbTripPosition, jbTripNormal, uGridMap));
    float jbMaskValue = jbLuminance(jbMaskTexture.rgb);
    float jbGridValue = jbLuminance(jbGridTexture.rgb);

    vec4 jbAlphaStage = mix(vec4(1.0), jbMaskTexture, uMaskAmount);
    float jbChannelAlpha = jbLuminance(jbAlphaStage.rgb);

    float jbDuration = max(uScanDuration, 0.001);
    float jbScanProgress = fract(uTime / jbDuration);
    float jbScanOffset = mix(uScanStart, uScanEnd, jbScanProgress) + uScanYOffset;
    float jbScanPosition = vJbWorldPosition.y + jbScanOffset;
    float jbScanGradient = jbLinearBlackWhiteBlackGradient(jbScanPosition) * uScanIntensity;

    jbChannelAlpha = jbScanGradient - jbChannelAlpha;
    jbChannelAlpha += jbGridValue * uGridAmount;
    jbChannelAlpha = max(jbChannelAlpha, 0.0);

    vec4 jbTemp0 = mix(vec4(1.0), jbMaskTexture, uTempMaskAmount);
    vec4 jbInvertedGrid = vec4(1.0 - jbGridTexture.rgb, jbGridTexture.a) * uTempGridAmount;
    jbTemp0 = jbInvertedGrid - jbTemp0;

    float jbFlow = uTime * uPaletteFlow;
    float jbScanLocal = clamp(jbScanPosition, 0.0, 1.0);
    float jbDiagonal = vJbWorldPosition.x * 0.18 - vJbWorldPosition.z * 0.13;
    float jbWave = sin((vJbObjectPosition.x * 3.8 + vJbObjectPosition.y * 1.7 + vJbObjectPosition.z * 2.9) + jbFlow * 6.28318530718) * 0.5 + 0.5;
    float jbPaletteIndex = jbTemp0.r * 0.22 + jbScanLocal * 0.46 + jbGridValue * 0.36 + jbMaskValue * 0.14 + jbDiagonal + jbWave * 0.18 + jbFlow * 0.12;
    jbPaletteIndex = fract((jbPaletteIndex - 0.5) * uPaletteContrast + 0.5);

    vec3 jbSweepColor = jbPaletteByScheme(jbPaletteIndex, uPaletteScheme);
    float jbWhiteSpark = smoothstep(0.52, 1.0, jbGridValue * jbScanGradient + jbWave * 0.24);
    jbSweepColor = mix(jbSweepColor, vec3(1.0), jbWhiteSpark * 0.28);

    float jbEffectStrength = jbChannelAlpha * uChannelAmount;
    float jbEffectAlpha = jbSaturate(jbEffectStrength);
    jbEffectAlpha *= step(uAlphaCutoff, jbEffectAlpha);

    csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, jbSweepColor, jbEffectAlpha * uDiffuseMix);
    csm_Emissive += jbSweepColor * jbEffectStrength * uEmissiveBoost;
}
`,{mergeDefaults:Yr,defineComponent:Kr}=await f("vue"),{unref:Jr,openBlock:Zr,createElementBlock:Xr}=await f("vue"),Qr=["object"],z=await f("three"),{watch:st,watchEffect:ei,onUnmounted:ti}=await f("vue"),Ai=Kr({__name:"index",props:Yr({color:{},emissive:{},emissiveIntensity:{},metalness:{},roughness:{},clearcoat:{},clearcoatRoughness:{},envMapIntensity:{},ior:{},specularIntensity:{},channelAmount:{},maskAmount:{},scanDuration:{},scanStart:{},scanEnd:{},scanYOffset:{},scanIntensity:{},gridAmount:{},tempMaskAmount:{},tempGridAmount:{},triplanarScale:{},paletteScheme:{},paletteFlow:{},paletteContrast:{},emissiveBoost:{},diffuseMix:{},alphaCutoff:{},maskMapUrl:{},gridMapUrl:{}},T),setup(a,{expose:t}){const e=a,n=new z.TextureLoader;function o(u){return u?ge[u]??ge.colorful:ge.colorful}function i(u){const m=n.load(u);return m.wrapS=z.RepeatWrapping,m.wrapT=z.RepeatWrapping,m.flipY=!1,m.colorSpace=z.NoColorSpace,m.minFilter=z.LinearMipmapLinearFilter,m.magFilter=z.LinearFilter,m}const s={uMaskMap:{value:i(e.maskMapUrl||T.maskMapUrl)},uGridMap:{value:i(e.gridMapUrl||T.gridMapUrl)},uTime:{value:0},uChannelAmount:{value:e.channelAmount},uMaskAmount:{value:e.maskAmount},uScanDuration:{value:e.scanDuration},uScanStart:{value:e.scanStart},uScanEnd:{value:e.scanEnd},uScanYOffset:{value:e.scanYOffset},uScanIntensity:{value:e.scanIntensity},uGridAmount:{value:e.gridAmount},uTempMaskAmount:{value:e.tempMaskAmount},uTempGridAmount:{value:e.tempGridAmount},uTriplanarScale:{value:e.triplanarScale},uPaletteScheme:{value:o(e.paletteScheme)},uPaletteFlow:{value:e.paletteFlow},uPaletteContrast:{value:e.paletteContrast},uEmissiveBoost:{value:e.emissiveBoost},uDiffuseMix:{value:e.diffuseMix},uAlphaCutoff:{value:e.alphaCutoff}},r=new Pe({baseMaterial:z.MeshPhysicalMaterial,vertexShader:Wr,fragmentShader:qr,uniforms:s,color:e.color,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity,metalness:e.metalness,roughness:e.roughness,clearcoat:Math.max(e.clearcoat,1e-4),clearcoatRoughness:e.clearcoatRoughness,envMapIntensity:e.envMapIntensity,ior:e.ior,specularIntensity:e.specularIntensity});r.userData.kMaterialSource="BABYLON.KMaterial/2bIzbNB5YtAk_yswvFuUA",r.userData.kMaterialStages=["KMatStageLight","KMatStageTexture:mTriplanar1:alpha","KMatStageTexture:wPos:linear-gradient","KMatStageTexture:mTriplanar1:grid","KMatStageTexture:temp0:palette"];const{onBeforeRender:c}=N();c(({elapsed:u})=>{r.uniforms.uTime.value=u}),st(()=>e.maskMapUrl,u=>{const m=r.uniforms.uMaskMap.value;r.uniforms.uMaskMap.value=i(u||T.maskMapUrl),m.dispose(),r.needsUpdate=!0}),st(()=>e.gridMapUrl,u=>{const m=r.uniforms.uGridMap.value;r.uniforms.uGridMap.value=i(u||T.gridMapUrl),m.dispose(),r.needsUpdate=!0}),ei(()=>{r.color.setStyle(e.color),r.emissive.setStyle(e.emissive),r.emissiveIntensity=e.emissiveIntensity,r.metalness=e.metalness,r.roughness=e.roughness,r.clearcoat=Math.max(e.clearcoat,1e-4),r.clearcoatRoughness=e.clearcoatRoughness,r.envMapIntensity=e.envMapIntensity,r.ior=e.ior,r.specularIntensity=e.specularIntensity,r.uniforms.uChannelAmount.value=e.channelAmount,r.uniforms.uMaskAmount.value=e.maskAmount,r.uniforms.uScanDuration.value=e.scanDuration,r.uniforms.uScanStart.value=e.scanStart,r.uniforms.uScanEnd.value=e.scanEnd,r.uniforms.uScanYOffset.value=e.scanYOffset,r.uniforms.uScanIntensity.value=e.scanIntensity,r.uniforms.uGridAmount.value=e.gridAmount,r.uniforms.uTempMaskAmount.value=e.tempMaskAmount,r.uniforms.uTempGridAmount.value=e.tempGridAmount,r.uniforms.uTriplanarScale.value=e.triplanarScale,r.uniforms.uPaletteScheme.value=o(e.paletteScheme),r.uniforms.uPaletteFlow.value=e.paletteFlow,r.uniforms.uPaletteContrast.value=e.paletteContrast,r.uniforms.uEmissiveBoost.value=e.emissiveBoost,r.uniforms.uDiffuseMix.value=e.diffuseMix,r.uniforms.uAlphaCutoff.value=e.alphaCutoff});function d(){r.uniforms.uMaskMap.value.dispose(),r.uniforms.uGridMap.value.dispose(),r.dispose()}return ti(d),t({root:r,constructor:z.MeshPhysicalMaterial,defaults:T,controlGroups:Bo,schema:Do,dispose:d}),(u,m)=>(Zr(),Xr("primitive",{object:Jr(r)},null,8,Qr))}});export{xi as CientosShaderMaterial,Ha as MeshDiscardMaterial,Ne as MeshTransmissionMaterial,di as _sfc_main,pi as _sfc_main$1,Ri as _sfc_main$10,Ii as _sfc_main$11,Ei as _sfc_main$12,Ai as _sfc_main$13,Ti as _sfc_main$14,vi as _sfc_main$2,hi as _sfc_main$3,gi as _sfc_main$4,yi as _sfc_main$5,_i as _sfc_main$6,Si as _sfc_main$7,rr as _sfc_main$8,Mr as _sfc_main$9,Ci as blendingOptions,wi as createJumpingBlockMaterialState,Pi as createLiquidMetalMaterialState,Bo as jumpingBlockMaterialControlGroups,Do as jumpingBlockMaterialSchema,Ro as liquidMetalMaterialControlGroups,To as liquidMetalMaterialSchema,dt as materialPresets,ki as sideOptions,ze as useFBO,Qe as useLoader,Mi as useTexture,bi as useTexture$1};
