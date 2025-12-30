import { importShared } from './index.BxB45aCK1767105581793.js';

const {shallowRef: shallowRef$1,watchEffect: watchEffect$1,readonly: readonly$1,watch: watch$1,customRef: customRef$1,getCurrentScope: getCurrentScope$1,onScopeDispose,effectScope,getCurrentInstance: getCurrentInstance$1,hasInjectionContext: hasInjectionContext$1,inject: inject$1,provide,ref: ref$1,isRef: isRef$1,unref: unref$1,toValue:toValue$1,computed: computed$1,reactive: reactive$1,toRefs:toRefs$1,toRef:toRef$1,shallowReadonly: shallowReadonly$1,onBeforeMount,nextTick: nextTick$1,onBeforeUnmount,onMounted: onMounted$1,onUnmounted,isReactive} = await importShared('vue');

function tryOnScopeDispose(fn) {
  if (getCurrentScope$1()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}

// @__NO_SIDE_EFFECTS__
function createEventHook() {
  const fns = /* @__PURE__ */ new Set();
  const off = (fn) => {
    fns.delete(fn);
  };
  const clear = () => {
    fns.clear();
  };
  const on = (fn) => {
    fns.add(fn);
    const offFn = () => off(fn);
    tryOnScopeDispose(offFn);
    return {
      off: offFn
    };
  };
  const trigger = (...args) => {
    return Promise.all(Array.from(fns).map((fn) => fn(...args)));
  };
  return {
    on,
    off,
    trigger,
    clear
  };
}

const localProvidedStateMap = /* @__PURE__ */ new WeakMap();

const injectLocal = /* @__NO_SIDE_EFFECTS__ */ (...args) => {
  var _a;
  const key = args[0];
  const instance = (_a = getCurrentInstance$1()) == null ? void 0 : _a.proxy;
  if (instance == null && !hasInjectionContext$1())
    throw new Error("injectLocal must be called in setup");
  if (instance && localProvidedStateMap.has(instance) && key in localProvidedStateMap.get(instance))
    return localProvidedStateMap.get(instance)[key];
  return inject$1(...args);
};

function provideLocal(key, value) {
  var _a;
  const instance = (_a = getCurrentInstance$1()) == null ? void 0 : _a.proxy;
  if (instance == null)
    throw new Error("provideLocal must be called in setup");
  if (!localProvidedStateMap.has(instance))
    localProvidedStateMap.set(instance, /* @__PURE__ */ Object.create(null));
  const localProvidedState = localProvidedStateMap.get(instance);
  localProvidedState[key] = value;
  return provide(key, value);
}

// @__NO_SIDE_EFFECTS__
function createInjectionState(composable, options) {
  const key = (options == null ? void 0 : options.injectionKey) || Symbol(composable.name || "InjectionState");
  const defaultValue = options == null ? void 0 : options.defaultValue;
  const useProvidingState = (...args) => {
    const state = composable(...args);
    provideLocal(key, state);
    return state;
  };
  const useInjectedState = () => injectLocal(key, defaultValue);
  return [useProvidingState, useInjectedState];
}

const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  let lastInvoker;
  const filter = (invoke) => {
    const duration = toValue$1(ms);
    const maxDuration = toValue$1(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = void 0;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      lastInvoker = invoke;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = void 0;
          resolve(lastInvoker());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = void 0;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function pxValue(px) {
  return px.endsWith("rem") ? Number.parseFloat(px) * 16 : Number.parseFloat(px);
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function getLifeCycleTarget(target) {
  return getCurrentInstance$1();
}

// @__NO_SIDE_EFFECTS__
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}

function refDebounced(value, ms = 200, options = {}) {
  const debounced = ref$1(toValue$1(value));
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch$1(value, () => updater());
  return shallowReadonly$1(debounced);
}

function tryOnMounted(fn, sync = true, target) {
  const instance = getLifeCycleTarget();
  if (instance)
    onMounted$1(fn, target);
  else if (sync)
    fn();
  else
    nextTick$1(fn);
}

function createUntil(r, isNot = false) {
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch$1(
        r,
        (v) => {
          if (condition(v) !== isNot) {
            if (stop)
              stop();
            else
              nextTick$1(() => stop == null ? void 0 : stop());
            resolve(v);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue$1(r)).finally(() => stop == null ? void 0 : stop())
      );
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef$1(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch$1(
        [r, value],
        ([v1, v2]) => {
          if (isNot !== (v1 === v2)) {
            if (stop)
              stop();
            else
              nextTick$1(() => stop == null ? void 0 : stop());
            resolve(v1);
          }
        },
        {
          flush,
          deep,
          immediate: true
        }
      );
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(
        promiseTimeout(timeout, throwOnTimeout).then(() => toValue$1(r)).finally(() => {
          stop == null ? void 0 : stop();
          return toValue$1(r);
        })
      );
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(toValue$1(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(toValue$1(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        return createUntil(r, !isNot);
      }
    };
    return instance;
  }
}
function until(r) {
  return createUntil(r);
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = shallowRef$1(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    const intervalValue = toValue$1(interval);
    if (intervalValue <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    if (isActive.value)
      timer = setInterval(cb, intervalValue);
  }
  if (immediate && isClient)
    resume();
  if (isRef$1(interval) || typeof interval === "function") {
    const stopWatch = watch$1(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive: shallowReadonly$1(isActive),
    pause,
    resume
  };
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  const isPending = shallowRef$1(false);
  let timer;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    if (immediateCallback)
      cb();
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = void 0;
      cb(...args);
    }, toValue$1(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending: shallowReadonly$1(isPending),
    start,
    stop
  };
}

function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    callback
  } = options;
  const controls = useTimeoutFn(
    callback != null ? callback : noop,
    interval,
    options
  );
  const ready = computed$1(() => !controls.isPending.value);
  if (exposeControls) {
    return {
      ready,
      ...controls
    };
  } else {
    return ready;
  }
}

function watchImmediate(source, cb, options) {
  return watch$1(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

const {isRef,shallowRef,ref,watchEffect,computed,inject,defineComponent,h,TransitionGroup,Fragment,shallowReactive,toValue,unref,getCurrentInstance,onMounted,watch,customRef,onUpdated,readonly,reactive,hasInjectionContext,toRaw,shallowReadonly,nextTick,markRaw,getCurrentScope,isReadonly,onBeforeUpdate} = await importShared('vue');
const defaultWindow = isClient ? window : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e) => e != null);
    return test.every((e) => typeof e !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e) => unrefElement(e))) != null ? _b : [defaultWindow].filter((e) => e != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
// @__NO_SIDE_EFFECTS__
function useMounted() {
  const isMounted = shallowRef(false);
  const instance = getCurrentInstance();
  if (instance) {
    onMounted(() => {
      isMounted.value = true;
    }, instance);
  }
  return isMounted;
}
// @__NO_SIDE_EFFECTS__
function useSupported(callback) {
  const isMounted = /* @__PURE__ */ useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    fpsLimit = void 0,
    window: window2 = defaultWindow,
    once = false
  } = options;
  const isActive = shallowRef(false);
  const intervalLimit = computed(() => {
    return fpsLimit ? 1e3 / toValue(fpsLimit) : null;
  });
  let previousFrameTimestamp = 0;
  let rafId = null;
  function loop(timestamp2) {
    if (!isActive.value || !window2)
      return;
    if (!previousFrameTimestamp)
      previousFrameTimestamp = timestamp2;
    const delta = timestamp2 - previousFrameTimestamp;
    if (intervalLimit.value && delta < intervalLimit.value) {
      rafId = window2.requestAnimationFrame(loop);
      return;
    }
    previousFrameTimestamp = timestamp2;
    fn({ delta, timestamp: timestamp2 });
    if (once) {
      isActive.value = false;
      rafId = null;
      return;
    }
    rafId = window2.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window2) {
      isActive.value = true;
      previousFrameTimestamp = 0;
      rafId = window2.requestAnimationFrame(loop);
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window2) {
      window2.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive: readonly(isActive),
    pause,
    resume
  };
}
function useAsyncState(promise, initialState, options) {
  var _a;
  const {
    immediate = true,
    delay = 0,
    onError = (_a = globalThis.reportError) != null ? _a : noop,
    onSuccess = noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = shallowRef(false);
  const isLoading = shallowRef(false);
  const error = shallowRef(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = toValue(initialState);
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
      onSuccess(data);
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw e;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate) {
    execute(delay);
  }
  const shell = {
    state,
    isReady,
    isLoading,
    error,
    execute,
    executeImmediate: (...args) => execute(0, ...args)
  };
  function waitUntilIsLoaded() {
    return new Promise((resolve, reject) => {
      until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
    });
  }
  return {
    ...shell,
    then(onFulfilled, onRejected) {
      return waitUntilIsLoaded().then(onFulfilled, onRejected);
    }
  };
}
const ssrWidthSymbol = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function useSSRWidth() {
  const ssrWidth = hasInjectionContext() ? injectLocal(ssrWidthSymbol, null) : null;
  return typeof ssrWidth === "number" ? ssrWidth : void 0;
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow, ssrWidth = /* @__PURE__ */ useSSRWidth() } = options;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  const ssrSupport = shallowRef(typeof ssrWidth === "number");
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (ssrSupport.value) {
      ssrSupport.value = !isSupported.value;
      const queryStrings = toValue(query).split(",");
      matches.value = queryStrings.some((queryString) => {
        const not = queryString.includes("not all");
        const minWidth = queryString.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        const maxWidth = queryString.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let res = Boolean(minWidth || maxWidth);
        if (minWidth && res) {
          res = ssrWidth >= pxValue(minWidth[1]);
        }
        if (maxWidth && res) {
          res = ssrWidth <= pxValue(maxWidth[1]);
        }
        return not ? !res : res;
      });
      return;
    }
    if (!isSupported.value)
      return;
    mediaQuery.value = window2.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => matches.value);
}
// @__NO_SIDE_EFFECTS__
function useDevicePixelRatio(options = {}) {
  const {
    window: window2 = defaultWindow
  } = options;
  const pixelRatio = shallowRef(1);
  const query = useMediaQuery(() => `(resolution: ${pixelRatio.value}dppx)`, options);
  let stop = noop;
  if (window2) {
    stop = watchImmediate(query, () => pixelRatio.value = window2.devicePixelRatio);
  }
  return {
    pixelRatio: readonly(pixelRatio),
    stop
  };
}
function useResizeObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...observerOptions } = options;
  let observer;
  const isSupported = /* @__PURE__ */ useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const targets = computed(() => {
    const _targets = toValue(target);
    return Array.isArray(_targets) ? _targets.map((el) => unrefElement(el)) : [unrefElement(_targets)];
  });
  const stopWatch = watch(
    targets,
    (els) => {
      cleanup();
      if (isSupported.value && window2) {
        observer = new ResizeObserver(callback);
        for (const _el of els) {
          if (_el)
            observer.observe(_el, observerOptions);
        }
      }
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const { window: window2 = defaultWindow, box = "content-box" } = options;
  const isSVG = computed(() => {
    var _a, _b;
    return (_b = (_a = unrefElement(target)) == null ? void 0 : _a.namespaceURI) == null ? void 0 : _b.includes("svg");
  });
  const width = shallowRef(initialSize.width);
  const height = shallowRef(initialSize.height);
  const { stop: stop1 } = useResizeObserver(
    target,
    ([entry]) => {
      const boxSize = box === "border-box" ? entry.borderBoxSize : box === "content-box" ? entry.contentBoxSize : entry.devicePixelContentBoxSize;
      if (window2 && isSVG.value) {
        const $elem = unrefElement(target);
        if ($elem) {
          const rect = $elem.getBoundingClientRect();
          width.value = rect.width;
          height.value = rect.height;
        }
      } else {
        if (boxSize) {
          const formatBoxSize = toArray(boxSize);
          width.value = formatBoxSize.reduce((acc, { inlineSize }) => acc + inlineSize, 0);
          height.value = formatBoxSize.reduce((acc, { blockSize }) => acc + blockSize, 0);
        } else {
          width.value = entry.contentRect.width;
          height.value = entry.contentRect.height;
        }
      }
    },
    options
  );
  tryOnMounted(() => {
    const ele = unrefElement(target);
    if (ele) {
      width.value = "offsetWidth" in ele ? ele.offsetWidth : initialSize.width;
      height.value = "offsetHeight" in ele ? ele.offsetHeight : initialSize.height;
    }
  });
  const stop2 = watch(
    () => unrefElement(target),
    (ele) => {
      width.value = ele ? initialSize.width : 0;
      height.value = ele ? initialSize.height : 0;
    }
  );
  function stop() {
    stop1();
    stop2();
  }
  return {
    width,
    height,
    stop
  };
}
// @__NO_SIDE_EFFECTS__
function useFps(options) {
  var _a;
  const fps = shallowRef(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}
// @__NO_SIDE_EFFECTS__
function useMemory(options = {}) {
  const memory = ref();
  const isSupported = /* @__PURE__ */ useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}
// @__NO_SIDE_EFFECTS__
function useWindowSize(options = {}) {
  const {
    window: window2 = defaultWindow,
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    listenOrientation = true,
    includeScrollbar = true,
    type = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = () => {
    if (window2) {
      if (type === "outer") {
        width.value = window2.outerWidth;
        height.value = window2.outerHeight;
      } else if (type === "visual" && window2.visualViewport) {
        const { width: visualViewportWidth, height: visualViewportHeight, scale } = window2.visualViewport;
        width.value = Math.round(visualViewportWidth * scale);
        height.value = Math.round(visualViewportHeight * scale);
      } else if (includeScrollbar) {
        width.value = window2.innerWidth;
        height.value = window2.innerHeight;
      } else {
        width.value = window2.document.documentElement.clientWidth;
        height.value = window2.document.documentElement.clientHeight;
      }
    }
  };
  update();
  tryOnMounted(update);
  const listenerOptions = { passive: true };
  useEventListener("resize", update, listenerOptions);
  if (window2 && type === "visual" && window2.visualViewport) {
    useEventListener(window2.visualViewport, "resize", update, listenerOptions);
  }
  if (listenOrientation) {
    const matches = useMediaQuery("(orientation: portrait)");
    watch(matches, () => update());
  }
  return { width, height };
}

/**
 * name: @tresjs/core
 * version: v5.0.2
 * (c) 2025
 * description: Declarative ThreeJS using Vue Components
 * author: Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)
 */
const {reactive:Do$1,toValue:D,watch:At$1,onUnmounted:ie$1,defineComponent:ot$1,renderSlot:Io$1,unref:ke$1,ref:Ae$1,computed:J$1,watchEffect:$$1,readonly:zt$1,shallowRef:it$1,isRef:me$1,useSlots:ko$1,getCurrentInstance:$t$1,onMounted:Kt$1,createElementBlock:xo$1,openBlock:Ro$1,normalizeStyle:Lo$1,normalizeClass:Fo$1,createRenderer:Mo$1,h:Wt$1,provide:qe$1,Fragment:No$1} = await importShared('vue');

const vr$1 = await importShared('three');

const {Layers:Vo$1,Scene:yr$1,MathUtils:Bo$1,Clock:Uo$1,WebGLRenderer:br$1,Mesh:He$1,Material:Ho$1,Vector3:I,Vector2:Y$1,Ray:st$1,SphereGeometry:jo$1,Object3D:je$1,Matrix4:Te,BufferAttribute:Cr$1,Triangle:wr$1,Line3:zo$1,Plane:ze$1,Raycaster:$o$1,Quaternion:ut$1,Sphere:Ko$1,MeshBasicMaterial:Ar$1,DoubleSide:Wo$1,Color:xe$1,PCFSoftShadowMap:Go$1,ACESFilmicToneMapping:Yo$1,PerspectiveCamera:qo$1,ArrowHelper:Xo$1,Line:Qo$1,BufferGeometry:Gt$1,Float32BufferAttribute:Yt$1,LineBasicMaterial:Zo$1,BackSide:Jo$1,HemisphereLightHelper:ei$1,SpotLightHelper:ti$1,PointLightHelper:ni$1,DirectionalLightHelper:ri$1} = await importShared('three');
const _i$1 = "@tresjs/core", mi$1 = "module", gi$1 = "5.0.2", Ei$1 = "pnpm@10.17.0", vi$1 = "Declarative ThreeJS using Vue Components", yi$1 = "Alvaro Saburido <hola@alvarosaburido.dev> (https://github.com/alvarosabu/)", bi$1 = "MIT", Ci$1 = { type: "git", url: "git+https://github.com/Tresjs/tres.git" }, wi$1 = ["vue", "3d", "threejs", "three", "threejs-vue"], Ai$1 = false, Ti$1 = { ".": { types: "./dist/index.d.ts", import: "./dist/tres.js", default: "./dist/tres.js" }, "./components": { types: "./dist/src/components/index.d.ts" }, "./composables": { types: "./dist/src/composables/index.d.ts" }, "./types": { types: "./dist/src/types/index.d.ts" }, "./utils": { types: "./dist/src/utils/index.d.ts" }, "./*": "./*" }, Oi$1 = "./dist/tres.js", Si$1 = "./dist/index.d.ts", Pi$1 = ["*.d.ts", "dist"], Di$1 = { access: "public" }, Ii$1 = { dev: "pnpm --filter='./playground/vue' dev", "dev:nuxt": "pnpm --filter='./playground/nuxt' dev", build: "vite build", test: "vitest", "test:ci": "vitest run", "test:ui": "vitest --ui --coverage.enabled=true", release: "release-it", coverage: "vitest run --coverage", lint: "eslint .", "lint:fix": "eslint . --fix", typecheck: "vue-tsc --noEmit", "docs:dev": "pnpm --filter='./docs' dev", "docs:generate": "pnpm --filter='./docs' generate", "docs:prepare": "pnpm --filter='./docs' prepare", "docs:lint": "pnpm --filter='./docs' lint", "docs:typecheck": "pnpm --filter='./docs' typecheck" }, ki$1 = { three: ">=0.133", vue: ">=3.4" }, xi$1 = { "@pmndrs/pointer-events": "^6.6.17", "@vue/devtools-api": "^7.7.2", "@vueuse/core": "^13.9.0", radashi: "^12.6.2" }, Ri$1 = { "@release-it/conventional-changelog": "^10.0.0", "@stackblitz/sdk": "^1.11.0", "@tresjs/cientos": "5.0.0-alpha.1", "@tresjs/eslint-config": "^1.4.0", "@tresjs/leches": "1.0.0-next.0", "@types/three": "^0.180.0", "@typescript-eslint/eslint-plugin": "^8.42.0", "@typescript-eslint/parser": "^8.42.0", "@vitejs/plugin-vue": "^6.0.1", "@vitest/coverage-c8": "^0.33.0", "@vitest/coverage-v8": "^3.2.4", "@vitest/ui": "^3.2.4", "@vue/test-utils": "^2.4.6", eslint: "^9.34.0", "eslint-plugin-vue": "^10.4.0", esno: "^4.8.0", gsap: "^3.13.0", jsdom: "^27.0.0", kolorist: "^1.8.0", ohmyfetch: "^0.4.21", pathe: "^2.0.3", "release-it": "^19.0.4", "rollup-plugin-analyzer": "^4.0.0", "rollup-plugin-copy": "^3.5.0", "rollup-plugin-visualizer": "^6.0.3", sponsorkit: "^17.0.0", three: "^0.180.0", unocss: "^65.5.0", unplugin: "^2.3.10", "unplugin-vue-components": "^29.0.0", vite: "^7.1.6", "vite-plugin-banner": "^0.8.1", "vite-plugin-dts": "4.5.4", "vite-plugin-inspect": "^11.3.3", "vite-plugin-require-transform": "^1.0.21", "vite-svg-loader": "^5.1.0", vitepress: "1.6.4", vitest: "3.2.4", vue: "3.5.21", "vue-demi": "^0.14.10", "vue-tsc": "^3.0.6" }, Li$1 = { onlyBuiltDependencies: ["better-sqlite3"], ignoredBuiltDependencies: ["vue-demi"], overrides: { ipx: "^3.0.3", vue: "^3.5.21", "vue-router": "^4.5.1" } }, Fi$1 = { unimport: "4.1.1" }, Mi$1 = {
  name: _i$1,
  type: mi$1,
  version: gi$1,
  packageManager: Ei$1,
  description: vi$1,
  author: yi$1,
  license: bi$1,
  repository: Ci$1,
  keywords: wi$1,
  sideEffects: Ai$1,
  exports: Ti$1,
  module: Oi$1,
  types: Si$1,
  files: Pi$1,
  publishConfig: Di$1,
  scripts: Ii$1,
  peerDependencies: ki$1,
  dependencies: xi$1,
  devDependencies: Ri$1,
  pnpm: Li$1,
  resolutions: Fi$1
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ni$1(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const Vi$1 = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Bi$1 = /* @__PURE__ */ Ni$1(Vi$1);
function Qt$1(e) {
  var t;
  const n = ((t = e?.replace(/([A-Z])+/g, Ui$1)) == null ? void 0 : t.split(/(?=[A-Z])|[\.\-\s_]/).map((r) => r.toLowerCase())) ?? [];
  return n.length === 0 ? "" : n.length === 1 ? n[0] : n.reduce((r, o) => `${r}${o.charAt(0).toUpperCase()}${o.slice(1)}`);
}
function Ui$1(e) {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}
function Or$1(e, t) {
  if (Object.is(e, t))
    return true;
  if (e instanceof Date && t instanceof Date)
    return e.getTime() === t.getTime();
  if (e instanceof RegExp && t instanceof RegExp)
    return e.toString() === t.toString();
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return false;
  const n = Reflect.ownKeys(e), r = Reflect.ownKeys(t);
  if (n.length !== r.length)
    return false;
  for (let o = 0; o < n.length; o++)
    if (!Reflect.has(t, n[o]) || !Or$1(e[n[o]], t[n[o]]))
      return false;
  return true;
}
function Q(e) {
  return typeof e == "function";
}
function Sr$1(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Tt$1(e) {
  return Hi$1(e, "[object Object]");
}
function Ot$1(e) {
  return typeof e == "string";
}
function Hi$1(e, t) {
  return Object.prototype.toString.call(e) === t;
}
function at$1(e) {
  return typeof e > "u";
}
const B$1 = (e) => (t) => Tt$1(t) && e in t && !!t[e], lt$1 = B$1("isObject3D"), $e$1 = B$1("isMesh"), Pr$1 = B$1("isCamera"), ji$1 = B$1("isOrthographicCamera"), Dr$1 = B$1("isPerspectiveCamera"), Ir$1 = B$1("isColor"), zi$1 = (e) => Ot$1(e) || Sr$1(e) || Ir$1(e), Zt$1 = (e) => e instanceof Vo$1, kr$1 = B$1("isBufferGeometry"), xr$1 = B$1("isMaterial"), Rr$1 = B$1("isLight"), Lr$1 = B$1("isFog"), Fr$1 = B$1("isScene"), ct$1 = (e) => e !== null && typeof e == "object" && "set" in e && typeof e.set == "function", $i$1 = (e) => ct$1(e) && "copy" in e && typeof e.copy == "function", Ki$1 = (e) => !!e?.constructor, re$1 = (e) => Pr$1(e) || ji$1(e) || Dr$1(e), Wi$1 = (e) => (
  // NOTE: TresObject is currently defined as
  // TresObject3D | THREE.BufferGeometry | THREE.Material | THREE.Fog
  lt$1(e) || kr$1(e) || xr$1(e) || Lr$1(e)
), Gi$1 = B$1("isPrimitive"), Yi$1 = (e) => Wi$1(e) && "__tres" in e, qi$1 = (e, t) => {
  let n = 0;
  for (let r = 0; r < e.length; r++)
    t(e[r], r) && (e[n] = e[r], n++);
  return e.length = n, e;
}, Fe$1 = "[TresJS ▲ ■ ●] ";
function Jt$1(...e) {
  typeof e[0] == "string" ? e[0] = Fe$1 + e[0] : e.unshift(Fe$1), console.error(...e);
}
function Me$1(...e) {
  typeof e[0] == "string" ? e[0] = Fe$1 + e[0] : e.unshift(Fe$1), console.warn(...e);
}
function en$1(e) {
  ((n) => "map" in n && !!n.map)(e) && e.map.dispose(), e.dispose();
}
function Ne$1(e) {
  if (e.parent && e.removeFromParent?.(), delete e.__tres, [...e.children].forEach((n) => Ne$1(n)), !(e instanceof yr$1)) {
    const n = e;
    e && e.dispose?.(), n.geometry && n.geometry.dispose(), Array.isArray(n.material) ? n.material.forEach((r) => en$1(r)) : n.material && en$1(n.material);
  }
}
function Ve$1(e, t) {
  let n = e;
  if (t.includes("-")) {
    const r = t.split("-");
    let o = r.shift();
    for (; n && r.length; )
      o in n ? (n = n[o], o = r.shift()) : o = tn$1(o, r.shift());
    return { target: n, key: tn$1(o, ...r) };
  } else
    return { target: n, key: t };
}
function tn$1(...e) {
  return e.map((t, n) => n === 0 ? t : t.charAt(0).toUpperCase() + t.slice(1)).join("");
}
function Xi$1(e, t, n) {
  const r = /-\d+$/;
  if (Ot$1(n)) {
    if (r.test(n)) {
      const s = n.replace(r, ""), { target: u, key: a } = Ve$1(e, s);
      if (!Array.isArray(u[a])) {
        const l = u[a], c = [];
        c.__tresDetach = () => {
          c.every((f) => at$1(f)) && (u[a] = l);
        }, u[a] = c;
      }
    }
    const { target: o, key: i } = Ve$1(e, n);
    t.__tres.previousAttach = o[i], o[i] = se$1(t);
  } else
    t.__tres.previousAttach = n(e, t);
}
function Qi$1(e, t, n) {
  if (Ot$1(n)) {
    const { target: r, key: o } = Ve$1(e, n), i = t.__tres.previousAttach;
    i === void 0 ? delete r[o] : r[o] = i, "__tresDetach" in r && r.__tresDetach();
  } else
    t.__tres?.previousAttach?.(e, t);
  delete t.__tres?.previousAttach;
}
function X(e, t, n) {
  const r = e;
  return r.__tres = {
    type: "unknown",
    root: n,
    memoizedProps: {},
    objects: [],
    parent: null,
    previousAttach: null,
    ...t
  }, r.__tres.attach || (xr$1(r) ? r.__tres.attach = "material" : kr$1(r) ? r.__tres.attach = "geometry" : Lr$1(r) && (r.__tres.attach = "fog")), r;
}
function ft$1(e) {
  const t = e?.__tres?.root;
  t?.renderer && t.renderer.canBeInvalidated.value && t.renderer.invalidate();
}
function Zi$1(e, t, n, r, o) {
  const i = [...t.__tres.objects], s = se$1(t);
  if (e = se$1(e), s === e)
    return true;
  const u = X(e, t.__tres ?? {}, o), a = t.parent ?? t.__tres.parent ?? null, l = { ...t.__tres.memoizedProps };
  delete l.object;
  for (const c of i)
    Mr$1(c, o), Nr$1(c, o);
  s.__tres.objects = [], r.remove(t);
  for (const [c, f] of Object.entries(l))
    r.patchProp(u, c, u[c], f);
  n(e), r.insert(t, a);
  for (const c of i)
    r.insert(c, t);
  return true;
}
function se$1(e) {
  if (Gi$1(e)) {
    const t = e;
    return t.object.__tres = t.__tres, t.object;
  } else
    return e;
}
function Mr$1(e, t) {
  const n = e.__tres?.parent || t.scene.value;
  e.__tres && (e.__tres.parent = null), n && n.__tres && "objects" in n.__tres && qi$1(n.__tres.objects, (r) => r !== e), e.__tres?.attach ? Qi$1(n, e, e.__tres.attach) : (e.parent?.remove?.(se$1(e)), e.parent = null);
}
function Nr$1(e, t) {
  e.traverse?.((n) => {
    re$1(n) && t.camera.deregisterCamera(n);
  }), re$1(e) && t.camera.deregisterCamera(e), ft$1(e);
}
function Ji$1(e, t, n) {
  const r = new e(n?.manager), o = Do$1({
    loaded: 0,
    total: 0,
    percentage: 0
  });
  n?.extensions && n.extensions(r);
  const i = D(t), s = useAsyncState(
    (a) => new Promise((l, c) => {
      const f = a || i || "";
      r.load(f, (_) => {
        l(_);
      }, (_) => {
        o.loaded = _.loaded, o.total = _.total, o.percentage = o.loaded / o.total * 100;
      }, (_) => {
        c(_);
      });
    }),
    n?.initialValue ?? null,
    {
      ...n?.asyncOptions,
      immediate: n?.asyncOptions?.immediate ?? true
    }
  ), u = At$1(() => D(t), (a) => {
    if (a) {
      const l = s.state.value;
      l && typeof l == "object" && "scene" in l && l.scene && Ne$1(l.scene), s.execute(0, a);
    }
  });
  return ie$1(() => {
    u();
    const a = s.state.value;
    a && typeof a == "object" && "scene" in a && a.scene && Ne$1(a.scene);
  }), {
    ...s,
    load: (a) => {
      s.execute(0, a);
    },
    progress: o
  };
}
const es$1 = ({ sizes: e }) => {
  const t = Ae$1([]), n = J$1(() => t.value[0]), r = (s) => {
    const u = Pr$1(s) ? s : t.value.find((l) => l.uuid === s);
    if (!u)
      return;
    const a = t.value.filter(({ uuid: l }) => l !== u.uuid);
    t.value = [u, ...a];
  }, o = (s, u = false) => {
    t.value.some(({ uuid: a }) => a === s.uuid) || (t.value.push(s), u && r(s.uuid));
  }, i = (s) => {
    t.value = t.value.filter(({ uuid: u }) => u !== s.uuid);
  };
  return $$1(() => {
    e.aspectRatio.value && t.value.forEach((s) => {
      Dr$1(s) && (s.aspect = e.aspectRatio.value, s.updateProjectionMatrix());
    });
  }), {
    activeCamera: n,
    cameras: t,
    registerCamera: o,
    deregisterCamera: i,
    setActiveCamera: r
  };
};
function nn$1() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  let n = 0, r = false;
  const o = () => {
    const l = Array.from(e.entries()).sort((c, f) => {
      const _ = c[1].priority - f[1].priority;
      return _ === 0 ? c[1].addI - f[1].addI : _;
    });
    t.clear(), l.forEach((c) => t.add(c[0]));
  }, i = (l) => {
    e.delete(l), t.delete(l);
  };
  return { on: (l, c = 0) => {
    e.set(l, { priority: c, addI: n++ });
    const f = () => i(l);
    return tryOnScopeDispose(f), r = true, {
      off: f
    };
  }, off: i, trigger: (...l) => (r && (o(), r = false), Promise.all(
    Array.from(t).map((c) => c(...l))
  )), dispose: () => {
    e.clear(), t.clear();
  }, get count() {
    return e.size;
  } };
}
const dt$1 = Ae$1({}), pt$1 = (e) => Object.assign(dt$1.value, e), ns$1 = (e, t, n) => {
  if (!Q(e.setPixelRatio))
    return;
  let r = 0;
  if (n && Array.isArray(n) && n.length >= 2) {
    const [o, i] = n;
    r = Bo$1.clamp(t, o, i);
  } else Sr$1(n) ? r = n : r = t;
  r !== e.getPixelRatio?.() && e.setPixelRatio(r);
}, rs$1 = (e) => {
  const t = new Uo$1(), n = {
    before: createEventHook(),
    after: createEventHook()
  }, { pause: r, resume: o, isActive: i } = useRafFn(() => {
    const a = () => ({
      delta: t.getDelta(),
      elapsed: t.elapsedTime
    });
    n.before.trigger(a()), e(), n.after.trigger(a());
  }, {
    immediate: false
  });
  return {
    start: () => {
      t.start(), o();
    },
    stop: () => {
      t.stop(), r();
    },
    isActive: i,
    onBeforeLoop: n.before.on,
    onLoop: n.after.on
  };
};
function os$1({
  scene: e,
  canvas: t,
  options: n,
  contextParts: { sizes: r, camera: o }
}) {
  const s = Q(n.renderer) ? n.renderer({
    sizes: r,
    scene: e,
    camera: o,
    canvas: t
  }) : new br$1({
    ...n,
    canvas: unrefElement(t)
  }), u = Ae$1(D(n.renderMode) === "manual" ? 0 : 1), a = 60, l = J$1(() => D(n.renderMode) === "on-demand" && u.value === 0), c = () => e.value.traverse((E) => {
    E instanceof He$1 && E.material instanceof Ho$1 && (E.material.needsUpdate = true);
  }), f = (E = 1) => {
    l.value && (u.value = Math.min(a, u.value + E));
  }, _ = () => {
    if (D(n.renderMode) !== "manual")
      throw new Error("advance can only be called in manual render mode.");
    u.value = 1;
  }, d = () => {
    D(n.renderMode) === "on-demand" && f();
  }, h = J$1(() => D(n.renderMode) === "always"), v = (E) => Tt$1(E) && "isRenderer" in E && !!E.isRenderer, p = createEventHook();
  let g = false;
  v(s) && (s.init(), p.trigger(s));
  const b = createEventHook(), C = () => {
    u.value = h.value ? 1 : Math.max(0, u.value - 1), b.trigger(s);
  };
  let P = (E) => {
    o.activeCamera.value && (s.render(e.value, o.activeCamera.value), E());
  };
  const M = (E) => {
    P = E;
  }, A = rs$1(() => {
    u.value && P(C);
  });
  p.on(A.start), At$1([r.width, r.height], () => {
    s.setSize(r.width.value, r.height.value), !g && s.domElement.width && s.domElement.height && (p.trigger(s), g = true), d();
  }, {
    immediate: true
  });
  const { pixelRatio: O } = useDevicePixelRatio();
  $$1(() => {
    ns$1(s, O.value, D(n.dpr));
  }), D(n.renderMode) === "on-demand" && f(), D(n.renderMode) === "manual" && useTimeout(100, {
    callback: _
  });
  const T = J$1(() => {
    const E = D(n.clearColor), x = D(n.clearAlpha), R = typeof E == "string" && E.length === 9 && E.startsWith("#");
    return R && x !== void 0 && Me$1(`clearColor with alpha (e.g. ${E}) and clearAlpha cannot both be set, using clearColor as source of truth`), R ? {
      alpha: Number.parseInt(E.slice(7, 9), 16) / 255,
      color: E.slice(0, 7)
    } : {
      alpha: x,
      color: E
    };
  });
  return $$1(() => {
    const E = T.value;
    E.color === void 0 || E.alpha === void 0 || s.setClearColor(E.color, E.alpha);
  }), $$1(() => {
    const E = n.toneMapping;
    E && (s.toneMapping = E);
  }), $$1(() => {
    const E = n.toneMappingExposure;
    E && (s.toneMappingExposure = E);
  }), $$1(() => {
    const E = n.outputColorSpace;
    E && (s.outputColorSpace = E);
  }), $$1(() => {
    const E = n.shadows;
    E !== void 0 && (s.shadowMap.enabled = E, c());
  }), $$1(() => {
    const E = n.shadowMapType;
    E !== void 0 && (s.shadowMap.type = E, c());
  }), ie$1(() => {
    s.dispose(), "forceContextLoss" in s && s.forceContextLoss();
  }), {
    loop: A,
    instance: s,
    advance: _,
    onReady: p.on,
    onRender: b.on,
    invalidate: f,
    canBeInvalidated: l,
    mode: D(n.renderMode),
    replaceRenderFunction: M
  };
}
function is$1(e, t, n = 10) {
  const r = D(e) ? useWindowSize() : useElementSize(J$1(() => D(t).parentElement)), o = zt$1(refDebounced(r.width, n)), i = zt$1(refDebounced(r.height, n)), s = J$1(() => o.value / i.value);
  return {
    height: i,
    width: o,
    aspectRatio: s
  };
}
let ss$1 = class ss {
  nativeEvent;
  NONE = 0;
  CAPTURING_PHASE = 1;
  AT_TARGET = 2;
  BUBBLING_PHASE = 3;
  relatedTarget = null;
  get altKey() {
    return this.getFromNative("altKey", false);
  }
  get button() {
    return this.getFromNative("button", 0);
  }
  get buttons() {
    return this.getFromNative("buttons", 0);
  }
  get clientX() {
    return this.getFromNative("clientX", 0);
  }
  get clientY() {
    return this.getFromNative("clientY", 0);
  }
  get ctrlKey() {
    return this.getFromNative("ctrlKey", false);
  }
  get layerX() {
    return this.getFromNative("layerX", 0);
  }
  get layerY() {
    return this.getFromNative("layerY", 0);
  }
  get metaKey() {
    return this.getFromNative("metaKey", false);
  }
  get movementX() {
    return this.getFromNative("movementX", 0);
  }
  get movementY() {
    return this.getFromNative("movementY", 0);
  }
  get offsetX() {
    return this.getFromNative("offsetX", 0);
  }
  get offsetY() {
    return this.getFromNative("offsetY", 0);
  }
  get pageX() {
    return this.getFromNative("pageX", 0);
  }
  get pageY() {
    return this.getFromNative("pageY", 0);
  }
  get screenX() {
    return this.getFromNative("screenX", 0);
  }
  get screenY() {
    return this.getFromNative("screenY", 0);
  }
  get shiftKey() {
    return this.getFromNative("shiftKey", false);
  }
  get x() {
    return this.getFromNative("x", 0);
  }
  get y() {
    return this.getFromNative("y", 0);
  }
  get detail() {
    return this.getFromNative("detail", 0);
  }
  get view() {
    return this.getFromNative("view", null);
  }
  get which() {
    return this.getFromNative("which", 0);
  }
  get cancelBubble() {
    return this.getFromNative("cancelBubble", false);
  }
  get composed() {
    return this.getFromNative("composed", false);
  }
  get eventPhase() {
    return this.getFromNative("eventPhase", 0);
  }
  get isTrusted() {
    return this.getFromNative("isTrusted", false);
  }
  get returnValue() {
    return this.getFromNative("returnValue", false);
  }
  get timeStamp() {
    return this.getFromNative("timeStamp", 0);
  }
  get cancelable() {
    return this.getFromNative("cancelable", false);
  }
  get defaultPrevented() {
    return this.getFromNative("defaultPrevented", false);
  }
  constructor(t) {
    this.nativeEvent = t;
  }
  getFromNative(t, n) {
    return t in this.nativeEvent ? this.nativeEvent[t] : n;
  }
};
const Xe$1 = new I();
class L extends ss$1 {
  type;
  bubbles;
  internalPointer;
  intersection;
  camera;
  currentObject;
  object;
  propagationState;
  //--- pointer events data
  get pointerId() {
    return this.internalPointer.id;
  }
  get pointerType() {
    return this.internalPointer.type;
  }
  get pointerState() {
    return this.internalPointer.state;
  }
  //--- intersection data
  get distance() {
    return this.intersection.distance;
  }
  get distanceToRay() {
    return this.intersection.distanceToRay;
  }
  get point() {
    return this.intersection.point;
  }
  get index() {
    return this.intersection.index;
  }
  get face() {
    return this.intersection.face;
  }
  get faceIndex() {
    return this.intersection.faceIndex;
  }
  get uv() {
    return this.intersection.uv;
  }
  get uv1() {
    return this.intersection.uv1;
  }
  get normal() {
    return this.intersection.normal;
  }
  get instanceId() {
    return this.intersection.instanceId;
  }
  get pointOnLine() {
    return this.intersection.pointOnLine;
  }
  get batchId() {
    return this.intersection.batchId;
  }
  get pointerPosition() {
    return this.intersection.pointerPosition;
  }
  get pointerQuaternion() {
    return this.intersection.pointerQuaternion;
  }
  get pointOnFace() {
    return this.intersection.pointOnFace;
  }
  get localPoint() {
    return this.intersection.localPoint;
  }
  get details() {
    return this.intersection.details;
  }
  /** same as object */
  get target() {
    return this.object;
  }
  /** same as currentObject */
  get currentTarget() {
    return this.currentObject;
  }
  /** same as currentObject */
  get eventObject() {
    return this.currentObject;
  }
  /** same as object */
  get srcElement() {
    return this.currentObject;
  }
  _pointer;
  get pointer() {
    return this._pointer == null && (Xe$1.copy(this.intersection.point).project(this.camera), this._pointer = new Y$1(Xe$1.x, Xe$1.y)), this._pointer;
  }
  _ray;
  get ray() {
    if (this._ray != null)
      return this._ray;
    switch (this.intersection.details.type) {
      case "screen-ray":
      case "ray":
      case "sphere":
        return this._ray = new st$1(this.intersection.pointerPosition, new I(0, 0, -1).applyQuaternion(this.intersection.pointerQuaternion));
      case "lines":
        return this._ray = new st$1(this.intersection.details.line.start, this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize());
    }
  }
  _intersections = [];
  get intersections() {
    return this._intersections == null && (this._intersections = [{ ...this.intersection, eventObject: this.currentObject }]), this._intersections;
  }
  _unprojectedPoint;
  get unprojectedPoint() {
    if (this._unprojectedPoint == null) {
      const t = this.pointer;
      this._unprojectedPoint = new I(t.x, t.y, 0).unproject(this.camera);
    }
    return this._unprojectedPoint;
  }
  get stopped() {
    return this.propagationState.stoppedImmediate || this.propagationState.stopped;
  }
  get stoppedImmediate() {
    return this.propagationState.stoppedImmediate;
  }
  get delta() {
    throw new Error("not supported");
  }
  constructor(t, n, r, o, i, s, u = i.object, a = u, l = {
    stopped: !n,
    stoppedImmediate: false
  }) {
    super(r), this.type = t, this.bubbles = n, this.internalPointer = o, this.intersection = i, this.camera = s, this.currentObject = u, this.object = a, this.propagationState = l;
  }
  stopPropagation() {
    this.propagationState.stopped = true;
  }
  stopImmediatePropagation() {
    this.propagationState.stoppedImmediate = true;
  }
  /**
   * for internal use
   */
  retarget(t) {
    return new L(this.type, this.bubbles, this.nativeEvent, this.internalPointer, this.intersection, this.camera, t, this.target, this.propagationState);
  }
}
let Be$1 = class Be extends L {
  get deltaX() {
    return this.nativeEvent.deltaX;
  }
  get deltaY() {
    return this.nativeEvent.deltaY;
  }
  get deltaZ() {
    return this.nativeEvent.deltaZ;
  }
  constructor(t, n, r, o, i, s) {
    super("wheel", true, t, n, r, o, i, s);
  }
  /**
   * for internal use
   */
  retarget(t) {
    return new Be(this.nativeEvent, this.internalPointer, this.intersection, this.camera, t, this.target);
  }
};
function N(e) {
  Vr$1(e, e.currentObject);
}
function Vr$1(e, t) {
  if (t == null)
    return;
  const n = as$1(t, e.type);
  if (n != null && n.length > 0) {
    const r = e.retarget(t), o = n.length;
    for (let i = 0; i < o && !r.stoppedImmediate; i++)
      n[i](r);
  }
  e.stopped || Vr$1(e, t.parent);
}
const Br$1 = {
  click: "onClick",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick",
  pointercancel: "onPointerCancel",
  pointerdown: "onPointerDown",
  pointerenter: "onPointerEnter",
  pointerleave: "onPointerLeave",
  pointermove: "onPointerMove",
  pointerout: "onPointerOut",
  pointerover: "onPointerOver",
  pointerup: "onPointerUp",
  wheel: "onWheel"
}, us$1 = Object.keys(Br$1);
function as$1(e, t) {
  if (e._listeners != null && t in e._listeners)
    return e._listeners[t];
  let n;
  if (e.isVoidObject && t === "click" && e.parent?.__r3f != null && (n = e.parent.__r3f.root.getState().onPointerMissed), e.__r3f != null && (n = e.__r3f.handlers[Br$1[t]]), n != null)
    return [n];
}
const ls$1 = 1e10, cs$1 = new jo$1(ls$1), rn$1 = /* @__PURE__ */ new Map();
function Ur$1(e) {
  let t = rn$1.get(e);
  return t == null && (t = new He$1(cs$1), t.isVoidObject = true, t.parent = e, t.pointerEventsOrder = -1 / 0, rn$1.set(e, t)), t;
}
function fs$1(e, t, n) {
  const r = t.normal ?? t.face?.normal;
  return r == null ? false : (e.setFromNormalAndCoplanarPoint(r, t.localPoint), e.applyMatrix4(n), true);
}
function ds$1(e, t, n) {
  if (t === "none" || t === "listener" && !e)
    return false;
  if (n === "all")
    return true;
  if (typeof n == "function")
    return ({ id: i, type: s, state: u }) => n(i, s, u);
  let r, o;
  return "deny" in n ? (o = true, r = n.deny) : (o = false, r = n.allow), Array.isArray(r) ? (i) => on$1(r.includes(i.type), o) : (i) => on$1(r === i.type, o);
}
function on$1(e, t) {
  return t ? !e : e;
}
function Hr$1(e, t, n, r = false, o, i, s) {
  const u = r || ps$1(e, t), a = t.pointerEvents ?? o, l = a ?? t.defaultPointerEvents ?? "listener", c = t.pointerEventsType ?? i ?? "all", f = t.pointerEventsOrder ?? s ?? 0, _ = ds$1(u, l, c), d = n.length;
  if (d === 1)
    (_ === true || typeof _ == "function" && _(n[0])) && Qe$1(n[0], t, l, c, f);
  else if (_ === true)
    for (let p = 0; p < d; p++)
      Qe$1(n[p], t, l, c, f);
  else if (typeof _ == "function")
    for (let p = 0; p < d; p++) {
      const g = n[p];
      _(g) && Qe$1(g, t, l, c, f);
    }
  if (t.children.length === 0 || t.intersectChildren === false)
    return;
  const h = t.interactableDescendants ?? t.children, v = h.length;
  for (let p = 0; p < v; p++)
    Hr$1(e, h[p], n, u, a, c, f);
}
function ps$1(e, t) {
  if (t.ancestorsHaveListeners || e === "pointer" && t.ancestorsHavePointerListeners || e === "wheel" && t.ancestorsHaveWheelListeners || t.__r3f != null && t.__r3f?.eventCount > 0 && (e === "wheel" && t.__r3f.handlers.onWheel != null || e === "pointer" && Object.keys(t.__r3f.handlers).some((o) => o != "onWheel")))
    return true;
  if (t._listeners == null)
    return false;
  if (e === "wheel") {
    const o = t._listeners.wheel;
    return o != null && o.length > 0;
  }
  const n = Object.entries(t._listeners), r = n.length;
  for (let o = 0; o < r; o++) {
    const i = n[o];
    if (i[0] !== "wheel" && us$1.includes(i[0]) && i[1] != null && i[1].length > 0)
      return true;
  }
  return false;
}
function Qe$1({ intersector: e, options: t }, n, r, o, i) {
  t.filter?.(n, r, o, i) !== false && e.executeIntersection(n, i);
}
function hs$1(e, t, { customSort: n = _s$1 } = {}, r) {
  let o, i, s;
  const u = e.length;
  for (let a = 0; a < u; a++) {
    const l = e[a], c = t?.[a];
    (o == null || n(l, c, o, i) < 0) && (s = a, o = l, i = c);
  }
  return s;
}
function _s$1(e, t = 0, n, r = 0) {
  return t != r ? r - t : e.distance - n.distance;
}
const sn$1 = 1e7;
function ms$1(e, t, n, r, o, i = 0) {
  const s = t.direction.clone().multiplyScalar(sn$1), u = sn$1;
  return {
    distance: u + i,
    object: Ur$1(e),
    point: s,
    normal: t.origin.clone().sub(s).normalize(),
    details: n(s, u),
    pointerPosition: r,
    pointerQuaternion: o,
    pointOnFace: s,
    localPoint: s
  };
}
function gs$1(e, t, n) {
  for (; n > 0; )
    e.push(t), --n;
}
const Ze$1 = Symbol("buttonsDownTime"), Es$1 = Symbol("buttonsClickTime");
globalThis.pointerEventspointerMap ??= /* @__PURE__ */ new Map();
je$1.prototype.setPointerCapture = function(e) {
  St$1(e)?.setCapture(this);
};
je$1.prototype.releasePointerCapture = function(e) {
  const t = St$1(e);
  t == null || !t.hasCaptured(this) || t.setCapture(void 0);
};
je$1.prototype.hasPointerCapture = function(e) {
  return St$1(e)?.hasCaptured(this) ?? false;
};
function St$1(e) {
  return globalThis.pointerEventspointerMap?.get(e);
}
let vs$1 = class vs {
  id;
  type;
  state;
  intersector;
  getCamera;
  onMoveCommited;
  parentSetPointerCapture;
  parentReleasePointerCapture;
  options;
  //state
  prevIntersection;
  intersection;
  prevEnabled = true;
  enabled = true;
  wheelIntersection;
  //derived state
  /**
   * ordered leaf -> root (bottom -> top)
   */
  pointerEntered = [];
  pointerEnteredHelper = [];
  pointerCapture;
  buttonsDownTime = /* @__PURE__ */ new Map();
  buttonsDown = /* @__PURE__ */ new Set();
  //to handle interaction before first move (after exit)
  wasMoved = false;
  onFirstMove = [];
  constructor(t, n, r, o, i, s, u, a, l = {}) {
    this.id = t, this.type = n, this.state = r, this.intersector = o, this.getCamera = i, this.onMoveCommited = s, this.parentSetPointerCapture = u, this.parentReleasePointerCapture = a, this.options = l, globalThis.pointerEventspointerMap?.set(t, this);
  }
  getPointerCapture() {
    return this.pointerCapture;
  }
  hasCaptured(t) {
    return this.pointerCapture?.object === t;
  }
  setCapture(t) {
    this.pointerCapture?.object !== t && (this.pointerCapture != null && (this.parentReleasePointerCapture?.(), this.pointerCapture = void 0), t != null && this.intersection != null && (this.pointerCapture = { object: t, intersection: this.intersection }, this.parentSetPointerCapture?.()));
  }
  getButtonsDown() {
    return this.buttonsDown;
  }
  /**
   * @returns undefined if no intersection was executed yet
   */
  getIntersection() {
    return this.intersection;
  }
  getEnabled() {
    return this.enabled;
  }
  setEnabled(t, n, r = true) {
    this.enabled !== t && (!t && this.pointerCapture != null && (this.parentReleasePointerCapture?.(), this.pointerCapture = void 0), this.enabled = t, r && this.commit(n, false));
  }
  computeIntersection(t, n, r) {
    return this.pointerCapture != null ? this.intersector.intersectPointerCapture(this.pointerCapture, r) : (this.intersector.startIntersection(r), Hr$1(t, n, [this]), this.intersector.finalizeIntersection(n));
  }
  setIntersection(t) {
    this.intersection = t;
  }
  commit(t, n) {
    const r = this.getCamera(), o = this.prevEnabled ? this.prevIntersection : void 0, i = this.enabled ? this.intersection : void 0;
    o != null && o.object != i?.object && N(new L("pointerout", true, t, this, o, r));
    const s = this.pointerEntered;
    this.pointerEntered = [], this.pointerEnteredHelper.length = 0, jr$1(i?.object, this.pointerEntered, s, this.pointerEnteredHelper);
    const u = s.length;
    for (let a = 0; a < u; a++) {
      const l = s[a];
      N(new L("pointerleave", false, t, this, o, r, l));
    }
    i != null && o?.object != i.object && N(new L("pointerover", true, t, this, i, r));
    for (let a = this.pointerEnteredHelper.length - 1; a >= 0; a--) {
      const l = this.pointerEnteredHelper[a];
      N(new L("pointerenter", false, t, this, i, r, l));
    }
    if (n && i != null && N(new L("pointermove", true, t, this, i, r)), this.prevIntersection = this.intersection, this.prevEnabled = this.enabled, !this.wasMoved && this.intersector.isReady()) {
      this.wasMoved = true;
      const a = this.onFirstMove.length;
      for (let l = 0; l < a; l++)
        this.onFirstMove[l](r);
      this.onFirstMove.length = 0;
    }
    this.onMoveCommited?.(this);
  }
  /**
   * computes and commits a move
   */
  move(t, n) {
    this.intersection = this.computeIntersection("pointer", t, n), this.commit(n, true);
  }
  /**
   * emits a move without (re-)computing the intersection
   * just emitting a move event to the current intersection
   */
  emitMove(t) {
    this.intersection != null && N(new L("pointermove", true, t, this, this.intersection, this.getCamera()));
  }
  down(t) {
    if (this.buttonsDown.add(t.button), !this.enabled)
      return;
    if (!this.wasMoved) {
      this.onFirstMove.push(this.down.bind(this, t));
      return;
    }
    if (this.intersection == null)
      return;
    N(new L("pointerdown", true, t, this, this.intersection, this.getCamera()));
    const { object: n } = this.intersection;
    n[Ze$1] ??= /* @__PURE__ */ new Map(), n[Ze$1].set(t.button, t.timeStamp), this.buttonsDownTime.set(t.button, t.timeStamp);
  }
  up(t) {
    if (this.buttonsDown.delete(t.button), !this.enabled)
      return;
    if (!this.wasMoved) {
      this.onFirstMove.push(this.up.bind(this, t));
      return;
    }
    if (this.intersection == null)
      return;
    const { clickThesholdMs: n, contextMenuButton: r = 2, dblClickThresholdMs: o = 500, clickThresholdMs: i = n ?? 300 } = this.options;
    this.pointerCapture = void 0;
    const s = ys$1(this.buttonsDownTime, this.intersection.object[Ze$1], t.button, t.timeStamp, i), u = this.getCamera();
    if (s && t.button === r && N(new L("contextmenu", true, t, this, this.intersection, u)), N(new L("pointerup", true, t, this, this.intersection, u)), !s || t.button === r)
      return;
    N(new L("click", true, t, this, this.intersection, u));
    const { object: a } = this.intersection, l = a[Es$1] ??= /* @__PURE__ */ new Map(), c = l.get(t.button);
    if (c == null || t.timeStamp - c > o) {
      l.set(t.button, t.timeStamp);
      return;
    }
    N(new L("dblclick", true, t, this, this.intersection, u)), l.delete(t.button);
  }
  cancel(t) {
    if (this.enabled) {
      if (!this.wasMoved) {
        this.onFirstMove.push(this.cancel.bind(this, t));
        return;
      }
      this.intersection != null && N(new L("pointercancel", true, t, this, this.intersection, this.getCamera()));
    }
  }
  wheel(t, n, r = false) {
    if (!this.enabled)
      return;
    if (!this.wasMoved && r) {
      this.onFirstMove.push(this.wheel.bind(this, t, n, r));
      return;
    }
    r || (this.wheelIntersection = this.computeIntersection("wheel", t, n));
    const o = r ? this.intersection : this.wheelIntersection;
    o != null && N(new Be$1(n, this, o, this.getCamera()));
  }
  emitWheel(t, n = false) {
    if (!this.enabled)
      return;
    if (!this.wasMoved && n) {
      this.onFirstMove.push(this.emitWheel.bind(this, t, n));
      return;
    }
    const r = n ? this.intersection : this.wheelIntersection;
    r != null && N(new Be$1(t, this, r, this.getCamera()));
  }
  exit(t) {
    this.wasMoved && (this.pointerCapture != null && (this.parentReleasePointerCapture?.(), this.pointerCapture = void 0), this.intersection = void 0, this.commit(t, false)), this.onFirstMove.length = 0, this.wasMoved = false;
  }
};
function jr$1(e, t, n, r) {
  if (e == null)
    return;
  const o = n.indexOf(e);
  o != -1 ? n.splice(o, 1) : r.push(e), t.push(e), jr$1(e.parent, t, n, r);
}
function ys$1(e, t, n, r, o) {
  if (t == null)
    return false;
  const i = t.get(n);
  return !(i == null || r - i > o || i != e.get(n));
}
const he$1 = new wr$1(), Je$1 = new wr$1(), un$1 = new Y$1(), an$1 = new Y$1(), ln$1 = new Y$1(), et$1 = new I(), bs$1 = new Te(), Pe$1 = new I();
function Cs$1(e, t, n) {
  Pe$1.copy(t).applyMatrix4(bs$1.copy(n.matrixWorld).invert());
  const r = n.geometry.attributes.uv;
  if (r == null || !(r instanceof Cr$1))
    return false;
  let o;
  return ws$1(n, (i, s, u) => {
    n.getVertexPosition(i, he$1.a), n.getVertexPosition(s, he$1.b), n.getVertexPosition(u, he$1.c);
    const a = he$1.closestPointToPoint(Pe$1, et$1).distanceTo(Pe$1);
    o != null && a >= o || (o = a, Je$1.copy(he$1), un$1.fromBufferAttribute(r, i), an$1.fromBufferAttribute(r, s), ln$1.fromBufferAttribute(r, u));
  }), o == null ? false : (Je$1.closestPointToPoint(Pe$1, et$1), Je$1.getInterpolation(et$1, un$1, an$1, ln$1, e), true);
}
function ws$1(e, t) {
  const n = e.geometry.drawRange;
  if (e.geometry.index != null) {
    const s = e.geometry.index, u = Math.max(0, n.start), a = Math.min(s.count, n.start + n.count);
    for (let l = u; l < a; l += 3)
      t(s.getX(l), s.getX(l + 1), s.getX(l + 2));
    return;
  }
  const r = e.geometry.attributes.position;
  if (r == null)
    return;
  const o = Math.max(0, n.start), i = Math.min(r.count, n.start + n.count);
  for (let s = o; s < i; s += 3)
    t(s, s + 1, s + 2);
}
new Te();
new zo$1();
new I();
new ze$1();
new st$1();
new Y$1();
new I(0, 0, 0), new I(0, 0, 1);
const cn$1 = new Te(), As$1 = new I();
new I(0, 0, -1);
new ze$1();
const fn$1 = new Y$1(), Ts$1 = new I();
let Os$1 = class Os {
  prepareTransformation;
  options;
  raycaster = new $o$1();
  cameraQuaternion = new ut$1();
  fromPosition = new I();
  fromQuaternion = new ut$1();
  coords = new Y$1();
  viewPlane = new ze$1();
  intersects = [];
  pointerEventsOrders = [];
  constructor(t, n) {
    this.prepareTransformation = t, this.options = n;
  }
  isReady() {
    return true;
  }
  intersectPointerCapture({ intersection: t, object: n }, r) {
    const o = t.details;
    if (o.type != "screen-ray")
      throw new Error(`unable to process a pointer capture of type "${t.details.type}" with a camera ray intersector`);
    if (!this.startIntersection(r))
      return t;
    this.viewPlane.constant -= o.distanceViewPlane;
    const i = this.raycaster.ray.intersectPlane(this.viewPlane, new I());
    if (i == null)
      return t;
    t.object.updateWorldMatrix(true, false), fs$1(this.viewPlane, t, t.object.matrixWorld);
    let s = t.uv;
    return t.object instanceof He$1 && Cs$1(fn$1, i, t.object) && (s = fn$1.clone()), {
      ...t,
      details: {
        ...o,
        direction: this.raycaster.ray.direction.clone(),
        screenPoint: this.coords.clone()
      },
      uv: s,
      object: n,
      point: i,
      pointOnFace: i,
      pointerPosition: this.raycaster.ray.origin.clone(),
      pointerQuaternion: this.cameraQuaternion.clone()
    };
  }
  startIntersection(t) {
    const n = this.prepareTransformation(t, this.coords);
    return n == null ? false : (n.updateWorldMatrix(true, false), n.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, As$1), this.raycaster.setFromCamera(this.coords, n), this.viewPlane.setFromNormalAndCoplanarPoint(n.getWorldDirection(Ts$1), this.raycaster.ray.origin), true);
  }
  executeIntersection(t, n) {
    const r = this.intersects.length;
    t.raycast(this.raycaster, this.intersects), gs$1(this.pointerEventsOrders, n, this.intersects.length - r);
  }
  finalizeIntersection(t) {
    const n = this.fromPosition.clone(), r = this.cameraQuaternion.clone(), o = this.raycaster.ray.direction.clone(), i = hs$1(this.intersects, this.pointerEventsOrders, this.options), s = i == null ? void 0 : this.intersects[i];
    return this.intersects.length = 0, this.pointerEventsOrders.length = 0, s == null ? ms$1(t, this.raycaster.ray, (u, a) => ({
      type: "screen-ray",
      distanceViewPlane: a,
      screenPoint: this.coords.clone(),
      direction: o
    }), n, r) : (s.object.updateWorldMatrix(true, false), cn$1.copy(s.object.matrixWorld).invert(), Object.assign(s, {
      details: {
        type: "screen-ray",
        distanceViewPlane: this.viewPlane.distanceToPoint(s.point),
        screenPoint: this.coords.clone(),
        direction: o
      },
      pointOnFace: s.point,
      pointerPosition: n,
      pointerQuaternion: r,
      localPoint: s.point.clone().applyMatrix4(cn$1)
    }));
  }
};
new I();
new Y$1();
new Te();
new I();
new ut$1();
new ze$1();
new Ko$1();
new I();
new I();
new I();
new I(1e-4, 1e-4, 1e-4);
new Te();
let Ss$1 = 23412;
function Ps$1() {
  return Ss$1++;
}
function Ds$1(e, t, n) {
  if (!(t instanceof globalThis.MouseEvent))
    return n.set(0, 0);
  const { width: r, height: o, top: i, left: s } = e.getBoundingClientRect(), u = t.clientX - s, a = t.clientY - i;
  return n.set(u / r * 2 - 1, -(a / o) * 2 + 1);
}
function Is$1(e, t, n, r) {
  return ks$1(
    e,
    //backwards compatibility
    typeof t == "function" ? t : () => t,
    n,
    Ds$1.bind(null, e),
    e.setPointerCapture.bind(e),
    (o) => {
      e.hasPointerCapture(o) && e.releasePointerCapture(o);
    },
    {
      pointerTypePrefix: "screen-",
      ...r
    }
  );
}
function ks$1(e, t, n, r, o, i, s = {}) {
  const u = s?.forwardPointerCapture ?? true, a = /* @__PURE__ */ new Map(), l = s.pointerTypePrefix ?? "forward-", c = (O, T) => {
    let E = a.get(O.pointerId);
    return E != null || (E = new vs$1(Ps$1(), `${l}${O.pointerType}`, O.pointerState, new Os$1((x, R) => (r(x, R), t()), s), t, void 0, u ? o.bind(null, O.pointerId) : void 0, u ? i.bind(null, O.pointerId) : void 0, s), T != "move" && T != "wheel" && (E.setIntersection(E.computeIntersection("pointer", n, O)), E.commit(O, false)), a.set(O.pointerId, E)), E;
  }, f = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), d = [], h = [], v = (O, T, E) => {
    switch (O) {
      case "move":
        E.move(n, T);
        return;
      case "wheel":
        E.wheel(n, T);
        return;
      case "cancel":
        E.cancel(T);
        return;
      case "down":
        if (!dn$1(T))
          return;
        E.down(T);
        return;
      case "up":
        if (!dn$1(T))
          return;
        E.up(T);
        return;
      case "exit":
        _.delete(E), f.delete(E), E.exit(T);
        return;
    }
  }, p = (O, T) => {
    const E = c(T, O);
    O === "move" && _.set(E, T), O === "wheel" && f.set(E, T), s.batchEvents ?? true ? h.push({ type: O, event: T }) : v(O, T, E);
  }, g = p.bind(null, "move"), b = p.bind(null, "cancel"), C = p.bind(null, "down"), P = p.bind(null, "up"), M = p.bind(null, "wheel"), A = p.bind(null, "exit");
  return e.addEventListener("pointermove", g), e.addEventListener("pointercancel", b), e.addEventListener("pointerdown", C), e.addEventListener("pointerup", P), e.addEventListener("wheel", M), e.addEventListener("pointerleave", A), {
    destroy() {
      e.removeEventListener("pointermove", g), e.removeEventListener("pointercancel", b), e.removeEventListener("pointerdown", C), e.removeEventListener("pointerup", P), e.removeEventListener("wheel", M), e.removeEventListener("pointerleave", A), _.clear(), f.clear();
    },
    update() {
      const O = h.length;
      for (let T = 0; T < O; T++) {
        const { type: E, event: x } = h[T], R = c(x, E);
        if (E === "move" && (d.push(R), _.get(R) != x)) {
          R.emitMove(x);
          continue;
        }
        if (E === "wheel" && f.get(R) != x) {
          R.emitWheel(x);
          continue;
        }
        v(E, x, R);
      }
      if (h.length = 0, s.intersectEveryFrame ?? false)
        for (const [T, E] of _.entries())
          d.includes(T) || T.move(n, E);
      d.length = 0;
    }
  };
}
function dn$1(e) {
  return e.button != null;
}
function xs$1({
  canvas: e,
  contextParts: { scene: t, camera: n, renderer: r }
}) {
  const { update: o, destroy: i } = Is$1(D(e), () => D(n.activeCamera), t.value), { off: s } = r.loop.onLoop(o);
  ie$1(i), ie$1(s);
  const u = Ur$1(t.value), a = createEventHook();
  return u.addEventListener("click", a.trigger), {
    onPointerMissed: a.on
  };
}
const Rs$1 = "useTres", [Ls$1, Fs$1] = createInjectionState(({
  scene: e,
  canvas: t,
  windowSize: n,
  rendererOptions: r
}) => {
  const o = it$1(e), i = is$1(n, t), s = es$1({ sizes: i }), u = os$1(
    {
      scene: o,
      canvas: t,
      options: r,
      contextParts: { sizes: i, camera: s }
    }
  ), a = xs$1({
    canvas: t,
    contextParts: { scene: o, camera: s, renderer: u }
  }), l = {
    sizes: i,
    scene: o,
    camera: s,
    renderer: u,
    controls: Ae$1(null),
    extend: pt$1,
    events: a
  };
  return l.scene.value.__tres = {
    root: l
  }, l;
}, {
  injectionKey: "useTres"
}), zr$1 = () => {
  const e = Fs$1();
  if (!e)
    throw new Error(`useTresContext must be used together with useTresContextProvider.
 You probably tried to use it above or on the same level as a TresCanvas component.
 It should be used in child components of a TresCanvas instance.`);
  return e;
};
function Ms$1() {
  const { scene: e, renderer: t, camera: n, sizes: r, controls: o, extend: i, events: s } = zr$1();
  return {
    scene: e,
    renderer: t.instance,
    camera: n.activeCamera,
    sizes: r,
    controls: o,
    extend: i,
    events: s,
    invalidate: t.invalidate,
    advance: t.advance
  };
}
const ml$1 = () => {
  const e = Ms$1(), { renderer: t } = zr$1(), n = nn$1(), r = nn$1();
  t.loop.onBeforeLoop((i) => {
    n.trigger({ ...e, ...i });
  }), t.loop.onLoop((i) => {
    r.trigger({ ...e, ...i });
  });
  const o = t.replaceRenderFunction;
  return {
    stop: t.loop.stop,
    start: t.loop.start,
    isActive: t.loop.isActive,
    onBeforeRender: n.on,
    onRender: r.on,
    render: o
  };
};
function Ns$1(e, t = {}, n = {}) {
  let r = e;
  const o = (u) => {
    r = u;
  };
  let i = new Proxy({}, {});
  const s = {
    has(u, a) {
      return a in t || a in r;
    },
    get(u, a, l) {
      return a in t ? t[a](r) : r[a];
    },
    set(u, a, l) {
      return n[a] ? n[a](l, r, i, o) : r[a] = l, true;
    }
  };
  return i = new Proxy({}, s), i;
}
const Vs$1 = [
  "onClick",
  "onContextmenu",
  "onPointermove",
  "onPointerenter",
  "onPointerleave",
  "onPointerover",
  "onPointerout",
  "onDblclick",
  "onPointerdown",
  "onPointerup",
  "onPointercancel",
  "onLostpointercapture",
  "onWheel"
], Bs$1 = {
  onClick: "click",
  onContextmenu: "contextmenu",
  onPointermove: "pointermove",
  onPointerenter: "pointerenter",
  onPointerleave: "pointerleave",
  onPointerover: "pointerover",
  onPointerout: "pointerout",
  onDblclick: "dblclick",
  onPointerdown: "pointerdown",
  onPointerup: "pointerup",
  onPointercancel: "pointercancel",
  onLostpointercapture: "lostpointercapture",
  onWheel: "wheel"
}, pn$1 = (e) => Vs$1.includes(e), Us$1 = (e) => {
  const t = e.scene.value;
  function n(c, f, _, d) {
    if (d || (d = {}), d.args || (d.args = []), Bi$1(c))
      return null;
    let h = c.replace("Tres", ""), v;
    if (c === "primitive") {
      (!Tt$1(d.object) || me$1(d.object)) && Jt$1(
        "Tres primitives need an 'object' prop, whose value is an object or shallowRef<object>"
      ), h = d.object.type;
      const p = {};
      v = Ns$1(
        d.object,
        {
          object: (b) => b,
          isPrimitive: () => true,
          __tres: () => p
        },
        {
          object: (b, C, P, M) => {
            Zi$1(b, P, M, { patchProp: i, remove: o, insert: r }, e);
          },
          __tres: (b) => {
            Object.assign(p, b);
          }
        }
      );
    } else {
      const p = dt$1.value[h];
      p || Jt$1(
        `${h} is not defined on the THREE namespace. Use extend to add it to the catalog.`
      ), v = new p(...d.args);
    }
    return v ? (re$1(v) && (d?.position || v.position.set(3, 3, 3), d?.lookAt || v.lookAt(0, 0, 0)), v = X(v, {
      ...Yi$1(v) ? v.__tres : {},
      type: h,
      memoizedProps: d,
      primitive: c === "primitive",
      attach: d.attach
    }, e), v) : null;
  }
  function r(c, f) {
    if (!c)
      return;
    f = f || t;
    const _ = c.__tres ? c : X(c, {}, e), d = f.__tres ? f : X(f, {}, e);
    c = se$1(_), f = se$1(d), re$1(c) && e.camera?.registerCamera(c), _.__tres.attach ? Xi$1(d, _, _.__tres.attach) : lt$1(c) && lt$1(d) && (d.add(c), c.dispatchEvent({ type: "added" })), _.__tres.parent = d, d.__tres.objects && !d.__tres.objects.includes(_) && d.__tres.objects.push(_);
  }
  function o(c, f) {
    if (!c)
      return;
    f = at$1(f) ? "default" : f;
    const _ = c.__tres?.dispose;
    at$1(_) || (_ === null ? f = false : f = _);
    const d = c.__tres?.primitive, h = f === "default" ? !d : !!f;
    if (c.__tres && "objects" in c.__tres && [...c.__tres.objects].forEach((v) => o(v, f)), h && c.children && [...c.children].forEach((v) => o(v, f)), Mr$1(c, e), Nr$1(c, e), h && !Fr$1(c)) {
      if (Q(f))
        f(c);
      else if (Q(c.dispose))
        try {
          c.dispose();
        } catch {
        }
    }
    "__tres" in c && delete c.__tres;
  }
  function i(c, f, _, d) {
    if (!c)
      return;
    let h = c;
    const v = f;
    if (c.__tres && (c.__tres.memoizedProps[f] = d), f === "attach") {
      const C = c.__tres?.parent || c.parent;
      o(c), X(c, { attach: d }, e), C && r(c, C);
      return;
    }
    if (f === "dispose") {
      c.__tres || (c = X(c, {}, e)), c.__tres.dispose = d;
      return;
    }
    pn$1(f) && Q(d) && c.addEventListener(Bs$1[f], d);
    let p = Qt$1(v), g = h?.[p];
    if (v === "args") {
      const C = c, P = _ ?? [], M = d ?? [], A = c.__tres?.type || c.type;
      if (A && P.length && !Or$1(P, M)) {
        const O = new dt$1.value[A](...d), T = Object.getOwnPropertyDescriptors(O);
        Object.entries(T).forEach(([E, x]) => {
          if (!(!x.writable && !x.set) && E in C)
            try {
              C[E] = O[E];
            } catch (R) {
              console.warn(`Could not set property ${E} on ${A}:`, R);
            }
        }), h = C;
      }
      return;
    }
    if (h.type === "BufferGeometry") {
      if (v === "args")
        return;
      h.setAttribute(
        Qt$1(v),
        new Cr$1(...d)
      );
      return;
    }
    if (v.includes("-") && g === void 0) {
      const C = Ve$1(h, v);
      if (g = C.target, h = C.target, p = C.key, g && p) {
        g[p] = d, re$1(c) && c.updateProjectionMatrix(), ft$1(c);
        return;
      }
    }
    let b = d;
    if (b === "" && (b = true), Q(g)) {
      pn$1(f) || (Array.isArray(b) ? c[p](...b) : c[p](b)), p.startsWith("on") && Q(b) && (h[p] = b);
      return;
    }
    Zt$1(g) && Zt$1(b) ? g.mask = b.mask : Ir$1(g) && zi$1(b) ? g.set(b) : $i$1(g) && Ki$1(b) && g.constructor === b.constructor ? g.copy(b) : ct$1(g) && Array.isArray(b) ? "fromArray" in g && typeof g.fromArray == "function" ? g.fromArray(b) : g.set(...b) : ct$1(g) && typeof b == "number" ? "setScalar" in g && typeof g.setScalar == "function" ? g.setScalar(b) : g.set(b) : h[p] = b, re$1(c) && c.updateProjectionMatrix(), ft$1(c);
  }
  function s(c) {
    return c?.__tres?.parent || null;
  }
  function u(c) {
    const f = X(new je$1(), { type: "Comment" }, e);
    return f.name = c, f;
  }
  function a(c) {
    const _ = s(c)?.__tres?.objects || [], d = _.indexOf(c);
    return d < 0 || d >= _.length - 1 ? null : _[d + 1];
  }
  const l = () => {
  };
  return {
    insert: r,
    remove: o,
    createElement: n,
    patchProp: i,
    parentNode: s,
    createText: l,
    createComment: u,
    setText: l,
    setElementText: l,
    nextSibling: a,
    querySelector: l,
    setScopeId: l,
    cloneNode: l,
    insertStaticContent: l
  };
}, Hs$1 = ["asset-load"];
let js$1 = class js {
  subscribers = /* @__PURE__ */ new Set();
  messageQueue = [];
  maxQueueSize = 100;
  // Prevent memory leaks by limiting queue size
  /**
   * Send a message to devtools subscribers
   * If no subscribers are available, only queueable message types are queued
   */
  send(t, n) {
    const r = {
      type: t,
      data: n,
      timestamp: Date.now()
    };
    this.subscribers.size > 0 ? this.subscribers.forEach((o) => o(r)) : Hs$1.includes(t) && this.queueMessage(r);
  }
  /**
   * Queue a message for later delivery
   */
  queueMessage(t) {
    this.messageQueue.push(t), this.messageQueue.length > this.maxQueueSize && this.messageQueue.shift();
  }
  /**
   * Flush all queued messages to current subscribers
   */
  flushQueue() {
    this.messageQueue.length === 0 || this.subscribers.size === 0 || (this.messageQueue.forEach((t) => {
      this.subscribers.forEach((n) => n(t));
    }), this.messageQueue = []);
  }
  /**
   * Subscribe to devtools messages
   * When a new subscriber is added, all queued messages (asset-load events) are immediately delivered
   */
  subscribe(t) {
    return this.subscribers.add(t), this.flushQueue(), () => {
      this.subscribers.delete(t);
    };
  }
  /**
   * Check if there are any subscribers
   */
  get hasSubscribers() {
    return this.subscribers.size > 0;
  }
  /**
   * Get the current queue size
   */
  get queueSize() {
    return this.messageQueue.length;
  }
  /**
   * Clear all queued messages
   */
  clearQueue() {
    this.messageQueue = [];
  }
};
var zs$1 = Object.create, $r$1 = Object.defineProperty, $s$1 = Object.getOwnPropertyDescriptor, Pt$1 = Object.getOwnPropertyNames, Ks$1 = Object.getPrototypeOf, Ws$1 = Object.prototype.hasOwnProperty, Gs$1 = (e, t) => function() {
  return e && (t = (0, e[Pt$1(e)[0]])(e = 0)), t;
}, Ys$1 = (e, t) => function() {
  return t || (0, e[Pt$1(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, qs$1 = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Pt$1(t))
      !Ws$1.call(e, o) && o !== n && $r$1(e, o, { get: () => t[o], enumerable: !(r = $s$1(t, o)) || r.enumerable });
  return e;
}, Xs$1 = (e, t, n) => (n = e != null ? zs$1(Ks$1(e)) : {}, qs$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  $r$1(n, "default", { value: e, enumerable: true }),
  e
)), Oe$1 = Gs$1({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), Qs$1 = Ys$1({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    Oe$1(), t.exports = r;
    function n(i) {
      return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
    }
    function r(i) {
      if (i = i || {}, i.circles) return o(i);
      const s = /* @__PURE__ */ new Map();
      if (s.set(Date, (f) => new Date(f)), s.set(Map, (f, _) => new Map(a(Array.from(f), _))), s.set(Set, (f, _) => new Set(a(Array.from(f), _))), i.constructorHandlers)
        for (const f of i.constructorHandlers)
          s.set(f[0], f[1]);
      let u = null;
      return i.proto ? c : l;
      function a(f, _) {
        const d = Object.keys(f), h = new Array(d.length);
        for (let v = 0; v < d.length; v++) {
          const p = d[v], g = f[p];
          typeof g != "object" || g === null ? h[p] = g : g.constructor !== Object && (u = s.get(g.constructor)) ? h[p] = u(g, _) : ArrayBuffer.isView(g) ? h[p] = n(g) : h[p] = _(g);
        }
        return h;
      }
      function l(f) {
        if (typeof f != "object" || f === null) return f;
        if (Array.isArray(f)) return a(f, l);
        if (f.constructor !== Object && (u = s.get(f.constructor)))
          return u(f, l);
        const _ = {};
        for (const d in f) {
          if (Object.hasOwnProperty.call(f, d) === false) continue;
          const h = f[d];
          typeof h != "object" || h === null ? _[d] = h : h.constructor !== Object && (u = s.get(h.constructor)) ? _[d] = u(h, l) : ArrayBuffer.isView(h) ? _[d] = n(h) : _[d] = l(h);
        }
        return _;
      }
      function c(f) {
        if (typeof f != "object" || f === null) return f;
        if (Array.isArray(f)) return a(f, c);
        if (f.constructor !== Object && (u = s.get(f.constructor)))
          return u(f, c);
        const _ = {};
        for (const d in f) {
          const h = f[d];
          typeof h != "object" || h === null ? _[d] = h : h.constructor !== Object && (u = s.get(h.constructor)) ? _[d] = u(h, c) : ArrayBuffer.isView(h) ? _[d] = n(h) : _[d] = c(h);
        }
        return _;
      }
    }
    function o(i) {
      const s = [], u = [], a = /* @__PURE__ */ new Map();
      if (a.set(Date, (d) => new Date(d)), a.set(Map, (d, h) => new Map(c(Array.from(d), h))), a.set(Set, (d, h) => new Set(c(Array.from(d), h))), i.constructorHandlers)
        for (const d of i.constructorHandlers)
          a.set(d[0], d[1]);
      let l = null;
      return i.proto ? _ : f;
      function c(d, h) {
        const v = Object.keys(d), p = new Array(v.length);
        for (let g = 0; g < v.length; g++) {
          const b = v[g], C = d[b];
          if (typeof C != "object" || C === null)
            p[b] = C;
          else if (C.constructor !== Object && (l = a.get(C.constructor)))
            p[b] = l(C, h);
          else if (ArrayBuffer.isView(C))
            p[b] = n(C);
          else {
            const P = s.indexOf(C);
            P !== -1 ? p[b] = u[P] : p[b] = h(C);
          }
        }
        return p;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, f);
        if (d.constructor !== Object && (l = a.get(d.constructor)))
          return l(d, f);
        const h = {};
        s.push(d), u.push(h);
        for (const v in d) {
          if (Object.hasOwnProperty.call(d, v) === false) continue;
          const p = d[v];
          if (typeof p != "object" || p === null)
            h[v] = p;
          else if (p.constructor !== Object && (l = a.get(p.constructor)))
            h[v] = l(p, f);
          else if (ArrayBuffer.isView(p))
            h[v] = n(p);
          else {
            const g = s.indexOf(p);
            g !== -1 ? h[v] = u[g] : h[v] = f(p);
          }
        }
        return s.pop(), u.pop(), h;
      }
      function _(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return c(d, _);
        if (d.constructor !== Object && (l = a.get(d.constructor)))
          return l(d, _);
        const h = {};
        s.push(d), u.push(h);
        for (const v in d) {
          const p = d[v];
          if (typeof p != "object" || p === null)
            h[v] = p;
          else if (p.constructor !== Object && (l = a.get(p.constructor)))
            h[v] = l(p, _);
          else if (ArrayBuffer.isView(p))
            h[v] = n(p);
          else {
            const g = s.indexOf(p);
            g !== -1 ? h[v] = u[g] : h[v] = _(p);
          }
        }
        return s.pop(), u.pop(), h;
      }
    }
  }
});
Oe$1();
Oe$1();
Oe$1();
var Kr$1 = typeof navigator < "u", y = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof y.chrome < "u" && y.chrome.devtools;
Kr$1 && (y.self, y.top);
var hn$1;
typeof navigator < "u" && ((hn$1 = navigator.userAgent) == null || hn$1.toLowerCase().includes("electron"));
Oe$1();
var Zs$1 = Xs$1(Qs$1()), Js$1 = /(?:^|[-_/])(\w)/g;
function eu$1(e, t) {
  return t ? t.toUpperCase() : "";
}
function tu$1(e) {
  return e && `${e}`.replace(Js$1, eu$1);
}
function nu$1(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const r = n.lastIndexOf("/"), o = n.substring(r + 1);
  {
    const i = o.lastIndexOf(t);
    return o.substring(0, i);
  }
}
var _n$1 = (0, Zs$1.default)({ circles: true });
const ru$1 = {
  trailing: true
};
function ue$1(e, t = 25, n = {}) {
  if (n = { ...ru$1, ...n }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let r, o, i = [], s, u;
  const a = (l, c) => (s = ou$1(e, l, c), s.finally(() => {
    if (s = null, n.trailing && u && !o) {
      const f = a(l, u);
      return u = null, f;
    }
  }), s);
  return function(...l) {
    return s ? (n.trailing && (u = l), s) : new Promise((c) => {
      const f = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const _ = n.leading ? r : a(this, l);
        for (const d of i)
          d(_);
        i = [];
      }, t), f ? (r = a(this, l), c(r)) : i.push(c);
    });
  };
}
async function ou$1(e, t, n) {
  return await e.apply(t, n);
}
function ht$1(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], i = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? ht$1(o, t, i) : typeof o == "function" && (t[i] = o);
  }
  return t;
}
const iu$1 = { run: (e) => e() }, su$1 = () => iu$1, Wr$1 = typeof console.createTask < "u" ? console.createTask : su$1;
function uu$1(e, t) {
  const n = t.shift(), r = Wr$1(n);
  return e.reduce(
    (o, i) => o.then(() => r.run(() => i(...t))),
    Promise.resolve()
  );
}
function au$1(e, t) {
  const n = t.shift(), r = Wr$1(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function tt$1(e, t) {
  for (const n of [...e])
    n(t);
}
let lu$1 = class lu {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const o = t;
    let i;
    for (; this._deprecatedHooks[t]; )
      i = this._deprecatedHooks[t], t = i.to;
    if (i && !r.allowDeprecated) {
      let s = i.message;
      s || (s = `${o} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let r, o = (...i) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...i));
    return r = this.hook(t, o), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r)
      this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = ht$1(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = ht$1(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(uu$1, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(au$1, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && tt$1(this._before, o);
    const i = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return i instanceof Promise ? i.finally(() => {
      this._after && o && tt$1(this._after, o);
    }) : (this._after && o && tt$1(this._after, o), i);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
};
function Gr$1() {
  return new lu$1();
}
var cu$1 = Object.create, Yr$1 = Object.defineProperty, fu$1 = Object.getOwnPropertyDescriptor, Dt$1 = Object.getOwnPropertyNames, du$1 = Object.getPrototypeOf, pu$1 = Object.prototype.hasOwnProperty, hu = (e, t) => function() {
  return e && (t = (0, e[Dt$1(e)[0]])(e = 0)), t;
}, qr$1 = (e, t) => function() {
  return t || (0, e[Dt$1(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, _u$1 = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Dt$1(t))
      !pu$1.call(e, o) && o !== n && Yr$1(e, o, { get: () => t[o], enumerable: !(r = fu$1(t, o)) || r.enumerable });
  return e;
}, mu$1 = (e, t, n) => (n = e != null ? cu$1(du$1(e)) : {}, _u$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Yr$1(n, "default", { value: e, enumerable: true }),
  e
)), m = hu({
  "../../node_modules/.pnpm/tsup@8.4.0_@microsoft+api-extractor@7.51.1_@types+node@22.13.14__jiti@2.4.2_postcss@8.5_96eb05a9d65343021e53791dd83f3773/node_modules/tsup/assets/esm_shims.js"() {
  }
}), gu$1 = qr$1({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    m(), function(n) {
      var r = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, o = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], i = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, s = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, u = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, a = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), l = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), c = [".", "!", "~", "*", "'", "(", ")"].join(""), f = function(p, g) {
        var b = "-", C = "", P = "", M = true, A = {}, O, T, E, x, R, Ut, de, te, Ht, z, w, Se, H, ne, K = "";
        if (typeof p != "string")
          return "";
        if (typeof g == "string" && (b = g), de = u.en, te = s.en, typeof g == "object") {
          O = g.maintainCase || false, A = g.custom && typeof g.custom == "object" ? g.custom : A, E = +g.truncate > 1 && g.truncate || false, x = g.uric || false, R = g.uricNoSlash || false, Ut = g.mark || false, M = !(g.symbols === false || g.lang === false), b = g.separator || b, x && (K += a), R && (K += l), Ut && (K += c), de = g.lang && u[g.lang] && M ? u[g.lang] : M ? u.en : {}, te = g.lang && s[g.lang] ? s[g.lang] : g.lang === false || g.lang === true ? {} : s.en, g.titleCase && typeof g.titleCase.length == "number" && Array.prototype.toString.call(g.titleCase) ? (g.titleCase.forEach(function(U) {
            A[U + ""] = U + "";
          }), T = true) : T = !!g.titleCase, g.custom && typeof g.custom.length == "number" && Array.prototype.toString.call(g.custom) && g.custom.forEach(function(U) {
            A[U + ""] = U + "";
          }), Object.keys(A).forEach(function(U) {
            var pe;
            U.length > 1 ? pe = new RegExp("\\b" + d(U) + "\\b", "gi") : pe = new RegExp(d(U), "gi"), p = p.replace(pe, A[U]);
          });
          for (w in A)
            K += w;
        }
        for (K += b, K = d(K), p = p.replace(/(^\s+|\s+$)/g, ""), H = false, ne = false, z = 0, Se = p.length; z < Se; z++)
          w = p[z], h(w, A) ? H = false : te[w] ? (w = H && te[w].match(/[A-Za-z0-9]/) ? " " + te[w] : te[w], H = false) : w in r ? (z + 1 < Se && o.indexOf(p[z + 1]) >= 0 ? (P += w, w = "") : ne === true ? (w = i[P] + r[w], P = "") : w = H && r[w].match(/[A-Za-z0-9]/) ? " " + r[w] : r[w], H = false, ne = false) : w in i ? (P += w, w = "", z === Se - 1 && (w = i[P]), ne = true) : /* process symbol chars */ de[w] && !(x && a.indexOf(w) !== -1) && !(R && l.indexOf(w) !== -1) ? (w = H || C.substr(-1).match(/[A-Za-z0-9]/) ? b + de[w] : de[w], w += p[z + 1] !== void 0 && p[z + 1].match(/[A-Za-z0-9]/) ? b : "", H = true) : (ne === true ? (w = i[P] + w, P = "", ne = false) : H && (/[A-Za-z0-9]/.test(w) || C.substr(-1).match(/A-Za-z0-9]/)) && (w = " " + w), H = false), C += w.replace(new RegExp("[^\\w\\s" + K + "_-]", "g"), b);
        return T && (C = C.replace(/(\w)(\S*)/g, function(U, pe, jt) {
          var Ye = pe.toUpperCase() + (jt !== null ? jt : "");
          return Object.keys(A).indexOf(Ye.toLowerCase()) < 0 ? Ye : Ye.toLowerCase();
        })), C = C.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), E && C.length > E && (Ht = C.charAt(E) === b, C = C.slice(0, E), Ht || (C = C.slice(0, C.lastIndexOf(b)))), !O && !T && (C = C.toLowerCase()), C;
      }, _ = function(p) {
        return function(b) {
          return f(b, p);
        };
      }, d = function(p) {
        return p.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, h = function(v, p) {
        for (var g in p)
          if (p[g] === v)
            return true;
      };
      if (typeof t < "u" && t.exports)
        t.exports = f, t.exports.createSlug = _;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return f;
        });
      else
        try {
          if (n.getSlug || n.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          n.getSlug = f, n.createSlug = _;
        } catch {
        }
    }(e);
  }
}), Eu$1 = qr$1({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    m(), t.exports = gu$1();
  }
});
m();
m();
m();
m();
m();
m();
m();
m();
function vu$1(e) {
  var t;
  const n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return n === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : n;
}
function yu$1(e) {
  const t = e.__file;
  if (t)
    return tu$1(nu$1(t, ".vue"));
}
function mn$1(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function It$1(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function Xr$1(e) {
  var t, n;
  const r = (t = e.subTree) == null ? void 0 : t.type, o = It$1(e);
  return o ? ((n = o?.types) == null ? void 0 : n.Fragment) === r : false;
}
function Ke$1(e) {
  var t, n, r;
  const o = vu$1(e?.type || {});
  if (o)
    return o;
  if (e?.root === e)
    return "Root";
  for (const s in (n = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : n.components)
    if (e.parent.type.components[s] === e?.type)
      return mn$1(e, s);
  for (const s in (r = e.appContext) == null ? void 0 : r.components)
    if (e.appContext.components[s] === e?.type)
      return mn$1(e, s);
  const i = yu$1(e?.type || {});
  return i || "Anonymous Component";
}
function bu$1(e) {
  var t, n, r;
  const o = (r = (n = (t = e?.appContext) == null ? void 0 : t.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) != null ? r : 0, i = e === e?.root ? "root" : e.uid;
  return `${o}:${i}`;
}
function _t$1(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Cu$1() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var De$1;
function wu$1(e) {
  return De$1 || (De$1 = document.createRange()), De$1.selectNode(e), De$1.getBoundingClientRect();
}
function Au$1(e) {
  const t = Cu$1();
  if (!e.children)
    return t;
  for (let n = 0, r = e.children.length; n < r; n++) {
    const o = e.children[n];
    let i;
    if (o.component)
      i = ee$1(o.component);
    else if (o.el) {
      const s = o.el;
      s.nodeType === 1 || s.getBoundingClientRect ? i = s.getBoundingClientRect() : s.nodeType === 3 && s.data.trim() && (i = wu$1(s));
    }
    i && Tu$1(t, i);
  }
  return t;
}
function Tu$1(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var gn$1 = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function ee$1(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? gn$1 : Xr$1(e) ? Au$1(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? ee$1(e.subTree.component) : gn$1;
}
m();
function kt$1(e) {
  return Xr$1(e) ? Ou$1(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Ou$1(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...kt$1(n.component)) : n?.el && t.push(n.el);
  }), t;
}
var Qr$1 = "__vue-devtools-component-inspector__", Zr$1 = "__vue-devtools-component-inspector__card__", Jr$1 = "__vue-devtools-component-inspector__name__", eo$1 = "__vue-devtools-component-inspector__indicator__", to$1 = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, Su$1 = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Pu$1 = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function ce$1() {
  return document.getElementById(Qr$1);
}
function Du$1() {
  return document.getElementById(Zr$1);
}
function Iu$1() {
  return document.getElementById(eo$1);
}
function ku$1() {
  return document.getElementById(Jr$1);
}
function xt$1(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Rt$1(e) {
  var t;
  const n = document.createElement("div");
  n.id = (t = e.elementId) != null ? t : Qr$1, Object.assign(n.style, {
    ...to$1,
    ...xt$1(e.bounds),
    ...e.style
  });
  const r = document.createElement("span");
  r.id = Zr$1, Object.assign(r.style, {
    ...Su$1,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const o = document.createElement("span");
  o.id = Jr$1, o.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const i = document.createElement("i");
  return i.id = eo$1, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Pu$1), r.appendChild(o), r.appendChild(i), n.appendChild(r), document.body.appendChild(n), n;
}
function Lt$1(e) {
  const t = ce$1(), n = Du$1(), r = ku$1(), o = Iu$1();
  t && (Object.assign(t.style, {
    ...to$1,
    ...xt$1(e.bounds)
  }), Object.assign(n.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function xu$1(e) {
  const t = ee$1(e);
  if (!t.width && !t.height)
    return;
  const n = Ke$1(e);
  ce$1() ? Lt$1({ bounds: t, name: n }) : Rt$1({ bounds: t, name: n });
}
function no$1() {
  const e = ce$1();
  e && (e.style.display = "none");
}
var mt$1 = null;
function gt$1(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (mt$1 = n, n.vnode.el)) {
      const o = ee$1(n), i = Ke$1(n);
      ce$1() ? Lt$1({ bounds: o, name: i }) : Rt$1({ bounds: o, name: i });
    }
  }
}
function Ru$1(e, t) {
  if (e.preventDefault(), e.stopPropagation(), mt$1) {
    const n = bu$1(mt$1);
    t(n);
  }
}
var Ue$1 = null;
function Lu$1() {
  no$1(), window.removeEventListener("mouseover", gt$1), window.removeEventListener("click", Ue$1, true), Ue$1 = null;
}
function Fu$1() {
  return window.addEventListener("mouseover", gt$1), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), Ru$1(n, (r) => {
        window.removeEventListener("click", t, true), Ue$1 = null, window.removeEventListener("mouseover", gt$1);
        const o = ce$1();
        o && (o.style.display = "none"), e(JSON.stringify({ id: r }));
      });
    }
    Ue$1 = t, window.addEventListener("click", t, true);
  });
}
function Mu$1(e) {
  const t = _t$1(F.value, e.id);
  if (t) {
    const [n] = kt$1(t);
    if (typeof n.scrollIntoView == "function")
      n.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const r = ee$1(t), o = document.createElement("div"), i = {
        ...xt$1(r),
        position: "absolute"
      };
      Object.assign(o.style, i), document.body.appendChild(o), o.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const r = ee$1(t);
      if (r.width || r.height) {
        const o = Ke$1(t), i = ce$1();
        i ? Lt$1({ ...e, name: o, bounds: r }) : Rt$1({ ...e, name: o, bounds: r }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
m();
var En$1;
((En$1 = y).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (En$1.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = true);
function Nu$1(e) {
  let t = 0;
  const n = setInterval(() => {
    y.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(n);
  }, 30);
}
function Vu$1() {
  const e = y.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function Bu$1() {
  return new Promise((e) => {
    function t() {
      Vu$1(), e(y.__VUE_INSPECTOR__);
    }
    y.__VUE_INSPECTOR__ ? t() : Nu$1(() => {
      t();
    });
  });
}
m();
m();
function Uu$1(e) {
  return !!(e && e.__v_isReadonly);
}
function ro$1(e) {
  return Uu$1(e) ? ro$1(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt$1(e) {
  return !!(e && e.__v_isRef === true);
}
function _e$1(e) {
  const t = e && e.__v_raw;
  return t ? _e$1(t) : e;
}
var Hu$1 = class Hu {
  constructor() {
    this.refEditor = new ju$1();
  }
  set(e, t, n, r) {
    const o = Array.isArray(t) ? t : t.split(".");
    for (; o.length > 1; ) {
      const u = o.shift();
      e instanceof Map ? e = e.get(u) : e instanceof Set ? e = Array.from(e.values())[u] : e = e[u], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const i = o[0], s = this.refEditor.get(e)[i];
    r ? r(e, i, n) : this.refEditor.isRef(s) ? this.refEditor.set(s, n) : e[i] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let r = 0; r < n.length; r++)
      if (e instanceof Map ? e = e.get(n[r]) : e = e[n[r]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, n = false) {
    if (typeof e > "u")
      return false;
    const r = Array.isArray(t) ? t.slice() : t.split("."), o = n ? 2 : 1;
    for (; e && r.length > o; ) {
      const i = r.shift();
      e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, r) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : _e$1(t) instanceof Map ? t.delete(n) : _e$1(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, r) : _e$1(t) instanceof Map ? t.set(e.newKey || n, r) : _e$1(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
      }
    };
  }
}, ju$1 = class ju {
  set(e, t) {
    if (nt$1(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((o) => e.add(o));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const o = new Set(e.keys());
        n.forEach((i) => {
          e.set(i, Reflect.get(t, i)), o.delete(i);
        }), o.forEach((i) => e.delete(i));
        return;
      }
      const r = new Set(Object.keys(e));
      n.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t, o)), r.delete(o);
      }), r.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return nt$1(e) ? e.value : e;
  }
  isRef(e) {
    return nt$1(e) || ro$1(e);
  }
};
m();
m();
m();
var zu$1 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function $u$1() {
  if (!Kr$1 || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: false,
      mouseEventEnabled: false,
      keyboardEventEnabled: false,
      componentEventEnabled: false,
      performanceEventEnabled: false,
      selected: ""
    };
  const e = localStorage.getItem(zu$1);
  return e ? JSON.parse(e) : {
    recordingState: false,
    mouseEventEnabled: false,
    keyboardEventEnabled: false,
    componentEventEnabled: false,
    performanceEventEnabled: false,
    selected: ""
  };
}
m();
m();
m();
var yn$1;
((yn$1 = y).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (yn$1.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var Ku$1 = new Proxy(y.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Wu$1(e, t) {
  k$1.timelineLayersState[t.id] = false, Ku$1.push({
    ...e,
    descriptorId: t.id,
    appRecord: It$1(t.app)
  });
}
var Cn$1;
((Cn$1 = y).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || (Cn$1.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Ft$1 = new Proxy(y.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
}), oo$1 = ue$1(() => {
  fe$1.hooks.callHook("sendInspectorToClient", io$1());
});
function Gu$1(e, t) {
  var n, r;
  Ft$1.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (n = e.treeFilterPlaceholder) != null ? n : "Search tree...",
    stateFilterPlaceholder: (r = e.stateFilterPlaceholder) != null ? r : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: It$1(t.app)
  }), oo$1();
}
function io$1() {
  return Ft$1.filter((e) => e.descriptor.app === F.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const n = e.descriptor, r = e.options;
    return {
      id: r.id,
      label: r.label,
      logo: n.logo,
      icon: `custom-ic-baseline-${(t = r?.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: n.packageName,
      homepage: n.homepage,
      pluginId: n.id
    };
  });
}
function Re$1(e, t) {
  return Ft$1.find((n) => n.options.id === e && (t ? n.descriptor.app === t : true));
}
function Yu$1() {
  const e = Gr$1();
  e.hook("addInspector", ({ inspector: r, plugin: o }) => {
    Gu$1(r, o.descriptor);
  });
  const t = ue$1(async ({ inspectorId: r, plugin: o }) => {
    var i;
    if (!r || !((i = o?.descriptor) != null && i.app) || k$1.highPerfModeEnabled)
      return;
    const s = Re$1(r, o.descriptor.app), u = {
      app: o.descriptor.app,
      inspectorId: r,
      filter: s?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((a) => {
      e.callHookWith(
        async (l) => {
          await Promise.all(l.map((c) => c(u))), a();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (a) => {
        await Promise.all(a.map((l) => l({
          inspectorId: r,
          rootNodes: u.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const n = ue$1(async ({ inspectorId: r, plugin: o }) => {
    var i;
    if (!r || !((i = o?.descriptor) != null && i.app) || k$1.highPerfModeEnabled)
      return;
    const s = Re$1(r, o.descriptor.app), u = {
      app: o.descriptor.app,
      inspectorId: r,
      nodeId: s?.selectedNodeId || "",
      state: null
    }, a = {
      currentTab: `custom-inspector:${r}`
    };
    u.nodeId && await new Promise((l) => {
      e.callHookWith(
        async (c) => {
          await Promise.all(c.map((f) => f(u, a))), l();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (l) => {
        await Promise.all(l.map((c) => c({
          inspectorId: r,
          nodeId: u.nodeId,
          state: u.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", n), e.hook("customInspectorSelectNode", ({ inspectorId: r, nodeId: o, plugin: i }) => {
    const s = Re$1(r, i.descriptor.app);
    s && (s.selectedNodeId = o);
  }), e.hook("timelineLayerAdded", ({ options: r, plugin: o }) => {
    Wu$1(r, o.descriptor);
  }), e.hook("timelineEventAdded", ({ options: r, plugin: o }) => {
    var i;
    const s = ["performance", "component-event", "keyboard", "mouse"];
    k$1.highPerfModeEnabled || !((i = k$1.timelineLayersState) != null && i[o.descriptor.id]) && !s.includes(r.layerId) || e.callHookWith(
      async (u) => {
        await Promise.all(u.map((a) => a(r)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: r }) => {
    const o = r.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o)
      return null;
    const i = o.id.toString();
    return [...o.instanceMap].filter(([u]) => u.split(":")[0] === i).map(([, u]) => u);
  }), e.hook("getComponentBounds", async ({ instance: r }) => ee$1(r)), e.hook("getComponentName", ({ instance: r }) => Ke$1(r)), e.hook("componentHighlight", ({ uid: r }) => {
    const o = F.value.instanceMap.get(r);
    o && xu$1(o);
  }), e.hook("componentUnhighlight", () => {
    no$1();
  }), e;
}
var An$1;
((An$1 = y).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (An$1.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var On$1;
((On$1 = y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (On$1.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var Pn$1;
((Pn$1 = y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (Pn$1.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var In$1;
((In$1 = y).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (In$1.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var xn$1;
((xn$1 = y).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (xn$1.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var Z$1 = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function qu$1() {
  return {
    connected: false,
    clientConnected: false,
    vitePluginDetected: true,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: true,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: $u$1()
  };
}
var Ln$1;
((Ln$1 = y)[Z$1]) != null || (Ln$1[Z$1] = qu$1());
var Xu$1 = ue$1((e) => {
  fe$1.hooks.callHook("devtoolsStateUpdated", { state: e });
});
ue$1((e, t) => {
  fe$1.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var We$1 = new Proxy(y.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, n) {
    return t === "value" ? y.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : y.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), F = new Proxy(y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, n) {
    return t === "value" ? y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function so$1() {
  Xu$1({
    ...y[Z$1],
    appRecords: We$1.value,
    activeAppRecordId: F.id,
    tabs: y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Qu$1(e) {
  y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, so$1();
}
function Zu$1(e) {
  y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, so$1();
}
var k$1 = new Proxy(y[Z$1], {
  get(e, t) {
    return t === "appRecords" ? We$1 : t === "activeAppRecordId" ? F.id : t === "tabs" ? y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : y[Z$1][t];
  },
  deleteProperty(e, t) {
    return delete e[t], true;
  },
  set(e, t, n) {
    return { ...y[Z$1] }, e[t] = n, y[Z$1][t] = n, true;
  }
});
function Ju$1(e = {}) {
  var t, n, r;
  const { file: o, host: i, baseUrl: s = window.location.origin, line: u = 0, column: a = 0 } = e;
  if (o) {
    if (i === "chrome-extension") {
      const l = o.replace(/\\/g, "\\\\"), c = (n = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? n : "/";
      fetch(`${c}__open-in-editor?file=${encodeURI(o)}`).then((f) => {
        if (!f.ok) {
          const _ = `Opening component ${l} failed`;
          console.log(`%c${_}`, "color:red");
        }
      });
    } else if (k$1.vitePluginDetected) {
      const l = (r = y.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? r : s;
      y.__VUE_INSPECTOR__.openInEditor(l, o, u, a);
    }
  }
}
m();
m();
m();
m();
m();
var Mn$1;
((Mn$1 = y).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (Mn$1.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var Mt$1 = new Proxy(y.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, n) {
    return Reflect.get(e, t, n);
  }
});
function Et$1(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Nt$1(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function ea$1(e) {
  var t, n, r;
  const o = (n = (t = Mt$1.find((i) => {
    var s;
    return i[0].id === e && !!((s = i[0]) != null && s.settings);
  })) == null ? void 0 : t[0]) != null ? n : null;
  return (r = o?.settings) != null ? r : null;
}
function uo$1(e, t) {
  var n, r, o;
  const i = Nt$1(e);
  if (i) {
    const s = localStorage.getItem(i);
    if (s)
      return JSON.parse(s);
  }
  if (e) {
    const s = (r = (n = Mt$1.find((u) => u[0].id === e)) == null ? void 0 : n[0]) != null ? r : null;
    return Et$1((o = s?.settings) != null ? o : {});
  }
  return Et$1(t);
}
function ta$1(e, t) {
  const n = Nt$1(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Et$1(t)));
}
function na$1(e, t, n) {
  const r = Nt$1(e), o = localStorage.getItem(r), i = JSON.parse(o || "{}"), s = {
    ...i,
    [t]: n
  };
  localStorage.setItem(r, JSON.stringify(s)), fe$1.hooks.callHookWith(
    (u) => {
      u.forEach((a) => a({
        pluginId: e,
        key: t,
        oldValue: i[t],
        newValue: n,
        settings: s
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
var Vn$1, Bn$1, V$1 = (Bn$1 = (Vn$1 = y).__VUE_DEVTOOLS_HOOK) != null ? Bn$1 : Vn$1.__VUE_DEVTOOLS_HOOK = Gr$1(), ra$1 = {
  vueAppInit(e) {
    V$1.hook("app:init", e);
  },
  vueAppUnmount(e) {
    V$1.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    V$1.hook("app:connected", e);
  },
  componentAdded(e) {
    return V$1.hook("component:added", e);
  },
  componentEmit(e) {
    return V$1.hook("component:emit", e);
  },
  componentUpdated(e) {
    return V$1.hook("component:updated", e);
  },
  componentRemoved(e) {
    return V$1.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    V$1.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return V$1.hook("perf:start", e);
  },
  perfEnd(e) {
    return V$1.hook("perf:end", e);
  }
}, ao$1 = {
  on: ra$1,
  setupDevToolsPlugin(e, t) {
    return V$1.callHook("devtools-plugin:setup", e, t);
  }
}, oa$1 = class oa {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (k$1.highPerfModeEnabled)
      return;
    const n = io$1().find((r) => r.packageName === this.plugin.descriptor.packageName);
    if (n?.id) {
      if (e) {
        const r = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        V$1.callHook("component:updated", ...r);
      } else
        V$1.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: n.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && ta$1(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    k$1.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    k$1.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return k$1.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    k$1.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return uo$1(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, ia$1 = oa$1;
m();
m();
m();
m();
var sa$1 = "__vue_devtool_undefined__", ua$1 = "__vue_devtool_infinity__", aa$1 = "__vue_devtool_negative_infinity__", la$1 = "__vue_devtool_nan__";
m();
m();
var ca$1 = {
  [sa$1]: "undefined",
  [la$1]: "NaN",
  [ua$1]: "Infinity",
  [aa$1]: "-Infinity"
};
Object.entries(ca$1).reduce((e, [t, n]) => (e[n] = t, e), {});
m();
m();
m();
m();
m();
var Un$1;
((Un$1 = y).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (Un$1.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function fa$1(e, t) {
  return ao$1.setupDevToolsPlugin(e, t);
}
function da$1(e, t) {
  const [n, r] = e;
  if (n.app !== t)
    return;
  const o = new ia$1({
    plugin: {
      setupFn: r,
      descriptor: n
    },
    ctx: fe$1
  });
  n.packageName === "vuex" && o.on.editInspectorState((i) => {
    o.sendInspectorState(i.inspectorId);
  }), r(o);
}
function lo$1(e, t) {
  y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || k$1.highPerfModeEnabled && !t?.inspectingComponent || (y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Mt$1.forEach((n) => {
    da$1(n, e);
  }));
}
m();
m();
var ve$1 = "__VUE_DEVTOOLS_ROUTER__", ae$1 = "__VUE_DEVTOOLS_ROUTER_INFO__", jn$1;
((jn$1 = y)[ae$1]) != null || (jn$1[ae$1] = {
  currentRoute: null,
  routes: []
});
var $n$1;
(($n$1 = y)[ve$1]) != null || ($n$1[ve$1] = {});
new Proxy(y[ae$1], {
  get(e, t) {
    return y[ae$1][t];
  }
});
new Proxy(y[ve$1], {
  get(e, t) {
    if (t === "value")
      return y[ve$1];
  }
});
function pa$1(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Vt$1(e) {
  return e.map((t) => {
    let { path: n, name: r, children: o, meta: i } = t;
    return o?.length && (o = Vt$1(o)), {
      path: n,
      name: r,
      children: o,
      meta: i
    };
  });
}
function ha$1(e) {
  if (e) {
    const { fullPath: t, hash: n, href: r, path: o, name: i, matched: s, params: u, query: a } = e;
    return {
      fullPath: t,
      hash: n,
      href: r,
      path: o,
      name: i,
      params: u,
      query: a,
      matched: Vt$1(s)
    };
  }
  return e;
}
function _a$1(e, t) {
  function n() {
    var r;
    const o = (r = e.app) == null ? void 0 : r.config.globalProperties.$router, i = ha$1(o?.currentRoute.value), s = Vt$1(pa$1(o)), u = console.warn;
    console.warn = () => {
    }, y[ae$1] = {
      currentRoute: i ? _n$1(i) : {},
      routes: _n$1(s)
    }, y[ve$1] = o, console.warn = u;
  }
  n(), ao$1.on.componentUpdated(ue$1(() => {
    var r;
    ((r = t.value) == null ? void 0 : r.app) === e.app && (n(), !k$1.highPerfModeEnabled && fe$1.hooks.callHook("routerInfoUpdated", { state: y[ae$1] }));
  }, 200));
}
function ma$1(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: F.value.app,
        rootNodes: []
      };
      return await new Promise((r) => {
        e.callHookWith(
          async (o) => {
            await Promise.all(o.map((i) => i(n))), r();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), n.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const n = {
        ...t,
        app: F.value.app,
        state: null
      }, r = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((o) => {
        e.callHookWith(
          async (i) => {
            await Promise.all(i.map((s) => s(n, r))), o();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), n.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const n = new Hu$1(), r = {
        ...t,
        app: F.value.app,
        set: (o, i = t.path, s = t.state.value, u) => {
          n.set(o, i, s, u || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (o) => {
          o.forEach((i) => i(r));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const n = Re$1(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: n.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return Fu$1();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return Lu$1();
    },
    // get component render code
    getComponentRenderCode(t) {
      const n = _t$1(F.value, t);
      if (n)
        return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return Mu$1({ id: t });
    },
    // open in editor
    openInEditor: Ju$1,
    // get vue inspector
    getVueInspector: Bu$1,
    // toggle app
    toggleApp(t, n) {
      const r = We$1.value.find((o) => o.id === t);
      r && (Zu$1(t), Qu$1(r), _a$1(r, F), oo$1(), lo$1(r.app, n));
    },
    // inspect dom
    inspectDOM(t) {
      const n = _t$1(F.value, t);
      if (n) {
        const [r] = kt$1(n);
        r && (y.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r);
      }
    },
    updatePluginSettings(t, n, r) {
      na$1(t, n, r);
    },
    getPluginSettings(t) {
      return {
        options: ea$1(t),
        values: uo$1(t)
      };
    }
  };
}
m();
var Wn$1;
((Wn$1 = y).__VUE_DEVTOOLS_ENV__) != null || (Wn$1.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: false
});
var Yn$1 = Yu$1(), qn$1;
((qn$1 = y).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (qn$1.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: Yn$1,
  get state() {
    return {
      ...k$1,
      activeAppRecordId: F.id,
      activeAppRecord: F.value,
      appRecords: We$1.value
    };
  },
  api: ma$1(Yn$1)
});
var fe$1 = y.__VUE_DEVTOOLS_KIT_CONTEXT__;
m();
mu$1(Eu$1());
var Qn$1;
((Qn$1 = y).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (Qn$1.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
m();
m();
function ga$1(e) {
  k$1.highPerfModeEnabled = e ?? !k$1.highPerfModeEnabled, !e && F.value && lo$1(F.value.app);
}
m();
m();
m();
function Ea$1(e) {
  k$1.devtoolsClientDetected = {
    ...k$1.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(k$1.devtoolsClientDetected).some(Boolean);
  ga$1(!t);
}
var Jn$1;
((Jn$1 = y).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (Jn$1.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = Ea$1);
m();
m();
m();
m();
m();
m();
m();
var va$1 = class va {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, co$1 = class co {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new va$1();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, ya$1 = class ya extends co$1 {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
m();
m();
function ba$1(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function Ca$1(e, t) {
  const n = ba$1(e);
  if ("find" in n)
    return n.find(t);
  const r = n;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t(i))
      return i;
  }
}
function le$1(e, t) {
  Object.entries(e).forEach(([n, r]) => t(r, n));
}
function Le$1(e, t) {
  return e.indexOf(t) !== -1;
}
function tr$1(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r))
      return r;
  }
}
var wa$1 = class wa {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return Ca$1(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
m();
m();
var Aa$1 = (e) => Object.prototype.toString.call(e).slice(8, -1), fo$1 = (e) => typeof e > "u", Ta$1 = (e) => e === null, ye$1 = (e) => typeof e != "object" || e === null || e === Object.prototype ? false : Object.getPrototypeOf(e) === null ? true : Object.getPrototypeOf(e) === Object.prototype, vt$1 = (e) => ye$1(e) && Object.keys(e).length === 0, G = (e) => Array.isArray(e), Oa$1 = (e) => typeof e == "string", Sa$1 = (e) => typeof e == "number" && !isNaN(e), Pa$1 = (e) => typeof e == "boolean", Da$1 = (e) => e instanceof RegExp, be$1 = (e) => e instanceof Map, Ce$1 = (e) => e instanceof Set, po$1 = (e) => Aa$1(e) === "Symbol", Ia$1 = (e) => e instanceof Date && !isNaN(e.valueOf()), ka$1 = (e) => e instanceof Error, nr$1 = (e) => typeof e == "number" && isNaN(e), xa$1 = (e) => Pa$1(e) || Ta$1(e) || fo$1(e) || Sa$1(e) || Oa$1(e) || po$1(e), Ra$1 = (e) => typeof e == "bigint", La$1 = (e) => e === 1 / 0 || e === -1 / 0, Fa$1 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Ma$1 = (e) => e instanceof URL;
m();
var ho$1 = (e) => e.replace(/\./g, "\\."), rt$1 = (e) => e.map(String).map(ho$1).join("."), ge$1 = (e) => {
  const t = [];
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let i = e.charAt(o);
    if (i === "\\" && e.charAt(o + 1) === ".") {
      n += ".", o++;
      continue;
    }
    if (i === ".") {
      t.push(n), n = "";
      continue;
    }
    n += i;
  }
  const r = n;
  return t.push(r), t;
};
m();
function j$1(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var _o$1 = [
  j$1(fo$1, "undefined", () => null, () => {
  }),
  j$1(Ra$1, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  j$1(Ia$1, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  j$1(ka$1, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }),
  j$1(Da$1, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  j$1(
    Ce$1,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  j$1(be$1, "map", (e) => [...e.entries()], (e) => new Map(e)),
  j$1((e) => nr$1(e) || La$1(e), "number", (e) => nr$1(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  j$1((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  j$1(Ma$1, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Ge$1(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var mo$1 = Ge$1((e, t) => po$1(e) ? !!t.symbolRegistry.getIdentifier(e) : false, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const r = n.symbolRegistry.getValue(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown symbol");
  return r;
}), Na$1 = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), go$1 = Ge$1(Fa$1, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = Na$1[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Eo$1(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : false;
}
var vo$1 = Ge$1(Eo$1, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const r = {};
  return n.forEach((o) => {
    r[o] = e[o];
  }), r;
}, (e, t, n) => {
  const r = n.classRegistry.getValue(t[1]);
  if (!r)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(r.prototype), e);
}), yo$1 = Ge$1((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const r = n.customTransformerRegistry.findByName(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown custom value");
  return r.deserialize(e);
}), Va$1 = [vo$1, mo$1, yo$1, go$1], rr$1 = (e, t) => {
  const n = tr$1(Va$1, (o) => o.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const r = tr$1(_o$1, (o) => o.isApplicable(e, t));
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation
    };
}, bo$1 = {};
_o$1.forEach((e) => {
  bo$1[e.annotation] = e;
});
var Ba$1 = (e, t, n) => {
  if (G(t))
    switch (t[0]) {
      case "symbol":
        return mo$1.untransform(e, t, n);
      case "class":
        return vo$1.untransform(e, t, n);
      case "custom":
        return yo$1.untransform(e, t, n);
      case "typed-array":
        return go$1.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const r = bo$1[t];
    if (!r)
      throw new Error("Unknown transformation: " + t);
    return r.untransform(e, n);
  }
};
m();
var oe = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function Co$1(e) {
  if (Le$1(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Le$1(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Le$1(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Ua$1 = (e, t) => {
  Co$1(t);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ce$1(e))
      e = oe(e, +r);
    else if (be$1(e)) {
      const o = +r, i = +t[++n] == 0 ? "key" : "value", s = oe(e, o);
      switch (i) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else
      e = e[r];
  }
  return e;
}, yt$1 = (e, t, n) => {
  if (Co$1(t), t.length === 0)
    return n(e);
  let r = e;
  for (let i = 0; i < t.length - 1; i++) {
    const s = t[i];
    if (G(r)) {
      const u = +s;
      r = r[u];
    } else if (ye$1(r))
      r = r[s];
    else if (Ce$1(r)) {
      const u = +s;
      r = oe(r, u);
    } else if (be$1(r)) {
      if (i === t.length - 2)
        break;
      const a = +s, l = +t[++i] == 0 ? "key" : "value", c = oe(r, a);
      switch (l) {
        case "key":
          r = c;
          break;
        case "value":
          r = r.get(c);
          break;
      }
    }
  }
  const o = t[t.length - 1];
  if (G(r) ? r[+o] = n(r[+o]) : ye$1(r) && (r[o] = n(r[o])), Ce$1(r)) {
    const i = oe(r, +o), s = n(i);
    i !== s && (r.delete(i), r.add(s));
  }
  if (be$1(r)) {
    const i = +t[t.length - 2], s = oe(r, i);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const a = n(s);
        r.set(a, r.get(s)), a !== s && r.delete(s);
        break;
      }
      case "value": {
        r.set(s, n(r.get(s)));
        break;
      }
    }
  }
  return e;
};
function bt$1(e, t, n = []) {
  if (!e)
    return;
  if (!G(e)) {
    le$1(e, (i, s) => bt$1(i, t, [...n, ...ge$1(s)]));
    return;
  }
  const [r, o] = e;
  o && le$1(o, (i, s) => {
    bt$1(i, t, [...n, ...ge$1(s)]);
  }), t(r, n);
}
function Ha$1(e, t, n) {
  return bt$1(t, (r, o) => {
    e = yt$1(e, o, (i) => Ba$1(i, r, n));
  }), e;
}
function ja$1(e, t) {
  function n(r, o) {
    const i = Ua$1(e, ge$1(o));
    r.map(ge$1).forEach((s) => {
      e = yt$1(e, s, () => i);
    });
  }
  if (G(t)) {
    const [r, o] = t;
    r.forEach((i) => {
      e = yt$1(e, ge$1(i), () => e);
    }), o && le$1(o, n);
  } else
    le$1(t, n);
  return e;
}
var za$1 = (e, t) => ye$1(e) || G(e) || be$1(e) || Ce$1(e) || Eo$1(e, t);
function $a$1(e, t, n) {
  const r = n.get(e);
  r ? r.push(t) : n.set(e, [t]);
}
function Ka$1(e, t) {
  const n = {};
  let r;
  return e.forEach((o) => {
    if (o.length <= 1)
      return;
    t || (o = o.map((u) => u.map(String)).sort((u, a) => u.length - a.length));
    const [i, ...s] = o;
    i.length === 0 ? r = s.map(rt$1) : n[rt$1(i)] = s.map(rt$1);
  }), r ? vt$1(n) ? [r] : [r, n] : vt$1(n) ? void 0 : n;
}
var wo$1 = (e, t, n, r, o = [], i = [], s = /* @__PURE__ */ new Map()) => {
  var u;
  const a = xa$1(e);
  if (!a) {
    $a$1(e, o, t);
    const h = s.get(e);
    if (h)
      return r ? {
        transformedValue: null
      } : h;
  }
  if (!za$1(e, n)) {
    const h = rr$1(e, n), v = h ? {
      transformedValue: h.value,
      annotations: [h.type]
    } : {
      transformedValue: e
    };
    return a || s.set(e, v), v;
  }
  if (Le$1(i, e))
    return {
      transformedValue: null
    };
  const l = rr$1(e, n), c = (u = l?.value) != null ? u : e, f = G(c) ? [] : {}, _ = {};
  le$1(c, (h, v) => {
    if (v === "__proto__" || v === "constructor" || v === "prototype")
      throw new Error(`Detected property ${v}. This is a prototype pollution risk, please remove it from your object.`);
    const p = wo$1(h, t, n, r, [...o, v], [...i, e], s);
    f[v] = p.transformedValue, G(p.annotations) ? _[v] = p.annotations : ye$1(p.annotations) && le$1(p.annotations, (g, b) => {
      _[ho$1(v) + "." + b] = g;
    });
  });
  const d = vt$1(_) ? {
    transformedValue: f,
    annotations: l ? [l.type] : void 0
  } : {
    transformedValue: f,
    annotations: l ? [l.type, _] : _
  };
  return a || s.set(e, d), d;
};
m();
m();
function Ao$1(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function or$1(e) {
  return Ao$1(e) === "Array";
}
function Wa$1(e) {
  if (Ao$1(e) !== "Object")
    return false;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Ga$1(e, t, n, r, o) {
  const i = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), o && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
function Ct(e, t = {}) {
  if (or$1(e))
    return e.map((o) => Ct(o, t));
  if (!Wa$1(e))
    return e;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
  return [...n, ...r].reduce((o, i) => {
    if (or$1(t.props) && !t.props.includes(i))
      return o;
    const s = e[i], u = Ct(s, t);
    return Ga$1(o, i, u, e, t.nonenumerable), o;
  }, {});
}
var S = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = false } = {}) {
    this.classRegistry = new ya$1(), this.symbolRegistry = new co$1((t) => {
      var n;
      return (n = t.description) != null ? n : "";
    }), this.customTransformerRegistry = new wa$1(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = wo$1(e, t, this, this.dedupe), r = {
      json: n.transformedValue
    };
    n.annotations && (r.meta = {
      ...r.meta,
      values: n.annotations
    });
    const o = Ka$1(t, this.dedupe);
    return o && (r.meta = {
      ...r.meta,
      referentialEqualities: o
    }), r;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let r = Ct(t);
    return n?.values && (r = Ha$1(r, n.values, this)), n?.referentialEqualities && (r = ja$1(r, n.referentialEqualities)), r;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
S.defaultInstance = new S();
S.serialize = S.defaultInstance.serialize.bind(S.defaultInstance);
S.deserialize = S.defaultInstance.deserialize.bind(S.defaultInstance);
S.stringify = S.defaultInstance.stringify.bind(S.defaultInstance);
S.parse = S.defaultInstance.parse.bind(S.defaultInstance);
S.registerClass = S.defaultInstance.registerClass.bind(S.defaultInstance);
S.registerSymbol = S.defaultInstance.registerSymbol.bind(S.defaultInstance);
S.registerCustom = S.defaultInstance.registerCustom.bind(S.defaultInstance);
S.allowErrorProps = S.defaultInstance.allowErrorProps.bind(S.defaultInstance);
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
m();
var ir$1;
((ir$1 = y).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (ir$1.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var ur$1;
((ur$1 = y).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (ur$1.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var lr$1;
((lr$1 = y).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (lr$1.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var fr$1;
((fr$1 = y).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (fr$1.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var pr$1;
((pr$1 = y).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (pr$1.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var _r$1;
((_r$1 = y).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (_r$1.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
m();
m();
m();
m();
m();
m();
m();
function Ya$1(e, t) {
  const n = `▲ ■ ●${e}`;
  typeof gr$1 == "function" ? gr$1(n, t) : console.log(n);
}
function gr$1(e, t) {
  throw new Error(e + t);
}
function Bt$1(e) {
  let t = 0;
  return e.traverse((n) => {
    if ($e$1(n) && n.type !== "HightlightMesh") {
      const r = n.geometry, o = r.attributes.position.count * 3 * Float32Array.BYTES_PER_ELEMENT, i = r.index ? r.index.count * Uint32Array.BYTES_PER_ELEMENT : 0, s = r.attributes.normal ? r.attributes.normal.count * 3 * Float32Array.BYTES_PER_ELEMENT : 0, u = r.attributes.uv ? r.attributes.uv.count * 2 * Float32Array.BYTES_PER_ELEMENT : 0, a = o + i + s + u;
      t += a;
    }
  }), t;
}
function Er$1(e, t, n) {
  e.push(t), e.length > n && e.shift();
}
function qa$1(e) {
  return (e / 1024).toFixed(2);
}
function Xa$1(e) {
  if (!e)
    return;
  typeof window < "u" && !window.__TRES__DEVTOOLS__ && (window.__TRES__DEVTOOLS__ = new js$1());
  const t = {
    maxFrames: 160,
    fps: {
      value: 0,
      accumulator: []
    },
    memory: {
      currentMem: 0,
      allocatedMem: 0,
      accumulator: []
    }
  }, n = 100, r = useFps({ every: n }), { isSupported: o, memory: i } = useMemory({ interval: n }), s = 160;
  let u = performance.now(), a = 0;
  const l = 1, c = ({ timestamp: _ }) => {
    e.scene.value && (t.memory.allocatedMem = Bt$1(e.scene.value)), _ - u >= n && (u = _, Er$1(t.fps.accumulator, r.value, s), t.fps.value = r.value, o.value && i.value?.usedJSHeapSize && (Er$1(t.memory.accumulator, i.value.usedJSHeapSize / 1024 / 1024, s), t.memory.accumulator.length > 0 && (t.memory.currentMem = t.memory.accumulator.reduce((d, h) => d + h, 0) / t.memory.accumulator.length)));
  }, { pause: f } = useRafFn(({ delta: _ }) => {
    window.__TRES__DEVTOOLS__ && (c({ timestamp: performance.now() }), a += _, a >= l && (window.__TRES__DEVTOOLS__.send("context", e), window.__TRES__DEVTOOLS__.send("performance", t), a = 0));
  }, { immediate: true });
  ie$1(() => {
    f();
  });
}
const To$1 = (e, t) => {
  if (e.uuid === t)
    return e;
  for (const n of e.children) {
    const r = To$1(n, t);
    if (r)
      return r;
  }
};
let Qa$1 = class Qa extends vr$1.Mesh {
  type = "HightlightMesh";
  createTime;
  constructor(...t) {
    super(...t), this.createTime = Date.now();
  }
  onBeforeRender() {
    const n = (Date.now() - this.createTime) / 1e3, i = 1 + 0.07 * Math.sin(2.5 * n);
    this.scale.set(i, i, i);
  }
};
const Oo$1 = (e) => {
  const t = {
    id: `scene-${e.uuid}`,
    label: e.type,
    children: [],
    tags: []
  };
  e.name !== "" && t.tags.push({
    label: e.name,
    textColor: 5750629,
    backgroundColor: 15793395
  });
  const n = Bt$1(e);
  return n > 0 && t.tags.push({
    label: `${qa$1(n)} KB`,
    textColor: 15707189,
    backgroundColor: 16775644,
    tooltip: "Memory usage"
  }), e.type.includes("Light") && (Rr$1(e) && t.tags.push({
    label: `${e.intensity}`,
    textColor: 9738662,
    backgroundColor: 16316922,
    tooltip: "Intensity"
  }), t.tags.push({
    label: `#${new xe$1(e.color).getHexString()}`,
    textColor: 9738662,
    backgroundColor: 16316922,
    tooltip: "Color"
  })), e.type.includes("Camera") && (t.tags.push({
    label: `${e.fov}°`,
    textColor: 9738662,
    backgroundColor: 16316922,
    tooltip: "Field of view"
  }), t.tags.push({
    label: `x: ${Math.round(e.position.x)} y: ${Math.round(e.position.y)} z: ${Math.round(e.position.z)}`,
    textColor: 9738662,
    backgroundColor: 16316922,
    tooltip: "Position"
  })), t;
};
function Za$1(e, t, n = "") {
  const r = n ? `${n}.${e}` : e;
  return {
    id: `context-${t}-${r}`,
    label: e,
    children: [],
    tags: []
  };
}
function So$1(e, t, n = "") {
  e.children.forEach((r) => {
    if (r.type === "HightlightMesh" || n && !r.type.includes(n) && !r.name.includes(n))
      return;
    const o = Oo$1(r);
    t.children.push(o), So$1(r, o, n);
  });
}
function wt$1(e, t, n = /* @__PURE__ */ new WeakSet(), r = 0, o = 4, i, s = "") {
  if (r >= o || !e || n.has(e))
    return;
  const u = r === 0 ? e?.scene?.value?.uuid || Math.random().toString(36).slice(2, 11) : i;
  n.add(e), Object.entries(e).forEach(([a, l]) => {
    if (a.startsWith("_") || typeof l == "function")
      return;
    const c = s ? `${s}.${a}` : a, f = Za$1(a, u, s);
    a !== "scene" && (me$1(l) ? (f.tags.push({
      label: `Ref<${typeof l.value}>`,
      textColor: 4372611,
      backgroundColor: 15793395
    }), l.value && typeof l.value == "object" ? wt$1(l.value, f, n, r + 1, o, u, c) : f.label = `${a}: ${JSON.stringify(l.value)}`) : l && typeof l == "object" && !Array.isArray(l) ? Object.keys(l).length > 0 ? n.has(l) ? f.tags.push({
      label: "Circular",
      textColor: 16711680,
      backgroundColor: 16773360
    }) : wt$1(l, f, n, r + 1, o, u, c) : f.label = `${a}: {}` : Array.isArray(l) ? (f.label = `${a}: Array(${l.length})`, f.tags.push({
      label: `length: ${l.length}`,
      textColor: 9738662,
      backgroundColor: 16316922
    })) : f.label = `${a}: ${JSON.stringify(l)}`, t.children.push(f));
  });
}
const Ja$1 = (e) => (t) => {
  if (t.inspectorId === we$1) {
    const n = Oo$1(e.scene.value);
    So$1(e.scene.value, n, t.filter);
    const r = {
      id: "context-root",
      label: "Context",
      children: [],
      tags: []
    };
    wt$1(e, r), t.rootNodes = [n, r];
  }
}, el$1 = (e, { highlightMesh: t, prevInstance: n }) => (r) => {
  if (r.inspectorId !== we$1)
    return;
  const o = new Ar$1({
    color: 11003607,
    // Highlight color, e.g., yellow
    transparent: true,
    opacity: 0.2,
    depthTest: false,
    // So the highlight is always visible
    side: Wo$1
    // To ensure the highlight is visible from all angles
  });
  if (r.nodeId.includes("scene")) {
    const i = r.nodeId.match(/^scene-(.+)$/), s = i ? i[1] : null;
    if (!s)
      return;
    const [u] = e.scene.value.getObjectsByProperty("uuid", s);
    if (!u)
      return;
    if (n && t && t.parent && n.remove(t), $e$1(u)) {
      const a = new Qa$1(u.geometry.clone(), o);
      u.add(a), t = a, n = u;
    }
    if (r.state = {
      object: Object.entries(u).map(([a, l]) => a === "children" ? { key: a, value: l.filter((c) => c.type !== "HightlightMesh") } : { key: a, value: l, editable: true }).filter(({ key: a }) => a !== "parent")
    }, Fr$1(u)) {
      const a = {
        ...r.state,
        state: [
          {
            key: "Scene Info",
            value: {
              objects: u.children.length,
              memory: Bt$1(u),
              calls: e.renderer.instance.info.render.calls,
              triangles: e.renderer.instance.info.render.triangles,
              points: e.renderer.instance.info.render.points,
              lines: e.renderer.instance.info.render.lines
            }
          }
        ]
      };
      "programs" in e.renderer.instance.info && a.state.push({
        key: "Programs",
        value: e.renderer.instance.info.programs?.map((l) => ({
          ...l,
          programName: l.name
        }))
      }), r.state = a;
    }
  } else if (r.nodeId.includes("context")) {
    const i = r.nodeId.match(/^context-([^-]+(?:-[^-]+)*)-(.+)$/), s = i ? i[2] : "context";
    if (!s || s === "context") {
      r.state = {
        object: Object.entries(e).filter(([l]) => !l.startsWith("_") && l !== "parent").map(([l, c]) => ({
          key: l,
          value: me$1(c) ? c.value : c,
          editable: false
        }))
      };
      return;
    }
    const u = s.split(".");
    let a = e;
    for (const l of u) {
      if (!a || typeof a != "object")
        break;
      a = me$1(a[l]) ? a[l].value : a[l];
    }
    a !== void 0 && (r.state = {
      object: Object.entries(a).filter(([l]) => !l.startsWith("_") && l !== "parent").map(([l, c]) => me$1(c) ? {
        key: l,
        value: c.value,
        editable: false
      } : typeof c == "function" ? {
        key: l,
        value: "ƒ()",
        editable: false
      } : c && typeof c == "object" ? {
        key: l,
        value: Array.isArray(c) ? `Array(${c.length})` : "Object",
        editable: false
      } : {
        key: l,
        value: c,
        editable: false
      })
    });
  }
}, tl$1 = (e, t, n, r) => {
  const o = To$1(e, t);
  if (!o) {
    console.warn("Object with UUID not found in the scene.");
    return;
  }
  let i = o;
  for (let u = 0; u < n.length - 1; u++)
    if (i[n[u]] !== void 0)
      i = i[n[u]];
    else {
      console.warn(`Property path is not valid: ${n.join(".")}`);
      return;
    }
  const s = n[n.length - 1];
  i[s] !== void 0 ? i[s] = r : console.warn(`Property path is not valid: ${n.join(".")}`);
}, nl$1 = (e) => (t) => {
  if (t.inspectorId === we$1 && t.nodeId.includes("scene")) {
    const n = t.nodeId.match(/^scene-(.+)$/), r = n ? n[1] : null;
    if (!r)
      return;
    tl$1(e.scene.value, r, t.path, t.state.value);
  }
}, we$1 = "tres:inspector";
function rl$1(e, t) {
  const n = {
    id: "dev.esm.tres",
    label: "TresJS 🪐",
    logo: "https://raw.githubusercontent.com/Tresjs/tres/main/public/favicon.svg",
    packageName: "tresjs",
    homepage: "https://docs.tresjs.org",
    app: e
  }, r = null, o = null;
  Xa$1(t), fa$1(
    n,
    (i) => {
      typeof i.now != "function" && Ya$1(
        "You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
      ), i.addInspector({
        id: we$1,
        label: "TresJS 🪐",
        icon: "account_tree",
        treeFilterPlaceholder: "Search instances"
      }), setInterval(() => {
        i.sendInspectorTree(we$1);
      }, 1e3), setInterval(() => {
        i.notifyComponentUpdate();
      }, 5e3), i.on.getInspectorTree(Ja$1(t)), i.on.getInspectorState(el$1(t, {
        highlightMesh: r,
        prevInstance: o
      })), i.on.editInspectorState(nl$1(t));
    }
  );
}
const ol$1 = ["data-scene", "data-tres"], il$1 = /* @__PURE__ */ ot$1({
  __name: "TresCanvas",
  props: {
    camera: {},
    windowSize: { type: Boolean, default: void 0 },
    enableProvideBridge: { type: Boolean, default: true },
    antialias: { type: Boolean, default: true },
    stencil: { type: Boolean, default: void 0 },
    depth: { type: Boolean, default: void 0 },
    precision: {},
    logarithmicDepthBuffer: { type: Boolean, default: void 0 },
    preserveDrawingBuffer: { type: Boolean, default: void 0 },
    powerPreference: {},
    alpha: { type: Boolean, default: void 0 },
    premultipliedAlpha: { type: Boolean },
    failIfMajorPerformanceCaveat: { type: Boolean, default: void 0 },
    clearColor: { default: "#000000" },
    clearAlpha: { default: 1 },
    shadows: { type: Boolean, default: void 0 },
    toneMapping: { default: Yo$1 },
    shadowMapType: { default: Go$1 },
    useLegacyLights: { type: Boolean, default: void 0 },
    outputColorSpace: {},
    toneMappingExposure: {},
    renderMode: { default: "always" },
    dpr: {},
    renderer: {}
  },
  emits: ["ready", "pointermissed", "render", "beforeLoop", "loop", "click", "contextmenu", "pointermove", "pointerenter", "pointerleave", "pointerover", "pointerout", "dblclick", "pointerdown", "pointerup", "pointercancel", "lostpointercapture", "wheel"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, i = ko$1(), s = Ae$1(), u = it$1(new yr$1()), a = $t$1();
    pt$1(vr$1);
    const l = (h, v = false) => ot$1({
      setup() {
        const p = $t$1()?.appContext;
        p && (p.app = a?.appContext.app);
        const g = {};
        function b(C) {
          C && (C.parent && b(C.parent), C.provides && Object.assign(g, C.provides));
        }
        return a?.parent && r.enableProvideBridge && (b(a.parent), Reflect.ownKeys(g).forEach((C) => {
          qe$1(C, g[C]);
        })), qe$1(Rs$1, h), qe$1("extend", pt$1), typeof window < "u" && p?.app && rl$1(p?.app, h), () => Wt$1(No$1, null, v ? [] : i.default());
      }
    }), c = (h, v = false) => {
      const p = l(h, v), { render: g } = Mo$1(Us$1(h));
      g(Wt$1(p), u.value);
    }, f = (h, v = false) => {
      Ne$1(h.scene.value), v && (h.renderer.instance.dispose(), h.renderer.instance instanceof br$1 && (h.renderer.instance.renderLists.dispose(), h.renderer.instance.forceContextLoss())), u.value.__tres = {
        root: h
      };
    }, _ = it$1(null);
    t({ context: _, dispose: () => f(_.value, true) });
    const d = () => {
      f(_.value), c(_.value, true);
    };
    return Kt$1(() => {
      const h = s;
      _.value = Ls$1({
        scene: u.value,
        canvas: h,
        windowSize: r.windowSize ?? false,
        rendererOptions: r
      });
      const { camera: v, renderer: p } = _.value, { registerCamera: g, cameras: b, activeCamera: C, deregisterCamera: P } = v;
      c(_.value);
      const M = () => {
        const A = new qo$1(
          45,
          window.innerWidth / window.innerHeight,
          0.1,
          1e3
        );
        A.position.set(3, 3, 3), A.lookAt(0, 0, 0), g(A);
        const O = $$1(() => {
          b.value.length >= 2 && (A.removeFromParent(), P(A), O?.());
        });
      };
      _.value.events.onPointerMissed((A) => {
        o("pointermissed", A);
      }), At$1(
        () => r.camera,
        (A, O) => {
          A && g(D(A), true), O && (D(O).removeFromParent(), P(D(O)));
        },
        {
          immediate: true
        }
      ), C.value || M(), p.onRender(() => {
        _.value && o("render", _.value);
      }), p.loop.onLoop((A) => {
        _.value && o("loop", { ..._.value, ...A });
      }), p.loop.onBeforeLoop((A) => {
        _.value && o("beforeLoop", { ..._.value, ...A });
      }), p.onReady(() => {
        o("ready", _.value);
      });
    }), Kt$1(async () => {
      await promiseTimeout(3e3), _.value && (!_.value.sizes.width || !_.value.sizes.height.value) && console.warn("TresCanvas: The canvas has no area, so nothing can be rendered. Set it manually on the parent element or use the prop windowSize.");
    }), ie$1(d), (h, v) => (Ro$1(), xo$1("canvas", {
      ref_key: "canvasRef",
      ref: s,
      "data-scene": u.value.uuid,
      class: Fo$1(h.$attrs.class),
      "data-tres": `tresjs ${ke$1(Mi$1).version}`,
      style: Lo$1({
        display: "block",
        width: "100%",
        height: "100%",
        position: h.windowSize ? "fixed" : "relative",
        top: 0,
        left: 0,
        pointerEvents: "auto",
        touchAction: "none",
        ...h.$attrs.style
      })
    }, null, 14, ol$1));
  }
});

const {defineComponent:ie,useSlots:Xh,watch:O,onMounted:_e,onUnmounted:Le,createElementBlock:me,openBlock:Z,unref:E,render:Yh,watchEffect:Uc,createBlock:wt,withCtx:ni,createElementVNode:Dn,shallowRef:ce,ref:xe,createCommentVNode:Fe,inject:On,renderSlot:Je,provide:ja,computed:ia,Fragment:Zh,markRaw:Ro,onBeforeUnmount:Qh,mergeProps:Jh,createVNode:ed,normalizeProps:td,guardReactiveProps:nd,mergeModels:sd,useModel:Va,reactive:Wa} = await importShared('vue');

const B = await importShared('three');

const {Object3D:Ts,Vector2:$,Vector3:P,Matrix4:z,MathUtils:k,Quaternion:Se,Ray:yt,Group:ge,PointsMaterial:bs,TextureLoader:ar,BufferGeometry:$e,Float32BufferAttribute:ht,Points:si,Color:Ce,LineBasicMaterial:lr,Line:ra,CurvePath:$a,LineCurve3:Ka,TubeGeometry:qa,MeshBasicMaterial:Ne,DoubleSide:oa,Mesh:et,BufferAttribute:we,Euler:aa,TrianglesDrawMode:Bc,TriangleFanDrawMode:rs,TriangleStripDrawMode:cr,Loader:ur,LoaderUtils:Pt,FileLoader:os,MeshPhysicalMaterial:ye,LinearSRGBColorSpace:Wt,SRGBColorSpace:as,SpotLight:zc,PointLight:Gc,DirectionalLight:Hc,InstancedMesh:la,InstancedBufferAttribute:jc,ImageBitmapLoader:Vc,InterleavedBuffer:Wc,InterleavedBufferAttribute:$c,LinearMipmapLinearFilter:hr,NearestMipmapLinearFilter:Kc,LinearMipmapNearestFilter:qc,NearestMipmapNearestFilter:Xc,LinearFilter:$s,NearestFilter:ca,RepeatWrapping:ls,MirroredRepeatWrapping:Yc,ClampToEdgeWrapping:Zc,Material:Qn,MeshStandardMaterial:ii,PropertyBinding:Qc,SkinnedMesh:Jc,LineSegments:dr,LineLoop:eu,PerspectiveCamera:tu,OrthographicCamera:nu,Skeleton:su,AnimationClip:iu,Bone:ru,InterpolateDiscrete:ou,InterpolateLinear:pr,Texture:Ks,VectorKeyframeTrack:$i,NumberKeyframeTrack:Ki,QuaternionKeyframeTrack:qi,ColorManagement:Xa,FrontSide:au,Interpolant:lu,Box3:ua,Sphere:kn,DefaultLoadingManager:fr,Spherical:Xi,Plane:ri,Frustum:id,Matrix3:rd,LoadingManager:od,EventDispatcher:Ns,PlaneGeometry:ha,ShaderMaterial:ad,Raycaster:ld,Clock:cd,RGFormat:ud,UnsignedByteType:hd,DataTexture:dd,EdgesGeometry:pd,BoxGeometry:cu,Box3Helper:fd,REVISION:md,Controls:gd,MOUSE:Gt,TOUCH:nn} = await importShared('three');
class da extends Ts {
  /**
   * Constructs a new CSS2D object.
   *
   * @param {DOMElement} [element] - The DOM element.
   */
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = true, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", false), this.center = new $(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(true), this.center = e.center, this;
  }
}
const Un = new P(), Ya = new z(), Za = new z(), Qa = new P(), Ja = new P();
class vd {
  /**
   * Constructs a new CSS2D renderer.
   *
   * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
   */
  constructor(e = {}) {
    const t = this;
    let n, s, i, r;
    const o = {
      objects: /* @__PURE__ */ new WeakMap()
    }, a = e.element !== void 0 ? e.element : document.createElement("div");
    a.style.overflow = "hidden", this.domElement = a, this.getSize = function() {
      return {
        width: n,
        height: s
      };
    }, this.render = function(m, f) {
      m.matrixWorldAutoUpdate === true && m.updateMatrixWorld(), f.parent === null && f.matrixWorldAutoUpdate === true && f.updateMatrixWorld(), Ya.copy(f.matrixWorldInverse), Za.multiplyMatrices(f.projectionMatrix, Ya), u(m, m, f), p(m);
    }, this.setSize = function(m, f) {
      n = m, s = f, i = n / 2, r = s / 2, a.style.width = m + "px", a.style.height = f + "px";
    };
    function c(m) {
      m.isCSS2DObject && (m.element.style.display = "none");
      for (let f = 0, g = m.children.length; f < g; f++)
        c(m.children[f]);
    }
    function u(m, f, g) {
      if (m.visible === false) {
        c(m);
        return;
      }
      if (m.isCSS2DObject) {
        Un.setFromMatrixPosition(m.matrixWorld), Un.applyMatrix4(Za);
        const _ = Un.z >= -1 && Un.z <= 1 && m.layers.test(g.layers) === true, y = m.element;
        y.style.display = _ === true ? "" : "none", _ === true && (m.onBeforeRender(t, f, g), y.style.transform = "translate(" + -100 * m.center.x + "%," + -100 * m.center.y + "%)translate(" + (Un.x * i + i) + "px," + (-Un.y * r + r) + "px)", y.parentNode !== a && a.appendChild(y), m.onAfterRender(t, f, g));
        const v = {
          distanceToCameraSquared: h(g, m)
        };
        o.objects.set(m, v);
      }
      for (let _ = 0, y = m.children.length; _ < y; _++)
        u(m.children[_], f, g);
    }
    function h(m, f) {
      return Qa.setFromMatrixPosition(m.matrixWorld), Ja.setFromMatrixPosition(f.matrixWorld), Qa.distanceToSquared(Ja);
    }
    function d(m) {
      const f = [];
      return m.traverseVisible(function(g) {
        g.isCSS2DObject && f.push(g);
      }), f;
    }
    function p(m) {
      const f = d(m).sort(function(_, y) {
        if (_.renderOrder !== y.renderOrder)
          return y.renderOrder - _.renderOrder;
        const v = o.objects.get(_).distanceToCameraSquared, x = o.objects.get(y).distanceToCameraSquared;
        return v - x;
      }), g = f.length;
      for (let _ = 0, y = f.length; _ < y; _++)
        f[_].element.style.zIndex = g - _;
    }
  }
}
var el = "Invariant failed";
function tl(l15, e) {
  if (!l15) {
    throw new Error(el);
  }
}
const Td = /* @__PURE__ */ new P();
function uu(l15, e, t = new P(), n) {
  const { x: s, y: i, z: r } = l15, o = e.x, a = e.y, c = e.z, u = s * s * o, h = i * i * a, d = r * r * c, p = u + h + d, m = Math.sqrt(1 / p);
  if (!Number.isFinite(m))
    return;
  const f = Td.copy(l15).multiplyScalar(m);
  if (p < (n?.centerTolerance ?? 0.1))
    return t.copy(f);
  const g = f.multiply(e).multiplyScalar(2);
  let _ = (1 - m) * l15.length() / (g.length() / 2), y = 0, v, x, T, A;
  do {
    _ -= y, v = 1 / (1 + _ * o), x = 1 / (1 + _ * a), T = 1 / (1 + _ * c);
    const w = v * v, M = x * x, b = T * T, S = w * v, C = M * x, L = b * T;
    A = u * w + h * M + d * b - 1, y = A / ((u * S * o + h * C * a + d * L * c) * -2);
  } while (Math.abs(A) > 1e-12);
  return t.set(s * v, i * x, r * T);
}
const ws = /* @__PURE__ */ new P(), nl = /* @__PURE__ */ new P(), sl = /* @__PURE__ */ new P();
let hn = class hu {
  static WGS84 = /* @__PURE__ */ new hu(6378137, 6378137, 6356752314245179e-9);
  radii;
  constructor(e, t, n) {
    this.radii = new P(e, t, n);
  }
  get minimumRadius() {
    return Math.min(this.radii.x, this.radii.y, this.radii.z);
  }
  get maximumRadius() {
    return Math.max(this.radii.x, this.radii.y, this.radii.z);
  }
  reciprocalRadii(e = new P()) {
    const { x: t, y: n, z: s } = this.radii;
    return e.set(1 / t, 1 / n, 1 / s);
  }
  reciprocalRadiiSquared(e = new P()) {
    const { x: t, y: n, z: s } = this.radii;
    return e.set(1 / t ** 2, 1 / n ** 2, 1 / s ** 2);
  }
  projectOnSurface(e, t = new P(), n) {
    return uu(e, this.reciprocalRadiiSquared(), t, n);
  }
  getSurfaceNormal(e, t = new P()) {
    return t.multiplyVectors(this.reciprocalRadiiSquared(ws), e).normalize();
  }
  getEastNorthUpVectors(e, t = new P(), n = new P(), s = new P()) {
    this.getSurfaceNormal(e, s), t.set(-e.y, e.x, 0).normalize(), n.crossVectors(s, t).normalize();
  }
  getEastNorthUpFrame(e, t = new z()) {
    const n = ws, s = nl, i = sl;
    return this.getEastNorthUpVectors(e, n, s, i), t.makeBasis(n, s, i).setPosition(e);
  }
  getIntersection(e, t = new P()) {
    const n = this.reciprocalRadii(ws), s = nl.copy(n).multiply(e.origin), i = sl.copy(n).multiply(e.direction), r = s.lengthSq(), o = i.lengthSq(), a = s.dot(i), c = a ** 2 - o * (r - 1);
    if (r === 1)
      return t.copy(e.origin);
    if (r > 1) {
      if (a >= 0 || c < 0)
        return;
      const u = Math.sqrt(c), h = (-a - u) / o, d = (-a + u) / o;
      return e.at(Math.min(h, d), t);
    }
    if (r < 1) {
      const u = a ** 2 - o * (r - 1), h = Math.sqrt(u), d = (-a + h) / o;
      return e.at(d, t);
    }
    if (a < 0)
      return e.at(-a / o, t);
  }
  getOsculatingSphereCenter(e, t, n = new P()) {
    tl(this.radii.x === this.radii.y);
    const s = this.radii.x ** 2, i = this.radii.z ** 2, r = ws.set(e.x / s, e.y / s, e.z / i).normalize();
    return n.copy(r.multiplyScalar(-t).add(e));
  }
  getNormalAtHorizon(e, t, n = new P()) {
    tl(this.radii.x === this.radii.y);
    const s = this.radii.x ** 2, i = this.radii.z ** 2, r = e, o = t;
    let a = (r.x * o.x + r.y * o.y) / s + r.z * o.z / i;
    a /= (r.x ** 2 + r.y ** 2) / s + r.z ** 2 / i;
    const c = ws.copy(o).multiplyScalar(-a).add(e);
    return n.set(c.x / s, c.y / s, c.z / i).normalize();
  }
};
const ui = /* @__PURE__ */ new P(), il = /* @__PURE__ */ new P();
class cs {
  constructor(e = 0, t = 0, n = 0) {
    this.longitude = e, this.latitude = t, this.height = n;
  }
  static MIN_LONGITUDE = -Math.PI;
  static MAX_LONGITUDE = Math.PI;
  static MIN_LATITUDE = -Math.PI / 2;
  static MAX_LATITUDE = Math.PI / 2;
  set(e, t, n) {
    return this.longitude = e, this.latitude = t, n != null && (this.height = n), this;
  }
  clone() {
    return new cs(this.longitude, this.latitude, this.height);
  }
  copy(e) {
    return this.longitude = e.longitude, this.latitude = e.latitude, this.height = e.height, this;
  }
  equals(e) {
    return e.longitude === this.longitude && e.latitude === this.latitude && e.height === this.height;
  }
  setLongitude(e) {
    return this.longitude = e, this;
  }
  setLatitude(e) {
    return this.latitude = e, this;
  }
  setHeight(e) {
    return this.height = e, this;
  }
  normalize() {
    return this.longitude < cs.MIN_LONGITUDE && (this.longitude += Math.PI * 2), this;
  }
  // See: https://en.wikipedia.org/wiki/Geographic_coordinate_conversion
  // Reference: https://github.com/CesiumGS/cesium/blob/1.122/packages/engine/Source/Core/Geodetic.js#L119
  setFromECEF(e, t) {
    const s = (t?.ellipsoid ?? hn.WGS84).reciprocalRadiiSquared(ui), i = uu(
      e,
      s,
      il,
      t
    );
    if (i == null)
      throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);
    const r = ui.multiplyVectors(i, s).normalize();
    this.longitude = Math.atan2(r.y, r.x), this.latitude = Math.asin(r.z);
    const o = ui.subVectors(e, i);
    return this.height = Math.sign(o.dot(e)) * o.length(), this;
  }
  // See: https://en.wikipedia.org/wiki/Geographic_coordinate_conversion
  // Reference: https://github.com/CesiumGS/cesium/blob/1.122/packages/engine/Source/Core/Cartesian3.js#L916
  toECEF(e = new P(), t) {
    const n = t?.ellipsoid ?? hn.WGS84, s = ui.multiplyVectors(n.radii, n.radii), i = Math.cos(this.latitude), r = il.set(
      i * Math.cos(this.longitude),
      i * Math.sin(this.longitude),
      Math.sin(this.latitude)
    ).normalize();
    return e.multiplyVectors(s, r), e.divideScalar(Math.sqrt(r.dot(e))).add(r.multiplyScalar(this.height));
  }
  fromArray(e, t = 0) {
    return this.longitude = e[t], this.latitude = e[t + 1], this.height = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.longitude, e[t + 1] = this.latitude, e[t + 2] = this.height, e;
  }
  *[Symbol.iterator]() {
    yield this.longitude, yield this.latitude, yield this.height;
  }
}
const br = 1e-6, hi = /* @__PURE__ */ new P(), di = /* @__PURE__ */ new P(), Lt = /* @__PURE__ */ new P(), As = /* @__PURE__ */ new P(), wr = /* @__PURE__ */ new P(), bd = /* @__PURE__ */ new P(), wd = /* @__PURE__ */ new z(), Ad = /* @__PURE__ */ new Se(), Md = /* @__PURE__ */ new yt();
class mr {
  // Distance from the target.
  _distance;
  // Radians from the local east direction relative from true north, measured
  // clockwise (90 degrees is true north, and -90 is true south).
  heading;
  // Radians from the local horizon plane, measured with positive values looking
  // up (90 degrees is straight up, -90 is straight down).
  _pitch;
  roll;
  constructor(e = 0, t = 0, n = 0, s = 0) {
    this.distance = e, this.heading = t, this.pitch = n, this.roll = s;
  }
  get distance() {
    return this._distance;
  }
  set distance(e) {
    this._distance = Math.max(e, br);
  }
  get pitch() {
    return this._pitch;
  }
  set pitch(e) {
    this._pitch = k.clamp(e, -Math.PI / 2 + br, Math.PI / 2 - br);
  }
  set(e, t, n, s) {
    return this.distance = e, this.heading = t, this.pitch = n, s != null && (this.roll = s), this;
  }
  clone() {
    return new mr(this.distance, this.heading, this.pitch, this.roll);
  }
  copy(e) {
    return this.distance = e.distance, this.heading = e.heading, this.pitch = e.pitch, this.roll = e.roll, this;
  }
  equals(e) {
    return e.distance === this.distance && e.heading === this.heading && e.pitch === this.pitch && e.roll === this.roll;
  }
  decompose(e, t, n, s, i = hn.WGS84) {
    i.getEastNorthUpVectors(e, hi, di, Lt), s?.copy(Lt);
    const r = As.copy(hi).multiplyScalar(Math.cos(this.heading)).add(wr.copy(di).multiplyScalar(Math.sin(this.heading))).multiplyScalar(Math.cos(this.pitch)).add(wr.copy(Lt).multiplyScalar(Math.sin(this.pitch))).normalize().multiplyScalar(this.distance);
    if (t.copy(e).sub(r), this.roll !== 0) {
      const o = As.copy(e).sub(t).normalize();
      Lt.applyQuaternion(Ad.setFromAxisAngle(o, this.roll));
    }
    n.setFromRotationMatrix(wd.lookAt(t, e, Lt));
  }
  setFromCamera(e, t = hn.WGS84) {
    const n = As.setFromMatrixPosition(e.matrixWorld), s = wr.set(0, 0, 0.5).unproject(e).sub(n).normalize(), i = t.getIntersection(Md.set(n, s));
    if (i == null)
      return;
    this.distance = n.distanceTo(i), t.getEastNorthUpVectors(i, hi, di, Lt), this.heading = Math.atan2(di.dot(s), hi.dot(s)), this.pitch = Math.asin(Lt.dot(s));
    const r = As.copy(e.up).applyQuaternion(e.quaternion), o = bd.copy(s).multiplyScalar(-r.dot(s)).add(r).normalize(), a = As.copy(s).multiplyScalar(-Lt.dot(s)).add(Lt).normalize(), c = a.dot(o), u = s.dot(a.cross(o));
    return this.roll = Math.atan2(u, c), this;
  }
}
const Kn = k.degToRad, pi = k.radToDeg, Pd = (l15, e, t, n, s, i) => {
  new mr(e, Kn(t), Kn(n)).decompose(
    new cs(Kn(s), Kn(i)).toECEF(),
    l15.position,
    l15.quaternion,
    l15.up
  ), l15.updateMatrixWorld();
}, Pe = (l15, e, t) => new cs(Kn(l15), Kn(e), t).toECEF(), fi = new mr(), Ar = new cs(), Ed = new P(), Sd = new P(), Cd = new yt(), Ld = hn.WGS84, Rd = (l15) => {
  fi.setFromCamera(l15);
  const e = Ed.setFromMatrixPosition(l15.matrixWorld), t = Sd.set(0, 0, 0.5).unproject(l15).sub(e).normalize(), n = Ld.getIntersection(Cd.set(e, t));
  return n ? (Ar.setFromECEF(n), {
    distance: fi.distance,
    heading: pi(fi.heading),
    pitch: pi(fi.pitch),
    longitude: pi(Ar.longitude),
    latitude: pi(Ar.latitude)
  }) : null;
};
function pa(l15, e, t) {
  const n = (i) => (r) => {
    const o = [
      { ...r, index: 0 },
      e,
      0
    ];
    l15(i, ...o);
  };
  return {
    click: n("click"),
    doubleclick: n("doubleclick"),
    contextmenu: n("contextmenu"),
    pointerenter: n("pointerenter"),
    pointerleave: n("pointerleave"),
    pointerover: n("pointerover"),
    pointerdown: n("pointerdown"),
    pointerup: n("pointerup"),
    wheel: n("wheel")
  };
}
function fa(l15, e) {
  l15.removeEventListener("click", e.click), l15.removeEventListener("dblclick", e.doubleclick), l15.removeEventListener("contextmenu", e.contextmenu), l15.removeEventListener("pointerenter", e.pointerenter), l15.removeEventListener("pointerleave", e.pointerleave), l15.removeEventListener("pointerover", e.pointerover), l15.removeEventListener("pointerdown", e.pointerdown), l15.removeEventListener("pointerup", e.pointerup), l15.removeEventListener("wheel", e.wheel);
}
const Dd = ["object"], Z_ = /* @__PURE__ */ ie({
  __name: "GeoCSS2D",
  props: {
    point: {},
    renderOrder: { default: 1 },
    id: {}
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { expose: e, emit: t }) {
    const n = document.createElement("div"), s = l15, i = Xh(), r = t, o = () => {
      Yh(i.default()[0], n);
    }, a = new da(n), c = new ge();
    c.layers.enableAll(), c.add(a), a.layers.set(1), a.renderOrder = s.renderOrder;
    const u = () => {
      const d = Pe(s.point.lon, s.point.lat, s.point.height);
      a.position.copy(d);
    }, h = pa(r, s);
    return O([() => s.point.lon, () => s.point.lat, () => s.point.height], () => {
      u();
    }), _e(() => {
      u(), o(), n.addEventListener("click", h.click), n.addEventListener("dblclick", h.doubleclick), n.addEventListener("contextmenu", h.contextmenu), n.addEventListener("pointerenter", h.pointerenter), n.addEventListener("pointerleave", h.pointerleave), n.addEventListener("pointerover", h.pointerover), n.addEventListener("pointerdown", h.pointerdown), n.addEventListener("pointerup", h.pointerup), n.addEventListener("wheel", h.wheel);
    }), Le(() => {
      fa(n, h), c.clear();
    }), e({
      update: o
    }), (d, p) => (Z(), me("primitive", { object: E(c) }, null, 8, Dd));
  }
}), Od = ["object"], Q_ = /* @__PURE__ */ ie({
  __name: "GeoText",
  props: {
    point: {},
    fontSize: { default: 16 },
    color: { default: "#333" },
    text: {},
    renderOrder: { default: 1 },
    align: { default: "left" },
    id: {}
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = document.createElement("div"), n = l15, s = e, i = () => {
      switch (t.innerText = n.text, t.style.fontSize = n.fontSize + "px", t.style.color = n.color, t.style.pointerEvents = "auto", t.style.userSelect = "none", n.align) {
        case "center":
          t.style.transform = "translateX(-50%)", t.style.textAlign = "center";
          break;
        case "right":
          t.style.transform = "translateX(-100%)", t.style.textAlign = "right";
          break;
        case "left":
        default:
          t.style.transform = "translateX(0)", t.style.textAlign = "left";
          break;
      }
    }, r = new da(t);
    r.renderOrder = n.renderOrder;
    const o = pa(s, n);
    return _e(() => {
      i(), t.addEventListener("click", o.click), t.addEventListener("dblclick", o.doubleclick), t.addEventListener("contextmenu", o.contextmenu), t.addEventListener("pointerenter", o.pointerenter), t.addEventListener("pointerleave", o.pointerleave), t.addEventListener("pointerover", o.pointerover), t.addEventListener("pointerdown", o.pointerdown), t.addEventListener("pointerup", o.pointerup), t.addEventListener("wheel", o.wheel);
    }), Uc(() => {
      i();
    }), Le(() => {
      fa(t, o), t.remove();
    }), (a, c) => (Z(), wt(E(_a), {
      point: n.point
    }, {
      default: ni(() => [
        Dn("primitive", { object: E(r) }, null, 8, Od)
      ]),
      _: 1
    }, 8, ["point"]));
  }
}), Id = ["object"], J_ = /* @__PURE__ */ ie({
  __name: "GeoIcon",
  props: {
    point: {},
    size: {},
    icon: {},
    renderOrder: { default: 1 },
    id: {}
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = document.createElement("img"), n = l15, s = e, i = () => {
      t.src = n.icon, t.style.width = n.size + "px", t.style.height = n.size + "px", t.style.left = "0", t.style.top = "0", t.style.pointerEvents = "all";
    }, r = new da(t);
    r.renderOrder = n.renderOrder;
    const o = pa(s, n);
    return _e(() => {
      i(), t.addEventListener("click", o.click), t.addEventListener("dblclick", o.doubleclick), t.addEventListener("contextmenu", o.contextmenu), t.addEventListener("pointerenter", o.pointerenter), t.addEventListener("pointerleave", o.pointerleave), t.addEventListener("pointerover", o.pointerover), t.addEventListener("pointerdown", o.pointerdown), t.addEventListener("pointerup", o.pointerup), t.addEventListener("wheel", o.wheel);
    }), Uc(() => {
      i();
    }), Le(() => {
      fa(t, o), t.remove();
    }), (a, c) => (Z(), wt(E(_a), {
      point: n.point
    }, {
      default: ni(() => [
        Dn("primitive", { object: E(r) }, null, 8, Id)
      ]),
      _: 1
    }, 8, ["point"]));
  }
}), kd = ["object"], ey = /* @__PURE__ */ ie({
  __name: "GeoParticle",
  props: {
    points: {},
    size: {},
    icon: {},
    color: {},
    renderOrder: { default: 1 },
    raycastActive: { type: Boolean },
    raycastMultiplier: { default: 1 },
    sizeAttenuation: { type: Boolean, default: true }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = xe([]), r = xe(new P()), o = (A) => {
      const w = A.raycast;
      A.raycast = function(M, b) {
        const S = M.params.Points?.threshold || 1;
        M.params.Points ? M.params.Points.threshold = S * t.raycastMultiplier : M.params.Points = { threshold: S * t.raycastMultiplier };
        const C = w.call(this, M, b);
        return M.params.Points.threshold = S, C;
      };
    }, a = (A) => {
      if (A.length === 0) return new P();
      const w = new P();
      return A.forEach((M) => w.add(M)), w.divideScalar(A.length), w;
    }, c = (A, w) => A.map((M) => M.clone().sub(w)), u = () => {
      const A = new bs({
        size: t.size || 32,
        transparent: true,
        sizeAttenuation: t.sizeAttenuation,
        vertexColors: true
      });
      if (t.icon) {
        const C = new ar().load(t.icon);
        A.map = C, A.needsUpdate = true;
      }
      const w = new $e(), M = new Float32Array(t.points.length * 3), b = new Float32Array(t.points.length * 3);
      w.setAttribute("position", new ht(M, 3)), w.setAttribute("color", new ht(b, 3)), s.value = new si(w, A), s.value.renderOrder = t.renderOrder, o(s.value);
    }, h = () => {
      if (s.value) {
        const A = s.value.geometry, w = A.getAttribute("position"), M = A.getAttribute("color");
        i.value = t.points.map(
          (S) => Pe(S.lon, S.lat, S.height || 0)
        ), r.value = a(i.value), c(i.value, r.value).forEach((S, C) => {
          w.setXYZ(C, S.x, S.y, S.z);
          const R = t.points[C].color || t.color || "#ffffff", I = new Ce(R);
          M.setXYZ(C, I.r, I.g, I.b);
        }), w.needsUpdate = true, M.needsUpdate = true, s.value.position.copy(r.value);
      }
    };
    O(
      () => t.points,
      () => {
        h();
      },
      { immediate: true }
    ), O(
      () => t.size,
      () => {
        s.value && (s.value.material.size = t.size || 32, s.value.material.needsUpdate = true);
      }
    ), O(
      () => t.raycastMultiplier,
      (A) => {
        s.value && o(s.value);
      }
    );
    const d = (A) => (w) => {
      if (!(!s.value || !t.raycastActive) && w.index !== void 0 && w.index < t.points.length) {
        const M = t.points[w.index];
        n(A, w, M, w.index);
      }
    }, p = d("click"), m = d("doubleclick"), f = d("contextmenu"), g = d("pointerenter"), _ = d("pointerleave"), y = d("pointerover"), v = d("pointerdown"), x = d("pointerup"), T = d("wheel");
    return _e(() => {
      u(), h();
    }), Le(() => {
      if (s.value) {
        s.value.geometry.dispose();
        const A = s.value.material;
        A.map?.dispose(), A.dispose();
      }
    }), (A, w) => s.value ? (Z(), me("primitive", {
      key: 0,
      object: s.value,
      onClick: w[0] || (w[0] = //@ts-ignore
      (...M) => E(p) && E(p)(...M)),
      onDoubleclick: w[1] || (w[1] = //@ts-ignore
      (...M) => E(m) && E(m)(...M)),
      onContextmenu: w[2] || (w[2] = //@ts-ignore
      (...M) => E(f) && E(f)(...M)),
      onPointerenter: w[3] || (w[3] = //@ts-ignore
      (...M) => E(g) && E(g)(...M)),
      onPointerleave: w[4] || (w[4] = //@ts-ignore
      (...M) => E(_) && E(_)(...M)),
      onPointerover: w[5] || (w[5] = //@ts-ignore
      (...M) => E(y) && E(y)(...M)),
      onPointerdown: w[6] || (w[6] = //@ts-ignore
      (...M) => E(v) && E(v)(...M)),
      onPointerup: w[7] || (w[7] = //@ts-ignore
      (...M) => E(x) && E(x)(...M)),
      onWheel: w[8] || (w[8] = //@ts-ignore
      (...M) => E(T) && E(T)(...M))
    }, null, 40, kd)) : Fe("", true);
  }
}), Fd = ["object"], ty = /* @__PURE__ */ ie({
  __name: "GeoPoint",
  props: {
    point: {},
    color: {},
    size: {},
    icon: {},
    renderOrder: { default: 1 },
    raycastActive: { type: Boolean },
    raycastMultiplier: { default: 1 },
    sizeAttenuation: { type: Boolean, default: true },
    id: {}
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = (_) => {
      const y = _.raycast;
      _.raycast = function(v, x) {
        const T = v.params.Points?.threshold || 1;
        v.params.Points ? v.params.Points.threshold = T * t.raycastMultiplier : v.params.Points = { threshold: T * t.raycastMultiplier };
        const A = y.call(this, v, x);
        return v.params.Points.threshold = T, A;
      };
    }, r = () => {
      const _ = new $e();
      _.setAttribute("position", new ht([0, 0, 0], 3));
      const y = new bs({
        size: t.size || 32,
        transparent: true,
        sizeAttenuation: t.sizeAttenuation,
        color: t.color || "#ffffff"
      });
      if (t.icon) {
        const v = new ar();
        y.map = v.load(t.icon), y.needsUpdate = true;
      }
      s.value = new si(_, y), s.value.renderOrder = t.renderOrder, i(s.value);
    };
    O(
      () => t.size,
      (_) => {
        s.value && (s.value.material.size = _ || 32, s.value.material.needsUpdate = true);
      }
    );
    const o = (_) => (y) => {
      !s.value || !t.raycastActive || y.index !== void 0 && n(_, y, t, 0);
    }, a = o("click"), c = o("doubleclick"), u = o("contextmenu"), h = o("pointerenter"), d = o("pointerleave"), p = o("pointerover"), m = o("pointerdown"), f = o("pointerup"), g = o("wheel");
    return _e(r), Le(() => {
      if (s.value) {
        s.value.geometry.dispose();
        const _ = s.value.material;
        _.map?.dispose(), _.dispose();
      }
    }), (_, y) => (Z(), wt(E(_a), {
      point: t.point
    }, {
      default: ni(() => [
        s.value ? (Z(), me("primitive", {
          key: 0,
          object: s.value,
          onClick: y[0] || (y[0] = //@ts-ignore
          (...v) => E(a) && E(a)(...v)),
          onDoubleclick: y[1] || (y[1] = //@ts-ignore
          (...v) => E(c) && E(c)(...v)),
          onContextmenu: y[2] || (y[2] = //@ts-ignore
          (...v) => E(u) && E(u)(...v)),
          onPointerenter: y[3] || (y[3] = //@ts-ignore
          (...v) => E(h) && E(h)(...v)),
          onPointerleave: y[4] || (y[4] = //@ts-ignore
          (...v) => E(d) && E(d)(...v)),
          onPointerover: y[5] || (y[5] = //@ts-ignore
          (...v) => E(p) && E(p)(...v)),
          onPointerdown: y[6] || (y[6] = //@ts-ignore
          (...v) => E(m) && E(m)(...v)),
          onPointerup: y[7] || (y[7] = //@ts-ignore
          (...v) => E(f) && E(f)(...v)),
          onWheel: y[8] || (y[8] = //@ts-ignore
          (...v) => E(g) && E(g)(...v))
        }, null, 40, Fd)) : Fe("", true)
      ]),
      _: 1
    }, 8, ["point"]));
  }
}), us = (l15) => {
  if (l15.length === 0) return new P();
  const e = new P();
  return l15.forEach((t) => e.add(t)), e.divideScalar(l15.length), e;
}, hs = (l15, e) => l15.map((t) => t.clone().sub(e)), ds = (l15) => l15.map((e) => Pe(e.lon, e.lat, e.height || 0)), Nd = (l15) => {
  l15.startTime = 0, l15.isAnimating = true;
}, Ud = (l15) => {
  l15.isAnimating = false;
}, Bd = (l15, e, t, n, s = false, i = 1) => {
  n.startTime === 0 && (n.startTime = e);
  let o = (e - n.startTime) * Math.max(0, i) % t / t;
  s && (o = 1 - o), l15.offset.x = -o, l15.needsUpdate = true;
}, zd = (l15, e, t, n, s = false, i = 1) => {
  n.startTime === 0 && (n.startTime = e);
  let o = (e - n.startTime) * Math.max(0, i) % t / t;
  s && (o = 1 - o), l15.uniforms && l15.uniforms.offset && (l15.uniforms.offset.value.x = -o);
}, Fn = (l15, e, t = true, n) => {
  const s = (i) => (r) => {
    if (!t) return;
    const o = r.index !== void 0 ? r.index : 0;
    l15(i, r, e, o);
  };
  return {
    handleClick: s("click"),
    handleDoubleClick: s("doubleclick"),
    handleContextMenu: s("contextmenu"),
    handlePointerEnter: s("pointerenter"),
    handlePointerLeave: s("pointerleave"),
    handlePointerOver: s("pointerover"),
    handlePointerDown: s("pointerdown"),
    handlePointerUp: s("pointerup"),
    handleWheel: s("wheel")
  };
}, Ht = (l15, e = 1) => {
  if (!l15 || !l15.raycast) return;
  const t = l15.raycast;
  l15.raycast = function(n, s) {
    const i = n.params.Points?.threshold || 1;
    n.params.Points ? n.params.Points.threshold = i * e : l15.type === "Points" && (n.params.Points = { threshold: i * e });
    const r = t.call(this, n, s);
    return n.params.Points && (n.params.Points.threshold = i), r;
  };
}, Hd = ["object"], rl = /* @__PURE__ */ ie({
  __name: "GeoTubeline",
  props: {
    points: {},
    color: {},
    width: {},
    tubularSegments: {},
    map: {},
    renderOrder: { default: 1 },
    opacity: { default: 1 },
    repeat: { default: () => [1, 1] },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = ce(), r = xe([]), o = xe(new P()), a = Fn(n, t, t.raycastActive), c = On("registerAnimationTarget"), u = On("unregisterAnimationTarget"), h = () => (t.width || 2) * 0.3, d = () => {
      s.value = new ge(), r.value = ds(t.points), o.value = us(r.value);
      const m = hs(r.value, o.value), f = new $a();
      for (let v = 0; v < m.length - 1; v++) {
        const x = new Ka(m[v], m[v + 1]);
        f.add(x);
      }
      const g = new qa(f, t.tubularSegments || 64, h(), 8, false), _ = {
        color: t.color || "#ffffff",
        transparent: true,
        side: oa,
        opacity: t.opacity !== void 0 ? t.opacity : 1
      };
      t.map && (_.map = t.map, t.repeat && t.repeat.length >= 2 && (t.map.repeat.set(t.repeat[0], t.repeat[1]), t.map.needsUpdate = true));
      const y = new Ne(_);
      i.value = new et(g, y), i.value.renderOrder = t.renderOrder, t.raycastActive && Ht(i.value, t.raycastMultiplier), s.value.add(i.value), s.value.position.copy(o.value), c && c(i.value, "texture", t.map);
    }, p = () => {
      if (i.value) {
        i.value.geometry.dispose(), r.value = ds(t.points), o.value = us(r.value);
        const f = hs(r.value, o.value), g = new $a();
        for (let y = 0; y < f.length - 1; y++) {
          const v = new Ka(f[y], f[y + 1]);
          g.add(v);
        }
        const _ = new qa(g, t.tubularSegments || 64, h(), 8, false);
        i.value.geometry = _, s.value.position.copy(o.value);
      }
    };
    return O(
      () => t.points,
      () => {
        p();
      },
      { immediate: true }
    ), O(
      () => t.color,
      (m) => {
        i.value && (i.value.material.color.set(m || "#ffffff"), i.value.material.needsUpdate = true);
      }
    ), O(
      () => t.opacity,
      (m) => {
        i.value && (i.value.material.opacity = m !== void 0 ? m : 1, i.value.material.needsUpdate = true);
      }
    ), O(
      () => t.repeat,
      (m) => {
        i.value && i.value.material.map && m && m.length >= 2 && (i.value.material.map.repeat.set(m[0], m[1]), i.value.material.map.needsUpdate = true);
      },
      { deep: true }
    ), O(
      () => [t.width, t.tubularSegments],
      () => {
        p();
      }
    ), O(
      () => t.map,
      (m) => {
        i.value && (m ? (i.value.material.map = m, t.repeat && t.repeat.length >= 2 && (m.repeat.set(t.repeat[0], t.repeat[1]), m.needsUpdate = true), i.value.material.needsUpdate = true, c && c(i.value, "texture", m)) : (i.value.material.map = null, i.value.material.needsUpdate = true, c && c(i.value, "texture", void 0)));
      }
    ), _e(() => {
      d();
    }), Le(() => {
      i.value && (u && u(i.value), i.value.geometry.dispose(), i.value.material.dispose()), s.value && s.value.clear();
    }), (m, f) => s.value ? (Z(), me("primitive", {
      key: 0,
      object: s.value,
      onClick: f[0] || (f[0] = //@ts-ignore
      (...g) => E(a).handleClick && E(a).handleClick(...g)),
      onDoubleclick: f[1] || (f[1] = //@ts-ignore
      (...g) => E(a).handleDoubleClick && E(a).handleDoubleClick(...g)),
      onContextmenu: f[2] || (f[2] = //@ts-ignore
      (...g) => E(a).handleContextMenu && E(a).handleContextMenu(...g)),
      onPointerenter: f[3] || (f[3] = //@ts-ignore
      (...g) => E(a).handlePointerEnter && E(a).handlePointerEnter(...g)),
      onPointerleave: f[4] || (f[4] = //@ts-ignore
      (...g) => E(a).handlePointerLeave && E(a).handlePointerLeave(...g)),
      onPointerover: f[5] || (f[5] = //@ts-ignore
      (...g) => E(a).handlePointerOver && E(a).handlePointerOver(...g)),
      onPointerdown: f[6] || (f[6] = //@ts-ignore
      (...g) => E(a).handlePointerDown && E(a).handlePointerDown(...g)),
      onPointerup: f[7] || (f[7] = //@ts-ignore
      (...g) => E(a).handlePointerUp && E(a).handlePointerUp(...g)),
      onWheel: f[8] || (f[8] = //@ts-ignore
      (...g) => E(a).handleWheel && E(a).handleWheel(...g))
    }, null, 40, Hd)) : Fe("", true);
  }
});
class St extends B.BufferGeometry {
  constructor() {
    super(), this.isMeshLine = true, this.type = "MeshLine", this.positions = [], this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [], this.counters = [], this._points = [], this._geom = null, this.widthCallback = null, this.matrixWorld = new B.Matrix4(), Object.defineProperties(this, {
      // this is now a bufferGeometry
      // add getter to support previous api
      geometry: {
        enumerable: true,
        get: function() {
          return this;
        }
      },
      geom: {
        enumerable: true,
        get: function() {
          return this._geom;
        },
        set: function(e) {
          this.setGeometry(e, this.widthCallback);
        }
      },
      // for declaritive architectures
      // to return the same value that sets the points
      // eg. this.points = points
      // console.log(this.points) -> points
      points: {
        enumerable: true,
        get: function() {
          return this._points;
        },
        set: function(e) {
          this.setPoints(e, this.widthCallback);
        }
      }
    });
  }
}
St.prototype.setMatrixWorld = function(l15) {
  this.matrixWorld = l15;
};
St.prototype.setGeometry = function(l15, e) {
  this._geometry = l15, this.setPoints(l15.getAttribute("position").array, e);
};
St.prototype.setPoints = function(l15, e) {
  if (!(l15 instanceof Float32Array) && !(l15 instanceof Array)) {
    console.error(
      "ERROR: The BufferArray of points is not instancied correctly."
    );
    return;
  }
  if (this._points = l15, this.widthCallback = e, this.positions = [], this.counters = [], l15.length && l15[0] instanceof B.Vector3)
    for (var t = 0; t < l15.length; t++) {
      var n = l15[t], s = t / l15.length;
      this.positions.push(n.x, n.y, n.z), this.positions.push(n.x, n.y, n.z), this.counters.push(s), this.counters.push(s);
    }
  else
    for (var t = 0; t < l15.length; t += 3) {
      var s = t / l15.length;
      this.positions.push(l15[t], l15[t + 1], l15[t + 2]), this.positions.push(l15[t], l15[t + 1], l15[t + 2]), this.counters.push(s), this.counters.push(s);
    }
  this.process();
};
function jd(l15, e) {
  var t = new B.Matrix4(), n = new B.Ray(), s = new B.Sphere(), i = new B.Vector3(), r = this.geometry;
  if (r.boundingSphere || r.computeBoundingSphere(), s.copy(r.boundingSphere), s.applyMatrix4(this.matrixWorld), l15.ray.intersectSphere(s, i) !== false) {
    t.copy(this.matrixWorld).invert(), n.copy(l15.ray).applyMatrix4(t);
    var o = new B.Vector3(), a = new B.Vector3(), c = new B.Vector3(), u = this instanceof B.LineSegments ? 2 : 1, h = r.index, d = r.attributes;
    if (h !== null)
      for (var p = h.array, m = d.position.array, f = d.width.array, g = 0, _ = p.length - 1; g < _; g += u) {
        var y = p[g], v = p[g + 1];
        o.fromArray(m, y * 3), a.fromArray(m, v * 3);
        var x = f[Math.floor(g / 3)] !== void 0 ? f[Math.floor(g / 3)] : 1, T = l15.params.Line.threshold + this.material.lineWidth * x / 2, A = T * T, w = n.distanceSqToSegment(o, a, i, c);
        if (!(w > A)) {
          i.applyMatrix4(this.matrixWorld);
          var M = l15.ray.origin.distanceTo(i);
          M < l15.near || M > l15.far || (e.push({
            distance: M,
            // What do we want? intersection point on the ray or on the segment??
            // point: raycaster.ray.at( distance ),
            point: c.clone().applyMatrix4(this.matrixWorld),
            index: g,
            face: null,
            faceIndex: null,
            object: this
          }), g = _);
        }
      }
  }
}
St.prototype.raycast = jd;
St.prototype.compareV3 = function(l15, e) {
  var t = l15 * 6, n = e * 6;
  return this.positions[t] === this.positions[n] && this.positions[t + 1] === this.positions[n + 1] && this.positions[t + 2] === this.positions[n + 2];
};
St.prototype.copyV3 = function(l15) {
  var e = l15 * 6;
  return [this.positions[e], this.positions[e + 1], this.positions[e + 2]];
};
St.prototype.process = function() {
  var l15 = this.positions.length / 6;
  this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
  var e, t;
  this.compareV3(0, l15 - 1) ? t = this.copyV3(l15 - 2) : t = this.copyV3(0), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
  for (var n = 0; n < l15; n++) {
    if (this.side.push(1), this.side.push(-1), this.widthCallback ? e = this.widthCallback(n / (l15 - 1)) : e = 1, this.width.push(e), this.width.push(e), this.uvs.push(n / (l15 - 1), 0), this.uvs.push(n / (l15 - 1), 1), n < l15 - 1) {
      t = this.copyV3(n), this.previous.push(t[0], t[1], t[2]), this.previous.push(t[0], t[1], t[2]);
      var s = n * 2;
      this.indices_array.push(s, s + 1, s + 2), this.indices_array.push(s + 2, s + 1, s + 3);
    }
    n > 0 && (t = this.copyV3(n), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]));
  }
  this.compareV3(l15 - 1, 0) ? t = this.copyV3(1) : t = this.copyV3(l15 - 1), this.next.push(t[0], t[1], t[2]), this.next.push(t[0], t[1], t[2]), !this._attributes || this._attributes.position.count !== this.positions.length ? this._attributes = {
    position: new B.BufferAttribute(new Float32Array(this.positions), 3),
    previous: new B.BufferAttribute(new Float32Array(this.previous), 3),
    next: new B.BufferAttribute(new Float32Array(this.next), 3),
    side: new B.BufferAttribute(new Float32Array(this.side), 1),
    width: new B.BufferAttribute(new Float32Array(this.width), 1),
    uv: new B.BufferAttribute(new Float32Array(this.uvs), 2),
    index: new B.BufferAttribute(new Uint16Array(this.indices_array), 1),
    counters: new B.BufferAttribute(new Float32Array(this.counters), 1)
  } : (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = true, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = true, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = true, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = true, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = true, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = true, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = true), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox(), this._geometry.attributes = this.attributes, this._geometry.index = this.index, this._geometry.computeBoundingSphere(), this._geometry.computeBoundingBox();
};
function Mr(l15, e, t, n, s) {
  var i;
  if (l15 = l15.subarray || l15.slice ? l15 : l15.buffer, t = t.subarray || t.slice ? t : t.buffer, l15 = e ? l15.subarray ? l15.subarray(e, s && e + s) : l15.slice(e, s && e + s) : l15, t.set)
    t.set(l15, n);
  else
    for (i = 0; i < l15.length; i++)
      t[i + n] = l15[i];
  return t;
}
St.prototype.advance = function(l15) {
  var e = this._attributes.position.array, t = this._attributes.previous.array, n = this._attributes.next.array, s = e.length;
  Mr(e, 0, t, 0, s), Mr(e, 6, e, 0, s - 6), e[s - 6] = l15.x, e[s - 5] = l15.y, e[s - 4] = l15.z, e[s - 3] = l15.x, e[s - 2] = l15.y, e[s - 1] = l15.z, Mr(e, 6, n, 0, s - 6), n[s - 6] = l15.x, n[s - 5] = l15.y, n[s - 4] = l15.z, n[s - 3] = l15.x, n[s - 2] = l15.y, n[s - 1] = l15.z, this._attributes.position.needsUpdate = true, this._attributes.previous.needsUpdate = true, this._attributes.next.needsUpdate = true;
};
B.ShaderChunk.meshline_vert = [
  "",
  B.ShaderChunk.logdepthbuf_pars_vertex,
  B.ShaderChunk.fog_pars_vertex,
  "",
  "attribute vec3 previous;",
  "attribute vec3 next;",
  "attribute float side;",
  "attribute float width;",
  "attribute float counters;",
  "",
  "uniform vec2 resolution;",
  "uniform float lineWidth;",
  "uniform vec3 color;",
  "uniform float opacity;",
  "uniform float near;",
  "uniform float far;",
  "uniform float sizeAttenuation;",
  "uniform vec2 offset;",
  "",
  "varying vec2 vUV;",
  "varying vec4 vColor;",
  "varying float vCounters;",
  "",
  "vec2 fix( vec4 i, float aspect ) {",
  "",
  "    vec2 res = i.xy / i.w;",
  "    res.x *= aspect;",
  "	 vCounters = counters;",
  "    return res;",
  "",
  "}",
  "",
  "void main() {",
  "",
  "    float aspect = resolution.x / resolution.y;",
  "    float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);",
  "",
  "    vColor = vec4( color, opacity );",
  "    vUV = uv + offset;",
  "",
  "    mat4 m = projectionMatrix * modelViewMatrix;",
  "    vec4 finalPosition = m * vec4( position, 1.0 );",
  "    vec4 prevPos = m * vec4( previous, 1.0 );",
  "    vec4 nextPos = m * vec4( next, 1.0 );",
  "",
  "    vec2 currentP = fix( finalPosition, aspect );",
  "    vec2 prevP = fix( prevPos, aspect );",
  "    vec2 nextP = fix( nextPos, aspect );",
  "",
  "    float pixelWidth = finalPosition.w * pixelWidthRatio;",
  "    float w = 1.8 * pixelWidth * lineWidth * width;",
  "",
  "    if( sizeAttenuation == 1. ) {",
  "        w = 1.8 * lineWidth * width;",
  "    }",
  "",
  "    vec2 dir;",
  "    if( nextP == currentP ) dir = normalize( currentP - prevP );",
  "    else if( prevP == currentP ) dir = normalize( nextP - currentP );",
  "    else {",
  "        vec2 dir1 = normalize( currentP - prevP );",
  "        vec2 dir2 = normalize( nextP - currentP );",
  "        dir = normalize( dir1 + dir2 );",
  "",
  "        vec2 perp = vec2( -dir1.y, dir1.x );",
  "        vec2 miter = vec2( -dir.y, dir.x );",
  "        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );",
  "",
  "    }",
  "",
  "    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;",
  "    vec2 normal = vec2( -dir.y, dir.x );",
  "    normal.x /= aspect;",
  "    normal *= .5 * w;",
  "",
  "    vec4 offset = vec4( normal * side, 0.0, 1.0 );",
  "    finalPosition.xy += offset.xy;",
  "",
  "    gl_Position = finalPosition;",
  "",
  B.ShaderChunk.logdepthbuf_vertex,
  B.ShaderChunk.fog_vertex && "    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
  B.ShaderChunk.fog_vertex,
  "}"
].join(`\r
`);
B.ShaderChunk.meshline_frag = [
  "",
  B.ShaderChunk.fog_pars_fragment,
  B.ShaderChunk.logdepthbuf_pars_fragment,
  "",
  "uniform sampler2D map;",
  "uniform sampler2D alphaMap;",
  "uniform float useMap;",
  "uniform float useAlphaMap;",
  "uniform float useDash;",
  "uniform float dashArray;",
  "uniform float dashOffset;",
  "uniform float dashRatio;",
  "uniform float visibility;",
  "uniform float alphaTest;",
  "uniform vec2 repeat;",
  "",
  "varying vec2 vUV;",
  "varying vec4 vColor;",
  "varying float vCounters;",
  "",
  "void main() {",
  "",
  B.ShaderChunk.logdepthbuf_fragment,
  "",
  "    vec4 c = vColor;",
  "    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );",
  "    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;",
  "    if( c.a < alphaTest ) discard;",
  "    if( useDash == 1. ){",
  "        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));",
  "    }",
  "    gl_FragColor = c;",
  "    gl_FragColor.a *= step(vCounters, visibility);",
  "",
  B.ShaderChunk.fog_fragment,
  "}"
].join(`\r
`);
class ma extends B.ShaderMaterial {
  constructor(e) {
    super({
      uniforms: Object.assign({}, B.UniformsLib.fog, {
        lineWidth: { value: 1 },
        map: { value: null },
        useMap: { value: 0 },
        alphaMap: { value: null },
        useAlphaMap: { value: 0 },
        color: { value: new B.Color(16777215) },
        opacity: { value: 1 },
        resolution: { value: new B.Vector2(1, 1) },
        sizeAttenuation: { value: 1 },
        dashArray: { value: 0 },
        dashOffset: { value: 0 },
        dashRatio: { value: 0.5 },
        useDash: { value: 0 },
        visibility: { value: 1 },
        alphaTest: { value: 0 },
        repeat: { value: new B.Vector2(1, 1) },
        offset: { value: new B.Vector2(1, 1) }
      }),
      depthWrite: e.depthWrite !== void 0 ? e.depthWrite : true,
      depthTest: e.depthTest !== void 0 ? e.depthTest : true,
      transparent: e.transparent !== void 0 ? e.transparent : true,
      vertexShader: B.ShaderChunk.meshline_vert,
      fragmentShader: B.ShaderChunk.meshline_frag
    }), this.isMeshLineMaterial = true, this.type = "MeshLineMaterial", Object.defineProperties(this, {
      lineWidth: {
        enumerable: true,
        get: function() {
          return this.uniforms.lineWidth.value;
        },
        set: function(t) {
          this.uniforms.lineWidth.value = t;
        }
      },
      map: {
        enumerable: true,
        get: function() {
          return this.uniforms.map.value;
        },
        set: function(t) {
          this.uniforms.map.value = t;
        }
      },
      useMap: {
        enumerable: true,
        get: function() {
          return this.uniforms.useMap.value;
        },
        set: function(t) {
          this.uniforms.useMap.value = t;
        }
      },
      alphaMap: {
        enumerable: true,
        get: function() {
          return this.uniforms.alphaMap.value;
        },
        set: function(t) {
          this.uniforms.alphaMap.value = t;
        }
      },
      useAlphaMap: {
        enumerable: true,
        get: function() {
          return this.uniforms.useAlphaMap.value;
        },
        set: function(t) {
          this.uniforms.useAlphaMap.value = t;
        }
      },
      color: {
        enumerable: true,
        get: function() {
          return this.uniforms.color.value;
        },
        set: function(t) {
          this.uniforms.color.value = t;
        }
      },
      opacity: {
        enumerable: true,
        get: function() {
          return this.uniforms.opacity.value;
        },
        set: function(t) {
          this.uniforms.opacity.value = t;
        }
      },
      resolution: {
        enumerable: true,
        get: function() {
          return this.uniforms.resolution.value;
        },
        set: function(t) {
          this.uniforms.resolution.value.copy(t);
        }
      },
      sizeAttenuation: {
        enumerable: true,
        get: function() {
          return this.uniforms.sizeAttenuation.value;
        },
        set: function(t) {
          this.uniforms.sizeAttenuation.value = t;
        }
      },
      dashArray: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashArray.value;
        },
        set: function(t) {
          this.uniforms.dashArray.value = t, this.useDash = t !== 0 ? 1 : 0;
        }
      },
      dashOffset: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashOffset.value;
        },
        set: function(t) {
          this.uniforms.dashOffset.value = t;
        }
      },
      dashRatio: {
        enumerable: true,
        get: function() {
          return this.uniforms.dashRatio.value;
        },
        set: function(t) {
          this.uniforms.dashRatio.value = t;
        }
      },
      useDash: {
        enumerable: true,
        get: function() {
          return this.uniforms.useDash.value;
        },
        set: function(t) {
          this.uniforms.useDash.value = t;
        }
      },
      visibility: {
        enumerable: true,
        get: function() {
          return this.uniforms.visibility.value;
        },
        set: function(t) {
          this.uniforms.visibility.value = t;
        }
      },
      alphaTest: {
        enumerable: true,
        get: function() {
          return this.uniforms.alphaTest.value;
        },
        set: function(t) {
          this.uniforms.alphaTest.value = t;
        }
      },
      repeat: {
        enumerable: true,
        get: function() {
          return this.uniforms.repeat.value;
        },
        set: function(t) {
          this.uniforms.repeat.value.copy(t);
        }
      },
      offset: {
        enumerable: true,
        get: function() {
          return this.uniforms.offset.value;
        },
        set: function(t) {
          this.uniforms.offset.value.copy(t);
        }
      }
    }), this.setValues(e);
  }
}
ma.prototype.copy = function(l15) {
  return B.ShaderMaterial.prototype.copy.call(this, l15), this.lineWidth = l15.lineWidth, this.map = l15.map, this.useMap = l15.useMap, this.alphaMap = l15.alphaMap, this.useAlphaMap = l15.useAlphaMap, this.color.copy(l15.color), this.opacity = l15.opacity, this.resolution.copy(l15.resolution), this.sizeAttenuation = l15.sizeAttenuation, this.dashArray.copy(l15.dashArray), this.dashOffset.copy(l15.dashOffset), this.dashRatio.copy(l15.dashRatio), this.useDash = l15.useDash, this.visibility = l15.visibility, this.alphaTest = l15.alphaTest, this.repeat.copy(l15.repeat), this;
};
const Vd = ["object"], ol = /* @__PURE__ */ ie({
  __name: "GeoMeshline",
  props: {
    points: {},
    color: {},
    width: {},
    sizeAttenuation: { type: Boolean, default: true },
    dashArray: {},
    dashRatio: {},
    dashOffset: {},
    map: {},
    renderOrder: { default: 1 },
    opacity: { default: 1 },
    repeat: { default: () => [1, 1] },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = ce(), r = ce(), o = xe([]), a = xe(new P()), c = Fn(n, t, t.raycastActive), u = On(
      "registerAnimationTarget"
    ), h = On("unregisterAnimationTarget"), d = (f) => {
      const g = new $e(), _ = new Float32Array(f.length * 3);
      return f.forEach((y, v) => {
        _[v * 3] = y.x, _[v * 3 + 1] = y.y, _[v * 3 + 2] = y.z;
      }), g.setAttribute("position", new we(_, 3)), g;
    }, p = () => {
      if (t.points.length < 2) return;
      s.value = new ge(), o.value = ds(t.points), a.value = us(o.value);
      const f = hs(o.value, a.value), g = d(f);
      i.value = new St(), i.value.setGeometry(g);
      const _ = {
        color: t.color || "#ffffff",
        lineWidth: t.width || 1,
        // 禁用虚线，改为使用UV贴图动画
        dashArray: 0,
        dashRatio: 0,
        dashOffset: 0,
        useDash: 0,
        sizeAttenuation: t.sizeAttenuation ? 1 : 0,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        repeat: new $(...t.repeat)
      };
      t.map && (_.map = t.map, _.useMap = 1);
      const y = new ma(_);
      r.value = new et(i.value.geometry, y), r.value.renderOrder = t.renderOrder, t.raycastActive && Ht(r.value, t.raycastMultiplier), s.value.add(r.value), s.value.position.copy(a.value), u && u(r.value, "meshline", t.map);
    };
    O(
      () => t.repeat,
      (f) => {
        if (r.value && r.value.material) {
          const g = r.value.material;
          g.uniforms.repeat.value.set(f[0], f[1]), g.needsUpdate = true;
        }
      },
      { immediate: true }
    ), O(
      () => t.opacity,
      (f) => {
        if (r.value && r.value.material) {
          const g = r.value.material;
          g.opacity = f !== void 0 ? f : 1, g.needsUpdate = true;
        }
      },
      { immediate: true }
    );
    const m = () => {
      if (!i.value || !r.value || t.points.length < 2) return;
      o.value = ds(t.points), a.value = us(o.value);
      const f = hs(o.value, a.value), g = d(f);
      i.value.setGeometry(g), s.value.position.copy(a.value);
    };
    return O(
      () => t.points,
      () => {
        t.points.length >= 2 && m();
      },
      { deep: true }
    ), O(
      () => [t.color, t.width],
      () => {
        if (r.value) {
          const f = r.value.material;
          f.uniforms && (f.uniforms.color && f.uniforms.color.value.set(t.color || "#ffffff"), f.uniforms.lineWidth && (f.uniforms.lineWidth.value = t.width || 1), f.uniforms.useDash && (f.uniforms.useDash.value = 0), f.uniforms.dashArray && (f.uniforms.dashArray.value = 0));
        }
      }
    ), O(
      () => t.map,
      (f) => {
        if (r.value) {
          const g = r.value.material;
          f ? (g.uniforms && (g.uniforms.map.value = f, g.uniforms.useMap.value = 1), u && u(r.value, "meshline", f)) : (g.uniforms && (g.uniforms.map.value = null, g.uniforms.useMap.value = 0), u && u(r.value, "meshline", void 0));
        }
      }
    ), _e(() => {
      p();
    }), Le(() => {
      if (r.value && (h && h(r.value), r.value.geometry && r.value.geometry.dispose(), r.value.material)) {
        const f = r.value.material;
        f.dispose && f.dispose();
      }
      s.value && s.value.clear();
    }), (f, g) => s.value ? (Z(), me("primitive", {
      key: 0,
      object: s.value,
      onClick: g[0] || (g[0] = //@ts-ignore
      (..._) => E(c).handleClick && E(c).handleClick(..._)),
      onDoubleclick: g[1] || (g[1] = //@ts-ignore
      (..._) => E(c).handleDoubleClick && E(c).handleDoubleClick(..._)),
      onContextmenu: g[2] || (g[2] = //@ts-ignore
      (..._) => E(c).handleContextMenu && E(c).handleContextMenu(..._)),
      onPointerenter: g[3] || (g[3] = //@ts-ignore
      (..._) => E(c).handlePointerEnter && E(c).handlePointerEnter(..._)),
      onPointerleave: g[4] || (g[4] = //@ts-ignore
      (..._) => E(c).handlePointerLeave && E(c).handlePointerLeave(..._)),
      onPointerover: g[5] || (g[5] = //@ts-ignore
      (..._) => E(c).handlePointerOver && E(c).handlePointerOver(..._)),
      onPointerdown: g[6] || (g[6] = //@ts-ignore
      (..._) => E(c).handlePointerDown && E(c).handlePointerDown(..._)),
      onPointerup: g[7] || (g[7] = //@ts-ignore
      (..._) => E(c).handlePointerUp && E(c).handlePointerUp(..._)),
      onWheel: g[8] || (g[8] = //@ts-ignore
      (..._) => E(c).handleWheel && E(c).handleWheel(..._))
    }, [
      Je(f.$slots, "default")
    ], 40, Vd)) : Fe("", true);
  }
}), $d = /* @__PURE__ */ ie({
  __name: "GeoLineAnimation",
  props: {
    texture: {},
    autoStart: { type: Boolean, default: true },
    duration: { default: 1e3 },
    reverse: { type: Boolean, default: false },
    speed: { default: 1 }
  },
  setup(l15, { expose: e }) {
    const t = l15, n = xe({ startTime: 0, isAnimating: false }), s = xe([]), { onRender: i } = ml$1();
    ja(
      "registerAnimationTarget",
      (a, c, u) => {
        const h = s.value.findIndex((d) => d.target === a);
        h >= 0 ? s.value[h] = { target: a, type: c, texture: u } : s.value.push({ target: a, type: c, texture: u });
      }
    ), ja("unregisterAnimationTarget", (a) => {
      const c = s.value.findIndex((u) => u.target === a);
      c >= 0 && s.value.splice(c, 1);
    }), i(({ elapsed: a }) => {
      !t.autoStart || !t.duration || !n.value.isAnimating || s.value.length !== 0 && s.value.forEach(({ target: c, type: u, texture: h }) => {
        if (c) {
          if (u === "meshline")
            zd(
              c.material,
              a * 1e3,
              t.duration,
              n.value,
              t.reverse,
              t.speed
            );
          else if (u === "texture") {
            const d = h || t.texture;
            d && Bd(
              d,
              a * 1e3,
              t.duration,
              n.value,
              t.reverse,
              t.speed
            );
          }
        }
      });
    });
    const r = () => {
      t.duration && Nd(n.value);
    }, o = () => {
      Ud(n.value);
    };
    return O(
      () => t.duration,
      (a) => {
        a && t.autoStart && s.value.length > 0 ? r() : o();
      }
    ), O(
      () => t.texture,
      (a) => {
        a && t.duration && t.autoStart && s.value.length > 0 ? r() : o();
      }
    ), O(
      () => t.reverse,
      () => {
        t.autoStart && t.duration && s.value.length > 0 && (o(), setTimeout(() => {
          r();
        }, 10));
      }
    ), _e(() => {
      t.autoStart && t.duration && setTimeout(() => {
        s.value.length > 0 && r();
      }, 100);
    }), Le(() => {
      o();
    }), e({
      start: r,
      stop: o,
      isAnimating: () => n.value.isAnimating,
      getAnimationTargets: () => s.value,
      getTargetCount: () => s.value.length
    }), (a, c) => Je(a.$slots, "default");
  }
}), iy = /* @__PURE__ */ ie({
  __name: "GeoFlyline",
  props: {
    start: {},
    end: {},
    type: { default: "mesh" },
    color: { default: "#ffffff" },
    width: { default: 1 },
    map: {},
    autoStart: { type: Boolean, default: true },
    arcHeight: { default: 0 },
    segments: { default: 20 },
    tubularSegments: {},
    renderOrder: { default: 1 },
    duration: { default: 2e3 },
    reverse: { type: Boolean, default: false },
    opacity: { default: 1 },
    repeat: { default: () => [1, 1] },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { expose: e, emit: t }) {
    const n = l15, s = t, i = xe([]), r = xe(), o = On("registerAnimationTarget", null), a = ia(() => o !== null), c = (h, d) => {
      const p = d.lon - h.lon, m = d.lat - h.lat;
      return Math.sqrt(p * p + m * m);
    }, u = () => {
      const { start: h, end: d, arcHeight: p, segments: m } = n, f = [], g = c(h, d), _ = p || g * 0.2, y = h.height || 0, v = d.height || 0;
      for (let x = 0; x <= m; x++) {
        const T = x / m, A = h.lon + (d.lon - h.lon) * T, w = h.lat + (d.lat - h.lat) * T, M = y + (v - y) * T, b = 4 * _ * T * (1 - T);
        f.push({
          lon: A,
          lat: w,
          height: M + b
        });
      }
      i.value = f;
    };
    return O(
      () => [n.start, n.end, n.arcHeight, n.segments],
      () => {
        u();
      },
      { deep: true, immediate: true }
    ), _e(() => {
      u();
    }), e({
      startAnimation: () => {
        if (a.value) {
          console.warn(
            "GeoFlyline is wrapped by GeoLineAnimation, please control animation through parent component"
          );
          return;
        }
        return r.value?.start();
      },
      stopAnimation: () => {
        if (a.value) {
          console.warn(
            "GeoFlyline is wrapped by GeoLineAnimation, please control animation through parent component"
          );
          return;
        }
        return r.value?.stop();
      },
      isAnimating: () => a.value ? false : r.value?.isAnimating() || false
    }), (h, d) => a.value ? (Z(), me(Zh, { key: 1 }, [
      n.type === "tube" ? (Z(), wt(rl, {
        key: 0,
        points: i.value,
        color: n.color,
        width: n.width,
        map: n.map,
        tubularSegments: n.tubularSegments,
        renderOrder: n.renderOrder,
        opacity: n.opacity,
        repeat: n.repeat,
        id: n.id,
        raycastActive: n.raycastActive,
        raycastMultiplier: n.raycastMultiplier,
        onClick: d[18] || (d[18] = (...p) => s("click", ...p)),
        onDoubleclick: d[19] || (d[19] = (...p) => s("doubleclick", ...p)),
        onContextmenu: d[20] || (d[20] = (...p) => s("contextmenu", ...p)),
        onPointerenter: d[21] || (d[21] = (...p) => s("pointerenter", ...p)),
        onPointerleave: d[22] || (d[22] = (...p) => s("pointerleave", ...p)),
        onPointerover: d[23] || (d[23] = (...p) => s("pointerover", ...p)),
        onPointerdown: d[24] || (d[24] = (...p) => s("pointerdown", ...p)),
        onPointerup: d[25] || (d[25] = (...p) => s("pointerup", ...p)),
        onWheel: d[26] || (d[26] = (...p) => s("wheel", ...p))
      }, null, 8, ["points", "color", "width", "map", "tubularSegments", "renderOrder", "opacity", "repeat", "id", "raycastActive", "raycastMultiplier"])) : (Z(), wt(ol, {
        key: 1,
        points: i.value,
        color: n.color,
        width: n.width,
        map: n.map,
        renderOrder: n.renderOrder,
        opacity: n.opacity,
        repeat: n.repeat,
        id: n.id,
        raycastActive: n.raycastActive,
        raycastMultiplier: n.raycastMultiplier,
        onClick: d[27] || (d[27] = (...p) => s("click", ...p)),
        onDoubleclick: d[28] || (d[28] = (...p) => s("doubleclick", ...p)),
        onContextmenu: d[29] || (d[29] = (...p) => s("contextmenu", ...p)),
        onPointerenter: d[30] || (d[30] = (...p) => s("pointerenter", ...p)),
        onPointerleave: d[31] || (d[31] = (...p) => s("pointerleave", ...p)),
        onPointerover: d[32] || (d[32] = (...p) => s("pointerover", ...p)),
        onPointerdown: d[33] || (d[33] = (...p) => s("pointerdown", ...p)),
        onPointerup: d[34] || (d[34] = (...p) => s("pointerup", ...p)),
        onWheel: d[35] || (d[35] = (...p) => s("wheel", ...p))
      }, null, 8, ["points", "color", "width", "map", "renderOrder", "opacity", "repeat", "id", "raycastActive", "raycastMultiplier"]))
    ], 64)) : (Z(), wt($d, {
      key: 0,
      ref_key: "animationRef",
      ref: r,
      texture: n.map,
      autoStart: n.autoStart,
      duration: n.duration,
      reverse: n.reverse
    }, {
      default: ni(() => [
        n.type === "tube" ? (Z(), wt(rl, {
          key: 0,
          points: i.value,
          color: n.color,
          width: n.width,
          map: n.map,
          tubularSegments: n.tubularSegments,
          renderOrder: n.renderOrder,
          opacity: n.opacity,
          repeat: n.repeat,
          id: n.id,
          raycastActive: n.raycastActive,
          raycastMultiplier: n.raycastMultiplier,
          onClick: d[0] || (d[0] = (...p) => s("click", ...p)),
          onDoubleclick: d[1] || (d[1] = (...p) => s("doubleclick", ...p)),
          onContextmenu: d[2] || (d[2] = (...p) => s("contextmenu", ...p)),
          onPointerenter: d[3] || (d[3] = (...p) => s("pointerenter", ...p)),
          onPointerleave: d[4] || (d[4] = (...p) => s("pointerleave", ...p)),
          onPointerover: d[5] || (d[5] = (...p) => s("pointerover", ...p)),
          onPointerdown: d[6] || (d[6] = (...p) => s("pointerdown", ...p)),
          onPointerup: d[7] || (d[7] = (...p) => s("pointerup", ...p)),
          onWheel: d[8] || (d[8] = (...p) => s("wheel", ...p))
        }, null, 8, ["points", "color", "width", "map", "tubularSegments", "renderOrder", "opacity", "repeat", "id", "raycastActive", "raycastMultiplier"])) : (Z(), wt(ol, {
          key: 1,
          points: i.value,
          color: n.color,
          width: n.width,
          map: n.map,
          renderOrder: n.renderOrder,
          opacity: n.opacity,
          repeat: n.repeat,
          id: n.id,
          raycastActive: n.raycastActive,
          raycastMultiplier: n.raycastMultiplier,
          onClick: d[9] || (d[9] = (...p) => s("click", ...p)),
          onDoubleclick: d[10] || (d[10] = (...p) => s("doubleclick", ...p)),
          onContextmenu: d[11] || (d[11] = (...p) => s("contextmenu", ...p)),
          onPointerenter: d[12] || (d[12] = (...p) => s("pointerenter", ...p)),
          onPointerleave: d[13] || (d[13] = (...p) => s("pointerleave", ...p)),
          onPointerover: d[14] || (d[14] = (...p) => s("pointerover", ...p)),
          onPointerdown: d[15] || (d[15] = (...p) => s("pointerdown", ...p)),
          onPointerup: d[16] || (d[16] = (...p) => s("pointerup", ...p)),
          onWheel: d[17] || (d[17] = (...p) => s("wheel", ...p))
        }, null, 8, ["points", "color", "width", "map", "renderOrder", "opacity", "repeat", "id", "raycastActive", "raycastMultiplier"]))
      ]),
      _: 1
    }, 8, ["texture", "autoStart", "duration", "reverse"]));
  }
}), jt = 11102230246251565e-32, Re = 134217729, Kd = (3 + 8 * jt) * jt;
function Pr(l15, e, t, n, s) {
  let i, r, o, a, c = e[0], u = n[0], h = 0, d = 0;
  u > c == u > -c ? (i = c, c = e[++h]) : (i = u, u = n[++d]);
  let p = 0;
  if (h < l15 && d < t)
    for (u > c == u > -c ? (r = c + i, o = i - (r - c), c = e[++h]) : (r = u + i, o = i - (r - u), u = n[++d]), i = r, o !== 0 && (s[p++] = o); h < l15 && d < t; )
      u > c == u > -c ? (r = i + c, a = r - i, o = i - (r - a) + (c - a), c = e[++h]) : (r = i + u, a = r - i, o = i - (r - a) + (u - a), u = n[++d]), i = r, o !== 0 && (s[p++] = o);
  for (; h < l15; )
    r = i + c, a = r - i, o = i - (r - a) + (c - a), c = e[++h], i = r, o !== 0 && (s[p++] = o);
  for (; d < t; )
    r = i + u, a = r - i, o = i - (r - a) + (u - a), u = n[++d], i = r, o !== 0 && (s[p++] = o);
  return (i !== 0 || p === 0) && (s[p++] = i), p;
}
function qd(l15, e) {
  let t = e[0];
  for (let n = 1; n < l15; n++) t += e[n];
  return t;
}
function li(l15) {
  return new Float64Array(l15);
}
const Xd = (3 + 16 * jt) * jt, Yd = (2 + 12 * jt) * jt, Zd = (9 + 64 * jt) * jt * jt, Bn = li(4), al = li(8), ll = li(12), cl = li(16), Ie = li(4);
function Qd(l15, e, t, n, s, i, r) {
  let o, a, c, u, h, d, p, m, f, g, _, y, v, x, T, A, w, M;
  const b = l15 - s, S = t - s, C = e - i, L = n - i;
  x = b * L, d = Re * b, p = d - (d - b), m = b - p, d = Re * L, f = d - (d - L), g = L - f, T = m * g - (x - p * f - m * f - p * g), A = C * S, d = Re * C, p = d - (d - C), m = C - p, d = Re * S, f = d - (d - S), g = S - f, w = m * g - (A - p * f - m * f - p * g), _ = T - w, h = T - _, Bn[0] = T - (_ + h) + (h - w), y = x + _, h = y - x, v = x - (y - h) + (_ - h), _ = v - A, h = v - _, Bn[1] = v - (_ + h) + (h - A), M = y + _, h = M - y, Bn[2] = y - (M - h) + (_ - h), Bn[3] = M;
  let R = qd(4, Bn), I = Yd * r;
  if (R >= I || -R >= I || (h = l15 - b, o = l15 - (b + h) + (h - s), h = t - S, c = t - (S + h) + (h - s), h = e - C, a = e - (C + h) + (h - i), h = n - L, u = n - (L + h) + (h - i), o === 0 && a === 0 && c === 0 && u === 0) || (I = Zd * r + Kd * Math.abs(R), R += b * u + L * o - (C * c + S * a), R >= I || -R >= I)) return R;
  x = o * L, d = Re * o, p = d - (d - o), m = o - p, d = Re * L, f = d - (d - L), g = L - f, T = m * g - (x - p * f - m * f - p * g), A = a * S, d = Re * a, p = d - (d - a), m = a - p, d = Re * S, f = d - (d - S), g = S - f, w = m * g - (A - p * f - m * f - p * g), _ = T - w, h = T - _, Ie[0] = T - (_ + h) + (h - w), y = x + _, h = y - x, v = x - (y - h) + (_ - h), _ = v - A, h = v - _, Ie[1] = v - (_ + h) + (h - A), M = y + _, h = M - y, Ie[2] = y - (M - h) + (_ - h), Ie[3] = M;
  const F = Pr(4, Bn, 4, Ie, al);
  x = b * u, d = Re * b, p = d - (d - b), m = b - p, d = Re * u, f = d - (d - u), g = u - f, T = m * g - (x - p * f - m * f - p * g), A = C * c, d = Re * C, p = d - (d - C), m = C - p, d = Re * c, f = d - (d - c), g = c - f, w = m * g - (A - p * f - m * f - p * g), _ = T - w, h = T - _, Ie[0] = T - (_ + h) + (h - w), y = x + _, h = y - x, v = x - (y - h) + (_ - h), _ = v - A, h = v - _, Ie[1] = v - (_ + h) + (h - A), M = y + _, h = M - y, Ie[2] = y - (M - h) + (_ - h), Ie[3] = M;
  const D = Pr(F, al, 4, Ie, ll);
  x = o * u, d = Re * o, p = d - (d - o), m = o - p, d = Re * u, f = d - (d - u), g = u - f, T = m * g - (x - p * f - m * f - p * g), A = a * c, d = Re * a, p = d - (d - a), m = a - p, d = Re * c, f = d - (d - c), g = c - f, w = m * g - (A - p * f - m * f - p * g), _ = T - w, h = T - _, Ie[0] = T - (_ + h) + (h - w), y = x + _, h = y - x, v = x - (y - h) + (_ - h), _ = v - A, h = v - _, Ie[1] = v - (_ + h) + (h - A), M = y + _, h = M - y, Ie[2] = y - (M - h) + (_ - h), Ie[3] = M;
  const U = Pr(D, ll, 4, Ie, cl);
  return cl[U - 1];
}
function mi(l15, e, t, n, s, i) {
  const r = (e - i) * (t - s), o = (l15 - s) * (n - i), a = r - o, c = Math.abs(r + o);
  return Math.abs(a) >= Xd * c ? a : -Qd(l15, e, t, n, s, i, c);
}
const ul = Math.pow(2, -52), gi = new Uint32Array(512);
class ga {
  static from(e, t = sp, n = ip) {
    const s = e.length, i = new Float64Array(s * 2);
    for (let r = 0; r < s; r++) {
      const o = e[r];
      i[2 * r] = t(o), i[2 * r + 1] = n(o);
    }
    return new ga(i);
  }
  constructor(e) {
    const t = e.length >> 1;
    if (t > 0 && typeof e[0] != "number") throw new Error("Expected coords to contain numbers.");
    this.coords = e;
    const n = Math.max(2 * t - 5, 0);
    this._triangles = new Uint32Array(n * 3), this._halfedges = new Int32Array(n * 3), this._hashSize = Math.ceil(Math.sqrt(t)), this._hullPrev = new Uint32Array(t), this._hullNext = new Uint32Array(t), this._hullTri = new Uint32Array(t), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(t), this._dists = new Float64Array(t), this.update();
  }
  update() {
    const { coords: e, _hullPrev: t, _hullNext: n, _hullTri: s, _hullHash: i } = this, r = e.length >> 1;
    let o = 1 / 0, a = 1 / 0, c = -1 / 0, u = -1 / 0;
    for (let b = 0; b < r; b++) {
      const S = e[2 * b], C = e[2 * b + 1];
      S < o && (o = S), C < a && (a = C), S > c && (c = S), C > u && (u = C), this._ids[b] = b;
    }
    const h = (o + c) / 2, d = (a + u) / 2;
    let p, m, f;
    for (let b = 0, S = 1 / 0; b < r; b++) {
      const C = Er(h, d, e[2 * b], e[2 * b + 1]);
      C < S && (p = b, S = C);
    }
    const g = e[2 * p], _ = e[2 * p + 1];
    for (let b = 0, S = 1 / 0; b < r; b++) {
      if (b === p) continue;
      const C = Er(g, _, e[2 * b], e[2 * b + 1]);
      C < S && C > 0 && (m = b, S = C);
    }
    let y = e[2 * m], v = e[2 * m + 1], x = 1 / 0;
    for (let b = 0; b < r; b++) {
      if (b === p || b === m) continue;
      const S = tp(g, _, y, v, e[2 * b], e[2 * b + 1]);
      S < x && (f = b, x = S);
    }
    let T = e[2 * f], A = e[2 * f + 1];
    if (x === 1 / 0) {
      for (let C = 0; C < r; C++)
        this._dists[C] = e[2 * C] - e[0] || e[2 * C + 1] - e[1];
      qn(this._ids, this._dists, 0, r - 1);
      const b = new Uint32Array(r);
      let S = 0;
      for (let C = 0, L = -1 / 0; C < r; C++) {
        const R = this._ids[C], I = this._dists[R];
        I > L && (b[S++] = R, L = I);
      }
      this.hull = b.subarray(0, S), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
      return;
    }
    if (mi(g, _, y, v, T, A) < 0) {
      const b = m, S = y, C = v;
      m = f, y = T, v = A, f = b, T = S, A = C;
    }
    const w = np(g, _, y, v, T, A);
    this._cx = w.x, this._cy = w.y;
    for (let b = 0; b < r; b++)
      this._dists[b] = Er(e[2 * b], e[2 * b + 1], w.x, w.y);
    qn(this._ids, this._dists, 0, r - 1), this._hullStart = p;
    let M = 3;
    n[p] = t[f] = m, n[m] = t[p] = f, n[f] = t[m] = p, s[p] = 0, s[m] = 1, s[f] = 2, i.fill(-1), i[this._hashKey(g, _)] = p, i[this._hashKey(y, v)] = m, i[this._hashKey(T, A)] = f, this.trianglesLen = 0, this._addTriangle(p, m, f, -1, -1, -1);
    for (let b = 0, S, C; b < this._ids.length; b++) {
      const L = this._ids[b], R = e[2 * L], I = e[2 * L + 1];
      if (b > 0 && Math.abs(R - S) <= ul && Math.abs(I - C) <= ul || (S = R, C = I, L === p || L === m || L === f)) continue;
      let F = 0;
      for (let Q = 0, K = this._hashKey(R, I); Q < this._hashSize && (F = i[(K + Q) % this._hashSize], !(F !== -1 && F !== n[F])); Q++)
        ;
      F = t[F];
      let D = F, U;
      for (; U = n[D], mi(R, I, e[2 * D], e[2 * D + 1], e[2 * U], e[2 * U + 1]) >= 0; )
        if (D = U, D === F) {
          D = -1;
          break;
        }
      if (D === -1) continue;
      let N = this._addTriangle(D, L, n[D], -1, -1, s[D]);
      s[L] = this._legalize(N + 2), s[D] = N, M++;
      let G = n[D];
      for (; U = n[G], mi(R, I, e[2 * G], e[2 * G + 1], e[2 * U], e[2 * U + 1]) < 0; )
        N = this._addTriangle(G, L, U, s[L], -1, s[G]), s[L] = this._legalize(N + 2), n[G] = G, M--, G = U;
      if (D === F)
        for (; U = t[D], mi(R, I, e[2 * U], e[2 * U + 1], e[2 * D], e[2 * D + 1]) < 0; )
          N = this._addTriangle(U, L, D, -1, s[D], s[U]), this._legalize(N + 2), s[U] = N, n[D] = D, M--, D = U;
      this._hullStart = t[L] = D, n[D] = t[G] = L, n[L] = G, i[this._hashKey(R, I)] = L, i[this._hashKey(e[2 * D], e[2 * D + 1])] = D;
    }
    this.hull = new Uint32Array(M);
    for (let b = 0, S = this._hullStart; b < M; b++)
      this.hull[b] = S, S = n[S];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(e, t) {
    return Math.floor(Jd(e - this._cx, t - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(e) {
    const { _triangles: t, _halfedges: n, coords: s } = this;
    let i = 0, r = 0;
    for (; ; ) {
      const o = n[e], a = e - e % 3;
      if (r = a + (e + 2) % 3, o === -1) {
        if (i === 0) break;
        e = gi[--i];
        continue;
      }
      const c = o - o % 3, u = a + (e + 1) % 3, h = c + (o + 2) % 3, d = t[r], p = t[e], m = t[u], f = t[h];
      if (ep(
        s[2 * d],
        s[2 * d + 1],
        s[2 * p],
        s[2 * p + 1],
        s[2 * m],
        s[2 * m + 1],
        s[2 * f],
        s[2 * f + 1]
      )) {
        t[e] = f, t[o] = d;
        const _ = n[h];
        if (_ === -1) {
          let v = this._hullStart;
          do {
            if (this._hullTri[v] === h) {
              this._hullTri[v] = e;
              break;
            }
            v = this._hullPrev[v];
          } while (v !== this._hullStart);
        }
        this._link(e, _), this._link(o, n[r]), this._link(r, h);
        const y = c + (o + 1) % 3;
        i < gi.length && (gi[i++] = y);
      } else {
        if (i === 0) break;
        e = gi[--i];
      }
    }
    return r;
  }
  _link(e, t) {
    this._halfedges[e] = t, t !== -1 && (this._halfedges[t] = e);
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(e, t, n, s, i, r) {
    const o = this.trianglesLen;
    return this._triangles[o] = e, this._triangles[o + 1] = t, this._triangles[o + 2] = n, this._link(o, s), this._link(o + 1, i), this._link(o + 2, r), this.trianglesLen += 3, o;
  }
}
function Jd(l15, e) {
  const t = l15 / (Math.abs(l15) + Math.abs(e));
  return (e > 0 ? 3 - t : 1 + t) / 4;
}
function Er(l15, e, t, n) {
  const s = l15 - t, i = e - n;
  return s * s + i * i;
}
function ep(l15, e, t, n, s, i, r, o) {
  const a = l15 - r, c = e - o, u = t - r, h = n - o, d = s - r, p = i - o, m = a * a + c * c, f = u * u + h * h, g = d * d + p * p;
  return a * (h * g - f * p) - c * (u * g - f * d) + m * (u * p - h * d) < 0;
}
function tp(l15, e, t, n, s, i) {
  const r = t - l15, o = n - e, a = s - l15, c = i - e, u = r * r + o * o, h = a * a + c * c, d = 0.5 / (r * c - o * a), p = (c * u - o * h) * d, m = (r * h - a * u) * d;
  return p * p + m * m;
}
function np(l15, e, t, n, s, i) {
  const r = t - l15, o = n - e, a = s - l15, c = i - e, u = r * r + o * o, h = a * a + c * c, d = 0.5 / (r * c - o * a), p = l15 + (c * u - o * h) * d, m = e + (r * h - a * u) * d;
  return { x: p, y: m };
}
function qn(l15, e, t, n) {
  if (n - t <= 20)
    for (let s = t + 1; s <= n; s++) {
      const i = l15[s], r = e[i];
      let o = s - 1;
      for (; o >= t && e[l15[o]] > r; ) l15[o + 1] = l15[o--];
      l15[o + 1] = i;
    }
  else {
    const s = t + n >> 1;
    let i = t + 1, r = n;
    Ms(l15, s, i), e[l15[t]] > e[l15[n]] && Ms(l15, t, n), e[l15[i]] > e[l15[n]] && Ms(l15, i, n), e[l15[t]] > e[l15[i]] && Ms(l15, t, i);
    const o = l15[i], a = e[o];
    for (; ; ) {
      do
        i++;
      while (e[l15[i]] < a);
      do
        r--;
      while (e[l15[r]] > a);
      if (r < i) break;
      Ms(l15, i, r);
    }
    l15[t + 1] = l15[r], l15[r] = o, n - i + 1 >= r - t ? (qn(l15, e, i, n), qn(l15, e, t, r - 1)) : (qn(l15, e, t, r - 1), qn(l15, e, i, n));
  }
}
function Ms(l15, e, t) {
  const n = l15[e];
  l15[e] = l15[t], l15[t] = n;
}
function sp(l15) {
  return l15[0];
}
function ip(l15) {
  return l15[1];
}
const Hs = (l15, e) => {
  let t = false;
  const n = l15[0], s = l15[1];
  let i = e.length - 1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r][0], a = e[r][1], c = e[i][0], u = e[i][1];
    a > s != u > s && n < (c - o) * (s - a) / (u - a) + o && (t = !t), i = r;
  }
  return t;
}, Do = (l15, e) => {
  for (const t of e)
    if (Hs(l15, t))
      return true;
  return false;
}, Yi = (l15) => {
  let e = 0;
  for (let t = 0, n = l15.length; t < n; t++) {
    const s = (t + 1) % n;
    e += l15[t][0] * l15[s][1], e -= l15[s][0] * l15[t][1];
  }
  return e < 0;
}, Zi = (l15) => {
  const t = 10000000000000001e-36;
  let n = l15[0];
  for (let s = 1; s <= l15.length; s++) {
    const i = s % l15.length, r = l15[i], o = r[0] - n[0], a = r[1] - n[1], c = o * o + a * a, u = Math.max(
      Math.abs(r[0]),
      Math.abs(r[1]),
      Math.abs(n[0]),
      Math.abs(n[1])
    ), h = t * u * u;
    if (c <= h) {
      l15.splice(i, 1), s--;
      continue;
    }
    n = r;
  }
}, Qi = (l15, e) => {
  if (e <= 1)
    return [...l15];
  const t = [];
  let n = 0;
  for (let i = 0; i < l15.length; i++) {
    const r = l15[i], o = l15[(i + 1) % l15.length], a = o[0] - r[0], c = o[1] - r[1];
    n += Math.sqrt(a * a + c * c);
  }
  const s = n / (e * 50);
  for (let i = 0; i < l15.length; i++) {
    const r = l15[i], o = l15[(i + 1) % l15.length];
    t.push(r);
    const a = o[0] - r[0], c = o[1] - r[1], u = Math.sqrt(a * a + c * c), h = Math.max(1, Math.ceil(u / s));
    for (let d = 1; d < h; d++) {
      const p = d / h, m = [
        r[0] + p * a,
        r[1] + p * c
      ];
      t.push(m);
    }
  }
  return t;
}, hl = (l15, e, t = 1e-10) => {
  const [n, s] = l15;
  for (let i = 0; i < e.length; i++) {
    const r = (i + 1) % e.length, [o, a] = e[i], [c, u] = e[r], h = (s - a) * (c - o) - (n - o) * (u - a);
    if (Math.abs(h) < t) {
      const d = (n - o) * (c - o) + (s - a) * (u - a), p = (c - o) * (c - o) + (u - a) * (u - a);
      if (d >= 0 && d <= p)
        return true;
    }
  }
  return false;
}, rp = (l15, e, t, n) => {
  const s = l15[0], i = l15[1], r = e[0], o = e[1], a = t[0], c = t[1], u = n[0], h = n[1], d = (s - r) * (c - h) - (i - o) * (a - u);
  if (Math.abs(d) < 1e-10) return false;
  const p = ((s - a) * (c - h) - (i - c) * (a - u)) / d, m = -((s - r) * (i - c) - (i - o) * (s - a)) / d;
  return p >= 0 && p <= 1 && m >= 0 && m <= 1;
}, op = (l15, e, t) => {
  for (let s = 0; s < t.length; s++) {
    const i = (s + 1) % t.length, r = t[s], o = t[i], a = Math.abs(l15[0] - r[0]) < 1e-10 && Math.abs(l15[1] - r[1]) < 1e-10, c = Math.abs(l15[0] - o[0]) < 1e-10 && Math.abs(l15[1] - o[1]) < 1e-10, u = Math.abs(e[0] - r[0]) < 1e-10 && Math.abs(e[1] - r[1]) < 1e-10, h = Math.abs(e[0] - o[0]) < 1e-10 && Math.abs(e[1] - o[1]) < 1e-10;
    if (!(a || c || u || h) && rp(l15, e, r, o))
      return true;
  }
  return false;
}, ap = (l15, e, t, n, s) => {
  const i = [(l15[0] + e[0] + t[0]) / 3, (l15[1] + e[1] + t[1]) / 3];
  if (!Hs(i, n) || Do(i, s))
    return false;
  const r = [
    [l15, e],
    [e, t],
    [t, l15]
  ];
  for (const c of s)
    for (const u of r)
      if (op(u[0], u[1], c))
        return false;
  const o = [l15, e, t];
  for (const c of o)
    if (!Hs(c, n) || Do(c, s)) {
      let u = false;
      for (const h of s)
        if (hl(c, h)) {
          u = true;
          break;
        }
      if (!u && !hl(c, n))
        return false;
    }
  return !s.some(
    (c) => o.every((u) => Hs(u, c))
  );
}, du = (l15, e, t) => {
  const n = [...l15];
  for (const o of e)
    n.push(...o);
  n.push(...t);
  const i = ga.from(n).triangles, r = [];
  for (let o = 0; o < i.length; o += 3) {
    const a = n[i[o]], c = n[i[o + 1]], u = n[i[o + 2]];
    ap(a, c, u, l15, e) && r.push(a, c, u);
  }
  return r;
}, pu = (l15, e, t) => {
  const n = [];
  if (t <= 1)
    return n;
  const s = l15.map((m) => m[0]), i = l15.map((m) => m[1]), r = Math.min.apply(null, s), o = Math.max.apply(null, s), a = Math.min.apply(null, i), c = Math.max.apply(null, i), u = o - r, h = c - a, d = u / (t * 10), p = h / (t * 10);
  for (let m = r + d; m < o; m += d)
    for (let f = a + p; f < c; f += p) {
      const g = [m, f];
      Hs(g, l15) && !Do(g, e) && n.push(g);
    }
  return n;
}, lp = ["position"], cp = ["object"], ry = /* @__PURE__ */ ie({
  __name: "GeoPolygon",
  props: {
    geometry: {},
    subdivisions: { default: 2 },
    height: { default: 30 },
    renderOrder: { default: 1 },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = xe(new P()), r = Fn(n, t, t.raycastActive), o = (p) => p.map(([m, f, g = t.height]) => ({
      lon: m,
      lat: f,
      height: g
    })), a = (p) => {
      let m;
      if (p.type === "Polygon")
        m = [p.coordinates];
      else if (p.type === "MultiPolygon")
        m = p.coordinates;
      else
        throw new Error("不支持的几何类型，仅支持Polygon和MultiPolygon");
      const f = [], g = [];
      return m.forEach((_) => {
        if (_.length === 0) return;
        const y = o(_[0]);
        f.push(y);
        const v = [];
        for (let x = 1; x < _.length; x++) {
          const T = o(_[x]);
          v.push(T);
        }
        g.push(v);
      }), { contours: f, holes: g };
    }, c = (p) => {
      const { contours: m, holes: f } = a(t.geometry);
      if (m.length === 0)
        throw new Error("没有有效的多边形轮廓");
      const g = [], _ = [];
      m.forEach((v, x) => {
        if (v.length < 3) {
          console.warn(`多边形${x}的顶点数少于3，跳过`);
          return;
        }
        const T = f[x] || [];
        let A = v.map((K) => [K.lon, K.lat]), w = T.map(
          (K) => K.map((oe) => [oe.lon, oe.lat])
        );
        !Yi(A) && A.reverse();
        for (let K = 0; K < w.length; K++) {
          const oe = w[K];
          Yi(oe) && (w[K] = oe.reverse());
        }
        Zi(A), w.forEach((K) => Zi(K));
        const b = Math.max(1, t.subdivisions);
        A = Qi(A, b), w = w.map((K) => Qi(K, b));
        const S = pu(A, w, b), C = du(A, w, S), L = t.height ?? 0, R = C.map((K) => K[0]), I = C.map((K) => K[1]), F = Math.min.apply(null, R), D = Math.max.apply(null, R), U = Math.min.apply(null, I), N = Math.max.apply(null, I), G = D - F, Q = N - U;
        C.forEach(([K, oe]) => {
          const Ct = Pe(K, oe, L);
          g.push(
            Ct.x - p.x,
            Ct.y - p.y,
            Ct.z - p.z
          );
          const X = G > 0 ? (K - F) / G : 0, Te = Q > 0 ? 1 - (oe - U) / Q : 0;
          _.push(X, Te);
        });
      });
      const y = new $e();
      return y.setAttribute("position", new ht(g, 3)), y.setAttribute("uv", new ht(_, 2)), y.computeVertexNormals(), y;
    }, u = () => {
      try {
        const { contours: p } = a(t.geometry);
        if (p.length === 0 || p[0].length < 3) {
          console.warn("多边形至少需要3个点");
          return;
        }
        const m = d(t.geometry);
        i.value = m;
        const f = c(m);
        s.value = new et(f), s.value.renderOrder = t.renderOrder, t.raycastActive && Ht(s.value, t.raycastMultiplier);
      } catch (p) {
        console.error("创建多边形失败:", p);
      }
    }, h = () => {
      if (s.value)
        try {
          const { contours: p } = a(t.geometry);
          if (p.length === 0 || p[0].length < 3)
            return;
          const m = s.value.geometry, f = d(t.geometry);
          i.value = f;
          const g = c(f);
          s.value.geometry = g, m.dispose();
        } catch (p) {
          console.error("更新几何体失败:", p);
        }
    };
    O(
      () => t.geometry,
      () => {
        h();
      },
      { deep: true }
    ), O(
      () => t.subdivisions,
      () => {
        h();
      }
    ), O(
      () => t.height,
      () => {
        h();
      }
    );
    const d = (p) => {
      const { contours: m } = a(p);
      if (m.length === 0) return new P();
      let f = 0, g = 0, _ = 0;
      if (m.forEach((T) => {
        T.forEach((A) => {
          f += A.lon, g += A.lat, _++;
        });
      }), _ === 0) return new P();
      const y = f / _, v = g / _, x = t.height ?? 0;
      return new P(...Pe(y, v, x));
    };
    return _e(() => {
      u();
    }), Le(() => {
      s.value && s.value.geometry?.dispose?.();
    }), (p, m) => s.value ? (Z(), me("TresGroup", {
      key: 0,
      position: i.value
    }, [
      Dn("primitive", {
        object: s.value,
        onClick: m[0] || (m[0] = //@ts-ignore
        (...f) => E(r).handleClick && E(r).handleClick(...f)),
        onDoubleclick: m[1] || (m[1] = //@ts-ignore
        (...f) => E(r).handleDoubleClick && E(r).handleDoubleClick(...f)),
        onContextmenu: m[2] || (m[2] = //@ts-ignore
        (...f) => E(r).handleContextMenu && E(r).handleContextMenu(...f)),
        onPointerenter: m[3] || (m[3] = //@ts-ignore
        (...f) => E(r).handlePointerEnter && E(r).handlePointerEnter(...f)),
        onPointerleave: m[4] || (m[4] = //@ts-ignore
        (...f) => E(r).handlePointerLeave && E(r).handlePointerLeave(...f)),
        onPointerover: m[5] || (m[5] = //@ts-ignore
        (...f) => E(r).handlePointerOver && E(r).handlePointerOver(...f)),
        onPointerdown: m[6] || (m[6] = //@ts-ignore
        (...f) => E(r).handlePointerDown && E(r).handlePointerDown(...f)),
        onPointerup: m[7] || (m[7] = //@ts-ignore
        (...f) => E(r).handlePointerUp && E(r).handlePointerUp(...f)),
        onWheel: m[8] || (m[8] = //@ts-ignore
        (...f) => E(r).handleWheel && E(r).handleWheel(...f))
      }, [
        Je(p.$slots, "default")
      ], 40, cp)
    ], 8, lp)) : Fe("", true);
  }
}), up = ["position"], hp = ["object"], oy = /* @__PURE__ */ ie({
  __name: "GeoWall",
  props: {
    geometry: {},
    height: { default: 100 },
    baseHeight: { default: 0 },
    renderOrder: { default: 1 },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = xe(new P()), r = Fn(n, t, t.raycastActive), o = (p) => p.map(([m, f, g = 0]) => ({
      lon: m,
      lat: f,
      height: g
    })), a = (p) => {
      const m = [];
      switch (p.type) {
        case "LineString":
          m.push(o(p.coordinates));
          break;
        case "MultiLineString":
          p.coordinates.forEach((f) => {
            m.push(o(f));
          });
          break;
        case "Polygon":
          p.coordinates.forEach((f) => {
            m.push(o(f));
          });
          break;
        case "MultiPolygon":
          p.coordinates.forEach((f) => {
            f.forEach((g) => {
              m.push(o(g));
            });
          });
          break;
        default:
          throw new Error(`不支持的几何类型: ${p.type}`);
      }
      return m;
    }, c = (p, m) => {
      if (p.length === 0)
        throw new Error("没有有效的线段数据");
      const f = [], g = [], _ = [];
      let y = 0;
      p.forEach((x) => {
        if (x.length < 2) {
          console.warn("线段至少需要2个点，跳过");
          return;
        }
        const T = [...x], A = [], w = [];
        T.forEach((C) => {
          const L = Pe(C.lon, C.lat, t.baseHeight);
          A.push(new P(
            L.x - m.x,
            L.y - m.y,
            L.z - m.z
          ));
          const R = Pe(C.lon, C.lat, t.baseHeight + t.height);
          w.push(new P(
            R.x - m.x,
            R.y - m.y,
            R.z - m.z
          ));
        });
        const M = [0];
        let b = 0;
        for (let C = 1; C < A.length; C++) {
          const L = A[C - 1].distanceTo(A[C]);
          b += L, M.push(b);
        }
        A.forEach((C, L) => {
          f.push(C.x, C.y, C.z);
          const R = b > 0 ? M[L] / b : 0;
          _.push(R, 0);
        }), w.forEach((C, L) => {
          f.push(C.x, C.y, C.z);
          const R = b > 0 ? M[L] / b : 0;
          _.push(R, 1);
        });
        const S = A.length;
        for (let C = 0; C < S - 1; C++) {
          const L = y + C, R = y + C + 1, I = y + C + S, F = y + C + 1 + S;
          g.push(L, R, I), g.push(R, F, I);
        }
        y += S * 2;
      });
      const v = new $e();
      return v.setAttribute("position", new ht(f, 3)), v.setAttribute("uv", new ht(_, 2)), v.setIndex(g), v.computeVertexNormals(), v;
    }, u = () => {
      try {
        const p = a(t.geometry);
        if (p.length === 0) {
          console.warn("没有有效的线段数据");
          return;
        }
        const m = d(t.geometry);
        i.value = m;
        const f = c(p, m);
        s.value = new et(f), s.value.renderOrder = t.renderOrder, t.raycastActive && Ht(s.value, t.raycastMultiplier);
      } catch (p) {
        console.error("创建墙体失败:", p);
      }
    }, h = () => {
      if (s.value)
        try {
          const p = a(t.geometry);
          if (p.length === 0) {
            console.warn("没有有效的线段数据");
            return;
          }
          const m = s.value.geometry, f = d(t.geometry);
          i.value = f;
          const g = c(p, f);
          s.value.geometry = g, m.dispose();
        } catch (p) {
          console.error("更新几何体失败:", p);
        }
    };
    O(
      () => t.geometry,
      () => {
        h();
      },
      { deep: true }
    ), O(
      () => t.height,
      () => {
        h();
      }
    ), O(
      () => t.baseHeight,
      () => {
        h();
      }
    );
    const d = (p) => {
      const m = a(p);
      if (m.length === 0) return new P();
      let f = 0, g = 0, _ = 0;
      if (m.forEach((T) => {
        T.forEach((A) => {
          f += A.lon, g += A.lat, _++;
        });
      }), _ === 0) return new P();
      const y = f / _, v = g / _, x = t.baseHeight + t.height / 2;
      return new P(...Pe(y, v, x));
    };
    return _e(() => {
      u();
    }), Le(() => {
      s.value && s.value.geometry.dispose();
    }), (p, m) => s.value ? (Z(), me("TresGroup", {
      key: 0,
      position: i.value
    }, [
      Dn("primitive", {
        object: s.value,
        onClick: m[0] || (m[0] = //@ts-ignore
        (...f) => E(r).handleClick && E(r).handleClick(...f)),
        onDoubleclick: m[1] || (m[1] = //@ts-ignore
        (...f) => E(r).handleDoubleClick && E(r).handleDoubleClick(...f)),
        onContextmenu: m[2] || (m[2] = //@ts-ignore
        (...f) => E(r).handleContextMenu && E(r).handleContextMenu(...f)),
        onPointerenter: m[3] || (m[3] = //@ts-ignore
        (...f) => E(r).handlePointerEnter && E(r).handlePointerEnter(...f)),
        onPointerleave: m[4] || (m[4] = //@ts-ignore
        (...f) => E(r).handlePointerLeave && E(r).handlePointerLeave(...f)),
        onPointerover: m[5] || (m[5] = //@ts-ignore
        (...f) => E(r).handlePointerOver && E(r).handlePointerOver(...f)),
        onPointerdown: m[6] || (m[6] = //@ts-ignore
        (...f) => E(r).handlePointerDown && E(r).handlePointerDown(...f)),
        onPointerup: m[7] || (m[7] = //@ts-ignore
        (...f) => E(r).handlePointerUp && E(r).handlePointerUp(...f)),
        onWheel: m[8] || (m[8] = //@ts-ignore
        (...f) => E(r).handleWheel && E(r).handleWheel(...f))
      }, [
        Je(p.$slots, "default")
      ], 40, hp)
    ], 8, up)) : Fe("", true);
  }
}), dp = ["position"], pp = ["object"], fp = ["object"], mp = ["object"], ay = /* @__PURE__ */ ie({
  __name: "GeoBuilding",
  props: {
    geometry: {},
    subdivisions: { default: 2 },
    height: { default: 100 },
    baseHeight: { default: 0 },
    showTop: { type: Boolean, default: true },
    showBottom: { type: Boolean, default: false },
    showWalls: { type: Boolean, default: true },
    renderOrder: { default: 1 },
    id: {},
    raycastActive: { type: Boolean, default: true },
    raycastMultiplier: { default: 1 }
  },
  emits: ["click", "doubleclick", "contextmenu", "pointerenter", "pointerleave", "pointerover", "pointerdown", "pointerup", "wheel"],
  setup(l15, { emit: e }) {
    const t = l15, n = e, s = ce(), i = ce(), r = ce(), o = xe(new P()), a = Fn(n, t, t.raycastActive), c = (g) => g.map(([_, y, v = t.baseHeight]) => ({
      lon: _,
      lat: y,
      height: v
    })), u = (g) => {
      let _;
      if (g.type === "Polygon")
        _ = [g.coordinates];
      else if (g.type === "MultiPolygon")
        _ = g.coordinates;
      else
        throw new Error("GeoBuilding 只支持 Polygon 和 MultiPolygon 类型");
      const y = [], v = [];
      return _.forEach((x) => {
        if (x.length === 0) return;
        const T = c(x[0]);
        y.push(T);
        const A = [];
        for (let w = 1; w < x.length; w++) {
          const M = c(x[w]);
          A.push(M);
        }
        v.push(A);
      }), { contours: y, holes: v };
    }, h = (g, _) => {
      const { contours: y, holes: v } = u(t.geometry);
      if (y.length === 0)
        throw new Error("没有有效的多边形轮廓");
      const x = [], T = [];
      y.forEach((w, M) => {
        if (w.length < 3) {
          console.warn(`多边形${M}的顶点数少于3，跳过`);
          return;
        }
        const b = v[M] || [];
        let S = w.map((X) => [X.lon, X.lat]), C = b.map(
          (X) => X.map((Te) => [Te.lon, Te.lat])
        );
        !Yi(S) && S.reverse();
        for (let X = 0; X < C.length; X++) {
          const Te = C[X];
          Yi(Te) && (C[X] = Te.reverse());
        }
        Zi(S), C.forEach((X) => Zi(X));
        const R = Math.min(Math.max(1, t.subdivisions), 5);
        S = Qi(S, R), C = C.map((X) => Qi(X, R));
        const I = pu(S, C, R), F = du(S, C, I);
        F.length > 1e4 && console.warn(
          `多边形${M}顶点数过多(${F.length})，建议减少subdivisions`
        );
        const D = F.map((X) => X[0]), U = F.map((X) => X[1]), N = Math.min.apply(null, D), G = Math.max.apply(null, D), Q = Math.min.apply(null, U), K = Math.max.apply(null, U), oe = G - N, Ct = K - Q;
        F.forEach(([X, Te]) => {
          const Tr = Pe(X, Te, t.baseHeight + g);
          x.push(
            Tr.x - _.x,
            Tr.y - _.y,
            Tr.z - _.z
          );
          const Kh = oe > 0 ? (X - N) / oe : 0, qh = Ct > 0 ? 1 - (Te - Q) / Ct : 0;
          T.push(Kh, qh);
        });
      });
      const A = new $e();
      return A.setAttribute("position", new ht(x, 3)), A.setAttribute("uv", new ht(T, 2)), A.computeVertexNormals(), A;
    }, d = (g) => {
      const { contours: _, holes: y } = u(t.geometry);
      if (_.length === 0)
        throw new Error("没有有效的多边形轮廓");
      const v = [], x = [], T = [];
      let A = 0;
      _.forEach((M, b) => {
        const S = y[b] || [], C = (L) => {
          if (L.length < 3) return;
          const R = [], I = [];
          L.forEach((N) => {
            const G = Pe(N.lon, N.lat, t.baseHeight);
            R.push(
              new P(
                G.x - g.x,
                G.y - g.y,
                G.z - g.z
              )
            );
            const Q = Pe(N.lon, N.lat, t.baseHeight + t.height);
            I.push(
              new P(
                Q.x - g.x,
                Q.y - g.y,
                Q.z - g.z
              )
            );
          });
          const F = [0];
          let D = 0;
          for (let N = 1; N < R.length; N++) {
            const G = R[N - 1].distanceTo(R[N]);
            D += G, F.push(D);
          }
          R.forEach((N, G) => {
            v.push(N.x, N.y, N.z);
            const Q = D > 0 ? F[G] / D : 0;
            T.push(Q, 0);
          }), I.forEach((N, G) => {
            v.push(N.x, N.y, N.z);
            const Q = D > 0 ? F[G] / D : 0;
            T.push(Q, 1);
          });
          const U = R.length;
          for (let N = 0; N < U - 1; N++) {
            const G = A + N, Q = A + N + 1, K = A + N + U, oe = A + N + 1 + U;
            x.push(G, Q, K), x.push(Q, oe, K);
          }
          A += U * 2;
        };
        C(M), S.forEach((L) => {
          C(L);
        });
      });
      const w = new $e();
      return w.setAttribute("position", new ht(v, 3)), w.setAttribute("uv", new ht(T, 2)), w.setIndex(x), w.computeVertexNormals(), w;
    }, p = () => {
      try {
        const { contours: g } = u(t.geometry);
        if (g.length === 0 || g[0].length < 3) {
          console.warn("多边形至少需要3个点");
          return;
        }
        const _ = f(t.geometry);
        if (o.value = _, t.showBottom) {
          const y = h(0, _);
          i.value = new et(y), i.value.renderOrder = t.renderOrder, t.raycastActive && Ht(i.value, t.raycastMultiplier);
        }
        if (t.showTop) {
          const y = h(t.height, _);
          s.value = new et(y), s.value.renderOrder = t.renderOrder, t.raycastActive && Ht(s.value, t.raycastMultiplier);
        }
        if (t.showWalls) {
          const y = d(_);
          r.value = new et(y), r.value.renderOrder = t.renderOrder, t.raycastActive && Ht(r.value, t.raycastMultiplier);
        }
      } catch (g) {
        console.error("创建建筑失败:", g);
      }
    }, m = () => {
      s.value && s.value.geometry.dispose(), i.value && i.value.geometry.dispose(), r.value && r.value.geometry.dispose(), p();
    };
    O(
      () => t.geometry,
      () => {
        m();
      },
      { deep: true }
    ), O(
      () => [
        t.subdivisions,
        t.height,
        t.baseHeight,
        t.showTop,
        t.showBottom,
        t.showWalls
      ],
      () => {
        m();
      }
    );
    const f = (g) => {
      const { contours: _ } = u(g);
      if (_.length === 0) return new P();
      let y = 0, v = 0, x = 0;
      if (_.forEach((M) => {
        M.forEach((b) => {
          y += b.lon, v += b.lat, x++;
        });
      }), x === 0) return new P();
      const T = y / x, A = v / x, w = t.baseHeight + t.height / 2;
      return new P(...Pe(T, A, w));
    };
    return _e(() => {
      p();
    }), Le(() => {
      s.value && s.value.geometry.dispose(), i.value && i.value.geometry.dispose(), r.value && r.value.geometry.dispose();
    }), (g, _) => i.value || s.value || r.value ? (Z(), me("TresGroup", {
      key: 0,
      position: o.value,
      onClick: _[0] || (_[0] = //@ts-ignore
      (...y) => E(a).handleClick && E(a).handleClick(...y)),
      onDoubleclick: _[1] || (_[1] = //@ts-ignore
      (...y) => E(a).handleDoubleClick && E(a).handleDoubleClick(...y)),
      onContextmenu: _[2] || (_[2] = //@ts-ignore
      (...y) => E(a).handleContextMenu && E(a).handleContextMenu(...y)),
      onPointerenter: _[3] || (_[3] = //@ts-ignore
      (...y) => E(a).handlePointerEnter && E(a).handlePointerEnter(...y)),
      onPointerleave: _[4] || (_[4] = //@ts-ignore
      (...y) => E(a).handlePointerLeave && E(a).handlePointerLeave(...y)),
      onPointerover: _[5] || (_[5] = //@ts-ignore
      (...y) => E(a).handlePointerOver && E(a).handlePointerOver(...y)),
      onPointerdown: _[6] || (_[6] = //@ts-ignore
      (...y) => E(a).handlePointerDown && E(a).handlePointerDown(...y)),
      onPointerup: _[7] || (_[7] = //@ts-ignore
      (...y) => E(a).handlePointerUp && E(a).handlePointerUp(...y)),
      onWheel: _[8] || (_[8] = //@ts-ignore
      (...y) => E(a).handleWheel && E(a).handleWheel(...y))
    }, [
      g.showBottom ? (Z(), me("primitive", {
        key: 0,
        object: i.value
      }, [
        Je(g.$slots, "bottom")
      ], 8, pp)) : Fe("", true),
      g.showTop ? (Z(), me("primitive", {
        key: 1,
        object: s.value
      }, [
        Je(g.$slots, "top")
      ], 8, fp)) : Fe("", true),
      g.showWalls ? (Z(), me("primitive", {
        key: 2,
        object: r.value
      }, [
        Je(g.$slots, "walls")
      ], 8, mp)) : Fe("", true)
    ], 40, dp)) : Fe("", true);
  }
}), gp = ["rotation-y"], ly = /* @__PURE__ */ ie({
  __name: "GeoRotate",
  props: {
    rotate: { default: 0 }
  },
  setup(l15) {
    const e = l15, t = ia(() => e.rotate ? e.rotate * (Math.PI / 180) : 0);
    return (n, s) => (Z(), me("TresGroup", { "rotation-y": t.value }, [
      Je(n.$slots, "default")
    ], 8, gp));
  }
}), _p = ["position", "rotation"], _a = /* @__PURE__ */ ie({
  __name: "GeoPosition",
  props: {
    point: {}
  },
  setup(l15) {
    const e = l15, t = ce(new P()), n = ce(new aa()), s = () => {
      const i = Pe(e.point?.lon, e.point?.lat, e.point?.height || 0);
      t.value = i;
      const r = i.clone().normalize(), o = new P(0, 0, 1), a = o.clone().sub(r.clone().multiplyScalar(o.dot(r))).normalize(), c = a.clone().cross(r).normalize();
      a.copy(r.clone().cross(c)).normalize();
      const u = new z();
      u.makeBasis(
        c,
        // X轴：东向
        r,
        // Y轴：天向（径向向外）
        a
        // Z轴：北向（正前方）
      );
      const h = new Ts();
      h.matrix.copy(u), h.matrix.decompose(h.position, h.quaternion, h.scale), n.value.setFromQuaternion(h.quaternion), n.value = n.value.clone();
    };
    return O([() => e.point?.lon, () => e.point?.lat, () => e.point?.height], () => {
      s();
    }), _e(() => {
      s();
    }), (i, r) => (Z(), me("TresGroup", {
      position: t.value,
      rotation: n.value
    }, [
      Je(i.$slots, "default")
    ], 8, _p));
  }
}), cy = /* @__PURE__ */ ie({
  __name: "GeoTextureProps",
  props: {
    texture: {},
    center: {},
    rotation: {},
    scale: {},
    repeat: {},
    offset: {},
    wrapS: {},
    wrapT: {},
    magFilter: {},
    minFilter: {},
    flipY: { type: Boolean },
    format: {},
    type: {},
    colorSpace: {},
    generateMipmaps: { type: Boolean },
    premultiplyAlpha: { type: Boolean },
    unpackAlignment: {},
    anisotropy: {},
    encoding: {},
    matrixAutoUpdate: { type: Boolean },
    userData: {},
    name: {}
  },
  setup(l15) {
    const e = l15;
    function t(r, o) {
      return r.x === o[0] && r.y === o[1];
    }
    function n(r, o, a) {
      o !== void 0 && r !== o && a(o);
    }
    function s(r, o) {
      o && !t(r, o) && (r.x = o[0], r.y = o[1]);
    }
    function i() {
      e.texture && (e.center && (e.texture.center.x = e.center[0], e.texture.center.y = e.center[1]), e.rotation !== void 0 && (e.texture.rotation = e.rotation), e.scale && (e.texture.repeat.x = e.scale[0], e.texture.repeat.y = e.scale[1]), e.repeat && (e.texture.repeat.x = e.repeat[0], e.texture.repeat.y = e.repeat[1]), e.offset && (e.texture.offset.x = e.offset[0], e.texture.offset.y = e.offset[1]), e.wrapS !== void 0 && (e.texture.wrapS = e.wrapS), e.wrapT !== void 0 && (e.texture.wrapT = e.wrapT), e.magFilter !== void 0 && (e.texture.magFilter = e.magFilter), e.minFilter !== void 0 && (e.texture.minFilter = e.minFilter), e.flipY !== void 0 && (e.texture.flipY = e.flipY), e.format !== void 0 && (e.texture.format = e.format), e.type !== void 0 && (e.texture.type = e.type), e.colorSpace !== void 0 && (e.texture.colorSpace = e.colorSpace), e.generateMipmaps !== void 0 && (e.texture.generateMipmaps = e.generateMipmaps), e.premultiplyAlpha !== void 0 && (e.texture.premultiplyAlpha = e.premultiplyAlpha), e.unpackAlignment !== void 0 && (e.texture.unpackAlignment = e.unpackAlignment), e.anisotropy !== void 0 && (e.texture.anisotropy = e.anisotropy), e.encoding !== void 0 && (e.texture.encoding = e.encoding), e.userData !== void 0 && (e.texture.userData = e.userData), e.name !== void 0 && (e.texture.name = e.name));
    }
    return O(
      () => e.texture,
      (r) => {
        r && i();
      },
      { immediate: true }
      // 立即执行，确保初始化时就触发
    ), O(
      () => e.center,
      (r) => {
        e.texture && r && s(e.texture.center, r);
      },
      { deep: true }
    ), O(
      () => e.rotation,
      (r) => {
        e.texture && n(e.texture.rotation, r, (o) => {
          e.texture.rotation = o;
        });
      }
    ), O(
      () => e.scale,
      (r) => {
        e.texture && r && s(e.texture.repeat, r);
      },
      { deep: true }
    ), O(
      () => e.repeat,
      (r) => {
        e.texture && r && s(e.texture.repeat, r);
      },
      { deep: true }
    ), O(
      () => e.offset,
      (r) => {
        e.texture && r && s(e.texture.offset, r);
      },
      { deep: true }
    ), O(
      () => e.wrapS,
      (r) => {
        e.texture && n(e.texture.wrapS, r, (o) => {
          e.texture.wrapS = o;
        });
      }
    ), O(
      () => e.wrapT,
      (r) => {
        e.texture && n(e.texture.wrapT, r, (o) => {
          e.texture.wrapT = o;
        });
      }
    ), O(
      () => e.magFilter,
      (r) => {
        e.texture && n(e.texture.magFilter, r, (o) => {
          e.texture.magFilter = o;
        });
      }
    ), O(
      () => e.minFilter,
      (r) => {
        e.texture && n(e.texture.minFilter, r, (o) => {
          e.texture.minFilter = o;
        });
      }
    ), O(
      () => e.flipY,
      (r) => {
        e.texture && n(e.texture.flipY, r, (o) => {
          e.texture.flipY = o;
        });
      }
    ), O(
      () => e.format,
      (r) => {
        e.texture && n(e.texture.format, r, (o) => {
          e.texture.format = o;
        });
      }
    ), O(
      () => e.type,
      (r) => {
        e.texture && n(e.texture.type, r, (o) => {
          e.texture.type = o;
        });
      }
    ), O(
      () => e.colorSpace,
      (r) => {
        e.texture && n(e.texture.colorSpace, r, (o) => {
          e.texture.colorSpace = o;
        });
      }
    ), O(
      () => e.generateMipmaps,
      (r) => {
        e.texture && n(e.texture.generateMipmaps, r, (o) => {
          e.texture.generateMipmaps = o;
        });
      }
    ), O(
      () => e.premultiplyAlpha,
      (r) => {
        e.texture && n(e.texture.premultiplyAlpha, r, (o) => {
          e.texture.premultiplyAlpha = o;
        });
      }
    ), O(
      () => e.unpackAlignment,
      (r) => {
        e.texture && n(e.texture.unpackAlignment, r, (o) => {
          e.texture.unpackAlignment = o;
        });
      }
    ), O(
      () => e.anisotropy,
      (r) => {
        e.texture && n(e.texture.anisotropy, r, (o) => {
          e.texture.anisotropy = o;
        });
      }
    ), O(
      () => e.encoding,
      (r) => {
        e.texture && n(e.texture.encoding, r, (o) => {
          e.texture.encoding = o;
        });
      }
    ), O(
      () => e.matrixAutoUpdate,
      (r) => {
        e.texture && n(e.texture.matrixAutoUpdate, r, (o) => {
          e.texture.matrixAutoUpdate = o;
        });
      }
    ), O(
      () => e.userData,
      (r) => {
        e.texture && n(e.texture.userData, r, (o) => {
          e.texture.userData = o;
        });
      },
      { deep: true }
    ), O(
      () => e.name,
      (r) => {
        e.texture && n(e.texture.name, r, (o) => {
          e.texture.name = o;
        });
      }
    ), (r, o) => null;
  }
});
function dl(l15) {
  if (!l15)
    return null;
  const e = l15.replace(/[a-z]+:\/\/[^/]+/i, "").replace(/\?.*$/i, "").replace(/.*\//g, ""), t = e.lastIndexOf(".");
  return t === -1 ? null : e.substring(t + 1) || null;
}
const pl = 2 ** 30;
class yp {
  get unloadPriorityCallback() {
    return this._unloadPriorityCallback;
  }
  set unloadPriorityCallback(e) {
    e.length === 1 ? (console.warn('LRUCache: "unloadPriorityCallback" function has been changed to take two arguments.'), this._unloadPriorityCallback = (t, n) => {
      const s = e(t), i = e(n);
      return s < i ? -1 : s > i ? 1 : 0;
    }) : this._unloadPriorityCallback = e;
  }
  constructor() {
    this.minSize = 6e3, this.maxSize = 8e3, this.minBytesSize = 0.3 * pl, this.maxBytesSize = 0.4 * pl, this.unloadPercent = 0.05, this.autoMarkUnused = true, this.itemSet = /* @__PURE__ */ new Map(), this.itemList = [], this.usedSet = /* @__PURE__ */ new Set(), this.callbacks = /* @__PURE__ */ new Map(), this.unloadingHandle = -1, this.cachedBytes = 0, this.bytesMap = /* @__PURE__ */ new Map(), this.loadedSet = /* @__PURE__ */ new Set(), this._unloadPriorityCallback = null, this.computeMemoryUsageCallback = () => null;
    const e = this.itemSet;
    this.defaultPriorityCallback = (t) => e.get(t);
  }
  // Returns whether or not the cache has reached the maximum size
  isFull() {
    return this.itemSet.size >= this.maxSize || this.cachedBytes >= this.maxBytesSize;
  }
  getMemoryUsage(e) {
    return this.bytesMap.get(e) ?? null;
  }
  add(e, t) {
    const n = this.itemSet;
    if (n.has(e) || this.isFull())
      return false;
    const s = this.usedSet, i = this.itemList, r = this.callbacks, o = this.bytesMap;
    i.push(e), s.add(e), n.set(e, Date.now()), r.set(e, t);
    const a = this.computeMemoryUsageCallback(e);
    return this.cachedBytes += a || 0, o.set(e, a), true;
  }
  has(e) {
    return this.itemSet.has(e);
  }
  remove(e) {
    const t = this.usedSet, n = this.itemSet, s = this.itemList, i = this.bytesMap, r = this.callbacks, o = this.loadedSet;
    if (n.has(e)) {
      this.cachedBytes -= i.get(e) || 0, i.delete(e), r.get(e)(e);
      const a = s.indexOf(e);
      return s.splice(a, 1), t.delete(e), n.delete(e), r.delete(e), o.delete(e), true;
    }
    return false;
  }
  // Marks whether tiles in the cache have been completely loaded or not. Tiles that have not been completely
  // loaded are subject to being disposed early if the cache is full above its max size limits, even if they
  // are marked as used.
  setLoaded(e, t) {
    const { itemSet: n, loadedSet: s } = this;
    n.has(e) && (t === true ? s.add(e) : s.delete(e));
  }
  updateMemoryUsage(e) {
    const t = this.itemSet, n = this.bytesMap;
    if (!t.has(e))
      return;
    this.cachedBytes -= n.get(e) || 0;
    const s = this.computeMemoryUsageCallback(e);
    n.set(e, s), this.cachedBytes += s;
  }
  markUsed(e) {
    const t = this.itemSet, n = this.usedSet;
    t.has(e) && !n.has(e) && (t.set(e, Date.now()), n.add(e));
  }
  markUnused(e) {
    this.usedSet.delete(e);
  }
  markAllUnused() {
    this.usedSet.clear();
  }
  // TODO: this should be renamed because it's not necessarily unloading all unused content
  // Maybe call it "cleanup" or "unloadToMinSize"
  unloadUnusedContent() {
    const {
      unloadPercent: e,
      minSize: t,
      maxSize: n,
      itemList: s,
      itemSet: i,
      usedSet: r,
      loadedSet: o,
      callbacks: a,
      bytesMap: c,
      minBytesSize: u,
      maxBytesSize: h
    } = this, d = s.length - r.size, p = s.length - o.size, m = Math.max(Math.min(s.length - t, d), 0), f = this.cachedBytes - u, g = this.unloadPriorityCallback || this.defaultPriorityCallback;
    let _ = false;
    const y = m > 0 && d > 0 || p && s.length > n;
    if (d && this.cachedBytes > u || p && this.cachedBytes > h || y) {
      s.sort((S, C) => {
        const L = r.has(S), R = r.has(C);
        if (L === R) {
          const I = o.has(S), F = o.has(C);
          return I === F ? -g(S, C) : I ? 1 : -1;
        } else
          return L ? 1 : -1;
      });
      const x = Math.max(t * e, m * e), T = Math.ceil(Math.min(x, d, m)), A = Math.max(e * f, e * u), w = Math.min(A, f);
      let M = 0, b = 0;
      for (; this.cachedBytes - b > h || s.length - M > n; ) {
        const S = s[M], C = c.get(S) || 0;
        if (r.has(S) && o.has(S) || this.cachedBytes - b - C < h && s.length - M <= n)
          break;
        b += C, M++;
      }
      for (; b < w || M < T; ) {
        const S = s[M], C = c.get(S) || 0;
        if (r.has(S) || this.cachedBytes - b - C < u && M >= T)
          break;
        b += C, M++;
      }
      s.splice(0, M).forEach((S) => {
        this.cachedBytes -= c.get(S) || 0, a.get(S)(S), c.delete(S), i.delete(S), a.delete(S), o.delete(S), r.delete(S);
      }), _ = M < m || b < f && M < d, _ = _ && M > 0;
    }
    _ && (this.unloadingHandle = requestAnimationFrame(() => this.scheduleUnload()));
  }
  scheduleUnload() {
    cancelAnimationFrame(this.unloadingHandle), this.scheduled || (this.scheduled = true, queueMicrotask(() => {
      this.scheduled = false, this.unloadUnusedContent();
    }));
  }
}
class Sr {
  // returns whether tasks are queued or actively running
  get running() {
    return this.items.length !== 0 || this.currJobs !== 0;
  }
  constructor() {
    this.maxJobs = 6, this.items = [], this.callbacks = /* @__PURE__ */ new Map(), this.currJobs = 0, this.scheduled = false, this.autoUpdate = true, this.priorityCallback = () => {
      throw new Error("PriorityQueue: PriorityCallback function not defined.");
    }, this.schedulingCallback = (e) => {
      requestAnimationFrame(e);
    }, this._runjobs = () => {
      this.scheduled = false, this.tryRunJobs();
    };
  }
  sort() {
    const e = this.priorityCallback;
    this.items.sort(e);
  }
  has(e) {
    return this.callbacks.has(e);
  }
  add(e, t) {
    const n = {
      callback: t,
      reject: null,
      resolve: null,
      promise: null
    };
    return n.promise = new Promise((s, i) => {
      const r = this.items, o = this.callbacks;
      n.resolve = s, n.reject = i, r.push(e), o.set(e, n), this.autoUpdate && this.scheduleJobRun();
    }), n.promise;
  }
  remove(e) {
    const t = this.items, n = this.callbacks, s = t.indexOf(e);
    if (s !== -1) {
      const i = n.get(e);
      i.promise.catch(() => {
      }), i.reject(new Error("PriorityQueue: Item removed.")), t.splice(s, 1), n.delete(e);
    }
  }
  removeByFilter(e) {
    const { items: t } = this;
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      e(s) && this.remove(s);
    }
  }
  tryRunJobs() {
    this.sort();
    const e = this.items, t = this.callbacks, n = this.maxJobs;
    let s = 0;
    const i = () => {
      this.currJobs--, this.autoUpdate && this.scheduleJobRun();
    };
    for (; n > this.currJobs && e.length > 0 && s < n; ) {
      this.currJobs++, s++;
      const r = e.pop(), { callback: o, resolve: a, reject: c } = t.get(r);
      t.delete(r);
      let u;
      try {
        u = o(r);
      } catch (h) {
        c(h), i();
      }
      u instanceof Promise ? u.then(a).catch(c).finally(i) : (a(u), i());
    }
  }
  scheduleJobRun() {
    this.scheduled || (this.schedulingCallback(this._runjobs), this.scheduled = true);
  }
}
const Xn = -1, Nt = 0, _i = 1, Cr = 2, qs = 3, fl = 6378137, vp = 6356752314245179e-9, yi = {
  inView: false,
  error: 1 / 0,
  distanceFromCamera: 1 / 0
};
function fu(l15) {
  return l15 === qs || l15 === Xn;
}
function ln(l15, e) {
  return l15.__lastFrameVisited === e && l15.__used;
}
function ya(l15) {
  return l15.__childrenProcessed === l15.children.length;
}
function va(l15, e) {
  l15.__lastFrameVisited !== e.frameCount && (l15.__lastFrameVisited = e.frameCount, l15.__used = false, l15.__inFrustum = false, l15.__isLeaf = false, l15.__visible = false, l15.__active = false, l15.__error = 1 / 0, l15.__distanceFromCamera = 1 / 0, l15.__childrenWereVisible = false, l15.__allChildrenLoaded = false, e.calculateTileViewError(l15, yi), l15.__inFrustum = yi.inView, l15.__error = yi.error, l15.__distanceFromCamera = yi.distanceFromCamera);
}
function mu(l15, e) {
  if (e.ensureChildrenArePreprocessed(l15), va(l15, e), Oo(l15, e), !l15.__hasRenderableContent && ya(l15)) {
    const t = l15.children;
    for (let n = 0, s = t.length; n < s; n++)
      mu(t[n], e);
  }
}
function gu(l15, e) {
  if (e.ensureChildrenArePreprocessed(l15), ln(l15, e.frameCount) && (l15.__hasContent && l15.__loadingState === Nt && !e.lruCache.isFull() && e.queueTileForDownload(l15), ya(l15))) {
    const t = l15.children;
    for (let n = 0, s = t.length; n < s; n++)
      gu(t[n], e);
  }
}
function Oo(l15, e) {
  l15.__used || (l15.__used = true, e.markTileUsed(l15), e.stats.used++, l15.__inFrustum === true && e.stats.inFrustum++);
}
function xp(l15, e) {
  return !(l15.__error <= e.errorTarget || e.maxDepth > 0 && l15.__depth + 1 >= e.maxDepth || !ya(l15));
}
function Io(l15, e = null, t = null) {
  const n = [];
  for (n.push(l15), n.push(null), n.push(0); n.length > 0; ) {
    const s = n.pop(), i = n.pop(), r = n.pop();
    if (e && e(r, i, s)) {
      t && t(r, i, s);
      return;
    }
    const o = r.children;
    if (o)
      for (let a = o.length - 1; a >= 0; a--)
        n.push(o[a]), n.push(r), n.push(s + 1);
    t && t(r, i, s);
  }
}
function _u(l15, e) {
  if (e.ensureChildrenArePreprocessed(l15), va(l15, e), !l15.__inFrustum)
    return;
  if (!xp(l15, e)) {
    Oo(l15, e);
    return;
  }
  let t = false, n = false;
  const s = l15.children;
  for (let i = 0, r = s.length; i < r; i++) {
    const o = s[i];
    _u(o, e), t = t || ln(o, e.frameCount), n = n || o.__inFrustum;
  }
  if (Oo(l15, e), t && l15.refine === "REPLACE")
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      mu(o, e);
    }
}
function yu(l15, e) {
  const t = e.frameCount;
  if (!ln(l15, t))
    return;
  const n = l15.children;
  let s = false;
  for (let i = 0, r = n.length; i < r; i++) {
    const o = n[i];
    s = s || ln(o, t);
  }
  if (!s)
    l15.__isLeaf = true;
  else {
    let i = false, r = true;
    for (let o = 0, a = n.length; o < a; o++) {
      const c = n[o];
      if (yu(c, e), i = i || c.__wasSetVisible || c.__childrenWereVisible, ln(c, t)) {
        const u = c.__allChildrenLoaded || c.__hasRenderableContent && fu(c.__loadingState) || !c.__hasContent && c.children.length === 0 || c.__hasUnrenderableContent && c.__loadingState === Xn;
        r = r && u;
      }
    }
    l15.__childrenWereVisible = i, l15.__allChildrenLoaded = r;
  }
}
function vu(l15, e) {
  const t = e.stats;
  if (!ln(l15, e.frameCount))
    return;
  const n = e.lruCache;
  if (l15.__isLeaf) {
    l15.__loadingState === qs ? (l15.__inFrustum && (l15.__visible = true, t.visible++), l15.__active = true, t.active++) : !n.isFull() && l15.__hasContent && e.queueTileForDownload(l15);
    return;
  }
  const s = l15.children, i = l15.__hasContent, r = fu(l15.__loadingState) && i, o = (e.errorTarget + 1) * e.errorThreshold, a = l15.__error <= o, c = l15.__childrenWereVisible, u = l15.__allChildrenLoaded;
  if ((a || l15.refine === "ADD") && !r && !n.isFull() && i && e.queueTileForDownload(l15), (a && !u && !c && r || l15.refine === "ADD" && r) && (l15.__inFrustum && (l15.__visible = true, t.visible++), l15.__active = true, t.active++), l15.refine === "REPLACE" && a && !u)
    for (let d = 0, p = s.length; d < p; d++) {
      const m = s[d];
      ln(m, e.frameCount) && gu(m, e);
    }
  else
    for (let d = 0, p = s.length; d < p; d++)
      vu(s[d], e);
}
function xu(l15, e) {
  const t = ln(l15, e.frameCount);
  if (t || l15.__usedLastFrame) {
    let n = false, s = false;
    t ? (n = l15.__active, e.displayActiveTiles ? s = l15.__active || l15.__visible : s = l15.__visible) : va(l15, e), l15.__hasRenderableContent && l15.__loadingState === qs && (l15.__wasSetActive !== n && e.invokeOnePlugin((r) => r.setTileActive && r.setTileActive(l15, n)), l15.__wasSetVisible !== s && e.invokeOnePlugin((r) => r.setTileVisible && r.setTileVisible(l15, s))), l15.__wasSetActive = n, l15.__wasSetVisible = s, l15.__usedLastFrame = t;
    const i = l15.children;
    for (let r = 0, o = i.length; r < o; r++) {
      const a = i[r];
      xu(a, e);
    }
  }
}
function Tp(l15, e = null) {
  let t = l15;
  for (; t; ) {
    const n = t.__depth, s = t.parent;
    e && e(t, s, n), t = s;
  }
}
function bp(l15) {
  let e = null;
  return () => {
    e === null && (e = requestAnimationFrame(() => {
      e = null, l15();
    }));
  };
}
const ml = Symbol("PLUGIN_REGISTERED"), Lr = (l15, e) => l15.__depthFromRenderedParent !== e.__depthFromRenderedParent ? l15.__depthFromRenderedParent > e.__depthFromRenderedParent ? -1 : 1 : l15.__inFrustum !== e.__inFrustum ? l15.__inFrustum ? 1 : -1 : l15.__used !== e.__used ? l15.__used ? 1 : -1 : l15.__error !== e.__error ? l15.__error > e.__error ? 1 : -1 : l15.__distanceFromCamera !== e.__distanceFromCamera ? l15.__distanceFromCamera > e.__distanceFromCamera ? -1 : 1 : 0, wp = (l15, e) => l15.__depthFromRenderedParent !== e.__depthFromRenderedParent ? l15.__depthFromRenderedParent > e.__depthFromRenderedParent ? 1 : -1 : l15.__loadingState !== e.__loadingState ? l15.__loadingState > e.__loadingState ? -1 : 1 : l15.__lastFrameVisited !== e.__lastFrameVisited ? l15.__lastFrameVisited > e.__lastFrameVisited ? -1 : 1 : l15.__hasUnrenderableContent !== e.__hasUnrenderableContent ? l15.__hasUnrenderableContent ? -1 : 1 : l15.__error !== e.__error ? l15.__error > e.__error ? -1 : 1 : 0;
class Ap {
  get root() {
    const e = this.rootTileSet;
    return e ? e.root : null;
  }
  get loadProgress() {
    const { stats: e, isLoading: t } = this, n = e.downloading + e.parsing, s = e.inCacheSinceLoad + (t ? 1 : 0);
    return s === 0 ? 1 : 1 - n / s;
  }
  get errorThreshold() {
    return this._errorThreshold;
  }
  set errorThreshold(e) {
    console.warn('TilesRenderer: The "errorThreshold" option has been deprecated.'), this._errorThreshold = e;
  }
  constructor(e = null) {
    this.rootLoadingState = Nt, this.rootTileSet = null, this.rootURL = e, this.fetchOptions = {}, this.plugins = [], this.queuedTiles = [], this.cachedSinceLoadComplete = /* @__PURE__ */ new Set(), this.isLoading = false;
    const t = new yp();
    t.unloadPriorityCallback = wp;
    const n = new Sr();
    n.maxJobs = 10, n.priorityCallback = Lr;
    const s = new Sr();
    s.maxJobs = 1, s.priorityCallback = Lr;
    const i = new Sr();
    i.maxJobs = 25, i.priorityCallback = Lr, i.log = true, this.visibleTiles = /* @__PURE__ */ new Set(), this.activeTiles = /* @__PURE__ */ new Set(), this.usedSet = /* @__PURE__ */ new Set(), this.lruCache = t, this.downloadQueue = n, this.parseQueue = s, this.processNodeQueue = i, this.stats = {
      inCacheSinceLoad: 0,
      inCache: 0,
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0, this._dispatchNeedsUpdateEvent = bp(() => {
      this.dispatchEvent({ type: "needs-update" });
    }), this.errorTarget = 16, this._errorThreshold = 1 / 0, this.displayActiveTiles = false, this.maxDepth = 1 / 0;
  }
  // Plugins
  registerPlugin(e) {
    if (e[ml] === true)
      throw new Error("TilesRendererBase: A plugin can only be registered to a single tile set");
    const t = this.plugins, n = e.priority || 0;
    let s = t.length;
    for (let i = 0; i < t.length; i++)
      if ((t[i].priority || 0) > n) {
        s = i;
        break;
      }
    t.splice(s, 0, e), e[ml] = true, e.init && e.init(this);
  }
  unregisterPlugin(e) {
    const t = this.plugins;
    if (typeof e == "string" && (e = this.getPluginByName(name)), t.includes(e)) {
      const n = t.indexOf(e);
      return t.splice(n, 1), e.dispose && e.dispose(), true;
    }
    return false;
  }
  getPluginByName(e) {
    return this.plugins.find((t) => t.name === e) || null;
  }
  traverse(e, t, n = true) {
    this.root && Io(this.root, (s, ...i) => (n && this.ensureChildrenArePreprocessed(s, true), e ? e(s, ...i) : false), t);
  }
  queueTileForDownload(e) {
    e.__loadingState === Nt && this.queuedTiles.push(e);
  }
  markTileUsed(e) {
    this.usedSet.add(e), this.lruCache.markUsed(e);
  }
  // Public API
  update() {
    const { lruCache: e, usedSet: t, stats: n, root: s, downloadQueue: i, parseQueue: r, processNodeQueue: o } = this;
    if (this.rootLoadingState === Nt && (this.rootLoadingState = _i, this.invokeOnePlugin((u) => u.loadRootTileSet && u.loadRootTileSet()).then((u) => {
      let h = this.rootURL;
      h !== null && this.invokeAllPlugins((d) => h = d.preprocessURL ? d.preprocessURL(h, null) : h), this.rootLoadingState = qs, this.rootTileSet = u, this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), this.dispatchEvent({
        type: "load-tile-set",
        tileSet: u,
        url: h
      });
    }).catch((u) => {
      this.rootLoadingState = Xn, console.error(u), this.rootTileSet = null, this.dispatchEvent({
        type: "load-error",
        tile: null,
        error: u,
        url: this.rootURL
      });
    })), !s)
      return;
    n.inFrustum = 0, n.used = 0, n.active = 0, n.visible = 0, this.frameCount++, t.forEach((u) => e.markUnused(u)), t.clear(), _u(s, this), yu(s, this), vu(s, this), xu(s, this);
    const a = this.queuedTiles;
    a.sort(e.unloadPriorityCallback);
    for (let u = 0, h = a.length; u < h && !e.isFull(); u++)
      this.requestTileContents(a[u]);
    a.length = 0, e.scheduleUnload(), (i.running || r.running || o.running) === false && this.isLoading === true && (this.cachedSinceLoadComplete.clear(), n.inCacheSinceLoad = 0, this.dispatchEvent({ type: "tiles-load-end" }), this.isLoading = false);
  }
  resetFailedTiles() {
    this.rootLoadingState === Xn && (this.rootLoadingState = Nt);
    const e = this.stats;
    e.failed !== 0 && (this.traverse((t) => {
      t.__loadingState === Xn && (t.__loadingState = Nt);
    }, null, false), e.failed = 0);
  }
  dispose() {
    [...this.plugins].forEach((s) => {
      this.unregisterPlugin(s);
    });
    const t = this.lruCache, n = [];
    this.traverse((s) => (n.push(s), false), null, false);
    for (let s = 0, i = n.length; s < i; s++)
      t.remove(n[s]);
    this.stats = {
      parsing: 0,
      downloading: 0,
      failed: 0,
      inFrustum: 0,
      used: 0,
      active: 0,
      visible: 0
    }, this.frameCount = 0;
  }
  // Overrideable
  dispatchEvent(e) {
  }
  fetchData(e, t) {
    return fetch(e, t);
  }
  parseTile(e, t, n) {
    return null;
  }
  disposeTile(e) {
    e.__visible && (this.invokeOnePlugin((t) => t.setTileVisible && t.setTileVisible(e, false)), e.__visible = false), e.__active && (this.invokeOnePlugin((t) => t.setTileActive && t.setTileActive(e, false)), e.__active = false);
  }
  preprocessNode(e, t, n = null) {
    if (e.content && (!("uri" in e.content) && "url" in e.content && (e.content.uri = e.content.url, delete e.content.url), e.content.boundingVolume && !("box" in e.content.boundingVolume || "sphere" in e.content.boundingVolume || "region" in e.content.boundingVolume) && delete e.content.boundingVolume), e.parent = n, e.children = e.children || [], e.content?.uri) {
      const s = dl(e.content.uri);
      e.__hasContent = true, e.__hasUnrenderableContent = !!(s && /json$/.test(s)), e.__hasRenderableContent = !e.__hasUnrenderableContent;
    } else
      e.__hasContent = false, e.__hasUnrenderableContent = false, e.__hasRenderableContent = false;
    e.__childrenProcessed = 0, n && n.__childrenProcessed++, e.__distanceFromCamera = 1 / 0, e.__error = 1 / 0, e.__inFrustum = false, e.__isLeaf = false, e.__usedLastFrame = false, e.__used = false, e.__wasSetVisible = false, e.__visible = false, e.__childrenWereVisible = false, e.__allChildrenLoaded = false, e.__wasSetActive = false, e.__active = false, e.__loadingState = Nt, n === null ? (e.__depth = 0, e.__depthFromRenderedParent = e.__hasRenderableContent ? 1 : 0, e.refine = e.refine || "REPLACE") : (e.__depth = n.__depth + 1, e.__depthFromRenderedParent = n.__depthFromRenderedParent + (e.__hasRenderableContent ? 1 : 0), e.refine = e.refine || n.refine), e.__basePath = t, e.__lastFrameVisited = -1, this.invokeAllPlugins((s) => {
      s !== this && s.preprocessNode && s.preprocessNode(e, t, n);
    });
  }
  setTileActive(e, t) {
    t ? this.activeTiles.add(e) : this.activeTiles.delete(e);
  }
  setTileVisible(e, t) {
    t ? this.visibleTiles.add(e) : this.visibleTiles.delete(e);
  }
  calculateTileViewError(e, t) {
  }
  ensureChildrenArePreprocessed(e, t = false) {
    const n = e.children;
    for (let s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      if ("__depth" in r)
        break;
      t ? (this.processNodeQueue.remove(r), this.preprocessNode(r, e.__basePath, e)) : this.processNodeQueue.has(r) || this.processNodeQueue.add(r, (o) => {
        this.preprocessNode(o, e.__basePath, e), this._dispatchNeedsUpdateEvent();
      });
    }
  }
  // Private Functions
  preprocessTileSet(e, t, n = null) {
    const s = e.asset.version, [i, r] = s.split(".").map((a) => parseInt(a));
    console.assert(
      i <= 1,
      "TilesRenderer: asset.version is expected to be a 1.x or a compatible version."
    ), i === 1 && r > 0 && console.warn("TilesRenderer: tiles versions at 1.1 or higher have limited support. Some new extensions and features may not be supported.");
    let o = t.replace(/\/[^/]*$/, "");
    o = new URL(o, window.location.href).toString(), this.preprocessNode(e.root, o, n);
  }
  loadRootTileSet() {
    let e = this.rootURL;
    return this.invokeAllPlugins((n) => e = n.preprocessURL ? n.preprocessURL(e, null) : e), this.invokeOnePlugin((n) => n.fetchData && n.fetchData(e, this.fetchOptions)).then((n) => {
      if (n instanceof Response) {
        if (n.ok)
          return n.json();
        throw new Error(`TilesRenderer: Failed to load tileset "${e}" with status ${n.status} : ${n.statusText}`);
      } else return n;
    }).then((n) => (this.preprocessTileSet(n, e), n));
  }
  requestTileContents(e) {
    if (e.__loadingState !== Nt)
      return;
    let t = false, n = null, s = new URL(e.content.uri, e.__basePath + "/").toString();
    this.invokeAllPlugins((p) => s = p.preprocessURL ? p.preprocessURL(s, e) : s);
    const i = this.stats, r = this.lruCache, o = this.downloadQueue, a = this.parseQueue, c = dl(s), u = new AbortController(), h = u.signal;
    if (r.add(e, (p) => {
      u.abort(), t ? (p.children.length = 0, p.__childrenProcessed = 0) : this.invokeAllPlugins((m) => {
        m.disposeTile && m.disposeTile(p);
      }), i.inCache--, this.cachedSinceLoadComplete.has(e) && (this.cachedSinceLoadComplete.delete(e), i.inCacheSinceLoad--), p.__loadingState === _i ? i.downloading-- : p.__loadingState === Cr && i.parsing--, p.__loadingState = Nt, a.remove(p), o.remove(p);
    }))
      return this.isLoading || (this.isLoading = true, this.dispatchEvent({ type: "tiles-load-start" })), this.cachedSinceLoadComplete.add(e), i.inCacheSinceLoad++, i.inCache++, i.downloading++, e.__loadingState = _i, o.add(e, (p) => {
        if (h.aborted)
          return Promise.resolve();
        const m = this.invokeOnePlugin((f) => f.fetchData && f.fetchData(s, { ...this.fetchOptions, signal: h }));
        return this.dispatchEvent({ type: "tile-download-start", tile: e }), m;
      }).then((p) => {
        if (!h.aborted)
          if (p instanceof Response) {
            if (p.ok)
              return c === "json" ? p.json() : p.arrayBuffer();
            throw new Error(`Failed to load model with error code ${p.status}`);
          } else return p;
      }).then((p) => {
        if (!h.aborted)
          return i.downloading--, i.parsing++, e.__loadingState = Cr, a.add(e, (m) => h.aborted ? Promise.resolve() : c === "json" && p.root ? (this.preprocessTileSet(p, s, e), e.children.push(p.root), n = p, t = true, Promise.resolve()) : this.invokeOnePlugin((f) => f.parseTile && f.parseTile(p, m, c, s, h)));
      }).then(() => {
        h.aborted || (i.parsing--, e.__loadingState = qs, r.setLoaded(e, true), r.getMemoryUsage(e) === null && (r.isFull() && r.computeMemoryUsageCallback(e) > 0 ? r.remove(e) : r.updateMemoryUsage(e)), this.dispatchEvent({ type: "needs-update" }), this.dispatchEvent({ type: "load-content" }), t && this.dispatchEvent({
          type: "load-tile-set",
          tileSet: n,
          url: s
        }), e.cached.scene && this.dispatchEvent({
          type: "load-model",
          scene: e.cached.scene,
          tile: e
        }));
      }).catch((p) => {
        h.aborted || (p.name !== "AbortError" ? (a.remove(e), o.remove(e), e.__loadingState === Cr ? i.parsing-- : e.__loadingState === _i && i.downloading--, i.failed++, console.error(`TilesRenderer : Failed to load tile at url "${e.content.uri}".`), console.error(p), e.__loadingState = Xn, r.setLoaded(e, true), this.dispatchEvent({
          type: "load-error",
          tile: e,
          error: p,
          url: s
        })) : r.remove(e));
      });
  }
  getAttributions(e = []) {
    return this.invokeAllPlugins((t) => t !== this && t.getAttributions && t.getAttributions(e)), e;
  }
  invokeOnePlugin(e) {
    const t = [...this.plugins, this];
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s)
        return s;
    }
    return null;
  }
  invokeAllPlugins(e) {
    const t = [...this.plugins, this], n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n.length === 0 ? null : Promise.all(n);
  }
}
const Mp = new TextDecoder();
function Tu(l15) {
  return Mp.decode(l15);
}
function bu(l15, e, t, n, s, i) {
  let r;
  switch (n) {
    case "SCALAR":
      r = 1;
      break;
    case "VEC2":
      r = 2;
      break;
    case "VEC3":
      r = 3;
      break;
    case "VEC4":
      r = 4;
      break;
    default:
      throw new Error(`FeatureTable : Feature type not provided for "${i}".`);
  }
  let o;
  const a = t * r;
  switch (s) {
    case "BYTE":
      o = new Int8Array(l15, e, a);
      break;
    case "UNSIGNED_BYTE":
      o = new Uint8Array(l15, e, a);
      break;
    case "SHORT":
      o = new Int16Array(l15, e, a);
      break;
    case "UNSIGNED_SHORT":
      o = new Uint16Array(l15, e, a);
      break;
    case "INT":
      o = new Int32Array(l15, e, a);
      break;
    case "UNSIGNED_INT":
      o = new Uint32Array(l15, e, a);
      break;
    case "FLOAT":
      o = new Float32Array(l15, e, a);
      break;
    case "DOUBLE":
      o = new Float64Array(l15, e, a);
      break;
    default:
      throw new Error(`FeatureTable : Feature component type not provided for "${i}".`);
  }
  return o;
}
class gr {
  constructor(e, t, n, s) {
    this.buffer = e, this.binOffset = t + n, this.binLength = s;
    let i = null;
    if (n !== 0) {
      const r = new Uint8Array(e, t, n);
      i = JSON.parse(Tu(r));
    } else
      i = {};
    this.header = i;
  }
  getKeys() {
    return Object.keys(this.header);
  }
  getData(e, t, n = null, s = null) {
    const i = this.header;
    if (!(e in i))
      return null;
    const r = i[e];
    if (r instanceof Object) {
      if (Array.isArray(r))
        return r;
      {
        const { buffer: o, binOffset: a, binLength: c } = this, u = r.byteOffset || 0, h = r.type || s, d = r.componentType || n;
        if ("type" in r && s && r.type !== s)
          throw new Error("FeatureTable: Specified type does not match expected type.");
        const p = a + u, m = bu(o, p, t, h, d, e);
        if (p + m.byteLength > a + c)
          throw new Error("FeatureTable: Feature data read outside binary body length.");
        return m;
      }
    } else return r;
  }
  getBuffer(e, t) {
    const { buffer: n, binOffset: s } = this;
    return n.slice(s + e, s + e + t);
  }
}
class Pp {
  constructor(e) {
    this.batchTable = e;
    const t = e.header.extensions["3DTILES_batch_table_hierarchy"];
    this.classes = t.classes;
    for (const s of this.classes) {
      const i = s.instances;
      for (const r in i)
        s.instances[r] = this._parseProperty(i[r], s.length, r);
    }
    if (this.instancesLength = t.instancesLength, this.classIds = this._parseProperty(t.classIds, this.instancesLength, "classIds"), t.parentCounts ? this.parentCounts = this._parseProperty(t.parentCounts, this.instancesLength, "parentCounts") : this.parentCounts = new Array(this.instancesLength).fill(1), t.parentIds) {
      const s = this.parentCounts.reduce((i, r) => i + r, 0);
      this.parentIds = this._parseProperty(t.parentIds, s, "parentIds");
    } else
      this.parentIds = null;
    this.instancesIds = [];
    const n = {};
    for (const s of this.classIds)
      n[s] = n[s] ?? 0, this.instancesIds.push(n[s]), n[s]++;
  }
  _parseProperty(e, t, n) {
    if (Array.isArray(e))
      return e;
    {
      const { buffer: s, binOffset: i } = this.batchTable, r = e.byteOffset, o = e.componentType || "UNSIGNED_SHORT", a = i + r;
      return bu(s, a, t, "SCALAR", o, n);
    }
  }
  getDataFromId(e, t = {}) {
    const n = this.parentCounts[e];
    if (this.parentIds && n > 0) {
      let a = 0;
      for (let c = 0; c < e; c++)
        a += this.parentCounts[c];
      for (let c = 0; c < n; c++) {
        const u = this.parentIds[a + c];
        u !== e && this.getDataFromId(u, t);
      }
    }
    const s = this.classIds[e], i = this.classes[s].instances, r = this.classes[s].name, o = this.instancesIds[e];
    for (const a in i)
      t[r] = t[r] || {}, t[r][a] = i[a][o];
    return t;
  }
}
class xa extends gr {
  get batchSize() {
    return console.warn("BatchTable.batchSize has been deprecated and replaced with BatchTable.count."), this.count;
  }
  constructor(e, t, n, s, i) {
    super(e, n, s, i), this.count = t, this.extensions = {};
    const r = this.header.extensions;
    r && r["3DTILES_batch_table_hierarchy"] && (this.extensions["3DTILES_batch_table_hierarchy"] = new Pp(this));
  }
  getData(e, t = null, n = null) {
    return console.warn("BatchTable: BatchTable.getData is deprecated. Use BatchTable.getDataFromId to get allproperties for an id or BatchTable.getPropertyArray for getting an array of value for a property."), super.getData(e, this.count, t, n);
  }
  getDataFromId(e, t = {}) {
    if (e < 0 || e >= this.count)
      throw new Error(`BatchTable: id value "${e}" out of bounds for "${this.count}" features number.`);
    for (const n of this.getKeys())
      n !== "extensions" && (t[n] = super.getData(n, this.count)[e]);
    for (const n in this.extensions) {
      const s = this.extensions[n];
      s.getDataFromId instanceof Function && (t[n] = t[n] || {}, s.getDataFromId(e, t[n]));
    }
    return t;
  }
  getPropertyArray(e) {
    return super.getData(e, this.count);
  }
}
class _r {
  constructor() {
    this.fetchOptions = {}, this.workingPath = "";
  }
  load(...e) {
    return console.warn('Loader: "load" function has been deprecated in favor of "loadAsync".'), this.loadAsync(...e);
  }
  loadAsync(e) {
    return fetch(e, this.fetchOptions).then((t) => {
      if (!t.ok)
        throw new Error(`Failed to load file "${e}" with status ${t.status} : ${t.statusText}`);
      return t.arrayBuffer();
    }).then((t) => (this.workingPath === "" && (this.workingPath = this.workingPathForURL(e)), this.parse(t)));
  }
  resolveExternalURL(e) {
    return /^[^\\/]/.test(e) && !/^http/.test(e) ? this.workingPath + "/" + e : e;
  }
  workingPathForURL(e) {
    const t = e.split(/[\\/]/g);
    return t.pop(), t.join("/") + "/";
  }
  parse(e) {
    throw new Error("LoaderBase: Parse not implemented.");
  }
}
function ps(l15) {
  if (l15 === null || l15.byteLength < 4)
    return "";
  let e;
  if (l15 instanceof DataView ? e = l15 : e = new DataView(l15), String.fromCharCode(e.getUint8(0)) === "{")
    return null;
  let t = "";
  for (let n = 0; n < 4; n++)
    t += String.fromCharCode(e.getUint8(n));
  return t;
}
class Ep extends _r {
  parse(e) {
    const t = new DataView(e), n = ps(t);
    console.assert(n === "b3dm");
    const s = t.getUint32(4, true);
    console.assert(s === 1);
    const i = t.getUint32(8, true);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, true), o = t.getUint32(16, true), a = t.getUint32(20, true), c = t.getUint32(24, true), u = 28, h = e.slice(
      u,
      u + r + o
    ), d = new gr(
      h,
      0,
      r,
      o
    ), p = u + r + o, m = e.slice(
      p,
      p + a + c
    ), f = new xa(
      m,
      d.getData("BATCH_LENGTH"),
      0,
      a,
      c
    ), g = p + a + c, _ = new Uint8Array(e, g, i - g);
    return {
      version: s,
      featureTable: d,
      batchTable: f,
      glbBytes: _
    };
  }
}
function Sp(l15) {
  let e = 0;
  for (const n in l15.attributes) {
    const s = l15.getAttribute(n);
    e += s.count * s.itemSize * s.array.BYTES_PER_ELEMENT;
  }
  const t = l15.getIndex();
  return e += t ? t.count * t.itemSize * t.array.BYTES_PER_ELEMENT : 0, e;
}
function gl(l15, e) {
  if (e === Bc)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), l15;
  if (e === rs || e === cr) {
    let t = l15.getIndex();
    if (t === null) {
      const r = [], o = l15.getAttribute("position");
      if (o !== void 0) {
        for (let a = 0; a < o.count; a++)
          r.push(a);
        l15.setIndex(r), t = l15.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), l15;
    }
    const n = t.count - 2, s = [];
    if (e === rs)
      for (let r = 1; r <= n; r++)
        s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
    else
      for (let r = 0; r < n; r++)
        r % 2 === 0 ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2))) : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = l15.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), l15;
}
let Ta = class extends ur {
  /**
   * Constructs a new glTF loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Op(t);
    }), this.register(function(t) {
      return new Ip(t);
    }), this.register(function(t) {
      return new jp(t);
    }), this.register(function(t) {
      return new Vp(t);
    }), this.register(function(t) {
      return new Wp(t);
    }), this.register(function(t) {
      return new Fp(t);
    }), this.register(function(t) {
      return new Np(t);
    }), this.register(function(t) {
      return new Up(t);
    }), this.register(function(t) {
      return new Bp(t);
    }), this.register(function(t) {
      return new Dp(t);
    }), this.register(function(t) {
      return new zp(t);
    }), this.register(function(t) {
      return new kp(t);
    }), this.register(function(t) {
      return new Hp(t);
    }), this.register(function(t) {
      return new Gp(t);
    }), this.register(function(t) {
      return new Lp(t);
    }), this.register(function(t) {
      return new $p(t);
    }), this.register(function(t) {
      return new Kp(t);
    });
  }
  /**
   * Starts loading from the given URL and passes the loaded glTF asset
   * to the `onLoad()` callback.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  load(e, t, n, s) {
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const c = Pt.extractUrlBase(e);
      r = Pt.resolveURL(c, this.path);
    } else
      r = Pt.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, a = new os(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(c) {
      try {
        i.parse(c, r, function(u) {
          t(u), i.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
      }
    }, n, o);
  }
  /**
   * Sets the given Draco loader to this loader. Required for decoding assets
   * compressed with the `KHR_draco_mesh_compression` extension.
   *
   * @param {DRACOLoader} dracoLoader - The Draco loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  /**
   * Sets the given KTX2 loader to this loader. Required for loading KTX2
   * compressed textures.
   *
   * @param {KTX2Loader} ktx2Loader - The KTX2 loader to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  /**
   * Sets the given meshopt decoder. Required for decoding assets
   * compressed with the `EXT_meshopt_compression` extension.
   *
   * @param {Object} meshoptDecoder - The meshopt decoder to set.
   * @return {GLTFLoader} A reference to this loader.
   */
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  /**
   * Registers a plugin callback. This API is internally used to implement the various
   * glTF extensions but can also used by third-party code to add additional logic
   * to the loader.
   *
   * @param {function(parser:GLTFParser)} callback - The callback function to register.
   * @return {GLTFLoader} A reference to this loader.
   */
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  /**
   * Unregisters a plugin callback.
   *
   * @param {Function} callback - The callback function to unregister.
   * @return {GLTFLoader} A reference to this loader.
   */
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parses the given FBX data and returns the resulting group.
   *
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @param {function(GLTFLoader~LoadObject)} onLoad - Executed when the loading process has been finished.
   * @param {onErrorCallback} onError - Executed when errors occur.
   */
  parse(e, t, n, s) {
    let i;
    const r = {}, o = {}, a = new TextDecoder();
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (a.decode(new Uint8Array(e, 0, 4)) === wu) {
        try {
          r[V.KHR_BINARY_GLTF] = new qp(e);
        } catch (h) {
          s && s(h);
          return;
        }
        i = JSON.parse(r[V.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(a.decode(e));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new lf(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](c);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[h.name] = h, r[h.name] = true;
    }
    if (i.extensionsUsed)
      for (let u = 0; u < i.extensionsUsed.length; ++u) {
        const h = i.extensionsUsed[u], d = i.extensionsRequired || [];
        switch (h) {
          case V.KHR_MATERIALS_UNLIT:
            r[h] = new Rp();
            break;
          case V.KHR_DRACO_MESH_COMPRESSION:
            r[h] = new Xp(i, this.dracoLoader);
            break;
          case V.KHR_TEXTURE_TRANSFORM:
            r[h] = new Yp();
            break;
          case V.KHR_MESH_QUANTIZATION:
            r[h] = new Zp();
            break;
          default:
            d.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    c.setExtensions(r), c.setPlugins(o), c.parse(n, s);
  }
  /**
   * Async version of {@link GLTFLoader#parse}.
   *
   * @async
   * @param {string|ArrayBuffer} data - The raw glTF data.
   * @param {string} path - The URL base path.
   * @return {Promise<GLTFLoader~LoadObject>} A Promise that resolves with the loaded glTF when the parsing has been finished.
   */
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
};
function Cp() {
  let l15 = {};
  return {
    get: function(e) {
      return l15[e];
    },
    add: function(e, t) {
      l15[e] = t;
    },
    remove: function(e) {
      delete l15[e];
    },
    removeAll: function() {
      l15 = {};
    }
  };
}
const V = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
let Lp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Ce(16777215);
    a.color !== void 0 && u.setRGB(a.color[0], a.color[1], a.color[2], Wt);
    const h = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        c = new Hc(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Gc(u), c.distance = h;
        break;
      case "spot":
        c = new zc(u), c.distance = h, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, c.angle = a.spot.outerConeAngle, c.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return c.position.set(0, 0, 0), Tt(c, a), a.intensity !== void 0 && (c.intensity = a.intensity), c.name = t.createUniqueName(a.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], o = (i.extensions && i.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(a) {
      return n._getNodeRef(t.cache, o, a);
    });
  }
}, Rp = class {
  constructor() {
    this.name = V.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ne;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Ce(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], Wt), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, as));
    }
    return Promise.all(s);
  }
}, Dp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}, Op = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new $(o, o);
    }
    return Promise.all(i);
  }
}, Ip = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}, kp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(i);
  }
}, Fp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = s.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Wt);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, as)), r.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}, Np = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}, Up = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ce().setRGB(o[0], o[1], o[2], Wt), Promise.all(i);
  }
}, Bp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}, zp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ce().setRGB(o[0], o[1], o[2], Wt), r.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, as)), Promise.all(i);
  }
}, Gp = class {
  constructor(e) {
    this.parser = e, this.name = V.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}, Hp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}, jp = class {
  constructor(e) {
    this.parser = e, this.name = V.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}, Vp = class {
  constructor(e) {
    this.parser = e, this.name = V.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = s.images[r.source];
    let a = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return n.loadTextureImage(e, r.source, a);
  }
}, Wp = class {
  constructor(e) {
    this.parser = e, this.name = V.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = s.images[r.source];
    let a = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return n.loadTextureImage(e, r.source, a);
  }
}, $p = class {
  constructor(e) {
    this.name = V.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(o) {
        const a = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, h = s.byteStride, d = new Uint8Array(o, a, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(u, h, d, s.mode, s.filter).then(function(p) {
          return p.buffer;
        }) : r.ready.then(function() {
          const p = new ArrayBuffer(u * h);
          return r.decodeGltfBuffer(new Uint8Array(p), u, h, d, s.mode, s.filter), p;
        });
      });
    } else
      return null;
  }
}, Kp = class {
  constructor(e) {
    this.name = V.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== lt.TRIANGLES && c.mode !== lt.TRIANGLE_STRIP && c.mode !== lt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, o = [], a = {};
    for (const c in r)
      o.push(this.parser.getDependency("accessor", r[c]).then((u) => (a[c] = u, a[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, p = [];
      for (const m of h) {
        const f = new z(), g = new P(), _ = new Se(), y = new P(1, 1, 1), v = new la(m.geometry, m.material, d);
        for (let x = 0; x < d; x++)
          a.TRANSLATION && g.fromBufferAttribute(a.TRANSLATION, x), a.ROTATION && _.fromBufferAttribute(a.ROTATION, x), a.SCALE && y.fromBufferAttribute(a.SCALE, x), v.setMatrixAt(x, f.compose(g, _, y));
        for (const x in a)
          if (x === "_COLOR_0") {
            const T = a[x];
            v.instanceColor = new jc(T.array, T.itemSize, T.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, a[x]);
        Ts.prototype.copy.call(v, m), this.parser.assignFinalMaterial(v), p.push(v);
      }
      return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
    }));
  }
};
const wu = "glTF", Ps = 12, _l = { JSON: 1313821514, BIN: 5130562 };
let qp = class {
  constructor(e) {
    this.name = V.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Ps), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    }, this.header.magic !== wu)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - Ps, i = new DataView(e, Ps);
    let r = 0;
    for (; r < s; ) {
      const o = i.getUint32(r, true);
      r += 4;
      const a = i.getUint32(r, true);
      if (r += 4, a === _l.JSON) {
        const c = new Uint8Array(e, Ps + r, o);
        this.content = n.decode(c);
      } else if (a === _l.BIN) {
        const c = Ps + r;
        this.body = e.slice(c, c + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}, Xp = class {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = V.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, a = {}, c = {};
    for (const u in r) {
      const h = ko[u] || u.toLowerCase();
      o[h] = r[u];
    }
    for (const u in e.attributes) {
      const h = ko[u] || u.toLowerCase();
      if (r[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], p = Jn[d.componentType];
        c[h] = p.name, a[h] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", i).then(function(u) {
      return new Promise(function(h, d) {
        s.decodeDracoFile(u, function(p) {
          for (const m in p.attributes) {
            const f = p.attributes[m], g = a[m];
            g !== void 0 && (f.normalized = g);
          }
          h(p);
        }, o, c, Wt, d);
      });
    });
  }
}, Yp = class {
  constructor() {
    this.name = V.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}, Zp = class {
  constructor() {
    this.name = V.KHR_MESH_QUANTIZATION;
  }
}, Au = class extends lu {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let r = 0; r !== s; r++)
      t[r] = n[i + r];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, a = o * 2, c = o * 3, u = s - t, h = (n - t) / u, d = h * h, p = d * h, m = e * c, f = m - c, g = -2 * p + 3 * d, _ = p - d, y = 1 - g, v = _ - d + h;
    for (let x = 0; x !== o; x++) {
      const T = r[f + x + o], A = r[f + x + a] * u, w = r[m + x + o], M = r[m + x] * u;
      i[x] = y * T + v * A + g * w + _ * M;
    }
    return i;
  }
};
const Qp = new Se();
let Jp = class extends Au {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return Qp.fromArray(i).normalize().toArray(i), i;
  }
};
const lt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Jn = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, yl = {
  9728: ca,
  9729: $s,
  9984: Xc,
  9985: qc,
  9986: Kc,
  9987: hr
}, vl = {
  33071: Zc,
  33648: Yc,
  10497: ls
}, Rr = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ko = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, qt = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, ef = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: pr,
  STEP: ou
}, Dr = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function tf(l15) {
  return l15.DefaultMaterial === void 0 && (l15.DefaultMaterial = new ii({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: au
  })), l15.DefaultMaterial;
}
function mn(l15, e, t) {
  for (const n in t.extensions)
    l15[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Tt(l15, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(l15.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function nf(l15, e, t) {
  let n = false, s = false, i = false;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = true), h.NORMAL !== void 0 && (s = true), h.COLOR_0 !== void 0 && (i = true), n && s && i) break;
  }
  if (!n && !s && !i) return Promise.resolve(l15);
  const r = [], o = [], a = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : l15.attributes.position;
      r.push(d);
    }
    if (s) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : l15.attributes.normal;
      o.push(d);
    }
    if (i) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : l15.attributes.color;
      a.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(a)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (l15.morphAttributes.position = u), s && (l15.morphAttributes.normal = h), i && (l15.morphAttributes.color = d), l15.morphTargetsRelative = true, l15;
  });
}
function sf(l15, e) {
  if (l15.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      l15.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (l15.morphTargetInfluences.length === t.length) {
      l15.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        l15.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function rf(l15) {
  let e;
  const t = l15.extensions && l15.extensions[V.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Or(t.attributes) : e = l15.indices + ":" + Or(l15.attributes) + ":" + l15.mode, l15.targets !== void 0)
    for (let n = 0, s = l15.targets.length; n < s; n++)
      e += ":" + Or(l15.targets[n]);
  return e;
}
function Or(l15) {
  let e = "";
  const t = Object.keys(l15).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + l15[t[n]] + ";";
  return e;
}
function Fo(l15) {
  switch (l15) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function of(l15) {
  return l15.search(/\.jpe?g($|\?)/i) > 0 || l15.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : l15.search(/\.webp($|\?)/i) > 0 || l15.search(/^data\:image\/webp/) === 0 ? "image/webp" : l15.search(/\.ktx2($|\?)/i) > 0 || l15.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const af = new z();
let lf = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Cp(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, s = -1, i = false, r = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === true;
      const a = o.match(/Version\/(\d+)/);
      s = n && a ? parseInt(a[1], 10) : -1, i = o.indexOf("Firefox") > -1, r = i ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && s < 17 || i && r < 98 ? this.textureLoader = new ar(this.options.manager) : this.textureLoader = new Vc(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new os(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][s.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return mn(i, o, s), Tt(o, s), Promise.all(n._invokeAll(function(a) {
        return a.afterRoot && a.afterRoot(o);
      })).then(function() {
        for (const a of o.scenes)
          a.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   *
   * @private
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s].joints;
      for (let o = 0, a = r.length; o < a; o++)
        e[r[o]].isBone = true;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = true)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   *
   * @private
   * @param {Object} cache
   * @param {Object3D} index
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /**
   * Returns a reference to a shared resource, cloning it if necessary.
   *
   * @private
   * @param {Object} cache
   * @param {number} index
   * @param {Object} object
   * @return {Object}
   */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const s = n.clone(), i = (r, o) => {
      const a = this.associations.get(r);
      a != null && this.associations.set(o, a);
      for (const [c, u] of r.children.entries())
        i(u, o.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   *
   * @private
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(i, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[V.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, r) {
      n.load(Pt.resolveURL(t.uri, s.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   *
   * @private
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   *
   * @private
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = Rr[s.type], o = Jn[s.componentType], a = s.normalized === true, c = new o(s.count * r);
      return Promise.resolve(new we(c, r, a));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], a = Rr[s.type], c = Jn[s.componentType], u = c.BYTES_PER_ELEMENT, h = u * a, d = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
      let f, g;
      if (p && p !== h) {
        const _ = Math.floor(d / p), y = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + _ + ":" + s.count;
        let v = t.cache.get(y);
        v || (f = new c(o, _ * p, s.count * p / u), v = new Wc(f, p / u), t.cache.add(y, v)), g = new $c(v, a, d % p / u, m);
      } else
        o === null ? f = new c(s.count * a) : f = new c(o, d, s.count * a), g = new we(f, a, m);
      if (s.sparse !== void 0) {
        const _ = Rr.SCALAR, y = Jn[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, x = s.sparse.values.byteOffset || 0, T = new y(r[1], v, s.sparse.count * _), A = new c(r[2], x, s.sparse.count * a);
        o !== null && (g = new we(g.array.slice(), g.itemSize, g.normalized)), g.normalized = false;
        for (let w = 0, M = T.length; w < M; w++) {
          const b = T[w];
          if (g.setX(b, A[w * a]), a >= 2 && g.setY(b, A[w * a + 1]), a >= 3 && g.setZ(b, A[w * a + 2]), a >= 4 && g.setW(b, A[w * a + 3]), a >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        g.normalized = m;
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   *
   * @private
   * @param {number} textureIndex
   * @return {Promise<?Texture>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, r = t.images[i];
    let o = this.textureLoader;
    if (r.uri) {
      const a = n.manager.getHandler(r.uri);
      a !== null && (o = a);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, r = i.textures[e], o = i.images[t], a = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = false, u.name = r.name || o.name || "", u.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (u.name = o.uri);
      const d = (i.samplers || {})[r.sampler] || {};
      return u.magFilter = yl[d.magFilter] || $s, u.minFilter = yl[d.minFilter] || hr, u.wrapS = vl[d.wrapS] || ls, u.wrapT = vl[d.wrapT] || ls, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== ca && u.minFilter !== $s, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = s.images[e], o = self.URL || self.webkitURL;
    let a = r.uri || "", c = false;
    if (r.bufferView !== void 0)
      a = n.getDependency("bufferView", r.bufferView).then(function(h) {
        c = true;
        const d = new Blob([h], { type: r.mimeType });
        return a = o.createObjectURL(d), a;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(a).then(function(h) {
      return new Promise(function(d, p) {
        let m = d;
        t.isImageBitmapLoader === true && (m = function(f) {
          const g = new Ks(f);
          g.needsUpdate = true, d(g);
        }), t.load(Pt.resolveURL(h, i.path), m, void 0, p);
      });
    }).then(function(h) {
      return c === true && o.revokeObjectURL(a), Tt(h, r), h.userData.mimeType = r.mimeType || of(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   *
   * @private
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @param {string} [colorSpace]
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (r = r.clone(), r.channel = n.texCoord), i.extensions[V.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[V.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const a = i.associations.get(r);
          r = i.extensions[V.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), i.associations.set(r, a);
        }
      }
      return s !== void 0 && (r.colorSpace = s), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   *
   * @private
   * @param {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new bs(), Qn.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, a.sizeAttenuation = false, this.cache.add(o, a)), n = a;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new lr(), Qn.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, this.cache.add(o, a)), n = a;
    }
    if (s || i || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      s && (o += "derivative-tangents:"), i && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let a = this.cache.get(o);
      a || (a = n.clone(), i && (a.vertexColors = true), r && (a.flatShading = true), s && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(o, a), this.associations.set(a, this.associations.get(n))), n = a;
    }
    e.material = n;
  }
  getMaterialType() {
    return ii;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   *
   * @private
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let r;
    const o = {}, a = i.extensions || {}, c = [];
    if (a[V.KHR_MATERIALS_UNLIT]) {
      const h = s[V.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), c.push(h.extendParams(o, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (o.color = new Ce(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Wt), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", h.baseColorTexture, as)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    i.doubleSided === true && (o.side = oa);
    const u = i.alphaMode || Dr.OPAQUE;
    if (u === Dr.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, u === Dr.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== Ne && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new $(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== Ne && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== Ne) {
      const h = i.emissiveFactor;
      o.emissive = new Ce().setRGB(h[0], h[1], h[2], Wt);
    }
    return i.emissiveTexture !== void 0 && r !== Ne && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, as)), Promise.all(c).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), Tt(h, i), t.associations.set(h, { materials: e }), i.extensions && mn(s, h, i), h;
    });
  }
  /**
   * When Object3D instances are targeted by animation, they need unique names.
   *
   * @private
   * @param {string} originalName
   * @return {string}
   */
  createUniqueName(e) {
    const t = Qc.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @private
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(o) {
      return n[V.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(a) {
        return xl(a, o, t);
      });
    }
    const r = [];
    for (let o = 0, a = e.length; o < a; o++) {
      const c = e[o], u = rf(c), h = s[u];
      if (h)
        r.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[V.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = xl(new $e(), c, t), s[u] = { primitive: c, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   *
   * @private
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh|Line|Points>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], r = i.primitives, o = [];
    for (let a = 0, c = r.length; a < c; a++) {
      const u = r[a].material === void 0 ? tf(this.cache) : this.getDependency("material", r[a].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(a) {
      const c = a.slice(0, a.length - 1), u = a[a.length - 1], h = [];
      for (let p = 0, m = u.length; p < m; p++) {
        const f = u[p], g = r[p];
        let _;
        const y = c[p];
        if (g.mode === lt.TRIANGLES || g.mode === lt.TRIANGLE_STRIP || g.mode === lt.TRIANGLE_FAN || g.mode === void 0)
          _ = i.isSkinnedMesh === true ? new Jc(f, y) : new et(f, y), _.isSkinnedMesh === true && _.normalizeSkinWeights(), g.mode === lt.TRIANGLE_STRIP ? _.geometry = gl(_.geometry, cr) : g.mode === lt.TRIANGLE_FAN && (_.geometry = gl(_.geometry, rs));
        else if (g.mode === lt.LINES)
          _ = new dr(f, y);
        else if (g.mode === lt.LINE_STRIP)
          _ = new ra(f, y);
        else if (g.mode === lt.LINE_LOOP)
          _ = new eu(f, y);
        else if (g.mode === lt.POINTS)
          _ = new si(f, y);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && sf(_, i), _.name = t.createUniqueName(i.name || "mesh_" + e), Tt(_, i), g.extensions && mn(s, _, g), t.assignFinalMaterial(_), h.push(_);
      }
      for (let p = 0, m = h.length; p < m; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return i.extensions && mn(s, h[0], i), h[0];
      const d = new ge();
      i.extensions && mn(s, d, i), t.associations.set(d, { meshes: e });
      for (let p = 0, m = h.length; p < m; p++)
        d.add(h[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   *
   * @private
   * @param {number} cameraIndex
   * @return {Promise<Camera>|undefined}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new tu(k.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new nu(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Tt(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   *
   * @private
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), r = s, o = [], a = [];
      for (let c = 0, u = r.length; c < u; c++) {
        const h = r[c];
        if (h) {
          o.push(h);
          const d = new z();
          i !== null && d.fromArray(i.array, c * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new su(o, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   *
   * @private
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, r = [], o = [], a = [], c = [], u = [];
    for (let h = 0, d = s.channels.length; h < d; h++) {
      const p = s.channels[h], m = s.samplers[p.sampler], f = p.target, g = f.node, _ = s.parameters !== void 0 ? s.parameters[m.input] : m.input, y = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
      f.node !== void 0 && (r.push(this.getDependency("node", g)), o.push(this.getDependency("accessor", _)), a.push(this.getDependency("accessor", y)), c.push(m), u.push(f));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(a),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], p = h[1], m = h[2], f = h[3], g = h[4], _ = [];
      for (let v = 0, x = d.length; v < x; v++) {
        const T = d[v], A = p[v], w = m[v], M = f[v], b = g[v];
        if (T === void 0) continue;
        T.updateMatrix && T.updateMatrix();
        const S = n._createAnimationTracks(T, A, w, M, b);
        if (S)
          for (let C = 0; C < S.length; C++)
            _.push(S[C]);
      }
      const y = new iu(i, void 0, _);
      return Tt(y, s), y;
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const r = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let a = 0, c = s.weights.length; a < c; a++)
            o.morphTargetInfluences[a] = s.weights[a];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   *
   * @private
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), r = [], o = s.children || [];
    for (let c = 0, u = o.length; c < u; c++)
      r.push(n.getDependency("node", o[c]));
    const a = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([
      i,
      Promise.all(r),
      a
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      d !== null && u.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, af);
      });
      for (let p = 0, m = h.length; p < m; p++)
        u.add(h[p]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? s.createUniqueName(i.name) : "", o = [], a = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return a && o.push(a), i.camera !== void 0 && o.push(s.getDependency("camera", i.camera).then(function(c) {
      return s._getNodeRef(s.cameraCache, i.camera, c);
    })), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let u;
      if (i.isBone === true ? u = new ru() : c.length > 1 ? u = new ge() : c.length === 1 ? u = c[0] : u = new Ts(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (i.name && (u.userData.name = i.name, u.name = r), Tt(u, i), i.extensions && mn(n, u, i), i.matrix !== void 0) {
        const h = new z();
        h.fromArray(i.matrix), u.applyMatrix4(h);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      if (!s.associations.has(u))
        s.associations.set(u, {});
      else if (i.mesh !== void 0 && s.meshCache.refs[i.mesh] > 1) {
        const h = s.associations.get(u);
        s.associations.set(u, { ...h });
      }
      return s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   *
   * @private
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new ge();
    n.name && (i.name = s.createUniqueName(n.name)), Tt(i, n), n.extensions && mn(t, i, n);
    const r = n.nodes || [], o = [];
    for (let a = 0, c = r.length; a < c; a++)
      o.push(s.getDependency("node", r[a]));
    return Promise.all(o).then(function(a) {
      for (let u = 0, h = a.length; u < h; u++)
        i.add(a[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, p] of s.associations)
          (d instanceof Qn || d instanceof Ks) && h.set(d, p);
        return u.traverse((d) => {
          const p = s.associations.get(d);
          p != null && h.set(d, p);
        }), h;
      };
      return s.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const r = [], o = e.name ? e.name : e.uuid, a = [];
    qt[i.path] === qt.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(o);
    let c;
    switch (qt[i.path]) {
      case qt.weights:
        c = Ki;
        break;
      case qt.rotation:
        c = qi;
        break;
      case qt.translation:
      case qt.scale:
        c = $i;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Ki;
            break;
          case 2:
          case 3:
          default:
            c = $i;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? ef[s.interpolation] : pr, h = this._getArrayFromAccessor(n);
    for (let d = 0, p = a.length; d < p; d++) {
      const m = new c(
        a[d] + "." + qt[i.path],
        t.array,
        h,
        u
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), r.push(m);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Fo(t.constructor), s = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof qi ? Jp : Au;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
};
function cf(l15, e, t) {
  const n = e.attributes, s = new ua();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], a = o.min, c = o.max;
    if (a !== void 0 && c !== void 0) {
      if (s.set(
        new P(a[0], a[1], a[2]),
        new P(c[0], c[1], c[2])
      ), o.normalized) {
        const u = Fo(Jn[o.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new P(), a = new P();
    for (let c = 0, u = i.length; c < u; c++) {
      const h = i[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], p = d.min, m = d.max;
        if (p !== void 0 && m !== void 0) {
          if (a.setX(Math.max(Math.abs(p[0]), Math.abs(m[0]))), a.setY(Math.max(Math.abs(p[1]), Math.abs(m[1]))), a.setZ(Math.max(Math.abs(p[2]), Math.abs(m[2]))), d.normalized) {
            const f = Fo(Jn[d.componentType]);
            a.multiplyScalar(f);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(o);
  }
  l15.boundingBox = s;
  const r = new kn();
  s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, l15.boundingSphere = r;
}
function xl(l15, e, t) {
  const n = e.attributes, s = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function(a) {
      l15.setAttribute(o, a);
    });
  }
  for (const r in n) {
    const o = ko[r] || r.toLowerCase();
    o in l15.attributes || s.push(i(n[r], o));
  }
  if (e.indices !== void 0 && !l15.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      l15.setIndex(o);
    });
    s.push(r);
  }
  return Xa.workingColorSpace !== Wt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xa.workingColorSpace}" not supported.`), Tt(l15, e), cf(l15, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? nf(l15, e.targets, t) : l15;
  });
}
class Mu extends Ep {
  constructor(e = fr) {
    super(), this.manager = e, this.adjustmentTransform = new z();
  }
  parse(e) {
    const t = super.parse(e), n = t.glbBytes.slice().buffer;
    return new Promise((s, i) => {
      const r = this.manager, o = this.fetchOptions, a = r.getHandler("path.gltf") || new Ta(r);
      o.credentials === "include" && o.mode === "cors" && a.setCrossOrigin("use-credentials"), "credentials" in o && a.setWithCredentials(o.credentials === "include"), o.headers && a.setRequestHeader(o.headers);
      let c = this.workingPath;
      !/[\\/]$/.test(c) && c.length && (c += "/");
      const u = this.adjustmentTransform;
      a.parse(n, c, (h) => {
        const { batchTable: d, featureTable: p } = t, { scene: m } = h, f = p.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
        f && (m.position.x += f[0], m.position.y += f[1], m.position.z += f[2]), h.scene.updateMatrix(), h.scene.matrix.multiply(u), h.scene.matrix.decompose(h.scene.position, h.scene.quaternion, h.scene.scale), h.batchTable = d, h.featureTable = p, m.batchTable = d, m.featureTable = p, s(h);
      }, i);
    });
  }
}
class uf extends _r {
  parse(e) {
    const t = new DataView(e), n = ps(t);
    console.assert(n === "pnts");
    const s = t.getUint32(4, true);
    console.assert(s === 1);
    const i = t.getUint32(8, true);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, true), o = t.getUint32(16, true), a = t.getUint32(20, true), c = t.getUint32(24, true), u = 28, h = e.slice(
      u,
      u + r + o
    ), d = new gr(
      h,
      0,
      r,
      o
    ), p = u + r + o, m = e.slice(
      p,
      p + a + c
    ), f = new xa(
      m,
      d.getData("BATCH_LENGTH") || d.getData("POINTS_LENGTH"),
      0,
      a,
      c
    );
    return Promise.resolve({
      version: s,
      featureTable: d,
      batchTable: f
    });
  }
}
function hf(l15) {
  const e = l15 >> 11, t = l15 >> 5 & 63, n = l15 & 31, s = Math.round(e / 31 * 255), i = Math.round(t / 63 * 255), r = Math.round(n / 31 * 255);
  return [s, i, r];
}
const Es = new $();
function df(l15, e, t = new P()) {
  Es.set(l15, e).divideScalar(256).multiplyScalar(2).subScalar(1), t.set(Es.x, Es.y, 1 - Math.abs(Es.x) - Math.abs(Es.y));
  const n = k.clamp(-t.z, 0, 1);
  return t.x >= 0 ? t.setX(t.x - n) : t.setX(t.x + n), t.y >= 0 ? t.setY(t.y - n) : t.setY(t.y + n), t.normalize(), t;
}
const Tl = {
  RGB: "color",
  POSITION: "position"
};
class Pu extends uf {
  constructor(e = fr) {
    super(), this.manager = e;
  }
  parse(e) {
    return super.parse(e).then(async (t) => {
      const { featureTable: n, batchTable: s } = t, i = new bs(), r = n.header.extensions, o = new P();
      let a;
      if (r && r["3DTILES_draco_point_compression"]) {
        const { byteOffset: h, byteLength: d, properties: p } = r["3DTILES_draco_point_compression"], m = this.manager.getHandler("draco.drc");
        if (m == null)
          throw new Error("PNTSLoader: dracoLoader not available.");
        const f = {};
        for (const y in p)
          if (y in Tl && y in p) {
            const v = Tl[y];
            f[v] = p[y];
          }
        const g = {
          attributeIDs: f,
          attributeTypes: {
            position: "Float32Array",
            color: "Uint8Array"
          },
          useUniqueIDs: true
        }, _ = n.getBuffer(h, d);
        a = await m.decodeGeometry(_, g), a.attributes.color && (i.vertexColors = true);
      } else {
        const h = n.getData("POINTS_LENGTH"), d = n.getData("POSITION", h, "FLOAT", "VEC3"), p = n.getData("NORMAL", h, "FLOAT", "VEC3"), m = n.getData("NORMAL", h, "UNSIGNED_BYTE", "VEC2"), f = n.getData("RGB", h, "UNSIGNED_BYTE", "VEC3"), g = n.getData("RGBA", h, "UNSIGNED_BYTE", "VEC4"), _ = n.getData("RGB565", h, "UNSIGNED_SHORT", "SCALAR"), y = n.getData("CONSTANT_RGBA", h, "UNSIGNED_BYTE", "VEC4"), v = n.getData("POSITION_QUANTIZED", h, "UNSIGNED_SHORT", "VEC3"), x = n.getData("QUANTIZED_VOLUME_SCALE", h, "FLOAT", "VEC3"), T = n.getData("QUANTIZED_VOLUME_OFFSET", h, "FLOAT", "VEC3");
        if (a = new $e(), v) {
          const A = new Float32Array(h * 3);
          for (let w = 0; w < h; w++)
            for (let M = 0; M < 3; M++) {
              const b = 3 * w + M;
              A[b] = v[b] / 65535 * x[M];
            }
          o.x = T[0], o.y = T[1], o.z = T[2], a.setAttribute("position", new we(A, 3, false));
        } else
          a.setAttribute("position", new we(d, 3, false));
        if (p !== null)
          a.setAttribute("normal", new we(p, 3, false));
        else if (m !== null) {
          const A = new Float32Array(h * 3), w = new P();
          for (let M = 0; M < h; M++) {
            const b = m[M * 2], S = m[M * 2 + 1], C = df(b, S, w);
            A[M * 3] = C.x, A[M * 3 + 1] = C.y, A[M * 3 + 2] = C.z;
          }
          a.setAttribute("normal", new we(A, 3, false));
        }
        if (g !== null)
          a.setAttribute("color", new we(g, 4, true)), i.vertexColors = true, i.transparent = true, i.depthWrite = false;
        else if (f !== null)
          a.setAttribute("color", new we(f, 3, true)), i.vertexColors = true;
        else if (_ !== null) {
          const A = new Uint8Array(h * 3);
          for (let w = 0; w < h; w++) {
            const M = hf(_[w]);
            for (let b = 0; b < 3; b++) {
              const S = 3 * w + b;
              A[S] = M[b];
            }
          }
          a.setAttribute("color", new we(A, 3, true)), i.vertexColors = true;
        } else if (y !== null) {
          const A = new Ce(y[0], y[1], y[2]);
          i.color = A;
          const w = y[3] / 255;
          w < 1 && (i.opacity = w, i.transparent = true, i.depthWrite = false);
        }
      }
      const c = new si(a, i);
      c.position.copy(o), t.scene = c, t.scene.featureTable = n, t.scene.batchTable = s;
      const u = n.getData("RTC_CENTER", 1, "FLOAT", "VEC3");
      return u && (t.scene.position.x += u[0], t.scene.position.y += u[1], t.scene.position.z += u[2]), t;
    });
  }
}
class pf extends _r {
  parse(e) {
    const t = new DataView(e), n = ps(t);
    console.assert(n === "i3dm");
    const s = t.getUint32(4, true);
    console.assert(s === 1);
    const i = t.getUint32(8, true);
    console.assert(i === e.byteLength);
    const r = t.getUint32(12, true), o = t.getUint32(16, true), a = t.getUint32(20, true), c = t.getUint32(24, true), u = t.getUint32(28, true), h = 32, d = e.slice(
      h,
      h + r + o
    ), p = new gr(
      d,
      0,
      r,
      o
    ), m = h + r + o, f = e.slice(
      m,
      m + a + c
    ), g = new xa(
      f,
      p.getData("INSTANCES_LENGTH"),
      0,
      a,
      c
    ), _ = m + a + c, y = new Uint8Array(e, _, i - _);
    let v = null, x = null, T = null;
    if (u)
      v = y, x = Promise.resolve();
    else {
      const A = this.resolveExternalURL(Tu(y)), w = A.split(/[\\/]/g);
      w.pop(), T = w.join("/"), x = fetch(A, this.fetchOptions).then((M) => {
        if (!M.ok)
          throw new Error(`I3DMLoaderBase : Failed to load file "${A}" with status ${M.status} : ${M.statusText}`);
        return M.arrayBuffer();
      }).then((M) => {
        v = new Uint8Array(M);
      });
    }
    return x.then(() => ({
      version: s,
      featureTable: p,
      batchTable: g,
      glbBytes: v,
      gltfWorkingPath: T
    }));
  }
}
new Xi();
new P();
function ff(l15) {
  const { x: e, y: t, z: n } = l15;
  l15.x = n, l15.y = e, l15.z = t;
}
function mf(l15) {
  return -l15 + Math.PI / 2;
}
const bl = new Xi(), Xt = new P(), it = new P(), Ir = new P(), Yt = new z(), vt = new z(), wl = new z(), kr = new kn(), Ue = new aa(), Al = new P(), Ml = new P(), Pl = new P(), gn = new P(), El = new yt(), gf = 1e-12, _f = 0.1, vi = 0, Sl = 1, xi = 2;
class ba {
  constructor(e = 1, t = 1, n = 1) {
    this.name = "", this.radius = new P(e, t, n);
  }
  intersectRay(e, t) {
    return Yt.makeScale(...this.radius).invert(), kr.center.set(0, 0, 0), kr.radius = 1, El.copy(e).applyMatrix4(Yt), El.intersectSphere(kr, t) ? (Yt.makeScale(...this.radius), t.applyMatrix4(Yt), t) : null;
  }
  // returns a frame with Z indicating altitude, Y pointing north, X pointing east
  getEastNorthUpFrame(e, t, n, s) {
    return n.isMatrix4 && (s = n, n = 0, console.warn('Ellipsoid: The signature for "getEastNorthUpFrame" has changed.')), this.getEastNorthUpAxes(e, t, Al, Ml, Pl), this.getCartographicToPosition(e, t, n, gn), s.makeBasis(Al, Ml, Pl).setPosition(gn);
  }
  // returns a frame with z indicating altitude and az, el, roll rotation within that frame
  // - azimuth: measured off of true north, increasing towards "east" (z-axis)
  // - elevation: measured off of the horizon, increasing towards sky (x-axis)
  // - roll: rotation around northern axis (y-axis)
  getOrientedEastNorthUpFrame(e, t, n, s, i, r, o) {
    return this.getObjectFrame(e, t, n, s, i, r, o, vi);
  }
  // returns a frame similar to the ENU frame but rotated to match three.js object and camera conventions
  // OBJECT_FRAME: oriented such that "+Y" is up and "+Z" is forward.
  // CAMERA_FRAME: oriented such that "+Y" is up and "-Z" is forward.
  getObjectFrame(e, t, n, s, i, r, o, a = xi) {
    return this.getEastNorthUpFrame(e, t, n, Yt), Ue.set(i, r, -s, "ZXY"), o.makeRotationFromEuler(Ue).premultiply(Yt), a === Sl ? (Ue.set(Math.PI / 2, 0, 0, "XYZ"), vt.makeRotationFromEuler(Ue), o.multiply(vt)) : a === xi && (Ue.set(-Math.PI / 2, 0, Math.PI, "XYZ"), vt.makeRotationFromEuler(Ue), o.multiply(vt)), o;
  }
  getCartographicFromObjectFrame(e, t, n = xi) {
    return n === Sl ? (Ue.set(-Math.PI / 2, 0, 0, "XYZ"), vt.makeRotationFromEuler(Ue).premultiply(e)) : n === xi ? (Ue.set(-Math.PI / 2, 0, Math.PI, "XYZ"), vt.makeRotationFromEuler(Ue).premultiply(e)) : vt.copy(e), gn.setFromMatrixPosition(vt), this.getPositionToCartographic(gn, t), this.getEastNorthUpFrame(t.lat, t.lon, 0, Yt).invert(), vt.premultiply(Yt), Ue.setFromRotationMatrix(vt, "ZXY"), t.azimuth = -Ue.z, t.elevation = Ue.x, t.roll = Ue.y, t;
  }
  getEastNorthUpAxes(e, t, n, s, i, r = gn) {
    this.getCartographicToPosition(e, t, 0, r), this.getCartographicToNormal(e, t, i), n.set(-r.y, r.x, 0).normalize(), s.crossVectors(i, n).normalize();
  }
  // azimuth: measured off of true north, increasing towards "east"
  // elevation: measured off of the horizon, increasing towards sky
  // roll: rotation around northern axis
  getAzElRollFromRotationMatrix(e, t, n, s, i = vi) {
    return console.warn('Ellipsoid: "getAzElRollFromRotationMatrix" is deprecated. Use "getCartographicFromObjectFrame", instead.'), this.getCartographicToPosition(e, t, 0, gn), wl.copy(n).setPosition(gn), this.getCartographicFromObjectFrame(wl, s, i), delete s.height, delete s.lat, delete s.lon, s;
  }
  getRotationMatrixFromAzElRoll(e, t, n, s, i, r, o = vi) {
    return console.warn('Ellipsoid: "getRotationMatrixFromAzElRoll" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, 0, n, s, i, r, o), r.setPosition(0, 0, 0), r;
  }
  getFrame(e, t, n, s, i, r, o, a = vi) {
    return console.warn('Ellipsoid: "getFrame" function has been deprecated. Use "getObjectFrame", instead.'), this.getObjectFrame(e, t, r, n, s, i, o, a);
  }
  getCartographicToPosition(e, t, n, s) {
    this.getCartographicToNormal(e, t, Xt);
    const i = this.radius;
    it.copy(Xt), it.x *= i.x ** 2, it.y *= i.y ** 2, it.z *= i.z ** 2;
    const r = Math.sqrt(Xt.dot(it));
    return it.divideScalar(r), s.copy(it).addScaledVector(Xt, n);
  }
  getPositionToCartographic(e, t) {
    this.getPositionToSurfacePoint(e, it), this.getPositionToNormal(e, Xt);
    const n = Ir.subVectors(e, it);
    return t.lon = Math.atan2(Xt.y, Xt.x), t.lat = Math.asin(Xt.z), t.height = Math.sign(n.dot(e)) * n.length(), t;
  }
  getCartographicToNormal(e, t, n) {
    return bl.set(1, mf(e), t), n.setFromSpherical(bl).normalize(), ff(n), n;
  }
  getPositionToNormal(e, t) {
    const n = this.radius;
    return t.copy(e), t.x /= n.x ** 2, t.y /= n.y ** 2, t.z /= n.z ** 2, t.normalize(), t;
  }
  getPositionToSurfacePoint(e, t) {
    const n = this.radius, s = 1 / n.x ** 2, i = 1 / n.y ** 2, r = 1 / n.z ** 2, o = e.x * e.x * s, a = e.y * e.y * i, c = e.z * e.z * r, u = o + a + c, h = Math.sqrt(1 / u), d = it.copy(e).multiplyScalar(h);
    if (u < _f)
      return isFinite(h) ? t.copy(d) : null;
    const p = Ir.set(
      d.x * s * 2,
      d.y * i * 2,
      d.z * r * 2
    );
    let m = (1 - h) * e.length() / (0.5 * p.length()), f = 0, g, _, y, v, x, T, A, w, M, b, S;
    do {
      m -= f, y = 1 / (1 + m * s), v = 1 / (1 + m * i), x = 1 / (1 + m * r), T = y * y, A = v * v, w = x * x, M = T * y, b = A * v, S = w * x, g = o * T + a * A + c * w - 1, _ = o * M * s + a * b * i + c * S * r;
      const C = -2 * _;
      f = g / C;
    } while (Math.abs(g) > gf);
    return t.set(
      e.x * y,
      e.y * v,
      e.z * x
    );
  }
  calculateHorizonDistance(e, t) {
    const n = this.calculateEffectiveRadius(e);
    return Math.sqrt(2 * n * t + t ** 2);
  }
  calculateEffectiveRadius(e) {
    const t = this.radius.x, s = 1 - this.radius.z ** 2 / t ** 2, i = e * k.DEG2RAD, r = Math.sin(i) ** 2;
    return t / Math.sqrt(1 - s * r);
  }
  getPositionElevation(e) {
    this.getPositionToSurfacePoint(e, it);
    const t = Ir.subVectors(e, it);
    return Math.sign(t.dot(e)) * t.length();
  }
  copy(e) {
    return this.radius.copy(e.radius), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fs = new ba(fl, fl, vp);
fs.name = "WGS84 Earth";
const Cl = /* @__PURE__ */ new P(), Fr = /* @__PURE__ */ new P(), Nr = /* @__PURE__ */ new P(), Ur = /* @__PURE__ */ new P(), Br = /* @__PURE__ */ new Se(), Ti = /* @__PURE__ */ new P(), bi = /* @__PURE__ */ new z(), Ll = /* @__PURE__ */ new z(), Rl = /* @__PURE__ */ new P(), Dl = /* @__PURE__ */ new z(), zr = /* @__PURE__ */ new Se(), Gr = {};
class Eu extends pf {
  constructor(e = fr) {
    super(), this.manager = e, this.adjustmentTransform = new z(), this.ellipsoid = fs.clone();
  }
  resolveExternalURL(e) {
    return this.manager.resolveURL(super.resolveExternalURL(e));
  }
  parse(e) {
    return super.parse(e).then((t) => {
      const { featureTable: n, batchTable: s } = t, i = t.glbBytes.slice().buffer;
      return new Promise((r, o) => {
        const a = this.fetchOptions, c = this.manager, u = c.getHandler("path.gltf") || new Ta(c);
        a.credentials === "include" && a.mode === "cors" && u.setCrossOrigin("use-credentials"), "credentials" in a && u.setWithCredentials(a.credentials === "include"), a.headers && u.setRequestHeader(a.headers);
        let h = t.gltfWorkingPath ?? this.workingPath;
        /[\\/]$/.test(h) || (h += "/");
        const d = this.adjustmentTransform;
        u.parse(i, h, (p) => {
          const m = n.getData("INSTANCES_LENGTH"), f = n.getData("POSITION", m, "FLOAT", "VEC3"), g = n.getData("NORMAL_UP", m, "FLOAT", "VEC3"), _ = n.getData("NORMAL_RIGHT", m, "FLOAT", "VEC3"), y = n.getData("SCALE_NON_UNIFORM", m, "FLOAT", "VEC3"), v = n.getData("SCALE", m, "FLOAT", "SCALAR"), x = n.getData("RTC_CENTER", 1, "FLOAT", "VEC3"), T = n.getData("EAST_NORTH_UP");
          [
            "QUANTIZED_VOLUME_OFFSET",
            "QUANTIZED_VOLUME_SCALE",
            "POSITION_QUANTIZED",
            "NORMAL_UP_OCT32P",
            "NORMAL_RIGHT_OCT32P"
          ].forEach((b) => {
            b in n.header && console.warn(`I3DMLoader: Unsupported FeatureTable feature "${b}" detected.`);
          });
          const A = new P();
          for (let b = 0; b < m; b++)
            A.x += f[b * 3 + 0] / m, A.y += f[b * 3 + 1] / m, A.z += f[b * 3 + 2] / m;
          const w = [], M = [];
          p.scene.updateMatrixWorld(), p.scene.traverse((b) => {
            if (b.isMesh) {
              M.push(b);
              const { geometry: S, material: C } = b, L = new la(S, C, m);
              L.position.copy(A), x && (L.position.x += x[0], L.position.y += x[1], L.position.z += x[2]), w.push(L);
            }
          });
          for (let b = 0; b < m; b++) {
            Ur.set(
              f[b * 3 + 0] - A.x,
              f[b * 3 + 1] - A.y,
              f[b * 3 + 2] - A.z
            ), Br.identity(), g && (Fr.set(
              g[b * 3 + 0],
              g[b * 3 + 1],
              g[b * 3 + 2]
            ), Nr.set(
              _[b * 3 + 0],
              _[b * 3 + 1],
              _[b * 3 + 2]
            ), Cl.crossVectors(Nr, Fr).normalize(), bi.makeBasis(
              Nr,
              Fr,
              Cl
            ), Br.setFromRotationMatrix(bi)), Ti.set(1, 1, 1), y && Ti.set(
              y[b * 3 + 0],
              y[b * 3 + 1],
              y[b * 3 + 2]
            ), v && Ti.multiplyScalar(v[b]);
            for (let S = 0, C = w.length; S < C; S++) {
              const L = w[S];
              zr.copy(Br), T && (L.updateMatrixWorld(), Rl.copy(Ur).applyMatrix4(L.matrixWorld), this.ellipsoid.getPositionToCartographic(Rl, Gr), this.ellipsoid.getEastNorthUpFrame(Gr.lat, Gr.lon, Dl), zr.setFromRotationMatrix(Dl)), bi.compose(Ur, zr, Ti).multiply(d);
              const R = M[S];
              Ll.multiplyMatrices(bi, R.matrixWorld), L.setMatrixAt(b, Ll);
            }
          }
          p.scene.clear(), p.scene.add(...w), p.batchTable = s, p.featureTable = n, p.scene.batchTable = s, p.scene.featureTable = n, r(p);
        }, o);
      });
    });
  }
}
class yf extends _r {
  parse(e) {
    const t = new DataView(e), n = ps(t);
    console.assert(n === "cmpt", 'CMPTLoader: The magic bytes equal "cmpt".');
    const s = t.getUint32(4, true);
    console.assert(s === 1, 'CMPTLoader: The version listed in the header is "1".');
    const i = t.getUint32(8, true);
    console.assert(i === e.byteLength, "CMPTLoader: The contents buffer length listed in the header matches the file.");
    const r = t.getUint32(12, true), o = [];
    let a = 16;
    for (let c = 0; c < r; c++) {
      const u = new DataView(e, a, 12), h = ps(u), d = u.getUint32(4, true), p = u.getUint32(8, true), m = new Uint8Array(e, a, p);
      o.push({
        type: h,
        buffer: m,
        version: d
      }), a += p;
    }
    return {
      version: s,
      tiles: o
    };
  }
}
class vf extends yf {
  constructor(e = fr) {
    super(), this.manager = e, this.adjustmentTransform = new z(), this.ellipsoid = fs.clone();
  }
  parse(e) {
    const t = super.parse(e), { manager: n, ellipsoid: s, adjustmentTransform: i } = this, r = [];
    for (const o in t.tiles) {
      const { type: a, buffer: c } = t.tiles[o];
      switch (a) {
        case "b3dm": {
          const u = c.slice(), h = new Mu(n);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions, h.adjustmentTransform.copy(i);
          const d = h.parse(u.buffer);
          r.push(d);
          break;
        }
        case "pnts": {
          const u = c.slice(), h = new Pu(n);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions;
          const d = h.parse(u.buffer);
          r.push(d);
          break;
        }
        case "i3dm": {
          const u = c.slice(), h = new Eu(n);
          h.workingPath = this.workingPath, h.fetchOptions = this.fetchOptions, h.ellipsoid.copy(s), h.adjustmentTransform.copy(i);
          const d = h.parse(u.buffer);
          r.push(d);
          break;
        }
      }
    }
    return Promise.all(r).then((o) => {
      const a = new ge();
      return o.forEach((c) => {
        a.add(c.scene);
      }), {
        tiles: o,
        scene: a
      };
    });
  }
}
const Ss = new z();
class xf extends ge {
  constructor(e) {
    super(), this.isTilesGroup = true, this.name = "TilesRenderer.TilesGroup", this.tilesRenderer = e, this.matrixWorldInverse = new z();
  }
  raycast(e, t) {
    return this.tilesRenderer.optimizeRaycast ? (this.tilesRenderer.raycast(e, t), false) : true;
  }
  updateMatrixWorld(e) {
    if (this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldNeedsUpdate || e) {
      this.parent === null ? Ss.copy(this.matrix) : Ss.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false;
      const t = Ss.elements, n = this.matrixWorld.elements;
      let s = false;
      for (let i = 0; i < 16; i++) {
        const r = t[i], o = n[i];
        if (Math.abs(r - o) > Number.EPSILON) {
          s = true;
          break;
        }
      }
      if (s) {
        this.matrixWorld.copy(Ss), this.matrixWorldInverse.copy(Ss).invert();
        const i = this.children;
        for (let r = 0, o = i.length; r < o; r++)
          i[r].updateMatrixWorld();
      }
    }
  }
  updateWorldMatrix(e, t) {
    this.parent && e && this.parent.updateWorldMatrix(e, false), this.updateMatrixWorld(true);
  }
}
const Su = new yt(), Hr = new P(), wi = [];
function Cu(l15, e) {
  return l15.distance - e.distance;
}
function Lu(l15, e, t, n) {
  const { scene: s } = l15.cached;
  t.invokeOnePlugin((r) => r.raycastTile && r.raycastTile(l15, s, e, n)) || e.intersectObject(s, true, n);
}
function Tf(l15, e, t) {
  Lu(l15, e, t, wi), wi.sort(Cu);
  const n = wi[0] || null;
  return wi.length = 0, n;
}
function Ru(l15) {
  return "__used" in l15;
}
function Du(l15, e, t, n = null) {
  const { group: s, activeTiles: i } = l15;
  n === null && (n = Su, n.copy(t.ray).applyMatrix4(s.matrixWorldInverse));
  const r = [], o = e.children;
  for (let u = 0, h = o.length; u < h; u++) {
    const d = o[u];
    if (!Ru(d) || !d.__used)
      continue;
    d.cached.boundingVolume.intersectRay(n, Hr) !== null && (Hr.applyMatrix4(s.matrixWorld), r.push({
      distance: Hr.distanceToSquared(t.ray.origin),
      tile: d
    }));
  }
  r.sort(Cu);
  let a = null, c = 1 / 0;
  if (i.has(e)) {
    const u = Tf(e, t, l15);
    u && (a = u, c = u.distance * u.distance);
  }
  for (let u = 0, h = r.length; u < h; u++) {
    const d = r[u], p = d.distance, m = d.tile;
    if (p > c)
      break;
    const f = Du(l15, m, t, n);
    if (f) {
      const g = f.distance * f.distance;
      g < c && (a = f, c = g);
    }
  }
  return a;
}
function Ou(l15, e, t, n, s = null) {
  if (!Ru(e))
    return;
  const { group: i, activeTiles: r } = l15, { boundingVolume: o } = e.cached;
  if (s === null && (s = Su, s.copy(t.ray).applyMatrix4(i.matrixWorldInverse)), !e.__used || !o.intersectsRay(s))
    return;
  r.has(e) && Lu(e, t, l15, n);
  const a = e.children;
  for (let c = 0, u = a.length; c < u; c++)
    Ou(l15, a[c], t, n, s);
}
const Ai = new P(), Mi = new P(), Be = new P(), Pi = new yt();
class Ol {
  constructor(e = new ua(), t = new z()) {
    this.box = e.clone(), this.transform = t.clone(), this.inverseTransform = new z(), this.points = new Array(8).fill().map(() => new P()), this.planes = new Array(6).fill().map(() => new ri());
  }
  copy(e) {
    return this.box.copy(e.box), this.transform.copy(e.transform), this.update(), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Clamps the given point within the bounds of this OBB
   * @param {Vector3} point
   * @param {Vector3} result
   * @returns {Vector3}
   */
  clampPoint(e, t) {
    return t.copy(e).applyMatrix4(this.inverseTransform).clamp(this.box.min, this.box.max).applyMatrix4(this.transform);
  }
  /**
   * Returns the distance from any edge of this OBB to the specified point.
   * If the point lies inside of this box, the distance will be 0.
   * @param {Vector3} point
   * @returns {number}
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Be).distanceTo(e);
  }
  containsPoint(e) {
    return Be.copy(e).applyMatrix4(this.inverseTransform), this.box.containsPoint(Be);
  }
  // returns boolean indicating whether the ray has intersected the obb
  intersectsRay(e) {
    return Pi.copy(e).applyMatrix4(this.inverseTransform), Pi.intersectsBox(this.box);
  }
  // Sets "target" equal to the intersection point.
  // Returns "null" if no intersection found.
  intersectRay(e, t) {
    return Pi.copy(e).applyMatrix4(this.inverseTransform), Pi.intersectBox(this.box, t) ? (t.applyMatrix4(this.transform), t) : null;
  }
  update() {
    const { points: e, inverseTransform: t, transform: n, box: s } = this;
    t.copy(n).invert();
    const { min: i, max: r } = s;
    let o = 0;
    for (let a = -1; a <= 1; a += 2)
      for (let c = -1; c <= 1; c += 2)
        for (let u = -1; u <= 1; u += 2)
          e[o].set(
            a < 0 ? i.x : r.x,
            c < 0 ? i.y : r.y,
            u < 0 ? i.z : r.z
          ).applyMatrix4(n), o++;
    this.updatePlanes();
  }
  updatePlanes() {
    Ai.copy(this.box.min).applyMatrix4(this.transform), Mi.copy(this.box.max).applyMatrix4(this.transform), Be.set(0, 0, 1).transformDirection(this.transform), this.planes[0].setFromNormalAndCoplanarPoint(Be, Ai), this.planes[1].setFromNormalAndCoplanarPoint(Be, Mi).negate(), Be.set(0, 1, 0).transformDirection(this.transform), this.planes[2].setFromNormalAndCoplanarPoint(Be, Ai), this.planes[3].setFromNormalAndCoplanarPoint(Be, Mi).negate(), Be.set(1, 0, 0).transformDirection(this.transform), this.planes[4].setFromNormalAndCoplanarPoint(Be, Ai), this.planes[5].setFromNormalAndCoplanarPoint(Be, Mi).negate();
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Be), Be.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsFrustum(e) {
    return this._intersectsPlaneShape(e.planes, e.points);
  }
  intersectsOBB(e) {
    return this._intersectsPlaneShape(e.planes, e.points);
  }
  // takes a series of 6 planes that define and enclosed shape and the 8 points that lie at the corners
  // of that shape to determine whether the OBB is intersected with.
  _intersectsPlaneShape(e, t) {
    const n = this.points, s = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = e[i];
      let o = -1 / 0;
      for (let a = 0; a < 8; a++) {
        const c = n[a], u = r.distanceToPoint(c);
        o = o < u ? u : o;
      }
      if (o < 0)
        return false;
    }
    for (let i = 0; i < 6; i++) {
      const r = s[i];
      let o = -1 / 0;
      for (let a = 0; a < 8; a++) {
        const c = t[a], u = r.distanceToPoint(c);
        o = o < u ? u : o;
      }
      if (o < 0)
        return false;
    }
    return true;
  }
}
const Jt = Math.PI, Ei = Jt / 2, Cs = new P(), zn = new P(), Gn = new P(), Il = new z();
let Us = 0;
const jr = [];
function bf(l15 = false) {
  return l15 ? (jr[Us] || (jr[Us] = new P()), Us++, jr[Us - 1]) : new P();
}
function kl() {
  Us = 0;
}
class Iu extends ba {
  constructor(e, t, n, s = -Ei, i = Ei, r = 0, o = 2 * Jt, a = 0, c = 0) {
    super(e, t, n), this.latStart = s, this.latEnd = i, this.lonStart = r, this.lonEnd = o, this.heightStart = a, this.heightEnd = c;
  }
  _getPoints(e = false) {
    const {
      latStart: t,
      latEnd: n,
      lonStart: s,
      lonEnd: i,
      heightStart: r,
      heightEnd: o
    } = this, a = k.mapLinear(0.5, 0, 1, t, n), c = k.mapLinear(0.5, 0, 1, s, i), u = Math.floor(s / Ei) * Ei, h = [
      [-Jt / 2, 0],
      [Jt / 2, 0],
      [0, u],
      [0, u + Jt / 2],
      [0, u + Jt],
      [0, u + 3 * Jt / 2],
      [t, i],
      [n, i],
      [t, s],
      [n, s],
      [0, s],
      [0, i],
      [a, c],
      [t, c],
      [n, c],
      [a, s],
      [a, i]
    ], d = [], p = h.length;
    for (let m = 0; m <= 1; m++) {
      const f = k.mapLinear(m, 0, 1, r, o);
      for (let g = 0, _ = p; g < _; g++) {
        const [y, v] = h[g];
        if (y >= t && y <= n && v >= s && v <= i) {
          const x = bf(e);
          d.push(x), this.getCartographicToPosition(y, v, f, x);
        }
      }
    }
    return d;
  }
  getBoundingBox(e, t) {
    kl();
    const {
      latStart: n,
      latEnd: s,
      lonStart: i,
      lonEnd: r
    } = this;
    if (s - n < Jt / 2) {
      const c = k.mapLinear(0.5, 0, 1, n, s), u = k.mapLinear(0.5, 0, 1, i, r);
      this.getCartographicToNormal(c, u, Gn), zn.set(0, 0, 1), Cs.crossVectors(zn, Gn), zn.crossVectors(Cs, Gn), t.makeBasis(Cs, zn, Gn);
    } else
      Cs.set(1, 0, 0), zn.set(0, 1, 0), Gn.set(0, 0, 1), t.makeBasis(Cs, zn, Gn);
    Il.copy(t).invert();
    const a = this._getPoints(true);
    for (let c = 0, u = a.length; c < u; c++)
      a[c].applyMatrix4(Il);
    e.makeEmpty(), e.setFromPoints(a);
  }
  getBoundingSphere(e, t) {
    kl();
    const n = this._getPoints(true);
    e.makeEmpty(), e.setFromPoints(n, t);
  }
}
const Rt = new P(), Dt = new P(), Ot = new P(), Fl = new P(), Nl = new P();
class wf {
  constructor() {
    this.sphere = null, this.obb = null, this.region = null, this.regionObb = null;
  }
  intersectsRay(e) {
    const t = this.sphere, n = this.obb || this.regionObb;
    return !(t && !e.intersectsSphere(t) || n && !n.intersectsRay(e));
  }
  intersectRay(e, t = null) {
    const n = this.sphere, s = this.obb || this.regionObb;
    let i = -1 / 0, r = -1 / 0;
    n && e.intersectSphere(n, Fl) && (i = n.containsPoint(e.origin) ? 0 : e.origin.distanceToSquared(Fl)), s && s.intersectRay(e, Nl) && (r = s.containsPoint(e.origin) ? 0 : e.origin.distanceToSquared(Nl));
    const o = Math.max(i, r);
    return o === -1 / 0 ? null : (e.at(Math.sqrt(o), t), t);
  }
  distanceToPoint(e) {
    const t = this.sphere, n = this.obb || this.regionObb;
    let s = -1 / 0, i = -1 / 0;
    return t && (s = Math.max(t.distanceToPoint(e), 0)), n && (i = n.distanceToPoint(e)), s > i ? s : i;
  }
  intersectsFrustum(e) {
    const t = this.obb || this.regionObb, n = this.sphere;
    return n && !e.intersectsSphere(n) || t && !t.intersectsFrustum(e) ? false : !!(n || t);
  }
  intersectsSphere(e) {
    const t = this.obb || this.regionObb, n = this.sphere;
    return n && !n.intersectsSphere(e) || t && !t.intersectsSphere(e) ? false : !!(n || t);
  }
  intersectsOBB(e) {
    const t = this.obb || this.regionObb, n = this.sphere;
    return n && !e.intersectsSphere(n) || t && !t.intersectsOBB(e) ? false : !!(n || t);
  }
  getOBB(e, t) {
    const n = this.obb || this.regionObb;
    n ? (e.copy(n.box), t.copy(n.transform)) : (this.getAABB(e), t.identity());
  }
  getAABB(e) {
    if (this.sphere)
      this.sphere.getBoundingBox(e);
    else {
      const t = this.obb || this.regionObb;
      e.copy(t.box).applyMatrix4(t.transform);
    }
  }
  getSphere(e) {
    if (this.sphere)
      e.copy(this.sphere);
    else if (this.region)
      this.region.getBoundingSphere(e);
    else {
      const t = this.obb || this.regionObb;
      t.box.getBoundingSphere(e), e.applyMatrix4(t.transform);
    }
  }
  setObbData(e, t) {
    const n = new Ol();
    Rt.set(e[3], e[4], e[5]), Dt.set(e[6], e[7], e[8]), Ot.set(e[9], e[10], e[11]);
    const s = Rt.length(), i = Dt.length(), r = Ot.length();
    Rt.normalize(), Dt.normalize(), Ot.normalize(), s === 0 && Rt.crossVectors(Dt, Ot), i === 0 && Dt.crossVectors(Rt, Ot), r === 0 && Ot.crossVectors(Rt, Dt), n.transform.set(
      Rt.x,
      Dt.x,
      Ot.x,
      e[0],
      Rt.y,
      Dt.y,
      Ot.y,
      e[1],
      Rt.z,
      Dt.z,
      Ot.z,
      e[2],
      0,
      0,
      0,
      1
    ).premultiply(t), n.box.min.set(-s, -i, -r), n.box.max.set(s, i, r), n.update(), this.obb = n;
  }
  setSphereData(e, t, n, s, i) {
    const r = new kn();
    r.center.set(e, t, n), r.radius = s, r.applyMatrix4(i), this.sphere = r;
  }
  setRegionData(e, t, n, s, i, r, o) {
    const a = new Iu(
      ...e.radius,
      n,
      i,
      t,
      s,
      r,
      o
    ), c = new Ol();
    a.getBoundingBox(c.box, c.transform), c.update(), this.region = a, this.regionObb = c;
  }
}
const Af = new rd();
function Mf(l15, e, t, n) {
  const s = Af.set(
    l15.normal.x,
    l15.normal.y,
    l15.normal.z,
    e.normal.x,
    e.normal.y,
    e.normal.z,
    t.normal.x,
    t.normal.y,
    t.normal.z
  );
  return n.set(-l15.constant, -e.constant, -t.constant), n.applyMatrix3(s.invert()), n;
}
class Pf extends id {
  constructor() {
    super(), this.points = Array(8).fill().map(() => new P());
  }
  setFromProjectionMatrix(e, t) {
    return super.setFromProjectionMatrix(e, t), this.calculateFrustumPoints(), this;
  }
  calculateFrustumPoints() {
    const { planes: e, points: t } = this;
    [
      [e[0], e[3], e[4]],
      // Near top left
      [e[1], e[3], e[4]],
      // Near top right
      [e[0], e[2], e[4]],
      // Near bottom left
      [e[1], e[2], e[4]],
      // Near bottom right
      [e[0], e[3], e[5]],
      // Far top left
      [e[1], e[3], e[5]],
      // Far top right
      [e[0], e[2], e[5]],
      // Far bottom left
      [e[1], e[2], e[5]]
      // Far bottom right
    ].forEach((s, i) => {
      Mf(s[0], s[1], s[2], t[i]);
    });
  }
}
function Ef(l15) {
  const { TextureUtils: e } = B;
  if (!e)
    return 0;
  const t = /* @__PURE__ */ new Set();
  let n = 0;
  return l15.traverse((s) => {
    if (s.geometry && !t.has(s.geometry) && (n += Sp(s.geometry), t.add(s.geometry)), s.material) {
      const i = s.material;
      for (const r in i) {
        const o = i[r];
        if (o && o.isTexture && !t.has(o)) {
          const { format: a, type: c, image: u } = o, { width: h, height: d } = u, p = e.getByteLength(h, d, a, c);
          n += o.generateMipmaps ? p * 4 / 3 : p, t.add(o);
        }
      }
    }
  }), n;
}
const Ul = new z(), Bl = new aa(), ku = Symbol("INITIAL_FRUSTUM_CULLED"), Si = new z(), Ls = new P(), Vr = new $(), Ci = {
  inView: false,
  error: 1 / 0
}, Sf = new P(1, 0, 0), Cf = new P(0, 1, 0);
function zl(l15, e) {
  l15.traverse((t) => {
    t.frustumCulled = t[ku] && e;
  });
}
class No extends Ap {
  get autoDisableRendererCulling() {
    return this._autoDisableRendererCulling;
  }
  set autoDisableRendererCulling(e) {
    this._autoDisableRendererCulling !== e && (super._autoDisableRendererCulling = e, this.forEachLoadedModel((t) => {
      zl(t, !e);
    }));
  }
  get optimizeRaycast() {
    return this._optimizeRaycast;
  }
  set optimizeRaycast(e) {
    console.warn('TilesRenderer: The "optimizeRaycast" option has been deprecated.'), this._optimizeRaycast = e;
  }
  constructor(...e) {
    super(...e), this.group = new xf(this), this.ellipsoid = fs.clone(), this.cameras = [], this.cameraMap = /* @__PURE__ */ new Map(), this.cameraInfo = [], this._optimizeRaycast = true, this._upRotationMatrix = new z(), this.lruCache.computeMemoryUsageCallback = (n) => n.cached.bytesUsed ?? null, this._autoDisableRendererCulling = true;
    const t = new od();
    t.setURLModifier((n) => this.preprocessURL ? this.preprocessURL(n) : n), this.manager = t, this._listeners = {};
  }
  addEventListener(...e) {
    Ns.prototype.addEventListener.call(this, ...e);
  }
  hasEventListener(...e) {
    Ns.prototype.hasEventListener.call(this, ...e);
  }
  removeEventListener(...e) {
    Ns.prototype.removeEventListener.call(this, ...e);
  }
  dispatchEvent(...e) {
    Ns.prototype.dispatchEvent.call(this, ...e);
  }
  /* Public API */
  getBoundingBox(e) {
    if (!this.root)
      return false;
    const t = this.root.cached.boundingVolume;
    return t ? (t.getAABB(e), true) : false;
  }
  getOrientedBoundingBox(e, t) {
    if (!this.root)
      return false;
    const n = this.root.cached.boundingVolume;
    return n ? (n.getOBB(e, t), true) : false;
  }
  getBoundingSphere(e) {
    if (!this.root)
      return false;
    const t = this.root.cached.boundingVolume;
    return t ? (t.getSphere(e), true) : false;
  }
  forEachLoadedModel(e) {
    this.traverse((t) => {
      const n = t.cached && t.cached.scene;
      n && e(n, t);
    }, null, false);
  }
  raycast(e, t) {
    if (this.root)
      if (e.firstHitOnly) {
        const n = Du(this, this.root, e);
        n && t.push(n);
      } else
        Ou(this, this.root, e, t);
  }
  hasCamera(e) {
    return this.cameraMap.has(e);
  }
  setCamera(e) {
    const t = this.cameras, n = this.cameraMap;
    return n.has(e) ? false : (n.set(e, new $()), t.push(e), this.dispatchEvent({ type: "add-camera", camera: e }), true);
  }
  setResolution(e, t, n) {
    const s = this.cameraMap;
    if (!s.has(e))
      return false;
    const i = t.isVector2 ? t.x : t, r = t.isVector2 ? t.y : n, o = s.get(e);
    return (o.width !== i || o.height !== r) && (o.set(i, r), this.dispatchEvent({ type: "camera-resolution-change" })), true;
  }
  setResolutionFromRenderer(e, t) {
    return t.getSize(Vr), this.setResolution(e, Vr.x, Vr.y);
  }
  deleteCamera(e) {
    const t = this.cameras, n = this.cameraMap;
    if (n.has(e)) {
      const s = t.indexOf(e);
      return t.splice(s, 1), n.delete(e), this.dispatchEvent({ type: "delete-camera", camera: e }), true;
    }
    return false;
  }
  /* Overriden */
  loadRootTileSet(...e) {
    return super.loadRootTileSet(...e).then((t) => {
      const { asset: n, extensions: s = {} } = t;
      switch ((n && n.gltfUpAxis || "y").toLowerCase()) {
        case "x":
          this._upRotationMatrix.makeRotationAxis(Cf, -Math.PI / 2);
          break;
        case "y":
          this._upRotationMatrix.makeRotationAxis(Sf, Math.PI / 2);
          break;
      }
      if ("3DTILES_ellipsoid" in s) {
        const r = s["3DTILES_ellipsoid"], { ellipsoid: o } = this;
        o.name = r.body, r.radii ? o.radius.set(...r.radii) : o.radius.set(1, 1, 1);
      }
      return t;
    });
  }
  update() {
    let e = null;
    if (this.invokeAllPlugins((r) => {
      if (r.doTilesNeedUpdate) {
        const o = r.doTilesNeedUpdate();
        e === null ? e = o : e = !!(e || o);
      }
    }), e === false) {
      this.dispatchEvent({ type: "update-before" }), this.dispatchEvent({ type: "update-after" });
      return;
    }
    this.dispatchEvent({ type: "update-before" });
    const t = this.group, n = this.cameras, s = this.cameraMap, i = this.cameraInfo;
    for (; i.length > n.length; )
      i.pop();
    for (; i.length < n.length; )
      i.push({
        frustum: new Pf(),
        isOrthographic: false,
        sseDenominator: -1,
        // used if isOrthographic:false
        position: new P(),
        invScale: -1,
        pixelSize: 0
        // used if isOrthographic:true
      });
    Ls.setFromMatrixScale(t.matrixWorldInverse), Math.abs(Math.max(Ls.x - Ls.y, Ls.x - Ls.z)) > 1e-6 && console.warn("ThreeTilesRenderer : Non uniform scale used for tile which may cause issues when calculating screen space error.");
    for (let r = 0, o = i.length; r < o; r++) {
      const a = n[r], c = i[r], u = c.frustum, h = c.position, d = s.get(a);
      (d.width === 0 || d.height === 0) && console.warn("TilesRenderer: resolution for camera error calculation is not set.");
      const p = a.projectionMatrix.elements;
      if (c.isOrthographic = p[15] === 1, c.isOrthographic) {
        const m = 2 / p[0], f = 2 / p[5];
        c.pixelSize = Math.max(f / d.height, m / d.width);
      } else
        c.sseDenominator = 2 / p[5] / d.height;
      Si.copy(t.matrixWorld), Si.premultiply(a.matrixWorldInverse), Si.premultiply(a.projectionMatrix), u.setFromProjectionMatrix(Si), h.set(0, 0, 0), h.applyMatrix4(a.matrixWorld), h.applyMatrix4(t.matrixWorldInverse);
    }
    if (super.update(), this.dispatchEvent({ type: "update-after" }), n.length === 0 && this.root) {
      let r = false;
      this.invokeAllPlugins((o) => r = r || !!(o !== this && o.calculateTileViewError)), r === false && console.warn("TilesRenderer: no cameras defined. Cannot update 3d tiles.");
    }
  }
  preprocessNode(e, t, n = null) {
    super.preprocessNode(e, t, n);
    const s = new z();
    if (e.transform) {
      const o = e.transform;
      for (let a = 0; a < 16; a++)
        s.elements[a] = o[a];
    }
    n && s.premultiply(n.cached.transform);
    const i = new z().copy(s).invert(), r = new wf();
    "sphere" in e.boundingVolume && r.setSphereData(...e.boundingVolume.sphere, s), "box" in e.boundingVolume && r.setObbData(e.boundingVolume.box, s), "region" in e.boundingVolume && r.setRegionData(this.ellipsoid, ...e.boundingVolume.region), e.cached = {
      transform: s,
      transformInverse: i,
      active: false,
      boundingVolume: r,
      metadata: null,
      scene: null,
      geometry: null,
      materials: null,
      textures: null
    };
  }
  async parseTile(e, t, n, s, i) {
    const r = t.cached, o = s.split(/[\\/]/g);
    o.pop();
    const a = o.join("/"), c = this.fetchOptions, u = this.manager;
    let h = null;
    const d = r.transform, p = this._upRotationMatrix, m = (ps(e) || n).toLowerCase();
    switch (m) {
      case "b3dm": {
        const T = new Mu(u);
        T.workingPath = a, T.fetchOptions = c, T.adjustmentTransform.copy(p), h = T.parse(e);
        break;
      }
      case "pnts": {
        const T = new Pu(u);
        T.workingPath = a, T.fetchOptions = c, h = T.parse(e);
        break;
      }
      case "i3dm": {
        const T = new Eu(u);
        T.workingPath = a, T.fetchOptions = c, T.adjustmentTransform.copy(p), T.ellipsoid.copy(this.ellipsoid), h = T.parse(e);
        break;
      }
      case "cmpt": {
        const T = new vf(u);
        T.workingPath = a, T.fetchOptions = c, T.adjustmentTransform.copy(p), T.ellipsoid.copy(this.ellipsoid), h = T.parse(e).then((A) => A.scene);
        break;
      }
      case "gltf":
      case "glb": {
        const T = u.getHandler("path.gltf") || u.getHandler("path.glb") || new Ta(u);
        T.setWithCredentials(c.credentials === "include"), T.setRequestHeader(c.headers || {}), c.credentials === "include" && c.mode === "cors" && T.setCrossOrigin("use-credentials");
        let A = T.resourcePath || T.path || a;
        !/[\\/]$/.test(A) && A.length && (A += "/"), h = T.parseAsync(e, A).then((w) => {
          w.scene = w.scene || new ge();
          const { scene: M } = w;
          return M.updateMatrix(), M.matrix.multiply(p).decompose(M.position, M.quaternion, M.scale), w;
        });
        break;
      }
      default: {
        h = this.invokeOnePlugin((T) => T.parseToMesh && T.parseToMesh(e, t, n, s, i));
        break;
      }
    }
    const f = await h;
    if (f === null)
      throw new Error(`TilesRenderer: Content type "${m}" not supported.`);
    let g, _;
    f.isObject3D ? (g = f, _ = null) : (g = f.scene, _ = f), await this.invokeAllPlugins((T) => T.processTileModel && T.processTileModel(g, t)), g.updateMatrix(), g.matrix.premultiply(d), g.matrix.decompose(g.position, g.quaternion, g.scale), g.traverse((T) => {
      T[ku] = T.frustumCulled;
    }), zl(g, !this.autoDisableRendererCulling);
    const y = [], v = [], x = [];
    if (g.traverse((T) => {
      if (T.geometry && v.push(T.geometry), T.material) {
        const A = T.material;
        y.push(T.material);
        for (const w in A) {
          const M = A[w];
          M && M.isTexture && x.push(M);
        }
      }
    }), i.aborted) {
      for (let T = 0, A = x.length; T < A; T++) {
        const w = x[T];
        w.image instanceof ImageBitmap && w.image.close(), w.dispose();
      }
      return;
    }
    r.materials = y, r.geometry = v, r.textures = x, r.scene = g, r.metadata = _, r.bytesUsed = Ef(g);
  }
  disposeTile(e) {
    super.disposeTile(e);
    const t = e.cached;
    if (t.scene) {
      const n = t.materials, s = t.geometry, i = t.textures, r = t.scene.parent;
      t.scene.traverse((o) => {
        o.userData.meshFeatures && o.userData.meshFeatures.dispose(), o.userData.structuralMetadata && o.userData.structuralMetadata.dispose();
      });
      for (let o = 0, a = s.length; o < a; o++)
        s[o].dispose();
      for (let o = 0, a = n.length; o < a; o++)
        n[o].dispose();
      for (let o = 0, a = i.length; o < a; o++) {
        const c = i[o];
        c.image instanceof ImageBitmap && c.image.close(), c.dispose();
      }
      r && r.remove(t.scene), this.dispatchEvent({
        type: "dispose-model",
        scene: t.scene,
        tile: e
      }), t.scene = null, t.materials = null, t.textures = null, t.geometry = null, t.metadata = null;
    }
  }
  setTileVisible(e, t) {
    const n = e.cached.scene, s = this.group;
    t ? n && (s.add(n), n.updateMatrixWorld(true)) : n && s.remove(n), super.setTileVisible(e, t), this.dispatchEvent({
      type: "tile-visibility-change",
      scene: n,
      tile: e,
      visible: t
    });
  }
  calculateTileViewError(e, t) {
    const n = e.cached, s = this.cameras, i = this.cameraInfo, r = n.boundingVolume;
    let o = false, a = -1 / 0, c = 1 / 0, u = -1 / 0, h = 1 / 0;
    for (let d = 0, p = s.length; d < p; d++) {
      const m = i[d];
      let f, g;
      if (m.isOrthographic) {
        const y = m.pixelSize;
        f = e.geometricError / y, g = 1 / 0;
      } else {
        const y = m.sseDenominator;
        g = r.distanceToPoint(m.position), f = e.geometricError / (g * y);
      }
      const _ = i[d].frustum;
      r.intersectsFrustum(_) && (o = true, a = Math.max(a, f), c = Math.min(c, g)), u = Math.max(u, f), h = Math.min(h, g);
    }
    this.invokeAllPlugins((d) => {
      d !== this && d.calculateTileViewError && (d.calculateTileViewError(e, Ci), Ci.inView && (o = true, a = Math.max(a, Ci.error)), u = Math.max(u, Ci.error));
    }), o ? (t.inView = true, t.error = a, t.distanceFromCamera = c) : (t.inView = false, t.error = u, t.distanceFromCamera = h);
  }
  // adjust the rotation of the group such that Y is altitude, X is North, and Z is East
  setLatLonToYUp(e, t) {
    console.warn("TilesRenderer: setLatLonToYUp is deprecated. Use the ReorientationPlugin, instead.");
    const { ellipsoid: n, group: s } = this;
    Bl.set(Math.PI / 2, Math.PI / 2, 0), Ul.makeRotationFromEuler(Bl), n.getEastNorthUpFrame(e, t, 0, s.matrix).multiply(Ul).invert().decompose(
      s.position,
      s.quaternion,
      s.scale
    ), s.updateMatrixWorld(true);
  }
  dispose() {
    super.dispose(), this.group.removeFromParent();
  }
}
class Lf extends et {
  constructor() {
    super(new ha(0, 0), new Rf()), this.renderOrder = 1 / 0;
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    e.getSize(t.resolution.value);
  }
  updateMatrixWorld() {
    this.matrixWorld.makeTranslation(this.position);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Rf extends ad {
  constructor() {
    super({
      depthWrite: false,
      depthTest: false,
      transparent: true,
      uniforms: {
        resolution: { value: new $() },
        size: { value: 15 },
        thickness: { value: 2 },
        opacity: { value: 1 }
      },
      vertexShader: (
        /* glsl */
        `

				uniform float pixelRatio;
				uniform float size;
				uniform float thickness;
				uniform vec2 resolution;
				varying vec2 vUv;

				void main() {

					vUv = uv;

					float aspect = resolution.x / resolution.y;
					vec2 offset = uv * 2.0 - vec2( 1.0 );
					offset.y *= aspect;

					vec4 screenPoint = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
					screenPoint.xy += offset * ( size + thickness ) * screenPoint.w / resolution.x;

					gl_Position = screenPoint;

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform float size;
				uniform float thickness;
				uniform float opacity;

				varying vec2 vUv;
				void main() {

					float ht = 0.5 * thickness;
					float planeDim = size + thickness;
					float offset = ( planeDim - ht - 2.0 ) / planeDim;
					float texelThickness = ht / planeDim;

					vec2 vec = vUv * 2.0 - vec2( 1.0 );
					float dist = abs( length( vec ) - offset );
					float fw = fwidth( dist ) * 0.5;
					float a = smoothstep( texelThickness - fw, texelThickness + fw, dist );

					gl_FragColor = vec4( 1, 1, 1, opacity * ( 1.0 - a ) );

				}
			`
      )
    });
  }
}
const Gl = new $(), Hl = new $();
class Df {
  constructor() {
    this.domElement = null, this.buttons = 0, this.pointerType = null, this.pointerOrder = [], this.previousPositions = {}, this.pointerPositions = {}, this.startPositions = {}, this.pointerSetThisFrame = {}, this.hoverPosition = new $(), this.hoverSet = false;
  }
  reset() {
    this.buttons = 0, this.pointerType = null, this.pointerOrder = [], this.previousPositions = {}, this.pointerPositions = {}, this.startPositions = {}, this.pointerSetThisFrame = {}, this.hoverPosition = new $(), this.hoverSet = false;
  }
  // The pointers can be set multiple times per frame so track whether the pointer has
  // been set this frame or not so we don't overwrite the previous position and lose information
  // about pointer movement
  updateFrame() {
    const { previousPositions: e, pointerPositions: t } = this;
    for (const n in t)
      e[n].copy(t[n]);
  }
  setHoverEvent(e) {
    (e.pointerType === "mouse" || e.type === "wheel") && (this.getAdjustedPointer(e, this.hoverPosition), this.hoverSet = true);
  }
  getLatestPoint(e) {
    return this.pointerType !== null ? (this.getCenterPoint(e), e) : this.hoverSet ? (e.copy(this.hoverPosition), e) : null;
  }
  // get the pointer position in the coordinate system of the target element
  getAdjustedPointer(e, t) {
    const s = (this.domElement ? this.domElement : e.target).getBoundingClientRect(), i = e.clientX - s.left, r = e.clientY - s.top;
    t.set(i, r);
  }
  addPointer(e) {
    const t = e.pointerId, n = new $();
    this.getAdjustedPointer(e, n), this.pointerOrder.push(t), this.pointerPositions[t] = n, this.previousPositions[t] = n.clone(), this.startPositions[t] = n.clone(), this.getPointerCount() === 1 && (this.pointerType = e.pointerType, this.buttons = e.buttons);
  }
  updatePointer(e) {
    const t = e.pointerId;
    return t in this.pointerPositions ? (this.getAdjustedPointer(e, this.pointerPositions[t]), true) : false;
  }
  deletePointer(e) {
    const t = e.pointerId, n = this.pointerOrder;
    n.splice(n.indexOf(t), 1), delete this.pointerPositions[t], delete this.previousPositions[t], delete this.startPositions[t], this.getPointerCount.length === 0 && (this.buttons = 0, this.pointerType = null);
  }
  getPointerCount() {
    return this.pointerOrder.length;
  }
  getCenterPoint(e, t = this.pointerPositions) {
    const n = this.pointerOrder;
    if (this.getPointerCount() === 1 || this.getPointerType() === "mouse") {
      const s = n[0];
      return e.copy(t[s]), e;
    } else if (this.getPointerCount() === 2) {
      const s = this.pointerOrder[0], i = this.pointerOrder[1], r = t[s], o = t[i];
      return e.addVectors(r, o).multiplyScalar(0.5), e;
    }
    return null;
  }
  getPreviousCenterPoint(e) {
    return this.getCenterPoint(e, this.previousPositions);
  }
  getStartCenterPoint(e) {
    return this.getCenterPoint(e, this.startPositions);
  }
  getMoveDistance() {
    return this.getCenterPoint(Gl), this.getPreviousCenterPoint(Hl), Gl.sub(Hl).length();
  }
  getTouchPointerDistance(e = this.pointerPositions) {
    if (this.getPointerCount() <= 1 || this.getPointerType() === "mouse")
      return 0;
    const { pointerOrder: t } = this, n = t[0], s = t[1], i = e[n], r = e[s];
    return i.distanceTo(r);
  }
  getPreviousTouchPointerDistance() {
    return this.getTouchPointerDistance(this.previousPositions);
  }
  getStartTouchPointerDistance() {
    return this.getTouchPointerDistance(this.startPositions);
  }
  getPointerType() {
    return this.pointerType;
  }
  isPointerTouch() {
    return this.getPointerType() === "touch";
  }
  getPointerButtons() {
    return this.buttons;
  }
  isLeftClicked() {
    return !!(this.buttons & 1);
  }
  isRightClicked() {
    return !!(this.buttons & 2);
  }
}
const sn = new z(), jl = new yt(), Uo = new P();
function es(l15, e, t) {
  return t.makeTranslation(-l15.x, -l15.y, -l15.z), sn.makeRotationFromQuaternion(e), t.premultiply(sn), sn.makeTranslation(l15.x, l15.y, l15.z), t.premultiply(sn), t;
}
function Wn(l15, e, t, n) {
  n.x = (l15 - t.offsetLeft) / t.clientWidth * 2 - 1, n.y = -((e - t.offsetTop) / t.clientHeight) * 2 + 1, n.isVector3 && (n.z = 0);
}
function Wr(l15, e, t) {
  return e.intersectRay(l15, t) ? t : (sn.makeScale(...e.radius).invert(), jl.copy(l15).applyMatrix4(sn), Uo.set(0, 0, 0), jl.closestPointToPoint(Uo, t).normalize(), sn.makeScale(...e.radius), t.applyMatrix4(sn));
}
function Of(l15, e, t) {
  const n = l15.origin.length(), s = Math.acos(e / n);
  t.copy(l15.origin).multiplyScalar(-1).normalize();
  const i = Uo.crossVectors(t, l15.direction).normalize();
  t.multiplyScalar(-1).applyAxisAngle(i, -s).normalize().multiplyScalar(e);
}
function ct(l15, e, t) {
  const n = l15 instanceof yt ? l15 : l15.ray, { origin: s, direction: i } = n;
  s.set(e.x, e.y, -1).unproject(t), i.set(e.x, e.y, 1).unproject(t).sub(s), l15.isRay || (l15.near = 0, l15.far = i.length(), l15.camera = t), i.normalize();
}
const _t = 0, en = 1, It = 2, $n = 3, $r = 4, Kr = 0.05, qr = 0.025, Zt = /* @__PURE__ */ new z(), Li = /* @__PURE__ */ new z(), qe = /* @__PURE__ */ new P(), H = /* @__PURE__ */ new P(), Ri = /* @__PURE__ */ new P(), Di = /* @__PURE__ */ new P(), Me = /* @__PURE__ */ new P(), rt = /* @__PURE__ */ new P(), Xr = /* @__PURE__ */ new P(), Oi = /* @__PURE__ */ new P(), mt = /* @__PURE__ */ new Se(), Vl = /* @__PURE__ */ new ri(), de = /* @__PURE__ */ new P(), Ii = /* @__PURE__ */ new P(), Yr = /* @__PURE__ */ new P(), If = /* @__PURE__ */ new Se(), J = /* @__PURE__ */ new yt(), Rs = /* @__PURE__ */ new $(), be = /* @__PURE__ */ new $(), Wl = /* @__PURE__ */ new $(), Ds = /* @__PURE__ */ new $(), Zr = /* @__PURE__ */ new $(), $l = /* @__PURE__ */ new $(), Kl = { type: "change" }, ql = { type: "start" }, Xl = { type: "end" };
class kf extends Ns {
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    e !== this.enabled && (this._enabled = e, this.resetState(), this.pointerTracker.reset(), this.enabled || (this.dragInertia.set(0, 0, 0), this.rotationInertia.set(0, 0)));
  }
  constructor(e = null, t = null, n = null, s = null) {
    super(), this.isEnvironmentControls = true, this.domElement = null, this.camera = null, this.scene = null, this.tilesRenderer = null, this._enabled = true, this.cameraRadius = 5, this.rotationSpeed = 1, this.minAltitude = 0, this.maxAltitude = 0.45 * Math.PI, this.minDistance = 10, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.zoomSpeed = 1, this.adjustHeight = true, this.enableDamping = false, this.dampingFactor = 0.15, this.fallbackPlane = new ri(new P(0, 1, 0), 0), this.useFallbackPlane = true, this.scaleZoomOrientationAtEdges = false, this.autoAdjustCameraRotation = true, this.state = _t, this.pointerTracker = new Df(), this.needsUpdate = false, this.actionHeightOffset = 0, this.pivotPoint = new P(), this.zoomDirectionSet = false, this.zoomPointSet = false, this.zoomDirection = new P(), this.zoomPoint = new P(), this.zoomDelta = 0, this.rotationInertiaPivot = new P(), this.rotationInertia = new $(), this.dragInertia = new P(), this.inertiaTargetDistance = 1 / 0, this.inertiaStableFrames = 0, this.pivotMesh = new Lf(), this.pivotMesh.raycast = () => {
    }, this.pivotMesh.scale.setScalar(0.25), this.raycaster = new ld(), this.raycaster.firstHitOnly = true, this.up = new P(0, 1, 0), this.clock = new cd(), this._detachCallback = null, this._upInitialized = false, this._lastUsedState = _t, this._zoomPointWasSet = false, this._tilesOnChangeCallback = () => this.zoomPointSet = false, n && this.attach(n), t && this.setCamera(t), e && this.setScene(e), s && this.setTilesRenderer(s);
  }
  setScene(e) {
    this.scene = e;
  }
  setCamera(e) {
    this.camera = e, this._upInitialized = false, this.zoomDirectionSet = false, this.zoomPointSet = false, this.needsUpdate = true, this.raycaster.camera = e, this.resetState();
  }
  setTilesRenderer(e) {
    console.warn('EnvironmentControls: "setTilesRenderer" has been deprecated. Use "setScene" and "setEllipsoid", instead.'), this.tilesRenderer = e, this.tilesRenderer !== null && this.setScene(this.tilesRenderer.group);
  }
  attach(e) {
    if (this.domElement)
      throw new Error("EnvironmentControls: Controls already attached to element");
    this.domElement = e, this.pointerTracker.domElement = e, e.style.touchAction = "none";
    const t = (c) => {
      this.enabled && c.preventDefault();
    }, n = (c) => {
      if (!this.enabled)
        return;
      c.preventDefault();
      const {
        camera: u,
        raycaster: h,
        domElement: d,
        up: p,
        pivotMesh: m,
        pointerTracker: f,
        scene: g,
        pivotPoint: _,
        enabled: y
      } = this;
      if (f.addPointer(c), this.needsUpdate = true, f.isPointerTouch()) {
        if (m.visible = false, f.getPointerCount() === 0)
          d.setPointerCapture(c.pointerId);
        else if (f.getPointerCount() > 2) {
          this.resetState();
          return;
        }
      }
      f.getCenterPoint(be), Wn(be.x, be.y, d, be), ct(h, be, u);
      const v = Math.abs(h.ray.direction.dot(p));
      if (v < Kr || v < qr)
        return;
      const x = this._raycast(h);
      x && (f.getPointerCount() === 2 || f.isRightClicked() || f.isLeftClicked() && c.shiftKey ? (this.setState(f.isPointerTouch() ? $r : It), _.copy(x.point), m.position.copy(x.point), m.visible = f.isPointerTouch() ? false : y, m.updateMatrixWorld(), g.add(m)) : f.isLeftClicked() && (this.setState(en), _.copy(x.point), m.position.copy(x.point), m.updateMatrixWorld(), g.add(m)));
    };
    let s = false;
    const i = (c) => {
      if (!this.enabled)
        return;
      c.preventDefault();
      const {
        pivotMesh: u,
        enabled: h
      } = this;
      this.zoomDirectionSet = false, this.zoomPointSet = false, this.state !== _t && (this.needsUpdate = true);
      const { pointerTracker: d } = this;
      d.setHoverEvent(c), d.updatePointer(c) && (d.isPointerTouch() && d.getPointerCount() === 2 && (s || (s = true, queueMicrotask(() => {
        s = false, d.getCenterPoint(Zr);
        const p = d.getStartTouchPointerDistance(), m = d.getTouchPointerDistance(), f = m - p;
        if (this.state === _t || this.state === $r) {
          d.getCenterPoint(Zr), d.getStartCenterPoint($l);
          const g = 2 * window.devicePixelRatio, _ = Zr.distanceTo($l);
          (Math.abs(f) > g || _ > g) && (Math.abs(f) > _ ? (this.setState($n), this.zoomDirectionSet = false) : this.setState(It));
        }
        if (this.state === $n) {
          const g = d.getPreviousTouchPointerDistance();
          this.zoomDelta += m - g, u.visible = false;
        } else this.state === It && (u.visible = h);
      }))), this.dispatchEvent(Kl));
    }, r = (c) => {
      if (!this.enabled)
        return;
      const { pointerTracker: u } = this;
      u.deletePointer(c), u.getPointerType() === "touch" && u.getPointerCount() === 0 && e.releasePointerCapture(c.pointerId), this.resetState(), this.needsUpdate = true;
    }, o = (c) => {
      if (!this.enabled)
        return;
      c.preventDefault();
      const { pointerTracker: u } = this;
      u.setHoverEvent(c), u.updatePointer(c), this.dispatchEvent(ql);
      let h;
      switch (c.deltaMode) {
        case 2:
          h = c.deltaY * 800;
          break;
        case 1:
          h = c.deltaY * 40;
          break;
        case 0:
          h = c.deltaY;
          break;
      }
      const d = Math.sign(h), p = Math.abs(h);
      this.zoomDelta -= 0.25 * d * p, this.needsUpdate = true, this._lastUsedState = $n, this.dispatchEvent(Xl);
    }, a = (c) => {
      if (!this.enabled)
        return;
      const { pointerTracker: u } = this;
      c.buttons !== u.getPointerButtons() && (u.deletePointer(c), this.resetState());
    };
    e.addEventListener("contextmenu", t), e.addEventListener("pointerdown", n), e.addEventListener("pointermove", i), e.addEventListener("pointerup", r), e.addEventListener("wheel", o, { passive: false }), e.addEventListener("pointerenter", a), this._detachCallback = () => {
      e.removeEventListener("contextmenu", t), e.removeEventListener("pointerdown", n), e.removeEventListener("pointermove", i), e.removeEventListener("pointerup", r), e.removeEventListener("wheel", o), e.removeEventListener("pointerenter", a);
    };
  }
  detach() {
    this.domElement = null, this._detachCallback && (this._detachCallback(), this._detachCallback = null, this.pointerTracker.reset());
  }
  // override-able functions for retrieving the up direction at a point
  getUpDirection(e, t) {
    t.copy(this.up);
  }
  getCameraUpDirection(e) {
    this.getUpDirection(this.camera.position, e);
  }
  // returns the active / last used pivot point for the scene
  getPivotPoint(e) {
    let t = null;
    this._lastUsedState === $n ? this._zoomPointWasSet && (t = e.copy(this.zoomPoint)) : (this._lastUsedState === It || this._lastUsedState === en) && (t = e.copy(this.pivotPoint));
    const { camera: n, raycaster: s } = this;
    t !== null && (H.copy(t).project(n), (H.x < -1 || H.x > 1 || H.y < -1 || H.y > 1) && (t = null)), ct(s, { x: 0, y: 0 }, n);
    const i = this._raycast(s);
    return i && (t === null || i.distance < t.distanceTo(s.ray.origin)) && (t = e.copy(i.point)), t;
  }
  resetState() {
    this.state !== _t && this.dispatchEvent(Xl), this.state = _t, this.pivotMesh.removeFromParent(), this.pivotMesh.visible = this.enabled, this.actionHeightOffset = 0;
  }
  setState(e = this.state, t = true) {
    this.state !== e && (this.state === _t && t && this.dispatchEvent(ql), this.pivotMesh.visible = this.enabled, this.dragInertia.set(0, 0, 0), this.rotationInertia.set(0, 0), this.inertiaStableFrames = 0, this.state = e, e !== _t && e !== $r && (this._lastUsedState = e));
  }
  update(e = Math.min(this.clock.getDelta(), 64 / 1e3)) {
    if (!this.enabled || !this.camera || e === 0)
      return;
    const {
      camera: t,
      cameraRadius: n,
      pivotPoint: s,
      up: i,
      state: r,
      adjustHeight: o,
      autoAdjustCameraRotation: a
    } = this;
    t.updateMatrixWorld(), this.getCameraUpDirection(de), this._upInitialized || (this._upInitialized = true, this.up.copy(de)), this.zoomPointSet = false;
    const c = this._inertiaNeedsUpdate(), u = this.needsUpdate || c;
    if (this.needsUpdate || c) {
      const d = this.zoomDelta;
      this._updateZoom(), this._updatePosition(e), this._updateRotation(e), r === en || r === It ? (Me.set(0, 0, -1).transformDirection(t.matrixWorld), this.inertiaTargetDistance = H.copy(s).sub(t.position).dot(Me)) : r === _t && this._updateInertia(e), (r !== _t || d !== 0 || c) && this.dispatchEvent(Kl), this.needsUpdate = false;
    }
    const h = t.isOrthographicCamera ? null : o && this._getPointBelowCamera() || null;
    if (this.getCameraUpDirection(de), this._setFrame(de), (this.state === en || this.state === It) && this.actionHeightOffset !== 0) {
      const { actionHeightOffset: d } = this;
      t.position.addScaledVector(i, -d), s.addScaledVector(i, -d), h && (h.distance -= d);
    }
    if (this.actionHeightOffset = 0, h) {
      const d = h.distance;
      if (d < n) {
        const p = n - d;
        t.position.addScaledVector(i, p), s.addScaledVector(i, p), this.actionHeightOffset = p;
      }
    }
    this.pointerTracker.updateFrame(), u && a && (this.getCameraUpDirection(de), this._alignCameraUp(de, 1), this.getCameraUpDirection(de), this._clampRotation(de));
  }
  // updates the camera to position it based on the constraints of the controls
  adjustCamera(e) {
    const { adjustHeight: t, cameraRadius: n } = this;
    if (e.isPerspectiveCamera) {
      this.getUpDirection(e.position, de);
      const s = t && this._getPointBelowCamera(e.position, de) || null;
      if (s) {
        const i = s.distance;
        i < n && e.position.addScaledVector(de, n - i);
      }
    }
  }
  dispose() {
    this.detach();
  }
  // private
  _updateInertia(e) {
    const {
      rotationInertia: t,
      pivotPoint: n,
      dragInertia: s,
      enableDamping: i,
      dampingFactor: r,
      camera: o,
      cameraRadius: a,
      minDistance: c,
      inertiaTargetDistance: u
    } = this;
    if (!this.enableDamping || this.inertiaStableFrames > 1) {
      s.set(0, 0, 0), t.set(0, 0, 0);
      return;
    }
    const h = Math.pow(2, -e / r), d = Math.max(o.near, a, c, u), f = 0.25 * (2 / (2 * 1e3));
    if (t.lengthSq() > 0) {
      ct(J, H.set(0, 0, -1), o), J.applyMatrix4(o.matrixWorldInverse), J.direction.normalize(), J.recast(-J.direction.dot(J.origin)).at(d / J.direction.z, H), H.applyMatrix4(o.matrixWorld), ct(J, qe.set(f, f, -1), o), J.applyMatrix4(o.matrixWorldInverse), J.direction.normalize(), J.recast(-J.direction.dot(J.origin)).at(d / J.direction.z, qe), qe.applyMatrix4(o.matrixWorld), H.sub(n).normalize(), qe.sub(n).normalize();
      const g = H.angleTo(qe) / e;
      t.multiplyScalar(h), (t.lengthSq() < g ** 2 || !i) && t.set(0, 0);
    }
    if (s.lengthSq() > 0) {
      ct(J, H.set(0, 0, -1), o), J.applyMatrix4(o.matrixWorldInverse), J.direction.normalize(), J.recast(-J.direction.dot(J.origin)).at(d / J.direction.z, H), H.applyMatrix4(o.matrixWorld), ct(J, qe.set(f, f, -1), o), J.applyMatrix4(o.matrixWorldInverse), J.direction.normalize(), J.recast(-J.direction.dot(J.origin)).at(d / J.direction.z, qe), qe.applyMatrix4(o.matrixWorld);
      const g = H.distanceTo(qe) / e;
      s.multiplyScalar(h), (s.lengthSq() < g ** 2 || !i) && s.set(0, 0, 0);
    }
    t.lengthSq() > 0 && this._applyRotation(t.x * e, t.y * e, n), s.lengthSq() > 0 && (o.position.addScaledVector(s, e), o.updateMatrixWorld());
  }
  _inertiaNeedsUpdate() {
    const { rotationInertia: e, dragInertia: t } = this;
    return e.lengthSq() !== 0 || t.lengthSq() !== 0;
  }
  _updateZoom() {
    const {
      zoomPoint: e,
      zoomDirection: t,
      camera: n,
      minDistance: s,
      maxDistance: i,
      pointerTracker: r,
      domElement: o,
      minZoom: a,
      maxZoom: c,
      zoomSpeed: u,
      state: h
    } = this;
    let d = this.zoomDelta;
    if (this.zoomDelta = 0, !(!r.getLatestPoint(be) || d === 0 && h !== $n))
      if (this.rotationInertia.set(0, 0), this.dragInertia.set(0, 0, 0), n.isOrthographicCamera) {
        this._updateZoomDirection();
        const p = this.zoomPointSet || this._updateZoomPoint();
        Ii.unproject(n);
        const m = Math.pow(0.95, Math.abs(d * 0.05));
        let f = d > 0 ? 1 / Math.abs(m) : m;
        f *= u, f > 1 ? c < n.zoom * f && (f = 1) : a > n.zoom * f && (f = 1), n.zoom *= f, n.updateProjectionMatrix(), p && (Wn(be.x, be.y, o, Yr), Yr.unproject(n), n.position.sub(Yr).add(Ii), n.updateMatrixWorld());
      } else {
        this._updateZoomDirection();
        const p = H.copy(t);
        if (this.zoomPointSet || this._updateZoomPoint()) {
          const m = e.distanceTo(n.position);
          if (d < 0) {
            const f = Math.min(0, m - i);
            d = d * m * u * 25e-4, d = Math.max(d, f);
          } else {
            const f = Math.max(0, m - s);
            d = d * Math.max(m - s, 0) * u * 25e-4, d = Math.min(d, f);
          }
          n.position.addScaledVector(t, d), n.updateMatrixWorld();
        } else {
          const m = this._getPointBelowCamera();
          if (m) {
            const f = m.distance;
            p.set(0, 0, -1).transformDirection(n.matrixWorld), n.position.addScaledVector(p, d * f * 0.01), n.updateMatrixWorld();
          }
        }
      }
  }
  _updateZoomDirection() {
    if (this.zoomDirectionSet)
      return;
    const { domElement: e, raycaster: t, camera: n, zoomDirection: s, pointerTracker: i } = this;
    i.getLatestPoint(be), Wn(be.x, be.y, e, Ii), ct(t, Ii, n), s.copy(t.ray.direction).normalize(), this.zoomDirectionSet = true;
  }
  // update the point being zoomed in to based on the zoom direction
  _updateZoomPoint() {
    const {
      camera: e,
      zoomDirectionSet: t,
      zoomDirection: n,
      raycaster: s,
      zoomPoint: i,
      pointerTracker: r,
      domElement: o
    } = this;
    if (this._zoomPointWasSet = false, !t)
      return false;
    e.isOrthographicCamera && r.getLatestPoint(Rs) ? (Wn(Rs.x, Rs.y, o, Rs), ct(s, Rs, e)) : (s.ray.origin.copy(e.position), s.ray.direction.copy(n), s.near = 0, s.far = 1 / 0);
    const a = this._raycast(s);
    return a ? (i.copy(a.point), this.zoomPointSet = true, this._zoomPointWasSet = true, true) : false;
  }
  // returns the point below the camera
  _getPointBelowCamera(e = this.camera.position, t = this.up) {
    const { raycaster: n } = this;
    n.ray.direction.copy(t).multiplyScalar(-1), n.ray.origin.copy(e).addScaledVector(t, 1e5), n.near = 0, n.far = 1 / 0;
    const s = this._raycast(n);
    return s && (s.distance -= 1e5), s;
  }
  // update the drag action
  _updatePosition(e) {
    const {
      raycaster: t,
      camera: n,
      pivotPoint: s,
      up: i,
      pointerTracker: r,
      domElement: o,
      state: a,
      dragInertia: c
    } = this;
    if (a === en) {
      if (r.getCenterPoint(be), Wn(be.x, be.y, o, be), Vl.setFromNormalAndCoplanarPoint(i, s), ct(t, be, n), Math.abs(t.ray.direction.dot(i)) < Kr) {
        const u = Math.acos(Kr);
        Oi.crossVectors(t.ray.direction, i).normalize(), t.ray.direction.copy(i).applyAxisAngle(Oi, u).multiplyScalar(-1);
      }
      if (this.getUpDirection(s, de), Math.abs(t.ray.direction.dot(de)) < qr) {
        const u = Math.acos(qr);
        Oi.crossVectors(t.ray.direction, de).normalize(), t.ray.direction.copy(de).applyAxisAngle(Oi, u).multiplyScalar(-1);
      }
      t.ray.intersectPlane(Vl, H) && (qe.subVectors(s, H), n.position.add(qe), n.updateMatrixWorld(), qe.multiplyScalar(1 / e), r.getMoveDistance() / e < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (c.copy(qe), this.inertiaStableFrames = 0));
    }
  }
  _updateRotation(e) {
    const {
      pivotPoint: t,
      pointerTracker: n,
      domElement: s,
      state: i,
      rotationInertia: r
    } = this;
    i === It && (n.getCenterPoint(be), n.getPreviousCenterPoint(Wl), Ds.subVectors(be, Wl).multiplyScalar(2 * Math.PI / s.clientHeight), this._applyRotation(Ds.x, Ds.y, t), Ds.multiplyScalar(1 / e), n.getMoveDistance() / e < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (r.copy(Ds), this.inertiaStableFrames = 0));
  }
  _applyRotation(e, t, n) {
    if (e === 0 && t === 0)
      return;
    const {
      camera: s,
      minAltitude: i,
      maxAltitude: r,
      rotationSpeed: o
    } = this, a = -e * o;
    let c = t * o;
    Me.set(0, 0, 1).transformDirection(s.matrixWorld), rt.set(1, 0, 0).transformDirection(s.matrixWorld), this.getUpDirection(n, de);
    let u;
    de.dot(Me) > 1 - 1e-10 ? u = 0 : (H.crossVectors(de, Me).normalize(), u = Math.sign(H.dot(rt)) * de.angleTo(Me)), c > 0 ? (c = Math.min(u - i, c), c = Math.max(0, c)) : (c = Math.max(u - r, c), c = Math.min(0, c)), mt.setFromAxisAngle(de, a), es(n, mt, Zt), s.matrixWorld.premultiply(Zt), rt.set(1, 0, 0).transformDirection(s.matrixWorld), mt.setFromAxisAngle(rt, -c), es(n, mt, Zt), s.matrixWorld.premultiply(Zt), s.matrixWorld.decompose(s.position, s.quaternion, H);
  }
  // sets the "up" axis for the current surface of the tile set
  _setFrame(e) {
    const {
      up: t,
      camera: n,
      zoomPoint: s,
      zoomDirectionSet: i,
      zoomPointSet: r,
      scaleZoomOrientationAtEdges: o
    } = this;
    if (i && (r || this._updateZoomPoint())) {
      if (mt.setFromUnitVectors(t, e), o) {
        this.getUpDirection(s, H);
        let a = Math.max(H.dot(t) - 0.6, 0) / 0.4;
        a = k.mapLinear(a, 0, 0.5, 0, 1), a = Math.min(a, 1), n.isOrthographicCamera && (a *= 0.1), mt.slerp(If, 1 - a);
      }
      es(s, mt, Zt), n.updateMatrixWorld(), n.matrixWorld.premultiply(Zt), n.matrixWorld.decompose(n.position, n.quaternion, H), this.zoomDirectionSet = false, this._updateZoomDirection();
    }
    t.copy(e), n.updateMatrixWorld();
  }
  _raycast(e) {
    const { scene: t, useFallbackPlane: n, fallbackPlane: s } = this, i = e.intersectObject(t)[0] || null;
    if (i)
      return i;
    if (n) {
      const r = s;
      if (e.ray.intersectPlane(r, H))
        return {
          point: H.clone(),
          distance: e.ray.origin.distanceTo(H)
        };
    }
    return null;
  }
  // tilt the camera to align with the provided "up" value
  _alignCameraUp(e, t = 1) {
    const { camera: n, state: s, pivotPoint: i, zoomPoint: r, zoomPointSet: o } = this;
    n.updateMatrixWorld(), Me.set(0, 0, -1).transformDirection(n.matrixWorld), rt.set(-1, 0, 0).transformDirection(n.matrixWorld);
    let a = k.mapLinear(1 - Math.abs(Me.dot(e)), 0, 0.2, 0, 1);
    a = k.clamp(a, 0, 1), t *= a, Xr.crossVectors(e, Me), Xr.lerp(rt, 1 - t).normalize(), mt.setFromUnitVectors(rt, Xr), n.quaternion.premultiply(mt);
    let c = null;
    s === en || s === It ? c = Ri.copy(i) : o && (c = Ri.copy(r)), c && (Li.copy(n.matrixWorld).invert(), H.copy(c).applyMatrix4(Li), n.updateMatrixWorld(), H.applyMatrix4(n.matrixWorld), Di.subVectors(c, H), n.position.add(Di)), n.updateMatrixWorld();
  }
  // clamp rotation to the given "up" vector
  _clampRotation(e) {
    const { camera: t, minAltitude: n, maxAltitude: s, state: i, pivotPoint: r, zoomPoint: o, zoomPointSet: a } = this;
    t.updateMatrixWorld(), Me.set(0, 0, 1).transformDirection(t.matrixWorld), rt.set(1, 0, 0).transformDirection(t.matrixWorld);
    let c;
    e.dot(Me) > 1 - 1e-10 ? c = 0 : (H.crossVectors(e, Me), c = Math.sign(H.dot(rt)) * e.angleTo(Me));
    let u;
    if (c > s)
      u = s;
    else if (c < n)
      u = n;
    else
      return;
    Me.copy(e), mt.setFromAxisAngle(rt, u), Me.applyQuaternion(mt).normalize(), H.crossVectors(Me, rt).normalize(), Zt.makeBasis(rt, H, Me), t.quaternion.setFromRotationMatrix(Zt);
    let h = null;
    i === en || i === It ? h = Ri.copy(r) : a && (h = Ri.copy(o)), h && (Li.copy(t.matrixWorld).invert(), H.copy(h).applyMatrix4(Li), t.updateMatrixWorld(), H.applyMatrix4(t.matrixWorld), Di.subVectors(h, H), t.position.add(Di)), t.updateMatrixWorld();
  }
}
const Yl = /* @__PURE__ */ new z(), Hn = /* @__PURE__ */ new z(), ze = /* @__PURE__ */ new P(), Y = /* @__PURE__ */ new P(), kt = /* @__PURE__ */ new P(), Xe = /* @__PURE__ */ new P(), Ff = /* @__PURE__ */ new P(), jn = /* @__PURE__ */ new P(), Ft = /* @__PURE__ */ new Se(), Zl = /* @__PURE__ */ new P(), _n = /* @__PURE__ */ new P(), ee = /* @__PURE__ */ new yt(), Qr = /* @__PURE__ */ new ba(), Os = /* @__PURE__ */ new $(), Ql = {}, Nf = 2550;
class Uf extends kf {
  get tilesGroup() {
    return console.warn('GlobeControls: "tilesGroup" has been deprecated. Use "ellipsoidGroup", instead.'), this.ellipsoidFrame;
  }
  get ellipsoidFrame() {
    return this.ellipsoidGroup.matrixWorld;
  }
  get ellipsoidFrameInverse() {
    const { ellipsoidGroup: e, ellipsoidFrame: t, _ellipsoidFrameInverse: n } = this;
    return e.matrixWorldInverse ? e.matrixWorldInverse : n.copy(t).invert();
  }
  constructor(e = null, t = null, n = null, s = null) {
    super(e, t, n), this.isGlobeControls = true, this._dragMode = 0, this._rotationMode = 0, this.maxZoom = 0.01, this.nearMargin = 0.25, this.farMargin = 0, this.useFallbackPlane = false, this.autoAdjustCameraRotation = false, this.globeInertia = new Se(), this.globeInertiaFactor = 0, this.ellipsoid = fs.clone(), this.ellipsoidGroup = new ge(), this._ellipsoidFrameInverse = new z(), s !== null && this.setTilesRenderer(s);
  }
  setTilesRenderer(e) {
    super.setTilesRenderer(e), e !== null && this.setEllipsoid(e.ellipsoid, e.group);
  }
  setEllipsoid(e, t) {
    this.ellipsoid = e || fs.clone(), this.ellipsoidGroup = t || new ge();
  }
  getPivotPoint(e) {
    const { camera: t, ellipsoidFrame: n, ellipsoidFrameInverse: s, ellipsoid: i } = this;
    return Xe.set(0, 0, -1).transformDirection(t.matrixWorld), ee.origin.copy(t.position), ee.direction.copy(Xe), ee.applyMatrix4(s), Wr(ee, i, Y), Y.applyMatrix4(n), (super.getPivotPoint(e) === null || ze.subVectors(e, ee.origin).dot(ee.direction) > ze.subVectors(Y, ee.origin).dot(ee.direction)) && e.copy(Y), e;
  }
  // get the vector to the center of the provided globe
  getVectorToCenter(e) {
    const { ellipsoidFrame: t, camera: n } = this;
    return e.setFromMatrixPosition(t).sub(n.position);
  }
  // get the distance to the center of the globe
  getDistanceToCenter() {
    return this.getVectorToCenter(Y).length();
  }
  getUpDirection(e, t) {
    const { ellipsoidFrame: n, ellipsoidFrameInverse: s, ellipsoid: i } = this;
    Y.copy(e).applyMatrix4(s), i.getPositionToNormal(Y, t), t.transformDirection(n);
  }
  getCameraUpDirection(e) {
    const { ellipsoidFrame: t, ellipsoidFrameInverse: n, ellipsoid: s, camera: i } = this;
    i.isOrthographicCamera ? (this._getVirtualOrthoCameraPosition(Y), Y.applyMatrix4(n), s.getPositionToNormal(Y, e), e.transformDirection(t)) : this.getUpDirection(i.position, e);
  }
  update(e = Math.min(this.clock.getDelta(), 64 / 1e3)) {
    if (!this.enabled || !this.camera || e === 0)
      return;
    const { camera: t, pivotMesh: n } = this;
    this._isNearControls() ? this.scaleZoomOrientationAtEdges = this.zoomDelta < 0 : (this.state !== _t && this._dragMode !== 1 && this._rotationMode !== 1 && (n.visible = false), this.scaleZoomOrientationAtEdges = false);
    const s = this.needsUpdate || this._inertiaNeedsUpdate();
    super.update(e), this.adjustCamera(t), s && this._isNearControls() && (this.getCameraUpDirection(jn), this._alignCameraUp(jn, 1), this.getCameraUpDirection(jn), this._clampRotation(jn));
  }
  // Updates the passed camera near and far clip planes to encapsulate the ellipsoid from the
  // current position in addition to adjusting the height.
  adjustCamera(e) {
    super.adjustCamera(e);
    const { ellipsoidFrame: t, ellipsoidFrameInverse: n, ellipsoid: s, nearMargin: i, farMargin: r } = this, o = Math.max(...s.radius);
    if (e.isPerspectiveCamera) {
      const a = Y.setFromMatrixPosition(t).sub(e.position).length(), c = i * o, u = k.clamp((a - o) / c, 0, 1), h = k.lerp(1, 1e3, u);
      e.near = Math.max(h, a - o - c), ze.copy(e.position).applyMatrix4(n), s.getPositionToCartographic(ze, Ql);
      const d = Math.max(s.getPositionElevation(ze), Nf), p = s.calculateHorizonDistance(Ql.lat, d);
      e.far = p + 0.1 + o * r, e.updateProjectionMatrix();
    } else {
      this._getVirtualOrthoCameraPosition(e.position, e), e.updateMatrixWorld(), Yl.copy(e.matrixWorld).invert(), Y.setFromMatrixPosition(t).applyMatrix4(Yl);
      const a = -Y.z;
      e.near = a - o * (1 + i), e.far = a + 0.1 + o * r, e.position.addScaledVector(Xe, e.near), e.far -= e.near, e.near = 0, e.updateProjectionMatrix(), e.updateMatrixWorld();
    }
  }
  // resets the "stuck" drag modes
  resetState() {
    super.resetState(), this._dragMode = 0, this._rotationMode = 0;
  }
  _updateInertia(e) {
    super._updateInertia(e);
    const {
      globeInertia: t,
      enableDamping: n,
      dampingFactor: s,
      camera: i,
      cameraRadius: r,
      minDistance: o,
      inertiaTargetDistance: a,
      ellipsoidFrame: c
    } = this;
    if (!this.enableDamping || this.inertiaStableFrames > 1) {
      this.globeInertiaFactor = 0, this.globeInertia.identity();
      return;
    }
    const u = Math.pow(2, -e / s), h = Math.max(i.near, r, o, a), m = 0.25 * (2 / (2 * 1e3));
    if (kt.setFromMatrixPosition(c), this.globeInertiaFactor !== 0) {
      ct(ee, Y.set(0, 0, -1), i), ee.applyMatrix4(i.matrixWorldInverse), ee.direction.normalize(), ee.recast(-ee.direction.dot(ee.origin)).at(h / ee.direction.z, Y), Y.applyMatrix4(i.matrixWorld), ct(ee, ze.set(m, m, -1), i), ee.applyMatrix4(i.matrixWorldInverse), ee.direction.normalize(), ee.recast(-ee.direction.dot(ee.origin)).at(h / ee.direction.z, ze), ze.applyMatrix4(i.matrixWorld), Y.sub(kt).normalize(), ze.sub(kt).normalize(), this.globeInertiaFactor *= u;
      const f = Y.angleTo(ze) / e;
      (2 * Math.acos(t.w) * this.globeInertiaFactor < f || !n) && (this.globeInertiaFactor = 0, t.identity());
    }
    this.globeInertiaFactor !== 0 && (t.w === 1 && (t.x !== 0 || t.y !== 0 || t.z !== 0) && (t.w = Math.min(t.w, 1 - 1e-9)), kt.setFromMatrixPosition(c), Ft.identity().slerp(t, this.globeInertiaFactor * e), es(kt, Ft, Hn), i.matrixWorld.premultiply(Hn), i.matrixWorld.decompose(i.position, i.quaternion, Y));
  }
  _inertiaNeedsUpdate() {
    return super._inertiaNeedsUpdate() || this.globeInertiaFactor !== 0;
  }
  _updatePosition(e) {
    if (this.state === en) {
      this._dragMode === 0 && (this._dragMode = this._isNearControls() ? 1 : -1);
      const {
        raycaster: t,
        camera: n,
        pivotPoint: s,
        pointerTracker: i,
        domElement: r,
        ellipsoidFrame: o,
        ellipsoidFrameInverse: a
      } = this, c = ze, u = Ff;
      i.getCenterPoint(Os), Wn(Os.x, Os.y, r, Os), ct(t, Os, n), t.ray.applyMatrix4(a);
      const h = Y.copy(s).applyMatrix4(a).length();
      Qr.radius.setScalar(h), n.isPerspectiveCamera ? Qr.intersectRay(t.ray, Y) || Of(t.ray, h, Y) : Wr(t.ray, Qr, Y), Y.applyMatrix4(o), kt.setFromMatrixPosition(o), c.subVectors(s, kt).normalize(), u.subVectors(Y, kt).normalize(), Ft.setFromUnitVectors(u, c), es(kt, Ft, Hn), n.matrixWorld.premultiply(Hn), n.matrixWorld.decompose(n.position, n.quaternion, Y), i.getMoveDistance() / e < 2 * window.devicePixelRatio ? this.inertiaStableFrames++ : (this.globeInertia.copy(Ft), this.globeInertiaFactor = 1 / e, this.inertiaStableFrames = 0);
    }
  }
  // disable rotation once we're outside the control transition
  _updateRotation(...e) {
    this._rotationMode === 1 || this._isNearControls() ? (this._rotationMode = 1, super._updateRotation(...e)) : (this.pivotMesh.visible = false, this._rotationMode = -1);
  }
  _updateZoom() {
    const { zoomDelta: e, ellipsoid: t, zoomSpeed: n, zoomPoint: s, camera: i, maxZoom: r, state: o } = this;
    if (o !== $n && e === 0)
      return;
    this.rotationInertia.set(0, 0), this.dragInertia.set(0, 0, 0), this.globeInertia.identity(), this.globeInertiaFactor = 0;
    const a = k.clamp(k.mapLinear(Math.abs(e), 0, 20, 0, 1), 0, 1);
    if (this._isNearControls() || e > 0) {
      if (this._updateZoomDirection(), e < 0 && (this.zoomPointSet || this._updateZoomPoint())) {
        Xe.set(0, 0, -1).transformDirection(i.matrixWorld).normalize(), _n.copy(this.up).multiplyScalar(-1), this.getUpDirection(s, Zl);
        const c = k.clamp(k.mapLinear(-Zl.dot(_n), 1, 0.95, 0, 1), 0, 1), u = 1 - Xe.dot(_n), h = i.isOrthographicCamera ? 0.05 : 1, d = k.clamp(a * 3, 0, 1), p = Math.min(c * u * h * d, 0.1);
        _n.lerpVectors(Xe, _n, p).normalize(), Ft.setFromUnitVectors(Xe, _n), es(s, Ft, Hn), i.matrixWorld.premultiply(Hn), i.matrixWorld.decompose(i.position, i.quaternion, _n), this.zoomDirection.subVectors(s, i.position).normalize();
      }
      super._updateZoom();
    } else if (i.isPerspectiveCamera) {
      const c = this._getPerspectiveTransitionDistance(), u = this._getMaxPerspectiveDistance(), h = k.mapLinear(this.getDistanceToCenter(), c, u, 0, 1);
      this._tiltTowardsCenter(k.lerp(0, 0.4, h * a)), this._alignCameraUpToNorth(k.lerp(0, 0.2, h * a));
      const d = this.getDistanceToCenter() - t.radius.x, p = e * d * n * 25e-4, m = Math.max(p, Math.min(this.getDistanceToCenter() - u, 0));
      this.getVectorToCenter(Y).normalize(), this.camera.position.addScaledVector(Y, m), this.camera.updateMatrixWorld(), this.zoomDelta = 0;
    } else {
      const c = this._getOrthographicTransitionZoom(), u = this._getMinOrthographicZoom(), h = k.mapLinear(i.zoom, c, u, 0, 1);
      this._tiltTowardsCenter(k.lerp(0, 0.4, h * a)), this._alignCameraUpToNorth(k.lerp(0, 0.2, h * a));
      const d = this.zoomDelta, p = Math.pow(0.95, Math.abs(d * 0.05)), m = d > 0 ? 1 / Math.abs(p) : p, f = u / i.zoom, g = Math.max(m * n, Math.min(f, 1));
      i.zoom = Math.min(r, i.zoom * g), i.updateProjectionMatrix(), this.zoomDelta = 0, this.zoomDirectionSet = false;
    }
  }
  // tilt the camera to align with north
  _alignCameraUpToNorth(e) {
    const { ellipsoidFrame: t } = this;
    jn.set(0, 0, 1).transformDirection(t), this._alignCameraUp(jn, e);
  }
  // tilt the camera to look at the center of the globe
  _tiltTowardsCenter(e) {
    const {
      camera: t,
      ellipsoidFrame: n
    } = this;
    Xe.set(0, 0, -1).transformDirection(t.matrixWorld).normalize(), Y.setFromMatrixPosition(n).sub(t.position).normalize(), Y.lerp(Xe, 1 - e).normalize(), Ft.setFromUnitVectors(Xe, Y), t.quaternion.premultiply(Ft), t.updateMatrixWorld();
  }
  // returns the perspective camera transition distance can move to based on globe size and fov
  _getPerspectiveTransitionDistance() {
    const { camera: e, ellipsoid: t } = this;
    if (!e.isPerspectiveCamera)
      throw new Error();
    const n = Math.max(...t.radius), s = 2 * Math.atan(Math.tan(k.DEG2RAD * e.fov * 0.5) * e.aspect), i = n / Math.tan(k.DEG2RAD * e.fov * 0.5), r = n / Math.tan(s * 0.5);
    return Math.max(i, r);
  }
  // returns the max distance the perspective camera can move to based on globe size and fov
  _getMaxPerspectiveDistance() {
    const { camera: e, ellipsoid: t } = this;
    if (!e.isPerspectiveCamera)
      throw new Error();
    const n = Math.max(...t.radius), s = 2 * Math.atan(Math.tan(k.DEG2RAD * e.fov * 0.5) * e.aspect), i = n / Math.tan(k.DEG2RAD * e.fov * 0.5), r = n / Math.tan(s * 0.5);
    return 2 * Math.max(i, r);
  }
  // returns the transition threshold for orthographic zoom based on the globe size and camera settings
  _getOrthographicTransitionZoom() {
    const { camera: e, ellipsoid: t } = this;
    if (!e.isOrthographicCamera)
      throw new Error();
    const n = e.top - e.bottom, s = e.right - e.left, i = Math.max(n, s), o = 2 * Math.max(...t.radius);
    return 2 * i / o;
  }
  // returns the minimum allowed orthographic zoom based on the globe size and camera settings
  _getMinOrthographicZoom() {
    const { camera: e, ellipsoid: t } = this;
    if (!e.isOrthographicCamera)
      throw new Error();
    const n = e.top - e.bottom, s = e.right - e.left, i = Math.min(n, s), o = 2 * Math.max(...t.radius);
    return 0.7 * i / o;
  }
  // returns the "virtual position" of the orthographic based on where it is and
  // where it's looking primarily so we can reasonably position the camera object
  // in space and derive a reasonable "up" value.
  _getVirtualOrthoCameraPosition(e, t = this.camera) {
    const { ellipsoidFrame: n, ellipsoidFrameInverse: s, ellipsoid: i } = this;
    if (!t.isOrthographicCamera)
      throw new Error();
    ee.origin.copy(t.position), ee.direction.set(0, 0, -1).transformDirection(t.matrixWorld), ee.applyMatrix4(s), Wr(ee, i, ze), ze.applyMatrix4(n);
    const r = t.top - t.bottom, o = t.right - t.left, a = Math.max(r, o) / t.zoom;
    Xe.set(0, 0, -1).transformDirection(t.matrixWorld);
    const c = ze.sub(t.position).dot(Xe);
    e.copy(t.position).addScaledVector(Xe, c - a * 4);
  }
  _isNearControls() {
    const { camera: e } = this;
    return e.isPerspectiveCamera ? this.getDistanceToCenter() < this._getPerspectiveTransitionDistance() : e.zoom > this._getOrthographicTransitionZoom();
  }
  _raycast(e) {
    const t = super._raycast(e);
    if (t === null) {
      const { ellipsoid: n, ellipsoidFrame: s, ellipsoidFrameInverse: i } = this;
      ee.copy(e.ray).applyMatrix4(i);
      const r = n.intersectRay(ee, Y);
      return r !== null ? {
        point: r.clone().applyMatrix4(s)
      } : null;
    } else
      return t;
  }
}
const An = Symbol("TILE_X"), Mn = Symbol("TILE_Y"), tn = Symbol("TILE_LEVEL");
class Bf {
  get tiling() {
    return this.imageSource.tiling;
  }
  constructor(e = {}) {
    const {
      pixelSize: t = 0.01,
      center: n = false,
      useRecommendedSettings: s = true,
      imageSource: i = null
    } = e;
    this.priority = -10, this.tiles = null, this.imageSource = i, this.pixelSize = t, this.center = n, this.useRecommendedSettings = s;
  }
  // Plugin functions
  init(e) {
    this.useRecommendedSettings && (e.errorTarget = 1), this.tiles = e, this.imageSource.fetchOptions = e.fetchOptions, this.imageSource.fetchData = (t, n) => (e.invokeAllPlugins((s) => t = s.preprocessURL ? s.preprocessURL(t, null) : t), e.invokeOnePlugin((s) => s !== this && s.fetchData && s.fetchData(t, n)));
  }
  async loadRootTileSet() {
    const { tiles: e, imageSource: t } = this;
    let n = e.rootURL;
    return e.invokeAllPlugins((s) => n = s.preprocessURL ? s.preprocessURL(n, null) : n), await t.init(n), this.getTileset(n);
  }
  async parseToMesh(e, t, n, s, i) {
    if (i.aborted)
      return null;
    const r = t[An], o = t[Mn], a = t[tn], c = await this.imageSource.processBufferToTexture(e);
    this.imageSource.setData(r, o, a, c);
    let u = 1, h = 1, d = 0, p = 0, m = 0;
    const f = t.boundingVolume.box;
    f && ([d, p, m] = f, u = f[3], h = f[7]);
    const g = new et(new ha(2 * u, 2 * h), new Ne({ map: c, transparent: true }));
    return g.position.set(d, p, m), g;
  }
  preprocessNode(e) {
    const { tiling: t } = this, n = t.maxLevel;
    e[tn] < n && e.parent !== null && this.expandChildren(e);
  }
  disposeTile(e) {
    const t = e[An], n = e[Mn], s = e[tn], { imageSource: i } = this;
    i.has(t, n, s) && i.release(t, n, s);
  }
  // Local functions
  getTileset(e) {
    const { tiling: t, tiles: n } = this, s = t.minLevel, { tileCountX: i, tileCountY: r } = t.getLevel(s), o = [];
    for (let c = 0; c < i; c++)
      for (let u = 0; u < r; u++) {
        const h = this.createChild(c, u, s);
        h !== null && o.push(h);
      }
    const a = {
      asset: {
        version: "1.1"
      },
      geometricError: 1e5,
      root: {
        refine: "REPLACE",
        geometricError: 1e5,
        boundingVolume: this.createBoundingVolume(0, 0, -1),
        children: o,
        [tn]: -1,
        [An]: 0,
        [Mn]: 0
      }
    };
    return n.preprocessTileSet(a, e), a;
  }
  getUrl(e, t, n) {
    return this.imageSource.getUrl(e, t, n);
  }
  createBoundingVolume(e, t, n) {
    const { center: s, pixelSize: i, tiling: r } = this, { pixelWidth: o, pixelHeight: a } = r.getLevel(r.maxLevel), [c, u, h, d] = n === -1 ? r.getFullBounds(true) : r.getTileBounds(e, t, n, true);
    let p = (h - c) / 2, m = (d - u) / 2, f = c + p, g = u + m;
    return s && (f -= 0.5, g -= 0.5), f *= o * i, p *= o * i, g *= a * i, m *= a * i, {
      box: [
        // center
        f,
        g,
        0,
        // x, y, z half vectors
        p,
        0,
        0,
        0,
        m,
        0,
        0,
        0,
        0
      ]
    };
  }
  createChild(e, t, n) {
    const { pixelSize: s, tiling: i } = this;
    if (!i.getTileExists(e, t, n))
      return null;
    const { pixelWidth: r, pixelHeight: o } = i.getLevel(i.maxLevel), { pixelWidth: a, pixelHeight: c } = i.getLevel(n);
    return {
      refine: "REPLACE",
      geometricError: s * (Math.max(r / a, o / c) - 1),
      boundingVolume: this.createBoundingVolume(e, t, n),
      content: {
        uri: this.getUrl(e, t, n)
      },
      children: [],
      // save the tile params so we can expand later
      [An]: e,
      [Mn]: t,
      [tn]: n
    };
  }
  expandChildren(e) {
    const t = e[tn], n = e[An], s = e[Mn];
    for (let i = 0; i < 2; i++)
      for (let r = 0; r < 2; r++) {
        const o = this.createChild(2 * n + i, 2 * s + r, t + 1);
        o && e.children.push(o);
      }
  }
}
const Jr = /* @__PURE__ */ new P(), ki = /* @__PURE__ */ new P();
function zf(l15, e, t) {
  const s = t + 1e-5;
  let i = e + 1e-5;
  Math.abs(i) > Math.PI / 2 && (i = i - 1e-5), l15.getCartographicToPosition(e, t, 0, Jr), l15.getCartographicToPosition(i, t, 0, ki);
  const r = Jr.distanceTo(ki) / 1e-5;
  return l15.getCartographicToPosition(e, s, 0, ki), [Jr.distanceTo(ki) / 1e-5, r];
}
const Gf = 30, Hf = 15, eo = /* @__PURE__ */ new P(), to = /* @__PURE__ */ new P(), yn = /* @__PURE__ */ new $(), no = /* @__PURE__ */ new kn();
class jf extends Bf {
  get projection() {
    return this.tiling.projection;
  }
  constructor(e = {}) {
    const {
      shape: t = "planar",
      endCaps: n = true,
      ...s
    } = e;
    super(s), this.shape = t, this.endCaps = n;
  }
  // override the parse to mesh logic to support a region mesh
  async parseToMesh(e, t, ...n) {
    const s = await super.parseToMesh(e, t, ...n), { shape: i, projection: r, tiles: o, tiling: a } = this;
    if (i === "ellipsoid") {
      const c = o.ellipsoid, u = t[tn], h = t[An], d = t[Mn], [p, m, f, g] = a.getTileBounds(h, d, u, true), [_, y, v, x] = t.boundingVolume.region, T = Math.ceil((x - y) * k.RAD2DEG * 0.25), A = Math.ceil((v - _) * k.RAD2DEG * 0.25), w = Math.max(Hf, T), M = Math.max(Gf, A), b = new ha(1, 1, M, w), { position: S, normal: C, uv: L } = b.attributes, R = S.count;
      t.cached.boundingVolume.getSphere(no);
      for (let I = 0; I < R; I++) {
        eo.fromBufferAttribute(S, I), to.fromBufferAttribute(C, I), yn.fromBufferAttribute(L, I);
        const F = k.mapLinear(yn.x, 0, 1, _, v);
        let D = k.mapLinear(yn.y, 0, 1, y, x);
        if (r.isMercator && yn.y !== 0 && yn.y !== 1) {
          const G = r.convertProjectionToLatitude(1), Q = 1 / w, K = k.mapLinear(yn.y - Q, 0, 1, y, x), oe = k.mapLinear(yn.y + Q, 0, 1, y, x);
          D > G && K < G && (D = G), D < -G && oe > -G && (D = -G);
        }
        c.getCartographicToPosition(D, F, 0, eo).sub(no.center), c.getCartographicToNormal(D, F, to);
        const U = k.mapLinear(r.convertLongitudeToProjection(F), p, f, 0, 1), N = k.mapLinear(r.convertLatitudeToProjection(D), m, g, 0, 1);
        L.setXY(I, U, N), S.setXYZ(I, ...eo), C.setXYZ(I, ...to);
      }
      s.geometry = b, s.position.copy(no.center);
    }
    return s;
  }
  createBoundingVolume(e, t, n) {
    if (this.shape === "ellipsoid") {
      const { tiling: s, endCaps: i } = this, r = n === -1, o = r ? s.getFullBounds(true) : s.getTileBounds(e, t, n, true), a = r ? s.getFullBounds() : s.getTileBounds(e, t, n);
      return i && (o[3] === 1 && (a[3] = Math.PI / 2), o[1] === 0 && (a[1] = -Math.PI / 2)), {
        region: [...a, -1, 1]
      };
    } else
      return super.createBoundingVolume(e, t, n);
  }
  preprocessNode(e, ...t) {
    super.preprocessNode(e, t);
    const { shape: n, projection: s, tiling: i } = this;
    if (n === "ellipsoid") {
      const r = e[tn], o = e[An], a = e[Mn];
      if (r === -1)
        return e.geometricError = 1e50, parent;
      const [c, u, h, d] = i.getTileBounds(o, a, r, true), { tilePixelWidth: p, tilePixelHeight: m } = i.getLevel(r), { pixelWidth: f, pixelHeight: g } = i.getLevel(i.maxLevel), _ = (h - c) / p, y = (d - u) / m, v = 1 / f, x = 1 / g, [
        /* west */
        ,
        T,
        A,
        w
      ] = i.getTileBounds(o, a, r), M = T > 0 != w > 0 ? 0 : Math.min(Math.abs(T), Math.abs(w)), b = s.convertLatitudeToProjection(M), S = s.getLongitudeDerivativeAtProjection(c), C = s.getLatitudeDerivativeAtProjection(b), [L, R] = zf(this.tiles.ellipsoid, M, A), I = Math.max(_ * S * L, y * C * R), F = Math.max(v * S * L, x * C * R);
      e.geometricError = I - F, e.parent === null && (e.geometricError = 1e50);
    }
    return e;
  }
}
class Vf {
  get isMercator() {
    return this.scheme === "EPSG:3857";
  }
  constructor(e = "EPSG:4326") {
    this.scheme = e, this.tileCountX = 1, this.tileCountY = 1, this.setScheme(e);
  }
  setScheme(e) {
    switch (this.scheme = e, e) {
      case "EPSG:4326":
        this.tileCountX = 2, this.tileCountY = 1;
        break;
      case "EPSG:3857":
        this.tileCountX = 1, this.tileCountY = 1;
        break;
      default:
        throw new Error();
    }
  }
  convertProjectionToLatitude(e) {
    if (this.isMercator) {
      const t = k.mapLinear(e, 0, 1, -1, 1);
      return 2 * Math.atan(Math.exp(t * Math.PI)) - Math.PI / 2;
    } else
      return k.mapLinear(e, 0, 1, -Math.PI / 2, Math.PI / 2);
  }
  convertProjectionToLongitude(e) {
    return k.mapLinear(e, 0, 1, -Math.PI, Math.PI);
  }
  convertLatitudeToProjection(e) {
    if (this.isMercator) {
      const t = Math.log(Math.tan(Math.PI / 4 + e / 2));
      return 1 / 2 + 1 * t / (2 * Math.PI);
    } else
      return k.mapLinear(e, -Math.PI / 2, Math.PI / 2, 0, 1);
  }
  convertLongitudeToProjection(e) {
    return (e + Math.PI) / (2 * Math.PI);
  }
  getLongitudeDerivativeAtProjection(e) {
    return 2 * Math.PI;
  }
  getLatitudeDerivativeAtProjection(e) {
    let n = e - 1e-5;
    return n < 0 && (n = e + 1e-5), this.isMercator ? Math.abs(this.convertProjectionToLatitude(e) - this.convertProjectionToLatitude(n)) / 1e-5 : Math.PI;
  }
  getBounds() {
    return [
      this.convertProjectionToLongitude(0),
      this.convertProjectionToLatitude(0),
      this.convertProjectionToLongitude(1),
      this.convertProjectionToLatitude(1)
    ];
  }
}
function Is(...l15) {
  return l15.join("_");
}
class Wf {
  constructor() {
    this.cache = {}, this.count = 0, this.cachedBytes = 0;
  }
  // overridable
  fetchItem() {
  }
  disposeItem() {
  }
  getMemoryUsage(e) {
    return 0;
  }
  // sets the data in the cache explicitly without need to load
  setData(...e) {
    const { cache: t } = this, n = e.pop(), s = Is(...e);
    if (s in t)
      throw new Error(`DataCache: "${s}" is already present.`);
    return this.cache[s] = {
      abortController: new AbortController(),
      result: n,
      count: 1,
      bytes: this.getMemoryUsage(n)
    }, this.count++, this.cachedBytes += this.cache[s].bytes, n;
  }
  // fetches the associated data if it doesn't exist and increments the lock counter
  lock(...e) {
    const { cache: t } = this, n = Is(...e);
    if (n in t)
      t[n].count++;
    else {
      const s = new AbortController(), i = {
        abortController: s,
        result: null,
        count: 1,
        bytes: 0
      };
      i.result = this.fetchItem(...e, s.signal), i.result instanceof Promise ? i.result.then((r) => (i.result = r, i.bytes = this.getMemoryUsage(r), this.cachedBytes += i.bytes, r)) : (i.bytes = this.getMemoryUsage(i.result), this.cachedBytes += i.bytes), this.cache[n] = i, this.count++;
    }
    return t[n].result;
  }
  // decrements the lock counter for the item and deletes the item if it has reached zero
  release(...e) {
    const t = Is(...e);
    this.releaseViaFullKey(t);
  }
  // get the loaded item
  get(...e) {
    const { cache: t } = this, n = Is(...e);
    return n in t && t[n].count > 0 ? t[n].result : null;
  }
  has(...e) {
    const { cache: t } = this;
    return Is(...e) in t;
  }
  // dispose all items
  dispose() {
    const { cache: e } = this;
    for (const t in e) {
      const { abortController: n } = e[t];
      n.abort(), this.releaseViaFullKey(t, true);
    }
    this.cache = {};
  }
  // releases an item with an optional force flag
  releaseViaFullKey(e, t = false) {
    const { cache: n } = this;
    if (e in n && n[e].count > 0) {
      const s = n[e];
      if (s.count--, s.count === 0 || t) {
        const i = () => {
          if (n[e] !== s)
            return;
          const { result: r, abortController: o } = s;
          o.abort(), r instanceof Promise ? r.then((a) => this.disposeItem(a)).catch(() => {
          }) : this.disposeItem(r), delete n[e], this.count--, this.cachedBytes -= s.bytes;
        };
        t ? i() : queueMicrotask(() => {
          s.count === 0 && i();
        });
      }
      return true;
    }
    throw new Error("DataCache: Attempting to release key that does not exist");
  }
}
function ot(l15, e, t) {
  return Math.min(Math.max(l15, e), t);
}
class $f {
  get levelCount() {
    return this._levels.length;
  }
  get maxLevel() {
    return this.levelCount - 1;
  }
  get minLevel() {
    const e = this._levels;
    for (let t = 0; t < e.length; t++)
      if (e[t] !== null)
        return t;
    return -1;
  }
  // prioritize user-set bounds over projection bounds if present
  get rootBounds() {
    return this._rootBounds ?? this.projection?.getBounds() ?? [0, 0, 1, 1];
  }
  get rootOrigin() {
    const e = this.rootBounds;
    return this._rootOrigin ?? [e[0], e[1]];
  }
  get aspect() {
    const { pixelWidth: e, pixelHeight: t } = this.getLevel(this.maxLevel);
    return e / t;
  }
  constructor() {
    this.flipY = false, this.pixelOverlap = 0, this._rootBounds = null, this._rootOrigin = null, this.projection = null, this._levels = [];
  }
  // build the zoom levels
  setLevel(e, t = {}) {
    const n = this._levels;
    for (; n.length < e; )
      n.push(null);
    const {
      tilePixelWidth: s = 256,
      tilePixelHeight: i = 256,
      tileCountX: r = 2 ** e,
      tileCountY: o = 2 ** e
    } = t, {
      pixelWidth: a = s * r,
      pixelHeight: c = i * o
    } = t;
    n[e] = {
      tilePixelWidth: s,
      tilePixelHeight: i,
      pixelWidth: a,
      pixelHeight: c,
      tileCountX: r,
      tileCountY: o
    };
  }
  generateLevels(e, t, n, s = {}) {
    const {
      minLevel: i = 0,
      tilePixelWidth: r = 256,
      tilePixelHeight: o = 256
    } = s, a = e - 1, {
      pixelWidth: c = r * t * 2 ** a,
      pixelHeight: u = o * n * 2 ** a
    } = s;
    for (let h = i; h < e; h++) {
      const d = e - h - 1, p = Math.ceil(c * 2 ** -d), m = Math.ceil(u * 2 ** -d), f = Math.ceil(p / r), g = Math.ceil(m / o);
      this.setLevel(h, {
        tilePixelWidth: r,
        tilePixelHeight: o,
        pixelWidth: p,
        pixelHeight: m,
        tileCountX: f,
        tileCountY: g
      });
    }
  }
  getLevel(e) {
    return this._levels[e];
  }
  // bounds setters
  setOrigin(e, t) {
    this._rootOrigin = [e, t];
  }
  setBounds(e, t, n, s) {
    this._rootBounds = [e, t, n, s];
  }
  setProjection(e) {
    this.projection = e;
  }
  // query functions
  getTileAtPoint(e, t, n, s = false) {
    const { projection: i, flipY: r } = this, { tileCountX: o, tileCountY: a } = this.getLevel(n), c = 1 / o, u = 1 / a;
    i && !s && (e = i.convertLongitudeToProjection(e), t = i.convertLatitudeToProjection(t));
    const h = Math.floor(e / c);
    let d = Math.floor(t / u);
    return r && (d = a - 1 - d), [h, d];
  }
  getTilesInRange(e, t, n, s, i, r = false) {
    const o = this.getTileAtPoint(e, t, i, r, false), a = this.getTileAtPoint(n, s, i, r, false);
    this.flipY && ([o[1], a[1]] = [a[1], o[1]]);
    const { tileCountX: c, tileCountY: u } = this.getLevel(i), [h, d] = o, [p, m] = a;
    return p < 0 || m < 0 || h >= c || d >= u ? [0, 0, -1, -1] : [
      ot(h, 0, c - 1),
      ot(d, 0, u - 1),
      ot(p, 0, c - 1),
      ot(m, 0, u - 1)
    ];
  }
  getTileExists(e, t, n) {
    const [s, i, r, o] = this.rootBounds, [a, c, u, h] = this.getTileBounds(e, t, n);
    return !(a >= u || c >= h) && a <= r && c <= o && u >= s && h >= i;
  }
  getFullBounds(e = false) {
    const { projection: t } = this, n = [...this.rootBounds];
    return t && e && (n[0] = t.convertLongitudeToProjection(n[0]), n[1] = t.convertLatitudeToProjection(n[1]), n[2] = t.convertLongitudeToProjection(n[2]), n[3] = t.convertLatitudeToProjection(n[3])), n;
  }
  getTileBounds(e, t, n, s = false) {
    const { flipY: i, pixelOverlap: r, projection: o } = this, { tilePixelWidth: a, tilePixelHeight: c, pixelWidth: u, pixelHeight: h } = this.getLevel(n);
    let d = a * e - r, p = c * t - r, m = d + a + r * 2, f = p + c + r * 2;
    if (d = Math.max(d, 0), p = Math.max(p, 0), m = Math.min(m, u), f = Math.min(f, h), d = d / u, m = m / u, p = p / h, f = f / h, i) {
      const _ = (f - p) / 2, v = 1 - (p + f) / 2;
      p = v - _, f = v + _;
    }
    const g = [d, p, m, f];
    return o && !s && (g[0] = o.convertProjectionToLongitude(g[0]), g[1] = o.convertProjectionToLatitude(g[1]), g[2] = o.convertProjectionToLongitude(g[2]), g[3] = o.convertProjectionToLatitude(g[3])), g;
  }
  toNormalizedPoint(e, t) {
    const { projection: n } = this, s = [e, t];
    return this.projection && (s[0] = n.convertLongitudeToProjection(s[0]), s[1] = n.convertLatitudeToProjection(s[1])), s;
  }
  toNormalizedRange(e) {
    return [
      ...this.toNormalizedPoint(e[0], e[1]),
      ...this.toNormalizedPoint(e[2], e[3])
    ];
  }
  clampToBounds(e, t = false) {
    const n = [...e], { projection: s } = this;
    if (t || !s)
      n[0] = ot(n[0], 0, 1), n[1] = ot(n[1], 0, 1), n[2] = ot(n[2], 0, 1), n[3] = ot(n[3], 0, 1);
    else {
      const [i, r, o, a] = s.getBounds();
      n[0] = ot(n[0], i, o), n[1] = ot(n[1], r, a), n[2] = ot(n[2], i, o), n[3] = ot(n[3], r, a);
    }
    return n;
  }
}
class Kf extends Wf {
  constructor() {
    super(), this.tiling = new $f(), this.fetchOptions = {}, this.fetchData = (...e) => fetch(...e);
  }
  // async function for initializing the tiled image set
  init(e) {
  }
  // helper for processing the buffer into a texture
  async processBufferToTexture(e) {
    const t = new Blob([e]), n = await createImageBitmap(t, {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none",
      imageOrientation: "flipY"
    }), s = new Ks(n);
    return s.generateMipmaps = false, s.colorSpace = as, s.needsUpdate = true, s;
  }
  getMemoryUsage(e) {
    const { TextureUtils: t } = B;
    if (!t)
      return 0;
    const { format: n, type: s, image: i, generateMipmaps: r } = e, { width: o, height: a } = i, c = t.getByteLength(o, a, n, s);
    return r ? c * 4 / 3 : c;
  }
  // fetch the item with the given key fields
  fetchItem(...e) {
    const t = this.getUrl(...e);
    return this.fetchData(t, this.fetchOptions).then((n) => n.arrayBuffer()).then((n) => this.processBufferToTexture(n));
  }
  // dispose of the item that was fetched
  disposeItem(e) {
    e.dispose(), e.image instanceof ImageBitmap && e.image.close();
  }
  getUrl(...e) {
  }
}
class qf extends Kf {
  constructor(e = {}) {
    super();
    const {
      levels: t = 20,
      tileDimension: n = 256
    } = e;
    this.tileDimension = n, this.levels = t, this.url = null;
  }
  getUrl(e, t, n) {
    return this.url.replace("{z}", n).replace("{x}", e).replace("{y}", t);
  }
  init(e) {
    const { tiling: t, tileDimension: n, levels: s } = this;
    return t.flipY = true, t.setProjection(new Vf("EPSG:3857")), t.generateLevels(s, 1, 1, {
      tilePixelWidth: n,
      tilePixelHeight: n
    }), this.url = e, Promise.resolve();
  }
}
class Xf extends jf {
  constructor(e = {}) {
    const {
      levels: t = 20,
      tileDimension: n = 256,
      pixelSize: s = 1e-5,
      ...i
    } = e;
    super({ pixelSize: s, ...i }), this.name = "XYZ_TILES_PLUGIN", this.imageSource = new qf({ levels: t, tileDimension: n });
  }
}
const so = new z();
class Yf {
  constructor() {
    this.name = "UPDATE_ON_CHANGE_PLUGIN", this.tiles = null, this.needsUpdate = false, this.cameraMatrices = /* @__PURE__ */ new Map();
  }
  init(e) {
    this.tiles = e, this._needsUpdateCallback = () => {
      this.needsUpdate = true;
    }, this._onCameraAdd = ({ camera: t }) => {
      this.needsUpdate = true, this.cameraMatrices.set(t, new z());
    }, this._onCameraDelete = ({ camera: t }) => {
      this.needsUpdate = true, this.cameraMatrices.delete(t);
    }, e.addEventListener("needs-update", this._needsUpdateCallback), e.addEventListener("add-camera", this._onCameraAdd), e.addEventListener("delete-camera", this._onCameraDelete), e.addEventListener("camera-resolution-change", this._needsUpdateCallback), e.cameras.forEach((t) => {
      this._onCameraAdd({ camera: t });
    });
  }
  doTilesNeedUpdate() {
    const e = this.tiles;
    let t = false;
    this.cameraMatrices.forEach((s, i) => {
      so.copy(e.group.matrixWorld).premultiply(i.matrixWorldInverse).premultiply(i.projectionMatrixInverse), t = t || !so.equals(s), s.copy(so);
    });
    const n = this.needsUpdate;
    return this.needsUpdate = false, n || t;
  }
  preprocessNode() {
    this.needsUpdate = true;
  }
  dispose() {
    const e = this.tiles;
    e.removeEventListener("camera-resolution-change", this._needsUpdateCallback), e.removeEventListener("load-content", this._needsUpdateCallback), e.removeEventListener("camera-add", this._onCameraAdd), e.removeEventListener("camera-delete", this._onCameraDelete);
  }
}
const { clamp: io } = k;
class Zf {
  constructor() {
    this.duration = 250, this.fadeCount = 0, this._lastTick = -1, this._fadeState = /* @__PURE__ */ new Map(), this.onFadeComplete = null, this.onFadeStart = null, this.onFadeSetComplete = null, this.onFadeSetStart = null;
  }
  // delete the object from the fade, reset the material data
  deleteObject(e) {
    e && this.completeFade(e);
  }
  // Ensure we're storing a fade timer for the provided object
  // Returns whether a new state had to be added
  guaranteeState(e) {
    const t = this._fadeState;
    if (t.has(e))
      return false;
    const n = {
      fadeInTarget: 0,
      fadeOutTarget: 0,
      fadeIn: 0,
      fadeOut: 0
    };
    return t.set(e, n), true;
  }
  // Force the fade to complete in the direction it is already trending
  completeFade(e) {
    const t = this._fadeState;
    if (!t.has(e))
      return;
    const n = t.get(e).fadeOutTarget === 0;
    t.delete(e), this.fadeCount--, this.onFadeComplete && this.onFadeComplete(e, n), this.fadeCount === 0 && this.onFadeSetComplete && this.onFadeSetComplete();
  }
  completeAllFades() {
    this._fadeState.forEach((e, t) => {
      this.completeFade(t);
    });
  }
  forEachObject(e) {
    this._fadeState.forEach((t, n) => {
      e(n, t);
    });
  }
  // Fade the object in
  fadeIn(e) {
    const t = this.guaranteeState(e), n = this._fadeState.get(e);
    n.fadeInTarget = 1, n.fadeOutTarget = 0, n.fadeOut = 0, t && (this.fadeCount++, this.fadeCount === 1 && this.onFadeSetStart && this.onFadeSetStart(), this.onFadeStart && this.onFadeStart(e));
  }
  // Fade the object out
  fadeOut(e) {
    const t = this.guaranteeState(e), n = this._fadeState.get(e);
    n.fadeOutTarget = 1, t && (n.fadeInTarget = 1, n.fadeIn = 1, this.fadeCount++, this.fadeCount === 1 && this.onFadeSetStart && this.onFadeSetStart(), this.onFadeStart && this.onFadeStart(e));
  }
  isFading(e) {
    return this._fadeState.has(e);
  }
  isFadingOut(e) {
    const t = this._fadeState.get(e);
    return t && t.fadeOutTarget === 1;
  }
  // Tick the fade timer for each actively fading object
  update() {
    const e = window.performance.now();
    this._lastTick === -1 && (this._lastTick = e);
    const t = io((e - this._lastTick) / this.duration, 0, 1);
    this._lastTick = e, this._fadeState.forEach((s, i) => {
      const {
        fadeOutTarget: r,
        fadeInTarget: o
      } = s;
      let {
        fadeOut: a,
        fadeIn: c
      } = s;
      const u = Math.sign(o - c);
      c = io(c + u * t, 0, 1);
      const h = Math.sign(r - a);
      a = io(a + h * t, 0, 1), s.fadeIn = c, s.fadeOut = a, ((a === 1 || a === 0) && (c === 1 || c === 0) || a >= c) && this.completeFade(i);
    });
  }
}
const ro = Symbol("FADE_PARAMS");
function Fu(l15, e) {
  if (l15[ro])
    return l15[ro];
  const t = {
    fadeIn: { value: 0 },
    fadeOut: { value: 0 },
    fadeTexture: { value: null }
  };
  return l15[ro] = t, l15.defines = {
    ...l15.defines || {},
    FEATURE_FADE: 0
  }, l15.onBeforeCompile = (n) => {
    e && e(n), n.uniforms = {
      ...n.uniforms,
      ...t
    }, n.vertexShader = n.vertexShader.replace(
      /void\s+main\(\)\s+{/,
      (s) => (
        /* glsl */
        `
					#ifdef USE_BATCHING_FRAG

					varying float vBatchId;

					#endif

					${s}

						#ifdef USE_BATCHING_FRAG

						// add 0.5 to the value to avoid floating error that may cause flickering
						vBatchId = getIndirectIndex( gl_DrawID ) + 0.5;

						#endif
				`
      )
    ), n.fragmentShader = n.fragmentShader.replace(/void main\(/, (s) => (
      /* glsl */
      `
				#if FEATURE_FADE

				// adapted from https://www.shadertoy.com/view/Mlt3z8
				float bayerDither2x2( vec2 v ) {

					return mod( 3.0 * v.y + 2.0 * v.x, 4.0 );

				}

				float bayerDither4x4( vec2 v ) {

					vec2 P1 = mod( v, 2.0 );
					vec2 P2 = floor( 0.5 * mod( v, 4.0 ) );
					return 4.0 * bayerDither2x2( P1 ) + bayerDither2x2( P2 );

				}

				// the USE_BATCHING define is not available in fragment shaders
				#ifdef USE_BATCHING_FRAG

				// functions for reading the fade state of a given batch id
				uniform sampler2D fadeTexture;
				varying float vBatchId;
				vec2 getFadeValues( const in float i ) {

					int size = textureSize( fadeTexture, 0 ).x;
					int j = int( i );
					int x = j % size;
					int y = j / size;
					return texelFetch( fadeTexture, ivec2( x, y ), 0 ).rg;

				}

				#else

				uniform float fadeIn;
				uniform float fadeOut;

				#endif

				#endif

				${s}
			`
    )).replace(/#include <dithering_fragment>/, (s) => (
      /* glsl */
      `

				${s}

				#if FEATURE_FADE

				#ifdef USE_BATCHING_FRAG

				vec2 fadeValues = getFadeValues( vBatchId );
				float fadeIn = fadeValues.r;
				float fadeOut = fadeValues.g;

				#endif

				float bayerValue = bayerDither4x4( floor( mod( gl_FragCoord.xy, 4.0 ) ) );
				float bayerBins = 16.0;
				float dither = ( 0.5 + bayerValue ) / bayerBins;
				if ( dither >= fadeIn ) {

					discard;

				}

				if ( dither < fadeOut ) {

					discard;

				}

				#endif

			`
    ));
  }, t;
}
class Qf {
  constructor() {
    this._fadeParams = /* @__PURE__ */ new WeakMap(), this.fading = 0;
  }
  // Set the fade parameters for the given scene
  setFade(e, t, n) {
    if (!e)
      return;
    const s = this._fadeParams;
    e.traverse((i) => {
      const r = i.material;
      if (r) {
        const o = s.get(r);
        o.fadeIn.value = t, o.fadeOut.value = n;
        const u = +(!(t === 0 || t === 1) || !(n === 0 || n === 1));
        r.defines.FEATURE_FADE !== u && (this.fading += u === 1 ? 1 : -1, r.defines.FEATURE_FADE = u, r.needsUpdate = true);
      }
    });
  }
  // initialize materials in the object
  prepareScene(e) {
    e.traverse((t) => {
      t.material && this.prepareMaterial(t.material);
    });
  }
  // delete the object from the fade, reset the material data
  deleteScene(e) {
    if (!e)
      return;
    this.setFade(e, 1, 0);
    const t = this._fadeParams;
    e.traverse((n) => {
      const s = n.material;
      s && t.delete(s);
    });
  }
  // initialize the material
  prepareMaterial(e) {
    const t = this._fadeParams;
    t.has(e) || t.set(e, Fu(e, e.onBeforeCompile));
  }
}
class Jf {
  constructor(e, t = new Ne()) {
    this.other = e, this.material = t, this.visible = true, this.parent = null, this._instanceInfo = [], this._visibilityChanged = true;
    const n = new Proxy(this, {
      get(s, i) {
        if (i in s)
          return s[i];
        {
          const r = e[i];
          return r instanceof Function ? (...o) => (s.syncInstances(), r.call(n, ...o)) : e[i];
        }
      },
      set(s, i, r) {
        return i in s ? s[i] = r : e[i] = r, true;
      },
      deleteProperty(s, i) {
        return i in s ? delete s[i] : delete e[i];
      }
      // ownKeys() {},
      // has(target, key) {},
      // defineProperty(target, key, descriptor) {},
      // getOwnPropertyDescriptor(target, key) {},
    });
    return n;
  }
  syncInstances() {
    const e = this._instanceInfo, t = this.other._instanceInfo;
    for (; t.length > e.length; ) {
      const n = e.length;
      e.push(new Proxy({ visible: false }, {
        get(s, i) {
          return i in s ? s[i] : t[n][i];
        },
        set(s, i, r) {
          return i in s ? s[i] = r : t[n][i] = r, true;
        }
      }));
    }
  }
}
class em extends Jf {
  constructor(...e) {
    super(...e);
    const t = this.material, n = Fu(t, t.onBeforeCompile);
    t.defines.FEATURE_FADE = 1, t.defines.USE_BATCHING_FRAG = 1, t.needsUpdate = true, this.fadeTexture = null, this._fadeParams = n;
  }
  // Set the fade state
  setFadeAt(e, t, n) {
    this._initFadeTexture(), this.fadeTexture.setValueAt(e, t * 255, n * 255);
  }
  // initialize the texture and resize it if needed
  _initFadeTexture() {
    let e = Math.sqrt(this._maxInstanceCount);
    e = Math.ceil(e);
    const t = e * e * 2, n = this.fadeTexture;
    if (!n || n.image.data.length !== t) {
      const s = new Uint8Array(t), i = new tm(s, e, e, ud, hd);
      if (n) {
        n.dispose();
        const r = n.image.data, o = this.fadeTexture.image.data, a = Math.min(r.length, o.length);
        o.set(new r.constructor(r.buffer, 0, a));
      }
      this.fadeTexture = i, this._fadeParams.fadeTexture.value = i, i.needsUpdate = true;
    }
  }
  // dispose the fade texture. Super cannot be used here due to proxy
  dispose() {
    this.fadeTexture && this.fadeTexture.dispose();
  }
}
class tm extends dd {
  setValueAt(e, ...t) {
    const { data: n, width: s, height: i } = this.image, r = Math.floor(n.length / (s * i));
    let o = false;
    for (let a = 0; a < r; a++) {
      const c = e * r + a, u = n[c], h = t[a] || 0;
      u !== h && (n[c] = h, o = true);
    }
    o && (this.needsUpdate = true);
  }
}
const Jl = Symbol("HAS_POPPED_IN"), ec = new P(), tc = new P(), nc = new Se(), sc = new Se(), ic = new P();
function nm() {
  const l15 = this._fadeManager, e = this.tiles;
  this._fadingBefore = l15.fadeCount, this._displayActiveTiles = e.displayActiveTiles, e.displayActiveTiles = true;
}
function sm() {
  const l15 = this._fadeManager, e = this._fadeMaterialManager, t = this._displayActiveTiles, n = this._fadingBefore, s = this._prevCameraTransforms, { tiles: i, maximumFadeOutTiles: r, batchedMesh: o } = this, { cameras: a } = i;
  i.displayActiveTiles = t, l15.update();
  const c = l15.fadeCount;
  if (n !== 0 && c !== 0 && (i.dispatchEvent({ type: "fade-change" }), i.dispatchEvent({ type: "needs-render" })), t || i.visibleTiles.forEach((u) => {
    const h = u.cached.scene;
    h && (h.visible = u.__inFrustum), this.forEachBatchIds(u, (d, p, m) => {
      p.setVisibleAt(d, u.__inFrustum), m.batchedMesh.setVisibleAt(d, u.__inFrustum);
    });
  }), r < this._fadingOutCount) {
    let u = true;
    a.forEach((h) => {
      if (!s.has(h))
        return;
      const d = h.matrixWorld, p = s.get(h);
      d.decompose(tc, sc, ic), p.decompose(ec, nc, ic);
      const m = sc.angleTo(nc), f = tc.distanceTo(ec);
      u = u && (m > 0.25 || f > 0.1);
    }), u && l15.completeAllFades();
  }
  if (a.forEach((u) => {
    s.get(u).copy(u.matrixWorld);
  }), l15.forEachObject((u, { fadeIn: h, fadeOut: d }) => {
    const p = u.cached.scene, m = l15.isFadingOut(u);
    i.markTileUsed(u), p && (e.setFade(p, h, d), m && (p.visible = true)), this.forEachBatchIds(u, (f, g, _) => {
      g.setFadeAt(f, h, d), g.setVisibleAt(f, true), _.batchedMesh.setVisibleAt(f, false);
    });
  }), o) {
    const u = i.getPluginByName("BATCHED_TILES_PLUGIN").batchedMesh.material;
    o.material.map = u.map;
  }
}
class im {
  get fadeDuration() {
    return this._fadeManager.duration;
  }
  set fadeDuration(e) {
    this._fadeManager.duration = Number(e);
  }
  get fadingTiles() {
    return this._fadeManager.fadeCount;
  }
  constructor(e) {
    e = {
      maximumFadeOutTiles: 50,
      fadeRootTiles: false,
      fadeDuration: 250,
      ...e
    }, this.name = "FADE_TILES_PLUGIN", this.priority = -2, this.tiles = null, this.batchedMesh = null, this._fadeManager = new Zf(), this._fadeMaterialManager = new Qf(), this._prevCameraTransforms = null, this._fadingOutCount = 0, this.maximumFadeOutTiles = e.maximumFadeOutTiles, this.fadeRootTiles = e.fadeRootTiles, this.fadeDuration = e.fadeDuration;
  }
  init(e) {
    this._onLoadModel = ({ scene: s }) => {
      this._fadeMaterialManager.prepareScene(s);
    }, this._onDisposeModel = ({ tile: s, scene: i }) => {
      this._fadeManager.deleteObject(s), this._fadeMaterialManager.deleteScene(i);
    }, this._onAddCamera = ({ camera: s }) => {
      this._prevCameraTransforms.set(s, new z());
    }, this._onDeleteCamera = ({ camera: s }) => {
      this._prevCameraTransforms.delete(s);
    }, this._onTileVisibilityChange = ({ tile: s, visible: i }) => {
      const r = s.cached.scene;
      r && (r.visible = true), this.forEachBatchIds(s, (o, a, c) => {
        a.setFadeAt(o, 0, 0), a.setVisibleAt(o, false), c.batchedMesh.setVisibleAt(o, false);
      });
    }, this._onUpdateBefore = () => {
      nm.call(this);
    }, this._onUpdateAfter = () => {
      sm.call(this);
    }, e.addEventListener("load-model", this._onLoadModel), e.addEventListener("dispose-model", this._onDisposeModel), e.addEventListener("add-camera", this._onAddCamera), e.addEventListener("delete-camera", this._onDeleteCamera), e.addEventListener("update-before", this._onUpdateBefore), e.addEventListener("update-after", this._onUpdateAfter), e.addEventListener("tile-visibility-change", this._onTileVisibilityChange);
    const t = this._fadeManager;
    t.onFadeSetStart = () => {
      e.dispatchEvent({ type: "fade-start" }), e.dispatchEvent({ type: "needs-render" });
    }, t.onFadeSetComplete = () => {
      e.dispatchEvent({ type: "fade-end" }), e.dispatchEvent({ type: "needs-render" });
    }, t.onFadeComplete = (s, i) => {
      this._fadeMaterialManager.setFade(s.cached.scene, 0, 0), this.forEachBatchIds(s, (r, o, a) => {
        o.setFadeAt(r, 0, 0), o.setVisibleAt(r, false), a.batchedMesh.setVisibleAt(r, i);
      }), i || (e.invokeOnePlugin((r) => r !== this && r.setTileVisible && r.setTileVisible(s, false)), this._fadingOutCount--);
    };
    const n = /* @__PURE__ */ new Map();
    e.cameras.forEach((s) => {
      n.set(s, new z());
    }), e.forEachLoadedModel((s, i) => {
      this._onLoadModel({ scene: s });
    }), this.tiles = e, this._fadeManager = t, this._prevCameraTransforms = n;
  }
  // initializes the batched mesh if it needs to be, dispose if it it's no longer needed
  initBatchedMesh() {
    const e = this.tiles.getPluginByName("BATCHED_TILES_PLUGIN")?.batchedMesh;
    if (e) {
      if (this.batchedMesh === null) {
        this._onBatchedMeshDispose = () => {
          this.batchedMesh.dispose(), this.batchedMesh.removeFromParent(), this.batchedMesh = null, e.removeEventListener("dispose", this._onBatchedMeshDispose);
        };
        const t = e.material.clone();
        t.onBeforeCompile = e.material.onBeforeCompile, this.batchedMesh = new em(e, t), this.tiles.group.add(this.batchedMesh);
      }
    } else
      this.batchedMesh !== null && (this._onBatchedMeshDispose(), this._onBatchedMeshDispose = null);
  }
  // callback for fading to prevent tiles from being removed until the fade effect has completed
  setTileVisible(e, t) {
    const n = this._fadeManager, s = n.isFading(e);
    if (n.isFadingOut(e) && this._fadingOutCount--, t ? e.__depthFromRenderedParent === 1 ? ((e[Jl] || this.fadeRootTiles) && this._fadeManager.fadeIn(e), e[Jl] = true) : this._fadeManager.fadeIn(e) : (this._fadingOutCount++, n.fadeOut(e)), s)
      return true;
    const i = this._fadeManager.isFading(e);
    return !!(!t && i);
  }
  dispose() {
    const e = this.tiles;
    this._fadeManager.completeAllFades(), this.batchedMesh !== null && this._onBatchedMeshDispose(), e.removeEventListener("load-model", this._onLoadModel), e.removeEventListener("dispose-model", this._onDisposeModel), e.removeEventListener("add-camera", this._onAddCamera), e.removeEventListener("delete-camera", this._onDeleteCamera), e.removeEventListener("update-before", this._onUpdateBefore), e.removeEventListener("update-after", this._onUpdateAfter), e.removeEventListener("tile-visibility-change", this._onTileVisibilityChange), e.forEachLoadedModel((t, n) => {
      this._fadeManager.deleteObject(n), t && (t.visible = true);
    });
  }
  // helper for iterating over the batch ids for a given tile
  forEachBatchIds(e, t) {
    if (this.initBatchedMesh(), this.batchedMesh) {
      const n = this.tiles.getPluginByName("BATCHED_TILES_PLUGIN"), s = n.getTileBatchIds(e);
      s && s.forEach((i) => {
        t(i, this.batchedMesh, n);
      });
    }
  }
}
const gt = new P(), rc = ["x", "y", "z"];
class rm extends dr {
  constructor(e, t = 16776960, n = 40) {
    const s = new $e(), i = [];
    for (let r = 0; r < 3; r++) {
      const o = rc[r], a = rc[(r + 1) % 3];
      gt.set(0, 0, 0);
      for (let c = 0; c < n; c++) {
        let u;
        u = 2 * Math.PI * c / (n - 1), gt[o] = Math.sin(u), gt[a] = Math.cos(u), i.push(gt.x, gt.y, gt.z), u = 2 * Math.PI * (c + 1) / (n - 1), gt[o] = Math.sin(u), gt[a] = Math.cos(u), i.push(gt.x, gt.y, gt.z);
      }
    }
    s.setAttribute("position", new we(new Float32Array(i), 3)), s.computeBoundingSphere(), super(s, new lr({ color: t, toneMapped: false })), this.sphere = e, this.type = "SphereHelper";
  }
  updateMatrixWorld(e) {
    const t = this.sphere;
    this.position.copy(t.center), this.scale.setScalar(t.radius), super.updateMatrixWorld(e);
  }
}
const oo = new P(), Fi = new P(), xt = new P();
new P();
new P();
function om(l15, { computeNormals: e = false } = {}) {
  const {
    latStart: t = -Math.PI / 2,
    latEnd: n = Math.PI / 2,
    lonStart: s = 0,
    lonEnd: i = 2 * Math.PI,
    heightStart: r = 0,
    heightEnd: o = 0
  } = l15, a = new cu(1, 1, 1, 32, 32), { normal: c, position: u } = a.attributes, h = u.clone();
  for (let d = 0, p = u.count; d < p; d++) {
    xt.fromBufferAttribute(u, d);
    const m = k.mapLinear(xt.x, -0.5, 0.5, t, n), f = k.mapLinear(xt.y, -0.5, 0.5, s, i);
    let g = r;
    l15.getCartographicToNormal(m, f, oo), xt.z < 0 && (g = o), l15.getCartographicToPosition(m, f, g, xt), u.setXYZ(d, ...xt);
  }
  e && a.computeVertexNormals();
  for (let d = 0, p = h.count; d < p; d++) {
    xt.fromBufferAttribute(h, d);
    const m = k.mapLinear(xt.x, -0.5, 0.5, t, n), f = k.mapLinear(xt.y, -0.5, 0.5, s, i);
    oo.fromBufferAttribute(c, d), l15.getCartographicToNormal(m, f, Fi), Math.abs(oo.dot(Fi)) > 0.1 && (xt.z > 0 && Fi.multiplyScalar(-1), c.setXYZ(d, ...Fi));
  }
  return a;
}
class am extends dr {
  constructor(e = new Iu(), t = 16776960) {
    super(), this.ellipsoidRegion = e, this.material.color.set(t), this.update();
  }
  update() {
    const e = om(this.ellipsoidRegion);
    this.geometry.dispose(), this.geometry = new pd(e, 80);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const oc = Symbol("ORIGINAL_MATERIAL"), ao = Symbol("HAS_RANDOM_COLOR"), lo = Symbol("HAS_RANDOM_NODE_COLOR"), co = Symbol("LOAD_TIME"), vn = Symbol("PARENT_BOUND_REF_COUNT"), ac = /* @__PURE__ */ new kn(), uo = () => {
}, ho = {};
function po(l15) {
  if (!ho[l15]) {
    const e = Math.random(), t = 0.5 + Math.random() * 0.5, n = 0.375 + Math.random() * 0.25;
    ho[l15] = new Ce().setHSL(e, t, n);
  }
  return ho[l15];
}
const Bs = 0, Nu = 1, Uu = 2, Bu = 3, zu = 4, Gu = 5, Hu = 6, Gi = 7, Hi = 8, ju = 9, Bo = 10, lm = Object.freeze({
  NONE: Bs,
  SCREEN_ERROR: Nu,
  GEOMETRIC_ERROR: Uu,
  DISTANCE: Bu,
  DEPTH: zu,
  RELATIVE_DEPTH: Gu,
  IS_LEAF: Hu,
  RANDOM_COLOR: Gi,
  RANDOM_NODE_COLOR: Hi,
  CUSTOM_COLOR: ju,
  LOAD_ORDER: Bo
});
class cm {
  static get ColorModes() {
    return lm;
  }
  get unlit() {
    return this._unlit;
  }
  set unlit(e) {
    e !== this._unlit && (this._unlit = e, this.materialsNeedUpdate = true);
  }
  get colorMode() {
    return this._colorMode;
  }
  set colorMode(e) {
    e !== this._colorMode && (this._colorMode = e, this.materialsNeedUpdate = true);
  }
  constructor(e) {
    e = {
      displayParentBounds: false,
      displayBoxBounds: false,
      displaySphereBounds: false,
      displayRegionBounds: false,
      colorMode: Bs,
      maxDebugDepth: -1,
      maxDebugDistance: -1,
      maxDebugError: -1,
      customColorCallback: null,
      unlit: false,
      enabled: true,
      ...e
    }, this.name = "DEBUG_TILES_PLUGIN", this.tiles = null, this._colorMode = null, this._unlit = null, this.materialsNeedUpdate = false, this.extremeDebugDepth = -1, this.extremeDebugError = -1, this.boxGroup = null, this.sphereGroup = null, this.regionGroup = null, this._enabled = e.enabled, this._displayParentBounds = e.displayParentBounds, this.displayBoxBounds = e.displayBoxBounds, this.displaySphereBounds = e.displaySphereBounds, this.displayRegionBounds = e.displayRegionBounds, this.colorMode = e.colorMode, this.maxDebugDepth = e.maxDebugDepth, this.maxDebugDistance = e.maxDebugDistance, this.maxDebugError = e.maxDebugError, this.customColorCallback = e.customColorCallback, this.unlit = e.unlit, this.getDebugColor = (t, n) => {
      n.setRGB(t, t, t);
    };
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    e !== this._enabled && this.tiles !== null && (e ? this.init(this.tiles) : this.dispose()), this._enabled = e;
  }
  get displayParentBounds() {
    return this._displayParentBounds;
  }
  set displayParentBounds(e) {
    this._displayParentBounds !== e && (this._displayParentBounds = e, e ? this.tiles.traverse((t) => {
      t.__visible && this._onTileVisibilityChange(t, true);
    }) : Io(this.tiles.root, null, (t) => {
      t[vn] = null, this._onTileVisibilityChange(t, t.__visible);
    }));
  }
  // initialize the groups for displaying helpers, register events, and initialize existing tiles
  init(e) {
    if (this.tiles = e, !this.enabled)
      return;
    const t = e.group;
    this.boxGroup = new ge(), this.boxGroup.name = "DebugTilesRenderer.boxGroup", t.add(this.boxGroup), this.boxGroup.updateMatrixWorld(), this.sphereGroup = new ge(), this.sphereGroup.name = "DebugTilesRenderer.sphereGroup", t.add(this.sphereGroup), this.sphereGroup.updateMatrixWorld(), this.regionGroup = new ge(), this.regionGroup.name = "DebugTilesRenderer.regionGroup", t.add(this.regionGroup), this.regionGroup.updateMatrixWorld(), this._onLoadTileSetCB = () => {
      this._initExtremes();
    }, this._onLoadModelCB = ({ scene: n, tile: s }) => {
      this._onLoadModel(n, s);
    }, this._onDisposeModelCB = ({ tile: n }) => {
      this._onDisposeModel(n);
    }, this._onUpdateAfterCB = () => {
      this._onUpdateAfter();
    }, this._onTileVisibilityChangeCB = ({ scene: n, tile: s, visible: i }) => {
      this._onTileVisibilityChange(s, i);
    }, e.addEventListener("load-tile-set", this._onLoadTileSetCB), e.addEventListener("load-model", this._onLoadModelCB), e.addEventListener("dispose-model", this._onDisposeModelCB), e.addEventListener("update-after", this._onUpdateAfterCB), e.addEventListener("tile-visibility-change", this._onTileVisibilityChangeCB), this._initExtremes(), e.traverse((n) => {
      n.cached.scene && this._onLoadModel(n.cached.scene, n);
    }), e.visibleTiles.forEach((n) => {
      this._onTileVisibilityChange(n, true);
    });
  }
  getTileInformationFromActiveObject(e) {
    let t = null;
    return this.tiles.activeTiles.forEach((s) => {
      if (t)
        return true;
      const i = s.cached.scene;
      i && i.traverse((r) => {
        r === e && (t = s);
      });
    }), t ? {
      distanceToCamera: t.__distanceFromCamera,
      geometricError: t.geometricError,
      screenSpaceError: t.__error,
      depth: t.__depth,
      isLeaf: t.__isLeaf
    } : null;
  }
  _initExtremes() {
    if (!(this.tiles && this.tiles.root))
      return;
    let e = -1, t = -1;
    Io(this.tiles.root, null, (n, s, i) => {
      e = Math.max(e, i), t = Math.max(t, n.geometricError);
    }), this.extremeDebugDepth = e, this.extremeDebugError = t;
  }
  _onUpdateAfter() {
    const { tiles: e, colorMode: t } = this;
    if (!e.root)
      return;
    this.materialsNeedUpdate && (e.forEachLoadedModel((c) => {
      this._updateMaterial(c);
    }), this.materialsNeedUpdate = false), this.boxGroup.visible = this.displayBoxBounds, this.sphereGroup.visible = this.displaySphereBounds, this.regionGroup.visible = this.displayRegionBounds;
    let n = -1;
    this.maxDebugDepth === -1 ? n = this.extremeDebugDepth : n = this.maxDebugDepth;
    let s = -1;
    this.maxDebugError === -1 ? s = this.extremeDebugError : s = this.maxDebugError;
    let i = -1;
    this.maxDebugDistance === -1 ? (e.getBoundingSphere(ac), i = ac.radius) : i = this.maxDebugDistance;
    const { errorTarget: r, visibleTiles: o } = e;
    let a;
    t === Bo && (a = Array.from(o).sort((c, u) => c[co] - u[co])), o.forEach((c) => {
      const u = c.cached.scene;
      let h, d, p;
      t === Gi && (h = Math.random(), d = 0.5 + Math.random() * 0.5, p = 0.375 + Math.random() * 0.25), u.traverse((m) => {
        if (t === Hi && (h = Math.random(), d = 0.5 + Math.random() * 0.5, p = 0.375 + Math.random() * 0.25), m.material)
          switch (t !== Gi && delete m.material[ao], t !== Hi && delete m.material[lo], t) {
            case zu: {
              const f = c.__depth / n;
              this.getDebugColor(f, m.material.color);
              break;
            }
            case Gu: {
              const f = c.__depthFromRenderedParent / n;
              this.getDebugColor(f, m.material.color);
              break;
            }
            case Nu: {
              const f = c.__error / r;
              f > 1 ? m.material.color.setRGB(1, 0, 0) : this.getDebugColor(f, m.material.color);
              break;
            }
            case Uu: {
              const f = Math.min(c.geometricError / s, 1);
              this.getDebugColor(f, m.material.color);
              break;
            }
            case Bu: {
              const f = Math.min(c.__distanceFromCamera / i, 1);
              this.getDebugColor(f, m.material.color);
              break;
            }
            case Hu: {
              !c.children || c.children.length === 0 ? this.getDebugColor(1, m.material.color) : this.getDebugColor(0, m.material.color);
              break;
            }
            case Hi: {
              m.material[lo] || (m.material.color.setHSL(h, d, p), m.material[lo] = true);
              break;
            }
            case Gi: {
              m.material[ao] || (m.material.color.setHSL(h, d, p), m.material[ao] = true);
              break;
            }
            case ju: {
              this.customColorCallback ? this.customColorCallback(c, m) : console.warn("DebugTilesRenderer: customColorCallback not defined");
              break;
            }
            case Bo: {
              const f = a.indexOf(c);
              this.getDebugColor(f / (a.length - 1), m.material.color);
              break;
            }
          }
      });
    });
  }
  _onTileVisibilityChange(e, t) {
    this.displayParentBounds ? Tp(e, (n) => {
      n[vn] == null && (n[vn] = 0), t ? n[vn]++ : n[vn] > 0 && n[vn]--;
      const s = n === e && t || this.displayParentBounds && n[vn] > 0;
      this._updateBoundHelper(n, s);
    }) : this._updateBoundHelper(e, t);
  }
  _createBoundHelper(e) {
    const t = this.tiles, n = e.cached, { sphere: s, obb: i, region: r } = n.boundingVolume;
    if (i) {
      const o = new ge();
      o.name = "DebugTilesRenderer.boxHelperGroup", o.matrix.copy(i.transform), o.matrixAutoUpdate = false;
      const a = new fd(i.box, po(e.__depth));
      a.raycast = uo, o.add(a), n.boxHelperGroup = o, t.visibleTiles.has(e) && this.displayBoxBounds && (this.boxGroup.add(o), o.updateMatrixWorld(true));
    }
    if (s) {
      const o = new rm(s, po(e.__depth));
      o.raycast = uo, n.sphereHelper = o, t.visibleTiles.has(e) && this.displaySphereBounds && (this.sphereGroup.add(o), o.updateMatrixWorld(true));
    }
    if (r) {
      const o = new am(r, po(e.__depth));
      o.raycast = uo;
      const a = new kn();
      r.getBoundingSphere(a), o.position.copy(a.center), a.center.multiplyScalar(-1), o.geometry.translate(...a.center), n.regionHelper = o, t.visibleTiles.has(e) && this.displayRegionBounds && (this.regionGroup.add(o), o.updateMatrixWorld(true));
    }
  }
  _updateHelperMaterial(e, t) {
    e.__visible || !this.displayParentBounds ? t.opacity = 1 : t.opacity = 0.2;
    const n = t.transparent;
    t.transparent = t.opacity < 1, t.transparent !== n && (t.needsUpdate = true);
  }
  _updateBoundHelper(e, t) {
    const n = e.cached;
    if (!n)
      return;
    const s = this.sphereGroup, i = this.boxGroup, r = this.regionGroup;
    t && n.boxHelperGroup == null && n.sphereHelper == null && n.regionHelper == null && this._createBoundHelper(e);
    const o = n.boxHelperGroup, a = n.sphereHelper, c = n.regionHelper;
    t ? (o && (i.add(o), o.updateMatrixWorld(true), this._updateHelperMaterial(e, o.children[0].material)), a && (s.add(a), a.updateMatrixWorld(true), this._updateHelperMaterial(e, a.material)), c && (r.add(c), c.updateMatrixWorld(true), this._updateHelperMaterial(e, c.material))) : (o && i.remove(o), a && s.remove(a), c && r.remove(c));
  }
  _updateMaterial(e) {
    const { colorMode: t, unlit: n } = this;
    e.traverse((s) => {
      if (!s.material)
        return;
      const i = s.material, r = s[oc];
      if (i !== r && i.dispose(), t !== Bs || n) {
        if (s.isPoints) {
          const o = new bs();
          o.size = r.size, o.sizeAttenuation = r.sizeAttenuation, s.material = o;
        } else n ? s.material = new Ne() : (s.material = new ii(), s.material.flatShading = true);
        t === Bs && (s.material.map = r.map, s.material.color.set(r.color));
      } else
        s.material = r;
    });
  }
  _onLoadModel(e, t) {
    t[co] = performance.now(), e.traverse((n) => {
      const s = n.material;
      s && (n[oc] = s);
    }), this._updateMaterial(e);
  }
  _onDisposeModel(e) {
    const t = e.cached;
    t.boxHelperGroup && (t.boxHelperGroup.children[0].geometry.dispose(), delete t.boxHelperGroup), t.sphereHelper && (t.sphereHelper.geometry.dispose(), delete t.sphereHelper), t.regionHelper && (t.regionHelper.geometry.dispose(), delete t.regionHelper);
  }
  dispose() {
    if (!this.enabled)
      return;
    const e = this.tiles;
    e.removeEventListener("load-tile-set", this._onLoadTileSetCB), e.removeEventListener("load-model", this._onLoadModelCB), e.removeEventListener("dispose-model", this._onDisposeModelCB), e.removeEventListener("update-after", this._onUpdateAfterCB), e.removeEventListener("tile-visibility-change", this._onTileVisibilityChangeCB), this.colorMode = Bs, this.unlit = false, e.forEachLoadedModel((t) => {
      this._updateMaterial(t);
    }), e.traverse((t) => {
      this._onDisposeModel(t);
    }), this.boxGroup?.removeFromParent(), this.sphereGroup?.removeFromParent(), this.regionGroup?.removeFromParent();
  }
}
const um = ["object"], hm = /* @__PURE__ */ ie({
  __name: "XYZTiles",
  props: {
    url: {},
    lruCacheMinSize: { default: 900 },
    lruCacheMaxSize: { default: 1300 },
    parseQueueMaxJobs: { default: 10 },
    errorTarget: { default: 10 },
    displayActiveTiles: { type: Boolean, default: true },
    autoDisableRendererCulling: { type: Boolean, default: true },
    tilesPlugins: { default: () => ({
      fadePlugin: {
        maximumFadeOutTiles: 200
      },
      xyzPlugin: {
        center: true,
        shape: "ellipsoid"
      }
    }) }
  },
  setup(l15) {
    const { camera: e, renderer: t } = Ms$1(), n = l15;
    let s = Ro(new No(n.url));
    function i() {
      s && s.dispose(), s = Ro(new No(n.url)), s.registerPlugin(new im(n.tilesPlugins.fadePlugin)), s.registerPlugin(new Yf()), s.registerPlugin(new Xf(n.tilesPlugins.xyzPlugin)), s.lruCache.minSize = n.lruCacheMinSize, s.lruCache.maxSize = n.lruCacheMaxSize, s.parseQueue.maxJobs = n.parseQueueMaxJobs, s.setCamera(e.value), s.setResolutionFromRenderer(e.value, t), s.errorTarget = n.errorTarget, s.displayActiveTiles = n.displayActiveTiles, s.autoDisableRendererCulling = n.autoDisableRendererCulling;
    }
    i(), O(
      () => n.url,
      (o, a) => {
        o !== a && i();
      }
    ), O(
      () => n,
      () => {
        i();
      },
      { deep: true }
    );
    const { onBeforeRender: r } = ml$1();
    return r(() => {
      s && (s.setResolutionFromRenderer(e.value, t), s.update());
    }), Le(() => {
      s && s.dispose();
    }), (o, a) => E(s) ? (Z(), me("primitive", {
      key: 0,
      object: E(s).group
    }, null, 8, um)) : Fe("", true);
  }
}), Ny = /* @__PURE__ */ ie({
  __name: "TDTTiles",
  props: {
    url: { default: "https://t0.tianditu.gov.cn" },
    service: { default: "WMTS" },
    request: { default: "GetTile" },
    version: { default: "1.0.0" },
    layer: { default: "vec" },
    tileStyle: { default: "default" },
    tileMatrixSet: { default: "w" },
    format: { default: "tiles" },
    tk: { default: "您的密钥" }
  },
  setup(l15) {
    const e = l15, t = ia(() => `${e.url}/${e.layer}_${e.tileMatrixSet}/${e.service.toLowerCase()}?SERVICE=${e.service.toUpperCase()}&REQUEST=${e.request}&VERSION=${e.version}&LAYER=${e.layer}&STYLE=${e.tileStyle}&TILEMATRIXSET=${e.tileMatrixSet}&FORMAT=${e.format}&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${e.tk}`);
    return (n, s) => (Z(), wt(hm, { url: t.value }, null, 8, ["url"]));
  }
}), dm = (l15, e) => {
  l15.addEventListener("tile-visibility-change", ({ tile: t, visible: n }) => {
    const s = t.cached.scene;
    n && e(s, t);
  });
}, pm = (l15, e) => {
  l15.addEventListener("tile-visibility-change", ({ tile: t, visible: n }) => {
    const s = t.cached.scene, i = l15.group;
    n || (s && (i.add(s), s.updateMatrixWorld(true)), e(s, t).then(() => {
      s && i.remove(s);
    }));
  });
};
function Ut(l15) {
  if (l15 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l15;
}
function Vu(l15, e) {
  l15.prototype = Object.create(e.prototype), l15.prototype.constructor = l15, l15.__proto__ = e;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var tt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ms = {
  duration: 0.5,
  overwrite: false,
  delay: 0
}, wa, Ee, re, dt = 1e8, se = 1 / dt, zo = Math.PI * 2, fm = zo / 4, mm = 0, Wu = Math.sqrt, gm = Math.cos, _m = Math.sin, Ae = function(e) {
  return typeof e == "string";
}, ue = function(e) {
  return typeof e == "function";
}, $t = function(e) {
  return typeof e == "number";
}, Aa = function(e) {
  return typeof e > "u";
}, Et = function(e) {
  return typeof e == "object";
}, He = function(e) {
  return e !== false;
}, Ma = function() {
  return typeof window < "u";
}, Ni = function(e) {
  return ue(e) || Ae(e);
}, $u = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Oe = Array.isArray, Go = /(?:-?\.?\d|\.)+/gi, Ku = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Yn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, fo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, qu = /[+-]=-?[.\d]+/, Xu = /[^,'"\[\]\s]+/gi, ym = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ae, bt, Ho, Pa, nt = {}, Ji = {}, Yu, Zu = function(e) {
  return (Ji = gs(e, nt)) && Ke;
}, Ea = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Xs = function(e, t) {
  return !t && console.warn(e);
}, Qu = function(e, t) {
  return e && (nt[e] = t) && Ji && (Ji[e] = t) || nt;
}, Ys = function() {
  return 0;
}, vm = {
  suppressEvents: true,
  isStart: true,
  kill: false
}, ji = {
  suppressEvents: true,
  kill: false
}, xm = {
  suppressEvents: true
}, Sa = {}, cn = [], jo = {}, Ju, Ye = {}, mo = {}, lc = 30, Vi = [], Ca = "", La = function(e) {
  var t = e[0], n, s;
  if (Et(t) || ue(t) || (e = [e]), !(n = (t._gsap || {}).harness)) {
    for (s = Vi.length; s-- && !Vi[s].targetTest(t); )
      ;
    n = Vi[s];
  }
  for (s = e.length; s--; )
    e[s] && (e[s]._gsap || (e[s]._gsap = new wh(e[s], n))) || e.splice(s, 1);
  return e;
}, Sn = function(e) {
  return e._gsap || La(pt(e))[0]._gsap;
}, eh = function(e, t, n) {
  return (n = e[t]) && ue(n) ? e[t]() : Aa(n) && e.getAttribute && e.getAttribute(t) || n;
}, je = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, he = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, fe = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ts = function(e, t) {
  var n = t.charAt(0), s = parseFloat(t.substr(2));
  return e = parseFloat(e), n === "+" ? e + s : n === "-" ? e - s : n === "*" ? e * s : e / s;
}, Tm = function(e, t) {
  for (var n = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < n; )
    ;
  return s < n;
}, er = function() {
  var e = cn.length, t = cn.slice(0), n, s;
  for (jo = {}, cn.length = 0, n = 0; n < e; n++)
    s = t[n], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], true)._lazy = 0);
}, Ra = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, th = function(e, t, n, s) {
  cn.length && !Ee && er(), e.render(t, n, !!(Ee && t < 0 && Ra(e))), cn.length && !Ee && er();
}, nh = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Xu).length < 2 ? t : Ae(e) ? e.trim() : e;
}, sh = function(e) {
  return e;
}, st = function(e, t) {
  for (var n in t)
    n in e || (e[n] = t[n]);
  return e;
}, bm = function(e) {
  return function(t, n) {
    for (var s in n)
      s in t || s === "duration" && e || s === "ease" || (t[s] = n[s]);
  };
}, gs = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, cc = function l(e, t) {
  for (var n in t)
    n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = Et(t[n]) ? l(e[n] || (e[n] = {}), t[n]) : t[n]);
  return e;
}, tr = function(e, t) {
  var n = {}, s;
  for (s in e)
    s in t || (n[s] = e[s]);
  return n;
}, js = function(e) {
  var t = e.parent || ae, n = e.keyframes ? bm(Oe(e.keyframes)) : st;
  if (He(e.inherit))
    for (; t; )
      n(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, wm = function(e, t) {
  for (var n = e.length, s = n === t.length; s && n-- && e[n] === t[n]; )
    ;
  return n < 0;
}, ih = function(e, t, n, s, i) {
  var r = e[s], o;
  if (i)
    for (o = t[i]; r && r[i] > o; )
      r = r._prev;
  return r ? (t._next = r._next, r._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[s] = t, t._prev = r, t.parent = t._dp = e, t;
}, yr = function(e, t, n, s) {
  n === void 0 && (n = "_first"), s === void 0 && (s = "_last");
  var i = t._prev, r = t._next;
  i ? i._next = r : e[n] === t && (e[n] = r), r ? r._prev = i : e[s] === t && (e[s] = i), t._next = t._prev = t.parent = null;
}, dn = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Cn = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var n = e; n; )
      n._dirty = 1, n = n.parent;
  return e;
}, Am = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Vo = function(e, t, n, s) {
  return e._startAt && (Ee ? e._startAt.revert(ji) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, s));
}, Mm = function l2(e) {
  return !e || e._ts && l2(e.parent);
}, uc = function(e) {
  return e._repeat ? _s(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, _s = function(e, t) {
  var n = Math.floor(e = fe(e / t));
  return e && n === e ? n - 1 : n;
}, nr = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, vr = function(e) {
  return e._end = fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || se) || 0));
}, xr = function(e, t) {
  var n = e._dp;
  return n && n.smoothChildTiming && e._ts && (e._start = fe(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), vr(e), n._dirty || Cn(n, e)), e;
}, rh = function(e, t) {
  var n;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = nr(e.rawTime(), t), (!t._dur || ci(0, t.totalDuration(), n) - t._tTime > se) && t.render(n, true)), Cn(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (n = e; n._dp; )
        n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    e._zTime = -se;
  }
}, At = function(e, t, n, s) {
  return t.parent && dn(t), t._start = fe(($t(n) ? n : n || e !== ae ? at(e, n, t) : e._time) + t._delay), t._end = fe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ih(e, t, "_first", "_last", e._sort ? "_start" : 0), Wo(t) || (e._recent = t), s || rh(e, t), e._ts < 0 && xr(e, e._tTime), e;
}, oh = function(e, t) {
  return (nt.ScrollTrigger || Ea("scrollTrigger", t)) && nt.ScrollTrigger.create(t, e);
}, ah = function(e, t, n, s, i) {
  if (Oa(e, t, i), !e._initted)
    return 1;
  if (!n && e._pt && !Ee && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && Ju !== Ze.frame)
    return cn.push(e), e._lazy = [i, s], 1;
}, Pm = function l3(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || l3(t));
}, Wo = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Em = function(e, t, n, s) {
  var i = e.ratio, r = t < 0 || !t && (!e._start && Pm(e) && !(!e._initted && Wo(e)) || (e._ts < 0 || e._dp._ts < 0) && !Wo(e)) ? 0 : 1, o = e._rDelay, a = 0, c, u, h;
  if (o && e._repeat && (a = ci(0, e._tDur, t), u = _s(a, o), e._yoyo && u & 1 && (r = 1 - r), u !== _s(e._tTime, o) && (i = 1 - r, e.vars.repeatRefresh && e._initted && e.invalidate())), r !== i || Ee || s || e._zTime === se || !t && e._zTime) {
    if (!e._initted && ah(e, t, s, n, a))
      return;
    for (h = e._zTime, e._zTime = t || (n ? se : 0), n || (n = t && !h), e.ratio = r, e._from && (r = 1 - r), e._time = 0, e._tTime = a, c = e._pt; c; )
      c.r(r, c.d), c = c._next;
    t < 0 && Vo(e, t, n, true), e._onUpdate && !n && Qe(e, "onUpdate"), a && e._repeat && !n && e.parent && Qe(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === r && (r && dn(e, 1), !n && !Ee && (Qe(e, r ? "onComplete" : "onReverseComplete", true), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, Sm = function(e, t, n) {
  var s;
  if (n > t)
    for (s = e._first; s && s._start <= n; ) {
      if (s.data === "isPause" && s._start > t)
        return s;
      s = s._next;
    }
  else
    for (s = e._last; s && s._start >= n; ) {
      if (s.data === "isPause" && s._start < t)
        return s;
      s = s._prev;
    }
}, ys = function(e, t, n, s) {
  var i = e._repeat, r = fe(t) || 0, o = e._tTime / e._tDur;
  return o && !s && (e._time *= r / e._dur), e._dur = r, e._tDur = i ? i < 0 ? 1e10 : fe(r * (i + 1) + e._rDelay * i) : r, o > 0 && !s && xr(e, e._tTime = e._tDur * o), e.parent && vr(e), n || Cn(e.parent, e), e;
}, hc = function(e) {
  return e instanceof ke ? Cn(e) : ys(e, e._dur);
}, Cm = {
  _start: 0,
  endTime: Ys,
  totalDuration: Ys
}, at = function l4(e, t, n) {
  var s = e.labels, i = e._recent || Cm, r = e.duration() >= dt ? i.endTime(false) : e._dur, o, a, c;
  return Ae(t) && (isNaN(t) || t in s) ? (a = t.charAt(0), c = t.substr(-1) === "%", o = t.indexOf("="), a === "<" || a === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (a === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (o < 0 ? i : n).totalDuration() / 100 : 1)) : o < 0 ? (t in s || (s[t] = r), s[t]) : (a = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), c && n && (a = a / 100 * (Oe(n) ? n[0] : n).totalDuration()), o > 1 ? l4(e, t.substr(0, o - 1), n) + a : r + a)) : t == null ? r : +t;
}, Vs = function(e, t, n) {
  var s = $t(t[1]), i = (s ? 2 : 1) + (e < 2 ? 0 : 1), r = t[i], o, a;
  if (s && (r.duration = t[1]), r.parent = n, e) {
    for (o = r, a = n; a && !("immediateRender" in o); )
      o = a.vars.defaults || {}, a = He(a.vars.inherit) && a.parent;
    r.immediateRender = He(o.immediateRender), e < 2 ? r.runBackwards = 1 : r.startAt = t[i - 1];
  }
  return new pe(t[0], r, t[i + 1]);
}, fn = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, ci = function(e, t, n) {
  return n < e ? e : n > t ? t : n;
}, De = function(e, t) {
  return !Ae(e) || !(t = ym.exec(e)) ? "" : t[1];
}, Lm = function(e, t, n) {
  return fn(n, function(s) {
    return ci(e, t, s);
  });
}, $o = [].slice, lh = function(e, t) {
  return e && Et(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Et(e[0])) && !e.nodeType && e !== bt;
}, Rm = function(e, t, n) {
  return n === void 0 && (n = []), e.forEach(function(s) {
    var i;
    return Ae(s) && !t || lh(s, 1) ? (i = n).push.apply(i, pt(s)) : n.push(s);
  }) || n;
}, pt = function(e, t, n) {
  return re && !t && re.selector ? re.selector(e) : Ae(e) && !n && (Ho || !vs()) ? $o.call((t || Pa).querySelectorAll(e), 0) : Oe(e) ? Rm(e, n) : lh(e) ? $o.call(e, 0) : e ? [e] : [];
}, Ko = function(e) {
  return e = pt(e)[0] || Xs("Invalid scope") || {}, function(t) {
    var n = e.current || e.nativeElement || e;
    return pt(t, n.querySelectorAll ? n : n === e ? Xs("Invalid scope") || Pa.createElement("div") : e);
  };
}, ch = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, uh = function(e) {
  if (ue(e))
    return e;
  var t = Et(e) ? e : {
    each: e
  }, n = Ln(t.ease), s = t.from || 0, i = parseFloat(t.base) || 0, r = {}, o = s > 0 && s < 1, a = isNaN(s) || o, c = t.axis, u = s, h = s;
  return Ae(s) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[s] || 0 : !o && a && (u = s[0], h = s[1]), function(d, p, m) {
    var f = (m || t).length, g = r[f], _, y, v, x, T, A, w, M, b;
    if (!g) {
      if (b = t.grid === "auto" ? 0 : (t.grid || [1, dt])[1], !b) {
        for (w = -dt; w < (w = m[b++].getBoundingClientRect().left) && b < f; )
          ;
        b < f && b--;
      }
      for (g = r[f] = [], _ = a ? Math.min(b, f) * u - 0.5 : s % b, y = b === dt ? 0 : a ? f * h / b - 0.5 : s / b | 0, w = 0, M = dt, A = 0; A < f; A++)
        v = A % b - _, x = y - (A / b | 0), g[A] = T = c ? Math.abs(c === "y" ? x : v) : Wu(v * v + x * x), T > w && (w = T), T < M && (M = T);
      s === "random" && ch(g), g.max = w - M, g.min = M, g.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (b > f ? f - 1 : c ? c === "y" ? f / b : b : Math.max(b, f / b)) || 0) * (s === "edges" ? -1 : 1), g.b = f < 0 ? i - f : i, g.u = De(t.amount || t.each) || 0, n = n && f < 0 ? xh(n) : n;
    }
    return f = (g[d] - g.min) / g.max || 0, fe(g.b + (n ? n(f) : f) * g.v) + g.u;
  };
}, qo = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(n) {
    var s = fe(Math.round(parseFloat(n) / e) * e * t);
    return (s - s % 1) / t + ($t(n) ? 0 : De(n));
  };
}, hh = function(e, t) {
  var n = Oe(e), s, i;
  return !n && Et(e) && (s = n = e.radius || dt, e.values ? (e = pt(e.values), (i = !$t(e[0])) && (s *= s)) : e = qo(e.increment)), fn(t, n ? ue(e) ? function(r) {
    return i = e(r), Math.abs(i - r) <= s ? i : r;
  } : function(r) {
    for (var o = parseFloat(i ? r.x : r), a = parseFloat(i ? r.y : 0), c = dt, u = 0, h = e.length, d, p; h--; )
      i ? (d = e[h].x - o, p = e[h].y - a, d = d * d + p * p) : d = Math.abs(e[h] - o), d < c && (c = d, u = h);
    return u = !s || c <= s ? e[u] : r, i || u === r || $t(r) ? u : u + De(r);
  } : qo(e));
}, dh = function(e, t, n, s) {
  return fn(Oe(e) ? !t : n === true ? !!(n = 0) : !s, function() {
    return Oe(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (s = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * s) / s;
  });
}, Dm = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(s) {
    return t.reduce(function(i, r) {
      return r(i);
    }, s);
  };
}, Om = function(e, t) {
  return function(n) {
    return e(parseFloat(n)) + (t || De(n));
  };
}, Im = function(e, t, n) {
  return fh(e, t, 0, 1, n);
}, ph = function(e, t, n) {
  return fn(n, function(s) {
    return e[~~t(s)];
  });
}, km = function l5(e, t, n) {
  var s = t - e;
  return Oe(e) ? ph(e, l5(0, e.length), t) : fn(n, function(i) {
    return (s + (i - e) % s) % s + e;
  });
}, Fm = function l6(e, t, n) {
  var s = t - e, i = s * 2;
  return Oe(e) ? ph(e, l6(0, e.length - 1), t) : fn(n, function(r) {
    return r = (i + (r - e) % i) % i || 0, e + (r > s ? i - r : r);
  });
}, Zs = function(e) {
  for (var t = 0, n = "", s, i, r, o; ~(s = e.indexOf("random(", t)); )
    r = e.indexOf(")", s), o = e.charAt(s + 7) === "[", i = e.substr(s + 7, r - s - 7).match(o ? Xu : Go), n += e.substr(t, s - t) + dh(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5), t = r + 1;
  return n + e.substr(t, e.length - t);
}, fh = function(e, t, n, s, i) {
  var r = t - e, o = s - n;
  return fn(i, function(a) {
    return n + ((a - e) / r * o || 0);
  });
}, Nm = function l7(e, t, n, s) {
  var i = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!i) {
    var r = Ae(e), o = {}, a, c, u, h, d;
    if (n === true && (s = 1) && (n = null), r)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (Oe(e) && !Oe(t)) {
      for (u = [], h = e.length, d = h - 2, c = 1; c < h; c++)
        u.push(l7(e[c - 1], e[c]));
      h--, i = function(m) {
        m *= h;
        var f = Math.min(d, ~~m);
        return u[f](m - f);
      }, n = t;
    } else s || (e = gs(Oe(e) ? [] : {}, e));
    if (!u) {
      for (a in t)
        Da.call(o, e, a, "get", t[a]);
      i = function(m) {
        return Fa(m, o) || (r ? e.p : e);
      };
    }
  }
  return fn(n, i);
}, dc = function(e, t, n) {
  var s = e.labels, i = dt, r, o, a;
  for (r in s)
    o = s[r] - t, o < 0 == !!n && o && i > (o = Math.abs(o)) && (a = r, i = o);
  return a;
}, Qe = function(e, t, n) {
  var s = e.vars, i = s[t], r = re, o = e._ctx, a, c, u;
  if (i)
    return a = s[t + "Params"], c = s.callbackScope || e, n && cn.length && er(), o && (re = o), u = a ? i.apply(c, a) : i.call(c), re = r, u;
}, zs = function(e) {
  return dn(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ee), e.progress() < 1 && Qe(e, "onInterrupt"), e;
}, Zn, mh = [], gh = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Ma() || e.headless) {
      var t = e.name, n = ue(e), s = t && !n && e.init ? function() {
        this._props = [];
      } : e, i = {
        init: Ys,
        render: Fa,
        add: Da,
        kill: Jm,
        modifier: Qm,
        rawVars: 0
      }, r = {
        targetTest: 0,
        get: 0,
        getSetter: ka,
        aliases: {},
        register: 0
      };
      if (vs(), e !== s) {
        if (Ye[t])
          return;
        st(s, st(tr(e, i), r)), gs(s.prototype, gs(i, tr(e, r))), Ye[s.prop = t] = s, e.targetTest && (Vi.push(s), Sa[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Qu(t, s), e.register && e.register(Ke, s, Ve);
    } else
      mh.push(e);
}, ne = 255, Gs = {
  aqua: [0, ne, ne],
  lime: [0, ne, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ne],
  navy: [0, 0, 128],
  white: [ne, ne, ne],
  olive: [128, 128, 0],
  yellow: [ne, ne, 0],
  orange: [ne, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ne, 0, 0],
  pink: [ne, 192, 203],
  cyan: [0, ne, ne],
  transparent: [ne, ne, ne, 0]
}, go = function(e, t, n) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * ne + 0.5 | 0;
}, _h = function(e, t, n) {
  var s = e ? $t(e) ? [e >> 16, e >> 8 & ne, e & ne] : 0 : Gs.black, i, r, o, a, c, u, h, d, p, m;
  if (!s) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Gs[e])
      s = Gs[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (i = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + i + i + r + r + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return s = parseInt(e.substr(1, 6), 16), [s >> 16, s >> 8 & ne, s & ne, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), s = [e >> 16, e >> 8 & ne, e & ne];
    } else if (e.substr(0, 3) === "hsl") {
      if (s = m = e.match(Go), !t)
        a = +s[0] % 360 / 360, c = +s[1] / 100, u = +s[2] / 100, r = u <= 0.5 ? u * (c + 1) : u + c - u * c, i = u * 2 - r, s.length > 3 && (s[3] *= 1), s[0] = go(a + 1 / 3, i, r), s[1] = go(a, i, r), s[2] = go(a - 1 / 3, i, r);
      else if (~e.indexOf("="))
        return s = e.match(Ku), n && s.length < 4 && (s[3] = 1), s;
    } else
      s = e.match(Go) || Gs.transparent;
    s = s.map(Number);
  }
  return t && !m && (i = s[0] / ne, r = s[1] / ne, o = s[2] / ne, h = Math.max(i, r, o), d = Math.min(i, r, o), u = (h + d) / 2, h === d ? a = c = 0 : (p = h - d, c = u > 0.5 ? p / (2 - h - d) : p / (h + d), a = h === i ? (r - o) / p + (r < o ? 6 : 0) : h === r ? (o - i) / p + 2 : (i - r) / p + 4, a *= 60), s[0] = ~~(a + 0.5), s[1] = ~~(c * 100 + 0.5), s[2] = ~~(u * 100 + 0.5)), n && s.length < 4 && (s[3] = 1), s;
}, yh = function(e) {
  var t = [], n = [], s = -1;
  return e.split(un).forEach(function(i) {
    var r = i.match(Yn) || [];
    t.push.apply(t, r), n.push(s += r.length + 1);
  }), t.c = n, t;
}, pc = function(e, t, n) {
  var s = "", i = (e + s).match(un), r = t ? "hsla(" : "rgba(", o = 0, a, c, u, h;
  if (!i)
    return e;
  if (i = i.map(function(d) {
    return (d = _h(d, t, 1)) && r + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), n && (u = yh(e), a = n.c, a.join(s) !== u.c.join(s)))
    for (c = e.replace(un, "1").split(Yn), h = c.length - 1; o < h; o++)
      s += c[o] + (~a.indexOf(o) ? i.shift() || r + "0,0,0,0)" : (u.length ? u : i.length ? i : n).shift());
  if (!c)
    for (c = e.split(un), h = c.length - 1; o < h; o++)
      s += c[o] + i[o];
  return s + c[h];
}, un = function() {
  var l15 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Gs)
    l15 += "|" + e + "\\b";
  return new RegExp(l15 + ")", "gi");
}(), Um = /hsl[a]?\(/, vh = function(e) {
  var t = e.join(" "), n;
  if (un.lastIndex = 0, un.test(t))
    return n = Um.test(t), e[1] = pc(e[1], n), e[0] = pc(e[0], n, yh(e[1])), true;
}, Qs, Ze = function() {
  var l15 = Date.now, e = 500, t = 33, n = l15(), s = n, i = 1e3 / 240, r = i, o = [], a, c, u, h, d, p, m = function f(g) {
    var _ = l15() - s, y = g === true, v, x, T, A;
    if ((_ > e || _ < 0) && (n += _ - t), s += _, T = s - n, v = T - r, (v > 0 || y) && (A = ++h.frame, d = T - h.time * 1e3, h.time = T = T / 1e3, r += v + (v >= i ? 4 : i - v), x = 1), y || (a = c(f)), x)
      for (p = 0; p < o.length; p++)
        o[p](T, d, A, g);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      m(true);
    },
    deltaRatio: function(g) {
      return d / (1e3 / (g || 60));
    },
    wake: function() {
      Yu && (!Ho && Ma() && (bt = Ho = window, Pa = bt.document || {}, nt.gsap = Ke, (bt.gsapVersions || (bt.gsapVersions = [])).push(Ke.version), Zu(Ji || bt.GreenSockGlobals || !bt.gsap && bt || {}), mh.forEach(gh)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, a && h.sleep(), c = u || function(g) {
        return setTimeout(g, r - h.time * 1e3 + 1 | 0);
      }, Qs = 1, m(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(a), Qs = 0, c = Ys;
    },
    lagSmoothing: function(g, _) {
      e = g || 1 / 0, t = Math.min(_ || 33, e);
    },
    fps: function(g) {
      i = 1e3 / (g || 240), r = h.time * 1e3 + i;
    },
    add: function(g, _, y) {
      var v = _ ? function(x, T, A, w) {
        g(x, T, A, w), h.remove(v);
      } : g;
      return h.remove(g), o[y ? "unshift" : "push"](v), vs(), v;
    },
    remove: function(g, _) {
      ~(_ = o.indexOf(g)) && o.splice(_, 1) && p >= _ && p--;
    },
    _listeners: o
  }, h;
}(), vs = function() {
  return !Qs && Ze.wake();
}, q = {}, Bm = /^[\d.\-M][\d.\-,\s]/, zm = /["']/g, Gm = function(e) {
  for (var t = {}, n = e.substr(1, e.length - 3).split(":"), s = n[0], i = 1, r = n.length, o, a, c; i < r; i++)
    a = n[i], o = i !== r - 1 ? a.lastIndexOf(",") : a.length, c = a.substr(0, o), t[s] = isNaN(c) ? c.replace(zm, "").trim() : +c, s = a.substr(o + 1).trim();
  return t;
}, Hm = function(e) {
  var t = e.indexOf("(") + 1, n = e.indexOf(")"), s = e.indexOf("(", t);
  return e.substring(t, ~s && s < n ? e.indexOf(")", n + 1) : n);
}, jm = function(e) {
  var t = (e + "").split("("), n = q[t[0]];
  return n && t.length > 1 && n.config ? n.config.apply(null, ~e.indexOf("{") ? [Gm(t[1])] : Hm(e).split(",").map(nh)) : q._CE && Bm.test(e) ? q._CE("", e) : n;
}, xh = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Th = function l8(e, t) {
  for (var n = e._first, s; n; )
    n instanceof ke ? l8(n, t) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== t && (n.timeline ? l8(n.timeline, t) : (s = n._ease, n._ease = n._yEase, n._yEase = s, n._yoyo = t)), n = n._next;
}, Ln = function(e, t) {
  return e && (ue(e) ? e : q[e] || jm(e)) || t;
}, Nn = function(e, t, n, s) {
  n === void 0 && (n = function(a) {
    return 1 - t(1 - a);
  }), s === void 0 && (s = function(a) {
    return a < 0.5 ? t(a * 2) / 2 : 1 - t((1 - a) * 2) / 2;
  });
  var i = {
    easeIn: t,
    easeOut: n,
    easeInOut: s
  }, r;
  return je(e, function(o) {
    q[o] = nt[o] = i, q[r = o.toLowerCase()] = n;
    for (var a in i)
      q[r + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = q[o + "." + a] = i[a];
  }), i;
}, bh = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, _o = function l9(e, t, n) {
  var s = t >= 1 ? t : 1, i = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), r = i / zo * (Math.asin(1 / s) || 0), o = function(u) {
    return u === 1 ? 1 : s * Math.pow(2, -10 * u) * _m((u - r) * i) + 1;
  }, a = e === "out" ? o : e === "in" ? function(c) {
    return 1 - o(1 - c);
  } : bh(o);
  return i = zo / i, a.config = function(c, u) {
    return l9(e, c, u);
  }, a;
}, yo = function l10(e, t) {
  t === void 0 && (t = 1.70158);
  var n = function(r) {
    return r ? --r * r * ((t + 1) * r + t) + 1 : 0;
  }, s = e === "out" ? n : e === "in" ? function(i) {
    return 1 - n(1 - i);
  } : bh(n);
  return s.config = function(i) {
    return l10(e, i);
  }, s;
};
je("Linear,Quad,Cubic,Quart,Quint,Strong", function(l15, e) {
  var t = e < 5 ? e + 1 : e;
  Nn(l15 + ",Power" + (t - 1), e ? function(n) {
    return Math.pow(n, t);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, t);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
  });
});
q.Linear.easeNone = q.none = q.Linear.easeIn;
Nn("Elastic", _o("in"), _o("out"), _o());
(function(l15, e) {
  var t = 1 / e, n = 2 * t, s = 2.5 * t, i = function(o) {
    return o < t ? l15 * o * o : o < n ? l15 * Math.pow(o - 1.5 / e, 2) + 0.75 : o < s ? l15 * (o -= 2.25 / e) * o + 0.9375 : l15 * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  Nn("Bounce", function(r) {
    return 1 - i(1 - r);
  }, i);
})(7.5625, 2.75);
Nn("Expo", function(l15) {
  return Math.pow(2, 10 * (l15 - 1)) * l15 + l15 * l15 * l15 * l15 * l15 * l15 * (1 - l15);
});
Nn("Circ", function(l15) {
  return -(Wu(1 - l15 * l15) - 1);
});
Nn("Sine", function(l15) {
  return l15 === 1 ? 1 : -gm(l15 * fm) + 1;
});
Nn("Back", yo("in"), yo("out"), yo());
q.SteppedEase = q.steps = nt.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var n = 1 / e, s = e + (t ? 0 : 1), i = t ? 1 : 0, r = 1 - se;
    return function(o) {
      return ((s * ci(0, r, o) | 0) + i) * n;
    };
  }
};
ms.ease = q["quad.out"];
je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(l15) {
  return Ca += l15 + "," + l15 + "Params,";
});
var wh = function(e, t) {
  this.id = mm++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : eh, this.set = t ? t.getSetter : ka;
}, Js = /* @__PURE__ */ function() {
  function l15(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, ys(this, +t.duration, 1, 1), this.data = t.data, re && (this._ctx = re, re.data.push(this)), Qs || Ze.wake();
  }
  var e = l15.prototype;
  return e.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, e.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, ys(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(n, s) {
    if (vs(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (xr(this, n), !i._dp || i.parent || rh(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, true), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && At(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !s || this._initted && Math.abs(this._zTime) === se || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), th(this, n, s)), this;
  }, e.time = function(n, s) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + uc(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), s) : this._time;
  }, e.totalProgress = function(n, s) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(n, s) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + uc(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(n, s) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * i, s) : this._repeat ? _s(this._tTime, i) + 1 : 1;
  }, e.timeScale = function(n, s) {
    if (!arguments.length)
      return this._rts === -se ? 0 : this._rts;
    if (this._rts === n)
      return this;
    var i = this.parent && this._ts ? nr(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -se ? 0 : this._rts, this.totalTime(ci(-Math.abs(this._delay), this.totalDuration(), i), s !== false), vr(this), Am(this);
  }, e.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (vs(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== se && (this._tTime -= se)))), this) : this._ps;
  }, e.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var s = this.parent || this._dp;
      return s && (s._sort || !this.parent) && At(s, this, n - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(n) {
    return this._start + (He(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(n) {
    var s = this.parent || this._dp;
    return s ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? nr(s.rawTime(n), this) : this._tTime : this._tTime;
  }, e.revert = function(n) {
    n === void 0 && (n = xm);
    var s = Ee;
    return Ee = n, Ra(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), Ee = s, this;
  }, e.globalTime = function(n) {
    for (var s = this, i = arguments.length ? n : s.rawTime(); s; )
      i = s._start + i / (Math.abs(s._ts) || 1), s = s._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : i;
  }, e.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, hc(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(n) {
    if (arguments.length) {
      var s = this._time;
      return this._rDelay = n, hc(this), s ? this.time(s) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, e.seek = function(n, s) {
    return this.totalTime(at(this, n), He(s));
  }, e.restart = function(n, s) {
    return this.play().totalTime(n ? -this._delay : 0, He(s)), this._dur || (this._zTime = -se), this;
  }, e.play = function(n, s) {
    return n != null && this.seek(n, s), this.reversed(false).paused(false);
  }, e.reverse = function(n, s) {
    return n != null && this.seek(n || this.totalDuration(), s), this.reversed(true).paused(false);
  }, e.pause = function(n, s) {
    return n != null && this.seek(n, s), this.paused(true);
  }, e.resume = function() {
    return this.paused(false);
  }, e.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -se : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -se, this;
  }, e.isActive = function() {
    var n = this.parent || this._dp, s = this._start, i;
    return !!(!n || this._ts && this._initted && n.isActive() && (i = n.rawTime(true)) >= s && i < this.endTime(true) - se);
  }, e.eventCallback = function(n, s, i) {
    var r = this.vars;
    return arguments.length > 1 ? (s ? (r[n] = s, i && (r[n + "Params"] = i), n === "onUpdate" && (this._onUpdate = s)) : delete r[n], this) : r[n];
  }, e.then = function(n) {
    var s = this;
    return new Promise(function(i) {
      var r = ue(n) ? n : sh, o = function() {
        var c = s.then;
        s.then = null, ue(r) && (r = r(s)) && (r.then || r === s) && (s.then = c), i(r), s.then = c;
      };
      s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? o() : s._prom = o;
    });
  }, e.kill = function() {
    zs(this);
  }, l15;
}();
st(Js.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -se,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var ke = /* @__PURE__ */ function(l15) {
  Vu(e, l15);
  function e(n, s) {
    var i;
    return n === void 0 && (n = {}), i = l15.call(this, n) || this, i.labels = {}, i.smoothChildTiming = !!n.smoothChildTiming, i.autoRemoveChildren = !!n.autoRemoveChildren, i._sort = He(n.sortChildren), ae && At(n.parent || ae, Ut(i), s), n.reversed && i.reverse(), n.paused && i.paused(true), n.scrollTrigger && oh(Ut(i), n.scrollTrigger), i;
  }
  var t = e.prototype;
  return t.to = function(s, i, r) {
    return Vs(0, arguments, this), this;
  }, t.from = function(s, i, r) {
    return Vs(1, arguments, this), this;
  }, t.fromTo = function(s, i, r, o) {
    return Vs(2, arguments, this), this;
  }, t.set = function(s, i, r) {
    return i.duration = 0, i.parent = this, js(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new pe(s, i, at(this, r), 1), this;
  }, t.call = function(s, i, r) {
    return At(this, pe.delayedCall(0, s, i), r);
  }, t.staggerTo = function(s, i, r, o, a, c, u) {
    return r.duration = i, r.stagger = r.stagger || o, r.onComplete = c, r.onCompleteParams = u, r.parent = this, new pe(s, r, at(this, a)), this;
  }, t.staggerFrom = function(s, i, r, o, a, c, u) {
    return r.runBackwards = 1, js(r).immediateRender = He(r.immediateRender), this.staggerTo(s, i, r, o, a, c, u);
  }, t.staggerFromTo = function(s, i, r, o, a, c, u, h) {
    return o.startAt = r, js(o).immediateRender = He(o.immediateRender), this.staggerTo(s, i, o, a, c, u, h);
  }, t.render = function(s, i, r) {
    var o = this._time, a = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = s <= 0 ? 0 : fe(s), h = this._zTime < 0 != s < 0 && (this._initted || !c), d, p, m, f, g, _, y, v, x, T, A, w;
    if (this !== ae && u > a && s >= 0 && (u = a), u !== this._tTime || r || h) {
      if (o !== this._time && c && (u += this._time - o, s += this._time - o), d = u, x = this._start, v = this._ts, _ = !v, h && (c || (o = this._zTime), (s || !i) && (this._zTime = s)), this._repeat) {
        if (A = this._yoyo, g = c + this._rDelay, this._repeat < -1 && s < 0)
          return this.totalTime(g * 100 + s, i, r);
        if (d = fe(u % g), u === a ? (f = this._repeat, d = c) : (T = fe(u / g), f = ~~T, f && f === T && (d = c, f--), d > c && (d = c)), T = _s(this._tTime, g), !o && this._tTime && T !== f && this._tTime - T * g - this._dur <= 0 && (T = f), A && f & 1 && (d = c - d, w = 1), f !== T && !this._lock) {
          var M = A && T & 1, b = M === (A && f & 1);
          if (f < T && (M = !M), o = M ? 0 : u % c ? c : u, this._lock = 1, this.render(o || (w ? 0 : fe(f * g)), i, !c)._lock = 0, this._tTime = u, !i && this.parent && Qe(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), o && o !== this._time || _ !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, a = this._tDur, b && (this._lock = 2, o = M ? c : -1e-4, this.render(o, true), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !_)
            return this;
          Th(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Sm(this, fe(o), fe(d)), y && (u -= d - (d = y._start))), this._tTime = u, this._time = d, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, o = 0), !o && u && !i && !T && (Qe(this, "onStart"), this._tTime !== u))
        return this;
      if (d >= o && s >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(s, i, r);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, i, r), d !== this._time || !this._ts && !_) {
              y = 0, m && (u += this._zTime = -se);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var S = s < 0 ? s : d; p; ) {
          if (m = p._prev, (p._act || S <= p._end) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(s, i, r);
            if (p.render(p._ts > 0 ? (S - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (S - p._start) * p._ts, i, r || Ee && Ra(p)), d !== this._time || !this._ts && !_) {
              y = 0, m && (u += this._zTime = S ? -se : se);
              break;
            }
          }
          p = m;
        }
      }
      if (y && !i && (this.pause(), y.render(d >= o ? 0 : -se)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = x, vr(this), this.render(s, i, r);
      this._onUpdate && !i && Qe(this, "onUpdate", true), (u === a && this._tTime >= this.totalDuration() || !u && o) && (x === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((s || !c) && (u === a && this._ts > 0 || !u && this._ts < 0) && dn(this, 1), !i && !(s < 0 && !o) && (u || o || !a) && (Qe(this, u === a && s >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(u < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(s, i) {
    var r = this;
    if ($t(i) || (i = at(this, i, s)), !(s instanceof Js)) {
      if (Oe(s))
        return s.forEach(function(o) {
          return r.add(o, i);
        }), this;
      if (Ae(s))
        return this.addLabel(s, i);
      if (ue(s))
        s = pe.delayedCall(0, s);
      else
        return this;
    }
    return this !== s ? At(this, s, i) : this;
  }, t.getChildren = function(s, i, r, o) {
    s === void 0 && (s = true), i === void 0 && (i = true), r === void 0 && (r = true), o === void 0 && (o = -dt);
    for (var a = [], c = this._first; c; )
      c._start >= o && (c instanceof pe ? i && a.push(c) : (r && a.push(c), s && a.push.apply(a, c.getChildren(true, i, r)))), c = c._next;
    return a;
  }, t.getById = function(s) {
    for (var i = this.getChildren(1, 1, 1), r = i.length; r--; )
      if (i[r].vars.id === s)
        return i[r];
  }, t.remove = function(s) {
    return Ae(s) ? this.removeLabel(s) : ue(s) ? this.killTweensOf(s) : (s.parent === this && yr(this, s), s === this._recent && (this._recent = this._last), Cn(this));
  }, t.totalTime = function(s, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = fe(Ze.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), l15.prototype.totalTime.call(this, s, i), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(s, i) {
    return this.labels[s] = at(this, i), this;
  }, t.removeLabel = function(s) {
    return delete this.labels[s], this;
  }, t.addPause = function(s, i, r) {
    var o = pe.delayedCall(0, i || Ys, r);
    return o.data = "isPause", this._hasPause = 1, At(this, o, at(this, s));
  }, t.removePause = function(s) {
    var i = this._first;
    for (s = at(this, s); i; )
      i._start === s && i.data === "isPause" && dn(i), i = i._next;
  }, t.killTweensOf = function(s, i, r) {
    for (var o = this.getTweensOf(s, r), a = o.length; a--; )
      rn !== o[a] && o[a].kill(s, i);
    return this;
  }, t.getTweensOf = function(s, i) {
    for (var r = [], o = pt(s), a = this._first, c = $t(i), u; a; )
      a instanceof pe ? Tm(a._targets, o) && (c ? (!rn || a._initted && a._ts) && a.globalTime(0) <= i && a.globalTime(a.totalDuration()) > i : !i || a.isActive()) && r.push(a) : (u = a.getTweensOf(o, i)).length && r.push.apply(r, u), a = a._next;
    return r;
  }, t.tweenTo = function(s, i) {
    i = i || {};
    var r = this, o = at(r, s), a = i, c = a.startAt, u = a.onStart, h = a.onStartParams, d = a.immediateRender, p, m = pe.to(r, st({
      ease: i.ease || "none",
      lazy: false,
      immediateRender: false,
      time: o,
      overwrite: "auto",
      duration: i.duration || Math.abs((o - (c && "time" in c ? c.time : r._time)) / r.timeScale()) || se,
      onStart: function() {
        if (r.pause(), !p) {
          var g = i.duration || Math.abs((o - (c && "time" in c ? c.time : r._time)) / r.timeScale());
          m._dur !== g && ys(m, g, 0, 1).render(m._time, true, true), p = 1;
        }
        u && u.apply(m, h || []);
      }
    }, i));
    return d ? m.render(0) : m;
  }, t.tweenFromTo = function(s, i, r) {
    return this.tweenTo(i, st({
      startAt: {
        time: at(this, s)
      }
    }, r));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(s) {
    return s === void 0 && (s = this._time), dc(this, at(this, s));
  }, t.previousLabel = function(s) {
    return s === void 0 && (s = this._time), dc(this, at(this, s), 1);
  }, t.currentLabel = function(s) {
    return arguments.length ? this.seek(s, true) : this.previousLabel(this._time + se);
  }, t.shiftChildren = function(s, i, r) {
    r === void 0 && (r = 0);
    for (var o = this._first, a = this.labels, c; o; )
      o._start >= r && (o._start += s, o._end += s), o = o._next;
    if (i)
      for (c in a)
        a[c] >= r && (a[c] += s);
    return Cn(this);
  }, t.invalidate = function(s) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(s), i = i._next;
    return l15.prototype.invalidate.call(this, s);
  }, t.clear = function(s) {
    s === void 0 && (s = true);
    for (var i = this._first, r; i; )
      r = i._next, this.remove(i), i = r;
    return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), Cn(this);
  }, t.totalDuration = function(s) {
    var i = 0, r = this, o = r._last, a = dt, c, u, h;
    if (arguments.length)
      return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -s : s));
    if (r._dirty) {
      for (h = r.parent; o; )
        c = o._prev, o._dirty && o.totalDuration(), u = o._start, u > a && r._sort && o._ts && !r._lock ? (r._lock = 1, At(r, o, u - o._delay, 1)._lock = 0) : a = u, u < 0 && o._ts && (i -= u, (!h && !r._dp || h && h.smoothChildTiming) && (r._start += u / r._ts, r._time -= u, r._tTime -= u), r.shiftChildren(-u, false, -1 / 0), a = 0), o._end > i && o._ts && (i = o._end), o = c;
      ys(r, r === ae && r._time > i ? r._time : i, 1, 1), r._dirty = 0;
    }
    return r._tDur;
  }, e.updateRoot = function(s) {
    if (ae._ts && (th(ae, nr(s, ae)), Ju = Ze.frame), Ze.frame >= lc) {
      lc += tt.autoSleep || 120;
      var i = ae._first;
      if ((!i || !i._ts) && tt.autoSleep && Ze._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || Ze.sleep();
      }
    }
  }, e;
}(Js);
st(ke.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Vm = function(e, t, n, s, i, r, o) {
  var a = new Ve(this._pt, e, t, 0, 1, Ch, null, i), c = 0, u = 0, h, d, p, m, f, g, _, y;
  for (a.b = n, a.e = s, n += "", s += "", (_ = ~s.indexOf("random(")) && (s = Zs(s)), r && (y = [n, s], r(y, e, t), n = y[0], s = y[1]), d = n.match(fo) || []; h = fo.exec(s); )
    m = h[0], f = s.substring(c, h.index), p ? p = (p + 1) % 5 : f.substr(-5) === "rgba(" && (p = 1), m !== d[u++] && (g = parseFloat(d[u - 1]) || 0, a._pt = {
      _next: a._pt,
      p: f || u === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? ts(g, m) - g : parseFloat(m) - g,
      m: p && p < 4 ? Math.round : 0
    }, c = fo.lastIndex);
  return a.c = c < s.length ? s.substring(c, s.length) : "", a.fp = o, (qu.test(s) || _) && (a.e = 0), this._pt = a, a;
}, Da = function(e, t, n, s, i, r, o, a, c, u) {
  ue(s) && (s = s(i || 0, e, r));
  var h = e[t], d = n !== "get" ? n : ue(h) ? c ? e[t.indexOf("set") || !ue(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : h, p = ue(h) ? c ? Xm : Eh : Ia, m;
  if (Ae(s) && (~s.indexOf("random(") && (s = Zs(s)), s.charAt(1) === "=" && (m = ts(d, s) + (De(d) || 0), (m || m === 0) && (s = m))), !u || d !== s || Xo)
    return !isNaN(d * s) && s !== "" ? (m = new Ve(this._pt, e, t, +d || 0, s - (d || 0), typeof h == "boolean" ? Zm : Sh, 0, p), c && (m.fp = c), o && m.modifier(o, this, e), this._pt = m) : (!h && !(t in e) && Ea(t, s), Vm.call(this, e, t, d, s, p, a || tt.stringFilter, c));
}, Wm = function(e, t, n, s, i) {
  if (ue(e) && (e = Ws(e, i, t, n, s)), !Et(e) || e.style && e.nodeType || Oe(e) || $u(e))
    return Ae(e) ? Ws(e, i, t, n, s) : e;
  var r = {}, o;
  for (o in e)
    r[o] = Ws(e[o], i, t, n, s);
  return r;
}, Ah = function(e, t, n, s, i, r) {
  var o, a, c, u;
  if (Ye[e] && (o = new Ye[e]()).init(i, o.rawVars ? t[e] : Wm(t[e], s, i, r, n), n, s, r) !== false && (n._pt = a = new Ve(n._pt, i, e, 0, 1, o.render, o, 0, o.priority), n !== Zn))
    for (c = n._ptLookup[n._targets.indexOf(i)], u = o._props.length; u--; )
      c[o._props[u]] = a;
  return o;
}, rn, Xo, Oa = function l11(e, t, n) {
  var s = e.vars, i = s.ease, r = s.startAt, o = s.immediateRender, a = s.lazy, c = s.onUpdate, u = s.runBackwards, h = s.yoyoEase, d = s.keyframes, p = s.autoRevert, m = e._dur, f = e._startAt, g = e._targets, _ = e.parent, y = _ && _.data === "nested" ? _.vars.targets : g, v = e._overwrite === "auto" && !wa, x = e.timeline, T, A, w, M, b, S, C, L, R, I, F, D, U;
  if (x && (!d || !i) && (i = "none"), e._ease = Ln(i, ms.ease), e._yEase = h ? xh(Ln(h === true ? i : h, ms.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !x && !!s.runBackwards, !x || d && !s.stagger) {
    if (L = g[0] ? Sn(g[0]).harness : 0, D = L && s[L.prop], T = tr(s, Sa), f && (f._zTime < 0 && f.progress(1), t < 0 && u && o && !p ? f.render(-1, true) : f.revert(u && m ? ji : vm), f._lazy = 0), r) {
      if (dn(e._startAt = pe.set(g, st({
        data: "isStart",
        overwrite: false,
        parent: _,
        immediateRender: true,
        lazy: !f && He(a),
        startAt: null,
        delay: 0,
        onUpdate: c && function() {
          return Qe(e, "onUpdate");
        },
        stagger: 0
      }, r))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ee || !o && !p) && e._startAt.revert(ji), o && m && t <= 0 && n <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && m && !f) {
      if (t && (o = false), w = st({
        overwrite: false,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !f && He(a),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: _
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, T), D && (w[L.prop] = D), dn(e._startAt = pe.set(g, w)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (Ee ? e._startAt.revert(ji) : e._startAt.render(-1, true)), e._zTime = t, !o)
        l11(e._startAt, se, se);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, a = m && He(a) || a && !m, A = 0; A < g.length; A++) {
      if (b = g[A], C = b._gsap || La(g)[A]._gsap, e._ptLookup[A] = I = {}, jo[C.id] && cn.length && er(), F = y === g ? A : y.indexOf(b), L && (R = new L()).init(b, D || T, e, F, y) !== false && (e._pt = M = new Ve(e._pt, b, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(N) {
        I[N] = M;
      }), R.priority && (S = 1)), !L || D)
        for (w in T)
          Ye[w] && (R = Ah(w, T, e, F, b, y)) ? R.priority && (S = 1) : I[w] = M = Da.call(e, b, w, "get", T[w], F, y, 0, s.stringFilter);
      e._op && e._op[A] && e.kill(b, e._op[A]), v && e._pt && (rn = e, ae.killTweensOf(b, I, e.globalTime(t)), U = !e.parent, rn = 0), e._pt && a && (jo[C.id] = 1);
    }
    S && Lh(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !U, d && t <= 0 && x.render(dt, true, true);
}, $m = function(e, t, n, s, i, r, o, a) {
  var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, h, d, p;
  if (!c)
    for (c = e._ptCache[t] = [], d = e._ptLookup, p = e._targets.length; p--; ) {
      if (u = d[p][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Xo = 1, e.vars[t] = "+=0", Oa(e, o), Xo = 0, a ? Xs(t + " not eligible for reset") : 1;
      c.push(u);
    }
  for (p = c.length; p--; )
    h = c[p], u = h._pt || h, u.s = (s || s === 0) && !i ? s : u.s + (s || 0) + r * u.c, u.c = n - u.s, h.e && (h.e = he(n) + De(h.e)), h.b && (h.b = u.s + De(h.b));
}, Km = function(e, t) {
  var n = e[0] ? Sn(e[0]).harness : 0, s = n && n.aliases, i, r, o, a;
  if (!s)
    return t;
  i = gs({}, t);
  for (r in s)
    if (r in i)
      for (a = s[r].split(","), o = a.length; o--; )
        i[a[o]] = i[r];
  return i;
}, qm = function(e, t, n, s) {
  var i = t.ease || s || "power1.inOut", r, o;
  if (Oe(t))
    o = n[e] || (n[e] = []), t.forEach(function(a, c) {
      return o.push({
        t: c / (t.length - 1) * 100,
        v: a,
        e: i
      });
    });
  else
    for (r in t)
      o = n[r] || (n[r] = []), r === "ease" || o.push({
        t: parseFloat(e),
        v: t[r],
        e: i
      });
}, Ws = function(e, t, n, s, i) {
  return ue(e) ? e.call(t, n, s, i) : Ae(e) && ~e.indexOf("random(") ? Zs(e) : e;
}, Mh = Ca + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ph = {};
je(Mh + ",id,stagger,delay,duration,paused,scrollTrigger", function(l15) {
  return Ph[l15] = 1;
});
var pe = /* @__PURE__ */ function(l15) {
  Vu(e, l15);
  function e(n, s, i, r) {
    var o;
    typeof s == "number" && (i.duration = s, s = i, i = null), o = l15.call(this, r ? s : js(s)) || this;
    var a = o.vars, c = a.duration, u = a.delay, h = a.immediateRender, d = a.stagger, p = a.overwrite, m = a.keyframes, f = a.defaults, g = a.scrollTrigger, _ = a.yoyoEase, y = s.parent || ae, v = (Oe(n) || $u(n) ? $t(n[0]) : "length" in s) ? [n] : pt(n), x, T, A, w, M, b, S, C;
    if (o._targets = v.length ? La(v) : Xs("GSAP target " + n + " not found. https://gsap.com", !tt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, m || d || Ni(c) || Ni(u)) {
      if (s = o.vars, x = o.timeline = new ke({
        data: "nested",
        defaults: f || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), x.kill(), x.parent = x._dp = Ut(o), x._start = 0, d || Ni(c) || Ni(u)) {
        if (w = v.length, S = d && uh(d), Et(d))
          for (M in d)
            ~Mh.indexOf(M) && (C || (C = {}), C[M] = d[M]);
        for (T = 0; T < w; T++)
          A = tr(s, Ph), A.stagger = 0, _ && (A.yoyoEase = _), C && gs(A, C), b = v[T], A.duration = +Ws(c, Ut(o), T, b, v), A.delay = (+Ws(u, Ut(o), T, b, v) || 0) - o._delay, !d && w === 1 && A.delay && (o._delay = u = A.delay, o._start += u, A.delay = 0), x.to(b, A, S ? S(T, b, v) : 0), x._ease = q.none;
        x.duration() ? c = u = 0 : o.timeline = 0;
      } else if (m) {
        js(st(x.vars.defaults, {
          ease: "none"
        })), x._ease = Ln(m.ease || s.ease || "none");
        var L = 0, R, I, F;
        if (Oe(m))
          m.forEach(function(D) {
            return x.to(v, D, ">");
          }), x.duration();
        else {
          A = {};
          for (M in m)
            M === "ease" || M === "easeEach" || qm(M, m[M], A, m.easeEach);
          for (M in A)
            for (R = A[M].sort(function(D, U) {
              return D.t - U.t;
            }), L = 0, T = 0; T < R.length; T++)
              I = R[T], F = {
                ease: I.e,
                duration: (I.t - (T ? R[T - 1].t : 0)) / 100 * c
              }, F[M] = I.v, x.to(v, F, L), L += F.duration;
          x.duration() < c && x.to({}, {
            duration: c - x.duration()
          });
        }
      }
      c || o.duration(c = x.duration());
    } else
      o.timeline = 0;
    return p === true && !wa && (rn = Ut(o), ae.killTweensOf(v), rn = 0), At(y, Ut(o), i), s.reversed && o.reverse(), s.paused && o.paused(true), (h || !c && !m && o._start === fe(y._time) && He(h) && Mm(Ut(o)) && y.data !== "nested") && (o._tTime = -se, o.render(Math.max(0, -u) || 0)), g && oh(Ut(o), g), o;
  }
  var t = e.prototype;
  return t.render = function(s, i, r) {
    var o = this._time, a = this._tDur, c = this._dur, u = s < 0, h = s > a - se && !u ? a : s < se ? 0 : s, d, p, m, f, g, _, y, v, x;
    if (!c)
      Em(this, s, i, r);
    else if (h !== this._tTime || !s || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (d = h, v = this.timeline, this._repeat) {
        if (f = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(f * 100 + s, i, r);
        if (d = fe(h % f), h === a ? (m = this._repeat, d = c) : (g = fe(h / f), m = ~~g, m && m === g ? (d = c, m--) : d > c && (d = c)), _ = this._yoyo && m & 1, _ && (x = this._yEase, d = c - d), g = _s(this._tTime, f), d === o && !r && this._initted && m === g)
          return this._tTime = h, this;
        m !== g && (v && this._yEase && Th(v, _), this.vars.repeatRefresh && !_ && !this._lock && d !== f && this._initted && (this._lock = r = 1, this.render(fe(f * m), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ah(this, u ? s : d, r, i, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(r && this.vars.repeatRefresh && m !== g))
          return this;
        if (c !== this._dur)
          return this.render(s, i, r);
      }
      if (this._tTime = h, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (x || this._ease)(d / c), this._from && (this.ratio = y = 1 - y), !o && h && !i && !g && (Qe(this, "onStart"), this._tTime !== h))
        return this;
      for (p = this._pt; p; )
        p.r(y, p.d), p = p._next;
      v && v.render(s < 0 ? s : v._dur * v._ease(d / this._dur), i, r) || this._startAt && (this._zTime = s), this._onUpdate && !i && (u && Vo(this, s, i, r), Qe(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !i && this.parent && Qe(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && Vo(this, s, true, true), (s || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && dn(this, 1), !i && !(u && !o) && (h || o || _) && (Qe(this, h === a ? "onComplete" : "onReverseComplete", true), this._prom && !(h < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(s) {
    return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), l15.prototype.invalidate.call(this, s);
  }, t.resetTo = function(s, i, r, o, a) {
    Qs || Ze.wake(), this._ts || this.play();
    var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Oa(this, c), u = this._ease(c / this._dur), $m(this, s, i, r, o, u, c, a) ? this.resetTo(s, i, r, o, 1) : (xr(this, 0), this.parent || ih(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(s, i) {
    if (i === void 0 && (i = "all"), !s && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? zs(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Ee), this;
    if (this.timeline) {
      var r = this.timeline.totalDuration();
      return this.timeline.killTweensOf(s, i, rn && rn.vars.overwrite !== true)._first || zs(this), this.parent && r !== this.timeline.totalDuration() && ys(this, this._dur * this.timeline._tDur / r, 0, 1), this;
    }
    var o = this._targets, a = s ? pt(s) : o, c = this._ptLookup, u = this._pt, h, d, p, m, f, g, _;
    if ((!i || i === "all") && wm(o, a))
      return i === "all" && (this._pt = 0), zs(this);
    for (h = this._op = this._op || [], i !== "all" && (Ae(i) && (f = {}, je(i, function(y) {
      return f[y] = 1;
    }), i = f), i = Km(o, i)), _ = o.length; _--; )
      if (~a.indexOf(o[_])) {
        d = c[_], i === "all" ? (h[_] = i, m = d, p = {}) : (p = h[_] = h[_] || {}, m = i);
        for (f in m)
          g = d && d[f], g && ((!("kill" in g.d) || g.d.kill(f) === true) && yr(this, g, "_pt"), delete d[f]), p !== "all" && (p[f] = 1);
      }
    return this._initted && !this._pt && u && zs(this), this;
  }, e.to = function(s, i) {
    return new e(s, i, arguments[2]);
  }, e.from = function(s, i) {
    return Vs(1, arguments);
  }, e.delayedCall = function(s, i, r, o) {
    return new e(i, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: s,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: r,
      onReverseCompleteParams: r,
      callbackScope: o
    });
  }, e.fromTo = function(s, i, r) {
    return Vs(2, arguments);
  }, e.set = function(s, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(s, i);
  }, e.killTweensOf = function(s, i, r) {
    return ae.killTweensOf(s, i, r);
  }, e;
}(Js);
st(pe.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
je("staggerTo,staggerFrom,staggerFromTo", function(l15) {
  pe[l15] = function() {
    var e = new ke(), t = $o.call(arguments, 0);
    return t.splice(l15 === "staggerFromTo" ? 5 : 4, 0, 0), e[l15].apply(e, t);
  };
});
var Ia = function(e, t, n) {
  return e[t] = n;
}, Eh = function(e, t, n) {
  return e[t](n);
}, Xm = function(e, t, n, s) {
  return e[t](s.fp, n);
}, Ym = function(e, t, n) {
  return e.setAttribute(t, n);
}, ka = function(e, t) {
  return ue(e[t]) ? Eh : Aa(e[t]) && e.setAttribute ? Ym : Ia;
}, Sh = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, Zm = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Ch = function(e, t) {
  var n = t._pt, s = "";
  if (!e && t.b)
    s = t.b;
  else if (e === 1 && t.e)
    s = t.e;
  else {
    for (; n; )
      s = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + s, n = n._next;
    s += t.c;
  }
  t.set(t.t, t.p, s, t);
}, Fa = function(e, t) {
  for (var n = t._pt; n; )
    n.r(e, n.d), n = n._next;
}, Qm = function(e, t, n, s) {
  for (var i = this._pt, r; i; )
    r = i._next, i.p === s && i.modifier(e, t, n), i = r;
}, Jm = function(e) {
  for (var t = this._pt, n, s; t; )
    s = t._next, t.p === e && !t.op || t.op === e ? yr(this, t, "_pt") : t.dep || (n = 1), t = s;
  return !n;
}, eg = function(e, t, n, s) {
  s.mSet(e, t, s.m.call(s.tween, n, s.mt), s);
}, Lh = function(e) {
  for (var t = e._pt, n, s, i, r; t; ) {
    for (n = t._next, s = i; s && s.pr > t.pr; )
      s = s._next;
    (t._prev = s ? s._prev : r) ? t._prev._next = t : i = t, (t._next = s) ? s._prev = t : r = t, t = n;
  }
  e._pt = i;
}, Ve = /* @__PURE__ */ function() {
  function l15(t, n, s, i, r, o, a, c, u) {
    this.t = n, this.s = i, this.c = r, this.p = s, this.r = o || Sh, this.d = a || this, this.set = c || Ia, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = l15.prototype;
  return e.modifier = function(n, s, i) {
    this.mSet = this.mSet || this.set, this.set = eg, this.m = n, this.mt = i, this.tween = s;
  }, l15;
}();
je(Ca + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(l15) {
  return Sa[l15] = 1;
});
nt.TweenMax = nt.TweenLite = pe;
nt.TimelineLite = nt.TimelineMax = ke;
ae = new ke({
  sortChildren: false,
  defaults: ms,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
tt.stringFilter = vh;
var Rn = [], Wi = {}, tg = [], fc = 0, ng = 0, vo = function(e) {
  return (Wi[e] || tg).map(function(t) {
    return t();
  });
}, Yo = function() {
  var e = Date.now(), t = [];
  e - fc > 2 && (vo("matchMediaInit"), Rn.forEach(function(n) {
    var s = n.queries, i = n.conditions, r, o, a, c;
    for (o in s)
      r = bt.matchMedia(s[o]).matches, r && (a = 1), r !== i[o] && (i[o] = r, c = 1);
    c && (n.revert(), a && t.push(n));
  }), vo("matchMediaRevert"), t.forEach(function(n) {
    return n.onMatch(n, function(s) {
      return n.add(null, s);
    });
  }), fc = e, vo("matchMedia"));
}, Rh = /* @__PURE__ */ function() {
  function l15(t, n) {
    this.selector = n && Ko(n), this.data = [], this._r = [], this.isReverted = false, this.id = ng++, t && this.add(t);
  }
  var e = l15.prototype;
  return e.add = function(n, s, i) {
    ue(n) && (i = s, s = n, n = ue);
    var r = this, o = function() {
      var c = re, u = r.selector, h;
      return c && c !== r && c.data.push(r), i && (r.selector = Ko(i)), re = r, h = s.apply(r, arguments), ue(h) && r._r.push(h), re = c, r.selector = u, r.isReverted = false, h;
    };
    return r.last = o, n === ue ? o(r, function(a) {
      return r.add(null, a);
    }) : n ? r[n] = o : o;
  }, e.ignore = function(n) {
    var s = re;
    re = null, n(this), re = s;
  }, e.getTweens = function() {
    var n = [];
    return this.data.forEach(function(s) {
      return s instanceof l15 ? n.push.apply(n, s.getTweens()) : s instanceof pe && !(s.parent && s.parent.data === "nested") && n.push(s);
    }), n;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(n, s) {
    var i = this;
    if (n ? function() {
      for (var o = i.getTweens(), a = i.data.length, c; a--; )
        c = i.data[a], c.data === "isFlip" && (c.revert(), c.getChildren(true, true, false).forEach(function(u) {
          return o.splice(o.indexOf(u), 1);
        }));
      for (o.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, h) {
        return h.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(n);
      }), a = i.data.length; a--; )
        c = i.data[a], c instanceof ke ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill()) : !(c instanceof pe) && c.revert && c.revert(n);
      i._r.forEach(function(u) {
        return u(n, i);
      }), i.isReverted = true;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), s)
      for (var r = Rn.length; r--; )
        Rn[r].id === this.id && Rn.splice(r, 1);
  }, e.revert = function(n) {
    this.kill(n || {});
  }, l15;
}(), sg = /* @__PURE__ */ function() {
  function l15(t) {
    this.contexts = [], this.scope = t, re && re.data.push(this);
  }
  var e = l15.prototype;
  return e.add = function(n, s, i) {
    Et(n) || (n = {
      matches: n
    });
    var r = new Rh(0, i || this.scope), o = r.conditions = {}, a, c, u;
    re && !r.selector && (r.selector = re.selector), this.contexts.push(r), s = r.add("onMatch", s), r.queries = n;
    for (c in n)
      c === "all" ? u = 1 : (a = bt.matchMedia(n[c]), a && (Rn.indexOf(r) < 0 && Rn.push(r), (o[c] = a.matches) && (u = 1), a.addListener ? a.addListener(Yo) : a.addEventListener("change", Yo)));
    return u && s(r, function(h) {
      return r.add(null, h);
    }), this;
  }, e.revert = function(n) {
    this.kill(n || {});
  }, e.kill = function(n) {
    this.contexts.forEach(function(s) {
      return s.kill(n, true);
    });
  }, l15;
}(), sr = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    t.forEach(function(s) {
      return gh(s);
    });
  },
  timeline: function(e) {
    return new ke(e);
  },
  getTweensOf: function(e, t) {
    return ae.getTweensOf(e, t);
  },
  getProperty: function(e, t, n, s) {
    Ae(e) && (e = pt(e)[0]);
    var i = Sn(e || {}).get, r = n ? sh : nh;
    return n === "native" && (n = ""), e && (t ? r((Ye[t] && Ye[t].get || i)(e, t, n, s)) : function(o, a, c) {
      return r((Ye[o] && Ye[o].get || i)(e, o, a, c));
    });
  },
  quickSetter: function(e, t, n) {
    if (e = pt(e), e.length > 1) {
      var s = e.map(function(u) {
        return Ke.quickSetter(u, t, n);
      }), i = s.length;
      return function(u) {
        for (var h = i; h--; )
          s[h](u);
      };
    }
    e = e[0] || {};
    var r = Ye[t], o = Sn(e), a = o.harness && (o.harness.aliases || {})[t] || t, c = r ? function(u) {
      var h = new r();
      Zn._pt = 0, h.init(e, n ? u + n : u, Zn, 0, [e]), h.render(1, h), Zn._pt && Fa(1, Zn);
    } : o.set(e, a);
    return r ? c : function(u) {
      return c(e, a, n ? u + n : u, o, 1);
    };
  },
  quickTo: function(e, t, n) {
    var s, i = Ke.to(e, st((s = {}, s[t] = "+=0.1", s.paused = true, s.stagger = 0, s), n || {})), r = function(a, c, u) {
      return i.resetTo(t, a, c, u);
    };
    return r.tween = i, r;
  },
  isTweening: function(e) {
    return ae.getTweensOf(e, true).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = Ln(e.ease, ms.ease)), cc(ms, e || {});
  },
  config: function(e) {
    return cc(tt, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, n = e.effect, s = e.plugins, i = e.defaults, r = e.extendTimeline;
    (s || "").split(",").forEach(function(o) {
      return o && !Ye[o] && !nt[o] && Xs(t + " effect requires " + o + " plugin.");
    }), mo[t] = function(o, a, c) {
      return n(pt(o), st(a || {}, i), c);
    }, r && (ke.prototype[t] = function(o, a, c) {
      return this.add(mo[t](o, Et(a) ? a : (c = a) && {}, this), c);
    });
  },
  registerEase: function(e, t) {
    q[e] = Ln(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? Ln(e, t) : q;
  },
  getById: function(e) {
    return ae.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var n = new ke(e), s, i;
    for (n.smoothChildTiming = He(e.smoothChildTiming), ae.remove(n), n._dp = 0, n._time = n._tTime = ae._time, s = ae._first; s; )
      i = s._next, (t || !(!s._dur && s instanceof pe && s.vars.onComplete === s._targets[0])) && At(n, s, s._start - s._delay), s = i;
    return At(ae, n, 0), n;
  },
  context: function(e, t) {
    return e ? new Rh(e, t) : re;
  },
  matchMedia: function(e) {
    return new sg(e);
  },
  matchMediaRefresh: function() {
    return Rn.forEach(function(e) {
      var t = e.conditions, n, s;
      for (s in t)
        t[s] && (t[s] = false, n = 1);
      n && e.revert();
    }) || Yo();
  },
  addEventListener: function(e, t) {
    var n = Wi[e] || (Wi[e] = []);
    ~n.indexOf(t) || n.push(t);
  },
  removeEventListener: function(e, t) {
    var n = Wi[e], s = n && n.indexOf(t);
    s >= 0 && n.splice(s, 1);
  },
  utils: {
    wrap: km,
    wrapYoyo: Fm,
    distribute: uh,
    random: dh,
    snap: hh,
    normalize: Im,
    getUnit: De,
    clamp: Lm,
    splitColor: _h,
    toArray: pt,
    selector: Ko,
    mapRange: fh,
    pipe: Dm,
    unitize: Om,
    interpolate: Nm,
    shuffle: ch
  },
  install: Zu,
  effects: mo,
  ticker: Ze,
  updateRoot: ke.updateRoot,
  plugins: Ye,
  globalTimeline: ae,
  core: {
    PropTween: Ve,
    globals: Qu,
    Tween: pe,
    Timeline: ke,
    Animation: Js,
    getCache: Sn,
    _removeLinkedListItem: yr,
    reverting: function() {
      return Ee;
    },
    context: function(e) {
      return e && re && (re.data.push(e), e._ctx = re), re;
    },
    suppressOverwrites: function(e) {
      return wa = e;
    }
  }
};
je("to,from,fromTo,delayedCall,set,killTweensOf", function(l15) {
  return sr[l15] = pe[l15];
});
Ze.add(ke.updateRoot);
Zn = sr.to({}, {
  duration: 0
});
var ig = function(e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
    n = n._next;
  return n;
}, rg = function(e, t) {
  var n = e._targets, s, i, r;
  for (s in t)
    for (i = n.length; i--; )
      r = e._ptLookup[i][s], r && (r = r.d) && (r._pt && (r = ig(r, s)), r && r.modifier && r.modifier(t[s], e, n[i], s));
}, xo = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(s, i, r) {
      r._onInit = function(o) {
        var a, c;
        if (Ae(i) && (a = {}, je(i, function(u) {
          return a[u] = 1;
        }), i = a), t) {
          a = {};
          for (c in i)
            a[c] = t(i[c]);
          i = a;
        }
        rg(o, i);
      };
    }
  };
}, Ke = sr.registerPlugin({
  name: "attr",
  init: function(e, t, n, s, i) {
    var r, o, a;
    this.tween = n;
    for (r in t)
      a = e.getAttribute(r) || "", o = this.add(e, "setAttribute", (a || 0) + "", t[r], s, i, 0, 0, r), o.op = r, o.b = a, this._props.push(r);
  },
  render: function(e, t) {
    for (var n = t._pt; n; )
      Ee ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var n = t.length; n--; )
      this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
  }
}, xo("roundProps", qo), xo("modifiers"), xo("snap", hh)) || sr;
pe.version = ke.version = Ke.version = "3.13.0";
Yu = 1;
Ma() && vs();
q.Power0;
q.Power1;
q.Power2;
q.Power3;
q.Power4;
q.Linear;
q.Quad;
q.Cubic;
q.Quart;
q.Quint;
q.Strong;
q.Elastic;
q.Back;
q.SteppedEase;
q.Bounce;
q.Sine;
q.Expo;
q.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var mc, on, ns, Na, Pn, gc, Ua, og = function() {
  return typeof window < "u";
}, Kt = {}, wn = 180 / Math.PI, ss = Math.PI / 180, Vn = Math.atan2, _c = 1e8, Ba = /([A-Z])/g, ag = /(left|right|width|margin|padding|x)/i, lg = /[\s,\(]\S/, Mt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Zo = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, cg = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, ug = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, hg = function(e, t) {
  var n = t.s + t.c * e;
  t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
}, Dh = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, Oh = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, dg = function(e, t, n) {
  return e.style[t] = n;
}, pg = function(e, t, n) {
  return e.style.setProperty(t, n);
}, fg = function(e, t, n) {
  return e._gsap[t] = n;
}, mg = function(e, t, n) {
  return e._gsap.scaleX = e._gsap.scaleY = n;
}, gg = function(e, t, n, s, i) {
  var r = e._gsap;
  r.scaleX = r.scaleY = n, r.renderTransform(i, r);
}, _g = function(e, t, n, s, i) {
  var r = e._gsap;
  r[t] = n, r.renderTransform(i, r);
}, le = "transform", We = le + "Origin", yg = function l12(e, t) {
  var n = this, s = this.target, i = s.style, r = s._gsap;
  if (e in Kt && i) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Mt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return n.tfm[o] = zt(s, o);
      }) : this.tfm[e] = r.x ? r[e] : zt(s, e), e === We && (this.tfm.zOrigin = r.zOrigin);
    else
      return Mt.transform.split(",").forEach(function(o) {
        return l12.call(n, o, t);
      });
    if (this.props.indexOf(le) >= 0)
      return;
    r.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(We, t, "")), e = le;
  }
  (i || t) && this.props.push(e, t, i[e]);
}, Ih = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, vg = function() {
  var e = this.props, t = this.target, n = t.style, s = t._gsap, i, r;
  for (i = 0; i < e.length; i += 3)
    e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? n[e[i]] = e[i + 2] : n.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(Ba, "-$1").toLowerCase());
  if (this.tfm) {
    for (r in this.tfm)
      s[r] = this.tfm[r];
    s.svg && (s.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), i = Ua(), (!i || !i.isStart) && !n[le] && (Ih(n), s.zOrigin && n[We] && (n[We] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
  }
}, kh = function(e, t) {
  var n = {
    target: e,
    props: [],
    revert: vg,
    save: yg
  };
  return e._gsap || Ke.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(s) {
    return n.save(s);
  }), n;
}, Fh, Qo = function(e, t) {
  var n = on.createElementNS ? on.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : on.createElement(e);
  return n && n.style ? n : on.createElement(e);
}, ft = function l13(e, t, n) {
  var s = getComputedStyle(e);
  return s[t] || s.getPropertyValue(t.replace(Ba, "-$1").toLowerCase()) || s.getPropertyValue(t) || !n && l13(e, xs(t) || t, 1) || "";
}, yc = "O,Moz,ms,Ms,Webkit".split(","), xs = function(e, t, n) {
  var s = t || Pn, i = s.style, r = 5;
  if (e in i && !n)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(yc[r] + e in i); )
    ;
  return r < 0 ? null : (r === 3 ? "ms" : r >= 0 ? yc[r] : "") + e;
}, Jo = function() {
  og() && window.document && (mc = window, on = mc.document, ns = on.documentElement, Pn = Qo("div") || {
    style: {}
  }, Qo("div"), le = xs(le), We = le + "Origin", Pn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Fh = !!xs("perspective"), Ua = Ke.core.reverting, Na = 1);
}, vc = function(e) {
  var t = e.ownerSVGElement, n = Qo("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = e.cloneNode(true), i;
  s.style.display = "block", n.appendChild(s), ns.appendChild(n);
  try {
    i = s.getBBox();
  } catch {
  }
  return n.removeChild(s), ns.removeChild(n), i;
}, xc = function(e, t) {
  for (var n = t.length; n--; )
    if (e.hasAttribute(t[n]))
      return e.getAttribute(t[n]);
}, Nh = function(e) {
  var t, n;
  try {
    t = e.getBBox();
  } catch {
    t = vc(e), n = 1;
  }
  return t && (t.width || t.height) || n || (t = vc(e)), t && !t.width && !t.x && !t.y ? {
    x: +xc(e, ["x", "cx", "x1"]) || 0,
    y: +xc(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Uh = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Nh(e));
}, In = function(e, t) {
  if (t) {
    var n = e.style, s;
    t in Kt && t !== We && (t = le), n.removeProperty ? (s = t.substr(0, 2), (s === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), n.removeProperty(s === "--" ? t : t.replace(Ba, "-$1").toLowerCase())) : n.removeAttribute(t);
  }
}, an = function(e, t, n, s, i, r) {
  var o = new Ve(e._pt, t, n, 0, 1, r ? Oh : Dh);
  return e._pt = o, o.b = s, o.e = i, e._props.push(n), o;
}, Tc = {
  deg: 1,
  rad: 1,
  turn: 1
}, xg = {
  grid: 1,
  flex: 1
}, pn = function l14(e, t, n, s) {
  var i = parseFloat(n) || 0, r = (n + "").trim().substr((i + "").length) || "px", o = Pn.style, a = ag.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (a ? "Width" : "Height"), h = 100, d = s === "px", p = s === "%", m, f, g, _;
  if (s === r || !i || Tc[s] || Tc[r])
    return i;
  if (r !== "px" && !d && (i = l14(e, t, n, "px")), _ = e.getCTM && Uh(e), (p || r === "%") && (Kt[t] || ~t.indexOf("adius")))
    return m = _ ? e.getBBox()[a ? "width" : "height"] : e[u], he(p ? i / m * h : i / 100 * m);
  if (o[a ? "width" : "height"] = h + (d ? r : s), f = s !== "rem" && ~t.indexOf("adius") || s === "em" && e.appendChild && !c ? e : e.parentNode, _ && (f = (e.ownerSVGElement || {}).parentNode), (!f || f === on || !f.appendChild) && (f = on.body), g = f._gsap, g && p && g.width && a && g.time === Ze.time && !g.uncache)
    return he(i / g.width * h);
  if (p && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = h + s, m = e[u], y ? e.style[t] = y : In(e, t);
  } else
    (p || r === "%") && !xg[ft(f, "display")] && (o.position = ft(e, "position")), f === e && (o.position = "static"), f.appendChild(Pn), m = Pn[u], f.removeChild(Pn), o.position = "absolute";
  return a && p && (g = Sn(f), g.time = Ze.time, g.width = f[u]), he(d ? m * i / h : m && i ? h / m * i : 0);
}, zt = function(e, t, n, s) {
  var i;
  return Na || Jo(), t in Mt && t !== "transform" && (t = Mt[t], ~t.indexOf(",") && (t = t.split(",")[0])), Kt[t] && t !== "transform" ? (i = ti(e, s), i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : rr(ft(e, We)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || i === "auto" || s || ~(i + "").indexOf("calc(")) && (i = ir[t] && ir[t](e, t, n) || ft(e, t) || eh(e, t) || (t === "opacity" ? 1 : 0))), n && !~(i + "").trim().indexOf(" ") ? pn(e, t, i, n) + n : i;
}, Tg = function(e, t, n, s) {
  if (!n || n === "none") {
    var i = xs(t, e, 1), r = i && ft(e, i, 1);
    r && r !== n ? (t = i, n = r) : t === "borderColor" && (n = ft(e, "borderTopColor"));
  }
  var o = new Ve(this._pt, e.style, t, 0, 1, Ch), a = 0, c = 0, u, h, d, p, m, f, g, _, y, v, x, T;
  if (o.b = n, o.e = s, n += "", s += "", s.substring(0, 6) === "var(--" && (s = ft(e, s.substring(4, s.indexOf(")")))), s === "auto" && (f = e.style[t], e.style[t] = s, s = ft(e, t) || s, f ? e.style[t] = f : In(e, t)), u = [n, s], vh(u), n = u[0], s = u[1], d = n.match(Yn) || [], T = s.match(Yn) || [], T.length) {
    for (; h = Yn.exec(s); )
      g = h[0], y = s.substring(a, h.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), g !== (f = d[c++] || "") && (p = parseFloat(f) || 0, x = f.substr((p + "").length), g.charAt(1) === "=" && (g = ts(p, g) + x), _ = parseFloat(g), v = g.substr((_ + "").length), a = Yn.lastIndex - v.length, v || (v = v || tt.units[t] || x, a === s.length && (s += v, o.e += v)), x !== v && (p = pn(e, t, f, v) || 0), o._pt = {
        _next: o._pt,
        p: y || c === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: _ - p,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = a < s.length ? s.substring(a, s.length) : "";
  } else
    o.r = t === "display" && s === "none" ? Oh : Dh;
  return qu.test(s) && (o.e = 0), this._pt = o, o;
}, bc = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, bg = function(e) {
  var t = e.split(" "), n = t[0], s = t[1] || "50%";
  return (n === "top" || n === "bottom" || s === "left" || s === "right") && (e = n, n = s, s = e), t[0] = bc[n] || n, t[1] = bc[s] || s, t.join(" ");
}, wg = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var n = t.t, s = n.style, i = t.u, r = n._gsap, o, a, c;
    if (i === "all" || i === true)
      s.cssText = "", a = 1;
    else
      for (i = i.split(","), c = i.length; --c > -1; )
        o = i[c], Kt[o] && (a = 1, o = o === "transformOrigin" ? We : le), In(n, o);
    a && (In(n, le), r && (r.svg && n.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", ti(n, 1), r.uncache = 1, Ih(s)));
  }
}, ir = {
  clearProps: function(e, t, n, s, i) {
    if (i.data !== "isFromStart") {
      var r = e._pt = new Ve(e._pt, t, n, 0, 0, wg);
      return r.u = s, r.pr = -10, r.tween = i, e._props.push(n), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, ei = [1, 0, 0, 1, 0, 0], Bh = {}, zh = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, wc = function(e) {
  var t = ft(e, le);
  return zh(t) ? ei : t.substr(7).match(Ku).map(he);
}, za = function(e, t) {
  var n = e._gsap || Sn(e), s = e.style, i = wc(e), r, o, a, c;
  return n.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, i = [a.a, a.b, a.c, a.d, a.e, a.f], i.join(",") === "1,0,0,1,0,0" ? ei : i) : (i === ei && !e.offsetParent && e !== ns && !n.svg && (a = s.display, s.display = "block", r = e.parentNode, (!r || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1, o = e.nextElementSibling, ns.appendChild(e)), i = wc(e), a ? s.display = a : In(e, "display"), c && (o ? r.insertBefore(e, o) : r ? r.appendChild(e) : ns.removeChild(e))), t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, ea = function(e, t, n, s, i, r) {
  var o = e._gsap, a = i || za(e, true), c = o.xOrigin || 0, u = o.yOrigin || 0, h = o.xOffset || 0, d = o.yOffset || 0, p = a[0], m = a[1], f = a[2], g = a[3], _ = a[4], y = a[5], v = t.split(" "), x = parseFloat(v[0]) || 0, T = parseFloat(v[1]) || 0, A, w, M, b;
  n ? a !== ei && (w = p * g - m * f) && (M = x * (g / w) + T * (-f / w) + (f * y - g * _) / w, b = x * (-m / w) + T * (p / w) - (p * y - m * _) / w, x = M, T = b) : (A = Nh(e), x = A.x + (~v[0].indexOf("%") ? x / 100 * A.width : x), T = A.y + (~(v[1] || v[0]).indexOf("%") ? T / 100 * A.height : T)), s || s !== false && o.smooth ? (_ = x - c, y = T - u, o.xOffset = h + (_ * p + y * f) - _, o.yOffset = d + (_ * m + y * g) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = x, o.yOrigin = T, o.smooth = !!s, o.origin = t, o.originIsAbsolute = !!n, e.style[We] = "0px 0px", r && (an(r, o, "xOrigin", c, x), an(r, o, "yOrigin", u, T), an(r, o, "xOffset", h, o.xOffset), an(r, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", x + " " + T);
}, ti = function(e, t) {
  var n = e._gsap || new wh(e);
  if ("x" in n && !t && !n.uncache)
    return n;
  var s = e.style, i = n.scaleX < 0, r = "px", o = "deg", a = getComputedStyle(e), c = ft(e, We) || "0", u, h, d, p, m, f, g, _, y, v, x, T, A, w, M, b, S, C, L, R, I, F, D, U, N, G, Q, K, oe, Ct, X, Te;
  return u = h = d = f = g = _ = y = v = x = 0, p = m = 1, n.svg = !!(e.getCTM && Uh(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (s[le] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[le] !== "none" ? a[le] : "")), s.scale = s.rotate = s.translate = "none"), w = za(e, n.svg), n.svg && (n.uncache ? (N = e.getBBox(), c = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", U = "") : U = !t && e.getAttribute("data-svg-origin"), ea(e, U || c, !!U || n.originIsAbsolute, n.smooth !== false, w)), T = n.xOrigin || 0, A = n.yOrigin || 0, w !== ei && (C = w[0], L = w[1], R = w[2], I = w[3], u = F = w[4], h = D = w[5], w.length === 6 ? (p = Math.sqrt(C * C + L * L), m = Math.sqrt(I * I + R * R), f = C || L ? Vn(L, C) * wn : 0, y = R || I ? Vn(R, I) * wn + f : 0, y && (m *= Math.abs(Math.cos(y * ss))), n.svg && (u -= T - (T * C + A * R), h -= A - (T * L + A * I))) : (Te = w[6], Ct = w[7], Q = w[8], K = w[9], oe = w[10], X = w[11], u = w[12], h = w[13], d = w[14], M = Vn(Te, oe), g = M * wn, M && (b = Math.cos(-M), S = Math.sin(-M), U = F * b + Q * S, N = D * b + K * S, G = Te * b + oe * S, Q = F * -S + Q * b, K = D * -S + K * b, oe = Te * -S + oe * b, X = Ct * -S + X * b, F = U, D = N, Te = G), M = Vn(-R, oe), _ = M * wn, M && (b = Math.cos(-M), S = Math.sin(-M), U = C * b - Q * S, N = L * b - K * S, G = R * b - oe * S, X = I * S + X * b, C = U, L = N, R = G), M = Vn(L, C), f = M * wn, M && (b = Math.cos(M), S = Math.sin(M), U = C * b + L * S, N = F * b + D * S, L = L * b - C * S, D = D * b - F * S, C = U, F = N), g && Math.abs(g) + Math.abs(f) > 359.9 && (g = f = 0, _ = 180 - _), p = he(Math.sqrt(C * C + L * L + R * R)), m = he(Math.sqrt(D * D + Te * Te)), M = Vn(F, D), y = Math.abs(M) > 2e-4 ? M * wn : 0, x = X ? 1 / (X < 0 ? -X : X) : 0), n.svg && (U = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !zh(ft(e, le)), U && e.setAttribute("transform", U))), Math.abs(y) > 90 && Math.abs(y) < 270 && (i ? (p *= -1, y += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), t = t || n.uncache, n.x = u - ((n.xPercent = u && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + r, n.y = h - ((n.yPercent = h && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + r, n.z = d + r, n.scaleX = he(p), n.scaleY = he(m), n.rotation = he(f) + o, n.rotationX = he(g) + o, n.rotationY = he(_) + o, n.skewX = y + o, n.skewY = v + o, n.transformPerspective = x + r, (n.zOrigin = parseFloat(c.split(" ")[2]) || !t && n.zOrigin || 0) && (s[We] = rr(c)), n.xOffset = n.yOffset = 0, n.force3D = tt.force3D, n.renderTransform = n.svg ? Mg : Fh ? Gh : Ag, n.uncache = 0, n;
}, rr = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, To = function(e, t, n) {
  var s = De(t);
  return he(parseFloat(t) + parseFloat(pn(e, "x", n + "px", s))) + s;
}, Ag = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Gh(e, t);
}, xn = "0deg", ks = "0px", Tn = ") ", Gh = function(e, t) {
  var n = t || this, s = n.xPercent, i = n.yPercent, r = n.x, o = n.y, a = n.z, c = n.rotation, u = n.rotationY, h = n.rotationX, d = n.skewX, p = n.skewY, m = n.scaleX, f = n.scaleY, g = n.transformPerspective, _ = n.force3D, y = n.target, v = n.zOrigin, x = "", T = _ === "auto" && e && e !== 1 || _ === true;
  if (v && (h !== xn || u !== xn)) {
    var A = parseFloat(u) * ss, w = Math.sin(A), M = Math.cos(A), b;
    A = parseFloat(h) * ss, b = Math.cos(A), r = To(y, r, w * b * -v), o = To(y, o, -Math.sin(A) * -v), a = To(y, a, M * b * -v + v);
  }
  g !== ks && (x += "perspective(" + g + Tn), (s || i) && (x += "translate(" + s + "%, " + i + "%) "), (T || r !== ks || o !== ks || a !== ks) && (x += a !== ks || T ? "translate3d(" + r + ", " + o + ", " + a + ") " : "translate(" + r + ", " + o + Tn), c !== xn && (x += "rotate(" + c + Tn), u !== xn && (x += "rotateY(" + u + Tn), h !== xn && (x += "rotateX(" + h + Tn), (d !== xn || p !== xn) && (x += "skew(" + d + ", " + p + Tn), (m !== 1 || f !== 1) && (x += "scale(" + m + ", " + f + Tn), y.style[le] = x || "translate(0, 0)";
}, Mg = function(e, t) {
  var n = t || this, s = n.xPercent, i = n.yPercent, r = n.x, o = n.y, a = n.rotation, c = n.skewX, u = n.skewY, h = n.scaleX, d = n.scaleY, p = n.target, m = n.xOrigin, f = n.yOrigin, g = n.xOffset, _ = n.yOffset, y = n.forceCSS, v = parseFloat(r), x = parseFloat(o), T, A, w, M, b;
  a = parseFloat(a), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, a += u), a || c ? (a *= ss, c *= ss, T = Math.cos(a) * h, A = Math.sin(a) * h, w = Math.sin(a - c) * -d, M = Math.cos(a - c) * d, c && (u *= ss, b = Math.tan(c - u), b = Math.sqrt(1 + b * b), w *= b, M *= b, u && (b = Math.tan(u), b = Math.sqrt(1 + b * b), T *= b, A *= b)), T = he(T), A = he(A), w = he(w), M = he(M)) : (T = h, M = d, A = w = 0), (v && !~(r + "").indexOf("px") || x && !~(o + "").indexOf("px")) && (v = pn(p, "x", r, "px"), x = pn(p, "y", o, "px")), (m || f || g || _) && (v = he(v + m - (m * T + f * w) + g), x = he(x + f - (m * A + f * M) + _)), (s || i) && (b = p.getBBox(), v = he(v + s / 100 * b.width), x = he(x + i / 100 * b.height)), b = "matrix(" + T + "," + A + "," + w + "," + M + "," + v + "," + x + ")", p.setAttribute("transform", b), y && (p.style[le] = b);
}, Pg = function(e, t, n, s, i) {
  var r = 360, o = Ae(i), a = parseFloat(i) * (o && ~i.indexOf("rad") ? wn : 1), c = a - s, u = s + c + "deg", h, d;
  return o && (h = i.split("_")[1], h === "short" && (c %= r, c !== c % (r / 2) && (c += c < 0 ? r : -r)), h === "cw" && c < 0 ? c = (c + r * _c) % r - ~~(c / r) * r : h === "ccw" && c > 0 && (c = (c - r * _c) % r - ~~(c / r) * r)), e._pt = d = new Ve(e._pt, t, n, s, c, cg), d.e = u, d.u = "deg", e._props.push(n), d;
}, Ac = function(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}, Eg = function(e, t, n) {
  var s = Ac({}, n._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", r = n.style, o, a, c, u, h, d, p, m;
  s.svg ? (c = n.getAttribute("transform"), n.setAttribute("transform", ""), r[le] = t, o = ti(n, 1), In(n, le), n.setAttribute("transform", c)) : (c = getComputedStyle(n)[le], r[le] = t, o = ti(n, 1), r[le] = c);
  for (a in Kt)
    c = s[a], u = o[a], c !== u && i.indexOf(a) < 0 && (p = De(c), m = De(u), h = p !== m ? pn(n, a, c, m) : parseFloat(c), d = parseFloat(u), e._pt = new Ve(e._pt, o, a, h, d - h, Zo), e._pt.u = m || 0, e._props.push(a));
  Ac(o, s);
};
je("padding,margin,Width,Radius", function(l15, e) {
  var t = "Top", n = "Right", s = "Bottom", i = "Left", r = (e < 3 ? [t, n, s, i] : [t + i, t + n, s + n, s + i]).map(function(o) {
    return e < 2 ? l15 + o : "border" + o + l15;
  });
  ir[e > 1 ? "border" + l15 : l15] = function(o, a, c, u, h) {
    var d, p;
    if (arguments.length < 4)
      return d = r.map(function(m) {
        return zt(o, m, c);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (u + "").split(" "), p = {}, r.forEach(function(m, f) {
      return p[m] = d[f] = d[f] || d[(f - 1) / 2 | 0];
    }), o.init(a, p, h);
  };
});
var Hh = {
  name: "css",
  register: Jo,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, n, s, i) {
    var r = this._props, o = e.style, a = n.vars.startAt, c, u, h, d, p, m, f, g, _, y, v, x, T, A, w, M;
    Na || Jo(), this.styles = this.styles || kh(e), M = this.styles.props, this.tween = n;
    for (f in t)
      if (f !== "autoRound" && (u = t[f], !(Ye[f] && Ah(f, t, n, s, e, i)))) {
        if (p = typeof u, m = ir[f], p === "function" && (u = u.call(n, s, e, i), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = Zs(u)), m)
          m(this, e, f, u, n) && (w = 1);
        else if (f.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(f) + "").trim(), u += "", un.lastIndex = 0, un.test(c) || (g = De(c), _ = De(u)), _ ? g !== _ && (c = pn(e, f, c, _) + _) : g && (u += g), this.add(o, "setProperty", c, u, s, i, 0, 0, f), r.push(f), M.push(f, 0, o[f]);
        else if (p !== "undefined") {
          if (a && f in a ? (c = typeof a[f] == "function" ? a[f].call(n, s, e, i) : a[f], Ae(c) && ~c.indexOf("random(") && (c = Zs(c)), De(c + "") || c === "auto" || (c += tt.units[f] || De(zt(e, f)) || ""), (c + "").charAt(1) === "=" && (c = zt(e, f))) : c = zt(e, f), d = parseFloat(c), y = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), f in Mt && (f === "autoAlpha" && (d === 1 && zt(e, "visibility") === "hidden" && h && (d = 0), M.push("visibility", 0, o.visibility), an(this, o, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), f !== "scale" && f !== "transform" && (f = Mt[f], ~f.indexOf(",") && (f = f.split(",")[0]))), v = f in Kt, v) {
            if (this.styles.save(f), p === "string" && u.substring(0, 6) === "var(--" && (u = ft(e, u.substring(4, u.indexOf(")"))), h = parseFloat(u)), x || (T = e._gsap, T.renderTransform && !t.parseTransform || ti(e, t.parseTransform), A = t.smoothOrigin !== false && T.smooth, x = this._pt = new Ve(this._pt, o, le, 0, 1, T.renderTransform, T, 0, -1), x.dep = 1), f === "scale")
              this._pt = new Ve(this._pt, T, "scaleY", T.scaleY, (y ? ts(T.scaleY, y + h) : h) - T.scaleY || 0, Zo), this._pt.u = 0, r.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              M.push(We, 0, o[We]), u = bg(u), T.svg ? ea(e, u, 0, A, 0, this) : (_ = parseFloat(u.split(" ")[2]) || 0, _ !== T.zOrigin && an(this, T, "zOrigin", T.zOrigin, _), an(this, o, f, rr(c), rr(u)));
              continue;
            } else if (f === "svgOrigin") {
              ea(e, u, 1, A, 0, this);
              continue;
            } else if (f in Bh) {
              Pg(this, T, f, d, y ? ts(d, y + u) : u);
              continue;
            } else if (f === "smoothOrigin") {
              an(this, T, "smooth", T.smooth, u);
              continue;
            } else if (f === "force3D") {
              T[f] = u;
              continue;
            } else if (f === "transform") {
              Eg(this, u, e);
              continue;
            }
          } else f in o || (f = xs(f) || f);
          if (v || (h || h === 0) && (d || d === 0) && !lg.test(u) && f in o)
            g = (c + "").substr((d + "").length), h || (h = 0), _ = De(u) || (f in tt.units ? tt.units[f] : g), g !== _ && (d = pn(e, f, c, _)), this._pt = new Ve(this._pt, v ? T : o, f, d, (y ? ts(d, y + h) : h) - d, !v && (_ === "px" || f === "zIndex") && t.autoRound !== false ? hg : Zo), this._pt.u = _ || 0, g !== _ && _ !== "%" && (this._pt.b = c, this._pt.r = ug);
          else if (f in o)
            Tg.call(this, e, f, c, y ? y + u : u);
          else if (f in e)
            this.add(e, f, c || e[f], y ? y + u : u, s, i);
          else if (f !== "parseTransform") {
            Ea(f, u);
            continue;
          }
          v || (f in o ? M.push(f, 0, o[f]) : typeof e[f] == "function" ? M.push(f, 2, e[f]()) : M.push(f, 1, c || e[f])), r.push(f);
        }
      }
    w && Lh(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Ua())
      for (var n = t._pt; n; )
        n.r(e, n.d), n = n._next;
    else
      t.styles.revert();
  },
  get: zt,
  aliases: Mt,
  getSetter: function(e, t, n) {
    var s = Mt[t];
    return s && s.indexOf(",") < 0 && (t = s), t in Kt && t !== We && (e._gsap.x || zt(e, "x")) ? n && gc === n ? t === "scale" ? mg : fg : (gc = n || {}) && (t === "scale" ? gg : _g) : e.style && !Aa(e.style[t]) ? dg : ~t.indexOf("-") ? pg : ka(e, t);
  },
  core: {
    _removeProperty: In,
    _getMatrix: za
  }
};
Ke.utils.checkPrefix = xs;
Ke.core.getStyleSaver = kh;
(function(l15, e, t, n) {
  var s = je(l15 + "," + e + "," + t, function(i) {
    Kt[i] = 1;
  });
  je(e, function(i) {
    tt.units[i] = "deg", Bh[i] = 1;
  }), Mt[s[13]] = l15 + "," + e, je(n, function(i) {
    var r = i.split(":");
    Mt[r[1]] = s[r[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(l15) {
  tt.units[l15] = "px";
});
Ke.registerPlugin(Hh);
var Ga = Ke.registerPlugin(Hh) || Ke;
Ga.core.Tween;
const ta = {
  linear: "none",
  easeInQuad: "power2.in",
  easeOutQuad: "power2.out"
};
class Sg {
  constructor(e, t, n = {}) {
    this.target = e, this.toVars = t, this.config = n;
  }
  tween = null;
  start() {
    return new Promise((e) => {
      this.tween && this.tween.kill();
      const {
        duration: t = 0.5,
        easing: n = ta.linear,
        delay: s = 0,
        repeat: i = 0,
        yoyo: r = false,
        onStart: o,
        onUpdate: a,
        onComplete: c,
        onPause: u,
        onResume: h
      } = this.config;
      this.tween = Ga.to(this.target.scale, {
        ...this.toVars,
        duration: t,
        ease: n,
        delay: s,
        repeat: i,
        yoyo: r,
        onStart: () => {
          o?.();
        },
        onUpdate: () => {
          this.target.updateMatrixWorld(true);
          const d = this.tween?.progress() || 0;
          a?.(d, this.target);
        },
        onComplete: () => {
          c?.(), e();
        },
        onPause: () => {
          u?.();
        },
        onResume: () => {
          h?.();
        }
      });
    });
  }
  stop() {
    this.tween && (this.tween.kill(), this.tween = null);
  }
  isRunning() {
    return this.tween ? this.tween.isActive() : false;
  }
  pause() {
    this.tween && this.tween.pause();
  }
  resume() {
    this.tween && this.tween.resume();
  }
  progress(e) {
    return this.tween ? e !== void 0 ? (this.tween.progress(e), e) : this.tween.progress() : 0;
  }
}
function Cg(l15, e, t, n = {}) {
  return l15.scale.copy(e), new Sg(
    l15,
    {
      x: t.x,
      y: t.y,
      z: t.z
    },
    n
  );
}
function Mc(l15, e, t, n = {}) {
  const s = new B.Vector3(1, e, 1), i = new B.Vector3(1, t, 1);
  return Cg(l15, s, i, n);
}
class jh {
  animations = /* @__PURE__ */ new Map();
  timeline = null;
  constructor() {
    this.timeline = Ga.timeline();
  }
  // 启动动画并存储到管理器中
  async startAnimation(e, t, n = true) {
    n && this.animations.has(e) && this.stopAnimation(e), this.animations.set(e, t);
    try {
      await t.start();
    } finally {
      this.animations.delete(e);
    }
  }
  // 停止指定动画
  stopAnimation(e) {
    const t = this.animations.get(e);
    t && (t.stop(), this.animations.delete(e));
  }
  // 暂停指定动画
  pauseAnimation(e) {
    const t = this.animations.get(e);
    t && t.pause();
  }
  // 恢复指定动画
  resumeAnimation(e) {
    const t = this.animations.get(e);
    t && t.resume();
  }
  // 设置动画进度
  setAnimationProgress(e, t) {
    const n = this.animations.get(e);
    n && n.progress(t);
  }
  // 停止所有动画
  stopAllAnimations() {
    this.animations.forEach((e) => e.stop()), this.animations.clear();
  }
  // 暂停所有动画
  pauseAllAnimations() {
    this.animations.forEach((e) => e.pause());
  }
  // 恢复所有动画
  resumeAllAnimations() {
    this.animations.forEach((e) => e.resume());
  }
  // 检查动画是否正在运行
  isAnimationRunning(e) {
    const t = this.animations.get(e);
    return t ? t.isRunning() : false;
  }
  // 获取正在运行的动画数量
  getRunningAnimationsCount() {
    return Array.from(this.animations.values()).filter((e) => e.isRunning()).length;
  }
  // 获取所有动画键
  getAnimationKeys() {
    return Array.from(this.animations.keys());
  }
  // 清理时间线
  cleanup() {
    this.stopAllAnimations(), this.timeline && (this.timeline.kill(), this.timeline = null);
  }
}
new jh();
const Pc = {
  // 快速出现
  quickIn: {
    easing: ta.easeOutQuad,
    duration: 0.3
  },
  // 快速消失
  quickOut: {
    easing: ta.easeInQuad,
    duration: 0.2
  }
}, Lg = ["object"], Uy = /* @__PURE__ */ ie({
  __name: "Tileset",
  props: {
    url: {}
  },
  setup(l15, { expose: e }) {
    const t = l15, { camera: n, renderer: s } = Ms$1();
    let i = Ro(new No(t.url));
    i.fetchOptions.mode = "cors", i.lruCache.minSize = 900, i.lruCache.maxSize = 1300, i.errorTarget = 12, i.registerPlugin(new cm()), i.getPluginByName("DEBUG_TILES_PLUGIN").displayBoxBounds = true;
    const r = new jh();
    O(
      n,
      () => {
        n.value && (i.setCamera(n.value), i.setResolutionFromRenderer(n.value, s));
      },
      { immediate: true }
    ), i.addEventListener("load-model", ({ scene: c }) => {
      c.traverse((u) => {
        if (u.material) {
          const h = u;
          Array.isArray(h.material) ? h.material.forEach((d) => {
            d.side = B.DoubleSide;
          }) : h.material.side = B.DoubleSide;
        }
      });
    });
    function o(c) {
      return `tile_${c.uuid}`;
    }
    dm(i, async (c, u) => {
      if (c) {
        const h = c.children[0], d = o(h), p = Mc(h, 0, 1, {
          ...Pc.quickIn,
          duration: 0.2
        });
        await r.startAnimation(d, p, true);
      }
    }), pm(i, async (c, u) => {
      if (c) {
        const h = c.children[0], d = o(h), p = Mc(h, 1, 0, {
          ...Pc.quickOut,
          duration: 0.2
        });
        await r.startAnimation(d, p, true);
      }
    });
    const { onBeforeRender: a } = ml$1();
    return a(() => {
      i.update();
    }), Le(() => {
      console.log("清理动画管理器"), r.cleanup();
    }), e({
      animationManager: r,
      pauseAllAnimations: () => r.pauseAllAnimations(),
      resumeAllAnimations: () => r.resumeAllAnimations(),
      stopAllAnimations: () => r.stopAllAnimations(),
      getRunningAnimationsCount: () => r.getRunningAnimationsCount(),
      getAnimationKeys: () => r.getAnimationKeys()
    }), (c, u) => E(i) ? (Z(), me("primitive", {
      key: 0,
      object: E(i)?.group
    }, null, 8, Lg)) : Fe("", true);
  }
}), Rg = parseInt(md.replace(/\D+/g, ""));
function Ec(l15, e) {
  if (e === Bc)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), l15;
  if (e === rs || e === cr) {
    let t = l15.getIndex();
    if (t === null) {
      const r = [], o = l15.getAttribute("position");
      if (o !== void 0) {
        for (let a = 0; a < o.count; a++)
          r.push(a);
        l15.setIndex(r), t = l15.getIndex();
      } else
        return console.error(
          "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
        ), l15;
    }
    const n = t.count - 2, s = [];
    if (t)
      if (e === rs)
        for (let r = 1; r <= n; r++)
          s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
      else
        for (let r = 0; r < n; r++)
          r % 2 === 0 ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2))) : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const i = l15.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), l15;
}
function or(l15) {
  if (typeof TextDecoder < "u")
    return new TextDecoder().decode(l15);
  let e = "";
  for (let t = 0, n = l15.length; t < n; t++)
    e += String.fromCharCode(l15[t]);
  try {
    return decodeURIComponent(escape(e));
  } catch {
    return e;
  }
}
const En = "srgb", Vt = "srgb-linear", Sc = 3001, Dg = 3e3;
class Og extends ur {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Ug(t);
    }), this.register(function(t) {
      return new Bg(t);
    }), this.register(function(t) {
      return new qg(t);
    }), this.register(function(t) {
      return new Xg(t);
    }), this.register(function(t) {
      return new Yg(t);
    }), this.register(function(t) {
      return new Gg(t);
    }), this.register(function(t) {
      return new Hg(t);
    }), this.register(function(t) {
      return new jg(t);
    }), this.register(function(t) {
      return new Vg(t);
    }), this.register(function(t) {
      return new Ng(t);
    }), this.register(function(t) {
      return new Wg(t);
    }), this.register(function(t) {
      return new zg(t);
    }), this.register(function(t) {
      return new Kg(t);
    }), this.register(function(t) {
      return new $g(t);
    }), this.register(function(t) {
      return new kg(t);
    }), this.register(function(t) {
      return new Zg(t);
    }), this.register(function(t) {
      return new Qg(t);
    });
  }
  load(e, t, n, s) {
    const i = this;
    let r;
    if (this.resourcePath !== "")
      r = this.resourcePath;
    else if (this.path !== "") {
      const c = Pt.extractUrlBase(e);
      r = Pt.resolveURL(c, this.path);
    } else
      r = Pt.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
    }, a = new os(this.manager);
    a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(
      e,
      function(c) {
        try {
          i.parse(
            c,
            r,
            function(u) {
              t(u), i.manager.itemEnd(e);
            },
            o
          );
        } catch (u) {
          o(u);
        }
      },
      n,
      o
    );
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, s) {
    let i;
    const r = {}, o = {};
    if (typeof e == "string")
      i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (or(new Uint8Array(e.slice(0, 4))) === Vh) {
        try {
          r[W.KHR_BINARY_GLTF] = new Jg(e);
        } catch (u) {
          s && s(u);
          return;
        }
        i = JSON.parse(r[W.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(or(new Uint8Array(e)));
    else
      i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const a = new d_(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    a.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const u = this.pluginCallbacks[c](a);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, r[u.name] = true;
    }
    if (i.extensionsUsed)
      for (let c = 0; c < i.extensionsUsed.length; ++c) {
        const u = i.extensionsUsed[c], h = i.extensionsRequired || [];
        switch (u) {
          case W.KHR_MATERIALS_UNLIT:
            r[u] = new Fg();
            break;
          case W.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new e_(i, this.dracoLoader);
            break;
          case W.KHR_TEXTURE_TRANSFORM:
            r[u] = new t_();
            break;
          case W.KHR_MESH_QUANTIZATION:
            r[u] = new n_();
            break;
          default:
            h.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    a.setExtensions(r), a.setPlugins(o), a.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function Ig() {
  let l15 = {};
  return {
    get: function(e) {
      return l15[e];
    },
    add: function(e, t) {
      l15[e] = t;
    },
    remove: function(e) {
      delete l15[e];
    },
    removeAll: function() {
      l15 = {};
    }
  };
}
const W = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class kg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let s = t.cache.get(n);
    if (s)
      return s;
    const i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Ce(16777215);
    a.color !== void 0 && u.setRGB(a.color[0], a.color[1], a.color[2], Vt);
    const h = a.range !== void 0 ? a.range : 0;
    switch (a.type) {
      case "directional":
        c = new Hc(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Gc(u), c.distance = h;
        break;
      case "spot":
        c = new zc(u), c.distance = h, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle !== void 0 ? a.spot.innerConeAngle : 0, a.spot.outerConeAngle = a.spot.outerConeAngle !== void 0 ? a.spot.outerConeAngle : Math.PI / 4, c.angle = a.spot.outerConeAngle, c.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, Bt(c, a), a.intensity !== void 0 && (c.intensity = a.intensity), c.name = t.createUniqueName(a.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], o = (i.extensions && i.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(a) {
      return n._getNodeRef(t.cache, o, a);
    });
  }
}
class Fg {
  constructor() {
    this.name = W.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ne;
  }
  extendParams(e, t, n) {
    const s = [];
    e.color = new Ce(1, 1, 1), e.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], Vt), e.opacity = r[3];
      }
      i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, En));
    }
    return Promise.all(s);
  }
}
class Ng {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class Ug {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new $(o, o);
    }
    return Promise.all(i);
  }
}
class Bg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
  }
}
class zg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && i.push(
      n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)
    ), Promise.all(i);
  }
}
class Gg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = s.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Vt);
    }
    return r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, En)), r.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Hg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(i);
  }
}
class jg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ce().setRGB(
      o[0],
      o[1],
      o[2],
      Vt
    ), Promise.all(i);
  }
}
class Vg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class Wg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ce().setRGB(o[0], o[1], o[2], Vt), r.specularColorTexture !== void 0 && i.push(
      n.assignTexture(t, "specularColorMap", r.specularColorTexture, En)
    ), Promise.all(i);
  }
}
class $g {
  constructor(e) {
    this.parser = e, this.name = W.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1, r.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", r.bumpTexture)), Promise.all(i);
  }
}
class Kg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ye;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], r = s.extensions[this.name];
    return r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength), r.anisotropyRotation !== void 0 && (t.anisotropyRotation = r.anisotropyRotation), r.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)), Promise.all(i);
  }
}
class qg {
  constructor(e) {
    this.parser = e, this.name = W.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}
class Xg {
  constructor(e) {
    this.parser = e, this.name = W.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = s.images[r.source];
    let a = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, a);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Yg {
  constructor(e) {
    this.parser = e, this.name = W.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
    if (!i.extensions || !i.extensions[t])
      return null;
    const r = i.extensions[t], o = s.images[r.source];
    let a = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, a);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Zg {
  constructor(e) {
    this.name = W.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(o) {
        const a = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, h = s.byteStride, d = new Uint8Array(o, a, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(u, h, d, s.mode, s.filter).then(function(p) {
          return p.buffer;
        }) : r.ready.then(function() {
          const p = new ArrayBuffer(u * h);
          return r.decodeGltfBuffer(
            new Uint8Array(p),
            u,
            h,
            d,
            s.mode,
            s.filter
          ), p;
        });
      });
    } else
      return null;
  }
}
class Qg {
  constructor(e) {
    this.name = W.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const c of s.primitives)
      if (c.mode !== ut.TRIANGLES && c.mode !== ut.TRIANGLE_STRIP && c.mode !== ut.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, o = [], a = {};
    for (const c in r)
      o.push(
        this.parser.getDependency("accessor", r[c]).then((u) => (a[c] = u, a[c]))
      );
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, p = [];
      for (const m of h) {
        const f = new z(), g = new P(), _ = new Se(), y = new P(1, 1, 1), v = new la(m.geometry, m.material, d);
        for (let x = 0; x < d; x++)
          a.TRANSLATION && g.fromBufferAttribute(a.TRANSLATION, x), a.ROTATION && _.fromBufferAttribute(a.ROTATION, x), a.SCALE && y.fromBufferAttribute(a.SCALE, x), v.setMatrixAt(x, f.compose(g, _, y));
        for (const x in a)
          if (x === "_COLOR_0") {
            const T = a[x];
            v.instanceColor = new jc(T.array, T.itemSize, T.normalized);
          } else x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && m.geometry.setAttribute(x, a[x]);
        Ts.prototype.copy.call(v, m), this.parser.assignFinalMaterial(v), p.push(v);
      }
      return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
    }));
  }
}
const Vh = "glTF", Fs = 12, Cc = { JSON: 1313821514, BIN: 5130562 };
class Jg {
  constructor(e) {
    this.name = W.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Fs);
    if (this.header = {
      magic: or(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, true),
      length: t.getUint32(8, true)
    }, this.header.magic !== Vh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Fs, s = new DataView(e, Fs);
    let i = 0;
    for (; i < n; ) {
      const r = s.getUint32(i, true);
      i += 4;
      const o = s.getUint32(i, true);
      if (i += 4, o === Cc.JSON) {
        const a = new Uint8Array(e, Fs + i, r);
        this.content = or(a);
      } else if (o === Cc.BIN) {
        const a = Fs + i;
        this.body = e.slice(a, a + r);
      }
      i += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class e_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = W.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, a = {}, c = {};
    for (const u in r) {
      const h = na[u] || u.toLowerCase();
      o[h] = r[u];
    }
    for (const u in e.attributes) {
      const h = na[u] || u.toLowerCase();
      if (r[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], p = is[d.componentType];
        c[h] = p.name, a[h] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", i).then(function(u) {
      return new Promise(function(h, d) {
        s.decodeDracoFile(
          u,
          function(p) {
            for (const m in p.attributes) {
              const f = p.attributes[m], g = a[m];
              g !== void 0 && (f.normalized = g);
            }
            h(p);
          },
          o,
          c,
          Vt,
          d
        );
      });
    });
  }
}
class t_ {
  constructor() {
    this.name = W.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class n_ {
  constructor() {
    this.name = W.KHR_MESH_QUANTIZATION;
  }
}
class Wh extends lu {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
    for (let r = 0; r !== s; r++)
      t[r] = n[i + r];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer, r = this.sampleValues, o = this.valueSize, a = o * 2, c = o * 3, u = s - t, h = (n - t) / u, d = h * h, p = d * h, m = e * c, f = m - c, g = -2 * p + 3 * d, _ = p - d, y = 1 - g, v = _ - d + h;
    for (let x = 0; x !== o; x++) {
      const T = r[f + x + o], A = r[f + x + a] * u, w = r[m + x + o], M = r[m + x] * u;
      i[x] = y * T + v * A + g * w + _ * M;
    }
    return i;
  }
}
const s_ = /* @__PURE__ */ new Se();
class i_ extends Wh {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return s_.fromArray(i).normalize().toArray(i), i;
  }
}
const ut = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, is = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Lc = {
  9728: ca,
  9729: $s,
  9984: Xc,
  9985: qc,
  9986: Kc,
  9987: hr
}, Rc = {
  33071: Zc,
  33648: Yc,
  10497: ls
}, bo = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, na = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  // uv => uv1, 4 uv channels
  // https://github.com/mrdoob/three.js/pull/25943
  // https://github.com/mrdoob/three.js/pull/25788
  ...Rg >= 152 ? {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3"
  } : {
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2"
  },
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Qt = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, r_ = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: pr,
  STEP: ou
}, wo = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function o_(l15) {
  return l15.DefaultMaterial === void 0 && (l15.DefaultMaterial = new ii({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: false,
    depthTest: true,
    side: au
  })), l15.DefaultMaterial;
}
function bn(l15, e, t) {
  for (const n in t.extensions)
    l15[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Bt(l15, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(l15.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function a_(l15, e, t) {
  let n = false, s = false, i = false;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = true), h.NORMAL !== void 0 && (s = true), h.COLOR_0 !== void 0 && (i = true), n && s && i)
      break;
  }
  if (!n && !s && !i)
    return Promise.resolve(l15);
  const r = [], o = [], a = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : l15.attributes.position;
      r.push(d);
    }
    if (s) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : l15.attributes.normal;
      o.push(d);
    }
    if (i) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : l15.attributes.color;
      a.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(a)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (l15.morphAttributes.position = u), s && (l15.morphAttributes.normal = h), i && (l15.morphAttributes.color = d), l15.morphTargetsRelative = true, l15;
  });
}
function l_(l15, e) {
  if (l15.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      l15.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (l15.morphTargetInfluences.length === t.length) {
      l15.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        l15.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function c_(l15) {
  let e;
  const t = l15.extensions && l15.extensions[W.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ao(t.attributes) : e = l15.indices + ":" + Ao(l15.attributes) + ":" + l15.mode, l15.targets !== void 0)
    for (let n = 0, s = l15.targets.length; n < s; n++)
      e += ":" + Ao(l15.targets[n]);
  return e;
}
function Ao(l15) {
  let e = "";
  const t = Object.keys(l15).sort();
  for (let n = 0, s = t.length; n < s; n++)
    e += t[n] + ":" + l15[t[n]] + ";";
  return e;
}
function sa(l15) {
  switch (l15) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function u_(l15) {
  return l15.search(/\.jpe?g($|\?)/i) > 0 || l15.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : l15.search(/\.webp($|\?)/i) > 0 || l15.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const h_ = /* @__PURE__ */ new z();
class d_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Ig(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, s = false, i = -1;
    typeof navigator < "u" && typeof navigator.userAgent < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, s = navigator.userAgent.indexOf("Firefox") > -1, i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || s && i < 98 ? this.textureLoader = new ar(this.options.manager) : this.textureLoader = new Vc(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new os(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(
      this._invokeAll(function(r) {
        return r.beforeRoot && r.beforeRoot();
      })
    ).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][s.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: s.asset,
        parser: n,
        userData: {}
      };
      return bn(i, o, s), Bt(o, s), Promise.all(
        n._invokeAll(function(a) {
          return a.afterRoot && a.afterRoot(o);
        })
      ).then(function() {
        for (const a of o.scenes)
          a.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s].joints;
      for (let o = 0, a = r.length; o < a; o++)
        e[r[o]].isBone = true;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = true)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const s = n.clone(), i = (r, o) => {
      const a = this.associations.get(r);
      a != null && this.associations.set(o, a);
      for (const [c, u] of r.children.entries())
        i(u, o.children[c]);
    };
    return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(e, t);
          }), !s)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(
        s.map(function(i, r) {
          return n.getDependency(e, r);
        })
      ), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[W.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, r) {
      n.load(Pt.resolveURL(t.uri, s.path), i, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = bo[s.type], o = is[s.componentType], a = s.normalized === true, c = new o(s.count * r);
      return Promise.resolve(new we(c, r, a));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(r) {
      const o = r[0], a = bo[s.type], c = is[s.componentType], u = c.BYTES_PER_ELEMENT, h = u * a, d = s.byteOffset || 0, p = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === true;
      let f, g;
      if (p && p !== h) {
        const _ = Math.floor(d / p), y = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + _ + ":" + s.count;
        let v = t.cache.get(y);
        v || (f = new c(o, _ * p, s.count * p / u), v = new Wc(f, p / u), t.cache.add(y, v)), g = new $c(
          v,
          a,
          d % p / u,
          m
        );
      } else
        o === null ? f = new c(s.count * a) : f = new c(o, d, s.count * a), g = new we(f, a, m);
      if (s.sparse !== void 0) {
        const _ = bo.SCALAR, y = is[s.sparse.indices.componentType], v = s.sparse.indices.byteOffset || 0, x = s.sparse.values.byteOffset || 0, T = new y(
          r[1],
          v,
          s.sparse.count * _
        ), A = new c(r[2], x, s.sparse.count * a);
        o !== null && (g = new we(
          g.array.slice(),
          g.itemSize,
          g.normalized
        ));
        for (let w = 0, M = T.length; w < M; w++) {
          const b = T[w];
          if (g.setX(b, A[w * a]), a >= 2 && g.setY(b, A[w * a + 1]), a >= 3 && g.setZ(b, A[w * a + 2]), a >= 4 && g.setW(b, A[w * a + 3]), a >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, r = t.images[i];
    let o = this.textureLoader;
    if (r.uri) {
      const a = n.manager.getHandler(r.uri);
      a !== null && (o = a);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, n) {
    const s = this, i = this.json, r = i.textures[e], o = i.images[t], a = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[a])
      return this.textureCache[a];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = false, u.name = r.name || o.name || "", u.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (u.name = o.uri);
      const d = (i.samplers || {})[r.sampler] || {};
      return u.magFilter = Lc[d.magFilter] || $s, u.minFilter = Lc[d.minFilter] || hr, u.wrapS = Rc[d.wrapS] || ls, u.wrapT = Rc[d.wrapT] || ls, s.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[a] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, s = this.json, i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = s.images[e], o = self.URL || self.webkitURL;
    let a = r.uri || "", c = false;
    if (r.bufferView !== void 0)
      a = n.getDependency("bufferView", r.bufferView).then(function(h) {
        c = true;
        const d = new Blob([h], { type: r.mimeType });
        return a = o.createObjectURL(d), a;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(a).then(function(h) {
      return new Promise(function(d, p) {
        let m = d;
        t.isImageBitmapLoader === true && (m = function(f) {
          const g = new Ks(f);
          g.needsUpdate = true, d(g);
        }), t.load(Pt.resolveURL(h, i.path), m, void 0, p);
      });
    }).then(function(h) {
      return c === true && o.revokeObjectURL(a), Bt(h, r), h.userData.mimeType = r.mimeType || u_(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", a), h;
    });
    return this.sourceCache[e] = u, u;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (!r)
        return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (r = r.clone(), r.channel = n.texCoord), i.extensions[W.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[W.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const a = i.associations.get(r);
          r = i.extensions[W.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), i.associations.set(r, a);
        }
      }
      return s !== void 0 && (typeof s == "number" && (s = s === Sc ? En : Vt), "colorSpace" in r ? r.colorSpace = s : r.encoding = s === En ? Sc : Dg), e[t] = r, r;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new bs(), Qn.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, a.sizeAttenuation = false, this.cache.add(o, a)), n = a;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let a = this.cache.get(o);
      a || (a = new lr(), Qn.prototype.copy.call(a, n), a.color.copy(n.color), a.map = n.map, this.cache.add(o, a)), n = a;
    }
    if (s || i || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      s && (o += "derivative-tangents:"), i && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let a = this.cache.get(o);
      a || (a = n.clone(), i && (a.vertexColors = true), r && (a.flatShading = true), s && (a.normalScale && (a.normalScale.y *= -1), a.clearcoatNormalScale && (a.clearcoatNormalScale.y *= -1)), this.cache.add(o, a), this.associations.set(a, this.associations.get(n))), n = a;
    }
    e.material = n;
  }
  getMaterialType() {
    return ii;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, s = this.extensions, i = n.materials[e];
    let r;
    const o = {}, a = i.extensions || {}, c = [];
    if (a[W.KHR_MATERIALS_UNLIT]) {
      const h = s[W.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), c.push(h.extendParams(o, i, t));
    } else {
      const h = i.pbrMetallicRoughness || {};
      if (o.color = new Ce(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Vt), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", h.baseColorTexture, En)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(
        Promise.all(
          this._invokeAll(function(d) {
            return d.extendMaterialParams && d.extendMaterialParams(e, o);
          })
        )
      );
    }
    i.doubleSided === true && (o.side = oa);
    const u = i.alphaMode || wo.OPAQUE;
    if (u === wo.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, u === wo.MASK && (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && r !== Ne && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new $(1, 1), i.normalTexture.scale !== void 0)) {
      const h = i.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (i.occlusionTexture !== void 0 && r !== Ne && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && r !== Ne) {
      const h = i.emissiveFactor;
      o.emissive = new Ce().setRGB(
        h[0],
        h[1],
        h[2],
        Vt
      );
    }
    return i.emissiveTexture !== void 0 && r !== Ne && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, En)), Promise.all(c).then(function() {
      const h = new r(o);
      return i.name && (h.name = i.name), Bt(h, i), t.associations.set(h, { materials: e }), i.extensions && bn(s, h, i), h;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Qc.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, s = this.primitiveCache;
    function i(o) {
      return n[W.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(a) {
        return Dc(a, o, t);
      });
    }
    const r = [];
    for (let o = 0, a = e.length; o < a; o++) {
      const c = e[o], u = c_(c), h = s[u];
      if (h)
        r.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[W.KHR_DRACO_MESH_COMPRESSION] ? d = i(c) : d = Dc(new $e(), c, t), s[u] = { primitive: c, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, s = this.extensions, i = n.meshes[e], r = i.primitives, o = [];
    for (let a = 0, c = r.length; a < c; a++) {
      const u = r[a].material === void 0 ? o_(this.cache) : this.getDependency("material", r[a].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(a) {
      const c = a.slice(0, a.length - 1), u = a[a.length - 1], h = [];
      for (let p = 0, m = u.length; p < m; p++) {
        const f = u[p], g = r[p];
        let _;
        const y = c[p];
        if (g.mode === ut.TRIANGLES || g.mode === ut.TRIANGLE_STRIP || g.mode === ut.TRIANGLE_FAN || g.mode === void 0)
          _ = i.isSkinnedMesh === true ? new Jc(f, y) : new et(f, y), _.isSkinnedMesh === true && _.normalizeSkinWeights(), g.mode === ut.TRIANGLE_STRIP ? _.geometry = Ec(_.geometry, cr) : g.mode === ut.TRIANGLE_FAN && (_.geometry = Ec(_.geometry, rs));
        else if (g.mode === ut.LINES)
          _ = new dr(f, y);
        else if (g.mode === ut.LINE_STRIP)
          _ = new ra(f, y);
        else if (g.mode === ut.LINE_LOOP)
          _ = new eu(f, y);
        else if (g.mode === ut.POINTS)
          _ = new si(f, y);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && l_(_, i), _.name = t.createUniqueName(i.name || "mesh_" + e), Bt(_, i), g.extensions && bn(s, _, g), t.assignFinalMaterial(_), h.push(_);
      }
      for (let p = 0, m = h.length; p < m; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return i.extensions && bn(s, h[0], i), h[0];
      const d = new ge();
      i.extensions && bn(s, d, i), t.associations.set(d, { meshes: e });
      for (let p = 0, m = h.length; p < m; p++)
        d.add(h[p]);
      return d;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new tu(
      k.radToDeg(s.yfov),
      s.aspectRatio || 1,
      s.znear || 1,
      s.zfar || 2e6
    ) : n.type === "orthographic" && (t = new nu(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Bt(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
      const i = s.pop(), r = s, o = [], a = [];
      for (let c = 0, u = r.length; c < u; c++) {
        const h = r[c];
        if (h) {
          o.push(h);
          const d = new z();
          i !== null && d.fromArray(i.array, c * 16), a.push(d);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new su(o, a);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, r = [], o = [], a = [], c = [], u = [];
    for (let h = 0, d = s.channels.length; h < d; h++) {
      const p = s.channels[h], m = s.samplers[p.sampler], f = p.target, g = f.node, _ = s.parameters !== void 0 ? s.parameters[m.input] : m.input, y = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
      f.node !== void 0 && (r.push(this.getDependency("node", g)), o.push(this.getDependency("accessor", _)), a.push(this.getDependency("accessor", y)), c.push(m), u.push(f));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(a),
      Promise.all(c),
      Promise.all(u)
    ]).then(function(h) {
      const d = h[0], p = h[1], m = h[2], f = h[3], g = h[4], _ = [];
      for (let y = 0, v = d.length; y < v; y++) {
        const x = d[y], T = p[y], A = m[y], w = f[y], M = g[y];
        if (x === void 0)
          continue;
        x.updateMatrix && x.updateMatrix();
        const b = n._createAnimationTracks(x, T, A, w, M);
        if (b)
          for (let S = 0; S < b.length; S++)
            _.push(b[S]);
      }
      return new iu(i, void 0, _);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, s = t.nodes[e];
    return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
      const r = n._getNodeRef(n.meshCache, s.mesh, i);
      return s.weights !== void 0 && r.traverse(function(o) {
        if (o.isMesh)
          for (let a = 0, c = s.weights.length; a < c; a++)
            o.morphTargetInfluences[a] = s.weights[a];
      }), r;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), r = [], o = s.children || [];
    for (let c = 0, u = o.length; c < u; c++)
      r.push(n.getDependency("node", o[c]));
    const a = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
    return Promise.all([i, Promise.all(r), a]).then(function(c) {
      const u = c[0], h = c[1], d = c[2];
      d !== null && u.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, h_);
      });
      for (let p = 0, m = h.length; p < m; p++)
        u.add(h[p]);
      return u;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, s = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const i = t.nodes[e], r = i.name ? s.createUniqueName(i.name) : "", o = [], a = s._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return a && o.push(a), i.camera !== void 0 && o.push(
      s.getDependency("camera", i.camera).then(function(c) {
        return s._getNodeRef(s.cameraCache, i.camera, c);
      })
    ), s._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let u;
      if (i.isBone === true ? u = new ru() : c.length > 1 ? u = new ge() : c.length === 1 ? u = c[0] : u = new Ts(), u !== c[0])
        for (let h = 0, d = c.length; h < d; h++)
          u.add(c[h]);
      if (i.name && (u.userData.name = i.name, u.name = r), Bt(u, i), i.extensions && bn(n, u, i), i.matrix !== void 0) {
        const h = new z();
        h.fromArray(i.matrix), u.applyMatrix4(h);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      return s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], s = this, i = new ge();
    n.name && (i.name = s.createUniqueName(n.name)), Bt(i, n), n.extensions && bn(t, i, n);
    const r = n.nodes || [], o = [];
    for (let a = 0, c = r.length; a < c; a++)
      o.push(s.getDependency("node", r[a]));
    return Promise.all(o).then(function(a) {
      for (let u = 0, h = a.length; u < h; u++)
        i.add(a[u]);
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, p] of s.associations)
          (d instanceof Qn || d instanceof Ks) && h.set(d, p);
        return u.traverse((d) => {
          const p = s.associations.get(d);
          p != null && h.set(d, p);
        }), h;
      };
      return s.associations = c(i), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const r = [], o = e.name ? e.name : e.uuid, a = [];
    Qt[i.path] === Qt.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && a.push(d.name ? d.name : d.uuid);
    }) : a.push(o);
    let c;
    switch (Qt[i.path]) {
      case Qt.weights:
        c = Ki;
        break;
      case Qt.rotation:
        c = qi;
        break;
      case Qt.position:
      case Qt.scale:
        c = $i;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Ki;
            break;
          case 2:
          case 3:
          default:
            c = $i;
            break;
        }
        break;
    }
    const u = s.interpolation !== void 0 ? r_[s.interpolation] : pr, h = this._getArrayFromAccessor(n);
    for (let d = 0, p = a.length; d < p; d++) {
      const m = new c(
        a[d] + "." + Qt[i.path],
        t.array,
        h,
        u
      );
      s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), r.push(m);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = sa(t.constructor), s = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++)
        s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const s = this instanceof qi ? i_ : Wh;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function p_(l15, e, t) {
  const n = e.attributes, s = new ua();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], a = o.min, c = o.max;
    if (a !== void 0 && c !== void 0) {
      if (s.set(new P(a[0], a[1], a[2]), new P(c[0], c[1], c[2])), o.normalized) {
        const u = sa(is[o.componentType]);
        s.min.multiplyScalar(u), s.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new P(), a = new P();
    for (let c = 0, u = i.length; c < u; c++) {
      const h = i[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], p = d.min, m = d.max;
        if (p !== void 0 && m !== void 0) {
          if (a.setX(Math.max(Math.abs(p[0]), Math.abs(m[0]))), a.setY(Math.max(Math.abs(p[1]), Math.abs(m[1]))), a.setZ(Math.max(Math.abs(p[2]), Math.abs(m[2]))), d.normalized) {
            const f = sa(is[d.componentType]);
            a.multiplyScalar(f);
          }
          o.max(a);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(o);
  }
  l15.boundingBox = s;
  const r = new kn();
  s.getCenter(r.center), r.radius = s.min.distanceTo(s.max) / 2, l15.boundingSphere = r;
}
function Dc(l15, e, t) {
  const n = e.attributes, s = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function(a) {
      l15.setAttribute(o, a);
    });
  }
  for (const r in n) {
    const o = na[r] || r.toLowerCase();
    o in l15.attributes || s.push(i(n[r], o));
  }
  if (e.indices !== void 0 && !l15.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      l15.setIndex(o);
    });
    s.push(r);
  }
  return Bt(l15, e), p_(l15, e, t), Promise.all(s).then(function() {
    return e.targets !== void 0 ? a_(l15, e.targets, t) : l15;
  });
}
const Mo = /* @__PURE__ */ new WeakMap();
class f_ extends ur {
  constructor(e) {
    super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
      position: "POSITION",
      normal: "NORMAL",
      color: "COLOR",
      uv: "TEX_COORD"
    }, this.defaultAttributeTypes = {
      position: "Float32Array",
      normal: "Float32Array",
      color: "Float32Array",
      uv: "Float32Array"
    };
  }
  setDecoderPath(e) {
    return this.decoderPath = e, this;
  }
  setDecoderConfig(e) {
    return this.decoderConfig = e, this;
  }
  setWorkerLimit(e) {
    return this.workerLimit = e, this;
  }
  load(e, t, n, s) {
    const i = new os(this.manager);
    i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(
      e,
      (r) => {
        const o = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(r, o).then(t).catch(s);
      },
      n,
      s
    );
  }
  /** @deprecated Kept for backward-compatibility with previous DRACOLoader versions. */
  decodeDracoFile(e, t, n, s) {
    const i = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!n
    };
    this.decodeGeometry(e, i).then(t);
  }
  decodeGeometry(e, t) {
    for (const a in t.attributeTypes) {
      const c = t.attributeTypes[a];
      c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[a] = c.name);
    }
    const n = JSON.stringify(t);
    if (Mo.has(e)) {
      const a = Mo.get(e);
      if (a.key === n)
        return a.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const i = this.workerNextTaskID++, r = e.byteLength, o = this._getWorker(i, r).then((a) => (s = a, new Promise((c, u) => {
      s._callbacks[i] = { resolve: c, reject: u }, s.postMessage({ type: "decode", id: i, taskConfig: t, buffer: e }, [e]);
    }))).then((a) => this._createGeometry(a.geometry));
    return o.catch(() => true).then(() => {
      s && i && this._releaseTask(s, i);
    }), Mo.set(e, {
      key: n,
      promise: o
    }), o;
  }
  _createGeometry(e) {
    const t = new $e();
    e.index && t.setIndex(new we(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const s = e.attributes[n], i = s.name, r = s.array, o = s.itemSize;
      t.setAttribute(i, new we(r, o));
    }
    return t;
  }
  _loadLibrary(e, t) {
    const n = new os(this.manager);
    return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((s, i) => {
      n.load(e, s, void 0, i);
    });
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending)
      return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
    return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
      const s = n[0];
      e || (this.decoderConfig.wasmBinary = n[1]);
      const i = m_.toString(), r = [
        "/* draco decoder */",
        s,
        "",
        "/* worker */",
        i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
      ].join(`
`);
      this.workerSourceURL = URL.createObjectURL(new Blob([r]));
    }), this.decoderPending;
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        s._callbacks = {}, s._taskCosts = {}, s._taskLoad = 0, s.postMessage({ type: "init", decoderConfig: this.decoderConfig }), s.onmessage = function(i) {
          const r = i.data;
          switch (r.type) {
            case "decode":
              s._callbacks[r.id].resolve(r);
              break;
            case "error":
              s._callbacks[r.id].reject(r);
              break;
            default:
              console.error('THREE.DRACOLoader: Unexpected message, "' + r.type + '"');
          }
        }, this.workerPool.push(s);
      } else
        this.workerPool.sort(function(s, i) {
          return s._taskLoad > i._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return n._taskCosts[e] = t, n._taskLoad += t, n;
    });
  }
  _releaseTask(e, t) {
    e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return this.workerPool.length = 0, this;
  }
}
function m_() {
  let l15, e;
  onmessage = function(r) {
    const o = r.data;
    switch (o.type) {
      case "init":
        l15 = o.decoderConfig, e = new Promise(function(u) {
          l15.onModuleLoaded = function(h) {
            u({ draco: h });
          }, DracoDecoderModule(l15);
        });
        break;
      case "decode":
        const a = o.buffer, c = o.taskConfig;
        e.then((u) => {
          const h = u.draco, d = new h.Decoder(), p = new h.DecoderBuffer();
          p.Init(new Int8Array(a), a.byteLength);
          try {
            const m = t(h, d, p, c), f = m.attributes.map((g) => g.array.buffer);
            m.index && f.push(m.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: m }, f);
          } catch (m) {
            console.error(m), self.postMessage({ type: "error", id: o.id, error: m.message });
          } finally {
            h.destroy(p), h.destroy(d);
          }
        });
        break;
    }
  };
  function t(r, o, a, c) {
    const u = c.attributeIDs, h = c.attributeTypes;
    let d, p;
    const m = o.GetEncodedGeometryType(a);
    if (m === r.TRIANGULAR_MESH)
      d = new r.Mesh(), p = o.DecodeBufferToMesh(a, d);
    else if (m === r.POINT_CLOUD)
      d = new r.PointCloud(), p = o.DecodeBufferToPointCloud(a, d);
    else
      throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!p.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + p.error_msg());
    const f = { index: null, attributes: [] };
    for (const g in u) {
      const _ = self[h[g]];
      let y, v;
      if (c.useUniqueIDs)
        v = u[g], y = o.GetAttributeByUniqueId(d, v);
      else {
        if (v = o.GetAttributeId(d, r[u[g]]), v === -1)
          continue;
        y = o.GetAttribute(d, v);
      }
      f.attributes.push(s(r, o, d, g, _, y));
    }
    return m === r.TRIANGULAR_MESH && (f.index = n(r, o, d)), r.destroy(d), f;
  }
  function n(r, o, a) {
    const u = a.num_faces() * 3, h = u * 4, d = r._malloc(h);
    o.GetTrianglesUInt32Array(a, h, d);
    const p = new Uint32Array(r.HEAPF32.buffer, d, u).slice();
    return r._free(d), { array: p, itemSize: 1 };
  }
  function s(r, o, a, c, u, h) {
    const d = h.num_components(), m = a.num_points() * d, f = m * u.BYTES_PER_ELEMENT, g = i(r, u), _ = r._malloc(f);
    o.GetAttributeDataArrayForAllPoints(a, h, g, f, _);
    const y = new u(r.HEAPF32.buffer, _, m).slice();
    return r._free(_), {
      name: c,
      array: y,
      itemSize: d
    };
  }
  function i(r, o) {
    switch (o) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
class g_ extends ur {
  gltfLoader;
  constructor(e) {
    super(e), this.gltfLoader = new Og(e);
  }
  /**
   * Load a GLTF model from a URL or array of URLs.
   * If an array is provided, only the first URL will be used.
   *
   * @param {(string | string[])} url - URL or array of URLs to load
   * @param {(result: GLTF) => void} onLoad - Callback when the model is loaded
   * @param {(event: ProgressEvent<EventTarget>) => void} [onProgress] - Loading progress callback
   * @param {(event: ErrorEvent) => void} [onError] - Error callback
   */
  load(e, t, n, s) {
    const i = Array.isArray(e) ? e[0] : e;
    this.gltfLoader.load(i, t, n, s);
  }
  /**
   * Asynchronously load a GLTF model.
   *
   * @param {string | string[]} url - URL or array of URLs to load
   * @returns {Promise<GLTF>} Promise that resolves with the loaded model
   */
  async loadAsync(e) {
    const t = Array.isArray(e) ? e[0] : e;
    return this.gltfLoader.loadAsync(t);
  }
  /**
   * Set the DRACO loader for compressed models.
   *
   * @param {DRACOLoader} dracoLoader - The DRACO loader instance
   * @returns {GLTFLoader} The loader instance for chaining
   */
  setDRACOLoader(e) {
    return this.gltfLoader.setDRACOLoader(e);
  }
}
const __ = g_;
function y_(l15, e) {
  let t = null;
  return {
    loaderExtension: (s) => {
      l15.draco && (t || (t = new f_()), t.setDecoderPath(l15.decoderPath || "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"), s.setDRACOLoader && s.setDRACOLoader(t));
    },
    dracoLoader: () => t
  };
}
async function v_(l15, e = {
  draco: false
}, t) {
  const { loaderExtension: n, dracoLoader: s } = y_(e), i = await Ji$1(__, l15, { extensions: n }), r = s();
  return r && r.dispose(), i;
}
const x_ = ["object"], By = /* @__PURE__ */ ie({
  __name: "GeoGLTF",
  props: {
    url: {},
    draco: { type: Boolean, default: false },
    decoderPath: { default: "./draco/" },
    renderOrder: { default: 1 }
  },
  setup(l15) {
    const e = l15, t = ce();
    return _e(async () => {
      const { scene: n } = await v_(e.url, {
        draco: e.draco,
        decoderPath: e.draco ? e.decoderPath : void 0
      });
      t.value = n, t.value.userData.tiles = [], t.value.renderOrder = e.renderOrder;
    }), (n, s) => t.value ? (Z(), me("primitive", {
      key: 0,
      object: t.value,
      scale: 1,
      position: [0, 0, 0]
    }, null, 8, x_)) : Fe("", true);
  }
}), T_ = /* @__PURE__ */ ie({
  __name: "GeoCSS2DRenderer",
  setup(l15) {
    const { camera: e, renderer: t } = Ms$1(), n = ce(), s = () => {
      n.value?.setSize(window.innerWidth, window.innerHeight);
    };
    return _e(() => {
      e.value && e.value.layers.enableAll(), n.value = new vd(), n.value.setSize(window.innerWidth, window.innerHeight), n.value.domElement.style.position = "fixed", n.value.domElement.style.top = "0", n.value.domElement.style.left = "0", n.value.domElement.style.pointerEvents = "none", t.domElement?.parentElement?.appendChild(n.value.domElement);
      const { onRender: i } = ml$1();
      i(({ scene: r, camera: o }) => {
        n.value?.render(r.value, o.value);
      }), window.addEventListener("resize", s);
    }), Qh(() => {
      window.removeEventListener("resize", s), t.domElement?.parentElement?.removeChild(n.value.domElement);
    }), () => {
    };
  }
}), zy = /* @__PURE__ */ ie({
  __name: "GeoCanvas",
  props: {
    canvasConfig: { default: () => ({
      windowSize: true,
      alpha: true,
      antialias: true,
      shadows: false,
      autoClear: true,
      disableRender: true,
      outputColorSpace: B.SRGBColorSpace,
      toneMapping: B.NoToneMapping,
      pixelRatio: 1
    }) },
    cameraConfig: { default: () => ({
      fov: 29,
      aspect: window.innerWidth / window.innerHeight,
      near: 1,
      far: 1e4,
      position: [0, 0, 1.75 * 1e7],
      lookAt: [0, 0, 0]
    }) }
  },
  setup(l15) {
    const e = l15, { canvasConfig: t, cameraConfig: n } = e, s = xe(null);
    return _e(() => {
      const i = s.value?.context?.renderer?.instance;
      i && (window.devicePixelRatio = t.pixelRatio, i.setPixelRatio(window.devicePixelRatio));
    }), (i, r) => (Z(), wt(E(il$1), Jh({ clearColor: "#fff" }, E(t), {
      ref_key: "canvasRef",
      ref: s
    }), {
      default: ni(() => [
        Dn("TresPerspectiveCamera", td(nd(E(n))), null, 16),
        ed(T_),
        Je(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oc = { type: "change" }, Ha = { type: "start" }, $h = { type: "end" }, Ui = new yt(), Ic = new ri(), b_ = Math.cos(70 * k.DEG2RAD), ve = new P(), Ge = 2 * Math.PI, te = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, Po = 1e-6;
class w_ extends gd {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLDOMElement} domElement - The HTML element used for event listeners.
   */
  constructor(e, t = null) {
    super(e, t), this.state = te.NONE, this.target = new P(), this.cursor = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Gt.ROTATE, MIDDLE: Gt.DOLLY, RIGHT: Gt.PAN }, this.touches = { ONE: nn.ROTATE, TWO: nn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new P(), this._lastQuaternion = new Se(), this._lastTargetPosition = new P(), this._quat = new Se().setFromUnitVectors(e.up, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Xi(), this._sphericalDelta = new Xi(), this._scale = 1, this._panOffset = new P(), this._rotateStart = new $(), this._rotateEnd = new $(), this._rotateDelta = new $(), this._panStart = new $(), this._panEnd = new $(), this._panDelta = new $(), this._dollyStart = new $(), this._dollyEnd = new $(), this._dollyDelta = new $(), this._dollyDirection = new P(), this._mouse = new $(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = M_.bind(this), this._onPointerDown = A_.bind(this), this._onPointerUp = P_.bind(this), this._onContextMenu = O_.bind(this), this._onMouseWheel = C_.bind(this), this._onKeyDown = L_.bind(this), this._onTouchStart = R_.bind(this), this._onTouchMove = D_.bind(this), this._onMouseDown = E_.bind(this), this._onMouseMove = S_.bind(this), this._interceptControlDown = I_.bind(this), this._interceptControlUp = k_.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Get the current vertical rotation, in radians.
   *
   * @return {number} The current vertical rotation, in radians.
   */
  getPolarAngle() {
    return this._spherical.phi;
  }
  /**
   * Get the current horizontal rotation, in radians.
   *
   * @return {number} The current horizontal rotation, in radians.
   */
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  /**
   * Returns the distance from the camera to the target.
   *
   * @return {number} The distance from the camera to the target.
   */
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  /**
   * Adds key event listeners to the given DOM element.
   * `window` is a recommended argument for using this method.
   *
   * @param {HTMLDOMElement} domElement - The DOM element
   */
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  /**
   * Removes the key event listener previously defined with `listenToKeyEvents()`.
   */
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  /**
   * Save the current state of the controls. This can later be recovered with `reset()`.
   */
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  /**
   * Reset the controls to their state from either the last time the `saveState()`
   * was called, or the initial state.
   */
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Oc), this.update(), this.state = te.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    ve.copy(t).sub(this.target), ve.applyQuaternion(this._quat), this._spherical.setFromVector3(ve), this.autoRotate && this.state === te.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Ge : n > Math.PI && (n -= Ge), s < -Math.PI ? s += Ge : s > Math.PI && (s -= Ge), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let i = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const r = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = r != this._spherical.radius;
    }
    if (ve.setFromSpherical(this._spherical), ve.applyQuaternion(this._quatInverse), t.copy(this.target).add(ve), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let r = null;
      if (this.object.isPerspectiveCamera) {
        const o = ve.length();
        r = this._clampDistance(o * this._scale);
        const a = o - r;
        this.object.position.addScaledVector(this._dollyDirection, a), this.object.updateMatrixWorld(), i = !!a;
      } else if (this.object.isOrthographicCamera) {
        const o = new P(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const a = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = a !== this.object.zoom;
        const c = new P(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), r = ve.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      r !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position) : (Ui.origin.copy(this.object.position), Ui.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ui.direction)) < b_ ? this.object.lookAt(this.target) : (Ic.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ui.intersectPlane(Ic, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const r = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), r !== this.object.zoom && (this.object.updateProjectionMatrix(), i = true);
    }
    return this._scale = 1, this._performCursorZoom = false, i || this._lastPosition.distanceToSquared(this.object.position) > Po || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Po || this._lastTargetPosition.distanceToSquared(this.target) > Po ? (this.dispatchEvent(Oc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Ge / 60 * this.autoRotateSpeed * e : Ge / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    ve.setFromMatrixColumn(t, 0), ve.multiplyScalar(-e), this._panOffset.add(ve);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? ve.setFromMatrixColumn(t, 1) : (ve.setFromMatrixColumn(t, 0), ve.crossVectors(this.object.up, ve)), ve.multiplyScalar(e), this._panOffset.add(ve);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      ve.copy(s).sub(this.target);
      let i = ve.length();
      i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), s = e - n.left, i = t - n.top, r = n.width, o = n.height;
    this._mouse.x = s / r * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Ge * this._rotateDelta.x / t.clientHeight), this._rotateUp(Ge * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Ge * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Ge * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Ge * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Ge * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, i);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + n.x), i = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(s, i);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Ge * this._rotateDelta.x / t.clientHeight), this._rotateUp(Ge * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, s = e.pageY - t.y, i = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, i), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const r = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(r, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new $(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function A_(l15) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(l15.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(l15) && (this._addPointer(l15), l15.pointerType === "touch" ? this._onTouchStart(l15) : this._onMouseDown(l15)));
}
function M_(l15) {
  this.enabled !== false && (l15.pointerType === "touch" ? this._onTouchMove(l15) : this._onMouseMove(l15));
}
function P_(l15) {
  switch (this._removePointer(l15), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(l15.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent($h), this.state = te.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function E_(l15) {
  let e;
  switch (l15.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Gt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(l15), this.state = te.DOLLY;
      break;
    case Gt.ROTATE:
      if (l15.ctrlKey || l15.metaKey || l15.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(l15), this.state = te.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(l15), this.state = te.ROTATE;
      }
      break;
    case Gt.PAN:
      if (l15.ctrlKey || l15.metaKey || l15.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(l15), this.state = te.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(l15), this.state = te.PAN;
      }
      break;
    default:
      this.state = te.NONE;
  }
  this.state !== te.NONE && this.dispatchEvent(Ha);
}
function S_(l15) {
  switch (this.state) {
    case te.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(l15);
      break;
    case te.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(l15);
      break;
    case te.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(l15);
      break;
  }
}
function C_(l15) {
  this.enabled === false || this.enableZoom === false || this.state !== te.NONE || (l15.preventDefault(), this.dispatchEvent(Ha), this._handleMouseWheel(this._customWheelEvent(l15)), this.dispatchEvent($h));
}
function L_(l15) {
  this.enabled !== false && this._handleKeyDown(l15);
}
function R_(l15) {
  switch (this._trackPointer(l15), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case nn.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(l15), this.state = te.TOUCH_ROTATE;
          break;
        case nn.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(l15), this.state = te.TOUCH_PAN;
          break;
        default:
          this.state = te.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case nn.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(l15), this.state = te.TOUCH_DOLLY_PAN;
          break;
        case nn.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(l15), this.state = te.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = te.NONE;
      }
      break;
    default:
      this.state = te.NONE;
  }
  this.state !== te.NONE && this.dispatchEvent(Ha);
}
function D_(l15) {
  switch (this._trackPointer(l15), this.state) {
    case te.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(l15), this.update();
      break;
    case te.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(l15), this.update();
      break;
    case te.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(l15), this.update();
      break;
    case te.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(l15), this.update();
      break;
    default:
      this.state = te.NONE;
  }
}
function O_(l15) {
  this.enabled !== false && l15.preventDefault();
}
function I_(l15) {
  l15.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function k_(l15) {
  l15.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
class F_ extends w_ {
  constructor(e, t) {
    super(e, t), this.screenSpacePanning = false, this.mouseButtons = { LEFT: Gt.PAN, MIDDLE: Gt.DOLLY, RIGHT: Gt.ROTATE }, this.touches = { ONE: nn.PAN, TWO: nn.DOLLY_ROTATE };
  }
}
const N_ = { type: "change" }, Bi = new yt(), kc = new ri(), j = new P(), Eo = new et(new cu(10, 10, 10), new Ne({ color: 16711680 })), U_ = Math.cos(70 * k.DEG2RAD), zi = 2 * Math.PI, B_ = {
  NONE: -1
}, So = 1e-6, z_ = Pe(0, 89.99999, 0).normalize();
console.log(z_);
const G_ = (l15) => {
  const e = new P();
  return hn.WGS84.getSurfaceNormal(l15, e), e;
};
class H_ extends F_ {
  // 持久化的平移偏移量，不会被重置
  _persistentPanOffset = new P(0, 0, 0);
  resetPanOffset() {
    this._persistentPanOffset.set(0, 0, 0);
  }
  constructor(e, t, n = false) {
    super(e, t), n && e.parent?.add(Eo);
  }
  targetUp = new P(0, 1, 0);
  _panUp(e, t) {
    j.setFromMatrixColumn(t, 0), j.crossVectors(this.targetUp, j), j.multiplyScalar(e), this._panOffset.add(j);
  }
  _panLeft(e, t) {
    j.setFromMatrixColumn(t, 0), j.projectOnPlane(this.targetUp), j.normalize(), j.multiplyScalar(-e), this._panOffset.add(j);
  }
  targetPosition = { heading: 0, pitch: 0, distance: 0, x: 0, y: 0 };
  // 根据 x, y 值计算持久化偏移量
  _calculatePersistentPanOffset(e = 0, t = 0) {
    const n = new P(), s = this.object.matrix;
    return e !== 0 && (j.setFromMatrixColumn(s, 0), j.projectOnPlane(this.targetUp), j.normalize(), j.multiplyScalar(-e), n.add(j)), t !== 0 && (j.setFromMatrixColumn(s, 0), j.crossVectors(this.targetUp, j), j.multiplyScalar(t), n.add(j)), n;
  }
  getTarget() {
    return this._persistentPanOffset ? this.target.clone().add(this._persistentPanOffset) : this.target;
  }
  lookAt() {
    this.object.lookAt(this.getTarget());
  }
  invertCameraHPD() {
    const e = this.object.position, t = this.getTarget(), n = e.distanceTo(t), s = new P(), i = new P(), r = new P();
    hn.WGS84.getEastNorthUpVectors(this.target, s, i, r);
    const o = new P().subVectors(t, e).normalize(), a = new P().copy(o);
    a.projectOnPlane(r).normalize();
    const c = Math.atan2(a.dot(i), a.dot(s)), u = k.radToDeg(c), h = Math.asin(-o.dot(r)), d = k.radToDeg(h);
    let p = 0, m = 0;
    if (this._persistentPanOffset.lengthSq() > 0) {
      const f = this.object.matrix;
      j.setFromMatrixColumn(f, 0), j.projectOnPlane(this.targetUp), j.normalize(), p = -this._persistentPanOffset.dot(j), j.setFromMatrixColumn(f, 0), j.crossVectors(this.targetUp, j), j.normalize(), m = this._persistentPanOffset.dot(j);
    }
    return { heading: u, pitch: d, distance: n, x: p, y: m };
  }
  setCameraPosition(e) {
    this.targetPosition = e;
    const { heading: t, pitch: n, distance: s, x: i = 0, y: r = 0 } = e;
    this._persistentPanOffset.copy(this._calculatePersistentPanOffset(i, r));
    const o = this.getTarget(), a = new P(), c = new P(), u = new P();
    hn.WGS84.getEastNorthUpVectors(this.target, a, c, u);
    const h = k.degToRad(t), d = k.degToRad(n), p = new P().copy(a).multiplyScalar(Math.cos(h)).add(c.clone().multiplyScalar(Math.sin(h))), m = new P().copy(p).multiplyScalar(Math.cos(d)).add(u.clone().multiplyScalar(Math.sin(-d))).normalize().multiplyScalar(s);
    this.object.position.copy(o).sub(m), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), Eo.position.copy(this.getTarget());
  }
  updateUp(e) {
    this.targetUp.copy(e), this._quat = new Se().setFromUnitVectors(e, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this.object?.up.copy(this.targetUp), this.setCameraPosition(this.targetPosition);
  }
  update(e) {
    if (!this._persistentPanOffset) return false;
    let t;
    const n = this.object.position;
    let s = this.getTarget();
    j.copy(n).sub(s), j.applyQuaternion(this._quat), this._spherical.setFromVector3(j), this.autoRotate && this.state === B_.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(i) && isFinite(r) && (i < -Math.PI ? i += zi : i > Math.PI && (i -= zi), r < -Math.PI ? r += zi : r > Math.PI && (r -= zi), i <= r ? this._spherical.theta = Math.max(i, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + r) / 2 ? Math.max(i, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(
      this.minPolarAngle,
      Math.min(this.maxPolarAngle, this._spherical.phi)
    ), this._spherical.makeSafe(), this.enableDamping === true ? this._persistentPanOffset.addScaledVector(this._panOffset, this.dampingFactor) : this._persistentPanOffset.add(this._panOffset), this._persistentPanOffset.sub(this.cursor), this._persistentPanOffset.clampLength(this.minTargetRadius, this.maxTargetRadius), this._persistentPanOffset.add(this.cursor), s.copy(this.getTarget());
    let o = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), o = a != this._spherical.radius;
    }
    if (j.setFromSpherical(this._spherical), j.applyQuaternion(this._quatInverse), n.copy(s).add(j), this.object.lookAt(s), Eo.position.copy(this.getTarget()), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const c = j.length();
        a = this._clampDistance(c * this._scale);
        const u = c - a;
        this.object.position.addScaledVector(this._dollyDirection, u), this.object.updateMatrixWorld(), o = !!u;
      } else if (this.object.isOrthographicCamera) {
        const c = new P(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object);
        const u = this.object.zoom;
        this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale)
        ), this.object.updateProjectionMatrix(), o = u !== this.object.zoom;
        const h = new P(this._mouse.x, this._mouse.y, 0);
        h.unproject(this.object), this.object.position.sub(h).add(c), this.object.updateMatrixWorld(), a = j.length();
      } else
        console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
        ), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Bi.origin.copy(this.object.position), Bi.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Bi.direction)) < U_ ? this.object.lookAt(s) : (kc.setFromNormalAndCoplanarPoint(this.object.up, this.target), Bi.intersectPlane(kc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale)
      ), a !== this.object.zoom && (this.object.updateProjectionMatrix(), o = true);
    }
    return this._scale = 1, this._performCursorZoom = false, (o || this._lastPosition.distanceToSquared(this.object.position) > So || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > So || this._lastTargetPosition.distanceToSquared(this.target) > So) && (this.dispatchEvent(N_), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), t = true, this.targetPosition = this.invertCameraHPD(), this.dispatchEvent({ type: "target-change" })), t = false, t;
  }
}
const Co = new P(), Lo = new P(), Fc = new z(), Nc = {}, j_ = 2550, V_ = /* @__PURE__ */ new P();
class W_ extends Uf {
  isWorldPosition = false;
  adjustCamera(e, t) {
    super.adjustCamera(e);
    const { ellipsoidFrame: n, ellipsoidFrameInverse: s, ellipsoid: i, nearMargin: r, farMargin: o } = this, a = Math.max(...i.radius);
    if ("isPerspectiveCamera" in e) {
      const c = new P();
      this.isWorldPosition ? e.getWorldPosition(c) : c.copy(e.position);
      const u = Co.setFromMatrixPosition(n).sub(c).length(), h = r * a, d = k.clamp((u - a) / h, 0, 1), p = k.lerp(1, 1e3, d);
      this.isWorldPosition ? t && (e.near = e.position.distanceTo(t) * 0.05) : e.near = Math.max(p, u - a - h), Lo.copy(c).applyMatrix4(s), i.getPositionToCartographic(Lo, Nc);
      const m = Math.max(i.getPositionElevation(Lo), j_), f = i.calculateHorizonDistance(Nc.lat, m);
      e.far = f + 0.1 + a * o, e.updateProjectionMatrix();
    } else {
      this._getVirtualOrthoCameraPosition(e.position, e), e.updateMatrixWorld(), Fc.copy(e.matrixWorld).invert(), Co.setFromMatrixPosition(n).applyMatrix4(Fc);
      const c = -Co.z;
      e.near = c - a * (1 + r), e.far = c + 0.1 + a * o, e.position.addScaledVector(V_, e.near), e.far -= e.near, e.near = 0, e.updateProjectionMatrix(), e.updateMatrixWorld();
    }
  }
}
const Gy = /* @__PURE__ */ ie({
  __name: "GeoControls",
  props: /* @__PURE__ */ sd({
    enableDamping: { type: Boolean, default: true },
    adjustHeight: { type: Boolean, default: false },
    minDistance: { default: 150 },
    target: { default: null }
  }, {
    position: { required: true },
    positionModifiers: {},
    "target-position": { required: false },
    "target-positionModifiers": {}
  }),
  emits: ["update:position", "update:target-position"],
  setup(l15) {
    const { scene: e, camera: t, renderer: n } = Ms$1(), s = Va(l15, "position"), i = Va(l15, "target-position"), r = (g, _, y) => {
      let v;
      const x = () => {
        v = O(g, _, y);
      }, T = () => {
        v();
      };
      return x(), (A) => {
        T(), A().then(() => {
          x();
        });
      };
    }, o = l15, { onRender: a } = ml$1();
    let c = null, u = ce(null);
    const h = () => {
      if (o.target) {
        const g = Pe(o.target.lon, o.target.lat, o.target.height || 0);
        u.value?.target.copy(g), u.value?.updateUp(G_(g));
      }
    }, d = r([i], () => {
      i.value && u.value && u.value.setCameraPosition(i.value);
    });
    O(
      [u],
      () => {
        i.value && u.value && u.value.setCameraPosition(i.value);
      },
      { immediate: true }
    );
    const p = () => {
      o.target ? (c && (c.isWorldPosition = true, c.enabled = false), !u.value && t.value && n && (u.value = new H_(t.value, n.domElement), u.value.enableDamping = o.enableDamping, u.value.minDistance = o.minDistance, u.value.addEventListener("target-change", () => {
        d(async () => {
          i.value = u.value?.targetPosition || i.value;
        });
      })), u.value && (u.value.enabled = true, u.value.resetPanOffset(), h(), u.value)) : (c && (c.isWorldPosition = false), u.value && (u.value.enabled = false), c && (c.enabled = true, t.value?.up.set(0, 1, 0)));
    };
    _e(() => {
      t.value && n && e.value && (c = new W_(
        e.value,
        t.value,
        n.domElement
      ), c.setTilesRenderer({ group: e.value }), c.enableDamping = o.enableDamping, c.adjustHeight = o.adjustHeight, c.minDistance = o.minDistance, p());
    });
    const m = () => {
      t.value && !o.target && Pd(
        t.value,
        s.value.distance,
        s.value.heading,
        s.value.pitch,
        s.value.longitude,
        s.value.latitude
      );
    };
    O(
      () => o.target,
      () => {
        p(), o.target || m();
      },
      { immediate: true, deep: true }
    );
    const f = r([s, t], () => {
      m();
    });
    return a(() => {
      if (o.target && u.value?.enabled ? (u.value.update(), t.value && c?.adjustCamera(t.value, u.value.target)) : o.target || c?.update(), t.value && !o.target) {
        const g = Rd(t.value);
        g && f(async () => {
          s.value = g;
        });
      }
    }), Le(() => {
      c?.dispose(), u.value?.dispose();
    }), (g, _) => null;
  }
}), $_ = ["color", "intensity"], K_ = ["color", "intensity", "position"], Hy = /* @__PURE__ */ ie({
  __name: "GeoScene",
  props: {
    sceneConfig: { default: () => ({
      // effectProps: {
      //   enabled: true,
      //   focusArea: 0.7,
      //   feather: 0.1,
      // },
      ambientLight: {
        color: "#fff",
        intensity: 1
      },
      directionalLight: {
        color: "#fff",
        intensity: 2,
        position: [-1500, 500, 500]
      },
      background: "/farm_field_puresky_2k.jpg"
    }) }
  },
  setup(l15) {
    const e = l15, { sceneConfig: t } = e, n = Wa(t.ambientLight), s = Wa(t.directionalLight), i = xe(null), r = xe(null), { scene: o } = Ms$1();
    return _e(() => {
      const a = new B.TextureLoader();
      if (t.background) {
        const c = a.load(t.background);
        c.mapping = B.EquirectangularReflectionMapping, c.colorSpace = B.SRGBColorSpace, o.value.background = c;
      }
    }), (a, c) => (Z(), me("TresGroup", null, [
      Je(a.$slots, "default"),
      Dn("TresAmbientLight", {
        ref_key: "ambientLightRef",
        ref: i,
        color: n.color,
        intensity: n.intensity
      }, null, 8, $_),
      Dn("TresDirectionalLight", {
        ref_key: "directionalLightRef",
        ref: r,
        color: s.color,
        intensity: s.intensity,
        position: s.position
      }, null, 8, K_)
    ]));
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "DevTDTTiles",
  props: {
    layer: {
      type: String,
      default: "vec"
    }
  },
  setup(__props) {
    const url = "https://t0.tianditu.gov.cn";
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(Ny), {
        layer: __props.layer,
        url: _unref(url),
        tk: "890a908c5d3f6c77232b60964d74f180"
      }, null, 8, ["layer", "url"]);
    };
  }
});

export { $d, By, Gy, Hy, J_, Q_, T_, Uy, Z_, _a, _sfc_main, ay, cy, ey, iy, ly, ol, oy, rl, ry, ty, zy };
//# sourceMappingURL=DevTDTTiles.vue_vue_type_script_setup_true_lang.xgh0_FRH1767105581793.js.map
