import{c0 as n,ak as t,am as e,C as o,aB as a,a as r}from"./three.VhLXWX0H1735906732968.js";import{e as s,g as i,F as c,U as l}from"./@tresjs.XlmHwCPa1735906732968.js";import{d as u,b as d,w as f,e as m,o as p,D as h,j as v,u as g,g as w,J as b,aj as M,ak as y,F as C}from"./@vue.yG49nQHr1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";const P=A;!function(n,t){const e=A,o=S();for(;;)try{if(668850===parseInt(e(272))/1*(-parseInt(e(246))/2)+parseInt(e(228))/3*(parseInt(e(259))/4)+parseInt(e(260))/5*(-parseInt(e(254))/6)+parseInt(e(214))/7*(-parseInt(e(258))/8)+parseInt(e(226))/9+-parseInt(e(266))/10*(parseInt(e(218))/11)+parseInt(e(255))/12)break;o.push(o.shift())}catch(a){o.push(o.shift())}}();const x=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[A(217)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){x(this,(function(){const n=A,t=new RegExp(n(274)),e=new RegExp(n(243),"i"),o=_(n(267));t[n(284)](o+n(280))&&e[n(284)](o+n(235))?_():o("0")}))()}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[A(217)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();z(void 0,(function(){const n=A,t=function(){const n=A;let t;try{t=Function(n(215)+n(238)+");")()}catch(e){t=window}return t}(),e=t[n(219)]=t[n(219)]||{},o=[n(253),n(283),n(229),n(281),n(264),n(240),n(224)];for(let a=0;a<o[n(248)];a++){const t=z[n(227)].prototype.bind(z),r=o[a],s=e[r]||t;t.__proto__=z[n(276)](z),t[n(282)]=s[n(282)].bind(s),e[r]=t}}))();const I=["position","a-scale",P(256),P(262)];function A(n,t){const e=S();return(A=function(n,t){return e[n-=214]})(n,t)}function S(){const n=["geometry","4309101DkcAyH","constructor","68109dluECI","info","forEach","bufferRef","value","TresShaderMaterial","clone","input","randomnessPower","TresBufferGeometry",'{}.constructor("return this")( )',"cos","table","aScale","radius","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","position","string","40XUMPiU","TresPoints","length","material","gger","while (true) {}","insideColor","log","372IzzbES","19129428ebzdVp","color","TresPerspectiveCamera","64QqTmvZ","176OrUoLt","45635LyUWAI","random","a-randomness","keys","exception","#1b3984","10JKkaNh","init","lerp","black","count","call","31162MAOFtc","counter","function *\\( *\\)","branches","bind","action","TresCanvas","outsideColor","chain","error","toString","warn","test","sin","285418RjtHln","return (function() ","uTime","apply","9764524dNtipd","console","size","setAttribute","uniforms","debu","trace"];return(S=function(){return n})()}const T=u({__name:"galaxy",setup(u){const x=P,z={clearColor:x(269),shadows:!0,alpha:!1,shadowMapType:n,outputColorSpace:t,toneMapping:e,windowSize:!0},A={count:3e4,size:20,radius:5,branches:5,spin:4,randomness:.13,randomnessPower:7.5,insideColor:"#b5f28d",outsideColor:"#1b3984"},S=new o(A[x(252)]),T=new o(A.outsideColor),_=new Float32Array(3*A[x(270)]),j=new Float32Array(3*A.count),F=new Float32Array(A[x(270)]),k=new Float32Array(3*A[x(270)]);for(let n=0;n<A.count;n++){const t=3*n,e=Math[x(261)]()*A.radius,o=n%A[x(275)]*Math.PI*2/A.branches;_[t]=Math[x(239)](o)*e,_[t+1]=0,_[t+2]=Math.sin(o)*e;const a=Math[x(261)]()**A[x(236)]*(Math[x(261)]()<.5?-1:1),r=Math[x(261)]()**A[x(236)]*(Math[x(261)]()<.5?-1:1),s=Math.random()**A[x(236)]*(Math[x(261)]()<.5?-1:1);k[t]=a,k[t+1]=r,k[t+2]=s;const i=S.clone();i[x(268)](T,e/A.radius),j[t+0]=i.r,j[t+1]=i.g,j[t+2]=i.b,F[n]=Math[x(261)]()}const R={transparent:!0,depthWrite:!1,blending:a,vertexColors:!0,vertexShader:"uniform float uSize;\nuniform float uTime;\n\nattribute float aScale;\nattribute vec3 aRandomness;\n\nvarying vec3 vColor;\n\nvoid main() {\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\n    \n    float angle = atan(modelPosition.x, modelPosition.z);\n    float distanceToCenter = length(modelPosition.xz);\n    float angleOffset = (1.0 / distanceToCenter) * uTime * 0.2;\n    angle += angleOffset;\n\n    modelPosition.x = distanceToCenter * cos(angle);\n    modelPosition.z = distanceToCenter * sin(angle);\n\n    \n    modelPosition.xyz += aRandomness;\n\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    gl_PointSize = uSize * aScale;\n\n    \n    gl_PointSize *= ( 1.0 / - viewPosition.z);\n\n    \n    vColor = color;\n\n}",fragmentShader:"varying vec3 vColor;\n\nvoid main()\n{\n    \n    float strength = distance(gl_PointCoord, vec2(0.5));\n    strength = 1.0 - strength;\n    strength = pow(strength, 5.0);\n\n    \n    vec3 color = mix(vec3(0.0), vColor, strength);\n    gl_FragColor = vec4(color, 1.0);\n}",uniforms:{uTime:{value:0},uSize:{value:A[x(220)]}}};const O=d(null),{onLoop:E}=s();E((({elapsed:n})=>{const t=x;O[t(232)]&&(O[t(232)][t(249)][t(222)][t(216)][t(232)]=n)}));const{count:U,size:L,radius:Z,branches:B,spin:D,randomness:H,randomnessPower:J,insideColor:N,outsideColor:W}=i({count:{value:3e4,min:0,max:1e5,step:1},size:{value:20,min:.01,max:40,step:1},radius:{value:5,min:.1,max:20,step:.01},branches:{value:5,min:2,max:10,step:1},spin:{value:4,min:-5,max:5,step:.01},randomness:{value:.13,min:.1,max:.2,step:.01},randomnessPower:{value:7.5,min:1,max:10,step:.001},insideColor:"#b5f28d",outsideColor:x(265)});return f([U[x(232)],L[x(232)],Z[x(232)],B.value,D[x(232)],H[x(232)],J[x(232)],N[x(232)],W[x(232)]],(n=>{const t=x;n[t(230)](((n,e)=>{const o=t;A[Object[o(263)](A)[e]]=n[o(232)]})),function(){const n=x;if(O.value){const t=new o(A.insideColor),e=new o(A[n(279)]),a=new Float32Array(3*A[n(270)]),s=new Float32Array(3*A.count),i=new Float32Array(A[n(270)]),c=new Float32Array(3*A[n(270)]);for(let o=0;o<A[n(270)];o++){const r=3*o,l=Math[n(261)]()*A[n(242)],u=o%A[n(275)]*Math.PI*2/A[n(275)];a[r]=Math[n(239)](u)*l,a[r+1]=0,a[r+2]=Math[n(285)](u)*l;const d=Math[n(261)]()**A[n(236)]*(Math[n(261)]()<.5?-1:1),f=Math[n(261)]()**A[n(236)]*(Math.random()<.5?-1:1),m=Math[n(261)]()**A[n(236)]*(Math[n(261)]()<.5?-1:1);c[r]=d,c[r+1]=f,c[r+2]=m;const p=t[n(234)]();p[n(268)](e,l/A[n(242)]),s[r+0]=p.r,s[r+1]=p.g,s[r+2]=p.b,i[o]=Math[n(261)]()}O[n(232)][n(225)][n(221)](n(244),new r(a,3)),O.value[n(225)][n(221)]("aRandomness",new r(c,3)),O[n(232)].geometry.setAttribute(n(256),new r(s,3)),O[n(232)].geometry[n(221)](n(241),new r(i,1))}}()})),(n,t)=>{const e=x,o=m(e(278));return p(),h(C,null,[v(g(c)),v(o,M(y(z)),{default:w((()=>[t[0]||(t[0]=b(e(257),{position:[3,3,3]},null,-1)),b(e(247),{ref_key:e(231),ref:O},[b(e(237),{position:[g(_),3],"a-scale":[g(F),1],color:[g(j),3],"a-randomness":[g(k),3]},null,8,I),b(e(233),M(y(R)),null,16)],512),v(g(l))])),_:1},16)],64)}}});function _(n){function t(n){const e=A;if(typeof n===e(245))return function(n){}.constructor(e(251))[e(217)](e(273));1!==(""+n/n).length||n%20==0?function(){return!0}[e(227)](e(223)+e(250))[e(271)](e(277)):function(){return!1}[e(227)]("debu"+e(250)).apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{T as default};