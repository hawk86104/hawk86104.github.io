import{m as n,br as o,C as r,aB as t,a0 as e}from"./three.fIUcjaNz1730883607874.js";!function(n,o){for(var r=s,t=l();;)try{if(976398===-parseInt(r(422))/1*(parseInt(r(408))/2)+-parseInt(r(401))/3*(parseInt(r(409))/4)+parseInt(r(405))/5*(parseInt(r(397))/6)+-parseInt(r(412))/7*(parseInt(r(381))/8)+-parseInt(r(383))/9*(parseInt(r(385))/10)+-parseInt(r(421))/11*(parseInt(r(379))/12)+parseInt(r(410))/13*(parseInt(r(426))/14))break;t.push(t.shift())}catch(e){t.push(t.shift())}}();var i=function(){var n=!0;return function(o,r){var t=n?function(){if(r){var n=r[s(400)](o,arguments);return r=null,n}}:function(){};return n=!1,t}}();!function(){i(this,(function(){var n=s,o=new RegExp(n(376)),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),t=c("init");o[n(413)](t+n(403))&&r.test(t+n(425))?c():t("0")}))()}();var a=function(){var n=!0;return function(o,r){var t=n?function(){if(r){var n=r[s(400)](o,arguments);return r=null,n}}:function(){};return n=!1,t}}();function l(){var n=["call","constructor","33414EMIIyo","__proto__","exception","apply","3pYVPPb","while (true) {}","chain","trace","60cbZhtc","stateObject","\n      uniform vec3 glowColor;\n      uniform float falloff;\n      uniform float glowSharpness;\n      uniform float glowInternalRadius;\n      uniform float opacity;\n\n      varying vec3 vPosition;\n      varying vec3 vNormal;\n\n      void main()\n      {\n        // Normal\n        vec3 normal = normalize(vNormal);\n        if(!gl_FrontFacing)\n            normal *= - 1.0;\n        vec3 viewDirection = normalize(cameraPosition - vPosition);\n        float fresnel = dot(viewDirection, normal);\n        fresnel = pow(fresnel, glowInternalRadius + 0.1);\n        float falloff = smoothstep(0., falloff, fresnel);\n        float fakeGlow = fresnel;\n        fakeGlow += fresnel * glowSharpness;\n        fakeGlow *= falloff;\n        gl_FragColor = vec4(clamp(glowColor * fresnel, 0., 1.0), clamp(fakeGlow, 0., opacity));\n\n        #include <tonemapping_fragment>\n        #include <colorspace_fragment>\n      } \n      ","36yAOaNl","6829980BpKXdj","13ntguzp","\n      varying vec3 vPosition;\n      varying vec3 vNormal;\n\n      void main() {\n        vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n        gl_Position = projectionMatrix * viewMatrix * modelPosition;\n        vec4 modelNormal = modelMatrix * vec4(normal, 0.0);\n        vPosition = modelPosition.xyz;\n        vNormal = modelNormal.xyz;\n\n      }\n    ","707lsIsHu","test","depthTest","glowColor","uniforms","error","blendMode","debu","console","22owWSFI","68212pbBsjV","falloff","vertexShader","input","86761402weoabR","function *\\( *\\)","length","toString","5068164zURDnN","glowInternalRadius","66760uBzvOo","fragmentShader","5983407rsgaLs","gger","10fvocPY","opacity","table","counter","#00d5ff","action",'{}.constructor("return this")( )',"log","side","bind"];return(l=function(){return n})()}function s(n,o){var r=l();return(s=function(n,o){return r[n-=376]})(n,o)}a(void 0,(function(){for(var n=s,o=function(){var n,o=s;try{n=Function("return (function() "+o(391)+");")()}catch(r){n=window}return n}(),r=o[n(420)]=o[n(420)]||{},t=[n(392),"warn","info",n(417),n(399),n(387),n(404)],e=0;e<t[n(377)];e++){var i=a[n(396)].prototype.bind(a),l=t[e],f=r[l]||i;i[n(398)]=a[n(394)](a),i[n(378)]=f.toString[n(394)](f),r[l]=i}}))();const f=class extends n{constructor(n={}){var i=s;super(),this[i(424)]=i(411),this[i(382)]=i(407),this[i(416)]={opacity:new o(void 0!==n[i(386)]?n.opacity:1),glowInternalRadius:new o(void 0!==n[i(380)]?n[i(380)]:6),glowSharpness:new o(void 0!==n.glowSharpness?n.glowSharpness:.5),falloff:new o(void 0!==n.falloff?n[i(423)]:.1),glowColor:new o(void 0!==n[i(415)]?new r(n[i(415)]):new r(i(389)))},this.setValues(n),this[i(414)]=void 0!==n[i(414)]&&n[i(414)],this.blending=void 0!==n[i(418)]?n[i(418)]:t,this.transparent=!0,this.side=void 0!==n[i(393)]?n.side:e}};function c(n){function o(n){var r=s;if("string"==typeof n)return function(n){}[r(396)](r(402))[r(400)](r(388));1!==(""+n/n).length||n%20==0?function(){return!0}[r(396)](r(419)+r(384))[r(395)](r(390)):function(){return!1}.constructor(r(419)+"gger")[r(400)](r(406)),o(++n)}try{if(n)return o;o(0)}catch(r){}}export{f as _};