import { importShared, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { materialPresets, sideOptions, blendingOptions } from './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import { NColorPicker } from './ColorPicker.BINzuU6U1767105581793.js';
import { NCard } from './Card.CmCLdudX1767105581793.js';
import { NForm, NFormItem } from './FormItem.C_Krb9Z_1767105581793.js';
import { NSelect, NSlider, NSwitch } from './Switch.DCUaofJ91767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,isRef:_isRef,createVNode:_createVNode,withCtx:_withCtx,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');

const _hoisted_1 = { class: "MaterialSelectorCcontrolPanel" };
const {watch,inject} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "ui",
  setup(__props) {
    const type = inject("MaterialSelectorType");
    const materialProps = inject("MaterialSelectorProps");
    watch(type, (key) => {
      materialProps.value = { ...materialPresets[key].props };
    });
    const typeOptions = Object.keys(materialPresets).map((key) => ({
      label: key,
      value: key
    }));
    function getControlType(value, key) {
      if (key === "uAmp") return "uAmp";
      if (key === "uProgress") return "uProgress";
      if (key === "uFreq") return "uFreq";
      if (key === "uEdge") return "uEdge";
      if (key === "side") return "enum-side";
      if (key === "blending") return "enum-blending";
      if (key.includes("Map")) return "aboutMap";
      if (typeof value === "string" && value.startsWith("#")) return "color";
      if (typeof value === "number") return "number";
      if (typeof value === "boolean") return "boolean";
      if (value === null && (key.endsWith("Map") || key.endsWith("map"))) return "texture";
      if (typeof value === "object" && value && "x" in value && "y" in value) return "vector2";
      return "text";
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_unref(NCard), {
          title: "材质调试面板",
          size: "small"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(NForm), {
              "label-placement": "left",
              "label-width": 130,
              size: "small"
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(NFormItem), { label: "材质类型" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(NSelect), {
                      value: _unref(type),
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _isRef(type) ? type.value = $event : null),
                      options: _unref(typeOptions)
                    }, null, 8, ["value", "options"])
                  ]),
                  _: 1
                }),
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(materialProps), (value, key) => {
                  return _openBlock(), _createElementBlock(_Fragment, { key }, [
                    getControlType(value, key) !== "texture" && getControlType(value, key) !== "vector2" && getControlType(value, key) !== "aboutMap" ? (_openBlock(), _createBlock(_unref(NFormItem), {
                      key: 0,
                      label: key
                    }, {
                      default: _withCtx(() => [
                        getControlType(value, key) === "color" ? (_openBlock(), _createBlock(_unref(NColorPicker), {
                          key: 0,
                          "show-alpha": false,
                          size: "small",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "number" ? (_openBlock(), _createBlock(_unref(NSlider), {
                          key: 1,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          min: 0,
                          max: 1,
                          step: 0.01
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "boolean" ? (_openBlock(), _createBlock(_unref(NSwitch), {
                          key: 2,
                          size: "small",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "enum-side" ? (_openBlock(), _createBlock(_unref(NSelect), {
                          key: 3,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          options: _unref(sideOptions)
                        }, null, 8, ["value", "onUpdate:value", "options"])) : getControlType(value, key) === "enum-blending" ? (_openBlock(), _createBlock(_unref(NSelect), {
                          key: 4,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          options: _unref(blendingOptions)
                        }, null, 8, ["value", "onUpdate:value", "options"])) : getControlType(value, key) === "uEdge" ? (_openBlock(), _createBlock(_unref(NSlider), {
                          key: 5,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          min: 0,
                          max: 10,
                          step: 0.01
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "uFreq" ? (_openBlock(), _createBlock(_unref(NSlider), {
                          key: 6,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          min: 2e-3,
                          max: 2,
                          step: 2e-3
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "uAmp" ? (_openBlock(), _createBlock(_unref(NSlider), {
                          key: 7,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          min: 3,
                          max: 22,
                          step: 0.01
                        }, null, 8, ["value", "onUpdate:value"])) : getControlType(value, key) === "uProgress" ? (_openBlock(), _createBlock(_unref(NSlider), {
                          key: 8,
                          size: "tiny",
                          value: _unref(materialProps)[key],
                          "onUpdate:value": ($event) => _unref(materialProps)[key] = $event,
                          min: -30,
                          max: 30,
                          step: 0.1
                        }, null, 8, ["value", "onUpdate:value"])) : _createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["label"])) : _createCommentVNode("", true)
                  ], 64);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const ui = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfd3648b"]]);

export { ui };
//# sourceMappingURL=ui.BDzneBQ-1767105581793.js.map
