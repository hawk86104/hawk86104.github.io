import{e as n,U as t}from"./@tresjs.XlmHwCPa1735906732968.js";import{aB as e}from"./three.VhLXWX0H1735906732968.js";import{d as o,r as i,e as r,o as a,f as s,g as u,J as c,j as l,u as f,aj as p,ak as d,m}from"./@vue.yG49nQHr1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";const h=w;function g(){const n=["action","prototype","123GXQNZv","14817460DQZQjl","TresPerspectiveCamera","string","counter","26965yBCwOV","input","test","__proto__","988BoGuhk","5297628tmLYlw","warn","log","TresShaderMaterial","bind","apply","13089897PWDKnN","info","return (function() ","gger","12986lSewZo","\n  uniform float uPixelRatio;\n  uniform float uSize;\n  uniform float uTime;\n  attribute float aScale;\n\n  void main()\n  {\n      vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n      vec4 viewPosition = viewMatrix * modelPosition;\n      vec4 projectionPosition = projectionMatrix * viewPosition;\n\n      gl_Position = projectionPosition;\n      gl_PointSize = aScale * uSize * uPixelRatio;\n      gl_PointSize *= (1.0 / - viewPosition.z);\n  }\n  ","constructor","init","random","a-scale","devicePixelRatio","toString","\n  void main()\n    {\n      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n      float strength = 0.05 / distanceToCenter - 0.1;\n\n      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n    }\n  ","14KLzppH","console","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresAmbientLight","uniforms","trace","table","TresDirectionalLight","call","debu",'{}.constructor("return this")( )',"3052392wCMdgr","error","black","TresBufferGeometry","length","TresCanvas","stateObject","shaderParticles","1552952KwpZac"];return(g=function(){return n})()}!function(n,t){const e=w,o=g();for(;;)try{if(759831===-parseInt(e(257))/1*(parseInt(e(277))/2)+-parseInt(e(297))/3+-parseInt(e(266))/4*(-parseInt(e(262))/5)+parseInt(e(267))/6+-parseInt(e(286))/7*(-parseInt(e(305))/8)+parseInt(e(273))/9+-parseInt(e(258))/10)break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const v=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[w(272)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function w(n,t){const e=g();return(w=function(n,t){return e[n-=255]})(n,t)}!function(){v(this,(function(){const n=w,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(288),"i"),o=x(n(280));t[n(264)](o+"chain")&&e.test(o+n(263))?x():o("0")}))()}();const P=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[w(272)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();P(void 0,(function(){const n=w;let t;try{t=Function(n(275)+n(296)+");")()}catch(i){t=window}const e=t[n(287)]=t[n(287)]||{},o=[n(269),n(268),n(274),n(298),"exception",n(292),n(291)];for(let r=0;r<o.length;r++){const t=P[n(279)][n(256)][n(271)](P),i=o[r],a=e[i]||t;t[n(265)]=P[n(271)](P),t[n(284)]=a[n(284)][n(271)](a),e[i]=t}}))();const y={position:[-2,-2,-2]},T=["position",h(282)],_=3e3,j=o({__name:h(304),setup(o){const g=h,v=i({clearColor:g(299),shadows:!0,alpha:!1}),w={transparent:!0,blending:e,depthWrite:!1,vertexShader:g(278),fragmentShader:g(285),uniforms:{uSize:{value:100},uPixelRatio:{value:Math.min(window[g(283)],2)},uTime:{value:0}}},P=new Float32Array(9e3),j=new Float32Array(_);for(let n=0;n<_;n++)P[3*n+0]=4*Math.random(),P[3*n+1]=4*Math[g(281)](),P[3*n+2]=4*Math[g(281)](),j[n]=Math[g(281)]();const{onLoop:x}=n();return x((({elapsed:n})=>{w[g(290)].uTime.value=n})),(n,e)=>{const o=g,i=r(o(302));return a(),s(i,m(v,{"window-size":""}),{default:u((()=>[e[0]||(e[0]=c(o(259),{position:[5,5,5],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1)),l(f(t)),e[1]||(e[1]=c(o(289),{intensity:.5},null,-1)),c("TresPoints",y,[c(o(300),{position:[f(P),3],"a-scale":[f(j),1]},null,8,T),c(o(270),p(d(w)),null,16)]),e[2]||(e[2]=c(o(293),{position:[0,2,4],intensity:1,"cast-shadow":""},null,-1)),e[3]||(e[3]=c("TresGridHelper",null,null,-1))])),_:1},16)}}});function x(n){function t(n){const e=w;if(typeof n===e(260))return function(n){}[e(279)]("while (true) {}")[e(272)](e(261));1!==(""+n/n)[e(301)]||n%20==0?function(){return!0}[e(279)](e(295)+e(276))[e(294)](e(255)):function(){return!1}.constructor(e(295)+"gger").apply(e(303)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{j as default};