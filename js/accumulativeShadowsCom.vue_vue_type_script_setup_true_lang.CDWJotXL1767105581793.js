import { importShared, Fs } from './index.BxB45aCK1767105581793.js';
import { shaderMaterial } from './shaderMaterial.BXDL7cvO1767105581793.js';
import { MeshDiscardMaterial } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';

const THREE$1 = await importShared('three');

function isLight(object) {
  return object.isLight;
}
function isGeometry(object) {
  return !!object.geometry;
}
const SoftShadowMaterial = shaderMaterial({
  color: new THREE$1.Color(0x000000),
  blend: 2.0,
  alphaTest: 0.75,
  opacity: 0,
  map: null
}, `varying vec2 vUv;
   void main() {
     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
     vUv = uv;
   }`, `varying vec2 vUv;
   uniform sampler2D map;
   uniform vec3 color;
   uniform float opacity;
   uniform float alphaTest;
   uniform float blend;
   void main() {
     vec4 sampledDiffuseColor = texture2D(map, vUv);
     gl_FragColor = vec4(color * sampledDiffuseColor.r * blend, max(0.0, (1.0 - (sampledDiffuseColor.r + sampledDiffuseColor.g + sampledDiffuseColor.b) / alphaTest)) * opacity);
     #include <tonemapping_fragment>
     #include <${parseInt(THREE$1.REVISION.replace(/\D+/g, '')) >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
   }`);

