import { importShared, Fs, _l, no, Kk } from './index.BxB45aCK1767105581793.js';
import { __webpack_exports__Block, __webpack_exports__Text, __webpack_exports__update } from './three-mesh-ui.module.CjQAT-M_1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const THREE$1 = await importShared('three');
const textContent = "This is a basic example of ThreeMeshUI.\n It shows a simple text block with a background and some inline text.";
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "basicStart",
  setup(__props) {
    const rootBlock = new __webpack_exports__Block({
      name: "rootBlock",
      width: 1.2,
      height: "auto",
      padding: 0.05,
      boxSizing: "border-box",
      justifyContent: "center",
      textAlign: "left",
      borderRadius: 0.015,
      backgroundColor: 0,
      backgroundOpacity: 0.5,
      fontSize: 0.055,
      fontFamily: "./plugins/UIdemo/fonts/msdf/regular.json",
      fontTexture: "./plugins/UIdemo/fonts/msdf/regular.png",
      backgroundSide: THREE$1.DoubleSide
    });
    rootBlock.position.set(0, 0.6, 0.5);
    rootBlock.rotation.x = -0.55;
    rootBlock.backgroundMaterial.depthWrite = false;
    const inline = new __webpack_exports__Text({
      textContent,
      fontSide: THREE$1.DoubleSide
      // fontOpacity: 0.3,
    });
    rootBlock.add(inline);
    const { scene } = Fs();
    scene.value.add(rootBlock);
    const { onRender } = _l();
    onRender(() => {
      inline.set({ textContent: textContent + "\n" + Math.random() });
      __webpack_exports__update();
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {watch} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "imgBlock",
  setup(__props) {
    const rootBlock = new __webpack_exports__Block({
      width: 0.6 * 2,
      height: 0.399 * 2,
      margin: 0.025,
      padding: 0,
      textAlign: "left",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "end",
      backgroundSide: THREE.DoubleSide
    });
    rootBlock.position.set(0, -0.5 + 0.4, 1);
    rootBlock.rotation.x = -0.33;
    const { state: pTexture } = no("./plugins/industry4/preview/showLambo.png");
    watch(
      () => pTexture,
      (mapv) => {
        if (mapv.value) {
          rootBlock.set({
            backgroundColor: new THREE.Color(16777215),
            backgroundOpacity: 1,
            backgroundImage: mapv.value
          });
        }
      },
      { deep: true }
    );
    rootBlock.backgroundMaterial.depthWrite = false;
    const caption = new __webpack_exports__Text({
      padding: 0.025,
      textAlign: "center",
      textContent: "Lambo Car",
      backgroundColor: 0,
      backgroundOpacity: 0.5,
      fontSize: 0.04,
      fontFamily: "./plugins/UIdemo/fonts/msdf/regular.json",
      fontTexture: "./plugins/UIdemo/fonts/msdf/regular.png",
      fontSide: THREE.DoubleSide
    });
    rootBlock.add(caption);
    const { scene } = Fs();
    scene.value.add(rootBlock);
    const { onRender } = _l();
    onRender(() => {
      __webpack_exports__update();
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "threeMeshUIstyle",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#999",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[1] || (_cache[1] = _createElementVNode("TresMesh", null, [
            _createElementVNode("TresBoxGeometry"),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$2),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=threeMeshUIstyle.DrKeZTto1767105581793.js.map
