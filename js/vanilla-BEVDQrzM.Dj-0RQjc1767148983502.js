import{importShared as Me}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{getDefaultExportFromCjs as I}from"./_commonjsHelpers.B57D3uns1767148983502.js";import{B as We}from"./three-custom-shader-material.es.DIiohWIA1767148983502.js";var Se=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Xe=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],De=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],He=Se,Qe=He.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Z=De;Z=Z.slice().filter(function(l){return!/^(gl\_|texture)/.test(l)});var Ye=Z.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Je=la,Ze=Se,ne=Xe,ke=De,ea=Qe,aa=Ye,_=999,oe=9999,R=0,G=1,le=2,ce=3,se=4,j=5,ta=6,ra=7,ia=8,ue=9,na=10,me=11,oa=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function la(l){var e=0,t=0,r=_,a,n,i=[],c=[],u=1,s=0,o=0,v=!1,f=!1,m="",S;l=l||{};var M=ke,D=Ze;l.version==="300 es"&&(M=aa,D=ea);for(var h={},re={},e=0;e<M.length;e++)h[M[e]]=!0;for(var e=0;e<D.length;e++)re[D[e]]=!0;return function(d){return c=[],d!==null?Ae(d):Ne()};function p(d){d.length&&c.push({type:oa[r],data:d,position:o,line:u,column:s})}function Ae(d){e=0,d.toString&&(d=d.toString()),m+=d.replace(/\r\n/g,`
`),S=m.length;for(var T;a=m[e],e<S;){switch(T=e,r){case R:e=Ie();break;case G:e=Be();break;case le:e=ie();break;case ce:e=Le();break;case se:e=Re();break;case me:e=qe();break;case j:e=Ge();break;case oe:e=Ue();break;case ue:e=Ee();break;case _:e=Ve();break}if(T!==e)switch(m[T]){case`
`:s=0,++u;break;default:++s;break}}return t+=e,m=m.slice(e),c}function Ne(d){return i.length&&p(i.join("")),r=na,p("(eof)"),c}function Ve(){return i=i.length?[]:i,n==="/"&&a==="*"?(o=t+e-1,r=R,n=a,e+1):n==="/"&&a==="/"?(o=t+e-1,r=G,n=a,e+1):a==="#"?(r=le,o=t+e,e):/\s/.test(a)?(r=ue,o=t+e,e):(v=/\d/.test(a),f=/[^\w_]/.test(a),o=t+e,r=v?se:f?ce:oe,e)}function Ee(){return/[^\s]/g.test(a)?(p(i.join("")),r=_,e):(i.push(a),n=a,e+1)}function ie(){return(a==="\r"||a===`
`)&&n!=="\\"?(p(i.join("")),r=_,e):(i.push(a),n=a,e+1)}function Be(){return ie()}function Ie(){return a==="/"&&n==="*"?(i.push(a),p(i.join("")),r=_,e+1):(i.push(a),n=a,e+1)}function Le(){if(n==="."&&/\d/.test(a))return r=j,e;if(n==="/"&&a==="*")return r=R,e;if(n==="/"&&a==="/")return r=G,e;if(a==="."&&i.length){for(;L(i););return r=j,e}if(a===";"||a===")"||a==="("){if(i.length)for(;L(i););return p(a),r=_,e+1}var d=i.length===2&&a!=="=";if(/[\w_\d\s]/.test(a)||d){for(;L(i););return r=_,e}return i.push(a),n=a,e+1}function L(d){var T=0,q,K;do{if(q=ne.indexOf(d.slice(0,d.length+T).join("")),K=ne[q],q===-1){if(T--+d.length>0)continue;K=d.slice(0,1).join("")}return p(K),o+=K.length,i=i.slice(K.length),i.length}while(!0)}function qe(){return/[^a-fA-F0-9]/.test(a)?(p(i.join("")),r=_,e):(i.push(a),n=a,e+1)}function Re(){return a==="."||/[eE]/.test(a)?(i.push(a),r=j,n=a,e+1):a==="x"&&i.length===1&&i[0]==="0"?(r=me,i.push(a),n=a,e+1):/[^\d]/.test(a)?(p(i.join("")),r=_,e):(i.push(a),n=a,e+1)}function Ge(){return a==="f"&&(i.push(a),n=a,e+=1),/[eE]/.test(a)||(a==="-"||a==="+")&&/[eE]/.test(n)?(i.push(a),n=a,e+1):/[^\d]/.test(a)?(p(i.join("")),r=_,e):(i.push(a),n=a,e+1)}function Ue(){if(/[^\d\w_]/.test(a)){var d=i.join("");return re[d]?r=ia:h[d]?r=ra:r=ta,p(i.join("")),r=_,e}return i.push(a),n=a,e+1}}var ca=Je,sa=ua;function ua(l,e){var t=ca(e),r=[];return r=r.concat(t(l)),r=r.concat(t(null)),r}const ve=I(sa);var U,de;function ma(){if(de)return U;de=1,U=l;function l(e){for(var t=!1,r=0,a=0;a<e.length;a++)switch(t=t||e[a].type==="keyword"&&e[a].data==="for",e[a].data){case"(":e[a].depth=t?r++:r;break;case"{":e[a].depth=t?r:r++,t=!1;break;case"}":e[a].depth=--r;break;default:e[a].depth=r}for(var a=0;a<e.length;a++){var n=e[a],i=a+1;if(!(n.type!=="ident"&&n.type!=="keyword")&&(c(),e[i].type==="ident"&&(c(),i++,e[i].data==="("))){for(;e[i]&&e[i].data!==";"&&e[i].data!=="{";)e[i++].depth++;e[i]&&e[i].data==="{"&&e[i].depth++}}return e;function c(){for(;e[i]&&(e[i].type==="whitespace"||e[i].data==="["||e[i].data==="]"||e[i].data==="integer");)i++}}return U}var W,fe;function va(){if(fe)return W;fe=1,W=l;function l(e){var t=[0],r=t[0],a=0;if(!e||!e.length)return e;if(!("depth"in e[0]))throw new Error("glsl-token-scope: No scope depth defined on tokens! Use glsl-token-depth on these tokens first");for(var n=0;n<e.length;n++){var i=e[n],c=i.depth;c>a?t.push(++r):c<a&&t.splice(-1,1),i.scope=t[t.length-1],i.stack=t.slice(),a=i.depth}return e}return W}var X,pe;function da(){if(pe)return X;pe=1,X=l;function l(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.property=!1,r.type==="ident"){for(var a=t;e[--a]&&e[a].type==="whitespace";);e[a]&&e[a].type==="operator"&&e[a].data==="."&&(r.property=!0)}}return e}return X}var H,_e;function fa(){return _e||(_e=1,H={"<<=":!0,">>=":!0,"++":!0,"--":!0,"+=":!0,"-=":!0,"*=":!0,"/=":!0,"%=":!0,"&=":!0,"^=":!0,"|=":!0,"=":!0}),H}var Q,xe;function pa(){return xe||(xe=1,Q={precision:!0,highp:!0,mediump:!0,lowp:!0,attribute:!0,const:!0,uniform:!0,varying:!0,break:!0,continue:!0,do:!0,for:!0,while:!0,if:!0,else:!0,in:!0,out:!0,inout:!0,true:!0,false:!0,return:!0}),Q}var Y,ge;function _a(){if(ge)return Y;ge=1;var l=fa(),e=pa();Y=t;function t(r){for(var a=0,n=0;n<r.length;n++){var i=r[n],c=i.type;i.assignment=!1,i.declaration=!1,!(c!=="ident"&&c!=="builtin")&&(a=n+1,o(),r[a].type==="operator"&&l[r[a].data]&&(i.assignment=!0))}for(var n=0;n<r.length;n++){var u=r[n],c=u.type,s=u.data;if(u.declaration=!1,c==="keyword"){if(e[s])continue}else if(c!=="ident")continue;if(a=n+1,v(),r[a].type==="ident"){if(r[a++].declaration=!0,v(),r[a].data==="("){for(a++,o();r[a]&&r[a].data!==")"&&!(r[a].type!=="keyword"&&r[a].type!=="ident");)a++,o(),r[a].type==="ident"&&(r[a++].declaration=!0,o(),v(),o(),r[a].data===","&&(a++,o()));n=a;continue}for(;r[a]&&r[a].data!==";";)r[a].data===","?(a++,o(),(r[a].declaration=r[a].type==="ident")&&a++):(o(),f(),o(),a++);n=a}}for(var n=0;n<r.length;n++){var i=r[n];if(i.type==="keyword"&&i.data==="struct"&&(a=n+1,o(),r[a].type==="ident"&&(a++,o(),r[a++].data==="{"))){for(o();r[a].type==="ident"||r[a].type==="keyword";){do a++,o(),r[a].structMember=!0,r[a].declaration=!1,a++,v();while(r[a].data===",");r[a].data===";"&&a++,o()}if(a++,o(),r[a].type==="ident")for(r[a].declaration=!0,o();r[++a].data===",";)o(),a++,o(),r[a].type==="ident"&&(r[a].declaration=!0),o()}}return r;function o(m){for(;r[a]&&r[a].type==="whitespace";)a++}function v(){for(;r[a]&&(r[a].type==="integer"||r[a].data==="["||r[a].data==="]"||r[a].type==="whitespace");)a++}function f(){if(r[a]&&r[a].data==="("){var m=0;do{if(r[a].data===";")break;r[a].data==="("&&m++,r[a].data===")"&&m--}while(m&&r[++a])}}}return Y}var xa=ga;function ga(l,e){ma()(l),va()(l),da()(l),_a()(l);for(var t=ha(l),r=e||ya(),a={},n=0;n<l.length;n++){var i=l[n],c=i.stack,u=i.data;if(i.descoped=!1,i.type==="ident"&&!i.property&&!i.structMember){for(var s=!1,o=c.length-1;o>=0;o--){var v=t[c[o]];if(v&&v[u]){if(s=!0,o)break;i.descoped=i.data,i.data=a[u]=a[u]||r(u,i)||i.data}}s||(i.descoped=i.data,i.data=a[u]=a[u]||r(u,i)||i.data)}}return l}function ya(){var l=0;return function(t){return t+"_"+(l++).toString(36)}}function ha(l){for(var e={},t=0;t<l.length;t++){var r=l[t];r.declaration&&(e[r.scope]=e[r.scope]||{},e[r.scope][r.data]=r)}return e}const ye=I(xa);var za=ba;function ba(l){for(var e=[],t=0;t<l.length;t++)l[t].type!=="eof"&&e.push(l[t].data);return e.join("")}const J=I(za);var wa=Pa;function Pa(l){var e=null,t=null,r=0,a=0,n=0,i=0,c=0,u=[],s,o,v;for(s=0,o;s<l.length;s++)if(v=l[s],v.data==="{"){if(r&&r++||(o=m(s,z(")"),z()),o<0)||(i=o,o=m(o,z("("),z(")")),o<0)||(c=o,o=m(o,C),o<0)||l[o].type!=="ident"||(t=l[o].data,o=m(o,C),o<0))continue;r=1,a=s,e=l[o].data,n=o;var f=m(o,C);switch(l[f]&&l[f].data){case"lowp":case"highp":case"mediump":n=f}}else if(r&&v.data==="}"){if(--r)continue;u.push({name:t,type:e,body:[a+1,s],args:[c,i+1],outer:[n,s+1]})}for(s=0;s<l.length;s++)if(v=l[s],v.data===";"){if(o=m(s,z(")"),z()),o<0||(i=o,o=m(o,z("("),z(")")),o<0)||(c=o,o=m(o,C),o<0)||l[o].type!=="ident"||(t=l[o].data,o=m(o,C),o<0)||l[o].type==="operator"||l[o].data==="return")continue;e=l[o].data,u.push({name:t,type:e,body:!1,args:[c,i+1],outer:[o,s+1]})}return u.sort(function(S,M){return S.outer[0]-M.outer[0]});function m(S,M,D){for(var h=S-1;h>=0;h--){if(M(l[h]))return h;if(D&&D(l[h]))return-1}return-1}}function z(l){return function(e){return e.type==="operator"&&(!l||e.data===l)}}function C(l){return l.type!=="whitespace"}const he=I(wa),P=await Me("three"),{Vector3:$,Vector2:Ma,Vector4:Sa,Matrix3:Da,Matrix4:Ta,Color:ae,Texture:Ka,MathUtils:ja}=await Me("three"),Ca={normal:"normal",add:"add",subtract:"subtract",multiply:"multiply",lighten:"lighten",darken:"darken",divide:"divide",overlay:"overlay",screen:"screen",softlight:"softlight",negation:"negation",reflect:"reflect"},Te={perlin:"perlin",simplex:"simplex",cell:"cell",curl:"curl",white:"white"},te={local:"local",world:"world",uv:"uv"},$a={phong:P.MeshPhongMaterial,physical:P.MeshPhysicalMaterial,toon:P.MeshToonMaterial,basic:P.MeshBasicMaterial,lambert:P.MeshLambertMaterial,standard:P.MeshStandardMaterial};function ze(l){return typeof l=="string"?new ae(l).convertLinearToSRGB():l}function Fa(l){switch(l){case"alpha":return{min:0,max:1};case"scale":return{min:0};case"map":return{image:void 0};default:return{}}}function Ke(l){return l instanceof $||l instanceof Ma||l instanceof Sa||l instanceof Da||l instanceof Ta}function be(l){return Ke(l)?l.toArray():l instanceof ae?"#"+l.clone().convertLinearToSRGB().getHexString():l instanceof Ka?l.image.src:l}class y{constructor(e,t,r){this.uuid=ja.generateUUID().replace(/-/g,"_"),this.name="LayerMaterial",this.mode="normal",this.visible=!0;const a=Object.getOwnPropertyNames(e).filter(i=>i.startsWith("u_")).reduce((i,c)=>{var u;let s=(u=Object.getOwnPropertyDescriptor(e,c))==null?void 0:u.value;return(Ke(s)||s instanceof ae)&&(s=s.clone()),{...i,[c.slice(1)]:s}},{});for(const i in a){const c=i.split("_")[1];t?.[c]!==void 0&&(a[i]=t[c])}t&&Object.keys(t).map(i=>{t[i]!==void 0&&(this[i]=t[i])}),this.uniforms={},this.schema=[];const n={};Object.keys(a).map(i=>{const c=i.split("_")[1];this.uniforms[`u_${this.uuid}_${c}`]={value:ze(a[i])},this.schema.push({value:a[i],label:c}),n[c]={set:u=>{this.uniforms[`u_${this.uuid}_${c}`].value=ze(u)},get:()=>this.uniforms[`u_${this.uuid}_${c}`].value}}),t!=null&&t.name&&(this.name=t.name),t!=null&&t.mode&&(this.mode=t.mode),t!=null&&t.visible&&(this.visible=t.visible),Object.defineProperties(this,n),this.vertexShader="",this.fragmentShader="",this.vertexVariables="",this.fragmentVariables="",this.onParse=r,this.buildShaders(e),this.schema.push({value:this.mode,label:"mode",options:Object.values(Ca)}),this.schema.push({value:this.visible,label:"visible"})}buildShaders(e){var t;const r=Object.getOwnPropertyNames(e).filter(o=>o==="fragmentShader"||o==="vertexShader").reduce((o,v)=>{var f;return{...o,[v]:(f=Object.getOwnPropertyDescriptor(e,v))==null?void 0:f.value}},{}),a={vert:ve(r.vertexShader||""),frag:ve(r.fragmentShader||"")},n={vert:ye(a.vert,this.renameTokens.bind(this)),frag:ye(a.frag,this.renameTokens.bind(this))},i={vert:he(n.vert),frag:he(n.frag)},c={vert:i.vert.map(o=>o.name).indexOf("main"),frag:i.frag.map(o=>o.name).indexOf("main")},u={vert:c.vert>=0?J(n.vert.slice(0,i.vert[c.vert].outer[0])):"",frag:c.frag>=0?J(n.frag.slice(0,i.frag[c.frag].outer[0])):""},s={vert:c.vert>=0?this.getShaderFromIndex(n.vert,i.vert[c.vert].body):"",frag:c.frag>=0?this.getShaderFromIndex(n.frag,i.frag[c.frag].body):""};this.vertexShader=this.processFinal(s.vert,!0),this.fragmentShader=this.processFinal(s.frag),this.vertexVariables=u.vert,this.fragmentVariables=u.frag,(t=this.onParse)==null||t.call(this,this),this.schema=this.schema.filter((o,v)=>{const f=o.label;return v===this.schema.findIndex(m=>m.label===f)})}renameTokens(e){if(e.startsWith("u_")){const t=e.slice(2);return`u_${this.uuid}_${t}`}else if(e.startsWith("v_")){const t=e.slice(2);return`v_${this.uuid}_${t}`}else if(e.startsWith("f_")){const t=e.slice(2);return`f_${this.uuid}_${t}`}else return e}processFinal(e,t){const r=e.replace(/\sf_/gm,` f_${this.uuid}_`).replace(/\(f_/gm,`(f_${this.uuid}_`),a=r.match(/^.*return.*$/gm);let n=r.replace(/^.*return.*$/gm,"");if(a!=null&&a[0]){const i=a[0].replace("return","").trim().replace(";",""),c=this.getBlendMode(i,"lamina_finalColor");n+=t?`lamina_finalPosition = ${i};`:`lamina_finalColor = ${c};`}return n}getShaderFromIndex(e,t){return J(e.slice(t[0],t[1]))}getBlendMode(e,t){switch(this.mode){default:case"normal":return`lamina_blend_alpha(${t}, ${e}, ${e}.a)`;case"add":return`lamina_blend_add(${t}, ${e}, ${e}.a)`;case"subtract":return`lamina_blend_subtract(${t}, ${e}, ${e}.a)`;case"multiply":return`lamina_blend_multiply(${t}, ${e}, ${e}.a)`;case"lighten":return`lamina_blend_lighten(${t}, ${e}, ${e}.a)`;case"darken":return`lamina_blend_darken(${t}, ${e}, ${e}.a)`;case"divide":return`lamina_blend_divide(${t}, ${e}, ${e}.a)`;case"overlay":return`lamina_blend_overlay(${t}, ${e}, ${e}.a)`;case"screen":return`lamina_blend_screen(${t}, ${e}, ${e}.a)`;case"softlight":return`lamina_blend_softlight(${t}, ${e}, ${e}.a)`;case"reflect":return`lamina_blend_reflect(${t}, ${e}, ${e}.a)`;case"negation":return`lamina_blend_negation(${t}, ${e}, ${e}.a)`}}getSchema(){return this.schema.map(({label:e,options:t,...r})=>({label:e,options:t,...Fa(e),...r,value:be(this[e])}))}serialize(){const e=this.constructor.name.split("$")[0];let t=Object.keys(this);t=t.filter(n=>!["uuid","uniforms","schema","fragmentShader","vertexShader","fragmentVariables","vertexVariables","attribs","events","__r3f","onParse"].includes(n));const r={};t.forEach(n=>{r[n]=this[n]});const a={};for(const n in this.uniforms){const i=n.replace(`u_${this.uuid}_`,"");a[i]=be(this.uniforms[n].value)}return{constructor:e,properties:{...a,...r}}}}const V=class je extends y{constructor(e){super(je,{name:"Color",...e})}};V.u_color="red",V.u_alpha=1,V.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;

    void main() {
      return vec4(u_color, u_alpha);
    }
  `;let Ea=V;const g=class k extends y{constructor(e){super(k,{name:"Depth",...e},t=>{t.schema.push({value:t.mapping,label:"mapping",options:["vector","world","camera"]});const r=k.getMapping(t.uuid,t.mapping);t.fragmentShader=t.fragmentShader.replace("lamina_mapping_template",r)}),this.mapping="vector"}static getMapping(e,t){switch(t){default:case"vector":return`length(v_${e}_worldPosition - u_${e}_origin)`;case"world":return`length(v_${e}_position - vec3(0.))`;case"camera":return`length(v_${e}_worldPosition - cameraPosition)`}}};g.u_near=2,g.u_far=10,g.u_origin=new $(0,0,0),g.u_colorA="white",g.u_colorB="black",g.u_alpha=1,g.vertexShader=`
  varying vec3 v_worldPosition;
  varying vec3 v_position;

  void main() {
    v_worldPosition = (vec4(position, 1.0) * modelMatrix).xyz;
    v_position = position;
  }
  `,g.fragmentShader=`   
    uniform float u_alpha;
    uniform float u_near;
    uniform float u_far;
    uniform float u_isVector;
    uniform vec3 u_origin;
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying vec3 v_worldPosition;
    varying vec3 v_position;

    void main() {
      float f_dist = lamina_mapping_template;
      float f_depth = (f_dist - u_near) / (u_far - u_near);
			vec3 f_depthColor =  mix(u_colorB, u_colorA, 1.0 - clamp(f_depth, 0., 1.));
  
  
      return vec4(f_depthColor, u_alpha);
    }
  `;let Ba=g;const F=class E extends y{constructor(e){super(E,{name:"Displace",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(Te)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(te)});const r=E.getNoiseFunction(t.type),a=E.getMapping(t.mapping);t.vertexVariables=t.vertexVariables.replace("lamina_mapping_template",a),t.vertexVariables=t.vertexVariables.replace("lamina_noise_template",r)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"p";case"world":return"(modelMatrix * vec4(p,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}};F.u_strength=1,F.u_scale=1,F.u_offset=new $(0,0,0),F.vertexShader=`
       
      uniform float u_strength;
      uniform float u_scale;
      uniform vec3 u_offset;

      vec3 displace(vec3 p) {
				vec3 f_position = lamina_mapping_template;
        float f_n = lamina_noise_template((f_position + u_offset) * u_scale) * u_strength;
        vec3 f_newPosition = p + (f_n * normal);

				return f_newPosition;
      }

      
			vec3 orthogonal(vec3 v) {
  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
  		  : vec3(0.0, -v.z, v.y));
  		}
  		vec3 recalcNormals(vec3 newPos) {
  		  float offset = 0.001;
  		  vec3 tangent = orthogonal(normal);
  		  vec3 bitangent = normalize(cross(normal, tangent));
  		  vec3 neighbour1 = position + tangent * offset;
  		  vec3 neighbour2 = position + bitangent * offset;
  		  vec3 displacedNeighbour1 = displace(neighbour1);
  		  vec3 displacedNeighbour2 = displace(neighbour2);
  		  vec3 displacedTangent = displacedNeighbour1 - newPos;
  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;
  		  return normalize(cross(displacedTangent, displacedBitangent));
  		}
  
  
      void main() {
       
				vec3 f_newPosition = displace(position);
        lamina_finalNormal = recalcNormals(f_newPosition);

        return f_newPosition;
      }
    `;const b=class Ce extends y{constructor(e){super(Ce,{name:"Fresnel",...e})}};b.u_color="white",b.u_alpha=1,b.u_bias=0,b.u_intensity=1,b.u_power=2,b.u_factor=1,b.vertexShader=`
    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        v_worldPosition = vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]);
        v_worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
        
    }
  `,b.fragmentShader=`   
    uniform vec3 u_color;
    uniform float u_alpha;
    uniform float u_bias;
    uniform float u_intensity;
    uniform float u_power;
    uniform float u_factor;

    varying vec3 v_worldPosition;
    varying vec3 v_worldNormal;

    void main() {
        float f_a = (u_factor  + dot(v_worldPosition, v_worldNormal));
        float f_fresnel = u_bias + u_intensity * pow(abs(f_a), u_power);

        f_fresnel = clamp(f_fresnel, 0.0, 1.0);
        return vec4(f_fresnel * u_color, u_alpha);
    }
  `;const w=class ee extends y{constructor(e){super(ee,{name:"Gradient",...e},t=>{t.schema.push({value:t.axes,label:"axes",options:["x","y","z"]}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(te)});const r=ee.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",r||"local"),t.fragmentShader=t.fragmentShader.replace("axes_template",t.axes||"x")}),this.axes="x",this.mapping="local"}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}};w.u_colorA="white",w.u_colorB="black",w.u_alpha=1,w.u_start=1,w.u_end=-1,w.u_contrast=1,w.vertexShader=`
		varying vec3 v_position;

		vod main() {
      v_position = lamina_mapping_template;
		}
  `,w.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_axis;
    uniform float u_alpha;
    uniform float u_start;
    uniform float u_end;
    uniform float u_contrast;

		varying vec3 v_position;

    void main() {

      float f_step = smoothstep(u_start, u_end, v_position.axes_template * u_contrast);
      vec3 f_color = mix(u_colorA, u_colorB, f_step);

      return vec4(f_color, u_alpha);
    }
  `;const O=class $e extends y{constructor(e){super($e,{name:"Matcap",...e})}};O.u_alpha=1,O.u_map=void 0,O.vertexShader=`
    varying vec3 v_position;
    varying vec3 v_normal;
    
    void main() {
      v_position = normalize( vec3( modelViewMatrix * vec4( position, 1.0 ) ) );
      v_normal = normalize( normalMatrix * normal );
    }
    `,O.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec3 v_position;
		varying vec3 v_normal;

		
    void main() {
			vec3 f_r = reflect( v_position, v_normal );
			float f_m = 2. * sqrt( pow( f_r.x, 2. ) + pow( f_r.y, 2. ) + pow( f_r.z + 1., 2. ) );
			vec2 f_vN = f_r.xy / f_m + .5;

			vec3 f_base = texture2D(u_map, f_vN).rgb;

      return vec4(f_base, u_alpha);
    }
  `;const x=class B extends y{constructor(e){super(B,{name:"noise",...e},t=>{t.schema.push({value:t.type,label:"type",options:Object.values(Te)}),t.schema.push({value:t.mapping,label:"mapping",options:Object.values(te)});const r=B.getNoiseFunction(t.type),a=B.getMapping(t.mapping);t.vertexShader=t.vertexShader.replace("lamina_mapping_template",a),t.fragmentShader=t.fragmentShader.replace("lamina_noise_template",r)}),this.type="perlin",this.mapping="local"}static getNoiseFunction(e){switch(e){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(e){switch(e){default:case"local":return"position";case"world":return"(modelMatrix * vec4(position,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}};x.u_colorA="#666666",x.u_colorB="#666666",x.u_colorC="#FFFFFF",x.u_colorD="#FFFFFF",x.u_alpha=1,x.u_scale=1,x.u_offset=new $(0,0,0),x.vertexShader=`
    varying vec3 v_position;

    void main() {
        v_position = lamina_mapping_template;
    }
  `,x.fragmentShader=`   
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;
    uniform vec3 u_colorC;
    uniform vec3 u_colorD;
    uniform vec3 u_offset;

    uniform float u_alpha;
    uniform float u_scale;

    varying vec3 v_position;


    void main() {
        float f_n = lamina_noise_template((v_position + u_offset) * u_scale);

        float f_step1 = 0.;
        float f_step2 = 0.2;
        float f_step3 = 0.6;
        float f_step4 = 1.;

        vec3 f_color = mix(u_colorA, u_colorB, smoothstep(f_step1, f_step2, f_n));
        f_color = mix(f_color, u_colorC, smoothstep(f_step2, f_step3, f_n));
        f_color = mix(f_color, u_colorD, smoothstep(f_step3, f_step4, f_n));

        return vec4(f_color, u_alpha);
    }
  `;const A=class Fe extends y{constructor(e){super(Fe,{name:"Normal",...e})}};A.u_alpha=1,A.u_direction=new $(1,1,1),A.vertexShader=`   
  varying vec3 v_normals; 

  void main() {
    v_normals = normal;
  }
