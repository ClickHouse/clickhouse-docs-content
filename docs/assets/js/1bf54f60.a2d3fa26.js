"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/ru/engines/database-engines/sqlite",sidebar_position:32,sidebar_label:"SQLite"},i="SQLite",s={unversionedId:"ru/engines/database-engines/sqlite",id:"ru/engines/database-engines/sqlite",title:"SQLite",description:"sqlite}",source:"@site/docs/ru/engines/database-engines/sqlite.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/sqlite",permalink:"/docs/ru/engines/database-engines/sqlite",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/database-engines/sqlite.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{slug:"/ru/engines/database-engines/sqlite",sidebar_position:32,sidebar_label:"SQLite"},sidebar:"russia",previous:{title:"Atomic",permalink:"/docs/ru/engines/database-engines/atomic"},next:{title:"PostgreSQL",permalink:"/docs/ru/engines/database-engines/postgresql"}},o={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"creating-a-database",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"data_types-support",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"specifics-and-recommendations",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"usage-example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0431\u0430\u0437\u0435 ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"SQLite")," \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 ClickHouse \u0438 SQLite."),(0,r.kt)("h2",{id:"creating-a-database"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"    CREATE DATABASE sqlite_database \n    ENGINE = SQLite('db_path')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"db_path")," \u2014 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 SQLite.")),(0,r.kt)("h2",{id:"data_types-support"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SQLite"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/float"},"Float32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))))),(0,r.kt)("h2",{id:"specifics-and-recommendations"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),(0,r.kt)("p",null,"SQLite \u0445\u0440\u0430\u043d\u0438\u0442 \u0432\u0441\u044e \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 (\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0438 \u0441\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0435) \u0432 \u0432\u0438\u0434\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u043a\u0440\u043e\u0441\u0441\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043d\u0430 \u0445\u043e\u0441\u0442-\u043c\u0430\u0448\u0438\u043d\u0435. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0438\u0441\u0438 SQLite \u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0435\u0442 \u0432\u0435\u0441\u044c \u0444\u0430\u0439\u043b \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e. \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0437\u0430\u0434\u0430\u0447\u043d\u044b\u043c\u0438.\nSQLite \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043b\u0443\u0436\u0431\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f\u043c\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430) \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"GRANT")," \u0438 \u043f\u0430\u0440\u043e\u043b\u0435\u0439. \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u0441\u0430\u043c\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,r.kt)("h2",{id:"usage-example"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439 \u043a SQLite:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE sqlite_db ENGINE = SQLite('sqlite.db');\nSHOW TABLES FROM sqlite_db;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500name\u2500\u2500\u2500\u2510\n\u2502 table1  \u2502\n\u2502 table2  \u2502  \n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM sqlite_db.table1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 SQLite \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ClickHouse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE clickhouse_table(`col1` String,`col2` Int16) ENGINE = MergeTree() ORDER BY col2;\nINSERT INTO clickhouse_table VALUES ('text',10);\nINSERT INTO sqlite_db.table1 SELECT * FROM clickhouse_table;\nSELECT * FROM sqlite_db.table1;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500col1\u2500\u2500\u252c\u2500col2\u2500\u2510\n\u2502 line1 \u2502    1 \u2502\n\u2502 line2 \u2502    2 \u2502\n\u2502 line3 \u2502    3 \u2502\n\u2502 text  \u2502   10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);