import { importShared, Kk } from './index.BxB45aCK1767105581793.js';

const THREE = await importShared('three');


const parms = {
	segments: 30,
	w: 256,
	h: 256,
};
// 随机给出温度值 储存在2维数组
const getTemperature = () => {
	const temperatureArray = new Array();
	for (let i = 0; i < parms.segments; i++) {
		temperatureArray[i] = parseInt(Math.random() * 25 + 10);
	}
	return temperatureArray
};

// 绘制辐射圆
const drawCircular = (context, opts) => {
	let { x, y, radius, weight } = opts;
	radius = parseInt(radius * weight);

	// 创建圆设置填充色
	const rGradient = context.createRadialGradient(x, y, 0, x, y, radius);
	rGradient.addColorStop(0, "rgba(255, 255, 0, 1)");
	rGradient.addColorStop(1, "rgba(255, 0, 0, 0)");
	context.fillStyle = rGradient;

	// 设置globalAlpha
	context.globalAlpha = weight;
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.closePath();

	context.fill();
};

const getPaletteMap = () => {
	//颜色条的颜色分布
	const colorStops = {
		1.0: "#f00",
		0.8: "#e2fa00",
		0.6: "#33f900",
		0.3: "#0349df",
		0.0: "#fff"
	};

	//颜色条的大小
	const width = 256, height = 10;

	// 创建canvas
	const paletteCanvas = document.createElement("canvas");
	paletteCanvas.width = width;
	paletteCanvas.height = height;
	paletteCanvas.style.position = 'absolute';
	paletteCanvas.style.top = '0';
	paletteCanvas.style.right = '0';
	const ctx = paletteCanvas.getContext("2d");

	// 创建线性渐变色
	const linearGradient = ctx.createLinearGradient(0, 0, width, 0);
	for (const key in colorStops) {
		linearGradient.addColorStop(key, colorStops[key]);
	}

	// 绘制渐变色条
	ctx.fillStyle = linearGradient;
	ctx.fillRect(0, 0, width, height);

	document.body.appendChild(paletteCanvas);

	const paletteTexture = new THREE.Texture(paletteCanvas);
	paletteTexture.minFilter = THREE.NearestFilter;
	paletteTexture.needsUpdate = true;

	return paletteTexture
};

// 获取透明度阶梯图 单色
const getAlphaScaleMap = () => {
	const canvas = document.createElement("canvas");
	canvas.width = parms.w;
	canvas.height = parms.h;
	canvas.style.position = 'absolute';
	canvas.style.top = '20px';
	canvas.style.right = '0';
	const context = canvas.getContext("2d");
	// 随机生成温度
	const tenperature = getTemperature();
	// 绘制透明度阶梯图
	for (let i = 0; i < parms.segments; i++) {
		// 计算出当前温度占标准温度的权值
		const weight = tenperature[i] / 35;
		const x = Math.random() * parms.w;
		const y = Math.random() * parms.h;
		drawCircular(context, {
			x,
			y,
			radius: 80,
			weight
		});
	}
	document.body.appendChild(canvas);
	const tex = new THREE.Texture(canvas);
	tex.minFilter = THREE.NearestFilter;
	tex.needsUpdate = true;
	return tex
};

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,mergeProps:_mergeProps,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');
const {PCFSoftShadowMap,SRGBColorSpace,DoubleSide} = await importShared('three');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "simpleExample",
  setup(__props) {
    const gl = {
      clearColor: "#030311",
      shadows: true,
      alpha: false,
      outputColorSpace: SRGBColorSpace,
      shadowMapType: PCFSoftShadowMap,
      useLegacyLights: true
    };
    const shader = {
      transparent: true,
      side: DoubleSide,
      vertexShader: `
	varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
      fragmentShader: `
	#ifdef GL_ES
  precision highp float;
  #endif
  varying vec2 vUv;
  uniform sampler2D alphaScaleMap;
  uniform sampler2D paletteMap;
  void main() {
    vec4 alphaColor = texture2D(alphaScaleMap, vUv);
    vec4 color = texture2D(paletteMap, vec2(alphaColor.a, 0.0));
    gl_FragColor = vec4(color.r, color.g, color.b, alphaColor.a);
	}`,
      uniforms: {
        "alphaScaleMap": {
          type: "t",
          value: getAlphaScaleMap()
        },
        "paletteMap": {
          type: "t",
          value: getPaletteMap()
        }
      }
    };
    function onPointerMove(ev) {
      if (ev) {
        console.log(ev);
      }
    }
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, _mergeProps(gl, { "window-size": "" }), {
        default: _withCtx(() => [
          _cache[1] || (_cache[1] = _createElementVNode("TresPerspectiveCamera", {
            position: [0, 0, 3e3],
            fov: 40,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), {
            autoRotate: true,
            autoRotateSpeed: 2
          }),
          _cache[2] || (_cache[2] = _createElementVNode("TresAmbientLight", {
            color: "#eef0ff",
            intensity: 1
          }, null, -1)),
          _createElementVNode("TresMesh", {
            position: [0, 0, 10],
            onPointerMove
          }, [
            _cache[0] || (_cache[0] = _createElementVNode("TresPlaneGeometry", { args: [1500, 1500] }, null, -1)),
            _createElementVNode("TresShaderMaterial", _normalizeProps(_guardReactiveProps(shader)), null, 16)
          ], 32)
        ]),
        _: 1
      }, 16);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=simpleExample.DoFKe6p-1767105581793.js.map
