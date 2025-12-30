import { importShared } from './index.BxB45aCK1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {Points,PointsMaterial,Mesh,Group,Color} = await importShared('three');

const {watchEffect} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "cloudPoints",
  props: {
    model: {},
    color: { default: "#FFF" },
    opacity: { default: 1 },
    isRemoveSrc: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const cloudModel = new Group();
    props.model.traverse((child) => {
      if (child instanceof Mesh) {
        const pbgeometry = child.geometry.clone();
        child.geometry.dispose();
        child.material.dispose();
        const pmaterial = new PointsMaterial({ color: props.color });
        pmaterial.opacity = props.opacity;
        pmaterial.transparent = true;
        const pointsMesh = new Points(pbgeometry, pmaterial);
        cloudModel.add(pointsMesh);
        if (props.model.parent) {
          cloudModel.applyMatrix4(props.model.parent.matrix);
        }
        if (props.isRemoveSrc) {
          child.removeFromParent();
        }
      }
    });
    watchEffect(() => {
      if (props.color) {
        cloudModel.traverse((child) => {
          if (child instanceof Points) {
            child.material.color = new Color(props.color);
          }
        });
      }
      if (props.opacity) {
        cloudModel.traverse((child) => {
          if (child instanceof Points) {
            child.material.opacity = props.opacity;
          }
        });
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("primitive", { object: _unref(cloudModel) }, null, 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=cloudPoints.vue_vue_type_script_setup_true_lang.BO607L2f1767105581793.js.map
