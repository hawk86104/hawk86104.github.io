import { importShared, Fs, Me, _l } from './index.BxB45aCK1767105581793.js';
import { fixSpritesForMirror } from './utils.DIIwn7WV1767105581793.js';
import { WebGPURenderer } from './three.webgpu.CKPDRXH51767105581793.js';

const {NoBlending,ShaderMaterial,Uniform,Vector2: Vector2$2,REVISION} = await importShared('three');

const getVersion = () => Number.parseInt(REVISION.replace(/\D+/g, ""));
const version = /* @__PURE__ */ getVersion();
class ConvolutionMaterial extends ShaderMaterial {
  constructor(texelSize = new Vector2$2()) {
    super({
      uniforms: {
        inputBuffer: new Uniform(null),
        depthBuffer: new Uniform(null),
        resolution: new Uniform(new Vector2$2()),
        texelSize: new Uniform(new Vector2$2()),
        halfTexelSize: new Uniform(new Vector2$2()),
        kernel: new Uniform(0),
        scale: new Uniform(1),
        cameraNear: new Uniform(0),
        cameraFar: new Uniform(1),
        depthEdge0: new Uniform(0),
        depthEdge1: new Uniform(1),
        depthScale: new Uniform(0),
        depthBias: new Uniform(0.25)
      },
      fragmentShader: `#include <common>
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
          #include <${version >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }`,
      vertexShader: `uniform vec2 texelSize;
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
        }`,
      blending: NoBlending,
      depthWrite: false,
      depthTest: false
    });
    this.toneMapped = false;
    this.setTexelSize(texelSize.x, texelSize.y);
    this.kernel = new Float32Array([0, 1, 2, 2, 3]);
  }
  setTexelSize(x, y) {
    this.uniforms.texelSize.value.set(x, y);
    this.uniforms.halfTexelSize.value.set(x, y).multiplyScalar(0.5);
  }
  setResolution(resolution) {
    this.uniforms.resolution.value.copy(resolution);
  }
}

const {BufferAttribute,BufferGeometry,Camera,HalfFloatType: HalfFloatType$1,LinearFilter: LinearFilter$1,Mesh,Scene,Vector2: Vector2$1,WebGLRenderTarget: WebGLRenderTarget$1} = await importShared('three');
class BlurPass {
  constructor({
    resolution,
    width = 500,
    height = 500,
    depthEdge0 = 0,
    depthEdge1 = 1,
    depthScale = 0,
    depthBias = 0.25
  }) {
    this.renderToScreen = false;
    this.renderTargetA = new WebGLRenderTarget$1(resolution, resolution, {
      minFilter: LinearFilter$1,
      magFilter: LinearFilter$1,
      stencilBuffer: false,
      depthBuffer: false,
      type: HalfFloatType$1
    });
    this.renderTargetB = this.renderTargetA.clone();
    this.convolutionMaterial = new ConvolutionMaterial();
    this.convolutionMaterial.setTexelSize(1 / width, 1 / height);
    this.convolutionMaterial.setResolution(new Vector2$1(width, height));
    this.scene = new Scene();
    this.camera = new Camera();
    this.convolutionMaterial.uniforms.depthEdge0.value = depthEdge0;
    this.convolutionMaterial.uniforms.depthEdge1.value = depthEdge1;
    this.convolutionMaterial.uniforms.depthScale.value = depthScale;
    this.convolutionMaterial.uniforms.depthBias.value = depthBias;
    this.convolutionMaterial.defines.USE_DEPTH = depthScale > 0;
    const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
    const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(vertices, 3));
    geometry.setAttribute("uv", new BufferAttribute(uvs, 2));
    this.screen = new Mesh(geometry, this.convolutionMaterial);
    this.screen.frustumCulled = false;
    this.scene.add(this.screen);
  }
  render(renderer, inputBuffer, outputBuffer) {
    const scene = this.scene;
    const camera = this.camera;
    const renderTargetA = this.renderTargetA;
    const renderTargetB = this.renderTargetB;
    const material = this.convolutionMaterial;
    const uniforms = material.uniforms;
    uniforms.depthBuffer.value = inputBuffer.depthTexture;
    const kernel = material.kernel;
    let lastRT = inputBuffer;
    let destRT;
    let i, l;
    for (i = 0, l = kernel.length - 1; i < l; ++i) {
      destRT = (i & 1) === 0 ? renderTargetA : renderTargetB;
      uniforms.kernel.value = kernel[i];
      uniforms.inputBuffer.value = lastRT.texture;
      renderer.setRenderTarget(destRT);
      renderer.render(scene, camera);
      lastRT = destRT;
    }
    uniforms.kernel.value = kernel[i];
    uniforms.inputBuffer.value = lastRT.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
    renderer.render(scene, camera);
  }
  dispose() {
    this.screen.material.dispose();
    this.screen.geometry.dispose();
    this.renderTargetA.dispose();
    this.renderTargetB.dispose();
    this.convolutionMaterial.dispose();
  }
}

