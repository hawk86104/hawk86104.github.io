import { isObjectLike, baseGetTag, importShared, IconWrapper, useTheme, getPrefixCls, withInstall, useFormAdaptor, useNormalModel, CHANGE_EVENT, UPDATE_MODEL_EVENT, useArrayModel, _defineProperty, CloseCircleFilled, debounce, useWindowSize$1 as useWindowSize, useEventListener$1 as useEventListener, isNil, pxfy, PopupManager, useConfig, useLocale, FScrollbar, FButton, throttle, CLOSE_EVENT, ReloadOutlined, RightOutlined, LeftOutlined, noop, requestAnimationFrame, ERROR_EVENT, LOAD_EVENT, noopInNoop, isString, useThrottleFn, getSlot, isObject, degfy, flatten, isValidElementNode, depx, FTooltip, useForPreviewStore, useRouter, _export_sfc, useRoute, FMenu, FSubMenu, FMenuItem } from './index.BxB45aCK1767105581793.js';
import { detectDeviceType, getPluginsConfig, getOnlinePluginConfig } from './utils.BgXDgF1P1767105581793.js';
import { camelize } from './runtime-core.esm-bundler.BD9HXynx1767105581793.js';
import { loadJweixin, loadWebView } from './initScript.D0kd3T6a1767105581793.js';
import { NTooltip } from './Tooltip.D-ydKrLK1767105581793.js';
import { NIcon } from './Icon.RqG6TsQp1767105581793.js';

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

const {createVNode: createVNode$n} = await importShared('vue');

var AppstoreOutlined = props => createVNode$n(IconWrapper, props, {
  default: () => [createVNode$n("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$n("path", {
    "d": "M458.453 544.128a21.333 21.333 0 0 1 21.334 21.333v341.163a21.333 21.333 0 0 1-21.334 21.333h-341.12A21.333 21.333 0 0 1 96 906.624V565.461a21.333 21.333 0 0 1 21.333-21.333h341.12zm448.171 0a21.333 21.333 0 0 1 21.333 21.333v341.163a21.333 21.333 0 0 1-21.333 21.333H565.461a21.333 21.333 0 0 1-21.333-21.333V565.461a21.333 21.333 0 0 1 21.333-21.333h341.163zm-490.837 64H160v255.787h255.787V608.128zm448.17 0H608.128v255.787h255.83V608.128zM458.453 96a21.333 21.333 0 0 1 21.334 21.333v341.163a21.333 21.333 0 0 1-21.334 21.333h-341.12A21.333 21.333 0 0 1 96 458.496V117.333A21.333 21.333 0 0 1 117.333 96h341.12zm448.171 0a21.333 21.333 0 0 1 21.333 21.333v341.163a21.333 21.333 0 0 1-21.333 21.333H565.461a21.333 21.333 0 0 1-21.333-21.333V117.333A21.333 21.333 0 0 1 565.461 96h341.163zm-490.837 64H160v255.787h255.787V160zm448.17 0H608.128v255.787h255.83V160z"
  }, null)])]
});

const {createVNode: createVNode$m} = await importShared('vue');

var CloseOutlined = props => createVNode$m(IconWrapper, props, {
  default: () => [createVNode$m("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$m("path", {
    "d": "M217.856 172.587 512 466.73l294.144-294.144a21.333 21.333 0 0 1 30.165 0l15.104 15.104a21.333 21.333 0 0 1 0 30.165L557.27 512l294.144 294.144a21.333 21.333 0 0 1 0 30.165l-15.104 15.104a21.333 21.333 0 0 1-30.165 0L512 557.27 217.856 851.413a21.333 21.333 0 0 1-30.165 0l-15.104-15.104a21.333 21.333 0 0 1 0-30.165L466.73 512 172.587 217.856a21.333 21.333 0 0 1 0-30.165l15.104-15.104a21.333 21.333 0 0 1 30.165 0z"
  }, null)])]
});

const {createVNode: createVNode$l} = await importShared('vue');

var ClusterOutlined = props => createVNode$l(IconWrapper, props, {
  default: () => [createVNode$l("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$l("path", {
    "d": "M266.667 481.195a21.333 21.333 0 0 1 21.333 0l186.197 107.52a21.333 21.333 0 0 1 10.667 18.474v214.955a21.333 21.333 0 0 1-10.667 18.475L288 948.139a21.333 21.333 0 0 1-21.333 0L80.469 840.619a21.333 21.333 0 0 1-10.666-18.475V607.189a21.333 21.333 0 0 1 10.666-18.474zm469.333 0a21.333 21.333 0 0 1 21.333 0l186.198 107.52a21.333 21.333 0 0 1 10.666 18.474v214.955a21.333 21.333 0 0 1-10.666 18.475l-186.198 107.52a21.333 21.333 0 0 1-21.333 0l-186.197-107.52a21.333 21.333 0 0 1-10.667-18.475V607.189a21.333 21.333 0 0 1 10.667-18.474zm-458.667 67.754-143.53 82.859v165.675l143.53 82.858 143.488-82.816v-165.76L277.333 548.95zm469.334 0-143.531 82.859v165.675l143.53 82.858 143.489-82.816v-165.76L746.667 548.95zM501.333 65.195a21.333 21.333 0 0 1 21.334 0l186.197 107.52a21.333 21.333 0 0 1 10.667 18.474v214.955a21.333 21.333 0 0 1-10.667 18.475l-186.197 107.52a21.333 21.333 0 0 1-21.334 0l-186.197-107.52a21.333 21.333 0 0 1-10.667-18.475V191.189a21.333 21.333 0 0 1 10.667-18.474zM512 132.949l-143.53 82.859v165.675L512 464.34l143.488-82.816v-165.76L512 132.95z"
  }, null)])]
});

const {createVNode: createVNode$k} = await importShared('vue');

var DownloadOutlined = props => createVNode$k(IconWrapper, props, {
  default: () => [createVNode$k("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$k("path", {
    "d": "m527.104 731.307 233.813-233.814a21.333 21.333 0 0 0 0-30.208l-15.104-15.061a21.333 21.333 0 0 0-27.221-2.475l-2.944 2.475L544 623.914V117.12a21.333 21.333 0 0 0-21.333-21.333h-21.334A21.333 21.333 0 0 0 480 117.12v506.795L308.352 452.224a21.333 21.333 0 0 0-30.165 0l-15.104 15.061a21.333 21.333 0 0 0 0 30.166l233.813 233.813a21.333 21.333 0 0 0 30.208 0zm379.435 196.906a21.333 21.333 0 0 0 20.992-17.493l.341-3.84V645.12a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341h-21.334a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v219.093H161.28V645.12a21.333 21.333 0 0 0-17.493-20.992l-3.84-.341H117.76a21.333 21.333 0 0 0-20.992 17.493l-.341 3.84v261.76a21.333 21.333 0 0 0 17.493 20.992l3.84.341h788.779z"
  }, null)])]
});

const {createVNode: createVNode$j} = await importShared('vue');

var EditOutlined = props => createVNode$j(IconWrapper, props, {
  default: () => [createVNode$j("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$j("path", {
    "d": "M533.419 96.555a21.333 21.333 0 0 1 21.333 21.333v21.333a21.333 21.333 0 0 1-17.493 20.992l-3.84.342-372.907-.043v702.933h702.933V533.333A21.333 21.333 0 0 1 884.78 512h21.333a21.333 21.333 0 0 1 21.333 21.333v342.443c0 26.752-20.309 48.768-46.378 51.413l-5.291.256H148.224a51.67 51.67 0 0 1-51.413-46.378l-.256-5.291V148.224c0-26.752 20.309-48.768 46.378-51.413l5.291-.256h385.195zm263.296 3.84L917.376 221.14a21.333 21.333 0 0 1 0 30.123l-371.627 371.67a21.333 21.333 0 0 1-13.184 6.143l-132.693 12.075a21.333 21.333 0 0 1-23.21-23.168l12.074-132.736a21.333 21.333 0 0 1 6.144-13.141l371.627-371.67a21.333 21.333 0 0 1 30.208 0zm-15.062 75.392L451.072 506.368l-6.059 66.39 66.39-6.06 330.581-330.58-60.33-60.331z"
  }, null)])]
});

const {createVNode: createVNode$i} = await importShared('vue');

var EyeInvisibleOutlined = props => createVNode$i(IconWrapper, props, {
  default: () => [createVNode$i("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$i("path", {
    "d": "M512 149.461c86.613 0 166.528 25.771 239.915 77.312l52.053-52.053a21.333 21.333 0 0 1 30.208 0l15.061 15.104a21.333 21.333 0 0 1 0 30.165l-47.104 47.104c45.398 41.088 88.022 92.928 127.915 155.52l12.715 20.566 7.765 13.269 19.541 34.901 5.718 10.496a21.333 21.333 0 0 1 0 20.395l-16.214 29.44-13.226 23.04-7.168 11.947C821.419 778.155 678.997 873.899 512 873.899c-86.443 0-166.315-25.643-239.616-76.971l-52.395 52.352a21.333 21.333 0 0 1-30.165 0l-15.061-15.061a21.333 21.333 0 0 1 0-30.166l47.36-47.36C173.653 712.96 128.299 656.981 86.1 588.8l-10.154-17.067-17.408-30.72L48.17 522.24a21.333 21.333 0 0 1 0-20.48l19.2-34.645 11.52-20.139 6.4-10.581C202.965 245.077 345.216 149.46 511.957 149.46zm244.907 162.902L318.464 750.805c57.003 37.547 117.76 56.875 182.357 58.88l11.136.171c148.992 0 277.632-91.008 387.67-281.899l9.002-16-.426-.768c-46.934-84.65-97.366-150.698-151.382-198.826zM512 213.46c-148.992 0-277.59 91.179-387.627 282.454l-9.088 16.042.427.726c47.019 84.65 97.536 150.613 151.637 198.698l103.467-103.466a170.667 170.667 0 0 1 237.099-237.099l97.962-97.92c-57.13-37.76-117.973-57.259-182.741-59.307L512 213.504zM672.853 454.87a170.667 170.667 0 0 1-218.026 218.027l54.272-54.272 2.901.043A106.667 106.667 0 0 0 618.667 512l-.086-2.901 54.272-54.23zM512 405.333a106.667 106.667 0 0 0-94.592 155.99l143.915-143.915A106.24 106.24 0 0 0 512 405.333z"
  }, null)])]
});

const {createVNode: createVNode$h} = await importShared('vue');

var EyeOutlined = props => createVNode$h(IconWrapper, props, {
  default: () => [createVNode$h("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$h("path", {
    "d": "M512 149.461c162.688 0 302.08 91.051 418.048 273.11l12.715 20.565 12.16 20.95 15.146 27.22 5.718 10.497a21.333 21.333 0 0 1 0 20.394l-16.214 29.44-13.226 23.04-7.168 11.947C821.419 778.112 678.997 873.856 512 873.856c-166.4 0-308.31-95.019-425.813-285.056l-10.24-17.067-17.366-30.72-10.368-18.773a21.333 21.333 0 0 1 0-20.48l19.2-34.645 11.52-20.139 6.4-10.581C203.008 245.077 345.26 149.46 512 149.46zm0 64c-148.992 0-277.59 91.179-387.627 282.454l-9.088 16.042.427.726c109.184 196.394 236.97 292.437 385.152 297.002l11.136.171c148.992 0 277.632-91.008 387.67-281.899l9.002-16-.427-.768c-109.184-196.778-236.97-292.992-385.109-297.557l-11.136-.17zm0 127.872a170.667 170.667 0 1 1 0 341.334 170.667 170.667 0 0 1 0-341.334zm0 64a106.667 106.667 0 1 0 0 213.334 106.667 106.667 0 0 0 0-213.334z"
  }, null)])]
});

const {createVNode: createVNode$g} = await importShared('vue');

var MoreCircleOutlined = props => createVNode$g(IconWrapper, props, {
  default: () => [createVNode$g("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$g("path", {
    "d": "M42.667 512C42.667 252.8 252.8 42.667 512 42.667S981.333 252.8 981.333 512 771.2 981.333 512 981.333 42.667 771.2 42.667 512zm64 0a405.333 405.333 0 1 0 810.666 0 405.333 405.333 0 0 0-810.666 0zm555.434 0a56.021 56.021 0 1 1 112 0 56.021 56.021 0 0 1-112 0zm-206.08 0a56.021 56.021 0 1 1 112 0 56.021 56.021 0 0 1-112.042 0zm-207.701 0a56.021 56.021 0 1 1 112 0 56.021 56.021 0 0 1-112 0z"
  }, null)])]
});

const {createVNode: createVNode$f} = await importShared('vue');

var PictureFailOutlined = props => createVNode$f(IconWrapper, props, {
  default: () => [createVNode$f("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$f("path", {
    "d": "m496.64 88.619 465.365 52.309a21.333 21.333 0 0 1 18.859 23.04L915.797 907.52a21.333 21.333 0 0 1-23.125 19.413l-470.4-41.173a21.333 21.333 0 0 1-19.285-18.56l-20.139-158.165.17-.427 21.163-233.941-165.12-182.528a21.333 21.333 0 0 1-4.266-21.547l38.784-107.605-162.091 19.968 45.739 522.922 163.072-25.472a21.333 21.333 0 0 1 23.466 14.038l1.024 4.565 2.432 21.163a21.333 21.333 0 0 1-17.92 23.552l-166.485 26.026 8.107 92.8 175.232-30.634a21.333 21.333 0 0 1 23.722 13.653l1.152 4.779 2.56 20.864a21.333 21.333 0 0 1-17.749 23.68L135.68 930.56a21.333 21.333 0 0 1-24.49-17.621L44.202 147.584a21.333 21.333 0 0 1 18.602-23.04l278.187-34.261a21.333 21.333 0 0 1 22.57 28.757l-51.37 135.253L472.362 435.2a21.333 21.333 0 0 1 5.206 16.683l-12.587 105.301 87.382-161.493-140.374-146.603a21.333 21.333 0 0 1-3.37-24.875l66.816-124.458a21.333 21.333 0 0 1 21.162-11.094zM453.035 751.7l7.594 73.174 395.094 34.56 5.717-65.408L453.035 751.7zm65.578-597.248-37.632 70.4L629.973 379.52a21.333 21.333 0 0 1 3.2 25.301L472.62 689.451l394.41 40.874 46.294-528.938-394.667-46.976zM767.66 264.96a55.979 55.979 0 1 1 0 112 55.979 55.979 0 0 1 0-112z"
  }, null)])]
});

const {createVNode: createVNode$e} = await importShared('vue');

var PictureOutlined = props => createVNode$e(IconWrapper, props, {
  default: () => [createVNode$e("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$e("path", {
    "d": "M960 149.419a21.333 21.333 0 0 1 21.333 21.333v682.496A21.333 21.333 0 0 1 960 874.581H64a21.333 21.333 0 0 1-21.333-21.333V170.752A21.333 21.333 0 0 1 64 149.419h896zM670.464 475.86 438.869 748.245a21.333 21.333 0 0 1-32.682-.17l-140.075-168.96-159.488 187.861v43.563h810.71v-43.52L670.463 475.86zm246.87-262.4H106.666v454.571l143.616-169.088a21.333 21.333 0 0 1 32.682.213l139.99 168.918L654.25 396.16a21.333 21.333 0 0 1 32.512 0l230.57 271.83V213.418zM416 277.333a96 96 0 1 1 0 192 96 96 0 0 1 0-192zm0 64a32 32 0 1 0 0 64 32 32 0 0 0 0-64z"
  }, null)])]
});

const {createVNode: createVNode$d} = await importShared('vue');

var RotateLeftOutlined = props => createVNode$d(IconWrapper, props, {
  default: () => [createVNode$d("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$d("path", {
    "d": "M512 95.915a414.848 414.848 0 0 0-297.472 125.098V117.461a21.333 21.333 0 0 0-21.333-21.333H171.86a21.333 21.333 0 0 0-21.333 21.333v214.614a21.333 21.333 0 0 0 21.333 21.333h214.614a21.333 21.333 0 0 0 21.333-21.333V310.74a21.333 21.333 0 0 0-21.333-21.333H239.189A352.085 352.085 0 1 1 159.872 512l.47-14.464.34-5.845a21.333 21.333 0 0 0-16.085-22.102l-4.48-.597h-22.101a21.333 21.333 0 0 0-21.333 20.053l-.726 18.176-.042 4.779c0 229.803 186.282 416.085 416.085 416.085 229.803 0 416.085-186.282 416.085-416.085 0-229.803-186.282-416.085-416.085-416.085z"
  }, null)])]
});

const {createVNode: createVNode$c} = await importShared('vue');

var SearchMinusOutlined = props => createVNode$c(IconWrapper, props, {
  default: () => [createVNode$c("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$c("path", {
    "d": "M480.384 100.95a379.819 379.819 0 0 1 290.219 624.895L915.84 871.083a21.333 21.333 0 0 1 0 30.165l-15.104 15.061a21.333 21.333 0 0 1-30.165 0L725.333 771.072a379.819 379.819 0 1 1-244.992-670.123zm0 64a315.819 315.819 0 1 0 0 631.68 315.819 315.819 0 0 0 0-631.68zm128 283.818a21.333 21.333 0 0 1 21.333 21.333v21.334a21.333 21.333 0 0 1-21.333 21.333h-256a21.333 21.333 0 0 1-21.333-21.333V470.1a21.333 21.333 0 0 1 21.333-21.333h256z"
  }, null)])]
});

const {createVNode: createVNode$b} = await importShared('vue');

var SearchOutlined = props => createVNode$b(IconWrapper, props, {
  default: () => [createVNode$b("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$b("path", {
    "d": "M480.384 100.95a379.819 379.819 0 0 1 290.219 624.895L915.84 871.083a21.333 21.333 0 0 1 0 30.165l-15.104 15.061a21.333 21.333 0 0 1-30.165 0L725.333 771.072a379.819 379.819 0 1 1-244.992-670.123zm0 64a315.819 315.819 0 1 0 0 631.68 315.819 315.819 0 0 0 0-631.68z"
  }, null)])]
});

const {createVNode: createVNode$a} = await importShared('vue');

