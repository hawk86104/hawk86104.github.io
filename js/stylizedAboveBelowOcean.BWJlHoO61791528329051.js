import{importShared as v}from"./3d-tiles-renderer.Fdp4AP3P1791528329051.js";import{OrbitControls_default as A}from"./index.BpjR6Ybq1791528329051.js";import{Pane as I}from"./tweakpane.BQRZXf8M1791528329051.js";import{loading as R}from"./domCanvas.DNZJiVsX1791528329051.js";import"./default.vue_vue_type_script_setup_true_lang.DCZlwbmu1791528329051.js";import"./three-mesh-ui.module.DOySy0Cm1791528329051.js";import"./domPanel.vue_vue_type_style_index_0_lang.Dhg-Cml31791528329051.js";import{useTresExperience as Z}from"./useTresExperience.DLf_SrC11791528329051.js";import{validateFragmentIFFT as X,SpectralOceanSystem as G}from"./ocean-system.S4ZArRQB1791528329051.js";const l=await v("three"),$=new Map([["final",0],["above-surface",0],["underwater",0],["cascade-bands",1],["normals",2],["foam",3],["depth-fog",4]]),W={foam:"/plugins/water/stylizedAboveBelowOcean/foam.webp",sand:"/plugins/water/stylizedAboveBelowOcean/sand.webp"},V=`
  float skyHash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float skyNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(skyHash(i), skyHash(i + vec2(1.0, 0.0)), u.x),
      mix(skyHash(i + vec2(0.0, 1.0)), skyHash(i + vec2(1.0)), u.x),
      u.y
    );
  }

  float skyFbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += skyNoise(p) * a;
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  vec3 stylizedOceanSky(vec3 direction, vec3 sunDirection, vec3 sunColor) {
    vec3 viewDirection = normalize(direction);
    vec3 topColor = vec3(0.024, 0.255, 0.537);
    vec3 bottomColor = vec3(0.475, 0.722, 0.851);
    float height = max(viewDirection.y, 0.0);
    float opticalDepth = exp(-height * (8.0 - 1.2));
    vec3 skyColor = mix(topColor, bottomColor, opticalDepth);

    float sunDot = dot(viewDirection, normalize(sunDirection));
    float sunDisk = smoothstep(0.9999, 1.0, sunDot);
    float dynamicGlowSize = 0.999 - (6.0 * 0.002);
    float sunGlow = smoothstep(dynamicGlowSize, 1.0, sunDot);
    float dynamicDiskIntensity = 1.5 / (1.0 + (6.0 * 0.1));
    vec3 finalColor =
      skyColor +
      sunColor * sunGlow * 4.5 +
      sunColor * sunDisk * dynamicDiskIntensity;
    return clamp(finalColor, 0.0, 1.0);
  }
`,j=`
  float hash21(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float valueNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
      mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    mat2 rotate = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      value += valueNoise(p) * amplitude;
      p = rotate * p * 2.04;
      amplitude *= 0.5;
    }
    return value;
  }
`;function J(a,{patchLengths:t,sunDirection:e=new l.Vector3(-.14,.13,-.98).normalize(),sunColor:o=new l.Color(16768880),waterDeep:r=new l.Color(1418732),waterShallow:s=new l.Color(5885439),fogColor:i=new l.Color(5421541),foamTexture:c=null}={}){return new l.ShaderMaterial({side:l.DoubleSide,uniforms:{displacement0:{value:a[0].displacement},displacement1:{value:a[1].displacement},displacement2:{value:a[2].displacement},derivatives0:{value:a[0].derivatives.texture},derivatives1:{value:a[1].derivatives.texture},derivatives2:{value:a[2].derivatives.texture},patchLengths:{value:new l.Vector3(...t)},uTime:{value:0},uSunDirection:{value:e},uSunColor:{value:o.clone()},uWaterDeep:{value:r.clone()},uWaterShallow:{value:s.clone()},uWaterSSS:{value:new l.Color(3895994)},uFoamColor:{value:new l.Color(16777215)},uFoamTexture:{value:c},uFogColor:{value:i.clone()},uColorMinHeight:{value:-4.5},uColorMaxHeight:{value:1.5},uSpecularPower:{value:250},uSpecularMin:{value:.9},uSpecularMax:{value:.99},uSpecularIntensity:{value:4.7},uFadeStart:{value:500},uFadeEnd:{value:3500},uSssPower:{value:4.7},uSssScale:{value:2},uSssMinHeight:{value:-.2},uSssMaxHeight:{value:1},uFoamThreshold:{value:.4},uFoamScale:{value:7},uFoamSpeed:{value:new l.Vector2(.2,.2)},uFoamDistortion:{value:1.4},uFoamEdgeSoftness:{value:.8},uFoamPower:{value:.5},uFresnelSmoothness:{value:.5},uFogDensity:{value:5e-4},uDebugMode:{value:0}},vertexShader:`
      precision highp float;

      uniform sampler2D displacement0;
      uniform sampler2D displacement1;
      uniform sampler2D displacement2;
      uniform vec3 patchLengths;

      varying vec2 vOceanXZ;
      varying vec3 vWorldPosition;
      varying float vHeight;
      varying float vJacobian;

      vec4 sampleDisplacement(sampler2D map, vec2 xz, float lengthScale) {
        return texture2D(map, fract(xz / lengthScale));
      }

      void main() {
        vec4 baseWorld = modelMatrix * vec4(position, 1.0);
        vOceanXZ = baseWorld.xz;
        vec4 d0 = sampleDisplacement(displacement0, vOceanXZ, patchLengths.x);
        vec4 d1 = sampleDisplacement(displacement1, vOceanXZ, patchLengths.y);
        vec4 d2 = sampleDisplacement(displacement2, vOceanXZ, patchLengths.z);
        vec3 displacement = d0.xyz + d1.xyz * 0.56 + d2.xyz * 0.28;
        displacement.xz *= 1.5;
        vec3 world = baseWorld.xyz + displacement;
        vWorldPosition = world;
        vHeight = displacement.y;
        vJacobian = min(d0.a, d1.a);
        gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
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
      uniform float uTime;
      uniform vec3 uSunDirection;
      uniform vec3 uSunColor;
      uniform vec3 uWaterDeep;
      uniform vec3 uWaterShallow;
      uniform vec3 uWaterSSS;
      uniform vec3 uFoamColor;
      uniform sampler2D uFoamTexture;
      uniform vec3 uFogColor;
      uniform float uColorMinHeight;
      uniform float uColorMaxHeight;
      uniform float uSpecularPower;
      uniform float uSpecularMin;
      uniform float uSpecularMax;
      uniform float uSpecularIntensity;
      uniform float uFadeStart;
      uniform float uFadeEnd;
      uniform float uSssPower;
      uniform float uSssScale;
      uniform float uSssMinHeight;
      uniform float uSssMaxHeight;
      uniform float uFoamThreshold;
      uniform float uFoamScale;
      uniform vec2 uFoamSpeed;
      uniform float uFoamDistortion;
      uniform float uFoamEdgeSoftness;
      uniform float uFoamPower;
      uniform float uFresnelSmoothness;
      uniform float uFogDensity;
      uniform int uDebugMode;

      varying vec2 vOceanXZ;
      varying vec3 vWorldPosition;
      varying float vHeight;
      varying float vJacobian;

      ${V}
      ${j}

      vec4 sampleDerivatives(sampler2D map, vec2 xz, float lengthScale) {
        return texture2D(map, fract(xz / lengthScale));
      }

      vec4 sampleDisplacement(sampler2D map, vec2 xz, float lengthScale) {
        return texture2D(map, fract(xz / lengthScale));
      }

      float fresnelTerm(vec3 viewDirection, vec3 normal) {
        float dotVN = clamp(dot(viewDirection, normal), 0.0, 1.0);
        return 0.02 + 0.98 * pow(1.0 - dotVN, 5.0);
      }

      void main() {
        vec4 der0 = sampleDerivatives(derivatives0, vOceanXZ, patchLengths.x);
        vec4 der1 = sampleDerivatives(derivatives1, vOceanXZ, patchLengths.y);
        vec4 der2 = sampleDerivatives(derivatives2, vOceanXZ, patchLengths.z);
        vec4 derivative = der0 + der1 * 0.56 + der2 * 0.28;
        vec3 normal = normalize(vec3(
          -derivative.x / max(0.18, 1.0 + derivative.z),
          1.0,
          -derivative.y / max(0.18, 1.0 + derivative.w)
        ));
        if (!gl_FrontFacing) normal = -normal;

        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        vec3 lightDirection = normalize(uSunDirection);
        float dist = length(cameraPosition - vWorldPosition);
        float aaFade = smoothstep(uFadeStart, uFadeEnd, dist);
        normal = normalize(mix(normal, vec3(0.0, gl_FrontFacing ? 1.0 : -1.0, 0.0), aaFade));
        float dynamicSpecular = mix(uSpecularIntensity, 0.0, aaFade);

        if (uDebugMode == 1) {
          vec4 d0 = sampleDisplacement(displacement0, vOceanXZ, patchLengths.x);
          vec4 d1 = sampleDisplacement(displacement1, vOceanXZ, patchLengths.y);
          vec4 d2 = sampleDisplacement(displacement2, vOceanXZ, patchLengths.z);
          gl_FragColor = vec4(pow(clamp(vec3(abs(d0.y), abs(d1.y) * 2.0, abs(d2.y) * 4.0), 0.0, 1.0), vec3(0.55)), 1.0);
          return;
        }
        if (uDebugMode == 2) {
          gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
          return;
        }

        float heightMask = smoothstep(uColorMinHeight, uColorMaxHeight, vHeight);
        vec3 baseWater = mix(uWaterDeep, uWaterShallow, heightMask);

        vec3 distortedLight = normalize(-lightDirection + normal * 0.4);
        float sssAlignment = max(dot(viewDirection, distortedLight), 0.0);
        float sss = pow(sssAlignment, uSssPower) * uSssScale;
        sss *= smoothstep(uSssMinHeight, uSssMaxHeight, vHeight);
        vec3 waterInside = baseWater + uWaterSSS * sss;

        vec3 fresnelNormal = normalize(mix(normal, vec3(0.0, normal.y > 0.0 ? 1.0 : -1.0, 0.0), uFresnelSmoothness));
        vec3 reflectionVector = reflect(-viewDirection, fresnelNormal);
        vec3 reflection = stylizedOceanSky(normalize(reflectionVector), lightDirection, uSunColor);
        float fresnel = fresnelTerm(viewDirection, fresnelNormal);

        vec3 halfVector = normalize(lightDirection + viewDirection);
        float specularTerm = pow(max(dot(halfVector, normal), 0.0), uSpecularPower);
        float sunPath = smoothstep(uSpecularMin, uSpecularMax, specularTerm);
        vec3 directSpecular = uSunColor * sunPath * dynamicSpecular;

        vec3 color = mix(waterInside, reflection + directSpecular, fresnel);

        vec2 foamUv = vOceanXZ / patchLengths.x;
        vec2 foamUv1 = foamUv * uFoamScale;
        foamUv1 += uTime * (uFoamSpeed * 0.05);
        vec2 foamUv2 = foamUv * (uFoamScale * 1.2);
        foamUv2 += uTime * (-uFoamSpeed * 0.07);
        float foamNoise =
          texture2D(uFoamTexture, foamUv1).r *
          texture2D(uFoamTexture, foamUv2).r;
        float turbulence = max(0.0, (uFoamThreshold - vJacobian) * 10.0);
        turbulence *= uFoamPower * 10.0;
        float foamCoverage =
          smoothstep(uFoamThreshold, uFoamThreshold + uFoamEdgeSoftness, turbulence);
        float foamMask =
          foamCoverage * pow(foamNoise, 1.0 / max(uFoamDistortion, 0.001));
        foamMask = clamp(foamMask * 2.4, 0.0, 1.0);
        if (uDebugMode == 3) {
          gl_FragColor = vec4(vec3(foamMask), 1.0);
          return;
        }
        color = mix(color, uFoamColor, foamMask);

        float fogFactor = clamp(1.0 - exp(-pow(dist * uFogDensity, 2.0)), 0.0, 1.0);
        float sunDot = dot(-viewDirection, lightDirection);
        vec3 dynamicFog = uFogColor +
          uSunColor * smoothstep(0.999, 1.0, sunDot) * 1.5 +
          uSunColor * smoothstep(0.985, 1.0, sunDot) * 0.35;
        color = mix(color, dynamicFog, fogFactor);

        gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
        #include <colorspace_fragment>
      }
    `})}function q({sandTexture:a=null,sandColor:t=new l.Color(16777215),waterDeep:e=new l.Color(1418732),waterShallow:o=new l.Color(5885439),maxDepth:r=171,textureScale:s=100,causticIntensity:i=.9,causticSpeed:c=.1,causticScale:m=.01,proximityNear:g=15,proximityFar:S=300,minWaterTint:x=.53}={}){return new l.ShaderMaterial({uniforms:{uTime:{value:0},uSandTexture:{value:a},uSandColor:{value:t.clone()},uWaterDeep:{value:e.clone()},uWaterShallow:{value:o.clone()},uMaxDepth:{value:r},uTextureScale:{value:s},uCausticIntensity:{value:i},uCausticSpeed:{value:c},uCausticScale:{value:m},uProximityNear:{value:g},uProximityFar:{value:S},uMinWaterTint:{value:x}},vertexShader:`
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorldPosition = world.xyz;
        vUv = uv;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      precision highp float;

      uniform float uTime;
      uniform sampler2D uSandTexture;
      uniform vec3 uSandColor;
      uniform vec3 uWaterDeep;
      uniform vec3 uWaterShallow;
      uniform float uMaxDepth;
      uniform float uTextureScale;
      uniform float uCausticIntensity;
      uniform float uCausticSpeed;
      uniform float uCausticScale;
      uniform float uProximityNear;
      uniform float uProximityFar;
      uniform float uMinWaterTint;
      varying vec3 vWorldPosition;
      varying vec2 vUv;

      vec2 hash(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453);
      }

      float voronoiSeamless(vec2 x, float period) {
        vec2 n = floor(x);
        vec2 f = fract(x);
        float minDist = 8.0;
        for (int j = -1; j <= 1; j++) {
          for (int i = -1; i <= 1; i++) {
            vec2 b = vec2(float(i), float(j));
            vec2 wrapped = mod(n + b, period);
            vec2 r = b - f + hash(wrapped);
            r += 0.3 * sin(uTime * 2.0 + hash(wrapped) * 6.2831);
            minDist = min(minDist, dot(r, r));
          }
        }
        return minDist;
      }

      float generatedCaustics(vec2 uv) {
        float p1 = 4.0;
        float c1 = voronoiSeamless(uv * p1 + vec2(uTime * 0.1, uTime * 0.05), p1);
        float p2 = 5.0;
        float c2 = voronoiSeamless(uv * p2 - vec2(uTime * 0.05, uTime * 0.08), p2);
        float p3 = 7.0;
        float c3 = voronoiSeamless(uv * p3 + vec2(-uTime * 0.07, uTime * 0.1), p3);
        return clamp(pow((c1 + c2 + c3) * 0.6, 2.5) * 3.5, 0.0, 1.0);
      }

      void main() {
        vec3 baseSand = texture2D(uSandTexture, vUv * uTextureScale).rgb * uSandColor;

        float depth = max(0.0, -vWorldPosition.y);
        float verticalAttenuation = exp(-depth / (uMaxDepth * 0.5));
        vec3 ambientWater = mix(uWaterDeep, uWaterShallow, verticalAttenuation);
        float cameraDist = length(cameraPosition - vWorldPosition);
        float proximity = smoothstep(uProximityNear, uProximityFar, cameraDist);
        proximity = mix(uMinWaterTint, 1.0, pow(proximity, 3.0));
        vec3 color = mix(baseSand, baseSand * ambientWater, proximity);

        vec2 causticUv = vWorldPosition.xz * uCausticScale +
          uTime * uCausticSpeed * vec2(1.0, 0.5);
        float c1 = generatedCaustics(causticUv);
        float c2 = generatedCaustics(mat2(0.795, -0.606, 0.606, 0.795) *
          (causticUv * 0.618 - uTime * uCausticSpeed * 0.3));
        vec3 causticTint = mix(vec3(1.0), uWaterShallow, 0.2);
        color += causticTint * c1 * c2 * 2.5 * uCausticIntensity * verticalAttenuation;

        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}function K({sceneColor:a=null,sceneDepth:t=null,displacement:e=null,patchLength:o=250,scale:r=1,fogColor:s=new l.Color(5421541),waterClarity:i=120}={}){return new l.ShaderMaterial({depthTest:!1,depthWrite:!1,uniforms:{uSceneColor:{value:a},uSceneDepth:{value:t},uDisplacement:{value:e},uPatchLength:{value:o},uScale:{value:r},uFogColor:{value:s.clone()},uWaterClarity:{value:i},uCameraPosition:{value:new l.Vector3},uCameraNear:{value:.1},uCameraFar:{value:1e3},uTime:{value:0},uDebugMode:{value:0}},vertexShader:`
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      precision highp float;

      uniform sampler2D uSceneColor;
      uniform sampler2D uSceneDepth;
      uniform sampler2D uDisplacement;
      uniform float uPatchLength;
      uniform float uScale;
      uniform vec3 uFogColor;
      uniform float uWaterClarity;
      uniform vec3 uCameraPosition;
      uniform float uCameraNear;
      uniform float uCameraFar;
      uniform float uTime;
      uniform int uDebugMode;
      varying vec2 vUv;

      #include <packing>

      void main() {
        vec4 inputColor = texture2D(uSceneColor, vUv);
        vec2 waveUv = fract(uCameraPosition.xz / uPatchLength);
        float waveHeight = texture2D(uDisplacement, waveUv).y * uScale;
        bool underwater = uCameraPosition.y <= waveHeight;
        if (!underwater) {
          gl_FragColor = inputColor;
          return;
        }

        float depth = texture2D(uSceneDepth, vUv).x;
        float viewZ = -perspectiveDepthToViewZ(depth, uCameraNear, uCameraFar);
        if (depth >= 0.9999) viewZ = 10000.0;
        float fog = clamp(1.0 - exp(-viewZ / uWaterClarity), 0.0, 1.0);
        vec3 color = mix(inputColor.rgb, uFogColor, fog);

        if (uDebugMode == 4) {
          gl_FragColor = vec4(vec3(fog), 1.0);
          return;
        }

        gl_FragColor = vec4(color, inputColor.a);
      }
    `})}function Q({sunDirection:a=new l.Vector3(-.14,.13,-.98).normalize(),sunColor:t=new l.Color(16768880)}={}){return new l.ShaderMaterial({side:l.BackSide,depthWrite:!1,uniforms:{uSunDirection:{value:a},uSunColor:{value:t.clone()}},vertexShader:`
      varying vec3 vDirection;

      void main() {
        vDirection = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 uSunDirection;
      uniform vec3 uSunColor;
      varying vec3 vDirection;

      ${V}

      void main() {
        vec3 color = stylizedOceanSky(normalize(vDirection), normalize(uSunDirection), uSunColor);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `})}function Y({oceanMaterial:a,seafloorMaterial:t,compositeMaterial:e,cascades:o,elapsed:r,camera:s,debugMode:i="final"}){const c=$.get(i)??0;a.uniforms.displacement0.value=o[0].displacement,a.uniforms.displacement1.value=o[1].displacement,a.uniforms.displacement2.value=o[2].displacement,a.uniforms.derivatives0.value=o[0].derivatives.texture,a.uniforms.derivatives1.value=o[1].derivatives.texture,a.uniforms.derivatives2.value=o[2].derivatives.texture,a.uniforms.uTime.value=r,a.uniforms.uDebugMode.value=c,t&&(t.uniforms.uTime.value=r),e&&(e.uniforms.uDisplacement.value=o[0].displacement,e.uniforms.uTime.value=r,e.uniforms.uDebugMode.value=c,s&&(e.uniforms.uCameraPosition.value.copy(s.position),e.uniforms.uCameraNear.value=s.near,e.uniforms.uCameraFar.value=s.far))}const n=await v("three"),ee=new n.Vector3(0,40,200),oe=new n.Vector3(0,0,0),ae=new n.Vector3(0,-18,76),te=new n.Vector3(0,-30,-8);function k(a,t,e){e==="above-surface"?(a.position.copy(ee),t?.target?.copy(oe)):(a.position.copy(ae),t?.target?.copy(te)),t?.update?.()}async function E(a,t=n.SRGBColorSpace){const e=await new n.TextureLoader().loadAsync(a);return e.wrapS=n.RepeatWrapping,e.wrapT=n.RepeatWrapping,e.colorSpace=t,e.anisotropy=8,e}const ie={assetBase:"/plugins/water/stylizedAboveBelowOcean/",initialTime:22,async setup({renderer:a,scene:t,camera:e,controls:o}){const r=X(a);if(!r.pass)throw new Error(`IFFT validation failed: impulse=${r.impulseError}, frequency=${r.frequencyError}`);const s=new n.Vector3(-.14,.13,-.98).normalize(),i=new n.WebGLRenderTarget(1,1,{minFilter:n.LinearFilter,magFilter:n.LinearFilter,depthBuffer:!0});i.depthTexture=new n.DepthTexture(1,1),i.depthTexture.type=n.UnsignedIntType;const c={resolution:256,patchLengths:[250,64,18],boundaryFactor:6,gravity:9.81,depth:500,choppiness:1.5,foamRecovery:.5,amplitude:.74,seed:78243,local:{scale:1,windSpeed:15,directionDegrees:63.435,fetchMeters:9e4,directionality:1,swell:.24,peakEnhancement:3.3,shortWaveFade:.018},swell:{scale:.62,windSpeed:4,directionDegrees:63.435,fetchMeters:28e4,directionality:1,swell:1,peakEnhancement:3.3,shortWaveFade:.012}},m=new G(a,c),[g,S]=await Promise.all([E(W.foam,n.NoColorSpace),E(W.sand)]),x=Q({sunDirection:s}),w=new n.Mesh(new n.SphereGeometry(9e3,48,24),x);t.add(w);const d=q({sandTexture:S,causticIntensity:.9}),p=new n.Mesh(new n.PlaneGeometry(4e3,4e3,1,1),d);p.rotation.x=-Math.PI/2,p.position.y=-50,t.add(p);const f=J(m.cascades,{patchLengths:c.patchLengths,sunDirection:s,foamTexture:g}),F=new n.PlaneGeometry(2e3,2e3,256,256);F.rotateX(-Math.PI/2);const y=new n.Mesh(F,f);y.frustumCulled=!1,t.add(y);const D=K({sceneColor:i.texture,sceneDepth:i.depthTexture,displacement:m.cascades[0].displacement,patchLength:c.patchLengths[0],scale:1,waterClarity:57}),z=new n.Scene,H=new n.Camera,M=new n.Mesh(new n.PlaneGeometry(2,2),D);z.add(M);let P="underwater",T=1;return k(e,o,"underwater"),{resize({bufferWidth:u,bufferHeight:h}){i.setSize(u,h)},setParameters(u){T=u.timeScale,P!==u.view&&k(e,o,u.view),P=u.view,f.uniforms.uFoamThreshold.value=u.foamThreshold,f.uniforms.uFoamScale.value=u.foamScale,f.uniforms.uFoamDistortion.value=u.foamDistortion,d.uniforms.uCausticIntensity.value=u.causticIntensity,d.uniforms.uCausticSpeed.value=u.causticSpeed,D.uniforms.uWaterClarity.value=u.waterClarity},update({elapsed:u,delta:h}){const N=Math.round(e.position.x/16)*16,B=Math.round(e.position.z/16)*16;y.position.x=N,y.position.z=B,p.position.x=e.position.x,p.position.z=e.position.z,w.position.x=e.position.x,w.position.z=e.position.z,e.position.y<-49&&(e.position.y=-49),e.position.y>200&&(e.position.y=200),o?.target&&(o.target.y<-49&&(o.target.y=-49),o.target.y>150&&(o.target.y=150));const _=u*T;m.update(_,Math.max(h*T,1/120)),Y({oceanMaterial:f,seafloorMaterial:d,compositeMaterial:D,cascades:m.cascades,elapsed:_,camera:e,debugMode:"final"})},render({renderer:u,camera:h}){u.setRenderTarget(i),u.clear(),u.render(t,h),u.setRenderTarget(null),u.render(z,H)},dispose(){i.depthTexture.dispose(),i.dispose(),w.geometry.dispose(),x.dispose(),p.geometry.dispose(),d.dispose(),F.dispose(),f.dispose(),M.geometry.dispose(),D.dispose(),g.dispose(),S.dispose()}}}},{withAsyncContext:re,defineComponent:ne}=await v("vue"),le=ne({__name:"index",props:{view:{},timeScale:{},foamThreshold:{},foamScale:{},foamDistortion:{},causticIntensity:{},causticSpeed:{},waterClarity:{}},emits:["progress"],async setup(a,{emit:t}){let e,o;const r=a,s=t;return[e,o]=re(()=>Z(ie,r,i=>s("progress",i))),await e,o(),(i,c)=>null}}),{defineComponent:ue}=await v("vue"),{unref:b,createVNode:C,createElementVNode:se,mergeProps:ce,Suspense:me,withCtx:O,openBlock:U,createBlock:ve,resolveComponent:pe,Fragment:fe,createElementBlock:de}=await v("vue"),{onUnmounted:he,reactive:ge,ref:L}=await v("vue"),{NoToneMapping:Se}=await v("three"),Me=ue({__name:"stylizedAboveBelowOcean",setup(a){const t=L(!1),e=L(0),o=ge({view:"underwater",timeScale:1,foamThreshold:.4,foamScale:7,foamDistortion:1.4,causticIntensity:.9,causticSpeed:.1,waterClarity:57}),r=new I({title:"风格化海洋参数"});return r.addBinding(o,"view",{label:"观察位置",options:{水下:"underwater",水上:"above-surface"}}),r.addBinding(o,"timeScale",{label:"波浪速度",min:0,max:2,step:.05}),r.addBinding(o,"foamThreshold",{label:"泡沫阈值",min:.1,max:.8,step:.01}),r.addBinding(o,"foamScale",{label:"泡沫纹理尺度",min:1,max:14,step:.1}),r.addBinding(o,"foamDistortion",{label:"泡沫扭曲",min:.2,max:3,step:.05}),r.addBinding(o,"causticIntensity",{label:"海底焦散",min:0,max:2,step:.05}),r.addBinding(o,"causticSpeed",{label:"焦散速度",min:0,max:.5,step:.01}),r.addBinding(o,"waterClarity",{label:"水下能见度",min:15,max:180,step:1}),he(()=>r.dispose()),(s,i)=>{const c=pe("TresCanvas");return U(),de(fe,null,[C(b(R),{"progress-value":e.value,finished:t.value,"show-progress":""},null,8,["progress-value","finished"]),C(c,{"clear-color":"#064289","tone-mapping":b(Se),"window-size":""},{default:O(()=>[i[2]||(i[2]=se("TresPerspectiveCamera",{position:[0,-18,76],fov:50,near:.1,far:1e4},null,-1)),C(b(A),{"make-default":"",target:[0,-30,-8],"min-distance":10,"max-distance":200}),(U(),ve(me,{onResolve:i[1]||(i[1]=m=>t.value=!0)},{default:O(()=>[C(le,ce(o,{onProgress:i[0]||(i[0]=m=>e.value=m)}),null,16)]),_:1}))]),_:1},8,["tone-mapping"])],64)}}});export{Me as default};
