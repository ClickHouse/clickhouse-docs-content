"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[52752],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,g=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return t?n.createElement(g,s(s({ref:r},f),{},{components:t})):n.createElement(g,s({ref:r},f))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75437:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},s="sumWithOverflow",i={unversionedId:"en/sql-reference/aggregate-functions/reference/sumwithoverflow",id:"en/sql-reference/aggregate-functions/reference/sumwithoverflow",title:"sumWithOverflow",description:"Computes the sum of the numbers, using the same data type for the result as for the input parameters. If the sum exceeds the maximum value for this data type, it is calculated with overflow.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/sumwithoverflow",permalink:"/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/sumwithoverflow",sidebar_position:140},sidebar:"english",previous:{title:"groupBitmapXor",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor"},next:{title:"deltaSum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/deltasum"}},c={},u=[],f={toc:u},l="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sumwithoverflow"},"sumWithOverflow"),(0,o.kt)("p",null,"Computes the sum of the numbers, using the same data type for the result as for the input parameters. If the sum exceeds the maximum value for this data type, it is calculated with overflow."),(0,o.kt)("p",null,"Only works for numbers."))}p.isMDXComponent=!0}}]);