import { importShared } from './index.BxB45aCK1767105581793.js';
import { cB, c, cE, useConfig, createTheme, derived, rgba, toHslaString, hsva, hsv2hsl, toRgbaString, hsv2rgb, toHexaString, hsla, toHsvaString, hsl2hsv, hsl2rgb, rgb2hsv, rgb2hsl, createInjectionKey, toHexString, toHslString, toRgbString, toHsvString, warn, cM, useTheme, createKey, useThemeClass, call } from './light.CLUJsvFB1767105581793.js';
import { on, off, useMergedState } from './use-merged-state.tu3_gbk31767105581793.js';
import { inputLight, NInput } from './Input.xoI_2nKL1767105581793.js';
import { useStyle } from './use-style.DNeB6HHX1767105581793.js';
import { fadeInScaleUpTransition } from './Card.CmCLdudX1767105581793.js';
import { Binder, VTarget, VFollower, useAdjustedTo } from './Popover.BPydV3cl1767105581793.js';
import { clickoutside } from './keep.JgtZum5h1767105581793.js';
import { useFormItem } from './Loading.DMQwrvK31767105581793.js';
import { useLocale } from './Suffix.BS0_grS71767105581793.js';
import { isMounted } from './use-rtl.Dso2-paz1767105581793.js';
import { getPreciseEventTarget } from './Scrollbar.COIrvx-21767105581793.js';
import { buttonLight, Button } from './Button.CtEklqVH1767105581793.js';

