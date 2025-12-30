import { importShared, zr } from './index.BxB45aCK1767105581793.js';
import { Reflector } from './Reflector.CtdLGkrg1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const _hoisted_2 = ["object"];
const {Color,PlaneGeometry,GridHelper} = await importShared('three');
const {watchEffect} = await importShared('vue');

const srcSize = 10;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "reflectorMesh",
  props: {
    mirrorSize: { default: 10 },
    gridSize: { default: 10 },
    mirrorColor: { default: "#ffffff" },
    divisions: { default: 10 },
    colorCenterLine: { default: "#444444" },
    colorGrid: { default: "#888888" }
  },
  setup(__props) {
    const props = __props;
    const { sizes } = zr();
    const mirrorConfig = {
      clipBias: 0.1,
      //剪裁偏移值，用于控制剪裁平面的位置，可以用于解决渲染的反射对象和原始对象之间的闪烁问题，默认值是 0。
      //shader: 用于渲染反射效果的着色器程序，可以是一个 three.js 的 ShaderMaterial 对象，默认值是 undefined，表示使用内置的着色器。
      //encoding: 反射纹理的编码格式，默认值是 LinearEncoding。
      textureWidth: sizes.width.value * window.devicePixelRatio,
      //反射纹理的宽度，单位是像素，默认值是 512。
      textureHeight: sizes.height.value * window.devicePixelRatio,
      //反射纹理的高度，单位是像素，默认值是 512。
      multisample: 0,
      //反射纹理的多重采样级别，用于抗锯齿，默认值是 0，表示不使用多重采样。
      color: new Color(props.mirrorColor)
      //color: 反射面的颜色，可以是一个 CSS 颜色字符串或是一个 three.js 的 Color 对象，默认值是 0x7F7F7F。
    };
    const mirror = new Reflector(new PlaneGeometry(srcSize, srcSize), mirrorConfig);
    const gridHelp = new GridHelper(srcSize, props.divisions, props.colorCenterLine, props.colorGrid);
    watchEffect(() => {
      if (props.mirrorColor) {
        mirror.material.uniforms.color.value = new Color(props.mirrorColor);
      }
      if (props.mirrorSize) {
        mirror.scale.set(props.mirrorSize / srcSize, props.mirrorSize / srcSize, 1);
      }
      if (props.gridSize) {
        if (gridHelp) {
          gridHelp.scale.set(props.gridSize / srcSize, props.gridSize / srcSize, props.gridSize / srcSize);
        }
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("primitive", {
          object: _unref(mirror),
          "rotation-x": -Math.PI / 2,
          "position-y": -1e-4
        }, null, 8, _hoisted_1),
        _createElementVNode("primitive", { object: _unref(gridHelp) }, null, 8, _hoisted_2)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=reflectorMesh.vue_vue_type_script_setup_true_lang.C0JOAmqn1767105581793.js.map
