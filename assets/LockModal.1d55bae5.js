var f=(e,c,o)=>new Promise((m,r)=>{var p=s=>{try{a(o.next(s))}catch(n){r(n)}},t=s=>{try{a(o.throw(s))}catch(n){r(n)}},a=s=>s.done?m(s.value):Promise.resolve(s.value).then(p,t);a((o=o.apply(e,c)).next())});import{_ as w,a as C,c as y,b as F}from"./index.c3d9cc95.js";import{B as $,a as x}from"./index.86a1f7f9.js";import{B as S,h as L}from"./useForm.314e3c06.js";import{u as M}from"./lock.663de6d3.js";import{h as b}from"./header.d801b988.js";import{A as I,j as _,a0 as u,B as N,a1 as R,a5 as g,H as l,K as d,J as k,w as h,ad as P,a4 as U}from"./vendor.8ad69e65.js";import"./useWindowSizeFn.a30aff12.js";/* empty css              *//* empty css               *//* empty css               */import"./index.582013d5.js";/* empty css               *//* empty css               *//* empty css               */import"./index.7b8f33f8.js";import"./download.d50eaa9f.js";const V=I({name:"LockModal",components:{BasicModal:$,BasicForm:S},setup(){const{t:e}=F(),{prefixCls:c}=C("header-lock-modal"),o=y(),m=M(),r=_(()=>{var i;return(i=o.getUserInfo)==null?void 0:i.realName}),[p,{closeModal:t}]=x(),[a,{validateFields:s,resetFields:n}]=L({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});function j(){return f(this,null,function*(){const B=(yield s()).password;t(),m.setLockInfo({isLock:!0,pwd:B}),yield n()})}const v=_(()=>{const{avatar:i}=o.getUserInfo;return i||b});return{t:e,prefixCls:c,getRealName:r,register:p,registerForm:a,handleLock:j,avatar:v}}}),z=["src"];function A(e,c,o,m,r,p){const t=u("BasicForm"),a=u("a-button"),s=u("BasicModal");return N(),R(s,U({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[l("div",{class:d(`${e.prefixCls}__entry`)},[l("div",{class:d(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:d(`${e.prefixCls}__header-img`)},null,10,z),l("p",{class:d(`${e.prefixCls}__header-name`)},k(e.getRealName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:d(`${e.prefixCls}__footer`)},[h(a,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[P(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var ae=w(V,[["render",A]]);export{ae as default};
