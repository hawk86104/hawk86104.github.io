import{i as t}from"./ice-utils.0tdaXwny1731379053498.js";import{_ as n,m as e}from"./gl-matrix.oVMHBNGj1731379053498.js";import{P as o}from"./tweakpane.yHWGBmom1731379053498.js";import{d as r,r as i,q as a,o as c,D as s,J as u,u as f}from"./@vue.-THQH3GC1731379053498.js";const l="\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nuniform mat4 uProjection;\nuniform mat4 uView;\nuniform mat4 uModel;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);\n}",m="\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\n\nvoid main()\n{\n    gl_FragColor=texture2D(textureSampler,texCoords);\n}",d=p;!function(t,n){const e=p,o=A();for(;;)try{if(247285===parseInt(e(485))/1*(parseInt(e(494))/2)+parseInt(e(559))/3+-parseInt(e(464))/4*(parseInt(e(480))/5)+-parseInt(e(519))/6+-parseInt(e(510))/7*(-parseInt(e(527))/8)+-parseInt(e(478))/9*(-parseInt(e(522))/10)+parseInt(e(469))/11*(-parseInt(e(479))/12))break;o.push(o.shift())}catch(r){o.push(o.shift())}}();const x=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,o}}();!function(){x(this,(function(){const t=p,n=new RegExp("function *\\( *\\)"),e=new RegExp(t(530),"i"),o=T("init");n[t(517)](o+t(501))&&e.test(o+t(502))?T():o("0")}))()}();const _=function(){let t=!0;return function(n,e){const o=t?function(){if(e){const t=e[p(477)](n,arguments);return e=null,t}}:function(){};return t=!1,o}}();function p(t,n){const e=A();return(p=function(t,n){return e[t-=456]})(t,n)}_(void 0,(function(){const t=p,n=function(){const t=p;let n;try{n=Function(t(542)+t(497)+");")()}catch(e){n=window}return n}(),e=n[t(551)]=n.console||{},o=[t(472),t(545),t(506),t(457),t(540),"table","trace"];for(let r=0;r<o.length;r++){const n=_.constructor.prototype[t(511)](_),i=o[r],a=e[i]||n;n[t(488)]=_.bind(_),n[t(528)]=a[t(528)].bind(a),e[i]=n}}))();const g={id:d(509)},E=["src"];function A(){const t=["bind","getElementById","getContext","vertexAttribPointer","COLOR_BUFFER_BIT","scale","test","lookAt","2352390CDATnY","ONE_MINUS_SRC_ALPHA","FLOAT","33130wpSoWP","value","TEXTURE_2D","height","TEXTURE_MAG_FILTER","8dYRVQg","toString","TEXTURE_WRAP_T","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","action","offset_left_top","innerHeight","width","clearColor","FRAMEBUFFER","TRIANGLES","getUniformLocation","UNSIGNED_BYTE","exception","framebufferTexture2D","return (function() ","logo-texture","length","warn","slider","uniform1f","BYTES_PER_ELEMENT","uniformMatrix4fv","useProgram","console","ELEMENT_ARRAY_BUFFER","ARRAY_BUFFER","while (true) {}","drawElements","enable","blendFunc","none","1442544jOZqmy","change","innerWidth","STATIC_DRAW","error","bindFramebuffer","NEAREST","stateObject","bufferData","TEXTURE_MIN_FILTER","create","69372Azimdb","ortho","offset_right_top","clear","addBlade","11DLYQjN","CLAMP_TO_EDGE","createBuffer","log","constructor","hidden","uModel","inline","apply","1251HryMDt","10619700GVVfwK","85FXYoJG","offset_left_bottom","string","querySelector","debu","1rYkPYU","enableVertexAttribArray","offset_right_bottom","__proto__","canvas","img","mat4","mixParam","addBinding","920008KWZVpS","gger","SRC_ALPHA",'{}.constructor("return this")( )',"texParameteri","webgl","RGBA","chain","input","COLOR_ATTACHMENT0","BLEND","bindBuffer","info","bindTexture","translate","canvaswebgl","2924579lUJOFL"];return(A=function(){return t})()}const b=r({__name:"webglPostProcessing",setup(r){const x=d;let _,p,A,b,T,y,R,v,F,h,w,P,C;const I=1,B=.71,L=.76,S=new o({title:"参数"}),U=i({hidden:!0,offset_right_top:{x:.5,y:.5},offset_right_bottom:{x:.5,y:.5},offset_left_top:{x:.5,y:.5},offset_left_bottom:{x:.5,y:.5},overlay:{r:1,g:0,b:.33}});S[x(468)]({view:x(546),label:"颜色",min:0,max:1,value:.5}).on(x(560),(t=>{const n=x;O(),p[n(547)](P,t[n(523)])}));let D=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]);S.addBinding(U,x(474),{label:"是否后处理"}),S[x(493)](U,x(466),{picker:x(476),x:{min:0,max:1},y:{min:0,max:1}}).on(x(560),(t=>{const n=x;D[0]=U[n(466)].x,D[1]=U[n(466)].y,O()})),S[x(493)](U,x(487),{picker:x(476),x:{min:-1,max:1},y:{min:-1,max:1}}).on(x(560),(t=>{const n=x;D[5]=U[n(487)].x,D[6]=U.offset_right_bottom.y,O()})),S[x(493)](U,x(481),{picker:x(476),x:{min:-1,max:1},y:{min:-1,max:1}}).on(x(560),(t=>{const n=x;D[10]=U[n(481)].x,D[11]=U.offset_left_bottom.y,O()})),S[x(493)](U,x(532),{picker:x(476),x:{min:-1,max:1},y:{min:-1,max:1}}).on(x(560),(t=>{const n=x;D[15]=U.offset_left_top.x,D[16]=U[n(532)].y,O()})),a((()=>{M()}));const M=function(){const n=x;_=document[n(483)]("#canvaswebgl"),_.width=window[n(561)],_[n(525)]=window[n(533)],p=_[n(513)](n(499)),p&&(function(){const n=x,e=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]),o=new Uint8Array([0,1,2,0,2,3]);b=G(e,o),A=t(p,l,m),F=p[n(538)](A,"uProjection"),h=p.getUniformLocation(A,"uView"),w=p[n(538)](A,n(475)),C=j(document[n(512)](n(543)))}(),O(),p[n(556)](p[n(504)]),p[n(557)](p[n(496)],p[n(520)]),N())};function N(){const t=x;p[t(458)](p[t(536)],R),p.clearColor(I,B,L,1),p[t(467)](p[t(515)]),function(){const t=x;p[t(550)](A),p[t(505)](p.ARRAY_BUFFER,b);const e=n[t(491)].create();n[t(491)][t(465)](e,0,_[t(534)],_.height,0,.1,100),p[t(549)](F,!1,e);const o=n[t(491)][t(463)]();n[t(491)][t(518)](o,[0,0,1],[0,0,0],[0,1,0]),p.uniformMatrix4fv(h,!1,o),Y(C,600,600),Y(C,400,400)}(),p.bindFramebuffer(p[t(536)],null),U[t(474)]&&(p[t(467)](p[t(515)]),p[t(535)](0,0,1,1),p[t(505)](p[t(553)],T),p.useProgram(y),p[t(507)](p[t(524)],v)),p[t(555)](p[t(537)],6,p.UNSIGNED_BYTE,0),requestAnimationFrame(N)}function Y(t,o,r){const i=x;let a=n[i(491)][i(463)]();e[i(508)](a,a,[o,r,0]),n[i(491)][i(516)](a,a,[250,250,0]),p[i(549)](w,!1,a),p[i(507)](p[i(524)],t),p[i(555)](p.TRIANGLES,6,p[i(539)],0)}function O(){const n=x,e=new Uint8Array([0,1,2,0,2,3]);T=G(D,e),y=t(p,"\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoords;\n\nvarying vec2 texCoords;\n\nvoid main()\n{\n    texCoords=aTexCoords;\n    gl_Position=vec4(aPosition,1.);\n}","\nprecision mediump float;\n\nvarying vec2 texCoords;\n\nuniform sampler2D textureSampler;\nuniform float mixParam;\nvoid main()\n{\n    // float luminance=dot(texture2D(textureSampler,texCoords).rgb,vec3(.3451,.2118,.302));\n    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);\n    gl_FragColor=color;\n}"),P=p[n(538)](y,n(492)),p[n(538)](y,"color"),function(){const t=x;v=j(_),R=p.createFramebuffer(),p[t(458)](p[t(536)],R),p[t(541)](p[t(536)],p[t(503)],p[t(524)],v,0),p[t(458)](p[t(536)],null)}()}function j(t){const n=x,e=p.createTexture();return p[n(507)](p[n(524)],e),t instanceof HTMLImageElement?p.texImage2D(p[n(524)],0,p[n(500)],p[n(500)],p[n(539)],t):p.texImage2D(p[n(524)],0,p[n(500)],t[n(534)],t[n(525)],0,p[n(500)],p[n(539)],null),p[n(498)](p[n(524)],p[n(462)],p[n(459)]),p[n(498)](p[n(524)],p[n(526)],p[n(459)]),p.texParameteri(p[n(524)],p.TEXTURE_WRAP_S,p[n(470)]),p[n(498)](p[n(524)],p[n(529)],p[n(470)]),e}function G(t,n){const e=x,o=p[e(471)]();p[e(505)](p[e(553)],o),p[e(461)](p[e(553)],t,p[e(456)]);const r=3*Float32Array[e(548)]+2*Float32Array[e(548)];p[e(514)](0,3,p[e(521)],!1,r,0),p[e(486)](0),p[e(514)](1,2,p.FLOAT,!1,r,3*Float32Array[e(548)]),p[e(486)](1);const i=p.createBuffer();return p[e(505)](p[e(552)],i),p[e(461)](p.ELEMENT_ARRAY_BUFFER,n,p[e(456)]),p.bindBuffer(p[e(553)],null),o}return(t,n)=>{const e=x;return c(),s(e(489),g,[u(e(490),{id:"logo-texture",src:f("./")+"/plugins/postProcessing/image/logo.png",style:{display:e(558)}},null,8,E)])}}});function T(t){function n(t){const e=p;if(typeof t===e(482))return function(t){}[e(473)](e(554)).apply("counter");1!==(""+t/t)[e(544)]||t%20==0?function(){return!0}[e(473)](e(484)+e(495)).call(e(531)):function(){return!1}.constructor(e(484)+"gger")[e(477)](e(460)),n(++t)}try{if(t)return n;n(0)}catch(e){}}export{b as default};