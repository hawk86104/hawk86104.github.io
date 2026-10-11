import{importShared as w}from"./3d-tiles-renderer.DSwqJrch1791685100698.js";const l=await w("three"),k=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;function v(a,{type:i=l.HalfFloatType,filter:e=l.NearestFilter}={}){const t=new l.WebGLRenderTarget(a,a,{type:i,format:l.RGBAFormat,minFilter:e,magFilter:e,wrapS:l.RepeatWrapping,wrapT:l.RepeatWrapping,depthBuffer:!1,stencilBuffer:!1});return t.texture.generateMipmaps=!1,t}class b{constructor(i,e,{type:t=l.HalfFloatType}={}){this.renderer=i,this.resolution=e,this.logResolution=Math.log2(e),this.camera=new l.Camera,this.scene=new l.Scene,this.mesh=new l.Mesh(new l.PlaneGeometry(2,2)),this.scene.add(this.mesh),this.ping=v(e,{type:t}),this.pong=v(e,{type:t}),this.output=v(e,{type:t}),this.material=new l.ShaderMaterial({glslVersion:l.GLSL3,depthTest:!1,depthWrite:!1,uniforms:{inputTexture:{value:null},stage:{value:0},axis:{value:0},operation:{value:0}},defines:{FFT_SIZE:e,FFT_LOG_SIZE:this.logResolution},vertexShader:k,fragmentShader:`
        precision highp float;
        precision highp int;
        uniform sampler2D inputTexture;
        uniform int stage;
        uniform int axis;
        uniform int operation;
        out vec4 outputColor;

        vec2 complexMultiply(vec2 a, vec2 b) {
          return vec2(
            a.x * b.x - a.y * b.y,
            a.x * b.y + a.y * b.x
          );
        }

        int reverseBits(int value) {
          int reversed = 0;
          for (int bit = 0; bit < FFT_LOG_SIZE; bit++) {
            reversed = (reversed << 1) | (value & 1);
            value >>= 1;
          }
          return reversed;
        }

        vec4 readCell(ivec2 coordinate) {
          return texelFetch(inputTexture, coordinate, 0);
        }

        vec2 butterfly(vec2 a, vec2 b, float angle, bool subtractBranch) {
          vec2 twiddle = vec2(cos(angle), sin(angle));
          vec2 weighted = complexMultiply(twiddle, b);
          return subtractBranch ? a - weighted : a + weighted;
        }

        void main() {
          ivec2 cell = ivec2(gl_FragCoord.xy);

          if (operation == 0) {
            ivec2 sourceCell = cell;
            if (axis == 0) sourceCell.x = reverseBits(cell.x);
            else sourceCell.y = reverseBits(cell.y);
            outputColor = readCell(sourceCell);
            return;
          }

          if (operation == 1) {
            int coordinate = axis == 0 ? cell.x : cell.y;
            int span = 1 << (stage + 1);
            int halfSpan = span >> 1;
            int local = coordinate & (span - 1);
            int offset = local & (halfSpan - 1);
            int base = coordinate - local;
            int indexA = base + offset;
            int indexB = indexA + halfSpan;
            ivec2 cellA = cell;
            ivec2 cellB = cell;
            if (axis == 0) {
              cellA.x = indexA;
              cellB.x = indexB;
            } else {
              cellA.y = indexA;
              cellB.y = indexB;
            }
            vec4 a = readCell(cellA);
            vec4 b = readCell(cellB);
            float angle =
              6.28318530718 * float(offset) / float(span);
            bool subtractBranch = local >= halfSpan;
            outputColor = vec4(
              butterfly(a.xy, b.xy, angle, subtractBranch),
              butterfly(a.zw, b.zw, angle, subtractBranch)
            );
            return;
          }

          vec4 value = readCell(cell);
          float sign = ((cell.x + cell.y) & 1) == 0 ? 1.0 : -1.0;
          outputColor = value * sign;
        }
      `})}render(i,e,t,r=0,n=0){this.material.uniforms.inputTexture.value=i,this.material.uniforms.operation.value=t,this.material.uniforms.axis.value=r,this.material.uniforms.stage.value=n,this.mesh.material=this.material,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera)}transform(i){let e=i,t=this.ping;this.render(e,t,0,0),e=t.texture,t=this.pong;for(let r=0;r<this.logResolution;r+=1)this.render(e,t,1,0,r),e=t.texture,t=t===this.ping?this.pong:this.ping;this.render(e,t,0,1),e=t.texture,t=t===this.ping?this.pong:this.ping;for(let r=0;r<this.logResolution;r+=1)this.render(e,t,1,1,r),e=t.texture,t=t===this.ping?this.pong:this.ping;return this.render(e,this.output,2),this.renderer.setRenderTarget(null),this.output.texture}dispose(){this.material.dispose(),this.mesh.geometry.dispose(),this.ping.dispose(),this.pong.dispose(),this.output.dispose()}}function L(a,i,e){const t=new Float32Array(a*a*4),r=(e*a+i)*4;t[r]=1;const n=new l.DataTexture(t,a,a,l.RGBAFormat,l.FloatType);return n.minFilter=l.NearestFilter,n.magFilter=l.NearestFilter,n.needsUpdate=!0,n}function O(a,i){let e=0;for(let t=0;t<i*i;t+=1)e=Math.max(e,Math.abs(a[t*4]-1),Math.abs(a[t*4+1]));return e}function U(a,i){let e=0;for(let t=0;t<i;t+=1)for(let r=0;r<i;r+=1){const n=(t*i+r)*4,s=Math.PI*2*r/i;e=Math.max(e,Math.abs(a[n]-Math.cos(s)),Math.abs(a[n+1]-Math.sin(s)))}return e}function J(a,i=16){const e=new b(a,i,{type:l.FloatType}),t=new Float32Array(i*i*4),r=i/2,n=L(i,r,r);e.transform(n),a.readRenderTargetPixels(e.output,0,0,i,i,t);const s=O(t,i);n.dispose(),t.fill(0);const d=L(i,r+1,r);e.transform(d),a.readRenderTargetPixels(e.output,0,0,i,i,t);const x=U(t,i);return d.dispose(),e.dispose(),a.setRenderTarget(null),{pass:s<.001&&x<.001,impulseError:s,frequencyError:x}}const p=await w("three"),D=Math.PI*2;function W(a){let i=a>>>0;return()=>{i+=1831565813;let e=i;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function H(a){const i=Math.max(a(),1e-7),e=a(),t=Math.sqrt(-2*Math.log(i));return[t*Math.cos(D*e),t*Math.sin(D*e)]}function E(a,i,e){return Math.sqrt(i*a*Math.tanh(Math.min(a*e,20)))}function N(a,i,e){const t=a*e,r=Math.tanh(Math.min(t,20)),n=Math.cosh(Math.min(t,20)),s=E(a,i,e);return i*(r+e*a/(n*n))/Math.max(2*s,1e-6)}function Z(a,i,e){const t=a*Math.sqrt(e/i);if(t<=1)return .5*t*t;if(t<2){const r=2-t;return 1-.5*r*r}return 1}function A(a,i){return{...a,angle:p.MathUtils.degToRad(a.directionDegrees),alpha:.076*Math.pow(i*a.fetchMeters/(a.windSpeed*a.windSpeed),-.22),peakOmega:22*Math.pow(a.windSpeed*a.fetchMeters/(i*i),-.33)}}function $(a,i,e,t){const r=Math.max(a,1e-4),n=r<=t.peakOmega?.07:.09,s=(r-t.peakOmega)/Math.max(n*t.peakOmega*Math.SQRT2,1e-5),d=Math.exp(-s*s),x=t.peakOmega/r;return t.scale*Z(r,i,e)*t.alpha*i*i*Math.pow(r,-5)*Math.exp(-1.25*Math.pow(x,4))*Math.pow(t.peakEnhancement,d)}function K(a){const i=a*a,e=i*a,t=e*a;return a<5?-564e-6*t+.00776*e-.044*i+.192*a+.163:-48e-9*t+107e-7*e-953e-6*i+.059*a+.393}function X(a,i,e){const t=Math.max(i/e.peakOmega,1e-4),r=(t<=1?6.97*Math.pow(t,5):9.77*Math.pow(t,-2.5))+16*Math.tanh(Math.min(t,20))*e.swell*e.swell,n=2/Math.PI*Math.cos(a)**2,s=K(r)*Math.pow(Math.abs(Math.cos((a-e.angle)*.5)),2*r);return p.MathUtils.lerp(n,s,e.directionality)}function R(a,i,e,t,r){const n=E(a,e,t),s=Math.exp(-r.shortWaveFade*r.shortWaveFade*a*a);return $(n,e,t,r)*X(i,n,r)*s}function V({resolution:a,patchLength:i,cutoffLow:e,cutoffHigh:t,seed:r,gravity:n,depth:s,local:d,swell:x}){const B=W(r),z=D/i,f=new Float32Array(a*a*2),P=A(d,n),I=A(x,n);for(let o=0;o<a;o+=1)for(let h=0;h<a;h+=1){const c=o*a+h,T=(h-a*.5)*z,F=(o-a*.5)*z,u=Math.hypot(T,F);if(u<e||u>t)continue;const S=Math.atan2(F,T),q=R(u,S,n,s,P)+R(u,S,n,s,I),j=Math.abs(N(u,n,s)),C=Math.sqrt(Math.max(q*2*j*z*z/Math.max(u,1e-4),0)),[_,G]=H(B);f[c*2]=_*C,f[c*2+1]=G*C}const y=new Float32Array(a*a*4);for(let o=0;o<a;o+=1)for(let h=0;h<a;h+=1){const c=o*a+h,T=(a-h)%a,u=(a-o)%a*a+T;y[c*4]=f[c*2],y[c*4+1]=f[c*2+1],y[c*4+2]=f[u*2],y[c*4+3]=-f[u*2+1]}const g=new p.DataTexture(y,a,a,p.RGBAFormat,p.FloatType);return g.wrapS=p.RepeatWrapping,g.wrapT=p.RepeatWrapping,g.minFilter=p.NearestFilter,g.magFilter=p.NearestFilter,g.needsUpdate=!0,g}const m=await w("three");function M(a,i={}){return new m.ShaderMaterial({glslVersion:m.GLSL3,depthTest:!1,depthWrite:!1,uniforms:i,vertexShader:k,fragmentShader:a})}class Y{constructor(i,e){this.renderer=i,this.config=e,this.resolution=e.resolution,this.spectrum=V(e),this.heightFrequency=v(this.resolution),this.horizontalFrequency=v(this.resolution),this.heightIFFT=new b(i,this.resolution),this.horizontalIFFT=new b(i,this.resolution),this.displacementTargets=[v(this.resolution),v(this.resolution)],this.derivatives=v(this.resolution);for(const r of[...this.displacementTargets,this.derivatives])r.texture.minFilter=m.LinearFilter,r.texture.magFilter=m.LinearFilter,r.texture.needsUpdate=!0;this.currentDisplacement=0,this.camera=new m.Camera,this.scene=new m.Scene,this.mesh=new m.Mesh(new m.PlaneGeometry(2,2)),this.scene.add(this.mesh);const t={h0Texture:{value:this.spectrum},time:{value:0},patchLength:{value:e.patchLength},amplitude:{value:e.amplitude}};this.heightEvolution=M(`
        precision highp float;
        uniform sampler2D h0Texture;
        uniform float time;
        uniform float patchLength;
        uniform float amplitude;
        out vec4 outputColor;

        vec2 complexMultiply(vec2 a, vec2 b) {
          return vec2(
            a.x * b.x - a.y * b.y,
            a.x * b.y + a.y * b.x
          );
        }

        void main() {
          ivec2 cell = ivec2(gl_FragCoord.xy);
          vec4 initial = texelFetch(h0Texture, cell, 0);
          vec2 centered = vec2(cell) - vec2(${this.resolution}.0 * 0.5);
          vec2 k = centered * (6.28318530718 / patchLength);
          float kLength = max(length(k), 1e-4);
          float omega = sqrt(9.81 * kLength * tanh(min(kLength * 500.0, 20.0)));
          vec2 phase = vec2(cos(omega * time), sin(omega * time));
          vec2 h =
            complexMultiply(initial.xy, phase) +
            complexMultiply(initial.zw, vec2(phase.x, -phase.y));
          outputColor = vec4(h * amplitude, 0.0, 1.0);
        }
      `,t),this.horizontalEvolution=M(`
        precision highp float;
        uniform sampler2D h0Texture;
        uniform float time;
        uniform float patchLength;
        uniform float amplitude;
        out vec4 outputColor;

        vec2 complexMultiply(vec2 a, vec2 b) {
          return vec2(
            a.x * b.x - a.y * b.y,
            a.x * b.y + a.y * b.x
          );
        }

        void main() {
          ivec2 cell = ivec2(gl_FragCoord.xy);
          vec4 initial = texelFetch(h0Texture, cell, 0);
          vec2 centered = vec2(cell) - vec2(${this.resolution}.0 * 0.5);
          vec2 k = centered * (6.28318530718 / patchLength);
          float kLength = max(length(k), 1e-4);
          float omega = sqrt(9.81 * kLength * tanh(min(kLength * 500.0, 20.0)));
          vec2 phase = vec2(cos(omega * time), sin(omega * time));
          vec2 h =
            complexMultiply(initial.xy, phase) +
            complexMultiply(initial.zw, vec2(phase.x, -phase.y));
          vec2 ih = vec2(-h.y, h.x);
          vec2 dx = ih * (k.x / kLength);
          vec2 dz = ih * (k.y / kLength);
          vec2 packed = vec2(dx.x - dz.y, dx.y + dz.x);
          outputColor = vec4(packed * amplitude, 0.0, 1.0);
        }
      `,t),this.assembleDisplacement=M(`
        precision highp float;
        uniform sampler2D heightTexture;
        uniform sampler2D horizontalTexture;
        uniform sampler2D previousDisplacement;
        uniform float choppiness;
        uniform float patchLength;
        uniform float dt;
        uniform float foamRecovery;
        out vec4 outputColor;

        float heightAt(ivec2 cell) {
          return texelFetch(heightTexture, cell, 0).r;
        }
        vec2 horizontalAt(ivec2 cell) {
          return texelFetch(horizontalTexture, cell, 0).rg;
        }

        void main() {
          ivec2 cell = ivec2(gl_FragCoord.xy);
          ivec2 size = textureSize(heightTexture, 0);
          ivec2 left = ivec2((cell.x - 1 + size.x) % size.x, cell.y);
          ivec2 right = ivec2((cell.x + 1) % size.x, cell.y);
          ivec2 down = ivec2(cell.x, (cell.y - 1 + size.y) % size.y);
          ivec2 up = ivec2(cell.x, (cell.y + 1) % size.y);
          float inverseSpacing = float(size.x) / (2.0 * patchLength);
          vec2 horizontal = horizontalAt(cell);
          vec2 horizontalLeft = horizontalAt(left);
          vec2 horizontalRight = horizontalAt(right);
          vec2 horizontalDown = horizontalAt(down);
          vec2 horizontalUp = horizontalAt(up);
          float dDxDx = (horizontalRight.x - horizontalLeft.x) * inverseSpacing;
          float dDxDz = (horizontalUp.x - horizontalDown.x) * inverseSpacing;
          float dDzDx = (horizontalRight.y - horizontalLeft.y) * inverseSpacing;
          float dDzDz = (horizontalUp.y - horizontalDown.y) * inverseSpacing;
          float jxx = 1.0 + choppiness * dDxDx;
          float jzz = 1.0 + choppiness * dDzDz;
          float jxz = choppiness * 0.5 * (dDxDz + dDzDx);
          float jacobian = jxx * jzz - jxz * jxz;
          float previous = texelFetch(previousDisplacement, cell, 0).a;
          float recovered =
            previous +
            dt * foamRecovery / max(jacobian, 0.5);
          float history = min(jacobian, recovered);
          outputColor = vec4(
            horizontal.x * choppiness,
            heightAt(cell),
            horizontal.y * choppiness,
            history
          );
        }
      `,{heightTexture:{value:null},horizontalTexture:{value:null},previousDisplacement:{value:null},choppiness:{value:e.choppiness},patchLength:{value:e.patchLength},dt:{value:1/60},foamRecovery:{value:e.foamRecovery}}),this.assembleDerivatives=M(`
        precision highp float;
        uniform sampler2D heightTexture;
        uniform sampler2D horizontalTexture;
        uniform float choppiness;
        uniform float patchLength;
        out vec4 outputColor;

        float heightAt(ivec2 cell) {
          return texelFetch(heightTexture, cell, 0).r;
        }
        vec2 horizontalAt(ivec2 cell) {
          return texelFetch(horizontalTexture, cell, 0).rg;
        }

        void main() {
          ivec2 cell = ivec2(gl_FragCoord.xy);
          ivec2 size = textureSize(heightTexture, 0);
          ivec2 left = ivec2((cell.x - 1 + size.x) % size.x, cell.y);
          ivec2 right = ivec2((cell.x + 1) % size.x, cell.y);
          ivec2 down = ivec2(cell.x, (cell.y - 1 + size.y) % size.y);
          ivec2 up = ivec2(cell.x, (cell.y + 1) % size.y);
          float inverseSpacing = float(size.x) / (2.0 * patchLength);
          float slopeX = (heightAt(right) - heightAt(left)) * inverseSpacing;
          float slopeZ = (heightAt(up) - heightAt(down)) * inverseSpacing;
          float dDxDx =
            (horizontalAt(right).x - horizontalAt(left).x) * inverseSpacing;
          float dDzDz =
            (horizontalAt(up).y - horizontalAt(down).y) * inverseSpacing;
          outputColor = vec4(
            slopeX,
            slopeZ,
            choppiness * dDxDx,
            choppiness * dDzDz
          );
        }
      `,{heightTexture:{value:null},horizontalTexture:{value:null},choppiness:{value:e.choppiness},patchLength:{value:e.patchLength}}),this.clearHistoryTargets()}clearHistoryTargets(){const i=new m.Color;this.renderer.getClearColor(i);const e=this.renderer.getClearAlpha();this.renderer.setClearColor(0,1);for(const t of this.displacementTargets)this.renderer.setRenderTarget(t),this.renderer.clear();this.renderer.setRenderTarget(null),this.renderer.setClearColor(i,e)}renderPass(i,e){this.mesh.material=i,this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.camera)}update(i,e){this.heightEvolution.uniforms.time.value=i,this.horizontalEvolution.uniforms.time.value=i,this.renderPass(this.heightEvolution,this.heightFrequency),this.renderPass(this.horizontalEvolution,this.horizontalFrequency);const t=this.heightIFFT.transform(this.heightFrequency.texture),r=this.horizontalIFFT.transform(this.horizontalFrequency.texture),n=this.displacementTargets[this.currentDisplacement],s=1-this.currentDisplacement,d=this.displacementTargets[s];this.assembleDisplacement.uniforms.heightTexture.value=t,this.assembleDisplacement.uniforms.horizontalTexture.value=r,this.assembleDisplacement.uniforms.previousDisplacement.value=n.texture,this.assembleDisplacement.uniforms.dt.value=e,this.renderPass(this.assembleDisplacement,d),this.assembleDerivatives.uniforms.heightTexture.value=t,this.assembleDerivatives.uniforms.horizontalTexture.value=r,this.renderPass(this.assembleDerivatives,this.derivatives),this.currentDisplacement=s,this.renderer.setRenderTarget(null)}get displacement(){return this.displacementTargets[this.currentDisplacement].texture}}class ee{constructor(i,e){this.renderer=i,this.options=e;const t=r=>Math.PI*2/e.patchLengths[r]*e.boundaryFactor;this.cascades=e.patchLengths.map((r,n)=>new Y(i,{...e,patchLength:r,cutoffLow:n===0?1e-4:t(n),cutoffHigh:n===e.patchLengths.length-1?9999:t(n+1),seed:e.seed+n*1013,amplitude:e.amplitude}))}update(i,e){for(const t of this.cascades)t.update(i,e)}}export{ee as SpectralOceanSystem,J as validateFragmentIFFT};
