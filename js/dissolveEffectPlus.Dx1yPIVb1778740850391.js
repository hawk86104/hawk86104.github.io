import{importShared as c}from"./3d-tiles-renderer.SzstPcaT1778740850391.js";import{useTres as R,useLoop as q,OrbitControls_default as J}from"./index.CVd4Rgkn1778740850391.js";import"./index.DnB9VIs_1778740850391.js";import"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.BzSoLY2X1778740850391.js";import"./skyBoxBmesh.vue_vue_type_script_setup_true_lang.Cm-09_9K1778740850391.js";import{_sfc_main as Q}from"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.Cw9nwlco1778740850391.js";import{Pane as X}from"./tweakpane.BQRZXf8M1778740850391.js";import{snoise_default as Y,_sfc_main as Z}from"./material.vue_vue_type_script_setup_true_lang.Cq4fZwrm1778740850391.js";import{useTexture as G}from"./index.vue_vue_type_script_setup_true_lang.w90loOHU1778740850391.js";import"./index.vue_vue_type_script_setup_true_lang.BgI0rC4V1778740850391.js";import{RenderPass as ee,EffectComposer as te}from"./RenderPass.bA8oM-NV1778740850391.js";import{UnrealBloomPass as oe}from"./UnrealBloomPass.B17ifwWI1778740850391.js";const{withAsyncContext:re,defineComponent:ae}=await c("vue"),{unref:ne,createElementVNode:ie,openBlock:se,createElementBlock:le}=await c("vue"),ue=["geometry"],ce=["blending"],{watch:pe}=await c("vue"),l=await c("three"),de=`
    uniform vec3 uColor;
    uniform float uEdge;
    uniform float uProgress;
    uniform sampler2D uTexture;

    varying float vNoise;
    varying float vAngle;

    void main(){
        if( vNoise < uProgress ) discard;
        if( vNoise > uProgress + uEdge) discard;

        vec2 coord = gl_PointCoord;
        coord = coord - 0.5; // get the coordinate from 0-1 ot -0.5 to 0.5
        coord = coord * mat2(cos(vAngle),sin(vAngle) , -sin(vAngle), cos(vAngle)); // apply the rotation transformaion
        coord = coord +  0.5; // reset the coordinate to 0-1  

        vec4 texture = texture2D(uTexture,coord);

        gl_FragColor = vec4(vec3(uColor.xyz * texture.xyz),1.0);
    }
`,me=ae({__name:"particlesPoints",props:{geo:{default:new l.BufferGeometry},uEdge:{default:6},uFreq:{default:.41},uAmp:{default:20},uProgress:{default:-2},uColor:{default:"#4d9bff"},uPointSize:{default:200},particleData:{default:{particleSpeedFactor:.02,velocityFactor:{x:2.5,y:2},waveAmplitude:0}}},async setup(y){let d,a;const e=y,r=e.geo.clone(),P=([d,a]=re(()=>G("./plugins/industry4/image/particle.png")),d=await d,a(),d);let s=r.attributes.position.count,m,f,i,p,_,w;function b(t){s=t.attributes.position.count,m=new Float32Array(s),f=new Float32Array(t.getAttribute("position").array),i=new Float32Array(t.getAttribute("position").array),p=new Float32Array(s*3),_=new Float32Array(s),w=new Float32Array(s);for(let o=0;o<s;o++){let n=o*3+0,u=o*3+1,g=o*3+2;m[o]=Math.random()*5.5+1.5,p[n]=Math.random()*.5+.5,p[u]=Math.random()*.5+.5,p[g]=Math.random()*.1,_[o]=.001,w[o]=Math.random()*Math.PI*2}t.setAttribute("aOffset",new l.BufferAttribute(m,1)),t.setAttribute("aCurrentPos",new l.BufferAttribute(i,3)),t.setAttribute("aVelocity",new l.BufferAttribute(p,3)),t.setAttribute("aDist",new l.BufferAttribute(_,1)),t.setAttribute("aAngle",new l.BufferAttribute(w,1))}b(r);const{renderer:h}=R(),v={uTexture:{value:P},uPixelDensity:{value:h.getPixelRatio()},uProgress:{value:e.uProgress},uEdge:{value:e.uEdge},uAmp:{value:e.uAmp},uFreq:{value:e.uFreq},uBaseSize:{value:e.uPointSize},uColor:{value:new l.Color(e.uColor)}},K=`
    ${Y}
    uniform float uPixelDensity;
    uniform float uBaseSize;
    uniform float uFreq;
    uniform float uAmp;
    uniform float uEdge;
    uniform float uProgress;

    varying float vNoise;
    varying float vAngle;

    attribute vec3 aCurrentPos;
    attribute float aDist;
    attribute float aAngle;

    void main() {
        vec3 pos = position;

        float noise = snoise(pos * uFreq) * uAmp;
        vNoise =noise;

        vAngle = aAngle;

        if( vNoise > uProgress-2.0 && vNoise < uProgress + uEdge+2.0){
            pos = aCurrentPos;
        }

        vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        float size = uBaseSize * uPixelDensity;
        size = size  / (aDist + 1.0);
        gl_PointSize = size / -viewPosition.z;
}
`;function O(t){const o=i[t*3+0],n=i[t*3+1];let u=Math.sin(n*2)*(.8+e.particleData.waveAmplitude),g=Math.sin(o*2)*(.6+e.particleData.waveAmplitude),A=Math.sin(n*5)*(.2+e.particleData.waveAmplitude),B=Math.sin(o*1)*(.9+e.particleData.waveAmplitude),E=Math.sin(n*8)*(.8+e.particleData.waveAmplitude),D=Math.sin(o*5)*(.6+e.particleData.waveAmplitude),x=Math.sin(n*3)*(.8+e.particleData.waveAmplitude),U=Math.sin(o*7)*(.6+e.particleData.waveAmplitude),L=u+A+E+x,W=g+B+D+U;return{xwave:L,ywave:W}}function j(t){let o=p[t*3+0],n=p[t*3+1],u=p[t*3+2];o*=e.particleData.velocityFactor.x,n*=e.particleData.velocityFactor.y;let{xwave:g,ywave:A}=O(t);return o+=g,n+=A,o*=Math.abs(e.particleData.particleSpeedFactor),n*=Math.abs(e.particleData.particleSpeedFactor),u*=Math.abs(e.particleData.particleSpeedFactor),{vx:o,vy:n,vz:u}}function H(){for(let t=0;t<s;t++){let o=t*3+0,n=t*3+1,u=t*3+2,{vx:g,vy:A,vz:B}=j(t);i[o]+=g,i[n]+=A,i[u]+=B;const E=new l.Vector3(f[o],f[n],f[u]),D=new l.Vector3(i[o],i[n],i[u]),x=E.distanceTo(D);_[t]=x,w[t]+=.01,x>m[t]&&(i[o]=f[o],i[n]=f[n],i[u]=f[u])}r.setAttribute("aOffset",new l.BufferAttribute(m,1)),r.setAttribute("aCurrentPos",new l.BufferAttribute(i,3)),r.setAttribute("aVelocity",new l.BufferAttribute(p,3)),r.setAttribute("aDist",new l.BufferAttribute(_,1)),r.setAttribute("aAngle",new l.BufferAttribute(w,1))}const{onBeforeRender:I}=q();return I(()=>{H()}),pe(()=>[e.uColor,e.uEdge,e.uFreq,e.uAmp,e.uProgress,e.uPointSize],([t,o,n,u,g,A])=>{v.uColor.value.setStyle(t),v.uEdge.value=o,v.uFreq.value=n,v.uAmp.value=u,v.uProgress.value=g,v.uBaseSize.value=A}),(t,o)=>(se(),le("TresPoints",{geometry:ne(r)},[ie("TresShaderMaterial",{transparent:"",blending:l.AdditiveBlending,uniforms:v,vertexShader:K,fragmentShader:de},null,8,ce)],8,ue))}}),{defineComponent:fe}=await c("vue"),{unref:S,mergeProps:F,createVNode:$,createElementVNode:ve,Suspense:ge,withCtx:_e,openBlock:M,createBlock:we,createElementBlock:Ae}=await c("vue"),Pe=["geometry"],ye=await c("three"),xe=fe({__name:"torusKnot",setup(y){const d=new ye.TorusKnotGeometry(3,1,64,8,2,3);return(a,e)=>(M(),Ae("TresGroup",null,[ve("TresMesh",{geometry:S(d)},[$(Z,F({color:"#636363",metalness:2,roughness:0},a.$attrs),null,16)],8,Pe),(M(),we(ge,null,{default:_e(()=>[$(me,F({geo:S(d)},a.$attrs,{uColor:a.$attrs.uEdgeColor}),null,16,["geo","uColor"])]),_:1}))]))}}),{defineComponent:Ce}=await c("vue"),{watchEffect:be}=await c("vue"),he=await c("three"),Be=Ce({__name:"bloomPass",setup(y){const{camera:d,renderer:a,scene:e,sizes:r}=R(),P={threshold:0,strength:.216,radius:.2};let s=null;const m=(i,p,_,w,b)=>{const h=new ee(i,p),v=new oe(new he.Vector2(w,b),P.strength,P.radius,P.threshold);s=new te(_),s.addPass(h),s.addPass(v)};be(()=>{r.width.value&&m(e.value,d.value,a,r.width.value,r.height.value)});const{onBeforeRender:f}=q();return f(()=>{s&&s.render()}),(i,p)=>null}}),{defineComponent:Ee}=await c("vue"),{createElementVNode:De,unref:z,createVNode:C,mergeProps:Se,Suspense:Fe,withCtx:T,openBlock:k,createBlock:N,resolveComponent:$e,normalizeProps:Me,guardReactiveProps:ze}=await c("vue"),{reactive:V}=await c("vue"),Te=await c("three"),We=Ee({__name:"dissolveEffectPlus",setup(y){const d={clearColor:"#201919",windowSize:!0,toneMapping:Te.ACESFilmicToneMapping,toneMappingExposure:.8,renderMode:"manual"},a=V({uEdgeColor:"#ff784d",uEdge:6,uFreq:.41,uAmp:20,uProgress:-4.9,uPointSize:576,particleData:{particleSpeedFactor:.02,velocityFactor:{x:2.5,y:2},waveAmplitude:0}}),e=V({torusKnotColor:"#7a8c87"}),r=new X({title:"参数",expanded:!0});return r.addBinding(e,"torusKnotColor",{label:"torusKnotColor"}),r.addBinding(a,"uEdgeColor",{label:"边缘颜色"}),r.addBinding(a,"uEdge",{label:"边缘宽度",min:0,max:9,step:.01}),r.addBinding(a,"uFreq",{label:"密度",min:.002,max:2,step:.002}),r.addBinding(a,"uAmp",{label:"幅度",min:3,max:22,step:.01}),r.addBinding(a,"uProgress",{label:"进度",min:-25,max:20,step:.1}),r.addBinding(a,"uPointSize",{label:"粒子大小",min:10,max:800,step:5}),r.addBinding(a.particleData,"particleSpeedFactor",{label:"粒子速度",min:1e-4,max:.1,step:1e-4}),r.addBinding(a.particleData,"velocityFactor",{picker:"inline",label:"粒子飘逸方向",expanded:!0,x:{min:-10,max:10,step:.01},y:{min:-10,max:10,step:.01}}),r.addBinding(a.particleData,"waveAmplitude",{label:"粒子扰动幅度",min:0,max:5,step:.01}),(P,s)=>{const m=$e("TresCanvas");return k(),N(m,Me(ze(d)),{default:T(()=>[s[0]||(s[0]=De("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1)),C(z(J),{enableDamping:""}),C(xe,Se(a,{color:e.torusKnotColor}),null,16,["color"]),(k(),N(Fe,null,{default:T(()=>[C(z(Q),{texture:"https://opensource.cdn.icegl.cn/images/skyBox/workshop_blur.jpg"},null,8,["texture"])]),_:1})),C(Be)]),_:1},16)}}});export{We as default};
