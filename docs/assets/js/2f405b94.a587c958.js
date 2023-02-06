"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[52067],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6869:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={slug:"/ru/interfaces/",sidebar_label:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b",sidebar_position:14},c="\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b",l={unversionedId:"ru/interfaces/index",id:"ru/interfaces/index",title:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b",description:"interfaces}",source:"@site/docs/ru/interfaces/index.md",sourceDirName:"ru/interfaces",slug:"/ru/interfaces/",permalink:"/docs/ru/interfaces/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/interfaces/index.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{slug:"/ru/interfaces/",sidebar_label:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b",sidebar_position:14},sidebar:"russia",previous:{title:"Playground",permalink:"/docs/ru/getting-started/playground"},next:{title:"\u041a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",permalink:"/docs/ru/interfaces/cli"}},o={},u=[],s={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interfaces"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"),(0,a.kt)("p",null,"ClickHouse \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0440\u0438 \u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (\u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044b \u0432 TLS \u0434\u043b\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/http"},"HTTP"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0438 \u043f\u0440\u043e\u0441\u0442 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/tcp"},"Native TCP"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u043c\u0435\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u044b\u0445 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/grpc"},"gRPC"),".")),(0,a.kt)("p",null,"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0438\u043b\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443, \u0430 \u043d\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 ClickHouse. \u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u042f\u043d\u0434\u0435\u043a\u0441\u043e\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/jdbc"},"JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/odbc"},"ODBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cpp"},"C++ \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"),".")),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 ClickHouse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/third-party/client-libraries"},"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/third-party/integrations"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/third-party/gui"},"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"),".")))}f.isMDXComponent=!0}}]);