import { importShared, throttle as throttle$1 } from './index.BxB45aCK1767105581793.js';
import { configProviderInjectionKey, derived, c, cB, cM, cE, useConfig, useTheme, useThemeClass, cNotM, createTheme, createInjectionKey, warn } from './light.CLUJsvFB1767105581793.js';
import { NBaseLoading } from './Loading.DMQwrvK31767105581793.js';
import { useLocale } from './Suffix.BS0_grS71767105581793.js';
import { fadeInScaleUpTransition } from './Card.CmCLdudX1767105581793.js';
import { scrollbarLight, Scrollbar } from './Scrollbar.COIrvx-21767105581793.js';

const {computed: computed$4,inject: inject$1,watchEffect} = await importShared('vue');
function useHljs(props, shouldHighlightRef) {
  const NConfigProvider = inject$1(configProviderInjectionKey, null);
  return computed$4(() => {
    return props.hljs || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedHljsRef.value);
  });
}

function self$2(vars) {
  const {
    textColor2,
    fontSize,
    fontWeightStrong,
    textColor3
  } = vars;
  return {
    textColor: textColor2,
    fontSize,
    fontWeightStrong,
    // extracted from hljs atom-one-light.scss
    'mono-3': '#a0a1a7',
    'hue-1': '#0184bb',
    'hue-2': '#4078f2',
    'hue-3': '#a626a4',
    'hue-4': '#50a14f',
    'hue-5': '#e45649',
    'hue-5-2': '#c91243',
    'hue-6': '#986801',
    'hue-6-2': '#c18401',
    // line-number styles
    lineNumberTextColor: textColor3
  };
}
const codeLight = {
  name: 'Code',
  common: derived,
  self: self$2
};

