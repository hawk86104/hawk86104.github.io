const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.BxB45aCK1767105581793.js","./runtime-core.esm-bundler.BD9HXynx1767105581793.js","../css/index.Da9CU5nf1767105581793.css","./index.DzgZAn0k1767105581793.js","./index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js","./utils.DIIwn7WV1767105581793.js","./three.webgpu.CKPDRXH51767105581793.js","./three.CUbUWUeC1767105581793.js","./index.CTrIPOkZ1767105581793.js","./constants.l92JOT9R1767105581793.js","./useSeek.BoK5Ffx41767105581793.js","./shapeConfigurator.CuAf_SJY1767105581793.js","./index.DjzPpSHo1767105581793.js","./flexiblePipe.vue_vue_type_script_setup_true_lang.BAUqTDRy1767105581793.js","./Resource.Dxl2bF_-1767105581793.js","./GLTFLoader.CAD9c_1U1767105581793.js","./BufferGeometryUtils.NxcZsV4J1767105581793.js","./DRACOLoader.COk-ZkRx1767105581793.js","./HDRLoader.N6EfVL3B1767105581793.js","./buildFlexiblePipe.CSvv9UZ71767105581793.js","./flexiblePipe2.vue_vue_type_script_setup_true_lang.ExGFogAl1767105581793.js","./material.vue_vue_type_script_setup_true_lang.KsUSDVCK1767105581793.js"])))=>i.map(i=>d[i]);
import { importShared, Fs, _l, __vitePreload, kz, Uz, Oz, Dz, Bz, Iz, Pz, Nz, Cz, Rz, Ez, Sz, wz, Tz } from './index.BxB45aCK1767105581793.js';
import { shaderMaterial } from './shaderMaterial.BXDL7cvO1767105581793.js';
import { FullScreenQuad } from './Pass.Cu0Sc_JX1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { getDefaultExportFromCjs } from './_commonjsHelpers.BILit0S-1767105581793.js';
import { commonjsRequire } from './_commonjs-dynamic-modules.Bnn57ZNe1767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { NCard } from './Card.CmCLdudX1767105581793.js';
import { NSpace } from './Space.Beq0ttmt1767105581793.js';
import { NSelect, NSlider, NSwitch } from './Switch.DCUaofJ91767105581793.js';
import { NForm, NFormItem } from './FormItem.C_Krb9Z_1767105581793.js';
import { B } from './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';
import { RGBELoader } from './RGBELoader.CegDJ2Rd1767105581793.js';

const {Scene,Object3D,Mesh: Mesh$1} = await importShared('three');

class EnvSence extends Object3D {
  constructor() {
    super();
    this.virtualScene = null;
    this.virtualScene = new Scene();
  }
  add(...object) {
    this.virtualScene.add(...object);
    return this;
  }
  destructor() {
    this.virtualScene.traverse((object) => {
      if (object instanceof Mesh$1) {
        object.geometry.dispose();
        object.material.dispose();
        if (object.material.map) object.material.map.dispose();
        this.virtualScene.remove(object);
      }
    });
    this.virtualScene = null;
  }
}

const environmentPresets = {
  sunset: "venice/venice_sunset_1k.hdr",
  studio: "studio/poly_haven_studio_1k.hdr",
  city: "city/canary_wharf_1k.hdr",
  umbrellas: "outdoor/outdoor_umbrellas_1k.hdr",
  night: "outdoor/satara_night_1k.hdr",
  forest: "outood/mossy_forest_1k.hdr",
  snow: "outdoor/snowy_forest_path_01_1k.hdr",
  dawn: "kiara/kiara_1_dawn_1k.hdr",
  hangar: "indoor/small_hangar_01_1k.hdr",
  urban: "indoor/abandoned_games_room_02_1k.hdr",
  modern: "city/modern_buildings_2_1k.hdr",
  shangai: "city/shanghai_bund_1k.hdr"
};

const {CubeReflectionMapping,CubeTextureLoader,EquirectangularReflectionMapping} = await importShared('three');
const {computed: computed$2,ref: ref$8,toRefs: toRefs$1,unref,watch: watch$9} = await importShared('vue');
const PRESET_ROOT = "https://raw.githubusercontent.com/Tresjs/assets/main/textures/hdr/";
async function useEnvironment(options, fbo) {
  const { scene, invalidate } = Fs();
  watch$9(options, () => {
    invalidate();
  });
  const { preset, blur, files = ref$8([]), path = ref$8(""), background } = toRefs$1(options);
  const texture = ref$8(null);
  const isCubeMap = computed$2(() => Array.isArray(files.value));
  const loader = computed$2(
    () => isCubeMap.value ? CubeTextureLoader : RGBELoader
  );
  watch$9(
    [files, path],
    async ([files2, path2]) => {
      if (!files2) {
        return;
      }
      if (files2.length > 0 && !preset?.value) {
        try {
          texture.value = await useLoader(
            loader.value,
            isCubeMap.value ? [...unref(files2)] : unref(files2),
            (loader2) => {
              if (path2) {
                loader2.setPath(unref(path2));
              }
            }
          );
        } catch (error) {
          throw new Error(`Failed to load environment map: ${error}`);
        }
        if (texture.value) {
          texture.value.mapping = isCubeMap.value ? CubeReflectionMapping : EquirectangularReflectionMapping;
        }
        invalidate();
      }
    },
    {
      immediate: true
    }
  );
  watch$9(
    texture,
    (value) => {
      if (scene.value && value) {
        scene.value.environment = value;
      }
    },
    {
      immediate: true
    }
  );
  watch$9(
    [background, texture],
    ([background2, texture2]) => {
      if (scene.value) {
        let bTexture = fbo?.value ? fbo.value.texture : texture2;
        let backBackground = scene.value.background;
        if (!backBackground?.isColor) {
          backBackground = void 0;
        }
        scene.value.background = background2 ? bTexture : backBackground;
      }
    },
    {
      immediate: true
    }
  );
  watch$9(
    () => blur?.value,
    (value) => {
      if (scene.value && value) {
        scene.value.backgroundBlurriness = value;
      }
    },
    {
      immediate: true
    }
  );
  watch$9(
    () => preset?.value,
    async (value) => {
      if (value && value in environmentPresets) {
        const _path = PRESET_ROOT;
        const _files = environmentPresets[value];
        try {
          texture.value = await useLoader(RGBELoader, _files, (loader2) => {
            if (_path) {
              loader2.setPath(_path);
            }
          });
        } catch (error) {
          throw new Error(`Failed to load environment map: ${error}`);
        }
        if (texture.value) {
          if (texture.value) {
            texture.value.mapping = EquirectangularReflectionMapping;
          }
        }
        invalidate();
      } else if (value && !(value in environmentPresets)) {
        throw new Error(`Preset must be one of: ${Object.keys(environmentPresets).join(", ")}`);
      }
    },
    {
      immediate: true
    }
  );
  return texture;
}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$c} = await importShared('vue');

const {unref:_unref$7,renderSlot:_renderSlot$4,openBlock:_openBlock$b,createElementBlock:_createElementBlock$8,createCommentVNode:_createCommentVNode$2} = await importShared('vue');

const {ref: ref$7,useSlots,onUnmounted,watch: watch$8,toRaw: toRaw$1} = await importShared('vue');

const {WebGLCubeRenderTarget: WebGLCubeRenderTarget$1,CubeCamera,HalfFloatType: HalfFloatType$2,UnsignedByteType,NearestFilter} = await importShared('three');
const _sfc_main$c = /* @__PURE__ */ _defineComponent$c({
  __name: "component",
  props: {
    background: { type: [Boolean, String], default: false },
    blur: { default: 0 },
    files: { default: [] },
    path: { default: "" },
    preset: { default: void 0 },
    resolution: { default: 256 },
    near: { default: 1 },
    far: { default: 1e3 },
    frames: { default: Infinity },
    useDefaultScene: { type: Boolean, default: false }
  },
  async setup(__props, { expose: __expose }) {
    let __temp, __restore;
    const props = __props;
    const texture = ref$7(null);
    __expose({ texture });
    const { extend, renderer, scene } = Fs();
    let slots = null;
    let fbo = ref$7(null);
    let cubeCamera = null;
    const envSence = ref$7(null);
    onUnmounted(() => {
      envSence.value?.destructor();
      fbo.value?.dispose();
    });
    const { onBeforeRender } = _l();
    let count = 1;
    onBeforeRender(() => {
      if (cubeCamera && envSence.value && fbo.value) {
        if (props.frames === Infinity || count < props.frames) {
          if (props.useDefaultScene) {
            cubeCamera.update(renderer, scene.value);
          } else {
            cubeCamera.update(renderer, toRaw$1(envSence.value.virtualScene));
          }
          count++;
        }
      }
    });
    const useEnvironmentTexture = ([__temp, __restore] = _withAsyncContext(() => useEnvironment(props, fbo)), __temp = await __temp, __restore(), __temp);
    const setTextureEnvAndBG = (fbo2) => {
      if (fbo2) {
        scene.value.environment = fbo2.texture;
        if (props.background) {
          scene.value.background = fbo2.texture;
        }
      } else {
        scene.value.environment = useEnvironmentTexture.value;
        if (props.background) {
          scene.value.background = useEnvironmentTexture.value;
        }
      }
    };
    watch$8(
      useEnvironmentTexture,
      (value) => {
        if (fbo.value) {
          setTextureEnvAndBG(fbo.value);
        }
      },
      { immediate: true, deep: true }
    );
    extend({ EnvSence });
    const makeFbo = () => {
      fbo.value?.dispose();
      fbo.value = new WebGLCubeRenderTarget$1(props.resolution);
      cubeCamera = new CubeCamera(props.near, props.far, fbo.value);
      if (props.useDefaultScene) {
        fbo.value.texture.type = UnsignedByteType;
        fbo.value.texture.generateMipmaps = false;
        fbo.value.texture.minFilter = NearestFilter;
        fbo.value.texture.magFilter = NearestFilter;
      } else {
        fbo.value.texture.type = HalfFloatType$2;
      }
      setTextureEnvAndBG(fbo.value);
    };
    watch$8(
      () => useSlots().default,
      (value) => {
        if (value) {
          if (!fbo.value || fbo.value.texture.type !== HalfFloatType$2) {
            slots = value();
            if (Array.isArray(slots) && slots.length > 0) {
              if (typeof slots[0]?.type !== "symbol") {
                makeFbo();
                return;
              }
            }
          }
        }
        fbo.value?.dispose();
        fbo.value = null;
        setTextureEnvAndBG(null);
      },
      { immediate: true, deep: true }
    );
    texture.value = useEnvironmentTexture;
    watch$8(
      () => props.useDefaultScene,
      (newValue) => {
        if (fbo.value) {
          makeFbo();
        }
      }
    );
    return (_ctx, _cache) => {
      return _unref$7(fbo) ? (_openBlock$b(), _createElementBlock$8("TresEnvSence", {
        key: 0,
        ref_key: "envSence",
        ref: envSence
      }, [
        _renderSlot$4(_ctx.$slots, "default")
      ], 512)) : _createCommentVNode$2("", true);
    };
  }
});

const {defineComponent:_defineComponent$b} = await importShared('vue');

const {openBlock:_openBlock$a,createElementBlock:_createElementBlock$7,createBlock:_createBlock$4,unref:_unref$6,createElementVNode:_createElementVNode$3} = await importShared('vue');

const _hoisted_1$6 = {
  key: 0,
  args: [0, 1, 64]
};
const _hoisted_2$1 = {
  key: 1,
  args: [0.5, 1, 64]
};
const _hoisted_3 = { key: 2 };
const _hoisted_4 = ["toneMapped", "map", "side", "color"];
const {ref: ref$6,watchEffect: watchEffect$3,onMounted: onMounted$2,watch: watch$7} = await importShared('vue');

const {Color,DoubleSide: DoubleSide$2} = await importShared('three');

const _sfc_main$b = /* @__PURE__ */ _defineComponent$b({
  __name: "index",
  props: {
    args: { default: null },
    from: { default: "rect" },
    toneMapped: { type: Boolean, default: false },
    map: { default: null },
    intensity: { default: 1 },
    color: { default: new Color(16777215) }
  },
  setup(__props) {
    const props = __props;
    const material = ref$6();
    watchEffect$3(() => {
      if (material.value) {
        material.value.color.multiplyScalar(props.intensity);
        material.value.needsUpdate = true;
      }
    });
    watch$7(
      () => props.color,
      (newVal) => {
        if (material.value) {
          material.value.color.set(newVal);
          material.value.color.multiplyScalar(props.intensity);
          material.value.needsUpdate = true;
        }
      }
    );
    onMounted$2(() => {
    });
    return (_ctx, _cache) => {
      return _openBlock$a(), _createElementBlock$7("TresMesh", null, [
        props.from === "circle" ? (_openBlock$a(), _createElementBlock$7("TresRingGeometry", _hoisted_1$6)) : props.from === "ring" ? (_openBlock$a(), _createElementBlock$7("TresRingGeometry", _hoisted_2$1)) : props.from === "rect" ? (_openBlock$a(), _createElementBlock$7("TresPlaneGeometry", _hoisted_3)) : (_openBlock$a(), _createBlock$4(props.from, {
          key: 3,
          args: props
        })),
        _createElementVNode$3("TresMeshBasicMaterial", {
          ref_key: "material",
          ref: material,
          toneMapped: _ctx.toneMapped,
          map: _ctx.map,
          side: _unref$6(DoubleSide$2),
          color: _ctx.color
        }, null, 8, _hoisted_4)
      ]);
    };
  }
});

const {DepthTexture,DepthFormat,UnsignedShortType,HalfFloatType: HalfFloatType$1,LinearFilter,WebGLRenderTarget} = await importShared('three');

const {isReactive,onBeforeUnmount: onBeforeUnmount$1,reactive: reactive$1,ref: ref$5,toRefs,watchEffect: watchEffect$2,toRaw} = await importShared('vue');

function useFBO$1(options) {
  const target = ref$5(null);
  const { height, width, settings, depth, isLoop } = isReactive(options) ? toRefs(options) : toRefs(reactive$1(options));
  const { onRender } = _l();
  const { camera, renderer, scene, sizes } = Fs();
  watchEffect$2(() => {
    target.value?.dispose();
    target.value = new WebGLRenderTarget(width?.value || sizes.width.value, height?.value || sizes.height.value, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      type: HalfFloatType$1,
      ...settings?.value
    });
    if (depth?.value) {
      target.value.depthTexture = new DepthTexture(
        width?.value || sizes.width.value,
        height?.value || sizes.height.value
        // FloatType,
      );
      target.value.depthTexture.format = DepthFormat;
      target.value.depthTexture.type = UnsignedShortType;
    }
  });
  onRender(() => {
    if (isLoop?.value) {
      renderer.setRenderTarget(toRaw(target.value));
      renderer.clear();
      renderer.render(toRaw(scene.value), toRaw(camera.value));
      renderer.setRenderTarget(null);
    }
  });
  onBeforeUnmount$1(() => {
    target.value?.dispose();
  });
  return target;
}

const THREE$9 = await importShared('three');


function useFBO(/** Width in pixels */
width = 1024, /** Height in pixels */
height = 1024, /**Settings */
settings) {
  var _width = width;
  var _height = height;
  var _settings = settings || {};
  const {
    samples = 0,
    depth,
    ...targetSettings
  } = _settings;
  const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop

  var target = new THREE$9.WebGLRenderTarget(_width, _height, {
    minFilter: THREE$9.LinearFilter,
    magFilter: THREE$9.LinearFilter,
    type: THREE$9.HalfFloatType,
    ...targetSettings
  });
  if (depthBuffer) {
    target.depthTexture = new THREE$9.DepthTexture(_width, _height, THREE$9.FloatType);
  }
  target.samples = samples;
  return target;
}

const THREE$8 = await importShared('three');

