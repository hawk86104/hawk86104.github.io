import { importShared, Fs, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { JSZip, FileSaver_minExports, getImageFormat, importJsonZip, exporterJsonZip } from './utils.BPGLoE4R1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';
import { FMessage } from './index.CnaVApRj1767105581793.js';

/* eslint-disable no-undefined */
/* eslint-disable guard-for-in */
const THREE$1 = await importShared('three');


window.THREE = THREE$1; // Used by APP Scripts.
function dispatch(array, event) {
    for (let i = 0, l = array.length; i < l; i++) {
        array[i](event);
    }
}
const events = {
    init: [],
    start: [],
    stop: [],
    keydown: [],
    keyup: [],
    pointerdown: [],
    pointerup: [],
    pointermove: [],
    update: [],
};
//暂时不考虑摄像机的动画
const setCamera = () => {
    // camera = value
    // camera.aspect = this.width / this.height
    // camera.updateProjectionMatrix()
};
const initEvents = (renderer, scene, camera, sizes, jsonData) => {
    const scriptsObg = jsonData.scripts || {};
    let scriptWrapParams = 'player,renderer,scene,camera';
    const scriptWrapResultObj = {};

    for (const eventKey in events) {
        scriptWrapParams += `,${eventKey}`;
        scriptWrapResultObj[eventKey] = eventKey;
    }

    const scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, '');
    // eslint-disable-next-line block-scoped-var
    for (const uuid in scriptsObg) {
        let curUuid = uuid;
        //这里解决一个问题 目前并没有把 主场景scene直接替换而是通过group 加进入的，所以 如果事件是基于主场景scene 那么替换这个uuid为现在tres主场景的uuid
        if (uuid === jsonData.scene.object.uuid) {
            curUuid = scene.uuid;
        }
        const object = scene.getObjectByProperty('uuid', curUuid, true);

        if (object === undefined) {
            console.warn('APP.Player: Script without object.', curUuid);
            continue
        }

        const scripts = scriptsObg[uuid];

        for (let i = 0; i < scripts.length; i++) {
            const script = scripts[i];

            // eslint-disable-next-line no-new-func
            const functions = new Function(scriptWrapParams, `${script.source}\nreturn ${scriptWrapResult};`).bind(object)(
                { width: sizes.width.value, height: sizes.height.value, setCamera },
                renderer,
                scene,
                camera,
            );

            for (const name in functions) {
                if (functions[name] === undefined) continue

                if (events[name] === undefined) {
                    console.warn('APP.Player: Event type not supported (', name, ')');
                    continue
                }

                events[name].push(functions[name].bind(object));
            }
        }
    }
    dispatch(events.init, null); //arguments
};
function onKeyDown(event) {
    dispatch(events.keydown, event);
}
function onKeyUp(event) {
    dispatch(events.keyup, event);
}
function onPointerDown(event) {
    dispatch(events.pointerdown, event);
}
function onPointerUp(event) {
    dispatch(events.pointerup, event);
}
function onPointerMove(event) {
    dispatch(events.pointermove, event);
}
const registerEvent = () => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointerup', onPointerUp);
    document.addEventListener('pointermove', onPointerMove);
    dispatch(events.start, null);
};
const unregisterEvent = () => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    document.removeEventListener('pointerdown', onPointerDown);
    document.removeEventListener('pointerup', onPointerUp);
    document.removeEventListener('pointermove', onPointerMove);
    dispatch(events.stop, null);

    events.init = [];
    events.start = [];
    events.stop = [];
    events.keydown = [];
    events.keyup = [];
    events.pointerdown = [];
    events.pointerup = [];
    events.pointermove = [];
    events.update = [];
};
const updateEvents = (elapsed, delta) => {
    dispatch(events.update, { time: elapsed, delta });
};

