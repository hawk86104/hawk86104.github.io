import { importShared } from './index.BxB45aCK1767105581793.js';
import { derived, cB, cM, c, warn, useConfig, useTheme, useThemeClass } from './light.CLUJsvFB1767105581793.js';
import { formatLength } from './format-length.BfWHZVRc1767105581793.js';

function self(vars) {
  const {
    textColorBase,
    opacity1,
    opacity2,
    opacity3,
    opacity4,
    opacity5
  } = vars;
  return {
    color: textColorBase,
    opacity1Depth: opacity1,
    opacity2Depth: opacity2,
    opacity3Depth: opacity3,
    opacity4Depth: opacity4,
    opacity5Depth: opacity5
  };
}
const iconLight = {
  common: derived,
  self
};

// vars:
// --n-bezier
// --n-color
// --n-opacity
const style = cB('icon', `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [cM('color-transition', {
  transition: 'color .3s var(--n-bezier)'
}), cM('depth', {
  color: 'var(--n-color)'
}, [c('svg', {
  opacity: 'var(--n-opacity)',
  transition: 'opacity .3s var(--n-bezier)'
})]), c('svg', {
  height: '1em',
  width: '1em'
})]);

const {computed,defineComponent,h,mergeProps} = await importShared('vue');
const iconProps = Object.assign(Object.assign({}, useTheme.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
});
const NIcon = defineComponent({
  _n_icon__: true,
  name: 'Icon',
  inheritAttrs: false,
  props: iconProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('Icon', '-icon', style, iconLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      if (depth !== undefined) {
        const {
          color,
          [`opacity${depth}Depth`]: opacity
        } = self;
        return {
          '--n-bezier': cubicBezierEaseInOut,
          '--n-color': color,
          '--n-opacity': opacity
        };
      }
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-color': '',
        '--n-opacity': ''
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('icon', computed(() => `${props.depth || 'd'}`), cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedStyle: computed(() => {
        const {
          size,
          color
        } = props;
        return {
          fontSize: formatLength(size),
          color
        };
      }),
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $parent,
      depth,
      mergedClsPrefix,
      component,
      onRender,
      themeClass
    } = this;
    if ((_a = $parent === null || $parent === void 0 ? void 0 : $parent.$options) === null || _a === void 0 ? void 0 : _a._n_icon__) {
      warn('icon', 'don\'t wrap `n-icon` inside `n-icon`');
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h('i', mergeProps(this.$attrs, {
      role: 'img',
      class: [`${mergedClsPrefix}-icon`, themeClass, {
        [`${mergedClsPrefix}-icon--depth`]: depth,
        [`${mergedClsPrefix}-icon--color-transition`]: depth !== undefined
      }],
      style: [this.cssVars, this.mergedStyle]
    }), component ? h(component) : this.$slots);
  }
});

export { NIcon, iconProps, self };
//# sourceMappingURL=Icon.RqG6TsQp1767105581793.js.map
