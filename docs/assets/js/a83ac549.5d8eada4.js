"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[57754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/engines/table-engines/integrations/ExternalDistributed",sidebar_position:12,sidebar_label:"ExternalDistributed",title:"ExternalDistributed"},s=void 0,l={unversionedId:"en/engines/table-engines/integrations/ExternalDistributed",id:"en/engines/table-engines/integrations/ExternalDistributed",title:"ExternalDistributed",description:"The ExternalDistributed engine allows to perform SELECT queries on data that is stored on a remote servers MySQL or PostgreSQL. Accepts MySQL or PostgreSQL engines as an argument so sharding is possible.",source:"@site/docs/en/engines/table-engines/integrations/ExternalDistributed.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/ExternalDistributed",permalink:"/docs/en/engines/table-engines/integrations/ExternalDistributed",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/ExternalDistributed.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/en/engines/table-engines/integrations/ExternalDistributed",sidebar_position:12,sidebar_label:"ExternalDistributed",title:"ExternalDistributed"},sidebar:"english",previous:{title:"PostgreSQL",permalink:"/docs/en/engines/table-engines/integrations/postgresql"},next:{title:"MaterializedPostgreSQL",permalink:"/docs/en/engines/table-engines/integrations/materialized-postgresql"}},o={},p=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Implementation Details",id:"implementation-details",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalDistributed")," engine allows to perform ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," queries on data that is stored on a remote servers MySQL or PostgreSQL. Accepts ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/mysql"},"MySQL")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL")," engines as an argument so sharding is possible."),(0,a.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = ExternalDistributed('engine', 'host:port', 'database', 'table', 'user', 'password');\n")),(0,a.kt)("p",null,"See a detailed description of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,a.kt)("p",null,"The table structure can differ from the original table structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Column names should be the same as in the original table, but you can use just some of these columns and in any order."),(0,a.kt)("li",{parentName:"ul"},"Column types may differ from those in the original table. ClickHouse tries to ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"cast")," values to the ClickHouse data types.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"engine")," \u2014 The table engine ",(0,a.kt)("inlineCode",{parentName:"li"},"MySQL")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSQL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL or PostgreSQL server address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," \u2014 Remote table name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 User name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,a.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"Supports multiple replicas that must be listed by ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," and shards must be listed by ",(0,a.kt)("inlineCode",{parentName:"p"},","),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_shards (id UInt32, name String, age UInt32, money UInt32) ENGINE = ExternalDistributed('MySQL', `mysql{1|2}:3306,mysql{3|4}:3306`, 'clickhouse', 'test_replicas', 'root', 'clickhouse');\n")),(0,a.kt)("p",null,"When specifying replicas, one of the available replicas is selected for each of the shards when reading. If the connection fails, the next replica is selected, and so on for all the replicas. If the connection attempt fails for all the replicas, the attempt is repeated the same way several times."),(0,a.kt)("p",null,"You can specify any number of shards and any number of replicas for each shard."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mysql"},"MySQL table engine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/postgresql"},"PostgreSQL table engine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed table engine"))))}d.isMDXComponent=!0}}]);