`,A.fragmentShader=`   
  	uniform float u_alpha;
  	uniform vec3 u_color;
  	uniform vec3 u_direction;

		varying vec3 v_normals;

    void main() {
			vec3 f_normalColor = vec3(1.);
      f_normalColor.x = v_normals.x * u_direction.x;
      f_normalColor.y = v_normals.y * u_direction.y;
      f_normalColor.z = v_normals.z * u_direction.z;

      return vec4(f_normalColor, u_alpha);
    }
  `;const N=class Oe extends y{constructor(e){super(Oe,{name:"Texture",...e})}};N.u_alpha=1,N.u_map=void 0,N.vertexShader=`
    varying vec2 v_uv;
    
    void main() {
        v_uv = uv;
    }
    `,N.fragmentShader=` 
		uniform sampler2D u_map;  
		uniform float u_alpha;  
		varying vec2 v_uv;

    void main() {
			vec4 f_color = texture2D(u_map, v_uv);
      return vec4(f_color.rgb, f_color.a * u_alpha);
    }
  `;const Oa=`
vec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);

}
vec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_burn(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_burn(x.r, y.r),
		lamina_blend_color_burn(x.g, y.g),
		lamina_blend_color_burn(x.b, y.b),
		lamina_blend_color_burn(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_color_dodge(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_color_dodge(x.r, y.r),
		lamina_blend_color_dodge(x.g, y.g),
		lamina_blend_color_dodge(x.b, y.b),
		lamina_blend_color_dodge(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_divide(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_divide(x.r, y.r),
		lamina_blend_divide(x.g, y.g),
		lamina_blend_divide(x.b, y.b),
		lamina_blend_divide(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_overlay(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_overlay(x.r, y.r),
		lamina_blend_overlay(x.g, y.g),
		lamina_blend_overlay(x.b, y.b),
		lamina_blend_overlay(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_reflect(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_reflect(x.r, y.r),
		lamina_blend_reflect(x.g, y.g),
		lamina_blend_reflect(x.b, y.b),
		lamina_blend_reflect(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);

}
float lamina_blend_softlight(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		lamina_blend_softlight(x.r, y.r),
		lamina_blend_softlight(x.g, y.g),
		lamina_blend_softlight(x.b, y.b),
		lamina_blend_softlight(x.a, y.a)
	);

	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);

}
vec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {

	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);

}

`,we=`

float lamina_map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }
`,Pe=`

// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
// Huge thanks to the creators of these algorithms

float lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}
vec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }


float lamina_noise_white(vec2 p) {
  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *
               (0.1 + abs(sin(p.y * 13.0 + p.x))));
}

float lamina_noise_white(vec3 p) {
  return lamina_noise_white(p.xy);
}


vec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float lamina_noise_perlin(vec3 P) {
  vec3 Pi0 = floor(P);        // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);        // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);
  vec4 ixy0 = lamina_noise_permute(ixy + iz0);
  vec4 ixy1 = lamina_noise_permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = lamina_noise_taylorInvSqrt(
      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = lamina_noise_taylorInvSqrt(
      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = lamina_noise_fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),
                 fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return lamina_normalize(2.2 * n_xyz);
}

float lamina_noise_simplex(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
  i = mod(i, 289.0);
  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +
                             vec4(0.0, i1.y, i2.y, 1.0)) +
                    i.x + vec4(0.0, i1.x, i2.x, 1.0));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  // Normalise gradients
  vec4 norm =
      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m =
      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return lamina_normalize(42.0 *
         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}

vec3 lamina_noise_simplex3(vec3 x) {
  float s = lamina_noise_simplex(vec3(x));
  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
  vec3 c = vec3(s, s1, s2);
  return c;
}

vec3 lamina_noise_curl(vec3 p) {
  const float e = .1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);

  vec3 p_x0 = lamina_noise_simplex3(p - dx);
  vec3 p_x1 = lamina_noise_simplex3(p + dx);
  vec3 p_y0 = lamina_noise_simplex3(p - dy);
  vec3 p_y1 = lamina_noise_simplex3(p + dy);
  vec3 p_z0 = lamina_noise_simplex3(p - dz);
  vec3 p_z1 = lamina_noise_simplex3(p + dz);

  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

  const float divisor = 1.0 / (2.0 * e);
  return normalize(vec3(x, y, z) * divisor);
}

