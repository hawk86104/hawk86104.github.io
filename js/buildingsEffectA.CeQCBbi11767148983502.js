import{importShared as r}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Pane as g}from"./tweakpane.BQRZXf8M1767148983502.js";import{loadCityFBX as w,_sfc_main as y}from"./pagesShow.vue_vue_type_script_setup_true_lang.Crq63Xp41767148983502.js";import{_l as C}from"./index.DTe2qqjO1767148983502.js";import{B as h}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";const{defineComponent:x}=await r("vue"),{unref:M,openBlock:B,createElementBlock:b}=await r("vue"),S=["object"],{watchEffect:T,watch:E}=await r("vue"),n=await r("three"),P=x({__name:"bModel",props:{model:{},bulidingsColor:{default:"#e523ff"},landColor:{default:"#112233"},topColor:{default:"#ffff00"},opacity:{default:.9},gradient:{type:Boolean,default:!0}},setup(s){const e=s,o=e.model.city;e.model.model.children[0].material=new n.MeshBasicMaterial({color:"#ffff00"}),o.renderOrder=1001;const i=e.model.land,t=(a,c)=>{let f;f=Array.isArray(i.material)?i.material:[i.material],f.forEach(m=>{m[c].setStyle(e.landColor),m.side=n.DoubleSide})};(()=>{const{geometry:a}=o;a.computeBoundingBox(),a.computeBoundingSphere();const{max:c,min:f}=a.boundingBox;if(o.material.__csm)return;const m=new h({baseMaterial:o.material,vertexShader:`
		varying vec4 vPosition;
		void main() {
			vPosition = modelMatrix * vec4(position,1.0);
			csm_Position = position * vec3(1.0);
		}
		`,fragmentShader:`
		uniform mat4 modelMatrix;
		varying vec4 vPosition;
		uniform vec3 uMax; 
		uniform vec3 uMin; 
		uniform float uOpacity;  
		uniform float uBorderWidth; 
		uniform vec3 uLightColor;
		uniform vec3 uColor;
		uniform float uCircleTime; 
		uniform float uTime; 
		uniform vec3 uTopColor;					//顶部颜色
		uniform bool uGradient;
		vec4 uMax_world;
		vec4 uMin_world;
		void main() {
			// 转世界坐标
			uMax_world =  modelMatrix * vec4(uMax,1.0);
			uMin_world =  modelMatrix * vec4(uMin,1.0);
			vec3 distColor = uColor;
			float residue = uTime - floor(uTime / uCircleTime) * uCircleTime;
			float rate = residue / uCircleTime;
			float lightOffset = rate * (uMax_world.y - uMin_world.y);

			if (uMin_world.y + lightOffset < vPosition.y && uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {
				csm_DiffuseColor = vec4(uLightColor, uOpacity);
			} else {
				csm_DiffuseColor = vec4(distColor, uOpacity);
			}

			//根据高度计算颜色
			if(uGradient){
				float rateHight = (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y); 
				vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, rateHight*2.0);
				csm_DiffuseColor = vec4(outColor, uOpacity);
			}
    }
		`,silent:!0,uniforms:{uMax:{value:c},uMin:{value:f},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new n.Color(e.bulidingsColor)},uOpacity:{value:e.opacity},uLightColor:{value:new n.Color("#ffffff")},uTopColor:{value:new n.Color(e.topColor)},uTime:{value:0},uGradient:{value:e.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:n.DoubleSide});o.material.dispose(),o.material=m})();const{onBeforeRender:d}=C();d(({delta:a})=>{o.material.uniforms.uTime.value+=a}),T(()=>{e.bulidingsColor&&o.material.uniforms.uColor.value.setStyle(e.bulidingsColor),e.landColor&&t("land","color"),e.opacity&&(o.material.uniforms.uOpacity.value=e.opacity)}),E(e,(a,c)=>{o.material.uniforms.uGradient.value=a.gradient});const u=e.model.model.clone();return(a,c)=>(B(),b("primitive",{object:M(u)},null,8,S))}});var $=`varying vec3 vPosition;
void main(){
	vPosition=position;
	vec4 viewPosition=modelViewMatrix*vec4(position,1.);
	gl_Position=projectionMatrix*viewPosition;
}`,k=`uniform float uScale;
uniform float uGradual;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uSrcColor;
varying vec3 vPosition;

void main(){
	float dis=distance(vPosition.xz,vec2(.0,.0));
	if(dis>uScale){
		discard;
	}
	float opacity=smoothstep(uScale/uGradual*uTime,uScale*uTime,dis);
	opacity*=step(dis,uScale*uTime);
	
	if(opacity<.3){
		gl_FragColor=vec4(uSrcColor,1.-opacity);
	}else{
		gl_FragColor=vec4(uColor,opacity);
	}
	
}`;const{defineComponent:A}=await r("vue"),{unref:O,openBlock:F,createElementBlock:G}=await r("vue"),D=["object"],{Color:p,EdgesGeometry:L,ShaderMaterial:j,LineSegments:N}=await r("three"),{watchEffect:R}=await r("vue"),H=A({__name:"bLine",props:{builds:{},color:{default:"#FFF"},srcColor:{default:"#000"},scale:{default:2e3},gradual:{default:10},speed:{default:.5}},setup(s){const e=s;let o=null;const i={transparent:!0,uniforms:{uColor:{value:new p(e.color)},uSrcColor:{value:new p(e.srcColor)},uScale:{value:e.scale},uTime:{value:0},uGradual:{value:e.gradual}},vertexShader:$,fragmentShader:k};let t=new L(e.builds.geometry).clone();t=t.applyMatrix4(e.builds.matrix);const l=new j(i);o=new N(t,l),o.material.linewidth=e.width,o.renderOrder=1e3,R(()=>{e.color&&(i.uniforms.uColor.value=new p(e.color)),e.srcColor&&(i.uniforms.uSrcColor.value=new p(e.srcColor)),e.scale&&(i.uniforms.uScale.value=e.scale),e.gradual&&(i.uniforms.uGradual.value=e.gradual)});const{onBeforeRender:d}=C();return d(({delta:u})=>{i.uniforms.uTime.value+=u*e.speed,i.uniforms.uTime.value%=1}),(u,a)=>(F(),G("primitive",{object:O(o)},null,8,D))}}),{withAsyncContext:V,defineComponent:W}=await r("vue"),{unref:v,createVNode:_,mergeProps:z,withCtx:I,openBlock:U,createBlock:X}=await r("vue"),{reactive:Y}=await r("vue"),ee=W({__name:"buildingsEffectA",async setup(s){let e,o;const i=([e,o]=V(()=>w()),e=await e,o(),e),t=Y({color:"#FFF",srcColor:"#000",scale:2e3,gradual:6.6,speed:.3}),l=new g({title:"效果参数",expanded:!0});return l.addBinding(t,"srcColor",{label:"线原颜色"}),l.addBinding(t,"color",{label:"线扫颜色"}),l.addBinding(t,"speed",{label:"速度",min:.1,max:1,step:.1}),l.addBinding(t,"scale",{label:"最大扩散",min:10,max:2e3,step:10}),l.addBinding(t,"gradual",{label:"扩散系数",min:1.1,max:10,step:.1}),(d,u)=>(U(),X(y,{showAxesHelper:!1,autoRotate:!1,showBuildings:!1},{ability:I(()=>[_(P,{model:v(i),bulidingsColor:"#000000",landColor:"#112233",topColor:"#999"},null,8,["model"]),_(H,z({builds:v(i).city},t),null,16,["builds"])]),_:1}))}});export{ee as default};
