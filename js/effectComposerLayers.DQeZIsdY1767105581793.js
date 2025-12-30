import { importShared, Fs, _l, Tz, Kk } from './index.BxB45aCK1767105581793.js';
import { RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const {watchEffect: watchEffect$1,ref: ref$1} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ecLayers",
  setup(__props) {
    const { camera, renderer, scene, sizes } = Fs();
    const normalBox = ref$1();
    const shineBox = ref$1();
    const filmBox = ref$1();
    let effectComposer = null;
    const params = {
      threshold: 0,
      strength: 0.972,
      // 强度
      radius: 0.21
      // 半径
    };
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    watchEffect$1(() => {
      if (normalBox.value) {
        normalBox.value.instance.layers.set(0);
      }
      if (shineBox.value) {
        shineBox.value.layers.set(1);
      }
      if (filmBox.value) {
        filmBox.value.layers.set(2);
      }
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer && camera.value) {
        renderer.clear();
        camera.value.layers.set(1);
        effectComposer.render();
        renderer.clearDepth();
        camera.value.layers.set(0);
        renderer.render(scene.value, camera.value);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createVNode$1(_unref$1(Tz), {
          ref_key: "normalBox",
          ref: normalBox,
          args: [1, 1, 1],
          color: "orange",
          position: [3, 2, 1]
        }, null, 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "shineBox",
          ref: shineBox,
          position: [0, 2, -4]
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "filmBox",
          ref: filmBox,
          position: [1, 2, 3]
        }, [..._cache[1] || (_cache[1] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {watchEffect,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "effectComposerLayers",
  setup(__props) {
    const tcRef = ref();
    watchEffect(() => {
      if (tcRef.value) {
        const renderer = tcRef.value.context.renderer.instance;
        renderer.autoClear = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        ref_key: "tcRef",
        ref: tcRef,
        renderMode: "manual",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [10, 10, 10] }, null, -1)),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 1 }, null, -1)),
          _createVNode(_unref(Kk)),
          _cache[2] || (_cache[2] = _createElementVNode("TresGridHelper", { args: [10, 10] }, null, -1)),
          _createVNode(_sfc_main$1)
        ]),
        _: 1
      }, 512);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=effectComposerLayers.DQeZIsdY1767105581793.js.map
