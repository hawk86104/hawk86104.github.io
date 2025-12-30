import { importShared } from './index.BxB45aCK1767105581793.js';
import { c, commonVariables as commonVariables$1, createInjectionKey, derived, cB, cE, cM, useConfig, useTheme, createKey, useThemeClass, throwError } from './light.CLUJsvFB1767105581793.js';
import { iconSwitchTransition, NIconSwitchTransition, NBaseLoading } from './Loading.DMQwrvK31767105581793.js';
import { render, NBaseClose } from './Suffix.BS0_grS71767105581793.js';
import { useRtl } from './use-rtl.Dso2-paz1767105581793.js';
import { NBaseIcon } from './Close.VNV_OzKM1767105581793.js';
import { ErrorIcon, WarningIcon, SuccessIcon, InfoIcon } from './Warning.wvNlVXsF1767105581793.js';
import { NFadeInExpandTransition } from './browser.0EGmEZTw1767105581793.js';
import { createId } from './Scrollbar.COIrvx-21767105581793.js';

function omit(object, keys = [], rest) {
  const omitedObject = {};
  const originalKeys = Object.getOwnPropertyNames(object);
  originalKeys.forEach(originalKey => {
    if (!keys.includes(originalKey)) {
      omitedObject[originalKey] = object[originalKey];
    }
  });
  return Object.assign(omitedObject, rest);
}

const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut,
  cubicBezierEaseIn
} = commonVariables$1;
function fadeInHeightExpandTransition({
  overflow = 'hidden',
  duration = '.3s',
  originalTransition = '',
  leavingDelay = '0s',
  foldPadding = false,
  enterToProps = undefined,
  leaveToProps = undefined,
  reverse = false
} = {}) {
  const enterClass = reverse ? 'leave' : 'enter';
  const leaveClass = reverse ? 'enter' : 'leave';
  return [c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: '0 !important',
    marginBottom: '0 !important',
    paddingTop: foldPadding ? '0 !important' : undefined,
    paddingBottom: foldPadding ? '0 !important' : undefined
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? `,${originalTransition}` : ''}
 `), c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? `,${originalTransition}` : ''}
 `)];
}

const messageApiInjectionKey = createInjectionKey('n-message-api');
const messageProviderInjectionKey = createInjectionKey('n-message-provider');

const commonVariables = {
  margin: '0 0 8px 0',
  padding: '10px 20px',
  maxWidth: '720px',
  minWidth: '420px',
  iconMargin: '0 10px 0 0',
  closeMargin: '0 0 0 10px',
  closeSize: '20px',
  closeIconSize: '16px',
  iconSize: '20px',
  fontSize: '14px'
};

function self(vars) {
  const {
    textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    errorColor,
    warningColor,
    popoverColor,
    boxShadow2,
    primaryColor,
    lineHeight,
    borderRadius,
    closeColorHover,
    closeColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    closeBorderRadius: borderRadius,
    textColor: textColor2,
    textColorInfo: textColor2,
    textColorSuccess: textColor2,
    textColorError: textColor2,
    textColorWarning: textColor2,
    textColorLoading: textColor2,
    color: popoverColor,
    colorInfo: popoverColor,
    colorSuccess: popoverColor,
    colorError: popoverColor,
    colorWarning: popoverColor,
    colorLoading: popoverColor,
    boxShadow: boxShadow2,
    boxShadowInfo: boxShadow2,
    boxShadowSuccess: boxShadow2,
    boxShadowError: boxShadow2,
    boxShadowWarning: boxShadow2,
    boxShadowLoading: boxShadow2,
    iconColor: textColor2,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    iconColorLoading: primaryColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    closeColorHoverLoading: closeColorHover,
    closeColorPressedLoading: closeColorPressed,
    closeIconColorLoading: closeIconColor,
    closeIconColorHoverLoading: closeIconColorHover,
    closeIconColorPressedLoading: closeIconColorPressed,
    loadingColor: primaryColor,
    lineHeight,
    borderRadius,
    border: '0'
  });
}
const messageLight = {
  common: derived,
  self
};

