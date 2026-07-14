import{importShared as R,GLTFLoader as Je}from"./3d-tiles-renderer.DLbEVYVf1784021167877.js";import{_t as en,bo as nn,lo as on,Zt as tn}from"./tres-post-processing.DzhYrzCK1784021167877.js";import{useTres as rn,useLoop as an,OrbitControls_default as ln,_export_sfc as sn}from"./index.BjVPg-2F1784021167877.js";import{KernelSize as un,BlendFunction as cn}from"./index.aLiSHk7z1784021167877.js";import{gsapWithCSS as m}from"./index.C1NmcAq51784021167877.js";import{DRACOLoader as dn}from"./DRACOLoader.SUK-Xlvw1784021167877.js";var fn=`varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_worldNormal;
varying vec3 v_viewDir;

#include <skinning_pars_vertex>

void main() {
    v_uv = uv;
    vec3 transformed = position;
    vec3 objectNormal = normal;

    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>

    vec4 worldPos = modelMatrix * vec4(transformed, 1.0);
    v_worldPos = worldPos.xyz;
    v_worldNormal = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz);
    v_viewDir = normalize(cameraPosition - worldPos.xyz);

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}`,mn=`uniform sampler2D u_sceneTexture;
uniform sampler2D u_reflectionTexture;
uniform sampler2D u_normalMap;
uniform sampler2D u_ormMap;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_baseColor;
uniform float u_ior;
uniform float u_refractionStrength;
uniform float u_reflectionStrength;
uniform float u_refractionRoughness;
uniform float u_reflectionRoughness;
uniform float u_normalStrength;
uniform float u_saturation;
uniform float u_fresnelPower;
uniform float u_specularIntensity;
uniform vec3 u_volumeColor;
uniform float u_volumeDensity;
uniform float u_dispersion;
uniform float u_sssIntensity;
uniform vec3 u_sssColor;
uniform vec3 u_edgeTint;
uniform float u_edgeTintPower;
uniform float u_aoIntensity;
uniform vec3 u_lightDir;

varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_worldNormal;
varying vec3 v_viewDir;

vec3 perturbNormal(vec3 N, vec3 worldPos, vec2 uv) {
    vec3 dp1 = dFdx(worldPos);
    vec3 dp2 = dFdy(worldPos);
    vec2 duv1 = dFdx(uv);
    vec2 duv2 = dFdy(uv);
    vec3 dp2perp = cross(dp2, N);
    vec3 dp1perp = cross(N, dp1);
    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
    float invmax = inversesqrt(max(dot(T, T), dot(B, B)));
    mat3 TBN = mat3(T * invmax, B * invmax, N);
    vec3 mapN = texture2D(u_normalMap, uv).rgb * 2.0 - 1.0;
    mapN.xy *= u_normalStrength;
    return normalize(TBN * mapN);
}

float fresnel(float cosTheta, float power, float f0) {
    return f0 + (1.0 - f0) * pow(1.0 - cosTheta, power);
}

float ggxSpecular(vec3 light, vec3 viewDir, vec3 normal, float roughness) {
    vec3 lightVec = normalize(-light);
    vec3 halfVec = normalize(viewDir + lightVec);
    float NdotH = max(dot(normal, halfVec), 0.0);
    float a2 = max(roughness * roughness, 0.001);
    float d = NdotH * NdotH * (a2 - 1.0) + 1.0;
    return a2 / (3.14159 * d * d);
}

vec3 sat(vec3 rgb, float intensity) {
    vec3 L = vec3(0.2126, 0.7152, 0.0722);
    vec3 grayscale = vec3(dot(rgb, L));
    return mix(grayscale, rgb, intensity);
}

void main() {
    vec3 N = normalize(v_worldNormal);
    vec3 V = normalize(v_viewDir);
    vec3 eyeVec = -V;
    vec2 screenUV = gl_FragCoord.xy / u_resolution;
    vec3 orm = texture2D(u_ormMap, v_uv).rgb;
    float ao = orm.r;
    float texRoughness = orm.b;
    float refrRoughness = texRoughness * u_refractionRoughness;
    float reflRoughness = texRoughness * u_reflectionRoughness;
    vec3 perturbedN = perturbNormal(N, v_worldPos, v_uv);
    float cosTheta = max(dot(V, perturbedN), 0.0);
    float geoThickness = clamp(1.0 - cosTheta, 0.0, 1.0);
    float thickness = mix(geoThickness, 1.0 - ao, 0.3);
    float iorR = 1.0 / (u_ior - u_dispersion);
    float iorG = 1.0 / u_ior;
    float iorB = 1.0 / (u_ior + u_dispersion);
    float maxMip = log2(max(u_resolution.x, u_resolution.y)) * 0.5;
    float refrMip = refrRoughness * maxMip;
    float reflMip = reflRoughness * maxMip;
    vec3 refractG = refract(eyeVec, perturbedN, iorG);
    vec3 reflectDir = reflect(eyeVec, perturbedN);
    vec3 refrColor;

    if (u_dispersion > 0.0) {
        vec3 refractR = refract(eyeVec, perturbedN, iorR);
        vec3 refractB = refract(eyeVec, perturbedN, iorB);
        if (dot(refractR, refractR) < 0.001) refractR = reflectDir;
        if (dot(refractG, refractG) < 0.001) refractG = reflectDir;
        if (dot(refractB, refractB) < 0.001) refractB = reflectDir;
        float dispSpread = u_dispersion * (1.0 - cosTheta);
        refrColor.r = textureLod(u_sceneTexture, clamp(screenUV + refractR.xy * (u_refractionStrength - dispSpread), 0.001, 0.999), refrMip).r;
        refrColor.g = textureLod(u_sceneTexture, clamp(screenUV + refractG.xy * u_refractionStrength, 0.001, 0.999), refrMip).g;
        refrColor.b = textureLod(u_sceneTexture, clamp(screenUV + refractB.xy * (u_refractionStrength + dispSpread), 0.001, 0.999), refrMip).b;
    } else {
        if (dot(refractG, refractG) < 0.001) refractG = reflectDir;
        vec2 refrUV = clamp(screenUV + refractG.xy * u_refractionStrength, 0.001, 0.999);
        refrColor = textureLod(u_sceneTexture, refrUV, refrMip).rgb;
    }

    vec3 baseAbsorption = exp(log(max(u_baseColor, 0.001)) * thickness);
    refrColor *= baseAbsorption;

    if (u_volumeDensity > 0.0) {
        float volumeTransmittance = exp(-u_volumeDensity * thickness);
        refrColor = mix(u_volumeColor, refrColor, volumeTransmittance);
    }

    refrColor = sat(refrColor, u_saturation);
    refrColor *= 1.3;

    vec2 reflectedUV = clamp(screenUV + reflectDir.xy * u_reflectionStrength, 0.001, 0.999);
    vec3 reflColor = textureLod(u_reflectionTexture, reflectedUV, reflMip).rgb;
    float f0 = pow((1.0 - u_ior) / (1.0 + u_ior), 2.0);
    float fresnelFactor = fresnel(cosTheta, u_fresnelPower, f0);
    vec3 color = mix(refrColor, reflColor, fresnelFactor);
    float spec = ggxSpecular(u_lightDir, V, perturbedN, reflRoughness);
    color += spec * fresnelFactor * u_specularIntensity;

    if (u_sssIntensity > 0.0) {
        vec3 L = normalize(-u_lightDir);
        vec3 sssLightDir = normalize(L + N * 0.3);
        float sssDot = pow(clamp(dot(V, -sssLightDir), 0.0, 1.0), 3.0);
        float sssWeight = 1.0 - fresnelFactor;
        color += u_sssColor * sssDot * u_sssIntensity * sssWeight * thickness;
    }

    float edgeFactor = pow(1.0 - cosTheta, u_edgeTintPower);
    vec3 edgeTintResult = mix(vec3(1.0), u_edgeTint, edgeFactor);
    color *= edgeTintResult;
    float aoFinal = mix(1.0, ao, u_aoIntensity);
    color = mix(color * aoFinal, color * mix(1.0, aoFinal, 0.3), fresnelFactor);
    gl_FragColor = vec4(color, 1.0);
}`,vn=`#include <common>
#include <shadowmap_pars_vertex>

varying vec2 v_uv;
varying vec3 v_worldNormal;
varying vec3 v_worldPos;

#include <skinning_pars_vertex>

void main() {
    v_uv = uv;
    vec3 transformed = position - normal;
    vec3 objectNormal = normal;

    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>

    vec3 transformedNormal = normalMatrix * objectNormal;
    vec4 worldPos = modelMatrix * vec4(transformed, 1.0);
    v_worldPos = worldPos.xyz;
    v_worldNormal = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    vec4 worldPosition = worldPos;

    #include <shadowmap_vertex>
}`,pn=`#include <common>
#include <packing>

bool receiveShadow = true;

#include <shadowmap_pars_fragment>

uniform vec3 u_color;
uniform vec3 u_lightDir;
uniform sampler2D u_ormMap;
uniform float u_aoIntensity;

varying vec2 v_uv;
varying vec3 v_worldNormal;
varying vec3 v_worldPos;

void main() {
    vec3 N = normalize(v_worldNormal);
    vec3 L = normalize(u_lightDir);
    float NdotL = max(dot(N, L), 0.0);
    float diffuse = mix(0.3, 1.0, NdotL);
    float ao = mix(1.0, texture2D(u_ormMap, v_uv).g, u_aoIntensity);
    float shadow = 1.0;

    #ifdef USE_SHADOWMAP
        #if NUM_DIR_LIGHT_SHADOWS > 0
            DirectionalLightShadow dirLight = directionalLightShadows[0];
            shadow = getShadow(directionalShadowMap[0], dirLight.shadowMapSize, dirLight.shadowIntensity, dirLight.shadowBias, dirLight.shadowRadius, vDirectionalShadowCoord[0]);
        #endif
    #endif

    gl_FragColor = vec4(u_color * diffuse * ao * mix(0.7, 1.0, shadow), 1.0);
}`,gn=`#include <common>
#include <shadowmap_pars_vertex>

varying vec2 v_worldPos;

void main() {
    vec3 transformed = position;
    vec3 transformedNormal = normalMatrix * normal;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    v_worldPos = worldPosition.xz;

    #include <shadowmap_vertex>
}`,hn=`#include <common>
#include <packing>

bool receiveShadow = true;

#include <shadowmap_pars_fragment>

uniform vec3 u_majorLineColor;
uniform vec3 u_minorLineColor;
uniform vec3 u_bgColor;
uniform float u_majorLineWidth;
uniform float u_minorLineWidth;
uniform float u_gridScale;
uniform float u_majorGridDiv;
uniform vec3 u_dotColor;
uniform float u_dotRadius;
uniform vec3 u_shadowColor;
uniform float u_shadowIntensity;
uniform float u_time;
uniform sampler2D u_blueNoise;
uniform vec2 u_scrollOffset;
uniform float u_fadeStart;
uniform float u_fadeEnd;

varying vec2 v_worldPos;

float pristineGrid(vec2 uv, float lineWidth) {
    vec4 uvDDXY = vec4(dFdx(uv), dFdy(uv));
    vec2 uvDeriv = vec2(length(uvDDXY.xz), length(uvDDXY.yw));
    bool invertLine = lineWidth > 0.5;
    float targetWidth = invertLine ? 1.0 - lineWidth : lineWidth;
    vec2 drawWidth = clamp(vec2(targetWidth), uvDeriv, vec2(0.5));
    vec2 lineAA = uvDeriv * 1.5;
    vec2 gridUV = abs(fract(uv) * 2.0 - 1.0);
    gridUV = invertLine ? gridUV : 1.0 - gridUV;
    vec2 grid2 = smoothstep(drawWidth + lineAA, drawWidth - lineAA, gridUV);
    grid2 *= clamp(vec2(targetWidth) / drawWidth, 0.0, 1.0);
    grid2 = mix(grid2, vec2(targetWidth), clamp(uvDeriv * 2.0 - 1.0, 0.0, 1.0));
    grid2 = invertLine ? 1.0 - grid2 : grid2;
    return mix(grid2.x, 1.0, grid2.y);
}

float gridDots(vec2 uv, float radius) {
    vec2 uvDeriv = fwidth(uv);
    vec2 nearest = fract(uv + 0.5) - 0.5;
    float dist = length(nearest);
    float drawRadius = max(radius, length(uvDeriv) * 0.5);
    float aa = length(uvDeriv);
    float dotMask = smoothstep(drawRadius + aa, drawRadius, dist);
    dotMask *= clamp(radius / drawRadius, 0.0, 1.0);
    return dotMask;
}

float getDitheredShadowMask() {
    float shadow = 1.0;

    #ifdef USE_SHADOWMAP
        #if NUM_DIR_LIGHT_SHADOWS > 0
            DirectionalLightShadow dirLight = directionalLightShadows[0];
            vec3 noise = texture2D(u_blueNoise, gl_FragCoord.xy / 128.0 + u_time).rgb;
            shadow = getShadow(
                directionalShadowMap[0],
                dirLight.shadowMapSize,
                dirLight.shadowIntensity,
                dirLight.shadowBias + noise.z * 0.001,
                dirLight.shadowRadius,
                vDirectionalShadowCoord[0] + vec4((noise.xy - 0.5) / dirLight.shadowMapSize, 0.0, 0.0)
            );
        #endif
    #endif

    return shadow;
}

void main() {
    float majorDiv = max(2.0, floor(u_majorGridDiv + 0.5));
    vec2 gridCoord = (v_worldPos + u_scrollOffset) * u_gridScale;
    float minorGrid = pristineGrid(gridCoord, u_minorLineWidth);
    float majorGrid = pristineGrid(gridCoord / majorDiv, u_majorLineWidth);
    float majorDots = gridDots(gridCoord / majorDiv, u_dotRadius);
    vec3 color = u_bgColor;
    color = mix(color, u_minorLineColor, minorGrid);
    color = mix(color, u_majorLineColor, majorGrid);
    color = mix(color, u_dotColor, majorDots);
    float shadowMask = getDitheredShadowMask();
    float adjustedShadowMask = mix(1.0, shadowMask, u_shadowIntensity);
    color = mix(u_shadowColor * color, color, adjustedShadowMask);
    float dist = length(v_worldPos);
    float alpha = 1.0 - smoothstep(u_fadeStart, u_fadeEnd, dist);
    gl_FragColor = vec4(color, alpha);
}`;const{defineComponent:_n}=await R("vue"),{openBlock:wn,createElementBlock:xn}=await R("vue"),yn=["object"],o=await R("three"),{markRaw:Ce,onMounted:bn,onUnmounted:Mn,shallowRef:Sn,watch:Dn}=await R("vue"),re="plugins/visualArts/biineBee/",Le=1,Cn=_n({__name:"BiineBeeScene",emits:["progress","ready"],setup(ze,{expose:W,emit:b}){const V=b,G=`${re}models/bee.glb`,g=`${re}textures/bee_normal.webp`,j=`${re}textures/bee_orm.webp`,$=`${re}textures/bluenoise128.png`,H=[0,0,2.5],B=[40,70,140],z={Mandibula:{boneName:"l_mandible_jnt018",offset:new o.Vector3(0,0,.5)},Thorax:{boneName:"body_jnt3",offset:new o.Vector3(-.6,1.3,0)},Abdomen:{boneName:"abdomen_jnt0435",offset:new o.Vector3(0,2.8,0)}},v=Sn(Ce(new o.Group));v.value.name="BiineBeeScene";const{renderer:M,scene:ie,camera:Y,sizes:U}=rn(),{onBeforeRender:h}=an(),S=new o.Vector2,X=new o.Color,Z=new o.Vector3,q=new o.Vector3,ne=new o.Vector3,y=[],E=new Map;let F=null,D=null,C=null,w=null,x=null,t=null,l=null,u=null,s=null,a=null,d=null,L=null,K=null,le=[],N=null,k=null,O=1,se=0,ue=0,he=0,ce=1,oe=null,_e=!1;function we(){return M}function de(){const e=we();if(e.getDrawingBufferSize(S),S.x>0&&S.y>0)return{width:Math.floor(S.x),height:Math.floor(S.y)};const n=e.getPixelRatio?.()||window.devicePixelRatio||1;return{width:Math.max(1,Math.floor((U.width.value||window.innerWidth||1)*n)),height:Math.max(1,Math.floor((U.height.value||window.innerHeight||1)*n))}}function xe(e,n){const i=new o.WebGLRenderTarget(e,n,{type:o.HalfFloatType,minFilter:o.LinearMipmapLinearFilter,magFilter:o.LinearFilter,format:o.RGBAFormat,depthBuffer:!0,stencilBuffer:!1,samples:0});return i.texture.generateMipmaps=!0,i}function Ue(){if(!w||!x||!t)return;const{width:e,height:n}=de();w.setSize(e,n),x.setSize(e,n),t.uniforms.u_resolution.value.set(e,n)}function ye(e){return e.wrapS=o.RepeatWrapping,e.wrapT=o.RepeatWrapping,e.colorSpace=o.NoColorSpace,e.needsUpdate=!0,e}function Ee(e){return e.wrapS=o.RepeatWrapping,e.wrapT=o.RepeatWrapping,e.minFilter=o.NearestFilter,e.magFilter=o.NearestFilter,e.colorSpace=o.NoColorSpace,e.needsUpdate=!0,e}function fe(e,n){return new Promise((i,r)=>{e.load(n,i,void 0,r)})}function Fe(e,n){return new Promise((i,r)=>{e.load(n,i,void 0,r)})}function Oe(){if(!F||!D||!w||!x)return;const{width:e,height:n}=de();t=new o.ShaderMaterial({uniforms:{u_sceneTexture:{value:w.texture},u_reflectionTexture:{value:x.texture},u_normalMap:{value:F},u_ormMap:{value:D},u_resolution:{value:new o.Vector2(e,n)},u_time:{value:0},u_baseColor:{value:new o.Color("#ffffff")},u_ior:{value:1.5},u_refractionStrength:{value:.025},u_reflectionStrength:{value:.1},u_refractionRoughness:{value:.3},u_reflectionRoughness:{value:0},u_normalStrength:{value:2},u_saturation:{value:1.2},u_fresnelPower:{value:1},u_specularIntensity:{value:1},u_volumeColor:{value:new o.Color("#d0e8ff")},u_volumeDensity:{value:1},u_dispersion:{value:.006},u_sssIntensity:{value:0},u_sssColor:{value:new o.Color("#aaddff")},u_edgeTint:{value:new o.Color("#ff9e9e")},u_edgeTintPower:{value:4},u_aoIntensity:{value:.75},u_lightDir:{value:new o.Vector3(0,1,0)}},vertexShader:fn,fragmentShader:mn,transparent:!0,extensions:{derivatives:!0}});const i=o.UniformsUtils.clone(o.UniformsLib.lights);Object.assign(i,{u_color:{value:new o.Color("#cc4444")},u_lightDir:{value:new o.Vector3(0,1,0)},u_ormMap:{value:D},u_aoIntensity:{value:.5}}),l=new o.ShaderMaterial({uniforms:i,vertexShader:vn,fragmentShader:pn,lights:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})}function Ie(){if(!C)return;const e=o.UniformsUtils.clone(o.UniformsLib.lights);Object.assign(e,{u_majorLineColor:{value:new o.Color("#000000")},u_minorLineColor:{value:new o.Color("#000000")},u_bgColor:{value:new o.Color("#ffffff")},u_majorLineWidth:{value:.01},u_minorLineWidth:{value:.02},u_gridScale:{value:.8},u_majorGridDiv:{value:4},u_dotColor:{value:new o.Color("#000000")},u_dotRadius:{value:.025},u_shadowColor:{value:new o.Color("#8a9baa")},u_shadowIntensity:{value:.8},u_time:{value:0},u_blueNoise:{value:C},u_scrollOffset:{value:new o.Vector2(0,0)},u_fadeStart:{value:0},u_fadeEnd:{value:50}}),u=new o.ShaderMaterial({name:"BiineBeeGround",uniforms:e,vertexShader:gn,fragmentShader:hn,transparent:!0,lights:!0}),s=new o.Mesh(new o.PlaneGeometry(400,400),u),s.rotation.x=-Math.PI*.5,s.receiveShadow=!0,v.value.add(s)}function We(){a=new o.DirectionalLight("#000000",0),a.castShadow=!0,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,a.shadow.camera.near=.1,a.shadow.camera.far=80,a.shadow.camera.left=-20,a.shadow.camera.right=20,a.shadow.camera.top=20,a.shadow.camera.bottom=-20,a.shadow.bias=6e-4,a.shadow.normalBias=.02,a.shadow.radius=3,v.value.add(a),v.value.add(a.target),be()}function be(){if(!a)return;const e=45*o.MathUtils.DEG2RAD,n=60*o.MathUtils.DEG2RAD,i=10,r=a.target.position;a.position.set(r.x+i*Math.cos(n)*Math.sin(e),r.y+i*Math.sin(n),r.z+i*Math.cos(n)*Math.cos(e))}function Ge(e){E.set(e.name,e),E.set(e.name.replace(/\./g,""),e)}function je(e){!t||!l||(d=Ce(e.scene),d.traverse(n=>{const i=n;if(i.isBone){Ge(i);return}const r=n;if(!r.isSkinnedMesh)return;r.geometry?.attributes?.uv&&!r.geometry.attributes.uv2&&r.geometry.setAttribute("uv2",r.geometry.attributes.uv),r.material=t,r.renderOrder=1,r.frustumCulled=!1;const c=new o.SkinnedMesh(r.geometry,l);c.name=`${r.name||"bee"}_inner`,c.skeleton=r.skeleton,c.bindMatrix.copy(r.bindMatrix),c.bindMatrixInverse.copy(r.bindMatrixInverse),c.frustumCulled=!1,c.castShadow=!0,c.receiveShadow=!0,r.parent?.add(c),y.push(r),L=r}),v.value.add(d),K=new o.AnimationMixer(d),le=e.animations,Se(0))}function $e(e){return e<.5?2*e*e:1-(-2*e+2)**2/2}function Me(e){ue=se,he=H[e]||0,u&&m.to(u.uniforms.u_fadeEnd,{value:B[e]||40,duration:1,ease:"power2.inOut"})}function Se(e){if(Me(e),ce=Le+.5,!K||!le[e])return;const n=K.clipAction(le[e]);N!==n&&(N&&(k=N,k.enabled=!0),n.reset().play(),n.setEffectiveWeight(k?0:1),N=n,O=0)}function He(e){if(O<1&&k&&N){O=Math.min(O+e/Le,1);const n=$e(O);N.setEffectiveWeight(n),k.setEffectiveWeight(1-n),O>=1&&(k.stop(),k=null)}K?.update(e)}function Ye(e){if(!u)return;u.uniforms.u_time.value+=e;const n=N?.getEffectiveWeight()??1;se=ue+(he-ue)*n,u.uniforms.u_scrollOffset.value.y+=e*se}function Xe(e){a&&(L&&ce>0&&(ce-=e,L.geometry.computeBoundingBox(),L.geometry.boundingBox?.getCenter(q),q.applyMatrix4(L.matrixWorld),a.target.position.copy(q),a.target.updateMatrixWorld(),be()),Z.copy(a.position).normalize(),t?.uniforms.u_lightDir.value.copy(Z),l?.uniforms.u_lightDir.value.copy(Z))}function Ze(){const e=we(),n=ie.value,i=Y.value;if(!n||!i||!w||!x||y.length===0)return;const r=e.getRenderTarget(),c=e.getClearColor(X),_=e.getClearAlpha(),I=i.layers.mask,te=y.map(P=>P.visible);y.forEach(P=>{P.visible=!1}),e.setClearColor(0,0);try{e.setRenderTarget(w),e.clear(),e.render(n,i),i.layers.enable(1),e.setRenderTarget(x),e.clear(),e.render(n,i)}finally{i.layers.mask=I,e.setRenderTarget(r),e.setClearColor(c,_),y.forEach((P,Qe)=>{P.visible=te[Qe]})}}async function qe(){const e=new o.LoadingManager;e.onProgress=(r,c,_)=>{V("progress",Math.min(99,Math.round(c/Math.max(_,1)*100)))},e.onLoad=()=>V("progress",100);const n=new o.TextureLoader(e),i=new Je(e);oe=new dn,oe.setDecoderPath("./draco/gltf/"),i.setDRACOLoader(oe);try{const[r,c,_,I]=await Promise.all([fe(n,g).then(ye),fe(n,j).then(ye),fe(n,$).then(Ee),Fe(i,G)]);if(_e){r.dispose(),c.dispose(),_.dispose(),De(I.scene);return}F=r,D=c,C=_;const{width:te,height:P}=de();w=xe(te,P),x=xe(te,P),Oe(),Ie(),We(),je(I),V("ready")}catch(r){console.warn("[biineBee] Failed to load local bee assets.",r),V("ready")}}function Ke(e){const n=z[e];if(!n)return null;const i=E.get(n.boneName);return i?(i.getWorldPosition(ne),ne.clone().add(n.offset)):null}function De(e){if(!e)return;const n=new Set,i=new Set;e.traverse(r=>{const c=r;c.geometry&&n.add(c.geometry);const _=c.material;Array.isArray(_)?_.forEach(I=>i.add(I)):_&&i.add(_)}),n.forEach(r=>r.dispose()),i.forEach(r=>r.dispose())}return h(({delta:e})=>{if(!t)return;const n=Math.min(e,.05);He(n),Ye(n),Xe(n),t.uniforms.u_time.value+=n,Ze()}),Dn(()=>[U.width.value,U.height.value],()=>Ue()),bn(()=>{qe()}),Mn(()=>{_e=!0,K?.stopAllAction(),m.killTweensOf(u?.uniforms.u_fadeEnd),oe?.dispose(),w?.dispose(),x?.dispose(),F?.dispose(),D?.dispose(),C?.dispose(),De(d),s?.geometry.dispose(),u?.dispose(),t?.dispose(),l?.dispose(),v.value.clear()}),W({playAnimation:Se,setAnimationIndex:Me,getLabelAnchor:Ke}),(e,n)=>(wn(),xn("primitive",{object:v.value},null,8,yn))}}),{defineComponent:Ln}=await R("vue"),{createElementVNode:f,normalizeStyle:Pe,openBlock:Q,createElementBlock:J,createCommentVNode:Pn,unref:T,mergeProps:Te,createVNode:A,withCtx:Re,resolveComponent:Tn,renderList:Ne,Fragment:ke,toDisplayString:ae,normalizeClass:Ae,withModifiers:me,createTextVNode:Ve}=await R("vue"),Rn={class:"biine-bee-page"},Nn={key:0,class:"biine-loader"},kn={class:"biine-loader-inner"},An={class:"biine-loader-track"},Vn=["position"],Bn={class:"biine-picker"},zn=["aria-pressed","onClick"],Un={class:"biine-labels"},En=["aria-label","aria-expanded","onPointerenter","onPointerup"],Fn=["onPointerenter","onPointerup"],p=await R("three"),{computed:On,nextTick:Be,onMounted:In,onUnmounted:Wn,reactive:ve,ref:ee,shallowRef:pe,watch:ge}=await R("vue"),Gn=Ln({__name:"biineBee",setup(ze){const W=[{position:new p.Vector3(-60,20,60),target:new p.Vector3(0,2,0),maxPolarAngle:Math.PI*.45,maxDistance:95},{position:new p.Vector3(-60,26,60),target:new p.Vector3(0,8,0),maxPolarAngle:Math.PI*.45,maxDistance:100},{position:new p.Vector3(-60,60,60),target:new p.Vector3(0,42,0),maxPolarAngle:Math.PI,maxDistance:120}],b=W[0],V=b.position.toArray(),G=b.target.clone(),g=pe(),j=pe(),$=pe(null),H=ee(!0),B=ee(0),z=ee(0),v=ee(null),M=ee(null),ie=["Idle","Hover","Fly"];let Y=0;const U=ve({clearColor:"#ffffff",shadows:!0,alpha:!1,antialias:!1,stencil:!1,depth:!0,powerPreference:"high-performance",shadowMapType:p.PCFSoftShadowMap,toneMapping:p.NoToneMapping,toneMappingExposure:1,outputColorSpace:p.SRGBColorSpace,windowSize:!0}),h=ve({target:G,enableDamping:!0,dampingFactor:.1,enablePan:!1,enableZoom:!0,minDistance:20,maxDistance:b.maxDistance,minPolarAngle:0,maxPolarAngle:b.maxPolarAngle}),S=ve([{name:"Mandibula",function:"Mastication & manipulation",fact:"Wax processing",align:"right",visible:!1,anchor:new p.Vector3(-6.7,2.7,5.4),style:{left:"24%",top:"50%",opacity:0}},{name:"Thorax",function:"Indirect flight muscles",fact:"Wing articulation",align:"left",visible:!1,anchor:new p.Vector3(.8,4.1,0),style:{left:"68%",top:"39%",opacity:0}},{name:"Abdomen",function:"Ventriculus + crop",fact:"Tracheal system",align:"right",visible:!1,anchor:new p.Vector3(8,1.7,-4.5),style:{left:"38%",top:"63%",opacity:0}}]),X=On(()=>z.value===0&&!H.value);ge(g,t=>{t?.lookAt(G)}),ge(j,()=>{Be(E)},{flush:"post"}),ge(X,t=>{t||C()});function Z(t){B.value=Math.max(B.value,t)}function q(){B.value=100,window.clearTimeout(Y),Y=window.setTimeout(()=>{H.value=!1},260)}function ne(t){z.value=t,$.value?.playAnimation(t),C(),F(t)}function y(){const t=j.value;return t?.instance?.value||t?.instance||null}function E(){const t=y();t&&(t.target.copy(G),t.maxDistance=b.maxDistance,t.maxPolarAngle=b.maxPolarAngle,t.update())}function F(t){const l=W[t]||W[0],u=y(),s=u?.target||h.target;u&&(m.killTweensOf(u),m.killTweensOf(u.target),u.maxDistance=Math.max(u.maxDistance||0,l.maxDistance)),m.killTweensOf(h),m.killTweensOf(s),m.to(s,{x:l.target.x,y:l.target.y,z:l.target.z,duration:1,ease:"power2.inOut",onUpdate:()=>{h.target.copy(s),u?.update()}}),g.value&&(m.killTweensOf(g.value.position),m.to(g.value.position,{x:l.position.x,y:l.position.y,z:l.position.z,duration:1,ease:"power2.inOut",onUpdate:()=>{g.value?.lookAt(s),u?.update()}})),m.to(u||h,{maxPolarAngle:l.maxPolarAngle,maxDistance:l.maxDistance,duration:1,ease:"power2.inOut",onUpdate:()=>{h.maxPolarAngle=u?.maxPolarAngle??l.maxPolarAngle,h.maxDistance=u?.maxDistance??l.maxDistance,u?.update()}})}function D(t){X.value&&(v.value=v.value===t?null:t)}function C(){v.value=null,M.value=null}function w(){const t=g.value;if(!t)return;const l=window.innerWidth,u=window.innerHeight;S.forEach(s=>{if(!X.value){s.style.opacity=0,s.visible=!1;return}const d=($.value?.getLabelAnchor(s.name)||s.anchor).clone().project(t),L=d.z>-1&&d.z<1;s.style.left=`${(d.x*.5+.5)*l}px`,s.style.top=`${(-d.y*.5+.5)*u}px`,s.style.opacity=L?1:0,s.visible=L})}function x(){w()}return In(()=>{Be(E)}),Wn(()=>{window.clearTimeout(Y),m.killTweensOf(h.target),m.killTweensOf(h);const t=y();t&&(m.killTweensOf(t),m.killTweensOf(t.target)),g.value&&m.killTweensOf(g.value.position)}),(t,l)=>{const u=Tn("TresCanvas");return Q(),J("div",Rn,[H.value?(Q(),J("div",Nn,[f("div",kn,[l[2]||(l[2]=f("p",null,"loading",-1)),f("div",An,[f("span",{style:Pe({width:`${B.value}%`})},null,4)]),l[3]||(l[3]=f("p",null,"[01] Biine",-1))])])):Pn("",!0),A(u,Te(U,{onLoop:x}),{default:Re(()=>[f("TresPerspectiveCamera",{ref_key:"cameraRef",ref:g,position:T(V),fov:45,near:.1,far:1e3},null,8,Vn),A(T(ln),Te({ref_key:"controlsRef",ref:j},h),null,16),A(Cn,{ref_key:"sceneRef",ref:$,onProgress:Z,onReady:q},null,512),A(T(en),{multisampling:0,"disable-normal-pass":""},{default:Re(()=>[A(T(nn)),A(T(on),{offset:0,rotation:0,"focus-area":.87,feather:.25,"kernel-size":T(un).LARGE},null,8,["kernel-size"]),A(T(tn),{"blend-function":T(cn).MULTIPLY,offset:.5,darkness:.5},null,8,["blend-function"])]),_:1})]),_:1},16),f("div",Bn,[(Q(),J(ke,null,Ne(ie,(s,a)=>f("button",{key:s,class:Ae({active:z.value===a}),"aria-pressed":z.value===a,onClick:d=>ne(a)},ae(s),11,zn)),64))]),f("div",Un,[(Q(!0),J(ke,null,Ne(S,(s,a)=>(Q(),J("div",{key:s.name,class:Ae(["biine-label",[s.align,{active:v.value===a,hovered:M.value===a,visible:s.visible}]]),style:Pe(s.style)},[f("button",{class:"biine-label-marker","aria-label":`${s.name} details`,"aria-expanded":v.value===a,onPointerenter:d=>M.value=a,onPointerleave:l[0]||(l[0]=d=>M.value=null),onPointerup:me(d=>D(a),["stop"])},null,40,En),f("button",{class:"biine-label-name",type:"button",onPointerenter:d=>M.value=a,onPointerleave:l[1]||(l[1]=d=>M.value=null),onPointerup:me(d=>D(a),["stop"])},ae(s.name),41,Fn),f("div",{class:"biine-label-panel",onPointerup:me(C,["stop"])},[f("p",null,[l[4]||(l[4]=f("span",null,null,-1)),Ve(ae(s.function),1)]),f("p",null,[l[5]||(l[5]=f("span",null,null,-1)),Ve(ae(s.fact),1)])],32)],6))),128))])])}}}),qn=sn(Gn,[["__scopeId","data-v-824b035a"]]);export{qn as default};
