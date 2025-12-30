import { importShared, Fs, _l, ol, Kk } from './index.BxB45aCK1767105581793.js';
import { loadJsonFile, loadImageToBase64 } from './utils.BPGLoE4R1767105581793.js';
import { loading } from './generalFont.vue_vue_type_script_setup_true_lang.DqoG1H6g1767105581793.js';
import './default.vue_vue_type_script_setup_true_lang.DQGKkIwV1767105581793.js';
import './three-mesh-ui.module.CjQAT-M_1767105581793.js';
import './domPanel.vue_vue_type_style_index_0_lang.dV59iE041767105581793.js';

/* eslint-disable prefer-rest-params */
/* eslint-disable no-undefined */
/* eslint-disable guard-for-in */
const THREE$4 = await importShared('three');


window.THREE = THREE$4; // Used by APP Scripts.
const Grscwh = { scene: null, renderer: null, camera: null, sizes: null };
const player = {
	get renderer() {
		return Grscwh.renderer?.value
	},
	loader: new THREE$4.TextureLoader(),
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
			return Grscwh.renderer?.value.domElement.parentElement
	},
	get canvas() {
			return Grscwh.renderer?.value.domElement
	},
	events: {},
	init(scene, renderer, camera, sizes) {
			Grscwh.scene = scene;
			Grscwh.renderer = renderer;
			Grscwh.camera = camera;
			Grscwh.sizes = sizes;
	},
	load(sceneObject) {
		const scriptsJson = 
{"1d0e8871-bd60-47f9-8ab7-232dabd30201":[{"name":"SpotLightEvent","source":"this.shadow.mapSize.width = 1024 * 2\nthis.shadow.mapSize.height = 1024 * 2\nthis.shadow.camera.near = 1\nthis.shadow.camera.far = 10\nthis.shadow.bias = -0.0075\nthis.shadow.radius = 24\nthis.target.position.copy(this.position.clone().setY(0))\nfunction update( event ) {}"}],"beea1423-1e37-47ab-9443-f8429259e120":[{"name":"dirb","source":"this.shadow.mapSize.width = 1024 * 2\nthis.shadow.mapSize.height = 1024 * 2\nthis.shadow.camera.near = 1\nthis.shadow.camera.far = 50\nthis.shadow.camera.top = 80\nthis.shadow.camera.bottom = -80\nthis.shadow.camera.left = -80\nthis.shadow.camera.right = 80\nthis.shadow.radius = 24\nthis.shadow.bias = -0.0075\nfunction update( event ) {}"}],"31517222-A9A7-4EAF-B5F6-60751C0BABA3":[{"name":"senceScirpt","source":"this.environment.mapping = THREE.EquirectangularReflectionMapping;\nthis.environment.colorSpace = THREE.SRGBColorSpace;\nfunction update( event ) {}"}]};

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
		};
		let scriptWrapParams = 'player,renderer,scene,camera';
		const scriptWrapResultObj = {};

		for (const eventKey in this.events) {
				scriptWrapParams += `,${eventKey}`;
				scriptWrapResultObj[eventKey] = eventKey;
		}
		const scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, '');
		for (const uuid in scriptsJson) {
				let curUuid = uuid;
				//这里解决一个问题 目前并没有把 主场景scene直接替换而是通过group 加进入的，所以 如果事件是基于主场景scene 那么替换这个uuid为现在tres主场景的uuid
				if (uuid === sceneObject.uuid) {
						curUuid = this.scene.uuid;
				}
				const object = this.scene.getObjectByProperty('uuid', curUuid, true);
				if (object === undefined) {
						console.warn('player: Script without object.', curUuid);
						continue
				}
				const scripts = scriptsJson[uuid];
				for (let i = 0; i < scripts.length; i++) {
						const script = scripts[i];
						// eslint-disable-next-line no-new-func
						const functions = new Function(scriptWrapParams, `${script.source}
return ${scriptWrapResult};`).bind(object)(
								this,
								this.renderer,
								this.scene,
								this.camera,
						);
						for (const name in functions) {
								if (functions[name] === undefined) continue
								if (this.events[name] === undefined) {
										console.warn('player: Event type not supported (', name, ')');
										continue
								}
								this.events[name].push(functions[name].bind(object));
						}
				}
				this.dispatch(this.events.init, arguments);
		}
	},
	dispatch(array, event) {
		for (let i = 0, l = array.length; i < l; i++) {
				array[i](event);
		}
	},
	setCamera(value) {
			console.warn('暂时不考虑摄像机的设置函数', value);
			// camera = value
			// camera.aspect = this.width / this.height
			// camera.updateProjectionMatrix()
	},
	setScene(value) {
			console.warn('暂时不考虑场景的设置函数', value);
			// scene = value
	},
	setPixelRatio(value) {
			console.warn('暂时不考虑像素比的设置函数', value);
	},
	setSize(value) {
			console.warn('暂时不考虑尺寸的设置函数', value);
	},
	dispose() {
			// renderer.dispose();
			// camera = undefined;
			// scene = undefined;
			console.warn('暂时不考虑释放资源的函数');
	},
	onKeyDown(event) {
		player.dispatch(player.events.keydown, event);
	},
	onKeyUp(event) {
			player.dispatch(player.events.keyup, event);
	},
	onPointerDown(event) {
			player.dispatch(player.events.pointerdown, event);
	},
	onPointerUp(event) {
			player.dispatch(player.events.pointerup, event);
	},
	onPointerMove(event) {
			player.dispatch(player.events.pointermove, event);
	},
	play() {
			document.addEventListener('keydown', this.onKeyDown);
			document.addEventListener('keyup', this.onKeyUp);
			document.addEventListener('pointerdown', this.onPointerDown);
			document.addEventListener('pointerup', this.onPointerUp);
			document.addEventListener('pointermove', this.onPointerMove);
			this.dispatch(this.events.start, null);
			//renderer.setAnimationLoop( animate ); 播放是自动的
	},
	stop() {
			document.removeEventListener('keydown', this.onKeyDown);
			document.removeEventListener('keyup', this.onKeyUp);
			document.removeEventListener('pointerdown', this.onPointerDown);
			document.removeEventListener('pointerup', this.onPointerUp);
			document.removeEventListener('pointermove', this.onPointerMove);
			this.dispatch(this.events.stop, arguments);
			// renderer.setAnimationLoop( null );播放是自动的
	},
	render(elapsed, delta) {
			this.dispatch(this.events.update, { time: elapsed, delta });
	},
};

