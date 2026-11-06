import{importShared as ue}from"./3d-tiles-renderer.DcET3QoP1793933382902.js";import{fadeInScaleUpTransition as xt}from"./Card.Djay_3lm1793933382902.js";import{useSsrAdapter as bn,cB as C,cE as F,c as le,useConfig as it,useTheme as Te,createKey as fe,useThemeClass as Qe,cM as W,cNotM as ft,resolveWrappedSlot as Le,resolveSlot as mn,call as ce,derived as pn,changeColor as oo,insideModal as io,insidePopover as ro,isSlotEmpty as zt}from"./light.DuSxoRPo1793933382902.js";import{c as yt,cssrAnchorMetaName as wn,beforeNextFrameOnce as lo,internalSelectionMenuInjectionKey as Ut,internalSelectionMenuBodyInjectionKey as ao,NPopover as so,Binder as yn,VTarget as xn,VFollower as Cn,useAdjustedTo as ot,useCompitable as co}from"./Popover.CLMMxNNP1793933382902.js";import{VResizeObserver as Xt,depx as ke,pxfy as Ue,resizeObserverManager as $t,Scrollbar as uo,getMargin as dt,Wrapper as fo,getPreciseEventTarget as ho}from"./Scrollbar.DMtfl89p1793933382902.js";import{useLocale as Sn,render as nt,NBaseSuffix as vo}from"./light.DdQWvR4Y1793933382902.js";import{NTag as Ot}from"./FormItem.DYKD1P6A1793933382902.js";import{useMemo as Je,useRtl as Rn,isMounted as kn}from"./use-rtl.DYUZNIs91793933382902.js";import{emptyLight as go,internalSelectMenuLight as bo,internalSelectionLight as mo,selectLight as po,sizeVariables as wo,commonVars as yo}from"./_common.DAbDwYn91793933382902.js";import{NBaseIcon as Tn}from"./Close.DPAaOs-m1793933382902.js";import{NBaseLoading as Fn,useFormItem as Gt,iconSwitchTransition as Yt,NIconSwitchTransition as xo}from"./Loading.B9nbN0PI1793933382902.js";import{clickoutside as Zt}from"./keep.C3PC6ed_1793933382902.js";import{useMergedState as Ct,on as gt,off as bt}from"./use-merged-state.Dio8Wvvf1793933382902.js";import{markEventEffectPerformed as Co}from"./index.BBJKPpY61793933382902.js";function ct(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Jt(e){return e&-e}class zn{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let i=0;i<t+1;++i)o[i]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:i}=this;for(t+=1;t<=o;)i[t]+=n,t+=Jt(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:i}=this;if(t>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=t*o;for(;t>0;)d+=n[t],t-=Jt(t);return d}getBound(t){let n=0,o=this.l;for(;o>n;){const i=Math.floor((n+o)/2),d=this.sum(i);if(d>t){o=i;continue}else if(d<t){if(n===i)return this.sum(n+1)<=t?n+1:i;n=i}else return i}return n}}let mt;function So(){return typeof document>"u"?!1:(mt===void 0&&("matchMedia"in window?mt=window.matchMedia("(pointer:coarse)").matches:mt=!1),mt)}let Mt;function Qt(){return typeof document>"u"?1:(Mt===void 0&&(Mt="chrome"in window?window.devicePixelRatio:1),Mt)}const $n="VVirtualListXScroll",{computed:Ro,provide:ko,ref:en}=await ue("vue");function To({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const o=en(0),i=en(0),d=Ro(()=>{const h=e.value;if(h.length===0)return null;const f=new zn(h.length,0);return h.forEach((g,y)=>{f.add(y,g.width)}),f}),a=Je(()=>{const h=d.value;return h!==null?Math.max(h.getBound(i.value)-1,0):0}),s=h=>{const f=d.value;return f!==null?f.sum(h):0},v=Je(()=>{const h=d.value;return h!==null?Math.min(h.getBound(i.value+o.value)+1,e.value.length-1):0});return ko($n,{startIndexRef:a,endIndexRef:v,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:s}),{listWidthRef:o,scrollLeftRef:i}}const{defineComponent:Fo,inject:zo}=await ue("vue"),tn=Fo({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:o,renderColRef:i,renderItemWithColsRef:d}=zo($n);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:d,getLeft:o}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:i,getLeft:d,item:a}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:a,getLeft:d});if(o!=null){const s=[];for(let v=e;v<=t;++v){const h=n[v];s.push(o({column:h,left:d(v),item:a}))}return s}return null}}),{mergeProps:$o,computed:rt,defineComponent:Oo,ref:lt,onMounted:Mo,h:Ye,onActivated:Po,onDeactivated:Io,toRef:Pt}=await ue("vue"),Bo=yt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[yt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[yt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),_o=Oo({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=bn();Bo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:wn,ssr:t}),Mo(()=>{const{defaultScrollIndex:m,defaultScrollKey:T}=e;m!=null?j({index:m}):T!=null&&j({key:T})});let n=!1,o=!1;Po(()=>{if(n=!1,!o){o=!0;return}j({top:k.value,left:a.value})}),Io(()=>{n=!0,o||(o=!0)});const i=Je(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let m=0;return e.columns.forEach(T=>{m+=T.width}),m}),d=rt(()=>{const m=new Map,{keyField:T}=e;return e.items.forEach((L,Z)=>{m.set(L[T],Z)}),m}),{scrollLeftRef:a,listWidthRef:s}=To({columnsRef:Pt(e,"columns"),renderColRef:Pt(e,"renderCol"),renderItemWithColsRef:Pt(e,"renderItemWithCols")}),v=lt(null),h=lt(void 0),f=new Map,g=rt(()=>{const{items:m,itemSize:T,keyField:L}=e,Z=new zn(m.length,T);return m.forEach((ee,N)=>{const J=ee[L],H=f.get(J);H!==void 0&&Z.add(N,H)}),Z}),y=lt(0),k=lt(0),x=Je(()=>Math.max(g.value.getBound(k.value-ke(e.paddingTop))-1,0)),A=rt(()=>{const{value:m}=h;if(m===void 0)return[];const{items:T,itemSize:L}=e,Z=x.value,ee=Math.min(Z+Math.ceil(m/L+1),T.length-1),N=[];for(let J=Z;J<=ee;++J)N.push(T[J]);return N}),j=(m,T)=>{if(typeof m=="number"){p(m,T,"auto");return}const{left:L,top:Z,index:ee,key:N,position:J,behavior:H,debounce:Y=!0}=m;if(L!==void 0||Z!==void 0)p(L,Z,H);else if(ee!==void 0)M(ee,H,Y);else if(N!==void 0){const b=d.value.get(N);b!==void 0&&M(b,H,Y)}else J==="bottom"?p(0,Number.MAX_SAFE_INTEGER,H):J==="top"&&p(0,0,H)};let z,P=null;function M(m,T,L){const{value:Z}=g,ee=Z.sum(m)+ke(e.paddingTop);if(!L)v.value.scrollTo({left:0,top:ee,behavior:T});else{z=m,P!==null&&window.clearTimeout(P),P=window.setTimeout(()=>{z=void 0,P=null},16);const{scrollTop:N,offsetHeight:J}=v.value;if(ee>N){const H=Z.get(m);ee+H<=N+J||v.value.scrollTo({left:0,top:ee+H-J,behavior:T})}else v.value.scrollTo({left:0,top:ee,behavior:T})}}function p(m,T,L){v.value.scrollTo({left:m,top:T,behavior:L})}function w(m,T){var L,Z,ee;if(n||e.ignoreItemResize||ae(T.target))return;const{value:N}=g,J=d.value.get(m),H=N.get(J),Y=(ee=(Z=(L=T.borderBoxSize)===null||L===void 0?void 0:L[0])===null||Z===void 0?void 0:Z.blockSize)!==null&&ee!==void 0?ee:T.contentRect.height;if(Y===H)return;Y-e.itemSize===0?f.delete(m):f.set(m,Y-e.itemSize);const S=Y-H;if(S===0)return;N.add(J,S);const q=v.value;if(q!=null){if(z===void 0){const de=N.sum(J);q.scrollTop>de&&q.scrollBy(0,S)}else if(J<z)q.scrollBy(0,S);else if(J===z){const de=N.sum(J);Y+de>q.scrollTop+q.offsetHeight&&q.scrollBy(0,S)}te()}y.value++}const E=!So();let I=!1;function $(m){var T;(T=e.onScroll)===null||T===void 0||T.call(e,m),(!E||!I)&&te()}function X(m){var T;if((T=e.onWheel)===null||T===void 0||T.call(e,m),E){const L=v.value;if(L!=null){if(m.deltaX===0&&(L.scrollTop===0&&m.deltaY<=0||L.scrollTop+L.offsetHeight>=L.scrollHeight&&m.deltaY>=0))return;m.preventDefault(),L.scrollTop+=m.deltaY/Qt(),L.scrollLeft+=m.deltaX/Qt(),te(),I=!0,lo(()=>{I=!1})}}}function _(m){if(n||ae(m.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(m.contentRect.height===h.value)return}else if(m.contentRect.height===h.value&&m.contentRect.width===s.value)return;h.value=m.contentRect.height,s.value=m.contentRect.width;const{onResize:T}=e;T!==void 0&&T(m)}function te(){const{value:m}=v;m!=null&&(k.value=m.scrollTop,a.value=m.scrollLeft)}function ae(m){let T=m;for(;T!==null;){if(T.style.display==="none")return!0;T=T.parentElement}return!1}return{listHeight:h,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:rt(()=>{const{itemResizable:m}=e,T=Ue(g.value.sum());return y.value,[e.itemsStyle,{boxSizing:"content-box",width:Ue(i.value),height:m?"":T,minHeight:m?T:"",paddingTop:Ue(e.paddingTop),paddingBottom:Ue(e.paddingBottom)}]}),visibleItemsStyle:rt(()=>(y.value,{transform:`translateY(${Ue(g.value.sum(x.value))})`})),viewportItems:A,listElRef:v,itemsElRef:lt(null),scrollTo:j,handleListResize:_,handleListScroll:$,handleListWheel:X,handleItemResize:w}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return Ye(Xt,{onResize:this.handleListResize},{default:()=>{var i,d;return Ye("div",$o(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?Ye("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[Ye(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:a,renderItemWithCols:s}=this;return this.viewportItems.map(v=>{const h=v[t],f=n.get(h),g=a!=null?Ye(tn,{index:f,item:v}):void 0,y=s!=null?Ye(tn,{index:f,item:v}):void 0,k=this.$slots.default({item:v,renderedCols:g,renderedItemWithCols:y,index:f})[0];return e?Ye(Xt,{key:h,onResize:x=>this.handleItemResize(h,x)},{default:()=>k}):(k.key=h,k)})}})]):(d=(i=this.$slots).empty)===null||d===void 0?void 0:d.call(i)])}})}}),{defineComponent:Ao,renderSlot:Eo,h:nn,onMounted:No,ref:on,nextTick:Vo}=await ue("vue"),Ne="v-hidden",Lo=yt("[v-hidden]",{display:"none!important"}),rn=Ao({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=on(null),o=on(null);function i(a){const{value:s}=n,{getCounter:v,getTail:h}=e;let f;if(v!==void 0?f=v():f=o.value,!s||!f)return;f.hasAttribute(Ne)&&f.removeAttribute(Ne);const{children:g}=s;if(a.showAllItemsBeforeCalculate)for(const M of g)M.hasAttribute(Ne)&&M.removeAttribute(Ne);const y=s.offsetWidth,k=[],x=t.tail?h?.():null;let A=x?x.offsetWidth:0,j=!1;const z=s.children.length-(t.tail?1:0);for(let M=0;M<z-1;++M){if(M<0)continue;const p=g[M];if(j){p.hasAttribute(Ne)||p.setAttribute(Ne,"");continue}else p.hasAttribute(Ne)&&p.removeAttribute(Ne);const w=p.offsetWidth;if(A+=w,k[M]=w,A>y){const{updateCounter:E}=e;for(let I=M;I>=0;--I){const $=z-1-I;E!==void 0?E($):f.textContent=`${$}`;const X=f.offsetWidth;if(A-=k[I],A+X<=y||I===0){j=!0,M=I-1,x&&(M===-1?(x.style.maxWidth=`${y-X}px`,x.style.boxSizing="border-box"):x.style.maxWidth="");const{onUpdateCount:_}=e;_&&_($);break}}}}const{onUpdateOverflow:P}=e;j?P!==void 0&&P(!0):(P!==void 0&&P(!1),f.setAttribute(Ne,""))}const d=bn();return Lo.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wn,ssr:d}),No(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return Vo(()=>this.sync({showAllItemsBeforeCalculate:!1})),nn("div",{class:"v-overflow",ref:"selfRef"},[Eo(e,"default"),e.counter?e.counter():nn("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),{onBeforeUnmount:Do,onMounted:Ko,watch:jo}=await ue("vue");function On(e,t){t&&(Ko(()=>{const{value:n}=e;n&&$t.registerHandler(n,t)}),jo(e,(n,o)=>{o&&$t.unregisterHandler(o)},{deep:!1}),Do(()=>{const{value:n}=e;n&&$t.unregisterHandler(n)}))}function ln(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function It(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const{defineComponent:Ho,h:Bt}=await ue("vue"),Wo=Ho({name:"Checkmark",render(){return Bt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Bt("g",{fill:"none"},Bt("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),{defineComponent:Uo,h:_t}=await ue("vue"),Go=Uo({name:"Empty",render(){return _t("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_t("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),_t("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),{defineComponent:qo,h:Xo}=await ue("vue"),Yo=qo({props:{onFocus:Function,onBlur:Function},setup(e){return()=>Xo("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function an(e){return Array.isArray(e)?e:[e]}const Wt={STOP:"STOP"};function Mn(e,t){const n=t(e);e.children!==void 0&&n!==Wt.STOP&&e.children.forEach(o=>Mn(o,t))}function Zo(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?a=>{a.isLeaf||(o.push(a.key),d(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),d(a.children))};function d(a){a.forEach(i)}return d(e),o}function Jo(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Qo(e){return e.children}function ei(e){return e.key}function ti(){return!1}function ni(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function oi(e){return e.disabled===!0}function ii(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function At(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Et(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function ri(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function li(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function ai(e){return e?.type==="group"}function si(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class di extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ci(e,t,n,o){return St(t.concat(e),n,o,!1)}function ui(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let d=i.parent;for(;d!==null&&!(d.disabled||n.has(d.key));)n.add(d.key),d=d.parent}}),n}function fi(e,t,n,o){const i=St(t,n,o,!1),d=St(e,n,o,!0),a=ui(e,n),s=[];return i.forEach(v=>{(d.has(v)||a.has(v))&&s.push(v)}),s.forEach(v=>i.delete(v)),i}function Nt(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:d,cascade:a,leafOnly:s,checkStrategy:v,allowNotLoaded:h}=e;if(!a)return o!==void 0?{checkedKeys:ri(n,o),indeterminateKeys:Array.from(d)}:i!==void 0?{checkedKeys:li(n,i),indeterminateKeys:Array.from(d)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(d)};const{levelTreeNodeMap:f}=t;let g;i!==void 0?g=fi(i,n,t,h):o!==void 0?g=ci(o,n,t,h):g=St(n,t,h,!1);const y=v==="parent",k=v==="child"||s,x=g,A=new Set,j=Math.max.apply(null,Array.from(f.keys()));for(let z=j;z>=0;z-=1){const P=z===0,M=f.get(z);for(const p of M){if(p.isLeaf)continue;const{key:w,shallowLoaded:E}=p;if(k&&E&&p.children.forEach(_=>{!_.disabled&&!_.isLeaf&&_.shallowLoaded&&x.has(_.key)&&x.delete(_.key)}),p.disabled||!E)continue;let I=!0,$=!1,X=!0;for(const _ of p.children){const te=_.key;if(!_.disabled){if(X&&(X=!1),x.has(te))$=!0;else if(A.has(te)){$=!0,I=!1;break}else if(I=!1,$)break}}I&&!X?(y&&p.children.forEach(_=>{!_.disabled&&x.has(_.key)&&x.delete(_.key)}),x.add(w)):$&&A.add(w),P&&k&&x.has(w)&&x.delete(w)}}return{checkedKeys:Array.from(x),indeterminateKeys:Array.from(A)}}function St(e,t,n,o){const{treeNodeMap:i,getChildren:d}=t,a=new Set,s=new Set(e);return e.forEach(v=>{const h=i.get(v);h!==void 0&&Mn(h,f=>{if(f.disabled)return Wt.STOP;const{key:g}=f;if(!a.has(g)&&(a.add(g),s.add(g),ii(f.rawNode,d))){if(o)return Wt.STOP;if(!n)throw new di}})}),s}function hi(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const d=o.treeNodeMap;let a=e==null?null:(i=d.get(e))!==null&&i!==void 0?i:null;const s={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return s.treeNode=null,s;for(;a;)!a.ignored&&(t||!a.isGroup)&&s.treeNodePath.push(a),a=a.parent;return s.treeNodePath.reverse(),n||s.treeNodePath.pop(),s.keyPath=s.treeNodePath.map(v=>v.key),s}function vi(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function gi(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function sn(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?bi:gi,d={reverse:t==="prev"};let a=!1,s=null;function v(h){if(h!==null){if(h===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!h.disabled||o)&&!h.ignored&&!h.isGroup){s=h;return}if(h.isGroup){const f=qt(h,d);f!==null?s=f:v(i(h,n))}else{const f=i(h,!1);if(f!==null)v(f);else{const g=mi(h);g?.isGroup?v(i(g,n)):n&&v(i(h,!0))}}}}return v(e),s}function bi(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function mi(e){return e.parent}function qt(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,d=n?i-1:0,a=n?-1:i,s=n?-1:1;for(let v=d;v!==a;v+=s){const h=o[v];if(!h.disabled&&!h.ignored)if(h.isGroup){const f=qt(h,t);if(f!==null)return f}else return h}}return null}const pi={getChild(){return this.ignored?null:qt(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return sn(this,"next",e)},getPrev(e={}){return sn(this,"prev",e)}};function wi(e,t){const n=t?new Set(t):void 0,o=[];function i(d){d.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&i(a.children)})}return i(e),o}function yi(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Pn(e,t,n,o,i,d=null,a=0){const s=[];return e.forEach((v,h)=>{var f;const g=Object.create(o);if(g.rawNode=v,g.siblings=s,g.level=a,g.index=h,g.isFirstChild=h===0,g.isLastChild=h+1===e.length,g.parent=d,!g.ignored){const y=i(v);Array.isArray(y)&&(g.children=Pn(y,t,n,o,i,g,a+1))}s.push(g),t.set(g.key,g),n.has(a)||n.set(a,[]),(f=n.get(a))===null||f===void 0||f.push(g)}),s}function xi(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:d=oi,getIgnored:a=ti,getIsGroup:s=ai,getKey:v=ei}=t,h=(n=t.getChildren)!==null&&n!==void 0?n:Qo,f=t.ignoreEmptyChildren?p=>{const w=h(p);return Array.isArray(w)?w.length?w:null:w}:h,g=Object.assign({get key(){return v(this.rawNode)},get disabled(){return d(this.rawNode)},get isGroup(){return s(this.rawNode)},get isLeaf(){return Jo(this.rawNode,f)},get shallowLoaded(){return ni(this.rawNode,f)},get ignored(){return a(this.rawNode)},contains(p){return yi(this,p)}},pi),y=Pn(e,o,i,g,f);function k(p){if(p==null)return null;const w=o.get(p);return w&&!w.isGroup&&!w.ignored?w:null}function x(p){if(p==null)return null;const w=o.get(p);return w&&!w.ignored?w:null}function A(p,w){const E=x(p);return E?E.getPrev(w):null}function j(p,w){const E=x(p);return E?E.getNext(w):null}function z(p){const w=x(p);return w?w.getParent():null}function P(p){const w=x(p);return w?w.getChild():null}const M={treeNodes:y,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:f,getFlattenedNodes(p){return wi(y,p)},getNode:k,getPrev:A,getNext:j,getParent:z,getChild:P,getFirstAvailableNode(){return vi(y)},getPath(p,w={}){return hi(p,w,M)},getCheckedKeys(p,w={}){const{cascade:E=!0,leafOnly:I=!1,checkStrategy:$="all",allowNotLoaded:X=!1}=w;return Nt({checkedKeys:At(p),indeterminateKeys:Et(p),cascade:E,leafOnly:I,checkStrategy:$,allowNotLoaded:X},M)},check(p,w,E={}){const{cascade:I=!0,leafOnly:$=!1,checkStrategy:X="all",allowNotLoaded:_=!1}=E;return Nt({checkedKeys:At(w),indeterminateKeys:Et(w),keysToCheck:p==null?[]:an(p),cascade:I,leafOnly:$,checkStrategy:X,allowNotLoaded:_},M)},uncheck(p,w,E={}){const{cascade:I=!0,leafOnly:$=!1,checkStrategy:X="all",allowNotLoaded:_=!1}=E;return Nt({checkedKeys:At(w),indeterminateKeys:Et(w),keysToUncheck:p==null?[]:an(p),cascade:I,leafOnly:$,checkStrategy:X,allowNotLoaded:_},M)},getNonLeafKeys(p={}){return Zo(y,p)}};return M}const Ci=C("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[F("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[F("description",`
 margin-top: 8px;
 `)])]),F("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),F("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),{computed:at,defineComponent:Si,h:et}=await ue("vue"),Ri=Object.assign(Object.assign({},Te.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),ki=Si({name:"Empty",props:Ri,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:o}=it(e),i=Te("Empty","-empty",Ci,go,e,t),{localeRef:d}=Sn("Empty"),a=at(()=>{var f,g,y;return(f=e.description)!==null&&f!==void 0?f:(y=(g=o?.value)===null||g===void 0?void 0:g.Empty)===null||y===void 0?void 0:y.description}),s=at(()=>{var f,g;return((g=(f=o?.value)===null||f===void 0?void 0:f.Empty)===null||g===void 0?void 0:g.renderIcon)||(()=>et(Go,null))}),v=at(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:g},self:{[fe("iconSize",f)]:y,[fe("fontSize",f)]:k,textColor:x,iconColor:A,extraTextColor:j}}=i.value;return{"--n-icon-size":y,"--n-font-size":k,"--n-bezier":g,"--n-text-color":x,"--n-icon-color":A,"--n-extra-text-color":j}}),h=n?Qe("empty",at(()=>{let f="";const{size:g}=e;return f+=g[0],f}),v,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:s,localizedDescription:at(()=>a.value||d.value.description),cssVars:n?void 0:v,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),et("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?et("div",{class:`${t}-empty__icon`},e.icon?e.icon():et(Tn,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?et("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?et("div",{class:`${t}-empty__extra`},e.extra()):null)}}),{defineComponent:Ti,h:Fi,inject:zi}=await ue("vue"),dn=Ti({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=zi(Ut);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,d=o?.(i),a=t?t(i,!1):nt(i[this.labelField],i,!1),s=Fi("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d?.class]}),a);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}}),{defineComponent:$i,h:ut,inject:Oi,Transition:Mi}=await ue("vue");function Pi(e,t){return ut(Mi,{name:"fade-in-scale-up-transition"},{default:()=>e?ut(Tn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>ut(Wo)}):null})}const cn=$i({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:d,renderOptionRef:a,labelFieldRef:s,valueFieldRef:v,showCheckmarkRef:h,nodePropsRef:f,handleOptionClick:g,handleOptionMouseEnter:y}=Oi(Ut),k=Je(()=>{const{value:z}=n;return z?e.tmNode.key===z.key:!1});function x(z){const{tmNode:P}=e;P.disabled||g(z,P)}function A(z){const{tmNode:P}=e;P.disabled||y(z,P)}function j(z){const{tmNode:P}=e,{value:M}=k;P.disabled||M||y(z,P)}return{multiple:o,isGrouped:Je(()=>{const{tmNode:z}=e,{parent:P}=z;return P&&P.rawNode.type==="group"}),showCheckmark:h,nodeProps:f,isPending:k,isSelected:Je(()=>{const{value:z}=t,{value:P}=o;if(z===null)return!1;const M=e.tmNode.rawNode[v.value];if(P){const{value:p}=i;return p.has(M)}else return z===M}),labelField:s,renderLabel:d,renderOption:a,handleMouseMove:j,handleMouseEnter:A,handleClick:x}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:d,nodeProps:a,renderOption:s,renderLabel:v,handleClick:h,handleMouseEnter:f,handleMouseMove:g}=this,y=Pi(n,e),k=v?[v(t,n),d&&y]:[nt(t[this.labelField],t,n),d&&y],x=a?.(t),A=ut("div",Object.assign({},x,{class:[`${e}-base-select-option`,t.class,x?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:d}],style:[x?.style||"",t.style||""],onClick:It([h,x?.onClick]),onMouseenter:It([f,x?.onMouseenter]),onMousemove:It([g,x?.onMousemove])}),ut("div",{class:`${e}-base-select-option__content`},k));return t.render?t.render({node:A,option:t,selected:n}):s?s({node:A,option:t,selected:n}):A}}),Ii=C("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[C("scrollbar",`
 max-height: var(--n-height);
 `),C("virtual-list",`
 max-height: var(--n-height);
 `),C("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[F("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),C("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),C("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),F("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),F("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),F("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),C("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),C("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[W("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),W("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),W("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),W("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),W("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),W("disabled",`
 cursor: not-allowed;
 `,[ft("selected",`
 color: var(--n-option-text-color-disabled);
 `),W("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),F("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[xt({enterScale:"0.5"})])])]),{computed:He,defineComponent:Bi,h:be,nextTick:_i,onBeforeUnmount:Ai,onMounted:Ei,provide:un,ref:pt,toRef:Ve,watch:fn}=await ue("vue"),Ni=Bi({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=it(e),o=Rn("InternalSelectMenu",n,t),i=Te("InternalSelectMenu","-internal-select-menu",Ii,bo,e,Ve(e,"clsPrefix")),d=pt(null),a=pt(null),s=pt(null),v=He(()=>e.treeMate.getFlattenedNodes()),h=He(()=>si(v.value)),f=pt(null);function g(){const{treeMate:b}=e;let S=null;const{value:q}=e;q===null?S=b.getFirstAvailableNode():(e.multiple?S=b.getNode((q||[])[(q||[]).length-1]):S=b.getNode(q),(!S||S.disabled)&&(S=b.getFirstAvailableNode())),T(S||null)}function y(){const{value:b}=f;b&&!e.treeMate.getNode(b.key)&&(f.value=null)}let k;fn(()=>e.show,b=>{b?k=fn(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():y(),_i(L)):y()},{immediate:!0}):k?.()},{immediate:!0}),Ai(()=>{k?.()});const x=He(()=>ke(i.value.self[fe("optionHeight",e.size)])),A=He(()=>dt(i.value.self[fe("padding",e.size)])),j=He(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=He(()=>{const b=v.value;return b&&b.length===0});function P(b){const{onToggle:S}=e;S&&S(b)}function M(b){const{onScroll:S}=e;S&&S(b)}function p(b){var S;(S=s.value)===null||S===void 0||S.sync(),M(b)}function w(){var b;(b=s.value)===null||b===void 0||b.sync()}function E(){const{value:b}=f;return b||null}function I(b,S){S.disabled||T(S,!1)}function $(b,S){S.disabled||P(S)}function X(b){var S;ct(b,"action")||(S=e.onKeyup)===null||S===void 0||S.call(e,b)}function _(b){var S;ct(b,"action")||(S=e.onKeydown)===null||S===void 0||S.call(e,b)}function te(b){var S;(S=e.onMousedown)===null||S===void 0||S.call(e,b),!e.focusable&&b.preventDefault()}function ae(){const{value:b}=f;b&&T(b.getNext({loop:!0}),!0)}function m(){const{value:b}=f;b&&T(b.getPrev({loop:!0}),!0)}function T(b,S=!1){f.value=b,S&&L()}function L(){var b,S;const q=f.value;if(!q)return;const de=h.value(q.key);de!==null&&(e.virtualScroll?(b=a.value)===null||b===void 0||b.scrollTo({index:de}):(S=s.value)===null||S===void 0||S.scrollTo({index:de,elSize:x.value}))}function Z(b){var S,q;!((S=d.value)===null||S===void 0)&&S.contains(b.target)&&((q=e.onFocus)===null||q===void 0||q.call(e,b))}function ee(b){var S,q;!((S=d.value)===null||S===void 0)&&S.contains(b.relatedTarget)||(q=e.onBlur)===null||q===void 0||q.call(e,b)}un(Ut,{handleOptionMouseEnter:I,handleOptionClick:$,valueSetRef:j,pendingTmNodeRef:f,nodePropsRef:Ve(e,"nodeProps"),showCheckmarkRef:Ve(e,"showCheckmark"),multipleRef:Ve(e,"multiple"),valueRef:Ve(e,"value"),renderLabelRef:Ve(e,"renderLabel"),renderOptionRef:Ve(e,"renderOption"),labelFieldRef:Ve(e,"labelField"),valueFieldRef:Ve(e,"valueField")}),un(ao,d),Ei(()=>{const{value:b}=s;b&&b.sync()});const N=He(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:S},self:{height:q,borderRadius:de,color:he,groupHeaderTextColor:xe,actionDividerColor:ve,optionTextColorPressed:se,optionTextColor:De,optionTextColorDisabled:ze,optionTextColorActive:$e,optionOpacityDisabled:Oe,optionCheckColor:Me,actionTextColor:Ge,optionColorPending:_e,optionColorActive:Ae,loadingColor:qe,loadingSize:Ke,optionColorActivePending:Ce,[fe("optionFontSize",b)]:Ee,[fe("optionHeight",b)]:pe,[fe("optionPadding",b)]:u}}=i.value;return{"--n-height":q,"--n-action-divider-color":ve,"--n-action-text-color":Ge,"--n-bezier":S,"--n-border-radius":de,"--n-color":he,"--n-option-font-size":Ee,"--n-group-header-text-color":xe,"--n-option-check-color":Me,"--n-option-color-pending":_e,"--n-option-color-active":Ae,"--n-option-color-active-pending":Ce,"--n-option-height":pe,"--n-option-opacity-disabled":Oe,"--n-option-text-color":De,"--n-option-text-color-active":$e,"--n-option-text-color-disabled":ze,"--n-option-text-color-pressed":se,"--n-option-padding":u,"--n-option-padding-left":dt(u,"left"),"--n-option-padding-right":dt(u,"right"),"--n-loading-color":qe,"--n-loading-size":Ke}}),{inlineThemeDisabled:J}=e,H=J?Qe("internal-select-menu",He(()=>e.size[0]),N,e):void 0,Y={selfRef:d,next:ae,prev:m,getPendingTmNode:E};return On(d,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:t,rtlEnabled:o,virtualListRef:a,scrollbarRef:s,itemSize:x,padding:A,flattenedNodes:v,empty:z,virtualListContainer(){const{value:b}=a;return b?.listElRef},virtualListContent(){const{value:b}=a;return b?.itemsElRef},doScroll:M,handleFocusin:Z,handleFocusout:ee,handleKeyUp:X,handleKeyDown:_,handleMouseDown:te,handleVirtualListResize:w,handleVirtualListScroll:p,cssVars:J?void 0:N,themeClass:H?.themeClass,onRender:H?.onRender},Y)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:d}=this;return d?.(),be("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Le(e.header,a=>a&&be("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},a)),this.loading?be("div",{class:`${n}-base-select-menu__loading`},be(Fn,{clsPrefix:n,strokeWidth:20})):this.empty?be("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},mn(e.empty,()=>[be(ki,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})])):be(uo,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?be(_o,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?be(dn,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:be(cn,{clsPrefix:n,key:a.key,tmNode:a})}):be("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?be(dn,{key:a.key,clsPrefix:n,tmNode:a}):be(cn,{clsPrefix:n,key:a.key,tmNode:a})))}),Le(e.action,a=>a&&[be("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),be(Yo,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Vi=le([C("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[C("base-loading",`
 color: var(--n-loading-color);
 `),C("base-selection-tags","min-height: var(--n-height);"),F("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),F("state-border",`
 z-index: 1;
 border-color: #0000;
 `),C("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[F("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),C("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[F("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),C("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[F("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),C("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[C("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[F("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),F("render-label",`
 color: var(--n-text-color);
 `)]),ft("disabled",[le("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),W("focus",[F("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),W("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),C("base-selection-label","background-color: var(--n-color-active);"),C("base-selection-tags","background-color: var(--n-color-active);")])]),W("disabled","cursor: not-allowed;",[F("arrow",`
 color: var(--n-arrow-color-disabled);
 `),C("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[C("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),F("render-label",`
 color: var(--n-text-color-disabled);
 `)]),C("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),C("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),C("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[F("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),F("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>W(`${e}-status`,[F("state-border",`border: var(--n-border-${e});`),ft("disabled",[le("&:hover",[F("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),W("active",[F("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),C("base-selection-label",`background-color: var(--n-color-active-${e});`),C("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),W("focus",[F("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),C("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),C("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),C("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[F("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),{computed:tt,defineComponent:Li,Fragment:Di,h:G,nextTick:Ki,onMounted:ji,ref:we,toRef:Vt,watch:Lt,watchEffect:Hi}=await ue("vue"),Wi=Li({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=it(e),o=Rn("InternalSelection",n,t),i=we(null),d=we(null),a=we(null),s=we(null),v=we(null),h=we(null),f=we(null),g=we(null),y=we(null),k=we(null),x=we(!1),A=we(!1),j=we(!1),z=Te("InternalSelection","-internal-selection",Vi,mo,e,Vt(e,"clsPrefix")),P=tt(()=>e.clearable&&!e.disabled&&(j.value||e.active)),M=tt(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):nt(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),p=tt(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),w=tt(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function E(){var r;const{value:c}=i;if(c){const{value:O}=d;O&&(O.style.width=`${c.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=y.value)===null||r===void 0||r.sync({showAllItemsBeforeCalculate:!1})))}}function I(){const{value:r}=k;r&&(r.style.display="none")}function $(){const{value:r}=k;r&&(r.style.display="inline-block")}Lt(Vt(e,"active"),r=>{r||I()}),Lt(Vt(e,"pattern"),()=>{e.multiple&&Ki(E)});function X(r){const{onFocus:c}=e;c&&c(r)}function _(r){const{onBlur:c}=e;c&&c(r)}function te(r){const{onDeleteOption:c}=e;c&&c(r)}function ae(r){const{onClear:c}=e;c&&c(r)}function m(r){const{onPatternInput:c}=e;c&&c(r)}function T(r){var c;(!r.relatedTarget||!(!((c=a.value)===null||c===void 0)&&c.contains(r.relatedTarget)))&&X(r)}function L(r){var c;!((c=a.value)===null||c===void 0)&&c.contains(r.relatedTarget)||_(r)}function Z(r){ae(r)}function ee(){j.value=!0}function N(){j.value=!1}function J(r){!e.active||!e.filterable||r.target!==d.value&&r.preventDefault()}function H(r){te(r)}const Y=we(!1);function b(r){if(r.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:c}=e;c?.length&&H(c[c.length-1])}}let S=null;function q(r){const{value:c}=i;if(c){const O=r.target.value;c.textContent=O,E()}e.ignoreComposition&&Y.value?S=r:m(r)}function de(){Y.value=!0}function he(){Y.value=!1,e.ignoreComposition&&m(S),S=null}function xe(r){var c;A.value=!0,(c=e.onPatternFocus)===null||c===void 0||c.call(e,r)}function ve(r){var c;A.value=!1,(c=e.onPatternBlur)===null||c===void 0||c.call(e,r)}function se(){var r,c;if(e.filterable)A.value=!1,(r=h.value)===null||r===void 0||r.blur(),(c=d.value)===null||c===void 0||c.blur();else if(e.multiple){const{value:O}=s;O?.blur()}else{const{value:O}=v;O?.blur()}}function De(){var r,c,O;e.filterable?(A.value=!1,(r=h.value)===null||r===void 0||r.focus()):e.multiple?(c=s.value)===null||c===void 0||c.focus():(O=v.value)===null||O===void 0||O.focus()}function ze(){const{value:r}=d;r&&($(),r.focus())}function $e(){const{value:r}=d;r&&r.blur()}function Oe(r){const{value:c}=f;c&&c.setTextContent(`+${r}`)}function Me(){const{value:r}=g;return r}function Ge(){return d.value}let _e=null;function Ae(){_e!==null&&window.clearTimeout(_e)}function qe(){e.active||(Ae(),_e=window.setTimeout(()=>{w.value&&(x.value=!0)},100))}function Ke(){Ae()}function Ce(r){r||(Ae(),x.value=!1)}Lt(w,r=>{r||(x.value=!1)}),ji(()=>{Hi(()=>{const r=h.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=A.value?-1:0)})}),On(a,e.onResize);const{inlineThemeDisabled:Ee}=e,pe=tt(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:c},self:{fontWeight:O,borderRadius:Q,color:ne,placeholderColor:ge,textColor:re,paddingSingle:oe,paddingMultiple:Se,caretColor:Xe,colorDisabled:je,textColorDisabled:Pe,placeholderColorDisabled:l,colorActive:R,boxShadowFocus:B,boxShadowActive:U,boxShadowHover:D,border:V,borderFocus:K,borderHover:ie,borderActive:Re,arrowColor:kt,arrowColorDisabled:Tt,loadingColor:Ft,colorActiveWarning:Bn,boxShadowFocusWarning:_n,boxShadowActiveWarning:An,boxShadowHoverWarning:En,borderWarning:Nn,borderFocusWarning:Vn,borderHoverWarning:Ln,borderActiveWarning:Dn,colorActiveError:Kn,boxShadowFocusError:jn,boxShadowActiveError:Hn,boxShadowHoverError:Wn,borderError:Un,borderFocusError:Gn,borderHoverError:qn,borderActiveError:Xn,clearColor:Yn,clearColorHover:Zn,clearColorPressed:Jn,clearSize:Qn,arrowSize:eo,[fe("height",r)]:to,[fe("fontSize",r)]:no}}=z.value,ht=dt(oe),vt=dt(Se);return{"--n-bezier":c,"--n-border":V,"--n-border-active":Re,"--n-border-focus":K,"--n-border-hover":ie,"--n-border-radius":Q,"--n-box-shadow-active":U,"--n-box-shadow-focus":B,"--n-box-shadow-hover":D,"--n-caret-color":Xe,"--n-color":ne,"--n-color-active":R,"--n-color-disabled":je,"--n-font-size":no,"--n-height":to,"--n-padding-single-top":ht.top,"--n-padding-multiple-top":vt.top,"--n-padding-single-right":ht.right,"--n-padding-multiple-right":vt.right,"--n-padding-single-left":ht.left,"--n-padding-multiple-left":vt.left,"--n-padding-single-bottom":ht.bottom,"--n-padding-multiple-bottom":vt.bottom,"--n-placeholder-color":ge,"--n-placeholder-color-disabled":l,"--n-text-color":re,"--n-text-color-disabled":Pe,"--n-arrow-color":kt,"--n-arrow-color-disabled":Tt,"--n-loading-color":Ft,"--n-color-active-warning":Bn,"--n-box-shadow-focus-warning":_n,"--n-box-shadow-active-warning":An,"--n-box-shadow-hover-warning":En,"--n-border-warning":Nn,"--n-border-focus-warning":Vn,"--n-border-hover-warning":Ln,"--n-border-active-warning":Dn,"--n-color-active-error":Kn,"--n-box-shadow-focus-error":jn,"--n-box-shadow-active-error":Hn,"--n-box-shadow-hover-error":Wn,"--n-border-error":Un,"--n-border-focus-error":Gn,"--n-border-hover-error":qn,"--n-border-active-error":Xn,"--n-clear-size":Qn,"--n-clear-color":Yn,"--n-clear-color-hover":Zn,"--n-clear-color-pressed":Jn,"--n-arrow-size":eo,"--n-font-weight":O}}),u=Ee?Qe("internal-selection",tt(()=>e.size[0]),pe,e):void 0;return{mergedTheme:z,mergedClearable:P,mergedClsPrefix:t,rtlEnabled:o,patternInputFocused:A,filterablePlaceholder:M,label:p,selected:w,showTagsPanel:x,isComposing:Y,counterRef:f,counterWrapperRef:g,patternInputMirrorRef:i,patternInputRef:d,selfRef:a,multipleElRef:s,singleElRef:v,patternInputWrapperRef:h,overflowRef:y,inputTagElRef:k,handleMouseDown:J,handleFocusin:T,handleClear:Z,handleMouseEnter:ee,handleMouseLeave:N,handleDeleteOption:H,handlePatternKeyDown:b,handlePatternInputInput:q,handlePatternInputBlur:ve,handlePatternInputFocus:xe,handleMouseEnterCounter:qe,handleMouseLeaveCounter:Ke,handleFocusout:L,handleCompositionEnd:he,handleCompositionStart:de,onPopoverUpdateShow:Ce,focus:De,focusInput:ze,blur:se,blurInput:$e,updateCounter:Oe,getCounter:Me,getTail:Ge,renderLabel:e.renderLabel,cssVars:Ee?void 0:pe,themeClass:u?.themeClass,onRender:u?.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:d,bordered:a,clsPrefix:s,ellipsisTagPopoverProps:v,onRender:h,renderTag:f,renderLabel:g}=this;h?.();const y=d==="responsive",k=typeof d=="number",x=y||k,A=G(fo,null,{default:()=>G(vo,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,P;return(P=(z=this.$slots).arrow)===null||P===void 0?void 0:P.call(z)}})});let j;if(t){const{labelField:z}=this,P=m=>G("div",{class:`${s}-base-selection-tag-wrapper`,key:m.value},f?f({option:m,handleClose:()=>{this.handleDeleteOption(m)}}):G(Ot,{size:n,closable:!m.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(m)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(m,!0):nt(m[z],m,!0)})),M=()=>(k?this.selectedOptions.slice(0,d):this.selectedOptions).map(P),p=i?G("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},G("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),G("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,w=y?()=>G("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},G(Ot,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let E;if(k){const m=this.selectedOptions.length-d;m>0&&(E=G("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},G(Ot,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${m}`})))}const I=y?i?G(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:w,tail:()=>p}):G(rn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:w}):k&&E?M().concat(E):M(),$=x?()=>G("div",{class:`${s}-base-selection-popover`},y?M():this.selectedOptions.map(P)):void 0,X=x?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},v):null,te=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?G("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},G("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,ae=i?G("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},I,y?null:p,A):G("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:o?void 0:0},I,A);j=G(Di,null,x?G(so,Object.assign({},X,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ae,default:$}):ae,te)}else if(i){const z=this.pattern||this.isComposing,P=this.active?!z:!this.selected,M=this.active?!1:this.selected;j=G("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:ln(this.label)},G("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),M?G("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},G("div",{class:`${s}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):nt(this.label,this.selectedOption,!0))):null,P?G("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},G("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,A)}else j=G("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?G("div",{class:`${s}-base-selection-input`,title:ln(this.label),key:"input"},G("div",{class:`${s}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):nt(this.label,this.selectedOption,!0))):G("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},G("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)),A);return G("div",{ref:"selfRef",class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},j,a?G("div",{class:`${s}-base-selection__border`}):null,a?G("div",{class:`${s}-base-selection__state-border`}):null)}});function Rt(e){return e.type==="group"}function In(e){return e.type==="ignored"}function Dt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ui(e,t){return{getIsGroup:Rt,getIgnored:In,getKey(o){return Rt(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function Gi(e,t,n,o){if(!t)return e;function i(d){if(!Array.isArray(d))return[];const a=[];for(const s of d)if(Rt(s)){const v=i(s[o]);v.length&&a.push(Object.assign({},s,{[o]:v}))}else{if(In(s))continue;t(n,s)&&a.push(s)}return a}return i(e)}function qi(e,t,n){const o=new Map;return e.forEach(i=>{Rt(i)?i[n].forEach(d=>{o.set(d[t],d)}):o.set(i[t],i)}),o}const Xi=le([C("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),C("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[xt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),{computed:Ie,defineComponent:Yi,h:Ze,ref:Fe,toRef:Kt,Transition:Zi,vShow:Ji,watch:Qi,watchEffect:Pr,withDirectives:er}=await ue("vue"),tr=Object.assign(Object.assign({},Te.props),{to:ot.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Ir=Yi({name:"Select",props:tr,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=it(e),d=Te("Select","-select",Xi,po,e,t),a=Fe(e.defaultValue),s=Kt(e,"value"),v=Ct(s,a),h=Fe(!1),f=Fe(""),g=co(e,["items","options"]),y=Fe([]),k=Fe([]),x=Ie(()=>k.value.concat(y.value).concat(g.value)),A=Ie(()=>{const{filter:l}=e;if(l)return l;const{labelField:R,valueField:B}=e;return(U,D)=>{if(!D)return!1;const V=D[R];if(typeof V=="string")return Dt(U,V);const K=D[B];return typeof K=="string"?Dt(U,K):typeof K=="number"?Dt(U,String(K)):!1}}),j=Ie(()=>{if(e.remote)return g.value;{const{value:l}=x,{value:R}=f;return!R.length||!e.filterable?l:Gi(l,A.value,R,e.childrenField)}}),z=Ie(()=>{const{valueField:l,childrenField:R}=e,B=Ui(l,R);return xi(j.value,B)}),P=Ie(()=>qi(x.value,e.valueField,e.childrenField)),M=Fe(!1),p=Ct(Kt(e,"show"),M),w=Fe(null),E=Fe(null),I=Fe(null),{localeRef:$}=Sn("Select"),X=Ie(()=>{var l;return(l=e.placeholder)!==null&&l!==void 0?l:$.value.placeholder}),_=[],te=Fe(new Map),ae=Ie(()=>{const{fallbackOption:l}=e;if(l===void 0){const{labelField:R,valueField:B}=e;return U=>({[R]:String(U),[B]:U})}return l===!1?!1:R=>Object.assign(l(R),{value:R})});function m(l){const R=e.remote,{value:B}=te,{value:U}=P,{value:D}=ae,V=[];return l.forEach(K=>{if(U.has(K))V.push(U.get(K));else if(R&&B.has(K))V.push(B.get(K));else if(D){const ie=D(K);ie&&V.push(ie)}}),V}const T=Ie(()=>{if(e.multiple){const{value:l}=v;return Array.isArray(l)?m(l):[]}return null}),L=Ie(()=>{const{value:l}=v;return!e.multiple&&!Array.isArray(l)?l===null?null:m([l])[0]||null:null}),Z=Gt(e),{mergedSizeRef:ee,mergedDisabledRef:N,mergedStatusRef:J}=Z;function H(l,R){const{onChange:B,"onUpdate:value":U,onUpdateValue:D}=e,{nTriggerFormChange:V,nTriggerFormInput:K}=Z;B&&ce(B,l,R),D&&ce(D,l,R),U&&ce(U,l,R),a.value=l,V(),K()}function Y(l){const{onBlur:R}=e,{nTriggerFormBlur:B}=Z;R&&ce(R,l),B()}function b(){const{onClear:l}=e;l&&ce(l)}function S(l){const{onFocus:R,showOnFocus:B}=e,{nTriggerFormFocus:U}=Z;R&&ce(R,l),U(),B&&ve()}function q(l){const{onSearch:R}=e;R&&ce(R,l)}function de(l){const{onScroll:R}=e;R&&ce(R,l)}function he(){var l;const{remote:R,multiple:B}=e;if(R){const{value:U}=te;if(B){const{valueField:D}=e;(l=T.value)===null||l===void 0||l.forEach(V=>{U.set(V[D],V)})}else{const D=L.value;D&&U.set(D[e.valueField],D)}}}function xe(l){const{onUpdateShow:R,"onUpdate:show":B}=e;R&&ce(R,l),B&&ce(B,l),M.value=l}function ve(){N.value||(xe(!0),M.value=!0,e.filterable&&oe())}function se(){xe(!1)}function De(){f.value="",k.value=_}const ze=Fe(!1);function $e(){e.filterable&&(ze.value=!0)}function Oe(){e.filterable&&(ze.value=!1,p.value||De())}function Me(){N.value||(p.value?e.filterable?oe():se():ve())}function Ge(l){var R,B;!((B=(R=I.value)===null||R===void 0?void 0:R.selfRef)===null||B===void 0)&&B.contains(l.relatedTarget)||(h.value=!1,Y(l),se())}function _e(l){S(l),h.value=!0}function Ae(){h.value=!0}function qe(l){var R;!((R=w.value)===null||R===void 0)&&R.$el.contains(l.relatedTarget)||(h.value=!1,Y(l),se())}function Ke(){var l;(l=w.value)===null||l===void 0||l.focus(),se()}function Ce(l){var R;p.value&&(!((R=w.value)===null||R===void 0)&&R.$el.contains(ho(l))||se())}function Ee(l){if(!Array.isArray(l))return[];if(ae.value)return Array.from(l);{const{remote:R}=e,{value:B}=P;if(R){const{value:U}=te;return l.filter(D=>B.has(D)||U.has(D))}else return l.filter(U=>B.has(U))}}function pe(l){u(l.rawNode)}function u(l){if(N.value)return;const{tag:R,remote:B,clearFilterAfterSelect:U,valueField:D}=e;if(R&&!B){const{value:V}=k,K=V[0]||null;if(K){const ie=y.value;ie.length?ie.push(K):y.value=[K],k.value=_}}if(B&&te.value.set(l[D],l),e.multiple){const V=Ee(v.value),K=V.findIndex(ie=>ie===l[D]);if(~K){if(V.splice(K,1),R&&!B){const ie=r(l[D]);~ie&&(y.value.splice(ie,1),U&&(f.value=""))}}else V.push(l[D]),U&&(f.value="");H(V,m(V))}else{if(R&&!B){const V=r(l[D]);~V?y.value=[y.value[V]]:y.value=_}re(),se(),H(l[D],l)}}function r(l){return y.value.findIndex(B=>B[e.valueField]===l)}function c(l){p.value||ve();const{value:R}=l.target;f.value=R;const{tag:B,remote:U}=e;if(q(R),B&&!U){if(!R){k.value=_;return}const{onCreate:D}=e,V=D?D(R):{[e.labelField]:R,[e.valueField]:R},{valueField:K,labelField:ie}=e;g.value.some(Re=>Re[K]===V[K]||Re[ie]===V[ie])||y.value.some(Re=>Re[K]===V[K]||Re[ie]===V[ie])?k.value=_:k.value=[V]}}function O(l){l.stopPropagation();const{multiple:R}=e;!R&&e.filterable&&se(),b(),R?H([],[]):H(null,null)}function Q(l){!ct(l,"action")&&!ct(l,"empty")&&!ct(l,"header")&&l.preventDefault()}function ne(l){de(l)}function ge(l){var R,B,U,D,V;if(!e.keyboard){l.preventDefault();return}switch(l.key){case" ":if(e.filterable)break;l.preventDefault();case"Enter":if(!(!((R=w.value)===null||R===void 0)&&R.isComposing)){if(p.value){const K=(B=I.value)===null||B===void 0?void 0:B.getPendingTmNode();K?pe(K):e.filterable||(se(),re())}else if(ve(),e.tag&&ze.value){const K=k.value[0];if(K){const ie=K[e.valueField],{value:Re}=v;e.multiple&&Array.isArray(Re)&&Re.includes(ie)||u(K)}}}l.preventDefault();break;case"ArrowUp":if(l.preventDefault(),e.loading)return;p.value&&((U=I.value)===null||U===void 0||U.prev());break;case"ArrowDown":if(l.preventDefault(),e.loading)return;p.value?(D=I.value)===null||D===void 0||D.next():ve();break;case"Escape":p.value&&(Co(l),se()),(V=w.value)===null||V===void 0||V.focus();break}}function re(){var l;(l=w.value)===null||l===void 0||l.focus()}function oe(){var l;(l=w.value)===null||l===void 0||l.focusInput()}function Se(){var l;p.value&&((l=E.value)===null||l===void 0||l.syncPosition())}he(),Qi(Kt(e,"options"),he);const Xe={focus:()=>{var l;(l=w.value)===null||l===void 0||l.focus()},focusInput:()=>{var l;(l=w.value)===null||l===void 0||l.focusInput()},blur:()=>{var l;(l=w.value)===null||l===void 0||l.blur()},blurInput:()=>{var l;(l=w.value)===null||l===void 0||l.blurInput()}},je=Ie(()=>{const{self:{menuBoxShadow:l}}=d.value;return{"--n-menu-box-shadow":l}}),Pe=i?Qe("select",void 0,je,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:J,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:z,isMounted:kn(),triggerRef:w,menuRef:I,pattern:f,uncontrolledShow:M,mergedShow:p,adjustedTo:ot(e),uncontrolledValue:a,mergedValue:v,followerRef:E,localizedPlaceholder:X,selectedOption:L,selectedOptions:T,mergedSize:ee,mergedDisabled:N,focused:h,activeWithoutMenuOpen:ze,inlineThemeDisabled:i,onTriggerInputFocus:$e,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:Se,handleMenuFocus:Ae,handleMenuBlur:qe,handleMenuTabOut:Ke,handleTriggerClick:Me,handleToggle:pe,handleDeleteOption:u,handlePatternInput:c,handleClear:O,handleTriggerBlur:Ge,handleTriggerFocus:_e,handleKeydown:ge,handleMenuAfterLeave:De,handleMenuClickOutside:Ce,handleMenuScroll:ne,handleMenuKeydown:ge,handleMenuMousedown:Q,mergedTheme:d,cssVars:i?void 0:je,themeClass:Pe?.themeClass,onRender:Pe?.onRender})},render(){return Ze("div",{class:`${this.mergedClsPrefix}-select`},Ze(yn,null,{default:()=>[Ze(xn,null,{default:()=>Ze(Wi,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),Ze(Cn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ot.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>Ze(Zi,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),er(Ze(Ni,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},header:()=>{var o,i;return[(i=(o=this.$slots).header)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[Ji,this.mergedShow],[Zt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Zt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function nr(e){const t="rgba(0, 0, 0, .85)",n="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:i,baseColor:d,cardColor:a,modalColor:s,popoverColor:v,borderRadius:h,fontSize:f,opacityDisabled:g}=e;return Object.assign(Object.assign({},wo),{fontSize:f,markFontSize:f,railColor:o,railColorHover:o,fillColor:i,fillColorHover:i,opacityDisabled:g,handleColor:"#FFF",dotColor:a,dotColorModal:s,dotColorPopover:v,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:d,indicatorBorderRadius:h,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${i}`,dotBoxShadow:""})}const or={common:pn,self:nr};function ir(e){const{primaryColor:t,opacityDisabled:n,borderRadius:o,textColor3:i}=e;return Object.assign(Object.assign({},yo),{iconColor:i,textColor:"white",loadingColor:t,opacityDisabled:n,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${oo(t,{alpha:.2})}`})}const rr={common:pn,self:ir},lr=le([C("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[W("reverse",[C("slider-handles",[C("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),C("slider-dots",[C("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),W("vertical",[C("slider-handles",[C("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),C("slider-marks",[C("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),C("slider-dots",[C("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),W("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[C("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[C("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),C("slider-rail",`
 height: 100%;
 `,[F("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),W("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),C("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[C("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),C("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[C("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),W("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[C("slider-handle",`
 cursor: not-allowed;
 `)]),W("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),le("&:hover",[C("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[F("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),C("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),W("active",[C("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[F("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),C("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),C("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[C("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),C("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[F("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),C("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[C("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[C("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[le("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),le("&:focus",[C("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[le("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),C("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[W("transition-disabled",[C("slider-dot","transition: none;")]),C("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[W("active","border: var(--n-dot-border-active);")])])]),C("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[xt()]),C("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[W("top",`
 margin-bottom: 12px;
 `),W("right",`
 margin-left: 12px;
 `),W("bottom",`
 margin-top: 12px;
 `),W("left",`
 margin-right: 12px;
 `),xt()]),io(C("slider",[C("slider-dot","background-color: var(--n-dot-color-modal);")])),ro(C("slider",[C("slider-dot","background-color: var(--n-dot-color-popover);")]))]),{onBeforeUpdate:ar}=await ue("vue");function hn(e){return window.TouchEvent&&e instanceof window.TouchEvent}function vn(){const e=new Map,t=n=>o=>{e.set(n,o)};return ar(()=>{e.clear()}),[e,t]}const{computed:Be,defineComponent:sr,h:me,nextTick:jt,onBeforeUnmount:dr,ref:We,toRef:cr,Transition:ur,watch:gn}=await ue("vue"),fr=0,hr=Object.assign(Object.assign({},Te.props),{to:ot.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),Br=sr({name:"Slider",props:hr,slots:Object,setup(e){const{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:o}=it(e),i=Te("Slider","-slider",lr,or,e,t),d=We(null),[a,s]=vn(),[v,h]=vn(),f=We(new Set),g=Gt(e),{mergedDisabledRef:y}=g,k=Be(()=>{const{step:u}=e;if(Number(u)<=0||u==="mark")return 0;const r=u.toString();let c=0;return r.includes(".")&&(c=r.length-r.indexOf(".")-1),c}),x=We(e.defaultValue),A=cr(e,"value"),j=Ct(A,x),z=Be(()=>{const{value:u}=j;return(e.range?u:[u]).map(b)}),P=Be(()=>z.value.length>2),M=Be(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),p=Be(()=>{const{marks:u}=e;return u?Object.keys(u).map(Number.parseFloat):null}),w=We(-1),E=We(-1),I=We(-1),$=We(!1),X=We(!1),_=Be(()=>{const{vertical:u,reverse:r}=e;return u?r?"top":"bottom":r?"right":"left"}),te=Be(()=>{if(P.value)return;const u=z.value,r=S(e.range?Math.min(...u):e.min),c=S(e.range?Math.max(...u):u[0]),{value:O}=_;return e.vertical?{[O]:`${r}%`,height:`${c-r}%`}:{[O]:`${r}%`,width:`${c-r}%`}}),ae=Be(()=>{const u=[],{marks:r}=e;if(r){const c=z.value.slice();c.sort((re,oe)=>re-oe);const{value:O}=_,{value:Q}=P,{range:ne}=e,ge=Q?()=>!1:re=>ne?re>=c[0]&&re<=c[c.length-1]:re<=c[0];for(const re of Object.keys(r)){const oe=Number(re);u.push({active:ge(oe),key:oe,label:r[re],style:{[O]:`${S(oe)}%`}})}}return u});function m(u,r){const c=S(u),{value:O}=_;return{[O]:`${c}%`,zIndex:r===w.value?1:0}}function T(u){return e.showTooltip||I.value===u||w.value===u&&$.value}function L(u){return $.value?!(w.value===u&&E.value===u):!0}function Z(u){var r;~u&&(w.value=u,(r=a.get(u))===null||r===void 0||r.focus())}function ee(){v.forEach((u,r)=>{T(r)&&u.syncPosition()})}function N(u){const{"onUpdate:value":r,onUpdateValue:c}=e,{nTriggerFormInput:O,nTriggerFormChange:Q}=g;c&&ce(c,u),r&&ce(r,u),x.value=u,O(),Q()}function J(u){const{range:r}=e;if(r){if(Array.isArray(u)){const{value:c}=z;u.join()!==c.join()&&N(u)}}else Array.isArray(u)||z.value[0]!==u&&N(u)}function H(u,r){if(e.range){const c=z.value.slice();c.splice(r,1,u),J(c)}else J(u)}function Y(u,r,c){const O=c!==void 0;c||(c=u-r>0?1:-1);const Q=p.value||[],{step:ne}=e;if(ne==="mark"){const oe=he(u,Q.concat(r),O?c:void 0);return oe?oe.value:r}if(ne<=0)return r;const{value:ge}=k;let re;if(O){const oe=Number((r/ne).toFixed(ge)),Se=Math.floor(oe),Xe=oe>Se?Se:Se-1,je=oe<Se?Se:Se+1;re=he(r,[Number((Xe*ne).toFixed(ge)),Number((je*ne).toFixed(ge)),...Q],c)}else{const oe=de(u);re=he(u,[...Q,oe])}return re?b(re.value):r}function b(u){return Math.min(e.max,Math.max(e.min,u))}function S(u){const{max:r,min:c}=e;return(u-c)/(r-c)*100}function q(u){const{max:r,min:c}=e;return c+(r-c)*u}function de(u){const{step:r,min:c}=e;if(Number(r)<=0||r==="mark")return u;const O=Math.round((u-c)/r)*r+c;return Number(O.toFixed(k.value))}function he(u,r=p.value,c){if(!r?.length)return null;let O=null,Q=-1;for(;++Q<r.length;){const ne=r[Q]-u,ge=Math.abs(ne);(c===void 0||ne*c>0)&&(O===null||ge<O.distance)&&(O={index:Q,distance:ge,value:r[Q]})}return O}function xe(u){const r=d.value;if(!r)return;const c=hn(u)?u.touches[0]:u,O=r.getBoundingClientRect();let Q;return e.vertical?Q=(O.bottom-c.clientY)/O.height:Q=(c.clientX-O.left)/O.width,e.reverse&&(Q=1-Q),q(Q)}function ve(u){if(y.value||!e.keyboard)return;const{vertical:r,reverse:c}=e;switch(u.key){case"ArrowUp":u.preventDefault(),se(r&&c?-1:1);break;case"ArrowRight":u.preventDefault(),se(!r&&c?-1:1);break;case"ArrowDown":u.preventDefault(),se(r&&c?1:-1);break;case"ArrowLeft":u.preventDefault(),se(!r&&c?1:-1);break}}function se(u){const r=w.value;if(r===-1)return;const{step:c}=e,O=z.value[r],Q=Number(c)<=0||c==="mark"?O:O+c*u;H(Y(Q,O,u>0?1:-1),r)}function De(u){var r,c;if(y.value||!hn(u)&&u.button!==fr)return;const O=xe(u);if(O===void 0)return;const Q=z.value.slice(),ne=e.range?(c=(r=he(O,Q))===null||r===void 0?void 0:r.index)!==null&&c!==void 0?c:-1:0;ne!==-1&&(u.preventDefault(),Z(ne),ze(),H(Y(O,z.value[ne]),ne))}function ze(){$.value||($.value=!0,e.onDragstart&&ce(e.onDragstart),gt("touchend",document,Me),gt("mouseup",document,Me),gt("touchmove",document,Oe),gt("mousemove",document,Oe))}function $e(){$.value&&($.value=!1,e.onDragend&&ce(e.onDragend),bt("touchend",document,Me),bt("mouseup",document,Me),bt("touchmove",document,Oe),bt("mousemove",document,Oe))}function Oe(u){const{value:r}=w;if(!$.value||r===-1){$e();return}const c=xe(u);c!==void 0&&H(Y(c,z.value[r]),r)}function Me(){$e()}function Ge(u){w.value=u,y.value||(I.value=u)}function _e(u){w.value===u&&(w.value=-1,$e()),I.value===u&&(I.value=-1)}function Ae(u){I.value=u}function qe(u){I.value===u&&(I.value=-1)}gn(w,(u,r)=>void jt(()=>E.value=r)),gn(j,()=>{if(e.marks){if(X.value)return;X.value=!0,jt(()=>{X.value=!1})}jt(ee)}),dr(()=>{$e()});const Ke=Be(()=>{const{self:{markFontSize:u,railColor:r,railColorHover:c,fillColor:O,fillColorHover:Q,handleColor:ne,opacityDisabled:ge,dotColor:re,dotColorModal:oe,handleBoxShadow:Se,handleBoxShadowHover:Xe,handleBoxShadowActive:je,handleBoxShadowFocus:Pe,dotBorder:l,dotBoxShadow:R,railHeight:B,railWidthVertical:U,handleSize:D,dotHeight:V,dotWidth:K,dotBorderRadius:ie,fontSize:Re,dotBorderActive:kt,dotColorPopover:Tt},common:{cubicBezierEaseInOut:Ft}}=i.value;return{"--n-bezier":Ft,"--n-dot-border":l,"--n-dot-border-active":kt,"--n-dot-border-radius":ie,"--n-dot-box-shadow":R,"--n-dot-color":re,"--n-dot-color-modal":oe,"--n-dot-color-popover":Tt,"--n-dot-height":V,"--n-dot-width":K,"--n-fill-color":O,"--n-fill-color-hover":Q,"--n-font-size":Re,"--n-handle-box-shadow":Se,"--n-handle-box-shadow-active":je,"--n-handle-box-shadow-focus":Pe,"--n-handle-box-shadow-hover":Xe,"--n-handle-color":ne,"--n-handle-size":D,"--n-opacity-disabled":ge,"--n-rail-color":r,"--n-rail-color-hover":c,"--n-rail-height":B,"--n-rail-width-vertical":U,"--n-mark-font-size":u}}),Ce=o?Qe("slider",void 0,Ke,e):void 0,Ee=Be(()=>{const{self:{fontSize:u,indicatorColor:r,indicatorBoxShadow:c,indicatorTextColor:O,indicatorBorderRadius:Q}}=i.value;return{"--n-font-size":u,"--n-indicator-border-radius":Q,"--n-indicator-box-shadow":c,"--n-indicator-color":r,"--n-indicator-text-color":O}}),pe=o?Qe("slider-indicator",void 0,Ee,e):void 0;return{mergedClsPrefix:t,namespace:n,uncontrolledValue:x,mergedValue:j,mergedDisabled:y,mergedPlacement:M,isMounted:kn(),adjustedTo:ot(e),dotTransitionDisabled:X,markInfos:ae,isShowTooltip:T,shouldKeepTooltipTransition:L,handleRailRef:d,setHandleRefs:s,setFollowerRefs:h,fillStyle:te,getHandleStyle:m,activeIndex:w,arrifiedValues:z,followerEnabledIndexSet:f,handleRailMouseDown:De,handleHandleFocus:Ge,handleHandleBlur:_e,handleHandleMouseEnter:Ae,handleHandleMouseLeave:qe,handleRailKeyDown:ve,indicatorCssVars:o?void 0:Ee,indicatorThemeClass:pe?.themeClass,indicatorOnRender:pe?.onRender,cssVars:o?void 0:Ke,themeClass:Ce?.themeClass,onRender:Ce?.onRender}},render(){var e;const{mergedClsPrefix:t,themeClass:n,formatTooltip:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),me("div",{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},me("div",{class:`${t}-slider-rail`},me("div",{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?me("div",{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(i=>me("div",{key:i.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:i.active}],style:i.style}))):null,me("div",{ref:"handleRailRef",class:`${t}-slider-handles`},this.arrifiedValues.map((i,d)=>{const a=this.isShowTooltip(d);return me(yn,null,{default:()=>[me(xn,null,{default:()=>me("div",{ref:this.setHandleRefs(d),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":i,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(i,d),onFocus:()=>{this.handleHandleFocus(d)},onBlur:()=>{this.handleHandleBlur(d)},onMouseenter:()=>{this.handleHandleMouseEnter(d)},onMouseleave:()=>{this.handleHandleMouseLeave(d)}},mn(this.$slots.thumb,()=>[me("div",{class:`${t}-slider-handle`})]))}),this.tooltip&&me(Cn,{ref:this.setFollowerRefs(d),show:a,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===ot.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>me(ur,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var s;return a?((s=this.indicatorOnRender)===null||s===void 0||s.call(this),me("div",{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof o=="function"?o(i):i)):null}})})]})})),this.marks?me("div",{class:`${t}-slider-marks`},this.markInfos.map(i=>me("div",{key:i.key,class:`${t}-slider-mark`,style:i.style},typeof i.label=="function"?i.label():i.label))):null))}}),vr=C("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[F("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),F("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),F("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),C("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Yt({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),F("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),F("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),F("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),le("&:focus",[F("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),W("round",[F("rail","border-radius: calc(var(--n-rail-height) / 2);",[F("button","border-radius: calc(var(--n-button-height) / 2);")])]),ft("disabled",[ft("icon",[W("rubber-band",[W("pressed",[F("rail",[F("button","max-width: var(--n-button-width-pressed);")])]),F("rail",[le("&:active",[F("button","max-width: var(--n-button-width-pressed);")])]),W("active",[W("pressed",[F("rail",[F("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),F("rail",[le("&:active",[F("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),W("active",[F("rail",[F("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),F("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[F("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Yt()]),F("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),W("active",[F("rail","background-color: var(--n-rail-color-active);")]),W("loading",[F("rail",`
 cursor: wait;
 `)]),W("disabled",[F("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),{computed:wt,defineComponent:gr,h:ye,ref:Ht,toRef:br,watchEffect:_r}=await ue("vue"),mr=Object.assign(Object.assign({},Te.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let st;const Ar=gr({name:"Switch",props:mr,slots:Object,setup(e){st===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?st=CSS.supports("width","max(1px)"):st=!1:st=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=it(e),o=Te("Switch","-switch",vr,rr,e,t),i=Gt(e),{mergedSizeRef:d,mergedDisabledRef:a}=i,s=Ht(e.defaultValue),v=br(e,"value"),h=Ct(v,s),f=wt(()=>h.value===e.checkedValue),g=Ht(!1),y=Ht(!1),k=wt(()=>{const{railStyle:$}=e;if($)return $({focused:y.value,checked:f.value})});function x($){const{"onUpdate:value":X,onChange:_,onUpdateValue:te}=e,{nTriggerFormInput:ae,nTriggerFormChange:m}=i;X&&ce(X,$),te&&ce(te,$),_&&ce(_,$),s.value=$,ae(),m()}function A(){const{nTriggerFormFocus:$}=i;$()}function j(){const{nTriggerFormBlur:$}=i;$()}function z(){e.loading||a.value||(h.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue))}function P(){y.value=!0,A()}function M(){y.value=!1,j(),g.value=!1}function p($){e.loading||a.value||$.key===" "&&(h.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue),g.value=!1)}function w($){e.loading||a.value||$.key===" "&&($.preventDefault(),g.value=!0)}const E=wt(()=>{const{value:$}=d,{self:{opacityDisabled:X,railColor:_,railColorActive:te,buttonBoxShadow:ae,buttonColor:m,boxShadowFocus:T,loadingColor:L,textColor:Z,iconColor:ee,[fe("buttonHeight",$)]:N,[fe("buttonWidth",$)]:J,[fe("buttonWidthPressed",$)]:H,[fe("railHeight",$)]:Y,[fe("railWidth",$)]:b,[fe("railBorderRadius",$)]:S,[fe("buttonBorderRadius",$)]:q},common:{cubicBezierEaseInOut:de}}=o.value;let he,xe,ve;return st?(he=`calc((${Y} - ${N}) / 2)`,xe=`max(${Y}, ${N})`,ve=`max(${b}, calc(${b} + ${N} - ${Y}))`):(he=Ue((ke(Y)-ke(N))/2),xe=Ue(Math.max(ke(Y),ke(N))),ve=ke(Y)>ke(N)?b:Ue(ke(b)+ke(N)-ke(Y))),{"--n-bezier":de,"--n-button-border-radius":q,"--n-button-box-shadow":ae,"--n-button-color":m,"--n-button-width":J,"--n-button-width-pressed":H,"--n-button-height":N,"--n-height":xe,"--n-offset":he,"--n-opacity-disabled":X,"--n-rail-border-radius":S,"--n-rail-color":_,"--n-rail-color-active":te,"--n-rail-height":Y,"--n-rail-width":b,"--n-width":ve,"--n-box-shadow-focus":T,"--n-loading-color":L,"--n-text-color":Z,"--n-icon-color":ee}}),I=n?Qe("switch",wt(()=>d.value[0]),E,e):void 0;return{handleClick:z,handleBlur:M,handleFocus:P,handleKeyup:p,handleKeydown:w,mergedRailStyle:k,pressed:g,mergedClsPrefix:t,mergedValue:h,checked:f,mergedDisabled:a,cssVars:n?void 0:E,themeClass:I?.themeClass,onRender:I?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:o,onRender:i,$slots:d}=this;i?.();const{checked:a,unchecked:s,icon:v,"checked-icon":h,"unchecked-icon":f}=d,g=!(zt(v)&&zt(h)&&zt(f));return ye("div",{role:"switch","aria-checked":n,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},ye("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},Le(a,y=>Le(s,k=>y||k?ye("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},ye("div",{class:`${e}-switch__rail-placeholder`},ye("div",{class:`${e}-switch__button-placeholder`}),y),ye("div",{class:`${e}-switch__rail-placeholder`},ye("div",{class:`${e}-switch__button-placeholder`}),k)):null)),ye("div",{class:`${e}-switch__button`},Le(v,y=>Le(h,k=>Le(f,x=>ye(xo,null,{default:()=>this.loading?ye(Fn,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(k||y)?ye("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||y):!this.checked&&(x||y)?ye("div",{class:`${e}-switch__button-icon`,key:x?"unchecked-icon":"icon"},x||y):null})))),Le(a,y=>y&&ye("div",{key:"checked",class:`${e}-switch__checked`},y)),Le(s,y=>y&&ye("div",{key:"unchecked",class:`${e}-switch__unchecked`},y)))))}});export{Wo as FinishedIcon,Yo as FocusDetector,ki as NEmpty,Ni as NInternalSelectMenu,Wi as NInternalSelection,Ir as NSelect,Br as NSlider,Ar as NSwitch,di as SubtreeNotLoadedError,rn as VOverflow,_o as VVirtualList,si as createIndexGetter,Ui as createTmOptions,xi as createTreeMate,Ri as emptyProps,wi as flatten,ln as getTitleAttribute,ct as happensIn,It as mergeEventHandlers,tr as selectProps,hr as sliderProps,mr as switchProps,On as useOnResize};
