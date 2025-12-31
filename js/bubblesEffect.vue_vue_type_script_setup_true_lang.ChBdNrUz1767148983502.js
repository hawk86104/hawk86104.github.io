import{importShared as s,mergeGeometries as T}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as F,_l as B}from"./index.DTe2qqjO1767148983502.js";import{useTexture as R}from"./customShaderMaterial.vue_vue_type_script_setup_true_lang.B7dQ_CiZ1767148983502.js";import"./index.vue_vue_type_script_setup_true_lang.CjsHShHS1767148983502.js";var E=`uniform float c;
uniform float p;
uniform float uTime;
varying float intensity;
varying vec2 vUv;
void main(){
    vUv=uv;
    vec3 vNormal=normalize(normalMatrix*normal);
    intensity=pow(c-abs(dot(vNormal,vec3(0,0,1))),p);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}`,U=`uniform vec3 glowColor;
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
}`;const{defineComponent:$}=await s("vue"),{createElementVNode:x,normalizeProps:A,guardReactiveProps:D,openBlock:k,createElementBlock:O}=await s("vue"),f=await s("three"),{ref:V,watchEffect:G,onMounted:N}=await s("vue"),ne=$({__name:"xRayEffect",props:{model:{},color:{default:"#84ccff"},opacity:{default:1}},setup(v){const e=v,a=V(),i=[];e.model.traverse(n=>{n instanceof f.Mesh&&(n.geometry.verticesNeedUpdate=!0,i.push(n.geometry))});const t={uniforms:{c:{type:"f",value:1.11},p:{type:"f",value:1},glowColor:{type:"c",value:new f.Color(e.color)},lightningTexture:{type:"t",value:null},offsetY:{type:"f",value:.1},uTime:{type:"f",value:0},uOpacity:{type:"f",value:e.opacity}},vertexShader:E,fragmentShader:U,side:f.DoubleSide,blending:f.AdditiveBlending,depthWrite:!1};N(async()=>{const n=await R("./plugins/medical/image/brainXRayLight.png");t.uniforms.lightningTexture.value=n,console.log(n)}),t.uniforms.offsetY.value=Math.sin(5);const{camera:b}=F(),{onBeforeRender:c}=B();return c(({delta:n})=>{b.value?.position&&a.value&&(t.uniforms.uTime.value+=n)}),G(()=>{a.value&&(a.value.geometry.dispose(),a.value.geometry=T(i)),e.color&&(t.uniforms.glowColor.value=new f.Color(e.color)),e.opacity&&(t.uniforms.uOpacity.value=e.opacity)}),(n,m)=>(k(),O("TresMesh",{ref_key:"TresMeshRef",ref:a,"render-order":9},[m[0]||(m[0]=x("TresBufferGeometry",null,null,-1)),x("TresShaderMaterial",A(D(t)),null,16)],512))}});var j=`uniform float p;
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
}`,Y=`precision mediump float;
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
  
}`;const{defineComponent:I}=await s("vue"),{createElementVNode:P,unref:H,normalizeProps:L,guardReactiveProps:W,openBlock:X,createElementBlock:q}=await s("vue"),o=await s("three"),{ref:z,watchEffect:J}=await s("vue"),ie=I({__name:"bubblesEffect",props:{model:{},color:{default:"#FFF"},opacity:{default:1}},setup(v){const e=v,a=["afective","semantic","episodic","process","amigdala","brainstem","bridge","cerebellum","analitic"],i={};e.model.traverse(u=>{u instanceof o.Mesh&&a.map(r=>{if(u.name.includes(r)){if(i[r]){const p=[i[r],u.geometry];return i[r]=T(p),i}return i[r]=u.geometry}return[]})});const t=z(),b=()=>{const r=[],p=[],M=[],g=[],d=[];for(let l=0;l<2e4-a.length*3;l+=1){const S=o.MathUtils.randInt(0,a.length-1),y=a[S],_=i[y].attributes.position.array[l*3+0]||0,w=i[y].attributes.position.array[l*3+1]||0,h=i[y].attributes.position.array[l*3+2]||0;if(p.push(_,w,h),r[l]=o.MathUtils.randFloat(10,20),l%100===0){const C=o.MathUtils.randInt(100,250)+w;d.push(_,C,h,1)}else d.push(_,w,h,0);g[l*2+0]=o.MathUtils.randFloat(.5,1.5),g[l*2+1]=2.5}t.value.setAttribute("aDelayDuration",new o.Float32BufferAttribute(g,2)),t.value.setAttribute("bubbles",new o.Float32BufferAttribute(d,4)),t.value.setAttribute("position",new o.Float32BufferAttribute(p,3)),t.value.setAttribute("color",new o.Float32BufferAttribute(M,3)),t.value.setAttribute("size",new o.Float32BufferAttribute(r,1)),t.value.computeBoundingSphere()},c=new o.ShaderMaterial({uniforms:{glowColor:{type:"c",value:new o.Color(e.color)},uTime:{type:"f",value:0},uSlowTime:{type:"f",value:0},uBubblesUp:{type:"f",value:1},uOpacity:{type:"f",value:e.opacity}},vertexShader:j,fragmentShader:Y,blending:o.AdditiveBlending,side:o.DoubleSide,depthTest:!1,vertexColors:!1,transparent:!0});J(()=>{t.value&&b()});const n=z(),{onBeforeRender:m}=B();return m(()=>{n.value&&(n.value.material.uniforms.uTime.value+=1/20,n.value.material.uniforms.uSlowTime.value+=1/400),e.color&&(c.uniforms.glowColor.value=new o.Color(e.color)),e.opacity&&(c.uniforms.uOpacity.value=e.opacity)}),(u,r)=>(X(),q("TresPoints",{ref_key:"TresMeshRef",ref:n},[P("TresBufferGeometry",{ref_key:"BufferGeometryRef",ref:t},null,512),P("TresShaderMaterial",L(W(H(c))),null,16)],512))}});export{ne as _sfc_main,ie as _sfc_main$1};
