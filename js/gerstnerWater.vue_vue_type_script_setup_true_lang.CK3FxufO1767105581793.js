import { importShared, Fs, _l } from './index.BxB45aCK1767105581793.js';
import { Water } from './Water.CBGqZRZ_1767105581793.js';

var vertex_default="uniform mat4 textureMatrix;\n            uniform float time;\n\n            varying vec4 mirrorCoord;\n            varying vec4 worldPosition;\n\n            #include <common>\n            #include <fog_pars_vertex>\n            #include <shadowmap_pars_vertex>\n            #include <logdepthbuf_pars_vertex>\n\n            uniform vec4 waveA;\n            uniform vec4 waveB;\n            uniform vec4 waveC;\n\n            vec3 GerstnerWave (vec4 wave, vec3 p) {\n            	float steepness = wave.z;\n            	float wavelength = wave.w;\n            	float k = 2.0 * PI / wavelength;\n            	float c = sqrt(9.8 / k);\n            	vec2 d = normalize(wave.xy);\n            	float f = k * (dot(d, p.xy) - c * time);\n            	float a = steepness / k;\n\n            	return vec3(\n            		d.x * (a * cos(f)),\n            		d.y * (a * cos(f)),\n            		a * sin(f)\n            	);\n            }\n\n            void main() {\n            	mirrorCoord = modelMatrix * vec4( position, 1.0 );\n            	worldPosition = mirrorCoord.xyzw;\n            	mirrorCoord = textureMatrix * mirrorCoord;\n\n            	vec3 p = position.xyz;\n            	p += GerstnerWave(waveA, position.xyz);\n            	p += GerstnerWave(waveB, position.xyz);\n            	p += GerstnerWave(waveC, position.xyz);\n            	gl_Position = projectionMatrix * modelViewMatrix * vec4( p.x, p.y, p.z, 1.0);\n\n            	#include <beginnormal_vertex>\n            	#include <defaultnormal_vertex>\n            	#include <logdepthbuf_vertex>\n            	#include <fog_vertex>\n            	#include <shadowmap_vertex>\n            }";

var fragment_default="uniform sampler2D mirrorSampler;\n            uniform float alpha;\n            uniform float time;\n            uniform float size;\n            uniform float distortionScale;\n            uniform sampler2D normalSampler;\n            uniform vec3 sunColor;\n            uniform vec3 sunDirection;\n            uniform vec3 eye;\n            uniform vec3 waterColor;\n\n            varying vec4 mirrorCoord;\n            varying vec4 worldPosition;\n\n            vec4 getNoise( vec2 uv ) {\n                vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);\n                vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );\n                vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );\n                vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );\n                vec4 noise = texture2D( normalSampler, uv0 ) +\n                    texture2D( normalSampler, uv1 ) +\n                    texture2D( normalSampler, uv2 ) +\n                    texture2D( normalSampler, uv3 );\n                return noise * 0.5 - 1.0;\n            }\n\n            void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {\n                vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );\n                float direction = max( 0.0, dot( eyeDirection, reflection ) );\n                specularColor += pow( direction, shiny ) * sunColor * spec;\n                diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;\n            }\n\n            #include <common>\n            #include <packing>\n            #include <bsdfs>\n            #include <fog_pars_fragment>\n            #include <logdepthbuf_pars_fragment>\n            #include <lights_pars_begin>\n            #include <shadowmap_pars_fragment>\n            #include <shadowmask_pars_fragment>\n\n            void main() {\n\n                #include <logdepthbuf_fragment>\n                vec4 noise = getNoise( worldPosition.xz * size );\n                vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );\n\n                vec3 diffuseLight = vec3(0.0);\n                vec3 specularLight = vec3(0.0);\n\n                vec3 worldToEye = eye-worldPosition.xyz;\n                vec3 eyeDirection = normalize( worldToEye );\n                sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );\n\n                float distance = length(worldToEye);\n\n                vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;\n                vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );\n\n                float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );\n                float rf0 = 0.3;\n                float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );\n                vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;\n                vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);\n                vec3 outgoingLight = albedo;\n                gl_FragColor = vec4( outgoingLight, alpha );\n\n                #include <tonemapping_fragment>\n                #include <fog_fragment>\n            }";

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const {watch,ref} = await importShared('vue');

