import { importShared } from './index.BxB45aCK1767105581793.js';
import { derived, composite, c, cB, insideModal, insidePopover, cNotM, cM, cE, useConfig, useTheme, createKey, useThemeClass, createInjectionKey, throwError } from './light.CLUJsvFB1767105581793.js';
import { flatten, repeat } from './Scrollbar.COIrvx-21767105581793.js';
import { getSlot } from './Space.Beq0ttmt1767105581793.js';
import { useCompitable } from './use-compitable.CyXVIY_Z1767105581793.js';
import { useRtl } from './use-rtl.Dso2-paz1767105581793.js';

function getVNodeChildren(vNode, slotName = 'default', fallback = []) {
  const {
    children
  } = vNode;
  if (children !== null && typeof children === 'object' && !Array.isArray(children)) {
    const slot = children[slotName];
    if (typeof slot === 'function') {
      return slot();
    }
  }
  return fallback;
}

const commonVariables = {
  thPaddingBorderedSmall: '8px 12px',
  thPaddingBorderedMedium: '12px 16px',
  thPaddingBorderedLarge: '16px 24px',
  thPaddingSmall: '0',
  thPaddingMedium: '0',
  thPaddingLarge: '0',
  tdPaddingBorderedSmall: '8px 12px',
  tdPaddingBorderedMedium: '12px 16px',
  tdPaddingBorderedLarge: '16px 24px',
  tdPaddingSmall: '0 0 8px 0',
  tdPaddingMedium: '0 0 12px 0',
  tdPaddingLarge: '0 0 16px 0'
};

function self$2(vars) {
  const {
    tableHeaderColor,
    textColor2,
    textColor1,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    titleTextColor: textColor1,
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    tdTextColor: textColor2,
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius
  });
}
const descriptionsLight = {
  common: derived,
  self: self$2
};

