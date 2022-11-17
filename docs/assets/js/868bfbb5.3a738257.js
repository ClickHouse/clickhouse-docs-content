"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),f=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=f(a),p=r,d=u["".concat(s,".").concat(p)]||u[p]||_[p]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var f=2;f<l;f++)i[f]=a[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>_,frontMatter:()=>l,metadata:()=>o,toc:()=>f});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/en/engines/table-engines/integrations/hive",sidebar_position:4,sidebar_label:"Hive"},i="Hive",o={unversionedId:"en/engines/table-engines/integrations/hive",id:"en/engines/table-engines/integrations/hive",title:"Hive",description:"The Hive engine allows you to perform SELECT quries on HDFS Hive table. Currently it supports input formats as below:",source:"@site/docs/en/engines/table-engines/integrations/hive.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/hive",permalink:"/docs/en/engines/table-engines/integrations/hive",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/hive.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/en/engines/table-engines/integrations/hive",sidebar_position:4,sidebar_label:"Hive"},sidebar:"english",previous:{title:"JDBC",permalink:"/docs/en/engines/table-engines/integrations/jdbc"},next:{title:"MySQL",permalink:"/docs/en/engines/table-engines/integrations/mysql"}},s={},f=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"How to Use Local Cache for HDFS Filesystem",id:"how-to-use-local-cache-for-hdfs-filesystem",level:3},{value:"Query Hive Table with ORC Input Format",id:"query-hive-table-with-orc-input-format",level:3},{value:"Create Table in Hive",id:"create-table-in-hive",level:4},{value:"Create Table in ClickHouse",id:"create-table-in-clickhouse",level:4},{value:"Query Hive Table with Parquet Input Format",id:"query-hive-table-with-parquet-input-format",level:3},{value:"Create Table in Hive",id:"create-table-in-hive-1",level:4},{value:"Create Table in ClickHouse",id:"create-table-in-clickhouse-1",level:4},{value:"Query Hive Table with Text Input Format",id:"query-hive-table-with-text-input-format",level:3},{value:"Create Table in Hive",id:"create-table-in-hive-2",level:4},{value:"Create Table in ClickHouse",id:"create-table-in-clickhouse-2",level:4}],c={toc:f};function _(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hive"},"Hive"),(0,r.kt)("p",null,"The Hive engine allows you to perform ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," quries on HDFS Hive table. Currently it supports input formats as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Text: only supports simple scalar column types except ",(0,r.kt)("inlineCode",{parentName:"p"},"binary"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ORC: support simple scalar columns types except ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),"; only support complex types like ",(0,r.kt)("inlineCode",{parentName:"p"},"array"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Parquet: support all simple scalar columns types; only support complex types like ",(0,r.kt)("inlineCode",{parentName:"p"},"array")))),(0,r.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [ALIAS expr1],\n    name2 [type2] [ALIAS expr2],\n    ...\n) ENGINE = Hive('thrift://host:port', 'database', 'table');\nPARTITION BY expr\n")),(0,r.kt)("p",null,"See a detailed description of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,r.kt)("p",null,"The table structure can differ from the original Hive table structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Column names should be the same as in the original Hive table, but you can use just some of these columns and in any order, also you can use some alias columns calculated from other columns."),(0,r.kt)("li",{parentName:"ul"},"Column types should be the same from those in the original Hive table."),(0,r.kt)("li",{parentName:"ul"},"Partition by expression should be consistent with the original Hive table, and columns in partition by expression should be in the table structure.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"thrift://host:port")," \u2014 Hive Metastore address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database")," \u2014 Remote database name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"table")," \u2014 Remote table name."))),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("h3",{id:"how-to-use-local-cache-for-hdfs-filesystem"},"How to Use Local Cache for HDFS Filesystem"),(0,r.kt)("p",null,"We strongly advice you to enable local cache for remote filesystems. Benchmark shows that its almost 2x faster with cache."),(0,r.kt)("p",null,"Before using cache, add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<local_cache_for_remote_fs>\n    <enable>true</enable>\n    <root_dir>local_cache</root_dir>\n    <limit_size>559096952</limit_size>\n    <bytes_read_before_flush>1048576</bytes_read_before_flush>\n</local_cache_for_remote_fs>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enable: ClickHouse will maintain local cache for remote filesystem(HDFS) after startup if true."),(0,r.kt)("li",{parentName:"ul"},"root_dir: Required. The root directory to store local cache files for remote filesystem."),(0,r.kt)("li",{parentName:"ul"},"limit_size: Required. The maximum size(in bytes) of local cache files."),(0,r.kt)("li",{parentName:"ul"},"bytes_read_before_flush: Control bytes before flush to local filesystem when downloading file from remote filesystem. The default value is 1MB.")),(0,r.kt)("p",null,"When ClickHouse is started up with local cache for remote filesystem enabled, users can still choose not to use cache with ",(0,r.kt)("inlineCode",{parentName:"p"},"settings use_local_cache_for_remote_fs = 0")," in their query. ",(0,r.kt)("inlineCode",{parentName:"p"},"use_local_cache_for_remote_fs")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in default."),(0,r.kt)("h3",{id:"query-hive-table-with-orc-input-format"},"Query Hive Table with ORC Input Format"),(0,r.kt)("h4",{id:"create-table-in-hive"},"Create Table in Hive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"hive > CREATE TABLE `test`.`test_orc`(\n  `f_tinyint` tinyint,\n  `f_smallint` smallint,\n  `f_int` int,\n  `f_integer` int,\n  `f_bigint` bigint,\n  `f_float` float,\n  `f_double` double,\n  `f_decimal` decimal(10,0),\n  `f_timestamp` timestamp,\n  `f_date` date,\n  `f_string` string,\n  `f_varchar` varchar(100),\n  `f_bool` boolean,\n  `f_binary` binary,\n  `f_array_int` array<int>,\n  `f_array_string` array<string>,\n  `f_array_float` array<float>,\n  `f_array_array_int` array<array<int>>,\n  `f_array_array_string` array<array<string>>,\n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY (\n  `day` string)\nROW FORMAT SERDE\n  'org.apache.hadoop.hive.ql.io.orc.OrcSerde'\nSTORED AS INPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.orc.OrcInputFormat'\nOUTPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_orc'\n\nOK\nTime taken: 0.51 seconds\n\nhive > insert into test.test_orc partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_orc;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-11-05 12:38:16.314 2021-11-05  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.295 seconds, Fetched: 1 row(s)\n")),(0,r.kt)("h4",{id:"create-table-in-clickhouse"},"Create Table in ClickHouse"),(0,r.kt)("p",null,"Table in ClickHouse, retrieving data from the Hive table created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_orc\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_bool` Bool,\n    `f_binary` String,\n    `f_array_int` Array(Int32),\n    `f_array_string` Array(String),\n    `f_array_float` Array(Float32),\n    `f_array_array_int` Array(Array(Int32)),\n    `f_array_array_string` Array(Array(String)),\n    `f_array_array_float` Array(Array(Float32)),\n    `day` String\n)\nENGINE = Hive('thrift://202.168.117.26:9083', 'test', 'test_orc')\nPARTITION BY day\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_orc settings input_format_orc_allow_missing_columns = 1\\G\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test.test_orc\nSETTINGS input_format_orc_allow_missing_columns = 1\n\nQuery id: c3eaffdc-78ab-43cd-96a4-4acc5b480658\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:            1\nf_smallint:           2\nf_int:                3\nf_integer:            4\nf_bigint:             5\nf_float:              6.11\nf_double:             7.22\nf_decimal:            8\nf_timestamp:          2021-12-04 04:00:44\nf_date:               2021-12-03\nf_string:             hello world\nf_varchar:            hello world\nf_bool:               true\nf_binary:             hello world\nf_array_int:          [1,2,3]\nf_array_string:       ['hello world','hello world']\nf_array_float:        [1.1,1.2]\nf_array_array_int:    [[1,2],[3,4]]\nf_array_array_string: [['a','b'],['c','d']]\nf_array_array_float:  [[1.11,2.22],[3.33,4.44]]\nday:                  2021-09-18\n\n\n1 rows in set. Elapsed: 0.078 sec.\n")),(0,r.kt)("h3",{id:"query-hive-table-with-parquet-input-format"},"Query Hive Table with Parquet Input Format"),(0,r.kt)("h4",{id:"create-table-in-hive-1"},"Create Table in Hive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"hive >\nCREATE TABLE `test`.`test_parquet`(\n  `f_tinyint` tinyint,\n  `f_smallint` smallint,\n  `f_int` int,\n  `f_integer` int,\n  `f_bigint` bigint,\n  `f_float` float,\n  `f_double` double,\n  `f_decimal` decimal(10,0),\n  `f_timestamp` timestamp,\n  `f_date` date,\n  `f_string` string,\n  `f_varchar` varchar(100),\n  `f_char` char(100),\n  `f_bool` boolean,\n  `f_binary` binary,\n  `f_array_int` array<int>,\n  `f_array_string` array<string>,\n  `f_array_float` array<float>,\n  `f_array_array_int` array<array<int>>,\n  `f_array_array_string` array<array<string>>,\n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY (\n  `day` string)\nROW FORMAT SERDE\n  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'\nSTORED AS INPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'\nOUTPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_parquet'\nOK\nTime taken: 0.51 seconds\n\nhive >  insert into test.test_parquet partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_parquet;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-12-14 17:54:56.743 2021-12-14  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.766 seconds, Fetched: 1 row(s)\n")),(0,r.kt)("h4",{id:"create-table-in-clickhouse-1"},"Create Table in ClickHouse"),(0,r.kt)("p",null,"Table in ClickHouse, retrieving data from the Hive table created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_parquet\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_char` String,\n    `f_bool` Bool,\n    `f_binary` String,\n    `f_array_int` Array(Int32),\n    `f_array_string` Array(String),\n    `f_array_float` Array(Float32),\n    `f_array_array_int` Array(Array(Int32)),\n    `f_array_array_string` Array(Array(String)),\n    `f_array_array_float` Array(Array(Float32)),\n    `day` String\n)\nENGINE = Hive('thrift://localhost:9083', 'test', 'test_parquet')\nPARTITION BY day\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_parquet settings input_format_parquet_allow_missing_columns = 1\\G\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test_parquet\nSETTINGS input_format_parquet_allow_missing_columns = 1\n\nQuery id: 4e35cf02-c7b2-430d-9b81-16f438e5fca9\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:            1\nf_smallint:           2\nf_int:                3\nf_integer:            4\nf_bigint:             5\nf_float:              6.11\nf_double:             7.22\nf_decimal:            8\nf_timestamp:          2021-12-14 17:54:56\nf_date:               2021-12-14\nf_string:             hello world\nf_varchar:            hello world\nf_char:               hello world\nf_bool:               true\nf_binary:             hello world\nf_array_int:          [1,2,3]\nf_array_string:       ['hello world','hello world']\nf_array_float:        [1.1,1.2]\nf_array_array_int:    [[1,2],[3,4]]\nf_array_array_string: [['a','b'],['c','d']]\nf_array_array_float:  [[1.11,2.22],[3.33,4.44]]\nday:                  2021-09-18\n\n1 rows in set. Elapsed: 0.357 sec.\n")),(0,r.kt)("h3",{id:"query-hive-table-with-text-input-format"},"Query Hive Table with Text Input Format"),(0,r.kt)("h4",{id:"create-table-in-hive-2"},"Create Table in Hive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"hive >\nCREATE TABLE `test`.`test_text`(\n  `f_tinyint` tinyint,\n  `f_smallint` smallint,\n  `f_int` int,\n  `f_integer` int,\n  `f_bigint` bigint,\n  `f_float` float,\n  `f_double` double,\n  `f_decimal` decimal(10,0),\n  `f_timestamp` timestamp,\n  `f_date` date,\n  `f_string` string,\n  `f_varchar` varchar(100),\n  `f_char` char(100),\n  `f_bool` boolean,\n  `f_binary` binary,\n  `f_array_int` array<int>,\n  `f_array_string` array<string>,\n  `f_array_float` array<float>,\n  `f_array_array_int` array<array<int>>,\n  `f_array_array_string` array<array<string>>,\n  `f_array_array_float` array<array<float>>)\nPARTITIONED BY (\n  `day` string)\nROW FORMAT SERDE\n  'org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe'\nSTORED AS INPUTFORMAT\n  'org.apache.hadoop.mapred.TextInputFormat'\nOUTPUTFORMAT\n  'org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat'\nLOCATION\n  'hdfs://testcluster/data/hive/test.db/test_text'\nTime taken: 0.1 seconds, Fetched: 34 row(s)\n\n\nhive >  insert into test.test_text partition(day='2021-09-18') select 1, 2, 3, 4, 5, 6.11, 7.22, 8.333, current_timestamp(), current_date(), 'hello world', 'hello world', 'hello world', true, 'hello world', array(1, 2, 3), array('hello world', 'hello world'), array(float(1.1), float(1.2)), array(array(1, 2), array(3, 4)), array(array('a', 'b'), array('c', 'd')), array(array(float(1.11), float(2.22)), array(float(3.33), float(4.44)));\nOK\nTime taken: 36.025 seconds\n\nhive > select * from test.test_text;\nOK\n1   2   3   4   5   6.11    7.22    8   2021-12-14 18:11:17.239 2021-12-14  hello world hello world hello world                                                                                             true    hello world [1,2,3] [\"hello world\",\"hello world\"]   [1.1,1.2]   [[1,2],[3,4]]   [[\"a\",\"b\"],[\"c\",\"d\"]]   [[1.11,2.22],[3.33,4.44]]   2021-09-18\nTime taken: 0.624 seconds, Fetched: 1 row(s)\n")),(0,r.kt)("h4",{id:"create-table-in-clickhouse-2"},"Create Table in ClickHouse"),(0,r.kt)("p",null,"Table in ClickHouse, retrieving data from the Hive table created above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test.test_text\n(\n    `f_tinyint` Int8,\n    `f_smallint` Int16,\n    `f_int` Int32,\n    `f_integer` Int32,\n    `f_bigint` Int64,\n    `f_float` Float32,\n    `f_double` Float64,\n    `f_decimal` Float64,\n    `f_timestamp` DateTime,\n    `f_date` Date,\n    `f_string` String,\n    `f_varchar` String,\n    `f_char` String,\n    `f_bool` Bool,\n    `day` String\n)\nENGINE = Hive('thrift://localhost:9083', 'test', 'test_text')\nPARTITION BY day\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test.test_text settings input_format_skip_unknown_fields = 1, input_format_with_names_use_header = 1, date_time_input_format = 'best_effort'\\G\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"SELECT *\nFROM test.test_text\nSETTINGS input_format_skip_unknown_fields = 1, input_format_with_names_use_header = 1, date_time_input_format = 'best_effort'\n\nQuery id: 55b79d35-56de-45b9-8be6-57282fbf1f44\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nf_tinyint:   1\nf_smallint:  2\nf_int:       3\nf_integer:   4\nf_bigint:    5\nf_float:     6.11\nf_double:    7.22\nf_decimal:   8\nf_timestamp: 2021-12-14 18:11:17\nf_date:      2021-12-14\nf_string:    hello world\nf_varchar:   hello world\nf_char:      hello world\nf_bool:      true\nday:         2021-09-18\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/hive/"},"Original article")," "))}_.isMDXComponent=!0}}]);