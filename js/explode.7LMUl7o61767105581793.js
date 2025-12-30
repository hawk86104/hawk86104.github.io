import { importShared, NA, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { Group, Tween } from './tween.esm.DW3Z4hQ71767105581793.js';
import { _ } from './lodash.ClidmjoF1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,withCtx:_withCtx,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = ["object"];
const {reactive,onMounted,watch} = await importShared('vue');
const THREE = await importShared('three');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "explode",
  setup(__props) {
    const { state: pState } = NA(`${"https://opensource.cdn.icegl.cn"}/model/operationTool/湖中小亭/湖中小亭.gltf`);
    const state = reactive({
      alpha: true,
      antialias: true
    });
    const twGroup = new Group();
    const disintegrate = function() {
      pState?.value.scene.children.forEach((child, index) => {
        if (child.isMesh) {
          const boundingBox = new THREE.Box3().setFromObject(child);
          const childCenter = new THREE.Vector3();
          boundingBox.getCenter(childCenter);
          twGroup.add(new Tween(childCenter).to(new THREE.Vector3(0, 0, 0), 3e3).onUpdate((val) => {
            child.position.copy(val);
          }).start().onComplete((val) => {
          }));
        }
      });
    };
    const explode = function() {
      pState?.value.scene.children.forEach((child, index) => {
        const origin = _.cloneDeep(child.position);
        child.userData.explode = {
          state: false,
          explode: origin
        };
        if (child.isMesh) {
          const boundingBox = new THREE.Box3().setFromObject(child);
          const childCenter = new THREE.Vector3();
          boundingBox.getCenter(childCenter);
          const pos = childCenter.multiplyScalar(2);
          twGroup.add(new Tween(origin).to(pos, 3e3).onUpdate((val) => {
            child.position.copy(val);
          }).start().onComplete((val) => {
          }));
        }
      });
    };
    onMounted(() => {
      const paneControl = new Pane({
        title: "炸开与还原",
        expanded: true
      });
      const f1 = paneControl.addFolder({
        title: "参数"
      });
      f1.addButton({
        title: "炸开",
        label: "炸开"
        // optional
      }).on("click", () => {
        explode();
      });
      f1.addButton({
        title: "还原",
        label: "还原"
        // optional
      }).on("click", () => {
        disintegrate();
      });
    });
    watch(
      () => pState.value,
      (state2) => {
        if (!state2?.scene) return;
        state2.scene.updateMatrixWorld(true);
      }
    );
    const onLoop = function() {
      twGroup?.update();
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps({
        clearColor: "#201919",
        "window-size": ""
      }, state, { onLoop }), {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            fov: 60,
            near: 0.1,
            far: 2e3,
            position: [0, 10, -28]
          }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _unref(pState) ? (_openBlock(), _createElementBlock("primitive", {
                key: 0,
                object: _unref(pState)?.scene
              }, null, 8, _hoisted_1)) : _createCommentVNode("", true)
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
//# sourceMappingURL=explode.7LMUl7o61767105581793.js.map
