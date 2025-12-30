import { importShared, Fs, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { RenderPass, EffectComposer, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const {watchEffect: watchEffect$1,ref: ref$1} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "ecLayerShaderPass",
  setup(__props) {
    const normalBox = ref$1();
    const shineBox = ref$1();
    const { camera, renderer, scene, sizes } = Fs();
    const params = {
      strength: 0.572,
      // 强度
      radius: 0.51,
      // 半径
      threshold: 0
    };
    let renderScene = null;
    let effectComposer = null;
    let finalComposer = null;
    const bloomPassEffect = (scene2, camera2, renderer2, width, height) => {
      renderScene = new RenderPass(scene2, camera2);
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
      effectComposer = new EffectComposer(renderer2);
      effectComposer.renderToScreen = false;
      effectComposer.addPass(renderScene);
      effectComposer.addPass(bloomPass);
    };
    const makeFinalComposer = (renderer2) => {
      finalComposer = new EffectComposer(renderer2);
      const finalShader = new THREE.ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: effectComposer.renderTarget2.texture }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `,
        fragmentShader: `
            uniform sampler2D baseTexture;
            uniform sampler2D bloomTexture;
            varying vec2 vUv;
            void main() {
                gl_FragColor = ( vec4( 1.0 ) *texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
            }
        `,
        defines: {}
      });
      const finalPass = new ShaderPass(finalShader, "baseTexture");
      finalPass.needsSwap = true;
      finalComposer.addPass(renderScene);
      finalComposer.addPass(finalPass);
    };
    watchEffect$1(() => {
      if (normalBox.value) {
        normalBox.value.layers.set(0);
      }
      if (shineBox.value) {
        shineBox.value.layers.set(1);
      }
      if (sizes.width.value) {
        bloomPassEffect(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        makeFinalComposer(renderer);
      }
    });
    const { onRender } = _l();
    onRender(() => {
      if (effectComposer && finalComposer && camera.value) {
        renderer.clear();
        camera.value.layers.set(1);
        effectComposer.render();
        renderer.clearDepth();
        camera.value.layers.set(0);
        finalComposer.render(scene.value, camera.value);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock(_Fragment, null, [
        _createElementVNode$1("TresMesh", {
          ref_key: "normalBox",
          ref: normalBox,
          position: [3, 2, 1]
        }, [..._cache[0] || (_cache[0] = [
          _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1),
          _createElementVNode$1("TresMeshNormalMaterial", null, null, -1)
        ])], 512),
        _createElementVNode$1("TresMesh", {
          ref_key: "shineBox",
          ref: shineBox,
          position: [0, 2, -4]
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
  __name: "effectComposerShaderPass",
  setup(__props) {
    const tcRef = ref();
    watchEffect(() => {
      if (tcRef.value) {
        let renderer = tcRef.value.context.renderer.instance;
        renderer.autoClear = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        renderMode: "manual",
        "window-size": "",
        ref_key: "tcRef",
        ref: tcRef
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
//# sourceMappingURL=effectComposerShaderPass.D0IC79UU1767105581793.js.map