var SearchPlusOutlined = props => createVNode$a(IconWrapper, props, {
  default: () => [createVNode$a("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$a("path", {
    "d": "M480.384 100.95a379.819 379.819 0 0 1 290.219 624.895L915.84 871.083a21.333 21.333 0 0 1 0 30.165l-15.104 15.061a21.333 21.333 0 0 1-30.165 0L725.333 771.072a379.819 379.819 0 1 1-244.992-670.123zm0 64a315.819 315.819 0 1 0 0 631.68 315.819 315.819 0 0 0 0-631.68zm10.667 166.485a21.333 21.333 0 0 1 21.333 21.333v96h96a21.333 21.333 0 0 1 21.333 21.333v21.334a21.333 21.333 0 0 1-21.333 21.333h-96v96a21.333 21.333 0 0 1-21.333 21.333h-21.334a21.333 21.333 0 0 1-21.333-21.333v-96h-96a21.333 21.333 0 0 1-21.333-21.333V470.1a21.333 21.333 0 0 1 21.333-21.333h96v-96a21.333 21.333 0 0 1 21.333-21.333h21.334z"
  }, null)])]
});

const {createVNode: createVNode$9} = await importShared('vue');

var UpCircleOutlined = props => createVNode$9(IconWrapper, props, {
  default: () => [createVNode$9("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$9("path", {
    "d": "M512 981.333c259.2 0 469.333-210.133 469.333-469.333S771.2 42.667 512 42.667 42.667 252.8 42.667 512 252.8 981.333 512 981.333zm0-64a405.333 405.333 0 1 1 0-810.666 405.333 405.333 0 0 1 0 810.666zm160.768-256.768a21.333 21.333 0 0 0 24.064 2.987l3.243-2.048 16.853-13.056a21.333 21.333 0 0 0 5.845-26.71l-2.048-3.242L528.853 371.2a21.333 21.333 0 0 0-31.104-2.816l-2.602 2.816-191.872 247.339a21.333 21.333 0 0 0 .981 27.306l2.816 2.646 16.853 13.056 3.243 2.09a21.333 21.333 0 0 0 24.064-3.029l2.603-2.859L512 453.803l158.165 203.946 2.603 2.816z"
  }, null)])]
});

const {createVNode: createVNode$8} = await importShared('vue');

var UserOutlined = props => createVNode$8(IconWrapper, props, {
  default: () => [createVNode$8("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$8("path", {
    "d": "M512 95.573a234.667 234.667 0 0 1 133.93 427.435 416.256 416.256 0 0 1 280.577 360.533l.853 14.08.128 8.15a21.333 21.333 0 0 1-17.195 21.248l-4.138.426h-21.248a21.333 21.333 0 0 1-21.334-21.034l-.256-9.131-.085-1.963c-10.88-180.778-158.293-324.778-340.053-330.24l-9.899-.17h-2.133l-8.96.17A351.872 351.872 0 0 0 161.62 884.48l-.853 11.819-.213 10.069a21.333 21.333 0 0 1-21.334 20.992H117.76a21.333 21.333 0 0 1-20.95-17.493l-.34-4.139.255-10.325c8.79-173.142 123.563-318.72 281.43-372.395A234.667 234.667 0 0 1 512 95.616zm1.067 405.334H512a170.667 170.667 0 1 0-1.067 0h2.134z"
  }, null)])]
});

const cardProps = {
  header: {
    type: String,
    default: ''
  },
  divider: {
    type: Boolean,
    default: true
  },
  bodyStyle: {
    type: Object,
    default: () => ({})
  },
  size: {
    type: String,
    default: 'middle'
  },
  shadow: {
    type: String,
    default: 'always'
  },
  bordered: {
    type: Boolean,
    default: true
  }
};

const {defineComponent: defineComponent$d,computed: computed$e,openBlock: openBlock$6,createElementBlock: createElementBlock$6,normalizeClass: normalizeClass$6,renderSlot: renderSlot$5,createTextVNode: createTextVNode$1,toDisplayString: toDisplayString$3,createCommentVNode: createCommentVNode$5,createElementVNode: createElementVNode$4,normalizeStyle: normalizeStyle$4} = await importShared('vue');

const prefixCls$b = getPrefixCls('card');
var script$6 = defineComponent$d({
  name: 'FCard',
  props: cardProps,
  setup(props) {
    useTheme();
    const classes = computed$e(() => ({
      [prefixCls$b]: true,
      [`${prefixCls$b}-size--${props.size}`]: props.size,
      [`${prefixCls$b}-shadow--${props.shadow}`]: props.shadow,
      'is-bordered': props.bordered
    }));
    const headerClasses = computed$e(() => ({
      [`${prefixCls$b}__header`]: true,
      'no-divider': !props.divider
    }));
    const footerClasses = computed$e(() => ({
      [`${prefixCls$b}__footer`]: true,
      'no-divider': !props.divider
    }));
    return {
      prefixCls: prefixCls$b,
      classes,
      headerClasses,
      footerClasses
    };
  }
});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock$6(), createElementBlock$6("div", {
    class: normalizeClass$6(_ctx.classes)
  }, [_ctx.$slots.header || _ctx.header ? (openBlock$6(), createElementBlock$6("div", {
    key: 0,
    class: normalizeClass$6(_ctx.headerClasses)
  }, [renderSlot$5(_ctx.$slots, "header", {}, () => [createTextVNode$1(toDisplayString$3(_ctx.header), 1 /* TEXT */)])], 2 /* CLASS */)) : createCommentVNode$5("v-if", true), createElementVNode$4("div", {
    class: normalizeClass$6(`${_ctx.prefixCls}__body`),
    style: normalizeStyle$4(_ctx.bodyStyle)
  }, [renderSlot$5(_ctx.$slots, "default")], 6 /* CLASS, STYLE */), _ctx.$slots.footer ? (openBlock$6(), createElementBlock$6("div", {
    key: 1,
    class: normalizeClass$6(_ctx.footerClasses)
  }, [renderSlot$5(_ctx.$slots, "footer")], 2 /* CLASS */)) : createCommentVNode$5("v-if", true)], 2 /* CLASS */);
}

script$6.render = render$6;
script$6.__file = "components/card/card.vue";

const FCard = withInstall(script$6);

const {inject: inject$3,ref: ref$e,computed: computed$d} = await importShared('vue');

function useSelect(_ref) {
  let {
    props,
    emit,
    parent
  } = _ref;
  const {
    validate,
    isFormDisabled
  } = useFormAdaptor({
    valueType: 'boolean'
  });
  const group = inject$3(parent.groupKey, null);
  const focus = ref$e(false);
  const hover = ref$e(false);
  const isGroup = group !== null;
  const [currentValue, updateCurrentValue] = useNormalModel(props, emit);
  const checked = computed$d(() => {
    if (!isGroup) {
      return currentValue.value;
    }
    return group.isSelect(props.value);
  });
  const innerDisabled = computed$d(() => {
    var _group$props;
    return props.disabled || isGroup && (group === null || group === void 0 || (_group$props = group.props) === null || _group$props === void 0 ? void 0 : _group$props.disabled) || isFormDisabled.value;
  });
  const handleClick = () => {
    if (innerDisabled.value) {
      return;
    }
    if (isGroup) {
      group.onSelect(props.value, () => {
        const newVal = group.isSelect(props.value);
        emit(CHANGE_EVENT, newVal);
      });
    } else {
      const newVal = !currentValue.value;
      updateCurrentValue(newVal);
      emit(CHANGE_EVENT, newVal);
      validate(CHANGE_EVENT);
    }
  };
  const handleMouseOver = () => {
    hover.value = true;
  };
  const handleMouseOut = () => {
    hover.value = false;
  };
  return {
    currentValue,
    updateCurrentValue,
    checked,
    innerDisabled,
    isGroup,
    group,
    focus,
    hover,
    handleClick,
    handleMouseOver,
    handleMouseOut
  };
}

const COMPONENT_NAME$2 = 'FCheckboxGroup';
const checkboxGroupKey = Symbol('FCheckboxGroup');

const checkboxProps = {
  modelValue: Boolean,
  indeterminate: Boolean,
  value: [String, Number, Boolean],
  label: [String, Number],
  disabled: Boolean
};

const {defineComponent: defineComponent$c,computed: computed$c,openBlock: openBlock$5,createElementBlock: createElementBlock$5,normalizeClass: normalizeClass$5,createElementVNode: createElementVNode$3,renderSlot: renderSlot$4,createTextVNode,toDisplayString: toDisplayString$2,createCommentVNode: createCommentVNode$4} = await importShared('vue');

const prefixCls$a = getPrefixCls('checkbox');
var script$5 = defineComponent$c({
  name: 'FCheckbox',
  props: checkboxProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    useTheme();
    const {
      isGroup,
      group,
      hover,
      checked,
      innerDisabled,
      handleClick,
      handleMouseOver,
      handleMouseOut
    } = useSelect({
      props,
      emit,
      parent: {
        groupKey: checkboxGroupKey,
        name: COMPONENT_NAME$2
      }
    });
    const wrapperClass = computed$c(() => {
      const arr = [`${prefixCls$a}`];
      if (checked.value) {
        arr.push('is-checked');
      }
      if (innerDisabled.value) {
        arr.push('is-disabled');
      }
      if (hover.value) {
        arr.push('is-hover');
      }
      if (isGroup) {
        var _group$props;
        arr.push('is-item');
        if (group !== null && group !== void 0 && (_group$props = group.props) !== null && _group$props !== void 0 && _group$props.vertical) {
          arr.push('is-item-vertical');
        }
      }
      if (props.indeterminate) {
        arr.push('is-indeterminate');
      }
      return arr;
    });
    return {
      prefixCls: prefixCls$a,
      wrapperClass,
      handleClick,
      handleMouseOver,
      handleMouseOut
    };
  }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock$5(), createElementBlock$5("label", {
    class: normalizeClass$5(_ctx.wrapperClass),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClick && _ctx.handleClick(...arguments);
    }),
    onMouseover: _cache[1] || (_cache[1] = function () {
      return _ctx.handleMouseOver && _ctx.handleMouseOver(...arguments);
    }),
    onMouseout: _cache[2] || (_cache[2] = function () {
      return _ctx.handleMouseOut && _ctx.handleMouseOut(...arguments);
    })
  }, [createElementVNode$3("span", {
    class: normalizeClass$5(`${_ctx.prefixCls}-inner`)
  }, null, 2 /* CLASS */), _ctx.$slots.default || _ctx.label ? (openBlock$5(), createElementBlock$5("span", {
    key: 0,
    class: normalizeClass$5(`${_ctx.prefixCls}-content`)
  }, [renderSlot$4(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString$2(_ctx.label), 1 /* TEXT */)])], 2 /* CLASS */)) : createCommentVNode$4("v-if", true)], 34 /* CLASS, NEED_HYDRATION */);
}

script$5.render = render$5;
script$5.__file = "components/checkbox/checkbox.vue";

const FCheckbox = withInstall(script$5);

const {provide: provide$2,unref} = await importShared('vue');

const useCheckboxGroup = (props, emit) => {
  const {
    validate,
    isFormDisabled
  } = useFormAdaptor({
    valueType: 'array',
    forbidChildValidate: true
  });
  const [currentValue, updateItem] = useArrayModel(props, emit);
  const handleChange = () => {
    emit(CHANGE_EVENT, currentValue.value);
    validate(CHANGE_EVENT);
  };
  const isSelect = value => {
    const groupVal = unref(currentValue);
    const itemVal = unref(value);
    if (groupVal === null || itemVal === null) {
      return false;
    }
    return groupVal.includes(itemVal);
  };
  const onSelect = (value, afterSelectHandler) => {
    updateItem(unref(value));
    handleChange();
    afterSelectHandler();
  };
  provide$2(checkboxGroupKey, {
    name: COMPONENT_NAME$2,
    isSelect,
    onSelect,
    props
  });
  return {
    isFormDisabled
  };
};

const checkboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => []
  },
  vertical: Boolean,
  disabled: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  valueField: {
    type: String,
    default: 'value'
  },
  labelField: {
    type: String,
    default: 'label'
  }
};

const {defineComponent: defineComponent$b,computed: computed$b,resolveComponent: resolveComponent$4,openBlock: openBlock$4,createElementBlock: createElementBlock$4,normalizeClass: normalizeClass$4,renderSlot: renderSlot$3,Fragment: Fragment$4,renderList,createBlock: createBlock$3} = await importShared('vue');

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const prefixCls$9 = getPrefixCls('checkbox-group');
var script$4 = defineComponent$b({
  name: COMPONENT_NAME$2,
  components: {
    Checkbox: FCheckbox
  },
  props: checkboxGroupProps,
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    useTheme();
    const {
      isFormDisabled
    } = useCheckboxGroup(props, emit);
    const classList = computed$b(() => [prefixCls$9, props.vertical && 'is-vertical', (isFormDisabled.value || props.disabled) && 'is-disabled']);
    const optionsRef = computed$b(() => props.options ? props.options.map(opt => {
      return _objectSpread$5(_objectSpread$5({}, opt), {}, {
        value: opt[props.valueField],
        label: opt[props.labelField]
      });
    }) : []);
    return {
      classList,
      optionsRef
    };
  }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent$4("Checkbox");
  return openBlock$4(), createElementBlock$4("div", {
    class: normalizeClass$4(_ctx.classList)
  }, [renderSlot$3(_ctx.$slots, "default"), (openBlock$4(true), createElementBlock$4(Fragment$4, null, renderList(_ctx.optionsRef, opt => {
    return openBlock$4(), createBlock$3(_component_Checkbox, {
      key: opt.value,
      value: opt.value,
      label: opt.label,
      disabled: opt.disabled
    }, null, 8 /* PROPS */, ["value", "label", "disabled"]);
  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */);
}

script$4.render = render$4;
script$4.__file = "components/checkbox-group/checkbox-group.vue";

const FCheckboxGroup = withInstall(script$4);

const {ref: ref$d} = await importShared('vue');


function useInput(updateValue) {
  const isComposing = ref$d(false);
  const handleInput = event => {
    if (event instanceof InputEvent && !event.isComposing) {
      isComposing.value = false;
    }
    if (!isComposing.value) {
      if (event instanceof Event) {
        const {
          value
        } = event.target;
        updateValue(value);
      } else {
        updateValue(event);
      }
    }
  };
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionEnd = event => {
    if (isComposing.value) {
      isComposing.value = false;
      handleInput(event);
    }
  };
  return {
    handleInput,
    handleCompositionStart,
    handleCompositionEnd
  };
}

const {ref: ref$c} = await importShared('vue');


function useFocus(emit, validate) {
  const focused = ref$c(false);
  const handleFocus = event => {
    focused.value = true;
    emit('focus', event);
  };
  const handleBlur = event => {
    focused.value = false;
    emit('blur', event);
    validate('blur');
  };
  return {
    focused,
    handleFocus,
    handleBlur
  };
}
function useMouse(emit) {
  const hovering = ref$c(false);
  const onMouseLeave = e => {
    hovering.value = false;
    emit('mouseleave', e);
  };
  const onMouseEnter = e => {
    hovering.value = true;
    emit('mouseenter', e);
  };
  return {
    hovering,
    onMouseLeave,
    onMouseEnter
  };
}

const commonInputProps = {
  modelValue: {
    type: [Number, String]
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: Number
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  inputStyle: {
    type: Object,
    default: () => ({})
  },
  autocomplete: {
    type: String,
    default: 'off'
  }
};

const {defineComponent: defineComponent$a,ref: ref$b,computed: computed$a,resolveComponent: resolveComponent$3,openBlock: openBlock$3,createElementBlock: createElementBlock$3,normalizeClass: normalizeClass$3,createCommentVNode: createCommentVNode$3,renderSlot: renderSlot$2,createElementVNode: createElementVNode$2,normalizeStyle: normalizeStyle$3,withKeys,withModifiers: withModifiers$1,createBlock: createBlock$2,Fragment: Fragment$3} = await importShared('vue');

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const inputInnerProps = _objectSpread$4(_objectSpread$4({}, commonInputProps), {}, {
  // 内部使用，处理页面存在多个 input focus 样式场景
  innerIsFocus: Boolean,
  innerIsError: Boolean,
  canEdit: {
    type: Boolean,
    default: true
  }
});
const prefixCls$8 = getPrefixCls('input-inner');
function usePassword(currentValue, props, focused) {
  const passwordVisible = ref$b(false);
  const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  const showPwdSwitchIcon = computed$a(() => props.showPassword && !props.readonly && !props.disabled && (currentValue.value != null || focused.value));
  return {
    passwordVisible,
    handlePasswordVisible,
    showPwdSwitchIcon
  };
}
function useClear(currentValue, props, focused, hovering, handleValueChange, emit) {
  const showClear = computed$a(() => props.clearable && !props.readonly && !props.disabled && currentValue.value && (focused.value || hovering.value));
  const clear = () => {
    if (currentValue.value !== '') {
      handleValueChange('');
    }
    emit('clear');
  };
  return {
    showClear,
    clear
  };
}
var script$3 = defineComponent$a({
  name: 'FInputInner',
  components: {
    EyeOutlined,
    EyeInvisibleOutlined,
    CloseCircleFilled
  },
  props: inputInnerProps,
  emits: [UPDATE_MODEL_EVENT, 'input', 'focus', 'blur', 'change', 'clear', 'keydown', 'mouseleave', 'mouseenter'],
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const inputRefEl = ref$b();
    const [currentValue, updateCurrentValue] = useNormalModel(props, emit);
    const suffixVisible = computed$a(() => props.showPassword || props.clearable);
    const handleValueChange = value => {
      updateCurrentValue(value);
      emit('input', value);
    };
    const focused = ref$b(false);
    const handleFocus = event => {
      focused.value = true;
      emit('focus', event);
    };
    const handleBlur = event => {
      focused.value = false;
      emit('blur', event);
    };
    const {
      hovering,
      onMouseLeave,
      onMouseEnter
    } = useMouse(emit);
    const handleChange = debounce(event => {
      const {
        value
      } = event.target;
      emit('change', value);
    });
    const handleKeydown = e => {
      emit('keydown', e);
    };
    const {
      showClear,
      clear
    } = useClear(currentValue, props, focused, hovering, handleValueChange, emit);
    const focus = () => {
      inputRefEl.value.focus();
    };
    const blur = () => {
      inputRefEl.value.blur();
    };
    const handleMousedown = e => {
      if (props.disabled) {
        return;
      }
      const {
        tagName
      } = e.target;
      if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (!focused.value) {
          focus();
        }
      }
    };
    return _objectSpread$4(_objectSpread$4({
      inputRefEl,
      // 外部使用
      focus,
      blur,
      focused,
      handleFocus,
      handleBlur,
      showClear,
      clear,
      handleChange,
      onMouseLeave,
      onMouseEnter,
      handleMousedown,
      handleKeydown,
      prefixCls: prefixCls$8,
      suffixVisible,
      currentValue
    }, useInput(handleValueChange)), usePassword(currentValue, props, focused));
  }
});

const _hoisted_1$8 = ["tabindex", "value", "maxlength", "type", "readonly", "disabled", "placeholder", "autocomplete"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CloseCircleFilled = resolveComponent$3("CloseCircleFilled");
  const _component_EyeOutlined = resolveComponent$3("EyeOutlined");
  const _component_EyeInvisibleOutlined = resolveComponent$3("EyeInvisibleOutlined");
  return openBlock$3(), createElementBlock$3("span", {
    class: normalizeClass$3([_ctx.prefixCls, (_ctx.focused || _ctx.innerIsFocus) && `${_ctx.prefixCls}-focus`, _ctx.disabled && `${_ctx.prefixCls}-disabled`, _ctx.innerIsError && `${_ctx.prefixCls}-error`]),
    onMousedown: _cache[9] || (_cache[9] = function () {
      return _ctx.handleMousedown && _ctx.handleMousedown(...arguments);
    }),
    onMouseenter: _cache[10] || (_cache[10] = function () {
      return _ctx.onMouseEnter && _ctx.onMouseEnter(...arguments);
    }),
    onMouseleave: _cache[11] || (_cache[11] = function () {
      return _ctx.onMouseLeave && _ctx.onMouseLeave(...arguments);
    })
  }, [createCommentVNode$3(" 前置内容 "), _ctx.$slots.prefix ? (openBlock$3(), createElementBlock$3("span", {
    key: 0,
    class: normalizeClass$3(`${_ctx.prefixCls}-prefix`)
  }, [renderSlot$2(_ctx.$slots, "prefix")], 2 /* CLASS */)) : createCommentVNode$3("v-if", true), createElementVNode$2("input", {
    ref: "inputRefEl",
    tabindex: !_ctx.disabled ? 0 : undefined,
    value: _ctx.currentValue,
    maxlength: _ctx.maxlength,
    type: _ctx.showPassword ? _ctx.passwordVisible ? 'text' : 'password' : _ctx.type,
    readonly: !_ctx.canEdit || _ctx.readonly,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    autocomplete: _ctx.autocomplete,
    style: normalizeStyle$3(_ctx.inputStyle),
    class: normalizeClass$3(`${_ctx.prefixCls}-el`),
    onCompositionstart: _cache[0] || (_cache[0] = function () {
      return _ctx.handleCompositionStart && _ctx.handleCompositionStart(...arguments);
    }),
    onCompositionend: _cache[1] || (_cache[1] = function () {
      return _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...arguments);
    }),
    onInput: _cache[2] || (_cache[2] = function () {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    }),
    onKeydown: [_cache[4] || (_cache[4] = withKeys(function () {
      return _ctx.handleChange && _ctx.handleChange(...arguments);
    }, ["enter"])), _cache[7] || (_cache[7] = function () {
      return _ctx.handleKeydown && _ctx.handleKeydown(...arguments);
    })],
    onFocus: _cache[5] || (_cache[5] = function () {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function () {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    })
  }, null, 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_1$8), createCommentVNode$3(" 后置内容 "), _ctx.$slots.suffix || _ctx.suffixVisible ? (openBlock$3(), createElementBlock$3("span", {
    key: 1,
    class: normalizeClass$3(`${_ctx.prefixCls}-suffix`),
    onMousedown: _cache[8] || (_cache[8] = withModifiers$1(() => {}, ["prevent"]))
  }, [!_ctx.showClear && !_ctx.showPwdSwitchIcon ? renderSlot$2(_ctx.$slots, "suffix", {
    key: 0
  }) : createCommentVNode$3("v-if", true), _ctx.showClear ? (openBlock$3(), createBlock$2(_component_CloseCircleFilled, {
    key: 1,
    class: normalizeClass$3(`${_ctx.prefixCls}-icon`),
    onClick: withModifiers$1(_ctx.clear, ["stop"])
  }, null, 8 /* PROPS */, ["class", "onClick"])) : createCommentVNode$3("v-if", true), _ctx.showPwdSwitchIcon ? (openBlock$3(), createElementBlock$3(Fragment$3, {
    key: 2
  }, [_ctx.passwordVisible ? (openBlock$3(), createBlock$2(_component_EyeOutlined, {
    key: 0,
    class: normalizeClass$3(`${_ctx.prefixCls}-icon`),
    onClick: withModifiers$1(_ctx.handlePasswordVisible, ["stop"])
  }, null, 8 /* PROPS */, ["class", "onClick"])) : (openBlock$3(), createBlock$2(_component_EyeInvisibleOutlined, {
    key: 1,
    class: normalizeClass$3(`${_ctx.prefixCls}-icon`),
    onClick: withModifiers$1(_ctx.handlePasswordVisible, ["stop"])
  }, null, 8 /* PROPS */, ["class", "onClick"]))], 64 /* STABLE_FRAGMENT */)) : createCommentVNode$3("v-if", true)], 34 /* CLASS, NEED_HYDRATION */)) : createCommentVNode$3("v-if", true)], 34 /* CLASS, NEED_HYDRATION */);
}

script$3.render = render$3;
script$3.__file = "components/input/inputInner.vue";

const {defineComponent: defineComponent$9,computed: computed$9,createVNode: createVNode$7} = await importShared('vue');

const prefixCls$7 = getPrefixCls('divider');
const dividerProps = {
  // 是否是垂直方向
  vertical: {
    type: Boolean,
    default: false
  },
  // 文字的位置
  titlePlacement: {
    type: String,
    default: 'center'
  }
};
var divider = defineComponent$9({
  name: 'FDivider',
  props: dividerProps,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useTheme();
    const classList = computed$9(() => [prefixCls$7, props.vertical && 'is-vertical'].filter(Boolean).join(' '));
    return () => {
      var _slots$default;
      return createVNode$7("div", {
        "class": classList.value
      }, [!props.vertical ? createVNode$7("div", {
        "class": `${prefixCls$7}-text is-${props.titlePlacement}`
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]) : null]);
    };
  }
});

const FDivider = withInstall(divider);

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) {
    return false;
  }
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return ` ${el.className} `.indexOf(` ${cls} `) > -1;
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) {
    return;
  }
  let curClass = el.className;
  const classes = (cls || '').split(' ');
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) {
    return;
  }
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;
  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) {
      continue;
    }
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(` ${clsName} `, ' ');
    }
  }
  if (!el.classList) {
    el.className = curClass.trim();
  }
}

