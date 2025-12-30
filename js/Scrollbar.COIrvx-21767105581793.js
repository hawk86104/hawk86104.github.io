import { importShared, ResizeObserver } from './index.BxB45aCK1767105581793.js';
import { c, commonVariables, derived, cB, cM, cE, useConfig, useTheme, useThemeClass } from './light.CLUJsvFB1767105581793.js';
import { useRtl } from './use-rtl.Dso2-paz1767105581793.js';
import { off, on } from './use-merged-state.tu3_gbk31767105581793.js';

function getPreciseEventTarget(event) {
    return event.composedPath()[0] || null;
}

function depx(value) {
    if (typeof value === 'string') {
        if (value.endsWith('px')) {
            return Number(value.slice(0, value.length - 2));
        }
        return Number(value);
    }
    return value;
}
function pxfy(value) {
    if (value === undefined || value === null)
        return undefined;
    if (typeof value === 'number')
        return `${value}px`;
    if (value.endsWith('px'))
        return value;
    return `${value}px`;
}
function getMargin(value, position) {
    const parts = value.trim().split(/\s+/g);
    const margin = {
        top: parts[0]
    };
    switch (parts.length) {
        case 1:
            margin.right = parts[0];
            margin.bottom = parts[0];
            margin.left = parts[0];
            break;
        case 2:
            margin.right = parts[1];
            margin.left = parts[1];
            margin.bottom = parts[0];
            break;
        case 3:
            margin.right = parts[1];
            margin.bottom = parts[2];
            margin.left = parts[1];
            break;
        case 4:
            margin.right = parts[1];
            margin.bottom = parts[2];
            margin.left = parts[3];
            break;
        default:
            throw new Error('[seemly/getMargin]:' + value + ' is not a valid value.');
    }
    if (position === undefined)
        return margin;
    return margin[position];
}
function getGap(value, orient) {
    const [rowGap, colGap] = value.split(' ');
    return {
            row: rowGap,
            col: colGap || rowGap
        };
}

function createId(length = 8) {
    return Math.random()
        .toString(16)
        .slice(2, 2 + length);
}
function repeat(count, v) {
    const ret = [];
    for (let i = 0; i < count; ++i) {
        ret.push(v);
    }
    return ret;
}
function indexMap(count, createValue) {
    const ret = [];
    if (!createValue) {
        for (let i = 0; i < count; ++i) {
            ret.push(i);
        }
        return ret;
    }
    for (let i = 0; i < count; ++i) {
        ret.push(createValue(i));
    }
    return ret;
}

const isIos = (typeof window === 'undefined'
    ? false
    : /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    !window.MSStream;
function useIsIos() {
    return isIos;
}

const {onActivated,onDeactivated} = await importShared('vue');

function useReactivated(callback) {
  const isDeactivatedRef = {
    isDeactivated: false
  };
  let activateStateInitialized = false;
  onActivated(() => {
    isDeactivatedRef.isDeactivated = false;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
      return;
    }
    callback();
  });
  onDeactivated(() => {
    isDeactivatedRef.isDeactivated = true;
    if (!activateStateInitialized) {
      activateStateInitialized = true;
    }
  });
  return isDeactivatedRef;
}

function warn(location, message) {
    console.error(`[vueuc/${location}]: ${message}`);
}

class ResizeObserverDelegate {
    constructor() {
        this.handleResize = this.handleResize.bind(this);
        this.observer = new ((typeof window !== 'undefined' &&
            window.ResizeObserver) ||
            ResizeObserver)(this.handleResize);
        this.elHandlersMap = new Map();
    }
    handleResize(entries) {
        for (const entry of entries) {
            const handler = this.elHandlersMap.get(entry.target);
            if (handler !== undefined) {
                handler(entry);
            }
        }
    }
    registerHandler(el, handler) {
        this.elHandlersMap.set(el, handler);
        this.observer.observe(el);
    }
    unregisterHandler(el) {
        if (!this.elHandlersMap.has(el)) {
            return;
        }
        this.elHandlersMap.delete(el);
        this.observer.unobserve(el);
    }
}
const resizeObserverManager = new ResizeObserverDelegate();