const {MeshStandardMaterial} = await importShared('three');

class MeshReflectionMaterial extends MeshStandardMaterial {
  constructor(parameters = {}) {
    super(parameters);
    this._tDepth = { value: null };
    this._distortionMap = { value: null };
    this._tSharp = { value: null };
    this._tBlur = { value: null };
    this._textureMatrix = { value: null };
    this._mix = { value: 0.5 };
    this._sharpMix = { value: 0 };
    this._blurMixSmooth = { value: 0 };
    this._blurMixRough = { value: 0 };
    this._sharpDepthEdgeMin = { value: 0.9 };
    this._sharpDepthEdgeMax = { value: 1 };
    this._sharpDepthScale = { value: 0 };
    this._sharpDepthBias = { value: 0 };
    this._distortion = { value: 1 };
    this.setValues(parameters);
  }
  onBeforeCompile(shader) {
    if (!shader.defines?.USE_UV) {
      shader.defines.USE_UV = "";
    }
    for (const key of Object.keys(shader.defines)) {
      shader.defines[key.toUpperCase()] = shader.defines[key];
    }
    shader.uniforms.tSharp = this._tSharp;
    shader.uniforms.tDepth = this._tDepth;
    shader.uniforms.tBlur = this._tBlur;
    shader.uniforms.distortionMap = this._distortionMap;
    shader.uniforms.textureMatrix = this._textureMatrix;
    shader.uniforms.mixMain = this._mix;
    shader.uniforms.sharpMix = this._sharpMix;
    shader.uniforms.sharpDepthScale = this._sharpDepthScale;
    shader.uniforms.sharpDepthEdgeMin = this._sharpDepthEdgeMin;
    shader.uniforms.sharpDepthEdgeMax = this._sharpDepthEdgeMax;
    shader.uniforms.sharpDepthBias = this._sharpDepthBias;
    shader.uniforms.blurMixSmooth = this._blurMixSmooth;
    shader.uniforms.blurMixRough = this._blurMixRough;
    shader.uniforms.distortion = this._distortion;
    shader.vertexShader = `
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${shader.vertexShader}`;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <project_vertex>",
      `#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`
    );
    shader.fragmentShader = `
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
        ${shader.fragmentShader}`;
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      `#include <emissivemap_fragment>

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
      `
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <opaque_fragment>",
      `

      #ifdef USE_BLUR
        outgoingLight += mixMain * (
          vec3(sharp) * sharpMix
          + vec3(blur) * (blurMixSmooth * (1.0 - roughnessFactor) + blurMixRough * roughnessFactor)
        );
      #else
        outgoingLight += mixMain * vec3(sharp) * sharpMix;
      #endif

      #include <opaque_fragment>
      `
    );
  }
  get tSharp() {
    return this._tSharp.value;
  }
  set tSharp(v) {
    this._tSharp.value = v;
  }
  get tDepth() {
    return this._tDepth.value;
  }
  set tDepth(v) {
    this._tDepth.value = v;
  }
  get distortionMap() {
    return this._distortionMap.value;
  }
  set distortionMap(v) {
    this._distortionMap.value = v;
  }
  get tBlur() {
    return this._tBlur.value;
  }
  set tBlur(v) {
    this._tBlur.value = v;
  }
  get textureMatrix() {
    return this._textureMatrix.value;
  }
  set textureMatrix(v) {
    this._textureMatrix.value = v;
  }
  get sharpMix() {
    return this._sharpMix.value;
  }
  set sharpMix(v) {
    this._sharpMix.value = v;
  }
  get blurMixSmooth() {
    return this._blurMixSmooth.value;
  }
  set blurMixSmooth(v) {
    this._blurMixSmooth.value = v;
  }
  get blurMixRough() {
    return this._blurMixRough.value;
  }
  set blurMixRough(v) {
    this._blurMixRough.value = v;
  }
  get mix() {
    return this._mix.value;
  }
  set mix(v) {
    this._mix.value = v;
  }
  get sharpDepthScale() {
    return this._sharpDepthScale.value;
  }
  set sharpDepthScale(v) {
    this._sharpDepthScale.value = v;
  }
  get sharpDepthBias() {
    return this._sharpDepthBias.value;
  }
  set sharpDepthBias(v) {
    this._sharpDepthBias.value = v;
  }
  get sharpDepthEdgeMin() {
    return this._sharpDepthEdgeMin.value;
  }
  set sharpDepthEdgeMin(v) {
    this._sharpDepthEdgeMin.value = v;
  }
  get sharpDepthEdgeMax() {
    return this._sharpDepthEdgeMax.value;
  }
  set sharpDepthEdgeMax(v) {
    this._sharpDepthEdgeMax.value = v;
  }
  get distortion() {
    return this._distortion.value;
  }
  set distortion(v) {
    this._distortion.value = v;
  }
}

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,mergeProps:_mergeProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["texture-matrix", "t-sharp", "t-depth", "t-blur", "defines-USE_BLUR", "defines-USE_DEPTH", "defines-USE_DISTORTION"];
const {Color,DepthTexture,Euler,HalfFloatType,LinearFilter,Matrix4,PerspectiveCamera,Plane,TangentSpaceNormalMap,Vector2,Vector3,Vector4,WebGLRenderer,WebGLRenderTarget} = await importShared('three');