const isVector3 = object => object == null ? void 0 : object.isVector3;
function createNormalMaterial(side = THREE$8.FrontSide) {
  const viewMatrix = {
    value: new THREE$8.Matrix4()
  };
  return Object.assign(new THREE$8.MeshNormalMaterial({
    side
  }), {
    viewMatrix,
    onBeforeCompile: shader => {
      shader.uniforms.viewMatrix = viewMatrix;
      shader.fragmentShader = `vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
           return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
         }\n` + shader.fragmentShader.replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
           normal = inverseTransformDirection( normal, viewMatrix );\n`);
    }
  });
}
const CausticsProjectionMaterial = shaderMaterial({
  causticsTexture: null,
  causticsTextureB: null,
  color: new THREE$8.Color(),
  lightProjMatrix: new THREE$8.Matrix4(),
  lightViewMatrix: new THREE$8.Matrix4()
}, `varying vec3 vWorldPosition;   
   void main() {
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
     vec4 worldPosition = modelMatrix * vec4(position, 1.);
     vWorldPosition = worldPosition.xyz;
   }`, `varying vec3 vWorldPosition;
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
    #include <${parseInt(THREE$8.REVISION.replace(/\D+/g, '')) >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
   }`);
const CausticsMaterial = shaderMaterial({
  cameraMatrixWorld: new THREE$8.Matrix4(),
  cameraProjectionMatrixInv: new THREE$8.Matrix4(),
  normalTexture: null,
  depthTexture: null,
  lightDir: new THREE$8.Vector3(0, 1, 0),
  lightPlaneNormal: new THREE$8.Vector3(0, 1, 0),
  lightPlaneConstant: 0,
  near: 0.1,
  far: 100,
  modelMatrix: new THREE$8.Matrix4(),
  worldRadius: 1 / 40,
  ior: 1.1,
  bounces: 0,
  resolution: 1024,
  size: 10,
  intensity: 0.5
}, /* glsl */`
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`, /* glsl */`  
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
  }`);
const NORMALPROPS = {
  depthBuffer: true,
  minFilter: THREE$8.LinearFilter,
  magFilter: THREE$8.LinearFilter,
  type: THREE$8.UnsignedByteType
};
const CAUSTICPROPS = {
  minFilter: THREE$8.LinearMipmapLinearFilter,
  magFilter: THREE$8.LinearFilter,
  type: THREE$8.FloatType,
  generateMipmaps: true
};
function createCausticsUpdate(updateParameters) {
  // Normal materials for front and back faces
  const normalMat = createNormalMaterial();
  const normalMatB = createNormalMaterial(THREE$8.BackSide);
  // The quad that catches the caustics
  const causticsMaterial = new CausticsMaterial();
  const causticsQuad = new FullScreenQuad(causticsMaterial);
  let count = 0;
  const v = new THREE$8.Vector3();
  const lpF = new THREE$8.Frustum();
  const lpM = new THREE$8.Matrix4();
  const lpP = new THREE$8.Plane();
  const lightDir = new THREE$8.Vector3();
  const lightDirInv = new THREE$8.Vector3();
  const bounds = new THREE$8.Box3();
  const focusPos = new THREE$8.Vector3();
  const boundsVertices = [];
  const worldVerts = [];
  const projectedVerts = [];
  const lightDirs = [];
  const cameraPos = new THREE$8.Vector3();
  for (let i = 0; i < 8; i++) {
    boundsVertices.push(new THREE$8.Vector3());
    worldVerts.push(new THREE$8.Vector3());
    projectedVerts.push(new THREE$8.Vector3());
    lightDirs.push(new THREE$8.Vector3());
  }
  return function update(gl) {
    const {
      params,
      helper,
      camera,
      plane,
      normalTarget,
      normalTargetB,
      causticsTarget,
      causticsTargetB,
      scene,
      group
    } = updateParameters();
    if (params.frames === Infinity || params.frames && count++ < params.frames) {
      var _scene$parent;
      if (isVector3(params.lightSource)) {
        lightDir.copy(params.lightSource).normalize();
      } else if (params.lightSource) {
        lightDir.copy(group.worldToLocal(params.lightSource.getWorldPosition(v)).normalize());
      }
      lightDirInv.copy(lightDir).multiplyScalar(-1);
      (_scene$parent = scene.parent) == null || _scene$parent.matrixWorld.identity();
      bounds.setFromObject(scene, true);
      boundsVertices[0].set(bounds.min.x, bounds.min.y, bounds.min.z);
      boundsVertices[1].set(bounds.min.x, bounds.min.y, bounds.max.z);
      boundsVertices[2].set(bounds.min.x, bounds.max.y, bounds.min.z);
      boundsVertices[3].set(bounds.min.x, bounds.max.y, bounds.max.z);
      boundsVertices[4].set(bounds.max.x, bounds.min.y, bounds.min.z);
      boundsVertices[5].set(bounds.max.x, bounds.min.y, bounds.max.z);
      boundsVertices[6].set(bounds.max.x, bounds.max.y, bounds.min.z);
      boundsVertices[7].set(bounds.max.x, bounds.max.y, bounds.max.z);
      for (let i = 0; i < 8; i++) {
        worldVerts[i].copy(boundsVertices[i]);
      }
      bounds.getCenter(focusPos);
      boundsVertices.map(v => v.sub(focusPos));
      const lightPlane = lpP.set(lightDirInv, 0);
      boundsVertices.map((v, i) => lightPlane.projectPoint(v, projectedVerts[i]));
      const centralVert = projectedVerts.reduce((a, b) => a.add(b), v.set(0, 0, 0)).divideScalar(projectedVerts.length);
      const radius = projectedVerts.map(v => v.distanceTo(centralVert)).reduce((a, b) => Math.max(a, b));
      const dirLength = boundsVertices.map(x => x.dot(lightDir)).reduce((a, b) => Math.max(a, b));
      // Shadows
      camera.position.copy(cameraPos.copy(lightDir).multiplyScalar(dirLength).add(focusPos));
      camera.lookAt(scene.localToWorld(focusPos));
      const dirMatrix = lpM.lookAt(camera.position, focusPos, v.set(0, 1, 0));
      camera.left = -radius;
      camera.right = radius;
      camera.top = radius;
      camera.bottom = -radius;
      if (params.near) camera.near = params.near;
      if (params.far) {
        camera.far = params.far;
      } else {
        const yOffset = v.set(0, radius, 0).applyMatrix4(dirMatrix);
        const yTime = (camera.position.y + yOffset.y) / lightDir.y;
        camera.far = yTime;
      }
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();

      // Now find size of ground plane
      const groundProjectedCoords = worldVerts.map((v, i) => v.add(lightDirs[i].copy(lightDir).multiplyScalar(-v.y / lightDir.y)));
      const centerPos = groundProjectedCoords.reduce((a, b) => a.add(b), v.set(0, 0, 0)).divideScalar(groundProjectedCoords.length);
      const maxSize = 2 * groundProjectedCoords.map(v => Math.hypot(v.x - centerPos.x, v.z - centerPos.z)).reduce((a, b) => Math.max(a, b));
      plane.scale.setScalar(maxSize);
      plane.position.copy(centerPos);
      if (helper != null && helper.parent) helper.update();

      // Inject uniforms
      normalMatB.viewMatrix.value = normalMat.viewMatrix.value = camera.matrixWorldInverse;
      const dirLightNearPlane = lpF.setFromProjectionMatrix(lpM.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)).planes[4];
      causticsMaterial.cameraMatrixWorld = camera.matrixWorld;
      causticsMaterial.cameraProjectionMatrixInv = camera.projectionMatrixInverse;
      causticsMaterial.lightDir = lightDirInv;
      causticsMaterial.lightPlaneNormal = dirLightNearPlane.normal;
      causticsMaterial.lightPlaneConstant = dirLightNearPlane.constant;
      causticsMaterial.near = camera.near;
      causticsMaterial.far = camera.far;
      if (params.resolution) causticsMaterial.resolution = params.resolution;
      causticsMaterial.size = radius;
      if (params.intensity) causticsMaterial.intensity = params.intensity;
      if (params.worldRadius) causticsMaterial.worldRadius = params.worldRadius;

      // Switch the scene on
      scene.visible = true;

      // Render front face normals
      gl.setRenderTarget(normalTarget);
      gl.clear();
      scene.overrideMaterial = normalMat;
      gl.render(scene, camera);

      // Render back face normals, if enabled
      gl.setRenderTarget(normalTargetB);
      gl.clear();
      if (params.backside) {
        scene.overrideMaterial = normalMatB;
        gl.render(scene, camera);
      }

      // Remove the override material
      scene.overrideMaterial = null;
      // Render front face caustics
      if (params.ior) causticsMaterial.ior = params.ior;
      plane.material.lightProjMatrix = camera.projectionMatrix;
      plane.material.lightViewMatrix = camera.matrixWorldInverse;
      causticsMaterial.normalTexture = normalTarget.texture;
      causticsMaterial.depthTexture = normalTarget.depthTexture;
      gl.setRenderTarget(causticsTarget);
      gl.clear();
      causticsQuad.render(gl);

      // Render back face caustics, if enabled
      if (params.backsideIOR) causticsMaterial.ior = params.backsideIOR;
      causticsMaterial.normalTexture = normalTargetB.texture;
      causticsMaterial.depthTexture = normalTargetB.depthTexture;
      gl.setRenderTarget(causticsTargetB);
      gl.clear();
      if (params.backside) causticsQuad.render(gl);

      // Reset render target
      gl.setRenderTarget(null);

      // Switch the scene off if caustics is all that's wanted
      if (params.causticsOnly) scene.visible = false;
    }
  };
}
const Caustics = (renderer, {
  frames = 1,
  causticsOnly = false,
  ior = 1.1,
  backside = false,
  backsideIOR = 1.1,
  worldRadius = 0.3125,
  color = new THREE$8.Color('white'),
  intensity = 0.05,
  resolution = 2024,
  lightSource = new THREE$8.Vector3(1, 1, 1),
  near = 0.1,
  far = 0 // auto calculates if zero
} = {}) => {
  const params = {
    frames,
    ior,
    color,
    causticsOnly,
    backside,
    backsideIOR,
    worldRadius,
    intensity,
    resolution,
    lightSource,
    near,
    far
  };
  const group = new THREE$8.Group();
  group.name = 'caustics_group';
  const camera = new THREE$8.OrthographicCamera();
  const scene = new THREE$8.Scene();
  scene.name = 'caustics_scene';
  const gl = renderer;
  const helper = new THREE$8.CameraHelper(camera);
  helper.name = 'caustics_helper';

  // Buffers for front and back faces
  const res = params.resolution;
  const normalTarget = useFBO(res, res, NORMALPROPS);
  const normalTargetB = useFBO(res, res, NORMALPROPS);
  if (!renderer.extensions.get('OES_texture_float_linear')) {
    console.warn('Caustics: OES_texture_float_linear extension is not supported, using HalfFloatType instead.');
    CAUSTICPROPS.type = THREE$8.HalfFloatType;
  }
  const causticsTarget = useFBO(res, res, CAUSTICPROPS);
  const causticsTargetB = useFBO(res, res, CAUSTICPROPS);
  const plane = new THREE$8.Mesh(new THREE$8.PlaneGeometry(1, 1), new CausticsProjectionMaterial({
    transparent: true,
    color: params.color,
    causticsTexture: causticsTarget.texture,
    causticsTextureB: causticsTargetB.texture,
    blending: THREE$8.CustomBlending,
    blendSrc: THREE$8.OneFactor,
    blendDst: THREE$8.SrcAlphaFactor,
    depthWrite: false
  }));
  plane.name = 'caustics_plane';
  plane.rotation.x = -Math.PI / 2;
  plane.renderOrder = 2;
  group.add(scene, plane);
  // scene.add(activeModel) //add glb to caustics scene
  // mainObjects.add(group, helper) // add entire group to scene
  group.updateWorldMatrix(false, true);
  const update = createCausticsUpdate(() => ({
    params,
    scene,
    group,
    camera,
    plane,
    normalTarget,
    normalTargetB,
    causticsTarget,
    causticsTargetB,
    helper
  }));
  return {
    scene,
    group,
    helper,
    params,
    update: update.bind({}, gl),
    normalTarget,
    normalTargetB,
    causticsTarget,
    causticsTargetB
  };
};

const MeshDiscardMaterial = shaderMaterial({}, 'void main() { }', 'void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }');

const THREE$7 = await importShared('three');


/** Author: @N8Programs https://github.com/N8python
 *    https://gist.github.com/N8python/eb42d25c7cd00d12e965ac9cba544317
 *  Inspired by: @ore_ukonpower and http://next.junni.co.jp
 *    https://github.com/junni-inc/next.junni.co.jp/blob/master/src/ts/MainScene/World/Sections/Section2/Transparents/Transparent/shaders/transparent.fs
 */
class MeshTransmissionMaterial extends THREE$7.MeshPhysicalMaterial {
  constructor({
    samples = 6,
    transmissionSampler = false,
    chromaticAberration = 0.05,
    transmission = 0,
    _transmission = 1,
    transmissionMap = null,
    roughness = 0,
    thickness = 0,
    thicknessMap = null,
    attenuationDistance = Infinity,
    attenuationColor = new THREE$7.Color('white'),
    anisotropicBlur = 0.1,
    time = 0,
    distortion = 0.0,
    distortionScale = 0.5,
    temporalDistortion = 0.0,
    buffer = null
  } = {}) {
    super();
    this.uniforms = {
      chromaticAberration: {
        value: chromaticAberration
      },
      // Transmission must always be 0, unless transmissionSampler is being used
      transmission: {
        value: transmission
      },
      // Instead a workaround is used, see below for reasons why
      _transmission: {
        value: _transmission
      },
      transmissionMap: {
        value: transmissionMap
      },
      // Roughness is 1 in THREE.MeshPhysicalMaterial but it makes little sense in a transmission material
      roughness: {
        value: roughness
      },
      thickness: {
        value: thickness
      },
      thicknessMap: {
        value: thicknessMap
      },
      attenuationDistance: {
        value: attenuationDistance
      },
      attenuationColor: {
        value: attenuationColor
      },
      anisotropicBlur: {
        value: anisotropicBlur
      },
      time: {
        value: time
      },
      distortion: {
        value: distortion
      },
      distortionScale: {
        value: distortionScale
      },
      temporalDistortion: {
        value: temporalDistortion
      },
      buffer: {
        value: buffer
      }
    };

    // @ts-ignore
    this.onBeforeCompile = shader => {
      shader.uniforms = {
        ...shader.uniforms,
        ...this.uniforms
      };

      // If the transmission sampler is active inject a flag
      if (transmissionSampler) shader.defines.USE_SAMPLER = '';
      // Otherwise we do use use .transmission and must therefore force USE_TRANSMISSION
      // because threejs won't inject it for us
      else shader.defines.USE_TRANSMISSION = '';

      // Head
      shader.fragmentShader = /*glsl*/`
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
      }\n` + shader.fragmentShader;

      // Remove transmission
      shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_pars_fragment>', /*glsl*/`
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
        #endif\n`);

      // Add refraction
      shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_fragment>', /*glsl*/`  
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
        for (float i = 0.0; i < ${samples}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${samples})) , material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${samples})), material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${samples}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n`);
    };
    Object.keys(this.uniforms).forEach(name => Object.defineProperty(this, name, {
      get: () => this.uniforms[name].value,
      set: v => this.uniforms[name].value = v
    }));
  }
}

const {defineComponent:_defineComponent$a} = await importShared('vue');

const {unref:_unref$5,openBlock:_openBlock$9,createElementBlock:_createElementBlock$6} = await importShared('vue');

const _hoisted_1$5 = ["buffer", "side"];
const {shallowRef: shallowRef$2,nextTick,onMounted: onMounted$1} = await importShared('vue');
const {BackSide: BackSide$1,DoubleSide: DoubleSide$1} = await importShared('three');

const backsideEnvMapIntensity = 0;
const _sfc_main$a = /* @__PURE__ */ _defineComponent$a({
  __name: "index",
  props: {
    backside: { type: Boolean, default: true },
    thickness: { default: 1 },
    backsideThickness: { default: 0.5 },
    fboResolution: { default: 256 }
  },
  setup(__props, { expose: __expose }) {
    const MeshTransmissionMaterialClass = shallowRef$2();
    const { extend, scene, renderer, camera } = Fs();
    const parent = shallowRef$2();
    const props = __props;
    extend({ MeshTransmissionMaterial });
    function findMeshByMaterialUuid(scene2, materialUuid) {
      let foundMesh;
      scene2.traverse((object) => {
        if (object.isMesh && object.material && object.material.uuid === materialUuid) {
          foundMesh = object;
        }
      });
      return foundMesh;
    }
    const discardMaterial = new MeshDiscardMaterial();
    const { onBeforeRender } = _l();
    const fboBack = useFBO$1({ width: props.fboResolution, height: props.fboResolution, isLoop: false });
    const fboMain = useFBO$1({ width: props.fboResolution, height: props.fboResolution, isLoop: false });
    onMounted$1(async () => {
      await nextTick();
      parent.value = findMeshByMaterialUuid(scene.value, MeshTransmissionMaterialClass.value.uuid);
    });
    let oldBg;
    let oldEnvMapIntensity;
    let oldTone;
    let oldSide;
    onBeforeRender(({ elapsed }) => {
      if (!MeshTransmissionMaterialClass.value) {
        return;
      }
      MeshTransmissionMaterialClass.value.time = elapsed;
      if (MeshTransmissionMaterialClass.value.buffer === fboMain.value.texture) {
        if (parent.value) {
          oldTone = renderer.toneMapping;
          oldBg = scene.value.background;
          oldEnvMapIntensity = MeshTransmissionMaterialClass.value.envMapIntensity;
          oldSide = parent.value.material.side;
          parent.value.material = discardMaterial;
          if (props.backside) {
            renderer.setRenderTarget(fboBack.value);
            renderer.render(scene.value, camera.value);
            parent.value.material = MeshTransmissionMaterialClass.value;
            parent.value.material.thickness = props.backsideThickness;
            parent.value.material.buffer = fboBack.value.texture;
            parent.value.material.side = BackSide$1;
            parent.value.material.envMapIntensity = backsideEnvMapIntensity;
          }
          renderer.setRenderTarget(fboMain.value);
          renderer.render(scene.value, camera.value);
          parent.value.material.buffer = fboMain.value.texture;
          parent.value.material = MeshTransmissionMaterialClass.value;
          parent.value.material.thickness = props.thickness;
          parent.value.material.side = oldSide;
          parent.value.material.envMapIntensity = oldEnvMapIntensity;
          scene.value.background = oldBg;
          renderer.setRenderTarget(null);
          renderer.toneMapping = oldTone;
        }
      }
    });
    __expose({ root: MeshTransmissionMaterialClass, constructor: MeshTransmissionMaterial });
    return (_ctx, _cache) => {
      return _openBlock$9(), _createElementBlock$6("TresMeshTransmissionMaterial", {
        ref_key: "MeshTransmissionMaterialClass",
        ref: MeshTransmissionMaterialClass,
        buffer: _unref$5(fboMain).texture,
        side: _unref$5(DoubleSide$1)
      }, null, 8, _hoisted_1$5);
    };
  }
});

const {defineComponent:_defineComponent$9} = await importShared('vue');

const {renderSlot:_renderSlot$3,createElementVNode:_createElementVNode$2,openBlock:_openBlock$8,createElementBlock:_createElementBlock$5} = await importShared('vue');

const {ref: ref$4,onMounted} = await importShared('vue');

const {Box3,Vector3,Sphere} = await importShared('three');

const _sfc_main$9 = /* @__PURE__ */ _defineComponent$9({
  __name: "index",
  props: {
    precise: { type: Boolean, default: true },
    top: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    front: { type: Boolean, default: false },
    back: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
    disableX: { type: Boolean, default: false },
    disableY: { type: Boolean, default: false },
    disableZ: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const gref = ref$4(null);
    const outer = ref$4(null);
    const inner = ref$4(null);
    onMounted(() => {
      if (!outer.value) return;
      if (!inner.value) return;
      outer.value.matrixWorld.identity();
      const box3 = new Box3().setFromObject(inner.value, props.precise);
      const center = new Vector3();
      const sphere = new Sphere();
      const width = box3.max.x - box3.min.x;
      const height = box3.max.y - box3.min.y;
      const depth = box3.max.z - box3.min.z;
      box3.getCenter(center);
      box3.getBoundingSphere(sphere);
      const vAlign = props.top ? height / 2 : props.bottom ? -height / 2 : 0;
      const hAlign = props.left ? -width / 2 : props.right ? width / 2 : 0;
      const dAlign = props.front ? depth / 2 : props.back ? -depth / 2 : 0;
      outer.value.position.set(
        props.disable || props.disableX ? 0 : -center.x + hAlign,
        props.disable || props.disableY ? 0 : -center.y + vAlign,
        props.disable || props.disableZ ? 0 : -center.z + dAlign
      );
    });
    return (_ctx, _cache) => {
      return _openBlock$8(), _createElementBlock$5("TresGroup", {
        ref_key: "gref",
        ref: gref
      }, [
        _createElementVNode$2("TresGroup", {
          ref_key: "outer",
          ref: outer
        }, [
          _createElementVNode$2("TresGroup", {
            ref_key: "inner",
            ref: inner
          }, [
            _renderSlot$3(_ctx.$slots, "default")
          ], 512)
        ], 512)
      ], 512);
    };
  }
});

const {defineComponent:_defineComponent$8} = await importShared('vue');

const {renderSlot:_renderSlot$2,createElementVNode:_createElementVNode$1,unref:_unref$4,Fragment:_Fragment$1,openBlock:_openBlock$7,createElementBlock:_createElementBlock$4} = await importShared('vue');

const _hoisted_1$4 = ["object"];
const _hoisted_2 = ["object"];
const {shallowRef: shallowRef$1,watch: watch$6,watchEffect: watchEffect$1} = await importShared('vue');
const THREE$6 = await importShared('three');

const _sfc_main$8 = /* @__PURE__ */ _defineComponent$8({
  __name: "index",
  props: {
    color: { default: "#ffffff" },
    ior: { default: 1.1 },
    backsideIOR: { default: 1.1 },
    far: { default: 15 },
    worldRadius: { default: 0.3 },
    intensity: { default: 0.05 },
    causticsOnly: { type: Boolean, default: false },
    lightSource: { default: { x: 1, y: 1, z: 1 } },
    resolution: { default: 1024 }
  },
  setup(__props) {
    const props = __props;
    const { renderer } = Fs();
    const caustics = Caustics(renderer, { frames: Infinity, resolution: props.resolution, worldRadius: props.worldRadius });
    caustics.params.backside = true;
    const group = shallowRef$1(null);
    watch$6(group, (newVal) => {
      if (newVal) {
        caustics.scene.add(newVal);
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      caustics.update();
    });
    watchEffect$1(() => {
      if (props.color) {
        caustics.params.color.set(props.color);
      }
      if (props.ior) {
        caustics.params.ior = props.ior;
      }
      if (props.backsideIOR) {
        caustics.params.backsideIOR = props.backsideIOR;
      }
      if (props.far) {
        caustics.params.far = props.far;
      }
      if (props.worldRadius) {
        caustics.params.worldRadius = props.worldRadius;
      }
      if (props.intensity) {
        caustics.params.intensity = props.intensity;
      }
    });
    watch$6(
      () => props.causticsOnly,
      (value) => {
        caustics.params.causticsOnly = value;
      }
    );
    watch$6(
      () => props.lightSource,
      (value) => {
        if (value) {
          if (caustics.params.lightSource instanceof THREE$6.Vector3) {
            caustics.params.lightSource.set(value.x, value.y, value.z);
          }
        }
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$4(_Fragment$1, null, [
        _createElementVNode$1("TresGroup", {
          ref_key: "group",
          ref: group
        }, [
          _renderSlot$2(_ctx.$slots, "default")
        ], 512),
        _createElementVNode$1("primitive", {
          object: _unref$4(caustics).group,
          position: [0, 3e-3, 0]
        }, null, 8, _hoisted_1$4),
        _createElementVNode$1("primitive", {
          object: _unref$4(caustics).helper,
          visible: false
        }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});

const THREE$5 = await importShared('three');

function reset(gl, scene, camera) {
  scene.traverse((object) => {
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((mat) => {
          gl.properties.remove(mat);
          mat.dispose();
        });
      } else {
        gl.properties.remove(object.material);
        object.material.dispose();
      }
    }
  });
  gl.info.programs.length = 0;
  gl.compile(scene, camera);
}
const pcss = ({ focus = 0, size = 25, samples = 10 } = {}) => {
  const original = THREE$5.ShaderChunk.shadowmap_pars_fragment;
  THREE$5.ShaderChunk.shadowmap_pars_fragment = THREE$5.ShaderChunk.shadowmap_pars_fragment.replace(
    "#ifdef USE_SHADOWMAP",
    `#ifdef USE_SHADOWMAP

    #define PENUMBRA_FILTER_SIZE float(${size})
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
      float blockerDepthSum = float(${focus});
      float blockers = 0.0;
    
      int j = 0;
      vec2 offset = vec2(0.);
      float depth = 0.;
    
      #pragma unroll_loop_start
      for(int i = 0; i < ${samples}; i ++) {
        offset = (vogelDiskSample(j, ${samples}, angle) * texelSize) * 2.0 * PENUMBRA_FILTER_SIZE;
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
      for (int i = 0; i < ${samples}; i++) {
        vogelSample = vogelDiskSample(j, ${samples}, angle) * texelSize;
        offset = vogelSample * (1.0 + filterRadius * float(${size}));
        shadow += step( zReceiver, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
        j++;
      }
      #pragma unroll_loop_end
      return shadow * 1.0 / ${samples}.0;
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
    }`
  ).replace(
    "#if defined( SHADOWMAP_TYPE_PCF )",
    "\nreturn PCSS(shadowMap, shadowCoord);\n#if defined( SHADOWMAP_TYPE_PCF )"
  );
  return (gl, scene, camera) => {
    THREE$5.ShaderChunk.shadowmap_pars_fragment = original;
    reset(gl, scene, camera);
  };
};

const {defineComponent:_defineComponent$7} = await importShared('vue');

const {watch: watch$5} = await importShared('vue');

const {Mesh} = await importShared('three');
const _sfc_main$7 = /* @__PURE__ */ _defineComponent$7({
  __name: "index",
  props: {
    enabled: { type: Boolean, default: true },
    size: { default: 25 },
    focus: { default: 0 },
    samples: { default: 10 }
  },
  setup(__props) {
    const props = __props;
    const { camera, renderer, scene } = Fs();
    let reset = null;
    const updatePCSS = (args) => {
      const { enabled, size, focus, samples } = args;
      if (reset) {
        reset(renderer, scene.value, camera.value);
        reset = null;
      }
      if (enabled) {
        reset = pcss({ focus, size, samples });
        scene.value.traverse((object) => {
          if (object instanceof Mesh) {
            object.material.dispose();
          }
        });
      }
    };
    updatePCSS(props);
    watch$5(props, () => {
      updatePCSS(props);
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const THREE$4 = await importShared('three');

const {HalfFloatType,WebGLCubeRenderTarget} = await importShared('three');

const {onBeforeUnmount,ref: ref$3,watch: watch$4} = await importShared('vue');

function useCubeCamera({ resolution = 256, near = 0.1, far = 1e3, envMap, fog } = {}) {
  const { renderer, scene } = Fs();
  const fbo = ref$3(null);
  const resolutionR = ref$3(resolution);
  const nearR = ref$3(near);
  const farR = ref$3(far);
  const camera = ref$3(null);
  watch$4(() => resolutionR, (r) => {
    fbo.value?.dispose();
    fbo.value = new WebGLCubeRenderTarget(r.value);
    fbo.value.texture.type = HalfFloatType;
  }, { immediate: true });
  watch$4([nearR, farR, fbo], ([n, fa, fb]) => {
    if (fb) {
      camera.value = new THREE$4.CubeCamera(n, fa, fb);
    }
  }, { immediate: true });
  onBeforeUnmount(() => {
    fbo.value?.dispose();
  });
  let originalFog;
  let originalBackground;
  const update = () => {
    originalFog = scene.value.fog;
    originalBackground = scene.value.background;
    scene.value.background = envMap || originalBackground;
    scene.value.fog = fog || originalFog;
    camera.value?.update(renderer, scene.value);
    scene.value.fog = originalFog;
    scene.value.background = originalBackground;
  };
  return {
    fbo,
    camera,
    update
  };
}

const {defineComponent:_defineComponent$6} = await importShared('vue');

const {unref:_unref$3,createElementVNode:_createElementVNode,renderSlot:_renderSlot$1,openBlock:_openBlock$6,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$3 = ["object"];
const {ref: ref$2} = await importShared('vue');

const _sfc_main$6 = /* @__PURE__ */ _defineComponent$6({
  __name: "index",
  props: {
    resolution: { default: 256 },
    near: { default: 0.1 },
    far: { default: 1e3 },
    envMap: { default: null },
    fog: { default: null },
    frames: { default: Infinity }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { fbo, camera, update } = useCubeCamera({
      resolution: props.resolution,
      near: props.near,
      far: props.far,
      envMap: props.envMap,
      fog: props.fog
    });
    const { onBeforeRender } = _l();
    let count = 0;
    const rgRef = ref$2(null);
    onBeforeRender(() => {
      if (rgRef.value && (props.frames === Infinity || count < props.frames)) {
        rgRef.value.visible = false;
        update();
        rgRef.value.visible = true;
        count++;
      }
    });
    __expose({
      texture: fbo.value?.texture
    });
    return (_ctx, _cache) => {
      return _openBlock$6(), _createElementBlock$3("TresGroup", null, [
        _createElementVNode("primitive", { object: _unref$3(camera) }, null, 8, _hoisted_1$3),
        _createElementVNode("TresGroup", {
          ref_key: "rgRef",
          ref: rgRef
        }, [
          _renderSlot$1(_ctx.$slots, "default")
        ], 512)
      ]);
    };
  }
});

const THREE$3 = await importShared('three');

function CientosShaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
  const material = class extends THREE$3.ShaderMaterial {
    constructor(parameters = {}) {
      const entries = Object.entries(uniforms);
      super({
        uniforms: entries.reduce((acc, [name, value]) => {
          const uniform = THREE$3.UniformsUtils.clone({ [name]: { value } });
          return {
            ...acc,
            ...uniform
          };
        }, {}),
        vertexShader,
        fragmentShader
      });
      this.key = "";
      entries.forEach(
        ([name]) => Object.defineProperty(this, name, {
          get: () => this.uniforms[name].value,
          set: (v) => this.uniforms[name].value = v
        })
      );
      Object.assign(this, parameters);
      if (onInit) onInit(this);
    }
  };
  material.key = THREE$3.MathUtils.generateUUID();
  return material;
}

var object_hash = {exports: {}};

(function (module, exports) {
	!function(e){module.exports=e();}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof commonjsRequire&&commonjsRequire;if(!e&&t)return t(n,true);if(a)return a(n,true);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,function(e){var t=o[n][1][e];return s(t||e)},e,e.exports,r,o,i,u);}return i[n].exports}for(var a="function"==typeof commonjsRequire&&commonjsRequire,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,s,c,d,h,p,g,y){var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new l).write&&(n.write=n.update,n.end=n.update),f(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=function(e){return t(e,{excludeValues:true,algorithm:"sha1",encoding:"hex"})},m.MD5=function(e){return t(e,{algorithm:"md5",encoding:"hex"})},m.keysMD5=function(e){return t(e,{algorithm:"md5",encoding:"hex",excludeValues:true})};var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);function u(e,t){var n={};if(n.algorithm=(t=t||{}).algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=true===t.ignoreUnknown,n.respectType=false!==t.respectType,n.respectFunctionNames=false!==t.respectFunctionNames,n.respectFunctionProperties=false!==t.respectFunctionProperties,n.unorderedArrays=true===t.unorderedArrays,n.unorderedSets=false!==t.unorderedSets,n.unorderedObjects=false!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<o.length;++r)o[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=o[r]);if(-1===o.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+o.join(", "));if(-1===i.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+i.join(", "));return n}function a(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function f(o,t,i){i=i||[];function u(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return {dispatch:function(e){return this["_"+(null===(e=o.replacer?o.replacer(e):e)?"null":typeof e)](e)},_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==s&&s.isBuffer&&s.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),false===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(function(e){return !o.excludeKeys(e)})),u("object:"+e.length+":"),n=this,e.forEach(function(e){n.dispatch(e),u(":"),o.excludeValues||n.dispatch(t[e]),u(",");});if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t);},_array:function(e,t){t=void 0!==t?t:false!==o.unorderedArrays;var n=this;if(u("array:"+e.length+":"),!t||e.length<=1)return e.forEach(function(e){return n.dispatch(e)});var r=[],t=e.map(function(e){var t=new l,n=i.slice();return f(o,t,n).dispatch(e),r=r.concat(n.slice(i.length)),t.read().toString()});return i=i.concat(r),t.sort(),this._array(t,false)},_date:function(e){return u("date:"+e.toJSON())},_symbol:function(e){return u("symbol:"+e.toString())},_error:function(e){return u("error:"+e.toString())},_boolean:function(e){return u("bool:"+e.toString())},_string:function(e){u("string:"+e.length+":"),u(e.toString());},_function:function(e){u("fn:"),a(e)?this.dispatch("[native]"):this.dispatch(e.toString()),false!==o.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),o.respectFunctionProperties&&this._object(e);},_number:function(e){return u("number:"+e.toString())},_xml:function(e){return u("xml:"+e.toString())},_null:function(){return u("Null")},_undefined:function(){return u("Undefined")},_regexp:function(e){return u("regex:"+e.toString())},_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return u("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return u("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,false!==o.unorderedSets)},_set:function(e){u("set:");e=Array.from(e);return this._array(e,false!==o.unorderedSets)},_file:function(e){return u("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(o.ignoreUnknown)return u("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return u("domwindow")},_bigint:function(e){return u("bigint:"+e.toString())},_process:function(){return u("process")},_timer:function(){return u("timer")},_pipe:function(){return u("pipe")},_tcp:function(){return u("tcp")},_udp:function(){return u("udp")},_tty:function(){return u("tty")},_statwatcher:function(){return u("statwatcher")},_securecontext:function(){return u("securecontext")},_connection:function(){return u("connection")},_zlib:function(){return u("zlib")},_context:function(){return u("context")},_nodescript:function(){return u("nodescript")},_httpparser:function(){return u("httpparser")},_dataview:function(){return u("dataview")},_signal:function(){return u("signal")},_fsevent:function(){return u("fsevent")},_tlswrap:function(){return u("tlswrap")}}}function l(){return {buf:"",write:function(e){this.buf+=e;},end:function(e){this.buf+=e;},read:function(){return this.buf}}}m.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),f(t=u(e,t),n).dispatch(e)};}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/");},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){!function(e){var a="undefined"!=typeof Uint8Array?Uint8Array:Array,t="+".charCodeAt(0),n="/".charCodeAt(0),r="0".charCodeAt(0),o="a".charCodeAt(0),i="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function f(e){e=e.charCodeAt(0);return e===t||e===u?62:e===n||e===s?63:e<r?-1:e<r+10?e-r+26+26:e<i+26?e-i:e<o+26?e-o+26:void 0}e.toByteArray=function(e){var t,n;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.length,r="="===e.charAt(r-2)?2:"="===e.charAt(r-1)?1:0,o=new a(3*e.length/4-r),i=0<r?e.length-4:e.length,u=0;function s(e){o[u++]=e;}for(t=0;t<i;t+=4,0)s((16711680&(n=f(e.charAt(t))<<18|f(e.charAt(t+1))<<12|f(e.charAt(t+2))<<6|f(e.charAt(t+3))))>>16),s((65280&n)>>8),s(255&n);return 2==r?s(255&(n=f(e.charAt(t))<<2|f(e.charAt(t+1))>>4)):1==r&&(s((n=f(e.charAt(t))<<10|f(e.charAt(t+1))<<4|f(e.charAt(t+2))>>2)>>8&255),s(255&n)),o},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,u="";function s(e){return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=s((o=n)>>18&63)+s(o>>12&63)+s(o>>6&63)+s(63&o);switch(i){case 1:u=(u+=s((n=e[e.length-1])>>2))+s(n<<4&63)+"==";break;case 2:u=(u=(u+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+"=";}return u};}(void 0===f?this.base64js={}:f);}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib");},{buffer:3,lYpoI2:11}],3:[function(O,e,H){!function(e,n,f,r,h,p,g,y,w){var a=O("base64-js"),i=O("ieee754");function f(e,t,n){if(!(this instanceof f))return new f(e,t,n);var r,o,i,u,s=typeof e;if("base64"===t&&"string"==s)for(e=(u=e).trim?u.trim():u.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)r=j(e);else if("string"==s)r=f.byteLength(e,t);else {if("object"!=s)throw new Error("First argument needs to be a number, array or string.");r=j(e.length);}if(f._useTypedArrays?o=f._augment(new Uint8Array(r)):((o=this).length=r,o._isBuffer=true),f._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(C(u=e)||f.isBuffer(u)||u&&"object"==typeof u&&"number"==typeof u.length)for(i=0;i<r;i++)f.isBuffer(e)?o[i]=e.readUInt8(i):o[i]=e[i];else if("string"==s)o.write(e,0,t);else if("number"==s&&!f._useTypedArrays&&!n)for(i=0;i<r;i++)o[i]=0;return o}function b(e,t,n,r){return f._charsWritten=c(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return f._charsWritten=c(function(e){for(var t,n,r=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,n=n%256,r.push(n),r.push(t);return r}(t),e,n,r)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function o(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(o=e[t],t+1<r&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<r&&(o|=e[t+1])),o}function u(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(t+2<r&&(o=e[t+2]<<16),t+1<r&&(o|=e[t+1]<<8),o|=e[t],t+3<r&&(o+=e[t+3]<<24>>>0)):(t+1<r&&(o=e[t+1]<<16),t+2<r&&(o|=e[t+2]<<8),t+3<r&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,true),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,true),2147483648&r?-1*(4294967295-r+1):r}function I(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}function A(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+7<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,52,8)}function s(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,2);i<u;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i);}function l(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,4);i<u;i++)e[n+i]=t>>>8*(r?i:3-i)&255;}function B(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o);}function L(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),F(t,2147483647,-2147483648)),e.length<=n||l(e,0<=t?t:4294967295+t+1,n,r,o);}function U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4);}function x(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||i.write(e,t,n,r,52,8);}H.Buffer=f,H.SlowBuffer=f,H.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return  false}}(),f.isEncoding=function(e){switch(String(e).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return  true;default:return  false}},f.isBuffer=function(e){return !(null==e||!e._isBuffer)},f.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case "hex":n=e.length/2;break;case "utf8":case "utf-8":n=T(e).length;break;case "ascii":case "binary":case "raw":n=e.length;break;case "base64":n=M(e).length;break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},f.concat=function(e,t){if(d(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new f(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var n=new f(t),r=0,o=0;o<e.length;o++){var i=e[o];i.copy(n,r),r+=i.length;}return n},f.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(a=r,r=t,t=n,n=a),t=Number(t)||0;var o,i,u,s,a=this.length-t;switch((!n||a<(n=Number(n)))&&(n=a),r=String(r||"utf8").toLowerCase()){case "hex":o=function(e,t,n,r){n=Number(n)||0;var o=e.length-n;(!r||o<(r=Number(r)))&&(r=o),d((o=t.length)%2==0,"Invalid hex string"),o/2<r&&(r=o/2);for(var i=0;i<r;i++){var u=parseInt(t.substr(2*i,2),16);d(!isNaN(u),"Invalid hex string"),e[n+i]=u;}return f._charsWritten=2*i,i}(this,e,t,n);break;case "utf8":case "utf-8":i=this,u=t,s=n,o=f._charsWritten=c(T(e),i,u,s);break;case "ascii":case "binary":o=b(this,e,t,n);break;case "base64":i=this,u=t,s=n,o=f._charsWritten=c(M(e),i,u,s);break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":o=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o},f.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return "";switch(e){case "hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0);(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=k(e[i]);return o}(s,t,n);break;case "utf8":case "utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=N(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+N(o)}(s,t,n);break;case "ascii":case "binary":r=v(s,t,n);break;case "base64":o=s,u=n,r=0===(i=t)&&u===o.length?a.fromByteArray(o):a.fromByteArray(o.slice(i,u));break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(s,t,n);break;default:throw new Error("Unknown encoding")}return r},f.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(e,t,n,r){if(t=t||0,(r=r||0===r?r:this.length)!==(n=n||0)&&0!==e.length&&0!==this.length){d(n<=r,"sourceEnd < sourceStart"),d(0<=t&&t<e.length,"targetStart out of bounds"),d(0<=n&&n<this.length,"sourceStart out of bounds"),d(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length);var o=(r=e.length-t<r-n?e.length-t+n:r)-n;if(o<100||!f._useTypedArrays)for(var i=0;i<o;i++)e[i+t]=this[i+n];else e._set(this.subarray(n,n+o),t);}},f.prototype.slice=function(e,t){var n=this.length;if(e=S(e,n,0),t=S(t,n,n),f._useTypedArrays)return f._augment(this.subarray(e,t));for(var r=t-e,o=new f(r,void 0,true),i=0;i<r;i++)o[i]=this[i+e];return o},f.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},f.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},f.prototype.readUInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},f.prototype.readUInt16LE=function(e,t){return o(this,e,true,t)},f.prototype.readUInt16BE=function(e,t){return o(this,e,false,t)},f.prototype.readUInt32LE=function(e,t){return u(this,e,true,t)},f.prototype.readUInt32BE=function(e,t){return u(this,e,false,t)},f.prototype.readInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){return _(this,e,true,t)},f.prototype.readInt16BE=function(e,t){return _(this,e,false,t)},f.prototype.readInt32LE=function(e,t){return E(this,e,true,t)},f.prototype.readInt32BE=function(e,t){return E(this,e,false,t)},f.prototype.readFloatLE=function(e,t){return I(this,e,true,t)},f.prototype.readFloatBE=function(e,t){return I(this,e,false,t)},f.prototype.readDoubleLE=function(e,t){return A(this,e,true,t)},f.prototype.readDoubleBE=function(e,t){return A(this,e,false,t)},f.prototype.writeUInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e);},f.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,true,n);},f.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,false,n);},f.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,true,n);},f.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,false,n);},f.prototype.writeInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"Trying to write beyond buffer length"),F(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n));},f.prototype.writeInt16LE=function(e,t,n){B(this,e,t,true,n);},f.prototype.writeInt16BE=function(e,t,n){B(this,e,t,false,n);},f.prototype.writeInt32LE=function(e,t,n){L(this,e,t,true,n);},f.prototype.writeInt32BE=function(e,t,n){L(this,e,t,false,n);},f.prototype.writeFloatLE=function(e,t,n){U(this,e,t,true,n);},f.prototype.writeFloatBE=function(e,t,n){U(this,e,t,false,n);},f.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,true,n);},f.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,false,n);},f.prototype.fill=function(e,t,n){if(t=t||0,n=n||this.length,d("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),d(t<=n,"end < start"),n!==t&&0!==this.length){d(0<=t&&t<this.length,"start out of bounds"),d(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e;}},f.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=k(this[n]),n===H.INSPECT_MAX_BYTES){e[n+1]="...";break}return "<Buffer "+e.join(" ")+">"},f.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var t=f.prototype;function S(e,t,n){return "number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function j(e){return (e=~~Math.ceil(+e))<0?0:e}function C(e){return (Array.isArray||function(e){return "[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function T(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var o=n,i=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(o,n+1)).substr(1).split("%")),u=0;u<i.length;u++)t.push(parseInt(i[u],16));}return t}function M(e){return a.toByteArray(e)}function c(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function N(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){d("number"==typeof e,"cannot write a non-number as a number"),d(0<=e,"specified a negative value for writing an unsigned value"),d(e<=t,"value is larger than maximum value for type"),d(Math.floor(e)===e,"value has a fractional component");}function F(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value"),d(Math.floor(e)===e,"value has a fractional component");}function D(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value");}function d(e,t){if(!e)throw new Error(t||"Failed assertion")}f._augment=function(e){return e._isBuffer=true,e._get=e.get,e._set=e.set,e.get=t.get,e.set=t.set,e.write=t.write,e.toString=t.toString,e.toLocaleString=t.toString,e.toJSON=t.toJSON,e.copy=t.copy,e.slice=t.slice,e.readUInt8=t.readUInt8,e.readUInt16LE=t.readUInt16LE,e.readUInt16BE=t.readUInt16BE,e.readUInt32LE=t.readUInt32LE,e.readUInt32BE=t.readUInt32BE,e.readInt8=t.readInt8,e.readInt16LE=t.readInt16LE,e.readInt16BE=t.readInt16BE,e.readInt32LE=t.readInt32LE,e.readInt32BE=t.readInt32BE,e.readFloatLE=t.readFloatLE,e.readFloatBE=t.readFloatBE,e.readDoubleLE=t.readDoubleLE,e.readDoubleBE=t.readDoubleBE,e.writeUInt8=t.writeUInt8,e.writeUInt16LE=t.writeUInt16LE,e.writeUInt16BE=t.writeUInt16BE,e.writeUInt32LE=t.writeUInt32LE,e.writeUInt32BE=t.writeUInt32BE,e.writeInt8=t.writeInt8,e.writeInt16LE=t.writeInt16LE,e.writeInt16BE=t.writeInt16BE,e.writeInt32LE=t.writeInt32LE,e.writeInt32BE=t.writeInt32BE,e.writeFloatLE=t.writeFloatLE,e.writeFloatBE=t.writeFloatBE,e.writeDoubleLE=t.writeDoubleLE,e.writeDoubleBE=t.writeDoubleBE,e.fill=t.fill,e.inspect=t.inspect,e.toArrayBuffer=t.toArrayBuffer,e};}.call(this,O("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer");},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(c,d,e){!function(e,t,a,n,r,o,i,u,s){var a=c("buffer").Buffer,f=4,l=new a(f);l.fill(0);d.exports={hash:function(e,t,n,r){for(var o=t(function(e,t){e.length%f!=0&&(n=e.length+(f-e.length%f),e=a.concat([e,l],n));for(var n,r=[],o=t?e.readInt32BE:e.readInt32LE,i=0;i<e.length;i+=f)r.push(o.call(e,i));return r}(e=a.isBuffer(e)?e:new a(e),r),8*e.length),t=r,i=new a(n),u=t?i.writeInt32BE:i.writeInt32LE,s=0;s<o.length;s++)u.call(i,o[s],4*s,true);return i}};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{buffer:3,lYpoI2:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,a=new u(s);function r(e,n){var r=b[e=e||"sha1"],o=[];return r||i("algorithm:",e,"is not yet supported"),{update:function(e){return u.isBuffer(e)||(e=new u(e)),o.push(e),e.length,this},digest:function(e){var t=u.concat(o),t=n?function(e,t,n){u.isBuffer(t)||(t=new u(t)),u.isBuffer(n)||(n=new u(n)),t.length>s?t=e(t):t.length<s&&(t=u.concat([t,a],s));for(var r=new u(s),o=new u(s),i=0;i<s;i++)r[i]=54^t[i],o[i]=92^t[i];return n=e(u.concat([r,n])),e(u.concat([o,n]))}(r,n,t):r(t);return o=null,e?t.toString(e):t}}}function i(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}a.fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=function(e,t){if(!t||!t.call)return new u(n(e));try{t.call(this,void 0,new u(n(e)));}catch(e){t(e);}};var o,f=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(e){_[e]=function(){i("sorry,",e,"is not implemented yet");};};for(o in f)m(f[o]);}.call(this,v("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(w,b,e){!function(e,r,o,i,u,a,f,l,y){var t=w("./helpers");function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var s=n,a=r,f=o,l=i,n=c(n,r,o,i,e[u+0],7,-680876936),i=c(i,n,r,o,e[u+1],12,-389564586),o=c(o,i,n,r,e[u+2],17,606105819),r=c(r,o,i,n,e[u+3],22,-1044525330);n=c(n,r,o,i,e[u+4],7,-176418897),i=c(i,n,r,o,e[u+5],12,1200080426),o=c(o,i,n,r,e[u+6],17,-1473231341),r=c(r,o,i,n,e[u+7],22,-45705983),n=c(n,r,o,i,e[u+8],7,1770035416),i=c(i,n,r,o,e[u+9],12,-1958414417),o=c(o,i,n,r,e[u+10],17,-42063),r=c(r,o,i,n,e[u+11],22,-1990404162),n=c(n,r,o,i,e[u+12],7,1804603682),i=c(i,n,r,o,e[u+13],12,-40341101),o=c(o,i,n,r,e[u+14],17,-1502002290),n=d(n,r=c(r,o,i,n,e[u+15],22,1236535329),o,i,e[u+1],5,-165796510),i=d(i,n,r,o,e[u+6],9,-1069501632),o=d(o,i,n,r,e[u+11],14,643717713),r=d(r,o,i,n,e[u+0],20,-373897302),n=d(n,r,o,i,e[u+5],5,-701558691),i=d(i,n,r,o,e[u+10],9,38016083),o=d(o,i,n,r,e[u+15],14,-660478335),r=d(r,o,i,n,e[u+4],20,-405537848),n=d(n,r,o,i,e[u+9],5,568446438),i=d(i,n,r,o,e[u+14],9,-1019803690),o=d(o,i,n,r,e[u+3],14,-187363961),r=d(r,o,i,n,e[u+8],20,1163531501),n=d(n,r,o,i,e[u+13],5,-1444681467),i=d(i,n,r,o,e[u+2],9,-51403784),o=d(o,i,n,r,e[u+7],14,1735328473),n=h(n,r=d(r,o,i,n,e[u+12],20,-1926607734),o,i,e[u+5],4,-378558),i=h(i,n,r,o,e[u+8],11,-2022574463),o=h(o,i,n,r,e[u+11],16,1839030562),r=h(r,o,i,n,e[u+14],23,-35309556),n=h(n,r,o,i,e[u+1],4,-1530992060),i=h(i,n,r,o,e[u+4],11,1272893353),o=h(o,i,n,r,e[u+7],16,-155497632),r=h(r,o,i,n,e[u+10],23,-1094730640),n=h(n,r,o,i,e[u+13],4,681279174),i=h(i,n,r,o,e[u+0],11,-358537222),o=h(o,i,n,r,e[u+3],16,-722521979),r=h(r,o,i,n,e[u+6],23,76029189),n=h(n,r,o,i,e[u+9],4,-640364487),i=h(i,n,r,o,e[u+12],11,-421815835),o=h(o,i,n,r,e[u+15],16,530742520),n=p(n,r=h(r,o,i,n,e[u+2],23,-995338651),o,i,e[u+0],6,-198630844),i=p(i,n,r,o,e[u+7],10,1126891415),o=p(o,i,n,r,e[u+14],15,-1416354905),r=p(r,o,i,n,e[u+5],21,-57434055),n=p(n,r,o,i,e[u+12],6,1700485571),i=p(i,n,r,o,e[u+3],10,-1894986606),o=p(o,i,n,r,e[u+10],15,-1051523),r=p(r,o,i,n,e[u+1],21,-2054922799),n=p(n,r,o,i,e[u+8],6,1873313359),i=p(i,n,r,o,e[u+15],10,-30611744),o=p(o,i,n,r,e[u+6],15,-1560198380),r=p(r,o,i,n,e[u+13],21,1309151649),n=p(n,r,o,i,e[u+4],6,-145523070),i=p(i,n,r,o,e[u+11],10,-1120210379),o=p(o,i,n,r,e[u+2],15,718787259),r=p(r,o,i,n,e[u+9],21,-343485551),n=g(n,s),r=g(r,a),o=g(o,f),i=g(i,l);}return Array(n,r,o,i)}function s(e,t,n,r,o,i){return g((t=g(g(t,e),g(r,i)))<<o|t>>>32-o,n)}function c(e,t,n,r,o,i,u){return s(t&n|~t&r,e,t,o,i,u)}function d(e,t,n,r,o,i,u){return s(t&r|n&~r,e,t,o,i,u)}function h(e,t,n,r,o,i,u){return s(t^n^r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return s(n^(t|~r),e,t,o,i,u)}function g(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=function(e){return t.hash(e,n,16)};}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,l,t){!function(e,t,n,r,o,i,u,s,f){l.exports=function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{buffer:3,lYpoI2:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,a,f,l){var i=c("./helpers");function u(l,c){l[c>>5]|=128<<24-c%32,l[15+(c+64>>9<<4)]=c;for(var e,t,n,r=Array(80),o=1732584193,i=-271733879,u=-1732584194,s=271733878,d=-1009589776,h=0;h<l.length;h+=16){for(var p=o,g=i,y=u,w=s,b=d,a=0;a<80;a++){r[a]=a<16?l[h+a]:v(r[a-3]^r[a-8]^r[a-14]^r[a-16],1);var f=m(m(v(o,5),(f=i,t=u,n=s,(e=a)<20?f&t|~f&n:!(e<40)&&e<60?f&t|f&n|t&n:f^t^n)),m(m(d,r[a]),(e=a)<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514)),d=s,s=u,u=v(i,30),i=o,o=f;}o=m(o,p),i=m(i,g),u=m(u,y),s=m(s,w),d=m(d,b);}return Array(o,i,u,s,d)}function m(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t){return e<<t|e>>>32-t}d.exports=function(e){return i.hash(e,u,20,true)};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(c,d,e){!function(e,t,n,r,u,s,a,f,l){function b(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,l){var c,d=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);e[l>>5]|=128<<24-l%32,e[15+(l+64>>9<<4)]=l;for(var r,o,h=0;h<e.length;h+=16){for(var i=t[0],u=t[1],s=t[2],p=t[3],a=t[4],g=t[5],y=t[6],w=t[7],f=0;f<64;f++)n[f]=f<16?e[f+h]:b(b(b((o=n[f-2],m(o,17)^m(o,19)^v(o,10)),n[f-7]),(o=n[f-15],m(o,7)^m(o,18)^v(o,3))),n[f-16]),c=b(b(b(b(w,m(o=a,6)^m(o,11)^m(o,25)),a&g^~a&y),d[f]),n[f]),r=b(m(r=i,2)^m(r,13)^m(r,22),i&u^i&s^u&s),w=y,y=g,g=a,a=b(p,c),p=s,s=u,u=i,i=b(c,r);t[0]=b(i,t[0]),t[1]=b(u,t[1]),t[2]=b(s,t[2]),t[3]=b(p,t[3]),t[4]=b(a,t[4]),t[5]=b(g,t[5]),t[6]=b(y,t[6]),t[7]=b(w,t[7]);}return t}var i=c("./helpers"),m=function(e,t){return e>>>t|e<<32-t},v=function(e,t){return e>>>t};d.exports=function(e){return i.hash(e,o,32,true)};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){f.read=function(e,t,n,r,o){var i,u,l=8*o-r-1,c=(1<<l)-1,d=c>>1,s=-7,a=n?o-1:0,f=n?-1:1,o=e[t+a];for(a+=f,i=o&(1<<-s)-1,o>>=-s,s+=l;0<s;i=256*i+e[t+a],a+=f,s-=8);for(u=i&(1<<-s)-1,i>>=-s,s+=r;0<s;u=256*u+e[t+a],a+=f,s-=8);if(0===i)i=1-d;else {if(i===c)return u?NaN:1/0*(o?-1:1);u+=Math.pow(2,r),i-=d;}return (o?-1:1)*u*Math.pow(2,i-r)},f.write=function(e,t,l,n,r,c){var o,i,u=8*c-r-1,s=(1<<u)-1,a=s>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:c-1,h=n?1:-1,c=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=s):(o=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-o))<1&&(o--,n*=2),2<=(t+=1<=o+a?d/n:d*Math.pow(2,1-a))*n&&(o++,n/=2),s<=o+a?(i=0,o=s):1<=o+a?(i=(t*n-1)*Math.pow(2,r),o+=a):(i=t*Math.pow(2,a-1)*Math.pow(2,r),o=0));8<=r;e[l+f]=255&i,f+=h,i/=256,r-=8);for(o=o<<r|i,u+=r;0<u;e[l+f]=255&o,f+=h,o/=256,u-=8);e[l+f-h]|=128*c;};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754");},{buffer:3,lYpoI2:11}],11:[function(e,h,t){!function(e,t,n,r,o,f,l,c,d){var i,u,s;function a(){}(e=h.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,s="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:s?(i=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<i.length&&i.shift()());},true),function(e){i.push(e),window.postMessage("process-tick","*");}):function(e){setTimeout(e,0);}),e.title="browser",e.browser=true,e.env={},e.argv=[],e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return "/"},e.chdir=function(e){throw new Error("process.chdir is not supported")};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process");},{buffer:3,lYpoI2:11}]},{},[1])(1)}); 
} (object_hash));

var object_hashExports = object_hash.exports;
const objectHash = /*@__PURE__*/getDefaultExportFromCjs(object_hashExports);

const THREE$2 = await importShared('three');


function _toPrimitive(input, hint) {
    if (typeof input !== 'object' || input === null) return input
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint);
        if (typeof res !== 'object') return res
        throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (String )(input)
}

function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, 'string');
    return typeof key === 'symbol' ? key : String(key)
}

function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols);
    }
    return keys
}
function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), true).forEach(function (key) {
                  _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
    }
    return target
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key];
    }
    return target
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {}
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
            target[key] = source[key];
        }
    }
    return target
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
    if (null != _i) {
        var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = true,
            _d = false;
        try {
            if (((_x = (_i = _i.call(arr)).next), 0 === i)) ; else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
(_d = true), (_e = err);
        } finally {
            try {
                if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return
            } finally {
                if (_d) throw _e
            }
        }
        return _arr
    }
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
}

function _nonIterableRest() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, 'prototype', {
        writable: false,
    });
    return Constructor
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o
          };
    return _setPrototypeOf(o, p)
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true,
        },
    });
    Object.defineProperty(subClass, 'prototype', {
        writable: false,
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o)
          };
    return _getPrototypeOf(o)
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true
    } catch (e) {
        return false
    }
}

function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
        return call
    } else if (call !== void 0) {
        throw new TypeError('Derived constructors may only return object or undefined')
    }
    return _assertThisInitialized(self)
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result)
    }
}

// Map of all CSM keywords
var keywordMap = {
    // PBR
    diffuse: 'csm_DiffuseColor',
    // Color + alpha
    normal: 'csm_Normal',
    // Normal
    roughness: 'csm_Roughness',
    // Roughness
    metalness: 'csm_Metalness',
    // Metalness
    emissive: 'csm_Emissive',
    // Emissive
    ao: 'csm_AO',
    // AO
    bump: 'csm_Bump',
    // Bump
    clearcoat: 'csm_Clearcoat',
    // Clearcoat factor
    clearcoatRoughness: 'csm_ClearcoatRoughness',
    // Clearcoat roughness
    clearcoatNormal: 'csm_ClearcoatNormal',
    // Clearcoat normals

    // Extras
    pointSize: 'csm_PointSize',
    fragColor: 'csm_FragColor',
    depthAlpha: 'csm_DepthAlpha',
    // Depth

    // Vert
    position: 'csm_Position',
    positionRaw: 'csm_PositionRaw',
};

var _defaultAvailabilityM;

// Map of CSM keywords to the materials they are available in
// Some keywords are only available in certain materials
var defaultAvailabilityMap =
    ((_defaultAvailabilityM = {}),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.position), '*'),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.positionRaw), '*'),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.normal), '*'),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.pointSize), ['PointsMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.diffuse), '*'),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.fragColor), '*'),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.emissive), ['MeshStandardMaterial', 'MeshPhysicalMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.roughness), ['MeshStandardMaterial', 'MeshPhysicalMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.metalness), ['MeshStandardMaterial', 'MeshPhysicalMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.ao), [
        'MeshStandardMaterial',
        'MeshPhysicalMaterial',
        'MeshBasicMaterial',
        'MeshLambertMaterial',
        'MeshPhongMaterial',
        'MeshToonMaterial',
    ]),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.bump), [
        'MeshLambertMaterial',
        'MeshMatcapMaterial',
        'MeshNormalMaterial',
        'MeshPhongMaterial',
        'MeshPhysicalMaterial',
        'MeshStandardMaterial',
        'MeshToonMaterial',
        'ShadowMaterial',
    ]),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.depthAlpha), ['MeshDepthMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.clearcoat), ['MeshPhysicalMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.clearcoatRoughness), ['MeshPhysicalMaterial']),
    _defineProperty(_defaultAvailabilityM, ''.concat(keywordMap.clearcoatNormal), ['MeshPhysicalMaterial']),
    _defaultAvailabilityM);

// Map of shader includes to be expanded
// Some substitutions require 2 replacements within
// one include, which is not possible without expanding the includes.
var expansionMaps = {
    '#include <lights_physical_fragment>': THREE$2.ShaderChunk.lights_physical_fragment,
};

var _defaultPatchMap, _shaderMaterial_Patch;

// Map of CSM keywords to their substitutions
var defaultPatchMap =
    ((_defaultPatchMap = {}),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.normal), {
        '#include <beginnormal_vertex>': '\n    vec3 objectNormal = '.concat(
            keywordMap.normal,
            ';\n    #ifdef USE_TANGENT\n\t    vec3 objectTangent = vec3( tangent.xyz );\n    #endif\n    ',
        ),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.position), {
        '#include <begin_vertex>': '\n    vec3 transformed = '.concat(keywordMap.position, ';\n  '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.positionRaw), {
        '#include <begin_vertex>': '\n    vec4 csm_internal_positionUnprojected = '.concat(
            keywordMap.positionRaw,
            ';\n    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;\n    #ifdef USE_INSTANCING\n      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;\n    #endif\n    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;\n    vec3 transformed = csm_internal_positionUnprojected.xyz;\n  ',
        ),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.pointSize), {
        'gl_PointSize = size;': '\n    gl_PointSize = '.concat(keywordMap.pointSize, ';\n    '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.diffuse), {
        '#include <color_fragment>': '\n    #include <color_fragment>\n    diffuseColor = '.concat(keywordMap.diffuse, ';\n  '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.fragColor), {
        '#include <dithering_fragment>': '\n    #include <dithering_fragment>\n    gl_FragColor  = '.concat(keywordMap.fragColor, ';\n  '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.emissive), {
        'vec3 totalEmissiveRadiance = emissive;': '\n    vec3 totalEmissiveRadiance = '.concat(keywordMap.emissive, ';\n    '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.roughness), {
        '#include <roughnessmap_fragment>': '\n    #include <roughnessmap_fragment>\n    roughnessFactor = '.concat(keywordMap.roughness, ';\n    '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.metalness), {
        '#include <metalnessmap_fragment>': '\n    #include <metalnessmap_fragment>\n    metalnessFactor = '.concat(keywordMap.metalness, ';\n    '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.ao), {
        '#include <aomap_fragment>': '\n    #include <aomap_fragment>\n    reflectedLight.indirectDiffuse *= 1. - '.concat(keywordMap.ao, ';\n    '),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.bump), {
        '#include <normal_fragment_maps>': '\n    #include <normal_fragment_maps>\n\n    vec3 csm_internal_orthogonal = '
            .concat(keywordMap.bump, ' - (dot(')
            .concat(
                keywordMap.bump,
                ', normal) * normal);\n    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;\n    normal = normalize(normal - csm_internal_projectedbump);\n    ',
            ),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.depthAlpha), {
        'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );': '\n      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * '.concat(
            keywordMap.depthAlpha,
            ' );\n    ',
        ),
        'gl_FragColor = packDepthToRGBA( fragCoordZ );': '\n      gl_FragColor = packDepthToRGBA( fragCoordZ );\n      gl_FragColor.a *= '.concat(
            keywordMap.depthAlpha,
            ';\n    ',
        ),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.clearcoat), {
        'material.clearcoat = clearcoat;': 'material.clearcoat = '.concat(keywordMap.clearcoat, ';'),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.clearcoatRoughness), {
        'material.clearcoatRoughness = clearcoatRoughness;': 'material.clearcoatRoughness = '.concat(keywordMap.clearcoatRoughness, ';'),
    }),
    _defineProperty(_defaultPatchMap, ''.concat(keywordMap.clearcoatNormal), {
        '#include <clearcoat_normal_fragment_begin>':
            '\n      vec3 csm_coat_internal_orthogonal = csm_ClearcoatNormal - (dot(csm_ClearcoatNormal, nonPerturbedNormal) * nonPerturbedNormal);\n      vec3 csm_coat_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_coat_internal_orthogonal;\n      vec3 clearcoatNormal = normalize(nonPerturbedNormal - csm_coat_internal_projectedbump);\n    ',
    }),
    _defaultPatchMap);
var shaderMaterial_PatchMap =
    ((_shaderMaterial_Patch = {}),
    _defineProperty(_shaderMaterial_Patch, ''.concat(keywordMap.position), {
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );': '\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( '.concat(
            keywordMap.position,
            ', 1.0 );\n  ',
        ),
    }),
    _defineProperty(_shaderMaterial_Patch, ''.concat(keywordMap.positionRaw), {
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );': '\n    gl_Position = '.concat(keywordMap.position, ';\n  '),
    }),
    _defineProperty(_shaderMaterial_Patch, ''.concat(keywordMap.diffuse), {
        'gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );': '\n    gl_FragColor = '.concat(keywordMap.diffuse, ';\n  '),
    }),
    _defineProperty(_shaderMaterial_Patch, ''.concat(keywordMap.fragColor), {
        'gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );': '\n    gl_FragColor = '.concat(keywordMap.fragColor, ';\n  '),
    }),
    _shaderMaterial_Patch);

// Map of props to their keywords
// this is because Three only injects some defines
// if certain properties are set in the material options.
// We need to enforce these props on the material. For example
// the user uses csm_Clearcoat but does not set clearcoat on the material.
var requiredPropsMap = {
    clearcoat: [keywordMap.clearcoat, keywordMap.clearcoatNormal, keywordMap.clearcoatRoughness],
};

var defaultCsmDefinitions =
    /* glsl */ '\n    \n#ifdef IS_VERTEX\n    vec3 csm_Position;\n    vec4 csm_PositionRaw;\n    vec3 csm_Normal;\n\n    // csm_PointSize\n    #ifdef IS_POINTSMATERIAL\n        float csm_PointSize;\n    #endif\n#else\n    vec4 csm_DiffuseColor;\n    vec4 csm_FragColor;\n\n    // csm_Emissive, csm_Roughness, csm_Metalness\n    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL\n        vec3 csm_Emissive;\n        float csm_Roughness;\n        float csm_Metalness;\n        \n        #if defined IS_MESHPHYSICALMATERIAL\n            float csm_Clearcoat;\n            float csm_ClearcoatRoughness;\n            vec3 csm_ClearcoatNormal;\n        #endif\n    #endif\n\n    // csm_AO\n    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL\n        float csm_AO;\n    #endif\n\n    // csm_Bump\n    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL \n        vec3 csm_Bump;\n    #endif\n\n    float csm_DepthAlpha;\n#endif\n';
var defaultCsmMainDefinitions =
    /* glsl */ '\n\n#ifdef IS_VERTEX\n    // csm_Position & csm_PositionRaw\n    #ifdef IS_UNKNOWN\n        csm_Position = vec3(0.0);\n        csm_PositionRaw = vec4(0.0);\n        csm_Normal = vec3(0.0);\n    #else\n        csm_Position = position;\n        csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n        csm_Normal = normal;\n    #endif\n\n    // csm_PointSize\n    #ifdef IS_POINTSMATERIAL\n        csm_PointSize = size;\n    #endif\n#else\n    // csm_DiffuseColor & csm_FragColor\n    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL\n        csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);\n        csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n    #else\n        #ifdef USE_MAP\n            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);\n\n            #ifdef DECODE_VIDEO_TEXTURE\n            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)\n            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);\n            #endif\n\n            csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;\n            csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;\n        #else\n            csm_DiffuseColor = vec4(diffuse, opacity);\n            csm_FragColor = vec4(diffuse, opacity);\n        #endif\n    #endif\n\n    // csm_Emissive, csm_Roughness, csm_Metalness\n    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL\n        csm_Emissive = emissive;\n        csm_Roughness = roughness;\n        csm_Metalness = metalness;\n\n        #if defined IS_MESHPHYSICALMATERIAL\n            #ifdef USE_CLEARCOAT\n                csm_Clearcoat = clearcoat;\n                csm_ClearcoatRoughness = clearcoatRoughness;\n            #else\n                csm_Clearcoat = 0.0;\n                csm_ClearcoatRoughness = 0.0;\n            #endif\n        #endif\n    #endif\n\n    // csm_AO\n    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL\n        csm_AO = 0.0;\n    #endif\n\n    // csm_Bump\n    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL \n        csm_Bump = vec3(0.0);\n    #endif\n\n    csm_DepthAlpha = 1.0;\n#endif\n';
var defaultVertDefinitions = /* glsl */ '\n    varying mat4 csm_internal_vModelViewMatrix;\n';
var defaultVertMain = /* glsl */ '\n    csm_internal_vModelViewMatrix = modelViewMatrix;\n';
var defaultFragDefinitions = /* glsl */ '\n    varying mat4 csm_internal_vModelViewMatrix;\n';
var defaultFragMain = /* glsl */ '\n    \n';

var _excluded = ['baseMaterial', 'fragmentShader', 'vertexShader', 'uniforms', 'patchMap', 'cacheKey', 'silent'];
var hash = function hash(obj) {
    return objectHash(obj, {
        excludeValues: true,
    })
};
var replaceAll = function replaceAll(str, find, rep) {
    return str.split(find).join(rep)
};
var escapeRegExpMatch = function escapeRegExpMatch(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};
var isExactMatch = function isExactMatch(str, match) {
    return new RegExp('\\b'.concat(escapeRegExpMatch(match), '\\b')).test(str)
};

// Hacky, yikes!
function isConstructor(f) {
    try {
        // @ts-ignore
        new f();
    } catch (err) {
        if (err.message.indexOf('is not a constructor') >= 0) {
            return false
        }
    }
    return true
}
function copyObject(target, source) {
    Object.assign(target, source);
    var proto = Object.getPrototypeOf(source);
    Object.entries(Object.getOwnPropertyDescriptors(proto))
        .filter(function (e) {
            var isGetter = typeof e[1].get === 'function';
            var isSetter = typeof e[1].set === 'function';
            var isFunction = typeof e[1].value === 'function';
            var isConstructor = e[0] === 'constructor';
            return (isGetter || isSetter || isFunction) && !isConstructor
        })
        .forEach(function (val) {
            // If function exists on target, rename it with "base_" prefix
            if (typeof target[val[0]] === 'function') {
                return
            }
            Object.defineProperty(target, val[0], val[1]);
        });
}
function isFunctionEmpty(fn) {
    var fnString = fn.toString().trim();
    var fnBody = fnString.substring(fnString.indexOf('{') + 1, fnString.lastIndexOf('}'));
    return fnBody.trim().length === 0
}
function stripSpaces(str) {
    return str ? str.replace(/\s/g, '') : undefined
}
function stripComments(str) {
    return str.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm, '')
}
function replaceLastOccurrence(str, find, rep) {
    var index = str.lastIndexOf(find);
    if (index === -1) {
        return str
    }
    return str.substring(0, index) + rep + str.substring(index + find.length)
}
var CustomShaderMaterial = /*#__PURE__*/ (function (_THREE$Material) {
    _inherits(CustomShaderMaterial, _THREE$Material);
    var _super = _createSuper(CustomShaderMaterial);
    function CustomShaderMaterial(_ref) {
        var _this;
        var baseMaterial = _ref.baseMaterial,
            fragmentShader = _ref.fragmentShader,
            vertexShader = _ref.vertexShader,
            uniforms = _ref.uniforms,
            patchMap = _ref.patchMap,
            cacheKey = _ref.cacheKey,
            silent = _ref.silent,
            opts = _objectWithoutProperties(_ref, _excluded);
        _classCallCheck(this, CustomShaderMaterial);
        var base;
        if (isConstructor(baseMaterial)) {
            // If base material is a constructor, instantiate it
            base = new baseMaterial(opts);
        } else {
            // Else, copy options onto base material and use the already create
            // instance as the base material
            base = baseMaterial;
            Object.assign(base, opts);
        }

        // Supporting RawShaderMaterial is redundant as there is nothing
        // to patch, extend or override
        if (base.type === 'RawShaderMaterial') {
            throw new Error('CustomShaderMaterial does not support RawShaderMaterial')
        }

        // Copy all properties from base material onto this material
        // Rename any functions that already exist on this material with "base_" prefix
        _this = _super.call(this);
        copyObject(_assertThisInitialized(_this), base);

        // Set up private internals
        _this.__csm = {
            patchMap: patchMap || {},
            fragmentShader: fragmentShader || '',
            vertexShader: vertexShader || '',
            cacheKey: cacheKey,
            baseMaterial: baseMaterial,
            instanceID: THREE$2.MathUtils.generateUUID(),
            type: base.type,
            isAlreadyExtended: !isFunctionEmpty(base.onBeforeCompile),
            cacheHash: '',
            silent: silent,
        };
        _this.uniforms = _objectSpread2(_objectSpread2({}, _this.uniforms || {}), uniforms || {});

        // Scoped to avoid name collisions
        {
            // Generate material and assign cache key
            var _this$__csm = _this.__csm,
                _fragmentShader = _this$__csm.fragmentShader,
                _vertexShader = _this$__csm.vertexShader;
            var _uniforms = _this.uniforms;
            _this.__csm.cacheHash = _this._getCacheHash();
            _this._generateMaterial(_fragmentShader, _vertexShader, _uniforms);
        }
        return _this
    }

    /**
     *
     * Update the material with new arguments.
     * TODO: Fix memory leak.
     *
     * @param opts Options to update the material with.
     *
     * @deprecated This method leaks memory.
     */
    _createClass(CustomShaderMaterial, [
        {
            key: 'update',
            value: function update() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                // Basically just re-run the last bit of the constructor
                this.uniforms = opts.uniforms || this.uniforms;
                Object.assign(this.__csm, opts);
                var _this$__csm2 = this.__csm,
                    fragmentShader = _this$__csm2.fragmentShader,
                    vertexShader = _this$__csm2.vertexShader;
                var uniforms = this.uniforms;
                var newHash = this._getCacheHash();
                this.__csm.cacheHash = newHash;
                this._generateMaterial(fragmentShader, vertexShader, uniforms);
            },

            /**
             * Returns a new instance of this material with the same options.
             *
             * @returns A clone of this material.
             */
        },
        {
            key: 'clone',
            value: function clone() {
                var opts = {
                    baseMaterial: this.__csm.baseMaterial,
                    fragmentShader: this.__csm.fragmentShader,
                    vertexShader: this.__csm.vertexShader,
                    uniforms: this.uniforms,
                    silent: this.__csm.silent,
                    patchMap: this.__csm.patchMap,
                    cacheKey: this.__csm.cacheKey,
                };
                var clone = new this.constructor(opts);
                Object.assign(this, clone);
                return clone
            },

            /**
             * Internally calculates the cache key for this instance of CSM.
             * If no specific CSM inputs are provided, the cache key is the same as the default
             * cache key, i.e. `baseMaterial.onBeforeCompile.toString()`. Not meant to be called directly.
             *
             * This method is quite expensive owing to the hashing function and string manip.
             *
             * TODO:
             * - Optimize string manip.
             * - Find faster hash function
             *
             * @returns {string} A cache key for this instance of CSM.
             */
        },
        {
            key: '_getCacheHash',
            value: function _getCacheHash() {
                // The cache key is a hash of the fragment shader, vertex shader, and uniforms
                var _this$__csm3 = this.__csm,
                    fragmentShader = _this$__csm3.fragmentShader,
                    vertexShader = _this$__csm3.vertexShader;
                var uniforms = this.uniforms;

                // We strip spaces because whitespace is not significant in GLSL
                // and we want `blah` and `     blah ` to be the same.
                var hashInp = [stripSpaces(fragmentShader), stripSpaces(vertexShader), uniforms].filter(function (inp) {
                    return inp !== undefined
                });

                // If CSM inputs are empty, use default cache key
                // This means that `<baseMaterial />` and <CSM baseMaterial={baseMaterial} />`
                // are the same shader program, i.e they share the same cache key
                return hashInp.length > 0 ? hash(hashInp) : this.customProgramCacheKey()
            },

            /**
             * Does the internal shader generation. Not meant to be called directly.
             *
             * @param fragmentShader
             * @param vertexShader
             * @param uniforms
             */
        },
        {
            key: '_generateMaterial',
            value: function _generateMaterial(fragmentShader, vertexShader, uniforms) {
                var _this2 = this;
                // Get parsed shaders. A Parsed shader is a shader with
                // it's `#define`s, function and var definitions and main separated.
                this.uniforms = uniforms || {};

                // Set material cache key
                this.customProgramCacheKey = function () {
                    return _this2.__csm.cacheHash
                };

                // Set onBeforeCompile
                var customOnBeforeCompile = function customOnBeforeCompile(shader) {
                    try {
                        var materialDefine = _this2._getMaterialDefine();

                        // If Fragment shader is not empty, patch it
                        if (fragmentShader) {
                            var patchedFragmentShader = _this2._patchShader(stripComments(fragmentShader), shader.fragmentShader, true);
                            shader.fragmentShader = materialDefine + patchedFragmentShader;
                        }

                        // If Vertex shader is not empty, patch it
                        if (vertexShader) {
                            var patchedVertexShader = _this2._patchShader(stripComments(vertexShader), shader.vertexShader);
                            shader.vertexShader = '#define IS_VERTEX;\n' + patchedVertexShader;
                            shader.vertexShader = materialDefine + shader.vertexShader;
                        }

                        // Patch uniforms
                        shader.uniforms = _objectSpread2(_objectSpread2({}, shader.uniforms), _this2.uniforms);
                        _this2.uniforms = shader.uniforms;
                    } catch (error) {
                        console.error(error);
                    }
                };
                if (this.__csm.isAlreadyExtended) {
                    // If the material has already been extending via onBeforeCompile has a
                    // then chain the new onBeforeCompile after the old one.
                    var prevOnBeforeCompile = this.onBeforeCompile;
                    this.onBeforeCompile = function (shader, renderer) {
                        prevOnBeforeCompile(shader, renderer);
                        customOnBeforeCompile(shader);
                    };
                } else {
                    // Else just set the onBeforeCompile
                    this.onBeforeCompile = customOnBeforeCompile;
                }
                this.needsUpdate = true;
            },

            /**
             * Patches input shader with custom shader. Not meant to be called directly.
             * @param customShader
             * @param shader
             * @param isFrag
             * @returns
             */
        },
        {
            key: '_patchShader',
            value: function _patchShader(customShader, currentShader, isFrag) {
                var _this3 = this;
                var patchedShader = currentShader;

                // Get the patch map, its a combination of the default patch map and the
                // user defined patch map. The user defined map takes precedence.
                var patchMap = _objectSpread2(_objectSpread2({}, this._getPatchMapForMaterial()), this.__csm.patchMap);

                // Enforce requiredPropsMap
                Object.entries(requiredPropsMap).forEach(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        prop = _ref3[0],
                        keywords = _ref3[1];
                    var key = keywords.find(function (keyword) {
                        return isExactMatch(customShader, keyword)
                    });
                    if (key) {
                        // @ts-ignore
                        if (!_this3[prop]) {
                            throw new Error('CSM: Property "'.concat(prop, '" is required to use output "').concat(key, '". Shader cannot compile.'))
                        }
                    }
                });

                // Apply expansion maps as some substitutions require 2 replacements within
                // one include, which is not possible without expanding the includes.
                Object.entries(expansionMaps).forEach(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                        key = _ref5[0],
                        value = _ref5[1];
                    patchedShader = replaceAll(patchedShader, key, value);
                });

                // Replace all entries in the patch map
                Object.keys(patchMap).forEach(function (name) {
                    Object.keys(patchMap[name]).forEach(function (key) {
                        var availableIn = defaultAvailabilityMap[name];
                        var type = _this3.__csm.type;

                        // Only inject keywords that appear in the shader.
                        // If the keyword is '*', then inject the patch regardless.
                        if (name === '*' || isExactMatch(customShader, name)) {
                            if (!availableIn || (Array.isArray(availableIn) && availableIn.includes(type)) || availableIn === '*') {
                                patchedShader = replaceAll(patchedShader, key, patchMap[name][key]);
                            } else {
                                throw new Error('CSM: '.concat(name, ' is not available in ').concat(type, '. Shader cannot compile.'))
                            }
                        }
                    });
                });

                // Rename main in customShader to csm__main
                var csmMainFunctionName = 'csm_main_' + this.__csm.instanceID.replace(/-/g, '_');
                var renamedCustomShader = customShader.replace(/void\s+main\s*\(\s*\)/g, 'void '.concat(csmMainFunctionName, '()'));
                var hasMain = customShader.includes('void main()');
                var isAlreadyExtendedByCSM = patchedShader.includes('// #_CSM_#');
                if (hasMain) {
                    if (isAlreadyExtendedByCSM && this.__csm.isAlreadyExtended) {
                        // Inject defaults
                        // If the shader has already been extended by CSM
                        // then we don't need to inject the defaults again.
                        patchedShader = patchedShader.replace(
                            'void main() {',
                            '\n            '.concat(renamedCustomShader, '\n            \n            void main() {\n          '),
                        );

                        // Find the end of the previously injected main call
                        // and add the new main call after it.
                        patchedShader = replaceLastOccurrence(
                            patchedShader,
                            '// #_CSM_#',
                            '\n            '.concat(csmMainFunctionName, '();\n            // #_CSM_#\n          '),
                        );
                    } else {
                        // If this is the first time the shader is being extended by CSM
                        // Add the default definitions and main call
                        patchedShader = patchedShader.replace(
                            'void main() {',
                            '\n            #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED\n              '
                                .concat(
                                    isFrag ? defaultFragDefinitions : defaultVertDefinitions,
                                    '\n              #define CSM_IS_HEAD_DEFAULTS_DEFINED 1\n            #endif\n    \n            ',
                                )
                                .concat(defaultCsmDefinitions, '\n    \n            ')
                                .concat(
                                    renamedCustomShader,
                                    '\n            \n            void main() {\n              #ifndef CSM_IS_DEFAULTS_DEFINED\n                ',
                                )
                                .concat(
                                    defaultCsmMainDefinitions,
                                    '\n                #define CSM_IS_DEFAULTS_DEFINED 1\n              #endif\n              \n              #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED\n                ',
                                )
                                .concat(
                                    isFrag ? defaultFragMain : defaultVertMain,
                                    '\n                #define CSM_IS_MAIN_DEFAULTS_DEFINED 1\n              #endif\n  \n              ',
                                )
                                .concat(csmMainFunctionName, '();\n              // #_CSM_#\n          '),
                        );
                    }
                }
                return patchedShader
            },

            /**
             * Gets the material type as a string. Not meant to be called directly.
             * @returns
             */
        },
        {
            key: '_getMaterialDefine',
            value: function _getMaterialDefine() {
                var type = this.__csm.type;
                return type ? '#define IS_'.concat(type.toUpperCase(), ';\n') : '#define IS_UNKNOWN;\n'
            },

            /**
             * Gets the right patch map for the material. Not meant to be called directly.
             * @returns
             */
        },
        {
            key: '_getPatchMapForMaterial',
            value: function _getPatchMapForMaterial() {
                switch (this.__csm.type) {
                    case 'ShaderMaterial':
                        return shaderMaterial_PatchMap
                    default:
                        return defaultPatchMap
                }
            },
        },
    ]);
    return CustomShaderMaterial
})(THREE$2.Material);

