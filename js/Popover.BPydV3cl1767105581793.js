import { Stack, baseIsEqual, isObject, keys, isKey, toKey, get, hasIn, baseGet, identity, isArray, isArrayLike, arrayMap, importShared } from './index.BxB45aCK1767105581793.js';
import { isBrowser, modalBodyInjectionKey, drawerBodyInjectionKey, popoverBodyInjectionKey, getSlot, getFirstVNode, LazyTeleport, zindexable, clickoutside, FocusTrap, getFirstSlotVNode, keep } from './keep.JgtZum5h1767105581793.js';
import { baseFor, createInjectionKey, CssRender, useSsrAdapter, createTheme, derived, c as c$1, cB, cNotM, cE, cM, cCB, useConfig, useTheme, useThemeClass, isSlotEmpty, resolveWrappedSlot, call } from './light.CLUJsvFB1767105581793.js';
import { useMemo, isMounted, useRtl } from './use-rtl.Dso2-paz1767105581793.js';
import { on, off, useMergedState } from './use-merged-state.tu3_gbk31767105581793.js';
import { formatLength } from './format-length.BfWHZVRc1767105581793.js';
import { scrollbarLight, getPreciseEventTarget, XScrollbar } from './Scrollbar.COIrvx-21767105581793.js';
import { useCompitable } from './use-compitable.CyXVIY_Z1767105581793.js';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      var result; 
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = -1,
        iterable = Object(collection);

    while ((++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}

let onceCbs = [];
const paramsMap = new WeakMap();
function flushOnceCallbacks() {
    onceCbs.forEach((cb) => cb(...paramsMap.get(cb)));
    onceCbs = [];
}
function beforeNextFrameOnce(cb, ...params) {
    paramsMap.set(cb, params);
    if (onceCbs.includes(cb))
        return;
    onceCbs.push(cb) === 1 && requestAnimationFrame(flushOnceCallbacks);
}

const {onMounted: onMounted$2,onBeforeUnmount: onBeforeUnmount$4} = await importShared('vue');
let fontsReady;
let isFontReady;
const init = () => {
    var _a, _b;
    fontsReady = isBrowser ? (_b = (_a = document) === null || _a === void 0 ? void 0 : _a.fonts) === null || _b === void 0 ? void 0 : _b.ready : undefined;
    isFontReady = false;
    /* istanbul ignore if */
    if (fontsReady !== undefined) {
        void fontsReady.then(() => {
            isFontReady = true;
        });
    }
    else {
        isFontReady = true;
    }
};
init();
/**
 * Call callback on fontsReady is resolved. If fontsReady is already resolved,
 * callback won't be called.
 */
function onFontsReady(cb) {
    /* istanbul ignore next */
    if (isFontReady)
        return;
    let deactivated = false;
    onMounted$2(() => {
        /* istanbul ignore next */
        if (!isFontReady) {
            fontsReady === null || fontsReady === void 0 ? void 0 : fontsReady.then(() => {
                if (deactivated)
                    return;
                cb();
            });
        }
    });
    onBeforeUnmount$4(() => {
        deactivated = true;
    });
}

const internalSelectionMenuInjectionKey = createInjectionKey('n-internal-select-menu');
const internalSelectionMenuBodyInjectionKey = createInjectionKey('n-internal-select-menu-body');

const {inject: inject$4,onBeforeUnmount: onBeforeUnmount$3,onMounted: onMounted$1,ref: ref$4} = await importShared('vue');
const teleportDisabled = '__disabled__';
function useAdjustedTo(props) {
  const modal = inject$4(modalBodyInjectionKey, null);
  const drawer = inject$4(drawerBodyInjectionKey, null);
  const popover = inject$4(popoverBodyInjectionKey, null);
  const selectMenu = inject$4(internalSelectionMenuBodyInjectionKey, null);
  const fullscreenElementRef = ref$4();
  if (typeof document !== 'undefined') {
    fullscreenElementRef.value = document.fullscreenElement;
    const handleFullscreenChange = () => {
      fullscreenElementRef.value = document.fullscreenElement;
    };
    onMounted$1(() => {
      on('fullscreenchange', document, handleFullscreenChange);
    });
    onBeforeUnmount$3(() => {
      off('fullscreenchange', document, handleFullscreenChange);
    });
  }
  return useMemo(() => {
    var _a;
    const {
      to
    } = props;
    if (to !== undefined) {
      if (to === false) return teleportDisabled;
      if (to === true) return fullscreenElementRef.value || 'body';
      return to;
    }
    if (modal === null || modal === void 0 ? void 0 : modal.value) {
      return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
    }
    if (drawer === null || drawer === void 0 ? void 0 : drawer.value) return drawer.value;
    if (popover === null || popover === void 0 ? void 0 : popover.value) return popover.value;
    if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value) return selectMenu.value;
    return to !== null && to !== void 0 ? to : fullscreenElementRef.value || 'body';
  });
}
// teleport disabled key
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
  type: [String, Object, Boolean],
  default: undefined
};

