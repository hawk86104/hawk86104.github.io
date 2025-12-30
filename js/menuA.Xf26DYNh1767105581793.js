import { importShared, no, Kk, _export_sfc } from './index.BxB45aCK1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useSeek } from './useSeek.BoK5Ffx41767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$3,unref:_unref$2,resolveComponent:_resolveComponent$2,mergeProps:_mergeProps$2,withCtx:_withCtx$3,openBlock:_openBlock$3,createBlock:_createBlock$1} = await importShared('vue');

const _hoisted_1$3 = ["position"];
const {ref: ref$2,watchEffect: watchEffect$2} = await importShared('vue');

const THREE$1 = await importShared('three');

const _sfc_main$3 = /* @__PURE__ */ _defineComponent$2({
  __name: "starts",
  setup(__props) {
    const gl = {
      clearColor: "#000000",
      alpha: true,
      useLegacyLights: true,
      antialias: true
    };
    const TresCanvasRef = ref$2();
    let camera, scene = null;
    watchEffect$2(() => {
      if (TresCanvasRef.value) {
        TresCanvasRef.value.context.renderer.instance.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
        TresCanvasRef.value.context.renderer.instance.autoClear = false;
        TresCanvasRef.value.context.renderer.instance.setClearColor(0, 0);
        scene = TresCanvasRef.value.context.scene.value;
        camera = TresCanvasRef.value.context.camera.activeCamera.value;
        scene.fog = new THREE$1.FogExp2(1776411, 1e-4);
        camera.position.z = 800 / 2;
      }
    });
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    let mouseX = 0;
    let mouseY = 0;
    function onMouseMove(e) {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    }
    document.addEventListener("mousemove", onMouseMove, false);
    const positionArray = new Float32Array(45e3 * 3);
    for (let i = 0; i < 45e3; i++) {
      positionArray[i * 3 + 0] = Math.random() * 2e3 - 1e3;
      positionArray[i * 3 + 1] = Math.random() * 2e3 - 1e3;
      positionArray[i * 3 + 2] = Math.random() * 2e3 - 1e3;
    }
    const onLoop = () => {
      if (camera) {
        camera.position.x += (mouseX - camera.position.x) * 5e-3;
        camera.position.y += (-mouseY - camera.position.y) * 5e-3;
        camera.lookAt(scene.position);
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent$2("TresCanvas");
      return _openBlock$3(), _createBlock$1(_component_TresCanvas, _mergeProps$2({
        ref_key: "TresCanvasRef",
        ref: TresCanvasRef
      }, gl, {
        "window-size": "",
        onLoop
      }), {
        default: _withCtx$3(() => [
          _cache[1] || (_cache[1] = _createElementVNode$3("TresPerspectiveCamera", {
            position: [0, 50, 300],
            fov: 40,
            far: 800,
            plane: 1
          }, null, -1)),
          _createElementVNode$3("TresPoints", null, [
            _createElementVNode$3("TresBufferGeometry", {
              args: [1e3, 100, 50],
              position: [_unref$2(positionArray), 3]
            }, null, 8, _hoisted_1$3),
            _cache[0] || (_cache[0] = _createElementVNode$3("TresPointsMaterial", {
              color: "#66ffff",
              size: 1.1,
              transparency: true,
              opacity: 0.8
            }, null, -1))
          ])
        ]),
        _: 1
      }, 16);
    };
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,unref:_unref$1,createVNode:_createVNode$2,resolveComponent:_resolveComponent$1,mergeProps:_mergeProps$1,withCtx:_withCtx$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$2 = { class: "position-absolute w-full h-full" };
const _hoisted_2$1 = ["rotation-x"];
const _hoisted_3 = ["map", "alphaMap", "blending", "side"];
const {watchEffect: watchEffect$1,ref: ref$1} = await importShared('vue');
const {AdditiveBlending,DoubleSide,Fog: Fog$1,Color: Color$1} = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "circle",
  setup(__props) {
    const gl = {
      clearColor: "#000000",
      alpha: true,
      useLegacyLights: true,
      antialias: true,
      //开启锯齿
      logarithmicDepthBuffer: true,
      precision: "highp",
      premultipliedAlpha: false
    };
    const { state: pTexture } = no("./plugins/earthSample/image/menuA/quan_01.png");
    const onLoop = () => {
      if (quanMeshRef.value) {
        quanMeshRef.value.rotation.z -= 5e-3;
      }
    };
    const TresCanvasRef = ref$1();
    const quanMeshRef = ref$1();
    watchEffect$1(() => {
      if (TresCanvasRef.value && TresCanvasRef.value.context) {
        TresCanvasRef.value.context.renderer.instance.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
        TresCanvasRef.value.context.renderer.instance.autoClear = true;
        TresCanvasRef.value.context.renderer.instance.autoClearColor = new Color$1(1, 0, 0, 0);
        TresCanvasRef.value.context.renderer.instance.setClearColor(0, 0);
        const scene = TresCanvasRef.value.context.scene.value;
        scene.fog = new Fog$1(4095, 100, 1e3);
      }
      if (quanMeshRef.value) ;
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent$1("TresCanvas");
      return _openBlock$2(), _createElementBlock$2("div", _hoisted_1$2, [
        _createVNode$2(_component_TresCanvas, _mergeProps$1({
          class: "TresCanvasNoPointerEvents",
          ref_key: "TresCanvasRef",
          ref: TresCanvasRef
        }, gl, { onLoop }), {
          default: _withCtx$2(() => [
            _cache[1] || (_cache[1] = _createElementVNode$2("TresPerspectiveCamera", {
              position: [0, 100, 420],
              fov: 50,
              aspect: 1,
              near: 1,
              far: 1e4
            }, null, -1)),
            _createVNode$2(_unref$1(Kk), { autoRotate: false }),
            _createElementVNode$2("TresMesh", {
              ref_key: "quanMeshRef",
              ref: quanMeshRef,
              position: [0, 0, 0],
              "rotation-x": 2 * Math.PI / 360 * 100
            }, [
              _cache[0] || (_cache[0] = _createElementVNode$2("TresPlaneGeometry", { args: [400, 400] }, null, -1)),
              _createElementVNode$2("TresMeshBasicMaterial", {
                color: "#ffffff",
                map: _unref$1(pTexture),
                alphaMap: _unref$1(pTexture),
                blending: _unref$1(AdditiveBlending),
                side: _unref$1(DoubleSide),
                depthTest: 0.2,
                opacity: 1,
                depthWrite: false,
                transparent: true,
                alphaTest: 0
              }, null, 8, _hoisted_3)
            ], 8, _hoisted_2$1)
          ]),
          _: 1
        }, 16)
      ]);
    };
  }
});

const circleo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4a86d2f1"]]);

const countryPositionList = [{
	name: "中国",
	position: [116.2, 39.55]
}, {
	name: "中非共和国",
	position: [18.35, 4.23]
}, {
	name: "智利",
	position: [-70.4, -33.24]
}, {
	name: "乍得",
	position: [14.59, 12.1]
}, {
	name: "赞比亚",
	position: [28.16, -15.28]
}, {
	name: "越南",
	position: [105.55, 21.05]
}, {
	name: "约旦",
	position: [35.52, 31.57]
}, {
	name: "英属维尔京群岛",
	position: [-64.37, 18.27]
}, {
	name: "英国",
	position: [-0.05, 51.36]
}, {
	name: "印度尼西亚",
	position: [106.49, -6.09]
}, {
	name: "印度",
	position: [77.13, 28.37]
}, {
	name: "意大利",
	position: [12.29, 41.54]
}, {
	name: "以色列",
	position: [35.12, 31.47]
}, {
	name: "伊朗",
	position: [51.3, 35.44]
}, {
	name: "伊拉克",
	position: [44.3, 33.2]
}, {
	name: "亚美尼亚",
	position: [44.31, 40.1]
}, {
	name: "牙买加",
	position: [-76.5, 18]
}, {
	name: "匈牙利",
	position: [19.05, 47.29]
}, {
	name: "新西兰",
	position: [174.46, -41.19]
}, {
	name: "新喀里多尼亚",
	position: [166.3, -22.17]
}, {
	name: "希腊",
	position: [23.46, 37.58]
}, {
	name: "西班牙",
	position: [-3.45, 40.25]
}, {
	name: "乌兹别克斯坦",
	position: [69.1, 41.2]
}, {
	name: "乌拉圭",
	position: [-56.11, -34.5]
}, {
	name: "乌克兰",
	position: [30.28, 50.3]
}, {
	name: "乌干达",
	position: [32.3, .2]
}, {
	name: "文莱",
	position: [115, 4.52]
}, {
	name: "委内瑞拉",
	position: [-66.55, 10.3]
}, {
	name: "危地马拉",
	position: [-90.22, 14.4]
}, {
	name: "瓦努阿图",
	position: [168.18, -17.45]
}, {
	name: "土库曼斯坦",
	position: [57.5, 38]
}, {
	name: "土耳其",
	position: [32.54, 39.57]
}, {
	name: "图瓦卢",
	position: [179.13, -8.31]
}, {
	name: "突尼斯",
	position: [10.11, 36.5]
}, {
	name: "汤加",
	position: [-174, -21.1]
}, {
	name: "坦桑尼亚",
	position: [35.45, -6.08]
}, {
	name: "泰国",
	position: [100.35, 13.45]
}, {
	name: "塔吉克斯坦",
	position: [68.48, 38.33]
}, {
	name: "索马里",
	position: [45.25, 2.02]
}, {
	name: "所罗门群岛",
	position: [159.57, -9.27]
}, {
	name: "苏里南",
	position: [-55.1, 5.5]
}, {
	name: "苏丹",
	position: [32.35, 15.31]
}, {
	name: "斯威士兰",
	position: [31.06, -26.18]
}, {
	name: "斯洛文尼亚",
	position: [14.33, 46.04]
}, {
	name: "斯洛伐克",
	position: [17.07, 48.1]
}, {
	name: "圣文森特和格林纳丁斯",
	position: [-61.1, 13.1]
}, {
	name: "圣皮埃尔和密克隆",
	position: [-56.12, 46.46]
}, {
	name: "圣马力诺",
	position: [12.3, 43.55]
}, {
	name: "圣卢西亚",
	position: [-60.58, 14.02]
}, {
	name: "圣基茨和尼维斯",
	position: [-62.43, 17.17]
}, {
	name: "圣多美和普林西比",
	position: [6.39, .1]
}, {
	name: "沙特阿拉伯",
	position: [46.42, 24.41]
}, {
	name: "塞浦路斯",
	position: [33.25, 35.1]
}, {
	name: "塞内加尔",
	position: [-17.29, 14.34]
}, {
	name: "塞拉利昂",
	position: [-13.17, 8.3]
}, {
	name: "萨摩亚",
	position: [-171.5, -13.5]
}, {
	name: "萨尔瓦多",
	position: [-89.1, 13.4]
}, {
	name: "瑞士",
	position: [7.28, 46.57]
}, {
	name: "瑞典",
	position: [18.03, 59.2]
}, {
	name: "葡萄牙",
	position: [-9.1, 38.42]
}, {
	name: "帕劳",
	position: [134.28, 7.2]
}, {
	name: "诺福克岛",
	position: [168.43, -45.2]
}, {
	name: "挪威",
	position: [10.45, 59.55]
}, {
	name: "尼日利亚",
	position: [7.32, 9.05]
}, {
	name: "尼日尔",
	position: [2.06, 13.27]
}, {
	name: "尼加拉瓜",
	position: [-86.2, 12.06]
}, {
	name: "尼泊尔",
	position: [85.2, 27.45]
}, {
	name: "南斯拉夫",
	position: [20.37, 44.5]
}, {
	name: "纳米比亚",
	position: [17.04, -22.35]
}, {
	name: "墨西哥",
	position: [-99.1, 19.2]
}, {
	name: "莫桑比克",
	position: [32.32, -25.58]
}, {
	name: "摩尔多瓦共和国",
	position: [28.5, 47.02]
}, {
	name: "缅甸",
	position: [96.2, 16.45]
}, {
	name: "秘鲁",
	position: [-77, -12]
}, {
	name: "孟加拉国",
	position: [90.26, 23.43]
}, {
	name: "美属维尔京群岛",
	position: [-64.56, 18.21]
}, {
	name: "美属萨摩亚",
	position: [-170.43, -14.16]
}, {
	name: "美国",
	position: [-77.02, 39.91]
}, {
	name: "毛里塔尼亚",
	position: [57.3, -20.1]
}, {
	name: "马约特岛",
	position: [45.14, -12.48]
}, {
	name: "马提尼克岛",
	position: [-61.02, 14.36]
}, {
	name: "马其顿",
	position: [21.26, 42.01]
}, {
	name: "马里",
	position: [-7.55, 12.34]
}, {
	name: "马来西亚",
	position: [101.41, 3.09]
}, {
	name: "马拉维",
	position: [33.48, -14]
}, {
	name: "马耳他",
	position: [14.31, 35.54]
}, {
	name: "马尔代夫",
	position: [73.28, 4]
}, {
	name: "马达加斯加",
	position: [47.31, -18.55]
}, {
	name: "罗马尼亚",
	position: [26.1, 44.27]
}, {
	name: "卢旺达",
	position: [30.04, -1.59]
}, {
	name: "卢森堡",
	position: [6.09, 49.37]
}, {
	name: "列支敦士登",
	position: [9.31, 47.08]
}, {
	name: "利比里亚",
	position: [-10.47, 6.18]
}, {
	name: "立陶宛",
	position: [25.19, 54.38]
}, {
	name: "黎巴嫩",
	position: [35.31, 33.53]
}, {
	name: "老挝",
	position: [102.36, 17.58]
}, {
	name: "莱索托",
	position: [27.3, -29.18]
}, {
	name: "拉脱维亚",
	position: [24.08, 56.53]
}, {
	name: "肯尼亚",
	position: [36.48, -1.17]
}, {
	name: "克罗地亚",
	position: [15.58, 45.5]
}, {
	name: "科威特",
	position: [48, 29.3]
}, {
	name: "科特迪瓦",
	position: [-5.17, 6.49]
}, {
	name: "科摩罗",
	position: [43.16, -11.4]
}, {
	name: "开曼群岛",
	position: [-81.24, 19.2]
}, {
	name: "卡塔尔",
	position: [51.35, 25.15]
}, {
	name: "喀麦隆",
	position: [11.35, 3.5]
}, {
	name: "津巴布韦",
	position: [31.02, -17.43]
}, {
	name: "捷克共和国",
	position: [14.22, 50.05]
}, {
	name: "柬埔寨",
	position: [104.55, 11.33]
}, {
	name: "加蓬",
	position: [9.26, .25]
}, {
	name: "加纳",
	position: [-0.06, 5.35]
}, {
	name: "加拿大",
	position: [-75.42, 45.27]
}, {
	name: "几内亚比绍",
	position: [-15.45, 11.45]
}, {
	name: "几内亚",
	position: [-13.49, 9.29]
}, {
	name: "吉尔吉斯斯坦",
	position: [74.46, 42.54]
}, {
	name: "吉布提",
	position: [42.2, 11.08]
}, {
	name: "基里巴斯",
	position: [173, 1.3]
}, {
	name: "洪都拉斯",
	position: [-87.14, 14.05]
}, {
	name: "赫德岛和麦当劳群岛",
	position: [74, -53]
}, {
	name: "荷属安的列斯",
	position: [-69, 12.05]
}, {
	name: "荷兰",
	position: [4.54, 52.23]
}, {
	name: "韩国",
	position: [126.58, 37.31]
}, {
	name: "海地",
	position: [-72.2, 18.4]
}, {
	name: "哈萨克斯坦",
	position: [71.3, 51.1]
}, {
	name: "圭亚那",
	position: [-58.12, 6.5]
}, {
	name: "瓜德罗普岛",
	position: [-61.44, 16]
}, {
	name: "古巴",
	position: [-82.22, 23.08]
}, {
	name: "根西岛",
	position: [-2.33, 49.26]
}, {
	name: "格鲁吉亚",
	position: [44.5, 41.43]
}, {
	name: "格陵兰",
	position: [-51.35, 64.1]
}, {
	name: "哥斯达黎加",
	position: [-84.02, 9.55]
}, {
	name: "哥伦比亚",
	position: [-74, 4.34]
}, {
	name: "刚果",
	position: [15.12, -4.09]
}, {
	name: "刚果(扎伊尔)",
	position: [15.15, -4.2]
}, {
	name: "冈比亚",
	position: [-16.4, 13.28]
}, {
	name: "福克兰群岛(马尔维纳斯群岛)",
	position: [-59.51, -51.4]
}, {
	name: "佛得角",
	position: [-23.34, 15.02]
}, {
	name: "芬兰",
	position: [25.03, 60.15]
}, {
	name: "斐济",
	position: [178.3, -18.06]
}, {
	name: "菲律宾",
	position: [121.03, 14.4]
}, {
	name: "法属圭亚那",
	position: [-52.18, 5.05]
}, {
	name: "法属波利尼西亚",
	position: [-149.34, -17.32]
}, {
	name: "法罗群岛",
	position: [-6.56, 62.05]
}, {
	name: "法国",
	position: [2.2, 48.5]
}, {
	name: "厄立特里亚",
	position: [38.55, 15.19]
}, {
	name: "厄瓜多尔",
	position: [-78.35, -0.15]
}, {
	name: "俄罗斯",
	position: [37.35, 55.45]
}, {
	name: "多米尼加共和国",
	position: [-69.59, 18.3]
}, {
	name: "多米尼加",
	position: [-61.24, 15.2]
}, {
	name: "多哥",
	position: [1.2, 6.09]
}, {
	name: "东帝汶",
	position: [125.34, -8.29]
}, {
	name: "德国",
	position: [13.25, 52.3]
}, {
	name: "丹麦",
	position: [12.34, 55.41]
}, {
	name: "赤道几内亚",
	position: [8.5, 3.45]
}, {
	name: "朝鲜",
	position: [125.3, 39.09]
}, {
	name: "布隆迪",
	position: [29.18, -3.16]
}, {
	name: "布基纳法索",
	position: [-1.3, 12.15]
}, {
	name: "不丹",
	position: [89.45, 27.31]
}, {
	name: "博茨瓦纳",
	position: [25.57, -24.45]
}, {
	name: "伯利兹",
	position: [-88.3, 17.18]
}, {
	name: "玻利维亚",
	position: [-68.1, -16.2]
}, {
	name: "波斯尼亚和黑塞哥维那",
	position: [18.26, 43.52]
}, {
	name: "波兰",
	position: [21, 52.13]
}, {
	name: "波多黎各",
	position: [-66.07, 18.28]
}, {
	name: "冰岛",
	position: [-21.57, 64.1]
}, {
	name: "比利时",
	position: [4.21, 50.51]
}, {
	name: "比勒陀利亚",
	position: [28.12, -25.44]
}, {
	name: "贝宁",
	position: [2.42, 6.23]
}, {
	name: "北马里亚纳群岛",
	position: [145.45, 15.12]
}, {
	name: "保加利亚",
	position: [23.2, 42.45]
}, {
	name: "白俄罗斯",
	position: [27.3, 53.52]
}, {
	name: "巴西",
	position: [-47.55, -15.47]
}, {
	name: "巴拿马",
	position: [-79.25, 9]
}, {
	name: "巴林",
	position: [50.3, 26.1]
}, {
	name: "巴拉圭",
	position: [-57.3, -25.1]
}, {
	name: "巴基斯坦",
	position: [73.1, 33.4]
}, {
	name: "巴哈马",
	position: [-77.2, 25.05]
}, {
	name: "巴布亚新几内亚",
	position: [147.08, -9.24]
}, {
	name: "巴巴多斯",
	position: [-59.3, 13.05]
}, {
	name: "澳大利亚",
	position: [149.08, -35.15]
}, {
	name: "奥地利",
	position: [16.22, 48.12]
}, {
	name: "安提瓜和巴布达",
	position: [-61.48, 17.2]
}, {
	name: "安哥拉",
	position: [13.15, -8.5]
}, {
	name: "安道尔",
	position: [1.32, 42.31]
}, {
	name: "爱沙尼亚",
	position: [24.48, 59.22]
}, {
	name: "爱尔兰",
	position: [-6.15, 53.21]
}, {
	name: "埃塞俄比亚",
	position: [38.42, 9.02]
}, {
	name: "埃及",
	position: [31.14, 30.01]
}, {
	name: "阿塞拜疆",
	position: [49.56, 40.29]
}, {
	name: "阿曼",
	position: [58.36, 23.37]
}, {
	name: "阿鲁巴",
	position: [-70.02, 12.32]
}, {
	name: "阿联酋",
	position: [54.22, 24.28]
}, {
	name: "阿拉伯叙利亚共和国",
	position: [36.18, 33.3]
}, {
	name: "阿拉伯利比亚民众国",
	position: [13.07, 32.49]
}, {
	name: "阿根廷",
	position: [-60, -36.3]
}, {
	name: "阿富汗",
	position: [69.11, 34.28]
}, {
	name: "阿尔及利亚",
	position: [3.08, 36.42]
}, {
	name: "阿尔巴尼亚",
	position: [19.49, 41.18]
}];

const THREE = await importShared('three');
const getVector3 = (e) => {
  const t = new THREE.Spherical();
  t.radius = 100;
  const n = e[0], i = e[1], r = (n + 90) * (Math.PI / 180), a = (90 - i) * (Math.PI / 180);
  t.phi = a;
  t.theta = r;
  const o = new THREE.Vector3();
  o.setFromSpherical(t);
  return o;
};
const addMeshes = (e, t) => {
  const kb = new THREE.Object3D();
  const colorList = ["#66ffff", "#66aaaa"];
  const n = colorList[t];
  const r = new THREE.CircleGeometry(2, 6);
  const l = new THREE.MeshBasicMaterial({
    color: n,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1
  });
  const bigline = new THREE.CircleGeometry(3, 6);
  const positions = bigline.getAttribute("position");
  const newPositions = new Float32Array(positions.count * 3 - 3);
  for (let i = 3; i < positions.array.length; i++) {
    newPositions[i - 3] = positions.array[i];
  }
  const newGeometry = new THREE.BufferGeometry();
  newGeometry.setAttribute("position", new THREE.BufferAttribute(newPositions, 3));
  const s = new THREE.MeshBasicMaterial({
    color: n,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const cLineLoop = new THREE.LineLoop(newGeometry, s);
  const u = new THREE.Mesh(r, l);
  u.position.copy(e);
  cLineLoop.position.copy(e);
  u.lookAt(new THREE.Vector3(0, 0, 0));
  cLineLoop.lookAt(new THREE.Vector3(0, 0, 0));
  kb.add(cLineLoop);
  kb.add(u);
  return kb;
};
const addlightMeshes = (e) => {
  const n = new THREE.TextureLoader().load("./plugins/earthSample/image/menuA/lightray.jpg"), i = new THREE.MeshBasicMaterial({
    map: n,
    alphaMap: n,
    transparent: true,
    depthTest: true,
    depthWrite: true,
    alphaTest: 0.3,
    opacity: 0.9,
    side: THREE.DoubleSide,
    color: 16777215,
    blending: THREE.AdditiveBlending
  }), r = 50 * Math.random();
  const a = new THREE.PlaneGeometry(6, r);
  const o = new THREE.Matrix4(), s = new THREE.Mesh(a, i);
  o.makeRotationX(Math.PI / 2);
  o.setPosition(new THREE.Vector3(0, 0, r / -2));
  a.applyMatrix4(o);
  const l = s.clone();
  l.rotation.z = Math.PI / 2;
  s.add(l);
  s.position.copy(e);
  s.lookAt(0, 0, 0);
  return s;
};
const initCountryPosition = (scene) => {
  for (let i = 0; i < countryPositionList.length; i++) {
    const a = getVector3(countryPositionList[i].position);
    const o = Math.floor(2 * Math.random());
    scene.add(addMeshes(a, o));
    scene.add(addlightMeshes(a));
  }
};
const Xb = (e, t, Eb, Lb) => {
  const n = Math.trunc(Lb.width * e), i = Math.trunc(Lb.height * t);
  return Eb.data[4 * (i * Eb.width + n)] === 0;
};
const addPoints = (scene, Eb, Lb) => {
  const e = [], t = [], n = [];
  for (let i = 0; i < 2; i++) {
    e[i] = {
      positions: []
    };
    n[i] = {
      sizes: []
    };
    const r = new THREE.PointsMaterial();
    r.size = 5;
    r.color = new THREE.Color(10092543);
    r.map = new THREE.TextureLoader().load(`${"./"}plugins/earthSample/image/menuA/circle.png`);
    r.depthWrite = false;
    r.transparent = true;
    r.opacity = 0.2;
    r.side = THREE.FrontSide;
    r.blending = THREE.AdditiveBlending;
    const a = i / 2;
    r.t_ = a * Math.PI * 2;
    r.speed_ = 0.05;
    r.min_ = 0.2 * Math.random() + 0.5;
    r.delta_ = 0.1 * Math.random() + 0.1;
    r.opacity_coef_ = 1;
    t.push(r);
  }
  const o = new THREE.Spherical();
  o.radius = 100;
  for (let s = 200, l = 0; l < s; l++) {
    for (let c = new THREE.Vector3(), u = s * (1 - Math.sin(l / s * Math.PI)) / s + 0.5, h = 0; h < s; h += u) {
      const d = h / s, f = l / s, p = Math.floor(2 * Math.random()), v = e[p], m = n[p];
      if (Xb(d, f, Eb, Lb)) {
        o.theta = d * Math.PI * 2 - Math.PI / 2;
        o.phi = f * Math.PI;
        c.setFromSpherical(o);
        v.positions.push(c.x);
        v.positions.push(c.y);
        v.positions.push(c.z);
        if (h % 3 === 0) {
          m.sizes.push(6);
        }
      }
    }
  }
  const Ob = new THREE.Object3D();
  for (let g = 0; g < e.length; g++) {
    const _ = new THREE.BufferGeometry();
    const y = e[g];
    const b = n[g];
    const x = new Float32Array(y.positions.length);
    const w = new Float32Array(b.sizes.length);
    for (let M = 0; M < y.positions.length; M++)
      x[M] = y.positions[M];
    for (let S = 0; S < b.sizes.length; S++)
      w[S] = b.sizes[S];
    _.setAttribute("position", new THREE.BufferAttribute(x, 3));
    _.setAttribute("size", new THREE.BufferAttribute(w, 1));
    _.computeBoundingSphere();
    const T = new THREE.Points(_, t[g]);
    Ob.add(T);
  }
  Ob.name = "pointsEearth";
  scene.add(Ob);
};
const addImgEarth = (scene) => {
  const Lb = document.createElement("img");
  Lb.src = `${"./"}plugins/earthSample/image/menuA/earth.jpg`;
  Lb.onload = function() {
    const t = document.createElement("canvas");
    const n = t.getContext("2d");
    t.width = Lb.width;
    t.height = Lb.height;
    n.drawImage(Lb, 0, 0, Lb.width, Lb.height);
    const Eb = n.getImageData(0, 0, Lb.width, Lb.height);
    addPoints(scene, Eb, Lb);
  };
};
const XRayearth = (scene) => {
  const XRayMaterial = function(e2) {
    const t2 = {
      uTex: {
        type: "t",
        value: e2.map || new THREE.Texture()
      },
      offsetRepeat: {
        value: new THREE.Vector4(0, 0, 1, 1)
      },
      alphaProportion: {
        type: "1f",
        value: e2.alphaProportion || 0.5
      },
      diffuse: {
        value: e2.color || new THREE.Color(16777215)
      },
      opacity: {
        value: e2.opacity || 1
      },
      gridOffset: {
        value: 0
      }
    };
    return new THREE.ShaderMaterial({
      uniforms: t2,
      vertexShader: " \nvarying float _alpha;\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\nuniform float alphaProportion;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\nvec4 worldPosition = modelMatrix * vec4( vec3( position ), 1.0 );\nvec3 cameraToVertex = normalize( cameraPosition - worldPosition.xyz);\n_alpha = 1.0 - max( 0.0, dot( normal, cameraToVertex ) );\n_alpha = max( 0.0, (_alpha - alphaProportion) / (1.0 - alphaProportion) );\n}",
      fragmentShader: "\nuniform sampler2D uTex;\nuniform vec3 diffuse;\nuniform float opacity;\nuniform float gridOffset;\nvarying float _alpha;\nvarying vec2 vUv;\nvoid main() {\nvec4 texColor = texture2D( uTex, vUv );\nfloat _a = _alpha * opacity;\nif( _a <= 0.0 ) discard;\n_a = _a * ( sin( vUv.y * 1.0 + gridOffset ) * .5 + .5 );\ngl_FragColor = vec4( texColor.rgb * diffuse, _a );\n}",
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      side: THREE.DoubleSide
    });
  };
  const e = new THREE.SphereGeometry(1.1 * 100, 120, 144);
  const t = new THREE.TextureLoader().load(`${"./"}plugins/earthSample/image/menuA/clouds.png`);
  t.wrapT = THREE.ClampToEdgeWrapping;
  t.wrapS = THREE.ClampToEdgeWrapping;
  const n = new XRayMaterial({
    map: t,
    alphaProportion: 0.35,
    color: new THREE.Color(6723993),
    opacity: 1});
  const i = new THREE.Mesh(e, n);
  i.matrixAutoUpdate = false;
  const Ob = new THREE.Object3D();
  Ob.name = "cloudsEearth";
  Ob.add(i);
  scene.add(Ob);
  return Ob;
};

const {createElementVNode:_createElementVNode$1,unref:_unref,createVNode:_createVNode$1,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1$1 = { class: "w-full h-full" };

const {watchEffect,ref} = await importShared('vue');
const {Fog,Color} = await importShared('three');


const _sfc_main$1 = {
  __name: 'earth',
  setup(__props) {

const gl = {
	clearColor: '#000000',
	alpha: true,
	useLegacyLights: true,
	antialias: true,	//开启锯齿
	logarithmicDepthBuffer: true,
};
const TresCanvasRef = ref();
let scene = null;
const moveMesh = [];
const { seek } = useSeek();
watchEffect(() => {
	if (TresCanvasRef.value && TresCanvasRef.value.context) {
		TresCanvasRef.value.context.renderer.instance.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
		TresCanvasRef.value.context.renderer.instance.autoClear = false;
		TresCanvasRef.value.context.renderer.instance.autoClearColor = new Color(1, 0, 0, 0);

		scene = TresCanvasRef.value.context.scene.value;
		scene.fog = new Fog(0xfff, 100, 1000);
		initCountryPosition(scene);
		addImgEarth(scene);
		moveMesh[1] = XRayearth(scene);
	}
});
const onLoop = () => {
	if (moveMesh[0] === undefined) {
		const pointsEearth = seek(scene, 'name', 'pointsEearth');
		if (pointsEearth) {
			moveMesh[0] = pointsEearth;
		}
	}
	if (moveMesh.length && moveMesh[1] && moveMesh[0]) {
		moveMesh[1].rotation.z += .002;
		moveMesh[0].rotation.y += .002;
	}
};

return (_ctx, _cache) => {
  const _component_TresCanvas = _resolveComponent("TresCanvas");

  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, [
    _createVNode$1(_component_TresCanvas, _mergeProps({
      ref_key: "TresCanvasRef",
      ref: TresCanvasRef
    }, gl, { onLoop: onLoop }), {
      default: _withCtx$1(() => [
        _cache[0] || (_cache[0] = _createElementVNode$1("TresPerspectiveCamera", {
          position: [0, 0, 365],
          fov: 45,
          near: 1,
          far: 10000
        }, null, -1)),
        _createVNode$1(_unref(Kk), {
          autoRotate: true,
          autoRotateSpeed: 2,
          enableZoom: false,
          enablePan: false
        })
      ]),
      _: 1
    }, 16)
  ]))
}
}

};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,createElementVNode:_createElementVNode,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "bg-img flex justify-center flex-items-center" };
const _hoisted_2 = { class: "w-120 h-120 pos-relative" };
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "menuA",
  setup(__props) {
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_sfc_main$3),
        _createElementVNode("div", _hoisted_2, [
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(circleo)
            ]),
            _: 1
          })),
          _cache[0] || (_cache[0] = _createElementVNode("div", { class: "css_globe_halo1" }, null, -1)),
          (_openBlock(), _createBlock(_Suspense, null, {
            default: _withCtx(() => [
              _createVNode(_sfc_main$1)
            ]),
            _: 1
          }))
        ])
      ]);
    };
  }
});

const menuA = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ab41dcf"]]);

export { menuA as default };
//# sourceMappingURL=menuA.Xf26DYNh1767105581793.js.map