var perlin_default="vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }\nvec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\nvec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n\nfloat pnoise(vec3 P) {\n  vec3 Pi0 = floor(P);        \n  vec3 Pi1 = Pi0 + vec3(1.0); \n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P);        \n  vec3 Pf1 = Pf0 - vec3(1.0); \n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(\n      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(\n      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),\n                 fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}";

var voronoise_default="const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);\nconst vec2 mys = vec2(1e4, 1e6);\n\nvec2 rhash(vec2 uv) {\n  uv *= myt;\n  uv *= mys;\n  return fract(fract(uv / mys) * uv);\n}\n\nvec3 hash(vec3 p) {\n  return fract(\n      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),\n               dot(p, vec3(113.0, 1.0, 57.0)))) *\n      43758.5453);\n}\n\nfloat mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec4 perm(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }\n\nfloat floatHash(vec3 p) {\n  vec3 a = floor(p);\n  vec3 d = p - a;\n  d = d * d * (3.0 - 2.0 * d);\n\n  vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n  vec4 k1 = perm(b.xyxy);\n  vec4 k2 = perm(k1.xyxy + b.zzww);\n\n  vec4 c = k2 + a.zzzz;\n  vec4 k3 = perm(c);\n  vec4 k4 = perm(c + 1.0);\n\n  vec4 o1 = fract(k3 * (1.0 / 41.0));\n  vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n  vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n  vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n  return o4.y * d.y + o4.x * (1.0 - d.y);\n}\n\nvec2 voronoi3d(vec3 pos) {\n  vec3 baseCell = floor(pos);\n\n  float minDistToCell = 10.0;\n  vec3 closestCell;\n  for (int x = -1; x <= 1; x++) {\n    for (int y = -1; y <= 1; y++) {\n      for (int z = -1; z <= 1; z++) {\n        vec3 cell = baseCell + vec3(float(x), float(y), float(z));\n        vec3 cellPosition = cell + hash(cell);\n        vec3 toCell = cellPosition - pos;\n        float distToCell = length(toCell);\n        if (distToCell < minDistToCell) {\n          minDistToCell = distToCell;\n          closestCell = cell;\n        }\n      }\n    }\n  }\n\n  float random = floatHash(closestCell);\n  return vec2(minDistToCell, random);\n}";

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$5,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const THREE$1 = await importShared('three');
const {watchEffect} = await importShared('vue');
const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "index",
  props: {
    color: { default: "#ff00fc" },
    metalness: { default: 1 },
    roughness: { default: 1 },
    clearcoat: { default: 1 },
    clearcoatRoughness: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const materialProps = {
      baseMaterial: THREE$1.MeshPhysicalMaterial,
      metalness: props.metalness,
      roughness: props.roughness,
      clearcoat: props.clearcoat,
      clearcoatRoughness: props.clearcoatRoughness,
      color: props.color,
      vertexShader: `
			varying vec3 csm_vPosition;
			varying vec3 csm_vWorldNormal;
			varying vec3 csm_vWorldViewDirection;
			varying vec4 csm_vGlPosition;

			void main() {
					csm_vWorldNormal = normalize((modelMatrix * vec4(normal.xyz, 0.0)).xyz);
					csm_vWorldViewDirection = normalize(cameraPosition - (modelMatrix * vec4(position.xyz, 0.0)).xyz) ;

					csm_vGlPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					csm_vPosition = position;
			}`,
      fragmentShader: `
			${voronoise_default}
      ${perlin_default}
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
		`
    };
    const material = new CustomShaderMaterial(materialProps);
    watchEffect(() => {
      material.color.setStyle(props.color);
      material.metalness = props.metalness;
      material.roughness = props.roughness;
      material.clearcoat = props.clearcoat;
      material.clearcoatRoughness = props.clearcoatRoughness;
    });
    return (_ctx, _cache) => {
      return _openBlock$5(), _createElementBlock$2("primitive", { object: _unref$2(material) }, null, 8, _hoisted_1$2);
    };
  }
});

