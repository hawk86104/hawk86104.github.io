import { importShared, zr } from './index.BxB45aCK1767105581793.js';
import { ne, S, $ } from './vanilla-BEVDQrzM.Do8d2br_1767105581793.js';
import './three-custom-shader-material.es.CWVfv5Xe1767105581793.js';

class LayerMaterialCom extends ne {
  constructor(parameters = {}) {
    super(parameters);
  }
  init() {
    this.__tres.objects.forEach((obj) => {
      if (obj.attach.startsWith) {
        obj.attach.startsWith("layercoms_");
        this.layers.push(obj);
      }
    });
    this.refresh();
  }
}
class DepthCom extends $ {
  constructor(parameters = {}) {
    super(parameters);
    this.attach = "layercoms_depth_";
    this.attach += this.uuid.substring(this.uuid.length - 12);
  }
}
class ColorCom extends S {
  constructor(parameters = {}) {
    super(parameters);
    this.attach = "layercoms_color_";
    this.attach += this.uuid.substring(this.uuid.length - 12);
  }
}

const {defineComponent:_defineComponent$9} = await importShared('vue');

const {renderSlot:_renderSlot,openBlock:_openBlock$9,createElementBlock:_createElementBlock$9} = await importShared('vue');

const _hoisted_1$2 = ["args"];
const {shallowRef,onMounted} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$9({
  __name: "component",
  setup(__props, { expose: __expose }) {
    const props = __props;
    const LayerMaterialClass = shallowRef();
    const { extend } = zr();
    extend({ LayerMaterialCom });
    __expose({ LayerMaterialClass });
    onMounted(() => {
      LayerMaterialClass.value.init();
    });
    return (_ctx, _cache) => {
      return _openBlock$9(), _createElementBlock$9("TresLayerMaterialCom", {
        ref_key: "LayerMaterialClass",
        ref: LayerMaterialClass,
        args: [props]
      }, [
        _renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$2);
    };
  }
});

const {defineComponent:_defineComponent$8} = await importShared('vue');

const {openBlock:_openBlock$8,createElementBlock:_createElementBlock$8} = await importShared('vue');

const _hoisted_1$1 = ["args"];
const {watchEffect: watchEffect$1,ref: ref$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$8({
  __name: "color",
  setup(__props) {
    const props = __props;
    const { extend } = zr();
    extend({ Color: ColorCom });
    const colorRef = ref$1();
    watchEffect$1(() => {
      if (colorRef.value) {
        if (props.color) {
          colorRef.value.color.setStyle(props.color).convertLinearToSRGB();
        }
        if (props.alpha) {
          colorRef.value.alpha = props.alpha;
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$8(), _createElementBlock$8("TresColor", {
        ref_key: "colorRef",
        ref: colorRef,
        args: [props],
        visible: true
      }, null, 8, _hoisted_1$1);
    };
  }
});

const {defineComponent:_defineComponent$7} = await importShared('vue');

const {openBlock:_openBlock$7,createElementBlock:_createElementBlock$7} = await importShared('vue');

const _hoisted_1 = ["args"];
const {ref,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent$7({
  __name: "depth",
  setup(__props) {
    const props = __props;
    const { extend } = zr();
    extend({ Depth: DepthCom });
    const instanceRef = ref();
    watchEffect(() => {
      if (instanceRef.value) {
        if (props.colorA) {
          instanceRef.value.colorA.set(props.colorA);
        }
        if (props.colorB) {
          instanceRef.value.colorB.set(props.colorB);
        }
        if (props.alpha) {
          instanceRef.value.alpha = props.alpha;
        }
        if (props.near) {
          instanceRef.value.near = props.near;
        }
        if (props.far) {
          instanceRef.value.far = props.far;
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$7(), _createElementBlock$7("TresDepth", {
        ref_key: "instanceRef",
        ref: instanceRef,
        args: [props],
        visible: true
      }, null, 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent$6} = await importShared('vue');

const {openBlock:_openBlock$6,createElementBlock:_createElementBlock$6} = await importShared('vue');

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

export { _sfc_main$2 as _sfc_main, _sfc_main$1, _sfc_main as _sfc_main$2 };
//# sourceMappingURL=displace.vue_vue_type_script_setup_true_lang.DClcUU_f1767105581793.js.map
