import{P as t}from"./tweakpane.yHWGBmom1731053920743.js";import{b as e}from"./pagesShow.vue_vue_type_script_setup_true_lang.9ak1AGd-1731053920743.js";import{_ as i,a as n,bI as r,C as s,k as o,V as a,a3 as u}from"./three.eGpwEcxC1731053920743.js";import{e as c,b as h}from"./@tresjs.hJVQLtpa1731053920743.js";import{d as l,a6 as f,w as p,o as v,D as d,u as m,r as y,f as g,g as b,al as w,j as x,m as _}from"./@vue.u2cBPEWn1731053920743.js";import"./three-custom-shader-material.u9oeG2Gi1731053920743.js";import"./@vueuse.weJ7f3dz1731053920743.js";var A=F;!function(t,e){for(var i=F,n=j();;)try{if(543515===parseInt(i(433))/1+-parseInt(i(393))/2+parseInt(i(330))/3*(-parseInt(i(362))/4)+-parseInt(i(469))/5+-parseInt(i(369))/6+-parseInt(i(439))/7*(parseInt(i(381))/8)+parseInt(i(476))/9*(parseInt(i(473))/10))break;n.push(n.shift())}catch(r){n.push(n.shift())}}();var M=function(){var t=!0;return function(e,i){var n=t?function(){if(i){var t=i[F(485)](e,arguments);return i=null,t}}:function(){};return t=!1,n}}();!function(){M(this,(function(){var t=F,e=new RegExp(t(497)),i=new RegExp(t(384),"i"),n=W(t(358));e.test(n+t(448))&&i[t(324)](n+"input")?W():n("0")}))()}();var P=function(){var t=!0;return function(e,i){var n=t?function(){if(i){var t=i[F(485)](e,arguments);return i=null,t}}:function(){};return t=!1,n}}();P(void 0,(function(){for(var t=F,e=function(){var t,e=F;try{t=Function("return (function() "+e(356)+");")()}catch(i){t=window}return t}(),i=e.console=e[t(403)]||{},n=[t(428),t(338),"info",t(415),t(458),t(367),t(353)],r=0;r<n.length;r++){var s=P[t(478)].prototype[t(401)](P),o=n[r],a=i[o]||s;s.__proto__=P.bind(P),s.toString=a.toString[t(401)](a),i[o]=s}}))();class I extends i[A(503)]{constructor(){var t=A;super(),this.isMeshLine=!0,this.type=t(487),this[t(352)]=[],this[t(410)]=[],this[t(465)]=[],this.side=[],this[t(420)]=[],this[t(453)]=[],this.uvs=[],this.counters=[],this[t(348)]=[],this[t(466)]=null,this[t(388)]=null,this[t(483)]=new(i[t(426)]),Object[t(442)](this,{geometry:{enumerable:!0,get:function(){return this}},geom:{enumerable:!0,get:function(){return this[t(466)]},set:function(e){var i=t;this[i(434)](e,this[i(388)])}},points:{enumerable:!0,get:function(){return this[t(348)]},set:function(e){var i=t;this[i(392)](e,this[i(388)])}}})}}function z(t,e,i,n,r){var s,o=A;if(t=t[o(418)]||t[o(449)]?t:t[o(351)],i=i.subarray||i[o(449)]?i:i[o(351)],t=e?t[o(418)]?t[o(418)](e,r&&e+r):t[o(449)](e,r&&e+r):t,i[o(490)])i.set(t,n);else for(s=0;s<t.length;s++)i[s+n]=t[s];return i}function F(t,e){var i=j();return(F=function(t,e){return i[t-=324]})(t,e)}I[A(406)][A(371)]=function(t){this[A(483)]=t},I[A(406)][A(434)]=function(t,e){var i=A;this[i(481)]=t,this[i(392)](t[i(462)](i(347))[i(333)],e)},I.prototype.setPoints=function(t,e){var n=A;if(t instanceof Float32Array||t instanceof Array){if(this._points=t,this[n(388)]=e,this[n(352)]=[],this[n(460)]=[],t[n(383)]&&t[0]instanceof i[n(468)])for(var r=0;r<t.length;r++){var s=t[r],o=r/t[n(383)];this.positions[n(421)](s.x,s.y,s.z),this.positions[n(421)](s.x,s.y,s.z),this.counters[n(421)](o),this[n(460)][n(421)](o)}else for(r=0;r<t[n(383)];r+=3){o=r/t[n(383)];this[n(352)].push(t[r],t[r+1],t[r+2]),this[n(352)][n(421)](t[r],t[r+1],t[r+2]),this[n(460)][n(421)](o),this[n(460)][n(421)](o)}this[n(506)]()}else console[n(415)]("ERROR: The BufferArray of points is not instancied correctly.")},I[A(406)][A(486)]=function(t,e){var n=A,r=new(i[n(426)]),s=new(i[n(355)]),o=new(i[n(494)]),u=new a,c=this[n(508)];if(c[n(374)]||c[n(332)](),o[n(390)](c[n(374)]),o.applyMatrix4(this[n(483)]),!1!==t.ray[n(349)](o,u)){r[n(390)](this.matrixWorld)[n(447)](),s[n(390)](t[n(370)]).applyMatrix4(r);var h=new a,l=new(i[n(468)]),f=new(i[n(468)]),p=this instanceof i[n(345)]?2:1,v=c.index,d=c.attributes;if(null!==v)for(var m=v.array,y=d[n(347)][n(333)],g=d[n(420)][n(333)],b=0,w=m[n(383)]-1;b<w;b+=p){var x=m[b],_=m[b+1];h[n(344)](y,3*x),l.fromArray(y,3*_);var M=void 0!==g[Math[n(488)](b/3)]?g[Math.floor(b/3)]:1,P=t[n(389)].Line[n(408)]+this[n(461)][n(470)]*M/2,I=P*P;if(!(s.distanceSqToSegment(h,l,u,f)>I)){u[n(414)](this[n(483)]);var z=t.ray.origin[n(359)](u);z<t.near||z>t[n(342)]||(e[n(421)]({distance:z,point:f[n(334)]()[n(414)](this[n(483)]),index:b,face:null,faceIndex:null,object:this}),b=w)}}}},I[A(406)][A(455)]=function(t,e){var i=A,n=6*t,r=6*e;return this[i(352)][n]===this[i(352)][r]&&this[i(352)][n+1]===this[i(352)][r+1]&&this[i(352)][n+2]===this[i(352)][r+2]},I.prototype[A(443)]=function(t){var e=A,i=6*t;return[this[e(352)][i],this[e(352)][i+1],this.positions[i+2]]},I[A(406)][A(506)]=function(){var t,e,r=A,s=this[r(352)][r(383)]/6;this[r(410)]=[],this[r(465)]=[],this.side=[],this[r(420)]=[],this[r(453)]=[],this[r(412)]=[],e=this[r(455)](0,s-1)?this[r(443)](s-2):this[r(443)](0),this[r(410)][r(421)](e[0],e[1],e[2]),this[r(410)][r(421)](e[0],e[1],e[2]);for(var o=0;o<s;o++){if(this.side[r(421)](1),this.side[r(421)](-1),t=this[r(388)]?this[r(388)](o/(s-1)):1,this[r(420)][r(421)](t),this[r(420)].push(t),this[r(412)][r(421)](o/(s-1),0),this[r(412)][r(421)](o/(s-1),1),o<s-1){e=this[r(443)](o),this[r(410)].push(e[0],e[1],e[2]),this[r(410)][r(421)](e[0],e[1],e[2]);var a=2*o;this[r(453)][r(421)](a,a+1,a+2),this.indices_array[r(421)](a+2,a+1,a+3)}o>0&&(e=this.copyV3(o),this.next[r(421)](e[0],e[1],e[2]),this[r(465)][r(421)](e[0],e[1],e[2]))}e=this[r(455)](s-1,0)?this.copyV3(1):this[r(443)](s-1),this[r(465)][r(421)](e[0],e[1],e[2]),this[r(465)].push(e[0],e[1],e[2]),this[r(343)]&&this._attributes[r(347)][r(375)]===this[r(352)][r(383)]?(this[r(343)][r(347)][r(474)](new Float32Array(this[r(352)])),this[r(343)].position.needsUpdate=!0,this[r(343)][r(410)][r(474)](new Float32Array(this[r(410)])),this[r(343)][r(410)].needsUpdate=!0,this[r(343)].next[r(474)](new Float32Array(this[r(465)])),this._attributes[r(465)].needsUpdate=!0,this[r(343)][r(364)].copyArray(new Float32Array(this.side)),this[r(343)][r(364)][r(467)]=!0,this[r(343)][r(420)].copyArray(new Float32Array(this[r(420)])),this[r(343)][r(420)].needsUpdate=!0,this._attributes.uv[r(474)](new Float32Array(this[r(412)])),this[r(343)].uv[r(467)]=!0,this[r(343)][r(500)][r(474)](new Uint16Array(this[r(453)])),this._attributes[r(500)][r(467)]=!0):this[r(343)]={position:new(i[r(340)])(new Float32Array(this[r(352)]),3),previous:new(i[r(340)])(new Float32Array(this[r(410)]),3),next:new(i[r(340)])(new Float32Array(this[r(465)]),3),side:new(i[r(340)])(new Float32Array(this[r(364)]),1),width:new(i[r(340)])(new Float32Array(this[r(420)]),1),uv:new n(new Float32Array(this[r(412)]),2),index:new n(new Uint16Array(this[r(453)]),1),counters:new(i[r(340)])(new Float32Array(this[r(460)]),1)},this[r(380)]("position",this[r(343)][r(347)]),this.setAttribute(r(410),this[r(343)].previous),this.setAttribute(r(465),this._attributes[r(465)]),this.setAttribute(r(364),this[r(343)].side),this.setAttribute(r(420),this[r(343)].width),this.setAttribute("uv",this[r(343)].uv),this[r(380)]("counters",this[r(343)].counters),this[r(366)](this[r(343)].index),this[r(332)](),this[r(368)](),this[r(481)][r(394)]=this[r(394)],this[r(481)][r(500)]=this[r(500)],this[r(481)][r(332)](),this._geometry[r(368)]()},I.prototype[A(335)]=function(t){var e=A,i=this[e(343)].position[e(333)],n=this[e(343)][e(410)][e(333)],r=this[e(343)].next[e(333)],s=i[e(383)];z(i,0,n,0,s),z(i,6,i,0,s-6),i[s-6]=t.x,i[s-5]=t.y,i[s-4]=t.z,i[s-3]=t.x,i[s-2]=t.y,i[s-1]=t.z,z(i,6,r,0,s-6),r[s-6]=t.x,r[s-5]=t.y,r[s-4]=t.z,r[s-3]=t.x,r[s-2]=t.y,r[s-1]=t.z,this._attributes.position.needsUpdate=!0,this[e(343)][e(410)][e(467)]=!0,this[e(343)].next[e(467)]=!0},i[A(363)].meshline_vert=["",i[A(363)][A(501)],i[A(363)][A(424)],"",A(444),A(398),A(339),"attribute float width;",A(454),"",A(357),A(416),A(440),A(385),A(377),A(459),"uniform float sizeAttenuation;",A(379),"",A(376),A(397),"varying float vCounters;","","vec2 fix( vec4 i, float aspect ) {","",A(480),A(464),"\t vCounters = counters;",A(413),"","}","",A(402),"","    float aspect = resolution.x / resolution.y;","    float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);","","    vColor = vec4( color, opacity );",A(498),"","    mat4 m = projectionMatrix * modelViewMatrix;",A(463),"    vec4 prevPos = m * vec4( previous, 1.0 );","    vec4 nextPos = m * vec4( next, 1.0 );","",A(396),A(411),A(482),"",A(373),A(382),"",A(511),A(436),A(435),"",A(427),A(479),A(477),A(512),A(327),"        vec2 dir2 = normalize( nextP - currentP );","        dir = normalize( dir1 + dir2 );","","        vec2 perp = vec2( -dir1.y, dir1.x );","        vec2 miter = vec2( -dir.y, dir.x );","        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );","",A(435),"",A(451),A(502),"    normal.x /= aspect;",A(423),"",A(505),A(425),"",A(452),"",r[A(404)],r[A(438)]&&A(491),i[A(363)][A(438)],"}"].join("\r\n"),i[A(363)][A(350)]=["",i[A(363)][A(331)],i[A(363)][A(417)],"",A(361),A(507),A(407),A(386),A(495),A(499),"uniform float dashOffset;","uniform float dashRatio;","uniform float visibility;","uniform float alphaTest;",A(387),"","varying vec2 vUV;","varying vec4 vColor;",A(456),"",A(402),"",i[A(363)][A(450)],"","    vec4 c = vColor;",A(510),A(337),A(365),"    if( useDash == 1. ){",A(378),"    }",A(325),A(492),"",i[A(363)][A(400)],"}"][A(496)]("\r\n");class C extends i[A(399)]{constructor(t){var e=A;super({uniforms:Object[e(422)]({},i[e(329)][e(372)],{lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new s(16777215)},opacity:{value:1},resolution:{value:new o(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new(i[e(509)])(1,1)},offset:{value:new(i[e(509)])(1,1)}}),vertexShader:r[e(437)],fragmentShader:i[e(363)][e(350)]}),this[e(409)]=!0,this[e(431)]=e(432),Object[e(442)](this,{lineWidth:{enumerable:!0,get:function(){return this[e(446)].lineWidth.value},set:function(t){var i=e;this[i(446)][i(470)][i(457)]=t}},map:{enumerable:!0,get:function(){var t=e;return this.uniforms[t(354)][t(457)]},set:function(t){var i=e;this.uniforms[i(354)][i(457)]=t}},useMap:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(391)][t(457)]},set:function(t){var i=e;this[i(446)][i(391)][i(457)]=t}},alphaMap:{enumerable:!0,get:function(){return this[e(446)].alphaMap.value},set:function(t){var i=e;this.uniforms[i(430)][i(457)]=t}},useAlphaMap:{enumerable:!0,get:function(){var t=e;return this[t(446)].useAlphaMap[t(457)]},set:function(t){var i=e;this[i(446)].useAlphaMap[i(457)]=t}},color:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(341)][t(457)]},set:function(t){var i=e;this.uniforms[i(341)][i(457)]=t}},opacity:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(328)][t(457)]},set:function(t){var i=e;this[i(446)][i(328)][i(457)]=t}},resolution:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(504)][t(457)]},set:function(t){var i=e;this[i(446)][i(504)][i(457)][i(390)](t)}},sizeAttenuation:{enumerable:!0,get:function(){var t=e;return this.uniforms[t(472)][t(457)]},set:function(t){var i=e;this.uniforms.sizeAttenuation[i(457)]=t}},dashArray:{enumerable:!0,get:function(){var t=e;return this.uniforms[t(346)][t(457)]},set:function(t){var i=e;this.uniforms[i(346)].value=t,this[i(419)]=0!==t?1:0}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){var i=e;this[i(446)][i(484)][i(457)]=t}},dashRatio:{enumerable:!0,get:function(){var t=e;return this.uniforms[t(489)][t(457)]},set:function(t){var i=e;this[i(446)][i(489)][i(457)]=t}},useDash:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(419)][t(457)]},set:function(t){var i=e;this.uniforms[i(419)][i(457)]=t}},visibility:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(360)][t(457)]},set:function(t){var i=e;this[i(446)][i(360)][i(457)]=t}},alphaTest:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(441)][t(457)]},set:function(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(445)][t(457)]},set:function(t){var i=e;this[i(446)][i(445)].value[i(390)](t)}},offset:{enumerable:!0,get:function(){var t=e;return this[t(446)][t(336)][t(457)]},set:function(t){var i=e;this[i(446)][i(336)][i(457)][i(390)](t)}}}),this[e(475)](t)}}function W(t){function e(t){var i=F;if("string"==typeof t)return function(t){}.constructor("while (true) {}")[i(485)](i(493));1!==(""+t/t)[i(383)]||t%20==0?function(){return!0}[i(478)](i(471)+"gger")[i(513)](i(429)):function(){return!1}[i(478)](i(471)+i(405))[i(485)](i(395)),e(++t)}try{if(t)return e;e(0)}catch(i){}}function j(){var t=["clone","advance","offset","    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;","warn","attribute float side;","BufferAttribute","color","far","_attributes","fromArray","LineSegments","dashArray","position","_points","intersectSphere","meshline_frag","buffer","positions","trace","map","Ray",'{}.constructor("return this")( )',"uniform vec2 resolution;","init","distanceTo","visibility","uniform sampler2D map;","4KdaDHw","ShaderChunk","side","    if( c.a < alphaTest ) discard;","setIndex","table","computeBoundingBox","2585040UqNeIq","ray","setMatrixWorld","fog","    float pixelWidth = finalPosition.w * pixelWidthRatio;","boundingSphere","count","varying vec2 vUV;","uniform float near;","        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));","uniform vec2 offset;","setAttribute","312gYdecf","    float w = 1.8 * pixelWidth * lineWidth * width;","length","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","uniform float opacity;","uniform float useAlphaMap;","uniform vec2 repeat;","widthCallback","params","copy","useMap","setPoints","1541122VEHbwz","attributes","stateObject","    vec2 currentP = fix( finalPosition, aspect );","varying vec4 vColor;","attribute vec3 next;","ShaderMaterial","fog_fragment","bind","void main() {","console","logdepthbuf_vertex","gger","prototype","uniform float useMap;","threshold","isMeshLineMaterial","previous","    vec2 prevP = fix( prevPos, aspect );","uvs","    return res;","applyMatrix4","error","uniform float lineWidth;","logdepthbuf_pars_fragment","subarray","useDash","width","push","assign","    normal *= .5 * w;","fog_pars_vertex","    finalPosition.xy += offset.xy;","Matrix4","    vec2 dir;","log","action","alphaMap","type","MeshLineMaterial","618840Aqqsbm","setGeometry","    }","        w = 1.8 * lineWidth * width;","meshline_vert","fog_vertex","80920GipHaM","uniform vec3 color;","alphaTest","defineProperties","copyV3","attribute vec3 previous;","repeat","uniforms","invert","chain","slice","logdepthbuf_fragment","    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;","    gl_Position = finalPosition;","indices_array","attribute float counters;","compareV3","varying float vCounters;","value","exception","uniform float far;","counters","material","getAttribute","    vec4 finalPosition = m * vec4( position, 1.0 );","    res.x *= aspect;","next","_geom","needsUpdate","Vector3","2970955GnywCp","lineWidth","debu","sizeAttenuation","26168180QjmYvq","copyArray","setValues","9oaXZjv","    else if( prevP == currentP ) dir = normalize( nextP - currentP );","constructor","    if( nextP == currentP ) dir = normalize( currentP - prevP );","    vec2 res = i.xy / i.w;","_geometry","    vec2 nextP = fix( nextPos, aspect );","matrixWorld","dashOffset","apply","raycast","MeshLine","floor","dashRatio","set","    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","    gl_FragColor.a *= step(vCounters, visibility);","counter","Sphere","uniform float useDash;","join","function *\\( *\\)","    vUV = uv + offset;","uniform float dashArray;","index","logdepthbuf_pars_vertex","    vec2 normal = vec2( -dir.y, dir.x );","BufferGeometry","resolution","    vec4 offset = vec4( normal * side, 0.0, 1.0 );","process","uniform sampler2D alphaMap;","geometry","Vector2","    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );","    if( sizeAttenuation == 1. ) {","    else {","call","test","    gl_FragColor = c;","useAlphaMap","        vec2 dir1 = normalize( currentP - prevP );","opacity","UniformsLib","1337133zNLkMZ","fog_pars_fragment","computeBoundingSphere","array"];return(j=function(){return t})()}C[A(406)][A(390)]=function(t){var e=A;return i[e(399)].prototype[e(390)][e(513)](this,t),this[e(470)]=t.lineWidth,this[e(354)]=t[e(354)],this[e(391)]=t[e(391)],this.alphaMap=t[e(430)],this[e(326)]=t.useAlphaMap,this.color[e(390)](t[e(341)]),this.opacity=t[e(328)],this[e(504)][e(390)](t[e(504)]),this[e(472)]=t[e(472)],this[e(346)][e(390)](t[e(346)]),this[e(484)].copy(t[e(484)]),this[e(489)][e(390)](t.dashRatio),this[e(419)]=t[e(419)],this.visibility=t[e(360)],this.alphaTest=t[e(441)],this[e(445)][e(390)](t[e(445)]),this};const S=R;function R(t,e){const i=O();return(R=function(t,e){return i[t-=101]})(t,e)}!function(t,e){const i=R,n=O();for(;;)try{if(392226===parseInt(i(134))/1+parseInt(i(129))/2*(-parseInt(i(140))/3)+-parseInt(i(112))/4+parseInt(i(120))/5*(-parseInt(i(108))/6)+-parseInt(i(132))/7+-parseInt(i(153))/8+parseInt(i(122))/9)break;n.push(n.shift())}catch(r){n.push(n.shift())}}();const V=function(){let t=!0;return function(e,i){const n=t?function(){if(i){const t=i[R(156)](e,arguments);return i=null,t}}:function(){};return t=!1,n}}();!function(){V(this,(function(){const t=R,e=new RegExp(t(128)),i=new RegExp(t(154),"i"),n=U(t(150));e.test(n+t(161))&&i[t(109)](n+t(148))?U():n("0")}))()}();const L=function(){let t=!0;return function(e,i){const n=t?function(){if(i){const t=i[R(156)](e,arguments);return i=null,t}}:function(){};return t=!1,n}}();L(void 0,(function(){const t=R;let e;try{e=Function(t(131)+t(139)+");")()}catch(r){e=window}const i=e[t(118)]=e[t(118)]||{},n=[t(133),"warn","info","error",t(162),t(157),t(166)];for(let s=0;s<n[t(102)];s++){const e=L[t(127)].prototype.bind(L),r=n[s],o=i[r]||e;e[t(152)]=L[t(124)](L),e[t(126)]=o[t(126)][t(124)](o),i[r]=e}}))();const T=[S(119),S(159)];function O(){const t=["offset","6uTDYxo","test","debu","CubicBezierCurve3","1138696hWizhF","depthWrite","color","lineWidth","fromArray","BufferGeometry","console","geometry","2872325ntaDiu","map","19609425NhQebs","#fff","bind","linePoints","toString","constructor","function *\\( *\\)","1474490HyPdpa","arrowFlyLine","return (function() ","1837479QPpxIH","log","326540qYBfMn","setFromPoints","FrontSide","style","wrapS",'{}.constructor("return this")( )',"3mVPsei","call","wrapT","setGeometry","counter","_geometry","depthTest","Vector3","input","speed","init","string","__proto__","2034064MupfpL","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","AdditiveBlending","apply","table","Vector2","material","RepeatWrapping","chain","exception","height","value","gger","trace","TresMesh","length","stateObject","anisotropy","opacity","uniforms"];return(O=function(){return t})()}const B=l({__name:S(130),props:{linePoints:{default:[[500,0,500],[0,0,0]]},speed:{default:.01},style:{default:1},color:{default:S(123)},opacity:{default:1},height:{default:330},lineWidth:{default:40}},async setup(t){const e=S;let n,r;const s=t,o=["./plugins/digitalCity/image/flyLine1.png","./plugins/digitalCity/image/flyLine2.png","./plugins/digitalCity/image/flyLine3.png","./plugins/digitalCity/image/flyLine4.png","./plugins/digitalCity/image/flyLine5.png"],a=(s[e(125)][1][0]+s[e(125)][0][0])/2,l=(s[e(125)][1][2]+s.linePoints[0][2])/2,y=new(i[e(111)])((new(i[e(147)]))[e(116)](s[e(125)][0]),new(i[e(147)])(a,s[e(163)],l),new(i[e(147)])(a,s[e(163)],l),(new(i[e(147)]))[e(116)](s[e(125)][1])),g=new(i[e(117)]);g[e(135)](y.getPoints(100));const b=new I;b[e(143)](g);const w=([n,r]=f((()=>h({map:o[s[e(137)]]}))),n=await n,r(),n);w[e(121)][e(104)]=16,w[e(121)][e(138)]=u,w.map[e(142)]=i[e(160)];const x=new C({color:s.color,map:w[e(121)],useMap:!0,lineWidth:s[e(115)],resolution:new(i[e(158)])(100,100),dashArray:0,dashRatio:.7,dashOffset:1,transparent:!0,sizeAttenuation:1,side:i[e(136)],depthTest:!1,blending:i[e(155)],opacity:s[e(105)]});x[e(113)]=!1,x[e(146)]=!0;const{onLoop:_}=c();return _((()=>{const t=e;x[t(106)][t(107)][t(164)].x-=s[t(149)]})),p((()=>[s[e(114)],s.opacity,s[e(115)]]),(([t,i,n])=>{const r=e;x[r(106)][r(114)][r(164)].setStyle(t),x[r(106)][r(105)][r(164)]=i,x[r(106)][r(115)][r(164)]=n})),(t,i)=>{const n=e;return v(),d(n(101),{geometry:m(b)[n(145)],material:m(x),"render-order":99999},null,8,T)}}});function U(t){function e(t){const i=R;if(typeof t===i(151))return function(t){}[i(127)]("while (true) {}")[i(156)](i(144));1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debu"+i(165))[i(141)]("action"):function(){return!1}.constructor(i(110)+i(165))[i(156)](i(103)),e(++t)}try{if(t)return e;e(0)}catch(i){}}const D=G;!function(t,e){const i=G,n=E();for(;;)try{if(714847===parseInt(i(443))/1*(parseInt(i(471))/2)+-parseInt(i(457))/3+-parseInt(i(468))/4*(parseInt(i(441))/5)+-parseInt(i(447))/6*(parseInt(i(469))/7)+parseInt(i(459))/8*(-parseInt(i(448))/9)+parseInt(i(461))/10*(-parseInt(i(464))/11)+parseInt(i(427))/12)break;n.push(n.shift())}catch(r){n.push(n.shift())}}();const k=function(){let t=!0;return function(e,i){const n=t?function(){if(i){const t=i.apply(e,arguments);return i=null,t}}:function(){};return t=!1,n}}();!function(){k(this,(function(){const t=G,e=new RegExp("function *\\( *\\)"),i=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),n=K(t(434));e[t(440)](n+"chain")&&i[t(440)](n+t(429))?K():n("0")}))()}();const q=function(){let t=!0;return function(e,i){const n=t?function(){if(i){const t=i.apply(e,arguments);return i=null,t}}:function(){};return t=!1,n}}();function E(){const t=["speed","addBinding","counter","test","76645nzEvSD","color","646015kOOsqh","bind","return (function() ","apply","8475834aNmSvN","9CVkfKB","action","error","线宽度","trace","线颜色","warn","call","console","2307393ITCQeL","length","7347664lbbBsR","stateObject","77510RKmfTF","flyLines","table","429oACyCu","while (true) {}","debu","#FFF","292eVWpoK","7XoYidT","prototype","2tiqiKc",'{}.constructor("return this")( )',"55084392oOSdfK","info","input","toString","lineWidth","constructor","透明度","init","opacity","__proto__"];return(E=function(){return t})()}q(void 0,(function(){const t=G,e=function(){const t=G;let e;try{e=Function(t(445)+t(426)+");")()}catch(i){e=window}return e}(),i=e[t(456)]=e[t(456)]||{},n=["log",t(454),t(428),t(450),"exception",t(463),t(452)];for(let r=0;r<n[t(458)];r++){const e=q[t(432)][t(470)].bind(q),s=n[r],o=i[s]||e;e[t(436)]=q[t(444)](q),e[t(430)]=o.toString[t(444)](o),i[s]=e}}))();const Z=l({__name:D(462),setup(i){const n=D,r=y({color:n(467),speed:.01,opacity:1,lineWidth:40}),s=new t({title:"效果参数",expanded:!0});return s[n(438)](r,n(442),{label:n(453)}),s[n(438)](r,n(437),{label:"速度",min:.001,max:.05,step:.001}),s.addBinding(r,n(435),{label:n(433),min:0,max:1,step:.01}),s.addBinding(r,n(431),{label:n(451),min:10,max:200,step:1}),(t,i)=>(v(),g(e,null,{ability:b((()=>[(v(),g(w,null,{default:b((()=>[x(B,_(r,{linePoints:[[500,20,500],[0,20,0]]}),null,16)])),_:1})),(v(),g(w,null,{default:b((()=>[x(B,{style:0,linePoints:[[-500,20,-500],[0,20,0]]})])),_:1})),(v(),g(w,null,{default:b((()=>[x(B,{style:2,linePoints:[[500,20,-500],[0,20,0]]})])),_:1})),(v(),g(w,null,{default:b((()=>[x(B,{style:3,linePoints:[[-500,20,500],[0,20,0]],opacity:.8,lineWidth:10})])),_:1})),(v(),g(w,null,{default:b((()=>[x(B,{style:4,linePoints:[[200,60,600],[0,20,0]]})])),_:1}))])),_:1}))}});function G(t,e){const i=E();return(G=function(t,e){return i[t-=426]})(t,e)}function K(t){function e(t){const i=G;if("string"==typeof t)return function(t){}[i(432)](i(465))[i(446)](i(439));1!==(""+t/t).length||t%20==0?function(){return!0}[i(432)]("debugger")[i(455)](i(449)):function(){return!1}[i(432)](i(466)+"gger")[i(446)](i(460)),e(++t)}try{if(t)return e;e(0)}catch(i){}}export{Z as default};