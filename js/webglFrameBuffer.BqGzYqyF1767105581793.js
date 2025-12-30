import { importShared } from './index.BxB45aCK1767105581793.js';
import { initShaders, resizeCanvasToDisplaySize, create, perspective, rotate, lookAt, multiply, degToRad } from './ice-utils.DaRUkx8a1767105581793.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = {
  id: "canvaswebgl",
  style: { "height": "500px", "width": "500px" }
};
const {onMounted} = await importShared('vue');
const vertexString = `
attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_matrix;
varying vec2 v_texcoord;
void main() {
  gl_Position = u_matrix * a_position;
  v_texcoord = a_texcoord;
}`;
const fragmentString = `
precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
void main(){
	gl_FragColor=texture2D(u_texture, v_texcoord.xy);
}
`;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "webglFrameBuffer",
  setup(__props) {
    const main = function() {
      const canvas = document.querySelector("#canvaswebgl");
      const gl = canvas?.getContext("webgl");
      if (!gl) {
        return;
      }
      var program = initShaders(gl, vertexString, fragmentString);
      var positionLocation = gl.getAttribLocation(program, "a_position");
      var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
      var matrixLocation = gl.getUniformLocation(program, "u_matrix");
      var textureLocation = gl.getUniformLocation(program, "u_texture");
      var positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      setGeometry(gl);
      var texcoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
      setTexcoords(gl);
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      {
        const level2 = 0;
        const internalFormat = gl.RGBA;
        const width = 1;
        const height = 1;
        const border = 0;
        const format = gl.RGBA;
        const type = gl.UNSIGNED_BYTE;
        const data = new Uint8Array([255, 255, 0, 255]);
        const alignment = 1;
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, alignment);
        gl.texImage2D(gl.TEXTURE_2D, level2, internalFormat, width, height, border, format, type, data);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      }
      const targetTextureWidth = 256;
      const targetTextureHeight = 256;
      const targetTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, targetTexture);
      {
        const level2 = 0;
        const internalFormat = gl.RGBA;
        const border = 0;
        const format = gl.RGBA;
        const type = gl.UNSIGNED_BYTE;
        const data = null;
        gl.texImage2D(gl.TEXTURE_2D, level2, internalFormat, targetTextureWidth, targetTextureHeight, border, format, type, data);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      }
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      const attachmentPoint = gl.COLOR_ATTACHMENT0;
      const level = 0;
      gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, targetTexture, level);
      var modelXRotationRadians = degToRad(0);
      var then = 0;
      requestAnimationFrame(drawScene);
      function drawCube(aspect) {
        gl.useProgram(program);
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        var size = 3;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
        gl.enableVertexAttribArray(texcoordLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
        var size = 2;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.vertexAttribPointer(texcoordLocation, size, type, normalize, stride, offset);
        var projectionMatrix = create();
        perspective(projectionMatrix, -30, aspect, 0.1, 1e4);
        var cameraPosition = [0, 0, 2];
        var up = [0, 1, 0];
        var target = [0, 0, 0];
        let modelMatrix = create();
        modelMatrix = rotate(modelMatrix, modelMatrix, modelXRotationRadians, [0, 1, 0]);
        var cameraMatrix = create();
        lookAt(cameraMatrix, cameraPosition, target, up);
        let modelViewMatrix = create();
        multiply(modelViewMatrix, cameraMatrix, modelMatrix);
        var viewProjectionMatrix = create();
        multiply(viewProjectionMatrix, projectionMatrix, modelViewMatrix);
        gl.uniformMatrix4fv(matrixLocation, false, viewProjectionMatrix);
        gl.uniform1i(textureLocation, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6 * 6);
      }
      function drawScene(time) {
        time *= 1e-3;
        var deltaTime = time - then;
        then = time;
        modelXRotationRadians += -0.4 * deltaTime;
        resizeCanvasToDisplaySize(gl.canvas);
        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);
        {
          gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.viewport(0, 0, targetTextureWidth, targetTextureHeight);
          gl.clearColor(0, 1, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          const aspect = targetTextureWidth / targetTextureHeight;
          drawCube(aspect);
        }
        {
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          gl.bindTexture(gl.TEXTURE_2D, targetTexture);
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
          gl.clearColor(1, 1, 1, 1);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
          drawCube(aspect);
        }
        requestAnimationFrame(drawScene);
      }
    };
    onMounted(() => {
      main();
    });
    function setGeometry(gl) {
      var positions = new Float32Array([
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5,
        -0.5,
        0.5,
        0.5,
        0.5
      ]);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    }
    function setTexcoords(gl) {
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          1,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          1,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          1,
          1,
          0,
          1,
          0,
          0,
          1,
          1,
          1
        ]),
        gl.STATIC_DRAW
      );
    }
    return (_ctx, _cache) => {
      return _openBlock(), _createElementBlock("canvas", _hoisted_1);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=webglFrameBuffer.BqGzYqyF1767105581793.js.map
