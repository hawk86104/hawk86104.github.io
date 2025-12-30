import { importShared, gz, _export_sfc, kk, yk, vU, Kk } from './index.BxB45aCK1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,unref:_unref$2,mergeProps:_mergeProps$1,withCtx:_withCtx$2,createBlock:_createBlock$1} = await importShared('vue');
const {reactive: reactive$1,inject} = await importShared('vue');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "svg",
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const animationPlay = inject("animationPlay");
    const onClick = () => {
      animationPlay.value = !animationPlay.value;
    };
    const state = reactive$1({
      wrapperClass: "svgCom",
      as: "div",
      transform: true,
      distanceFactor: 0.3,
      center: true
      // occlude: [seekObj]
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$1(_unref$2(gz), _mergeProps$1(state, {
        position: [0.6, -0.01, 0.16],
        rotation: [0, 0.6, 0]
      }), {
        default: _withCtx$2(() => [
          (_openBlock$2(), _createElementBlock$2("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            onClick
          }, [..._cache[0] || (_cache[0] = [
            _createElementVNode$2("circle", {
              id: "arc1",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "120",
              opacity: ".89",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "12",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc2",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "120",
              opacity: ".49",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "8",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc3",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "100",
              opacity: ".49",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "20",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc4",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "120",
              opacity: ".49",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "30",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc5",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "100",
              opacity: ".89",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "8",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc6",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "90",
              opacity: ".49",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "16",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc7",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "90",
              opacity: ".89",
              fill: "none",
              stroke: "#632b26",
              "stroke-width": "8",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1),
            _createElementVNode$2("circle", {
              id: "arc8",
              class: "circle",
              cx: "150",
              cy: "150",
              r: "80",
              opacity: ".79",
              fill: "#4DD0E1",
              "fill-opacity": "0",
              stroke: "#632b26",
              "stroke-width": "8",
              "stroke-linecap": "square",
              "stroke-opacity": ".99213",
              "paint-order": "fill markers stroke"
            }, null, -1)
          ])]))
        ]),
        _: 1
      }, 16);
    };
  }
});

const svgCom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8e199ed"]]);

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,withCtx:_withCtx$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {watch,ref: ref$1,provide,toRaw} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "eFan",
  props: {
    color: {
      type: String,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { nodes, animations } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(`${"https://opensource.cdn.icegl.cn"}/model/eCommerce/eFan/nFan.gltf`)), __temp = await __temp, __restore(), __temp);
    const Sketchfab_model = toRaw(nodes.Sketchfab_model);
    const modelAttUVarr = (name) => Sketchfab_model.getObjectByName(name).geometry.attributes.uv.array;
    const srcUVslist = {
      "Object_4": new Float32Array(modelAttUVarr("Object_4")),
      "Object_8": new Float32Array(modelAttUVarr("Object_8")),
      "Object_6": new Float32Array(modelAttUVarr("Object_6")),
      "Object_6001": new Float32Array(modelAttUVarr("Object_6001"))
    };
    const setColorUV = (color) => {
      const colorList = {
        "#ff8b04": 0,
        "#999999": 0.04,
        "#d3ac10": 0.19,
        "#ffbec4": -0.06,
        "#d0d5c6": 0.55
      };
      for (const [key, value] of Object.entries(srcUVslist)) {
        for (let i = 0; i < modelAttUVarr(key).length; i++) {
          modelAttUVarr(key)[i] = value[i] + colorList[color];
        }
        Sketchfab_model.getObjectByName(key).geometry.getAttribute("uv").needsUpdate = true;
      }
    };
    const switcherModel = Sketchfab_model.getObjectByName("Object_6001");
    const { actions } = kk(animations, Sketchfab_model);
    const currentAction = actions.Animation;
    const animationPlay = ref$1(true);
    provide("animationPlay", animationPlay);
    watch(
      () => props.color,
      (color) => {
        setColorUV(color);
      },
      { immediate: true }
    );
    watch(
      () => animationPlay.value,
      (play) => {
        if (play) {
          currentAction.reset().play();
          switcherModel.rotateY(-Math.PI);
        } else {
          currentAction.fadeOut(0.6).paused = true;
          switcherModel.rotateY(Math.PI);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createVNode$1(_unref$1(yk), {
          range: [-0.5, -0.5],
          speed: 2
        }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("primitive", {
              position: [-2, 0, 0],
              object: _unref$1(Sketchfab_model),
              scale: 3
            }, [
              _createVNode$1(svgCom, { model: _unref$1(Sketchfab_model) }, null, 8, ["model"])
            ], 8, _hoisted_1$1)
          ]),
          _: 1
        }),
        _createVNode$1(_unref$1(vU), {
          opacity: 0.3,
          blur: 2.6,
          position: [0, -2, 0]
        })
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,normalizeClass:_normalizeClass,normalizeStyle:_normalizeStyle,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps,createStaticVNode:_createStaticVNode} = await importShared('vue');

