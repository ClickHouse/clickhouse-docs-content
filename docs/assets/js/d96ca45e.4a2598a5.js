"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80951],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,k=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51908:(e,a,t)=>{t.d(a,{ZP:()=>r});var n=t(87462),i=(t(67294),t(3905));const l={toc:[]};function r(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page is not applicable to ClickHouse Cloud. The feature documented here is not yet available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility#roadmap"},"Cloud Compatibility")," guide for more information."))))}r.isMDXComponent=!0},87632:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=t(87462),i=(t(67294),t(3905)),l=t(51908);const r={sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},o="Replicate a MySQL Database in ClickHouse",s={unversionedId:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine",id:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine",title:"Replicate a MySQL Database in ClickHouse",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",source:"@site/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine.md",sourceDirName:"en/integrations/data-ingestion/dbms/mysql",slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse-database-engine",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse-database-engine.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},sidebar:"english",previous:{title:"Connect MySQL and ClickHouse",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse"},next:{title:"PostgreSQL",permalink:"/docs/en/integrations/postgresql"}},c={},m=[{value:"1. Configure MySQL",id:"1-configure-mysql",level:2},{value:"2. Configure ClickHouse",id:"2-configure-clickhouse",level:2},{value:"3. Test the Integration",id:"3-test-the-integration",level:2},{value:"Summary",id:"summary",level:2}],d={toc:m};function p(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replicate-a-mysql-database-in-clickhouse"},"Replicate a MySQL Database in ClickHouse"),(0,i.kt)(l.ZP,{mdxType:"SelfManaged"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables. On the MySQL side, DDL and DML operations can continue to made and ClickHouse detects the changes and acts as a replica to MySQL database."),(0,i.kt)("p",null,"This article demonstrates how to configure MySQL and ClickHouse to implement this replication."),(0,i.kt)("h2",{id:"1-configure-mysql"},"1. Configure MySQL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the MySQL database to allow for replication and native authentication. ClickHouse only works with native password authentication. Add the following entries to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"default-authentication-plugin = mysql_native_password\ngtid-mode = ON\nenforce-gtid-consistency = ON\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a user to connect from ClickHouse:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER clickhouse_user IDENTIFIED BY 'ClickHouse_123';\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Grant the needed permissions to the new user. For demonstration purposes, full admin rights have been granted here:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON *.* TO 'clickhouse_user'@'%';\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The minimal permissions needed for the MySQL user are ",(0,i.kt)("strong",{parentName:"p"},"RELOAD"),", ",(0,i.kt)("strong",{parentName:"p"},"REPLICATION SLAVE"),", ",(0,i.kt)("strong",{parentName:"p"},"REPLICATION CLIENT")," and ",(0,i.kt)("strong",{parentName:"p"},"SELECT PRIVILEGE"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a database in MySQL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table_1 (\n    id INT,\n    column1 VARCHAR(10),\n    PRIMARY KEY (`id`)\n) ENGINE = InnoDB;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert a few sample rows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1)\nVALUES\n  (1, 'abc'),\n  (2, 'def'),\n  (3, 'ghi');\n")))),(0,i.kt)("h2",{id:"2-configure-clickhouse"},"2. Configure ClickHouse"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set parameter to allow use of experimental feature:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set allow_experimental_database_materialized_mysql = 1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a database that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1_mysql\nENGINE = MaterializedMySQL(\n  'mysql-host.domain.com:3306',\n  'db1',\n  'clickhouse_user',\n  'ClickHouse_123'\n);\n")),(0,i.kt)("p",{parentName:"li"},"The minimum parameters are:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"host:port"),(0,i.kt)("td",{parentName:"tr",align:null},"hostname or IP and port"),(0,i.kt)("td",{parentName:"tr",align:null},"mysql-host.domain.com")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"mysql database name"),(0,i.kt)("td",{parentName:"tr",align:null},"db1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"username to connect to mysql"),(0,i.kt)("td",{parentName:"tr",align:null},"clickhouse_user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"password to connect to mysql"),(0,i.kt)("td",{parentName:"tr",align:null},"ClickHouse_123")))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"View the ",(0,i.kt)("a",{target:"_blank",href:t(84243).Z},"MaterializedMySQL database engine")," doc page for a complete list of parameters."))))),(0,i.kt)("h2",{id:"3-test-the-integration"},"3. Test the Integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In MySQL, insert a sample row:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1)\nVALUES\n  (4, 'jkl');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice the new row appears in the ClickHouse table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1\nFROM db1_mysql.table_1\n")),(0,i.kt)("p",{parentName:"li"},"The response looks like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: d61a5840-63ca-4a3d-8fac-c93235985654\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.030 sec.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Suppose the table in MySQL is modified. Let's a column to ",(0,i.kt)("inlineCode",{parentName:"p"},"db1.table_1")," in MySQL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"alter table db1.table_1 add column column2 varchar(10) after column1;\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now let's insert a row to the modified table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1\n  (id, column1, column2)\nVALUES\n  (5, 'mno', 'pqr');\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice the talbe in ClickHouse now has the new column and the new row:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1,\n    column2\nFROM db1_mysql.table_1\n")),(0,i.kt)("p",{parentName:"li"},"The previous rows will have ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"column2"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 2c32fd15-3c83-480b-9bfc-cba5d932d674\n\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  2 \u2502 def     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 abc     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2502  5 \u2502 mno     \u2502 pqr     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n5 rows in set. Elapsed: 0.017 sec.\n")))),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"That's it! The ",(0,i.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine will keep the MySQL database synced on ClickHouse. There are a few details and limitations, so be sure to read the ",(0,i.kt)("a",{target:"_blank",href:t(84243).Z},"doc page for MaterializedMySQL")," for more details."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you just want to move data between MySQL and ClickHouse, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/integrations/mysql/mysql-with-clickhouse"},"MySQL table engine"),"."))))}p.isMDXComponent=!0},84243:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/files/materialized-mysql-36972e7bda5bf221857871228b7b1a4b.md"}}]);