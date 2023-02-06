"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[80951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51908:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),i=(a(67294),a(3905));const l={toc:[]},r="wrapper";function o(e){let{components:t,...a}=e;return(0,i.kt)(r,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not yet available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility#roadmap"},"Cloud Compatibility")," guide for more information.")))}o.isMDXComponent=!0},87632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),l=a(51908);const r={sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},o="Replicate a MySQL Database in ClickHouse",s={unversionedId:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine",id:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine",title:"Replicate a MySQL Database in ClickHouse",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",source:"@site/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine.md",sourceDirName:"en/integrations/data-ingestion/dbms/mysql",slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse-database-engine",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},sidebar:"english",previous:{title:"Connect MySQL and ClickHouse",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse"},next:{title:"PostgreSQL",permalink:"/docs/en/integrations/postgresql"}},p={},c=[{value:"1. Configure MySQL",id:"1-configure-mysql",level:2},{value:"2. Configure ClickHouse",id:"2-configure-clickhouse",level:2},{value:"3. Test the Integration",id:"3-test-the-integration",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replicate-a-mysql-database-in-clickhouse"},"Replicate a MySQL Database in ClickHouse"),(0,i.kt)(l.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables. On the MySQL side, DDL and DML operations can continue to made and ClickHouse detects the changes and acts as a replica to MySQL database."),(0,i.kt)("p",null,"This article demonstrates how to configure MySQL and ClickHouse to implement this replication."),(0,i.kt)("h2",{id:"1-configure-mysql"},"1. Configure MySQL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the MySQL database to allow for replication and native authentication. ClickHouse only works with native password authentication. Add the following entries to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"default-authentication-plugin = mysql_native_password\ngtid-mode = ON\nenforce-gtid-consistency = ON\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a user to connect from ClickHouse:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER clickhouse_user IDENTIFIED BY 'ClickHouse_123';\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Grant the needed permissions to the new user. For demonstration purposes, full admin rights have been granted here:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON *.* TO 'clickhouse_user'@'%';\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimal permissions needed for the MySQL user are ",(0,i.kt)("strong",{parentName:"p"},"RELOAD"),", ",(0,i.kt)("strong",{parentName:"p"},"REPLICATION SLAVE"),", ",(0,i.kt)("strong",{parentName:"p"},"REPLICATION CLIENT")," and ",(0,i.kt)("strong",{parentName:"p"},"SELECT PRIVILEGE"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a database in MySQL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table_1 (\n    id INT,\n    column1 VARCHAR(10),\n    PRIMARY KEY (`id`)\n) ENGINE = InnoDB;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert a few sample rows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1)\nVALUES\n  (1, 'abc'),\n  (2, 'def'),\n  (3, 'ghi');\n")))),(0,i.kt)("h2",{id:"2-configure-clickhouse"},"2. Configure ClickHouse"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set parameter to allow use of experimental feature:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set allow_experimental_database_materialized_mysql = 1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a database that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1_mysql\nENGINE = MaterializedMySQL(\n  'mysql-host.domain.com:3306',\n  'db1',\n  'clickhouse_user',\n  'ClickHouse_123'\n);\n")),(0,i.kt)("p",{parentName:"li"},"The minimum parameters are:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host:port"),(0,i.kt)("td",{parentName:"tr",align:null},"hostname or IP and port"),(0,i.kt)("td",{parentName:"tr",align:null},"mysql-host.domain.com")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"mysql database name"),(0,i.kt)("td",{parentName:"tr",align:null},"db1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"username to connect to mysql"),(0,i.kt)("td",{parentName:"tr",align:null},"clickhouse_user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"password to connect to mysql"),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse_123")))),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"View the ",(0,i.kt)("a",{target:"_blank",href:a(84243).Z},"MaterializedMySQL database engine")," doc page for a complete list of parameters.")))),(0,i.kt)("h2",{id:"3-test-the-integration"},"3. Test the Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In MySQL, insert a sample row:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1)\nVALUES\n  (4, 'jkl');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice the new row appears in the ClickHouse table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1\nFROM db1_mysql.table_1\n")),(0,i.kt)("p",{parentName:"li"},"The response looks like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: d61a5840-63ca-4a3d-8fac-c93235985654\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.030 sec.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Suppose the table in MySQL is modified. Let's a column to ",(0,i.kt)("inlineCode",{parentName:"p"},"db1.table_1")," in MySQL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table db1.table_1 add column column2 varchar(10) after column1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now let's insert a row to the modified table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1, column2)\nVALUES\n  (5, 'mno', 'pqr');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice the talbe in ClickHouse now has the new column and the new row:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1,\n    column2\nFROM db1_mysql.table_1\n")),(0,i.kt)("p",{parentName:"li"},"The previous rows will have ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"column2"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 2c32fd15-3c83-480b-9bfc-cba5d932d674\n\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  2 \u2502 def     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 abc     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2502  5 \u2502 mno     \u2502 pqr     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n5 rows in set. Elapsed: 0.017 sec.\n")))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"That's it! The ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine will keep the MySQL database synced on ClickHouse. There are a few details and limitations, so be sure to read the ",(0,i.kt)("a",{target:"_blank",href:a(84243).Z},"doc page for MaterializedMySQL")," for more details."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you just want to move data between MySQL and ClickHouse, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/integrations/mysql/mysql-with-clickhouse"},"MySQL table engine"),".")))}u.isMDXComponent=!0},84243:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/materialized-mysql-8d0d91aca2a4794b35d05b64d5bd2559.md"}}]);