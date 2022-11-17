"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20081],{3905:(e,r,n)=>{n.d(r,{Zo:()=>f,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},f=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,y=p["".concat(i,".").concat(g)]||p[g]||u[g]||c;return n?t.createElement(y,o(o({ref:r},f),{},{components:n})):t.createElement(y,o({ref:r},f))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58113:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const c={slug:"/en/sql-reference/aggregate-functions/reference/anylast",sidebar_position:104},o="anyLast",s={unversionedId:"en/sql-reference/aggregate-functions/reference/anylast",id:"en/sql-reference/aggregate-functions/reference/anylast",title:"anyLast",description:"Selects the last value encountered.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/anylast.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/anylast",permalink:"/docs/en/sql-reference/aggregate-functions/reference/anylast",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/anylast.md",tags:[],version:"current",sidebarPosition:104,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/anylast",sidebar_position:104},sidebar:"english",previous:{title:"anyHeavy",permalink:"/docs/en/sql-reference/aggregate-functions/reference/anyheavy"},next:{title:"argMin",permalink:"/docs/en/sql-reference/aggregate-functions/reference/argmin"}},i={},l=[],f={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anylast"},"anyLast"),(0,a.kt)("p",null,"Selects the last value encountered.\nThe result is just as indeterminate as for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/any"},"any")," function."))}u.isMDXComponent=!0}}]);