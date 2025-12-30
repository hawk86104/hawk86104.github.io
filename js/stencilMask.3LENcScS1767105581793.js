import { importShared, kk, yk, Kk } from './index.BxB45aCK1767105581793.js';
import { _sfc_main as _sfc_main$4 } from './skyBoxDmesh.vue_vue_type_script_setup_true_lang.DRUMhbde1767105581793.js';
import { _sfc_main$6 as _sfc_main$3 } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {withAsyncContext:_withAsyncContext$1,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const {FrontSide} = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent({
  __name: "stencilMaskBox",
  async setup(__props) {
    let __temp, __restore;
    const { nodes } = ([__temp, __restore] = _withAsyncContext$1(() => useGLTF("./plugins/eCommerce/model/box.glb")), __temp = await __temp, __restore(), __temp);
    const showModel = nodes.Sketchfab_model.getObjectByName("Cube004__0");
    showModel.renderOrder = 1;
    showModel.material.depthTest = true;
    showModel.material.side = FrontSide;
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("primitive", {
        position: [0, 0, 0],
        object: _unref$2(showModel)?.clone(),
        scale: 0.5
      }, null, 8, _hoisted_1$1);
    };
  }
});

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,unref:_unref$1,withCtx:_withCtx$1,createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = {
  name: "front-face",
  position: [0, 0, 0.5]
};
const _hoisted_2 = ["stencil-func", "stencil-z-pass"];
const _hoisted_3 = ["rotation-z", "object"];
const _hoisted_4 = ["rotation-x"];
const _hoisted_5 = ["stencil-func", "stencil-z-pass"];
const _hoisted_6 = {
  name: "bottom-face-object",
  scale: 0.5
};
const _hoisted_7 = ["stencil-func"];
const _hoisted_8 = ["rotation-x"];
const _hoisted_9 = ["stencil-func", "stencil-z-pass"];
const _hoisted_10 = {
  name: "top-face-object",
  scale: 0.05
};
const _hoisted_11 = ["stencil-func"];
const _hoisted_12 = ["rotation-y"];
const _hoisted_13 = ["stencil-func", "stencil-z-pass"];
const _hoisted_14 = ["object", "rotation-y"];
const _hoisted_15 = ["rotation-y"];
const _hoisted_16 = ["stencil-func", "stencil-z-pass"];
const _hoisted_17 = {
  name: "right-face-object",
  scale: 0.05
};
const _hoisted_18 = ["stencil-func"];
const _hoisted_19 = ["rotation-y"];
const _hoisted_20 = ["stencil-func", "stencil-z-pass"];
const _hoisted_21 = {
  name: "back-face-object",
  scale: 0.05
};
const _hoisted_22 = ["stencil-func"];
const {toRaw} = await importShared('vue');

