"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[40576],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>D});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,D=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(D,l(l({ref:n},p),{},{components:t})):r.createElement(D,l({ref:n},p))}));function D(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/zh/getting-started/example-datasets/ontime",sidebar_position:21,sidebar_label:"OnTime"},l="OnTime",o={unversionedId:"zh/getting-started/example-datasets/ontime",id:"zh/getting-started/example-datasets/ontime",title:"OnTime",description:"ontime}",source:"@site/docs/zh/getting-started/example-datasets/ontime.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/ontime",permalink:"/docs/zh/getting-started/example-datasets/ontime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/ontime.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{slug:"/zh/getting-started/example-datasets/ontime",sidebar_position:21,sidebar_label:"OnTime"},sidebar:"chinese",previous:{title:"New York Taxi Data",permalink:"/docs/zh/getting-started/example-datasets/nyc-taxi"},next:{title:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6",permalink:"/docs/zh/getting-started/example-datasets/brown-benchmark"}},s={},c=[{value:"\u4ece\u539f\u59cb\u6570\u636e\u5bfc\u5165",id:"cong-yuan-shi-shu-ju-dao-ru",level:2},{value:"\u4e0b\u8f7d\u9884\u5904\u7406\u597d\u7684\u5206\u533a\u6570\u636e",id:"xia-zai-yu-chu-li-hao-de-fen-qu-shu-ju",level:2},{value:"\u67e5\u8be2\uff1a",id:"cha-xun",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ontime"},"OnTime"),(0,a.kt)("p",null,"\u822a\u73ed\u98de\u884c\u6570\u636e\u6709\u4ee5\u4e0b\u4e24\u4e2a\u65b9\u5f0f\u83b7\u53d6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece\u539f\u59cb\u6570\u636e\u5bfc\u5165"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u9884\u5904\u7406\u597d\u7684\u6570\u636e")),(0,a.kt)("h2",{id:"cong-yuan-shi-shu-ju-dao-ru"},"\u4ece\u539f\u59cb\u6570\u636e\u5bfc\u5165"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate --continue https://transtats.bts.gov/PREZIP/On_Time_Reporting_Carrier_On_Time_Performance_1987_present_{1987..2021}_{1..12}.zip\n")),(0,a.kt)("p",null,"\u521b\u5efa\u8868\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `ontime`\n(\n    `Year`                            UInt16,\n    `Quarter`                         UInt8,\n    `Month`                           UInt8,\n    `DayofMonth`                      UInt8,\n    `DayOfWeek`                       UInt8,\n    `FlightDate`                      Date,\n    `Reporting_Airline`               String,\n    `DOT_ID_Reporting_Airline`        Int32,\n    `IATA_CODE_Reporting_Airline`     String,\n    `Tail_Number`                     String,\n    `Flight_Number_Reporting_Airline` String,\n    `OriginAirportID`                 Int32,\n    `OriginAirportSeqID`              Int32,\n    `OriginCityMarketID`              Int32,\n    `Origin`                          FixedString(5),\n    `OriginCityName`                  String,\n    `OriginState`                     FixedString(2),\n    `OriginStateFips`                 String,\n    `OriginStateName`                 String,\n    `OriginWac`                       Int32,\n    `DestAirportID`                   Int32,\n    `DestAirportSeqID`                Int32,\n    `DestCityMarketID`                Int32,\n    `Dest`                            FixedString(5),\n    `DestCityName`                    String,\n    `DestState`                       FixedString(2),\n    `DestStateFips`                   String,\n    `DestStateName`                   String,\n    `DestWac`                         Int32,\n    `CRSDepTime`                      Int32,\n    `DepTime`                         Int32,\n    `DepDelay`                        Int32,\n    `DepDelayMinutes`                 Int32,\n    `DepDel15`                        Int32,\n    `DepartureDelayGroups`            String,\n    `DepTimeBlk`                      String,\n    `TaxiOut`                         Int32,\n    `WheelsOff`                       Int32,\n    `WheelsOn`                        Int32,\n    `TaxiIn`                          Int32,\n    `CRSArrTime`                      Int32,\n    `ArrTime`                         Int32,\n    `ArrDelay`                        Int32,\n    `ArrDelayMinutes`                 Int32,\n    `ArrDel15`                        Int32,\n    `ArrivalDelayGroups`              Int32,\n    `ArrTimeBlk`                      String,\n    `Cancelled`                       UInt8,\n    `CancellationCode`                FixedString(1),\n    `Diverted`                        UInt8,\n    `CRSElapsedTime`                  Int32,\n    `ActualElapsedTime`               Int32,\n    `AirTime`                         Nullable(Int32),\n    `Flights`                         Int32,\n    `Distance`                        Int32,\n    `DistanceGroup`                   UInt8,\n    `CarrierDelay`                    Int32,\n    `WeatherDelay`                    Int32,\n    `NASDelay`                        Int32,\n    `SecurityDelay`                   Int32,\n    `LateAircraftDelay`               Int32,\n    `FirstDepTime`                    String,\n    `TotalAddGTime`                   String,\n    `LongestAddGTime`                 String,\n    `DivAirportLandings`              String,\n    `DivReachedDest`                  String,\n    `DivActualElapsedTime`            String,\n    `DivArrDelay`                     String,\n    `DivDistance`                     String,\n    `Div1Airport`                     String,\n    `Div1AirportID`                   Int32,\n    `Div1AirportSeqID`                Int32,\n    `Div1WheelsOn`                    String,\n    `Div1TotalGTime`                  String,\n    `Div1LongestGTime`                String,\n    `Div1WheelsOff`                   String,\n    `Div1TailNum`                     String,\n    `Div2Airport`                     String,\n    `Div2AirportID`                   Int32,\n    `Div2AirportSeqID`                Int32,\n    `Div2WheelsOn`                    String,\n    `Div2TotalGTime`                  String,\n    `Div2LongestGTime`                String,\n    `Div2WheelsOff`                   String,\n    `Div2TailNum`                     String,\n    `Div3Airport`                     String,\n    `Div3AirportID`                   Int32,\n    `Div3AirportSeqID`                Int32,\n    `Div3WheelsOn`                    String,\n    `Div3TotalGTime`                  String,\n    `Div3LongestGTime`                String,\n    `Div3WheelsOff`                   String,\n    `Div3TailNum`                     String,\n    `Div4Airport`                     String,\n    `Div4AirportID`                   Int32,\n    `Div4AirportSeqID`                Int32,\n    `Div4WheelsOn`                    String,\n    `Div4TotalGTime`                  String,\n    `Div4LongestGTime`                String,\n    `Div4WheelsOff`                   String,\n    `Div4TailNum`                     String,\n    `Div5Airport`                     String,\n    `Div5AirportID`                   Int32,\n    `Div5AirportSeqID`                Int32,\n    `Div5WheelsOn`                    String,\n    `Div5TotalGTime`                  String,\n    `Div5LongestGTime`                String,\n    `Div5WheelsOff`                   String,\n    `Div5TailNum`                     String\n) ENGINE = MergeTree\n      PARTITION BY Year\n      ORDER BY (IATA_CODE_Reporting_Airline, FlightDate)\n      SETTINGS index_granularity = 8192;\n")),(0,a.kt)("p",null,"\u52a0\u8f7d\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -1 *.zip | xargs -I{} -P $(nproc) bash -c \"echo {}; unzip -cq {} '*.csv' | sed 's/\\.00//g' | clickhouse-client --input_format_with_names_use_header=0 --query='INSERT INTO ontime FORMAT CSVWithNames'\"\n")),(0,a.kt)("h2",{id:"xia-zai-yu-chu-li-hao-de-fen-qu-shu-ju"},"\u4e0b\u8f7d\u9884\u5904\u7406\u597d\u7684\u5206\u533a\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -O https://datasets.clickhouse.com/ontime/partitions/ontime.tar\n$ tar xvf ontime.tar -C /var/lib/clickhouse # path to ClickHouse data directory\n$ # check permissions of unpacked data, fix if required\n$ sudo service clickhouse-server restart\n$ clickhouse-client --query "select count(*) from datasets.ontime"\n')),(0,a.kt)("p",null,'!!! info "\u4fe1\u606f"\n\u5982\u679c\u8981\u8fd0\u884c\u4e0b\u9762\u7684SQL\u67e5\u8be2\uff0c\u5fc5\u987b\u4f7f\u7528\u5b8c\u6574\u7684\u8868\u540d\uff0c',(0,a.kt)("inlineCode",{parentName:"p"},"datasets.ontime"),"\u3002"),(0,a.kt)("h2",{id:"cha-xun"},"\u67e5\u8be2\uff1a"),(0,a.kt)("p",null,"Q0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(c1)\nFROM\n(\n    SELECT Year, Month, count(*) AS c1\n    FROM ontime\n    GROUP BY Year, Month\n);\n")),(0,a.kt)("p",null,"Q1. \u67e5\u8be2\u4ece2000\u5e74\u52302008\u5e74\u6bcf\u5929\u7684\u822a\u73ed\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,a.kt)("p",null,"Q2. \u67e5\u8be2\u4ece2000\u5e74\u52302008\u5e74\u6bcf\u5468\u5ef6\u8bef\u8d85\u8fc710\u5206\u949f\u7684\u822a\u73ed\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DayOfWeek, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY DayOfWeek\nORDER BY c DESC;\n")),(0,a.kt)("p",null,"Q3. \u67e5\u8be22000\u5e74\u52302008\u5e74\u6bcf\u4e2a\u673a\u573a\u5ef6\u8bef\u8d85\u8fc710\u5206\u949f\u4ee5\u4e0a\u7684\u6b21\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Origin, count(*) AS c\nFROM ontime\nWHERE DepDelay>10 AND Year>=2000 AND Year<=2008\nGROUP BY Origin\nORDER BY c DESC\nLIMIT 10;\n")),(0,a.kt)("p",null,"Q4. \u67e5\u8be22007\u5e74\u5404\u822a\u7a7a\u516c\u53f8\u5ef6\u8bef\u8d85\u8fc710\u5206\u949f\u4ee5\u4e0a\u7684\u6b21\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, count(*)\nFROM ontime\nWHERE DepDelay>10 AND Year=2007\nGROUP BY Carrier\nORDER BY count(*) DESC;\n")),(0,a.kt)("p",null,"Q5. \u67e5\u8be22007\u5e74\u5404\u822a\u7a7a\u516c\u53f8\u5ef6\u8bef\u8d85\u8fc710\u5206\u949f\u4ee5\u4e0a\u7684\u767e\u5206\u6bd4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year=2007\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year=2007\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,a.kt)("p",null,"\u66f4\u597d\u7684\u67e5\u8be2\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year=2007\nGROUP BY Carrier\nORDER BY c3 DESC\n")),(0,a.kt)("p",null,"Q6. \u540c\u4e0a\u4e00\u4e2a\u67e5\u8be2\u4e00\u81f4,\u53ea\u662f\u67e5\u8be2\u8303\u56f4\u6269\u5927\u52302000\u5e74\u52302008\u5e74"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Carrier, c, c2, c*100/c2 as c3\nFROM\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c\n    FROM ontime\n    WHERE DepDelay>10\n        AND Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) q\nJOIN\n(\n    SELECT\n        IATA_CODE_Reporting_Airline AS Carrier,\n        count(*) AS c2\n    FROM ontime\n    WHERE Year>=2000 AND Year<=2008\n    GROUP BY Carrier\n) qq USING Carrier\nORDER BY c3 DESC;\n")),(0,a.kt)("p",null,"\u66f4\u597d\u7684\u67e5\u8be2\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IATA_CODE_Reporting_Airline AS Carrier, avg(DepDelay>10)*100 AS c3\nFROM ontime\nWHERE Year>=2000 AND Year<=2008\nGROUP BY Carrier\nORDER BY c3 DESC;\n")),(0,a.kt)("p",null,"Q7. \u6bcf\u5e74\u822a\u73ed\u5ef6\u8bef\u8d85\u8fc710\u5206\u949f\u7684\u767e\u5206\u6bd4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, c1/c2\nFROM\n(\n    select\n        Year,\n        count(*)*100 as c1\n    from ontime\n    WHERE DepDelay>10\n    GROUP BY Year\n) q\nJOIN\n(\n    select\n        Year,\n        count(*) as c2\n    from ontime\n    GROUP BY Year\n) qq USING (Year)\nORDER BY Year;\n")),(0,a.kt)("p",null,"\u66f4\u597d\u7684\u67e5\u8be2\u7248\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, avg(DepDelay>10)*100\nFROM ontime\nGROUP BY Year\nORDER BY Year;\n")),(0,a.kt)("p",null,"Q8. \u6bcf\u5e74\u66f4\u53d7\u4eba\u4eec\u559c\u7231\u7684\u76ee\u7684\u5730"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DestCityName, uniqExact(OriginCityName) AS u\nFROM ontime\nWHERE Year >= 2000 and Year <= 2010\nGROUP BY DestCityName\nORDER BY u DESC LIMIT 10;\n")),(0,a.kt)("p",null,"Q9."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT Year, count(*) AS c1\nFROM ontime\nGROUP BY Year;\n")),(0,a.kt)("p",null,"Q10."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   min(Year), max(Year), IATA_CODE_Reporting_Airline AS Carrier, count(*) AS cnt,\n   sum(ArrDelayMinutes>30) AS flights_delayed,\n   round(sum(ArrDelayMinutes>30)/count(*),2) AS rate\nFROM ontime\nWHERE\n   DayOfWeek NOT IN (6,7) AND OriginState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND DestState NOT IN ('AK', 'HI', 'PR', 'VI')\n   AND FlightDate < '2010-01-01'\nGROUP by Carrier\nHAVING cnt>100000 and max(Year)>1990\nORDER by rate DESC\nLIMIT 1000;\n")),(0,a.kt)("p",null,"Bonus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(cnt)\nFROM\n(\n    SELECT Year,Month,count(*) AS cnt\n    FROM ontime\n    WHERE DepDel15=1\n    GROUP BY Year,Month\n);\n\nSELECT avg(c1) FROM\n(\n    SELECT Year,Month,count(*) AS c1\n    FROM ontime\n    GROUP BY Year,Month\n);\n\nSELECT DestCityName, uniqExact(OriginCityName) AS u\nFROM ontime\nGROUP BY DestCityName\nORDER BY u DESC\nLIMIT 10;\n\nSELECT OriginCityName, DestCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName, DestCityName\nORDER BY c DESC\nLIMIT 10;\n\nSELECT OriginCityName, count() AS c\nFROM ontime\nGROUP BY OriginCityName\nORDER BY c DESC\nLIMIT 10;\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6027\u80fd\u6d4b\u8bd5\u7531Vadim Tkachenko\u63d0\u4f9b\u3002\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/"},"https://www.percona.com/blog/2009/10/02/analyzing-air-traffic-performance-with-infobright-and-monetdb/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/"},"https://www.percona.com/blog/2009/10/26/air-traffic-queries-in-luciddb/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/"},"https://www.percona.com/blog/2009/11/02/air-traffic-queries-in-infinidb-early-alpha/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/"},"https://www.percona.com/blog/2014/04/21/using-apache-hadoop-and-impala-together-with-mysql-for-data-analysis/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/"},"https://www.percona.com/blog/2016/01/07/apache-spark-with-air-ontime-performance-data/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"},"http://nickmakos.blogspot.ru/2012/08/analyzing-air-traffic-performance-with.html"))))}u.isMDXComponent=!0}}]);