const messageProps = {
  icon: Function,
  type: {
    type: String,
    default: 'info'
  },
  content: [String, Number, Function],
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  keepAliveOnHover: Boolean,
  onClose: Function,
  onMouseenter: Function,
  onMouseleave: Function
};

// vars:
// --n-margin
// --n-bezier
// --n-padding
// --n-max-width
// --n-font-size
// --n-icon-margin
// --n-icon-size
// --n-text-color
// --n-color
// --n-box-shadow
// --n-icon-color-default
// --n-icon-color-info
// --n-icon-color-success
// --n-icon-color-warning
// --n-icon-color-error
// --n-icon-color-loading
// --n-close-size
// --n-close-icon-size
// --n-close-margin
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-border-radius
// --n-close-icon-color
// --n-close-icon-color-pressed
// --n-close-icon-color-hover
// --n-border-radius
const style = c([cB('message-wrapper', `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [fadeInHeightExpandTransition({
  overflow: 'visible',
  originalTransition: 'transform .3s var(--n-bezier)',
  enterToProps: {
    transform: 'scale(1)'
  },
  leaveToProps: {
    transform: 'scale(0.85)'
  }
})]), cB('message', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `, [cE('content', `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), cE('icon', `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [['default', 'info', 'success', 'warning', 'error', 'loading'].map(type => cM(`${type}-type`, [c('> *', `
 color: var(--n-icon-color-${type});
 transition: color .3s var(--n-bezier);
 `)])), c('> *', `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [iconSwitchTransition()])]), cE('close', `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [c('&:hover', `
 color: var(--n-close-icon-color-hover);
 `), c('&:active', `
 color: var(--n-close-icon-color-pressed);
 `)])]), cB('message-container', `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [cM('top', `
 top: 12px;
 left: 0;
 right: 0;
 `), cM('top-left', `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), cM('top-right', `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), cM('bottom', `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), cM('bottom-left', `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), cM('bottom-right', `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);

const {computed,defineComponent: defineComponent$2,h: h$2,inject: inject$1} = await importShared('vue');
const iconRenderMap = {
  info: () => h$2(InfoIcon, null),
  success: () => h$2(SuccessIcon, null),
  warning: () => h$2(WarningIcon, null),
  error: () => h$2(ErrorIcon, null),
  default: () => null
};
const NMessage = defineComponent$2({
  name: 'Message',
  props: Object.assign(Object.assign({}, messageProps), {
    render: Function
  }),
  setup(props) {
    const {
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const {
      props: messageProviderProps,
      mergedClsPrefixRef
    } = inject$1(messageProviderInjectionKey);
    const rtlEnabledRef = useRtl('Message', mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme('Message', '-message', style, messageLight, messageProviderProps, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          padding,
          margin,
          maxWidth,
          iconMargin,
          closeMargin,
          closeSize,
          iconSize,
          fontSize,
          lineHeight,
          borderRadius,
          border,
          iconColorInfo,
          iconColorSuccess,
          iconColorWarning,
          iconColorError,
          iconColorLoading,
          closeIconSize,
          closeBorderRadius,
          [createKey('textColor', type)]: textColor,
          [createKey('boxShadow', type)]: boxShadow,
          [createKey('color', type)]: color,
          [createKey('closeColorHover', type)]: closeColorHover,
          [createKey('closeColorPressed', type)]: closeColorPressed,
          [createKey('closeIconColor', type)]: closeIconColor,
          [createKey('closeIconColorPressed', type)]: closeIconColorPressed,
          [createKey('closeIconColorHover', type)]: closeIconColorHover
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-margin': margin,
        '--n-padding': padding,
        '--n-max-width': maxWidth,
        '--n-font-size': fontSize,
        '--n-icon-margin': iconMargin,
        '--n-icon-size': iconSize,
        '--n-close-icon-size': closeIconSize,
        '--n-close-border-radius': closeBorderRadius,
        '--n-close-size': closeSize,
        '--n-close-margin': closeMargin,
        '--n-text-color': textColor,
        '--n-color': color,
        '--n-box-shadow': boxShadow,
        '--n-icon-color-info': iconColorInfo,
        '--n-icon-color-success': iconColorSuccess,
        '--n-icon-color-warning': iconColorWarning,
        '--n-icon-color-error': iconColorError,
        '--n-icon-color-loading': iconColorLoading,
        '--n-close-color-hover': closeColorHover,
        '--n-close-color-pressed': closeColorPressed,
        '--n-close-icon-color': closeIconColor,
        '--n-close-icon-color-pressed': closeIconColorPressed,
        '--n-close-icon-color-hover': closeIconColorHover,
        '--n-line-height': lineHeight,
        '--n-border-radius': borderRadius,
        '--n-border': border
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('message', computed(() => props.type[0]), cssVarsRef, {}) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      messageProviderProps,
      handleClose() {
        var _a;
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      },
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      placement: messageProviderProps.placement
    };
  },
  render() {
    const {
      render: renderMessage,
      type,
      closable,
      content,
      mergedClsPrefix,
      cssVars,
      themeClass,
      onRender,
      icon,
      handleClose,
      showIcon
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    let iconNode;
    return h$2("div", {
      class: [`${mergedClsPrefix}-message-wrapper`, themeClass],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: [{
        alignItems: this.placement.startsWith('top') ? 'flex-start' : 'flex-end'
      }, cssVars]
    }, renderMessage ? renderMessage(this.$props) : h$2("div", {
      class: [`${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`, this.rtlEnabled && `${mergedClsPrefix}-message--rtl`]
    }, (iconNode = createIconVNode(icon, type, mergedClsPrefix)) && showIcon ? h$2("div", {
      class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type`
    }, h$2(NIconSwitchTransition, null, {
      default: () => iconNode
    })) : null, h$2("div", {
      class: `${mergedClsPrefix}-message__content`
    }, render(content)), closable ? h$2(NBaseClose, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-message__close`,
      onClick: handleClose,
      absolute: true
    }) : null));
  }
});
function createIconVNode(icon, type, clsPrefix) {
  if (typeof icon === 'function') {
    return icon();
  } else {
    const innerIcon = type === 'loading' ? h$2(NBaseLoading, {
      clsPrefix: clsPrefix,
      strokeWidth: 24,
      scale: 0.85
    }) : iconRenderMap[type]();
    if (!innerIcon) return null;
    return h$2(NBaseIcon, {
      clsPrefix: clsPrefix,
      key: type
    }, {
      default: () => innerIcon
    });
  }
}

const {defineComponent: defineComponent$1,h: h$1,onMounted,ref: ref$1} = await importShared('vue');
const MessageEnvironment = defineComponent$1({
  name: 'MessageEnvironment',
  props: Object.assign(Object.assign({}, messageProps), {
    duration: {
      type: Number,
      default: 3000
    },
    onAfterLeave: Function,
    onLeave: Function,
    internalKey: {
      type: String,
      required: true
    },
    // private
    onInternalAfterLeave: Function,
    // deprecated
    onHide: Function,
    onAfterHide: Function
  }),
  setup(props) {
    let timerId = null;
    const showRef = ref$1(true);
    onMounted(() => {
      setHideTimeout();
    });
    function setHideTimeout() {
      const {
        duration
      } = props;
      if (duration) {
        timerId = window.setTimeout(hide, duration);
      }
    }
    function handleMouseenter(e) {
      if (e.currentTarget !== e.target) return;
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }
    function handleMouseleave(e) {
      if (e.currentTarget !== e.target) return;
      setHideTimeout();
    }
    function hide() {
      const {
        onHide
      } = props;
      showRef.value = false;
      if (timerId) {
        window.clearTimeout(timerId);
        timerId = null;
      }
      // deprecated
      if (onHide) onHide();
    }
    function handleClose() {
      const {
        onClose
      } = props;
      if (onClose) onClose();
      hide();
    }
    function handleAfterLeave() {
      const {
        onAfterLeave,
        onInternalAfterLeave,
        onAfterHide,
        internalKey
      } = props;
      if (onAfterLeave) onAfterLeave();
      if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
      // deprecated
      if (onAfterHide) onAfterHide();
    }
    // deprecated
    function deactivate() {
      hide();
    }
    return {
      show: showRef,
      hide,
      handleClose,
      handleAfterLeave,
      handleMouseleave,
      handleMouseenter,
      deactivate
    };
  },
  render() {
    return h$1(NFadeInExpandTransition, {
      appear: true,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? h$1(NMessage, {
        content: this.content,
        type: this.type,
        icon: this.icon,
        showIcon: this.showIcon,
        closable: this.closable,
        onClose: this.handleClose,
        onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : undefined,
        onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : undefined
      }) : null]
    });
  }
});

const {defineComponent,Fragment,h,provide,reactive,ref,Teleport} = await importShared('vue');
const messageProviderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: [String, Object],
  duration: {
    type: Number,
    default: 3000
  },
  keepAliveOnHover: Boolean,
  max: Number,
  placement: {
    type: String,
    default: 'top'
  },
  closable: Boolean,
  containerClass: String,
  containerStyle: [String, Object]
});
const NMessageProvider = defineComponent({
  name: 'MessageProvider',
  props: messageProviderProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const messageListRef = ref([]);
    const messageRefs = ref({});
    const api = {
      create(content, options) {
        return create(content, Object.assign({
          type: 'default'
        }, options));
      },
      info(content, options) {
        return create(content, Object.assign(Object.assign({}, options), {
          type: 'info'
        }));
      },
      success(content, options) {
        return create(content, Object.assign(Object.assign({}, options), {
          type: 'success'
        }));
      },
      warning(content, options) {
        return create(content, Object.assign(Object.assign({}, options), {
          type: 'warning'
        }));
      },
      error(content, options) {
        return create(content, Object.assign(Object.assign({}, options), {
          type: 'error'
        }));
      },
      loading(content, options) {
        return create(content, Object.assign(Object.assign({}, options), {
          type: 'loading'
        }));
      },
      destroyAll
    };
    provide(messageProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    });
    provide(messageApiInjectionKey, api);
    function create(content, options) {
      const key = createId();
      const messageReactive = reactive(Object.assign(Object.assign({}, options), {
        content,
        key,
        destroy: () => {
          var _a;
          (_a = messageRefs.value[key]) === null || _a === void 0 ? void 0 : _a.hide();
        }
      }));
      const {
        max
      } = props;
      if (max && messageListRef.value.length >= max) {
        messageListRef.value.shift();
      }
      messageListRef.value.push(messageReactive);
      return messageReactive;
    }
    function handleAfterLeave(key) {
      messageListRef.value.splice(messageListRef.value.findIndex(message => message.key === key), 1);
      delete messageRefs.value[key];
    }
    function destroyAll() {
      Object.values(messageRefs.value).forEach(messageInstRef => {
        messageInstRef.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      messageRefs,
      messageList: messageListRef,
      handleAfterLeave
    }, api);
  },
  render() {
    var _a, _b, _c;
    return h(Fragment, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), this.messageList.length ? h(Teleport, {
      to: (_c = this.to) !== null && _c !== void 0 ? _c : 'body'
    }, h("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map(message => {
      return h(MessageEnvironment, Object.assign({
        ref: inst => {
          if (inst) {
            this.messageRefs[message.key] = inst;
          }
        },
        internalKey: message.key,
        onInternalAfterLeave: this.handleAfterLeave
      }, omit(message, ['destroy'], undefined), {
        duration: message.duration === undefined ? this.duration : message.duration,
        keepAliveOnHover: message.keepAliveOnHover === undefined ? this.keepAliveOnHover : message.keepAliveOnHover,
        closable: message.closable === undefined ? this.closable : message.closable
      }));
    }))) : null);
  }
});

const {inject} = await importShared('vue');
function useMessage() {
  const api = inject(messageApiInjectionKey, null);
  if (api === null) {
    throwError('use-message', 'No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.');
  }
  return api;
}

export { NMessageProvider, fadeInHeightExpandTransition, messageProviderProps, omit, self, useMessage };
//# sourceMappingURL=use-message.C-NKuHgJ1767105581793.js.map
