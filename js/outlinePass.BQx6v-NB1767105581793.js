import { importShared, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { _t, Kt } from './tres-post-processing.CBYUVLxv1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1 = { position: [2.5, 1.75, 2] };
const _hoisted_2 = ["args"];
const _hoisted_3 = { position: [-1.5, 0.75, 0] };
const _hoisted_4 = ["args"];
const {ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "outlinePass",
  setup(__props) {
    const outlinedObjects = ref([]);
    const gl = {
      clearColor: "#121212"
    };
    function onClick(ev) {
      if (ev) {
        let hasIndex = -1;
        const outlinedObjectsArr = [...outlinedObjects.value];
        outlinedObjectsArr.forEach((obj, index) => {
          if (obj.uuid === ev.object.uuid) {
            hasIndex = index;
          }
        });
        if (hasIndex !== -1) {
          outlinedObjectsArr.splice(hasIndex, 1);
        } else {
          outlinedObjectsArr.push(ev.object);
        }
        outlinedObjects.value = outlinedObjectsArr;
        console.log("outlinedObjects", outlinedObjects.value);
      }
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ol), _mergeProps({ "window-size": "" }, gl), {
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[5] || (_cache[5] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _createElementVNode("TresMesh", {
            position: [-5, 0, 0],
            onClick,
            scale: 2
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
            _createElementVNode("TresMeshNormalMaterial", null, null, -1)
          ])]),
          _createElementVNode("TresMesh", {
            position: [1, 0.5, 1],
            onClick
          }, [..._cache[1] || (_cache[1] = [
            _createElementVNode("TresBoxGeometry", null, null, -1),
            _createElementVNode("TresMeshStandardMaterial", { color: "hotpink" }, null, -1)
          ])]),
          _createElementVNode("TresGroup", { onClick }, [
            _createElementVNode("TresMesh", _hoisted_1, [
              _createElementVNode("TresConeGeometry", {
                args: [1, 1.5, 4, 1, false, Math.PI * 0.25]
              }, null, 8, _hoisted_2),
              _cache[2] || (_cache[2] = _createElementVNode("TresMeshStandardMaterial", { color: "green" }, null, -1))
            ]),
            _createElementVNode("TresMesh", _hoisted_3, [
              _createElementVNode("TresConeGeometry", {
                args: [1, 1.5, 4, 1, false, Math.PI * 0.25]
              }, null, 8, _hoisted_4),
              _cache[3] || (_cache[3] = _createElementVNode("TresMeshStandardMaterial", { color: "aqua" }, null, -1))
            ])
          ]),
          _createVNode(_unref(_t), null, {
            default: _withCtx(() => [
              _createVNode(_unref(Kt), {
                outlinedObjects: outlinedObjects.value,
                "edge-strength": 2e7,
                "pulse-speed": 1,
                "visible-edge-color": "#ffff00"
              }, null, 8, ["outlinedObjects"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=outlinePass.BQx6v-NB1767105581793.js.map
