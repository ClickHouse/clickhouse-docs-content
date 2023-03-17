"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[92795],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,g=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(g,c(c({ref:r},u),{},{components:t})):n.createElement(g,c({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[f]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47499:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/max",sidebar_position:3,title:"max"},c=void 0,s={unversionedId:"en/sql-reference/aggregate-functions/reference/max",id:"en/sql-reference/aggregate-functions/reference/max",title:"max",description:"Aggregate function that calculates the maximum across a group of values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/max.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/max",permalink:"/docs/en/sql-reference/aggregate-functions/reference/max",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/max.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/max",sidebar_position:3,title:"max"},sidebar:"sqlreference",previous:{title:"min",permalink:"/docs/en/sql-reference/aggregate-functions/reference/min"},next:{title:"sum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/sum"}},i={},l=[],u={toc:l},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aggregate function that calculates the maximum across a group of values."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT max(salary) FROM employees;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT department, max(salary) FROM employees GROUP BY department;\n")),(0,a.kt)("p",null,"If you need non-aggregate function to choose a maximum of two values, see ",(0,a.kt)("inlineCode",{parentName:"p"},"greatest"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT greatest(a, b) FROM table;\n")))}p.isMDXComponent=!0}}]);