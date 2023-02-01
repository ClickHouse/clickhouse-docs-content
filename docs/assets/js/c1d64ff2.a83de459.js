"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,T=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(T,o(o({ref:t},p),{},{components:n})):r.createElement(T,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/en/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},o="Manipulations with Table TTL",i={unversionedId:"en/sql-reference/statements/alter/ttl",id:"en/sql-reference/statements/alter/ttl",title:"Manipulations with Table TTL",description:"If you are looking for details on using TTL for managing old data, check out the Manage Data with TTL user guide. The docs below demonstrate how to alter or remove an existing TTL rule.",source:"@site/docs/en/sql-reference/statements/alter/ttl.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/ttl",permalink:"/docs/en/sql-reference/statements/alter/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/ttl.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/en/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},sidebar:"english",previous:{title:"CONSTRAINT",permalink:"/docs/en/sql-reference/statements/alter/constraint"},next:{title:"USER",permalink:"/docs/en/sql-reference/statements/alter/user"}},s={},c=[{value:"MODIFY TTL",id:"modify-ttl",level:2},{value:"REMOVE TTL",id:"remove-ttl",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manipulations-with-table-ttl"},"Manipulations with Table TTL"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are looking for details on using TTL for managing old data, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/guides/developer/ttl"},"Manage Data with TTL")," user guide. The docs below demonstrate how to alter or remove an existing TTL rule."))),(0,a.kt)("h2",{id:"modify-ttl"},"MODIFY TTL"),(0,a.kt)("p",null,"You can change ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#mergetree-table-ttl"},"table TTL")," with a request of the following form:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table_name [ON CLUSTER cluster] MODIFY TTL ttl_expression;\n")),(0,a.kt)("h2",{id:"remove-ttl"},"REMOVE TTL"),(0,a.kt)("p",null,"TTL-property can be removed from table with the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db.]table_name [ON CLUSTER cluster] REMOVE TTL\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Consider the table with table ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_ttl\n(\n    event_time DateTime,\n    UserID UInt64,\n    Comment String\n)\nENGINE MergeTree()\nORDER BY tuple()\nTTL event_time + INTERVAL 3 MONTH\nSETTINGS min_bytes_for_wide_part = 0;\n\nINSERT INTO table_with_ttl VALUES (now(), 1, 'username1');\n\nINSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," to force ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," cleanup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,a.kt)("p",null,"Second row was deleted from table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Now remove table ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," with the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl REMOVE TTL;\n")),(0,a.kt)("p",null,"Re-insert the deleted row and force the ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," cleanup again with ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\nOPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," is no longer there, so the second row is not deleted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2502   2020-08-11 12:44:57 \u2502       2 \u2502    username2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More about the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/create/table#ttl-expression"},"TTL-expression"),"."),(0,a.kt)("li",{parentName:"ul"},"Modify column ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/column#alter_modify-column"},"with TTL"),".")))}m.isMDXComponent=!0}}]);