vec3 lamina_permute(vec3 x) {
  return mod((34.0 * x + 1.0) * x, 289.0);
}

vec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);
}

// From: https://github.com/Erkaman/glsl-worley
float lamina_noise_worley(vec3 P) {
  float jitter = 1.;
  bool manhattanDistance = false; 

  float K = 0.142857142857; // 1/7
  float Ko = 0.428571428571; // 1/2-K/2
  float  K2 = 0.020408163265306; // 1/(7*7)
  float Kz = 0.166666666667; // 1/6
  float Kzo = 0.416666666667; // 1/2-1/6*2

	vec3 Pi = mod(floor(P), 289.0);
 	vec3 Pf = fract(P) - 0.5;

	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);
	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);
	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);

	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));
	vec3 p1 = lamina_permute(p + Pi.y - 1.0);
	vec3 p2 = lamina_permute(p + Pi.y);
	vec3 p3 = lamina_permute(p + Pi.y + 1.0);

	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);
	vec3 p12 = lamina_permute(p1 + Pi.z);
	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);

	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);
	vec3 p22 = lamina_permute(p2 + Pi.z);
	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);

	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);
	vec3 p32 = lamina_permute(p3 + Pi.z);
	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);

	vec3 ox11 = fract(p11*K) - Ko;
	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;
	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed

	vec3 ox12 = fract(p12*K) - Ko;
	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;
	vec3 oz12 = floor(p12*K2)*Kz - Kzo;

	vec3 ox13 = fract(p13*K) - Ko;
	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;
	vec3 oz13 = floor(p13*K2)*Kz - Kzo;

	vec3 ox21 = fract(p21*K) - Ko;
	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;
	vec3 oz21 = floor(p21*K2)*Kz - Kzo;

	vec3 ox22 = fract(p22*K) - Ko;
	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;
	vec3 oz22 = floor(p22*K2)*Kz - Kzo;

	vec3 ox23 = fract(p23*K) - Ko;
	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;
	vec3 oz23 = floor(p23*K2)*Kz - Kzo;

	vec3 ox31 = fract(p31*K) - Ko;
	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;
	vec3 oz31 = floor(p31*K2)*Kz - Kzo;

	vec3 ox32 = fract(p32*K) - Ko;
	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;
	vec3 oz32 = floor(p32*K2)*Kz - Kzo;

	vec3 ox33 = fract(p33*K) - Ko;
	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;
	vec3 oz33 = floor(p33*K2)*Kz - Kzo;

	vec3 dx11 = Pfx + jitter*ox11;
	vec3 dy11 = Pfy.x + jitter*oy11;
	vec3 dz11 = Pfz.x + jitter*oz11;

	vec3 dx12 = Pfx + jitter*ox12;
	vec3 dy12 = Pfy.x + jitter*oy12;
	vec3 dz12 = Pfz.y + jitter*oz12;

	vec3 dx13 = Pfx + jitter*ox13;
	vec3 dy13 = Pfy.x + jitter*oy13;
	vec3 dz13 = Pfz.z + jitter*oz13;

	vec3 dx21 = Pfx + jitter*ox21;
	vec3 dy21 = Pfy.y + jitter*oy21;
	vec3 dz21 = Pfz.x + jitter*oz21;

	vec3 dx22 = Pfx + jitter*ox22;
	vec3 dy22 = Pfy.y + jitter*oy22;
	vec3 dz22 = Pfz.y + jitter*oz22;

	vec3 dx23 = Pfx + jitter*ox23;
	vec3 dy23 = Pfy.y + jitter*oy23;
	vec3 dz23 = Pfz.z + jitter*oz23;

	vec3 dx31 = Pfx + jitter*ox31;
	vec3 dy31 = Pfy.z + jitter*oy31;
	vec3 dz31 = Pfz.x + jitter*oz31;

	vec3 dx32 = Pfx + jitter*ox32;
	vec3 dy32 = Pfy.z + jitter*oy32;
	vec3 dz32 = Pfz.y + jitter*oz32;

	vec3 dx33 = Pfx + jitter*ox33;
	vec3 dy33 = Pfy.z + jitter*oy33;
	vec3 dz33 = Pfz.z + jitter*oz33;

	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);
	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);
	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);
	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);
	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);
	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);
	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);
	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);
	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);

	vec3 d1a = min(d11, d12);
	d12 = max(d11, d12);
	d11 = min(d1a, d13); // Smallest now not in d12 or d13
	d13 = max(d1a, d13);
	d12 = min(d12, d13); // 2nd smallest now not in d13
	vec3 d2a = min(d21, d22);
	d22 = max(d21, d22);
	d21 = min(d2a, d23); // Smallest now not in d22 or d23
	d23 = max(d2a, d23);
	d22 = min(d22, d23); // 2nd smallest now not in d23
	vec3 d3a = min(d31, d32);
	d32 = max(d31, d32);
	d31 = min(d3a, d33); // Smallest now not in d32 or d33
	d33 = max(d3a, d33);
	d32 = min(d32, d33); // 2nd smallest now not in d33
	vec3 da = min(d11, d21);
	d21 = max(d11, d21);
	d11 = min(da, d31); // Smallest now in d11
	d31 = max(da, d31); // 2nd smallest now not in d31
	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;
	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest
	d12 = min(d12, d21); // 2nd smallest now not in d21
	d12 = min(d12, d22); // nor in d22
	d12 = min(d12, d31); // nor in d31
	d12 = min(d12, d32); // nor in d32
	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz
	d11.y = min(d11.y,d12.z); // Only two more to go
	d11.y = min(d11.y,d11.z); // Done! (Phew!)

  vec2 F = sqrt(d11.xy);
	return F.x; // F1, F2

}