const THREE = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "gerstnerWater",
  props: {
    distortionScale: {
      default: 3.7
    },
    size: {
      default: 1
    },
    wireframe: {
      default: false
    },
    sunDirection: {
      default: { x: 0, y: 0, z: 0 }
    },
    sunColor: {
      default: "#ffffff"
    },
    waterColor: {
      default: "#001e0f"
    },
    waves: {
      type: Object,
      default: {
        A: {
          direction: 0,
          steepness: 0.4,
          wavelength: 60
        },
        B: {
          direction: 30,
          steepness: 0.4,
          wavelength: 30
        },
        C: {
          direction: 60,
          steepness: 0.4,
          wavelength: 15
        }
      }
    },
    meshUUIDList: {
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const { scene } = Fs();
    const waterGeometry = new THREE.PlaneGeometry(1024, 1024, 256, 256);
    const water = new Water(waterGeometry, {
      textureWidth: 256,
      textureHeight: 256,
      waterNormals: new THREE.TextureLoader().load(
        "./plugins/water/images/waternormals.jpg",
        function(texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3().fromArray([props.sunDirection.x, props.sunDirection.y, props.sunDirection.z]),
      sunColor: props.sunColor,
      waterColor: props.waterColor,
      distortionScale: props.distortionScale,
      fog: scene.value.fog !== void 0
    });
    const environment = ref(null);
    Object.defineProperty(scene.value, "environment", {
      get() {
        return environment.value;
      },
      set(v) {
        environment.value = v;
      }
    });
    watch(environment, (newVal) => {
      console.log("环境贴图变化 :", newVal);
      scene.value.background = scene.value.environment;
    });
    water.material.onBeforeCompile = function(shader) {
      shader.uniforms.waveA = {
        value: [
          Math.sin(props.waves.A.direction * Math.PI / 180),
          Math.cos(props.waves.A.direction * Math.PI / 180),
          props.waves.A.steepness,
          props.waves.A.wavelength
        ]
      };
      shader.uniforms.waveB = {
        value: [
          Math.sin(props.waves.B.direction * Math.PI / 180),
          Math.cos(props.waves.B.direction * Math.PI / 180),
          props.waves.B.steepness,
          props.waves.B.wavelength
        ]
      };
      shader.uniforms.waveC = {
        value: [
          Math.sin(props.waves.C.direction * Math.PI / 180),
          Math.cos(props.waves.C.direction * Math.PI / 180),
          props.waves.C.steepness,
          props.waves.C.wavelength
        ]
      };
      shader.vertexShader = vertex_default;
      shader.fragmentShader = fragment_default;
    };
    watch(
      () => [props.size, props.waterColor],
      ([size, waterColor]) => {
        water.material.uniforms["size"].value = size;
        water.material.uniforms["waterColor"].value.set(waterColor);
      },
      { immediate: true }
    );
    watch(
      () => props.wireframe,
      (wireframe) => {
        water.material.wireframe = wireframe;
      },
      { immediate: true }
    );
    watch(
      () => props.waves,
      (waves) => {
        water.material.uniforms.waveA.value = [
          Math.sin(waves.A.direction * Math.PI / 180),
          Math.cos(waves.A.direction * Math.PI / 180),
          waves.A.steepness,
          waves.A.wavelength
        ];
        water.material.uniforms.waveB.value = [
          Math.sin(waves.B.direction * Math.PI / 180),
          Math.cos(waves.B.direction * Math.PI / 180),
          waves.B.steepness,
          waves.B.wavelength
        ];
        water.material.uniforms.waveC.value = [
          Math.sin(waves.C.direction * Math.PI / 180),
          Math.cos(waves.C.direction * Math.PI / 180),
          waves.C.steepness,
          waves.C.wavelength
        ];
      },
      { deep: true }
    );
    function getWaveInfo(x, z, time) {
      const pos = new THREE.Vector3();
      const tangent = new THREE.Vector3(1, 0, 0);
      const binormal = new THREE.Vector3(0, 0, 1);
      Object.keys(props.waves).forEach((wave) => {
        const w = props.waves[wave];
        const k = Math.PI * 2 / w.wavelength;
        const c = Math.sqrt(9.8 / k);
        const d = new THREE.Vector2(
          Math.sin(w.direction * Math.PI / 180),
          -Math.cos(w.direction * Math.PI / 180)
        );
        const f = k * (d.dot(new THREE.Vector2(x, z)) - c * time);
        const a = w.steepness / k;
        pos.x += d.y * (a * Math.cos(f));
        pos.y += a * Math.sin(f);
        pos.z += d.x * (a * Math.cos(f));
        tangent.x += -d.x * d.x * (w.steepness * Math.sin(f));
        tangent.y += d.x * (w.steepness * Math.cos(f));
        tangent.z += -d.x * d.y * (w.steepness * Math.sin(f));
        binormal.x += -d.x * d.y * (w.steepness * Math.sin(f));
        binormal.y += d.y * (w.steepness * Math.cos(f));
        binormal.z += -d.y * d.y * (w.steepness * Math.sin(f));
      });
      const normal = binormal.cross(tangent).normalize();
      return {
        position: pos,
        normal
      };
    }
    const meshList = [];
    window.globalTvtFun = window.globalTvtFun || {};
    window.globalTvtFun.gerstnerWater_updateMeshList = (resetAll = false) => {
      if (!resetAll && meshList.length > 0) {
        props.meshUUIDList.forEach((i) => {
          const item = scene.value.getObjectByProperty("uuid", i.uuid);
          if (item) {
            const meshItem = meshList.find((m) => m.mesh.uuid === i.uuid);
            if (meshItem) {
              item.position.copy(meshItem.defaultPosition);
              item.quaternion.copy(meshItem.defaultQuaternion);
            }
          }
        });
      }
      meshList.length = 0;
      props.meshUUIDList.forEach((i) => {
        const item = scene.value.getObjectByProperty("uuid", i.uuid);
        if (item) {
          let floatScale = 1;
          let yOffsetScale = 1;
          if (i.floatScale != null && i.floatScale !== "") {
            floatScale = i.floatScale;
          }
          if (i.yOffsetScale != null && i.yOffsetScale !== "") {
            yOffsetScale = i.yOffsetScale;
          }
          meshList.push({ mesh: item, floatScale, yOffsetScale, defaultPosition: item.position.clone(), defaultQuaternion: item.quaternion.clone() });
        }
      });
    };
    watch(
      () => props.meshUUIDList,
      () => {
        window.globalTvtFun.gerstnerWater_updateMeshList();
      },
      { immediate: true, deep: true }
    );
    const curUp = new THREE.Vector3(0, 1, 0);
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      water.material.uniforms["time"].value += 0.01;
      meshList.forEach((item) => {
        const b = item.mesh;
        const scale = item.floatScale;
        const waveInfo = getWaveInfo(b.position.x, b.position.z, water.material.uniforms["time"].value);
        b.position.y = waveInfo.position.y * item.yOffsetScale;
        const n = waveInfo.normal.clone().normalize();
        const targetQuat = new THREE.Quaternion().setFromUnitVectors(curUp, n);
        if (scale !== 1) {
          const current = b.quaternion.clone();
          targetQuat.slerp(current, 1 - scale);
        }
        b.quaternion.slerp(targetQuat, 0.01 * item.floatScale);
      });
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("primitive", {
          object: _unref(water),
          "rotation-x": -Math.PI / 2
        }, null, 8, _hoisted_1)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=gerstnerWater.vue_vue_type_script_setup_true_lang.CK3FxufO1767105581793.js.map
