import{importShared as t}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{shaderMaterial as y}from"./shaderMaterial.CBuQXryg1767148983502.js";const i=await t("three"),G=y({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,cellThickness:.5,sectionThickness:1,cellColor:new i.Color,sectionColor:new i.Color,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new i.Vector3,worldPlanePosition:new i.Vector3},`
      varying vec3 localPosition;
      varying vec4 worldPosition;
  
      uniform vec3 worldCamProjPosition;
      uniform vec3 worldPlanePosition;
      uniform float fadeDistance;
      uniform bool infiniteGrid;
      uniform bool followCamera;
  
      void main() {
        localPosition = position.xzy;
        if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
        
        worldPosition = modelMatrix * vec4(localPosition, 1.0);
        if (followCamera) {
          worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
          localPosition = (inverse(modelMatrix) * worldPosition).xyz;
        }
  
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,`
      varying vec3 localPosition;
      varying vec4 worldPosition;
  
      uniform vec3 worldCamProjPosition;
      uniform float cellSize;
      uniform float sectionSize;
      uniform vec3 cellColor;
      uniform vec3 sectionColor;
      uniform float fadeDistance;
      uniform float fadeStrength;
      uniform float cellThickness;
      uniform float sectionThickness;
  
      float getGrid(float size, float thickness) {
        vec2 r = localPosition.xz / size;
        vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
        float line = min(grid.x, grid.y) + 1.0 - thickness;
        return 1.0 - min(line, 1.0);
      }
  
      void main() {
        float g1 = getGrid(cellSize, cellThickness);
        float g2 = getGrid(sectionSize, sectionThickness);
  
        float dist = distance(worldCamProjPosition, worldPosition.xyz);
        float d = 1.0 - min(dist / fadeDistance, 1.0);
        vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));
  
        gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
        gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
        if (gl_FragColor.a <= 0.0) discard;
  
        #include <tonemapping_fragment>
        #include <${parseInt(i.REVISION.replace(/\D+/g,""))>=154?"colorspace_fragment":"encodings_fragment"}>
      }
    `),j=({args:l=[1,1],cellColor:o=new i.Color("#000000"),sectionColor:r=new i.Color("#2080ff"),cellSize:e=.5,sectionSize:a=1,followCamera:d=!1,infiniteGrid:m=!1,fadeDistance:u=100,fadeStrength:w=1,cellThickness:g=.5,sectionThickness:C=1,side:P=i.BackSide}={})=>{const h={cellSize:e,sectionSize:a,cellColor:o,sectionColor:r,cellThickness:g,sectionThickness:C},p={fadeDistance:u,fadeStrength:w,infiniteGrid:m,followCamera:d},v=new G({transparent:!0,side:P,...h,...p}),S=new i.PlaneGeometry(l[0],l[1]),n=new i.Mesh(S,v);n.frustumCulled=!1;const s=new i.Plane,k=new i.Vector3(0,1,0),z=new i.Vector3(0,0,0);return{mesh:n,update:_=>{if(!n.parent)return;s.setFromNormalAndCoplanarPoint(k,z).applyMatrix4(n.matrixWorld);const c=n.material,T=c.uniforms.worldCamProjPosition,x=c.uniforms.worldPlanePosition;s.projectPoint(_.position,T.value),x.value.set(0,0,0).applyMatrix4(n.matrixWorld)}}},{defineComponent:D}=await t("vue"),{unref:M,openBlock:E,createElementBlock:b}=await t("vue"),B=["object"],f=await t("three"),{watchEffect:V}=await t("vue"),H=D({__name:"gridPlusCom",props:{args:{default:[10,10]},cellColor:{default:"#6f6f6f"},cellSize:{default:.6},cellThickness:{default:1},sectionColor:{default:"#9d4b4b"},sectionSize:{default:3.3},sectionThickness:{default:1.5},fadeDistance:{default:25},fadeStrength:{default:1},followCamera:{type:Boolean,default:!1},infiniteGrid:{type:Boolean,default:!0}},setup(l){const o=l,r=j({args:o.args,cellSize:o.cellSize,cellThickness:o.cellThickness,cellColor:new f.Color(o.cellColor),sectionSize:o.sectionSize,sectionThickness:o.sectionThickness,sectionColor:new f.Color(o.sectionColor),fadeDistance:o.fadeDistance,fadeStrength:o.fadeStrength,followCamera:o.followCamera,infiniteGrid:o.infiniteGrid});return V(()=>{const e=r.mesh.material;e.cellSize=o.cellSize,e.cellThickness=o.cellThickness,e.cellColor.set(o.cellColor),e.sectionColor.set(o.sectionColor),e.sectionSize=o.sectionSize,e.sectionThickness=o.sectionThickness,e.fadeDistance=o.fadeDistance,e.fadeStrength=o.fadeStrength,e.followCamera=o.followCamera,e.infiniteGrid=o.infiniteGrid}),(e,a)=>(E(),b("primitive",{object:M(r).mesh},null,8,B))}});export{H as _sfc_main};
