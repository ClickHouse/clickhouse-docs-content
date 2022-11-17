"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,y=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(y,s(s({ref:t},d),{},{components:a})):n.createElement(y,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={slug:"/en/engines/database-engines/atomic",sidebar_label:"Atomic",sidebar_position:10},s="Atomic",o={unversionedId:"en/engines/database-engines/atomic",id:"en/engines/database-engines/atomic",title:"Atomic",description:"It supports non-blocking DROP TABLE and RENAME TABLE queries and atomic EXCHANGE TABLES queries. Atomic database engine is used by default.",source:"@site/docs/en/engines/database-engines/atomic.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/atomic",permalink:"/docs/en/engines/database-engines/atomic",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/database-engines/atomic.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/en/engines/database-engines/atomic",sidebar_label:"Atomic",sidebar_position:10},sidebar:"english",previous:{title:"Database Engines",permalink:"/docs/en/engines/database-engines/"},next:{title:"Lazy",permalink:"/docs/en/engines/database-engines/lazy"}},l={},c=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Specifics and recommendations",id:"specifics-and-recommendations",level:2},{value:"Table UUID",id:"table-uuid",level:3},{value:"RENAME TABLE",id:"rename-table",level:3},{value:"DROP/DETACH TABLE",id:"drop-detach-table",level:3},{value:"EXCHANGE TABLES/DICTIONARIES",id:"exchange-tables",level:3},{value:"ReplicatedMergeTree in Atomic Database",id:"replicatedmergetree-in-atomic-database",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"atomic"},"Atomic"),(0,i.kt)("p",null,"It supports non-blocking ",(0,i.kt)("a",{parentName:"p",href:"#drop-detach-table"},"DROP TABLE")," and ",(0,i.kt)("a",{parentName:"p",href:"#rename-table"},"RENAME TABLE")," queries and atomic ",(0,i.kt)("a",{parentName:"p",href:"#exchange-tables"},"EXCHANGE TABLES")," queries. ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic")," database engine is used by default."),(0,i.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test [ENGINE = Atomic];\n")),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and recommendations"),(0,i.kt)("h3",{id:"table-uuid"},"Table UUID"),(0,i.kt)("p",null,"All tables in database ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic")," have persistent ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/uuid"},"UUID")," and store data in directory ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse_path/store/xxx/xxxyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy/"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy")," is UUID of the table.\nUsually, the UUID is generated automatically, but the user can also explicitly specify the UUID in the same way when creating the table (this is not recommended). "),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE name UUID '28f1c61c-2970-457a-bffe-454156ddcfef' (n UInt64) ENGINE = ...;\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#show_table_uuid_in_table_create_query_if_not_nil"},"show_table_uuid_in_table_create_query_if_not_nil")," setting to display the UUID with the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW CREATE")," query. "))),(0,i.kt)("h3",{id:"rename-table"},"RENAME TABLE"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/rename"},"RENAME")," queries are performed without changing the UUID or moving table data. These queries do not wait for the completion of queries using the table and are executed instantly."),(0,i.kt)("h3",{id:"drop-detach-table"},"DROP/DETACH TABLE"),(0,i.kt)("p",null,"On ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," no data is removed, database ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic")," just marks table as dropped by moving metadata to ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse_path/metadata_dropped/")," and notifies background thread. Delay before final table data deletion is specified by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#database_atomic_delay_before_drop_table_sec"},"database_atomic_delay_before_drop_table_sec")," setting.\nYou can specify synchronous mode using ",(0,i.kt)("inlineCode",{parentName:"p"},"SYNC")," modifier. Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#database_atomic_wait_for_drop_and_detach_synchronously"},"database_atomic_wait_for_drop_and_detach_synchronously")," setting to do this. In this case ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," waits for running ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and other queries which are using the table to finish. Table will be actually removed when it's not in use."),(0,i.kt)("h3",{id:"exchange-tables"},"EXCHANGE TABLES/DICTIONARIES"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/exchange"},"EXCHANGE")," query swaps tables or dictionaries atomically. For instance, instead of this non-atomic operation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE new_table TO tmp, old_table TO new_table, tmp TO old_table;\n")),(0,i.kt)("p",null,"you can use one atomic query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES new_table AND old_table;\n")),(0,i.kt)("h3",{id:"replicatedmergetree-in-atomic-database"},"ReplicatedMergeTree in Atomic Database"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication#table_engines-replication"},"ReplicatedMergeTree")," tables, it is recommended not to specify engine parameters - path in ZooKeeper and replica name. In this case, configuration parameters ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#default_replica_path"},"default_replica_path")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#default_replica_name"},"default_replica_name")," will be used. If you want to specify engine parameters explicitly, it is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}")," macros. This is useful so that unique paths are automatically generated for each table in ZooKeeper."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/databases"},"system.databases")," system table")))}p.isMDXComponent=!0}}]);