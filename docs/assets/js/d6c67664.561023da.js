"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[30845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,f=p["".concat(i,".").concat(c)]||p[c]||d[c]||s;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_label:"SQL dumps",sidebar_position:6,slug:"/en/integrations/data-formats/sql"},o="Inserting and dumping SQL data in ClickHouse",l={unversionedId:"en/integrations/data-ingestion/data-formats/sql",id:"en/integrations/data-ingestion/data-formats/sql",title:"Inserting and dumping SQL data in ClickHouse",description:"ClickHouse can be easily integrated into OLTP database infrastructures in many ways. One way is to transfer data between other databases and ClickHouse using SQL dumps.",source:"@site/docs/en/integrations/data-ingestion/data-formats/sql.md",sourceDirName:"en/integrations/data-ingestion/data-formats",slug:"/en/integrations/data-formats/sql",permalink:"/docs/en/integrations/data-formats/sql",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/data-formats/sql.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"SQL dumps",sidebar_position:6,slug:"/en/integrations/data-formats/sql"},sidebar:"english",previous:{title:"Binary and native",permalink:"/docs/en/integrations/data-formats/binary-native"},next:{title:"Insert Files from S3",permalink:"/docs/en/integrations/s3"}},i={},u=[{value:"Creating SQL dumps",id:"creating-sql-dumps",level:2},{value:"Exporting a set of values",id:"exporting-a-set-of-values",level:3},{value:"Inserting data from SQL dumps",id:"inserting-data-from-sql-dumps",level:2},{value:"Other formats",id:"other-formats",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inserting-and-dumping-sql-data-in-clickhouse"},"Inserting and dumping SQL data in ClickHouse"),(0,r.kt)("p",null,"ClickHouse can be easily integrated into OLTP database infrastructures in many ways. One way is to transfer data between other databases and ClickHouse using SQL dumps."),(0,r.kt)("h2",{id:"creating-sql-dumps"},"Creating SQL dumps"),(0,r.kt)("p",null,"Data can be dumped in SQL format using ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats/#sqlinsert"},"SQLInsert"),". ClickHouse will write data in ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO <table name> VALUES(...")," form and use ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/formats/#output_format_sql_insert_table_name"},(0,r.kt)("inlineCode",{parentName:"a"},"output_format_sql_insert_table_name"))," settings option as a table name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET output_format_sql_insert_table_name = 'some_table';\nSELECT * FROM some_data\nINTO OUTFILE 'dump.sql'\nFORMAT SQLInsert\n")),(0,r.kt)("p",null,"Column names can be omitted by disabling ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/formats/#output_format_sql_insert_include_column_names"},(0,r.kt)("inlineCode",{parentName:"a"},"output_format_sql_insert_include_column_names"))," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET output_format_sql_insert_include_column_names = 0\n")),(0,r.kt)("p",null,"Now we can feed ",(0,r.kt)("a",{target:"_blank",href:a(22085).Z},"dump.sql")," file to another OLTP database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql some_db < dump.sql\n")),(0,r.kt)("p",null,"We assume that the ",(0,r.kt)("inlineCode",{parentName:"p"},"some_table")," table exists in the ",(0,r.kt)("inlineCode",{parentName:"p"},"some_db")," MySQL database."),(0,r.kt)("p",null,"Some DBMSs might have limits on how much values can be processes within a single batch. By default, ClickHouse will create 65k values batches, but that can be changed with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/formats/#output_format_sql_insert_max_batch_size"},(0,r.kt)("inlineCode",{parentName:"a"},"output_format_sql_insert_max_batch_size"))," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET output_format_sql_insert_max_batch_size = 1000;\n")),(0,r.kt)("h3",{id:"exporting-a-set-of-values"},"Exporting a set of values"),(0,r.kt)("p",null,"ClickHouse has ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats/#data-format-values"},"Values")," format, which is similar to SQLInsert, but omits an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO table VALUES")," part and returns only a set of values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM some_data LIMIT 3 FORMAT Values\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"('Bangor_City_Forest','2015-07-01',34),('Alireza_Afzal','2017-02-01',24),('Akhaura-Laksam-Chittagong_Line','2015-09-01',30)\n")),(0,r.kt)("h2",{id:"inserting-data-from-sql-dumps"},"Inserting data from SQL dumps"),(0,r.kt)("p",null,"To read SQL dumps, ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats/#mysqldump"},"MySQLDump")," is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM file('dump.sql', MySQLDump)\nLIMIT 5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500month\u2500\u252c\u2500hits\u2500\u2510\n\u2502 Bangor_City_Forest             \u2502 2015-07-01 \u2502   34 \u2502\n\u2502 Alireza_Afzal                  \u2502 2017-02-01 \u2502   24 \u2502\n\u2502 Akhaura-Laksam-Chittagong_Line \u2502 2015-09-01 \u2502   30 \u2502\n\u2502 1973_National_500              \u2502 2017-10-01 \u2502   80 \u2502\n\u2502 Attachment                     \u2502 2017-09-01 \u2502 1356 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"By default, ClickHouse will skip unknown columns (controlled by ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/formats/#input_format_skip_unknown_fields"},"input_format_skip_unknown_fields")," option) and process data for the first found table in a dump (in case multiple tables were dumped to a single file). DDL statements will be skipped. To load data from MySQL dump into a table (",(0,r.kt)("a",{target:"_blank",href:a(73936).Z},"mysql.sql")," file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO some_data\nFROM INFILE 'mysql.sql' FORMAT MySQLDump\n")),(0,r.kt)("p",null,"We can also create a table automatically from the MySQL dump file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_from_mysql\nENGINE = MergeTree\nORDER BY tuple() AS\nSELECT *\nFROM file('mysql.sql', MySQLDump)\n")),(0,r.kt)("p",null,"Here we've created a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"table_from_mysql")," based on a structure that ClickHouse automatically inferred.  ClickHouse either detects types based on data or uses DDL when available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE table_from_mysql;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500name\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u252c\u2500comment\u2500\u252c\u2500codec_expression\u2500\u252c\u2500ttl_expression\u2500\u2510\n\u2502 path  \u2502 Nullable(String) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 month \u2502 Nullable(Date32) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2502 hits  \u2502 Nullable(UInt32) \u2502              \u2502                    \u2502         \u2502                  \u2502                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"other-formats"},"Other formats"),(0,r.kt)("p",null,"ClickHouse introduces support for many formats, both text, and binary, to cover various scenarios and platforms. Explore more formats and ways to work with them in the following articles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-formats/csv-tsv"},"CSV and TSV formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-formats/parquet-arrow-avro-orc"},"Parquet, Avro, Arrow and ORC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-formats/json"},"JSON formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-formats/templates-regexp"},"Regex and templates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/integrations/data-formats/binary-native"},"Native and binary formats")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL formats"))),(0,r.kt)("p",null,"And also check ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/blog/extracting-converting-querying-local-files-with-sql-clickhouse-local"},"clickhouse-local")," - a portable full-featured tool to work on local/remote files without the need for ClickHouse server."))}d.isMDXComponent=!0},22085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/dump-c9e1763152a0beb13dcaec0eaf666ab9.sql"},73936:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/mysql-2233383254a99aa9ae31e8e5884d88a3.sql"}}]);