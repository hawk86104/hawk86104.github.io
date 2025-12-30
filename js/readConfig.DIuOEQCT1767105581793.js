import { importShared, _export_sfc, Kk } from './index.BxB45aCK1767105581793.js';
import { __federation_method_setRemote, __federation_method_getRemote, __federation_method_unwrapDefault } from './_virtual___federation__.DOWIP4eR1767105581793.js';
import { Button } from './Button.CtEklqVH1767105581793.js';
import { useMessage, NMessageProvider } from './use-message.C-NKuHgJ1767105581793.js';
import { NSpace } from './Space.Beq0ttmt1767105581793.js';
import { NInput } from './Input.xoI_2nKL1767105581793.js';
import { NDescriptions, NDescriptionsItem, NList, NListItem, NThing } from './Thing.DPqkGjKZ1767105581793.js';
import { NTag } from './Tag.C3nlcNZB1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

class RemoteInstance {
  constructor(remoteName) {
    this.path = "";
    this.resPath = "";
    this.config = null;
    this.loading = null;
    this.remoteName = remoteName;
  }
  setPath(path) {
    if (this.path === path && this.config) return;
    this.path = path;
    this.config = null;
    this.loading = null;
    __federation_method_setRemote(this.remoteName, {
      url: () => Promise.resolve(path),
      format: "esm",
      from: "vite"
    });
  }
  setResPath(resPath) {
    this.resPath = resPath;
    window.__REMOTE_ASSET_MAP__ ??= {};
  }
  async loadConfig() {
    if (this.config) return this.config;
    if (this.loading) return this.loading;
    this.loading = __federation_method_getRemote(
      this.remoteName,
      "./config"
    ).then((wrap) => __federation_method_unwrapDefault(wrap)).then((config) => {
      this.validateConfig(config);
      this.config = config;
      window.__REMOTE_ASSET_MAP__[config.name] = this.resPath;
      return config;
    }).catch((err) => {
      this.config = null;
      console.error(`[Remote ${this.remoteName}] load config failed:`, err);
      throw err;
    }).finally(() => {
      this.loading = null;
    });
    return this.loading;
  }
  async loadComponentModule(comFile) {
    if (!this.config) {
      throw new Error(
        `[Remote ${this.remoteName}] config not loaded`
      );
    }
    return __federation_method_getRemote(
      this.remoteName,
      comFile
    ).then(
      (wrap) => __federation_method_unwrapDefault(wrap)
    );
  }
  getConfig() {
    return this.config;
  }
  async reload() {
    this.config = null;
    this.loading = null;
    return this.loadConfig();
  }
  validateConfig(config) {
    if (!config?.name || !Array.isArray(config.components)) {
      throw new Error(
        `[Remote ${this.remoteName}] config schema invalid`
      );
    }
  }
}

class RemoteRegistry {
  constructor() {
    this.remotes = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new RemoteRegistry();
    }
    return this.instance;
  }
  /** 注册或更新 remote */
  registerRemote(remoteName, resPath, path) {
    let remote = this.remotes.get(remoteName);
    if (!remote) {
      remote = new RemoteInstance(remoteName);
      this.remotes.set(remoteName, remote);
    }
    remote.setResPath(resPath);
    remote.setPath(path);
    return remote;
  }
  getRemote(remoteName) {
    return this.remotes.get(remoteName);
  }
  /** 加载某个 remote 的配置 */
  async loadRemoteConfig(remoteName) {
    const remote = this.remotes.get(remoteName);
    if (!remote) {
      throw new Error(`Remote "${remoteName}" not registered`);
    }
    return remote.loadConfig();
  }
  /** 获取已加载配置 */
  getRemoteConfig(remoteName) {
    return this.remotes.get(remoteName)?.getConfig();
  }
  /** 加载全部 remote */
  async loadAll() {
    return Promise.all(
      [...this.remotes.values()].map((r) => r.loadConfig())
    );
  }
  /** 聚合：所有组件清单（给编辑器 / UI 用） */
  // getAllComponents() {
  //   const result: Array<{
  //     remote: string
  //     component: RemotePluginConfig['components'][0]
  //   }> = []
  //   for (const [name, remote] of this.remotes) {
  //     const config = remote.getConfig()
  //     if (!config) continue
  //     config.components.forEach(c => {
  //       result.push({
  //         remote: name,
  //         component: c
  //       })
  //     })
  //   }
  //   return result
  // }
}
const remoteRegistry = RemoteRegistry.getInstance();

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,createVNode:_createVNode$2,createTextVNode:_createTextVNode$1,withCtx:_withCtx$2,openBlock:_openBlock$3,createBlock:_createBlock$3} = await importShared('vue');

