"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99693],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,N=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(N,i(i({ref:t},c),{},{components:n})):a.createElement(N,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:42,sidebar_label:"mysql"},o="mysql",p={unversionedId:"en/sql-reference/table-functions/mysql",id:"en/sql-reference/table-functions/mysql",title:"mysql",description:"mysql}",source:"@site/docs/en/sql-reference/table-functions/mysql.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/mysql",permalink:"/docs/en/sql-reference/table-functions/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/mysql.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"mysql"},sidebar:"english",previous:{title:"url",permalink:"/docs/en/sql-reference/table-functions/url"},next:{title:"postgresql",permalink:"/docs/en/sql-reference/table-functions/postgresql"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql"},"mysql"),(0,l.kt)("p",null,"Allows ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to be performed on data that is stored on a remote MySQL server."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql('host:port', 'database', 'table', 'user', 'password'[, replace_query, 'on_duplicate_clause'])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 MySQL server address.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"database")," \u2014 Remote database name.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"table")," \u2014 Remote table name.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u2014 MySQL user.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"password")," \u2014 User password.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"replace_query")," \u2014 Flag that converts ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," queries to ",(0,l.kt)("inlineCode",{parentName:"p"},"REPLACE INTO"),". Possible values:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," - The query is executed as ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT INTO"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," - The query is executed as ",(0,l.kt)("inlineCode",{parentName:"li"},"REPLACE INTO"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," \u2014 The ",(0,l.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY on_duplicate_clause")," expression that is added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," query. Can be specified only with ",(0,l.kt)("inlineCode",{parentName:"p"},"replace_query = 0")," (if you simultaneously pass ",(0,l.kt)("inlineCode",{parentName:"p"},"replace_query = 1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause"),", ClickHouse generates an exception)."),(0,l.kt)("p",{parentName:"li"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT INTO t (c1,c2) VALUES ('a', 2) ON DUPLICATE KEY UPDATE c2 = c2 + 1;")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," here is ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE c2 = c2 + 1"),". See the MySQL documentation to find which ",(0,l.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," you can use with the ",(0,l.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY")," clause."))),(0,l.kt)("p",null,"Simple ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses such as ",(0,l.kt)("inlineCode",{parentName:"p"},"=, !=, >, >=, <, <=")," are currently executed on the MySQL server."),(0,l.kt)("p",null,"The rest of the conditions and the ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," sampling constraint are executed in ClickHouse only after the query to MySQL finishes."),(0,l.kt)("p",null,"Supports multiple replicas that must be listed by ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),". For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM mysql(`mysql{1|2|3}:3306`, 'mysql_database', 'mysql_table', 'user', 'password');\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM mysql(`mysql1:3306|mysql2:3306|mysql3:3306`, 'mysql_database', 'mysql_table', 'user', 'password');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned Value")),(0,l.kt)("p",null,"A table object with the same columns as the original MySQL table."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," query to distinguish table function ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql(...)")," from table name with column names list, you must use keywords ",(0,l.kt)("inlineCode",{parentName:"p"},"FUNCTION")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"TABLE FUNCTION"),". See examples below."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Table in MySQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `float` FLOAT NOT NULL,\n    ->   PRIMARY KEY (`int_id`));\n\nmysql> INSERT INTO test (`int_id`, `float`) VALUES (1,2);\n\nmysql> SELECT * FROM test;\n+--------+-------+\n| int_id | float |\n+--------+-------+\n|      1 |     2 |\n+--------+-------+\n")),(0,l.kt)("p",null,"Selecting data from ClickHouse:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql('localhost:3306', 'test', 'test', 'bayonet', '123');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Replacing and inserting:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION mysql('localhost:3306', 'test', 'test', 'bayonet', '123', 1) (int_id, float) VALUES (1, 3);\nINSERT INTO TABLE FUNCTION mysql('localhost:3306', 'test', 'test', 'bayonet', '123', 0, 'UPDATE int_id = int_id + 1') (int_id, float) VALUES (1, 4);\nSELECT * FROM mysql('localhost:3306', 'test', 'test', 'bayonet', '123');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float\u2500\u2510\n\u2502      1 \u2502     3 \u2502\n\u2502      2 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/mysql"},"The \u2018MySQL\u2019 table engine")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-mysql"},"Using MySQL as a source of external dictionary"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table_functions/mysql/"},"Original article")," "))}d.isMDXComponent=!0}}]);