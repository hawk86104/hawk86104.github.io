import{importShared as T}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{initShaders as h,create as x,ortho as S,lookAt as N,translate as I,scale as X}from"./ice-utils.DxlS1nCJ1767148983502.js";import{Pane as Y}from"./tweakpane.BQRZXf8M1767148983502.js";var G=`precision mediump float;

varying vec2 texCoords;

uniform sampler2D textureSampler;
uniform float mixParam;
void main()
{
    
    vec4 color=mix(texture2D(textureSampler,texCoords),vec4(.1098,.6784,.1843,1.),mixParam);
    gl_FragColor=color;
}`,V=`attribute vec3 aPosition;
attribute vec2 aTexCoords;

varying vec2 texCoords;

void main()
{
    texCoords=aTexCoords;
    gl_Position=vec4(aPosition,1.);
}`,O=`attribute vec3 aPosition;
attribute vec2 aTexCoords;

uniform mat4 uProjection;
uniform mat4 uView;
uniform mat4 uModel;

varying vec2 texCoords;

void main()
{
    texCoords=aTexCoords;
    gl_Position=uProjection*uView*uModel*vec4(aPosition,1.);
}`,k=`precision mediump float;

varying vec2 texCoords;

uniform sampler2D textureSampler;

void main()
{
    gl_FragColor=texture2D(textureSampler,texCoords);
}`;const{defineComponent:q}=await T("vue"),{unref:j,createElementVNode:H,openBlock:W,createElementBlock:$}=await T("vue"),Q={id:"canvaswebgl"},z=["src"],{reactive:J}=await T("vue"),oe=q({__name:"webglPostProcessing",setup(K){let D="./",i,e,c,R,A,m,u,s,g,b,F,p,d;const E={r:1,g:.71,b:.76},f=new Y({title:"参数"}),o=J({hidden:!0,offset_right_top:{x:.5,y:.5},offset_right_bottom:{x:.5,y:.5},offset_left_top:{x:.5,y:.5},offset_left_bottom:{x:.5,y:.5},overlay:{r:1,g:0,b:.33}});f.addBlade({view:"slider",label:"颜色",min:0,max:1,value:.5}).on("change",t=>{l(),e.uniform1f(p,t.value)});let r=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]);f.addBinding(o,"hidden",{label:"是否后处理"}),f.addBinding(o,"offset_right_top",{picker:"inline",x:{min:0,max:1},y:{min:0,max:1}}).on("change",t=>{r[0]=o.offset_right_top.x,r[1]=o.offset_right_top.y,l()}),f.addBinding(o,"offset_right_bottom",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[5]=o.offset_right_bottom.x,r[6]=o.offset_right_bottom.y,l()}),f.addBinding(o,"offset_left_bottom",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[10]=o.offset_left_bottom.x,r[11]=o.offset_left_bottom.y,l()}),f.addBinding(o,"offset_left_top",{picker:"inline",x:{min:-1,max:1},y:{min:-1,max:1}}).on("change",t=>{r[15]=o.offset_left_top.x,r[16]=o.offset_left_top.y,l()});const w=function(){i=document.querySelector("#canvaswebgl"),i.width=window.innerWidth,i.height=window.innerHeight,e=i.getContext("webgl"),e&&(L(),l(),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),B())};function B(){e.bindFramebuffer(e.FRAMEBUFFER,u),e.clearColor(E.r,E.g,E.b,1),e.clear(e.COLOR_BUFFER_BIT),y(),e.bindFramebuffer(e.FRAMEBUFFER,null),o.hidden&&(e.clear(e.COLOR_BUFFER_BIT),e.clearColor(0,0,1,1),e.bindBuffer(e.ARRAY_BUFFER,A),e.useProgram(m),e.bindTexture(e.TEXTURE_2D,s)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_BYTE,0),requestAnimationFrame(B)}function y(){e.useProgram(c),e.bindBuffer(e.ARRAY_BUFFER,R);const t=x();S(t,0,i.width,i.height,0,.1,100),e.uniformMatrix4fv(g,!1,t);const n=x();N(n,[0,0,1],[0,0,0],[0,1,0]),e.uniformMatrix4fv(b,!1,n),v(d,600,600),v(d,400,400)}function v(t,n,_){let a=x();I(a,a,[n,_,0]),X(a,a,[250,250,0]),e.uniformMatrix4fv(F,!1,a),e.bindTexture(e.TEXTURE_2D,t),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_BYTE,0)}function L(){const t=new Float32Array([.5,.5,0,1,1,.5,-.5,0,1,0,-.5,-.5,0,0,0,-.5,.5,0,0,1]),n=new Uint8Array([0,1,2,0,2,3]);R=U(t,n),c=h(e,O,k),g=e.getUniformLocation(c,"uProjection"),b=e.getUniformLocation(c,"uView"),F=e.getUniformLocation(c,"uModel"),d=P(document.getElementById("logo-texture"))}function l(){const t=new Uint8Array([0,1,2,0,2,3]);A=U(r,t),m=h(e,V,G),p=e.getUniformLocation(m,"mixParam"),e.getUniformLocation(m,"color"),C()}function C(){s=P(i),u=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}function P(t){const n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),t instanceof HTMLImageElement?e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.width,t.height,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}function U(t,n){const _=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW);const a=3*Float32Array.BYTES_PER_ELEMENT+2*Float32Array.BYTES_PER_ELEMENT;e.vertexAttribPointer(0,3,e.FLOAT,!1,a,0),e.enableVertexAttribArray(0),e.vertexAttribPointer(1,2,e.FLOAT,!1,a,3*Float32Array.BYTES_PER_ELEMENT),e.enableVertexAttribArray(1);const M=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,M),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),_}return(t,n)=>(W(),$("canvas",Q,[H("img",{id:"logo-texture",src:j(D)+"./logo.png",style:{display:"none"},onLoad:w},null,40,z)]))}});export{oe as default};
