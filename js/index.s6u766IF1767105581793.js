import { importShared } from './index.BxB45aCK1767105581793.js';

// src/core/EffectComposer.js
const {DepthStencilFormat,DepthTexture,LinearFilter:LinearFilter2,SRGBColorSpace:SRGBColorSpace2,UnsignedByteType:UnsignedByteType2,UnsignedIntType,UnsignedInt248Type,Vector2,WebGLRenderTarget:WebGLRenderTarget3} = await importShared('three');


// src/core/Timer.js
var MILLISECONDS_TO_SECONDS = 1 / 1e3;
var SECONDS_TO_MILLISECONDS = 1e3;
var Timer = class {
  /**
   * Constructs a new timer.
   */
  constructor() {
    this.startTime = performance.now();
    this.previousTime = 0;
    this.currentTime = 0;
    this._delta = 0;
    this._elapsed = 0;
    this._fixedDelta = 1e3 / 60;
    this.timescale = 1;
    this.useFixedDelta = false;
    this._autoReset = false;
  }
  /**
   * Enables or disables auto reset based on page visibility.
   *
   * If enabled, the timer will be reset when the page becomes visible. This effectively pauses the timer when the page
   * is hidden. Has no effect if the API is not supported.
   *
   * @type {Boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
   */
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(value) {
    if (typeof document !== "undefined" && document.hidden !== void 0) {
      if (value) {
        document.addEventListener("visibilitychange", this);
      } else {
        document.removeEventListener("visibilitychange", this);
      }
      this._autoReset = value;
    }
  }
  get delta() {
    return this._delta * MILLISECONDS_TO_SECONDS;
  }
  get fixedDelta() {
    return this._fixedDelta * MILLISECONDS_TO_SECONDS;
  }
  set fixedDelta(value) {
    this._fixedDelta = value * SECONDS_TO_MILLISECONDS;
  }
  get elapsed() {
    return this._elapsed * MILLISECONDS_TO_SECONDS;
  }
  /**
   * Updates this timer.
   *
   * @param {Boolean} [timestamp] - The current time in milliseconds.
   */
  update(timestamp) {
    if (this.useFixedDelta) {
      this._delta = this.fixedDelta;
    } else {
      this.previousTime = this.currentTime;
      this.currentTime = (timestamp !== void 0 ? timestamp : performance.now()) - this.startTime;
      this._delta = this.currentTime - this.previousTime;
    }
    this._delta *= this.timescale;
    this._elapsed += this._delta;
  }
  /**
   * Resets this timer.
   */
  reset() {
    this._delta = 0;
    this._elapsed = 0;
    this.currentTime = performance.now() - this.startTime;
  }
  getDelta() {
    return this.delta;
  }
  getElapsed() {
    return this.elapsed;
  }
  handleEvent(e) {
    if (!document.hidden) {
      this.currentTime = performance.now() - this.startTime;
    }
  }
  dispose() {
    this.autoReset = false;
  }
};

// src/passes/Pass.js
const {BasicDepthPacking,BufferAttribute,BufferGeometry,Camera,Material,Mesh,Scene,Texture,WebGLRenderTarget} = await importShared('three');

var fullscreenGeometry = /* @__PURE__ */ (() => {
  const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
  const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(vertices, 3));
  geometry.setAttribute("uv", new BufferAttribute(uvs, 2));
  return geometry;
})();
var Pass = class _Pass {
  /**
   * A shared fullscreen triangle.
   *
   * The screen size is 2x2 units (NDC). A triangle needs to be 4x4 units to fill the screen.
   * @see https://michaldrobot.com/2014/04/01/gcn-execution-patterns-in-full-screen-passes/
   * @type {BufferGeometry}
   * @internal
   */
  static get fullscreenGeometry() {
    return fullscreenGeometry;
  }
  /**
   * Constructs a new pass.
   *
   * @param {String} [name] - The name of this pass. Does not have to be unique.
   * @param {Scene} [scene] - The scene to render. The default scene contains a single mesh that fills the screen.
   * @param {Camera} [camera] - A camera. Fullscreen effect passes don't require a camera.
   */
  constructor(name = "Pass", scene = new Scene(), camera = new Camera()) {
    this.name = name;
    this.renderer = null;
    this.scene = scene;
    this.camera = camera;
    this.screen = null;
    this.rtt = true;
    this.needsSwap = true;
    this.needsDepthTexture = false;
    this.enabled = true;
  }
  /**
   * Sets the render to screen flag.
   *
   * If this flag is changed, the fullscreen material will be updated as well.
   *
   * @type {Boolean}
   */
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(value) {
    if (this.rtt === value) {
      const material = this.fullscreenMaterial;
      if (material !== null) {
        material.needsUpdate = true;
      }
      this.rtt = !value;
    }
  }
  /**
   * Sets the main scene.
   *
   * @type {Scene}
   */
  set mainScene(value) {
  }
  /**
   * Sets the main camera.
   *
   * @type {Camera}
   */
  set mainCamera(value) {
  }
  /**
   * Sets the renderer
   *
   * @deprecated
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(renderer) {
    this.renderer = renderer;
  }
  /**
   * Indicates whether this pass is enabled.
   *
   * @deprecated Use enabled instead.
   * @return {Boolean} Whether this pass is enabled.
   */
  isEnabled() {
    return this.enabled;
  }
  /**
   * Enables or disables this pass.
   *
   * @deprecated Use enabled instead.
   * @param {Boolean} value - Whether the pass should be enabled.
   */
  setEnabled(value) {
    this.enabled = value;
  }
  /**
   * The fullscreen material.
   *
   * @type {Material}
   */
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(value) {
    let screen = this.screen;
    if (screen !== null) {
      screen.material = value;
    } else {
      screen = new Mesh(_Pass.fullscreenGeometry, value);
      screen.frustumCulled = false;
      if (this.scene === null) {
        this.scene = new Scene();
      }
      this.scene.add(screen);
      this.screen = screen;
    }
  }
  /**
   * Returns the current fullscreen material.
   *
   * @deprecated Use fullscreenMaterial instead.
   * @return {Material} The current fullscreen material, or null if there is none.
   */
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  /**
   * Sets the fullscreen material.
   *
   * @deprecated Use fullscreenMaterial instead.
   * @protected
   * @param {Material} value - A fullscreen material.
   */
  setFullscreenMaterial(value) {
    this.fullscreenMaterial = value;
  }
  /**
   * Returns the current depth texture.
   *
   * @return {Texture} The current depth texture, or null if there is none.
   */
  getDepthTexture() {
    return null;
  }
  /**
   * Sets the depth texture.
   *
   * This method will be called automatically by the {@link EffectComposer}.
   * You may override this method if your pass relies on the depth information of a preceding {@link RenderPass}.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategy} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking) {
  }
  /**
   * Renders this pass.
   *
   * This is an abstract method that must be overridden.
   *
   * @abstract
   * @throws {Error} An error is thrown if the method is not overridden.
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    throw new Error("Render method not implemented!");
  }
  /**
   * Sets the size.
   *
   * You may override this method if you want to be informed about the size of the backbuffer/canvas.
   * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
  }
  /**
   * Performs initialization tasks.
   *
   * This method is called when this pass is added to an {@link EffectComposer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
  }
  /**
   * Performs a shallow search for disposable properties and deletes them.
   *
   * The {@link EffectComposer} calls this method when it is being destroyed. You can use it independently to free
   * memory when you're certain that you don't need this pass anymore.
   */
  dispose() {
    for (const key of Object.keys(this)) {
      const property = this[key];
      const isDisposable = property instanceof WebGLRenderTarget || property instanceof Material || property instanceof Texture || property instanceof _Pass;
      if (isDisposable) {
        this[key].dispose();
      }
    }
    if (this.fullscreenMaterial !== null) {
      this.fullscreenMaterial.dispose();
    }
  }
};

// src/passes/ClearMaskPass.js
var ClearMaskPass = class extends Pass {
  /**
   * Constructs a new clear mask pass.
   */
  constructor() {
    super("ClearMaskPass", null, null);
    this.needsSwap = false;
  }
  /**
   * Disables the global stencil test.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const stencil = renderer.state.buffers.stencil;
    stencil.setLocked(false);
    stencil.setTest(false);
  }
};

// src/passes/CopyPass.js
const {LinearFilter,SRGBColorSpace,UnsignedByteType,WebGLRenderTarget:WebGLRenderTarget2} = await importShared('three');


// src/materials/CopyMaterial.js
const {NoBlending,ShaderMaterial,Uniform} = await importShared('three');


// src/materials/glsl/copy.frag
var copy_default = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`;

// src/materials/glsl/common.vert
var common_default = `varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/CopyMaterial.js
var CopyMaterial = class extends ShaderMaterial {
  /**
   * Constructs a new copy material.
   */
  constructor() {
    super({
      name: "CopyMaterial",
      uniforms: {
        inputBuffer: new Uniform(null),
        opacity: new Uniform(1)
      },
      blending: NoBlending,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: copy_default,
      vertexShader: common_default
    });
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Number} value - The buffer.
   */
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Returns the opacity.
   *
   * @deprecated Use opacity instead.
   * @return {Number} The opacity.
   */
  getOpacity(value) {
    return this.uniforms.opacity.value;
  }
  /**
   * Sets the opacity.
   *
   * @deprecated Use opacity instead.
   * @param {Number} value - The opacity.
   */
  setOpacity(value) {
    this.uniforms.opacity.value = value;
  }
};

// src/passes/CopyPass.js
var CopyPass = class extends Pass {
  /**
   * Constructs a new save pass.
   *
   * @param {WebGLRenderTarget} [renderTarget] - A render target.
   * @param {Boolean} [autoResize=true] - Whether the render target size should be updated automatically.
   */
  constructor(renderTarget, autoResize = true) {
    super("CopyPass");
    this.fullscreenMaterial = new CopyMaterial();
    this.needsSwap = false;
    this.renderTarget = renderTarget;
    if (renderTarget === void 0) {
      this.renderTarget = new WebGLRenderTarget2(1, 1, {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        stencilBuffer: false,
        depthBuffer: false
      });
      this.renderTarget.texture.name = "CopyPass.Target";
    }
    this.autoResize = autoResize;
  }
  /**
   * Enables or disables auto resizing of the render target.
   *
   * @deprecated Use autoResize instead.
   * @type {Boolean}
   */
  get resize() {
    return this.autoResize;
  }
  set resize(value) {
    this.autoResize = value;
  }
  /**
   * The output texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the output texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Enables or disables auto resizing of the render target.
   *
   * @deprecated Use autoResize instead.
   * @param {Boolean} value - Whether the render target size should be updated automatically.
   */
  setAutoResizeEnabled(value) {
    this.autoResize = value;
  }
  /**
   * Saves the input buffer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    this.fullscreenMaterial.inputBuffer = inputBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
    renderer.render(this.scene, this.camera);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    if (this.autoResize) {
      this.renderTarget.setSize(width, height);
    }
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - A renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0) {
      this.renderTarget.texture.type = frameBufferType;
      if (frameBufferType !== UnsignedByteType) {
        this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      } else if (renderer !== null && renderer.outputColorSpace === SRGBColorSpace) {
        this.renderTarget.texture.colorSpace = SRGBColorSpace;
      }
    }
  }
};

// src/passes/ClearPass.js
const {Color} = await importShared('three');

var color = /* @__PURE__ */ new Color();
var ClearPass = class extends Pass {
  /**
   * Constructs a new clear pass.
   *
   * @param {Boolean} [color=true] - Determines whether the color buffer should be cleared.
   * @param {Boolean} [depth=true] - Determines whether the depth buffer should be cleared.
   * @param {Boolean} [stencil=false] - Determines whether the stencil buffer should be cleared.
   */
  constructor(color2 = true, depth = true, stencil = false) {
    super("ClearPass", null, null);
    this.needsSwap = false;
    this.color = color2;
    this.depth = depth;
    this.stencil = stencil;
    this.overrideClearColor = null;
    this.overrideClearAlpha = -1;
  }
  /**
   * Sets the clear flags.
   *
   * @param {Boolean} color - Whether the color buffer should be cleared.
   * @param {Boolean} depth - Whether the depth buffer should be cleared.
   * @param {Boolean} stencil - Whether the stencil buffer should be cleared.
   */
  setClearFlags(color2, depth, stencil) {
    this.color = color2;
    this.depth = depth;
    this.stencil = stencil;
  }
  /**
   * Returns the override clear color. Default is null.
   *
   * @deprecated Use overrideClearColor instead.
   * @return {Color} The clear color.
   */
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  /**
   * Sets the override clear color.
   *
   * @deprecated Use overrideClearColor instead.
   * @param {Color} value - The clear color.
   */
  setOverrideClearColor(value) {
    this.overrideClearColor = value;
  }
  /**
   * Returns the override clear alpha. Default is -1.
   *
   * @deprecated Use overrideClearAlpha instead.
   * @return {Number} The clear alpha.
   */
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  /**
   * Sets the override clear alpha.
   *
   * @deprecated Use overrideClearAlpha instead.
   * @param {Number} value - The clear alpha.
   */
  setOverrideClearAlpha(value) {
    this.overrideClearAlpha = value;
  }
  /**
   * Clears the input buffer or the screen.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const overrideClearColor = this.overrideClearColor;
    const overrideClearAlpha = this.overrideClearAlpha;
    const clearAlpha = renderer.getClearAlpha();
    const hasOverrideClearColor = overrideClearColor !== null;
    const hasOverrideClearAlpha = overrideClearAlpha >= 0;
    if (hasOverrideClearColor) {
      renderer.getClearColor(color);
      renderer.setClearColor(overrideClearColor, hasOverrideClearAlpha ? overrideClearAlpha : clearAlpha);
    } else if (hasOverrideClearAlpha) {
      renderer.setClearAlpha(overrideClearAlpha);
    }
    renderer.setRenderTarget(this.renderToScreen ? null : inputBuffer);
    renderer.clear(this.color, this.depth, this.stencil);
    if (hasOverrideClearColor) {
      renderer.setClearColor(color, clearAlpha);
    } else if (hasOverrideClearAlpha) {
      renderer.setClearAlpha(clearAlpha);
    }
  }
};

// src/passes/MaskPass.js
var MaskPass = class extends Pass {
  /**
   * Constructs a new mask pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use.
   */
  constructor(scene, camera) {
    super("MaskPass", scene, camera);
    this.needsSwap = false;
    this.clearPass = new ClearPass(false, false, true);
    this.inverse = false;
  }
  set mainScene(value) {
    this.scene = value;
  }
  set mainCamera(value) {
    this.camera = value;
  }
  /**
   * Indicates whether the mask should be inverted.
   *
   * @type {Boolean}
   */
  get inverted() {
    return this.inverse;
  }
  set inverted(value) {
    this.inverse = value;
  }
  /**
   * Indicates whether this pass should clear the stencil buffer.
   *
   * @type {Boolean}
   * @deprecated Use clearPass.enabled instead.
   */
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(value) {
    this.clearPass.enabled = value;
  }
  /**
   * Returns the internal clear pass.
   *
   * @deprecated Use clearPass.enabled instead.
   * @return {ClearPass} The clear pass.
   */
  getClearPass() {
    return this.clearPass;
  }
  /**
   * Indicates whether the mask is inverted.
   *
   * @deprecated Use inverted instead.
   * @return {Boolean} Whether the mask is inverted.
   */
  isInverted() {
    return this.inverted;
  }
  /**
   * Enables or disable mask inversion.
   *
   * @deprecated Use inverted instead.
   * @param {Boolean} value - Whether the mask should be inverted.
   */
  setInverted(value) {
    this.inverted = value;
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const context = renderer.getContext();
    const buffers = renderer.state.buffers;
    const scene = this.scene;
    const camera = this.camera;
    const clearPass = this.clearPass;
    const writeValue = this.inverted ? 0 : 1;
    const clearValue = 1 - writeValue;
    buffers.color.setMask(false);
    buffers.depth.setMask(false);
    buffers.color.setLocked(true);
    buffers.depth.setLocked(true);
    buffers.stencil.setTest(true);
    buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
    buffers.stencil.setFunc(context.ALWAYS, writeValue, 4294967295);
    buffers.stencil.setClear(clearValue);
    buffers.stencil.setLocked(true);
    if (this.clearPass.enabled) {
      if (this.renderToScreen) {
        clearPass.render(renderer, null);
      } else {
        clearPass.render(renderer, inputBuffer);
        clearPass.render(renderer, outputBuffer);
      }
    }
    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    } else {
      renderer.setRenderTarget(inputBuffer);
      renderer.render(scene, camera);
      renderer.setRenderTarget(outputBuffer);
      renderer.render(scene, camera);
    }
    buffers.color.setLocked(false);
    buffers.depth.setLocked(false);
    buffers.stencil.setLocked(false);
    buffers.stencil.setFunc(context.EQUAL, 1, 4294967295);
    buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
    buffers.stencil.setLocked(true);
  }
};