const points = [
	{
		x: -16.017528533935547,
		y: 2.4581613540649414,
		z: 53.098697662353516
	},
	{
		x: -11.40013599395752,
		y: 2.4513251781463623,
		z: 43.62754821777344
	},
	{
		x: -7.9051361083984375,
		y: 2.4462289810180664,
		z: 36.4436149597168
	},
	{
		x: -5.53253173828125,
		y: 2.442873001098633,
		z: 31.546899795532227
	},
	{
		x: -4.282320976257324,
		y: 2.4412572383880615,
		z: 28.937395095825195
	},
	{
		x: -3.9756288528442383,
		y: 2.4410974979400635,
		z: 28.24086570739746
	},
	{
		x: -3.7963345050811768,
		y: 2.4410974979400635,
		z: 27.74983024597168
	},
	{
		x: -3.6438193321228027,
		y: 2.4410974979400635,
		z: 27.253768920898438
	},
	{
		x: -3.5180840492248535,
		y: 2.4410974979400635,
		z: 26.75269317626953
	},
	{
		x: -3.419203519821167,
		y: 2.4411063194274902,
		z: 26.243703842163086
	},
	{
		x: -3.3517673015594482,
		y: 2.4416656494140625,
		z: 25.55027961730957
	},
	{
		x: -3.318483829498291,
		y: 2.4430952072143555,
		z: 24.5682430267334
	},
	{
		x: -3.319352865219116,
		y: 2.445394515991211,
		z: 23.297592163085938
	},
	{
		x: -3.354374647140503,
		y: 2.448564052581787,
		z: 21.73832893371582
	},
	{
		x: -3.4121222496032715,
		y: 2.4521596431732178,
		z: 19.611284255981445
	},
	{
		x: -3.461057662963867,
		y: 2.454956293106079,
		z: 16.145946502685547
	},
	{
		x: -3.49935245513916,
		y: 2.456882953643799,
		z: 11.297648429870605
	},
	{
		x: -3.5270066261291504,
		y: 2.457939386367798,
		z: 5.066390037536621
	},
	{
		x: -3.544764518737793,
		y: 2.4581613540649414,
		z: -2.423649311065674
	},
	{
		x: -3.565464973449707,
		y: 2.4581613540649414,
		z: -9.03036880493164
	},
	{
		x: -3.5937604904174805,
		y: 2.4581613540649414,
		z: -13.977668762207031
	},
	{
		x: -3.629650592803955,
		y: 2.4581613540649414,
		z: -17.265522003173828
	},
	{
		x: -3.673135280609131,
		y: 2.4581613540649414,
		z: -18.893949508666992
	},
	{
		x: -3.7082104682922363,
		y: 2.4581613540649414,
		z: -19.473438262939453
	},
	{
		x: -3.7077581882476807,
		y: 2.4581613540649414,
		z: -20.038450241088867
	},
	{
		x: -3.6713337898254395,
		y: 2.4581613540649414,
		z: -20.605941772460938
	},
	{
		x: -3.5989370346069336,
		y: 2.4581613540649414,
		z: -21.175914764404297
	},
	{
		x: -3.3510568141937256,
		y: 2.4581613540649414,
		z: -22.262161254882812
	},
	{
		x: -1.7961064577102661,
		y: 2.4581615924835205,
		z: -28.032060623168945
	},
	{
		x: 1.3139424324035645,
		y: 2.4581618309020996,
		z: -39.39905548095703
	},
	{
		x: 5.9790754318237305,
		y: 2.458162546157837,
		z: -56.36309814453125
	},
	{
		x: 12.19931411743164,
		y: 2.458163261413574,
		z: -78.92425537109375
	}
];
const closed = false;
const conveyorBeltPathJson = {
	points: points,
	closed: closed
};

