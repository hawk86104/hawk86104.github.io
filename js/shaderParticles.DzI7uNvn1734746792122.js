import{e as n,U as t}from"./@tresjs.vA_UT8oy1734746792122.js";import{aB as e}from"./three.1FILWcBb1734746792122.js";import{d as o,r as i,e as r,o as a,f as s,g as u,J as c,j as l,u as f,aj as p,ak as d,m}from"./@vue.-THQH3GC1734746792122.js";import"./@vueuse.lqJslAkC1734746792122.js";const h=g;!function(n,t){const e=g,o=x();for(;;)try{if(521162===parseInt(e(295))/1+-parseInt(e(310))/2*(parseInt(e(311))/3)+parseInt(e(321))/4+parseInt(e(307))/5+-parseInt(e(320))/6+-parseInt(e(324))/7*(parseInt(e(290))/8)+parseInt(e(328))/9*(parseInt(e(305))/10))break;o.push(o.shift())}catch(i){o.push(o.shift())}}();const v=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function g(n,t){const e=x();return(g=function(n,t){return e[n-=284]})(n,t)}!function(){v(this,(function(){const n=g,t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=j(n(299));t.test(o+n(300))&&e.test(o+"input")?j():o("0")}))()}();const P=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[g(314)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();P(void 0,(function(){const n=g,t=function(){const n=g;let t;try{t=Function("return (function() "+n(325)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(302)]||{},o=[n(308),n(317),"info","error",n(318),n(297),n(313)];for(let i=0;i<o[n(286)];i++){const t=P[n(327)].prototype[n(301)](P),r=o[i],a=e[r]||t;t[n(319)]=P[n(301)](P),t[n(316)]=a[n(316)][n(301)](a),e[r]=t}}))();const w={position:[-2,-2,-2]},T=["position",h(293)],y=3e3,_=o({__name:"shaderParticles",setup(o){const v=h,g=i({clearColor:v(284),shadows:!0,alpha:!1}),P={transparent:!0,blending:e,depthWrite:!1,vertexShader:v(296),fragmentShader:v(294),uniforms:{uSize:{value:100},uPixelRatio:{value:Math[v(289)](window[v(303)],2)},uTime:{value:0}}},_=new Float32Array(9e3),j=new Float32Array(y);for(let n=0;n<y;n++)_[3*n+0]=4*Math.random(),_[3*n+1]=4*Math[v(292)](),_[3*n+2]=4*Math[v(292)](),j[n]=Math.random();const{onLoop:x}=n();return x((({elapsed:n})=>{const t=v;P[t(326)].uTime[t(309)]=n})),(n,e)=>{const o=v,i=r(o(329));return a(),s(i,m(g,{"window-size":""}),{default:u((()=>[e[0]||(e[0]=c(o(306),{position:[5,5,5],fov:45,near:.1,far:1e3,"look-at":[-8,3,-3]},null,-1)),l(f(t)),e[1]||(e[1]=c(o(285),{intensity:.5},null,-1)),c("TresPoints",w,[c(o(288),{position:[f(_),3],"a-scale":[f(j),1]},null,8,T),c(o(298),p(d(P)),null,16)]),e[2]||(e[2]=c(o(322),{position:[0,2,4],intensity:1,"cast-shadow":""},null,-1)),e[3]||(e[3]=c("TresGridHelper",null,null,-1))])),_:1},16)}}});function j(n){function t(n){const e=g;if(typeof n===e(287))return function(n){}[e(327)]("while (true) {}")[e(314)](e(323));1!==(""+n/n).length||n%20==0?function(){return!0}[e(327)]("debu"+e(291))[e(312)](e(315)):function(){return!1}[e(327)]("debu"+e(291))[e(314)](e(304)),t(++n)}try{if(n)return t;t(0)}catch(e){}}function x(){const n=["33lGeQsw","call","trace","apply","action","toString","warn","exception","__proto__","4500558DpzeOH","1289464cauDpi","TresDirectionalLight","counter","133DoDTJo",'{}.constructor("return this")( )',"uniforms","constructor","3032658AyIIqr","TresCanvas","black","TresAmbientLight","length","string","TresBufferGeometry","min","105736MlzOeN","gger","random","a-scale","\n  void main()\n    {\n      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n      float strength = 0.05 / distanceToCenter - 0.1;\n\n      gl_FragColor = vec4(1.0, 1.0, 1.0, strength);\n    }\n  ","464216jJLrap","\n  uniform float uPixelRatio;\n  uniform float uSize;\n  uniform float uTime;\n  attribute float aScale;\n\n  void main()\n  {\n      vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n      modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;\n      vec4 viewPosition = viewMatrix * modelPosition;\n      vec4 projectionPosition = projectionMatrix * viewPosition;\n\n      gl_Position = projectionPosition;\n      gl_PointSize = aScale * uSize * uPixelRatio;\n      gl_PointSize *= (1.0 / - viewPosition.z);\n  }\n  ","table","TresShaderMaterial","init","chain","bind","console","devicePixelRatio","stateObject","10fKVrtG","TresPerspectiveCamera","2770110ZVrPhu","log","value","28216YBSXMn"];return(x=function(){return n})()}export{_ as default};