const {watch: watch$3} = await importShared('vue');


// export async function useGLTF (path) {
// 	const name = path.split('/').pop()
// 	Resource.getResource('GLTFLoader', path, name)
// 	const modelR = Resource.getReactiveItem(name)

// 	return new Promise((resolve, reject) => {
// 		// 1️⃣ 先检查是否已有加载结果
// 		const existingModel = modelR()
// 		if (existingModel) {
// 			resolve(existingModel)
// 			return
// 		}
// 		const stopWatch = watch(
// 			() => modelR(),
// 			(model) => {
// 				if (model) {
// 					stopWatch()
// 					resolve(model)
// 				} else {
// 					reject(new Error('useGLTF 加载失败，未得到模型'))
// 				}
// 			},
// 			{ immediate: false } // 不要立即触发
// 		)
// 		// ✅ 也可以设置一个超时（可选）
// 		setTimeout(() => {
// 			if (!modelR()) {
// 				stopWatch()
// 				reject(new Error('useGLTF 加载超时，未得到模型'))
// 			}
// 		}, 10000)
// 	})
// }

async function useTexture$1 (path) {
	const name = path.split('/').pop();
	instance.getResource('TextureLoader', path, name);
	const modelR = instance.getReactiveItem(name);

	return new Promise((resolve, reject) => {
		// 1️⃣ 先检查是否已有加载结果
		const existingModel = modelR();
		if (existingModel) {
			resolve(existingModel);
			return
		}
		const stopWatch = watch$3(
			() => modelR(),
			(model) => {
				if (model) {
					stopWatch();
					resolve(model);
				} else {
					reject(new Error('useTexture 加载失败，未得到模型'));
				}
			}
		);
		// ✅ 也可以设置一个超时（可选）
		// setTimeout(() => {
		// 	if (!modelR()) {
		// 		stopWatch()
		// 		reject(new Error('useTexture 加载超时，未得到模型'))
		// 	}
		// }, 10000)
	})
}

