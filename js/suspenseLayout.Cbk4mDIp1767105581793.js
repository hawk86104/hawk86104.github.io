import { importShared, IconWrapper, FButton, _export_sfc, useRafFn, useFps } from './index.BxB45aCK1767105581793.js';
import { detectDeviceType, getOnePluginConfig } from './utils.BgXDgF1P1767105581793.js';
import { loadJweixin, loadWebView } from './initScript.D0kd3T6a1767105581793.js';
import { NFloatButton } from './FloatButton.B8F-bQjc1767105581793.js';
import { NIcon } from './Icon.RqG6TsQp1767105581793.js';

const {createVNode: createVNode$2} = await importShared('vue');

var HomeOutlined = props => createVNode$2(IconWrapper, props, {
  default: () => [createVNode$2("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$2("path", {
    "d": "M117.333 944.981A21.333 21.333 0 0 1 96 923.648V405.333a21.333 21.333 0 0 1 8.277-16.896L498.944 83.456a21.333 21.333 0 0 1 26.112 0l394.667 304.981A21.333 21.333 0 0 1 928 405.333v518.272a21.333 21.333 0 0 1-21.333 21.334H117.333zM512 157.952 160 424.107v456.832h209.195V582.272a21.333 21.333 0 0 1 21.333-21.333h242.901a21.333 21.333 0 0 1 21.334 21.333v298.667H864V424.107l-352-266.24zm78.763 467.03H433.195v256h157.568v-256z"
  }, null)])]
});

const {createVNode: createVNode$1} = await importShared('vue');

var ProductOutlined = props => createVNode$1(IconWrapper, props, {
  default: () => [createVNode$1("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode$1("path", {
    "d": "m522.496 48.597 394.496 222.635a21.333 21.333 0 0 1 10.837 18.56v444.416a21.333 21.333 0 0 1-10.837 18.56L522.496 975.403a21.333 21.333 0 0 1-20.992 0L107.008 752.768a21.333 21.333 0 0 1-10.837-18.56V289.792a21.333 21.333 0 0 1 10.837-18.56L501.504 48.597a21.333 21.333 0 0 1 20.992 0zM160.128 340.992v368.256L480 889.728V525.653l-1.493-.768-318.379-183.85zm703.659 1.152L547.499 524.843a21.461 21.461 0 0 1-3.456 1.578L544 889.728l319.787-180.48V342.187zM512 116.139 201.813 291.115 510.55 469.419l2.475 1.706 2.517-1.706 307.627-177.707L512 116.139z"
  }, null)])]
});

const {createVNode} = await importShared('vue');

var StarOutlined = props => createVNode(IconWrapper, props, {
  default: () => [createVNode("svg", {
    "width": "200",
    "height": "200",
    "viewBox": "0 0 1024 1024",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode("path", {
    "d": "M522.752 74.581a21.333 21.333 0 0 1 7.68 7.68L676.907 333.74l284.416 61.61a21.333 21.333 0 0 1 11.392 35.03L778.795 647.38l29.354 289.536a21.333 21.333 0 0 1-29.866 21.675L512 841.259 245.717 958.592a21.333 21.333 0 0 1-29.866-21.675l29.354-289.536L51.285 430.38a21.333 21.333 0 0 1 11.392-35.03l284.416-61.61L493.568 82.26a21.333 21.333 0 0 1 29.184-7.68zm113.067 315.734L512 177.792 388.224 390.315l-240.427 52.053L311.68 625.792l-24.79 244.693L512 771.328l225.067 99.157-24.747-244.693 163.84-183.424-240.384-52.053z"
  }, null)])]
});

const {openBlock:_openBlock$9,createElementBlock:_createElementBlock$8,createStaticVNode:_createStaticVNode$1,defineComponent: defineComponent$4} = await importShared('vue');

