"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[17367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={date:new Date("2023-03-22T00:00:00.000Z")},o="How to ingest Parquet files from an S3 bucket",i={permalink:"/docs/knowledgebase/ingest-parquet-files-in-s3",source:"@site/knowledgebase/ingest-parquet-files-in-s3.md",title:"How to ingest Parquet files from an S3 bucket",description:"Below are some basics of using the S3 table engine to read parquet files.",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[],readingTime:2.88,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-22T00:00:00.000Z"},prevItem:{title:"How do I export data from ClickHouse to a file?",permalink:"/docs/knowledgebase/en/faq/integration/file-export"},nextItem:{title:"Converting Files from Parquet to CSV or JSON",permalink:"/docs/knowledgebase/parquet-to-csv-json"}},c={authorsImageUrls:[]},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below are some basics of using the S3 table engine to read parquet files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"create access and secret keys for an IAM service user.\nnormal login users usually don't work since they may have been configured with an MFA policy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"set the permissions on the policy to allow the service user to access the bucket and folders."))),(0,r.kt)("p",null,"The following is a very simple example that you can use to test the mechanics of accessing your parquet files successfully prior to applying to your actual data."),(0,r.kt)("p",null,"If you need an example of creating a user and bucket, you can follow the first two sections (create user and create bucket):\n",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/guides/sre/configuring-s3-for-clickhouse-use/"},"https://clickhouse.com/docs/en/guides/sre/configuring-s3-for-clickhouse-use/")),(0,r.kt)("p",null,"I used this sample file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Teradata/kylo/tree/master/samples/sample-data/parquet"},"https://github.com/Teradata/kylo/tree/master/samples/sample-data/parquet"),"\nand uploaded it to my test bucket"),(0,r.kt)("p",null,"You can set the policy something like this on the bucket:\n(adjust as needed, this one is fairly open for privileges but will help in testing. you can narrow your permissions as necessary)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Id": "Policy123456",\n    "Statement": [\n        {\n            "Sid": "abc123",\n            "Effect": "Allow",\n            "Principal": {\n                "AWS": [\n                    "arn:aws:iam::1234567890:user/mars-s3-user"\n                ]\n            },\n            "Action": "s3:*",\n            "Resource": [\n                "arn:aws:s3:::mars-doc-test",\n                "arn:aws:s3:::mars-doc-test/*"\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can run queries with this type of syntax using the S3 table engine:\n",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/"},"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-cloud :)  select count(*) from s3('https://mars-doc-test.s3.amazonaws.com/s3-parquet-test/userdata1.parquet','ABC123', 'abc+123', 'Parquet', 'first_name String');\n\nSELECT count(*)\nFROM s3('https://mars-doc-test.s3.amazonaws.com/s3-parquet-test/userdata1.parquet', 'ABC123', 'abc+123', 'Parquet', 'first_name String')\n\nQuery id: fd4f1193-d604-4ac0-9a46-bdd2d5e14727\n\n\u250c\u2500count()\u2500\u2510\n\u2502    1000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 1.274 sec. Processed 1.00 thousand rows, 14.64 KB (784.81 rows/s., 11.49 KB/s.)\n")),(0,r.kt)("p",null,"The data types reference for parquet format are here:\n",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/formats/#data-format-parquet"},"https://clickhouse.com/docs/en/interfaces/formats/#data-format-parquet")),(0,r.kt)("p",null,"To bring in the data into a native ClickHouse table:"),(0,r.kt)("p",null,"create the table, something like this (just chose a couple of the columns in the parquet file):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-cloud :) CREATE TABLE my_parquet_table (id UInt64, first_name String) ENGINE = MergeTree ORDER BY id;\n\nCREATE TABLE my_parquet_table\n(\n    `id` UInt64,\n    `first_name` String\n)\nENGINE = MergeTree\nORDER BY id\n\nQuery id: 412e3994-bf8e-444e-ac43-a7c82642b7da\n\nOk.\n\n0 rows in set. Elapsed: 0.600 sec.\n")),(0,r.kt)("p",null,"Select the data from the S3 bucket to insert into the new table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-cloud :) INSERT INTO my_parquet_table (id, first_name) SELECT id, first_name FROM s3('https://mars-doc-test.s3.amazonaws.com/s3-parquet-test/userdata1.parquet', 'ABC123','abc+123', 'Parquet', 'id UInt64, first_name String') FORMAT Parquet\n\nINSERT INTO my_parquet_table (id, first_name) SELECT\n    id,\n    first_name\nFROM s3('https://mars-doc-test.s3.amazonaws.com/s3-parquet-test/userdata1.parquet', 'ABC123', 'abc+123', 'Parquet', 'id UInt64, first_name String')\n\nQuery id: c3cdc871-f338-462d-8797-6751b45a0b58\n\nOk.\n\n0 rows in set. Elapsed: 1.220 sec. Processed 1.00 thousand rows, 22.64 KB (819.61 rows/s., 18.56 KB/s.)\n")),(0,r.kt)("p",null,"Verify the import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse-cloud :) SELECT * FROM my_parquet_table LIMIT 10;\n\nSELECT *\nFROM my_parquet_table\nLIMIT 10\n\nQuery id: 1ccf59dd-d804-46a9-aadd-ed5c57b9e1a0\n\n\u250c\u2500id\u2500\u252c\u2500first_name\u2500\u2510\n\u2502  1 \u2502 Amanda     \u2502\n\u2502  2 \u2502 Albert     \u2502\n\u2502  3 \u2502 Evelyn     \u2502\n\u2502  4 \u2502 Denise     \u2502\n\u2502  5 \u2502 Carlos     \u2502\n\u2502  6 \u2502 Kathryn    \u2502\n\u2502  7 \u2502 Samuel     \u2502\n\u2502  8 \u2502 Harry      \u2502\n\u2502  9 \u2502 Jose       \u2502\n\u2502 10 \u2502 Emily      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"When you are ready to import your real data, you can use some special syntax like wildcards and ranges to specify your folders, subfolders and files in your bucket.\nI'd recommend to filter a few directories and files to test the import, maybe a certain year, a couple months and some date range to test first."),(0,r.kt)("p",null,"besides the path options here, newly released is syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," which specifies all subdirectories recursively.\n",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/"},"https://clickhouse.com/docs/en/sql-reference/table-functions/s3/")),(0,r.kt)("p",null,"For example, assuming the paths and bucket structure is something like this:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://your_s3_bucket.s3.amazonaws.com/<your_folder>/<year>/<month>/<day>/<filename>.parquet"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://mars-doc-test.s3.amazonaws.com/system_logs/2022/11/01/my-app-logs-0001.parquet")),(0,r.kt)("p",null,"This would get all files for 1st day of every month in 2021-2022\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://mars-doc-test.s3.amazonaws.com/system_logs/{2021-2022}/**/01/*.parquet")))}m.isMDXComponent=!0}}]);