"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[34664,96660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(6815);const l={slug:"/en/guides/developer/lightweght-delete",sidebar_label:"Lightweight Delete",title:"Lightweight Delete",keywords:["lightweight delete"]},o=void 0,s={unversionedId:"en/guides/developer/lightweight-delete",id:"en/guides/developer/lightweight-delete",title:"Lightweight Delete",description:"",source:"@site/docs/en/guides/developer/lightweight-delete.md",sourceDirName:"en/guides/developer",slug:"/en/guides/developer/lightweght-delete",permalink:"/docs/en/guides/developer/lightweght-delete",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/guides/developer/lightweight-delete.md",tags:[],version:"current",frontMatter:{slug:"/en/guides/developer/lightweght-delete",sidebar_label:"Lightweight Delete",title:"Lightweight Delete",keywords:["lightweight delete"]},sidebar:"docs",previous:{title:"Defining Dictionaries",permalink:"/docs/en/sql-reference/dictionaries"},next:{title:"Transactional (ACID) support",permalink:"/docs/en/guides/developer/transactional"}},d={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.default,{mdxType:"Content"}))}m.isMDXComponent=!0},6815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={slug:"/en/sql-reference/statements/delete",sidebar_position:36,sidebar_label:"DELETE",description:"Lightweight deletes simplify the process of deleting data from the database.",keywords:["delete"],title:"DELETE Statement"},l=void 0,o={unversionedId:"en/sql-reference/statements/delete",id:"en/sql-reference/statements/delete",title:"DELETE Statement",description:"Lightweight deletes simplify the process of deleting data from the database.",source:"@site/docs/en/sql-reference/statements/delete.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/delete",permalink:"/docs/en/sql-reference/statements/delete",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/delete.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/en/sql-reference/statements/delete",sidebar_position:36,sidebar_label:"DELETE",description:"Lightweight deletes simplify the process of deleting data from the database.",keywords:["delete"],title:"DELETE Statement"},sidebar:"sqlreference",previous:{title:"COMMENT",permalink:"/docs/en/sql-reference/statements/alter/comment"},next:{title:"SYSTEM",permalink:"/docs/en/sql-reference/statements/system"}},s={},d=[{value:"Lightweight Delete Internals",id:"lightweight-delete-internals",level:2},{value:"How it is implemented",id:"how-it-is-implemented",level:3},{value:"SELECT query",id:"select-query",level:2},{value:"DELETE query",id:"delete-query",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM [db.]table [ON CLUSTER cluster] [WHERE expr]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE FROM")," removes rows from the table ",(0,a.kt)("inlineCode",{parentName:"p"},"[db.]table")," that match the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"expr"),". The deleted rows are marked as deleted immediately and will be automatically filtered out of all subsequent queries. Cleanup of data happens asynchronously in the background. This feature is only available for the MergeTree table engine family."),(0,a.kt)("p",null,"For example, the following query deletes all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"hits")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"Title")," column contains the text ",(0,a.kt)("inlineCode",{parentName:"p"},"hello"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM hits WHERE Title LIKE '%hello%';\n")),(0,a.kt)("p",null,"Lightweight deletes are asynchronous by default. Set ",(0,a.kt)("inlineCode",{parentName:"p"},"mutations_sync")," equal to 1 to wait for one replica to process the statement, and set ",(0,a.kt)("inlineCode",{parentName:"p"},"mutations_sync")," to 2 to wait for all replicas."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This feature is experimental and requires you to set ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_experimental_lightweight_delete")," to true:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_experimental_lightweight_delete = true;\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"DELETE FROM")," requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," privilege:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"grant ALTER DELETE ON db.table to username;\n"))),(0,a.kt)("h2",{id:"lightweight-delete-internals"},"Lightweight Delete Internals"),(0,a.kt)("p",null,"The idea behind Lightweight Delete is that when a ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE FROM table ...")," query is executed ClickHouse only saves a mask where each row is marked as either \u201cexisting\u201d or as \u201cdeleted\u201d. Those \u201cdeleted\u201d rows become invisible for subsequent queries, but physically the rows are removed only later by subsequent merges. Writing this mask is usually much more lightweight than what is done by ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER table DELETE ...")," query."),(0,a.kt)("h3",{id:"how-it-is-implemented"},"How it is implemented"),(0,a.kt)("p",null,"The mask is implemented as a hidden ",(0,a.kt)("inlineCode",{parentName:"p"},"_row_exists")," system column that stores True for all visible rows and False for deleted ones. This column is only present in a part if some rows in this part were deleted. In other words, the column is not persisted when it has all values equal to True."),(0,a.kt)("h2",{id:"select-query"},"SELECT query"),(0,a.kt)("p",null,"When the column is present ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT ... FROM table WHERE condition")," query internally is extended by an additional predicate on ",(0,a.kt)("inlineCode",{parentName:"p"},"_row_exists")," and becomes similar to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    SELECT ... FROM table PREWHERE _row_exists WHERE condition\n")),(0,a.kt)("p",null,"At execution time the column ",(0,a.kt)("inlineCode",{parentName:"p"},"_row_exists")," is read to figure out which rows are not visible and if there are many deleted rows it can figure out which granules can be fully skipped when reading the rest of the columns."),(0,a.kt)("h2",{id:"delete-query"},"DELETE query"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE FROM table WHERE condition")," is translated into ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER table UPDATE _row_exists = 0 WHERE condition")," mutation. Internally this mutation is executed in 2 steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECT count() FROM table WHERE condition")," for each individual part to figure out if the part is affected."),(0,a.kt)("li",{parentName:"ol"},"Mutate affected parts, and make hardlinks for unaffected parts. Mutating a part in fact only writes ",(0,a.kt)("inlineCode",{parentName:"li"},"_row_exists")," column and just hardlinks all other columns\u2019 files in the case of Wide parts. But for Compact parts, all columns are rewritten because they all are stored together in one file.")),(0,a.kt)("p",null,"So if we compare Lightweight Delete to ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," in the first step they both do the same thing to figure out which parts are affected, but in the second step ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," does much more work because it reads and rewrites all columns\u2019 files for the affected parts."),(0,a.kt)("p",null,"With the described implementation now we can see what can negatively affect 'DELETE FROM' execution time:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Heavy WHERE condition in DELETE query"),(0,a.kt)("li",{parentName:"ul"},"Mutations queue filled with other mutations, because all mutations on a table are executed sequentially"),(0,a.kt)("li",{parentName:"ul"},"Table having a very large number of data parts"),(0,a.kt)("li",{parentName:"ul"},"Having a lot of data in Compact parts\u2014in a Compact part, all columns are stored in one file.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This implementation might change in the future.")))}c.isMDXComponent=!0}}]);