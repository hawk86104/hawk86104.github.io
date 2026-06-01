import{importShared as t}from"./3d-tiles-renderer.ClFMxqO71780300778719.js";import{useLoop as u,OrbitControls_default as f}from"./index.EnH0mQcm1780300778719.js";import{Pane as v}from"./tweakpane.BQRZXf8M1780300778719.js";var m=`varying vec2 vUv;

void main(){
	
	
	vUv=uv;
	
	
	
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`,g=`#define TAU 6.28318530718
#define MAX_ITER 5

uniform vec2 resolution;
uniform vec3 backgroundColor;
uniform vec3 color;
uniform float speed;
uniform vec2 flowSpeed;
uniform float brightness;
uniform float time;

varying vec2 vUv;

void main(){
	vec2 uv=(vUv.xy+(time*flowSpeed))*resolution;
	
	vec2 p=mod(uv*TAU,TAU)-250.;
	vec2 i=vec2(p);
	
	float c=1.;
	float inten=.005;
	
	for(int n=0;n<MAX_ITER;n++){
		float t=time*speed*(1.-(3.5/float(n+1)));
		i=p+vec2(cos(t-i.x)+sin(t+i.y),sin(t-i.y)+cos(t+i.x));
		c+=1./length(vec2(p.x/(sin(i.x+t)/inten),p.y/(cos(i.y+t)/inten)));
	}
	
	c/=float(MAX_ITER);
	c=1.17-pow(c,brightness);
	
	vec3 rgb=vec3(pow(abs(c),8.));
	
	gl_FragColor=vec4(rgb*color+backgroundColor,length(rgb)+.1);
}`;const{defineComponent:_}=await t("vue"),{createElementVNode:p,normalizeProps:C,guardReactiveProps:w,openBlock:b,createElementBlock:x}=await t("vue"),y=["rotation-x"],{watch:h}=await t("vue"),i=await t("three"),T=_({__name:"tilingCaustics",props:{speed:{default:.478},backgroundColor:{},color:{default:"#fff"},flowSpeed:{default:{x:.01,y:.01}},brightness:{default:1.5}},setup(l){const n=l,e={uniforms:{resolution:{type:"v2",value:{x:1,y:1}},backgroundColor:{type:"c",value:new i.Color(n.color)},color:{type:"c",value:new i.Color("#fff")},speed:{type:"f",value:n.speed},flowSpeed:{type:"v2",value:n.flowSpeed},brightness:{type:"f",value:n.brightness},time:{type:"f",value:.1}},vertexShader:m,fragmentShader:g,side:i.DoubleSide,transparent:!0,depthWrite:!1,depthTest:!0},{onBeforeRender:r}=u();return r(({delta:a})=>{e.uniforms.time.value+=a}),h(()=>n,()=>{e.uniforms.speed.value=n.speed,e.uniforms.brightness.value=n.brightness,e.uniforms.backgroundColor.value=new i.Color(n.color)},{deep:!0}),(a,o)=>(b(),x("TresMesh",{"rotation-x":-Math.PI/2,"position-y":1},[o[0]||(o[0]=p("TresPlaneGeometry",{args:[10,10]},null,-1)),p("TresShaderMaterial",C(w(e)),null,16)],8,y))}}),{defineComponent:P}=await t("vue"),{createElementVNode:s,unref:k,createVNode:c,normalizeProps:S,guardReactiveProps:B,resolveComponent:E,mergeProps:R,withCtx:M,openBlock:A,createBlock:U}=await t("vue"),{reactive:V}=await t("vue"),I=P({__name:"tilingCaustics",setup(l){const n={clearColor:"#222"},e=V({color:"#fff",speed:.1,brightness:1.5,flowSpeed:{x:.01,y:.01}}),r=new v({title:"参数",expanded:!0});return r.addBinding(e,"color",{label:"颜色"}),r.addBinding(e,"speed",{label:"速度",min:.1,max:1,step:.1}),r.addBinding(e,"brightness",{label:"亮度",min:.1,max:2,step:.1}),r.addBinding(e,"flowSpeed",{label:"流动速度",picker:"inline",expanded:!0,x:{min:.01,step:.02,max:.6,inverted:!0},y:{min:.01,step:.02,max:.6,inverted:!0}}),(a,o)=>{const d=E("TresCanvas");return A(),U(d,R(n,{"window-size":""}),{default:M(()=>[o[0]||(o[0]=s("TresPerspectiveCamera",{position:[10,10,10]},null,-1)),o[1]||(o[1]=s("TresAmbientLight",{intensity:1},null,-1)),c(k(f)),o[2]||(o[2]=s("TresGridHelper",{args:[10,10]},null,-1)),c(T,S(B({...e})),null,16)]),_:1},16)}}});export{I as default};