const {computed,onBeforeUnmount,shallowRef,toValue,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  props: {
    resolution: { default: 256 },
    mix: { default: 1 },
    sharpMix: { default: 1 },
    sharpDepthScale: { default: 1 },
    sharpDepthBias: { default: 0 },
    sharpDepthEdgeMin: { default: 0 },
    sharpDepthEdgeMax: { default: 0.2 },
    blurMixSmooth: { default: 1 },
    blurMixRough: { default: 1 },
    blurDepthScale: { default: 1 },
    blurDepthBias: { default: 0 },
    blurDepthEdgeMin: { default: 0 },
    blurDepthEdgeMax: { default: 0.2 },
    blurSize: { default: () => [0, 0] },
    distortionMap: {},
    distortion: { default: 0 },
    reflectorOffset: { default: 0 },
    color: { default: () => new Color(3355443) },
    roughness: { default: 1 },
    metalness: { default: 0 },
    map: {},
    lightMap: {},
    lightMapIntensity: { default: 1 },
    aoMap: {},
    aoMapIntensity: { default: 1 },
    emissive: { default: () => new Color(0) },
    emissiveIntensity: { default: 1 },
    emissiveMap: {},
    bumpMap: {},
    bumpScale: { default: 1 },
    normalMap: {},
    normalMapType: { default: TangentSpaceNormalMap },
    normalScale: { default: () => new Vector2(1, 1) },
    displacementMap: {},
    displacementScale: { default: 1 },
    displacementBias: { default: 0 },
    roughnessMap: { default: null },
    metalnessMap: {},
    alphaMap: {},
    envMap: {},
    envMapRotation: { default: () => new Euler() },
    envMapIntensity: { default: 1 },
    wireframe: { type: Boolean, default: false },
    wireframeLinewidth: { default: 1 },
    wireframeLinecap: { default: "round" },
    wireframeLinejoin: { default: "round" },
    flatShading: { type: Boolean, default: false },
    fog: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { extend, invalidate } = Fs();
    extend({ MeshReflectionMaterial });
    const blurWidth = computed(() => 500 - (Array.isArray(props.blurSize) ? props.blurSize[0] : props.blurSize));
    const blurHeight = computed(() => 500 - (Array.isArray(props.blurSize) ? props.blurSize[1] : props.blurSize));
    const hasBlur = computed(() => blurWidth.value > 0 || blurHeight.value > 0);
    const hasDepth = computed(() => props.sharpDepthScale > 0 || props.blurDepthScale > 0);
    const hasDistortion = computed(() => !!props.distortionMap);
    const hasRoughness = computed(() => !!props.roughnessMap);
    const materialRef = shallowRef();
    let blurpass;
    const state = {
      reflectorPlane: new Plane(),
      normal: new Vector3(),
      reflectorWorldPosition: new Vector3(),
      cameraWorldPosition: new Vector3(),
      rotationMatrix: new Matrix4(),
      lookAtPosition: new Vector3(0, 0, -1),
      clipPlane: new Vector4(),
      view: new Vector3(),
      target: new Vector3(),
      q: new Vector4(),
      virtualCamera: new PerspectiveCamera(),
      textureMatrix: new Matrix4()
    };
    const fboSharp = new WebGLRenderTarget(
      props.resolution,
      props.resolution,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        type: HalfFloatType,
        depthBuffer: true,
        depthTexture: new DepthTexture(
          props.resolution,
          props.resolution
        )
      }
    );
    const fboBlur = new WebGLRenderTarget(
      props.resolution,
      props.resolution,
      {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        type: HalfFloatType
      }
    );
    watch(
      () => [props.resolution],
      () => {
        fboSharp.setSize(props.resolution, props.resolution);
        fboBlur.setSize(props.resolution, props.resolution);
      }
    );
    watch(() => [
      props.resolution,
      blurWidth.value,
      blurHeight.value,
      props.blurDepthEdgeMin,
      props.blurDepthEdgeMax,
      props.blurDepthScale,
      props.blurDepthBias
    ], () => {
      blurpass?.dispose();
      blurpass = new BlurPass({
        resolution: props.resolution,
        width: blurWidth.value,
        height: blurHeight.value,
        depthEdge0: props.blurDepthEdgeMin,
        depthEdge1: props.blurDepthEdgeMax,
        depthScale: props.blurDepthScale,
        depthBias: props.blurDepthBias
      });
    }, { immediate: true });
    watch(() => [hasBlur.value], () => {
      Me(
        "MeshReflectionMaterial: Setting blurMixRough or blurMixSmooth to 0, then non-zero triggers a recompile.The TresJS core cannot currently handle recompiled materials."
      );
    });
    watch(hasDepth, () => {
      Me(
        "MeshReflectionMaterial: Setting depthScale to 0, then non-zero triggers a recompile.The TresJS core cannot currently handle recompiled materials."
      );
    });
    watch(hasDistortion, () => {
      Me(
        "MeshReflectionMaterial: Toggling distortionMap triggers a recompile.The TresJS core cannot currently handle recompiled materials."
      );
    });
    watch(hasRoughness, () => {
      Me(
        "MeshReflectionMaterial: Toggling roughnessMap triggers a recompile.The TresJS core cannot currently handle recompiled materials."
      );
    });
    watch(() => [props.normalMap], () => {
      Me(
        "MeshReflectionMaterial: Toggling normalMap triggers a recompile.The TresJS core cannot currently handle recompiled materials."
      );
    });
    onBeforeUnmount(() => {
      fboSharp.dispose();
      fboBlur.dispose();
      blurpass.dispose();
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ renderer, scene, camera }) => {
      const parent = materialRef.value?.__tres?.parent;
      if (!parent) {
        return;
      }
      if (renderer instanceof WebGPURenderer) {
        console.warn("MeshReflectionMaterial: WebGPURenderer is not supported yet");
        return;
      }
      if (renderer instanceof WebGLRenderer) {
        invalidate();
        const currentXrEnabled = renderer.xr.enabled;
        const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
        state.reflectorWorldPosition.setFromMatrixPosition(parent.matrixWorld);
        state.cameraWorldPosition.setFromMatrixPosition(camera.value?.matrixWorld);
        state.rotationMatrix.extractRotation(parent.matrixWorld);
        state.normal.set(0, 0, 1);
        state.normal.applyMatrix4(state.rotationMatrix);
        state.reflectorWorldPosition.addScaledVector(state.normal, props.reflectorOffset);
        state.view.subVectors(state.reflectorWorldPosition, state.cameraWorldPosition);
        if (state.view.dot(state.normal) > 0) {
          return;
        }
        parent.visible = false;
        state.view.reflect(state.normal).negate();
        state.view.add(state.reflectorWorldPosition);
        state.rotationMatrix.extractRotation(camera.value?.matrixWorld);
        state.lookAtPosition.set(0, 0, -1);
        state.lookAtPosition.applyMatrix4(state.rotationMatrix);
        state.lookAtPosition.add(state.cameraWorldPosition);
        state.target.subVectors(state.reflectorWorldPosition, state.lookAtPosition);
        state.target.reflect(state.normal).negate();
        state.target.add(state.reflectorWorldPosition);
        state.virtualCamera.position.copy(state.view);
        state.virtualCamera.up.set(0, 1, 0);
        state.virtualCamera.up.applyMatrix4(state.rotationMatrix);
        state.virtualCamera.up.reflect(state.normal);
        state.virtualCamera.lookAt(state.target);
        state.virtualCamera.far = camera.value.far;
        state.virtualCamera.updateMatrixWorld();
        state.virtualCamera.far = camera.value.far;
        state.virtualCamera.projectionMatrix.copy(camera.value.projectionMatrix);
        state.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
        state.textureMatrix.multiply(state.virtualCamera.projectionMatrix);
        state.textureMatrix.multiply(state.virtualCamera.matrixWorldInverse);
        state.textureMatrix.multiply(parent.matrixWorld);
        state.reflectorPlane.setFromNormalAndCoplanarPoint(state.normal, state.reflectorWorldPosition);
        state.reflectorPlane.applyMatrix4(state.virtualCamera.matrixWorldInverse);
        state.clipPlane.set(
          state.reflectorPlane.normal.x,
          state.reflectorPlane.normal.y,
          state.reflectorPlane.normal.z,
          state.reflectorPlane.constant
        );
        const projectionMatrix = state.virtualCamera.projectionMatrix;
        state.q.x = (Math.sign(state.clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
        state.q.y = (Math.sign(state.clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
        state.q.z = -1;
        state.q.w = (1 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
        state.clipPlane.multiplyScalar(2 / state.clipPlane.dot(state.q));
        projectionMatrix.elements[2] = state.clipPlane.x;
        projectionMatrix.elements[6] = state.clipPlane.y;
        projectionMatrix.elements[10] = state.clipPlane.z + 1;
        projectionMatrix.elements[14] = state.clipPlane.w;
        renderer.shadowMap.autoUpdate = false;
        renderer.setRenderTarget(fboSharp);
        if (!renderer.autoClear) {
          renderer.clear();
        }
        fixSpritesForMirror(toValue(scene));
        renderer.render(toValue(scene), state.virtualCamera);
        if (renderer instanceof WebGLRenderer) {
          blurpass.render(renderer, fboSharp, fboBlur);
        }
        fixSpritesForMirror(toValue(scene), false);
        renderer.xr.enabled = currentXrEnabled;
        renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
        parent.visible = true;
        renderer.setRenderTarget(null);
        invalidate();
      }
    });
    __expose({ instance: materialRef });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMeshReflectionMaterial", _mergeProps({
        key: `key${hasBlur.value ? "0" : "1"}${hasDepth.value ? "0" : "1"}${hasDistortion.value ? "0" : "1"}${hasRoughness.value ? "0" : "1"}`,
        ref_key: "materialRef",
        ref: materialRef
      }, props, {
        "texture-matrix": state.textureMatrix,
        "t-sharp": _unref(fboSharp)?.texture,
        "t-depth": _unref(fboSharp)?.depthTexture,
        "t-blur": _unref(fboBlur)?.texture,
        "defines-USE_BLUR": hasBlur.value ? "" : void 0,
        "defines-USE_DEPTH": hasDepth.value ? "" : void 0,
        "defines-USE_DISTORTION": hasDistortion.value ? "" : void 0
      }), null, 16, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js.map
