import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';
import { RenderPass, EffectComposer, ShaderPass } from './RenderPass.XMM8w9Yd1767105581793.js';
import { UnrealBloomPass } from './UnrealBloomPass.DHFMJH-X1767105581793.js';
import { OutputPass } from './OutputPass.C3RhefbZ1767105581793.js';
import './customShaderMaterial.vue_vue_type_script_setup_true_lang.rDMIDGqx1767105581793.js';
import './index.vue_vue_type_script_setup_true_lang.D7-hpzmy1767105581793.js';
import { useGLTF } from './index.CTrIPOkZ1767105581793.js';

const deviceVertex = "varying vec2 vUv;\nvoid main(){\n\tvUv=uv;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}";

const deviceFrag = "uniform sampler2D baseTexture;\nuniform sampler2D bloomTexture;\nvarying vec2 vUv;\nvoid main(){\n\tgl_FragColor=(texture2D(baseTexture,vUv)+vec4(1.)*texture2D(bloomTexture,vUv));\n}";

const THREE = await importShared('three');
let color = new THREE.Color("#0fb1fb");
const meshMaterial = new THREE.MeshBasicMaterial({
  color,
  transparent: true,
  opacity: 0.3
});
const lineMaterial = new THREE.LineBasicMaterial({
  color: new THREE.Color(color),
  depthTest: true,
  transparent: true
});
const reduceModelLine = (object) => {
  const brainBufferGeometries = [];
  object.traverse((mesh) => {
    if (mesh.isMesh) {
      brainBufferGeometries.push(mesh.geometry);
      mesh.material = meshMaterial;
    }
  });
  const tmpGeometry = mergeGeometries(
    brainBufferGeometries
  );
  const edges = new THREE.EdgesGeometry(tmpGeometry, Math.PI * 6.137);
  const lines = new THREE.LineSegments(edges);
  lineMaterial.opacity = 1;
  lines.material = lineMaterial;
  return lines;
};
const params = {
  threshold: 0,
  strength: 0.972,
  // 强度
  radius: 0.21
  // 半径
};
const unreal = (scene, camera, renderer, width, height) => {
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), params.strength, params.radius, params.threshold);
  const effectComposer = new EffectComposer(renderer);
  effectComposer.renderToScreen = false;
  effectComposer.addPass(renderScene);
  effectComposer.addPass(bloomPass);
  const mixPass = new ShaderPass(
    // 着色器
    new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: effectComposer.renderTarget2.texture }
      },
      vertexShader: deviceVertex,
      fragmentShader: deviceFrag,
      defines: {}
    }),
    "baseTexture"
  );
  mixPass.needsSwap = true;
  const outputPass = new OutputPass();
  const finalComposer = new EffectComposer(renderer);
  finalComposer.addPass(renderScene);
  finalComposer.addPass(mixPass);
  finalComposer.addPass(outputPass);
  return {
    finalComposer,
    effectComposer,
    renderScene,
    bloomPass
  };
};

const {withAsyncContext:_withAsyncContext,defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object"];
const {MeshBasicMaterial,Color} = await importShared('three');

const {watchEffect,toRaw} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "device",
  props: {
    threshold: { default: 0 },
    strength: { default: 0.972 },
    radius: { default: 0.21 }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { nodes } = ([__temp, __restore] = _withAsyncContext(() => useGLTF(
      ("https://opensource.cdn.icegl.cn") + "/model/industry4/modelDraco.glb"
    )), __temp = await __temp, __restore(), __temp);
    const lineGroup = reduceModelLine(nodes.Sketchfab_model);
    const { camera, renderer, scene, sizes } = Fs();
    let finalComposer = null;
    let effectComposer = null;
    let bloomPass = null;
    const darkMaterial = new MeshBasicMaterial({ color: "black" });
    watchEffect(() => {
      if (camera.value) {
        renderer.setPixelRatio(window.devicePixelRatio);
        scene.value.add(lineGroup);
        const {
          finalComposer: F,
          effectComposer: B,
          bloomPass: BP
        } = unreal(scene.value, camera.value, renderer, sizes.width.value, sizes.height.value);
        finalComposer = F;
        effectComposer = B;
        bloomPass = BP;
        bloomPass.threshold = props.threshold;
        bloomPass.strength = props.strength;
        bloomPass.radius = props.radius;
      }
      if (props.threshold) {
        bloomPass.threshold = props.threshold;
      }
      if (props.strength) {
        bloomPass.strength = props.strength;
      }
      if (props.radius) {
        bloomPass.radius = props.radius;
      }
    });
    const materials = {};
    const darkenNonBloomed = (obj) => {
      if (obj.isMesh || obj.type === "GridHelper" || obj.name === "reflectorShaderMesh") {
        materials[obj.uuid] = obj.material;
        obj.material = darkMaterial;
      }
    };
    const restoreMaterial = (obj) => {
      if (materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        delete materials[obj.uuid];
      }
    };
    const { onBeforeRender } = _l();
    let rotationX = 0.03;
    let right_pbr = nodes.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0");
    let oldMeshMaterila = right_pbr.material.clone();
    let errorMeshMaterila = new MeshBasicMaterial({ color: new Color("red"), transparent: true, opacity: 1 });
    onBeforeRender(({ elapsed }) => {
      if (nodes.hull_turbine) {
        nodes.hull_turbine.rotation.x += rotationX;
        nodes.blades_turbine_003.rotation.x += rotationX;
      }
      if (Math.floor(elapsed) % 2) {
        right_pbr.material = oldMeshMaterila;
      } else {
        right_pbr.material = errorMeshMaterila;
      }
    }, -1);
    onBeforeRender(({ elapsed }) => {
      if (effectComposer) {
        scene.value.traverse((child) => {
          darkenNonBloomed(child);
        });
        effectComposer.render(elapsed);
      }
      if (finalComposer) {
        scene.value.traverse((child) => {
          restoreMaterial(child);
        });
        finalComposer.render(elapsed);
      }
    }, 1);
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("primitive", {
        object: toRaw(_unref(nodes).Sketchfab_model)
      }, null, 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=device.vue_vue_type_script_setup_true_lang.BD3Sn2Lg1767105581793.js.map
