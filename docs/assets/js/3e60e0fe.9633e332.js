"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[9472],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||s;return t?n.createElement(g,c(c({ref:r},i),{},{components:t})):n.createElement(g,c({ref:r},i))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,c=new Array(s);c[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<s;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const s={slug:"/ru/sql-reference/aggregate-functions/reference/sumkahan",sidebar_position:145},c="sumKahan",o={unversionedId:"ru/sql-reference/aggregate-functions/reference/sumkahan",id:"ru/sql-reference/aggregate-functions/reference/sumkahan",title:"sumKahan",description:"agg_function-sumKahan}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/sumkahan.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/sumkahan",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/sumkahan",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/sumkahan.md",tags:[],version:"current",sidebarPosition:145,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/sumkahan",sidebar_position:145},sidebar:"russia",previous:{title:"rankCorr",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/rankCorr"},next:{title:"intervalLengthSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/intervalLengthSum"}},l={},u=[],i={toc:u},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-sumKahan"},"sumKahan"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9A%D1%8D%D1%85%D1%8D%D0%BD%D0%B0"},"\u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443 \u041a\u044d\u0445\u044d\u043d\u0430"),".\n\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/sum"},"sum"),".\n\u041a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/float"},"Float")," \u0442\u0438\u043f\u043e\u0432."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sumKahan(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0412\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float"),", \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/decimal"},"Decimal"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0441\u0443\u043c\u043c\u0430 \u0447\u0438\u0441\u0435\u043b \u0441 \u0442\u0438\u043f\u043e\u043c ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float"),", \u0438\u043b ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/decimal"},"Decimal")," \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u043c \u043e\u0442 \u0442\u0438\u043f\u0430 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(0.1), sumKahan(0.1) FROM numbers(10);\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500sum(0.1)\u2500\u252c\u2500sumKahan(0.1)\u2500\u2510\n\u2502 0.9999999999999999 \u2502             1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);