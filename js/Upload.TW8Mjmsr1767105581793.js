import { importShared, kebabCase } from './index.BxB45aCK1767105581793.js';
import { useRtl, isMounted, useMemo } from './use-rtl.Dso2-paz1767105581793.js';
import { fadeInHeightExpandTransition, omit } from './use-message.C-NKuHgJ1767105581793.js';
import { derived, composite, changeColor, cB, cE, cM, c, resolveSlot, resolveWrappedSlot, useConfig, useTheme, createKey, useThemeClass, throwError, createTheme, createInjectionKey, cNotM, call, murmur2, error, warn } from './light.CLUJsvFB1767105581793.js';
import { NFadeInExpandTransition } from './browser.0EGmEZTw1767105581793.js';
import { NBaseClose, useLocale } from './Suffix.BS0_grS71767105581793.js';
import { replaceable, NBaseIcon } from './Close.VNV_OzKM1767105581793.js';
import { ErrorIcon, WarningIcon, InfoIcon, SuccessIcon } from './Warning.wvNlVXsF1767105581793.js';
import { getMargin, createId, fadeInTransition, pxfy } from './Scrollbar.COIrvx-21767105581793.js';
import { dialogApiInjectionKey, dialogReactiveListInjectionKey, NModal, NDialog, dialogPropKeys, dialogProps, dialogProviderInjectionKey, useClickPosition, useClicked } from './Modal.CJYgerxp1767105581793.js';
import { keep, LazyTeleport, zindexable } from './keep.JgtZum5h1767105581793.js';
import { isBrowser, NBaseLoading, iconSwitchTransition, NIconSwitchTransition, useFormItem } from './Loading.DMQwrvK31767105581793.js';
import { useCompitable } from './use-compitable.CyXVIY_Z1767105581793.js';
import { formatLength } from './format-length.BfWHZVRc1767105581793.js';
import { fadeInScaleUpTransition } from './Card.CmCLdudX1767105581793.js';
import { tooltipLight, NTooltip } from './Tooltip.D-ydKrLK1767105581793.js';
import { useMergedState, on, off } from './use-merged-state.tu3_gbk31767105581793.js';
import { beforeNextFrameOnce } from './Popover.BPydV3cl1767105581793.js';
import { buttonLight, Button } from './Button.CtEklqVH1767105581793.js';
import { EyeIcon } from './Input.xoI_2nKL1767105581793.js';
import { AddIcon } from './Add.Bgi8NnP41767105581793.js';

function download(url, name) {
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  if (name !== undefined) {
    a.download = name;
  }
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function publicDownload(url, name) {
  download(url, name);
}

const {h: h$s} = await importShared('vue');
const AttachIcon = replaceable('attach', () => h$s("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h$s("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h$s("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h$s("path", {
  d: "M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"
})))));

const {h: h$r} = await importShared('vue');
const CancelIcon = replaceable('cancel', () => h$r("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h$r("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h$r("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h$r("path", {
  d: "M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"
})))));

const {h: h$q} = await importShared('vue');
const DownloadIcon = replaceable('download', () => h$q("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h$q("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h$q("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h$q("path", {
  d: "M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"
})))));

const {defineComponent: defineComponent$h,h: h$p} = await importShared('vue');

const ResizeSmallIcon = defineComponent$h({
  name: 'ResizeSmall',
  render() {
    return h$p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, h$p("g", {
      fill: "none"
    }, h$p("path", {
      d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",
      fill: "currentColor"
    })));
  }
});

const {h: h$o} = await importShared('vue');
const RetryIcon = replaceable('retry', () => h$o("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h$o("path", {
  d: "M320,146s24.36-12-64-12A160,160,0,1,0,416,294",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"
}), h$o("polyline", {
  points: "256 58 336 138 256 218",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
})));

const {h: h$n} = await importShared('vue');
const RotateClockwiseIcon = replaceable('rotateClockwise', () => h$n("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h$n("path", {
  d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",
  fill: "currentColor"
}), h$n("path", {
  d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",
  fill: "currentColor"
})));

const {h: h$m} = await importShared('vue');
const RotateCounterclockwiseIcon = replaceable('rotateClockwise', () => h$m("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h$m("path", {
  d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",
  fill: "currentColor"
}), h$m("path", {
  d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",
  fill: "currentColor"
})));

const {h: h$l} = await importShared('vue');
const TrashIcon = replaceable('trash', () => h$l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h$l("path", {
  d: "M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h$l("rect", {
  x: "32",
  y: "64",
  width: "448",
  height: "80",
  rx: "16",
  ry: "16",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h$l("line", {
  x1: "312",
  y1: "240",
  x2: "200",
  y2: "352",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
}), h$l("line", {
  x1: "312",
  y1: "352",
  x2: "200",
  y2: "240",
  style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
})));

const {h: h$k} = await importShared('vue');
const ZoomInIcon = replaceable('zoomIn', () => h$k("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h$k("path", {
  d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",
  fill: "currentColor"
}), h$k("path", {
  d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",
  fill: "currentColor"
})));

const {h: h$j} = await importShared('vue');
const ZoomOutIcon = replaceable('zoomOut', () => h$j("svg", {
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, h$j("path", {
  d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",
  fill: "currentColor"
}), h$j("path", {
  d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",
  fill: "currentColor"
})));

const commonVars = {
  iconMargin: '11px 8px 0 12px',
  iconMarginRtl: '11px 12px 0 8px',
  iconSize: '24px',
  closeIconSize: '16px',
  closeSize: '20px',
  closeMargin: '13px 14px 0 0',
  closeMarginRtl: '13px 0 0 14px',
  padding: '13px'
};

function self$4(vars) {
  const {
    lineHeight,
    borderRadius,
    fontWeightStrong,
    baseColor,
    dividerColor,
    actionColor,
    textColor1,
    textColor2,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    fontSize,
    lineHeight,
    titleFontWeight: fontWeightStrong,
    borderRadius,
    border: `1px solid ${dividerColor}`,
    color: actionColor,
    titleTextColor: textColor1,
    iconColor: textColor2,
    contentTextColor: textColor2,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderInfo: `1px solid ${composite(baseColor, changeColor(infoColor, {
      alpha: 0.25
    }))}`,
    colorInfo: composite(baseColor, changeColor(infoColor, {
      alpha: 0.08
    })),
    titleTextColorInfo: textColor1,
    iconColorInfo: infoColor,
    contentTextColorInfo: textColor2,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    borderSuccess: `1px solid ${composite(baseColor, changeColor(successColor, {
      alpha: 0.25
    }))}`,
    colorSuccess: composite(baseColor, changeColor(successColor, {
      alpha: 0.08
    })),
    titleTextColorSuccess: textColor1,
    iconColorSuccess: successColor,
    contentTextColorSuccess: textColor2,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    borderWarning: `1px solid ${composite(baseColor, changeColor(warningColor, {
      alpha: 0.33
    }))}`,
    colorWarning: composite(baseColor, changeColor(warningColor, {
      alpha: 0.08
    })),
    titleTextColorWarning: textColor1,
    iconColorWarning: warningColor,
    contentTextColorWarning: textColor2,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    borderError: `1px solid ${composite(baseColor, changeColor(errorColor, {
      alpha: 0.25
    }))}`,
    colorError: composite(baseColor, changeColor(errorColor, {
      alpha: 0.08
    })),
    titleTextColorError: textColor1,
    iconColorError: errorColor,
    contentTextColorError: textColor2,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed
  });
}
const alertLight = {
  common: derived,
  self: self$4
};

// vars:
// --n-bezier
// --n-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-icon-color
// --n-close-icon-color-hover
// --n-close-icon-color-pressed
// --n-icon-color
// --n-border
// --n-title-text-color
// --n-content-text-color
// --n-line-height
// --n-border-radius
// --n-font-size
// --n-title-font-weight
// --n-icon-size
// --n-icon-margin
// --n-close-size
// --n-close-icon-size
// --n-close-margin
// --n-padding
// --n-icon-margin-left
// --n-icon-margin-right
const style$4 = cB('alert', `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [cE('border', `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `), cM('closable', [cB('alert-body', [cE('title', `
 padding-right: 24px;
 `)])]), cE('icon', {
  color: 'var(--n-icon-color)'
}), cB('alert-body', {
  padding: 'var(--n-padding)'
}, [cE('title', {
  color: 'var(--n-title-text-color)'
}), cE('content', {
  color: 'var(--n-content-text-color)'
})]), fadeInHeightExpandTransition({
  originalTransition: 'transform .3s var(--n-bezier)',
  enterToProps: {
    transform: 'scale(1)'
  },
  leaveToProps: {
    transform: 'scale(0.9)'
  }
}), cE('icon', `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `), cE('close', `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `), cM('show-icon', [cB('alert-body', {
  paddingLeft: 'calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))'
})]),
// fix: https://github.com/tusen-ai/naive-ui/issues/4588
cM('right-adjust', [cB('alert-body', {
  paddingRight: 'calc(var(--n-close-size) + var(--n-padding) + 2px)'
})]), cB('alert-body', `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE('title', `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c('& +', [cE('content', {
  marginTop: '9px'
})])]), cE('content', {
  transition: 'color .3s var(--n-bezier)',
  fontSize: 'var(--n-font-size)'
})]), cE('icon', {
  transition: 'color .3s var(--n-bezier)'
})]);

const {computed: computed$c,defineComponent: defineComponent$g,h: h$i,mergeProps,ref: ref$8,watchEffect: watchEffect$3} = await importShared('vue');
const alertProps = Object.assign(Object.assign({}, useTheme.props), {
  title: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "default"
  },
  bordered: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  onClose: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onAfterHide: Function
});
const NAlert = defineComponent$g({
  name: "Alert",
  inheritAttrs: false,
  props: alertProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Alert", "-alert", style$4, alertLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Alert", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed$c(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        fontSize,
        borderRadius,
        titleFontWeight,
        lineHeight,
        iconSize,
        iconMargin,
        iconMarginRtl,
        closeIconSize,
        closeBorderRadius,
        closeSize,
        closeMargin,
        closeMarginRtl,
        padding
      } = self;
      const {
        type
      } = props;
      const {
        left,
        right
      } = getMargin(iconMargin);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": self[createKey("color", type)],
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": self[createKey("closeColorHover", type)],
        "--n-close-color-pressed": self[createKey("closeColorPressed", type)],
        "--n-close-icon-color": self[createKey("closeIconColor", type)],
        "--n-close-icon-color-hover": self[createKey("closeIconColorHover", type)],
        "--n-close-icon-color-pressed": self[createKey("closeIconColorPressed", type)],
        "--n-icon-color": self[createKey("iconColor", type)],
        "--n-border": self[createKey("border", type)],
        "--n-title-text-color": self[createKey("titleTextColor", type)],
        "--n-content-text-color": self[createKey("contentTextColor", type)],
        "--n-line-height": lineHeight,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-title-font-weight": titleFontWeight,
        "--n-icon-size": iconSize,
        "--n-icon-margin": iconMargin,
        "--n-icon-margin-rtl": iconMarginRtl,
        "--n-close-size": closeSize,
        "--n-close-margin": closeMargin,
        "--n-close-margin-rtl": closeMarginRtl,
        "--n-padding": padding,
        "--n-icon-margin-left": left,
        "--n-icon-margin-right": right
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("alert", computed$c(() => {
      return props.type[0];
    }), cssVarsRef, props) : void 0;
    const visibleRef = ref$8(true);
    const doAfterLeave = () => {
      const {
        onAfterLeave,
        onAfterHide
        // deprecated
      } = props;
      if (onAfterLeave) onAfterLeave();
      if (onAfterHide) onAfterHide();
    };
    const handleCloseClick = () => {
      var _a;
      void Promise.resolve((_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)).then((result) => {
        if (result === false) return;
        visibleRef.value = false;
      });
    };
    const handleAfterLeave = () => {
      doAfterLeave();
    };
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      visible: visibleRef,
      handleCloseClick,
      handleAfterLeave,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h$i(NFadeInExpandTransition, {
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => {
        const {
          mergedClsPrefix,
          $slots
        } = this;
        const attrs = {
          class: [
            `${mergedClsPrefix}-alert`,
            this.themeClass,
            this.closable && `${mergedClsPrefix}-alert--closable`,
            this.showIcon && `${mergedClsPrefix}-alert--show-icon`,
            // fix: https://github.com/tusen-ai/naive-ui/issues/4588
            !this.title && this.closable && `${mergedClsPrefix}-alert--right-adjust`,
            this.rtlEnabled && `${mergedClsPrefix}-alert--rtl`
          ],
          style: this.cssVars,
          role: "alert"
        };
        return this.visible ? h$i("div", Object.assign({}, mergeProps(this.$attrs, attrs)), this.closable && h$i(NBaseClose, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-alert__close`,
          onClick: this.handleCloseClick
        }), this.bordered && h$i("div", {
          class: `${mergedClsPrefix}-alert__border`
        }), this.showIcon && h$i("div", {
          class: `${mergedClsPrefix}-alert__icon`,
          "aria-hidden": "true"
        }, resolveSlot($slots.icon, () => [h$i(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => {
            switch (this.type) {
              case "success":
                return h$i(SuccessIcon, null);
              case "info":
                return h$i(InfoIcon, null);
              case "warning":
                return h$i(WarningIcon, null);
              case "error":
                return h$i(ErrorIcon, null);
              default:
                return null;
            }
          }
        })])), h$i("div", {
          class: [`${mergedClsPrefix}-alert-body`, this.mergedBordered && `${mergedClsPrefix}-alert-body--bordered`]
        }, resolveWrappedSlot($slots.header, (children) => {
          const mergedChildren = children || this.title;
          return mergedChildren ? h$i("div", {
            class: `${mergedClsPrefix}-alert-body__title`
          }, mergedChildren) : null;
        }), $slots.default && h$i("div", {
          class: `${mergedClsPrefix}-alert-body__content`
        }, $slots))) : null;
      }
    });
  }
});

const isImageSupportNativeLazy = isBrowser && 'loading' in document.createElement('img');

