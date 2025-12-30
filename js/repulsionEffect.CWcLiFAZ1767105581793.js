import { importShared, Pz, Sz, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { degToRad } from './MathUtils.BRweaORn1767105581793.js';
import { gsapWithCSS } from './index.Dxfioss_1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useSeek } from './useSeek.BoK5Ffx41767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref,withCtx:_withCtx$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["position"];
const _hoisted_2 = ["position"];
const {shallowRef,computed,watch,reactive} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "repulsionEffectSence",
  setup(__props) {
    const meshesRef = shallowRef(null);
    const shapesGroupRef = shallowRef(null);
    const grid = reactive({ rows: 6, cols: 14, gutter: 2.2 });
    const gridOffset = computed(() => {
      const x = (grid.cols - 1) * grid.gutter / 2;
      const z = (grid.rows - 1) * grid.gutter / 2;
      return { x, z };
    });
    const { seekAll } = useSeek();
    watch(shapesGroupRef, () => {
      meshesRef.value = seekAll(shapesGroupRef.value, "type", "Mesh");
      meshesRef.value.forEach((mesh) => {
        mesh.initialRotation = {
          x: mesh.name === "torus" ? degToRad(90) : mesh.rotation.x,
          y: mesh.rotation.y,
          z: mesh.name === "cone" || mesh.name === "cylinder" ? degToRad(-180) : mesh.rotation.z
        };
        mesh.rotation.x = mesh.initialRotation.x;
        mesh.rotation.y = mesh.initialRotation.y;
        mesh.rotation.z = mesh.initialRotation.z;
      });
    });
    const onPointerMove = ({ point }) => {
      if (!meshesRef.value) return;
      const { x, y, z } = point;
      meshesRef.value.forEach((mesh) => {
        const mouseDistance = distance(x, z, mesh.position.x, mesh.position.z);
        const y2 = map(mouseDistance, 7, 0, 0, 6);
        gsapWithCSS.to(mesh.position, { y: y2 < 1 ? 1 : y2, duration: 0.3 });
        const scaleFactor = mesh.position.y / 1.2;
        const scale = scaleFactor < 1 ? 1 : scaleFactor;
        gsapWithCSS.to(mesh.scale, {
          ease: "expo.out",
          x: scale,
          y: scale,
          z: scale,
          duration: 0.3
        });
        gsapWithCSS.to(mesh.rotation, {
          duration: 0.7,
          ease: "expo.out",
          x: map(mesh.position.y, -1, 1, degToRad(270), mesh.initialRotation.x),
          z: map(mesh.position.y, -1, 1, degToRad(-90), mesh.initialRotation.z),
          y: map(mesh.position.y, -1, 1, degToRad(45), mesh.initialRotation.y)
        });
      });
    };
    const distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    const map = (value, start1, stop1, start2, stop2) => (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    const getShapeType = (row, col) => {
      const randomIndex = Math.floor(Math.random() * 3);
      if (randomIndex === 0) return "torus";
      if (randomIndex === 1) return "cone";
      return "cylinder";
    };
    const computePosition = (col, row) => [(col - 1) * grid.gutter - gridOffset.value.x, 0, (row - 1) * grid.gutter - gridOffset.value.z];
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createVNode$1(_unref(Pz), {
          "receive-shadow": "",
          args: [100, 100],
          "rotation-x": -Math.PI / 2,
          position: [0, 0, 0],
          onPointermove: onPointerMove
        }, {
          default: _withCtx$1(() => [..._cache[0] || (_cache[0] = [
            _createElementVNode$1("TresShadowMaterial", {
              transparent: "",
              opacity: 0.3
            }, null, -1)
          ])]),
          _: 1
        }, 8, ["rotation-x"]),
        _createElementVNode$1("TresGroup", {
          ref_key: "shapesGroupRef",
          ref: shapesGroupRef,
          name: "shapes"
        }, [
          (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList(grid.rows, (row) => {
            return _openBlock$1(), _createElementBlock$1("TresGroup", {
              key: `row-${row}`
            }, [
              (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList(grid.cols, (col) => {
                return _openBlock$1(), _createElementBlock$1("TresGroup", {
                  key: `col-${col}-${row}`
                }, [
                  getShapeType() === "torus" ? (_openBlock$1(), _createElementBlock$1("TresMesh", {
                    key: 0,
                    name: "torus",
                    "cast-shadow": "",
                    "receive-shadow": "",
                    position: computePosition(col, row)
                  }, [..._cache[1] || (_cache[1] = [
                    _createElementVNode$1("TresTorusGeometry", { args: [0.25, 0.08, 30, 200] }, null, -1),
                    _createElementVNode$1("TresMeshPhysicalMaterial", {
                      color: "#3e2917",
                      metalness: 0.58,
                      emissive: "#000000",
                      roughness: 0.05
                    }, null, -1)
                  ])], 8, _hoisted_1)) : getShapeType() === "cone" ? (_openBlock$1(), _createBlock(_unref(Sz), {
                    key: 1,
                    name: "cone",
                    args: [0.3, 0.5, 32],
                    "cast-shadow": "",
                    "receive-shadow": "",
                    position: computePosition(col, row)
                  }, {
                    default: _withCtx$1(() => [..._cache[2] || (_cache[2] = [
                      _createElementVNode$1("TresMeshPhysicalMaterial", {
                        color: "#3e2917",
                        metalness: 0.58,
                        emissive: "#000000",
                        roughness: 0.05
                      }, null, -1)
                    ])]),
                    _: 1
                  }, 8, ["position"])) : (_openBlock$1(), _createElementBlock$1("TresMesh", {
                    key: 2,
                    name: "cylinder",
                    "cast-shadow": "",
                    "receive-shadow": "",
                    position: computePosition(col, row)
                  }, [..._cache[3] || (_cache[3] = [
                    _createElementVNode$1("TresCylinderGeometry", { args: [0.3, 0.3, 0.2, 64] }, null, -1),
                    _createElementVNode$1("TresMeshPhysicalMaterial", {
                      color: "#3e2917",
                      metalness: 0.58,
                      emissive: "#000000",
                      roughness: 0.05
                    }, null, -1)
                  ])], 8, _hoisted_2))
                ]);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,createVNode:_createVNode,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "repulsionEffect",
  setup(__props) {
    const gl = {
      alpha: true,
      shadows: true,
      powerPreference: "high-performance",
      windowSize: true,
      clearAlpha: 0
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _cache[8] || (_cache[8] = _createElementVNode("div", { class: "repulsion-effect__content" }, [
          _createElementVNode("h2", null, "ICE.GL"),
          _createElementVNode("h3", null, "图形学社区")
        ], -1)),
        _cache[9] || (_cache[9] = _createElementVNode("div", { class: "repulsion-effect__bg" }, null, -1)),
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(gl)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 65, 0],
              "rotation-x": -1.57,
              fov: 20
            }, null, -1)),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { color: "#ffffff" }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresPointLight", {
              color: "#fff000",
              intensity: 5,
              decay: 0,
              position: [0, 5, -20]
            }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresPointLight", {
              color: "#79573e",
              intensity: 5,
              decay: 0,
              position: [35, 5, 0]
            }, null, -1)),
            _cache[4] || (_cache[4] = _createElementVNode("TresPointLight", {
              color: "#c27439",
              intensity: 5,
              decay: 0,
              position: [-35, 5, 0]
            }, null, -1)),
            _cache[5] || (_cache[5] = _createElementVNode("TresPointLight", {
              color: "#fff000",
              intensity: 5,
              decay: 0,
              position: [0, 5, 20]
            }, null, -1)),
            _cache[6] || (_cache[6] = _createElementVNode("TresSpotLight", {
              color: "#7bccd7",
              decay: 0,
              "cast-shadow": "",
              "shadow-mapSize-width": 2048,
              "shadow-mapSize-height": 2048,
              position: [0, 25, 0]
            }, null, -1)),
            _cache[7] || (_cache[7] = _createElementVNode("TresRectAreaLight", {
              color: "#341212",
              decay: 0,
              width: 1e3,
              height: 1e3,
              position: [5, 20, 50],
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

const repulsionEffect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3b1ae04"]]);

export { repulsionEffect as default };
//# sourceMappingURL=repulsionEffect.CWcLiFAZ1767105581793.js.map