let viewMeasurer = null;
function ensureViewBoundingRect() {
    if (viewMeasurer === null) {
        viewMeasurer = document.getElementById('v-binder-view-measurer');
        if (viewMeasurer === null) {
            viewMeasurer = document.createElement('div');
            viewMeasurer.id = 'v-binder-view-measurer';
            const { style } = viewMeasurer;
            style.position = 'fixed';
            style.left = '0';
            style.right = '0';
            style.top = '0';
            style.bottom = '0';
            style.pointerEvents = 'none';
            style.visibility = 'hidden';
            document.body.appendChild(viewMeasurer);
        }
    }
    return viewMeasurer.getBoundingClientRect();
}
function getPointRect(x, y) {
    const viewRect = ensureViewBoundingRect();
    return {
        top: y,
        left: x,
        height: 0,
        width: 0,
        right: viewRect.width - x,
        bottom: viewRect.height - y
    };
}
function getRect(el) {
    const elRect = el.getBoundingClientRect();
    const viewRect = ensureViewBoundingRect();
    return {
        left: elRect.left - viewRect.left,
        top: elRect.top - viewRect.top,
        bottom: viewRect.height + viewRect.top - elRect.bottom,
        right: viewRect.width + viewRect.left - elRect.right,
        width: elRect.width,
        height: elRect.height
    };
}
function getParentNode(node) {
    // document type
    if (node.nodeType === 9) {
        return null;
    }
    return node.parentNode;
}
function getScrollParent(node) {
    if (node === null)
        return null;
    const parentNode = getParentNode(node);
    if (parentNode === null) {
        return null;
    }
    // Document
    if (parentNode.nodeType === 9) {
        return document;
    }
    // Element
    if (parentNode.nodeType === 1) {
        // Firefox want us to check `-x` and `-y` variations as well
        const { overflow, overflowX, overflowY } = getComputedStyle(parentNode);
        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
            return parentNode;
        }
    }
    return getScrollParent(parentNode);
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const {defineComponent: defineComponent$4,provide: provide$2,ref: ref$3,inject: inject$3,getCurrentInstance,onBeforeUnmount: onBeforeUnmount$2} = await importShared('vue');
const Binder = defineComponent$4({
    name: 'Binder',
    props: {
        syncTargetWithParent: Boolean,
        syncTarget: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        var _a;
        provide$2('VBinder', (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
        const VBinder = inject$3('VBinder', null);
        const targetRef = ref$3(null);
        /**
         * If there's no nested vbinder, we can simply set the target ref.
         *
         * However, when it comes to:
         * <VBinder> <- syncTarget = false
         *
         *              Should hold target DOM ref, but can't get it directly from
         *              its VTarget. So if there are nested VBinder, we should:
         *              1. Stop setting target DOM from level-1 VTarget
         *              2. Set target DOM from level-2 VTarget
         *              For (1), we need `syncTarget` to `false`
         *              For (2), we need to set `syncTargetWithParent` to `true` on
         *              level-2 VBinder
         *   <VTarget>
         *     <VBinder> <- syncTargetWithParent = true
         *       <VTarget>target</VTarget>
         *     </VBinder>
         *     <VFollower>
         *       content1
         *     </VFollower>
         *   </VTarget>
         *   <VFollower>
         *     content2
         *   </VFollower>
         * </VBinder>
         */
        const setTargetRef = (el) => {
            targetRef.value = el;
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (VBinder && props.syncTargetWithParent) {
                VBinder.setTargetRef(el);
            }
        };
        // scroll related
        let scrollableNodes = [];
        const ensureScrollListener = () => {
            let cursor = targetRef.value;
            while (true) {
                cursor = getScrollParent(cursor);
                if (cursor === null)
                    break;
                scrollableNodes.push(cursor);
            }
            for (const el of scrollableNodes) {
                on('scroll', el, onScroll, true);
            }
        };
        const removeScrollListeners = () => {
            for (const el of scrollableNodes) {
                off('scroll', el, onScroll, true);
            }
            scrollableNodes = [];
        };
        const followerScrollListeners = new Set();
        const addScrollListener = (listener) => {
            if (followerScrollListeners.size === 0) {
                ensureScrollListener();
            }
            if (!followerScrollListeners.has(listener)) {
                followerScrollListeners.add(listener);
            }
        };
        const removeScrollListener = (listener) => {
            if (followerScrollListeners.has(listener)) {
                followerScrollListeners.delete(listener);
            }
            if (followerScrollListeners.size === 0) {
                removeScrollListeners();
            }
        };
        const onScroll = () => {
            beforeNextFrameOnce(onScrollRaf);
        };
        const onScrollRaf = () => {
            followerScrollListeners.forEach((listener) => listener());
        };
        // resize related
        const followerResizeListeners = new Set();
        const addResizeListener = (listener) => {
            if (followerResizeListeners.size === 0) {
                on('resize', window, onResize);
            }
            if (!followerResizeListeners.has(listener)) {
                followerResizeListeners.add(listener);
            }
        };
        const removeResizeListener = (listener) => {
            if (followerResizeListeners.has(listener)) {
                followerResizeListeners.delete(listener);
            }
            if (followerResizeListeners.size === 0) {
                off('resize', window, onResize);
            }
        };
        const onResize = () => {
            followerResizeListeners.forEach((listener) => listener());
        };
        onBeforeUnmount$2(() => {
            off('resize', window, onResize);
            removeScrollListeners();
        });
        return {
            targetRef,
            setTargetRef,
            addScrollListener,
            removeScrollListener,
            addResizeListener,
            removeResizeListener
        };
    },
    render() {
        return getSlot('binder', this.$slots);
    }
});

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const {defineComponent: defineComponent$3,inject: inject$2,withDirectives: withDirectives$3} = await importShared('vue');
const VTarget = defineComponent$3({
    name: 'Target',
    setup() {
        const { setTargetRef, syncTarget } = inject$2('VBinder');
        const setTargetDirective = {
            mounted: setTargetRef,
            updated: setTargetRef
        };
        return {
            syncTarget,
            setTargetDirective
        };
    },
    render() {
        const { syncTarget, setTargetDirective } = this;
        /**
         * If you are using VBinder as a child of VBinder, the children wouldn't be
         * a valid DOM or component that can be attached to by directive.
         * So we won't sync target on those kind of situation and control the
         * target sync logic manually.
         */
        if (syncTarget) {
            return withDirectives$3(getFirstVNode('follower', this.$slots), [
                [setTargetDirective]
            ]);
        }
        return getFirstVNode('follower', this.$slots);
    }
});

const ctxKey = '@@mmoContext';
const mousemoveoutside = {
    mounted(el, { value }) {
        el[ctxKey] = {
            handler: undefined
        };
        if (typeof value === 'function') {
            el[ctxKey].handler = value;
            on('mousemoveoutside', el, value);
        }
    },
    updated(el, { value }) {
        const ctx = el[ctxKey];
        if (typeof value === 'function') {
            if (ctx.handler) {
                if (ctx.handler !== value) {
                    off('mousemoveoutside', el, ctx.handler);
                    ctx.handler = value;
                    on('mousemoveoutside', el, value);
                }
            }
            else {
                el[ctxKey].handler = value;
                on('mousemoveoutside', el, value);
            }
        }
        else {
            if (ctx.handler) {
                off('mousemoveoutside', el, ctx.handler);
                ctx.handler = undefined;
            }
        }
    },
    unmounted(el) {
        const { handler } = el[ctxKey];
        if (handler) {
            off('mousemoveoutside', el, handler);
        }
        el[ctxKey].handler = undefined;
    }
};

const { c } = CssRender();
const cssrAnchorMetaName = 'vueuc-style';

const oppositionPositions = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left'
};
const oppositeAligns = {
    start: 'end',
    center: 'center',
    end: 'start'
};
const propToCompare = {
    top: 'height',
    bottom: 'height',
    left: 'width',
    right: 'width'
};
const transformOrigins = {
    'bottom-start': 'top left',
    bottom: 'top center',
    'bottom-end': 'top right',
    'top-start': 'bottom left',
    top: 'bottom center',
    'top-end': 'bottom right',
    'right-start': 'top left',
    right: 'center left',
    'right-end': 'bottom left',
    'left-start': 'top right',
    left: 'center right',
    'left-end': 'bottom right'
};
const overlapTransformOrigin = {
    'bottom-start': 'bottom left',
    bottom: 'bottom center',
    'bottom-end': 'bottom right',
    'top-start': 'top left',
    top: 'top center',
    'top-end': 'top right',
    'right-start': 'top right',
    right: 'center right',
    'right-end': 'bottom right',
    'left-start': 'top left',
    left: 'center left',
    'left-end': 'bottom left'
};
const oppositeAlignCssPositionProps = {
    'bottom-start': 'right',
    'bottom-end': 'left',
    'top-start': 'right',
    'top-end': 'left',
    'right-start': 'bottom',
    'right-end': 'top',
    'left-start': 'bottom',
    'left-end': 'top'
};
const keepOffsetDirection = {
    top: true, // top++
    bottom: false, // top--
    left: true, // left++
    right: false // left--
};
const cssPositionToOppositeAlign = {
    top: 'end',
    bottom: 'start',
    left: 'end',
    right: 'start'
};
function getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, shift, flip, overlap) {
    if (!flip || overlap) {
        return { placement: placement, top: 0, left: 0 };
    }
    const [position, align] = placement.split('-');
    let properAlign = align !== null && align !== void 0 ? align : 'center';
    let properOffset = {
        top: 0,
        left: 0
    };
    const deriveOffset = (oppositeAlignCssSizeProp, alignCssPositionProp, offsetVertically) => {
        let left = 0;
        let top = 0;
        const diff = followerRect[oppositeAlignCssSizeProp] -
            targetRect[alignCssPositionProp] -
            targetRect[oppositeAlignCssSizeProp];
        if (diff > 0 && shift) {
            if (offsetVertically) {
                //       screen border
                // |-----------------------------------------|
                // |                    | f  |               |
                // |                    | o  |               |
                // |                    | l  |               |
                // |                    | l  |----           |
                // |                    | o  |tar |          |
                // |                    | w  |get |          |
                // |                    | e  |    |          |
                // |                    | r  |----           |
                // |                     ----                |
                // |-----------------------------------------|
                top = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
            }
            else {
                //       screen border
                // |----------------------------------------|
                // |                                        |
                // |          ----------                    |
                // |          | target |                    |
                // |       ----------------------------------
                // |       |       follower                 |
                // |       ----------------------------------
                // |                                        |
                // |----------------------------------------|
                left = keepOffsetDirection[alignCssPositionProp] ? diff : -diff;
            }
        }
        return {
            left,
            top
        };
    };
    const offsetVertically = position === 'left' || position === 'right';
    // choose proper placement for non-center align
    if (properAlign !== 'center') {
        const oppositeAlignCssPositionProp = oppositeAlignCssPositionProps[placement];
        const currentAlignCssPositionProp = oppositionPositions[oppositeAlignCssPositionProp];
        const oppositeAlignCssSizeProp = propToCompare[oppositeAlignCssPositionProp];
        // if follower rect is larger than target rect in align direction
        // ----------[ target ]---------|
        // ----------[     follower     ]
        if (followerRect[oppositeAlignCssSizeProp] >
            targetRect[oppositeAlignCssSizeProp]) {
            if (
            // current space is not enough
            // ----------[ target ]---------|
            // -------[     follower        ]
            targetRect[oppositeAlignCssPositionProp] +
                targetRect[oppositeAlignCssSizeProp] <
                followerRect[oppositeAlignCssSizeProp]) {
                const followerOverTargetSize = (followerRect[oppositeAlignCssSizeProp] -
                    targetRect[oppositeAlignCssSizeProp]) /
                    2;
                if (targetRect[oppositeAlignCssPositionProp] < followerOverTargetSize ||
                    targetRect[currentAlignCssPositionProp] < followerOverTargetSize) {
                    // opposite align has larger space
                    // -------[ target ]-----------|
                    // -------[     follower     ]-|
                    if (targetRect[oppositeAlignCssPositionProp] <
                        targetRect[currentAlignCssPositionProp]) {
                        properAlign = oppositeAligns[align];
                        properOffset = deriveOffset(oppositeAlignCssSizeProp, currentAlignCssPositionProp, offsetVertically);
                    }
                    else {
                        // ----------------[ target ]----|
                        // --------[   follower     ]----|
                        properOffset = deriveOffset(oppositeAlignCssSizeProp, oppositeAlignCssPositionProp, offsetVertically);
                    }
                }
                else {
                    // 'center' align is better
                    // ------------[ target ]--------|
                    // -------[       follower    ]--|
                    properAlign = 'center';
                }
            }
        }
        else if (followerRect[oppositeAlignCssSizeProp] <
            targetRect[oppositeAlignCssSizeProp]) {
            // TODO: maybe center is better
            if (targetRect[currentAlignCssPositionProp] < 0 &&
                // opposite align has larger space
                // ------------[   target   ]
                // ----------------[follower]
                targetRect[oppositeAlignCssPositionProp] >
                    targetRect[currentAlignCssPositionProp]) {
                properAlign = oppositeAligns[align];
            }
        }
    }
    else {
        const possibleAlternativeAlignCssPositionProp1 = position === 'bottom' || position === 'top' ? 'left' : 'top';
        const possibleAlternativeAlignCssPositionProp2 = oppositionPositions[possibleAlternativeAlignCssPositionProp1];
        const alternativeAlignCssSizeProp = propToCompare[possibleAlternativeAlignCssPositionProp1];
        const followerOverTargetSize = (followerRect[alternativeAlignCssSizeProp] -
            targetRect[alternativeAlignCssSizeProp]) /
            2;
        if (
        // center is not enough
        // ----------- [ target ]--|
        // -------[     follower     ]
        targetRect[possibleAlternativeAlignCssPositionProp1] <
            followerOverTargetSize ||
            targetRect[possibleAlternativeAlignCssPositionProp2] <
                followerOverTargetSize) {
            // alternative 2 position's space is larger
            if (targetRect[possibleAlternativeAlignCssPositionProp1] >
                targetRect[possibleAlternativeAlignCssPositionProp2]) {
                properAlign =
                    cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp1];
                properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp1, offsetVertically);
            }
            else {
                // alternative 1 position's space is larger
                properAlign =
                    cssPositionToOppositeAlign[possibleAlternativeAlignCssPositionProp2];
                properOffset = deriveOffset(alternativeAlignCssSizeProp, possibleAlternativeAlignCssPositionProp2, offsetVertically);
            }
        }
    }
    let properPosition = position;
    if (
    // space is not enough
    targetRect[position] < followerRect[propToCompare[position]] &&
        // opposite position's space is larger
        targetRect[position] < targetRect[oppositionPositions[position]]) {
        properPosition = oppositionPositions[position];
    }
    return {
        placement: properAlign !== 'center'
            ? `${properPosition}-${properAlign}`
            : properPosition,
        left: properOffset.left,
        top: properOffset.top
    };
}
function getProperTransformOrigin(placement, overlap) {
    if (overlap)
        return overlapTransformOrigin[placement];
    return transformOrigins[placement];
}
// ------------
// |  offset  |
// |          |
// | [target] |
// |          |
// ------------
// TODO: refactor it to remove dup logic
function getOffset(placement, offsetRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap) {
    if (overlap) {
        switch (placement) {
            case 'bottom-start':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
                    transform: 'translateY(-100%)'
                };
            case 'bottom-end':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
                    transform: 'translateX(-100%) translateY(-100%)'
                };
            case 'top-start':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
                    transform: ''
                };
            case 'top-end':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
                    transform: 'translateX(-100%)'
                };
            case 'right-start':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
                    transform: 'translateX(-100%)'
                };
            case 'right-end':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
                    transform: 'translateX(-100%) translateY(-100%)'
                };
            case 'left-start':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
                    transform: ''
                };
            case 'left-end':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
                    transform: 'translateY(-100%)'
                };
            case 'top':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
                    transform: 'translateX(-50%)'
                };
            case 'right':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width)}px`,
                    transform: 'translateX(-100%) translateY(-50%)'
                };
            case 'left':
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height / 2)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
                    transform: 'translateY(-50%)'
                };
            case 'bottom':
            default:
                return {
                    top: `${Math.round(targetRect.top - offsetRect.top + targetRect.height)}px`,
                    left: `${Math.round(targetRect.left - offsetRect.left + targetRect.width / 2)}px`,
                    transform: 'translateX(-50%) translateY(-100%)'
                };
        }
    }
    switch (placement) {
        case 'bottom-start':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
                transform: ''
            };
        case 'bottom-end':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateX(-100%)'
            };
        case 'top-start':
            return {
                top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
                transform: 'translateY(-100%)'
            };
        case 'top-end':
            return {
                top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateX(-100%) translateY(-100%)'
            };
        case 'right-start':
            return {
                top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width +
                    offsetLeftToStandardPlacement)}px`,
                transform: ''
            };
        case 'right-end':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateY(-100%)'
            };
        case 'left-start':
            return {
                top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
                transform: 'translateX(-100%)'
            };
        case 'left-end':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
                transform: 'translateX(-100%) translateY(-100%)'
            };
        case 'top':
            return {
                top: `${Math.round(targetRect.top - offsetRect.top + offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width / 2 +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateY(-100%) translateX(-50%)'
            };
        case 'right':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height / 2 +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateY(-50%)'
            };
        case 'left':
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height / 2 +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left - offsetRect.left + offsetLeftToStandardPlacement)}px`,
                transform: 'translateY(-50%) translateX(-100%)'
            };
        case 'bottom':
        default:
            return {
                top: `${Math.round(targetRect.top -
                    offsetRect.top +
                    targetRect.height +
                    offsetTopToStandardPlacement)}px`,
                left: `${Math.round(targetRect.left -
                    offsetRect.left +
                    targetRect.width / 2 +
                    offsetLeftToStandardPlacement)}px`,
                transform: 'translateX(-50%)'
            };
    }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const {h: h$2,defineComponent: defineComponent$2,inject: inject$1,nextTick,watch: watch$1,toRef: toRef$2,ref: ref$2,onMounted,onBeforeUnmount: onBeforeUnmount$1,withDirectives: withDirectives$2} = await importShared('vue');
