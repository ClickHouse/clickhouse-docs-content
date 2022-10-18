"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85951],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=l,_=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return t?a.createElement(_,o(o({ref:n},m),{},{components:t})):a.createElement(_,o({ref:n},m))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50954:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],i={slug:"/zh/getting-started/example-datasets/brown-benchmark",sidebar_label:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6",description:"\u673a\u5668\u751f\u6210\u65e5\u5fd7\u6570\u636e\u7684\u65b0\u5206\u6790\u57fa\u51c6",title:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6"},c=void 0,s={unversionedId:"zh/getting-started/example-datasets/brown-benchmark",id:"zh/getting-started/example-datasets/brown-benchmark",title:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6",description:"\u673a\u5668\u751f\u6210\u65e5\u5fd7\u6570\u636e\u7684\u65b0\u5206\u6790\u57fa\u51c6",source:"@site/docs/zh/getting-started/example-datasets/brown-benchmark.mdx",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/brown-benchmark",permalink:"/docs/zh/getting-started/example-datasets/brown-benchmark",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/brown-benchmark.mdx",tags:[],version:"current",frontMatter:{slug:"/zh/getting-started/example-datasets/brown-benchmark",sidebar_label:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6",description:"\u673a\u5668\u751f\u6210\u65e5\u5fd7\u6570\u636e\u7684\u65b0\u5206\u6790\u57fa\u51c6",title:"\u5e03\u6717\u5927\u5b66\u57fa\u51c6"},sidebar:"chinese",previous:{title:"OnTime",permalink:"/docs/zh/getting-started/example-datasets/ontime"},next:{title:"\u7ebd\u7ea6\u516c\u5171\u56fe\u4e66\u9986\u201c\u83dc\u5355\u4e0a\u6709\u4ec0\u4e48\uff1f\u201d\u6570\u636e\u96c6",permalink:"/docs/zh/getting-started/example-datasets/menus"}},m={},u=[{value:"\u8fd0\u884c\u57fa\u51c6\u67e5\u8be2\uff1a",id:"\u8fd0\u884c\u57fa\u51c6\u67e5\u8be2",level:2}],p={toc:u};function g(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MgBench")," \u662f\u673a\u5668\u751f\u6210\u7684\u65e5\u5fd7\u6570\u636e\u7684\u65b0\u5206\u6790\u57fa\u51c6\uff0c",(0,r.kt)("a",{parentName:"p",href:"http://cs.brown.edu/people/acrotty/"},"Andrew Crotty"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://datasets.clickhouse.com/mgbench{1..3}.csv.xz \n")),(0,r.kt)("p",null,"\u89e3\u538b\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xz -v -d mgbench{1..3}.csv.xz \n")),(0,r.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93\u548c\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mgbench; \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE mgbench;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs1 (\n  log_time      DateTime,\n  machine_name  LowCardinality(String),\n  machine_group LowCardinality(String),\n  cpu_idle      Nullable(Float32),\n  cpu_nice      Nullable(Float32),\n  cpu_system    Nullable(Float32),\n  cpu_user      Nullable(Float32),\n  cpu_wio       Nullable(Float32),\n  disk_free     Nullable(Float32),\n  disk_total    Nullable(Float32),\n  part_max_used Nullable(Float32),\n  load_fifteen  Nullable(Float32),\n  load_five     Nullable(Float32),\n  load_one      Nullable(Float32),\n  mem_buffers   Nullable(Float32),\n  mem_cached    Nullable(Float32),\n  mem_free      Nullable(Float32),\n  mem_shared    Nullable(Float32),\n  swap_free     Nullable(Float32),\n  bytes_in      Nullable(Float32),\n  bytes_out     Nullable(Float32)\n)\nENGINE = MergeTree()\nORDER BY (machine_group, machine_name, log_time);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs2 (\n  log_time    DateTime,\n  client_ip   IPv4,\n  request     String,\n  status_code UInt16,\n  object_size UInt64\n)\nENGINE = MergeTree()\nORDER BY log_time;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mgbench.logs3 (\n  log_time     DateTime64,\n  device_id    FixedString(15),\n  device_name  LowCardinality(String),\n  device_type  LowCardinality(String),\n  device_floor UInt8,\n  event_type   LowCardinality(String),\n  event_unit   FixedString(1),\n  event_value  Nullable(Float32)\n)\nENGINE = MergeTree()\nORDER BY (event_type, log_time);\n")),(0,r.kt)("p",null,"\u63d2\u5165\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'clickhouse-client --query "INSERT INTO mgbench.logs1 FORMAT CSVWithNames" < mgbench1.csv\nclickhouse-client --query "INSERT INTO mgbench.logs2 FORMAT CSVWithNames" < mgbench2.csv\nclickhouse-client --query "INSERT INTO mgbench.logs3 FORMAT CSVWithNames" < mgbench3.csv\n')),(0,r.kt)("h2",{id:"\u8fd0\u884c\u57fa\u51c6\u67e5\u8be2"},"\u8fd0\u884c\u57fa\u51c6\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE mgbench;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.1: \u81ea\u5348\u591c\u4ee5\u6765\u6bcf\u4e2a Web \u670d\u52a1\u5668\u7684 CPU/\u7f51\u7edc\u5229\u7528\u7387\u662f\u591a\u5c11\uff1f\n\nSELECT machine_name,\n       MIN(cpu) AS cpu_min,\n       MAX(cpu) AS cpu_max,\n       AVG(cpu) AS cpu_avg,\n       MIN(net_in) AS net_in_min,\n       MAX(net_in) AS net_in_max,\n       AVG(net_in) AS net_in_avg,\n       MIN(net_out) AS net_out_min,\n       MAX(net_out) AS net_out_max,\n       AVG(net_out) AS net_out_avg\nFROM (\n  SELECT machine_name,\n         COALESCE(cpu_user, 0.0) AS cpu,\n         COALESCE(bytes_in, 0.0) AS net_in,\n         COALESCE(bytes_out, 0.0) AS net_out\n  FROM logs1\n  WHERE machine_name IN ('anansi','aragog','urd')\n    AND log_time >= TIMESTAMP '2017-01-11 00:00:00'\n) AS r\nGROUP BY machine_name;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.2\uff1a\u6700\u8fd1\u4e00\u5929\u6709\u54ea\u4e9b\u673a\u623f\u7684\u673a\u5668\u79bb\u7ebf\uff1f\n\nSELECT machine_name,\n       log_time\nFROM logs1\nWHERE (machine_name LIKE 'cslab%' OR\n       machine_name LIKE 'mslab%')\n  AND load_one IS NULL\n  AND log_time >= TIMESTAMP '2017-01-10 00:00:00'\nORDER BY machine_name,\n         log_time;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.3\uff1a\u7279\u5b9a\u5de5\u4f5c\u7ad9\u8fc7\u53bb 10 \u5929\u7684\u6bcf\u5c0f\u65f6\u7684\u5e73\u5747\u6307\u6807\u662f\u591a\u5c11\uff1f\n\nSELECT dt,\n       hr,\n       AVG(load_fifteen) AS load_fifteen_avg,\n       AVG(load_five) AS load_five_avg,\n       AVG(load_one) AS load_one_avg,\n       AVG(mem_free) AS mem_free_avg,\n       AVG(swap_free) AS swap_free_avg\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         EXTRACT(HOUR FROM log_time) AS hr,\n         load_fifteen,\n         load_five,\n         load_one,\n         mem_free,\n         swap_free\n  FROM logs1\n  WHERE machine_name = 'babbage'\n    AND load_fifteen IS NOT NULL\n    AND load_five IS NOT NULL\n    AND load_one IS NOT NULL\n    AND mem_free IS NOT NULL\n    AND swap_free IS NOT NULL\n    AND log_time >= TIMESTAMP '2017-01-01 00:00:00'\n) AS r\nGROUP BY dt,\n         hr\nORDER BY dt,\n         hr;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.4: 1 \u4e2a\u6708\u5185\uff0c\u6bcf\u53f0\u670d\u52a1\u5668\u7684\u78c1\u76d8 I/O \u963b\u585e\u7684\u9891\u7387\u662f\u591a\u5c11\uff1f\n\nSELECT machine_name,\n       COUNT(*) AS spikes\nFROM logs1\nWHERE machine_group = 'Servers'\n  AND cpu_wio > 0.99\n  AND log_time >= TIMESTAMP '2016-12-01 00:00:00'\n  AND log_time < TIMESTAMP '2017-01-01 00:00:00'\nGROUP BY machine_name\nORDER BY spikes DESC\nLIMIT 10;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.5\uff1a\u54ea\u4e9b\u5916\u90e8\u53ef\u8bbf\u95ee\u7684\u865a\u62df\u673a\u7684\u8fd0\u884c\u5185\u5b58\u4e0d\u8db3\uff1f\n\nSELECT machine_name,\n       dt,\n       MIN(mem_free) AS mem_free_min\nFROM (\n  SELECT machine_name,\n         CAST(log_time AS DATE) AS dt,\n         mem_free\n  FROM logs1\n  WHERE machine_group = 'DMZ'\n    AND mem_free IS NOT NULL\n) AS r\nGROUP BY machine_name,\n         dt\nHAVING MIN(mem_free) < 10000\nORDER BY machine_name,\n         dt;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q1.6: \u6bcf\u5c0f\u65f6\u6240\u6709\u6587\u4ef6\u670d\u52a1\u5668\u7684\u603b\u7f51\u7edc\u6d41\u91cf\u662f\u591a\u5c11\uff1f\n\nSELECT dt,\n       hr,\n       SUM(net_in) AS net_in_sum,\n       SUM(net_out) AS net_out_sum,\n       SUM(net_in) + SUM(net_out) AS both_sum\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         EXTRACT(HOUR FROM log_time) AS hr,\n         COALESCE(bytes_in, 0.0) / 1000000000.0 AS net_in,\n         COALESCE(bytes_out, 0.0) / 1000000000.0 AS net_out\n  FROM logs1\n  WHERE machine_name IN ('allsorts','andes','bigred','blackjack','bonbon',\n      'cadbury','chiclets','cotton','crows','dove','fireball','hearts','huey',\n      'lindt','milkduds','milkyway','mnm','necco','nerds','orbit','peeps',\n      'poprocks','razzles','runts','smarties','smuggler','spree','stride',\n      'tootsie','trident','wrigley','york')\n) AS r\nGROUP BY dt,\n         hr\nORDER BY both_sum DESC\nLIMIT 10;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.1\uff1a\u8fc7\u53bb 2 \u5468\u5185\u54ea\u4e9b\u8bf7\u6c42\u5bfc\u81f4\u4e86\u670d\u52a1\u5668\u9519\u8bef\uff1f\n\nSELECT *\nFROM logs2\nWHERE status_code >= 500\n  AND log_time >= TIMESTAMP '2012-12-18 00:00:00'\nORDER BY log_time;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.2\uff1a\u5728\u7279\u5b9a\u7684\u67d0 2 \u5468\u5185\uff0c\u7528\u6237\u5bc6\u7801\u6587\u4ef6\u662f\u5426\u88ab\u6cc4\u9732\u4e86\uff1f\n\nSELECT *\nFROM logs2\nWHERE status_code >= 200\n  AND status_code < 300\n  AND request LIKE '%/etc/passwd%'\n  AND log_time >= TIMESTAMP '2012-05-06 00:00:00'\n  AND log_time < TIMESTAMP '2012-05-20 00:00:00';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.3\uff1a\u8fc7\u53bb\u4e00\u4e2a\u6708\u9876\u7ea7\u8bf7\u6c42\u7684\u5e73\u5747\u8def\u5f84\u6df1\u5ea6\u662f\u591a\u5c11\uff1f\n\nSELECT top_level,\n       AVG(LENGTH(request) - LENGTH(REPLACE(request, '/', ''))) AS depth_avg\nFROM (\n  SELECT SUBSTRING(request FROM 1 FOR len) AS top_level,\n         request\n  FROM (\n    SELECT POSITION(SUBSTRING(request FROM 2), '/') AS len,\n           request\n    FROM logs2\n    WHERE status_code >= 200\n      AND status_code < 300\n      AND log_time >= TIMESTAMP '2012-12-01 00:00:00'\n  ) AS r\n  WHERE len > 0\n) AS s\nWHERE top_level IN ('/about','/courses','/degrees','/events',\n                    '/grad','/industry','/news','/people',\n                    '/publications','/research','/teaching','/ugrad')\nGROUP BY top_level\nORDER BY top_level;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.4\uff1a\u5728\u8fc7\u53bb\u7684 3 \u4e2a\u6708\u91cc\uff0c\u54ea\u4e9b\u5ba2\u6237\u7aef\u53d1\u51fa\u4e86\u8fc7\u591a\u7684\u8bf7\u6c42\uff1f\n\nSELECT client_ip,\n       COUNT(*) AS num_requests\nFROM logs2\nWHERE log_time >= TIMESTAMP '2012-10-01 00:00:00'\nGROUP BY client_ip\nHAVING COUNT(*) >= 100000\nORDER BY num_requests DESC;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.5\uff1a\u6bcf\u5929\u7684\u72ec\u7acb\u8bbf\u95ee\u8005\u6570\u91cf\u662f\u591a\u5c11\uff1f\n\nSELECT dt,\n       COUNT(DISTINCT client_ip)\nFROM (\n  SELECT CAST(log_time AS DATE) AS dt,\n         client_ip\n  FROM logs2\n) AS r\nGROUP BY dt\nORDER BY dt;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q2.6\uff1a\u5e73\u5747\u548c\u6700\u5927\u6570\u636e\u4f20\u8f93\u901f\u7387\uff08Gbps\uff09\u662f\u591a\u5c11\uff1f\n\nSELECT AVG(transfer) / 125000000.0 AS transfer_avg,\n       MAX(transfer) / 125000000.0 AS transfer_max\nFROM (\n  SELECT log_time,\n         SUM(object_size) AS transfer\n  FROM logs2\n  GROUP BY log_time\n) AS r;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.1\uff1a\u81ea 2019/11/29 17:00 \u4ee5\u6765\uff0c\u5ba4\u6e29\u662f\u5426\u8fbe\u5230\u8fc7\u51b0\u70b9\uff1f\n\nSELECT *\nFROM logs3\nWHERE event_type = 'temperature'\n  AND event_value <= 32.0\n  AND log_time >= '2019-11-29 17:00:00.000';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.4\uff1a\u5728\u8fc7\u53bb\u7684 6 \u4e2a\u6708\u91cc\uff0c\u6bcf\u6247\u95e8\u6253\u5f00\u7684\u9891\u7387\u662f\u591a\u5c11\uff1f\n\nSELECT device_name,\n       device_floor,\n       COUNT(*) AS ct\nFROM logs3\nWHERE event_type = 'door_open'\n  AND log_time >= '2019-06-01 00:00:00.000'\nGROUP BY device_name,\n         device_floor\nORDER BY ct DESC;\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u67e5\u8be2 3.5 \u4f7f\u7528\u4e86 UNION \u5173\u952e\u8bcd\u3002\u8bbe\u7f6e\u8be5\u6a21\u5f0f\u4ee5\u4fbf\u7ec4\u5408 SELECT \u7684\u67e5\u8be2\u7ed3\u679c\u3002\u8be5\u8bbe\u7f6e\u4ec5\u5728\u672a\u660e\u786e\u6307\u5b9a UNION ALL \u6216 UNION DISTINCT \u4f46\u4f7f\u7528\u4e86 UNION \u8fdb\u884c\u5171\u4eab\u65f6\u4f7f\u7528\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'DISTINCT' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.5: \u5728\u51ac\u5b63\u548c\u590f\u5b63\uff0c\u5efa\u7b51\u7269\u5185\u54ea\u4e9b\u5730\u65b9\u4f1a\u51fa\u73b0\u8f83\u5927\u7684\u6e29\u5ea6\u53d8\u5316\uff1f\n\nWITH temperature AS (\n  SELECT dt,\n         device_name,\n         device_type,\n         device_floor\n  FROM (\n    SELECT dt,\n           hr,\n           device_name,\n           device_type,\n           device_floor,\n           AVG(event_value) AS temperature_hourly_avg\n    FROM (\n      SELECT CAST(log_time AS DATE) AS dt,\n             EXTRACT(HOUR FROM log_time) AS hr,\n             device_name,\n             device_type,\n             device_floor,\n             event_value\n      FROM logs3\n      WHERE event_type = 'temperature'\n    ) AS r\n    GROUP BY dt,\n             hr,\n             device_name,\n             device_type,\n             device_floor\n  ) AS s\n  GROUP BY dt,\n           device_name,\n           device_type,\n           device_floor\n  HAVING MAX(temperature_hourly_avg) - MIN(temperature_hourly_avg) >= 25.0\n)\nSELECT DISTINCT device_name,\n       device_type,\n       device_floor,\n       'WINTER'\nFROM temperature\nWHERE dt >= DATE '2018-12-01'\n  AND dt < DATE '2019-03-01'\nUNION\nSELECT DISTINCT device_name,\n       device_type,\n       device_floor,\n       'SUMMER'\nFROM temperature\nWHERE dt >= DATE '2019-06-01'\n  AND dt < DATE '2019-09-01';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Q3.6\uff1a\u5bf9\u4e8e\u6bcf\u79cd\u7c7b\u522b\u7684\u8bbe\u5907\uff0c\u6bcf\u6708\u7684\u529f\u8017\u6307\u6807\u662f\u4ec0\u4e48\uff1f\n\nSELECT yr,\n       mo,\n       SUM(coffee_hourly_avg) AS coffee_monthly_sum,\n       AVG(coffee_hourly_avg) AS coffee_monthly_avg,\n       SUM(printer_hourly_avg) AS printer_monthly_sum,\n       AVG(printer_hourly_avg) AS printer_monthly_avg,\n       SUM(projector_hourly_avg) AS projector_monthly_sum,\n       AVG(projector_hourly_avg) AS projector_monthly_avg,\n       SUM(vending_hourly_avg) AS vending_monthly_sum,\n       AVG(vending_hourly_avg) AS vending_monthly_avg\nFROM (\n  SELECT dt,\n         yr,\n         mo,\n         hr,\n         AVG(coffee) AS coffee_hourly_avg,\n         AVG(printer) AS printer_hourly_avg,\n         AVG(projector) AS projector_hourly_avg,\n         AVG(vending) AS vending_hourly_avg\n  FROM (\n    SELECT CAST(log_time AS DATE) AS dt,\n           EXTRACT(YEAR FROM log_time) AS yr,\n           EXTRACT(MONTH FROM log_time) AS mo,\n           EXTRACT(HOUR FROM log_time) AS hr,\n           CASE WHEN device_name LIKE 'coffee%' THEN event_value END AS coffee,\n           CASE WHEN device_name LIKE 'printer%' THEN event_value END AS printer,\n           CASE WHEN device_name LIKE 'projector%' THEN event_value END AS projector,\n           CASE WHEN device_name LIKE 'vending%' THEN event_value END AS vending\n    FROM logs3\n    WHERE device_type = 'meter'\n  ) AS r\n  GROUP BY dt,\n           yr,\n           mo,\n           hr\n) AS s\nGROUP BY yr,\n         mo\nORDER BY yr,\n         mo;\n")),(0,r.kt)("p",null,"\u6b64\u6570\u636e\u96c6\u53ef\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play"},"Playground")," \u4e2d\u8fdb\u884c\u4ea4\u4e92\u5f0f\u7684\u8bf7\u6c42, ",(0,r.kt)("a",{parentName:"p",href:"https://play.clickhouse.com/play?user=play#U0VMRUNUIG1hY2hpbmVfbmFtZSwKICAgICAgIE1JTihjcHUpIEFTIGNwdV9taW4sCiAgICAgICBNQVgoY3B1KSBBUyBjcHVfbWF4LAogICAgICAgQVZHKGNwdSkgQVMgY3B1X2F2ZywKICAgICAgIE1JTihuZXRfaW4pIEFTIG5ldF9pbl9taW4sCiAgICAgICBNQVgobmV0X2luKSBBUyBuZXRfaW5fbWF4LAogICAgICAgQVZHKG5ldF9pbikgQVMgbmV0X2luX2F2ZywKICAgICAgIE1JTihuZXRfb3V0KSBBUyBuZXRfb3V0X21pbiwKICAgICAgIE1BWChuZXRfb3V0KSBBUyBuZXRfb3V0X21heCwKICAgICAgIEFWRyhuZXRfb3V0KSBBUyBuZXRfb3V0X2F2ZwpGUk9NICgKICBTRUxFQ1QgbWFjaGluZV9uYW1lLAogICAgICAgICBDT0FMRVNDRShjcHVfdXNlciwgMC4wKSBBUyBjcHUsCiAgICAgICAgIENPQUxFU0NFKGJ5dGVzX2luLCAwLjApIEFTIG5ldF9pbiwKICAgICAgICAgQ09BTEVTQ0UoYnl0ZXNfb3V0LCAwLjApIEFTIG5ldF9vdXQKICBGUk9NIG1nYmVuY2gubG9nczEKICBXSEVSRSBtYWNoaW5lX25hbWUgSU4gKCdhbmFuc2knLCdhcmFnb2cnLCd1cmQnKQogICAgQU5EIGxvZ190aW1lID49IFRJTUVTVEFNUCAnMjAxNy0wMS0xMSAwMDowMDowMCcKKSBBUyByCkdST1VQIEJZIG1hY2hpbmVfbmFtZQ=="},"example"),"."))}g.isMDXComponent=!0}}]);