function traverseObjects(object) {
  const data = { nodes: {}, materials: {} };
  if (object) {
    object.traverse((obj) => {
      if (obj.name) {
        data.nodes[obj.name] = obj;
      }
      if (obj.material && !data.materials[obj.material.name]) {
        data.materials[obj.material.name] = obj.material;
      }
    });
  }
  return data;
}
async function useLoader(Loader, url, extensions, onProgress, cb) {
  const proto = new Loader();
  if (cb) {
    cb(proto);
  }
  if (extensions) {
    extensions(proto);
  }
  return await new Promise((resolve, reject) => {
    proto.load(
      url,
      (result) => {
        const data = result;
        if (data.scene) {
          Object.assign(data, traverseObjects(data.scene));
        }
        resolve(data);
      },
      onProgress,
      (error) => {
        reject(error);
      }
    );
  });
}

const {TextureLoader} = await importShared('three');

const isArray = Array.isArray;
async function useTexture(paths, manager) {
  const textureLoader = new TextureLoader(manager);
  const loadTexture = (url) => new Promise((resolve, reject) => {
    textureLoader.load(
      url,
      (texture) => resolve(texture),
      () => null,
      () => {
        reject(new Error("[useTextures] - Failed to load texture"));
      }
    );
  });
  if (isArray(paths)) {
    const textures = await Promise.all(paths.map((path) => loadTexture(path)));
    if (paths.length > 1) {
      return textures;
    } else {
      return textures[0];
    }
  } else {
    const {
      map,
      displacementMap,
      normalMap,
      roughnessMap,
      metalnessMap,
      aoMap,
      alphaMap,
      matcap
    } = paths;
    return {
      map: map ? await loadTexture(map) : null,
      displacementMap: displacementMap ? await loadTexture(displacementMap) : null,
      normalMap: normalMap ? await loadTexture(normalMap) : null,
      roughnessMap: roughnessMap ? await loadTexture(roughnessMap) : null,
      metalnessMap: metalnessMap ? await loadTexture(metalnessMap) : null,
      aoMap: aoMap ? await loadTexture(aoMap) : null,
      alphaMap: alphaMap ? await loadTexture(alphaMap) : null,
      matcap: matcap ? await loadTexture(matcap) : null
    };
  }
}

