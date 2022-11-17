"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[83080,81234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(y,s(s({ref:t},d),{},{components:r})):n.createElement(y,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/en/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"Multiword Type Names",title:"Multiword Types"},s=void 0,i={unversionedId:"en/sql-reference/data-types/multiword-types",id:"en/sql-reference/data-types/multiword-types",title:"Multiword Types",description:"When creating tables, you can use data types with a name consisting of several words. This is implemented for better SQL compatibility.",source:"@site/docs/en/sql-reference/data-types/multiword-types.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/multiword-types",permalink:"/docs/en/sql-reference/data-types/multiword-types",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/multiword-types.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/en/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"Multiword Type Names",title:"Multiword Types"},sidebar:"english",previous:{title:"IPv6",permalink:"/docs/en/sql-reference/data-types/domains/ipv6"},next:{title:"Geo",permalink:"/docs/en/sql-reference/data-types/geo"}},p={},o=[{value:"Multiword Types Support",id:"multiword-types-support",level:2}],d={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating tables, you can use data types with a name consisting of several words. This is implemented for better SQL compatibility."),(0,a.kt)("h2",{id:"multiword-types-support"},"Multiword Types Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Multiword types"),(0,a.kt)("th",{parentName:"tr",align:null},"Simple types"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DOUBLE PRECISION"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/float"},"Float64"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHAR LARGE OBJECT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHAR VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHARACTER LARGE OBJECT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CHARACTER VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NCHAR LARGE OBJECT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NCHAR VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER LARGE OBJECT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BINARY LARGE OBJECT"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BINARY VARYING"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/multiword-types/"},"Original article")," "))}c.isMDXComponent=!0},46682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(36252);const s={slug:"/zh/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"Multiword Type Names",title:"Multiword Types"},i=void 0,p={unversionedId:"zh/sql-reference/data-types/multiword-types",id:"zh/sql-reference/data-types/multiword-types",title:"Multiword Types",description:"",source:"@site/docs/zh/sql-reference/data-types/multiword-types.mdx",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/multiword-types",permalink:"/docs/zh/sql-reference/data-types/multiword-types",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/multiword-types.mdx",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/zh/sql-reference/data-types/multiword-types",sidebar_position:61,sidebar_label:"Multiword Type Names",title:"Multiword Types"},sidebar:"chinese",previous:{title:"ipv6",permalink:"/docs/zh/sql-reference/data-types/domains/ipv6"},next:{title:"Geo",permalink:"/docs/zh/sql-reference/data-types/geo"}},o={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"Content"}))}u.isMDXComponent=!0}}]);