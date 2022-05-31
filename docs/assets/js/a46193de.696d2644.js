"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37391],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),N=r,k=u["".concat(p,".").concat(N)]||u[N]||o[N]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return o}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:30,sidebar_label:"MySQL"},p="MySQL",d={unversionedId:"ru/engines/database-engines/mysql",id:"ru/engines/database-engines/mysql",title:"MySQL",description:"mysql}",source:"@site/docs/ru/engines/database-engines/mysql.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/mysql",permalink:"/docs/ru/engines/database-engines/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/database-engines/mysql.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,sidebar_label:"MySQL"},sidebar:"russia",previous:{title:"MaterializedPostgreSQL",permalink:"/docs/ru/engines/database-engines/materialized-postgresql"},next:{title:"Lazy",permalink:"/docs/ru/engines/database-engines/lazy"}},m={},o=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"sozdanie-bazy-dannykh",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445",id:"podderzhka-tipov-dannykh",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445",id:"global-variables-support",level:2}],u={toc:o};function N(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0431\u0430\u0437\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c MySQL \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 ClickHouse \u0438 MySQL."),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 MySQL, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE"),"."),(0,l.kt)("p",null,"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RENAME")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER"))),(0,l.kt)("h2",{id:"sozdanie-bazy-dannykh"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MySQL('host:port', ['database' | database], 'user', 'password')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 MySQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c MySQL."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,l.kt)("h2",{id:"podderzhka-tipov-dannykh"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED INT, UNSIGNED MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT, MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Float32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"DateTime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"FixedString"))))),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0440\u043e\u0447\u0438\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u0432 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/mysql"},"String"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/mysql"},"Nullable")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d."),(0,l.kt)("h2",{id:"global-variables-support"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 MySQL, \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"@@identifier"),"."),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_allowed_packet"))),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},'\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u044d\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u043a "\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438" \u0438 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.\n')),(0,l.kt)("p",{parentName:"div"},"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT @@version;\n")),(0,l.kt)("h2",{parentName:"div",id:"primery-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",{parentName:"div"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 MySQL:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> USE test;\nDatabase changed\n\nmysql> CREATE TABLE `mysql_table` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `float` FLOAT NOT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into mysql_table (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from mysql_table;\n+--------+-------+\n| int_id | value |\n+--------+-------+\n|      1 |     2 |\n+--------+-------+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",{parentName:"div"},"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c MySQL:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql_db ENGINE = MySQL('localhost:3306', 'test', 'my_user', 'user_password')\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default  \u2502\n\u2502 mysql_db \u2502\n\u2502 system   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM mysql_db\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  mysql_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_db.mysql_table VALUES (3,4)\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}N.isMDXComponent=!0}}]);