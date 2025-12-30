import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { createNoise2D } from './simplex-noise.W37CxtWd1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["geometry", "rotation-x"];
const _hoisted_2 = ["rnda", "rndb", "rndc", "rndd"];
const _hoisted_3 = ["args"];
const _hoisted_4 = ["side", "map"];
const THREE = await importShared('three');
const {shallowRef} = await importShared('vue');
const lineLength = 20;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "windLineMesh",
  setup(__props) {
    const noise2D = createNoise2D();
    const elevation = (x, y) => {
      if (x * x > 24.9) return -1;
      if (y * y > 24.9) return -1;
      var major = 0.6 * noise2D(0.1 * x, 0.1 * y), minor = 0.2 * noise2D(0.3 * x, 0.3 * y);
      return major + minor;
    };
    const geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    const pos = geometry.getAttribute("position");
    for (var i = 0; i < pos.count; i++) pos.setZ(i, elevation(pos.getX(i), pos.getY(i)));
    geometry.computeVertexNormals();
    const linePositionCount = lineLength * 2 + 2;
    const canvas = document.createElement("CANVAS");
    canvas.width = 64;
    canvas.height = 8;
    const context = canvas.getContext("2d");
    const gradient = context?.createLinearGradient(0, 0, 64, 0);
    gradient?.addColorStop(0, "rgba(255,255,255,0)");
    gradient?.addColorStop(0.5, "rgba(255,255,255,128)");
    gradient?.addColorStop(1, "rgba(255,255,255,0)");
    if (context && gradient) {
      context.fillStyle = gradient;
      context.fillRect(0, 0, 64, 8);
    }
    const texture = new THREE.CanvasTexture(canvas);
    const group = shallowRef(null);
    const { onBeforeRender } = _l();
    onBeforeRender(({ elapsed }) => {
      if (group.value) {
        group.value.children.forEach((mesh, index) => {
          const time = elapsed / 5;
          const posl = mesh.geometry.getAttribute("position");
          for (let i2 = 0; i2 < linePositionCount; i2++) {
            const t = time + i2 % (lineLength + 1) / 60;
            const x = 3 * Math.sin(5 * mesh.rnda * t + 6 * mesh.rndb);
            const y = 3 * Math.cos(5 * mesh.rndc * t + 6 * mesh.rndd);
            const z = elevation(x, y) + 0.5 + 0.04 * (i2 > lineLength ? 1 : -1) * Math.cos((i2 % (lineLength + 1) - 10) / 8);
            posl.setXYZ(i2, x, z, -y);
          }
          posl.needsUpdate = true;
        });
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          geometry: _unref$1(geometry),
          "rotation-x": -Math.PI / 2
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresMeshPhysicalMaterial", {
            roughness: 1,
            metalness: 0,
            color: "seagreen"
          }, null, -1)
        ])], 8, _hoisted_1),
        _createElementVNode$1("TresGroup", {
          ref_key: "group",
          ref: group
        }, [
          (_openBlock$1(), _createElementBlock(_Fragment, null, _renderList(12, (_item, index) => {
            return _createElementVNode$1("TresMesh", {
              key: index,
              rnda: Math.random(),
              rndb: Math.random(),
              rndc: Math.random(),
              rndd: Math.random()
            }, [
              _createElementVNode$1("TresPlaneGeometry", {
                args: [1, 1, lineLength, 1]
              }, null, 8, _hoisted_3),
              _createElementVNode$1("TresMeshBasicMaterial", {
                transparent: "",
                depthWrite: false,
                side: THREE.DoubleSide,
                map: _unref$1(texture)
              }, null, 8, _hoisted_4)
            ], 8, _hoisted_2);
          }), 64))
        ], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "windLine",
  setup(__props) {
    const tcConfig = {
      clearColor: "deepskyblue",
      windowSize: true,
      antialias: true
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 2.5, 8],
            fov: 45,
            near: 0.1,
            far: 1e3
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            autoRotate: "",
            autoRotateSpeed: 0.5
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 0.5 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [1, 1, 1],
            intensity: 1
          }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=windLine.Dlpqq17L1767105581793.js.map