/* istanbul ignore next */
// Here I want to use the type CSSProperties, but the definition for CSSProperties
// has { [index: number]: string } in its type annotation, which does not satisfy the method
// camelize(s: string)
// Same as the return type
const getStyle = function (element, styleName) {
  if (!element || !styleName) {
    return '';
  }
  styleName = camelize(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const style = element.style[styleName];
    if (style) {
      return style;
    }
    const computed = document.defaultView.getComputedStyle(element, '');
    return computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
};
let scrollBarWidth;
function getScrollBarWidth() {
  var _outer$parentNode;
  if (scrollBarWidth || scrollBarWidth === 0) {
    return scrollBarWidth;
  }
  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_outer$parentNode = outer.parentNode) === null || _outer$parentNode === void 0 || _outer$parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
}
function isHtmlElement(el) {
  return el && el.nodeType === Node.ELEMENT_NODE;
}
function isScroll(el, isVertical) {
  const overflow = getStyle(el, 'overflow');
  return overflow.match(/(scroll|auto|overlay)/);
}
function getScrollContainer(el, isVertical) {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
}
function isInContainer(el, container) {
  // 仅适用从右往左进入视口和从下往上进入视口
  if (!el || !container) {
    return false;
  }
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
}

const {onUnmounted: onUnmounted$1,watch: watch$7} = await importShared('vue');

