import{importShared as s,mergeGeometries as N}from"./3d-tiles-renderer.dDcENhaA1792053744001.js";import{useTres as j,useLoop as O,OrbitControls_default as L}from"./index.TynH4WPb1792053744001.js";import{OBJLoader as Y,loadOBJ as I}from"./util.fZ36QVOp1792053744001.js";import{Pane as J}from"./tweakpane.BQRZXf8M1792053744001.js";import{_sfc_main as H}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.BoOaHAk41792053744001.js";import{_sfc_main$6 as W}from"./domCanvas.CsZLMkRz1792053744001.js";import"./default.vue_vue_type_script_setup_true_lang.KUE2pbNs1792053744001.js";import"./three-mesh-ui.module.C4i5Gfhu1792053744001.js";import"./domPanel.vue_vue_type_style_index_0_lang.BYe0zio61792053744001.js";import{_sfc_main as X}from"./cloudPoints.vue_vue_type_script_setup_true_lang.BrqbSW611792053744001.js";import{useTexture as q}from"./index.vue_vue_type_script_setup_true_lang.CMFsDM5F1792053744001.js";import"./index.vue_vue_type_script_setup_true_lang.b5ezMMcE1792053744001.js";var K=`uniform float c;
uniform float p;
uniform float uTime;
varying float intensity;
varying vec2 vUv;
void main(){
    vUv=uv;
    vec3 vNormal=normalize(normalMatrix*normal);
    intensity=pow(c-abs(dot(vNormal,vec3(0,0,1))),p);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`,Q=`uniform vec3 glowColor;
uniform sampler2D lightningTexture;
varying float intensity;
varying vec2 vUv;
uniform float offsetY;
uniform float uTime;
uniform float uOpacity;

void main(){
  vec2 uv=vUv;
  uv.y+=offsetY;
  vec3 glow=glowColor*intensity;
  vec3 color=vec3(step(.1,uv.y)-step(.2,uv.y))-vec3(texture2D(lightningTexture,uv));
  float alpha=clamp(cos(uTime*3.),.5,1.);
  gl_FragColor=vec4(glow+color,alpha*uOpacity);
}`;const{defineComponent:Z}=await s("vue"),{createElementVNode:k,normalizeProps:ee,guardReactiveProps:oe,openBlock:te,createElementBlock:ne}=await s("vue"),g=await s("three"),{ref:ae,watchEffect:ie,onMounted:re}=await s("vue"),le=Z({__name:"xRayEffect",props:{model:{},color:{default:"#84ccff"},opacity:{default:1}},setup(y){const o=y,a=ae(),i=[];o.model.traverse(t=>{t instanceof g.Mesh&&(t.geometry.verticesNeedUpdate=!0,i.push(t.geometry))});const e={uniforms:{c:{type:"f",value:1.11},p:{type:"f",value:1},glowColor:{type:"c",value:new g.Color(o.color)},lightningTexture:{type:"t",value:null},offsetY:{type:"f",value:.1},uTime:{type:"f",value:0},uOpacity:{type:"f",value:o.opacity}},vertexShader:K,fragmentShader:Q,side:g.DoubleSide,blending:g.AdditiveBlending,depthWrite:!1};re(async()=>{const t=await q("./plugins/medical/image/brainXRayLight.png");e.uniforms.lightningTexture.value=t,console.log(t)}),e.uniforms.offsetY.value=Math.sin(5);const{camera:r}=j(),{onBeforeRender:u}=O();return u(({delta:t})=>{r.value?.position&&a.value&&(e.uniforms.uTime.value+=t)}),ie(()=>{a.value&&(a.value.geometry.dispose(),a.value.geometry=N(i)),o.color&&(e.uniforms.glowColor.value=new g.Color(o.color)),o.opacity&&(e.uniforms.uOpacity.value=o.opacity)}),(t,f)=>(te(),ne("TresMesh",{ref_key:"TresMeshRef",ref:a,"render-order":9},[f[0]||(f[0]=k("TresBufferGeometry",null,null,-1)),k("TresShaderMaterial",ee(oe(e)),null,16)],512))}});var se=`uniform float p;
uniform float uTime;
uniform float uSlowTime;
uniform float uBubblesUp;
varying float intensity;
attribute vec2 aDelayDuration;
attribute float size;
attribute vec4 bubbles;
varying float alpha;

float easeExpoInOut(float p){
    return((p*=2.)<1.)?.5*pow(2.,10.*(p-1.)):.5*(2.-pow(2.,-10.*(p-1.)));
}

void main()
{
    intensity=.9;
    vec4 mvPosition=modelViewMatrix*vec4(position,1.);
    gl_PointSize=size*(300./-mvPosition.z);
    float m=mod(size,sin(uSlowTime*.12+size));
    
    alpha=step(.5,abs(m));
    if(m>.5&&m<.7){
        gl_PointSize=.9*size;
    }
    if(m>.8){
        gl_PointSize=.9*size;
    }
    
    gl_Position=projectionMatrix*mvPosition;
    
    if(bubbles.w>0.&&bubbles.w<2.&&bubbles.x!=0.&&bubbles.y!=0.){
        gl_PointSize=size+15.;
        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);
        
        float tProgress=smoothstep(0.,aDelayDuration.x,uBubblesUp);
        vec3 tranlated=mix(position,bubbles.xyz,tProgress);
        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);
        
        gl_PointSize=uBubblesUp*gl_PointSize;
        gl_Position+=projectionMatrix*bPosition;
        alpha=5.;
    }
    
    if(bubbles.w==2.){
        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,.6);
        gl_PointSize=size+60.;
        
        gl_PointSize=uBubblesUp*gl_PointSize;
        float normalized=clamp(uBubblesUp,0.,2.)*2.;
        vec3 tranlated=mix(position,bubbles.xyz,normalized);
        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);
        gl_Position+=projectionMatrix*bPosition;
    }
    if(bubbles.w==3.){
        alpha=clamp(abs(sin(uTime-bubbles.y)),.3,1.);
        gl_PointSize=size+90.;
        
        gl_PointSize=uBubblesUp*gl_PointSize;
        float normalized=clamp(uBubblesUp,0.,2.)*2.;
        vec3 tranlated=mix(position,bubbles.xyz,normalized);
        vec4 bPosition=modelViewMatrix*vec4(tranlated,1.);
        gl_Position+=projectionMatrix*bPosition;
    }
}`,ue=`precision mediump float;
uniform vec3 glowColor;
varying float intensity;
varying float alpha;
uniform float uOpacity;
void main() {
  float distanceToCenter = distance(gl_PointCoord, vec2(.5));
  float pct = 1. - smoothstep(0., .5, distanceToCenter);
  vec3 color = vec3(1.) * gl_FragColor.rgb;
  vec3 glow = glowColor * intensity;
  gl_FragColor = vec4(glow, clamp(alpha, 0., 1.));
  gl_FragColor = vec4(glow, pct * gl_FragColor.a);
  gl_FragColor = vec4(gl_FragColor.rgb, gl_FragColor.a * uOpacity);
  
}`;const{defineComponent:ce}=await s("vue"),{createElementVNode:F,unref:me,normalizeProps:fe,guardReactiveProps:pe,openBlock:de,createElementBlock:ve}=await s("vue"),n=await s("three"),{ref:U,watchEffect:ge}=await s("vue"),be=ce({__name:"bubblesEffect",props:{model:{},color:{default:"#FFF"},opacity:{default:1}},setup(y){const o=y,a=["afective","semantic","episodic","process","amigdala","brainstem","bridge","cerebellum","analitic"],i={};o.model.traverse(m=>{m instanceof n.Mesh&&a.map(l=>{if(m.name.includes(l)){if(i[l]){const p=[i[l],m.geometry];return i[l]=N(p),i}return i[l]=m.geometry}return[]})});const e=U(),r=()=>{const l=[],p=[],x=[],_=[],P=[];for(let c=0;c<2e4-a.length*3;c+=1){const D=n.MathUtils.randInt(0,a.length-1),C=a[D],T=i[C].attributes.position.array[c*3+0]||0,z=i[C].attributes.position.array[c*3+1]||0,S=i[C].attributes.position.array[c*3+2]||0;if(p.push(T,z,S),l[c]=n.MathUtils.randFloat(10,20),c%100===0){const G=n.MathUtils.randInt(100,250)+z;P.push(T,G,S,1)}else P.push(T,z,S,0);_[c*2+0]=n.MathUtils.randFloat(.5,1.5),_[c*2+1]=2.5}e.value.setAttribute("aDelayDuration",new n.Float32BufferAttribute(_,2)),e.value.setAttribute("bubbles",new n.Float32BufferAttribute(P,4)),e.value.setAttribute("position",new n.Float32BufferAttribute(p,3)),e.value.setAttribute("color",new n.Float32BufferAttribute(x,3)),e.value.setAttribute("size",new n.Float32BufferAttribute(l,1)),e.value.computeBoundingSphere()},u=new n.ShaderMaterial({uniforms:{glowColor:{type:"c",value:new n.Color(o.color)},uTime:{type:"f",value:0},uSlowTime:{type:"f",value:0},uBubblesUp:{type:"f",value:1},uOpacity:{type:"f",value:o.opacity}},vertexShader:se,fragmentShader:ue,blending:n.AdditiveBlending,side:n.DoubleSide,depthTest:!1,vertexColors:!1,transparent:!0});ge(()=>{e.value&&r()});const t=U(),{onBeforeRender:f}=O();return f(()=>{t.value&&(t.value.material.uniforms.uTime.value+=1/20,t.value.material.uniforms.uSlowTime.value+=1/400),o.color&&(u.uniforms.glowColor.value=new n.Color(o.color)),o.opacity&&(u.uniforms.uOpacity.value=o.opacity)}),(m,l)=>(de(),ve("TresPoints",{ref_key:"TresMeshRef",ref:t},[F("TresBufferGeometry",{ref_key:"BufferGeometryRef",ref:e},null,512),F("TresShaderMaterial",fe(pe(me(u))),null,16)],512))}}),{withAsyncContext:ye,defineComponent:_e}=await s("vue"),{unref:b,createVNode:w,createElementVNode:M,normalizeProps:A,guardReactiveProps:V,mergeProps:h,openBlock:B,createBlock:R,createCommentVNode:$,resolveComponent:we,withCtx:he,Fragment:Be,createElementBlock:xe}=await s("vue"),Pe={position:[0,120,0]},{SRGBColorSpace:Ce,BasicShadowMap:Te,NoToneMapping:ze}=await s("three"),{reactive:d}=await s("vue"),De=_e({__name:"digitalBrainFloor",async setup(y){let o,a;const i=d({mirrorSize:500,gridSize:490,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),e=d({color:"#fff",show:!0,opacity:1}),r=new J({title:"参数"});r.addBinding(e,"show",{label:"点云显示"}),r.addBinding(e,"color",{label:"点云颜色"}),r.addBinding(e,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const u=d({color:"#84ccff",show:!0,opacity:1});r.addBinding(u,"show",{label:"脑轮廓显示"}),r.addBinding(u,"color",{label:"脑轮廓颜色"}),r.addBinding(u,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const t=d({color:"#9e00af",show:!0,opacity:1});r.addBinding(t,"show",{label:"脑组织显示"}),r.addBinding(t,"color",{label:"脑组织颜色"}),r.addBinding(t,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const f="https://opensource.cdn.icegl.cn/model/medical/brainparts.OBJ",m=new Y,l=([o,a]=ye(()=>I(f,m)),o=await o,a(),o),p=d({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:Te,outputColorSpace:Ce,toneMapping:ze}),x=d({autoRotate:!0,autoRotateSpeed:2});return(_,v)=>{const E=we("TresCanvas");return B(),xe(Be,null,[w(b(W)),w(E,h(p,{"window-size":""}),{default:he(()=>[v[0]||(v[0]=M("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1)),w(b(L),A(V(x)),null,16),v[1]||(v[1]=M("TresAmbientLight",{intensity:.5},null,-1)),M("TresGroup",Pe,[e.show?(B(),R(X,h({key:0,model:b(l)},e),null,16,["model"])):$("",!0),u.show?(B(),R(le,h({key:1,model:b(l)},u),null,16,["model"])):$("",!0),t.show?(B(),R(be,h({key:2,model:b(l)},t),null,16,["model"])):$("",!0)]),w(H,A(V(i)),null,16)]),_:1},16)],64)}}});export{De as default};
