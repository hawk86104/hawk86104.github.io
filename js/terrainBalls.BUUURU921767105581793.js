import { importShared, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { createNoise2D } from './simplex-noise.W37CxtWd1767105581793.js';
import { World, Sphere, Body, Heightfield, Vec3 } from './cannon-es.EJ5TUo2o1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "terrainBallsCannon",
  props: {
    sphereGroup: {
      default: null
    },
    plane: {
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const world = new World();
    world.gravity.set(0, -9.82, 0);
    const sphereBodyList = [];
    props.sphereGroup.children.forEach((sphere) => {
      const sphereSize = sphere.geometry.parameters.radius;
      const mass = 1;
      const sphereShape = new Sphere(sphereSize);
      const sphereBody = new Body({ mass });
      sphereBody.addShape(sphereShape);
      sphereBody.position.copy(sphere.position);
      sphereBodyList.push(sphereBody);
      world.addBody(sphereBody);
    });
    let planeData = [];
    const pos = props.plane.geometry.getAttribute("position");
    const widthSegments = props.plane.geometry.parameters.widthSegments + 1;
    const heightSegments = props.plane.geometry.parameters.heightSegments + 1;
    for (let i = 0; i < heightSegments; i++) {
      planeData.push([]);
    }
    for (let i = 0; i < widthSegments; i++) {
      for (let j = 0; j < heightSegments; j++) {
        planeData[j][i] = pos.getZ((widthSegments - 1 - i) * heightSegments + j);
      }
    }
    const terrainShape = new Heightfield(planeData, { elementSize: props.plane.geometry.parameters.width / (widthSegments - 1) });
    const terrainBody = new Body({ mass: 0 });
    terrainBody.addShape(
      terrainShape,
      new Vec3(
        -props.plane.geometry.parameters.width / 2,
        // X 偏移到左下角
        -props.plane.geometry.parameters.height / 2,
        0
      )
    );
    terrainBody.quaternion.set(...props.plane.quaternion.toArray());
    world.addBody(terrainBody);
    const { onRender } = _l();
    onRender(({ delta }) => {
      world.fixedStep(1 / 120, delta);
      sphereBodyList.forEach((sphereBody, index) => {
        props.sphereGroup.children[index].position.copy(sphereBody.position);
      });
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock,createElementVNode:_createElementVNode$1,unref:_unref$1,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = ["position"];
const _hoisted_2 = ["geometry", "rotation-x"];
const _hoisted_3 = ["side"];
const {ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "terrainBallsThree",
  setup(__props) {
    const sphereGroupRef = ref();
    const planeRef = ref();
    const noise2D = createNoise2D();
    const elevation = (x, y) => {
      var major = 0.8 * 4 * noise2D(0.1 * x, 0.1 * y), minor = 0.2 * noise2D(0.3 * x, 0.3 * y);
      return (major + minor) * 1.2;
    };
    const planeGeometry = new THREE.PlaneGeometry(100, 100, 49, 49);
    const pos = planeGeometry.getAttribute("position");
    for (var i = 0; i < pos.count; i++) pos.setZ(i, elevation(pos.getX(i), pos.getY(i)));
    planeGeometry.computeBoundingSphere();
    planeGeometry.computeVertexNormals();
    console.log(planeGeometry);
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresGroup", {
          ref_key: "sphereGroupRef",
          ref: sphereGroupRef
        }, [
          (_openBlock$1(), _createElementBlock(_Fragment, null, _renderList(10, (i2) => {
            return _openBlock$1(), _createElementBlock(_Fragment, { key: i2 }, [
              (_openBlock$1(), _createElementBlock(_Fragment, null, _renderList(10, (j) => {
                return _createElementVNode$1("TresMesh", {
                  key: j,
                  position: [i2 * 10 - 55, 26, j * 10 - 55],
                  "cast-shadow": ""
                }, [..._cache[0] || (_cache[0] = [
                  _createElementVNode$1("TresSphereGeometry", { args: [0.6, 16, 16] }, null, -1),
                  _createElementVNode$1("TresMeshStandardMaterial", { color: "#ffffff" }, null, -1)
                ])], 8, _hoisted_1);
              }), 64))
            ], 64);
          }), 64))
        ], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "planeRef",
          ref: planeRef,
          geometry: _unref$1(planeGeometry),
          "rotation-x": -Math.PI / 2,
          "receive-shadow": ""
        }, [
          _createElementVNode$1("TresMeshPhysicalMaterial", {
            roughness: 1,
            metalness: 0,
            color: "gray",
            side: THREE.DoubleSide
          }, null, 8, _hoisted_3)
        ], 8, _hoisted_2),
        planeRef.value ? (_openBlock$1(), _createBlock$1(_sfc_main$2, {
          key: 0,
          sphereGroup: sphereGroupRef.value,
          plane: planeRef.value
        }, null, 8, ["sphereGroup", "plane"])) : _createCommentVNode("", true)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "terrainBalls",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05,
      enableZoom: true,
      autoRotate: false
    });
    const TDirectionalLight = shallowRef();
    watchEffect(() => {
      if (TDirectionalLight.value) {
        TDirectionalLight.value.shadow.mapSize.set(1e3, 1e3);
        TDirectionalLight.value.shadow.camera.near = 0.5;
        TDirectionalLight.value.shadow.camera.far = 5e4;
        TDirectionalLight.value.shadow.camera.top = 20;
        TDirectionalLight.value.shadow.camera.right = 20;
        TDirectionalLight.value.shadow.camera.left = -20;
        TDirectionalLight.value.shadow.camera.bottom = -20;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps(state, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [110, 70, 20],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
          _createElementVNode("TresDirectionalLight", {
            ref_key: "TDirectionalLight",
            ref: TDirectionalLight,
            position: [10, 8, 4],
            intensity: 2,
            "cast-shadow": ""
          }, null, 512),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [10, 2, 4],
            intensity: 2,
            "cast-shadow": ""
          }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=terrainBalls.BUUURU921767105581793.js.map
