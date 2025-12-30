import { defineStore, importShared, _export_sfc, ol, Kk, yk, Gz } from './index.BxB45aCK1767105581793.js';
import { GLTFLoader } from './GLTFLoader.CAD9c_1U1767105581793.js';
import { DRACOLoader } from './DRACOLoader.COk-ZkRx1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { useMessage, NMessageProvider } from './use-message.C-NKuHgJ1767105581793.js';
import { useDialog, NSpin, NUpload, NImage, NAlert, download, NDialogProvider } from './Upload.TW8Mjmsr1767105581793.js';
import { Button } from './Button.CtEklqVH1767105581793.js';
import { NCard } from './Card.CmCLdudX1767105581793.js';
import { NSpace } from './Space.Beq0ttmt1767105581793.js';
import { NInput } from './Input.xoI_2nKL1767105581793.js';

const {ref: ref$3} = await importShared('vue');


const useMaterialDiyStore = defineStore('materialDiyStore', () => {
    const curType = ref$3('MeshBasicMaterial');
    const curState = ref$3({});
    const curModelArrayBuffer = ref$3(null);

    return { curState, curType, curModelArrayBuffer }
});

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {unref:_unref$2,resolveDynamicComponent:_resolveDynamicComponent,mergeProps:_mergeProps$1,openBlock:_openBlock$3,createBlock:_createBlock} = await importShared('vue');

const {computed} = await importShared('vue');
const _sfc_main$4 = /* @__PURE__ */ _defineComponent$3({
  __name: "materialDiy",
  setup(__props) {
    const materialDiyStore = useMaterialDiyStore();
    const materialMap = computed(() => `Tres${materialDiyStore.curType}`);
    return (_ctx, _cache) => {
      return _openBlock$3(), _createBlock(_resolveDynamicComponent(materialMap.value), _mergeProps$1(_unref$2(materialDiyStore).curState, {
        transparent: "",
        flatShading: ""
      }), null, 16);
    };
  }
});

/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2025-07-29 17:25:00
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-07-29 17:34:35
 */


async function loadArrayBufferFromRelativePath(relativePath) {
    try {
        const response = await fetch(relativePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const arrayBuffer = await response.arrayBuffer();
        return arrayBuffer
    } catch (err) {
        console.error('读取失败:', err);
        return null
    }
}

/**
 * 异步加载支持 Draco 的 glb buffer 并返回 gltf 结构
 * @param {ArrayBuffer} arrayBuffer - 二进制模型数据
 * @returns {Promise<THREE.Group>} - 返回 （模型）
 */
async function loadGLTFBufferIntoScene(arrayBuffer) {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);

    return new Promise((resolve, reject) => {
        loader.parse(
            arrayBuffer,
            '',
            (gltf) => {
                resolve(gltf);
            },
            (error) => {
                console.error('GLB 加载失败:', error);
                reject(error);
            },
        );
    })
}

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createVNode:_createVNode$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode$1} = await importShared('vue');