const style$1 = cB('input-group', `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [c('>', [cB('input', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), c('&:not(:first-child)', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), cB('button', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [cE('state-border, border', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), c('&:not(:first-child)', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [cE('state-border, border', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), c('*', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [c('>', [cB('input', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB('base-selection', [cB('base-selection-label', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB('base-selection-tags', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cE('box-shadow, border, state-border', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), c('&:not(:first-child)', `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [c('>', [cB('input', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB('base-selection', [cB('base-selection-label', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB('base-selection-tags', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cE('box-shadow, border, state-border', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);

const {defineComponent: defineComponent$9,h: h$9} = await importShared('vue');
const inputGroupProps = {};
const NInputGroup = defineComponent$9({
  name: 'InputGroup',
  props: inputGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useStyle('-input-group', style$1, mergedClsPrefixRef);
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h$9("div", {
      class: `${mergedClsPrefix}-input-group`
    }, this.$slots);
  }
});

function self(vars) {
  const {
    fontSize,
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    borderColor,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  } = vars;
  return {
    panelFontSize: fontSize,
    boxShadow: boxShadow2,
    color: popoverColor,
    textColor: textColor2,
    borderRadius,
    border: `1px solid ${borderColor}`,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  };
}
const colorPickerLight = createTheme({
  name: 'ColorPicker',
  common: derived,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self
});

function deriveDefaultValue(modes, showAlpha) {
  const mode = modes[0];
  switch (mode) {
    case "hex":
      return showAlpha ? "#000000FF" : "#000000";
    case "rgb":
      return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  return "#000000";
}
function getModeFromValue(color) {
  if (color === null) return null;
  if (/^ *#/.test(color)) return "hex";
  if (color.includes("rgb")) return "rgb";
  if (color.includes("hsl")) return "hsl";
  if (color.includes("hsv")) return "hsv";
  return null;
}
function getWCAGContrast(hsla2, contrastColor = [255, 255, 255], level = "AA") {
  const [r, g, b, a] = rgba(toHslaString(hsla2));
  if (a === 1) {
    const luminance1 = rgb2luminance([r, g, b]);
    const luminance2 = rgb2luminance(contrastColor);
    const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return contrast >= (level === "AA" ? 4.5 : 7);
  }
  const blendedR = Math.round(r * a + contrastColor[0] * (1 - a));
  const blendedG = Math.round(g * a + contrastColor[1] * (1 - a));
  const blendedB = Math.round(b * a + contrastColor[2] * (1 - a));
  const luminanceBlended = rgb2luminance([blendedR, blendedG, blendedB]);
  const luminanceWhite = rgb2luminance(contrastColor);
  const contrastBlended = (Math.max(luminanceBlended, luminanceWhite) + 0.05) / (Math.min(luminanceBlended, luminanceWhite) + 0.05);
  return contrastBlended >= (level === "AA" ? 4.5 : 7);
}
function rgb2luminance(rgb) {
  const [cr, cg, cb] = rgb.map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * cr + 0.7152 * cg + 0.0722 * cb;
}
function normalizeHue(hue) {
  hue = Math.round(hue);
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
function normalizeAlpha(alpha) {
  alpha = Math.round(alpha * 100) / 100;
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
  rgb: {
    hex(value) {
      return toHexaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hex: {
    rgb(value) {
      return toRgbaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b, a] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b), a]);
    },
    hsv(value) {
      const [r, g, b, a] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b), a]);
    }
  },
  hsl: {
    hex(value) {
      const [h, s, l, a] = hsla(value);
      return toHexaString([...hsl2rgb(h, s, l), a]);
    },
    rgb(value) {
      const [h, s, l, a] = hsla(value);
      return toRgbaString([...hsl2rgb(h, s, l), a]);
    },
    hsv(value) {
      const [h, s, l, a] = hsla(value);
      return toHsvaString([...hsl2hsv(h, s, l), a]);
    }
  },
  hsv: {
    hex(value) {
      const [h, s, v, a] = hsva(value);
      return toHexaString([...hsv2rgb(h, s, v), a]);
    },
    rgb(value) {
      const [h, s, v, a] = hsva(value);
      return toRgbaString([...hsv2rgb(h, s, v), a]);
    },
    hsl(value) {
      const [h, s, v, a] = hsva(value);
      return toHslaString([...hsv2hsl(h, s, v), a]);
    }
  }
};
function convertColor(value, mode, originalMode) {
  originalMode = originalMode || getModeFromValue(value);
  if (!originalMode) return null;
  if (originalMode === mode) return value;
  const conversions = convert[originalMode];
  return conversions[mode](value);
}

const {computed: computed$3,defineComponent: defineComponent$8,h: h$8,ref: ref$4} = await importShared('vue');
const HANDLE_SIZE$2 = '12px';
const HANDLE_SIZE_NUM$1 = 12;
const RADIUS$2 = '6px';
const AlphaSlider = defineComponent$8({
  name: 'AlphaSlider',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref$4(null);
    function handleMouseDown(e) {
      if (!railRef.value || !props.rgba) return;
      on('mousemove', document, handleMouseMove);
      on('mouseup', document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newAlpha = (e.clientX - left) / (width - HANDLE_SIZE_NUM$1);
      props.onUpdateAlpha(normalizeAlpha(newAlpha));
    }
    function handleMouseUp() {
      var _a;
      off('mousemove', document, handleMouseMove);
      off('mouseup', document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      railBackgroundImage: computed$3(() => {
        const {
          rgba
        } = props;
        if (!rgba) return '';
        return `linear-gradient(to right, rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0) 0%, rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1) 100%)`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$8("div", {
      class: `${clsPrefix}-color-picker-slider`,
      ref: "railRef",
      style: {
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2
      },
      onMousedown: this.handleMouseDown
    }, h$8("div", {
      style: {
        borderRadius: RADIUS$2,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden'
      }
    }, h$8("div", {
      class: `${clsPrefix}-color-picker-checkboard`
    }), h$8("div", {
      class: `${clsPrefix}-color-picker-slider__image`,
      style: {
        backgroundImage: this.railBackgroundImage
      }
    })), this.rgba && h$8("div", {
      style: {
        position: 'absolute',
        left: RADIUS$2,
        right: RADIUS$2,
        top: 0,
        bottom: 0
      }
    }, h$8("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc(${this.alpha * 100}% - ${RADIUS$2})`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }, h$8("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: toRgbaString(this.rgba),
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }))));
  }
});

const colorPickerInjectionKey = createInjectionKey('n-color-picker');

const {defineComponent: defineComponent$7,h: h$7,inject: inject$1,ref: ref$3,watchEffect: watchEffect$1} = await importShared('vue');
// 0 - 255
function normalizeRgbUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 255));
  }
  return false;
}
// 0 - 360
function normalizeHueUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 360));
  }
  return false;
}
// 0 - 100
function normalizeSlvUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value), 100));
  }
  return false;
}
function normalizeHexaUnit(value) {
  const trimmedValue = value.trim();
  if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
    return [4, 5, 7, 9].includes(trimmedValue.length);
  }
  return false;
}
// 0 - 100%
function normalizeAlphaUnit(value) {
  if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
    return Math.max(0, Math.min(Number.parseInt(value) / 100, 100));
  }
  return false;
}
const inputThemeOverrides = {
  paddingSmall: '0 4px'
};
const ColorInputUnit = defineComponent$7({
  name: 'ColorInputUnit',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const inputValueRef = ref$3('');
    const {
      themeRef
    } = inject$1(colorPickerInjectionKey, null);
    watchEffect$1(() => {
      inputValueRef.value = getInputString();
    });
    function getInputString() {
      const {
        value
      } = props;
      if (value === null) return '';
      const {
        label
      } = props;
      if (label === 'HEX') {
        return value;
      }
      if (label === 'A') {
        return `${Math.floor(value * 100)}%`;
      }
      return String(Math.floor(value));
    }
    function handleInputUpdateValue(value) {
      inputValueRef.value = value;
    }
    function handleInputChange(value) {
      let unit;
      let valid;
      switch (props.label) {
        case 'HEX':
          valid = normalizeHexaUnit(value);
          if (valid) {
            props.onUpdateValue(value);
          }
          inputValueRef.value = getInputString(); // to normalized new value
          break;
        case 'H':
          unit = normalizeHueUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case 'S':
        case 'L':
        case 'V':
          unit = normalizeSlvUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case 'A':
          unit = normalizeAlphaUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case 'R':
        case 'G':
        case 'B':
          unit = normalizeRgbUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
      }
    }
    return {
      mergedTheme: themeRef,
      inputValue: inputValueRef,
      handleInputChange,
      handleInputUpdateValue
    };
  },
  render() {
    const {
      mergedTheme
    } = this;
    return h$7(NInput, {
      size: "small",
      placeholder: this.label,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: inputThemeOverrides,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === 'A' ? 'flex-grow: 1.25;' : ''
    });
  }
});

