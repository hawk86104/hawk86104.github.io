import{$ as t,d as n}from"./@tresjs.j5vdYITq1725245456099.js";import{Z as e,aN as o}from"./three.KG2-8r0_1725245456099.js";import{d as r,e as i,o as a,f as s,g as c,J as u,j as f,u as p,aj as l,ak as v,m as d}from"./@vue.Q1VpS3901725245456099.js";import"./tweakpane.yHWGBmom1725245456099.js";import"./@vueuse.whMtq_7M1725245456099.js";function m(t,n){const e=y();return(m=function(t,n){return e[t-=493]})(t,n)}const g=m;!function(t,n){const e=m,o=y();for(;;)try{if(935360===-parseInt(e(499))/1+parseInt(e(505))/2+parseInt(e(536))/3*(-parseInt(e(521))/4)+parseInt(e(516))/5+-parseInt(e(532))/6+-parseInt(e(515))/7*(-parseInt(e(529))/8)+-parseInt(e(518))/9)break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const h=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){h(this,(function(){const t=m,n=new RegExp(t(527)),e=new RegExp(t(510),"i"),o=C(t(504));n[t(526)](o+"chain")&&e[t(526)](o+t(498))?C():o("0")}))()}();const j=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function y(){const t=["2190330ScgVUd","info","counter","236BqTaae","TresAmbientLight","console","warn","error","test","function *\\( *\\)","string","6772808MTfnhs","TresShaderMaterial","rotation-x","6776220HpYpdi","toString","prototype","TresPlaneGeometry","30279RCjFKx","#ffffff","argestCircle","apply","debu","#000000","bind","input","746378QWYjUX","stateObject","action","constructor","while (true) {}","init","3237398aOHocQ","length","__proto__","perspectiveCameraRef","trace","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","uniforms","exception","quanMeshRef",'{}.constructor("return this")( )',"7WzSsRt","5923325FQnooC","TresDirectionalLight"];return(y=function(){return t})()}j(void 0,(function(){const t=m,n=function(){const t=m;let n;try{n=Function("return (function() "+t(514)+");")()}catch(e){n=window}return n}(),e=n[t(523)]=n[t(523)]||{},o=["log",t(524),t(519),t(525),t(512),"table",t(509)];for(let r=0;r<o[t(506)];r++){const n=j[t(502)][t(534)][t(497)](j),i=o[r],a=e[i]||n;n[t(507)]=j[t(497)](j),n[t(533)]=a[t(533)].bind(a),e[i]=n}}))();const x={ref:g(508),position:[600,750,-1221],fov:45,near:1,far:1e4},T=u(g(522),{color:"#ffffff"},null,-1),b=u(g(517),{position:[100,100,0],intensity:.5,color:g(537)},null,-1),w=[g(531)],_=u(g(535),{args:[400,400]},null,-1),I=u("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),k=u("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),z=r({__name:g(493),setup(r){const m=g,h={clearColor:m(496),shadows:!0,alpha:!1,useLegacyLights:!0},j={autoRotate:!0,enableDamping:!0},y={uniforms:{uTime:{type:"f",value:0}},vertexShader:"varying vec2 vUv;\nvoid main(){\n\tvUv=uv;\n\tgl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n}",fragmentShader:"varying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData{\n\tfloat dist;\n\tfloat edgedist;\n\tvec2 edgenormal;\n\tvec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n\tvec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));\n\tp3+=dot(p3,p3.yzx+33.33);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n\tvec2 n=floor(uv);\n\tvec2 f=fract(uv);\n\t\n\tvec2 mg,mr;\n\t\n\tfloat md=8.;\n\tfor(int j=-1;j<=1;j++)\n\tfor(int i=-1;i<=1;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tvec2 o=hash22(n+g);\n\t\tvec2 r=g+o-f;\n\t\tfloat d=dot(r,r);\n\t\t\n\t\tif(d<md){\n\t\t\tmd=d;\n\t\t\tmr=g+o;\n\t\t}\n\t}\n\t\n\tfloat med=8.;\n\tvec2 men=vec2(0);\n\tfor(int j=-2;j<=2;j++)\n\tfor(int i=-2;i<=2;i++){\n\t\tvec2 g=vec2(i,j);\n\t\tg+=hash22(n+g);\n\t\tvec2 k=g-mr;\n\t\t\n\t\tfloat d=dot(k,k);\n\t\tif(d>0.){\n\t\t\tfloat l=dot(g+mr-2.*f,k)*.5/sqrt(d);\n\t\t\tif(l<med){\n\t\t\t\tmen=k;\n\t\t\t\tmed=l;\n\t\t\t}\n\t\t}\n\t}\n\treturn VoronoiData(md,med,normalize(men),mr+n);\n}\n\nvoid main(){\n\tvec2 uv=vUv*10.+vec2(0.,uTime);\n\tvec2 p=voronoi2dedges(uv).point;\n\tVoronoiData v;\n\tfor(int i=0;i<32;i++){\n\t\tVoronoiData v=voronoi2dedges(p);\n\t\tp+=-v.edgenormal*.2/float(i+1);\n\t}\n\tgl_FragColor=vec4(\n\t\tsmoothstep(0.,.1,distance(uv,p))*\n\t\tsmoothstep(0.,.01,voronoi2dedges(uv).edgedist)*\n\t\tsmoothstep(0.,.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n\t);\n}",side:e,blending:o,depthWrite:!1,transparent:!0},{onLoop:z}=t();return z((({delta:t})=>{y[m(511)].uTime.value+=t})),(t,e)=>{const o=m,r=i("TresCanvas");return a(),s(r,d(h,{"window-size":""}),{default:c((()=>[u("TresPerspectiveCamera",x,null,512),f(p(n),l(v(j)),null,16),T,b,u("TresMesh",{ref:o(513),position:[0,100,0],"rotation-x":2*Math.PI/360*90},[_,u(o(530),l(v(y)),null,16)],8,w),I,k])),_:1},16)}}});function C(t){function n(t){const e=m;if(typeof t===e(528))return function(t){}[e(502)](e(503))[e(494)](e(520));1!==(""+t/t)[e(506)]||t%20==0?function(){return!0}[e(502)](e(495)+"gger").call(e(501)):function(){return!1}[e(502)](e(495)+"gger")[e(494)](e(500)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{z as default};