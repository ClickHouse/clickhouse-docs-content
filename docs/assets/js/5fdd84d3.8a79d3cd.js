"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[90096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(o,".").concat(d)]||p[d]||g[d]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={slug:"/ru/engines/table-engines/special/set",sidebar_position:39,sidebar_label:"Set"},a="Set",l={unversionedId:"ru/engines/table-engines/special/set",id:"ru/engines/table-engines/special/set",title:"Set",description:"set}",source:"@site/docs/ru/engines/table-engines/special/set.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/set",permalink:"/docs/ru/engines/table-engines/special/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/set.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/ru/engines/table-engines/special/set",sidebar_position:39,sidebar_label:"Set"},sidebar:"russia",previous:{title:"Null",permalink:"/docs/ru/engines/table-engines/special/null"},next:{title:"Join",permalink:"/docs/ru/engines/table-engines/special/join"}},o={},c=[{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"join-limitations-and-settings",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set"},"Set"),(0,i.kt)("p",null,"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0435\u0435\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0435. \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 IN (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b \xab\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b IN\xbb)."),(0,i.kt)("p",null,"\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 INSERT-\u043e\u043c - \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u043e\u0432\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e, \u0441 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0434\u0443\u0431\u043b\u0438\u043a\u0430\u0442\u043e\u0432.\n\u041d\u043e \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435\u043b\u044c\u0437\u044f, \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e, \u0434\u0435\u043b\u0430\u0442\u044c SELECT. \u0415\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 IN."),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0435. \u041f\u0440\u0438 INSERT-\u0435, \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 \u0434\u0438\u0441\u043a\u0435, \u0442\u0430\u043a\u0436\u0435 \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u0431\u043b\u043e\u043a\u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043a\u0443. \u0422\u043e \u0435\u0441\u0442\u044c, \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430, \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043c\u0435\u0441\u0442\u0435."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0433\u0440\u0443\u0431\u043e\u043c \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0431\u043b\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0442\u0435\u0440\u044f\u043d \u0438\u043b\u0438 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d. \u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0441 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0451\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,i.kt)("h3",{id:"join-limitations-and-settings"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#persistent"},"persistent"))))}g.isMDXComponent=!0}}]);