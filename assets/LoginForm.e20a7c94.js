var h=(_,m,i)=>new Promise((r,p)=>{var t=n=>{try{u(i.next(n))}catch(c){p(c)}},g=n=>{try{u(i.throw(n))}catch(c){p(c)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(t,g);u((i=i.apply(_,m)).next())});import{A as N,aY as F,an as L,r as w,P as U,j as K,u as e,a0 as R,B as V,D as $,F as I,G as j,w as s,a5 as a,ad as v,J as x,aS as D,aZ as G,aa as O,a_ as q,a$ as J}from"./vendor.23ce95de.js";/* empty css              *//* empty css               */import{b as W,a as Y,c as Z,d as H}from"./index.d38a1b7d.js";import{u as Q,a as X,L as E,b as ee}from"./useLogin.b882a980.js";const re=N({setup(_){const m=q,i=J,r=F.Item,p=L.Password,{t}=W(),{createErrorModal:g}=H(),{prefixCls:u}=Y("login"),n=Z(),{setLoginState:c,getLoginState:T}=Q(),{getFormRules:z}=X(),S=w(),y=w(!1),b=w(!1),d=U({account:"18321272720",password:"123456"}),{validForm:B}=ee(S),k=K(()=>e(T)===E.LOGIN);function C(){return h(this,null,function*(){const f=yield B();if(!!f)try{y.value=!0;const o=yield n.login({password:f.password,username:f.account,mode:"none"})}catch(o){g({title:t("sys.api.errorTip"),content:o.message||t("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${u}`)||document.body})}finally{y.value=!1}})}return(f,o)=>{const M=R("LoginFormTitle"),P=R("Checkbox");return V(),$(O,null,[I(s(M,{class:"enter-x"},null,512),[[j,e(k)]]),I(s(e(F),{class:"p-4 enter-x",model:e(d),rules:e(z),ref:(l,A)=>{A.formRef=l,S.value=l},onKeypress:G(C,["enter"])},{default:a(()=>[s(e(r),{name:"account",class:"enter-x"},{default:a(()=>[s(e(L),{size:"large",value:e(d).account,"onUpdate:value":o[0]||(o[0]=l=>e(d).account=l),placeholder:e(t)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(r),{name:"password",class:"enter-x"},{default:a(()=>[s(e(p),{size:"large",visibilityToggle:"",value:e(d).password,"onUpdate:value":o[1]||(o[1]=l=>e(d).password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(m),{span:12},{default:a(()=>[s(e(r),null,{default:a(()=>[s(P,{checked:b.value,"onUpdate:checked":o[2]||(o[2]=l=>b.value=l),size:"small"},{default:a(()=>[v(x(e(t)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(m),{span:12},{default:a(()=>[s(e(r),{style:{"text-align":"right"}},{default:a(()=>[s(e(D),{type:"link",size:"small",onClick:o[3]||(o[3]=l=>e(c)(e(E).RESET_PASSWORD))},{default:a(()=>[v(x(e(t)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(r),{class:"enter-x"},{default:a(()=>[s(e(D),{type:"primary",size:"large",block:"",onClick:C,loading:y.value},{default:a(()=>[v(x(e(t)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules","onKeypress"]),[[j,e(k)]])],64)}}});export{re as default};
