import{e as t,W as n,U as e}from"./@tresjs.XlmHwCPa1735906732968.js";import{_ as o,ak as r}from"./three.VhLXWX0H1735906732968.js";import{a as i,b as s}from"./index.QkcmrzFJ1735906732968.js";import{P as c}from"./tweakpane.yHWGBmom1735906732968.js";import{d as a,w as u,o as l,D as p,J as f,j as d,m as v,u as x,r as y,e as m,f as h,g,aj as b,ak as w,al as z}from"./@vue.yG49nQHr1735906732968.js";import"./@vueuse.HCIFcVWX1735906732968.js";import"./three-stdlib.KBM4TZ_N1735906732968.js";import"./@pmndrs.jP0GrZPE1735906732968.js";import"./object-hash.YsnKaXvB1735906732968.js";import"./@amap.goWAqh1c1735906732968.js";import"./jszip._qOKqgyX1735906732968.js";const I=q;!function(t,n){const e=q,o=P();for(;;)try{if(687998===parseInt(e(461))/1*(-parseInt(e(468))/2)+-parseInt(e(455))/3+parseInt(e(457))/4*(-parseInt(e(459))/5)+-parseInt(e(470))/6+parseInt(e(443))/7+parseInt(e(437))/8*(parseInt(e(439))/9)+parseInt(e(454))/10*(parseInt(e(474))/11))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[q(432)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){_(this,(function(){const t=q,n=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=C(t(476));n[t(467)](o+t(466))&&e[t(467)](o+"input")?C():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[q(432)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function P(){const t=["error","chain","test","2PQmPMw","return (function() ","389490MIXNtd","log","prototype","time","20491691fUSogG","amplitude","init","exception","__proto__","trace","TresPlaneGeometry","apply","MeshPhysicalMaterial","Color","warn","TresMesh","216OBlQZP","info","243351SZvcWl","debu","#fff","frequency","2456111RsOhSf","baseMaterial","counter","string","color","length","call","console","value","waterGlass","rotation-x","10hbcbPC","3836886xHFEud",'{}.constructor("return this")( )',"1619756DgnlSb","toString","5GiHgvr","vertexShader","506993QALedi","DoubleSide","bind","constructor"];return(P=function(){return t})()}j(void 0,(function(){const t=q;let n;try{n=Function(t(469)+t(456)+");")()}catch(r){n=window}const e=n[t(450)]=n[t(450)]||{},o=[t(471),t(435),t(438),t(465),t(477),"table",t(430)];for(let i=0;i<o.length;i++){const n=j[t(464)][t(472)].bind(j),r=o[i],s=e[r]||n;n[t(478)]=j[t(463)](j),n[t(458)]=s[t(458)][t(463)](s),e[r]=n}}))();const M=[I(453)],S=a({__name:I(452),props:{color:{default:I(441)},amplitude:{default:.066},frequency:{default:5}},setup(e){const r=I,i=e,s={time:{type:"f",value:.1},amplitude:{type:"f",value:i.amplitude},speed:{type:"f",value:.277},frequency:{type:"f",value:i[r(442)]}},c={side:o[r(462)],color:new(o[r(434)])(i[r(447)]),metalness:.087,roughness:0,transmission:1,thickness:1.5,refractionRatio:1.5},{onLoop:a}=t();return a((({delta:t})=>{const n=r;s[n(473)][n(451)]+=t})),u((()=>i),(()=>{const t=r;c[t(447)]=new(o[t(434)])(i.color),s[t(475)][t(451)]=i[t(475)],s.frequency.value=i[t(442)]}),{deep:!0}),(t,e)=>{const i=r;return l(),p(i(436),{"rotation-x":-Math.PI/2,"position-y":.1},[e[0]||(e[0]=f(i(431),{args:[1,1,64,64]},null,-1)),d(x(n),v(c,{baseMaterial:o[i(433)],vertexShader:x("uniform float time;\nuniform float amplitude;\nuniform float speed;\nuniform float frequency;\n\nvec3 mod289(vec3 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 mod289(vec4 x){\n\treturn x-floor(x*(1./289.))*289.;\n}\n\nvec4 permute(vec4 x){\n\treturn mod289(((x*34.)+1.)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r){\n\treturn 1.79284291400159-.85373472095314*r;\n}\n\nfloat noise(vec3 v){\n\tconst vec2 C=vec2(1./6.,1./3.);\n\tconst vec4 D=vec4(0.,.5,1.,2.);\n\t\n\t\n\tvec3 i=floor(v+dot(v,C.yyy));\n\tvec3 x0=v-i+dot(i,C.xxx);\n\t\n\t\n\tvec3 g=step(x0.yzx,x0.xyz);\n\tvec3 l=1.-g;\n\tvec3 i1=min(g.xyz,l.zxy);\n\tvec3 i2=max(g.xyz,l.zxy);\n\t\n\tvec3 x1=x0-i1+C.xxx;\n\tvec3 x2=x0-i2+C.yyy;\n\tvec3 x3=x0-D.yyy;\n\t\n\t\n\ti=mod289(i);\n\tvec4 p=permute(permute(permute(\n\t\t\t\ti.z+vec4(0.,i1.z,i2.z,1.))\n\t\t\t\t+i.y+vec4(0.,i1.y,i2.y,1.))\n\t\t\t\t+i.x+vec4(0.,i1.x,i2.x,1.));\n\t\t\t\t\n\t\t\t\tfloat n_=.142857142857;\n\t\t\t\tvec3 ns=n_*D.wyz-D.xzx;\n\t\t\t\t\n\t\t\t\tvec4 j=p-49.*floor(p*ns.z*ns.z);\n\t\t\t\t\n\t\t\t\tvec4 x_=floor(j*ns.z);\n\t\t\t\tvec4 y_=floor(j-7.*x_);\n\t\t\t\t\n\t\t\t\tvec4 x=x_*ns.x+ns.yyyy;\n\t\t\t\tvec4 y=y_*ns.x+ns.yyyy;\n\t\t\t\tvec4 h=1.-abs(x)-abs(y);\n\t\t\t\t\n\t\t\t\tvec4 b0=vec4(x.xy,y.xy);\n\t\t\t\tvec4 b1=vec4(x.zw,y.zw);\n\t\t\t\t\n\t\t\t\tvec4 s0=floor(b0)*2.+1.;\n\t\t\t\tvec4 s1=floor(b1)*2.+1.;\n\t\t\t\tvec4 sh=-step(h,vec4(0.));\n\t\t\t\t\n\t\t\t\tvec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;\n\t\t\t\tvec4 a1=b1.xzyw+s1.xzyw*sh.zzww;\n\t\t\t\t\n\t\t\t\tvec3 p0=vec3(a0.xy,h.x);\n\t\t\t\tvec3 p1=vec3(a0.zw,h.y);\n\t\t\t\tvec3 p2=vec3(a1.xy,h.z);\n\t\t\t\tvec3 p3=vec3(a1.zw,h.w);\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));\n\t\t\t\tp0*=norm.x;\n\t\t\t\tp1*=norm.y;\n\t\t\t\tp2*=norm.z;\n\t\t\t\tp3*=norm.w;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tvec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);\n\t\t\t\tm=m*m;\n\t\t\t\treturn 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),\n\t\t\t\tdot(p2,x2),dot(p3,x3)));\n\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tfloat displace(vec3 point){\n\t\t\t\treturn noise(vec3(point.x*frequency,point.y*frequency,time*speed))*amplitude;\n\t\t\t}\n\t\t\t\n\t\t\tvec3 orthogonal(vec3 v){\n\t\t\t\treturn normalize(abs(v.x)>abs(v.z)\n\t\t\t\t?vec3(-v.y,v.x,0.)\n\t\t\t\t:vec3(0.,-v.z,v.y));\n\t\t\t}\n\t\t\t\n\t\t\tvoid main(){\n\t\t\t\tvec3 displacedPosition=position+normal*displace(position);\n\t\t\t\t\n\t\t\t\tfloat offset=.0001;\n\t\t\t\tvec3 tangent=orthogonal(normal);\n\t\t\t\tvec3 bitangent=normalize(cross(normal,tangent));\n\t\t\t\tvec3 neighbour1=position+tangent*offset;\n\t\t\t\tvec3 neighbour2=position+bitangent*offset;\n\t\t\t\tvec3 displacedNeighbour1=neighbour1+normal*displace(neighbour1);\n\t\t\t\tvec3 displacedNeighbour2=neighbour2+normal*displace(neighbour2);\n\t\t\t\t\n\t\t\t\tvec3 displacedTangent=displacedNeighbour1-displacedPosition;\n\t\t\t\tvec3 displacedBitangent=displacedNeighbour2-displacedPosition;\n\t\t\t\t\n\t\t\t\tvec3 displacedNormal=normalize(cross(displacedTangent,displacedBitangent));\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Normal=normalMatrix*displacedNormal;\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tcsm_Position=displacedPosition;\n\t\t\t}"),uniforms:s,silent:""}),null,16,[i(444),i(460)])],8,M)}}});function q(t,n){const e=P();return(q=function(t,n){return e[t-=430]})(t,n)}function C(t){function n(t){const e=q;if(typeof t===e(446))return function(t){}[e(464)]("while (true) {}")[e(432)](e(445));1!==(""+t/t)[e(448)]||t%20==0?function(){return!0}[e(464)](e(440)+"gger")[e(449)]("action"):function(){return!1}[e(464)]("debugger")[e(432)]("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(e){}}const N=O;!function(t,n){const e=O,o=B();for(;;)try{if(725010===-parseInt(e(352))/1+parseInt(e(366))/2*(-parseInt(e(349))/3)+-parseInt(e(346))/4*(parseInt(e(369))/5)+-parseInt(e(328))/6*(-parseInt(e(356))/7)+-parseInt(e(359))/8*(parseInt(e(325))/9)+parseInt(e(358))/10*(parseInt(e(344))/11)+parseInt(e(333))/12*(parseInt(e(367))/13))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const T=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[O(348)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){T(this,(function(){const t=O,n=new RegExp(t(339)),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),o=F(t(353));n.test(o+t(340))&&e.test(o+t(364))?F():o("0")}))()}();const D=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function B(){const t=["51FbUFPd","bind","#222","617834NjfZYz","init","NoToneMapping","toString","14BIRvSQ","error","2215410fjOFom","24XeaXCY","trace","prototype","addBinding","rotation-x","input","waterGlass","133482tjXNnw","6071sdaahO","info","424345lhNVJo","return (function() ","counter","TresAmbientLight","TresCanvas","BasicShadowMap","3272310JtqeOr","constructor","gger","4064370rVLiWP","call","circle","string",'{}.constructor("return this")( )',"53364ghMOia","warn","debu","while (true) {}","frequency","__proto__","function *\\( *\\)","chain","amplitude","stateObject","table","11epDxxF","color","4oropep","console","apply"];return(B=function(){return t})()}function O(t,n){const e=B();return(O=function(t,n){return e[t-=325]})(t,n)}D(void 0,(function(){const t=O,n=function(){const t=O;let n;try{n=Function(t(370)+t(332)+");")()}catch(e){n=window}return n}(),e=n[t(347)]=n[t(347)]||{},o=["log",t(334),t(368),t(357),"exception",t(343),t(360)];for(let r=0;r<o.length;r++){const n=D[t(326)][t(361)].bind(D),i=o[r],s=e[i]||n;n[t(338)]=D.bind(D),n[t(355)]=s[t(355)][t(350)](s),e[i]=n}}))();const k=a({__name:N(365),setup(t){const n=N,a={clearColor:n(351),shadows:!0,alpha:!1,shadowMapType:o[n(374)],outputColorSpace:r,toneMapping:o[n(354)],useLegacyLights:!0,antialias:!0,logarithmicDepthBuffer:!0},u=y({color:"#b367ff",amplitude:.066,frequency:5}),p=new c({title:"参数",expanded:!0});return p[n(362)](u,n(345),{label:"颜色"}),p.addBinding(u,"amplitude",{label:n(341),min:.01,max:.2,step:.01}),p[n(362)](u,n(337),{label:n(337),min:.1,max:10,step:.1}),(t,o)=>{const r=n,c=m(r(373));return l(),h(c,v(a,{"window-size":""}),{default:g((()=>[o[0]||(o[0]=f("TresPerspectiveCamera",{position:[1,1,1]},null,-1)),o[1]||(o[1]=f(r(372),{intensity:1},null,-1)),d(S,b(w(u)),null,16),d(x(e)),o[2]||(o[2]=f("TresGridHelper",{args:[1,10]},null,-1)),(l(),h(z,null,{default:g((()=>[d(x(i),{intensity:16,resolution:256,background:"",blur:.6},{default:g((()=>[d(x(s),{intensity:10,form:"circle","rotation-x":Math.PI/2,position:[2,4,0],scale:[1,5,0]},null,8,[r(363)]),d(x(s),{intensity:10,form:r(330),"rotation-x":Math.PI/2,position:[-6,4,0],scale:[1,5,0]},null,8,[r(363)]),d(x(s),{intensity:5,"rotation-y":-Math.PI/2,position:[-1,0,0],scale:[10,.2,1]},null,8,["rotation-y"]),d(x(s),{intensity:5,"rotation-y":-Math.PI/2,position:[1,0,0],scale:[10,.2,1]},null,8,["rotation-y"])])),_:1})])),_:1}))])),_:1},16)}}});function F(t){function n(t){const e=O;if(typeof t===e(331))return function(t){}[e(326)](e(336))[e(348)](e(371));1!==(""+t/t).length||t%20==0?function(){return!0}[e(326)](e(335)+e(327))[e(329)]("action"):function(){return!1}[e(326)]("debu"+e(327))[e(348)](e(342)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{k as default};