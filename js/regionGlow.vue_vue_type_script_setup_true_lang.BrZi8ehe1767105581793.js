import { importShared } from './index.BxB45aCK1767105581793.js';
import { LineGeometry, Line2 } from './Line2.BapQCq2s1767105581793.js';
import { LineMaterial } from './LineSegments2.3MkrpAcm1767105581793.js';
import { resetUV } from './utils.-sNu4bkd1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["object", "rotation-x"];
const _hoisted_2 = ["object", "rotation-x"];
const THREE = await importShared('three');
const {watchEffect} = await importShared('vue');

const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "regionGlow",
  props: {
    positionSrc: { default: [[0, 0], [1, 1]] },
    color: { default: "#ffff00" }
  },
  setup(__props) {
    const props = __props;
    const shape = new THREE.Shape();
    props.positionSrc.forEach((item, idx) => {
      if (idx === 0) shape.moveTo(item[0], item[1]);
      else shape.lineTo(item[0], item[1]);
    });
    const material = new THREE.ShaderMaterial({
      vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    varying vec2 vUv;
		uniform vec3 color;
    void main() {
			// 计算距离四条边的最小距离
        float distance = max(max(vUv.x, -vUv.x), max(vUv.y, -vUv.y));

        // 将距离映射到透明度（从边缘到中心逐渐变透明）
        float alpha = smoothstep(0.1, 0.9, distance*1.1);

        // 设置最终颜色和透明度
        gl_FragColor = vec4(color, alpha);
    }
  `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: true,
      uniforms: {
        color: {
          type: "uvs",
          value: new THREE.Color(props.color)
        }
      }
    });
    let geometry = new THREE.ShapeGeometry(shape);
    resetUV(geometry, true);
    const fakeGlowMesh = new THREE.Mesh(
      geometry,
      material
      // new THREE.MeshBasicMaterial({
      // 	color: 0x00ff00,
      // 	transparent: true,
      // 	side: THREE.DoubleSide,
      // }),
    );
    const linePoints = shape.getPoints();
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions(linePoints.flatMap((p) => [p.x, p.y, 0]));
    var lineMaterial = new LineMaterial({
      color: new THREE.Color(props.color),
      linewidth: 2
    });
    const line2Mesh = new Line2(lineGeometry, lineMaterial);
    watchEffect(() => {
      material.uniforms.color.value = new THREE.Color(props.color);
      lineMaterial.color = new THREE.Color(props.color);
    });
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("TresGroup", null, [
        _createElementVNode("primitive", {
          object: _unref(fakeGlowMesh),
          renderOrder: 9999,
          "rotation-x": Math.PI / 2
        }, null, 8, _hoisted_1),
        _createElementVNode("primitive", {
          object: _unref(line2Mesh),
          renderOrder: 9999,
          "rotation-x": Math.PI / 2
        }, null, 8, _hoisted_2)
      ]);
    };
  }
});

export { _sfc_main };
//# sourceMappingURL=regionGlow.vue_vue_type_script_setup_true_lang.BrZi8ehe1767105581793.js.map
