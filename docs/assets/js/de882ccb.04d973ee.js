"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34664,96660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(6815);const l={slug:"/en/guides/developer/lightweght-delete",sidebar_label:"Lightweight Delete",title:"Lightweight Delete",keywords:["lightweight delete"]},o=void 0,s={unversionedId:"en/guides/developer/lightweight-delete",id:"en/guides/developer/lightweight-delete",title:"Lightweight Delete",description:"",source:"@site/docs/en/guides/developer/lightweight-delete.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/lightweght-delete",permalink:"/docs/en/guides/developer/lightweght-delete",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/lightweight-delete.md",tags:[],version:"current",frontMatter:{slug:"/en/guides/developer/lightweght-delete",sidebar_label:"Lightweight Delete",title:"Lightweight Delete",keywords:["lightweight delete"]},sidebar:"english",previous:{title:"Cascading Materialized Views",permalink:"/docs/en/guides/developer/cascading-materialized-views"},next:{title:"Transactional (ACID) support",permalink:"/docs/en/guides/developer/transactional"}},d={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.default,{mdxType:"Content"}))}m.isMDXComponent=!0},6815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/sql-reference/statements/delete",sidebar_position:36,sidebar_label:"DELETE",description:"Lightweight deletes simplify the process of deleting data from the database.",keywords:["delete"],title:"DELETE Statement"},l=void 0,o={unversionedId:"en/sql-reference/statements/delete",id:"en/sql-reference/statements/delete",title:"DELETE Statement",description:"Lightweight deletes simplify the process of deleting data from the database.",source:"@site/docs/en/sql-reference/statements/delete.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/delete",permalink:"/docs/en/sql-reference/statements/delete",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/delete.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/en/sql-reference/statements/delete",sidebar_position:36,sidebar_label:"DELETE",description:"Lightweight deletes simplify the process of deleting data from the database.",keywords:["delete"],title:"DELETE Statement"},sidebar:"english",previous:{title:"COMMENT",permalink:"/docs/en/sql-reference/statements/alter/comment"},next:{title:"SYSTEM",permalink:"/docs/en/sql-reference/statements/system"}},s={},d=[{value:"Lightweight Delete Internals",id:"lightweight-delete-internals",level:2},{value:"How it is implemented",id:"how-it-is-implemented",level:3},{value:"SELECT query",id:"select-query",level:2},{value:"DELETE query",id:"delete-query",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM [db.]table [ON CLUSTER cluster] [WHERE expr]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE FROM")," removes rows from the table ",(0,i.kt)("inlineCode",{parentName:"p"},"[db.]table")," that match the expression ",(0,i.kt)("inlineCode",{parentName:"p"},"expr"),". The deleted rows are marked as deleted immediately and will be automatically filtered out of all subsequent queries. Cleanup of data happens asynchronously in the background. This feature is only available for the MergeTree table engine family."),(0,i.kt)("p",null,"For example, the following query deletes all rows from the ",(0,i.kt)("inlineCode",{parentName:"p"},"hits")," table where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," column contains the text ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM hits WHERE Title LIKE '%hello%';\n")),(0,i.kt)("p",null,"Lightweight deletes are asynchronous by default. Set ",(0,i.kt)("inlineCode",{parentName:"p"},"mutations_sync")," equal to 1 to wait for one replica to process the statement, and set ",(0,i.kt)("inlineCode",{parentName:"p"},"mutations_sync")," to 2 to wait for all replicas."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is experimental and requires you to set ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_experimental_lightweight_delete")," to true:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_lightweight_delete = true;\n")))),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/delete"},"alternative way to delete rows")," in ClickHouse is ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DELETE"),", which might be more efficient if you do bulk deletes only occasionally and don't need the operation to be applied instantly. In most use cases the new lightweight ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE FROM")," behavior will be considerably faster."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even though deletes are becoming more lightweight in ClickHouse, they should still not be used as aggressively as on an OLTP system. Lightweight deletes are currently efficient for wide parts, but for compact parts, they can be a heavyweight operation, and it may be better to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," for some scenarios."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"DELETE FROM")," requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," privilege:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"grant ALTER DELETE ON db.table to username;\n")))),(0,i.kt)("h2",{id:"lightweight-delete-internals"},"Lightweight Delete Internals"),(0,i.kt)("p",null,"The idea behind Lightweight Delete is that when a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE FROM table ...")," query is executed ClickHouse only saves a mask where each row is marked as either \u201cexisting\u201d or as \u201cdeleted\u201d. Those \u201cdeleted\u201d rows become invisible for subsequent queries, but physically the rows are removed only later by subsequent merges. Writing this mask is usually much more lightweight than what is done by ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER table DELETE ...")," query."),(0,i.kt)("h3",{id:"how-it-is-implemented"},"How it is implemented"),(0,i.kt)("p",null,"The mask is implemented as a hidden ",(0,i.kt)("inlineCode",{parentName:"p"},"_row_exists")," system column that stores True for all visible rows and False for deleted ones. This column is only present in a part if some rows in this part were deleted. In other words, the column is not persisted when it has all values equal to True."),(0,i.kt)("h2",{id:"select-query"},"SELECT query"),(0,i.kt)("p",null,"When the column is present ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM table WHERE condition")," query internally is extended by an additional predicate on ",(0,i.kt)("inlineCode",{parentName:"p"},"_row_exists")," and becomes similar to "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"    SELECT ... FROM table PREWHERE _row_exists WHERE condition\n")),(0,i.kt)("p",null,"At execution time the column ",(0,i.kt)("inlineCode",{parentName:"p"},"_row_exists")," is read to figure out which rows are not visible and if there are many deleted rows it can figure out which granules can be fully skipped when reading the rest of the columns."),(0,i.kt)("h2",{id:"delete-query"},"DELETE query"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DELETE FROM table WHERE condition")," is translated into ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER table UPDATE _row_exists = 0 WHERE condition")," mutation. Internally this mutation is executed in 2 steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SELECT count() FROM table WHERE condition")," for each individual part to figure out if the part is affected."),(0,i.kt)("li",{parentName:"ol"},"Mutate affected parts, and make hardlinks for unaffected parts. Mutating a part in fact only writes ",(0,i.kt)("inlineCode",{parentName:"li"},"_row_exists")," column and just hardlinks all other columns\u2019 files in the case of Wide parts. But for Compact parts, all columns are rewritten because they all are stored together in one file.")),(0,i.kt)("p",null,"So if we compare Lightweight Delete to ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," in the first step they both do the same thing to figure out which parts are affected, but in the second step ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," does much more work because it reads and rewrites all columns\u2019 files for the affected parts."),(0,i.kt)("p",null,"With the described implementation now we can see what can negatively affect 'DELETE FROM' execution time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Heavy WHERE condition in DELETE query"),(0,i.kt)("li",{parentName:"ul"},"Mutations queue filled with other mutations, because all mutations on a table are executed sequentially"),(0,i.kt)("li",{parentName:"ul"},"Table having a very large number of data parts"),(0,i.kt)("li",{parentName:"ul"},"Having a lot of data in Compact parts\u2014in a Compact part, all columns are stored in one file.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This implementation might change in the future."))))}c.isMDXComponent=!0}}]);