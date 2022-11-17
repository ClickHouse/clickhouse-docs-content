"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95630,65209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},s=void 0,i={unversionedId:"en/operations/caches",id:"en/operations/caches",title:"Cache Types",description:"When performing queries, ClickHouse uses different caches.",source:"@site/docs/en/operations/caches.md",sourceDirName:"en/operations",slug:"/en/operations/caches",permalink:"/docs/en/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/caches.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},sidebar:"english",previous:{title:"Testing Hardware",permalink:"/docs/en/operations/performance-test"},next:{title:"Usage Recommendations",permalink:"/docs/en/operations/tips"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When performing queries, ClickHouse uses different caches."),(0,a.kt)("p",null,"Main cache types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mark_cache")," \u2014 Cache of marks used by table engines of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uncompressed_cache")," \u2014 Cache of uncompressed data used by table engines of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family.")),(0,a.kt)("p",null,"Additional cache types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-regexp"},"Regexp")," cache."),(0,a.kt)("li",{parentName:"ul"},"Compiled expressions cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-avro"},"Avro format")," schemas cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/"},"Dictionaries")," data cache."),(0,a.kt)("li",{parentName:"ul"},"Schema inference cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/storing-data"},"Filesystem cache")," over S3, Azure, Local and other disks.")),(0,a.kt)("p",null,"Indirectly used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS page cache.")),(0,a.kt)("p",null,"To drop cache, use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/system"},"SYSTEM DROP ... CACHE")," statements."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/caches/"},"Original article")," "))}u.isMDXComponent=!0},77781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(29641);const s={slug:"/zh/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},i=void 0,c={unversionedId:"zh/operations/caches",id:"zh/operations/caches",title:"Cache Types",description:"",source:"@site/docs/zh/operations/caches.mdx",sourceDirName:"zh/operations",slug:"/zh/operations/caches",permalink:"/docs/zh/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/caches.mdx",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/zh/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},sidebar:"chinese",previous:{title:"OpenTelemetry Support",permalink:"/docs/zh/operations/opentelemetry"},next:{title:"ClickHouse Keeper",permalink:"/docs/zh/operations/clickhouse-keeper"}},l={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);