function resolveOptionsAndHash(options = {}) {
  var _a;
  const {
    root = null
  } = options;
  return {
    hash: `${options.rootMargin || '0px 0px 0px 0px'}-${Array.isArray(options.threshold) ? options.threshold.join(',') : (_a = options.threshold) !== null && _a !== void 0 ? _a : '0'}`,
    options: Object.assign(Object.assign({}, options), {
      root: (typeof root === 'string' ? document.querySelector(root) : root) || document.documentElement
    })
  };
}
// root -> options -> [observer, elements]
const observers = new WeakMap();
const unobserveHandleMap = new WeakMap();
const shouldStartLoadingRefMap = new WeakMap();
const observeIntersection = (el, options, shouldStartLoadingRef) => {
  if (!el) return () => {};
  const resolvedOptionsAndHash = resolveOptionsAndHash(options);
  const {
    root
  } = resolvedOptionsAndHash.options;
  let rootObservers;
  const _rootObservers = observers.get(root);
  if (_rootObservers) {
    rootObservers = _rootObservers;
  } else {
    rootObservers = new Map();
    observers.set(root, rootObservers);
  }
  let observer;
  let observerAndObservedElements;
  if (rootObservers.has(resolvedOptionsAndHash.hash)) {
    observerAndObservedElements = rootObservers.get(resolvedOptionsAndHash.hash);
    if (!observerAndObservedElements[1].has(el)) {
      observer = observerAndObservedElements[0];
      observerAndObservedElements[1].add(el);
      observer.observe(el);
    }
  } else {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const _unobserve = unobserveHandleMap.get(entry.target);
          const _shouldStartLoadingRef = shouldStartLoadingRefMap.get(entry.target);
          if (_unobserve) _unobserve();
          if (_shouldStartLoadingRef) {
            _shouldStartLoadingRef.value = true;
          }
        }
      });
    }, resolvedOptionsAndHash.options);
    observer.observe(el);
    observerAndObservedElements = [observer, new Set([el])];
    rootObservers.set(resolvedOptionsAndHash.hash, observerAndObservedElements);
  }
  let unobservered = false;
  const unobserve = () => {
    if (unobservered) return;
    unobserveHandleMap.delete(el);
    shouldStartLoadingRefMap.delete(el);
    unobservered = true;
    if (observerAndObservedElements[1].has(el)) {
      observerAndObservedElements[0].unobserve(el);
      observerAndObservedElements[1].delete(el);
    }
    if (observerAndObservedElements[1].size <= 0) {
      rootObservers.delete(resolvedOptionsAndHash.hash);
    }
    if (!rootObservers.size) {
      observers.delete(root);
    }
  };
  unobserveHandleMap.set(el, unobserve);
  shouldStartLoadingRefMap.set(el, shouldStartLoadingRef);
  return unobserve;
};

const {inject: inject$7} = await importShared('vue');
function useDialog() {
  const dialog = inject$7(dialogApiInjectionKey, null);
  if (dialog === null) {
    throwError('use-dialog', 'No outer <n-dialog-provider /> founded.');
  }
  return dialog;
}
function useDialogReactiveList() {
  const dialogReactiveList = inject$7(dialogReactiveListInjectionKey, null);
  if (dialogReactiveList === null) {
    throwError('use-dialog-reactive-list', 'No outer <n-dialog-provider /> founded.');
  }
  return dialogReactiveList;
}