const _hoisted_1$7 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const Aperture = defineComponent$4({
  name: 'Aperture',
  render: function render(_ctx, _cache) {
    return _openBlock$9(), _createElementBlock$8('svg', _hoisted_1$7, _cache[0] || (_cache[0] = [_createStaticVNode$1('<path d="M250.54 129.17l-67.8-67.8A209.65 209.65 0 0 0 86.32 136h161.4a4 4 0 0 0 2.82-6.83z" fill="currentColor"></path><path d="M167.72 168H67.63a207.34 207.34 0 0 0-16.15 125.9l119.06-119.07a4 4 0 0 0-2.82-6.83z" fill="currentColor"></path><path d="M344 167.72V67.56a207.82 207.82 0 0 0-125.89-16.08l119.06 119.06a4 4 0 0 0 6.83-2.82z" fill="currentColor"></path><path d="M460.52 218.1L341.46 337.17a4 4 0 0 0 2.82 6.83h100.09a207.34 207.34 0 0 0 16.15-125.9z" fill="currentColor"></path><path d="M382.83 250.54l67.83-67.82A209.08 209.08 0 0 0 376 86.2v161.52a4 4 0 0 0 6.83 2.82z" fill="currentColor"></path><path d="M221.68 341.77a8 8 0 0 0 5.54 2.23h59.66a8 8 0 0 0 5.7-2.39l49.18-50a8 8 0 0 0 2.3-5.62l-.06-60.81a8 8 0 0 0-2.38-5.69l-50-49.25a8 8 0 0 0-5.63-2.3l-60.84.06a8 8 0 0 0-5.69 2.38l-49.25 50a8 8 0 0 0-2.3 5.63l.06 60.78a8 8 0 0 0 2.45 5.76z" fill="currentColor"></path><path d="M261.46 382.83l67.8 67.8A209.65 209.65 0 0 0 425.68 376h-161.4a4 4 0 0 0-2.82 6.83z" fill="currentColor"></path><path d="M168 344.28v100.16a207.82 207.82 0 0 0 125.89 16.08L174.83 341.46a4 4 0 0 0-6.83 2.82z" fill="currentColor"></path><path d="M129.17 261.46l-67.83 67.83A209.1 209.1 0 0 0 136 425.8V264.28a4 4 0 0 0-6.83-2.82z" fill="currentColor"></path>', 9)]))
  }
});

const {createElementVNode:_createElementVNode$4,openBlock:_openBlock$8,createElementBlock:_createElementBlock$7,defineComponent: defineComponent$3} = await importShared('vue');

