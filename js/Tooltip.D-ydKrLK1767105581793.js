import { importShared } from './index.BxB45aCK1767105581793.js';
import { popoverLight, NPopover, popoverBaseProps } from './Popover.BPydV3cl1767105581793.js';
import { createTheme, derived, composite, useConfig, useTheme } from './light.CLUJsvFB1767105581793.js';

const commonVars = {
  padding: '8px 14px'
};

function self(vars) {
  const {
    borderRadius,
    boxShadow2,
    baseColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    borderRadius,
    boxShadow: boxShadow2,
    color: composite(baseColor, 'rgba(0, 0, 0, .85)'),
    textColor: baseColor
  });
}
const tooltipLight = createTheme({
  name: 'Tooltip',
  common: derived,
  peers: {
    Popover: popoverLight
  },
  self
});

// Tooltip: popover wearing waistcoat
const {computed,defineComponent,h,ref} = await importShared('vue');
const tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props);
const NTooltip = defineComponent({
  name: 'Tooltip',
  props: tooltipProps,
  slots: Object,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme('Tooltip', '-tooltip', undefined, tooltipLight, props, mergedClsPrefixRef);
    const popoverRef = ref(null);
    const tooltipExposedMethod = {
      syncPosition() {
        popoverRef.value.syncPosition();
      },
      setShow(show) {
        popoverRef.value.setShow(show);
      }
    };
    return Object.assign(Object.assign({}, tooltipExposedMethod), {
      popoverRef,
      mergedTheme: themeRef,
      popoverThemeOverrides: computed(() => {
        return themeRef.value.self;
      })
    });
  },
  render() {
    const {
      mergedTheme,
      internalExtraClass
    } = this;
    return h(NPopover, Object.assign(Object.assign({}, this.$props), {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: internalExtraClass.concat('tooltip'),
      ref: 'popoverRef'
    }), this.$slots);
  }
});

export { NTooltip, commonVars, tooltipLight, tooltipProps };
//# sourceMappingURL=Tooltip.D-ydKrLK1767105581793.js.map
