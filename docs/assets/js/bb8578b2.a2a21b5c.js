"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95671],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(b,a(a({ref:n},d),{},{components:t})):r.createElement(b,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39998:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={slug:"/zh/engines/table-engines/integrations/embedded-rocksdb",sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},s="EmbeddedRocksDB \u5f15\u64ce",c={unversionedId:"zh/engines/table-engines/integrations/embedded-rocksdb",id:"zh/engines/table-engines/integrations/embedded-rocksdb",title:"EmbeddedRocksDB \u5f15\u64ce",description:"EmbeddedRocksDB-engine}",source:"@site/docs/zh/engines/table-engines/integrations/embedded-rocksdb.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/embedded-rocksdb",permalink:"/docs/zh/engines/table-engines/integrations/embedded-rocksdb",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/embedded-rocksdb.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{slug:"/zh/engines/table-engines/integrations/embedded-rocksdb",sidebar_position:9,sidebar_label:"EmbeddedRocksDB"},sidebar:"chinese",previous:{title:"SQLite",permalink:"/docs/zh/engines/table-engines/integrations/sqlite"},next:{title:"RabbitMQ",permalink:"/docs/zh/engines/table-engines/integrations/rabbitmq"}},d={},p=[{value:"\u521b\u5efa\u4e00\u5f20\u8868",id:"table_engine-EmbeddedRocksDB-creating-a-table",level:2},{value:"\u6307\u6807",id:"\u6307\u6807",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"EmbeddedRocksDB-engine"},"EmbeddedRocksDB \u5f15\u64ce"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5f15\u64ce\u5141\u8bb8 ClickHouse \u4e0e ",(0,i.kt)("a",{parentName:"p",href:"http://rocksdb.org/"},"rocksdb")," \u8fdb\u884c\u96c6\u6210\u3002"),(0,i.kt)("h2",{id:"table_engine-EmbeddedRocksDB-creating-a-table"},"\u521b\u5efa\u4e00\u5f20\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = EmbeddedRocksDB PRIMARY KEY(primary_key_name)\n")),(0,i.kt)("p",null,"\u5fc5\u8981\u53c2\u6570:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"primary_key_name")," \u2013 any column name in the column list."),(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"primary key"),", \u4ec5\u652f\u6301\u4e3b\u952e\u4e2d\u7684\u4e00\u4e2a\u5217. \u4e3b\u952e\u5c06\u88ab\u5e8f\u5217\u5316\u4e3a\u4e8c\u8fdb\u5236\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"rocksdb key"),"."),(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u952e\u4ee5\u5916\u7684\u5217\u5c06\u4ee5\u76f8\u5e94\u7684\u987a\u5e8f\u5728\u4e8c\u8fdb\u5236\u4e2d\u5e8f\u5217\u5316\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"rocksdb"),"\u503c."),(0,i.kt)("li",{parentName:"ul"},"\u5e26\u6709\u952e ",(0,i.kt)("inlineCode",{parentName:"li"},"equals")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"in")," \u8fc7\u6ee4\u7684\u67e5\u8be2\u5c06\u88ab\u4f18\u5316\u4e3a\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"rocksdb")," \u8fdb\u884c\u591a\u952e\u67e5\u8be2.")),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test\n(\n    `key` String,\n    `v1` UInt32,\n    `v2` String,\n    `v3` Float32,\n)\nENGINE = EmbeddedRocksDB\nPRIMARY KEY key\n")),(0,i.kt)("h2",{id:"\u6307\u6807"},"\u6307\u6807"),(0,i.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"system.rocksdb")," \u8868, \u516c\u5f00rocksdb\u7684\u7edf\u8ba1\u4fe1\u606f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    name,\n    value\nFROM system.rocksdb\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 no.file.opens             \u2502     1 \u2502\n\u2502 number.block.decompressed \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u4f60\u80fd\u4fee\u6539\u4efb\u4f55",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/rocksdb/wiki/Option-String-and-Option-Map"},"rocksdb options")," \u914d\u7f6e\uff0c\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<rocksdb>\n    <options>\n        <max_background_jobs>8</max_background_jobs>\n    </options>\n    <column_family_options>\n        <num_levels>2</num_levels>\n    </column_family_options>\n    <tables>\n        <table>\n            <name>TABLE</name>\n            <options>\n                <max_background_jobs>8</max_background_jobs>\n            </options>\n            <column_family_options>\n                <num_levels>2</num_levels>\n            </column_family_options>\n        </table>\n    </tables>\n</rocksdb>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/embedded-rocksdb/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);