const _hoisted_1$1 = {
  key: 0,
  scale: 0.5
};
const _hoisted_2$1 = ["position", "rotation", "scale", "geometry"];
const {ref: ref$2,watch} = await importShared('vue');
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$2({
  __name: "model",
  setup(__props) {
    const model = ref$2(null);
    const materialDiyStore = useMaterialDiyStore();
    watch(
      () => materialDiyStore.curModelArrayBuffer,
      async (ab) => {
        if (ab) {
          const gltfModel = await loadGLTFBufferIntoScene(ab);
          model.value = gltfModel.scene.children[0].children[0];
        } else {
          model.value = null;
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return model.value ? (_openBlock$2(), _createElementBlock$2("TresGroup", _hoisted_1$1, [
        _createElementVNode$2("TresMesh", {
          position: model.value.position,
          rotation: model.value.rotation,
          scale: model.value.scale,
          geometry: model.value.geometry,
          "cast-shadow": ""
        }, [
          _createVNode$2(_sfc_main$4)
        ], 8, _hoisted_2$1)
      ])) : _createCommentVNode$1("", true);
    };
  }
});

/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2025-07-29 09:33:34
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2025-07-30 10:58:11
 */
const mConfig = {
    MeshBasicMaterial: {
        default: {
            color: '#161cff',
            wireframe: false,
            opacity: 1,
        },
        config: {
            color: {
                name: '颜色',
                com: 'ColorPicker',
            },
            wireframe: {
                name: '线框',
                com: 'Switch',
            },
            opacity: {
                name: '透明度',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
        },
    },
    MeshLambertMaterial: {
        default: {
            color: '#3ef561',
            wireframe: false,
            opacity: 1,
        },
        config: {
            color: {
                name: '颜色',
                com: 'ColorPicker',
            },
            wireframe: {
                name: '线框',
                com: 'Switch',
            },
            opacity: {
                name: '透明度',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
        },
    },
    MeshPhysicalMaterial: {
        default: {
            color: '#e75ff5',
            metalness: 0.45,
            roughness: 0.36,
            transmission: 0.33,
            reflectivity: 0.5,
            ior: 1.5,
            opacity: 1,
        },
        config: {
            color: {
                name: '颜色',
                com: 'ColorPicker',
            },
            metalness: {
                name: '金属度',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
            roughness: {
                name: '粗糙度',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
            reflectivity: {
                name: '反射率',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
            ior: {
                name: '折射率',
                com: 'Slider',
                min: 1,
                max: 2.33,
                step: 0.01,
            },
            transmission: {
                name: '透光率',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
            opacity: {
                name: '透明度',
                com: 'Slider',
                min: 0,
                max: 1,
                step: 0.01,
            },
        },
    },
};

const {defineComponent:_defineComponent$1} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$1({
  __name: "setupUI",
  setup(__props) {
    const materialDiyStore = useMaterialDiyStore();
    const paneControl = new Pane({
      title: "参数",
      expanded: true
    });
    const materialTypes = Object.keys(mConfig);
    const options = [];
    materialTypes.forEach((type) => {
      options.push({ text: type, value: type });
    });
    paneControl.addBlade({
      view: "list",
      label: "材质类型",
      options,
      value: materialTypes[2]
    }).on("change", (ev) => {
      makeMaterial(ev.value);
    });
    let curFolder = null;
    const makeMaterial = (type) => {
      const curConfig = mConfig[type];
      materialDiyStore.curType = type;
      materialDiyStore.curState = JSON.parse(JSON.stringify(curConfig.default));
      if (curFolder) {
        curFolder.dispose();
      }
      curFolder = paneControl.addFolder({
        title: "材质属性"
      });
      Object.keys(curConfig.config).forEach((key) => {
        if (curConfig.config[key].com === "ColorPicker" || curConfig.config[key].com === "Switch") {
          curFolder.addBinding(materialDiyStore.curState, key, {
            label: curConfig.config[key].name
          });
        } else if (curConfig.config[key].com === "Slider") {
          curFolder.addBinding(materialDiyStore.curState, key, {
            label: curConfig.config[key].name,
            min: curConfig.config[key].min,
            max: curConfig.config[key].max,
            step: curConfig.config[key].step
          });
        }
      });
    };
    makeMaterial(materialTypes[2]);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {withAsyncContext:_withAsyncContext} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,withCtx:_withCtx$1,Fragment:_Fragment$1} = await importShared('vue');


const _hoisted_1 = {
  key: 0,
  class: "upload-mask"
};
const _hoisted_2 = { class: "upload-mask-content" };
const _hoisted_3 = { class: "image-uploader-panel" };
const _hoisted_4 = { style: {"margin-bottom":"6px","padding-bottom":"6px","border-bottom":"2px solid #5f5f5f","word-break":"break-all"} };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { style: {"margin-top":"10px"} };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { style: {"margin-top":"10px"} };
const _hoisted_10 = { style: {"margin-left":"30px","margin-top":"10px"} };

const {ref: ref$1,h} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'leftImg',
  async setup(__props) {

let __temp, __restore;

const materialDiyStore = useMaterialDiyStore();
materialDiyStore.curModelArrayBuffer = (
  ([__temp,__restore] = _withAsyncContext(() => loadArrayBufferFromRelativePath('./plugins/hunyuan3D/model/icegl-bm.glb'))),
  __temp = await __temp,
  __restore(),
  __temp
); // icegl-bm

const message = useMessage();

const selectedFile = ref$1(null);
const previewUrl = ref$1('https://cdn.index.icegl.cn/uploads/20221122/9ed6756107c4e0c031ae26d54cb46c0d.png');
const uploaded = ref$1(true);
const uploading = ref$1(false);
const dialog = useDialog();
const urlConfig = ref$1('http://localhost:8081/generate');

function handleFileChange({ file }) {
    selectedFile.value = file.file;
    previewUrl.value = URL.createObjectURL(file.file);
}
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64 = reader.result.split(',')[1]; // 去掉前缀 data:image/png;base64,
            resolve(base64);
        };
        reader.onerror = reject;
    })
}
async function submitImage() {
    if (!selectedFile.value) return

    uploading.value = true;

    try {
        const base64 = await toBase64(selectedFile.value);

        const requestData = {
            image: base64,
        };

        const response = await fetch(urlConfig.value, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        materialDiyStore.curModelArrayBuffer = await response.arrayBuffer();

        // 👉 这里你可以使用 Blob 预览或下载
        // const blob = new Blob([arrayBuffer], { type: 'model/gltf-binary' })
        // const blobUrl = URL.createObjectURL(blob)
        // const a = document.createElement('a')
        // a.href = blobUrl
        // a.download = 'generated-model.glb'
        // a.click()
        // URL.revokeObjectURL(blobUrl)

        uploaded.value = true;
        message.success('传递接口成功，模型已生成');
    } catch (error) {
        console.error(error);
        message.error('传递接口失败');
    } finally {
        uploading.value = false;
    }
}

function downloadModel() {
    if (!materialDiyStore.curModelArrayBuffer) {
        message.error('没有可下载的模型');
        return
    }

    const blob = new Blob([materialDiyStore.curModelArrayBuffer], { type: 'model/gltf-binary' });
    const blobUrl = URL.createObjectURL(blob);
    download(blobUrl, 'generated-model.glb');
    URL.revokeObjectURL(blobUrl);
}

function removeImage() {
    selectedFile.value = null;
    previewUrl.value = '';
  uploaded.value = false;
    materialDiyStore.curModelArrayBuffer = null;
}
const setupConfig = () => {
    const error = ref$1('');
    const tempurl = ref$1(urlConfig.value);
    dialog.create({
        title: '请输入混元3D服务地址:',
        content: () =>
            h('div', {}, [
                h(NInput, {
                    value: tempurl.value,
                    placeholder: "服务说明详见'说明'按钮",
                    onInput: (val) => {
                        tempurl.value = val;
                        error.value = '';
                    },
                }),
                error.value &&
                    h(
                        NAlert,
                        {
                            type: 'error',
                            style: 'margin-top: 8px',
                        },
                        {
                            default: () => error.value,
                        },
                    ),
            ]),
        positiveText: '确认',
        negativeText: '取消',
        maskClosable: false,
        onPositiveClick: () => {
            if (!tempurl.value.trim()) {
                error.value = '配置不能为空';
                return false
            }
            urlConfig.value = tempurl.value.trim();
            return true
        },
    });
};
const gotourl = () => {
    window.open('https://icegl.cn/ask/article/22765.html', '_blank');
};

return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
    (uploading.value)
      ? (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
          _createElementVNode$1("div", _hoisted_2, [
            _createVNode$1(_unref$1(NSpin), { size: "large" }),
            _cache[0] || (_cache[0] = _createElementVNode$1("div", { class: "upload-text" }, "模型生成中，请稍候...", -1))
          ])
        ]))
      : _createCommentVNode("", true),
    _createElementVNode$1("div", _hoisted_3, [
      _createVNode$1(_unref$1(NCard), {
        title: "参考图片生产3D",
        size: "small",
        class: "panel-card",
        "header-style": {
                textAlign: 'center',
            },
        style: {
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                border: '1px solid #444',
            }
      }, {
        default: _withCtx$1(() => [
          _createElementVNode$1("div", _hoisted_4, [
            _cache[3] || (_cache[3] = _createElementVNode$1("span", null, "混元3D服务：", -1)),
            _cache[4] || (_cache[4] = _createElementVNode$1("br", null, null, -1)),
            _createElementVNode$1("span", null, _toDisplayString(urlConfig.value ? urlConfig.value : '未配置'), 1),
            _createVNode$1(_unref$1(NSpace), { justify: "end" }, {
              default: _withCtx$1(() => [
                _createVNode$1(_unref$1(Button), {
                  type: "primary",
                  size: "tiny",
                  onClick: setupConfig
                }, {
                  default: _withCtx$1(() => [...(_cache[1] || (_cache[1] = [
                    _createTextVNode(" 设置 ", -1)
                  ]))]),
                  _: 1
                }),
                _createVNode$1(_unref$1(Button), {
                  type: "info",
                  size: "tiny",
                  style: {"margin-right":"6px"},
                  onClick: gotourl
                }, {
                  default: _withCtx$1(() => [...(_cache[2] || (_cache[2] = [
                    _createTextVNode(" 说明 ", -1)
                  ]))]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          (!uploading.value && !uploaded.value)
            ? (_openBlock$1(), _createElementBlock$1("div", _hoisted_5, [
                _createVNode$1(_unref$1(NUpload), {
                  "default-upload": false,
                  "show-file-list": false,
                  accept: "image/*",
                  onChange: handleFileChange
                }, {
                  default: _withCtx$1(() => [
                    _createVNode$1(_unref$1(Button), {
                      type: "primary",
                      size: "small"
                    }, {
                      default: _withCtx$1(() => [...(_cache[5] || (_cache[5] = [
                        _createTextVNode("选择图片", -1)
                      ]))]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]))
            : _createCommentVNode("", true),
          (selectedFile.value && !uploaded.value)
            ? (_openBlock$1(), _createElementBlock$1("div", _hoisted_6, [
                _createVNode$1(_unref$1(NImage), {
                  src: previewUrl.value,
                  width: "100",
                  height: "100",
                  "object-fit": "cover",
                  style: {"margin-top":"10px"}
                }, null, 8, ["src"]),
                _createElementVNode$1("div", _hoisted_7, [
                  _createVNode$1(_unref$1(Button), {
                    type: "success",
                    size: "small",
                    loading: uploading.value,
                    onClick: submitImage
                  }, {
                    default: _withCtx$1(() => [...(_cache[6] || (_cache[6] = [
                      _createTextVNode(" 提交 ", -1)
                    ]))]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ]))
            : _createCommentVNode("", true),
          (uploaded.value)
            ? (_openBlock$1(), _createElementBlock$1("div", _hoisted_8, [
                _cache[9] || (_cache[9] = _createElementVNode$1("span", null, "参考图片：", -1)),
                _cache[10] || (_cache[10] = _createElementVNode$1("br", null, null, -1)),
                _createVNode$1(_unref$1(NImage), {
                  src: previewUrl.value,
                  width: "100",
                  height: "100",
                  "object-fit": "cover",
                  style: {"margin-top":"10px"}
                }, null, 8, ["src"]),
                _createVNode$1(_unref$1(NSpace), null, {
                  default: _withCtx$1(() => [
                    _createElementVNode$1("div", _hoisted_9, [
                      _createVNode$1(_unref$1(Button), {
                        type: "info",
                        size: "small",
                        onClick: removeImage
                      }, {
                        default: _withCtx$1(() => [...(_cache[7] || (_cache[7] = [
                          _createTextVNode("重新生产", -1)
                        ]))]),
                        _: 1
                      })
                    ]),
                    _createElementVNode$1("div", _hoisted_10, [
                      _createVNode$1(_unref$1(Button), {
                        type: "success",
                        size: "small",
                        onClick: downloadModel
                      }, {
                        default: _withCtx$1(() => [...(_cache[8] || (_cache[8] = [
                          _createTextVNode("下载模型", -1)
                        ]))]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]))
            : _createCommentVNode("", true)
        ]),
        _: 1
      })
    ])
  ], 64))
}
}

};
const leftImg = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-75b74eb7"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,withCtx:_withCtx,mergeProps:_mergeProps,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,ref,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "index",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const tdl = ref(null);
    watchEffect(() => {
      if (tdl.value) {
        tdl.value.shadow.mapSize.width = 1024;
        tdl.value.shadow.mapSize.height = 1024;
        tdl.value.shadow.camera.near = 0.1;
        tdl.value.shadow.camera.far = 10;
        tdl.value.shadow.camera.left = -1;
        tdl.value.shadow.camera.right = 1;
        tdl.value.shadow.camera.top = 1;
        tdl.value.shadow.camera.bottom = -1;
        tdl.value.shadow.bias = -1e-4;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ol), _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
              position: [0, 1, 2],
              fov: 45,
              near: 0.1,
              far: 1e3
            }, null, -1)),
            _createVNode(_unref(Kk)),
            _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", { intensity: 2 }, null, -1)),
            _createVNode(_unref(yk), null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$3)
              ]),
              _: 1
            }),
            _createVNode(_unref(Gz), {
              floor: 1,
              segments: 20,
              position: [-0.1, -0.8, -0.5],
              scale: [4, 2, 2],
              "receive-shadow": ""
            }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createElementVNode("TresMeshPhysicalMaterial", {
                  color: "orange",
                  roughness: 1,
                  receiveShadow: ""
                }, null, -1)
              ])]),
              _: 1
            }),
            _createElementVNode("TresDirectionalLight", {
              position: [1, 1, 2],
              intensity: 6,
              "cast-shadow": "",
              ref_key: "tdl",
              ref: tdl
            }, null, 512)
          ]),
          _: 1
        }, 16),
        _createVNode(_sfc_main$2),
        _createVNode(_unref(NDialogProvider), null, {
          default: _withCtx(() => [
            _createVNode(_unref(NMessageProvider), null, {
              default: _withCtx(() => [
                _createVNode(leftImg)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=index.CSUXr-eU1767105581793.js.map
