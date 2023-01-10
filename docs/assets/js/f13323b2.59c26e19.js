"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[45859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_label:"Connect MySQL and ClickHouse",sidebar_position:10,slug:"/en/integrations/mysql/mysql-with-clickhouse",description:"The MySQL table engine allows you to connect ClickHouse to MySQL.",keywords:["clickhouse","mysql","connect","integrate","table","engine"]},i="Connecting ClickHouse to MySQL using the MySQL Table Engine",o={unversionedId:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse",id:"en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse",title:"Connecting ClickHouse to MySQL using the MySQL Table Engine",description:"The MySQL table engine allows you to connect ClickHouse to MySQL.",source:"@site/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse.md",sourceDirName:"en/integrations/data-ingestion/dbms/mysql",slug:"/en/integrations/mysql/mysql-with-clickhouse",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/dbms/mysql/mysql-with-clickhouse.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Connect MySQL and ClickHouse",sidebar_position:10,slug:"/en/integrations/mysql/mysql-with-clickhouse",description:"The MySQL table engine allows you to connect ClickHouse to MySQL.",keywords:["clickhouse","mysql","connect","integrate","table","engine"]},sidebar:"english",previous:{title:"MySQL",permalink:"/docs/en/integrations/mysql"},next:{title:"Replicate a MySQL Database in ClickHouse",permalink:"/docs/en/integrations/mysql/mysql-with-clickhouse-database-engine"}},s={},c=[{value:"1. Configure MySQL",id:"1-configure-mysql",level:2},{value:"2. Define a Table in ClickHouse",id:"2-define-a-table-in-clickhouse",level:2},{value:"3. Test the Integration",id:"3-test-the-integration",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"connecting-clickhouse-to-mysql-using-the-mysql-table-engine"},"Connecting ClickHouse to MySQL using the MySQL Table Engine"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," table engine allows you to connect ClickHouse to MySQL. ",(0,l.kt)("strong",{parentName:"p"},"SELECT")," and ",(0,l.kt)("strong",{parentName:"p"},"INSERT")," statements can be made in either ClickHouse or in the MySQL table. This article illustrates the basic methods of how to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," table engine."),(0,l.kt)("h2",{id:"1-configure-mysql"},"1. Configure MySQL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a database in MySQL:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a table:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table1 (\n  id INT,\n  column1 VARCHAR(255)\n);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Insert sample rows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n  (id, column1)\nVALUES\n  (1, 'abc'),\n  (2, 'def'),\n  (3, 'ghi');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a user to connect from ClickHouse:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'mysql_clickhouse'@'%' IDENTIFIED BY 'Password123!';\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Grant privileges as needed. (For demonstration purposes, the ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql_clickhouse")," user is granted admin prvileges.)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON *.* TO 'mysql_clickhouse'@'%';\n")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are using this feaure in ClickHouse Cloud, you may need the to allow the ClickHouse Cloud IP addresses to access your MySQL instance.\nView the ClickHouse Cloud public list of ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/manage/security/ip-egress-traffic-list"},"IP address")," for egress traffic."))),(0,l.kt)("h2",{id:"2-define-a-table-in-clickhouse"},"2. Define a Table in ClickHouse"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now let's create a ClickHouse table that uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," table engine:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_table1 (\n  id UInt64,\n  column1 String\n)\nENGINE = MySQL('mysql-host.domain.com','db1','table1','mysql_clickhouse','Password123!')\n")),(0,l.kt)("p",{parentName:"li"},"The minimum parameters are:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"hostname or IP"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql-host.domain.com")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql database name"),(0,l.kt)("td",{parentName:"tr",align:null},"db1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql table name"),(0,l.kt)("td",{parentName:"tr",align:null},"table1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"username to connect to mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql_clickhouse")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"password to connect to mysql"),(0,l.kt)("td",{parentName:"tr",align:null},"Password123!")))),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"View the ",(0,l.kt)("a",{target:"_blank",href:n(71772).Z},"MySQL table engine")," doc page for a complete list of parameters."))))),(0,l.kt)("h2",{id:"3-test-the-integration"},"3. Test the Integration"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In MySQL, insert a sample row:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table1\n  (id, column1)\nVALUES\n  (4, 'jkl');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Notice the existing rows from the MySQL table are in the ClickHouse table, along with the new row you just added:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1\nFROM mysql_table1\n")),(0,l.kt)("p",{parentName:"li"},"You should see 4 rows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 6d590083-841e-4e95-8715-ef37d3e95197\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2502  2 \u2502 def     \u2502\n\u2502  3 \u2502 ghi     \u2502\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.044 sec.\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Let's add a row to the ClickHouse table:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_table1\n  (id, column1)\nVALUES\n  (5,'mno')\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Notice the new row appears in MySQL:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql> select id,column1 from db1.table1;\n")),(0,l.kt)("p",{parentName:"li"},"You should see the new row:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-response"},"+------+---------+\n| id   | column1 |\n+------+---------+\n|    1 | abc     |\n|    2 | def     |\n|    3 | ghi     |\n|    4 | jkl     |\n|    5 | mno     |\n+------+---------+\n5 rows in set (0.01 sec)\n")))),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," table engine allows you to connect ClickHouse to MySQL to exchange data back and forth. For more details, be sure to check out the documentation page for the ",(0,l.kt)("a",{target:"_blank",href:n(71772).Z},"MySQL table engine"),"."))}p.isMDXComponent=!0},71772:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/mysql-297abe2d9e8359e55618aae9a4418fed.md"}}]);