const _hoisted_1$6 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const ArrowBackCircleOutline = defineComponent$3({
  name: 'ArrowBackCircleOutline',
  render: function render(_ctx, _cache) {
    return (
      _openBlock$8(),
      _createElementBlock$7(
        'svg',
        _hoisted_1$6,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode$4(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M249.38 336L170 256l79.38-80'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$4(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M181.03 256H342'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$4(
              'path',
              {
                d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
});

const {openBlock:_openBlock$7,createElementBlock:_createElementBlock$6,createStaticVNode:_createStaticVNode,defineComponent: defineComponent$2} = await importShared('vue');

const _hoisted_1$5 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const DiceOutline = defineComponent$2({
  name: 'DiceOutline',
  render: function render(_ctx, _cache) {
    return _openBlock$7(), _createElementBlock$6('svg', _hoisted_1$5, _cache[0] || (_cache[0] = [_createStaticVNode('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M69 153.99l187 110l187-110"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 463.99v-200"></path><ellipse cx="256" cy="152" rx="24" ry="16" fill="currentColor"></ellipse><ellipse cx="208" cy="296" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="112" cy="328" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="304" cy="296" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="400" cy="240" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="304" cy="384" rx="16" ry="24" fill="currentColor"></ellipse><ellipse cx="400" cy="328" rx="16" ry="24" fill="currentColor"></ellipse>', 10)]))
  }
});

const {createElementVNode:_createElementVNode$3,openBlock:_openBlock$6,createElementBlock:_createElementBlock$5,defineComponent: defineComponent$1} = await importShared('vue');

const _hoisted_1$4 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const Home = defineComponent$1({
  name: 'Home',
  render: function render(_ctx, _cache) {
    return (
      _openBlock$6(),
      _createElementBlock$5(
        'svg',
        _hoisted_1$4,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode$3(
              'path',
              {
                d: 'M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$3(
              'path',
              {
                d: 'M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z',
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

const {createElementVNode:_createElementVNode$2,openBlock:_openBlock$5,createElementBlock:_createElementBlock$4,defineComponent} = await importShared('vue');

const _hoisted_1$3 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const SparklesOutline = defineComponent({
  name: 'SparklesOutline',
  render: function render(_ctx, _cache) {
    return (
      _openBlock$5(),
      _createElementBlock$4(
        'svg',
        _hoisted_1$3,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode$2(
              'path',
              {
                d: 'M259.92 262.91L216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17z',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$2(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M108 68L88 16L68 68L16 88l52 20l20 52l20-52l52-20l-52-20z'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode$2(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
});

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {unref:_unref$4,createVNode:_createVNode$3,createTextVNode:_createTextVNode$3,withCtx:_withCtx$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$3,createCommentVNode:_createCommentVNode$2} = await importShared('vue');

const _hoisted_1$2 = {
  key: 0,
  class: "rbts"
};
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "showSrcBtn",
  props: {
    parts: {}
  },
  setup(__props) {
    const props = __props;
    let baseUrl = "https://gitee.com/ice-gl/icegl-three-vue-tres/blob/master/src";
    let newUrl = `${baseUrl}/${props.parts[1]}/${props.parts[2]}/pages/${props.parts.slice(3).join("/")}.vue`;
    const jump = () => {
      window.open(newUrl);
    };
    const tohome = () => {
      window.open("https://github.com/hawk86104/three-vue-tres");
    };
    return (_ctx, _cache) => {
      return _unref$4(detectDeviceType)() !== "Mobile" ? (_openBlock$4(), _createElementBlock$3("div", _hoisted_1$2, [
        _createVNode$3(_unref$4(FButton), {
          type: "info",
          class: "absolute home-btn",
          size: "small",
          onClick: _cache[0] || (_cache[0] = ($event) => tohome())
        }, {
          icon: _withCtx$3(() => [
            _createVNode$3(_unref$4(HomeOutlined)),
            _cache[2] || (_cache[2] = _createTextVNode$3("首页 ", -1))
          ]),
          _: 1
        }),
        _createVNode$3(_unref$4(FButton), {
          type: "info",
          class: "absolute",
          size: "small",
          style: { "right": "10px", "bottom": "10px" },
          onClick: _cache[1] || (_cache[1] = ($event) => jump())
        }, {
          icon: _withCtx$3(() => [
            _createVNode$3(_unref$4(ProductOutlined))
          ]),
          default: _withCtx$3(() => [
            _cache[3] || (_cache[3] = _createTextVNode$3("源码Src ", -1))
          ]),
          _: 1
        })
      ])) : _createCommentVNode$2("", true);
    };
  }
});

const showSrcBtn = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0080c45a"]]);

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$3,createVNode:_createVNode$2,toDisplayString:_toDisplayString$1,createTextVNode:_createTextVNode$2,withCtx:_withCtx$2,openBlock:_openBlock$3,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "referenceSource",
  props: {
    referenceSourceConfig: {}
  },
  setup(__props) {
    const props = __props;
    const jump = () => {
      window.open(props.referenceSourceConfig.url);
    };
    return (_ctx, _cache) => {
      return _ctx.referenceSourceConfig && _unref$3(detectDeviceType)() !== "Mobile" ? (_openBlock$3(), _createBlock$1(_unref$3(FButton), {
        key: 0,
        type: "info",
        class: "absolute",
        size: "small",
        style: { "left": "10px", "bottom": "10px" },
        onClick: jump
      }, {
        icon: _withCtx$2(() => [
          _createVNode$2(_unref$3(StarOutlined))
        ]),
        default: _withCtx$2(() => [
          _createTextVNode$2("参考出处 ：" + _toDisplayString$1(_ctx.referenceSourceConfig.title), 1)
        ]),
        _: 1
      })) : _createCommentVNode$1("", true);
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode$1,createTextVNode:_createTextVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,vShow:_vShow$1,withDirectives:_withDirectives$1} = await importShared('vue');

const _hoisted_1$1 = { class: "fpsStats" };
const _hoisted_2$1 = { class: "number" };
const _hoisted_3$1 = ["points"];
const {ref: ref$1} = await importShared('vue');
const width = 58;
const height = 30;
const strokeWidth = 2;
const updateInterval = 100;
const topOffset = 0;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "FPSGraph",
  setup(__props) {
    const fps = useFps({ every: updateInterval });
    const points = ref$1("");
    const frameTimes = ref$1([]);
    const maxFrames = ref$1(width / strokeWidth);
    let lastUpdateTime = performance.now();
    useRafFn(({ timestamp }) => {
      if (timestamp - lastUpdateTime >= updateInterval) {
        lastUpdateTime = timestamp;
        frameTimes.value.push(fps.value);
        if (frameTimes.value.length > maxFrames.value) {
          frameTimes.value.shift();
        }
        points.value = frameTimes.value.map(
          (fps2, index) => `${index * strokeWidth},${height + topOffset - strokeWidth / 2 - fps2 * (height + topOffset - strokeWidth) / 160}`
        ).join(" ");
      }
    });
    return (_ctx, _cache) => {
      return _withDirectives$1((_openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
        _createElementVNode$1("div", _hoisted_2$1, [
          _createTextVNode$1(_toDisplayString(Math.round(_unref$2(fps))) + " ", 1),
          _cache[0] || (_cache[0] = _createElementVNode$1("br", null, null, -1)),
          _cache[1] || (_cache[1] = _createTextVNode$1(" FPS ", -1))
        ]),
        (_openBlock$2(), _createElementBlock$2("svg", {
          width,
          height,
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          _createElementVNode$1("polyline", {
            points: points.value,
            fill: "none",
            stroke: "#5384ff",
            "stroke-width": strokeWidth,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, 8, _hoisted_3$1)
        ]))
      ], 512)), [
        [_vShow$1, _unref$2(detectDeviceType)() !== "Mobile"]
      ]);
    };
  }
});

const FPSGraph = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dd2639f2"]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,withCtx:_withCtx$1,createTextVNode:_createTextVNode,resolveComponent:_resolveComponent$1,vShow:_vShow,createElementVNode:_createElementVNode,withDirectives:_withDirectives,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = { style: { "position": "absolute", "bottom": "8px", "left": "12px", "z-index": "9999999" } };
const _hoisted_2 = { style: { "display": "flex" } };
const _hoisted_3 = { style: { "display": "flex" } };
const {onMounted,ref} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "miniBts",
  setup(__props) {
    const showb = ref(false);
    onMounted(async () => {
      await loadJweixin();
      await loadWebView();
      if (uni.getEnv) {
        uni.getEnv((res) => {
          if (res.miniprogram) {
            showb.value = true;
          }
        });
      }
    });
    const toHomeRouter = () => {
      window.open("https://oss.icegl.cn/", "_blank");
    };
    const toBack = () => {
      uni.navigateBack();
    };
    const toHome = () => {
      uni.reLaunch({
        url: "/pages/index/index"
      });
    };
    const toGuide = () => {
      uni.redirectTo({
        url: "/pages/guide/guide"
      });
    };
    const switchTab = () => {
      uni.reLaunch({
        url: "/pages/about/about"
      });
    };
    return (_ctx, _cache) => {
      const _component_sapn = _resolveComponent$1("sapn");
      return _openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
        _createVNode$1(_unref$1(NFloatButton), {
          position: "relative",
          type: "default",
          shape: "square",
          "menu-trigger": "click"
        }, {
          menu: _withCtx$1(() => [
            _withDirectives(_createElementVNode("div", _hoisted_2, [
              _createVNode$1(_unref$1(NFloatButton), {
                shape: "square",
                onClick: toBack
              }, {
                description: _withCtx$1(() => [
                  _createVNode$1(_component_sapn, { style: { "color": "#2d76d5" } }, {
                    default: _withCtx$1(() => [..._cache[0] || (_cache[0] = [
                      _createTextVNode("返回", -1)
                    ])]),
                    _: 1
                  })
                ]),
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NIcon), { color: "#2D76D5" }, {
                    default: _withCtx$1(() => [
                      _createVNode$1(_unref$1(ArrowBackCircleOutline))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode$1(_unref$1(NFloatButton), {
                left: 12,
                shape: "square",
                onClick: toHome
              }, {
                description: _withCtx$1(() => [
                  _createVNode$1(_component_sapn, { style: { "color": "#2d76d5" } }, {
                    default: _withCtx$1(() => [..._cache[1] || (_cache[1] = [
                      _createTextVNode("主页", -1)
                    ])]),
                    _: 1
                  })
                ]),
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NIcon), { color: "#2D76D5" }, {
                    default: _withCtx$1(() => [
                      _createVNode$1(_unref$1(Home))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode$1(_unref$1(NFloatButton), {
                left: 24,
                shape: "square",
                onClick: toGuide
              }, {
                description: _withCtx$1(() => [
                  _createVNode$1(_component_sapn, { style: { "color": "#2d76d5" } }, {
                    default: _withCtx$1(() => [..._cache[2] || (_cache[2] = [
                      _createTextVNode("随机", -1)
                    ])]),
                    _: 1
                  })
                ]),
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NIcon), { color: "#2D76D5" }, {
                    default: _withCtx$1(() => [
                      _createVNode$1(_unref$1(SparklesOutline))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode$1(_unref$1(NFloatButton), {
                left: 36,
                shape: "square",
                onClick: switchTab
              }, {
                description: _withCtx$1(() => [
                  _createVNode$1(_component_sapn, { style: { "color": "#2d76d5" } }, {
                    default: _withCtx$1(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode("关于", -1)
                    ])]),
                    _: 1
                  })
                ]),
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NIcon), { color: "#2D76D5" }, {
                    default: _withCtx$1(() => [
                      _createVNode$1(_unref$1(DiceOutline))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 512), [
              [_vShow, showb.value]
            ]),
            _withDirectives(_createElementVNode("div", _hoisted_3, [
              _createVNode$1(_unref$1(NFloatButton), {
                shape: "square",
                onClick: toHomeRouter
              }, {
                description: _withCtx$1(() => [
                  _createVNode$1(_component_sapn, { style: { "color": "#2d76d5" } }, {
                    default: _withCtx$1(() => [..._cache[4] || (_cache[4] = [
                      _createTextVNode("主页", -1)
                    ])]),
                    _: 1
                  })
                ]),
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NIcon), { color: "#2D76D5" }, {
                    default: _withCtx$1(() => [
                      _createVNode$1(_unref$1(Home))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 512), [
              [_vShow, !showb.value]
            ])
          ]),
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(NIcon), {
              size: "26",
              color: "#2D76D5"
            }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(Aperture))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,unref:_unref,createCommentVNode:_createCommentVNode,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "suspenseLayout",
  setup(__props) {
    const originalUrl = window.location.href.split("?")[0];
    const hashPart = originalUrl.split("#")[1] || "";
    const parts = hashPart.split("/");
    let config = null;
    if (parts[2] === "basic") {
      config = getOnePluginConfig(parts[2], parts[3], parts[4]);
    } else {
      config = getOnePluginConfig(parts[2], parts[3]);
    }
    console.log("插件配置:", config);
    window.tvtPluginConfig = config;
    const referenceSourceConfig = config?.preview?.referenceSource;
    return (_ctx, _cache) => {
      const _component_router_view = _resolveComponent("router-view");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        (_openBlock(), _createBlock(_Suspense, null, {
          default: _withCtx(() => [
            _createVNode(_component_router_view)
          ]),
          _: 1
        })),
        !_unref(config)?.preview?.disableSrcBtn ? (_openBlock(), _createBlock(showSrcBtn, {
          key: 0,
          parts: _unref(parts)
        }, null, 8, ["parts"])) : _createCommentVNode("", true),
        _createVNode(_sfc_main$3, { referenceSourceConfig: _unref(referenceSourceConfig) }, null, 8, ["referenceSourceConfig"]),
        !_unref(config)?.preview?.disableFPSGraph ? (_openBlock(), _createBlock(FPSGraph, { key: 1 })) : _createCommentVNode("", true),
        _unref(detectDeviceType)() === "Mobile" ? (_openBlock(), _createBlock(_sfc_main$1, { key: 2 })) : _createCommentVNode("", true)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=suspenseLayout.Cbk4mDIp1767105581793.js.map
