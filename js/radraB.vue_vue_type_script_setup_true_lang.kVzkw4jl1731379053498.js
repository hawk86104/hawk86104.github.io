import{b as n,e as t}from"./@tresjs.bLKO3xyw1731379053498.js";import{d as o,a6 as e,r,X as i,a3 as a,o as s,D as u,J as c,m as l,u as f,b as p,w as d,aj as g,ak as h}from"./@vue.-THQH3GC1731379053498.js";import{aB as v,a0 as m,C as y,M as x,ci as w,V as _}from"./three.bXjbKLxC1731379053498.js";function M(n,t){const o=k();return(M=function(n,t){return o[n-=117]})(n,t)}const I=M;!function(n,t){const o=M,e=k();for(;;)try{if(645127===-parseInt(o(155))/1*(-parseInt(o(150))/2)+parseInt(o(142))/3+parseInt(o(164))/4*(parseInt(o(138))/5)+parseInt(o(168))/6*(-parseInt(o(122))/7)+parseInt(o(147))/8*(parseInt(o(151))/9)+-parseInt(o(143))/10*(parseInt(o(171))/11)+parseInt(o(166))/12*(-parseInt(o(123))/13))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const b=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[M(136)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){b(this,(function(){const n=M,t=new RegExp(n(118)),o=new RegExp(n(153),"i"),e=T("init");t.test(e+n(156))&&o[n(128)](e+n(144))?T():e("0")}))()}();const A=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[M(136)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();A(void 0,(function(){const n=M,t=function(){const n=M;let t;try{t=Function(n(161)+'{}.constructor("return this")( ));')()}catch(o){t=window}return t}(),o=t.console=t[n(137)]||{},e=["log",n(170),n(119),n(145),n(149),n(148),n(131)];for(let r=0;r<e[n(139)];r++){const t=A[n(141)][n(165)].bind(A),i=e[r],a=o[i]||t;t[n(160)]=A[n(133)](A),t[n(140)]=a[n(140)][n(133)](a),o[i]=t}}))();const F=[I(157),I(158)],P=[I(121)],R=o({__name:I(125),props:{color:{default:I(169)},position:{default:[0,0,0]},scale:{default:.1},img:{},offset:{default:[.344,.394]},foremost:{type:Boolean,default:!0},sizeAttenuation:{type:Boolean,default:!1}},async setup(t){const o=I;let p,d;const g=t,{map:h}=([p,d]=e((()=>n({map:g[o(117)]}))),p=await p,d(),p),v=r({color:g.color,transparent:!0,depthWrite:!1,sizeAttenuation:g[o(163)],toneMapped:!1,depthTest:!g.foremost}),m=i(null);return a((()=>{const n=o;m[n(162)]&&(m[n(162)][n(152)]=m[n(162)][n(152)].clone(),m[n(162)].geometry[n(132)](g[n(120)][0],g[n(120)][1],0))})),(n,t)=>{const e=o;return s(),u(e(159),{ref_key:e(129),ref:m,position:g[e(157)],scale:g[e(158)],renderOrder:e(167)},[c(e(126),l(v,{map:f(h)}),null,16,P)],8,F)}}});function T(n){function t(n){const o=M;if(typeof n===o(134))return function(n){}[o(141)](o(124))[o(136)]("counter");1!==(""+n/n)[o(139)]||n%20==0?function(){return!0}[o(141)](o(130)+o(127))[o(146)](o(154)):function(){return!1}[o(141)](o(130)+o(127))[o(136)](o(135)),t(++n)}try{if(n)return t;t(0)}catch(o){}}function k(){const n=["console","5VjuGuJ","length","toString","constructor","400833IFRAUf","4741070VcUsRA","input","error","call","40KaCVEw","table","exception","2QdLYiF","647478OmWqVN","geometry","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","action","607037xPNYaR","chain","position","scale","TresSprite","__proto__","return (function() ","value","sizeAttenuation","2341384sgHXyZ","prototype","12kvGndg","99999","503826pEFqiD","#fff","warn","22PhLkzE","img","function *\\( *\\)","info","offset","map","7yOViVC","109096XwEiDd","while (true) {}","buildingsMarkA","TresSpriteMaterial","gger","test","tsRef","debu","trace","translate","bind","string","stateObject","apply"];return(k=function(){return n})()}const S=E;function z(){const n=["\n\tuniform float uRadius;     \n  uniform float uTime;            \n  uniform float uSpeed; \n  uniform float uFollowWidth; \n  varying vec3 vPosition;\n\tuniform vec3 ncolor;\n  float calcAngle(vec3 oFrag){\n    float fragAngle;\n    const vec3 ox = vec3(1,0,0);\n    float dianji = oFrag.x * ox.x + oFrag.z*ox.z;\n    float oFrag_length = length(oFrag); // length是内置函数\n    float ox_length = length(ox); // length是内置函数\n    float yuxian = dianji / (oFrag_length * ox_length);\n    fragAngle = acos(yuxian);\n    fragAngle = degrees(fragAngle);\n    if(oFrag.z > 0.0) {\n      fragAngle = -fragAngle + 360.0;\n    }\n    float scanAngle = uTime * uSpeed - floor(uTime * uSpeed / 360.0) * 360.0;\n    float angle = scanAngle - fragAngle;\n    if(angle < 0.0){\n      angle = angle + 360.0;\n    }\n    return angle;\n  }\n  void main() {\n\t\t\t// length内置函数，取向量的长度\n\t\tif(length(vPosition) == 0.0 || length(vPosition) > uRadius-2.0){\n\t\t\tgl_FragColor = vec4( ncolor, 1.0 );\n\t\t} else {\n\t\t\tfloat angle = calcAngle(vPosition);\n\t\t\tif(angle < uFollowWidth){\n\t\t\t\t// 尾焰区域\n\t\t\t\tfloat opacity =  1.0 - angle / uFollowWidth; \n\t\t\t\tgl_FragColor = vec4( ncolor, 1.0 * opacity );  \n\t\t\t} else {\n\t\t\t\t// 其他位置的像素均为透明\n\t\t\t\tgl_FragColor = vec4( ncolor, 0.0 ); \n\t\t\t}\n\t\t}\n\t}\n  ","debu","position","1112HIxbxy","uniforms","radius","prototype","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","counter","error","TresShaderMaterial","value","645156ihrKnD","TresMesh","bind","2490873yEffvr","applyMatrix4","length","args","followWidth","4808817XYpkDn","log","5537357cmUXff","1075530cbTpZT","table","80zjkJms","uRadius","#ffff00","init","1195tbgZdQ","trace","exception","chain","TresCircleGeometry","constructor","action","color","console","warn","gger","test","8FPTkEo","__proto__","apply","stateObject",'{}.constructor("return this")( )',"while (true) {}","\n\tvarying vec3 vPosition;\n\tvoid main() {\n\t\tvPosition = position;\n\t\tvec4 modelPosition = modelMatrix * vec4(position, 1.0);\n\t\tvec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectionPosition = projectionMatrix * viewPosition;\n    gl_Position = projectionPosition;\n  }\n  ","toString","string","16364YeVAzc","44gdslwJ"];return(z=function(){return n})()}!function(n,t){const o=E,e=z();for(;;)try{if(444693===-parseInt(o(415))/1*(parseInt(o(442))/2)+-parseInt(o(432))/3+-parseInt(o(420))/4*(-parseInt(o(394))/5)+parseInt(o(429))/6+parseInt(o(439))/7+-parseInt(o(406))/8*(-parseInt(o(437))/9)+-parseInt(o(440))/10*(-parseInt(o(416))/11))break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const j=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o.apply(t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){j(this,(function(){const n=E,t=new RegExp("function *\\( *\\)"),o=new RegExp(n(424),"i"),e=B(n(393));t[n(405)](e+n(397))&&o[n(405)](e+"input")?B():e("0")}))()}();const C=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[E(408)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function E(n,t){const o=z();return(E=function(n,t){return o[n-=391]})(n,t)}C(void 0,(function(){const n=E;let t;try{t=Function("return (function() "+n(410)+");")()}catch(r){t=window}const o=t[n(402)]=t[n(402)]||{},e=[n(438),n(403),"info",n(426),n(396),n(441),n(395)];for(let i=0;i<e[n(434)];i++){const t=C[n(399)][n(423)][n(431)](C),r=e[i],a=o[r]||t;t[n(407)]=C[n(431)](C),t.toString=a[n(413)].bind(a),o[r]=t}}))();const W=[S(419)],Z=[S(435)],V=o({__name:"radraA",props:{position:{default:[0,0,0]},size:{default:300},radius:{default:240},color:{default:S(392)},opacity:{default:.9},speed:{default:300},followWidth:{default:220}},setup(n,{expose:o}){const e=S,r=n,{onLoop:i}=t(),l={value:0},f=p();i((({delta:n})=>{l.value+=n}));const w={transparent:!0,blending:v,depthWrite:!1,side:m,depthTest:!0,vertexShader:e(412),fragmentShader:e(417),uniforms:{uSpeed:{value:r.speed},uRadius:{value:r[e(422)]},uTime:l,uFollowWidth:{value:r[e(436)]},ncolor:{value:new y(r[e(401)])}}};d(f,((n,t)=>{const o=e;if(n&&void 0===t){const n=(new x).makeRotationX(-Math.PI/180*90);f[o(428)][o(433)](n)}}));const _=p();return a((()=>{const n=e;r[n(401)]&&(w.uniforms.ncolor[n(428)]=new y(r.color)),r.radius&&(w[n(421)][n(391)][n(428)]=r[n(422)])})),p(-Math.PI/180*90),o({MeshRef:_}),(n,t)=>{const o=e;return s(),u(o(430),{ref_key:"MeshRef",ref:_,position:r[o(419)]},[c(o(398),{ref_key:"TresCircleGeometryRef",ref:f,args:[r.size,1e3]},null,8,Z),c(o(427),g(h(w)),null,16)],8,W)}}});function B(n){function t(n){const o=E;if(typeof n===o(414))return function(n){}.constructor(o(411))[o(408)](o(425));1!==(""+n/n).length||n%20==0?function(){return!0}[o(399)](o(418)+o(404)).call(o(400)):function(){return!1}[o(399)]("debugger")[o(408)](o(409)),t(++n)}try{if(n)return t;t(0)}catch(o){}}const O=q;!function(n,t){const o=q,e=K();for(;;)try{if(654107===-parseInt(o(461))/1+-parseInt(o(467))/2*(-parseInt(o(459))/3)+parseInt(o(486))/4+-parseInt(o(472))/5+-parseInt(o(473))/6+parseInt(o(487))/7*(-parseInt(o(478))/8)+parseInt(o(441))/9)break;e.push(e.shift())}catch(r){e.push(e.shift())}}();const G=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[q(448)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();!function(){G(this,(function(){const n=q,t=new RegExp(n(435)),o=new RegExp(n(484),"i"),e=L(n(491));t[n(470)](e+"chain")&&o[n(470)](e+n(447))?L():e("0")}))()}();const J=function(){let n=!0;return function(t,o){const e=n?function(){if(o){const n=o[q(448)](t,arguments);return o=null,n}}:function(){};return n=!1,e}}();function K(){const n=["init","debu","\n\tvarying vec4 vPosition;\n  void main() {\n    vPosition = modelMatrix * vec4(position,1.0);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n  ","uColor","function *\\( *\\)","__proto__","max","TresTubeGeometryRef","uniforms","clone","8879040KJKuZO","table","maxRadius","#ffff00","computeBoundingBox","opacity","input","apply","height","makeScale","\n\tuniform vec3 uColor; // 光墙半径        \n  uniform vec3 uMax; \n  uniform vec3 uMin;\n  uniform mat4 modelMatrix; // 世界矩阵\n  varying vec4 vPosition; // 接收顶点着色传递进来的位置数据\n  void main() {\n    // 转世界坐标\n    vec4 uMax_world = modelMatrix * vec4(uMax,1.0);\n    vec4 uMin_world = modelMatrix * vec4(uMin,1.0);\n    // 根据像素点世界坐标的y轴高度,设置透明度\n    float opacity =1.0 - (vPosition.y - uMin_world.y) / (uMax_world.y -uMin_world.y) ; \n    gl_FragColor = vec4( uColor, opacity);\n  }\n  ","length","min","stateObject","value","radraB","gger","color","45ZJKspb","boundingBox","999306iaBqpW","info","return (function() ","TresShaderMaterial","warn","applyMatrix4","149722ouFTAO","error","constructor","test","log","280800KhMqty","2688414ffAkhE","call","bind","action","exception","2824oNusoi","copy","period","TresTubeGeometry","console","TresMesh","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","position","967856ANwlkM","3843wGuqnV","prototype","while (true) {}","radius"];return(K=function(){return n})()}J(void 0,(function(){const n=q;let t;try{t=Function(n(463)+'{}.constructor("return this")( ));')()}catch(r){t=window}const o=t[n(482)]=t[n(482)]||{},e=[n(471),n(465),n(462),n(468),n(477),n(442),"trace"];for(let i=0;i<e.length;i++){const t=J[n(469)][n(488)].bind(J),r=e[i],a=o[r]||t;t[n(436)]=J[n(475)](J),t.toString=a.toString.bind(a),o[r]=t}}))();const X=[O(485)],$=["args"];function q(n,t){const o=K();return(q=function(n,t){return o[n-=433]})(n,t)}const D=o({__name:O(456),props:{position:{default:[0,0,0]},radius:{default:10},maxRadius:{default:200},color:{default:O(444)},opacity:{default:.5},period:{default:2},height:{default:100}},setup(n,{expose:o}){const e=O,r=n,i=p(),l=p(1),f=p(.1),v={color:r[e(458)],opacity:r[e(446)],transparent:!0,depthWrite:!1,depthTest:!0,side:m,vertexShader:e(433),fragmentShader:e(451),uniforms:{uMax:l,uMin:f,uColor:{value:new y(r.color)}}},M=p();let I=null;d(M,((n,t)=>{const o=e;n&&void 0===t&&(M[o(455)][o(445)](),l[o(455)]=M.value[o(460)][o(437)],f[o(455)]=M[o(455)].boundingBox[o(453)],I=i[o(455)].scale[o(440)]())}));const b=p(new w(new _(0,0,0),new _(0,r[e(449)],0)));a((()=>{const n=e;r[n(458)]&&(v[n(439)][n(434)][n(455)]=new y(r[n(458)]))}));const{onLoop:A}=t(),F={value:0};return A((({delta:n})=>{const t=e;F.value+=n;const o=(F[t(455)]%r[t(480)]/r.period*(r[t(443)]-r[t(490)])+r[t(490)])/r[t(490)],a=(new x)[t(450)](o,1,o);I&&(i.value.scale[t(479)](I[t(440)]()[t(466)](a)),i[t(455)].updateMatrix())})),o({MeshRef:i}),(n,t)=>{const o=e;return s(),u(o(483),{ref_key:"MeshRef",ref:i,position:r[o(485)],renderOrder:2e3},[c(o(481),{ref_key:o(438),ref:M,args:[b[o(455)],20,r[o(490)],100,!1]},null,8,$),c(o(464),g(h(v)),null,16)],8,X)}}});function L(n){function t(n){const o=q;if("string"==typeof n)return function(n){}[o(469)](o(489))[o(448)]("counter");1!==(""+n/n)[o(452)]||n%20==0?function(){return!0}[o(469)](o(492)+o(457))[o(474)](o(476)):function(){return!1}[o(469)](o(492)+o(457))[o(448)](o(454)),t(++n)}try{if(n)return t;t(0)}catch(o){}}export{R as _,V as a,D as b};