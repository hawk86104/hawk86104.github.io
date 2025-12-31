import{importShared as c}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{_sfc_main$6 as z}from"./generalFont.vue_vue_type_script_setup_true_lang.Cx7Vff0m1767148983502.js";import"./default.vue_vue_type_script_setup_true_lang.Bjy6WD1C1767148983502.js";import"./three-mesh-ui.module.Cv5lk1vQ1767148983502.js";import"./domPanel.vue_vue_type_style_index_0_lang.DqrQKbSz1767148983502.js";import{Fs as k,_l as M,Kk as N}from"./index.DTe2qqjO1767148983502.js";import{_sfc_main as R}from"./whiteFloorMesh.vue_vue_type_script_setup_true_lang.BCd7Uxt-1767148983502.js";import{_sfc_main as E}from"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.R4i3IxUx1767148983502.js";import{Pane as I}from"./tweakpane.BQRZXf8M1767148983502.js";import{useTexture as V}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";import{useGLTF as W}from"./index.Bk2zy1aS1767148983502.js";var j=`varying vec3 vWorldSpaceFragPos;
varying vec3 vWorldSpaceNormal;

varying mat4 vProjViewMatrix;
varying mat4 vViewMatrix;

void main(){
	
	vWorldSpaceFragPos=(modelMatrix*vec4(position,1.)).xyz;
	vWorldSpaceNormal=normalize((modelMatrix*vec4(normal,0.)).xyz);
	
	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
	vProjViewMatrix=projectionMatrix*viewMatrix;
	vViewMatrix=viewMatrix;
}`,H=`uniform sampler2D uSkybox;
uniform sampler2D uBackFaceBuffer;
uniform sampler2D uFrontFaceBuffer;

uniform vec3 uExtintionColor1;
uniform vec3 uExtintionColor2;
uniform float uExtintionFactor;
uniform float uExposure;
uniform float uReflectionFactor;
uniform vec4 uExtinctionFX1;

uniform float uTime;

uniform vec3 uCameraPos;
uniform vec2 uScreenSizeInv;
uniform float uCameraFarInverse;

varying vec3 vWorldSpaceFragPos;
varying vec3 vWorldSpaceNormal;
varying mat4 vProjViewMatrix;
varying mat4 vViewMatrix;

const float PI=3.14159265359;
const float e=2.7182818284590;

const float planeSize=3.;
const vec3 planeColor=pow(vec3(202./255.,205./255.,185./255.),vec3(3.));

float mod289(float x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return mod289(((x*34.)+1.)*x);}

float noise(vec3 p){
	vec3 a=floor(p);
	vec3 d=p-a;
	d=d*d*(3.-2.*d);
	
	vec4 b=a.xxyy+vec4(0.,1.,0.,1.);
	vec4 k1=perm(b.xyxy);
	vec4 k2=perm(k1.xyxy+b.zzww);
	
	vec4 c=k2+a.zzzz;
	vec4 k3=perm(c);
	vec4 k4=perm(c+1.);
	
	vec4 o1=fract(k3*(1./41.));
	vec4 o2=fract(k4*(1./41.));
	
	vec4 o3=o2*d.z+o1*(1.-d.z);
	vec2 o4=o3.yw*d.x+o3.xz*(1.-d.x);
	
	return o4.y*d.y+o4.x*(1.-d.y);
}

vec3 acesFilm(const vec3 x){
	const float a=2.51;
	const float b=.03;
	const float c=2.43;
	const float d=.59;
	const float e=.14;
	return clamp((x*(a*x+b))/(x*(c*x+d)+e),0.,1.);
}

vec3 getSkyboxColor(vec3 viewDir){
	
	vec2 skyboxUV=vec2(
		(atan(viewDir.x,viewDir.z)+PI)/(PI*2.),
		(asin(viewDir.y)+PI*.5)/(PI)
	);
	
	vec3 col=texture2D(uSkybox,skyboxUV).xyz;
	col=pow(col,vec3(2.2));
	return col;
}