const codeForEventScript = (scripts) => {
    const scriptsJson = `const scriptsJson = 
${JSON.stringify(scripts)}
`;
    const code = `/* eslint-disable prefer-rest-params */
/* eslint-disable no-undefined */
/* eslint-disable guard-for-in */
import * as THREE from 'three'

window.THREE = THREE // Used by APP Scripts.
const Grscwh = { scene: null, renderer: null, camera: null, sizes: null }
const player = {
	get renderer() {
		return Grscwh.renderer?.value
	},
	loader: new THREE.TextureLoader(),
	get scene() {
			return Grscwh.scene?.value
	},
	get camera() {
			return Grscwh.camera?.value
	},
	get width() {
			return Grscwh.sizes?.width?.value
	},
	get height() {
			return Grscwh.sizes?.height?.value
	},
	get dom() {
			return Grscwh.renderer?.domElement.parentElement
	},
	get canvas() {
			return Grscwh.renderer?.domElement
	},
	events: {},
	init(scene, renderer, camera, sizes) {
			Grscwh.scene = scene
			Grscwh.renderer = renderer
			Grscwh.camera = camera
			Grscwh.sizes = sizes
	},
	load(sceneObject) {
		${scriptsJson}
		this.events = {
				init: [],
				start: [],
				stop: [],
				keydown: [],
				keyup: [],
				pointerdown: [],
				pointerup: [],
				pointermove: [],
				update: [],
		}
		let scriptWrapParams = 'player,renderer,scene,camera'
		const scriptWrapResultObj = {}

		for (const eventKey in this.events) {
				scriptWrapParams += \`,\${eventKey}\`
				scriptWrapResultObj[eventKey] = eventKey
		}
		const scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\\"/g, '')
		for (const uuid in scriptsJson) {
				let curUuid = uuid
				//这里解决一个问题 目前并没有把 主场景scene直接替换而是通过group 加进入的，所以 如果事件是基于主场景scene 那么替换这个uuid为现在tres主场景的uuid
				if (uuid === sceneObject.uuid) {
						curUuid = this.scene.uuid
				}
				const object = this.scene.getObjectByProperty('uuid', curUuid, true)
				if (object === undefined) {
						console.warn('player: Script without object.', curUuid)
						continue
				}
				const scripts = scriptsJson[uuid]
				for (let i = 0; i < scripts.length; i++) {
						const script = scripts[i]
						// eslint-disable-next-line no-new-func
						const functions = new Function(scriptWrapParams, \`\${script.source}\nreturn \${scriptWrapResult};\`).bind(object)(
								this,
								this.renderer,
								this.scene,
								this.camera,
						)
						for (const name in functions) {
								if (functions[name] === undefined) continue
								if (this.events[name] === undefined) {
										console.warn('player: Event type not supported (', name, ')')
										continue
								}
								this.events[name].push(functions[name].bind(object))
						}
				}
				this.dispatch(this.events.init, arguments)
		}
	},
	dispatch(array, event) {
		for (let i = 0, l = array.length; i < l; i++) {
				array[i](event)
		}
	},
	setCamera(value) {
			console.warn('暂时不考虑摄像机的设置函数', value)
			// camera = value
			// camera.aspect = this.width / this.height
			// camera.updateProjectionMatrix()
	},
	setScene(value) {
			console.warn('暂时不考虑场景的设置函数', value)
			// scene = value
	},
	setPixelRatio(value) {
			console.warn('暂时不考虑像素比的设置函数', value)
	},
	setSize(value) {
			console.warn('暂时不考虑尺寸的设置函数', value)
	},
	dispose() {
			// renderer.dispose();
			// camera = undefined;
			// scene = undefined;
			console.warn('暂时不考虑释放资源的函数')
	},
	onKeyDown(event) {
		player.dispatch(player.events.keydown, event)
	},
	onKeyUp(event) {
			player.dispatch(player.events.keyup, event)
	},
	onPointerDown(event) {
			player.dispatch(player.events.pointerdown, event)
	},
	onPointerUp(event) {
			player.dispatch(player.events.pointerup, event)
	},
	onPointerMove(event) {
			player.dispatch(player.events.pointermove, event)
	},
	play() {
			document.addEventListener('keydown', this.onKeyDown)
			document.addEventListener('keyup', this.onKeyUp)
			document.addEventListener('pointerdown', this.onPointerDown)
			document.addEventListener('pointerup', this.onPointerUp)
			document.addEventListener('pointermove', this.onPointerMove)
			this.dispatch(this.events.start, null)
			//renderer.setAnimationLoop( animate ); 播放是自动的
	},
	stop() {
			document.removeEventListener('keydown', this.onKeyDown)
			document.removeEventListener('keyup', this.onKeyUp)
			document.removeEventListener('pointerdown', this.onPointerDown)
			document.removeEventListener('pointerup', this.onPointerUp)
			document.removeEventListener('pointermove', this.onPointerMove)
			this.dispatch(this.events.stop, arguments)
			// renderer.setAnimationLoop( null );播放是自动的
	},
	render(elapsed, delta) {
			this.dispatch(this.events.update, { time: elapsed, delta })
	},
}
export default player
`;
    return code
};

