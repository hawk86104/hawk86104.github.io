import{importShared as c,GLTFLoader as X}from"./3d-tiles-renderer.C365MwoK1791683039781.js";import{defineStore as oe,useLoop as T,useTres as re,_export_sfc as ie,Levioso_default as ae,OrbitControls_default as ce}from"./index.C0YlR4t91791683039781.js";import{_sfc_main$6 as se}from"./domCanvas.BWIvtMkn1791683039781.js";import"./default.vue_vue_type_script_setup_true_lang.1irANfHi1791683039781.js";import"./three-mesh-ui.module.Co5cTC0t1791683039781.js";import"./domPanel.vue_vue_type_style_index_0_lang.D0E7uGqx1791683039781.js";import{Pane as le}from"./tweakpane.BQRZXf8M1791683039781.js";import{useTexture$1 as J,_sfc_main as ve,_sfc_main$1 as fe}from"./index.vue_vue_type_script_setup_true_lang.Dyw8tU3Y1791683039781.js";import"./index.vue_vue_type_script_setup_true_lang.Cu_hYD3t1791683039781.js";import{useGLTF as pe}from"./index.BBmBDM381791683039781.js";import{B as ee}from"./three-custom-shader-material.es.GpnIvggO1791683039781.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.B-vVTh7B1791683039781.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.BJ62RWBM1791683039781.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.BoT7Ag_l1791683039781.js";import{_sfc_main$8 as de}from"./dynamicRotatingBase.vue_vue_type_script_setup_true_lang.6YQM-JbO1791683039781.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.BxHf73Gy1791683039781.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.BYueOuMO1791683039781.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.YgjtOVLz1791683039781.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.B44Ol5P71791683039781.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.CcLJpCeu1791683039781.js";import"./reflectorRoundedBox.vue_vue_type_script_setup_true_lang.BHYRYzX71791683039781.js";import"./particleBase.vue_vue_type_script_setup_true_lang.Bl-vbrG-1791683039781.js";import"./rippleFloor.vue_vue_type_script_setup_true_lang.D06tojzr1791683039781.js";import"./meshReflectionFloor.vue_vue_type_script_setup_true_lang.Cl9vwylS1791683039781.js";import{MeshoptDecoder as ne}from"./Resource.xEVfnMRN1791683039781.js";import{gsapWithCSS as I}from"./index.C1NmcAq51791683039781.js";import{CopyShader as L,RenderPass as ue,EffectComposer as xe}from"./RenderPass.Ibfwz1Iq1791683039781.js";import{UnrealBloomPass as me}from"./UnrealBloomPass.CCr4BI4w1791683039781.js";import{Pass as _e,FullScreenQuad as F}from"./Pass.D8BYo4yk1791683039781.js";const b={uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`},{HalfFloatType:$,NearestFilter:V,NoBlending:ye,ShaderMaterial:k,UniformsUtils:U,WebGLRenderTarget:B}=await c("three");class he extends _e{constructor(e=.96){super(),this.uniforms=U.clone(b.uniforms),this.damp=e,this.compFsMaterial=new k({uniforms:this.uniforms,vertexShader:b.vertexShader,fragmentShader:b.fragmentShader}),this.copyFsMaterial=new k({uniforms:U.clone(L.uniforms),vertexShader:L.vertexShader,fragmentShader:L.fragmentShader,blending:ye,depthTest:!1,depthWrite:!1}),this._textureComp=new B(window.innerWidth,window.innerHeight,{magFilter:V,type:$}),this._textureOld=new B(window.innerWidth,window.innerHeight,{magFilter:V,type:$}),this._compFsQuad=new F(this.compFsMaterial),this._copyFsQuad=new F(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,n,r){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=r.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(),this._copyFsQuad.render(e));const l=this._textureOld;this._textureOld=this._textureComp,this._textureComp=l}setSize(e,n){this._textureComp.setSize(e,n),this._textureOld.setSize(e,n)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}const{ref:A}=await c("vue"),O=oe("Su7s",()=>{const p=A(!0),e=A(0),n=A("#26d6e9");function r(f){p.value=f}function l(f){e.value=f}return{showColorList:p,selColorIndex:e,setShowColorList:r,setSelColorIndex:l,selColorData:n}}),te=p=>{const e=[];return p.traverse(n=>{e.push(n)}),e};var we=`#ifndef FNC_POW5
#define FNC_POW5

float pow5(const in float v) {
    float v2 = v * v;
    return v2 * v2 * v;
}

vec2 pow5(const in vec2 v) {
    vec2 v2 = v * v;
    return v2 * v2 * v;
}

vec3 pow5(const in vec3 v) {
    vec3 v2 = v * v;
    return v2 * v2 * v;
}

vec4 pow5(const in vec4 v) {
    vec4 v2 = v * v;
    return v2 * v2 * v;
}

#endif

#ifndef FNC_SCHLICK
#define FNC_SCHLICK

vec3 schlick(const in vec3 f0, const in float f90, const in float VoH) {
    float f = pow5(1.0 - VoH);
    return f + f0 * (f90 - f);
}

vec3 schlick(const in vec3 f0, const in vec3 f90, const in float VoH) {
    return f0 + (f90 - f0) * pow5(1.0 - VoH);
}

float schlick(const in float f0, const in float f90, const in float VoH) {
    return f0 + (f90 - f0) * pow5(1.0 - VoH);
}

#endif

#ifndef FNC_POW5
#define FNC_POW5

float pow5(const in float v) {
    float v2 = v * v;
    return v2 * v2 * v;
}

vec2 pow5(const in vec2 v) {
    vec2 v2 = v * v;
    return v2 * v2 * v;
}

vec3 pow5(const in vec3 v) {
    vec3 v2 = v * v;
    return v2 * v2 * v;
}

vec4 pow5(const in vec4 v) {
    vec4 v2 = v * v;
    return v2 * v2 * v;
}

#endif
#ifndef EIGHTH_PI
#define EIGHTH_PI 0.39269908169
#endif
#ifndef QTR_PI
#define QTR_PI 0.78539816339
#endif
#ifndef HALF_PI
#define HALF_PI 1.5707963267948966192313216916398
#endif
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif
#ifndef TAU
#define TAU 6.2831853071795864769252867665590
#endif
#ifndef INV_PI
#define INV_PI 0.31830988618379067153776752674503
#endif
#ifndef INV_SQRT_TAU
#define INV_SQRT_TAU 0.39894228040143267793994605993439  
#endif
#ifndef SQRT_HALF_PI
#define SQRT_HALF_PI 1.25331413732
#endif
#ifndef PHI
#define PHI 1.618033988749894848204586834
#endif
#ifndef EPSILON
#define EPSILON 0.0000001
#endif
#ifndef GOLDEN_RATIO
#define GOLDEN_RATIO 1.6180339887
#endif
#ifndef GOLDEN_RATIO_CONJUGATE 
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#endif
#ifndef GOLDEN_ANGLE 
#define GOLDEN_ANGLE 2.39996323
#endif
#ifndef DEG2RAD
#define DEG2RAD (PI / 180.0)
#endif
#ifndef RAD2DEG
#define RAD2DEG (180.0 / PI)
#endif
#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(V) clamp(V, 0.0, 1.0)
#endif

#ifndef FNC_FRESNEL
#define FNC_FRESNEL

vec3 fresnel(const in vec3 f0, vec3 normal, vec3 view) {
   return schlick(f0, 1.0, dot(view, normal));
}

vec3 fresnel(const in vec3 f0, const in float NoV) {
#if defined(TARGET_MOBILE) || defined(PLATFORM_RPI)
    return schlick(f0, 1.0, NoV);
#else
    float f90 = saturate(dot(f0, vec3(50.0 * 0.33)));
    return schlick(f0, f90, NoV);
#endif
}

float fresnel(const in float f0, const in float NoV) {
    return schlick(f0, 1.0, NoV);
}

vec3 fresnel(vec3 f0, float NoV, float roughness) {
    return f0 + (max(vec3(1.0 - roughness), f0) - f0) * pow5(1.0 - NoV);
}

#endif
vec4 packedTexture2DLOD(sampler2D tex, vec2 uv, int level) {

		
  float targetSubview = 1.0 / pow(2.0, float(level));
  float widthRatio = 2.0 / 3.0;
  vec2 scaledDimensions = vec2(targetSubview * widthRatio, targetSubview);

		
		
  vec2 offset = vec2(level > 0 ? widthRatio : 0.0, level > 0 ? targetSubview : 0.0);

  vec2 samplePoint = mix(offset, offset + scaledDimensions, uv);
  return texture2D(tex, samplePoint);

}

vec4 packedTexture2DLOD(sampler2D tex, vec2 uv, float level) {

  float ratio = mod(level, 1.0);
  int minLevel = int(floor(level));
  int maxLevel = int(ceil(level));

  vec4 minValue = packedTexture2DLOD(tex, uv, minLevel);
  vec4 maxValue = packedTexture2DLOD(tex, uv, maxLevel);

  return mix(minValue, maxValue, ratio);

}

	
vec4 packedTexture2DLOD(sampler2D tex, vec2 uv, int level, vec2 originalPixelSize) {

  float floatLevel = float(level);
  vec2 atlasSize;
  atlasSize.x = floor(originalPixelSize.x * 1.5);
  atlasSize.y = originalPixelSize.y;

		
  float maxLevel = min(floor(log2(originalPixelSize.x)), floor(log2(originalPixelSize.y)));
  floatLevel = min(floatLevel, maxLevel);

		
  vec2 currentPixelDimensions = floor(originalPixelSize / pow(2.0, floatLevel));
  vec2 pixelOffset = vec2(floatLevel > 0.0 ? originalPixelSize.x : 0.0, floatLevel > 0.0 ? currentPixelDimensions.y : 0.0);

		
		
  vec2 minPixel = pixelOffset;
  vec2 maxPixel = pixelOffset + currentPixelDimensions;
  vec2 samplePoint = mix(minPixel, maxPixel, uv);
  samplePoint /= atlasSize;

  vec2 halfPixelSize = 1.0 / (2.0 * atlasSize);
  samplePoint = min(samplePoint, maxPixel / atlasSize - halfPixelSize);
  samplePoint = max(samplePoint, minPixel / atlasSize + halfPixelSize);

  return texture2D(tex, samplePoint);

}

vec4 packedTexture2DLOD(sampler2D tex, vec2 uv, float level, vec2 originalPixelSize) {

  float ratio = mod(level, 1.0);
  int minLevel = int(floor(level));
  int maxLevel = int(ceil(level));

  vec4 minValue = packedTexture2DLOD(tex, uv, minLevel, originalPixelSize);
  vec4 maxValue = packedTexture2DLOD(tex, uv, maxLevel, originalPixelSize);

  return mix(minValue, maxValue, ratio);

}
varying vec2 vUv;
varying vec4 vWorldPosition;

uniform vec3 uColor;
uniform mat4 uReflectMatrix;
uniform sampler2D uReflectTexture;
uniform float uReflectIntensity;
uniform float uIntensity;
uniform float uLevel;
uniform vec2 uResolution;
uniform float uTime;

void main() {
  vec3 worldPos = vWorldPosition.xyz;
  worldPos.x -= uTime * 0.1;
  vec3 surfaceNormal = texture2D(normalMap, worldPos.xz).xyz * 2.0 - 1.0;
  surfaceNormal = surfaceNormal.rbg;
  surfaceNormal = normalize(surfaceNormal);

  vec3 viewDir = vViewPosition;
  float d = length(viewDir);
  viewDir = normalize(viewDir);
  vec2 distortion = surfaceNormal.xz * (0.001 + 1. / d);

  vec4 reflectPoint = uReflectMatrix * vWorldPosition;
  reflectPoint = reflectPoint / reflectPoint.w;
  vec2 uv = reflectPoint.xy + distortion * uIntensity;
  vec3 reflectionSample =
      packedTexture2DLOD(uReflectTexture, uv, uLevel, uResolution).xyz;
  reflectionSample *= uReflectIntensity;

  vec3 strength = fresnel(vec3(0.), vNormal, viewDir);
  vec3 col = uColor;
  col = mix(col, reflectionSample, strength);
  csm_DiffuseColor = vec4(col, 1.);
}`,ze=`varying vec2 vUv;
varying vec4 vWorldPosition;

void main() {
  vec3 p = position;

  csm_Position = p;

  vUv = uv;
  vWorldPosition = modelMatrix * vec4(p, 1);
}`;const E=await c("three"),Ce=(p,e)=>{const n={uColor:{type:"c",value:new E.Color("white")},uReflectMatrix:{type:"m4",value:new E.Matrix4},uReflectTexture:{type:"t",value:new E.Texture},uReflectIntensity:{type:"f",value:15},uIntensity:{type:"f",value:1},uLevel:{type:"f",value:3.5},uResolution:{type:"v2",value:new E.Vector2},uTime:{type:"f",value:0}},r=new ee({baseMaterial:p.material,uniforms:n,vertexShader:ze,fragmentShader:we,silent:!0});return n.uReflectTexture.value=e.renderTarget.texture,n.uReflectMatrix.value=e.matrix,n.uResolution.value.set(e.renderTarget.width,e.renderTarget.height),r},{withAsyncContext:G,defineComponent:Me}=await c("vue"),{unref:N,createElementVNode:ge,createVNode:Se,Fragment:Ne,openBlock:De,createElementBlock:Re}=await c("vue"),Pe=["object"],M=await c("three"),{ref:H,watch:j,toRaw:Ee}=await c("vue"),Le=Me({__name:"startroom",props:{hide:{type:Boolean,default:!1}},async setup(p,{expose:e}){let n,r;const l=p,{scene:f}=([n,r]=G(()=>pe("https://opensource.cdn.icegl.cn/model/industry4/su7_car/su7_startroom.raw.glb")),n=await n,r(),n),t=([n,r]=G(()=>J(["./plugins/industry4/texture/t_startroom_light.raw.jpg","./plugins/industry4/texture/t_startroom_ao.raw.jpg","./plugins/industry4/texture/t_floor_roughness.webp","./plugins/industry4/texture/t_floor_normal.webp"])),n=await n,r(),n);t[2].colorSpace=M.LinearSRGBColorSpace,t[2].wrapS=t[2].wrapT=M.RepeatWrapping,t[3].colorSpace=M.LinearSRGBColorSpace,t[3].wrapS=t[3].wrapT=M.RepeatWrapping,t[1].flipY=!1,t[1].channel=1,t[1].flipY=!1,t[1].colorSpace=M.LinearSRGBColorSpace,t[0].channel=1,t[0].flipY=!1,t[0].colorSpace=M.SRGBColorSpace;const v=te(f),o=v[1],a=o.material;a.emissive=new M.Color("white"),a.emissiveIntensity=1,a.toneMapped=!1,a.transparent=!0,a.alphaTest=.01,o.name="lightTop";const i=v[2],y=i.material;y.roughnessMap=t[2],y.normalMap=t[3],y.aoMap=t[1],y.lightMap=t[0],y.envMap=t[2],y.envMapIntensity=0,y.transparent=!0,i.name="floorBtm";const C=H(null);j(()=>C,h=>{i.material=Ce(i,h.value)},{deep:!0}),j(()=>l.hide,h=>{h?(i.material.envMap=null,i.material.envMapIntensity=1,i.material.opacity=0,a.opacity=0):(i.material.envMap=t[2],i.material.envMapIntensity=0,a.opacity=1)});const u=H();return e({meshList:[o,i],tresMesh:u}),(h,m)=>(De(),Re(Ne,null,[ge("primitive",{object:Ee(N(f)),ref_key:"tresMesh",ref:u},null,8,Pe),Se(N(de),{ref_key:"reflectorMipMapRef",ref:C,parent:N(i),ignoreObjects:[N(o),N(i)]},null,8,["parent","ignoreObjects"])],64))}}),{withAsyncContext:W,defineComponent:be}=await c("vue"),{unref:Ae,openBlock:Te,createElementBlock:Oe}=await c("vue"),Ie=["object","rotation-y"],{watch:Q,toRaw:Fe}=await c("vue"),g=await c("three"),$e=be({__name:"car",props:{run:{type:Boolean,default:!1}},async setup(p){let e,n;const r=O(),l=p,f=new X;f.setMeshoptDecoder(ne);const{scene:t}=([e,n]=W(()=>f.loadAsync("https://opensource.cdn.icegl.cn/model/industry4/su7_car/sm_car.gltf")),e=await e,n(),e);function v(s){let d=new Map;return s.traverse(x=>{x.isMesh&&(Array.isArray(x.material)?x.material.forEach(w=>{w.name&&d.set(w.name,w)}):x.material.name&&d.set(x.material.name,x.material))}),Object.fromEntries(d)}const o=v(t),a=([e,n]=W(()=>J(["./plugins/industry4/texture/t_car_body_AO.raw.jpg","./plugins/industry4/texture/t_cat_car_body_bc.webp","./plugins/industry4/texture/t_gm_car_body_bc.webp"])),e=await e,n(),e);a[0].colorSpace=g.LinearSRGBColorSpace,a[0].minFilter=g.NearestFilter,a[0].magFilter=g.NearestFilter,a[0].channel=1;for(let s=0;s<a.length;s++)a[s].flipY=!1;const i=te(t),C=i[2].material;C.envMapIntensity=4,C.color=new g.Color("#26d6e9"),i.forEach(s=>{if(s.isMesh){const d=s.material;d.aoMap=a[0]}});const u=i[35];u.children.forEach(s=>{const x=s.material;x.envMapIntensity=4});const{onBeforeRender:h}=T();h(({delta:s})=>{l.run&&u.children.forEach(d=>{d.rotateZ(-s*30*.5)})}),Q(()=>l.run,s=>{s?u.children.forEach(d=>{const w=d.material;w.roughness=0,w.envMapIntensity=3}):u.children.forEach(d=>{const w=d.material;w.roughness=1,w.envMapIntensity=4})});const m={color:new g.Color,targetColor:new g.Color};return Q(()=>r.selColorData,s=>{I.killTweensOf(m),s==="c8.webp"?(o.Car_body.color.set("#ffffff"),o.Car_body.map=a[2],o.Car_body.envMapIntensity=2):s==="c9.webp"?(o.Car_body.color.set("#ffffff"),o.Car_body.map=a[1],o.Car_body.envMapIntensity=2):(o.Car_body.map=null,m.color=o.Car_body.color,m.targetColor=new g.Color(s),I.to(m.color,{duration:.66,ease:"power1.out",r:m.targetColor.r,g:m.targetColor.g,b:m.targetColor.b,onUpdate:()=>{o.Car_body.color.set(m.color)},onComplete:()=>{o.Car_body.envMapIntensity=4,o.Car_body.needsUpdate=!0}})),o.Car_body.needsUpdate=!0}),(s,d)=>(Te(),Oe("primitive",{object:Fe(Ae(t)),"rotation-y":Math.PI},null,8,Ie))}});var Ve=`varying vec2 vUv;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`,ke=`#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif

#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x) {
#ifdef RANDOM_SINLESS
    x = fract(x * RANDOM_SCALE.x);
    x *= x + 33.33;
    x *= x + x;
    return fract(x);
#else
    return fract(sin(x) * 43758.5453);
#endif
}

