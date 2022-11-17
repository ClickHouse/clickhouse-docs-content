"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1064],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=u(t),g=o,m=f["".concat(p,".").concat(g)]||f[g]||l[g]||a;return t?n.createElement(m,s(s({ref:r},i),{},{components:t})):n.createElement(m,s({ref:r},i))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61649:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},s="kurtPop",c={unversionedId:"en/sql-reference/aggregate-functions/reference/kurtpop",id:"en/sql-reference/aggregate-functions/reference/kurtpop",title:"kurtPop",description:"Computes the kurtosis of a sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/kurtpop.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/kurtpop.md",tags:[],version:"current",sidebarPosition:153,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/kurtpop",sidebar_position:153},sidebar:"english",previous:{title:"skewSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp"},next:{title:"kurtSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/kurtsamp"}},p={},u=[],i={toc:u};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kurtpop"},"kurtPop"),(0,o.kt)("p",null,"Computes the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Kurtosis"},"kurtosis")," of a sequence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"kurtPop(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("p",null,"The kurtosis of the given distribution. Type \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT kurtPop(value) FROM series_with_value_column;\n")))}l.isMDXComponent=!0}}]);