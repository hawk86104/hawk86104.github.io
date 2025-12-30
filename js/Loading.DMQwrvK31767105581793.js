import { importShared } from './index.BxB45aCK1767105581793.js';
import { createInjectionKey, c, commonVariables, cB, cE } from './light.CLUJsvFB1767105581793.js';
import { isMounted } from './use-rtl.Dso2-paz1767105581793.js';
import { useStyle } from './use-style.DNeB6HHX1767105581793.js';

const isBrowser = typeof document !== 'undefined' && typeof window !== 'undefined';

function color2Class(color) {
  return color.replace(/#|\(|\)|,|\s|\./g, '_');
}

const {computed,inject,onBeforeUnmount,provide} = await importShared('vue');
const formItemInjectionKey = createInjectionKey('n-form-item');
function useFormItem(props, {
  defaultSize = 'medium',
  mergedSize,
  mergedDisabled
} = {}) {
  const NFormItem = inject(formItemInjectionKey, null);
  provide(formItemInjectionKey, null);
  const mergedSizeRef = computed(mergedSize ? () => mergedSize(NFormItem) : () => {
    const {
      size
    } = props;
    if (size) return size;
    if (NFormItem) {
      const {
        mergedSize
      } = NFormItem;
      if (mergedSize.value !== undefined) {
        return mergedSize.value;
      }
    }
    return defaultSize;
  });
  const mergedDisabledRef = computed(mergedDisabled ? () => mergedDisabled(NFormItem) : () => {
    const {
      disabled
    } = props;
    if (disabled !== undefined) {
      return disabled;
    }
    if (NFormItem) {
      return NFormItem.disabled.value;
    }
    return false;
  });
  const mergedStatusRef = computed(() => {
    const {
      status
    } = props;
    if (status) return status;
    return NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.mergedValidationStatus.value;
  });
  onBeforeUnmount(() => {
    if (NFormItem) {
      NFormItem.restoreValidation();
    }
  });
  return {
    mergedSizeRef,
    mergedDisabledRef,
    mergedStatusRef,
    nTriggerFormBlur() {
      if (NFormItem) {
        NFormItem.handleContentBlur();
      }
    },
    nTriggerFormChange() {
      if (NFormItem) {
        NFormItem.handleContentChange();
      }
    },
    nTriggerFormFocus() {
      if (NFormItem) {
        NFormItem.handleContentFocus();
      }
    },
    nTriggerFormInput() {
      if (NFormItem) {
        NFormItem.handleContentInput();
      }
    }
  };
}

const {defineComponent: defineComponent$1,h: h$1,Transition} = await importShared('vue');

const NIconSwitchTransition = defineComponent$1({
  name: 'BaseIconSwitchTransition',
  setup(_, {
    slots
  }) {
    const isMountedRef = isMounted();
    return () => h$1(Transition, {
      name: "icon-switch-transition",
      appear: isMountedRef.value
    }, slots);
  }
});

const {
  cubicBezierEaseInOut
} = commonVariables;
function iconSwitchTransition({
  originalTransform = '',
  left = 0,
  top = 0,
  transition = `all .3s ${cubicBezierEaseInOut} !important`
} = {}) {
  return [c('&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to', {
    transform: `${originalTransform} scale(0.75)`,
    left,
    top,
    opacity: 0
  }), c('&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from', {
    transform: `scale(1) ${originalTransform}`,
    left,
    top,
    opacity: 1
  }), c('&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active', {
    transformOrigin: 'center',
    position: 'absolute',
    left,
    top,
    transition
  })];
}

const style = c([c('@keyframes rotator', `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), cB('base-loading', `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [cE('transition-wrapper', `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [iconSwitchTransition()]), cE('placeholder', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  left: '50%',
  top: '50%',
  originalTransform: 'translateX(-50%) translateY(-50%)'
})]), cE('container', `
 animation: rotator 3s linear infinite both;
 `, [cE('icon', `
 height: 1em;
 width: 1em;
 `)])])]);

const {defineComponent,h,toRef} = await importShared('vue');
const duration = '1.6s';
const exposedLoadingProps = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: undefined
  }
};
const NBaseLoading = defineComponent({
  name: 'BaseLoading',
  props: Object.assign({
    clsPrefix: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    }
  }, exposedLoadingProps),
  setup(props) {
    useStyle('-base-loading', style, toRef(props, 'clsPrefix'));
  },
  render() {
    const {
      clsPrefix,
      radius,
      strokeWidth,
      stroke,
      scale
    } = this;
    const scaledRadius = radius / scale;
    return h("div", {
      class: `${clsPrefix}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, h(NIconSwitchTransition, null, {
      default: () => this.show ? h("div", {
        key: "icon",
        class: `${clsPrefix}-base-loading__transition-wrapper`
      }, h("div", {
        class: `${clsPrefix}-base-loading__container`
      }, h("svg", {
        class: `${clsPrefix}-base-loading__icon`,
        viewBox: `0 0 ${2 * scaledRadius} ${2 * scaledRadius}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: stroke
        }
      }, h("g", null, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${scaledRadius} ${scaledRadius};270 ${scaledRadius} ${scaledRadius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("circle", {
        class: `${clsPrefix}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        cx: scaledRadius,
        cy: scaledRadius,
        r: radius - strokeWidth / 2,
        "stroke-dasharray": 5.67 * radius,
        "stroke-dashoffset": 18.48 * radius
      }, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${scaledRadius} ${scaledRadius};135 ${scaledRadius} ${scaledRadius};450 ${scaledRadius} ${scaledRadius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * radius};${1.42 * radius};${5.67 * radius}`,
        begin: "0s",
        dur: duration,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${clsPrefix}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});

export { NBaseLoading, NIconSwitchTransition, color2Class, formItemInjectionKey, iconSwitchTransition, isBrowser, useFormItem };
//# sourceMappingURL=Loading.DMQwrvK31767105581793.js.map
