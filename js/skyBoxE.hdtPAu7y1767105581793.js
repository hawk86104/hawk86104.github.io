import { importShared, zr, Kk, Tz } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "skyBoxEmesh",
  props: {
    texture: {}
  },
  setup(__props) {
    const props = __props;
    const { scene } = zr();
    const loader = new THREE$1.CubeTextureLoader();
    const texture = loader.setPath(props.texture).load(["pos-x.jpg", "neg-x.jpg", "pos-y.jpg", "neg-y.jpg", "pos-z.jpg", "neg-z.jpg"]);
    scene.value.environment = texture;
    scene.value.background = texture;
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "skyBoxE",
  setup(__props) {
    const tcConfig = {
      clearColor: "#201919",
      windowSize: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      toneMappingExposure: 0.8
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _normalizeProps(_guardReactiveProps(tcConfig)), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 15, 15],
            fov: 45,
            near: 0.1,
            far: 1e4,
            "look-at": [0, 0, 0]
          }, null, -1)),
          _createVNode(_unref(Kk), { enableDamping: "" }),
          _createVNode(_unref(Tz), {
            args: [3, 3, 3],
            color: "orange",
            position: [-13, 0, 1]
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", {
            position: [10, 2, -4],
            "cast-shadow": ""
          }, [
            _createElementVNode("TresBoxGeometry", { args: [2, 2, 2] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [0, 0, 0] }, [
            _createElementVNode("TresTorusKnotGeometry", { args: [3, 1, 64, 8, 2, 3] }),
            _createElementVNode("TresMeshStandardMaterial", {
              color: 16777215,
              metalness: 1,
              roughness: 0.14
            })
          ], -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1, {
                texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/6jpg/"
              }, null, 8, ["texture"])
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=skyBoxE.hdtPAu7y1767105581793.js.map
