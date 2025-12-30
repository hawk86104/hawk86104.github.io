import { importShared, Fs, _l, Tz, Kk } from './index.BxB45aCK1767105581793.js';
import { RenderPass, EffectComposer } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { FilmPass } from './FilmPass.DS4qkFAO1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,openBlock:_openBlock$1,createBlock:_createBlock$1} = await importShared('vue');

const {watchEffect} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "bloomPass",
  setup(__props) {
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      threshold: 0,
      strength: 0.972,
      // 强度
      radius: 0.21
      // 半径
    };
    let effectComposer = null;
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      const renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    const filmPassEffect = (scene2, camera2, renderer2, width, height) => {
      let meshCurve = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
      meshCurve.position.set(0, 2, -4);
      scene2.add(meshCurve);
      var renderPass2 = new RenderPass(scene2, camera2);
      renderPass2.clear = false;
      effectComposer.addPass(renderPass2);
      const filmPass = new FilmPass();
      effectComposer.addPass(filmPass);
    };
    watchEffect(() => {
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        filmPassEffect(new THREE.Scene(), camera.value, renderer, sizes.width.value, sizes.height.value);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer) {
        effectComposer.render();
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createBlock$1(_unref$1(Tz), {
        args: [1, 1, 1],
        color: "orange",
        position: [3, 2, 1]
      });
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "bloomPass",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
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
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=bloomPass.CWl-dwrf1767105581793.js.map
