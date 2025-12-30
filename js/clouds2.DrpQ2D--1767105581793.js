import { importShared, no, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './pagesShow.vue_vue_type_script_setup_true_lang.DfPQrWBQ1767105581793.js';

/**
 * Sets `BufferAttribute.updateRange` since r159.
 */
const setUpdateRange = (attribute, updateRange) => {
  if ('updateRanges' in attribute) {
    // r159
    // @ts-ignore
    attribute.updateRanges[0] = updateRange;
  } else {
    // @ts-ignore
    attribute.updateRange = updateRange;
  }
};

const {Group,PlaneGeometry,InstancedBufferAttribute,DynamicDrawUsage,InstancedMesh,Quaternion,Vector3,MeshLambertMaterial,Color,Matrix4,REVISION} = await importShared('three');
const parentMatrix = /* @__PURE__ */new Matrix4();
const translation = /* @__PURE__ */new Vector3();
const rotation = /* @__PURE__ */new Quaternion();
const cPos = /* @__PURE__ */new Vector3();
const cQuat = /* @__PURE__ */new Quaternion();
const scale = /* @__PURE__ */new Vector3();
const CloudMaterialMaker = material => {
  return class extends material {
    constructor() {
      super();
      const opaque_fragment = parseInt(REVISION.replace(/\D+/g, '')) >= 154 ? 'opaque_fragment' : 'output_fragment';
      this.onBeforeCompile = shader => {
        shader.vertexShader = `attribute float cloudOpacity;
               varying float vOpacity;
              ` + shader.vertexShader.replace('#include <fog_vertex>', `#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `);
        shader.fragmentShader = `varying float vOpacity;
              ` + shader.fragmentShader.replace(`#include <${opaque_fragment}>`, `#include <${opaque_fragment}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `);
      };
    }
  };
};
class Clouds extends Group {
  constructor({
    limit = 200,
    range,
    material = MeshLambertMaterial,
    texture,
    frustumCulled = true
  } = {}) {
    super();
    this.name = 'Clouds';
    this.ref = this;
    const ref = this;
    const planeGeometry = new PlaneGeometry(1, 1);
    const opacities = new Float32Array(Array.from({
      length: limit
    }, () => 1));
    const colors = new Float32Array(Array.from({
      length: limit
    }, () => [1, 1, 1]).flat());
    const opAttr = new InstancedBufferAttribute(opacities, 1);
    opAttr.setUsage(DynamicDrawUsage);
    planeGeometry.setAttribute('cloudOpacity', opAttr);
    const CloudMaterial = CloudMaterialMaker(material);
    const cloudMaterial = new CloudMaterial();
    cloudMaterial.map = texture;
    cloudMaterial.transparent = true;
    cloudMaterial.depthWrite = false;
    cloudMaterial.needsUpdate = true;
    this.cloudMaterial = cloudMaterial;
    this.instance = new InstancedMesh(planeGeometry, cloudMaterial, limit);
    const instance = this.instance;
    instance.matrixAutoUpdate = false;
    instance.frustumCulled = frustumCulled;
    instance.instanceColor = new InstancedBufferAttribute(colors, 3);
    instance.instanceColor.setUsage(DynamicDrawUsage);
    ref.add(instance);
    const clouds = [];
    const getCloudArray = () => {
      const oldCount = clouds.length;
      let currentCount = 0;
      for (let index = 0; index < this.ref.children.length; index++) {
        const mesh = this.ref.children[index];
        if (!mesh.cloudStateArray) continue;
        currentCount += mesh.cloudStateArray.length;
      }
      if (oldCount === currentCount) {
        return clouds;
      }
      clouds.length = 0;
      for (let index = 0; index < this.ref.children.length; index++) {
        const mesh = this.ref.children[index];
        if (!mesh.cloudStateArray) continue;
        clouds.push(...mesh.cloudStateArray);
      }
      updateInstancedMeshDrawRange();
      return clouds;
    };
    const updateInstancedMeshDrawRange = () => {
      const count = Math.min(limit, range !== undefined ? range : limit, clouds.length);
      instance.count = count;
      setUpdateRange(instance.instanceMatrix, {
        offset: 0,
        count: count * 16
      });
      if (instance.instanceColor) {
        setUpdateRange(instance.instanceColor, {
          offset: 0,
          count: count * 3
        });
      }
      setUpdateRange(instance.geometry.attributes.cloudOpacity, {
        offset: 0,
        count: count
      });
    };
    let t = 0;
    let index = 0;
    let config;
    const qat = new Quaternion();
    const dir = new Vector3(0, 0, 1);
    const pos = new Vector3();
    this.update = (camera, elapsedTime, delta) => {
      t = elapsedTime;
      parentMatrix.copy(instance.matrixWorld).invert();
      camera.matrixWorld.decompose(cPos, cQuat, scale);
      const clouds = getCloudArray();
      for (index = 0; index < clouds.length; index++) {
        config = clouds[index];
        config.ref.matrixWorld.decompose(translation, rotation, scale);
        translation.add(pos.copy(config.position).applyQuaternion(rotation).multiply(scale));
        rotation.copy(cQuat).multiply(qat.setFromAxisAngle(dir, config.rotation += delta * config.rotationFactor));
        scale.multiplyScalar(config.volume + (1 + Math.sin(t * config.density * config.speed)) / 2 * config.growth);
        config.matrix.compose(translation, rotation, scale).premultiply(parentMatrix);
        config.dist = translation.distanceTo(cPos);
      }

      // Depth-sort. Instances have no specific draw order, w/o sorting z would be random
      clouds.sort((a, b) => b.dist - a.dist);
      for (index = 0; index < clouds.length; index++) {
        config = clouds[index];
        opacities[index] = config.opacity * (config.dist < config.fade - 1 ? config.dist / config.fade : 1);
        instance.setMatrixAt(index, config.matrix);
        instance.setColorAt(index, config.color);
      }

      // Update instance
      instance.geometry.attributes.cloudOpacity.needsUpdate = true;
      instance.instanceMatrix.needsUpdate = true;
      if (instance.instanceColor) instance.instanceColor.needsUpdate = true;
    };
  }
}
let cloudCount = 0;

class Cloud extends Group {
  constructor({
    opacity = 1,
    speed = 0,
    bounds = new Vector3().fromArray([5, 1, 1]),
    segments = 20,
    color = new Color('#ffffff'),
    fade = 10,
    volume = 6,
    smallestVolume = 0.25,
    distribute = null,
    growth = 4,
    concentrate = 'inside',
    seed = Math.random()
  } = {}) {
    super();
    this.name = 'cloud_' + cloudCount++;
    this.seed = seed;
    this.segments = segments;
    this.bounds = bounds;
    this.concentrate = concentrate;
    this.volume = volume;
    this.smallestVolume = smallestVolume;
    this.distribute = distribute;
    this.growth = growth;
    this.speed = speed;
    this.fade = fade;
    this.opacity = opacity;
    this.color = color;
    this.ref = this;
    this.cloudStateArray = [];
    this.updateCloud();
  }

  /**
   * @private
   */
  updateCloudStateArray() {
    if (this.cloudStateArray.length === this.segments) return;
    const {
      segments,
      uuid
    } = this;
    if (this.cloudStateArray.length > this.segments) {
      this.cloudStateArray.splice(0, this.cloudStateArray.length - this.segments);
    } else {
      for (let index = this.cloudStateArray.length; index < segments; index++) {
        this.cloudStateArray.push({
          segments,
          bounds: new Vector3(1, 1, 1),
          position: new Vector3(),
          uuid,
          index,
          ref: this,
          dist: 0,
          matrix: new Matrix4(),
          volume: 0,
          length: 0,
          speed: 0,
          growth: 0,
          opacity: 1,
          fade: 0,
          density: 0,
          rotation: index * (Math.PI / segments),
          rotationFactor: 0,
          // Add rotationFactor property
          color: new Color()
        });
      }
    }
  }
  updateCloud() {
    const {
      volume,
      color,
      speed,
      growth,
      opacity,
      fade,
      bounds,
      seed,
      cloudStateArray,
      distribute,
      segments,
      concentrate,
      smallestVolume
    } = this;
    this.updateCloudStateArray();
    let seedInc = 0;
    function random() {
      const x = Math.sin(seed + seedInc) * 10000;
      seedInc++;
      return x - Math.floor(x);
    }
    cloudStateArray.forEach((cloud, index) => {
      // Only distribute randomly if there are multiple segments
      cloud.segments = segments;
      cloud.volume = volume;
      cloud.color = color;
      cloud.speed = speed;
      cloud.growth = growth;
      cloud.opacity = opacity;
      cloud.fade = fade;
      cloud.bounds.copy(bounds);
      cloud.density = Math.max(0.5, random());
      cloud.rotationFactor = Math.max(0.2, 0.5 * random()) * speed;

      // Only distribute randomly if there are multiple segments

      const distributed = distribute == null ? void 0 : distribute(cloud, index);
      if (distributed || segments > 1) {
        var _distributed$point;
        cloud.position.copy(cloud.bounds).multiply((_distributed$point = distributed == null ? void 0 : distributed.point) !== null && _distributed$point !== void 0 ? _distributed$point : {
          x: random() * 2 - 1,
          y: random() * 2 - 1,
          z: random() * 2 - 1
        });
      }
      const xDiff = Math.abs(cloud.position.x);
      const yDiff = Math.abs(cloud.position.y);
      const zDiff = Math.abs(cloud.position.z);
      const max = Math.max(xDiff, yDiff, zDiff);
      cloud.length = 1;
      if (xDiff === max) cloud.length -= xDiff / cloud.bounds.x;
      if (yDiff === max) cloud.length -= yDiff / cloud.bounds.y;
      if (zDiff === max) cloud.length -= zDiff / cloud.bounds.z;
      cloud.volume = ((distributed == null ? void 0 : distributed.volume) !== undefined ? distributed.volume : Math.max(Math.max(0, smallestVolume), concentrate === 'random' ? random() : concentrate === 'inside' ? cloud.length : 1 - cloud.length)) * volume;
    });
  }
}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {openBlock:_openBlock$1,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,watchEffect,ref,toRaw} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "cloudsMesh",
  props: {
    color: { default: "#ffffff" },
    segments: { default: 20 },
    volume: { default: 6 },
    opacity: { default: 1 },
    seed: { default: 0 },
    fade: { default: 10 },
    growth: { default: 4 },
    speed: { default: 0 },
    bounds: { default: {
      x: 5,
      y: 1,
      z: 1
    } }
  },
  setup(__props) {
    const props = __props;
    const { state: map } = no("./plugins/digitalCity/image/cloud.png");
    const clouds = ref(null);
    const cloud0 = new Cloud({ color: new THREE.Color(props.color) });
    const cloud1 = new Cloud({ color: new THREE.Color("pink") });
    cloud1.position.set(20, 0, 10);
    const { camera } = Fs();
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta, elapsed }) => {
      clouds.value?.update(camera.value, elapsed, delta);
    });
    watch(
      () => map.value,
      (mapv) => {
        clouds.value = new Clouds({ texture: mapv });
        clouds.value.add(cloud0);
        clouds.value.add(cloud1);
      }
    );
    watch(
      () => props.color,
      (value) => {
        cloud0.color.set(value);
      }
    );
    watchEffect(() => {
      if (props.segments) {
        cloud0.segments = props.segments;
      }
      if (props.volume) {
        cloud0.volume = props.volume;
      }
      if (props.opacity) {
        cloud0.opacity = props.opacity;
      }
      if (props.seed) {
        cloud0.seed = props.seed;
      }
      if (props.fade) {
        cloud0.fade = props.fade;
      }
      if (props.growth) {
        cloud0.growth = props.growth;
      }
      if (props.speed) {
        cloud0.speed = props.speed;
      }
      if (props.bounds) {
        cloud0.bounds.x = props.bounds.x;
        cloud0.bounds.y = props.bounds.y;
        cloud0.bounds.z = props.bounds.z;
      }
      cloud0.updateCloud();
    });
    return (_ctx, _cache) => {
      return clouds.value ? (_openBlock$1(), _createElementBlock("primitive", {
        key: 0,
        object: toRaw(clouds.value),
        renderOrder: 3e3
      }, null, 8, _hoisted_1)) : _createCommentVNode("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,mergeProps:_mergeProps,createVNode:_createVNode,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "clouds2",
  setup(__props) {
    const cmConfig = reactive({
      color: "#ffffff",
      segments: 20,
      volume: 6,
      opacity: 1,
      seed: 0,
      fade: 10,
      growth: 4,
      speed: 0,
      bounds: { x: 5, y: 1, z: 1 }
    });
    const paneControl = new Pane({
      title: "云彩效果",
      expanded: true
    });
    paneControl.addBinding(cmConfig, "color", { label: "颜色" });
    paneControl.addBinding(cmConfig, "seed", {
      label: "seed",
      min: 0,
      max: 100,
      step: 0.1
    });
    paneControl.addBinding(cmConfig, "segments", {
      label: "segments",
      min: 1,
      max: 80,
      step: 0.1
    });
    paneControl.addBinding(cmConfig, "volume", {
      label: "volume",
      min: 0,
      max: 100,
      step: 0.1
    });
    paneControl.addBinding(cmConfig, "opacity", {
      label: "opacity",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(cmConfig, "fade", {
      label: "fade",
      min: 0,
      max: 4e3,
      step: 10
    });
    paneControl.addBinding(cmConfig, "growth", {
      label: "growth",
      min: 0,
      max: 20,
      step: 0.1
    });
    paneControl.addBinding(cmConfig, "speed", {
      label: "speed",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(cmConfig, "bounds", {
      x: { min: 0, max: 25 },
      y: { min: 0, max: 25 },
      z: { min: 0, max: 25 }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_sfc_main$2, null, {
        ability: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresDirectionalLight", {
            position: [200, 100, 0],
            intensity: 1.5,
            color: "#ffffff"
          }, null, -1)),
          _createVNode(_sfc_main$1, _mergeProps({
            position: [10, 200, 0],
            scale: 20
          }, cmConfig), null, 16)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=clouds2.DrpQ2D--1767105581793.js.map
