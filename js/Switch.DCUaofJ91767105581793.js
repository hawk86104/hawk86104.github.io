import { importShared } from './index.BxB45aCK1767105581793.js';
import { fadeInScaleUpTransition } from './Card.CmCLdudX1767105581793.js';
import { useSsrAdapter, derived, cB, cE, c as c$1, useConfig, useTheme, createKey, useThemeClass, createTheme, cM, cNotM, resolveWrappedSlot, resolveSlot, changeColor, call, insideModal, insidePopover, isSlotEmpty } from './light.CLUJsvFB1767105581793.js';
import { c, cssrAnchorMetaName, beforeNextFrameOnce, internalSelectionMenuInjectionKey, internalSelectionMenuBodyInjectionKey, popoverLight, NPopover, Binder, VTarget, VFollower, useAdjustedTo } from './Popover.BPydV3cl1767105581793.js';
import { VResizeObserver, depx, pxfy, resizeObserverManager, scrollbarLight, Scrollbar, getMargin, Wrapper, getPreciseEventTarget } from './Scrollbar.COIrvx-21767105581793.js';
import { useLocale, render, NBaseSuffix } from './Suffix.BS0_grS71767105581793.js';
import { NTag } from './Tag.C3nlcNZB1767105581793.js';
import { useMemo, useRtl, isMounted } from './use-rtl.Dso2-paz1767105581793.js';
import { NBaseIcon } from './Close.VNV_OzKM1767105581793.js';
import { NBaseLoading, useFormItem, iconSwitchTransition, NIconSwitchTransition } from './Loading.DMQwrvK31767105581793.js';
import { clickoutside } from './keep.JgtZum5h1767105581793.js';
import { useMergedState, on, off } from './use-merged-state.tu3_gbk31767105581793.js';
import { useCompitable } from './use-compitable.CyXVIY_Z1767105581793.js';
import { markEventEffectPerformed } from './index.CUC0aJa51767105581793.js';

function happensIn(e, dataSetPropName) {
    let { target } = e;
    while (target) {
        if (target.dataset) {
            if (target.dataset[dataSetPropName] !== undefined)
                return true;
        }
        target = target.parentElement;
    }
    return false;
}

function lowBit(n) {
    return n & -n;
}
class FinweckTree {
    /**
     * @param l length of the array
     * @param min min value of the array
     */
    constructor(l, min) {
        this.l = l;
        this.min = min;
        const ft = new Array(l + 1);
        for (let i = 0; i < l + 1; ++i) {
            ft[i] = 0;
        }
        this.ft = ft;
    }
    /**
     * Add arr[i] by n, start from 0
     * @param i the index of the element to be added
     * @param n the value to be added
     */
    add(i, n) {
        if (n === 0)
            return;
        const { l, ft } = this;
        i += 1;
        while (i <= l) {
            ft[i] += n;
            i += lowBit(i);
        }
    }
    /**
     * Get the value of index i
     * @param i index
     * @returns value of the index
     */
    get(i) {
        return this.sum(i + 1) - this.sum(i);
    }
    /**
     * Get the sum of first i elements
     * @param i count of head elements to be added
     * @returns the sum of first i elements
     */
    sum(i) {
        if (i === undefined)
            i = this.l;
        if (i <= 0)
            return 0;
        const { ft, min, l } = this;
        if (i > l)
            throw new Error('[FinweckTree.sum]: `i` is larger than length.');
        let ret = i * min;
        while (i > 0) {
            ret += ft[i];
            i -= lowBit(i);
        }
        return ret;
    }
    /**
     * Get the largest count of head elements whose sum are <= threshold
     * @param threshold
     * @returns the largest count of head elements whose sum are <= threshold
     */
    getBound(threshold) {
        let l = 0;
        let r = this.l;
        while (r > l) {
            const m = Math.floor((l + r) / 2);
            const sumM = this.sum(m);
            if (sumM > threshold) {
                r = m;
                continue;
            }
            else if (sumM < threshold) {
                if (l === m) {
                    if (this.sum(l + 1) <= threshold)
                        return l + 1;
                    return m;
                }
                l = m;
            }
            else {
                return m;
            }
        }
        return l;
    }
}

let maybeTouch;
function ensureMaybeTouch() {
    if (typeof document === 'undefined')
        return false;
    if (maybeTouch === undefined) {
        if ('matchMedia' in window) {
            maybeTouch = window.matchMedia('(pointer:coarse)').matches;
        }
        else {
            maybeTouch = false;
        }
    }
    return maybeTouch;
}
let wheelScale;
function ensureWheelScale() {
    if (typeof document === 'undefined')
        return 1;
    if (wheelScale === undefined) {
        wheelScale = 'chrome' in window ? window.devicePixelRatio : 1;
    }
    return wheelScale;
}

const xScrollInjextionKey = 'VVirtualListXScroll';

const {computed: computed$7,provide: provide$1,ref: ref$7} = await importShared('vue');
function setupXScroll({ columnsRef, renderColRef, renderItemWithColsRef }) {
    const listWidthRef = ref$7(0);
    const scrollLeftRef = ref$7(0);
    const xFinweckTreeRef = computed$7(() => {
        const columns = columnsRef.value;
        if (columns.length === 0) {
            return null;
        }
        const ft = new FinweckTree(columns.length, 0);
        columns.forEach((column, index) => {
            ft.add(index, column.width);
        });
        return ft;
    });
    const startIndexRef = useMemo(() => {
        const xFinweckTree = xFinweckTreeRef.value;
        if (xFinweckTree !== null) {
            return Math.max(xFinweckTree.getBound(scrollLeftRef.value) - 1, 0);
        }
        else {
            return 0;
        }
    });
    const getLeft = (index) => {
        const xFinweckTree = xFinweckTreeRef.value;
        if (xFinweckTree !== null) {
            return xFinweckTree.sum(index);
        }
        else {
            return 0;
        }
    };
    const endIndexRef = useMemo(() => {
        const xFinweckTree = xFinweckTreeRef.value;
        if (xFinweckTree !== null) {
            return Math.min(xFinweckTree.getBound(scrollLeftRef.value + listWidthRef.value) + 1, columnsRef.value.length - 1);
        }
        else {
            return 0;
        }
    });
    provide$1(xScrollInjextionKey, {
        startIndexRef,
        endIndexRef,
        columnsRef,
        renderColRef,
        renderItemWithColsRef,
        getLeft
    });
    return {
        listWidthRef,
        scrollLeftRef
    };
}

const {defineComponent: defineComponent$d,inject: inject$2} = await importShared('vue');
const VirtualListRow = defineComponent$d({
    name: 'VirtualListRow',
    props: {
        index: { type: Number, required: true },
        item: {
            type: Object,
            required: true
        }
    },
    setup() {
        const { startIndexRef, endIndexRef, columnsRef, getLeft, renderColRef, renderItemWithColsRef } = 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        inject$2(xScrollInjextionKey);
        return {
            startIndex: startIndexRef,
            endIndex: endIndexRef,
            columns: columnsRef,
            renderCol: renderColRef,
            renderItemWithCols: renderItemWithColsRef,
            getLeft
        };
    },
    render() {
        const { startIndex, endIndex, columns, renderCol, renderItemWithCols, getLeft, item } = this;
        if (renderItemWithCols != null) {
            return renderItemWithCols({
                itemIndex: this.index,
                startColIndex: startIndex,
                endColIndex: endIndex,
                allColumns: columns,
                item,
                getLeft
            });
        }
        if (renderCol != null) {
            const items = [];
            for (let i = startIndex; i <= endIndex; ++i) {
                const column = columns[i];
                items.push(renderCol({ column, left: getLeft(i), item }));
            }
            return items;
        }
        return null;
    }
});

/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
const {mergeProps,computed: computed$6,defineComponent: defineComponent$c,ref: ref$6,onMounted: onMounted$4,h: h$c,onActivated,onDeactivated,toRef: toRef$5} = await importShared('vue');
const styles = c('.v-vl', {
    maxHeight: 'inherit',
    height: '100%',
    overflow: 'auto',
    minWidth: '1px' // a zero width container won't be scrollable
}, [
    c('&:not(.v-vl--show-scrollbar)', {
        scrollbarWidth: 'none'
    }, [
        c('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', {
            width: 0,
            height: 0,
            display: 'none'
        })
    ])
]);
const VVirtualList = defineComponent$c({
    name: 'VirtualList',
    inheritAttrs: false,
    props: {
        showScrollbar: {
            type: Boolean,
            default: true
        },
        columns: {
            type: Array,
            default: () => []
        },
        renderCol: Function,
        renderItemWithCols: Function,
        items: {
            type: Array,
            default: () => []
        },
        // it is suppose to be the min height
        itemSize: {
            type: Number,
            required: true
        },
        itemResizable: Boolean,
        itemsStyle: [String, Object],
        visibleItemsTag: {
            type: [String, Object],
            default: 'div'
        },
        visibleItemsProps: Object,
        ignoreItemResize: Boolean,
        onScroll: Function,
        onWheel: Function,
        onResize: Function,
        defaultScrollKey: [Number, String],
        defaultScrollIndex: Number,
        keyField: {
            type: String,
            default: 'key'
        },
        // Whether it is a good API?
        // ResizeObserver + footer & header is not enough.
        // Too complex for simple case
        paddingTop: {
            type: [Number, String],
            default: 0
        },
        paddingBottom: {
            type: [Number, String],
            default: 0
        }
    },
    setup(props) {
        const ssrAdapter = useSsrAdapter();
        styles.mount({
            id: 'vueuc/virtual-list',
            head: true,
            anchorMetaName: cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        onMounted$4(() => {
            const { defaultScrollIndex, defaultScrollKey } = props;
            if (defaultScrollIndex !== undefined && defaultScrollIndex !== null) {
                scrollTo({ index: defaultScrollIndex });
            }
            else if (defaultScrollKey !== undefined && defaultScrollKey !== null) {
                scrollTo({ key: defaultScrollKey });
            }
        });
        let isDeactivated = false;
        let activateStateInitialized = false;
        onActivated(() => {
            isDeactivated = false;
            if (!activateStateInitialized) {
                activateStateInitialized = true;
                return;
            }
            // remount
            scrollTo({ top: scrollTopRef.value, left: scrollLeftRef.value });
        });
        onDeactivated(() => {
            isDeactivated = true;
            if (!activateStateInitialized) {
                activateStateInitialized = true;
            }
        });
        const totalWidthRef = useMemo(() => {
            if (props.renderCol == null && props.renderItemWithCols == null) {
                return undefined;
            }
            if (props.columns.length === 0)
                return undefined;
            let width = 0;
            props.columns.forEach((column) => {
                width += column.width;
            });
            return width;
        });
        const keyIndexMapRef = computed$6(() => {
            const map = new Map();
            const { keyField } = props;
            props.items.forEach((item, index) => {
                map.set(item[keyField], index);
            });
            return map;
        });
        const { scrollLeftRef, listWidthRef } = setupXScroll({
            columnsRef: toRef$5(props, 'columns'),
            renderColRef: toRef$5(props, 'renderCol'),
            renderItemWithColsRef: toRef$5(props, 'renderItemWithCols')
        });
        const listElRef = ref$6(null);
        const listHeightRef = ref$6(undefined);
        const keyToHeightOffset = new Map();
        const finweckTreeRef = computed$6(() => {
            const { items, itemSize, keyField } = props;
            const ft = new FinweckTree(items.length, itemSize);
            items.forEach((item, index) => {
                const key = item[keyField];
                const heightOffset = keyToHeightOffset.get(key);
                if (heightOffset !== undefined) {
                    ft.add(index, heightOffset);
                }
            });
            return ft;
        });
        const finweckTreeUpdateTrigger = ref$6(0);
        const scrollTopRef = ref$6(0);
        const startIndexRef = useMemo(() => {
            return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - depx(props.paddingTop)) - 1, 0);
        });
        const viewportItemsRef = computed$6(() => {
            const { value: listHeight } = listHeightRef;
            if (listHeight === undefined)
                return [];
            const { items, itemSize } = props;
            const startIndex = startIndexRef.value;
            const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
            const viewportItems = [];
            for (let i = startIndex; i <= endIndex; ++i) {
                viewportItems.push(items[i]);
            }
            return viewportItems;
        });
        const scrollTo = (options, y) => {
            if (typeof options === 'number') {
                scrollToPosition(options, y, 'auto');
                return;
            }
            const { left, top, index, key, position, behavior, debounce = true } = options;
            if (left !== undefined || top !== undefined) {
                scrollToPosition(left, top, behavior);
            }
            else if (index !== undefined) {
                scrollToIndex(index, behavior, debounce);
            }
            else if (key !== undefined) {
                const toIndex = keyIndexMapRef.value.get(key);
                if (toIndex !== undefined)
                    scrollToIndex(toIndex, behavior, debounce);
            }
            else if (position === 'bottom') {
                scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
            }
            else if (position === 'top') {
                scrollToPosition(0, 0, behavior);
            }
        };
        let anchorIndex;
        let anchorTimerId = null;
        function scrollToIndex(index, behavior, debounce) {
            const { value: ft } = finweckTreeRef;
            const targetTop = ft.sum(index) + depx(props.paddingTop);
            if (!debounce) {
                listElRef.value.scrollTo({
                    left: 0,
                    top: targetTop,
                    behavior
                });
            }
            else {
                anchorIndex = index;
                if (anchorTimerId !== null) {
                    window.clearTimeout(anchorTimerId);
                }
                anchorTimerId = window.setTimeout(() => {
                    anchorIndex = undefined;
                    anchorTimerId = null;
                }, 16); // use 0 ms may be ealier than resize callback...
                const { scrollTop, offsetHeight } = listElRef.value;
                if (targetTop > scrollTop) {
                    const itemSize = ft.get(index);
                    if (targetTop + itemSize <= scrollTop + offsetHeight) ;
                    else {
                        listElRef.value.scrollTo({
                            left: 0,
                            top: targetTop + itemSize - offsetHeight,
                            behavior
                        });
                    }
                }
                else {
                    listElRef.value.scrollTo({
                        left: 0,
                        top: targetTop,
                        behavior
                    });
                }
            }
        }
        function scrollToPosition(left, top, behavior) {
            listElRef.value.scrollTo({
                left,
                top,
                behavior
            });
        }
        function handleItemResize(key, entry) {
            var _a, _b, _c;
            if (isDeactivated)
                return;
            if (props.ignoreItemResize)
                return;
            if (isHideByVShow(entry.target))
                return;
            const { value: ft } = finweckTreeRef;
            const index = keyIndexMapRef.value.get(key);
            const previousHeight = ft.get(index);
            const height = (_c = (_b = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.blockSize) !== null && _c !== void 0 ? _c : entry.contentRect.height;
            if (height === previousHeight)
                return;
            // height offset based on itemSize
            // used when rebuild the finweck tree
            const offset = height - props.itemSize;
            if (offset === 0) {
                keyToHeightOffset.delete(key);
            }
            else {
                keyToHeightOffset.set(key, height - props.itemSize);
            }
            // delta height based on finweck tree data
            const delta = height - previousHeight;
            if (delta === 0)
                return;
            ft.add(index, delta);
            const listEl = listElRef.value;
            if (listEl != null) {
                if (anchorIndex === undefined) {
                    const previousHeightSum = ft.sum(index);
                    if (listEl.scrollTop > previousHeightSum) {
                        listEl.scrollBy(0, delta);
                    }
                }
                else {
                    if (index < anchorIndex) {
                        listEl.scrollBy(0, delta);
                    }
                    else if (index === anchorIndex) {
                        const previousHeightSum = ft.sum(index);
                        if (height + previousHeightSum >
                            // Note, listEl shouldn't have border, nor offsetHeight won't be
                            // correct
                            listEl.scrollTop + listEl.offsetHeight) {
                            listEl.scrollBy(0, delta);
                        }
                    }
                }
                syncViewport();
            }
            finweckTreeUpdateTrigger.value++;
        }
        const mayUseWheel = !ensureMaybeTouch();
        let wheelCatched = false;
        function handleListScroll(e) {
            var _a;
            (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
            if (!mayUseWheel || !wheelCatched) {
                syncViewport();
            }
        }
        function handleListWheel(e) {
            var _a;
            (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e);
            if (mayUseWheel) {
                const listEl = listElRef.value;
                if (listEl != null) {
                    if (e.deltaX === 0) {
                        if (listEl.scrollTop === 0 && e.deltaY <= 0) {
                            return;
                        }
                        if (listEl.scrollTop + listEl.offsetHeight >= listEl.scrollHeight &&
                            e.deltaY >= 0) {
                            return;
                        }
                    }
                    e.preventDefault();
                    listEl.scrollTop += e.deltaY / ensureWheelScale();
                    listEl.scrollLeft += e.deltaX / ensureWheelScale();
                    syncViewport();
                    wheelCatched = true;
                    beforeNextFrameOnce(() => {
                        wheelCatched = false;
                    });
                }
            }
        }
        function handleListResize(entry) {
            if (isDeactivated)
                return;
            // List is HTMLElement
            if (isHideByVShow(entry.target))
                return;
            // If height is same, return
            if (props.renderCol == null && props.renderItemWithCols == null) {
                if (entry.contentRect.height === listHeightRef.value)
                    return;
            }
            else {
                if (entry.contentRect.height === listHeightRef.value &&
                    entry.contentRect.width === listWidthRef.value) {
                    return;
                }
            }
            listHeightRef.value = entry.contentRect.height;
            listWidthRef.value = entry.contentRect.width;
            const { onResize } = props;
            if (onResize !== undefined)
                onResize(entry);
        }
        function syncViewport() {
            const { value: listEl } = listElRef;
            // sometime ref el can be null
            // https://github.com/TuSimple/naive-ui/issues/811
            if (listEl == null)
                return;
            scrollTopRef.value = listEl.scrollTop;
            scrollLeftRef.value = listEl.scrollLeft;
        }
        function isHideByVShow(el) {
            let cursor = el;
            while (cursor !== null) {
                if (cursor.style.display === 'none')
                    return true;
                cursor = cursor.parentElement;
            }
            return false;
        }
        return {
            listHeight: listHeightRef,
            listStyle: {
                overflow: 'auto'
            },
            keyToIndex: keyIndexMapRef,
            itemsStyle: computed$6(() => {
                const { itemResizable } = props;
                const height = pxfy(finweckTreeRef.value.sum());
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                finweckTreeUpdateTrigger.value;
                return [
                    props.itemsStyle,
                    {
                        boxSizing: 'content-box',
                        width: pxfy(totalWidthRef.value),
                        height: itemResizable ? '' : height,
                        minHeight: itemResizable ? height : '',
                        paddingTop: pxfy(props.paddingTop),
                        paddingBottom: pxfy(props.paddingBottom)
                    }
                ];
            }),
            visibleItemsStyle: computed$6(() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                finweckTreeUpdateTrigger.value;
                return {
                    transform: `translateY(${pxfy(finweckTreeRef.value.sum(startIndexRef.value))})`
                };
            }),
            viewportItems: viewportItemsRef,
            listElRef,
            itemsElRef: ref$6(null),
            scrollTo,
            handleListResize,
            handleListScroll,
            handleListWheel,
            handleItemResize
        };
    },
    render() {
        const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
        return h$c(VResizeObserver, {
            onResize: this.handleListResize
        }, {
            default: () => {
                var _a, _b;
                return h$c('div', mergeProps(this.$attrs, {
                    class: ['v-vl', this.showScrollbar && 'v-vl--show-scrollbar'],
                    onScroll: this.handleListScroll,
                    onWheel: this.handleListWheel,
                    ref: 'listElRef'
                }), [
                    this.items.length !== 0
                        ? h$c('div', {
                            ref: 'itemsElRef',
                            class: 'v-vl-items',
                            style: this.itemsStyle
                        }, [
                            h$c(visibleItemsTag, Object.assign({
                                class: 'v-vl-visible-items',
                                style: this.visibleItemsStyle
                            }, this.visibleItemsProps), {
                                default: () => {
                                    const { renderCol, renderItemWithCols } = this;
                                    return this.viewportItems.map((item) => {
                                        const key = item[keyField];
                                        const index = keyToIndex.get(key);
                                        const renderedCols = renderCol != null
                                            ? h$c(VirtualListRow, {
                                                index,
                                                item
                                            })
                                            : undefined;
                                        const renderedItemWithCols = renderItemWithCols != null
                                            ? h$c(VirtualListRow, {
                                                index,
                                                item
                                            })
                                            : undefined;
                                        const itemVNode = this.$slots.default({
                                            item,
                                            renderedCols,
                                            renderedItemWithCols,
                                            index
                                        })[0];
                                        if (itemResizable) {
                                            return h$c(VResizeObserver, {
                                                key,
                                                onResize: (entry) => this.handleItemResize(key, entry)
                                            }, {
                                                default: () => itemVNode
                                            });
                                        }
                                        itemVNode.key = key;
                                        return itemVNode;
                                    });
                                }
                            })
                        ])
                        : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
                ]);
            }
        });
    }
});

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
const {defineComponent: defineComponent$b,renderSlot,h: h$b,onMounted: onMounted$3,ref: ref$5,nextTick: nextTick$3} = await importShared('vue');
const hiddenAttr = 'v-hidden';
const style$6 = c('[v-hidden]', {
    display: 'none!important'
});
const VOverflow = defineComponent$b({
    name: 'Overflow',
    props: {
        getCounter: Function,
        getTail: Function,
        updateCounter: Function,
        onUpdateCount: Function,
        onUpdateOverflow: Function
    },
    setup(props, { slots }) {
        const selfRef = ref$5(null);
        const counterRef = ref$5(null);
        function deriveCounter(options) {
            const { value: self } = selfRef;
            const { getCounter, getTail } = props;
            let counter;
            if (getCounter !== undefined)
                counter = getCounter();
            else {
                counter = counterRef.value;
            }
            if (!self || !counter)
                return;
            if (counter.hasAttribute(hiddenAttr)) {
                counter.removeAttribute(hiddenAttr);
            }
            const { children } = self;
            if (options.showAllItemsBeforeCalculate) {
                for (const child of children) {
                    if (child.hasAttribute(hiddenAttr)) {
                        child.removeAttribute(hiddenAttr);
                    }
                }
            }
            const containerWidth = self.offsetWidth;
            const childWidths = [];
            const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
            let childWidthSum = tail ? tail.offsetWidth : 0;
            let overflow = false;
            const len = self.children.length - (slots.tail ? 1 : 0);
            for (let i = 0; i < len - 1; ++i) {
                if (i < 0)
                    continue;
                const child = children[i];
                if (overflow) {
                    if (!child.hasAttribute(hiddenAttr)) {
                        child.setAttribute(hiddenAttr, '');
                    }
                    continue;
                }
                else if (child.hasAttribute(hiddenAttr)) {
                    child.removeAttribute(hiddenAttr);
                }
                const childWidth = child.offsetWidth;
                childWidthSum += childWidth;
                childWidths[i] = childWidth;
                if (childWidthSum > containerWidth) {
                    const { updateCounter } = props;
                    for (let j = i; j >= 0; --j) {
                        const restCount = len - 1 - j;
                        if (updateCounter !== undefined) {
                            updateCounter(restCount);
                        }
                        else {
                            counter.textContent = `${restCount}`;
                        }
                        const counterWidth = counter.offsetWidth;
                        childWidthSum -= childWidths[j];
                        if (childWidthSum + counterWidth <= containerWidth || j === 0) {
                            overflow = true;
                            i = j - 1;
                            if (tail) {
                                // tail too long or 1st element too long
                                // we only consider tail now
                                if (i === -1) {
                                    tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                                    tail.style.boxSizing = 'border-box';
                                }
                                else {
                                    tail.style.maxWidth = '';
                                }
                            }
                            const { onUpdateCount } = props;
                            if (onUpdateCount)
                                onUpdateCount(restCount);
                            break;
                        }
                    }
                }
            }
            const { onUpdateOverflow } = props;
            if (!overflow) {
                if (onUpdateOverflow !== undefined) {
                    onUpdateOverflow(false);
                }
                counter.setAttribute(hiddenAttr, '');
            }
            else {
                if (onUpdateOverflow !== undefined) {
                    onUpdateOverflow(true);
                }
            }
        }
        const ssrAdapter = useSsrAdapter();
        style$6.mount({
            id: 'vueuc/overflow',
            head: true,
            anchorMetaName: cssrAnchorMetaName,
            ssr: ssrAdapter
        });
        onMounted$3(() => deriveCounter({
            showAllItemsBeforeCalculate: false
        }));
        // besides onMounted, other case should be manually triggered, or we shoud watch items
        return {
            selfRef,
            counterRef,
            sync: deriveCounter
        };
    },
    render() {
        const { $slots } = this;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        nextTick$3(() => this.sync({
            showAllItemsBeforeCalculate: false
        }));
        // It shouldn't have border
        return h$b('div', {
            class: 'v-overflow',
            ref: 'selfRef'
        }, [
            renderSlot($slots, 'default'),
            // $slots.counter should only has 1 element
            $slots.counter
                ? $slots.counter()
                : h$b('span', {
                    style: {
                        display: 'inline-block'
                    },
                    ref: 'counterRef'
                }),
            // $slots.tail should only has 1 element
            $slots.tail ? $slots.tail() : null
        ]);
    }
});

const {onBeforeUnmount: onBeforeUnmount$2,onMounted: onMounted$2,watch: watch$4} = await importShared('vue');
function useOnResize(elRef, onResize) {
  // it needn't be reactive since it's for internal usage
  if (onResize) {
    onMounted$2(() => {
      const {
        value: el
      } = elRef;
      if (el) {
        resizeObserverManager.registerHandler(el, onResize);
      }
    });
    // avoid memory leak
    watch$4(elRef, (_, oldEl) => {
      if (oldEl) {
        resizeObserverManager.unregisterHandler(oldEl);
      }
    }, {
      deep: false
    });
    onBeforeUnmount$2(() => {
      const {
        value: el
      } = elRef;
      if (el) {
        resizeObserverManager.unregisterHandler(el);
      }
    });
  }
}

function getTitleAttribute(value) {
  switch (typeof value) {
    case 'string':
      // The empty string should also be reset to undefined.
      return value || undefined;
    case 'number':
      return String(value);
    default:
      return undefined;
  }
}

function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter(handler => handler !== undefined);
  if (filteredHandlers.length === 0) return undefined;
  if (filteredHandlers.length === 1) return filteredHandlers[0];
  return e => {
    handlers.forEach(handler => {
      if (handler) {
        handler(e);
      }
    });
  };
}