const {FrontSide,BackSide,DoubleSide,NormalBlending,AdditiveBlending,SubtractiveBlending,MultiplyBlending,NoBlending} = await importShared('three');

const sideOptions = [
  { label: "FrontSide", value: FrontSide },
  { label: "BackSide", value: BackSide },
  { label: "DoubleSide", value: DoubleSide }
];
const blendingOptions = [
  { label: "NoBlending", value: NoBlending },
  { label: "NormalBlending", value: NormalBlending },
  { label: "AdditiveBlending", value: AdditiveBlending },
  { label: "SubtractiveBlending", value: SubtractiveBlending },
  { label: "MultiplyBlending", value: MultiplyBlending }
];
const commonMaterialProps = {
  color: "#ffffff",
  map: null,
  wireframe: false,
  opacity: 1,
  transparent: false,
  side: FrontSide,
  alphaTest: 0,
  blending: NormalBlending,
  depthTest: true,
  depthWrite: true
};
const lambertExtraProps = {
  emissive: "#000000",
  emissiveIntensity: 1,
  emissiveMap: null,
  reflectivity: 1,
  refractionRatio: 0.98
};
const phongExtraProps = {
  emissive: "#000000",
  emissiveIntensity: 1,
  specular: "#111111",
  shininess: 30,
  specularMap: null,
  emissiveMap: null,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: { x: 1, y: 1 },
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0
};
const standardExtraProps = {
  emissive: "#000000",
  emissiveIntensity: 1,
  metalness: 0.5,
  roughness: 0.5,
  metalnessMap: null,
  roughnessMap: null,
  normalMap: null,
  normalScale: { x: 1, y: 1 },
  bumpMap: null,
  bumpScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  aoMap: null,
  aoMapIntensity: 1,
  envMap: null,
  envMapIntensity: 1
};
const physicalExtraProps = {
  ...standardExtraProps,
  // 继承 standard 的属性
  clearcoat: 0.2,
  clearcoatRoughness: 0.1,
  reflectivity: 0.5,
  transmission: 0,
  // 玻璃透明度
  ior: 1.5,
  // 折射率
  thickness: 0.01,
  // 厚度
  attenuationColor: "#ffffff",
  attenuationDistance: 0,
  specularIntensity: 1,
  specularColor: "#ffffff",
  sheen: 0,
  sheenColor: "#ffffff",
  clearcoatNormalMap: null,
  clearcoatNormalScale: { x: 1, y: 1 }
};
const toonExtraProps = {
  gradientMap: null,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: { x: 1, y: 1 }
};
const glassExtraProps = {
  metalness: 0.5,
  roughness: 0
};
const transmissionExtraProps = {
  color: "#ffffff",
  roughness: 0,
  reflectivity: 0.5,
  attenuationColor: "#ffffff",
  attenuationDistance: 2,
  chromaticAberration: 0.05,
  anisotropicBlur: 0.1,
  distortion: 0,
  temporalDistortion: 0,
  backside: true,
  thickness: 1,
  backsideThickness: 0.5
};
const clearcoatExtraProps = {
  color: "#ff00fc",
  metalness: 1,
  roughness: 1,
  clearcoat: 1,
  clearcoatRoughness: 0
};
const dissolveEffectProps = {
  color: "#B520A9",
  uEdgeColor: "#4d9bff",
  uEdge: 6,
  uFreq: 0.41,
  uAmp: 20,
  uProgress: -1,
  metalness: 1,
  roughness: 1
};
const materialPresets = {
  MeshBasicMaterial: {
    component: "TresMeshBasicMaterial",
    props: {
      ...commonMaterialProps
      // Basic 无额外字段
    }
  },
  MeshLambertMaterial: {
    component: "TresMeshLambertMaterial",
    props: { ...commonMaterialProps, ...lambertExtraProps }
  },
  MeshPhongMaterial: {
    component: "TresMeshPhongMaterial",
    props: { ...commonMaterialProps, ...phongExtraProps }
  },
  MeshStandardMaterial: {
    component: "TresMeshStandardMaterial",
    props: { ...commonMaterialProps, ...standardExtraProps }
  },
  MeshPhysicalMaterial: {
    component: "TresMeshPhysicalMaterial",
    props: { ...commonMaterialProps, ...physicalExtraProps }
  },
  MeshToonMaterial: {
    component: "TresMeshToonMaterial",
    props: { ...commonMaterialProps, ...toonExtraProps }
  },
  MeshGlassMaterial: {
    component: async () => {
      const mod = await __vitePreload(() => import('./index.BxB45aCK1767105581793.js').then(n => n.trescientos),true?__vite__mapDeps([0,1,2]):void 0,import.meta.url);
      return mod.MeshGlassMaterial;
    },
    props: {
      ...commonMaterialProps,
      ...glassExtraProps
    }
  },
  TransmissionMaterial: {
    component: async () => {
      const mod = await __vitePreload(() => import('./index.DzgZAn0k1767105581793.js'),true?__vite__mapDeps([3,4,0,1,2,5,6,7,8,9,10,11]):void 0,import.meta.url);
      return mod.TransmissionMaterial;
    },
    props: {
      ...transmissionExtraProps
    }
  },
  // HolographicMaterial: {
  //   component: async () => {
  //     const mod = await import('@tresjs/cientos')
  //     return mod.HolographicMaterial
  //   },
  //   props: {
  //     ...holographicExtraProps
  //   }
  // },
  ClearcoatMaterial: {
    component: async () => {
      const mod = await __vitePreload(() => import('./index.DzgZAn0k1767105581793.js'),true?__vite__mapDeps([3,4,0,1,2,5,6,7,8,9,10,11]):void 0,import.meta.url);
      return mod.ClearcoatMaterial;
    },
    props: {
      ...clearcoatExtraProps
    }
  },
  dissolveEffectMaterial: {
    component: async () => {
      const mod = await __vitePreload(() => import('./index.DjzPpSHo1767105581793.js'),true?__vite__mapDeps([12,13,0,1,2,14,15,16,17,18,19,20,21]):void 0,import.meta.url);
      return mod.dissolveEffectMaterial;
    },
    props: {
      ...dissolveEffectProps
    }
  }
};

