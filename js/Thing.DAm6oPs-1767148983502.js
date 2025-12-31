import{importShared as B}from"./3d-tiles-renderer.DZNovkLO1767148983502.js";import{derived as V,composite as C,c as g,cB as r,insideModal as q,insidePopover as J,cNotM as Y,cM as $,cE as v,useConfig as F,useTheme as R,createKey as A,useThemeClass as N,createInjectionKey as Z,throwError as ee}from"./light.Bp388JKA1767148983502.js";import{flatten as oe,repeat as re}from"./Scrollbar.BsFc6odp1767148983502.js";import{getSlot as te}from"./Space.ugCFVeji1767148983502.js";import{useCompitable as ne}from"./use-compitable.DdqYCU_J1767148983502.js";import{useRtl as Q}from"./use-rtl.q0hodkC81767148983502.js";function K(e,o="default",t=[]){const{children:n}=e;if(n!==null&&typeof n=="object"&&!Array.isArray(n)){const d=n[o];if(typeof d=="function")return d()}return t}const ie={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function le(e){const{tableHeaderColor:o,textColor2:t,textColor1:n,cardColor:d,modalColor:s,popoverColor:b,dividerColor:c,borderRadius:h,fontWeightStrong:f,lineHeight:i,fontSizeSmall:l,fontSizeMedium:x,fontSizeLarge:u}=e;return Object.assign(Object.assign({},ie),{lineHeight:i,fontSizeSmall:l,fontSizeMedium:x,fontSizeLarge:u,titleTextColor:n,thColor:C(d,o),thColorModal:C(s,o),thColorPopover:C(b,o),thTextColor:n,thFontWeight:f,tdTextColor:t,tdColor:d,tdColorModal:s,tdColorPopover:b,borderColor:C(d,c),borderColorModal:C(s,c),borderColorPopover:C(b,c),borderRadius:h})}const de={common:V,self:le},ae=g([r("descriptions",{fontSize:"var(--n-font-size)"},[r("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),r("descriptions-table-wrapper",[r("descriptions-table",[r("descriptions-table-row",[r("descriptions-table-header",{padding:"var(--n-th-padding)"}),r("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Y("bordered",[r("descriptions-table-wrapper",[r("descriptions-table",[r("descriptions-table-row",[g("&:last-child",[r("descriptions-table-content",{paddingBottom:0})])])])])]),$("left-label-placement",[r("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),$("left-label-align",[g("th",{textAlign:"left"})]),$("center-label-align",[g("th",{textAlign:"center"})]),$("right-label-align",[g("th",{textAlign:"right"})]),$("bordered",[r("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[r("descriptions-table",[r("descriptions-table-row",[g("&:not(:last-child)",[r("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),r("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),r("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),r("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),r("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),r("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[r("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[r("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[r("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),r("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),v("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),q(r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(r("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U="DESCRIPTION_ITEM_FLAG";function se(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[U]:!1}const{computed:G,defineComponent:ce,h:m}=await B("vue"),he=Object.assign(Object.assign({},R.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),De=ce({name:"Descriptions",props:he,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=F(e),n=R("Descriptions","-descriptions",ae,de,e,o),d=G(()=>{const{size:b,bordered:c}=e,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:f,thColor:i,thColorModal:l,thColorPopover:x,thTextColor:u,thFontWeight:S,tdTextColor:_,tdColor:T,tdColorModal:j,tdColorPopover:a,borderColor:y,borderColorModal:O,borderColorPopover:w,borderRadius:z,lineHeight:E,[A("fontSize",b)]:I,[A(c?"thPaddingBordered":"thPadding",b)]:P,[A(c?"tdPaddingBordered":"tdPadding",b)]:M}}=n.value;return{"--n-title-text-color":f,"--n-th-padding":P,"--n-td-padding":M,"--n-font-size":I,"--n-bezier":h,"--n-th-font-weight":S,"--n-line-height":E,"--n-th-text-color":u,"--n-td-text-color":_,"--n-th-color":i,"--n-th-color-modal":l,"--n-th-color-popover":x,"--n-td-color":T,"--n-td-color-modal":j,"--n-td-color-popover":a,"--n-border-radius":z,"--n-border-color":y,"--n-border-color-modal":O,"--n-border-color-popover":w}}),s=t?N("descriptions",G(()=>{let b="";const{size:c,bordered:h}=e;return h&&(b+="a"),b+=c[0],b}),d,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:d,themeClass:s?.themeClass,onRender:s?.onRender,compitableColumn:ne(e,["columns","column"]),inlineThemeDisabled:t}},render(){const e=this.$slots.default,o=e?oe(e()):[];o.length;const{contentClass:t,labelClass:n,compitableColumn:d,labelPlacement:s,labelAlign:b,size:c,bordered:h,title:f,cssVars:i,mergedClsPrefix:l,separator:x,onRender:u}=this;u?.();const S=o.filter(a=>se(a)),_={span:0,row:[],secondRow:[],rows:[]},j=S.reduce((a,y,O)=>{const w=y.props||{},z=S.length-1===O,E=["label"in w?w.label:K(y,"label")],I=[K(y)],P=w.span||1,M=a.span;a.span+=P;const D=w.labelStyle||w["label-style"]||this.labelStyle,L=w.contentStyle||w["content-style"]||this.contentStyle;if(s==="left")h?a.row.push(m("th",{class:[`${l}-descriptions-table-header`,n],colspan:1,style:D},E),m("td",{class:[`${l}-descriptions-table-content`,t],colspan:z?(d-M)*2+1:P*2-1,style:L},I)):a.row.push(m("td",{class:`${l}-descriptions-table-content`,colspan:z?(d-M)*2:P*2},m("span",{class:[`${l}-descriptions-table-content__label`,n],style:D},[...E,x&&m("span",{class:`${l}-descriptions-separator`},x)]),m("span",{class:[`${l}-descriptions-table-content__content`,t],style:L},I)));else{const W=z?(d-M)*2:P*2;a.row.push(m("th",{class:[`${l}-descriptions-table-header`,n],colspan:W,style:D},E)),a.secondRow.push(m("td",{class:[`${l}-descriptions-table-content`,t],colspan:W,style:L},I))}return(a.span>=d||z)&&(a.span=0,a.row.length&&(a.rows.push(a.row),a.row=[]),s!=="left"&&a.secondRow.length&&(a.rows.push(a.secondRow),a.secondRow=[])),a},_).rows.map(a=>m("tr",{class:`${l}-descriptions-table-row`},a));return m("div",{style:i,class:[`${l}-descriptions`,this.themeClass,`${l}-descriptions--${s}-label-placement`,`${l}-descriptions--${b}-label-align`,`${l}-descriptions--${c}-size`,h&&`${l}-descriptions--bordered`]},f||this.$slots.header?m("div",{class:`${l}-descriptions-header`},f||te(this,"header")):null,m("div",{class:`${l}-descriptions-table-wrapper`},m("table",{class:`${l}-descriptions-table`},m("tbody",null,s==="top"&&m("tr",{class:`${l}-descriptions-table-row`,style:{visibility:"collapse"}},re(d*2,m("td",null))),j))))}}),{defineComponent:be}=await B("vue"),pe={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},Le=be({name:"DescriptionsItem",[U]:!0,props:pe,slots:Object,render(){return null}});function ge(e){const{textColor2:o,cardColor:t,modalColor:n,popoverColor:d,dividerColor:s,borderRadius:b,fontSize:c,hoverColor:h}=e;return{textColor:o,color:t,colorHover:h,colorModal:n,colorHoverModal:C(n,h),colorPopover:d,colorHoverPopover:C(d,h),borderColor:s,borderColorModal:C(n,s),borderColorPopover:C(d,s),borderRadius:b,fontSize:c}}const me={common:V,self:ge};function ve(e){const{textColor1:o,textColor2:t,fontWeightStrong:n,fontSize:d}=e;return{fontSize:d,titleTextColor:o,textColor:t,titleFontWeight:n}}const fe={common:V,self:ve},ue=g([r("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[$("show-divider",[r("list-item",[g("&:not(:last-child)",[v("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),$("clickable",[r("list-item",`
 cursor: pointer;
 `)]),$("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),$("hoverable",[r("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[v("divider",`
 background-color: transparent;
 `)])])]),$("bordered, hoverable",[r("list-item",`
 padding: 12px 20px;
 `),v("header, footer",`
 padding: 12px 20px;
 `)]),v("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),r("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[v("prefix",`
 margin-right: 20px;
 flex: 0;
 `),v("suffix",`
 margin-left: 20px;
 flex: 0;
 `),v("main",`
 flex: 1;
 `),v("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),q(r("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),J(r("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),{computed:xe,defineComponent:Ce,h:H,provide:$e,toRef:we}=await B("vue"),ye=Object.assign(Object.assign({},R.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),X=Z("n-list"),Ae=Ce({name:"List",props:ye,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t,mergedRtlRef:n}=F(e),d=Q("List",n,o),s=R("List","-list",ue,me,e,o);$e(X,{showDividerRef:we(e,"showDivider"),mergedClsPrefixRef:o});const b=xe(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:f,textColor:i,color:l,colorModal:x,colorPopover:u,borderColor:S,borderColorModal:_,borderColorPopover:T,borderRadius:j,colorHover:a,colorHoverModal:y,colorHoverPopover:O}}=s.value;return{"--n-font-size":f,"--n-bezier":h,"--n-text-color":i,"--n-color":l,"--n-border-radius":j,"--n-border-color":S,"--n-border-color-modal":_,"--n-border-color-popover":T,"--n-color-modal":x,"--n-color-popover":u,"--n-color-hover":a,"--n-color-hover-modal":y,"--n-color-hover-popover":O}}),c=t?N("list",void 0,b,e):void 0;return{mergedClsPrefix:o,rtlEnabled:d,cssVars:t?void 0:b,themeClass:c?.themeClass,onRender:c?.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:t,onRender:n}=this;return n?.(),H("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},o.header?H("div",{class:`${t}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?H("div",{class:`${t}-list__footer`},o.footer()):null)}}),{defineComponent:Se,h:k,inject:ze}=await B("vue"),He=Se({name:"ListItem",slots:Object,setup(){const e=ze(X,null);return e||ee("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return k("li",{class:`${o}-list-item`},e.prefix?k("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?k("div",{class:`${o}-list-item__main`},e):null,e.suffix?k("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&k("div",{class:`${o}-list-item__divider`}))}}),Pe=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[v("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),v("description",[g("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),v("content",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("footer",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)]),v("action",[g("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),{computed:Re,defineComponent:_e,Fragment:je,h:p}=await B("vue"),Oe=Object.assign(Object.assign({},R.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),Ve=_e({name:"Thing",props:Oe,slots:Object,setup(e,{slots:o}){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:d}=F(e),s=R("Thing","-thing",Pe,fe,e,t),b=Q("Thing",d,t),c=Re(()=>{const{self:{titleTextColor:f,textColor:i,titleFontWeight:l,fontSize:x},common:{cubicBezierEaseInOut:u}}=s.value;return{"--n-bezier":u,"--n-font-size":x,"--n-text-color":i,"--n-title-font-weight":l,"--n-title-text-color":f}}),h=n?N("thing",void 0,c,e):void 0;return()=>{var f;const{value:i}=t,l=b?b.value:!1;return(f=h?.onRender)===null||f===void 0||f.call(h),p("div",{class:[`${i}-thing`,h?.themeClass,l&&`${i}-thing--rtl`],style:n?void 0:c.value},o.avatar&&e.contentIndented?p("div",{class:`${i}-thing-avatar`},o.avatar()):null,p("div",{class:`${i}-thing-main`},!e.contentIndented&&(o.header||e.title||o["header-extra"]||e.titleExtra||o.avatar)?p("div",{class:`${i}-thing-avatar-header-wrapper`},o.avatar?p("div",{class:`${i}-thing-avatar`},o.avatar()):null,o.header||e.title||o["header-extra"]||e.titleExtra?p("div",{class:`${i}-thing-header-wrapper`},p("div",{class:`${i}-thing-header`},o.header||e.title?p("div",{class:`${i}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?p("div",{class:`${i}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null),o.description||e.description?p("div",{class:[`${i}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null):null):p(je,null,o.header||e.title||o["header-extra"]||e.titleExtra?p("div",{class:`${i}-thing-header`},o.header||e.title?p("div",{class:`${i}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?p("div",{class:`${i}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null):null,o.description||e.description?p("div",{class:[`${i}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null),o.default||e.content?p("div",{class:[`${i}-thing-main__content`,e.contentClass],style:e.contentStyle},o.default?o.default():e.content):null,o.footer?p("div",{class:`${i}-thing-main__footer`},o.footer()):null,o.action?p("div",{class:`${i}-thing-main__action`},o.action()):null))}}});export{De as NDescriptions,Le as NDescriptionsItem,Ae as NList,He as NListItem,Ve as NThing,pe as descriptionsItemProps,he as descriptionsProps,ye as listProps,le as self,ge as self$1,ve as self$2,Oe as thingProps};