// use absolute path to make sure no circular ref of style
// this -> modal-index -> modal-style
const {defineComponent: defineComponent$f,h: h$h,normalizeClass,ref: ref$7} = await importShared('vue');
const exposedDialogEnvProps = Object.assign(Object.assign({}, dialogProps), {
  onAfterEnter: Function,
  onAfterLeave: Function,
  transformOrigin: String,
  blockScroll: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  onEsc: Function,
  autoFocus: {
    type: Boolean,
    default: true
  },
  internalStyle: [String, Object],
  maskClosable: {
    type: Boolean,
    default: true
  },
  zIndex: Number,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function,
  onMaskClick: Function,
  draggable: [Boolean, Object]
});
const NDialogEnvironment = defineComponent$f({
  name: 'DialogEnvironment',
  props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object],
    // private
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const showRef = ref$7(true);
    function handleAfterLeave() {
      const {
        onInternalAfterLeave,
        internalKey,
        onAfterLeave
      } = props;
      if (onInternalAfterLeave) onInternalAfterLeave(internalKey);
      if (onAfterLeave) onAfterLeave();
    }
    function handlePositiveClick(e) {
      const {
        onPositiveClick
      } = props;
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then(result => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleNegativeClick(e) {
      const {
        onNegativeClick
      } = props;
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then(result => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleCloseClick() {
      const {
        onClose
      } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then(result => {
          if (result === false) return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleMaskClick(e) {
      const {
        onMaskClick,
        maskClosable
      } = props;
      if (onMaskClick) {
        onMaskClick(e);
        if (maskClosable) {
          hide();
        }
      }
    }
    function handleEsc() {
      const {
        onEsc
      } = props;
      if (onEsc) {
        onEsc();
      }
    }
    function hide() {
      showRef.value = false;
    }
    function handleUpdateShow(value) {
      showRef.value = value;
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick,
      handleEsc
    };
  },
  render() {
    const {
      handlePositiveClick,
      handleUpdateShow,
      handleNegativeClick,
      handleCloseClick,
      handleAfterLeave,
      handleMaskClick,
      handleEsc,
      to,
      zIndex,
      maskClosable,
      show
    } = this;
    return h$h(NModal, {
      show: show,
      onUpdateShow: handleUpdateShow,
      onMaskClick: handleMaskClick,
      onEsc: handleEsc,
      to: to,
      zIndex: zIndex,
      maskClosable: maskClosable,
      onAfterEnter: this.onAfterEnter,
      onAfterLeave: handleAfterLeave,
      closeOnEsc: this.closeOnEsc,
      blockScroll: this.blockScroll,
      autoFocus: this.autoFocus,
      transformOrigin: this.transformOrigin,
      draggable: this.draggable,
      internalAppear: true,
      internalDialog: true
    }, {
      default: ({
        draggableClass
      }) => h$h(NDialog, Object.assign({}, keep(this.$props, dialogPropKeys), {
        titleClass: normalizeClass([this.titleClass, draggableClass]),
        style: this.internalStyle,
        onClose: handleCloseClick,
        onNegativeClick: handleNegativeClick,
        onPositiveClick: handlePositiveClick
      }))
    });
  }
});

const {defineComponent: defineComponent$e,Fragment: Fragment$2,h: h$g,provide: provide$3,reactive,ref: ref$6} = await importShared('vue');
const dialogProviderProps = {
  injectionKey: String,
  to: [String, Object]
};
const NDialogProvider = defineComponent$e({
  name: 'DialogProvider',
  props: dialogProviderProps,
  setup() {
    const dialogListRef = ref$6([]);
    const dialogInstRefs = {};
    function create(options = {}) {
      const key = createId();
      const dialogReactive = reactive(Object.assign(Object.assign({}, options), {
        key,
        destroy: () => {
          var _a;
          (_a = dialogInstRefs[`n-dialog-${key}`]) === null || _a === void 0 ? void 0 : _a.hide();
        }
      }));
      dialogListRef.value.push(dialogReactive);
      return dialogReactive;
    }
    const typedApi = ['info', 'success', 'warning', 'error'].map(type => options => {
      return create(Object.assign(Object.assign({}, options), {
        type
      }));
    });
    function handleAfterLeave(key) {
      const {
        value: dialogList
      } = dialogListRef;
      dialogList.splice(dialogList.findIndex(dialog => dialog.key === key), 1);
    }
    function destroyAll() {
      Object.values(dialogInstRefs).forEach(dialogInstRef => {
        dialogInstRef === null || dialogInstRef === void 0 ? void 0 : dialogInstRef.hide();
      });
    }
    const api = {
      create,
      destroyAll,
      info: typedApi[0],
      success: typedApi[1],
      warning: typedApi[2],
      error: typedApi[3]
    };
    provide$3(dialogApiInjectionKey, api);
    provide$3(dialogProviderInjectionKey, {
      clickedRef: useClicked(64),
      clickedPositionRef: useClickPosition()
    });
    provide$3(dialogReactiveListInjectionKey, dialogListRef);
    return Object.assign(Object.assign({}, api), {
      dialogList: dialogListRef,
      dialogInstRefs,
      handleAfterLeave
    });
  },
  render() {
    var _a, _b;
    return h$g(Fragment$2, null, [this.dialogList.map(dialog => h$g(NDialogEnvironment, omit(dialog, ['destroy', 'style'], {
      internalStyle: dialog.style,
      to: this.to,
      ref: inst => {
        if (inst === null) {
          delete this.dialogInstRefs[`n-dialog-${dialog.key}`];
        } else {
          this.dialogInstRefs[`n-dialog-${dialog.key}`] = inst;
        }
      },
      internalKey: dialog.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)]);
  }
});

function self$3(vars) {
  const {
    infoColor,
    successColor,
    warningColor,
    errorColor,
    textColor2,
    progressRailColor,
    fontSize,
    fontWeight
  } = vars;
  return {
    fontSize,
    fontSizeCircle: '28px',
    fontWeightCircle: fontWeight,
    railColor: progressRailColor,
    railHeight: '8px',
    iconSizeCircle: '36px',
    iconSizeLine: '18px',
    iconColor: infoColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    textColorCircle: textColor2,
    textColorLineInner: 'rgb(255, 255, 255)',
    textColorLineOuter: textColor2,
    fillColor: infoColor,
    fillColorInfo: infoColor,
    fillColorSuccess: successColor,
    fillColorWarning: warningColor,
    fillColorError: errorColor,
    lineBgProcessing: 'linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)'
  };
}
const progressLight = {
  name: 'Progress',
  common: derived,
  self: self$3
};

function self$2(vars) {
  const {
    opacityDisabled,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    primaryColor,
    fontSize
  } = vars;
  return {
    fontSize,
    textColor: primaryColor,
    sizeTiny: heightTiny,
    sizeSmall: heightSmall,
    sizeMedium: heightMedium,
    sizeLarge: heightLarge,
    sizeHuge: heightHuge,
    color: primaryColor,
    opacitySpinning: opacityDisabled
  };
}
const spinLight = {
  common: derived,
  self: self$2
};

function self$1(vars) {
  const {
    iconColor,
    primaryColor,
    errorColor,
    textColor2,
    successColor,
    opacityDisabled,
    actionColor,
    borderColor,
    hoverColor,
    lineHeight,
    borderRadius,
    fontSize
  } = vars;
  return {
    fontSize,
    lineHeight,
    borderRadius,
    draggerColor: actionColor,
    draggerBorder: `1px dashed ${borderColor}`,
    draggerBorderHover: `1px dashed ${primaryColor}`,
    itemColorHover: hoverColor,
    itemColorHoverError: changeColor(errorColor, {
      alpha: 0.06
    }),
    itemTextColor: textColor2,
    itemTextColorError: errorColor,
    itemTextColorSuccess: successColor,
    itemIconColor: iconColor,
    itemDisabledOpacity: opacityDisabled,
    itemBorderImageCardError: `1px solid ${errorColor}`,
    itemBorderImageCard: `1px solid ${borderColor}`
  };
}
const uploadLight = createTheme({
  name: 'Upload',
  common: derived,
  peers: {
    Button: buttonLight,
    Progress: progressLight
  },
  self: self$1
});

function self() {
  return {
    toolbarIconColor: 'rgba(255, 255, 255, .9)',
    toolbarColor: 'rgba(0, 0, 0, .35)',
    toolbarBoxShadow: 'none',
    toolbarBorderRadius: '24px'
  };
}
const imageLight = createTheme({
  name: 'Image',
  common: derived,
  peers: {
    Tooltip: tooltipLight
  },
  self
});

const {h: h$f} = await importShared('vue');

function renderPrevIcon() {
  return h$f("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h$f("path", {
    d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",
    fill: "currentColor"
  }));
}
function renderNextIcon() {
  return h$f("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h$f("path", {
    d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",
    fill: "currentColor"
  }));
}
function renderCloseIcon() {
  return h$f("svg", {
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h$f("path", {
    d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",
    fill: "currentColor"
  }));
}

const imagePreviewSharedProps = Object.assign(Object.assign({}, useTheme.props), {
  onPreviewPrev: Function,
  onPreviewNext: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  showToolbarTooltip: Boolean,
  renderToolbar: Function
});
const imageContextKey = createInjectionKey('n-image');

// vars:
// --n-toolbar-icon-color
// --n-toolbar-color
// --n-toolbar-border-radius
// --n-toolbar-box-shadow
// --n-bezier
const style$3 = c([c('body >', [cB('image-container', 'position: fixed;')]), cB('image-preview-container', `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), cB('image-preview-overlay', `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [fadeInTransition()]), cB('image-preview-toolbar', `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB('base-icon', `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), fadeInTransition()]), cB('image-preview-wrapper', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [fadeInScaleUpTransition()]), cB('image-preview', `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), cB('image', `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [cNotM('preview-disabled', `
 cursor: pointer;
 `), c('img', `
 border-radius: inherit;
 `)])]);

const {computed: computed$b,defineComponent: defineComponent$d,Fragment: Fragment$1,h: h$e,inject: inject$6,normalizeStyle,onBeforeUnmount: onBeforeUnmount$1,ref: ref$5,toRef: toRef$3,toRefs,Transition: Transition$1,vShow,watch,withDirectives} = await importShared('vue');
const BLEEDING = 32;
const imagePreviewProps = Object.assign(Object.assign({}, imagePreviewSharedProps), {
  src: String,
  show: {
    type: Boolean,
    default: undefined
  },
  defaultShow: Boolean,
  'onUpdate:show': [Function, Array],
  onUpdateShow: [Function, Array],
  onNext: Function,
  onPrev: Function,
  onClose: [Function, Array]
});
const NImagePreview = defineComponent$d({
  name: 'ImagePreview',
  props: imagePreviewProps,
  setup(props) {
    const {
      src
    } = toRefs(props);
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const themeRef = useTheme('Image', '-image', style$3, imageLight, props, mergedClsPrefixRef);
    let thumbnailEl = null;
    const previewRef = ref$5(null);
    const previewWrapperRef = ref$5(null);
    const displayedRef = ref$5(false);
    const {
      localeRef
    } = useLocale('Image');
    const uncontrolledShowRef = ref$5(props.defaultShow);
    const controlledShowRef = toRef$3(props, 'show');
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    function syncTransformOrigin() {
      const {
        value: previewWrapper
      } = previewWrapperRef;
      if (!thumbnailEl || !previewWrapper) return;
      const {
        style
      } = previewWrapper;
      const tbox = thumbnailEl.getBoundingClientRect();
      const tx = tbox.left + tbox.width / 2;
      const ty = tbox.top + tbox.height / 2;
      style.transformOrigin = `${tx}px ${ty}px`;
    }
    function handleKeydown(e) {
      var _a, _b;
      switch (e.key) {
        case ' ':
          e.preventDefault();
          break;
        case 'ArrowLeft':
          (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
          break;
        case 'ArrowRight':
          (_b = props.onNext) === null || _b === void 0 ? void 0 : _b.call(props);
          break;
        case 'ArrowUp':
          e.preventDefault();
          zoomIn();
          break;
        case 'ArrowDown':
          e.preventDefault();
          zoomOut();
          break;
        case 'Escape':
          close();
          break;
      }
    }
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        'onUpdate:show': _onUpdateShow
      } = props;
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      uncontrolledShowRef.value = value;
      displayedRef.value = true;
    }
    watch(mergedShowRef, value => {
      if (value) {
        on('keydown', document, handleKeydown);
      } else {
        off('keydown', document, handleKeydown);
      }
    });
    onBeforeUnmount$1(() => {
      off('keydown', document, handleKeydown);
    });
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let startOffsetX = 0;
    let startOffsetY = 0;
    let mouseDownClientX = 0;
    let mouseDownClientY = 0;
    let dragging = false;
    function handleMouseMove(e) {
      const {
        clientX,
        clientY
      } = e;
      offsetX = clientX - startX;
      offsetY = clientY - startY;
      beforeNextFrameOnce(derivePreviewStyle);
    }
    function getMoveStrategy(opts) {
      const {
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      } = opts;
      const deltaHorizontal = mouseDownClientX - mouseUpClientX;
      const deltaVertical = mouseDownClientY - mouseUpClientY;
      const moveVerticalDirection = `vertical${deltaVertical > 0 ? 'Top' : 'Bottom'}`;
      const moveHorizontalDirection = `horizontal${deltaHorizontal > 0 ? 'Left' : 'Right'}`;
      return {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      };
    }
    // avoid image move outside viewport
    function getDerivedOffset(moveStrategy) {
      const {
        value: preview
      } = previewRef;
      if (!preview) return {
        offsetX: 0,
        offsetY: 0
      };
      const pbox = preview.getBoundingClientRect();
      const {
        moveVerticalDirection,
        moveHorizontalDirection,
        deltaHorizontal,
        deltaVertical
      } = moveStrategy || {};
      let nextOffsetX = 0;
      let nextOffsetY = 0;
      if (pbox.width <= window.innerWidth) {
        nextOffsetX = 0;
      } else if (pbox.left > 0) {
        nextOffsetX = (pbox.width - window.innerWidth) / 2;
      } else if (pbox.right < window.innerWidth) {
        nextOffsetX = -(pbox.width - window.innerWidth) / 2;
      } else if (moveHorizontalDirection === 'horizontalRight') {
        nextOffsetX = Math.min((pbox.width - window.innerWidth) / 2, startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      } else {
        nextOffsetX = Math.max(-((pbox.width - window.innerWidth) / 2), startOffsetX - (deltaHorizontal !== null && deltaHorizontal !== void 0 ? deltaHorizontal : 0));
      }
      if (pbox.height <= window.innerHeight) {
        nextOffsetY = 0;
      } else if (pbox.top > 0) {
        nextOffsetY = (pbox.height - window.innerHeight) / 2;
      } else if (pbox.bottom < window.innerHeight) {
        nextOffsetY = -(pbox.height - window.innerHeight) / 2;
      } else if (moveVerticalDirection === 'verticalBottom') {
        nextOffsetY = Math.min((pbox.height - window.innerHeight) / 2, startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      } else {
        nextOffsetY = Math.max(-((pbox.height - window.innerHeight) / 2), startOffsetY - (deltaVertical !== null && deltaVertical !== void 0 ? deltaVertical : 0));
      }
      return {
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      };
    }
    function handleMouseUp(e) {
      off('mousemove', document, handleMouseMove);
      off('mouseup', document, handleMouseUp);
      const {
        clientX: mouseUpClientX,
        clientY: mouseUpClientY
      } = e;
      dragging = false;
      const moveStrategy = getMoveStrategy({
        mouseUpClientX,
        mouseUpClientY,
        mouseDownClientX,
        mouseDownClientY
      });
      const offset = getDerivedOffset(moveStrategy);
      offsetX = offset.offsetX;
      offsetY = offset.offsetY;
      derivePreviewStyle();
    }
    const imageContext = inject$6(imageContextKey, null);
    function handlePreviewMousedown(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onMousedown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      if (e.button !== 0) return;
      const {
        clientX,
        clientY
      } = e;
      dragging = true;
      startX = clientX - offsetX;
      startY = clientY - offsetY;
      startOffsetX = offsetX;
      startOffsetY = offsetY;
      mouseDownClientX = clientX;
      mouseDownClientY = clientY;
      derivePreviewStyle();
      on('mousemove', document, handleMouseMove);
      on('mouseup', document, handleMouseUp);
    }
    const scaleRadix = 1.5;
    let scaleExp = 0;
    let scale = 1;
    let rotate = 0;
    function handlePreviewDblclick(e) {
      var _a, _b;
      (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDblclick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
      const originalImageSizeScale = getOrignalImageSizeScale();
      scale = scale === originalImageSizeScale ? 1 : originalImageSizeScale;
      derivePreviewStyle();
    }
    function resetScale() {
      scale = 1;
      scaleExp = 0;
    }
    function handleSwitchPrev() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onPrev) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleSwitchNext() {
      var _a;
      resetScale();
      rotate = 0;
      (_a = props.onNext) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function rotateCounterclockwise() {
      rotate -= 90;
      derivePreviewStyle();
    }
    function rotateClockwise() {
      rotate += 90;
      derivePreviewStyle();
    }
    function getMaxScale() {
      const {
        value: preview
      } = previewRef;
      if (!preview) return 1;
      const {
        innerWidth,
        innerHeight
      } = window;
      const heightMaxScale = Math.max(1, preview.naturalHeight / (innerHeight - BLEEDING));
      const widthMaxScale = Math.max(1, preview.naturalWidth / (innerWidth - BLEEDING));
      return Math.max(3, heightMaxScale * 2, widthMaxScale * 2);
    }
    function getOrignalImageSizeScale() {
      const {
        value: preview
      } = previewRef;
      if (!preview) return 1;
      const {
        innerWidth,
        innerHeight
      } = window;
      const heightScale = preview.naturalHeight / (innerHeight - BLEEDING);
      const widthScale = preview.naturalWidth / (innerWidth - BLEEDING);
      if (heightScale < 1 && widthScale < 1) {
        return 1;
      }
      return Math.max(heightScale, widthScale);
    }
    function zoomIn() {
      const maxScale = getMaxScale();
      if (scale < maxScale) {
        scaleExp += 1;
        scale = Math.min(maxScale, Math.pow(scaleRadix, scaleExp));
        derivePreviewStyle();
      }
    }
    function zoomOut() {
      if (scale > 0.5) {
        const originalScale = scale;
        scaleExp -= 1;
        scale = Math.max(0.5, Math.pow(scaleRadix, scaleExp));
        const diff = originalScale - scale;
        derivePreviewStyle(false);
        const offset = getDerivedOffset();
        scale += diff;
        derivePreviewStyle(false);
        scale -= diff;
        offsetX = offset.offsetX;
        offsetY = offset.offsetY;
        derivePreviewStyle();
      }
    }
    function handleDownloadClick() {
      const imgSrc = src.value;
      if (imgSrc) {
        download(imgSrc, undefined);
      }
    }
    function derivePreviewStyle(transition = true) {
      var _a;
      const {
        value: preview
      } = previewRef;
      if (!preview) return;
      const {
        style
      } = preview;
      const controlledStyle = normalizeStyle((_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.style);
      let controlledStyleString = '';
      if (typeof controlledStyle === 'string') {
        controlledStyleString = `${controlledStyle};`;
      } else {
        for (const key in controlledStyle) {
          controlledStyleString += `${kebabCase(key)}: ${controlledStyle[key]};`;
        }
      }
      const transformStyle = `transform-origin: center; transform: translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotate}deg) scale(${scale});`;
      if (dragging) {
        style.cssText = `${controlledStyleString}cursor: grabbing; transition: none;${transformStyle}`;
      } else {
        style.cssText = `${controlledStyleString}cursor: grab;${transformStyle}${transition ? '' : 'transition: none;'}`;
      }
      if (!transition) {
        void preview.offsetHeight;
      }
    }
    function close() {
      if (mergedShowRef.value) {
        const {
          onClose
        } = props;
        if (onClose) call(onClose);
        doUpdateShow(false);
        uncontrolledShowRef.value = false;
      }
    }
    function resizeToOrignalImageSize() {
      scale = getOrignalImageSizeScale();
      scaleExp = Math.ceil(Math.log(scale) / Math.log(scaleRadix));
      offsetX = 0;
      offsetY = 0;
      derivePreviewStyle();
    }
    const exposedMethods = {
      setThumbnailEl: el => {
        thumbnailEl = el;
      }
    };
    function withTooltip(node, tooltipKey) {
      if (props.showToolbarTooltip) {
        const {
          value: theme
        } = themeRef;
        return h$e(NTooltip, {
          to: false,
          theme: theme.peers.Tooltip,
          themeOverrides: theme.peerOverrides.Tooltip,
          keepAliveOnHover: false
        }, {
          default: () => {
            return localeRef.value[tooltipKey];
          },
          trigger: () => node
        });
      } else {
        return node;
      }
    }
    const cssVarsRef = computed$b(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          toolbarIconColor,
          toolbarBorderRadius,
          toolbarBoxShadow,
          toolbarColor
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-toolbar-icon-color': toolbarIconColor,
        '--n-toolbar-color': toolbarColor,
        '--n-toolbar-border-radius': toolbarBorderRadius,
        '--n-toolbar-box-shadow': toolbarBoxShadow
      };
    });
    const {
      inlineThemeDisabled
    } = useConfig();
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('image-preview', undefined, cssVarsRef, props) : undefined;
    function handleWheel(event) {
      event.preventDefault();
    }
    return Object.assign({
      clsPrefix: mergedClsPrefixRef,
      previewRef,
      previewWrapperRef,
      previewSrc: src,
      mergedShow: mergedShowRef,
      appear: isMounted(),
      displayed: displayedRef,
      previewedImgProps: imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef,
      handleWheel,
      handlePreviewMousedown,
      handlePreviewDblclick,
      syncTransformOrigin,
      handleAfterLeave: () => {
        resetScale();
        rotate = 0;
        displayedRef.value = false;
      },
      handleDragStart: e => {
        var _a, _b;
        (_b = (_a = imageContext === null || imageContext === void 0 ? void 0 : imageContext.previewedImgPropsRef.value) === null || _a === void 0 ? void 0 : _a.onDragstart) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        e.preventDefault();
      },
      zoomIn,
      zoomOut,
      handleDownloadClick,
      rotateCounterclockwise,
      rotateClockwise,
      handleSwitchPrev,
      handleSwitchNext,
      withTooltip,
      resizeToOrignalImageSize,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      doUpdateShow,
      close
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const {
      clsPrefix,
      renderToolbar,
      withTooltip
    } = this;
    const prevNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.handleSwitchPrev
    }, {
      default: renderPrevIcon
    }), 'tipPrevious');
    const nextNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.handleSwitchNext
    }, {
      default: renderNextIcon
    }), 'tipNext');
    const rotateCounterclockwiseNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.rotateCounterclockwise
    }, {
      default: () => h$e(RotateCounterclockwiseIcon, null)
    }), 'tipCounterclockwise');
    const rotateClockwiseNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.rotateClockwise
    }, {
      default: () => h$e(RotateClockwiseIcon, null)
    }), 'tipClockwise');
    const originalSizeNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.resizeToOrignalImageSize
    }, {
      default: () => {
        return h$e(ResizeSmallIcon, null);
      }
    }), 'tipOriginalSize');
    const zoomOutNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.zoomOut
    }, {
      default: () => h$e(ZoomOutIcon, null)
    }), 'tipZoomOut');
    const downloadNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.handleDownloadClick
    }, {
      default: () => h$e(DownloadIcon, null)
    }), 'tipDownload');
    const closeNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: () => this.close()
    }, {
      default: renderCloseIcon
    }), 'tipClose');
    const zoomInNode = withTooltip(h$e(NBaseIcon, {
      clsPrefix: clsPrefix,
      onClick: this.zoomIn
    }, {
      default: () => h$e(ZoomInIcon, null)
    }), 'tipZoomIn');
    return h$e(Fragment$1, null, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a), h$e(LazyTeleport, {
      show: this.mergedShow
    }, {
      default: () => {
        var _a;
        if (!(this.mergedShow || this.displayed)) {
          return null;
        }
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return withDirectives(h$e("div", {
          ref: "containerRef",
          class: [`${clsPrefix}-image-preview-container`, this.themeClass],
          style: this.cssVars,
          onWheel: this.handleWheel
        }, h$e(Transition$1, {
          name: "fade-in-transition",
          appear: this.appear
        }, {
          default: () => this.mergedShow ? h$e("div", {
            class: `${clsPrefix}-image-preview-overlay`,
            onClick: () => this.close()
          }) : null
        }), this.showToolbar ? h$e(Transition$1, {
          name: "fade-in-transition",
          appear: this.appear
        }, {
          default: () => {
            if (!this.mergedShow) return null;
            return h$e("div", {
              class: `${clsPrefix}-image-preview-toolbar`
            }, renderToolbar ? renderToolbar({
              nodes: {
                prev: prevNode,
                next: nextNode,
                rotateCounterclockwise: rotateCounterclockwiseNode,
                rotateClockwise: rotateClockwiseNode,
                resizeToOriginalSize: originalSizeNode,
                zoomOut: zoomOutNode,
                zoomIn: zoomInNode,
                download: downloadNode,
                close: closeNode
              }
            }) : h$e(Fragment$1, null, this.onPrev ? h$e(Fragment$1, null, prevNode, nextNode) : null, rotateCounterclockwiseNode, rotateClockwiseNode, originalSizeNode, zoomOutNode, zoomInNode, downloadNode, closeNode));
          }
        }) : null, h$e(Transition$1, {
          name: "fade-in-scale-up-transition",
          onAfterLeave: this.handleAfterLeave,
          appear: this.appear,
          // BUG:
          // onEnter will be called twice, I don't know why
          // Maybe it is a bug of vue
          onEnter: this.syncTransformOrigin,
          onBeforeLeave: this.syncTransformOrigin
        }, {
          default: () => {
            const {
              previewedImgProps = {}
            } = this;
            return withDirectives(h$e("div", {
              class: `${clsPrefix}-image-preview-wrapper`,
              ref: "previewWrapperRef"
            }, h$e("img", Object.assign({}, previewedImgProps, {
              draggable: false,
              onMousedown: this.handlePreviewMousedown,
              onDblclick: this.handlePreviewDblclick,
              class: [`${clsPrefix}-image-preview`, previewedImgProps.class],
              key: this.previewSrc,
              src: this.previewSrc,
              ref: "previewRef",
              onDragstart: this.handleDragStart
            }))), [[vShow, this.mergedShow]]);
          }
        })), [[zindexable, {
          enabled: this.mergedShow
        }]]);
      }
    }));
  }
});