float lamina_noise_swirl(vec3 position) {
    float scale = 0.1;
    float freq = 4. * scale;
    float t = 1.;

    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);

    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));
    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));
    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));
    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));
    
    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;
    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;
    float fbm3 = worley3 * .75 + worley4 * .25;

    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);
    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + 
        curlWorleyFbm.b * .125;

    return curlWorley;
}
  
  
`;class Ia extends We{constructor({color:e,alpha:t,lighting:r,layers:a,name:n,...i}={}){super({baseMaterial:$a[r||"basic"],...i}),this.name="LayerMaterial",this.layers=[],this.lighting="basic";const c=e||"white",u=t??1;this.uniforms={u_lamina_color:{value:typeof c=="string"?new P.Color(c).convertSRGBToLinear():c},u_lamina_alpha:{value:u}},this.layers=a||this.layers,this.lighting=r||this.lighting,this.name=n||this.name,this.refresh()}genShaders(){let e="",t="",r="",a="",n={};return this.layers.filter(i=>i.visible).forEach(i=>{e+=i.vertexVariables+`
`,t+=i.fragmentVariables+`
`,r+=i.vertexShader+`
`,a+=i.fragmentShader+`
`,n={...n,...i.uniforms}}),n={...n,...this.uniforms},{uniforms:n,vertexShader:`
        ${we}
        ${Pe}
        ${e}

        void main() {
          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;

          ${r}

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,fragmentShader:`
        ${we}
        ${Pe}
        ${Oa}
        ${t}

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;

        void main() {
          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);

          ${a}

          csm_DiffuseColor = lamina_finalColor;
         
        }
        `}}refresh(){const{uniforms:e,fragmentShader:t,vertexShader:r}=this.genShaders();super.update({fragmentShader:t,vertexShader:r,uniforms:e})}serialize(){return{constructor:"LayerMaterial",properties:{color:this.color,alpha:this.alpha,name:this.name,lighting:this.lighting}}}set color(e){var t,r;(r=(t=this.uniforms)==null?void 0:t.u_lamina_color)!=null&&r.value&&(this.uniforms.u_lamina_color.value=typeof e=="string"?new P.Color(e).convertSRGBToLinear():e)}get color(){var e,t;return(t=(e=this.uniforms)==null?void 0:e.u_lamina_color)==null?void 0:t.value}set alpha(e){this.uniforms.u_lamina_alpha.value=e}get alpha(){return this.uniforms.u_lamina_alpha.value}}export{Ba as $,Ea as S,Ia as ne};
