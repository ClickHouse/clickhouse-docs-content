"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[4761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},59044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/en/getting-started/example-datasets/nyc-taxi",sidebar_label:"New York Taxi Data",sidebar_position:2,description:"Data for billions of taxi and for-hire vehicle (Uber, Lyft, etc.) trips originating in New York City since 2009"},l="New York Taxi Data",i={unversionedId:"en/getting-started/example-datasets/nyc-taxi",id:"en/getting-started/example-datasets/nyc-taxi",title:"New York Taxi Data",description:"Data for billions of taxi and for-hire vehicle (Uber, Lyft, etc.) trips originating in New York City since 2009",source:"@site/docs/en/getting-started/example-datasets/nyc-taxi.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/nyc-taxi",permalink:"/docs/en/getting-started/example-datasets/nyc-taxi",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/nyc-taxi.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/getting-started/example-datasets/nyc-taxi",sidebar_label:"New York Taxi Data",sidebar_position:2,description:"Data for billions of taxi and for-hire vehicle (Uber, Lyft, etc.) trips originating in New York City since 2009"},sidebar:"english",previous:{title:"UK Property Price Paid",permalink:"/docs/en/getting-started/example-datasets/uk-price-paid"},next:{title:"Cell Towers",permalink:"/docs/en/getting-started/example-datasets/cell-towers"}},s={},d=[{value:"Retrieve the Data from S3",id:"retrieve-the-data-from-s3",level:2},{value:"Download of Prepared Partitions",id:"download-of-prepared-partitions",level:2},{value:"Results on Single Server",id:"results-on-single-server",level:2},{value:"Summary",id:"summary",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"new-york-taxi-data"},"New York Taxi Data"),(0,r.kt)("p",null,"The New York taxi data consists of 3+ billion taxi and for-hire vehicle (Uber, Lyft, etc.) trips originating in New York City since 2009. The dataset can be obtained in a couple of ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"insert the data directly into ClickHouse Cloud from S3"),(0,r.kt)("li",{parentName:"ul"},"download prepared partitions")),(0,r.kt)("h2",{id:"retrieve-the-data-from-s3"},"Retrieve the Data from S3"),(0,r.kt)("p",null,"Let's grab a small subset of the data for getting familiar with it. The data is in TSV files in AWS S3, which is easily streamed into\nClickHouse Cloud using the ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," table function. Start by creating a table for the taxi rides:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips (\n    trip_id             UInt32,\n    pickup_datetime     DateTime,\n    dropoff_datetime    DateTime,\n    pickup_longitude    Nullable(Float64),\n    pickup_latitude     Nullable(Float64),\n    dropoff_longitude   Nullable(Float64),\n    dropoff_latitude    Nullable(Float64),\n    passenger_count     UInt8,\n    trip_distance       Float32,\n    fare_amount         Float32,\n    extra               Float32,\n    tip_amount          Float32,\n    tolls_amount        Float32,\n    total_amount        Float32,\n    payment_type        Enum('CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4, 'UNK' = 5),\n    pickup_ntaname      LowCardinality(String),\n    dropoff_ntaname     LowCardinality(String)\n)\nENGINE = MergeTree\nPRIMARY KEY (pickup_datetime, dropoff_datetime)\n")),(0,r.kt)("p",null,"The following command streams three files from an S3 bucket into the ",(0,r.kt)("inlineCode",{parentName:"p"},"trips")," table (the ",(0,r.kt)("inlineCode",{parentName:"p"},"{0..2}")," syntax is a wildcard for the values 0, 1, and 2):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips\nSELECT\n    trip_id,\n    pickup_datetime,\n    dropoff_datetime,\n    pickup_longitude,\n    pickup_latitude,\n    dropoff_longitude,\n    dropoff_latitude,\n    passenger_count,\n    trip_distance,\n    fare_amount,\n    extra,\n    tip_amount,\n    tolls_amount,\n    total_amount,\n    payment_type,\n    pickup_ntaname,\n    dropoff_ntaname\nFROM s3(\n    'https://datasets-documentation.s3.eu-west-3.amazonaws.com/nyc-taxi/trips_{0..2}.gz',\n    'TabSeparatedWithNames'\n)\n")),(0,r.kt)("p",null,"Let's see how many rows were inserted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count()\nFROM trips\n")),(0,r.kt)("p",null,"Each TSV file has about 1M rows, and the three files have 3,000,317 rows. Let's look at a few rows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM trips\nLIMIT 10\n")),(0,r.kt)("p",null,"Notice there are columns for the pickup and dropoff dates, geo coordinates, fare details, New York neighborhoods, and more:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500trip_id\u2500\u252c\u2500\u2500\u2500\u2500\u2500pickup_datetime\u2500\u252c\u2500\u2500\u2500\u2500dropoff_datetime\u2500\u252c\u2500\u2500\u2500pickup_longitude\u2500\u252c\u2500\u2500\u2500\u2500pickup_latitude\u2500\u252c\u2500\u2500dropoff_longitude\u2500\u252c\u2500\u2500\u2500dropoff_latitude\u2500\u252c\u2500passenger_count\u2500\u252c\u2500trip_distance\u2500\u252c\u2500fare_amount\u2500\u252c\u2500extra\u2500\u252c\u2500tip_amount\u2500\u252c\u2500tolls_amount\u2500\u252c\u2500total_amount\u2500\u252c\u2500payment_type\u2500\u252c\u2500pickup_ntaname\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500dropoff_ntaname\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1200864931 \u2502 2015-07-01 00:00:13 \u2502 2015-07-01 00:14:41 \u2502 -73.99046325683594 \u2502 40.746116638183594 \u2502 -73.97918701171875 \u2502  40.78467559814453 \u2502               5 \u2502          3.54 \u2502        13.5 \u2502   0.5 \u2502          1 \u2502            0 \u2502         15.8 \u2502 CSH          \u2502 Midtown-Midtown South                      \u2502 Upper West Side                            \u2502\n\u2502 1200018648 \u2502 2015-07-01 00:00:16 \u2502 2015-07-01 00:02:57 \u2502 -73.78358459472656 \u2502 40.648677825927734 \u2502 -73.80242919921875 \u2502  40.64767837524414 \u2502               1 \u2502          1.45 \u2502           6 \u2502   0.5 \u2502          0 \u2502            0 \u2502          7.3 \u2502 CRE          \u2502 Airport                                    \u2502 Airport                                    \u2502\n\u2502 1201452450 \u2502 2015-07-01 00:00:20 \u2502 2015-07-01 00:11:07 \u2502 -73.98579406738281 \u2502  40.72777557373047 \u2502 -74.00482177734375 \u2502  40.73748779296875 \u2502               5 \u2502          1.56 \u2502         8.5 \u2502   0.5 \u2502       1.96 \u2502            0 \u2502        11.76 \u2502 CSH          \u2502 East Village                               \u2502 West Village                               \u2502\n\u2502 1202368372 \u2502 2015-07-01 00:00:40 \u2502 2015-07-01 00:05:46 \u2502 -74.00206756591797 \u2502  40.73833084106445 \u2502 -74.00658416748047 \u2502  40.74875259399414 \u2502               2 \u2502             1 \u2502           6 \u2502   0.5 \u2502          0 \u2502            0 \u2502          7.3 \u2502 CRE          \u2502 West Village                               \u2502 Hudson Yards-Chelsea-Flatiron-Union Square \u2502\n\u2502 1200831168 \u2502 2015-07-01 00:01:06 \u2502 2015-07-01 00:09:23 \u2502 -73.98748016357422 \u2502  40.74344253540039 \u2502 -74.00575256347656 \u2502 40.716793060302734 \u2502               1 \u2502           2.3 \u2502           9 \u2502   0.5 \u2502          2 \u2502            0 \u2502         12.3 \u2502 CSH          \u2502 Hudson Yards-Chelsea-Flatiron-Union Square \u2502 SoHo-TriBeCa-Civic Center-Little Italy     \u2502\n\u2502 1201362116 \u2502 2015-07-01 00:01:07 \u2502 2015-07-01 00:03:31 \u2502  -73.9926986694336 \u2502  40.75826644897461 \u2502 -73.98628997802734 \u2502  40.76075744628906 \u2502               1 \u2502           0.6 \u2502           4 \u2502   0.5 \u2502          0 \u2502            0 \u2502          5.3 \u2502 CRE          \u2502 Clinton                                    \u2502 Midtown-Midtown South                      \u2502\n\u2502 1200639419 \u2502 2015-07-01 00:01:13 \u2502 2015-07-01 00:03:56 \u2502 -74.00382995605469 \u2502 40.741981506347656 \u2502 -73.99711608886719 \u2502 40.742271423339844 \u2502               1 \u2502          0.49 \u2502           4 \u2502   0.5 \u2502          0 \u2502            0 \u2502          5.3 \u2502 CRE          \u2502 Hudson Yards-Chelsea-Flatiron-Union Square \u2502 Hudson Yards-Chelsea-Flatiron-Union Square \u2502\n\u2502 1201181622 \u2502 2015-07-01 00:01:17 \u2502 2015-07-01 00:05:12 \u2502  -73.9512710571289 \u2502  40.78261947631836 \u2502 -73.95230865478516 \u2502  40.77476119995117 \u2502               4 \u2502          0.97 \u2502           5 \u2502   0.5 \u2502          1 \u2502            0 \u2502          7.3 \u2502 CSH          \u2502 Upper East Side-Carnegie Hill              \u2502 Yorkville                                  \u2502\n\u2502 1200978273 \u2502 2015-07-01 00:01:28 \u2502 2015-07-01 00:09:46 \u2502 -74.00822448730469 \u2502  40.72113037109375 \u2502 -74.00422668457031 \u2502  40.70782470703125 \u2502               1 \u2502          1.71 \u2502         8.5 \u2502   0.5 \u2502       1.96 \u2502            0 \u2502        11.76 \u2502 CSH          \u2502 SoHo-TriBeCa-Civic Center-Little Italy     \u2502 Battery Park City-Lower Manhattan          \u2502\n\u2502 1203283366 \u2502 2015-07-01 00:01:47 \u2502 2015-07-01 00:24:26 \u2502 -73.98199462890625 \u2502  40.77289962768555 \u2502 -73.91968536376953 \u2502 40.766082763671875 \u2502               3 \u2502          5.26 \u2502        19.5 \u2502   0.5 \u2502        5.2 \u2502            0 \u2502           26 \u2502 CSH          \u2502 Lincoln Square                             \u2502 Astoria                                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Let's run a few queries. This query shows us the top 10 neighborhoods that have the most frequent pickups:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   pickup_ntaname,\n   count(*) AS count\nFROM trips\nGROUP BY pickup_ntaname\nORDER BY count DESC\nLIMIT 10\n")),(0,r.kt)("p",null,"The result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500pickup_ntaname\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500count\u2500\u2510\n\u2502 Midtown-Midtown South                      \u2502 526864 \u2502\n\u2502 Hudson Yards-Chelsea-Flatiron-Union Square \u2502 288797 \u2502\n\u2502 West Village                               \u2502 210436 \u2502\n\u2502 Turtle Bay-East Midtown                    \u2502 197111 \u2502\n\u2502 Upper East Side-Carnegie Hill              \u2502 184327 \u2502\n\u2502 Airport                                    \u2502 151343 \u2502\n\u2502 SoHo-TriBeCa-Civic Center-Little Italy     \u2502 144967 \u2502\n\u2502 Murray Hill-Kips Bay                       \u2502 138599 \u2502\n\u2502 Upper West Side                            \u2502 135469 \u2502\n\u2502 Clinton                                    \u2502 130002 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"This query shows the average fare based on the number of passengers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   passenger_count,\n   avg(total_amount)\nFROM trips\nGROUP BY passenger_count\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500passenger_count\u2500\u252c\u2500\u2500avg(total_amount)\u2500\u2510\n\u2502               0 \u2502 25.226335263065018 \u2502\n\u2502               1 \u2502 15.961279340656672 \u2502\n\u2502               2 \u2502 17.146174183960667 \u2502\n\u2502               3 \u2502  17.65380033178517 \u2502\n\u2502               4 \u2502 17.248804201047456 \u2502\n\u2502               5 \u2502 16.353501285179135 \u2502\n\u2502               6 \u2502 15.995094439202836 \u2502\n\u2502               7 \u2502 62.077143805367605 \u2502\n\u2502               8 \u2502 26.120000791549682 \u2502\n\u2502               9 \u2502 10.300000190734863 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Here's a correlation between the number of passengers and the distance of the trip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   passenger_count,\n   toYear(pickup_datetime) AS year,\n   round(trip_distance) AS distance,\n   count(*)\nFROM trips\nGROUP BY passenger_count, year, distance\nORDER BY year, count(*) DESC\n")),(0,r.kt)("p",null,"The first part of the result is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500passenger_count\u2500\u252c\u2500year\u2500\u252c\u2500distance\u2500\u252c\u2500count()\u2500\u2510\n\u2502               1 \u2502 2015 \u2502        1 \u2502  748644 \u2502\n\u2502               1 \u2502 2015 \u2502        2 \u2502  521602 \u2502\n\u2502               1 \u2502 2015 \u2502        3 \u2502  225077 \u2502\n\u2502               2 \u2502 2015 \u2502        1 \u2502  144990 \u2502\n\u2502               1 \u2502 2015 \u2502        4 \u2502  134782 \u2502\n\u2502               1 \u2502 2015 \u2502        0 \u2502  127284 \u2502\n\u2502               2 \u2502 2015 \u2502        2 \u2502  106411 \u2502\n\u2502               1 \u2502 2015 \u2502        5 \u2502   72725 \u2502\n\u2502               5 \u2502 2015 \u2502        1 \u2502   59343 \u2502\n\u2502               1 \u2502 2015 \u2502        6 \u2502   53447 \u2502\n\u2502               2 \u2502 2015 \u2502        3 \u2502   48019 \u2502\n\u2502               3 \u2502 2015 \u2502        1 \u2502   44865 \u2502\n\u2502               6 \u2502 2015 \u2502        1 \u2502   39409 \u2502\n")),(0,r.kt)("h2",{id:"download-of-prepared-partitions"},"Download of Prepared Partitions"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/toddwschneider/nyc-taxi-data"},"https://github.com/toddwschneider/nyc-taxi-data")," and ",(0,r.kt)("a",{parentName:"p",href:"http://tech.marksblogg.com/billion-nyc-taxi-rides-redshift.html"},"http://tech.marksblogg.com/billion-nyc-taxi-rides-redshift.html")," for the description of a dataset and instructions for downloading."),(0,r.kt)("p",null,"Downloading will result in about 227 GB of uncompressed data in CSV files. The download takes about an hour over a 1 Gbit connection (parallel downloading from s3.amazonaws.com recovers at least half of a 1 Gbit channel).\nSome of the files might not download fully. Check the file sizes and re-download any that seem doubtful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -O https://datasets.clickhouse.com/trips_mergetree/partitions/trips_mergetree.tar\n$ tar xvf trips_mergetree.tar -C /var/lib/clickhouse # path to ClickHouse data directory\n$ # check permissions of unpacked data, fix if required\n$ sudo service clickhouse-server restart\n$ clickhouse-client --query "select count(*) from datasets.trips_mergetree"\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you will run the queries described below, you have to use the full table name, ",(0,r.kt)("inlineCode",{parentName:"p"},"datasets.trips_mergetree"),".")),(0,r.kt)("h2",{id:"results-on-single-server"},"Results on Single Server"),(0,r.kt)("p",null,"Q1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cab_type, count(*) FROM trips_mergetree GROUP BY cab_type\n")),(0,r.kt)("p",null,"0.490 seconds."),(0,r.kt)("p",null,"Q2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, avg(total_amount) FROM trips_mergetree GROUP BY passenger_count\n")),(0,r.kt)("p",null,"1.224 seconds."),(0,r.kt)("p",null,"Q3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, toYear(pickup_date) AS year, count(*) FROM trips_mergetree GROUP BY passenger_count, year\n")),(0,r.kt)("p",null,"2.104 seconds."),(0,r.kt)("p",null,"Q4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT passenger_count, toYear(pickup_date) AS year, round(trip_distance) AS distance, count(*)\nFROM trips_mergetree\nGROUP BY passenger_count, year, distance\nORDER BY year, count(*) DESC\n")),(0,r.kt)("p",null,"3.593 seconds."),(0,r.kt)("p",null,"The following server was used:"),(0,r.kt)("p",null,"Two Intel(R) Xeon(R) CPU E5-2650 v2 @ 2.60GHz, 16 physical cores total, 128 GiB RAM, 8x6 TB HD on hardware RAID-5"),(0,r.kt)("p",null,"Execution time is the best of three runs. But starting from the second run, queries read data from the file system cache. No further caching occurs: the data is read out and processed in each run."),(0,r.kt)("p",null,"Creating a table on three servers:"),(0,r.kt)("p",null,"On each server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE default.trips_mergetree_third ( trip_id UInt32,  vendor_id Enum8('1' = 1, '2' = 2, 'CMT' = 3, 'VTS' = 4, 'DDS' = 5, 'B02512' = 10, 'B02598' = 11, 'B02617' = 12, 'B02682' = 13, 'B02764' = 14),  pickup_date Date,  pickup_datetime DateTime,  dropoff_date Date,  dropoff_datetime DateTime,  store_and_fwd_flag UInt8,  rate_code_id UInt8,  pickup_longitude Float64,  pickup_latitude Float64,  dropoff_longitude Float64,  dropoff_latitude Float64,  passenger_count UInt8,  trip_distance Float64,  fare_amount Float32,  extra Float32,  mta_tax Float32,  tip_amount Float32,  tolls_amount Float32,  ehail_fee Float32,  improvement_surcharge Float32,  total_amount Float32,  payment_type_ Enum8('UNK' = 0, 'CSH' = 1, 'CRE' = 2, 'NOC' = 3, 'DIS' = 4),  trip_type UInt8,  pickup FixedString(25),  dropoff FixedString(25),  cab_type Enum8('yellow' = 1, 'green' = 2, 'uber' = 3),  pickup_nyct2010_gid UInt8,  pickup_ctlabel Float32,  pickup_borocode UInt8,  pickup_boroname Enum8('' = 0, 'Manhattan' = 1, 'Bronx' = 2, 'Brooklyn' = 3, 'Queens' = 4, 'Staten Island' = 5),  pickup_ct2010 FixedString(6),  pickup_boroct2010 FixedString(7),  pickup_cdeligibil Enum8(' ' = 0, 'E' = 1, 'I' = 2),  pickup_ntacode FixedString(4),  pickup_ntaname Enum16('' = 0, 'Airport' = 1, 'Allerton-Pelham Gardens' = 2, 'Annadale-Huguenot-Prince\\'s Bay-Eltingville' = 3, 'Arden Heights' = 4, 'Astoria' = 5, 'Auburndale' = 6, 'Baisley Park' = 7, 'Bath Beach' = 8, 'Battery Park City-Lower Manhattan' = 9, 'Bay Ridge' = 10, 'Bayside-Bayside Hills' = 11, 'Bedford' = 12, 'Bedford Park-Fordham North' = 13, 'Bellerose' = 14, 'Belmont' = 15, 'Bensonhurst East' = 16, 'Bensonhurst West' = 17, 'Borough Park' = 18, 'Breezy Point-Belle Harbor-Rockaway Park-Broad Channel' = 19, 'Briarwood-Jamaica Hills' = 20, 'Brighton Beach' = 21, 'Bronxdale' = 22, 'Brooklyn Heights-Cobble Hill' = 23, 'Brownsville' = 24, 'Bushwick North' = 25, 'Bushwick South' = 26, 'Cambria Heights' = 27, 'Canarsie' = 28, 'Carroll Gardens-Columbia Street-Red Hook' = 29, 'Central Harlem North-Polo Grounds' = 30, 'Central Harlem South' = 31, 'Charleston-Richmond Valley-Tottenville' = 32, 'Chinatown' = 33, 'Claremont-Bathgate' = 34, 'Clinton' = 35, 'Clinton Hill' = 36, 'Co-op City' = 37, 'College Point' = 38, 'Corona' = 39, 'Crotona Park East' = 40, 'Crown Heights North' = 41, 'Crown Heights South' = 42, 'Cypress Hills-City Line' = 43, 'DUMBO-Vinegar Hill-Downtown Brooklyn-Boerum Hill' = 44, 'Douglas Manor-Douglaston-Little Neck' = 45, 'Dyker Heights' = 46, 'East Concourse-Concourse Village' = 47, 'East Elmhurst' = 48, 'East Flatbush-Farragut' = 49, 'East Flushing' = 50, 'East Harlem North' = 51, 'East Harlem South' = 52, 'East New York' = 53, 'East New York (Pennsylvania Ave)' = 54, 'East Tremont' = 55, 'East Village' = 56, 'East Williamsburg' = 57, 'Eastchester-Edenwald-Baychester' = 58, 'Elmhurst' = 59, 'Elmhurst-Maspeth' = 60, 'Erasmus' = 61, 'Far Rockaway-Bayswater' = 62, 'Flatbush' = 63, 'Flatlands' = 64, 'Flushing' = 65, 'Fordham South' = 66, 'Forest Hills' = 67, 'Fort Greene' = 68, 'Fresh Meadows-Utopia' = 69, 'Ft. Totten-Bay Terrace-Clearview' = 70, 'Georgetown-Marine Park-Bergen Beach-Mill Basin' = 71, 'Glen Oaks-Floral Park-New Hyde Park' = 72, 'Glendale' = 73, 'Gramercy' = 74, 'Grasmere-Arrochar-Ft. Wadsworth' = 75, 'Gravesend' = 76, 'Great Kills' = 77, 'Greenpoint' = 78, 'Grymes Hill-Clifton-Fox Hills' = 79, 'Hamilton Heights' = 80, 'Hammels-Arverne-Edgemere' = 81, 'Highbridge' = 82, 'Hollis' = 83, 'Homecrest' = 84, 'Hudson Yards-Chelsea-Flatiron-Union Square' = 85, 'Hunters Point-Sunnyside-West Maspeth' = 86, 'Hunts Point' = 87, 'Jackson Heights' = 88, 'Jamaica' = 89, 'Jamaica Estates-Holliswood' = 90, 'Kensington-Ocean Parkway' = 91, 'Kew Gardens' = 92, 'Kew Gardens Hills' = 93, 'Kingsbridge Heights' = 94, 'Laurelton' = 95, 'Lenox Hill-Roosevelt Island' = 96, 'Lincoln Square' = 97, 'Lindenwood-Howard Beach' = 98, 'Longwood' = 99, 'Lower East Side' = 100, 'Madison' = 101, 'Manhattanville' = 102, 'Marble Hill-Inwood' = 103, 'Mariner\\'s Harbor-Arlington-Port Ivory-Graniteville' = 104, 'Maspeth' = 105, 'Melrose South-Mott Haven North' = 106, 'Middle Village' = 107, 'Midtown-Midtown South' = 108, 'Midwood' = 109, 'Morningside Heights' = 110, 'Morrisania-Melrose' = 111, 'Mott Haven-Port Morris' = 112, 'Mount Hope' = 113, 'Murray Hill' = 114, 'Murray Hill-Kips Bay' = 115, 'New Brighton-Silver Lake' = 116, 'New Dorp-Midland Beach' = 117, 'New Springville-Bloomfield-Travis' = 118, 'North Corona' = 119, 'North Riverdale-Fieldston-Riverdale' = 120, 'North Side-South Side' = 121, 'Norwood' = 122, 'Oakland Gardens' = 123, 'Oakwood-Oakwood Beach' = 124, 'Ocean Hill' = 125, 'Ocean Parkway South' = 126, 'Old Astoria' = 127, 'Old Town-Dongan Hills-South Beach' = 128, 'Ozone Park' = 129, 'Park Slope-Gowanus' = 130, 'Parkchester' = 131, 'Pelham Bay-Country Club-City Island' = 132, 'Pelham Parkway' = 133, 'Pomonok-Flushing Heights-Hillcrest' = 134, 'Port Richmond' = 135, 'Prospect Heights' = 136, 'Prospect Lefferts Gardens-Wingate' = 137, 'Queens Village' = 138, 'Queensboro Hill' = 139, 'Queensbridge-Ravenswood-Long Island City' = 140, 'Rego Park' = 141, 'Richmond Hill' = 142, 'Ridgewood' = 143, 'Rikers Island' = 144, 'Rosedale' = 145, 'Rossville-Woodrow' = 146, 'Rugby-Remsen Village' = 147, 'Schuylerville-Throgs Neck-Edgewater Park' = 148, 'Seagate-Coney Island' = 149, 'Sheepshead Bay-Gerritsen Beach-Manhattan Beach' = 150, 'SoHo-TriBeCa-Civic Center-Little Italy' = 151, 'Soundview-Bruckner' = 152, 'Soundview-Castle Hill-Clason Point-Harding Park' = 153, 'South Jamaica' = 154, 'South Ozone Park' = 155, 'Springfield Gardens North' = 156, 'Springfield Gardens South-Brookville' = 157, 'Spuyten Duyvil-Kingsbridge' = 158, 'St. Albans' = 159, 'Stapleton-Rosebank' = 160, 'Starrett City' = 161, 'Steinway' = 162, 'Stuyvesant Heights' = 163, 'Stuyvesant Town-Cooper Village' = 164, 'Sunset Park East' = 165, 'Sunset Park West' = 166, 'Todt Hill-Emerson Hill-Heartland Village-Lighthouse Hill' = 167, 'Turtle Bay-East Midtown' = 168, 'University Heights-Morris Heights' = 169, 'Upper East Side-Carnegie Hill' = 170, 'Upper West Side' = 171, 'Van Cortlandt Village' = 172, 'Van Nest-Morris Park-Westchester Square' = 173, 'Washington Heights North' = 174, 'Washington Heights South' = 175, 'West Brighton' = 176, 'West Concourse' = 177, 'West Farms-Bronx River' = 178, 'West New Brighton-New Brighton-St. George' = 179, 'West Village' = 180, 'Westchester-Unionport' = 181, 'Westerleigh' = 182, 'Whitestone' = 183, 'Williamsbridge-Olinville' = 184, 'Williamsburg' = 185, 'Windsor Terrace' = 186, 'Woodhaven' = 187, 'Woodlawn-Wakefield' = 188, 'Woodside' = 189, 'Yorkville' = 190, 'park-cemetery-etc-Bronx' = 191, 'park-cemetery-etc-Brooklyn' = 192, 'park-cemetery-etc-Manhattan' = 193, 'park-cemetery-etc-Queens' = 194, 'park-cemetery-etc-Staten Island' = 195),  pickup_puma UInt16,  dropoff_nyct2010_gid UInt8,  dropoff_ctlabel Float32,  dropoff_borocode UInt8,  dropoff_boroname Enum8('' = 0, 'Manhattan' = 1, 'Bronx' = 2, 'Brooklyn' = 3, 'Queens' = 4, 'Staten Island' = 5),  dropoff_ct2010 FixedString(6),  dropoff_boroct2010 FixedString(7),  dropoff_cdeligibil Enum8(' ' = 0, 'E' = 1, 'I' = 2),  dropoff_ntacode FixedString(4),  dropoff_ntaname Enum16('' = 0, 'Airport' = 1, 'Allerton-Pelham Gardens' = 2, 'Annadale-Huguenot-Prince\\'s Bay-Eltingville' = 3, 'Arden Heights' = 4, 'Astoria' = 5, 'Auburndale' = 6, 'Baisley Park' = 7, 'Bath Beach' = 8, 'Battery Park City-Lower Manhattan' = 9, 'Bay Ridge' = 10, 'Bayside-Bayside Hills' = 11, 'Bedford' = 12, 'Bedford Park-Fordham North' = 13, 'Bellerose' = 14, 'Belmont' = 15, 'Bensonhurst East' = 16, 'Bensonhurst West' = 17, 'Borough Park' = 18, 'Breezy Point-Belle Harbor-Rockaway Park-Broad Channel' = 19, 'Briarwood-Jamaica Hills' = 20, 'Brighton Beach' = 21, 'Bronxdale' = 22, 'Brooklyn Heights-Cobble Hill' = 23, 'Brownsville' = 24, 'Bushwick North' = 25, 'Bushwick South' = 26, 'Cambria Heights' = 27, 'Canarsie' = 28, 'Carroll Gardens-Columbia Street-Red Hook' = 29, 'Central Harlem North-Polo Grounds' = 30, 'Central Harlem South' = 31, 'Charleston-Richmond Valley-Tottenville' = 32, 'Chinatown' = 33, 'Claremont-Bathgate' = 34, 'Clinton' = 35, 'Clinton Hill' = 36, 'Co-op City' = 37, 'College Point' = 38, 'Corona' = 39, 'Crotona Park East' = 40, 'Crown Heights North' = 41, 'Crown Heights South' = 42, 'Cypress Hills-City Line' = 43, 'DUMBO-Vinegar Hill-Downtown Brooklyn-Boerum Hill' = 44, 'Douglas Manor-Douglaston-Little Neck' = 45, 'Dyker Heights' = 46, 'East Concourse-Concourse Village' = 47, 'East Elmhurst' = 48, 'East Flatbush-Farragut' = 49, 'East Flushing' = 50, 'East Harlem North' = 51, 'East Harlem South' = 52, 'East New York' = 53, 'East New York (Pennsylvania Ave)' = 54, 'East Tremont' = 55, 'East Village' = 56, 'East Williamsburg' = 57, 'Eastchester-Edenwald-Baychester' = 58, 'Elmhurst' = 59, 'Elmhurst-Maspeth' = 60, 'Erasmus' = 61, 'Far Rockaway-Bayswater' = 62, 'Flatbush' = 63, 'Flatlands' = 64, 'Flushing' = 65, 'Fordham South' = 66, 'Forest Hills' = 67, 'Fort Greene' = 68, 'Fresh Meadows-Utopia' = 69, 'Ft. Totten-Bay Terrace-Clearview' = 70, 'Georgetown-Marine Park-Bergen Beach-Mill Basin' = 71, 'Glen Oaks-Floral Park-New Hyde Park' = 72, 'Glendale' = 73, 'Gramercy' = 74, 'Grasmere-Arrochar-Ft. Wadsworth' = 75, 'Gravesend' = 76, 'Great Kills' = 77, 'Greenpoint' = 78, 'Grymes Hill-Clifton-Fox Hills' = 79, 'Hamilton Heights' = 80, 'Hammels-Arverne-Edgemere' = 81, 'Highbridge' = 82, 'Hollis' = 83, 'Homecrest' = 84, 'Hudson Yards-Chelsea-Flatiron-Union Square' = 85, 'Hunters Point-Sunnyside-West Maspeth' = 86, 'Hunts Point' = 87, 'Jackson Heights' = 88, 'Jamaica' = 89, 'Jamaica Estates-Holliswood' = 90, 'Kensington-Ocean Parkway' = 91, 'Kew Gardens' = 92, 'Kew Gardens Hills' = 93, 'Kingsbridge Heights' = 94, 'Laurelton' = 95, 'Lenox Hill-Roosevelt Island' = 96, 'Lincoln Square' = 97, 'Lindenwood-Howard Beach' = 98, 'Longwood' = 99, 'Lower East Side' = 100, 'Madison' = 101, 'Manhattanville' = 102, 'Marble Hill-Inwood' = 103, 'Mariner\\'s Harbor-Arlington-Port Ivory-Graniteville' = 104, 'Maspeth' = 105, 'Melrose South-Mott Haven North' = 106, 'Middle Village' = 107, 'Midtown-Midtown South' = 108, 'Midwood' = 109, 'Morningside Heights' = 110, 'Morrisania-Melrose' = 111, 'Mott Haven-Port Morris' = 112, 'Mount Hope' = 113, 'Murray Hill' = 114, 'Murray Hill-Kips Bay' = 115, 'New Brighton-Silver Lake' = 116, 'New Dorp-Midland Beach' = 117, 'New Springville-Bloomfield-Travis' = 118, 'North Corona' = 119, 'North Riverdale-Fieldston-Riverdale' = 120, 'North Side-South Side' = 121, 'Norwood' = 122, 'Oakland Gardens' = 123, 'Oakwood-Oakwood Beach' = 124, 'Ocean Hill' = 125, 'Ocean Parkway South' = 126, 'Old Astoria' = 127, 'Old Town-Dongan Hills-South Beach' = 128, 'Ozone Park' = 129, 'Park Slope-Gowanus' = 130, 'Parkchester' = 131, 'Pelham Bay-Country Club-City Island' = 132, 'Pelham Parkway' = 133, 'Pomonok-Flushing Heights-Hillcrest' = 134, 'Port Richmond' = 135, 'Prospect Heights' = 136, 'Prospect Lefferts Gardens-Wingate' = 137, 'Queens Village' = 138, 'Queensboro Hill' = 139, 'Queensbridge-Ravenswood-Long Island City' = 140, 'Rego Park' = 141, 'Richmond Hill' = 142, 'Ridgewood' = 143, 'Rikers Island' = 144, 'Rosedale' = 145, 'Rossville-Woodrow' = 146, 'Rugby-Remsen Village' = 147, 'Schuylerville-Throgs Neck-Edgewater Park' = 148, 'Seagate-Coney Island' = 149, 'Sheepshead Bay-Gerritsen Beach-Manhattan Beach' = 150, 'SoHo-TriBeCa-Civic Center-Little Italy' = 151, 'Soundview-Bruckner' = 152, 'Soundview-Castle Hill-Clason Point-Harding Park' = 153, 'South Jamaica' = 154, 'South Ozone Park' = 155, 'Springfield Gardens North' = 156, 'Springfield Gardens South-Brookville' = 157, 'Spuyten Duyvil-Kingsbridge' = 158, 'St. Albans' = 159, 'Stapleton-Rosebank' = 160, 'Starrett City' = 161, 'Steinway' = 162, 'Stuyvesant Heights' = 163, 'Stuyvesant Town-Cooper Village' = 164, 'Sunset Park East' = 165, 'Sunset Park West' = 166, 'Todt Hill-Emerson Hill-Heartland Village-Lighthouse Hill' = 167, 'Turtle Bay-East Midtown' = 168, 'University Heights-Morris Heights' = 169, 'Upper East Side-Carnegie Hill' = 170, 'Upper West Side' = 171, 'Van Cortlandt Village' = 172, 'Van Nest-Morris Park-Westchester Square' = 173, 'Washington Heights North' = 174, 'Washington Heights South' = 175, 'West Brighton' = 176, 'West Concourse' = 177, 'West Farms-Bronx River' = 178, 'West New Brighton-New Brighton-St. George' = 179, 'West Village' = 180, 'Westchester-Unionport' = 181, 'Westerleigh' = 182, 'Whitestone' = 183, 'Williamsbridge-Olinville' = 184, 'Williamsburg' = 185, 'Windsor Terrace' = 186, 'Woodhaven' = 187, 'Woodlawn-Wakefield' = 188, 'Woodside' = 189, 'Yorkville' = 190, 'park-cemetery-etc-Bronx' = 191, 'park-cemetery-etc-Brooklyn' = 192, 'park-cemetery-etc-Manhattan' = 193, 'park-cemetery-etc-Queens' = 194, 'park-cemetery-etc-Staten Island' = 195),  dropoff_puma UInt16) ENGINE = MergeTree(pickup_date, pickup_datetime, 8192)\n")),(0,r.kt)("p",null,"On the source server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE trips_mergetree_x3 AS trips_mergetree_third ENGINE = Distributed(perftest, default, trips_mergetree_third, rand())\n")),(0,r.kt)("p",null,"The following query redistributes data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO trips_mergetree_x3 SELECT * FROM trips_mergetree\n")),(0,r.kt)("p",null,"This takes 2454 seconds."),(0,r.kt)("p",null,"On three servers:"),(0,r.kt)("p",null,"Q1: 0.212 seconds.\nQ2: 0.438 seconds.\nQ3: 0.733 seconds.\nQ4: 1.241 seconds."),(0,r.kt)("p",null,"No surprises here, since the queries are scaled linearly."),(0,r.kt)("p",null,"We also have the results from a cluster of 140 servers:"),(0,r.kt)("p",null,"Q1: 0.028 sec.\nQ2: 0.043 sec.\nQ3: 0.051 sec.\nQ4: 0.072 sec."),(0,r.kt)("p",null,"In this case, the query processing time is determined above all by network latency.\nWe ran queries using a client located in a different datacenter than where the cluster was located, which added about 20 ms of latency."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"servers"),(0,r.kt)("th",{parentName:"tr",align:null},"Q1"),(0,r.kt)("th",{parentName:"tr",align:null},"Q2"),(0,r.kt)("th",{parentName:"tr",align:null},"Q3"),(0,r.kt)("th",{parentName:"tr",align:null},"Q4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1, E5-2650v2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.490"),(0,r.kt)("td",{parentName:"tr",align:null},"1.224"),(0,r.kt)("td",{parentName:"tr",align:null},"2.104"),(0,r.kt)("td",{parentName:"tr",align:null},"3.593")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3, E5-2650v2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.212"),(0,r.kt)("td",{parentName:"tr",align:null},"0.438"),(0,r.kt)("td",{parentName:"tr",align:null},"0.733"),(0,r.kt)("td",{parentName:"tr",align:null},"1.241")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1, AWS c5n.4xlarge"),(0,r.kt)("td",{parentName:"tr",align:null},"0.249"),(0,r.kt)("td",{parentName:"tr",align:null},"1.279"),(0,r.kt)("td",{parentName:"tr",align:null},"1.738"),(0,r.kt)("td",{parentName:"tr",align:null},"3.527")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1, AWS c5n.9xlarge"),(0,r.kt)("td",{parentName:"tr",align:null},"0.130"),(0,r.kt)("td",{parentName:"tr",align:null},"0.584"),(0,r.kt)("td",{parentName:"tr",align:null},"0.777"),(0,r.kt)("td",{parentName:"tr",align:null},"1.811")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3, AWS c5n.9xlarge"),(0,r.kt)("td",{parentName:"tr",align:null},"0.057"),(0,r.kt)("td",{parentName:"tr",align:null},"0.231"),(0,r.kt)("td",{parentName:"tr",align:null},"0.285"),(0,r.kt)("td",{parentName:"tr",align:null},"0.641")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"140, E5-2650v2"),(0,r.kt)("td",{parentName:"tr",align:null},"0.028"),(0,r.kt)("td",{parentName:"tr",align:null},"0.043"),(0,r.kt)("td",{parentName:"tr",align:null},"0.051"),(0,r.kt)("td",{parentName:"tr",align:null},"0.072")))))}c.isMDXComponent=!0}}]);