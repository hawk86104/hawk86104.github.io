import{U as n,z as t,Y as e}from"./@tresjs.QjD7q5YC1729821967160.js";import{P as o}from"./tweakpane.yHWGBmom1729821967160.js";import{_ as r}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.iAW5Ex2N1729821967160.js";import{_ as a,C as c}from"./three.x4oqFJNT1729821967160.js";import{d as s,b as i,a4 as u,r as l,a3 as f,o as p,E as v,L as d,aj as m,ak as g,e as h,f as w,g as k,j as y,u as S,al as I,m as _}from"./@vue.JNsx1iN61729821967160.js";import"./@vueuse.HMG_JnUD1729821967160.js";import"./all.three.x-72c36p1729821967160.js";import"./oimophysics.x0jH7fze1729821967160.js";const x=j;!function(n,t){const e=j,o=W();for(;;)try{if(789199===-parseInt(e(461))/1*(-parseInt(e(471))/2)+-parseInt(e(479))/3+-parseInt(e(477))/4*(-parseInt(e(460))/5)+parseInt(e(446))/6+parseInt(e(454))/7*(-parseInt(e(435))/8)+parseInt(e(438))/9*(-parseInt(e(449))/10)+parseInt(e(451))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const b=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[j(431)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();!function(){b(this,(function(){const n=j,t=new RegExp("function *\\( *\\)"),e=new RegExp(n(459),"i"),o=P("init");t[n(444)](o+n(443))&&e[n(444)](o+n(433))?P():o("0")}))()}();const C=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[j(431)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();C(void 0,(function(){const n=j;let t;try{t=Function(n(466)+n(458)+");")()}catch(r){t=window}const e=t[n(465)]=t[n(465)]||{},o=["log",n(469),n(476),n(485),n(470),n(436),"trace"];for(let a=0;a<o.length;a++){const t=C[n(439)].prototype[n(478)](C),r=o[a],c=e[r]||t;t[n(457)]=C.bind(C),t[n(467)]=c[n(467)][n(478)](c),e[r]=t}}))();const T=[x(480),x(468)],M=d("TresPlaneGeometry",{args:[1,1]},null,-1);function j(n,t){const e=W();return(j=function(n,t){return e[n-=431]})(n,t)}const D=s({__name:x(445),props:{color:{default:x(463)},colorDark:{default:x(440)},speed:{default:1},scale:{default:2}},async setup(e){const o=x;let r,s;const h=e,w=i(),{onLoop:k}=n();k((({delta:n})=>{const t=j;w[t(484)]&&(w[t(484)].material.uniforms[t(483)].value+=n*h[t(474)])}));const y=([r,s]=u((()=>t(["./plugins/floor/image/scan.png"]))),r=await r,s(),r);y[o(462)]=a[o(481)],y[o(432)]=a[o(481)];const S=l({side:a[o(473)],transparent:!0,blending:a[o(434)],flatShading:!0,depthTest:!1,uniforms:{uTime:{type:"f",value:0},uScanTex:{type:"t",value:y},uScanColor:{type:"v3",value:new c(h.color)},uScanColorDark:{type:"v3",value:new(a[o(456)])(h.colorDark)}},vertexShader:o(442),fragmentShader:o(450)});return f((()=>{const n=o;w[n(484)]&&(w[n(484)][n(472)][n(448)][n(453)][n(484)]=new(a[n(456)])(h.color),w[n(484)][n(472)].uniforms[n(447)][n(484)]=new(a[n(456)])(h.colorDark))})),(n,t)=>{const e=o;return p(),v(e(437),{ref_key:e(464),ref:w,"rotation-x":-Math.PI/2,scale:n[e(468)]},[M,d(e(486),m(g(S)),null,16)],8,T)}}});function P(n){function t(n){const e=j;if(typeof n===e(455))return function(n){}.constructor(e(482))[e(431)](e(475));1!==(""+n/n).length||n%20==0?function(){return!0}[e(439)]("debu"+e(441)).call(e(452)):function(){return!1}.constructor("debugger").apply("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}function W(){const n=["2441205uwlPyK","5vLKQaT","wrapS","#ffffff","tmRef","console","return (function() ","toString","scale","warn","exception","235282ztKXTT","material","DoubleSide","speed","counter","info","8EPpgGA","bind","3695151SKBxej","rotation-x","RepeatWrapping","while (true) {}","uTime","value","error","TresShaderMaterial","apply","wrapT","input","AdditiveBlending","71464WZfyhQ","table","TresMesh","12150027tAjKzO","constructor","#000000","gger","\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvoid main(){\n\tvUv=uv;\n\tvPosition=position;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}\n","chain","test","shaderCircleWave","782904MognVG","uScanColorDark","uniforms","10mNMCZU","\n#define uScanOrigin vec3(0.,0.,0.)\n#define uScanWaveRatio1 3.2\n#define uScanWaveRatio2 2.8\n\nuniform float uTime;\nuniform sampler2D uScanTex;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nuniform vec3 uScanColor;\nuniform vec3 uScanColorDark;\n\nfloat circleWave(vec3 p,vec3 origin,float distRatio){\n    float t=uTime;\n    float dist=distance(p,origin)*distRatio;\n    float radialMove=fract(dist-t);\n    float fadeOutMask=1.-smoothstep(1.,3.,dist);\n    radialMove*=fadeOutMask;\n    float cutInitialMask=1.-step(t,dist);\n    radialMove*=cutInitialMask;\n    return radialMove;\n}\n\nvec3 getScanColor(vec3 worldPos,vec2 uv,vec3 col){\n    // mask\n    float scanMask=texture(uScanTex,uv).r;\n    // waves\n    float cw=circleWave(worldPos,uScanOrigin,uScanWaveRatio1);\n    float cw2=circleWave(worldPos,uScanOrigin,uScanWaveRatio2);\n    // scan\n    float mask1=smoothstep(.3,0.,1.-cw);\n    mask1*=(1.+scanMask*.7);\n    \n    float mask2=smoothstep(.07,0.,1.-cw2)*.8;\n    mask1+=mask2;\n    \n    float mask3=smoothstep(.09,0.,1.-cw)*1.5;\n    mask1+=mask3;\n\n    // color\n    vec3 scanCol=mix(uScanColorDark,uScanColor,mask1);\n    col=mix(col,scanCol,mask1);\n    \n    return col;\n\t\t// return vec3(cw);\n\t\t// return vec3(scanMask);\n\t\t// return worldPos;\n\t\t// return vec3(mask1);\n\t\t// return scanCol;\n}\n\nvoid main()\n{\n    vec3 col=vec3(0.);\n    col=getScanColor(vPosition,vUv*10.0,col);\n    gl_FragColor=vec4(col,1.);\n}\n","26883846WZOaQo","action","uScanColor","602DNmgyh","string","Color","__proto__",'{}.constructor("return this")( )',"\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return(W=function(){return n})()}const R=U;!function(n,t){const e=U,o=E();for(;;)try{if(714036===-parseInt(e(412))/1+-parseInt(e(428))/2*(parseInt(e(432))/3)+-parseInt(e(415))/4*(-parseInt(e(418))/5)+parseInt(e(445))/6*(-parseInt(e(403))/7)+-parseInt(e(442))/8*(parseInt(e(407))/9)+-parseInt(e(405))/10*(parseInt(e(429))/11)+parseInt(e(408))/12*(parseInt(e(422))/13))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const O=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,o}}();function U(n,t){const e=E();return(U=function(n,t){return e[n-=401]})(n,t)}!function(){O(this,(function(){const n=U,t=new RegExp(n(436)),e=new RegExp(n(434),"i"),o=B("init");t.test(o+"chain")&&e[n(410)](o+"input")?B():o("0")}))()}();const z=function(){let n=!0;return function(t,e){const o=n?function(){if(e){const n=e[U(411)](t,arguments);return e=null,n}}:function(){};return n=!1,o}}();z(void 0,(function(){const n=U;let t;try{t=Function(n(448)+n(406)+");")()}catch(r){t=window}const e=t.console=t[n(414)]||{},o=[n(430),"warn",n(431),n(427),"exception",n(444),n(417)];for(let a=0;a<o[n(409)];a++){const t=z[n(435)][n(404)][n(424)](z),r=o[a],c=e[r]||t;t[n(413)]=z[n(424)](z),t.toString=c[n(419)].bind(c),e[r]=t}}))();const A=d(R(423),{position:[3,3,0],fov:45,near:.1,far:1e4},null,-1),Z=d(R(446),{intensity:6},null,-1);function E(){const n=["shaderCircleWave地面","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","constructor","function *\\( *\\)","debu","addBinding","gger","circleWave","TresCanvas","16gCBfhm","#ffffff","table","45858QhaloT","TresAmbientLight","#201919","return (function() ","color","scale","圈颜色","colorDark","847kUoSsY","prototype","10UVatJe",'{}.constructor("return this")( )',"1433349YCKZbs","2403396xXdtIJ","length","test","apply","1290139QIPstG","__proto__","console","640Ixtmrq","action","trace","6640ytgWmr","toString","speed","圈渐变色","325lxuDgt","TresPerspectiveCamera","bind","string","while (true) {}","error","38txhXxD","10359371CReqoO","log","info","162678xOYwkF"];return(E=function(){return n})()}const K=s({__name:R(440),setup(n){const t=R,a=l({reflectivity:.1,showGridHelper:!1,scale:1}),c=l({color:t(443),colorDark:"#000000",speed:1,scale:2}),s=new o({title:t(433),expanded:!0});return s[t(438)](c,t(449),{label:t(401)}),s[t(438)](c,t(402),{label:t(421)}),s[t(438)](c,t(420),{label:"速度",min:.1,max:5,step:.1}),s[t(438)](c,t(450),{label:"大小",min:.1,max:10,step:.1}),(n,o)=>{const s=t,i=h(s(441));return p(),w(i,{clearColor:s(447),"window-size":""},{default:k((()=>[A,y(S(e),{enableDamping:""}),Z,(p(),w(I,null,{default:k((()=>[y(D,m(g(c)),null,16)])),_:1})),(p(),w(I,null,{default:k((()=>[y(r,_({position:[0,-.5,0]},a),null,16)])),_:1}))])),_:1})}}});function B(n){function t(n){const e=U;if(typeof n===e(425))return function(n){}.constructor(e(426)).apply("counter");1!==(""+n/n)[e(409)]||n%20==0?function(){return!0}[e(435)]("debu"+e(439)).call(e(416)):function(){return!1}[e(435)](e(437)+e(439))[e(411)]("stateObject"),t(++n)}try{if(n)return t;t(0)}catch(e){}}export{K as default};