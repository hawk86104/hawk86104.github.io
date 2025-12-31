import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_l as _,oz as g,Kk as h}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as w,_sfc_main$1 as c}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{Pane as z}from"./tweakpane.BQRZXf8M1767148983502.js";var b=`uniform float time;
uniform float amplitude;
uniform float speed;
uniform float frequency;

vec3 mod289(vec3 x){
	return x-floor(x*(1./289.))*289.;
}

vec4 mod289(vec4 x){
	return x-floor(x*(1./289.))*289.;
}

vec4 permute(vec4 x){
	return mod289(((x*34.)+1.)*x);
}

vec4 taylorInvSqrt(vec4 r){
	return 1.79284291400159-.85373472095314*r;
}

float noise(vec3 v){
	const vec2 C=vec2(1./6.,1./3.);
	const vec4 D=vec4(0.,.5,1.,2.);
	
	
	vec3 i=floor(v+dot(v,C.yyy));
	vec3 x0=v-i+dot(i,C.xxx);
	
	
	vec3 g=step(x0.yzx,x0.xyz);
	vec3 l=1.-g;
	vec3 i1=min(g.xyz,l.zxy);
	vec3 i2=max(g.xyz,l.zxy);
	
	vec3 x1=x0-i1+C.xxx;
	vec3 x2=x0-i2+C.yyy;
	vec3 x3=x0-D.yyy;
	
	
	i=mod289(i);
	vec4 p=permute(permute(permute(
				i.z+vec4(0.,i1.z,i2.z,1.))
				+i.y+vec4(0.,i1.y,i2.y,1.))
				+i.x+vec4(0.,i1.x,i2.x,1.));
				
				float n_=.142857142857;
				vec3 ns=n_*D.wyz-D.xzx;
				
				vec4 j=p-49.*floor(p*ns.z*ns.z);
				
				vec4 x_=floor(j*ns.z);
				vec4 y_=floor(j-7.*x_);
				
				vec4 x=x_*ns.x+ns.yyyy;
				vec4 y=y_*ns.x+ns.yyyy;
				vec4 h=1.-abs(x)-abs(y);
				
				vec4 b0=vec4(x.xy,y.xy);
				vec4 b1=vec4(x.zw,y.zw);
				
				vec4 s0=floor(b0)*2.+1.;
				vec4 s1=floor(b1)*2.+1.;
				vec4 sh=-step(h,vec4(0.));
				
				vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
				vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
				
				vec3 p0=vec3(a0.xy,h.x);
				vec3 p1=vec3(a0.zw,h.y);
				vec3 p2=vec3(a1.xy,h.z);
				vec3 p3=vec3(a1.zw,h.w);
				
				
				vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
				p0*=norm.x;
				p1*=norm.y;
				p2*=norm.z;
				p3*=norm.w;
				
				
				vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
				m=m*m;
				return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),
				dot(p2,x2),dot(p3,x3)));
			}
			
			
			float displace(vec3 point){
				return noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;
			}
			
			vec3 orthogonal(vec3 v){
				return normalize(abs(v.x)>abs(v.z)
				?vec3(-v.y,v.x,0.)
				:vec3(0.,-v.z,v.y));
			}
			
			void main(){
				vec3 displacedPosition=position+normal*displace(position);
				
				float offset=.0001;
				vec3 tangent=orthogonal(normal);
				vec3 bitangent=normalize(cross(normal,tangent));
				vec3 neighbour1=position+tangent*offset;
				vec3 neighbour2=position+bitangent*offset;
				vec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);
				vec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);
				
				vec3 displacedTangent=displacedNeighbour1-displacedPosition;
				vec3 displacedBitangent=displacedNeighbour2-displacedPosition;
				
				vec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));
				
				
				
				csm_Normal=normalMatrix*displacedNormal;
				
				
				csm_Position=displacedPosition;
			}`;const{defineComponent:C}=await t("vue"),{createElementVNode:P,unref:x,mergeProps:B,createVNode:N,openBlock:M,createElementBlock:S}=await t("vue"),q=["rotation-x"],l=await t("three"),{watch:T}=await t("vue"),k=C({__name:"waterGlass",props:{color:{default:"#fff"},amplitude:{default:.066},frequency:{default:5}},setup(u){const e=u,n={time:{type:"f",value:.1},amplitude:{type:"f",value:e.amplitude},speed:{type:"f",value:.277},frequency:{type:"f",value:e.frequency}},r={side:l.DoubleSide,color:new l.Color(e.color),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onBeforeRender:m}=_();return m(({delta:o})=>{n.time.value+=o}),T(()=>e,()=>{r.color=new l.Color(e.color),n.amplitude.value=e.amplitude,n.frequency.value=e.frequency},{deep:!0}),(o,s)=>(M(),S("TresMesh",{"rotation-x":-Math.PI/2,"position-y":.1},[s[0]||(s[0]=P("TresPlaneGeometry",{args:[1,1,64,64]},null,-1)),N(x(g),B(r,{baseMaterial:l.MeshPhysicalMaterial,vertexShader:x(b),uniforms:n,silent:""}),null,16,["baseMaterial","vertexShader"])],8,q))}}),{defineComponent:$}=await t("vue"),{createElementVNode:p,normalizeProps:E,guardReactiveProps:V,createVNode:a,unref:i,withCtx:d,Suspense:I,openBlock:y,createBlock:f,resolveComponent:R,mergeProps:D}=await t("vue"),{reactive:G}=await t("vue"),v=await t("three"),F=$({__name:"waterGlass",setup(u){const e={clearColor:"#222",shadows:!0,alpha:!1,shadowMapType:v.BasicShadowMap,outputColorSpace:v.SRGBColorSpace,toneMapping:v.NoToneMapping,useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},n=G({color:"#b367ff",amplitude:.066,frequency:5}),r=new z({title:"参数",expanded:!0});return r.addBinding(n,"color",{label:"颜色"}),r.addBinding(n,"amplitude",{label:"amplitude",min:.01,max:.2,step:.01}),r.addBinding(n,"frequency",{label:"frequency",min:.1,max:10,step:.1}),(m,o)=>{const s=R("TresCanvas");return y(),f(s,D(e,{"window-size":""}),{default:d(()=>[o[0]||(o[0]=p("TresPerspectiveCamera",{position:[1,1,1]},null,-1)),o[1]||(o[1]=p("TresAmbientLight",{intensity:1},null,-1)),a(k,E(V(n)),null,16),a(i(h)),o[2]||(o[2]=p("TresGridHelper",{args:[1,10]},null,-1)),(y(),f(I,null,{default:d(()=>[a(i(w),{intensity:16,resolution:256,background:"",blur:.6},{default:d(()=>[a(i(c),{intensity:10,form:"circle","rotation-x":Math.PI/2,position:[2*4-3*4/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(i(c),{intensity:10,form:"circle","rotation-x":Math.PI/2,position:[-12/2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),a(i(c),{intensity:5,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),a(i(c),{intensity:5,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])]),_:1})]),_:1}))]),_:1},16)}}});export{F as default};
