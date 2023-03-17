"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[41926],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(b,i(i({ref:n},u),{},{components:t})):a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const r={slug:"/en/engines/table-engines/integrations/odbc",sidebar_position:2,sidebar_label:"ODBC"},i="ODBC",s={unversionedId:"en/engines/table-engines/integrations/odbc",id:"en/engines/table-engines/integrations/odbc",title:"ODBC",description:"Allows ClickHouse to connect to external databases via ODBC.",source:"@site/docs/en/engines/table-engines/integrations/odbc.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/odbc",permalink:"/docs/en/engines/table-engines/integrations/odbc",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/odbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/engines/table-engines/integrations/odbc",sidebar_position:2,sidebar_label:"ODBC"},sidebar:"sqlreference",previous:{title:"Integrations",permalink:"/docs/en/engines/table-engines/integrations/"},next:{title:"JDBC",permalink:"/docs/en/engines/table-engines/integrations/jdbc"}},o={},c=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"odbc"},"ODBC"),(0,l.kt)("p",null,"Allows ClickHouse to connect to external databases via ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Database_Connectivity"},"ODBC"),"."),(0,l.kt)("p",null,"To safely implement ODBC connections, ClickHouse uses a separate program ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),". If the ODBC driver is loaded directly from ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", driver problems can crash the ClickHouse server. ClickHouse automatically starts ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge")," when it is required. The ODBC bridge program is installed from the same package as the ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"."),(0,l.kt)("p",null,"This engine supports the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable")," data type."),(0,l.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1],\n    name2 [type2],\n    ...\n)\nENGINE = ODBC(connection_settings, external_database, external_table)\n")),(0,l.kt)("p",null,"See a detailed description of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,l.kt)("p",null,"The table structure can differ from the source table structure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Column names should be the same as in the source table, but you can use just some of these columns and in any order."),(0,l.kt)("li",{parentName:"ul"},"Column types may differ from those in the source table. ClickHouse tries to ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"cast")," values to the ClickHouse data types."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#external-table-functions-use-nulls"},"external_table_functions_use_nulls")," setting defines how to handle Nullable columns. Default value: 1. If 0, the table function does not make Nullable columns and inserts default values instead of nulls. This is also applicable for NULL values inside arrays.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"connection_settings")," \u2014 Name of the section with connection settings in the ",(0,l.kt)("inlineCode",{parentName:"li"},"odbc.ini")," file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external_database")," \u2014 Name of a database in an external DBMS."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"external_table")," \u2014 Name of a table in the ",(0,l.kt)("inlineCode",{parentName:"li"},"external_database"),".")),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Retrieving data from the local MySQL installation via ODBC")),(0,l.kt)("p",null,"This example is checked for Ubuntu Linux 18.04 and MySQL server 5.7."),(0,l.kt)("p",null,"Ensure that unixODBC and MySQL Connector are installed."),(0,l.kt)("p",null,"By default (if installed from packages), ClickHouse starts as user ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse"),". Thus, you need to create and configure this user in the MySQL server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mysql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'clickhouse'@'localhost' IDENTIFIED BY 'clickhouse';\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'clickhouse'@'clickhouse' WITH GRANT OPTION;\n")),(0,l.kt)("p",null,"Then configure the connection in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/odbc.ini\n[mysqlconn]\nDRIVER = /usr/local/lib/libmyodbc5w.so\nSERVER = 127.0.0.1\nPORT = 3306\nDATABASE = test\nUSERNAME = clickhouse\nPASSWORD = clickhouse\n")),(0,l.kt)("p",null,"You can check the connection using the ",(0,l.kt)("inlineCode",{parentName:"p"},"isql")," utility from the unixODBC installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ isql -v mysqlconn\n+-------------------------+\n| Connected!                            |\n|                                       |\n...\n")),(0,l.kt)("p",null,"Table in MySQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+------+----------+-----+----------+\n| int_id | int_nullable | float | float_nullable |\n+------+----------+-----+----------+\n|      1 |         NULL |     2 |           NULL |\n+------+----------+-----+----------+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",null,"Table in ClickHouse, retrieving data from the MySQL table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE odbc_t\n(\n    `int_id` Int32,\n    `float_nullable` Nullable(Float32)\n)\nENGINE = ODBC('DSN=mysqlconn', 'test', 'test')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc_t\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries#dictionary-sources#dicts-external_dicts_dict_sources-odbc"},"ODBC dictionaries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/odbc"},"ODBC table function"))))}d.isMDXComponent=!0}}]);