import { importShared } from './index.BxB45aCK1767105581793.js';
import { derived, cB, cM, c, cE, createInjectionKey, useConfig, useTheme, useThemeClass, resolveWrappedSlot, resolveSlot, call } from './light.CLUJsvFB1767105581793.js';
import { formatLength } from './format-length.BfWHZVRc1767105581793.js';
import { NBaseIcon, ErrorIcon } from './Close.VNV_OzKM1767105581793.js';
import { useMergedState, on, off } from './use-merged-state.tu3_gbk31767105581793.js';

function self$1(vars) {
  const {
    popoverColor,
    dividerColor,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    buttonBorderColor: dividerColor,
    borderRadiusSquare: borderRadius,
    boxShadow: '0 2px 8px 0px rgba(0, 0, 0, .12)'
  };
}
const themeLight$1 = {
  common: derived,
  self: self$1
};

// --n-border-radius-square
const style$1 = cB('float-button-group', [cB('float-button', `
 position: relative;
 `), cM('square-shape', `
 background-color: var(--n-color);
 cursor: pointer;
 display: flex;
 width: fit-content;
 align-items: center;
 justify-content: center;
 border-radius: var(--n-border-radius-square);
 flex-direction: column;
 box-shadow: var(--n-box-shadow);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [cB('float-button', `
 background-color: unset;
 border-radius: 0;
 box-shadow: none;
 box-sizing: content-box;
 `, [c('&:not(:last-child)', `
 border-bottom: 1px solid var(--n-button-border-color); 
 `), c('&:first-child', `
 border-top-left-radius: 4px;
 border-top-right-radius: 4px;
 `), c('&:last-child', `
 border-bottom-left-radius: 4px;
 border-bottom-right-radius: 4px;
 `), cE('fill', `
 top: 4px;
 right: 4px;
 bottom: 4px;
 left: 4px;
 border-radius: var(--n-border-radius-square); 
 `)])]), cM('circle-shape', [c('>:not(:last-child)', `
 margin-bottom: 16px;
 `)])]);

const {computed: computed$1,defineComponent: defineComponent$1,h: h$1,provide,toRef: toRef$1} = await importShared('vue');
const floatButtonGroupProps = Object.assign(Object.assign({}, useTheme.props), {
  left: [Number, String],
  right: [Number, String],
  top: [Number, String],
  bottom: [Number, String],
  shape: {
    type: String,
    default: 'circle'
  },
  position: {
    type: String,
    default: 'fixed'
  }
});
const floatButtonGroupInjectionKey = createInjectionKey('n-float-button-group');
const FloatButtonGroup = defineComponent$1({
  name: 'FloatButtonGroup',
  props: floatButtonGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('FloatButtonGroup', '-float-button-group', style$1, themeLight$1, props, mergedClsPrefixRef);
    const cssVarsRef = computed$1(() => {
      const {
        self: {
          color,
          boxShadow,
          buttonBorderColor,
          borderRadiusSquare
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-box-shadow': boxShadow,
        '--n-color': color,
        '--n-button-border-color': buttonBorderColor,
        '--n-border-radius-square': borderRadiusSquare,
        position: props.position,
        left: formatLength(props.left) || '',
        right: formatLength(props.right) || '',
        top: formatLength(props.top) || '',
        bottom: formatLength(props.bottom) || ''
      };
    });
    provide(floatButtonGroupInjectionKey, {
      shapeRef: toRef$1(props, 'shape')
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('float-button', undefined, cssVarsRef, props) : undefined;
    return {
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      mergedClsPrefix: mergedClsPrefixRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      cssVars,
      shape
    } = this;
    return h$1("div", {
      class: [`${mergedClsPrefix}-float-button-group`, `${mergedClsPrefix}-float-button-group--${shape}-shape`],
      style: cssVars,
      role: "group"
    }, this.$slots);
  }
});

function self(vars) {
  const {
    popoverColor,
    textColor2,
    buttonColor2Hover,
    buttonColor2Pressed,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    colorHover: buttonColor2Hover,
    colorPressed: buttonColor2Pressed,
    colorPrimary: primaryColor,
    colorPrimaryHover: primaryColorHover,
    colorPrimaryPressed: primaryColorPressed,
    textColor: textColor2,
    boxShadow: '0 2px 8px 0px rgba(0, 0, 0, .16)',
    boxShadowHover: '0 2px 12px 0px rgba(0, 0, 0, .24)',
    boxShadowPressed: '0 2px 12px 0px rgba(0, 0, 0, .24)',
    textColorPrimary: '#fff',
    borderRadiusSquare: borderRadius
  };
}
const themeLight = {
  common: derived,
  self
};

// vars:
// --n-bezier
// --n-box-shadow
// --n-box-shadow-hover
// --n-box-shadow-pressed
// --n-color
// --n-text-color
// --n-color-hover
// --n-color-pressed
// --n-border-radius-square
const style = cB('float-button', `
 user-select: none;
 cursor: pointer;
 color: var(--n-text-color);
 background-color: var(--n-color);
 font-size: 18px;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-shadow: var(--n-box-shadow);
 display: flex;
 align-items: stretch;
 box-sizing: border-box;
`, [cM('circle-shape', `
 border-radius: 4096px;
 `), cM('square-shape', `
 border-radius: var(--n-border-radius-square);
 `), cE('fill', `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `), cE('body', `
 position: relative;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 border-radius: inherit;
 flex-direction: column;
 box-sizing: border-box;
 padding: 2px 4px;
 gap: 2px;
 transform: scale(1);
 `, [cE('description', `
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]), c('&:hover', 'box-shadow: var(--n-box-shadow-hover);', [c('>', [cE('fill', `
 background-color: var(--n-color-hover);
 `)])]), c('&:active', 'box-shadow: var(--n-box-shadow-pressed);', [c('>', [cE('fill', `
 background-color: var(--n-color-pressed);
 `)])]), cM('show-menu', [c('>', [cE('menu', `
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `), cE('close', `
 transform: scale(1);
 opacity: 1;
 `), cE('body', `
 transform: scale(0.75);
 opacity: 0;
 `)])]), cE('close', `
 opacity: 0;
 transform: scale(0.75);
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 `), cE('menu', `
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `, [c('> *', `
 margin-bottom: 16px;
 `), cB('float-button', `
 position: relative !important;
 `)])]);

