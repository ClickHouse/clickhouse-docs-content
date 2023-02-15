"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[78993],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(n),g=o,m=u["".concat(p,".").concat(g)]||u[g]||f[g]||a;return n?t.createElement(m,s(s({ref:r},l),{},{components:n})):t.createElement(m,s({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31092:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=n(87462),o=(n(67294),n(3905));const a={slug:"/en/sql-reference/aggregate-functions/reference/skewpop",sidebar_position:150},s="skewPop",c={unversionedId:"en/sql-reference/aggregate-functions/reference/skewpop",id:"en/sql-reference/aggregate-functions/reference/skewpop",title:"skewPop",description:"Computes the skewness of a sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/skewpop.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/skewpop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/skewpop.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/skewpop",sidebar_position:150},sidebar:"english",previous:{title:"intervalLengthSum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/intervalLengthSum"},next:{title:"skewSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/skewsamp"}},p={},i=[],l={toc:i},u="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skewpop"},"skewPop"),(0,o.kt)("p",null,"Computes the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness"},"skewness")," of a sequence."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"skewPop(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," returning a number."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("p",null,"The skewness of the given distribution. Type \u2014 ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT skewPop(value) FROM series_with_value_column;\n")))}f.isMDXComponent=!0}}]);