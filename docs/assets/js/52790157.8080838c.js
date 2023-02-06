"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[95630,65209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},s=void 0,i={unversionedId:"en/operations/caches",id:"en/operations/caches",title:"Cache Types",description:"When performing queries, ClickHouse uses different caches.",source:"@site/docs/en/operations/caches.md",sourceDirName:"en/operations",slug:"/en/operations/caches",permalink:"/docs/en/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/caches.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},sidebar:"english",previous:{title:"Testing Hardware",permalink:"/docs/en/operations/performance-test"},next:{title:"Usage Recommendations",permalink:"/docs/en/operations/tips"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When performing queries, ClickHouse uses different caches."),(0,n.kt)("p",null,"Main cache types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mark_cache")," \u2014 Cache of marks used by table engines of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uncompressed_cache")," \u2014 Cache of uncompressed data used by table engines of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,n.kt)("li",{parentName:"ul"},"Operating system page cache (used indirectly, for files with actual data).")),(0,n.kt)("p",null,"Additional cache types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-regexp"},"Regexp")," cache."),(0,n.kt)("li",{parentName:"ul"},"Compiled expressions cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-avro"},"Avro format")," schemas cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/"},"Dictionaries")," data cache."),(0,n.kt)("li",{parentName:"ul"},"Schema inference cache."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/storing-data"},"Filesystem cache")," over S3, Azure, Local and other disks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/query-cache"},"(Experimental) Query cache"),".")),(0,n.kt)("p",null,"To drop one of the caches, use ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/system#drop-mark-cache"},"SYSTEM DROP ... CACHE")," statements."))}m.isMDXComponent=!0},77781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(29641);const s={slug:"/zh/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},i=void 0,c={unversionedId:"zh/operations/caches",id:"zh/operations/caches",title:"Cache Types",description:"",source:"@site/docs/zh/operations/caches.mdx",sourceDirName:"zh/operations",slug:"/zh/operations/caches",permalink:"/docs/zh/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/caches.mdx",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/zh/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},sidebar:"chinese",previous:{title:"OpenTelemetry Support",permalink:"/docs/zh/operations/opentelemetry"},next:{title:"ClickHouse Keeper",permalink:"/docs/zh/operations/clickhouse-keeper"}},l={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);