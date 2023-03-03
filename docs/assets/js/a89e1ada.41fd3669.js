"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[40945],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44618:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/varsamp",sidebar_position:33},i="varSamp",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/varsamp",id:"zh/sql-reference/aggregate-functions/reference/varsamp",title:"varSamp",description:"varsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/varsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/varsamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/varsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/varsamp.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/varsamp",sidebar_position:33},sidebar:"chinese",previous:{title:"varPop(x)",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/varpop"},next:{title:"covarPop",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/covarpop"}},p={},s=[],l={toc:s},f="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"varsamp"},"varSamp"),(0,a.kt)("p",null,"\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)^2) / (n - 1)"),"\uff0c\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u662f\u6837\u672c\u5927\u5c0f\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"x\u0305"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\u7684\u5e73\u5747\u503c\u3002"),(0,a.kt)("p",null,"\u5b83\u8868\u793a\u968f\u673a\u53d8\u91cf\u7684\u65b9\u5dee\u7684\u65e0\u504f\u4f30\u8ba1\uff0c\u5982\u679c\u4f20\u9012\u7684\u503c\u5f62\u6210\u5176\u6837\u672c\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"Float64"),"\u3002 \u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"n <= 1"),"\uff0c\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"+\u221e"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"varSampStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002")))}u.isMDXComponent=!0}}]);