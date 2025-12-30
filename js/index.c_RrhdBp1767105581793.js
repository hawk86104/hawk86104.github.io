import { _export_sfc, importShared } from './index.BxB45aCK1767105581793.js';
import { MqttClientWrapper } from './mqttTvt.DRsrF6WN1767105581793.js';
import { Button } from './Button.CtEklqVH1767105581793.js';
import { NDivider, NLog } from './Log.XhSU-B701767105581793.js';
import { useMessage, NMessageProvider } from './use-message.C-NKuHgJ1767105581793.js';
import { NCard } from './Card.CmCLdudX1767105581793.js';
import { NForm, NFormItem } from './FormItem.C_Krb9Z_1767105581793.js';
import { NTag } from './Tag.C3nlcNZB1767105581793.js';
import { NInput } from './Input.xoI_2nKL1767105581793.js';
import { NInputNumber } from './InputNumber.Bb21EwPl1767105581793.js';
import { NSpace } from './Space.Beq0ttmt1767105581793.js';

const {createTextVNode:_createTextVNode,unref:_unref$1,withCtx:_withCtx$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,createBlock:_createBlock$1} = await importShared('vue');


const _hoisted_1 = {
  class: "w-full",
  style: {"background-color":"#ffffff"}
};

const {ref,reactive,onUnmounted} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'MqttTesterUI',
  setup(__props) {

const message = useMessage();

const form = reactive({
    host: 'a5183db3.ala.asia-southeast1.emqxsl.com',
    port: 8084,
    protocol: 'wss',
    clientId: `tvt-test-client-${Math.random().toString(16).slice(2, 8)}`,
    username: 'tvt.js',
    password: 'test',
    topic: 'tvtDevices/#',
});

const sendTopic = ref('tvtDevices/uiDemo');
const sendMessage = ref('{ "hello": "world" }');

const mqtt = ref(null);
const connected = ref(false);
const messages = ref([]);
const isConnecting = ref(false);

function cleanupOldClient() {
    if (mqtt.value) {
        mqtt.value.removeAllListeners();
        mqtt.value.disconnect();
        mqtt.value = null;
        connected.value = false;
    }
}
function handleConnect() {
    cleanupOldClient();

    isConnecting.value = true; // ⏳ 设置连接中

    mqtt.value = new MqttClientWrapper(form);
    mqtt.value.on('connected', () => {
        connected.value = true;
        isConnecting.value = false;
        message.success('MQTT 连接成功');
    });
    mqtt.value.on('close', () => {
        connected.value = false;
        isConnecting.value = false;
        message.warning('MQTT 连接关闭');
    });
    mqtt.value.on('error', (err) => {
        isConnecting.value = false;
        console.error(err);
        message.error(`MQTT 错误: ${err.message}`);
    });
    mqtt.value.on('message', (topic, data) => {
        messages.value.push(`[${topic}] ${JSON.stringify(data)}`);
        if (messages.value.length > 100) messages.value.shift();
    });
    mqtt.value.connect();
}

const subscribedTopics = ref(new Set());
function handleDisconnect() {
    if (mqtt.value) {
        for (const topic of subscribedTopics.value) {
            mqtt.value.unsubscribe(topic);
        }
    }

    subscribedTopics.value.clear();
    cleanupOldClient();
    message.success('已断开连接');
}

function handleSubscribe() {
    if (!mqtt.value || !connected.value) {
        message.warning('尚未连接 MQTT');
        return
    }

    const topic = form.topic?.trim();
    if (!topic) {
        message.warning('请输入订阅主题');
        return
    }

    if (subscribedTopics.value.has(topic)) {
        message.info(`已订阅该主题：${topic}`);
        return
    }

    mqtt.value.subscribe(topic);
    subscribedTopics.value.add(topic);
    message.success(`订阅成功：${topic}`);
}

function handlePublish() {
    try {
        const payload = JSON.parse(sendMessage.value);
        mqtt.value.publish(sendTopic.value, payload);
        message.info('已发送消息');
    } catch (e) {
        message.error('JSON 格式错误');
    }
}

onUnmounted(() => {
    handleDisconnect();
});

return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock("div", _hoisted_1, [
    _createVNode$1(_unref$1(NCard), {
      title: "MQTT 调试面板",
      class: "max-w-4xl mx-auto"
    }, {
      default: _withCtx$1(() => [
        _createVNode$1(_unref$1(NForm), {
          model: form,
          "label-width": "100"
        }, {
          default: _withCtx$1(() => [
            _createVNode$1(_unref$1(NFormItem), { label: "注意：" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NTag), {
                  style: {'margin-left': '10px'},
                  type: "warning"
                }, {
                  default: _withCtx$1(() => [...(_cache[8] || (_cache[8] = [
                    _createTextVNode("免费服务每月流量/次数有限，若连接失败请自行更换自己的mqtt服务", -1)
                  ]))]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "地址" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInput), {
                  value: form.host,
                  "onUpdate:value": _cache[0] || (_cache[0] = $event => ((form.host) = $event)),
                  placeholder: "例如: broker.hivemq.com"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "端口" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInputNumber), {
                  value: form.port,
                  "onUpdate:value": _cache[1] || (_cache[1] = $event => ((form.port) = $event)),
                  min: 1
                }, null, 8, ["value"]),
                _createVNode$1(_unref$1(NTag), {
                  style: {'margin-left': '10px'},
                  type: "info"
                }, {
                  default: _withCtx$1(() => [...(_cache[9] || (_cache[9] = [
                    _createTextVNode("浏览器端只支持：wws方式 的 mqtt", -1)
                  ]))]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "Client ID" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInput), {
                  value: form.clientId,
                  "onUpdate:value": _cache[2] || (_cache[2] = $event => ((form.clientId) = $event)),
                  placeholder: "随机生成也可"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "用户名" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInput), {
                  value: form.username,
                  "onUpdate:value": _cache[3] || (_cache[3] = $event => ((form.username) = $event))
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "密码" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInput), {
                  value: form.password,
                  "onUpdate:value": _cache[4] || (_cache[4] = $event => ((form.password) = $event))
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NFormItem), { label: "订阅主题" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(NInput), {
                  value: form.topic,
                  "onUpdate:value": _cache[5] || (_cache[5] = $event => ((form.topic) = $event)),
                  placeholder: "例如: tvt/demo"
                }, null, 8, ["value"])
              ]),
              _: 1
            }),
            _createVNode$1(_unref$1(NSpace), null, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(Button), {
                  type: "primary",
                  disabled: connected.value || isConnecting.value,
                  loading: isConnecting.value,
                  onClick: handleConnect
                }, {
                  default: _withCtx$1(() => [...(_cache[10] || (_cache[10] = [
                    _createTextVNode("连接", -1)
                  ]))]),
                  _: 1
                }, 8, ["disabled", "loading"]),
                _createVNode$1(_unref$1(Button), {
                  type: "warning",
                  disabled: !connected.value,
                  onClick: handleDisconnect
                }, {
                  default: _withCtx$1(() => [...(_cache[11] || (_cache[11] = [
                    _createTextVNode("断开", -1)
                  ]))]),
                  _: 1
                }, 8, ["disabled"]),
                _createVNode$1(_unref$1(Button), {
                  type: "success",
                  disabled: !connected.value,
                  onClick: handleSubscribe
                }, {
                  default: _withCtx$1(() => [...(_cache[12] || (_cache[12] = [
                    _createTextVNode("订阅", -1)
                  ]))]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"]),
        _createVNode$1(_unref$1(NDivider), null, {
          default: _withCtx$1(() => [...(_cache[13] || (_cache[13] = [
            _createTextVNode("已订阅主题", -1)
          ]))]),
          _: 1
        }),
        _createVNode$1(_unref$1(NSpace), null, {
          default: _withCtx$1(() => [
            (_openBlock$1(true), _createElementBlock(_Fragment, null, _renderList(Array.from(subscribedTopics.value), (topic) => {
              return (_openBlock$1(), _createBlock$1(_unref$1(NTag), {
                key: topic,
                type: "info",
                round: ""
              }, {
                default: _withCtx$1(() => [
                  _createTextVNode(_toDisplayString(topic), 1)
                ]),
                _: 2
              }, 1024))
            }), 128))
          ]),
          _: 1
        }),
        _createVNode$1(_unref$1(NDivider), null, {
          default: _withCtx$1(() => [...(_cache[14] || (_cache[14] = [
            _createTextVNode("发送消息 [主题/json消息]", -1)
          ]))]),
          _: 1
        }),
        _createVNode$1(_unref$1(NInput), {
          value: sendTopic.value,
          "onUpdate:value": _cache[6] || (_cache[6] = $event => ((sendTopic).value = $event)),
          placeholder: "主题",
          class: "mb-2"
        }, null, 8, ["value"]),
        _createVNode$1(_unref$1(NInput), {
          value: sendMessage.value,
          "onUpdate:value": _cache[7] || (_cache[7] = $event => ((sendMessage).value = $event)),
          type: "textarea",
          placeholder: "{ \"key\": \"value\" }",
          rows: 4
        }, null, 8, ["value"]),
        _createVNode$1(_unref$1(Button), {
          type: "info",
          class: "mt-2",
          disabled: !connected.value,
          onClick: handlePublish
        }, {
          default: _withCtx$1(() => [...(_cache[15] || (_cache[15] = [
            _createTextVNode("发送", -1)
          ]))]),
          _: 1
        }, 8, ["disabled"]),
        _createVNode$1(_unref$1(NDivider), null, {
          default: _withCtx$1(() => [...(_cache[16] || (_cache[16] = [
            _createTextVNode("收到的消息", -1)
          ]))]),
          _: 1
        }),
        _createVNode$1(_unref$1(NLog), {
          log: messages.value.join('\n'),
          rows: 12
        }, null, 8, ["log"])
      ]),
      _: 1
    })
  ]))
}
}

};
const MqttTester = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-e8d1d438"]]);

const {createVNode:_createVNode,unref:_unref,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const _sfc_main = {
  __name: 'index',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock(), _createBlock(_unref(NMessageProvider), null, {
    default: _withCtx(() => [
      _createVNode(MqttTester)
    ]),
    _: 1
  }))
}
}

};

export { _sfc_main as default };
//# sourceMappingURL=index.c_RrhdBp1767105581793.js.map
