import { importShared } from './index.BxB45aCK1767105581793.js';
import { createInjectionKey, warn as warn$1 } from './light.CLUJsvFB1767105581793.js';
import { off, on } from './use-merged-state.tu3_gbk31767105581793.js';
import { createId, getPreciseEventTarget, flatten as flatten$1 } from './Scrollbar.COIrvx-21767105581793.js';

const {ref: ref$1,readonly,watch: watch$1} = await importShared('vue');

function useFalseUntilTruthy(originalRef) {
    const currentRef = ref$1(!!originalRef.value);
    if (currentRef.value)
        return readonly(currentRef);
    const stop = watch$1(originalRef, (value) => {
        if (value) {
            currentRef.value = true;
            stop();
        }
    });
    return readonly(currentRef);
}

const {getCurrentInstance} = await importShared('vue');

function hasInstance() {
    return getCurrentInstance() !== null;
}
const isBrowser = typeof window !== 'undefined';

const drawerBodyInjectionKey = createInjectionKey('n-drawer-body');
const drawerInjectionKey = createInjectionKey('n-drawer');

const modalBodyInjectionKey = createInjectionKey('n-modal-body');
const modalProviderInjectionKey = createInjectionKey('n-modal-provider');
const modalInjectionKey = createInjectionKey('n-modal');

const popoverBodyInjectionKey = createInjectionKey('n-popover-body');

const {Fragment: Fragment$1,createTextVNode,Comment} = await importShared('vue');