// vars:
// --n-font-size
// --n-font-family
// --n-font-weight-strong
// --n-bezier
// --n-text-color
// --n-mono-3
// --n-hue-1
// --n-hue-2
// --n-hue-3
// --n-hue-4
// --n-hue-5
// --n-hue-5-2
// --n-hue-6
// --n-hue-6-2
// --n-line-number-color
// --n-line-number-text-color
const style$2 = c([cB('code', `
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `, [cM('show-line-numbers', `
 display: flex;
 `), cE('line-numbers', `
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `), cM('word-wrap', [c('pre', `
 white-space: pre-wrap;
 word-break: break-all;
 `)]), c('pre', `
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `), c('[class^=hljs]', `
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), ({
  props
}) => {
  const codeClass = `${props.bPrefix}code`;
  return [`${codeClass} .hljs-comment,
 ${codeClass} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`, `${codeClass} .hljs-doctag,
 ${codeClass} .hljs-keyword,
 ${codeClass} .hljs-formula {
 color: var(--n-hue-3);
 }`, `${codeClass} .hljs-section,
 ${codeClass} .hljs-name,
 ${codeClass} .hljs-selector-tag,
 ${codeClass} .hljs-deletion,
 ${codeClass} .hljs-subst {
 color: var(--n-hue-5);
 }`, `${codeClass} .hljs-literal {
 color: var(--n-hue-1);
 }`, `${codeClass} .hljs-string,
 ${codeClass} .hljs-regexp,
 ${codeClass} .hljs-addition,
 ${codeClass} .hljs-attribute,
 ${codeClass} .hljs-meta-string {
 color: var(--n-hue-4);
 }`, `${codeClass} .hljs-built_in,
 ${codeClass} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`, `${codeClass} .hljs-attr,
 ${codeClass} .hljs-variable,
 ${codeClass} .hljs-template-variable,
 ${codeClass} .hljs-type,
 ${codeClass} .hljs-selector-class,
 ${codeClass} .hljs-selector-attr,
 ${codeClass} .hljs-selector-pseudo,
 ${codeClass} .hljs-number {
 color: var(--n-hue-6);
 }`, `${codeClass} .hljs-symbol,
 ${codeClass} .hljs-bullet,
 ${codeClass} .hljs-link,
 ${codeClass} .hljs-meta,
 ${codeClass} .hljs-selector-id,
 ${codeClass} .hljs-title {
 color: var(--n-hue-2);
 }`, `${codeClass} .hljs-emphasis {
 font-style: italic;
 }`, `${codeClass} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`, `${codeClass} .hljs-link {
 text-decoration: underline;
 }`];
}]);

const {computed: computed$3,defineComponent: defineComponent$4,h: h$4,onMounted: onMounted$1,ref: ref$2,toRef: toRef$2,watch: watch$1} = await importShared('vue');
const codeProps = Object.assign(Object.assign({}, useTheme.props), {
  language: String,
  code: {
    type: String,
    default: ''
  },
  trim: {
    type: Boolean,
    default: true
  },
  hljs: Object,
  uri: Boolean,
  inline: Boolean,
  wordWrap: Boolean,
  showLineNumbers: Boolean,
  // In n-log, we only need to mount code's style for highlight
  internalFontSize: Number,
  internalNoHighlight: Boolean
});
const NCode = defineComponent$4({
  name: 'Code',
  props: codeProps,
  setup(props, {
    slots
  }) {
    const {
      internalNoHighlight
    } = props;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig();
    const codeRef = ref$2(null);
    const hljsRef = internalNoHighlight ? {
      value: undefined
    } : useHljs(props);
    const createCodeHtml = (language, code, trim) => {
      const {
        value: hljs
      } = hljsRef;
      if (!hljs) {
        return null;
      }
      if (!(language && hljs.getLanguage(language))) {
        return null;
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language
      }).value;
    };
    const mergedShowLineNumbersRef = computed$3(() => {
      if (props.inline || props.wordWrap) return false;
      return props.showLineNumbers;
    });
    const setCode = () => {
      if (slots.default) return;
      const {
        value: codeEl
      } = codeRef;
      if (!codeEl) return;
      const {
        language
      } = props;
      const code = props.uri ? window.decodeURIComponent(props.code) : props.code;
      if (language) {
        const html = createCodeHtml(language, code, props.trim);
        if (html !== null) {
          if (props.inline) {
            codeEl.innerHTML = html;
          } else {
            const prevPreEl = codeEl.querySelector('.__code__');
            if (prevPreEl) codeEl.removeChild(prevPreEl);
            const preEl = document.createElement('pre');
            preEl.className = '__code__';
            preEl.innerHTML = html;
            codeEl.appendChild(preEl);
          }
          return;
        }
      }
      if (props.inline) {
        codeEl.textContent = code;
        return;
      }
      const maybePreEl = codeEl.querySelector('.__code__');
      if (maybePreEl) {
        maybePreEl.textContent = code;
      } else {
        const wrap = document.createElement('pre');
        wrap.className = '__code__';
        wrap.textContent = code;
        codeEl.innerHTML = '';
        codeEl.appendChild(wrap);
      }
    };
    onMounted$1(setCode);
    watch$1(toRef$2(props, 'language'), setCode);
    watch$1(toRef$2(props, 'code'), setCode);
    if (!internalNoHighlight) watch$1(hljsRef, setCode);
    const themeRef = useTheme('Code', '-code', style$2, codeLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$3(() => {
      const {
        common: {
          cubicBezierEaseInOut,
          fontFamilyMono
        },
        self: {
          textColor,
          fontSize,
          fontWeightStrong,
          lineNumberTextColor,
          // extracted from hljs atom-one-light.scss
          'mono-3': $1,
          'hue-1': $2,
          'hue-2': $3,
          'hue-3': $4,
          'hue-4': $5,
          'hue-5': $6,
          'hue-5-2': $7,
          'hue-6': $8,
          'hue-6-2': $9
        }
      } = themeRef.value;
      const {
        internalFontSize
      } = props;
      return {
        '--n-font-size': internalFontSize ? `${internalFontSize}px` : fontSize,
        '--n-font-family': fontFamilyMono,
        '--n-font-weight-strong': fontWeightStrong,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-text-color': textColor,
        '--n-mono-3': $1,
        '--n-hue-1': $2,
        '--n-hue-2': $3,
        '--n-hue-3': $4,
        '--n-hue-4': $5,
        '--n-hue-5': $6,
        '--n-hue-5-2': $7,
        '--n-hue-6': $8,
        '--n-hue-6-2': $9,
        '--n-line-number-text-color': lineNumberTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('code', computed$3(() => {
      return `${props.internalFontSize || 'a'}`;
    }), cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      codeRef,
      mergedShowLineNumbers: mergedShowLineNumbersRef,
      lineNumbers: computed$3(() => {
        let number = 1;
        const numbers = [];
        let lastIsLineWrap = false;
        for (const char of props.code) {
          if (char === '\n') {
            lastIsLineWrap = true;
            numbers.push(number++);
          } else {
            lastIsLineWrap = false;
          }
        }
        if (!lastIsLineWrap) {
          numbers.push(number++);
        }
        return numbers.join('\n');
      }),
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      wordWrap,
      mergedShowLineNumbers,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h$4("code", {
      class: [`${mergedClsPrefix}-code`, this.themeClass, wordWrap && `${mergedClsPrefix}-code--word-wrap`, mergedShowLineNumbers && `${mergedClsPrefix}-code--show-line-numbers`],
      style: this.cssVars,
      ref: "codeRef"
    }, mergedShowLineNumbers ? h$4("pre", {
      class: `${mergedClsPrefix}-code__line-numbers`
    }, this.lineNumbers) : null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a));
  }
});

function self$1(vars) {
  const {
    textColor1,
    dividerColor,
    fontWeightStrong
  } = vars;
  return {
    textColor: textColor1,
    color: dividerColor,
    fontWeight: fontWeightStrong
  };
}
const dividerLight = {
  common: derived,
  self: self$1
};

// vars:
// --n-bezier
// --n-color
// --n-text-color
// --n-font-weight
const style$1 = cB('divider', `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [cNotM('vertical', `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM('no-title', `
 display: flex;
 align-items: center;
 `)]), cE('title', `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), cM('title-position-left', [cE('line', [cM('left', {
  width: '28px'
})])]), cM('title-position-right', [cE('line', [cM('right', {
  width: '28px'
})])]), cM('dashed', [cE('line', `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), cM('vertical', `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), cE('line', `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), cNotM('dashed', [cE('line', {
  backgroundColor: 'var(--n-color)'
})]), cM('dashed', [cE('line', {
  borderColor: 'var(--n-color)'
})]), cM('vertical', {
  backgroundColor: 'var(--n-color)'
})]);

const {computed: computed$2,defineComponent: defineComponent$3,Fragment,h: h$3} = await importShared('vue');
const dividerProps = Object.assign(Object.assign({}, useTheme.props), {
  titlePlacement: {
    type: String,
    default: 'center'
  },
  dashed: Boolean,
  vertical: Boolean
});
const NDivider = defineComponent$3({
  name: 'Divider',
  props: dividerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('Divider', '-divider', style$1, dividerLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$2(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          textColor,
          fontWeight
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-color': color,
        '--n-text-color': textColor,
        '--n-font-weight': fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('divider', undefined, cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h$3("div", {
      role: "separator",
      class: [`${mergedClsPrefix}-divider`, this.themeClass, {
        [`${mergedClsPrefix}-divider--vertical`]: vertical,
        [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
        [`${mergedClsPrefix}-divider--dashed`]: dashed,
        [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
      }],
      style: cssVars
    }, !vertical ? h$3("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
    }) : null, !vertical && $slots.default ? h$3(Fragment, null, h$3("div", {
      class: `${mergedClsPrefix}-divider__title`
    }, this.$slots), h$3("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
    })) : null);
  }
});

function self(vars) {
  const {
    textColor2,
    modalColor,
    borderColor,
    fontSize,
    primaryColor
  } = vars;
  return {
    loaderFontSize: fontSize,
    loaderTextColor: textColor2,
    loaderColor: modalColor,
    loaderBorder: `1px solid ${borderColor}`,
    loadingColor: primaryColor
  };
}
const logLight = createTheme({
  name: 'Log',
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Code: codeLight
  },
  self
});

const logInjectionKey = createInjectionKey('n-log');

const {computed: computed$1,defineComponent: defineComponent$2,h: h$2,inject,onMounted,ref: ref$1,toRef: toRef$1,watch} = await importShared('vue');
const NLogLine = defineComponent$2({
  props: {
    line: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const {
      trimRef,
      highlightRef,
      languageRef,
      mergedHljsRef
    } = inject(logInjectionKey);
    const selfRef = ref$1(null);
    const maybeTrimmedLinesRef = computed$1(() => {
      return trimRef.value ? props.line.trim() : props.line;
    });
    function setInnerHTML() {
      if (selfRef.value) {
        selfRef.value.innerHTML = generateCodeHTML(languageRef.value, maybeTrimmedLinesRef.value);
      }
    }
    function generateCodeHTML(language, code) {
      const {
        value: hljs
      } = mergedHljsRef;
      if (hljs) {
        if (language && hljs.getLanguage(language)) {
          return hljs.highlight(code, {
            language
          }).value;
        }
      }
      return code;
    }
    onMounted(() => {
      if (highlightRef.value) {
        setInnerHTML();
      }
    });
    watch(toRef$1(props, 'line'), () => {
      if (highlightRef.value) {
        setInnerHTML();
      }
    });
    return {
      highlight: highlightRef,
      selfRef,
      maybeTrimmedLines: maybeTrimmedLinesRef
    };
  },
  render() {
    const {
      highlight,
      maybeTrimmedLines
    } = this;
    return h$2("pre", {
      ref: "selfRef"
    }, highlight ? null : maybeTrimmedLines);
  }
});

const {defineComponent: defineComponent$1,h: h$1} = await importShared('vue');
const NLogLoader = defineComponent$1({
  name: 'LogLoader',
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      locale: useLocale('Log').localeRef
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$1("div", {
      class: `${clsPrefix}-log-loader`
    }, h$1(NBaseLoading, {
      clsPrefix: clsPrefix,
      strokeWidth: 24,
      scale: 0.85
    }), h$1("span", {
      class: `${clsPrefix}-log-loader__content`
    }, this.locale.loading));
  }
});

// vars:
// --n-bezier
// --n-loading-color
// --n-loader-border
// --n-loader-color
// --n-loader-text-color
// --n-loader-font-size
// --n-loading-color
const style = cB('log', `
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`, [c('pre', `
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `), cB('log-loader', `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `, [fadeInScaleUpTransition(), cE('content', `
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `), cB('base-loading', `
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]);

const {computed,defineComponent,h,nextTick,provide,ref,toRef,Transition} = await importShared('vue');
// Fix vue-tsc error
const throttle = throttle$1;
const logProps = Object.assign(Object.assign({}, useTheme.props), {
  loading: Boolean,
  trim: Boolean,
  log: String,
  fontSize: {
    type: Number,
    default: 14
  },
  lines: {
    type: Array,
    default: () => []
  },
  lineHeight: {
    type: Number,
    default: 1.25
  },
  language: String,
  rows: {
    type: Number,
    default: 15
  },
  offsetTop: {
    type: Number,
    default: 0
  },
  offsetBottom: {
    type: Number,
    default: 0
  },
  hljs: Object,
  onReachTop: Function,
  onReachBottom: Function,
  onRequireMore: Function
});
const NLog = defineComponent({
  name: 'Log',
  props: logProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const silentRef = ref(false);
    const highlightRef = computed(() => {
      return props.language !== undefined;
    });
    const styleHeightRef = computed(() => {
      return `calc(${Math.round(props.rows * props.lineHeight * props.fontSize)}px)`;
    });
    const mergedLinesRef = computed(() => {
      const {
        log
      } = props;
      if (log) {
        return log.split('\n');
      }
      return props.lines;
    });
    const scrollbarRef = ref(null);
    const themeRef = useTheme('Log', '-log', style, logLight, props, mergedClsPrefixRef);
    function handleScroll(e) {
      const container = e.target;
      const content = container.firstElementChild;
      if (silentRef.value) {
        void nextTick(() => {
          silentRef.value = false;
        });
        return;
      }
      const containerHeight = container.offsetHeight;
      const containerScrollTop = container.scrollTop;
      const contentHeight = content.offsetHeight;
      const scrollTop = containerScrollTop;
      const scrollBottom = contentHeight - containerScrollTop - containerHeight;
      if (scrollTop <= props.offsetTop) {
        const {
          onReachTop,
          onRequireMore
        } = props;
        if (onRequireMore) onRequireMore('top');
        if (onReachTop) onReachTop();
      }
      if (scrollBottom <= props.offsetBottom) {
        const {
          onReachBottom,
          onRequireMore
        } = props;
        if (onRequireMore) onRequireMore('bottom');
        if (onReachBottom) onReachBottom();
      }
    }
    const handleWheel = throttle(_handleWheel, 300);
    function _handleWheel(e) {
      if (silentRef.value) {
        void nextTick(() => {
          silentRef.value = false;
        });
        return;
      }
      if (scrollbarRef.value) {
        const {
          containerRef,
          contentRef
        } = scrollbarRef.value;
        if (containerRef && contentRef) {
          const containerHeight = containerRef.offsetHeight;
          const containerScrollTop = containerRef.scrollTop;
          const contentHeight = contentRef.offsetHeight;
          const scrollTop = containerScrollTop;
          const scrollBottom = contentHeight - containerScrollTop - containerHeight;
          const deltaY = e.deltaY;
          if (scrollTop === 0 && deltaY < 0) {
            const {
              onRequireMore
            } = props;
            if (onRequireMore) onRequireMore('top');
          }
          if (scrollBottom <= 0 && deltaY > 0) {
            const {
              onRequireMore
            } = props;
            if (onRequireMore) onRequireMore('bottom');
          }
        }
      }
    }
    function scrollTo(options) {
      const {
        value: scrollbarInst
      } = scrollbarRef;
      if (!scrollbarInst) return;
      const {
        silent,
        top,
        position
      } = options;
      if (silent) {
        silentRef.value = true;
      }
      if (top !== undefined) {
        scrollbarInst.scrollTo({
          left: 0,
          top
        });
      } else if (position === 'bottom' || position === 'top') {
        scrollbarInst.scrollTo({
          position
        });
      }
    }
    // deprecated
    function scrollToTop(silent = false) {
      warn('log', '`scrollToTop` is deprecated, please use `scrollTo({ position: \'top\'})` instead.');
      scrollTo({
        position: 'top',
        silent
      });
    }
    function scrollToBottom(silent = false) {
      warn('log', '`scrollToTop` is deprecated, please use `scrollTo({ position: \'bottom\'})` instead.');
      scrollTo({
        position: 'bottom',
        silent
      });
    }
    provide(logInjectionKey, {
      languageRef: toRef(props, 'language'),
      mergedHljsRef: useHljs(props),
      trimRef: toRef(props, 'trim'),
      highlightRef
    });
    const exportedMethods = {
      scrollTo
    };
    const cssVarsRef = computed(() => {
      const {
        self: {
          loaderFontSize,
          loaderTextColor,
          loaderColor,
          loaderBorder,
          loadingColor
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-loader-font-size': loaderFontSize,
        '--n-loader-border': loaderBorder,
        '--n-loader-color': loaderColor,
        '--n-loader-text-color': loaderTextColor,
        '--n-loading-color': loadingColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('log', undefined, cssVarsRef, props) : undefined;
    return Object.assign(Object.assign({}, exportedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      scrollbarRef,
      mergedTheme: themeRef,
      styleHeight: styleHeightRef,
      mergedLines: mergedLinesRef,
      scrollToTop,
      scrollToBottom,
      handleWheel,
      handleScroll,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h('div', {
      class: [`${mergedClsPrefix}-log`, this.themeClass],
      style: [{
        lineHeight: this.lineHeight,
        height: this.styleHeight
      }, this.cssVars],
      onWheelPassive: this.handleWheel
    }, [h(Scrollbar, {
      ref: "scrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      onScroll: this.handleScroll
    }, {
      default: () => h(NCode, {
        internalNoHighlight: true,
        internalFontSize: this.fontSize,
        theme: mergedTheme.peers.Code,
        themeOverrides: mergedTheme.peerOverrides.Code
      }, {
        default: () => this.mergedLines.map((line, index) => {
          return h(NLogLine, {
            key: index,
            line: line
          });
        })
      })
    }), h(Transition, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? h(NLogLoader, {
        clsPrefix: mergedClsPrefix
      }) : null
    })]);
  }
});

export { NCode, NDivider, NLog, codeProps, dividerProps, logProps, self$1 as self };
//# sourceMappingURL=Log.XhSU-B701767105581793.js.map
