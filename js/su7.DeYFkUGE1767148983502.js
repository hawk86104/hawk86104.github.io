import{importShared as g,GLTFLoader as aa}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{defineStore as ia,_l as N,Fs as oa,_export_sfc as ta,yk as ra,Kk as pa}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main$6 as fa}from"./generalFont.vue_vue_type_script_setup_true_lang.Cx7Vff0m1767148983502.js";import"./default.vue_vue_type_script_setup_true_lang.Bjy6WD1C1767148983502.js";import"./three-mesh-ui.module.Cv5lk1vQ1767148983502.js";import"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import{Pane as la}from"./tweakpane.BQRZXf8M1767148983502.js";import{useTexture$1 as ea,_sfc_main as sa,_sfc_main$1 as da}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{useGLTF as va}from"./index.Bk2zy1aS1767148983502.js";import{B as ba}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";import"./reflectorDiffuse.vue_vue_type_script_setup_true_lang.Cxj_Ip691767148983502.js";import"./reflectorDUDV.vue_vue_type_script_setup_true_lang.DYMkkQ781767148983502.js";import"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.T7UkXoyg1767148983502.js";import{_sfc_main$9 as ma}from"./dynamicRotatingBase.vue_vue_type_script_setup_true_lang.BVQWYa0i1767148983502.js";import"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.BCd7Uxt-1767148983502.js";import"./gridPlusCom.vue_vue_type_script_setup_true_lang.x_N2tft71767148983502.js";import"./videoFloor.vue_vue_type_script_setup_true_lang.Xg1Eqw4f1767148983502.js";import"./digitalGround.vue_vue_type_script_setup_true_lang.DBVFezcY1767148983502.js";import"./imgFloor.vue_vue_type_script_setup_true_lang.BPVumalx1767148983502.js";import"./reflectorRoundedBox.vue_vue_type_script_setup_true_lang.BOdU7iQo1767148983502.js";import"./particleBase.vue_vue_type_script_setup_true_lang.CIf_5jma1767148983502.js";import"./rippleFloor.vue_vue_type_script_setup_true_lang.BmWDhTNl1767148983502.js";import{gsapWithCSS as W}from"./index.Cpf5Yeb11767148983502.js";import{RenderPass as xa,EffectComposer as ga}from"./RenderPass.DewL5X8q1767148983502.js";import{UnrealBloomPass as ha}from"./UnrealBloomPass.Ct_StmlH1767148983502.js";import{AfterimagePass as ua}from"./AfterimagePass.wPbmk7rn1767148983502.js";const{ref:T}=await g("vue"),Q=ia("Su7s",()=>{const h=T(!0),c=T(0),t=T("#26d6e9");function p(r){h.value=r}function m(r){c.value=r}return{showColorList:h,selColorIndex:c,setShowColorList:p,setSelColorIndex:m,selColorData:t}}),na=h=>{const c=[];return h.traverse(t=>{c.push(t)}),c};var ka=`#ifndef FNC_POW5
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
}`,wa=`varying vec2 vUv;
varying vec4 vWorldPosition;

void main() {
  vec3 p = position;

  csm_Position = p;

  vUv = uv;
  vWorldPosition = modelMatrix * vec4(p, 1);
}`;const P=await g("three"),ja=(h,c)=>{const t={uColor:{type:"c",value:new P.Color("white")},uReflectMatrix:{type:"m4",value:new P.Matrix4},uReflectTexture:{type:"t",value:new P.Texture},uReflectIntensity:{type:"f",value:15},uIntensity:{type:"f",value:1},uLevel:{type:"f",value:3.5},uResolution:{type:"v2",value:new P.Vector2},uTime:{type:"f",value:0}},p=new ba({baseMaterial:h.material,uniforms:t,vertexShader:wa,fragmentShader:ka,silent:!0});return t.uReflectTexture.value=c.renderTarget.texture,t.uReflectMatrix.value=c.matrix,t.uResolution.value.set(c.renderTarget.width,c.renderTarget.height),p},{withAsyncContext:V,defineComponent:za}=await g("vue"),{unref:M,createElementVNode:ya,createVNode:Aa,Fragment:_a,openBlock:Fa,createElementBlock:Sa}=await g("vue"),Ca=["object"],S=await g("three"),{ref:B,watch:U,toRaw:Ra}=await g("vue"),Oa=za({__name:"startroom",props:{hide:{type:Boolean,default:!1}},async setup(h,{expose:c}){let t,p;const m=h,{scene:r}=([t,p]=V(()=>va("https://opensource.cdn.icegl.cn/model/industry4/su7_car/su7_startroom.raw.glb")),t=await t,p(),t),i=([t,p]=V(()=>ea(["./plugins/industry4/texture/t_startroom_light.raw.jpg","./plugins/industry4/texture/t_startroom_ao.raw.jpg","./plugins/industry4/texture/t_floor_roughness.webp","./plugins/industry4/texture/t_floor_normal.webp"])),t=await t,p(),t);i[2].colorSpace=S.LinearSRGBColorSpace,i[2].wrapS=i[2].wrapT=S.RepeatWrapping,i[3].colorSpace=S.LinearSRGBColorSpace,i[3].wrapS=i[3].wrapT=S.RepeatWrapping,i[1].flipY=!1,i[1].channel=1,i[1].flipY=!1,i[1].colorSpace=S.LinearSRGBColorSpace,i[0].channel=1,i[0].flipY=!1,i[0].colorSpace=S.SRGBColorSpace;const v=na(r),n=v[1],f=n.material;f.emissive=new S.Color("white"),f.emissiveIntensity=1,f.toneMapped=!1,f.transparent=!0,f.alphaTest=.01,n.name="lightTop";const l=v[2],x=l.material;x.roughnessMap=i[2],x.normalMap=i[3],x.aoMap=i[1],x.lightMap=i[0],x.envMap=i[2],x.envMapIntensity=0,x.transparent=!0,l.name="floorBtm";const y=B(null);U(()=>y,j=>{l.material=ja(l,j.value)},{deep:!0}),U(()=>m.hide,j=>{j?(l.material.envMap=null,l.material.envMapIntensity=1,l.material.opacity=0,f.opacity=0):(l.material.envMap=i[2],l.material.envMapIntensity=0,f.opacity=1)});const u=B();return c({meshList:[n,l],tresMesh:u}),(j,w)=>(Fa(),Sa(_a,null,[ya("primitive",{object:Ra(M(r)),ref_key:"tresMesh",ref:u},null,8,Ca),Aa(M(ma),{ref_key:"reflectorMipMapRef",ref:y,parent:M(l),ignoreObjects:[M(n),M(l)]},null,8,["parent","ignoreObjects"])],64))}});var ca=function(){var h="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",c="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),p=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var m=WebAssembly.validate(t)?v(c):v(h),r,i=WebAssembly.instantiate(m,{}).then(function(e){r=e.instance,r.exports.__wasm_call_ctors()});function v(e){for(var a=new Uint8Array(e.length),b=0;b<e.length;++b){var o=e.charCodeAt(b);a[b]=o>96?o-97:o>64?o-39:o+4}for(var s=0,b=0;b<e.length;++b)a[s++]=a[b]<60?p[a[b]]:(a[b]-60)*64+a[++b];return a.buffer.slice(0,s)}function n(e,a,b,o,s,k,F){var R=e.exports.sbrk,q=o+3&-4,A=R(q*s),H=R(k.length),K=new Uint8Array(e.exports.memory.buffer);K.set(k,H);var L=a(A,o,s,H,k.length);if(L==0&&F&&F(A,q,s),b.set(K.subarray(A,A+o*s)),R(A-R(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var f={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},x=[],y=0;function u(e){var a={object:new Worker(e),pending:0,requests:{}};return a.object.onmessage=function(b){var o=b.data;a.pending-=o.count,a.requests[o.id][o.action](o.value),delete a.requests[o.id]},a}function j(e){for(var a="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(m)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+d.name+";"+n.toString()+d.toString(),b=new Blob([a],{type:"text/javascript"}),o=URL.createObjectURL(b),s=x.length;s<e;++s)x[s]=u(o);for(var s=e;s<x.length;++s)x[s].object.postMessage({});x.length=e,URL.revokeObjectURL(o)}function w(e,a,b,o,s){for(var k=x[0],F=1;F<x.length;++F)x[F].pending<k.pending&&(k=x[F]);return new Promise(function(R,q){var A=new Uint8Array(b),H=++y;k.pending+=e,k.requests[H]={resolve:R,reject:q},k.object.postMessage({id:H,count:e,size:a,source:A,mode:o,filter:s},[A.buffer])})}function d(e){var a=e.data;if(!a.id)return self.close();self.ready.then(function(b){try{var o=new Uint8Array(a.count*a.size);n(b,b.exports[a.mode],o,a.count,a.size,a.source,b.exports[a.filter]),self.postMessage({id:a.id,count:a.count,action:"resolve",value:o},[o.buffer])}catch(s){self.postMessage({id:a.id,count:a.count,action:"reject",value:s})}})}return{ready:i,supported:!0,useWorkers:function(e){j(e)},decodeVertexBuffer:function(e,a,b,o,s){n(r,r.exports.meshopt_decodeVertexBuffer,e,a,b,o,r.exports[f[s]])},decodeIndexBuffer:function(e,a,b,o){n(r,r.exports.meshopt_decodeIndexBuffer,e,a,b,o)},decodeIndexSequence:function(e,a,b,o){n(r,r.exports.meshopt_decodeIndexSequence,e,a,b,o)},decodeGltfBuffer:function(e,a,b,o,s,k){n(r,r.exports[l[s]],e,a,b,o,r.exports[f[k]])},decodeGltfBufferAsync:function(e,a,b,o,s){return x.length>0?w(e,a,b,l[o],f[s]):i.then(function(){var k=new Uint8Array(e*a);return n(r,r.exports[l[o]],k,e,a,b,r.exports[f[s]]),k})}}}();const{withAsyncContext:J,defineComponent:Ha}=await g("vue"),{unref:Ma,openBlock:Ga,createElementBlock:Ea}=await g("vue"),Da=["object","rotation-y"],{watch:Y,toRaw:qa}=await g("vue"),C=await g("three"),Pa=Ha({__name:"car",props:{run:{type:Boolean,default:!1}},async setup(h){let c,t;const p=Q(),m=h,r=new aa;r.setMeshoptDecoder(ca);const{scene:i}=([c,t]=J(()=>r.loadAsync("https://opensource.cdn.icegl.cn/model/industry4/su7_car/sm_car.gltf")),c=await c,t(),c);function v(d){let e=new Map;return d.traverse(a=>{a.isMesh&&(Array.isArray(a.material)?a.material.forEach(b=>{b.name&&e.set(b.name,b)}):a.material.name&&e.set(a.material.name,a.material))}),Object.fromEntries(e)}const n=v(i),f=([c,t]=J(()=>ea(["./plugins/industry4/texture/t_car_body_AO.raw.jpg","./plugins/industry4/texture/t_cat_car_body_bc.webp","./plugins/industry4/texture/t_gm_car_body_bc.webp"])),c=await c,t(),c);f[0].colorSpace=C.LinearSRGBColorSpace,f[0].minFilter=C.NearestFilter,f[0].magFilter=C.NearestFilter,f[0].channel=1;for(let d=0;d<f.length;d++)f[d].flipY=!1;const l=na(i),y=l[2].material;y.envMapIntensity=4,y.color=new C.Color("#26d6e9"),l.forEach(d=>{if(d.isMesh){const e=d.material;e.aoMap=f[0]}});const u=l[35];u.children.forEach(d=>{const a=d.material;a.envMapIntensity=4});const{onBeforeRender:j}=N();j(({delta:d})=>{m.run&&u.children.forEach(e=>{e.rotateZ(-d*30*.5)})}),Y(()=>m.run,d=>{d?u.children.forEach(e=>{const b=e.material;b.roughness=0,b.envMapIntensity=3}):u.children.forEach(e=>{const b=e.material;b.roughness=1,b.envMapIntensity=4})});const w={color:new C.Color,targetColor:new C.Color};return Y(()=>p.selColorData,d=>{W.killTweensOf(w),d==="c8.webp"?(n.Car_body.color.set("#ffffff"),n.Car_body.map=f[2],n.Car_body.envMapIntensity=2):d==="c9.webp"?(n.Car_body.color.set("#ffffff"),n.Car_body.map=f[1],n.Car_body.envMapIntensity=2):(n.Car_body.map=null,w.color=n.Car_body.color,w.targetColor=new C.Color(d),W.to(w.color,{duration:.66,ease:"power1.out",r:w.targetColor.r,g:w.targetColor.g,b:w.targetColor.b,onUpdate:()=>{n.Car_body.color.set(w.color)},onComplete:()=>{n.Car_body.envMapIntensity=4,n.Car_body.needsUpdate=!0}})),n.Car_body.needsUpdate=!0}),(d,e)=>(Ga(),Ea("primitive",{object:qa(Ma(i)),"rotation-y":Math.PI},null,8,Da))}});var La=`varying vec2 vUv;
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vUv = uv;
}`,Ta=`#ifndef RANDOM_SCALE
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
}`;const{withAsyncContext:Na,defineComponent:Qa}=await g("vue"),{unref:Ka,openBlock:Wa,createElementBlock:Va}=await g("vue"),Ba=["object"],Ua=await g("three"),Ja=Qa({__name:"speedup",async setup(h){let c,t;const p=new aa;p.setMeshoptDecoder(ca);const{scene:m}=([c,t]=Na(()=>p.loadAsync("https://opensource.cdn.icegl.cn/model/industry4/su7_car/sm_speedup.gltf")),c=await c,t(),c),r={uTime:{value:0},uSpeedFactor:{value:0}},i=new ba({baseMaterial:Ua.MeshStandardMaterial,uniforms:r,vertexShader:La,fragmentShader:Ta,transparent:!0,depthWrite:!1});m.traverse(n=>{if(n.isMesh){const f=n;f.material=i}});const{onBeforeRender:v}=N();return v(({delta:n})=>{i.uniforms.uTime.value+=n,i.uniforms.uSpeedFactor.value=1}),(n,f)=>(Wa(),Va("primitive",{object:Ka(m)},null,8,Ba))}}),{defineComponent:Ya}=await g("vue"),{watchEffect:Ia,watch:Xa}=await g("vue"),$a=await g("three"),Za=Ya({__name:"effect",props:{hide:{type:Boolean,default:!1}},setup(h){const c=h,{camera:t,renderer:p,scene:m,sizes:r}=oa(),i={threshold:.666,strength:.166,radius:.3};let v=null,n=null;const f=(u,j,w,d,e)=>{const a=new xa(u,j);n=new ha(new $a.Vector2(d,e),i.strength,i.radius,i.threshold),v=new ga(w),v.addPass(a),v.addPass(n)};let l=null;const x=u=>{l=new ua,l.uniforms.damp.value=.2,l.enabled=!1,v.addPass(l)};Ia(()=>{r.width.value&&(f(m.value,t.value,p,r.width.value,r.height.value),x())}),Xa(()=>c.hide,u=>{u?(n.strength=.01,n.radius=10,l.enabled=!0):(n.strength=.166,n.radius=.3,l.enabled=!1)});const{onBeforeRender:y}=N();return y(()=>{v&&v.render()}),(u,j)=>null}}),{defineComponent:ae}=await g("vue"),{unref:I,renderList:ee,Fragment:be,openBlock:X,createElementBlock:$,normalizeClass:ne,normalizeStyle:ce,createElementVNode:ie,vShow:oe,withDirectives:te}=await g("vue"),re={class:"colorList"},pe=["onClick"],fe=ae({__name:"UIcarSkin",setup(h){const c=Q(),t=[{src:"c1.webp",color:"#26d6e9"},{src:"c2.webp",color:"#444c3c"},{src:"c3.webp",color:"#5d5d5d"},{src:"c4.webp",color:"#8a8a8a"},{src:"c5.webp",color:"#3e3543"},{src:"c6.webp",color:"#822817"},{src:"c7.webp",color:"#e0b023"},{src:"c8.webp",color:"c8.webp"},{src:"c9.webp",color:"c9.webp"}],p=m=>{c.selColorIndex=m,c.selColorData=t[m].color};return(m,r)=>te((X(),$("div",re,[(X(),$(be,null,ee(t,(i,v)=>ie("div",{key:v,class:ne({"color-item":I(c).selColorIndex===v}),style:ce({backgroundImage:`url(@/../plugins/industry4/icon/${i.src})`,width:"32px",height:"32px",borderRadius:"50%",margin:"8px",backgroundSize:"100% 100%",cursor:"pointer"}),onClick:n=>p(v)},null,14,pe)),64))],512)),[[oe,I(c).showColorList]])}}),le=ta(fe,[["__scopeId","data-v-b8b2a8f6"]]),{defineComponent:se}=await g("vue"),{unref:G,createVNode:z,Suspense:E,withCtx:_,openBlock:O,createBlock:D,createElementVNode:de,normalizeProps:ve,guardReactiveProps:me,resolveComponent:xe,mergeProps:ge,Fragment:he,createElementBlock:ue}=await g("vue"),{reactive:Z,ref:ke}=await g("vue"),Je=se({__name:"su7",setup(h){const c=Z({clearColor:"#000",antialias:!0,physicallyCorrectLights:!0,logarithmicDepthBuffer:!1,renderMode:"manual"}),t=Z({}),p=ke(!1),m=new la({title:"参数"});m.addBinding(p,"value",{label:"流光模式"});const r=Q();return m.addBinding(r,"showColorList",{label:"选择皮肤"}),(i,v)=>{const n=xe("TresCanvas");return O(),ue(he,null,[(O(),D(E,null,{default:_(()=>[z(G(fa))]),_:1})),z(n,ge(c,{"window-size":""}),{default:_(()=>[z(G(ra),{speed:p.value?66:0,rotationFactor:.1,floatFactor:.1,range:[-.2,.1]},{default:_(()=>[...v[0]||(v[0]=[de("TresPerspectiveCamera",{position:[0,5,8],fov:45,near:.1,far:500},null,-1)])]),_:1},8,["speed"]),z(G(pa),ve(me(t)),null,16),(O(),D(E,null,{default:_(()=>[z(Pa,{run:p.value},null,8,["run"])]),_:1})),(O(),D(E,null,{default:_(()=>[z(Ja,{visible:p.value},null,8,["visible"])]),_:1})),(O(),D(E,null,{default:_(()=>[z(Oa,{hide:p.value},null,8,["hide"])]),_:1})),(O(),D(E,null,{default:_(()=>[z(G(sa),{blur:0,far:1e4,useDefaultScene:p.value},{default:_(()=>[z(G(da),{intensity:6,"rotation-x":Math.PI/2,position:[0,7,0],scale:[10,10,2]},null,8,["rotation-x"])]),_:1},8,["useDefaultScene"])]),_:1})),z(Za,{hide:p.value},null,8,["hide"])]),_:1},16),z(le)],64)}}});export{Je as default};