const {defineComponent: defineComponent$2,renderSlot,getCurrentInstance,onMounted: onMounted$1,onBeforeUnmount: onBeforeUnmount$1} = await importShared('vue');
const VResizeObserver = defineComponent$2({
    name: 'ResizeObserver',
    props: {
        onResize: Function
    },
    setup(props) {
        let registered = false;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const proxy = getCurrentInstance().proxy;
        function handleResize(entry) {
            const { onResize } = props;
            if (onResize !== undefined)
                onResize(entry);
        }
        onMounted$1(() => {
            const el = proxy.$el;
            if (el === undefined) {
                warn('resize-observer', '$el does not exist.');
                return;
            }
            if (el.nextElementSibling !== el.nextSibling) {
                if (el.nodeType === 3 && el.nodeValue !== '') {
                    warn('resize-observer', '$el can not be observed (it may be a text node).');
                    return;
                }
            }
            if (el.nextElementSibling !== null) {
                resizeObserverManager.registerHandler(el.nextElementSibling, handleResize);
                registered = true;
            }
        });
        onBeforeUnmount$1(() => {
            if (registered) {
                resizeObserverManager.unregisterHandler(proxy.$el.nextElementSibling);
            }
        });
    },
    render() {
        return renderSlot(this.$slots, 'default');
    }
});

function rtlInset(inset) {
  const {
    left,
    right,
    top,
    bottom
  } = getMargin(inset);
  return `${top} ${left} ${bottom} ${right}`;
}

const {Comment,createTextVNode,Fragment: Fragment$1} = await importShared('vue');

// o(n) flatten
function flatten(vNodes, filterCommentNode = true, result = []) {
  vNodes.forEach(vNode => {
    if (vNode === null) return;
    if (typeof vNode !== 'object') {
      if (typeof vNode === 'string' || typeof vNode === 'number') {
        result.push(createTextVNode(String(vNode)));
      }
      return;
    }
    if (Array.isArray(vNode)) {
      flatten(vNode, filterCommentNode, result);
      return;
    }
    if (vNode.type === Fragment$1) {
      if (vNode.children === null) return;
      if (Array.isArray(vNode.children)) {
        flatten(vNode.children, filterCommentNode, result);
      }
      // rawSlot
    } else {
      if (vNode.type === Comment && filterCommentNode) return;
      result.push(vNode);
    }
  });
  return result;
}

const {defineComponent: defineComponent$1} = await importShared('vue');

const Wrapper = defineComponent$1({
  render() {
    var _a, _b;
    return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
});

const {
  cubicBezierEaseInOut
} = commonVariables;
function fadeInTransition({
  name = 'fade-in',
  enterDuration = '0.2s',
  leaveDuration = '0.2s',
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
} = {}) {
  return [c(`&.${name}-transition-enter-active`, {
    transition: `all ${enterDuration} ${enterCubicBezier}!important`
  }), c(`&.${name}-transition-leave-active`, {
    transition: `all ${leaveDuration} ${leaveCubicBezier}!important`
  }), c(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0
  }), c(`&.${name}-transition-leave-from, &.${name}-transition-enter-to`, {
    opacity: 1
  })];
}

const commonVars = {
  railInsetHorizontalBottom: 'auto 2px 4px 2px',
  railInsetHorizontalTop: '4px 2px auto 2px',
  railInsetVerticalRight: '2px 4px 2px auto',
  railInsetVerticalLeft: '2px auto 2px 4px',
  railColor: 'transparent'
};

function self(vars) {
  const {
    scrollbarColor,
    scrollbarColorHover,
    scrollbarHeight,
    scrollbarWidth,
    scrollbarBorderRadius
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    height: scrollbarHeight,
    width: scrollbarWidth,
    borderRadius: scrollbarBorderRadius,
    color: scrollbarColor,
    colorHover: scrollbarColorHover
  });
}
const scrollbarLight = {
  name: 'Scrollbar',
  common: derived,
  self
};

