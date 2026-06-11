import{importShared as b}from"./3d-tiles-renderer.BeXgU1LO1781165239002.js";import{useTres as _}from"./index.CKaM2Yp11781165239002.js";import{shaderMaterial as D}from"./shaderMaterial.COLPsCcb1781165239002.js";const p=await b("three"),C=D({alphaTest:0,viewport:new p.Vector2(1980,1080),focal:1e3,centerAndScaleTexture:null,covAndColorTexture:null},`
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
      #include <${parseInt(p.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
    }
  `);function M(e){let o=null,n=0;function a(r,l=!1){const c=o.length/16,x=-1e-4;let u=-1/0,t=1/0;const i=new Float32Array(c),f=new Int32Array(i.buffer),v=new Int32Array(c);let d=0;for(let s=0;s<c;s++){const m=r[0]*o[s*16+12]+r[1]*o[s*16+13]+r[2]*o[s*16+14]+r[3];(l||m<0&&o[s*16+15]>x*m)&&(i[d]=m,v[d]=s,d++,m>u&&(u=m),m<t&&(t=m))}const w=(256*256-1)/(u-t),y=new Uint32Array(256*256);for(let s=0;s<d;s++)f[s]=(i[s]-t)*w|0,y[f[s]]++;const A=new Uint32Array(256*256);for(let s=1;s<256*256;s++)A[s]=A[s-1]+y[s-1];const g=new Uint32Array(d);for(let s=0;s<d;s++)g[A[f[s]]++]=v[s];return g}e.onmessage=r=>{if(r.data.method=="push"){n===0&&(o=new Float32Array(r.data.length));const l=new Float32Array(r.data.matrices);o.set(l,n),n+=l.length}else if(r.data.method=="sort"&&o!==null){const l=a(new Float32Array(r.data.view),r.data.hashed);e.postMessage({indices:l,key:r.data.key},[l.buffer])}}}class S extends p.Loader{constructor(o,n=25e3){super(),this.gl=o,this.chunkSize=n}async loadAsync(o,n,a){return new Promise(r=>this.load(o,r,n,a))}load(o,n,a,r){const l={gl:this.gl,url:this.manager.resolveURL(o),worker:new Worker(URL.createObjectURL(new Blob(["(",M.toString(),")(self)"],{type:"application/javascript"}))),manager:this.manager,update:(c,x,u)=>k(x,l,c,u),connect:c=>I(l,c),loading:!1,loaded:!1,loadedVertexCount:0,chunkSize:this.chunkSize,totalDownloadBytes:0,numVertices:0,rowLength:32,maxVertexes:0,bufferTextureWidth:0,bufferTextureHeight:0,stream:null,centerAndScaleData:null,covAndColorData:null,covAndColorTexture:null,centerAndScaleTexture:null,onProgress:a};V(l).then(n).catch(c=>{r?.(c),l.manager.itemError(l.url)})}}async function V(e){e.manager.itemStart(e.url);const o=await fetch(e.url);if(o.body===null)throw"Failed to fetch file";const n=o.headers.get("Content-Length"),a=n?parseInt(n):void 0;if(a==null)throw"Failed to get content length";e.stream=o.body.getReader(),e.totalDownloadBytes=a,e.numVertices=Math.floor(e.totalDownloadBytes/e.rowLength);const r=e.gl.getContext(),l=r.getParameter(r.MAX_TEXTURE_SIZE);return e.maxVertexes=l*l,e.numVertices>e.maxVertexes&&(e.numVertices=e.maxVertexes),e.bufferTextureWidth=l,e.bufferTextureHeight=Math.floor((e.numVertices-1)/l)+1,e.centerAndScaleData=new Float32Array(e.bufferTextureWidth*e.bufferTextureHeight*4),e.covAndColorData=new Uint32Array(e.bufferTextureWidth*e.bufferTextureHeight*4),e.centerAndScaleTexture=new p.DataTexture(e.centerAndScaleData,e.bufferTextureWidth,e.bufferTextureHeight,p.RGBAFormat,p.FloatType),e.centerAndScaleTexture.needsUpdate=!0,e.covAndColorTexture=new p.DataTexture(e.covAndColorData,e.bufferTextureWidth,e.bufferTextureHeight,p.RGBAIntegerFormat,p.UnsignedIntType),e.covAndColorTexture.internalFormat="RGBA32UI",e.covAndColorTexture.needsUpdate=!0,e}async function F(e){e.loading=!0;let o=0,n=0;const a=[];let r=0;const l=e.totalDownloadBytes!==0;for(;;)try{const{value:c,done:x}=await e.stream.read();if(x)break;if(o+=c.length,e.totalDownloadBytes!=null){const t=o/e.totalDownloadBytes*100;if(e.onProgress&&t-r>1){const i=new ProgressEvent("progress",{lengthComputable:l,loaded:o,total:e.totalDownloadBytes});e.onProgress(i),r=t}}a.push(c);const u=o-n;if(e.totalDownloadBytes!=null&&u>e.rowLength*e.chunkSize){const t=Math.floor(u/e.rowLength),i=new Uint8Array(u);let f=0;for(const w of a)i.set(w,f),f+=w.length;if(a.length=0,u>t*e.rowLength){const w=new Uint8Array(u-t*e.rowLength);w.set(i.subarray(u-w.length,u),0),a.push(w)}const v=new Uint8Array(t*e.rowLength);v.set(i.subarray(0,v.byteLength),0);const d=T(e,v.buffer,t);if(e.worker.postMessage({method:"push",src:e.url,length:e.numVertices*16,matrices:d.buffer},[d.buffer]),n+=t*e.rowLength,e.onProgress){const w=new ProgressEvent("progress",{lengthComputable:l,loaded:e.totalDownloadBytes,total:e.totalDownloadBytes});e.onProgress(w)}}}catch(c){console.error(c);break}if(o-n>0){const c=new Uint8Array(a.reduce((i,f)=>i+f.length,0));let x=0;for(const i of a)c.set(i,x),x+=i.length;const u=Math.floor(c.byteLength/e.rowLength),t=T(e,c.buffer,u);e.worker.postMessage({method:"push",src:e.url,length:u*16,matrices:t.buffer},[t.buffer])}e.loaded=!0,e.manager.itemEnd(e.url)}function k(e,o,n,a){if(e.updateMatrixWorld(),o.gl.getCurrentViewport(n.viewport),n.material.viewport.x=n.viewport.z,n.material.viewport.y=n.viewport.w,n.material.focal=n.viewport.w/2*Math.abs(e.projectionMatrix.elements[5]),n.ready){if(a&&n.sorted)return;n.ready=!1;const r=new Float32Array([n.modelViewMatrix.elements[2],-n.modelViewMatrix.elements[6],n.modelViewMatrix.elements[10],n.modelViewMatrix.elements[14]]);o.worker.postMessage({method:"sort",src:o.url,key:n.uuid,view:r.buffer,hashed:a},[r.buffer]),a&&o.loaded&&(n.sorted=!0)}}function I(e,o){e.loading||F(e),o.ready=!1,o.pm=new p.Matrix4,o.vm1=new p.Matrix4,o.vm2=new p.Matrix4,o.viewport=new p.Vector4;const n=new Uint32Array(e.bufferTextureWidth*e.bufferTextureHeight),a=new p.InstancedBufferAttribute(n,1,!1);a.setUsage(p.DynamicDrawUsage);const r=o.geometry=new p.InstancedBufferGeometry,l=new Float32Array(6*3),c=new p.BufferAttribute(l,3);r.setAttribute("position",c),c.setXYZ(2,-2,2,0),c.setXYZ(1,2,2,0),c.setXYZ(0,-2,-2,0),c.setXYZ(5,-2,-2,0),c.setXYZ(4,2,2,0),c.setXYZ(3,2,-2,0),c.needsUpdate=!0,r.setAttribute("splatIndex",a),r.instanceCount=1;function x(t){if(o&&t.data.key===o.uuid){const i=new Uint32Array(t.data.indices);r.attributes.splatIndex.set(i),r.attributes.splatIndex.needsUpdate=!0,r.instanceCount=i.length,o.ready=!0}}e.worker.addEventListener("message",x);async function u(){for(;;){const t=e.gl.properties.get(e.centerAndScaleTexture),i=e.gl.properties.get(e.covAndColorTexture);if(t!=null&&t.__webglTexture&&i!=null&&i.__webglTexture&&e.loadedVertexCount>0)break;await new Promise(f=>setTimeout(f,10))}o.ready=!0}return u(),()=>e.worker.removeEventListener("message",x)}function T(e,o,n){const a=e.gl.getContext();if(e.loadedVertexCount+n>e.maxVertexes&&(n=e.maxVertexes-e.loadedVertexCount),n<=0)throw"Failed to parse file";const r=new Uint8Array(o),l=new Float32Array(o),c=new Float32Array(n*16),x=new Uint8Array(e.covAndColorData.buffer),u=new Int16Array(e.covAndColorData.buffer);for(let t=0;t<n;t++){const i=new p.Quaternion(-(r[32*t+28+1]-128)/128,(r[32*t+28+2]-128)/128,(r[32*t+28+3]-128)/128,-(r[32*t+28+0]-128)/128);i.invert();const f=new p.Vector3(l[8*t+0],l[8*t+1],-l[8*t+2]),v=new p.Vector3(l[8*t+3+0],l[8*t+3+1],l[8*t+3+2]),d=new p.Matrix4;d.makeRotationFromQuaternion(i),d.transpose(),d.scale(v);const w=d.clone();d.transpose(),d.premultiply(w),d.setPosition(f);const y=[0,1,2,5,6,10];let A=0;for(let m=0;m<y.length;m++)Math.abs(d.elements[y[m]])>A&&(A=Math.abs(d.elements[y[m]]));let g=e.loadedVertexCount*4+t*4;e.centerAndScaleData[g+0]=f.x,e.centerAndScaleData[g+1]=-f.y,e.centerAndScaleData[g+2]=f.z,e.centerAndScaleData[g+3]=A/32767,g=e.loadedVertexCount*8+t*4*2;for(let m=0;m<y.length;m++)u[g+m]=d.elements[y[m]]*32767/A;g=e.loadedVertexCount*16+(t*4+3)*4;const s=new p.Color(r[32*t+24+0]/255,r[32*t+24+1]/255,r[32*t+24+2]/255);s.convertSRGBToLinear(),x[g+0]=s.r*255,x[g+1]=s.g*255,x[g+2]=s.b*255,x[g+3]=r[32*t+24+3],d.elements[15]=Math.max(v.x,v.y,v.z)*r[32*t+24+3]/255;for(let m=0;m<16;m++)c[t*16+m]=d.elements[m]}for(;n>0;){let t=0,i=0;const f=e.loadedVertexCount%e.bufferTextureWidth,v=Math.floor(e.loadedVertexCount/e.bufferTextureWidth);e.loadedVertexCount%e.bufferTextureWidth!=0?(t=Math.min(e.bufferTextureWidth,f+n)-f,i=1):Math.floor(n/e.bufferTextureWidth)>0?(t=e.bufferTextureWidth,i=Math.floor(n/e.bufferTextureWidth)):(t=n%e.bufferTextureWidth,i=1);const d=e.gl.properties.get(e.centerAndScaleTexture);a.bindTexture(a.TEXTURE_2D,d.__webglTexture),a.texSubImage2D(a.TEXTURE_2D,0,f,v,t,i,a.RGBA,a.FLOAT,e.centerAndScaleData,e.loadedVertexCount*4);const w=e.gl.properties.get(e.covAndColorTexture);a.bindTexture(a.TEXTURE_2D,w.__webglTexture),a.texSubImage2D(a.TEXTURE_2D,0,f,v,t,i,a.RGBA_INTEGER,a.UNSIGNED_INT,e.covAndColorData,e.loadedVertexCount*4),e.gl.resetState(),e.loadedVertexCount+=t*i,n-=t*i}return c}class U extends p.Mesh{constructor(o,n,{toneMapped:a=!1,alphaTest:r=0,alphaHash:l=!1}={}){super(),this.frustumCulled=!1,this.onBeforeRender=()=>o.update(this,n,l),this.material=new C,Object.assign(this.material,{transparent:!l,depthTest:!0,alphaTest:l?0:r,centerAndScaleTexture:o.centerAndScaleTexture,covAndColorTexture:o.covAndColorTexture,depthWrite:l?!0:r>0,blending:l?p.NormalBlending:p.CustomBlending,blendSrcAlpha:p.OneFactor,alphaHash:!!l,toneMapped:a}),o.connect(this)}}const{withAsyncContext:B,defineComponent:h}=await b("vue"),{openBlock:z,createElementBlock:P}=await b("vue"),L=["object"],{watch:E,onUnmounted:R,ref:W,toRaw:X}=await b("vue"),O=h({__name:"splat",props:{url:{type:String,default:"./plugins/gaussianSplatting/model/luigi.splat"},sizeCullThreshold:{type:Number,default:-1e-4}},async setup(e){let o,n;const a=e,{camera:r,renderer:l}=_(),c=new S(l,1e4);let x=([o,n]=B(()=>c.loadAsync(a.url)),o=await o,n(),o);const u=W(null),t=(f=a.sizeCullThreshold)=>new U(x,r.value,{alphaTest:.1,sizeCullThreshold:f});u.value=t(),E([()=>a.url,()=>a.sizeCullThreshold],async([f,v],[d])=>{f&&f!==d&&(x=await c.loadAsync(f)),i(),u.value=t(v)});const i=()=>{u.value&&(u.value.geometry.dispose(),u.value.material&&u.value.material.dispose())};return R(()=>{i()}),(f,v)=>(z(),P("primitive",{object:X(u.value),renderOrder:9999999},null,8,L))}});export{O as _sfc_main};
