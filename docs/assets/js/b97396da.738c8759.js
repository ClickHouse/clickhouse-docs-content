"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||i;return n?l.createElement(d,r(r({ref:t},p),{},{components:n})):l.createElement(d,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var l=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],o={slug:"/ru/engines/table-engines/integrations/mysql",sidebar_position:4,sidebar_label:"MySQL"},u="MySQL",s={unversionedId:"ru/engines/table-engines/integrations/mysql",id:"ru/engines/table-engines/integrations/mysql",title:"MySQL",description:"mysql}",source:"@site/docs/ru/engines/table-engines/integrations/mysql.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/mysql",permalink:"/docs/ru/engines/table-engines/integrations/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/mysql.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/ru/engines/table-engines/integrations/mysql",sidebar_position:4,sidebar_label:"MySQL"},sidebar:"russia",previous:{title:"JDBC",permalink:"/docs/ru/engines/table-engines/integrations/jdbc"},next:{title:"S3",permalink:"/docs/ru/engines/table-engines/integrations/s3"}},p={},c=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"sozdanie-tablitsy",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"primer-ispolzovaniia",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"mysql-settings",level:2},{value:"connection_auto_close",id:"connection-auto-close",level:3},{value:"connection_max_tries",id:"connection-max-tries",level:3},{value:"connection_pool_size",id:"connection-pool-size",level:3},{value:"connection_wait_timeout",id:"connection-wait-timeout",level:3},{value:"connect_timeout",id:"connect-timeout",level:3},{value:"read_write_timeout",id:"read-write-timeout",level:3},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mysql"},"MySQL"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a MySQL \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," \u043d\u0430\u0434 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u043c\u0438\u0441\u044f \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c MySQL \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,i.kt)("h2",{id:"sozdanie-tablitsy"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1] [TTL expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2] [TTL expr2],\n    ...\n) ENGINE = MySQL('host:port', 'database', 'table', 'user', 'password'[, replace_query, 'on_duplicate_clause'])\nSETTINGS\n    [ connection_pool_size=16, ]\n    [ connection_max_tries=3, ]\n    [ connection_wait_timeout=5, ]\n    [ connection_auto_close=true, ]\n    [ connect_timeout=10, ]\n    [ read_write_timeout=300 ]    \n;\n")),(0,i.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE"),"."),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b MySQL:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0418\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435, \u043a\u0430\u043a \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 MySQL, \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438 \u0432 \u043b\u044e\u0431\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0438\u043f\u043e\u0432 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 MySQL. ClickHouse \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/engines/database-engines/mysql#data_types-support"},"\u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a \u0442\u0438\u043f\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#external-table-functions-use-nulls"},"external_table_functions_use_nulls")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1. \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 0, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0434\u0435\u043b\u0430\u0435\u0442 Nullable \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0430 \u0432\u043c\u0435\u0441\u0442\u043e NULL \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u042d\u0442\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 NULL \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 MySQL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c MySQL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replace_query")," \u2014 \u0444\u043b\u0430\u0433, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE INTO"),". \u0415\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"replace_query=1"),", \u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"on_duplicate_clause")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"ON DUPLICATE KEY on_duplicate_clause"),", \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0435 \u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u041f\u0440\u0438\u043c\u0435\u0440: `INSERT INTO t (c1,c2) VALUES ('a', 2) ON DUPLICATE KEY UPDATE c2 = c2 + 1`, \u0433\u0434\u0435 `on_duplicate_clause` \u044d\u0442\u043e `UPDATE c2 = c2 + 1`. \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 `on_duplicate_clause` \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u0441\u0435\u043a\u0446\u0438\u0435\u0439 `ON DUPLICATE KEY`  \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a [\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 MySQL](https://dev.mysql.com/doc/refman/8.0/en/insert-on-duplicate.html).\n\n\u0427\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u0430\u0442\u044c `on_duplicate_clause` \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c `0` \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 `replace_query`. \u0415\u0441\u043b\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c `replace_query = 1` \u0438 `on_duplicate_clause`, \u0442\u043e ClickHouse \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.\n")))),(0,i.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"=, !=, >, >=, <, =")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 MySQL."),(0,i.kt)("p",null,"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0432 ClickHouse \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a MySQL."),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u043f\u043b\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_replicas (id UInt32, name String, age UInt32, money UInt32) ENGINE = MySQL(`mysql{2|3|4}:3306`, 'clickhouse', 'test_replicas', 'root', 'clickhouse');\n")),(0,i.kt)("h2",{id:"primer-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 MySQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+--------+--------------+-------+----------------+\n| int_id | int_nullable | float | float_nullable |\n+--------+--------------+-------+----------------+\n|      1 |         NULL |     2 |           NULL |\n+--------+--------------+-------+----------------+\n1 row in set (0,00 sec)\n")),(0,i.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 ClickHouse, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u043d\u0435\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b MySQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_table\n(\n    `float_nullable` Nullable(Float32),\n    `int_id` Int32\n)\nENGINE = MySQL('localhost:3306', 'test', 'test', 'bayonet', '123')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500float_nullable\u2500\u252c\u2500int_id\u2500\u2510\n\u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"mysql-settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,i.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435. \u042d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),(0,i.kt)("h3",{id:"connection-auto-close"},"connection_auto_close"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 \u2014 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e (\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f)."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e (\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f).")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h3",{id:"connection-max-tries"},"connection_max_tries"),(0,i.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0434\u043b\u044f \u043f\u0443\u043b\u0430 \u0441\u043e \u0441\u0431\u043e\u044f\u043c\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,i.kt)("li",{parentName:"ul"},"0 \u2014 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u0434\u043b\u044f \u043f\u0443\u043b\u0430 \u0441\u043e \u0441\u0431\u043e\u044f\u043c\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f.")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("h3",{id:"connection-pool-size"},"connection_pool_size"),(0,i.kt)("p",null,"\u0417\u0430\u0434\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u0443\u043b\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 (\u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f, \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0436\u0434\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u043a\u0430\u043a\u043e\u0435-\u043b\u0438\u0431\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u043e)."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"16"),"."),(0,i.kt)("h3",{id:"connection-wait-timeout"},"connection_wait_timeout"),(0,i.kt)("p",null,"\u0417\u0430\u0434\u0430\u0435\u0442 \u0442\u0430\u0439\u043c\u0430\u0443\u0442 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445) \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f (\u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f connection_pool_size), 0 - \u043d\u0435 \u0436\u0434\u0430\u0442\u044c."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("h3",{id:"connect-timeout"},"connect_timeout"),(0,i.kt)("p",null,"\u0417\u0430\u0434\u0430\u0435\u0442 \u0442\u0430\u0439\u043c\u0430\u0443\u0442 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445)."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,i.kt)("h3",{id:"read-write-timeout"},"read_write_timeout"),(0,i.kt)("p",null,"\u0417\u0430\u0434\u0430\u0435\u0442 \u0442\u0430\u0439\u043c\u0430\u0443\u0442 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0432\u0432\u043e\u0434\u0430/\u0432\u044b\u0432\u043e\u0434\u0430 (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445)."),(0,i.kt)("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,i.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("inlineCode",{parentName:"p"},"300"),"."),(0,i.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/table-functions/mysql"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f mysql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-mysql"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 MySQL \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u0434\u043b\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f"))))}k.isMDXComponent=!0}}]);