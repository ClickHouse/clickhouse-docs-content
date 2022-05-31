"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90240],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20043:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],p={sidebar_position:35,sidebar_label:"PostgreSQL"},i="PostgreSQL",o={unversionedId:"ru/engines/database-engines/postgresql",id:"ru/engines/database-engines/postgresql",title:"PostgreSQL",description:"postgresql}",source:"@site/docs/ru/engines/database-engines/postgresql.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/postgresql",permalink:"/docs/ru/engines/database-engines/postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/database-engines/postgresql.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"PostgreSQL"},sidebar:"russia",previous:{title:"SQLite",permalink:"/docs/ru/engines/database-engines/sqlite"},next:{title:"Replicated",permalink:"/docs/ru/engines/database-engines/replicated"}},u={},d=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414",id:"creating-a-database",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"data_types-support",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"examples-of-use",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0411\u0414 \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"PostgreSQL"),". \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0437\u0430\u043f\u0438\u0441\u0438 (\u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),") \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 ClickHouse \u0438 PostgreSQL."),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445 \u0411\u0414 \u0438 \u0438\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"DESCRIBE TABLE"),"."),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446 (",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... ADD|DROP COLUMN"),"). \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"use_table_cache")," (\u0441\u043c. \u043d\u0438\u0436\u0435 \u0440\u0430\u0437\u0434\u0435\u043b \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430) \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043a\u0435\u0448\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f, \u043d\u043e \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b, \u0435\u0441\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"DETACH")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ATTACH"),"."),(0,l.kt)("h2",{id:"creating-a-database"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test_database\nENGINE = PostgreSQL('host:port', 'database', 'user', 'password'[, `schema`, `use_table_cache`]);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0411\u0414."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema")," \u2014 \u0441\u0445\u0435\u043c\u0430 PostgreSQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_table_cache")," \u2014  \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0442\u0430\u0431\u043b\u0438\u0446 \u0411\u0414. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,l.kt)("h2",{id:"data_types-support"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PostgerSQL"),(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/date"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/float"},"Float32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/float"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL, NUMERIC"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/decimal"},"Decimal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SERIAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGSERIAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEXT, CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"Nullable(",(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int32"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/sql-reference/data-types/array"},"Array"))))),(0,l.kt)("h2",{id:"examples-of-use"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u041e\u0431\u043c\u0435\u043d \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0411\u0414 ClickHouse \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c PostgreSQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test_database\nENGINE = PostgreSQL('postgres1:5432', 'test_database', 'postgres', 'mysecretpassword', 1);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default       \u2502\n\u2502 test_database \u2502\n\u2502 system        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM test_database;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 test_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0427\u0442\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b PostgreSQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500value\u2500\u2510\n\u2502  1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0438\u0441\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 PostgreSQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test_database.test_table VALUES (3,4);\nSELECT * FROM test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041f\u0443\u0441\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0431\u044b\u043b\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u0432 PostgreSQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"postgre> ALTER TABLE test_table ADD COLUMN data Text\n")),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0411\u0414 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"use_table_cache")," \u0431\u044b\u043b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 ClickHouse \u0431\u044b\u043b\u0430 \u043a\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0438 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id     \u2502 Nullable(Integer) \u2502\n\u2502 value  \u2502 Nullable(Integer) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \xab\u043e\u0442\u0446\u0435\u043f\u0438\u043b\u0438\xbb \u0438 \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u043e\u0432\u0430 \xab\u043f\u0440\u0438\u0446\u0435\u043f\u0438\u043b\u0438\xbb, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0430\u0441\u044c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE test_database.test_table;\nATTACH TABLE test_database.test_table;\nDESCRIBE TABLE test_database.test_table;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id     \u2502 Nullable(Integer) \u2502\n\u2502 value  \u2502 Nullable(Integer) \u2502\n\u2502 data   \u2502 Nullable(String)  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/database-engines/postgresql/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f")," "))}m.isMDXComponent=!0}}]);