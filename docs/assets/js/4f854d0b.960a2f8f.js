"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[41470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(a),d=s,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const i={slug:"/en/sql-reference/table-functions/s3",sidebar_position:45,sidebar_label:"s3",keywords:["s3","gcs","bucket"]},o="s3 Table Function",r={unversionedId:"en/sql-reference/table-functions/s3",id:"en/sql-reference/table-functions/s3",title:"s3 Table Function",description:"Provides a table-like interface to select/insert files in Amazon S3 and Google Cloud Storage. This table function is similar to the hdfs function, but provides S3-specific features.",source:"@site/docs/en/sql-reference/table-functions/s3.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/s3",permalink:"/docs/en/sql-reference/table-functions/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/s3.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{slug:"/en/sql-reference/table-functions/s3",sidebar_position:45,sidebar_label:"s3",keywords:["s3","gcs","bucket"]},sidebar:"sqlreference",previous:{title:"hdfs",permalink:"/docs/en/sql-reference/table-functions/hdfs"},next:{title:"input",permalink:"/docs/en/sql-reference/table-functions/input"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Partitioned Write",id:"partitioned-write",level:2},{value:"Accessing public buckets",id:"accessing-public-buckets",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"s3-table-function"},"s3 Table Function"),(0,s.kt)("p",null,"Provides a table-like interface to select/insert files in ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," and ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"Google Cloud Storage"),". This table function is similar to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/hdfs"},"hdfs function"),", but provides S3-specific features."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"s3(path [, NOSIGN | aws_access_key_id, aws_secret_access_key] [,format] [,structure] [,compression])\n")),(0,s.kt)("admonition",{title:"GCS",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The S3 Table Function integrates with Google Cloud Storage by using the GCS XML API and HMAC keys.  See the ",(0,s.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/interoperability"},"Google interoperability docs")," for more details about the endpoint and HMAC."),(0,s.kt)("p",{parentName:"admonition"},"For GCS, substitute your HMAC key and HMAC secret where you see ",(0,s.kt)("inlineCode",{parentName:"p"},"aws_access_key_id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"aws_secret_access_key"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"path")," \u2014 Bucket url with path to file. Supports following wildcards in readonly mode: ",(0,s.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"{abc,def}")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"{N..M}")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"M")," \u2014 numbers, ",(0,s.kt)("inlineCode",{parentName:"p"},"'abc'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'def'")," \u2014 strings. For more information see ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/integrations/s3#wildcards-in-path"},"here"),"."),(0,s.kt)("admonition",{parentName:"li",title:"GCS",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The GCS path is in this format as the endpoint for the Google XML API is different than the JSON API:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre"},"https://storage.googleapis.com/<bucket>/<folder>/<filename(s)>\n")),(0,s.kt)("p",{parentName:"admonition"},"and not ",(0,s.kt)("del",{parentName:"p"},(0,s.kt)("a",{parentName:"del",href:"https://storage.cloud.google.com"},"https://storage.cloud.google.com")),"."))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"NOSIGN")," - If this keyword is provided in place of credentials, all the requests will not be signed. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"format")," \u2014 The ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#formats"},"format")," of the file.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"structure")," \u2014 Structure of the table. Format ",(0,s.kt)("inlineCode",{parentName:"p"},"'column1_name column1_type, column2_name column2_type, ...'"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"compression")," \u2014 Parameter is optional. Supported values: ",(0,s.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"gzip/gz"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"brotli/br"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xz/LZMA"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"zstd/zst"),". By default, it will autodetect compression by file extension."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returned value")),(0,s.kt)("p",null,"A table with the specified structure for reading or writing data in the specified file."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("p",null,"Selecting the first 5 rows from the table from S3 file ",(0,s.kt)("inlineCode",{parentName:"p"},"https://datasets-documentation.s3.eu-west-3.amazonaws.com/aapl_stock.csv"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3(\n   'https://datasets-documentation.s3.eu-west-3.amazonaws.com/aapl_stock.csv',\n   'CSVWithNames'\n)\nLIMIT 5;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500Date\u2500\u252c\u2500\u2500\u2500\u2500Open\u2500\u252c\u2500\u2500\u2500\u2500High\u2500\u252c\u2500\u2500\u2500\u2500\u2500Low\u2500\u252c\u2500\u2500\u2500Close\u2500\u252c\u2500\u2500\u2500Volume\u2500\u252c\u2500OpenInt\u2500\u2510\n\u2502 1984-09-07 \u2502 0.42388 \u2502 0.42902 \u2502 0.41874 \u2502 0.42388 \u2502 23220030 \u2502       0 \u2502\n\u2502 1984-09-10 \u2502 0.42388 \u2502 0.42516 \u2502 0.41366 \u2502 0.42134 \u2502 18022532 \u2502       0 \u2502\n\u2502 1984-09-11 \u2502 0.42516 \u2502 0.43668 \u2502 0.42516 \u2502 0.42902 \u2502 42498199 \u2502       0 \u2502\n\u2502 1984-09-12 \u2502 0.42902 \u2502 0.43157 \u2502 0.41618 \u2502 0.41618 \u2502 37125801 \u2502       0 \u2502\n\u2502 1984-09-13 \u2502 0.43927 \u2502 0.44052 \u2502 0.43927 \u2502 0.43927 \u2502 57822062 \u2502       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"ClickHouse uses filename extensions to determine the format of the data. For example, we could have run the previous command without the ",(0,s.kt)("inlineCode",{parentName:"p"},"CSVWithNames"),":"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3(\n   'https://datasets-documentation.s3.eu-west-3.amazonaws.com/aapl_stock.csv'\n)\nLIMIT 5;\n")),(0,s.kt)("p",{parentName:"admonition"},"ClickHouse also can determine the compression of the file. For example, if the file was zipped up with a ",(0,s.kt)("inlineCode",{parentName:"p"},".csv.gz")," extension, ClickHouse would decompress the file automatically.")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Suppose that we have several files with following URIs on S3:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_1.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_2.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_3.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_4.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/some_prefix/some_file_4.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_1.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_2.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_3.csv'")),(0,s.kt)("li",{parentName:"ul"},"'",(0,s.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_4.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/another_prefix/some_file_4.csv'"))),(0,s.kt)("p",null,"Count the amount of rows in files ending with numbers from 1 to 3:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/{some,another}_prefix/some_file_{1..3}.csv', 'CSV', 'name String, value UInt32')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Count the total amount of rows in all files in these two directories:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/{some,another}_prefix/*', 'CSV', 'name String, value UInt32')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      24 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If your listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,s.kt)("inlineCode",{parentName:"p"},"?"),".")),(0,s.kt)("p",null,"Count the total amount of rows in files named ",(0,s.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,s.kt)("inlineCode",{parentName:"p"},"file-999.csv"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/big_prefix/file-{000..999}.csv', 'CSV', 'name String, value UInt32');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      12 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Insert data into file ",(0,s.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nVALUES ('test-data', 1), ('test-data-2', 2);\n")),(0,s.kt)("p",null,"Insert data into file ",(0,s.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz")," from existing table:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO FUNCTION s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip')\nSELECT name, value FROM existing_table;\n")),(0,s.kt)("p",null,"Glob ** can be used for recursive directory traversal. Consider the below example, it will fetch all files from ",(0,s.kt)("inlineCode",{parentName:"p"},"my-test-bucket-768")," directory recursively:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/**', 'CSV', 'name String, value UInt32', 'gzip');\n")),(0,s.kt)("p",null,"The below get data from all ",(0,s.kt)("inlineCode",{parentName:"p"},"test-data.csv.gz")," files from any folder inside ",(0,s.kt)("inlineCode",{parentName:"p"},"my-test-bucket")," directory recursively:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM s3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/**/test-data.csv.gz', 'CSV', 'name String, value UInt32', 'gzip');\n")),(0,s.kt)("h2",{id:"partitioned-write"},"Partitioned Write"),(0,s.kt)("p",null,"If you specify ",(0,s.kt)("inlineCode",{parentName:"p"},"PARTITION BY")," expression when inserting data into ",(0,s.kt)("inlineCode",{parentName:"p"},"S3")," table, a separate file is created for each partition value. Splitting the data into separate files helps to improve reading operations efficiency."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Using partition ID in a key creates separate files:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket/file_{_partition_id}.csv', 'CSV', 'a String, b UInt32, c UInt32')\n    PARTITION BY a VALUES ('x', 2, 3), ('x', 4, 5), ('y', 11, 12), ('y', 13, 14), ('z', 21, 22), ('z', 23, 24);\n")),(0,s.kt)("p",null,"As a result, the data is written into three files: ",(0,s.kt)("inlineCode",{parentName:"p"},"file_x.csv"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"file_y.csv"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"file_z.csv"),"."),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Using partition ID in a bucket name creates files in different buckets:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TABLE FUNCTION\n    s3('http://bucket.amazonaws.com/my_bucket_{_partition_id}/file.csv', 'CSV', 'a UInt32, b UInt32, c UInt32')\n    PARTITION BY a VALUES (1, 2, 3), (1, 4, 5), (10, 11, 12), (10, 13, 14), (20, 21, 22), (20, 23, 24);\n")),(0,s.kt)("p",null,"As a result, the data is written into three files in different buckets: ",(0,s.kt)("inlineCode",{parentName:"p"},"my_bucket_1/file.csv"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"my_bucket_10/file.csv"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"my_bucket_20/file.csv"),"."),(0,s.kt)("h2",{id:"accessing-public-buckets"},"Accessing public buckets"),(0,s.kt)("p",null,"ClickHouse tries to fetch credentials from many different types of sources.\nSometimes, it can produce problems when accessing some buckets that are public causing the client to return ",(0,s.kt)("inlineCode",{parentName:"p"},"403")," error code.\nThis issue can be avoided by using ",(0,s.kt)("inlineCode",{parentName:"p"},"NOSIGN")," keyword, forcing the client to ignore all the credentials, and not sign the requests."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3(\n   'https://datasets-documentation.s3.eu-west-3.amazonaws.com/aapl_stock.csv',\n   NOSIGN,\n   'CSVWithNames'\n)\nLIMIT 5;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/integrations/s3"},"S3 engine"))))}u.isMDXComponent=!0}}]);