"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/cloud/bestpractices/avoid-mutations",sidebar_label:"Avoid Mutations",title:"Avoid Mutations"},i=void 0,s={unversionedId:"en/cloud/bestpractices/avoidmutations",id:"en/cloud/bestpractices/avoidmutations",title:"Avoid Mutations",description:"Mutations refers to ALTER queries that manipulate table data through deletion or updates. Most notably they are queries like ALTER TABLE \u2026 DELETE, UPDATE, etc. Performing such queries will produce new mutated versions of the data parts. This means that such statements would trigger a rewrite of whole data parts for all data that was inserted before the mutation, translating to a large amount of write requests.",source:"@site/docs/en/cloud/bestpractices/avoidmutations.md",sourceDirName:"en/cloud/bestpractices",slug:"/en/cloud/bestpractices/avoid-mutations",permalink:"/docs/en/cloud/bestpractices/avoid-mutations",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/cloud/bestpractices/avoidmutations.md",tags:[],version:"current",frontMatter:{slug:"/en/cloud/bestpractices/avoid-mutations",sidebar_label:"Avoid Mutations",title:"Avoid Mutations"},sidebar:"english",previous:{title:"Asynchronous Inserts",permalink:"/docs/en/cloud/bestpractices/asynchronous-inserts"},next:{title:"Avoid Nullable Columns",permalink:"/docs/en/cloud/bestpractices/avoid-nullable-columns"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mutations refers to ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/"},"ALTER")," queries that manipulate table data through deletion or updates. Most notably they are queries like ALTER TABLE \u2026 DELETE, UPDATE, etc. Performing such queries will produce new mutated versions of the data parts. This means that such statements would trigger a rewrite of whole data parts for all data that was inserted before the mutation, translating to a large amount of write requests."),(0,a.kt)("p",null,"For updates, you can avoid these large amounts of write requests by using spezialised table engines like ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replacingmergetree"},"ReplacingMergeTree")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree"},"CollapsingMergeTree")," instead of the default MergeTree table engine."))}p.isMDXComponent=!0}}]);