const {defineComponent: defineComponent$6,h: h$6} = await importShared('vue');
const ColorInput = defineComponent$6({
  name: 'ColorInput',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    modes: {
      type: Array,
      required: true
    },
    showAlpha: {
      type: Boolean,
      required: true
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: true
    },
    onUpdateMode: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return {
      handleUnitUpdateValue(index, value) {
        const {
          showAlpha
        } = props;
        if (props.mode === 'hex') {
          props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
          return;
        }
        let nextValueArr;
        if (props.valueArr === null) {
          nextValueArr = [0, 0, 0, 0];
        } else {
          nextValueArr = Array.from(props.valueArr);
        }
        switch (props.mode) {
          case 'hsv':
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
            break;
          case 'rgb':
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
            break;
          case 'hsl':
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
            break;
        }
      }
    };
  },
  render() {
    const {
      clsPrefix,
      modes
    } = this;
    return h$6("div", {
      class: `${clsPrefix}-color-picker-input`
    }, h$6("div", {
      class: `${clsPrefix}-color-picker-input__mode`,
      onClick: this.onUpdateMode,
      style: {
        cursor: modes.length === 1 ? '' : 'pointer'
      }
    }, this.mode.toUpperCase() + (this.showAlpha ? 'A' : '')), h$6(NInputGroup, null, {
      default: () => {
        const {
          mode,
          valueArr,
          showAlpha
        } = this;
        if (mode === 'hex') {
          // hex and rgba shares the same value arr
          let hexValue = null;
          try {
            hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
          } catch (_a) {}
          return h$6(ColorInputUnit, {
            label: "HEX",
            showAlpha: showAlpha,
            value: hexValue,
            onUpdateValue: unitValue => {
              this.handleUnitUpdateValue(0, unitValue);
            }
          });
        }
        return (mode + (showAlpha ? 'a' : '')).split('').map((v, i) => h$6(ColorInputUnit, {
          label: v.toUpperCase(),
          value: valueArr === null ? null : valueArr[i],
          onUpdateValue: unitValue => {
            this.handleUnitUpdateValue(i, unitValue);
          }
        }));
      }
    }));
  }
});

