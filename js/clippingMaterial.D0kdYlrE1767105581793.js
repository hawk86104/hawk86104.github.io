import { importShared, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,resolveComponent:_resolveComponent,withCtx:_withCtx,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = ["args"];
const _hoisted_2 = ["color", "side", "clipIntersection"];
const {ref,watchEffect} = await importShared('vue');
const {Plane,Vector3,DoubleSide,MathUtils} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "clippingMaterial",
  setup(__props) {
    const tcRef = ref();
    const meshList = [];
    for (let index = 1; index < 30; index += 2) {
      meshList.push(index);
    }
    const clipPlanes = [new Plane(new Vector3(1, 0, 0), 0), new Plane(new Vector3(0, -1, 0), 0), new Plane(new Vector3(0, 0, -1), 0)];
    const params = {
      clipIntersection: true};
    watchEffect(() => {
      if (tcRef.value) {
        const renderer = tcRef.value.context.renderer.instance;
        renderer.localClippingEnabled = true;
      }
    });
    const paneControl = new Pane({
      title: "裁剪参数",
      expanded: true
    });
    paneControl.addBinding(clipPlanes[0], "constant", {
      label: "x",
      min: -1,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(clipPlanes[1], "constant", {
      label: "y",
      min: -1,
      max: 1,
      step: 0.1
    });
    paneControl.addBinding(clipPlanes[2], "constant", {
      label: "z",
      min: -1,
      max: 1,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        ref_key: "tcRef",
        ref: tcRef,
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 40,
            near: 0.1,
            far: 200,
            position: [-1.5, 2.5, 3]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", { args: [2, 10] }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresHemisphereLight", {
            args: [16777215, 526344, 4.5],
            position: [-1.25, 1, 1.25]
          }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresGroup", null, [
            (_openBlock(), _createElementBlock(_Fragment, null, _renderList(meshList, (i) => {
              return _createElementVNode("TresMesh", { key: i }, [
                _createElementVNode("TresSphereGeometry", {
                  args: [i / 30, 48, 24]
                }, null, 8, _hoisted_1),
                _createElementVNode("TresMeshLambertMaterial", {
                  color: [_unref(MathUtils).randInt(0.1, 1), _unref(MathUtils).randInt(0, 1), _unref(MathUtils).randInt(0, 1)],
                  side: _unref(DoubleSide),
                  clippingPlanes: clipPlanes,
                  clipIntersection: params.clipIntersection
                }, null, 8, _hoisted_2)
              ]);
            }), 64))
          ])
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=clippingMaterial.D0kdYlrE1767105581793.js.map