const {defineComponent: defineComponent$a,h: h$a} = await importShared('vue');

const FinishedIcon = defineComponent$a({
  name: 'Checkmark',
  render() {
    return h$a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, h$a("g", {
      fill: "none"
    }, h$a("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
});

const {defineComponent: defineComponent$9,h: h$9} = await importShared('vue');

const EmptyIcon = defineComponent$9({
  name: 'Empty',
  render() {
    return h$9("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h$9("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), h$9("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
});

const {defineComponent: defineComponent$8,h: h$8} = await importShared('vue');

const FocusDetector = defineComponent$8({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h$8("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    });
  }
});

function toArray(arg) {
    if (Array.isArray(arg))
        return arg;
    return [arg];
}
// Do not use enum for lint plugin has error
const TRAVERSE_COMMAND = {
    STOP: 'STOP'
};
function traverseWithCb(treeNode, callback) {
    const command = callback(treeNode);
    if (treeNode.children !== undefined && command !== TRAVERSE_COMMAND.STOP) {
        treeNode.children.forEach((childNode) => traverseWithCb(childNode, callback));
    }
}
function getNonLeafKeys(treeNodes, options = {}) {
    const { preserveGroup = false } = options;
    const keys = [];
    const cb = preserveGroup
        ? (node) => {
            if (!node.isLeaf) {
                keys.push(node.key);
                traverse(node.children);
            }
        }
        : (node) => {
            if (!node.isLeaf) {
                if (!node.isGroup)
                    keys.push(node.key);
                traverse(node.children);
            }
        };
    function traverse(nodes) {
        nodes.forEach(cb);
    }
    traverse(treeNodes);
    return keys;
}
function isLeaf(rawNode, getChildren) {
    const { isLeaf } = rawNode;
    if (isLeaf !== undefined)
        return isLeaf;
    else if (!getChildren(rawNode))
        return true;
    return false;
}
function defaultGetChildren(node) {
    return node.children;
}
function defaultGetKey(node) {
    return node.key;
}
function isIgnored() {
    return false;
}
function isShallowLoaded(rawNode, getChildren) {
    const { isLeaf } = rawNode;
    if (isLeaf === false && !Array.isArray(getChildren(rawNode)))
        return false;
    return true;
}
function isDisabled(rawNode) {
    return rawNode.disabled === true;
}
function isExpilicitlyNotLoaded(rawNode, getChildren) {
    return (rawNode.isLeaf === false && !Array.isArray(getChildren(rawNode)));
}
function unwrapCheckedKeys(result) {
    var _a;
    if (result === undefined || result === null)
        return [];
    if (Array.isArray(result))
        return result;
    return (_a = result.checkedKeys) !== null && _a !== void 0 ? _a : [];
}
function unwrapIndeterminateKeys(result) {
    var _a;
    if (result === undefined || result === null || Array.isArray(result)) {
        return [];
    }
    return (_a = result.indeterminateKeys) !== null && _a !== void 0 ? _a : [];
}
function merge(originalKeys, keysToAdd) {
    const set = new Set(originalKeys);
    keysToAdd.forEach((key) => {
        if (!set.has(key)) {
            set.add(key);
        }
    });
    return Array.from(set);
}
function minus(originalKeys, keysToRemove) {
    const set = new Set(originalKeys);
    keysToRemove.forEach((key) => {
        if (set.has(key)) {
            set.delete(key);
        }
    });
    return Array.from(set);
}
function isGroup(rawNode) {
    return (rawNode === null || rawNode === void 0 ? void 0 : rawNode.type) === 'group';
}
function createIndexGetter(treeNodes) {
    const map = new Map();
    treeNodes.forEach((treeNode, i) => {
        map.set(treeNode.key, i);
    });
    return (key) => { var _a; return (_a = map.get(key)) !== null && _a !== void 0 ? _a : null; };
}

class SubtreeNotLoadedError extends Error {
    constructor() {
        super();
        this.message =
            'SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.';
    }
}
function getExtendedCheckedKeySetAfterCheck(checkKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
    return getExtendedCheckedKeySet(currentCheckedKeys.concat(checkKeys), treeMate, allowNotLoaded, false);
}
function getAvailableAscendantNodeSet(uncheckedKeys, treeMate) {
    const visitedKeys = new Set();
    uncheckedKeys.forEach((uncheckedKey) => {
        const uncheckedTreeNode = treeMate.treeNodeMap.get(uncheckedKey);
        if (uncheckedTreeNode !== undefined) {
            let nodeCursor = uncheckedTreeNode.parent;
            while (nodeCursor !== null) {
                if (nodeCursor.disabled)
                    break;
                if (visitedKeys.has(nodeCursor.key))
                    break;
                else {
                    visitedKeys.add(nodeCursor.key);
                }
                nodeCursor = nodeCursor.parent;
            }
        }
    });
    return visitedKeys;
}
function getExtendedCheckedKeySetAfterUncheck(uncheckedKeys, currentCheckedKeys, treeMate, allowNotLoaded) {
    const extendedCheckedKeySet = getExtendedCheckedKeySet(currentCheckedKeys, treeMate, allowNotLoaded, false);
    const extendedKeySetToUncheck = getExtendedCheckedKeySet(uncheckedKeys, treeMate, allowNotLoaded, true);
    const ascendantKeySet = getAvailableAscendantNodeSet(uncheckedKeys, treeMate);
    const keysToRemove = [];
    extendedCheckedKeySet.forEach((key) => {
        if (extendedKeySetToUncheck.has(key) || ascendantKeySet.has(key)) {
            keysToRemove.push(key);
        }
    });
    keysToRemove.forEach((key) => extendedCheckedKeySet.delete(key));
    return extendedCheckedKeySet;
}
function getCheckedKeys(options, treeMate) {
    const { checkedKeys, keysToCheck, keysToUncheck, indeterminateKeys, cascade, leafOnly, checkStrategy, allowNotLoaded } = options;
    if (!cascade) {
        if (keysToCheck !== undefined) {
            return {
                checkedKeys: merge(checkedKeys, keysToCheck),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
        else if (keysToUncheck !== undefined) {
            return {
                checkedKeys: minus(checkedKeys, keysToUncheck),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
        else {
            return {
                checkedKeys: Array.from(checkedKeys),
                indeterminateKeys: Array.from(indeterminateKeys)
            };
        }
    }
    const { levelTreeNodeMap } = treeMate;
    let extendedCheckedKeySet;
    if (keysToUncheck !== undefined) {
        extendedCheckedKeySet = getExtendedCheckedKeySetAfterUncheck(keysToUncheck, checkedKeys, treeMate, allowNotLoaded);
    }
    else if (keysToCheck !== undefined) {
        extendedCheckedKeySet = getExtendedCheckedKeySetAfterCheck(keysToCheck, checkedKeys, treeMate, allowNotLoaded);
    }
    else {
        extendedCheckedKeySet = getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, false);
    }
    const checkStrategyIsParent = checkStrategy === 'parent';
    const checkStrategyIsChild = checkStrategy === 'child' || leafOnly;
    const syntheticCheckedKeySet = extendedCheckedKeySet;
    const syntheticIndeterminateKeySet = new Set();
    const maxLevel = Math.max.apply(null, Array.from(levelTreeNodeMap.keys()));
    // cascade check
    // 1. if tree is fully loaded, it just works
    // 2. if the tree is not fully loaded, we assume that keys which is in not
    //    loaded tree are not in checked keys
    //    for example:
    //    a -- b(fully-loaded)   -- c(fully-loaded)
    //      |- d(partial-loaded) -- ?e(not-loaded)
    //    in the case, `e` is assumed not to be checked, nor we can't calc `d`'s
    //    and `a`'s status
    for (let level = maxLevel; level >= 0; level -= 1) {
        const levelIsZero = level === 0;
        // it should exists, nor it is a bug
        const levelTreeNodes = levelTreeNodeMap.get(level);
        for (const levelTreeNode of levelTreeNodes) {
            if (levelTreeNode.isLeaf)
                continue;
            const { key: levelTreeNodeKey, shallowLoaded } = levelTreeNode;
            if (checkStrategyIsChild && shallowLoaded) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                levelTreeNode.children.forEach((v) => {
                    if (!v.disabled &&
                        !v.isLeaf &&
                        v.shallowLoaded &&
                        syntheticCheckedKeySet.has(v.key)) {
                        syntheticCheckedKeySet.delete(v.key);
                    }
                });
            }
            if (levelTreeNode.disabled || !shallowLoaded) {
                continue;
            }
            let fullyChecked = true;
            let partialChecked = false;
            let allDisabled = true;
            // it is shallow loaded, so `children` must exist
            for (const childNode of levelTreeNode.children) {
                const childKey = childNode.key;
                if (childNode.disabled)
                    continue;
                if (allDisabled)
                    allDisabled = false;
                if (syntheticCheckedKeySet.has(childKey)) {
                    partialChecked = true;
                }
                else if (syntheticIndeterminateKeySet.has(childKey)) {
                    partialChecked = true;
                    fullyChecked = false;
                    break;
                }
                else {
                    fullyChecked = false;
                    if (partialChecked) {
                        break;
                    }
                }
            }
            if (fullyChecked && !allDisabled) {
                if (checkStrategyIsParent) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    levelTreeNode.children.forEach((v) => {
                        if (!v.disabled && syntheticCheckedKeySet.has(v.key)) {
                            syntheticCheckedKeySet.delete(v.key);
                        }
                    });
                }
                syntheticCheckedKeySet.add(levelTreeNodeKey);
            }
            else if (partialChecked) {
                syntheticIndeterminateKeySet.add(levelTreeNodeKey);
            }
            if (levelIsZero &&
                checkStrategyIsChild &&
                syntheticCheckedKeySet.has(levelTreeNodeKey)) {
                syntheticCheckedKeySet.delete(levelTreeNodeKey);
            }
        }
    }
    return {
        checkedKeys: Array.from(syntheticCheckedKeySet),
        indeterminateKeys: Array.from(syntheticIndeterminateKeySet)
    };
}
// unchecking is safe when doing cascade uncheck in async mode
function getExtendedCheckedKeySet(checkedKeys, treeMate, allowNotLoaded, isUnchecking) {
    const { treeNodeMap, getChildren } = treeMate;
    const visitedKeySet = new Set();
    const extendedKeySet = new Set(checkedKeys);
    checkedKeys.forEach((checkedKey) => {
        const checkedTreeNode = treeNodeMap.get(checkedKey);
        if (checkedTreeNode !== undefined) {
            traverseWithCb(checkedTreeNode, (treeNode) => {
                if (treeNode.disabled) {
                    return TRAVERSE_COMMAND.STOP;
                }
                const { key } = treeNode;
                if (visitedKeySet.has(key))
                    return;
                visitedKeySet.add(key);
                // Adding keys before loaded check is okay, since if not valid error
                // would be thrown
                extendedKeySet.add(key);
                if (isExpilicitlyNotLoaded(treeNode.rawNode, getChildren)) {
                    if (isUnchecking) {
                        return TRAVERSE_COMMAND.STOP;
                    }
                    else if (!allowNotLoaded) {
                        throw new SubtreeNotLoadedError();
                    }
                }
            });
        }
    });
    return extendedKeySet;
}

function getPath(key, { includeGroup = false, includeSelf = true }, treeMate) {
    var _a;
    const treeNodeMap = treeMate.treeNodeMap;
    let treeNode = key === null || key === undefined ? null : (_a = treeNodeMap.get(key)) !== null && _a !== void 0 ? _a : null;
    const mergedPath = {
        keyPath: [],
        treeNodePath: [],
        treeNode: treeNode
    };
    if (treeNode === null || treeNode === void 0 ? void 0 : treeNode.ignored) {
        mergedPath.treeNode = null;
        return mergedPath;
    }
    while (treeNode) {
        if (!treeNode.ignored && (includeGroup || !treeNode.isGroup)) {
            mergedPath.treeNodePath.push(treeNode);
        }
        treeNode = treeNode.parent;
    }
    mergedPath.treeNodePath.reverse();
    if (!includeSelf)
        mergedPath.treeNodePath.pop();
    mergedPath.keyPath = mergedPath.treeNodePath.map((treeNode) => treeNode.key);
    return mergedPath;
}

function getFirstAvailableNode(nodes) {
    if (nodes.length === 0)
        return null;
    const node = nodes[0];
    if (node.isGroup || node.ignored || node.disabled) {
        return node.getNext();
    }
    return node;
}
function rawGetNext(node, loop) {
    const sibs = node.siblings;
    const l = sibs.length;
    const { index } = node;
    if (loop) {
        return sibs[(index + 1) % l];
    }
    else {
        if (index === sibs.length - 1)
            return null;
        return sibs[index + 1];
    }
}
function move(fromNode, dir, { loop = false, includeDisabled = false } = {}) {
    const iterate = dir === 'prev' ? rawGetPrev : rawGetNext;
    const getChildOptions = {
        reverse: dir === 'prev'
    };
    let meet = false;
    let endNode = null;
    function traverse(node) {
        if (node === null)
            return;
        if (node === fromNode) {
            if (!meet) {
                meet = true;
            }
            else if (!fromNode.disabled && !fromNode.isGroup) {
                endNode = fromNode;
                return;
            }
        }
        else {
            if ((!node.disabled || includeDisabled) &&
                !node.ignored &&
                !node.isGroup) {
                endNode = node;
                return;
            }
        }
        if (node.isGroup) {
            const child = getChild(node, getChildOptions);
            if (child !== null) {
                endNode = child;
            }
            else {
                traverse(iterate(node, loop));
            }
        }
        else {
            const nextNode = iterate(node, false);
            if (nextNode !== null) {
                traverse(nextNode);
            }
            else {
                const parent = rawGetParent(node);
                if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
                    traverse(iterate(parent, loop));
                }
                else if (loop) {
                    traverse(iterate(node, true));
                }
            }
        }
    }
    traverse(fromNode);
    return endNode;
}
function rawGetPrev(node, loop) {
    const sibs = node.siblings;
    const l = sibs.length;
    const { index } = node;
    if (loop) {
        return sibs[(index - 1 + l) % l];
    }
    else {
        if (index === 0)
            return null;
        return sibs[index - 1];
    }
}
function rawGetParent(node) {
    return node.parent;
}
function getChild(node, options = {}) {
    const { reverse = false } = options;
    const { children } = node;
    if (children) {
        const { length } = children;
        const start = reverse ? length - 1 : 0;
        const end = reverse ? -1 : length;
        const delta = reverse ? -1 : 1;
        for (let i = start; i !== end; i += delta) {
            const child = children[i];
            if (!child.disabled && !child.ignored) {
                if (child.isGroup) {
                    const childInGroup = getChild(child, options);
                    if (childInGroup !== null)
                        return childInGroup;
                }
                else {
                    return child;
                }
            }
        }
    }
    return null;
}
const moveMethods = {
    getChild() {
        if (this.ignored)
            return null;
        return getChild(this);
    },
    getParent() {
        const { parent } = this;
        if (parent === null || parent === void 0 ? void 0 : parent.isGroup) {
            return parent.getParent();
        }
        return parent;
    },
    getNext(options = {}) {
        return move(this, 'next', options);
    },
    getPrev(options = {}) {
        return move(this, 'prev', options);
    }
};

function flatten(treeNodes, expandedKeys) {
    const expandedKeySet = expandedKeys ? new Set(expandedKeys) : undefined;
    const flattenedNodes = [];
    function traverse(treeNodes) {
        treeNodes.forEach((treeNode) => {
            flattenedNodes.push(treeNode);
            if (treeNode.isLeaf || !treeNode.children || treeNode.ignored)
                return;
            if (treeNode.isGroup) {
                // group node shouldn't be expanded
                traverse(treeNode.children);
            }
            else if (
            // normal non-leaf node
            expandedKeySet === undefined ||
                expandedKeySet.has(treeNode.key)) {
                traverse(treeNode.children);
            }
        });
    }
    traverse(treeNodes);
    return flattenedNodes;
}

function contains(parent, child) {
    const parentKey = parent.key;
    // eslint-disable-next-line no-unmodified-loop-condition
    while (child) {
        if (child.key === parentKey)
            return true;
        child = child.parent;
    }
    return false;
}

function createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, parent = null, level = 0) {
  const treeNodes = [];
  rawNodes.forEach((rawNode, index) => {
    var _a;
    const treeNode = Object.create(nodeProto);
    treeNode.rawNode = rawNode;
    treeNode.siblings = treeNodes;
    treeNode.level = level;
    treeNode.index = index;
    treeNode.isFirstChild = index === 0;
    treeNode.isLastChild = index + 1 === rawNodes.length;
    treeNode.parent = parent;
    if (!treeNode.ignored) {
      const rawChildren = getChildren(rawNode);
      if (Array.isArray(rawChildren)) {
        treeNode.children = createTreeNodes(rawChildren, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren, treeNode, level + 1);
      }
    }
    treeNodes.push(treeNode);
    treeNodeMap.set(treeNode.key, treeNode);
    if (!levelTreeNodeMap.has(level))
      levelTreeNodeMap.set(level, []);
    (_a = levelTreeNodeMap.get(level)) === null || _a === void 0 ? void 0 : _a.push(treeNode);
  });
  return treeNodes;
}
function createTreeMate(rawNodes, options = {}) {
  var _a;
  const treeNodeMap = /* @__PURE__ */ new Map();
  const levelTreeNodeMap = /* @__PURE__ */ new Map();
  const { getDisabled = isDisabled, getIgnored = isIgnored, getIsGroup = isGroup, getKey = defaultGetKey } = options;
  const _getChildren = (_a = options.getChildren) !== null && _a !== void 0 ? _a : defaultGetChildren;
  const getChildren = options.ignoreEmptyChildren ? (node) => {
    const children = _getChildren(node);
    if (Array.isArray(children)) {
      if (!children.length)
        return null;
      return children;
    }
    return children;
  } : _getChildren;
  const nodeProto = Object.assign({
    get key() {
      return getKey(this.rawNode);
    },
    get disabled() {
      return getDisabled(this.rawNode);
    },
    get isGroup() {
      return getIsGroup(this.rawNode);
    },
    get isLeaf() {
      return isLeaf(this.rawNode, getChildren);
    },
    get shallowLoaded() {
      return isShallowLoaded(this.rawNode, getChildren);
    },
    get ignored() {
      return getIgnored(this.rawNode);
    },
    contains(node) {
      return contains(this, node);
    }
  }, moveMethods);
  const treeNodes = createTreeNodes(rawNodes, treeNodeMap, levelTreeNodeMap, nodeProto, getChildren);
  function getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.isGroup && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function _getNode(key) {
    if (key === null || key === void 0)
      return null;
    const tmNode = treeNodeMap.get(key);
    if (tmNode && !tmNode.ignored) {
      return tmNode;
    }
    return null;
  }
  function getPrev(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getPrev(options2);
  }
  function getNext(key, options2) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getNext(options2);
  }
  function getParent(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getParent();
  }
  function getChild(key) {
    const node = _getNode(key);
    if (!node)
      return null;
    return node.getChild();
  }
  const treemate = {
    treeNodes,
    treeNodeMap,
    levelTreeNodeMap,
    maxLevel: Math.max(...levelTreeNodeMap.keys()),
    getChildren,
    getFlattenedNodes(expandedKeys) {
      return flatten(treeNodes, expandedKeys);
    },
    getNode,
    getPrev,
    getNext,
    getParent,
    getChild,
    getFirstAvailableNode() {
      return getFirstAvailableNode(treeNodes);
    },
    getPath(key, options2 = {}) {
      return getPath(key, options2, treemate);
    },
    getCheckedKeys(checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    check(keysToCheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToCheck: keysToCheck === void 0 || keysToCheck === null ? [] : toArray(keysToCheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    uncheck(keysToUncheck, checkedKeys, options2 = {}) {
      const { cascade = true, leafOnly = false, checkStrategy = "all", allowNotLoaded = false } = options2;
      return getCheckedKeys({
        checkedKeys: unwrapCheckedKeys(checkedKeys),
        indeterminateKeys: unwrapIndeterminateKeys(checkedKeys),
        keysToUncheck: keysToUncheck === null || keysToUncheck === void 0 ? [] : toArray(keysToUncheck),
        cascade,
        leafOnly,
        checkStrategy,
        allowNotLoaded
      }, treemate);
    },
    getNonLeafKeys(options2 = {}) {
      return getNonLeafKeys(treeNodes, options2);
    }
  };
  return treemate;
}

const commonVars$1 = {
  iconSizeTiny: '28px',
  iconSizeSmall: '34px',
  iconSizeMedium: '40px',
  iconSizeLarge: '46px',
  iconSizeHuge: '52px'
};

function self$5(vars) {
  const {
    textColorDisabled,
    iconColor,
    textColor2,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVars$1), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    textColor: textColorDisabled,
    iconColor,
    extraTextColor: textColor2
  });
}
const emptyLight = {
  name: 'Empty',
  common: derived,
  self: self$5
};

// vars:
// --n-font-size
// --n-icon-size
// --n-icon-color
// --n-bezier
// --n-text-color
// --n-extra-text-color
const style$5 = cB('empty', `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE('icon', `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c$1('+', [cE('description', `
 margin-top: 8px;
 `)])]), cE('description', `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE('extra', `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);

const {computed: computed$5,defineComponent: defineComponent$7,h: h$7} = await importShared('vue');
const emptyProps = Object.assign(Object.assign({}, useTheme.props), {
  description: String,
  showDescription: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  renderIcon: Function
});
const NEmpty = defineComponent$7({
  name: 'Empty',
  props: emptyProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedComponentPropsRef
    } = useConfig(props);
    const themeRef = useTheme('Empty', '-empty', style$5, emptyLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale('Empty');
    const mergedDescriptionRef = computed$5(() => {
      var _a, _b, _c;
      return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
    });
    const mergedRenderIconRef = computed$5(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h$7(EmptyIcon, null));
    });
    const cssVarsRef = computed$5(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          [createKey('iconSize', size)]: iconSize,
          [createKey('fontSize', size)]: fontSize,
          textColor,
          iconColor,
          extraTextColor
        }
      } = themeRef.value;
      return {
        '--n-icon-size': iconSize,
        '--n-font-size': fontSize,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-text-color': textColor,
        '--n-icon-color': iconColor,
        '--n-extra-text-color': extraTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('empty', computed$5(() => {
      let hash = '';
      const {
        size
      } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed$5(() => {
        return mergedDescriptionRef.value || localeRef.value.description;
      }),
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h$7("div", {
      class: [`${mergedClsPrefix}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? h$7("div", {
      class: `${mergedClsPrefix}-empty__icon`
    }, $slots.icon ? $slots.icon() : h$7(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? h$7("div", {
      class: `${mergedClsPrefix}-empty__description`
    }, $slots.default ? $slots.default() : this.localizedDescription) : null, $slots.extra ? h$7("div", {
      class: `${mergedClsPrefix}-empty__extra`
    }, $slots.extra()) : null);
  }
});

const commonVariables$1 = {
  height: 'calc(var(--n-option-height) * 7.6)',
  paddingTiny: '4px 0',
  paddingSmall: '4px 0',
  paddingMedium: '4px 0',
  paddingLarge: '4px 0',
  paddingHuge: '4px 0',
  optionPaddingTiny: '0 12px',
  optionPaddingSmall: '0 12px',
  optionPaddingMedium: '0 12px',
  optionPaddingLarge: '0 12px',
  optionPaddingHuge: '0 12px',
  loadingSize: '18px'
};

function self$4(vars) {
  const {
    borderRadius,
    popoverColor,
    textColor3,
    dividerColor,
    textColor2,
    primaryColorPressed,
    textColorDisabled,
    primaryColor,
    opacityDisabled,
    hoverColor,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), {
    optionFontSizeTiny: fontSizeTiny,
    optionFontSizeSmall: fontSizeSmall,
    optionFontSizeMedium: fontSizeMedium,
    optionFontSizeLarge: fontSizeLarge,
    optionFontSizeHuge: fontSizeHuge,
    optionHeightTiny: heightTiny,
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    color: popoverColor,
    groupHeaderTextColor: textColor3,
    actionDividerColor: dividerColor,
    optionTextColor: textColor2,
    optionTextColorPressed: primaryColorPressed,
    optionTextColorDisabled: textColorDisabled,
    optionTextColorActive: primaryColor,
    optionOpacityDisabled: opacityDisabled,
    optionCheckColor: primaryColor,
    optionColorPending: hoverColor,
    optionColorActive: 'rgba(0, 0, 0, 0)',
    optionColorActivePending: hoverColor,
    actionTextColor: textColor2,
    loadingColor: primaryColor
  });
}
const internalSelectMenuLight = createTheme({
  name: 'InternalSelectMenu',
  common: derived,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$4
});

const {defineComponent: defineComponent$6,h: h$6,inject: inject$1} = await importShared('vue');
const NSelectGroupHeader = defineComponent$6({
  name: 'NBaseSelectGroupHeader',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup() {
    const {
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      nodePropsRef
    } = inject$1(internalSelectionMenuInjectionKey);
    return {
      labelField: labelFieldRef,
      nodeProps: nodePropsRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    const {
      clsPrefix,
      renderLabel,
      renderOption,
      nodeProps,
      tmNode: {
        rawNode
      }
    } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
    const node = h$6("div", Object.assign({}, attrs, {
      class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class]
    }), children);
    return rawNode.render ? rawNode.render({
      node,
      option: rawNode
    }) : renderOption ? renderOption({
      node,
      option: rawNode,
      selected: false
    }) : node;
  }
});

const {defineComponent: defineComponent$5,h: h$5,inject,Transition: Transition$2} = await importShared('vue');
function renderCheckMark(show, clsPrefix) {
  return h$5(Transition$2, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => show ? h$5(NBaseIcon, {
      clsPrefix: clsPrefix,
      class: `${clsPrefix}-base-select-option__check`
    }, {
      default: () => h$5(FinishedIcon)
    }) : null
  });
}
const NSelectOption = defineComponent$5({
  name: 'NBaseSelectOption',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {
      valueRef,
      pendingTmNodeRef,
      multipleRef,
      valueSetRef,
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      valueFieldRef,
      showCheckmarkRef,
      nodePropsRef,
      handleOptionClick,
      handleOptionMouseEnter
    } = inject(internalSelectionMenuInjectionKey);
    const isPendingRef = useMemo(() => {
      const {
        value: pendingTmNode
      } = pendingTmNodeRef;
      if (!pendingTmNode) return false;
      return props.tmNode.key === pendingTmNode.key;
    });
    function handleClick(e) {
      const {
        tmNode
      } = props;
      if (tmNode.disabled) return;
      handleOptionClick(e, tmNode);
    }
    function handleMouseEnter(e) {
      const {
        tmNode
      } = props;
      if (tmNode.disabled) return;
      handleOptionMouseEnter(e, tmNode);
    }
    function handleMouseMove(e) {
      const {
        tmNode
      } = props;
      const {
        value: isPending
      } = isPendingRef;
      if (tmNode.disabled || isPending) return;
      handleOptionMouseEnter(e, tmNode);
    }
    return {
      multiple: multipleRef,
      isGrouped: useMemo(() => {
        const {
          tmNode
        } = props;
        const {
          parent
        } = tmNode;
        return parent && parent.rawNode.type === 'group';
      }),
      showCheckmark: showCheckmarkRef,
      nodeProps: nodePropsRef,
      isPending: isPendingRef,
      isSelected: useMemo(() => {
        const {
          value
        } = valueRef;
        const {
          value: multiple
        } = multipleRef;
        if (value === null) return false;
        const optionValue = props.tmNode.rawNode[valueFieldRef.value];
        if (multiple) {
          const {
            value: valueSet
          } = valueSetRef;
          return valueSet.has(optionValue);
        } else {
          return value === optionValue;
        }
      }),
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef,
      handleMouseMove,
      handleMouseEnter,
      handleClick
    };
  },
  render() {
    const {
      clsPrefix,
      tmNode: {
        rawNode
      },
      isSelected,
      isPending,
      isGrouped,
      showCheckmark,
      nodeProps,
      renderOption,
      renderLabel,
      handleClick,
      handleMouseEnter,
      handleMouseMove
    } = this;
    const checkmark = renderCheckMark(isSelected, clsPrefix);
    const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [render(rawNode[this.labelField], rawNode, isSelected), showCheckmark && checkmark];
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h$5("div", Object.assign({}, attrs, {
      class: [`${clsPrefix}-base-select-option`, rawNode.class, attrs === null || attrs === void 0 ? void 0 : attrs.class, {
        [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
        [`${clsPrefix}-base-select-option--selected`]: isSelected,
        [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
        [`${clsPrefix}-base-select-option--pending`]: isPending,
        [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
      }],
      style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || '', rawNode.style || ''],
      onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]),
      onMouseenter: mergeEventHandlers([handleMouseEnter, attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter]),
      onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove])
    }), h$5("div", {
      class: `${clsPrefix}-base-select-option__content`
    }, children));
    return rawNode.render ? rawNode.render({
      node,
      option: rawNode,
      selected: isSelected
    }) : renderOption ? renderOption({
      node,
      option: rawNode,
      selected: isSelected
    }) : node;
  }
});

// --n-loading-color
// --n-loading-size
// --n-option-padding-right
const style$4 = cB('base-select-menu', `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB('scrollbar', `
 max-height: var(--n-height);
 `), cB('virtual-list', `
 max-height: var(--n-height);
 `), cB('base-select-option', `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE('content', `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB('base-select-group-header', `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB('base-select-menu-option-wrapper', `
 position: relative;
 width: 100%;
 `), cE('loading, empty', `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE('loading', `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE('header', `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cE('action', `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB('base-select-group-header', `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB('base-select-option', `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM('show-checkmark', `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1('&::before', `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1('&:active', `
 color: var(--n-option-text-color-pressed);
 `), cM('grouped', `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM('pending', [c$1('&::before', `
 background-color: var(--n-option-color-pending);
 `)]), cM('selected', `
 color: var(--n-option-text-color-active);
 `, [c$1('&::before', `
 background-color: var(--n-option-color-active);
 `), cM('pending', [c$1('&::before', `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM('disabled', `
 cursor: not-allowed;
 `, [cNotM('selected', `
 color: var(--n-option-text-color-disabled);
 `), cM('selected', `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE('check', `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
  enterScale: '0.5'
})])])]);

const {computed: computed$4,defineComponent: defineComponent$4,h: h$4,nextTick: nextTick$2,onBeforeUnmount: onBeforeUnmount$1,onMounted: onMounted$1,provide,ref: ref$4,toRef: toRef$4,watch: watch$3} = await importShared('vue');
const NInternalSelectMenu = defineComponent$4({
  name: 'InternalSelectMenu',
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: {
      type: Boolean,
      default: true
    },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true
    },
    inlineThemeDisabled: Boolean,
    // deprecated
    onToggle: Function
  }),
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl('InternalSelectMenu', mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme('InternalSelectMenu', '-internal-select-menu', style$4, internalSelectMenuLight, props, toRef$4(props, 'clsPrefix'));
    const selfRef = ref$4(null);
    const virtualListRef = ref$4(null);
    const scrollbarRef = ref$4(null);
    const flattenedNodesRef = computed$4(() => props.treeMate.getFlattenedNodes());
    const fIndexGetterRef = computed$4(() => createIndexGetter(flattenedNodesRef.value));
    const pendingNodeRef = ref$4(null);
    function initPendingNode() {
      const {
        treeMate
      } = props;
      let defaultPendingNode = null;
      const {
        value
      } = props;
      if (value === null) {
        defaultPendingNode = treeMate.getFirstAvailableNode();
      } else {
        if (props.multiple) {
          defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
        } else {
          defaultPendingNode = treeMate.getNode(value);
        }
        if (!defaultPendingNode || defaultPendingNode.disabled) {
          defaultPendingNode = treeMate.getFirstAvailableNode();
        }
      }
      if (defaultPendingNode) {
        setPendingTmNode(defaultPendingNode);
      } else {
        setPendingTmNode(null);
      }
    }
    function clearPendingNodeIfInvalid() {
      const {
        value: pendingNode
      } = pendingNodeRef;
      if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
        pendingNodeRef.value = null;
      }
    }
    let initPendingNodeWatchStopHandle;
    watch$3(() => props.show, show => {
      if (show) {
        initPendingNodeWatchStopHandle = watch$3(() => props.treeMate, () => {
          if (props.resetMenuOnOptionsChange) {
            if (props.autoPending) {
              initPendingNode();
            } else {
              clearPendingNodeIfInvalid();
            }
            void nextTick$2(scrollToPendingNode);
          } else {
            clearPendingNodeIfInvalid();
          }
        }, {
          immediate: true
        });
      } else {
        initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
      }
    }, {
      immediate: true
    });
    onBeforeUnmount$1(() => {
      initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
    });
    const itemSizeRef = computed$4(() => {
      return depx(themeRef.value.self[createKey('optionHeight', props.size)]);
    });
    const paddingRef = computed$4(() => {
      return getMargin(themeRef.value.self[createKey('padding', props.size)]);
    });
    const valueSetRef = computed$4(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value);
      }
      return new Set();
    });
    const emptyRef = computed$4(() => {
      const tmNodes = flattenedNodesRef.value;
      return tmNodes && tmNodes.length === 0;
    });
    function doToggle(tmNode) {
      const {
        onToggle
      } = props;
      if (onToggle) onToggle(tmNode);
    }
    function doScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) onScroll(e);
    }
    // required, scroller sync need to be triggered manually
    function handleVirtualListScroll(e) {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      doScroll(e);
    }
    function handleVirtualListResize() {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function getPendingTmNode() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) return pendingTmNode;
      return null;
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled) return;
      setPendingTmNode(tmNode, false);
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled) return;
      doToggle(tmNode);
    }
    // keyboard related methods
    function handleKeyUp(e) {
      var _a;
      if (happensIn(e, 'action')) return;
      (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleKeyDown(e) {
      var _a;
      if (happensIn(e, 'action')) return;
      (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleMouseDown(e) {
      var _a;
      (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.focusable) return;
      e.preventDefault();
    }
    function next() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({
          loop: true
        }), true);
      }
    }
    function prev() {
      const {
        value: pendingTmNode
      } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({
          loop: true
        }), true);
      }
    }
    function setPendingTmNode(tmNode, doScroll = false) {
      pendingNodeRef.value = tmNode;
      if (doScroll) scrollToPendingNode();
    }
    function scrollToPendingNode() {
      var _a, _b;
      const tmNode = pendingNodeRef.value;
      if (!tmNode) return;
      const fIndex = fIndexGetterRef.value(tmNode.key);
      if (fIndex === null) return;
      if (props.virtualScroll) {
        (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({
          index: fIndex
        });
      } else {
        (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
          index: fIndex,
          elSize: itemSizeRef.value
        });
      }
    }
    function handleFocusin(e) {
      var _a, _b;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    function handleFocusout(e) {
      var _a, _b;
      if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      pendingTmNodeRef: pendingNodeRef,
      nodePropsRef: toRef$4(props, 'nodeProps'),
      showCheckmarkRef: toRef$4(props, 'showCheckmark'),
      multipleRef: toRef$4(props, 'multiple'),
      valueRef: toRef$4(props, 'value'),
      renderLabelRef: toRef$4(props, 'renderLabel'),
      renderOptionRef: toRef$4(props, 'renderOption'),
      labelFieldRef: toRef$4(props, 'labelField'),
      valueFieldRef: toRef$4(props, 'valueField')
    });
    provide(internalSelectionMenuBodyInjectionKey, selfRef);
    onMounted$1(() => {
      const {
        value
      } = scrollbarRef;
      if (value) value.sync();
    });
    const cssVarsRef = computed$4(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          height,
          borderRadius,
          color,
          groupHeaderTextColor,
          actionDividerColor,
          optionTextColorPressed,
          optionTextColor,
          optionTextColorDisabled,
          optionTextColorActive,
          optionOpacityDisabled,
          optionCheckColor,
          actionTextColor,
          optionColorPending,
          optionColorActive,
          loadingColor,
          loadingSize,
          optionColorActivePending,
          [createKey('optionFontSize', size)]: fontSize,
          [createKey('optionHeight', size)]: optionHeight,
          [createKey('optionPadding', size)]: optionPadding
        }
      } = themeRef.value;
      return {
        '--n-height': height,
        '--n-action-divider-color': actionDividerColor,
        '--n-action-text-color': actionTextColor,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-border-radius': borderRadius,
        '--n-color': color,
        '--n-option-font-size': fontSize,
        '--n-group-header-text-color': groupHeaderTextColor,
        '--n-option-check-color': optionCheckColor,
        '--n-option-color-pending': optionColorPending,
        '--n-option-color-active': optionColorActive,
        '--n-option-color-active-pending': optionColorActivePending,
        '--n-option-height': optionHeight,
        '--n-option-opacity-disabled': optionOpacityDisabled,
        '--n-option-text-color': optionTextColor,
        '--n-option-text-color-active': optionTextColorActive,
        '--n-option-text-color-disabled': optionTextColorDisabled,
        '--n-option-text-color-pressed': optionTextColorPressed,
        '--n-option-padding': optionPadding,
        '--n-option-padding-left': getMargin(optionPadding, 'left'),
        '--n-option-padding-right': getMargin(optionPadding, 'right'),
        '--n-loading-color': loadingColor,
        '--n-loading-size': loadingSize
      };
    });
    const {
      inlineThemeDisabled
    } = props;
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('internal-select-menu', computed$4(() => props.size[0]), cssVarsRef, props) : undefined;
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    };
    useOnResize(selfRef, props.onResize);
    return Object.assign({
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      virtualListRef,
      scrollbarRef,
      itemSize: itemSizeRef,
      padding: paddingRef,
      flattenedNodes: flattenedNodesRef,
      empty: emptyRef,
      virtualListContainer() {
        const {
          value
        } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
      },
      virtualListContent() {
        const {
          value
        } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
      },
      doScroll,
      handleFocusin,
      handleFocusout,
      handleKeyUp,
      handleKeyDown,
      handleMouseDown,
      handleVirtualListResize,
      handleVirtualListScroll,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedProps);
  },
  render() {
    const {
      $slots,
      virtualScroll,
      clsPrefix,
      mergedTheme,
      themeClass,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h$4("div", {
      ref: "selfRef",
      tabindex: this.focusable ? 0 : -1,
      class: [`${clsPrefix}-base-select-menu`, this.rtlEnabled && `${clsPrefix}-base-select-menu--rtl`, themeClass, this.multiple && `${clsPrefix}-base-select-menu--multiple`],
      style: this.cssVars,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onKeyup: this.handleKeyUp,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, resolveWrappedSlot($slots.header, children => children && h$4("div", {
      class: `${clsPrefix}-base-select-menu__header`,
      "data-header": true,
      key: "header"
    }, children)), this.loading ? h$4("div", {
      class: `${clsPrefix}-base-select-menu__loading`
    }, h$4(NBaseLoading, {
      clsPrefix: clsPrefix,
      strokeWidth: 20
    })) : !this.empty ? h$4(Scrollbar, {
      ref: "scrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: virtualScroll ? this.virtualListContainer : undefined,
      content: virtualScroll ? this.virtualListContent : undefined,
      onScroll: virtualScroll ? undefined : this.doScroll
    }, {
      default: () => {
        return virtualScroll ? h$4(VVirtualList, {
          ref: "virtualListRef",
          class: `${clsPrefix}-virtual-list`,
          items: this.flattenedNodes,
          itemSize: this.itemSize,
          showScrollbar: false,
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemResizable: true
        }, {
          default: ({
            item: tmNode
          }) => {
            return tmNode.isGroup ? h$4(NSelectGroupHeader, {
              key: tmNode.key,
              clsPrefix: clsPrefix,
              tmNode: tmNode
            }) : tmNode.ignored ? null : h$4(NSelectOption, {
              clsPrefix: clsPrefix,
              key: tmNode.key,
              tmNode: tmNode
            });
          }
        }) : h$4("div", {
          class: `${clsPrefix}-base-select-menu-option-wrapper`,
          style: {
            paddingTop: this.padding.top,
            paddingBottom: this.padding.bottom
          }
        }, this.flattenedNodes.map(tmNode => tmNode.isGroup ? h$4(NSelectGroupHeader, {
          key: tmNode.key,
          clsPrefix: clsPrefix,
          tmNode: tmNode
        }) : h$4(NSelectOption, {
          clsPrefix: clsPrefix,
          key: tmNode.key,
          tmNode: tmNode
        })));
      }
    }) : h$4("div", {
      class: `${clsPrefix}-base-select-menu__empty`,
      "data-empty": true
    }, resolveSlot($slots.empty, () => [h$4(NEmpty, {
      theme: mergedTheme.peers.Empty,
      themeOverrides: mergedTheme.peerOverrides.Empty,
      size: this.size
    })])), resolveWrappedSlot($slots.action, children => children && [h$4("div", {
      class: `${clsPrefix}-base-select-menu__action`,
      "data-action": true,
      key: "action"
    }, children), h$4(FocusDetector, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
});

const commonVariables = {
  paddingSingle: '0 26px 0 12px',
  paddingMultiple: '3px 26px 0 12px',
  clearSize: '16px',
  arrowSize: '16px'
};

function self$3(vars) {
  const {
    borderRadius,
    textColor2,
    textColorDisabled,
    inputColor,
    inputColorDisabled,
    primaryColor,
    primaryColorHover,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderColor,
    iconColor,
    iconColorDisabled,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontWeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    fontWeight,
    // default
    textColor: textColor2,
    textColorDisabled,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorActive: inputColor,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderActive: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowHover: 'none',
    boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    caretColor: primaryColor,
    arrowColor: iconColor,
    arrowColorDisabled: iconColorDisabled,
    loadingColor: primaryColor,
    // warning
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderActiveWarning: `1px solid ${warningColor}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowHoverWarning: 'none',
    boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    colorActiveWarning: inputColor,
    caretColorWarning: warningColor,
    // error
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderActiveError: `1px solid ${errorColor}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowHoverError: 'none',
    boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    colorActiveError: inputColor,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed
  });
}
const internalSelectionLight = createTheme({
  name: 'InternalSelection',
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self: self$3
});

// vars:
// --n-bezier
// --n-border
// --n-border-active
// --n-border-focus
// --n-border-hover
// --n-border-radius
// --n-box-shadow-active
// --n-box-shadow-focus
// --n-box-shadow-hover
// --n-caret-color
// --n-color
// --n-color-active
// --n-color-disabled
// --n-font-size
// --n-height
// --n-padding-single
// --n-padding-multiple
// --n-placeholder-color
// --n-placeholder-color-disabled
// --n-text-color
// --n-text-color-disabled
// --n-arrow-color
// --n-arrow-size
// --n-loading-color
// --n-font-weight
// ...clear vars
// ...form item vars
const style$3 = c$1([cB('base-selection', `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB('base-loading', `
 color: var(--n-loading-color);
 `), cB('base-selection-tags', 'min-height: var(--n-height);'), cE('border, state-border', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE('state-border', `
 z-index: 1;
 border-color: #0000;
 `), cB('base-suffix', `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE('arrow', `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB('base-selection-overlay', `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE('wrapper', `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB('base-selection-placeholder', `
 color: var(--n-placeholder-color);
 `, [cE('inner', `
 max-width: 100%;
 overflow: hidden;
 `)]), cB('base-selection-tags', `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB('base-selection-label', `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB('base-selection-input', `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE('content', `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE('render-label', `
 color: var(--n-text-color);
 `)]), cNotM('disabled', [c$1('&:hover', [cE('state-border', `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM('focus', [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM('active', [cE('state-border', `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB('base-selection-label', 'background-color: var(--n-color-active);'), cB('base-selection-tags', 'background-color: var(--n-color-active);')])]), cM('disabled', 'cursor: not-allowed;', [cE('arrow', `
 color: var(--n-arrow-color-disabled);
 `), cB('base-selection-label', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB('base-selection-input', `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE('render-label', `
 color: var(--n-text-color-disabled);
 `)]), cB('base-selection-tags', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB('base-selection-placeholder', `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB('base-selection-input-tag', `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE('input', `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE('mirror', `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ['warning', 'error'].map(status => cM(`${status}-status`, [cE('state-border', `border: var(--n-border-${status});`), cNotM('disabled', [c$1('&:hover', [cE('state-border', `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), cM('active', [cE('state-border', `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), cB('base-selection-label', `background-color: var(--n-color-active-${status});`), cB('base-selection-tags', `background-color: var(--n-color-active-${status});`)]), cM('focus', [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), cB('base-selection-popover', `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB('base-selection-tag-wrapper', `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1('&:last-child', 'padding-right: 0;'), cB('tag', `
 font-size: 14px;
 max-width: 100%;
 `, [cE('content', `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);

const {computed: computed$3,defineComponent: defineComponent$3,Fragment,h: h$3,nextTick: nextTick$1,onMounted,ref: ref$3,toRef: toRef$3,watch: watch$2,watchEffect: watchEffect$2} = await importShared('vue');
const NInternalSelection = defineComponent$3({
  name: 'InternalSelection',
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    active: Boolean,
    pattern: {
      type: String,
      default: ''
    },
    placeholder: String,
    selectedOption: {
      type: Object,
      default: null
    },
    selectedOptions: {
      type: Array,
      default: null
    },
    labelField: {
      type: String,
      default: 'label'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    multiple: Boolean,
    filterable: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: 'medium'
    },
    loading: Boolean,
    autofocus: Boolean,
    showArrow: {
      type: Boolean,
      default: true
    },
    inputProps: Object,
    focused: Boolean,
    renderTag: Function,
    onKeydown: Function,
    onClick: Function,
    onBlur: Function,
    onFocus: Function,
    onDeleteOption: Function,
    maxTagCount: [String, Number],
    ellipsisTagPopoverProps: Object,
    onClear: Function,
    onPatternInput: Function,
    onPatternFocus: Function,
    onPatternBlur: Function,
    renderLabel: Function,
    status: String,
    inlineThemeDisabled: Boolean,
    ignoreComposition: {
      type: Boolean,
      default: true
    },
    onResize: Function
  }),
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl('InternalSelection', mergedRtlRef, mergedClsPrefixRef);
    const patternInputMirrorRef = ref$3(null);
    const patternInputRef = ref$3(null);
    const selfRef = ref$3(null);
    const multipleElRef = ref$3(null);
    const singleElRef = ref$3(null);
    const patternInputWrapperRef = ref$3(null);
    const counterRef = ref$3(null);
    const counterWrapperRef = ref$3(null);
    const overflowRef = ref$3(null);
    const inputTagElRef = ref$3(null);
    const showTagsPopoverRef = ref$3(false);
    const patternInputFocusedRef = ref$3(false);
    const hoverRef = ref$3(false);
    const themeRef = useTheme('InternalSelection', '-internal-selection', style$3, internalSelectionLight, props, toRef$3(props, 'clsPrefix'));
    const mergedClearableRef = computed$3(() => {
      return props.clearable && !props.disabled && (hoverRef.value || props.active);
    });
    const filterablePlaceholderRef = computed$3(() => {
      return props.selectedOption ? props.renderTag ? props.renderTag({
        option: props.selectedOption,
        handleClose: () => {}
      }) : props.renderLabel ? props.renderLabel(props.selectedOption, true) : render(props.selectedOption[props.labelField], props.selectedOption, true) : props.placeholder;
    });
    const labelRef = computed$3(() => {
      const option = props.selectedOption;
      if (!option) return undefined;
      return option[props.labelField];
    });
    const selectedRef = computed$3(() => {
      if (props.multiple) {
        return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
      } else {
        return props.selectedOption !== null;
      }
    });
    function syncMirrorWidth() {
      var _a;
      const {
        value: patternInputMirrorEl
      } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const {
          value: patternInputEl
        } = patternInputRef;
        if (patternInputEl) {
          patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
          if (props.maxTagCount !== 'responsive') {
            (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync({
              showAllItemsBeforeCalculate: false
            });
          }
        }
      }
    }
    function hideInputTag() {
      const {
        value: inputTagEl
      } = inputTagElRef;
      if (inputTagEl) inputTagEl.style.display = 'none';
    }
    function showInputTag() {
      const {
        value: inputTagEl
      } = inputTagElRef;
      if (inputTagEl) inputTagEl.style.display = 'inline-block';
    }
    watch$2(toRef$3(props, 'active'), value => {
      if (!value) hideInputTag();
    });
    watch$2(toRef$3(props, 'pattern'), () => {
      if (props.multiple) {
        void nextTick$1(syncMirrorWidth);
      }
    });
    function doFocus(e) {
      const {
        onFocus
      } = props;
      if (onFocus) onFocus(e);
    }
    function doBlur(e) {
      const {
        onBlur
      } = props;
      if (onBlur) onBlur(e);
    }
    function doDeleteOption(value) {
      const {
        onDeleteOption
      } = props;
      if (onDeleteOption) onDeleteOption(value);
    }
    function doClear(e) {
      const {
        onClear
      } = props;
      if (onClear) onClear(e);
    }
    function doPatternInput(value) {
      const {
        onPatternInput
      } = props;
      if (onPatternInput) onPatternInput(value);
    }
    function handleFocusin(e) {
      var _a;
      if (!e.relatedTarget || !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        doFocus(e);
      }
    }
    function handleFocusout(e) {
      var _a;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) return;
      doBlur(e);
    }
    function handleClear(e) {
      doClear(e);
    }
    function handleMouseEnter() {
      hoverRef.value = true;
    }
    function handleMouseLeave() {
      hoverRef.value = false;
    }
    function handleMouseDown(e) {
      if (!props.active || !props.filterable) return;
      if (e.target === patternInputRef.value) return;
      e.preventDefault();
    }
    function handleDeleteOption(option) {
      doDeleteOption(option);
    }
    const isComposingRef = ref$3(false);
    function handlePatternKeyDown(e) {
      if (e.key === 'Backspace' && !isComposingRef.value) {
        if (!props.pattern.length) {
          const {
            selectedOptions
          } = props;
          if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
            handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
          }
        }
      }
    }
    // the composition end is later than its input so we can cached the event
    // and return the input event
    let cachedInputEvent = null;
    function handlePatternInputInput(e) {
      // we should sync mirror width here
      const {
        value: patternInputMirrorEl
      } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const inputText = e.target.value;
        patternInputMirrorEl.textContent = inputText;
        syncMirrorWidth();
      }
      if (props.ignoreComposition) {
        if (!isComposingRef.value) {
          doPatternInput(e);
        } else {
          cachedInputEvent = e;
        }
      } else {
        doPatternInput(e);
      }
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd() {
      isComposingRef.value = false;
      if (props.ignoreComposition) {
        doPatternInput(cachedInputEvent);
      }
      cachedInputEvent = null;
    }
    function handlePatternInputFocus(e) {
      var _a;
      patternInputFocusedRef.value = true;
      (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handlePatternInputBlur(e) {
      var _a;
      patternInputFocusedRef.value = false;
      (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function blur() {
      var _a, _b;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
      } else if (props.multiple) {
        const {
          value: multipleEl
        } = multipleElRef;
        multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
      } else {
        const {
          value: singleEl
        } = singleElRef;
        singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
      }
    }
    function focus() {
      var _a, _b, _c;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else if (props.multiple) {
        (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
      } else {
        (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function focusInput() {
      const {
        value: patternInputEl
      } = patternInputRef;
      if (patternInputEl) {
        showInputTag();
        patternInputEl.focus();
      }
    }
    function blurInput() {
      const {
        value: patternInputEl
      } = patternInputRef;
      if (patternInputEl) {
        patternInputEl.blur();
      }
    }
    function updateCounter(count) {
      const {
        value
      } = counterRef;
      if (value) {
        value.setTextContent(`+${count}`);
      }
    }
    function getCounter() {
      const {
        value
      } = counterWrapperRef;
      return value;
    }
    function getTail() {
      return patternInputRef.value;
    }
    let enterTimerId = null;
    function clearEnterTimer() {
      if (enterTimerId !== null) window.clearTimeout(enterTimerId);
    }
    function handleMouseEnterCounter() {
      if (props.active) return;
      clearEnterTimer();
      enterTimerId = window.setTimeout(() => {
        if (selectedRef.value) {
          showTagsPopoverRef.value = true;
        }
      }, 100);
    }
    function handleMouseLeaveCounter() {
      clearEnterTimer();
    }
    function onPopoverUpdateShow(show) {
      if (!show) {
        clearEnterTimer();
        showTagsPopoverRef.value = false;
      }
    }
    watch$2(selectedRef, value => {
      if (!value) {
        showTagsPopoverRef.value = false;
      }
    });
    onMounted(() => {
      watchEffect$2(() => {
        const patternInputWrapperEl = patternInputWrapperRef.value;
        if (!patternInputWrapperEl) return;
        if (props.disabled) {
          patternInputWrapperEl.removeAttribute('tabindex');
        } else {
          patternInputWrapperEl.tabIndex = patternInputFocusedRef.value ? -1 : 0;
        }
      });
    });
    useOnResize(selfRef, props.onResize);
    const {
      inlineThemeDisabled
    } = props;
    const cssVarsRef = computed$3(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontWeight,
          borderRadius,
          color,
          placeholderColor,
          textColor,
          paddingSingle,
          paddingMultiple,
          caretColor,
          colorDisabled,
          textColorDisabled,
          placeholderColorDisabled,
          colorActive,
          boxShadowFocus,
          boxShadowActive,
          boxShadowHover,
          border,
          borderFocus,
          borderHover,
          borderActive,
          arrowColor,
          arrowColorDisabled,
          loadingColor,
          // form warning
          colorActiveWarning,
          boxShadowFocusWarning,
          boxShadowActiveWarning,
          boxShadowHoverWarning,
          borderWarning,
          borderFocusWarning,
          borderHoverWarning,
          borderActiveWarning,
          // form error
          colorActiveError,
          boxShadowFocusError,
          boxShadowActiveError,
          boxShadowHoverError,
          borderError,
          borderFocusError,
          borderHoverError,
          borderActiveError,
          // clear
          clearColor,
          clearColorHover,
          clearColorPressed,
          clearSize,
          // arrow
          arrowSize,
          [createKey('height', size)]: height,
          [createKey('fontSize', size)]: fontSize
        }
      } = themeRef.value;
      const paddingSingleDiscrete = getMargin(paddingSingle);
      const paddingMultipleDiscrete = getMargin(paddingMultiple);
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-border': border,
        '--n-border-active': borderActive,
        '--n-border-focus': borderFocus,
        '--n-border-hover': borderHover,
        '--n-border-radius': borderRadius,
        '--n-box-shadow-active': boxShadowActive,
        '--n-box-shadow-focus': boxShadowFocus,
        '--n-box-shadow-hover': boxShadowHover,
        '--n-caret-color': caretColor,
        '--n-color': color,
        '--n-color-active': colorActive,
        '--n-color-disabled': colorDisabled,
        '--n-font-size': fontSize,
        '--n-height': height,
        '--n-padding-single-top': paddingSingleDiscrete.top,
        '--n-padding-multiple-top': paddingMultipleDiscrete.top,
        '--n-padding-single-right': paddingSingleDiscrete.right,
        '--n-padding-multiple-right': paddingMultipleDiscrete.right,
        '--n-padding-single-left': paddingSingleDiscrete.left,
        '--n-padding-multiple-left': paddingMultipleDiscrete.left,
        '--n-padding-single-bottom': paddingSingleDiscrete.bottom,
        '--n-padding-multiple-bottom': paddingMultipleDiscrete.bottom,
        '--n-placeholder-color': placeholderColor,
        '--n-placeholder-color-disabled': placeholderColorDisabled,
        '--n-text-color': textColor,
        '--n-text-color-disabled': textColorDisabled,
        '--n-arrow-color': arrowColor,
        '--n-arrow-color-disabled': arrowColorDisabled,
        '--n-loading-color': loadingColor,
        // form warning
        '--n-color-active-warning': colorActiveWarning,
        '--n-box-shadow-focus-warning': boxShadowFocusWarning,
        '--n-box-shadow-active-warning': boxShadowActiveWarning,
        '--n-box-shadow-hover-warning': boxShadowHoverWarning,
        '--n-border-warning': borderWarning,
        '--n-border-focus-warning': borderFocusWarning,
        '--n-border-hover-warning': borderHoverWarning,
        '--n-border-active-warning': borderActiveWarning,
        // form error
        '--n-color-active-error': colorActiveError,
        '--n-box-shadow-focus-error': boxShadowFocusError,
        '--n-box-shadow-active-error': boxShadowActiveError,
        '--n-box-shadow-hover-error': boxShadowHoverError,
        '--n-border-error': borderError,
        '--n-border-focus-error': borderFocusError,
        '--n-border-hover-error': borderHoverError,
        '--n-border-active-error': borderActiveError,
        // clear
        '--n-clear-size': clearSize,
        '--n-clear-color': clearColor,
        '--n-clear-color-hover': clearColorHover,
        '--n-clear-color-pressed': clearColorPressed,
        // arrow-size
        '--n-arrow-size': arrowSize,
        // font-weight
        '--n-font-weight': fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('internal-selection', computed$3(() => {
      return props.size[0];
    }), cssVarsRef, props) : undefined;
    return {
      mergedTheme: themeRef,
      mergedClearable: mergedClearableRef,
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      patternInputFocused: patternInputFocusedRef,
      filterablePlaceholder: filterablePlaceholderRef,
      label: labelRef,
      selected: selectedRef,
      showTagsPanel: showTagsPopoverRef,
      isComposing: isComposingRef,
      // dom ref
      counterRef,
      counterWrapperRef,
      patternInputMirrorRef,
      patternInputRef,
      selfRef,
      multipleElRef,
      singleElRef,
      patternInputWrapperRef,
      overflowRef,
      inputTagElRef,
      handleMouseDown,
      handleFocusin,
      handleClear,
      handleMouseEnter,
      handleMouseLeave,
      handleDeleteOption,
      handlePatternKeyDown,
      handlePatternInputInput,
      handlePatternInputBlur,
      handlePatternInputFocus,
      handleMouseEnterCounter,
      handleMouseLeaveCounter,
      handleFocusout,
      handleCompositionEnd,
      handleCompositionStart,
      onPopoverUpdateShow,
      focus,
      focusInput,
      blur,
      blurInput,
      updateCounter,
      getCounter,
      getTail,
      renderLabel: props.renderLabel,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      status,
      multiple,
      size,
      disabled,
      filterable,
      maxTagCount,
      bordered,
      clsPrefix,
      ellipsisTagPopoverProps,
      onRender,
      renderTag,
      renderLabel
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const maxTagCountResponsive = maxTagCount === 'responsive';
    const maxTagCountNumeric = typeof maxTagCount === 'number';
    const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
    const suffix = h$3(Wrapper, null, {
      default: () => h$3(NBaseSuffix, {
        clsPrefix: clsPrefix,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var _a, _b;
          return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      })
    });
    let body;
    if (multiple) {
      const {
        labelField
      } = this;
      const createTag = option => h$3("div", {
        class: `${clsPrefix}-base-selection-tag-wrapper`,
        key: option.value
      }, renderTag ? renderTag({
        option,
        handleClose: () => {
          this.handleDeleteOption(option);
        }
      }) : h$3(NTag, {
        size: size,
        closable: !option.disabled,
        disabled: disabled,
        onClose: () => {
          this.handleDeleteOption(option);
        },
        internalCloseIsButtonTag: false,
        internalCloseFocusable: false
      }, {
        default: () => renderLabel ? renderLabel(option, true) : render(option[labelField], option, true)
      }));
      const createOriginalTagNodes = () => (maxTagCountNumeric ? this.selectedOptions.slice(0, maxTagCount) : this.selectedOptions).map(createTag);
      const input = filterable ? h$3("div", {
        class: `${clsPrefix}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, h$3("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled: disabled,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${clsPrefix}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), h$3("span", {
        ref: "patternInputMirrorRef",
        class: `${clsPrefix}-base-selection-input-tag__mirror`
      }, this.pattern)) : null;
      // May Overflow
      const renderCounter = maxTagCountResponsive ? () => h$3("div", {
        class: `${clsPrefix}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, h$3(NTag, {
        size: size,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: disabled
      })) : undefined;
      let counter;
      if (maxTagCountNumeric) {
        const rest = this.selectedOptions.length - maxTagCount;
        if (rest > 0) {
          counter = h$3("div", {
            class: `${clsPrefix}-base-selection-tag-wrapper`,
            key: "__counter__"
          }, h$3(NTag, {
            size: size,
            ref: "counterRef",
            onMouseenter: this.handleMouseEnterCounter,
            disabled: disabled
          }, {
            default: () => `+${rest}`
          }));
        }
      }
      const tags = maxTagCountResponsive ? filterable ? h$3(VOverflow, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        getTail: this.getTail,
        style: {
          width: '100%',
          display: 'flex',
          overflow: 'hidden'
        }
      }, {
        default: createOriginalTagNodes,
        counter: renderCounter,
        tail: () => input
      }) : h$3(VOverflow, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: '100%',
          display: 'flex',
          overflow: 'hidden'
        }
      }, {
        default: createOriginalTagNodes,
        counter: renderCounter
      }) : maxTagCountNumeric && counter ? createOriginalTagNodes().concat(counter) : createOriginalTagNodes();
      const renderPopover = useMaxTagCount ? () => h$3("div", {
        class: `${clsPrefix}-base-selection-popover`
      }, maxTagCountResponsive ? createOriginalTagNodes() : this.selectedOptions.map(createTag)) : undefined;
      const popoverProps = useMaxTagCount ? Object.assign({
        show: this.showTagsPanel,
        trigger: 'hover',
        overlap: true,
        placement: 'top',
        width: 'trigger',
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, ellipsisTagPopoverProps) : null;
      const showPlaceholder = this.selected ? false : this.active ? !this.pattern && !this.isComposing : true;
      const placeholder = showPlaceholder ? h$3("div", {
        class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`
      }, h$3("div", {
        class: `${clsPrefix}-base-selection-placeholder__inner`
      }, this.placeholder)) : null;
      const popoverTrigger = filterable ? h$3("div", {
        ref: "patternInputWrapperRef",
        class: `${clsPrefix}-base-selection-tags`
      }, tags, maxTagCountResponsive ? null : input, suffix) : h$3("div", {
        ref: "multipleElRef",
        class: `${clsPrefix}-base-selection-tags`,
        tabindex: disabled ? undefined : 0
      }, tags, suffix);
      body = h$3(Fragment, null, useMaxTagCount ? h$3(NPopover, Object.assign({}, popoverProps, {
        scrollable: true,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => popoverTrigger,
        default: renderPopover
      }) : popoverTrigger, placeholder);
    } else {
      if (filterable) {
        const hasInput = this.pattern || this.isComposing;
        const showPlaceholder = this.active ? !hasInput : !this.selected;
        const showSelectedLabel = this.active ? false : this.selected;
        body = h$3("div", {
          ref: "patternInputWrapperRef",
          class: `${clsPrefix}-base-selection-label`,
          title: this.patternInputFocused ? undefined : getTitleAttribute(this.label)
        }, h$3("input", Object.assign({}, this.inputProps, {
          ref: "patternInputRef",
          class: `${clsPrefix}-base-selection-input`,
          value: this.active ? this.pattern : '',
          placeholder: "",
          readonly: disabled,
          disabled: disabled,
          tabindex: -1,
          autofocus: this.autofocus,
          onFocus: this.handlePatternInputFocus,
          onBlur: this.handlePatternInputBlur,
          onInput: this.handlePatternInputInput,
          onCompositionstart: this.handleCompositionStart,
          onCompositionend: this.handleCompositionEnd
        })), showSelectedLabel ? h$3("div", {
          class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`,
          key: "input"
        }, h$3("div", {
          class: `${clsPrefix}-base-selection-overlay__wrapper`
        }, renderTag ? renderTag({
          option: this.selectedOption,
          handleClose: () => {}
        }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : null, showPlaceholder ? h$3("div", {
          class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
          key: "placeholder"
        }, h$3("div", {
          class: `${clsPrefix}-base-selection-overlay__wrapper`
        }, this.filterablePlaceholder)) : null, suffix);
      } else {
        body = h$3("div", {
          ref: "singleElRef",
          class: `${clsPrefix}-base-selection-label`,
          tabindex: this.disabled ? undefined : 0
        }, this.label !== undefined ? h$3("div", {
          class: `${clsPrefix}-base-selection-input`,
          title: getTitleAttribute(this.label),
          key: "input"
        }, h$3("div", {
          class: `${clsPrefix}-base-selection-input__content`
        }, renderTag ? renderTag({
          option: this.selectedOption,
          handleClose: () => {}
        }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : h$3("div", {
          class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
          key: "placeholder"
        }, h$3("div", {
          class: `${clsPrefix}-base-selection-placeholder__inner`
        }, this.placeholder)), suffix);
      }
    }
    return h$3("div", {
      ref: "selfRef",
      class: [`${clsPrefix}-base-selection`, this.rtlEnabled && `${clsPrefix}-base-selection--rtl`, this.themeClass, status && `${clsPrefix}-base-selection--${status}-status`, {
        [`${clsPrefix}-base-selection--active`]: this.active,
        [`${clsPrefix}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${clsPrefix}-base-selection--disabled`]: this.disabled,
        [`${clsPrefix}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${clsPrefix}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, body, bordered ? h$3("div", {
      class: `${clsPrefix}-base-selection__border`
    }) : null, bordered ? h$3("div", {
      class: `${clsPrefix}-base-selection__state-border`
    }) : null);
  }
});

function getIsGroup(option) {
  return option.type === 'group';
}
function getIgnored(option) {
  return option.type === 'ignored';
}
function patternMatched(pattern, value) {
  try {
    return !!(1 + value.toString().toLowerCase().indexOf(pattern.trim().toLowerCase()));
  } catch (_a) {
    return false;
  }
}
function createTmOptions(valueField, childrenField) {
  const options = {
    getIsGroup,
    getIgnored,
    getKey(option) {
      if (getIsGroup(option)) {
        return option.name || option.key || 'key-required';
      }
      // Required for non-custom label & value field
      return option[valueField];
    },
    getChildren(option) {
      return option[childrenField];
    }
  };
  return options;
}
function filterOptions(originalOpts, filter, pattern, childrenField) {
  if (!filter) return originalOpts;
  function traverse(options) {
    if (!Array.isArray(options)) return [];
    const filteredOptions = [];
    for (const option of options) {
      if (getIsGroup(option)) {
        const children = traverse(option[childrenField]);
        if (children.length) {
          filteredOptions.push(Object.assign({}, option, {
            [childrenField]: children
          }));
        }
      } else if (getIgnored(option)) {
        continue;
      } else if (filter(pattern, option)) {
        filteredOptions.push(option);
      }
    }
    return filteredOptions;
  }
  return traverse(originalOpts);
}
function createValOptMap(options, valueField, childrenField) {
  const valOptMap = new Map();
  options.forEach(option => {
    if (getIsGroup(option)) {
      option[childrenField].forEach(selectGroupOption => {
        valOptMap.set(selectGroupOption[valueField], selectGroupOption);
      });
    } else {
      valOptMap.set(option[valueField], option);
    }
  });
  return valOptMap;
}

function self$2(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const selectLight = createTheme({
  name: 'Select',
  common: derived,
  peers: {
    InternalSelection: internalSelectionLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$2
});

// --n-menu-box-shadow
const style$2 = c$1([cB('select', `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), cB('select-menu', `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: 'background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)'
})])]);

const {computed: computed$2,defineComponent: defineComponent$2,h: h$2,ref: ref$2,toRef: toRef$2,Transition: Transition$1,vShow,watch: watch$1,watchEffect: watchEffect$1,withDirectives} = await importShared('vue');
const selectProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  menuSize: {
    type: String
  },
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  maxTagCount: [Number, String],
  ellipsisTagPopoverProps: Object,
  consistentMenuWidth: {
    type: Boolean,
    default: true
  },
  virtualScroll: {
    type: Boolean,
    default: true
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: {
    type: Boolean,
    default: true
  },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: true
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  onChange: [Function, Array],
  items: Array
});
const NSelect = defineComponent$2({
  name: "Select",
  props: selectProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Select", "-select", style$2, selectLight, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref$2(props.defaultValue);
    const controlledValueRef = toRef$2(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const focusedRef = ref$2(false);
    const patternRef = ref$2("");
    const compitableOptionsRef = useCompitable(props, ["items", "options"]);
    const createdOptionsRef = ref$2([]);
    const beingCreatedOptionsRef = ref$2([]);
    const localOptionsRef = computed$2(() => {
      return beingCreatedOptionsRef.value.concat(createdOptionsRef.value).concat(compitableOptionsRef.value);
    });
    const resolvedFilterRef = computed$2(() => {
      const {
        filter
      } = props;
      if (filter) return filter;
      const {
        labelField,
        valueField
      } = props;
      return (pattern, option) => {
        if (!option) return false;
        const label = option[labelField];
        if (typeof label === "string") {
          return patternMatched(pattern, label);
        }
        const value = option[valueField];
        if (typeof value === "string") {
          return patternMatched(pattern, value);
        }
        if (typeof value === "number") {
          return patternMatched(pattern, String(value));
        }
        return false;
      };
    });
    const filteredOptionsRef = computed$2(() => {
      if (props.remote) {
        return compitableOptionsRef.value;
      } else {
        const {
          value: localOptions
        } = localOptionsRef;
        const {
          value: pattern
        } = patternRef;
        if (!pattern.length || !props.filterable) {
          return localOptions;
        } else {
          return filterOptions(localOptions, resolvedFilterRef.value, pattern, props.childrenField);
        }
      }
    });
    const treeMateRef = computed$2(() => {
      const {
        valueField,
        childrenField
      } = props;
      const options = createTmOptions(valueField, childrenField);
      return createTreeMate(filteredOptionsRef.value, options);
    });
    const valOptMapRef = computed$2(() => createValOptMap(localOptionsRef.value, props.valueField, props.childrenField));
    const uncontrolledShowRef = ref$2(false);
    const mergedShowRef = useMergedState(toRef$2(props, "show"), uncontrolledShowRef);
    const triggerRef = ref$2(null);
    const followerRef = ref$2(null);
    const menuRef = ref$2(null);
    const {
      localeRef
    } = useLocale("Select");
    const localizedPlaceholderRef = computed$2(() => {
      var _a;
      return (_a = props.placeholder) !== null && _a !== void 0 ? _a : localeRef.value.placeholder;
    });
    const emptyArray = [];
    const memoValOptMapRef = ref$2(/* @__PURE__ */ new Map());
    const wrappedFallbackOptionRef = computed$2(() => {
      const {
        fallbackOption
      } = props;
      if (fallbackOption === void 0) {
        const {
          labelField,
          valueField
        } = props;
        return (value) => ({
          [labelField]: String(value),
          [valueField]: value
        });
      }
      if (fallbackOption === false) return false;
      return (value) => {
        return Object.assign(fallbackOption(value), {
          value
        });
      };
    });
    function getMergedOptions(values) {
      const remote = props.remote;
      const {
        value: memoValOptMap
      } = memoValOptMapRef;
      const {
        value: valOptMap
      } = valOptMapRef;
      const {
        value: wrappedFallbackOption
      } = wrappedFallbackOptionRef;
      const options = [];
      values.forEach((value) => {
        if (valOptMap.has(value)) {
          options.push(valOptMap.get(value));
        } else if (remote && memoValOptMap.has(value)) {
          options.push(memoValOptMap.get(value));
        } else if (wrappedFallbackOption) {
          const option = wrappedFallbackOption(value);
          if (option) {
            options.push(option);
          }
        }
      });
      return options;
    }
    const selectedOptionsRef = computed$2(() => {
      if (props.multiple) {
        const {
          value: values
        } = mergedValueRef;
        if (!Array.isArray(values)) return [];
        return getMergedOptions(values);
      }
      return null;
    });
    const selectedOptionRef = computed$2(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!props.multiple && !Array.isArray(mergedValue)) {
        if (mergedValue === null) return null;
        return getMergedOptions([mergedValue])[0] || null;
      }
      return null;
    });
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    function doUpdateValue(value, option) {
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      if (onChange) call(onChange, value, option);
      if (onUpdateValue) call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
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
    function doClear() {
      const {
        onClear
      } = props;
      if (onClear) call(onClear);
    }
    function doFocus(e) {
      const {
        onFocus,
        showOnFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus) call(onFocus, e);
      nTriggerFormFocus();
      if (showOnFocus) {
        openMenu();
      }
    }
    function doSearch(value) {
      const {
        onSearch
      } = props;
      if (onSearch) call(onSearch, value);
    }
    function doScroll(e) {
      const {
        onScroll
      } = props;
      if (onScroll) call(onScroll, e);
    }
    function updateMemorizedOptions() {
      var _a;
      const {
        remote,
        multiple
      } = props;
      if (remote) {
        const {
          value: memoValOptMap
        } = memoValOptMapRef;
        if (multiple) {
          const {
            valueField
          } = props;
          (_a = selectedOptionsRef.value) === null || _a === void 0 ? void 0 : _a.forEach((option) => {
            memoValOptMap.set(option[valueField], option);
          });
        } else {
          const option = selectedOptionRef.value;
          if (option) {
            memoValOptMap.set(option[props.valueField], option);
          }
        }
      }
    }
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        doUpdateShow(true);
        uncontrolledShowRef.value = true;
        if (props.filterable) {
          focusSelectionInput();
        }
      }
    }
    function closeMenu() {
      doUpdateShow(false);
    }
    function handleMenuAfterLeave() {
      patternRef.value = "";
      beingCreatedOptionsRef.value = emptyArray;
    }
    const activeWithoutMenuOpenRef = ref$2(false);
    function onTriggerInputFocus() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = true;
      }
    }
    function onTriggerInputBlur() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = false;
        if (!mergedShowRef.value) {
          handleMenuAfterLeave();
        }
      }
    }
    function handleTriggerClick() {
      if (mergedDisabledRef.value) return;
      if (!mergedShowRef.value) {
        openMenu();
      } else {
        if (!props.filterable) {
          closeMenu();
        } else {
          focusSelectionInput();
        }
      }
    }
    function handleTriggerBlur(e) {
      var _a, _b;
      if ((_b = (_a = menuRef.value) === null || _a === void 0 ? void 0 : _a.selfRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) {
        return;
      }
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleTriggerFocus(e) {
      doFocus(e);
      focusedRef.value = true;
    }
    function handleMenuFocus() {
      focusedRef.value = true;
    }
    function handleMenuBlur(e) {
      var _a;
      if ((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget)) return;
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleMenuTabOut() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      closeMenu();
    }
    function handleMenuClickOutside(e) {
      var _a;
      if (mergedShowRef.value) {
        if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
          closeMenu();
        }
      }
    }
    function createClearedMultipleSelectValue(value) {
      if (!Array.isArray(value)) return [];
      if (wrappedFallbackOptionRef.value) {
        return Array.from(value);
      } else {
        const {
          remote
        } = props;
        const {
          value: valOptMap
        } = valOptMapRef;
        if (remote) {
          const {
            value: memoValOptMap
          } = memoValOptMapRef;
          return value.filter((v) => valOptMap.has(v) || memoValOptMap.has(v));
        } else {
          return value.filter((v) => valOptMap.has(v));
        }
      }
    }
    function handleToggleByTmNode(tmNode) {
      handleToggleByOption(tmNode.rawNode);
    }
    function handleToggleByOption(option) {
      if (mergedDisabledRef.value) return;
      const {
        tag,
        remote,
        clearFilterAfterSelect,
        valueField
      } = props;
      if (tag && !remote) {
        const {
          value: beingCreatedOptions
        } = beingCreatedOptionsRef;
        const beingCreatedOption = beingCreatedOptions[0] || null;
        if (beingCreatedOption) {
          const createdOptions = createdOptionsRef.value;
          if (!createdOptions.length) {
            createdOptionsRef.value = [beingCreatedOption];
          } else {
            createdOptions.push(beingCreatedOption);
          }
          beingCreatedOptionsRef.value = emptyArray;
        }
      }
      if (remote) {
        memoValOptMapRef.value.set(option[valueField], option);
      }
      if (props.multiple) {
        const changedValue = createClearedMultipleSelectValue(mergedValueRef.value);
        const index = changedValue.findIndex((value) => value === option[valueField]);
        if (~index) {
          changedValue.splice(index, 1);
          if (tag && !remote) {
            const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
            if (~createdOptionIndex) {
              createdOptionsRef.value.splice(createdOptionIndex, 1);
              if (clearFilterAfterSelect) patternRef.value = "";
            }
          }
        } else {
          changedValue.push(option[valueField]);
          if (clearFilterAfterSelect) patternRef.value = "";
        }
        doUpdateValue(changedValue, getMergedOptions(changedValue));
      } else {
        if (tag && !remote) {
          const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
          if (~createdOptionIndex) {
            createdOptionsRef.value = [createdOptionsRef.value[createdOptionIndex]];
          } else {
            createdOptionsRef.value = emptyArray;
          }
        }
        focusSelection();
        closeMenu();
        doUpdateValue(option[valueField], option);
      }
    }
    function getCreatedOptionIndex(optionValue) {
      const createdOptions = createdOptionsRef.value;
      return createdOptions.findIndex((createdOption) => createdOption[props.valueField] === optionValue);
    }
    function handlePatternInput(e) {
      if (!mergedShowRef.value) {
        openMenu();
      }
      const {
        value
      } = e.target;
      patternRef.value = value;
      const {
        tag,
        remote
      } = props;
      doSearch(value);
      if (tag && !remote) {
        if (!value) {
          beingCreatedOptionsRef.value = emptyArray;
          return;
        }
        const {
          onCreate
        } = props;
        const optionBeingCreated = onCreate ? onCreate(value) : {
          [props.labelField]: value,
          [props.valueField]: value
        };
        const {
          valueField,
          labelField
        } = props;
        if (compitableOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        }) || createdOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        })) {
          beingCreatedOptionsRef.value = emptyArray;
        } else {
          beingCreatedOptionsRef.value = [optionBeingCreated];
        }
      }
    }
    function handleClear(e) {
      e.stopPropagation();
      const {
        multiple
      } = props;
      if (!multiple && props.filterable) {
        closeMenu();
      }
      doClear();
      if (multiple) {
        doUpdateValue([], []);
      } else {
        doUpdateValue(null, null);
      }
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty") && !happensIn(e, "header")) {
        e.preventDefault();
      }
    }
    function handleMenuScroll(e) {
      doScroll(e);
    }
    function handleKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (!props.keyboard) {
        e.preventDefault();
        return;
      }
      switch (e.key) {
        case " ":
          if (props.filterable) {
            break;
          } else {
            e.preventDefault();
          }
        case "Enter":
          if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.isComposing)) {
            if (mergedShowRef.value) {
              const pendingTmNode = (_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.getPendingTmNode();
              if (pendingTmNode) {
                handleToggleByTmNode(pendingTmNode);
              } else if (!props.filterable) {
                closeMenu();
                focusSelection();
              }
            } else {
              openMenu();
              if (props.tag && activeWithoutMenuOpenRef.value) {
                const beingCreatedOption = beingCreatedOptionsRef.value[0];
                if (beingCreatedOption) {
                  const optionValue = beingCreatedOption[props.valueField];
                  const {
                    value: mergedValue
                  } = mergedValueRef;
                  if (props.multiple) {
                    if (Array.isArray(mergedValue) && mergedValue.includes(optionValue)) ; else {
                      handleToggleByOption(beingCreatedOption);
                    }
                  } else {
                    handleToggleByOption(beingCreatedOption);
                  }
                }
              }
            }
          }
          e.preventDefault();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (props.loading) return;
          if (mergedShowRef.value) {
            (_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.prev();
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (props.loading) return;
          if (mergedShowRef.value) {
            (_d = menuRef.value) === null || _d === void 0 ? void 0 : _d.next();
          } else {
            openMenu();
          }
          break;
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closeMenu();
          }
          (_e = triggerRef.value) === null || _e === void 0 ? void 0 : _e.focus();
          break;
      }
    }
    function focusSelection() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function focusSelectionInput() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
    }
    function handleTriggerOrMenuResize() {
      var _a;
      if (!mergedShowRef.value) return;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    updateMemorizedOptions();
    watch$1(toRef$2(props, "options"), updateMemorizedOptions);
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      focusInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
      },
      blur: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      blurInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blurInput();
      }
    };
    const cssVarsRef = computed$2(() => {
      const {
        self: {
          menuBoxShadow
        }
      } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      treeMate: treeMateRef,
      isMounted: isMounted(),
      triggerRef,
      menuRef,
      pattern: patternRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      followerRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      focused: focusedRef,
      activeWithoutMenuOpen: activeWithoutMenuOpenRef,
      inlineThemeDisabled,
      onTriggerInputFocus,
      onTriggerInputBlur,
      handleTriggerOrMenuResize,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuTabOut,
      handleTriggerClick,
      handleToggle: handleToggleByTmNode,
      handleDeleteOption: handleToggleByOption,
      handlePatternInput,
      handleClear,
      handleTriggerBlur,
      handleTriggerFocus,
      handleKeydown,
      handleMenuAfterLeave,
      handleMenuClickOutside,
      handleMenuScroll,
      handleMenuKeydown: handleKeydown,
      handleMenuMousedown,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    return h$2("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h$2(Binder, null, {
      default: () => [h$2(VTarget, null, {
        default: () => h$2(NInternalSelection, {
          ref: "triggerRef",
          inlineThemeDisabled: this.inlineThemeDisabled,
          status: this.mergedStatus,
          inputProps: this.inputProps,
          clsPrefix: this.mergedClsPrefix,
          showArrow: this.showArrow,
          maxTagCount: this.maxTagCount,
          ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
          bordered: this.mergedBordered,
          active: this.activeWithoutMenuOpen || this.mergedShow,
          pattern: this.pattern,
          placeholder: this.localizedPlaceholder,
          selectedOption: this.selectedOption,
          selectedOptions: this.selectedOptions,
          multiple: this.multiple,
          renderTag: this.renderTag,
          renderLabel: this.renderLabel,
          filterable: this.filterable,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          size: this.mergedSize,
          theme: this.mergedTheme.peers.InternalSelection,
          labelField: this.labelField,
          valueField: this.valueField,
          themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
          loading: this.loading,
          focused: this.focused,
          onClick: this.handleTriggerClick,
          onDeleteOption: this.handleDeleteOption,
          onPatternInput: this.handlePatternInput,
          onClear: this.handleClear,
          onBlur: this.handleTriggerBlur,
          onFocus: this.handleTriggerFocus,
          onKeydown: this.handleKeydown,
          onPatternBlur: this.onTriggerInputBlur,
          onPatternFocus: this.onTriggerInputFocus,
          onResize: this.handleTriggerOrMenuResize,
          ignoreComposition: this.ignoreComposition
        }, {
          arrow: () => {
            var _a, _b;
            return [(_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a)];
          }
        })
      }), h$2(VFollower, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h$2(Transition$1, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var _a, _b, _c;
            if (!(this.mergedShow || this.displayDirective === "show")) {
              return null;
            }
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return withDirectives(h$2(NInternalSelectMenu, Object.assign({}, this.menuProps, {
              ref: "menuRef",
              onResize: this.handleTriggerOrMenuResize,
              inlineThemeDisabled: this.inlineThemeDisabled,
              virtualScroll: this.consistentMenuWidth && this.virtualScroll,
              class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (_b = this.menuProps) === null || _b === void 0 ? void 0 : _b.class],
              clsPrefix: this.mergedClsPrefix,
              focusable: true,
              labelField: this.labelField,
              valueField: this.valueField,
              autoPending: true,
              nodeProps: this.nodeProps,
              theme: this.mergedTheme.peers.InternalSelectMenu,
              themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
              treeMate: this.treeMate,
              multiple: this.multiple,
              size: this.menuSize,
              renderOption: this.renderOption,
              renderLabel: this.renderLabel,
              value: this.mergedValue,
              style: [(_c = this.menuProps) === null || _c === void 0 ? void 0 : _c.style, this.cssVars],
              onToggle: this.handleToggle,
              onScroll: this.handleMenuScroll,
              onFocus: this.handleMenuFocus,
              onBlur: this.handleMenuBlur,
              onKeydown: this.handleMenuKeydown,
              onTabOut: this.handleMenuTabOut,
              onMousedown: this.handleMenuMousedown,
              show: this.mergedShow,
              showCheckmark: this.showCheckmark,
              resetMenuOnOptionsChange: this.resetMenuOnOptionsChange
            }), {
              empty: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).empty) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              },
              header: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).header) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              },
              action: () => {
                var _a2, _b2;
                return [(_b2 = (_a2 = this.$slots).action) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
              }
            }), this.displayDirective === "show" ? [[vShow, this.mergedShow], [clickoutside, this.handleMenuClickOutside, void 0, {
              capture: true
            }]] : [[clickoutside, this.handleMenuClickOutside, void 0, {
              capture: true
            }]]);
          }
        })
      })]
    }));
  }
});

const sizeVariables = {
  railHeight: '4px',
  railWidthVertical: '4px',
  handleSize: '18px',
  dotHeight: '8px',
  dotWidth: '8px',
  dotBorderRadius: '4px'
};

function self$1(vars) {
  const indicatorColor = 'rgba(0, 0, 0, .85)';
  const boxShadow = '0 2px 8px 0 rgba(0, 0, 0, 0.12)';
  const {
    railColor,
    primaryColor,
    baseColor,
    cardColor,
    modalColor,
    popoverColor,
    borderRadius,
    fontSize,
    opacityDisabled
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    fontSize,
    markFontSize: fontSize,
    railColor,
    railColorHover: railColor,
    fillColor: primaryColor,
    fillColorHover: primaryColor,
    opacityDisabled,
    handleColor: '#FFF',
    dotColor: cardColor,
    dotColorModal: modalColor,
    dotColorPopover: popoverColor,
    handleBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
    handleBoxShadowHover: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
    handleBoxShadowActive: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
    handleBoxShadowFocus: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
    indicatorColor,
    indicatorBoxShadow: boxShadow,
    indicatorTextColor: baseColor,
    indicatorBorderRadius: borderRadius,
    dotBorder: `2px solid ${railColor}`,
    dotBorderActive: `2px solid ${primaryColor}`,
    dotBoxShadow: ''
  });
}
const sliderLight = {
  common: derived,
  self: self$1
};

const commonVars = {
  buttonHeightSmall: '14px',
  buttonHeightMedium: '18px',
  buttonHeightLarge: '22px',
  buttonWidthSmall: '14px',
  buttonWidthMedium: '18px',
  buttonWidthLarge: '22px',
  buttonWidthPressedSmall: '20px',
  buttonWidthPressedMedium: '24px',
  buttonWidthPressedLarge: '28px',
  railHeightSmall: '18px',
  railHeightMedium: '22px',
  railHeightLarge: '26px',
  railWidthSmall: '32px',
  railWidthMedium: '40px',
  railWidthLarge: '48px'
};

function self(vars) {
  const {
    primaryColor,
    opacityDisabled,
    borderRadius,
    textColor3
  } = vars;
  const railOverlayColor = 'rgba(0, 0, 0, .14)';
  return Object.assign(Object.assign({}, commonVars), {
    iconColor: textColor3,
    textColor: 'white',
    loadingColor: primaryColor,
    opacityDisabled,
    railColor: railOverlayColor,
    railColorActive: primaryColor,
    buttonBoxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)',
    buttonColor: '#FFF',
    railBorderRadiusSmall: borderRadius,
    railBorderRadiusMedium: borderRadius,
    railBorderRadiusLarge: borderRadius,
    buttonBorderRadiusSmall: borderRadius,
    buttonBorderRadiusMedium: borderRadius,
    buttonBorderRadiusLarge: borderRadius,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`
  });
}
const switchLight = {
  common: derived,
  self
};

// vars:
// --n-bezier
// --n-dot-border
// --n-dot-border-active
// --n-dot-border-radius
// --n-dot-box-shadow
// --n-dot-color
// --n-dot-color-modal
// --n-dot-color-popover
// --n-dot-height
// --n-dot-width
// --n-fill-color
// --n-fill-color-hover
// --n-font-size
// --n-handle-box-shadow
// --n-handle-box-shadow-active
// --n-handle-box-shadow-focus
// --n-handle-box-shadow-hover
// --n-handle-color
// --n-handle-size
// --n-indicator-border-radius
// --n-indicator-box-shadow
// --n-indicator-color
// --n-indicator-text-color
// --n-rail-color
// --n-rail-color-hover
// --n-rail-height
// --n-rail-width-vertical
// --n-mark-font-size
const style$1 = c$1([cB('slider', `
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `, [cM('reverse', [cB('slider-handles', [cB('slider-handle-wrapper', `
 transform: translate(50%, -50%);
 `)]), cB('slider-dots', [cB('slider-dot', `
 transform: translateX(50%, -50%);
 `)]), cM('vertical', [cB('slider-handles', [cB('slider-handle-wrapper', `
 transform: translate(-50%, -50%);
 `)]), cB('slider-marks', [cB('slider-mark', `
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]), cB('slider-dots', [cB('slider-dot', `
 transform: translateX(-50%) translateY(0);
 `)])])]), cM('vertical', `
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `, [cB('slider-handles', `
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `, [cB('slider-handle-wrapper', `
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]), cB('slider-rail', `
 height: 100%;
 `, [cE('fill', `
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]), cM('with-mark', `
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `), cB('slider-marks', `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `, [cB('slider-mark', `
 transform: translateY(50%);
 white-space: nowrap;
 `)]), cB('slider-dots', `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `, [cB('slider-dot', `
 transform: translateX(-50%) translateY(50%);
 `)])]), cM('disabled', `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `, [cB('slider-handle', `
 cursor: not-allowed;
 `)]), cM('with-mark', `
 width: 100%;
 margin: 8px 0 32px 0;
 `), c$1('&:hover', [cB('slider-rail', {
  backgroundColor: 'var(--n-rail-color-hover)'
}, [cE('fill', {
  backgroundColor: 'var(--n-fill-color-hover)'
})]), cB('slider-handle', {
  boxShadow: 'var(--n-handle-box-shadow-hover)'
})]), cM('active', [cB('slider-rail', {
  backgroundColor: 'var(--n-rail-color-hover)'
}, [cE('fill', {
  backgroundColor: 'var(--n-fill-color-hover)'
})]), cB('slider-handle', {
  boxShadow: 'var(--n-handle-box-shadow-hover)'
})]), cB('slider-marks', `
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cB('slider-mark', `
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]), cB('slider-rail', `
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `, [cE('fill', `
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]), cB('slider-handles', `
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `, [cB('slider-handle-wrapper', `
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `, [cB('slider-handle', `
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `, [c$1('&:hover', `
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]), c$1('&:focus', [cB('slider-handle', `
 box-shadow: var(--n-handle-box-shadow-focus);
 `, [c$1('&:hover', `
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]), cB('slider-dots', `
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cM('transition-disabled', [cB('slider-dot', 'transition: none;')]), cB('slider-dot', `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `, [cM('active', 'border: var(--n-dot-border-active);')])])]), cB('slider-handle-indicator', `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [fadeInScaleUpTransition()]), cB('slider-handle-indicator', `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [cM('top', `
 margin-bottom: 12px;
 `), cM('right', `
 margin-left: 12px;
 `), cM('bottom', `
 margin-top: 12px;
 `), cM('left', `
 margin-right: 12px;
 `), fadeInScaleUpTransition()]), insideModal(cB('slider', [cB('slider-dot', 'background-color: var(--n-dot-color-modal);')])), insidePopover(cB('slider', [cB('slider-dot', 'background-color: var(--n-dot-color-popover);')]))]);

const {onBeforeUpdate} = await importShared('vue');

function isTouchEvent(e) {
  return window.TouchEvent && e instanceof window.TouchEvent;
}
function useRefs() {
  const refs = new Map();
  const setRefs = index => el => {
    refs.set(index, el);
  };
  onBeforeUpdate(() => {
    refs.clear();
  });
  return [refs, setRefs];
}

const {computed: computed$1,defineComponent: defineComponent$1,h: h$1,nextTick,onBeforeUnmount,ref: ref$1,toRef: toRef$1,Transition,watch} = await importShared('vue');
// ref: https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button
const eventButtonLeft = 0;
const sliderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  defaultValue: {
    type: [Number, Array],
    default: 0
  },
  marks: Object,
  disabled: {
    type: Boolean,
    default: undefined
  },
  formatTooltip: Function,
  keyboard: {
    type: Boolean,
    default: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  value: [Number, Array],
  placement: String,
  showTooltip: {
    type: Boolean,
    default: undefined
  },
  tooltip: {
    type: Boolean,
    default: true
  },
  vertical: Boolean,
  reverse: Boolean,
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array],
  onDragstart: [Function],
  onDragend: [Function]
});
const NSlider = defineComponent$1({
  name: 'Slider',
  props: sliderProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('Slider', '-slider', style$1, sliderLight, props, mergedClsPrefixRef);
    // dom ref
    const handleRailRef = ref$1(null);
    const [handleRefs, setHandleRefs] = useRefs();
    const [followerRefs, setFollowerRefs] = useRefs();
    const followerEnabledIndexSetRef = ref$1(new Set());
    // data ref
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const precisionRef = computed$1(() => {
      const {
        step
      } = props;
      if (Number(step) <= 0 || step === 'mark') return 0;
      const stepString = step.toString();
      let precision = 0;
      if (stepString.includes('.')) {
        precision = stepString.length - stepString.indexOf('.') - 1;
      }
      return precision;
    });
    const uncontrolledValueRef = ref$1(props.defaultValue);
    const controlledValueRef = toRef$1(props, 'value');
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const arrifiedValueRef = computed$1(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      return (props.range ? mergedValue : [mergedValue]).map(clampValue);
    });
    const handleCountExceeds2Ref = computed$1(() => arrifiedValueRef.value.length > 2);
    const mergedPlacementRef = computed$1(() => {
      return props.placement === undefined ? props.vertical ? 'right' : 'top' : props.placement;
    });
    const markValuesRef = computed$1(() => {
      const {
        marks
      } = props;
      return marks ? Object.keys(marks).map(Number.parseFloat) : null;
    });
    // status ref
    const activeIndexRef = ref$1(-1);
    const previousIndexRef = ref$1(-1);
    const hoverIndexRef = ref$1(-1);
    const draggingRef = ref$1(false);
    // style ref
    const dotTransitionDisabledRef = ref$1(false);
    const styleDirectionRef = computed$1(() => {
      const {
        vertical,
        reverse
      } = props;
      const left = reverse ? 'right' : 'left';
      const bottom = reverse ? 'top' : 'bottom';
      return vertical ? bottom : left;
    });
    const fillStyleRef = computed$1(() => {
      if (handleCountExceeds2Ref.value) return;
      const values = arrifiedValueRef.value;
      const start = valueToPercentage(props.range ? Math.min(...values) : props.min);
      const end = valueToPercentage(props.range ? Math.max(...values) : values[0]);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return props.vertical ? {
        [styleDirection]: `${start}%`,
        height: `${end - start}%`
      } : {
        [styleDirection]: `${start}%`,
        width: `${end - start}%`
      };
    });
    const markInfosRef = computed$1(() => {
      const mergedMarks = [];
      const {
        marks
      } = props;
      if (marks) {
        const orderValues = arrifiedValueRef.value.slice();
        orderValues.sort((a, b) => a - b);
        const {
          value: styleDirection
        } = styleDirectionRef;
        const {
          value: handleCountExceeds2
        } = handleCountExceeds2Ref;
        const {
          range
        } = props;
        const isActive = handleCountExceeds2 ? () => false : num => range ? num >= orderValues[0] && num <= orderValues[orderValues.length - 1] : num <= orderValues[0];
        for (const key of Object.keys(marks)) {
          const num = Number(key);
          mergedMarks.push({
            active: isActive(num),
            key: num,
            label: marks[key],
            style: {
              [styleDirection]: `${valueToPercentage(num)}%`
            }
          });
        }
      }
      return mergedMarks;
    });
    function getHandleStyle(value, index) {
      const percentage = valueToPercentage(value);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return {
        [styleDirection]: `${percentage}%`,
        zIndex: index === activeIndexRef.value ? 1 : 0
      };
    }
    function isShowTooltip(index) {
      return props.showTooltip || hoverIndexRef.value === index || activeIndexRef.value === index && draggingRef.value;
    }
    function shouldKeepTooltipTransition(index) {
      if (!draggingRef.value) return true;
      return !(activeIndexRef.value === index && previousIndexRef.value === index);
    }
    function focusActiveHandle(index) {
      var _a;
      if (~index) {
        activeIndexRef.value = index;
        (_a = handleRefs.get(index)) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }
    function syncPosition() {
      followerRefs.forEach((inst, index) => {
        if (isShowTooltip(index)) inst.syncPosition();
      });
    }
    function doUpdateValue(value) {
      const {
        'onUpdate:value': _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function dispatchValueUpdate(value) {
      const {
        range
      } = props;
      if (range) {
        if (Array.isArray(value)) {
          const {
            value: oldValues
          } = arrifiedValueRef;
          if (value.join() !== oldValues.join()) {
            doUpdateValue(value);
          }
        }
      } else if (!Array.isArray(value)) {
        const oldValue = arrifiedValueRef.value[0];
        if (oldValue !== value) {
          doUpdateValue(value);
        }
      }
    }
    function doDispatchValue(value, index) {
      if (props.range) {
        const values = arrifiedValueRef.value.slice();
        values.splice(index, 1, value);
        dispatchValueUpdate(values);
      } else {
        dispatchValueUpdate(value);
      }
    }
    // value conversion
    function sanitizeValue(value, currentValue, stepBuffer) {
      const stepping = stepBuffer !== undefined;
      if (!stepBuffer) {
        stepBuffer = value - currentValue > 0 ? 1 : -1;
      }
      const markValues = markValuesRef.value || [];
      const {
        step
      } = props;
      if (step === 'mark') {
        const closestMark = getClosestMark(value, markValues.concat(currentValue), stepping ? stepBuffer : undefined);
        return closestMark ? closestMark.value : currentValue;
      }
      if (step <= 0) return currentValue;
      const {
        value: precision
      } = precisionRef;
      let closestMark;
      // if it is a stepping, priority will be given to the marks
      // on the rail, otherwise take the nearest one
      if (stepping) {
        const currentStep = Number((currentValue / step).toFixed(precision));
        const actualStep = Math.floor(currentStep);
        const leftStep = currentStep > actualStep ? actualStep : actualStep - 1;
        const rightStep = currentStep < actualStep ? actualStep : actualStep + 1;
        closestMark = getClosestMark(currentValue, [Number((leftStep * step).toFixed(precision)), Number((rightStep * step).toFixed(precision)), ...markValues], stepBuffer);
      } else {
        const roundValue = getRoundValue(value);
        closestMark = getClosestMark(value, [...markValues, roundValue]);
      }
      return closestMark ? clampValue(closestMark.value) : currentValue;
    }
    function clampValue(value) {
      return Math.min(props.max, Math.max(props.min, value));
    }
    function valueToPercentage(value) {
      const {
        max,
        min
      } = props;
      return (value - min) / (max - min) * 100;
    }
    function percentageToValue(percentage) {
      const {
        max,
        min
      } = props;
      return min + (max - min) * percentage;
    }
    function getRoundValue(value) {
      const {
        step,
        min
      } = props;
      if (Number(step) <= 0 || step === 'mark') return value;
      const newValue = Math.round((value - min) / step) * step + min;
      return Number(newValue.toFixed(precisionRef.value));
    }
    function getClosestMark(currentValue, markValues = markValuesRef.value, buffer) {
      if (!(markValues === null || markValues === void 0 ? void 0 : markValues.length)) return null;
      let closestMark = null;
      let index = -1;
      while (++index < markValues.length) {
        const diff = markValues[index] - currentValue;
        const distance = Math.abs(diff);
        if (
        // find marks in the same direction
        (buffer === undefined || diff * buffer > 0) && (closestMark === null || distance < closestMark.distance)) {
          closestMark = {
            index,
            distance,
            value: markValues[index]
          };
        }
      }
      return closestMark;
    }
    function getPointValue(event) {
      const railEl = handleRailRef.value;
      if (!railEl) return;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const railRect = railEl.getBoundingClientRect();
      let percentage;
      if (props.vertical) {
        percentage = (railRect.bottom - touchEvent.clientY) / railRect.height;
      } else {
        percentage = (touchEvent.clientX - railRect.left) / railRect.width;
      }
      if (props.reverse) {
        percentage = 1 - percentage;
      }
      return percentageToValue(percentage);
    }
    // dom event handle
    function handleRailKeyDown(e) {
      if (mergedDisabledRef.value || !props.keyboard) return;
      const {
        vertical,
        reverse
      } = props;
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          handleStepValue(vertical && reverse ? -1 : 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleStepValue(!vertical && reverse ? -1 : 1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleStepValue(vertical && reverse ? 1 : -1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handleStepValue(!vertical && reverse ? 1 : -1);
          break;
      }
    }
    function handleStepValue(ratio) {
      const activeIndex = activeIndexRef.value;
      if (activeIndex === -1) return;
      const {
        step
      } = props;
      const currentValue = arrifiedValueRef.value[activeIndex];
      const nextValue = Number(step) <= 0 || step === 'mark' ? currentValue : currentValue + step * ratio;
      doDispatchValue(
      // Avoid the number of value does not change when `step` is null
      sanitizeValue(nextValue, currentValue, ratio > 0 ? 1 : -1), activeIndex);
    }
    function handleRailMouseDown(event) {
      var _a, _b;
      if (mergedDisabledRef.value) return;
      if (!isTouchEvent(event) && event.button !== eventButtonLeft) {
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === undefined) return;
      const values = arrifiedValueRef.value.slice();
      const activeIndex = props.range ? (_b = (_a = getClosestMark(pointValue, values)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1 : 0;
      if (activeIndex !== -1) {
        // avoid triggering scrolling on touch
        event.preventDefault();
        focusActiveHandle(activeIndex);
        startDragging();
        doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
      }
    }
    function startDragging() {
      if (!draggingRef.value) {
        draggingRef.value = true;
        if (props.onDragstart) call(props.onDragstart);
        on('touchend', document, handleMouseUp);
        on('mouseup', document, handleMouseUp);
        on('touchmove', document, handleMouseMove);
        on('mousemove', document, handleMouseMove);
      }
    }
    function stopDragging() {
      if (draggingRef.value) {
        draggingRef.value = false;
        if (props.onDragend) call(props.onDragend);
        off('touchend', document, handleMouseUp);
        off('mouseup', document, handleMouseUp);
        off('touchmove', document, handleMouseMove);
        off('mousemove', document, handleMouseMove);
      }
    }
    function handleMouseMove(event) {
      const {
        value: activeIndex
      } = activeIndexRef;
      if (!draggingRef.value || activeIndex === -1) {
        stopDragging();
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === undefined) return;
      doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
    }
    function handleMouseUp() {
      stopDragging();
    }
    function handleHandleFocus(index) {
      activeIndexRef.value = index;
      // Wake focus style
      if (!mergedDisabledRef.value) {
        hoverIndexRef.value = index;
      }
    }
    function handleHandleBlur(index) {
      if (activeIndexRef.value === index) {
        activeIndexRef.value = -1;
        stopDragging();
      }
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    function handleHandleMouseEnter(index) {
      hoverIndexRef.value = index;
    }
    function handleHandleMouseLeave(index) {
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    watch(activeIndexRef, (_, previous) => void nextTick(() => previousIndexRef.value = previous));
    watch(mergedValueRef, () => {
      if (props.marks) {
        if (dotTransitionDisabledRef.value) return;
        dotTransitionDisabledRef.value = true;
        void nextTick(() => {
          dotTransitionDisabledRef.value = false;
        });
      }
      void nextTick(syncPosition);
    });
    onBeforeUnmount(() => {
      stopDragging();
    });
    const cssVarsRef = computed$1(() => {
      const {
        self: {
          markFontSize,
          railColor,
          railColorHover,
          fillColor,
          fillColorHover,
          handleColor,
          opacityDisabled,
          dotColor,
          dotColorModal,
          handleBoxShadow,
          handleBoxShadowHover,
          handleBoxShadowActive,
          handleBoxShadowFocus,
          dotBorder,
          dotBoxShadow,
          railHeight,
          railWidthVertical,
          handleSize,
          dotHeight,
          dotWidth,
          dotBorderRadius,
          fontSize,
          dotBorderActive,
          dotColorPopover
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-dot-border': dotBorder,
        '--n-dot-border-active': dotBorderActive,
        '--n-dot-border-radius': dotBorderRadius,
        '--n-dot-box-shadow': dotBoxShadow,
        '--n-dot-color': dotColor,
        '--n-dot-color-modal': dotColorModal,
        '--n-dot-color-popover': dotColorPopover,
        '--n-dot-height': dotHeight,
        '--n-dot-width': dotWidth,
        '--n-fill-color': fillColor,
        '--n-fill-color-hover': fillColorHover,
        '--n-font-size': fontSize,
        '--n-handle-box-shadow': handleBoxShadow,
        '--n-handle-box-shadow-active': handleBoxShadowActive,
        '--n-handle-box-shadow-focus': handleBoxShadowFocus,
        '--n-handle-box-shadow-hover': handleBoxShadowHover,
        '--n-handle-color': handleColor,
        '--n-handle-size': handleSize,
        '--n-opacity-disabled': opacityDisabled,
        '--n-rail-color': railColor,
        '--n-rail-color-hover': railColorHover,
        '--n-rail-height': railHeight,
        '--n-rail-width-vertical': railWidthVertical,
        '--n-mark-font-size': markFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('slider', undefined, cssVarsRef, props) : undefined;
    const indicatorCssVarsRef = computed$1(() => {
      const {
        self: {
          fontSize,
          indicatorColor,
          indicatorBoxShadow,
          indicatorTextColor,
          indicatorBorderRadius
        }
      } = themeRef.value;
      return {
        '--n-font-size': fontSize,
        '--n-indicator-border-radius': indicatorBorderRadius,
        '--n-indicator-box-shadow': indicatorBoxShadow,
        '--n-indicator-color': indicatorColor,
        '--n-indicator-text-color': indicatorTextColor
      };
    });
    const indicatorThemeClassHandle = inlineThemeDisabled ? useThemeClass('slider-indicator', undefined, indicatorCssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      mergedPlacement: mergedPlacementRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      dotTransitionDisabled: dotTransitionDisabledRef,
      markInfos: markInfosRef,
      isShowTooltip,
      shouldKeepTooltipTransition,
      handleRailRef,
      setHandleRefs,
      setFollowerRefs,
      fillStyle: fillStyleRef,
      getHandleStyle,
      activeIndex: activeIndexRef,
      arrifiedValues: arrifiedValueRef,
      followerEnabledIndexSet: followerEnabledIndexSetRef,
      handleRailMouseDown,
      handleHandleFocus,
      handleHandleBlur,
      handleHandleMouseEnter,
      handleHandleMouseLeave,
      handleRailKeyDown,
      indicatorCssVars: inlineThemeDisabled ? undefined : indicatorCssVarsRef,
      indicatorThemeClass: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.themeClass,
      indicatorOnRender: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      themeClass,
      formatTooltip
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h$1("div", {
      class: [`${mergedClsPrefix}-slider`, themeClass, {
        [`${mergedClsPrefix}-slider--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-slider--active`]: this.activeIndex !== -1,
        [`${mergedClsPrefix}-slider--with-mark`]: this.marks,
        [`${mergedClsPrefix}-slider--vertical`]: this.vertical,
        [`${mergedClsPrefix}-slider--reverse`]: this.reverse
      }],
      style: this.cssVars,
      onKeydown: this.handleRailKeyDown,
      onMousedown: this.handleRailMouseDown,
      onTouchstart: this.handleRailMouseDown
    }, h$1("div", {
      class: `${mergedClsPrefix}-slider-rail`
    }, h$1("div", {
      class: `${mergedClsPrefix}-slider-rail__fill`,
      style: this.fillStyle
    }), this.marks ? h$1("div", {
      class: [`${mergedClsPrefix}-slider-dots`, this.dotTransitionDisabled && `${mergedClsPrefix}-slider-dots--transition-disabled`]
    }, this.markInfos.map(mark => h$1("div", {
      key: mark.key,
      class: [`${mergedClsPrefix}-slider-dot`, {
        [`${mergedClsPrefix}-slider-dot--active`]: mark.active
      }],
      style: mark.style
    }))) : null, h$1("div", {
      ref: "handleRailRef",
      class: `${mergedClsPrefix}-slider-handles`
    }, this.arrifiedValues.map((value, index) => {
      const showTooltip = this.isShowTooltip(index);
      return h$1(Binder, null, {
        default: () => [h$1(VTarget, null, {
          default: () => h$1("div", {
            ref: this.setHandleRefs(index),
            class: `${mergedClsPrefix}-slider-handle-wrapper`,
            tabindex: this.mergedDisabled ? -1 : 0,
            role: "slider",
            "aria-valuenow": value,
            "aria-valuemin": this.min,
            "aria-valuemax": this.max,
            "aria-orientation": this.vertical ? 'vertical' : 'horizontal',
            "aria-disabled": this.disabled,
            style: this.getHandleStyle(value, index),
            onFocus: () => {
              this.handleHandleFocus(index);
            },
            onBlur: () => {
              this.handleHandleBlur(index);
            },
            onMouseenter: () => {
              this.handleHandleMouseEnter(index);
            },
            onMouseleave: () => {
              this.handleHandleMouseLeave(index);
            }
          }, resolveSlot(this.$slots.thumb, () => [h$1("div", {
            class: `${mergedClsPrefix}-slider-handle`
          })]))
        }), this.tooltip && h$1(VFollower, {
          ref: this.setFollowerRefs(index),
          show: showTooltip,
          to: this.adjustedTo,
          enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(index),
          teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
          placement: this.mergedPlacement,
          containerClass: this.namespace
        }, {
          default: () => h$1(Transition, {
            name: "fade-in-scale-up-transition",
            appear: this.isMounted,
            css: this.shouldKeepTooltipTransition(index),
            onEnter: () => {
              this.followerEnabledIndexSet.add(index);
            },
            onAfterLeave: () => {
              this.followerEnabledIndexSet.delete(index);
            }
          }, {
            default: () => {
              var _a;
              if (showTooltip) {
                (_a = this.indicatorOnRender) === null || _a === void 0 ? void 0 : _a.call(this);
                return h$1("div", {
                  class: [`${mergedClsPrefix}-slider-handle-indicator`, this.indicatorThemeClass, `${mergedClsPrefix}-slider-handle-indicator--${this.mergedPlacement}`],
                  style: this.indicatorCssVars
                }, typeof formatTooltip === 'function' ? formatTooltip(value) : value);
              }
              return null;
            }
          })
        })]
      });
    })), this.marks ? h$1("div", {
      class: `${mergedClsPrefix}-slider-marks`
    }, this.markInfos.map(mark => h$1("div", {
      key: mark.key,
      class: `${mergedClsPrefix}-slider-mark`,
      style: mark.style
    }, typeof mark.label === 'function' ? mark.label() : mark.label))) : null));
  }
});

// vars:
// --n-bezier
// --n-button-border-radius
// --n-button-box-shadow
// --n-button-color
// --n-button-width
// --n-button-width-pressed
// --n-height
// --n-offset
// --n-rail-border-radius
// --n-rail-color
// --n-rail-color-active
// --n-rail-height
// --n-rail-width
// --n-width
// --n-box-shadow-focus
// --n-loading-color
// --n-text-color
// --n-icon-color
const style = cB('switch', `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [cE('children-placeholder', `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), cE('rail-placeholder', `
 display: flex;
 flex-wrap: none;
 `), cE('button-placeholder', `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), cB('base-loading', `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition({
  left: '50%',
  top: '50%',
  originalTransform: 'translateX(-50%) translateY(-50%)'
})]), cE('checked, unchecked', `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), cE('checked', `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), cE('unchecked', `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), c$1('&:focus', [cE('rail', `
 box-shadow: var(--n-box-shadow-focus);
 `)]), cM('round', [cE('rail', 'border-radius: calc(var(--n-rail-height) / 2);', [cE('button', 'border-radius: calc(var(--n-button-height) / 2);')])]), cNotM('disabled', [cNotM('icon', [cM('rubber-band', [cM('pressed', [cE('rail', [cE('button', 'max-width: var(--n-button-width-pressed);')])]), cE('rail', [c$1('&:active', [cE('button', 'max-width: var(--n-button-width-pressed);')])]), cM('active', [cM('pressed', [cE('rail', [cE('button', 'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));')])]), cE('rail', [c$1('&:active', [cE('button', 'left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));')])])])])])]), cM('active', [cE('rail', [cE('button', 'left: calc(100% - var(--n-button-width) - var(--n-offset))')])]), cE('rail', `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE('button-icon', `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [iconSwitchTransition()]), cE('button', `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), cM('active', [cE('rail', 'background-color: var(--n-rail-color-active);')]), cM('loading', [cE('rail', `
 cursor: wait;
 `)]), cM('disabled', [cE('rail', `
 cursor: not-allowed;
 opacity: .5;
 `)])]);

const {computed,defineComponent,h,ref,toRef,watchEffect} = await importShared('vue');
const switchProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  round: {
    type: Boolean,
    default: true
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  railStyle: Function,
  rubberBand: {
    type: Boolean,
    default: true
  },
  /** @deprecated */
  onChange: [Function, Array]
});
let supportCssMax;
const NSwitch = defineComponent({
  name: "Switch",
  props: switchProps,
  slots: Object,
  setup(props) {
    if (supportCssMax === void 0) {
      if (typeof CSS !== "undefined") {
        if (typeof CSS.supports !== "undefined") {
          supportCssMax = CSS.supports("width", "max(1px)");
        } else {
          supportCssMax = false;
        }
      } else {
        supportCssMax = true;
      }
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Switch", "-switch", style, switchLight, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedRef = computed(() => {
      return mergedValueRef.value === props.checkedValue;
    });
    const pressedRef = ref(false);
    const focusedRef = ref(false);
    const mergedRailStyleRef = computed(() => {
      const {
        railStyle
      } = props;
      if (!railStyle) return void 0;
      return railStyle({
        focused: focusedRef.value,
        checked: checkedRef.value
      });
    });
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onChange,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (_onUpdateValue) call(_onUpdateValue, value);
      if (onUpdateValue) call(onUpdateValue, value);
      if (onChange) call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doFocus() {
      const {
        nTriggerFormFocus
      } = formItem;
      nTriggerFormFocus();
    }
    function doBlur() {
      const {
        nTriggerFormBlur
      } = formItem;
      nTriggerFormBlur();
    }
    function handleClick() {
      if (props.loading || mergedDisabledRef.value) return;
      if (mergedValueRef.value !== props.checkedValue) {
        doUpdateValue(props.checkedValue);
      } else {
        doUpdateValue(props.uncheckedValue);
      }
    }
    function handleFocus() {
      focusedRef.value = true;
      doFocus();
    }
    function handleBlur() {
      focusedRef.value = false;
      doBlur();
      pressedRef.value = false;
    }
    function handleKeyup(e) {
      if (props.loading || mergedDisabledRef.value) return;
      if (e.key === " ") {
        if (mergedValueRef.value !== props.checkedValue) {
          doUpdateValue(props.checkedValue);
        } else {
          doUpdateValue(props.uncheckedValue);
        }
        pressedRef.value = false;
      }
    }
    function handleKeydown(e) {
      if (props.loading || mergedDisabledRef.value) return;
      if (e.key === " ") {
        e.preventDefault();
        pressedRef.value = true;
      }
    }
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        self: {
          opacityDisabled,
          railColor,
          railColorActive,
          buttonBoxShadow,
          buttonColor,
          boxShadowFocus,
          loadingColor,
          textColor,
          iconColor,
          [createKey("buttonHeight", size)]: buttonHeight,
          [createKey("buttonWidth", size)]: buttonWidth,
          [createKey("buttonWidthPressed", size)]: buttonWidthPressed,
          [createKey("railHeight", size)]: railHeight,
          [createKey("railWidth", size)]: railWidth,
          [createKey("railBorderRadius", size)]: railBorderRadius,
          [createKey("buttonBorderRadius", size)]: buttonBorderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      let offset;
      let height;
      let width;
      if (supportCssMax) {
        offset = `calc((${railHeight} - ${buttonHeight}) / 2)`;
        height = `max(${railHeight}, ${buttonHeight})`;
        width = `max(${railWidth}, calc(${railWidth} + ${buttonHeight} - ${railHeight}))`;
      } else {
        offset = pxfy((depx(railHeight) - depx(buttonHeight)) / 2);
        height = pxfy(Math.max(depx(railHeight), depx(buttonHeight)));
        width = depx(railHeight) > depx(buttonHeight) ? railWidth : pxfy(depx(railWidth) + depx(buttonHeight) - depx(railHeight));
      }
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-button-border-radius": buttonBorderRadius,
        "--n-button-box-shadow": buttonBoxShadow,
        "--n-button-color": buttonColor,
        "--n-button-width": buttonWidth,
        "--n-button-width-pressed": buttonWidthPressed,
        "--n-button-height": buttonHeight,
        "--n-height": height,
        "--n-offset": offset,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-border-radius": railBorderRadius,
        "--n-rail-color": railColor,
        "--n-rail-color-active": railColorActive,
        "--n-rail-height": railHeight,
        "--n-rail-width": railWidth,
        "--n-width": width,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("switch", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    return {
      handleClick,
      handleBlur,
      handleFocus,
      handleKeyup,
      handleKeydown,
      mergedRailStyle: mergedRailStyleRef,
      pressed: pressedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      checked: checkedRef,
      mergedDisabled: mergedDisabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mergedDisabled,
      checked,
      mergedRailStyle,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const {
      checked: checkedSlot,
      unchecked: uncheckedSlot,
      icon: iconSlot,
      "checked-icon": checkedIconSlot,
      "unchecked-icon": uncheckedIconSlot
    } = $slots;
    const hasIcon = !(isSlotEmpty(iconSlot) && isSlotEmpty(checkedIconSlot) && isSlotEmpty(uncheckedIconSlot));
    return h("div", {
      role: "switch",
      "aria-checked": checked,
      class: [`${mergedClsPrefix}-switch`, this.themeClass, hasIcon && `${mergedClsPrefix}-switch--icon`, checked && `${mergedClsPrefix}-switch--active`, mergedDisabled && `${mergedClsPrefix}-switch--disabled`, this.round && `${mergedClsPrefix}-switch--round`, this.loading && `${mergedClsPrefix}-switch--loading`, this.pressed && `${mergedClsPrefix}-switch--pressed`, this.rubberBand && `${mergedClsPrefix}-switch--rubber-band`],
      tabindex: !this.mergedDisabled ? 0 : void 0,
      style: this.cssVars,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-switch__rail`,
      "aria-hidden": "true",
      style: mergedRailStyle
    }, resolveWrappedSlot(checkedSlot, (checkedSlotChildren) => resolveWrappedSlot(uncheckedSlot, (uncheckedSlotChildren) => {
      if (checkedSlotChildren || uncheckedSlotChildren) {
        return h("div", {
          "aria-hidden": true,
          class: `${mergedClsPrefix}-switch__children-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), checkedSlotChildren), h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), uncheckedSlotChildren));
      }
      return null;
    })), h("div", {
      class: `${mergedClsPrefix}-switch__button`
    }, resolveWrappedSlot(iconSlot, (icon) => resolveWrappedSlot(checkedIconSlot, (checkedIcon) => resolveWrappedSlot(uncheckedIconSlot, (uncheckedIcon) => {
      return h(NIconSwitchTransition, null, {
        default: () => this.loading ? h(NBaseLoading, {
          key: "loading",
          clsPrefix: mergedClsPrefix,
          strokeWidth: 20
        }) : this.checked && (checkedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: checkedIcon ? "checked-icon" : "icon"
        }, checkedIcon || icon) : !this.checked && (uncheckedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: uncheckedIcon ? "unchecked-icon" : "icon"
        }, uncheckedIcon || icon) : null
      });
    }))), resolveWrappedSlot(checkedSlot, (children) => children && h("div", {
      key: "checked",
      class: `${mergedClsPrefix}-switch__checked`
    }, children)), resolveWrappedSlot(uncheckedSlot, (children) => children && h("div", {
      key: "unchecked",
      class: `${mergedClsPrefix}-switch__unchecked`
    }, children)))));
  }
});

export { FinishedIcon, FocusDetector, NEmpty, NInternalSelectMenu, NInternalSelection, NSelect, NSlider, NSwitch, SubtreeNotLoadedError, VOverflow, VVirtualList, commonVariables, commonVars, createIndexGetter, createTmOptions, createTreeMate, emptyLight, emptyProps, flatten, getTitleAttribute, happensIn, internalSelectMenuLight, internalSelectionLight, mergeEventHandlers, selectLight, selectProps, self$5 as self, self$4 as self$1, self$2, sizeVariables, sliderProps, switchProps, useOnResize };
//# sourceMappingURL=Switch.DCUaofJ91767105581793.js.map
