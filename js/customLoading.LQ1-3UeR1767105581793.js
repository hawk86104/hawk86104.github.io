import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { BatchedRenderer, ConstantColor, QuarksLoader } from './three.quarks.esm.C9WjGUm11767105581793.js';
import { instance } from './Resource.Dxl2bF_-1767105581793.js';
import { loading$2 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$2 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
import './reflectorShaderMesh.vue_vue_type_script_setup_true_lang.D0T9d0go1767105581793.js';
import './dynamicRotatingBase.vue_vue_type_script_setup_true_lang.B3Epdjc31767105581793.js';
import './whiteFloorMesh.vue_vue_type_script_setup_true_lang.B9UIV1AE1767105581793.js';
import './gridPlusCom.vue_vue_type_script_setup_true_lang.BIqyIrzr1767105581793.js';
import './videoFloor.vue_vue_type_script_setup_true_lang.BEyCiDvU1767105581793.js';
import './digitalGround.vue_vue_type_script_setup_true_lang.BPvRJNY41767105581793.js';
import './imgFloor.vue_vue_type_script_setup_true_lang.D-OHfrvs1767105581793.js';
import './reflectorRoundedBox.vue_vue_type_script_setup_true_lang.B0i-7O7p1767105581793.js';
import './particleBase.vue_vue_type_script_setup_true_lang.BTwaqkrr1767105581793.js';
import './rippleFloor.vue_vue_type_script_setup_true_lang.DU-KS3_f1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const _hoisted_2 = ["object", "position", "scale", "rotation"];
const THREE = await importShared('three');
const {watch} = await importShared('vue');

const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "cartoonMagic",
  props: {
    color: { default: "#00ffff" },
    position: { default: [0, 0, 0] },
    scale: { default: 1 },
    rotation: { default: [0, 0, 0] }
  },
  setup(__props) {
    const props = __props;
    const getPropsColor = (a) => {
      const colorThree = new THREE.Color(props.color);
      const tv4color = new THREE.Vector4(colorThree.r, colorThree.g, colorThree.b, a);
      const colorRange = new ConstantColor(tv4color);
      return colorRange;
    };
    const batchSystem = new BatchedRenderer();
    const emitters = new THREE.Group();
    const obj = instance.getItem("CartoonMagicZone.json").clone(true);
    obj.traverse((child) => {
      if (child.type === "ParticleEmitter") {
        if (child.name === "BasicZoneRedEmitter") {
          child.rotation.set(Math.PI / 2, 0, 0);
        }
        const childSystem = child.system;
        childSystem.startColor = getPropsColor(childSystem.startColor.color.w);
        batchSystem.addSystem(childSystem);
      }
    });
    if (obj.type === "ParticleEmitter") {
      batchSystem.addSystem(obj.system);
    }
    emitters.add(obj);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      batchSystem.update(delta);
    });
    watch(
      () => [props.color],
      ([color]) => {
        batchSystem.systemToBatchIndex.forEach((value, ps) => {
          ps.startColor = getPropsColor(ps.startColor.color.w);
        });
      }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("primitive", { object: _unref$1(emitters) }, null, 8, _hoisted_1),
        _createElementVNode$1("primitive", {
          object: _unref$1(batchSystem),
          position: _ctx.position,
          scale: _ctx.scale,
          rotation: _ctx.rotation
        }, null, 8, _hoisted_2)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,mergeProps:_mergeProps,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Suspense:_Suspense,withCtx:_withCtx,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "customLoading",
  setup(__props) {
    const reflectorState = reactive({
      reflectivity: 0.1,
      showGridHelper: true,
      scale: 1
    });
    const configState = reactive({
      color: "#ffffff",
      scale: 1
    });
    instance.loaderMapping.QuarksLoader = QuarksLoader;
    instance.loadResources([{ functionName: "QuarksLoader", url: "./plugins/floor/json/CartoonMagicZone.json" }]);
    const paneControl = new Pane();
    paneControl.addBinding(configState, "color", { label: "颜色" });
    paneControl.addBinding(configState, "scale", {
      label: "大小",
      min: 0.1,
      max: 3,
      step: 0.1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading), { useResourceManager: "" }),
        _createVNode(_component_TresCanvas, {
          clearColor: "#201919",
          "window-size": ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [5, 5, 5],
              fov: 45,
              near: 0.1,
              far: 1e4
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, _mergeProps({ key: 0 }, configState, { position: [0, 0, 0] }), null, 16)) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, {
              key: 1,
              color: "red",
              position: [3, 0, 0],
              rotation: [-Math.PI, 1, 45]
            }, null, 8, ["rotation"])) : _createCommentVNode("", true),
            _unref(instance).hasAllFinished.value ? (_openBlock(), _createBlock(_sfc_main$1, {
              key: 2,
              color: "green",
              position: [-2, 0, 0]
            })) : _createCommentVNode("", true),
            _cache[1] || (_cache[1] = _createElementVNode("TresMesh", { position: [3, 0, 0] }, [
              _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
              _createElementVNode("TresMeshBasicMaterial", { color: "red" })
            ], -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresMesh", { position: [-2, 0, 0] }, [
              _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
              _createElementVNode("TresMeshBasicMaterial", { color: "green" })
            ], -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 0, 0] }, [
              _createElementVNode("TresSphereGeometry", { args: [1, 32, 32] }),
              _createElementVNode("TresMeshBasicMaterial", { color: "white" })
            ], -1)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_unref(_sfc_main$2), _mergeProps({ position: [0, -0.5, 0] }, reflectorState), null, 16)
              ]),
              _: 1
            }))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=customLoading.LQ1-3UeR1767105581793.js.map
