"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79055],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],s={sidebar_position:7,sidebar_label:"S3"},o="S3 Table Engine",p={unversionedId:"en/engines/table-engines/integrations/s3",id:"en/engines/table-engines/integrations/s3",title:"S3 Table Engine",description:"This engine provides integration with Amazon S3 ecosystem. This engine is similar to the HDFS engine, but provides S3-specific features.",source:"@site/docs/en/engines/table-engines/integrations/s3.md",sourceDirName:"en/engines/table-engines/integrations",slug:"/en/engines/table-engines/integrations/s3",permalink:"/docs/en/engines/table-engines/integrations/s3",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/integrations/s3.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"S3"},sidebar:"english",previous:{title:"HDFS",permalink:"/docs/en/engines/table-engines/integrations/hdfs"},next:{title:"SQLite",permalink:"/docs/en/engines/table-engines/integrations/sqlite"}},m={},c=[{value:"Create Table",id:"creating-a-table",level:2},{value:"Virtual columns",id:"virtual-columns",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Wildcards In Path",id:"wildcards-in-path",level:2},{value:"S3-related Settings",id:"settings",level:2},{value:"Endpoint-based Settings",id:"endpoint-settings",level:2},{value:"See also",id:"see-also",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"s3-table-engine"},"S3 Table Engine"),(0,l.kt)("p",null,"This engine provides integration with ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," ecosystem. This engine is similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file#table_engines-hdfs"},"HDFS")," engine, but provides S3-specific features."),(0,l.kt)("h2",{id:"creating-a-table"},"Create Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32)\n    ENGINE = S3(path, [aws_access_key_id, aws_secret_access_key,] format, [compression])\n    [SETTINGS ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Engine parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u2014 Bucket url with path to file. Supports following wildcards in readonly mode: ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"{abc,def}")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," where ",(0,l.kt)("inlineCode",{parentName:"li"},"N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"M")," \u2014 numbers, ",(0,l.kt)("inlineCode",{parentName:"li"},"'abc'"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"'def'")," \u2014 strings. For more information see ",(0,l.kt)("a",{parentName:"li",href:"#wildcards-in-path"},"below"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 The ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/interfaces/formats#formats"},"format")," of the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws_access_key_id"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"aws_secret_access_key")," - Long-term credentials for the ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"AWS")," account user.  You can use these to authenticate your requests. Parameter is optional. If credentials are not specified, they are used from the configuration file. For more information see ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-s3"},"Using S3 for Data Storage"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compression")," \u2014 Compression type. Supported values: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"gzip/gz"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"brotli/br"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"xz/LZMA"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"zstd/zst"),". Parameter is optional. By default, it will autodetect compression by file extension.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE s3_engine_table (name String, value UInt32)\n    ENGINE=S3('https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/test-data.csv.gz', 'CSV', 'gzip')\n    SETTINGS input_format_with_names_use_header = 0;\n\nINSERT INTO s3_engine_table VALUES ('one', 1), ('two', 2), ('three', 3);\n\nSELECT * FROM s3_engine_table LIMIT 2;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"virtual-columns"},"Virtual columns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 Path to the file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 Name of the file.")),(0,l.kt)("p",null,"For more information about virtual columns see ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/#table_engines-virtual_columns"},"here"),"."),(0,l.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Reads and writes can be parallel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Not supported:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," operations."),(0,l.kt)("li",{parentName:"ul"},"Indexes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/operations/storing-data#zero-copy"},"Zero-copy")," replication is possible, but not supported.")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Zero-copy replication is not ready for production")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Zero-copy replication is disabled by default in ClickHouse version 22.8 and higher.  This feature is not recommended for production use."))))),(0,l.kt)("h2",{id:"wildcards-in-path"},"Wildcards In Path"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"path")," argument can specify multiple files using bash-like wildcards. For being processed file should exist and match to the whole path pattern. Listing of files is determined during ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," (not at ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," moment)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u2014 Substitutes any number of any characters except ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," including empty string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u2014 Substitutes any single character."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 Substitutes any of strings ",(0,l.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 Substitutes any number in range from N to M including both borders. N and M can have leading zeroes e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"000..078"),".")),(0,l.kt)("p",null,"Constructions with ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," are similar to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/remote"},"remote")," table function."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If the listing of files contains number ranges with leading zeros, use the construction with braces for each digit separately or use ",(0,l.kt)("inlineCode",{parentName:"p"},"?"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example with wildcards 1")),(0,l.kt)("p",null,"Create table with files named ",(0,l.kt)("inlineCode",{parentName:"p"},"file-000.csv"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"file-001.csv"),", \u2026 , ",(0,l.kt)("inlineCode",{parentName:"p"},"file-999.csv"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE big_table (name String, value UInt32)\n    ENGINE = S3('https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/my_folder/file-{000..999}.csv', 'CSV');\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example with wildcards 2")),(0,l.kt)("p",null,"Suppose we have several files in CSV format with the following URIs on S3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_1.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_2.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/some_folder/some_file_3.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_1.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_1.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_2.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_2.csv'")),(0,l.kt)("li",{parentName:"ul"},"'",(0,l.kt)("a",{parentName:"li",href:"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_3.csv'"},"https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/another_folder/some_file_3.csv'"))),(0,l.kt)("p",null,"There are several ways to make a table consisting of all six files:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Specify the range of file postfixes:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32)\n    ENGINE = S3('https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/{some,another}_folder/some_file_{1..3}', 'CSV');\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Take all files with ",(0,l.kt)("inlineCode",{parentName:"li"},"some_file_")," prefix (there should be no extra files with such prefix in both folders):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32)\n    ENGINE = S3('https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/{some,another}_folder/some_file_?', 'CSV');\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Take all the files in both folders (all files should satisfy format and schema described in query):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32)\n    ENGINE = S3('https://clickhouse-public-datasets.s3.amazonaws.com/my-bucket/{some,another}_folder/*', 'CSV');\n")),(0,l.kt)("h2",{id:"settings"},"S3-related Settings"),(0,l.kt)("p",null,"The following settings can be set before query execution or placed into configuration file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s3_max_single_part_upload_size")," \u2014 The maximum size of object to upload using singlepart upload to S3. Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"64Mb"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s3_min_upload_part_size")," \u2014 The minimum size of part to upload during multipart upload to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html"},"S3 Multipart upload"),". Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"512Mb"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s3_max_redirects")," \u2014 Max number of S3 redirects hops allowed. Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s3_single_read_retries")," \u2014 The maximum number of attempts during single read. Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,l.kt)("p",null,"Security consideration: if malicious user can specify arbitrary S3 URLs, ",(0,l.kt)("inlineCode",{parentName:"p"},"s3_max_redirects")," must be set to zero to avoid ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-side_request_forgery"},"SSRF")," attacks; or alternatively, ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_host_filter")," must be specified in server configuration."),(0,l.kt)("h2",{id:"endpoint-settings"},"Endpoint-based Settings"),(0,l.kt)("p",null,"The following settings can be specified in configuration file for given endpoint (which will be matched by exact prefix of a URL):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"endpoint")," \u2014 Specifies prefix of an endpoint. Mandatory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"access_key_id")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"secret_access_key")," \u2014 Specifies credentials to use with given endpoint. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_environment_credentials")," \u2014 If set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", S3 client will try to obtain credentials from environment variables and ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Amazon_Elastic_Compute_Cloud"},"Amazon EC2")," metadata for given endpoint. Optional, default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"region")," \u2014 Specifies S3 region name. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_insecure_imds_request")," \u2014 If set to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", S3 client will use insecure IMDS request while obtaining credentials from Amazon EC2 metadata. Optional, default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"header")," \u2014  Adds specified HTTP header to a request to given endpoint. Optional, can be speficied multiple times."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"server_side_encryption_customer_key_base64")," \u2014 If specified, required headers for accessing S3 objects with SSE-C encryption will be set. Optional."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_single_read_retries")," \u2014 The maximum number of attempts during single read. Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"4"),". Optional.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<s3>\n    <endpoint-name>\n        <endpoint>https://clickhouse-public-datasets.s3.amazonaws.com/my-test-bucket-768/</endpoint>\n        \x3c!-- <access_key_id>ACCESS_KEY_ID</access_key_id> --\x3e\n        \x3c!-- <secret_access_key>SECRET_ACCESS_KEY</secret_access_key> --\x3e\n        \x3c!-- <region>us-west-1</region> --\x3e\n        \x3c!-- <use_environment_credentials>false</use_environment_credentials> --\x3e\n        \x3c!-- <use_insecure_imds_request>false</use_insecure_imds_request> --\x3e\n        \x3c!-- <header>Authorization: Bearer SOME-TOKEN</header> --\x3e\n        \x3c!-- <server_side_encryption_customer_key_base64>BASE64-ENCODED-KEY</server_side_encryption_customer_key_base64> --\x3e\n        \x3c!-- <max_single_read_retries>4</max_single_read_retries> --\x3e\n    </endpoint-name>\n</s3>\n")),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/s3"},"s3 table function"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/integrations/s3/"},"Original article")," "))}d.isMDXComponent=!0}}]);