// vars:
// --n-scrollbar-bezier
// --n-scrollbar-color
// --n-scrollbar-color-hover
// --n-scrollbar-width
// --n-scrollbar-height
// --n-scrollbar-border-radius
// --n-scrollbar-rail-inset-horizontal
// --n-scrollbar-rail-inset-vertical
// --n-scrollbar-rail-color
const style = cB('scrollbar', `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [c('>', [cB('scrollbar-container', `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [c('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
 width: 0;
 height: 0;
 display: none;
 `), c('>', [
// We can't set overflow hidden since it affects positioning.
cB('scrollbar-content', `
 box-sizing: border-box;
 min-width: 100%;
 `)])])]), c('>, +', [cB('scrollbar-rail', `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [cM('horizontal', `
 height: var(--n-scrollbar-height);
 `, [c('>', [cE('scrollbar', `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), cM('horizontal--top', `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), cM('horizontal--bottom', `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), cM('vertical', `
 width: var(--n-scrollbar-width);
 `, [c('>', [cE('scrollbar', `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), cM('vertical--left', `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), cM('vertical--right', `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), cM('disabled', [c('>', [cE('scrollbar', 'pointer-events: none;')])]), c('>', [cE('scrollbar', `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fadeInTransition(), c('&:hover', 'background-color: var(--n-scrollbar-color-hover);')])])])])]);

const {computed,defineComponent,Fragment,h,mergeProps,onBeforeUnmount,onMounted,ref,Transition,watchEffect} = await importShared('vue');
const scrollbarProps = Object.assign(Object.assign({}, useTheme.props), {
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: true
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: 'hover'
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean,
  yPlacement: {
    type: String,
    default: 'right'
  },
  xPlacement: {
    type: String,
    default: 'bottom'
  }
});
const Scrollbar = defineComponent({
  name: 'Scrollbar',
  props: scrollbarProps,
  inheritAttrs: false,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl('Scrollbar', mergedRtlRef, mergedClsPrefixRef);
    // dom ref
    const wrapperRef = ref(null);
    const containerRef = ref(null);
    const contentRef = ref(null);
    const yRailRef = ref(null);
    const xRailRef = ref(null);
    // data ref
    const contentHeightRef = ref(null);
    const contentWidthRef = ref(null);
    const containerHeightRef = ref(null);
    const containerWidthRef = ref(null);
    const yRailSizeRef = ref(null);
    const xRailSizeRef = ref(null);
    const containerScrollTopRef = ref(0);
    const containerScrollLeftRef = ref(0);
    const isShowXBarRef = ref(false);
    const isShowYBarRef = ref(false);
    let yBarPressed = false;
    let xBarPressed = false;
    let xBarVanishTimerId;
    let yBarVanishTimerId;
    let memoYTop = 0;
    let memoXLeft = 0;
    let memoMouseX = 0;
    let memoMouseY = 0;
    const isIos = useIsIos();
    const themeRef = useTheme('Scrollbar', '-scrollbar', style, scrollbarLight, props, mergedClsPrefixRef);
    const yBarSizeRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yRailSize
      } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        return Math.min(containerHeight, yRailSize * containerHeight / contentHeight + depx(themeRef.value.self.width) * 1.5);
      }
    });
    const yBarSizePxRef = computed(() => {
      return `${yBarSizeRef.value}px`;
    });
    const xBarSizeRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xRailSize
      } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        return xRailSize * containerWidth / contentWidth + depx(themeRef.value.self.height) * 1.5;
      }
    });
    const xBarSizePxRef = computed(() => {
      return `${xBarSizeRef.value}px`;
    });
    const yBarTopRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: containerScrollTop
      } = containerScrollTopRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yRailSize
      } = yRailSizeRef;
      if (containerHeight === null || contentHeight === null || yRailSize === null) {
        return 0;
      } else {
        const heightDiff = contentHeight - containerHeight;
        if (!heightDiff) return 0;
        return containerScrollTop / heightDiff * (yRailSize - yBarSizeRef.value);
      }
    });
    const yBarTopPxRef = computed(() => {
      return `${yBarTopRef.value}px`;
    });
    const xBarLeftRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: containerScrollLeft
      } = containerScrollLeftRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xRailSize
      } = xRailSizeRef;
      if (containerWidth === null || contentWidth === null || xRailSize === null) {
        return 0;
      } else {
        const widthDiff = contentWidth - containerWidth;
        if (!widthDiff) return 0;
        return containerScrollLeft / widthDiff * (xRailSize - xBarSizeRef.value);
      }
    });
    const xBarLeftPxRef = computed(() => {
      return `${xBarLeftRef.value}px`;
    });
    const needYBarRef = computed(() => {
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      return containerHeight !== null && contentHeight !== null && contentHeight > containerHeight;
    });
    const needXBarRef = computed(() => {
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      return containerWidth !== null && contentWidth !== null && contentWidth > containerWidth;
    });
    const mergedShowXBarRef = computed(() => {
      const {
        trigger
      } = props;
      return trigger === 'none' || isShowXBarRef.value;
    });
    const mergedShowYBarRef = computed(() => {
      const {
        trigger
      } = props;
      return trigger === 'none' || isShowYBarRef.value;
    });
    const mergedContainerRef = computed(() => {
      const {
        container
      } = props;
      if (container) return container();
      return containerRef.value;
    });
    const mergedContentRef = computed(() => {
      const {
        content
      } = props;
      if (content) return content();
      return contentRef.value;
    });
    const scrollTo = (options, y) => {
      if (!props.scrollable) return;
      if (typeof options === 'number') {
        scrollToPosition(options, y !== null && y !== void 0 ? y : 0, 0, false, 'auto');
        return;
      }
      const {
        left,
        top,
        index,
        elSize,
        position,
        behavior,
        el,
        debounce = true
      } = options;
      if (left !== undefined || top !== undefined) {
        scrollToPosition(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
      }
      if (el !== undefined) {
        scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior);
      } else if (index !== undefined && elSize !== undefined) {
        scrollToPosition(0, index * elSize, elSize, debounce, behavior);
      } else if (position === 'bottom') {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
      } else if (position === 'top') {
        scrollToPosition(0, 0, 0, false, behavior);
      }
    };
    const activateState = useReactivated(() => {
      // Only restore for builtin container & content
      if (!props.container) {
        // remount
        scrollTo({
          top: containerScrollTopRef.value,
          left: containerScrollLeftRef.value
        });
      }
    });
    // methods
    const handleContentResize = () => {
      if (activateState.isDeactivated) return;
      sync();
    };
    const handleContainerResize = e => {
      if (activateState.isDeactivated) return;
      const {
        onResize
      } = props;
      if (onResize) onResize(e);
      sync();
    };
    const scrollBy = (options, y) => {
      if (!props.scrollable) return;
      const {
        value: container
      } = mergedContainerRef;
      if (!container) return;
      if (typeof options === 'object') {
        container.scrollBy(options);
      } else {
        container.scrollBy(options, y || 0);
      }
    };
    function scrollToPosition(left, top, elSize, debounce, behavior) {
      const {
        value: container
      } = mergedContainerRef;
      if (!container) return;
      if (debounce) {
        const {
          scrollTop,
          offsetHeight
        } = container;
        if (top > scrollTop) {
          if (top + elSize <= scrollTop + offsetHeight) ; else {
            container.scrollTo({
              left,
              top: top + elSize - offsetHeight,
              behavior
            });
          }
          return;
        }
      }
      container.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleMouseEnterWrapper() {
      showXBar();
      showYBar();
      sync();
    }
    function handleMouseLeaveWrapper() {
      hideBar();
    }
    function hideBar() {
      hideYBar();
      hideXBar();
    }
    function hideYBar() {
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId);
      }
      yBarVanishTimerId = window.setTimeout(() => {
        isShowYBarRef.value = false;
      }, props.duration);
    }
    function hideXBar() {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId);
      }
      xBarVanishTimerId = window.setTimeout(() => {
        isShowXBarRef.value = false;
      }, props.duration);
    }
    function showXBar() {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId);
      }
      isShowXBarRef.value = true;
    }
    function showYBar() {
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId);
      }
      isShowYBarRef.value = true;
    }
    function handleScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) onScroll(e);
      syncScrollState();
    }
    function syncScrollState() {
      // only collect scroll state, do not trigger any dom event
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
      }
    }
    function syncPositionState() {
      // only collect position state, do not trigger any dom event
      // Don't use getClientBoundingRect because element may be scale transformed
      const {
        value: content
      } = mergedContentRef;
      if (content) {
        contentHeightRef.value = content.offsetHeight;
        contentWidthRef.value = content.offsetWidth;
      }
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
      }
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    /**
     * Sometimes there's only one element that we can scroll,
     * For example for textarea, there won't be a content element.
     */
    function syncUnifiedContainer() {
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        containerScrollTopRef.value = container.scrollTop;
        containerScrollLeftRef.value = container.scrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        containerHeightRef.value = container.offsetHeight;
        containerWidthRef.value = container.offsetWidth;
        contentHeightRef.value = container.scrollHeight;
        contentWidthRef.value = container.scrollWidth;
      }
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        xRailSizeRef.value = xRailEl.offsetWidth;
      }
      if (yRailEl) {
        yRailSizeRef.value = yRailEl.offsetHeight;
      }
    }
    function sync() {
      if (!props.scrollable) return;
      if (props.useUnifiedContainer) {
        syncUnifiedContainer();
      } else {
        syncPositionState();
        syncScrollState();
      }
    }
    function isMouseUpAway(e) {
      var _a;
      return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e)));
    }
    function handleXScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      xBarPressed = true;
      on('mousemove', window, handleXScrollMouseMove, true);
      on('mouseup', window, handleXScrollMouseUp, true);
      memoXLeft = containerScrollLeftRef.value;
      memoMouseX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX : e.clientX;
    }
    function handleXScrollMouseMove(e) {
      if (!xBarPressed) return;
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const {
        value: containerWidth
      } = containerWidthRef;
      const {
        value: contentWidth
      } = contentWidthRef;
      const {
        value: xBarSize
      } = xBarSizeRef;
      if (containerWidth === null || contentWidth === null) return;
      const dX = (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? window.innerWidth - e.clientX - memoMouseX : e.clientX - memoMouseX;
      const dScrollLeft = dX * (contentWidth - containerWidth) / (containerWidth - xBarSize);
      const toScrollLeftUpperBound = contentWidth - containerWidth;
      let toScrollLeft = memoXLeft + dScrollLeft;
      toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
      toScrollLeft = Math.max(toScrollLeft, 0);
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        container.scrollLeft = toScrollLeft * ((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? -1 : 1);
        const {
          internalOnUpdateScrollLeft
        } = props;
        if (internalOnUpdateScrollLeft) internalOnUpdateScrollLeft(toScrollLeft);
      }
    }
    function handleXScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off('mousemove', window, handleXScrollMouseMove, true);
      off('mouseup', window, handleXScrollMouseUp, true);
      xBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    function handleYScrollMouseDown(e) {
      e.preventDefault();
      e.stopPropagation();
      yBarPressed = true;
      on('mousemove', window, handleYScrollMouseMove, true);
      on('mouseup', window, handleYScrollMouseUp, true);
      memoYTop = containerScrollTopRef.value;
      memoMouseY = e.clientY;
    }
    function handleYScrollMouseMove(e) {
      if (!yBarPressed) return;
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId);
      }
      const {
        value: containerHeight
      } = containerHeightRef;
      const {
        value: contentHeight
      } = contentHeightRef;
      const {
        value: yBarSize
      } = yBarSizeRef;
      if (containerHeight === null || contentHeight === null) return;
      const dY = e.clientY - memoMouseY;
      const dScrollTop = dY * (contentHeight - containerHeight) / (containerHeight - yBarSize);
      const toScrollTopUpperBound = contentHeight - containerHeight;
      let toScrollTop = memoYTop + dScrollTop;
      toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
      toScrollTop = Math.max(toScrollTop, 0);
      const {
        value: container
      } = mergedContainerRef;
      if (container) {
        container.scrollTop = toScrollTop;
      }
    }
    function handleYScrollMouseUp(e) {
      e.preventDefault();
      e.stopPropagation();
      off('mousemove', window, handleYScrollMouseMove, true);
      off('mouseup', window, handleYScrollMouseUp, true);
      yBarPressed = false;
      sync();
      if (isMouseUpAway(e)) {
        hideBar();
      }
    }
    watchEffect(() => {
      const {
        value: needXBar
      } = needXBarRef;
      const {
        value: needYBar
      } = needYBarRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const {
        value: xRailEl
      } = xRailRef;
      const {
        value: yRailEl
      } = yRailRef;
      if (xRailEl) {
        if (!needXBar) {
          xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
      if (yRailEl) {
        if (!needYBar) {
          yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        } else {
          yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
        }
      }
    });
    onMounted(() => {
      // if container exist, it always can't be resolved when scrollbar is mounted
      // for example:
      // - component
      //   - scrollbar
      //     - inner
      // if you pass inner to scrollbar, you may use a ref inside component
      // however, when scrollbar is mounted, ref is not ready at component
      // you need to init by yourself
      if (props.container) return;
      sync();
    });
    onBeforeUnmount(() => {
      if (xBarVanishTimerId !== undefined) {
        window.clearTimeout(xBarVanishTimerId);
      }
      if (yBarVanishTimerId !== undefined) {
        window.clearTimeout(yBarVanishTimerId);
      }
      off('mousemove', window, handleYScrollMouseMove, true);
      off('mouseup', window, handleYScrollMouseUp, true);
    });
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          colorHover,
          height,
          width,
          borderRadius,
          railInsetHorizontalTop,
          railInsetHorizontalBottom,
          railInsetVerticalRight,
          railInsetVerticalLeft,
          railColor
        }
      } = themeRef.value;
      const {
        top: railTopHorizontalTop,
        right: railRightHorizontalTop,
        bottom: railBottomHorizontalTop,
        left: railLeftHorizontalTop
      } = getMargin(railInsetHorizontalTop);
      const {
        top: railTopHorizontalBottom,
        right: railRightHorizontalBottom,
        bottom: railBottomHorizontalBottom,
        left: railLeftHorizontalBottom
      } = getMargin(railInsetHorizontalBottom);
      const {
        top: railTopVerticalRight,
        right: railRightVerticalRight,
        bottom: railBottomVerticalRight,
        left: railLeftVerticalRight
      } = getMargin((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalRight) : railInsetVerticalRight);
      const {
        top: railTopVerticalLeft,
        right: railRightVerticalLeft,
        bottom: railBottomVerticalLeft,
        left: railLeftVerticalLeft
      } = getMargin((rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? rtlInset(railInsetVerticalLeft) : railInsetVerticalLeft);
      return {
        '--n-scrollbar-bezier': cubicBezierEaseInOut,
        '--n-scrollbar-color': color,
        '--n-scrollbar-color-hover': colorHover,
        '--n-scrollbar-border-radius': borderRadius,
        '--n-scrollbar-width': width,
        '--n-scrollbar-height': height,
        '--n-scrollbar-rail-top-horizontal-top': railTopHorizontalTop,
        '--n-scrollbar-rail-right-horizontal-top': railRightHorizontalTop,
        '--n-scrollbar-rail-bottom-horizontal-top': railBottomHorizontalTop,
        '--n-scrollbar-rail-left-horizontal-top': railLeftHorizontalTop,
        '--n-scrollbar-rail-top-horizontal-bottom': railTopHorizontalBottom,
        '--n-scrollbar-rail-right-horizontal-bottom': railRightHorizontalBottom,
        '--n-scrollbar-rail-bottom-horizontal-bottom': railBottomHorizontalBottom,
        '--n-scrollbar-rail-left-horizontal-bottom': railLeftHorizontalBottom,
        '--n-scrollbar-rail-top-vertical-right': railTopVerticalRight,
        '--n-scrollbar-rail-right-vertical-right': railRightVerticalRight,
        '--n-scrollbar-rail-bottom-vertical-right': railBottomVerticalRight,
        '--n-scrollbar-rail-left-vertical-right': railLeftVerticalRight,
        '--n-scrollbar-rail-top-vertical-left': railTopVerticalLeft,
        '--n-scrollbar-rail-right-vertical-left': railRightVerticalLeft,
        '--n-scrollbar-rail-bottom-vertical-left': railBottomVerticalLeft,
        '--n-scrollbar-rail-left-vertical-left': railLeftVerticalLeft,
        '--n-scrollbar-rail-color': railColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('scrollbar', undefined, cssVarsRef, props) : undefined;
    const exposedMethods = {
      scrollTo,
      scrollBy,
      sync,
      syncUnifiedContainer,
      handleMouseEnterWrapper,
      handleMouseLeaveWrapper
    };
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      containerScrollTop: containerScrollTopRef,
      wrapperRef,
      containerRef,
      contentRef,
      yRailRef,
      xRailRef,
      needYBar: needYBarRef,
      needXBar: needXBarRef,
      yBarSizePx: yBarSizePxRef,
      xBarSizePx: xBarSizePxRef,
      yBarTopPx: yBarTopPxRef,
      xBarLeftPx: xBarLeftPxRef,
      isShowXBar: mergedShowXBarRef,
      isShowYBar: mergedShowYBarRef,
      isIos,
      handleScroll,
      handleContentResize,
      handleContainerResize,
      handleYScrollMouseDown,
      handleXScrollMouseDown,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      $slots,
      mergedClsPrefix,
      triggerDisplayManually,
      rtlEnabled,
      internalHoistYRail,
      yPlacement,
      xPlacement,
      xScrollable
    } = this;
    if (!this.scrollable) return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    const triggerIsNone = this.trigger === 'none';
    const createYRail = (className, style) => {
      return h("div", {
        ref: "yRailRef",
        class: [`${mergedClsPrefix}-scrollbar-rail`, `${mergedClsPrefix}-scrollbar-rail--vertical`, `${mergedClsPrefix}-scrollbar-rail--vertical--${yPlacement}`, className],
        "data-scrollbar-rail": true,
        style: [style || '', this.verticalRailStyle],
        "aria-hidden": true
      }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : {
        name: 'fade-in-transition'
      }, {
        default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", {
          class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
          style: {
            height: this.yBarSizePx,
            top: this.yBarTopPx
          },
          onMousedown: this.handleYScrollMouseDown
        }) : null
      }));
    };
    const createChildren = () => {
      var _a, _b;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      return h('div', mergeProps(this.$attrs, {
        role: 'none',
        ref: 'wrapperRef',
        class: [`${mergedClsPrefix}-scrollbar`, this.themeClass, rtlEnabled && `${mergedClsPrefix}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: triggerDisplayManually ? undefined : this.handleMouseEnterWrapper,
        onMouseleave: triggerDisplayManually ? undefined : this.handleMouseLeaveWrapper
      }), [this.container ? (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots) : h("div", {
        role: "none",
        ref: "containerRef",
        class: [`${mergedClsPrefix}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, h(VResizeObserver, {
        onResize: this.handleContentResize
      }, {
        default: () => h("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? 'fit-content' : null
          }, this.contentStyle],
          class: [`${mergedClsPrefix}-scrollbar-content`, this.contentClass]
        }, $slots)
      })), internalHoistYRail ? null : createYRail(undefined, undefined), xScrollable && h("div", {
        ref: "xRailRef",
        class: [`${mergedClsPrefix}-scrollbar-rail`, `${mergedClsPrefix}-scrollbar-rail--horizontal`, `${mergedClsPrefix}-scrollbar-rail--horizontal--${xPlacement}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": true,
        "aria-hidden": true
      }, h(triggerIsNone ? Wrapper : Transition, triggerIsNone ? null : {
        name: 'fade-in-transition'
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", {
          class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: rtlEnabled ? this.xBarLeftPx : undefined,
            left: rtlEnabled ? undefined : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    };
    const scrollbarNode = this.container ? createChildren() : h(VResizeObserver, {
      onResize: this.handleContainerResize
    }, {
      default: createChildren
    });
    if (internalHoistYRail) {
      return h(Fragment, null, scrollbarNode, createYRail(this.themeClass, this.cssVars));
    } else {
      return scrollbarNode;
    }
  }
});
const XScrollbar = Scrollbar;

export { Scrollbar, VResizeObserver, Wrapper, XScrollbar, createId, depx, fadeInTransition, flatten, getGap, getMargin, getPreciseEventTarget, indexMap, pxfy, repeat, resizeObserverManager, scrollbarLight, self, useReactivated };
//# sourceMappingURL=Scrollbar.COIrvx-21767105581793.js.map
