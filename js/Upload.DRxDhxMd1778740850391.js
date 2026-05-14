import{importShared as L}from"./3d-tiles-renderer.SzstPcaT1778740850391.js";import{useRtl as Vt,isMounted as ho,useMemo as go}from"./use-rtl.DmSwU7Xb1778740850391.js";import{fadeInHeightExpandTransition as pt,omit as po}from"./use-message.DAf4bBys1778740850391.js";import{derived as $e,composite as ae,changeColor as ce,cB as v,cE as V,cM as E,c as U,resolveSlot as bt,resolveWrappedSlot as vo,useConfig as ue,useTheme as ne,createKey as oe,useThemeClass as Ie,createTheme as wt,throwError as ve,createInjectionKey as Ct,cNotM as mo,call as de,murmur2 as bo,error as Tt,warn as wo}from"./light.CNkfQ5k91778740850391.js";import{NFadeInExpandTransition as yt}from"./browser.CfmN07U61778740850391.js";import{NBaseClose as Co,useLocale as yo}from"./Suffix.R1F2IMs11778740850391.js";import{replaceable as fe,NBaseIcon as q}from"./Close.Bxv4n3R61778740850391.js";import{ErrorIcon as xt,WarningIcon as Rt,InfoIcon as $t,SuccessIcon as St}from"./Warning.27tmqzib1778740850391.js";import{getMargin as xo,createId as Xe,fadeInTransition as vt,pxfy as Ro}from"./Scrollbar.D7PGUpQz1778740850391.js";import{dialogApiInjectionKey as Xt,dialogReactiveListInjectionKey as qt,NModal as $o,NDialog as So,dialogPropKeys as ko,dialogProps as Po,dialogProviderInjectionKey as Oo,useClickPosition as zo,useClicked as Io}from"./Modal.NVPTC3yT1778740850391.js";import{keep as Lo,LazyTeleport as To,zindexable as Bo}from"./keep.zaWnvEDY1778740850391.js";import{isBrowser as Gt,NBaseLoading as jo,iconSwitchTransition as Do,NIconSwitchTransition as Eo,useFormItem as Mo}from"./Loading.CrQV7PiI1778740850391.js";import{useCompitable as Fo}from"./use-compitable.DbzEvT6_1778740850391.js";import{formatLength as be}from"./format-length.BHvmju661778740850391.js";import{fadeInScaleUpTransition as Uo}from"./Card.XfCupuT01778740850391.js";import{popoverLight as No,NPopover as _o,popoverBaseProps as Ao,beforeNextFrameOnce as Ho}from"./Popover.osaCVo-k1778740850391.js";import{useMergedState as qe,on as Ke,off as Be}from"./use-merged-state.XHpcaMZc1778740850391.js";import{kebabCase as Wo}from"./index.CVd4Rgkn1778740850391.js";import{buttonLight as Vo,Button as je}from"./Button.D7N_PYmw1778740850391.js";import{EyeIcon as Xo}from"./Input.CnqXiA3d1778740850391.js";import{AddIcon as qo}from"./Add.DFWirM341778740850391.js";function kt(e,t){if(!e)return;const o=document.createElement("a");o.href=e,t!==void 0&&(o.download=t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Ai(e,t){kt(e,t)}const{h:De}=await L("vue"),Go=fe("attach",()=>De("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},De("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},De("g",{fill:"currentColor","fill-rule":"nonzero"},De("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),{h:Ee}=await L("vue"),Zo=fe("cancel",()=>Ee("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Ee("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Ee("g",{fill:"currentColor","fill-rule":"nonzero"},Ee("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),{h:Me}=await L("vue"),Zt=fe("download",()=>Me("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Me("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Me("g",{fill:"currentColor","fill-rule":"nonzero"},Me("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),{defineComponent:Yo,h:Je}=await L("vue"),Ko=Yo({name:"ResizeSmall",render(){return Je("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Je("g",{fill:"none"},Je("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),{h:Qe}=await L("vue"),Jo=fe("retry",()=>Qe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Qe("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),Qe("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),{h:et}=await L("vue"),Qo=fe("rotateClockwise",()=>et("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},et("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),et("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),{h:tt}=await L("vue"),er=fe("rotateClockwise",()=>tt("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),tt("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),{h:ke}=await L("vue"),tr=fe("trash",()=>ke("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ke("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),ke("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),ke("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),ke("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),{h:ot}=await L("vue"),or=fe("zoomIn",()=>ot("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ot("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),ot("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),{h:rt}=await L("vue"),rr=fe("zoomOut",()=>rt("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rt("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),rt("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),nr={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"};function ir(e){const{lineHeight:t,borderRadius:o,fontWeightStrong:r,baseColor:i,dividerColor:l,actionColor:c,textColor1:a,textColor2:n,closeColorHover:d,closeColorPressed:s,closeIconColor:u,closeIconColorHover:g,closeIconColorPressed:x,infoColor:h,successColor:f,warningColor:R,errorColor:y,fontSize:O}=e;return Object.assign(Object.assign({},nr),{fontSize:O,lineHeight:t,titleFontWeight:r,borderRadius:o,border:`1px solid ${l}`,color:c,titleTextColor:a,iconColor:n,contentTextColor:n,closeBorderRadius:o,closeColorHover:d,closeColorPressed:s,closeIconColor:u,closeIconColorHover:g,closeIconColorPressed:x,borderInfo:`1px solid ${ae(i,ce(h,{alpha:.25}))}`,colorInfo:ae(i,ce(h,{alpha:.08})),titleTextColorInfo:a,iconColorInfo:h,contentTextColorInfo:n,closeColorHoverInfo:d,closeColorPressedInfo:s,closeIconColorInfo:u,closeIconColorHoverInfo:g,closeIconColorPressedInfo:x,borderSuccess:`1px solid ${ae(i,ce(f,{alpha:.25}))}`,colorSuccess:ae(i,ce(f,{alpha:.08})),titleTextColorSuccess:a,iconColorSuccess:f,contentTextColorSuccess:n,closeColorHoverSuccess:d,closeColorPressedSuccess:s,closeIconColorSuccess:u,closeIconColorHoverSuccess:g,closeIconColorPressedSuccess:x,borderWarning:`1px solid ${ae(i,ce(R,{alpha:.33}))}`,colorWarning:ae(i,ce(R,{alpha:.08})),titleTextColorWarning:a,iconColorWarning:R,contentTextColorWarning:n,closeColorHoverWarning:d,closeColorPressedWarning:s,closeIconColorWarning:u,closeIconColorHoverWarning:g,closeIconColorPressedWarning:x,borderError:`1px solid ${ae(i,ce(y,{alpha:.25}))}`,colorError:ae(i,ce(y,{alpha:.08})),titleTextColorError:a,iconColorError:y,contentTextColorError:n,closeColorHoverError:d,closeColorPressedError:s,closeIconColorError:u,closeIconColorHoverError:g,closeIconColorPressedError:x})}const lr={common:$e,self:ir},sr=v("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[V("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),E("closable",[v("alert-body",[V("title",`
 padding-right: 24px;
 `)])]),V("icon",{color:"var(--n-icon-color)"}),v("alert-body",{padding:"var(--n-padding)"},[V("title",{color:"var(--n-title-text-color)"}),V("content",{color:"var(--n-content-text-color)"})]),pt({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),V("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),V("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),E("show-icon",[v("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),E("right-adjust",[v("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),v("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[V("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[U("& +",[V("content",{marginTop:"9px"})])]),V("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),V("icon",{transition:"color .3s var(--n-bezier)"})]),{computed:Bt,defineComponent:ar,h:ee,mergeProps:cr,ref:dr,watchEffect:Hi}=await L("vue"),ur=Object.assign(Object.assign({},ne.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Wi=ar({name:"Alert",inheritAttrs:!1,props:ur,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:o,inlineThemeDisabled:r,mergedRtlRef:i}=ue(e),l=ne("Alert","-alert",sr,lr,e,t),c=Vt("Alert",i,t),a=Bt(()=>{const{common:{cubicBezierEaseInOut:x},self:h}=l.value,{fontSize:f,borderRadius:R,titleFontWeight:y,lineHeight:O,iconSize:M,iconMargin:z,iconMarginRtl:m,closeIconSize:P,closeBorderRadius:T,closeSize:k,closeMargin:S,closeMarginRtl:B,padding:b}=h,{type:C}=e,{left:F,right:Z}=xo(z);return{"--n-bezier":x,"--n-color":h[oe("color",C)],"--n-close-icon-size":P,"--n-close-border-radius":T,"--n-close-color-hover":h[oe("closeColorHover",C)],"--n-close-color-pressed":h[oe("closeColorPressed",C)],"--n-close-icon-color":h[oe("closeIconColor",C)],"--n-close-icon-color-hover":h[oe("closeIconColorHover",C)],"--n-close-icon-color-pressed":h[oe("closeIconColorPressed",C)],"--n-icon-color":h[oe("iconColor",C)],"--n-border":h[oe("border",C)],"--n-title-text-color":h[oe("titleTextColor",C)],"--n-content-text-color":h[oe("contentTextColor",C)],"--n-line-height":O,"--n-border-radius":R,"--n-font-size":f,"--n-title-font-weight":y,"--n-icon-size":M,"--n-icon-margin":z,"--n-icon-margin-rtl":m,"--n-close-size":k,"--n-close-margin":S,"--n-close-margin-rtl":B,"--n-padding":b,"--n-icon-margin-left":F,"--n-icon-margin-right":Z}}),n=r?Ie("alert",Bt(()=>e.type[0]),a,e):void 0,d=dr(!0),s=()=>{const{onAfterLeave:x,onAfterHide:h}=e;x&&x(),h&&h()};return{rtlEnabled:c,mergedClsPrefix:t,mergedBordered:o,visible:d,handleCloseClick:()=>{var x;Promise.resolve((x=e.onClose)===null||x===void 0?void 0:x.call(e)).then(h=>{h!==!1&&(d.value=!1)})},handleAfterLeave:()=>{s()},mergedTheme:l,cssVars:r?void 0:a,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),ee(yt,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:o}=this,r={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?ee("div",Object.assign({},cr(this.$attrs,r)),this.closable&&ee(Co,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&ee("div",{class:`${t}-alert__border`}),this.showIcon&&ee("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},bt(o.icon,()=>[ee(q,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return ee(St,null);case"info":return ee($t,null);case"warning":return ee(Rt,null);case"error":return ee(xt,null);default:return null}}})])),ee("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},vo(o.header,i=>{const l=i||this.title;return l?ee("div",{class:`${t}-alert-body__title`},l):null}),o.default&&ee("div",{class:`${t}-alert-body__content`},o))):null}})}}),fr=Gt&&"loading"in document.createElement("img");function hr(e={}){var t;const{root:o=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof o=="string"?document.querySelector(o):o)||document.documentElement})}}const nt=new WeakMap,it=new WeakMap,lt=new WeakMap,gr=(e,t,o)=>{if(!e)return()=>{};const r=hr(t),{root:i}=r.options;let l;const c=nt.get(i);c?l=c:(l=new Map,nt.set(i,l));let a,n;l.has(r.hash)?(n=l.get(r.hash),n[1].has(e)||(a=n[0],n[1].add(e),a.observe(e))):(a=new IntersectionObserver(u=>{u.forEach(g=>{if(g.isIntersecting){const x=it.get(g.target),h=lt.get(g.target);x&&x(),h&&(h.value=!0)}})},r.options),a.observe(e),n=[a,new Set([e])],l.set(r.hash,n));let d=!1;const s=()=>{d||(it.delete(e),lt.delete(e),d=!0,n[1].has(e)&&(n[0].unobserve(e),n[1].delete(e)),n[1].size<=0&&l.delete(r.hash),l.size||nt.delete(i))};return it.set(e,s),lt.set(e,o),s},pr={padding:"8px 14px"};function vr(e){const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},pr),{borderRadius:t,boxShadow:o,color:ae(r,"rgba(0, 0, 0, .85)"),textColor:r})}const Yt=wt({name:"Tooltip",common:$e,peers:{Popover:No},self:vr}),{computed:mr,defineComponent:br,h:wr,ref:Cr}=await L("vue"),yr=Object.assign(Object.assign({},Ao),ne.props),xr=br({name:"Tooltip",props:yr,slots:Object,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=ue(e),o=ne("Tooltip","-tooltip",void 0,Yt,e,t),r=Cr(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(l){r.value.setShow(l)}}),{popoverRef:r,mergedTheme:o,popoverThemeOverrides:mr(()=>o.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return wr(_o,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),{inject:Kt}=await L("vue");function Vi(){const e=Kt(Xt,null);return e===null&&ve("use-dialog","No outer <n-dialog-provider /> founded."),e}function Xi(){const e=Kt(qt,null);return e===null&&ve("use-dialog-reactive-list","No outer <n-dialog-provider /> founded."),e}const{defineComponent:Rr,h:jt,normalizeClass:$r,ref:Sr}=await L("vue"),kr=Object.assign(Object.assign({},Po),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},zIndex:Number,onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function,draggable:[Boolean,Object]}),Pr=Rr({name:"DialogEnvironment",props:Object.assign(Object.assign({},kr),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=Sr(!0);function o(){const{onInternalAfterLeave:s,internalKey:u,onAfterLeave:g}=e;s&&s(u),g&&g()}function r(s){const{onPositiveClick:u}=e;u?Promise.resolve(u(s)).then(g=>{g!==!1&&n()}):n()}function i(s){const{onNegativeClick:u}=e;u?Promise.resolve(u(s)).then(g=>{g!==!1&&n()}):n()}function l(){const{onClose:s}=e;s?Promise.resolve(s()).then(u=>{u!==!1&&n()}):n()}function c(s){const{onMaskClick:u,maskClosable:g}=e;u&&(u(s),g&&n())}function a(){const{onEsc:s}=e;s&&s()}function n(){t.value=!1}function d(s){t.value=s}return{show:t,hide:n,handleUpdateShow:d,handleAfterLeave:o,handleCloseClick:l,handleNegativeClick:i,handlePositiveClick:r,handleMaskClick:c,handleEsc:a}},render(){const{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:o,handleCloseClick:r,handleAfterLeave:i,handleMaskClick:l,handleEsc:c,to:a,zIndex:n,maskClosable:d,show:s}=this;return jt($o,{show:s,onUpdateShow:t,onMaskClick:l,onEsc:c,to:a,zIndex:n,maskClosable:d,onAfterEnter:this.onAfterEnter,onAfterLeave:i,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,draggable:this.draggable,internalAppear:!0,internalDialog:!0},{default:({draggableClass:u})=>jt(So,Object.assign({},Lo(this.$props,ko),{titleClass:$r([this.titleClass,u]),style:this.internalStyle,onClose:r,onNegativeClick:o,onPositiveClick:e}))})}}),{defineComponent:Or,Fragment:zr,h:Dt,provide:st,reactive:Ir,ref:Lr}=await L("vue"),Tr={injectionKey:String,to:[String,Object]},qi=Or({name:"DialogProvider",props:Tr,setup(){const e=Lr([]),t={};function o(a={}){const n=Xe(),d=Ir(Object.assign(Object.assign({},a),{key:n,destroy:()=>{var s;(s=t[`n-dialog-${n}`])===null||s===void 0||s.hide()}}));return e.value.push(d),d}const r=["info","success","warning","error"].map(a=>n=>o(Object.assign(Object.assign({},n),{type:a})));function i(a){const{value:n}=e;n.splice(n.findIndex(d=>d.key===a),1)}function l(){Object.values(t).forEach(a=>{a?.hide()})}const c={create:o,destroyAll:l,info:r[0],success:r[1],warning:r[2],error:r[3]};return st(Xt,c),st(Oo,{clickedRef:Io(64),clickedPositionRef:zo()}),st(qt,e),Object.assign(Object.assign({},c),{dialogList:e,dialogInstRefs:t,handleAfterLeave:i})},render(){var e,t;return Dt(zr,null,[this.dialogList.map(o=>Dt(Pr,po(o,["destroy","style"],{internalStyle:o.style,to:this.to,ref:r=>{r===null?delete this.dialogInstRefs[`n-dialog-${o.key}`]:this.dialogInstRefs[`n-dialog-${o.key}`]=r},internalKey:o.key,onInternalAfterLeave:this.handleAfterLeave}))),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}});function Br(e){const{infoColor:t,successColor:o,warningColor:r,errorColor:i,textColor2:l,progressRailColor:c,fontSize:a,fontWeight:n}=e;return{fontSize:a,fontSizeCircle:"28px",fontWeightCircle:n,railColor:c,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:o,iconColorWarning:r,iconColorError:i,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:t,fillColorInfo:t,fillColorSuccess:o,fillColorWarning:r,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const Jt={name:"Progress",common:$e,self:Br};function jr(e){const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:i,heightLarge:l,heightHuge:c,primaryColor:a,fontSize:n}=e;return{fontSize:n,textColor:a,sizeTiny:o,sizeSmall:r,sizeMedium:i,sizeLarge:l,sizeHuge:c,color:a,opacitySpinning:t}}const Dr={common:$e,self:jr};function Er(e){const{iconColor:t,primaryColor:o,errorColor:r,textColor2:i,successColor:l,opacityDisabled:c,actionColor:a,borderColor:n,hoverColor:d,lineHeight:s,borderRadius:u,fontSize:g}=e;return{fontSize:g,lineHeight:s,borderRadius:u,draggerColor:a,draggerBorder:`1px dashed ${n}`,draggerBorderHover:`1px dashed ${o}`,itemColorHover:d,itemColorHoverError:ce(r,{alpha:.06}),itemTextColor:i,itemTextColorError:r,itemTextColorSuccess:l,itemIconColor:t,itemDisabledOpacity:c,itemBorderImageCardError:`1px solid ${r}`,itemBorderImageCard:`1px solid ${n}`}}const Mr=wt({name:"Upload",common:$e,peers:{Button:Vo,Progress:Jt},self:Er});function Fr(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Ur=wt({name:"Image",common:$e,peers:{Tooltip:Yt},self:Fr}),{h:Re}=await L("vue");function Nr(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"}))}function _r(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"}))}function Ar(){return Re("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Re("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"}))}const Pt=Object.assign(Object.assign({},ne.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean,renderToolbar:Function}),Qt=Ct("n-image"),Hr=U([U("body >",[v("image-container","position: fixed;")]),v("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),v("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[vt()]),v("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[v("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),vt()]),v("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[Uo()]),v("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),v("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[mo("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),{computed:Wr,defineComponent:Vr,Fragment:at,h:D,inject:Xr,normalizeStyle:qr,onBeforeUnmount:Gr,ref:Fe,toRef:Zr,toRefs:Yr,Transition:ct,vShow:Kr,watch:Jr,withDirectives:Et}=await L("vue"),Ue=32,Qr=Object.assign(Object.assign({},Pt),{src:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onNext:Function,onPrev:Function,onClose:[Function,Array]}),eo=Vr({name:"ImagePreview",props:Qr,setup(e){const{src:t}=Yr(e),{mergedClsPrefixRef:o}=ue(e),r=ne("Image","-image",Hr,Ur,e,o);let i=null;const l=Fe(null),c=Fe(null),a=Fe(!1),{localeRef:n}=yo("Image"),d=Fe(e.defaultShow),s=Zr(e,"show"),u=qe(s,d);function g(){const{value:p}=c;if(!i||!p)return;const{style:$}=p,w=i.getBoundingClientRect(),N=w.left+w.width/2,_=w.top+w.height/2;$.transformOrigin=`${N}px ${_}px`}function x(p){var $,w;switch(p.key){case" ":p.preventDefault();break;case"ArrowLeft":($=e.onPrev)===null||$===void 0||$.call(e);break;case"ArrowRight":(w=e.onNext)===null||w===void 0||w.call(e);break;case"ArrowUp":p.preventDefault(),Te();break;case"ArrowDown":p.preventDefault(),Ot();break;case"Escape":zt();break}}function h(p){const{onUpdateShow:$,"onUpdate:show":w}=e;$&&de($,p),w&&de(w,p),d.value=p,a.value=!0}Jr(u,p=>{p?Ke("keydown",document,x):Be("keydown",document,x)}),Gr(()=>{Be("keydown",document,x)});let f=0,R=0,y=0,O=0,M=0,z=0,m=0,P=0,T=!1;function k(p){const{clientX:$,clientY:w}=p;y=$-f,O=w-R,Ho(ie)}function S(p){const{mouseUpClientX:$,mouseUpClientY:w,mouseDownClientX:N,mouseDownClientY:_}=p,J=N-$,re=_-w,le=`vertical${re>0?"Top":"Bottom"}`,he=`horizontal${J>0?"Left":"Right"}`;return{moveVerticalDirection:le,moveHorizontalDirection:he,deltaHorizontal:J,deltaVertical:re}}function B(p){const{value:$}=l;if(!$)return{offsetX:0,offsetY:0};const w=$.getBoundingClientRect(),{moveVerticalDirection:N,moveHorizontalDirection:_,deltaHorizontal:J,deltaVertical:re}=p||{};let le=0,he=0;return w.width<=window.innerWidth?le=0:w.left>0?le=(w.width-window.innerWidth)/2:w.right<window.innerWidth?le=-(w.width-window.innerWidth)/2:_==="horizontalRight"?le=Math.min((w.width-window.innerWidth)/2,M-(J??0)):le=Math.max(-((w.width-window.innerWidth)/2),M-(J??0)),w.height<=window.innerHeight?he=0:w.top>0?he=(w.height-window.innerHeight)/2:w.bottom<window.innerHeight?he=-(w.height-window.innerHeight)/2:N==="verticalBottom"?he=Math.min((w.height-window.innerHeight)/2,z-(re??0)):he=Math.max(-((w.height-window.innerHeight)/2),z-(re??0)),{offsetX:le,offsetY:he}}function b(p){Be("mousemove",document,k),Be("mouseup",document,b);const{clientX:$,clientY:w}=p;T=!1;const N=S({mouseUpClientX:$,mouseUpClientY:w,mouseDownClientX:m,mouseDownClientY:P}),_=B(N);y=_.offsetX,O=_.offsetY,ie()}const C=Xr(Qt,null);function F(p){var $,w;if((w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onMousedown)===null||w===void 0||w.call($,p),p.button!==0)return;const{clientX:N,clientY:_}=p;T=!0,f=N-y,R=_-O,M=y,z=O,m=N,P=_,ie(),Ke("mousemove",document,k),Ke("mouseup",document,b)}const Z=1.5;let G=0,j=1,X=0;function H(p){var $,w;(w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onDblclick)===null||w===void 0||w.call($,p);const N=Le();j=j===N?1:N,ie()}function K(){j=1,G=0}function Q(){var p;K(),X=0,(p=e.onPrev)===null||p===void 0||p.call(e)}function se(){var p;K(),X=0,(p=e.onNext)===null||p===void 0||p.call(e)}function Ge(){X-=90,ie()}function Ze(){X+=90,ie()}function Ye(){const{value:p}=l;if(!p)return 1;const{innerWidth:$,innerHeight:w}=window,N=Math.max(1,p.naturalHeight/(w-Ue)),_=Math.max(1,p.naturalWidth/($-Ue));return Math.max(3,N*2,_*2)}function Le(){const{value:p}=l;if(!p)return 1;const{innerWidth:$,innerHeight:w}=window,N=p.naturalHeight/(w-Ue),_=p.naturalWidth/($-Ue);return N<1&&_<1?1:Math.max(N,_)}function Te(){const p=Ye();j<p&&(G+=1,j=Math.min(p,Math.pow(Z,G)),ie())}function Ot(){if(j>.5){const p=j;G-=1,j=Math.max(.5,Math.pow(Z,G));const $=p-j;ie(!1);const w=B();j+=$,ie(!1),j-=$,y=w.offsetX,O=w.offsetY,ie()}}function so(){const p=t.value;p&&kt(p,void 0)}function ie(p=!0){var $;const{value:w}=l;if(!w)return;const{style:N}=w,_=qr(($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.style);let J="";if(typeof _=="string")J=`${_};`;else for(const le in _)J+=`${Wo(le)}: ${_[le]};`;const re=`transform-origin: center; transform: translateX(${y}px) translateY(${O}px) rotate(${X}deg) scale(${j});`;T?N.cssText=`${J}cursor: grabbing; transition: none;${re}`:N.cssText=`${J}cursor: grab;${re}${p?"":"transition: none;"}`,p||w.offsetHeight}function zt(){if(u.value){const{onClose:p}=e;p&&de(p),h(!1),d.value=!1}}function ao(){j=Le(),G=Math.ceil(Math.log(j)/Math.log(Z)),y=0,O=0,ie()}const co={setThumbnailEl:p=>{i=p}};function uo(p,$){if(e.showToolbarTooltip){const{value:w}=r;return D(xr,{to:!1,theme:w.peers.Tooltip,themeOverrides:w.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>n.value[$],trigger:()=>p})}else return p}const It=Wr(()=>{const{common:{cubicBezierEaseInOut:p},self:{toolbarIconColor:$,toolbarBorderRadius:w,toolbarBoxShadow:N,toolbarColor:_}}=r.value;return{"--n-bezier":p,"--n-toolbar-icon-color":$,"--n-toolbar-color":_,"--n-toolbar-border-radius":w,"--n-toolbar-box-shadow":N}}),{inlineThemeDisabled:Lt}=ue(),me=Lt?Ie("image-preview",void 0,It,e):void 0;function fo(p){p.preventDefault()}return Object.assign({clsPrefix:o,previewRef:l,previewWrapperRef:c,previewSrc:t,mergedShow:u,appear:ho(),displayed:a,previewedImgProps:C?.previewedImgPropsRef,handleWheel:fo,handlePreviewMousedown:F,handlePreviewDblclick:H,syncTransformOrigin:g,handleAfterLeave:()=>{K(),X=0,a.value=!1},handleDragStart:p=>{var $,w;(w=($=C?.previewedImgPropsRef.value)===null||$===void 0?void 0:$.onDragstart)===null||w===void 0||w.call($,p),p.preventDefault()},zoomIn:Te,zoomOut:Ot,handleDownloadClick:so,rotateCounterclockwise:Ge,rotateClockwise:Ze,handleSwitchPrev:Q,handleSwitchNext:se,withTooltip:uo,resizeToOrignalImageSize:ao,cssVars:Lt?void 0:It,themeClass:me?.themeClass,onRender:me?.onRender,doUpdateShow:h,close:zt},co)},render(){var e,t;const{clsPrefix:o,renderToolbar:r,withTooltip:i}=this,l=i(D(q,{clsPrefix:o,onClick:this.handleSwitchPrev},{default:Nr}),"tipPrevious"),c=i(D(q,{clsPrefix:o,onClick:this.handleSwitchNext},{default:_r}),"tipNext"),a=i(D(q,{clsPrefix:o,onClick:this.rotateCounterclockwise},{default:()=>D(er,null)}),"tipCounterclockwise"),n=i(D(q,{clsPrefix:o,onClick:this.rotateClockwise},{default:()=>D(Qo,null)}),"tipClockwise"),d=i(D(q,{clsPrefix:o,onClick:this.resizeToOrignalImageSize},{default:()=>D(Ko,null)}),"tipOriginalSize"),s=i(D(q,{clsPrefix:o,onClick:this.zoomOut},{default:()=>D(rr,null)}),"tipZoomOut"),u=i(D(q,{clsPrefix:o,onClick:this.handleDownloadClick},{default:()=>D(Zt,null)}),"tipDownload"),g=i(D(q,{clsPrefix:o,onClick:()=>this.close()},{default:Ar}),"tipClose"),x=i(D(q,{clsPrefix:o,onClick:this.zoomIn},{default:()=>D(or,null)}),"tipZoomIn");return D(at,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),D(To,{show:this.mergedShow},{default:()=>{var h;return this.mergedShow||this.displayed?((h=this.onRender)===null||h===void 0||h.call(this),Et(D("div",{ref:"containerRef",class:[`${o}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},D(ct,{name:"fade-in-transition",appear:this.appear},{default:()=>this.mergedShow?D("div",{class:`${o}-image-preview-overlay`,onClick:()=>this.close()}):null}),this.showToolbar?D(ct,{name:"fade-in-transition",appear:this.appear},{default:()=>this.mergedShow?D("div",{class:`${o}-image-preview-toolbar`},r?r({nodes:{prev:l,next:c,rotateCounterclockwise:a,rotateClockwise:n,resizeToOriginalSize:d,zoomOut:s,zoomIn:x,download:u,close:g}}):D(at,null,this.onPrev?D(at,null,l,c):null,a,n,d,s,x,u,g)):null}):null,D(ct,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:f={}}=this;return Et(D("div",{class:`${o}-image-preview-wrapper`,ref:"previewWrapperRef"},D("img",Object.assign({},f,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${o}-image-preview`,f.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[Kr,this.mergedShow]])}})),[[Bo,{enabled:this.mergedShow}]])):null}}))}}),{computed:we,defineComponent:en,h:tn,provide:on,ref:Ne,toRef:dt}=await L("vue"),to=Ct("n-image-group"),rn=Object.assign(Object.assign({},Pt),{srcList:Array,current:Number,defaultCurrent:{type:Number,default:0},show:{type:Boolean,default:void 0},defaultShow:Boolean,onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],onUpdateCurrent:[Function,Array],"onUpdate:current":[Function,Array]}),nn=en({name:"ImageGroup",props:rn,setup(e){const{mergedClsPrefixRef:t}=ue(e),o=`c${Xe()}`,r=Ne(null),i=Ne(e.defaultShow),l=dt(e,"show"),c=qe(l,i),a=Ne(new Map),n=we(()=>{if(e.srcList){const k=new Map;return e.srcList.forEach((S,B)=>{k.set(`p${B}`,S)}),k}return a.value}),d=we(()=>Array.from(n.value.keys())),s=()=>d.value.length;function u(k,S){e.srcList&&ve("image-group","`n-image` can't be placed inside `n-image-group` when image group's `src-list` prop is set.");const B=`r${k}`;return a.value.has(`r${B}`)||a.value.set(B,S),function(){a.value.has(B)||a.value.delete(B)}}const g=Ne(e.defaultCurrent),x=dt(e,"current"),h=qe(x,g),f=k=>{if(k!==h.value){const{onUpdateCurrent:S,"onUpdate:current":B}=e;S&&de(S,k),B&&de(B,k),g.value=k}},R=we(()=>d.value[h.value]),y=k=>{const S=d.value.indexOf(k);S!==h.value&&f(S)},O=we(()=>n.value.get(R.value));function M(k){const{onUpdateShow:S,"onUpdate:show":B}=e;S&&de(S,k),B&&de(B,k),i.value=k}function z(){M(!1)}const m=we(()=>{const k=(B,b)=>{for(let C=B;C<=b;C++){const F=d.value[C];if(n.value.get(F))return C}},S=k(h.value+1,s()-1);return S===void 0?k(0,h.value-1):S}),P=we(()=>{const k=(B,b)=>{for(let C=B;C>=b;C--){const F=d.value[C];if(n.value.get(F))return C}},S=k(h.value-1,0);return S===void 0?k(s()-1,h.value+1):S});function T(k){var S,B;k===1?(P.value!==void 0&&f(m.value),(S=e.onPreviewNext)===null||S===void 0||S.call(e)):(m.value!==void 0&&f(P.value),(B=e.onPreviewPrev)===null||B===void 0||B.call(e))}return on(to,{mergedClsPrefixRef:t,registerImageUrl:u,setThumbnailEl:k=>{var S;(S=r.value)===null||S===void 0||S.setThumbnailEl(k)},toggleShow:k=>{M(!0),y(k)},groupId:o,renderToolbarRef:dt(e,"renderToolbar")}),{mergedClsPrefix:t,previewInstRef:r,mergedShow:c,src:O,onClose:z,next:()=>{T(1)},prev:()=>{T(-1)}}},render(){return tn(eo,{theme:this.theme,themeOverrides:this.themeOverrides,ref:"previewInstRef",onPrev:this.prev,onNext:this.next,src:this.src,show:this.mergedShow,showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip,renderToolbar:this.renderToolbar,onClose:this.onClose},this.$slots)}}),{computed:ln,defineComponent:sn,h:ut,inject:an,onBeforeUnmount:cn,onMounted:Mt,provide:dn,ref:Ce,toRef:un,watchEffect:ft}=await L("vue"),fn=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},Pt);let hn=0;const gn=sn({name:"Image",props:fn,slots:Object,inheritAttrs:!1,setup(e){const t=Ce(null),o=Ce(!1),r=Ce(null),i=an(to,null),{mergedClsPrefixRef:l}=i||ue(e),c=ln(()=>e.previewSrc||e.src),a=Ce(!1),n=hn++,d=()=>{if(e.previewDisabled||o.value)return;if(i){i.setThumbnailEl(t.value),i.toggleShow(`r${n}`);return}const{value:f}=r;f&&(f.setThumbnailEl(t.value),a.value=!0)},s={click:()=>{d()},showPreview:d},u=Ce(!e.lazy);Mt(()=>{var f;(f=t.value)===null||f===void 0||f.setAttribute("data-group-id",i?.groupId||"")}),Mt(()=>{if(e.lazy&&e.intersectionObserverOptions){let f;const R=ft(()=>{f?.(),f=void 0,f=gr(t.value,e.intersectionObserverOptions,u)});cn(()=>{R(),f?.()})}}),ft(()=>{var f;e.src||((f=e.imgProps)===null||f===void 0||f.src),o.value=!1}),ft(f=>{var R;const y=(R=i?.registerImageUrl)===null||R===void 0?void 0:R.call(i,n,c.value||"");f(()=>{y?.()})});function g(f){var R,y;s.showPreview(),(y=(R=e.imgProps)===null||R===void 0?void 0:R.onClick)===null||y===void 0||y.call(R,f)}function x(){a.value=!1}const h=Ce(!1);return dn(Qt,{previewedImgPropsRef:un(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:l,groupId:i?.groupId,previewInstRef:r,imageRef:t,mergedPreviewSrc:c,showError:o,shouldStartLoading:u,loaded:h,mergedOnClick:f=>{g(f)},onPreviewClose:x,mergedOnError:f=>{if(!u.value)return;o.value=!0;const{onError:R,imgProps:{onError:y}={}}=e;R?.(f),y?.(f)},mergedOnLoad:f=>{const{onLoad:R,imgProps:{onLoad:y}={}}=e;R?.(f),y?.(f),h.value=!0},previewShow:a},s)},render(){var e,t;const{mergedClsPrefix:o,imgProps:r={},loaded:i,$attrs:l,lazy:c}=this,a=bt(this.$slots.error,()=>[]),n=(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e),d=this.src||r.src,s=this.showError&&a.length?a:ut("img",Object.assign(Object.assign({},r),{ref:"imageRef",width:this.width||r.width,height:this.height||r.height,src:this.showError?this.fallbackSrc:c&&this.intersectionObserverOptions?this.shouldStartLoading?d:void 0:d,alt:this.alt||r.alt,"aria-label":this.alt||r.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:fr&&c&&!this.intersectionObserverOptions?"lazy":"eager",style:[r.style||"",n&&!i?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return ut("div",Object.assign({},l,{role:"none",class:[l.class,`${o}-image`,(this.previewDisabled||this.showError)&&`${o}-image--preview-disabled`]}),this.groupId?s:ut(eo,{theme:this.theme,themeOverrides:this.themeOverrides,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip,renderToolbar:this.renderToolbar,src:this.mergedPreviewSrc,show:!this.previewDisabled&&this.previewShow,onClose:this.onPreviewClose},{default:()=>s}),!i&&n)}}),{computed:pn,defineComponent:vn,h:A}=await L("vue"),mn={success:A(St,null),error:A(xt,null),warning:A(Rt,null),info:A($t,null)},bn=vn({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const o=pn(()=>{const l="gradient",{fillColor:c}=e;return typeof c=="object"?`${l}-${bo(JSON.stringify(c))}`:l});function r(l,c,a,n){const{gapDegree:d,viewBoxWidth:s,strokeWidth:u}=e,g=50,x=0,h=g,f=0,R=2*g,y=50+u/2,O=`M ${y},${y} m ${x},${h}
      a ${g},${g} 0 1 1 ${f},-100
      a ${g},${g} 0 1 1 0,${R}`,M=Math.PI*2*g,z={stroke:n==="rail"?a:typeof e.fillColor=="object"?`url(#${o.value})`:a,strokeDasharray:`${l/100*(M-d)}px ${s*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:c?"center":void 0,transform:c?`rotate(${c}deg)`:void 0};return{pathString:O,pathStyle:z}}const i=()=>{const l=typeof e.fillColor=="object",c=l?e.fillColor.stops[0]:"",a=l?e.fillColor.stops[1]:"";return l&&A("defs",null,A("linearGradient",{id:o.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},A("stop",{offset:"0%","stop-color":c}),A("stop",{offset:"100%","stop-color":a})))};return()=>{const{fillColor:l,railColor:c,strokeWidth:a,offsetDegree:n,status:d,percentage:s,showIndicator:u,indicatorTextColor:g,unit:x,gapOffsetDegree:h,clsPrefix:f}=e,{pathString:R,pathStyle:y}=r(100,0,c,"rail"),{pathString:O,pathStyle:M}=r(s,n,l,"fill"),z=100+a;return A("div",{class:`${f}-progress-content`,role:"none"},A("div",{class:`${f}-progress-graph`,"aria-hidden":!0},A("div",{class:`${f}-progress-graph-circle`,style:{transform:h?`rotate(${h}deg)`:void 0}},A("svg",{viewBox:`0 0 ${z} ${z}`},i(),A("g",null,A("path",{class:`${f}-progress-graph-circle-rail`,d:R,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:y})),A("g",null,A("path",{class:[`${f}-progress-graph-circle-fill`,s===0&&`${f}-progress-graph-circle-fill--empty`],d:O,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:M}))))),u?A("div",null,t.default?A("div",{class:`${f}-progress-custom-content`,role:"none"},t.default()):d!=="default"?A("div",{class:`${f}-progress-icon`,"aria-hidden":!0},A(q,{clsPrefix:f},{default:()=>mn[d]})):A("div",{class:`${f}-progress-text`,style:{color:g},role:"none"},A("span",{class:`${f}-progress-text__percentage`},s),A("span",{class:`${f}-progress-text__unit`},x))):null)}}}),{computed:_e,defineComponent:wn,h:Y}=await L("vue"),Cn={success:Y(St,null),error:Y(xt,null),warning:Y(Rt,null),info:Y($t,null)},yn=wn({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const o=_e(()=>be(e.height)),r=_e(()=>{var c,a;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(c=e.fillColor)===null||c===void 0?void 0:c.stops[0]} , ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[1]})`:e.fillColor}),i=_e(()=>e.railBorderRadius!==void 0?be(e.railBorderRadius):e.height!==void 0?be(e.height,{c:.5}):""),l=_e(()=>e.fillBorderRadius!==void 0?be(e.fillBorderRadius):e.railBorderRadius!==void 0?be(e.railBorderRadius):e.height!==void 0?be(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:c,railColor:a,railStyle:n,percentage:d,unit:s,indicatorTextColor:u,status:g,showIndicator:x,processing:h,clsPrefix:f}=e;return Y("div",{class:`${f}-progress-content`,role:"none"},Y("div",{class:`${f}-progress-graph`,"aria-hidden":!0},Y("div",{class:[`${f}-progress-graph-line`,{[`${f}-progress-graph-line--indicator-${c}`]:!0}]},Y("div",{class:`${f}-progress-graph-line-rail`,style:[{backgroundColor:a,height:o.value,borderRadius:i.value},n]},Y("div",{class:[`${f}-progress-graph-line-fill`,h&&`${f}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:r.value,height:o.value,lineHeight:o.value,borderRadius:l.value}},c==="inside"?Y("div",{class:`${f}-progress-graph-line-indicator`,style:{color:u}},t.default?t.default():`${d}${s}`):null)))),x&&c==="outside"?Y("div",null,t.default?Y("div",{class:`${f}-progress-custom-content`,style:{color:u},role:"none"},t.default()):g==="default"?Y("div",{role:"none",class:`${f}-progress-icon ${f}-progress-icon--as-text`,style:{color:u}},d,s):Y("div",{class:`${f}-progress-icon`,"aria-hidden":!0},Y(q,{clsPrefix:f},{default:()=>Cn[g]}))):null)}}}),{computed:xn,defineComponent:Rn,h:te}=await L("vue");function Ft(e,t,o=100){return`m ${o/2} ${o/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const $n=Rn({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const o=xn(()=>e.percentage.map((l,c)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*c)-e.circleGap*c)*2}, ${e.viewBoxWidth*8}`)),r=(i,l)=>{const c=e.fillColor[l],a=typeof c=="object"?c.stops[0]:"",n=typeof c=="object"?c.stops[1]:"";return typeof e.fillColor[l]=="object"&&te("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},te("stop",{offset:"0%","stop-color":a}),te("stop",{offset:"100%","stop-color":n}))};return()=>{const{viewBoxWidth:i,strokeWidth:l,circleGap:c,showIndicator:a,fillColor:n,railColor:d,railStyle:s,percentage:u,clsPrefix:g}=e;return te("div",{class:`${g}-progress-content`,role:"none"},te("div",{class:`${g}-progress-graph`,"aria-hidden":!0},te("div",{class:`${g}-progress-graph-circle`},te("svg",{viewBox:`0 0 ${i} ${i}`},te("defs",null,u.map((x,h)=>r(x,h))),u.map((x,h)=>te("g",{key:h},te("path",{class:`${g}-progress-graph-circle-rail`,d:Ft(i/2-l/2*(1+2*h)-c*h,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[h]},s[h]]}),te("path",{class:[`${g}-progress-graph-circle-fill`,x===0&&`${g}-progress-graph-circle-fill--empty`],d:Ft(i/2-l/2*(1+2*h)-c*h,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:o.value[h],strokeDashoffset:0,stroke:typeof n[h]=="object"?`url(#gradient-${h})`:n[h]}})))))),a&&t.default?te("div",null,te("div",{class:`${g}-progress-text`},t.default())):null)}}}),Sn=U([v("progress",{display:"inline-block"},[v("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),E("line",`
 width: 100%;
 display: block;
 `,[v("progress-content",`
 display: flex;
 align-items: center;
 `,[v("progress-graph",{flex:1})]),v("progress-custom-content",{marginLeft:"14px"}),v("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[E("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),E("circle, dashboard",{width:"120px"},[v("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),v("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),v("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),E("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[v("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),v("progress-content",{position:"relative"}),v("progress-graph",{position:"relative"},[v("progress-graph-circle",[U("svg",{verticalAlign:"bottom"}),v("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[E("empty",{opacity:0})]),v("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),v("progress-graph-line",[E("indicator-inside",[v("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[v("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),v("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),E("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[v("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),v("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),v("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[v("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[E("processing",[U("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),U("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),{computed:Ae,defineComponent:kn,h:He}=await L("vue"),Pn=Object.assign(Object.assign({},ne.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),On=kn({name:"Progress",props:Pn,setup(e){const t=Ae(()=>e.indicatorPlacement||e.indicatorPosition),o=Ae(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=ue(e),l=ne("Progress","-progress",Sn,Jt,e,r),c=Ae(()=>{const{status:n}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:s,fontSizeCircle:u,railColor:g,railHeight:x,iconSizeCircle:h,iconSizeLine:f,textColorCircle:R,textColorLineInner:y,textColorLineOuter:O,lineBgProcessing:M,fontWeightCircle:z,[oe("iconColor",n)]:m,[oe("fillColor",n)]:P}}=l.value;return{"--n-bezier":d,"--n-fill-color":P,"--n-font-size":s,"--n-font-size-circle":u,"--n-font-weight-circle":z,"--n-icon-color":m,"--n-icon-size-circle":h,"--n-icon-size-line":f,"--n-line-bg-processing":M,"--n-rail-color":g,"--n-rail-height":x,"--n-text-color-circle":R,"--n-text-color-line-inner":y,"--n-text-color-line-outer":O}}),a=i?Ie("progress",Ae(()=>e.status[0]),c,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:o,cssVars:i?void 0:c,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:o,showIndicator:r,status:i,railColor:l,railStyle:c,color:a,percentage:n,viewBoxWidth:d,strokeWidth:s,mergedIndicatorPlacement:u,unit:g,borderRadius:x,fillBorderRadius:h,height:f,processing:R,circleGap:y,mergedClsPrefix:O,gapDeg:M,gapOffsetDegree:z,themeClass:m,$slots:P,onRender:T}=this;return T?.(),He("div",{class:[m,`${O}-progress`,`${O}-progress--${e}`,`${O}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":n,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?He(bn,{clsPrefix:O,status:i,showIndicator:r,indicatorTextColor:o,railColor:l,fillColor:a,railStyle:c,offsetDegree:this.offsetDegree,percentage:n,viewBoxWidth:d,strokeWidth:s,gapDegree:M===void 0?e==="dashboard"?75:0:M,gapOffsetDegree:z,unit:g},P):e==="line"?He(yn,{clsPrefix:O,status:i,showIndicator:r,indicatorTextColor:o,railColor:l,fillColor:a,railStyle:c,percentage:n,processing:R,indicatorPlacement:u,unit:g,fillBorderRadius:h,railBorderRadius:x,height:f},P):e==="multiple-circle"?He($n,{clsPrefix:O,strokeWidth:s,railColor:l,fillColor:a,railStyle:c,viewBoxWidth:d,percentage:n,showIndicator:r,circleGap:y},P):null)}}),zn=U([U("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),v("spin-container",`
 position: relative;
 `,[v("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[vt()])]),v("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),v("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[E("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),v("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),v("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[E("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),{computed:ht,defineComponent:In,h:ge,ref:Ln,Transition:Tn,watchEffect:Bn}=await L("vue"),jn={small:20,medium:18,large:16},Dn=Object.assign(Object.assign({},ne.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Gi=In({name:"Spin",props:Dn,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ue(e),r=ne("Spin","-spin",zn,Dr,e,t),i=ht(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:d},self:s}=r.value,{opacitySpinning:u,color:g,textColor:x}=s,h=typeof n=="number"?Ro(n):s[oe("size",n)];return{"--n-bezier":d,"--n-opacity-spinning":u,"--n-size":h,"--n-color":g,"--n-text-color":x}}),l=o?Ie("spin",ht(()=>{const{size:n}=e;return typeof n=="number"?String(n):n[0]}),i,e):void 0,c=Fo(e,["spinning","show"]),a=Ln(!1);return Bn(n=>{let d;if(c.value){const{delay:s}=e;if(s){d=window.setTimeout(()=>{a.value=!0},s),n(()=>{clearTimeout(d)});return}}a.value=c.value}),{mergedClsPrefix:t,active:a,mergedStrokeWidth:ht(()=>{const{strokeWidth:n}=e;if(n!==void 0)return n;const{size:d}=e;return jn[typeof d=="number"?"medium":d]}),cssVars:o?void 0:i,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e,t;const{$slots:o,mergedClsPrefix:r,description:i}=this,l=o.icon&&this.rotate,c=(i||o.description)&&ge("div",{class:`${r}-spin-description`},i||((e=o.description)===null||e===void 0?void 0:e.call(o))),a=o.icon?ge("div",{class:[`${r}-spin-body`,this.themeClass]},ge("div",{class:[`${r}-spin`,l&&`${r}-spin--rotate`],style:o.default?"":this.cssVars},o.icon()),c):ge("div",{class:[`${r}-spin-body`,this.themeClass]},ge(jo,{clsPrefix:r,style:o.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),c);return(t=this.onRender)===null||t===void 0||t.call(this),o.default?ge("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},ge("div",{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},o),ge(Tn,{name:"fade-in-transition"},{default:()=>this.active?a:null})):a}}),Se=Ct("n-upload"),En=U([v("upload","width: 100%;",[E("dragger-inside",[v("upload-trigger",`
 display: block;
 `)]),E("drag-over",[v("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),v("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[U("&:hover",`
 border: var(--n-dragger-border-hover);
 `),E("disabled",`
 cursor: not-allowed;
 `)]),v("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("+",[v("upload-file-list","margin-top: 8px;")]),E("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),E("image-card",`
 width: 96px;
 height: 96px;
 `,[v("base-icon",`
 font-size: 24px;
 `),v("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),v("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("a, img","outline: none;"),E("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[v("upload-file","cursor: not-allowed;")]),E("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),v("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[pt(),v("progress",[pt({foldPadding:!0})]),U("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[v("upload-file-info",[V("action",`
 opacity: 1;
 `)])]),E("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[v("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[v("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),V("name",`
 padding: 0 8px;
 `),V("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[U("img",`
 width: 100%;
 `)])])]),E("text-type",[v("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),E("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[v("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),v("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[V("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[U("img",`
 width: 100%;
 `)])]),U("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),U("&:hover",[U("&::before","opacity: 1;"),v("upload-file-info",[V("thumbnail","opacity: .12;")])])]),E("error-status",[U("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),v("upload-file-info",[V("name","color: var(--n-item-text-color-error);"),V("thumbnail","color: var(--n-item-text-color-error);")]),E("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),E("with-url",`
 cursor: pointer;
 `,[v("upload-file-info",[V("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[U("a",`
 text-decoration: underline;
 `)])])]),v("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[V("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[v("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),V("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[v("button",[U("&:not(:last-child)",{marginRight:"4px"}),v("base-icon",[U("svg",[Do()])])]),E("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),E("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),V("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[U("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),v("upload-file-input",`
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]),{defineComponent:Mn,h:Fn,inject:Un}=await L("vue"),oo="__UPLOAD_DRAGGER__",Nn=Mn({name:"UploadDragger",[oo]:!0,setup(e,{slots:t}){const o=Un(Se,null);return o||ve("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:r},mergedDisabledRef:{value:i},maxReachedRef:{value:l}}=o;return Fn("div",{class:[`${r}-upload-dragger`,(i||l)&&`${r}-upload-dragger--disabled`]},t)}}}),{h:xe}=await L("vue");function _n(){return xe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},xe("g",{fill:"none"},xe("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"})))}function An(){return xe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},xe("g",{fill:"none"},xe("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})))}const{defineComponent:Hn,h:Ut,inject:Wn}=await L("vue"),Vn=Hn({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:Wn(Se).mergedThemeRef}},render(){return Ut(yt,null,{default:()=>this.show?Ut(On,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}});var mt=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function a(s){try{d(r.next(s))}catch(u){c(u)}}function n(s){try{d(r.throw(s))}catch(u){c(u)}}function d(s){s.done?l(s.value):i(s.value).then(a,n)}d((r=r.apply(e,t||[])).next())})};function ro(e){return e.includes("image/")}function Nt(e=""){const t=e.split("/"),r=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(r)||[""])[0]}const _t=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,no=e=>{if(e.type)return ro(e.type);const t=Nt(e.name||"");if(_t.test(t))return!0;const o=e.thumbnailUrl||e.url||"",r=Nt(o);return!!(/^data:image\//.test(o)||_t.test(r))};function Xn(e){return mt(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!ro(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const qn=Gt&&window.FileReader&&window.File;function Gn(e){return e.isDirectory}function Zn(e){return e.isFile}function Yn(e,t){return mt(this,void 0,void 0,function*(){const o=[];function r(i){return mt(this,void 0,void 0,function*(){for(const l of i)if(l){if(t&&Gn(l)){const c=l.createReader();let a=[],n;try{do n=yield new Promise((d,s)=>{c.readEntries(d,s)}),a=a.concat(n);while(n.length>0)}catch(d){Tt("upload","error happens when handling directory upload",d)}yield r(a)}else if(Zn(l))try{const c=yield new Promise((a,n)=>{l.file(a,n)});o.push({file:c,entry:l,source:"dnd"})}catch(c){Tt("upload","error happens when handling file upload",c)}}})}return yield r(e),o})}function ze(e){const{id:t,name:o,percentage:r,status:i,url:l,file:c,thumbnailUrl:a,type:n,fullPath:d,batchId:s}=e;return{id:t,name:o,percentage:r??null,status:i,url:l??null,file:c??null,thumbnailUrl:a??null,type:n??null,fullPath:d??null,batchId:s??null}}function Kn(e,t,o){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),o=o.toLocaleLowerCase(),o.split(",").map(i=>i.trim()).filter(Boolean).some(i=>{if(i.startsWith(".")){if(e.endsWith(i))return!0}else if(i.includes("/")){const[l,c]=t.split("/"),[a,n]=i.split("/");if((a==="*"||l&&a&&a===l)&&(n==="*"||c&&n&&n===c))return!0}else return!0;return!1})}var At=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function a(s){try{d(r.next(s))}catch(u){c(u)}}function n(s){try{d(r.throw(s))}catch(u){c(u)}}function d(s){s.done?l(s.value):i(s.value).then(a,n)}d((r=r.apply(e,t||[])).next())})};const{computed:pe,defineComponent:Jn,h:I,inject:Qn,ref:Ht,watchEffect:ei}=await L("vue"),We={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},ti=Jn({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){const t=Qn(Se),o=Ht(null),r=Ht(""),i=pe(()=>{const{file:m}=e;return m.status==="finished"?"success":m.status==="error"?"error":"info"}),l=pe(()=>{const{file:m}=e;if(m.status==="error")return"error"}),c=pe(()=>{const{file:m}=e;return m.status==="uploading"}),a=pe(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:m}=e;return["uploading","pending","error"].includes(m.status)}),n=pe(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:m}=e;return["finished"].includes(m.status)}),d=pe(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:m}=e;return["finished"].includes(m.status)}),s=pe(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:m}=e;return["error"].includes(m.status)}),u=go(()=>r.value||e.file.thumbnailUrl||e.file.url),g=pe(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:m},listType:P}=e;return["finished"].includes(m)&&u.value&&P==="image-card"});function x(){return At(this,void 0,void 0,function*(){const m=t.onRetryRef.value;m&&(yield m({file:e.file}))===!1||t.submit(e.file.id)})}function h(m){m.preventDefault();const{file:P}=e;["finished","pending","error"].includes(P.status)?R(P):["uploading"].includes(P.status)?O(P):wo("upload","The button clicked type is unknown.")}function f(m){m.preventDefault(),y(e.file)}function R(m){const{xhrMap:P,doChange:T,onRemoveRef:{value:k},mergedFileListRef:{value:S}}=t;Promise.resolve(k?k({file:Object.assign({},m),fileList:S,index:e.index}):!0).then(B=>{if(B===!1)return;const b=Object.assign({},m,{status:"removed"});P.delete(m.id),T(b,void 0,{remove:!0})})}function y(m){const{onDownloadRef:{value:P},customDownloadRef:{value:T}}=t;Promise.resolve(P?P(Object.assign({},m)):!0).then(k=>{k!==!1&&(T?T(Object.assign({},m)):kt(m.url,m.name))})}function O(m){const{xhrMap:P}=t,T=P.get(m.id);T?.abort(),R(Object.assign({},m))}function M(m){const{onPreviewRef:{value:P}}=t;if(P)P(e.file,{event:m});else if(e.listType==="image-card"){const{value:T}=o;if(!T)return;T.showPreview()}}const z=()=>At(this,void 0,void 0,function*(){const{listType:m}=e;m!=="image"&&m!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(r.value=yield t.getFileThumbnailUrlResolver(e.file))});return ei(()=>{z()}),{mergedTheme:t.mergedThemeRef,progressStatus:i,buttonType:l,showProgress:c,disabled:t.mergedDisabledRef,showCancelButton:a,showRemoveButton:n,showDownloadButton:d,showRetryButton:s,showPreviewButton:g,mergedThumbnailUrl:u,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:o,handleRemoveOrCancelClick:h,handleDownloadClick:f,handleRetryClick:x,handlePreviewClick:M}},render(){const{clsPrefix:e,mergedTheme:t,listType:o,file:r,renderIcon:i}=this;let l;const c=o==="image";c||o==="image-card"?l=!this.shouldUseThumbnailUrl(r)||!this.mergedThumbnailUrl?I("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):no(r)?I(q,{clsPrefix:e},{default:_n}):I(q,{clsPrefix:e},{default:An})):I("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},o==="image-card"?I(gn,{src:this.mergedThumbnailUrl||void 0,previewSrc:r.url||void 0,alt:r.name,ref:"imageRef"}):I("img",{src:this.mergedThumbnailUrl||void 0,alt:r.name})):l=I("span",{class:`${e}-upload-file-info__thumbnail`},i?i(r):I(q,{clsPrefix:e},{default:()=>I(Go,null)}));const n=I(Vn,{show:this.showProgress,percentage:r.percentage||0,status:this.progressStatus}),d=o==="text"||o==="image";return I("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,r.url&&r.status!=="error"&&o!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${o}-type`]},I("div",{class:`${e}-upload-file-info`},l,I("div",{class:`${e}-upload-file-info__name`},d&&(r.url&&r.status!=="error"?I("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,onClick:this.handlePreviewClick},r.name):I("span",{onClick:this.handlePreviewClick},r.name)),c&&n),I("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${o}-type`]},this.showPreviewButton?I(je,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>I(q,{clsPrefix:e},{default:()=>I(Xo,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&I(je,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:We,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>I(Eo,null,{default:()=>this.showRemoveButton?I(q,{clsPrefix:e,key:"trash"},{default:()=>I(tr,null)}):I(q,{clsPrefix:e,key:"cancel"},{default:()=>I(Zo,null)})})}),this.showRetryButton&&!this.disabled&&I(je,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>I(q,{clsPrefix:e},{default:()=>I(Jo,null)})}),this.showDownloadButton?I(je,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:We},{icon:()=>I(q,{clsPrefix:e},{default:()=>I(Zt,null)})}):null)),!c&&n)}}),{computed:oi,defineComponent:ri,h:Ve,inject:ni}=await L("vue"),io=ri({name:"UploadTrigger",props:{abstract:Boolean},slots:Object,setup(e,{slots:t}){const o=ni(Se,null);o||ve("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:r,mergedDisabledRef:i,maxReachedRef:l,listTypeRef:c,dragOverRef:a,openOpenFileDialog:n,draggerInsideRef:d,handleFileAddition:s,mergedDirectoryDndRef:u,triggerClassRef:g,triggerStyleRef:x}=o,h=oi(()=>c.value==="image-card");function f(){i.value||l.value||n()}function R(z){z.preventDefault(),a.value=!0}function y(z){z.preventDefault(),a.value=!0}function O(z){z.preventDefault(),a.value=!1}function M(z){var m;if(z.preventDefault(),!d.value||i.value||l.value){a.value=!1;return}const P=(m=z.dataTransfer)===null||m===void 0?void 0:m.items;P?.length?Yn(Array.from(P).map(T=>T.webkitGetAsEntry()),u.value).then(T=>{s(T)}).finally(()=>{a.value=!1}):a.value=!1}return()=>{var z;const{value:m}=r;return e.abstract?(z=t.default)===null||z===void 0?void 0:z.call(t,{handleClick:f,handleDrop:M,handleDragOver:R,handleDragEnter:y,handleDragLeave:O}):Ve("div",{class:[`${m}-upload-trigger`,(i.value||l.value)&&`${m}-upload-trigger--disabled`,h.value&&`${m}-upload-trigger--image-card`,g.value],style:x.value,onClick:f,onDrop:M,onDragover:R,onDragenter:y,onDragleave:O},h.value?Ve(Nn,null,{default:()=>bt(t.default,()=>[Ve(q,{clsPrefix:m},{default:()=>Ve(qo,null)})])}):t)}}}),{computed:ii,defineComponent:li,h:Pe,inject:si}=await L("vue"),ai=li({name:"UploadFileList",setup(e,{slots:t}){const o=si(Se,null);o||ve("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:r,mergedClsPrefixRef:i,listTypeRef:l,mergedFileListRef:c,fileListClassRef:a,fileListStyleRef:n,cssVarsRef:d,themeClassRef:s,maxReachedRef:u,showTriggerRef:g,imageGroupPropsRef:x}=o,h=ii(()=>l.value==="image-card"),f=()=>c.value.map((y,O)=>Pe(ti,{clsPrefix:i.value,key:y.id,file:y,index:O,listType:l.value})),R=()=>h.value?Pe(nn,Object.assign({},x.value),{default:f}):Pe(yt,{group:!0},{default:f});return()=>{const{value:y}=i,{value:O}=r;return Pe("div",{class:[`${y}-upload-file-list`,h.value&&`${y}-upload-file-list--grid`,O?s?.value:void 0,a.value],style:[O&&d?d.value:"",n.value]},R(),g.value&&!u.value&&h.value&&Pe(io,null,t))}}});var Wt=function(e,t,o,r){function i(l){return l instanceof o?l:new o(function(c){c(l)})}return new(o||(o=Promise))(function(l,c){function a(s){try{d(r.next(s))}catch(u){c(u)}}function n(s){try{d(r.throw(s))}catch(u){c(u)}}function d(s){s.done?l(s.value):i(s.value).then(a,n)}d((r=r.apply(e,t||[])).next())})};const{computed:Oe,defineComponent:ci,Fragment:di,h:ye,nextTick:ui,provide:fi,ref:gt,Teleport:hi,toRef:W}=await L("vue");function gi(e,t,o){const{doChange:r,xhrMap:i}=e;let l=0;function c(n){var d;let s=Object.assign({},t,{status:"error",percentage:l});i.delete(t.id),s=ze(((d=e.onError)===null||d===void 0?void 0:d.call(e,{file:s,event:n}))||s),r(s,n)}function a(n){var d;if(e.isErrorState){if(e.isErrorState(o)){c(n);return}}else if(o.status<200||o.status>=300){c(n);return}let s=Object.assign({},t,{status:"finished",percentage:l});i.delete(t.id),s=ze(((d=e.onFinish)===null||d===void 0?void 0:d.call(e,{file:s,event:n}))||s),r(s,n)}return{handleXHRLoad:a,handleXHRError:c,handleXHRAbort(n){const d=Object.assign({},t,{status:"removed",file:null,percentage:l});i.delete(t.id),r(d,n)},handleXHRProgress(n){const d=Object.assign({},t,{status:"uploading"});if(n.lengthComputable){const s=Math.ceil(n.loaded/n.total*100);d.percentage=s,l=s}r(d,n)}}}function pi(e){const{inst:t,file:o,data:r,headers:i,withCredentials:l,action:c,customRequest:a}=e,{doChange:n}=e.inst;let d=0;a({file:o,data:r,headers:i,withCredentials:l,action:c,onProgress(s){const u=Object.assign({},o,{status:"uploading"}),g=s.percent;u.percentage=g,d=g,n(u)},onFinish(){var s;let u=Object.assign({},o,{status:"finished",percentage:d});u=ze(((s=t.onFinish)===null||s===void 0?void 0:s.call(t,{file:u}))||u),n(u)},onError(){var s;let u=Object.assign({},o,{status:"error",percentage:d});u=ze(((s=t.onError)===null||s===void 0?void 0:s.call(t,{file:u}))||u),n(u)}})}function vi(e,t,o){const r=gi(e,t,o);o.onabort=r.handleXHRAbort,o.onerror=r.handleXHRError,o.onload=r.handleXHRLoad,o.upload&&(o.upload.onprogress=r.handleXHRProgress)}function lo(e,t){return typeof e=="function"?e({file:t}):e||{}}function mi(e,t,o){const r=lo(t,o);r&&Object.keys(r).forEach(i=>{e.setRequestHeader(i,r[i])})}function bi(e,t,o){const r=lo(t,o);r&&Object.keys(r).forEach(i=>{e.append(i,r[i])})}function wi(e,t,o,{method:r,action:i,withCredentials:l,responseType:c,headers:a,data:n}){const d=new XMLHttpRequest;d.responseType=c,e.xhrMap.set(o.id,d),d.withCredentials=l;const s=new FormData;if(bi(s,n,o),o.file!==null&&s.append(t,o.file),vi(e,o,d),i!==void 0){d.open(r.toUpperCase(),i),mi(d,a,o),d.send(s);const u=Object.assign({},o,{status:"uploading"});e.doChange(u)}}const Ci=Object.assign(Object.assign({},ne.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onRetry:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,customDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListClass:String,fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>qn?no(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerClass:String,triggerStyle:[String,Object],renderIcon:Function}),Zi=ci({name:"Upload",props:Ci,setup(e){e.abstract&&e.listType==="image-card"&&ve("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=ue(e),i=ne("Upload","-upload",En,Mr,e,t),l=Vt("Upload",r,t),c=Mo(e),a=gt(e.defaultFileList),n=W(e,"fileList"),d=gt(null),s={value:!1},u=gt(!1),g=new Map,x=qe(n,a),h=Oe(()=>x.value.map(ze)),f=Oe(()=>{const{max:b}=e;return b!==void 0?h.value.length>=b:!1});function R(){var b;(b=d.value)===null||b===void 0||b.click()}function y(b){const C=b.target;m(C.files?Array.from(C.files).map(F=>({file:F,entry:null,source:"input"})):null,b),C.value=""}function O(b){const{"onUpdate:fileList":C,onUpdateFileList:F}=e;C&&de(C,b),F&&de(F,b),a.value=b}const M=Oe(()=>e.multiple||e.directory),z=(b,C,F={append:!1,remove:!1})=>{const{append:Z,remove:G}=F,j=Array.from(h.value),X=j.findIndex(H=>H.id===b.id);if(Z||G||~X){Z?j.push(b):G?j.splice(X,1):j.splice(X,1,b);const{onChange:H}=e;H&&H({file:b,fileList:j,event:C}),O(j)}};function m(b,C){if(!b||b.length===0)return;const{onBeforeUpload:F}=e;b=M.value?b:[b[0]];const{max:Z,accept:G}=e;b=b.filter(({file:X,source:H})=>H==="dnd"&&G?.trim()?Kn(X.name,X.type,G):!0),Z&&(b=b.slice(0,Z-h.value.length));const j=Xe();Promise.all(b.map(X=>Wt(this,[X],void 0,function*({file:H,entry:K}){var Q;const se={id:Xe(),batchId:j,name:H.name,status:"pending",percentage:0,file:H,url:null,type:H.type,thumbnailUrl:null,fullPath:(Q=K?.fullPath)!==null&&Q!==void 0?Q:`/${H.webkitRelativePath||H.name}`};return!F||(yield F({file:se,fileList:h.value}))!==!1?se:null}))).then(X=>Wt(this,void 0,void 0,function*(){let H=Promise.resolve();X.forEach(K=>{H=H.then(ui).then(()=>{K&&z(K,C,{append:!0})})}),yield H})).then(()=>{e.defaultUpload&&P()})}function P(b){const{method:C,action:F,withCredentials:Z,headers:G,data:j,name:X}=e,H=b!==void 0?h.value.filter(Q=>Q.id===b):h.value,K=b!==void 0;H.forEach(Q=>{const{status:se}=Q;(se==="pending"||se==="error"&&K)&&(e.customRequest?pi({inst:{doChange:z,xhrMap:g,onFinish:e.onFinish,onError:e.onError},file:Q,action:F,withCredentials:Z,headers:G,data:j,customRequest:e.customRequest}):wi({doChange:z,xhrMap:g,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},X,Q,{method:C,action:F,withCredentials:Z,responseType:e.responseType,headers:G,data:j}))})}function T(b){var C;if(b.thumbnailUrl)return b.thumbnailUrl;const{createThumbnailUrl:F}=e;return F?(C=F(b.file,b))!==null&&C!==void 0?C:b.url||"":b.url?b.url:b.file?Xn(b.file):""}const k=Oe(()=>{const{common:{cubicBezierEaseInOut:b},self:{draggerColor:C,draggerBorder:F,draggerBorderHover:Z,itemColorHover:G,itemColorHoverError:j,itemTextColorError:X,itemTextColorSuccess:H,itemTextColor:K,itemIconColor:Q,itemDisabledOpacity:se,lineHeight:Ge,borderRadius:Ze,fontSize:Ye,itemBorderImageCardError:Le,itemBorderImageCard:Te}}=i.value;return{"--n-bezier":b,"--n-border-radius":Ze,"--n-dragger-border":F,"--n-dragger-border-hover":Z,"--n-dragger-color":C,"--n-font-size":Ye,"--n-item-color-hover":G,"--n-item-color-hover-error":j,"--n-item-disabled-opacity":se,"--n-item-icon-color":Q,"--n-item-text-color":K,"--n-item-text-color-error":X,"--n-item-text-color-success":H,"--n-line-height":Ge,"--n-item-border-image-card-error":Le,"--n-item-border-image-card":Te}}),S=o?Ie("upload",void 0,k,e):void 0;fi(Se,{mergedClsPrefixRef:t,mergedThemeRef:i,showCancelButtonRef:W(e,"showCancelButton"),showDownloadButtonRef:W(e,"showDownloadButton"),showRemoveButtonRef:W(e,"showRemoveButton"),showRetryButtonRef:W(e,"showRetryButton"),onRemoveRef:W(e,"onRemove"),onDownloadRef:W(e,"onDownload"),customDownloadRef:W(e,"customDownload"),mergedFileListRef:h,triggerClassRef:W(e,"triggerClass"),triggerStyleRef:W(e,"triggerStyle"),shouldUseThumbnailUrlRef:W(e,"shouldUseThumbnailUrl"),renderIconRef:W(e,"renderIcon"),xhrMap:g,submit:P,doChange:z,showPreviewButtonRef:W(e,"showPreviewButton"),onPreviewRef:W(e,"onPreview"),getFileThumbnailUrlResolver:T,listTypeRef:W(e,"listType"),dragOverRef:u,openOpenFileDialog:R,draggerInsideRef:s,handleFileAddition:m,mergedDisabledRef:c.mergedDisabledRef,maxReachedRef:f,fileListClassRef:W(e,"fileListClass"),fileListStyleRef:W(e,"fileListStyle"),abstractRef:W(e,"abstract"),acceptRef:W(e,"accept"),cssVarsRef:o?void 0:k,themeClassRef:S?.themeClass,onRender:S?.onRender,showTriggerRef:W(e,"showTrigger"),imageGroupPropsRef:W(e,"imageGroupProps"),mergedDirectoryDndRef:Oe(()=>{var b;return(b=e.directoryDnd)!==null&&b!==void 0?b:e.directory}),onRetryRef:W(e,"onRetry")});const B={clear:()=>{a.value=[]},submit:P,openOpenFileDialog:R};return Object.assign({mergedClsPrefix:t,draggerInsideRef:s,rtlEnabled:l,inputElRef:d,mergedTheme:i,dragOver:u,mergedMultiple:M,cssVars:o?void 0:k,themeClass:S?.themeClass,onRender:S?.onRender,handleFileInputChange:y},B)},render(){var e,t;const{draggerInsideRef:o,mergedClsPrefix:r,$slots:i,directory:l,onRender:c}=this;if(i.default&&!this.abstract){const n=i.default()[0];!((e=n?.type)===null||e===void 0)&&e[oo]&&(o.value=!0)}const a=ye("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${r}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:l||void 0,directory:l||void 0}));return this.abstract?ye(di,null,(t=i.default)===null||t===void 0?void 0:t.call(i),ye(hi,{to:"body"},a)):(c?.(),ye("div",{class:[`${r}-upload`,this.rtlEnabled&&`${r}-upload--rtl`,o.value&&`${r}-upload--dragger-inside`,this.dragOver&&`${r}-upload--drag-over`,this.themeClass],style:this.cssVars},a,this.showTrigger&&this.listType!=="image-card"&&ye(io,null,i),this.showFileList&&ye(ai,null,i)))}});export{Wi as NAlert,qi as NDialogProvider,gn as NImage,nn as NImageGroup,eo as NImagePreview,On as NProgress,Gi as NSpin,xr as NTooltip,Zi as NUpload,Nn as NUploadDragger,ai as NUploadFileList,io as NUploadTrigger,ur as alertProps,nr as commonVars,pr as commonVars$1,Tr as dialogProviderProps,kt as download,rn as imageGroupProps,Qr as imagePreviewProps,fn as imageProps,fr as isImageSupportNativeLazy,gr as observeIntersection,Pn as progressProps,Ai as publicDownload,Br as self,jr as self$1,Er as self$2,Dn as spinProps,Yt as tooltipLight,yr as tooltipProps,Ci as uploadProps,Vi as useDialog,Xi as useDialogReactiveList};
