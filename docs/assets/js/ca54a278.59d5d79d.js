"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[57256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(m,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},i),{},{components:n})):r.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/statements/alter/comment",sidebar_position:51,sidebar_label:"COMMENT"},s="ALTER TABLE \u2026 MODIFY COMMENT",l={unversionedId:"en/sql-reference/statements/alter/comment",id:"en/sql-reference/statements/alter/comment",title:"ALTER TABLE \u2026 MODIFY COMMENT",description:"Adds, modifies, or removes comment to the table, regardless if it was set before or not. Comment change is reflected in both system.tables and SHOW CREATE TABLE query.",source:"@site/docs/en/sql-reference/statements/alter/comment.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/comment",permalink:"/docs/en/sql-reference/statements/alter/comment",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/comment.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{slug:"/en/sql-reference/statements/alter/comment",sidebar_position:51,sidebar_label:"COMMENT"},sidebar:"sqlreference",previous:{title:"VIEW",permalink:"/docs/en/sql-reference/statements/alter/view"},next:{title:"DELETE",permalink:"/docs/en/sql-reference/statements/delete"}},m={},c=[],i={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-table--modify-comment"},"ALTER TABLE \u2026 MODIFY COMMENT"),(0,a.kt)("p",null,"Adds, modifies, or removes comment to the table, regardless if it was set before or not. Comment change is reflected in both ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/tables"},"system.tables")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," query."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY COMMENT 'Comment'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples")),(0,a.kt)("p",null,"Creating a table with comment (for more information, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#comment-table"},"COMMENT")," clause):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_comment\n(\n    `k` UInt64,\n    `s` String\n)\nENGINE = Memory()\nCOMMENT 'The temporary table';\n")),(0,a.kt)("p",null,"Modifying the table comment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_comment MODIFY COMMENT 'new comment on a table';\nSELECT comment FROM system.tables WHERE database = currentDatabase() AND name = 'table_with_comment';\n")),(0,a.kt)("p",null,"Output of a new comment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 new comment on a table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Removing the table comment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_comment MODIFY COMMENT '';\nSELECT comment FROM system.tables WHERE database = currentDatabase() AND name = 'table_with_comment';\n")),(0,a.kt)("p",null,"Output of a removed comment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2510\n\u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);