const cls = getPrefixCls('popup-hidden');

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 */
function useLockScreen(trigger) {
  let scrollBarWidth = 0;
  let withoutHiddenClass = false;
  let bodyPaddingRight = '0';
  let computedBodyPaddingRight = 0;
  const cleanup = () => {
    removeClass(document.body, cls);
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight;
    }
  };
  onUnmounted$1(() => {
    cleanup();
  });
  watch$7(trigger, val => {
    if (val) {
      withoutHiddenClass = !hasClass(document.body, cls);
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight;
        computedBodyPaddingRight = Number.parseInt(getStyle(document.body, 'paddingRight'), 10);
      }
      scrollBarWidth = getScrollBarWidth();
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
      const bodyOverflowY = getStyle(document.body, 'overflowY');
      if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && withoutHiddenClass) {
        document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarWidth}px`;
      }
      addClass(document.body, cls);
    } else {
      cleanup();
    }
  });
}

const {ref: ref$a,isRef,watch: watch$6,onBeforeUnmount: onBeforeUnmount$1} = await importShared('vue');


function useEsc(action) {
  let escClosable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ref$a(true);
  let open = arguments.length > 2 ? arguments[2] : undefined;
  const onGlobalKeyDown = event => {
    if (event.code === 'Escape') {
      action(event);
    }
  };

  // 性能优化，减少事件触发次数
  if (isRef(open)) {
    watch$6(open, () => {
      if (open.value) {
        escClosable.value && window.addEventListener('keydown', onGlobalKeyDown);
      } else {
        window.removeEventListener('keydown', onGlobalKeyDown);
      }
    });
  }
  watch$6(escClosable, () => {
    if (escClosable.value) {
      window.addEventListener('keydown', onGlobalKeyDown);
    } else {
      window.removeEventListener('keydown', onGlobalKeyDown);
    }
  }, {
    immediate: true
  });
  onBeforeUnmount$1(() => {
    window.removeEventListener('keydown', onGlobalKeyDown);
  });
}

const prefixCls$6 = getPrefixCls('drawer');
const COMPONENT_NAME$1 = 'FDrawer';

/** 抽屉拖拽时，最小的尺寸 */
const DRAWER_MIN_SIZE = 200;

const {ref: ref$9,computed: computed$8,onMounted: onMounted$3} = await importShared('vue');

const calcResizableRange = (props, drawerDimension, windowDimension) => {
  if (!props.resizable) {
    return {};
  }
  const clientMaxSize = windowDimension.value;
  const formatSize = size => {
    if (isNil(size)) {
      return undefined;
    }
    if (isNumber(size)) {
      return size;
    }
    const pixelStrMatch = size.match(/^(\d+)px$/);
    if (pixelStrMatch) {
      return Number(pixelStrMatch[1]);
    }
    const percentageStrMatch = size.match(/^(\d+)%$/);
    if (percentageStrMatch) {
      return clientMaxSize * Number(percentageStrMatch[1]) / 100;
    }
    return undefined;
  };

  // 如果 resize 的范围和 height, width 冲突，优先使用后者的值
  let max = formatSize(props.resizeMax);
  let min = formatSize(props.resizeMin);
  if (!isNil(max) && !isNil(min) && min > max) {
    console.warn(`[${COMPONENT_NAME$1}]: resizable range error, min > max`);
    return {};
  }
  const calculatedDimension = formatSize(drawerDimension.value);
  if (!isNil(calculatedDimension)) {
    if (!isNil(max)) {
      max = Math.max(max, calculatedDimension);
    }
    if (!isNil(min)) {
      min = Math.min(min, calculatedDimension);
    }
  }
  return {
    max,
    min
  };
};
const useResizable = _ref => {
  let {
    props,
    drawerDimension
  } = _ref;
  const drawerRef = ref$9(null);
  const placement = computed$8(() => props.placement);
  const resizable = computed$8(() => props.resizable);
  const popDirection = computed$8(() => ['top', 'bottom'].includes(props.placement) ? 'vertical' : 'horizontal');
  const {
    height: windowHeight,
    width: windowWidth
  } = useWindowSize();
  const windowDimension = computed$8(() => popDirection.value === 'vertical' ? windowHeight.value : windowWidth.value);
  const resizableRange = computed$8(() => calcResizableRange(props, drawerDimension, windowDimension));
  let start = 0;
  let lastSizeValue;
  const isActive = ref$9(false);
  const onMousedown = e => {
    if (drawerRef.value) {
      // 鼠标按下时的初始位置
      start = popDirection.value === 'horizontal' ? e.clientX : e.clientY;
      isActive.value = true;

      // 拖拽的时候拿到实时的宽度或者高度
      lastSizeValue = popDirection.value === 'horizontal' ? drawerRef.value.offsetWidth : drawerRef.value.offsetHeight;
    }
  };
  const onMouseup = () => {
    if (!isActive.value) {
      return;
    }
    start = 0;
    isActive.value = false;
  };
  const doResize = event => {
    if (!isActive.value) {
      return;
    }
    event.preventDefault();

    // 偏移量
    const offset = (popDirection.value === 'horizontal' ? event.clientX : event.clientY) - start;
    let nextSize;
    // 根据 位置 偏移量正负加减
    if (['left', 'top'].includes(placement.value)) {
      // 鼠标移动时改变宽度或者高度
      nextSize = lastSizeValue + offset;
    } else {
      // 鼠标移动时改变宽度或者高度
      nextSize = lastSizeValue - offset;
    }

    // 限制抽屉最小、最大可拖拽尺寸
    // 配置的范围限制
    const {
      min: configMin,
      max: configMax
    } = resizableRange.value;
    if (!isNil(configMin) && nextSize < configMin) {
      nextSize = configMin;
    } else if (!isNil(configMax) && nextSize > configMax) {
      nextSize = configMax;
    }
    // 兜底的范围限制
    const maxSize = windowDimension.value;
    if (nextSize < DRAWER_MIN_SIZE) {
      nextSize = DRAWER_MIN_SIZE;
    } else if (nextSize > maxSize) {
      nextSize = maxSize;
    }
    drawerDimension.value = nextSize;
  };

  // 拖拽的 dom 的位置和样式
  const dragClass = computed$8(() => {
    const classArr = [`${prefixCls$6}-drag`];
    switch (placement.value) {
      case 'left':
        classArr.push(`${prefixCls$6}-drag-left`);
        break;
      case 'right':
        classArr.push(`${prefixCls$6}-drag-right`);
        break;
      case 'top':
        classArr.push(`${prefixCls$6}-drag-top`);
        break;
      case 'bottom':
        classArr.push(`${prefixCls$6}-drag-bottom`);
        break;
    }
    return classArr;
  });

  // 可拖拽的时候才发起事件监听
  onMounted$3(() => {
    if (resizable.value) {
      useEventListener(window.document, 'mousemove', doResize);
      useEventListener(window.document, 'mouseup', onMouseup);
    }
  });
  return {
    onMousedown,
    drawerRef,
    dragClass
  };
};

// 通用的属性
const drawerProps = {
  show: Boolean,
  displayDirective: {
    type: String,
    default: 'show'
  },
  closable: {
    type: Boolean,
    default: true
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  escClosable: {
    type: Boolean,
    default: true
  },
  // 没有遮罩层，页面其他交互是否可操作
  operable: {
    type: Boolean,
    default: false
  },
  title: String,
  okText: String,
  okLoading: Boolean,
  cancelText: String,
  showCancel: {
    type: Boolean,
    default: true
  },
  dimension: {
    type: [String, Number]
    // TODO: 废弃 height 和 width 以后，恢复此处默认值
    // default: 520,
  },
  // DEPRECATED: 后续仅支持 dimension
  width: {
    type: [String, Number]
  },
  // DEPRECATED: 后续仅支持 dimension
  height: {
    type: [String, Number]
  },
  footer: {
    type: Boolean,
    default: false
  },
  footerBorder: {
    type: Boolean,
    default: false
  },
  getContainer: {
    type: Function
  },
  placement: {
    type: String,
    default: 'right'
  },
  // 内容外层类名
  contentClass: String,
  // 根类名
  wrapperClass: String,
  resizable: {
    type: Boolean,
    default: false
  },
  resizeMax: {
    type: [String, Number]
  },
  resizeMin: {
    type: [String, Number]
  }
};
const UPDATE_SHOW_EVENT = 'update:show';
const OK_EVENT = 'ok';
const CANCEL_EVENT = 'cancel';
const AFTER_ENTER_EVENT = 'after-enter';
const AFTER_LEAVE_EVENT = 'after-leave';

const {ref: ref$8,watch: watch$5} = await importShared('vue');

// TODO: 废弃 height 和 width 以后，移除此处默认值，恢复 props 中的
const DEFAULT_DIMENSION = 520;
const formatSize = size => {
  if (isNil(size)) {
    return pxfy(DEFAULT_DIMENSION);
  }
  if (isNumber(size)) {
    return pxfy(size);
  }
  return size;
};
const useDrawerDimension = props => {
  const drawerDimension = ref$8(DEFAULT_DIMENSION);
  watch$5([() => props.dimension, () => props.placement, () => props.height, () => props.width], _ref => {
    let [dimension, placement, height, width] = _ref;
    // dimension 的优先级最高
    if (!isNil(dimension)) {
      drawerDimension.value = formatSize(dimension);
      return;
    }
    if (!isNil(width) || !isNil(height)) {
      console.warn(`[${COMPONENT_NAME$1}]: width 和 height 属性即将废弃，请使用 dimension 代替`);
      const dimensionByPlacement = ['top', 'bottom'].includes(placement) ? height : width;
      drawerDimension.value = formatSize(dimensionByPlacement);
      return;
    }
    drawerDimension.value = DEFAULT_DIMENSION;
  }, {
    immediate: true
  });
  return drawerDimension;
};

const {defineComponent: defineComponent$8,ref: ref$7,watch: watch$4,nextTick: nextTick$3,computed: computed$7,createVNode: createVNode$6,Teleport: Teleport$1,Transition,withDirectives: withDirectives$1,vShow: vShow$1,Fragment: Fragment$2} = await importShared('vue');

const Drawer = defineComponent$8({
  name: COMPONENT_NAME$1,
  props: drawerProps,
  emits: [UPDATE_SHOW_EVENT, OK_EVENT, CANCEL_EVENT, AFTER_ENTER_EVENT, AFTER_LEAVE_EVENT],
  setup(props, ctx) {
    useTheme();
    const zIndex = ref$7(PopupManager.nextZIndex());
    const visible = ref$7(false);
    useLockScreen(visible);
    watch$4(() => props.show, () => {
      if (props.show) {
        zIndex.value = PopupManager.nextZIndex();
      }
      nextTick$3(() => {
        visible.value = props.show;
      });
    }, {
      immediate: true
    });
    const config = useConfig();
    const getContainer = computed$7(() => {
      var _config$getContainer;
      return props.getContainer || ((_config$getContainer = config.getContainer) === null || _config$getContainer === void 0 ? void 0 : _config$getContainer.value);
    });
    const {
      t
    } = useLocale();
    function handleCancel(event) {
      ctx.emit(UPDATE_SHOW_EVENT, false);
      ctx.emit(CANCEL_EVENT, event);
    }
    const escClosable = computed$7(() => props.escClosable);
    useEsc(handleCancel, escClosable);
    function handleOk(event) {
      ctx.emit(OK_EVENT, event);
    }
    function handleTransitionAfterEnter(el) {
      ctx.emit(AFTER_ENTER_EVENT, el);
    }
    function handleTransitionAfterLeave(el) {
      ctx.emit(AFTER_LEAVE_EVENT, el);
    }
    const hasHeader = () => ctx.slots.title || props.title;
    function getHeader() {
      var _ctx$slots$title, _ctx$slots;
      const closeJsx = props.closable && createVNode$6("div", {
        "class": `${prefixCls$6}-close`,
        "onClick": handleCancel
      }, [createVNode$6(CloseOutlined, null, null)]);
      if (!hasHeader()) {
        return closeJsx;
      }
      const header = ((_ctx$slots$title = (_ctx$slots = ctx.slots).title) === null || _ctx$slots$title === void 0 ? void 0 : _ctx$slots$title.call(_ctx$slots)) || props.title;
      return createVNode$6("div", {
        "class": `${prefixCls$6}-header`
      }, [header, closeJsx]);
    }
    function getFooter() {
      if (!props.footer) {
        return null;
      }
      let footer;
      if (ctx.slots.footer) {
        footer = ctx.slots.footer();
      } else {
        footer = createVNode$6(Fragment$2, null, [createVNode$6(FButton, {
          "type": "primary",
          "class": "btn-margin",
          "size": "middle",
          "onClick": handleOk,
          "loading": props.okLoading
        }, {
          default: () => [props.okText || t('drawer.okText')]
        }), props.showCancel && createVNode$6(FButton, {
          "size": "middle",
          "onClick": handleCancel
        }, {
          default: () => [props.cancelText || t('drawer.cancelText')]
        })]);
      }
      return createVNode$6("div", {
        "class": {
          [`${prefixCls$6}-footer`]: true,
          [`${prefixCls$6}-footer-has-border`]: props.footerBorder
        }
      }, [footer]);
    }
    const drawerDimension = useDrawerDimension(props);
    const styles = computed$7(() => {
      const sizeStyle = {
        width: '100%',
        height: '100%'
      };
      const dimensionKey = ['top', 'bottom'].includes(props.placement) ? 'height' : 'width';
      sizeStyle[dimensionKey] = isNumber(drawerDimension.value) ? pxfy(drawerDimension.value) : drawerDimension.value;
      return sizeStyle;
    });
    const {
      onMousedown,
      drawerRef,
      dragClass
    } = useResizable({
      props,
      drawerDimension
    });
    const showDom = computed$7(() => props.displayDirective === 'if' && visible.value || props.displayDirective === 'show');
    const wrapperClass = computed$7(() => {
      return [`${prefixCls$6}-wrapper`, props.contentClass].filter(Boolean);
    });
    const rootClass = computed$7(() => {
      return [prefixCls$6, `${prefixCls$6}-${props.placement}`, props.wrapperClass].filter(Boolean);
    });
    return () => {
      var _getContainer$value, _getContainer$value2, _ctx$slots$default, _ctx$slots2;
      return createVNode$6(Teleport$1, {
        "disabled": !((_getContainer$value = getContainer.value) !== null && _getContainer$value !== void 0 && _getContainer$value.call(getContainer)),
        "to": (_getContainer$value2 = getContainer.value) === null || _getContainer$value2 === void 0 ? void 0 : _getContainer$value2.call(getContainer)
      }, {
        default: () => [createVNode$6("div", {
          "class": rootClass.value
        }, [createVNode$6(Transition, {
          "name": `${prefixCls$6}-mask-fade`
        }, {
          default: () => [props.mask && showDom.value && withDirectives$1(createVNode$6("div", {
            "class": `${prefixCls$6}-mask`,
            "style": {
              zIndex: zIndex.value
            }
          }, null), [[vShow$1, visible.value]])]
        }), createVNode$6(Transition, {
          "name": `${prefixCls$6}-fade`,
          "onAfterEnter": handleTransitionAfterEnter,
          "onAfterLeave": handleTransitionAfterLeave
        }, {
          default: () => [showDom.value && withDirectives$1(createVNode$6("div", {
            "class": {
              [`${prefixCls$6}-container`]: true,
              // 没有蒙层时，该属性才生效
              [`${prefixCls$6}-operable`]: !props.mask && props.operable,
              [`${prefixCls$6}-mask-closable`]: props.mask && props.maskClosable,
              [`${prefixCls$6}-no-header`]: !hasHeader(),
              [`${prefixCls$6}-no-footer`]: !props.footer
            },
            "style": {
              zIndex: zIndex.value
            },
            "onClick": event => props.maskClosable && props.mask && handleCancel(event)
          }, [createVNode$6("div", {
            "class": wrapperClass.value,
            "ref": drawerRef,
            "style": styles.value,
            "onClick": event => event.stopPropagation()
          }, [props.resizable && createVNode$6("div", {
            "class": dragClass.value,
            "onMousedown": onMousedown
          }, [createVNode$6("div", {
            "class": `${prefixCls$6}-drag-icon`
          }, null)]), getHeader(), createVNode$6(FScrollbar, {
            "class": `${prefixCls$6}-body-wrapper`,
            "containerClass": `${prefixCls$6}-body-container`,
            "always": true
          }, {
            default: () => [(_ctx$slots$default = (_ctx$slots2 = ctx.slots).default) === null || _ctx$slots$default === void 0 ? void 0 : _ctx$slots$default.call(_ctx$slots2)]
          }), getFooter()])]), [[vShow$1, visible.value]])]
        })])]
      });
    };
  }
});

const FDrawer = withInstall(Drawer);

function download(_ref) {
  let {
    href,
    name
  } = _ref;
  const a = document.createElement('a');
  a.download = name !== null && name !== void 0 ? name : `${Date.now()}`;
  a.href = href;
  a.target = '_blank';
  a.style.display = 'none';
  document.body.append(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
  }, 0);
}

const PREVIEW_PROVIDE_KEY = Symbol('wPreview');

const {ref: ref$6} = await importShared('vue');

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const usePreviewImageDrag = transform => {
  const isDragging = ref$6(false);
  let startX;
  let startY;
  let imgOffsetX;
  let imgOffsetY;
  const handleMouseDown = event => {
    // 取消默认图片拖拽的行为
    event.preventDefault();
    isDragging.value = true;
    // 存储鼠标按下的偏移量和事件发生坐标
    const {
      offsetX,
      offsetY
    } = transform.value;
    startX = event.pageX;
    startY = event.pageY;
    imgOffsetX = offsetX;
    imgOffsetY = offsetY;
    transform.value.enableTransition = false;
  };
  const handleDrag = throttle(event => {
    transform.value = _objectSpread$3(_objectSpread$3({}, transform.value), {}, {
      offsetX: imgOffsetX + event.pageX - startX,
      offsetY: imgOffsetY + event.pageY - startY
    });
  });

  // mousemove 事件监听 document 拖拽效果更流畅
  useEventListener(document, 'mousemove', event => {
    if (!isDragging.value) {
      return;
    }
    handleDrag(event);
  });
  useEventListener(document, 'mouseup', () => {
    if (!isDragging.value) {
      return;
    }
    isDragging.value = false;
  });
  return {
    isDragging,
    handleMouseDown
  };
};

const {defineComponent: defineComponent$7,ref: ref$5,inject: inject$2,computed: computed$6,onBeforeUnmount,watch: watch$3,resolveComponent: resolveComponent$2,openBlock: openBlock$2,createBlock: createBlock$1,Teleport,withDirectives,createElementVNode: createElementVNode$1,normalizeClass: normalizeClass$2,normalizeStyle: normalizeStyle$2,withModifiers,createCommentVNode: createCommentVNode$2,createVNode: createVNode$5,createElementBlock: createElementBlock$2,toDisplayString: toDisplayString$1,vShow} = await importShared('vue');

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const prefixCls$5 = getPrefixCls('preview');
const previewProps = {
  show: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ''
  },
  download: {
    type: Boolean,
    default: false
  },
  getContainer: {
    type: Function
  },
  size: Object,
  name: String
};
var script$2 = defineComponent$7({
  name: 'FPreview',
  components: {
    LeftOutlined,
    RightOutlined,
    CloseOutlined,
    ReloadOutlined,
    RotateLeftOutlined,
    SearchPlusOutlined,
    SearchMinusOutlined,
    DownloadOutlined
  },
  props: previewProps,
  emits: [CLOSE_EVENT],
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const containerRef = ref$5();
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    const zIndex = ref$5(PopupManager.nextZIndex());
    const transform = ref$5({
      scale: 1,
      rotateDeg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const {
      isGroup,
      next,
      prev
    } = inject$2(PREVIEW_PROVIDE_KEY, {
      isGroup: ref$5(false),
      next: noop,
      prev: noop
    });
    const config = useConfig();
    const getContainer = computed$6(() => {
      var _config$getContainer;
      return props.getContainer || ((_config$getContainer = config.getContainer) === null || _config$getContainer === void 0 ? void 0 : _config$getContainer.value);
    });
    const previewStyle = computed$6(() => {
      const {
        scale,
        rotateDeg,
        offsetX,
        offsetY,
        enableTransition
      } = transform.value;
      const style = {
        transform: [`translate(${offsetX}px, ${offsetY}px)`, `scale(${scale})`, `rotate(${rotateDeg}deg)`].join(' '),
        transition: enableTransition ? 'transform .3s' : ''
      };
      if (props.size.height > clientHeight || props.size.width > clientWidth) {
        if (props.size.height / props.size.width >= clientHeight / clientWidth) {
          style.height = `${clientHeight}px`;
          style.width = 'auto';
        } else {
          style.width = `${clientWidth}px`;
          style.height = 'auto';
        }
      }
      return style;
    });
    const handleActions = (action, option) => {
      const {
        zoomRate,
        rotateDeg,
        enableTransition
      } = _objectSpread$2({
        zoomRate: 1.1,
        rotateDeg: 90,
        enableTransition: true
      }, option);
      switch (action) {
        case 'zoomOut':
          if (transform.value.scale < 0.2) {
            break;
          }
          transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
          break;
        case 'zoomIn':
          transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
          break;
        case 'rotateLeft':
          transform.value.rotateDeg -= rotateDeg;
          break;
        case 'rotateRight':
          transform.value.rotateDeg += rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    };
    const reset = () => {
      transform.value = {
        scale: 1,
        rotateDeg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    };
    let rafId;
    useEventListener(containerRef, 'wheel', e => {
      e.preventDefault();
      rafId = requestAnimationFrame(() => {
        const delta = e.deltaY ? e.deltaY : e.detail;
        handleActions(delta < 0 ? 'zoomIn' : 'zoomOut', {
          enableTransition: false
        });
      });
    }, {
      passive: false
    });
    onBeforeUnmount(() => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    });
    const {
      isDragging,
      handleMouseDown
    } = usePreviewImageDrag(transform);
    const handleClose = () => {
      emit(CLOSE_EVENT);
    };
    watch$3(() => props.src, () => {
      reset();
    });
    return {
      containerRef,
      prefixCls: prefixCls$5,
      handleClose,
      isGroup,
      prev,
      next,
      handleActions,
      previewStyle,
      zIndex,
      isDragging,
      handleMouseDown,
      getContainer
    };
  }
});

const _hoisted_1$7 = ["download", "href"];
const _hoisted_2$3 = ["src"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$getContainer, _ctx$getContainer2;
  const _component_CloseOutlined = resolveComponent$2("CloseOutlined");
  const _component_LeftOutlined = resolveComponent$2("LeftOutlined");
  const _component_RightOutlined = resolveComponent$2("RightOutlined");
  const _component_SearchMinusOutlined = resolveComponent$2("SearchMinusOutlined");
  const _component_SearchPlusOutlined = resolveComponent$2("SearchPlusOutlined");
  const _component_DownloadOutlined = resolveComponent$2("DownloadOutlined");
  const _component_RotateLeftOutlined = resolveComponent$2("RotateLeftOutlined");
  const _component_ReloadOutlined = resolveComponent$2("ReloadOutlined");
  return openBlock$2(), createBlock$1(Teleport, {
    disabled: !((_ctx$getContainer = _ctx.getContainer) !== null && _ctx$getContainer !== void 0 && _ctx$getContainer.call(_ctx)),
    to: (_ctx$getContainer2 = _ctx.getContainer) === null || _ctx$getContainer2 === void 0 ? void 0 : _ctx$getContainer2.call(_ctx)
  }, [withDirectives(createElementVNode$1("div", {
    ref: "containerRef",
    class: normalizeClass$2(`${_ctx.prefixCls}`),
    style: normalizeStyle$2({
      zIndex: _ctx.zIndex
    }),
    onClick: _cache[8] || (_cache[8] = withModifiers($event => _ctx.hideOnClickModal && _ctx.handleClose(), ["self"]))
  }, [createCommentVNode$2(" close "), createElementVNode$1("div", {
    class: normalizeClass$2([`${_ctx.prefixCls}__close`, `${_ctx.prefixCls}__btn`]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClose && _ctx.handleClose(...arguments);
    })
  }, [createVNode$5(_component_CloseOutlined)], 2 /* CLASS */), createCommentVNode$2(" arrow "), _ctx.isGroup ? (openBlock$2(), createElementBlock$2("div", {
    key: 0,
    class: normalizeClass$2([`${_ctx.prefixCls}__arrow-left`, `${_ctx.prefixCls}__btn`]),
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.prev && _ctx.prev(...arguments);
    })
  }, [createVNode$5(_component_LeftOutlined)], 2 /* CLASS */)) : createCommentVNode$2("v-if", true), _ctx.isGroup ? (openBlock$2(), createElementBlock$2("div", {
    key: 1,
    class: normalizeClass$2([`${_ctx.prefixCls}__arrow-right`, `${_ctx.prefixCls}__btn`]),
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.next && _ctx.next(...arguments);
    })
  }, [createVNode$5(_component_RightOutlined)], 2 /* CLASS */)) : createCommentVNode$2("v-if", true), _ctx.name ? (openBlock$2(), createElementBlock$2("div", {
    key: 2,
    class: normalizeClass$2(`${_ctx.prefixCls}__name`)
  }, toDisplayString$1(`${_ctx.name}(${_ctx.size.width}x${_ctx.size.height})`), 3 /* TEXT, CLASS */)) : createCommentVNode$2("v-if", true), createCommentVNode$2(" toolBar "), createElementVNode$1("div", {
    class: normalizeClass$2(`${_ctx.prefixCls}__toolBar`)
  }, [createVNode$5(_component_SearchMinusOutlined, {
    class: normalizeClass$2(`${_ctx.prefixCls}-zoom-out`),
    onClick: _cache[3] || (_cache[3] = $event => _ctx.handleActions('zoomOut', {
      zoomRate: 1.2
    }))
  }, null, 8 /* PROPS */, ["class"]), createVNode$5(_component_SearchPlusOutlined, {
    class: normalizeClass$2(`${_ctx.prefixCls}-zoom-in`),
    onClick: _cache[4] || (_cache[4] = $event => _ctx.handleActions('zoomIn', {
      zoomRate: 1.2
    }))
  }, null, 8 /* PROPS */, ["class"]), _ctx.download ? (openBlock$2(), createElementBlock$2("a", {
    key: 0,
    download: _ctx.name || Date.now(),
    href: _ctx.src,
    target: "_blank",
    class: normalizeClass$2(`${_ctx.prefixCls}-download`)
  }, [createVNode$5(_component_DownloadOutlined)], 10 /* CLASS, PROPS */, _hoisted_1$7)) : createCommentVNode$2("v-if", true), createVNode$5(_component_RotateLeftOutlined, {
    class: normalizeClass$2(`${_ctx.prefixCls}-rotate-left`),
    onClick: _cache[5] || (_cache[5] = $event => _ctx.handleActions('rotateLeft'))
  }, null, 8 /* PROPS */, ["class"]), createVNode$5(_component_ReloadOutlined, {
    class: normalizeClass$2(`${_ctx.prefixCls}-rotate-right`),
    onClick: _cache[6] || (_cache[6] = $event => _ctx.handleActions('rotateRight'))
  }, null, 8 /* PROPS */, ["class"])], 2 /* CLASS */), createCommentVNode$2(" canvas "), createElementVNode$1("img", {
    class: normalizeClass$2({
      [`${_ctx.prefixCls}__canvas`]: true,
      'is-dragging': _ctx.isDragging
    }),
    src: _ctx.src,
    style: normalizeStyle$2(_ctx.previewStyle),
    onMousedown: _cache[7] || (_cache[7] = function () {
      return _ctx.handleMouseDown && _ctx.handleMouseDown(...arguments);
    })
  }, null, 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_2$3)], 6 /* CLASS, STYLE */), [[vShow, _ctx.show]])], 8 /* PROPS */, ["disabled", "to"]);
}

script$2.render = render$2;
script$2.__file = "components/image/preview.vue";

const {defineComponent: defineComponent$6,ref: ref$4,computed: computed$5,reactive: reactive$1,inject: inject$1,watch: watch$2,onUnmounted,nextTick: nextTick$2,resolveComponent: resolveComponent$1,openBlock: openBlock$1,createElementBlock: createElementBlock$1,normalizeClass: normalizeClass$1,normalizeStyle: normalizeStyle$1,renderSlot: renderSlot$1,createElementVNode,createVNode: createVNode$4,mergeProps,createBlock,createCommentVNode: createCommentVNode$1} = await importShared('vue');

const prefixCls$4 = getPrefixCls('img');
let curIndex = 0;
let prevOverflow$1 = '';
const imageProps = {
  src: {
    type: String,
    default: ''
  },
  name: String,
  preview: {
    type: Boolean,
    default: false
  },
  fit: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: false
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  scrollContainer: [String, Object],
  download: {
    type: Boolean,
    default: false
  },
  previewContainer: {
    type: Function
  },
  height: [String, Number],
  width: [String, Number]
};
var script$1 = defineComponent$6({
  name: 'FImage',
  componentName: 'FImage',
  components: {
    Preview: script$2,
    PictureOutlined,
    PictureFailOutlined
  },
  props: imageProps,
  emits: [ERROR_EVENT, LOAD_EVENT, CLOSE_EVENT],
  setup(props, _ref) {
    let {
      attrs,
      emit
    } = _ref;
    useTheme();
    const loading = ref$4(true);
    const isLoadError = ref$4(false);
    const container = ref$4(null);
    const isShowPreview = ref$4(false);
    const currentId = ref$4(curIndex++);
    const imgAttrs = computed$5(() => {
      const {
        crossorigin = undefined,
        decoding = 'auto',
        alt = undefined,
        sizes = undefined,
        srcset = undefined,
        usemap = undefined
      } = attrs;
      return {
        crossorigin,
        decoding,
        alt,
        sizes,
        srcset,
        usemap
      };
    });
    const style = computed$5(() => {
      const {
        width,
        height
      } = props;
      return {
        width: pxfy(width),
        height: pxfy(height)
      };
    });
    const imageSize = reactive$1({
      height: 0,
      width: 0
    });
    const {
      isGroup,
      setShowPreview,
      setCurrent,
      registerImage
    } = inject$1(PREVIEW_PROVIDE_KEY, {
      setShowPreview: noop,
      isGroup: ref$4(false),
      setCurrent: noop,
      registerImage: noopInNoop
    });
    const canPreview = computed$5(() => props.preview && !isLoadError.value);
    const canGroupPreview = computed$5(() => isGroup.value && !isLoadError.value);
    const _scrollContainer = computed$5(() => {
      let dom;
      const _container = props.scrollContainer;
      if (isString(_container) && _container !== '') {
        dom = document.querySelector(_container);
      }
      if (isHtmlElement(_container)) {
        dom = _container;
      } else if (container.value) {
        dom = getScrollContainer(container.value);
      }
      return dom;
    });
    const imageStyle = computed$5(() => {
      const {
        fit
      } = props;
      const styleObj = {
        objectFit: 'fill',
        cursor: ''
      };
      if (fit) {
        styleObj.objectFit = fit;
      }
      if (props.download || canPreview.value || canGroupPreview.value) {
        styleObj.cursor = 'pointer';
      }
      return styleObj;
    });
    const handleLoaded = (e, img) => {
      imageSize.width = img.width;
      imageSize.height = img.height;
      loading.value = false;
      isLoadError.value = false;
      emit(LOAD_EVENT, e);
    };
    const handleError = e => {
      loading.value = false;
      isLoadError.value = true;
      emit(ERROR_EVENT, e);
    };
    let currentImageId = 0;
    const loadImage = () => {
      // loading 为true 才会加载图片
      if (!loading.value) {
        return;
      }
      const img = new Image();
      const imageId = ++currentImageId;
      img.addEventListener('load', e => {
        // 检查 imageId 是否与 currentImageId 相同
        if (imageId !== currentImageId) {
          return;
        }
        handleLoaded(e, img);
      });
      img.addEventListener('error', e => {
        // 检查 imageId 是否与 currentImageId 相同
        if (imageId !== currentImageId) {
          return;
        }
        handleError(e);
      });

      // 赋值开始加载图片src
      img.src = props.src;
    };
    const lazyLoadHandler = useThrottleFn(() => {
      // load image until image enter the container
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
      }
    }, 200);
    let clearScrollListener = noop;
    async function addLazyLoadListener() {
      await nextTick$2();
      if (clearScrollListener) {
        clearScrollListener();
      }
      if (_scrollContainer.value) {
        clearScrollListener = useEventListener(_scrollContainer, 'scroll', lazyLoadHandler);
      }
      lazyLoadHandler();
    }
    function clickHandler() {
      if (canGroupPreview.value) {
        setCurrent(currentId.value);
        setShowPreview(true);
      } else if (canPreview.value) {
        // prevent body scroll
        prevOverflow$1 = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        isShowPreview.value = true;
      } else if (props.download) {
        // 下载
        download({
          href: props.src,
          name: props.name
        });
      }
    }
    function closeViewer() {
      document.body.style.overflow = prevOverflow$1;
      isShowPreview.value = false;
      emit(CLOSE_EVENT);
    }
    watch$2(() => props.src, _src => {
      if (_src) {
        // 将 loading 状态设置为 true
        loading.value = true;
        // 重置 isLoadError 状态
        isLoadError.value = false;
        if (props.lazy) {
          addLazyLoadListener();
        } else {
          loadImage();
        }
      }
    }, {
      immediate: true
    });
    let unRegister = noop;
    watch$2([() => props.src, () => props.name, () => props.download, canGroupPreview], () => {
      unRegister();
      if (canGroupPreview.value) {
        unRegister = registerImage({
          id: currentId.value,
          url: props.src,
          name: props.name,
          size: imageSize,
          download: props.download
        });
      }
    }, {
      immediate: true
    });
    onUnmounted(() => {
      if (unRegister) {
        unRegister();
      }
      if (clearScrollListener) {
        clearScrollListener();
      }
    });
    return {
      imgAttrs,
      imageStyle,
      isShowPreview,
      clickHandler,
      closeViewer,
      container,
      prefixCls: prefixCls$4,
      isLoadError,
      loading,
      imageSize,
      style
    };
  }
});

const _hoisted_1$6 = ["src"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PictureOutlined = resolveComponent$1("PictureOutlined");
  const _component_PictureFailOutlined = resolveComponent$1("PictureFailOutlined");
  const _component_Preview = resolveComponent$1("Preview");
  return openBlock$1(), createElementBlock$1("div", {
    ref: "container",
    class: normalizeClass$1(_ctx.prefixCls),
    style: normalizeStyle$1(_ctx.style)
  }, [_ctx.loading ? renderSlot$1(_ctx.$slots, "placeholder", {
    key: 0
  }, () => [createElementVNode("div", {
    class: normalizeClass$1(`${_ctx.prefixCls}__placeholder`)
  }, [createVNode$4(_component_PictureOutlined), _cache[1] || (_cache[1] = createElementVNode("span", null, "加载中", -1 /* HOISTED */))], 2 /* CLASS */)]) : _ctx.isLoadError ? renderSlot$1(_ctx.$slots, "error", {
    key: 1
  }, () => [createElementVNode("div", {
    class: normalizeClass$1(`${_ctx.prefixCls}__error`)
  }, [createVNode$4(_component_PictureFailOutlined), _cache[2] || (_cache[2] = createElementVNode("span", null, "加载失败", -1 /* HOISTED */))], 2 /* CLASS */)]) : (openBlock$1(), createElementBlock$1("div", {
    key: 2,
    class: normalizeClass$1(`${_ctx.prefixCls}__inner`),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.clickHandler && _ctx.clickHandler(...arguments);
    })
  }, [renderSlot$1(_ctx.$slots, "default", {}, () => [createElementVNode("img", mergeProps({
    src: _ctx.src,
    class: `${_ctx.prefixCls}__inner-image`,
    style: _ctx.imageStyle
  }, _ctx.imgAttrs), null, 16 /* FULL_PROPS */, _hoisted_1$6)])], 2 /* CLASS */)), _ctx.isShowPreview ? (openBlock$1(), createBlock(_component_Preview, {
    key: 3,
    src: _ctx.src,
    name: _ctx.name,
    size: _ctx.imageSize,
    download: _ctx.download,
    "hide-on-click-modal": _ctx.hideOnClickModal,
    getContainer: _ctx.previewContainer,
    onClose: _ctx.closeViewer
  }, null, 8 /* PROPS */, ["src", "name", "size", "download", "hide-on-click-modal", "getContainer", "onClose"])) : createCommentVNode$1("v-if", true)], 6 /* CLASS, STYLE */);
}

script$1.render = render$1;
script$1.__file = "components/image/image.vue";

const {defineComponent: defineComponent$5,reactive,ref: ref$3,computed: computed$4,provide: provide$1,createVNode: createVNode$3,Fragment: Fragment$1} = await importShared('vue');

let prevOverflow = '';
const previewGroupProps = {
  hideOnClickModal: {
    type: Boolean,
    default: false
  }
};
var previewGroup = defineComponent$5({
  name: 'FPreviewGroup',
  props: previewGroupProps,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useTheme();
    const previewUrls = reactive({});
    const curIndex = ref$3();
    const isGroup = ref$3(true);
    const isShowPreview = ref$3(false);
    const setCurrent = val => {
      curIndex.value = val;
    };
    const previewUrlsKeys = computed$4(() => Object.keys(previewUrls));
    const currentPreviewIndex = computed$4(() => previewUrlsKeys.value.indexOf(String(curIndex.value)));
    const registerImage = param => {
      previewUrls[param.id] = param;
      return () => {
        delete previewUrls[param.id];
      };
    };
    const setShowPreview = () => {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      isShowPreview.value = true;
    };
    const closeViewer = () => {
      document.body.style.overflow = prevOverflow;
      isShowPreview.value = false;
    };
    const next = () => {
      if (currentPreviewIndex.value < previewUrlsKeys.value.length - 1) {
        setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
      } else {
        setCurrent(previewUrlsKeys.value[previewUrlsKeys.value.length - currentPreviewIndex.value - 1]);
      }
    };
    const prev = () => {
      if (currentPreviewIndex.value > 0) {
        setCurrent(previewUrlsKeys.value[String(currentPreviewIndex.value - 1)]);
      } else {
        setCurrent(previewUrlsKeys.value[previewUrlsKeys.value.length - currentPreviewIndex.value - 1]);
      }
    };
    provide$1(PREVIEW_PROVIDE_KEY, {
      isGroup,
      prev,
      next,
      registerImage,
      curIndex,
      setCurrent,
      setShowPreview
    });
    return () => {
      var _slots$default;
      return createVNode$3(Fragment$1, null, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), isShowPreview.value && createVNode$3(script$2, {
        "src": previewUrls[curIndex.value].url,
        "name": previewUrls[curIndex.value].name,
        "size": previewUrls[curIndex.value].size,
        "download": previewUrls[curIndex.value].download,
        "hideOnClickModal": props.hideOnClickModal,
        "onClose": closeViewer
      }, null)]);
    };
  }
});

const FImage = withInstall(script$1);
withInstall(previewGroup);

let hiddenTextarea;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue('box-sizing');
  const paddingSize = Number.parseFloat(style.getPropertyValue('padding-bottom')) + Number.parseFloat(style.getPropertyValue('padding-top'));
  const borderSize = Number.parseFloat(style.getPropertyValue('border-bottom-width')) + Number.parseFloat(style.getPropertyValue('border-top-width'));
  const contextStyle = CONTEXT_STYLE.map(name => `${name}:${style.getPropertyValue(name)}`).join(';');
  return {
    contextStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
}
function calcTextareaHeight(targetElement) {
  var _hiddenTextarea$paren;
  let minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
  let height = hiddenTextarea.scrollHeight;
  const result = {
    height: ''
  };
  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }
  hiddenTextarea.value = '';
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_hiddenTextarea$paren = hiddenTextarea.parentNode) === null || _hiddenTextarea$paren === void 0 || _hiddenTextarea$paren.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
}

const {defineComponent: defineComponent$4,ref: ref$2,computed: computed$3,shallowRef,watch: watch$1,nextTick: nextTick$1,onMounted: onMounted$2,resolveComponent,openBlock,createElementBlock,normalizeClass,Fragment,renderSlot,createCommentVNode,createVNode: createVNode$2,createSlots,withCtx,toDisplayString,normalizeStyle} = await importShared('vue');

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const prefixCls$3 = getPrefixCls('input');
const textareaPrefixCls = getPrefixCls('textarea');
const inputProps = _objectSpread$1(_objectSpread$1({}, commonInputProps), {}, {
  rows: {
    type: Number,
    default: 2
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  resize: String
});
function useWordLimit(currentValue, props) {
  const isWordLimitVisible = computed$3(() => props.showWordLimit && props.maxlength && !props.disabled);
  const textLength = computed$3(() => {
    var _currentValue$value;
    return ((_currentValue$value = currentValue.value) === null || _currentValue$value === void 0 ? void 0 : _currentValue$value.toString().length) || 0;
  });
  return {
    isWordLimitVisible,
    textLength
  };
}
var script = defineComponent$4({
  name: 'FInput',
  components: {
    InputInner: script$3
  },
  props: inputProps,
  emits: [UPDATE_MODEL_EVENT, 'change', 'input', 'keydown', 'blur', 'focus', 'clear', 'mouseleave', 'mouseenter'],
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    useTheme();
    const {
      validate,
      isError,
      isFormDisabled
    } = useFormAdaptor();
    const inputRef = ref$2();
    const textareaRef = ref$2();
    const {
      handleFocus,
      handleBlur
    } = useFocus(emit, validate);
    const {
      onMouseLeave,
      onMouseEnter
    } = useMouse(emit);
    const [currentValue, updateCurrentValue] = useNormalModel(props, emit);
    const handleChange = value => {
      emit('change', value);
    };
    const handleTextareaChange = event => {
      const {
        value
      } = event.target;
      handleChange(value);
    };
    const handleValueChange = value => {
      updateCurrentValue(value);
      emit('input', value);
      // 对于 form 表单校验，Input 的 input 事件就是 change 事件
      validate('input');
      validate('change');
    };
    const classes = computed$3(() => [props.type === 'textarea' ? textareaPrefixCls : prefixCls$3, {
      'is-error': isError.value
    }]);
    const innerDisabled = computed$3(() => props.disabled || isFormDisabled.value);
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const textareaStyle = computed$3(() => [props.inputStyle, textareaCalcStyle.value, {
      resize: props.resize
    }]);
    const resizeTextarea = () => {
      const {
        type,
        autosize
      } = props;
      if (type !== 'textarea' || !textareaRef.value) {
        return;
      }
      if (autosize) {
        let minRows;
        let maxRows;
        if (typeof autosize === 'object') {
          minRows = autosize.minRows;
          maxRows = autosize.maxRows;
        }
        textareaCalcStyle.value = _objectSpread$1({}, calcTextareaHeight(textareaRef.value, minRows, maxRows));
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textareaRef.value).minHeight
        };
      }
    };
    watch$1(currentValue, () => {
      nextTick$1(resizeTextarea);
    });
    onMounted$2(() => {
      nextTick$1(resizeTextarea);
    });
    const handleKeydown = e => {
      emit('keydown', e);
    };
    const currentInput = computed$3(() => props.type === 'textarea' ? textareaRef.value : inputRef.value);
    const focus = () => {
      currentInput.value.focus();
    };
    const blur = () => {
      currentInput.value.blur();
    };
    const handleInputClear = () => {
      emit('clear');
    };
    onMounted$2(() => {
      if (props.autofocus) {
        focus();
      }
    });
    return _objectSpread$1(_objectSpread$1({
      innerDisabled,
      isError,
      inputRef,
      textareaRef,
      prefixCls: prefixCls$3,
      textareaPrefixCls,
      classes,
      currentValue
    }, useInput(handleValueChange)), {}, {
      handleFocus,
      handleBlur,
      focus,
      blur,
      handleTextareaChange,
      handleChange,
      handleKeydown,
      handleInputClear,
      onMouseLeave,
      onMouseEnter,
      textareaStyle
    }, useWordLimit(currentValue, props));
  }
});

const _hoisted_1$5 = ["value", "readonly", "disabled", "autocomplete", "maxlength", "placeholder", "rows"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputInner = resolveComponent("InputInner");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([..._ctx.classes, (_ctx.$slots.prepend || _ctx.$slots.append) && `${_ctx.prefixCls}-group`, _ctx.$slots.prepend && `${_ctx.prefixCls}-group-prepend`, _ctx.$slots.append && `${_ctx.prefixCls}-group-append`]),
    onMouseenter: _cache[7] || (_cache[7] = function () {
      return _ctx.onMouseEnter && _ctx.onMouseEnter(...arguments);
    }),
    onMouseleave: _cache[8] || (_cache[8] = function () {
      return _ctx.onMouseLeave && _ctx.onMouseLeave(...arguments);
    })
  }, [_ctx.type !== 'textarea' ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [_ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(`${_ctx.prefixCls}-prepend`)
  }, [renderSlot(_ctx.$slots, "prepend")], 2 /* CLASS */)) : createCommentVNode("v-if", true), createVNode$2(_component_InputInner, {
    ref: "inputRef",
    modelValue: _ctx.currentValue,
    type: _ctx.type,
    placeholder: _ctx.placeholder,
    readonly: _ctx.readonly,
    disabled: _ctx.innerDisabled,
    clearable: _ctx.clearable,
    maxlength: _ctx.maxlength,
    showPassword: _ctx.showPassword,
    inputStyle: _ctx.inputStyle,
    autocomplete: _ctx.autocomplete,
    innerIsError: _ctx.isError,
    onInput: _ctx.handleInput,
    onChange: _ctx.handleChange,
    onFocus: _ctx.handleFocus,
    onBlur: _ctx.handleBlur,
    onKeydown: _ctx.handleKeydown,
    onClear: _ctx.handleInputClear
  }, createSlots({
    _: 2 /* DYNAMIC */
  }, [_ctx.$slots.prefix ? {
    name: "prefix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "prefix")]),
    key: "0"
  } : undefined, _ctx.$slots.suffix || _ctx.isWordLimitVisible ? {
    name: "suffix",
    fn: withCtx(() => [renderSlot(_ctx.$slots, "suffix"), _ctx.isWordLimitVisible ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-count`)
    }, toDisplayString(_ctx.textLength) + "/" + toDisplayString(_ctx.maxlength), 3 /* TEXT, CLASS */)) : createCommentVNode("v-if", true)]),
    key: "1"
  } : undefined]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "type", "placeholder", "readonly", "disabled", "clearable", "maxlength", "showPassword", "inputStyle", "autocomplete", "innerIsError", "onInput", "onChange", "onFocus", "onBlur", "onKeydown", "onClear"]), _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass(`${_ctx.prefixCls}-append`)
  }, [renderSlot(_ctx.$slots, "append")], 2 /* CLASS */)) : createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (openBlock(), createElementBlock("textarea", {
    key: 1,
    ref: "textareaRef",
    value: _ctx.currentValue,
    style: normalizeStyle(_ctx.textareaStyle),
    class: normalizeClass(`${_ctx.textareaPrefixCls}-inner`),
    readonly: _ctx.readonly,
    disabled: _ctx.innerDisabled,
    autocomplete: _ctx.autocomplete,
    maxlength: _ctx.maxlength,
    placeholder: _ctx.placeholder,
    rows: _ctx.rows,
    onCompositionstart: _cache[0] || (_cache[0] = function () {
      return _ctx.handleCompositionStart && _ctx.handleCompositionStart(...arguments);
    }),
    onCompositionend: _cache[1] || (_cache[1] = function () {
      return _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...arguments);
    }),
    onInput: _cache[2] || (_cache[2] = function () {
      return _ctx.handleInput && _ctx.handleInput(...arguments);
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return _ctx.handleTextareaChange && _ctx.handleTextareaChange(...arguments);
    }),
    onFocus: _cache[4] || (_cache[4] = function () {
      return _ctx.handleFocus && _ctx.handleFocus(...arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function () {
      return _ctx.handleBlur && _ctx.handleBlur(...arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function () {
      return _ctx.handleKeydown && _ctx.handleKeydown(...arguments);
    })
  }, null, 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_1$5)), _ctx.isWordLimitVisible && _ctx.type === 'textarea' ? (openBlock(), createElementBlock("span", {
    key: 2,
    class: normalizeClass(`${_ctx.textareaPrefixCls}-count`)
  }, toDisplayString(_ctx.textLength) + "/" + toDisplayString(_ctx.maxlength), 3 /* TEXT, CLASS */)) : createCommentVNode("v-if", true)], 34 /* CLASS, NEED_HYDRATION */);
}