const style$1 = c([
    c('.v-binder-follower-container', {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        height: '0',
        pointerEvents: 'none',
        zIndex: 'auto'
    }),
    c('.v-binder-follower-content', {
        position: 'absolute',
        zIndex: 'auto'
    }, [
        c('> *', {
            pointerEvents: 'all'
        })
    ])
]);
const VFollower = defineComponent$2({
    name: 'Follower',
    inheritAttrs: false,
    props: {
        show: Boolean,
        enabled: {
            type: Boolean,
            default: undefined
        },
        placement: {
            type: String,
            default: 'bottom'
        },
        syncTrigger: {
            type: Array,
            default: ['resize', 'scroll']
        },
        to: [String, Object],
        flip: {
            type: Boolean,
            default: true
        },
        internalShift: Boolean,
        x: Number,
        y: Number,
        width: String,
        minWidth: String,
        containerClass: String,
        teleportDisabled: Boolean,
        zindexable: {
            type: Boolean,
            default: true
        },
        zIndex: Number,
        overlap: Boolean
    },
    setup(props) {
        const VBinder = inject$1('VBinder');
        const mergedEnabledRef = useMemo(() => {
            return props.enabled !== undefined ? props.enabled : props.show;
        });
        const followerRef = ref$2(null);
        const offsetContainerRef = ref$2(null);
        const ensureListeners = () => {
            const { syncTrigger } = props;
            if (syncTrigger.includes('scroll')) {
                VBinder.addScrollListener(syncPosition);
            }
            if (syncTrigger.includes('resize')) {
                VBinder.addResizeListener(syncPosition);
            }
        };
        const removeListeners = () => {
            VBinder.removeScrollListener(syncPosition);
            VBinder.removeResizeListener(syncPosition);
        };
        onMounted(() => {
            if (mergedEnabledRef.value) {
                syncPosition();
                ensureListeners();
            }
        });
        const ssrAdapter = useSsrAdapter();
        style$1.mount({
            id: 'vueuc/binder',
            head: true,
            anchorMetaName: cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        onBeforeUnmount$1(() => {
            removeListeners();
        });
        onFontsReady(() => {
            if (mergedEnabledRef.value) {
                syncPosition();
            }
        });
        const syncPosition = () => {
            if (!mergedEnabledRef.value) {
                return;
            }
            const follower = followerRef.value;
            // sometimes watched props change before its dom is ready
            // for example: show=false, x=undefined, y=undefined
            //              show=true,  x=0,         y=0
            // will cause error
            // I may optimize the watch start point later
            if (follower === null)
                return;
            const target = VBinder.targetRef;
            const { x, y, overlap } = props;
            const targetRect = x !== undefined && y !== undefined
                ? getPointRect(x, y)
                : getRect(target);
            follower.style.setProperty('--v-target-width', `${Math.round(targetRect.width)}px`);
            follower.style.setProperty('--v-target-height', `${Math.round(targetRect.height)}px`);
            const { width, minWidth, placement, internalShift, flip } = props;
            follower.setAttribute('v-placement', placement);
            if (overlap) {
                follower.setAttribute('v-overlap', '');
            }
            else {
                follower.removeAttribute('v-overlap');
            }
            const { style } = follower;
            if (width === 'target') {
                style.width = `${targetRect.width}px`;
            }
            else if (width !== undefined) {
                style.width = width;
            }
            else {
                style.width = '';
            }
            if (minWidth === 'target') {
                style.minWidth = `${targetRect.width}px`;
            }
            else if (minWidth !== undefined) {
                style.minWidth = minWidth;
            }
            else {
                style.minWidth = '';
            }
            const followerRect = getRect(follower);
            const offsetContainerRect = getRect(offsetContainerRef.value);
            const { left: offsetLeftToStandardPlacement, top: offsetTopToStandardPlacement, placement: properPlacement } = getPlacementAndOffsetOfFollower(placement, targetRect, followerRect, internalShift, flip, overlap);
            const properTransformOrigin = getProperTransformOrigin(properPlacement, overlap);
            const { left, top, transform } = getOffset(properPlacement, offsetContainerRect, targetRect, offsetTopToStandardPlacement, offsetLeftToStandardPlacement, overlap);
            // we assume that the content size doesn't change after flip,
            // nor we need to make sync logic more complex
            follower.setAttribute('v-placement', properPlacement);
            follower.style.setProperty('--v-offset-left', `${Math.round(offsetLeftToStandardPlacement)}px`);
            follower.style.setProperty('--v-offset-top', `${Math.round(offsetTopToStandardPlacement)}px`);
            follower.style.transform = `translateX(${left}) translateY(${top}) ${transform}`;
            follower.style.setProperty('--v-transform-origin', properTransformOrigin);
            follower.style.transformOrigin = properTransformOrigin;
        };
        watch$1(mergedEnabledRef, (value) => {
            if (value) {
                ensureListeners();
                syncOnNextTick();
            }
            else {
                removeListeners();
            }
        });
        const syncOnNextTick = () => {
            nextTick()
                .then(syncPosition)
                .catch((e) => console.error(e));
        };
        [
            'placement',
            'x',
            'y',
            'internalShift',
            'flip',
            'width',
            'overlap',
            'minWidth'
        ].forEach((prop) => {
            watch$1(toRef$2(props, prop), syncPosition);
        });
        ['teleportDisabled'].forEach((prop) => {
            watch$1(toRef$2(props, prop), syncOnNextTick);
        });
        watch$1(toRef$2(props, 'syncTrigger'), (value) => {
            if (!value.includes('resize')) {
                VBinder.removeResizeListener(syncPosition);
            }
            else {
                VBinder.addResizeListener(syncPosition);
            }
            if (!value.includes('scroll')) {
                VBinder.removeScrollListener(syncPosition);
            }
            else {
                VBinder.addScrollListener(syncPosition);
            }
        });
        const isMountedRef = isMounted();
        const mergedToRef = useMemo(() => {
            const { to } = props;
            if (to !== undefined)
                return to;
            if (isMountedRef.value) {
                // TODO: find proper container
                return undefined;
            }
            return undefined;
        });
        return {
            VBinder,
            mergedEnabled: mergedEnabledRef,
            offsetContainerRef,
            followerRef,
            mergedTo: mergedToRef,
            syncPosition
        };
    },
    render() {
        return h$2(LazyTeleport, {
            show: this.show,
            to: this.mergedTo,
            disabled: this.teleportDisabled
        }, {
            default: () => {
                var _a, _b;
                const vNode = h$2('div', {
                    class: ['v-binder-follower-container', this.containerClass],
                    ref: 'offsetContainerRef'
                }, [
                    h$2('div', {
                        class: 'v-binder-follower-content',
                        ref: 'followerRef'
                    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a))
                ]);
                if (this.zindexable) {
                    return withDirectives$2(vNode, [
                        [
                            zindexable,
                            {
                                enabled: this.mergedEnabled,
                                zIndex: this.zIndex
                            }
                        ]
                    ]);
                }
                return vNode;
            }
        });
    }
});

let _isJsdom;
function isJsdom() {
  if (_isJsdom === undefined) {
    _isJsdom = navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom');
  }
  return _isJsdom;
}

const commonVariables = {
  space: '6px',
  spaceArrow: '10px',
  arrowOffset: '10px',
  arrowOffsetVertical: '10px',
  arrowHeight: '6px',
  padding: '8px 14px'
};

function self(vars) {
  const {
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    fontSize,
    dividerColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    fontSize,
    borderRadius,
    color: popoverColor,
    dividerColor,
    textColor: textColor2,
    boxShadow: boxShadow2
  });
}
const popoverLight = createTheme({
  name: 'Popover',
  common: derived,
  peers: {
    Scrollbar: scrollbarLight
  },
  self
});

const oppositePlacement = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left'
};
const arrowSize = 'var(--n-arrow-height) * 1.414';
// vars:
// --n-bezier
// --n-bezier-ease-in
// --n-bezier-ease-out
// --n-font-size
// --n-text-color
// --n-color
// --n-border-radius
// --n-arrow-height
// --n-arrow-offset
// --n-arrow-offset-vertical
// --n-padding
// --n-space
// --n-space-arrow
// --n-divider-color
const style = c$1([cB('popover', `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [c$1('>', [cB('scrollbar', `
 height: inherit;
 max-height: inherit;
 `)]), cNotM('raw', `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM('scrollable', [cNotM('show-header-or-footer', 'padding: var(--n-padding);')])]), cE('header', `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cE('footer', `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cM('scrollable, show-header-or-footer', [cE('content', `
 padding: var(--n-padding);
 `)])]), cB('popover-shared', `
 transform-origin: inherit;
 `, [cB('popover-arrow-wrapper', `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB('popover-arrow', `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
// body transition
c$1('&.popover-transition-enter-from, &.popover-transition-leave-to', `
 opacity: 0;
 transform: scale(.85);
 `), c$1('&.popover-transition-enter-to, &.popover-transition-leave-from', `
 transform: scale(1);
 opacity: 1;
 `), c$1('&.popover-transition-enter-active', `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), c$1('&.popover-transition-leave-active', `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), placementStyle('top-start', `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset('top-start')} - var(--v-offset-left));
 `), placementStyle('top', `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle('top-end', `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset('top-end')} + var(--v-offset-left));
 `), placementStyle('bottom-start', `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset('bottom-start')} - var(--v-offset-left));
 `), placementStyle('bottom', `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle('bottom-end', `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset('bottom-end')} + var(--v-offset-left));
 `), placementStyle('left-start', `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset('left-start')} - var(--v-offset-top));
 `), placementStyle('left', `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle('left-end', `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset('left-end')} + var(--v-offset-top));
 `), placementStyle('right-start', `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset('right-start')} - var(--v-offset-top));
 `), placementStyle('right', `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle('right-end', `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset('right-end')} + var(--v-offset-top));
 `), ...map({
  top: ['right-start', 'left-start'],
  right: ['top-end', 'bottom-end'],
  bottom: ['right-end', 'left-end'],
  left: ['top-start', 'bottom-start']
}, (placements, direction) => {
  const isVertical = ['right', 'left'].includes(direction);
  const sizeType = isVertical ? 'width' : 'height';
  return placements.map(placement => {
    const isReverse = placement.split('-')[1] === 'end';
    const targetSize = `var(--v-target-${sizeType}, 0px)`;
    const centerOffset = `calc((${targetSize} - ${arrowSize}) / 2)`;
    const offset = getArrowOffset(placement);
    return c$1(`[v-placement="${placement}"] >`, [cB('popover-shared', [cM('center-arrow', [cB('popover-arrow', `${direction}: calc(max(${centerOffset}, ${offset}) ${isReverse ? '+' : '-'} var(--v-offset-${isVertical ? 'left' : 'top'}));`)])])]);
  });
})]);
function getArrowOffset(placement) {
  return ['top', 'bottom'].includes(placement.split('-')[0]) ? 'var(--n-arrow-offset)' : 'var(--n-arrow-offset-vertical)';
}
function placementStyle(placement, arrowStyleLiteral) {
  const position = placement.split('-')[0];
  const sizeStyle = ['top', 'bottom'].includes(position) ? 'height: var(--n-space-arrow);' : 'width: var(--n-space-arrow);';
  return c$1(`[v-placement="${placement}"] >`, [cB('popover-shared', `
 margin-${oppositePlacement[position]}: var(--n-space);
 `, [cM('show-arrow', `
 margin-${oppositePlacement[position]}: var(--n-space-arrow);
 `), cM('overlap', `
 margin: 0;
 `), cCB('popover-arrow-wrapper', `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${position}: 100%;
 ${oppositePlacement[position]}: auto;
 ${sizeStyle}
 `, [cB('popover-arrow', arrowStyleLiteral)])])]);
}