// vars:
// --n-th-padding
// --n-td-padding
// --n-font-size
// --n-bezier
// --n-th-font-weight
// --n-line-height
// --n-th-text-color
// --n-td-text-color
// --n-th-color
// --n-th-color-modal
// --n-th-color-popover
// --n-td-color
// --n-td-color-modal
// --n-td-color-popover
// --n-border-radius
// --n-border-color
// --n-border-color-modal
// --n-border-color-popover
// --n-title-text-color
const style$2 = c([cB('descriptions', {
  fontSize: 'var(--n-font-size)'
}, [cB('descriptions-separator', `
 display: inline-block;
 margin: 0 8px 0 2px;
 `), cB('descriptions-table-wrapper', [cB('descriptions-table', [cB('descriptions-table-row', [cB('descriptions-table-header', {
  padding: 'var(--n-th-padding)'
}), cB('descriptions-table-content', {
  padding: 'var(--n-td-padding)'
})])])]), cNotM('bordered', [cB('descriptions-table-wrapper', [cB('descriptions-table', [cB('descriptions-table-row', [c('&:last-child', [cB('descriptions-table-content', {
  paddingBottom: 0
})])])])])]), cM('left-label-placement', [cB('descriptions-table-content', [c('> *', {
  verticalAlign: 'top'
})])]), cM('left-label-align', [c('th', {
  textAlign: 'left'
})]), cM('center-label-align', [c('th', {
  textAlign: 'center'
})]), cM('right-label-align', [c('th', {
  textAlign: 'right'
})]), cM('bordered', [cB('descriptions-table-wrapper', `
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `, [cB('descriptions-table', [cB('descriptions-table-row', [c('&:not(:last-child)', [cB('descriptions-table-content', {
  borderBottom: '1px solid var(--n-merged-border-color)'
}), cB('descriptions-table-header', {
  borderBottom: '1px solid var(--n-merged-border-color)'
})]), cB('descriptions-table-header', `
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `, [c('&:not(:last-child)', {
  borderRight: '1px solid var(--n-merged-border-color)'
})]), cB('descriptions-table-content', [c('&:not(:last-child)', {
  borderRight: '1px solid var(--n-merged-border-color)'
})])])])])]), cB('descriptions-header', `
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `), cB('descriptions-table-wrapper', `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cB('descriptions-table', `
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `, [cB('descriptions-table-row', `
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [cB('descriptions-table-header', `
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cB('descriptions-table-content', `
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE('content', `
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]), cE('label', `
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]), cB('descriptions-table-wrapper', `
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `), insideModal(cB('descriptions-table-wrapper', `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB('descriptions-table-wrapper', `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);

const DESCRIPTION_ITEM_FLAG = 'DESCRIPTION_ITEM_FLAG';
function isDescriptionsItem(vNode) {
  if (typeof vNode === 'object' && vNode && !Array.isArray(vNode)) {
    return vNode.type && vNode.type[DESCRIPTION_ITEM_FLAG];
  }
  return false;
}

const {computed: computed$2,defineComponent: defineComponent$4,h: h$3} = await importShared('vue');
const descriptionsProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  column: {
    type: Number,
    default: 3
  },
  columns: Number,
  labelPlacement: {
    type: String,
    default: "top"
  },
  labelAlign: {
    type: String,
    default: "left"
  },
  separator: {
    type: String,
    default: ":"
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: Boolean,
  labelClass: String,
  labelStyle: [Object, String],
  contentClass: String,
  contentStyle: [Object, String]
});
const NDescriptions = defineComponent$4({
  name: "Descriptions",
  props: descriptionsProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Descriptions", "-descriptions", style$2, descriptionsLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$2(() => {
      const {
        size,
        bordered
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          titleTextColor,
          thColor,
          thColorModal,
          thColorPopover,
          thTextColor,
          thFontWeight,
          tdTextColor,
          tdColor,
          tdColorModal,
          tdColorPopover,
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          lineHeight,
          [createKey("fontSize", size)]: fontSize,
          [createKey(bordered ? "thPaddingBordered" : "thPadding", size)]: thPadding,
          [createKey(bordered ? "tdPaddingBordered" : "tdPadding", size)]: tdPadding
        }
      } = themeRef.value;
      return {
        "--n-title-text-color": titleTextColor,
        "--n-th-padding": thPadding,
        "--n-td-padding": tdPadding,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-th-font-weight": thFontWeight,
        "--n-line-height": lineHeight,
        "--n-th-text-color": thTextColor,
        "--n-td-text-color": tdTextColor,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-border-radius": borderRadius,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("descriptions", computed$2(() => {
      let hash = "";
      const {
        size,
        bordered
      } = props;
      if (bordered) hash += "a";
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      compitableColumn: useCompitable(props, ["columns", "column"]),
      inlineThemeDisabled
    };
  },
  render() {
    const defaultSlots = this.$slots.default;
    const children = defaultSlots ? flatten(defaultSlots()) : [];
    children.length;
    const {
      contentClass,
      labelClass,
      compitableColumn,
      labelPlacement,
      labelAlign,
      size,
      bordered,
      title,
      cssVars,
      mergedClsPrefix,
      separator,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const filteredChildren = children.filter((child) => isDescriptionsItem(child));
    const defaultState = {
      span: 0,
      row: [],
      secondRow: [],
      rows: []
    };
    const itemState = filteredChildren.reduce((state, vNode, index) => {
      const props = vNode.props || {};
      const isLastIteration = filteredChildren.length - 1 === index;
      const itemLabel = ["label" in props ? props.label : getVNodeChildren(vNode, "label")];
      const itemChildren = [getVNodeChildren(vNode)];
      const itemSpan = props.span || 1;
      const memorizedSpan = state.span;
      state.span += itemSpan;
      const labelStyle = props.labelStyle || props["label-style"] || this.labelStyle;
      const contentStyle = props.contentStyle || props["content-style"] || this.contentStyle;
      if (labelPlacement === "left") {
        if (bordered) {
          state.row.push(h$3("th", {
            class: [`${mergedClsPrefix}-descriptions-table-header`, labelClass],
            colspan: 1,
            style: labelStyle
          }, itemLabel), h$3("td", {
            class: [`${mergedClsPrefix}-descriptions-table-content`, contentClass],
            colspan: isLastIteration ? (compitableColumn - memorizedSpan) * 2 + 1 : itemSpan * 2 - 1,
            style: contentStyle
          }, itemChildren));
        } else {
          state.row.push(h$3("td", {
            class: `${mergedClsPrefix}-descriptions-table-content`,
            colspan: isLastIteration ? (compitableColumn - memorizedSpan) * 2 : itemSpan * 2
          }, h$3("span", {
            class: [`${mergedClsPrefix}-descriptions-table-content__label`, labelClass],
            style: labelStyle
          }, [...itemLabel, separator && h$3("span", {
            class: `${mergedClsPrefix}-descriptions-separator`
          }, separator)]), h$3("span", {
            class: [`${mergedClsPrefix}-descriptions-table-content__content`, contentClass],
            style: contentStyle
          }, itemChildren)));
        }
      } else {
        const colspan = isLastIteration ? (compitableColumn - memorizedSpan) * 2 : itemSpan * 2;
        state.row.push(h$3("th", {
          class: [`${mergedClsPrefix}-descriptions-table-header`, labelClass],
          colspan,
          style: labelStyle
        }, itemLabel));
        state.secondRow.push(h$3("td", {
          class: [`${mergedClsPrefix}-descriptions-table-content`, contentClass],
          colspan,
          style: contentStyle
        }, itemChildren));
      }
      if (state.span >= compitableColumn || isLastIteration) {
        state.span = 0;
        if (state.row.length) {
          state.rows.push(state.row);
          state.row = [];
        }
        if (labelPlacement !== "left") {
          if (state.secondRow.length) {
            state.rows.push(state.secondRow);
            state.secondRow = [];
          }
        }
      }
      return state;
    }, defaultState);
    const rows = itemState.rows.map((row) => h$3("tr", {
      class: `${mergedClsPrefix}-descriptions-table-row`
    }, row));
    return h$3("div", {
      style: cssVars,
      class: [`${mergedClsPrefix}-descriptions`, this.themeClass, `${mergedClsPrefix}-descriptions--${labelPlacement}-label-placement`, `${mergedClsPrefix}-descriptions--${labelAlign}-label-align`, `${mergedClsPrefix}-descriptions--${size}-size`, bordered && `${mergedClsPrefix}-descriptions--bordered`]
    }, title || this.$slots.header ? h$3("div", {
      class: `${mergedClsPrefix}-descriptions-header`
    }, title || getSlot(this, "header")) : null, h$3("div", {
      class: `${mergedClsPrefix}-descriptions-table-wrapper`
    }, h$3("table", {
      class: `${mergedClsPrefix}-descriptions-table`
    }, h$3("tbody", null, labelPlacement === "top" && h$3("tr", {
      class: `${mergedClsPrefix}-descriptions-table-row`,
      style: {
        visibility: "collapse"
      }
    }, repeat(compitableColumn * 2, h$3("td", null))), rows))));
  }
});

const {defineComponent: defineComponent$3} = await importShared('vue');
const descriptionsItemProps = {
  label: String,
  span: {
    type: Number,
    default: 1
  },
  labelClass: String,
  labelStyle: [Object, String],
  contentClass: String,
  contentStyle: [Object, String]
};
const NDescriptionsItem = defineComponent$3({
  name: 'DescriptionsItem',
  [DESCRIPTION_ITEM_FLAG]: true,
  props: descriptionsItemProps,
  slots: Object,
  render() {
    return null;
  }
});

function self$1(vars) {
  const {
    textColor2,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontSize,
    hoverColor
  } = vars;
  return {
    textColor: textColor2,
    color: cardColor,
    colorHover: hoverColor,
    colorModal: modalColor,
    colorHoverModal: composite(modalColor, hoverColor),
    colorPopover: popoverColor,
    colorHoverPopover: composite(popoverColor, hoverColor),
    borderColor: dividerColor,
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius,
    fontSize
  };
}
const listLight = {
  common: derived,
  self: self$1
};

function self(vars) {
  const {
    textColor1,
    textColor2,
    fontWeightStrong,
    fontSize
  } = vars;
  return {
    fontSize,
    titleTextColor: textColor1,
    textColor: textColor2,
    titleFontWeight: fontWeightStrong
  };
}
const thingLight = {
  common: derived,
  self
};

// vars:
// --n-font-size
// --n-bezier
// --n-text-color
// --n-color
// --n-color-hover
// --n-border-radius
// --n-border-color
// --n-border-color-modal
// --n-border-color-popover
// --n-color-modal
// --n-color-popover
// --n-color-hover-modal
// --n-color-hover-popover
const style$1 = c([cB('list', `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [cM('show-divider', [cB('list-item', [c('&:not(:last-child)', [cE('divider', `
 background-color: var(--n-merged-border-color);
 `)])])]), cM('clickable', [cB('list-item', `
 cursor: pointer;
 `)]), cM('bordered', `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), cM('hoverable', [cB('list-item', `
 border-radius: var(--n-border-radius);
 `, [c('&:hover', `
 background-color: var(--n-merged-color-hover);
 `, [cE('divider', `
 background-color: transparent;
 `)])])]), cM('bordered, hoverable', [cB('list-item', `
 padding: 12px 20px;
 `), cE('header, footer', `
 padding: 12px 20px;
 `)]), cE('header, footer', `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [c('&:not(:last-child)', `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), cB('list-item', `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE('prefix', `
 margin-right: 20px;
 flex: 0;
 `), cE('suffix', `
 margin-left: 20px;
 flex: 0;
 `), cE('main', `
 flex: 1;
 `), cE('divider', `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), insideModal(cB('list', `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB('list', `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);

const {computed: computed$1,defineComponent: defineComponent$2,h: h$2,provide,toRef} = await importShared('vue');
const listProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: 'medium'
  },
  bordered: Boolean,
  clickable: Boolean,
  hoverable: Boolean,
  showDivider: {
    type: Boolean,
    default: true
  }
});
const listInjectionKey = createInjectionKey('n-list');
const NList = defineComponent$2({
  name: 'List',
  props: listProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const rtlEnabledRef = useRtl('List', mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme('List', '-list', style$1, listLight, props, mergedClsPrefixRef);
    provide(listInjectionKey, {
      showDividerRef: toRef(props, 'showDivider'),
      mergedClsPrefixRef
    });
    const cssVarsRef = computed$1(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          textColor,
          color,
          colorModal,
          colorPopover,
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          colorHover,
          colorHoverModal,
          colorHoverPopover
        }
      } = themeRef.value;
      return {
        '--n-font-size': fontSize,
        '--n-bezier': cubicBezierEaseInOut,
        '--n-text-color': textColor,
        '--n-color': color,
        '--n-border-radius': borderRadius,
        '--n-border-color': borderColor,
        '--n-border-color-modal': borderColorModal,
        '--n-border-color-popover': borderColorPopover,
        '--n-color-modal': colorModal,
        '--n-color-popover': colorPopover,
        '--n-color-hover': colorHover,
        '--n-color-hover-modal': colorHoverModal,
        '--n-color-hover-popover': colorHoverPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('list', undefined, cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h$2("ul", {
      class: [`${mergedClsPrefix}-list`, this.rtlEnabled && `${mergedClsPrefix}-list--rtl`, this.bordered && `${mergedClsPrefix}-list--bordered`, this.showDivider && `${mergedClsPrefix}-list--show-divider`, this.hoverable && `${mergedClsPrefix}-list--hoverable`, this.clickable && `${mergedClsPrefix}-list--clickable`, this.themeClass],
      style: this.cssVars
    }, $slots.header ? h$2("div", {
      class: `${mergedClsPrefix}-list__header`
    }, $slots.header()) : null, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots), $slots.footer ? h$2("div", {
      class: `${mergedClsPrefix}-list__footer`
    }, $slots.footer()) : null);
  }
});

const {defineComponent: defineComponent$1,h: h$1,inject} = await importShared('vue');
const NListItem = defineComponent$1({
  name: 'ListItem',
  slots: Object,
  setup() {
    const listInjection = inject(listInjectionKey, null);
    if (!listInjection) {
      throwError('list-item', '`n-list-item` must be placed in `n-list`.');
    }
    return {
      showDivider: listInjection.showDividerRef,
      mergedClsPrefix: listInjection.mergedClsPrefixRef
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix
    } = this;
    return h$1("li", {
      class: `${mergedClsPrefix}-list-item`
    }, $slots.prefix ? h$1("div", {
      class: `${mergedClsPrefix}-list-item__prefix`
    }, $slots.prefix()) : null, $slots.default ? h$1("div", {
      class: `${mergedClsPrefix}-list-item__main`
    }, $slots) : null, $slots.suffix ? h$1("div", {
      class: `${mergedClsPrefix}-list-item__suffix`
    }, $slots.suffix()) : null, this.showDivider && h$1("div", {
      class: `${mergedClsPrefix}-list-item__divider`
    }));
  }
});

// vars:
// --n-bezier
// --n-font-size
// --n-text-color
// --n-title-font-weight
// --n-title-text-color
const style = cB('thing', `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [cB('thing-avatar', `
 margin-right: 12px;
 margin-top: 2px;
 `), cB('thing-avatar-header-wrapper', `
 display: flex;
 flex-wrap: nowrap;
 `, [cB('thing-header-wrapper', `
 flex: 1;
 `)]), cB('thing-main', `
 flex-grow: 1;
 `, [cB('thing-header', `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [cE('title', `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), cE('description', [c('&:not(:last-child)', `
 margin-bottom: 4px;
 `)]), cE('content', [c('&:not(:first-child)', `
 margin-top: 12px;
 `)]), cE('footer', [c('&:not(:first-child)', `
 margin-top: 12px;
 `)]), cE('action', [c('&:not(:first-child)', `
 margin-top: 12px;
 `)])])]);

const {computed,defineComponent,Fragment,h} = await importShared('vue');
const thingProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  titleExtra: String,
  description: String,
  descriptionClass: String,
  descriptionStyle: [String, Object],
  content: String,
  contentClass: String,
  contentStyle: [String, Object],
  contentIndented: Boolean
});
const NThing = defineComponent({
  name: 'Thing',
  props: thingProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme('Thing', '-thing', style, thingLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl('Thing', mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          titleTextColor,
          textColor,
          titleFontWeight,
          fontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-font-size': fontSize,
        '--n-text-color': textColor,
        '--n-title-font-weight': titleFontWeight,
        '--n-title-text-color': titleTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('thing', undefined, cssVarsRef, props) : undefined;
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const rtlEnabled = rtlEnabledRef ? rtlEnabledRef.value : false;
      (_a = themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender) === null || _a === void 0 ? void 0 : _a.call(themeClassHandle);
      return h("div", {
        class: [`${mergedClsPrefix}-thing`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, rtlEnabled && `${mergedClsPrefix}-thing--rtl`],
        style: inlineThemeDisabled ? undefined : cssVarsRef.value
      }, slots.avatar && props.contentIndented ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, h("div", {
        class: `${mergedClsPrefix}-thing-main`
      }, !props.contentIndented && (slots.header || props.title || slots['header-extra'] || props.titleExtra || slots.avatar) ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar-header-wrapper`
      }, slots.avatar ? h("div", {
        class: `${mergedClsPrefix}-thing-avatar`
      }, slots.avatar()) : null, slots.header || props.title || slots['header-extra'] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header-wrapper`
      }, h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots['header-extra'] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots['header-extra'] ? slots['header-extra']() : props.titleExtra) : null), slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null) : null) : h(Fragment, null, slots.header || props.title || slots['header-extra'] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header`
      }, slots.header || props.title ? h("div", {
        class: `${mergedClsPrefix}-thing-header__title`
      }, slots.header ? slots.header() : props.title) : null, slots['header-extra'] || props.titleExtra ? h("div", {
        class: `${mergedClsPrefix}-thing-header__extra`
      }, slots['header-extra'] ? slots['header-extra']() : props.titleExtra) : null) : null, slots.description || props.description ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__description`, props.descriptionClass],
        style: props.descriptionStyle
      }, slots.description ? slots.description() : props.description) : null), slots.default || props.content ? h("div", {
        class: [`${mergedClsPrefix}-thing-main__content`, props.contentClass],
        style: props.contentStyle
      }, slots.default ? slots.default() : props.content) : null, slots.footer ? h("div", {
        class: `${mergedClsPrefix}-thing-main__footer`
      }, slots.footer()) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-thing-main__action`
      }, slots.action()) : null));
    };
  }
});

export { NDescriptions, NDescriptionsItem, NList, NListItem, NThing, descriptionsItemProps, descriptionsProps, listProps, self$2 as self, self$1, self as self$2, thingProps };
//# sourceMappingURL=Thing.DPqkGjKZ1767105581793.js.map
