import { defineStore, importShared, _l, Fs, _export_sfc, yk, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main$6 as _sfc_main$7 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useTexture$1 as useTexture, _sfc_main as _sfc_main$8, _sfc_main$1 as _sfc_main$9 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import { _sfc_main$9 as _sfc_main$6 } from './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';
import { GLTFLoader } from './GLTFLoader.CAD9c_1U1767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';
import { RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { AfterimagePass } from './AfterimagePass.tZwwNUob1767105581793.js';

const {ref: ref$2} = await importShared('vue');


const useSu7Store = defineStore('Su7s', () => {
	const showColorList = ref$2(true);
	const selColorIndex = ref$2(0);
	const selColorData = ref$2('#26d6e9');
	function setShowColorList (show) {
		showColorList.value = show;
	}
	function setSelColorIndex (v) {
		selColorIndex.value = v;
	}

	return { showColorList, selColorIndex, setShowColorList, setSelColorIndex, selColorData }
});

const flatModel = (scene) => {
  const modelArr = [];
  scene.traverse((child) => {
    modelArr.push(child);
  });
  return modelArr;
};

var reflectorCustomMaterial_default$1="#ifndef FNC_POW5\n#define FNC_POW5\n\nfloat pow5(const in float v) {\n    float v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec2 pow5(const in vec2 v) {\n    vec2 v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec3 pow5(const in vec3 v) {\n    vec3 v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec4 pow5(const in vec4 v) {\n    vec4 v2 = v * v;\n    return v2 * v2 * v;\n}\n\n#endif\n\n#ifndef FNC_SCHLICK\n#define FNC_SCHLICK\n\nvec3 schlick(const in vec3 f0, const in float f90, const in float VoH) {\n    float f = pow5(1.0 - VoH);\n    return f + f0 * (f90 - f);\n}\n\nvec3 schlick(const in vec3 f0, const in vec3 f90, const in float VoH) {\n    return f0 + (f90 - f0) * pow5(1.0 - VoH);\n}\n\nfloat schlick(const in float f0, const in float f90, const in float VoH) {\n    return f0 + (f90 - f0) * pow5(1.0 - VoH);\n}\n\n#endif\n\n#ifndef FNC_POW5\n#define FNC_POW5\n\nfloat pow5(const in float v) {\n    float v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec2 pow5(const in vec2 v) {\n    vec2 v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec3 pow5(const in vec3 v) {\n    vec3 v2 = v * v;\n    return v2 * v2 * v;\n}\n\nvec4 pow5(const in vec4 v) {\n    vec4 v2 = v * v;\n    return v2 * v2 * v;\n}\n\n#endif\n#ifndef EIGHTH_PI\n#define EIGHTH_PI 0.39269908169\n#endif\n#ifndef QTR_PI\n#define QTR_PI 0.78539816339\n#endif\n#ifndef HALF_PI\n#define HALF_PI 1.5707963267948966192313216916398\n#endif\n#ifndef PI\n#define PI 3.1415926535897932384626433832795\n#endif\n#ifndef TWO_PI\n#define TWO_PI 6.2831853071795864769252867665590\n#endif\n#ifndef TAU\n#define TAU 6.2831853071795864769252867665590\n#endif\n#ifndef INV_PI\n#define INV_PI 0.31830988618379067153776752674503\n#endif\n#ifndef INV_SQRT_TAU\n#define INV_SQRT_TAU 0.39894228040143267793994605993439  \n#endif\n#ifndef SQRT_HALF_PI\n#define SQRT_HALF_PI 1.25331413732\n#endif\n#ifndef PHI\n#define PHI 1.618033988749894848204586834\n#endif\n#ifndef EPSILON\n#define EPSILON 0.0000001\n#endif\n#ifndef GOLDEN_RATIO\n#define GOLDEN_RATIO 1.6180339887\n#endif\n#ifndef GOLDEN_RATIO_CONJUGATE \n#define GOLDEN_RATIO_CONJUGATE 0.61803398875\n#endif\n#ifndef GOLDEN_ANGLE \n#define GOLDEN_ANGLE 2.39996323\n#endif\n#ifndef DEG2RAD\n#define DEG2RAD (PI / 180.0)\n#endif\n#ifndef RAD2DEG\n#define RAD2DEG (180.0 / PI)\n#endif\n#if !defined(FNC_SATURATE) && !defined(saturate)\n#define FNC_SATURATE\n#define saturate(V) clamp(V, 0.0, 1.0)\n#endif\n\n#ifndef FNC_FRESNEL\n#define FNC_FRESNEL\n\nvec3 fresnel(const in vec3 f0, vec3 normal, vec3 view) {\n   return schlick(f0, 1.0, dot(view, normal));\n}\n\nvec3 fresnel(const in vec3 f0, const in float NoV) {\n#if defined(TARGET_MOBILE) || defined(PLATFORM_RPI)\n    return schlick(f0, 1.0, NoV);\n#else\n    float f90 = saturate(dot(f0, vec3(50.0 * 0.33)));\n    return schlick(f0, f90, NoV);\n#endif\n}\n\nfloat fresnel(const in float f0, const in float NoV) {\n    return schlick(f0, 1.0, NoV);\n}\n\nvec3 fresnel(vec3 f0, float NoV, float roughness) {\n    return f0 + (max(vec3(1.0 - roughness), f0) - f0) * pow5(1.0 - NoV);\n}\n\n#endif\nvec4 packedTexture2DLOD(sampler2D tex, vec2 uv, int level) {\n\n		\n  float targetSubview = 1.0 / pow(2.0, float(level));\n  float widthRatio = 2.0 / 3.0;\n  vec2 scaledDimensions = vec2(targetSubview * widthRatio, targetSubview);\n\n		\n		\n  vec2 offset = vec2(level > 0 ? widthRatio : 0.0, level > 0 ? targetSubview : 0.0);\n\n  vec2 samplePoint = mix(offset, offset + scaledDimensions, uv);\n  return texture2D(tex, samplePoint);\n\n}\n\nvec4 packedTexture2DLOD(sampler2D tex, vec2 uv, float level) {\n\n  float ratio = mod(level, 1.0);\n  int minLevel = int(floor(level));\n  int maxLevel = int(ceil(level));\n\n  vec4 minValue = packedTexture2DLOD(tex, uv, minLevel);\n  vec4 maxValue = packedTexture2DLOD(tex, uv, maxLevel);\n\n  return mix(minValue, maxValue, ratio);\n\n}\n\n	\nvec4 packedTexture2DLOD(sampler2D tex, vec2 uv, int level, vec2 originalPixelSize) {\n\n  float floatLevel = float(level);\n  vec2 atlasSize;\n  atlasSize.x = floor(originalPixelSize.x * 1.5);\n  atlasSize.y = originalPixelSize.y;\n\n		\n  float maxLevel = min(floor(log2(originalPixelSize.x)), floor(log2(originalPixelSize.y)));\n  floatLevel = min(floatLevel, maxLevel);\n\n		\n  vec2 currentPixelDimensions = floor(originalPixelSize / pow(2.0, floatLevel));\n  vec2 pixelOffset = vec2(floatLevel > 0.0 ? originalPixelSize.x : 0.0, floatLevel > 0.0 ? currentPixelDimensions.y : 0.0);\n\n		\n		\n  vec2 minPixel = pixelOffset;\n  vec2 maxPixel = pixelOffset + currentPixelDimensions;\n  vec2 samplePoint = mix(minPixel, maxPixel, uv);\n  samplePoint /= atlasSize;\n\n  vec2 halfPixelSize = 1.0 / (2.0 * atlasSize);\n  samplePoint = min(samplePoint, maxPixel / atlasSize - halfPixelSize);\n  samplePoint = max(samplePoint, minPixel / atlasSize + halfPixelSize);\n\n  return texture2D(tex, samplePoint);\n\n}\n\nvec4 packedTexture2DLOD(sampler2D tex, vec2 uv, float level, vec2 originalPixelSize) {\n\n  float ratio = mod(level, 1.0);\n  int minLevel = int(floor(level));\n  int maxLevel = int(ceil(level));\n\n  vec4 minValue = packedTexture2DLOD(tex, uv, minLevel, originalPixelSize);\n  vec4 maxValue = packedTexture2DLOD(tex, uv, maxLevel, originalPixelSize);\n\n  return mix(minValue, maxValue, ratio);\n\n}\nvarying vec2 vUv;\nvarying vec4 vWorldPosition;\n\nuniform vec3 uColor;\nuniform mat4 uReflectMatrix;\nuniform sampler2D uReflectTexture;\nuniform float uReflectIntensity;\nuniform float uIntensity;\nuniform float uLevel;\nuniform vec2 uResolution;\nuniform float uTime;\n\nvoid main() {\n  vec3 worldPos = vWorldPosition.xyz;\n  worldPos.x -= uTime * 0.1;\n  vec3 surfaceNormal = texture2D(normalMap, worldPos.xz).xyz * 2.0 - 1.0;\n  surfaceNormal = surfaceNormal.rbg;\n  surfaceNormal = normalize(surfaceNormal);\n\n  vec3 viewDir = vViewPosition;\n  float d = length(viewDir);\n  viewDir = normalize(viewDir);\n  vec2 distortion = surfaceNormal.xz * (0.001 + 1. / d);\n\n  vec4 reflectPoint = uReflectMatrix * vWorldPosition;\n  reflectPoint = reflectPoint / reflectPoint.w;\n  vec2 uv = reflectPoint.xy + distortion * uIntensity;\n  vec3 reflectionSample =\n      packedTexture2DLOD(uReflectTexture, uv, uLevel, uResolution).xyz;\n  reflectionSample *= uReflectIntensity;\n\n  vec3 strength = fresnel(vec3(0.), vNormal, viewDir);\n  vec3 col = uColor;\n  col = mix(col, reflectionSample, strength);\n  csm_DiffuseColor = vec4(col, 1.);\n}";

var reflectorCustomMaterial_default="varying vec2 vUv;\nvarying vec4 vWorldPosition;\n\nvoid main() {\n  vec3 p = position;\n\n  csm_Position = p;\n\n  vUv = uv;\n  vWorldPosition = modelMatrix * vec4(p, 1);\n}";

const THREE$4 = await importShared('three');
const makeCustomShaderMaterial = (mirror, reflector) => {
  const floorUniforms = {
    uColor: { type: "c", value: new THREE$4.Color("white") },
    uReflectMatrix: { type: "m4", value: new THREE$4.Matrix4() },
    uReflectTexture: { type: "t", value: new THREE$4.Texture() },
    uReflectIntensity: { type: "f", value: 15 },
    uIntensity: { type: "f", value: 1 },
    uLevel: { type: "f", value: 3.5 },
    uResolution: { type: "v2", value: new THREE$4.Vector2() },
    uTime: { type: "f", value: 0 }
  };
  const material = new B({
    baseMaterial: mirror.material,
    uniforms: floorUniforms,
    vertexShader: reflectorCustomMaterial_default,
    fragmentShader: reflectorCustomMaterial_default$1,
    silent: true
  });
  floorUniforms.uReflectTexture.value = reflector.renderTarget.texture;
  floorUniforms.uReflectMatrix.value = reflector.matrix;
  floorUniforms.uResolution.value.set(reflector.renderTarget.width, reflector.renderTarget.height);
  return material;
};

const {withAsyncContext:_withAsyncContext$2,defineComponent:_defineComponent$5} = await importShared('vue');

const {unref:_unref$4,createElementVNode:_createElementVNode$2,createVNode:_createVNode$1,Fragment:_Fragment$2,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$3 = ["object"];
const THREE$3 = await importShared('three');
const {ref: ref$1,watch: watch$2,toRaw: toRaw$1} = await importShared('vue');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "startroom",
  props: {
    hide: { type: Boolean, default: false }
  },
  async setup(__props, { expose: __expose }) {
    let __temp, __restore;
    const props = __props;
    const { scene } = ([__temp, __restore] = _withAsyncContext$2(() => useGLTF(`${"https://opensource.cdn.icegl.cn"}/model/industry4/su7_car/su7_startroom.raw.glb`)), __temp = await __temp, __restore(), __temp);
    const pTexture = ([__temp, __restore] = _withAsyncContext$2(() => useTexture([
      "./plugins/industry4/texture/t_startroom_light.raw.jpg",
      "./plugins/industry4/texture/t_startroom_ao.raw.jpg",
      "./plugins/industry4/texture/t_floor_roughness.webp",
      "./plugins/industry4/texture/t_floor_normal.webp"
    ])), __temp = await __temp, __restore(), __temp);
    pTexture[2].colorSpace = THREE$3.LinearSRGBColorSpace;
    pTexture[2].wrapS = pTexture[2].wrapT = THREE$3.RepeatWrapping;
    pTexture[3].colorSpace = THREE$3.LinearSRGBColorSpace;
    pTexture[3].wrapS = pTexture[3].wrapT = THREE$3.RepeatWrapping;
    pTexture[1].flipY = false;
    pTexture[1].channel = 1;
    pTexture[1].flipY = false;
    pTexture[1].colorSpace = THREE$3.LinearSRGBColorSpace;
    pTexture[0].channel = 1;
    pTexture[0].flipY = false;
    pTexture[0].colorSpace = THREE$3.SRGBColorSpace;
    const roomModel = flatModel(scene);
    const light = roomModel[1];
    const lightMat = light.material;
    lightMat.emissive = new THREE$3.Color("white");
    lightMat.emissiveIntensity = 1;
    lightMat.toneMapped = false;
    lightMat.transparent = true;
    lightMat.alphaTest = 0.01;
    light.name = "lightTop";
    const floor = roomModel[2];
    const floorMat = floor.material;
    floorMat.roughnessMap = pTexture[2];
    floorMat.normalMap = pTexture[3];
    floorMat.aoMap = pTexture[1];
    floorMat.lightMap = pTexture[0];
    floorMat.envMap = pTexture[2];
    floorMat.envMapIntensity = 0;
    floorMat.transparent = true;
    floor.name = "floorBtm";
    const reflectorMipMapRef = ref$1(null);
    watch$2(
      () => reflectorMipMapRef,
      (newVal) => {
        floor.material = makeCustomShaderMaterial(floor, newVal.value);
      },
      { deep: true }
    );
    watch$2(
      () => props.hide,
      (newVal) => {
        if (newVal) {
          floor.material.envMap = null;
          floor.material.envMapIntensity = 1;
          floor.material.opacity = 0;
          lightMat.opacity = 0;
        } else {
          floor.material.envMap = pTexture[2];
          floor.material.envMapIntensity = 0;
          lightMat.opacity = 1;
        }
      }
    );
    const tresMesh = ref$1();
    __expose({
      meshList: [light, floor],
      tresMesh
    });
    return (_ctx, _cache) => {
      return _openBlock$4(), _createElementBlock$4(_Fragment$2, null, [
        _createElementVNode$2("primitive", {
          object: toRaw$1(_unref$4(scene)),
          ref_key: "tresMesh",
          ref: tresMesh
        }, null, 8, _hoisted_1$3),
        _createVNode$1(_unref$4(_sfc_main$6), {
          ref_key: "reflectorMipMapRef",
          ref: reflectorMipMapRef,
          parent: _unref$4(floor),
          ignoreObjects: [_unref$4(light), _unref$4(floor)]
        }, null, 8, ["parent", "ignoreObjects"])
      ], 64);
    };
  }
});

// This file is part of meshoptimizer library and is distributed under the terms of MIT License.
// Copyright (C) 2016-2024, by Arseny Kapoulkine (arseny.kapoulkine@gmail.com)
var MeshoptDecoder = (function () {
	// Built with clang version 18.1.2
	// Built from meshoptimizer 0.22
	var wasm_base =
		'b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb'; // embed! base
	var wasm_simd =
		'b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb'; // embed! simd

	var detector = new Uint8Array([
		0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0,
		11, 7, 0, 65, 0, 253, 15, 26, 11,
	]);
	var wasmpack = new Uint8Array([
		32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67,
		24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115,
	]);

	if (typeof WebAssembly !== 'object') {
		return {
			supported: false,
		};
	}

	var wasm = WebAssembly.validate(detector) ? unpack(wasm_simd) : unpack(wasm_base);

	var instance;

	var ready = WebAssembly.instantiate(wasm, {}).then(function (result) {
		instance = result.instance;
		instance.exports.__wasm_call_ctors();
	});

	function unpack(data) {
		var result = new Uint8Array(data.length);
		for (var i = 0; i < data.length; ++i) {
			var ch = data.charCodeAt(i);
			result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
		}
		var write = 0;
		for (var i = 0; i < data.length; ++i) {
			result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
		}
		return result.buffer.slice(0, write);
	}

	function decode(instance, fun, target, count, size, source, filter) {
		var sbrk = instance.exports.sbrk;
		var count4 = (count + 3) & -4;
		var tp = sbrk(count4 * size);
		var sp = sbrk(source.length);
		var heap = new Uint8Array(instance.exports.memory.buffer);
		heap.set(source, sp);
		var res = fun(tp, count, size, sp, source.length);
		if (res == 0 && filter) {
			filter(tp, count4, size);
		}
		target.set(heap.subarray(tp, tp + count * size));
		sbrk(tp - sbrk(0));
		if (res != 0) {
			throw new Error('Malformed buffer data: ' + res);
		}
	}

	var filters = {
		NONE: '',
		OCTAHEDRAL: 'meshopt_decodeFilterOct',
		QUATERNION: 'meshopt_decodeFilterQuat',
		EXPONENTIAL: 'meshopt_decodeFilterExp',
	};

	var decoders = {
		ATTRIBUTES: 'meshopt_decodeVertexBuffer',
		TRIANGLES: 'meshopt_decodeIndexBuffer',
		INDICES: 'meshopt_decodeIndexSequence',
	};

	var workers = [];
	var requestId = 0;

	function createWorker(url) {
		var worker = {
			object: new Worker(url),
			pending: 0,
			requests: {},
		};

		worker.object.onmessage = function (event) {
			var data = event.data;

			worker.pending -= data.count;
			worker.requests[data.id][data.action](data.value);
			delete worker.requests[data.id];
		};

		return worker;
	}

	function initWorkers(count) {
		var source =
			'self.ready = WebAssembly.instantiate(new Uint8Array([' +
			new Uint8Array(wasm) +
			']), {})' +
			'.then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });' +
			'self.onmessage = ' +
			workerProcess.name +
			';' +
			decode.toString() +
			workerProcess.toString();

		var blob = new Blob([source], { type: 'text/javascript' });
		var url = URL.createObjectURL(blob);

		for (var i = workers.length; i < count; ++i) {
			workers[i] = createWorker(url);
		}

		for (var i = count; i < workers.length; ++i) {
			workers[i].object.postMessage({});
		}

		workers.length = count;

		URL.revokeObjectURL(url);
	}

	function decodeWorker(count, size, source, mode, filter) {
		var worker = workers[0];

		for (var i = 1; i < workers.length; ++i) {
			if (workers[i].pending < worker.pending) {
				worker = workers[i];
			}
		}

		return new Promise(function (resolve, reject) {
			var data = new Uint8Array(source);
			var id = ++requestId;

			worker.pending += count;
			worker.requests[id] = { resolve: resolve, reject: reject };
			worker.object.postMessage({ id: id, count: count, size: size, source: data, mode: mode, filter: filter }, [data.buffer]);
		});
	}

	function workerProcess(event) {
		var data = event.data;
		if (!data.id) {
			return self.close();
		}
		self.ready.then(function (instance) {
			try {
				var target = new Uint8Array(data.count * data.size);
				decode(instance, instance.exports[data.mode], target, data.count, data.size, data.source, instance.exports[data.filter]);
				self.postMessage({ id: data.id, count: data.count, action: 'resolve', value: target }, [target.buffer]);
			} catch (error) {
				self.postMessage({ id: data.id, count: data.count, action: 'reject', value: error });
			}
		});
	}

	return {
		ready: ready,
		supported: true,
		useWorkers: function (count) {
			initWorkers(count);
		},
		decodeVertexBuffer: function (target, count, size, source, filter) {
			decode(instance, instance.exports.meshopt_decodeVertexBuffer, target, count, size, source, instance.exports[filters[filter]]);
		},
		decodeIndexBuffer: function (target, count, size, source) {
			decode(instance, instance.exports.meshopt_decodeIndexBuffer, target, count, size, source);
		},
		decodeIndexSequence: function (target, count, size, source) {
			decode(instance, instance.exports.meshopt_decodeIndexSequence, target, count, size, source);
		},
		decodeGltfBuffer: function (target, count, size, source, mode, filter) {
			decode(instance, instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
		},
		decodeGltfBufferAsync: function (count, size, source, mode, filter) {
			if (workers.length > 0) {
				return decodeWorker(count, size, source, decoders[mode], filters[filter]);
			}

			return ready.then(function () {
				var target = new Uint8Array(count * size);
				decode(instance, instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
				return target;
			});
		},
	};
})();

const {withAsyncContext:_withAsyncContext$1,defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$2 = ["object", "rotation-y"];
const {watch: watch$1,toRaw} = await importShared('vue');
const THREE$2 = await importShared('three');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "car",
  props: {
    run: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const su7Store = useSu7Store();
    const props = __props;
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const { scene } = ([__temp, __restore] = _withAsyncContext$1(() => loader.loadAsync(`${"https://opensource.cdn.icegl.cn"}/model/industry4/su7_car/sm_car.gltf`)), __temp = await __temp, __restore(), __temp);
    function getAllMaterials(object) {
      let materialsMap = /* @__PURE__ */ new Map();
      object.traverse((child) => {
        if (child.isMesh) {
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => {
              if (material.name) {
                materialsMap.set(material.name, material);
              }
            });
          } else {
            if (child.material.name) {
              materialsMap.set(child.material.name, child.material);
            }
          }
        }
      });
      return Object.fromEntries(materialsMap);
    }
    const materials = getAllMaterials(scene);
    const pTexture = ([__temp, __restore] = _withAsyncContext$1(() => useTexture([
      "./plugins/industry4/texture/t_car_body_AO.raw.jpg",
      "./plugins/industry4/texture/t_cat_car_body_bc.webp",
      "./plugins/industry4/texture/t_gm_car_body_bc.webp"
    ])), __temp = await __temp, __restore(), __temp);
    pTexture[0].colorSpace = THREE$2.LinearSRGBColorSpace;
    pTexture[0].minFilter = THREE$2.NearestFilter;
    pTexture[0].magFilter = THREE$2.NearestFilter;
    pTexture[0].channel = 1;
    for (let i = 0; i < pTexture.length; i++) {
      pTexture[i].flipY = false;
    }
    const carModel = flatModel(scene);
    const body = carModel[2];
    const bodyMat = body.material;
    bodyMat.envMapIntensity = 4;
    bodyMat.color = new THREE$2.Color("#26d6e9");
    carModel.forEach((item) => {
      if (item.isMesh) {
        const mat = item.material;
        mat.aoMap = pTexture[0];
      }
    });
    const wheel = carModel[35];
    wheel.children.forEach((child) => {
      const mesh = child;
      const mat = mesh.material;
      mat.envMapIntensity = 4;
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (props.run) {
        wheel.children.forEach((child) => {
          child.rotateZ(-delta * 30 * 0.5);
        });
      }
    });
    watch$1(
      () => props.run,
      (newVal) => {
        if (newVal) {
          wheel.children.forEach((child) => {
            const mesh = child;
            const mat = mesh.material;
            mat.roughness = 0;
            mat.envMapIntensity = 3;
          });
        } else {
          wheel.children.forEach((child) => {
            const mesh = child;
            const mat = mesh.material;
            mat.roughness = 1;
            mat.envMapIntensity = 4;
          });
        }
      }
    );
    const carColor = {
      color: new THREE$2.Color(),
      targetColor: new THREE$2.Color()
    };
    watch$1(
      () => su7Store.selColorData,
      (newVal) => {
        gsapWithCSS.killTweensOf(carColor);
        if (newVal === "c8.webp") {
          materials.Car_body.color.set("#ffffff");
          materials.Car_body.map = pTexture[2];
          materials.Car_body.envMapIntensity = 2;
        } else if (newVal === "c9.webp") {
          materials.Car_body.color.set("#ffffff");
          materials.Car_body.map = pTexture[1];
          materials.Car_body.envMapIntensity = 2;
        } else {
          materials.Car_body.map = null;
          carColor.color = materials.Car_body.color;
          carColor.targetColor = new THREE$2.Color(newVal);
          gsapWithCSS.to(carColor.color, {
            duration: 0.66,
            ease: "power1.out",
            r: carColor.targetColor.r,
            g: carColor.targetColor.g,
            b: carColor.targetColor.b,
            onUpdate: () => {
              materials.Car_body.color.set(carColor.color);
            },
            onComplete: () => {
              materials.Car_body.envMapIntensity = 4;
              materials.Car_body.needsUpdate = true;
            }
          });
        }
        materials.Car_body.needsUpdate = true;
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3("primitive", {
        object: toRaw(_unref$3(scene)),
        "rotation-y": Math.PI
      }, null, 8, _hoisted_1$2);
    };
  }
});

var speedup_default$1="varying vec2 vUv;\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  vUv = uv;\n}";

var speedup_default="#ifndef RANDOM_SCALE\n#ifdef RANDOM_HIGHER_RANGE\n#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)\n#else\n#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)\n#endif\n#endif\n\n#ifndef FNC_RANDOM\n#define FNC_RANDOM\nfloat random(in float x) {\n#ifdef RANDOM_SINLESS\n    x = fract(x * RANDOM_SCALE.x);\n    x *= x + 33.33;\n    x *= x + x;\n    return fract(x);\n#else\n    return fract(sin(x) * 43758.5453);\n#endif\n}\n\nfloat random(in vec2 st) {\n#ifdef RANDOM_SINLESS\n    vec3 p3  = fract(vec3(st.xyx) * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.x + p3.y) * p3.z);\n#else\n    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);\n#endif\n}\n\nfloat random(in vec3 pos) {\n#ifdef RANDOM_SINLESS\n    pos  = fract(pos * RANDOM_SCALE.xyz);\n    pos += dot(pos, pos.zyx + 31.32);\n    return fract((pos.x + pos.y) * pos.z);\n#else\n    return fract(sin(dot(pos.xyz, vec3(70.9898, 78.233, 32.4355))) * 43758.5453123);\n#endif\n}\n\nfloat random(in vec4 pos) {\n#ifdef RANDOM_SINLESS\n    pos = fract(pos * RANDOM_SCALE);\n    pos += dot(pos, pos.wzxy + 33.33);\n    return fract((pos.x + pos.y) * (pos.z + pos.w));\n#else\n    float dot_product = dot(pos, vec4(12.9898,78.233,45.164,94.673));\n    return fract(sin(dot_product) * 43758.5453);\n#endif\n}\n\nvec2 random2(float p) {\n    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.xx + p3.yz) * p3.zy);\n}\n\nvec2 random2(vec2 p) {\n    vec3 p3 = fract(p.xyx * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.xx + p3.yz) * p3.zy);\n}\n\nvec2 random2(vec3 p3) {\n    p3 = fract(p3 * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.xx + p3.yz) * p3.zy);\n}\n\nvec3 random3(float p) {\n    vec3 p3 = fract(vec3(p) * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.xxy + p3.yzz) * p3.zyx); \n}\n\nvec3 random3(vec2 p) {\n    vec3 p3 = fract(vec3(p.xyx) * RANDOM_SCALE.xyz);\n    p3 += dot(p3, p3.yxz + 19.19);\n    return fract((p3.xxy + p3.yzz) * p3.zyx);\n}\n\nvec3 random3(vec3 p) {\n    p = fract(p * RANDOM_SCALE.xyz);\n    p += dot(p, p.yxz + 19.19);\n    return fract((p.xxy + p.yzz) * p.zyx);\n}\n\nvec4 random4(float p) {\n    vec4 p4 = fract(p * RANDOM_SCALE);\n    p4 += dot(p4, p4.wzxy + 19.19);\n    return fract((p4.xxyz + p4.yzzw) * p4.zywx);   \n}\n\nvec4 random4(vec2 p) {\n    vec4 p4 = fract(p.xyxy * RANDOM_SCALE);\n    p4 += dot(p4, p4.wzxy + 19.19);\n    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\n}\n\nvec4 random4(vec3 p) {\n    vec4 p4 = fract(p.xyzx * RANDOM_SCALE);\n    p4 += dot(p4, p4.wzxy + 19.19);\n    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\n}\n\nvec4 random4(vec4 p4) {\n    p4 = fract(p4  * RANDOM_SCALE);\n    p4 += dot(p4, p4.wzxy + 19.19);\n    return fract((p4.xxyz + p4.yzzw) * p4.zywx);\n}\n#endif\n#ifndef FNC_MAP\n#define FNC_MAP\nfloat map(float v, float iMin, float iMax ) { return (v-iMin)/(iMax-iMin); }\nvec2 map(vec2 v, vec2 iMin, vec2 iMax ) { return (v-iMin)/(iMax-iMin); }\nvec3 map(vec3 v, vec3 iMin, vec3 iMax ) { return (v-iMin)/(iMax-iMin); }\nvec4 map(vec4 v, vec4 iMin, vec4 iMax ) { return (v-iMin)/(iMax-iMin); }\n\nfloat map(in float v, in float iMin, in float iMax, in float oMin, in float oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\nvec2 map(in vec2 v, in vec2 iMin, in vec2 iMax, in vec2 oMin, in vec2 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\nvec3 map(in vec3 v, in vec3 iMin, in vec3 iMax, in vec3 oMin, in vec3 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\nvec4 map(in vec4 v, in vec4 iMin, in vec4 iMax, in vec4 oMin, in vec4 oMax) { return oMin + (oMax - oMin) * (v - iMin) / (iMax - iMin); }\n#endif\nvec2 hash(vec2 p)\n{\n  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\n  return -1. + 2. * fract(sin(p) * 43758.5453123);\n}\n\nfloat noise(in vec2 p) {\n  const float K1 = .366025404;\n  const float K2 = .211324865;\n\n  vec2 i = floor(p + (p.x + p.y) * K1);\n  vec2 a = p - i + (i.x + i.y) * K2;\n  float m = step(a.y, a.x);\n  vec2 o = vec2(m, 1. - m);\n  vec2 b = a - o + K2;\n  vec2 c = a - 1. + 2. * K2;\n  vec3 h = max(.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.);\n  vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.)), dot(b, hash(i + o)), dot(c, hash(i + 1.)));\n  return dot(n, vec3(70.));\n}\n#ifndef FNC_MOD289\n#define FNC_MOD289\n\nfloat mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }\n\n#endif\n#ifndef FNC_MOD289\n#define FNC_MOD289\n\nfloat mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }\nvec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }\n\n#endif\n\n#ifndef FNC_PERMUTE\n#define FNC_PERMUTE\n\nfloat permute(const in float v) { return mod289(((v * 34.0) + 1.0) * v); }\nvec2 permute(const in vec2 v) { return mod289(((v * 34.0) + 1.0) * v); }\nvec3 permute(const in vec3 v) { return mod289(((v * 34.0) + 1.0) * v); }\nvec4 permute(const in vec4 v) { return mod289(((v * 34.0) + 1.0) * v); }\n\n#endif\n#ifndef FNC_TAYLORINVSQRT\n#define FNC_TAYLORINVSQRT\nfloat taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }\nvec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }\nvec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }\nvec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n#endif\n#ifndef FNC_GRAD4\n#define FNC_GRAD4\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n    return p;\n}\n#endif\n\n#ifndef FNC_SNOISE\n#define FNC_SNOISE\nfloat snoise(in vec2 v) {\n    const vec4 C = vec4(0.211324865405187,  \n                        0.366025403784439,  \n                        -0.577350269189626,  \n                        0.024390243902439); \n    \n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n\n    \n    vec2 i1;\n    \n    \n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    \n    \n    \n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n\n    \n    i = mod289(i); \n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n\n    \n    \n\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n\n    \n    \n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n    \n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nfloat snoise(in vec3 v) {\n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    \n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    \n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    \n    \n    \n    \n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; \n    vec3 x3 = x0 - D.yyy;      \n\n    \n    i = mod289(i);\n    vec4 p = permute( permute( permute(\n                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    \n    \n    float n_ = 0.142857142857; \n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  \n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    \n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    \n    \n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    \n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(in vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,  \n                        0.276393202250021,  \n                        0.414589803375032,  \n                        -0.447213595499958); \n\n    \n    vec4 i  = floor(v + dot(v, vec4(.309016994374947451)) ); \n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    \n\n    \n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    \n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    \n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    \n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    \n    \n    \n    \n    \n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    \n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n                i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n            + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n            + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n            + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    \n    \n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    \n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    \n    vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n    vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n                + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n}\n\nvec2 snoise2( vec2 x ){\n    float s  = snoise(vec2( x ));\n    float s1 = snoise(vec2( x.y - 19.1, x.x + 47.2 ));\n    return vec2( s , s1 );\n}\n\nvec3 snoise3( vec3 x ){\n    float s  = snoise(vec3( x ));\n    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n    return vec3( s , s1 , s2 );\n}\n\nvec3 snoise3( vec4 x ){\n    float s  = snoise(vec4( x ));\n    float s1 = snoise(vec4( x.y - 19.1 , x.z + 33.4 , x.x + 47.2, x.w ));\n    float s2 = snoise(vec4( x.z + 74.2 , x.x - 124.5 , x.y + 99.4, x.w ));\n    return vec3( s , s1 , s2 );\n}\n\n#endif\nvarying vec2 vUv;\nuniform float uTime;\nuniform float uSpeedFactor;\n\nvec3 getColor(vec2 uv) {\n  uv += vec2(9., 0.);\n  float r = random(uv + vec2(12., 2.));\n  float g = random(uv + vec2(7., 5.));\n  float b = random(uv);\n  vec3 col = vec3(r, g, b);\n  return col;\n}\n\nvec3 colorNoise(vec2 uv) {\n  vec2 newUV = floor(uv);\n  vec2 size = vec2(1.);\n  vec3 v1 = getColor((newUV + vec2(0.)) / size);\n  vec3 v2 = getColor((newUV + vec2(0., 1.)) / size);\n  vec3 v3 = getColor((newUV + vec2(1., 0.)) / size);\n  vec3 v4 = getColor((newUV + vec2(1.)) / size);\n  vec2 factor = smoothstep(0., 1., fract(uv));\n  vec3 v1Tov2 = mix(v1, v2, factor.y);\n  vec3 v3Tov4 = mix(v3, v4, factor.y);\n  vec3 mixColor = mix(v1Tov2, v3Tov4, factor.x);\n  return mixColor;\n}\n\nvoid main() {\n  vec2 newUV = vUv;\n  newUV.x += uTime * .5;\n  float alpha = snoise(newUV * vec2(3., 100.));\n  alpha = map(alpha, -1., 1., 0., 1.);\n  alpha = pow(clamp(alpha - .05, 0., 1.), 13.);\n  alpha = smoothstep(0., .04, alpha);\n  vec3 col = vec3(1.);\n  col = colorNoise(newUV * vec2(10., 100.));\n  col *= vec3(1.5, 1., 400.);\n  alpha *= smoothstep(.02, .5, vUv.x) * smoothstep(.02, .5, 1. - vUv.x);\n  alpha *= smoothstep(.01, .1, vUv.y) * smoothstep(.01, .1, 1. - vUv.y);\n  alpha *= smoothstep(0., 1., uSpeedFactor) * 5.;\n  csm_FragColor = vec4(col, alpha);\n}";

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const THREE$1 = await importShared('three');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "speedup",
  async setup(__props) {
    let __temp, __restore;
    const gltfLoader = new GLTFLoader();
    gltfLoader.setMeshoptDecoder(MeshoptDecoder);
    const { scene } = ([__temp, __restore] = _withAsyncContext(() => gltfLoader.loadAsync(`${"https://opensource.cdn.icegl.cn"}/model/industry4/su7_car/sm_speedup.gltf`)), __temp = await __temp, __restore(), __temp);
    const uniforms = {
      uTime: { value: 0 },
      uSpeedFactor: { value: 0 }
    };
    const mat = new B({
      baseMaterial: THREE$1.MeshStandardMaterial,
      uniforms,
      vertexShader: speedup_default$1,
      fragmentShader: speedup_default,
      transparent: true,
      depthWrite: false
    });
    scene.traverse((child) => {
      if (child.isMesh) {
        const mesh = child;
        mesh.material = mat;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      mat.uniforms.uTime.value += delta;
      mat.uniforms.uSpeedFactor.value = 1;
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", { object: _unref$2(scene) }, null, 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {watchEffect,watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "effect",
  props: {
    hide: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      threshold: 0.666,
      strength: 0.166,
      radius: 0.3
    };
    let effectComposer = null;
    let bloomPass = null;
    const Effect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    let afterImagePass = null;
    const afterImagePassEffect = (renderer2) => {
      afterImagePass = new AfterimagePass();
      afterImagePass.uniforms["damp"].value = 0.2;
      afterImagePass.enabled = false;
      effectComposer.addPass(afterImagePass);
    };
    watchEffect(() => {
      if (sizes.width.value) {
        Effect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        afterImagePassEffect();
      }
    });
    watch(
      () => props.hide,
      (newVal) => {
        if (newVal) {
          bloomPass.strength = 0.01;
          bloomPass.radius = 10;
          afterImagePass.enabled = true;
        } else {
          bloomPass.strength = 0.166;
          bloomPass.radius = 0.3;
          afterImagePass.enabled = false;
        }
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,normalizeClass:_normalizeClass,normalizeStyle:_normalizeStyle,createElementVNode:_createElementVNode$1,vShow:_vShow,withDirectives:_withDirectives} = await importShared('vue');

const _hoisted_1 = { class: "colorList" };
const _hoisted_2 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "UIcarSkin",
  setup(__props) {
    const su7Store = useSu7Store();
    const resImg = [
      {
        src: "c1.webp",
        color: "#26d6e9"
      },
      {
        src: "c2.webp",
        color: "#444c3c"
      },
      {
        src: "c3.webp",
        color: "#5d5d5d"
      },
      {
        src: "c4.webp",
        color: "#8a8a8a"
      },
      {
        src: "c5.webp",
        color: "#3e3543"
      },
      {
        src: "c6.webp",
        color: "#822817"
      },
      {
        src: "c7.webp",
        color: "#e0b023"
      },
      {
        src: "c8.webp",
        color: "c8.webp"
      },
      {
        src: "c9.webp",
        color: "c9.webp"
      }
    ];
    const clickColor = (index) => {
      su7Store.selColorIndex = index;
      su7Store.selColorData = resImg[index].color;
    };
    return (_ctx, _cache) => {
      return _withDirectives((_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
        (_openBlock$1(), _createElementBlock$1(_Fragment$1, null, _renderList(resImg, (item, index) => {
          return _createElementVNode$1("div", {
            key: index,
            class: _normalizeClass({ "color-item": _unref$1(su7Store).selColorIndex === index }),
            style: _normalizeStyle({ backgroundImage: `url(@/../plugins/industry4/icon/${item.src})`, width: "32px", height: "32px", borderRadius: "50%", margin: "8px", backgroundSize: "100% 100%", cursor: "pointer" }),
            onClick: ($event) => clickColor(index)
          }, null, 14, _hoisted_2);
        }), 64))
      ], 512)), [
        [_vShow, _unref$1(su7Store).showColorList]
      ]);
    };
  }
});

const UIcarSkin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b8b2a8f6"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "su7",
  setup(__props) {
    const state = reactive({
      clearColor: "#000",
      antialias: true,
      physicallyCorrectLights: true,
      logarithmicDepthBuffer: false,
      // 开启后，镜面反射底部会透明过来
      renderMode: "manual"
      // toneMapping: THREE.ACESFilmicToneMapping,
      // toneMappingExposure : 2.0
    });
    const controlsState = reactive({
      // autoRotate: true,
    });
    const showSpeedup = ref(false);
    const paneControl = new Pane({ title: "参数" });
    paneControl.addBinding(showSpeedup, "value", { label: "流光模式" });
    const su7Store = useSu7Store();
    paneControl.addBinding(su7Store, "showColorList", { label: "选择皮肤" });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        (_openBlock(), _createBlock(_Suspense, null, {
          default: _withCtx(() => [
            _createVNode(_unref(_sfc_main$7))
          ]),
          _: 1
        })),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _createVNode(_unref(yk), {
              speed: showSpeedup.value ? 66 : 0,
              rotationFactor: 0.1,
              floatFactor: 0.1,
              range: [-0.2, 0.1]
            }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createElementVNode("TresPerspectiveCamera", {
                  position: [0, 5, 8],
                  fov: 45,
                  near: 0.1,
                  far: 500
                }, null, -1)
              ])]),
              _: 1
            }, 8, ["speed"]),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$4, { run: showSpeedup.value }, null, 8, ["run"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$3, { visible: showSpeedup.value }, null, 8, ["visible"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$5, { hide: showSpeedup.value }, null, 8, ["hide"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$8), {
                  blur: 0,
                  far: 1e4,
                  useDefaultScene: showSpeedup.value
                }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(_sfc_main$9), {
                      intensity: 6,
                      "rotation-x": Math.PI / 2,
                      position: [0, 7, 0],
                      scale: [10, 10, 2]
                    }, null, 8, ["rotation-x"])
                  ]),
                  _: 1
                }, 8, ["useDefaultScene"])
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$2, { hide: showSpeedup.value }, null, 8, ["hide"])
          ]),
          _: 1
        }, 16),
        _createVNode(UIcarSkin)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=su7.CSp4ohxS1767105581793.js.map
