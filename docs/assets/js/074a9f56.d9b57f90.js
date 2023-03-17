"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[34404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={slug:"/en/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},s=void 0,l={unversionedId:"en/engines/table-engines/integrations/materialized-postgresql",id:"en/engines/table-engines/integrations/materialized-postgresql",title:"MaterializedPostgreSQL",description:"Creates ClickHouse table with an initial data dump of PostgreSQL table and starts replication process, i.e. executes background job to apply new changes as they happen on PostgreSQL table in the remote PostgreSQL database.",source:"@site/docs/en/engines/table-engines/integrations/materialized-postgresql.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/materialized-postgresql",permalink:"/docs/en/engines/table-engines/integrations/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/en/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL",title:"MaterializedPostgreSQL"},sidebar:"sqlreference",previous:{title:"ExternalDistributed",permalink:"/docs/en/engines/table-engines/integrations/ExternalDistributed"},next:{title:"NATS",permalink:"/docs/en/engines/table-engines/integrations/nats"}},o={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Virtual columns",id:"virtual-columns",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates ClickHouse table with an initial data dump of PostgreSQL table and starts replication process, i.e. executes background job to apply new changes as they happen on PostgreSQL table in the remote PostgreSQL database."),(0,r.kt)("p",null,"If more than one table is required, it is highly recommended to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL")," database engine instead of the table engine and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"materialized_postgresql_tables_list")," setting, which specifies the tables to be replicated (will also be possible to add database ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),"). It will be much better in terms of CPU, fewer connections and fewer replication slots inside the remote PostgreSQL database."),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL server address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")," \u2014 Remote table name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/runtime-config-wal.html"},"wal_level")," setting must have a value ",(0,r.kt)("inlineCode",{parentName:"p"},"logical")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_replication_slots")," parameter must have a value at least ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," in the PostgreSQL config file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A table with ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedPostgreSQL")," engine must have a primary key \u2014 the same as a replica identity index (by default: primary key) of a PostgreSQL table (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/materialized-postgresql#requirements"},"details on replica identity index"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Only database ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomicity_(database_systems)"},"Atomic")," is allowed."))),(0,r.kt)("h2",{id:"virtual-columns"},"Virtual columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_version")," \u2014 Transaction counter. Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"_sign")," \u2014 Deletion mark. Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"Int8"),". Possible values:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u2014 Row is not deleted,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 Row is deleted.")))),(0,r.kt)("p",null,"These columns do not need to be added when a table is created. They are always accessible in ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query.\n",(0,r.kt)("inlineCode",{parentName:"p"},"_version")," column equals ",(0,r.kt)("inlineCode",{parentName:"p"},"LSN")," position in ",(0,r.kt)("inlineCode",{parentName:"p"},"WAL"),", so it might be used to check how up-to-date replication is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n\nSELECT key, value, _version FROM postgresql_db.postgresql_replica;\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Replication of ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.5/storage-toast.html"},(0,r.kt)("strong",{parentName:"a"},"TOAST"))," values is not supported. The default value for the data type will be used.")))}c.isMDXComponent=!0}}]);