const {computed: computed$2,defineComponent: defineComponent$5,h: h$5} = await importShared('vue');
// Try to normalize the color values to ensure that they are valid CSS colors
function normalizeColor(color, mode) {
  if (mode === 'hsv') {
    const [h, s, v, a] = hsva(color);
    return toRgbaString([...hsv2rgb(h, s, v), a]);
  }
  // For the mode that is not in preset, we keep the original value.
  // For color names, they are legal to CSS, so we don’t deal with them,
  // and only standardize them when outputting.
  return color;
}
function getHexFromName(color) {
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx) {
    return '#000000';
  }
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
const ColorPickerSwatches = defineComponent$5({
  name: 'ColorPickerSwatches',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    swatches: {
      type: Array,
      required: true
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const parsedSwatchesRef = computed$2(() => props.swatches.map(value => {
      const mode = getModeFromValue(value);
      return {
        value,
        mode,
        legalValue: normalizeColor(value, mode)
      };
    }));
    function normalizeOutput(parsed) {
      const {
        mode: modeProp
      } = props;
      let {
        value,
        mode: swatchColorMode
      } = parsed;
      // color name is converted to hex
      if (!swatchColorMode) {
        swatchColorMode = 'hex';
        if (/^[a-zA-Z]+$/.test(value)) {
          value = getHexFromName(value);
        } else {
          // for invalid color, we make it black
          warn('color-picker', `color ${value} in swatches is invalid.`);
          value = '#000000';
        }
      }
      if (swatchColorMode === modeProp) return value;
      // swatch value to current mode value
      return convertColor(value, modeProp, swatchColorMode);
    }
    function handleSwatchSelect(parsed) {
      props.onUpdateColor(normalizeOutput(parsed));
    }
    function handleSwatchKeyDown(e, parsed) {
      if (e.key === 'Enter') handleSwatchSelect(parsed);
    }
    return {
      parsedSwatchesRef,
      handleSwatchSelect,
      handleSwatchKeyDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$5("div", {
      class: `${clsPrefix}-color-picker-swatches`
    }, this.parsedSwatchesRef.map(swatch => h$5("div", {
      class: `${clsPrefix}-color-picker-swatch`,
      tabindex: 0,
      onClick: () => {
        this.handleSwatchSelect(swatch);
      },
      onKeydown: e => {
        this.handleSwatchKeyDown(e, swatch);
      }
    }, h$5("div", {
      class: `${clsPrefix}-color-picker-swatch__fill`,
      style: {
        background: swatch.legalValue
      }
    }))));
  }
});

const {defineComponent: defineComponent$4,h: h$4,inject} = await importShared('vue');
const ColorPickerTrigger = defineComponent$4({
  name: 'ColorPickerTrigger',
  slots: Object,
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(props) {
    const {
      colorPickerSlots,
      renderLabelRef
    } = inject(colorPickerInjectionKey, null);
    return () => {
      const {
        hsla,
        value,
        clsPrefix,
        onClick,
        disabled
      } = props;
      const renderLabel = colorPickerSlots.label || renderLabelRef.value;
      return h$4("div", {
        class: [`${clsPrefix}-color-picker-trigger`, disabled && `${clsPrefix}-color-picker-trigger--disabled`],
        onClick: disabled ? undefined : onClick
      }, h$4("div", {
        class: `${clsPrefix}-color-picker-trigger__fill`
      }, h$4("div", {
        class: `${clsPrefix}-color-picker-checkboard`
      }), h$4("div", {
        style: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: hsla ? toHslaString(hsla) : ''
        }
      }), value && hsla ? h$4("div", {
        class: `${clsPrefix}-color-picker-trigger__value`,
        style: {
          color: getWCAGContrast(hsla) ? 'white' : 'black'
        }
      }, renderLabel ? renderLabel(value) : value) : null));
    };
  }
});

const {defineComponent: defineComponent$3,h: h$3} = await importShared('vue');
const ColorPreview = defineComponent$3({
  name: 'ColorPreview',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator: value => {
        const mode = getModeFromValue(value);
        return Boolean(!value || mode && mode !== 'hsv');
      }
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    function handleChange(e) {
      var _a;
      // hex
      const value = e.target.value;
      (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, 'hex'));
      e.stopPropagation();
    }
    return {
      handleChange
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$3("div", {
      class: `${clsPrefix}-color-picker-preview__preview`
    }, h$3("span", {
      class: `${clsPrefix}-color-picker-preview__fill`,
      style: {
        background: this.color || '#000000'
      }
    }), h$3("input", {
      class: `${clsPrefix}-color-picker-preview__input`,
      type: "color",
      value: this.color,
      onChange: this.handleChange
    }));
  }
});

