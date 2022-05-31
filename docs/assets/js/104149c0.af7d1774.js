"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57088],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={sidebar_position:55,sidebar_label:"SQLite"},o="SQLite",c={unversionedId:"en/engines/database-engines/sqlite",id:"en/engines/database-engines/sqlite",title:"SQLite",description:"sqlite}",source:"@site/docs/en/engines/database-engines/sqlite.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/sqlite",permalink:"/docs/en/engines/database-engines/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/database-engines/sqlite.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"SQLite"},sidebar:"english",previous:{title:"MySQL",permalink:"/docs/en/engines/database-engines/mysql"},next:{title:"MaterializedPostgreSQL",permalink:"/docs/en/engines/database-engines/materialized-postgresql"}},p={},d=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Data Types Support",id:"data_types-support",level:2},{value:"Specifics and Recommendations",id:"specifics-and-recommendations",level:2},{value:"Usage Example",id:"usage-example",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sqlite"},"SQLite"),(0,i.kt)("p",null,"Allows to connect to ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"SQLite")," database and perform ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries to exchange data between ClickHouse and SQLite. "),(0,i.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"    CREATE DATABASE sqlite_database \n    ENGINE = SQLite('db_path')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 Path to a file with SQLite database.")),(0,i.kt)("h2",{id:"data_types-support"},"Data Types Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SQLite"),(0,i.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/int-uint"},"Int32"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REAL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/float"},"Float32"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/en/sql-reference/data-types/string"},"String"))))),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"Specifics and Recommendations"),(0,i.kt)("p",null,"SQLite stores the entire database (definitions, tables, indices, and the data itself) as a single cross-platform file on a host machine. During writing SQLite locks the entire database file, therefore write operations are performed sequentially. Read operations can be multitasked.\nSQLite does not require service management (such as startup scripts) or access control based on ",(0,i.kt)("inlineCode",{parentName:"p"},"GRANT")," and passwords. Access control is handled by means of file-system permissions given to the database file itself."),(0,i.kt)("h2",{id:"usage-example"},"Usage Example"),(0,i.kt)("p",null,"Database in ClickHouse, connected to the SQLite:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE sqlite_db ENGINE = SQLite('sqlite.db');\nSHOW TABLES FROM sqlite_db;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500name\u2500\u2500\u2500\u2510\n\u2502 table1  \u2502\n\u2502 table2  \u2502  \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Shows the tables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite_db.table1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Inserting data into SQLite table from ClickHouse table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE clickhouse_table(`col1` String,`col2` Int16) ENGINE = MergeTree() ORDER BY col2;\nINSERT INTO clickhouse_table VALUES ('text',10);\nINSERT INTO sqlite_db.table1 SELECT * FROM clickhouse_table;\nSELECT * FROM sqlite_db.table1;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2502 text  \u2502   10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);