const _hoisted_1 = { class: "w-full h-full overflow-hidden pos-absolute" };
const _hoisted_2 = { class: "z-1 p-6 w-full md:w-1/2 md:p-4 text-light" };
const _hoisted_3 = { class: "flex gap-8" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "absolute w-full md:w-1/2 inset-0 h-2/3 md:h-full flex justify-center items-center" };
const {reactive,ref} = await importShared('vue');

const {BasicShadowMap,SRGBColorSpace} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "electricFan",
  setup(__props) {
    const gl = {
      alpha: true,
      clearAlpha: 0,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace
    };
    const circleScaleRef = ref();
    const circleScaleAnimation = ref(false);
    const state = reactive({
      selectedColor: "#ff8b04",
      colors: ["#ff8b04", "#999999", "#d3ac10", "#ffbec4", "#d0d5c6"]
    });
    const oldColor = ref(state.selectedColor);
    const onClick = (color) => {
      oldColor.value = state.selectedColor;
      state.selectedColor = color;
      circleScaleAnimation.value = !circleScaleAnimation.value;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _cache[6] || (_cache[6] = _createElementVNode("div", { class: "landingpage-bg w-full inset-0 h-full" }, null, -1)),
        _createElementVNode("div", {
          class: "absolute p-8 md:p-0 w-full inset-0 h-full flex flex-col md:flex-row md:justify-center md:items-center",
          style: _normalizeStyle({ backgroundColor: state.selectedColor + "80" })
        }, [
          _createElementVNode("div", {
            class: "w-full h-full pos-absolute md:w-2/3 md:h-1/2 shadow-lg rounded flex flex-col md:flex-row opacity-66",
            style: _normalizeStyle({ backgroundColor: oldColor.value })
          }, [
            _createElementVNode("div", _hoisted_1, [
              _createElementVNode("div", {
                ref_key: "circleScaleRef",
                ref: circleScaleRef,
                class: _normalizeClass(["circleScale", { circleScaleAnimationOld: circleScaleAnimation.value, circleScaleAnimationNew: !circleScaleAnimation.value }]),
                style: _normalizeStyle({ backgroundColor: state.selectedColor })
              }, null, 6)
            ]),
            _cache[1] || (_cache[1] = _createElementVNode("div", { class: "h-1/2 w-full md:w-1/2" }, null, -1)),
            _createElementVNode("div", _hoisted_2, [
              _cache[0] || (_cache[0] = _createStaticVNode('<h1 class="title animate-fade-in-right animate-ease" data-v-3b92f21c> 电风扇 ☁️ </h1><span class="absolute border-1 border-solid border-white w-800px inline-block" data-v-3b92f21c></span><p class="w-full md:w-2/3 my-8 animate-fade-in mt-32 position-relative" data-v-3b92f21c> 点击 <span class="font-bold" data-v-3b92f21c>&quot;模型上按钮&quot;</span> ，开关风扇。<br data-v-3b92f21c> 点击 <span class="font-bold" data-v-3b92f21c>&quot;下方按钮&quot;</span> ，选择自己喜欢的颜色。 </p>', 3)),
              _createElementVNode("ul", _hoisted_3, [
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(state.colors, (color) => {
                  return _openBlock(), _createElementBlock("li", { key: color }, [
                    _createElementVNode("button", {
                      class: "w-10 h-10 rounded-full border-2 border-solid border-white mr-2 cursor-pointer",
                      style: _normalizeStyle({ backgroundColor: color }),
                      onClick: ($event) => onClick(color)
                    }, null, 12, _hoisted_4)
                  ]);
                }), 128))
              ])
            ])
          ], 4)
        ], 4),
        _createElementVNode("div", _hoisted_5, [
          _createVNode(_component_TresCanvas, _mergeProps(gl, { class: "pointer-events-none" }), {
            default: _withCtx(() => [
              _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
                position: [10, 5, -8],
                fov: 45,
                near: 0.1,
                far: 1e5,
                "look-at": [0, 0, 0]
              }, null, -1)),
              _createVNode(_unref(Kk), { enableDamping: "" }),
              (_openBlock(), _createBlock(_Suspense, null, {
                default: _withCtx(() => [
                  _createVNode(_sfc_main$1, {
                    color: state.selectedColor
                  }, null, 8, ["color"])
                ]),
                _: 1
              })),
              _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
              _cache[4] || (_cache[4] = _createElementVNode("TresPointLight", {
                position: [0, 0, 10],
                intensity: 1
              }, null, -1)),
              _cache[5] || (_cache[5] = _createElementVNode("TresDirectionalLight", {
                position: [3, 3, 3],
                intensity: 3
              }, null, -1))
            ]),
            _: 1
          }, 16)
        ])
      ], 64);
    };
  }
});

const electricFan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b92f21c"]]);

export { electricFan as default };
//# sourceMappingURL=electricFan.iMADYmiM1767105581793.js.map