const {defineComponent: defineComponent$2,h: h$2,ref: ref$2} = await importShared('vue');
const HANDLE_SIZE$1 = '12px';
const HANDLE_SIZE_NUM = 12;
const RADIUS$1 = '6px';
const RADIUS_NUM = 6;
const GRADIENT = 'linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)';
const HueSlider = defineComponent$2({
  name: 'HueSlider',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    hue: {
      type: Number,
      required: true
    },
    onUpdateHue: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref$2(null);
    function handleMouseDown(e) {
      if (!railRef.value) return;
      on('mousemove', document, handleMouseMove);
      on('mouseup', document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: railEl
      } = railRef;
      if (!railEl) return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newHue = normalizeHue((e.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM) * 360);
      props.onUpdateHue(newHue);
    }
    function handleMouseUp() {
      var _a;
      off('mousemove', document, handleMouseMove);
      off('mouseup', document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$2("div", {
      class: `${clsPrefix}-color-picker-slider`,
      style: {
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1
      }
    }, h$2("div", {
      ref: "railRef",
      style: {
        boxShadow: 'inset 0 0 2px 0 rgba(0, 0, 0, .24)',
        boxSizing: 'border-box',
        backgroundImage: GRADIENT,
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1,
        position: 'relative'
      },
      onMousedown: this.handleMouseDown
    }, h$2("div", {
      style: {
        position: 'absolute',
        left: RADIUS$1,
        right: RADIUS$1,
        top: 0,
        bottom: 0
      }
    }, h$2("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$1})`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }, h$2("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    })))));
  }
});

const {computed: computed$1,defineComponent: defineComponent$1,h: h$1,ref: ref$1} = await importShared('vue');

const HANDLE_SIZE = '12px';
const RADIUS = '6px';
const Pallete = defineComponent$1({
  name: 'Pallete',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: true
    },
    displayedSv: {
      type: Array,
      required: true
    },
    onUpdateSV: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const palleteRef = ref$1(null);
    function handleMouseDown(e) {
      if (!palleteRef.value) return;
      on('mousemove', document, handleMouseMove);
      on('mouseup', document, handleMouseUp);
      handleMouseMove(e);
    }
    function handleMouseMove(e) {
      const {
        value: palleteEl
      } = palleteRef;
      if (!palleteEl) return;
      const {
        width,
        height,
        left,
        bottom
      } = palleteEl.getBoundingClientRect();
      const newV = (bottom - e.clientY) / height;
      const newS = (e.clientX - left) / width;
      const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
      const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
      props.onUpdateSV(normalizedNewS, normalizedNewV);
    }
    function handleMouseUp() {
      var _a;
      off('mousemove', document, handleMouseMove);
      off('mouseup', document, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      palleteRef,
      handleColor: computed$1(() => {
        const {
          rgba
        } = props;
        if (!rgba) return '';
        return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h$1("div", {
      class: `${clsPrefix}-color-picker-pallete`,
      onMousedown: this.handleMouseDown,
      ref: "palleteRef"
    }, h$1("div", {
      class: `${clsPrefix}-color-picker-pallete__layer`,
      style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      }
    }), h$1("div", {
      class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
      style: {
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))'
      }
    }), this.rgba && h$1("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        width: HANDLE_SIZE,
        height: HANDLE_SIZE,
        borderRadius: RADIUS,
        left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
        bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
      }
    }, h$1("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: this.handleColor,
        borderRadius: RADIUS,
        width: HANDLE_SIZE,
        height: HANDLE_SIZE
      }
    })));
  }
});

