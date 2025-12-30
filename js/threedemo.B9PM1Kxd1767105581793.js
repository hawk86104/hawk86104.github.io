import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { loading$1 as loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import { loadJweixin, loadWebView } from './initScript.D0kd3T6a1767105581793.js';
import { useTexture$1 as useTexture, _sfc_main as _sfc_main$4, _sfc_main$1 as _sfc_main$5 } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';
import './reflectorDiffuse.vue_vue_type_script_setup_true_lang.BuW1EemC1767105581793.js';
import { _sfc_main as _sfc_main$3 } from './reflectorDUDV.vue_vue_type_script_setup_true_lang.Cce3m26z1767105581793.js';
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
import { _sfc_main as _sfc_main$6 } from './lamboEffect.vue_vue_type_script_setup_true_lang.DS1uPw3c1767105581793.js';
import { FMessage } from './index.CnaVApRj1767105581793.js';

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object", "rotation"];
const {toRaw} = await importShared('vue');

const THREE$1 = await importShared('three');

const _sfc_main$2 = {
  __name: "dissolveEffectCar",
  props: {
    edgeColor: {
      default: 1118481
    },
    edgeWidth: {
      default: 0.03
    },
    dissolveSpeed: {
      default: 3e-3
    },
    funRef: {
      appear: null,
      disappear: null
    }
  },
  async setup(__props, { expose: __expose }) {
    let __temp, __restore;
    const props = __props;
    const { scene, nodes, materials } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      `${"https://opensource.cdn.icegl.cn"}/model/industry4/lambo.glb`
    )), __temp = await __temp, __restore(), __temp);
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        if (node.name.startsWith("glass")) node.geometry.computeVertexNormals();
        if (node.name === "silver_001_BreakDiscs_0") {
          node.material = materials.BreakDiscs.clone();
          node.material.color = new THREE$1.Color("#ddd");
        }
      }
    });
    nodes.glass_003.scale.setScalar(2.7);
    materials.FrameBlack.color = new THREE$1.Color("black");
    materials.FrameBlack.roughness = 0;
    materials.FrameBlack.metalness = 0.75;
    materials.Chrome.color = new THREE$1.Color("#333");
    materials.Chrome.metalness = 1;
    materials.Chrome.roughness = 0;
    materials.BreakDiscs.color = new THREE$1.Color("#555");
    materials.BreakDiscs.metalness = 0.2;
    materials.BreakDiscs.roughness = 0.2;
    materials.TiresGum.color = new THREE$1.Color("#181818");
    materials.TiresGum.metalness = 0;
    materials.TiresGum.roughness = 0.4;
    materials.GreyElements.color = new THREE$1.Color("#292929");
    materials.GreyElements.metalness = 0;
    nodes.yellow_WhiteCar_0.material = new THREE$1.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: "#111",
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1
    });
    const pTexture = ([__temp, __restore] = _withAsyncContext(() => useTexture(["./plugins/digitalCity/image/smokeparticle.png", "./plugins/industry4/image/dissolve.jpg"])), __temp = await __temp, __restore(), __temp);
    const shaders = [];
    let isDissolving = false;
    const params = {
      dissolveProgress: 1,
      noiseTexture: pTexture[0],
      edgeColorTexture: pTexture[1]
    };
    let signedDissolveSpeed = props.dissolveSpeed;
    const appear = () => {
      if (isDissolving) return;
      isDissolving = true;
      signedDissolveSpeed = props.dissolveSpeed;
      for (const shader of shaders) {
        shader.uniforms.dissolveSpeed = { value: signedDissolveSpeed };
        shader.uniforms.dissolveProgress = { value: 0 };
      }
    };
    const disappear = () => {
      if (isDissolving) return;
      isDissolving = true;
      signedDissolveSpeed = -props.dissolveSpeed;
      for (const shader of shaders) {
        shader.uniforms.dissolveSpeed = { value: signedDissolveSpeed };
        shader.uniforms.dissolveProgress = { value: 1 };
      }
    };
    props.funRef.appear = appear;
    props.funRef.disappear = disappear;
    __expose({
      appear,
      disappear
    });
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        node.frustumCulled = false;
        const material = node.material;
        material.transparent = true;
        material.onBeforeCompile = (shader) => {
          shaders.push(shader);
          shader.uniforms.edgeColor = { value: new THREE$1.Color(props.edgeColor) };
          shader.uniforms.edgeWidth = { value: props.edgeWidth };
          shader.uniforms.dissolveSpeed = { value: props.dissolveSpeed };
          shader.uniforms.dissolveProgress = { value: params.dissolveProgress };
          shader.uniforms.noiseTexture = { value: params.noiseTexture };
          shader.uniforms.edgeColorTexture = { value: params.edgeColorTexture };
          shader.vertexShader = shader.vertexShader.replace("#include <common>", ["varying vec2 xUv;", "#include <common>"].join("\n"));
          shader.vertexShader = shader.vertexShader.replace("#include <uv_vertex>", ["xUv = uv;", "#include <uv_vertex>"].join("\n"));
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <common>",
            `#include <common>
					 uniform float dissolveProgress;
					 uniform float edgeWidth;
					 uniform vec3 edgeColor;
					 uniform sampler2D noiseTexture;
					 uniform sampler2D edgeColorTexture;
					 varying vec2 xUv;
					`
          );
          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <dithering_fragment>",
            `#include <dithering_fragment>
							float noiseValue = texture2D(noiseTexture, xUv).r;
							vec4 finalColor = texture2D(edgeColorTexture, xUv);

							vec3 mixedColor = mix(finalColor.rgb, edgeColor, 0.5);
							finalColor.rgb = mixedColor;

							// vec4 finalColor = linearToOutputTexel( vec4(edgeColor, gl_FragColor.a) );
							float alpha = step(noiseValue - edgeWidth, dissolveProgress);
							gl_FragColor.a = alpha;
							float useOrigin = step(noiseValue, dissolveProgress);
							gl_FragColor.rgb = mix(finalColor.rgb, gl_FragColor.rgb, useOrigin);`
          );
        };
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      if (isDissolving) {
        for (const shader of shaders) {
          const { dissolveProgress, dissolveSpeed } = shader.uniforms;
          dissolveProgress.value += dissolveSpeed.value;
          if (dissolveProgress.value < 0) {
            isDissolving = false;
            props.funRef.aEnd();
          }
          if (dissolveProgress.value > 1) {
            isDissolving = false;
            props.funRef.aEnd();
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", {
        object: toRaw(_unref$2(scene)),
        scale: 0.015,
        rotation: [0, Math.PI / 1.5, 0]
      }, null, 8, _hoisted_1$1);
    };
  }
};