const {markRaw} = await importShared('vue');
async function useMaterial(selected) {
  const config = materialPresets[selected];
  let component = config.component;
  if (typeof component === "function") {
    component = markRaw(await component());
  }
  return component;
}
function useProps(selected) {
  const config = materialPresets[selected];
  return config.props;
}

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {resolveDynamicComponent:_resolveDynamicComponent$1,mergeProps:_mergeProps$1,openBlock:_openBlock$4,createBlock:_createBlock$3} = await importShared('vue');

const {ref: ref$1,watch: watch$2} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "index",
  props: {
    type: {},
    materialProps: {}
  },
  setup(__props) {
    const props = __props;
    const component = ref$1(null);
    const matProps = ref$1({});
    const materialRef = ref$1(null);
    let changedMaterial = false;
    watch$2(
      () => props.type,
      async (type) => {
        if (materialRef.value) {
          try {
            materialRef.value.dispose?.();
            console.log("已释放旧材质组件");
          } catch (e) {
            console.warn("释放材质组件失败:", e);
          }
        }
        changedMaterial = false;
        component.value = await useMaterial(type);
        changedMaterial = true;
        matProps.value = {
          ...useProps(type),
          ...props.materialProps
        };
      },
      { immediate: true }
    );
    watch$2(
      () => [props.type, props.materialProps],
      ([newtype, mp], [oldtype]) => {
        if (newtype === oldtype && changedMaterial) {
          matProps.value = mp;
        }
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$4(), _createBlock$3(_resolveDynamicComponent$1(component.value), _mergeProps$1(matProps.value, {
        ref_key: "materialRef",
        ref: materialRef
      }), null, 16);
    };
  }
});