// src/core/EffectComposer.js
var EffectComposer = class {
  /**
   * Constructs a new effect composer.
   *
   * @param {WebGLRenderer} renderer - The renderer that should be used.
   * @param {Object} [options] - The options.
   * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
   * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
   * @param {Boolean} [options.alpha] - Deprecated. Buffers are always RGBA since three r137.
   * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
   * @param {Number} [options.frameBufferType] - The type of the internal frame buffers. It's recommended to use HalfFloatType if possible.
   */
  constructor(renderer = null, {
    depthBuffer = true,
    stencilBuffer = false,
    multisampling = 0,
    frameBufferType
  } = {}) {
    this.renderer = null;
    this.inputBuffer = this.createBuffer(depthBuffer, stencilBuffer, frameBufferType, multisampling);
    this.outputBuffer = this.inputBuffer.clone();
    this.copyPass = new CopyPass();
    this.depthTexture = null;
    this.passes = [];
    this.timer = new Timer();
    this.autoRenderToScreen = true;
    this.setRenderer(renderer);
  }
  /**
   * The current amount of samples used for multisample anti-aliasing.
   *
   * @type {Number}
   */
  get multisampling() {
    return this.inputBuffer.samples || 0;
  }
  /**
   * Sets the amount of MSAA samples.
   *
   * Requires WebGL 2. Set to zero to disable multisampling.
   *
   * @type {Number}
   */
  set multisampling(value) {
    const buffer = this.inputBuffer;
    const multisampling = this.multisampling;
    if (multisampling > 0 && value > 0) {
      this.inputBuffer.samples = value;
      this.outputBuffer.samples = value;
      this.inputBuffer.dispose();
      this.outputBuffer.dispose();
    } else if (multisampling !== value) {
      this.inputBuffer.dispose();
      this.outputBuffer.dispose();
      this.inputBuffer = this.createBuffer(
        buffer.depthBuffer,
        buffer.stencilBuffer,
        buffer.texture.type,
        value
      );
      this.inputBuffer.depthTexture = this.depthTexture;
      this.outputBuffer = this.inputBuffer.clone();
    }
  }
  /**
   * Returns the internal timer.
   *
   * @return {Timer} The timer.
   */
  getTimer() {
    return this.timer;
  }
  /**
   * Returns the renderer.
   *
   * @return {WebGLRenderer} The renderer.
   */
  getRenderer() {
    return this.renderer;
  }
  /**
   * Sets the renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(renderer) {
    this.renderer = renderer;
    if (renderer !== null) {
      const size = renderer.getSize(new Vector2());
      const alpha = renderer.getContext().getContextAttributes().alpha;
      const frameBufferType = this.inputBuffer.texture.type;
      if (frameBufferType === UnsignedByteType2 && renderer.outputColorSpace === SRGBColorSpace2) {
        this.inputBuffer.texture.colorSpace = SRGBColorSpace2;
        this.outputBuffer.texture.colorSpace = SRGBColorSpace2;
        this.inputBuffer.dispose();
        this.outputBuffer.dispose();
      }
      renderer.autoClear = false;
      this.setSize(size.width, size.height);
      for (const pass of this.passes) {
        pass.initialize(renderer, alpha, frameBufferType);
      }
    }
  }
  /**
   * Replaces the current renderer with the given one.
   *
   * The auto clear mechanism of the provided renderer will be disabled. If the new render size differs from the
   * previous one, all passes will be updated.
   *
   * By default, the DOM element of the current renderer will automatically be removed from its parent node and the DOM
   * element of the new renderer will take its place.
   *
   * @deprecated Use setRenderer instead.
   * @param {WebGLRenderer} renderer - The new renderer.
   * @param {Boolean} updateDOM - Indicates whether the old canvas should be replaced by the new one in the DOM.
   * @return {WebGLRenderer} The old renderer.
   */
  replaceRenderer(renderer, updateDOM = true) {
    const oldRenderer = this.renderer;
    const parent = oldRenderer.domElement.parentNode;
    this.setRenderer(renderer);
    if (updateDOM && parent !== null) {
      parent.removeChild(oldRenderer.domElement);
      parent.appendChild(renderer.domElement);
    }
    return oldRenderer;
  }
  /**
   * Creates a depth texture attachment that will be provided to all passes.
   *
   * Note: When a shader reads from a depth texture and writes to a render target that uses the same depth texture
   * attachment, the depth information will be lost. This happens even if `depthWrite` is disabled.
   *
   * @private
   * @return {DepthTexture} The depth texture.
   */
  createDepthTexture() {
    const depthTexture = this.depthTexture = new DepthTexture();
    this.inputBuffer.depthTexture = depthTexture;
    this.inputBuffer.dispose();
    if (this.inputBuffer.stencilBuffer) {
      depthTexture.format = DepthStencilFormat;
      depthTexture.type = UnsignedInt248Type;
    } else {
      depthTexture.type = UnsignedIntType;
    }
    return depthTexture;
  }
  /**
   * Deletes the current depth texture.
   *
   * @private
   */
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose();
      this.depthTexture = null;
      this.inputBuffer.depthTexture = null;
      this.inputBuffer.dispose();
      for (const pass of this.passes) {
        pass.setDepthTexture(null);
      }
    }
  }
  /**
   * Creates a new render target.
   *
   * @deprecated Create buffers manually via WebGLRenderTarget instead.
   * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
   * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
   * @param {Number} type - The frame buffer type.
   * @param {Number} multisampling - The number of samples to use for antialiasing.
   * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
   */
  createBuffer(depthBuffer, stencilBuffer, type, multisampling) {
    const renderer = this.renderer;
    const size = renderer === null ? new Vector2() : renderer.getDrawingBufferSize(new Vector2());
    const options = {
      minFilter: LinearFilter2,
      magFilter: LinearFilter2,
      stencilBuffer,
      depthBuffer,
      type
    };
    const renderTarget = new WebGLRenderTarget3(size.width, size.height, options);
    if (multisampling > 0) {
      renderTarget.ignoreDepthForMultisampleCopy = false;
      renderTarget.samples = multisampling;
    }
    if (type === UnsignedByteType2 && renderer !== null && renderer.outputColorSpace === SRGBColorSpace2) {
      renderTarget.texture.colorSpace = SRGBColorSpace2;
    }
    renderTarget.texture.name = "EffectComposer.Buffer";
    renderTarget.texture.generateMipmaps = false;
    return renderTarget;
  }
  /**
   * Can be used to change the main scene for all registered passes and effects.
   *
   * @param {Scene} scene - The scene.
   */
  setMainScene(scene) {
    for (const pass of this.passes) {
      pass.mainScene = scene;
    }
  }
  /**
   * Can be used to change the main camera for all registered passes and effects.
   *
   * @param {Camera} camera - The camera.
   */
  setMainCamera(camera) {
    for (const pass of this.passes) {
      pass.mainCamera = camera;
    }
  }
  /**
   * Adds a pass, optionally at a specific index.
   *
   * @param {Pass} pass - A new pass.
   * @param {Number} [index] - An index at which the pass should be inserted.
   */
  addPass(pass, index) {
    const passes = this.passes;
    const renderer = this.renderer;
    const drawingBufferSize = renderer.getDrawingBufferSize(new Vector2());
    const alpha = renderer.getContext().getContextAttributes().alpha;
    const frameBufferType = this.inputBuffer.texture.type;
    pass.setRenderer(renderer);
    pass.setSize(drawingBufferSize.width, drawingBufferSize.height);
    pass.initialize(renderer, alpha, frameBufferType);
    if (this.autoRenderToScreen) {
      if (passes.length > 0) {
        passes[passes.length - 1].renderToScreen = false;
      }
      if (pass.renderToScreen) {
        this.autoRenderToScreen = false;
      }
    }
    if (index !== void 0) {
      passes.splice(index, 0, pass);
    } else {
      passes.push(pass);
    }
    if (this.autoRenderToScreen) {
      passes[passes.length - 1].renderToScreen = true;
    }
    if (pass.needsDepthTexture || this.depthTexture !== null) {
      if (this.depthTexture === null) {
        const depthTexture = this.createDepthTexture();
        for (pass of passes) {
          pass.setDepthTexture(depthTexture);
        }
      } else {
        pass.setDepthTexture(this.depthTexture);
      }
    }
  }
  /**
   * Removes a pass.
   *
   * @param {Pass} pass - The pass.
   */
  removePass(pass) {
    const passes = this.passes;
    const index = passes.indexOf(pass);
    const exists = index !== -1;
    const removed = exists && passes.splice(index, 1).length > 0;
    if (removed) {
      if (this.depthTexture !== null) {
        const reducer = (a, b) => a || b.needsDepthTexture;
        const depthTextureRequired = passes.reduce(reducer, false);
        if (!depthTextureRequired) {
          if (pass.getDepthTexture() === this.depthTexture) {
            pass.setDepthTexture(null);
          }
          this.deleteDepthTexture();
        }
      }
      if (this.autoRenderToScreen) {
        if (index === passes.length) {
          pass.renderToScreen = false;
          if (passes.length > 0) {
            passes[passes.length - 1].renderToScreen = true;
          }
        }
      }
    }
  }
  /**
   * Removes all passes.
   */
  removeAllPasses() {
    const passes = this.passes;
    this.deleteDepthTexture();
    if (passes.length > 0) {
      if (this.autoRenderToScreen) {
        passes[passes.length - 1].renderToScreen = false;
      }
      this.passes = [];
    }
  }
  /**
   * Renders all enabled passes in the order in which they were added.
   *
   * @param {Number} [deltaTime] - The time since the last frame in seconds.
   */
  render(deltaTime) {
    const renderer = this.renderer;
    const copyPass = this.copyPass;
    let inputBuffer = this.inputBuffer;
    let outputBuffer = this.outputBuffer;
    let stencilTest = false;
    let context, stencil, buffer;
    if (deltaTime === void 0) {
      this.timer.update();
      deltaTime = this.timer.getDelta();
    }
    for (const pass of this.passes) {
      if (pass.enabled) {
        pass.render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest);
        if (pass.needsSwap) {
          if (stencilTest) {
            copyPass.renderToScreen = pass.renderToScreen;
            context = renderer.getContext();
            stencil = renderer.state.buffers.stencil;
            stencil.setFunc(context.NOTEQUAL, 1, 4294967295);
            copyPass.render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest);
            stencil.setFunc(context.EQUAL, 1, 4294967295);
          }
          buffer = inputBuffer;
          inputBuffer = outputBuffer;
          outputBuffer = buffer;
        }
        if (pass instanceof MaskPass) {
          stencilTest = true;
        } else if (pass instanceof ClearMaskPass) {
          stencilTest = false;
        }
      }
    }
  }
  /**
   * Sets the size of the buffers, passes and the renderer.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   * @param {Boolean} [updateStyle] - Determines whether the style of the canvas should be updated.
   */
  setSize(width, height, updateStyle) {
    const renderer = this.renderer;
    const currentSize = renderer.getSize(new Vector2());
    if (width === void 0 || height === void 0) {
      width = currentSize.width;
      height = currentSize.height;
    }
    if (currentSize.width !== width || currentSize.height !== height) {
      renderer.setSize(width, height, updateStyle);
    }
    const drawingBufferSize = renderer.getDrawingBufferSize(new Vector2());
    this.inputBuffer.setSize(drawingBufferSize.width, drawingBufferSize.height);
    this.outputBuffer.setSize(drawingBufferSize.width, drawingBufferSize.height);
    for (const pass of this.passes) {
      pass.setSize(drawingBufferSize.width, drawingBufferSize.height);
    }
  }
  /**
   * Resets this composer by deleting all passes and creating new buffers.
   */
  reset() {
    this.dispose();
    this.autoRenderToScreen = true;
  }
  /**
   * Disposes this composer and all passes.
   */
  dispose() {
    for (const pass of this.passes) {
      pass.dispose();
    }
    this.passes = [];
    if (this.inputBuffer !== null) {
      this.inputBuffer.dispose();
    }
    if (this.outputBuffer !== null) {
      this.outputBuffer.dispose();
    }
    this.deleteDepthTexture();
    this.copyPass.dispose();
    this.timer.dispose();
    Pass.fullscreenGeometry.dispose();
  }
};

// src/core/EffectShaderData.js
const {LinearSRGBColorSpace} = await importShared('three');


// src/enums/EffectAttribute.js
var EffectAttribute = {
  NONE: 0,
  DEPTH: 1,
  CONVOLUTION: 2
};

// src/enums/EffectShaderSection.js
var EffectShaderSection = {
  FRAGMENT_HEAD: "FRAGMENT_HEAD",
  FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
  FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
  VERTEX_HEAD: "VERTEX_HEAD",
  VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
};

// src/core/EffectShaderData.js
var EffectShaderData = class {
  /**
   * Constructs new shader data.
   */
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([
      [EffectShaderSection.FRAGMENT_HEAD, null],
      [EffectShaderSection.FRAGMENT_MAIN_UV, null],
      [EffectShaderSection.FRAGMENT_MAIN_IMAGE, null],
      [EffectShaderSection.VERTEX_HEAD, null],
      [EffectShaderSection.VERTEX_MAIN_SUPPORT, null]
    ]);
    this.defines = /* @__PURE__ */ new Map();
    this.uniforms = /* @__PURE__ */ new Map();
    this.blendModes = /* @__PURE__ */ new Map();
    this.extensions = /* @__PURE__ */ new Set();
    this.attributes = EffectAttribute.NONE;
    this.varyings = /* @__PURE__ */ new Set();
    this.uvTransformation = false;
    this.readDepth = false;
    this.colorSpace = LinearSRGBColorSpace;
  }
};

// src/core/OverrideMaterialManager.js
const {BackSide,DoubleSide,FrontSide,ShaderMaterial:ShaderMaterial2} = await importShared('three');

var workaroundEnabled = false;
var OverrideMaterialManager = class {
  /**
   * Constructs a new override material manager.
   *
   * @param {Material} [material=null] - An override material.
   */
  constructor(material = null) {
    this.originalMaterials = /* @__PURE__ */ new Map();
    this.material = null;
    this.materials = null;
    this.materialsBackSide = null;
    this.materialsDoubleSide = null;
    this.materialsFlatShaded = null;
    this.materialsFlatShadedBackSide = null;
    this.materialsFlatShadedDoubleSide = null;
    this.setMaterial(material);
    this.meshCount = 0;
    this.replaceMaterial = (node) => {
      if (node.isMesh) {
        let materials;
        if (node.material.flatShading) {
          switch (node.material.side) {
            case DoubleSide:
              materials = this.materialsFlatShadedDoubleSide;
              break;
            case BackSide:
              materials = this.materialsFlatShadedBackSide;
              break;
            default:
              materials = this.materialsFlatShaded;
              break;
          }
        } else {
          switch (node.material.side) {
            case DoubleSide:
              materials = this.materialsDoubleSide;
              break;
            case BackSide:
              materials = this.materialsBackSide;
              break;
            default:
              materials = this.materials;
              break;
          }
        }
        this.originalMaterials.set(node, node.material);
        if (node.isSkinnedMesh) {
          node.material = materials[2];
        } else if (node.isInstancedMesh) {
          node.material = materials[1];
        } else {
          node.material = materials[0];
        }
        ++this.meshCount;
      }
    };
  }
  /**
   * Clones the given material.
   *
   * @private
   * @param {Material} material - The material.
   * @return {Material} The cloned material.
   */
  cloneMaterial(material) {
    if (!(material instanceof ShaderMaterial2)) {
      return material.clone();
    }
    const uniforms = material.uniforms;
    const textureUniforms = /* @__PURE__ */ new Map();
    for (const key in uniforms) {
      const value = uniforms[key].value;
      if (value.isRenderTargetTexture) {
        uniforms[key].value = null;
        textureUniforms.set(key, value);
      }
    }
    const clone = material.clone();
    for (const entry of textureUniforms) {
      uniforms[entry[0]].value = entry[1];
      clone.uniforms[entry[0]].value = entry[1];
    }
    return clone;
  }
  /**
   * Sets the override material.
   *
   * @param {Material} material - The material.
   */
  setMaterial(material) {
    this.disposeMaterials();
    this.material = material;
    if (material !== null) {
      const materials = this.materials = [
        this.cloneMaterial(material),
        this.cloneMaterial(material),
        this.cloneMaterial(material)
      ];
      for (const m2 of materials) {
        m2.uniforms = Object.assign({}, material.uniforms);
        m2.side = FrontSide;
      }
      materials[2].skinning = true;
      this.materialsBackSide = materials.map((m2) => {
        const c2 = this.cloneMaterial(m2);
        c2.uniforms = Object.assign({}, material.uniforms);
        c2.side = BackSide;
        return c2;
      });
      this.materialsDoubleSide = materials.map((m2) => {
        const c2 = this.cloneMaterial(m2);
        c2.uniforms = Object.assign({}, material.uniforms);
        c2.side = DoubleSide;
        return c2;
      });
      this.materialsFlatShaded = materials.map((m2) => {
        const c2 = this.cloneMaterial(m2);
        c2.uniforms = Object.assign({}, material.uniforms);
        c2.flatShading = true;
        return c2;
      });
      this.materialsFlatShadedBackSide = materials.map((m2) => {
        const c2 = this.cloneMaterial(m2);
        c2.uniforms = Object.assign({}, material.uniforms);
        c2.flatShading = true;
        c2.side = BackSide;
        return c2;
      });
      this.materialsFlatShadedDoubleSide = materials.map((m2) => {
        const c2 = this.cloneMaterial(m2);
        c2.uniforms = Object.assign({}, material.uniforms);
        c2.flatShading = true;
        c2.side = DoubleSide;
        return c2;
      });
    }
  }
  /**
   * Renders the scene with the override material.
   *
   * @private
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - A scene.
   * @param {Camera} camera - A camera.
   */
  render(renderer, scene, camera) {
    const shadowMapEnabled = renderer.shadowMap.enabled;
    renderer.shadowMap.enabled = false;
    if (workaroundEnabled) {
      const originalMaterials = this.originalMaterials;
      this.meshCount = 0;
      scene.traverse(this.replaceMaterial);
      renderer.render(scene, camera);
      for (const entry of originalMaterials) {
        entry[0].material = entry[1];
      }
      if (this.meshCount !== originalMaterials.size) {
        originalMaterials.clear();
      }
    } else {
      const overrideMaterial = scene.overrideMaterial;
      scene.overrideMaterial = this.material;
      renderer.render(scene, camera);
      scene.overrideMaterial = overrideMaterial;
    }
    renderer.shadowMap.enabled = shadowMapEnabled;
  }
  /**
   * Deletes cloned override materials.
   *
   * @private
   */
  disposeMaterials() {
    if (this.material !== null) {
      const materials = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const m2 of materials) {
        m2.dispose();
      }
    }
  }
  /**
   * Performs cleanup tasks.
   */
  dispose() {
    this.originalMaterials.clear();
    this.disposeMaterials();
  }
  /**
   * Indicates whether the override material workaround is enabled.
   *
   * @type {Boolean}
   */
  static get workaroundEnabled() {
    return workaroundEnabled;
  }
  /**
   * Enables or disables the override material workaround globally.
   *
   * This only affects post processing passes and effects.
   *
   * @type {Boolean}
   */
  static set workaroundEnabled(value) {
    workaroundEnabled = value;
  }
};

// src/core/Resolution.js
const {EventDispatcher,Vector2:Vector22} = await importShared('three');

