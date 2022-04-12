"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43601],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={sidebar_position:33,sidebar_label:"INSERT INTO"},o="INSERT INTO Statement",p={unversionedId:"en/sql-reference/statements/insert-into",id:"en/sql-reference/statements/insert-into",title:"INSERT INTO Statement",description:"Inserts data into a table.",source:"@site/docs/en/sql-reference/statements/insert-into.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/insert-into",permalink:"/en/sql-reference/statements/insert-into",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/statements/insert-into.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,sidebar_label:"INSERT INTO"},sidebar:"english",previous:{title:"WITH",permalink:"/en/sql-reference/statements/select/with"},next:{title:"CREATE",permalink:"/en/sql-reference/statements/create/"}},c={},u=[{value:"Constraints",id:"constraints",level:3},{value:"Inserting the Results of <code>SELECT</code>",id:"insert_query_insert-select",level:3},{value:"Inserting Data from a File",id:"inserting-data-from-a-file",level:3},{value:"Inserting into Table Function",id:"inserting-into-table-function",level:3},{value:"Performance Considerations",id:"performance-considerations",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"insert-into-statement"},"INSERT INTO Statement"),(0,i.kt)("p",null,"Inserts data into a table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] VALUES (v11, v12, v13), (v21, v22, v23), ...\n")),(0,i.kt)("p",null,"You can specify a list of columns to insert using  the ",(0,i.kt)("inlineCode",{parentName:"p"},"(c1, c2, c3)"),". You can also use an expression with column ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/#asterisk"},"matcher")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," and/or ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/#select-modifiers"},"modifiers")," such as ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/#apply-modifier"},"APPLY"),", ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/#except-modifier"},"EXCEPT"),", ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/#replace-modifier"},"REPLACE"),"."),(0,i.kt)("p",null,"For example, consider the table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE insert_select_testtable;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE insert_select_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8\n)\nENGINE = MergeTree()\nORDER BY a\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (*) VALUES (1, 'a', 1) ;\n")),(0,i.kt)("p",null,"If you want to insert data in all the columns, except 'b', you need to pass so many values how many columns you chose in parenthesis then:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (* EXCEPT(b)) Values (2, 2);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM insert_select_testtable;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 2 \u2502   \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 a \u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"In this example, we see that the second inserted row has ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," columns filled by the passed values, and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," filled with value by default. It is also possible to use ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT")," keyword to insert default values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable VALUES (1, DEFAULT, 1) ;\n")),(0,i.kt)("p",null,"If a list of columns does not include all existing columns, the rest of the columns are filled with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The values calculated from the ",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT")," expressions specified in the table definition."),(0,i.kt)("li",{parentName:"ul"},"Zeros and empty strings, if ",(0,i.kt)("inlineCode",{parentName:"li"},"DEFAULT")," expressions are not defined.")),(0,i.kt)("p",null,"Data can be passed to the INSERT in any ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/formats#formats"},"format")," supported by ClickHouse. The format must be specified explicitly in the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT format_name data_set\n")),(0,i.kt)("p",null,"For example, the following query format is identical to the basic version of INSERT \u2026 VALUES:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT Values (v11, v12, v13), (v21, v22, v23), ...\n")),(0,i.kt)("p",null,"ClickHouse removes all spaces and one line feed (if there is one) before the data. When forming a query, we recommend putting the data on a new line after the query operators (this is important if the data begins with spaces)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t FORMAT TabSeparated\n11  Hello, world!\n22  Qwerty\n")),(0,i.kt)("p",null,"You can insert data separately from the query by using the command-line client or the HTTP interface. For more information, see the section \u201c",(0,i.kt)("a",{parentName:"p",href:"../../interfaces"},"Interfaces"),"\u201d."),(0,i.kt)("h3",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"If table has ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table#constraints"},"constraints"),", their expressions will be checked for each row of inserted data. If any of those constraints is not satisfied \u2014 server will raise an exception containing constraint name and expression, the query will be stopped."),(0,i.kt)("h3",{id:"insert_query_insert-select"},"Inserting the Results of ",(0,i.kt)("inlineCode",{parentName:"h3"},"SELECT")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] SELECT ...\n")),(0,i.kt)("p",null,"Columns are mapped according to their position in the SELECT clause. However, their names in the SELECT expression and the table for INSERT may differ. If necessary, type casting is performed."),(0,i.kt)("p",null,"None of the data formats except Values allow setting values to expressions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"now()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 2"),", and so on. The Values format allows limited use of expressions, but this is not recommended, because in this case inefficient code is used for their execution."),(0,i.kt)("p",null,"Other queries for modifying data parts are not supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT UPDATE"),".\nHowever, you can delete old data using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DROP PARTITION"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause must be specified in the end of query if ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," clause contains table function ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/input"},"input()"),"."),(0,i.kt)("p",null,"To insert a default value instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," into a column with not nullable data type, enable ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#insert_null_as_default"},"insert_null_as_default")," setting."),(0,i.kt)("h3",{id:"inserting-data-from-a-file"},"Inserting Data from a File"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FROM INFILE file_name [COMPRESSION type] FORMAT format_name\n")),(0,i.kt)("p",null,"Use the syntax above to insert data from a file stored on a ",(0,i.kt)("strong",{parentName:"p"},"client")," side. ",(0,i.kt)("inlineCode",{parentName:"p"},"file_name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," are string literals. Input file ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/formats"},"format")," must be set in the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause. "),(0,i.kt)("p",null,"Compressed files are supported. Compression type is detected by the extension of the file name. Or it can be explicitly specified in a ",(0,i.kt)("inlineCode",{parentName:"p"},"COMPRESSION")," clause. Supported types are: ",(0,i.kt)("inlineCode",{parentName:"p"},"'none'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'gzip'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'deflate'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'br'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'xz'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'zstd'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'lz4'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'bz2'"),"."),(0,i.kt)("p",null,"This functionality is available in the ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/cli"},"command-line client")," and ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/utilities/clickhouse-local"},"clickhouse-local"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Execute the following queries using ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/cli"},"command-line client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo 1,A > input.csv ; echo 2,B >> input.csv\nclickhouse-client --query="CREATE TABLE table_from_file (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;"\nclickhouse-client --query="INSERT INTO table_from_file FROM INFILE \'input.csv\' FORMAT CSV;"\nclickhouse-client --query="SELECT * FROM table_from_file FORMAT PrettyCompact;"\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500text\u2500\u2510\n\u2502  1 \u2502 A    \u2502\n\u2502  2 \u2502 B    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"inserting-into-table-function"},"Inserting into Table Function"),(0,i.kt)("p",null,"Data can be inserted into tables referenced by ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/"},"table functions"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [TABLE] FUNCTION table_func ...\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/#remote"},"remote")," table function is used in the following queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE simple_table (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;\nINSERT INTO TABLE FUNCTION remote('localhost', default.simple_table) \n    VALUES (100, 'inserted via remote()');\nSELECT * FROM simple_table;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 100 \u2502 inserted via remote() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"performance-considerations"},"Performance Considerations"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," sorts the input data by primary key and splits them into partitions by a partition key. If you insert data into several partitions at once, it can significantly reduce the performance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query. To avoid this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add data in fairly large batches, such as 100,000 rows at a time."),(0,i.kt)("li",{parentName:"ul"},"Group data by a partition key before uploading it to ClickHouse.")),(0,i.kt)("p",null,"Performance will not decrease if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data is added in real time."),(0,i.kt)("li",{parentName:"ul"},"You upload data that is usually sorted by time.")),(0,i.kt)("p",null,"It's also possible to asynchronously insert data in small but frequent inserts. The data from such insertions is combined into batches and then safely inserted into a table. To enable the asynchronous mode, switch on the ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#async-insert"},"async_insert")," setting. Note that asynchronous insertions are supported only over HTTP protocol, and deduplication is not supported for them."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#async-insert"},"async_insert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#async-insert-threads"},"async_insert_threads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#wait-for-async-insert"},"wait_for_async_insert")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#wait-for-async-insert-timeout"},"wait_for_async_insert_timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#async-insert-max-data-size"},"async_insert_max_data_size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#async-insert-busy-timeout-ms"},"async_insert_busy_timeout_ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#async-insert-stale-timeout-ms"},"async_insert_stale_timeout_ms"))))}d.isMDXComponent=!0}}]);