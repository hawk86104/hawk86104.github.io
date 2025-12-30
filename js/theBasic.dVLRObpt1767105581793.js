import { importShared, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { World, NaiveBroadphase, Sphere, Body, Material, Plane, ContactMaterial } from './cannon-es.EJ5TUo2o1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');
const mass = 10;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "theBasicCannon",
  props: {
    sphere: {
      default: null
    },
    sphere2: {
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
    world.broadphase = new NaiveBroadphase();
    world.defaultContactMaterial.contactEquationRelaxation = 5;
    world.defaultContactMaterial.contactEquationStiffness = 1e7;
    const sphereSize = props.sphere.geometry.parameters.radius;
    const sphereShape = new Sphere(sphereSize);
    const sphere1Body = new Body({ mass });
    sphere1Body.addShape(sphereShape);
    sphere1Body.position.copy(props.sphere.position);
    sphere1Body.material = new Material({ restitution: 10 });
    const sphere2Body = new Body({ mass });
    sphere2Body.addShape(sphereShape);
    sphere2Body.position.copy(props.sphere2.position);
    sphere2Body.material = new Material({ restitution: 1 });
    const planeShape = new Plane();
    const planeBody = new Body({ mass: 0 });
    planeBody.addShape(planeShape);
    planeBody.position.copy(props.plane.position);
    planeBody.quaternion.set(...props.plane.quaternion.toArray());
    planeBody.material = new Material();
    const sph1_plane = new ContactMaterial(planeBody.material, sphere1Body.material, { friction: 0, restitution: 0.7 });
    const sph2_plane = new ContactMaterial(planeBody.material, sphere2Body.material, { friction: 0, restitution: 0.9 });
    world.addContactMaterial(sph1_plane);
    world.addContactMaterial(sph2_plane);
    world.addBody(sphere1Body);
    world.addBody(sphere2Body);
    world.addBody(planeBody);
    const { onRender } = _l();
    onRender(({ delta }) => {
      world.fixedStep(1 / 120, delta);
      props.sphere.position.copy(sphere1Body.position);
      props.sphere2.position.copy(sphere2Body.position);
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,mergeProps:_mergeProps,withCtx:_withCtx,createTextVNode:_createTextVNode,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation"];
const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,ref,shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "theBasic",
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
    const sphereRef = ref();
    const sphereRef2 = ref();
    const planeRef = ref();
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
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ol), _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[3] || (_cache[3] = _createElementVNode("TresPerspectiveCamera", {
              position: [15, 15, 15],
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            _cache[4] || (_cache[4] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
            _createElementVNode("TresMesh", {
              ref_key: "sphereRef",
              ref: sphereRef,
              position: [0, 6, 0],
              "cast-shadow": ""
            }, [..._cache[0] || (_cache[0] = [
              _createElementVNode("TresSphereGeometry", { args: [1.5, 32, 32] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", { color: "#006060" }, null, -1)
            ])], 512),
            _createElementVNode("TresMesh", {
              ref_key: "sphereRef2",
              ref: sphereRef2,
              position: [4, 6, 0],
              "cast-shadow": ""
            }, [..._cache[1] || (_cache[1] = [
              _createElementVNode("TresSphereGeometry", { args: [1.5, 32, 32] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", { color: "#ff6060" }, null, -1)
            ])], 512),
            _createElementVNode("TresMesh", {
              ref_key: "planeRef",
              ref: planeRef,
              rotation: [-Math.PI / 2, 0, 0],
              position: [0, -0.01, 0],
              "receive-shadow": ""
            }, [..._cache[2] || (_cache[2] = [
              _createElementVNode("TresPlaneGeometry", { args: [20, 20, 20, 20] }, null, -1),
              _createElementVNode("TresMeshToonMaterial", null, null, -1)
            ])], 8, _hoisted_1),
            planeRef.value ? (_openBlock(), _createBlock(_sfc_main$1, {
              key: 0,
              sphere: sphereRef.value,
              sphere2: sphereRef2.value,
              plane: planeRef.value
            }, null, 8, ["sphere", "sphere2", "plane"])) : _createCommentVNode("", true),
            _createElementVNode("TresDirectionalLight", {
              ref_key: "TDirectionalLight",
              ref: TDirectionalLight,
              position: [10, 8, 4],
              intensity: 1,
              "cast-shadow": ""
            }, null, 512),
            _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
              position: [10, 2, 4],
              intensity: 1,
              "cast-shadow": ""
            }, null, -1)),
            _cache[6] || (_cache[6] = _createElementVNode("TresGridHelper", null, null, -1))
          ]),
          _: 1
        }, 16),
        _cache[7] || (_cache[7] = _createElementVNode("h1", { class: "text-center text-white w-full absolute" }, [
          _createTextVNode(" 使用cannon-es库 API详见:"),
          _createElementVNode("a", {
            target: "_black",
            href: "https://pmndrs.github.io/cannon-es/docs/"
          }, "cannon-es/docs")
        ], -1))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=theBasic.dVLRObpt1767105581793.js.map
