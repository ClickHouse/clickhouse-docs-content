"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37391],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),N=d(a),u=r,k=N["".concat(p,".").concat(u)]||N[u]||o[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=N;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},46149:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/ru/engines/database-engines/mysql",sidebar_position:30,sidebar_label:"MySQL"},i="MySQL",s={unversionedId:"ru/engines/database-engines/mysql",id:"ru/engines/database-engines/mysql",title:"MySQL",description:"mysql}",source:"@site/docs/ru/engines/database-engines/mysql.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/mysql",permalink:"/docs/ru/engines/database-engines/mysql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/database-engines/mysql.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"/ru/engines/database-engines/mysql",sidebar_position:30,sidebar_label:"MySQL"},sidebar:"russia",previous:{title:"MaterializedPostgreSQL",permalink:"/docs/ru/engines/database-engines/materialized-postgresql"},next:{title:"Lazy",permalink:"/docs/ru/engines/database-engines/lazy"}},p={},d=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"sozdanie-bazy-dannykh",level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445",id:"podderzhka-tipov-dannykh",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445",id:"global-variables-support",level:2}],m={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0431\u0430\u0437\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c MySQL \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 ClickHouse \u0438 MySQL."),(0,r.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," \u0442\u0440\u0430\u043d\u0441\u043b\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 MySQL, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE"),"."),(0,r.kt)("p",null,"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RENAME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER"))),(0,r.kt)("h2",{id:"sozdanie-bazy-dannykh"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MySQL('host:port', ['database' | database], 'user', 'password')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 MySQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c MySQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,r.kt)("h2",{id:"podderzhka-tipov-dannykh"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNSIGNED SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNSIGNED INT, UNSIGNED MEDIUMINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT, MEDIUMINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"UInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Int64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Float32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Float64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"DateTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/ru/engines/database-engines/mysql"},"FixedString"))))),(0,r.kt)("p",null,"\u0412\u0441\u0435 \u043f\u0440\u043e\u0447\u0438\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u044e\u0442\u0441\u044f \u0432 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/mysql"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/mysql"},"Nullable")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d."),(0,r.kt)("h2",{id:"global-variables-support"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 MySQL, \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"@@identifier"),"."),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_allowed_packet"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},'\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u044d\u0442\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0430\u043a "\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438" \u0438 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.\n')),(0,r.kt)("p",{parentName:"div"},"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT @@version;\n")),(0,r.kt)("h2",{parentName:"div",id:"primery-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("p",{parentName:"div"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 MySQL:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mysql> USE test;\nDatabase changed\n\nmysql> CREATE TABLE `mysql_table` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `float` FLOAT NOT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into mysql_table (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from mysql_table;\n+--------+-------+\n| int_id | value |\n+--------+-------+\n|      1 |     2 |\n+--------+-------+\n1 row in set (0,00 sec)\n")),(0,r.kt)("p",{parentName:"div"},"\u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0430\u044f \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c MySQL:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql_db ENGINE = MySQL('localhost:3306', 'test', 'my_user', 'user_password')\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default  \u2502\n\u2502 mysql_db \u2502\n\u2502 system   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM mysql_db\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  mysql_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_db.mysql_table VALUES (3,4)\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}o.isMDXComponent=!0}}]);