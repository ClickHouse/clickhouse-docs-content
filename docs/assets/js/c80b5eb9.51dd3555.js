"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35214],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=s(t),u=a,D=g["".concat(l,".").concat(u)]||g[u]||c[u]||i;return t?r.createElement(D,o(o({ref:n},m),{},{components:t})):r.createElement(D,o({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61608:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={sidebar_position:21,sidebar_label:"OnTime"},l="OnTime",s={unversionedId:"ru/getting-started/example-datasets/ontime",id:"ru/getting-started/example-datasets/ontime",title:"OnTime",description:"ontime}",source:"@site/docs/ru/getting-started/example-datasets/ontime.md",sourceDirName:"ru/getting-started/example-datasets",slug:"/ru/getting-started/example-datasets/ontime",permalink:"/docs/ru/getting-started/example-datasets/ontime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/getting-started/example-datasets/ontime.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21,sidebar_label:"OnTime"},sidebar:"russia",previous:{title:"\u041c\u0435\u043d\u044e",permalink:"/docs/ru/getting-started/example-datasets/menus"},next:{title:"GitHub Events",permalink:"/docs/ru/getting-started/example-datasets/github-events"}},m={},c=[{value:"\u0418\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0441\u044b\u0440\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",id:"import-iz-syrykh-dannykh",level:2},{value:"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439",id:"skachivanie-gotovykh-partitsii",level:2}],g={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ontime"},"OnTime"),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0434\u0430\u0442\u0430\u0441\u0435\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0438\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0441\u044b\u0440\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445;"),(0,i.kt)("li",{parentName:"ul"},"\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439.")),(0,i.kt)("h2",{id:"import-iz-syrykh-dannykh"},"\u0418\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0441\u044b\u0440\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/Percona-Lab/ontime-airline-performance/blob/master/download.sh"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate --continue https://transtats.bts.gov/PREZIP/On_Time_Reporting_Carrier_On_Time_Performance_1987_present_{1987..2021}_{1..12}.zip\n")),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ontime`\n(\n    `Year`                            UInt16,\n    `Quarter`                         UInt8,\n    `Month`                           UInt8,\n    `DayofMonth`                      UInt8,\n    `DayOfWeek`                       UInt8,\n    `FlightDate`                      Date,\n    `Reporting_Airline`               String,\n    `DOT_ID_Reporting_Airline`        Int32,\n    `IATA_CODE_Reporting_Airline`     String,\n    `Tail_Number`                     String,\n    `Flight_Number_Reporting_Airline` String,\n    `OriginAirportID`                 Int32,\n    `OriginAirportSeqID`              Int32,\n    `OriginCityMarketID`              Int32,\n    `Origin`                          FixedString(5),\n    `OriginCityName`                  String,\n    `OriginState`                     FixedString(2),\n    `OriginStateFips`                 String,\n    `OriginStateName`                 String,\n    `OriginWac`                       Int32,\n    `DestAirportID`                   Int32,\n    `DestAirportSeqID`                Int32,\n    `DestCityMarketID`                Int32,\n    `Dest`                            FixedString(5),\n    `DestCityName`                    String,\n    `DestState`                       FixedString(2),\n    `DestStateFips`                   String,\n    `DestStateName`                   String,\n    `DestWac`                         Int32,\n    `CRSDepTime`                      Int32,\n    `DepTime`                         Int32,\n    `DepDelay`                        Int32,\n    `DepDelayMinutes`                 Int32,\n    `DepDel15`                        Int32,\n    `DepartureDelayGroups`            String,\n    `DepTimeBlk`                      String,\n    `TaxiOut`                         Int32,\n    `WheelsOff`                       Int32,\n    `WheelsOn`                        Int32,\n    `TaxiIn`                          Int32,\n    `CRSArrTime`                      Int32,\n    `ArrTime`                         Int32,\n    `ArrDelay`                        Int32,\n    `ArrDelayMinutes`                 Int32,\n    `ArrDel15`                        Int32,\n    `ArrivalDelayGroups`              Int32,\n    `ArrTimeBlk`                      String,\n    `Cancelled`                       UInt8,\n    `CancellationCode`                FixedString(1),\n    `Diverted`                        UInt8,\n    `CRSElapsedTime`                  Int32,\n    `ActualElapsedTime`               Int32,\n    `AirTime`                         Nullable(Int32),\n    `Flights`                         Int32,\n    `Distance`                        Int32,\n    `DistanceGroup`                   UInt8,\n    `CarrierDelay`                    Int32,\n    `WeatherDelay`                    Int32,\n    `NASDelay`                        Int32,\n    `SecurityDelay`                   Int32,\n    `LateAircraftDelay`               Int32,\n    `FirstDepTime`                    String,\n    `TotalAddGTime`                   String,\n    `LongestAddGTime`                 String,\n    `DivAirportLandings`              String,\n    `DivReachedDest`                  String,\n    `DivActualElapsedTime`            String,\n    `DivArrDelay`                     String,\n    `DivDistance`                     String,\n    `Div1Airport`                     String,\n    `Div1AirportID`                   Int32,\n    `Div1AirportSeqID`                Int32,\n    `Div1WheelsOn`                    String,\n    `Div1TotalGTime`                  String,\n    `Div1LongestGTime`                String,\n    `Div1WheelsOff`                   String,\n    `Div1TailNum`                     String,\n    `Div2Airport`                     String,\n    `Div2AirportID`                   Int32,\n    `Div2AirportSeqID`                Int32,\n    `Div2WheelsOn`                    String,\n    `Div2TotalGTime`                  String,\n    `Div2LongestGTime`                String,\n    `Div2WheelsOff`                   String,\n    `Div2TailNum`                     String,\n    `Div3Airport`                     String,\n    `Div3AirportID`                   Int32,\n    `Div3AirportSeqID`                Int32,\n    `Div3WheelsOn`                    String,\n    `Div3TotalGTime`                  String,\n    `Div3LongestGTime`                String,\n    `Div3WheelsOff`                   String,\n    `Div3TailNum`                     String,\n    `Div4Airport`                     String,\n    `Div4AirportID`                   Int32,\n    `Div4AirportSeqID`                Int32,\n    `Div4WheelsOn`                    String,\n    `Div4TotalGTime`                  String,\n    `Div4LongestGTime`                String,\n    `Div4WheelsOff`                   String,\n    `Div4TailNum`                     String,\n    `Div5Airport`                     String,\n    `Div5AirportID`                   Int32,\n    `Div5AirportSeqID`                Int32,\n    `Div5WheelsOn`                    String,\n    `Div5TotalGTime`                  String,\n    `Div5LongestGTime`                String,\n    `Div5WheelsOff`                   String,\n    `Div5TailNum`                     String\n) ENGINE = MergeTree\n      PARTITION BY Year\n      ORDER BY (IATA_CODE_Reporting_Airline, FlightDate)\n      SETTINGS index_granularity = 8192;\n")),(0,i.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls -1 *.zip | xargs -I{} -P $(nproc) bash -c \"echo {}; unzip -cq {} '*.csv' | sed 's/\\.00//g' | clickhouse-client --input_format_with_names_use_header=0 --query='INSERT INTO ontime FORMAT CSVWithNames'\"\n")),(0,i.kt)("h2",{id:"skachivanie-gotovykh-partitsii"},"\u0421\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0442\u043e\u0432\u044b\u0445 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -O https://datasets.clickhouse.com/ontime/partitions/ontime.tar\n$ tar xvf ontime.tar -C /var/lib/clickhouse # \u043f\u0443\u0442\u044c \u043a \u043f\u0430\u043f\u043a\u0435 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 ClickHouse\n$ # \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043d\u0430 \u0444\u0430\u0439\u043b\u044b\n$ sudo service clickhouse-server restart\n$ clickhouse-client --query "SELECT COUNT(*) FROM datasets.ontime"\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"Info"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435, \u0442\u043e \u043a \u0438\u043c\u0435\u043d\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b\n")),(0,i.kt)("p",{parentName:"div"},"\u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u043c\u044f \u0431\u0430\u0437\u044b, ",(0,i.kt)("inlineCode",{parentName:"p"},"datasets.ontime"),"."),(0,i.kt)("h2",{parentName:"div",id:"zaprosy"},"\u0417\u0430\u043f\u0440\u043e\u0441\u044b:"),(0,i.kt)("p",{parentName:"div"},"Q0."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(c1)\nFROM\n(\n    SELECT Year, Month, count(*) AS c1\n    FROM ontime\n    GROUP BY Year, Month\n);\n")),(0,i.kt)("p",{parentName:"div"},"Q1. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u0435\u0442\u043e\u0432 \u0432 \u0434\u0435\u043d\u044c \u0441 2000 \u043f\u043e 2008 \u0433\u043e\u0434\u0430"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,i.kt)("p",{parentName:"div"},"Q2. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043b\u0435\u0442\u043e\u0432, \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0445 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u043d\u0430 10 \u043c\u0438\u043d\u0443\u0442, \u0441 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u043f\u043e \u0434\u043d\u044f\u043c \u043d\u0435\u0434\u0435\u043b\u0435, \u0437\u0430 2000-2008 \u0433\u043e\u0434\u0430"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,i.kt)("p",{parentName:"div"},"Q3. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u043f\u043e \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u043c \u0437\u0430 2000-2008"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Origin, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY Origin\nORDER BY c DESC\nLIMIT 10;\n")),(0,i.kt)("p",{parentName:"div"},"Q4. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u043f\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430\u043c \u0437\u0430 2007 \u0433\u043e\u0434"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*)\nFROM ontime\nWHERE DepDelay>10 AND Year=2007\nGROUP BY Carrier\nORDER BY count(*) DESC;\n")),(0,i.kt)("p",{parentName:"div"},"Q5. \u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043a \u043f\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0430\u043c \u0437\u0430 2007 \u0433\u043e\u0434"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year=2007\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year=2007\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,i.kt)("p",{parentName:"div"},"\u0411\u043e\u043b\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year=2007\nGROUP BY Carrier\nORDER BY c3 DESC\n")),(0,i.kt)("p",{parentName:"div"},"Q6. \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430 \u0431\u043e\u043b\u0435\u0435 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043b\u0435\u0442, 2000-2008"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,i.kt)("p",{parentName:"div"},"\u0411\u043e\u043b\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY Carrier\nORDER BY c3 DESC;\n")),(0,i.kt)("p",{parentName:"div"},"Q7. \u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043f\u043e\u043b\u0435\u0442\u043e\u0432, \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 10 \u043c\u0438\u043d\u0443\u0442, \u0432 \u0440\u0430\u0437\u0431\u0438\u0432\u043a\u0435 \u043f\u043e \u0433\u043e\u0434\u0430\u043c"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, c1/c2\nFROM\n(\n    select\n        Year,\n        count(*)*100 as c1\n    from ontime\n    WHERE DepDelay>10\n    GROUP BY Year\n) q\nJOIN\n(\n    select\n        Year,\n        count(*) as c2\n    from ontime\n    GROUP BY Year\n) qq USING (Year)\nORDER BY Year;\n")),(0,i.kt)("p",{parentName:"div"},"\u0411\u043e\u043b\u0435\u0435 \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, avg(DepDelay>10)*100\nFROM ontime\nGROUP BY Year\nORDER BY Year;\n")),(0,i.kt)("p",{parentName:"div"},"Q8. \u0421\u0430\u043c\u044b\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 \u043b\u0435\u0442"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DestCityName, uniqExact(OriginCityName) AS u F\nROM ontime\nWHERE Year>=2000 and Year<=2010\nGROUP BY DestCityName\nORDER BY u DESC\nLIMIT 10;\n")),(0,i.kt)("p",{parentName:"div"},"Q9."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, count(*) AS c1\nFROM ontime\nGROUP BY Year;\n")),(0,i.kt)("p",{parentName:"div"},"Q10."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   min(Year), max(Year), IATA_CODE_Reporting_Airline AS Carrier, count(*) AS cnt,\n   sum(ArrDelayMinutes>30) AS flights_delayed,\n   round(sum(ArrDelayMinutes>30)/count(*),2) AS rate\nFROM ontime\nWHERE\n   DayOfWeek NOT IN (6,7) AND OriginState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND DestState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND FlightDate < '2010-01-01'\nGROUP by Carrier\nHAVING cnt>100000 and max(Year)>1990\nORDER by rate DESC\nLIMIT 1000;\n")),(0,i.kt)("p",{parentName:"div"},"\u0411\u043e\u043d\u0443\u0441:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(cnt)\nFROM\n(\n    SELECT Year,Month,count(*) AS cnt\n    FROM ontime\n    WHERE DepDel15=1\n    GROUP BY Year,Month\n);\n\nSELECT avg(c1) FROM\n(\n    SELECT Year,Month,count(*) AS c1\n    FROM ontime\n    GROUP BY Year,Month\n);\n\nSELECT DestCityName, uniqExact(OriginCityName) AS u\nFROM ontime\nGROUP BY DestCityName\nORDER BY u DESC\nLIMIT 10;\n\nSELECT OriginCityName, DestCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName, DestCityName\nORDER BY c DESC\nLIMIT 10;\n\nSELECT OriginCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName\nORDER BY c DESC\nLIMIT 10;\n")),(0,i.kt)("p",{parentName:"div"},"\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0412\u0430\u0434\u0438\u043c\u043e\u043c \u0422\u043a\u0430\u0447\u0435\u043d\u043a\u043e, \u0441\u0442\u0430\u0442\u044c\u0438 \u043f\u043e \u0442\u0435\u043c\u0435:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/"},"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/"},"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/"},"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/"},"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/"},"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"},"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"))))))}u.isMDXComponent=!0}}]);