const THREE$3 = await importShared('three');

function createCurveFromJSON(json) {
    const vertices = json.points;
    const points = [];
    for (const element of vertices) {
        const x = element.x;
        const y = element.y;
        const z = element.z;
        points.unshift(new THREE$3.Vector3(x, y, z));
    }
    const curve = new THREE$3.CatmullRomCurve3(points);
    curve.closed = json.closed;
    return curve
}
const conveyorBeltPath = createCurveFromJSON(conveyorBeltPathJson);
const _matrix = new THREE$3.Matrix4();
function initBeltFots(mesh) {
    const count = conveyorBeltPath.points.length / 2;
    const beltDotsItem = new THREE$3.InstancedMesh(mesh.geometry, mesh.material, count);
    beltDotsItem.userData = { progresses: [] };
    for (let i = 0; i < count; i++) {
        const progress = i / (count - 1);
        const point = conveyorBeltPath.getPointAt(progress);
        beltDotsItem.userData.progresses[i] = progress;
        _matrix.setPosition(point);
        beltDotsItem.setMatrixAt(i, _matrix);
    }
    return beltDotsItem
}

function updateBeltFots(beltDotsItemInstanced) {
    const beltDotsItemProgresses = beltDotsItemInstanced.userData.progresses;

    for (let i = 0; i < beltDotsItemInstanced.count; i++) {
        const position = conveyorBeltPath.getPointAt(beltDotsItemProgresses[i]);
        _matrix.setPosition(position);
        beltDotsItemInstanced.setMatrixAt(i, _matrix);

        beltDotsItemProgresses[i] += 0.0005;
        if (beltDotsItemProgresses[i] > 1) beltDotsItemProgresses[i] = 0;
    }

    beltDotsItemInstanced.instanceMatrix.needsUpdate = true;
    beltDotsItemInstanced.computeBoundingSphere();
}

function initRawItemsPool(object) {
    // 共计 8 个物体
    const rawItems = [];
    rawItems.push(object[2].clone());
    rawItems.push(object[4].clone());
    rawItems.push(object[5].clone());
    rawItems.push(object[2].clone());
    rawItems.push(object[5].clone());
    rawItems.push(object[4].clone());
    rawItems.push(object[2].clone());
    rawItems.push(object[4].clone());
    for (let i = 0; i < rawItems.length; i++) {
        const progress = (i / rawItems.length) * 0.6;
        rawItems[i].userData = { progress };
        const point = conveyorBeltPath.getPointAt(progress);
        rawItems[i].position.copy(point);
        rawItems[i].visible = true;
    }
    return rawItems
}

function updateRawItemsPool(object) {
    for (let i = 0; i < object.length; i++) {
        object[i].userData.progress += 0.0005;
        if (object[i].userData.progress > 0.6) object[i].userData.progress = 0;
        const progress = object[i].userData.progress;
        const point = conveyorBeltPath.getPointAt(progress);
        if (object[i].name === 'flat_item') {
            point.y = 1.5;
        }
        object[i].position.copy(point);
    }
}