float random(in vec2 st) {
#ifdef RANDOM_SINLESS
    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
#else
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
#endif
}

float random(in vec3 pos) {
#ifdef RANDOM_SINLESS
    pos  = fract(pos * RANDOM_SCALE.xyz);
    pos += dot(pos, pos.zyx + 31.32);
    return fract((pos.x + pos.y) * pos.z);
#else
    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);
#endif
}

float random(in vec4 pos) {
#ifdef RANDOM_SINLESS
    pos = fract(pos * RANDOM_SCALE);
    pos += dot(pos, pos.wzxy + 33.33);
    return fract((pos.x + pos.y) * (pos.z + pos.w));
#else
    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));
    return fract(sin(dot_product) * 43758.5453);
#endif
}

vec2 random2(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec2 p) {
    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec2 random2(vec3 p3) {
    p3 = fract(p3 * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

vec3 random3(float p) {
    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx); 
}

vec3 random3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);
    p3 += dot(p3, p3.yxz + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

vec3 random3(vec3 p) {
    p = fract(p * RANDOM_SCALE.xyz);
    p += dot(p, p.yxz + 19.19);
    return fract((p.xxy + p.yzz) * p.zyx);
}

vec4 random4(float p) {
    vec4 p4 = fract(p * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   
}

vec4 random4(vec2 p) {
    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec3 p) {
    vec4 p4 = fract(p.xyzx * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}

vec4 random4(vec4 p4) {
    p4 = fract(p4  * RANDOM_SCALE);
    p4 += dot(p4, p4.wzxy + 19.19);
    return fract((p4.xxyz + p4.yzzw) * p4.zywx);
}
#endif
#ifndef FNC_MAP
#define FNC_MAP
float map(float v, float iMin, float iMax ) { return (v-iMin)/(iMax-iMin); }
vec2 map(vec2 v, vec2 iMin, vec2 iMax ) { return (v-iMin)/(iMax-iMin); }
vec3 map(vec3 v, vec3 iMin, vec3 iMax ) { return (v-iMin)/(iMax-iMin); }
vec4 map(vec4 v, vec4 iMin, vec4 iMax ) { return (v-iMin)/(iMax-iMin); }

float map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec2 map(in vec2 v, in vec2 iMin, in vec2 iMax, in vec2 oMin, in vec2 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec3 map(in vec3 v, in vec3 iMin, in vec3 iMax, in vec3 oMin, in vec3 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
vec4 map(in vec4 v, in vec4 iMin, in vec4 iMax, in vec4 oMin, in vec4 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }
#endif
vec2 hash(vec2 p)
{
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1. + 2. * fract(sin(p) * 43758.5453123);
}

float noise(in vec2 p) {
  const float K1 = .366025404;
  const float K2 = .211324865;

  vec2 i = floor(p + (p.x + p.y) * K1);
  vec2 a = p - i + (i.x + i.y) * K2;
  float m = step(a.y, a.x);
  vec2 o = vec2(m, 1. - m);
  vec2 b = a - o + K2;
  vec2 c = a - 1. + 2. * K2;
  vec3 h = max(.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.);
  vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.)), dot(b, hash(i + o)), dot(c, hash(i + 1.)));
  return dot(n, vec3(70.));
}
#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif
#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }
vec2 permute(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec3 permute(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }
vec4 permute(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }

#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;
    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;
    return p;
}
#endif

#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v) {
    const vec4 C = vec4(0.211324865405187,  
                        0.366025403784439,  
                        -0.577350269189626,  
                        0.024390243902439); 
    
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);

    
    vec2 i1;
    
    
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    
    
    
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    
    i = mod289(i); 
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;

    
    

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    
    
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

    
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float snoise(in vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    
    
    
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; 
    vec3 x3 = x0 - D.yyy;      

    
    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    
    
    float n_ = 0.142857142857; 
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

float snoise(in vec4 v) {
    const vec4  C = vec4( 0.138196601125011,  
                        0.276393202250021,  
                        0.414589803375032,  
                        -0.447213595499958); 

    
    vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); 
    vec4 x0 = v -   i + dot(i, C.xxxx);

    

    
    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    
    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    
    
    
    
    
    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    
    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

    
    
    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    
    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
    m0 = m0 * m0;
    m1 = m1 * m1;
    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
}

vec2 snoise2( vec2 x ){
    float s  = snoise(vec2( x ));
    float s1 = snoise(vec2( x.y - 19.1, x.x + 47.2 ));
    return vec2( s , s1 );
}

vec3 snoise3( vec3 x ){
    float s  = snoise(vec3( x ));
    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    return vec3( s , s1 , s2 );
}

vec3 snoise3( vec4 x ){
    float s  = snoise(vec4( x ));
    float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));
    float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));
    return vec3( s , s1 , s2 );
}

