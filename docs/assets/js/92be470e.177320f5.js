"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18042],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),s=["components"],o={slug:"/zh/sql-reference/table-functions/postgresql",sidebar_position:42,sidebar_label:"postgresql"},i="postgresql",p={unversionedId:"zh/sql-reference/table-functions/postgresql",id:"zh/sql-reference/table-functions/postgresql",title:"postgresql",description:"postgresql}",source:"@site/docs/zh/sql-reference/table-functions/postgresql.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/postgresql",permalink:"/docs/zh/sql-reference/table-functions/postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/postgresql.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{slug:"/zh/sql-reference/table-functions/postgresql",sidebar_position:42,sidebar_label:"postgresql"},sidebar:"chinese",previous:{title:"url",permalink:"/docs/zh/sql-reference/table-functions/url"},next:{title:"jdbc",permalink:"/docs/zh/sql-reference/table-functions/jdbc"}},c={},u=[{value:"\u5b9e\u65bd\u7ec6\u8282",id:"implementation-details",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgresql"},"postgresql"),(0,a.kt)("p",null,"\u5141\u8bb8\u5bf9\u5b58\u50a8\u5728\u8fdc\u7a0b PostgreSQL \u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgresql('host:port', 'database', 'table', 'user', 'password'[, `schema`])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 PostgreSQL \u670d\u52a1\u5668\u5730\u5740."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u8fdc\u7a0b\u6570\u636e\u5e93\u540d\u79f0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u8fdc\u7a0b\u8868\u540d\u79f0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 PostgreSQL \u7528\u6237."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u7528\u6237\u5bc6\u7801."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"schema")," \u2014 \u975e\u9ed8\u8ba4\u7684\u8868\u7ed3\u6784. \u53ef\u9009.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u4e00\u4e2a\u8868\u5bf9\u8c61\uff0c\u5176\u5217\u6570\u4e0e\u539f PostgreSQL \u8868\u7684\u5217\u6570\u76f8\u540c\u3002"),(0,a.kt)("p",null,'!!! info "Note"\n\u5728',(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u4e2d\uff0c\u4e3a\u4e86\u533a\u5206\u8868\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"postgresql(..)"),"\u548c\u8868\u540d\u4ee5\u53ca\u8868\u7684\u5217\u540d\u5217\u8868\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528\u5173\u952e\u5b57",(0,a.kt)("inlineCode",{parentName:"p"},"FUNCTION"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"TABLE FUNCTION"),"\u3002\u8bf7\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),(0,a.kt)("h2",{id:"implementation-details"},"\u5b9e\u65bd\u7ec6\u8282"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u5728 PostgreSQL \u4e0a\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY (SELECT ...) TO STDOUT")," \u7684\u65b9\u5f0f\u5728\u53ea\u8bfb\u7684 PostgreSQL \u4e8b\u52a1\u4e2d\u8fd0\u884c\uff0c\u6bcf\u6b21\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u540e\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE"),"\u5b50\u53e5\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"\uff01="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},">"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},">="),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"<="),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"IN"),"\uff0c\u5728PostgreSQL\u670d\u52a1\u5668\u4e0a\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u7684\u8fde\u63a5\u3001\u805a\u5408\u3001\u6392\u5e8f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"IN [ \u6570\u7ec4 ]"),"\u6761\u4ef6\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\u91c7\u6837\u7ea6\u675f\u53ea\u6709\u5728\u5bf9PostgreSQL\u7684\u67e5\u8be2\u7ed3\u675f\u540e\u624d\u4f1a\u5728ClickHouse\u4e2d\u6267\u884c\u3002"),(0,a.kt)("p",null,"PostgreSQL \u4e0a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},'COPY "table_name" (field1, field2, ... fieldN) FROM STDIN'),"\u7684\u65b9\u5f0f\u5728 PostgreSQL \u4e8b\u52a1\u4e2d\u8fd0\u884c\uff0c\u6bcf\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u8bed\u53e5\u540e\u81ea\u52a8\u63d0\u4ea4\u3002"),(0,a.kt)("p",null,"PostgreSQL \u6570\u7ec4\u7c7b\u578b\u5c06\u8f6c\u6362\u4e3a ClickHouse \u6570\u7ec4\u3002"),(0,a.kt)("p",null,'!!! info "Note"\n\u8981\u5c0f\u5fc3\uff0c\u5728 PostgreSQL \u4e2d\uff0c\u50cf Integer[] \u8fd9\u6837\u7684\u6570\u7ec4\u6570\u636e\u7c7b\u578b\u5217\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u884c\u4e2d\u5305\u542b\u4e0d\u540c\u7ef4\u5ea6\u7684\u6570\u7ec4\uff0c\u4f46\u5728 ClickHouse \u4e2d\uff0c\u53ea\u5141\u8bb8\u5728\u6240\u6709\u7684\u884c\u4e2d\u6709\u76f8\u540c\u7ef4\u5ea6\u7684\u591a\u7ef4\u6570\u7ec4\u3002'),(0,a.kt)("p",null,"\u652f\u6301\u8bbe\u7f6e PostgreSQL \u5b57\u5178\u6e90\u4e2d Replicas \u7684\u4f18\u5148\u7ea7\u3002\u5730\u56fe\u4e2d\u7684\u6570\u5b57\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u5c31\u8d8a\u4f4e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u4ee3\u8868\u6700\u9ad8\u7684\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"PostgreSQL \u4e2d\u7684\u8868:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE TABLE "public"."test" (\n"int_id" SERIAL,\n"int_nullable" INT NULL DEFAULT NULL,\n"float" FLOAT NOT NULL,\n"str" VARCHAR(100) NOT NULL DEFAULT \'\',\n"float_nullable" FLOAT NULL DEFAULT NULL,\nPRIMARY KEY (int_id));\n\nCREATE TABLE\n\npostgres=# INSERT INTO test (int_id, str, "float") VALUES (1,\'test\',2);\nINSERT 0 1\n\npostgresql> SELECT * FROM test;\n  int_id | int_nullable | float | str  | float_nullable\n --------+--------------+-------+------+----------------\n       1 |              |     2 | test |\n(1 row)\n')),(0,a.kt)("p",null,"\u4ece ClickHouse \u68c0\u7d22\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM postgresql('localhost:5432', 'test', 'test', 'postgresql_user', 'password') WHERE str IN ('test');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500str\u2500\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502 test \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u63d2\u5165\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION postgresql('localhost:5432', 'test', 'test', 'postgrsql_user', 'password') (int_id, float) VALUES (2, 3);\nSELECT * FROM postgresql('localhost:5432', 'test', 'test', 'postgresql_user', 'password');\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500str\u2500\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502 test \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502      2 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     3 \u2502      \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u975e\u9ed8\u8ba4\u7684\u8868\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'postgres=# CREATE SCHEMA "nice.schema";\n\npostgres=# CREATE TABLE "nice.schema"."nice.table" (a integer);\n\npostgres=# INSERT INTO "nice.schema"."nice.table" SELECT i FROM generate_series(0, 99) as t(i)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pg_table_schema_with_dots (a UInt32)\n        ENGINE PostgreSQL('localhost:5432', 'clickhouse', 'nice.table', 'postgrsql_user', 'password', 'nice.schema');\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/integrations/postgresql"},"PostgreSQL \u8868\u5f15\u64ce")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-postgresql"},"\u4f7f\u7528 PostgreSQL \u4f5c\u4e3a\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/postgresql/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);