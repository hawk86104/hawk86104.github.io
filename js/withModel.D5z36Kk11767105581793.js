import { importShared, kk, yk, vU, Kk } from './index.BxB45aCK1767105581793.js';
import { MqttClientWrapper } from './mqttTvt.DRsrF6WN1767105581793.js';
import { useMessage, NMessageProvider } from './use-message.C-NKuHgJ1767105581793.js';
import { NCard } from './Card.CmCLdudX1767105581793.js';
import { NFormItem } from './FormItem.C_Krb9Z_1767105581793.js';
import { NTag } from './Tag.C3nlcNZB1767105581793.js';
import { NDivider, NLog } from './Log.XhSU-B701767105581793.js';
import { NInput } from './Input.xoI_2nKL1767105581793.js';
import { NSwitch } from './Switch.DCUaofJ91767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,createTextVNode:_createTextVNode,unref:_unref$2,withCtx:_withCtx$2,createVNode:_createVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = {
  class: "w-100 absolute z-99999 mqttdebugger",
  style: { "margin-top": "40px" }
};
const {ref: ref$1,onUnmounted,onMounted,watch: watch$1,inject: inject$1} = await importShared('vue');
const subscribedTopic = null;
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "widthMqtt",
  setup(__props) {
    const globeMessage = useMessage();
    const eFanState = ref$1(false);
    const eFanStateLoading = ref$1(false);
    const config = {
      host: "a5183db3.ala.asia-southeast1.emqxsl.com",
      port: 8084,
      protocol: "wss",
      clientId: `tvt-test-client-${Math.random().toString(16).slice(2, 8)}`,
      username: "tvt.js",
      password: "test",
      topic: "tvtDevices/#"
    };
    const mqtt = ref$1(null);
    const connected = ref$1(false);
    const messages = ref$1([]);
    function initMqttClient() {
      if (mqtt.value) {
        cleanupOldClient();
      }
      mqtt.value = new MqttClientWrapper(config);
      mqtt.value.on("connected", () => {
        connected.value = true;
        console.log("MQTT 连接成功");
        handleSubscribe();
      });
      mqtt.value.on("close", () => {
        connected.value = false;
        console.log("MQTT 连接关闭");
      });
      mqtt.value.on("error", (err) => {
        console.error(`MQTT 错误: ${err.message}`);
      });
      mqtt.value.on("message", (topic, data) => {
        messages.value.push(`[${topic}] ${JSON.stringify(data)}`);
        if (messages.value.length > 100) messages.value.shift();
        if (!eFanStateLoading.value && data && data.status) {
          eFanState.value = data.status === "运行";
        }
        if (data && data.detail) {
          globeMessage.info("mqtt[" + data.deviceId + "] 设备详情：" + data.detail + "程序已运行：" + data.uptime, {
            keepAliveOnHover: true,
            duration: 18e3
          });
        }
      });
      mqtt.value.connect();
    }
    function handleSubscribe() {
      if (!mqtt.value) {
        return;
      }
      mqtt.value.subscribe(config.topic, (err) => {
        if (err) {
          console.error(`订阅失败: ${err.message}`);
        } else {
          console.log(`已订阅主题: ${config.topic}`);
        }
      });
    }
    function cleanupOldClient() {
      if (mqtt.value) {
        mqtt.value.removeAllListeners();
        mqtt.value.disconnect();
        mqtt.value = null;
        connected.value = false;
      }
    }
    onMounted(() => {
      initMqttClient();
    });
    function handleDisconnect() {
      if (mqtt.value && subscribedTopic) ;
      cleanupOldClient();
    }
    onUnmounted(() => {
      handleDisconnect();
    });
    let localChangeTimeout = null;
    function handleChange(value) {
      eFanStateLoading.value = true;
      const payload = {
        deviceId: "tvtDevice001",
        status: value ? "运行" : "关闭"
      };
      mqtt.value.publish("tvtDevices/tvtDevice001/control", payload);
      clearTimeout(localChangeTimeout);
      localChangeTimeout = setTimeout(() => {
        eFanStateLoading.value = false;
      }, 1e3);
    }
    const animationPlay = inject$1("animationPlay");
    watch$1(
      () => eFanState.value,
      (play) => {
        animationPlay.value = play;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
        _createVNode$2(_unref$2(NCard), {
          title: "MQTT 调试面板",
          style: { "background-color": "#d6d0c540" }
        }, {
          default: _withCtx$2(() => [
            _createVNode$2(_unref$2(NFormItem), { label: "注意：" }, {
              default: _withCtx$2(() => [
                _createVNode$2(_unref$2(NTag), {
                  style: { "padding": "30px 21px", "line-height": "21px" },
                  type: "warning"
                }, {
                  default: _withCtx$2(() => [..._cache[1] || (_cache[1] = [
                    _createTextVNode("免费服务每月流量/次数有限", -1),
                    _createElementVNode$2("br", null, null, -1),
                    _createTextVNode("若连接失败请自行更换自己的mqtt服务", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _createVNode$2(_unref$2(NDivider), { style: { "margin-top": "-10px" } }, {
              default: _withCtx$2(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode("mqtt配置信息", -1)
              ])]),
              _: 1
            }),
            _createVNode$2(_unref$2(NInput), {
              value: JSON.stringify(config, null, 2),
              type: "textarea",
              rows: 9,
              disabled: ""
            }, null, 8, ["value"]),
            _createVNode$2(_unref$2(NDivider), null, {
              default: _withCtx$2(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode("连接状态", -1)
              ])]),
              _: 1
            }),
            _createVNode$2(_unref$2(NFormItem), { label: "mqtt代理通路" }, {
              default: _withCtx$2(() => [
                _createVNode$2(_unref$2(NSwitch), { value: connected.value }, {
                  checked: _withCtx$2(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(" 已连接 ", -1)
                  ])]),
                  unchecked: _withCtx$2(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(" 连接中 ", -1)
                  ])]),
                  _: 1
                }, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$2(_unref$2(NFormItem), { label: "订阅主题" }, {
              default: _withCtx$2(() => [
                _createVNode$2(_unref$2(NInput), {
                  value: config.topic,
                  disabled: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$2(_unref$2(NDivider), null, {
              default: _withCtx$2(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode("信息日志列表", -1)
              ])]),
              _: 1
            }),
            _createVNode$2(_unref$2(NLog), {
              log: messages.value.join("\n"),
              rows: 12
            }, null, 8, ["log"]),
            _createVNode$2(_unref$2(NDivider), null, {
              default: _withCtx$2(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode("通过mqtt交互状态", -1)
              ])]),
              _: 1
            }),
            _cache[8] || (_cache[8] = _createTextVNode(" 开关电风扇 : ", -1)),
            _createVNode$2(_unref$2(NSwitch), {
              loading: eFanStateLoading.value,
              round: false,
              value: eFanState.value,
              "onUpdate:value": [
                _cache[0] || (_cache[0] = ($event) => eFanState.value = $event),
                handleChange
              ]
            }, null, 8, ["loading", "value"])
          ]),
          _: 1
        })
      ]);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createElementVNode:_createElementVNode$1,withCtx:_withCtx$1,createVNode:_createVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const {watch,inject,toRaw} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "efanModel",
  props: {
    color: {
      type: String,
      required: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { nodes, animations } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      `${"https://opensource.cdn.icegl.cn"}/model/eCommerce/eFan/nFan.gltf`
    )), __temp = await __temp, __restore(), __temp);
    const modelAttUVarr = (name) => nodes.Sketchfab_model.getObjectByName(name).geometry.attributes.uv.array;
    const srcUVslist = {
      Object_4: new Float32Array(modelAttUVarr("Object_4")),
      Object_8: new Float32Array(modelAttUVarr("Object_8")),
      Object_6: new Float32Array(modelAttUVarr("Object_6")),
      Object_6001: new Float32Array(modelAttUVarr("Object_6001"))
    };
    const setColorUV = (color) => {
      const colorList = {
        "#ff8b04": 0,
        "#999999": 0.04,
        "#d3ac10": 0.19,
        "#ffbec4": -0.06,
        "#d0d5c6": 0.55
      };
      for (const [key, value] of Object.entries(srcUVslist)) {
        for (let i = 0; i < modelAttUVarr(key).length; i++) {
          modelAttUVarr(key)[i] = value[i] + colorList[color];
        }
        nodes.Sketchfab_model.getObjectByName(key).geometry.getAttribute("uv").needsUpdate = true;
      }
    };
    const switcherModel = nodes.Sketchfab_model.getObjectByName("Object_6001");
    const { actions } = kk(animations, nodes.Sketchfab_model);
    const currentAction = actions.Animation;
    const animationPlay = inject("animationPlay");
    watch(
      () => props.color,
      (color) => {
        setColorUV(color);
      },
      { immediate: true }
    );
    watch(
      () => animationPlay.value,
      (play) => {
        if (play) {
          currentAction.reset().play();
          switcherModel?.rotateY(-Math.PI);
        } else {
          currentAction.fadeOut(0.6).paused = true;
          switcherModel?.rotateY(Math.PI);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createVNode$1(_unref$1(yk), {
          range: [-0.5, -0.5],
          speed: 2
        }, {
          default: _withCtx$1(() => [
            _createElementVNode$1("primitive", {
              position: [-2, 0, 0],
              object: toRaw(_unref$1(nodes).Sketchfab_model),
              scale: 3
            }, null, 8, _hoisted_1)
          ]),
          _: 1
        }),
        _createVNode$1(_unref$1(vU), {
          opacity: 0.3,
          blur: 2.6,
          position: [0, -2, 0]
        })
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,resolveComponent:_resolveComponent,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {ref,provide} = await importShared('vue');
const {BasicShadowMap,SRGBColorSpace} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "withModel",
  setup(__props) {
    const gl = {
      shadows: true,
      alpha: true,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      windowSize: true,
      clearColor: "#ffffff"
    };
    const animationPlay = ref(false);
    provide("animationPlay", animationPlay);
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_component_TresCanvas, _normalizeProps(_guardReactiveProps(gl)), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [10, 5, -8],
              fov: 45,
              near: 0.1,
              far: 1e5
            }, null, -1)),
            _createVNode(_unref(Kk), { enableDamping: "" }),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, { color: "#ff8b04" })
              ]),
              _: 1
            })),
            _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _cache[2] || (_cache[2] = _createElementVNode("TresPointLight", {
              position: [0, 0, 10],
              intensity: 1
            }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresDirectionalLight", {
              position: [3, 3, 3],
              intensity: 3
            }, null, -1))
          ]),
          _: 1
        }, 16),
        _createVNode(_unref(NMessageProvider), null, {
          default: _withCtx(() => [
            _createVNode(_sfc_main$2)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=withModel.D5z36Kk11767105581793.js.map