let childComponentFileList = [];
const codeForStructure = (code, project, camera, pluginState) => {
    const { uuid, ...cameraObject } = camera.object;
    const cameraClone = JSON.parse(JSON.stringify(camera));
    cameraClone.object = cameraObject;
    return `
<template>
    <loading />
	<TresCanvas v-bind="state">
		${pluginState.orbitControls ? '<OrbitControls />' : ''}
		${camera ? `<Tres${camera.object.type}  ref="cameraRef" uuid="${camera.object.uuid}" name="${camera.object.name}" />` : ''}
		${code}
		${pluginState.gridHelper ? '<TresGridHelper />' : ''}
	</TresCanvas>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { reactive, watch, ref } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import sceneCom from '../components/scene.vue'
import { loading2 as loading } from 'PLS/UIdemo'

const state = reactive({
	clearColor: '#201919',
	windowSize:true,
	antialias: true,
	shadows: ${project.shadows ? 'true' : 'false'},
	shadowMapType: ${project.shadowType ? project.shadowType : 'THREE.PCFShadowMap'},
	toneMapping: ${project.toneMapping ? project.toneMapping : 'THREE.NoToneMapping'},
	toneMappingExposure:${project.toneMappingExposure ? project.toneMappingExposure : '1'},
})

const cameraConfig = ${cameraClone ? `${JSON.stringify(cameraClone)}` : '{}'}
const loader = new THREE.ObjectLoader()
const cameraObject = loader.parse(cameraConfig)
const cameraRef = ref(null)
watch(
	() => cameraRef.value,
	(val) => {
			val.copy(cameraObject)
	},
)
</script>
	`
};
const codeForLevelFile = (folder, name, item) => {
    let listStr = '';
    item.forEach((child, index) => {
        listStr += `
        <primitive :object="object[${index}]" name="${child.name}" uuid="${child.uuid}" type="${child.type}"/>
        `;
    });
    const strCode = `<template>
    ${listStr}
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        object: any
    }>(),
    {},
)
</script>
`;
    folder.file(`${name.fileName}`, strCode);
    childComponentFileList.push(name);
};
const importFromchildComponentFileList = () => {
    let str = '';
    childComponentFileList.forEach((item) => {
        str += `import ${item.comName} from './childComponent/${item.fileName}'\n`;
    });
    return str
};
const childComponentLevelName = (level, uuid) => {
    const l = level - 1;
    const ln = ['firstLevel', 'secondLevel', 'thirdLevel'];
    const uuidLast = uuid.split('-').pop();
    return { fileName: `${ln[l]}-${uuidLast}.vue`, comName: `${ln[l]}${uuidLast}` }
};
const codeForChildComponent = (childComponentFolder, pluginState, item, index, curLevel) => {
    if (pluginState.childLevel >= curLevel) ;
    let primitiveCode = `
    <primitive :object="sceneObject.children[${index}]" name="${item.name}" uuid="${item.uuid}" type="${item.type}">
    `;
    if (item.children && item.children.length) {
        const clName = childComponentLevelName(curLevel, item.uuid);
        primitiveCode += `<${clName.comName} :object="sceneObject.children[${index}].children" />`;
        codeForLevelFile(childComponentFolder, clName, item.children);
    }
    primitiveCode += `
    </primitive>
`;
    return primitiveCode
};
const codeForSence = (srcFolder, pluginState, scene) => {
    let primitiveListCode = '';
    const childComponentFolder = srcFolder.folder(`components/childComponent`);
    if (scene.object && scene.object.children && scene.object.children.length) {
        scene.object.children.forEach((child, index) => {
            if (pluginState.childLevel > 0 && child.children && child.children.length) {
                primitiveListCode += codeForChildComponent(childComponentFolder, pluginState, child, index, 1);
            } else {
                primitiveListCode += `    
    <primitive :object="sceneObject.children[${index}]" name="${child.name}" uuid="${child.uuid}" type="${child.type}"/>
    `;
            }
        });
    }
    srcFolder.file(
        `components/scene.vue`,
        `<template>
        ${primitiveListCode}</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { loadImageToBase64, loadJsonFile } from 'PLS/tresEditor'
import { useTres, useLoop } from '@tresjs/core'
import player from '../common/eventScript'
${importFromchildComponentFileList()}

const { scene: tresScene, renderer, camera, sizes } = useTres()
player.init(tresScene, renderer, camera, sizes)

const loader = new THREE.ObjectLoader()
const scene = await loadJsonFile('./plugins/${pluginState.pluginName}/json/scene.json')

if (scene.geometries) {
    for (const geometry of scene.geometries) {
        if (geometry.data && geometry.data.startsWith('url:')) {
            let url = geometry.data.slice(4)
            if (url.startsWith('geometries/')) {
                url = \`./plugins/${pluginState.pluginName}/\${url}\`
            }
            geometry.data = await loadJsonFile(url)
        }
    }
}
if (scene.images) {
    for (const image of scene.images) {
        if (image.url && image.url.startsWith('url:')) {
            let url = image.url.slice(4)
            if (url.startsWith('images/')) {
                url = \`./plugins/${pluginState.pluginName}/\${url}\`
            }
            if (url.endsWith(".json")) {
                image.url = await loadJsonFile(url)
            } else {
                image.url = await loadImageToBase64(url)
            }
        }
    }
}

const sceneObject = loader.parse(scene) as any
onMounted(() => {
    tresScene.value.background = sceneObject.background
    tresScene.value.environment = sceneObject.environment
    tresScene.value.fog = sceneObject.fog
    player.load(sceneObject)
    player.play()
})
const { onBeforeRender } = useLoop()
onBeforeRender(({ delta, elapsed }) => {
    if (player.renderer) {
        player.render(elapsed * 1000, delta * 1000)
    }
})
</script>`,
    );
    return `<Suspense>
			<sceneCom />
		</Suspense>`
};