script.render = render;
script.__file = "components/input/input.vue";

const FInput = withInstall(script);

const textProps = {
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'middle'
  },
  strong: Boolean,
  italic: Boolean,
  tag: {
    type: String,
    default: 'span'
  },
  gradient: {
    type: [Object, String]
  }
};

const {defineComponent: defineComponent$3,computed: computed$2,h} = await importShared('vue');

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
const prefixCls$2 = getPrefixCls('text');
var text = defineComponent$3({
  name: 'FText',
  components: {},
  props: _objectSpread({}, textProps),
  setup(props) {
    useTheme();
    const isGradient = computed$2(() => {
      return isObject(props.gradient) && props.gradient.from && props.gradient.to;
    });
    const textClass = computed$2(() => ({
      [prefixCls$2]: true,
      [`${prefixCls$2}-type--${props.type}`]: props.type,
      [`${prefixCls$2}-size--${props.size}`]: props.size,
      [`${prefixCls$2}-text--strong`]: props.strong,
      [`${prefixCls$2}-text--italic`]: props.italic,
      [`${prefixCls$2}-tag--mark`]: props.tag === 'mark',
      // 定义mark样式
      [`${prefixCls$2}-gradient`]: isGradient.value
    }));
    const gradientStyle = computed$2(() => {
      if (isGradient.value) {
        const gradient = props.gradient;
        const deg = degfy(gradient.deg || 0);
        return {
          backgroundImage: `linear-gradient(${deg}, ${gradient.from}, ${gradient.to})`
        };
      } else if (isString(props.gradient)) {
        // 纯色
        return {
          color: props.gradient
        };
      }
      return {};
    });
    return {
      prefixCls: prefixCls$2,
      textClass,
      gradientStyle
    };
  },
  render() {
    const children = getSlot(this.$slots);
    return h(this.tag || 'span', {
      class: this.textClass,
      style: this.gradientStyle
    }, children);
  }
});

