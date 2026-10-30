import{importShared as A}from"./3d-tiles-renderer.duPTVMza1793343379643.js";import{OrbitControls_default as E}from"./index.rdQY9uqN1793343379643.js";import{Pane as I}from"./tweakpane.BQRZXf8M1793343379643.js";import{loading as W}from"./domCanvas.BDPEFism1793343379643.js";import"./default.vue_vue_type_script_setup_true_lang.DKtO5bRJ1793343379643.js";import"./three-mesh-ui.module.BsnLZ3Bc1793343379643.js";import"./domPanel.vue_vue_type_style_index_0_lang.O00QnzYw1793343379643.js";import{useTresExperience as j}from"./useTresExperience.BWQDlIpq1793343379643.js";import{RGBELoader as q}from"./Resource.CIr7ZgIO1793343379643.js";import{EffectComposer as G,RenderPass as H}from"./RenderPass.CucxAytW1793343379643.js";import{OutputPass as L}from"./OutputPass.DXdxvV7Q1793343379643.js";import{UnrealBloomPass as $}from"./UnrealBloomPass.BVgziBpf1793343379643.js";const{Triangle:Y,Vector2:C,Vector3:K}=await A("three"),p=new Y,w=new K,D=new C,U=new C,k=new C;class J{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,i=this.positionAttribute,a=this.weightAttribute,o=e?e.count/3:i.count/3,n=new Float32Array(o);for(let s=0;s<o;s++){let d=1,u=3*s,m=3*s+1,v=3*s+2;e&&(u=e.getX(u),m=e.getX(m),v=e.getX(v)),a&&(d=a.getX(u)+a.getX(m)+a.getX(v)),p.a.fromBufferAttribute(i,u),p.b.fromBufferAttribute(i,m),p.c.fromBufferAttribute(i,v),d*=p.getArea(),n[s]=d}const r=new Float32Array(o);let t=0;for(let s=0;s<o;s++)t+=n[s],r[s]=t;return this.distribution=r,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,i,a,o){const n=this._sampleFaceIndex();return this._sampleFace(n,e,i,a,o)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const i=this.distribution;let a=0,o=i.length-1,n=-1;for(;a<=o;){const r=Math.ceil((a+o)/2);if(r===0||i[r-1]<=e&&i[r]>e){n=r;break}else e<i[r]?o=r-1:a=r+1}return n}_sampleFace(e,i,a,o,n){let r=this.randomFunction(),t=this.randomFunction();r+t>1&&(r=1-r,t=1-t);const s=this.indexAttribute;let d=e*3,u=e*3+1,m=e*3+2;return s&&(d=s.getX(d),u=s.getX(u),m=s.getX(m)),p.a.fromBufferAttribute(this.positionAttribute,d),p.b.fromBufferAttribute(this.positionAttribute,u),p.c.fromBufferAttribute(this.positionAttribute,m),i.set(0,0,0).addScaledVector(p.a,r).addScaledVector(p.b,t).addScaledVector(p.c,1-(r+t)),a!==void 0&&(this.normalAttribute!==void 0?(p.a.fromBufferAttribute(this.normalAttribute,d),p.b.fromBufferAttribute(this.normalAttribute,u),p.c.fromBufferAttribute(this.normalAttribute,m),a.set(0,0,0).addScaledVector(p.a,r).addScaledVector(p.b,t).addScaledVector(p.c,1-(r+t)).normalize()):p.getNormal(a)),o!==void 0&&this.colorAttribute!==void 0&&(p.a.fromBufferAttribute(this.colorAttribute,d),p.b.fromBufferAttribute(this.colorAttribute,u),p.c.fromBufferAttribute(this.colorAttribute,m),w.set(0,0,0).addScaledVector(p.a,r).addScaledVector(p.b,t).addScaledVector(p.c,1-(r+t)),o.r=w.x,o.g=w.y,o.b=w.z),n!==void 0&&this.uvAttribute!==void 0&&(D.fromBufferAttribute(this.uvAttribute,d),U.fromBufferAttribute(this.uvAttribute,u),k.fromBufferAttribute(this.uvAttribute,m),n.set(0,0).addScaledVector(D,r).addScaledVector(U,t).addScaledVector(k,1-(r+t))),this}}const f=await A("three"),O=new Map([["final",0],["puddleMask",1],["rippleNormals",2],["rainProgress",3],["splashes",4]]),B={road:{map:"/plugins/digitalCity/wetPuddleRain/road/aerial_asphalt_01_diff_2k.jpg",normalMap:"/plugins/digitalCity/wetPuddleRain/road/aerial_asphalt_01_nor_gl_2k.jpg",roughnessMap:"/plugins/digitalCity/wetPuddleRain/road/aerial_asphalt_01_rough_2k.jpg",aoMap:"/plugins/digitalCity/wetPuddleRain/road/aerial_asphalt_01_ao_2k.jpg"},splashFlipbook:"/plugins/digitalCity/wetPuddleRain/Splash.png"},Q=`
#define MAX_FBM_ITERATIONS 30
vec4 _permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 _taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
struct gln_tFBMOpts{float seed;float persistance;float lacunarity;float scale;float redistribution;int octaves;bool terbulance;bool ridge;};
float gln_map(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}
float gln_normalize(float v){return gln_map(v,-1.0,1.0,0.0,1.0);}
vec3 gln_rand3(vec3 p){return mod(((p*34.0)+1.0)*p,289.0);}
float gln_simplex(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod(i,289.0);vec3 p=gln_rand3(gln_rand3(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}
float gln_sfbm(vec2 v,gln_tFBMOpts opts){v+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec2 p=v*frequency*opts.scale;float noiseVal=gln_simplex(p);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}
`,Z=`
uniform float uTime;
uniform float uRainFactor;
uniform int uDebugMode;
varying vec3 vPuddlePosition;
varying vec2 vPuddleUv;
varying vec3 vPuddleWorldPosition;

${Q}

#define MAX_RADIUS 1
#define HASHSCALE1 .1031
#define HASHSCALE3 vec3(.1031, .1030, .0973)

float mapLinear(float x, float a1, float a2, float b1, float b2) {
  return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}

float hash12(vec2 p) {
  vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
  p3 += dot(p3, p3.yzx + 19.19);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
  p3 += dot(p3, p3.yzx+19.19);
  return fract((p3.xx+p3.yz)*p3.zy);
}

vec3 getRipples(vec2 uv) {
  vec2 p0 = floor(uv);

  float time = uTime * 3.0;

  vec2 circles = vec2(0.);
  for (int j = -MAX_RADIUS; j <= MAX_RADIUS; ++j) {
      for (int i = -MAX_RADIUS; i <= MAX_RADIUS; ++i) {
        vec2 pi = p0 + vec2(i, j);
        vec2 hsh = pi;
        vec2 p = pi + hash22(hsh);

        float t = fract(0.3*time + hash12(hsh));
        vec2 v = p - uv;
        float d = length(v) - (float(MAX_RADIUS) + 1.)*t;

        float h = 1e-3;
        float d1 = d - h;
        float d2 = d + h;
        float p1 = sin(31.*d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0., -0.3, d1);
        float p2 = sin(31.*d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0., -0.3, d2);
        circles += 0.5 * normalize(v) * ((p2 - p1) / (2. * h) * (1. - t) * (1. - t));
      }
  }
  circles /= float((MAX_RADIUS*2+1)*(MAX_RADIUS*2+1));
  float intensity = mix(0.01, 0.15, smoothstep(0.1, 0.6, abs(fract(0.05*time + 0.5)*2.-1.)));
  vec3 n = vec3(circles, sqrt(max(0.0, 1. - dot(circles, circles))));
  return n;
}

float getPuddle(vec2 uv) {
  gln_tFBMOpts puddleNoiseOpts = gln_tFBMOpts(1.0, 0.5, 2.0, 0.5, 1.0, 3, false, false);
  float puddleNoise = gln_sfbm((uv + vec2(3.0, 0.0)) * 0.2, puddleNoiseOpts);
  puddleNoise = gln_normalize(puddleNoise);
  puddleNoise = smoothstep(0.0, 0.7, puddleNoise);
  return puddleNoise;
}

float sdCircle(vec2 p, float radius) {
  return length(p) - radius;
}

vec3 perturbNormal(vec3 inputNormal, vec3 noiseNormal, float strength) {
  vec3 noiseNormalOrthogonal = noiseNormal - (dot(noiseNormal, inputNormal) * inputNormal);
  vec3 noiseNormalProjectedBump = mat3(viewMatrix) * noiseNormalOrthogonal;
  return normalize(inputNormal - (noiseNormalProjectedBump * strength));
}
`;async function ee({textureLoader:l=new f.TextureLoader,paths:e=B.road,repeat:i=[1,1],anisotropy:a=1}={}){const[o,n,r,t]=await Promise.all([l.loadAsync(e.map),l.loadAsync(e.normalMap),l.loadAsync(e.roughnessMap),l.loadAsync(e.aoMap)]);o.colorSpace=f.SRGBColorSpace;for(const s of[o,n,r,t])s.wrapS=s.wrapT=f.RepeatWrapping,s.repeat.set(i[0],i[1]),s.anisotropy=a;return{map:o,normalMap:n,roughnessMap:r,aoMap:t}}function te({maps:l,rainProgress:e}={}){const i={uTime:{value:0},uRainFactor:e??{value:0},uDebugMode:{value:0}},a=new f.MeshPhysicalMaterial({...l,transparent:!0,roughness:1,metalness:0});return a.onBeforeCompile=o=>{Object.assign(o.uniforms,i),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPuddlePosition;
varying vec2 vPuddleUv;
varying vec3 vPuddleWorldPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vPuddlePosition = position;
        vPuddleUv = uv;
        vPuddleWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
`+Z).replace("#include <map_fragment>",`#include <map_fragment>
        float roughnessProgress = smoothstep(0.0, 0.75, uRainFactor);
        roughnessProgress = clamp(roughnessProgress, 0.0, 1.0);
        float normalProgress = smoothstep(0.75, 1.0, uRainFactor);
        normalProgress = clamp(normalProgress, 0.0, 1.0);
        float puddleNoise = getPuddle(vPuddlePosition.xy * 15.0);
        float puddleNormalMask = smoothstep(0.0, 1.0, puddleNoise) * normalProgress;
        vec3 rippleNormals = getRipples(vPuddlePosition.xy * 40.0);
        float circle = 1. - sdCircle(vPuddleWorldPosition.xz, 0.2);
        circle = smoothstep(0.7, 0.85, circle);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float prevRoughness = roughnessFactor;
        roughnessFactor = 1.0 - puddleNormalMask;
        roughnessFactor = clamp(roughnessFactor, 0.0, 0.1);
        roughnessFactor = mix(prevRoughness, roughnessFactor, roughnessProgress);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec3 puddleNormal = perturbNormal(normal, rippleNormals, 0.25 * uRainFactor);
        normal = normalize(mix(normal, puddleNormal, puddleNormalMask));`).replace("#include <opaque_fragment>",`if (uDebugMode == 1) {
          gl_FragColor = vec4(vec3(puddleNormalMask), 1.0);
          return;
        } else if (uDebugMode == 2) {
          gl_FragColor = vec4(rippleNormals * 0.5 + 0.5, 1.0);
          return;
        } else if (uDebugMode == 3) {
          gl_FragColor = vec4(vec3(uRainFactor), 1.0);
          return;
        }
        diffuseColor.a *= circle;
        #include <opaque_fragment>`)},a.customProgramCacheKey=()=>"precipitation-wet-puddle-rain-v2",a.userData.rainUniforms=i,a}function oe(l=1){let e=l>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function P(l,e){return e*(.5-l())}function S(l,e,i){return e+(i-e)*l()}function re({count:l=1e3,rainProgress:e,seed:i=9}={}){const a=oe(i),o=new f.InstancedMesh(new f.PlaneGeometry(.2,.3),ae({rainProgress:e}),l);o.renderOrder=2;const n=new f.Object3D,r=new Float32Array(l);for(let t=0;t<l;t++)n.position.set(P(a,5),S(a,-.1,5),P(a,5)),r[t]=n.position.y,n.scale.setScalar(S(a,.1,.5)),n.updateMatrix(),o.setMatrixAt(t,n.matrix);return o.instanceMatrix.needsUpdate=!0,{mesh:o,update({camera:t,delta:s}){for(let d=0;d<l;d++)o.getMatrixAt(d,n.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale),n.position.y-=s*2.5,n.position.y<=0&&(n.position.set(P(a,1),S(a,-.1,2),P(a,1)),r[d]=n.position.y,n.scale.setScalar(S(a,.1,.5))),n.rotation.y=Math.atan2(t.position.x-n.position.x,t.position.z-n.position.z),n.updateMatrix(),o.setMatrixAt(d,n.matrix);o.instanceMatrix.needsUpdate=!0},setDebugMode(t){o.material.uniforms.uDebugMode.value=O.get(t)??0},dispose(){o.geometry.dispose(),o.material.dispose()}}}function ae({rainProgress:l}={}){return new f.ShaderMaterial({uniforms:{uRainProgress:l??{value:0},uDebugMode:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
      varying vec3 vPosition;
      varying vec2 vUv;
      void main() {
        vPosition = position;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uRainProgress;
      uniform int uDebugMode;
      varying vec3 vPosition;
      varying vec2 vUv;
      float sdUnevenCapsule( vec2 p, float r1, float r2, float h ) {
        p.x = abs(p.x);
        float b = (r1-r2)/h;
        float a = sqrt(1.0-b*b);
        float k = dot(p,vec2(-b,a));
        if( k < 0.0 ) return length(p) - r1;
        if( k > a*h ) return length(p-vec2(0.0,h)) - r2;
        return dot(p, vec2(a,b) ) - r1;
      }
      void main() {
        vec2 coord = vUv - 0.5;
        coord *= 10.0;
        float dropletDistance = sdUnevenCapsule(coord, 0.05, 0.0, 2.0);
        dropletDistance = 1.0 - smoothstep(0.0, 0.05, dropletDistance);
        float rainProgress = smoothstep(0.0, 0.5, uRainProgress);
        rainProgress = clamp(rainProgress, 0.0, 1.0);
        vec3 color = uDebugMode == 4 ? vec3(0.5, 0.75, 1.0) : vec3(1.0);
        gl_FragColor = vec4(color, dropletDistance * 0.1 * rainProgress);
      }
    `})}async function ie({targetGroup:l,texture:e,count:i=1e3,rainProgress:a}={}){const o=new f.PlaneGeometry(.04000000000000001,.020000000000000004);o.setAttribute("aSplashProgress",new f.InstancedBufferAttribute(new Float32Array(i),1));const n=ne({texture:e,rainProgress:a}),r=new f.InstancedMesh(o,n,i);r.frustumCulled=!1,r.renderOrder=2;const t={mesh:r,samplers:[],y:[],initialY:[],rebuild(){t.samplers=[],l.updateMatrixWorld(!0),l.traverse(s=>{if(!s.isMesh||!s.geometry?.getAttribute("normal"))return;const d=s.geometry.getAttribute("position"),u=s.geometry.getAttribute("normal"),m=new Float32Array(d.count),v=new f.Vector3;for(let b=0;b<d.count;b++){v.fromBufferAttribute(u,b);let y=v.dot(new f.Vector3(0,1,0));y=y>=0?1:0,m[b]=y}s.geometry.setAttribute("skyWeight",new f.InstancedBufferAttribute(m,1));const c=new J(s);c.setWeightAttribute("skyWeight"),c.build(),t.samplers.push({sampler:c,mesh:s})})},update({camera:s,delta:d}){if(t.samplers.length===0)return;const u=t._dummy,m=r.geometry.getAttribute("aSplashProgress"),v=Math.ceil(i/t.samplers.length);let c=0;for(const{sampler:b,mesh:y}of t.samplers)for(let x=0;x<v&&c<i;x++){r.getMatrixAt(c,u.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),t.y[c]===void 0&&(t.y[c]=0,t.initialY[c]=0),t.y[c]-=d*2.5,t.y[c]<-.2&&(b.sample(u.position),u.position.applyMatrix4(y.matrixWorld),u.position.y-=.04,t.y[c]=f.MathUtils.randFloat(-.1,2),t.initialY[c]=t.y[c],u.scale.x=f.MathUtils.randFloat(.5,1));const M=f.MathUtils.mapLinear(t.y[c],t.initialY[c],-.2,1,0);m.setX(c,M),u.rotation.y=Math.atan2(s.position.x-u.position.x,s.position.z-u.position.z),u.updateMatrix(),r.setMatrixAt(c,u.matrix),c++}r.instanceMatrix.needsUpdate=!0,m.needsUpdate=!0},setDebugMode(s){r.material.uniforms.uDebugMode.value=O.get(s)??0},dispose(){o.dispose(),n.dispose()},_dummy:new f.Object3D};return t.rebuild(),t}function ne({texture:l,rainProgress:e}={}){return new f.ShaderMaterial({uniforms:{uFlipBook:{value:l},uRainProgress:e??{value:0},uDebugMode:{value:0}},transparent:!0,blending:f.AdditiveBlending,depthWrite:!1,vertexShader:`
      attribute float aSplashProgress;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying float vSplashProgress;
      void main() {
        vPosition = position;
        vUv = uv;
        vSplashProgress = aSplashProgress;
        vec3 p = position;
        p.y += 0.05;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uFlipBook;
      uniform float uRainProgress;
      uniform int uDebugMode;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying float vSplashProgress;
      float mapLinear(float value, float inMin, float inMax, float outMin, float outMax) {
        return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
      }
      float fmod(float x, float y) {
        return x - y * trunc(x / y);
      }
      vec2 getFlipbookUv(
        vec2 uv,
        float width,
        float height,
        float tile,
        vec2 invert
      ) {
        tile = fmod(tile, width * height);
        vec2 tileCount = vec2(1.0) / vec2(width, height);
        float tileY = abs(invert.y * height - (floor(tile * tileCount.x) + invert.y * 1.0));
        float tileX = abs(invert.x * width - ((tile - width * floor(tile * tileCount.x)) + invert.x * 1.0));
        return (uv + vec2(tileX, tileY)) * tileCount;
      }
      void main() {
        float progress = mapLinear(vSplashProgress, 0.0, 0.3, 0.0, 1.0);
        progress = 1.0 - clamp(progress, 0.0, 1.0);
        float width = 4.0;
        float height = 5.0;
        float tiling = floor(progress * width * height);
        vec2 uv = getFlipbookUv(vUv, width, height, tiling, vec2(0.0, 1.0));
        vec4 texel = texture2D(uFlipBook, uv);
        float rainProgress = smoothstep(0.0, 0.5, uRainProgress);
        rainProgress = clamp(rainProgress, 0.0, 1.0);
        vec3 color = uDebugMode == 4 ? vec3(0.8, 0.9, 1.0) : texel.rgb;
        gl_FragColor = vec4(color, texel.a * 0.1 * rainProgress);
      }
    `})}const g=await A("three");async function se(l){const e=new g.TextureLoader,i=async(n,r=!1)=>{const t=await e.loadAsync(l(`trash/${n}`));return r&&(t.colorSpace=g.SRGBColorSpace),t.wrapS=t.wrapT=g.RepeatWrapping,t.repeat.set(2,2),t},a={map:await i("shmpulh_4K_Albedo.jpg",!0),alphaMap:await i("shmpulh_4K_Opacity.jpg"),normalMap:await i("shmpulh_4K_Normal.jpg"),roughnessMap:await i("shmpulh_4K_Roughness.jpg"),aoMap:await i("shmpulh_4K_AO.jpg")},o=new g.MeshStandardMaterial({...a,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1,transparent:!0,blending:g.AdditiveBlending});return o.userData.maps=a,o}const le={assetBase:"/plugins/digitalCity/wetPuddleRain/",initialTime:4.85,async setup({renderer:l,scene:e,camera:i,resolveAsset:a}){const o=await new q().loadAsync(a("cyberpunk.hdr"));o.mapping=g.EquirectangularReflectionMapping,e.environment=o,e.environmentIntensity=1.75,e.background=new g.Color(267);const n=l.domElement.style.filter;l.domElement.style.filter="contrast(1.2) saturate(1.1) brightness(1.1)";const r={value:0},t=await ee({paths:B.road,anisotropy:l.capabilities.getMaxAnisotropy()}),s=te({maps:t,rainProgress:r}),d=new g.Group;d.rotation.x=-Math.PI/2,e.add(d);const u=new g.Mesh(new g.PlaneGeometry(1,1,1,1),s);u.geometry.setAttribute("uv1",u.geometry.attributes.uv),d.add(u);const m=await se(a),v=new g.Mesh(new g.CircleGeometry(.5,96),m);v.rotation.z=g.MathUtils.degToRad(30),v.position.z=.002,v.renderOrder=1,d.add(v),d.updateMatrixWorld(!0);const c=re({count:1e3,rainProgress:r});e.add(c.mesh);const b=await new g.TextureLoader().loadAsync(B.splashFlipbook);b.colorSpace=g.SRGBColorSpace;const y=await ie({targetGroup:d,texture:b,count:1e3,rainProgress:r});e.add(y.mesh);const x=new G(l);x.addPass(new H(e,i));const M=new $(new g.Vector2(1,1),.05,0,1);x.addPass(M),x.addPass(new L);let N=1;return{setParameters(h){r.value=h.rainAmount,N=h.rainSpeed,M.strength=h.bloomStrength,l.domElement.style.filter=`contrast(${h.contrast}) saturate(${h.saturation})`},update({delta:h}){const _=h*N;s.userData.rainUniforms.uTime.value+=_,c.update({camera:i,delta:_}),y.update({camera:i,delta:_})},resize({width:h,height:_,dpr:X}){x.setPixelRatio(X),x.setSize(h,_)},render(){x.render()},dispose(){c.dispose(),y.dispose(),x.dispose(),l.domElement.style.filter=n,u.geometry.dispose(),s.dispose(),v.geometry.dispose(),m.dispose(),b.dispose();for(const h of Object.values(t))h.dispose();for(const h of Object.values(m.userData.maps))h.dispose();o.dispose()}}}},{withAsyncContext:ue,defineComponent:de}=await A("vue"),ce=de({__name:"index",props:{rainAmount:{},rainSpeed:{},bloomStrength:{},contrast:{},saturation:{}},emits:["progress"],async setup(l,{emit:e}){let i,a;const o=l,n=e;return[i,a]=ue(()=>j(le,o,r=>n("progress",r))),await i,a(),(r,t)=>null}}),{defineComponent:pe}=await A("vue"),{unref:R,createVNode:F,createElementVNode:me,mergeProps:fe,Suspense:ge,withCtx:z,openBlock:T,createBlock:ve,resolveComponent:he,Fragment:be,createElementBlock:xe}=await A("vue"),{onUnmounted:ye,reactive:Ae,ref:V}=await A("vue"),{AgXToneMapping:_e}=await A("three"),ze=pe({__name:"wetPuddleRain",setup(l){const e=V(!1),i=V(0),a=Ae({rainAmount:1,rainSpeed:1,bloomStrength:.05,contrast:1.2,saturation:1.1}),o=new I({title:"雨天地面参数"});return o.addBinding(a,"rainAmount",{label:"降雨量",min:0,max:1,step:.01}),o.addBinding(a,"rainSpeed",{label:"雨滴速度",min:0,max:2.5,step:.05}),o.addBinding(a,"bloomStrength",{label:"反光辉光",min:0,max:.4,step:.01}),o.addBinding(a,"contrast",{label:"湿地对比度",min:.8,max:1.8,step:.05}),o.addBinding(a,"saturation",{label:"霓虹饱和度",min:.5,max:1.8,step:.05}),ye(()=>o.dispose()),(n,r)=>{const t=he("TresCanvas");return T(),xe(be,null,[F(R(W),{"progress-value":i.value,finished:e.value,"show-progress":""},null,8,["progress-value","finished"]),F(t,{"clear-color":"#00010b",antialias:!1,"tone-mapping":R(_e),"window-size":""},{default:z(()=>[r[2]||(r[2]=me("TresPerspectiveCamera",{position:[.714,.339,.321],fov:50,near:.01,far:60},null,-1)),F(R(E),{"make-default":"","min-distance":.25,"max-distance":4,"max-polar-angle":Math.PI*.49},null,8,["max-polar-angle"]),(T(),ve(ge,{onResolve:r[1]||(r[1]=s=>e.value=!0)},{default:z(()=>[F(ce,fe(a,{onProgress:r[0]||(r[0]=s=>i.value=s)}),null,16)]),_:1}))]),_:1},8,["tone-mapping"])],64)}}});export{ze as default};