bool refract2(vec3 v,vec3 n,float ni_over_nt,inout vec3 refracted){
	vec3 uv=normalize(v);
	float dt=dot(uv,n);
	float discriminant=1.-ni_over_nt*ni_over_nt*(1.-dt*dt);
	if(discriminant>0.){
		refracted=ni_over_nt*(v-n*dt)-n*sqrt(discriminant);
		return true;
	}
	
	return false;
}

vec3 binarySearchHitPoint(vec3 lastP,vec3 hitP,vec3 rayDir){
	
	for(int i=0;i<10;i++){
		vec3 midP=(lastP+hitP)*.5;
		
		
		vec4 projCoord=vProjViewMatrix*vec4(midP,1.);
		projCoord.xyz/=projCoord.w;
		
		vec2 midpNDC=projCoord.xy;
		vec2 midpUV=midpNDC*.5+.5;
		
		
		vec4 backBuffer=texture2D(uBackFaceBuffer,midpUV);
		float depth=backBuffer.w;
		
		float midpDepth=abs((vViewMatrix*vec4(midP,1.)).z)*uCameraFarInverse;
		if(midpDepth>depth){
			hitP=midP;
		}else{
			lastP=midP;
		}
	}
	
	return hitP;
}

vec3 getRefractedColor(vec3 refractionDir,vec3 hitPoint,float refractionIndex){
	
	hitPoint+=refractionDir*.0001;
	
	
	float stepSize=.02;
	float stepMult=1.5;
	
	vec3 lastP=hitPoint;
	vec3 p=hitPoint;
	vec3 hitPNormal;
	float currStepSize=stepSize;
	float transmissionDistance=0.;
	for(int i=0;i<20;i++){
		p+=currStepSize*refractionDir;
		
		
		vec4 projCoord=vProjViewMatrix*vec4(p,1.);
		projCoord.xyz/=projCoord.w;
		
		vec2 pNDC=projCoord.xy;
		vec2 pUV=pNDC*.5+.5;
		
		
		vec4 backBuffer=texture2D(uBackFaceBuffer,pUV);
		float depth=backBuffer.w;
		vec3 norm=backBuffer.xyz;
		
		
		float pDepth=abs((vViewMatrix*vec4(p,1.)).z)*uCameraFarInverse;
		
		if(pDepth>depth){
			
			vec3 hitp=binarySearchHitPoint(lastP,p,refractionDir);
			p=hitp;
			
			
			vec4 projCoord=vProjViewMatrix*vec4(p,1.);
			projCoord.xyz/=projCoord.w;
			
			vec2 pNDC=projCoord.xy;
			vec2 pUV=pNDC*.5+.5;
			
			
			hitPNormal=texture2D(uBackFaceBuffer,pUV).xyz;
			
			
			break;
		}
		
		lastP=p;
		currStepSize*=stepMult;
	}
	
	transmissionDistance=length(hitPoint-p);
	
	
	vec3 outward_normal;
	vec3 reflected=reflect(refractionDir,hitPNormal);
	float ni_over_nt;
	vec3 refr;
	
	float reflect_prob;
	float cosine;
	
	if(dot(refractionDir,hitPNormal)>0.){
		outward_normal=-hitPNormal;
		ni_over_nt=refractionIndex;
		cosine=refractionIndex*dot(refractionDir,hitPNormal);
	}else{
		outward_normal=hitPNormal;
		ni_over_nt=1./refractionIndex;
		cosine=-dot(refractionDir,hitPNormal);
	}
	
	
		if(refract2(refractionDir,outward_normal,ni_over_nt,refr)){
			float r0=(1.-refractionIndex)/(1.+refractionIndex);
			r0*=r0;
			reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);
		}else{
			reflect_prob=1.;
		}
		
		
		
		vec3 col;
		vec3 colrefl;
		vec3 colrefr;
		
			if(refr.y<0.){
				
				
				float t=p.y/abs(refr.y);
				vec3 planeHitP=p+refr*t;
				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){
					colrefr=planeColor;
				}else{
					
					colrefr=getSkyboxColor(refr);
				}
			}else{
				
				colrefr=getSkyboxColor(refr);
			}
			
			if(reflected.y<0.){
				float t=p.y/abs(reflected.y);
				vec3 planeHitP=p+reflected*t;
				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){
					colrefl=planeColor;
				}else{
					colrefl=getSkyboxColor(reflected);
				}
			}else{
				colrefl=getSkyboxColor(reflected);
			}
			
			col=colrefl*(reflect_prob*uReflectionFactor)+colrefr*(1.-reflect_prob);
			
			
			vec3 transm=vec3(1.);
			
			const int steps=15;
			float step=transmissionDistance/float(steps);
			float fc=uExtintionFactor*.07;
			
			
			
			
			float noiseSpeed=.5;
			float noiseTimeSpeed=.5;
			
			for(int i=0;i<steps;i++){
				vec3 np=hitPoint+refractionDir*float(i)*step;
				
				vec3 nnp=np;
				vec3 w=normalize(np-vec3(.75,1.5,0.));
				vec3 u=vec3(0.,0.,1.);
				
				vec3 timeOffset=cos(uTime)*w+sin(uTime)*u;
				float colorNoiseX=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed);
				float colorNoiseY=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(15.3278,125.19879,0.));
				float colorNoiseZ=noise(np*noiseSpeed+timeOffset*noiseTimeSpeed+vec3(2.6008,78.19879,543.12993));
				
				float targ=length(nnp*.8*uExtinctionFX1.w-vec3(.75,1.5,0.));
				float targAperture=.25;
				
				
				if(uExtinctionFX1.z>.5){
					nnp=np+sin(np.x*2.5+uTime*1.5)*.3;
					targ=nnp.y-.85*uExtinctionFX1.w;
				}else{
					nnp=np+vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*1.05;
					vec3 diff=nnp-vec3(3.3,4.5,0.);
					float angle=(atan(diff.x,diff.y)+PI)/(PI*2.);
					targ=length(diff)+sin(angle*32.*PI+uTime*1.5)*.4;
					targ*=.475;
					targAperture=.5+colorNoiseX*.75;
				}
				
				
				vec3 col1=uExtintionColor1;
				vec3 col2=uExtintionColor2;
				if(uExtinctionFX1.x>.5){
					col1=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;
				}
				if(uExtinctionFX1.y>.5){
					col2=vec3(colorNoiseX,colorNoiseY,colorNoiseZ)*.85;
				}
				
				if(targ<1.){
					
					transm*=exp(-step*col2*fc);
					
				}else if(targ>1.&&targ<1.+targAperture){
					float t=(targ-1.)/targAperture;
					
					transm*=exp(-step*(col1*t+col2*(1.-t))*fc);
					
				}else if(targ<(1.+targAperture)*1.85){
					transm*=exp(-step*col1*fc);
					
				}else{
					
					
					
				}
			}
			
			
			col*=transm;
			
			return col;
		}
		
		void main(){
			vec2 screenUV=gl_FragCoord.xy*uScreenSizeInv;
			
			vec3 viewDir=normalize(vWorldSpaceFragPos-uCameraPos);
			vec3 normal=vWorldSpaceNormal;
			float refractionIndex=1.5;
			
			vec3 outward_normal;
			vec3 reflected=reflect(viewDir,normal);
			float ni_over_nt;
			vec3 refracted;
			float reflect_prob;
			float cosine;
			
			if(dot(viewDir,normal)>0.){
				outward_normal=-normal;
				ni_over_nt=refractionIndex;
				cosine=refractionIndex*dot(viewDir,normal);
			}else{
				outward_normal=normal;
				ni_over_nt=1./refractionIndex;
				cosine=-dot(viewDir,normal);
			}
			
			if(refract2(viewDir,outward_normal,ni_over_nt,refracted)){
				float r0=(1.-refractionIndex)/(1.+refractionIndex);
				r0*=r0;
				reflect_prob=r0+(1.-r0)*pow((1.-cosine),5.);
			}else{
				reflect_prob=1.;
			}
			
			vec3 reflectedCol;
			if(reflected.y<0.){
				float t=vWorldSpaceFragPos.y/abs(reflected.y);
				vec3 planeHitP=vWorldSpaceFragPos+reflected*t;
				if(abs(planeHitP.x)<planeSize&&abs(planeHitP.z)<planeSize){
					reflectedCol=planeColor;
				}else{
					reflectedCol=getSkyboxColor(reflected);
				}
			}else{
				reflectedCol=getSkyboxColor(reflected);
			}
			
			vec3 col=reflectedCol*reflect_prob*uReflectionFactor+getRefractedColor(refracted,vWorldSpaceFragPos,refractionIndex)*(1.-reflect_prob);
			
			
			
			
			
			
			
			
			
			
			
			
			col*=pow(2.,uExposure);
			col=acesFilm(col);
			col=pow(col,vec3(1./2.2));
			
			gl_FragColor=vec4(col,1.);
			
		}`;const u=await c("three");class G{constructor(r,n){this.material=new u.ShaderMaterial({uniforms:{uTexture:{type:"t",value:null}},vertexShader:`
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);    
                }`,fragmentShader:`
                uniform sampler2D uTexture;

                varying vec2 vUv;

                void main() {
                    ${n||"gl_FragColor = texture2D(uTexture, vUv);"}  
                }`,depthTest:!1,depthWrite:!1}),this.mesh=new u.Mesh(new u.PlaneGeometry(2,2),this.material),this.camera=new u.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3),this.renderer=r,this.scene=new u.Scene,this.scene.add(this.mesh)}blit(r,n){this.renderer.setRenderTarget(n),this.material.uniforms.uTexture.value=r,this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null)}}const i=await c("three");class X{constructor(r,n,e){this.mesh=r.clone(),this.camera=n,this.renderer=e,this.scene=new i.Scene,this.scene.add(this.mesh),this.blitProgram=new G(this.renderer),this.ping=new i.WebGLRenderTarget(innerWidth,innerHeight,{type:i.FloatType,depthBuffer:!1,stencilBuffer:!1}),this.pong=new i.WebGLRenderTarget(innerWidth,innerHeight,{type:i.FloatType,depthBuffer:!1,stencilBuffer:!1}),this.frontFaceRT=new i.WebGLRenderTarget(innerWidth,innerHeight,{type:i.FloatType}),this.frontFaceMaterial=new i.ShaderMaterial({uniforms:{uCameraFarInverse:{value:1/this.camera.far}},vertexShader:`
                varying vec3 vCameraSpacePos;
                varying vec3 vWorldSpaceNormal;

                void main() {
                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;
                    vWorldSpaceNormal = normal;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }`,fragmentShader:`
                uniform float uCameraFarInverse;

                varying vec3 vWorldSpaceNormal;
                varying vec3 vCameraSpacePos;

                void main() {
                    float currentDepth = abs(vCameraSpacePos.z) * uCameraFarInverse;
                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    
                }`,depthTest:!0,depthWrite:!0,side:i.FrontSide}),this.material=new i.ShaderMaterial({uniforms:{uScreenSize:{value:new i.Vector2(innerWidth,innerHeight)},uPrevDepth:{type:"t",value:this.ping.texture},uCameraFarInverse:{value:1/this.camera.far},uSample:{value:0}},vertexShader:`
                varying vec3 vCameraSpacePos;
                varying vec3 vWorldSpaceNormal;

                void main() {
                    vCameraSpacePos = (modelViewMatrix * vec4(position, 1.0)).xyz;
                    vWorldSpaceNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);    
                }`,fragmentShader:`
                uniform sampler2D uPrevDepth;
                uniform float uCameraFarInverse;
                uniform float uSample;
                uniform vec2  uScreenSize;

                varying vec3 vWorldSpaceNormal;
                varying vec3 vCameraSpacePos;

                void main() {

                    vec2 uv = gl_FragCoord.xy / uScreenSize;
                    float prevRegisteredDepth = texture2D(uPrevDepth, uv).w;
                    float currentDepth        = abs(vCameraSpacePos.z) * uCameraFarInverse;

                    if(currentDepth <= prevRegisteredDepth) {
                        discard;
                    }

                    gl_FragColor = vec4(vWorldSpaceNormal, currentDepth);    
                }`,depthTest:!1,depthWrite:!1,side:i.DoubleSide}),this.mesh.traverse(t=>{t instanceof i.Mesh&&(t.material=this.material)})}compute(r){this.renderer.setRenderTarget(this.ping),this.renderer.clear(),this.renderer.setRenderTarget(this.pong),this.renderer.clear(),this.mesh.traverse(n=>{n instanceof i.Mesh&&(n.material=this.material)}),this.material.uniforms.uCameraFarInverse.value=1/this.camera.far;for(let n=0;n<r;n++){let e=n%2===0?this.ping:this.pong,t=n%2===0?this.pong:this.ping;this.material.uniforms.uPrevDepth.value=e.texture,this.material.uniforms.uSample.value=n,this.renderer.autoClear=!1,this.renderer.setRenderTarget(t),this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!0,this.blitProgram.blit(t.texture,e)}r%2===0?this.resultBuffer=this.ping:this.resultBuffer=this.pong,this.mesh.traverse(n=>{n instanceof i.Mesh&&(n.material=this.frontFaceMaterial)}),this.renderer.setRenderTarget(this.frontFaceRT),this.renderer.render(this.scene,this.camera)}getBackFaceTexture(){return this.resultBuffer.texture}getFrontFaceTexture(){return this.frontFaceRT.texture}}const{withAsyncContext:S,defineComponent:$}=await c("vue"),{unref:L,openBlock:U,createElementBlock:A}=await c("vue"),O=["object"],o=await c("three"),{watchEffect:Y,watch:_}=await c("vue"),Z=$({__name:"ssrtGlassMesh",props:{skyBoxTexture:{},modelPath:{},modelName:{},extintionFactor:{default:5},reflectionFactor:{default:1},exposure:{default:0},extintionColor1:{default:"rgb(192,123,25)"},extintionColor2:{default:"rgb(26, 166, 192)"},extintionCol1Random:{type:Boolean,default:!1},extintionCol2Random:{type:Boolean,default:!1}},async setup(p){let r,n;const e=p,t=([r,n]=S(()=>V(e.skyBoxTexture)),r=await r,n(),r);t.wrapS=o.ClampToEdgeWrapping,t.wrapT=o.ClampToEdgeWrapping,t.magFilter=o.LinearMipmapLinearFilter,t.minFilter=o.LinearMipmapLinearFilter;const{camera:v,renderer:s}=k(),a=new o.ShaderMaterial({uniforms:{uSkybox:{value:t},uBackFaceBuffer:{value:null},uFrontFaceBuffer:{value:null},uCameraFarInverse:{value:1/v.value.far},uScreenSizeInv:{value:new o.Vector2(1/window.innerWidth,1/window.innerHeight)},uCameraPos:{value:new o.Vector3(0,0,0)},uTime:{value:0},uExtintionColor1:{value:new o.Color("#fff").sub(new o.Color(e.extintionColor1).convertLinearToSRGB())},uExtintionColor2:{value:new o.Color("#fff").sub(new o.Color(e.extintionColor2).convertLinearToSRGB())},uExtintionFactor:{value:e.extintionFactor},uExposure:{value:e.exposure},uReflectionFactor:{value:e.reflectionFactor},uExtinctionFX1:{value:new o.Vector4(e.extintionCol1Random?1:0,e.extintionCol2Random?1:0,0,1)}},vertexShader:j,fragmentShader:H}),{nodes:B}=([r,n]=S(()=>W(e.modelPath)),r=await r,n(),r),x=B.Scene.getObjectByName(e.modelName),h=new X(x,v.value,s),w=x?.clone();w?.traverse(l=>{l instanceof o.Mesh&&(l.material=a,l.material.side=o.FrontSide)});const{onBeforeRender:D}=M();return D(({elapsed:l})=>{x&&a&&(a.uniforms.uCameraPos.value=v.value.position.clone(),a.uniforms.uTime.value=l,h.compute(6),a.uniforms.uBackFaceBuffer.value=h.getBackFaceTexture(),a.uniforms.uFrontFaceBuffer.value=h.getFrontFaceTexture(),s.setRenderTarget(null),s.autoClear=!1)}),Y(()=>{e.extintionFactor&&(a.uniforms.uExtintionFactor.value=e.extintionFactor),e.reflectionFactor&&(a.uniforms.uReflectionFactor.value=e.reflectionFactor),e.exposure&&(a.uniforms.uExposure.value=e.exposure),e.extintionColor1&&(a.uniforms.uExtintionColor1.value=new o.Color("#fff").sub(new o.Color(e.extintionColor1).convertLinearToSRGB())),e.extintionColor2&&(a.uniforms.uExtintionColor2.value=new o.Color("#fff").sub(new o.Color(e.extintionColor2).convertLinearToSRGB())),e.extintionCol1Random&&(a.uniforms.uExposure.value=e.exposure)}),_(()=>e.extintionCol1Random,l=>{a.uniforms.uExtinctionFX1.value.x=l?1:0},{immediate:!0}),_(()=>e.extintionCol2Random,l=>{a.uniforms.uExtinctionFX1.value.y=l?1:0},{immediate:!0}),(l,re)=>(U(),A("primitive",{object:L(w)},null,8,O))}}),{defineComponent:q}=await c("vue"),{unref:P,createVNode:f,createElementVNode:y,normalizeProps:F,guardReactiveProps:b,Suspense:g,withCtx:m,openBlock:d,createBlock:C,mergeProps:K,resolveComponent:J,Fragment:Q,createElementBlock:ee}=await c("vue"),ne=await c("three"),{reactive:T}=await c("vue"),de=q({__name:"ssrtGlass",setup(p){const r={clearColor:"#201919",windowSize:!0,toneMapping:ne.ACESFilmicToneMapping,toneMappingExposure:.8},n=T({size:[20,20],color:"#cbcb96",shadowColor:"#b8b59e",edge:.35}),e=T({extintionFactor:5,reflectionFactor:1,exposure:0,extintionColor1:"rgb(192,123,25)",extintionColor2:"rgb(26, 166, 192)",extintionCol1Random:!1,extintionCol2Random:!1}),t=new I({title:"参数"});return t.addBinding(e,"extintionFactor",{label:"消光系数",min:0,max:10,step:.1}),t.addBinding(e,"reflectionFactor",{label:"反射系数",min:0,max:2,step:.1}),t.addBinding(e,"exposure",{label:"曝光系数",min:-1,max:1,step:.1}),t.addBinding(e,"extintionColor1",{label:"消光颜色一"}),t.addBinding(e,"extintionColor2",{label:"消光颜色二"}),t.addBinding(e,"extintionCol1Random",{label:"随机色1"}),t.addBinding(e,"extintionCol2Random",{label:"随机色2"}),(v,s)=>{const a=J("TresCanvas");return d(),ee(Q,null,[f(P(z)),f(a,F(b(r)),{default:m(()=>[s[0]||(s[0]=y("TresPerspectiveCamera",{position:[0,8,-13],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),f(P(N),{enableDamping:""}),s[1]||(s[1]=y("TresAmbientLight",{intensity:10},null,-1)),(d(),C(g,null,{default:m(()=>[f(R,F(b(n)),null,16)]),_:1})),(d(),C(g,null,{default:m(()=>[f(Z,K({scale:2},e,{modelPath:"https://opensource.cdn.icegl.cn/model/eCommerce/guanYu.glb",modelName:"statue",skyBoxTexture:"https://opensource.cdn.icegl.cn/images/skyBox/workshop_blur.jpg"}),null,16,["modelPath","skyBoxTexture"])]),_:1})),(d(),C(g,null,{default:m(()=>[f(E,{texture:"https://opensource.cdn.icegl.cn/images/skyBox/workshop_blur.jpg"},null,8,["texture"])]),_:1}))]),_:1},16)],64)}}});export{de as default};