// vars:
// --n-color
// --n-text-color
// --n-border-radius
// --n-panel-font-size
// --n-font-size
// --n-bezier
// --n-height
// --n-box-shadow
// --n-divider-color
const style = c([cB('color-picker', `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), cB('color-picker-panel', `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB('input', `
 text-align: center;
 `)]), cB('color-picker-checkboard', `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c('&::after', `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB('color-picker-slider', `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE('image', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c('&::after', `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB('color-picker-handle', `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE('fill', `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB('color-picker-pallete', `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE('layer', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM('shadowed', `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB('color-picker-preview', `
 display: flex;
 `, [cE('sliders', `
 flex: 1 0 auto;
 `), cE('preview', `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE('fill', `
 display: block;
 width: 30px;
 height: 30px;
 `), cE('input', `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB('color-picker-input', `
 display: flex;
 align-items: center;
 `, [cB('input', `
 flex-grow: 1;
 flex-basis: 0;
 `), cE('mode', `
 width: 72px;
 text-align: center;
 `)]), cB('color-picker-control', `
 padding: 12px;
 `), cB('color-picker-action', `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB('button', 'margin-left: 8px;')]), cB('color-picker-trigger', `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [cE('value', `
 white-space: nowrap;
 position: relative;
 `), cE('fill', `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cM('disabled', 'cursor: not-allowed'), cB('color-picker-checkboard', `
 border-radius: var(--n-border-radius);
 `, [c('&::after', `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB('color-picker-swatches', `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB('color-picker-swatch', `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE('fill', `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c('&:focus', `
 outline: none;
 `, [cE('fill', [c('&::after', `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);

const {computed,defineComponent,h,nextTick,provide,ref,toRef,Transition,watch,watchEffect,withDirectives} = await importShared('vue');
const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  show: {
    type: Boolean,
    default: undefined
  },
  defaultShow: Boolean,
  defaultValue: String,
  modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ['rgb', 'hex', 'hsl']
  },
  placement: {
    type: String,
    default: 'bottom-start'
  },
  to: useAdjustedTo.propTo,
  showAlpha: {
    type: Boolean,
    default: true
  },
  showPreview: Boolean,
  swatches: Array,
  disabled: {
    type: Boolean,
    default: undefined
  },
  actions: {
    type: Array,
    default: null
  },
  internalActions: Array,
  size: String,
  renderLabel: Function,
  onComplete: Function,
  onConfirm: Function,
  onClear: Function,
  'onUpdate:show': [Function, Array],
  onUpdateShow: [Function, Array],
  'onUpdate:value': [Function, Array],
  onUpdateValue: [Function, Array]
});
const NColorPicker = defineComponent({
  name: 'ColorPicker',
  props: colorPickerProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const selfRef = ref(null);
    let upcomingValue = null;
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const {
      localeRef
    } = useLocale('global');
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('ColorPicker', '-color-picker', style, colorPickerLight, props, mergedClsPrefixRef);
    provide(colorPickerInjectionKey, {
      themeRef,
      renderLabelRef: toRef(props, 'renderLabel'),
      colorPickerSlots: slots
    });
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowRef = useMergedState(toRef(props, 'show'), uncontrolledShowRef);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        'onUpdate:show': _onUpdateShow
      } = props;
      if (onUpdateShow) call(onUpdateShow, value);
      if (_onUpdateShow) call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    const {
      defaultValue
    } = props;
    const uncontrolledValueRef = ref(defaultValue === undefined ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
    const mergedValueRef = useMergedState(toRef(props, 'value'), uncontrolledValueRef);
    const undoStackRef = ref([mergedValueRef.value]);
    const valueIndexRef = ref(0);
    const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
    const {
      modes
    } = props;
    const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || 'rgb');
    function handleUpdateDisplayedMode() {
      const {
        modes
      } = props;
      const {
        value: displayedMode
      } = displayedModeRef;
      const currentModeIndex = modes.findIndex(mode => mode === displayedMode);
      if (~currentModeIndex) {
        displayedModeRef.value = modes[(currentModeIndex + 1) % modes.length];
      } else {
        displayedModeRef.value = 'rgb';
      }
    }
    let _h,
      // avoid conflict with render function's h
      s, l, v, r, g, b, a;
    const hsvaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case 'hsv':
          return hsva(mergedValue);
        case 'hsl':
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2hsv(_h, s, l), a];
        case 'rgb':
        case 'hex':
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsv(r, g, b), a];
      }
    });
    const rgbaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case 'rgb':
        case 'hex':
          return rgba(mergedValue);
        case 'hsv':
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2rgb(_h, s, v), a];
        case 'hsl':
          [_h, s, l, a] = hsla(mergedValue);
          return [...hsl2rgb(_h, s, l), a];
      }
    });
    const hslaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue) return null;
      switch (valueModeRef.value) {
        case 'hsl':
          return hsla(mergedValue);
        case 'hsv':
          [_h, s, v, a] = hsva(mergedValue);
          return [...hsv2hsl(_h, s, v), a];
        case 'rgb':
        case 'hex':
          [r, g, b, a] = rgba(mergedValue);
          return [...rgb2hsl(r, g, b), a];
      }
    });
    const mergedValueArrRef = computed(() => {
      switch (displayedModeRef.value) {
        case 'rgb':
        case 'hex':
          return rgbaRef.value;
        case 'hsv':
          return hsvaRef.value;
        case 'hsl':
          return hslaRef.value;
      }
    });
    const displayedHueRef = ref(0);
    const displayedAlphaRef = ref(1);
    const displayedSvRef = ref([0, 0]);
    function handleUpdateSv(s, v) {
      const {
        value: hsvaArr
      } = hsvaRef;
      const hue = displayedHueRef.value;
      const alpha = hsvaArr ? hsvaArr[3] : 1;
      displayedSvRef.value = [s, v];
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case 'hsv':
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s, v, alpha]), 'cursor');
          break;
        case 'hsl':
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s, v), alpha]), 'cursor');
          break;
        case 'rgb':
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s, v), alpha]), 'cursor');
          break;
        case 'hex':
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s, v), alpha]), 'cursor');
          break;
      }
    }
    function handleUpdateHue(hue) {
      displayedHueRef.value = hue;
      const {
        value: hsvaArr
      } = hsvaRef;
      if (!hsvaArr) {
        return;
      }
      const [, s, v, a] = hsvaArr;
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case 'hsv':
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s, v, a]), 'cursor');
          break;
        case 'rgb':
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s, v), a]), 'cursor');
          break;
        case 'hex':
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s, v), a]), 'cursor');
          break;
        case 'hsl':
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s, v), a]), 'cursor');
          break;
      }
    }
    function handleUpdateAlpha(alpha) {
      switch (displayedModeRef.value) {
        case 'hsv':
          [_h, s, v] = hsvaRef.value;
          doUpdateValue(toHsvaString([_h, s, v, alpha]), 'cursor');
          break;
        case 'rgb':
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toRgbaString([r, g, b, alpha]), 'cursor');
          break;
        case 'hex':
          [r, g, b] = rgbaRef.value;
          doUpdateValue(toHexaString([r, g, b, alpha]), 'cursor');
          break;
        case 'hsl':
          [_h, s, l] = hslaRef.value;
          doUpdateValue(toHslaString([_h, s, l, alpha]), 'cursor');
          break;
      }
      displayedAlphaRef.value = alpha;
    }
    function doUpdateValue(value, updateSource) {
      if (updateSource === 'cursor') {
        upcomingValue = value;
      } else {
        upcomingValue = null;
      }
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const {
        onUpdateValue,
        'onUpdate:value': _onUpdateValue
      } = props;
      if (onUpdateValue) call(onUpdateValue, value);
      if (_onUpdateValue) call(_onUpdateValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
      uncontrolledValueRef.value = value;
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value, 'input');
      void nextTick(handleComplete);
    }
    function handleComplete(pushStack = true) {
      const {
        value
      } = mergedValueRef;
      // no value & only hue changes will complete with no value
      if (value) {
        const {
          nTriggerFormChange,
          nTriggerFormInput
        } = formItem;
        const {
          onComplete
        } = props;
        if (onComplete) {
          onComplete(value);
        }
        const {
          value: undoStack
        } = undoStackRef;
        const {
          value: valueIndex
        } = valueIndexRef;
        if (pushStack) {
          undoStack.splice(valueIndex + 1, undoStack.length, value);
          valueIndexRef.value = valueIndex + 1;
        }
        nTriggerFormChange();
        nTriggerFormInput();
      }
    }
    function undo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex - 1 < 0) return;
      doUpdateValue(undoStackRef.value[valueIndex - 1], 'input');
      handleComplete(false);
      valueIndexRef.value = valueIndex - 1;
    }
    function redo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length) return;
      doUpdateValue(undoStackRef.value[valueIndex + 1], 'input');
      handleComplete(false);
      valueIndexRef.value = valueIndex + 1;
    }
    function handleClear() {
      doUpdateValue(null, 'input');
      const {
        onClear
      } = props;
      if (onClear) {
        onClear();
      }
      doUpdateShow(false);
    }
    function handleConfirm() {
      const {
        value
      } = mergedValueRef;
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        onConfirm(value);
      }
      doUpdateShow(false);
    }
    const undoableRef = computed(() => valueIndexRef.value >= 1);
    const redoableRef = computed(() => {
      const {
        value: undoStack
      } = undoStackRef;
      return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
    });
    watch(mergedShowRef, value => {
      if (!value) {
        undoStackRef.value = [mergedValueRef.value];
        valueIndexRef.value = 0;
      }
    });
    watchEffect(() => {
      if (upcomingValue && upcomingValue === mergedValueRef.value) ; else {
        const {
          value
        } = hsvaRef;
        if (value) {
          displayedHueRef.value = value[0];
          displayedAlphaRef.value = value[3];
          displayedSvRef.value = [value[1], value[2]];
        }
      }
      upcomingValue = null;
    });
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          textColor,
          color,
          panelFontSize,
          boxShadow,
          border,
          borderRadius,
          dividerColor,
          [createKey('height', mergedSize)]: height,
          [createKey('fontSize', mergedSize)]: fontSize
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-text-color': textColor,
        '--n-color': color,
        '--n-panel-font-size': panelFontSize,
        '--n-font-size': fontSize,
        '--n-box-shadow': boxShadow,
        '--n-border': border,
        '--n-border-radius': borderRadius,
        '--n-height': height,
        '--n-divider-color': dividerColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('color-picker', computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : undefined;
    function renderPanel() {
      var _a;
      const {
        value: rgba
      } = rgbaRef;
      const {
        value: displayedHue
      } = displayedHueRef;
      const {
        internalActions,
        modes,
        actions
      } = props;
      const {
        value: mergedTheme
      } = themeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
        onDragstart: e => {
          e.preventDefault();
        },
        style: inlineThemeDisabled ? undefined : cssVarsRef.value
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-control`
      }, h(Pallete, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba,
        displayedHue: displayedHue,
        displayedSv: displayedSvRef.value,
        onUpdateSV: handleUpdateSv,
        onComplete: handleComplete
      }), h("div", {
        class: `${mergedClsPrefix}-color-picker-preview`
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-preview__sliders`
      }, h(HueSlider, {
        clsPrefix: mergedClsPrefix,
        hue: displayedHue,
        onUpdateHue: handleUpdateHue,
        onComplete: handleComplete
      }), props.showAlpha ? h(AlphaSlider, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba,
        alpha: displayedAlphaRef.value,
        onUpdateAlpha: handleUpdateAlpha,
        onComplete: handleComplete
      }) : null), props.showPreview ? h(ColorPreview, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        color: rgbaRef.value && toHexString(rgbaRef.value),
        onUpdateColor: color => {
          doUpdateValue(color, 'input');
        }
      }) : null), h(ColorInput, {
        clsPrefix: mergedClsPrefix,
        showAlpha: props.showAlpha,
        mode: displayedModeRef.value,
        modes: modes,
        onUpdateMode: handleUpdateDisplayedMode,
        value: mergedValueRef.value,
        valueArr: mergedValueArrRef.value,
        onUpdateValue: handleInputUpdateValue
      }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        swatches: props.swatches,
        onUpdateColor: color => {
          doUpdateValue(color, 'input');
        }
      })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, actions.includes('confirm') && h(Button, {
        size: "small",
        onClick: handleConfirm,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.confirm
      }), actions.includes('clear') && h(Button, {
        size: "small",
        onClick: handleClear,
        disabled: !mergedValueRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.clear
      })) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, {
        default: slots.action
      }) : internalActions ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, internalActions.includes('undo') && h(Button, {
        size: "small",
        onClick: undo,
        disabled: !undoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.undo
      }), internalActions.includes('redo') && h(Button, {
        size: "small",
        onClick: redo,
        disabled: !redoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.redo
      })) : null);
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      selfRef,
      hsla: hslaRef,
      rgba: rgbaRef,
      mergedShow: mergedShowRef,
      mergedDisabled: mergedDisabledRef,
      isMounted: isMounted(),
      adjustedTo: useAdjustedTo(props),
      mergedValue: mergedValueRef,
      handleTriggerClick() {
        doUpdateShow(true);
      },
      handleClickOutside(e) {
        var _a;
        if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
          return;
        }
        doUpdateShow(false);
      },
      renderPanel,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
      ref: "selfRef",
      style: this.cssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(ColorPickerTrigger, {
          clsPrefix: mergedClsPrefix,
          value: this.mergedValue,
          hsla: this.hsla,
          disabled: this.mergedDisabled,
          onClick: this.handleTriggerClick
        })
      }), h(VFollower, {
        placement: this.placement,
        show: this.mergedShow,
        containerClass: this.namespace,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, undefined, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});

export { NColorPicker, NInputGroup, colorPickerProps, inputGroupProps, self };
//# sourceMappingURL=ColorPicker.BINzuU6U1767105581793.js.map
