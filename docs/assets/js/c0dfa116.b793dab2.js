"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[26083],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81297:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={sidebar_position:32,sidebar_label:"Atomic"},s="Atomic",p={unversionedId:"ru/engines/database-engines/atomic",id:"ru/engines/database-engines/atomic",title:"Atomic",description:"atomic}",source:"@site/docs/ru/engines/database-engines/atomic.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/atomic",permalink:"/ru/engines/database-engines/atomic",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/database-engines/atomic.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,sidebar_label:"Atomic"},sidebar:"russia",previous:{title:"Lazy",permalink:"/ru/engines/database-engines/lazy"},next:{title:"SQLite",permalink:"/ru/engines/database-engines/sqlite"}},c={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414",id:"creating-a-database",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"specifics-and-recommendations",level:2},{value:"UUID",id:"table-uuid",level:3},{value:"RENAME TABLE",id:"rename-table",level:3},{value:"DROP/DETACH TABLE",id:"drop-detach-table",level:3},{value:"EXCHANGE TABLES/DICTIONARIES",id:"exchange-tables",level:3},{value:"ReplicatedMergeTree in Atomic Database",id:"replicatedmergetree-in-atomic-database",level:3},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"atomic"},"Atomic"),(0,i.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("a",{parentName:"p",href:"#drop-detach-table"},"DROP TABLE")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"#rename-table"},"RENAME TABLE")," \u0438 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("a",{parentName:"p",href:"#exchange-tables"},"EXCHANGE TABLES"),". \u0414\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("h2",{id:"creating-a-database"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0411\u0414"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE test [ENGINE = Atomic];\n")),(0,i.kt)("h2",{id:"specifics-and-recommendations"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"table-uuid"},"UUID"),(0,i.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"Atomic")," \u0438\u043c\u0435\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/uuid"},"UUID")," \u0438 \u0445\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse_path/store/xxx/xxxyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy/"),", \u0433\u0434\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy")," - \u044d\u0442\u043e UUID \u0442\u0430\u0431\u043b\u0438\u0446\u044b.\n\u041e\u0431\u044b\u0447\u043d\u043e UUID \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442 \u044f\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c UUID \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u043e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u043e \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f). \u0414\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f UUID \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW CREATE")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/settings/#show_table_uuid_in_table_create_query_if_not_nil"},"show_table_uuid_in_table_create_query_if_not_nil"),". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0438\u0434:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE name UUID '28f1c61c-2970-457a-bffe-454156ddcfef' (n UInt64) ENGINE = ...;\n")),(0,i.kt)("h3",{id:"rename-table"},"RENAME TABLE"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/rename"},"RENAME")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f UUID \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u042d\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0435 \u043e\u0436\u0438\u0434\u0430\u044e\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e."),(0,i.kt)("h3",{id:"drop-detach-table"},"DROP/DETACH TABLE"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," \u043d\u0438\u043a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f, \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse_path/metadata_dropped/")," \u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u044f\u0435\u0442 \u0444\u043e\u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0442\u043e\u043a. \u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/server-configuration-parameters/settings#database_atomic_delay_before_drop_table_sec"},"database_atomic_delay_before_drop_table_sec"),".\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044c \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044f \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"SYNC"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/settings/#database_atomic_wait_for_drop_and_detach_synchronously"},"database_atomic_wait_for_drop_and_detach_synchronously"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," \u0436\u0434\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0430, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f."),(0,i.kt)("h3",{id:"exchange-tables"},"EXCHANGE TABLES/DICTIONARIES"),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/exchange"},"EXCHANGE")," \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e \u043c\u0435\u043d\u044f\u0435\u0442 \u043c\u0435\u0441\u0442\u0430\u043c\u0438 \u0434\u0432\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0434\u0432\u0430 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE new_table TO tmp, old_table TO new_table, tmp TO old_table;\n")),(0,i.kt)("p",null,"\u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES new_table AND old_table;\n")),(0,i.kt)("h3",{id:"replicatedmergetree-in-atomic-database"},"ReplicatedMergeTree in Atomic Database"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/replication#table_engines-replication"},"ReplicatedMergeTree")," \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043d\u0435 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430 - \u043f\u0443\u0442\u044c \u0432 ZooKeeper \u0438 \u0438\u043c\u044f \u0440\u0435\u043f\u043b\u0438\u043a\u0438. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438: ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/server-configuration-parameters/settings#default_replica_path"},"default_replica_path")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/server-configuration-parameters/settings#default_replica_name"},"default_replica_name"),". \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430 \u044f\u0432\u043d\u043e, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0430\u043a\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"{uuid}"),". \u042d\u0442\u043e \u0443\u0434\u043e\u0431\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0443\u0442\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 ZooKeeper."),(0,i.kt)("h2",{id:"\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435-\u0442\u0430\u043a\u0436\u0435"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("a",{parentName:"li",href:"/ru/operations/system-tables/databases"},"system.databases"),".")))}m.isMDXComponent=!0}}]);