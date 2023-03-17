"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[82385],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=a,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return t?n.createElement(m,s(s({ref:r},f),{},{components:t})):n.createElement(m,s({ref:r},f))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29448:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/stddevsamp",sidebar_position:31},s="stddevSamp",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/stddevsamp",id:"zh/sql-reference/aggregate-functions/reference/stddevsamp",title:"stddevSamp",description:"stddevsamp}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/stddevsamp.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/stddevsamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stddevsamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/stddevsamp.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/stddevsamp",sidebar_position:31},sidebar:"chinese",previous:{title:"stddevPop",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stddevpop"},next:{title:"varPop(x)",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/varpop"}},i={},p=[],f={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stddevsamp"},"stddevSamp"),(0,a.kt)("p",null,"\u7ed3\u679c\u7b49\u4e8e ","[varSamp]"," (../../../sql-reference/aggregate-functions/reference/varsamp.md)\u7684\u5e73\u65b9\u6839\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"stddevSampStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002")))}u.isMDXComponent=!0}}]);