"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[96797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/alter/delete",sidebar_position:39,sidebar_label:"DELETE"},i="ALTER TABLE \u2026 DELETE Statement",o={unversionedId:"en/sql-reference/statements/alter/delete",id:"en/sql-reference/statements/alter/delete",title:"ALTER TABLE \u2026 DELETE Statement",description:"Deletes data matching the specified filtering expression. Implemented as a mutation.",source:"@site/docs/en/sql-reference/statements/alter/delete.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/delete",permalink:"/docs/en/sql-reference/statements/alter/delete",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/delete.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{slug:"/en/sql-reference/statements/alter/delete",sidebar_position:39,sidebar_label:"DELETE"},sidebar:"english",previous:{title:"SETTING",permalink:"/docs/en/sql-reference/statements/alter/setting"},next:{title:"UPDATE",permalink:"/docs/en/sql-reference/statements/alter/update"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-table--delete-statement"},"ALTER TABLE \u2026 DELETE Statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table [ON CLUSTER cluster] DELETE WHERE filter_expr\n")),(0,a.kt)("p",null,"Deletes data matching the specified filtering expression. Implemented as a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/#mutations"},"mutation"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," prefix makes this syntax different from most other systems supporting SQL. It is intended to signify that unlike similar queries in OLTP databases this is a heavy operation not designed for frequent use.  ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," is considered a heavyweight operation that requires the underlying data to be merged before it is deleted. For MergeTree tables, consider using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/delete"},(0,a.kt)("inlineCode",{parentName:"a"},"DELETE FROM")," query"),", which performs a lightweight delete and can be considerably faster.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_expr")," must be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt8"),". The query deletes rows in the table for which this expression takes a non-zero value."),(0,a.kt)("p",null,"One query can contain several commands separated by commas."),(0,a.kt)("p",null,"The synchronicity of the query processing is defined by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings/#mutations_sync"},"mutations_sync")," setting. By default, it is asynchronous."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#mutations"},"Mutations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/#synchronicity-of-alter-queries"},"Synchronicity of ALTER Queries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings/#mutations_sync"},"mutations_sync")," setting")))}m.isMDXComponent=!0}}]);