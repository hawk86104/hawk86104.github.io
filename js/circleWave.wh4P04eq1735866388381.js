import{e as n,b as t,U as e}from"./@tresjs.FlKhQDQ71735866388381.js";import{P as o}from"./tweakpane.yHWGBmom1735866388381.js";import{_ as r}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.KbXI9glQ1735866388381.js";import{_ as a,C as c}from"./three.Rja0AEnA1735866388381.js";import{d as i,b as s,a4 as u,r as l,a1 as f,o as p,D as v,J as d,aj as m,ak as g,e as h,f as k,g as w,j as S,u as y,al as _,m as b}from"./@vue.yG49nQHr1735866388381.js";import"./@vueuse.YI3Exu6_1735866388381.js";import"./all.three.XOVNFju71735866388381.js";import"./oimophysics.x0jH7fze1735866388381.js";const x=T;!function(n,t){const e=T,o=C();for(;;)try{if(231280===-parseInt(e(243))/1+-parseInt(e(209))/2+-parseInt(e(202))/3*(-parseInt(e(218))/4)+parseInt(e(250))/5+-parseInt(e(245))/6+parseInt(e(227))/7*(parseInt(e(216))/8)+parseInt(e(208))/9*(parseInt(e(242))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const I=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[T(232)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function C(){const n=["scale","call","wrapT","uScanColorDark","error","while (true) {}","RepeatWrapping","Color","139111oXkGzE","log","return (function() ","chain","TresMesh","apply","debu","table","toString","DoubleSide","test","#ffffff","constructor","uScanColor","material","690550BiyBQd","326251SiCZhA","__proto__","1905864MSYKJN","exception","console","colorDark","gger","854645WOixxk","warn","\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvoid main(){\n\tvUv=uv;\n\tvPosition=position;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}\n","string","init","color","rotation-x","bind","TresPlaneGeometry","110562afgeHq","trace","stateObject","length","AdditiveBlending","shaderCircleWave","72jvWAHZ","207302EplmxF","wrapS","action","uniforms","#000000","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","function *\\( *\\)","88JGeEtb","value","4XsLKqV"];return(C=function(){return n})()}!function(){I(this,(function(){const n=T,t=new RegExp(n(215)),e=new RegExp(n(214),"i"),o=P(n(197));t[n(237)](o+n(230))&&e.test(o+"input")?P():o("0")}))()}();const M=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[T(232)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function T(n,t){const e=C();return(T=function(n,t){return e[n-=195]})(n,t)}M(void 0,(function(){const n=T,t=function(){const n=T;let t;try{t=Function(n(229)+'{}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t[n(247)]=t[n(247)]||{},o=[n(228),n(251),"info",n(223),n(246),n(234),n(203)];for(let r=0;r<o[n(205)];r++){const t=M.constructor.prototype[n(200)](M),a=o[r],c=e[a]||t;t[n(244)]=M[n(200)](M),t[n(235)]=c[n(235)][n(200)](c),e[a]=t}}))();const j=[x(199),x(219)],D=i({__name:x(207),props:{color:{default:x(238)},colorDark:{default:x(213)},speed:{default:1},scale:{default:2}},async setup(e){const o=x;let r,i;const h=e,k=s(),{onLoop:w}=n();w((({delta:n})=>{const t=T;k[t(217)]&&(k.value[t(241)][t(212)].uTime.value+=n*h.speed)}));const S=([r,i]=u((()=>t(["./plugins/floor/image/scan.png"]))),r=await r,i(),r);S[o(210)]=a[o(225)],S[o(221)]=a[o(225)];const y=l({side:a[o(236)],transparent:!0,blending:a[o(206)],flatShading:!0,depthTest:!1,uniforms:{uTime:{type:"f",value:0},uScanTex:{type:"t",value:S},uScanColor:{type:"v3",value:new(a[o(226)])(h[o(198)])},uScanColorDark:{type:"v3",value:new c(h[o(248)])}},vertexShader:o(195),fragmentShader:"\n#define uScanOrigin vec3(0.,0.,0.)\n#define uScanWaveRatio1 3.2\n#define uScanWaveRatio2 2.8\n\nuniform float uTime;\nuniform sampler2D uScanTex;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nuniform vec3 uScanColor;\nuniform vec3 uScanColorDark;\n\nfloat circleWave(vec3 p,vec3 origin,float distRatio){\n    float t=uTime;\n    float dist=distance(p,origin)*distRatio;\n    float radialMove=fract(dist-t);\n    float fadeOutMask=1.-smoothstep(1.,3.,dist);\n    radialMove*=fadeOutMask;\n    float cutInitialMask=1.-step(t,dist);\n    radialMove*=cutInitialMask;\n    return radialMove;\n}\n\nvec3 getScanColor(vec3 worldPos,vec2 uv,vec3 col){\n    // mask\n    float scanMask=texture(uScanTex,uv).r;\n    // waves\n    float cw=circleWave(worldPos,uScanOrigin,uScanWaveRatio1);\n    float cw2=circleWave(worldPos,uScanOrigin,uScanWaveRatio2);\n    // scan\n    float mask1=smoothstep(.3,0.,1.-cw);\n    mask1*=(1.+scanMask*.7);\n    \n    float mask2=smoothstep(.07,0.,1.-cw2)*.8;\n    mask1+=mask2;\n    \n    float mask3=smoothstep(.09,0.,1.-cw)*1.5;\n    mask1+=mask3;\n\n    // color\n    vec3 scanCol=mix(uScanColorDark,uScanColor,mask1);\n    col=mix(col,scanCol,mask1);\n    \n    return col;\n\t\t// return vec3(cw);\n\t\t// return vec3(scanMask);\n\t\t// return worldPos;\n\t\t// return vec3(mask1);\n\t\t// return scanCol;\n}\n\nvoid main()\n{\n    vec3 col=vec3(0.);\n    col=getScanColor(vPosition,vUv*10.0,col);\n    gl_FragColor=vec4(col,1.);\n}\n"});return f((()=>{const n=o;k[n(217)]&&(k[n(217)][n(241)][n(212)][n(240)][n(217)]=new c(h.color),k[n(217)][n(241)].uniforms[n(222)].value=new c(h[n(248)]))})),(n,t)=>{const e=o;return p(),v(e(231),{ref_key:"tmRef",ref:k,"rotation-x":-Math.PI/2,scale:n[e(219)]},[t[0]||(t[0]=d(e(201),{args:[1,1]},null,-1)),d("TresShaderMaterial",m(g(y)),null,16)],8,j)}}});function P(n){function t(n){const e=T;if(typeof n===e(196))return function(n){}[e(239)](e(224))[e(232)]("counter");1!==(""+n/n)[e(205)]||n%20==0?function(){return!0}[e(239)](e(233)+e(249))[e(220)](e(211)):function(){return!1}[e(239)](e(233)+"gger")[e(232)](e(204)),t(++n)}try{if(n)return t;t(0)}catch(e){}}!function(n,t){const e=A,o=z();for(;;)try{if(998334===-parseInt(e(144))/1*(-parseInt(e(139))/2)+-parseInt(e(111))/3+parseInt(e(127))/4+parseInt(e(134))/5+-parseInt(e(106))/6*(-parseInt(e(120))/7)+parseInt(e(125))/8+-parseInt(e(126))/9*(parseInt(e(146))/10))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const W=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){W(this,(function(){const n=A,t=new RegExp(n(129)),e=new RegExp(n(115),"i"),o=O(n(112));t[n(123)](o+n(130))&&e[n(123)](o+n(110))?O():o("0")}))()}();const R=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function A(n,t){const e=z();return(A=function(n,t){return e[n-=104]})(n,t)}function z(){const n=["1390kMDHxX","addBinding","stateObject","TresCanvas","#000000","exception","trace","console","圈渐变色","4013286RrQZna","return (function() ","while (true) {}","#ffffff","input","2620845MYXbck","init","warn","prototype","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","圈颜色","debu","length","bind","14QKLdCz","colorDark","#201919","test","string","2235552PoikYP","110682adKhHA","4737500MTULGH","call","function *\\( *\\)","chain","action","toString","apply","3527115wJIrXW","color","speed","info","constructor","18zVtbQB",'{}.constructor("return this")( )',"scale","counter","gger","8263EIsXQU","log"];return(z=function(){return n})()}R(void 0,(function(){const n=A,t=function(){const n=A;let t;try{t=Function(n(107)+n(140)+");")()}catch(e){t=window}return t}(),e=t.console=t[n(104)]||{},o=[n(145),n(113),n(137),"error",n(151),"table",n(152)];for(let r=0;r<o.length;r++){const t=R.constructor[n(114)][n(119)](R),a=o[r],c=e[a]||t;t.__proto__=R.bind(R),t.toString=c[n(132)].bind(c),e[a]=t}}))();const E=i({__name:"circleWave",setup(n){const t=A,a=l({reflectivity:.1,showGridHelper:!1,scale:1}),c=l({color:t(109),colorDark:t(150),speed:1,scale:2}),i=new o({title:"shaderCircleWave地面",expanded:!0});return i[t(147)](c,t(135),{label:t(116)}),i[t(147)](c,t(121),{label:t(105)}),i[t(147)](c,t(136),{label:"速度",min:.1,max:5,step:.1}),i.addBinding(c,t(141),{label:"大小",min:.1,max:10,step:.1}),(n,o)=>{const i=t,s=h(i(149));return p(),k(s,{clearColor:i(122),"window-size":""},{default:w((()=>[o[0]||(o[0]=d("TresPerspectiveCamera",{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1)),S(y(e),{enableDamping:""}),o[1]||(o[1]=d("TresAmbientLight",{intensity:6},null,-1)),(p(),k(_,null,{default:w((()=>[S(D,m(g(c)),null,16)])),_:1})),(p(),k(_,null,{default:w((()=>[S(r,b({position:[0,-.5,0]},a),null,16)])),_:1}))])),_:1})}}});function O(n){function t(n){const e=A;if(typeof n===e(124))return function(n){}.constructor(e(108))[e(133)](e(142));1!==(""+n/n)[e(118)]||n%20==0?function(){return!0}[e(138)](e(117)+"gger")[e(128)](e(131)):function(){return!1}[e(138)](e(117)+e(143))[e(133)](e(148)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{E as default};