import{$ as t,g as e,l as i,F as r,V as s,M as o,B as a,ah as n,m as h,c as l,_ as c,as as d,A as m,ar as p,o as u,a as f}from"./three.DOaOWaa_1752457528298.js";import{g,b as v,t as M}from"./@mapbox.B8uYRbGC1752457528298.js";import{c as w,d as x,a as y}from"./three-mesh-bvh.FzI0NuyQ1752457528298.js";import{F as T}from"./HeightCorrection.Bq98L9tL1752457528298.js";import{z as b}from"./three-custom-shader-material.B-_h7e_e1752457528298.js";import{d as P,b as _,w as C,G as F,o as B,M as W}from"./@vue.CcDZ19ef1752457528298.js";import{_ as j}from"./@fesjs.t5OnzKcQ1752457528298.js";class k extends t{constructor(){super(),this.isDisposed=!1,this.isReady=!1,this.childrenTiles=[],this.boundingBoxWorld=new e}init(t,e,i){this.tileNo=t,Object.freeze(this.tileNo),this.map=e,this.parentTile=i,this.visible=!1,this.renderOrder=t[2],this.ready()}async ready(){if(this.content=await this.map.provider.getTile(this.tileNo),!this.isDisposed){if(this.add(this.content),this.boundingBoxWorld.setFromObject(this.content).applyMatrix4(this.matrixWorld.makeRotationX(-Math.PI/2)),this.map.add(this),this.visible=!0,this.isReady=!0,this.parentTile){const t=this.parentTile.childrenTiles;let e=0;for(let i=0;i<t.length;i++)t[i].isReady&&e++;4===e&&(this.parentTile.visible=!1)}this.update()}}update(){if(!this.isReady||this.isDisposed)return;const{cameraFrustum:t,cameraWorldPosition:e}=this.map;if(!t.intersectsBox(this.boundingBoxWorld))return void this.simplify();this.content instanceof i&&this.map.provider.filter&&(this.content.material.uniforms.t_Matrix.value=this.map.provider.getTranMatrix());let r=this.boundingBoxWorld.distanceToPoint(e);const s=this.tileNo[2];r/=Math.pow(2,this.map.provider.maxZoom-s),r<60&&this.subdivide(),r>80&&this.simplify();this.childrenTiles.sort(((t,i)=>t.boundingBoxWorld.distanceToPoint(e)-i.boundingBoxWorld.distanceToPoint(e))).forEach((t=>t.update()))}subdivide(){const{isReady:t,tileNo:e,map:i,childrenTiles:r}=this,s=e[2];if(!t||r.length>0||s>=i.maxZoom)return;g(e).forEach((t=>{const e=new k;e.init(t,i,this),r.push(e)}))}simplify(){this.childrenTiles.forEach((t=>t.dispose())),this.childrenTiles=[],this.visible=!0}dispose(){this.map.remove(this),this.map.provider.abort(this.tileNo),this.childrenTiles.forEach((t=>t.dispose())),this.childrenTiles=[],this.parentTile=void 0,this.content&&(this.map.provider.dispose(this.tileNo,this.content),this.content=void 0),this.isDisposed=!0}}let U,I=class extends t{constructor(){super(),this.bbox=[74.390592,6.900905,134.071423,54.318199],this.maxZoom=20,this.rootForward=0,this.cameraFrustum=new r,this.cameraWorldPosition=new s,this.cameraProjectionMatrix=new o,this.lastCameraProjectionMatrix=new o,this.lastCameraWorldPosition=new s,this.rootTiles=[],this.lastUpdateTime=0,a.prototype.computeBoundsTree||(a.prototype.computeBoundsTree=w),a.prototype.disposeBoundsTree||(a.prototype.disposeBoundsTree=x),i.prototype.raycast=y}initRootTiles(){this.rootForward>3&&(console.warn("rootForward needs to be 0 - 3."),this.rootForward=3),this.rootForward<0&&(console.warn("rootForward needs to be 0 - 3."),this.rootForward=0);const t=[];let e=[v(this.bbox)],i=this.rootForward;for(;i>0;){const t=[...e];e=[],t.forEach((t=>{const i=g(t);e.push(...i)})),i--}t.push(...e),t.forEach((t=>{const e=new k;e.init(t,this),this.rootTiles.push(e)}))}update(){if(!this.visible||!this.camera)return;const t=Date.now();t-this.lastUpdateTime<300||(0!==this.rootTiles.length?(this.camera.getWorldPosition(this.cameraWorldPosition),this.cameraProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.cameraWorldPosition.equals(this.lastCameraWorldPosition)&&this.cameraProjectionMatrix.equals(this.lastCameraProjectionMatrix)||(this.cameraFrustum.setFromProjectionMatrix(this.cameraProjectionMatrix),this.rootTiles.forEach((t=>t.update())),this.lastCameraProjectionMatrix.copy(this.cameraProjectionMatrix),this.lastCameraWorldPosition.copy(this.cameraWorldPosition),this.lastUpdateTime=t)):this.initRootTiles())}dispose(){throw new Error("[Map.dispose] Method not implemented.")}regenerate(){throw new Error("[Map.regenerate] Method not implemented.")}};class S{constructor(t){this.terminated=!0,this.map=new Map,this.worker=new t,this.worker.onmessage=this.onMessage.bind(this),this.terminated=!1}async postMessage(t){if(!this.terminated)return this.worker.postMessage(t),new Promise(((e,i)=>{this.map.set(t.id,e)}))}onMessage(t){const{id:e,error:i}=t.data,r=this.map.get(e);r&&!i&&r(t.data),this.map.delete(e)}terminate(){this.worker.onmessage=null,this.worker.terminate(),this.terminated=!0,this.map.clear()}}function R(t){return new Worker(""+new URL("../static/MapWorker-Chj68ZG-.js",import.meta.url).href,{name:t?.name})}class E{constructor(){this.maxZoom=20,this.source="https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s&x=[x]&y=[y]&z=[z]",this.showTileNo=!1,this._useWorker=!1,this.fetching=new Map}set useWorker(t){this._useWorker=t,this._useWorker||(this._worker?.terminate(),this._worker=void 0)}get useWorker(){return this._useWorker}async getTile(t){const e=this.getUrl(t),i=new n;if(this._useWorker){this._worker||(this._worker=new S(R));const r=this.getId(t),s=await this._worker.postMessage({id:r,tileNo:t,url:e,debug:this.showTileNo});i.image=s.bitmap}else{const r=new T(e,{cache:"force-cache",mode:"cors"});this.fetching.set(t,r);try{i.image=await async function(t,e,i=!1){const r=await e.ready(),s=await r.blob(),o=await createImageBitmap(s,i?void 0:{imageOrientation:"flipY"});if(!i)return o;U||(U=new OffscreenCanvas(256,256));const a=U.getContext("2d");if(!a)throw new Error('Offscreencanvas.getContext("2d") error!');const{width:n,height:h}=U;return a.drawImage(o,0,0),a.rect(0,0,n,h),a.strokeStyle="#00FFFF",a.font="20px Arial",a.stroke(),a.fillStyle="#FF4444",a.fillText(`${t[0]}`,10,30),a.fillStyle="#44FF44",a.fillText(`${t[1]}`,10,55),a.fillStyle="#66AAFF",a.fillText(`${t[2]}`,10,80),await createImageBitmap(U,{imageOrientation:"flipY"})}(t,r,this.showTileNo)}finally{this.fetching.delete(t)}}return i.needsUpdate=!0,i.anisotropy=4,i}abort(t){if(this._useWorker)this._worker?.postMessage({id:this.getId(t),abort:!0});else{const e=this.fetching.get(t);e&&e.abort(),this.fetching.delete(t)}}dispose(t,e){e.dispose()}getId(t){return t.join("-")}getUrl(t){const[e,i,r]=t;return-1===this.source.indexOf("[x]")?this.source.replace("{x}",e+"").replace("{y}",i+"").replace("{z}",r+""):this.source.replace("[x]",e+"").replace("[y]",i+"").replace("[z]",r+"")}}const q="utm",N="merc",D=6378137,O=Math.PI/180;function X(t,e){return[D*t*O,D*Math.log(Math.tan(.25*Math.PI+e*O*.5))]}function Z(t){return t*Math.PI/180}function z(t){return 180*t/Math.PI}const A={a:6378137,f:1/298.257223563};function G(t,e,i){if(!(-80<=e&&e<=84))throw new RangeError(`latitude ‘${e}’ outside UTM limits`);let r=i||Math.floor((t+180)/6)+1,s=Z(6*(r-1)-180+3);const o="CDEFGHJKLMNPQRSTUVWXX".charAt(Math.floor(e/8+10));31===r&&"V"===o&&t>=3?(r++,s+=Z(6)):32===r&&"X"===o&&t<9?(r--,s-=Z(6)):32===r&&"X"===o&&t>=9?(r++,s+=Z(6)):34===r&&"X"===o&&t<21?(r--,s-=Z(6)):34===r&&"X"===o&&t>=21?(r++,s+=Z(6)):36===r&&"X"===o&&t<33?(r--,s-=Z(6)):36===r&&"X"===o&&t>=33&&(r++,s+=Z(6));const a=Z(e),n=Z(t)-s,{a:h,f:l}=A,c=.9996,d=Math.sqrt(l*(2-l)),m=l/(2-l),p=m*m,u=m*p,f=m*u,g=m*f,v=m*g,M=Math.cos(n),w=Math.sin(n),x=Math.tan(a),y=Math.sinh(d*Math.atanh(d*x/Math.sqrt(1+x*x))),T=x*Math.sqrt(1+y*y)-y*Math.sqrt(1+x*x),b=Math.atan2(T,M),P=Math.asinh(w/Math.sqrt(T*T+M*M)),_=h/(1+m)*(1+1/4*p+1/64*f+1/256*v),C=[null,.5*m-2/3*p+5/16*u+41/180*f-127/288*g+7891/37800*v,13/48*p-.6*u+557/1440*f+281/630*g-1983433/1935360*v,61/240*u-103/140*f+15061/26880*g+167603/181440*v,49561/161280*f-179/168*g+6601661/7257600*v,34729/80640*g-3418889/1995840*v,.6650675310896665*v];let F=b;for(let k=1;k<=6;k++)F+=C[k]*Math.sin(2*k*b)*Math.cosh(2*k*P);let B=P;for(let k=1;k<=6;k++)B+=C[k]*Math.cos(2*k*b)*Math.sinh(2*k*P);let W=c*_*B,j=c*_*F;return W+=5e5,j<0&&(j+=1e7),[W,j]}class ${constructor(){this.utmZone=50,this.coordType=q,this.maxZoom=20}async getTile(t){const e=new h,i=M(t),r=this.convertCoordinate(i[0],i[3]),s=this.convertCoordinate(i[2],i[3]),o=this.convertCoordinate(i[0],i[1]),a=this.convertCoordinate(i[2],i[1]),n=new Float32Array([r[0],r[1],0,s[0],s[1],0,o[0],o[1],0,a[0],a[1],0]);return e.setAttribute("position",new l(n,3)),e}abort(t){}dispose(t,e){e.dispose()}convertCoordinate(t,e){return this.coordType===q?G(t,e,this.utmZone):X(t,e)}}class L extends i{constructor(t){super(t),this.center=new s}}class V{constructor(t,e){this.geometryProvider=t,this.textureProvider=e,this.maxZoom=20,this.showBoundingBox=!1,this.wireframe=!1,this.flatShading=!1,this.useStandardMaterial=!1,this.filter=null}getTranMatrix(){let t=new o;if(this.filter?.opposite){let e=new o;e.set(-1,0,0,0,0,-1,0,0,0,0,-1,0,1,1,1,1),t.multiply(e)}if(this.filter?.monochrome){let e=new o;const i=this.filter.monochrome.r,r=this.filter.monochrome.g,s=this.filter.monochrome.b;e.set(i,r,s,0,i,r,s,0,i,r,s,0,0,0,0,1),t.multiply(e)}if(this.filter?.genBright){let e=new o;const i=this.filter.genBright;e.set(i,0,0,0,0,i,0,0,0,0,i,0,0,0,0,1),t.multiply(e)}if(this.filter?.genContrast){let e=new o;const i=this.filter.genContrast,r=.5*(1-i);e.set(i,0,0,0,0,i,0,0,0,0,i,0,r,r,r,1),t.multiply(e)}if(this.filter?.genSaturate){let e=new o;const i=this.filter.genSaturate,r=.3*(1-i),s=.6*(1-i),a=.1*(1-i);e.set(r+i,r,r,0,s,s+i,s,0,a,a,a+i,0,0,0,0,1),t.multiply(e)}return t}async getTile(t){const e=[this.geometryProvider.getTile(t),this.textureProvider.getTile(t)],i=await Promise.all(e),r=i[0],s=i[1];s.colorSpace=c;const{wireframe:o,flatShading:a}=this;let n=null;const h=t[0]+t[1]+t[2];n=this.useStandardMaterial?new d({map:s,wireframe:o,flatShading:a}):new m({map:s,wireframe:o}),this.filter&&(n=new b({baseMaterial:n,vertexShader:"\n                varying vec2 vUv;    //顶点纹理坐标\n                void main () {\n                    vUv = uv;\n                    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 ); 着色器会抖动\n                    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n                    csm_Position = position * vec3(1.0);\n                }\n                ",fragmentShader:"\n                uniform sampler2D e_Texture;     //纹理图像\n                varying vec2 vUv;               //片元纹理坐标\n                uniform mat4 t_Matrix;     //接收变换矩阵\n                void main () {\n                    // gl_FragColor = texture2D( e_Texture, vUv );\n\n                    // vec4 textureColor = texture2D( e_Texture, vUv );\n                    // //计算加权平均值\n                    // float w_a = textureColor.r * 0.3 + textureColor.g * 0.6 + textureColor.b * 0.1;\n                    // gl_FragColor = vec4(w_a, w_a, w_a, 1.0);\n\n                    vec4 textureColor = texture2D( e_Texture, vUv );\n                    //变换矩阵乘以 vec4(R,G,B,1)    ---\x3evec4(R,G,B,1) 是齐次坐标，原本是n维的向量用一个n+1维向量来表示\n                    //vec4(R,G,B,1)第四个分量不是透明度\n                    vec4 transColor =  vec4(textureColor.r, textureColor.g, textureColor.b, 1.0)*t_Matrix; \n                    //设置透明度\n                    transColor.a = 1.0;\n                    csm_FragColor = transColor;\n\n                    // if(vUv.x==0.0 || vUv.x==1.0 || vUv.y==0.0 || vUv.y==1.0){\n                    //     gl_FragColor.a = 0.0;\n                    // }\n                }",silent:!0,flatShading:a,uniforms:{e_Texture:{value:s},t_Matrix:{value:this.getTranMatrix()}}}));const l=new L;if(l.renderOrder=h,r.computeBoundingBox(),r.boundingBox.getCenter(l.center),r.center(),r.computeBoundingSphere(),r.computeBoundsTree(),l.position.copy(l.center),l.geometry=r,l.material=n,this.showBoundingBox){const t=new p(r.boundingBox);l.add(t)}return l}abort(t){this.geometryProvider.abort(t),this.textureProvider.abort(t)}dispose(t,e){const i=e.geometry,r=e.material;i&&this.geometryProvider.dispose(t,i),r&&r.map&&this.textureProvider.dispose(t,r.map),r?.dispose()}}const H={class:"lonLatDiv"},Y=j(P({__name:"raycasterEvent",props:{tileMapRef:{}},setup(t){const e=t,i=_([0,0]);return C((()=>e.tileMapRef),((t,e)=>{if(!e&&t){let e=function(e){s.x=e.clientX/window.innerWidth*2-1,s.y=-e.clientY/window.innerHeight*2+1,r.setFromCamera(s,t.camera);var o=r.intersectObjects(t.map.children);if(o.length>0){var a=o[0];t.map.provider.geometryProvider.coordType===q?i.value=function(t,e){const{a:i,f:r}=A,s=.9996,o=t-5e5,a=e,n=Math.sqrt(r*(2-r)),h=r/(2-r),l=h*h,c=h*l,d=h*c,m=h*d,p=h*m,u=i/(1+h)*(1+1/4*l+1/64*d+1/256*p),f=o/(s*u),g=a/(s*u),v=[null,.5*h-2/3*l+37/96*c-1/360*d-81/512*m+96199/604800*p,1/48*l+1/15*c-437/1440*d+46/105*m-1118711/3870720*p,17/480*c-37/840*d-209/4480*m+5569/90720*p,4397/161280*d-11/504*m-830251/7257600*p,4583/161280*m-108847/3991680*p,20648693/638668800*p];let M=g;for(let j=1;j<=6;j++)M-=v[j]*Math.sin(2*j*g)*Math.cosh(2*j*f);let w=f;for(let j=1;j<=6;j++)w-=v[j]*Math.cos(2*j*g)*Math.sinh(2*j*f);const x=Math.sinh(w),y=Math.sin(M),T=Math.cos(M),b=y/Math.sqrt(x*x+T*T);let P=null,_=b;do{const t=Math.sinh(n*Math.atanh(n*_/Math.sqrt(1+_*_))),e=_*Math.sqrt(1+t*t)-t*Math.sqrt(1+_*_);P=(b-e)/Math.sqrt(1+e*e)*(1+(1-n*n)*_*_)/((1-n*n)*Math.sqrt(1+_*_)),_+=P}while(Math.abs(P)>1e-12);const C=_,F=Math.atan(C);let B=Math.atan2(x,T);B+=Z(117);const W=Number(z(F).toFixed(14));return[Number(z(B).toFixed(14)),W]}(a.point.x,-a.point.z):i.value=function(t,e){let i=t/(D*Math.PI)*180,r=e/(D*Math.PI)*180;return r=180/Math.PI*(2*Math.atan(Math.exp(r*Math.PI/180))-Math.PI/2),[i,r]}(a.point.x,-a.point.z),i.value[0]=i.value[0].toFixed(4),i.value[1]=i.value[1].toFixed(4)}};console.log("raycasterEvent:",t);var r=new u,s=new f;document.addEventListener("mousemove",e,!1)}})),(t,e)=>(B(),F("div",H," lon:"+W(i.value[0])+" lat:"+W(i.value[1]),1))}}),[["__scopeId","data-v-462a60f8"]]);export{E as M,$ as P,V as T,q as U,I as a,S as b,N as c,X as d,G as l,Y as r};
