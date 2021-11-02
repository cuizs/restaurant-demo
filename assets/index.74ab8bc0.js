import{_ as M,x as D,p as b,a as I,c as x,b as S,z as $}from"./index.f6b546bc.js";import{A as U,aA as A,az as v,j as N,a0 as n,B as t,D as O,w as s,a5 as m,a1 as f,ac as _,H as a,K as r,J as V,aa as B}from"./vendor.87297164.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as w,u as P}from"./index.27ab9df2.js";import{b as R}from"./index.b5dcfc37.js";import{h as z}from"./header.d801b988.js";import"./index.d6e3f7e9.js";import"./useWindowSizeFn.d18c63aa.js";import"./useContentViewHeight.b4dfe49e.js";/* empty css               */import"./useSortable.6fddff95.js";import"./lock.da77e750.js";const H=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:w(()=>D(()=>import("./DropMenuItem.19f21aa1.js"),["assets/DropMenuItem.19f21aa1.js","assets/vendor.87297164.js","assets/vendor.f5738a0c.css","assets/index.f6b546bc.js","assets/index.4b35f950.css"])),MenuDivider:v.Divider,LockAction:w(()=>D(()=>import("./LockModal.de97f873.js"),["assets/LockModal.de97f873.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.f6b546bc.js","assets/index.4b35f950.css","assets/vendor.87297164.js","assets/vendor.f5738a0c.css","assets/index.b5dcfc37.js","assets/index.2439e102.css","assets/useWindowSizeFn.d18c63aa.js","assets/useForm.003da690.js","assets/useForm.f0aa9a7e.css","assets/index.ceec4995.js","assets/index.167a2e11.css","assets/index.4927db73.js","assets/index.7b8b5e30.css","assets/download.ddbd5584.js","assets/lock.da77e750.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:j,desc:L}=i.getUserInfo||{};return{realName:u,avatar:j||z,desc:L}}),[o,{openModal:c}]=R();function d(){c(!0)}function l(){i.confirmLoginOut()}function p(){$(E)}function y(u){switch(u.key){case"logout":l();break;case"doc":p();break;case"lock":d();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:y,getShowDoc:k,register:o,getUseLockPage:h}}}),T=["src"];function F(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),d=n("Menu"),l=n("Dropdown"),p=n("LockAction");return t(),O(B,null,[s(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[s(d,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),s(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,T),a("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),s(p,{onRegister:e.register},null,8,["onRegister"])],64)}var te=M(H,[["render",F]]);export{te as default};