const codeForConfig = (pluginName) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // 获取年份
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 获取月份（注意月份是从 0 开始的，需要加 1）
    const day = String(currentDate.getDate()).padStart(2, '0'); // 获取日期
    const formattedDate = `${year}-${month}-${day}`;

    return `
	export default {
		"name": "${pluginName}",
		"title": "编辑器导出的插件",
		"intro": "描述",
		"version": "0.0.1",
		"author": "作者名",
		"website": "站点地址",
		"state": "active",
		"creatTime": "${formattedDate}",
		"updateTime": "${formattedDate}",
		"require": [],
        "tvtstore": 'LOCAL',
		"preview": [
			{ "src": "plugins/basic/base/preview/theBasic.png", "type": "img", "name": "index", "title": "实例" ,"disableFPSGraph": false, "disableSrcBtn": false},
		]
	}`
};
const codeForJson = (publicFolder, scene) => {
    const geometrieList = [];
    if (scene.geometries) {
        scene.geometries.forEach((geometry) => {
            if (geometry.type === 'BufferGeometry') {
                geometrieList.push({ uuid: geometry.uuid, data: geometry.data });
                geometry.data = `url:geometries/${geometry.uuid}.json`;
            }
        });
    }
    const imagesList = [];
    if (scene.images) {
        scene.images.forEach((image) => {
            if (image.url) {
                imagesList.push({ uuid: image.uuid, url: image.url });
                if (image.url.type) {
                    image.url = `url:images/${image.uuid}.${image.url.type}.json`;
                } else {
                    image.url = `url:images/${image.uuid}.${getImageFormat(image.url)}`;
                }
            }
        });
    }
    if (geometrieList.length) {
        const geometrieZip = publicFolder.folder('geometries');
        geometrieList.forEach((geometry) => {
            geometrieZip.file(`${geometry.uuid}.json`, JSON.stringify(geometry.data));
        });
    }
    if (imagesList.length) {
        const imagesZip = publicFolder.folder('images');
        imagesList.forEach((image) => {
            if (image.url.type) {
                imagesZip.file(`${image.uuid}.${image.url.type}.json`, JSON.stringify(image.url));
            } else {
                imagesZip.file(`${image.uuid}.${getImageFormat(image.url)}`, image.url.split(';base64,').pop(), { base64: true });
            }
        });
    }
    publicFolder.file(`json/scene.json`, JSON.stringify(scene));
};
function makePluginZip (jsonData, pluginState) {
    childComponentFileList = [];
    const pluginName = pluginState.pluginName;

    const zip = new JSZip();
    const publicFolder = zip.folder(`public/plugins/${pluginName}`);
    codeForJson(publicFolder, jsonData.scene);
    const srcFolder = zip.folder(`src/plugins/${pluginName}`);
    srcFolder.file(`config.js`, codeForConfig(pluginName));
    const pageCode = codeForStructure(codeForSence(srcFolder, pluginState, jsonData.scene), jsonData.project, jsonData.camera, pluginState);
    srcFolder.file('pages/index.vue', pageCode);
    srcFolder.file('common/eventScript.js', codeForEventScript(jsonData.scripts));
    return zip.generateAsync({ type: 'blob' }).then((blob) => {
        FileSaver_minExports.saveAs(blob, `${pluginName}.zip`);
    })
}

