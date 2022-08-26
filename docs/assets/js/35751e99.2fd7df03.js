"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48316],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),_=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=_(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),d=_(n),u=r,p=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(p,i(i({ref:t},f),{},{components:n})):a.createElement(p,i({ref:t},f))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var _=2;_<l;_++)i[_]=n[_];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return _},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={slug:"/zh/engines/table-engines/integrations/hive",sidebar_position:4,sidebar_label:"Hive"},s="Hive",_={unversionedId:"zh/engines/table-engines/integrations/hive",id:"zh/engines/table-engines/integrations/hive",title:"Hive",description:"hive}",source:"@site/docs/zh/engines/table-engines/integrations/hive.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/hive",permalink:"/docs/zh/engines/table-engines/integrations/hive",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/hive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/zh/engines/table-engines/integrations/hive",sidebar_position:4,sidebar_label:"Hive"},sidebar:"chinese",previous:{title:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",permalink:"/docs/zh/engines/table-engines/integrations/"},next:{title:"MongoDB",permalink:"/docs/zh/engines/table-engines/integrations/mongodb"}},f={},c=[{value:"\u521b\u5efa\u8868",id:"creating-a-table",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"usage-example",level:2},{value:"\u5982\u4f55\u4f7f\u7528HDFS\u6587\u4ef6\u7cfb\u7edf\u7684\u672c\u5730\u7f13\u5b58",id:"\u5982\u4f55\u4f7f\u7528hdfs\u6587\u4ef6\u7cfb\u7edf\u7684\u672c\u5730\u7f13\u5b58",level:3},{value:"\u67e5\u8be2 ORC \u8f93\u5165\u683c\u5f0f\u7684Hive \u8868",id:"\u67e5\u8be2-orc-\u8f93\u5165\u683c\u5f0f\u7684hive-\u8868",level:3},{value:"\u5728 Hive \u4e2d\u5efa\u8868",id:"\u5728-hive-\u4e2d\u5efa\u8868",level:4},{value:"\u5728 ClickHouse \u4e2d\u5efa\u8868",id:"\u5728-clickhouse-\u4e2d\u5efa\u8868",level:4},{value:"\u67e5\u8be2 Parquest \u8f93\u5165\u683c\u5f0f\u7684Hive \u8868",id:"\u67e5\u8be2-parquest-\u8f93\u5165\u683c\u5f0f\u7684hive-\u8868",level:3},{value:"\u5728 Hive \u4e2d\u5efa\u8868",id:"\u5728-hive-\u4e2d\u5efa\u8868-1",level:4},{value:"\u5728 ClickHouse \u4e2d\u5efa\u8868",id:"\u5728-clickhouse-\u4e2d\u5efa\u8868-1",level:4},{value:"\u67e5\u8be2\u6587\u672c\u8f93\u5165\u683c\u5f0f\u7684Hive\u8868",id:"\u67e5\u8be2\u6587\u672c\u8f93\u5165\u683c\u5f0f\u7684hive\u8868",level:3},{value:"\u5728Hive \u4e2d\u5efa\u8868",id:"\u5728hive-\u4e2d\u5efa\u8868",level:4},{value:"\u5728 ClickHouse \u4e2d\u5efa\u8868",id:"\u5728-clickhouse-\u4e2d\u5efa\u8868-2",level:4}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hive"},"Hive"),(0,l.kt)("p",null,"Hive\u5f15\u64ce\u5141\u8bb8\u5bf9HDFS Hive\u8868\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u3002\u76ee\u524d\u5b83\u652f\u6301\u5982\u4e0b\u8f93\u5165\u683c\u5f0f:"),(0,l.kt)("p",null,"-\u6587\u672c:\u53ea\u652f\u6301\u7b80\u5355\u7684\u6807\u91cf\u5217\u7c7b\u578b\uff0c\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Binary")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ORC:\u652f\u6301\u7b80\u5355\u7684\u6807\u91cf\u5217\u7c7b\u578b\uff0c\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"char"),"; \u53ea\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u8fd9\u6837\u7684\u590d\u6742\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parquet:\u652f\u6301\u6240\u6709\u7b80\u5355\u6807\u91cf\u5217\u7c7b\u578b;\u53ea\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," \u8fd9\u6837\u7684\u590d\u6742\u7c7b\u578b"))),(0,l.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [ALIAS expr1],\n    name2 [type2] [ALIAS expr2],\n    ...\n) ENGINE = Hive('thrift://host:port', 'database', 'table');\nPARTITION BY expr\n")),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE"),"\u67e5\u8be2\u7684\u8be6\u7ec6\u63cf\u8ff0\u3002"),(0,l.kt)("p",null,"\u8868\u7684\u7ed3\u6784\u53ef\u4ee5\u4e0e\u539f\u6765\u7684Hive\u8868\u7ed3\u6784\u6709\u6240\u4e0d\u540c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u540d\u5e94\u8be5\u4e0e\u539f\u6765\u7684Hive\u8868\u76f8\u540c\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5217\u4e2d\u7684\u4e00\u4e9b\uff0c\u5e76\u4ee5\u4efb\u4f55\u987a\u5e8f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u4ece\u5176\u4ed6\u5217\u8ba1\u7b97\u7684\u522b\u540d\u5217\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5217\u7c7b\u578b\u4e0e\u539fHive\u8868\u7684\u5217\u7c7b\u578b\u4fdd\u6301\u4e00\u81f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u201cPartition by expression\u201d\u5e94\u4e0e\u539fHive\u8868\u4fdd\u6301\u4e00\u81f4\uff0c\u201cPartition by expression\u201d\u4e2d\u7684\u5217\u5e94\u5728\u8868\u7ed3\u6784\u4e2d\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thrift://host:port")," \u2014 Hive Metastore \u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"database")," \u2014 \u8fdc\u7a0b\u6570\u636e\u5e93\u540d.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u8fdc\u7a0b\u6570\u636e\u8868\u540d."))),(0,l.kt)("h2",{id:"usage-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528hdfs\u6587\u4ef6\u7cfb\u7edf\u7684\u672c\u5730\u7f13\u5b58"},"\u5982\u4f55\u4f7f\u7528HDFS\u6587\u4ef6\u7cfb\u7edf\u7684\u672c\u5730\u7f13\u5b58"),(0,l.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4e3a\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u542f\u7528\u672c\u5730\u7f13\u5b58\u3002\u57fa\u51c6\u6d4b\u8bd5\u663e\u793a\uff0c\u5982\u679c\u4f7f\u7528\u7f13\u5b58\uff0c\u5b83\u7684\u901f\u5ea6\u4f1a\u5feb\u4e24\u500d\u3002"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u7f13\u5b58\u4e4b\u524d\uff0c\u8bf7\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.xml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<local_cache_for_remote_fs>\n    <enable>true</enable>\n    <root_dir>local_cache</root_dir>\n    <limit_size>559096952</limit_size>\n    <bytes_read_before_flush>1048576</bytes_read_before_flush>\n</local_cache_for_remote_fs>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"enable: \u5f00\u542f\u540e\uff0cClickHouse\u5c06\u4e3aHDFS (\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf)\u7ef4\u62a4\u672c\u5730\u7f13\u5b58\u3002"),(0,l.kt)("li",{parentName:"ul"},"root_dir: \u5fc5\u9700\u7684\u3002\u7528\u4e8e\u5b58\u50a8\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u7684\u672c\u5730\u7f13\u5b58\u6587\u4ef6\u7684\u6839\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"limit_size: \u5fc5\u9700\u7684\u3002\u672c\u5730\u7f13\u5b58\u6587\u4ef6\u7684\u6700\u5927\u5927\u5c0f(\u5355\u4f4d\u4e3a\u5b57\u8282)\u3002"),(0,l.kt)("li",{parentName:"ul"},"bytes_read_before_flush: \u4ece\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u4e0b\u8f7d\u6587\u4ef6\u65f6\uff0c\u5237\u65b0\u5230\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u524d\u7684\u63a7\u5236\u5b57\u8282\u6570\u3002\u7f3a\u7701\u503c\u4e3a1MB\u3002")),(0,l.kt)("p",null,"\u5f53ClickHouse\u4e3a\u8fdc\u7a0b\u6587\u4ef6\u7cfb\u7edf\u542f\u7528\u4e86\u672c\u5730\u7f13\u5b58\u65f6\uff0c\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u9009\u62e9\u4e0d\u4f7f\u7528\u7f13\u5b58\uff0c\u5e76\u5728\u67e5\u8be2\u4e2d\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"use_local_cache_for_remote_fs = 0 "),", ",(0,l.kt)("inlineCode",{parentName:"p"},"use_local_cache_for_remote_fs")," \u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("h3",{id:"\u67e5\u8be2-orc-\u8f93\u5165\u683c\u5f0f\u7684hive-\u8868"},"\u67e5\u8be2 ORC \u8f93\u5165\u683c\u5f0f\u7684Hive \u8868"),(0,l.kt)("h4",{id:"\u5728-hive-\u4e2d\u5efa\u8868"},"\u5728 Hive \u4e2d\u5efa\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"hive > CREATE TABLE `test`.`test_orc`(\n  `f_tinyint` tinyint, \n  `f_smallint` smallint, \n  `f_int` int, \n  `f_integer` int, \n  `f_bigint` bigint, \n  `f_float` float, \n  `f_double` double, \n  `f_decimal` decimal(10,0), \n  `f_timestamp` timestamp, \n  `f_date` date, \n  `f_string` string, \n  `f_varchar` varchar(100), \n  `f_bool` boolean, \n  `f_binary` binary, \n  `f_array_int` array<int>, \n  `f_array_string` array<string>, \n  `f_array_float` array<float>, \n  `f_array_array_int` array<array<int>>, \n  `f_array_array_string` array<array<string>>, \n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY ( \n  `day` string)\nROW FORMAT SERDE \n  'org.apache.hadoop.hive.ql.io.orc.OrcSerde' \nSTORED AS INPUTFORMAT \n  'org.apache.hadoop.hive.ql.io.orc.OrcInputFormat' \nOUTPUTFORMAT \n  'org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_orc'\n\nOK\nTime taken: 0.51 seconds\n\nhive > insert into test.test_orc partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_orc;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-11-05 12:38:16.314 2021-11-05  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.295 seconds, Fetched: 1 row(s)\n")),(0,l.kt)("h4",{id:"\u5728-clickhouse-\u4e2d\u5efa\u8868"},"\u5728 ClickHouse \u4e2d\u5efa\u8868"),(0,l.kt)("p",null,"ClickHouse\u4e2d\u7684\u8868\uff0c\u4ece\u4e0a\u9762\u521b\u5efa\u7684Hive\u8868\u4e2d\u83b7\u53d6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_orc\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_bool` Bool,\n    `f_binary` String,\n    `f_array_int` Array(Int32),\n    `f_array_string` Array(String),\n    `f_array_float` Array(Float32),\n    `f_array_array_int` Array(Array(Int32)),\n    `f_array_array_string` Array(Array(String)),\n    `f_array_array_float` Array(Array(Float32)),\n    `day` String\n)\nENGINE = Hive('thrift://localhost:9083', 'test', 'test_orc')\nPARTITION BY day\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_orc settings input_format_orc_allow_missing_columns = 1\\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test.test_orc\nSETTINGS input_format_orc_allow_missing_columns = 1\n\nQuery id: c3eaffdc-78ab-43cd-96a4-4acc5b480658\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:            1\nf_smallint:           2\nf_int:                3\nf_integer:            4\nf_bigint:             5\nf_float:              6.11\nf_double:             7.22\nf_decimal:            8\nf_timestamp:          2021-12-04 04:00:44\nf_date:               2021-12-03\nf_string:             hello world\nf_varchar:            hello world\nf_bool:               true\nf_binary:             hello world\nf_array_int:          [1,2,3]\nf_array_string:       ['hello world','hello world']\nf_array_float:        [1.1,1.2]\nf_array_array_int:    [[1,2],[3,4]]\nf_array_array_string: [['a','b'],['c','d']]\nf_array_array_float:  [[1.11,2.22],[3.33,4.44]]\nday:                  2021-09-18\n\n\n1 rows in set. Elapsed: 0.078 sec. \n")),(0,l.kt)("h3",{id:"\u67e5\u8be2-parquest-\u8f93\u5165\u683c\u5f0f\u7684hive-\u8868"},"\u67e5\u8be2 Parquest \u8f93\u5165\u683c\u5f0f\u7684Hive \u8868"),(0,l.kt)("h4",{id:"\u5728-hive-\u4e2d\u5efa\u8868-1"},"\u5728 Hive \u4e2d\u5efa\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"hive >\nCREATE TABLE `test`.`test_parquet`(\n  `f_tinyint` tinyint, \n  `f_smallint` smallint, \n  `f_int` int, \n  `f_integer` int, \n  `f_bigint` bigint, \n  `f_float` float, \n  `f_double` double, \n  `f_decimal` decimal(10,0), \n  `f_timestamp` timestamp, \n  `f_date` date, \n  `f_string` string, \n  `f_varchar` varchar(100), \n  `f_char` char(100), \n  `f_bool` boolean, \n  `f_binary` binary, \n  `f_array_int` array<int>, \n  `f_array_string` array<string>, \n  `f_array_float` array<float>, \n  `f_array_array_int` array<array<int>>, \n  `f_array_array_string` array<array<string>>, \n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY ( \n  `day` string)\nROW FORMAT SERDE \n  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe' \nSTORED AS INPUTFORMAT \n  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat' \nOUTPUTFORMAT \n  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_parquet'\nOK\nTime taken: 0.51 seconds\n\nhive >  insert into test.test_parquet partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_parquet;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-12-14 17:54:56.743 2021-12-14  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.766 seconds, Fetched: 1 row(s)\n")),(0,l.kt)("h4",{id:"\u5728-clickhouse-\u4e2d\u5efa\u8868-1"},"\u5728 ClickHouse \u4e2d\u5efa\u8868"),(0,l.kt)("p",null,"ClickHouse \u4e2d\u7684\u8868\uff0c \u4ece\u4e0a\u9762\u521b\u5efa\u7684Hive\u8868\u4e2d\u83b7\u53d6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_parquet\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_char` String,\n    `f_bool` Bool,\n    `f_binary` String,\n    `f_array_int` Array(Int32),\n    `f_array_string` Array(String),\n    `f_array_float` Array(Float32),\n    `f_array_array_int` Array(Array(Int32)),\n    `f_array_array_string` Array(Array(String)),\n    `f_array_array_float` Array(Array(Float32)),\n    `day` String\n)\nENGINE = Hive('thrift://localhost:9083', 'test', 'test_parquet')\nPARTITION BY day\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_parquet settings input_format_parquet_allow_missing_columns = 1\\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test_parquet\nSETTINGS input_format_parquet_allow_missing_columns = 1\n\nQuery id: 4e35cf02-c7b2-430d-9b81-16f438e5fca9\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:            1\nf_smallint:           2\nf_int:                3\nf_integer:            4\nf_bigint:             5\nf_float:              6.11\nf_double:             7.22\nf_decimal:            8\nf_timestamp:          2021-12-14 17:54:56\nf_date:               2021-12-14\nf_string:             hello world\nf_varchar:            hello world\nf_char:               hello world\nf_bool:               true\nf_binary:             hello world\nf_array_int:          [1,2,3]\nf_array_string:       ['hello world','hello world']\nf_array_float:        [1.1,1.2]\nf_array_array_int:    [[1,2],[3,4]]\nf_array_array_string: [['a','b'],['c','d']]\nf_array_array_float:  [[1.11,2.22],[3.33,4.44]]\nday:                  2021-09-18\n\n1 rows in set. Elapsed: 0.357 sec. \n")),(0,l.kt)("h3",{id:"\u67e5\u8be2\u6587\u672c\u8f93\u5165\u683c\u5f0f\u7684hive\u8868"},"\u67e5\u8be2\u6587\u672c\u8f93\u5165\u683c\u5f0f\u7684Hive\u8868"),(0,l.kt)("h4",{id:"\u5728hive-\u4e2d\u5efa\u8868"},"\u5728Hive \u4e2d\u5efa\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"hive >\nCREATE TABLE `test`.`test_text`(\n  `f_tinyint` tinyint, \n  `f_smallint` smallint, \n  `f_int` int, \n  `f_integer` int, \n  `f_bigint` bigint, \n  `f_float` float, \n  `f_double` double, \n  `f_decimal` decimal(10,0), \n  `f_timestamp` timestamp, \n  `f_date` date, \n  `f_string` string, \n  `f_varchar` varchar(100), \n  `f_char` char(100), \n  `f_bool` boolean, \n  `f_binary` binary, \n  `f_array_int` array<int>, \n  `f_array_string` array<string>, \n  `f_array_float` array<float>, \n  `f_array_array_int` array<array<int>>, \n  `f_array_array_string` array<array<string>>, \n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY ( \n  `day` string)\nROW FORMAT SERDE \n  'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe' \nSTORED AS INPUTFORMAT \n  'org.apache.hadoop.mapred.TextInputFormat' \nOUTPUTFORMAT \n  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_text'\nTime taken: 0.1 seconds, Fetched: 34 row(s)\n\n\nhive >  insert into test.test_text partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_text;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-12-14 18:11:17.239 2021-12-14  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.624 seconds, Fetched: 1 row(s)\n")),(0,l.kt)("h4",{id:"\u5728-clickhouse-\u4e2d\u5efa\u8868-2"},"\u5728 ClickHouse \u4e2d\u5efa\u8868"),(0,l.kt)("p",null,"ClickHouse\u4e2d\u7684\u8868\uff0c \u4ece\u4e0a\u9762\u521b\u5efa\u7684Hive\u8868\u4e2d\u83b7\u53d6\u6570\u636e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_text\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_char` String,\n    `f_bool` Bool,\n    `day` String\n)\nENGINE = Hive('thrift://localhost:9083', 'test', 'test_text')\nPARTITION BY day \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_text settings input_format_skip_unknown_fields = 1, input_format_with_names_use_header = 1, date_time_input_format = 'best_effort'\\G\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test.test_text\nSETTINGS input_format_skip_unknown_fields = 1, input_format_with_names_use_header = 1, date_time_input_format = 'best_effort'\n\nQuery id: 55b79d35-56de-45b9-8be6-57282fbf1f44\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:   1\nf_smallint:  2\nf_int:       3\nf_integer:   4\nf_bigint:    5\nf_float:     6.11\nf_double:    7.22\nf_decimal:   8\nf_timestamp: 2021-12-14 18:11:17\nf_date:      2021-12-14\nf_string:    hello world\nf_varchar:   hello world\nf_char:      hello world\nf_bool:      true\nday:         2021-09-18\n")))}u.isMDXComponent=!0}}]);