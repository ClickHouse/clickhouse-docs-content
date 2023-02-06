"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[66116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(b,r(r({ref:t},d),{},{components:a})):n.createElement(b,r({ref:t},d))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_label:"Airbyte",sidebar_position:11,keywords:["clickhouse","airbyte","connect","integrate","etl","data integration"],slug:"/en/integrations/airbyte-and-clickhouse",description:"Stream data into ClickHouse using Airbyte data pipelines"},r="Connect Airbyte to ClickHouse",s={unversionedId:"en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse",id:"en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse",title:"Connect Airbyte to ClickHouse",description:"Stream data into ClickHouse using Airbyte data pipelines",source:"@site/docs/en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse.md",sourceDirName:"en/integrations/data-ingestion/etl-tools",slug:"/en/integrations/airbyte-and-clickhouse",permalink:"/docs/en/integrations/airbyte-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/airbyte-and-clickhouse.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Airbyte",sidebar_position:11,keywords:["clickhouse","airbyte","connect","integrate","etl","data integration"],slug:"/en/integrations/airbyte-and-clickhouse",description:"Stream data into ClickHouse using Airbyte data pipelines"},sidebar:"english",previous:{title:"Use an ETL Tool",permalink:"/docs/en/integrations/data-ingestion/etl-tools"},next:{title:"NiFi",permalink:"/docs/en/integrations/nifi-and-clickhouse"}},l={},c=[{value:"1. Download and run Airbyte",id:"1-download-and-run-airbyte",level:2},{value:"2. Add ClickHouse as a destination",id:"2-add-clickhouse-as-a-destination",level:2},{value:"3. Add a dataset as a source",id:"3-add-a-dataset-as-a-source",level:2},{value:"4. Create a connection and load the dataset into ClickHouse",id:"4-create-a-connection-and-load-the-dataset-into-clickhouse",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-airbyte-to-clickhouse"},"Connect Airbyte to ClickHouse"),(0,i.kt)("a",{href:"https://www.airbyte.com/",target:"_blank"},"Airbyte")," is an open-source data integration platform. It allows the creation of ",(0,i.kt)("a",{href:"https://airbyte.com/blog/why-the-future-of-etl-is-not-elt-but-el",target:"_blank"},"ELT")," data pipelines and is shipped with more than 140 out-of-the-box connectors. This step-by-step tutorial shows how to connect Airbyte to ClickHouse as a destination and load a sample dataset.",(0,i.kt)("h2",{id:"1-download-and-run-airbyte"},"1. Download and run Airbyte"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Airbyte runs on Docker and uses ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose"),". Make sure to download and install the latest versions of Docker.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy Airbyte by cloning the official Github repository and running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up")," in your favorite terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," command may be ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose")," (space, not ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),") on recent versions of Docker."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once you see the Airbyte banner in your terminal, you can connect to ",(0,i.kt)("a",{href:"http://localhost:8000",target:"_blank"},"localhost:8000")),(0,i.kt)("img",{src:a(68886).Z,class:"image",alt:"Airbyte banner",style:{width:"100%"}}),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Alternatively, you can signup and use ",(0,i.kt)("a",{href:"https://docs.airbyte.com/deploying-airbyte/on-cloud",target:"_blank"},"Airbyte Cloud"))))),(0,i.kt)("h2",{id:"2-add-clickhouse-as-a-destination"},"2. Add ClickHouse as a destination"),(0,i.kt)("p",null,"In this section, we will display how to add a ClickHouse instance as a destination."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start your ClickHouse server (Airbyte is compatible with ClickHouse version ",(0,i.kt)("inlineCode",{parentName:"p"},"21.8.10.19")," or above) or login to your ClickHouse cloud account:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-server start\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Within Airbyte, select the "Destinations" page and add a new destination:'),(0,i.kt)("img",{src:a(97629).Z,class:"image",alt:"Add a destination in Airbyte",style:{width:"100%"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select ClickHouse from the "Destination type" drop-down list, and Fill out the "Set up the destination" form by providing your ClickHouse hostname and ports, database name, username and password and select if it\'s an SSL connection (equivalent to the ',(0,i.kt)("inlineCode",{parentName:"p"},"--secure")," flag in the  ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"):"),(0,i.kt)("img",{src:a(53965).Z,class:"image",alt:"ClickHouse destination creation in Airbyte"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Congratulations! you have now added ClickHouse as a destination in Airbyte."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In order to use ClickHouse as a destination, the user you'll use need to have the permissions to create databases, tables and insert rows. We recommend creating a dedicated user for Airbyte (eg. ",(0,i.kt)("inlineCode",{parentName:"p"},"my_airbyte_user"),") with the following permissions:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'my_airbyte_user'@'%' IDENTIFIED BY 'your_password_here';\n\nGRANT CREATE ON * TO my_airbyte_user;\n"))),(0,i.kt)("h2",{id:"3-add-a-dataset-as-a-source"},"3. Add a dataset as a source"),(0,i.kt)("p",null,"The example dataset we will use is the ",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi/",target:"_blank"},"New York City Taxi Data")," (on ",(0,i.kt)("a",{href:"https://github.com/toddwschneider/nyc-taxi-data",target:"_blank"},"Github"),"). For this tutorial, we will use a subset of this dataset which corresponds to the month of Jan 2022."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Within Airbyte, select the "Sources" page and add a new source of type file.'),(0,i.kt)("img",{src:a(786).Z,class:"image",alt:"Add a source in Airbyte",style:{width:"100%"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill out the "Set up the source" form by naming the source and providing the URL of the NYC Taxi Jan 2022 file (see below). Make sure to pick ',(0,i.kt)("inlineCode",{parentName:"p"},"parquet")," as file format, ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS Public Web")," as Storage Provider and ",(0,i.kt)("inlineCode",{parentName:"p"},"nyc_taxi_2022")," as Dataset Name."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://d37ci6vzurychx.cloudfront.net/trip-data/yellow_tripdata_2022-01.parquet\n")),(0,i.kt)("img",{src:a(4374).Z,class:"image",alt:"ClickHouse source creation in Airbyte"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Congratulations! You have now added a source file in Airbyte."))),(0,i.kt)("h2",{id:"4-create-a-connection-and-load-the-dataset-into-clickhouse"},"4. Create a connection and load the dataset into ClickHouse"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Within Airbyte, select the "Connections" page and add a new connection'),(0,i.kt)("img",{src:a(30209).Z,class:"image",alt:"Add a connection in Airbyte",style:{width:"100%"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select "Use existing source" and select the New York City Taxi Data, the select "Use existing destination" and select you ClickHouse instance.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Fill out the "Set up the connection" form by choosing a Replication Frequency (we will use ',(0,i.kt)("inlineCode",{parentName:"p"},"manual")," for this tutorial) and select ",(0,i.kt)("inlineCode",{parentName:"p"},"nyc_taxi_2022")," as the stream you want to sync. Make sure you pick ",(0,i.kt)("inlineCode",{parentName:"p"},"Normalized Tabular Data")," as a Normalization."),(0,i.kt)("img",{src:a(49192).Z,class:"image",alt:"Connection creation in Airbyte"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Now that the connection is created, click on "Sync now" to trigger the data loading (since we picked ',(0,i.kt)("inlineCode",{parentName:"p"},"Manual")," as a Replication Frequency)"),(0,i.kt)("img",{src:a(18961).Z,class:"image",alt:"Sync now in Airbyte",style:{width:"100%"}}))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Your data will start loading, you can expand the view to see Airbyte logs and progress. Once the operation finishes, you'll see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed successfully")," message in the logs:"),(0,i.kt)("img",{src:a(39882).Z,class:"image",alt:"Completed succesfully",style:{width:"100%"}})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect to your ClickHouse instance using your preferred SQL Client and check the resulting table:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM nyc_taxi_2022\nLIMIT 10\n")),(0,i.kt)("p",{parentName:"li"},"The response should look like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 4f79c106-fe49-4145-8eba-15e1cb36d325\n\n\u250c\u2500extra\u2500\u252c\u2500mta_tax\u2500\u252c\u2500VendorID\u2500\u252c\u2500RatecodeID\u2500\u252c\u2500tip_amount\u2500\u252c\u2500airport_fee\u2500\u252c\u2500fare_amount\u2500\u252c\u2500DOLocationID\u2500\u252c\u2500PULocationID\u2500\u252c\u2500payment_type\u2500\u252c\u2500tolls_amount\u2500\u252c\u2500total_amount\u2500\u252c\u2500trip_distance\u2500\u252c\u2500passenger_count\u2500\u252c\u2500store_and_fwd_flag\u2500\u252c\u2500congestion_surcharge\u2500\u252c\u2500tpep_pickup_datetime\u2500\u252c\u2500improvement_surcharge\u2500\u252c\u2500tpep_dropoff_datetime\u2500\u252c\u2500_airbyte_ab_id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500_airbyte_emitted_at\u2500\u252c\u2500_airbyte_normalized_at\u2500\u252c\u2500_airbyte_nyc_taxi_2022_hashid\u2500\u2500\u2500\u2500\u2510\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502       2.03 \u2502           0 \u2502          17 \u2502           41 \u2502          162 \u2502            1 \u2502            0 \u2502        22.33 \u2502          4.25 \u2502               3 \u2502 N                  \u2502                  2.5 \u2502 2022-01-24T16:02:27  \u2502                   0.3 \u2502 2022-01-24T16:22:23   \u2502 000022a5-3f14-4217-9938-5657f9041c8a \u2502 2022-07-19 04:35:31.000 \u2502    2022-07-19 04:39:20 \u2502 91F83E2A3AF3CA79E27BD5019FA7EC94 \u2502\n\u2502     3 \u2502     0.5 \u2502        1 \u2502          1 \u2502       1.75 \u2502           0 \u2502           5 \u2502          186 \u2502          246 \u2502            1 \u2502            0 \u2502        10.55 \u2502           0.9 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-22T23:23:05  \u2502                   0.3 \u2502 2022-01-22T23:27:03   \u2502 000036b6-1c6a-493b-b585-4713e433b9cd \u2502 2022-07-19 04:34:53.000 \u2502    2022-07-19 04:39:20 \u2502 5522F328014A7234E23F9FC5FA78FA66 \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502       7.62 \u2502        1.25 \u2502          27 \u2502          238 \u2502           70 \u2502            1 \u2502         6.55 \u2502        45.72 \u2502          9.16 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-22T19:20:37  \u2502                   0.3 \u2502 2022-01-22T19:40:51   \u2502 00003c6d-78ad-4288-a79d-00a62d3ca3c5 \u2502 2022-07-19 04:34:46.000 \u2502    2022-07-19 04:39:20 \u2502 449743975782E613109CEE448AFA0AB3 \u2502\n\u2502   0.5 \u2502     0.5 \u2502        2 \u2502          1 \u2502          0 \u2502           0 \u2502         9.5 \u2502          234 \u2502          249 \u2502            1 \u2502            0 \u2502         13.3 \u2502           1.5 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-22T20:13:39  \u2502                   0.3 \u2502 2022-01-22T20:26:40   \u2502 000042f6-6f61-498b-85b9-989eaf8b264b \u2502 2022-07-19 04:34:47.000 \u2502    2022-07-19 04:39:20 \u2502 01771AF57922D1279096E5FFE1BD104A \u2502\n\u2502     0 \u2502       0 \u2502        2 \u2502          5 \u2502          5 \u2502           0 \u2502          60 \u2502          265 \u2502           90 \u2502            1 \u2502            0 \u2502         65.3 \u2502          5.59 \u2502               1 \u2502 N                  \u2502                    0 \u2502 2022-01-25T09:28:36  \u2502                   0.3 \u2502 2022-01-25T09:47:16   \u2502 00004c25-53a4-4cd4-b012-a34dbc128aeb \u2502 2022-07-19 04:35:46.000 \u2502    2022-07-19 04:39:20 \u2502 CDA4831B683D10A7770EB492CC772029 \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502          0 \u2502           0 \u2502        11.5 \u2502           68 \u2502          170 \u2502            2 \u2502            0 \u2502         14.8 \u2502           2.2 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-25T13:19:26  \u2502                   0.3 \u2502 2022-01-25T13:36:19   \u2502 00005c75-c3c8-440c-a8e8-b1bd2b7b7425 \u2502 2022-07-19 04:35:52.000 \u2502    2022-07-19 04:39:20 \u2502 24D75D8AADD488840D78EA658EBDFB41 \u2502\n\u2502   2.5 \u2502     0.5 \u2502        1 \u2502          1 \u2502       0.88 \u2502           0 \u2502         5.5 \u2502           79 \u2502          137 \u2502            1 \u2502            0 \u2502         9.68 \u2502           1.1 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-22T15:45:09  \u2502                   0.3 \u2502 2022-01-22T15:50:16   \u2502 0000acc3-e64f-4b58-8e15-dc47ff1685f3 \u2502 2022-07-19 04:34:37.000 \u2502    2022-07-19 04:39:20 \u2502 2BB5B8E849A438E08F7FCF789E7D7E65 \u2502\n\u2502  1.75 \u2502     0.5 \u2502        1 \u2502          1 \u2502        7.5 \u2502        1.25 \u2502        27.5 \u2502           17 \u2502          138 \u2502            1 \u2502            0 \u2502        37.55 \u2502             9 \u2502               1 \u2502 N                  \u2502                    0 \u2502 2022-01-30T21:58:19  \u2502                   0.3 \u2502 2022-01-30T22:19:30   \u2502 0000b339-b44b-40b0-99f8-ebbf2092cc5b \u2502 2022-07-19 04:38:10.000 \u2502    2022-07-19 04:39:20 \u2502 DCCE79199EF9217CD769EFD5271302FE \u2502\n\u2502   0.5 \u2502     0.5 \u2502        2 \u2502          1 \u2502          0 \u2502           0 \u2502          13 \u2502           79 \u2502          140 \u2502            2 \u2502            0 \u2502         16.8 \u2502          3.19 \u2502               1 \u2502 N                  \u2502                  2.5 \u2502 2022-01-26T20:43:14  \u2502                   0.3 \u2502 2022-01-26T20:58:08   \u2502 0000caa8-d46a-4682-bd25-38b2b0b9300b \u2502 2022-07-19 04:36:36.000 \u2502    2022-07-19 04:39:20 \u2502 F502BE51809AF36582561B2D037B4DDC \u2502\n\u2502     0 \u2502     0.5 \u2502        2 \u2502          1 \u2502       1.76 \u2502           0 \u2502         5.5 \u2502          141 \u2502          237 \u2502            1 \u2502            0 \u2502        10.56 \u2502          0.72 \u2502               2 \u2502 N                  \u2502                  2.5 \u2502 2022-01-27T15:19:54  \u2502                   0.3 \u2502 2022-01-27T15:26:23   \u2502 0000cd63-c71f-4eb9-9c27-09f402fddc76 \u2502 2022-07-19 04:36:55.000 \u2502    2022-07-19 04:39:20 \u2502 8612CDB63E13D70C1D8B34351A7CA00D \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*)\nFROM nyc_taxi_2022\n")),(0,i.kt)("p",{parentName:"li"},"The response is:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: a9172d39-50f7-421e-8330-296de0baa67e\n\n\u250c\u2500count()\u2500\u2510\n\u2502 2392428 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice that Airbyte automatically inferred the data types and added 4 columns to the destination table. These columns are used by Airbyte to manage the replication logic and log the operations. More details are available in the  ",(0,i.kt)("a",{href:"https://docs.airbyte.com/integrations/destinations/clickhouse#output-schema",target:"_blank"},"Airbyte official documentation"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"    `_airbyte_ab_id` String,\n    `_airbyte_emitted_at` DateTime64(3, 'GMT'),\n    `_airbyte_normalized_at` DateTime,\n    `_airbyte_nyc_taxi_072021_hashid` String\n")),(0,i.kt)("p",{parentName:"li"},"Now that the dataset is loaded on your ClickHouse instance, you can create an new table and use more suitable ClickHouse data types (",(0,i.kt)("a",{href:"https://clickhouse.com/docs/en/getting-started/example-datasets/nyc-taxi/",target:"_blank"},"more details"),")."))),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Congratulations - you have successfully loaded the NYC taxi data into ClickHouse using Airbyte!")))}u.isMDXComponent=!0},68886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_01-8a4808b16747a2abc55f1601ae681d9a.png"},97629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_02-fb24c06943e352bf5aa311b4fe08d641.png"},53965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_03-3abe39bebad6fbe8cf5fc16a5cad7217.png"},786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_04-83d5c46b9528bf6a07d19f8fa1d7e8d6.png"},4374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_05-096f10ca4b67d6721b7057a4dec62731.png"},30209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_06-298457848e774ea3c853ecf28432665d.png"},49192:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_07-d75af218af5ec126ae2b1d5914fd494f.png"},18961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_08-a94e2be183fef4f7c0bf5b35e403d775.png"},39882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airbyte_09-3d2554457901c0977a1310dc07f928ac.png"}}]);