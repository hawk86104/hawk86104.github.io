import{a5 as p,r as c,o as s,C as o,J as t,ae as l,af as _,b7 as d,a,T as n,ag as m,b3 as u,ak as g,a1 as e}from"./vendor.J2DLLmWp1718158885800.js";import{_ as f}from"./skyBoxAmesh.vue_vue_type_script_setup_true_lang.cg3zHooq1718158885800.js";const h=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),C=e("TresAmbientLight",{intensity:10},null,-1),T=e("TresMesh",{position:[0,2,-4],"cast-shadow":""},[e("TresBoxGeometry",{args:[2,2,2]}),e("TresMeshNormalMaterial")],-1),M=p({__name:"skyBoxA",setup(y){const r={clearColor:"#201919",windowSize:!0,shadows:!0,toneMapping:d,toneMappingExposure:.8};return(k,v)=>{const i=c("TresCanvas");return s(),o(i,l(_(r)),{default:t(()=>[h,a(n(m),{enableDamping:""}),C,a(n(u),{args:[3,3,3],color:"orange",position:[3,2,1],"cast-shadow":""}),T,(s(),o(g,null,{default:t(()=>[a(f,{texture:"https://cdn.polyhaven.com/asset_img/primary/kloofendal_48d_partly_cloudy_puresky.png?width=1920"})]),_:1}))]),_:1},16)}}});export{M as default};