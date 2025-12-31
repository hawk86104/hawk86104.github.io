import{c as t,commonVariables as Z,derived as ee,cB as z,insideModal as oe,insidePopover as re,asModal as te,cM as l,cE as a,resolveWrappedSlot as h,useConfig as ne,useTheme as P,createKey as w,useThemeClass as de,call as ae,ensureValidVNode as u}from"./light.Bp388JKA1767148983502.js";import{importShared as ie}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{useRtl as le}from"./use-rtl.q0hodkC81767148983502.js";import{getMargin as se}from"./Scrollbar.BsFc6odp1767148983502.js";import{NBaseClose as ce}from"./Suffix.D4O-Hju71767148983502.js";function be(e){return Object.keys(e)}const{cubicBezierEaseIn:E,cubicBezierEaseOut:F}=Z;function ye({transformOrigin:e="inherit",duration:s=".2s",enterScale:c=".9",originalTransform:o="",originalTransition:i=""}={}){return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${s} ${E}, transform ${s} ${E} ${i&&`,${i}`}`}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${s} ${F}, transform ${s} ${F} ${i&&`,${i}`}`}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${c})`}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const ge={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function fe(e){const{primaryColor:s,borderRadius:c,lineHeight:o,fontSize:i,cardColor:f,textColor2:x,textColor1:p,dividerColor:d,fontWeightStrong:n,closeIconColor:r,closeIconColorHover:b,closeIconColorPressed:C,closeColorHover:m,closeColorPressed:S,modalColor:y,boxShadow1:$,popoverColor:k,actionColor:v}=e;return Object.assign(Object.assign({},ge),{lineHeight:o,color:f,colorModal:y,colorPopover:k,colorTarget:s,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:x,titleTextColor:p,borderColor:d,actionColor:v,titleFontWeight:n,closeColorHover:m,closeColorPressed:S,closeBorderRadius:c,closeIconColor:r,closeIconColorHover:b,closeIconColorPressed:C,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:$,borderRadius:c})}const pe={name:"Card",common:ee,self:fe},me=t([z("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[te({background:"var(--n-color-modal)"}),l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[a("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[a("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[a("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[a("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[z("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[a("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),a("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),a("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),a("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),a("content","flex: 1; min-width: 0;"),a("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),a("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),z("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[a("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[a("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[a("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),oe(z("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),re(z("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),{computed:B,defineComponent:ve,h:g}=await ie("vue"),R={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function,closeFocusable:Boolean},$e=be(R),he=Object.assign(Object.assign({},P.props),R),ke=ve({name:"Card",props:he,slots:Object,setup(e){const s=()=>{const{onClose:n}=e;n&&ae(n)},{inlineThemeDisabled:c,mergedClsPrefixRef:o,mergedRtlRef:i}=ne(e),f=P("Card","-card",me,pe,e,o),x=le("Card",i,o),p=B(()=>{const{size:n}=e,{self:{color:r,colorModal:b,colorTarget:C,textColor:m,titleTextColor:S,titleFontWeight:y,borderColor:$,actionColor:k,borderRadius:v,lineHeight:O,closeIconColor:T,closeIconColorHover:_,closeIconColorPressed:j,closeColorHover:I,closeColorPressed:M,closeBorderRadius:H,closeIconSize:V,closeSize:L,boxShadow:W,colorPopover:N,colorEmbedded:K,colorEmbeddedModal:A,colorEmbeddedPopover:D,[w("padding",n)]:U,[w("fontSize",n)]:q,[w("titleFontSize",n)]:G},common:{cubicBezierEaseInOut:J}}=f.value,{top:Q,left:X,bottom:Y}=se(U);return{"--n-bezier":J,"--n-border-radius":v,"--n-color":r,"--n-color-modal":b,"--n-color-popover":N,"--n-color-embedded":K,"--n-color-embedded-modal":A,"--n-color-embedded-popover":D,"--n-color-target":C,"--n-text-color":m,"--n-line-height":O,"--n-action-color":k,"--n-title-text-color":S,"--n-title-font-weight":y,"--n-close-icon-color":T,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":j,"--n-close-color-hover":I,"--n-close-color-pressed":M,"--n-border-color":$,"--n-box-shadow":W,"--n-padding-top":Q,"--n-padding-bottom":Y,"--n-padding-left":X,"--n-font-size":q,"--n-title-font-size":G,"--n-close-size":L,"--n-close-icon-size":V,"--n-close-border-radius":H}}),d=c?de("card",B(()=>e.size[0]),p,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:f,handleCloseClick:s,cssVars:c?void 0:p,themeClass:d?.themeClass,onRender:d?.onRender}},render(){const{segmented:e,bordered:s,hoverable:c,mergedClsPrefix:o,rtlEnabled:i,onRender:f,embedded:x,tag:p,$slots:d}=this;return f?.(),g(p,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:i,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:s,[`${o}-card--hoverable`]:c}],style:this.cssVars,role:this.role},h(d.cover,n=>{const r=this.cover?u([this.cover()]):n;return r&&g("div",{class:`${o}-card-cover`,role:"none"},r)}),h(d.header,n=>{const{title:r}=this,b=r?u(typeof r=="function"?[r()]:[r]):n;return b||this.closable?g("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},g("div",{class:`${o}-card-header__main`,role:"heading"},b),h(d["header-extra"],C=>{const m=this.headerExtra?u([this.headerExtra()]):C;return m&&g("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&g(ce,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,focusable:this.closeFocusable,absolute:!0})):null}),h(d.default,n=>{const{content:r}=this,b=r?u(typeof r=="function"?[r()]:[r]):n;return b&&g("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},b)}),h(d.footer,n=>{const r=this.footer?u([this.footer()]):n;return r&&g("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),h(d.action,n=>{const r=this.action?u([this.action()]):n;return r&&g("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{ke as NCard,$e as cardBasePropKeys,R as cardBaseProps,pe as cardLight,he as cardProps,ye as fadeInScaleUpTransition,be as keysOf,fe as self};
