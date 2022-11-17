"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35865],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?t.createElement(g,c(c({ref:r},l),{},{components:n})):t.createElement(g,c({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45620:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/ru/sql-reference/aggregate-functions/reference/varsamp",sidebar_position:33},c="varSamp",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/varsamp",id:"ru/sql-reference/aggregate-functions/reference/varsamp",title:"varSamp",description:"varsamp}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/varsamp.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/varsamp",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/varsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/varsamp.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/varsamp",sidebar_position:33},sidebar:"russia",previous:{title:"varPop(x)",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/varpop"},next:{title:"covarPop",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/covarpop"}},p={},s=[],l={toc:s};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"varsamp"},"varSamp"),(0,a.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)^2) / (n - 1)"),", \u0433\u0434\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," - \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u044b\u0431\u043e\u0440\u043a\u0438, ",(0,a.kt)("inlineCode",{parentName:"p"},"x\u0305"),"- \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,a.kt)("p",null,"\u041e\u043d\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u0441\u043c\u0435\u0449\u0451\u043d\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u043a\u0443 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b, \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u043e\u0439 \u044d\u0442\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b."),(0,a.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"Float64"),". \u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"n <= 1"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"+\u221e"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c. \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 [\u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c](https://ru.wikipedia.org/wiki/\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e `varSampStable`. \u041e\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443.\n:::\n')))}u.isMDXComponent=!0}}]);