const {AlwaysStencilFunc,EqualStencilFunc,ReplaceStencilOp,Mesh} = await importShared('three');
const _sfc_main$1 = {
  __name: "stencilMaskModels",
  async setup(__props) {
    let __temp, __restore;
    const { nodes, materials, animations } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(`${"https://opensource.cdn.icegl.cn"}/model/eCommerce/eFan/nFan.gltf`)), __temp = await __temp, __restore(), __temp);
    const { actions } = kk(animations, nodes.Sketchfab_model);
    const currentAction = actions.Animation;
    currentAction.play();
    materials["Material.001"].stencilWrite = true;
    materials["Material.001"].stencilRef = 1;
    materials["Material.001"].stencilFunc = EqualStencilFunc;
    materials["材质.002"].stencilWrite = true;
    materials["材质.002"].stencilRef = 1;
    materials["材质.002"].stencilFunc = EqualStencilFunc;
    nodes.Sketchfab_model.traverse((child) => {
      if (child instanceof Mesh) {
        child.renderOrder = 1;
      }
    });
    let macBook = ([__temp, __restore] = _withAsyncContext(() => useGLTF("./plugins/basic/htmls/model/model.gltf", { draco: true, decoderPath: "./draco/" })), __temp = await __temp, __restore(), __temp);
    macBook = macBook.nodes.Macbook;
    macBook.traverse((child) => {
      if (child instanceof Mesh) {
        child.renderOrder = 1;
        child.material.stencilWrite = true;
        child.material.stencilRef = 4;
        child.material.stencilFunc = EqualStencilFunc;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("TresMesh", _hoisted_1, [
          _cache[0] || (_cache[0] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16216071,
            "stencil-write": "",
            "stencil-ref": 1,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_2)
        ]),
        _createVNode$1(_unref$1(yk), { speed: 2 }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("primitive", {
              "rotation-z": -Math.PI / 2,
              object: toRaw(_unref$1(nodes).Sketchfab_model),
              position: [0, -0.35, 0],
              scale: 0.5
            }, null, 8, _hoisted_3)
          ]),
          _: 1
        }),
        _createElementVNode$1("TresMesh", {
          name: "bottom-face",
          "rotation-x": Math.PI * 0.5,
          position: [0, -0.5, 0]
        }, [
          _cache[1] || (_cache[1] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16250871,
            "stencil-write": "",
            "stencil-ref": 2,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_5)
        ], 8, _hoisted_4),
        _createElementVNode$1("TresMesh", _hoisted_6, [
          _cache[2] || (_cache[2] = _createElementVNode$1("TresBoxGeometry", { args: [1, 1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16776960,
            "stencil-write": "",
            "stencil-ref": 2,
            "stencil-func": _unref$1(EqualStencilFunc)
          }, null, 8, _hoisted_7)
        ]),
        _createElementVNode$1("TresMesh", {
          name: "top-face",
          "rotation-x": Math.PI * -0.5,
          position: [0, 0.5, 0]
        }, [
          _cache[3] || (_cache[3] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16250871,
            "stencil-write": "",
            "stencil-ref": 3,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_9)
        ], 8, _hoisted_8),
        _createElementVNode$1("TresMesh", _hoisted_10, [
          _cache[4] || (_cache[4] = _createElementVNode$1("TresConeGeometry", { args: [5, 10] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16711935,
            "stencil-write": "",
            "stencil-ref": 3,
            "stencil-func": _unref$1(EqualStencilFunc)
          }, null, 8, _hoisted_11)
        ]),
        _createElementVNode$1("TresMesh", {
          name: "left-face",
          "rotation-y": Math.PI * -0.5,
          position: [-0.5, 0, 0]
        }, [
          _cache[5] || (_cache[5] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 2365978,
            "stencil-write": "",
            "stencil-ref": 4,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_13)
        ], 8, _hoisted_12),
        _createVNode$1(_unref$1(yk), { speed: 2 }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("primitive", {
              object: toRaw(_unref$1(macBook)),
              "rotation-y": -Math.PI / 2,
              position: [-0.1, -0.2, 0],
              scale: 0.02
            }, null, 8, _hoisted_14)
          ]),
          _: 1
        }),
        _createElementVNode$1("TresMesh", {
          name: "right-face",
          "rotation-y": Math.PI * 0.5,
          position: [0.5, 0, 0]
        }, [
          _cache[6] || (_cache[6] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16250871,
            "stencil-write": "",
            "stencil-ref": 5,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_16)
        ], 8, _hoisted_15),
        _createElementVNode$1("TresMesh", _hoisted_17, [
          _cache[7] || (_cache[7] = _createElementVNode$1("TresTorusGeometry", { args: [5, 2] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 255,
            "stencil-write": "",
            "stencil-ref": 5,
            "stencil-func": _unref$1(EqualStencilFunc)
          }, null, 8, _hoisted_18)
        ]),
        _createElementVNode$1("TresMesh", {
          name: "back-face",
          "rotation-y": Math.PI,
          position: [0, 0, -0.5]
        }, [
          _cache[8] || (_cache[8] = _createElementVNode$1("TresPlaneGeometry", { args: [1, 1] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 16250871,
            "stencil-write": "",
            "stencil-ref": 6,
            "stencil-func": _unref$1(AlwaysStencilFunc),
            "stencil-z-pass": _unref$1(ReplaceStencilOp),
            "depth-write": false
          }, null, 8, _hoisted_20)
        ], 8, _hoisted_19),
        _createElementVNode$1("TresMesh", _hoisted_21, [
          _cache[9] || (_cache[9] = _createElementVNode$1("TresDodecahedronGeometry", { args: [5, 0] }, null, -1)),
          _createElementVNode$1("TresMeshPhongMaterial", {
            color: 6689075,
            "stencil-write": "",
            "stencil-ref": 6,
            "stencil-func": _unref$1(EqualStencilFunc)
          }, null, 8, _hoisted_22)
        ])
      ], 64);
    };
  }
};

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = {
  __name: "stencilMask",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(_sfc_main$3)),
        _createVNode(_component_TresCanvas, {
          ref: "canvasRef",
          "window-size": "",
          "clear-color": "#111",
          stencil: ""
        }, {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [-1, 0, 2],
              fov: 45,
              aspect: 1,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk), { "auto-rotate": "" }),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$4, {
                  texture: ("https://opensource.cdn.icegl.cn") + "/images/skyBox/workshop_blur.jpg"
                }, null, 8, ["texture"])
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$2)
              ]),
              _: 1
            })),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _cache[1] || (_cache[1] = _createElementVNode("TresPointLight", {
              position: [0, 0, 1],
              intensity: 1
            }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
              position: [1, 1, 1],
              intensity: 3
            }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1))
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
};

export { _sfc_main as default };
//# sourceMappingURL=stencilMask.3LENcScS1767105581793.js.map