const {computed: computed$a,defineComponent: defineComponent$c,h: h$d,provide: provide$2,ref: ref$4,toRef: toRef$2} = await importShared('vue');
const imageGroupInjectionKey = createInjectionKey('n-image-group');
const imageGroupProps = Object.assign(Object.assign({}, imagePreviewSharedProps), {
  srcList: Array,
  current: Number,
  defaultCurrent: {
    type: Number,
    default: 0
  },
  show: {
    type: Boolean,
    default: undefined
  },
  defaultShow: Boolean,
  onUpdateShow: [Function, Array],
  'onUpdate:show': [Function, Array],
  onUpdateCurrent: [Function, Array],
  'onUpdate:current': [Function, Array]
});
const NImageGroup = defineComponent$c({
  name: 'ImageGroup',
  props: imageGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const groupId = `c${createId()}`;
    const previewInstRef = ref$4(null);
    const uncontrolledShowRef = ref$4(props.defaultShow);
    const controlledShowRef = toRef$2(props, 'show');
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const registeredImageUrlMap = ref$4(new Map());
    const mergedImageUrlMap = computed$a(() => {
      if (props.srcList) {
        const map = new Map();
        props.srcList.forEach((url, index) => {
          map.set(`p${index}`, url);
        });
        return map;
      }
      return registeredImageUrlMap.value;
    });
    const imageIdListRef = computed$a(() => Array.from(mergedImageUrlMap.value.keys()));
    const imageCountGetter = () => imageIdListRef.value.length;
    function registerImageUrl(id, url) {
      if (props.srcList) {
        throwError('image-group', '`n-image` can\'t be placed inside `n-image-group` when image group\'s `src-list` prop is set.');
      }
      const sid = `r${id}`;
      if (!registeredImageUrlMap.value.has(`r${sid}`)) {
        registeredImageUrlMap.value.set(sid, url);
      }
      return function unregisterPreviewUrl() {
        if (!registeredImageUrlMap.value.has(sid)) {
          registeredImageUrlMap.value.delete(sid);
        }
      };
    }
    const uncontrolledCurrentRef = ref$4(props.defaultCurrent);
    const controlledCurrentRef = toRef$2(props, 'current');
    const mergedCurrentRef = useMergedState(controlledCurrentRef, uncontrolledCurrentRef);
    const setCurrentIndex = index => {
      if (index !== mergedCurrentRef.value) {
        const {
          onUpdateCurrent,
          'onUpdate:current': _onUpdateCurrent
        } = props;
        if (onUpdateCurrent) {
          call(onUpdateCurrent, index);
        }
        if (_onUpdateCurrent) {
          call(_onUpdateCurrent, index);
        }
        uncontrolledCurrentRef.value = index;
      }
    };
    const currentId = computed$a(() => imageIdListRef.value[mergedCurrentRef.value]);
    const setCurrentId = nextId => {
      const nextIndex = imageIdListRef.value.indexOf(nextId);
      if (nextIndex !== mergedCurrentRef.value) {
        setCurrentIndex(nextIndex);
      }
    };
    const currentUrl = computed$a(() => mergedImageUrlMap.value.get(currentId.value));
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        'onUpdate:show': _onUpdateShow
      } = props;
      if (onUpdateShow) {
        call(onUpdateShow, value);
      }
      if (_onUpdateShow) {
        call(_onUpdateShow, value);
      }
      uncontrolledShowRef.value = value;
    }
    function onClose() {
      doUpdateShow(false);
    }
    const nextIndex = computed$a(() => {
      const findNext = (start, end) => {
        for (let i = start; i <= end; i++) {
          const id = imageIdListRef.value[i];
          if (mergedImageUrlMap.value.get(id)) {
            return i;
          }
        }
        return undefined;
      };
      const next = findNext(mergedCurrentRef.value + 1, imageCountGetter() - 1);
      return next === undefined ? findNext(0, mergedCurrentRef.value - 1) : next;
    });
    const prevIndex = computed$a(() => {
      const findPrev = (start, end) => {
        for (let i = start; i >= end; i--) {
          const id = imageIdListRef.value[i];
          if (mergedImageUrlMap.value.get(id)) {
            return i;
          }
        }
        return undefined;
      };
      const prev = findPrev(mergedCurrentRef.value - 1, 0);
      return prev === undefined ? findPrev(imageCountGetter() - 1, mergedCurrentRef.value + 1) : prev;
    });
    function go(step) {
      var _a, _b;
      if (step === 1) {
        prevIndex.value !== undefined && setCurrentIndex(nextIndex.value);
        (_a = props.onPreviewNext) === null || _a === void 0 ? void 0 : _a.call(props);
      } else {
        nextIndex.value !== undefined && setCurrentIndex(prevIndex.value);
        (_b = props.onPreviewPrev) === null || _b === void 0 ? void 0 : _b.call(props);
      }
    }
    provide$2(imageGroupInjectionKey, {
      mergedClsPrefixRef,
      registerImageUrl,
      setThumbnailEl: el => {
        var _a;
        (_a = previewInstRef.value) === null || _a === void 0 ? void 0 : _a.setThumbnailEl(el);
      },
      toggleShow: imageId => {
        doUpdateShow(true);
        setCurrentId(imageId);
      },
      groupId,
      renderToolbarRef: toRef$2(props, 'renderToolbar')
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      previewInstRef,
      mergedShow: mergedShowRef,
      src: currentUrl,
      onClose,
      next: () => {
        go(1);
      },
      prev: () => {
        go(-1);
      }
    };
  },
  render() {
    return h$d(NImagePreview, {
      theme: this.theme,
      themeOverrides: this.themeOverrides,
      ref: "previewInstRef",
      onPrev: this.prev,
      onNext: this.next,
      src: this.src,
      show: this.mergedShow,
      showToolbar: this.showToolbar,
      showToolbarTooltip: this.showToolbarTooltip,
      renderToolbar: this.renderToolbar,
      onClose: this.onClose
    }, this.$slots);
  }
});