const SHAPE_METADATA = {
  Box: {
    params: [
      { key: "width", label: "width", type: "number", default: 1 },
      { key: "height", label: "height", type: "number", default: 1 },
      { key: "depth", label: "depth", type: "number", default: 1 },
      { key: "widthSegments", label: "widthSegments", type: "number", default: 1, min: 1, max: 6, step: 1 },
      { key: "heightSegments", label: "heightSegments", type: "number", default: 1, min: 1, max: 6, step: 1 },
      { key: "depthSegments", label: "depthSegments", type: "number", default: 1, min: 1, max: 6, step: 1 }
    ]
  },
  Circle: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "segments", label: "segments", type: "number", default: 32, min: 3, max: 64, step: 1 },
      { key: "thetaStart", label: "thetaStart", type: "number", default: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      { key: "thetaLength", label: "thetaLength", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 }
    ]
  },
  Cone: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "height", label: "height", type: "number", default: 2, min: 0 },
      { key: "radialSegments", label: "radialSegments", type: "number", default: 8, min: 3, max: 64, step: 1 },
      { key: "heightSegments", label: "heightSegments", type: "number", default: 1, min: 1, max: 32, step: 1 },
      { key: "openEnded", label: "openEnded", type: "boolean", default: false },
      { key: "thetaStart", label: "thetaStart", type: "number", default: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      { key: "thetaLength", label: "thetaLength", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 }
    ]
  },
  Cylinder: {
    params: [
      { key: "radiusTop", label: "radiusTop", type: "number", default: 1, min: 0 },
      { key: "radiusBottom", label: "radiusBottom", type: "number", default: 1, min: 0 },
      { key: "height", label: "height", type: "number", default: 2, min: 0 },
      { key: "radialSegments", label: "radialSegments", type: "number", default: 8, min: 3, max: 64, step: 1 },
      { key: "heightSegments", label: "heightSegments", type: "number", default: 1, min: 1, max: 32, step: 1 },
      { key: "openEnded", label: "openEnded", type: "boolean", default: false },
      { key: "thetaStart", label: "thetaStart", type: "number", default: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      { key: "thetaLength", label: "thetaLength", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 }
    ]
  },
  Dodecahedron: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "detail", label: "detail", type: "number", default: 0, min: 0, max: 5, step: 1 }
    ]
  },
  Icosahedron: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "detail", label: "detail", type: "number", default: 0, min: 0, max: 5, step: 1 }
    ]
  },
  Octahedron: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "detail", label: "detail", type: "number", default: 0, min: 0, max: 5, step: 1 }
    ]
  },
  Plane: {
    params: [
      { key: "width", label: "width", type: "number", default: 1, min: 0 },
      { key: "height", label: "height", type: "number", default: 1, min: 0 },
      { key: "widthSegments", label: "widthSegments", type: "number", default: 1, min: 1, max: 64, step: 1 },
      { key: "heightSegments", label: "heightSegments", type: "number", default: 1, min: 1, max: 64, step: 1 }
    ]
  },
  Ring: {
    params: [
      { key: "innerRadius", label: "innerRadius", type: "number", default: 0.5, min: 0 },
      { key: "outerRadius", label: "outerRadius", type: "number", default: 1, min: 0 },
      { key: "thetaSegments", label: "thetaSegments", type: "number", default: 8, min: 3, max: 64, step: 1 },
      { key: "phiSegments", label: "phiSegments", type: "number", default: 1, min: 1, max: 16, step: 1 },
      { key: "thetaStart", label: "thetaStart", type: "number", default: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      { key: "thetaLength", label: "thetaLength", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 }
    ]
  },
  RoundedBox: {
    params: [
      { key: "width", label: "width", type: "number", default: 1, min: 0 },
      { key: "height", label: "height", type: "number", default: 1, min: 0 },
      { key: "depth", label: "depth", type: "number", default: 1, min: 0 },
      { key: "segments", label: "segments", type: "number", default: 2, min: 0, max: 8, step: 0.1 },
      { key: "radius", label: "radius", type: "number", default: 0.1, min: 0, max: 1, step: 0.01 }
    ]
  },
  Sphere: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "widthSegments", label: "widthSegments", type: "number", default: 32, min: 3, max: 128, step: 1 },
      { key: "heightSegments", label: "heightSegments", type: "number", default: 16, min: 2, max: 128, step: 1 },
      { key: "phiStart", label: "phiStart", type: "number", default: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      { key: "phiLength", label: "phiLength", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 },
      { key: "thetaStart", label: "thetaStart", type: "number", default: 0, min: 0, max: Math.PI, step: 0.01 },
      { key: "thetaLength", label: "thetaLength", type: "number", default: Math.PI, min: 0.1, max: Math.PI, step: 0.01 }
    ]
  },
  Tetrahedron: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "detail", label: "detail", type: "number", default: 0, min: 0, max: 5, step: 1 }
    ]
  },
  Torus: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "tube", label: "tube", type: "number", default: 0.4, min: 0 },
      { key: "radialSegments", label: "radialSegments", type: "number", default: 8, min: 3, max: 64, step: 1 },
      { key: "tubularSegments", label: "tubularSegments", type: "number", default: 64, min: 3, max: 256, step: 1 },
      { key: "arc", label: "arc", type: "number", default: Math.PI * 2, min: 0.1, max: Math.PI * 2, step: 0.01 }
    ]
  },
  TorusKnot: {
    params: [
      { key: "radius", label: "radius", type: "number", default: 1, min: 0 },
      { key: "tube", label: "tube", type: "number", default: 0.4, min: 0 },
      { key: "tubularSegments", label: "tubularSegments", type: "number", default: 64, min: 3, max: 256, step: 1 },
      { key: "radialSegments", label: "radialSegments", type: "number", default: 8, min: 3, max: 128, step: 1 },
      { key: "p", label: "p", type: "number", default: 2, min: 1, max: 10, step: 0.1 },
      { key: "q", label: "q", type: "number", default: 3, min: 1, max: 10, step: 0.1 }
    ]
  }
};

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$3,createElementBlock:_createElementBlock$1,mergeProps:_mergeProps,createBlock:_createBlock$2,createCommentVNode:_createCommentVNode$1,withCtx:_withCtx$2} = await importShared('vue');

const _hoisted_1$1 = { class: "shape-configurator" };
const {ref,reactive,computed: computed$1,watch: watch$1} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "shapeConfigurator",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const shapeOptions = Object.keys(SHAPE_METADATA).map((k) => ({
      label: k,
      value: k
    }));
    const type = ref(props.modelValue?.type ?? "Box");
    const meta = computed$1(() => SHAPE_METADATA[type.value]);
    const controls = reactive({});
    function resetDefaults(setNewType = true) {
      const m = meta.value;
      if (!m) return;
      for (const p of m.params) {
        controls[p.key] = p.default;
        if (setNewType && props.modelValue && props.modelValue.args) {
          const index = m.params.findIndex((param) => param.key === p.key);
          if (index !== -1 && props.modelValue.args[index] !== void 0) {
            controls[p.key] = props.modelValue.args[index];
          }
        }
      }
    }
    const args = computed$1(() => {
      const m = meta.value;
      if (!m) return [];
      return m.params.map((p) => controls[p.key]);
    });
    watch$1(
      () => ({ type: type.value, args: args.value }),
      (val) => emit("update:modelValue", val),
      { deep: true, immediate: true }
    );
    resetDefaults();
    function getNumberAttrs(param) {
      if (param.type !== "number") return {};
      return {
        min: param.min ?? 0.1,
        max: param.max ?? 5,
        step: param.step ?? 0.1
      };
    }
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$1("div", _hoisted_1$1, [
        _createVNode$1(_unref$1(NCard), null, {
          default: _withCtx$2(() => [
            _createVNode$1(_unref$1(NSpace), {
              vertical: "",
              size: "small"
            }, {
              default: _withCtx$2(() => [
                _createVNode$1(_unref$1(NSelect), {
                  value: type.value,
                  "onUpdate:value": [
                    _cache[0] || (_cache[0] = ($event) => type.value = $event),
                    _cache[1] || (_cache[1] = ($event) => resetDefaults(false))
                  ],
                  options: _unref$1(shapeOptions),
                  placeholder: "选择图形类型"
                }, null, 8, ["value", "options"]),
                meta.value ? (_openBlock$3(), _createBlock$2(_unref$1(NForm), {
                  key: 0,
                  size: "small",
                  "label-placement": "left",
                  "label-width": 100
                }, {
                  default: _withCtx$2(() => [
                    (_openBlock$3(true), _createElementBlock$1(_Fragment, null, _renderList(meta.value.params, (param) => {
                      return _openBlock$3(), _createElementBlock$1("div", {
                        key: param.key,
                        style: { "margin-bottom": "12px" }
                      }, [
                        _createVNode$1(_unref$1(NFormItem), {
                          label: param.label
                        }, {
                          default: _withCtx$2(() => [
                            param.type === "number" ? (_openBlock$3(), _createBlock$2(_unref$1(NSlider), _mergeProps({
                              key: 0,
                              size: "tiny",
                              value: controls[param.key],
                              "onUpdate:value": ($event) => controls[param.key] = $event
                            }, { ref_for: true }, getNumberAttrs(param), { style: { "width": "100%" } }), null, 16, ["value", "onUpdate:value"])) : param.type === "boolean" ? (_openBlock$3(), _createBlock$2(_unref$1(NSwitch), {
                              key: 1,
                              size: "small",
                              value: controls[param.key],
                              "onUpdate:value": ($event) => controls[param.key] = $event
                            }, null, 8, ["value", "onUpdate:value"])) : _createCommentVNode$1("", true)
                          ]),
                          _: 2
                        }, 1032, ["label"])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })) : _createCommentVNode$1("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {renderSlot:_renderSlot,resolveDynamicComponent:_resolveDynamicComponent,withCtx:_withCtx$1,openBlock:_openBlock$2,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const {computed} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "shapeRenderer",
  props: {
    modelValue: {}
  },
  setup(__props) {
    const shapeMap = {
      Box: Tz,
      Circle: wz,
      Cone: Sz,
      Cylinder: Ez,
      Dodecahedron: Rz,
      Icosahedron: Cz,
      Octahedron: Nz,
      Plane: Pz,
      Ring: Iz,
      RoundedBox: Bz,
      Sphere: Dz,
      Tetrahedron: Oz,
      Torus: Uz,
      TorusKnot: kz
    };
    const props = __props;
    const shapeComponent = computed(() => {
      return shapeMap[props.modelValue?.type] ?? null;
    });
    return (_ctx, _cache) => {
      return shapeComponent.value ? (_openBlock$2(), _createBlock$1(_resolveDynamicComponent(shapeComponent.value), {
        key: 0,
        args: _ctx.modelValue.args
      }, {
        default: _withCtx$1(() => [
          _renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["args"])) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock$1,createBlock:_createBlock} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "forEditor",
  props: {
    shape: {
      default: {
        type: "Box",
        args: [2, 1, 1]
      }
    },
    materialType: {
      type: String,
      default: "MeshStandardMaterial"
    },
    materialProps: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock(_unref(_sfc_main$2), {
        position: [0, 0.5, 0],
        modelValue: __props.shape
      }, {
        default: _withCtx(() => [
          _createVNode(_unref(_sfc_main$4), {
            type: __props.materialType,
            "material-props": __props.materialProps
          }, null, 8, ["type", "material-props"])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {shallowRef,watch,useAttrs} = await importShared('vue');

const THREE = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "customShaderMaterial",
  props: {
    baseMaterial: {},
    vertexShader: {},
    fragmentShader: {},
    uniforms: {}
  },
  setup(__props) {
    const attrs = useAttrs();
    const props = __props;
    const material = shallowRef(null);
    watch(() => props.baseMaterial, (bm) => {
      if (material.value) {
        material.value.dispose();
      }
      material.value = new B({
        baseMaterial: THREE[bm],
        vertexShader: props.vertexShader,
        fragmentShader: props.fragmentShader,
        uniforms: props.uniforms
      });
    }, { immediate: true });
    watch(
      () => ({ ...attrs }),
      (newAttrs) => {
        const mat = material.value;
        if (!mat) return;
        Object.keys(newAttrs).forEach((key) => {
          if (!(key in mat)) return;
          const value = newAttrs[key];
          if (value === true && typeof mat[key] !== "boolean") {
            return;
          }
          if (mat[key] !== value) {
            mat[key] = value;
            mat.needsUpdate = true;
          }
        });
      },
      {
        immediate: true,
        deep: false
        // attrs 本身不需要 deep
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("primitive", { object: material.value }, null, 8, _hoisted_1);
    };
  }
});

export { CientosShaderMaterial, MeshDiscardMaterial, MeshTransmissionMaterial, _sfc_main$c as _sfc_main, _sfc_main$b as _sfc_main$1, _sfc_main$1 as _sfc_main$10, _sfc_main as _sfc_main$11, _sfc_main$3 as _sfc_main$12, _sfc_main$a as _sfc_main$2, _sfc_main$9 as _sfc_main$3, _sfc_main$8 as _sfc_main$4, _sfc_main$7 as _sfc_main$5, _sfc_main$6, _sfc_main$5 as _sfc_main$7, _sfc_main$4 as _sfc_main$8, _sfc_main$2 as _sfc_main$9, blendingOptions, materialPresets, sideOptions, useFBO$1 as useFBO, useLoader, useTexture$1 as useTexture, useTexture as useTexture$1 };
//# sourceMappingURL=customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js.map
