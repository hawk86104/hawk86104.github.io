import{_ as n,a3 as t}from"./three.1FILWcBb1734746792122.js";import{e,b as o}from"./@tresjs.vA_UT8oy1734746792122.js";import{d as r,a6 as a,w as i,o as u,D as s,J as l,aj as c,ak as f}from"./@vue.-THQH3GC1734746792122.js";const p=x;!function(n,t){const e=x,o=m();for(;;)try{if(567893===parseInt(e(247))/1+parseInt(e(232))/2*(parseInt(e(256))/3)+-parseInt(e(262))/4+parseInt(e(265))/5+parseInt(e(266))/6*(parseInt(e(246))/7)+-parseInt(e(270))/8+-parseInt(e(241))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const v=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(275)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){v(this,(function(){const n=x,t=new RegExp(n(233)),e=new RegExp(n(273),"i"),o=y(n(264));t.test(o+"chain")&&e[n(237)](o+"input")?y():o("0")}))()}();const g=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[x(275)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function m(){const n=["TresShaderMaterial","color","uniforms","1484152doRYRh","table","gger","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresCircleGeometry","apply","wrapS","counter","stateObject","value","args","__proto__","LinearMipmapLinearFilter","exception","2QoRPJo","function *\\( *\\)","call","string","length","test","wrapT","log","debu","3066174hHwcWm","Color","LinearSRGBColorSpace","rotateX","TresGroup","6461686zPxrAI","159834NWhKsi","#FFFFFF","info","LinearFilter","size","colorSpace","console","constructor","warn","315213QJlXkx","RepeatWrapping","minFilter","DoubleSide","toString",'{}.constructor("return this")( )',"2007628duXsyd","bind","init","2040010rmiMKH","6cgLMhK"];return(m=function(){return n})()}g(void 0,(function(){const n=x;let t;try{t=Function("return (function() "+n(261)+");")()}catch(r){t=window}const e=t[n(253)]=t.console||{},o=[n(239),n(255),n(249),"error",n(283),n(271),"trace"];for(let a=0;a<o[n(236)];a++){const t=g.constructor.prototype[n(263)](g),r=o[a],i=e[r]||t;t[n(281)]=g.bind(g),t[n(260)]=i.toString[n(263)](i),e[r]=t}}))();const d=[p(244)],h=[p(280)];function x(n,t){const e=m();return(x=function(n,t){return e[n-=232]})(n,t)}const w=r({__name:"digitalGround",props:{size:{default:10},speed:{default:1},color:{default:p(248)}},async setup(r){const v=p;let g,m;const x=r,w=([g,m]=a((()=>o(["./plugins/floor/image/digitalGround1.png","./plugins/floor/image/digitalGround2.png","./plugins/floor/image/digitalGround3.png","./plugins/floor/image/digitalGround4.png"]))),g=await g,m(),g);for(let e=0;e<w[v(236)];e++)w[e][v(252)]=n[v(243)],w[e][v(276)]=t,w[e][v(238)]=n[v(257)],w[e].magFilter=n[v(250)],w[e][v(258)]=n[v(282)];const y={uniforms:{time:{value:0},radius:{value:x[v(251)]},uColor:{value:new(n[v(242)])(x.color)},texture0:{value:w[0]},texture1:{value:w[1]},texture2:{value:w[2]},texture3:{value:w[3]}},vertexShader:"\n        varying vec3 vPosition;\n        varying vec2 vUv;\n        void main(){\n            vPosition = position;\n            vUv = uv;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }\n    ",fragmentShader:"\n        uniform float time;\n        uniform float radius;\n\n        uniform sampler2D texture0;\n        uniform sampler2D texture1;\n        uniform sampler2D texture2;\n        uniform sampler2D texture3;\n\n        varying vec3 vPosition;\n        uniform vec3 uColor;\n        varying vec2 vUv;\n\n        float wave(float a, float l, float s, float second, float val) {\n            float PI = 3.141592653;\n            float wave = a * sin(- val * 2.0 * PI / l + second * s * 2.0 * PI / l);\n            return (wave + 1.0) / 2.0;\n        }\n        void main(){\n            vec4 basceColor = vec4(uColor, 1.0);\n            vec4 back = texture2D( texture0, vUv * 16.0);\n\n            vec4 ori1 = texture2D( texture1, vUv * 4.0); // 电子元件\n            vec4 ori2 = texture2D( texture2, vUv * 16.0 ); // 点\n            vec4 ori3 = texture2D( texture3, vUv * 16.0 ); // 网格\n\n            float length = length( vec2(vPosition.x, vPosition.y) );\n            // 应用波函数蒙版\n            float flag1 = wave(1.0, radius / 2.0, 45.0, time, length);\n            if (flag1 < 0.5) {\n                flag1 = 0.0;\n            }\n            ori1.a = ori1.a * (flag1 * 0.8 + 0.2);\n            float flag2 = wave(1.0, radius / 3.0, 30.0, time, length);\n            ori2.a = ori2.a * (flag2 * 0.8 + 0.2);\n            float flag3 = wave(1.0, 60.0, 20.0, time, length);\n            ori3.a = ori3.a * (flag3 * 2.0 - 1.5);\n            // 应用蒙版\n            float alpha = clamp(ori1.a + ori2.a + ori3.a + back.a * 0.01, 0.0, 1.0);\n            basceColor.a = alpha*2.0;\n\n            gl_FragColor = basceColor * clamp((2.0 - (length * 2.0 / radius)), 0.0, 1.0);\n        }\n    ",side:n[v(259)],transparent:!0};i((()=>x[v(268)]),(t=>{const e=v;y.uniforms.uColor[e(279)]=new(n[e(242)])(t)}));const{onLoop:b}=e();return b((({elapsed:n})=>{const t=v;y[t(269)].time[t(279)]=n/10*x.speed})),(n,t)=>{const e=v;return u(),s(e(245),null,[l("TresMesh",{rotateX:-Math.PI/2},[l(e(274),{args:[n.size]},null,8,h),l(e(267),c(f(y)),null,16)],8,d)])}}});function y(n){function t(n){const e=x;if(typeof n===e(235))return function(n){}[e(254)]("while (true) {}")[e(275)](e(277));1!==(""+n/n)[e(236)]||n%20==0?function(){return!0}[e(254)]("debu"+e(272))[e(234)]("action"):function(){return!1}.constructor(e(240)+e(272)).apply(e(278)),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{w as _};