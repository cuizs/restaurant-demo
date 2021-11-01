var it=Object.defineProperty,rt=Object.defineProperties;var at=Object.getOwnPropertyDescriptors;var Te=Object.getOwnPropertySymbols;var lt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var fe=(e,o,i)=>o in e?it(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,h=(e,o)=>{for(var i in o||(o={}))lt.call(o,i)&&fe(e,i,o[i]);if(Te)for(var i of Te(o))ut.call(o,i)&&fe(e,i,o[i]);return e},ge=(e,o)=>rt(e,at(o));var Ce=(e,o,i)=>new Promise((c,d)=>{var E=g=>{try{u(i.next(g))}catch(S){d(S)}},a=g=>{try{u(i.throw(g))}catch(S){d(S)}},u=g=>g.done?c(g.value):Promise.resolve(g.value).then(E,a);u((i=i.apply(e,o)).next())});import{b as ne,a as ce,_ as se,am as _t,p as de,S as gt,at as ct,aD as De,ac as dt,i as Et,aq as St,as as Ot,w as pt,x as w,aL as Me,aM as Ee,aN as m,M as ie,h as W,aO as Ae,Z as re,N as Ne,aP as Re,aQ as Ie,J as ye,aR as Tt,aS as ft,aT as Ct,aU as Dt,Y as Mt,j as At,U as Nt,aV as Rt,aW as It,aX as yt,I as ht}from"./index.c3d9cc95.js";import{A as $,j as M,a0 as A,B as f,D as U,aa as H,a6 as C,a1 as ae,a5 as N,ad as Se,J as le,a4 as X,ac as V,K as P,X as he,c2 as bt,H as be,w as s,bf as Lt,r as j,u as t,t as x,S as Le,ah as Be,$ as Bt,be as wt,aC as we,F as mt,ao as Ut,aB as Pt,aR as Ft,P as me,af as kt,b2 as vt,bx as R}from"./vendor.8ad69e65.js";import{c as F,u as Gt,a as Wt}from"./index.0ef08c54.js";/* empty css               */const{t:Ue}=ne(),Pe={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:Ue("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:Ue("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},$t=h({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},Pe);const Ht=$({name:"BasicDrawerFooter",props:ge(h({},Pe),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:i}=ce("basic-drawer-footer"),c=M(()=>{const a=`${e.height}`;return{height:a,lineHeight:a}});function d(){o("ok")}function E(){o("close")}return{handleOk:d,prefixCls:i,handleClose:E,getStyle:c}}});function Xt(e,o,i,c,d,E){const a=A("a-button");return e.showFooter||e.$slots.footer?(f(),U("div",{key:0,class:P(e.prefixCls),style:he(e.getStyle)},[e.$slots.footer?C(e.$slots,"footer",{key:1}):(f(),U(H,{key:0},[C(e.$slots,"insertFooter"),e.showCancelBtn?(f(),ae(a,X({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:N(()=>[Se(le(e.cancelText),1)]),_:1},16,["onClick"])):V("",!0),C(e.$slots,"centerFooter"),e.showOkBtn?(f(),ae(a,X({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:N(()=>[Se(le(e.okText),1)]),_:1},16,["type","onClick","loading"])):V("",!0),C(e.$slots,"appendFooter")],64))],6)):V("",!0)}var Vt=se(Ht,[["render",Xt]]);const jt=$({name:"BasicDrawerHeader",components:{BasicTitle:_t,ArrowLeftOutlined:bt},props:{isDetail:de.bool,showDetailBack:de.bool,title:de.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:i}=ce("basic-drawer-header");function c(){o("close")}return{prefixCls:i,handleClose:c}}}),xt={key:1};function Kt(e,o,i,c,d,E){const a=A("BasicTitle"),u=A("ArrowLeftOutlined");return e.isDetail?(f(),U("div",{key:1,class:P([e.prefixCls,`${e.prefixCls}--detail`])},[be("span",{class:P(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),U("span",{key:0,onClick:o[0]||(o[0]=(...g)=>e.handleClose&&e.handleClose(...g))},[s(u,{class:P(`${e.prefixCls}__back`)},null,8,["class"])])):V("",!0),e.title?(f(),U("span",xt,le(e.title),1)):V("",!0)],2),be("span",{class:P(`${e.prefixCls}__toolbar`)},[C(e.$slots,"titleToolbar")],2)],2)):(f(),ae(a,{key:0,class:P(e.prefixCls)},{default:N(()=>[C(e.$slots,"title"),Se(" "+le(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var Yt=se(jt,[["render",Kt]]);const Qt=$({components:{Drawer:Lt,ScrollContainer:gt,DrawerFooter:Vt,DrawerHeader:Yt},inheritAttrs:!1,props:$t,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const i=j(!1),c=ct(),d=j(null),{t:E}=ne(),{prefixVar:a,prefixCls:u}=ce("basic-drawer"),g={setDrawerProps:v,emitVisible:void 0},S=Be();S&&o("register",g,S.uid);const D=M(()=>De(x(e),t(d))),T=M(()=>{const l=ge(h(h({placement:"right"},t(c)),t(D)),{visible:t(i)});l.title=void 0;const{isDetail:O,width:G,wrapClassName:Z,getContainer:J}=l;if(O){G||(l.width="100%");const ee=`${u}__detail`;l.wrapClassName=Z?`${Z} ${ee}`:ee,J||(l.getContainer=`.${a}-layout-content`)}return l}),k=M(()=>h(h({},c),t(T))),Q=M(()=>{const{footerHeight:l,showFooter:O}=t(T);return O&&l?dt(l)?`${l}px`:`${l.replace("px","")}px`:"0px"}),ue=M(()=>{const l=t(Q);return{position:"relative",height:`calc(100% - ${l})`}}),z=M(()=>{var l;return!!((l=t(T))==null?void 0:l.loading)});Le(()=>e.visible,(l,O)=>{l!==O&&(i.value=l)},{deep:!0}),Le(()=>i.value,l=>{Bt(()=>{var O;o("visible-change",l),S&&((O=g.emitVisible)==null||O.call(g,l,S.uid))})});function _e(l){return Ce(this,null,function*(){const{closeFunc:O}=t(T);if(o("close",l),O&&Et(O)){const G=yield O();i.value=!G;return}i.value=!1})}function v(l){d.value=De(t(d)||{},l),Reflect.has(l,"visible")&&(i.value=!!l.visible)}function q(){o("ok")}return{onClose:_e,t:E,prefixCls:u,getMergeProps:D,getScrollContentStyle:ue,getProps:T,getLoading:z,getBindValues:k,getFooterHeight:Q,handleOk:q}}});function zt(e,o,i,c,d,E){const a=A("DrawerHeader"),u=A("ScrollContainer"),g=A("DrawerFooter"),S=A("Drawer"),D=wt("loading");return f(),ae(S,X({class:e.prefixCls,onClose:e.onClose},e.getBindValues),we({default:N(()=>[mt(s(u,{style:he(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:N(()=>[C(e.$slots,"default")]),_:3},8,["style","loading-tip"]),[[D,e.getLoading]]),s(g,X(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),we({_:2},[Ut(Object.keys(e.$slots),T=>({name:T,fn:N(k=>[C(e.$slots,T,Pt(Ft(k||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:N(()=>[C(e.$slots,"title")])}:{name:"title",fn:N(()=>[s(a,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:N(()=>[C(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var qt=se(Qt,[["render",zt]]);const K=me({}),Fe=me({});function Zt(){if(!Be())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=j(null),o=j(!1),i=j("");function c(a,u){kt(()=>{e.value=null,o.value=null,K[t(i)]=null}),!(t(o)&&St()&&a===t(e))&&(i.value=u,e.value=a,o.value=!0,a.emitVisible=(g,S)=>{Fe[S]=g})}const d=()=>{const a=t(e);return a||Ot("useDrawer instance is undefined!"),a},E={setDrawerProps:a=>{var u;(u=d())==null||u.setDrawerProps(a)},getVisible:M(()=>Fe[~~t(i)]),openDrawer:(a=!0,u,g=!0)=>{var D;if((D=d())==null||D.setDrawerProps({visible:a}),!u)return;if(g){K[t(i)]=null,K[t(i)]=x(u);return}vt(x(K[t(i)]),x(u))||(K[t(i)]=x(u))},closeDrawer:()=>{var a;(a=d())==null||a.setDrawerProps({visible:!1})}};return[c,E]}const Jt=pt(qt),eo=F(()=>w(()=>import("./TypePicker.4162bb79.js"),["assets/TypePicker.4162bb79.js","assets/TypePicker.f8614c9e.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css"])),Oe=F(()=>w(()=>import("./ThemeColorPicker.468a562d.js"),["assets/ThemeColorPicker.468a562d.js","assets/ThemeColorPicker.8eb61909.css","assets/index.65674215.css","assets/index.35b5cf30.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css","assets/index.0ef08c54.js","assets/index.da3c7702.css","assets/index.cb2c96c8.js","assets/index.55076fdd.css","assets/useWindowSizeFn.a30aff12.js","assets/useContentViewHeight.e94b8dbb.js","assets/useSortable.7590b435.js","assets/lock.663de6d3.js"])),to=F(()=>w(()=>import("./SettingFooter.4d2c9fe5.js"),["assets/SettingFooter.4d2c9fe5.js","assets/SettingFooter.153b33d2.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css"])),_=F(()=>w(()=>import("./SwitchItem.1f38f4b3.js"),["assets/SwitchItem.1f38f4b3.js","assets/SwitchItem.458f0d56.css","assets/index.317f90e2.css","assets/index.65674215.css","assets/index.35b5cf30.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css","assets/index.0ef08c54.js","assets/index.da3c7702.css","assets/index.cb2c96c8.js","assets/index.55076fdd.css","assets/useWindowSizeFn.a30aff12.js","assets/useContentViewHeight.e94b8dbb.js","assets/useSortable.7590b435.js","assets/lock.663de6d3.js"])),Y=F(()=>w(()=>import("./SelectItem.f5c265f9.js"),["assets/SelectItem.f5c265f9.js","assets/SelectItem.809be52d.css","assets/index.65674215.css","assets/index.35b5cf30.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css","assets/index.0ef08c54.js","assets/index.da3c7702.css","assets/index.cb2c96c8.js","assets/index.55076fdd.css","assets/useWindowSizeFn.a30aff12.js","assets/useContentViewHeight.e94b8dbb.js","assets/useSortable.7590b435.js","assets/lock.663de6d3.js"])),ke=F(()=>w(()=>import("./InputNumberItem.f37c2b57.js"),["assets/InputNumberItem.f37c2b57.js","assets/InputNumberItem.228b843e.css","assets/index.553174f4.css","assets/index.65674215.css","assets/index.35b5cf30.css","assets/vendor.8ad69e65.js","assets/vendor.f5738a0c.css","assets/index.c3d9cc95.js","assets/index.4b35f950.css","assets/index.0ef08c54.js","assets/index.da3c7702.css","assets/index.cb2c96c8.js","assets/index.55076fdd.css","assets/useWindowSizeFn.a30aff12.js","assets/useContentViewHeight.e94b8dbb.js","assets/useSortable.7590b435.js","assets/lock.663de6d3.js"])),{t:p}=ne();var n;(function(e){e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION"})(n||(n={}));const oo=[{value:Me.FULL,label:p("layout.setting.contentModeFull")},{value:Me.FIXED,label:p("layout.setting.contentModeFixed")}],no=[{value:Ee.CENTER,label:p("layout.setting.topMenuAlignRight")},{value:Ee.START,label:p("layout.setting.topMenuAlignLeft")},{value:Ee.END,label:p("layout.setting.topMenuAlignCenter")}],so=e=>[{value:re.NONE,label:p("layout.setting.menuTriggerNone")},{value:re.FOOTER,label:p("layout.setting.menuTriggerBottom")},...e?[]:[{value:re.HEADER,label:p("layout.setting.menuTriggerTop")}]],io=[m.ZOOM_FADE,m.FADE,m.ZOOM_OUT,m.FADE_SIDE,m.FADE_BOTTOM,m.FADE_SCALE].map(e=>({label:e,value:e})),ro=[{title:p("layout.setting.menuTypeSidebar"),mode:ie.INLINE,type:W.SIDEBAR},{title:p("layout.setting.menuTypeMix"),mode:ie.INLINE,type:W.MIX},{title:p("layout.setting.menuTypeTopMenu"),mode:ie.HORIZONTAL,type:W.TOP_MENU},{title:p("layout.setting.menuTypeMixSidebar"),mode:ie.INLINE,type:W.MIX_SIDEBAR}],ao=[{value:Ae.HOVER,label:p("layout.setting.triggerHover")},{value:Ae.CLICK,label:p("layout.setting.triggerClick")}];function lo(e,o){const i=Ne(),c=uo(e,o);i.setProjectConfig(c),e===n.CHANGE_THEME&&(Re(),Ie())}function uo(e,o){const i=Ne(),{getThemeColor:c,getDarkMode:d}=ye();switch(e){case n.CHANGE_LAYOUT:const{mode:E,type:a,split:u}=o;return{menuSetting:h({mode:E,type:a,collapsed:!1,show:!0,hidden:!1},u===void 0?{split:u}:{})};case n.CHANGE_THEME_COLOR:return c.value===o?{}:(Dt(o),{themeColor:o});case n.CHANGE_THEME:return d.value===o?{}:(Ct(o),{});case n.MENU_HAS_DRAG:return{menuSetting:{canDrag:o}};case n.MENU_ACCORDION:return{menuSetting:{accordion:o}};case n.MENU_TRIGGER:return{menuSetting:{trigger:o}};case n.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:o}};case n.MENU_COLLAPSED:return{menuSetting:{collapsed:o}};case n.MENU_WIDTH:return{menuSetting:{menuWidth:o}};case n.MENU_SHOW_SIDEBAR:return{menuSetting:{show:o}};case n.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:o}};case n.MENU_THEME:return Ie(o),{menuSetting:{bgColor:o}};case n.MENU_SPLIT:return{menuSetting:{split:o}};case n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:o}};case n.MENU_FIXED:return{menuSetting:{fixed:o}};case n.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:o}};case n.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:o}};case n.OPEN_PAGE_LOADING:return i.setPageLoading(!1),{transitionSetting:{openPageLoading:o}};case n.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:o}};case n.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:o}};case n.OPEN_PROGRESS:return{transitionSetting:{openNProgress:o}};case n.LOCK_TIME:return{lockTime:o};case n.FULL_CONTENT:return{fullContent:o};case n.CONTENT_MODE:return{contentMode:o};case n.SHOW_BREADCRUMB:return{showBreadCrumb:o};case n.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:o};case n.GRAY_MODE:return ft(o),{grayMode:o};case n.SHOW_FOOTER:return{showFooter:o};case n.COLOR_WEAK:return Tt(o),{colorWeak:o};case n.SHOW_LOGO:return{showLogo:o};case n.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:o}};case n.TABS_SHOW:return{multiTabsSetting:{show:o}};case n.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:o}};case n.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:o}};case n.HEADER_THEME:return Re(o),{headerSetting:{bgColor:o}};case n.HEADER_SEARCH:return{headerSetting:{showSearch:o}};case n.HEADER_FIXED:return{headerSetting:{fixed:o}};case n.HEADER_SHOW:return{headerSetting:{show:o}};default:return{}}}const{t:r}=ne();var _o=$({name:"SettingDrawer",setup(e,{attrs:o}){const{getContentMode:i,getShowFooter:c,getShowBreadCrumb:d,getShowBreadCrumbIcon:E,getShowLogo:a,getFullContent:u,getColorWeak:g,getGrayMode:S,getLockTime:D,getShowDarkModeToggle:T,getThemeColor:k}=ye(),{getOpenPageLoading:Q,getBasicTransition:ue,getEnableTransition:z,getOpenNProgress:_e}=Mt(),{getIsHorizontal:v,getShowMenu:q,getMenuType:l,getTrigger:O,getCollapsedShowTitle:G,getMenuFixed:Z,getCollapsed:J,getCanDrag:ee,getTopMenuAlign:ve,getAccordion:Ge,getMenuWidth:We,getMenuBgColor:$e,getIsTopMenu:He,getSplit:te,getIsMixSidebar:I,getCloseMixSidebarOnChange:Xe,getMixSideTrigger:Ve,getMixSideFixed:je}=At(),{getShowHeader:b,getFixed:xe,getHeaderBgColor:Ke,getShowSearch:Ye}=Gt(),{getShowMultipleTab:oe,getShowQuick:Qe,getShowRedo:ze,getShowFold:qe}=Wt(),y=M(()=>t(q)&&!t(v));function Ze(){return s(H,null,[s(eo,{menuTypeList:ro,handler:L=>{lo(n.CHANGE_LAYOUT,{mode:L.mode,type:L.type,split:t(v)?!1:void 0})},def:t(l)},null)])}function Je(){return s(Oe,{colorList:It,def:t(Ke),event:n.HEADER_THEME},null)}function et(){return s(Oe,{colorList:yt,def:t($e),event:n.MENU_THEME},null)}function tt(){return s(Oe,{colorList:Rt,def:t(k),event:n.CHANGE_THEME_COLOR},null)}function ot(){let L=t(O);const pe=so(t(te));return pe.some(B=>B.value===L)||(L=re.FOOTER),s(H,null,[s(_,{title:r("layout.setting.splitMenu"),event:n.MENU_SPLIT,def:t(te),disabled:!t(y)||t(l)!==W.MIX},null),s(_,{title:r("layout.setting.mixSidebarFixed"),event:n.MENU_FIXED_MIX_SIDEBAR,def:t(je),disabled:!t(I)},null),s(_,{title:r("layout.setting.closeMixSidebarOnChange"),event:n.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:t(Xe),disabled:!t(I)},null),s(_,{title:r("layout.setting.menuCollapse"),event:n.MENU_COLLAPSED,def:t(J),disabled:!t(y)},null),s(_,{title:r("layout.setting.menuDrag"),event:n.MENU_HAS_DRAG,def:t(ee),disabled:!t(y)},null),s(_,{title:r("layout.setting.menuSearch"),event:n.HEADER_SEARCH,def:t(Ye),disabled:!t(b)},null),s(_,{title:r("layout.setting.menuAccordion"),event:n.MENU_ACCORDION,def:t(Ge),disabled:!t(y)},null),s(_,{title:r("layout.setting.collapseMenuDisplayName"),event:n.MENU_COLLAPSED_SHOW_TITLE,def:t(G),disabled:!t(y)||!t(J)||t(I)},null),s(_,{title:r("layout.setting.fixedHeader"),event:n.HEADER_FIXED,def:t(xe),disabled:!t(b)},null),s(_,{title:r("layout.setting.fixedSideBar"),event:n.MENU_FIXED,def:t(Z),disabled:!t(y)||t(I)},null),s(Y,{title:r("layout.setting.mixSidebarTrigger"),event:n.MENU_TRIGGER_MIX_SIDEBAR,def:t(Ve),options:ao,disabled:!t(I)},null),s(Y,{title:r("layout.setting.topMenuLayout"),event:n.MENU_TOP_ALIGN,def:t(ve),options:no,disabled:!t(b)||t(te)||!t(He)&&!t(te)||t(I)},null),s(Y,{title:r("layout.setting.menuCollapseButton"),event:n.MENU_TRIGGER,def:L,options:pe,disabled:!t(y)||t(I)},null),s(Y,{title:r("layout.setting.contentMode"),event:n.CONTENT_MODE,def:t(i),options:oo},null),s(ke,{title:r("layout.setting.autoScreenLock"),min:0,event:n.LOCK_TIME,defaultValue:t(D),formatter:B=>parseInt(B)===0?`0(${r("layout.setting.notAutoScreenLock")})`:`${B}${r("layout.setting.minute")}`},null),s(ke,{title:r("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:n.MENU_WIDTH,disabled:!t(y),defaultValue:t(We),formatter:B=>`${parseInt(B)}px`},null)])}function nt(){return s(H,null,[s(_,{title:r("layout.setting.breadcrumb"),event:n.SHOW_BREADCRUMB,def:t(d),disabled:!t(b)},null),s(_,{title:r("layout.setting.breadcrumbIcon"),event:n.SHOW_BREADCRUMB_ICON,def:t(E),disabled:!t(b)},null),s(_,{title:r("layout.setting.tabs"),event:n.TABS_SHOW,def:t(oe)},null),s(_,{title:r("layout.setting.tabsRedoBtn"),event:n.TABS_SHOW_REDO,def:t(ze),disabled:!t(oe)},null),s(_,{title:r("layout.setting.tabsQuickBtn"),event:n.TABS_SHOW_QUICK,def:t(Qe),disabled:!t(oe)},null),s(_,{title:r("layout.setting.tabsFoldBtn"),event:n.TABS_SHOW_FOLD,def:t(qe),disabled:!t(oe)},null),s(_,{title:r("layout.setting.sidebar"),event:n.MENU_SHOW_SIDEBAR,def:t(q),disabled:t(v)},null),s(_,{title:r("layout.setting.header"),event:n.HEADER_SHOW,def:t(b)},null),s(_,{title:"Logo",event:n.SHOW_LOGO,def:t(a),disabled:t(I)},null),s(_,{title:r("layout.setting.footer"),event:n.SHOW_FOOTER,def:t(c)},null),s(_,{title:r("layout.setting.fullContent"),event:n.FULL_CONTENT,def:t(u)},null),s(_,{title:r("layout.setting.grayMode"),event:n.GRAY_MODE,def:t(S)},null),s(_,{title:r("layout.setting.colorWeak"),event:n.COLOR_WEAK,def:t(g)},null)])}function st(){return s(H,null,[s(_,{title:r("layout.setting.progress"),event:n.OPEN_PROGRESS,def:t(_e)},null),s(_,{title:r("layout.setting.switchLoading"),event:n.OPEN_PAGE_LOADING,def:t(Q)},null),s(_,{title:r("layout.setting.switchAnimation"),event:n.OPEN_ROUTE_TRANSITION,def:t(z)},null),s(Y,{title:r("layout.setting.animationType"),event:n.ROUTER_TRANSITION,def:t(ue),options:io,disabled:!t(z)},null)])}return()=>s(Jt,X(o,{title:r("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[t(T)&&s(R,null,{default:()=>r("layout.setting.darkMode")}),t(T)&&s(Nt,{class:"mx-auto"},null),s(R,null,{default:()=>r("layout.setting.navMode")}),Ze(),s(R,null,{default:()=>r("layout.setting.sysTheme")}),tt(),s(R,null,{default:()=>r("layout.setting.headerTheme")}),Je(),s(R,null,{default:()=>r("layout.setting.sidebarTheme")}),et(),s(R,null,{default:()=>r("layout.setting.interfaceFunction")}),ot(),s(R,null,{default:()=>r("layout.setting.interfaceDisplay")}),nt(),s(R,null,{default:()=>r("layout.setting.animation")}),st(),s(R,null,null),s(to,null,null)]})}});const go=$({name:"SettingButton",components:{SettingDrawer:_o,Icon:ht},setup(){const[e,{openDrawer:o}]=Zt();return{register:e,openDrawer:o}}});function co(e,o,i,c,d,E){const a=A("Icon"),u=A("SettingDrawer");return f(),U("div",{onClick:o[0]||(o[0]=g=>e.openDrawer(!0))},[s(a,{icon:"ion:settings-outline"}),s(u,{onRegister:e.register},null,8,["onRegister"])])}var Eo=se(go,[["render",co]]),Do=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Eo});export{lo as b,Do as i};