const {ref: ref$1} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "ServiceLoader",
  emits: ["loaded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const message = useMessage();
    const serviceUrl = ref$1("http://dcser.icegl.cn");
    const loading = ref$1(false);
    const handleApply = async () => {
      if (!serviceUrl.value) {
        message.warning("请输入服务地址");
        return;
      }
      loading.value = true;
      try {
        remoteRegistry.registerRemote(
          "base",
          serviceUrl.value + "/",
          serviceUrl.value + "/assets/remoteEntry.js"
        );
        const config = await remoteRegistry.loadRemoteConfig("base");
        emit("loaded", config);
        message.success("服务加载成功");
      } catch (e) {
        message.error("服务加载失败");
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _cache) => {
      return _openBlock$3(), _createBlock$3(_unref$2(NSpace), {
        vertical: "",
        size: "large"
      }, {
        default: _withCtx$2(() => [
          _createVNode$2(_unref$2(NInput), {
            value: serviceUrl.value,
            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => serviceUrl.value = $event),
            placeholder: "请输入服务地址",
            clearable: ""
          }, null, 8, ["value"]),
          _createVNode$2(_unref$2(Button), {
            type: "primary",
            block: "",
            loading: loading.value,
            onClick: handleApply
          }, {
            default: _withCtx$2(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode$1(" 应用服务 ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        _: 1
      });
    };
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,unref:_unref$1,withCtx:_withCtx$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$1,normalizeClass:_normalizeClass,createBlock:_createBlock$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "ServiceViewer",
  props: {
    data: {},
    selectedType: {}
  },
  emits: ["select", "reset"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const handleSelect = (item) => {
      emit("select", item);
    };
    return (_ctx, _cache) => {
      return _openBlock$2(), _createBlock$2(_unref$1(NSpace), {
        vertical: "",
        size: "large"
      }, {
        default: _withCtx$1(() => [
          _createVNode$1(_unref$1(NDescriptions), {
            bordered: "",
            size: "small"
          }, {
            default: _withCtx$1(() => [
              _createVNode$1(_unref$1(NDescriptionsItem), { label: "名称" }, {
                default: _withCtx$1(() => [
                  _createTextVNode(_toDisplayString(props.data.name), 1)
                ]),
                _: 1
              }),
              _createVNode$1(_unref$1(NDescriptionsItem), { label: "版本" }, {
                default: _withCtx$1(() => [
                  _createVNode$1(_unref$1(NTag), { type: "info" }, {
                    default: _withCtx$1(() => [
                      _createTextVNode(_toDisplayString(props.data.version), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              _createVNode$1(_unref$1(NDescriptionsItem), { label: "描述" }, {
                default: _withCtx$1(() => [
                  _createTextVNode(_toDisplayString(props.data.description), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _createVNode$1(_unref$1(NList), {
            bordered: "",
            hoverable: "",
            clickable: ""
          }, {
            default: _withCtx$1(() => [
              (_openBlock$2(true), _createElementBlock$1(_Fragment$1, null, _renderList(props.data.components, (item) => {
                return _openBlock$2(), _createBlock$2(_unref$1(NListItem), {
                  class: _normalizeClass({ "n-list-item--active": _ctx.selectedType && item.type === _ctx.selectedType }),
                  key: item.type,
                  onClick: ($event) => handleSelect(item)
                }, {
                  default: _withCtx$1(() => [
                    _createVNode$1(_unref$1(NThing), {
                      title: item.name,
                      description: item.type
                    }, {
                      "header-extra": _withCtx$1(() => [
                        _createVNode$1(_unref$1(NTag), { size: "small" }, {
                          default: _withCtx$1(() => [..._cache[1] || (_cache[1] = [
                            _createTextVNode("点击载入调试", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["title", "description"])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
              }), 128))
            ]),
            _: 1
          }),
          _createVNode$1(_unref$1(Button), {
            type: "warning",
            block: "",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("reset"))
          }, {
            default: _withCtx$1(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(" 删除当前服务 / 重新加载 ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ServiceViewer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e8a20270"]]);

function createConfigPane(container, config, values) {
  const pane = new Pane({
    container,
    title: "配置"
  });
  Object.entries(config).forEach(([key, item]) => {
    switch (item.com) {
      case "Select":
        pane.addBinding(values, key, {
          label: item.name,
          options: item.options?.reduce((acc, cur) => {
            acc[cur.label] = cur.value;
            return acc;
          }, {})
        }).on("change", (ev) => {
          values[key] = ev.value;
        });
        break;
      case "ColorPicker":
        pane.addBinding(values, key, {
          label: item.name,
          picker: "inline"
        }).on("change", (ev) => {
          values[key] = ev.value;
        });
        break;
      case "Switch":
        pane.addBinding(values, key, {
          label: item.name
        }).on("change", (ev) => {
          values[key] = ev.value;
        });
        break;
      case "Slider":
        pane.addBinding(values, key, {
          label: item.name,
          min: item.min,
          max: item.max,
          step: item.step
        }).on("change", (ev) => {
          values[key] = ev.value;
        });
        break;
      default:
        console.warn(`未知组件类型：${item.com}`);
    }
  });
  return pane;
}

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {resolveDynamicComponent:_resolveDynamicComponent,normalizeProps:_normalizeProps,openBlock:_openBlock$1,createBlock:_createBlock$1,mergeProps:_mergeProps$1,createCommentVNode:_createCommentVNode$1} = await importShared('vue');

const {shallowRef,onBeforeUnmount} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "oneRemoteCom",
  props: {
    remoteName: {},
    comName: {},
    attrsData: {},
    config: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const moduleWraped = shallowRef(null);
    const ri = remoteRegistry.getRemote(props.remoteName);
    if (ri) {
      moduleWraped.value = ([__temp, __restore] = _withAsyncContext(() => ri.loadComponentModule(`./${props.comName}`)), __temp = await __temp, __restore(), __temp);
    }
    const pane = createConfigPane(document.getElementById("pane"), props.config, props.attrsData);
    onBeforeUnmount(() => {
      if (pane) {
        pane.dispose();
      }
    });
    return (_ctx, _cache) => {
      return moduleWraped.value ? (_openBlock$1(), _createBlock$1(_resolveDynamicComponent(moduleWraped.value), _normalizeProps(_mergeProps$1({ key: 0 }, _ctx.attrsData)), null, 16)) : _createCommentVNode$1("", true);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,unref:_unref,withCtx:_withCtx,createVNode:_createVNode,createElementVNode:_createElementVNode,mergeProps:_mergeProps,Suspense:_Suspense,resolveComponent:_resolveComponent,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {nextTick,reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "readConfig",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const handleLoaded = (json) => {
      serviceData.value = json;
      console.log("服务配置加载完成：", json);
    };
    const serviceData = ref(null);
    const comState = ref(null);
    const attrsData = ref(null);
    const comConfig = ref(null);
    const handleSelectComponent = (item) => {
      console.log("选中组件", item);
      if (comState.value && comState.value.comName === item.type) {
        return;
      }
      comState.value = null;
      attrsData.value = {};
      comConfig.value = null;
      nextTick(() => {
        attrsData.value = item?.default || {};
        comConfig.value = item?.config || null;
        comState.value = {
          remoteName: "base",
          comName: item.type,
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          scale: [1, 1, 1]
        };
        if (item.defaultObject3D?.position) {
          comState.value.position = [
            item.defaultObject3D.position.x,
            item.defaultObject3D.position.y,
            item.defaultObject3D.position.z
          ];
        }
        if (item.defaultObject3D?.rotation) {
          comState.value.rotation = [
            item.defaultObject3D.rotation.x,
            item.defaultObject3D.rotation.y,
            item.defaultObject3D.rotation.z
          ];
        }
        if (item.defaultObject3D?.scale) {
          comState.value.scale = [
            item.defaultObject3D.scale.x,
            item.defaultObject3D.scale.y,
            item.defaultObject3D.scale.z
          ];
        }
      });
    };
    const handleReset = () => {
      comState.value = null;
      serviceData.value = null;
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(NMessageProvider), null, {
          default: _withCtx(() => [
            !serviceData.value ? (_openBlock(), _createBlock(_sfc_main$3, {
              key: 0,
              onLoaded: handleLoaded,
              style: { "z-index": "99999", "position": "absolute", "left": "10px", "top": "50px" }
            })) : (_openBlock(), _createBlock(ServiceViewer, {
              key: 1,
              data: serviceData.value,
              selectedType: comState.value?.comName,
              onSelect: handleSelectComponent,
              onReset: handleReset,
              style: { "z-index": "99999", "position": "absolute", "left": "10px", "top": "50px" }
            }, null, 8, ["data", "selectedType"]))
          ]),
          _: 1
        }),
        _createVNode(_component_TresCanvas, _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", { position: [5, 5, 5] }, null, -1)),
            _createVNode(_unref(Kk)),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                comState.value ? (_openBlock(), _createBlock(_sfc_main$1, _mergeProps({ key: 0 }, comState.value, {
                  attrsData: attrsData.value,
                  config: comConfig.value
                }), null, 16, ["attrsData", "config"])) : _createCommentVNode("", true)
              ]),
              _: 1
            })),
            _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", { "position-y": 0.1 }, null, -1))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=readConfig.DIuOEQCT1767105581793.js.map
