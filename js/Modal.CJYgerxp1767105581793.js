import { importShared } from './index.BxB45aCK1767105581793.js';
import { createInjectionKey, createTheme, derived, c, cB, insideModal, cE, cM, asModal, resolveWrappedSlot, resolveSlot, useConfig, useTheme, createKey, useThemeClass, throwError, warn, call } from './light.CLUJsvFB1767105581793.js';
import { keysOf, cardLight, cardBaseProps, NCard, cardBasePropKeys, fadeInScaleUpTransition } from './Card.CmCLdudX1767105581793.js';
import { NBaseIcon } from './Close.VNV_OzKM1767105581793.js';
import { render, NBaseClose } from './Suffix.BS0_grS71767105581793.js';
import { buttonLight, Button } from './Button.CtEklqVH1767105581793.js';
import { useRtl, isMounted } from './use-rtl.Dso2-paz1767105581793.js';
import { getMargin, scrollbarLight, Scrollbar, fadeInTransition, getPreciseEventTarget } from './Scrollbar.COIrvx-21767105581793.js';
import { ErrorIcon, WarningIcon, SuccessIcon, InfoIcon } from './Warning.wvNlVXsF1767105581793.js';
import { isBrowser, hasInstance, getFirstSlotVNodeWithTypedProps, FocusTrap, clickoutside, keep, modalInjectionKey, modalBodyInjectionKey, drawerBodyInjectionKey, popoverBodyInjectionKey, LazyTeleport, zindexable, modalProviderInjectionKey as modalProviderInjectionKey$1 } from './keep.JgtZum5h1767105581793.js';
import { on, off } from './use-merged-state.tu3_gbk31767105581793.js';
import { isBrowser as isBrowser$1 } from './Loading.DMQwrvK31767105581793.js';
import { eventEffectNotPerformed } from './index.CUC0aJa51767105581793.js';

const {ref: ref$5,readonly: readonly$1,onBeforeMount: onBeforeMount$2,onBeforeUnmount: onBeforeUnmount$3} = await importShared('vue');
const mousePositionRef = ref$5(null);
function clickHandler(e) {
    if (e.clientX > 0 || e.clientY > 0) {
        mousePositionRef.value = {
            x: e.clientX,
            y: e.clientY
        };
    }
    else {
        // x = 0 & y = 0
        const { target } = e;
        if (target instanceof Element) {
            const { left, top, width, height } = target.getBoundingClientRect();
            if (left > 0 || top > 0) {
                // impossible to be triggered by real click
                mousePositionRef.value = {
                    x: left + width / 2,
                    y: top + height / 2
                };
            }
            else {
                mousePositionRef.value = { x: 0, y: 0 };
            }
        }
        else {
            mousePositionRef.value = null;
        }
    }
}
let usedCount$1 = 0;
let managable$1 = true;
function useClickPosition() {
    if (!isBrowser)
        return readonly$1(ref$5(null));
    if (usedCount$1 === 0)
        on('click', document, clickHandler, true);
    const setup = () => {
        usedCount$1 += 1;
    };
    if (managable$1 && (managable$1 = hasInstance())) {
        onBeforeMount$2(setup);
        onBeforeUnmount$3(() => {
            usedCount$1 -= 1;
            if (usedCount$1 === 0)
                off('click', document, clickHandler, true);
        });
    }
    else {
        setup();
    }
    return readonly$1(mousePositionRef);
}

const {onBeforeMount: onBeforeMount$1,onBeforeUnmount: onBeforeUnmount$2,ref: ref$4,readonly} = await importShared('vue');
const clickedTimeRef = ref$4(undefined);
let usedCount = 0;
function handleClick() {
    clickedTimeRef.value = Date.now();
}
let managable = true;
function useClicked(timeout) {
    if (!isBrowser)
        return readonly(ref$4(false));
    const clickedRef = ref$4(false);
    let timerId = null;
    function clearTimer() {
        if (timerId !== null)
            window.clearTimeout(timerId);
    }
    function clickedHandler() {
        clearTimer();
        clickedRef.value = true;
        timerId = window.setTimeout(() => {
            clickedRef.value = false;
        }, timeout);
    }
    if (usedCount === 0) {
        on('click', window, handleClick, true);
    }
    const setup = () => {
        usedCount += 1;
        on('click', window, clickedHandler, true);
    };
    if (managable && (managable = hasInstance())) {
        onBeforeMount$1(setup);
        onBeforeUnmount$2(() => {
            usedCount -= 1;
            if (usedCount === 0) {
                off('click', window, handleClick, true);
            }
            off('click', window, clickedHandler, true);
            clearTimer();
        });
    }
    else {
        setup();
    }
    return readonly(clickedRef);
}

