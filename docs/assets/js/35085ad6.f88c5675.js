"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[6671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=s,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={slug:"/en/getting-started/example-datasets/environmental-sensors",sidebar_label:"Environmental Sensors Data"},o="Environmental Sensors Data",l={unversionedId:"en/getting-started/example-datasets/environmental-sensors",id:"en/getting-started/example-datasets/environmental-sensors",title:"Environmental Sensors Data",description:"Sensor.Community is a contributors-driven global sensor network that creates Open Environmental Data. The data is collected from sensors all over the globe. Anyone can purchase a sensor and place it wherever they like. The APIs to download the data is in GitHub and the data is freely available under the Database Contents License (DbCL).",source:"@site/docs/en/getting-started/example-datasets/environmental-sensors.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/environmental-sensors",permalink:"/docs/en/getting-started/example-datasets/environmental-sensors",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/environmental-sensors.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/environmental-sensors",sidebar_label:"Environmental Sensors Data"},sidebar:"docs",previous:{title:"Terabyte Click Logs from Criteo",permalink:"/docs/en/getting-started/example-datasets/criteo"},next:{title:"GitHub Events",permalink:"/docs/en/getting-started/example-datasets/github-events"}},i={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"environmental-sensors-data"},"Environmental Sensors Data"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://sensor.community/en/"},"Sensor.Community")," is a contributors-driven global sensor network that creates Open Environmental Data. The data is collected from sensors all over the globe. Anyone can purchase a sensor and place it wherever they like. The APIs to download the data is in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/opendata-stuttgart/meta/wiki/APIs"},"GitHub")," and the data is freely available under the ",(0,s.kt)("a",{parentName:"p",href:"https://opendatacommons.org/licenses/dbcl/1-0/"},"Database Contents License (DbCL)"),"."),(0,s.kt)("admonition",{type:"important"},(0,s.kt)("p",{parentName:"admonition"},"The dataset has over 20 billion records, so be careful just copying-and-pasting the commands below unless your resources can handle that type of volume. The commands below were executed on a ",(0,s.kt)("strong",{parentName:"p"},"Production")," instance of ",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.cloud"},"ClickHouse Cloud"),".")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The data is in S3, so we can use the ",(0,s.kt)("inlineCode",{parentName:"li"},"s3")," table function to create a table from the files. We can also query the data in place. Let's look at a few rows before attempting to insert it into ClickHouse:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM s3(\n    'https://clickhouse-public-datasets.s3.eu-central-1.amazonaws.com/sensors/monthly/2019-06_bmp180.csv.zst',\n    'CSVWithNames'\n   )\nLIMIT 10\nSETTINGS format_csv_delimiter = ';';\n")),(0,s.kt)("p",null,"The data is in CSV files but uses a semi-colon for the delimiter. The rows look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500sensor_id\u2500\u252c\u2500sensor_type\u2500\u252c\u2500location\u2500\u252c\u2500\u2500\u2500\u2500lat\u2500\u252c\u2500\u2500\u2500\u2500lon\u2500\u252c\u2500timestamp\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500pressure\u2500\u252c\u2500altitude\u2500\u252c\u2500pressure_sealevel\u2500\u252c\u2500temperature\u2500\u2510\n\u2502      9119 \u2502 BMP180      \u2502     4594 \u2502 50.994 \u2502  7.126 \u2502 2019-06-01T00:00:00 \u2502    101471 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        19.9 \u2502\n\u2502     21210 \u2502 BMP180      \u2502    10762 \u2502 42.206 \u2502 25.326 \u2502 2019-06-01T00:00:00 \u2502     99525 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        19.3 \u2502\n\u2502     19660 \u2502 BMP180      \u2502     9978 \u2502 52.434 \u2502 17.056 \u2502 2019-06-01T00:00:04 \u2502    101570 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        15.3 \u2502\n\u2502     12126 \u2502 BMP180      \u2502     6126 \u2502 57.908 \u2502  16.49 \u2502 2019-06-01T00:00:05 \u2502 101802.56 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        8.07 \u2502\n\u2502     15845 \u2502 BMP180      \u2502     8022 \u2502 52.498 \u2502 13.466 \u2502 2019-06-01T00:00:05 \u2502    101878 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502          23 \u2502\n\u2502     16415 \u2502 BMP180      \u2502     8316 \u2502 49.312 \u2502  6.744 \u2502 2019-06-01T00:00:06 \u2502    100176 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        14.7 \u2502\n\u2502      7389 \u2502 BMP180      \u2502     3735 \u2502 50.136 \u2502 11.062 \u2502 2019-06-01T00:00:06 \u2502     98905 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        12.1 \u2502\n\u2502     13199 \u2502 BMP180      \u2502     6664 \u2502 52.514 \u2502  13.44 \u2502 2019-06-01T00:00:07 \u2502 101855.54 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502       19.74 \u2502\n\u2502     12753 \u2502 BMP180      \u2502     6440 \u2502 44.616 \u2502  2.032 \u2502 2019-06-01T00:00:07 \u2502     99475 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502          17 \u2502\n\u2502     16956 \u2502 BMP180      \u2502     8594 \u2502 52.052 \u2502 8.354 \u2502 2019-06-01T00:00:08 \u2502   101322 \u2502 \u1d3a\u1d41\u1d38\u1d38     \u2502 \u1d3a\u1d41\u1d38\u1d38              \u2502        17.2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"We will use the following ",(0,s.kt)("inlineCode",{parentName:"li"},"MergeTree")," table to store the data in ClickHouse:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sensors\n(\n    sensor_id UInt16,\n    sensor_type Enum('BME280', 'BMP180', 'BMP280', 'DHT22', 'DS18B20', 'HPM', 'HTU21D', 'PMS1003', 'PMS3003', 'PMS5003', 'PMS6003', 'PMS7003', 'PPD42NS', 'SDS011'),\n    location UInt32,\n    lat Float32,\n    lon Float32,\n    timestamp DateTime,\n    P1 Float32,\n    P2 Float32,\n    P0 Float32,\n    durP1 Float32,\n    ratioP1 Float32,\n    durP2 Float32,\n    ratioP2 Float32,\n    pressure Float32,\n    altitude Float32,\n    pressure_sealevel Float32,\n    temperature Float32,\n    humidity Float32,\n    date Date MATERIALIZED toDate(timestamp)\n)\nENGINE = MergeTree\nORDER BY (timestamp, sensor_id);\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"ClickHouse Cloud services have a cluster named ",(0,s.kt)("inlineCode",{parentName:"li"},"default"),". We will use the ",(0,s.kt)("inlineCode",{parentName:"li"},"s3Cluster")," table function, which reads S3 files in parallel from the nodes in your cluster. (If you do not have a cluster, just use the ",(0,s.kt)("inlineCode",{parentName:"li"},"s3")," function and remove the cluster name.)")),(0,s.kt)("p",null,"This query will take a while - it's about 1.67T of data uncompressed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO sensors\n    SELECT *\n    FROM s3Cluster(\n        'default',\n        'https://clickhouse-public-datasets.s3.amazonaws.com/sensors/monthly/*.csv.zst',\n        'CSVWithNames',\n        $$ sensor_id UInt16,\n        sensor_type String,\n        location UInt32,\n        lat Float32,\n        lon Float32,\n        timestamp DateTime,\n        P1 Float32,\n        P2 Float32,\n        P0 Float32,\n        durP1 Float32,\n        ratioP1 Float32,\n        durP2 Float32,\n        ratioP2 Float32,\n        pressure Float32,\n        altitude Float32,\n        pressure_sealevel Float32,\n        temperature Float32,\n        humidity Float32 $$\n    )\nSETTINGS\n    format_csv_delimiter = ';',\n    input_format_allow_errors_ratio = '0.5',\n    input_format_allow_errors_num = 10000,\n    input_format_parallel_parsing = 0,\n    date_time_input_format = 'best_effort',\n    max_insert_threads = 32,\n    parallel_distributed_insert_select = 1;\n")),(0,s.kt)("p",null,"Here is the response - showing the number of rows and the speed of processing. It is input at a rate of over 6M rows per second!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"0 rows in set. Elapsed: 3419.330 sec. Processed 20.69 billion rows, 1.67 TB (6.05 million rows/s., 488.52 MB/s.)\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Let's see how much storage disk is needed for the ",(0,s.kt)("inlineCode",{parentName:"li"},"sensors")," table:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    disk_name,\n    formatReadableSize(sum(data_compressed_bytes) AS size) AS compressed,\n    formatReadableSize(sum(data_uncompressed_bytes) AS usize) AS uncompressed,\n    round(usize / size, 2) AS compr_rate,\n    sum(rows) AS rows,\n    count() AS part_count\nFROM system.parts\nWHERE (active = 1) AND (table = 'sensors')\nGROUP BY\n    disk_name\nORDER BY size DESC;\n")),(0,s.kt)("p",null,"The 1.67T is compressed down to 1.30T, and there are 20.69 billion rows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500disk_name\u2500\u252c\u2500compressed\u2500\u252c\u2500uncompressed\u2500\u252c\u2500compr_rate\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500rows\u2500\u252c\u2500part_count\u2500\u2510\n\u2502 s3disk    \u2502 310.21 GiB \u2502 1.30 TiB     \u2502       4.29 \u2502 20693971809 \u2502        472 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Let's analyze the data now that it's in ClickHouse. Notice the quantity of data increases over time as more sensors are deployed:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    date,\n    count()\nFROM sensors\nGROUP BY date\nORDER BY date ASC;\n")),(0,s.kt)("p",null,"We can create a chart in the SQL Console to visualize the results:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Number of events per day",src:n(80552).Z,width:"2076",height:"956"})),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"This query counts the number of overly hot and humid days:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    toYYYYMMDD(timestamp) AS day\nSELECT day, count() FROM sensors\nWHERE temperature >= 40 AND temperature <= 50 AND humidity >= 90\nGROUP BY day\nORDER BY day asc;\n")),(0,s.kt)("p",null,"Here's a visualization of the result:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hot and humid days",src:n(26465).Z,width:"2078",height:"1048"})))}m.isMDXComponent=!0},80552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sensors_01-e7867e0c9396c216c6b295c3035a7dde.png"},26465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sensors_02-bef9203cb4da35d7c72553f2fbdbe55e.png"}}]);