import{importShared as v}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as K,_l as D,ol as Z,Kk as A}from"./index.DTe2qqjO1767148983502.js";import{JSZip as I,FileSaver_minExports as V,getImageFormat as N,importJsonZip as q,exporterJsonZip as Y}from"./utils.CpCKOQ7U1767148983502.js";import{Pane as Q}from"./tweakpane.BQRZXf8M1767148983502.js";import{FMessage as b}from"./index.DhptwYx91767148983502.js";const X=await v("three");window.THREE=X;function u(o,e){for(let t=0,i=o.length;t<i;t++)o[t](e)}const s={init:[],start:[],stop:[],keydown:[],keyup:[],pointerdown:[],pointerup:[],pointermove:[],update:[]},ee=()=>{},te=(o,e,t,i,r)=>{const n=r.scripts||{};let a="player,renderer,scene,camera";const h={};for(const l in s)a+=`,${l}`,h[l]=l;const S=JSON.stringify(h).replace(/\"/g,"");for(const l in n){let w=l;l===r.scene.object.uuid&&(w=e.uuid);const p=e.getObjectByProperty("uuid",w,!0);if(p===void 0){console.warn("APP.Player: Script without object.",w);continue}const P=n[l];for(let E=0;E<P.length;E++){const $=P[E],j=new Function(a,`${$.source}
return ${S};`).bind(p)({width:i.width.value,height:i.height.value,setCamera:ee},o,e,t);for(const g in j)if(j[g]!==void 0){if(s[g]===void 0){console.warn("APP.Player: Event type not supported (",g,")");continue}s[g].push(j[g].bind(p))}}}u(s.init,null)};function x(o){u(s.keydown,o)}function z(o){u(s.keyup,o)}function G(o){u(s.pointerdown,o)}function H(o){u(s.pointerup,o)}function W(o){u(s.pointermove,o)}const ne=()=>{document.addEventListener("keydown",x),document.addEventListener("keyup",z),document.addEventListener("pointerdown",G),document.addEventListener("pointerup",H),document.addEventListener("pointermove",W),u(s.start,null)},re=()=>{document.removeEventListener("keydown",x),document.removeEventListener("keyup",z),document.removeEventListener("pointerdown",G),document.removeEventListener("pointerup",H),document.removeEventListener("pointermove",W),u(s.stop,null),s.init=[],s.start=[],s.stop=[],s.keydown=[],s.keyup=[],s.pointerdown=[],s.pointerup=[],s.pointermove=[],s.update=[]},oe=(o,e)=>{u(s.update,{time:o,delta:e})},ie=o=>`/* eslint-disable prefer-rest-params */
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
		${`const scriptsJson = 
${JSON.stringify(o)}
`}
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
						const functions = new Function(scriptWrapParams, \`\${script.source}
return \${scriptWrapResult};\`).bind(object)(
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
`;let T=[];const se=(o,e,t,i)=>{const{uuid:r,...n}=t.object,a=JSON.parse(JSON.stringify(t));return a.object=n,`
<template>
    <loading />
	<TresCanvas v-bind="state">
		${i.orbitControls?"<OrbitControls />":""}
		${t?`<Tres${t.object.type}  ref="cameraRef" uuid="${t.object.uuid}" name="${t.object.name}" />`:""}
		${o}
		${i.gridHelper?"<TresGridHelper />":""}
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
	shadows: ${e.shadows?"true":"false"},
	shadowMapType: ${e.shadowType?e.shadowType:"THREE.PCFShadowMap"},
	toneMapping: ${e.toneMapping?e.toneMapping:"THREE.NoToneMapping"},
	toneMappingExposure:${e.toneMappingExposure?e.toneMappingExposure:"1"},
})

const cameraConfig = ${a?`${JSON.stringify(a)}`:"{}"}
const loader = new THREE.ObjectLoader()
const cameraObject = loader.parse(cameraConfig)
const cameraRef = ref(null)
watch(
	() => cameraRef.value,
	(val) => {
			val.copy(cameraObject)
	},
)
<\/script>
	`},ae=(o,e,t)=>{let i="";t.forEach((n,a)=>{i+=`
        <primitive :object="object[${a}]" name="${n.name}" uuid="${n.uuid}" type="${n.type}"/>
        `});const r=`<template>
    ${i}
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        object: any
    }>(),
    {},
)
<\/script>
`;o.file(`${e.fileName}`,r),T.push(e)},ce=()=>{let o="";return T.forEach(e=>{o+=`import ${e.comName} from './childComponent/${e.fileName}'
`}),o},le=(o,e)=>{const t=o-1,i=["firstLevel","secondLevel","thirdLevel"],r=e.split("-").pop();return{fileName:`${i[t]}-${r}.vue`,comName:`${i[t]}${r}`}},ue=(o,e,t,i,r)=>{e.childLevel>=r;let n=`
    <primitive :object="sceneObject.children[${i}]" name="${t.name}" uuid="${t.uuid}" type="${t.type}">
    `;if(t.children&&t.children.length){const a=le(r,t.uuid);n+=`<${a.comName} :object="sceneObject.children[${i}].children" />`,ae(o,a,t.children)}return n+=`
    </primitive>
`,n},pe=(o,e,t)=>{let i="";const r=o.folder("components/childComponent");return t.object&&t.object.children&&t.object.children.length&&t.object.children.forEach((n,a)=>{e.childLevel>0&&n.children&&n.children.length?i+=ue(r,e,n,a,1):i+=`    
    <primitive :object="sceneObject.children[${a}]" name="${n.name}" uuid="${n.uuid}" type="${n.type}"/>
    `}),o.file("components/scene.vue",`<template>
        ${i}</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'
import { loadImageToBase64, loadJsonFile } from 'PLS/tresEditor'
import { useTres, useLoop } from '@tresjs/core'
import player from '../common/eventScript'
${ce()}

const { scene: tresScene, renderer, camera, sizes } = useTres()
player.init(tresScene, renderer, camera, sizes)

const loader = new THREE.ObjectLoader()
const scene = await loadJsonFile('./plugins/${e.pluginName}/json/scene.json')

if (scene.geometries) {
    for (const geometry of scene.geometries) {
        if (geometry.data && geometry.data.startsWith('url:')) {
            let url = geometry.data.slice(4)
            if (url.startsWith('geometries/')) {
                url = \`./plugins/${e.pluginName}/\${url}\`
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
                url = \`./plugins/${e.pluginName}/\${url}\`
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
<\/script>`),`<Suspense>
			<sceneCom />
		</Suspense>`},de=o=>{const e=new Date,t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),n=`${t}-${i}-${r}`;return`
	export default {
		"name": "${o}",
		"title": "编辑器导出的插件",
		"intro": "描述",
		"version": "0.0.1",
		"author": "作者名",
		"website": "站点地址",
		"state": "active",
		"creatTime": "${n}",
		"updateTime": "${n}",
		"require": [],
        "tvtstore": 'LOCAL',
		"preview": [
			{ "src": "plugins/basic/base/preview/theBasic.png", "type": "img", "name": "index", "title": "实例" ,"disableFPSGraph": false, "disableSrcBtn": false},
		]
	}`},me=(o,e)=>{const t=[];e.geometries&&e.geometries.forEach(r=>{r.type==="BufferGeometry"&&(t.push({uuid:r.uuid,data:r.data}),r.data=`url:geometries/${r.uuid}.json`)});const i=[];if(e.images&&e.images.forEach(r=>{r.url&&(i.push({uuid:r.uuid,url:r.url}),r.url.type?r.url=`url:images/${r.uuid}.${r.url.type}.json`:r.url=`url:images/${r.uuid}.${N(r.url)}`)}),t.length){const r=o.folder("geometries");t.forEach(n=>{r.file(`${n.uuid}.json`,JSON.stringify(n.data))})}if(i.length){const r=o.folder("images");i.forEach(n=>{n.url.type?r.file(`${n.uuid}.${n.url.type}.json`,JSON.stringify(n.url)):r.file(`${n.uuid}.${N(n.url)}`,n.url.split(";base64,").pop(),{base64:!0})})}o.file("json/scene.json",JSON.stringify(e))};function fe(o,e){T=[];const t=e.pluginName,i=new I,r=i.folder(`public/plugins/${t}`);me(r,o.scene);const n=i.folder(`src/plugins/${t}`);n.file("config.js",de(t));const a=se(pe(n,e,o.scene),o.project,o.camera,e);return n.file("pages/index.vue",a),n.file("common/eventScript.js",ie(o.scripts)),i.generateAsync({type:"blob"}).then(h=>{V.saveAs(h,`${t}.zip`)})}const{defineComponent:ve}=await v("vue"),R=await v("three"),{onMounted:he}=await v("vue"),ge=ve({__name:"importJson",setup(o){let e,t=null;var i=new R.ObjectLoader;let r=null;const{scene:n,renderer:a,camera:h,sizes:S}=K(),l=()=>{if(!r)return;const c=m=>{m.geometry?.dispose(),m.material?.dispose()},d=m=>{let C=m.children.filter(f=>!!f);C.forEach(f=>{f.children.length?d(f):(c(f),f.clear())}),m.clear(),C=null};d(r),r=null},w=c=>{l(),re(),r=new R.Group,c.children&&(r.children=c.children,n.value.add(r),n.value.background=c.background,n.value.environment=c.environment,n.value.fog=c.fog)},p=new Q;p.addButton({title:"清空场景",label:"clear"}).on("click",()=>{confirm("确定要执行操作吗？")&&window.location.reload()}),p.addButton({title:"导入原生场景Json",label:"srcJson"}).on("click",()=>{if(t){b.warning?.({content:"先清空场景",colorful:!0});return}e&&(e.accept=".json",e.value=null,e.click())});const $=p.addFolder({title:"分解场景[中间件 测试用]",expanded:!1});$.addButton({title:"生成分解场景Zip",label:"Json2Zip"}).on("click",()=>{t?Y(t):b.warning?.({content:"场景内无物体",colorful:!0})}),$.addButton({title:"导入分解场景Zip",label:"Zip2Json"}).on("click",()=>{t?b.warning?.({content:"先清空场景",colorful:!0}):e&&(e.accept=".zip",e.value=null,e.click())});const y={orbitControls:!0,gridHelper:!0,pluginName:"testEditor",childLevel:1},L=p.addFolder({title:"TvT插件包"});L.addBinding(y,"pluginName",{label:"插件名称"}),L.addBinding(y,"orbitControls",{label:"默认控制器"}),L.addBinding(y,"gridHelper",{label:"默认网格"}),L.addButton({title:"生成插件包",label:"MakePlugin"}).on("click",()=>{t?y.pluginName?fe(t,y):b.warning?.({content:"请正确填写插件名称",colorful:!0}):b.warning?.({content:"场景内无物体",colorful:!0})});const B=c=>{t=c,w(i.parse(t.scene)),te(a,n.value,h.value,S,t),ne()};he(()=>{e=document.getElementById("fileInput"),e&&(e.onchange=c=>{const d=c.target.files[0];if(e.accept===".json"){const m=new FileReader;m.onload=C=>{const f=C.target.result;B(JSON.parse(f))},m.readAsText(d)}e.accept===".zip"&&q(d,B)})});const{onBeforeRender:U}=D();return U(({delta:c,elapsed:d})=>{oe(d*1e3,c*1e3)}),(c,d)=>null}}),{defineComponent:we}=await v("vue"),{createElementVNode:k,unref:F,normalizeProps:ye,guardReactiveProps:be,createVNode:O,Suspense:Ee,withCtx:J,openBlock:_,createBlock:$e,mergeProps:je,Fragment:Le,createElementBlock:Ce}=await v("vue"),{SRGBColorSpace:Se,BasicShadowMap:Pe,NoToneMapping:ke}=await v("three"),{reactive:M,shallowRef:Oe,watchEffect:Te}=await v("vue"),Me=we({__name:"simpleImport",setup(o){const e=M({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:Pe,outputColorSpace:Se,toneMapping:ke}),t=M({enableDamping:!0,dampingFactor:.05}),i=Oe(null);return Te(()=>{i.value}),(r,n)=>(_(),Ce(Le,null,[O(F(Z),je(e,{"window-size":""}),{default:J(()=>[n[0]||(n[0]=k("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),O(F(A),ye(be(t)),null,16),(_(),$e(Ee,null,{default:J(()=>[O(ge)]),_:1})),n[1]||(n[1]=k("TresGridHelper",null,null,-1))]),_:1},16),n[2]||(n[2]=k("input",{id:"fileInput",type:"file",accept:".zip",style:{display:"none"}},null,-1))],64))}});export{Me as default};
