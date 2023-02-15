"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[23615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),k=n,f=c["".concat(i,".").concat(k)]||c[k]||m[k]||l;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},50569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/ru/operations/access-rights",sidebar_position:48,sidebar_label:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c"},s="\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c",o={unversionedId:"ru/operations/access-rights",id:"ru/operations/access-rights",title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c",description:"access-control}",source:"@site/docs/ru/operations/access-rights.md",sourceDirName:"ru/operations",slug:"/ru/operations/access-rights",permalink:"/docs/ru/operations/access-rights",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/access-rights.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/ru/operations/access-rights",sidebar_position:48,sidebar_label:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c"},sidebar:"russia",previous:{title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 ClickHouse",permalink:"/docs/ru/operations/update"},next:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438",permalink:"/docs/ru/operations/external-authenticators/"}},i={},p=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"access-control-usage",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",id:"access-control-properties",level:3},{value:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",id:"user-account-management",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"access-control-settings-applying",level:3},{value:"\u0420\u043e\u043b\u044c",id:"role-management",level:2},{value:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c",id:"row-policy-management",level:2},{value:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"settings-profiles-management",level:2},{value:"\u041a\u0432\u043e\u0442\u0430",id:"quotas-management",level:2},{value:"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c",id:"enabling-access-control",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"access-control"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c"),(0,n.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0430 ",(0,n.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BE%D0%BC_%D0%BD%D0%B0_%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B5_%D1%80%D0%BE%D0%BB%D0%B5%D0%B9"},"RBAC"),"."),(0,n.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 ClickHouse:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#user-account-management"},"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#role-management"},"\u0420\u043e\u043b\u044c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#row-policy-management"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#settings-profiles-management"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#quotas-management"},"\u041a\u0432\u043e\u0442\u0430"))),(0,n.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0432\u043e\u0440\u043a\u0444\u043b\u043e\u0443."),(0,n.kt)("p",{parentName:"li"},"  \u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",(0,n.kt)("a",{parentName:"p",href:"#enabling-access-control"},"\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/configuration-files"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b")," \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ",(0,n.kt)("inlineCode",{parentName:"p"},"users.xml")," \u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"config.xml"),"."))),(0,n.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c SQL-\u0432\u043e\u0440\u043a\u0444\u043b\u043e\u0443. \u041e\u0431\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u043f\u043e\u044d\u0442\u043e\u043c\u0443, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043b\u0430\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 SQL-\u0432\u043e\u0440\u043a\u0444\u043b\u043e\u0443."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u0438\u043c \u0438 \u0442\u0435\u043c \u0436\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430.\n:::\n')),(0,n.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u0440\u043e\u043b\u0435\u0439, \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u0438 \u043f\u0440., \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432\u0441\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/show#show-access-statement"},"SHOW ACCESS"),"."),(0,n.kt)("h2",{id:"access-control-usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,n.kt)("inlineCode",{parentName:"p"},"default"),", \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c, \u043d\u043e \u0443 \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f. \u0410\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445. \u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"default")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/distributed"},"user \u0438 password"),"."),(0,n.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0447\u0430\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ClickHouse \u043d\u0435\u0434\u0430\u0432\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#enabling-access-control"},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435")," SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,n.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,n.kt)("li",{parentName:"ol"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u0438 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0432\u0441\u0435\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 (",(0,n.kt)("inlineCode",{parentName:"li"},"GRANT ALL ON *.* TO admin_user_account WITH GRANT OPTION"),")."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/permissions-for-queries#permissions_for_queries"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u044c\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f")," \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0434\u043b\u044f \u043d\u0435\u0433\u043e SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c.")),(0,n.kt)("h3",{id:"access-control-properties"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."),(0,n.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u0441\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043d\u0435\u0439 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043d\u0435 \u043e\u0442\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f. \u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0442\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u0438\u043c\u0435\u043d\u0435\u043c, \u0432\u0441\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0441\u0442\u0430\u043d\u0443\u0442\u0441\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,n.kt)("inlineCode",{parentName:"li"},"REVOKE ALL PRIVILEGES ON db.table FROM ALL"),"."),(0,n.kt)("li",{parentName:"ul"},"\u0423 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u043d\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0436\u0438\u0437\u043d\u0438.")),(0,n.kt)("h2",{id:"user-account-management"},"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,n.kt)("p",null,"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u2014 \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e \u0432 ClickHouse. \u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/grant#grant-privileges"},"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438"),", \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c."),(0,n.kt)("li",{parentName:"ul"},"\u0425\u043e\u0441\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse."),(0,n.kt)("li",{parentName:"ul"},"\u041d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0438 \u0440\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,n.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,n.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.")),(0,n.kt)("p",null,"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant"},"GRANT")," \u0438\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,n.kt)("a",{parentName:"p",href:"#role-management"},"\u0440\u043e\u043b\u0435\u0439"),". \u041e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/revoke"},"REVOKE"),". \u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/show#show-grants-statement"},"SHOW GRANTS"),"."),(0,n.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/user#create-user-statement"},"CREATE USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/user"},"ALTER USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop#drop-user"},"DROP USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-create-user-statement"},"SHOW CREATE USER"))),(0,n.kt)("h3",{id:"access-control-settings-applying"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,n.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u044b \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438: \u0434\u043b\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0434\u043b\u044f \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0445 \u0435\u043c\u0443 \u0440\u043e\u043b\u0435\u0439 \u0438\u043b\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a. \u041f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0435\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u0435\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 (\u043e\u0442 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u043a \u043d\u0438\u0437\u0448\u0435\u043c\u0443):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."),(0,n.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u043e\u043b\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430. \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0440\u043e\u043b\u0435\u0439, \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d."),(0,n.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0437 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u0435\u0433\u043e \u0440\u043e\u043b\u044f\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u044f\u0445, \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d."),(0,n.kt)("li",{parentName:"ol"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443, \u0438\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0437 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/server-configuration-parameters/settings#default-profile"},"\u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),".")),(0,n.kt)("h2",{id:"role-management"},"\u0420\u043e\u043b\u044c"),(0,n.kt)("p",null,"\u0420\u043e\u043b\u044c \u2014 \u044d\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,n.kt)("p",null,"\u0420\u043e\u043b\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/grant#grant-privileges"},"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438")),(0,n.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,n.kt)("li",{parentName:"ul"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0445 \u0440\u043e\u043b\u0435\u0439")),(0,n.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/#create-role-statement"},"CREATE ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/role"},"ALTER ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop#drop-role"},"DROP ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/set-role"},"SET ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/set-role#set-default-role"},"SET DEFAULT ROLE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-create-role-statement"},"SHOW CREATE ROLE"))),(0,n.kt)("p",null,"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant"},"GRANT"),". \u0414\u043b\u044f \u043e\u0442\u0437\u044b\u0432\u0430 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u0443 \u0440\u043e\u043b\u0438 ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/revoke"},"REVOKE"),"."),(0,n.kt)("h2",{id:"row-policy-management"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c"),(0,n.kt)("p",null,"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0442\u0440\u043e\u043a\u0430\u043c \u2014 \u044d\u0442\u043e \u0444\u0438\u043b\u044c\u0442\u0440, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0439, \u043a\u0430\u043a\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u0440\u043e\u043b\u0438. \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u0443\u044e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443."),(0,n.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/#create-row-policy-statement"},"CREATE ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/row-policy"},"ALTER ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop#drop-row-policy"},"DROP ROW POLICY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-create-row-policy-statement"},"SHOW CREATE ROW POLICY"))),(0,n.kt)("h2",{id:"settings-profiles-management"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,n.kt)("p",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u2014 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),". \u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c."),(0,n.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/#create-settings-profile-statement"},"CREATE SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/settings-profile"},"ALTER SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop#drop-settings-profile"},"DROP SETTINGS PROFILE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-create-settings-profile-statement"},"SHOW CREATE SETTINGS PROFILE"))),(0,n.kt)("h2",{id:"quotas-management"},"\u041a\u0432\u043e\u0442\u0430"),(0,n.kt)("p",null,"\u041a\u0432\u043e\u0442\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u0421\u043c. ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/quotas"},"\u041a\u0432\u043e\u0442\u044b"),"."),(0,n.kt)("p",null,"\u041a\u0432\u043e\u0442\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0430\u0431\u043e\u0440 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u043e\u043b\u0435\u0439 \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u0430\u044f \u043a\u0432\u043e\u0442\u0430."),(0,n.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/#create-quota-statement"},"CREATE QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/quota"},"ALTER QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop#drop-quota"},"DROP QUOTA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-create-quota-statement"},"SHOW CREATE QUOTA"))),(0,n.kt)("h2",{id:"enabling-access-control"},"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0439."),(0,n.kt)("p",{parentName:"li"},"  ClickHouse \u0445\u0440\u0430\u043d\u0438\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u043c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#access_control_path"},"access_control_path"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 SQL-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430."),(0,n.kt)("p",{parentName:"li"},"  \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 SQL \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u0412\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"users.xml")," \u0438 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 1 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0443 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings-users#access_management-user-setting"},"access_management"),"."))))}m.isMDXComponent=!0}}]);