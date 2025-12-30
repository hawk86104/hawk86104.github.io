import { importShared, _l, Kk, Qz } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {withAsyncContext:_withAsyncContext$2,defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$2 = ["object"];
const {watch: watch$1,toRaw: toRaw$2} = await importShared('vue');
const speed = 0.2;
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "airplane",
  props: {
    planet: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { scene } = ([__temp, __restore] = _withAsyncContext$2(() => useGLTF("./plugins/earthSample/model/lowpolyPlanet/airplane.gltf")), __temp = await __temp, __restore(), __temp);
    const airplane = scene;
    airplane.rotation.set(0, Math.PI, 0);
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
    airplane.updateMatrixWorld();
    const { onBeforeRender } = _l();
    watch$1(
      () => props.planet,
      (planet) => {
        if (!planet) return;
        planet.geometry.computeBoundingSphere();
        const radius = Math.abs(planet.geometry.boundingSphere?.radius | 1);
        airplane.position.set(radius, 0, 0);
        airplane.lookAt(planet.position);
      }
    );
    let angle = 0;
    onBeforeRender(({ delta }) => {
      if (!airplane || !props.planet) return;
      const radius = Math.abs(props.planet.geometry.boundingSphere.radius) + 0.5;
      angle += delta * speed;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      airplane.position.x = x;
      airplane.position.z = z;
      airplane.rotation.z = -Math.PI / 2;
      airplane.rotation.y = -angle;
      airplane.updateMatrixWorld();
    });
    return (_ctx, _cache) => {
      return _openBlock$3(), _createElementBlock$3("primitive", {
        object: toRaw$2(_unref$3(airplane))
      }, null, 8, _hoisted_1$2);
    };
  }
});

const {withAsyncContext:_withAsyncContext$1,defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {watch,toRaw: toRaw$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "cloud",
  props: {
    planet: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { scene } = ([__temp, __restore] = _withAsyncContext$1(() => useGLTF("./plugins/earthSample/model/lowpolyPlanet/cloud.gltf")), __temp = await __temp, __restore(), __temp);
    const cloud = scene.children[0];
    cloud.castShadow = true;
    function random(min, max) {
      const randomNumber = Math.random() * (max - min) + min;
      return Math.random() < 0.5 ? -randomNumber : randomNumber;
    }
    cloud.position.set(random(-8, 8), random(0.5, 1), random(-8, 8));
    const size = random(0.5, 1);
    cloud.scale.set(size, size, size);
    cloud.updateMatrixWorld();
    watch(
      () => props.planet,
      (planet) => {
        if (!planet) return;
        cloud.lookAt(planet.position);
        cloud.updateMatrixWorld();
      }
    );
    const { onBeforeRender } = _l();
    let angle = random(-1, 1) * Math.PI;
    const speed = Math.random() / 10;
    onBeforeRender(({ delta }) => {
      if (!cloud) return;
      const radius = Math.abs(props.planet.geometry.boundingSphere.radius - 0.5);
      angle += delta * speed;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      cloud.position.x = x;
      cloud.position.z = z;
      cloud.rotation.y = -angle;
      cloud.lookAt(props.planet.position);
      cloud.updateMatrixWorld();
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", {
        object: toRaw$1(_unref$2(scene)),
        "cast-shadow": ""
      }, null, 8, _hoisted_1$1);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const {toRaw} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "planet",
  async setup(__props) {
    let __temp, __restore;
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      "./plugins/earthSample/model/lowpolyPlanet/planet.gltf"
    )), __temp = await __temp, __restore(), __temp);
    const planet = nodes.Planet;
    const icosphere = nodes.Icosphere;
    planet.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      if (!planet) return;
      planet.rotation.y += delta * 0.04;
      planet.rotation.z += delta * 0.02;
      planet.rotation.x += delta * 0.05;
      planet.updateMatrixWorld();
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("primitive", {
          object: toRaw(_unref$1(planet))
        }, null, 8, _hoisted_1),
        _createVNode$1(_sfc_main$3, {
          planet: toRaw(_unref$1(icosphere))
        }, null, 8, ["planet"]),
        (_openBlock$1(), _createElementBlock$1(_Fragment$1, null, _renderList([1, 2, 3, 4, 5, 6, 7, 8, 9], (cloud) => {
          return _createVNode$1(_sfc_main$2, {
            key: cloud,
            planet: toRaw(_unref$1(icosphere))
          }, null, 8, ["planet"]);
        }), 64))
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,unref:_unref,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const {PCFSoftShadowMap,SRGBColorSpace} = await importShared('three');

const {shallowRef} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "lowpolyPlanet",
  setup(__props) {
    const gl = {
      clearColor: "#11101B",
      shadows: true,
      alpha: false,
      outputColorSpace: SRGBColorSpace,
      shadowMapType: PCFSoftShadowMap,
      useLegacyLights: true
    };
    const yRotation = shallowRef(0);
    const onLoop = ({ delta }) => {
      yRotation.value += 0.02 * delta;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_sfc_main$4),
        _createVNode(_component_TresCanvas, _mergeProps(gl, {
          "window-size": "",
          onLoop
        }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 1, 5],
              fov: 75,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", {
              color: "#484068",
              intensity: 1
            }, null, -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _createVNode(_unref(Qz), {
              rotation: [0, yRotation.value, 0],
              radius: 50,
              depth: 50,
              count: 5e3,
              size: 0.3,
              "size-attenuation": true
            }, null, 8, ["rotation"]),
            _cache[2] || (_cache[2] = _createElementVNode("TresPointLight", {
              color: "#1BFFEF",
              position: [0, 0, -8],
              intensity: 80,
              "cast-shadow": ""
            }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
              position: [0, 2, 4],
              intensity: 3,
              "cast-shadow": "",
              "shadow-mapSize-width": 2048,
              "shadow-mapSize-height": 2048
            }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=lowpolyPlanet.B1thbIgy1767105581793.js.map