function getSlot(scope, slots, slotName = 'default') {
    const slot = slots[slotName];
    if (slot === undefined) {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
    }
    return slot();
}
// o(n) flatten
function flatten(vNodes, filterCommentNode = true, result = []) {
    vNodes.forEach((vNode) => {
        if (vNode === null)
            return;
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
            if (vNode.children === null)
                return;
            if (Array.isArray(vNode.children)) {
                flatten(vNode.children, filterCommentNode, result);
            }
            // rawSlot
        }
        else if (vNode.type !== Comment) {
            result.push(vNode);
        }
    });
    return result;
}
function getFirstVNode(scope, slots, slotName = 'default') {
    const slot = slots[slotName];
    if (slot === undefined) {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] is empty.`);
    }
    const content = flatten(slot());
    // vue will normalize the slot, so slot must be an array
    if (content.length === 1) {
        return content[0];
    }
    else {
        throw new Error(`[vueuc/${scope}]: slot[${slotName}] should have exactly one child.`);
    }
}

const ctxKey = '@@coContext';
const clickoutside = {
    mounted(el, { value, modifiers }) {
        el[ctxKey] = {
            handler: undefined
        };
        if (typeof value === 'function') {
            el[ctxKey].handler = value;
            on('clickoutside', el, value, {
                capture: modifiers.capture
            });
        }
    },
    updated(el, { value, modifiers }) {
        const ctx = el[ctxKey];
        if (typeof value === 'function') {
            if (ctx.handler) {
                if (ctx.handler !== value) {
                    off('clickoutside', el, ctx.handler, {
                        capture: modifiers.capture
                    });
                    ctx.handler = value;
                    on('clickoutside', el, value, {
                        capture: modifiers.capture
                    });
                }
            }
            else {
                el[ctxKey].handler = value;
                on('clickoutside', el, value, {
                    capture: modifiers.capture
                });
            }
        }
        else {
            if (ctx.handler) {
                off('clickoutside', el, ctx.handler, {
                    capture: modifiers.capture
                });
                ctx.handler = undefined;
            }
        }
    },
    unmounted(el, { modifiers }) {
        const { handler } = el[ctxKey];
        if (handler) {
            off('clickoutside', el, handler, {
                capture: modifiers.capture
            });
        }
        el[ctxKey].handler = undefined;
    }
};

function warn(location, message) {
    console.error(`[vdirs/${location}]: ${message}`);
}

class ZIndexManager {
    constructor() {
        this.elementZIndex = new Map();
        this.nextZIndex = 2000;
    }
    get elementCount() {
        return this.elementZIndex.size;
    }
    ensureZIndex(el, zIndex) {
        const { elementZIndex } = this;
        if (zIndex !== undefined) {
            el.style.zIndex = `${zIndex}`;
            elementZIndex.delete(el);
            return;
        }
        const { nextZIndex } = this;
        if (elementZIndex.has(el)) {
            const currentZIndex = elementZIndex.get(el);
            if (currentZIndex + 1 === this.nextZIndex)
                return;
        }
        el.style.zIndex = `${nextZIndex}`;
        elementZIndex.set(el, nextZIndex);
        this.nextZIndex = nextZIndex + 1;
        this.squashState();
    }
    unregister(el, zIndex) {
        const { elementZIndex } = this;
        if (elementZIndex.has(el)) {
            elementZIndex.delete(el);
        }
        else if (zIndex === undefined) {
            warn('z-index-manager/unregister-element', 'Element not found when unregistering.');
        }
        this.squashState();
    }
    squashState() {
        const { elementCount } = this;
        if (!elementCount) {
            this.nextZIndex = 2000;
        }
        if (this.nextZIndex - elementCount > 2500)
            this.rearrange();
    }
    rearrange() {
        const elementZIndexPair = Array.from(this.elementZIndex.entries());
        elementZIndexPair.sort((pair1, pair2) => {
            return pair1[1] - pair2[1];
        });
        this.nextZIndex = 2000;
        elementZIndexPair.forEach((pair) => {
            const el = pair[0];
            const zIndex = this.nextZIndex++;
            if (`${zIndex}` !== el.style.zIndex)
                el.style.zIndex = `${zIndex}`;
        });
    }
}
const zIndexManager = new ZIndexManager();

const ctx = '@@ziContext';
// We don't expect manually bound zindex should be changed
const zindexable = {
    mounted(el, bindings) {
        const { value = {} } = bindings;
        const { zIndex, enabled } = value;
        el[ctx] = {
            enabled: !!enabled,
            initialized: false
        };
        if (enabled) {
            zIndexManager.ensureZIndex(el, zIndex);
            el[ctx].initialized = true;
        }
    },
    updated(el, bindings) {
        const { value = {} } = bindings;
        const { zIndex, enabled } = value;
        const cachedEnabled = el[ctx].enabled;
        if (enabled && !cachedEnabled) {
            zIndexManager.ensureZIndex(el, zIndex);
            el[ctx].initialized = true;
        }
        el[ctx].enabled = !!enabled;
    },
    unmounted(el, bindings) {
        if (!el[ctx].initialized)
            return;
        const { value = {} } = bindings;
        const { zIndex } = value;
        zIndexManager.unregister(el, zIndex);
    }
};

function resolveTo(selector) {
    if (typeof selector === 'string') {
        return document.querySelector(selector);
    }
    return selector() || null;
}

const {Teleport,h: h$1,toRef,computed,defineComponent: defineComponent$1} = await importShared('vue');
const LazyTeleport = defineComponent$1({
    name: 'LazyTeleport',
    props: {
        to: {
            type: [String, Object],
            default: undefined
        },
        disabled: Boolean,
        show: {
            type: Boolean,
            required: true
        }
    },
    setup(props) {
        return {
            showTeleport: useFalseUntilTruthy(toRef(props, 'show')),
            mergedTo: computed(() => {
                const { to } = props;
                return to !== null && to !== void 0 ? to : 'body';
            })
        };
    },
    render() {
        return this.showTeleport
            ? this.disabled
                ? getSlot('lazy-teleport', this.$slots)
                : h$1(Teleport, {
                    disabled: this.disabled,
                    to: this.mergedTo
                }, getSlot('lazy-teleport', this.$slots))
            : null;
    }
});

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// ref https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
function isHTMLElement(node) {
    return node instanceof HTMLElement;
}
function focusFirstDescendant(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (isHTMLElement(child)) {
            if (attemptFocus(child) || focusFirstDescendant(child)) {
                return true;
            }
        }
    }
    return false;
}
function focusLastDescendant(element) {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
        const child = element.childNodes[i];
        if (isHTMLElement(child)) {
            if (attemptFocus(child) || focusLastDescendant(child)) {
                return true;
            }
        }
    }
    return false;
}
function attemptFocus(element) {
    if (!isFocusable(element)) {
        return false;
    }
    try {
        element.focus({ preventScroll: true });
    }
    catch (e) { }
    return document.activeElement === element;
}
function isFocusable(element) {
    if (element.tabIndex > 0 ||
        (element.tabIndex === 0 && element.getAttribute('tabIndex') !== null)) {
        return true;
    }
    if (element.getAttribute('disabled')) {
        return false;
    }
    switch (element.nodeName) {
        case 'A':
            return (!!element.href &&
                element.rel !== 'ignore');
        case 'INPUT':
            return (element.type !== 'hidden' &&
                element.type !== 'file');
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        default:
            return false;
    }
}

const {h,defineComponent,ref,Fragment,onMounted,onBeforeUnmount,watch} = await importShared('vue');
let stack = [];
const FocusTrap = defineComponent({
    name: 'FocusTrap',
    props: {
        disabled: Boolean,
        active: Boolean,
        autoFocus: {
            type: Boolean,
            default: true
        },
        onEsc: Function,
        initialFocusTo: [String, Function],
        finalFocusTo: [String, Function],
        returnFocusOnDeactivated: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const id = createId();
        const focusableStartRef = ref(null);
        const focusableEndRef = ref(null);
        let activated = false;
        let ignoreInternalFocusChange = false;
        const lastFocusedElement = typeof document === 'undefined' ? null : document.activeElement;
        function isCurrentActive() {
            const currentActiveId = stack[stack.length - 1];
            return currentActiveId === id;
        }
        function handleDocumentKeydown(e) {
            var _a;
            if (e.code === 'Escape') {
                if (isCurrentActive()) {
                    (_a = props.onEsc) === null || _a === void 0 ? void 0 : _a.call(props, e);
                }
            }
        }
        onMounted(() => {
            watch(() => props.active, (value) => {
                if (value) {
                    activate();
                    on('keydown', document, handleDocumentKeydown);
                }
                else {
                    off('keydown', document, handleDocumentKeydown);
                    if (activated) {
                        deactivate();
                    }
                }
            }, {
                immediate: true
            });
        });
        onBeforeUnmount(() => {
            off('keydown', document, handleDocumentKeydown);
            if (activated)
                deactivate();
        });
        function handleDocumentFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            if (isCurrentActive()) {
                const mainEl = getMainEl();
                if (mainEl === null)
                    return;
                if (mainEl.contains(getPreciseEventTarget(e)))
                    return;
                // I don't handle shift + tab status since it's too tricky to handle
                // Not impossible but I need to sleep
                resetFocusTo('first');
            }
        }
        function getMainEl() {
            const focusableStartEl = focusableStartRef.value;
            if (focusableStartEl === null)
                return null;
            let mainEl = focusableStartEl;
            while (true) {
                mainEl = mainEl.nextSibling;
                if (mainEl === null)
                    break;
                if (mainEl instanceof Element && mainEl.tagName === 'DIV') {
                    break;
                }
            }
            return mainEl;
        }
        function activate() {
            var _a;
            if (props.disabled)
                return;
            stack.push(id);
            if (props.autoFocus) {
                const { initialFocusTo } = props;
                if (initialFocusTo === undefined) {
                    resetFocusTo('first');
                }
                else {
                    (_a = resolveTo(initialFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                }
            }
            activated = true;
            document.addEventListener('focus', handleDocumentFocus, true);
        }
        function deactivate() {
            var _a;
            if (props.disabled)
                return;
            document.removeEventListener('focus', handleDocumentFocus, true);
            stack = stack.filter((idInStack) => idInStack !== id);
            if (isCurrentActive())
                return;
            const { finalFocusTo } = props;
            if (finalFocusTo !== undefined) {
                (_a = resolveTo(finalFocusTo)) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
            }
            else if (props.returnFocusOnDeactivated) {
                if (lastFocusedElement instanceof HTMLElement) {
                    ignoreInternalFocusChange = true;
                    lastFocusedElement.focus({ preventScroll: true });
                    ignoreInternalFocusChange = false;
                }
            }
        }
        function resetFocusTo(target) {
            if (!isCurrentActive())
                return;
            if (props.active) {
                const focusableStartEl = focusableStartRef.value;
                const focusableEndEl = focusableEndRef.value;
                if (focusableStartEl !== null && focusableEndEl !== null) {
                    const mainEl = getMainEl();
                    if (mainEl == null || mainEl === focusableEndEl) {
                        ignoreInternalFocusChange = true;
                        focusableStartEl.focus({ preventScroll: true });
                        ignoreInternalFocusChange = false;
                        return;
                    }
                    ignoreInternalFocusChange = true;
                    const focused = target === 'first'
                        ? focusFirstDescendant(mainEl)
                        : focusLastDescendant(mainEl);
                    ignoreInternalFocusChange = false;
                    if (!focused) {
                        ignoreInternalFocusChange = true;
                        focusableStartEl.focus({ preventScroll: true });
                        ignoreInternalFocusChange = false;
                    }
                }
            }
        }
        function handleStartFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            const mainEl = getMainEl();
            if (mainEl === null)
                return;
            if (e.relatedTarget !== null && mainEl.contains(e.relatedTarget)) {
                // if it comes from inner, focus last
                resetFocusTo('last');
            }
            else {
                // otherwise focus first
                resetFocusTo('first');
            }
        }
        function handleEndFocus(e) {
            if (ignoreInternalFocusChange)
                return;
            if (e.relatedTarget !== null &&
                e.relatedTarget === focusableStartRef.value) {
                // if it comes from first, focus last
                resetFocusTo('last');
            }
            else {
                // otherwise focus first
                resetFocusTo('first');
            }
        }
        return {
            focusableStartRef,
            focusableEndRef,
            focusableStyle: 'position: absolute; height: 0; width: 0;',
            handleStartFocus,
            handleEndFocus
        };
    },
    render() {
        const { default: defaultSlot } = this.$slots;
        if (defaultSlot === undefined)
            return null;
        if (this.disabled)
            return defaultSlot();
        const { active, focusableStyle } = this;
        return h(Fragment, null, [
            h('div', {
                'aria-hidden': 'true',
                tabindex: active ? '0' : '-1',
                ref: 'focusableStartRef',
                style: focusableStyle,
                onFocus: this.handleStartFocus
            }),
            defaultSlot(),
            h('div', {
                'aria-hidden': 'true',
                style: focusableStyle,
                ref: 'focusableEndRef',
                tabindex: active ? '0' : '-1',
                onFocus: this.handleEndFocus
            })
        ]);
    }
});

function getFirstSlotVNode(slots, slotName = 'default', props = undefined) {
  const slot = slots[slotName];
  if (!slot) {
    warn$1('getFirstSlotVNode', `slot[${slotName}] is empty`);
    return null;
  }
  const slotContent = flatten$1(slot(props));
  // vue will normalize the slot, so slot must be an array
  if (slotContent.length === 1) {
    return slotContent[0];
  } else {
    warn$1('getFirstSlotVNode', `slot[${slotName}] should have exactly one child`);
    return null;
  }
}
function getFirstSlotVNodeWithTypedProps(slotName, slot, props) {
  if (!slot) {
    return null;
  }
  const slotContent = flatten$1(slot(props));
  // vue will normalize the slot, so slot must be an array
  if (slotContent.length === 1) {
    return slotContent[0];
  } else {
    warn$1('getFirstSlotVNode', `slot[${slotName}] should have exactly one child`);
    return null;
  }
}

function keep(object, keys = [], rest) {
  const keepedObject = {};
  keys.forEach(key => {
    keepedObject[key] = object[key];
  });
  return Object.assign(keepedObject, rest);
}

export { FocusTrap, LazyTeleport, clickoutside, drawerBodyInjectionKey, drawerInjectionKey, getFirstSlotVNode, getFirstSlotVNodeWithTypedProps, getFirstVNode, getSlot, hasInstance, isBrowser, keep, modalBodyInjectionKey, modalInjectionKey, modalProviderInjectionKey, popoverBodyInjectionKey, useFalseUntilTruthy, zindexable };
//# sourceMappingURL=keep.JgtZum5h1767105581793.js.map