const {computed,defineComponent,h,inject,onBeforeUnmount,onMounted,ref,toRef} = await importShared('vue');
const floatButtonProps = Object.assign(Object.assign({}, useTheme.props), {
  width: {
    type: [Number, String],
    default: 40
  },
  height: {
    type: [Number, String],
    default: 40
  },
  left: [Number, String],
  right: [Number, String],
  top: [Number, String],
  bottom: [Number, String],
  shape: {
    type: String,
    default: 'circle'
  },
  position: {
    type: String,
    default: 'fixed'
  },
  type: {
    type: String,
    default: 'default'
  },
  menuTrigger: String,
  showMenu: {
    type: Boolean,
    default: undefined
  },
  onUpdateShowMenu: {
    type: [Function, Array],
    default: undefined
  },
  'onUpdate:showMenu': {
    type: [Function, Array],
    default: undefined
  }
});
const NFloatButton = defineComponent({
  name: 'FloatButton',
  props: floatButtonProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const selfElRef = ref(null);
    const themeRef = useTheme('FloatButton', '-float-button', style, themeLight, props, mergedClsPrefixRef);
    const floatButtonGroupInjection = inject(floatButtonGroupInjectionKey, null);
    const uncontrolledShowMenuRef = ref(false);
    const controlledShoeMenuRef = toRef(props, 'showMenu');
    const mergedShowMenuRef = useMergedState(controlledShoeMenuRef, uncontrolledShowMenuRef);
    function doUpdateShowMenu(value) {
      const {
        onUpdateShowMenu,
        'onUpdate:showMenu': _onUpdateShowMenu
      } = props;
      uncontrolledShowMenuRef.value = value;
      if (onUpdateShowMenu) {
        call(onUpdateShowMenu, value);
      }
      if (_onUpdateShowMenu) {
        call(_onUpdateShowMenu, value);
      }
    }
    const cssVarsRef = computed(() => {
      const {
        self: {
          color,
          textColor,
          boxShadow,
          boxShadowHover,
          boxShadowPressed,
          colorHover,
          colorPrimary,
          colorPrimaryHover,
          textColorPrimary,
          borderRadiusSquare,
          colorPressed,
          colorPrimaryPressed
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      const {
        type
      } = props;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-box-shadow': boxShadow,
        '--n-box-shadow-hover': boxShadowHover,
        '--n-box-shadow-pressed': boxShadowPressed,
        '--n-color': type === 'primary' ? colorPrimary : color,
        '--n-text-color': type === 'primary' ? textColorPrimary : textColor,
        '--n-color-hover': type === 'primary' ? colorPrimaryHover : colorHover,
        '--n-color-pressed': type === 'primary' ? colorPrimaryPressed : colorPressed,
        '--n-border-radius-square': borderRadiusSquare
      };
    });
    const inlineStyle = computed(() => {
      const {
        width,
        height
      } = props;
      return Object.assign({
        position: floatButtonGroupInjection ? undefined : props.position,
        width: formatLength(width),
        minHeight: formatLength(height)
      }, floatButtonGroupInjection ? null : {
        left: formatLength(props.left),
        right: formatLength(props.right),
        top: formatLength(props.top),
        bottom: formatLength(props.bottom)
      });
    });
    const mergedShapeRef = computed(() => {
      return floatButtonGroupInjection ? floatButtonGroupInjection.shapeRef.value : props.shape;
    });
    const Mouseenter = () => {
      if (props.menuTrigger === 'hover') {
        doUpdateShowMenu(true);
      }
    };
    const handleMouseleave = () => {
      if (props.menuTrigger === 'hover' && mergedShowMenuRef.value) {
        doUpdateShowMenu(false);
      }
    };
    const handleClick = () => {
      if (props.menuTrigger === 'click') {
        doUpdateShowMenu(!mergedShowMenuRef.value);
      }
    };
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('float-button', computed(() => props.type[0]), cssVarsRef, props) : undefined;
    onMounted(() => {
      const selfEl = selfElRef.value;
      if (selfEl) {
        on('mousemoveoutside', selfEl, handleMouseleave);
      }
    });
    onBeforeUnmount(() => {
      const selfEl = selfElRef.value;
      if (selfEl) {
        off('mousemoveoutside', selfEl, handleMouseleave);
      }
    });
    return {
      inlineStyle,
      selfElRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedShape: mergedShapeRef,
      mergedShowMenu: mergedShowMenuRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      Mouseenter,
      handleMouseleave,
      handleClick
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      cssVars,
      mergedShape,
      type,
      menuTrigger,
      mergedShowMenu,
      themeClass,
      $slots,
      inlineStyle,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfElRef",
      class: [`${mergedClsPrefix}-float-button`, `${mergedClsPrefix}-float-button--${mergedShape}-shape`, `${mergedClsPrefix}-float-button--${type}-type`, mergedShowMenu && `${mergedClsPrefix}-float-button--show-menu`, themeClass],
      style: [cssVars, inlineStyle],
      onMouseenter: this.Mouseenter,
      onMouseleave: this.handleMouseleave,
      onClick: this.handleClick,
      role: "button"
    }, h("div", {
      class: `${mergedClsPrefix}-float-button__fill`,
      "aria-hidden": true
    }), h("div", {
      class: `${mergedClsPrefix}-float-button__body`
    }, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots), resolveWrappedSlot($slots.description, children => {
      if (children) {
        return h("div", {
          class: `${mergedClsPrefix}-float-button__description`
        }, children);
      }
      return null;
    })), menuTrigger ? h("div", {
      class: `${mergedClsPrefix}-float-button__close`
    }, h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => h(ErrorIcon, null)
    })) : null, menuTrigger ? h("div", {
      onClick: e => {
        e.stopPropagation();
      },
      "data-float-button-menu": true,
      class: `${mergedClsPrefix}-float-button__menu`
    }, resolveSlot($slots.menu, () => [])) : null);
  }
});

export { FloatButtonGroup, NFloatButton, floatButtonGroupProps, floatButtonProps };
//# sourceMappingURL=FloatButton.B8F-bQjc1767105581793.js.map
