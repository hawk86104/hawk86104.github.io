import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Pane as B}from"./tweakpane.BQRZXf8M1767148983502.js";import{_l as M,oz as W,Kk as E}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as k}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.DYMkkQ781767148983502.js";import{useTexture$1 as D}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";const{withAsyncContext:z,defineComponent:A}=await r("vue"),{unref:m,createElementVNode:S,createVNode:O,openBlock:R,createElementBlock:V}=await r("vue"),$=["rotateX"],L=["position","aIndex","aNormal"],c=await r("three"),{useAttrs:H,watch:G}=await r("vue"),F=`
varying vec2 vMapUv;
attribute float aIndex;
attribute vec3 aNormal;
uniform float uTime;
uniform float uScale;
uniform float uHeight;
uniform sampler2D uPerlinTexture;
varying float vIndex;
varying float vSelfIndex;
varying float vCircleNum;
float getStrength(float aIndex, float uTime, vec3 aNormal) {
    float selfIndex = mod(aIndex, 720.0);
    float circleNum = (aIndex - selfIndex) / 720.0;
    vec3 pDir = normalize(aNormal);
    float waveWidth = 90.0;
    float totalLength = 720.0;
    float modUtime = mod(uTime * 50.0, 720.0);
    float dw = waveWidth * 0.5;
    float smoothStart = smoothstep(modUtime, modUtime + dw, selfIndex);
    float smoothEnd = 1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex);
    float strength = min(smoothStart, smoothEnd);
    float isOver = step(720.0, modUtime + waveWidth);
    float over = (modUtime + waveWidth - 720.0);
    float isOverStep1 = (1.0 - step(dw, over)) * isOver;
    float isOverStep2 = step(dw, over);
    float overStep1Left = min(smoothstep(modUtime, modUtime + dw, selfIndex), (1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex)));
    float overStep1Right = 1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex + 720.0);
    float overStep1 = max(overStep1Left, overStep1Right);
    float overStep2Left = smoothstep(modUtime, modUtime + dw, selfIndex);
    float overStep2Right = min(smoothstep(modUtime, modUtime + dw, selfIndex + 720.0), (1.0 - smoothstep(modUtime + waveWidth - dw, modUtime + waveWidth, selfIndex + 720.0)));
    float overStep2 = max(overStep2Left, overStep2Right);
    float os = isOverStep1 * overStep1 + overStep2 * isOverStep2;
    strength = (1.0 - isOver) * strength + isOver * os;
    return strength;
}
void main() {
	vMapUv = uv;
	float selfIndex = mod(aIndex, 720.0);
	float circleNum = (aIndex - selfIndex) / 720.0;
	vec3 pDir = normalize(aNormal);
	float noise = texture(uPerlinTexture, vec2((selfIndex / 720.0), mod(uTime * 0.1, 1.0))).r;
	float strength = getStrength(aIndex, uTime, aNormal);
	strength += getStrength(aIndex, uTime + 10.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 20.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 30.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 40.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 50.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 60.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 70.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 80.0 + noise, aNormal);
	strength += getStrength(aIndex, uTime + 90.0 + noise, aNormal);
	csm_Position.x += pDir.x * strength * 0.5;
	csm_Position.z += strength * circleNum * noise * uHeight;
	csm_Position.y += pDir.z * strength * 0.5;
	vIndex = aIndex;
	csm_PointSize = 0.01*uScale;
}
`,X=`
varying vec2 vMapUv;
varying float vIndex;
uniform float uTime;
uniform vec3 baseColor;
uniform sampler2D uPerlinTexture;
void main() {
	vec3 whiteColor = vec3( 1.0,1.0,1.0);
	float selfIndex=mod(vIndex,720.0);
	float circleNum=(vIndex - selfIndex)/720.0;
	vec3 finalColor=mix(baseColor,diffuse,circleNum/5.0);
	finalColor*=1.0;
	csm_DiffuseColor = vec4( finalColor, opacity );
}
`,T=A({__name:"lineMagicZone",props:{height:{default:1.6},speed:{default:1},color:{default:"#90ee90"}},async setup(I){let s,a;const n=H(),l=I,i=([s,a]=z(()=>D(["./plugins/basic/shine/image/round.png","./plugins/digitalCity/image/noise/noisePerlin.png"])),s=await s,a(),s),d=new c.EllipseCurve(0,0,8,8,0,2*Math.PI,!1,0),v=[];for(let e=0;e<5;e++)v.push(...d.getPoints(719)),d.xRadius+=.2,d.yRadius+=.2;const P=new Float32Array(v.map((e,o)=>o)),t=new c.BufferGeometry().setFromPoints(v).getAttribute("position").array,p=new Float32Array(t.length);for(let e=0;e<t.length/3;e++){const o=e*3;t[o+1]+=Math.floor(e/720)*.15;const u=e%720*3,g=(e%720+720*4)*3;p[o]=t[g]-t[u],p[o+1]=t[g+1]-t[u+1],p[o+2]=t[g+2]-t[u+2]}const f={uTime:{value:0},uScale:{value:n.scale?n.scale:1},uHeight:{value:l.height},uPerlinTexture:{value:i[1]},baseColor:{value:new c.Color(l.color)}},{onRender:b}=M();return b(()=>{f.uTime.value+=.01*l.speed}),G(()=>[l.color,n.scale,l.height],([e,o,u])=>{f.baseColor.value.set(e),f.uScale.value=o,f.uHeight.value=u}),(e,o)=>(R(),V("TresGroup",null,[S("TresPoints",{rotateX:-Math.PI/2,scale:.1},[S("TresBufferGeometry",{position:[m(t),3],aIndex:[m(P),1],aNormal:[m(p),3]},null,8,L),O(m(W),{baseMaterial:c.PointsMaterial,vertexShader:F,fragmentShader:X,uniforms:f,map:m(i)[0],alphaMap:m(i)[0],transparent:"",depthWrite:!1,blending:c.AdditiveBlending,color:"#409eff",size:.1},null,8,["baseMaterial","map","alphaMap","blending"])],8,$)]))}}),{defineComponent:Z}=await r("vue"),{createElementVNode:N,unref:K,createVNode:h,mergeProps:C,Suspense:y,withCtx:x,openBlock:_,createBlock:w,resolveComponent:j}=await r("vue"),{reactive:U}=await r("vue"),ae=Z({__name:"lineMagicZone",setup(I){const s=U({reflectivity:.1,showGridHelper:!0,scale:1}),a=U({color:"#ff0000",scale:1.8,height:2.4,speed:1}),n=new B;return n.addBinding(a,"color",{label:"颜色"}),n.addBinding(a,"scale",{label:"大小",min:.1,max:3,step:.1}),n.addBinding(a,"height",{label:"高度",min:.1,max:3,step:.1}),n.addBinding(a,"speed",{label:"速度",min:-5,max:5,step:.1}),(l,i)=>{const d=j("TresCanvas");return _(),w(d,{clearColor:"#201919","window-size":"",antialias:"",alpha:"",logarithmicDepthBuffer:""},{default:x(()=>[i[0]||(i[0]=N("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:.1,far:1e4},null,-1)),h(K(E),{enableDamping:""}),i[1]||(i[1]=N("TresAmbientLight",{intensity:2},null,-1)),(_(),w(y,null,{default:x(()=>[h(T,C({position:[3,0,0]},a),null,16)]),_:1})),(_(),w(y,null,{default:x(()=>[h(T,{position:[-3,0,0],scale:1.6,height:3})]),_:1})),h(k,C({position:[0,-.5,0]},s),null,16)]),_:1})}}});export{ae as default};