const {computed: computed$1,defineComponent: defineComponent$1,Fragment,h: h$1,inject,mergeProps,onBeforeUnmount,provide: provide$1,ref: ref$1,toRef: toRef$1,Transition,vShow,watch,watchEffect: watchEffect$1,withDirectives: withDirectives$1} = await importShared('vue');
const popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // private
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  // deprecated
  minWidth: Number,
  maxWidth: Number
});
function renderArrow({
  arrowClass,
  arrowStyle,
  arrowWrapperClass,
  arrowWrapperStyle,
  clsPrefix
}) {
  return h$1("div", {
    key: "__popover-arrow__",
    style: arrowWrapperStyle,
    class: [`${clsPrefix}-popover-arrow-wrapper`, arrowWrapperClass]
  }, h$1("div", {
    class: [`${clsPrefix}-popover-arrow`, arrowClass],
    style: arrowStyle
  }));
}
const NPopoverBody = defineComponent$1({
  name: 'PopoverBody',
  inheritAttrs: false,
  props: popoverBodyProps,
  setup(props, {
    slots,
    attrs
  }) {
    const {
      namespaceRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme('Popover', '-popover', style, popoverLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl('Popover', mergedRtlRef, mergedClsPrefixRef);
    const followerRef = ref$1(null);
    const NPopover = inject('NPopover');
    const bodyRef = ref$1(null);
    const followerEnabledRef = ref$1(props.show);
    const displayedRef = ref$1(false);
    watchEffect$1(() => {
      const {
        show
      } = props;
      if (show && !isJsdom() && !props.internalDeactivateImmediately) {
        displayedRef.value = true;
      }
    });
    const directivesRef = computed$1(() => {
      const {
        trigger,
        onClickoutside
      } = props;
      const directives = [];
      const {
        positionManuallyRef: {
          value: positionManually
        }
      } = NPopover;
      if (!positionManually) {
        if (trigger === 'click' && !onClickoutside) {
          directives.push([clickoutside, handleClickOutside, undefined, {
            capture: true
          }]);
        }
        if (trigger === 'hover') {
          directives.push([mousemoveoutside, handleMouseMoveOutside]);
        }
      }
      if (onClickoutside) {
        directives.push([clickoutside, handleClickOutside, undefined, {
          capture: true
        }]);
      }
      if (props.displayDirective === 'show' || props.animated && displayedRef.value) {
        directives.push([vShow, props.show]);
      }
      return directives;
    });
    const cssVarsRef = computed$1(() => {
      const {
        common: {
          cubicBezierEaseInOut,
          cubicBezierEaseIn,
          cubicBezierEaseOut
        },
        self: {
          space,
          spaceArrow,
          padding,
          fontSize,
          textColor,
          dividerColor,
          color,
          boxShadow,
          borderRadius,
          arrowHeight,
          arrowOffset,
          arrowOffsetVertical
        }
      } = themeRef.value;
      return {
        '--n-box-shadow': boxShadow,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-bezier-ease-in': cubicBezierEaseIn,
        '--n-bezier-ease-out': cubicBezierEaseOut,
        '--n-font-size': fontSize,
        '--n-text-color': textColor,
        '--n-color': color,
        '--n-divider-color': dividerColor,
        '--n-border-radius': borderRadius,
        '--n-arrow-height': arrowHeight,
        '--n-arrow-offset': arrowOffset,
        '--n-arrow-offset-vertical': arrowOffsetVertical,
        '--n-padding': padding,
        '--n-space': space,
        '--n-space-arrow': spaceArrow
      };
    });
    const styleRef = computed$1(() => {
      const width = props.width === 'trigger' ? undefined : formatLength(props.width);
      const style = [];
      if (width) {
        style.push({
          width
        });
      }
      const {
        maxWidth,
        minWidth
      } = props;
      if (maxWidth) {
        style.push({
          maxWidth: formatLength(maxWidth)
        });
      }
      if (minWidth) {
        style.push({
          maxWidth: formatLength(minWidth)
        });
      }
      if (!inlineThemeDisabled) {
        style.push(cssVarsRef.value);
      }
      return style;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('popover', undefined, cssVarsRef, props) : undefined;
    NPopover.setBodyInstance({
      syncPosition
    });
    onBeforeUnmount(() => {
      NPopover.setBodyInstance(null);
    });
    watch(toRef$1(props, 'show'), value => {
      // If no animation, no transition component will be applied to the
      // component. So we need to trigger follower manaully.
      if (props.animated) return;
      if (value) {
        followerEnabledRef.value = true;
      } else {
        followerEnabledRef.value = false;
      }
    });
    function syncPosition() {
      var _a;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function handleMouseEnter(e) {
      if (props.trigger === 'hover' && props.keepAliveOnHover && props.show) {
        NPopover.handleMouseEnter(e);
      }
    }
    function handleMouseLeave(e) {
      if (props.trigger === 'hover' && props.keepAliveOnHover) {
        NPopover.handleMouseLeave(e);
      }
    }
    function handleMouseMoveOutside(e) {
      if (props.trigger === 'hover' && !getTriggerElement().contains(getPreciseEventTarget(e))) {
        NPopover.handleMouseMoveOutside(e);
      }
    }
    function handleClickOutside(e) {
      if (props.trigger === 'click' && !getTriggerElement().contains(getPreciseEventTarget(e)) || props.onClickoutside) {
        NPopover.handleClickOutside(e);
      }
    }
    function getTriggerElement() {
      return NPopover.getTriggerElement();
    }
    provide$1(popoverBodyInjectionKey, bodyRef);
    provide$1(drawerBodyInjectionKey, null);
    provide$1(modalBodyInjectionKey, null);
    function renderContentNode() {
      themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender();
      const shouldRenderDom = props.displayDirective === 'show' || props.show || props.animated && displayedRef.value;
      if (!shouldRenderDom) {
        return null;
      }
      let contentNode;
      const renderBody = NPopover.internalRenderBodyRef.value;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      if (!renderBody) {
        const {
          value: extraClass
        } = NPopover.extraClassRef;
        const {
          internalTrapFocus
        } = props;
        const hasHeaderOrFooter = !isSlotEmpty(slots.header) || !isSlotEmpty(slots.footer);
        const renderContentInnerNode = () => {
          var _a, _b;
          const body = hasHeaderOrFooter ? h$1(Fragment, null, resolveWrappedSlot(slots.header, children => {
            return children ? h$1("div", {
              class: [`${mergedClsPrefix}-popover__header`, props.headerClass],
              style: props.headerStyle
            }, children) : null;
          }), resolveWrappedSlot(slots.default, children => {
            return children ? h$1("div", {
              class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
              style: props.contentStyle
            }, slots) : null;
          }), resolveWrappedSlot(slots.footer, children => {
            return children ? h$1("div", {
              class: [`${mergedClsPrefix}-popover__footer`, props.footerClass],
              style: props.footerStyle
            }, children) : null;
          })) : props.scrollable ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : h$1("div", {
            class: [`${mergedClsPrefix}-popover__content`, props.contentClass],
            style: props.contentStyle
          }, slots);
          const maybeScrollableBody = props.scrollable ? h$1(XScrollbar, {
            themeOverrides: themeRef.value.peerOverrides.Scrollbar,
            theme: themeRef.value.peers.Scrollbar,
            contentClass: hasHeaderOrFooter ? undefined : `${mergedClsPrefix}-popover__content ${(_b = props.contentClass) !== null && _b !== void 0 ? _b : ''}`,
            contentStyle: hasHeaderOrFooter ? undefined : props.contentStyle
          }, {
            default: () => body
          }) : body;
          const arrow = props.showArrow ? renderArrow({
            arrowClass: props.arrowClass,
            arrowStyle: props.arrowStyle,
            arrowWrapperClass: props.arrowWrapperClass,
            arrowWrapperStyle: props.arrowWrapperStyle,
            clsPrefix: mergedClsPrefix
          }) : null;
          return [maybeScrollableBody, arrow];
        };
        contentNode = h$1('div', mergeProps({
          class: [`${mergedClsPrefix}-popover`, `${mergedClsPrefix}-popover-shared`, (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value, extraClass.map(v => `${mergedClsPrefix}-${v}`), {
            [`${mergedClsPrefix}-popover--scrollable`]: props.scrollable,
            [`${mergedClsPrefix}-popover--show-header-or-footer`]: hasHeaderOrFooter,
            [`${mergedClsPrefix}-popover--raw`]: props.raw,
            [`${mergedClsPrefix}-popover-shared--overlap`]: props.overlap,
            [`${mergedClsPrefix}-popover-shared--show-arrow`]: props.showArrow,
            [`${mergedClsPrefix}-popover-shared--center-arrow`]: props.arrowPointToCenter
          }],
          ref: bodyRef,
          style: styleRef.value,
          onKeydown: NPopover.handleKeydown,
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        }, attrs), internalTrapFocus ? h$1(FocusTrap, {
          active: props.show,
          autoFocus: true
        }, {
          default: renderContentInnerNode
        }) : renderContentInnerNode());
      } else {
        contentNode = renderBody(
        // The popover class and overlap class must exists, they will be used
        // to place the body & transition animation.
        // Shadow class exists for reuse box-shadow.
        [`${mergedClsPrefix}-popover-shared`, (rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) && `${mergedClsPrefix}-popover--rtl`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value, props.overlap && `${mergedClsPrefix}-popover-shared--overlap`, props.showArrow && `${mergedClsPrefix}-popover-shared--show-arrow`, props.arrowPointToCenter && `${mergedClsPrefix}-popover-shared--center-arrow`], bodyRef, styleRef.value, handleMouseEnter, handleMouseLeave);
      }
      return withDirectives$1(contentNode, directivesRef.value);
    }
    return {
      displayed: displayedRef,
      namespace: namespaceRef,
      isMounted: NPopover.isMountedRef,
      zIndex: NPopover.zIndexRef,
      followerRef,
      adjustedTo: useAdjustedTo(props),
      followerEnabled: followerEnabledRef,
      renderContentNode
    };
  },
  render() {
    return h$1(VFollower, {
      ref: "followerRef",
      zIndex: this.zIndex,
      show: this.show,
      enabled: this.followerEnabled,
      to: this.adjustedTo,
      x: this.x,
      y: this.y,
      flip: this.flip,
      placement: this.placement,
      containerClass: this.namespace,
      overlap: this.overlap,
      width: this.width === 'trigger' ? 'target' : undefined,
      teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
    }, {
      default: () => {
        return this.animated ? h$1(Transition, {
          name: "popover-transition",
          appear: this.isMounted,
          // Don't use watch to enable follower, since the transition may
          // make position sync timing very subtle and buggy.
          onEnter: () => {
            this.followerEnabled = true;
          },
          onAfterLeave: () => {
            var _a;
            (_a = this.internalOnAfterLeave) === null || _a === void 0 ? void 0 : _a.call(this);
            this.followerEnabled = false;
            this.displayed = false;
          }
        }, {
          default: this.renderContentNode
        }) : this.renderContentNode();
      }
    });
  }
});

const {cloneVNode,computed,defineComponent,h,provide,ref,Text,toRef,watchEffect,withDirectives} = await importShared('vue');
const bodyPropKeys = Object.keys(popoverBodyProps);
const triggerEventMap = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function appendEvents(vNode, trigger, events) {
  triggerEventMap[trigger].forEach((eventName) => {
    if (!vNode.props) {
      vNode.props = {};
    } else {
      vNode.props = Object.assign({}, vNode.props);
    }
    const originalHandler = vNode.props[eventName];
    const handler = events[eventName];
    if (!originalHandler) {
      vNode.props[eventName] = handler;
    } else {
      vNode.props[eventName] = (...args) => {
        originalHandler(...args);
        handler(...args);
      };
    }
  });
}
const popoverBaseProps = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  flip: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: true
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  to: useAdjustedTo.propTo,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // events
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  // internal
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  // deprecated
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
};
const popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
});
const NPopover = defineComponent({
  name: "Popover",
  inheritAttrs: false,
  props: popoverProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const isMountedRef = isMounted();
    const binderInstRef = ref(null);
    const controlledShowRef = computed(() => props.show);
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowWithoutDisabledRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const mergedShowConsideringDisabledPropRef = useMemo(() => {
      if (props.disabled) return false;
      return mergedShowWithoutDisabledRef.value;
    });
    const getMergedDisabled = () => {
      if (props.disabled) return true;
      const {
        getDisabled
      } = props;
      if (getDisabled === null || getDisabled === void 0 ? void 0 : getDisabled()) return true;
      return false;
    };
    const getMergedShow = () => {
      if (getMergedDisabled()) return false;
      return mergedShowWithoutDisabledRef.value;
    };
    const compatibleShowArrowRef = useCompitable(props, ["arrow", "showArrow"]);
    const mergedShowArrowRef = computed(() => {
      if (props.overlap) return false;
      return compatibleShowArrowRef.value;
    });
    let bodyInstance = null;
    const showTimerIdRef = ref(null);
    const hideTimerIdRef = ref(null);
    const positionManuallyRef = useMemo(() => {
      return props.x !== void 0 && props.y !== void 0;
    });
    function doUpdateShow(value) {
      const {
        "onUpdate:show": _onUpdateShow,
        onUpdateShow,
        onShow,
        onHide
      } = props;
      uncontrolledShowRef.value = value;
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (value && onShow) {
        call(onShow, true);
      }
      if (value && onHide) {
        call(onHide, false);
      }
    }
    function syncPosition() {
      if (bodyInstance) {
        bodyInstance.syncPosition();
      }
    }
    function clearShowTimer() {
      const {
        value: showTimerId
      } = showTimerIdRef;
      if (showTimerId) {
        window.clearTimeout(showTimerId);
        showTimerIdRef.value = null;
      }
    }
    function clearHideTimer() {
      const {
        value: hideTimerId
      } = hideTimerIdRef;
      if (hideTimerId) {
        window.clearTimeout(hideTimerId);
        hideTimerIdRef.value = null;
      }
    }
    function handleFocus() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (getMergedShow()) return;
        doUpdateShow(true);
      }
    }
    function handleBlur() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "focus" && !mergedDisabled) {
        if (!getMergedShow()) return;
        doUpdateShow(false);
      }
    }
    function handleMouseEnter() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearHideTimer();
        if (showTimerIdRef.value !== null) return;
        if (getMergedShow()) return;
        const delayCallback = () => {
          doUpdateShow(true);
          showTimerIdRef.value = null;
        };
        const {
          delay
        } = props;
        if (delay === 0) {
          delayCallback();
        } else {
          showTimerIdRef.value = window.setTimeout(delayCallback, delay);
        }
      }
    }
    function handleMouseLeave() {
      const mergedDisabled = getMergedDisabled();
      if (props.trigger === "hover" && !mergedDisabled) {
        clearShowTimer();
        if (hideTimerIdRef.value !== null) return;
        if (!getMergedShow()) return;
        const delayedCallback = () => {
          doUpdateShow(false);
          hideTimerIdRef.value = null;
        };
        const {
          duration
        } = props;
        if (duration === 0) {
          delayedCallback();
        } else {
          hideTimerIdRef.value = window.setTimeout(delayedCallback, duration);
        }
      }
    }
    function handleMouseMoveOutside() {
      handleMouseLeave();
    }
    function handleClickOutside(e) {
      var _a;
      if (!getMergedShow()) return;
      if (props.trigger === "click") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
      (_a = props.onClickoutside) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleClick() {
      if (props.trigger === "click" && !getMergedDisabled()) {
        clearShowTimer();
        clearHideTimer();
        const nextShow = !getMergedShow();
        doUpdateShow(nextShow);
      }
    }
    function handleKeydown(e) {
      if (!props.internalTrapFocus) return;
      if (e.key === "Escape") {
        clearShowTimer();
        clearHideTimer();
        doUpdateShow(false);
      }
    }
    function setShow(value) {
      uncontrolledShowRef.value = value;
    }
    function getTriggerElement() {
      var _a;
      return (_a = binderInstRef.value) === null || _a === void 0 ? void 0 : _a.targetRef;
    }
    function setBodyInstance(value) {
      bodyInstance = value;
    }
    provide("NPopover", {
      getTriggerElement,
      handleKeydown,
      handleMouseEnter,
      handleMouseLeave,
      handleClickOutside,
      handleMouseMoveOutside,
      setBodyInstance,
      positionManuallyRef,
      isMountedRef,
      zIndexRef: toRef(props, "zIndex"),
      extraClassRef: toRef(props, "internalExtraClass"),
      internalRenderBodyRef: toRef(props, "internalRenderBody")
    });
    watchEffect(() => {
      if (mergedShowWithoutDisabledRef.value && getMergedDisabled()) {
        doUpdateShow(false);
      }
    });
    const returned = {
      binderInstRef,
      positionManually: positionManuallyRef,
      mergedShowConsideringDisabledProp: mergedShowConsideringDisabledPropRef,
      // if to show popover body
      uncontrolledShow: uncontrolledShowRef,
      mergedShowArrow: mergedShowArrowRef,
      getMergedShow,
      setShow,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleFocus,
      handleBlur,
      syncPosition
    };
    return returned;
  },
  render() {
    var _a;
    const {
      positionManually,
      $slots: slots
    } = this;
    let triggerVNode;
    let popoverInside = false;
    if (!positionManually) {
      triggerVNode = getFirstSlotVNode(slots, "trigger");
      if (triggerVNode) {
        triggerVNode = cloneVNode(triggerVNode);
        triggerVNode = triggerVNode.type === Text ? h("span", [triggerVNode]) : triggerVNode;
        const handlers = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        };
        if ((_a = triggerVNode.type) === null || _a === void 0 ? void 0 : _a.__popover__) {
          popoverInside = true;
          if (!triggerVNode.props) {
            triggerVNode.props = {
              internalSyncTargetWithParent: true,
              internalInheritedEventHandlers: []
            };
          }
          triggerVNode.props.internalSyncTargetWithParent = true;
          if (!triggerVNode.props.internalInheritedEventHandlers) {
            triggerVNode.props.internalInheritedEventHandlers = [handlers];
          } else {
            triggerVNode.props.internalInheritedEventHandlers = [handlers, ...triggerVNode.props.internalInheritedEventHandlers];
          }
        } else {
          const {
            internalInheritedEventHandlers
          } = this;
          const ascendantAndCurrentHandlers = [handlers, ...internalInheritedEventHandlers];
          const mergedHandlers = {
            onBlur: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onBlur(e);
              });
            },
            onFocus: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onFocus(e);
              });
            },
            onClick: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onClick(e);
              });
            },
            onMouseenter: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseenter(e);
              });
            },
            onMouseleave: (e) => {
              ascendantAndCurrentHandlers.forEach((_handlers) => {
                _handlers.onMouseleave(e);
              });
            }
          };
          appendEvents(triggerVNode, internalInheritedEventHandlers ? "nested" : positionManually ? "manual" : this.trigger, mergedHandlers);
        }
      }
    }
    return h(Binder, {
      ref: "binderInstRef",
      syncTarget: !popoverInside,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        void this.mergedShowConsideringDisabledProp;
        const mergedShow = this.getMergedShow();
        return [this.internalTrapFocus && mergedShow ? withDirectives(h("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[zindexable, {
          enabled: mergedShow,
          zIndex: this.zIndex
        }]]) : null, positionManually ? null : h(VTarget, null, {
          default: () => triggerVNode
        }), h(NPopoverBody, keep(this.$props, bodyPropKeys, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: mergedShow
        })), {
          default: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a2);
          },
          header: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).header) === null || _b === void 0 ? void 0 : _b.call(_a2);
          },
          footer: () => {
            var _a2, _b;
            return (_b = (_a2 = this.$slots).footer) === null || _b === void 0 ? void 0 : _b.call(_a2);
          }
        })];
      }
    });
  }
});

export { Binder, NPopover, VFollower, VTarget, baseEach, baseForOwn, baseIteratee, beforeNextFrameOnce, c, cssrAnchorMetaName, internalSelectionMenuBodyInjectionKey, internalSelectionMenuInjectionKey, onFontsReady, popoverBaseProps, popoverLight, popoverProps, renderArrow, self, useAdjustedTo };
//# sourceMappingURL=Popover.BPydV3cl1767105581793.js.map
