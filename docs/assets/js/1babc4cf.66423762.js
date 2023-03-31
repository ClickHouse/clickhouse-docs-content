"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[86411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(a),k=s,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(d,r(r({ref:t},u),{},{components:a})):n.createElement(d,r({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:s,r[1]=o;for(var i=2;i<l;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},55792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),s=(a(67294),a(3905));const l={slug:"/en/sql-reference/statements/show",sidebar_position:37,sidebar_label:"SHOW"},r="SHOW Statements",o={unversionedId:"en/sql-reference/statements/show",id:"en/sql-reference/statements/show",title:"SHOW Statements",description:"SHOW CREATE TABLE",source:"@site/docs/en/sql-reference/statements/show.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/show",permalink:"/docs/en/sql-reference/statements/show",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/show.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/en/sql-reference/statements/show",sidebar_position:37,sidebar_label:"SHOW"},sidebar:"sqlreference",previous:{title:"SYSTEM",permalink:"/docs/en/sql-reference/statements/system"},next:{title:"GRANT",permalink:"/docs/en/sql-reference/statements/grant"}},p={},i=[{value:"SHOW CREATE TABLE",id:"show-create-table",level:2},{value:"SHOW DATABASES",id:"show-databases",level:2},{value:"SHOW PROCESSLIST",id:"show-processlist",level:2},{value:"SHOW TABLES",id:"show-tables",level:2},{value:"SHOW COLUMNS",id:"show-columns",level:2},{value:"SHOW DICTIONARIES",id:"show-dictionaries",level:2},{value:"SHOW GRANTS",id:"show-grants",level:2},{value:"SHOW CREATE USER",id:"show-create-user",level:2},{value:"SHOW CREATE ROLE",id:"show-create-role",level:2},{value:"SHOW CREATE ROW POLICY",id:"show-create-row-policy",level:2},{value:"SHOW CREATE QUOTA",id:"show-create-quota",level:2},{value:"SHOW CREATE SETTINGS PROFILE",id:"show-create-settings-profile",level:2},{value:"SHOW USERS",id:"show-users",level:2},{value:"SHOW ROLES",id:"show-roles",level:2},{value:"SHOW PROFILES",id:"show-profiles",level:2},{value:"SHOW POLICIES",id:"show-policies",level:2},{value:"SHOW QUOTAS",id:"show-quotas",level:2},{value:"SHOW QUOTA",id:"show-quota",level:2},{value:"SHOW ACCESS",id:"show-access",level:2},{value:"SHOW CLUSTER(s)",id:"show-clusters",level:2},{value:"SHOW SETTINGS",id:"show-settings",level:2},{value:"SHOW FILESYSTEM CACHES",id:"show-filesystem-caches",level:2},{value:"SHOW ENGINES",id:"show-engines",level:2}],u={toc:i},m="wrapper";function c(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"show-statements"},"SHOW Statements"),(0,s.kt)("h2",{id:"show-create-table"},"SHOW CREATE TABLE"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [TEMPORARY] [TABLE|DICTIONARY|VIEW] [db.]table|view [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,"Returns a single ",(0,s.kt)("inlineCode",{parentName:"p"},"String"),"-type \u2018statement\u2019 column, which contains a single value \u2013 the ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE")," query used for creating the specified object."),(0,s.kt)("p",null,"Note that if you use this statement to get ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE")," query of system tables, you will get a ",(0,s.kt)("em",{parentName:"p"},"fake")," query, which only declares table structure, but cannot be used to create table."),(0,s.kt)("h2",{id:"show-databases"},"SHOW DATABASES"),(0,s.kt)("p",null,"Prints a list of all databases."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES [[NOT] LIKE | ILIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,"This statement is identical to the query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.databases [WHERE name [NOT] LIKE | ILIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Getting database names, containing the symbols sequence 'de' in their names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES LIKE '%de%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2510\n\u2502 default \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting database names, containing symbols sequence 'de' in their names, in the case insensitive manner:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES ILIKE '%DE%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2510\n\u2502 default \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting database names, not containing the symbols sequence 'de' in their names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES NOT LIKE '%de%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 _temporary_and_external_tables \u2502\n\u2502 system                         \u2502\n\u2502 test                           \u2502\n\u2502 tutorial                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting the first two rows from database names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES LIMIT 2\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 _temporary_and_external_tables \u2502\n\u2502 default                        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/create/database/#query-language-create-database"},"CREATE DATABASE"))),(0,s.kt)("h2",{id:"show-processlist"},"SHOW PROCESSLIST"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW PROCESSLIST [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,"Outputs the content of the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/processes#system_tables-processes"},"system.processes")," table, that contains a list of queries that is being processed at the moment, excepting ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST")," queries."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.processes")," query returns data about all the current queries."),(0,s.kt)("p",null,"Tip (execute in the console):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ watch -n1 \"clickhouse-client --query='SHOW PROCESSLIST'\"\n")),(0,s.kt)("h2",{id:"show-tables"},"SHOW TABLES"),(0,s.kt)("p",null,"Displays a list of tables."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] [TEMPORARY] TABLES [{FROM | IN} <db>] [[NOT] LIKE | ILIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,s.kt)("p",null,"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM")," clause is not specified, the query returns the list of tables from the current database."),(0,s.kt)("p",null,"This statement is identical to the query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.tables [WHERE name [NOT] LIKE | ILIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Getting table names, containing the symbols sequence 'user' in their names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system LIKE '%user%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_directories \u2502\n\u2502 users            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting table names, containing sequence 'user' in their names, in the case insensitive manner:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system ILIKE '%USER%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 user_directories \u2502\n\u2502 users            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting table names, not containing the symbol sequence 's' in their names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system NOT LIKE '%s%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 metric_log   \u2502\n\u2502 metric_log_0 \u2502\n\u2502 metric_log_1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Getting the first two rows from table names:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM system LIMIT 2\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aggregate_function_combinators \u2502\n\u2502 asynchronous_metric_log        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/getting-started/tutorial/#create-tables"},"Create Tables")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/sql-reference/statements/show/#show-create-table"},"SHOW CREATE TABLE"))),(0,s.kt)("h2",{id:"show-columns"},"SHOW COLUMNS"),(0,s.kt)("p",null,"Displays a list of columns"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [EXTENDED] [FULL] COLUMNS {FROM | IN} <table> [{FROM | IN} <db>] [{[NOT] {LIKE | ILIKE} '<pattern>' | WHERE <expr>}] [LIMIT <N>] [INTO\nOUTFILE <filename>] [FORMAT <format>]\n")),(0,s.kt)("p",null,"The database and table name can be specified in abbreviated form as ",(0,s.kt)("inlineCode",{parentName:"p"},"<db>.<table>"),", i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM tab FROM db")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM db.tab")," are\nequivalent. If no database is specified, the query returns the list of columns from the current database."),(0,s.kt)("p",null,"The optional keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTENDED")," currently has no effect, it only exists for MySQL compatibility."),(0,s.kt)("p",null,"The optional keyword ",(0,s.kt)("inlineCode",{parentName:"p"},"FULL")," causes the output to include the collation, comment and privilege columns."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SHOW COLUMNS")," produces a result table with the following structure:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"field - The name of the column (String)"),(0,s.kt)("li",{parentName:"ul"},"type - The column data type (String)"),(0,s.kt)("li",{parentName:"ul"},"null - If the column data type is Nullable (UInt8)"),(0,s.kt)("li",{parentName:"ul"},"key - ",(0,s.kt)("inlineCode",{parentName:"li"},"PRI")," if the column is part of the primary key, ",(0,s.kt)("inlineCode",{parentName:"li"},"SOR")," if the column is part of the sorting key, empty otherwise (String)"),(0,s.kt)("li",{parentName:"ul"},"default - Default expression of the column if it is of type ",(0,s.kt)("inlineCode",{parentName:"li"},"ALIAS"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"DEFAULT"),", or ",(0,s.kt)("inlineCode",{parentName:"li"},"MATERIALIZED"),", otherwise ",(0,s.kt)("inlineCode",{parentName:"li"},"NULL"),". (Nullable(String))"),(0,s.kt)("li",{parentName:"ul"},"extra - Additional information, currently unused (String)"),(0,s.kt)("li",{parentName:"ul"},"collation - (only if ",(0,s.kt)("inlineCode",{parentName:"li"},"FULL")," keyword was specified) Collation of the column, always ",(0,s.kt)("inlineCode",{parentName:"li"},"NULL")," because ClickHouse has no per-column collations (Nullable(String))"),(0,s.kt)("li",{parentName:"ul"},"comment - (only if ",(0,s.kt)("inlineCode",{parentName:"li"},"FULL")," keyword was specified) Comment on the column (String)"),(0,s.kt)("li",{parentName:"ul"},"privilege - (only if ",(0,s.kt)("inlineCode",{parentName:"li"},"FULL")," keyword was specified) The privilege you have on this column, currently not available (String)")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Getting information about all columns in table 'order' starting with 'delivery_':"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW COLUMNS FROM 'orders' LIKE 'delivery_%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500field\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u252c\u2500null\u2500\u252c\u2500key\u2500\u2500\u2500\u2500\u2500\u252c\u2500default\u2500\u252c\u2500extra\u2500\u2510\n\u2502 delivery_date   \u2502 DateTime \u2502    0 \u2502 PRI SOR \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502       \u2502\n\u2502 delivery_status \u2502 Bool     \u2502    0 \u2502         \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://clickhouse.com/docs/en/operations/system-tables/columns"},"system.columns"))),(0,s.kt)("h2",{id:"show-dictionaries"},"SHOW DICTIONARIES"),(0,s.kt)("p",null,"Displays a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries"},"Dictionaries"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DICTIONARIES [FROM <db>] [LIKE '<pattern>'] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,s.kt)("p",null,"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM")," clause is not specified, the query returns the list of dictionaries from the current database."),(0,s.kt)("p",null,"You can get the same results as the ",(0,s.kt)("inlineCode",{parentName:"p"},"SHOW DICTIONARIES")," query in the following way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM system.dictionaries WHERE database = <db> [AND name LIKE <pattern>] [LIMIT <N>] [INTO OUTFILE <filename>] [FORMAT <format>]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"The following query selects the first two rows from the list of tables in the ",(0,s.kt)("inlineCode",{parentName:"p"},"system")," database, whose names contain ",(0,s.kt)("inlineCode",{parentName:"p"},"reg"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DICTIONARIES FROM db LIKE '%reg%' LIMIT 2\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 regions      \u2502\n\u2502 region_names \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"show-grants"},"SHOW GRANTS"),(0,s.kt)("p",null,"Shows privileges for a user."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW GRANTS [FOR user1 [, user2 ...]]\n")),(0,s.kt)("p",null,"If user is not specified, the query returns privileges for the current user."),(0,s.kt)("h2",{id:"show-create-user"},"SHOW CREATE USER"),(0,s.kt)("p",null,"Shows parameters that were used at a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/user"},"user creation"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SHOW CREATE USER")," does not output user passwords."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE USER [name1 [, name2 ...] | CURRENT_USER]\n")),(0,s.kt)("h2",{id:"show-create-role"},"SHOW CREATE ROLE"),(0,s.kt)("p",null,"Shows parameters that were used at a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/role"},"role creation"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE ROLE name1 [, name2 ...]\n")),(0,s.kt)("h2",{id:"show-create-row-policy"},"SHOW CREATE ROW POLICY"),(0,s.kt)("p",null,"Shows parameters that were used at a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/row-policy"},"row policy creation"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [ROW] POLICY name ON [database1.]table1 [, [database2.]table2 ...]\n")),(0,s.kt)("h2",{id:"show-create-quota"},"SHOW CREATE QUOTA"),(0,s.kt)("p",null,"Shows parameters that were used at a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/quota"},"quota creation"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE QUOTA [name1 [, name2 ...] | CURRENT]\n")),(0,s.kt)("h2",{id:"show-create-settings-profile"},"SHOW CREATE SETTINGS PROFILE"),(0,s.kt)("p",null,"Shows parameters that were used at a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/settings-profile"},"settings profile creation"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE [SETTINGS] PROFILE name1 [, name2 ...]\n")),(0,s.kt)("h2",{id:"show-users"},"SHOW USERS"),(0,s.kt)("p",null,"Returns a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#user-account-management"},"user account")," names. To view user accounts parameters, see the system table ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/users#system_tables-users"},"system.users"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW USERS\n")),(0,s.kt)("h2",{id:"show-roles"},"SHOW ROLES"),(0,s.kt)("p",null,"Returns a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#role-management"},"roles"),". To view another parameters, see system tables ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/roles#system_tables-roles"},"system.roles")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/role-grants#system_tables-role_grants"},"system.role_grants"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CURRENT|ENABLED] ROLES\n")),(0,s.kt)("h2",{id:"show-profiles"},"SHOW PROFILES"),(0,s.kt)("p",null,"Returns a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#settings-profiles-management"},"setting profiles"),". To view user accounts parameters, see the system table ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/settings_profiles#system_tables-settings_profiles"},"settings_profiles"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [SETTINGS] PROFILES\n")),(0,s.kt)("h2",{id:"show-policies"},"SHOW POLICIES"),(0,s.kt)("p",null,"Returns a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#row-policy-management"},"row policies")," for the specified table. To view user accounts parameters, see the system table ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/row_policies#system_tables-row_policies"},"system.row_policies"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [ROW] POLICIES [ON [db.]table]\n")),(0,s.kt)("h2",{id:"show-quotas"},"SHOW QUOTAS"),(0,s.kt)("p",null,"Returns a list of ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#quotas-management"},"quotas"),". To view quotas parameters, see the system table ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/quotas#system_tables-quotas"},"system.quotas"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW QUOTAS\n")),(0,s.kt)("h2",{id:"show-quota"},"SHOW QUOTA"),(0,s.kt)("p",null,"Returns a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/quotas"},"quota")," consumption for all users or for current user. To view another parameters, see system tables ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/quotas_usage#system_tables-quotas_usage"},"system.quotas_usage")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/quota_usage#system_tables-quota_usage"},"system.quota_usage"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CURRENT] QUOTA\n")),(0,s.kt)("h2",{id:"show-access"},"SHOW ACCESS"),(0,s.kt)("p",null,"Shows all ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#user-account-management"},"users"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#role-management"},"roles"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#settings-profiles-management"},"profiles"),", etc. and all their ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privileges"},"grants"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ACCESS\n")),(0,s.kt)("h2",{id:"show-clusters"},"SHOW CLUSTER(s)"),(0,s.kt)("p",null,"Returns a list of clusters. All available clusters are listed in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/clusters"},"system.clusters")," table."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"SHOW CLUSTER name")," query displays the contents of system.clusters table for this cluster.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTER '<name>'\nSHOW CLUSTERS [[NOT] LIKE|ILIKE '<pattern>'] [LIMIT <N>]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTERS;\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_cluster_two_shards                      \u2502\n\u2502 test_cluster_two_shards_internal_replication \u2502\n\u2502 test_cluster_two_shards_localhost            \u2502\n\u2502 test_shard_localhost                         \u2502\n\u2502 test_shard_localhost_secure                  \u2502\n\u2502 test_unavailable_shard                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTERS LIKE 'test%' LIMIT 1;\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cluster\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_cluster_two_shards \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CLUSTER 'test_shard_localhost' FORMAT Vertical;\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ncluster:                 test_shard_localhost\nshard_num:               1\nshard_weight:            1\nreplica_num:             1\nhost_name:               localhost\nhost_address:            127.0.0.1\nport:                    9000\nis_local:                1\nuser:                    default\ndefault_database:\nerrors_count:            0\nestimated_recovery_time: 0\n")),(0,s.kt)("h2",{id:"show-settings"},"SHOW SETTINGS"),(0,s.kt)("p",null,"Returns a list of system settings and their values. Selects data from the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/settings"},"system.settings")," table."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW [CHANGED] SETTINGS LIKE|ILIKE <name>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Clauses")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"LIKE|ILIKE")," allow to specify a matching pattern for the setting name. It can contain globs such as ",(0,s.kt)("inlineCode",{parentName:"p"},"%")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"_"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"LIKE")," clause is case-sensitive, ",(0,s.kt)("inlineCode",{parentName:"p"},"ILIKE")," \u2014 case insensitive."),(0,s.kt)("p",null,"When the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHANGED")," clause is used, the query returns only settings changed from their default values."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Query with the ",(0,s.kt)("inlineCode",{parentName:"p"},"LIKE")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SETTINGS LIKE 'send_timeout';\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 send_timeout \u2502 Seconds \u2502 300   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Query with the ",(0,s.kt)("inlineCode",{parentName:"p"},"ILIKE")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW SETTINGS ILIKE '%CONNECT_timeout%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 connect_timeout                         \u2502 Seconds      \u2502 10    \u2502\n\u2502 connect_timeout_with_failover_ms        \u2502 Milliseconds \u2502 50    \u2502\n\u2502 connect_timeout_with_failover_secure_ms \u2502 Milliseconds \u2502 100   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Query with the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHANGED")," clause:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CHANGED SETTINGS ILIKE '%MEMORY%'\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 max_memory_usage \u2502 UInt64 \u2502 10000000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"show-filesystem-caches"},"SHOW FILESYSTEM CACHES"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW FILESYSTEM CACHES\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500Caches\u2500\u2500\u2500\u2500\u2510\n\u2502 s3_cache  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/settings"},"system.settings")," table")),(0,s.kt)("h2",{id:"show-engines"},"SHOW ENGINES"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW ENGINES [INTO OUTFILE filename] [FORMAT format]\n")),(0,s.kt)("p",null,"Outputs the content of the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/table_engines"},"system.table_engines")," table, that contains description of table engines supported by server and their feature support information."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/table_engines"},"system.table_engines")," table")))}c.isMDXComponent=!0}}]);