import{importShared as n}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Kk as c}from"./index.DTe2qqjO1767148983502.js";const{defineComponent:p}=await n("vue"),{createElementVNode:t,unref:r,createVNode:v,normalizeProps:f,guardReactiveProps:P,resolveComponent:_,mergeProps:g,withCtx:w,openBlock:h,createBlock:C}=await n("vue"),T={position:[-2,-2,-2]},x=["position","a-scale"],{AdditiveBlending:S}=await n("three"),{reactive:z}=await n("vue"),a=3e3,A=p({__name:"shaderParticles",setup(M){const d=z({clearColor:"black",shadows:!0,alpha:!1}),s={transparent:!0,blending:S,depthWrite:!1,vertexShader:`
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uTime;
  attribute float aScale;

  void main()
  {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;

      gl_Position = projectionPosition;
      gl_PointSize = aScale * uSize * uPixelRatio;
      gl_PointSize *= (1.0 / - viewPosition.z);
  }
  `,fragmentShader:`
  void main()
    {
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      float strength = 0.05 / distanceToCenter - 0.1;

      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
    }
  `,uniforms:{uSize:{value:100},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uTime:{value:0}}},i=new Float32Array(a*3),l=new Float32Array(a);for(let e=0;e<a;e++)i[e*3+0]=Math.random()*4,i[e*3+1]=Math.random()*4,i[e*3+2]=Math.random()*4,l[e]=Math.random();const m=({elapsed:e})=>{s.uniforms.uTime.value=e};return(e,o)=>{const u=_("TresCanvas");return h(),C(u,g(d,{"window-size":"",onLoop:m}),{default:w(()=>[o[0]||(o[0]=t("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1)),v(r(c)),o[1]||(o[1]=t("TresAmbientLight",{intensity:.5},null,-1)),t("TresPoints",T,[t("TresBufferGeometry",{position:[r(i),3],"a-scale":[r(l),1]},null,8,x),t("TresShaderMaterial",f(P(s)),null,16)]),o[2]||(o[2]=t("TresDirectionalLight",{position:[0,2,4],intensity:1,"cast-shadow":""},null,-1)),o[3]||(o[3]=t("TresGridHelper",null,null,-1))]),_:1},16)}}});export{A as default};
