import{importShared as w}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as K}from"./index.DTe2qqjO1767148983502.js";import{It as X,Kt as Y}from"./tresleches.BdwDbeJP1767148983502.js";var Z=`uniform float uSize;
uniform float uTime;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;
    angle += angleOffset;

    modelPosition.x = distanceToCenter * cos(angle);
    modelPosition.z = distanceToCenter * sin(angle);

    
    modelPosition.xyz += aRandomness;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = uSize * aScale;

    
    gl_PointSize *= ( 1.0 / - viewPosition.z);

    
    vColor = color;

}`,L=`varying vec3 vColor;

void main()
{
    
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 5.0);

    
    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, 1.0);
}`;const{defineComponent:W}=await w("vue"),{unref:c,createVNode:P,createElementVNode:h,normalizeProps:q,guardReactiveProps:D,resolveComponent:H,mergeProps:J,withCtx:Q,Fragment:U,openBlock:$,createElementBlock:ee}=await w("vue"),oe=["position","a-scale","color","a-randomness"],{BasicShadowMap:ne,SRGBColorSpace:te,NoToneMapping:ae,Color:f,AdditiveBlending:re,BufferAttribute:g}=await w("three"),{ref:se,watch:ie}=await w("vue"),ue=W({__name:"galaxy",setup(le){const x={clearColor:"black",shadows:!0,alpha:!1,shadowMapType:ne,outputColorSpace:te,toneMapping:ae,windowSize:!0},e={count:3e4,size:20,radius:5,branches:5,spin:4,randomness:.13,randomnessPower:7.5,insideColor:"#b5f28d",outsideColor:"#1b3984"},b=new f(e.insideColor),y=new f(e.outsideColor),d=new Float32Array(e.count*3),m=new Float32Array(e.count*3),_=new Float32Array(e.count),u=new Float32Array(e.count*3);for(let t=0;t<e.count;t++){const o=t*3,a=Math.random()*e.radius,s=t%e.branches*Math.PI*2/e.branches;d[o]=Math.cos(s)*a,d[o+1]=0,d[o+2]=Math.sin(s)*a;const v=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1),l=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1),i=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1);u[o]=v,u[o+1]=l,u[o+2]=i;const n=b.clone();n.lerp(y,a/e.radius),m[o+0]=n.r,m[o+1]=n.g,m[o+2]=n.b,_[t]=Math.random()}const z={transparent:!0,depthWrite:!1,blending:re,vertexColors:!0,vertexShader:Z,fragmentShader:L,uniforms:{uTime:{value:0},uSize:{value:e.size}}};function A(){if(r.value){const t=new f(e.insideColor),o=new f(e.outsideColor),a=new Float32Array(e.count*3),s=new Float32Array(e.count*3),v=new Float32Array(e.count),l=new Float32Array(e.count*3);for(let i=0;i<e.count;i++){const n=i*3,C=Math.random()*e.radius,M=i%e.branches*Math.PI*2/e.branches;a[n]=Math.cos(M)*C,a[n+1]=0,a[n+2]=Math.sin(M)*C;const V=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1),j=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1),G=Math.random()**e.randomnessPower*(Math.random()<.5?-1:1);l[n]=V,l[n+1]=j,l[n+2]=G;const p=t.clone();p.lerp(o,C/e.radius),s[n+0]=p.r,s[n+1]=p.g,s[n+2]=p.b,v[i]=Math.random()}r.value.geometry.setAttribute("position",new g(a,3)),r.value.geometry.setAttribute("aRandomness",new g(l,3)),r.value.geometry.setAttribute("color",new g(s,3)),r.value.geometry.setAttribute("aScale",new g(v,1))}}const r=se(null),S=({elapsed:t})=>{r.value&&(r.value.material.uniforms.uTime.value=t)},{count:T,size:F,radius:B,branches:k,spin:R,randomness:E,randomnessPower:I,insideColor:N,outsideColor:O}=X({count:{value:3e4,min:0,max:1e5,step:1},size:{value:20,min:.01,max:40,step:1},radius:{value:5,min:.1,max:20,step:.01},branches:{value:5,min:2,max:10,step:1},spin:{value:4,min:-5,max:5,step:.01},randomness:{value:.13,min:.1,max:.2,step:.01},randomnessPower:{value:7.5,min:1,max:10,step:.001},insideColor:"#b5f28d",outsideColor:"#1b3984"});return ie([T.value,F.value,B.value,k.value,R.value,E.value,I.value,N.value,O.value],t=>{t.forEach((o,a)=>{e[Object.keys(e)[a]]=o.value}),A()}),(t,o)=>{const a=H("TresCanvas");return $(),ee(U,null,[P(c(Y)),P(a,J(x,{onLoop:S}),{default:Q(()=>[o[0]||(o[0]=h("TresPerspectiveCamera",{position:[3,3,3]},null,-1)),h("TresPoints",{ref_key:"bufferRef",ref:r},[h("TresBufferGeometry",{position:[c(d),3],"a-scale":[c(_),1],color:[c(m),3],"a-randomness":[c(u),3]},null,8,oe),h("TresShaderMaterial",q(D(z)),null,16)],512),P(c(K))]),_:1},16)],64)}}});export{ue as default};
