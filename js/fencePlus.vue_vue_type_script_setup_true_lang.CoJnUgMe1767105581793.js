import { importShared, _l } from './index.BxB45aCK1767105581793.js';
import { mergeGeometries } from './BufferGeometryUtils.NxcZsV4J1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["geometry"];
const THREE = await importShared('three');
const {watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "fencePlus",
  props: {
    width: { default: 100 },
    height: { default: 100 },
    depth: { default: 100 },
    color: { default: "#ffff00" },
    opacity: { default: 1 },
    thickness: { default: 0.99 },
    room: { default: 0.7 },
    num: { default: 8 },
    speed: { default: 0.15 }
  },
  setup(__props) {
    const props = __props;
    const rippleShader = {
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending,
      vertexShader: `
		precision highp float;
		precision highp int;
		varying vec2 vUv;
		void main() {
			vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
`,
      fragmentShader: `
				precision highp float;
				precision highp int;
				uniform float time;
				uniform float opacity;
				uniform vec3 color;
				uniform float num;
				uniform float thickness;
				uniform float speed;
				uniform float room;
				varying vec2 vUv;
				void main() {
					vec4 fragColor = vec4(0.);
					float sinnum = sin((vUv.y - time * speed) * 10. * num);

					vec4 wcolor = vec4(mix(color, vec3(1., 1., 1.), 0.9),1.0);

					vec3 fade = mix(color, vec3(1., 1., 1.), vUv.y);
                    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
                    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));

					if(vUv.y < room){
						float alpha = smoothstep(1.0 - thickness - 0.1, 1.0 - thickness, sinnum);
						fragColor = mix(gl_FragColor, wcolor, alpha);
						fragColor.a = fragColor.a * opacity;
						gl_FragColor = fragColor;
					}
				}
		`,
      uniforms: {
        time: {
          type: "pv2",
          value: 0
        },
        color: {
          type: "uvs",
          value: new THREE.Color(props.color)
        },
        opacity: {
          value: props.opacity
        },
        num: {
          value: props.num
        },
        thickness: {
          value: props.thickness
        },
        speed: {
          value: props.speed
        },
        room: {
          value: props.room
        }
      }
    };
    let geometriesMesh = null;
    function createRectFrameGeometryWithUV(width, depth, height) {
      const geometries = [];
      const createWall = (w, h) => {
        const geo = new THREE.PlaneGeometry(w, h, 1, 1);
        const uvs = [];
        uvs.push(0, 1);
        uvs.push(1, 1);
        uvs.push(0, 0);
        uvs.push(1, 0);
        geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
        return geo;
      };
      const front = createWall(width, height);
      front.rotateY(Math.PI);
      front.translate(0, height / 2, -depth / 2);
      geometries.push(front);
      const back = createWall(width, height);
      back.translate(0, height / 2, depth / 2);
      geometries.push(back);
      const left = createWall(depth, height);
      left.rotateY(Math.PI / 2);
      left.translate(-width / 2, height / 2, 0);
      geometries.push(left);
      const right = createWall(depth, height);
      right.rotateY(-Math.PI / 2);
      right.translate(width / 2, height / 2, 0);
      geometries.push(right);
      const merged = mergeGeometries(geometries, true);
      return merged;
    }
    geometriesMesh = createRectFrameGeometryWithUV(props.width, props.depth, props.height);
    const { onBeforeRender } = _l();
    onBeforeRender(({ delta }) => {
      rippleShader.uniforms.time.value += delta;
    });
    watch(
      () => [props.color, props.opacity, props.num, props.thickness, props.speed, props.room],
      ([color, opacity, num, thickness, speed, room]) => {
        rippleShader.uniforms.color.value = new THREE.Color(color);
        rippleShader.uniforms.opacity.value = opacity;
        rippleShader.uniforms.num.value = num;
        rippleShader.uniforms.thickness.value = thickness;
        rippleShader.uniforms.speed.value = speed;
        rippleShader.uniforms.room.value = room;
      }
    );
    watch(
      () => [props.width, props.depth, props.height],
      ([width, depth, height]) => {
        geometriesMesh = createRectFrameGeometryWithUV(width, depth, height);
      }
    );
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresMesh", {
        renderOrder: 2e3,
        geometry: _unref(geometriesMesh)
      }, [
        _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(rippleShader)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=fencePlus.vue_vue_type_script_setup_true_lang.CoJnUgMe1767105581793.js.map