function initBoxesPool(object) {
    // 共计 8 个物体
    const boxItems = [];
    for (let i = 0; i < 6; i++) {
        boxItems.push(object[3].clone());
        const progress = 1 - (i / 6) * 0.4 - 0.04;
        boxItems[i].userData = { progress };
        const point = conveyorBeltPath.getPointAt(progress);
        boxItems[i].position.copy(point);
        boxItems[i].visible = true;
    }
    return boxItems
}

function updateBoxesPool(object) {
    for (let i = 0; i < object.length; i++) {
        object[i].userData.progress += 0.0005;
        if (object[i].userData.progress > 1) object[i].userData.progress = 1 - (5 / 6) * 0.4 - 0.04;
        const progress = object[i].userData.progress;
        const point = conveyorBeltPath.getPointAt(progress);
        object[i].position.copy(point);
    }
}

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,Fragment:_Fragment$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const _hoisted_1$1 = ["object"];
const _hoisted_2$1 = ["object"];
const _hoisted_3$1 = ["object"];
const _hoisted_4$1 = ["object"];
const _hoisted_5$1 = ["object"];
const _hoisted_6 = ["object"];
const _hoisted_7 = ["object"];
const THREE$2 = await importShared('three');

const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "firstLevel-bf61e255d699",
  props: {
    object: {}
  },
  setup(__props) {
    const props = __props;
    const { scene } = Fs();
    const beltDotsItem = initBeltFots(props.object[1]);
    scene.value.add(beltDotsItem);
    const rawItemsPool = initRawItemsPool(props.object);
    const group = new THREE$2.Group();
    group.position.set(0, 1, 0);
    group.add(...rawItemsPool);
    scene.value.add(group);
    const boxesPool = initBoxesPool(props.object);
    const group2 = new THREE$2.Group();
    group2.add(...boxesPool);
    group2.position.set(0, 1, 0);
    scene.value.add(group2);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta, elapsed }) => {
      if (beltDotsItem) {
        updateBeltFots(beltDotsItem);
      }
      if (rawItemsPool) {
        updateRawItemsPool(rawItemsPool);
      }
      if (boxesPool) {
        updateBoxesPool(boxesPool);
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$2(), _createElementBlock$2(_Fragment$2, null, [
        _createElementVNode$2("primitive", {
          object: _ctx.object[0]
        }, null, 8, _hoisted_1$1),
        _createElementVNode$2("primitive", {
          object: _ctx.object[1],
          visible: false
        }, null, 8, _hoisted_2$1),
        _createElementVNode$2("primitive", {
          object: _ctx.object[2]
        }, null, 8, _hoisted_3$1),
        _createElementVNode$2("primitive", {
          object: _ctx.object[4]
        }, null, 8, _hoisted_4$1),
        _createElementVNode$2("primitive", {
          object: _ctx.object[5]
        }, null, 8, _hoisted_5$1),
        _createElementVNode$2("primitive", {
          object: _ctx.object[6]
        }, null, 8, _hoisted_6),
        _createElementVNode$2("primitive", {
          object: _ctx.object[3]
        }, null, 8, _hoisted_7)
      ], 64);
    };
  }
});

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent$1} = await importShared('vue');

