"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,c=m["".concat(o,".").concat(u)]||m[u]||g[u]||i;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/ru/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL"},l="MaterializedPostgreSQL",s={unversionedId:"ru/engines/table-engines/integrations/materialized-postgresql",id:"ru/engines/table-engines/integrations/materialized-postgresql",title:"MaterializedPostgreSQL",description:"materialize-postgresql}",source:"@site/docs/ru/engines/table-engines/integrations/materialized-postgresql.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/materialized-postgresql",permalink:"/docs/ru/engines/table-engines/integrations/materialized-postgresql",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/materialized-postgresql.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/ru/engines/table-engines/integrations/materialized-postgresql",sidebar_position:12,sidebar_label:"MaterializedPostgreSQL"},sidebar:"russia",previous:{title:"ExternalDistributed",permalink:"/docs/ru/engines/table-engines/integrations/ExternalDistributed"},next:{title:"RabbitMQ",permalink:"/docs/ru/engines/table-engines/integrations/rabbitmq"}},o={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"requirements",level:2},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b",id:"virtual-columns",level:2}],d={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"materialize-postgresql"},"MaterializedPostgreSQL"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ClickHouse \u0441 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u0434\u0430\u043c\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u044b PostgreSQL \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u0442.\u0435. \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0444\u043e\u043d\u0435, \u043a\u0430\u043a \u044d\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 PostgreSQL \u0432 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 PostgreSQL."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0432\u043c\u0435\u0441\u0442\u043e \u0434\u0432\u0438\u0436\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0438\u0436\u043e\u043a \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL")," \u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#materialized-postgresql-tables-list"},"materialized_postgresql_tables_list")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \u042d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u043c\u043d\u043e\u0433\u043e \u043b\u0443\u0447\u0448\u0435 \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043d\u0430 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440, \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0442\u043e\u0432 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 PostgreSQL."),(0,a.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 PostgreSQL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table")," \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0430 \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c PostgreSQL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,a.kt)("h2",{id:"requirements"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://postgrespro.ru/docs/postgrespro/10/runtime-config-wal"},"wal_level")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"logical"),", \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_replication_slots")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d \u043f\u043e \u043c\u0435\u043d\u044c\u0448\u0435\u0439 \u043c\u0435\u0440\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0432 PostgreSQL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u0430\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0432\u0438\u0436\u043a\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"MaterializedPostgreSQL"),", \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u043c\u0435\u0442\u044c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u2014 \u0442\u0430\u043a\u043e\u0439 \u0436\u0435, \u043a\u0430\u043a replica identity index (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447) \u0442\u0430\u0431\u043b\u0438\u0446\u044b PostgreSQL (\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/database-engines/materialized-postgresql#requirements"},"replica identity index"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0414\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomicity_(database_systems)"},"Atomic"),"."))),(0,a.kt)("h2",{id:"virtual-columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_version")," \u2014 \u0441\u0447\u0435\u0442\u0447\u0438\u043a \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439. \u0422\u0438\u043f: ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_sign")," \u2014 \u043c\u0435\u0442\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f. \u0422\u0438\u043f: ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Int8"),". \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0430, "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430.")))),(0,a.kt)("p",null,"\u042d\u0442\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u041e\u043d\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u0435.\n\u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,a.kt)("inlineCode",{parentName:"p"},"_version")," \u0440\u0430\u0432\u0435\u043d \u043f\u043e\u0437\u0438\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"LSN")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"WAL"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0438."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE postgresql_db.postgresql_replica (key UInt64, value UInt64)\nENGINE = MaterializedPostgreSQL('postgres1:5432', 'postgres_database', 'postgresql_replica', 'postgres_user', 'postgres_password')\nPRIMARY KEY key;\n\nSELECT key, value, _version FROM postgresql_db.postgresql_replica;\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f **TOAST**-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f. \u0414\u043b\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.\n")))))}g.isMDXComponent=!0}}]);