const {createElementVNode:_createElementVNode$1,unref:_unref$1,createVNode:_createVNode$1,Suspense:_Suspense$1,withCtx:_withCtx$1,openBlock:_openBlock$1,createBlock:_createBlock$1,Fragment:_Fragment$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1 = ["rotation"];
const _hoisted_2 = ["side"];
const _hoisted_3 = ["rotation"];
const _hoisted_4 = ["side"];

const THREE = await importShared('three');

const _sfc_main$1 = {
  __name: 'otherObject',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
    _cache[2] || (_cache[2] = _createElementVNode$1("TresPerspectiveCamera", {
      position: [0, 10, 15],
      fov: 25,
      near: 0.1,
      far: 10000
    }, null, -1)),
    _createVNode$1(_unref$1(Kk), { autoRotate: "" }),
    _cache[3] || (_cache[3] = _createElementVNode$1("TresHemisphereLight", { intensity: 0.5 }, null, -1)),
    (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
      default: _withCtx$1(() => [
        _createVNode$1(_unref$1(_sfc_main$3), {
          position: [0, -1.562, 0],
          reflectivity: 2.6,
          showGridHelper: false,
          scale: 1.5
        })
      ]),
      _: 1
    })),
    _createElementVNode$1("TresMesh", {
      scale: 4,
      position: [3, -1.161, -1.5],
      rotation: [-Math.PI / 2, 0, Math.PI / 2.5]
    }, [
      _cache[0] || (_cache[0] = _createElementVNode$1("TresRingGeometry", { args: [0.9, 1, 4, 1] }, null, -1)),
      _createElementVNode$1("TresMeshStandardMaterial", {
        color: "white",
        roughness: 0.75,
        side: THREE.DoubleSide
      }, null, 8, _hoisted_2)
    ], 8, _hoisted_1),
    _createElementVNode$1("TresMesh", {
      scale: 4,
      position: [-3, -1.161, -1],
      rotation: [-Math.PI / 2, 0, Math.PI / 2.5]
    }, [
      _cache[1] || (_cache[1] = _createElementVNode$1("TresRingGeometry", { args: [0.9, 1, 3, 1] }, null, -1)),
      _createElementVNode$1("TresMeshStandardMaterial", {
        color: "white",
        roughness: 0.75,
        side: THREE.DoubleSide
      }, null, 8, _hoisted_4)
    ], 8, _hoisted_3),
    (_openBlock$1(), _createBlock$1(_Suspense$1, null, {
      default: _withCtx$1(() => [
        _createVNode$1(_unref$1(_sfc_main$4), { resolution: 512 }, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              position: [0, 1, 3],
              scale: [10, 1, 1]
            }),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, -6],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, -3],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, 0],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, 3],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, 6],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-x": Math.PI / 2,
              position: [0, 4, 9],
              scale: [10, 1, 1]
            }, null, 8, ["rotation-x"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-y": Math.PI / 2,
              position: [-50, 2, 0],
              scale: [100, 2, 1]
            }, null, 8, ["rotation-y"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              intensity: 2,
              "rotation-y": -Math.PI / 2,
              position: [50, 2, 0],
              scale: [100, 2, 1]
            }, null, 8, ["rotation-y"]),
            _createVNode$1(_unref$1(_sfc_main$5), {
              form: "ring",
              color: "red",
              intensity: 10,
              scale: 2,
              position: [10, 5, 10]
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    })),
    _createVNode$1(_sfc_main$6)
  ], 64))
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,mergeProps:_mergeProps,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,createElementVNode:_createElementVNode,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const {reactive,onMounted,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "threedemo",
  setup(__props) {
    const scriptLoaded = ref(false);
    onMounted(async () => {
      console.log("onMounted");
      await loadJweixin();
      await loadWebView();
      scriptLoaded.value = true;
      if (!uni.getEnv) {
        FMessage.error("当前web浏览器访问无效，请使用小程序或者app访问该页面");
      } else {
        uni.getEnv((res) => {
          FMessage.success(`当前环境：${JSON.stringify(res)}`);
        });
      }
    });
    const state = reactive({
      clearColor: "#15151a",
      antialias: false,
      logarithmicDepthBuffer: true,
      renderMode: "manual"
    });
    const frjState = reactive({
      edgeColor: "#111111",
      edgeWidth: 0.03,
      dissolveSpeed: 3e-3,
      funRef: {
        appear: null,
        disappear: null,
        aEnd: () => {
        }
      }
    });
    const dissolveEffectModelRef = ref(null);
    const clickMesh = () => {
      if (!scriptLoaded.value) {
        return;
      }
      console.log("clickMesh");
      if (!uni.postMessage) {
        FMessage.error("当前web浏览器访问无效，请使用小程序或者app访问该页面");
        return;
      }
      dissolveEffectModelRef.value.funRef.disappear();
      uni.postMessage({
        data: {
          action: "三维页面发送了消息"
        }
      });
    };
    frjState.funRef.aEnd = () => {
      console.log("aEnd");
      uni.navigateBack();
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading)),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2, _mergeProps(frjState, {
                  ref_key: "dissolveEffectModelRef",
                  ref: dissolveEffectModelRef,
                  onClick: clickMesh
                }), null, 16)
              ]),
              _: 1
            })),
            _createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 16),
        _cache[0] || (_cache[0] = _createElementVNode("h2", { class: "text-center text-white w-full absolute" }, "双击车辆消失后回传信息且跳转", -1))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=threedemo.B9PM1Kxd1767105581793.js.map