var AUTO_SIZE = -1;
var Resolution = class extends EventDispatcher {
  /**
   * Constructs a new resolution.
   *
   * TODO Remove resizable param.
   * @param {Resizable} resizable - A resizable object.
   * @param {Number} [width=Resolution.AUTO_SIZE] - The preferred width.
   * @param {Number} [height=Resolution.AUTO_SIZE] - The preferred height.
   * @param {Number} [scale=1.0] - A resolution scale.
   */
  constructor(resizable, width = AUTO_SIZE, height = AUTO_SIZE, scale = 1) {
    super();
    this.resizable = resizable;
    this.baseSize = new Vector22(1, 1);
    this.preferredSize = new Vector22(width, height);
    this.target = this.preferredSize;
    this.s = scale;
    this.effectiveSize = new Vector22();
    this.addEventListener("change", () => this.updateEffectiveSize());
    this.updateEffectiveSize();
  }
  /**
   * Calculates the effective size.
   *
   * @private
   */
  updateEffectiveSize() {
    const base = this.baseSize;
    const preferred = this.preferredSize;
    const effective = this.effectiveSize;
    const scale = this.scale;
    if (preferred.width !== AUTO_SIZE) {
      effective.width = preferred.width;
    } else if (preferred.height !== AUTO_SIZE) {
      effective.width = Math.round(preferred.height * (base.width / Math.max(base.height, 1)));
    } else {
      effective.width = Math.round(base.width * scale);
    }
    if (preferred.height !== AUTO_SIZE) {
      effective.height = preferred.height;
    } else if (preferred.width !== AUTO_SIZE) {
      effective.height = Math.round(preferred.width / Math.max(base.width / Math.max(base.height, 1), 1));
    } else {
      effective.height = Math.round(base.height * scale);
    }
  }
  /**
   * The effective width.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
   *
   * @type {Number}
   */
  get width() {
    return this.effectiveSize.width;
  }
  set width(value) {
    this.preferredWidth = value;
  }
  /**
   * The effective height.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
   *
   * @type {Number}
   */
  get height() {
    return this.effectiveSize.height;
  }
  set height(value) {
    this.preferredHeight = value;
  }
  /**
   * Returns the effective width.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
   *
   * @deprecated Use width instead.
   * @return {Number} The effective width.
   */
  getWidth() {
    return this.width;
  }
  /**
   * Returns the effective height.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
   *
   * @deprecated Use height instead.
   * @return {Number} The effective height.
   */
  getHeight() {
    return this.height;
  }
  /**
   * The resolution scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.s;
  }
  set scale(value) {
    if (this.s !== value) {
      this.s = value;
      this.preferredSize.setScalar(AUTO_SIZE);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Returns the current resolution scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * Also sets the preferred resolution to {@link Resizer.AUTO_SIZE}.
   *
   * @deprecated Use scale instead.
   * @param {Number} value - The scale.
   */
  setScale(value) {
    this.scale = value;
  }
  /**
   * The base width.
   *
   * @type {Number}
   */
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(value) {
    if (this.baseSize.width !== value) {
      this.baseSize.width = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Returns the base width.
   *
   * @deprecated Use baseWidth instead.
   * @return {Number} The base width.
   */
  getBaseWidth() {
    return this.baseWidth;
  }
  /**
   * Sets the base width.
   *
   * @deprecated Use baseWidth instead.
   * @param {Number} value - The width.
   */
  setBaseWidth(value) {
    this.baseWidth = value;
  }
  /**
   * The base height.
   *
   * @type {Number}
   */
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(value) {
    if (this.baseSize.height !== value) {
      this.baseSize.height = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Returns the base height.
   *
   * @deprecated Use baseHeight instead.
   * @return {Number} The base height.
   */
  getBaseHeight() {
    return this.baseHeight;
  }
  /**
   * Sets the base height.
   *
   * @deprecated Use baseHeight instead.
   * @param {Number} value - The height.
   */
  setBaseHeight(value) {
    this.baseHeight = value;
  }
  /**
   * Sets the base size.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setBaseSize(width, height) {
    if (this.baseSize.width !== width || this.baseSize.height !== height) {
      this.baseSize.set(width, height);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * The preferred width.
   *
   * @type {Number}
   */
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(value) {
    if (this.preferredSize.width !== value) {
      this.preferredSize.width = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Returns the preferred width.
   *
   * @deprecated Use preferredWidth instead.
   * @return {Number} The preferred width.
   */
  getPreferredWidth() {
    return this.preferredWidth;
  }
  /**
   * Sets the preferred width.
   *
   * Use {@link Resizer.AUTO_SIZE} to automatically calculate the width based on the height and aspect ratio.
   *
   * @deprecated Use preferredWidth instead.
   * @param {Number} value - The width.
   */
  setPreferredWidth(value) {
    this.preferredWidth = value;
  }
  /**
   * The preferred height.
   *
   * @type {Number}
   */
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(value) {
    if (this.preferredSize.height !== value) {
      this.preferredSize.height = value;
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Returns the preferred height.
   *
   * @deprecated Use preferredHeight instead.
   * @return {Number} The preferred height.
   */
  getPreferredHeight() {
    return this.preferredHeight;
  }
  /**
   * Sets the preferred height.
   *
   * Use {@link Resizer.AUTO_SIZE} to automatically calculate the height based on the width and aspect ratio.
   *
   * @deprecated Use preferredHeight instead.
   * @param {Number} value - The height.
   */
  setPreferredHeight(value) {
    this.preferredHeight = value;
  }
  /**
   * Sets the preferred size.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setPreferredSize(width, height) {
    if (this.preferredSize.width !== width || this.preferredSize.height !== height) {
      this.preferredSize.set(width, height);
      this.dispatchEvent({ type: "change" });
      this.resizable.setSize(this.baseSize.width, this.baseSize.height);
    }
  }
  /**
   * Copies the given resolution.
   *
   * @param {Resolution} resolution - The resolution.
   */
  copy(resolution) {
    this.s = resolution.scale;
    this.baseSize.set(resolution.baseWidth, resolution.baseHeight);
    this.preferredSize.set(resolution.preferredWidth, resolution.preferredHeight);
    this.dispatchEvent({ type: "change" });
    this.resizable.setSize(this.baseSize.width, this.baseSize.height);
  }
  /**
   * An auto sizing constant.
   *
   * Can be used to automatically calculate the width or height based on the original aspect ratio.
   *
   * @type {Number}
   */
  static get AUTO_SIZE() {
    return AUTO_SIZE;
  }
};

// src/utils/IdManager.js
var IdManager = class {
  /**
   * Constructs a new ID manager.
   *
   * @param initialId - The first ID.
   */
  constructor(initialId = 0) {
    this.nextId = initialId;
  }
  /**
   * Returns the next unique ID.
   *
   * @return The ID.
   */
  getNextId() {
    return this.nextId++;
  }
  /**
   * Resets the ID counter.
   *
   * @param initialId - The first ID.
   * @return This manager.
   */
  reset(initialId = 0) {
    this.nextId = initialId;
    return this;
  }
};

// src/core/Selection.js
var idManager = /* @__PURE__ */ new IdManager(2);
var Selection = class extends Set {
  /**
   * Constructs a new selection.
   *
   * @param {Iterable<Object3D>} [iterable] - A collection of objects that should be added to this selection.
   * @param {Number} [layer] - A dedicated render layer for selected objects. Range is `[2, 31]`. Starts at 2 if omitted.
   */
  constructor(iterable, layer = idManager.getNextId()) {
    super();
    this.exclusive = false;
    this._layer = layer;
    if (this._layer < 1 || this._layer > 31) {
      console.warn("Layer out of range, resetting to 2");
      idManager.reset(2);
      this._layer = idManager.getNextId();
    }
    if (iterable !== void 0) {
      this.set(iterable);
    }
  }
  /**
   * The render layer for selected objects.
   *
   * @type {Number}
   */
  get layer() {
    return this._layer;
  }
  set layer(value) {
    const currentLayer = this._layer;
    for (const object of this) {
      object.layers.disable(currentLayer);
      object.layers.enable(value);
    }
    this._layer = value;
  }
  /**
   * Returns the current render layer for selected objects.
   *
   * The default layer is 2. If this collides with your own custom layers, please change it before rendering!
   *
   * @deprecated Use layer instead.
   * @return {Number} The layer.
   */
  getLayer() {
    return this.layer;
  }
  /**
   * Sets the render layer for selected objects.
   *
   * The current selection will be updated accordingly.
   *
   * @deprecated Use layer instead.
   * @param {Number} value - The layer. Range is [0, 31].
   */
  setLayer(value) {
    this.layer = value;
  }
  /**
   * Indicates whether objects that are added to this selection will be removed from all other layers.
   *
   * @deprecated Use exclusive instead.
   * @return {Number} Whether this selection is exclusive. Default is false.
   */
  isExclusive() {
    return this.exclusive;
  }
  /**
   * Controls whether objects that are added to this selection should be removed from all other layers.
   *
   * @deprecated Use exclusive instead.
   * @param {Number} value - Whether this selection should be exclusive.
   */
  setExclusive(value) {
    this.exclusive = value;
  }
  /**
   * Clears this selection.
   *
   * @return {Selection} This selection.
   */
  clear() {
    const layer = this.layer;
    for (const object of this) {
      object.layers.disable(layer);
    }
    return super.clear();
  }
  /**
   * Clears this selection and adds the given objects.
   *
   * @param {Iterable<Object3D>} objects - The objects that should be selected.
   * @return {Selection} This selection.
   */
  set(objects) {
    this.clear();
    for (const object of objects) {
      this.add(object);
    }
    return this;
  }
  /**
   * An alias for {@link has}.
   *
   * @param {Object3D} object - An object.
   * @return {Number} Returns 0 if the given object is currently selected, or -1 otherwise.
   * @deprecated Added for backward-compatibility.
   */
  indexOf(object) {
    return this.has(object) ? 0 : -1;
  }
  /**
   * Adds an object to this selection.
   *
   * If {@link exclusive} is set to `true`, the object will also be removed from all other layers.
   *
   * @param {Object3D} object - The object that should be selected.
   * @return {Selection} This selection.
   */
  add(object) {
    if (this.exclusive) {
      object.layers.set(this.layer);
    } else {
      object.layers.enable(this.layer);
    }
    return super.add(object);
  }
  /**
   * Removes an object from this selection.
   *
   * @param {Object3D} object - The object that should be deselected.
   * @return {Boolean} Returns true if an object has successfully been removed from this selection; otherwise false.
   */
  delete(object) {
    if (this.has(object)) {
      object.layers.disable(this.layer);
    }
    return super.delete(object);
  }
  /**
   * Removes an existing object from the selection. If the object doesn't exist it's added instead.
   *
   * @param {Object3D} object - The object.
   * @return {Boolean} Returns true if the object is added, false otherwise.
   */
  toggle(object) {
    let result;
    if (this.has(object)) {
      this.delete(object);
      result = false;
    } else {
      this.add(object);
      result = true;
    }
    return result;
  }
  /**
   * Sets the visibility of all selected objects.
   *
   * This method enables or disables render layer 0 of all selected objects.
   *
   * @param {Boolean} visible - Whether the selected objects should be visible.
   * @return {Selection} This selection.
   */
  setVisible(visible) {
    for (const object of this) {
      if (visible) {
        object.layers.enable(0);
      } else {
        object.layers.disable(0);
      }
    }
    return this;
  }
};

// src/effects/blending/BlendMode.js
const {EventDispatcher:EventDispatcher2,Uniform:Uniform2} = await importShared('three');


// src/enums/BlendFunction.js
var BlendFunction = {
  ADD: 0,
  ALPHA: 1,
  AVERAGE: 2,
  COLOR: 3,
  COLOR_BURN: 4,
  COLOR_DODGE: 5,
  DARKEN: 6,
  DIFFERENCE: 7,
  DIVIDE: 8,
  DST: 9,
  EXCLUSION: 10,
  HARD_LIGHT: 11,
  HARD_MIX: 12,
  HUE: 13,
  INVERT: 14,
  INVERT_RGB: 15,
  LIGHTEN: 16,
  LINEAR_BURN: 17,
  LINEAR_DODGE: 18,
  LINEAR_LIGHT: 19,
  LUMINOSITY: 20,
  MULTIPLY: 21,
  NEGATION: 22,
  NORMAL: 23,
  OVERLAY: 24,
  PIN_LIGHT: 25,
  REFLECT: 26,
  SATURATION: 27,
  SCREEN: 28,
  SOFT_LIGHT: 29,
  SRC: 30,
  SUBTRACT: 31,
  VIVID_LIGHT: 32
};

// src/effects/blending/glsl/add.frag
var add_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}`;

// src/effects/blending/glsl/alpha.frag
var alpha_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}`;

// src/effects/blending/glsl/average.frag
var average_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}`;

// src/effects/blending/glsl/color.frag
var color_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/color-burn.frag
var color_burn_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/color-dodge.frag
var color_dodge_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/darken.frag
var darken_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/difference.frag
var difference_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/divide.frag
var divide_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}`;

// src/effects/blending/glsl/exclusion.frag
var exclusion_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/hard-light.frag
var hard_light_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/hard-mix.frag
var hard_mix_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/hue.frag
var hue_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/invert.frag
var invert_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}`;

// src/effects/blending/glsl/invert-rgb.frag
var invert_rgb_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/lighten.frag
var lighten_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/linear-burn.frag
var linear_burn_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}`;

// src/effects/blending/glsl/linear-dodge.frag
var linear_dodge_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}`;

// src/effects/blending/glsl/linear-light.frag
var linear_light_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}`;

// src/effects/blending/glsl/luminosity.frag
var luminosity_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/multiply.frag
var multiply_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}`;

// src/effects/blending/glsl/negation.frag
var negation_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}`;

// src/effects/blending/glsl/normal.frag
var normal_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}`;

// src/effects/blending/glsl/overlay.frag
var overlay_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/pin-light.frag
var pin_light_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/reflect.frag
var reflect_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/saturation.frag
var saturation_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/screen.frag
var screen_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}`;

// src/effects/blending/glsl/soft-light.frag
var soft_light_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/glsl/src.frag
var src_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}`;

// src/effects/blending/glsl/subtract.frag
var subtract_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}`;

// src/effects/blending/glsl/vivid-light.frag
var vivid_light_default = `vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}`;

// src/effects/blending/BlendMode.js
var blendFunctions = /* @__PURE__ */ new Map([
  [BlendFunction.ADD, add_default],
  [BlendFunction.ALPHA, alpha_default],
  [BlendFunction.AVERAGE, average_default],
  [BlendFunction.COLOR, color_default],
  [BlendFunction.COLOR_BURN, color_burn_default],
  [BlendFunction.COLOR_DODGE, color_dodge_default],
  [BlendFunction.DARKEN, darken_default],
  [BlendFunction.DIFFERENCE, difference_default],
  [BlendFunction.DIVIDE, divide_default],
  [BlendFunction.DST, null],
  [BlendFunction.EXCLUSION, exclusion_default],
  [BlendFunction.HARD_LIGHT, hard_light_default],
  [BlendFunction.HARD_MIX, hard_mix_default],
  [BlendFunction.HUE, hue_default],
  [BlendFunction.INVERT, invert_default],
  [BlendFunction.INVERT_RGB, invert_rgb_default],
  [BlendFunction.LIGHTEN, lighten_default],
  [BlendFunction.LINEAR_BURN, linear_burn_default],
  [BlendFunction.LINEAR_DODGE, linear_dodge_default],
  [BlendFunction.LINEAR_LIGHT, linear_light_default],
  [BlendFunction.LUMINOSITY, luminosity_default],
  [BlendFunction.MULTIPLY, multiply_default],
  [BlendFunction.NEGATION, negation_default],
  [BlendFunction.NORMAL, normal_default],
  [BlendFunction.OVERLAY, overlay_default],
  [BlendFunction.PIN_LIGHT, pin_light_default],
  [BlendFunction.REFLECT, reflect_default],
  [BlendFunction.SATURATION, saturation_default],
  [BlendFunction.SCREEN, screen_default],
  [BlendFunction.SOFT_LIGHT, soft_light_default],
  [BlendFunction.SRC, src_default],
  [BlendFunction.SUBTRACT, subtract_default],
  [BlendFunction.VIVID_LIGHT, vivid_light_default]
]);
var BlendMode = class extends EventDispatcher2 {
  /**
   * Constructs a new blend mode.
   *
   * @param {BlendFunction} blendFunction - The blend function.
   * @param {Number} opacity - The opacity of the color that will be blended with the base color.
   */
  constructor(blendFunction, opacity = 1) {
    super();
    this._blendFunction = blendFunction;
    this.opacity = new Uniform2(opacity);
  }
  /**
   * Returns the opacity.
   *
   * @return {Number} The opacity.
   */
  getOpacity() {
    return this.opacity.value;
  }
  /**
   * Sets the opacity.
   *
   * @param {Number} value - The opacity.
   */
  setOpacity(value) {
    this.opacity.value = value;
  }
  /**
   * The blend function.
   *
   * @type {BlendFunction}
   */
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(value) {
    this._blendFunction = value;
    this.dispatchEvent({ type: "change" });
  }
  /**
   * Returns the blend function.
   *
   * @deprecated Use blendFunction instead.
   * @return {BlendFunction} The blend function.
   */
  getBlendFunction() {
    return this.blendFunction;
  }
  /**
   * Sets the blend function.
   *
   * @deprecated Use blendFunction instead.
   * @param {BlendFunction} value - The blend function.
   */
  setBlendFunction(value) {
    this.blendFunction = value;
  }
  /**
   * Returns the blend function shader code.
   *
   * @return {String} The blend function shader code.
   */
  getShaderCode() {
    return blendFunctions.get(this.blendFunction);
  }
};

// src/effects/ASCIIEffect.js
const {Color:Color2,Uniform:Uniform3,Vector2:Vector23,Vector4} = await importShared('three');


// src/textures/ASCIITexture.js
const {CanvasTexture,RepeatWrapping} = await importShared('three');

// src/effects/Effect.js
const {BasicDepthPacking:BasicDepthPacking2,EventDispatcher:EventDispatcher3,LinearSRGBColorSpace:LinearSRGBColorSpace2,Material:Material2,NoColorSpace,Texture:Texture2,WebGLRenderTarget:WebGLRenderTarget4} = await importShared('three');

var Effect = class extends EventDispatcher3 {
  /**
   * Constructs a new effect.
   *
   * @param {String} name - The name of this effect. Doesn't have to be unique.
   * @param {String} fragmentShader - The fragment shader. This shader is required.
   * @param {Object} [options] - Additional options.
   * @param {EffectAttribute} [options.attributes=EffectAttribute.NONE] - The effect attributes that determine the execution priority and resource requirements.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
   * @param {Map<String, String>} [options.defines] - Custom preprocessor macro definitions. Keys are names and values are code.
   * @param {Map<String, Uniform>} [options.uniforms] - Custom shader uniforms. Keys are names and values are uniforms.
   * @param {Set<WebGLExtension>} [options.extensions] - WebGL extensions.
   * @param {String} [options.vertexShader=null] - The vertex shader. Most effects don't need one.
   */
  constructor(name, fragmentShader, {
    attributes = EffectAttribute.NONE,
    blendFunction = BlendFunction.NORMAL,
    defines = /* @__PURE__ */ new Map(),
    uniforms = /* @__PURE__ */ new Map(),
    extensions = null,
    vertexShader = null
  } = {}) {
    super();
    this.name = name;
    this.renderer = null;
    this.attributes = attributes;
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;
    this.defines = defines;
    this.uniforms = uniforms;
    this.extensions = extensions;
    this.blendMode = new BlendMode(blendFunction);
    this.blendMode.addEventListener("change", (event) => this.setChanged());
    this._inputColorSpace = LinearSRGBColorSpace2;
    this._outputColorSpace = NoColorSpace;
  }
  /**
   * The input color space.
   *
   * @type {ColorSpace}
   * @experimental
   */
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  /**
   * @type {ColorSpace}
   * @protected
   * @experimental
   */
  set inputColorSpace(value) {
    this._inputColorSpace = value;
    this.setChanged();
  }
  /**
   * The output color space.
   *
   * Should only be changed if this effect converts the input colors to a different color space.
   *
   * @type {ColorSpace}
   * @experimental
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  /**
   * @type {ColorSpace}
   * @protected
   * @experimental
   */
  set outputColorSpace(value) {
    this._outputColorSpace = value;
    this.setChanged();
  }
  /**
   * Sets the main scene.
   *
   * @type {Scene}
   */
  set mainScene(value) {
  }
  /**
   * Sets the main camera.
   *
   * @type {Camera}
   */
  set mainCamera(value) {
  }
  /**
   * Returns the name of this effect.
   *
   * @deprecated Use name instead.
   * @return {String} The name.
   */
  getName() {
    return this.name;
  }
  /**
   * Sets the renderer.
   *
   * @deprecated
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(renderer) {
    this.renderer = renderer;
  }
  /**
   * Returns the preprocessor macro definitions.
   *
   * @deprecated Use defines instead.
   * @return {Map<String, String>} The extensions.
   */
  getDefines() {
    return this.defines;
  }
  /**
   * Returns the uniforms of this effect.
   *
   * @deprecated Use uniforms instead.
   * @return {Map<String, Uniform>} The extensions.
   */
  getUniforms() {
    return this.uniforms;
  }
  /**
   * Returns the WebGL extensions that are required by this effect.
   *
   * @deprecated Use extensions instead.
   * @return {Set<WebGLExtension>} The extensions.
   */
  getExtensions() {
    return this.extensions;
  }
  /**
   * Returns the blend mode.
   *
   * The result of this effect will be blended with the result of the previous effect using this blend mode.
   *
   * @deprecated Use blendMode instead.
   * @return {BlendMode} The blend mode.
   */
  getBlendMode() {
    return this.blendMode;
  }
  /**
   * Returns the effect attributes.
   *
   * @return {EffectAttribute} The attributes.
   */
  getAttributes() {
    return this.attributes;
  }
  /**
   * Sets the effect attributes.
   *
   * Effects that have the same attributes will be executed in the order in which they were registered. Some attributes
   * imply a higher priority.
   *
   * @protected
   * @param {EffectAttribute} attributes - The attributes.
   */
  setAttributes(attributes) {
    this.attributes = attributes;
    this.setChanged();
  }
  /**
   * Returns the fragment shader.
   *
   * @return {String} The fragment shader.
   */
  getFragmentShader() {
    return this.fragmentShader;
  }
  /**
   * Sets the fragment shader.
   *
   * @protected
   * @param {String} fragmentShader - The fragment shader.
   */
  setFragmentShader(fragmentShader) {
    this.fragmentShader = fragmentShader;
    this.setChanged();
  }
  /**
   * Returns the vertex shader.
   *
   * @return {String} The vertex shader.
   */
  getVertexShader() {
    return this.vertexShader;
  }
  /**
   * Sets the vertex shader.
   *
   * @protected
   * @param {String} vertexShader - The vertex shader.
   */
  setVertexShader(vertexShader) {
    this.vertexShader = vertexShader;
    this.setChanged();
  }
  /**
   * Informs the associated {@link EffectPass} that this effect requires a shader recompilation.
   *
   * Should be called after changing macros or extensions and after adding/removing uniforms.
   *
   * @protected
   */
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  /**
   * Sets the depth texture.
   *
   * You may override this method if your effect requires direct access to the depth texture that is bound to the
   * associated {@link EffectPass}.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking2) {
  }
  /**
   * Updates this effect by performing supporting operations.
   *
   * This method is called by the {@link EffectPass} right before the main fullscreen render operation, even if the
   * blend function is set to `SKIP`.
   *
   * You may override this method if you need to update custom uniforms or render additional off-screen textures.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(renderer, inputBuffer, deltaTime) {
  }
  /**
   * Updates the size of this effect.
   *
   * You may override this method if you want to be informed about the size of the backbuffer/canvas.
   * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
  }
  /**
   * Performs initialization tasks.
   *
   * This method is called when the associated {@link EffectPass} is added to an {@link EffectComposer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   * @example if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }
   */
  initialize(renderer, alpha, frameBufferType) {
  }
  /**
   * Performs a shallow search for properties that define a dispose method and deletes them.
   *
   * The {@link EffectComposer} calls this method when it is being destroyed.
   */
  dispose() {
    for (const key of Object.keys(this)) {
      const property = this[key];
      const isDisposable = property instanceof WebGLRenderTarget4 || property instanceof Material2 || property instanceof Texture2 || property instanceof Pass;
      if (isDisposable) {
        this[key].dispose();
      }
    }
  }
};

// src/effects/BloomEffect.js
const {SRGBColorSpace:SRGBColorSpace5,Uniform:Uniform8,WebGLRenderTarget:WebGLRenderTarget8} = await importShared('three');


// src/enums/KernelSize.js
var KernelSize = {
  VERY_SMALL: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3};

// src/passes/KawaseBlurPass.js
const {SRGBColorSpace:SRGBColorSpace3,UnsignedByteType:UnsignedByteType3,WebGLRenderTarget:WebGLRenderTarget5} = await importShared('three');


// src/materials/KawaseBlurMaterial.js
const {NoBlending:NoBlending2,ShaderMaterial:ShaderMaterial3,Uniform:Uniform4,Vector4:Vector42} = await importShared('three');


// src/materials/glsl/convolution.kawase.frag
var convolution_kawase_default = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`;

// src/materials/glsl/convolution.kawase.vert
var convolution_kawase_default2 = `uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/KawaseBlurMaterial.js
var kernelPresets = [
  new Float32Array([0, 0]),
  new Float32Array([0, 1, 1]),
  new Float32Array([0, 1, 1, 2]),
  new Float32Array([0, 1, 2, 2, 3]),
  new Float32Array([0, 1, 2, 3, 4, 4, 5]),
  new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])
];
var KawaseBlurMaterial = class extends ShaderMaterial3 {
  /**
   * Constructs a new convolution material.
   *
   * TODO Remove texelSize param.
   * @param {Vector4} [texelSize] - Deprecated.
   */
  constructor(texelSize = new Vector42()) {
    super({
      name: "KawaseBlurMaterial",
      uniforms: {
        inputBuffer: new Uniform4(null),
        texelSize: new Uniform4(new Vector42()),
        scale: new Uniform4(1),
        kernel: new Uniform4(0)
      },
      blending: NoBlending2,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: convolution_kawase_default,
      vertexShader: convolution_kawase_default2
    });
    this.setTexelSize(texelSize.x, texelSize.y);
    this.kernelSize = KernelSize.MEDIUM;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(value) {
    this.inputBuffer = value;
  }
  /**
   * The kernel sequence for the current kernel size.
   *
   * @type {Float32Array}
   */
  get kernelSequence() {
    return kernelPresets[this.kernelSize];
  }
  /**
   * The blur scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(value) {
    this.uniforms.scale.value = value;
  }
  /**
   * Returns the blur scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.uniforms.scale.value;
  }
  /**
   * Sets the blur scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} value - The scale.
   */
  setScale(value) {
    this.uniforms.scale.value = value;
  }
  /**
   * Returns the kernel.
   *
   * @return {Float32Array} The kernel.
   * @deprecated Implementation detail, removed with no replacement.
   */
  getKernel() {
    return null;
  }
  /**
   * The current kernel.
   *
   * @type {Number}
   */
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(value) {
    this.uniforms.kernel.value = value;
  }
  /**
   * Sets the current kernel.
   *
   * @deprecated Use kernel instead.
   * @param {Number} value - The kernel.
   */
  setKernel(value) {
    this.kernel = value;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(x, y) {
    this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const x = 1 / width, y = 1 / height;
    this.uniforms.texelSize.value.set(x, y, x * 0.5, y * 0.5);
  }
};

// src/passes/KawaseBlurPass.js
var KawaseBlurPass = class extends Pass {
  /**
   * Constructs a new Kawase blur pass.
   *
   * @param {Object} [options] - The options.
   * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor({
    kernelSize = KernelSize.MEDIUM,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("KawaseBlurPass");
    this.renderTargetA = new WebGLRenderTarget5(1, 1, { depthBuffer: false });
    this.renderTargetA.texture.name = "Blur.Target.A";
    this.renderTargetB = this.renderTargetA.clone();
    this.renderTargetB.texture.name = "Blur.Target.B";
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    this._blurMaterial = new KawaseBlurMaterial();
    this._blurMaterial.kernelSize = kernelSize;
    this.copyMaterial = new CopyMaterial();
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * The blur material.
   *
   * @type {KawaseBlurMaterial}
   */
  get blurMaterial() {
    return this._blurMaterial;
  }
  /**
   * The blur material.
   *
   * @type {KawaseBlurMaterial}
   * @protected
   */
  set blurMaterial(value) {
    this._blurMaterial = value;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated Use copyMaterial.dithering instead.
   */
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(value) {
    this.copyMaterial.dithering = value;
  }
  /**
   * The kernel size.
   *
   * @type {KernelSize}
   * @deprecated Use blurMaterial.kernelSize instead.
   */
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(value) {
    this.blurMaterial.kernelSize = value;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.width instead.
   */
  get width() {
    return this.resolution.width;
  }
  /**
   * Sets the render width.
   *
   * @type {Number}
   * @deprecated Use resolution.preferredWidth instead.
   */
  set width(value) {
    this.resolution.preferredWidth = value;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.height instead.
   */
  get height() {
    return this.resolution.height;
  }
  /**
   * Sets the render height.
   *
   * @type {Number}
   * @deprecated Use resolution.preferredHeight instead.
   */
  set height(value) {
    this.resolution.preferredHeight = value;
  }
  /**
   * The current blur scale.
   *
   * @type {Number}
   * @deprecated Use blurMaterial.scale instead.
   */
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(value) {
    this.blurMaterial.scale = value;
  }
  /**
   * Returns the current blur scale.
   *
   * @deprecated Use blurMaterial.scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.blurMaterial.scale;
  }
  /**
   * Sets the blur scale.
   *
   * @deprecated Use blurMaterial.scale instead.
   * @param {Number} value - The scale.
   */
  setScale(value) {
    this.blurMaterial.scale = value;
  }
  /**
   * Returns the kernel size.
   *
   * @deprecated Use blurMaterial.kernelSize instead.
   * @return {KernelSize} The kernel size.
   */
  getKernelSize() {
    return this.kernelSize;
  }
  /**
   * Sets the kernel size.
   *
   * Larger kernels require more processing power but scale well with larger render resolutions.
   *
   * @deprecated Use blurMaterial.kernelSize instead.
   * @param {KernelSize} value - The kernel size.
   */
  setKernelSize(value) {
    this.kernelSize = value;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * Renders the blur.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const scene = this.scene;
    const camera = this.camera;
    const renderTargetA = this.renderTargetA;
    const renderTargetB = this.renderTargetB;
    const material = this.blurMaterial;
    const kernelSequence = material.kernelSequence;
    let previousBuffer = inputBuffer;
    this.fullscreenMaterial = material;
    for (let i = 0, l = kernelSequence.length; i < l; ++i) {
      const buffer = (i & 1) === 0 ? renderTargetA : renderTargetB;
      material.kernel = kernelSequence[i];
      material.inputBuffer = previousBuffer.texture;
      renderer.setRenderTarget(buffer);
      renderer.render(scene, camera);
      previousBuffer = buffer;
    }
    this.fullscreenMaterial = this.copyMaterial;
    this.copyMaterial.inputBuffer = previousBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
    renderer.render(scene, camera);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    const w = resolution.width, h = resolution.height;
    this.renderTargetA.setSize(w, h);
    this.renderTargetB.setSize(w, h);
    this.blurMaterial.setSize(width, height);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0) {
      this.renderTargetA.texture.type = frameBufferType;
      this.renderTargetB.texture.type = frameBufferType;
      if (frameBufferType !== UnsignedByteType3) {
        this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      } else if (renderer !== null && renderer.outputColorSpace === SRGBColorSpace3) {
        this.renderTargetA.texture.colorSpace = SRGBColorSpace3;
        this.renderTargetB.texture.colorSpace = SRGBColorSpace3;
      }
    }
  }
  /**
   * An auto sizing flag.
   *
   * @type {Number}
   * @deprecated Use {@link Resolution.AUTO_SIZE} instead.
   */
  static get AUTO_SIZE() {
    return Resolution.AUTO_SIZE;
  }
};

// src/passes/LuminancePass.js
const {UnsignedByteType:UnsignedByteType4,WebGLRenderTarget:WebGLRenderTarget6} = await importShared('three');


// src/materials/LuminanceMaterial.js
const {NoBlending:NoBlending3,REVISION,ShaderMaterial:ShaderMaterial4,Uniform:Uniform5} = await importShared('three');


// src/materials/glsl/luminance.frag
var luminance_default = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`;

// src/materials/LuminanceMaterial.js
var LuminanceMaterial = class extends ShaderMaterial4 {
  /**
   * Constructs a new luminance material.
   *
   * @param {Boolean} [colorOutput=false] - Defines whether the shader should output colors scaled with their luminance value.
   * @param {Vector2} [luminanceRange] - If provided, the shader will mask out texels that aren't in the specified luminance range.
   */
  constructor(colorOutput = false, luminanceRange = null) {
    super({
      name: "LuminanceMaterial",
      defines: {
        THREE_REVISION: REVISION.replace(/\D+/g, "")
      },
      uniforms: {
        inputBuffer: new Uniform5(null),
        threshold: new Uniform5(0),
        smoothing: new Uniform5(1),
        range: new Uniform5(null)
      },
      blending: NoBlending3,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: luminance_default,
      vertexShader: common_default
    });
    this.colorOutput = colorOutput;
    this.luminanceRange = luminanceRange;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * The luminance threshold.
   *
   * @type {Number}
   */
  get threshold() {
    return this.uniforms.threshold.value;
  }
  set threshold(value) {
    if (this.smoothing > 0 || value > 0) {
      this.defines.THRESHOLD = "1";
    } else {
      delete this.defines.THRESHOLD;
    }
    this.uniforms.threshold.value = value;
  }
  /**
   * Returns the luminance threshold.
   *
   * @deprecated Use threshold instead.
   * @return {Number} The threshold.
   */
  getThreshold() {
    return this.threshold;
  }
  /**
   * Sets the luminance threshold.
   *
   * @deprecated Use threshold instead.
   * @param {Number} value - The threshold.
   */
  setThreshold(value) {
    this.threshold = value;
  }
  /**
   * The luminance threshold smoothing.
   *
   * @type {Number}
   */
  get smoothing() {
    return this.uniforms.smoothing.value;
  }
  set smoothing(value) {
    if (this.threshold > 0 || value > 0) {
      this.defines.THRESHOLD = "1";
    } else {
      delete this.defines.THRESHOLD;
    }
    this.uniforms.smoothing.value = value;
  }
  /**
   * Returns the luminance threshold smoothing factor.
   *
   * @deprecated Use smoothing instead.
   * @return {Number} The smoothing factor.
   */
  getSmoothingFactor() {
    return this.smoothing;
  }
  /**
   * Sets the luminance threshold smoothing factor.
   *
   * @deprecated Use smoothing instead.
   * @param {Number} value - The smoothing factor.
   */
  setSmoothingFactor(value) {
    this.smoothing = value;
  }
  /**
   * Indicates whether the luminance threshold is enabled.
   *
   * @type {Boolean}
   * @deprecated Adjust the threshold or smoothing factor instead.
   */
  get useThreshold() {
    return this.threshold > 0 || this.smoothing > 0;
  }
  set useThreshold(value) {
  }
  /**
   * Indicates whether color output is enabled.
   *
   * @type {Boolean}
   */
  get colorOutput() {
    return this.defines.COLOR !== void 0;
  }
  set colorOutput(value) {
    if (value) {
      this.defines.COLOR = "1";
    } else {
      delete this.defines.COLOR;
    }
    this.needsUpdate = true;
  }
  /**
   * Indicates whether color output is enabled.
   *
   * @deprecated Use colorOutput instead.
   * @return {Boolean} Whether color output is enabled.
   */
  isColorOutputEnabled(value) {
    return this.colorOutput;
  }
  /**
   * Enables or disables color output.
   *
   * @deprecated Use colorOutput instead.
   * @param {Boolean} value - Whether color output should be enabled.
   */
  setColorOutputEnabled(value) {
    this.colorOutput = value;
  }
  /**
   * Indicates whether luminance masking is enabled.
   *
   * @type {Boolean}
   * @deprecated
   */
  get useRange() {
    return this.luminanceRange !== null;
  }
  set useRange(value) {
    this.luminanceRange = null;
  }
  /**
   * The luminance range. Set to null to disable.
   *
   * @type {Boolean}
   */
  get luminanceRange() {
    return this.uniforms.range.value;
  }
  set luminanceRange(value) {
    if (value !== null) {
      this.defines.RANGE = "1";
    } else {
      delete this.defines.RANGE;
    }
    this.uniforms.range.value = value;
    this.needsUpdate = true;
  }
  /**
   * Returns the current luminance range.
   *
   * @deprecated Use luminanceRange instead.
   * @return {Vector2} The luminance range.
   */
  getLuminanceRange() {
    return this.luminanceRange;
  }
  /**
   * Sets a luminance range. Set to null to disable.
   *
   * @deprecated Use luminanceRange instead.
   * @param {Vector2} value - The luminance range.
   */
  setLuminanceRange(value) {
    this.luminanceRange = value;
  }
};

// src/passes/LuminancePass.js
var LuminancePass = class extends Pass {
  /**
   * Constructs a new luminance pass.
   *
   * @param {Object} [options] - The options. See {@link LuminanceMaterial} for additional options.
   * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
   * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor({
    renderTarget,
    luminanceRange,
    colorOutput,
    resolutionScale = 1,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("LuminancePass");
    this.fullscreenMaterial = new LuminanceMaterial(colorOutput, luminanceRange);
    this.needsSwap = false;
    this.renderTarget = renderTarget;
    if (this.renderTarget === void 0) {
      this.renderTarget = new WebGLRenderTarget6(1, 1, { depthBuffer: false });
      this.renderTarget.texture.name = "LuminancePass.Target";
    }
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  /**
   * The luminance texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the luminance texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Renders the luminance.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const material = this.fullscreenMaterial;
    material.inputBuffer = inputBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
    renderer.render(this.scene, this.camera);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    this.renderTarget.setSize(resolution.width, resolution.height);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - A renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0 && frameBufferType !== UnsignedByteType4) {
      this.renderTarget.texture.type = frameBufferType;
      this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
    }
  }
};

// src/passes/MipmapBlurPass.js
const {SRGBColorSpace:SRGBColorSpace4,UnsignedByteType:UnsignedByteType5,Vector2:Vector26,WebGLRenderTarget:WebGLRenderTarget7} = await importShared('three');


// src/materials/DownsamplingMaterial.js
const {NoBlending:NoBlending4,ShaderMaterial:ShaderMaterial5,Uniform:Uniform6,Vector2:Vector24} = await importShared('three');


// src/materials/glsl/convolution.downsampling.frag
var convolution_downsampling_default = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`;

// src/materials/glsl/convolution.downsampling.vert
var convolution_downsampling_default2 = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/DownsamplingMaterial.js
var DownsamplingMaterial = class extends ShaderMaterial5 {
  /**
   * Constructs a new downsampling material.
   */
  constructor() {
    super({
      name: "DownsamplingMaterial",
      uniforms: {
        inputBuffer: new Uniform6(null),
        texelSize: new Uniform6(new Vector24())
      },
      blending: NoBlending4,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: convolution_downsampling_default,
      vertexShader: convolution_downsampling_default2
    });
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.uniforms.texelSize.value.set(1 / width, 1 / height);
  }
};

// src/materials/UpsamplingMaterial.js
const {NoBlending:NoBlending5,ShaderMaterial:ShaderMaterial6,Uniform:Uniform7,Vector2:Vector25} = await importShared('three');


// src/materials/glsl/convolution.upsampling.frag
var convolution_upsampling_default = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`;

// src/materials/glsl/convolution.upsampling.vert
var convolution_upsampling_default2 = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/UpsamplingMaterial.js
var UpsamplingMaterial = class extends ShaderMaterial6 {
  /**
   * Constructs a new upsampling material.
   */
  constructor() {
    super({
      name: "UpsamplingMaterial",
      uniforms: {
        inputBuffer: new Uniform7(null),
        supportBuffer: new Uniform7(null),
        texelSize: new Uniform7(new Vector25()),
        radius: new Uniform7(0.85)
      },
      blending: NoBlending5,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: convolution_upsampling_default,
      vertexShader: convolution_upsampling_default2
    });
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * A support buffer.
   *
   * @type {Texture}
   */
  set supportBuffer(value) {
    this.uniforms.supportBuffer.value = value;
  }
  /**
   * The blur radius.
   *
   * @type {Number}
   */
  get radius() {
    return this.uniforms.radius.value;
  }
  set radius(value) {
    this.uniforms.radius.value = value;
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.uniforms.texelSize.value.set(1 / width, 1 / height);
  }
};

// src/passes/MipmapBlurPass.js
var MipmapBlurPass = class extends Pass {
  /**
   * Constructs a new mipmap blur pass.
   *
   * @param {Object} [options] - The options.
   */
  constructor() {
    super("MipmapBlurPass");
    this.needsSwap = false;
    this.renderTarget = new WebGLRenderTarget7(1, 1, { depthBuffer: false });
    this.renderTarget.texture.name = "Upsampling.Mipmap0";
    this.downsamplingMipmaps = [];
    this.upsamplingMipmaps = [];
    this.downsamplingMaterial = new DownsamplingMaterial();
    this.upsamplingMaterial = new UpsamplingMaterial();
    this.resolution = new Vector26();
  }
  /**
   * A texture that contains the blurred result.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * The MIP levels. Default is 8.
   *
   * @type {Number}
   */
  get levels() {
    return this.downsamplingMipmaps.length;
  }
  set levels(value) {
    if (this.levels !== value) {
      const renderTarget = this.renderTarget;
      this.dispose();
      this.downsamplingMipmaps = [];
      this.upsamplingMipmaps = [];
      for (let i = 0; i < value; ++i) {
        const mipmap = renderTarget.clone();
        mipmap.texture.name = "Downsampling.Mipmap" + i;
        this.downsamplingMipmaps.push(mipmap);
      }
      this.upsamplingMipmaps.push(renderTarget);
      for (let i = 1, l = value - 1; i < l; ++i) {
        const mipmap = renderTarget.clone();
        mipmap.texture.name = "Upsampling.Mipmap" + i;
        this.upsamplingMipmaps.push(mipmap);
      }
      this.setSize(this.resolution.x, this.resolution.y);
    }
  }
  /**
   * The blur radius.
   *
   * @type {Number}
   */
  get radius() {
    return this.upsamplingMaterial.radius;
  }
  set radius(value) {
    this.upsamplingMaterial.radius = value;
  }
  /**
   * Renders the blur.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const { scene, camera } = this;
    const { downsamplingMaterial, upsamplingMaterial } = this;
    const { downsamplingMipmaps, upsamplingMipmaps } = this;
    let previousBuffer = inputBuffer;
    this.fullscreenMaterial = downsamplingMaterial;
    for (let i = 0, l = downsamplingMipmaps.length; i < l; ++i) {
      const mipmap = downsamplingMipmaps[i];
      downsamplingMaterial.setSize(previousBuffer.width, previousBuffer.height);
      downsamplingMaterial.inputBuffer = previousBuffer.texture;
      renderer.setRenderTarget(mipmap);
      renderer.render(scene, camera);
      previousBuffer = mipmap;
    }
    this.fullscreenMaterial = upsamplingMaterial;
    for (let i = upsamplingMipmaps.length - 1; i >= 0; --i) {
      const mipmap = upsamplingMipmaps[i];
      upsamplingMaterial.setSize(previousBuffer.width, previousBuffer.height);
      upsamplingMaterial.inputBuffer = previousBuffer.texture;
      upsamplingMaterial.supportBuffer = downsamplingMipmaps[i].texture;
      renderer.setRenderTarget(mipmap);
      renderer.render(scene, camera);
      previousBuffer = mipmap;
    }
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.set(width, height);
    let w = resolution.width, h = resolution.height;
    for (let i = 0, l = this.downsamplingMipmaps.length; i < l; ++i) {
      w = Math.round(w * 0.5);
      h = Math.round(h * 0.5);
      this.downsamplingMipmaps[i].setSize(w, h);
      if (i < this.upsamplingMipmaps.length) {
        this.upsamplingMipmaps[i].setSize(w, h);
      }
    }
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0) {
      const mipmaps = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const mipmap of mipmaps) {
        mipmap.texture.type = frameBufferType;
      }
      if (frameBufferType !== UnsignedByteType5) {
        this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
        this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      } else if (renderer !== null && renderer.outputColorSpace === SRGBColorSpace4) {
        for (const mipmap of mipmaps) {
          mipmap.texture.colorSpace = SRGBColorSpace4;
        }
      }
    }
  }
  /**
   * Deletes internal render targets and textures.
   */
  dispose() {
    super.dispose();
    for (const mipmap of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) {
      mipmap.dispose();
    }
  }
};

// src/effects/glsl/bloom.frag
var bloom_default = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`;

// src/effects/BloomEffect.js
var BloomEffect = class extends Effect {
  /**
   * Constructs a new bloom effect.
   *
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
   * @param {Number} [options.luminanceThreshold=1.0] - The luminance threshold. Raise this value to mask out darker elements in the scene.
   * @param {Number} [options.luminanceSmoothing=0.03] - Controls the smoothness of the luminance threshold.
   * @param {Boolean} [options.mipmapBlur=true] - Enables or disables mipmap blur.
   * @param {Number} [options.intensity=1.0] - The bloom intensity.
   * @param {Number} [options.radius=0.85] - The blur radius. Only applies to mipmap blur.
   * @param {Number} [options.levels=8] - The amount of MIP levels. Only applies to mipmap blur.
   * @param {KernelSize} [options.kernelSize=KernelSize.LARGE] - Deprecated. Use mipmapBlur instead.
   * @param {Number} [options.resolutionScale=0.5] - Deprecated. Use mipmapBlur instead.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use mipmapBlur instead.
   */
  constructor({
    blendFunction = BlendFunction.SCREEN,
    luminanceThreshold = 1,
    luminanceSmoothing = 0.03,
    mipmapBlur = true,
    intensity = 1,
    radius = 0.85,
    levels = 8,
    kernelSize = KernelSize.LARGE,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("BloomEffect", bloom_default, {
      blendFunction,
      uniforms: /* @__PURE__ */ new Map([
        ["map", new Uniform8(null)],
        ["intensity", new Uniform8(intensity)]
      ])
    });
    this.renderTarget = new WebGLRenderTarget8(1, 1, { depthBuffer: false });
    this.renderTarget.texture.name = "Bloom.Target";
    this.blurPass = new KawaseBlurPass({ kernelSize });
    this.luminancePass = new LuminancePass({ colorOutput: true });
    this.luminanceMaterial.threshold = luminanceThreshold;
    this.luminanceMaterial.smoothing = luminanceSmoothing;
    this.mipmapBlurPass = new MipmapBlurPass();
    this.mipmapBlurPass.enabled = mipmapBlur;
    this.mipmapBlurPass.radius = radius;
    this.mipmapBlurPass.levels = levels;
    this.uniforms.get("map").value = mipmapBlur ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  /**
   * A texture that contains the intermediate result of this effect.
   *
   * @type {Texture}
   */
  get texture() {
    return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
  }
  /**
   * Returns the generated bloom texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Returns the blur pass.
   *
   * @deprecated
   * @return {KawaseBlurPass} The blur pass.
   */
  getBlurPass() {
    return this.blurPass;
  }
  /**
   * Returns the luminance pass.
   *
   * @deprecated Use luminancePass instead.
   * @return {LuminancePass} The luminance pass.
   */
  getLuminancePass() {
    return this.luminancePass;
  }
  /**
   * The luminance material.
   *
   * @type {LuminanceMaterial}
   */
  get luminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  /**
   * Returns the luminance material.
   *
   * @deprecated Use luminanceMaterial instead.
   * @return {LuminanceMaterial} The material.
   */
  getLuminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated
   */
  get width() {
    return this.resolution.width;
  }
  set width(value) {
    this.resolution.preferredWidth = value;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated
   */
  get height() {
    return this.resolution.height;
  }
  set height(value) {
    this.resolution.preferredHeight = value;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated Use EffectPass.dithering instead.
   */
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(value) {
    this.blurPass.dithering = value;
  }
  /**
   * The blur kernel size.
   *
   * @type {KernelSize}
   * @deprecated
   */
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(value) {
    this.blurPass.kernelSize = value;
  }
  /**
   * @type {Number}
   * @deprecated
   */
  get distinction() {
    console.warn(this.name, "distinction was removed");
    return 1;
  }
  set distinction(value) {
    console.warn(this.name, "distinction was removed");
  }
  /**
   * The bloom intensity.
   *
   * @type {Number}
   */
  get intensity() {
    return this.uniforms.get("intensity").value;
  }
  set intensity(value) {
    this.uniforms.get("intensity").value = value;
  }
  /**
   * The bloom intensity.
   *
   * @deprecated Use intensity instead.
   * @return {Number} The intensity.
   */
  getIntensity() {
    return this.intensity;
  }
  /**
   * Sets the bloom intensity.
   *
   * @deprecated Use intensity instead.
   * @param {Number} value - The intensity.
   */
  setIntensity(value) {
    this.intensity = value;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(renderer, inputBuffer, deltaTime) {
    const renderTarget = this.renderTarget;
    const luminancePass = this.luminancePass;
    if (luminancePass.enabled) {
      luminancePass.render(renderer, inputBuffer);
      if (this.mipmapBlurPass.enabled) {
        this.mipmapBlurPass.render(renderer, luminancePass.renderTarget);
      } else {
        this.blurPass.render(renderer, luminancePass.renderTarget, renderTarget);
      }
    } else {
      if (this.mipmapBlurPass.enabled) {
        this.mipmapBlurPass.render(renderer, inputBuffer);
      } else {
        this.blurPass.render(renderer, inputBuffer, renderTarget);
      }
    }
  }
  /**
   * Updates the size of internal render targets.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    this.renderTarget.setSize(resolution.width, resolution.height);
    this.blurPass.resolution.copy(resolution);
    this.luminancePass.setSize(width, height);
    this.mipmapBlurPass.setSize(width, height);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    this.blurPass.initialize(renderer, alpha, frameBufferType);
    this.luminancePass.initialize(renderer, alpha, frameBufferType);
    this.mipmapBlurPass.initialize(renderer, alpha, frameBufferType);
    if (frameBufferType !== void 0) {
      this.renderTarget.texture.type = frameBufferType;
      if (renderer !== null && renderer.outputColorSpace === SRGBColorSpace5) {
        this.renderTarget.texture.colorSpace = SRGBColorSpace5;
      }
    }
  }
};

// src/effects/BokehEffect.js
const {Uniform:Uniform9} = await importShared('three');

// src/effects/BrightnessContrastEffect.js
const {SRGBColorSpace:SRGBColorSpace6,Uniform:Uniform10} = await importShared('three');

// src/effects/ColorDepthEffect.js
const {Uniform:Uniform11} = await importShared('three');

// src/effects/ChromaticAberrationEffect.js
const {Uniform:Uniform12,Vector2:Vector27} = await importShared('three');


// src/effects/glsl/chromatic-aberration.frag
var chromatic_aberration_default = `#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`;

// src/effects/glsl/chromatic-aberration.vert
var chromatic_aberration_default2 = `uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}`;

// src/effects/ChromaticAberrationEffect.js
var ChromaticAberrationEffect = class extends Effect {
  /**
   * Constructs a new chromatic aberration effect.
   *
   * @param {Object} [options] - The options.
   * @param {Vector2} [options.offset] - The color offset.
   * @param {Boolean} [options.radialModulation=false] - Whether the effect should be modulated with a radial gradient.
   * @param {Number} [options.modulationOffset=0.15] - The modulation offset. Only applies if `radialModulation` is enabled.
   */
  constructor({
    offset = new Vector27(1e-3, 5e-4),
    radialModulation = false,
    modulationOffset = 0.15
  } = {}) {
    super("ChromaticAberrationEffect", chromatic_aberration_default, {
      vertexShader: chromatic_aberration_default2,
      attributes: EffectAttribute.CONVOLUTION,
      uniforms: /* @__PURE__ */ new Map([
        ["offset", new Uniform12(offset)],
        ["modulationOffset", new Uniform12(modulationOffset)]
      ])
    });
    this.radialModulation = radialModulation;
  }
  /**
   * The color offset.
   *
   * @type {Vector2}
   */
  get offset() {
    return this.uniforms.get("offset").value;
  }
  set offset(value) {
    this.uniforms.get("offset").value = value;
  }
  /**
   * Indicates whether radial modulation is enabled.
   *
   * When enabled, the effect will be weaker in the middle and stronger towards the screen edges.
   *
   * @type {Boolean}
   */
  get radialModulation() {
    return this.defines.has("RADIAL_MODULATION");
  }
  set radialModulation(value) {
    if (value) {
      this.defines.set("RADIAL_MODULATION", "1");
    } else {
      this.defines.delete("RADIAL_MODULATION");
    }
    this.setChanged();
  }
  /**
   * The modulation offset.
   *
   * @type {Number}
   */
  get modulationOffset() {
    return this.uniforms.get("modulationOffset").value;
  }
  set modulationOffset(value) {
    this.uniforms.get("modulationOffset").value = value;
  }
  /**
   * Returns the color offset vector.
   *
   * @deprecated Use offset instead.
   * @return {Vector2} The offset.
   */
  getOffset() {
    return this.offset;
  }
  /**
   * Sets the color offset vector.
   *
   * @deprecated Use offset instead.
   * @param {Vector2} value - The offset.
   */
  setOffset(value) {
    this.offset = value;
  }
};

// src/effects/DepthOfFieldEffect.js
const {BasicDepthPacking:BasicDepthPacking4,SRGBColorSpace:SRGBColorSpace7,Uniform:Uniform16,UnsignedByteType:UnsignedByteType8,WebGLRenderTarget:WebGLRenderTarget9} = await importShared('three');

// src/materials/BokehMaterial.js
const {NoBlending:NoBlending6,ShaderMaterial:ShaderMaterial7,Uniform:Uniform13,Vector2:Vector28} = await importShared('three');

// src/materials/CircleOfConfusionMaterial.js
const {BasicDepthPacking:BasicDepthPacking3,NoBlending:NoBlending7,PerspectiveCamera,ShaderMaterial:ShaderMaterial8,Uniform:Uniform14} = await importShared('three');

// src/materials/MaskMaterial.js
const {NoBlending:NoBlending8,ShaderMaterial:ShaderMaterial9,Uniform:Uniform15,UnsignedByteType:UnsignedByteType6} = await importShared('three');

// src/passes/ShaderPass.js
const {UnsignedByteType:UnsignedByteType7} = await importShared('three');

var ShaderPass = class extends Pass {
  /**
   * Constructs a new shader pass.
   *
   * @param {ShaderMaterial} material - A shader material.
   * @param {String} [input="inputBuffer"] - The name of the input buffer uniform.
   */
  constructor(material, input = "inputBuffer") {
    super("ShaderPass");
    this.fullscreenMaterial = material;
    this.input = input;
  }
  /**
   * Sets the name of the input buffer uniform.
   *
   * @param {String} input - The name of the input buffer uniform.
   * @deprecated Use input instead.
   */
  setInput(input) {
    this.input = input;
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const uniforms = this.fullscreenMaterial.uniforms;
    if (inputBuffer !== null && uniforms !== void 0 && uniforms[this.input] !== void 0) {
      uniforms[this.input].value = inputBuffer.texture;
    }
    renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
    renderer.render(this.scene, this.camera);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - A renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    if (frameBufferType !== void 0 && frameBufferType !== UnsignedByteType7) {
      this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
    }
  }
};

// src/effects/DotScreenEffect.js
const {Uniform:Uniform17,Vector2:Vector29} = await importShared('three');

// src/effects/GammaCorrectionEffect.js
const {Uniform:Uniform18} = await importShared('three');

// src/effects/GlitchEffect.js
const {NearestFilter,RepeatWrapping:RepeatWrapping2,RGBAFormat:RGBAFormat2,Uniform:Uniform19,Vector2:Vector210} = await importShared('three');

// src/textures/NoiseTexture.js
const {DataTexture,RedFormat,RGFormat,RGBAFormat,UnsignedByteType:UnsignedByteType9} = await importShared('three');

// src/effects/GodRaysEffect.js
const {BasicDepthPacking:BasicDepthPacking6,Color:Color3,DepthTexture:DepthTexture2,Matrix4,Scene:Scene2,SRGBColorSpace:SRGBColorSpace8,Uniform:Uniform22,Vector2:Vector212,Vector3,WebGLRenderTarget:WebGLRenderTarget10} = await importShared('three');


// src/materials/DepthMaskMaterial.js
const {AlwaysDepth,BasicDepthPacking:BasicDepthPacking5,EqualDepth,GreaterDepth,GreaterEqualDepth,LessDepth,LessEqualDepth,NeverDepth,NoBlending:NoBlending9,NotEqualDepth,PerspectiveCamera:PerspectiveCamera2,ShaderMaterial:ShaderMaterial10,Uniform:Uniform20,Vector2:Vector211} = await importShared('three');


// src/enums/DepthTestStrategy.js
var DepthTestStrategy = {
  KEEP_MAX_DEPTH: 1,
  DISCARD_MAX_DEPTH: 2
};

// src/materials/glsl/depth-mask.frag
var depth_mask_default = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`;

// src/materials/DepthMaskMaterial.js
var DepthMaskMaterial = class extends ShaderMaterial10 {
  /**
   * Constructs a new depth mask material.
   */
  constructor() {
    super({
      name: "DepthMaskMaterial",
      defines: {
        DEPTH_EPSILON: "0.0001",
        DEPTH_PACKING_0: "0",
        DEPTH_PACKING_1: "0",
        DEPTH_TEST_STRATEGY: DepthTestStrategy.KEEP_MAX_DEPTH
      },
      uniforms: {
        inputBuffer: new Uniform20(null),
        depthBuffer0: new Uniform20(null),
        depthBuffer1: new Uniform20(null),
        cameraNearFar: new Uniform20(new Vector211(1, 1))
      },
      blending: NoBlending9,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: depth_mask_default,
      vertexShader: common_default
    });
    this.depthMode = LessDepth;
  }
  /**
   * The primary depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer0(value) {
    this.uniforms.depthBuffer0.value = value;
  }
  /**
   * The primary depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking0(value) {
    this.defines.DEPTH_PACKING_0 = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Sets the base depth buffer.
   *
   * @deprecated Use depthBuffer0 and depthPacking0 instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer0(buffer, depthPacking = BasicDepthPacking5) {
    this.depthBuffer0 = buffer;
    this.depthPacking0 = depthPacking;
  }
  /**
   * The secondary depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer1(value) {
    this.uniforms.depthBuffer1.value = value;
  }
  /**
   * The secondary depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking1(value) {
    this.defines.DEPTH_PACKING_1 = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Sets the depth buffer that will be compared with the base depth buffer.
   *
   * @deprecated Use depthBuffer1 and depthPacking1 instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer1(buffer, depthPacking = BasicDepthPacking5) {
    this.depthBuffer1 = buffer;
    this.depthPacking1 = depthPacking;
  }
  /**
   * The strategy for handling maximum depth.
   *
   * @type {DepthTestStrategy}
   */
  get maxDepthStrategy() {
    return Number(this.defines.DEPTH_TEST_STRATEGY);
  }
  set maxDepthStrategy(value) {
    this.defines.DEPTH_TEST_STRATEGY = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Indicates whether maximum depth values should be preserved.
   *
   * @type {Boolean}
   * @deprecated Use maxDepthStrategy instead.
   */
  get keepFar() {
    return this.maxDepthStrategy;
  }
  set keepFar(value) {
    this.maxDepthStrategy = value ? DepthTestStrategy.KEEP_MAX_DEPTH : DepthTestStrategy.DISCARD_MAX_DEPTH;
  }
  /**
   * Returns the strategy for dealing with maximum depth values.
   *
   * @deprecated Use maxDepthStrategy instead.
   * @return {DepthTestStrategy} The strategy.
   */
  getMaxDepthStrategy() {
    return this.maxDepthStrategy;
  }
  /**
   * Sets the strategy for dealing with maximum depth values.
   *
   * @deprecated Use maxDepthStrategy instead.
   * @param {DepthTestStrategy} value - The strategy.
   */
  setMaxDepthStrategy(value) {
    this.maxDepthStrategy = value;
  }
  /**
   * A small error threshold that is used for `EqualDepth` and `NotEqualDepth` tests. Default is `1e-4`.
   *
   * @type {Number}
   */
  get epsilon() {
    return Number(this.defines.DEPTH_EPSILON);
  }
  set epsilon(value) {
    this.defines.DEPTH_EPSILON = value.toFixed(16);
    this.needsUpdate = true;
  }
  /**
   * Returns the current error threshold for depth comparisons.
   *
   * @deprecated Use epsilon instead.
   * @return {Number} The error threshold.
   */
  getEpsilon() {
    return this.epsilon;
  }
  /**
   * Sets the depth comparison error threshold.
   *
   * @deprecated Use epsilon instead.
   * @param {Number} value - The new error threshold.
   */
  setEpsilon(value) {
    this.epsilon = value;
  }
  /**
   * The depth mode.
   *
   * @see https://threejs.org/docs/#api/en/constants/Materials
   * @type {DepthModes}
   */
  get depthMode() {
    return Number(this.defines.DEPTH_MODE);
  }
  set depthMode(value) {
    let depthTest;
    switch (value) {
      case NeverDepth:
        depthTest = "false";
        break;
      case AlwaysDepth:
        depthTest = "true";
        break;
      case EqualDepth:
        depthTest = "abs(d1 - d0) <= DEPTH_EPSILON";
        break;
      case NotEqualDepth:
        depthTest = "abs(d1 - d0) > DEPTH_EPSILON";
        break;
      case LessDepth:
        depthTest = "d0 > d1";
        break;
      case LessEqualDepth:
        depthTest = "d0 >= d1";
        break;
      case GreaterEqualDepth:
        depthTest = "d0 <= d1";
        break;
      case GreaterDepth:
      default:
        depthTest = "d0 < d1";
        break;
    }
    this.defines.DEPTH_MODE = value.toFixed(0);
    this.defines["depthTest(d0, d1)"] = depthTest;
    this.needsUpdate = true;
  }
  /**
   * Returns the current depth mode.
   *
   * @deprecated Use depthMode instead.
   * @return {DepthModes} The depth mode. Default is `LessDepth`.
   */
  getDepthMode() {
    return this.depthMode;
  }
  /**
   * Sets the depth mode.
   *
   * @deprecated Use depthMode instead.
   * @param {DepthModes} mode - The depth mode.
   */
  setDepthMode(mode) {
    this.depthMode = mode;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(camera) {
    this.copyCameraSettings(camera);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(camera) {
    if (camera) {
      this.uniforms.cameraNearFar.value.set(camera.near, camera.far);
      if (camera instanceof PerspectiveCamera2) {
        this.defines.PERSPECTIVE_CAMERA = "1";
      } else {
        delete this.defines.PERSPECTIVE_CAMERA;
      }
      this.needsUpdate = true;
    }
  }
};

// src/materials/GodRaysMaterial.js
const {NoBlending:NoBlending10,ShaderMaterial:ShaderMaterial11,Uniform:Uniform21} = await importShared('three');


// src/materials/glsl/convolution.god-rays.frag
var convolution_god_rays_default = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`;

// src/materials/GodRaysMaterial.js
var GodRaysMaterial = class extends ShaderMaterial11 {
  /**
   * Constructs a new god rays material.
   *
   * TODO Remove lightPosition param.
   * @param {Vector2} lightPosition - Deprecated.
   */
  constructor(lightPosition) {
    super({
      name: "GodRaysMaterial",
      defines: {
        SAMPLES_INT: "60",
        SAMPLES_FLOAT: "60.0"
      },
      uniforms: {
        inputBuffer: new Uniform21(null),
        lightPosition: new Uniform21(lightPosition),
        density: new Uniform21(1),
        decay: new Uniform21(1),
        weight: new Uniform21(1),
        exposure: new Uniform21(1),
        clampMax: new Uniform21(1)
      },
      blending: NoBlending10,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: convolution_god_rays_default,
      vertexShader: common_default
    });
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * The screen space position of the light source.
   *
   * @type {Vector2}
   */
  get lightPosition() {
    return this.uniforms.lightPosition.value;
  }
  /**
   * Returns the screen space position of the light source.
   *
   * @deprecated Use lightPosition instead.
   * @return {Vector2} The position.
   */
  getLightPosition() {
    return this.uniforms.lightPosition.value;
  }
  /**
   * Sets the screen space position of the light source.
   *
   * @deprecated Use lightPosition instead.
   * @param {Vector2} value - The position.
   */
  setLightPosition(value) {
    this.uniforms.lightPosition.value = value;
  }
  /**
   * The density.
   *
   * @type {Number}
   */
  get density() {
    return this.uniforms.density.value;
  }
  set density(value) {
    this.uniforms.density.value = value;
  }
  /**
   * Returns the density.
   *
   * @deprecated Use density instead.
   * @return {Number} The density.
   */
  getDensity() {
    return this.uniforms.density.value;
  }
  /**
   * Sets the density.
   *
   * @deprecated Use density instead.
   * @param {Number} value - The density.
   */
  setDensity(value) {
    this.uniforms.density.value = value;
  }
  /**
   * The decay.
   *
   * @type {Number}
   */
  get decay() {
    return this.uniforms.decay.value;
  }
  set decay(value) {
    this.uniforms.decay.value = value;
  }
  /**
   * Returns the decay.
   *
   * @deprecated Use decay instead.
   * @return {Number} The decay.
   */
  getDecay() {
    return this.uniforms.decay.value;
  }
  /**
   * Sets the decay.
   *
   * @deprecated Use decay instead.
   * @param {Number} value - The decay.
   */
  setDecay(value) {
    this.uniforms.decay.value = value;
  }
  /**
   * The weight.
   *
   * @type {Number}
   */
  get weight() {
    return this.uniforms.weight.value;
  }
  set weight(value) {
    this.uniforms.weight.value = value;
  }
  /**
   * Returns the weight.
   *
   * @deprecated Use weight instead.
   * @return {Number} The weight.
   */
  getWeight() {
    return this.uniforms.weight.value;
  }
  /**
   * Sets the weight.
   *
   * @deprecated Use weight instead.
   * @param {Number} value - The weight.
   */
  setWeight(value) {
    this.uniforms.weight.value = value;
  }
  /**
   * The exposure.
   *
   * @type {Number}
   */
  get exposure() {
    return this.uniforms.exposure.value;
  }
  set exposure(value) {
    this.uniforms.exposure.value = value;
  }
  /**
   * Returns the exposure.
   *
   * @deprecated Use exposure instead.
   * @return {Number} The exposure.
   */
  getExposure() {
    return this.uniforms.exposure.value;
  }
  /**
   * Sets the exposure.
   *
   * @deprecated Use exposure instead.
   * @param {Number} value - The exposure.
   */
  setExposure(value) {
    this.uniforms.exposure.value = value;
  }
  /**
   * The maximum light intensity.
   *
   * @type {Number}
   */
  get maxIntensity() {
    return this.uniforms.clampMax.value;
  }
  set maxIntensity(value) {
    this.uniforms.clampMax.value = value;
  }
  /**
   * Returns the maximum light intensity.
   *
   * @deprecated Use maxIntensity instead.
   * @return {Number} The maximum light intensity.
   */
  getMaxIntensity() {
    return this.uniforms.clampMax.value;
  }
  /**
   * Sets the maximum light intensity.
   *
   * @deprecated Use maxIntensity instead.
   * @param {Number} value - The maximum light intensity.
   */
  setMaxIntensity(value) {
    this.uniforms.clampMax.value = value;
  }
  /**
   * The amount of samples per pixel.
   *
   * @type {Number}
   */
  get samples() {
    return Number(this.defines.SAMPLES_INT);
  }
  set samples(value) {
    const s = Math.floor(value);
    this.defines.SAMPLES_INT = s.toFixed(0);
    this.defines.SAMPLES_FLOAT = s.toFixed(1);
    this.needsUpdate = true;
  }
  /**
   * Returns the amount of samples per pixel.
   *
   * @deprecated Use samples instead.
   * @return {Number} The sample count.
   */
  getSamples() {
    return this.samples;
  }
  /**
   * Sets the amount of samples per pixel.
   *
   * @deprecated Use samples instead.
   * @param {Number} value - The sample count.
   */
  setSamples(value) {
    this.samples = value;
  }
};

// src/passes/RenderPass.js
var RenderPass = class extends Pass {
  /**
   * Constructs a new render pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use to render the scene.
   * @param {Material} [overrideMaterial=null] - An override material.
   */
  constructor(scene, camera, overrideMaterial = null) {
    super("RenderPass", scene, camera);
    this.needsSwap = false;
    this.clearPass = new ClearPass();
    this.overrideMaterialManager = overrideMaterial === null ? null : new OverrideMaterialManager(overrideMaterial);
    this.ignoreBackground = false;
    this.skipShadowMapUpdate = false;
    this.selection = null;
  }
  set mainScene(value) {
    this.scene = value;
  }
  set mainCamera(value) {
    this.camera = value;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(value) {
    super.renderToScreen = value;
    this.clearPass.renderToScreen = value;
  }
  /**
   * The current override material.
   *
   * @type {Material}
   */
  get overrideMaterial() {
    const manager = this.overrideMaterialManager;
    return manager !== null ? manager.material : null;
  }
  set overrideMaterial(value) {
    const manager = this.overrideMaterialManager;
    if (value !== null) {
      if (manager !== null) {
        manager.setMaterial(value);
      } else {
        this.overrideMaterialManager = new OverrideMaterialManager(value);
      }
    } else if (manager !== null) {
      manager.dispose();
      this.overrideMaterialManager = null;
    }
  }
  /**
   * Returns the current override material.
   *
   * @deprecated Use overrideMaterial instead.
   * @return {Material} The material.
   */
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  /**
   * Sets the override material.
   *
   * @deprecated Use overrideMaterial instead.
   * @return {Material} value - The material.
   */
  setOverrideMaterial(value) {
    this.overrideMaterial = value;
  }
  /**
   * Indicates whether the target buffer should be cleared before rendering.
   *
   * @type {Boolean}
   * @deprecated Use clearPass.enabled instead.
   */
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(value) {
    this.clearPass.enabled = value;
  }
  /**
   * Returns the selection. Default is `null` (no restriction).
   *
   * @deprecated Use selection instead.
   * @return {Selection} The selection.
   */
  getSelection() {
    return this.selection;
  }
  /**
   * Sets the selection. Set to `null` to disable.
   *
   * @deprecated Use selection instead.
   * @param {Selection} value - The selection.
   */
  setSelection(value) {
    this.selection = value;
  }
  /**
   * Indicates whether the scene background is disabled.
   *
   * @deprecated Use ignoreBackground instead.
   * @return {Boolean} Whether the scene background is disabled.
   */
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  /**
   * Enables or disables the scene background.
   *
   * @deprecated Use ignoreBackground instead.
   * @param {Boolean} value - Whether the scene background should be disabled.
   */
  setBackgroundDisabled(value) {
    this.ignoreBackground = value;
  }
  /**
   * Indicates whether the shadow map auto update is disabled.
   *
   * @deprecated Use skipShadowMapUpdate instead.
   * @return {Boolean} Whether the shadow map update is disabled.
   */
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  /**
   * Enables or disables the shadow map auto update.
   *
   * @deprecated Use skipShadowMapUpdate instead.
   * @param {Boolean} value - Whether the shadow map auto update should be disabled.
   */
  setShadowMapDisabled(value) {
    this.skipShadowMapUpdate = value;
  }
  /**
   * Returns the clear pass.
   *
   * @deprecated Use clearPass.enabled instead.
   * @return {ClearPass} The clear pass.
   */
  getClearPass() {
    return this.clearPass;
  }
  /**
   * Renders the scene.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const scene = this.scene;
    const camera = this.camera;
    const selection = this.selection;
    const mask = camera.layers.mask;
    const background = scene.background;
    const shadowMapAutoUpdate = renderer.shadowMap.autoUpdate;
    const renderTarget = this.renderToScreen ? null : inputBuffer;
    if (selection !== null) {
      camera.layers.set(selection.getLayer());
    }
    if (this.skipShadowMapUpdate) {
      renderer.shadowMap.autoUpdate = false;
    }
    if (this.ignoreBackground || this.clearPass.overrideClearColor !== null) {
      scene.background = null;
    }
    if (this.clearPass.enabled) {
      this.clearPass.render(renderer, inputBuffer);
    }
    renderer.setRenderTarget(renderTarget);
    if (this.overrideMaterialManager !== null) {
      this.overrideMaterialManager.render(renderer, scene, camera);
    } else {
      renderer.render(scene, camera);
    }
    camera.layers.mask = mask;
    scene.background = background;
    renderer.shadowMap.autoUpdate = shadowMapAutoUpdate;
  }
};

// src/effects/glsl/god-rays.frag
var god_rays_default = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`;

// src/effects/GodRaysEffect.js
var v = /* @__PURE__ */ new Vector3();
var m = /* @__PURE__ */ new Matrix4();
var GodRaysEffect = class extends Effect {
  /**
   * Constructs a new god rays effect.
   *
   * @param {Camera} [camera] - The main camera.
   * @param {Mesh|Points} [lightSource] - The light source. Must not write depth and has to be flagged as transparent.
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function of this effect.
   * @param {Number} [options.samples=60.0] - The number of samples per pixel.
   * @param {Number} [options.density=0.96] - The density of the light rays.
   * @param {Number} [options.decay=0.9] - An illumination decay factor.
   * @param {Number} [options.weight=0.4] - A light ray weight factor.
   * @param {Number} [options.exposure=0.6] - A constant attenuation coefficient.
   * @param {Number} [options.clampMax=1.0] - An upper bound for the saturation of the overall effect.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   * @param {KernelSize} [options.kernelSize=KernelSize.SMALL] - The blur kernel size. Has no effect if blur is disabled.
   * @param {Boolean} [options.blur=true] - Whether the god rays should be blurred to reduce artifacts.
   */
  constructor(camera, lightSource, {
    blendFunction = BlendFunction.SCREEN,
    samples = 60,
    density = 0.96,
    decay = 0.9,
    weight = 0.4,
    exposure = 0.6,
    clampMax = 1,
    blur = true,
    kernelSize = KernelSize.SMALL,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("GodRaysEffect", god_rays_default, {
      blendFunction,
      attributes: EffectAttribute.DEPTH,
      uniforms: /* @__PURE__ */ new Map([
        ["map", new Uniform22(null)]
      ])
    });
    this.camera = camera;
    this._lightSource = lightSource;
    this.lightSource = lightSource;
    this.lightScene = new Scene2();
    this.screenPosition = new Vector212();
    this.renderTargetA = new WebGLRenderTarget10(1, 1, { depthBuffer: false });
    this.renderTargetA.texture.name = "GodRays.Target.A";
    this.renderTargetB = this.renderTargetA.clone();
    this.renderTargetB.texture.name = "GodRays.Target.B";
    this.uniforms.get("map").value = this.renderTargetB.texture;
    this.renderTargetLight = new WebGLRenderTarget10(1, 1);
    this.renderTargetLight.texture.name = "GodRays.Light";
    this.renderTargetLight.depthTexture = new DepthTexture2();
    this.renderPassLight = new RenderPass(this.lightScene, camera);
    this.renderPassLight.clearPass.overrideClearColor = new Color3(0);
    this.clearPass = new ClearPass(true, false, false);
    this.clearPass.overrideClearColor = new Color3(0);
    this.blurPass = new KawaseBlurPass({ kernelSize });
    this.blurPass.enabled = blur;
    this.depthMaskPass = new ShaderPass(new DepthMaskMaterial());
    const depthMaskMaterial = this.depthMaskMaterial;
    depthMaskMaterial.depthBuffer1 = this.renderTargetLight.depthTexture;
    depthMaskMaterial.copyCameraSettings(camera);
    this.godRaysPass = new ShaderPass(new GodRaysMaterial(this.screenPosition));
    const godRaysMaterial = this.godRaysMaterial;
    godRaysMaterial.density = density;
    godRaysMaterial.decay = decay;
    godRaysMaterial.weight = weight;
    godRaysMaterial.exposure = exposure;
    godRaysMaterial.maxIntensity = clampMax;
    godRaysMaterial.samples = samples;
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  set mainCamera(value) {
    this.camera = value;
    this.renderPassLight.mainCamera = value;
    this.depthMaskMaterial.copyCameraSettings(value);
  }
  /**
   * Sets the light source.
   *
   * @type {Mesh|Points}
   */
  get lightSource() {
    return this._lightSource;
  }
  set lightSource(value) {
    this._lightSource = value;
    if (value !== null) {
      value.material.depthWrite = false;
      value.material.transparent = true;
    }
  }
  /**
   * Returns the blur pass that reduces aliasing artifacts and makes the light softer.
   *
   * @deprecated Use blurPass instead.
   * @return {KawaseBlurPass} The blur pass.
   */
  getBlurPass() {
    return this.blurPass;
  }
  /**
   * A texture that contains the intermediate result of this effect.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTargetB.texture;
  }
  /**
   * Returns the god rays texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.texture;
  }
  /**
   * The depth mask material.
   *
   * @type {DepthMaskMaterial}
   * @private
   */
  get depthMaskMaterial() {
    return this.depthMaskPass.fullscreenMaterial;
  }
  /**
   * The internal god rays material.
   *
   * @type {GodRaysMaterial}
   */
  get godRaysMaterial() {
    return this.godRaysPass.fullscreenMaterial;
  }
  /**
   * Returns the god rays material.
   *
   * @deprecated Use godRaysMaterial instead.
   * @return {GodRaysMaterial} The material.
   */
  getGodRaysMaterial() {
    return this.godRaysMaterial;
  }
  /**
   * Returns the resolution of this effect.
   *
   * @deprecated Use resolution instead.
   * @return {GodRaysMaterial} The material.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.width instead.
   */
  get width() {
    return this.resolution.width;
  }
  set width(value) {
    this.resolution.preferredWidth = value;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.height instead.
   */
  get height() {
    return this.resolution.height;
  }
  set height(value) {
    this.resolution.preferredHeight = value;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated
   */
  get dithering() {
    return this.godRaysMaterial.dithering;
  }
  set dithering(value) {
    const material = this.godRaysMaterial;
    material.dithering = value;
    material.needsUpdate = true;
  }
  /**
   * Indicates whether the god rays should be blurred to reduce artifacts.
   *
   * @type {Boolean}
   * @deprecated Use blurPass.enabled instead.
   */
  get blur() {
    return this.blurPass.enabled;
  }
  set blur(value) {
    this.blurPass.enabled = value;
  }
  /**
   * The blur kernel size.
   *
   * @type {KernelSize}
   * @deprecated Use blurPass.kernelSize instead.
   */
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(value) {
    this.blurPass.kernelSize = value;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * The number of samples per pixel.
   *
   * @type {Number}
   * @deprecated Use godRaysMaterial.samples instead.
   */
  get samples() {
    return this.godRaysMaterial.samples;
  }
  /**
   * A higher sample count improves quality at the cost of performance.
   *
   * @type {Number}
   * @deprecated Use godRaysMaterial.samples instead.
   */
  set samples(value) {
    this.godRaysMaterial.samples = value;
  }
  /**
   * Sets the depth texture.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {Number} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking6) {
    this.depthMaskPass.fullscreenMaterial.depthBuffer0 = depthTexture;
    this.depthMaskPass.fullscreenMaterial.depthPacking0 = depthPacking;
  }
  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(renderer, inputBuffer, deltaTime) {
    const lightSource = this.lightSource;
    const parent = lightSource.parent;
    const matrixAutoUpdate = lightSource.matrixAutoUpdate;
    const renderTargetA = this.renderTargetA;
    const renderTargetLight = this.renderTargetLight;
    lightSource.material.depthWrite = true;
    lightSource.matrixAutoUpdate = false;
    lightSource.updateWorldMatrix(true, false);
    if (parent !== null) {
      if (!matrixAutoUpdate) {
        m.copy(lightSource.matrix);
      }
      lightSource.matrix.copy(lightSource.matrixWorld);
    }
    this.lightScene.add(lightSource);
    this.renderPassLight.render(renderer, renderTargetLight);
    this.clearPass.render(renderer, renderTargetA);
    this.depthMaskPass.render(renderer, renderTargetLight, renderTargetA);
    lightSource.material.depthWrite = false;
    lightSource.matrixAutoUpdate = matrixAutoUpdate;
    if (parent !== null) {
      if (!matrixAutoUpdate) {
        lightSource.matrix.copy(m);
      }
      parent.add(lightSource);
    }
    v.setFromMatrixPosition(lightSource.matrixWorld).project(this.camera);
    this.screenPosition.set(
      Math.min(Math.max((v.x + 1) * 0.5, -1), 2),
      Math.min(Math.max((v.y + 1) * 0.5, -1), 2)
    );
    if (this.blurPass.enabled) {
      this.blurPass.render(renderer, renderTargetA, renderTargetA);
    }
    this.godRaysPass.render(renderer, renderTargetA, this.renderTargetB);
  }
  /**
   * Updates the size of internal render targets.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    const w = resolution.width, h = resolution.height;
    this.renderTargetA.setSize(w, h);
    this.renderTargetB.setSize(w, h);
    this.renderTargetLight.setSize(w, h);
    this.blurPass.resolution.copy(resolution);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    this.blurPass.initialize(renderer, alpha, frameBufferType);
    this.renderPassLight.initialize(renderer, alpha, frameBufferType);
    this.depthMaskPass.initialize(renderer, alpha, frameBufferType);
    this.godRaysPass.initialize(renderer, alpha, frameBufferType);
    if (frameBufferType !== void 0) {
      this.renderTargetA.texture.type = frameBufferType;
      this.renderTargetB.texture.type = frameBufferType;
      this.renderTargetLight.texture.type = frameBufferType;
      if (renderer !== null && renderer.outputColorSpace === SRGBColorSpace8) {
        this.renderTargetA.texture.colorSpace = SRGBColorSpace8;
        this.renderTargetB.texture.colorSpace = SRGBColorSpace8;
        this.renderTargetLight.texture.colorSpace = SRGBColorSpace8;
      }
    }
  }
};

// src/effects/GridEffect.js
const {Uniform:Uniform23,Vector2:Vector213} = await importShared('three');


// src/effects/glsl/grid.frag
var grid_default = `uniform vec2 scale;uniform float lineWidth;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float grid=0.5-max(abs(mod(uv.x*scale.x,1.0)-0.5),abs(mod(uv.y*scale.y,1.0)-0.5));outputColor=vec4(vec3(smoothstep(0.0,lineWidth,grid)),inputColor.a);}`;

// src/effects/GridEffect.js
var GridEffect = class extends Effect {
  /**
   * Constructs a new grid effect.
   *
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.OVERLAY] - The blend function of this effect.
   * @param {Number} [options.scale=1.0] - The scale of the grid pattern.
   * @param {Number} [options.lineWidth=0.0] - The line width of the grid pattern.
   */
  constructor({ blendFunction = BlendFunction.OVERLAY, scale = 1, lineWidth = 0 } = {}) {
    super("GridEffect", grid_default, {
      blendFunction,
      uniforms: /* @__PURE__ */ new Map([
        ["scale", new Uniform23(new Vector213())],
        ["lineWidth", new Uniform23(lineWidth)]
      ])
    });
    this.resolution = new Vector213();
    this.s = 0;
    this.scale = scale;
    this.l = 0;
    this.lineWidth = lineWidth;
  }
  /**
   * The scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.s;
  }
  set scale(value) {
    this.s = Math.max(value, 1e-6);
    this.setSize(this.resolution.width, this.resolution.height);
  }
  /**
   * Returns the current grid scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The grid scale.
   */
  getScale() {
    return this.scale;
  }
  /**
   * Sets the grid scale.
   *
   * @deprecated Use scale instead.
   * @param {Number} value - The new grid scale.
   */
  setScale(value) {
    this.scale = value;
  }
  /**
   * The line width.
   *
   * @type {Number}
   */
  get lineWidth() {
    return this.l;
  }
  set lineWidth(value) {
    this.l = value;
    this.setSize(this.resolution.width, this.resolution.height);
  }
  /**
   * Returns the current grid line width.
   *
   * @deprecated Use lineWidth instead.
   * @return {Number} The grid line width.
   */
  getLineWidth() {
    return this.lineWidth;
  }
  /**
   * Sets the grid line width.
   *
   * @deprecated Use lineWidth instead.
   * @param {Number} value - The new grid line width.
   */
  setLineWidth(value) {
    this.lineWidth = value;
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.resolution.set(width, height);
    const aspect = width / height;
    const scale = this.scale * (height * 0.125);
    this.uniforms.get("scale").value.set(aspect * scale, scale);
    this.uniforms.get("lineWidth").value = scale / height + this.lineWidth;
  }
};

// src/effects/HueSaturationEffect.js
const {Uniform:Uniform24,Vector3:Vector32} = await importShared('three');

// src/effects/LensDistortionEffect.js
const {Uniform:Uniform25,Vector2:Vector214} = await importShared('three');

// src/effects/LUT1DEffect.js
const {FloatType,HalfFloatType,Uniform:Uniform26} = await importShared('three');

// src/effects/LUT3DEffect.js
const {Data3DTexture:Data3DTexture2,FloatType:FloatType3,HalfFloatType:HalfFloatType2,LinearFilter:LinearFilter4,NearestFilter:NearestFilter2,SRGBColorSpace:SRGBColorSpace10,Uniform:Uniform27,Vector3:Vector34} = await importShared('three');


// src/textures/lut/LookupTexture.js
const {Color:Color4,ClampToEdgeWrapping,DataTexture:DataTexture2,Data3DTexture,FloatType:FloatType2,LinearFilter:LinearFilter3,LinearSRGBColorSpace:LinearSRGBColorSpace3,RGBAFormat:RGBAFormat3,SRGBColorSpace:SRGBColorSpace9,UnsignedByteType:UnsignedByteType10,Vector3:Vector33} = await importShared('three');

// src/effects/OutlineEffect.js
const {Color:Color6,RepeatWrapping:RepeatWrapping3,Uniform:Uniform30,UnsignedByteType:UnsignedByteType11,WebGLRenderTarget:WebGLRenderTarget12} = await importShared('three');


// src/materials/DepthComparisonMaterial.js
const {NoBlending:NoBlending11,PerspectiveCamera:PerspectiveCamera3,RGBADepthPacking,ShaderMaterial:ShaderMaterial12,Uniform:Uniform28} = await importShared('three');


// src/materials/glsl/depth-comparison.frag
var depth_comparison_default = `#include <packing>
#include <clipping_planes_pars_fragment>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float cameraNear;uniform float cameraFar;centroid varying float vViewZ;centroid varying vec4 vProjTexCoord;void main(){
#include <clipping_planes_fragment>
vec2 projTexCoord=(vProjTexCoord.xy/vProjTexCoord.w)*0.5+0.5;projTexCoord=clamp(projTexCoord,0.002,0.998);
#if DEPTH_PACKING == 3201
float fragCoordZ=unpackRGBAToDepth(texture2D(depthBuffer,projTexCoord));
#else
float fragCoordZ=texture2D(depthBuffer,projTexCoord).r;
#endif
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#else
float viewZ=orthographicDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#endif
float depthTest=(-vViewZ>-viewZ)?1.0:0.0;gl_FragColor.rg=vec2(0.0,depthTest);}`;

// src/materials/glsl/depth-comparison.vert
var depth_comparison_default2 = `#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
vViewZ=mvPosition.z;vProjTexCoord=gl_Position;
#include <clipping_planes_vertex>
}`;

// src/materials/DepthComparisonMaterial.js
var DepthComparisonMaterial = class extends ShaderMaterial12 {
  /**
   * Constructs a new depth comparison material.
   *
   * @param {Texture} [depthTexture=null] - A depth texture.
   * @param {PerspectiveCamera} [camera] - A camera.
   */
  constructor(depthTexture = null, camera) {
    super({
      name: "DepthComparisonMaterial",
      defines: {
        DEPTH_PACKING: "0"
      },
      uniforms: {
        depthBuffer: new Uniform28(null),
        cameraNear: new Uniform28(0.3),
        cameraFar: new Uniform28(1e3)
      },
      blending: NoBlending11,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: depth_comparison_default,
      vertexShader: depth_comparison_default2
    });
    this.depthBuffer = depthTexture;
    this.depthPacking = RGBADepthPacking;
    this.copyCameraSettings(camera);
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer(value) {
    this.uniforms.depthBuffer.value = value;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking(value) {
    this.defines.DEPTH_PACKING = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=RGBADepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(buffer, depthPacking = RGBADepthPacking) {
    this.depthBuffer = buffer;
    this.depthPacking = depthPacking;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(camera) {
    this.copyCameraSettings(camera);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(camera) {
    if (camera) {
      this.uniforms.cameraNear.value = camera.near;
      this.uniforms.cameraFar.value = camera.far;
      if (camera instanceof PerspectiveCamera3) {
        this.defines.PERSPECTIVE_CAMERA = "1";
      } else {
        delete this.defines.PERSPECTIVE_CAMERA;
      }
      this.needsUpdate = true;
    }
  }
};

// src/materials/OutlineMaterial.js
const {NoBlending:NoBlending12,ShaderMaterial:ShaderMaterial13,Uniform:Uniform29,Vector2:Vector215} = await importShared('three');


// src/materials/glsl/outline.frag
var outline_default = `uniform lowp sampler2D inputBuffer;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 c0=texture2D(inputBuffer,vUv0).rg;vec2 c1=texture2D(inputBuffer,vUv1).rg;vec2 c2=texture2D(inputBuffer,vUv2).rg;vec2 c3=texture2D(inputBuffer,vUv3).rg;float d0=(c0.x-c1.x)*0.5;float d1=(c2.x-c3.x)*0.5;float d=length(vec2(d0,d1));float a0=min(c0.y,c1.y);float a1=min(c2.y,c3.y);float visibilityFactor=min(a0,a1);gl_FragColor.rg=(1.0-visibilityFactor>0.001)?vec2(d,0.0):vec2(0.0,d);}`;

// src/materials/glsl/outline.vert
var outline_default2 = `uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=vec2(uv.x+texelSize.x,uv.y);vUv1=vec2(uv.x-texelSize.x,uv.y);vUv2=vec2(uv.x,uv.y+texelSize.y);vUv3=vec2(uv.x,uv.y-texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/OutlineMaterial.js
var OutlineMaterial = class extends ShaderMaterial13 {
  /**
   * Constructs a new outline material.
   *
   * TODO Remove texelSize param.
   * @param {Vector2} [texelSize] - The screen texel size.
   */
  constructor(texelSize = new Vector215()) {
    super({
      name: "OutlineMaterial",
      uniforms: {
        inputBuffer: new Uniform29(null),
        texelSize: new Uniform29(new Vector215())
      },
      blending: NoBlending12,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: outline_default,
      vertexShader: outline_default2
    });
    this.uniforms.texelSize.value.set(texelSize.x, texelSize.y);
    this.uniforms.maskTexture = this.uniforms.inputBuffer;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(x, y) {
    this.uniforms.texelSize.value.set(x, y);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.uniforms.texelSize.value.set(1 / width, 1 / height);
  }
};

// src/passes/DepthPass.js
const {Color:Color5,MeshDepthMaterial,NearestFilter:NearestFilter3,RGBADepthPacking:RGBADepthPacking2,WebGLRenderTarget:WebGLRenderTarget11} = await importShared('three');

var DepthPass = class extends Pass {
  /**
   * Constructs a new depth pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use to render the scene.
   * @param {Object} [options] - The options.
   * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
   * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(scene, camera, {
    renderTarget,
    resolutionScale = 1,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("DepthPass");
    this.needsSwap = false;
    this.renderPass = new RenderPass(scene, camera, new MeshDepthMaterial({
      depthPacking: RGBADepthPacking2
    }));
    const renderPass = this.renderPass;
    renderPass.skipShadowMapUpdate = true;
    renderPass.ignoreBackground = true;
    const clearPass = renderPass.clearPass;
    clearPass.overrideClearColor = new Color5(16777215);
    clearPass.overrideClearAlpha = 1;
    this.renderTarget = renderTarget;
    if (this.renderTarget === void 0) {
      this.renderTarget = new WebGLRenderTarget11(1, 1, {
        minFilter: NearestFilter3,
        magFilter: NearestFilter3
      });
      this.renderTarget.texture.name = "DepthPass.Target";
    }
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  set mainScene(value) {
    this.renderPass.mainScene = value;
  }
  set mainCamera(value) {
    this.renderPass.mainCamera = value;
  }
  /**
   * The depth texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the depth texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * Renders the scene depth.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const renderTarget = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(renderer, renderTarget);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    this.renderTarget.setSize(resolution.width, resolution.height);
  }
};

// src/effects/glsl/outline.frag
var outline_default3 = `uniform lowp sampler2D edgeTexture;uniform lowp sampler2D maskTexture;uniform vec3 visibleEdgeColor;uniform vec3 hiddenEdgeColor;uniform float pulse;uniform float edgeStrength;
#ifdef USE_PATTERN
uniform lowp sampler2D patternTexture;varying vec2 vUvPattern;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 edge=texture2D(edgeTexture,uv).rg;vec2 mask=texture2D(maskTexture,uv).rg;
#ifndef X_RAY
edge.y=0.0;
#endif
edge*=(edgeStrength*mask.x*pulse);vec3 color=edge.x*visibleEdgeColor+edge.y*hiddenEdgeColor;float visibilityFactor=0.0;
#ifdef USE_PATTERN
vec4 patternColor=texture2D(patternTexture,vUvPattern);
#ifdef X_RAY
float hiddenFactor=0.5;
#else
float hiddenFactor=0.0;
#endif
visibilityFactor=(1.0-mask.y>0.0)?1.0:hiddenFactor;visibilityFactor*=(1.0-mask.x)*patternColor.a;color+=visibilityFactor*patternColor.rgb;
#endif
float alpha=max(max(edge.x,edge.y),visibilityFactor);
#ifdef ALPHA
outputColor=vec4(color,alpha);
#else
outputColor=vec4(color,max(alpha,inputColor.a));
#endif
}`;

// src/effects/glsl/outline.vert
var outline_default4 = `uniform float patternScale;varying vec2 vUvPattern;void mainSupport(const in vec2 uv){vUvPattern=uv*vec2(aspect,1.0)*patternScale;}`;

// src/effects/OutlineEffect.js
var OutlineEffect = class extends Effect {
  /**
   * Constructs a new outline effect.
   *
   * @param {Scene} scene - The main scene.
   * @param {Camera} camera - The main camera.
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function. Use `BlendFunction.ALPHA` for dark outlines.
   * @param {Texture} [options.patternTexture=null] - A pattern texture.
   * @param {Number} [options.patternScale=1.0] - The pattern scale.
   * @param {Number} [options.edgeStrength=1.0] - The edge strength.
   * @param {Number} [options.pulseSpeed=0.0] - The pulse speed. A value of zero disables the pulse effect.
   * @param {Number} [options.visibleEdgeColor=0xffffff] - The color of visible edges.
   * @param {Number} [options.hiddenEdgeColor=0x22090a] - The color of hidden edges.
   * @param {KernelSize} [options.kernelSize=KernelSize.VERY_SMALL] - The blur kernel size.
   * @param {Boolean} [options.blur=false] - Whether the outline should be blurred.
   * @param {Boolean} [options.xRay=true] - Whether occluded parts of selected objects should be visible.
   * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(scene, camera, {
    blendFunction = BlendFunction.SCREEN,
    patternTexture = null,
    patternScale = 1,
    edgeStrength = 1,
    pulseSpeed = 0,
    visibleEdgeColor = 16777215,
    hiddenEdgeColor = 2230538,
    kernelSize = KernelSize.VERY_SMALL,
    blur = false,
    xRay = true,
    multisampling = 0,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("OutlineEffect", outline_default3, {
      uniforms: /* @__PURE__ */ new Map([
        ["maskTexture", new Uniform30(null)],
        ["edgeTexture", new Uniform30(null)],
        ["edgeStrength", new Uniform30(edgeStrength)],
        ["visibleEdgeColor", new Uniform30(new Color6(visibleEdgeColor))],
        ["hiddenEdgeColor", new Uniform30(new Color6(hiddenEdgeColor))],
        ["pulse", new Uniform30(1)],
        ["patternScale", new Uniform30(patternScale)],
        ["patternTexture", new Uniform30(null)]
      ])
    });
    this.blendMode.addEventListener("change", (event) => {
      if (this.blendMode.blendFunction === BlendFunction.ALPHA) {
        this.defines.set("ALPHA", "1");
      } else {
        this.defines.delete("ALPHA");
      }
      this.setChanged();
    });
    this.blendMode.blendFunction = blendFunction;
    this.patternTexture = patternTexture;
    this.xRay = xRay;
    this.scene = scene;
    this.camera = camera;
    this.renderTargetMask = new WebGLRenderTarget12(1, 1);
    this.renderTargetMask.samples = multisampling;
    this.renderTargetMask.texture.name = "Outline.Mask";
    this.uniforms.get("maskTexture").value = this.renderTargetMask.texture;
    this.renderTargetOutline = new WebGLRenderTarget12(1, 1, { depthBuffer: false });
    this.renderTargetOutline.texture.name = "Outline.Edges";
    this.uniforms.get("edgeTexture").value = this.renderTargetOutline.texture;
    this.clearPass = new ClearPass();
    this.clearPass.overrideClearColor = new Color6(0);
    this.clearPass.overrideClearAlpha = 1;
    this.depthPass = new DepthPass(scene, camera);
    this.maskPass = new RenderPass(scene, camera, new DepthComparisonMaterial(this.depthPass.texture, camera));
    const clearPass = this.maskPass.clearPass;
    clearPass.overrideClearColor = new Color6(16777215);
    clearPass.overrideClearAlpha = 1;
    this.blurPass = new KawaseBlurPass({ resolutionScale, resolutionX, resolutionY, kernelSize });
    this.blurPass.enabled = blur;
    const resolution = this.blurPass.resolution;
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    this.outlinePass = new ShaderPass(new OutlineMaterial());
    const outlineMaterial = this.outlinePass.fullscreenMaterial;
    outlineMaterial.inputBuffer = this.renderTargetMask.texture;
    this.time = 0;
    this.forceUpdate = true;
    this.selection = new Selection();
    this.pulseSpeed = pulseSpeed;
  }
  set mainScene(value) {
    this.scene = value;
    this.depthPass.mainScene = value;
    this.maskPass.mainScene = value;
  }
  set mainCamera(value) {
    this.camera = value;
    this.depthPass.mainCamera = value;
    this.maskPass.mainCamera = value;
    this.maskPass.overrideMaterial.copyCameraSettings(value);
  }
  /**
   * The resolution of this effect.
   *
   * @type {Resolution}
   */
  get resolution() {
    return this.blurPass.resolution;
  }
  /**
   * Returns the resolution.
   *
   * @return {Resizer} The resolution.
   */
  getResolution() {
    return this.blurPass.getResolution();
  }
  /**
   * The amount of MSAA samples.
   *
   * Requires WebGL 2. Set to zero to disable multisampling.
   *
   * @experimental Requires three >= r138.
   * @type {Number}
   */
  get multisampling() {
    return this.renderTargetMask.samples;
  }
  set multisampling(value) {
    this.renderTargetMask.samples = value;
    this.renderTargetMask.dispose();
  }
  /**
   * The pattern scale.
   *
   * @type {Number}
   */
  get patternScale() {
    return this.uniforms.get("patternScale").value;
  }
  set patternScale(value) {
    this.uniforms.get("patternScale").value = value;
  }
  /**
   * The edge strength.
   *
   * @type {Number}
   */
  get edgeStrength() {
    return this.uniforms.get("edgeStrength").value;
  }
  set edgeStrength(value) {
    this.uniforms.get("edgeStrength").value = value;
  }
  /**
   * The visible edge color.
   *
   * @type {Color}
   */
  get visibleEdgeColor() {
    return this.uniforms.get("visibleEdgeColor").value;
  }
  set visibleEdgeColor(value) {
    this.uniforms.get("visibleEdgeColor").value = value;
  }
  /**
   * The hidden edge color.
   *
   * @type {Color}
   */
  get hiddenEdgeColor() {
    return this.uniforms.get("hiddenEdgeColor").value;
  }
  set hiddenEdgeColor(value) {
    this.uniforms.get("hiddenEdgeColor").value = value;
  }
  /**
   * Returns the blur pass.
   *
   * @deprecated Use blurPass instead.
   * @return {KawaseBlurPass} The blur pass.
   */
  getBlurPass() {
    return this.blurPass;
  }
  /**
   * Returns the selection.
   *
   * @deprecated Use selection instead.
   * @return {Selection} The selection.
   */
  getSelection() {
    return this.selection;
  }
  /**
   * Returns the pulse speed.
   *
   * @deprecated Use pulseSpeed instead.
   * @return {Number} The speed.
   */
  getPulseSpeed() {
    return this.pulseSpeed;
  }
  /**
   * Sets the pulse speed. Set to zero to disable.
   *
   * @deprecated Use pulseSpeed instead.
   * @param {Number} value - The speed.
   */
  setPulseSpeed(value) {
    this.pulseSpeed = value;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.width instead.
   */
  get width() {
    return this.resolution.width;
  }
  set width(value) {
    this.resolution.preferredWidth = value;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.height instead.
   */
  get height() {
    return this.resolution.height;
  }
  set height(value) {
    this.resolution.preferredHeight = value;
  }
  /**
   * The selection layer.
   *
   * @type {Number}
   * @deprecated Use selection.layer instead.
   */
  get selectionLayer() {
    return this.selection.layer;
  }
  set selectionLayer(value) {
    this.selection.layer = value;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated
   */
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(value) {
    this.blurPass.dithering = value;
  }
  /**
   * The blur kernel size.
   *
   * @type {KernelSize}
   * @deprecated Use blurPass.kernelSize instead.
   */
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(value) {
    this.blurPass.kernelSize = value;
  }
  /**
   * Indicates whether the outlines should be blurred.
   *
   * @type {Boolean}
   * @deprecated Use blurPass.enabled instead.
   */
  get blur() {
    return this.blurPass.enabled;
  }
  set blur(value) {
    this.blurPass.enabled = value;
  }
  /**
   * Indicates whether X-ray mode is enabled.
   *
   * @type {Boolean}
   */
  get xRay() {
    return this.defines.has("X_RAY");
  }
  set xRay(value) {
    if (this.xRay !== value) {
      if (value) {
        this.defines.set("X_RAY", "1");
      } else {
        this.defines.delete("X_RAY");
      }
      this.setChanged();
    }
  }
  /**
   * Indicates whether X-ray mode is enabled.
   *
   * @deprecated Use xRay instead.
   * @return {Boolean} Whether X-ray mode is enabled.
   */
  isXRayEnabled() {
    return this.xRay;
  }
  /**
   * Enables or disables X-ray outlines.
   *
   * @deprecated Use xRay instead.
   * @param {Boolean} value - Whether X-ray should be enabled.
   */
  setXRayEnabled(value) {
    this.xRay = value;
  }
  /**
   * The pattern texture. Set to `null` to disable.
   *
   * @type {Texture}
   */
  get patternTexture() {
    return this.uniforms.get("patternTexture").value;
  }
  set patternTexture(value) {
    if (value !== null) {
      value.wrapS = value.wrapT = RepeatWrapping3;
      this.defines.set("USE_PATTERN", "1");
      this.setVertexShader(outline_default4);
    } else {
      this.defines.delete("USE_PATTERN");
      this.setVertexShader(null);
    }
    this.uniforms.get("patternTexture").value = value;
    this.setChanged();
  }
  /**
   * Sets the pattern texture.
   *
   * @deprecated Use patternTexture instead.
   * @param {Texture} value - The new texture.
   */
  setPatternTexture(value) {
    this.patternTexture = value;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * Clears the current selection and selects a list of objects.
   *
   * @param {Object3D[]} objects - The objects that should be outlined. This array will be copied.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.set() instead.
   */
  setSelection(objects) {
    this.selection.set(objects);
    return this;
  }
  /**
   * Clears the list of selected objects.
   *
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.clear() instead.
   */
  clearSelection() {
    this.selection.clear();
    return this;
  }
  /**
   * Selects an object.
   *
   * @param {Object3D} object - The object that should be outlined.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.add() instead.
   */
  selectObject(object) {
    this.selection.add(object);
    return this;
  }
  /**
   * Deselects an object.
   *
   * @param {Object3D} object - The object that should no longer be outlined.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.delete() instead.
   */
  deselectObject(object) {
    this.selection.delete(object);
    return this;
  }
  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(renderer, inputBuffer, deltaTime) {
    const scene = this.scene;
    const camera = this.camera;
    const selection = this.selection;
    const uniforms = this.uniforms;
    const pulse = uniforms.get("pulse");
    const background = scene.background;
    const mask = camera.layers.mask;
    if (this.forceUpdate || selection.size > 0) {
      scene.background = null;
      pulse.value = 1;
      if (this.pulseSpeed > 0) {
        pulse.value = Math.cos(this.time * this.pulseSpeed * 10) * 0.375 + 0.625;
      }
      this.time += deltaTime;
      selection.setVisible(false);
      this.depthPass.render(renderer);
      selection.setVisible(true);
      camera.layers.set(selection.layer);
      this.maskPass.render(renderer, this.renderTargetMask);
      camera.layers.mask = mask;
      scene.background = background;
      this.outlinePass.render(renderer, null, this.renderTargetOutline);
      if (this.blurPass.enabled) {
        this.blurPass.render(renderer, this.renderTargetOutline, this.renderTargetOutline);
      }
    }
    this.forceUpdate = selection.size > 0;
  }
  /**
   * Updates the size of internal render targets.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.blurPass.setSize(width, height);
    this.renderTargetMask.setSize(width, height);
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    const w = resolution.width, h = resolution.height;
    this.depthPass.setSize(w, h);
    this.renderTargetOutline.setSize(w, h);
    this.outlinePass.fullscreenMaterial.setSize(w, h);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    this.blurPass.initialize(renderer, alpha, UnsignedByteType11);
    if (frameBufferType !== void 0) {
      this.depthPass.initialize(renderer, alpha, frameBufferType);
      this.maskPass.initialize(renderer, alpha, frameBufferType);
      this.outlinePass.initialize(renderer, alpha, frameBufferType);
    }
  }
};

// src/effects/PixelationEffect.js
const {Uniform:Uniform31,Vector2:Vector216,Vector4:Vector43} = await importShared('three');

// src/effects/RealisticBokehEffect.js
const {Uniform:Uniform32,Vector4:Vector44} = await importShared('three');

// src/effects/ScanlineEffect.js
const {Uniform:Uniform33,Vector2:Vector217} = await importShared('three');

// src/effects/ShockWaveEffect.js
const {Uniform:Uniform34,Vector2:Vector218,Vector3:Vector35} = await importShared('three');

// src/effects/SelectiveBloomEffect.js
const {BasicDepthPacking:BasicDepthPacking7,Color:Color7,NotEqualDepth:NotEqualDepth2,EqualDepth:EqualDepth2,RGBADepthPacking:RGBADepthPacking3,SRGBColorSpace:SRGBColorSpace11,WebGLRenderTarget:WebGLRenderTarget13} = await importShared('three');

// src/effects/SepiaEffect.js
const {Uniform:Uniform35,Vector3:Vector36} = await importShared('three');

// src/effects/SMAAEffect.js
const {BasicDepthPacking:BasicDepthPacking9,Color:Color8,LinearFilter:LinearFilter5,LoadingManager,NearestFilter:NearestFilter4,Texture:Texture3,Uniform:Uniform38,WebGLRenderTarget:WebGLRenderTarget14} = await importShared('three');


// src/materials/EdgeDetectionMaterial.js
const {BasicDepthPacking:BasicDepthPacking8,NoBlending:NoBlending13,REVISION:REVISION2,ShaderMaterial:ShaderMaterial14,Uniform:Uniform36,Vector2:Vector219} = await importShared('three');

// src/materials/SMAAWeightsMaterial.js
const {NoBlending:NoBlending14,ShaderMaterial:ShaderMaterial15,Uniform:Uniform37,Vector2:Vector220} = await importShared('three');

// src/effects/SSAOEffect.js
const {BasicDepthPacking:BasicDepthPacking13,Color:Color9,RepeatWrapping:RepeatWrapping4,RGBAFormat:RGBAFormat4,Uniform:Uniform41,WebGLRenderTarget:WebGLRenderTarget16} = await importShared('three');


// src/materials/SSAOMaterial.js
const {BasicDepthPacking:BasicDepthPacking10,Matrix4:Matrix42,NoBlending:NoBlending15,PerspectiveCamera:PerspectiveCamera4,ShaderMaterial:ShaderMaterial16,Uniform:Uniform39,Vector2:Vector221} = await importShared('three');

// src/passes/DepthDownsamplingPass.js
const {BasicDepthPacking:BasicDepthPacking12,FloatType:FloatType4,NearestFilter:NearestFilter5,WebGLRenderTarget:WebGLRenderTarget15} = await importShared('three');


// src/materials/DepthDownsamplingMaterial.js
const {BasicDepthPacking:BasicDepthPacking11,NoBlending:NoBlending16,ShaderMaterial:ShaderMaterial17,Uniform:Uniform40,Vector2:Vector222} = await importShared('three');


// src/materials/glsl/depth-downsampling.frag
var depth_downsampling_default = `#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`;

// src/materials/glsl/depth-downsampling.vert
var depth_downsampling_default2 = `uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/DepthDownsamplingMaterial.js
var DepthDownsamplingMaterial = class extends ShaderMaterial17 {
  /**
   * Constructs a new depth downsampling material.
   */
  constructor() {
    super({
      name: "DepthDownsamplingMaterial",
      defines: {
        DEPTH_PACKING: "0"
      },
      uniforms: {
        depthBuffer: new Uniform40(null),
        normalBuffer: new Uniform40(null),
        texelSize: new Uniform40(new Vector222())
      },
      blending: NoBlending16,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      fragmentShader: depth_downsampling_default,
      vertexShader: depth_downsampling_default2
    });
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer(value) {
    this.uniforms.depthBuffer.value = value;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking(value) {
    this.defines.DEPTH_PACKING = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(buffer, depthPacking = BasicDepthPacking11) {
    this.depthBuffer = buffer;
    this.depthPacking = depthPacking;
  }
  /**
   * The normal buffer.
   *
   * @type {Texture}
   */
  set normalBuffer(value) {
    this.uniforms.normalBuffer.value = value;
    if (value !== null) {
      this.defines.DOWNSAMPLE_NORMALS = "1";
    } else {
      delete this.defines.DOWNSAMPLE_NORMALS;
    }
    this.needsUpdate = true;
  }
  /**
   * Sets the normal buffer.
   *
   * @deprecated Use normalBuffer instead.
   * @param {Texture} value - The normal buffer.
   */
  setNormalBuffer(value) {
    this.normalBuffer = value;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(x, y) {
    this.uniforms.texelSize.value.set(x, y);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.uniforms.texelSize.value.set(1 / width, 1 / height);
  }
};

// src/passes/DepthDownsamplingPass.js
var DepthDownsamplingPass = class extends Pass {
  /**
   * Constructs a new depth downsampling pass.
   *
   * @param {Object} [options] - The options.
   * @param {Texture} [options.normalBuffer=null] - A texture that contains view space normals. See {@link NormalPass}.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor({
    normalBuffer = null,
    resolutionScale = 0.5,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("DepthDownsamplingPass");
    const material = new DepthDownsamplingMaterial();
    material.normalBuffer = normalBuffer;
    this.fullscreenMaterial = material;
    this.needsDepthTexture = true;
    this.needsSwap = false;
    this.renderTarget = new WebGLRenderTarget15(1, 1, {
      minFilter: NearestFilter5,
      magFilter: NearestFilter5,
      depthBuffer: false,
      type: FloatType4
    });
    this.renderTarget.texture.name = "DepthDownsamplingPass.Target";
    this.renderTarget.texture.generateMipmaps = false;
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  /**
   * The normal(RGB) + depth(A) texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the normal(RGB) + depth(A) texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Sets the depth texture.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking12) {
    this.fullscreenMaterial.depthBuffer = depthTexture;
    this.fullscreenMaterial.depthPacking = depthPacking;
  }
  /**
   * Downsamples depth and scene normals.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    renderer.setRenderTarget(this.renderToScreen ? null : this.renderTarget);
    renderer.render(this.scene, this.camera);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    this.renderTarget.setSize(resolution.width, resolution.height);
    this.fullscreenMaterial.setSize(width, height);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    const gl = renderer.getContext();
    const renderable = gl.getExtension("EXT_color_buffer_float") || gl.getExtension("EXT_color_buffer_half_float");
    if (!renderable) {
      throw new Error("Rendering to float texture is not supported.");
    }
  }
};

// src/effects/TextureEffect.js
const {Uniform:Uniform42,UnsignedByteType:UnsignedByteType12} = await importShared('three');

// src/effects/TiltShiftEffect.js
const {SRGBColorSpace:SRGBColorSpace12,Uniform:Uniform44,Vector2:Vector224,WebGLRenderTarget:WebGLRenderTarget17} = await importShared('three');


// src/materials/TiltShiftBlurMaterial.js
const {Uniform:Uniform43,Vector2:Vector223,Vector4:Vector45} = await importShared('three');

// src/effects/ToneMappingEffect.js
const {LinearMipmapLinearFilter,REVISION:REVISION3,Uniform:Uniform46,WebGLRenderTarget:WebGLRenderTarget19} = await importShared('three');


// src/passes/AdaptiveLuminancePass.js
const {NearestFilter:NearestFilter6,WebGLRenderTarget:WebGLRenderTarget18} = await importShared('three');


// src/materials/AdaptiveLuminanceMaterial.js
const {NoBlending:NoBlending17,ShaderMaterial:ShaderMaterial18,Uniform:Uniform45} = await importShared('three');

// src/effects/VignetteEffect.js
const {Uniform:Uniform47} = await importShared('three');

// src/loaders/LUT3dlLoader.js
const {FileLoader,Loader,LoadingManager:LoadingManager2} = await importShared('three');

// src/loaders/LUTCubeLoader.js
const {FileLoader:FileLoader2,Loader:Loader2,LoadingManager:LoadingManager3,Vector3:Vector37} = await importShared('three');

// src/loaders/SMAAImageLoader.js
const {Loader:Loader3,LoadingManager:LoadingManager4} = await importShared('three');

// src/materials/BoxBlurMaterial.js
const {NoBlending:NoBlending18,PerspectiveCamera:PerspectiveCamera5,ShaderMaterial:ShaderMaterial19,Uniform:Uniform48,Vector2:Vector225} = await importShared('three');

// src/materials/DepthCopyMaterial.js
const {BasicDepthPacking:BasicDepthPacking14,NoBlending:NoBlending19,ShaderMaterial:ShaderMaterial20,Uniform:Uniform49,Vector2:Vector226} = await importShared('three');

// src/materials/EffectMaterial.js
const {BasicDepthPacking:BasicDepthPacking15,NoBlending:NoBlending20,PerspectiveCamera:PerspectiveCamera6,REVISION:REVISION4,ShaderMaterial:ShaderMaterial21,Uniform:Uniform50,Vector2:Vector227} = await importShared('three');


// src/materials/glsl/effect.frag
var effect_default = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`;

// src/materials/glsl/effect.vert
var effect_default2 = `uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}`;

// src/materials/EffectMaterial.js
var EffectMaterial = class extends ShaderMaterial21 {
  /**
   * Constructs a new effect material.
   *
   * @param {Map<String, String>} [shaderParts] - Deprecated. Use setShaderData instead.
   * @param {Map<String, String>} [defines] - Deprecated. Use setShaderData instead.
   * @param {Map<String, Uniform>} [uniforms] - Deprecated. Use setShaderData instead.
   * @param {Camera} [camera] - A camera.
   * @param {Boolean} [dithering=false] - Deprecated.
   */
  constructor(shaderParts, defines, uniforms, camera, dithering = false) {
    super({
      name: "EffectMaterial",
      defines: {
        THREE_REVISION: REVISION4.replace(/\D+/g, ""),
        DEPTH_PACKING: "0",
        ENCODE_OUTPUT: "1"
      },
      uniforms: {
        inputBuffer: new Uniform50(null),
        depthBuffer: new Uniform50(null),
        resolution: new Uniform50(new Vector227()),
        texelSize: new Uniform50(new Vector227()),
        cameraNear: new Uniform50(0.3),
        cameraFar: new Uniform50(1e3),
        aspect: new Uniform50(1),
        time: new Uniform50(0)
      },
      blending: NoBlending20,
      toneMapped: false,
      depthWrite: false,
      depthTest: false,
      dithering
    });
    if (shaderParts) {
      this.setShaderParts(shaderParts);
    }
    if (defines) {
      this.setDefines(defines);
    }
    if (uniforms) {
      this.setUniforms(uniforms);
    }
    this.copyCameraSettings(camera);
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(value) {
    this.uniforms.inputBuffer.value = value;
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(value) {
    this.uniforms.depthBuffer.value = value;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(value) {
    this.defines.DEPTH_PACKING = value.toFixed(0);
    this.needsUpdate = true;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(buffer, depthPacking = BasicDepthPacking15) {
    this.depthBuffer = buffer;
    this.depthPacking = depthPacking;
  }
  /**
   * Sets the shader data.
   *
   * @param {EffectShaderData} data - The shader data.
   * @return {EffectMaterial} This material.
   */
  setShaderData(data) {
    this.setShaderParts(data.shaderParts);
    this.setDefines(data.defines);
    this.setUniforms(data.uniforms);
    this.setExtensions(data.extensions);
  }
  /**
   * Sets the shader parts.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, String>} shaderParts - A collection of shader snippets. See {@link EffectShaderSection}.
   * @return {EffectMaterial} This material.
   */
  setShaderParts(shaderParts) {
    this.fragmentShader = effect_default.replace(EffectShaderSection.FRAGMENT_HEAD, shaderParts.get(EffectShaderSection.FRAGMENT_HEAD) || "").replace(EffectShaderSection.FRAGMENT_MAIN_UV, shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV) || "").replace(EffectShaderSection.FRAGMENT_MAIN_IMAGE, shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE) || "");
    this.vertexShader = effect_default2.replace(EffectShaderSection.VERTEX_HEAD, shaderParts.get(EffectShaderSection.VERTEX_HEAD) || "").replace(EffectShaderSection.VERTEX_MAIN_SUPPORT, shaderParts.get(EffectShaderSection.VERTEX_MAIN_SUPPORT) || "");
    this.needsUpdate = true;
    return this;
  }
  /**
   * Sets the shader macros.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, String>} defines - A collection of preprocessor macro definitions.
   * @return {EffectMaterial} This material.
   */
  setDefines(defines) {
    for (const entry of defines.entries()) {
      this.defines[entry[0]] = entry[1];
    }
    this.needsUpdate = true;
    return this;
  }
  /**
   * Sets the shader uniforms.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, Uniform>} uniforms - A collection of uniforms.
   * @return {EffectMaterial} This material.
   */
  setUniforms(uniforms) {
    for (const entry of uniforms.entries()) {
      this.uniforms[entry[0]] = entry[1];
    }
    return this;
  }
  /**
   * Sets the required shader extensions.
   *
   * @deprecated Use setShaderData instead.
   * @param {Set<WebGLExtension>} extensions - A collection of extensions.
   * @return {EffectMaterial} This material.
   */
  setExtensions(extensions) {
    this.extensions = {};
    for (const extension of extensions) {
      this.extensions[extension] = true;
    }
    return this;
  }
  /**
   * Indicates whether output encoding is enabled.
   *
   * @type {Boolean}
   */
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(value) {
    if (this.encodeOutput !== value) {
      if (value) {
        this.defines.ENCODE_OUTPUT = "1";
      } else {
        delete this.defines.ENCODE_OUTPUT;
      }
      this.needsUpdate = true;
    }
  }
  /**
   * Indicates whether output encoding is enabled.
   *
   * @deprecated Use encodeOutput instead.
   * @return {Boolean} Whether output encoding is enabled.
   */
  isOutputEncodingEnabled(value) {
    return this.encodeOutput;
  }
  /**
   * Enables or disables output encoding.
   *
   * @deprecated Use encodeOutput instead.
   * @param {Boolean} value - Whether output encoding should be enabled.
   */
  setOutputEncodingEnabled(value) {
    this.encodeOutput = value;
  }
  /**
   * The time in seconds.
   *
   * @type {Number}
   */
  get time() {
    return this.uniforms.time.value;
  }
  set time(value) {
    this.uniforms.time.value = value;
  }
  /**
   * Sets the delta time.
   *
   * @deprecated Use time instead.
   * @param {Number} value - The delta time in seconds.
   */
  setDeltaTime(value) {
    this.uniforms.time.value += value;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(camera) {
    this.copyCameraSettings(camera);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(camera) {
    if (camera) {
      this.uniforms.cameraNear.value = camera.near;
      this.uniforms.cameraFar.value = camera.far;
      if (camera instanceof PerspectiveCamera6) {
        this.defines.PERSPECTIVE_CAMERA = "1";
      } else {
        delete this.defines.PERSPECTIVE_CAMERA;
      }
      this.needsUpdate = true;
    }
  }
  /**
   * Sets the resolution.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const uniforms = this.uniforms;
    uniforms.resolution.value.set(width, height);
    uniforms.texelSize.value.set(1 / width, 1 / height);
    uniforms.aspect.value = width / height;
  }
  /**
   * An enumeration of shader code placeholders.
   *
   * @deprecated Use EffectShaderSection instead.
   * @type {Object}
   */
  static get Section() {
    return EffectShaderSection;
  }
};

// src/materials/GaussianBlurMaterial.js
const {NoBlending:NoBlending21,ShaderMaterial:ShaderMaterial22,Uniform:Uniform51,Vector2:Vector228} = await importShared('three');

// src/passes/BoxBlurPass.js
const {BasicDepthPacking:BasicDepthPacking16,SRGBColorSpace:SRGBColorSpace13,UnsignedByteType:UnsignedByteType13,WebGLRenderTarget:WebGLRenderTarget20} = await importShared('three');

// src/passes/DepthPickingPass.js
const {BasicDepthPacking:BasicDepthPacking18,FloatType:FloatType6,REVISION:REVISION5,RGBADepthPacking:RGBADepthPacking5} = await importShared('three');


// src/passes/DepthCopyPass.js
const {BasicDepthPacking:BasicDepthPacking17,FloatType:FloatType5,NearestFilter:NearestFilter7,RGBADepthPacking:RGBADepthPacking4,UnsignedByteType:UnsignedByteType14,WebGLRenderTarget:WebGLRenderTarget21} = await importShared('three');

// src/passes/DepthPickingPass.js
Number(REVISION5.replace(/\D+/g, ""));

// src/passes/EffectPass.js
const {BasicDepthPacking:BasicDepthPacking19,NoColorSpace:NoColorSpace2,SRGBColorSpace:SRGBColorSpace14,UnsignedByteType:UnsignedByteType15} = await importShared('three');

function prefixSubstrings(prefix, substrings, strings) {
  for (const substring of substrings) {
    const prefixed = "$1" + prefix + substring.charAt(0).toUpperCase() + substring.slice(1);
    const regExp = new RegExp("([^\\.])(\\b" + substring + "\\b)", "g");
    for (const entry of strings.entries()) {
      if (entry[1] !== null) {
        strings.set(entry[0], entry[1].replace(regExp, prefixed));
      }
    }
  }
}
function integrateEffect(prefix, effect, data) {
  let fragmentShader = effect.getFragmentShader();
  let vertexShader = effect.getVertexShader();
  const mainImageExists = fragmentShader !== void 0 && /mainImage/.test(fragmentShader);
  const mainUvExists = fragmentShader !== void 0 && /mainUv/.test(fragmentShader);
  data.attributes |= effect.getAttributes();
  if (fragmentShader === void 0) {
    throw new Error(`Missing fragment shader (${effect.name})`);
  } else if (mainUvExists && (data.attributes & EffectAttribute.CONVOLUTION) !== 0) {
    throw new Error(`Effects that transform UVs are incompatible with convolution effects (${effect.name})`);
  } else if (!mainImageExists && !mainUvExists) {
    throw new Error(`Could not find mainImage or mainUv function (${effect.name})`);
  } else {
    const functionRegExp = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g;
    const shaderParts = data.shaderParts;
    let fragmentHead = shaderParts.get(EffectShaderSection.FRAGMENT_HEAD) || "";
    let fragmentMainUv = shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV) || "";
    let fragmentMainImage = shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE) || "";
    let vertexHead = shaderParts.get(EffectShaderSection.VERTEX_HEAD) || "";
    let vertexMainSupport = shaderParts.get(EffectShaderSection.VERTEX_MAIN_SUPPORT) || "";
    const varyings = /* @__PURE__ */ new Set();
    const names = /* @__PURE__ */ new Set();
    if (mainUvExists) {
      fragmentMainUv += `	${prefix}MainUv(UV);
`;
      data.uvTransformation = true;
    }
    if (vertexShader !== null && /mainSupport/.test(vertexShader)) {
      const needsUv = /mainSupport *\([\w\s]*?uv\s*?\)/.test(vertexShader);
      vertexMainSupport += `	${prefix}MainSupport(`;
      vertexMainSupport += needsUv ? "vUv);\n" : ");\n";
      for (const m2 of vertexShader.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) {
        for (const n of m2[1].split(/\s*,\s*/)) {
          data.varyings.add(n);
          varyings.add(n);
          names.add(n);
        }
      }
      for (const m2 of vertexShader.matchAll(functionRegExp)) {
        names.add(m2[1]);
      }
    }
    for (const m2 of fragmentShader.matchAll(functionRegExp)) {
      names.add(m2[1]);
    }
    for (const d of effect.defines.keys()) {
      names.add(d.replace(/\([\w\s,]*\)/g, ""));
    }
    for (const u of effect.uniforms.keys()) {
      names.add(u);
    }
    names.delete("while");
    names.delete("for");
    names.delete("if");
    effect.uniforms.forEach((val, key) => data.uniforms.set(prefix + key.charAt(0).toUpperCase() + key.slice(1), val));
    effect.defines.forEach((val, key) => data.defines.set(prefix + key.charAt(0).toUpperCase() + key.slice(1), val));
    const shaders = /* @__PURE__ */ new Map([["fragment", fragmentShader], ["vertex", vertexShader]]);
    prefixSubstrings(prefix, names, data.defines);
    prefixSubstrings(prefix, names, shaders);
    fragmentShader = shaders.get("fragment");
    vertexShader = shaders.get("vertex");
    const blendMode = effect.blendMode;
    data.blendModes.set(blendMode.blendFunction, blendMode);
    if (mainImageExists) {
      if (effect.inputColorSpace !== null && effect.inputColorSpace !== data.colorSpace) {
        fragmentMainImage += effect.inputColorSpace === SRGBColorSpace14 ? "color0 = sRGBTransferOETF(color0);\n	" : "color0 = sRGBToLinear(color0);\n	";
      }
      if (effect.outputColorSpace !== NoColorSpace2) {
        data.colorSpace = effect.outputColorSpace;
      } else if (effect.inputColorSpace !== null) {
        data.colorSpace = effect.inputColorSpace;
      }
      const depthParamRegExp = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      fragmentMainImage += `${prefix}MainImage(color0, UV, `;
      if ((data.attributes & EffectAttribute.DEPTH) !== 0 && depthParamRegExp.test(fragmentShader)) {
        fragmentMainImage += "depth, ";
        data.readDepth = true;
      }
      fragmentMainImage += "color1);\n	";
      const blendOpacity = prefix + "BlendOpacity";
      data.uniforms.set(blendOpacity, blendMode.opacity);
      fragmentMainImage += `color0 = blend${blendMode.blendFunction}(color0, color1, ${blendOpacity});

	`;
      fragmentHead += `uniform float ${blendOpacity};

`;
    }
    fragmentHead += fragmentShader + "\n";
    if (vertexShader !== null) {
      vertexHead += vertexShader + "\n";
    }
    shaderParts.set(EffectShaderSection.FRAGMENT_HEAD, fragmentHead);
    shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_UV, fragmentMainUv);
    shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_IMAGE, fragmentMainImage);
    shaderParts.set(EffectShaderSection.VERTEX_HEAD, vertexHead);
    shaderParts.set(EffectShaderSection.VERTEX_MAIN_SUPPORT, vertexMainSupport);
    if (effect.extensions !== null) {
      for (const extension of effect.extensions) {
        data.extensions.add(extension);
      }
    }
  }
}
var EffectPass = class extends Pass {
  /**
   * Constructs a new effect pass.
   *
   * @param {Camera} camera - The main camera.
   * @param {...Effect} effects - The effects that will be rendered by this pass.
   */
  constructor(camera, ...effects) {
    super("EffectPass");
    this.fullscreenMaterial = new EffectMaterial(null, null, null, camera);
    this.listener = (event) => this.handleEvent(event);
    this.effects = [];
    this.setEffects(effects);
    this.skipRendering = false;
    this.minTime = 1;
    this.maxTime = Number.POSITIVE_INFINITY;
    this.timeScale = 1;
  }
  set mainScene(value) {
    for (const effect of this.effects) {
      effect.mainScene = value;
    }
  }
  set mainCamera(value) {
    this.fullscreenMaterial.copyCameraSettings(value);
    for (const effect of this.effects) {
      effect.mainCamera = value;
    }
  }
  /**
   * Indicates whether this pass encodes its output when rendering to screen.
   *
   * @type {Boolean}
   * @deprecated Use fullscreenMaterial.encodeOutput instead.
   */
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(value) {
    this.fullscreenMaterial.encodeOutput = value;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   */
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(value) {
    const material = this.fullscreenMaterial;
    material.dithering = value;
    material.needsUpdate = true;
  }
  /**
   * Sets the effects.
   *
   * @param {Effect[]} effects - The effects.
   * @protected
   */
  setEffects(effects) {
    for (const effect of this.effects) {
      effect.removeEventListener("change", this.listener);
    }
    this.effects = effects.sort((a, b) => b.attributes - a.attributes);
    for (const effect of this.effects) {
      effect.addEventListener("change", this.listener);
    }
  }
  /**
   * Updates the compound shader material.
   *
   * @protected
   */
  updateMaterial() {
    const data = new EffectShaderData();
    let id = 0;
    for (const effect of this.effects) {
      if (effect.blendMode.blendFunction === BlendFunction.DST) {
        data.attributes |= effect.getAttributes() & EffectAttribute.DEPTH;
      } else if ((data.attributes & effect.getAttributes() & EffectAttribute.CONVOLUTION) !== 0) {
        throw new Error(`Convolution effects cannot be merged (${effect.name})`);
      } else {
        integrateEffect("e" + id++, effect, data);
      }
    }
    let fragmentHead = data.shaderParts.get(EffectShaderSection.FRAGMENT_HEAD);
    let fragmentMainImage = data.shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_IMAGE);
    let fragmentMainUv = data.shaderParts.get(EffectShaderSection.FRAGMENT_MAIN_UV);
    const blendRegExp = /\bblend\b/g;
    for (const blendMode of data.blendModes.values()) {
      fragmentHead += blendMode.getShaderCode().replace(blendRegExp, `blend${blendMode.blendFunction}`) + "\n";
    }
    if ((data.attributes & EffectAttribute.DEPTH) !== 0) {
      if (data.readDepth) {
        fragmentMainImage = "float depth = readDepth(UV);\n\n	" + fragmentMainImage;
      }
      this.needsDepthTexture = this.getDepthTexture() === null;
    } else {
      this.needsDepthTexture = false;
    }
    if (data.colorSpace === SRGBColorSpace14) {
      fragmentMainImage += "color0 = sRGBToLinear(color0);\n	";
    }
    if (data.uvTransformation) {
      fragmentMainUv = "vec2 transformedUv = vUv;\n" + fragmentMainUv;
      data.defines.set("UV", "transformedUv");
    } else {
      data.defines.set("UV", "vUv");
    }
    data.shaderParts.set(EffectShaderSection.FRAGMENT_HEAD, fragmentHead);
    data.shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_IMAGE, fragmentMainImage);
    data.shaderParts.set(EffectShaderSection.FRAGMENT_MAIN_UV, fragmentMainUv);
    for (const [key, value] of data.shaderParts) {
      if (value !== null) {
        data.shaderParts.set(key, value.trim().replace(/^#/, "\n#"));
      }
    }
    this.skipRendering = id === 0;
    this.needsSwap = !this.skipRendering;
    this.fullscreenMaterial.setShaderData(data);
  }
  /**
   * Rebuilds the shader material.
   */
  recompile() {
    this.updateMaterial();
  }
  /**
   * Returns the current depth texture.
   *
   * @return {Texture} The current depth texture, or null if there is none.
   */
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  /**
   * Sets the depth texture.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(depthTexture, depthPacking = BasicDepthPacking19) {
    this.fullscreenMaterial.depthBuffer = depthTexture;
    this.fullscreenMaterial.depthPacking = depthPacking;
    for (const effect of this.effects) {
      effect.setDepthTexture(depthTexture, depthPacking);
    }
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    for (const effect of this.effects) {
      effect.update(renderer, inputBuffer, deltaTime);
    }
    if (!this.skipRendering || this.renderToScreen) {
      const material = this.fullscreenMaterial;
      material.inputBuffer = inputBuffer.texture;
      material.time += deltaTime * this.timeScale;
      renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
      renderer.render(this.scene, this.camera);
    }
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    this.fullscreenMaterial.setSize(width, height);
    for (const effect of this.effects) {
      effect.setSize(width, height);
    }
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(renderer, alpha, frameBufferType) {
    this.renderer = renderer;
    for (const effect of this.effects) {
      effect.initialize(renderer, alpha, frameBufferType);
    }
    this.updateMaterial();
    if (frameBufferType !== void 0 && frameBufferType !== UnsignedByteType15) {
      this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
    }
  }
  /**
   * Deletes disposable objects.
   */
  dispose() {
    super.dispose();
    for (const effect of this.effects) {
      effect.removeEventListener("change", this.listener);
      effect.dispose();
    }
  }
  /**
   * Handles events.
   *
   * @param {Event} event - An event.
   */
  handleEvent(event) {
    switch (event.type) {
      case "change":
        this.recompile();
        break;
    }
  }
};

// src/passes/GaussianBlurPass.js
const {SRGBColorSpace:SRGBColorSpace15,UnsignedByteType:UnsignedByteType16,WebGLRenderTarget:WebGLRenderTarget22} = await importShared('three');

// src/passes/NormalPass.js
const {Color:Color10,MeshNormalMaterial,NearestFilter:NearestFilter8,WebGLRenderTarget:WebGLRenderTarget23} = await importShared('three');

var NormalPass = class extends Pass {
  /**
   * Constructs a new normal pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use to render the scene.
   * @param {Object} [options] - The options.
   * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
   * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(scene, camera, {
    renderTarget,
    resolutionScale = 1,
    width = Resolution.AUTO_SIZE,
    height = Resolution.AUTO_SIZE,
    resolutionX = width,
    resolutionY = height
  } = {}) {
    super("NormalPass");
    this.needsSwap = false;
    this.renderPass = new RenderPass(scene, camera, new MeshNormalMaterial());
    const renderPass = this.renderPass;
    renderPass.ignoreBackground = true;
    renderPass.skipShadowMapUpdate = true;
    const clearPass = renderPass.getClearPass();
    clearPass.overrideClearColor = new Color10(7829503);
    clearPass.overrideClearAlpha = 1;
    this.renderTarget = renderTarget;
    if (this.renderTarget === void 0) {
      this.renderTarget = new WebGLRenderTarget23(1, 1, {
        minFilter: NearestFilter8,
        magFilter: NearestFilter8
      });
      this.renderTarget.texture.name = "NormalPass.Target";
    }
    const resolution = this.resolution = new Resolution(this, resolutionX, resolutionY, resolutionScale);
    resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
  }
  set mainScene(value) {
    this.renderPass.mainScene = value;
  }
  set mainCamera(value) {
    this.renderPass.mainCamera = value;
  }
  /**
   * The normal texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * The normal texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
   */
  setResolutionScale(scale) {
    this.resolution.scale = scale;
  }
  /**
   * Renders the scene normals.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
    const renderTarget = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(renderer, renderTarget, renderTarget);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(width, height) {
    const resolution = this.resolution;
    resolution.setBaseSize(width, height);
    this.renderTarget.setSize(resolution.width, resolution.height);
  }
};

// src/textures/smaa/SMAAImageGenerator.js
const {LoadingManager:LoadingManager5} = await importShared('three');

export { BloomEffect, ChromaticAberrationEffect, DepthDownsamplingPass, EffectComposer, EffectPass, GodRaysEffect, GridEffect, NormalPass, OutlineEffect, RenderPass };
//# sourceMappingURL=index.s6u766IF1767105581793.js.map
