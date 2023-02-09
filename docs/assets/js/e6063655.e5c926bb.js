"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[65209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},c=void 0,i={unversionedId:"en/operations/caches",id:"en/operations/caches",title:"Cache Types",description:"When performing queries, ClickHouse uses different caches.",source:"@site/docs/en/operations/caches.md",sourceDirName:"en/operations",slug:"/en/operations/caches",permalink:"/docs/en/operations/caches",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/caches.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/en/operations/caches",sidebar_position:65,sidebar_label:"Caches",title:"Cache Types"},sidebar:"english",previous:{title:"Testing Hardware",permalink:"/docs/en/operations/performance-test"},next:{title:"Query Cache [experimental]",permalink:"/docs/en/operations/query-cache"}},s={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When performing queries, ClickHouse uses different caches."),(0,a.kt)("p",null,"Main cache types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mark_cache")," \u2014 Cache of marks used by table engines of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uncompressed_cache")," \u2014 Cache of uncompressed data used by table engines of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," family."),(0,a.kt)("li",{parentName:"ul"},"Operating system page cache (used indirectly, for files with actual data).")),(0,a.kt)("p",null,"Additional cache types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-regexp"},"Regexp")," cache."),(0,a.kt)("li",{parentName:"ul"},"Compiled expressions cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#data-format-avro"},"Avro format")," schemas cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/"},"Dictionaries")," data cache."),(0,a.kt)("li",{parentName:"ul"},"Schema inference cache."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/storing-data"},"Filesystem cache")," over S3, Azure, Local and other disks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/query-cache"},"(Experimental) Query cache"),".")),(0,a.kt)("p",null,"To drop one of the caches, use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/system#drop-mark-cache"},"SYSTEM DROP ... CACHE")," statements."))}m.isMDXComponent=!0}}]);