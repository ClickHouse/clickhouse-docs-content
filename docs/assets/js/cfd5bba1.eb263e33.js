"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98702],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(b,o(o({ref:n},d),{},{components:t})):r.createElement(b,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},396:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},s="\u0414\u0432\u0438\u0436\u043e\u043a EmbeddedRocksDB",c={unversionedId:"ru/engines/table-engines/integrations/embedded-rocksdb",id:"ru/engines/table-engines/integrations/embedded-rocksdb",title:"\u0414\u0432\u0438\u0436\u043e\u043a EmbeddedRocksDB",description:"EmbeddedRocksDB-engine}",source:"@site/docs/ru/engines/table-engines/integrations/embedded-rocksdb.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/embedded-rocksdb",permalink:"/docs/ru/engines/table-engines/integrations/embedded-rocksdb",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/embedded-rocksdb.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},sidebar:"russia",previous:{title:"Kafka",permalink:"/docs/ru/engines/table-engines/integrations/kafka"},next:{title:"PostgreSQL",permalink:"/docs/ru/engines/table-engines/integrations/postgresql"}},d={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"table_engine-EmbeddedRocksDB-creating-a-table",level:2}],p={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"EmbeddedRocksDB-engine"},"\u0414\u0432\u0438\u0436\u043e\u043a EmbeddedRocksDB"),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u0432\u0438\u0436\u043e\u043a \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c ClickHouse \u0441 ",(0,a.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"rocksdb"),"."),(0,a.kt)("h2",{id:"table_engine-EmbeddedRocksDB-creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = EmbeddedRocksDB\nPRIMARY KEY(primary_key_name);\n")),(0,a.kt)("p",null,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"primary_key_name")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u0438\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."),(0,a.kt)("li",{parentName:"ul"},"\u0423\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"primary key")," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c. \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043a\u0430\u043a \u043a\u043b\u044e\u0447 ",(0,a.kt)("inlineCode",{parentName:"li"},"rocksdb"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0432 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u043c \u043a\u043b\u044e\u0447\u0435."),(0,a.kt)("li",{parentName:"ul"},"\u0421\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f \u043e\u0442 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430, \u0431\u0443\u0434\u0443\u0442 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043a\u0430\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"rockdb")," \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,a.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b \u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 ",(0,a.kt)("inlineCode",{parentName:"li"},"equals")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"in")," \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043a\u043b\u044e\u0447\u0430\u043c \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"li"},"rocksdb"),".")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test\n(\n    `key` String,\n    `v1` UInt32,\n    `v2` String,\n    `v3` Float32,\n)\nENGINE = EmbeddedRocksDB\nPRIMARY KEY key;\n")))}m.isMDXComponent=!0}}]);