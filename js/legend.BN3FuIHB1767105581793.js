import { importShared, Fs, _l, Kk, _export_sfc } from './index.BxB45aCK1767105581793.js';
import { GLTFLoader } from './GLTFLoader.CAD9c_1U1767105581793.js';

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {onMounted,ref: ref$1,watch,nextTick,markRaw} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "legend",
  props: {
    deviceConfig: {},
    title: { default: "SYSTEM MONITOR" },
    panelPosition: { default: () => ({ top: "20px", right: "20px" }) },
    panelWidth: { default: "220px" },
    statusDotColor: { default: "#0f0" },
    sceneBackground: { default: 1710618 },
    sceneFogColor: { default: 1710618 },
    sceneFogRange: { default: () => [10, 30] },
    groundColor: { default: 1381653 },
    groundSize: { default: () => [30, 30] },
    gridSize: { default: 30 },
    gridDivisions: { default: 30 },
    gridColor1: { default: 5592405 },
    gridColor2: { default: 2236962 },
    ambientLightIntensity: { default: 0.8 },
    directionalLightIntensity: { default: 1.2 },
    directionalLightPosition: { default: () => [5, 15, 7] },
    fillLightIntensity: { default: 0.3 },
    fillLightPosition: { default: () => [-5, 5, -5] },
    cameraInitialPosition: { default: () => [0, 5, 10] },
    legendCameraPosition: { default: () => [2, 1.5, 2.5] },
    legendCameraLookAt: { default: () => [0, 0, 0] },
    legendCameraFov: { default: 50 },
    autoRotateSpeed: { default: 0.5 },
    cameraMoveLerp: { default: 0.05 },
    cameraFocusOffset: { default: () => [0, 3, 5] },
    deviceRotationSpeed: { default: 0.01 },
    pulseBaseIntensity: { default: 0.3 },
    pulseRange: { default: 1.5 },
    pulseFrequency: { default: 3 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const tresContext = Fs();
    const { camera, renderer, scene, controls } = tresContext;
    const { onRender } = _l();
    const clock = new THREE.Clock();
    const devices = ref$1([]);
    const sceneStaticObjects = ref$1([]);
    const legendCamera = ref$1(null);
    const targetPosition = ref$1(new THREE.Vector3());
    const targetLookAt = ref$1(new THREE.Vector3());
    const isMoving = ref$1(false);
    const createBaseMaterial = (color) => {
      return new THREE.MeshStandardMaterial({
        color: 5592405,
        emissive: color,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.8
      });
    };
    const createSciFiCube = (material) => {
      const group = new THREE.Group();
      const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), material);
      group.add(box);
      const wire = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 1.4, 1.4),
        new THREE.MeshBasicMaterial({
          color: material.emissive.getHex(),
          wireframe: true,
          transparent: true,
          opacity: 0.15
        })
      );
      group.add(wire);
      return group;
    };
    const createSciFiSphere = (material) => {
      const group = new THREE.Group();
      const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), material);
      group.add(sphere);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.05, 6, 30),
        new THREE.MeshBasicMaterial({
          color: material.emissive.getHex(),
          transparent: true,
          opacity: 0.5
        })
      );
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
      return group;
    };
    const createSciFiCone = (material) => {
      const group = new THREE.Group();
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.5, 6), material);
      cone.position.y = 0.2;
      group.add(cone);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.1, 6), material);
      base.position.y = -0.6;
      group.add(base);
      return group;
    };
    const createMeshFromConfig = (config) => {
      return new Promise((resolve, reject) => {
        if (config.type === "model" && config.modelUrl) {
          const loader = new GLTFLoader();
          loader.load(
            config.modelUrl,
            (gltf) => {
              const root = gltf.scene;
              const scale = config.modelScale || 1;
              root.scale.set(scale, scale, scale);
              resolve(root);
            },
            void 0,
            reject
          );
          return;
        }
        const material = createBaseMaterial(config.color);
        let mesh;
        if (config.type === "cube") {
          mesh = createSciFiCube(material);
        } else if (config.type === "sphere") {
          mesh = createSciFiSphere(material);
        } else {
          mesh = createSciFiCone(material);
        }
        resolve(mesh);
      });
    };
    const buildDevices = async () => {
      const promises = props.deviceConfig.map(async (config) => {
        try {
          const mesh = await createMeshFromConfig(config);
          const materials = [];
          mesh.traverse((obj) => {
            if (obj instanceof THREE.Mesh) {
              obj.castShadow = true;
              obj.receiveShadow = true;
              const mat = obj.material;
              const matArray = Array.isArray(mat) ? mat : [mat];
              matArray.forEach((singleMat) => {
                if (singleMat instanceof THREE.MeshStandardMaterial) {
                  if (!singleMat.emissive || !(singleMat.emissive instanceof THREE.Color)) {
                    singleMat.emissive = new THREE.Color(config.color);
                  } else {
                    singleMat.emissive.set(config.color);
                  }
                  singleMat.emissiveIntensity = 0.5;
                  materials.push(markRaw(singleMat));
                }
              });
            }
          });
          mesh.position.set(...config.position);
          if (scene.value) {
            scene.value.add(markRaw(mesh));
          }
          const originalPosition = new THREE.Vector3(...config.position);
          devices.value.push({
            config,
            materials,
            mainMesh: markRaw(mesh),
            // <<< 核心修复：对 mainMesh 使用 markRaw
            originalPosition,
            anchorId: `anchor-${config.id}`
          });
        } catch (err) {
          console.error(`加载模型 ${config.id} 失败`, err);
        }
      });
      await Promise.all(promises);
    };
    const initScene = () => {
      if (!scene.value || !renderer || !camera.value) return;
      if (typeof props.sceneBackground === "number") {
        scene.value.background = new THREE.Color(props.sceneBackground);
      } else {
        scene.value.background = new THREE.Color(props.sceneBackground);
      }
      if (typeof props.sceneFogColor === "number") {
        scene.value.fog = new THREE.Fog(
          props.sceneFogColor,
          props.sceneFogRange[0],
          props.sceneFogRange[1]
        );
      } else {
        scene.value.fog = new THREE.Fog(
          new THREE.Color(props.sceneFogColor),
          props.sceneFogRange[0],
          props.sceneFogRange[1]
        );
      }
      if (renderer.shadowMap) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }
      const groundGeometry = new THREE.PlaneGeometry(...props.groundSize);
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: props.groundColor,
        metalness: 0.1,
        roughness: 0.8
      });
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.receiveShadow = true;
      scene.value.add(ground);
      sceneStaticObjects.value.push(ground);
      const grid = new THREE.GridHelper(
        props.gridSize,
        props.gridDivisions,
        props.gridColor1,
        props.gridColor2
      );
      scene.value.add(grid);
      sceneStaticObjects.value.push(grid);
      const ambientLight = new THREE.AmbientLight(16777215, props.ambientLightIntensity);
      scene.value.add(ambientLight);
      const dirLight = new THREE.DirectionalLight(16777215, props.directionalLightIntensity);
      dirLight.position.set(...props.directionalLightPosition);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 0.5;
      dirLight.shadow.camera.far = 50;
      dirLight.shadow.camera.left = -15;
      dirLight.shadow.camera.right = 15;
      dirLight.shadow.camera.top = 15;
      dirLight.shadow.camera.bottom = -15;
      scene.value.add(dirLight);
      const fillLight = new THREE.PointLight(16777215, props.fillLightIntensity, 20);
      fillLight.position.set(...props.fillLightPosition);
      scene.value.add(fillLight);
      if (camera.value instanceof THREE.PerspectiveCamera) {
        camera.value.position.set(...props.cameraInitialPosition);
      }
      if (controls.value) {
        const controlsInstance = controls.value;
        if ("autoRotate" in controlsInstance) {
          controlsInstance.autoRotate = true;
          controlsInstance.autoRotateSpeed = props.autoRotateSpeed;
        }
      }
      legendCamera.value = new THREE.PerspectiveCamera(
        props.legendCameraFov,
        1,
        0.1,
        50
      );
      legendCamera.value.position.set(...props.legendCameraPosition);
      legendCamera.value.lookAt(...props.legendCameraLookAt);
    };
    const zoomToDevice = (meshPosition) => {
      if (!camera.value || !controls.value) return;
      const controlsInstance = controls.value;
      if ("autoRotate" in controlsInstance) {
        controlsInstance.autoRotate = false;
      }
      const offset = new THREE.Vector3(...props.cameraFocusOffset);
      const newCameraPosition = meshPosition.clone().add(offset);
      targetLookAt.value.copy(meshPosition);
      targetPosition.value.copy(newCameraPosition);
      isMoving.value = true;
      if ("enableDamping" in controlsInstance) {
        controlsInstance.enableDamping = true;
        controlsInstance.dampingFactor = 0.05;
      }
    };
    const handleDeviceClick = (deviceId) => {
      const device = devices.value.find((d) => d.config.id === deviceId);
      if (device) {
        zoomToDevice(device.mainMesh.position);
      }
    };
    const renderLoop = () => {
      if (!renderer || !scene.value || !camera.value || !legendCamera.value) return;
      const time = clock.getElapsedTime();
      if (isMoving.value && camera.value instanceof THREE.PerspectiveCamera && controls.value) {
        const controlsInstance = controls.value;
        camera.value.position.lerp(targetPosition.value, props.cameraMoveLerp);
        if ("target" in controlsInstance && controlsInstance.target instanceof THREE.Vector3) {
          controlsInstance.target.lerp(targetLookAt.value, props.cameraMoveLerp);
        }
        if (camera.value.position.distanceTo(targetPosition.value) < 0.01) {
          camera.value.position.copy(targetPosition.value);
          if ("target" in controlsInstance && controlsInstance.target instanceof THREE.Vector3) {
            controlsInstance.target.copy(targetLookAt.value);
          }
          isMoving.value = false;
          if ("autoRotate" in controlsInstance) {
            controlsInstance.autoRotate = true;
          }
          if ("dampingFactor" in controlsInstance) {
            controlsInstance.dampingFactor = 5e-3;
          }
        }
      }
      devices.value.forEach((device) => {
        const speed = device.config.speed || 1;
        const pulse = (Math.sin(time * props.pulseFrequency * speed) + 1) * 0.5;
        device.materials.forEach((mat) => {
          mat.emissiveIntensity = props.pulseBaseIntensity + pulse * props.pulseRange;
        });
        device.mainMesh.rotation.y += props.deviceRotationSpeed * speed;
      });
      if (controls.value) {
        const controlsInstance = controls.value;
        if ("update" in controlsInstance && typeof controlsInstance.update === "function") {
          controlsInstance.update();
        }
      }
      const fullSize = renderer.getDrawingBufferSize(new THREE.Vector2());
      renderer.setViewport(0, 0, fullSize.x, fullSize.y);
      renderer.setScissor(0, 0, fullSize.x, fullSize.y);
      renderer.setScissorTest(false);
      renderer.clear();
      renderer.render(scene.value, camera.value);
      renderer.setScissorTest(true);
      renderer.clearDepth();
      devices.value.forEach((device) => {
        const anchor = document.getElementById(device.anchorId);
        if (!anchor) return;
        const rect = anchor.getBoundingClientRect();
        const dpr = renderer.getPixelRatio();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const savedPosition = device.mainMesh.position.clone();
        const savedVisible = [];
        devices.value.forEach((d) => {
          savedVisible.push(d.mainMesh.visible);
          if (d !== device) {
            d.mainMesh.visible = false;
          }
        });
        const savedStaticVisible = [];
        sceneStaticObjects.value.forEach((obj) => {
          savedStaticVisible.push(obj.visible);
          obj.visible = false;
        });
        device.mainMesh.position.set(0, 0, 0);
        device.mainMesh.visible = true;
        const width = rect.width * dpr;
        const height = rect.height * dpr;
        const left = rect.left * dpr;
        const bottom = (window.innerHeight - rect.bottom) * dpr;
        renderer.setScissor(left, bottom, width, height);
        renderer.setViewport(left, bottom, width, height);
        renderer.render(scene.value, legendCamera.value);
        device.mainMesh.position.copy(savedPosition);
        devices.value.forEach((d, i) => {
          d.mainMesh.visible = savedVisible[i];
        });
        sceneStaticObjects.value.forEach((obj, i) => {
          obj.visible = savedStaticVisible[i];
        });
      });
      renderer.setScissorTest(false);
    };
    onMounted(async () => {
      await nextTick();
      initScene();
      await buildDevices();
      onRender(renderLoop);
    });
    watch(
      () => props.deviceConfig,
      async (newConfig, oldConfig) => {
        if (!oldConfig || oldConfig.length === 0) {
          await buildDevices();
          return;
        }
        const existingIds = new Set(devices.value.map((d) => d.config.id));
        const newDevices = newConfig.filter((config) => !existingIds.has(config.id));
        if (newDevices.length > 0) {
          for (const config of newDevices) {
            try {
              const mesh = await createMeshFromConfig(config);
              const materials = [];
              mesh.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                  obj.castShadow = true;
                  obj.receiveShadow = true;
                  const mat = obj.material;
                  const matArray = Array.isArray(mat) ? mat : [mat];
                  matArray.forEach((singleMat) => {
                    if (singleMat instanceof THREE.MeshStandardMaterial) {
                      if (!singleMat.emissive || !(singleMat.emissive instanceof THREE.Color)) {
                        singleMat.emissive = new THREE.Color(config.color);
                      } else {
                        singleMat.emissive.set(config.color);
                      }
                      singleMat.emissiveIntensity = 0.5;
                      materials.push(markRaw(singleMat));
                    }
                  });
                }
              });
              mesh.position.set(...config.position);
              if (scene.value) {
                scene.value.add(markRaw(mesh));
              }
              const originalPosition = new THREE.Vector3(...config.position);
              devices.value.push({
                config,
                materials,
                mainMesh: markRaw(mesh),
                originalPosition,
                anchorId: `anchor-${config.id}`
              });
            } catch (err) {
              console.error(`加载模型 ${config.id} 失败`, err);
            }
          }
        }
        const currentIds = new Set(newConfig.map((c) => c.id));
        const devicesToRemove = devices.value.filter((d) => !currentIds.has(d.config.id));
        if (devicesToRemove.length > 0) {
          devicesToRemove.forEach((device) => {
            if (scene.value) {
              scene.value.remove(device.mainMesh);
              device.mainMesh.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                  if (obj.geometry) obj.geometry.dispose();
                  if (obj.material) {
                    if (Array.isArray(obj.material)) {
                      obj.material.forEach((mat) => mat.dispose());
                    } else {
                      obj.material.dispose();
                    }
                  }
                }
              });
            }
          });
          devices.value = devices.value.filter((d) => currentIds.has(d.config.id));
        }
      },
      { deep: true }
    );
    const addRandomMesh = () => {
      const shapeMap = {
        box: "cube",
        sphere: "sphere",
        cone: "cone",
        cylinder: "cube",
        // 圆柱用立方体代替
        torus: "cube",
        // 圆环用立方体代替
        octahedron: "sphere",
        // 八面体用球体代替
        tetrahedron: "cone"
        // 四面体用圆锥代替
      };
      const shapes = ["box", "sphere", "cone", "cylinder", "torus", "octahedron", "tetrahedron"];
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const deviceType = shapeMap[shapeType] || "cube";
      const x = (Math.random() - 0.5) * 15;
      const y = Math.random() * 3 + 0.5;
      const z = (Math.random() - 0.5) * 15;
      const colors = [65535, 16711765, 4521728, 16755200, 11141375, 65450, 16711850];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const id = `random-mesh-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const nameMap = {
        box: "立方体",
        sphere: "球体",
        cone: "圆锥",
        cylinder: "圆柱",
        torus: "圆环",
        octahedron: "八面体",
        tetrahedron: "四面体"
      };
      const name = nameMap[shapeType] || "形状";
      const deviceConfig = {
        id,
        name,
        type: deviceType,
        color,
        position: [x, y, z],
        speed: 0.5 + Math.random() * 1.5,
        author: "随机生成"
      };
      return deviceConfig;
    };
    __expose({
      handleDeviceClick,
      addRandomMesh
    });
    return (_ctx, _cache) => {
      return null;
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,createTextVNode:_createTextVNode,normalizeStyle:_normalizeStyle,createCommentVNode:_createCommentVNode,unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createVNode:_createVNode,Suspense:_Suspense,withCtx:_withCtx,createBlock:_createBlock,resolveComponent:_resolveComponent,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1 = { class: "legend-container" };
const _hoisted_2 = { class: "legend-list" };
const _hoisted_3 = ["id", "onClick"];
const _hoisted_4 = ["id"];
const _hoisted_5 = { class: "legend-info" };
const _hoisted_6 = { class: "item-name" };
const _hoisted_7 = { class: "item-status" };
const _hoisted_8 = { class: "item-value" };
const {reactive,ref,computed} = await importShared('vue');
const title = "图例";
const panelWidth = "220px";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "legend",
  setup(__props) {
    const deviceConfig = ref([
      {
        id: "core-reactor",
        name: "T",
        type: "cube",
        color: 65535,
        position: [0, 0, 0],
        speed: 1,
        author: "Jsonco"
      },
      {
        id: "sensor-array",
        name: "V",
        type: "sphere",
        color: 16711765,
        position: [-4, 0, 2],
        speed: 1.5,
        author: "Jsonco"
      },
      {
        id: "storage-unit",
        name: "T",
        type: "cone",
        color: 4521728,
        position: [4, 0, -2],
        speed: 0.8,
        author: "Jsonco"
      }
    ]);
    const state = reactive({
      windowSize: true,
      alpha: true,
      antialias: true
    });
    const controlsState = reactive({
      enableDamping: true,
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      makeDefault: true,
      autoRotate: true,
      autoRotateSpeed: 0.5
    });
    const legendRef = ref(null);
    const panelPosition = { top: "20px", right: "20px" };
    const panelStyle = computed(() => {
      const pos = panelPosition || {};
      return {
        top: pos && typeof pos.top === "number" ? `${pos.top}px` : pos?.top || "20px",
        right: pos && typeof pos.right === "number" ? `${pos.right}px` : pos?.right || "20px",
        bottom: pos && typeof pos.bottom === "number" ? `${pos.bottom}px` : pos?.bottom || void 0,
        left: pos && typeof pos.left === "number" ? `${pos.left}px` : pos?.left || void 0,
        width: panelWidth
      };
    });
    const handleDeviceClick = (deviceId) => {
      if (legendRef.value) {
        legendRef.value.handleDeviceClick(deviceId);
      }
    };
    const handleAddRandomMesh = () => {
      if (legendRef.value) {
        const newDeviceConfig = legendRef.value.addRandomMesh();
        if (newDeviceConfig) {
          deviceConfig.value.push(newDeviceConfig);
        }
      }
    };
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", {
          class: "legend-panel",
          style: _normalizeStyle(panelStyle.value)
        }, [
          _createElementVNode("div", { class: "legend-header" }, [
            _createElementVNode("span", { class: "legend-title" }, _toDisplayString(title)),
            _createElementVNode("button", {
              class: "add-mesh-btn",
              onClick: handleAddRandomMesh
            }, [..._cache[0] || (_cache[0] = [
              _createElementVNode("span", { class: "btn-icon" }, "+", -1),
              _createElementVNode("span", { class: "btn-text" }, "添加随机形状", -1)
            ])])
          ]),
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(deviceConfig.value, (device) => {
              return _openBlock(), _createElementBlock("div", {
                key: device.id,
                id: `item-${device.id}`,
                class: "legend-item",
                onClick: ($event) => handleDeviceClick(device.id)
              }, [
                _createElementVNode("div", {
                  id: `anchor-${device.id}`,
                  class: "legend-icon-anchor"
                }, null, 8, _hoisted_4),
                _createElementVNode("div", _hoisted_5, [
                  _createElementVNode("span", _hoisted_6, _toDisplayString(device.name), 1),
                  _createElementVNode("span", _hoisted_7, [
                    _cache[1] || (_cache[1] = _createTextVNode(" Author: ", -1)),
                    _createElementVNode("span", _hoisted_8, _toDisplayString(device.author), 1)
                  ])
                ]),
                device.color ? (_openBlock(), _createElementBlock("div", {
                  key: 0,
                  class: "corner-deco",
                  style: _normalizeStyle({ borderColor: `#${device.color.toString(16).padStart(6, "0")}` })
                }, null, 4)) : _createCommentVNode("", true)
              ], 8, _hoisted_3);
            }), 128))
          ])
        ], 4),
        _createVNode(_component_TresCanvas, _mergeProps({ clearColor: "#1A1A1A" }, state), {
          default: _withCtx(() => [
            _cache[2] || (_cache[2] = _createElementVNode("TresPerspectiveCamera", {
              fov: 60,
              near: 0.1,
              far: 1e3,
              position: [0, 5, 10]
            }, null, -1)),
            _cache[3] || (_cache[3] = _createElementVNode("TresAmbientLight", { intensity: 0.8 }, null, -1)),
            _createVNode(_unref(Kk), _normalizeProps(_guardReactiveProps(controlsState)), null, 16),
            (_openBlock(), _createBlock(_Suspense, null, {
              default: _withCtx(() => [
                _createVNode(_sfc_main$1, {
                  ref_key: "legendRef",
                  ref: legendRef,
                  "device-config": deviceConfig.value
                }, null, 8, ["device-config"])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 16)
      ]);
    };
  }
});

const legend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd9b39fa"]]);

export { legend as default };
//# sourceMappingURL=legend.BN3FuIHB1767105581793.js.map
