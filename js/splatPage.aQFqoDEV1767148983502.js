import{importShared as b}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{Fs as I,ol as U,Kk as P}from"./index.DTe2qqjO1767148983502.js";import{shaderMaterial as h}from"./shaderMaterial.CBuQXryg1767148983502.js";import{Pane as L}from"./tweakpane.BQRZXf8M1767148983502.js";const d=await b("three"),z=h({alphaTest:0,viewport:new d.Vector2(1980,1080),focal:1e3,centerAndScaleTexture:null,covAndColorTexture:null},`
    precision highp sampler2D;
    precision highp usampler2D;
    out vec4 vColor;
    out vec3 vPosition;
    uniform vec2 resolution;
    uniform vec2 viewport;
    uniform float focal;
    attribute uint splatIndex;
    uniform sampler2D centerAndScaleTexture;
    uniform usampler2D covAndColorTexture;    

    vec2 unpackInt16(in uint value) {
      int v = int(value);
      int v0 = v >> 16;
      int v1 = (v & 0xFFFF);
      if((v & 0x8000) != 0)
        v1 |= 0xFFFF0000;
      return vec2(float(v1), float(v0));
    }

    void main () {
      ivec2 texSize = textureSize(centerAndScaleTexture, 0);
      ivec2 texPos = ivec2(splatIndex%uint(texSize.x), splatIndex/uint(texSize.x));
      vec4 centerAndScaleData = texelFetch(centerAndScaleTexture, texPos, 0);
      vec4 center = vec4(centerAndScaleData.xyz, 1);
      vec4 camspace = modelViewMatrix * center;
      vec4 pos2d = projectionMatrix * camspace;

      float bounds = 1.2 * pos2d.w;
      if (pos2d.z < -pos2d.w || pos2d.x < -bounds || pos2d.x > bounds
        || pos2d.y < -bounds || pos2d.y > bounds) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
      }

      uvec4 covAndColorData = texelFetch(covAndColorTexture, texPos, 0);
      vec2 cov3D_M11_M12 = unpackInt16(covAndColorData.x) * centerAndScaleData.w;
      vec2 cov3D_M13_M22 = unpackInt16(covAndColorData.y) * centerAndScaleData.w;
      vec2 cov3D_M23_M33 = unpackInt16(covAndColorData.z) * centerAndScaleData.w;
      mat3 Vrk = mat3(
        cov3D_M11_M12.x, cov3D_M11_M12.y, cov3D_M13_M22.x,
        cov3D_M11_M12.y, cov3D_M13_M22.y, cov3D_M23_M33.x,
        cov3D_M13_M22.x, cov3D_M23_M33.x, cov3D_M23_M33.y
      );

      mat3 J = mat3(
        focal / camspace.z, 0., -(focal * camspace.x) / (camspace.z * camspace.z),
        0., focal / camspace.z, -(focal * camspace.y) / (camspace.z * camspace.z),
        0., 0., 0.
      );

      mat3 W = transpose(mat3(modelViewMatrix));
      mat3 T = W * J;
      mat3 cov = transpose(T) * Vrk * T;
      vec2 vCenter = vec2(pos2d) / pos2d.w;
      float diagonal1 = cov[0][0] + 0.3;
      float offDiagonal = cov[0][1];
      float diagonal2 = cov[1][1] + 0.3;
      float mid = 0.5 * (diagonal1 + diagonal2);
      float radius = length(vec2((diagonal1 - diagonal2) / 2.0, offDiagonal));
      float lambda1 = mid + radius;
      float lambda2 = max(mid - radius, 0.1);
      vec2 diagonalVector = normalize(vec2(offDiagonal, lambda1 - diagonal1));
      vec2 v1 = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
      vec2 v2 = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);
      uint colorUint = covAndColorData.w;
      vColor = vec4(
        float(colorUint & uint(0xFF)) / 255.0,
        float((colorUint >> uint(8)) & uint(0xFF)) / 255.0,
        float((colorUint >> uint(16)) & uint(0xFF)) / 255.0,
        float(colorUint >> uint(24)) / 255.0
      );
      vPosition = position;

      gl_Position = vec4(
        vCenter 
          + position.x * v2 / viewport * 2.0 
          + position.y * v1 / viewport * 2.0, pos2d.z / pos2d.w, 1.0);
    }
    `,`
    #include <alphatest_pars_fragment>
    #include <alphahash_pars_fragment>
    in vec4 vColor;
    in vec3 vPosition;
    void main () {
      float A = -dot(vPosition.xy, vPosition.xy);
      if (A < -4.0) discard;
      float B = exp(A) * vColor.a;
      vec4 diffuseColor = vec4(vColor.rgb, B);
      #include <alphatest_fragment>
      #include <alphahash_fragment>
      gl_FragColor = diffuseColor;
      #include <tonemapping_fragment>
      #include <${parseInt(d.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `);function E(e){let o=null,n=0;function r(t,l=!1){const i=o.length/16,s=-1e-4;let u=-1/0,a=1/0;const c=new Float32Array(i),x=new Int32Array(c.buffer),v=new Int32Array(i);let p=0;for(let f=0;f<i;f++){const m=t[0]*o[f*16+12]+t[1]*o[f*16+13]+t[2]*o[f*16+14]+t[3];(l||m<0&&o[f*16+15]>s*m)&&(c[p]=m,v[p]=f,p++,m>u&&(u=m),m<a&&(a=m))}const w=(256*256-1)/(u-a),y=new Uint32Array(256*256);for(let f=0;f<p;f++)x[f]=(c[f]-a)*w|0,y[x[f]]++;const A=new Uint32Array(256*256);for(let f=1;f<256*256;f++)A[f]=A[f-1]+y[f-1];const g=new Uint32Array(p);for(let f=0;f<p;f++)g[A[x[f]]++]=v[f];return g}e.onmessage=t=>{if(t.data.method=="push"){n===0&&(o=new Float32Array(t.data.length));const l=new Float32Array(t.data.matrices);o.set(l,n),n+=l.length}else if(t.data.method=="sort"&&o!==null){const l=r(new Float32Array(t.data.view),t.data.hashed);e.postMessage({indices:l,key:t.data.key},[l.buffer])}}}class R extends d.Loader{constructor(o,n=25e3){super(),this.gl=o,this.chunkSize=n}async loadAsync(o,n,r){return new Promise(t=>this.load(o,t,n,r))}load(o,n,r,t){const l={gl:this.gl,url:this.manager.resolveURL(o),worker:new Worker(URL.createObjectURL(new Blob(["(",E.toString(),")(self)"],{type:"application/javascript"}))),manager:this.manager,update:(i,s,u)=>j(s,l,i,u),connect:i=>G(l,i),loading:!1,loaded:!1,loadedVertexCount:0,chunkSize:this.chunkSize,totalDownloadBytes:0,numVertices:0,rowLength:32,maxVertexes:0,bufferTextureWidth:0,bufferTextureHeight:0,stream:null,centerAndScaleData:null,covAndColorData:null,covAndColorTexture:null,centerAndScaleTexture:null,onProgress:r};W(l).then(n).catch(i=>{t?.(i),l.manager.itemError(l.url)})}}async function W(e){e.manager.itemStart(e.url);const o=await fetch(e.url);if(o.body===null)throw"Failed to fetch file";const n=o.headers.get("Content-Length"),r=n?parseInt(n):void 0;if(r==null)throw"Failed to get content length";e.stream=o.body.getReader(),e.totalDownloadBytes=r,e.numVertices=Math.floor(e.totalDownloadBytes/e.rowLength);const t=e.gl.getContext(),l=t.getParameter(t.MAX_TEXTURE_SIZE);return e.maxVertexes=l*l,e.numVertices>e.maxVertexes&&(e.numVertices=e.maxVertexes),e.bufferTextureWidth=l,e.bufferTextureHeight=Math.floor((e.numVertices-1)/l)+1,e.centerAndScaleData=new Float32Array(e.bufferTextureWidth*e.bufferTextureHeight*4),e.covAndColorData=new Uint32Array(e.bufferTextureWidth*e.bufferTextureHeight*4),e.centerAndScaleTexture=new d.DataTexture(e.centerAndScaleData,e.bufferTextureWidth,e.bufferTextureHeight,d.RGBAFormat,d.FloatType),e.centerAndScaleTexture.needsUpdate=!0,e.covAndColorTexture=new d.DataTexture(e.covAndColorData,e.bufferTextureWidth,e.bufferTextureHeight,d.RGBAIntegerFormat,d.UnsignedIntType),e.covAndColorTexture.internalFormat="RGBA32UI",e.covAndColorTexture.needsUpdate=!0,e}async function X(e){e.loading=!0;let o=0,n=0;const r=[];let t=0;const l=e.totalDownloadBytes!==0;for(;;)try{const{value:i,done:s}=await e.stream.read();if(s)break;if(o+=i.length,e.totalDownloadBytes!=null){const a=o/e.totalDownloadBytes*100;if(e.onProgress&&a-t>1){const c=new ProgressEvent("progress",{lengthComputable:l,loaded:o,total:e.totalDownloadBytes});e.onProgress(c),t=a}}r.push(i);const u=o-n;if(e.totalDownloadBytes!=null&&u>e.rowLength*e.chunkSize){const a=Math.floor(u/e.rowLength),c=new Uint8Array(u);let x=0;for(const w of r)c.set(w,x),x+=w.length;if(r.length=0,u>a*e.rowLength){const w=new Uint8Array(u-a*e.rowLength);w.set(c.subarray(u-w.length,u),0),r.push(w)}const v=new Uint8Array(a*e.rowLength);v.set(c.subarray(0,v.byteLength),0);const p=_(e,v.buffer,a);if(e.worker.postMessage({method:"push",src:e.url,length:e.numVertices*16,matrices:p.buffer},[p.buffer]),n+=a*e.rowLength,e.onProgress){const w=new ProgressEvent("progress",{lengthComputable:l,loaded:e.totalDownloadBytes,total:e.totalDownloadBytes});e.onProgress(w)}}}catch(i){console.error(i);break}if(o-n>0){const i=new Uint8Array(r.reduce((c,x)=>c+x.length,0));let s=0;for(const c of r)i.set(c,s),s+=c.length;const u=Math.floor(i.byteLength/e.rowLength),a=_(e,i.buffer,u);e.worker.postMessage({method:"push",src:e.url,length:u*16,matrices:a.buffer},[a.buffer])}e.loaded=!0,e.manager.itemEnd(e.url)}function j(e,o,n,r){if(e.updateMatrixWorld(),o.gl.getCurrentViewport(n.viewport),n.material.viewport.x=n.viewport.z,n.material.viewport.y=n.viewport.w,n.material.focal=n.viewport.w/2*Math.abs(e.projectionMatrix.elements[5]),n.ready){if(r&&n.sorted)return;n.ready=!1;const t=new Float32Array([n.modelViewMatrix.elements[2],-n.modelViewMatrix.elements[6],n.modelViewMatrix.elements[10],n.modelViewMatrix.elements[14]]);o.worker.postMessage({method:"sort",src:o.url,key:n.uuid,view:t.buffer,hashed:r},[t.buffer]),r&&o.loaded&&(n.sorted=!0)}}function G(e,o){e.loading||X(e),o.ready=!1,o.pm=new d.Matrix4,o.vm1=new d.Matrix4,o.vm2=new d.Matrix4,o.viewport=new d.Vector4;const n=new Uint32Array(e.bufferTextureWidth*e.bufferTextureHeight),r=new d.InstancedBufferAttribute(n,1,!1);r.setUsage(d.DynamicDrawUsage);const t=o.geometry=new d.InstancedBufferGeometry,l=new Float32Array(6*3),i=new d.BufferAttribute(l,3);t.setAttribute("position",i),i.setXYZ(2,-2,2,0),i.setXYZ(1,2,2,0),i.setXYZ(0,-2,-2,0),i.setXYZ(5,-2,-2,0),i.setXYZ(4,2,2,0),i.setXYZ(3,2,-2,0),i.needsUpdate=!0,t.setAttribute("splatIndex",r),t.instanceCount=1;function s(a){if(o&&a.data.key===o.uuid){const c=new Uint32Array(a.data.indices);t.attributes.splatIndex.set(c),t.attributes.splatIndex.needsUpdate=!0,t.instanceCount=c.length,o.ready=!0}}e.worker.addEventListener("message",s);async function u(){for(;;){const a=e.gl.properties.get(e.centerAndScaleTexture),c=e.gl.properties.get(e.covAndColorTexture);if(a!=null&&a.__webglTexture&&c!=null&&c.__webglTexture&&e.loadedVertexCount>0)break;await new Promise(x=>setTimeout(x,10))}o.ready=!0}return u(),()=>e.worker.removeEventListener("message",s)}function _(e,o,n){const r=e.gl.getContext();if(e.loadedVertexCount+n>e.maxVertexes&&(n=e.maxVertexes-e.loadedVertexCount),n<=0)throw"Failed to parse file";const t=new Uint8Array(o),l=new Float32Array(o),i=new Float32Array(n*16),s=new Uint8Array(e.covAndColorData.buffer),u=new Int16Array(e.covAndColorData.buffer);for(let a=0;a<n;a++){const c=new d.Quaternion(-(t[32*a+28+1]-128)/128,(t[32*a+28+2]-128)/128,(t[32*a+28+3]-128)/128,-(t[32*a+28+0]-128)/128);c.invert();const x=new d.Vector3(l[8*a+0],l[8*a+1],-l[8*a+2]),v=new d.Vector3(l[8*a+3+0],l[8*a+3+1],l[8*a+3+2]),p=new d.Matrix4;p.makeRotationFromQuaternion(c),p.transpose(),p.scale(v);const w=p.clone();p.transpose(),p.premultiply(w),p.setPosition(x);const y=[0,1,2,5,6,10];let A=0;for(let m=0;m<y.length;m++)Math.abs(p.elements[y[m]])>A&&(A=Math.abs(p.elements[y[m]]));let g=e.loadedVertexCount*4+a*4;e.centerAndScaleData[g+0]=x.x,e.centerAndScaleData[g+1]=-x.y,e.centerAndScaleData[g+2]=x.z,e.centerAndScaleData[g+3]=A/32767,g=e.loadedVertexCount*8+a*4*2;for(let m=0;m<y.length;m++)u[g+m]=p.elements[y[m]]*32767/A;g=e.loadedVertexCount*16+(a*4+3)*4;const f=new d.Color(t[32*a+24+0]/255,t[32*a+24+1]/255,t[32*a+24+2]/255);f.convertSRGBToLinear(),s[g+0]=f.r*255,s[g+1]=f.g*255,s[g+2]=f.b*255,s[g+3]=t[32*a+24+3],p.elements[15]=Math.max(v.x,v.y,v.z)*t[32*a+24+3]/255;for(let m=0;m<16;m++)i[a*16+m]=p.elements[m]}for(;n>0;){let a=0,c=0;const x=e.loadedVertexCount%e.bufferTextureWidth,v=Math.floor(e.loadedVertexCount/e.bufferTextureWidth);e.loadedVertexCount%e.bufferTextureWidth!=0?(a=Math.min(e.bufferTextureWidth,x+n)-x,c=1):Math.floor(n/e.bufferTextureWidth)>0?(a=e.bufferTextureWidth,c=Math.floor(n/e.bufferTextureWidth)):(a=n%e.bufferTextureWidth,c=1);const p=e.gl.properties.get(e.centerAndScaleTexture);r.bindTexture(r.TEXTURE_2D,p.__webglTexture),r.texSubImage2D(r.TEXTURE_2D,0,x,v,a,c,r.RGBA,r.FLOAT,e.centerAndScaleData,e.loadedVertexCount*4);const w=e.gl.properties.get(e.covAndColorTexture);r.bindTexture(r.TEXTURE_2D,w.__webglTexture),r.texSubImage2D(r.TEXTURE_2D,0,x,v,a,c,r.RGBA_INTEGER,r.UNSIGNED_INT,e.covAndColorData,e.loadedVertexCount*4),e.gl.resetState(),e.loadedVertexCount+=a*c,n-=a*c}return i}class D extends d.Mesh{constructor(o,n,{toneMapped:r=!1,alphaTest:t=0,alphaHash:l=!1}={}){super(),this.frustumCulled=!1,this.onBeforeRender=()=>o.update(this,n,l),this.material=new z,Object.assign(this.material,{transparent:!l,depthTest:!0,alphaTest:l?0:t,centerAndScaleTexture:o.centerAndScaleTexture,covAndColorTexture:o.covAndColorTexture,depthWrite:l?!0:t>0,blending:l?d.NormalBlending:d.CustomBlending,blendSrcAlpha:d.OneFactor,alphaHash:!!l,toneMapped:r}),o.connect(this)}}const{withAsyncContext:N,defineComponent:O}=await b("vue"),{openBlock:Z,createElementBlock:Y}=await b("vue"),H=["object"],{watch:$,onUnmounted:q,ref:J,toRaw:Q}=await b("vue"),K=O({__name:"splat",props:{url:{type:String,default:"./plugins/gaussianSplatting/model/luigi.splat"}},async setup(e){let o,n;const r=e,{camera:t,renderer:l}=I(),i=new R(l);let s=([o,n]=N(()=>i.loadAsync(r.url)),o=await o,n(),o);const u=J(null);u.value=new D(s,t.value,{alphaTest:.1}),$(()=>r.url,async c=>{c&&(s=await i.loadAsync(c)),a(),u.value=new D(s,t.value,{alphaTest:.1})});const a=()=>{u.value&&(u.value.geometry.dispose(),u.value.material&&u.value.material.dispose())};return q(()=>{a()}),(c,x)=>(Z(),Y("primitive",{object:Q(u.value)},null,8,H))}}),{defineComponent:ee}=await b("vue"),{createElementVNode:T,unref:C,createVNode:M,mergeProps:S,Suspense:te,withCtx:V,openBlock:k,createBlock:B}=await b("vue"),{SRGBColorSpace:oe,BasicShadowMap:ne,NoToneMapping:ae}=await b("three"),{reactive:F,onMounted:re}=await b("vue"),ue=ee({__name:"splatPage",setup(e){const o=F({clearColor:"#ffffff",alpha:!1,shadowMapType:ne,outputColorSpace:oe,toneMapping:ae}),n=F({url:"./plugins/gaussianSplatting/model/luigi.splat"}),r=new L({title:"参数",expanded:!0}),t=document.createElement("input");return t.type="file",t.accept=".splat",t.style.display="none",document.body.appendChild(t),r.addButton({title:"替换splat文件",label:"500MB以内"}).on("click",()=>{t&&(t.value="",t.click())}),re(()=>{t.onchange=i=>{const s=i.target.files[0];if(!s)return;if(s.size>500*1024*1024){alert("文件大小不能超过500MB");return}const u=URL.createObjectURL(s);n.url=u}}),(i,s)=>(k(),B(C(U),S(o,{"window-size":""}),{default:V(()=>[s[0]||(s[0]=T("TresPerspectiveCamera",{position:[3,3,3],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1)),M(C(P)),s[1]||(s[1]=T("TresAmbientLight",{intensity:3},null,-1)),(k(),B(te,null,{default:V(()=>[M(K,S(n,{position:[0,.7,0],"rotate-x":-Math.PI}),null,16,["rotate-x"])]),_:1})),s[2]||(s[2]=T("TresDirectionalLight",{position:[6,2,4],intensity:2},null,-1)),s[3]||(s[3]=T("TresGridHelper",null,null,-1))]),_:1},16))}});export{ue as default};
