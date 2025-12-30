import { importShared } from './index.BxB45aCK1767105581793.js';
import { useMemo, useRtl } from './use-rtl.Dso2-paz1767105581793.js';
import { isSafari } from './browser.0EGmEZTw1767105581793.js';
import { createTheme, derived, changeColor, createInjectionKey, cB, cE, cM, cNotM, c, resolveSlotWithTypedProps, resolveWrappedSlot, resolveSlot, useConfig, useTheme, createKey, useThemeClass, call } from './light.CLUJsvFB1767105581793.js';
import { scrollbarLight, Scrollbar, VResizeObserver, getMargin } from './Scrollbar.COIrvx-21767105581793.js';
import { useStyle } from './use-style.DNeB6HHX1767105581793.js';
import { useLocale, NBaseClear, NBaseSuffix } from './Suffix.BS0_grS71767105581793.js';
import { useMergedState, on, off } from './use-merged-state.tu3_gbk31767105581793.js';
import { useFormItem } from './Loading.DMQwrvK31767105581793.js';
import { NBaseIcon } from './Close.VNV_OzKM1767105581793.js';

const {defineComponent: defineComponent$3,h: h$3} = await importShared('vue');

const EyeIcon = defineComponent$3({
  name: 'Eye',
  render() {
    return h$3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h$3("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), h$3("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
});

const {defineComponent: defineComponent$2,h: h$2} = await importShared('vue');

const EyeOffIcon = defineComponent$2({
  name: 'EyeOff',
  render() {
    return h$2("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h$2("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), h$2("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), h$2("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), h$2("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), h$2("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
});

const commonVariables = {
  paddingTiny: '0 8px',
  paddingSmall: '0 10px',
  paddingMedium: '0 12px',
  paddingLarge: '0 14px',
  clearSize: '16px'
};

function self(vars) {
  const {
    textColor2,
    textColor3,
    textColorDisabled,
    primaryColor,
    primaryColorHover,
    inputColor,
    inputColorDisabled,
    borderColor,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderRadius,
    lineHeight,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    actionColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    fontWeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    fontWeight,
    countTextColorDisabled: textColorDisabled,
    countTextColor: textColor3,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight,
    lineHeightTextarea: lineHeight,
    borderRadius,
    iconSize: '16px',
    groupLabelColor: actionColor,
    groupLabelTextColor: textColor2,
    textColor: textColor2,
    textColorDisabled,
    textDecorationColor: textColor2,
    caretColor: primaryColor,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorFocus: inputColor,
    groupLabelBorder: `1px solid ${borderColor}`,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    loadingColor: primaryColor,
    // warning
    loadingColorWarning: warningColor,
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    colorFocusWarning: inputColor,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    caretColorWarning: warningColor,
    // error
    loadingColorError: errorColor,
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    colorFocusError: inputColor,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    suffixTextColor: textColor2
  });
}
const inputLight = createTheme({
  name: 'Input',
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self
});

const inputInjectionKey = createInjectionKey('n-input');

// vars:
// --n-bezier
// --n-color
// --n-font-size
// --n-border-radius
// --n-height
// --n-padding-left
// --n-padding-right
// --n-text-color
// --n-text-color-disabled
// --n-caret-color
// --n-text-decoration-color
// --n-border
// --n-border-disabled
// --n-border-hover
// --n-border-focus
// --n-placeholder-color
// --n-placeholder-color-disabled
// --n-line-height-textarea
// --n-color-disabled
// --n-color-focus
// --n-box-shadow-focus
// --n-clear-color
// --n-clear-size
// --n-clear-color-hover
// --n-clear-color-pressed
// --n-suffix-text-color
// --n-icon-color
// --n-icon-color-hover
// --n-icon-color-pressed
// --n-icon-color-disabled
// --n-count-text-color
// --n-count-text-color-disabled
// --n-loading-color
// ...form item vars
const style = cB('input', `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
// common
cE('input, textarea', `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), cE('input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder', `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), cE('input-el, textarea-el', `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [c('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
 width: 0;
 height: 0;
 display: none;
 `), c('&::placeholder', `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), c('&:-webkit-autofill ~', [cE('placeholder', 'display: none;')])]), cM('round', [cNotM('textarea', 'border-radius: calc(var(--n-height) / 2);')]), cE('placeholder', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [c('span', `
 width: 100%;
 display: inline-block;
 `)]), cM('textarea', [cE('placeholder', 'overflow: visible;')]), cNotM('autosize', 'width: 100%;'), cM('autosize', [cE('textarea-el, input-el', `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
// input
cB('input-wrapper', `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), cE('input-mirror', `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `), cE('input-el', `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [c('&[type=password]::-ms-reveal', 'display: none;'), c('+', [cE('placeholder', `
 display: flex;
 align-items: center; 
 `)])]), cNotM('textarea', [cE('placeholder', 'white-space: nowrap;')]), cE('eye', `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
// textarea
cM('textarea', 'width: 100%;', [cB('input-word-count', `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), cM('resizable', [cB('input-wrapper', `
 resize: vertical;
 min-height: var(--n-height);
 `)]), cE('textarea-el, textarea-mirror, placeholder', `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), cE('textarea-mirror', `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
// pair
cM('pair', [cE('input-el, placeholder', 'text-align: center;'), cE('separator', `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [cB('icon', `
 color: var(--n-icon-color);
 `), cB('base-icon', `
 color: var(--n-icon-color);
 `)])]), cM('disabled', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cE('border', 'border: var(--n-border-disabled);'), cE('input-el, textarea-el', `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), cE('placeholder', 'color: var(--n-placeholder-color-disabled);'), cE('separator', 'color: var(--n-text-color-disabled);', [cB('icon', `
 color: var(--n-icon-color-disabled);
 `), cB('base-icon', `
 color: var(--n-icon-color-disabled);
 `)]), cB('input-word-count', `
 color: var(--n-count-text-color-disabled);
 `), cE('suffix, prefix', 'color: var(--n-text-color-disabled);', [cB('icon', `
 color: var(--n-icon-color-disabled);
 `), cB('internal-icon', `
 color: var(--n-icon-color-disabled);
 `)])]), cNotM('disabled', [cE('eye', `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [c('&:hover', `
 color: var(--n-icon-color-hover);
 `), c('&:active', `
 color: var(--n-icon-color-pressed);
 `)]), c('&:hover', [cE('state-border', 'border: var(--n-border-hover);')]), cM('focus', 'background-color: var(--n-color-focus);', [cE('state-border', `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cE('border, state-border', `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE('state-border', `
 border-color: #0000;
 z-index: 1;
 `), cE('prefix', 'margin-right: 4px;'), cE('suffix', `
 margin-left: 4px;
 `), cE('suffix, prefix', `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [cB('base-loading', `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), cB('base-clear', `
 font-size: var(--n-icon-size);
 `, [cE('placeholder', [cB('base-icon', `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), c('>', [cB('icon', `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB('base-icon', `
 font-size: var(--n-icon-size);
 `)]), cB('input-word-count', `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), ['warning', 'error'].map(status => cM(`${status}-status`, [cNotM('disabled', [cB('base-loading', `
 color: var(--n-loading-color-${status})
 `), cE('input-el, textarea-el', `
 caret-color: var(--n-caret-color-${status});
 `), cE('state-border', `
 border: var(--n-border-${status});
 `), c('&:hover', [cE('state-border', `
 border: var(--n-border-hover-${status});
 `)]), c('&:focus', `
 background-color: var(--n-color-focus-${status});
 `, [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)]), cM('focus', `
 background-color: var(--n-color-focus-${status});
 `, [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]);
const safariStyle = cB('input', [cM('disabled', [cE('input-el, textarea-el', `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);

const {ref: ref$1,watch: watch$1} = await importShared('vue');

function len(s) {
  let count = 0;
  for (const _ of s) {
    count++;
  }
  return count;
}
function isEmptyInputValue(value) {
  return value === '' || value == null;
}
function useCursor(inputElRef) {
  const selectionRef = ref$1(null);
  function recordCursor() {
    const {
      value: input
    } = inputElRef;
    if (!(input === null || input === void 0 ? void 0 : input.focus)) {
      reset();
      return;
    }
    const {
      selectionStart,
      selectionEnd,
      value
    } = input;
    if (selectionStart == null || selectionEnd == null) {
      reset();
      return;
    }
    selectionRef.value = {
      start: selectionStart,
      end: selectionEnd,
      beforeText: value.slice(0, selectionStart),
      afterText: value.slice(selectionEnd)
    };
  }
  function restoreCursor() {
    var _a;
    const {
      value: selection
    } = selectionRef;
    const {
      value: inputEl
    } = inputElRef;
    if (!selection || !inputEl) {
      return;
    }
    const {
      value
    } = inputEl;
    const {
      start,
      beforeText,
      afterText
    } = selection;
    let startPos = value.length;
    if (value.endsWith(afterText)) {
      startPos = value.length - afterText.length;
    } else if (value.startsWith(beforeText)) {
      startPos = beforeText.length;
    } else {
      const beforeLastChar = beforeText[start - 1];
      const newIndex = value.indexOf(beforeLastChar, start - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    (_a = inputEl.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(inputEl, startPos, startPos);
  }
  function reset() {
    selectionRef.value = null;
  }
  watch$1(inputElRef, reset);
  return {
    recordCursor,
    restoreCursor
  };
}

const {computed: computed$1,defineComponent: defineComponent$1,h: h$1,inject} = await importShared('vue');
const WordCount = defineComponent$1({
  name: 'InputWordCount',
  setup(_, {
    slots
  }) {
    const {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef
    } = inject(inputInjectionKey);
    const wordCountRef = computed$1(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null || Array.isArray(mergedValue)) return 0;
      return (countGraphemesRef.value || len)(mergedValue);
    });
    return () => {
      const {
        value: maxlength
      } = maxlengthRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      return h$1("span", {
        class: `${mergedClsPrefixRef.value}-input-word-count`
      }, resolveSlotWithTypedProps(slots.default, {
        value: mergedValue === null || Array.isArray(mergedValue) ? '' : mergedValue
      }, () => [maxlength === undefined ? wordCountRef.value : `${wordCountRef.value} / ${maxlength}`]));
    };
  }
});

const {computed,defineComponent,Fragment,getCurrentInstance,h,nextTick,onMounted,provide,ref,toRef,watch,watchEffect} = await importShared('vue');
const inputProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: undefined
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: undefined
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: false
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: true
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: true
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: undefined
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  showPasswordToggle: Boolean
});
const NInput = defineComponent({
  name: 'Input',
  props: inputProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme('Input', '-input', style, inputLight, props, mergedClsPrefixRef);
    if (isSafari) {
      useStyle('-input-safari', safariStyle, mergedClsPrefixRef);
    }
    // dom refs
    const wrapperElRef = ref(null);
    const textareaElRef = ref(null);
    const textareaMirrorElRef = ref(null);
    const inputMirrorElRef = ref(null);
    const inputElRef = ref(null);
    const inputEl2Ref = ref(null);
    const currentFocusedInputRef = ref(null);
    const focusedInputCursorControl = useCursor(currentFocusedInputRef);
    const textareaScrollbarInstRef = ref(null);
    // local
    const {
      localeRef
    } = useLocale('Input');
    // value
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, 'value');
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    // form-item
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    // states
    const focusedRef = ref(false);
    const hoverRef = ref(false);
    const isComposingRef = ref(false);
    const activatedRef = ref(false);
    let syncSource = null;
    // placeholder
    const mergedPlaceholderRef = computed(() => {
      const {
        placeholder,
        pair
      } = props;
      if (pair) {
        if (Array.isArray(placeholder)) {
          return placeholder;
        } else if (placeholder === undefined) {
          return ['', ''];
        }
        return [placeholder, placeholder];
      } else if (placeholder === undefined) {
        return [localeRef.value.placeholder];
      } else {
        return [placeholder];
      }
    });
    const showPlaceholder1Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[0])) && mergedPlaceholder[0];
    });
    const showPlaceholder2Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && mergedPlaceholder[1] && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[1]));
    });
    // focus
    const mergedFocusRef = useMemo(() => {
      return props.internalForceFocus || focusedRef.value;
    });
    // clear
    const showClearButton = useMemo(() => {
      if (mergedDisabledRef.value || props.readonly || !props.clearable || !mergedFocusRef.value && !hoverRef.value) {
        return false;
      }
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedFocus
      } = mergedFocusRef;
      if (props.pair) {
        return !!(Array.isArray(mergedValue) && (mergedValue[0] || mergedValue[1])) && (hoverRef.value || mergedFocus);
      } else {
        return !!mergedValue && (hoverRef.value || mergedFocus);
      }
    });
    // passwordVisible
    const mergedShowPasswordOnRef = computed(() => {
      const {
        showPasswordOn
      } = props;
      if (showPasswordOn) {
        return showPasswordOn;
      }
      if (props.showPasswordToggle) return 'click';
      return undefined;
    });
    const passwordVisibleRef = ref(false);
    // text-decoration
    const textDecorationStyleRef = computed(() => {
      const {
        textDecoration
      } = props;
      if (!textDecoration) return ['', ''];
      if (Array.isArray(textDecoration)) {
        return textDecoration.map(v => ({
          textDecoration: v
        }));
      }
      return [{
        textDecoration
      }];
    });
    const textAreaScrollContainerWidthRef = ref(undefined);
    // textarea autosize
    const updateTextAreaStyle = () => {
      var _a, _b;
      if (props.type === 'textarea') {
        const {
          autosize
        } = props;
        if (autosize) {
          textAreaScrollContainerWidthRef.value = (_b = (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.offsetWidth;
        }
        if (!textareaElRef.value) return;
        if (typeof autosize === 'boolean') return;
        const {
          paddingTop: stylePaddingTop,
          paddingBottom: stylePaddingBottom,
          lineHeight: styleLineHeight
        } = window.getComputedStyle(textareaElRef.value);
        const paddingTop = Number(stylePaddingTop.slice(0, -2));
        const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
        const lineHeight = Number(styleLineHeight.slice(0, -2));
        const {
          value: textareaMirrorEl
        } = textareaMirrorElRef;
        if (!textareaMirrorEl) return;
        if (autosize.minRows) {
          const minRows = Math.max(autosize.minRows, 1);
          const styleMinHeight = `${paddingTop + paddingBottom + lineHeight * minRows}px`;
          textareaMirrorEl.style.minHeight = styleMinHeight;
        }
        if (autosize.maxRows) {
          const styleMaxHeight = `${paddingTop + paddingBottom + lineHeight * autosize.maxRows}px`;
          textareaMirrorEl.style.maxHeight = styleMaxHeight;
        }
      }
    };
    // word count
    const maxlengthRef = computed(() => {
      const {
        maxlength
      } = props;
      return maxlength === undefined ? undefined : Number(maxlength);
    });
    onMounted(() => {
      // sync mirror if is not pair
      const {
        value
      } = mergedValueRef;
      if (!Array.isArray(value)) {
        syncMirror(value);
      }
    });
    // other methods
    const vm = getCurrentInstance().proxy;
    function doUpdateValue(value, meta) {
      const {
        onUpdateValue,
        'onUpdate:value': _onUpdateValue,
        onInput
      } = props;
      const {
        nTriggerFormInput
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value, meta);
      if (_onUpdateValue) call(_onUpdateValue, value, meta);
      if (onInput) call(onInput, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
    }
    function doChange(value, meta) {
      const {
        onChange
      } = props;
      const {
        nTriggerFormChange
      } = formItem;
      if (onChange) call(onChange, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur) call(onBlur, e);
      nTriggerFormBlur();
    }
    function doFocus(e) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
    }
    function doClear(e) {
      const {
        onClear
      } = props;
      if (onClear) call(onClear, e);
    }
    function doUpdateValueBlur(e) {
      const {
        onInputBlur
      } = props;
      if (onInputBlur) call(onInputBlur, e);
    }
    function doUpdateValueFocus(e) {
      const {
        onInputFocus
      } = props;
      if (onInputFocus) call(onInputFocus, e);
    }
    function doDeactivate() {
      const {
        onDeactivate
      } = props;
      if (onDeactivate) call(onDeactivate);
    }
    function doActivate() {
      const {
        onActivate
      } = props;
      if (onActivate) call(onActivate);
    }
    function doClick(e) {
      const {
        onClick
      } = props;
      if (onClick) call(onClick, e);
    }
    function doWrapperFocus(e) {
      const {
        onWrapperFocus
      } = props;
      if (onWrapperFocus) call(onWrapperFocus, e);
    }
    function doWrapperBlur(e) {
      const {
        onWrapperBlur
      } = props;
      if (onWrapperBlur) call(onWrapperBlur, e);
    }
    // methods
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd(e) {
      isComposingRef.value = false;
      if (e.target === inputEl2Ref.value) {
        handleInput(e, 1);
      } else {
        handleInput(e, 0);
      }
    }
    function handleInput(e, index = 0, event = 'input') {
      const targetValue = e.target.value;
      syncMirror(targetValue);
      if (e instanceof InputEvent && !e.isComposing) {
        isComposingRef.value = false;
      }
      if (props.type === 'textarea') {
        const {
          value: textareaScrollbarInst
        } = textareaScrollbarInstRef;
        if (textareaScrollbarInst) {
          textareaScrollbarInst.syncUnifiedContainer();
        }
      }
      syncSource = targetValue;
      if (isComposingRef.value) return;
      focusedInputCursorControl.recordCursor();
      const isIncomingValueValid = allowInput(targetValue);
      if (isIncomingValueValid) {
        if (!props.pair) {
          if (event === 'input') {
            doUpdateValue(targetValue, {
              source: index
            });
          } else {
            doChange(targetValue, {
              source: index
            });
          }
        } else {
          let {
            value
          } = mergedValueRef;
          if (!Array.isArray(value)) {
            value = ['', ''];
          } else {
            value = [value[0], value[1]];
          }
          value[index] = targetValue;
          if (event === 'input') {
            doUpdateValue(value, {
              source: index
            });
          } else {
            doChange(value, {
              source: index
            });
          }
        }
      }
      // force update to sync input's view with value
      // if not set, after input, input value won't sync with dom input value
      vm.$forceUpdate();
      if (!isIncomingValueValid) {
        void nextTick(focusedInputCursorControl.restoreCursor);
      }
    }
    function allowInput(value) {
      const {
        countGraphemes,
        maxlength,
        minlength
      } = props;
      if (countGraphemes) {
        let graphemesCount;
        if (maxlength !== undefined) {
          if (graphemesCount === undefined) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount > Number(maxlength)) return false;
        }
        if (minlength !== undefined) {
          if (graphemesCount === undefined) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount < Number(maxlength)) return false;
        }
      }
      const {
        allowInput
      } = props;
      if (typeof allowInput === 'function') {
        return allowInput(value);
      }
      return true;
    }
    function handleInputBlur(e) {
      doUpdateValueBlur(e);
      if (e.relatedTarget === wrapperElRef.value) {
        doDeactivate();
      }
      if (!(e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value))) {
        activatedRef.value = false;
      }
      dealWithEvent(e, 'blur');
      currentFocusedInputRef.value = null;
    }
    function handleInputFocus(e, index) {
      doUpdateValueFocus(e);
      focusedRef.value = true;
      activatedRef.value = true;
      doActivate();
      dealWithEvent(e, 'focus');
      if (index === 0) {
        currentFocusedInputRef.value = inputElRef.value;
      } else if (index === 1) {
        currentFocusedInputRef.value = inputEl2Ref.value;
      } else if (index === 2) {
        currentFocusedInputRef.value = textareaElRef.value;
      }
    }
    function handleWrapperBlur(e) {
      if (props.passivelyActivated) {
        doWrapperBlur(e);
        dealWithEvent(e, 'blur');
      }
    }
    function handleWrapperFocus(e) {
      if (props.passivelyActivated) {
        focusedRef.value = true;
        doWrapperFocus(e);
        dealWithEvent(e, 'focus');
      }
    }
    function dealWithEvent(e, type) {
      if (e.relatedTarget !== null && (e.relatedTarget === inputElRef.value || e.relatedTarget === inputEl2Ref.value || e.relatedTarget === textareaElRef.value || e.relatedTarget === wrapperElRef.value)) ; else {
        if (type === 'focus') {
          doFocus(e);
          focusedRef.value = true;
        } else if (type === 'blur') {
          doBlur(e);
          focusedRef.value = false;
        }
      }
    }
    function handleChange(e, index) {
      handleInput(e, index, 'change');
    }
    function handleClick(e) {
      doClick(e);
    }
    function handleClear(e) {
      doClear(e);
      clearValue();
    }
    function clearValue() {
      if (props.pair) {
        doUpdateValue(['', ''], {
          source: 'clear'
        });
        doChange(['', ''], {
          source: 'clear'
        });
      } else {
        doUpdateValue('', {
          source: 'clear'
        });
        doChange('', {
          source: 'clear'
        });
      }
    }
    function handleMouseDown(e) {
      const {
        onMousedown
      } = props;
      if (onMousedown) onMousedown(e);
      const {
        tagName
      } = e.target;
      if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
        if (props.resizable) {
          const {
            value: wrapperEl
          } = wrapperElRef;
          if (wrapperEl) {
            const {
              left,
              top,
              width,
              height
            } = wrapperEl.getBoundingClientRect();
            const resizeHandleSize = 14;
            if (left + width - resizeHandleSize < e.clientX && e.clientX < left + width && top + height - resizeHandleSize < e.clientY && e.clientY < top + height) {
              // touching resize handle, just let it go.
              // resize won't take focus, maybe there is a better way to do this.
              // hope someone can figure out a better solution
              return;
            }
          }
        }
        e.preventDefault();
        if (!focusedRef.value) {
          focus();
        }
      }
    }
    function handleMouseEnter() {
      var _a;
      hoverRef.value = true;
      if (props.type === 'textarea') {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseEnterWrapper();
      }
    }
    function handleMouseLeave() {
      var _a;
      hoverRef.value = false;
      if (props.type === 'textarea') {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseLeaveWrapper();
      }
    }
    function handlePasswordToggleClick() {
      if (mergedDisabledRef.value) return;
      if (mergedShowPasswordOnRef.value !== 'click') return;
      passwordVisibleRef.value = !passwordVisibleRef.value;
    }
    function handlePasswordToggleMousedown(e) {
      if (mergedDisabledRef.value) return;
      e.preventDefault();
      const preventDefaultOnce = e => {
        e.preventDefault();
        off('mouseup', document, preventDefaultOnce);
      };
      on('mouseup', document, preventDefaultOnce);
      if (mergedShowPasswordOnRef.value !== 'mousedown') return;
      passwordVisibleRef.value = true;
      const hidePassword = () => {
        passwordVisibleRef.value = false;
        off('mouseup', document, hidePassword);
      };
      on('mouseup', document, hidePassword);
    }
    function handleWrapperKeyup(e) {
      if (props.onKeyup) call(props.onKeyup, e);
    }
    function handleWrapperKeydown(e) {
      if (props.onKeydown) call(props.onKeydown, e);
      switch (e.key) {
        case 'Escape':
          handleWrapperKeydownEsc();
          break;
        case 'Enter':
          handleWrapperKeydownEnter(e);
          break;
      }
    }
    function handleWrapperKeydownEnter(e) {
      var _a, _b;
      if (props.passivelyActivated) {
        const {
          value: focused
        } = activatedRef;
        if (focused) {
          if (props.internalDeactivateOnEnter) {
            handleWrapperKeydownEsc();
          }
          return;
        }
        e.preventDefault();
        if (props.type === 'textarea') {
          (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        } else {
          (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
    }
    function handleWrapperKeydownEsc() {
      if (props.passivelyActivated) {
        activatedRef.value = false;
        void nextTick(() => {
          var _a;
          (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
    }
    function focus() {
      var _a, _b, _c;
      if (mergedDisabledRef.value) return;
      if (props.passivelyActivated) {
        (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        (_b = textareaElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        (_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function blur() {
      var _a;
      if ((_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement)) {
        document.activeElement.blur();
      }
    }
    function select() {
      var _a, _b;
      (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.select();
      (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select();
    }
    function activate() {
      if (mergedDisabledRef.value) return;
      if (textareaElRef.value) textareaElRef.value.focus();else if (inputElRef.value) inputElRef.value.focus();
    }
    function deactivate() {
      const {
        value: wrapperEl
      } = wrapperElRef;
      if ((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.contains(document.activeElement)) && wrapperEl !== document.activeElement) {
        handleWrapperKeydownEsc();
      }
    }
    function scrollTo(options) {
      if (props.type === 'textarea') {
        const {
          value: textareaEl
        } = textareaElRef;
        textareaEl === null || textareaEl === void 0 ? void 0 : textareaEl.scrollTo(options);
      } else {
        const {
          value: inputEl
        } = inputElRef;
        inputEl === null || inputEl === void 0 ? void 0 : inputEl.scrollTo(options);
      }
    }
    function syncMirror(value) {
      const {
        type,
        pair,
        autosize
      } = props;
      if (!pair && autosize) {
        if (type === 'textarea') {
          const {
            value: textareaMirrorEl
          } = textareaMirrorElRef;
          if (textareaMirrorEl) {
            textareaMirrorEl.textContent = `${value !== null && value !== void 0 ? value : ''}\r\n`;
          }
        } else {
          const {
            value: inputMirrorEl
          } = inputMirrorElRef;
          if (inputMirrorEl) {
            if (value) {
              inputMirrorEl.textContent = value;
            } else {
              inputMirrorEl.innerHTML = '&nbsp;';
            }
          }
        }
      }
    }
    function handleTextAreaMirrorResize() {
      updateTextAreaStyle();
    }
    const placeholderStyleRef = ref({
      top: '0'
    });
    function handleTextAreaScroll(e) {
      var _a;
      const {
        scrollTop
      } = e.target;
      placeholderStyleRef.value.top = `${-scrollTop}px`;
      (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
    }
    let stopWatchMergedValue1 = null;
    watchEffect(() => {
      const {
        autosize,
        type
      } = props;
      if (autosize && type === 'textarea') {
        stopWatchMergedValue1 = watch(mergedValueRef, value => {
          if (!Array.isArray(value) && value !== syncSource) {
            syncMirror(value);
          }
        });
      } else {
        stopWatchMergedValue1 === null || stopWatchMergedValue1 === void 0 ? void 0 : stopWatchMergedValue1();
      }
    });
    let stopWatchMergedValue2 = null;
    watchEffect(() => {
      if (props.type === 'textarea') {
        stopWatchMergedValue2 = watch(mergedValueRef, value => {
          var _a;
          if (!Array.isArray(value) && value !== syncSource) {
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
          }
        });
      } else {
        stopWatchMergedValue2 === null || stopWatchMergedValue2 === void 0 ? void 0 : stopWatchMergedValue2();
      }
    });
    provide(inputInjectionKey, {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef: toRef(props, 'countGraphemes')
    });
    const exposedProps = {
      wrapperElRef,
      inputElRef,
      textareaElRef,
      isCompositing: isComposingRef,
      clear: clearValue,
      focus,
      blur,
      select,
      deactivate,
      activate,
      scrollTo
    };
    const rtlEnabledRef = useRtl('Input', mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          borderRadius,
          textColor,
          caretColor,
          caretColorError,
          caretColorWarning,
          textDecorationColor,
          border,
          borderDisabled,
          borderHover,
          borderFocus,
          placeholderColor,
          placeholderColorDisabled,
          lineHeightTextarea,
          colorDisabled,
          colorFocus,
          textColorDisabled,
          boxShadowFocus,
          iconSize,
          colorFocusWarning,
          boxShadowFocusWarning,
          borderWarning,
          borderFocusWarning,
          borderHoverWarning,
          colorFocusError,
          boxShadowFocusError,
          borderError,
          borderFocusError,
          borderHoverError,
          clearSize,
          clearColor,
          clearColorHover,
          clearColorPressed,
          iconColor,
          iconColorDisabled,
          suffixTextColor,
          countTextColor,
          countTextColorDisabled,
          iconColorHover,
          iconColorPressed,
          loadingColor,
          loadingColorError,
          loadingColorWarning,
          fontWeight,
          [createKey('padding', size)]: padding,
          [createKey('fontSize', size)]: fontSize,
          [createKey('height', size)]: height
        }
      } = themeRef.value;
      const {
        left: paddingLeft,
        right: paddingRight
      } = getMargin(padding);
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-count-text-color': countTextColor,
        '--n-count-text-color-disabled': countTextColorDisabled,
        '--n-color': color,
        '--n-font-size': fontSize,
        '--n-font-weight': fontWeight,
        '--n-border-radius': borderRadius,
        '--n-height': height,
        '--n-padding-left': paddingLeft,
        '--n-padding-right': paddingRight,
        '--n-text-color': textColor,
        '--n-caret-color': caretColor,
        '--n-text-decoration-color': textDecorationColor,
        '--n-border': border,
        '--n-border-disabled': borderDisabled,
        '--n-border-hover': borderHover,
        '--n-border-focus': borderFocus,
        '--n-placeholder-color': placeholderColor,
        '--n-placeholder-color-disabled': placeholderColorDisabled,
        '--n-icon-size': iconSize,
        '--n-line-height-textarea': lineHeightTextarea,
        '--n-color-disabled': colorDisabled,
        '--n-color-focus': colorFocus,
        '--n-text-color-disabled': textColorDisabled,
        '--n-box-shadow-focus': boxShadowFocus,
        '--n-loading-color': loadingColor,
        // form warning
        '--n-caret-color-warning': caretColorWarning,
        '--n-color-focus-warning': colorFocusWarning,
        '--n-box-shadow-focus-warning': boxShadowFocusWarning,
        '--n-border-warning': borderWarning,
        '--n-border-focus-warning': borderFocusWarning,
        '--n-border-hover-warning': borderHoverWarning,
        '--n-loading-color-warning': loadingColorWarning,
        // form error
        '--n-caret-color-error': caretColorError,
        '--n-color-focus-error': colorFocusError,
        '--n-box-shadow-focus-error': boxShadowFocusError,
        '--n-border-error': borderError,
        '--n-border-focus-error': borderFocusError,
        '--n-border-hover-error': borderHoverError,
        '--n-loading-color-error': loadingColorError,
        // clear-button
        '--n-clear-color': clearColor,
        '--n-clear-size': clearSize,
        '--n-clear-color-hover': clearColorHover,
        '--n-clear-color-pressed': clearColorPressed,
        '--n-icon-color': iconColor,
        '--n-icon-color-hover': iconColorHover,
        '--n-icon-color-pressed': iconColorPressed,
        '--n-icon-color-disabled': iconColorDisabled,
        '--n-suffix-text-color': suffixTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('input', computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      return size[0];
    }), cssVarsRef, props) : undefined;
    return Object.assign(Object.assign({}, exposedProps), {
      // DOM ref
      wrapperElRef,
      inputElRef,
      inputMirrorElRef,
      inputEl2Ref,
      textareaElRef,
      textareaMirrorElRef,
      textareaScrollbarInstRef,
      // value
      rtlEnabled: rtlEnabledRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      passwordVisible: passwordVisibleRef,
      mergedPlaceholder: mergedPlaceholderRef,
      showPlaceholder1: showPlaceholder1Ref,
      showPlaceholder2: showPlaceholder2Ref,
      mergedFocus: mergedFocusRef,
      isComposing: isComposingRef,
      activated: activatedRef,
      showClearButton,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      textDecorationStyle: textDecorationStyleRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedShowPasswordOn: mergedShowPasswordOnRef,
      placeholderStyle: placeholderStyleRef,
      mergedStatus: mergedStatusRef,
      textAreaScrollContainerWidth: textAreaScrollContainerWidthRef,
      // methods
      handleTextAreaScroll,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      handleInputBlur,
      handleInputFocus,
      handleWrapperBlur,
      handleWrapperFocus,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseDown,
      handleChange,
      handleClick,
      handleClear,
      handlePasswordToggleClick,
      handlePasswordToggleMousedown,
      handleWrapperKeydown,
      handleWrapperKeyup,
      handleTextAreaMirrorResize,
      getTextareaScrollContainer: () => {
        return textareaElRef.value;
      },
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b, _c, _d, _e, _f, _g;
    const {
      mergedClsPrefix,
      mergedStatus,
      themeClass,
      type,
      countGraphemes,
      onRender
    } = this;
    const $slots = this.$slots;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "wrapperElRef",
      class: [`${mergedClsPrefix}-input`, themeClass, mergedStatus && `${mergedClsPrefix}-input--${mergedStatus}-status`, {
        [`${mergedClsPrefix}-input--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-input--textarea`]: type === 'textarea',
        [`${mergedClsPrefix}-input--resizable`]: this.resizable && !this.autosize,
        [`${mergedClsPrefix}-input--autosize`]: this.autosize,
        [`${mergedClsPrefix}-input--round`]: this.round && !(type === 'textarea'),
        [`${mergedClsPrefix}-input--pair`]: this.pair,
        [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
        [`${mergedClsPrefix}-input--stateful`]: this.stateful
      }],
      style: this.cssVars,
      tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : undefined,
      onFocus: this.handleWrapperFocus,
      onBlur: this.handleWrapperBlur,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd,
      onKeyup: this.handleWrapperKeyup,
      onKeydown: this.handleWrapperKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, resolveWrappedSlot($slots.prefix, children => children && h("div", {
      class: `${mergedClsPrefix}-input__prefix`
    }, children)), type === 'textarea' ? h(Scrollbar, {
      ref: "textareaScrollbarInstRef",
      class: `${mergedClsPrefix}-input__textarea`,
      container: this.getTextareaScrollContainer,
      theme: (_b = (_a = this.theme) === null || _a === void 0 ? void 0 : _a.peers) === null || _b === void 0 ? void 0 : _b.Scrollbar,
      themeOverrides: (_d = (_c = this.themeOverrides) === null || _c === void 0 ? void 0 : _c.peers) === null || _d === void 0 ? void 0 : _d.Scrollbar,
      triggerDisplayManually: true,
      useUnifiedContainer: true,
      internalHoistYRail: true
    }, {
      default: () => {
        var _a, _b;
        const {
          textAreaScrollContainerWidth
        } = this;
        const scrollContainerWidthStyle = {
          width: this.autosize && textAreaScrollContainerWidth && `${textAreaScrollContainerWidth}px`
        };
        return h(Fragment, null, h("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${mergedClsPrefix}-input__textarea-el`, (_a = this.inputProps) === null || _a === void 0 ? void 0 : _a.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: countGraphemes ? undefined : this.maxlength,
          minlength: countGraphemes ? undefined : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : undefined,
          style: [this.textDecorationStyle[0], (_b = this.inputProps) === null || _b === void 0 ? void 0 : _b.style, scrollContainerWidthStyle],
          onBlur: this.handleInputBlur,
          onFocus: e => {
            this.handleInputFocus(e, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? h("div", {
          class: `${mergedClsPrefix}-input__placeholder`,
          style: [this.placeholderStyle, scrollContainerWidthStyle],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(VResizeObserver, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => h("div", {
            ref: "textareaMirrorElRef",
            class: `${mergedClsPrefix}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", Object.assign({
      type: type === 'password' && this.mergedShowPasswordOn && this.passwordVisible ? 'text' : type
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${mergedClsPrefix}-input__input-el`, (_e = this.inputProps) === null || _e === void 0 ? void 0 : _e.class],
      style: [this.textDecorationStyle[0], (_f = this.inputProps) === null || _f === void 0 ? void 0 : _f.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : (_g = this.inputProps) === null || _g === void 0 ? void 0 : _g.tabindex,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? undefined : this.maxlength,
      minlength: countGraphemes ? undefined : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: e => {
        this.handleInputFocus(e, 0);
      },
      onInput: e => {
        this.handleInput(e, 0);
      },
      onChange: e => {
        this.handleChange(e, 0);
      }
    })), this.showPlaceholder1 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? h("div", {
      class: `${mergedClsPrefix}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, "\u00A0") : null), !this.pair && resolveWrappedSlot($slots.suffix, children => {
      return children || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== undefined ? h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [resolveWrappedSlot($slots['clear-icon-placeholder'], children => {
        return (this.clearable || children) && h(NBaseClear, {
          clsPrefix: mergedClsPrefix,
          show: this.showClearButton,
          onClear: this.handleClear
        }, {
          placeholder: () => children,
          icon: () => {
            var _a, _b;
            return (_b = (_a = this.$slots)['clear-icon']) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        });
      }), !this.internalLoadingBeforeSuffix ? children : null, this.loading !== undefined ? h(NBaseSuffix, {
        clsPrefix: mergedClsPrefix,
        loading: this.loading,
        showArrow: false,
        showClear: false,
        style: this.cssVars
      }) : null, this.internalLoadingBeforeSuffix ? children : null, this.showCount && this.type !== 'textarea' ? h(WordCount, null, {
        default: props => {
          var _a;
          const {
            renderCount
          } = this;
          if (renderCount) {
            return renderCount(props);
          }
          return (_a = $slots.count) === null || _a === void 0 ? void 0 : _a.call($slots, props);
        }
      }) : null, this.mergedShowPasswordOn && this.type === 'password' ? h("div", {
        class: `${mergedClsPrefix}-input__eye`,
        onMousedown: this.handlePasswordToggleMousedown,
        onClick: this.handlePasswordToggleClick
      }, this.passwordVisible ? resolveSlot($slots['password-visible-icon'], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeIcon, null)
      })]) : resolveSlot($slots['password-invisible-icon'], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeOffIcon, null)
      })])) : null]) : null;
    })), this.pair ? h("span", {
      class: `${mergedClsPrefix}-input__separator`
    }, resolveSlot($slots.separator, () => [this.separator])) : null, this.pair ? h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${mergedClsPrefix}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : undefined,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? undefined : this.maxlength,
      minlength: countGraphemes ? undefined : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : undefined,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: e => {
        this.handleInputFocus(e, 1);
      },
      onInput: e => {
        this.handleInput(e, 1);
      },
      onChange: e => {
        this.handleChange(e, 1);
      }
    }), this.showPlaceholder2 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[1])) : null), resolveWrappedSlot($slots.suffix, children => {
      return (this.clearable || children) && h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [this.clearable && h(NBaseClear, {
        clsPrefix: mergedClsPrefix,
        show: this.showClearButton,
        onClear: this.handleClear
      }, {
        icon: () => {
          var _a;
          return (_a = $slots['clear-icon']) === null || _a === void 0 ? void 0 : _a.call($slots);
        },
        placeholder: () => {
          var _a;
          return (_a = $slots['clear-icon-placeholder']) === null || _a === void 0 ? void 0 : _a.call($slots);
        }
      }), children]);
    })) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__border`
    }) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__state-border`
    }) : null, this.showCount && type === 'textarea' ? h(WordCount, null, {
      default: props => {
        var _a;
        const {
          renderCount
        } = this;
        if (renderCount) {
          return renderCount(props);
        }
        return (_a = $slots.count) === null || _a === void 0 ? void 0 : _a.call($slots, props);
      }
    }) : null);
  }
});

export { EyeIcon, NInput, commonVariables, inputLight, inputProps };
//# sourceMappingURL=Input.xoI_2nKL1767105581793.js.map
