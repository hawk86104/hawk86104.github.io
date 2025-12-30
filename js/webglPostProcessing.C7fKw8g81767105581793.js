import { importShared } from './index.BxB45aCK1767105581793.js';
import { initShaders, create, ortho, lookAt, translate, scale } from './ice-utils.DaRUkx8a1767105581793.js';
import { Pane } from './tweakpane.Cvt5w0bb1767105581793.js';

var post_process_default$1="precision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\nuniform float mixParam;\nvoid main()\n{\n    \n    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);\n    gl_FragColor=color;\n}";

var post_process_default="attribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=vec4(aPosition,1.);\n}";

var tex_quad_default$1="attribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nuniform mat4 uProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);\n}";

var tex_quad_default="precision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\n\nvoid main()\n{\n    gl_FragColor=texture2D(textureSampler,texCoords);\n}";

const {defineComponent:_defineComponent} = await importShared('vue');

const {unref:_unref,createElementVNode:_createElementVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { id: "canvaswebgl" };
const _hoisted_2 = ["src"];
const {reactive} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "webglPostProcessing",
  setup(__props) {
    let publicPath = "./";
    let canvas;
    let gl;
    let quadProgram;
    let quadVAO;
    let postProcessVao;
    let postProcessProgram;
    let framebuffer;
    let framebufferTexture;
    let materialProjectionMatrixLocation;
    let materialViewMatrixLocation;
    let materialModelMatrixLocation;
    let mixParamLocation;
    let catTexture;
    const clearColor1 = { r: 1, g: 0.71, b: 0.76 };
    const paneControl = new Pane({
      title: "参数"
    });
    const PARAMS = reactive({
      hidden: true,
      offset_right_top: { x: 0.5, y: 0.5 },
      offset_right_bottom: { x: 0.5, y: 0.5 },
      offset_left_top: { x: 0.5, y: 0.5 },
      offset_left_bottom: { x: 0.5, y: 0.5 },
      overlay: { r: 1, g: 0, b: 0.33 }
    });
    paneControl.addBlade({
      view: "slider",
      label: "颜色",
      min: 0,
      max: 1,
      value: 0.5
    }).on("change", (ev) => {
      postProcessSetup();
      gl.uniform1f(mixParamLocation, ev.value);
    });
    let dataPostProcess = new Float32Array([
      // x   y   z    t  s
      0.5,
      0.5,
      0,
      1,
      1,
      //  1
      0.5,
      -0.5,
      0,
      1,
      0,
      //  2
      -0.5,
      -0.5,
      0,
      0,
      0,
      //  3
      -0.5,
      0.5,
      0,
      0,
      1
      //  4
    ]);
    paneControl.addBinding(PARAMS, "hidden", {
      label: "是否后处理"
    });
    paneControl.addBinding(PARAMS, "offset_right_top", {
      picker: "inline",
      x: { min: 0, max: 1 },
      y: { min: 0, max: 1 }
    }).on("change", (ev) => {
      dataPostProcess[0] = PARAMS.offset_right_top.x;
      dataPostProcess[1] = PARAMS.offset_right_top.y;
      postProcessSetup();
    });
    paneControl.addBinding(PARAMS, "offset_right_bottom", {
      picker: "inline",
      x: { min: -1, max: 1 },
      y: { min: -1, max: 1 }
    }).on("change", (ev) => {
      dataPostProcess[5] = PARAMS.offset_right_bottom.x;
      dataPostProcess[6] = PARAMS.offset_right_bottom.y;
      postProcessSetup();
    });
    paneControl.addBinding(PARAMS, "offset_left_bottom", {
      picker: "inline",
      x: { min: -1, max: 1 },
      y: { min: -1, max: 1 }
    }).on("change", (ev) => {
      dataPostProcess[10] = PARAMS.offset_left_bottom.x;
      dataPostProcess[11] = PARAMS.offset_left_bottom.y;
      postProcessSetup();
    });
    paneControl.addBinding(PARAMS, "offset_left_top", {
      picker: "inline",
      x: { min: -1, max: 1 },
      y: { min: -1, max: 1 }
    }).on("change", (ev) => {
      dataPostProcess[15] = PARAMS.offset_left_top.x;
      dataPostProcess[16] = PARAMS.offset_left_top.y;
      postProcessSetup();
    });
    const main = function() {
      canvas = document.querySelector("#canvaswebgl");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl = canvas.getContext("webgl");
      if (!gl) {
        return;
      }
      setDatas();
      postProcessSetup();
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      draw();
    };
    function draw() {
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.clearColor(clearColor1.r, clearColor1.g, clearColor1.b, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      drawScene();
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      if (PARAMS.hidden) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.clearColor(0, 0, 1, 1);
        gl.bindBuffer(gl.ARRAY_BUFFER, postProcessVao);
        gl.useProgram(postProcessProgram);
        gl.bindTexture(gl.TEXTURE_2D, framebufferTexture);
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
      requestAnimationFrame(draw);
    }
    function drawScene() {
      gl.useProgram(quadProgram);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadVAO);
      const projection = create();
      ortho(projection, 0, canvas.width, canvas.height, 0, 0.1, 100);
      gl.uniformMatrix4fv(materialProjectionMatrixLocation, false, projection);
      const view = create();
      lookAt(view, [0, 0, 1], [0, 0, 0], [0, 1, 0]);
      gl.uniformMatrix4fv(materialViewMatrixLocation, false, view);
      drawQuad(catTexture, 600, 600);
      drawQuad(catTexture, 400, 400);
    }
    function drawQuad(texture, posX, posY) {
      let model = create();
      translate(model, model, [posX, posY, 0]);
      scale(model, model, [250, 250, 0]);
      gl.uniformMatrix4fv(materialModelMatrixLocation, false, model);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
    }
    function setDatas() {
      const data = new Float32Array([
        // x   y   z    t  s
        0.5,
        0.5,
        0,
        1,
        1,
        //  1
        0.5,
        -0.5,
        0,
        1,
        0,
        //  2
        -0.5,
        -0.5,
        0,
        0,
        0,
        //  3
        -0.5,
        0.5,
        0,
        0,
        1
        //  4
      ]);
      const iData = new Uint8Array([0, 1, 2, 0, 2, 3]);
      quadVAO = createVAO(data, iData);
      quadProgram = initShaders(gl, tex_quad_default$1, tex_quad_default);
      materialProjectionMatrixLocation = gl.getUniformLocation(quadProgram, "uProjection");
      materialViewMatrixLocation = gl.getUniformLocation(quadProgram, "uView");
      materialModelMatrixLocation = gl.getUniformLocation(quadProgram, "uModel");
      catTexture = createTexture(document.getElementById("logo-texture"));
    }
    function postProcessSetup() {
      const iData = new Uint8Array([
        0,
        1,
        2,
        // first triangle
        0,
        2,
        3
        // second triangle
      ]);
      postProcessVao = createVAO(dataPostProcess, iData);
      postProcessProgram = initShaders(gl, post_process_default, post_process_default$1);
      mixParamLocation = gl.getUniformLocation(postProcessProgram, "mixParam");
      gl.getUniformLocation(postProcessProgram, "color");
      framebufferSetup();
    }
    function framebufferSetup() {
      framebufferTexture = createTexture(canvas);
      framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, framebufferTexture, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    function createTexture(imageOrCanvas) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      if (imageOrCanvas instanceof HTMLImageElement) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageOrCanvas);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imageOrCanvas.width, imageOrCanvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return texture;
    }
    function createVAO(data, indicesData) {
      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const stride = 3 * Float32Array.BYTES_PER_ELEMENT + 2 * Float32Array.BYTES_PER_ELEMENT;
      gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 3 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray(1);
      const indicesBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indicesData, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return vertexBuffer;
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("canvas", _hoisted_1, [
        _createElementVNode("img", {
          id: "logo-texture",
          src: _unref(publicPath) + "./logo.png",
          style: { "display": "none" },
          onLoad: main
        }, null, 40, _hoisted_2)
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=webglPostProcessing.C7fKw8g81767105581793.js.map