const FText = withInstall(text);

function createKey(prefix, suffix) {
  return prefix + (suffix === 'default' ? '' : suffix.replace(/^[a-z]/, startChar => startChar.toUpperCase()));
}

const COMPONENT_NAME = 'FSpace';
const prefixCls$1 = getPrefixCls('space');

const spaceProps = {
  align: {
    type: String,
    default: 'start'
  },
  justify: {
    type: String,
    default: 'start'
  },
  inline: Boolean,
  vertical: Boolean,
  // 是否垂直布局
  size: {
    type: [String, Number, Array],
    default: 'small'
  },
  wrapItem: {
    type: Boolean,
    default: true
  },
  itemStyle: [String, Object],
  wrap: {
    type: Boolean,
    default: true
  }
};

const {defineComponent: defineComponent$2,createVNode: createVNode$1,computed: computed$1} = await importShared('vue');

const useMargin = (props, themeVarsRef) => {
  const margin = computed$1(() => {
    const {
      size
    } = props;
    let horizontal = 0;
    let vertical = 0;
    if (Array.isArray(size)) {
      horizontal = size[0];
      vertical = size[1];
    } else if (typeof size === 'number') {
      horizontal = size;
      vertical = size;
    } else {
      const currentSize = depx(themeVarsRef.value[createKey('padding', size)] || themeVarsRef.value[createKey('padding', 'small')]);
      horizontal = currentSize;
      vertical = currentSize;
    }
    return {
      horizontal: `${horizontal}px`,
      vertical: `${vertical}px`
    };
  });
  return {
    margin
  };
};
var space = defineComponent$2({
  name: COMPONENT_NAME,
  props: spaceProps,
  setup(props) {
    const {
      themeVars
    } = useTheme();
    const {
      margin
    } = useMargin(props, themeVars);
    return {
      prefixCls: prefixCls$1,
      margin
    };
  },
  render() {
    const {
      vertical,
      align,
      inline,
      justify,
      wrapItem,
      itemStyle,
      wrap,
      prefixCls,
      margin
    } = this;
    const children = flatten(getSlot(this.$slots) || []).filter(node => isValidElementNode(node));
    return createVNode$1("div", {
      "role": "none",
      "class": `${prefixCls}`,
      "style": {
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: vertical ? 'column' : 'row',
        justifyContent: ['start', 'end'].includes(justify) ? `flex-${justify}` : justify,
        alignItems: align,
        flexWrap: !wrap || vertical ? 'nowrap' : 'wrap',
        gap: `${margin.vertical} ${margin.horizontal}`
      }
    }, [wrapItem ? children === null || children === void 0 ? void 0 : children.map(child => createVNode$1("div", {
      "role": "none",
      "style": [{
        maxWidth: '100%'
      }, itemStyle]
    }, [child])) : children]);
  }
});

const FSpace = withInstall(space);

const badgeProps = {
  // 显示内容
  value: {
    type: [String, Number]
  },
  // 是否红点模式
  dot: {
    type: Boolean,
    default: false
  },
  // 自定义背景色
  backgroundColor: {
    type: String
  },
  // 是否展示数据0的情况
  showZero: {
    type: Boolean,
    default: false
  },
  // 是否隐藏
  hidden: {
    type: Boolean,
    default: false
  },
  // 封顶阈值
  max: {
    type: Number,
    default: 99
  },
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'danger'
  }
};

const {defineComponent: defineComponent$1,computed,createVNode} = await importShared('vue');

const prefixCls = getPrefixCls('badge');
var badge = defineComponent$1({
  name: 'FBadge',
  props: badgeProps,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useTheme();
    // 展示内容
    const badgeValue = computed(() => {
      if (props.dot) {
        return '';
      }
      // 只有在 value 是数值类型，才生效 超过阈值展示阈值+
      if (isNumber(props.value) && props.value > props.max) {
        return `${props.max}+`;
      }
      return props.value;
    });
    const showBadge = () => {
      // 如果是 hidden ，直接 false，不展示
      if (props.hidden) {
        return false;
      }
      // 有插槽就直接展示自定义插槽内容
      return slots.content || props.dot || isString(props.value) || props.value === 0 && props.showZero || props.value !== 0 && isNumber(props.value);
    };

    // 样式
    const badgeClassList = computed(() => {
      return [`${prefixCls}-sup`, `${prefixCls}-sup-type-${props.type}`, props.dot ? `${prefixCls}-sup-dot` : '', props.size === 'small' ? `${prefixCls}-sup-size-small` : '', !slots.default ? `${prefixCls}-sup-alone` : ''].filter(Boolean);
    });
    const badgeStyle = computed(() => {
      return props.backgroundColor ? {
        backgroundColor: props.backgroundColor
      } : {};
    });
    return () => {
      var _slots$default, _slots$content, _slots$content2;
      return createVNode("div", {
        "class": prefixCls
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), showBadge() && createVNode("span", {
        "class": badgeClassList.value,
        "style": badgeStyle.value
      }, [(_slots$content = (_slots$content2 = slots.content) === null || _slots$content2 === void 0 ? void 0 : _slots$content2.call(slots)) !== null && _slots$content !== void 0 ? _slots$content : badgeValue.value])]);
    };
  }
});

const FBadge = withInstall(badge);

const {createElementVNode:_createElementVNode$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,defineComponent} = await importShared('vue');