const {defineComponent:_defineComponent$1} = await importShared('vue');

const THREE = await importShared('three');
const {onMounted} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "importJson",
  setup(__props) {
    let fileInput;
    let jsonData = null;
    var loader = new THREE.ObjectLoader();
    let group = null;
    const { scene, renderer, camera, sizes } = Fs();
    const clearScene = () => {
      if (!group) {
        return;
      }
      const clearCache = (item) => {
        item.geometry?.dispose();
        item.material?.dispose();
      };
      const removeObj = (obj) => {
        let arr = obj.children.filter((x) => !!x);
        arr.forEach((item) => {
          if (item.children.length) {
            removeObj(item);
          } else {
            clearCache(item);
            item.clear();
          }
        });
        obj.clear();
        arr = null;
      };
      removeObj(group);
      group = null;
    };
    const setScene = (value) => {
      clearScene();
      unregisterEvent();
      group = new THREE.Group();
      if (value.children) {
        group.children = value.children;
        scene.value.add(group);
        scene.value.background = value.background;
        scene.value.environment = value.environment;
        scene.value.fog = value.fog;
      }
    };
    const paneControl = new Pane();
    const inputClear = paneControl.addButton({
      title: "清空场景",
      label: "clear"
    });
    inputClear.on("click", () => {
      const result = confirm("确定要执行操作吗？");
      if (result) {
        window.location.reload();
      }
    });
    const inputB = paneControl.addButton({
      title: "导入原生场景Json",
      label: "srcJson"
    });
    inputB.on("click", () => {
      if (jsonData) {
        FMessage.warning?.({
          content: "先清空场景",
          colorful: true
        });
        return;
      }
      if (fileInput) {
        fileInput.accept = ".json";
        fileInput.value = null;
        fileInput.click();
      }
    });
    const f1 = paneControl.addFolder({
      title: "分解场景[中间件 测试用]",
      expanded: false
    });
    const btn = f1.addButton({
      title: "生成分解场景Zip",
      label: "Json2Zip"
    });
    btn.on("click", () => {
      if (jsonData) {
        exporterJsonZip(jsonData);
      } else {
        FMessage.warning?.({
          content: "场景内无物体",
          colorful: true
        });
      }
    });
    const importZipB = f1.addButton({
      title: "导入分解场景Zip",
      label: "Zip2Json"
    });
    importZipB.on("click", () => {
      if (jsonData) {
        FMessage.warning?.({
          content: "先清空场景",
          colorful: true
        });
      } else {
        if (fileInput) {
          fileInput.accept = ".zip";
          fileInput.value = null;
          fileInput.click();
        }
      }
    });
    const pluginState = {
      orbitControls: true,
      gridHelper: true,
      pluginName: "testEditor",
      childLevel: 1
    };
    const f2 = paneControl.addFolder({
      title: "TvT插件包"
    });
    f2.addBinding(pluginState, "pluginName", {
      label: "插件名称"
    });
    f2.addBinding(pluginState, "orbitControls", {
      label: "默认控制器"
    });
    f2.addBinding(pluginState, "gridHelper", {
      label: "默认网格"
    });
    const exporterB = f2.addButton({
      title: "生成插件包",
      label: "MakePlugin"
    });
    exporterB.on("click", () => {
      if (jsonData) {
        if (!pluginState.pluginName) {
          FMessage.warning?.({
            content: "请正确填写插件名称",
            colorful: true
          });
        } else {
          makePluginZip(jsonData, pluginState);
        }
      } else {
        FMessage.warning?.({
          content: "场景内无物体",
          colorful: true
        });
      }
    });
    const initSceneFromJsonData = (jd) => {
      jsonData = jd;
      setScene(loader.parse(jsonData.scene));
      initEvents(renderer, scene.value, camera.value, sizes, jsonData);
      registerEvent();
    };
    onMounted(() => {
      fileInput = document.getElementById("fileInput");
      if (!fileInput) {
        return;
      }
      fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (fileInput.accept === ".json") {
          const reader = new FileReader();
          reader.onload = (e) => {
            const contents = e.target.result;
            initSceneFromJsonData(JSON.parse(contents));
          };
          reader.readAsText(file);
        }
        if (fileInput.accept === ".zip") {
          importJsonZip(file, initSceneFromJsonData);
        }
      };
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta, elapsed }) => {
      updateEvents(elapsed * 1e3, delta * 1e3);
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,mergeProps:_mergeProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const {SRGBColorSpace,BasicShadowMap,NoToneMapping} = await importShared('three');

const {reactive,shallowRef,watchEffect} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "simpleImport",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      shadows: true,
      alpha: false,
      shadowMapType: BasicShadowMap,
      outputColorSpace: SRGBColorSpace,
      toneMapping: NoToneMapping
    });
    const controlsState = reactive({
      enableDamping: true,
      dampingFactor: 0.05
    });
    const TDirectionalLight = shallowRef(null);
    watchEffect(() => {
      if (TDirectionalLight.value) ;
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(ol), _mergeProps(state, { "window-size": "" }), {
          default: _withCtx(() => [
            _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
              position: [15, 15, 15],
              fov: 45,
              near: 0.1,
              far: 1e3,
              "look-at": [0, 0, 0]
            }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            })),
            _cache[1] || (_cache[1] = _createElementVNode("TresGridHelper", null, null, -1))
          ]),
          _: 1
        }, 16),
        _cache[2] || (_cache[2] = _createElementVNode("input", {
          id: "fileInput",
          type: "file",
          accept: ".zip",
          style: { "display": "none" }
        }, null, -1))
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=simpleImport.D22hRv7g1767105581793.js.map
