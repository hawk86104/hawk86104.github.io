import{importShared as x}from"./3d-tiles-renderer.VbrN2IWq1792120058440.js";import{OrbitControls_default as T}from"./index.Cd6x891f1792120058440.js";import{Pane as B}from"./tweakpane.BQRZXf8M1792120058440.js";import{loading as V}from"./domCanvas.OquxONBt1792120058440.js";import"./default.vue_vue_type_script_setup_true_lang.DZTGh0UR1792120058440.js";import"./three-mesh-ui.module.C7BYX7MS1792120058440.js";import"./domPanel.vue_vue_type_style_index_0_lang.D2Vg-7um1792120058440.js";import{useTresExperience as L}from"./useTresExperience.BdTdPCdJ1792120058440.js";import{validateFragmentIFFT as F,SpectralOceanSystem as z}from"./ocean-system.CZ-pFIro1792120058440.js";const p=await x("three");function b(e){return e*e*(3-2*e)}function A(e,n){const a=new Float32Array(e*e);let o=n>>>0;for(let t=0;t<a.length;t+=1)o=Math.imul(1664525,o)+1013904223,a[t]=(o>>>0)/4294967296;return a}function k(e,n,a,o,t){const r=a*t,i=o*t,l=Math.floor(r),c=Math.floor(i),m=b(r-l),d=b(i-c),v=(h,g)=>{const u=(h%t+t)%t,f=(g%t+t)%t;return e[f*n+u]};return p.MathUtils.lerp(p.MathUtils.lerp(v(l,c),v(l+1,c),m),p.MathUtils.lerp(v(l,c+1),v(l+1,c+1),m),d)}function w(e,n,a,o){let t=0,r=.5,i=4;for(let l=0;l<4;l+=1)t+=k(e,n,a,o,i)*r,r*=.5,i*=2;return t/.9375}function U(e=512,n=523124044){const a=A(e,n),o=new Uint8Array(e*e*4),t=1/e;for(let i=0;i<e;i+=1)for(let l=0;l<e;l+=1){const c=l/e,m=i/e,d=w(a,e,c,m),v=w(a,e,c+t,m)-w(a,e,c-t,m),h=w(a,e,c,m+t)-w(a,e,c,m-t),g=w(a,e,c*2%1,m*2%1),u=(i*e+l)*4;o[u]=Math.round(p.MathUtils.clamp(.5-v*1.5,0,1)*255),o[u+1]=Math.round(p.MathUtils.clamp(.5-h*1.5,0,1)*255),o[u+2]=Math.round(d*255),o[u+3]=Math.round(g*255)}const r=new p.DataTexture(o,e,e,p.RGBAFormat,p.UnsignedByteType);return r.wrapS=p.RepeatWrapping,r.wrapT=p.RepeatWrapping,r.minFilter=p.LinearMipmapLinearFilter,r.magFilter=p.LinearFilter,r.generateMipmaps=!0,r.needsUpdate=!0,r}const s=await x("three"),_=`
  vec3 skyRadiance(vec3 direction) {
    float vertical = smoothstep(-0.05, 0.4, direction.y);
    vec3 gradient = mix(horizonColor, zenithColor, vertical);
    float sunAlignment = max(dot(direction, sunDirection), 0.0);
    vec3 disc = sunColor * pow(sunAlignment, 1200.0) * 8.0;
    vec3 halo = sunColor * pow(sunAlignment, 7.0) * 0.35;
    return gradient + disc + halo;
  }
`;function N(e,n){const a={displacement0:{value:e[0].displacement},displacement1:{value:e[1].displacement},displacement2:{value:e[2].displacement},derivatives0:{value:e[0].derivatives.texture},derivatives1:{value:e[1].derivatives.texture},derivatives2:{value:e[2].derivatives.texture},patchLengths:{value:new s.Vector3(...n.patchLengths)},sunDirection:{value:n.sunDirection},sunColor:{value:new s.Color(16773596)},horizonColor:{value:new s.Color(10467532)},zenithColor:{value:new s.Color(2775964)},deepColor:{value:new s.Color(465446)},scatterColor:{value:new s.Color(3051407)},foamColor:{value:new s.Color(14477290)},foamThreshold:{value:.4},foamScale:{value:2.5},detailStrength:{value:.1},detailTexture:{value:n.detailTexture},time:{value:0},fogColor:{value:new s.Color(10467532)},fogDensity:{value:.0045},debugMode:{value:0}};return new s.ShaderMaterial({glslVersion:s.GLSL3,side:s.DoubleSide,uniforms:a,vertexShader:`
      precision highp float;
      uniform sampler2D displacement0;
      uniform sampler2D displacement1;
      uniform sampler2D displacement2;
      uniform vec3 patchLengths;
      out vec3 worldPositionVarying;
      out vec2 oceanPosition;

      vec4 sampleDisplacement(sampler2D map, vec2 xz, float lengthScale) {
        return texture(map, fract(xz / lengthScale));
      }

      void main() {
        oceanPosition = position.xz;
        vec3 displacement =
          sampleDisplacement(displacement0, oceanPosition, patchLengths.x).xyz +
          sampleDisplacement(displacement1, oceanPosition, patchLengths.y).xyz +
          sampleDisplacement(displacement2, oceanPosition, patchLengths.z).xyz;
        vec3 displaced = position + displacement;
        vec4 world = modelMatrix * vec4(displaced, 1.0);
        worldPositionVarying = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      precision highp float;
      uniform sampler2D displacement0;
      uniform sampler2D displacement1;
      uniform sampler2D displacement2;
      uniform sampler2D derivatives0;
      uniform sampler2D derivatives1;
      uniform sampler2D derivatives2;
      uniform vec3 patchLengths;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform vec3 horizonColor;
      uniform vec3 zenithColor;
      uniform vec3 deepColor;
      uniform vec3 scatterColor;
      uniform vec3 foamColor;
      uniform vec3 fogColor;
      uniform float foamThreshold;
      uniform float foamScale;
      uniform float detailStrength;
      uniform sampler2D detailTexture;
      uniform float time;
      uniform float fogDensity;
      uniform int debugMode;
      in vec3 worldPositionVarying;
      in vec2 oceanPosition;
      out vec4 outputColor;

      ${_}

      float hash21(vec2 point) {
        point = fract(point * vec2(123.34, 456.21));
        point += dot(point, point + 45.32);
        return fract(point.x * point.y);
      }

      float valueNoise(vec2 point) {
        vec2 cell = floor(point);
        vec2 local = fract(point);
        local = local * local * (3.0 - 2.0 * local);
        return mix(
          mix(hash21(cell), hash21(cell + vec2(1, 0)), local.x),
          mix(hash21(cell + vec2(0, 1)), hash21(cell + 1.0), local.x),
          local.y
        );
      }

      vec4 sampleDerivatives(sampler2D map, vec2 xz, float lengthScale) {
        return texture(map, fract(xz / lengthScale));
      }

      vec4 sampleDisplacement(sampler2D map, vec2 xz, float lengthScale) {
        return texture(map, fract(xz / lengthScale));
      }

      void main() {
        vec4 derivative =
          sampleDerivatives(derivatives0, oceanPosition, patchLengths.x) +
          sampleDerivatives(derivatives1, oceanPosition, patchLengths.y) +
          sampleDerivatives(derivatives2, oceanPosition, patchLengths.z);
        float denominatorX = max(0.18, 1.0 + derivative.z);
        float denominatorZ = max(0.18, 1.0 + derivative.w);
        vec3 normal = normalize(vec3(
          -derivative.x / denominatorX,
          1.0,
          -derivative.y / denominatorZ
        ));

        vec2 detailA = texture(
          detailTexture,
          oceanPosition * 0.06 + vec2(time * 0.012, time * 0.008)
        ).rg * 2.0 - 1.0;
        vec2 detailB = texture(
          detailTexture,
          oceanPosition * 0.17 + vec2(-time * 0.02, time * 0.015)
        ).rg * 2.0 - 1.0;
        vec2 detailNormal = detailA + detailB * 0.5;
        normal = normalize(
          normal +
          vec3(detailNormal.x, 0.0, detailNormal.y) * detailStrength
        );

        vec4 displacementA =
          sampleDisplacement(displacement0, oceanPosition, patchLengths.x);
        vec4 displacementB =
          sampleDisplacement(displacement1, oceanPosition, patchLengths.y);
        vec4 displacementC =
          sampleDisplacement(displacement2, oceanPosition, patchLengths.z);

        float foamRaw =
          clamp((foamThreshold - displacementA.a) * foamScale, 0.0, 1.0) +
          clamp((foamThreshold - displacementB.a) * foamScale, 0.0, 1.0);
        float foamCoverage = smoothstep(0.2, 0.9, foamRaw);

        if (debugMode == 1) {
          vec3 bands =
            vec3(abs(displacementA.y), abs(displacementB.y), abs(displacementC.y));
          outputColor = vec4(
            pow(clamp(bands * vec3(0.16, 0.7, 1.4), 0.0, 1.0), vec3(0.55)),
            1.0
          );
          return;
        }
        if (debugMode == 2) {
          outputColor = vec4(normal * 0.5 + 0.5, 1.0);
          return;
        }
        if (debugMode == 3) {
          float history = min(displacementA.a, displacementB.a);
          outputColor = vec4(
            mix(vec3(0.95, 0.2, 0.06), vec3(0.04, 0.12, 0.18), clamp(history, 0.0, 1.0)),
            1.0
          );
          return;
        }

        vec3 viewDirection = normalize(cameraPosition - worldPositionVarying);
        float noV = max(dot(normal, viewDirection), 0.0);
        float fresnel = 0.02 + 0.98 * pow(1.0 - noV, 5.0);
        vec3 reflectedDirection = reflect(-viewDirection, normal);
        reflectedDirection.y = max(abs(reflectedDirection.y), 0.02);
        vec3 reflection = skyRadiance(normalize(reflectedDirection));

        float crest = clamp(worldPositionVarying.y * 0.5 + 0.4, 0.0, 1.0);
        vec3 halfVector = normalize(-normal + sunDirection);
        float scatter =
          pow(clamp(dot(viewDirection, -halfVector), 0.0, 1.0), 4.0) *
          crest;
        vec3 body = mix(
          deepColor,
          scatterColor,
          clamp(0.12 + scatter, 0.0, 1.0)
        );
        vec3 water = mix(body, reflection, fresnel);

        float bubbleA = texture(
          detailTexture,
          oceanPosition * 0.45 + vec2(time * 0.03, time * 0.02)
        ).b;
        float bubbleB = texture(
          detailTexture,
          oceanPosition * 1.6 + vec2(-time * 0.05, time * 0.04)
        ).a;
        float bubble = clamp(
          bubbleA * 0.7 + bubbleB * 0.5 + 0.2,
          0.0,
          1.0
        );
        float foamLight =
          0.55 +
          0.6 * clamp(dot(normal, sunDirection), 0.0, 1.0);
        vec3 shadedFoam = foamColor * bubble * foamLight;
        vec3 color = mix(water, shadedFoam, foamCoverage);

        float distanceToCamera = length(cameraPosition - worldPositionVarying);
        float fog = 1.0 - exp(-fogDensity * fogDensity * distanceToCamera * distanceToCamera);
        color = mix(color, fogColor, clamp(fog, 0.0, 1.0));
        outputColor = vec4(color, 1.0);
      }
    `})}function R(e,n){e.uniforms.displacement0.value=n[0].displacement,e.uniforms.displacement1.value=n[1].displacement,e.uniforms.displacement2.value=n[2].displacement}function $(e){return new s.ShaderMaterial({glslVersion:s.GLSL3,side:s.BackSide,depthWrite:!1,uniforms:{sunDirection:{value:e.sunDirection},sunColor:{value:new s.Color(16773596)},horizonColor:{value:new s.Color(10467532)},zenithColor:{value:new s.Color(2775964)}},vertexShader:`
      out vec3 directionVarying;
      void main() {
        directionVarying = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform vec3 horizonColor;
      uniform vec3 zenithColor;
      in vec3 directionVarying;
      out vec4 outputColor;
      ${_}
      void main() {
        outputColor = vec4(skyRadiance(normalize(directionVarying)), 1.0);
      }
    `})}const O={assetBase:"/plugins/water/spectralCascadeOcean/",initialTime:18.5,async setup({THREE:e,renderer:n,scene:a}){const o=F(n);if(!o.pass)throw new Error(`IFFT validation failed: impulse=${o.impulseError}, frequency=${o.frequencyError}`);const t=e.MathUtils.degToRad(135),r=e.MathUtils.degToRad(28),i=new e.Vector3(Math.cos(r)*Math.sin(t),Math.sin(r),Math.cos(r)*Math.cos(t)).normalize(),l=U(),c={resolution:256,patchLengths:[250,17,5],boundaryFactor:6,gravity:9.81,depth:500,choppiness:1.3,foamRecovery:.4,amplitude:1,seed:481516,sunDirection:i,detailTexture:l,local:{scale:1,windSpeed:16,directionDegrees:45,fetchMeters:1e5,directionality:1,swell:.2,peakEnhancement:3.3,shortWaveFade:.02},swell:{scale:.8,windSpeed:2,directionDegrees:70,fetchMeters:3e5,directionality:1,swell:1,peakEnhancement:3.3,shortWaveFade:.01}},m=new z(n,c);a.fog=new e.FogExp2(10467532,.0045);const d=N(m.cascades,c),v=new e.PlaneGeometry(400,400,900,900);v.rotateX(-Math.PI*.5);const h=new e.Mesh(v,d);h.frustumCulled=!1,a.add(h);const g=new e.Mesh(new e.SphereGeometry(12e3,48,24),$(c));a.add(g);let u=1;return{setParameters(f){u=f.timeScale,h.scale.y=f.waveHeight,d.uniforms.foamThreshold.value=f.foamThreshold,d.uniforms.foamScale.value=f.foamScale,d.uniforms.detailStrength.value=f.detailStrength,d.uniforms.fogDensity.value=f.fogDensity,a.fog.density=f.fogDensity},update({delta:f,elapsed:D}){m.update(D*u,Math.max(f*u,1/120)),R(d,m.cascades),d.uniforms.time.value=D*u},dispose(){v.dispose(),d.dispose(),g.geometry.dispose(),g.material.dispose(),l.dispose()}}}},{withAsyncContext:G,defineComponent:W}=await x("vue"),I=W({__name:"index",props:{timeScale:{},waveHeight:{},foamThreshold:{},foamScale:{},detailStrength:{},fogDensity:{}},emits:["progress"],async setup(e,{emit:n}){let a,o;const t=e,r=n;return[a,o]=G(()=>L(O,t,i=>r("progress",i))),await a,o(),(i,l)=>null}}),{defineComponent:X}=await x("vue"),{unref:C,createVNode:y,createElementVNode:j,mergeProps:E,Suspense:Z,withCtx:S,openBlock:M,createBlock:Y,resolveComponent:J,Fragment:K,createElementBlock:Q}=await x("vue"),{onUnmounted:H,reactive:q,ref:P}=await x("vue"),{NoToneMapping:ee}=await x("three"),me=X({__name:"spectralCascadeOcean",setup(e){const n=P(!1),a=P(0),o=q({timeScale:1,waveHeight:1,foamThreshold:.4,foamScale:2.5,detailStrength:.1,fogDensity:.0045}),t=new B({title:"频谱海洋参数"});return t.addBinding(o,"timeScale",{label:"波浪演化速度",min:0,max:2,step:.05}),t.addBinding(o,"waveHeight",{label:"波高倍率",min:.2,max:2.5,step:.05}),t.addBinding(o,"foamThreshold",{label:"白沫阈值",min:.1,max:.8,step:.01}),t.addBinding(o,"foamScale",{label:"白沫覆盖",min:.5,max:6,step:.1}),t.addBinding(o,"detailStrength",{label:"微波法线",min:0,max:.4,step:.01}),t.addBinding(o,"fogDensity",{label:"海雾密度",min:0,max:.015,step:5e-4}),H(()=>t.dispose()),(r,i)=>{const l=J("TresCanvas");return M(),Q(K,null,[y(C(V),{"progress-value":a.value,finished:n.value,"show-progress":""},null,8,["progress-value","finished"]),y(l,{"clear-color":"#9fb8cc","tone-mapping":C(ee),"window-size":""},{default:S(()=>[i[2]||(i[2]=j("TresPerspectiveCamera",{position:[0,16,68],fov:55,near:.5,far:3e4},null,-1)),y(C(T),{"make-default":"",target:[0,0,-20],"max-polar-angle":Math.PI*.495},null,8,["max-polar-angle"]),(M(),Y(Z,{onResolve:i[1]||(i[1]=c=>n.value=!0)},{default:S(()=>[y(I,E(o,{onProgress:i[0]||(i[0]=c=>a.value=c)}),null,16)]),_:1}))]),_:1},8,["tone-mapping"])],64)}}});export{me as default};
