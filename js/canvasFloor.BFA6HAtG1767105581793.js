import { importShared, _l, Kk } from './index.BxB45aCK1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

/* eslint-disable import/no-mutable-exports */
/*
 * @Description: 
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2024-03-22 09:39:40
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2024-03-22 11:02:51
 */
function rand (min, max) {
	return Math.random() * (max - min) + min
}

function randInt (min, max) {
	return Math.floor(min + Math.random() * (max - min + 1))
}

let width$1 = 0;
let height$1 = 0;
let ctx = null;
const size = 30;
let tick = 0;
const lines = [];
let lineSpeed = 10;

class Line {
	constructor() {
		this.path = [];
		this.rspeed = rand(1, 2);
		this.count = randInt(10, 30);
		this.x = width$1 / 2 + 1;
		this.y = height$1 / 2 + 1;
		this.target = {
			x: width$1 / 2,
			y: height$1 / 2
		};
		this.dist = 0;
		this.angle = 0;
		this.hue = tick / 5;
		this.life = 1;
		this.updateAngle();
		this.updateDist();
	}

	step (i) {
		this.speed = this.rspeed * lineSpeed;
		this.x += Math.cos(this.angle) * this.speed;
		this.y += Math.sin(this.angle) * this.speed;

		this.updateDist();

		if (this.dist < this.speed) {
			this.x = this.target.x;
			this.y = this.target.y;
			this.changeTarget();
		}

		this.path.push({
			x: this.x,
			y: this.y
		});
		if (this.path.length > this.count) {
			this.path.shift();
		}

		this.life -= 0.001;

		if (this.life <= 0) {
			this.path = null;
			lines.splice(i, 1);
		}
	}

	updateDist () {
		const dx = this.target.x - this.x;
		const dy = this.target.y - this.y;
		this.dist = Math.sqrt(dx * dx + dy * dy);
	}

	updateAngle () {
		const dx = this.target.x - this.x;
		const dy = this.target.y - this.y;
		this.angle = Math.atan2(dy, dx);
	}

	changeTarget () {
		const randStart = randInt(0, 3);
		switch (randStart) {
			case 0: // up
				this.target.y = this.y - size;
				break;
			case 1: // right
				this.target.x = this.x + size;
				break;
			case 2: // down
				this.target.y = this.y + size;
				break;
			case 3: // left
				this.target.x = this.x - size;
				break;
		}
		this.updateAngle();
	}

	draw () {
		ctx.beginPath();
		const rando = rand(0, 10);
		for (let j = 0, length = this.path.length; j < length; j++) {
			ctx[(j === 0) ? 'moveTo' : 'lineTo'](this.path[j].x + rand(-rando, rando), this.path[j].y + rand(-rando, rando));
		}
		let hueTmp = this.hue;
		// hueTmp = 240;
		// ctx.strokeStyle = `hsla(${rand(hueTmp - 30, hueTmp)}, 80%, 55%, ${this.life / 3})`;
		hueTmp = 30;
		ctx.strokeStyle = `hsla(${rand(hueTmp - 30, hueTmp)}, 0%, 80%, ${this.life / 3})`;
		ctx.lineWidth = rand(0.1, 2);
		ctx.stroke();
	}
}

const intLightningPattern = (w, h, c, s) => {
	width$1 = w;
	height$1 = h;
	ctx = c;
	tick = 0;
	lineSpeed = s;

	for (let index = 0; index < 10; index++) {
		lines.push(new Line());
	}
};
const setSpeed = (s) => {
	lineSpeed = s;
};

function create () {
	if (tick % 10 === 0) {
		lines.push(new Line());
	}
}
function step () {
	let i = lines.length;
	while (i--) {
		lines[i].step(i);
	}
}
function clear () {
	ctx.globalCompositeOperation = 'destination-out';
	ctx.fillStyle = 'hsla(0, 0%, 10%, 0.1)';
	ctx.fillRect(0, 0, width$1, height$1);
	ctx.globalCompositeOperation = 'lighter';
}
function draw () {
	ctx.save();
	ctx.translate(width$1 / 2, height$1 / 2);
	// ctx.rotate(tick * 0.001)
	// const scale = 1.2 + Math.cos(tick * 0.02) * 0.2
	// ctx.scale(scale, scale)
	ctx.translate(-width$1 / 2, -height$1 / 2);
	let i = lines.length;
	while (i--) {
		lines[i].draw(i);
	}
	ctx.restore();
}
const loopLightningPattern = () => {
	create();
	step();
	clear();
	draw();
	tick++;
};

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,normalizeProps:_normalizeProps$1,guardReactiveProps:_guardReactiveProps$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = ["rotation-x"];
const _hoisted_2 = ["args"];
const THREE = await importShared('three');