#endif
varying vec2 vUv;
uniform float uTime;
uniform float uSpeedFactor;

vec3 getColor(vec2 uv) {
  uv += vec2(9., 0.);
  float r = random(uv + vec2(12., 2.));
  float g = random(uv + vec2(7., 5.));
  float b = random(uv);
  vec3 col = vec3(r, g, b);
  return col;
}

vec3 colorNoise(vec2 uv) {
  vec2 newUV = floor(uv);
  vec2 size = vec2(1.);
  vec3 v1 = getColor((newUV + vec2(0.)) / size);
  vec3 v2 = getColor((newUV + vec2(0., 1.)) / size);
  vec3 v3 = getColor((newUV + vec2(1., 0.)) / size);
  vec3 v4 = getColor((newUV + vec2(1.)) / size);
  vec2 factor = smoothstep(0., 1., fract(uv));
  vec3 v1Tov2 = mix(v1, v2, factor.y);
  vec3 v3Tov4 = mix(v3, v4, factor.y);
  vec3 mixColor = mix(v1Tov2, v3Tov4, factor.x);
  return mixColor;
}

void main() {
  vec2 newUV = vUv;
  newUV.x += uTime * .5;
  float alpha = snoise(newUV * vec2(3., 100.));
  alpha = map(alpha, -1., 1., 0., 1.);
  alpha = pow(clamp(alpha - .05, 0., 1.), 13.);
  alpha = smoothstep(0., .04, alpha);
  vec3 col = vec3(1.);
  col = colorNoise(newUV * vec2(10., 100.));
  col *= vec3(1.5, 1., 400.);
  alpha *= smoothstep(.02, .5, vUv.x) * smoothstep(.02, .5, 1. - vUv.x);
  alpha *= smoothstep(.01, .1, vUv.y) * smoothstep(.01, .1, 1. - vUv.y);
  alpha *= smoothstep(0., 1., uSpeedFactor) * 5.;
  csm_FragColor = vec4(col, alpha);
}`;const{withAsyncContext:Ue,defineComponent:Be}=await c("vue"),{unref:Ge,openBlock:He,createElementBlock:je}=await c("vue"),We=["object"],Qe=await c("three"),Ye=Be({__name:"speedup",async setup(p){let e,n;const r=new X;r.setMeshoptDecoder(ne);const{scene:l}=([e,n]=Ue(()=>r.loadAsync("https://opensource.cdn.icegl.cn/model/industry4/su7_car/sm_speedup.gltf")),e=await e,n(),e),f={uTime:{value:0},uSpeedFactor:{value:0}},t=new ee({baseMaterial:Qe.MeshStandardMaterial,uniforms:f,vertexShader:Ve,fragmentShader:ke,transparent:!0,depthWrite:!1});l.traverse(o=>{if(o.isMesh){const a=o;a.material=t}});const{onBeforeRender:v}=T();return v(({delta:o})=>{t.uniforms.uTime.value+=o,t.uniforms.uSpeedFactor.value=1}),(o,a)=>(He(),je("primitive",{object:Ge(l)},null,8,We))}}),{defineComponent:Ke}=await c("vue"),{watchEffect:qe,watch:Ze}=await c("vue"),Xe=await c("three"),Je=Ke({__name:"effect",props:{hide:{type:Boolean,default:!1}},setup(p){const e=p,{camera:n,renderer:r,scene:l,sizes:f}=re(),t={threshold:.666,strength:.166,radius:.3};let v=null,o=null;const a=(u,h,m,s,d)=>{const x=new ue(u,h);o=new me(new Xe.Vector2(s,d),t.strength,t.radius,t.threshold),v=new xe(m),v.addPass(x),v.addPass(o)};let i=null;const y=u=>{i=new he,i.uniforms.damp.value=.2,i.enabled=!1,v.addPass(i)};qe(()=>{f.width.value&&(a(l.value,n.value,r,f.width.value,f.height.value),y())}),Ze(()=>e.hide,u=>{u?(o.strength=.01,o.radius=10,i.enabled=!0):(o.strength=.166,o.radius=.3,i.enabled=!1)});const{onBeforeRender:C}=T();return C(()=>{v&&v.render()}),(u,h)=>null}}),{defineComponent:en}=await c("vue"),{unref:Y,renderList:nn,Fragment:tn,openBlock:K,createElementBlock:q,normalizeClass:on,normalizeStyle:rn,createElementVNode:an,vShow:cn,withDirectives:sn}=await c("vue"),ln={class:"colorList"},vn=["onClick"],fn=en({__name:"UIcarSkin",setup(p){const e=O(),n=[{src:"c1.webp",color:"#26d6e9"},{src:"c2.webp",color:"#444c3c"},{src:"c3.webp",color:"#5d5d5d"},{src:"c4.webp",color:"#8a8a8a"},{src:"c5.webp",color:"#3e3543"},{src:"c6.webp",color:"#822817"},{src:"c7.webp",color:"#e0b023"},{src:"c8.webp",color:"c8.webp"},{src:"c9.webp",color:"c9.webp"}],r=l=>{e.selColorIndex=l,e.selColorData=n[l].color};return(l,f)=>sn((K(),q("div",ln,[(K(),q(tn,null,nn(n,(t,v)=>an("div",{key:v,class:on({"color-item":Y(e).selColorIndex===v}),style:rn({backgroundImage:`url(@/../plugins/industry4/icon/${t.src})`,width:"32px",height:"32px",borderRadius:"50%",margin:"8px",backgroundSize:"100% 100%",cursor:"pointer"}),onClick:o=>r(v)},null,14,vn)),64))],512)),[[cn,Y(e).showColorList]])}}),pn=ie(fn,[["__scopeId","data-v-b8b2a8f6"]]),{defineComponent:dn}=await c("vue"),{unref:D,createVNode:_,Suspense:R,withCtx:z,openBlock:S,createBlock:P,createElementVNode:un,normalizeProps:xn,guardReactiveProps:mn,resolveComponent:_n,mergeProps:yn,Fragment:hn,createElementBlock:wn}=await c("vue"),{reactive:Z,ref:zn}=await c("vue"),Zn=dn({__name:"su7",setup(p){const e=Z({clearColor:"#000",antialias:!0,physicallyCorrectLights:!0,logarithmicDepthBuffer:!1,renderMode:"manual"}),n=Z({}),r=zn(!1),l=new le({title:"参数"});l.addBinding(r,"value",{label:"流光模式"});const f=O();return l.addBinding(f,"showColorList",{label:"选择皮肤"}),(t,v)=>{const o=_n("TresCanvas");return S(),wn(hn,null,[(S(),P(R,null,{default:z(()=>[_(D(se))]),_:1})),_(o,yn(e,{"window-size":""}),{default:z(()=>[_(D(ae),{speed:r.value?66:0,rotationFactor:.1,floatFactor:.1,range:[-.2,.1]},{default:z(()=>[...v[0]||(v[0]=[un("TresPerspectiveCamera",{position:[0,5,8],fov:45,near:.1,far:500},null,-1)])]),_:1},8,["speed"]),_(D(ce),xn(mn(n)),null,16),(S(),P(R,null,{default:z(()=>[_($e,{run:r.value},null,8,["run"])]),_:1})),(S(),P(R,null,{default:z(()=>[_(Ye,{visible:r.value},null,8,["visible"])]),_:1})),(S(),P(R,null,{default:z(()=>[_(Le,{hide:r.value},null,8,["hide"])]),_:1})),(S(),P(R,null,{default:z(()=>[_(D(ve),{blur:0,far:1e4,useDefaultScene:r.value},{default:z(()=>[_(D(fe),{intensity:6,"rotation-x":Math.PI/2,position:[0,7,0],scale:[10,10,2]},null,8,["rotation-x"])]),_:1},8,["useDefaultScene"])]),_:1})),_(Je,{hide:r.value},null,8,["hide"])]),_:1},16),_(pn)],64)}}});export{Zn as default};