const _hoisted_1$4 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const LogoXbox = defineComponent({
  name: 'LogoXbox',
  render: function render(_ctx, _cache) {
    return (
      _openBlock$4(),
      _createElementBlock$4(
        'svg',
        _hoisted_1$4,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode$3(
              'path',
              {
                d: 'M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0 0 77.2 391c0-4.4.6-70.3 49.6-142.7z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$3(
              'path',
              {
                d: 'M480 256a223.71 223.71 0 0 0-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 0 0 480 256z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$3(
              'path',
              {
                d: 'M201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 0 0-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$3(
              'path',
              {
                d: 'M358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 0 0 333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
});

var define_process_env_default$1 = {};
const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,createVNode:_createVNode$3,createElementVNode:_createElementVNode$2,createTextVNode:_createTextVNode$3,withCtx:_withCtx$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');

const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { style: { "width": "280px", "height": "180px", "display": "flex", "justify-content": "center", "align-items": "center" } };
const _hoisted_3$2 = { class: "one-item-qrcode" };
const _hoisted_4$2 = {
  class: "one-item-qrcode",
  style: { "border-left": "2px #a2a2a2 dashed" }
};
const _hoisted_5$2 = { key: 1 };
const {ref: ref$1} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "oneImageQr",
  props: {
    onePreview: {
      default: {
        src: "",
        type: "",
        name: "",
        url: ""
      }
    },
    onePlugin: {
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const publicPath = "./";
    const imgSrc = () => {
      let url = props.onePreview.src;
      if (!url.startsWith("http")) {
        url = publicPath + url;
      }
      return url;
    };
    function sanitizeFilename(filename) {
      const invalidChars = /[\\\/:\*\?"<>\|]/g;
      const controlChars = /[\x00-\x1F\x7F]/g;
      let sanitized = filename.replace(invalidChars, "");
      if (sanitized.startsWith(".")) {
        sanitized = "f" + sanitized;
      }
      sanitized = sanitized.replace(controlChars, "");
      if (sanitized.length > 255) {
        sanitized = sanitized.substring(0, 255);
      }
      return sanitized;
    }
    let hasPreview = true;
    let comUrl = "https://oss.icegl.cn/#/plugins/";
    let imgName = "";
    if (props.onePreview.url) {
      comUrl = props.onePreview.url;
      imgName = encodeURIComponent(sanitizeFilename(comUrl).slice(-16));
      if (props.onePreview.url.startsWith("https://www.icegl.cn/tvtstore/") || props.onePreview.url.startsWith("https://www.bilibili.com/")) {
        hasPreview = false;
      }
    } else {
      if (props.onePlugin.pNode) {
        comUrl += props.onePlugin.pNode + "/";
      }
      comUrl += props.onePlugin.name + "/";
      comUrl += props.onePreview.name + "/";
      imgName = encodeURIComponent((props.onePlugin.name + props.onePreview.name).slice(-16));
    }
    if (!define_process_env_default$1.FES_APP_ONLINE_API) {
      hasPreview = false;
    }
    comUrl = encodeURIComponent(comUrl);
    let miniPre = `https://www.icegl.cn/addons/tvt/mini/onePreview?urlPath=${comUrl}`;
    miniPre = encodeURIComponent(miniPre);
    const urlMobile = ref$1("https://www.icegl.cn/uploads/qrcode/b-" + imgName + ".png");
    const urlmini = ref$1("https://www.icegl.cn/uploads/qrcode/m-" + imgName + ".png");
    const errH5Img = (e) => {
      fetch(
        `https://icegl.cn/addons/qrcode/index/show?text=${comUrl}&logo=1&labelalignment=center&foreground=%23333333&background=%23ffffff&size=180&padding=1&logosize=30&errorcorrection=quartile&imgName=b-${imgName}`
      ).then((response) => {
        response.text().then((data) => {
          urlMobile.value = data;
        }).catch((error) => {
          console.error("Error fetching volume data:", error);
        });
      });
    };
    const errMiNiImg = (e) => {
      fetch(
        `https://icegl.cn/addons/qrcode/index/show?text=${miniPre}&logo=1&labelalignment=center&foreground=%2300367b&background=%23ffffff&size=160&padding=1&logosize=30&errorcorrection=quartile&imgName=m-${imgName}`
      ).then((response) => {
        response.text().then((data) => {
          urlmini.value = data;
        }).catch((error) => {
          console.error("Error fetching volume data:", error);
        });
      });
    };
    const getContainer = (container) => {
      return document.querySelector("#right-page-list-id");
    };
    return (_ctx, _cache) => {
      return _unref$3(hasPreview) ? (_openBlock$3(), _createElementBlock$3("div", _hoisted_1$3, [
        _createVNode$3(_unref$3(FTooltip), {
          mode: "popover",
          offset: -208,
          placement: "bottom",
          getContainer,
          disabled: _unref$3(detectDeviceType)() !== "PC"
        }, {
          content: _withCtx$3(() => [
            _createElementVNode$2("div", _hoisted_2$2, [
              _createElementVNode$2("div", _hoisted_3$2, [
                _createVNode$3(_unref$3(FImage), {
                  src: urlMobile.value,
                  onError: errH5Img
                }, {
                  placeholder: _withCtx$3(() => [..._cache[0] || (_cache[0] = [
                    _createElementVNode$2("div", { class: "image-slot" }, [
                      _createElementVNode$2("div", { class: "image-slot" }, [
                        _createTextVNode$3("生成中"),
                        _createElementVNode$2("span", { class: "dot" }, "...")
                      ])
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["src"]),
                _cache[1] || (_cache[1] = _createElementVNode$2("span", null, "H5移动端", -1))
              ]),
              _createElementVNode$2("div", _hoisted_4$2, [
                _cache[3] || (_cache[3] = _createElementVNode$2("span", null, "微信小程序", -1)),
                _createVNode$3(_unref$3(FImage), {
                  src: urlmini.value,
                  onError: errMiNiImg
                }, {
                  placeholder: _withCtx$3(() => [..._cache[2] || (_cache[2] = [
                    _createElementVNode$2("div", { class: "image-slot" }, [
                      _createElementVNode$2("div", { class: "image-slot" }, [
                        _createTextVNode$3("生成中"),
                        _createElementVNode$2("span", { class: "dot" }, "...")
                      ])
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["src"])
              ])
            ])
          ]),
          default: _withCtx$3(() => [
            _createVNode$3(_unref$3(FImage), {
              class: "w-full max-h-70 h-14em",
              fit: "contain",
              src: imgSrc(),
              lazy: ""
            }, null, 8, ["src"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : (_openBlock$3(), _createElementBlock$3("div", _hoisted_5$2, [
        _createVNode$3(_unref$3(FImage), {
          class: "w-full max-h-70 h-14em",
          fit: "contain",
          src: imgSrc(),
          lazy: ""
        }, null, 8, ["src"])
      ]));
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {toDisplayString:_toDisplayString$1,createTextVNode:_createTextVNode$2,unref:_unref$2,withCtx:_withCtx$2,createVNode:_createVNode$2,openBlock:_openBlock$2,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1,createElementVNode:_createElementVNode$1,renderList:_renderList$1,Fragment:_Fragment$1,createElementBlock:_createElementBlock$2,normalizeClass:_normalizeClass$1} = await importShared('vue');

const _hoisted_1$2 = { style: { "text-decoration": "none", "color": "black" } };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = { class: "flex flex-wrap flex-justify-start content-start mt-6 pl-6" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = {
  key: 0,
  controls: "",
  class: "w-full max-h-70 h-14em"
};
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = {
  key: 2,
  class: "w-full h-48 text-3 text-left mb-2",
  style: { "background-color": "rgb(55 56 61)", "overflow": "hidden", "border-radius": "10px" }
};
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = ["onClick"];
const _hoisted_10$1 = {
  href: "https://oss.icegl.cn/p/zone3Deditor/#/plugins/zone3Deditor/index",
  target: "_blank",
  class: "absolute bottom-11 right--3 no-underline z-99999"
};
const _hoisted_11$1 = { class: "flex items-center gap-1 px-1 py-1 rounded-1 cursor-pointer text-xs font-medium text-blue shadow-lg bg-white/100 backdrop-blur-md border border-white/30 transition-all hover:bg-white/50" };
const {onMounted: onMounted$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "cardList",
  props: {
    onePlugin: {}
  },
  setup(__props) {
    const props = __props;
    const { menuSetup } = useForPreviewStore();
    let publicPath = "./";
    const toAuthorPage = (url) => {
      window.open(url, "_blank");
    };
    onMounted$1(async () => {
      await loadJweixin();
      await loadWebView();
    });
    const router = useRouter();
    const jumpType = (url, addPreUrl) => {
      if (!uni.getEnv) {
        window.open(url, "_blank");
      } else {
        uni.getEnv((res) => {
          if (res.miniprogram) {
            const u = addPreUrl ? "https://oss.icegl.cn" + url : url;
            uni.navigateTo({
              url: "/pages/debugDemo/onePreview/onePreview?urlPath=" + u
            });
          } else {
            window.open(url, "_blank");
          }
        });
      }
    };
    const toPage = (plugin, value, isOnline = false) => {
      if (value.url) {
        return jumpType(value.url, false);
      }
      let path = `/plugins/${plugin.name}/${value.name}`;
      if (plugin.pNode) {
        path = `/plugins/${plugin.pNode}/${plugin.name}/${value.name}`;
      }
      if (isOnline) {
        path = "https://oss.icegl.cn/#" + path;
        return jumpType(path, false);
      }
      let routeUrl = router.resolve({
        path
      });
      return jumpType(routeUrl.href, true);
    };
    const hasStyle = (plugin, value) => {
      if (menuSetup.value) {
        if (menuSetup.value[plugin.name] && menuSetup.value[plugin.name][value]) {
          if (menuSetup.value[plugin.name][value].taglist === "editor") {
            return "";
          }
          return menuSetup.value[plugin.name][value].taglist_text;
        }
      }
      return "";
    };
    const classText = (plugin, value) => {
      if (menuSetup.value) {
        if (menuSetup.value[plugin.name] && menuSetup.value[plugin.name][value]) {
          return menuSetup.value[plugin.name][value].taglist;
        }
      }
      return "";
    };
    const isEditor = (plugin, value) => {
      if (menuSetup.value) {
        if (menuSetup.value[plugin.name] && menuSetup.value[plugin.name][value]) {
          return menuSetup.value[plugin.name][value].taglist === "editor";
        }
      }
      return false;
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2(_Fragment$1, null, [
        _createVNode$2(_unref$2(FDivider), { titlePlacement: "left" }, {
          default: _withCtx$2(() => [
            _createTextVNode$2(_toDisplayString$1(_ctx.onePlugin.title + " - " + _ctx.onePlugin.name), 1)
          ]),
          _: 1
        }),
        _createVNode$2(_unref$2(FSpace), { vertical: "" }, {
          default: _withCtx$2(() => [
            _createElementVNode$1("span", _hoisted_1$2, [
              props.onePlugin.author ? (_openBlock$2(), _createBlock$1(_unref$2(FText), {
                key: 0,
                class: "mt-[-24px] position-absolute right-[12px]",
                onClick: _cache[0] || (_cache[0] = ($event) => toAuthorPage(_ctx.onePlugin.website)),
                style: { "color": "#0f1222", "cursor": "pointer" },
                size: "small"
              }, {
                default: _withCtx$2(() => [
                  _createVNode$2(_unref$2(UserOutlined), { class: "position-relative top-[2px]" }),
                  _createTextVNode$2(" 作者： " + _toDisplayString$1(props.onePlugin.author), 1)
                ]),
                _: 1
              })) : _createCommentVNode$1("", true)
            ]),
            _createElementVNode$1("div", {
              class: "p-2 ml-13",
              style: {},
              innerHTML: props.onePlugin.intro
            }, null, 8, _hoisted_2$1)
          ]),
          _: 1
        }),
        _createElementVNode$1("div", _hoisted_3$1, [
          (_openBlock$2(true), _createElementBlock$2(_Fragment$1, null, _renderList$1(_ctx.onePlugin.preview, (onePreview, okey) => {
            return _openBlock$2(), _createElementBlock$2("div", {
              class: _normalizeClass$1(["w-80 mr-10 mb-10 relative", { "overflow-hidden": !isEditor(props.onePlugin, onePreview.name) }]),
              key: okey
            }, [
              _ctx.onePlugin.waitForGit || onePreview.waitForGit ? (_openBlock$2(), _createElementBlock$2(_Fragment$1, { key: 0 }, [
                hasStyle(props.onePlugin, onePreview.name) ? (_openBlock$2(), _createElementBlock$2("div", {
                  key: 0,
                  class: _normalizeClass$1(["tag-sheared", classText(props.onePlugin, onePreview.name)])
                }, _toDisplayString$1(hasStyle(props.onePlugin, onePreview.name)), 3)) : _createCommentVNode$1("", true),
                _createVNode$2(_unref$2(FCard), {
                  header: onePreview.title,
                  shadow: "hover"
                }, {
                  default: _withCtx$2(() => [
                    _cache[1] || (_cache[1] = _createElementVNode$1("div", {
                      class: "w-full h-48 text-5 line-height-1.5em text-left mb-2 text-#5384ff",
                      style: { "background-color": "rgb(55 56 61)", "overflow": "hidden", "border-radius": "10px" }
                    }, [
                      _createElementVNode$1("div", { class: "p-2" }, "官网已经更新样例功能，请git 更新代码!")
                    ], -1)),
                    _createElementVNode$1("div", {
                      class: "cursor-pointer text-right",
                      style: { "margin-top": "6px", "margin-bottom": "-8px" },
                      onClick: ($event) => toPage(props.onePlugin, onePreview, true)
                    }, " 点击web端演示 ", 8, _hoisted_4$1)
                  ]),
                  _: 2
                }, 1032, ["header"])
              ], 64)) : (_openBlock$2(), _createElementBlock$2(_Fragment$1, { key: 1 }, [
                hasStyle(props.onePlugin, onePreview.name) ? (_openBlock$2(), _createElementBlock$2("div", {
                  key: 0,
                  class: _normalizeClass$1(["tag-sheared", classText(props.onePlugin, onePreview.name)])
                }, _toDisplayString$1(hasStyle(props.onePlugin, onePreview.name)), 3)) : _createCommentVNode$1("", true),
                _createVNode$2(_unref$2(FCard), {
                  header: onePreview.title,
                  shadow: "hover"
                }, {
                  default: _withCtx$2(() => [
                    onePreview.type === "video" ? (_openBlock$2(), _createElementBlock$2("video", _hoisted_5$1, [
                      _createElementVNode$1("source", {
                        src: _unref$2(publicPath) + onePreview.src,
                        type: "video/mp4",
                        autoplay: "true",
                        loop: "true"
                      }, null, 8, _hoisted_6$1)
                    ])) : onePreview.type === "img" ? (_openBlock$2(), _createBlock$1(_sfc_main$3, {
                      key: 1,
                      onePreview,
                      onePlugin: _ctx.onePlugin
                    }, null, 8, ["onePreview", "onePlugin"])) : onePreview.type === "text" ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_7$1, [
                      _createElementVNode$1("div", {
                        class: "p-2",
                        style: { "color": "white" },
                        innerHTML: onePreview.src
                      }, null, 8, _hoisted_8$1)
                    ])) : _createCommentVNode$1("", true),
                    _createElementVNode$1("div", {
                      class: "cursor-pointer text-right",
                      style: { "margin-top": "6px", "margin-bottom": "-8px" },
                      onClick: ($event) => toPage(props.onePlugin, onePreview)
                    }, " 点击web端演示 ", 8, _hoisted_9$1)
                  ]),
                  _: 2
                }, 1032, ["header"]),
                isEditor(props.onePlugin, onePreview.name) ? (_openBlock$2(), _createBlock$1(_unref$2(NTooltip), {
                  key: 1,
                  trigger: "hover"
                }, {
                  trigger: _withCtx$2(() => [
                    _createElementVNode$1("a", _hoisted_10$1, [
                      _createElementVNode$1("div", _hoisted_11$1, [
                        _createVNode$2(_unref$2(NIcon), {
                          size: "16",
                          class: "text-blue-500"
                        }, {
                          default: _withCtx$2(() => [
                            _createVNode$2(_unref$2(LogoXbox))
                          ]),
                          _: 1
                        }),
                        _cache[2] || (_cache[2] = _createElementVNode$1("span", null, "编辑器", -1))
                      ])
                    ])
                  ]),
                  default: _withCtx$2(() => [
                    _cache[3] || (_cache[3] = _createElementVNode$1("span", null, "此组件已规范封装，供给于场景编辑器中，灵活使用，点击跳转直接编辑，导出源码包", -1))
                  ]),
                  _: 1
                })) : _createCommentVNode$1("", true)
              ], 64))
            ], 2);
          }), 128))
        ])
      ], 64);
    };
  }
});

const cardList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a411f415"]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createTextVNode:_createTextVNode$1,createVNode:_createVNode$1,isRef:_isRef,withCtx:_withCtx$1,createStaticVNode:_createStaticVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1$1 = { class: "filterFixed" };
const {inject} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "filterComFixed",
  setup(__props) {
    const inputValue = inject("filterFixedInputValue");
    const menuSetupFilter = inject("menuSetupFilter");
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, [
        _createVNode$1(_unref$1(FInput), {
          modelValue: _unref$1(inputValue),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _isRef(inputValue) ? inputValue.value = $event : null),
          class: "FInput-input",
          placeholder: "筛选关键字，如：城市",
          clearable: ""
        }, {
          prepend: _withCtx$1(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode$1(" 检索 ", -1)
          ])]),
          suffix: _withCtx$1(() => [
            _createVNode$1(_unref$1(SearchOutlined))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _createVNode$1(_unref$1(FCheckboxGroup), {
          modelValue: _unref$1(menuSetupFilter),
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _isRef(menuSetupFilter) ? menuSetupFilter.value = $event : null)
        }, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(FCheckbox), { value: "hot" }, {
              default: _withCtx$1(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode$1(" 热 ", -1)
              ])]),
              _: 1
            }),
            _createVNode$1(_unref$1(FCheckbox), { value: "new" }, {
              default: _withCtx$1(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode$1(" 新 ", -1)
              ])]),
              _: 1
            }),
            _createVNode$1(_unref$1(FCheckbox), { value: "recommend" }, {
              default: _withCtx$1(() => [..._cache[5] || (_cache[5] = [
                _createTextVNode$1(" 荐 ", -1)
              ])]),
              _: 1
            }),
            _createVNode$1(_unref$1(FCheckbox), { value: "editor" }, {
              default: _withCtx$1(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode$1(" 编辑器 ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _cache[7] || (_cache[7] = _createStaticVNode('<a target="_black" href="https://gitee.com/ice-gl/icegl-three-vue-tres" data-v-43126133><img src="https://gitee.com/ice-gl/icegl-three-vue-tres/badge/star.svg?theme=dark" alt="gitee-starts" data-v-43126133></a><a href="https://github.com/hawk86104/three-vue-tres" target="_blank" data-v-43126133><img src="https://img.shields.io/github/stars/hawk86104/three-vue-tres" data-v-43126133></a><a href="https://github.com/hawk86104/three-vue-tres" target="_blank" data-v-43126133><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hawk86104/three-vue-tres" data-v-43126133></a><a href="https://github.com/hawk86104/three-vue-tres" target="_blank" data-v-43126133><img src="https://img.shields.io/github/license/hawk86104/three-vue-tres" data-v-43126133></a><a target="_black" href="https://space.bilibili.com/410503457" data-v-43126133><img alt="bilibili" src="https://img.shields.io/badge/dynamic/json?url=https://api.bilibili.com/x/relation/stat?vmid=410503457&amp;query=data.follower&amp;color=282c34&amp;label=冰哥B站&amp;labelColor=FE7398&amp;logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAD7ElEQVR4nO2dW9WrMBCFK6ESkFAJSKiESqgEHCABCZWAhEpAAhL2ecik5dDc%2FpXLBDLfWnlqy0xmJ5BMQnq5CIIgCIIgCIIgCIIgCEIBAHQAemYfrgCunD6wAKAHsEKxALgx+bCQD8%2FS9tmgVqeDr1lLigDgZvDhXso+K9TyTBQRwRJ8AHjntl0Flh5QRAQK%2FmKxPeayWx2OXpBNBKiHvi34b7T2MC4pAvW6twR%2FRwkRKPizBN8CgEcuESj4Lwm+BwBjahEk+H8EwJRKhOaCDzW8e1JLfkUUH1NgmR3XmHffHR1l+72BSs8d7w8U+JDAnZERQMcV+CtUi7dNqFqibB4J7vtrq7xKCuAasbTMXCL4T+5aVk6+2xHUrWdhruAR6HIJcOeu2UHI8zyAe2ytWfEdWz9PVvQ8YAmIQ5dDAB9LFsMVAv8oMO2zAGrC5WNIarRiAuKR9jYEd9pY08aa6uUzIHGRdkgKd8pY0yc1WjEBAqypDYoAG0QAZkQAZkQAZkQAZk4vANQenjsSzS3I%2FwcSbXU5jQBUkRtdf4Rar90v8kSv3+I3ffCCSpk8I%2Fw+lgDkdI%2Fv2rEp2CaiWm1AsDQLlDAD+dlFXLMeAaCSeLZdaSFE5VUQNot38cKuEeBgAsSuG0flVZBmEanbXfNQAsS0fgBYIn2fIu3%2FBBMHEyBmDXlFfA8IzeHb+Ems4WAChKykrVA9ZfsQTL57jXzRg4A5wC%2FA8N4ADiZAZwm2XjW75Qh2KOTfA0p4kygPw28OJcCVgn3nDnYo2EwEYRgGH0qAMyICMCMCMCMCMCMCMCMCMCMCfP3qwHDOQ4AAUekTk8FaBRihJnZdYbvtCGC7LvmkM63GjVDINPFrQgCq5ETXfmMzI90FXzPvfqt7x4rEu%2FZaEcCUxFvgz2zO+BUn6UkoaEEAsptiMSX5e8FoRYCN7cVgb4Vq7U%2FH50Pq4JNP7Qiw8UFnJwcK+tXy+Wj6PLEvPgHSHv5UgwA1IQIwwyFAyLJin9RoxYgAzAQIkPwNmf26busC+OIx5TDqo5nDT+F%2FSS%2F9CYzwb+No49zNy2evkYv0LywGGAXUvp6eSneycqOic0w20k7CNgKE7jJunSGLACTCxF27ylmQc98T5MQUH49swd+I0HPXslLKnT0N+wnkrTKi9JZL%2FL9i1SorMmdeQ4TQQ7OFMxIMzGD45w8nUL1im7efENZLJpgPSw0pfz0cdt4U3230Td%2FTvx2R6d2FrHhEWLkq5PELOMsRPHCPnAZGv1xJteL7jbJiaW3sB2nDvPC%2FosSYvjRQz4cJ6n7KO3rYQL7M+L6nVtfDVRAEQRAEQRAEQRAEIZ5%2FSAXmdfXaoQsAAAAASUVORK5CYII%3D&amp;cacheSeconds=3600" data-v-43126133></a><a target="_black" href="https://space.bilibili.com/384558900" data-v-43126133><img alt="bilibili" src="https://img.shields.io/badge/dynamic/json?url=https://api.bilibili.com/x/relation/stat?vmid=384558900&amp;query=data.follower&amp;color=282c34&amp;label=地虎B站&amp;labelColor=FE7398&amp;logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAD7ElEQVR4nO2dW9WrMBCFK6ESkFAJSKiESqgEHCABCZWAhEpAAhL2ecik5dDc%2FpXLBDLfWnlqy0xmJ5BMQnq5CIIgCIIgCIIgCIIgCEIBAHQAemYfrgCunD6wAKAHsEKxALgx+bCQD8%2FS9tmgVqeDr1lLigDgZvDhXso+K9TyTBQRwRJ8AHjntl0Flh5QRAQK%2FmKxPeayWx2OXpBNBKiHvi34b7T2MC4pAvW6twR%2FRwkRKPizBN8CgEcuESj4Lwm+BwBjahEk+H8EwJRKhOaCDzW8e1JLfkUUH1NgmR3XmHffHR1l+72BSs8d7w8U+JDAnZERQMcV+CtUi7dNqFqibB4J7vtrq7xKCuAasbTMXCL4T+5aVk6+2xHUrWdhruAR6HIJcOeu2UHI8zyAe2ytWfEdWz9PVvQ8YAmIQ5dDAB9LFsMVAv8oMO2zAGrC5WNIarRiAuKR9jYEd9pY08aa6uUzIHGRdkgKd8pY0yc1WjEBAqypDYoAG0QAZkQAZkQAZkQAZk4vANQenjsSzS3I%2FwcSbXU5jQBUkRtdf4Rar90v8kSv3+I3ffCCSpk8I%2Fw+lgDkdI%2Fv2rEp2CaiWm1AsDQLlDAD+dlFXLMeAaCSeLZdaSFE5VUQNot38cKuEeBgAsSuG0flVZBmEanbXfNQAsS0fgBYIn2fIu3%2FBBMHEyBmDXlFfA8IzeHb+Ems4WAChKykrVA9ZfsQTL57jXzRg4A5wC%2FA8N4ADiZAZwm2XjW75Qh2KOTfA0p4kygPw28OJcCVgn3nDnYo2EwEYRgGH0qAMyICMCMCMCMCMCMCMCMCMCMCfP3qwHDOQ4AAUekTk8FaBRihJnZdYbvtCGC7LvmkM63GjVDINPFrQgCq5ETXfmMzI90FXzPvfqt7x4rEu%2FZaEcCUxFvgz2zO+BUn6UkoaEEAsptiMSX5e8FoRYCN7cVgb4Vq7U%2FH50Pq4JNP7Qiw8UFnJwcK+tXy+Wj6PLEvPgHSHv5UgwA1IQIwwyFAyLJin9RoxYgAzAQIkPwNmf26busC+OIx5TDqo5nDT+F%2FSS%2F9CYzwb+No49zNy2evkYv0LywGGAXUvp6eSneycqOic0w20k7CNgKE7jJunSGLACTCxF27ylmQc98T5MQUH49swd+I0HPXslLKnT0N+wnkrTKi9JZL%2FL9i1SorMmdeQ4TQQ7OFMxIMzGD45w8nUL1im7efENZLJpgPSw0pfz0cdt4U3230Td%2FTvx2R6d2FrHhEWLkq5PELOMsRPHCPnAZGv1xJteL7jbJiaW3sB2nDvPC%2FosSYvjRQz4cJ6n7KO3rYQL7M+L6nVtfDVRAEQRAEQRAEQRAEIZ5%2FSAXmdfXaoQsAAAAASUVORK5CYII%3D&amp;cacheSeconds=3600" data-v-43126133></a>', 6))
      ]);
    };
  }
});

const filterComFixed = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-43126133"]]);

var define_process_env_default = {};
const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,withCtx:_withCtx,createBlock:_createBlock,createCommentVNode:_createCommentVNode,vShow:_vShow,withDirectives:_withDirectives,normalizeClass:_normalizeClass} = await importShared('vue');

const _hoisted_1 = { class: "absolute menuSelf" };
const _hoisted_2 = { class: "flex h-full w-full" };
const _hoisted_3 = { style: { "background-color": "#0f1222" } };
const _hoisted_4 = {
  class: "flex absolute",
  style: { "left": "1px", "flex-direction": "column", "top": "10px" }
};
const _hoisted_5 = { class: "flex absolute badge-group" };
const _hoisted_6 = { class: "left-m-text" };
const _hoisted_7 = {
  class: "flex absolute",
  style: { "left": "1px", "flex-direction": "column", "top": "10px" }
};
const _hoisted_8 = { class: "flex absolute badge-group" };
const _hoisted_9 = { class: "left-m-text" };
const _hoisted_10 = { class: "flex absolute badge-group" };
const _hoisted_11 = { class: "flex absolute badge-group" };
const _hoisted_12 = {
  class: "flex absolute",
  style: { "top": "3px", "right": "30px" }
};
const _hoisted_13 = { class: "left-m-text" };
const _hoisted_14 = { class: "flex absolute badge-group" };
const _hoisted_15 = { class: "flex absolute badge-group" };
const _hoisted_16 = {
  class: "flex absolute",
  style: { "top": "3px", "right": "30px" }
};
const _hoisted_17 = { class: "left-m-text" };
const {ref,provide,watch,onMounted,nextTick} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "preview",
  setup(__props) {
    const layoutConfigMenus = window.layoutConfig.menus;
    const menuGoto = (value) => {
      console.log(value);
      if (value.value >= 10) {
        const i1 = Math.floor(value.value / 10);
        const i2 = value.value % 10;
        window.location.assign(layoutConfigMenus[i1].children[i2].path);
      } else {
        window.location.assign(layoutConfigMenus[value.value].path);
      }
    };
    const tabListRef = ref([]);
    const pluginsConfig = ref({});
    pluginsConfig.value = getPluginsConfig();
    if (define_process_env_default.FES_APP_ONLINE_API) {
      getOnlinePluginConfig(pluginsConfig);
    }
    const router = useRouter();
    const goto = (value) => {
      if (value.value === "tvtPluginUrl") {
        window.open("https://www.icegl.cn/tvtstore", "_blank");
      } else if (value.value === "zoneEditorUrl") {
        window.open("https://www.icegl.cn/tvtstore/zone3Deditor", "_blank");
      } else {
        tabListRef.value[value.value]?.scrollIntoView({ behavior: "smooth", block: "start" });
        router.replace({ hash: `#${value.value}` });
      }
    };
    const route = useRoute();
    onMounted(() => {
      nextTick(() => {
        const hash = route.hash;
        const tabdom = hash.startsWith("#") ? hash.slice(1) : hash;
        if (tabdom) {
          tabListRef.value[tabdom]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
    const scrollToTop = () => {
      document.querySelector(".right-page-list")?.scrollTo({ top: 0, behavior: "smooth" });
    };
    const filterFixedInputValue = ref("");
    provide("filterFixedInputValue", filterFixedInputValue);
    const filterObjects = (obj, searchString) => {
      if (!searchString) {
        return filterMenuSetup(menuSetupFilter.value);
      }
      const result = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const item = obj[key];
          if (typeof item === "object") {
            if (key === "basic") {
              const bItem = Object.values(filterObjects(item.child, searchString));
              if (bItem.length) {
                result[key] = {};
                Object.assign(result[key], item, { child: bItem });
              }
              continue;
            }
            const hasMatchInTitleOrName = item.title && item.title.toLocaleLowerCase().includes(searchString) || item.name && item.name.toLocaleLowerCase().includes(searchString);
            if (hasMatchInTitleOrName) {
              result[key] = item;
              continue;
            } else {
              const filteredPreview = item.preview.filter((previewItem) => {
                return previewItem.name && previewItem.name.toLocaleLowerCase().includes(searchString) || previewItem.title && previewItem.title.toLocaleLowerCase().includes(searchString);
              });
              if (filteredPreview.length > 0) {
                result[key] = { ...item, preview: filteredPreview };
              }
            }
          }
        }
      }
      return result;
    };
    let filteredData = ref(pluginsConfig.value);
    watch(filterFixedInputValue, (newValue) => {
      filteredData.value = filterObjects(pluginsConfig.value, newValue.toLocaleLowerCase());
    });
    const { menuSetup } = useForPreviewStore();
    function filterMenuSetup(msFilter) {
      if (msFilter.length === 0) {
        return pluginsConfig.value;
      }
      const result = {};
      msFilter.forEach((tag) => {
        if (menuSetup.value) {
          for (const key in menuSetup.value) {
            if (menuSetup.value.hasOwnProperty(key)) {
              for (const key2 in menuSetup.value[key]) {
                if (menuSetup.value[key].hasOwnProperty(key2)) {
                  if (menuSetup.value[key][key2].taglist === tag) {
                    if (pluginsConfig.value[key]?.preview) {
                      const filteredPreview = pluginsConfig.value[key].preview.filter((item) => item.name === key2);
                      if (filteredPreview) {
                        if (result[key]) {
                          result[key].preview = result[key].preview.concat(filteredPreview);
                        } else {
                          result[key] = { ...pluginsConfig.value[key], preview: filteredPreview };
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
      return result;
    }
    const menuSetupFilter = ref([]);
    provide("menuSetupFilter", menuSetupFilter);
    watch(menuSetupFilter, (newValue) => {
      filteredData.value = filterMenuSetup(newValue);
    });
    const getleftMenuBadge = (name) => {
      const tagOne = {
        recommend: { show: false, text: "荐" },
        new: { show: false, text: "新" },
        hot: { show: false, text: "热" },
        editor: { show: false, text: "热" }
      };
      if (menuSetup.value && menuSetup.value[name]) {
        const tmpOne = menuSetup.value[name];
        for (const key in tmpOne) {
          tagOne[tmpOne[key].taglist].show = true;
          if (tmpOne[key].taglist === "editor") {
            tagOne[tmpOne[key].taglist].show = false;
          }
        }
      }
      return tagOne;
    };
    const isTvtstore = (onePlugin) => {
      if (typeof onePlugin.tvtstore !== "undefined") {
        if (onePlugin.name.startsWith("zone")) {
          return "zoneEditor";
        } else {
          return "Tvtstore";
        }
      } else {
        return "caseCenter";
      }
    };
    const getMenusCount = () => {
      const reCount = {
        basic: 0,
        case: 0,
        tvtstore: 0,
        zoneEditor: 0
      };
      for (const key in filteredData.value) {
        if (filteredData.value.hasOwnProperty(key)) {
          if (key === "basic") {
            for (const key2 in filteredData.value[key].child) {
              if (filteredData.value[key].child.hasOwnProperty(key2)) {
                reCount.basic += filteredData.value[key].child[key2].preview.length;
              }
            }
          } else {
            if (isTvtstore(filteredData.value[key]) === "Tvtstore") {
              reCount.tvtstore += filteredData.value[key].preview.length;
            } else if (isTvtstore(filteredData.value[key]) === "caseCenter") {
              reCount.case += filteredData.value[key].preview.length;
            } else if (isTvtstore(filteredData.value[key]) === "zoneEditor") {
              reCount.zoneEditor += filteredData.value[key].preview.length;
            }
          }
        }
      }
      return reCount;
    };
    const showTopMune = ref(false);
    const openTopMune = () => {
      showTopMune.value = true;
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("div", {
            class: "btn-just",
            onClick: openTopMune
          }, [
            _createVNode(_unref(MoreCircleOutlined))
          ])
        ]),
        _createVNode(_unref(FDrawer), {
          show: showTopMune.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showTopMune.value = $event),
          placement: "top",
          title: "",
          onOk: _cache[1] || (_cache[1] = ($event) => showTopMune.value = false)
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(FMenu), {
              mode: "vertical",
              collapsed: false,
              inverted: "",
              onSelect: menuGoto
            }, {
              default: _withCtx(() => [
                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(layoutConfigMenus), (item, index) => {
                  return _openBlock(), _createElementBlock(_Fragment, { key: index }, [
                    item.children ? (_openBlock(), _createBlock(_unref(FSubMenu), {
                      key: 0,
                      value: index
                    }, {
                      label: _withCtx(() => [
                        _createTextVNode(_toDisplayString(item.title), 1)
                      ]),
                      default: _withCtx(() => [
                        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(item.children, (oneo, pkey) => {
                          return _openBlock(), _createBlock(_unref(FMenuItem), {
                            value: index * 10 + pkey
                          }, {
                            label: _withCtx(() => [
                              _createTextVNode(_toDisplayString(oneo.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 256))
                      ]),
                      _: 2
                    }, 1032, ["value"])) : (_openBlock(), _createBlock(_unref(FMenuItem), {
                      key: 1,
                      value: index
                    }, {
                      label: _withCtx(() => [
                        _createTextVNode(_toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]))
                  ], 64);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"]),
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_unref(FMenu), {
              mode: "vertical",
              expandTrigger: "click",
              defaultExpandAll: _unref(detectDeviceType)() === "PC",
              collapsed: _unref(detectDeviceType)() !== "PC",
              inverted: true,
              onSelect: goto
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(FSubMenu), { value: "1" }, {
                  icon: _withCtx(() => [
                    _createVNode(_unref(AppstoreOutlined))
                  ]),
                  label: _withCtx(() => [
                    _createElementVNode("div", _hoisted_4, [
                      _createVNode(_unref(FBadge), {
                        value: "AllFree",
                        class: "tag-fbdge afree-tag",
                        type: "success",
                        size: "small"
                      })
                    ]),
                    _cache[2] || (_cache[2] = _createTextVNode(" 基础功能组件 ", -1)),
                    _createVNode(_unref(FBadge), {
                      max: 999,
                      value: getMenusCount().basic,
                      class: "count-fbdge big-cf",
                      type: "primary",
                      size: "small"
                    }, null, 8, ["value"])
                  ]),
                  default: _withCtx(() => [
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (bP, pkey) => {
                      return _openBlock(), _createElementBlock(_Fragment, null, [
                        pkey === "basic" ? (_openBlock(true), _createElementBlock(_Fragment, { key: 0 }, _renderList(bP.child, (onePlugin, okey) => {
                          return _openBlock(), _createBlock(_unref(FMenuItem), {
                            value: onePlugin.name
                          }, {
                            label: _withCtx(() => [
                              _createElementVNode("div", _hoisted_5, [
                                (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(getleftMenuBadge(onePlugin.name), (lbItem, lbKey) => {
                                  return _openBlock(), _createElementBlock(_Fragment, null, [
                                    lbItem.show ? (_openBlock(), _createBlock(_unref(FBadge), {
                                      key: 0,
                                      value: lbItem.text,
                                      class: "tag-fbdge",
                                      type: "primary",
                                      size: "small"
                                    }, null, 8, ["value"])) : _createCommentVNode("", true)
                                  ], 64);
                                }), 256))
                              ]),
                              _createElementVNode("span", _hoisted_6, _toDisplayString(onePlugin.title), 1),
                              _createVNode(_unref(FBadge), {
                                value: onePlugin.preview.length,
                                class: "count-fbdge",
                                type: "primary",
                                size: "small"
                              }, null, 8, ["value"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 256)) : _createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ]),
                  _: 1
                }),
                _createVNode(_unref(FSubMenu), { value: "2" }, {
                  icon: _withCtx(() => [
                    _createVNode(_unref(PictureOutlined))
                  ]),
                  label: _withCtx(() => [
                    _createElementVNode("div", _hoisted_7, [
                      _createVNode(_unref(FBadge), {
                        value: "AllFree",
                        class: "tag-fbdge afree-tag",
                        type: "success",
                        size: "small"
                      })
                    ]),
                    _cache[3] || (_cache[3] = _createTextVNode(" 样例与组件 ", -1)),
                    _createVNode(_unref(FBadge), {
                      max: 999,
                      value: getMenusCount().case,
                      class: "count-fbdge big-cf",
                      type: "primary",
                      size: "small"
                    }, null, 8, ["value"])
                  ]),
                  default: _withCtx(() => [
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
                      return _openBlock(), _createElementBlock(_Fragment, null, [
                        pkey !== "basic" && isTvtstore(onePlugin) === "caseCenter" ? (_openBlock(), _createBlock(_unref(FMenuItem), {
                          key: 0,
                          value: pkey
                        }, {
                          label: _withCtx(() => [
                            _createElementVNode("div", _hoisted_8, [
                              (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(getleftMenuBadge(onePlugin.name), (lbItem, lbKey) => {
                                return _openBlock(), _createElementBlock(_Fragment, null, [
                                  lbItem.show ? (_openBlock(), _createBlock(_unref(FBadge), {
                                    key: 0,
                                    value: lbItem.text,
                                    class: "tag-fbdge",
                                    type: "primary",
                                    size: "small"
                                  }, null, 8, ["value"])) : _createCommentVNode("", true)
                                ], 64);
                              }), 256))
                            ]),
                            _createElementVNode("span", _hoisted_9, _toDisplayString(onePlugin.title), 1),
                            _createVNode(_unref(FBadge), {
                              value: onePlugin.preview.length,
                              class: "count-fbdge",
                              type: "primary",
                              size: "small"
                            }, null, 8, ["value"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : _createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ]),
                  _: 1
                }),
                _createVNode(_unref(FSubMenu), { value: "3" }, {
                  icon: _withCtx(() => [
                    _createVNode(_unref(ClusterOutlined))
                  ]),
                  label: _withCtx(() => [
                    _cache[4] || (_cache[4] = _createTextVNode("插件应用管理 ", -1)),
                    _createVNode(_unref(FBadge), {
                      max: 999,
                      value: getMenusCount().tvtstore,
                      class: "count-fbdge big-cf",
                      type: "primary",
                      size: "small"
                    }, null, 8, ["value"])
                  ]),
                  default: _withCtx(() => [
                    _createVNode(_unref(FMenuItem), { value: "tvtPluginUrl" }, {
                      label: _withCtx(() => [
                        _createElementVNode("div", _hoisted_10, [
                          _createVNode(_unref(FBadge), {
                            value: "tvtstore",
                            class: "tag-fbdge",
                            type: "danger",
                            size: "small"
                          })
                        ]),
                        _cache[5] || (_cache[5] = _createElementVNode("span", { class: "left-m-text" }, "插件应用市场", -1))
                      ]),
                      _: 1
                    }),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
                      return _openBlock(), _createElementBlock(_Fragment, null, [
                        pkey !== "basic" && isTvtstore(onePlugin) === "Tvtstore" ? (_openBlock(), _createBlock(_unref(FMenuItem), {
                          key: 0,
                          value: pkey
                        }, {
                          label: _withCtx(() => [
                            _createElementVNode("div", _hoisted_11, [
                              onePlugin.tvtstore === "FREE" ? (_openBlock(), _createBlock(_unref(FBadge), {
                                key: 0,
                                value: "free",
                                class: "tag-fbdge afree-tag",
                                type: "success",
                                size: "small"
                              })) : _createCommentVNode("", true)
                            ]),
                            _createElementVNode("div", _hoisted_12, [
                              _createVNode(_unref(FBadge), {
                                value: onePlugin.version,
                                class: "tag-fbdge",
                                type: "primary",
                                size: "small"
                              }, null, 8, ["value"])
                            ]),
                            _createElementVNode("span", _hoisted_13, _toDisplayString(onePlugin.title), 1),
                            _createVNode(_unref(FBadge), {
                              value: onePlugin.preview.length,
                              class: "count-fbdge",
                              type: "primary",
                              size: "small"
                            }, null, 8, ["value"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : _createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ]),
                  _: 1
                }),
                _createVNode(_unref(FSubMenu), { value: "4" }, {
                  icon: _withCtx(() => [
                    _createVNode(_unref(EditOutlined))
                  ]),
                  label: _withCtx(() => [
                    _cache[6] || (_cache[6] = _createTextVNode("区域场景编辑器 ", -1)),
                    _createVNode(_unref(FBadge), {
                      max: 999,
                      value: getMenusCount().zoneEditor,
                      class: "count-fbdge big-cf",
                      type: "primary",
                      size: "small"
                    }, null, 8, ["value"])
                  ]),
                  default: _withCtx(() => [
                    _createVNode(_unref(FMenuItem), { value: "zoneEditorUrl" }, {
                      label: _withCtx(() => [
                        _createElementVNode("div", _hoisted_14, [
                          _createVNode(_unref(FBadge), {
                            value: "zoneEditor",
                            class: "tag-fbdge",
                            type: "danger",
                            size: "small"
                          })
                        ]),
                        _cache[7] || (_cache[7] = _createElementVNode("span", { class: "left-m-text" }, "编辑器介绍", -1))
                      ]),
                      _: 1
                    }),
                    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
                      return _openBlock(), _createElementBlock(_Fragment, null, [
                        pkey !== "basic" && isTvtstore(onePlugin) === "zoneEditor" ? (_openBlock(), _createBlock(_unref(FMenuItem), {
                          key: 0,
                          value: pkey
                        }, {
                          label: _withCtx(() => [
                            _createElementVNode("div", _hoisted_15, [
                              onePlugin.tvtstore === "FREE" || onePlugin.name === "zone3Deditor" ? (_openBlock(), _createBlock(_unref(FBadge), {
                                key: 0,
                                value: "free",
                                class: "tag-fbdge afree-tag",
                                type: "success",
                                size: "small"
                              })) : _createCommentVNode("", true)
                            ]),
                            _createElementVNode("div", _hoisted_16, [
                              _createVNode(_unref(FBadge), {
                                value: onePlugin.version,
                                class: "tag-fbdge",
                                type: "primary",
                                size: "small"
                              }, null, 8, ["value"])
                            ]),
                            _createElementVNode("span", _hoisted_17, _toDisplayString(onePlugin.title), 1),
                            _createVNode(_unref(FBadge), {
                              value: onePlugin.preview.length,
                              class: "count-fbdge",
                              type: "primary",
                              size: "small"
                            }, null, 8, ["value"])
                          ]),
                          _: 2
                        }, 1032, ["value"])) : _createCommentVNode("", true)
                      ], 64);
                    }), 256))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["defaultExpandAll", "collapsed"])
          ]),
          _createElementVNode("div", {
            id: "right-page-list-id",
            class: _normalizeClass(["overflow-scroll relative right-page-list", { "mt-10": _unref(detectDeviceType)() === "PC" }]),
            style: { "height": "calc(100vh - 42px - 52px)", "width": "100%" }
          }, [
            _withDirectives(_createVNode(filterComFixed, null, null, 512), [
              [_vShow, _unref(detectDeviceType)() === "PC"]
            ]),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
              return _openBlock(), _createElementBlock(_Fragment, { key: pkey }, [
                pkey === "basic" ? (_openBlock(true), _createElementBlock(_Fragment, { key: 0 }, _renderList(onePlugin.child, (one, opkey) => {
                  return _openBlock(), _createElementBlock("div", {
                    style: { "background-color": "#f1f1f2" },
                    key: opkey,
                    ref_for: true,
                    ref: (el) => tabListRef.value[one.name] = el
                  }, [
                    _createVNode(cardList, { onePlugin: one }, null, 8, ["onePlugin"])
                  ]);
                }), 128)) : _createCommentVNode("", true)
              ], 64);
            }), 128)),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
              return _openBlock(), _createElementBlock(_Fragment, { key: pkey }, [
                pkey !== "basic" && isTvtstore(onePlugin) === "caseCenter" ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  style: { "background-color": "#f1f1f2" },
                  ref_for: true,
                  ref: (el) => tabListRef.value[pkey] = el
                }, [
                  _createVNode(cardList, { onePlugin }, null, 8, ["onePlugin"])
                ], 512)) : _createCommentVNode("", true)
              ], 64);
            }), 128)),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
              return _openBlock(), _createElementBlock(_Fragment, { key: pkey }, [
                pkey !== "basic" && isTvtstore(onePlugin) === "Tvtstore" ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  style: { "background-color": "#f1f1f2" },
                  ref_for: true,
                  ref: (el) => tabListRef.value[pkey] = el
                }, [
                  _createVNode(cardList, { onePlugin }, null, 8, ["onePlugin"])
                ], 512)) : _createCommentVNode("", true)
              ], 64);
            }), 128)),
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_unref(filteredData), (onePlugin, pkey) => {
              return _openBlock(), _createElementBlock(_Fragment, { key: pkey }, [
                pkey !== "basic" && isTvtstore(onePlugin) === "zoneEditor" ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  style: { "background-color": "#f1f1f2" },
                  ref_for: true,
                  ref: (el) => tabListRef.value[pkey] = el
                }, [
                  _createVNode(cardList, { onePlugin }, null, 8, ["onePlugin"])
                ], 512)) : _createCommentVNode("", true)
              ], 64);
            }), 128)),
            _createVNode(_unref(UpCircleOutlined), {
              class: "toTop",
              onClick: scrollToTop
            })
          ], 2)
        ])
      ], 64);
    };
  }
});

const preview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c989723"]]);

export { preview as default };
//# sourceMappingURL=preview.CD4pzXaL1767105581793.js.map