const {watch,reactive: reactive$1,createVNode,render} = await importShared('vue');
const width = 1024;
const height = 768;
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "lightningPattern",
  props: {
    size: { default: [10, 10] },
    color: { default: "#fff" },
    opacity: { default: 0.95 },
    textureRepeat: { default: [1, 1] },
    speed: { default: 10 }
  },
  setup(__props) {
    const props = __props;
    const floorNode = createVNode("canvas", { width, height, style: { backgroundColor: "green" } });
    render(floorNode, document.createElement("div"));
    intLightningPattern(width, height, floorNode.el.getContext("2d"), props.speed);
    const floorTexture = new THREE.CanvasTexture(floorNode.el);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(props.textureRepeat[0], props.textureRepeat[1]);
    const tmsMaterial = reactive$1({
      color: props.color,
      map: floorTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: props.opacity,
      blending: THREE.AdditiveBlending,
      flatShading: true,
      depthTest: true
    });
    watch(
      () => props.color,
      (newVal) => {
        tmsMaterial.color = new THREE.Color(newVal);
      }
    );
    watch(
      () => props.opacity,
      (newVal) => {
        tmsMaterial.opacity = newVal;
      }
    );
    watch(
      () => props.speed,
      (newVal) => {
        setSpeed(props.speed);
      }
    );
    const { onBeforeRender } = _l();
    onBeforeRender(() => {
      loopLightningPattern();
      floorTexture.needsUpdate = true;
    });
    return (_ctx, _cache) => {
      return _openBlock$1(), _createElementBlock("TresMesh", {
        "rotation-x": -Math.PI / 2
      }, [
        _createElementVNode$1("TresPlaneGeometry", {
          args: props.size
        }, null, 8, _hoisted_2),
        _createElementVNode$1("TresMeshStandardMaterial", _normalizeProps$1(_guardReactiveProps$1(tmsMaterial)), null, 16)
      ], 8, _hoisted_1);
    };
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createElementVNode:_createElementVNode,unref:_unref,createVNode:_createVNode,normalizeProps:_normalizeProps,guardReactiveProps:_guardReactiveProps,resolveComponent:_resolveComponent,withCtx:_withCtx,openBlock:_openBlock,createBlock:_createBlock} = await importShared('vue');

const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "canvasFloor",
  setup(__props) {
    const canvasState = reactive({
      color: "#1a79fe",
      opacity: 0.95,
      speed: 10
    });
    const paneControl = new Pane({
      title: "canvas地面",
      expanded: true
    });
    paneControl.addBinding(canvasState, "color", { label: "颜色" });
    paneControl.addBinding(canvasState, "opacity", {
      label: "透明度",
      min: 0,
      max: 1,
      step: 0.01
    });
    paneControl.addBinding(canvasState, "speed", {
      label: "速度",
      min: 0,
      max: 20,
      step: 1
    });
    return (_ctx, _cache) => {
      const _component_TresCanvas = _resolveComponent("TresCanvas");
      return _openBlock(), _createBlock(_component_TresCanvas, {
        clearColor: "#000000",
        "window-size": ""
      }, {
        default: _withCtx(() => [
          _cache[0] || (_cache[0] = _createElementVNode("TresPerspectiveCamera", {
            position: [15, 20, 0],
            fov: 45,
            near: 0.1,
            far: 1e4
          }, null, -1)),
          _createVNode(_unref(Kk), {
            enableDamping: "",
            "auto-rotate": ""
          }),
          _cache[1] || (_cache[1] = _createElementVNode("TresAmbientLight", { intensity: 6 }, null, -1)),
          _cache[2] || (_cache[2] = _createElementVNode("TresDirectionalLight", {
            position: [0, 8, 0],
            intensity: 1,
            color: "#fff"
          }, null, -1)),
          _cache[3] || (_cache[3] = _createElementVNode("TresMesh", { position: [0, 1, 0] }, [
            _createElementVNode("TresBoxGeometry", { args: [1, 1, 1] }),
            _createElementVNode("TresMeshNormalMaterial")
          ], -1)),
          _createVNode(_sfc_main$1, _normalizeProps(_guardReactiveProps(canvasState)), null, 16),
          _cache[4] || (_cache[4] = _createElementVNode("TresAxesHelper", {
            args: [10],
            position: [0, 0, 0]
          }, null, -1)),
          _cache[5] || (_cache[5] = _createElementVNode("TresGridHelper", {
            args: [10, 10],
            position: [0, 0, 0]
          }, null, -1))
        ]),
        _: 1
      });
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=canvasFloor.BFA6HAtG1767105581793.js.map
