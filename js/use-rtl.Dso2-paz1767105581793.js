import { importShared } from './index.BxB45aCK1767105581793.js';
import { queryElement, useSsrAdapter, configProviderInjectionKey, cssrAnchorMetaName } from './light.CLUJsvFB1767105581793.js';

function exists(id, ssr) {
    if (id === undefined)
        return false;
    if (ssr) {
        const { context: { ids } } = ssr;
        return ids.has(id);
    }
    return queryElement(id) !== null;
}

const {computed: computed$1,ref: ref$1,watch} = await importShared('vue');

function useMemo(getterOrOptions) {
    const computedValueRef = computed$1(getterOrOptions);
    // Maybe it's not possible to lazy evaluate the value, since we can't make
    // render phase capture the deps behind useMemo
    const valueRef = ref$1(computedValueRef.value);
    watch(computedValueRef, (value) => {
        valueRef.value = value;
    });
    if (typeof getterOrOptions === 'function') {
        return valueRef;
    }
    else {
        return {
            __v_isRef: true,
            get value() {
                return valueRef.value;
            },
            set value(v) {
                getterOrOptions.set(v);
            }
        };
    }
}

const {ref,onMounted,readonly} = await importShared('vue');

function isMounted() {
    const isMounted = ref(false);
    onMounted(() => { isMounted.value = true; });
    return readonly(isMounted);
}

const {computed,inject,onBeforeMount,watchEffect} = await importShared('vue');
function useRtl(mountId, rtlStateRef, clsPrefixRef) {
  if (!rtlStateRef) return undefined;
  const ssrAdapter = useSsrAdapter();
  const componentRtlStateRef = computed(() => {
    const {
      value: rtlState
    } = rtlStateRef;
    if (!rtlState) {
      return undefined;
    }
    const componentRtlState = rtlState[mountId];
    if (!componentRtlState) {
      return undefined;
    }
    return componentRtlState;
  });
  const NConfigProvider = inject(configProviderInjectionKey, null);
  const mountStyle = () => {
    watchEffect(() => {
      const {
        value: clsPrefix
      } = clsPrefixRef;
      const id = `${clsPrefix}${mountId}Rtl`;
      // if it already exists, we only need to watch clsPrefix, although in most
      // of time it's unnecessary... However we can at least listen less
      // handlers, which is great.
      if (exists(id, ssrAdapter)) return;
      const {
        value: componentRtlState
      } = componentRtlStateRef;
      if (!componentRtlState) return;
      componentRtlState.style.mount({
        id,
        head: true,
        anchorMetaName: cssrAnchorMetaName,
        props: {
          bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
        },
        ssr: ssrAdapter,
        parent: NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget
      });
    });
  };
  if (ssrAdapter) {
    mountStyle();
  } else {
    onBeforeMount(mountStyle);
  }
  return componentRtlStateRef;
}

export { isMounted, useMemo, useRtl };
//# sourceMappingURL=use-rtl.Dso2-paz1767105581793.js.map
