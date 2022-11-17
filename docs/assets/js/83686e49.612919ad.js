"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49885],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),g=o,m=f["".concat(p,".").concat(g)]||f[g]||l[g]||c;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67441:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const c={slug:"/ru/sql-reference/aggregate-functions/reference/covarpop",sidebar_position:36},a="covarPop",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/covarpop",id:"ru/sql-reference/aggregate-functions/reference/covarpop",title:"covarPop",description:"covarpop}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/covarpop.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/covarpop",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/covarpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/covarpop.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/covarpop",sidebar_position:36},sidebar:"russia",previous:{title:"varSamp",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/varsamp"},next:{title:"covarSamp",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/covarsamp"}},p={},s=[],u={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"covarpop"},"covarPop"),(0,o.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,o.kt)("inlineCode",{parentName:"p"},"covarPop(x, y)")),(0,o.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / n"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c. \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0447\u0451\u0442\u043e\u0432 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 [\u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c](https://ru.wikipedia.org/wiki/\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f_\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e `covarPopStable`. \u041e\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435, \u043d\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443.\n:::\n')))}l.isMDXComponent=!0}}]);