const {computed: computed$9,defineComponent: defineComponent$b,h: h$c,inject: inject$5,onBeforeUnmount,onMounted,provide: provide$1,ref: ref$3,toRef: toRef$1,watchEffect: watchEffect$2} = await importShared('vue');
const imageProps = Object.assign({
  alt: String,
  height: [String, Number],
  imgProps: Object,
  previewedImgProps: Object,
  lazy: Boolean,
  intersectionObserverOptions: Object,
  objectFit: {
    type: String,
    default: 'fill'
  },
  previewSrc: String,
  fallbackSrc: String,
  width: [String, Number],
  src: String,
  previewDisabled: Boolean,
  loadDescription: String,
  onError: Function,
  onLoad: Function
}, imagePreviewSharedProps);
let uuid = 0;
const NImage = defineComponent$b({
  name: 'Image',
  props: imageProps,
  slots: Object,
  inheritAttrs: false,
  setup(props) {
    const imageRef = ref$3(null);
    const showErrorRef = ref$3(false);
    const previewInstRef = ref$3(null);
    const imageGroupHandle = inject$5(imageGroupInjectionKey, null);
    const {
      mergedClsPrefixRef
    } = imageGroupHandle || useConfig(props);
    const mergedPreviewSrcRef = computed$9(() => {
      return props.previewSrc || props.src;
    });
    const previewShowRef = ref$3(false);
    const imageId = uuid++;
    const showPreview = () => {
      if (props.previewDisabled || showErrorRef.value) return;
      if (imageGroupHandle) {
        imageGroupHandle.setThumbnailEl(imageRef.value);
        imageGroupHandle.toggleShow(`r${imageId}`);
        return;
      }
      const {
        value: previewInst
      } = previewInstRef;
      if (!previewInst) return;
      previewInst.setThumbnailEl(imageRef.value);
      previewShowRef.value = true;
    };
    const exposedMethods = {
      click: () => {
        showPreview();
      },
      showPreview
    };
    const shouldStartLoadingRef = ref$3(!props.lazy);
    onMounted(() => {
      var _a;
      (_a = imageRef.value) === null || _a === void 0 ? void 0 : _a.setAttribute('data-group-id', (imageGroupHandle === null || imageGroupHandle === void 0 ? void 0 : imageGroupHandle.groupId) || '');
    });
    onMounted(() => {
      // Use IntersectionObserver if lazy and intersectionObserverOptions is set
      if (props.lazy && props.intersectionObserverOptions) {
        let unobserve;
        const stopWatchHandle = watchEffect$2(() => {
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
          unobserve = undefined;
          unobserve = observeIntersection(imageRef.value, props.intersectionObserverOptions, shouldStartLoadingRef);
        });
        onBeforeUnmount(() => {
          stopWatchHandle();
          unobserve === null || unobserve === void 0 ? void 0 : unobserve();
        });
      }
    });
    watchEffect$2(() => {
      var _a;
      void (props.src || ((_a = props.imgProps) === null || _a === void 0 ? void 0 : _a.src));
      showErrorRef.value = false;
    });
    watchEffect$2(onInvalidate => {
      var _a;
      const unregister = (_a = imageGroupHandle === null || imageGroupHandle === void 0 ? void 0 : imageGroupHandle.registerImageUrl) === null || _a === void 0 ? void 0 : _a.call(imageGroupHandle, imageId, mergedPreviewSrcRef.value || '');
      onInvalidate(() => {
        unregister === null || unregister === void 0 ? void 0 : unregister();
      });
    });
    function onImgClick(e) {
      var _a, _b;
      exposedMethods.showPreview();
      (_b = (_a = props.imgProps) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    function onPreviewClose() {
      previewShowRef.value = false;
    }
    const loadedRef = ref$3(false);
    provide$1(imageContextKey, {
      previewedImgPropsRef: toRef$1(props, 'previewedImgProps')
    });
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      groupId: imageGroupHandle === null || imageGroupHandle === void 0 ? void 0 : imageGroupHandle.groupId,
      previewInstRef,
      imageRef,
      mergedPreviewSrc: mergedPreviewSrcRef,
      showError: showErrorRef,
      shouldStartLoading: shouldStartLoadingRef,
      loaded: loadedRef,
      mergedOnClick: e => {
        onImgClick(e);
      },
      onPreviewClose,
      mergedOnError: e => {
        if (!shouldStartLoadingRef.value) return;
        showErrorRef.value = true;
        const {
          onError,
          imgProps: {
            onError: imgPropsOnError
          } = {}
        } = props;
        onError === null || onError === void 0 ? void 0 : onError(e);
        imgPropsOnError === null || imgPropsOnError === void 0 ? void 0 : imgPropsOnError(e);
      },
      mergedOnLoad: e => {
        const {
          onLoad,
          imgProps: {
            onLoad: imgPropsOnLoad
          } = {}
        } = props;
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
        imgPropsOnLoad === null || imgPropsOnLoad === void 0 ? void 0 : imgPropsOnLoad(e);
        loadedRef.value = true;
      },
      previewShow: previewShowRef
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      imgProps = {},
      loaded,
      $attrs,
      lazy
    } = this;
    const errorNode = resolveSlot(this.$slots.error, () => []);
    const placeholderNode = (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a);
    const loadSrc = this.src || imgProps.src;
    const imgNode = this.showError && errorNode.length ? errorNode : h$c('img', Object.assign(Object.assign({}, imgProps), {
      ref: 'imageRef',
      width: this.width || imgProps.width,
      height: this.height || imgProps.height,
      src: this.showError ? this.fallbackSrc : lazy && this.intersectionObserverOptions ? this.shouldStartLoading ? loadSrc : undefined : loadSrc,
      alt: this.alt || imgProps.alt,
      'aria-label': this.alt || imgProps.alt,
      onClick: this.mergedOnClick,
      onError: this.mergedOnError,
      onLoad: this.mergedOnLoad,
      // If interseciton observer options is set, do not use native lazy
      loading: isImageSupportNativeLazy && lazy && !this.intersectionObserverOptions ? 'lazy' : 'eager',
      style: [imgProps.style || '', placeholderNode && !loaded ? {
        height: '0',
        width: '0',
        visibility: 'hidden'
      } : '', {
        objectFit: this.objectFit
      }],
      'data-error': this.showError,
      'data-preview-src': this.previewSrc || this.src
    }));
    return h$c("div", Object.assign({}, $attrs, {
      role: "none",
      class: [$attrs.class, `${mergedClsPrefix}-image`, (this.previewDisabled || this.showError) && `${mergedClsPrefix}-image--preview-disabled`]
    }), this.groupId ? imgNode : h$c(NImagePreview, {
      theme: this.theme,
      themeOverrides: this.themeOverrides,
      ref: "previewInstRef",
      showToolbar: this.showToolbar,
      showToolbarTooltip: this.showToolbarTooltip,
      renderToolbar: this.renderToolbar,
      src: this.mergedPreviewSrc,
      show: !this.previewDisabled && this.previewShow,
      onClose: this.onPreviewClose
    }, {
      default: () => imgNode
    }), !loaded && placeholderNode);
  }
});

const {computed: computed$8,defineComponent: defineComponent$a,h: h$b} = await importShared('vue');
const iconMap$1 = {
  success: h$b(SuccessIcon, null),
  error: h$b(ErrorIcon, null),
  warning: h$b(WarningIcon, null),
  info: h$b(InfoIcon, null)
};
const Circle = defineComponent$a({
  name: 'ProgressCircle',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    fillColor: [String, Object],
    railColor: String,
    railStyle: [String, Object],
    percentage: {
      type: Number,
      default: 0
    },
    offsetDegree: {
      type: Number,
      default: 0
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    indicatorTextColor: String,
    unit: String,
    viewBoxWidth: {
      type: Number,
      required: true
    },
    gapDegree: {
      type: Number,
      required: true
    },
    gapOffsetDegree: {
      type: Number,
      default: 0
    }
  },
  setup(props, {
    slots
  }) {
    const gradientIdRef = computed$8(() => {
      const base = 'gradient';
      const {
        fillColor
      } = props;
      if (typeof fillColor === 'object') {
        return `${base}-${murmur2(JSON.stringify(fillColor))}`;
      }
      return base;
    });
    function getPathStyles(percent, offsetDegree, strokeColor, type) {
      const {
        gapDegree,
        viewBoxWidth,
        strokeWidth
      } = props;
      const radius = 50;
      const beginPositionX = 0;
      const beginPositionY = radius;
      const endPositionX = 0;
      const endPositionY = 2 * radius;
      const centerX = 50 + strokeWidth / 2;
      const pathString = `M ${centerX},${centerX} m ${beginPositionX},${beginPositionY}
      a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
      a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
      const len = Math.PI * 2 * radius;
      const pathStyle = {
        stroke: type === 'rail' ? strokeColor : typeof props.fillColor === 'object' ? `url(#${gradientIdRef.value})` : strokeColor,
        strokeDasharray: `${percent / 100 * (len - gapDegree)}px ${viewBoxWidth * 8}px`,
        strokeDashoffset: `-${gapDegree / 2}px`,
        transformOrigin: offsetDegree ? 'center' : undefined,
        transform: offsetDegree ? `rotate(${offsetDegree}deg)` : undefined
      };
      return {
        pathString,
        pathStyle
      };
    }
    const createGradientNode = () => {
      const isGradient = typeof props.fillColor === 'object';
      const from = isGradient ? props.fillColor.stops[0] : '';
      const to = isGradient ? props.fillColor.stops[1] : '';
      return isGradient && h$b("defs", null, h$b("linearGradient", {
        id: gradientIdRef.value,
        x1: "0%",
        y1: "100%",
        x2: "100%",
        y2: "0%"
      }, h$b("stop", {
        offset: "0%",
        "stop-color": from
      }), h$b("stop", {
        offset: "100%",
        "stop-color": to
      })));
    };
    return () => {
      const {
        fillColor,
        railColor,
        strokeWidth,
        offsetDegree,
        status,
        percentage,
        showIndicator,
        indicatorTextColor,
        unit,
        gapOffsetDegree,
        clsPrefix
      } = props;
      const {
        pathString: railPathString,
        pathStyle: railPathStyle
      } = getPathStyles(100, 0, railColor, 'rail');
      const {
        pathString: fillPathString,
        pathStyle: fillPathStyle
      } = getPathStyles(percentage, offsetDegree, fillColor, 'fill');
      const viewBoxSize = 100 + strokeWidth;
      return h$b("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h$b("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h$b("div", {
        class: `${clsPrefix}-progress-graph-circle`,
        style: {
          transform: gapOffsetDegree ? `rotate(${gapOffsetDegree}deg)` : undefined
        }
      }, h$b("svg", {
        viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`
      }, createGradientNode(), h$b("g", null, h$b("path", {
        class: `${clsPrefix}-progress-graph-circle-rail`,
        d: railPathString,
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        fill: "none",
        style: railPathStyle
      })), h$b("g", null, h$b("path", {
        class: [`${clsPrefix}-progress-graph-circle-fill`, percentage === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
        d: fillPathString,
        "stroke-width": strokeWidth,
        "stroke-linecap": "round",
        fill: "none",
        style: fillPathStyle
      }))))), showIndicator ? h$b("div", null, slots.default ? h$b("div", {
        class: `${clsPrefix}-progress-custom-content`,
        role: "none"
      }, slots.default()) : status !== 'default' ? h$b("div", {
        class: `${clsPrefix}-progress-icon`,
        "aria-hidden": true
      }, h$b(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => iconMap$1[status]
      })) : h$b("div", {
        class: `${clsPrefix}-progress-text`,
        style: {
          color: indicatorTextColor
        },
        role: "none"
      }, h$b("span", {
        class: `${clsPrefix}-progress-text__percentage`
      }, percentage), h$b("span", {
        class: `${clsPrefix}-progress-text__unit`
      }, unit))) : null);
    };
  }
});

const {computed: computed$7,defineComponent: defineComponent$9,h: h$a} = await importShared('vue');
const iconMap = {
  success: h$a(SuccessIcon, null),
  error: h$a(ErrorIcon, null),
  warning: h$a(WarningIcon, null),
  info: h$a(InfoIcon, null)
};
const Line = defineComponent$9({
  name: 'ProgressLine',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      default: 0
    },
    railColor: String,
    railStyle: [String, Object],
    fillColor: [String, Object],
    status: {
      type: String,
      required: true
    },
    indicatorPlacement: {
      type: String,
      required: true
    },
    indicatorTextColor: String,
    unit: {
      type: String,
      default: '%'
    },
    processing: {
      type: Boolean,
      required: true
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    height: [String, Number],
    railBorderRadius: [String, Number],
    fillBorderRadius: [String, Number]
  },
  setup(props, {
    slots
  }) {
    const styleHeightRef = computed$7(() => {
      return formatLength(props.height);
    });
    const styleFillColorRef = computed$7(() => {
      var _a, _b;
      return typeof props.fillColor === 'object' ? `linear-gradient(to right, ${(_a = props.fillColor) === null || _a === void 0 ? void 0 : _a.stops[0]} , ${(_b = props.fillColor) === null || _b === void 0 ? void 0 : _b.stops[1]})` : props.fillColor;
    });
    const styleRailBorderRadiusRef = computed$7(() => {
      if (props.railBorderRadius !== undefined) {
        return formatLength(props.railBorderRadius);
      }
      if (props.height !== undefined) {
        return formatLength(props.height, {
          c: 0.5
        });
      }
      return '';
    });
    const styleFillBorderRadiusRef = computed$7(() => {
      if (props.fillBorderRadius !== undefined) {
        return formatLength(props.fillBorderRadius);
      }
      if (props.railBorderRadius !== undefined) {
        return formatLength(props.railBorderRadius);
      }
      if (props.height !== undefined) {
        return formatLength(props.height, {
          c: 0.5
        });
      }
      return '';
    });
    return () => {
      const {
        indicatorPlacement,
        railColor,
        railStyle,
        percentage,
        unit,
        indicatorTextColor,
        status,
        showIndicator,
        processing,
        clsPrefix
      } = props;
      return h$a("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h$a("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h$a("div", {
        class: [`${clsPrefix}-progress-graph-line`, {
          [`${clsPrefix}-progress-graph-line--indicator-${indicatorPlacement}`]: true
        }]
      }, h$a("div", {
        class: `${clsPrefix}-progress-graph-line-rail`,
        style: [{
          backgroundColor: railColor,
          height: styleHeightRef.value,
          borderRadius: styleRailBorderRadiusRef.value
        }, railStyle]
      }, h$a("div", {
        class: [`${clsPrefix}-progress-graph-line-fill`, processing && `${clsPrefix}-progress-graph-line-fill--processing`],
        style: {
          maxWidth: `${props.percentage}%`,
          background: styleFillColorRef.value,
          height: styleHeightRef.value,
          lineHeight: styleHeightRef.value,
          borderRadius: styleFillBorderRadiusRef.value
        }
      }, indicatorPlacement === 'inside' ? h$a("div", {
        class: `${clsPrefix}-progress-graph-line-indicator`,
        style: {
          color: indicatorTextColor
        }
      }, slots.default ? slots.default() : `${percentage}${unit}`) : null)))), showIndicator && indicatorPlacement === 'outside' ? h$a("div", null, slots.default ? h$a("div", {
        class: `${clsPrefix}-progress-custom-content`,
        style: {
          color: indicatorTextColor
        },
        role: "none"
      }, slots.default()) : status === 'default' ? h$a("div", {
        role: "none",
        class: `${clsPrefix}-progress-icon ${clsPrefix}-progress-icon--as-text`,
        style: {
          color: indicatorTextColor
        }
      }, percentage, unit) : h$a("div", {
        class: `${clsPrefix}-progress-icon`,
        "aria-hidden": true
      }, h$a(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => iconMap[status]
      }))) : null);
    };
  }
});

const {computed: computed$6,defineComponent: defineComponent$8,h: h$9} = await importShared('vue');

function circlePath(r, sw, vw = 100) {
  return `m ${vw / 2} ${vw / 2 - r} a ${r} ${r} 0 1 1 0 ${2 * r} a ${r} ${r} 0 1 1 0 -${2 * r}`;
}
const MultipleCircle = defineComponent$8({
  name: 'ProgressMultipleCircle',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    viewBoxWidth: {
      type: Number,
      required: true
    },
    percentage: {
      type: Array,
      default: [0]
    },
    strokeWidth: {
      type: Number,
      required: true
    },
    circleGap: {
      type: Number,
      required: true
    },
    showIndicator: {
      type: Boolean,
      required: true
    },
    fillColor: {
      type: Array,
      default: () => []
    },
    railColor: {
      type: Array,
      default: () => []
    },
    railStyle: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {
    slots
  }) {
    const strokeDasharrayRef = computed$6(() => {
      const strokeDasharrays = props.percentage.map((v, i) => `${Math.PI * v / 100 * (props.viewBoxWidth / 2 - props.strokeWidth / 2 * (1 + 2 * i) - props.circleGap * i) * 2}, ${props.viewBoxWidth * 8}`);
      return strokeDasharrays;
    });
    const createGradientNode = (p, index) => {
      const item = props.fillColor[index];
      const form = typeof item === 'object' ? item.stops[0] : '';
      const to = typeof item === 'object' ? item.stops[1] : '';
      return typeof props.fillColor[index] === 'object' && h$9("linearGradient", {
        id: `gradient-${index}`,
        x1: "100%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
      }, h$9("stop", {
        offset: "0%",
        "stop-color": form
      }), h$9("stop", {
        offset: "100%",
        "stop-color": to
      }));
    };
    return () => {
      const {
        viewBoxWidth,
        strokeWidth,
        circleGap,
        showIndicator,
        fillColor,
        railColor,
        railStyle,
        percentage,
        clsPrefix
      } = props;
      return h$9("div", {
        class: `${clsPrefix}-progress-content`,
        role: "none"
      }, h$9("div", {
        class: `${clsPrefix}-progress-graph`,
        "aria-hidden": true
      }, h$9("div", {
        class: `${clsPrefix}-progress-graph-circle`
      }, h$9("svg", {
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`
      }, h$9("defs", null, percentage.map((p, index) => {
        return createGradientNode(p, index);
      })), percentage.map((p, index) => {
        return h$9("g", {
          key: index
        }, h$9("path", {
          class: `${clsPrefix}-progress-graph-circle-rail`,
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: [{
            strokeDashoffset: 0,
            stroke: railColor[index]
          }, railStyle[index]]
        }), h$9("path", {
          class: [`${clsPrefix}-progress-graph-circle-fill`, p === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
          d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
          "stroke-width": strokeWidth,
          "stroke-linecap": "round",
          fill: "none",
          style: {
            strokeDasharray: strokeDasharrayRef.value[index],
            strokeDashoffset: 0,
            stroke: typeof fillColor[index] === 'object' ? `url(#gradient-${index})` : fillColor[index]
          }
        }));
      })))), showIndicator && slots.default ? h$9("div", null, h$9("div", {
        class: `${clsPrefix}-progress-text`
      }, slots.default())) : null);
    };
  }
});

// vars
// --n-bezier
// --n-fill-color
// --n-font-size
// --n-font-size-circle
// --n-font-weight-circle
// --n-icon-color
// --n-icon-size-circle
// --n-icon-size-line
// --n-line-bg-processing
// --n-rail-color
// --n-rail-height
// --n-text-color-circle
// --n-text-color-line-inner
// --n-text-color-line-outer
const style$2 = c([cB('progress', {
  display: 'inline-block'
}, [cB('progress-icon', `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), cM('line', `
 width: 100%;
 display: block;
 `, [cB('progress-content', `
 display: flex;
 align-items: center;
 `, [cB('progress-graph', {
  flex: 1
})]), cB('progress-custom-content', {
  marginLeft: '14px'
}), cB('progress-icon', `
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `, [cM('as-text', `
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]), cM('circle, dashboard', {
  width: '120px'
}, [cB('progress-custom-content', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cB('progress-text', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `), cB('progress-icon', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]), cM('multiple-circle', `
 width: 200px;
 color: inherit;
 `, [cB('progress-text', `
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]), cB('progress-content', {
  position: 'relative'
}), cB('progress-graph', {
  position: 'relative'
}, [cB('progress-graph-circle', [c('svg', {
  verticalAlign: 'bottom'
}), cB('progress-graph-circle-fill', `
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `, [cM('empty', {
  opacity: 0
})]), cB('progress-graph-circle-rail', `
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]), cB('progress-graph-line', [cM('indicator-inside', [cB('progress-graph-line-rail', `
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `, [cB('progress-graph-line-fill', `
 height: inherit;
 border-radius: 10px;
 `), cB('progress-graph-line-indicator', `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]), cM('indicator-inside-label', `
 height: 16px;
 display: flex;
 align-items: center;
 `, [cB('progress-graph-line-rail', `
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `), cB('progress-graph-line-indicator', `
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), cB('progress-graph-line-rail', `
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `, [cB('progress-graph-line-fill', `
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `, [cM('processing', [c('&::after', `
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]), c('@keyframes progress-processing-animation', `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);

const {computed: computed$5,defineComponent: defineComponent$7,h: h$8} = await importShared('vue');
const progressProps = Object.assign(Object.assign({}, useTheme.props), {
  processing: Boolean,
  type: {
    type: String,
    default: 'line'
  },
  gapDegree: Number,
  gapOffsetDegree: Number,
  status: {
    type: String,
    default: 'default'
  },
  railColor: [String, Array],
  railStyle: [String, Array],
  color: [String, Array, Object],
  viewBoxWidth: {
    type: Number,
    default: 100
  },
  strokeWidth: {
    type: Number,
    default: 7
  },
  percentage: [Number, Array],
  unit: {
    type: String,
    default: '%'
  },
  showIndicator: {
    type: Boolean,
    default: true
  },
  indicatorPosition: {
    type: String,
    default: 'outside'
  },
  indicatorPlacement: {
    type: String,
    default: 'outside'
  },
  indicatorTextColor: String,
  circleGap: {
    type: Number,
    default: 1
  },
  height: Number,
  borderRadius: [String, Number],
  fillBorderRadius: [String, Number],
  offsetDegree: Number
});
const NProgress = defineComponent$7({
  name: 'Progress',
  props: progressProps,
  setup(props) {
    const mergedIndicatorPlacementRef = computed$5(() => {
      return props.indicatorPlacement || props.indicatorPosition;
    });
    const gapDeg = computed$5(() => {
      if (props.gapDegree || props.gapDegree === 0) {
        return props.gapDegree;
      }
      if (props.type === 'dashboard') {
        return 75;
      }
      return undefined;
    });
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme('Progress', '-progress', style$2, progressLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$5(() => {
      const {
        status
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          fontSizeCircle,
          railColor,
          railHeight,
          iconSizeCircle,
          iconSizeLine,
          textColorCircle,
          textColorLineInner,
          textColorLineOuter,
          lineBgProcessing,
          fontWeightCircle,
          [createKey('iconColor', status)]: iconColor,
          [createKey('fillColor', status)]: fillColor
        }
      } = themeRef.value;
      return {
        '--n-bezier': cubicBezierEaseInOut,
        '--n-fill-color': fillColor,
        '--n-font-size': fontSize,
        '--n-font-size-circle': fontSizeCircle,
        '--n-font-weight-circle': fontWeightCircle,
        '--n-icon-color': iconColor,
        '--n-icon-size-circle': iconSizeCircle,
        '--n-icon-size-line': iconSizeLine,
        '--n-line-bg-processing': lineBgProcessing,
        '--n-rail-color': railColor,
        '--n-rail-height': railHeight,
        '--n-text-color-circle': textColorCircle,
        '--n-text-color-line-inner': textColorLineInner,
        '--n-text-color-line-outer': textColorLineOuter
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass('progress', computed$5(() => props.status[0]), cssVarsRef, props) : undefined;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedIndicatorPlacement: mergedIndicatorPlacementRef,
      gapDeg,
      cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    // it's ok to expand all prop here since no slots' deps
    const {
      type,
      cssVars,
      indicatorTextColor,
      showIndicator,
      status,
      railColor,
      railStyle,
      color,
      percentage,
      viewBoxWidth,
      strokeWidth,
      mergedIndicatorPlacement,
      unit,
      borderRadius,
      fillBorderRadius,
      height,
      processing,
      circleGap,
      mergedClsPrefix,
      gapDeg,
      gapOffsetDegree,
      themeClass,
      $slots,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h$8("div", {
      class: [themeClass, `${mergedClsPrefix}-progress`, `${mergedClsPrefix}-progress--${type}`, `${mergedClsPrefix}-progress--${status}`],
      style: cssVars,
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percentage,
      role: type === 'circle' || type === 'line' || type === 'dashboard' ? 'progressbar' : 'none'
    }, type === 'circle' || type === 'dashboard' ? h$8(Circle, {
      clsPrefix: mergedClsPrefix,
      status: status,
      showIndicator: showIndicator,
      indicatorTextColor: indicatorTextColor,
      railColor: railColor,
      fillColor: color,
      railStyle: railStyle,
      offsetDegree: this.offsetDegree,
      percentage: percentage,
      viewBoxWidth: viewBoxWidth,
      strokeWidth: strokeWidth,
      gapDegree: gapDeg === undefined ? type === 'dashboard' ? 75 : 0 : gapDeg,
      gapOffsetDegree: gapOffsetDegree,
      unit: unit
    }, $slots) : type === 'line' ? h$8(Line, {
      clsPrefix: mergedClsPrefix,
      status: status,
      showIndicator: showIndicator,
      indicatorTextColor: indicatorTextColor,
      railColor: railColor,
      fillColor: color,
      railStyle: railStyle,
      percentage: percentage,
      processing: processing,
      indicatorPlacement: mergedIndicatorPlacement,
      unit: unit,
      fillBorderRadius: fillBorderRadius,
      railBorderRadius: borderRadius,
      height: height
    }, $slots) : type === 'multiple-circle' ? h$8(MultipleCircle, {
      clsPrefix: mergedClsPrefix,
      strokeWidth: strokeWidth,
      railColor: railColor,
      fillColor: color,
      railStyle: railStyle,
      viewBoxWidth: viewBoxWidth,
      percentage: percentage,
      showIndicator: showIndicator,
      circleGap: circleGap
    }, $slots) : null);
  }
});

// vars:
// --n-bezier
// --n-opacity-spinning
// --n-size
// --n-color
// --n-text-color
// --n-font-size
const style$1 = c([c('@keyframes spin-rotate', `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB('spin-container', `
 position: relative;
 `, [cB('spin-body', `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB('spin-body', `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB('spin', `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM('rotate', `
 animation: spin-rotate 2s linear infinite;
 `)]), cB('spin-description', `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB('spin-content', `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM('spinning', `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);

const {computed: computed$4,defineComponent: defineComponent$6,h: h$7,ref: ref$2,Transition,watchEffect: watchEffect$1} = await importShared('vue');
const STROKE_WIDTH = {
  small: 20,
  medium: 18,
  large: 16
};
const spinProps = Object.assign(Object.assign({}, useTheme.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: true
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: true
  },
  spinning: {
    type: Boolean,
    validator: () => {
      return true;
    },
    default: void 0
  },
  delay: Number
});
const NSpin = defineComponent$6({
  name: "Spin",
  props: spinProps,
  slots: Object,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Spin", "-spin", style$1, spinLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed$4(() => {
      const {
        size: spinSize
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self
      } = themeRef.value;
      const {
        opacitySpinning,
        color,
        textColor
      } = self;
      const size = typeof spinSize === "number" ? pxfy(spinSize) : self[createKey("size", spinSize)];
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-opacity-spinning": opacitySpinning,
        "--n-size": size,
        "--n-color": color,
        "--n-text-color": textColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("spin", computed$4(() => {
      const {
        size
      } = props;
      return typeof size === "number" ? String(size) : size[0];
    }), cssVarsRef, props) : void 0;
    const compitableShow = useCompitable(props, ["spinning", "show"]);
    const activeRef = ref$2(false);
    watchEffect$1((onCleanup) => {
      let timerId;
      if (compitableShow.value) {
        const {
          delay
        } = props;
        if (delay) {
          timerId = window.setTimeout(() => {
            activeRef.value = true;
          }, delay);
          onCleanup(() => {
            clearTimeout(timerId);
          });
          return;
        }
      }
      activeRef.value = compitableShow.value;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedStrokeWidth: computed$4(() => {
        const {
          strokeWidth
        } = props;
        if (strokeWidth !== void 0) return strokeWidth;
        const {
          size
        } = props;
        return STROKE_WIDTH[typeof size === "number" ? "medium" : size];
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b;
    const {
      $slots,
      mergedClsPrefix,
      description
    } = this;
    const rotate = $slots.icon && this.rotate;
    const descriptionNode = (description || $slots.description) && h$7("div", {
      class: `${mergedClsPrefix}-spin-description`
    }, description || ((_a = $slots.description) === null || _a === void 0 ? void 0 : _a.call($slots)));
    const icon = $slots.icon ? h$7("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h$7("div", {
      class: [`${mergedClsPrefix}-spin`, rotate && `${mergedClsPrefix}-spin--rotate`],
      style: $slots.default ? "" : this.cssVars
    }, $slots.icon()), descriptionNode) : h$7("div", {
      class: [`${mergedClsPrefix}-spin-body`, this.themeClass]
    }, h$7(NBaseLoading, {
      clsPrefix: mergedClsPrefix,
      style: $slots.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${mergedClsPrefix}-spin`
    }), descriptionNode);
    (_b = this.onRender) === null || _b === void 0 ? void 0 : _b.call(this);
    return $slots.default ? h$7("div", {
      class: [`${mergedClsPrefix}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h$7("div", {
      class: [`${mergedClsPrefix}-spin-content`, this.active && `${mergedClsPrefix}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, $slots), h$7(Transition, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? icon : null
    })) : icon;
  }
});

const uploadInjectionKey = createInjectionKey('n-upload');

const style = c([cB('upload', 'width: 100%;', [cM('dragger-inside', [cB('upload-trigger', `
 display: block;
 `)]), cM('drag-over', [cB('upload-dragger', `
 border: var(--n-dragger-border-hover);
 `)])]), cB('upload-dragger', `
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `, [c('&:hover', `
 border: var(--n-dragger-border-hover);
 `), cM('disabled', `
 cursor: not-allowed;
 `)]), cB('upload-trigger', `
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c('+', [cB('upload-file-list', 'margin-top: 8px;')]), cM('disabled', `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `), cM('image-card', `
 width: 96px;
 height: 96px;
 `, [cB('base-icon', `
 font-size: 24px;
 `), cB('upload-dragger', `
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]), cB('upload-file-list', `
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c('a, img', 'outline: none;'), cM('disabled', `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `, [cB('upload-file', 'cursor: not-allowed;')]), cM('grid', `
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `), cB('upload-file', `
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `, [fadeInHeightExpandTransition(), cB('progress', [fadeInHeightExpandTransition({
  foldPadding: true
})]), c('&:hover', `
 background-color: var(--n-item-color-hover);
 `, [cB('upload-file-info', [cE('action', `
 opacity: 1;
 `)])]), cM('image-type', `
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `, [cB('upload-file-info', `
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `, [cB('progress', `
 padding: 2px 0;
 margin-bottom: 0;
 `), cE('name', `
 padding: 0 8px;
 `), cE('thumbnail', `
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `, [c('img', `
 width: 100%;
 `)])])]), cM('text-type', [cB('progress', `
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]), cM('image-card-type', `
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `, [cB('progress', `
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `), cB('upload-file-info', `
 padding: 0;
 width: 100%;
 height: 100%;
 `, [cE('thumbnail', `
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `, [c('img', `
 width: 100%;
 `)])]), c('&::before', `
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `), c('&:hover', [c('&::before', 'opacity: 1;'), cB('upload-file-info', [cE('thumbnail', 'opacity: .12;')])])]), cM('error-status', [c('&:hover', `
 background-color: var(--n-item-color-hover-error);
 `), cB('upload-file-info', [cE('name', 'color: var(--n-item-text-color-error);'), cE('thumbnail', 'color: var(--n-item-text-color-error);')]), cM('image-card-type', `
 border: var(--n-item-border-image-card-error);
 `)]), cM('with-url', `
 cursor: pointer;
 `, [cB('upload-file-info', [cE('name', `
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `, [c('a', `
 text-decoration: underline;
 `)])])]), cB('upload-file-info', `
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `, [cE('thumbnail', `
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `, [cB('base-icon', `
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]), cE('action', `
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `, [cB('button', [c('&:not(:last-child)', {
  marginRight: '4px'
}), cB('base-icon', [c('svg', [iconSwitchTransition()])])]), cM('image-type', `
 position: relative;
 max-width: 80px;
 width: auto;
 `), cM('image-card-type', `
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]), cE('name', `
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `, [c('a', `
 color: inherit;
 text-decoration: underline;
 `)])])])]), cB('upload-file-input', `
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);

const {defineComponent: defineComponent$5,h: h$6,inject: inject$4} = await importShared('vue');
const uploadDraggerKey = '__UPLOAD_DRAGGER__';
const NUploadDragger = defineComponent$5({
  name: 'UploadDragger',
  [uploadDraggerKey]: true,
  setup(_, {
    slots
  }) {
    const NUpload = inject$4(uploadInjectionKey, null);
    if (!NUpload) {
      throwError('upload-dragger', '`n-upload-dragger` must be placed inside `n-upload`.');
    }
    return () => {
      const {
        mergedClsPrefixRef: {
          value: mergedClsPrefix
        },
        mergedDisabledRef: {
          value: mergedDisabled
        },
        maxReachedRef: {
          value: maxReached
        }
      } = NUpload;
      return h$6("div", {
        class: [`${mergedClsPrefix}-upload-dragger`, (mergedDisabled || maxReached) && `${mergedClsPrefix}-upload-dragger--disabled`]
      }, slots);
    };
  }
});

const {h: h$5} = await importShared('vue');

/**
 * Since image is too large compared with normal icons, we keep it inside upload
 * now.
 */
function renderImageIcon() {
  return h$5("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28"
  }, h$5("g", {
    fill: "none"
  }, h$5("path", {
    d: "M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",
    fill: "currentColor"
  })));
}
function renderDocumentIcon() {
  return h$5("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 28 28"
  }, h$5("g", {
    fill: "none"
  }, h$5("path", {
    d: "M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",
    fill: "currentColor"
  })));
}

const {defineComponent: defineComponent$4,h: h$4,inject: inject$3} = await importShared('vue');
const NUploadProgress = defineComponent$4({
  name: 'UploadProgress',
  props: {
    show: Boolean,
    percentage: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  setup() {
    const NUpload = inject$3(uploadInjectionKey);
    return {
      mergedTheme: NUpload.mergedThemeRef
    };
  },
  render() {
    return h$4(NFadeInExpandTransition, null, {
      default: () => this.show ? h$4(NProgress, {
        type: "line",
        showIndicator: false,
        percentage: this.percentage,
        status: this.status,
        height: 2,
        theme: this.mergedTheme.peers.Progress,
        themeOverrides: this.mergedTheme.peerOverrides.Progress
      }) : null
    });
  }
});

var __awaiter$2 = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function isImageFileType(type) {
  return type.includes('image/');
}
function getExtname(url = '') {
  const temp = url.split('/');
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
}
const imageExtensionRegex = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i;
// Do not need File object
const isImageFile = file => {
  if (file.type) {
    return isImageFileType(file.type);
  }
  const fileNameExtension = getExtname(file.name || '');
  if (imageExtensionRegex.test(fileNameExtension)) {
    return true;
  }
  const url = file.thumbnailUrl || file.url || '';
  const urlExtension = getExtname(url);
  if (/^data:image\//.test(url) || imageExtensionRegex.test(urlExtension)) {
    return true;
  }
  return false;
};
function createImageDataUrl(file) {
  return __awaiter$2(this, void 0, void 0, function* () {
    return yield new Promise(resolve => {
      if (!file.type || !isImageFileType(file.type)) {
        resolve('');
        return;
      }
      resolve(window.URL.createObjectURL(file));
    });
  });
}
const environmentSupportFile = isBrowser && window.FileReader && window.File;
function isFileSystemDirectoryEntry(item) {
  return item.isDirectory;
}
function isFileSystemFileEntry(item) {
  return item.isFile;
}
function getFilesFromEntries(entries, directory) {
  return __awaiter$2(this, void 0, void 0, function* () {
    const fileAndEntries = [];
    function _getFilesFromEntries(entries) {
      return __awaiter$2(this, void 0, void 0, function* () {
        for (const entry of entries) {
          if (!entry) continue;
          if (directory && isFileSystemDirectoryEntry(entry)) {
            const directoryReader = entry.createReader();
            let allEntries = [];
            let readEntries;
            try {
              do {
                readEntries = yield new Promise((resolve, reject) => {
                  directoryReader.readEntries(resolve, reject);
                });
                allEntries = allEntries.concat(readEntries);
              } while (readEntries.length > 0);
            } catch (e) {
              error('upload', 'error happens when handling directory upload', e);
            }
            yield _getFilesFromEntries(allEntries);
          } else if (isFileSystemFileEntry(entry)) {
            try {
              const file = yield new Promise((resolve, reject) => {
                entry.file(resolve, reject);
              });
              fileAndEntries.push({
                file,
                entry,
                source: 'dnd'
              });
            } catch (e) {
              error('upload', 'error happens when handling file upload', e);
            }
          }
        }
      });
    }
    yield _getFilesFromEntries(entries);
    return fileAndEntries;
  });
}
function createSettledFileInfo(fileInfo) {
  const {
    id,
    name,
    percentage,
    status,
    url,
    file,
    thumbnailUrl,
    type,
    fullPath,
    batchId
  } = fileInfo;
  return {
    id,
    name,
    percentage: percentage !== null && percentage !== void 0 ? percentage : null,
    status,
    url: url !== null && url !== void 0 ? url : null,
    file: file !== null && file !== void 0 ? file : null,
    thumbnailUrl: thumbnailUrl !== null && thumbnailUrl !== void 0 ? thumbnailUrl : null,
    type: type !== null && type !== void 0 ? type : null,
    fullPath: fullPath !== null && fullPath !== void 0 ? fullPath : null,
    batchId: batchId !== null && batchId !== void 0 ? batchId : null
  };
}
/**
 * This is a rather simple version. I may fix it later to make it more accurate.
 * I've looked at https://github.com/broofa/mime, however it doesn't has a esm
 * version, so I can't simply use it.
 */
function matchType(name, mimeType, accept) {
  name = name.toLowerCase();
  mimeType = mimeType.toLocaleLowerCase();
  accept = accept.toLocaleLowerCase();
  const acceptAtoms = accept.split(',').map(acceptAtom => acceptAtom.trim()).filter(Boolean);
  return acceptAtoms.some(acceptAtom => {
    if (acceptAtom.startsWith('.')) {
      // suffix
      if (name.endsWith(acceptAtom)) return true;
    } else if (acceptAtom.includes('/')) {
      // mime type
      const [type, subtype] = mimeType.split('/');
      const [acceptType, acceptSubtype] = acceptAtom.split('/');
      if (acceptType === '*' || type && acceptType && acceptType === type) {
        if (acceptSubtype === '*' || subtype && acceptSubtype && acceptSubtype === subtype) {
          return true;
        }
      }
    } else {
      // invalid type
      return true;
    }
    return false;
  });
}

var __awaiter$1 = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const {computed: computed$3,defineComponent: defineComponent$3,h: h$3,inject: inject$2,ref: ref$1,watchEffect} = await importShared('vue');
const buttonThemeOverrides = {
  paddingMedium: '0 3px',
  heightMedium: '24px',
  iconSizeMedium: '18px'
};
const NUploadFile = defineComponent$3({
  name: 'UploadFile',
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    file: {
      type: Object,
      required: true
    },
    listType: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const NUpload = inject$2(uploadInjectionKey);
    const imageRef = ref$1(null);
    const thumbnailUrlRef = ref$1('');
    const progressStatusRef = computed$3(() => {
      const {
        file
      } = props;
      if (file.status === 'finished') return 'success';
      if (file.status === 'error') return 'error';
      return 'info';
    });
    const buttonTypeRef = computed$3(() => {
      const {
        file
      } = props;
      if (file.status === 'error') return 'error';
      return undefined;
    });
    const showProgressRef = computed$3(() => {
      const {
        file
      } = props;
      return file.status === 'uploading';
    });
    const showCancelButtonRef = computed$3(() => {
      if (!NUpload.showCancelButtonRef.value) return false;
      const {
        file
      } = props;
      return ['uploading', 'pending', 'error'].includes(file.status);
    });
    const showRemoveButtonRef = computed$3(() => {
      if (!NUpload.showRemoveButtonRef.value) return false;
      const {
        file
      } = props;
      return ['finished'].includes(file.status);
    });
    const showDownloadButtonRef = computed$3(() => {
      if (!NUpload.showDownloadButtonRef.value) return false;
      const {
        file
      } = props;
      return ['finished'].includes(file.status);
    });
    const showRetryButtonRef = computed$3(() => {
      if (!NUpload.showRetryButtonRef.value) return false;
      const {
        file
      } = props;
      return ['error'].includes(file.status);
    });
    const mergedThumbnailUrlRef = useMemo(() => {
      return thumbnailUrlRef.value || props.file.thumbnailUrl || props.file.url;
    });
    const showPreviewButtonRef = computed$3(() => {
      if (!NUpload.showPreviewButtonRef.value) return false;
      const {
        file: {
          status
        },
        listType
      } = props;
      return ['finished'].includes(status) && mergedThumbnailUrlRef.value && listType === 'image-card';
    });
    function handleRetryClick() {
      return __awaiter$1(this, void 0, void 0, function* () {
        const onRetry = NUpload.onRetryRef.value;
        if (onRetry) {
          const onRetryReturn = yield onRetry({
            file: props.file
          });
          if (onRetryReturn === false) {
            return;
          }
        }
        NUpload.submit(props.file.id);
      });
    }
    function handleRemoveOrCancelClick(e) {
      e.preventDefault();
      const {
        file
      } = props;
      if (['finished', 'pending', 'error'].includes(file.status)) {
        handleRemove(file);
      } else if (['uploading'].includes(file.status)) {
        handleAbort(file);
      } else {
        warn('upload', 'The button clicked type is unknown.');
      }
    }
    function handleDownloadClick(e) {
      e.preventDefault();
      handleDownload(props.file);
    }
    function handleRemove(file) {
      const {
        xhrMap,
        doChange,
        onRemoveRef: {
          value: onRemove
        },
        mergedFileListRef: {
          value: mergedFileList
        }
      } = NUpload;
      void Promise.resolve(onRemove ? onRemove({
        file: Object.assign({}, file),
        fileList: mergedFileList,
        index: props.index
      }) : true).then(result => {
        if (result === false) return;
        const fileAfterChange = Object.assign({}, file, {
          status: 'removed'
        });
        xhrMap.delete(file.id);
        doChange(fileAfterChange, undefined, {
          remove: true
        });
      });
    }
    function handleDownload(file) {
      const {
        onDownloadRef: {
          value: onDownload
        },
        customDownloadRef: {
          value: customDownload
        }
      } = NUpload;
      void Promise.resolve(onDownload ? onDownload(Object.assign({}, file)) : true).then(res => {
        if (res !== false) {
          if (customDownload) {
            customDownload(Object.assign({}, file));
          } else {
            download(file.url, file.name);
          }
        }
      });
    }
    function handleAbort(file) {
      const {
        xhrMap
      } = NUpload;
      const xhr = xhrMap.get(file.id);
      xhr === null || xhr === void 0 ? void 0 : xhr.abort();
      handleRemove(Object.assign({}, file));
    }
    function handlePreviewClick(e) {
      const {
        onPreviewRef: {
          value: onPreview
        }
      } = NUpload;
      if (onPreview) {
        onPreview(props.file, {
          event: e
        });
      } else if (props.listType === 'image-card') {
        const {
          value
        } = imageRef;
        if (!value) return;
        value.showPreview();
      }
    }
    const deriveFileThumbnailUrl = () => __awaiter$1(this, void 0, void 0, function* () {
      const {
        listType
      } = props;
      if (listType !== 'image' && listType !== 'image-card') {
        return;
      }
      if (NUpload.shouldUseThumbnailUrlRef.value(props.file)) {
        thumbnailUrlRef.value = yield NUpload.getFileThumbnailUrlResolver(props.file);
      }
    });
    watchEffect(() => {
      void deriveFileThumbnailUrl();
    });
    return {
      mergedTheme: NUpload.mergedThemeRef,
      progressStatus: progressStatusRef,
      buttonType: buttonTypeRef,
      showProgress: showProgressRef,
      disabled: NUpload.mergedDisabledRef,
      showCancelButton: showCancelButtonRef,
      showRemoveButton: showRemoveButtonRef,
      showDownloadButton: showDownloadButtonRef,
      showRetryButton: showRetryButtonRef,
      showPreviewButton: showPreviewButtonRef,
      mergedThumbnailUrl: mergedThumbnailUrlRef,
      shouldUseThumbnailUrl: NUpload.shouldUseThumbnailUrlRef,
      renderIcon: NUpload.renderIconRef,
      imageRef,
      handleRemoveOrCancelClick,
      handleDownloadClick,
      handleRetryClick,
      handlePreviewClick
    };
  },
  render() {
    const {
      clsPrefix,
      mergedTheme,
      listType,
      file,
      renderIcon
    } = this;
    // if there is text list type, show file icon
    let icon;
    const isImageType = listType === 'image';
    const isImageCardType = listType === 'image-card';
    if (isImageType || isImageCardType) {
      icon = !this.shouldUseThumbnailUrl(file) || !this.mergedThumbnailUrl ? h$3("span", {
        class: `${clsPrefix}-upload-file-info__thumbnail`
      }, renderIcon ? renderIcon(file) : isImageFile(file) ? h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: renderImageIcon
      }) : h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: renderDocumentIcon
      })) : h$3("a", {
        rel: "noopener noreferer",
        target: "_blank",
        href: file.url || undefined,
        class: `${clsPrefix}-upload-file-info__thumbnail`,
        onClick: this.handlePreviewClick
      }, listType === 'image-card' ? h$3(NImage, {
        src: this.mergedThumbnailUrl || undefined,
        previewSrc: file.url || undefined,
        alt: file.name,
        ref: "imageRef"
      }) : h$3("img", {
        src: this.mergedThumbnailUrl || undefined,
        alt: file.name
      }));
    } else {
      icon = h$3("span", {
        class: `${clsPrefix}-upload-file-info__thumbnail`
      }, renderIcon ? renderIcon(file) : h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => h$3(AttachIcon, null)
      }));
    }
    const progress = h$3(NUploadProgress, {
      show: this.showProgress,
      percentage: file.percentage || 0,
      status: this.progressStatus
    });
    const showName = listType === 'text' || listType === 'image';
    return h$3("div", {
      class: [`${clsPrefix}-upload-file`, `${clsPrefix}-upload-file--${this.progressStatus}-status`, file.url && file.status !== 'error' && listType !== 'image-card' && `${clsPrefix}-upload-file--with-url`, `${clsPrefix}-upload-file--${listType}-type`]
    }, h$3("div", {
      class: `${clsPrefix}-upload-file-info`
    }, icon, h$3("div", {
      class: `${clsPrefix}-upload-file-info__name`
    }, showName && (file.url && file.status !== 'error' ? h$3("a", {
      rel: "noopener noreferer",
      target: "_blank",
      href: file.url || undefined,
      onClick: this.handlePreviewClick
    }, file.name) : h$3("span", {
      onClick: this.handlePreviewClick
    }, file.name)), isImageType && progress), h$3("div", {
      class: [`${clsPrefix}-upload-file-info__action`, `${clsPrefix}-upload-file-info__action--${listType}-type`]
    }, this.showPreviewButton ? h$3(Button, {
      key: "preview",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handlePreviewClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => h$3(EyeIcon, null)
      })
    }) : null, (this.showRemoveButton || this.showCancelButton) && !this.disabled && h$3(Button, {
      key: "cancelOrTrash",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      quaternary: true,
      builtinThemeOverrides: buttonThemeOverrides,
      type: this.buttonType,
      onClick: this.handleRemoveOrCancelClick
    }, {
      icon: () => h$3(NIconSwitchTransition, null, {
        default: () => this.showRemoveButton ? h$3(NBaseIcon, {
          clsPrefix: clsPrefix,
          key: "trash"
        }, {
          default: () => h$3(TrashIcon, null)
        }) : h$3(NBaseIcon, {
          clsPrefix: clsPrefix,
          key: "cancel"
        }, {
          default: () => h$3(CancelIcon, null)
        })
      })
    }), this.showRetryButton && !this.disabled && h$3(Button, {
      key: "retry",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handleRetryClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => h$3(RetryIcon, null)
      })
    }), this.showDownloadButton ? h$3(Button, {
      key: "download",
      quaternary: true,
      type: this.buttonType,
      onClick: this.handleDownloadClick,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      builtinThemeOverrides: buttonThemeOverrides
    }, {
      icon: () => h$3(NBaseIcon, {
        clsPrefix: clsPrefix
      }, {
        default: () => h$3(DownloadIcon, null)
      })
    }) : null)), !isImageType && progress);
  }
});

const {computed: computed$2,defineComponent: defineComponent$2,h: h$2,inject: inject$1} = await importShared('vue');
const NUploadTrigger = defineComponent$2({
  name: 'UploadTrigger',
  props: {
    abstract: Boolean
  },
  slots: Object,
  setup(props, {
    slots
  }) {
    const NUpload = inject$1(uploadInjectionKey, null);
    if (!NUpload) {
      throwError('upload-trigger', '`n-upload-trigger` must be placed inside `n-upload`.');
    }
    const {
      mergedClsPrefixRef,
      mergedDisabledRef,
      maxReachedRef,
      listTypeRef,
      dragOverRef,
      openOpenFileDialog,
      draggerInsideRef,
      handleFileAddition,
      mergedDirectoryDndRef,
      triggerClassRef,
      triggerStyleRef
    } = NUpload;
    const isImageCardTypeRef = computed$2(() => listTypeRef.value === 'image-card');
    function handleTriggerClick() {
      if (mergedDisabledRef.value || maxReachedRef.value) return;
      openOpenFileDialog();
    }
    function handleTriggerDragOver(e) {
      e.preventDefault();
      dragOverRef.value = true;
    }
    function handleTriggerDragEnter(e) {
      e.preventDefault();
      dragOverRef.value = true;
    }
    function handleTriggerDragLeave(e) {
      e.preventDefault();
      dragOverRef.value = false;
    }
    function handleTriggerDrop(e) {
      var _a;
      e.preventDefault();
      if (!draggerInsideRef.value || mergedDisabledRef.value || maxReachedRef.value) {
        dragOverRef.value = false;
        return;
      }
      const dataTransferItems = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.items;
      if (dataTransferItems === null || dataTransferItems === void 0 ? void 0 : dataTransferItems.length) {
        void getFilesFromEntries(Array.from(dataTransferItems).map(item => item.webkitGetAsEntry()), mergedDirectoryDndRef.value).then(files => {
          handleFileAddition(files);
        }).finally(() => {
          dragOverRef.value = false;
        });
      } else {
        dragOverRef.value = false;
      }
    }
    return () => {
      var _a;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return props.abstract ? (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
        handleClick: handleTriggerClick,
        handleDrop: handleTriggerDrop,
        handleDragOver: handleTriggerDragOver,
        handleDragEnter: handleTriggerDragEnter,
        handleDragLeave: handleTriggerDragLeave
      }) : h$2("div", {
        class: [`${mergedClsPrefix}-upload-trigger`, (mergedDisabledRef.value || maxReachedRef.value) && `${mergedClsPrefix}-upload-trigger--disabled`, isImageCardTypeRef.value && `${mergedClsPrefix}-upload-trigger--image-card`, triggerClassRef.value],
        style: triggerStyleRef.value,
        onClick: handleTriggerClick,
        onDrop: handleTriggerDrop,
        onDragover: handleTriggerDragOver,
        onDragenter: handleTriggerDragEnter,
        onDragleave: handleTriggerDragLeave
      }, isImageCardTypeRef.value ? h$2(NUploadDragger, null, {
        default: () => resolveSlot(slots.default, () => [h$2(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h$2(AddIcon, null)
        })])
      }) : slots);
    };
  }
});

const {computed: computed$1,defineComponent: defineComponent$1,h: h$1,inject} = await importShared('vue');
const NUploadFileList = defineComponent$1({
  name: 'UploadFileList',
  setup(_, {
    slots
  }) {
    const NUpload = inject(uploadInjectionKey, null);
    if (!NUpload) {
      throwError('upload-file-list', '`n-upload-file-list` must be placed inside `n-upload`.');
    }
    const {
      abstractRef,
      mergedClsPrefixRef,
      listTypeRef,
      mergedFileListRef,
      fileListClassRef,
      fileListStyleRef,
      cssVarsRef,
      themeClassRef,
      maxReachedRef,
      showTriggerRef,
      imageGroupPropsRef
    } = NUpload;
    const isImageCardTypeRef = computed$1(() => listTypeRef.value === 'image-card');
    const renderFileList = () => mergedFileListRef.value.map((file, index) => h$1(NUploadFile, {
      clsPrefix: mergedClsPrefixRef.value,
      key: file.id,
      file: file,
      index: index,
      listType: listTypeRef.value
    }));
    const renderUploadFileList = () => isImageCardTypeRef.value ? h$1(NImageGroup, Object.assign({}, imageGroupPropsRef.value), {
      default: renderFileList
    }) : h$1(NFadeInExpandTransition, {
      group: true
    }, {
      default: renderFileList
    });
    return () => {
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      const {
        value: abstract
      } = abstractRef;
      return h$1("div", {
        class: [`${mergedClsPrefix}-upload-file-list`, isImageCardTypeRef.value && `${mergedClsPrefix}-upload-file-list--grid`, abstract ? themeClassRef === null || themeClassRef === void 0 ? void 0 : themeClassRef.value : undefined, fileListClassRef.value],
        style: [abstract && cssVarsRef ? cssVarsRef.value : '', fileListStyleRef.value]
      }, renderUploadFileList(), showTriggerRef.value && !maxReachedRef.value && isImageCardTypeRef.value && h$1(NUploadTrigger, null, slots));
    };
  }
});

var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const {computed,defineComponent,Fragment,h,nextTick,provide,ref,Teleport,toRef} = await importShared('vue');
function createXhrHandlers(inst, file, xhr) {
  const {
    doChange,
    xhrMap
  } = inst;
  let percentage = 0;
  function handleXHRError(e) {
    var _a;
    let fileAfterChange = Object.assign({}, file, {
      status: "error",
      percentage
    });
    xhrMap.delete(file.id);
    fileAfterChange = createSettledFileInfo(((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, {
      file: fileAfterChange,
      event: e
    })) || fileAfterChange);
    doChange(fileAfterChange, e);
  }
  function handleXHRLoad(e) {
    var _a;
    if (inst.isErrorState) {
      if (inst.isErrorState(xhr)) {
        handleXHRError(e);
        return;
      }
    } else {
      if (xhr.status < 200 || xhr.status >= 300) {
        handleXHRError(e);
        return;
      }
    }
    let fileAfterChange = Object.assign({}, file, {
      status: "finished",
      percentage
    });
    xhrMap.delete(file.id);
    fileAfterChange = createSettledFileInfo(((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, {
      file: fileAfterChange,
      event: e
    })) || fileAfterChange);
    doChange(fileAfterChange, e);
  }
  return {
    handleXHRLoad,
    handleXHRError,
    handleXHRAbort(e) {
      const fileAfterChange = Object.assign({}, file, {
        status: "removed",
        file: null,
        percentage
      });
      xhrMap.delete(file.id);
      doChange(fileAfterChange, e);
    },
    handleXHRProgress(e) {
      const fileAfterChange = Object.assign({}, file, {
        status: "uploading"
      });
      if (e.lengthComputable) {
        const progress = Math.ceil(e.loaded / e.total * 100);
        fileAfterChange.percentage = progress;
        percentage = progress;
      }
      doChange(fileAfterChange, e);
    }
  };
}
function customSubmitImpl(options) {
  const {
    inst,
    file,
    data,
    headers,
    withCredentials,
    action,
    customRequest
  } = options;
  const {
    doChange
  } = options.inst;
  let percentage = 0;
  customRequest({
    file,
    data,
    headers,
    withCredentials,
    action,
    onProgress(event) {
      const fileAfterChange = Object.assign({}, file, {
        status: "uploading"
      });
      const progress = event.percent;
      fileAfterChange.percentage = progress;
      percentage = progress;
      doChange(fileAfterChange);
    },
    onFinish() {
      var _a;
      let fileAfterChange = Object.assign({}, file, {
        status: "finished",
        percentage
      });
      fileAfterChange = createSettledFileInfo(((_a = inst.onFinish) === null || _a === void 0 ? void 0 : _a.call(inst, {
        file: fileAfterChange
      })) || fileAfterChange);
      doChange(fileAfterChange);
    },
    onError() {
      var _a;
      let fileAfterChange = Object.assign({}, file, {
        status: "error",
        percentage
      });
      fileAfterChange = createSettledFileInfo(((_a = inst.onError) === null || _a === void 0 ? void 0 : _a.call(inst, {
        file: fileAfterChange
      })) || fileAfterChange);
      doChange(fileAfterChange);
    }
  });
}
function registerHandler(inst, file, request) {
  const handlers = createXhrHandlers(inst, file, request);
  request.onabort = handlers.handleXHRAbort;
  request.onerror = handlers.handleXHRError;
  request.onload = handlers.handleXHRLoad;
  if (request.upload) {
    request.upload.onprogress = handlers.handleXHRProgress;
  }
}
function unwrapFunctionValue(data, file) {
  if (typeof data === "function") {
    return data({
      file
    });
  }
  if (data) return data;
  return {};
}
function setHeaders(request, headers, file) {
  const headersObject = unwrapFunctionValue(headers, file);
  if (!headersObject) return;
  Object.keys(headersObject).forEach((key) => {
    request.setRequestHeader(key, headersObject[key]);
  });
}
function appendData(formData, data, file) {
  const dataObject = unwrapFunctionValue(data, file);
  if (!dataObject) return;
  Object.keys(dataObject).forEach((key) => {
    formData.append(key, dataObject[key]);
  });
}
function submitImpl(inst, fieldName, file, {
  method,
  action,
  withCredentials,
  responseType,
  headers,
  data
}) {
  const request = new XMLHttpRequest();
  request.responseType = responseType;
  inst.xhrMap.set(file.id, request);
  request.withCredentials = withCredentials;
  const formData = new FormData();
  appendData(formData, data, file);
  if (file.file !== null) {
    formData.append(fieldName, file.file);
  }
  registerHandler(inst, file, request);
  if (action !== void 0) {
    request.open(method.toUpperCase(), action);
    setHeaders(request, headers, file);
    request.send(formData);
    const fileAfterChange = Object.assign({}, file, {
      status: "uploading"
    });
    inst.doChange(fileAfterChange);
  }
}
const uploadProps = Object.assign(Object.assign({}, useTheme.props), {
  name: {
    type: String,
    default: "file"
  },
  accept: String,
  action: String,
  customRequest: Function,
  directory: Boolean,
  directoryDnd: {
    type: Boolean,
    default: void 0
  },
  method: {
    type: String,
    default: "POST"
  },
  multiple: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  data: [Object, Function],
  headers: [Object, Function],
  withCredentials: Boolean,
  responseType: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  onChange: Function,
  onRemove: Function,
  onFinish: Function,
  onError: Function,
  onRetry: Function,
  onBeforeUpload: Function,
  isErrorState: Function,
  /** currently not used */
  onDownload: Function,
  customDownload: Function,
  defaultUpload: {
    type: Boolean,
    default: true
  },
  fileList: Array,
  "onUpdate:fileList": [Function, Array],
  onUpdateFileList: [Function, Array],
  fileListClass: String,
  fileListStyle: [String, Object],
  defaultFileList: {
    type: Array,
    default: () => []
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  showRemoveButton: {
    type: Boolean,
    default: true
  },
  showDownloadButton: Boolean,
  showRetryButton: {
    type: Boolean,
    default: true
  },
  showPreviewButton: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    default: "text"
  },
  onPreview: Function,
  shouldUseThumbnailUrl: {
    type: Function,
    default: (file) => {
      if (!environmentSupportFile) return false;
      return isImageFile(file);
    }
  },
  createThumbnailUrl: Function,
  abstract: Boolean,
  max: Number,
  showTrigger: {
    type: Boolean,
    default: true
  },
  imageGroupProps: Object,
  inputProps: Object,
  triggerClass: String,
  triggerStyle: [String, Object],
  renderIcon: Function
});
const NUpload = defineComponent({
  name: "Upload",
  props: uploadProps,
  setup(props) {
    if (props.abstract && props.listType === "image-card") {
      throwError("upload", "when the list-type is image-card, abstract is not supported.");
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Upload", "-upload", style, uploadLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Upload", mergedRtlRef, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const uncontrolledFileListRef = ref(props.defaultFileList);
    const controlledFileListRef = toRef(props, "fileList");
    const inputElRef = ref(null);
    const draggerInsideRef = {
      value: false
    };
    const dragOverRef = ref(false);
    const xhrMap = /* @__PURE__ */ new Map();
    const _mergedFileListRef = useMergedState(controlledFileListRef, uncontrolledFileListRef);
    const mergedFileListRef = computed(() => _mergedFileListRef.value.map(createSettledFileInfo));
    const maxReachedRef = computed(() => {
      const {
        max
      } = props;
      if (max !== void 0) {
        return mergedFileListRef.value.length >= max;
      }
      return false;
    });
    function openOpenFileDialog() {
      var _a;
      (_a = inputElRef.value) === null || _a === void 0 ? void 0 : _a.click();
    }
    function handleFileInputChange(e) {
      const target = e.target;
      handleFileAddition(target.files ? Array.from(target.files).map((file) => ({
        file,
        entry: null,
        source: "input"
      })) : null, e);
      target.value = "";
    }
    function doUpdateFileList(files) {
      const {
        "onUpdate:fileList": _onUpdateFileList,
        onUpdateFileList
      } = props;
      if (_onUpdateFileList) call(_onUpdateFileList, files);
      if (onUpdateFileList) call(onUpdateFileList, files);
      uncontrolledFileListRef.value = files;
    }
    const mergedMultipleRef = computed(() => props.multiple || props.directory);
    const doChange = (fileAfterChange, event, options = {
      append: false,
      remove: false
    }) => {
      const {
        append,
        remove
      } = options;
      const fileListAfterChange = Array.from(mergedFileListRef.value);
      const fileIndex = fileListAfterChange.findIndex((file) => file.id === fileAfterChange.id);
      if (append || remove || ~fileIndex) {
        if (append) {
          fileListAfterChange.push(fileAfterChange);
        } else if (remove) {
          fileListAfterChange.splice(fileIndex, 1);
        } else {
          fileListAfterChange.splice(fileIndex, 1, fileAfterChange);
        }
        const {
          onChange
        } = props;
        if (onChange) {
          onChange({
            file: fileAfterChange,
            fileList: fileListAfterChange,
            event
          });
        }
        doUpdateFileList(fileListAfterChange);
      }
    };
    function handleFileAddition(fileAndEntries, e) {
      if (!fileAndEntries || fileAndEntries.length === 0) return;
      const {
        onBeforeUpload
      } = props;
      fileAndEntries = mergedMultipleRef.value ? fileAndEntries : [fileAndEntries[0]];
      const {
        max,
        accept
      } = props;
      fileAndEntries = fileAndEntries.filter(({
        file,
        source
      }) => {
        if (source === "dnd" && (accept === null || accept === void 0 ? void 0 : accept.trim())) {
          return matchType(file.name, file.type, accept);
        } else {
          return true;
        }
      });
      if (max) {
        fileAndEntries = fileAndEntries.slice(0, max - mergedFileListRef.value.length);
      }
      const batchId = createId();
      void Promise.all(fileAndEntries.map((_a) => __awaiter(this, [_a], void 0, function* ({
        file,
        entry
      }) {
        var _b;
        const fileInfo = {
          id: createId(),
          batchId,
          name: file.name,
          status: "pending",
          percentage: 0,
          file,
          url: null,
          type: file.type,
          thumbnailUrl: null,
          fullPath: (_b = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _b !== void 0 ? _b : `/${file.webkitRelativePath || file.name}`
        };
        if (!onBeforeUpload || (yield onBeforeUpload({
          file: fileInfo,
          fileList: mergedFileListRef.value
        })) !== false) {
          return fileInfo;
        }
        return null;
      }))).then((fileInfos) => __awaiter(this, void 0, void 0, function* () {
        let nextTickChain = Promise.resolve();
        fileInfos.forEach((fileInfo) => {
          nextTickChain = nextTickChain.then(nextTick).then(() => {
            if (fileInfo) {
              doChange(fileInfo, e, {
                append: true
              });
            }
          });
        });
        yield nextTickChain;
      })).then(() => {
        if (props.defaultUpload) {
          submit();
        }
      });
    }
    function submit(fileId) {
      const {
        method,
        action,
        withCredentials,
        headers,
        data,
        name: fieldName
      } = props;
      const filesToUpload = fileId !== void 0 ? mergedFileListRef.value.filter((file) => file.id === fileId) : mergedFileListRef.value;
      const shouldReupload = fileId !== void 0;
      filesToUpload.forEach((file) => {
        const {
          status
        } = file;
        if (status === "pending" || status === "error" && shouldReupload) {
          if (props.customRequest) {
            customSubmitImpl({
              inst: {
                doChange,
                xhrMap,
                onFinish: props.onFinish,
                onError: props.onError
              },
              file,
              action,
              withCredentials,
              headers,
              data,
              customRequest: props.customRequest
            });
          } else {
            submitImpl({
              doChange,
              xhrMap,
              onFinish: props.onFinish,
              onError: props.onError,
              isErrorState: props.isErrorState
            }, fieldName, file, {
              method,
              action,
              withCredentials,
              responseType: props.responseType,
              headers,
              data
            });
          }
        }
      });
    }
    function getFileThumbnailUrlResolver(file) {
      var _a;
      if (file.thumbnailUrl) return file.thumbnailUrl;
      const {
        createThumbnailUrl
      } = props;
      if (createThumbnailUrl) {
        return (_a = createThumbnailUrl(file.file, file)) !== null && _a !== void 0 ? _a : file.url || "";
      }
      if (file.url) {
        return file.url;
      } else if (file.file) {
        return createImageDataUrl(file.file);
      }
      return "";
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          draggerColor,
          draggerBorder,
          draggerBorderHover,
          itemColorHover,
          itemColorHoverError,
          itemTextColorError,
          itemTextColorSuccess,
          itemTextColor,
          itemIconColor,
          itemDisabledOpacity,
          lineHeight,
          borderRadius,
          fontSize,
          itemBorderImageCardError,
          itemBorderImageCard
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-dragger-border": draggerBorder,
        "--n-dragger-border-hover": draggerBorderHover,
        "--n-dragger-color": draggerColor,
        "--n-font-size": fontSize,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-hover-error": itemColorHoverError,
        "--n-item-disabled-opacity": itemDisabledOpacity,
        "--n-item-icon-color": itemIconColor,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-error": itemTextColorError,
        "--n-item-text-color-success": itemTextColorSuccess,
        "--n-line-height": lineHeight,
        "--n-item-border-image-card-error": itemBorderImageCardError,
        "--n-item-border-image-card": itemBorderImageCard
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("upload", void 0, cssVarsRef, props) : void 0;
    provide(uploadInjectionKey, {
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      showCancelButtonRef: toRef(props, "showCancelButton"),
      showDownloadButtonRef: toRef(props, "showDownloadButton"),
      showRemoveButtonRef: toRef(props, "showRemoveButton"),
      showRetryButtonRef: toRef(props, "showRetryButton"),
      onRemoveRef: toRef(props, "onRemove"),
      onDownloadRef: toRef(props, "onDownload"),
      customDownloadRef: toRef(props, "customDownload"),
      mergedFileListRef,
      triggerClassRef: toRef(props, "triggerClass"),
      triggerStyleRef: toRef(props, "triggerStyle"),
      shouldUseThumbnailUrlRef: toRef(props, "shouldUseThumbnailUrl"),
      renderIconRef: toRef(props, "renderIcon"),
      xhrMap,
      submit,
      doChange,
      showPreviewButtonRef: toRef(props, "showPreviewButton"),
      onPreviewRef: toRef(props, "onPreview"),
      getFileThumbnailUrlResolver,
      listTypeRef: toRef(props, "listType"),
      dragOverRef,
      openOpenFileDialog,
      draggerInsideRef,
      handleFileAddition,
      mergedDisabledRef: formItem.mergedDisabledRef,
      maxReachedRef,
      fileListClassRef: toRef(props, "fileListClass"),
      fileListStyleRef: toRef(props, "fileListStyle"),
      abstractRef: toRef(props, "abstract"),
      acceptRef: toRef(props, "accept"),
      cssVarsRef: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClassRef: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      showTriggerRef: toRef(props, "showTrigger"),
      imageGroupPropsRef: toRef(props, "imageGroupProps"),
      mergedDirectoryDndRef: computed(() => {
        var _a;
        return (_a = props.directoryDnd) !== null && _a !== void 0 ? _a : props.directory;
      }),
      onRetryRef: toRef(props, "onRetry")
    });
    const exposedMethods = {
      clear: () => {
        uncontrolledFileListRef.value = [];
      },
      submit,
      openOpenFileDialog
    };
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      draggerInsideRef,
      rtlEnabled: rtlEnabledRef,
      inputElRef,
      mergedTheme: themeRef,
      dragOver: dragOverRef,
      mergedMultiple: mergedMultipleRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      handleFileInputChange
    }, exposedMethods);
  },
  render() {
    var _a, _b;
    const {
      draggerInsideRef,
      mergedClsPrefix,
      $slots,
      directory,
      onRender
    } = this;
    if ($slots.default && !this.abstract) {
      const firstChild = $slots.default()[0];
      if ((_a = firstChild === null || firstChild === void 0 ? void 0 : firstChild.type) === null || _a === void 0 ? void 0 : _a[uploadDraggerKey]) {
        draggerInsideRef.value = true;
      }
    }
    const inputNode = h("input", Object.assign({}, this.inputProps, {
      ref: "inputElRef",
      type: "file",
      class: `${mergedClsPrefix}-upload-file-input`,
      accept: this.accept,
      multiple: this.mergedMultiple,
      onChange: this.handleFileInputChange,
      // @ts-expect-error // seems vue-tsc will add the prop, so we can't use expect-error
      webkitdirectory: directory || void 0,
      directory: directory || void 0
    }));
    if (this.abstract) {
      return h(Fragment, null, (_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots), h(Teleport, {
        to: "body"
      }, inputNode));
    }
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-upload`, this.rtlEnabled && `${mergedClsPrefix}-upload--rtl`, draggerInsideRef.value && `${mergedClsPrefix}-upload--dragger-inside`, this.dragOver && `${mergedClsPrefix}-upload--drag-over`, this.themeClass],
      style: this.cssVars
    }, inputNode, this.showTrigger && this.listType !== "image-card" && h(NUploadTrigger, null, $slots), this.showFileList && h(NUploadFileList, null, $slots));
  }
});

export { NAlert, NDialogProvider, NImage, NImageGroup, NImagePreview, NProgress, NSpin, NUpload, NUploadDragger, NUploadFileList, NUploadTrigger, alertProps, commonVars, dialogProviderProps, download, imageGroupProps, imagePreviewProps, imageProps, isImageSupportNativeLazy, observeIntersection, progressProps, publicDownload, self$3 as self, self$2 as self$1, self$1 as self$2, spinProps, uploadProps, useDialog, useDialogReactiveList };
//# sourceMappingURL=Upload.TW8Mjmsr1767105581793.js.map
