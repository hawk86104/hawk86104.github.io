import{U as t,J as n,Y as e}from"./@tresjs.QjD7q5YC1729821967160.js";import{_ as o,C as r}from"./three.x4oqFJNT1729821967160.js";import{a as i,b as c}from"./index.rr4JiF8d1729821967160.js";import{P as s}from"./tweakpane.yHWGBmom1729821967160.js";import{d as a,w as u,o as l,E as p,j as f,m as d,u as v,L as y,r as x,e as m,f as h,g,aj as b,ak as w,al as z}from"./@vue.JNsx1iN61729821967160.js";import"./@vueuse.HMG_JnUD1729821967160.js";import"./three-stdlib.7oc1T0_b1729821967160.js";import"./@pmndrs.Bb7jBcbP1729821967160.js";import"./object-hash.nNsVfdic1729821967160.js";import"./@amap.Y4sQVtej1729821967160.js";import"./jszip.tCm-hQZR1729821967160.js";function _(t,n){const e=C();return(_=function(t,n){return e[t-=465]})(t,n)}const I=_;!function(t,n){const e=_,o=C();for(;;)try{if(364917===-parseInt(e(500))/1+parseInt(e(493))/2+parseInt(e(473))/3+-parseInt(e(495))/4+parseInt(e(478))/5+-parseInt(e(467))/6*(parseInt(e(508))/7)+parseInt(e(488))/8)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[_(510)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){j(this,(function(){const t=_,n=new RegExp(t(497)),e=new RegExp(t(491),"i"),o=S(t(480));n[t(512)](o+t(498))&&e[t(512)](o+t(472))?S():o("0")}))()}();const M=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[_(510)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function C(){const t=["string","879524NXAZUG","console","function *\\( *\\)","chain","warn","74656AhpbkM","gger","exception","DoubleSide",'{}.constructor("return this")( )',"error","trace","MeshPhysicalMaterial","4835222lgxqwi","bind","apply","length","test","#fff","time","6QsuZky","value","counter","return (function() ","info","input","1621539aUdnka","table","Color","debu","waterGlass","2244900NQdyhe","TresMesh","init","color","baseMaterial","vertexShader","call","rotation-x","constructor","frequency","1260088NTbYhu","toString","while (true) {}","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","amplitude","406392LyRfdX"];return(C=function(){return t})()}M(void 0,(function(){const t=_;let n;try{n=Function(t(470)+t(504)+");")()}catch(r){n=window}const e=n[t(496)]=n[t(496)]||{},o=["log",t(499),t(471),t(505),t(502),t(474),t(506)];for(let i=0;i<o[t(511)];i++){const n=M.constructor.prototype[t(509)](M),r=o[i],c=e[r]||n;n.__proto__=M[t(509)](M),n[t(489)]=c[t(489)][t(509)](c),e[r]=n}}))();const P=[I(485)],q=y("TresPlaneGeometry",{args:[1,1,64,64]},null,-1),N=a({__name:I(477),props:{color:{default:I(465)},amplitude:{default:.066},frequency:{default:5}},setup(e){const i=I,c=e,s={time:{type:"f",value:.1},amplitude:{type:"f",value:c[i(492)]},speed:{type:"f",value:.277},frequency:{type:"f",value:c[i(487)]}},a={side:o[i(503)],color:new r(c[i(481)]),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onLoop:y}=t();return y((({delta:t})=>{const n=i;s[n(466)][n(468)]+=t})),u((()=>c),(()=>{const t=i;a.color=new(o[t(475)])(c[t(481)]),s[t(492)].value=c[t(492)],s[t(487)][t(468)]=c.frequency}),{deep:!0}),(t,e)=>{const r=i;return l(),p(r(479),{"rotation-x":-Math.PI/2,"position-y":.1},[q,f(v(n),d(a,{baseMaterial:o[r(507)],vertexShader:v("uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n\treturn mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n\treturn 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n\tconst vec2 C=vec2(1./6.,1./3.);\n\tconst vec4 D=vec4(0.,.5,1.,2.);\n\t\n\t\n\tvec3 i=floor(v+dot(v,C.yyy));\n\tvec3 x0=v-i+dot(i,C.xxx);\n\t\n\t\n\tvec3 g=step(x0.yzx,x0.xyz);\n\tvec3 l=1.-g;\n\tvec3 i1=min(g.xyz,l.zxy);\n\tvec3 i2=max(g.xyz,l.zxy);\n\t\n\tvec3 x1=x0-i1+C.xxx;\n\tvec3 x2=x0-i2+C.yyy;\n\tvec3 x3=x0-D.yyy;\n\t\n\t\n\ti=mod289(i);\n\tvec4 p=permute(permute(permute(\n\t\t\t\ti.z+vec4(0.,i1.z,i2.z,1.))\n\t\t\t\t+i.y+vec4(0.,i1.y,i2.y,1.))\n\t\t\t\t+i.x+vec4(0.,i1.x,i2.x,1.));\n\t\t\t\t\n\t\t\t\tfloat n_=.142857142857;\n\t\t\t\tvec3 ns=n_*D.wyz-D.xzx;\n\t\t\t\t\n\t\t\t\tvec4 j=p-49.*floor(p*ns.z*ns.z);\n\t\t\t\t\n\t\t\t\tvec4 x_=floor(j*ns.z);\n\t\t\t\tvec4 y_=floor(j-7.*x_);\n\t\t\t\t\n\t\t\t\tvec4 x=x_*ns.x+ns.yyyy;\n\t\t\t\tvec4 y=y_*ns.x+ns.yyyy;\n\t\t\t\tvec4 h=1.-abs(x)-abs(y);\n\t\t\t\t\n\t\t\t\tvec4 b0=vec4(x.xy,y.xy);\n\t\t\t\tvec4 b1=vec4(x.zw,y.zw);\n\t\t\t\t\n\t\t\t\tvec4 s0=floor(b0)*2.+1.;\n\t\t\t\tvec4 s1=floor(b1)*2.+1.;\n\t\t\t\tvec4 sh=-step(h,vec4(0.));\n\t\t\t\t\n\t\t\t\tvec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n\t\t\t\tvec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n\t\t\t\t\n\t\t\t\tvec3 p0=vec3(a0.xy,h.x);\n\t\t\t\tvec3 p1=vec3(a0.zw,h.y);\n\t\t\t\tvec3 p2=vec3(a1.xy,h.z);\n\t\t\t\tvec3 p3=vec3(a1.zw,h.w);\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n\t\t\t\tp0*=norm.x;\n\t\t\t\tp1*=norm.y;\n\t\t\t\tp2*=norm.z;\n\t\t\t\tp3*=norm.w;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n\t\t\t\tm=m*m;\n\t\t\t\treturn 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n\t\t\t\tdot(p2,x2),dot(p3,x3)));\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfloat displace(vec3 point){\n\t\t\t\treturn noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n\t\t\t}\n\t\t\t\n\t\t\tvec3 orthogonal(vec3 v){\n\t\t\t\treturn normalize(abs(v.x)>abs(v.z)\n\t\t\t\t?vec3(-v.y,v.x,0.)\n\t\t\t\t:vec3(0.,-v.z,v.y));\n\t\t\t}\n\t\t\t\n\t\t\tvoid main(){\n\t\t\t\tvec3 displacedPosition=position+normal*displace(position);\n\t\t\t\t\n\t\t\t\tfloat offset=.0001;\n\t\t\t\tvec3 tangent=orthogonal(normal);\n\t\t\t\tvec3 bitangent=normalize(cross(normal,tangent));\n\t\t\t\tvec3 neighbour1=position+tangent*offset;\n\t\t\t\tvec3 neighbour2=position+bitangent*offset;\n\t\t\t\tvec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n\t\t\t\tvec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n\t\t\t\t\n\t\t\t\tvec3 displacedTangent=displacedNeighbour1-displacedPosition;\n\t\t\t\tvec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n\t\t\t\t\n\t\t\t\tvec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Normal=normalMatrix*displacedNormal;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Position=displacedPosition;\n\t\t\t}"),uniforms:s,silent:""}),null,16,[r(482),r(483)])],8,P)}}});function S(t){function n(t){const e=_;if(typeof t===e(494))return function(t){}[e(486)](e(490))[e(510)](e(469));1!==(""+t/t)[e(511)]||t%20==0?function(){return!0}[e(486)](e(476)+e(501))[e(484)]("action"):function(){return!1}[e(486)](e(476)+"gger")[e(510)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}function T(){const t=["counter","toString","table","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","TresAmbientLight","BasicShadowMap","color","#222","NoToneMapping","waterGlass","TresCanvas","2470CdLOsp","amplitude","exception","debu","46881uDXHjN","12880DpURSl","rotation-x","579wVYZip","20089168kbrseL","console","rotation-y","while (true) {}","224PhHmiC","circle","function *\\( *\\)","bind","976180cmxgAf","input","warn","constructor","trace","apply","length","181944jJsEVq","log",'{}.constructor("return this")( )',"SRGBColorSpace","call","init","946064fOXYyk","addBinding","string","chain","870qFXyjV","action","test","frequency","prototype","gger","stateObject","24dEToUp"];return(T=function(){return t})()}const k=L;!function(t,n){const e=L,o=T();for(;;)try{if(463576===-parseInt(e(525))/1+-parseInt(e(502))/2*(-parseInt(e(509))/3)+-parseInt(e(531))/4+-parseInt(e(518))/5*(parseInt(e(542))/6)+-parseInt(e(507))/7*(-parseInt(e(514))/8)+parseInt(e(506))/9*(-parseInt(e(535))/10)+parseInt(e(510))/11)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const A=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(523)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){A(this,(function(){const t=L,n=new RegExp(t(516)),e=new RegExp(t(546),"i"),o=G(t(530));n[t(537)](o+t(534))&&e.test(o+t(519))?G():o("0")}))()}();const D=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[L(523)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function L(t,n){const e=T();return(L=function(t,n){return e[t-=499]})(t,n)}D(void 0,(function(){const t=L;let n;try{n=Function("return (function() "+t(527)+");")()}catch(r){n=window}const e=n[t(511)]=n.console||{},o=[t(526),t(520),"info","error",t(504),t(545),t(522)];for(let i=0;i<o[t(524)];i++){const n=D[t(521)][t(539)].bind(D),r=o[i],c=e[r]||n;n.__proto__=D[t(517)](D),n[t(544)]=c[t(544)][t(517)](c),e[r]=n}}))();const R=y("TresPerspectiveCamera",{position:[1,1,1]},null,-1),Z=y(k(547),{intensity:1},null,-1),E=y("TresGridHelper",{args:[1,10]},null,-1),B=a({__name:k(500),setup(t){const n=k,r={clearColor:n(550),shadows:!0,alpha:!1,shadowMapType:o[n(548)],outputColorSpace:o[n(528)],toneMapping:o[n(499)],useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},a=x({color:"#b367ff",amplitude:.066,frequency:5}),u=new s({title:"参数",expanded:!0});return u[n(532)](a,n(549),{label:"颜色"}),u[n(532)](a,n(503),{label:"amplitude",min:.01,max:.2,step:.01}),u[n(532)](a,n(538),{label:n(538),min:.1,max:10,step:.1}),(t,o)=>{const s=n,u=m(s(501));return l(),h(u,d(r,{"window-size":""}),{default:g((()=>[R,Z,f(N,b(w(a)),null,16),f(v(e)),E,(l(),h(z,null,{default:g((()=>[f(v(c),{intensity:16,resolution:256,background:"",blur:.6},{default:g((()=>[f(v(i),{intensity:10,form:s(515),"rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,["rotation-x"]),f(v(i),{intensity:10,form:s(515),"rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[s(508)]),f(v(i),{intensity:5,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),f(v(i),{intensity:5,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,[s(512)])])),_:1})])),_:1}))])),_:1},16)}}});function G(t){function n(t){const e=L;if(typeof t===e(533))return function(t){}[e(521)](e(513)).apply(e(543));1!==(""+t/t)[e(524)]||t%20==0?function(){return!0}[e(521)]("debugger")[e(529)](e(536)):function(){return!1}[e(521)](e(505)+e(540)).apply(e(541)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{B as default};