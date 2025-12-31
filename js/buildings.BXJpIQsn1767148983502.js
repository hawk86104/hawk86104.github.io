import{importShared as i}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useMapStore as y,mapContainer as w,_sfc_main as S}from"./mergeTres.lkeVDVe-1767148983502.js";import{loadGeojson as b}from"./utils.DURg_k-q1767148983502.js";import{_l as z,_export_sfc as P}from"./index.DTe2qqjO1767148983502.js";var F=`precision highp float;
#define ambientRatio .5
#define diffuseRatio .4
#define specularRatio .1

attribute vec2 faceUv;
uniform vec4 u_color;
varying vec2 v_texCoord;
varying vec4 v_color;
varying float v_lightWeight;

void main(){
	
	mat4 matModelViewProjection=projectionMatrix*modelViewMatrix;
	
	v_texCoord=faceUv;
	
	if(normal==vec3(0.,0.,1.)){
		v_color=u_color;
		gl_Position=matModelViewProjection*vec4(position,1.);
		return;
	}
	
	vec3 worldPos=vec3(vec4(position,1.)*modelMatrix);
	vec3 worldNormal=vec3(vec4(normal,1.)*modelMatrix);
	
	vec3 viewDir=normalize(cameraPosition-worldPos);
	
	vec3 lightDir=normalize(vec3(0.,-10.,1.));
	vec3 halfDir=normalize(viewDir+lightDir);
	
	float lambert=dot(worldNormal,lightDir);
	
	float specular=pow(max(0.,dot(worldNormal,halfDir)),32.);
	
	float lightWeight=ambientRatio+diffuseRatio*lambert+specularRatio*specular;
	v_texCoord=faceUv;
	v_lightWeight=lightWeight;
	
	
	
	
	
	v_color=vec4(u_color.rgb*v_lightWeight,u_color.w);
	
	gl_Position=matModelViewProjection*vec4(position,1.);
}`,M=`precision highp float;
uniform float u_opacity;
uniform vec4 u_baseColor;
uniform vec4 u_color;
uniform vec4 u_brightColor;
uniform vec4 u_windowColor;

uniform float u_zoom;
uniform float u_time;
uniform float u_near;
uniform float u_far;
varying vec2 v_texCoord;
varying vec4 v_color;
varying float v_lightWeight;

vec3 getWindowColor(float n,float hot,vec3 brightColor,vec3 darkColor){
	float s=step(hot,n);
	vec3 color=mix(brightColor,vec3(1.,1.,1.),n);
	return mix(darkColor,color,s);
}

float random(vec2 st){
	return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

float LinearizeDepth()
{
	float z=gl_FragCoord.z*2.-1.;
	return(2.*u_near*u_far)/(u_far+u_near-z*(u_far-u_near));
}

vec3 fog(vec3 color,vec3 fogColor,float depth){
	float fogFactor=clamp(depth,0.,1.);
	vec3 output_color=mix(fogColor,color,fogFactor);
	return output_color;
}

float sdRect(vec2 p,vec2 sz){
	vec2 d=abs(p)-sz;
	float outside=length(max(d,0.));
	float inside=min(max(d.x,d.y),0.);
	return outside+inside;
}

void main(){
	if(v_color.w==0.){
		discard;
		return;
	}
	vec3 baseColor=u_color.xyz;
	vec3 brightColor=u_brightColor.xyz;
	vec3 windowColor=u_windowColor.xyz;
	float targetColId=5.;
	float depth=1.-LinearizeDepth()/u_far*u_zoom;
	vec3 fogColor=vec3(23./255.,31./255.,51./255.);
	
	if(v_texCoord.x<0.){
		vec3 foggedColor=fog(baseColor.xyz+vec3(.12*.9,.2*.9,.3*.9),fogColor,depth);
		gl_FragColor=vec4(foggedColor,v_color.w*u_opacity);
	}else{
		
		if(u_zoom<14.){
			gl_FragColor=v_color;
			return;
		}
		
		if(v_texCoord.x<.01||v_texCoord.x>.99||v_texCoord.y<.01){
			gl_FragColor=vec4(1.,.7,.25,.5);
			return;
		}
		
		vec2 st=v_texCoord;
		vec2 UvScale=v_texCoord;
		vec2 tStep=vec2(.05,.125);
		vec2 tStart=vec2(tStep.x*.25,tStep.y*.25);
		vec2 tEnd=vec2(tStep.x*.75,tStep.y*.75);
		
		float u=mod(UvScale.x,tStep.x);
		float v=mod(UvScale.y,tStep.y);
		float ux=floor(UvScale.x/tStep.x);
		float uy=floor(UvScale.y/tStep.y);
		float n=random(vec2(ux,uy));
		float lightP=u_time;
		float head=1.-step(.005,st.y);
		
		
		float sU=step(tStart.x,u)-step(tEnd.x,u);
		float sV=step(tStart.y,v)-step(tEnd.y,v);
		vec2 windowSize=vec2(abs(tEnd.x-tStart.x),abs(tEnd.y-tStart.y));
		float dist=sdRect(vec2(u,v),windowSize);
		float s=sU*sV;
		
		float curColId=ux;
		float sCol=step(targetColId-.2,curColId)-step(targetColId+.2,curColId);
		
		float mLightP=mod(lightP,2.);
		float sRow=step(mLightP-.2,st.y)-step(mLightP,st.y);
		if(ux==targetColId){
			n=0.;
		}
		
		
		
		vec3 color=mix(baseColor,getWindowColor(n,u_time,brightColor,windowColor),s);
		
		float sFinal=s*sCol*sRow;
		color+=mix(baseColor,brightColor,sFinal*n);
		
		if(head==1.){
			color=brightColor;
		}
		color=color*v_lightWeight;
		
		vec3 foggedColor=fog(color,fogColor,depth);
		
		gl_FragColor=vec4(foggedColor,1.);
	}
	
}`;const{defineComponent:k}=await i("vue"),{renderList:E,Fragment:R,openBlock:v,createElementBlock:f,createElementVNode:d,mergeProps:U}=await i("vue"),A=["position","faceUv","normal"],{watchEffect:B,reactive:V}=await i("vue"),$=k({__name:"buildingModels",setup(p){const t=y(),s=e=>{for(let o=0;o<e.length;o+=3){const n=[e[o],e[o+1]],l=t.mapHandle.customCoords.lngLatToCoord(n);e[o]=l[0],e[o+1]=l[1],e[o+2]=e[o+2]*.2}},u=V([]),r=async()=>{const e=await b("https://opensource.cdn.icegl.cn/json/AMapGIS/latlngbuildings.geojson","buildings");for(let o=0;o<e.length;o++){const n=e[o];s(n.geometry);const l=new Float32Array(n.geometry),h=new Float32Array(n.faceUv),x=new Float32Array(n.geometry.length);u.push({positionArray:l,uvArray:h,normalArray:x})}},a={uniforms:{u_opacity:{value:1},u_time:{value:.45},u_color:{value:[.02,.15,.5,1]},u_zoom:{value:1},u_brightColor:{value:[1,1,1,1]},u_windowColor:{value:[.07,.07,.03,1]},u_near:{value:1},u_far:{value:1e3}},vertexShader:F,fragmentShader:M};B(()=>{t.cameraState&&r()});const{onRender:C}=z();return C(()=>{t.cameraState&&(a.uniforms.u_zoom.value=t.mapHandle.getZoom(),a.uniforms.u_near.value=t.cameraState.near,a.uniforms.u_far.value=t.cameraState.far)}),(e,o)=>(v(),f("TresGroup",null,[(v(!0),f(R,null,E(u,(n,l)=>(v(),f("TresMesh",{key:`${l}`},[d("TresBufferGeometry",{ref_for:!0,ref:"tbgRef",position:[n.positionArray,3],faceUv:[n.uvArray,2],normal:[n.normalArray,3]},null,8,A),d("TresShaderMaterial",U({ref_for:!0},a),null,16)]))),128))]))}}),{defineComponent:L}=await i("vue"),{createVNode:c,createElementVNode:m,Suspense:D,withCtx:_,openBlock:g,createBlock:I,resolveComponent:N,mergeProps:T,Fragment:W,createElementBlock:j}=await i("vue"),{reactive:G}=await i("vue"),H=L({__name:"buildings",setup(p){const t=[121.407867,31.157717],s=G({alpha:!0,antialias:!0,clearAlpha:0,renderMode:"manual"});return(u,r)=>{const a=N("TresCanvas");return g(),j(W,null,[c(w,{center:t,zoom:19,pitch:65.59312320916906,mapStyle:"darkblue"}),c(a,T({id:"tresCanvas",ref:"tcRef"},s),{default:_(()=>[r[0]||(r[0]=m("TresPerspectiveCamera",{fov:60,near:.1,far:2e3},null,-1)),r[1]||(r[1]=m("TresAmbientLight",{intensity:.5},null,-1)),c(S,{center:t}),(g(),I(D,null,{default:_(()=>[c($)]),_:1}))]),_:1},16)],64)}}}),O=P(H,[["__scopeId","data-v-2ac5f9dc"]]);export{O as default};
