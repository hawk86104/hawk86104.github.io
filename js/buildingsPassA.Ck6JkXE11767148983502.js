import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_sfc_main as S}from"./pagesShow.vue_vue_type_script_setup_true_lang.Crq63Xp41767148983502.js";import{Fs as w,_l as _}from"./index.DTe2qqjO1767148983502.js";import{EffectComposer as g,RenderPass as C,ShaderPass as f}from"./RenderPass.DewL5X8q1767148983502.js";import{Pane as W}from"./tweakpane.BQRZXf8M1767148983502.js";const y={name:"GammaCorrectionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = sRGBTransferOETF( tex );

		}`};var b=`varying vec2 vUv;
varying vec3 vPosition;

void main(){
	vUv=uv;
	vPosition=position;
	gl_Position=vec4(position,1.);
}`,D=`varying vec2 vUv;
varying vec3 vPosition;
uniform sampler2D tDiffuse;
uniform sampler2D depthTexture;

uniform mat4 uProjectionInverse;
uniform mat4 uMatrixWorld;

uniform float time;
uniform vec3 uColor;
uniform float uScalenum;
uniform float uScaleone;
uniform float uWidth;
uniform vec2 uPosition;

vec3 WorldPosFromDepth(float depth){
	float z=(depth-.5)*2.;
	vec4 clipSpacePosition=vec4(vPosition.xy,z,1.);
	vec4 viewSpacePosition=uProjectionInverse*clipSpacePosition;
	viewSpacePosition/=viewSpacePosition.w;
	vec4 worldSpacePosition=uMatrixWorld*viewSpacePosition;
	return worldSpacePosition.xyz;
}
vec3 WorldPosFromDepth2(float depth){
	
	vec4 ndc=vec4(vPosition.x,vPosition.y,((depth-.5)*2.),1.);
	
	vec4 worldSpacePosition=uMatrixWorld*uProjectionInverse*ndc;
	
	
	
	worldSpacePosition/=worldSpacePosition.w;
	return worldSpacePosition.xyz;
}

void main(){
	vec4 base=texture2D(tDiffuse,vUv);
	float depth=texture2D(depthTexture,vUv).r;
	
	
	vec3 pos=WorldPosFromDepth2(depth);
	pos.x=pos.x+uPosition.x;
	pos.z=pos.z+uPosition.y;
	float dis=distance(pos.xz,vec2(0,0));
	vec3 color=vec3(base);
	if(pos.y<=0.){
		discard;
	}
	if(dis<uScalenum){
		vec3 scanT=uColor;
		float wave=fract((dis-time*10.)/uScaleone);
		if(wave<uWidth){
			float p=wave/uWidth;
			color=mix(color,scanT+.1,p*(1.-(dis/uScalenum)));
		}
	}
	gl_FragColor=vec4(color,1.);
}`;const{defineComponent:B}=await t("vue"),a=await t("three"),{watchEffect:p}=await t("vue"),T=B({__name:"buildingsPassA",props:{color:{default:"#FFF"},uScalenum:{default:150},uScaleone:{default:24},uWidth:{default:1},speed:{default:1},uPosition:{default:{x:0,y:0}}},setup(l){const e=l,{renderer:o,scene:c,camera:r,sizes:u}=w();let d,v=0,i=null,n=null;const P=()=>{i=new g(o);const s=new a.DepthTexture(d,v);i.readBuffer.depthBuffer=!0,i.readBuffer.depthTexture=s;const m=new C(c.value,r.value);i.addPass(m),n=new f(new a.ShaderMaterial({uniforms:{time:{value:0},tDiffuse:{value:null},depthTexture:{value:s},uProjectionInverse:{value:r.value.projectionMatrixInverse},uMatrixWorld:{value:r.value.matrixWorld},uColor:{value:new a.Color(e.color)},uScalenum:{value:e.uScalenum},uScaleone:{value:e.uScaleone},uWidth:{value:e.uWidth},uPosition:{value:new a.Vector2(e.uPosition.x,e.uPosition.y)}},vertexShader:b,fragmentShader:D})),i.addPass(n);const x=new f(y);i.addPass(x)};p(()=>{u.width.value&&(d=u.width.value,v=u.height.value,P())});const{onBeforeRender:h}=_();return h(()=>{i&&(i.render(),n.uniforms.time.value+=e.speed/60)}),p(()=>{n&&(e.color&&(n.material.uniforms.uColor.value=new a.Color(e.color)),e.uScalenum&&(n.material.uniforms.uScalenum.value=e.uScalenum),e.uScaleone&&(n.material.uniforms.uScaleone.value=e.uScaleone),e.uWidth&&(n.material.uniforms.uWidth.value=e.uWidth),e.uPosition&&n.material.uniforms.uPosition.value.set(e.uPosition.x,e.uPosition.y))}),(s,m)=>null}}),{defineComponent:z}=await t("vue"),{normalizeProps:F,guardReactiveProps:U,createVNode:M,withCtx:R,openBlock:j,createBlock:E}=await t("vue"),{reactive:k}=await t("vue"),H=z({__name:"buildingsPassA",setup(l){const e=k({color:"#00b4fb",uScalenum:250,uScaleone:82,uWidth:.2,speed:10,uPosition:{x:0,y:0}}),o=new W({title:"后期效果",expanded:!0});return o.addBinding(e,"color",{label:"圈颜色"}),o.addBinding(e,"uScalenum",{label:"最大范围",min:1,max:500,step:10}),o.addBinding(e,"uScaleone",{label:"单条圈间距",min:1,max:100,step:1}),o.addBinding(e,"uWidth",{label:"单条圈宽度",min:0,max:1,step:.01}),o.addBinding(e,"speed",{label:"速度",min:1,max:20,step:1}),o.addBinding(e,"uPosition",{picker:"inline",label:"位置",expanded:!0,x:{min:-1e3,max:1e3,step:10},y:{min:-1e3,max:1e3,step:10}}),(c,r)=>(j(),E(S,{disableRender:!0,showAxesHelper:!1},{ability:R(()=>[M(T,F(U(e)),null,16)]),_:1}))}});export{H as default};