// Based on "Progressive Light Map Accumulator", by [zalo](https://github.com/zalo/)
class ProgressiveLightMap {
  constructor(renderer, scene, res = 1024) {
    this.renderer = renderer;
    this.res = res;
    this.scene = scene;
    this.buffer1Active = false;
    this.lights = [];
    this.meshes = [];
    this.object = null;
    this.clearColor = new THREE$1.Color();
    this.clearAlpha = 0;

    // Create the Progressive LightMap Texture
    const format = /(Android|iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE$1.HalfFloatType : THREE$1.FloatType;
    this.progressiveLightMap1 = new THREE$1.WebGLRenderTarget(this.res, this.res, {
      type: format
    });
    this.progressiveLightMap2 = new THREE$1.WebGLRenderTarget(this.res, this.res, {
      type: format
    });

    // Inject some spicy new logic into a standard phong material
    this.discardMat = new MeshDiscardMaterial();
    this.targetMat = new THREE$1.MeshLambertMaterial({
      fog: false
    });
    this.previousShadowMap = {
      value: this.progressiveLightMap1.texture
    };
    this.averagingWindow = {
      value: 100
    };
    this.targetMat.onBeforeCompile = shader => {
      // Vertex Shader: Set Vertex Positions to the Unwrapped UV Positions
      shader.vertexShader = 'varying vec2 vUv;\n' + shader.vertexShader.slice(0, -1) + 'vUv = uv; gl_Position = vec4((uv - 0.5) * 2.0, 1.0, 1.0); }';

      // Fragment Shader: Set Pixels to average in the Previous frame's Shadows
      const bodyStart = shader.fragmentShader.indexOf('void main() {');
      shader.fragmentShader = 'varying vec2 vUv;\n' + shader.fragmentShader.slice(0, bodyStart) + 'uniform sampler2D previousShadowMap;\n	uniform float averagingWindow;\n' + shader.fragmentShader.slice(bodyStart - 1, -1) + `\nvec3 texelOld = texture2D(previousShadowMap, vUv).rgb;
        gl_FragColor.rgb = mix(texelOld, gl_FragColor.rgb, 1.0/ averagingWindow);
      }`;

      // Set the Previous Frame's Texture Buffer and Averaging Window
      shader.uniforms.previousShadowMap = this.previousShadowMap;
      shader.uniforms.averagingWindow = this.averagingWindow;
    };
  }
  clear() {
    this.renderer.getClearColor(this.clearColor);
    this.clearAlpha = this.renderer.getClearAlpha();
    this.renderer.setClearColor('black', 1);
    this.renderer.setRenderTarget(this.progressiveLightMap1);
    this.renderer.clear();
    this.renderer.setRenderTarget(this.progressiveLightMap2);
    this.renderer.clear();
    this.renderer.setRenderTarget(null);
    this.renderer.setClearColor(this.clearColor, this.clearAlpha);
    this.lights = [];
    this.meshes = [];
    this.scene.traverse(object => {
      if (isGeometry(object)) {
        this.meshes.push({
          object,
          material: object.material
        });
      } else if (isLight(object)) {
        this.lights.push({
          object,
          intensity: object.intensity
        });
      }
    });
  }
  prepare() {
    this.lights.forEach(light => light.object.intensity = 0);
    this.meshes.forEach(mesh => mesh.object.material = this.discardMat);
  }
  finish() {
    this.lights.forEach(light => light.object.intensity = light.intensity);
    this.meshes.forEach(mesh => mesh.object.material = mesh.material);
  }
  configure(object) {
    this.object = object;
  }
  update(camera, blendWindow = 100) {
    if (!this.object) return;
    // Set each object's material to the UV Unwrapped Surface Mapping Version
    this.averagingWindow.value = blendWindow;
    this.object.material = this.targetMat;
    // Ping-pong two surface buffers for reading/writing
    const activeMap = this.buffer1Active ? this.progressiveLightMap1 : this.progressiveLightMap2;
    const inactiveMap = this.buffer1Active ? this.progressiveLightMap2 : this.progressiveLightMap1;
    // Render the object's surface maps
    const oldBg = this.scene.background;
    this.scene.background = null;
    this.renderer.setRenderTarget(activeMap);
    this.previousShadowMap.value = inactiveMap.texture;
    this.buffer1Active = !this.buffer1Active;
    this.renderer.render(this.scene, camera);
    this.renderer.setRenderTarget(null);
    this.scene.background = oldBg;
  }
}

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotate-x"];
const THREE = await importShared('three');

const {ref,watch,watchEffect,toRaw} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "accumulativeShadowsCom",
  props: {
    opacity: { default: 0.8 },
    alphaTest: { default: 0.9 },
    color: { default: "#000000" },
    blend: { default: 2 },
    lightPosition: { default: { x: 3, y: 5, z: 3 } },
    frames: { default: 60 },
    blendWindow: { default: 100 },
    ambient: { default: 0.5 }
  },
  setup(__props) {
    const props = __props;
    let gPlane = ref();
    const { extend, scene, renderer, camera } = Fs();
    extend({ SoftShadowMaterial });
    const lightParams = {
      /** Light position */
      position: new THREE.Vector3().set(props.lightPosition.x, props.lightPosition.y, props.lightPosition.z),
      /** Radius of the jiggle, higher values make softer light */
      radius: 1,
      /** Amount of lights*/
      amount: 8,
      /** Light intensity */
      intensity: Math.PI,
      bias: 1e-3,
      //shadow bias
      mapSize: 1024,
      // shadow map res
      size: 8,
      // shadow camera top,bottom,left,right
      near: 0.5,
      // shadow camera near
      far: 200
      // shadow camera far
    };
    const plm = new ProgressiveLightMap(renderer, scene.value, lightParams.mapSize);
    const ssConfig = {
      map: plm.progressiveLightMap2.texture,
      transparent: true,
      depthWrite: false,
      toneMapped: true,
      blend: props.blend,
      alphaTest: props.alphaTest,
      opacity: props.opacity,
      color: props.color
    };
    const gLights = new THREE.Group();
    for (let l = 0; l < lightParams.amount; l++) {
      const dirLight = new THREE.DirectionalLight(16777215, lightParams.intensity / lightParams.amount);
      dirLight.castShadow = true;
      dirLight.shadow.bias = lightParams.bias;
      dirLight.shadow.camera.near = lightParams.near;
      dirLight.shadow.camera.far = lightParams.far;
      dirLight.shadow.camera.right = lightParams.size / 2;
      dirLight.shadow.camera.left = -8 / 2;
      dirLight.shadow.camera.top = lightParams.size / 2;
      dirLight.shadow.camera.bottom = -8 / 2;
      dirLight.shadow.mapSize.width = lightParams.mapSize;
      dirLight.shadow.mapSize.height = lightParams.mapSize;
      gLights.add(dirLight);
    }
    const randomiseLightPositions = () => {
      const vLength = lightParams.position.length();
      for (let i = 0; i < gLights.children.length; i++) {
        const light = gLights.children[i];
        if (Math.random() > props.ambient) {
          light.position.set(
            lightParams.position.x + THREE.MathUtils.randFloatSpread(lightParams.radius),
            lightParams.position.y + THREE.MathUtils.randFloatSpread(lightParams.radius),
            lightParams.position.z + THREE.MathUtils.randFloatSpread(lightParams.radius)
          );
        } else {
          let lambda = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
          let phi = 2 * Math.PI * Math.random();
          light.position.set(Math.cos(lambda) * Math.cos(phi) * vLength, Math.abs(Math.cos(lambda) * Math.sin(phi) * vLength), Math.sin(lambda) * vLength);
        }
      }
    };
    const renderShadows = (frames = 1) => {
      scene.value.add(gLights);
      plm.prepare();
      for (let i = 0; i < frames; i++) {
        randomiseLightPositions();
        plm.update(camera.value, props.blendWindow);
        console.log("shadows plm update", i);
      }
      scene.value.remove(gLights);
      plm.finish();
    };
    watch(
      () => gPlane.value,
      (value) => {
        if (value) {
          plm.configure(toRaw(value));
          plm.clear();
          console.log("shadows render start");
          renderShadows(props.frames);
          console.log("shadows render end");
        }
      }
    );
    const reset = () => {
      plm.clear();
      renderShadows(props.frames);
    };
    watchEffect(() => {
      if (gPlane.value) {
        if (props.opacity) {
          gPlane.value.material.opacity = props.opacity;
        }
        if (props.alphaTest) {
          gPlane.value.material.alphaTest = props.alphaTest;
        }
        if (props.color) {
          gPlane.value.material.color.set(props.color);
        }
        if (props.blend) {
          gPlane.value.material.blend = props.blend;
        }
      }
    });
    watch(
      () => props.lightPosition,
      (value) => {
        if (value) {
          console.log(props.lightPosition);
          lightParams.position.set(value.x, value.y, value.z);
          reset();
        }
      },
      { deep: true }
    );
    watch(
      () => [props.frames, props.blendWindow, props.ambient],
      () => {
        reset();
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        "receive-shadow": "",
        ref_key: "gPlane",
        ref: gPlane,
        scale: 10,
        "rotate-x": -Math.PI / 2
      }, [
        _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
        _createElementVNode("TresSoftShadowMaterial", _normalizeProps(_guardReactiveProps(ssConfig)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=accumulativeShadowsCom.vue_vue_type_script_setup_true_lang.CDWJotXL1767105581793.js.map