const {onBeforeMount,onBeforeUnmount: onBeforeUnmount$1,ref: ref$3} = await importShared('vue');
const isComposingRef = ref$3(false);
function compositionStartHandler() {
  isComposingRef.value = true;
}
function compositionEndHandler() {
  isComposingRef.value = false;
}
let mountedCount = 0;
function useIsComposing() {
  if (isBrowser$1) {
    onBeforeMount(() => {
      if (!mountedCount) {
        window.addEventListener('compositionstart', compositionStartHandler);
        window.addEventListener('compositionend', compositionEndHandler);
      }
      mountedCount++;
    });
    onBeforeUnmount$1(() => {
      if (mountedCount <= 1) {
        window.removeEventListener('compositionstart', compositionStartHandler);
        window.removeEventListener('compositionend', compositionEndHandler);
        mountedCount = 0;
      } else {
        mountedCount--;
      }
    });
  }
  return isComposingRef;
}

const {onBeforeUnmount,onMounted,ref: ref$2,watch: watch$1} = await importShared('vue');

let lockCount = 0;
let originalMarginRight = '';
let originalOverflow = '';
let originalOverflowX = '';
let originalOverflowY = '';
const lockHtmlScrollRightCompensationRef = ref$2('0px');
function useLockHtmlScroll(lockRef) {
  // not browser
  if (typeof document === 'undefined') return;
  const el = document.documentElement;
  let watchStopHandle;
  let activated = false;
  const unlock = () => {
    el.style.marginRight = originalMarginRight;
    el.style.overflow = originalOverflow;
    el.style.overflowX = originalOverflowX;
    el.style.overflowY = originalOverflowY;
    lockHtmlScrollRightCompensationRef.value = '0px';
  };
  onMounted(() => {
    watchStopHandle = watch$1(lockRef, value => {
      if (value) {
        if (!lockCount) {
          const scrollbarWidth = window.innerWidth - el.offsetWidth;
          if (scrollbarWidth > 0) {
            originalMarginRight = el.style.marginRight;
            el.style.marginRight = `${scrollbarWidth}px`;
            lockHtmlScrollRightCompensationRef.value = `${scrollbarWidth}px`;
          }
          originalOverflow = el.style.overflow;
          originalOverflowX = el.style.overflowX;
          originalOverflowY = el.style.overflowY;
          el.style.overflow = 'hidden';
          el.style.overflowX = 'hidden';
          el.style.overflowY = 'hidden';
        }
        activated = true;
        lockCount++;
      } else {
        lockCount--;
        if (!lockCount) {
          unlock();
        }
        activated = false;
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    watchStopHandle === null || watchStopHandle === void 0 ? void 0 : watchStopHandle();
    if (activated) {
      lockCount--;
      if (!lockCount) {
        unlock();
      }
      activated = false;
    }
  });
}

const dialogProviderInjectionKey = createInjectionKey('n-dialog-provider');
const dialogApiInjectionKey = createInjectionKey('n-dialog-api');
const dialogReactiveListInjectionKey = createInjectionKey('n-dialog-reactive-list');

const commonVars = {
  titleFontSize: '18px',
  padding: '16px 28px 20px 28px',
  iconSize: '28px',
  actionSpace: '12px',
  contentMargin: '8px 0 16px 0',
  iconMargin: '0 4px 0 0',
  iconMarginIconTop: '4px 0 8px 0',
  closeSize: '22px',
  closeIconSize: '18px',
  closeMargin: '20px 26px 0 0',
  closeMarginIconTop: '10px 16px 0 0'
};

function self$1(vars) {
  const {
    textColor1,
    textColor2,
    modalColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    primaryColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    fontSize,
    lineHeight,
    border: `1px solid ${dividerColor}`,
    titleTextColor: textColor1,
    textColor: textColor2,
    color: modalColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    iconColor: primaryColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    borderRadius,
    titleFontWeight: fontWeightStrong
  });
}
const dialogLight = createTheme({
  name: 'Dialog',
  common: derived,
  peers: {
    Button: buttonLight
  },
  self: self$1
});

const dialogProps = {
  icon: Function,
  type: {
    type: String,
    default: 'default'
  },
  title: [String, Function],
  closable: {
    type: Boolean,
    default: true
  },
  negativeText: String,
  positiveText: String,
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  content: [String, Function],
  action: Function,
  showIcon: {
    type: Boolean,
    default: true
  },
  loading: Boolean,
  bordered: Boolean,
  iconPlacement: String,
  titleClass: [String, Array],
  titleStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  actionClass: [String, Array],
  actionStyle: [String, Object],
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function,
  closeFocusable: Boolean
};
const dialogPropKeys = keysOf(dialogProps);

// vars:
// --n-icon-color
// --n-bezier
// --n-icon-margin-top
// --n-icon-margin-right
// --n-icon-margin-bottom
// --n-icon-margin-left
// --n-icon-size
// --n-close-border-radius
// --n-close-margin
// --n-close-size
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-icon-color
// --n-close-icon-color-hover
// --n-close-icon-color-pressed
// --n-color
// --n-text-color
// --n-border-radius
// --n-padding
// --n-line-height
// --n-border
// --n-content-margin
// --n-title-font-size
// --n-title-font-weight
// --n-title-text-color
// --n-action-space
const style$1 = c([cB('dialog', `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [cE('icon', {
  color: 'var(--n-icon-color)'
}), cM('bordered', {
  border: 'var(--n-border)'
}), cM('icon-top', [cE('close', {
  margin: 'var(--n-close-margin)'
}), cE('icon', {
  margin: 'var(--n-icon-margin)'
}), cE('content', {
  textAlign: 'center'
}), cE('title', {
  justifyContent: 'center'
}), cE('action', {
  justifyContent: 'center'
})]), cM('icon-left', [cE('icon', {
  margin: 'var(--n-icon-margin)'
}), cM('closable', [cE('title', `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), cE('close', `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), cE('content', `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [cM('last', 'margin-bottom: 0;')]), cE('action', `
 display: flex;
 justify-content: flex-end;
 `, [c('> *:not(:last-child)', `
 margin-right: var(--n-action-space);
 `)]), cE('icon', `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), cE('title', `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), cB('dialog-icon-container', `
 display: flex;
 justify-content: center;
 `)]), insideModal(cB('dialog', `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), cB('dialog', [asModal(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]);

const {computed: computed$3,defineComponent: defineComponent$2,h: h$2} = await importShared('vue');
const iconRenderMap = {
  default: () => h$2(InfoIcon, null),
  info: () => h$2(InfoIcon, null),
  success: () => h$2(SuccessIcon, null),
  warning: () => h$2(WarningIcon, null),
  error: () => h$2(ErrorIcon, null)
};
const NDialog = defineComponent$2({
  name: 'Dialog',
  alias: ['NimbusConfirmCard',
  // deprecated
  'Confirm' // deprecated
  ],
  props: Object.assign(Object.assign({}, useTheme.props), dialogProps),
  slots: Object,
  setup(props) {
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl('Dialog', mergedRtlRef, mergedClsPrefixRef);
    const mergedIconPlacementRef = computed$3(() => {
      var _a, _b;
      const {
        iconPlacement
      } = props;
      return iconPlacement || ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Dialog) === null || _b === void 0 ? void 0 : _b.iconPlacement) || 'left';
    });
    function handlePositiveClick(e) {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) onPositiveClick(e);
    }
    function handleNegativeClick(e) {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) onNegativeClick(e);
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) onClose();
    }
    const themeRef = useTheme('Dialog', '-dialog', style$1, dialogLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$3(() => {
      const {
        type
      } = props;
      const iconPlacement = mergedIconPlacementRef.value;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          lineHeight,
          border,
          titleTextColor,
          textColor,
          color,
          closeBorderRadius,
          closeColorHover,
          closeColorPressed,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          closeIconSize,
          borderRadius,
          titleFontWeight,
          titleFontSize,
          padding,
          iconSize,
          actionSpace,
          contentMargin,
          closeSize,
          [iconPlacement === 'top' ? 'iconMarginIconTop' : 'iconMargin']: iconMargin,
          [iconPlacement === 'top' ? 'closeMarginIconTop' : 'closeMargin']: closeMargin,
          [createKey('iconColor', type)]: iconColor
        }
      } = themeRef.value;
      const iconMarginDiscrete = getMargin(iconMargin);
      return {
        '--n-font-size': fontSize,
        '--n-icon-color': iconColor,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-close-margin': closeMargin,
        '--n-icon-margin-top': iconMarginDiscrete.top,
        '--n-icon-margin-right': iconMarginDiscrete.right,
        '--n-icon-margin-bottom': iconMarginDiscrete.bottom,
        '--n-icon-margin-left': iconMarginDiscrete.left,
        '--n-icon-size': iconSize,
        '--n-close-size': closeSize,
        '--n-close-icon-size': closeIconSize,
        '--n-close-border-radius': closeBorderRadius,
        '--n-close-color-hover': closeColorHover,
        '--n-close-color-pressed': closeColorPressed,
        '--n-close-icon-color': closeIconColor,
        '--n-close-icon-color-hover': closeIconColorHover,
        '--n-close-icon-color-pressed': closeIconColorPressed,
        '--n-color': color,
        '--n-text-color': textColor,
        '--n-border-radius': borderRadius,
        '--n-padding': padding,
        '--n-line-height': lineHeight,
        '--n-border': border,
        '--n-content-margin': contentMargin,
        '--n-title-font-size': titleFontSize,
        '--n-title-font-weight': titleFontWeight,
        '--n-title-text-color': titleTextColor,
        '--n-action-space': actionSpace
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('dialog', computed$3(() => `${props.type[0]}${mergedIconPlacementRef.value[0]}`), cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      mergedIconPlacement: mergedIconPlacementRef,
      mergedTheme: themeRef,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      bordered,
      mergedIconPlacement,
      cssVars,
      closable,
      showIcon,
      title,
      content,
      action,
      negativeText,
      positiveText,
      positiveButtonProps,
      negativeButtonProps,
      handlePositiveClick,
      handleNegativeClick,
      mergedTheme,
      loading,
      type,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const icon = showIcon ? h$2(NBaseIcon, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-dialog__icon`
    }, {
      default: () => resolveWrappedSlot(this.$slots.icon, children => children || (this.icon ? render(this.icon) : iconRenderMap[this.type]()))
    }) : null;
    const actionNode = resolveWrappedSlot(this.$slots.action, children => children || positiveText || negativeText || action ? h$2("div", {
      class: [`${mergedClsPrefix}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, children || (action ? [render(action)] : [this.negativeText && h$2(Button, Object.assign({
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      ghost: true,
      size: "small",
      onClick: handleNegativeClick
    }, negativeButtonProps), {
      default: () => render(this.negativeText)
    }), this.positiveText && h$2(Button, Object.assign({
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "small",
      type: type === 'default' ? 'primary' : type,
      disabled: loading,
      loading: loading,
      onClick: handlePositiveClick
    }, positiveButtonProps), {
      default: () => render(this.positiveText)
    })])) : null);
    return h$2("div", {
      class: [`${mergedClsPrefix}-dialog`, this.themeClass, this.closable && `${mergedClsPrefix}-dialog--closable`, `${mergedClsPrefix}-dialog--icon-${mergedIconPlacement}`, bordered && `${mergedClsPrefix}-dialog--bordered`, this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`],
      style: cssVars,
      role: "dialog"
    }, closable ? resolveWrappedSlot(this.$slots.close, node => {
      const classNames = [`${mergedClsPrefix}-dialog__close`, this.rtlEnabled && `${mergedClsPrefix}-dialog--rtl`];
      return node ? h$2("div", {
        class: classNames
      }, node) : h$2(NBaseClose, {
        focusable: this.closeFocusable,
        clsPrefix: mergedClsPrefix,
        class: classNames,
        onClick: this.handleCloseClick
      });
    }) : null, showIcon && mergedIconPlacement === 'top' ? h$2("div", {
      class: `${mergedClsPrefix}-dialog-icon-container`
    }, icon) : null, h$2("div", {
      class: [`${mergedClsPrefix}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, showIcon && mergedIconPlacement === 'left' ? icon : null, resolveSlot(this.$slots.header, () => [render(title)])), h$2("div", {
      class: [`${mergedClsPrefix}-dialog__content`, actionNode ? '' : `${mergedClsPrefix}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, resolveSlot(this.$slots.default, () => [render(content)])), actionNode);
  }
});

function self(vars) {
  const {
    modalColor,
    textColor2,
    boxShadow3
  } = vars;
  return {
    color: modalColor,
    textColor: textColor2,
    boxShadow: boxShadow3
  };
}
const modalLight = createTheme({
  name: 'Modal',
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Dialog: dialogLight,
    Card: cardLight
  },
  self
});

const modalProviderInjectionKey = createInjectionKey('n-modal-provider');
const modalApiInjectionKey = createInjectionKey('n-modal-api');
const modalReactiveListInjectionKey = createInjectionKey('n-modal-reactive-list');

const {computed: computed$2,inject: inject$2,onUnmounted} = await importShared('vue');
function useModal() {
  const modal = inject$2(modalApiInjectionKey, null);
  if (modal === null) {
    throwError('use-modal', 'No outer <n-modal-provider /> founded.');
  }
  return modal;
}
function useModalReactiveList() {
  const modalReactiveList = inject$2(modalReactiveListInjectionKey, null);
  if (modalReactiveList === null) {
    throwError('use-modal-reactive-list', 'No outer <n-modal-provider /> founded.');
  }
  return modalReactiveList;
}
const DRAGGABLE_CLASS = 'n-draggable';
function useDragModal(draggablePropsRef, options) {
  let cleanup;
  const draggableRef = computed$2(() => {
    return draggablePropsRef.value !== false;
  });
  const draggableClassRef = computed$2(() => {
    return draggableRef.value ? DRAGGABLE_CLASS : '';
  });
  const boundsToWindowRef = computed$2(() => {
    const draggableProps = draggablePropsRef.value;
    if (draggableProps === true || draggableProps === false) {
      return true;
    } else if (draggableProps) {
      return draggableProps.bounds !== 'none';
    } else {
      return true;
    }
  });
  function startDrag(modal) {
    const header = modal.querySelector(`.${DRAGGABLE_CLASS}`);
    if (!header || !draggableClassRef.value) {
      return;
    }
    let maxMoveX = 0;
    let minMoveX = 0;
    let maxMoveY = 0;
    let minMoveY = 0;
    let prevMoveY = 0;
    let prevMoveX = 0;
    let mousedownEvent;
    function handleMouseDown(event) {
      event.preventDefault();
      mousedownEvent = event;
      const {
        x,
        y,
        right,
        bottom
      } = modal.getBoundingClientRect();
      minMoveX = x;
      minMoveY = y;
      maxMoveX = window.innerWidth - right;
      maxMoveY = window.innerHeight - bottom;
      const {
        left,
        top
      } = modal.style;
      prevMoveY = +top.slice(0, -2);
      prevMoveX = +left.slice(0, -2);
    }
    function handleMouseMove(event) {
      if (!mousedownEvent) return;
      const {
        clientX: downX,
        clientY: downY
      } = mousedownEvent;
      let moveX = event.clientX - downX;
      let moveY = event.clientY - downY;
      if (boundsToWindowRef.value) {
        if (moveX > maxMoveX) {
          moveX = maxMoveX;
        } else if (-moveX > minMoveX) {
          moveX = -minMoveX;
        }
        if (moveY > maxMoveY) {
          moveY = maxMoveY;
        } else if (-moveY > minMoveY) {
          moveY = -minMoveY;
        }
      }
      const x = moveX + prevMoveX;
      const y = moveY + prevMoveY;
      modal.style.top = `${y}px`;
      modal.style.left = `${x}px`;
    }
    function handleMouseUp() {
      mousedownEvent = undefined;
      options.onEnd(modal);
    }
    on('mousedown', header, handleMouseDown);
    on('mousemove', window, handleMouseMove);
    on('mouseup', window, handleMouseUp);
    cleanup = () => {
      off('mousedown', header, handleMouseDown);
      on('mousemove', window, handleMouseMove);
      on('mouseup', window, handleMouseUp);
    };
  }
  function stopDrag() {
    if (cleanup) {
      cleanup();
      cleanup = undefined;
    }
  }
  onUnmounted(stopDrag);
  return {
    stopDrag,
    startDrag,
    draggableRef,
    draggableClassRef
  };
}

const presetProps = Object.assign(Object.assign({}, cardBaseProps), dialogProps);
const presetPropsKeys = keysOf(presetProps);

const {cloneVNode,computed: computed$1,defineComponent: defineComponent$1,h: h$1,inject: inject$1,mergeProps,nextTick,normalizeClass,provide: provide$1,ref: ref$1,toRef: toRef$1,Transition: Transition$1,vShow,watch,withDirectives: withDirectives$1} = await importShared('vue');
const NModalBodyWrapper = defineComponent$1({
  name: 'ModalBody',
  inheritAttrs: false,
  slots: Object,
  props: Object.assign(Object.assign({
    show: {
      type: Boolean,
      required: true
    },
    preset: String,
    displayDirective: {
      type: String,
      required: true
    },
    trapFocus: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    blockScroll: Boolean,
    draggable: {
      type: [Boolean, Object],
      default: false
    },
    maskHidden: Boolean
  }, presetProps), {
    renderMask: Function,
    // events
    onClickoutside: Function,
    onBeforeLeave: {
      type: Function,
      required: true
    },
    onAfterLeave: {
      type: Function,
      required: true
    },
    onPositiveClick: {
      type: Function,
      required: true
    },
    onNegativeClick: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    onAfterEnter: Function,
    onEsc: Function
  }),
  setup(props) {
    const bodyRef = ref$1(null);
    const scrollbarRef = ref$1(null);
    const displayedRef = ref$1(props.show);
    const transformOriginXRef = ref$1(null);
    const transformOriginYRef = ref$1(null);
    const NModal = inject$1(modalInjectionKey);
    let mousePosition = null;
    watch(toRef$1(props, 'show'), value => {
      if (value) {
        mousePosition = NModal.getMousePosition();
      }
    }, {
      immediate: true
    });
    const {
      stopDrag,
      startDrag,
      draggableRef,
      draggableClassRef
    } = useDragModal(toRef$1(props, 'draggable'), {
      onEnd: el => {
        syncTransformOrigin(el);
      }
    });
    const dialogTitleClassRef = computed$1(() => {
      return normalizeClass([props.titleClass, draggableClassRef.value]);
    });
    const cardHeaderClassRef = computed$1(() => {
      return normalizeClass([props.headerClass, draggableClassRef.value]);
    });
    watch(toRef$1(props, 'show'), value => {
      if (value) displayedRef.value = true;
    });
    useLockHtmlScroll(computed$1(() => props.blockScroll && displayedRef.value));
    function styleTransformOrigin() {
      if (NModal.transformOriginRef.value === 'center') {
        return '';
      }
      const {
        value: transformOriginX
      } = transformOriginXRef;
      const {
        value: transformOriginY
      } = transformOriginYRef;
      if (transformOriginX === null || transformOriginY === null) {
        return '';
      } else if (scrollbarRef.value) {
        const scrollTop = scrollbarRef.value.containerScrollTop;
        return `${transformOriginX}px ${transformOriginY + scrollTop}px`;
      }
      return '';
    }
    function syncTransformOrigin(el) {
      if (NModal.transformOriginRef.value === 'center') {
        return;
      }
      if (!mousePosition) {
        return;
      }
      if (!scrollbarRef.value) return;
      const scrollTop = scrollbarRef.value.containerScrollTop;
      const {
        offsetLeft,
        offsetTop
      } = el;
      const top = mousePosition.y;
      const left = mousePosition.x;
      transformOriginXRef.value = -(offsetLeft - left);
      transformOriginYRef.value = -(offsetTop - top - scrollTop);
      el.style.transformOrigin = styleTransformOrigin();
    }
    function handleEnter(el) {
      void nextTick(() => {
        syncTransformOrigin(el);
      });
    }
    function handleBeforeLeave(el) {
      el.style.transformOrigin = styleTransformOrigin();
      props.onBeforeLeave();
    }
    function handleAfterEnter(el) {
      const element = el;
      draggableRef.value && startDrag(element);
      props.onAfterEnter && props.onAfterEnter(element);
    }
    function handleAfterLeave() {
      displayedRef.value = false;
      transformOriginXRef.value = null;
      transformOriginYRef.value = null;
      stopDrag();
      props.onAfterLeave();
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        onClose();
      }
    }
    function handleNegativeClick() {
      props.onNegativeClick();
    }
    function handlePositiveClick() {
      props.onPositiveClick();
    }
    const childNodeRef = ref$1(null);
    watch(childNodeRef, node => {
      if (node) {
        void nextTick(() => {
          const el = node.el;
          if (el && bodyRef.value !== el) {
            bodyRef.value = el;
          }
        });
      }
    });
    provide$1(modalBodyInjectionKey, bodyRef);
    provide$1(drawerBodyInjectionKey, null);
    provide$1(popoverBodyInjectionKey, null);
    return {
      mergedTheme: NModal.mergedThemeRef,
      appear: NModal.appearRef,
      isMounted: NModal.isMountedRef,
      mergedClsPrefix: NModal.mergedClsPrefixRef,
      bodyRef,
      scrollbarRef,
      draggableClass: draggableClassRef,
      displayed: displayedRef,
      childNodeRef,
      cardHeaderClass: cardHeaderClassRef,
      dialogTitleClass: dialogTitleClassRef,
      handlePositiveClick,
      handleNegativeClick,
      handleCloseClick,
      handleAfterEnter,
      handleAfterLeave,
      handleBeforeLeave,
      handleEnter
    };
  },
  render() {
    const {
      $slots,
      $attrs,
      handleEnter,
      handleAfterEnter,
      handleAfterLeave,
      handleBeforeLeave,
      preset,
      mergedClsPrefix
    } = this;
    let childNode = null;
    if (!preset) {
      childNode = getFirstSlotVNodeWithTypedProps('default', $slots.default, {
        draggableClass: this.draggableClass
      });
      if (!childNode) {
        warn('modal', 'default slot is empty');
        return;
      }
      childNode = cloneVNode(childNode);
      childNode.props = mergeProps({
        class: `${mergedClsPrefix}-modal`
      }, $attrs, childNode.props || {});
    }
    return this.displayDirective === 'show' || this.displayed || this.show ? withDirectives$1(h$1("div", {
      role: "none",
      class: [`${mergedClsPrefix}-modal-body-wrapper`, this.maskHidden && `${mergedClsPrefix}-modal-body-wrapper--mask-hidden`]
    }, h$1(Scrollbar, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${mergedClsPrefix}-modal-scroll-content`
    }, {
      default: () => {
        var _a;
        return [(_a = this.renderMask) === null || _a === void 0 ? void 0 : _a.call(this), h$1(FocusTrap, {
          disabled: !this.trapFocus || this.maskHidden,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var _a;
            return h$1(Transition$1, {
              name: "fade-in-scale-up-transition",
              appear: (_a = this.appear) !== null && _a !== void 0 ? _a : this.isMounted,
              onEnter: handleEnter,
              onAfterEnter: handleAfterEnter,
              onAfterLeave: handleAfterLeave,
              onBeforeLeave: handleBeforeLeave
            }, {
              default: () => {
                const dirs = [[vShow, this.show]];
                const {
                  onClickoutside
                } = this;
                if (onClickoutside) {
                  dirs.push([clickoutside, this.onClickoutside, undefined, {
                    capture: true
                  }]);
                }
                return withDirectives$1(this.preset === 'confirm' || this.preset === 'dialog' ? h$1(NDialog, Object.assign({}, this.$attrs, {
                  class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, keep(this.$props, dialogPropKeys), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), $slots) : this.preset === 'card' ? h$1(NCard, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${mergedClsPrefix}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, keep(this.$props, cardBasePropKeys), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), $slots) : this.childNodeRef = childNode, dirs);
              }
            });
          }
        })];
      }
    })), [[vShow, this.displayDirective === 'if' || this.displayed || this.show]]) : null;
  }
});

// vars:
// --n-bezier-ease-out
// --n-box-shadow
// --n-color
// --n-text-color
const style = c([cB('modal-container', `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), cB('modal-mask', `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [fadeInTransition({
  enterDuration: '.25s',
  leaveDuration: '.25s',
  enterCubicBezier: 'var(--n-bezier-ease-out)',
  leaveCubicBezier: 'var(--n-bezier-ease-out)'
})]), cB('modal-body-wrapper', `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [cB('modal-scroll-content', `
 min-height: 100%;
 display: flex;
 position: relative;
 `), cM('mask-hidden', `pointer-events: none;`, [c('> *', `
 pointer-events: all;
 `)])]), cB('modal', `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition({
  duration: '.25s',
  enterScale: '.5'
}), c(`.${DRAGGABLE_CLASS}`, `
 cursor: move;
 user-select: none;
 `)])]);

const {computed,defineComponent,h,inject,provide,ref,toRef,Transition,withDirectives} = await importShared('vue');
const modalProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), {
  show: Boolean,
  showMask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  preset: String,
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  transformOrigin: {
    type: String,
    default: "mouse"
  },
  zIndex: Number,
  autoFocus: {
    type: Boolean,
    default: true
  },
  trapFocus: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  blockScroll: {
    type: Boolean,
    default: true
  }
}), presetProps), {
  draggable: [Boolean, Object],
  // events
  onEsc: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onBeforeLeave: Function,
  onAfterLeave: Function,
  onClose: Function,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onMaskClick: Function,
  // private
  internalDialog: Boolean,
  internalModal: Boolean,
  internalAppear: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  overlayStyle: [String, Object],
  onBeforeHide: Function,
  onAfterHide: Function,
  onHide: Function,
  unstableShowMask: {
    type: Boolean,
    default: void 0
  }
});
const NModal = defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: modalProps,
  slots: Object,
  setup(props) {
    const containerRef = ref(null);
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Modal", "-modal", style, modalLight, props, mergedClsPrefixRef);
    const clickedRef = useClicked(64);
    const clickedPositionRef = useClickPosition();
    const isMountedRef = isMounted();
    const NDialogProvider = props.internalDialog ? inject(dialogProviderInjectionKey, null) : null;
    const NModalProvider = props.internalModal ? inject(modalProviderInjectionKey$1, null) : null;
    const isComposingRef = useIsComposing();
    function doUpdateShow(show) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow,
        onHide
      } = props;
      if (onUpdateShow) call(onUpdateShow, show);
      if (_onUpdateShow) call(_onUpdateShow, show);
      if (onHide && !show) onHide(show);
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handlePositiveClick() {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handleNegativeClick() {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick()).then((value) => {
          if (value === false) return;
          doUpdateShow(false);
        });
      } else {
        doUpdateShow(false);
      }
    }
    function handleBeforeLeave() {
      const {
        onBeforeLeave,
        onBeforeHide
      } = props;
      if (onBeforeLeave) call(onBeforeLeave);
      if (onBeforeHide) onBeforeHide();
    }
    function handleAfterLeave() {
      const {
        onAfterLeave,
        onAfterHide
      } = props;
      if (onAfterLeave) call(onAfterLeave);
      if (onAfterHide) onAfterHide();
    }
    function handleClickoutside(e) {
      var _a;
      const {
        onMaskClick
      } = props;
      if (onMaskClick) {
        onMaskClick(e);
      }
      if (props.maskClosable) {
        if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
          doUpdateShow(false);
        }
      }
    }
    function handleEsc(e) {
      var _a;
      (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props);
      if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
        if (!isComposingRef.value) {
          doUpdateShow(false);
        }
      }
    }
    provide(modalInjectionKey, {
      getMousePosition: () => {
        const mergedProvider = NDialogProvider || NModalProvider;
        if (mergedProvider) {
          const {
            clickedRef: clickedRef2,
            clickedPositionRef: clickedPositionRef2
          } = mergedProvider;
          if (clickedRef2.value && clickedPositionRef2.value) {
            return clickedPositionRef2.value;
          }
        }
        if (clickedRef.value) {
          return clickedPositionRef.value;
        }
        return null;
      },
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      isMountedRef,
      appearRef: toRef(props, "internalAppear"),
      transformOriginRef: toRef(props, "transformOrigin")
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseOut
        },
        self: {
          boxShadow,
          color,
          textColor
        }
      } = themeRef.value;
      return {
        "--n-bezier-ease-out": cubicBezierEaseOut,
        "--n-box-shadow": boxShadow,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("theme-class", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      isMounted: isMountedRef,
      containerRef,
      presetProps: computed(() => {
        const pickedProps = keep(props, presetPropsKeys);
        return pickedProps;
      }),
      handleEsc,
      handleAfterLeave,
      handleClickoutside,
      handleBeforeLeave,
      doUpdateShow,
      handleNegativeClick,
      handlePositiveClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h(LazyTeleport, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        const {
          showMask
        } = this;
        return withDirectives(h("div", {
          role: "none",
          ref: "containerRef",
          class: [`${mergedClsPrefix}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, h(NModalBodyWrapper, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          draggable: this.draggable,
          blockScroll: this.blockScroll,
          maskHidden: !showMask
        }, this.presetProps, {
          onEsc: this.handleEsc,
          onClose: this.handleCloseClick,
          onNegativeClick: this.handleNegativeClick,
          onPositiveClick: this.handlePositiveClick,
          onBeforeLeave: this.handleBeforeLeave,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave,
          onClickoutside: showMask ? void 0 : this.handleClickoutside,
          renderMask: showMask ? () => {
            var _a2;
            return h(Transition, {
              name: "fade-in-transition",
              key: "mask",
              appear: (_a2 = this.internalAppear) !== null && _a2 !== void 0 ? _a2 : this.isMounted
            }, {
              default: () => {
                return this.show ? h("div", {
                  "aria-hidden": true,
                  ref: "containerRef",
                  class: `${mergedClsPrefix}-modal-mask`,
                  onClick: this.handleClickoutside
                }) : null;
              }
            });
          } : void 0
        }), this.$slots)), [[zindexable, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
});

export { NDialog, NModal, dialogApiInjectionKey, dialogPropKeys, dialogProps, dialogProviderInjectionKey, dialogReactiveListInjectionKey, lockHtmlScrollRightCompensationRef, modalApiInjectionKey, modalProps, modalProviderInjectionKey, modalReactiveListInjectionKey, self$1 as self, self as self$1, useClickPosition, useClicked, useIsComposing, useLockHtmlScroll, useModal, useModalReactiveList };
//# sourceMappingURL=Modal.CJYgerxp1767105581793.js.map