const {unref:_unref$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,Fragment:_Fragment$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const _hoisted_1 = ["object"];
const _hoisted_2 = ["object"];
const _hoisted_3 = ["object"];
const _hoisted_4 = ["object"];
const _hoisted_5 = ["object"];
const {onMounted,ref: ref$1} = await importShared('vue');

const THREE$1 = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "scene",
  async setup(__props) {
    let __temp, __restore;
    const { scene: tresScene, renderer, camera, sizes } = Fs();
    player.init(tresScene, renderer, camera, sizes);
    const loader = new THREE$1.ObjectLoader();
    const scene = ([__temp, __restore] = _withAsyncContext(() => loadJsonFile("./plugins/tresEditor/svelteMachine/json/scene.json")), __temp = await __temp, __restore(), __temp);
    if (scene.geometries) {
      for (const geometry of scene.geometries) {
        if (geometry.data && geometry.data.startsWith("url:")) {
          let url = geometry.data.slice(4);
          if (url.startsWith("geometries/")) {
            url = `./plugins/tresEditor/svelteMachine/${url}`;
          }
          geometry.data = ([__temp, __restore] = _withAsyncContext(() => loadJsonFile(url)), __temp = await __temp, __restore(), __temp);
        }
      }
    }
    if (scene.images) {
      for (const image of scene.images) {
        if (image.url && image.url.startsWith("url:")) {
          let url = image.url.slice(4);
          if (url.startsWith("images/")) {
            url = `./plugins/tresEditor/svelteMachine/${url}`;
          }
          image.url = ([__temp, __restore] = _withAsyncContext(() => loadImageToBase64(url)), __temp = await __temp, __restore(), __temp);
        }
      }
    }
    const sceneObject = loader.parse(scene);
    const spotLightRef = ref$1(null);
    onMounted(() => {
      tresScene.value.background = sceneObject.background;
      tresScene.value.environment = sceneObject.environment;
      tresScene.value.fog = sceneObject.fog;
      player.load(sceneObject);
      player.play();
      if (spotLightRef.value) {
        const sLight = spotLightRef.value;
        sLight.target.position.set(-3.8, 0, -2.3);
        tresScene.value.add(sLight.target);
        sLight.angle = Math.PI / 2.5;
      }
    });
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta, elapsed }) => {
      if (player.renderer) {
        player.render(elapsed * 1e3, delta * 1e3);
      }
      if (spotLightRef.value) {
        const sLight = spotLightRef.value;
        sLight.intensity = 100 + Math.sin(elapsed * 2) * 100;
      }
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock$1(_Fragment$1, null, [
        _createElementVNode$1("primitive", {
          object: _unref$1(sceneObject).children[0]
        }, [
          _createVNode$1(_sfc_main$2, {
            object: _unref$1(sceneObject).children[0].children
          }, null, 8, ["object"])
        ], 8, _hoisted_1),
        _createElementVNode$1("primitive", {
          object: _unref$1(sceneObject).children[1]
        }, null, 8, _hoisted_2),
        _createElementVNode$1("primitive", {
          object: _unref$1(sceneObject).children[2]
        }, null, 8, _hoisted_3),
        _createElementVNode$1("primitive", {
          object: _unref$1(sceneObject).children[3]
        }, null, 8, _hoisted_4),
        _createElementVNode$1("primitive", {
          object: _unref$1(sceneObject).children[4],
          ref_key: "spotLightRef",
          ref: spotLightRef
        }, null, 8, _hoisted_5)
      ], 64);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createVNode:_createVNode,createElementVNode:_createElementVNode,Suspense:_Suspense,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');

const THREE = await importShared('three');

const {reactive,watch,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "svelteMachine",
  setup(__props) {
    const state = reactive({
      clearColor: "#201919",
      windowSize: true,
      antialias: true,
      shadows: true,
      shadowMapType: 2,
      toneMapping: 3,
      toneMappingExposure: 1.75
    });
    const cameraConfig = {
      metadata: { version: 4.6, type: "Object", generator: "Object3D.toJSON" },
      object: {
        type: "PerspectiveCamera",
        name: "Camera",
        layers: 1,
        matrix: [
          -0.6267758441936044,
          -27755575615628914e-33,
          0.7791996157182023,
          0,
          0.48061725621232265,
          0.787112942007701,
          0.3866009176850464,
          0,
          -0.6133181019392243,
          0.6168088978962458,
          -0.49334337870258826,
          0,
          -80.48773984917322,
          89.13969162136891,
          -91.54490099940386,
          1
        ],
        up: [0, 1, 0],
        fov: 50,
        zoom: 1,
        near: 0.01,
        far: 1e3,
        focus: 10,
        aspect: 1.1063238359972203,
        filmGauge: 35,
        filmOffset: 0
      }
    };
    const loader = new THREE.ObjectLoader();
    const cameraObject = loader.parse(cameraConfig);
    const cameraRef = ref(null);
    watch(
      () => cameraRef.value,
      (val) => {
        val.copy(cameraObject);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock(_Fragment, null, [
        _createVNode(_unref(loading)),
        _createVNode(_unref(ol), _normalizeProps(_guardReactiveProps(state)), {
          default: _withCtx(() => [
            _createVNode(_unref(Kk)),
            _createElementVNode("TresPerspectiveCamera", {
              ref_key: "cameraRef",
              ref: cameraRef,
              uuid: "9ca45c84-3c16-48da-b0a2-9e469abea3d1",
              name: "Camera"
            }, null, 512),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ], 64);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=svelteMachine.nHx3iXV71767105581793.js.map
