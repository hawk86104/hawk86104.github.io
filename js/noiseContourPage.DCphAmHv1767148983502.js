import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as P,no as k,_l as B,Kk as M}from"./index.DTe2qqjO1767148983502.js";import{ShaderPass as d,EffectComposer as F,RenderPass as U}from"./RenderPass.DewL5X8q1767148983502.js";const{defineComponent:b}=await r("vue"),{unref:p,createElementVNode:t,Fragment:A,openBlock:V,createElementBlock:G}=await r("vue"),L=["side","rotation-x"],$=["side"],{watchEffect:z,watch:j}=await r("vue"),{DoubleSide:h,Vector2:I,LinearFilter:g,RGBAFormat:W,WebGLRenderTarget:H}=await r("three"),x=`
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
`,K=`
    uniform sampler2D tDiffuse;
    uniform sampler2D tShadow;
    uniform vec2 iResolution;

    varying vec2 vUv;
    #define Sensitivity (vec2(0.3, 1.5) * iResolution.y / 400.0)
    float checkSame(vec4 center, vec4 samplef)
    {
        vec2 centerNormal = center.xy;
        float centerDepth = center.z;
        vec2 sampleNormal = samplef.xy;
        float sampleDepth = samplef.z;

        vec2 diffNormal = abs(centerNormal - sampleNormal) * Sensitivity.x;
        bool isSameNormal = (diffNormal.x + diffNormal.y) < 0.1;
        float diffDepth = abs(centerDepth - sampleDepth) * Sensitivity.y;
        bool isSameDepth = diffDepth < 0.1;

        return (isSameNormal && isSameDepth) ? 1.0 : 0.0;
    }

    void main( )
    {
        vec4 sample0 = texture2D(tDiffuse, vUv);
        vec4 sample1 = texture2D(tDiffuse, vUv + (vec2(1.0, 1.0) / iResolution.xy));
        vec4 sample2 = texture2D(tDiffuse, vUv + (vec2(-1.0, -1.0) / iResolution.xy));
        vec4 sample3 = texture2D(tDiffuse, vUv + (vec2(-1.0, 1.0) / iResolution.xy));
        vec4 sample4 = texture2D(tDiffuse, vUv + (vec2(1.0, -1.0) / iResolution.xy));

        float edge = checkSame(sample1, sample2) * checkSame(sample3, sample4);

        // gl_FragColor = vec4(edge, sample0.w, 1.0, 1.0);
        float shadow = texture2D(tShadow, vUv).x;
        gl_FragColor = vec4(edge, shadow, 1.0, 1.0);

    }
`,X=`
uniform sampler2D tDiffuse;
uniform sampler2D tNoise;
uniform float iTime;

varying vec2 vUv;

#define EdgeColor vec4(0.2, 0.2, 0.15, 1.0)
#define BackgroundColor vec4(1,0.95,0.85,1)
#define NoiseAmount 0.01
#define ErrorPeriod 30.0
#define ErrorRange 0.003

// Reference: https://www.shadertoy.com/view/MsSGD1
float triangle(float x)
{
    return abs(1.0 - mod(abs(x), 2.0)) * 2.0 - 1.0;
}

float rand(float x)
{
    return fract(sin(x) * 43758.5453);
}

void main()
{
    float time = floor(iTime * 16.0) / 16.0;
    vec2 uv = vUv;
    uv += vec2(triangle(uv.y * rand(time) * 1.0) * rand(time * 1.9) * 0.005,
            triangle(uv.x * rand(time * 3.4) * 1.0) * rand(time * 2.1) * 0.005);

    float noise = (texture2D(tNoise, uv * 0.5).r - 0.5) * NoiseAmount;
    vec2 uvs[3];
    uvs[0] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 0.0) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 0.0) + noise);
    uvs[1] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 1.047) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 3.142) + noise);
    uvs[2] = uv + vec2(ErrorRange * sin(ErrorPeriod * uv.y + 2.094) + noise, ErrorRange * sin(ErrorPeriod * uv.x + 1.571) + noise);

    float edge = texture2D(tDiffuse, uvs[0]).r * texture2D(tDiffuse, uvs[1]).r * texture2D(tDiffuse, uvs[2]).r;
    float diffuse = texture2D(tDiffuse, uv).g;

    float w = fwidth(diffuse) * 2.0;
    vec4 mCol = mix(BackgroundColor * 0.5, BackgroundColor, mix(0.0, 1.0, smoothstep(-w, w, diffuse - 0.3)));
    gl_FragColor = mix(EdgeColor, mCol, edge);
}
`,q=b({__name:"noiseContour",setup(E){const{camera:n,renderer:i,scene:e,sizes:l}=P(),{state:S}=k("./plugins/shadertoyToThreejs/image/noise.png"),{onRender:C}=B(),R={minFilter:g,magFilter:g,format:W,stencilBuffer:!1},v=new H(1,1,R),N=new I(window.innerWidth,window.innerHeight),T={uniforms:{tDiffuse:{type:"t",value:null},tShadow:{type:"t",value:null},iResolution:{type:"v2",value:N}},vertexShader:x,fragmentShader:K};let o=null;const m=new d(T);let c={uniforms:{tDiffuse:{type:"t",value:null},iTime:{type:"f",value:0},tNoise:{type:"t",value:null}},vertexShader:x,fragmentShader:X};j(()=>S.value,s=>{s&&(c.uniforms.tNoise.value=s)});const f=new d(c);return f.renderToScreen=!0,z(()=>{l.width.value&&i&&e.value&&n.value&&(o&&o.dispose(),o=new F(i),o.addPass(new U(e.value,n.value)),o.addPass(m),o.addPass(f))}),C(({elapsed:s})=>{i.render(e.value,n.value,v),m.uniforms.tShadow.value=v.texture,f.uniforms.iTime.value=s,o&&o.render()}),(s,a)=>(V(),G(A,null,[t("TresMesh",{ref:"noiseContourMeshRef2",side:p(h),position:[400,100,0],"rotation-x":2*Math.PI/360*90,"cast-shadow":""},[...a[0]||(a[0]=[t("TresBoxGeometry",{args:[400,400,400]},null,-1),t("TresMeshPhongMaterial",{color:"#ffffff",shininess:0},null,-1)])],8,L),t("TresMesh",{ref:"noiseContourMeshRef1",side:p(h),position:[0,150,0],"cast-shadow":""},[...a[1]||(a[1]=[t("TresSphereGeometry",{args:[50,32,32]},null,-1),t("TresMeshPhongMaterial",{color:"#ffffff",shininess:0},null,-1)])],8,$)],64))}}),{defineComponent:J}=await r("vue"),{createElementVNode:u,unref:O,createVNode:w,Suspense:Q,withCtx:_,openBlock:D,createBlock:y,resolveComponent:Y,mergeProps:Z}=await r("vue"),ee={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},ne=J({__name:"noiseContourPage",setup(E){const n={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0};return(i,e)=>{const l=Y("TresCanvas");return D(),y(l,Z(n,{"window-size":""}),{default:_(()=>[u("TresPerspectiveCamera",ee,null,512),w(O(M)),e[0]||(e[0]=u("TresAmbientLight",{color:"#ffffff"},null,-1)),e[1]||(e[1]=u("TresDirectionalLight",{position:[400,400,400],intensity:1,color:"red"},null,-1)),(D(),y(Q,null,{default:_(()=>[w(q)]),_:1}))]),_:1},16)}}});export{ne as default};
