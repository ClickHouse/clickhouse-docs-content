"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59445],{3905:(e,n,t)=>{t.d(n,{Zo:()=>_,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},E=Object.keys(e);for(a=0;a<E.length;a++)t=E[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(e);for(a=0;a<E.length;a++)t=E[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var R=a.createContext({}),N=function(e){var n=a.useContext(R),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},_=function(e){var n=N(e.components);return a.createElement(R.Provider,{value:n},e.children)},S={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},A=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,E=e.originalType,R=e.parentName,_=O(e,["components","mdxType","originalType","parentName"]),A=N(t),s=r,T=A["".concat(R,".").concat(s)]||A[s]||S[s]||E;return t?a.createElement(T,l(l({ref:n},_),{},{components:t})):a.createElement(T,l({ref:n},_))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var E=t.length,l=new Array(E);l[0]=A;var O={};for(var R in n)hasOwnProperty.call(n,R)&&(O[R]=n[R]);O.originalType=e,O.mdxType="string"==typeof e?e:r,l[1]=O;for(var N=2;N<E;N++)l[N]=t[N];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}A.displayName="MDXCreateElement"},4766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>R,contentTitle:()=>l,default:()=>S,frontMatter:()=>E,metadata:()=>O,toc:()=>N});var a=t(87462),r=(t(67294),t(3905));const E={slug:"/zh/getting-started/example-datasets/star-schema",sidebar_position:16,sidebar_label:"Star Schema Benchmark"},l="Star Schema Benchmark",O={unversionedId:"zh/getting-started/example-datasets/star-schema",id:"zh/getting-started/example-datasets/star-schema",title:"Star Schema Benchmark",description:"star-schema-benchmark}",source:"@site/docs/zh/getting-started/example-datasets/star-schema.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/star-schema",permalink:"/docs/zh/getting-started/example-datasets/star-schema",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/star-schema.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{slug:"/zh/getting-started/example-datasets/star-schema",sidebar_position:16,sidebar_label:"Star Schema Benchmark"},sidebar:"chinese",previous:{title:"Yandex.Metrica Data",permalink:"/docs/zh/getting-started/example-datasets/metrica"},next:{title:"WikiStat",permalink:"/docs/zh/getting-started/example-datasets/wikistat"}},R={},N=[],_={toc:N};function S(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"star-schema-benchmark"},"Star Schema Benchmark"),(0,r.kt)("p",null,"\u7f16\u8bd1 dbgen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:vadimtk/ssb-dbgen.git\n$ cd ssb-dbgen\n$ make\n")),(0,r.kt)("p",null,"\u5f00\u59cb\u751f\u6210\u6570\u636e\uff1a"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u6ce8\u610f"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"-s 100"),"dbgen \u5c06\u751f\u6210 6 \u4ebf\u884c\u6570\u636e(67GB), \u5982\u679c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"-s 1000"),"\u5b83\u4f1a\u751f\u6210 60 \u4ebf\u884c\u6570\u636e(\u8fd9\u9700\u8981\u5f88\u591a\u65f6\u95f4))"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./dbgen -s 1000 -T c\n$ ./dbgen -s 1000 -T l\n$ ./dbgen -s 1000 -T p\n")),(0,r.kt)("p",null,"\u5728 ClickHouse \u4e2d\u521b\u5efa\u6570\u636e\u8868\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE customer\n(\n        C_CUSTKEY       UInt32,\n        C_NAME          String,\n        C_ADDRESS       String,\n        C_CITY          LowCardinality(String),\n        C_NATION        LowCardinality(String),\n        C_REGION        LowCardinality(String),\n        C_PHONE         String,\n        C_MKTSEGMENT    LowCardinality(String)\n)\nENGINE = MergeTree ORDER BY (C_CUSTKEY);\n\nCREATE TABLE lineorder\n(\n    LO_ORDERKEY             UInt32,\n    LO_LINENUMBER           UInt8,\n    LO_CUSTKEY              UInt32,\n    LO_PARTKEY              UInt32,\n    LO_SUPPKEY              UInt32,\n    LO_ORDERDATE            Date,\n    LO_ORDERPRIORITY        LowCardinality(String),\n    LO_SHIPPRIORITY         UInt8,\n    LO_QUANTITY             UInt8,\n    LO_EXTENDEDPRICE        UInt32,\n    LO_ORDTOTALPRICE        UInt32,\n    LO_DISCOUNT             UInt8,\n    LO_REVENUE              UInt32,\n    LO_SUPPLYCOST           UInt32,\n    LO_TAX                  UInt8,\n    LO_COMMITDATE           Date,\n    LO_SHIPMODE             LowCardinality(String)\n)\nENGINE = MergeTree PARTITION BY toYear(LO_ORDERDATE) ORDER BY (LO_ORDERDATE, LO_ORDERKEY);\n\nCREATE TABLE part\n(\n        P_PARTKEY       UInt32,\n        P_NAME          String,\n        P_MFGR          LowCardinality(String),\n        P_CATEGORY      LowCardinality(String),\n        P_BRAND         LowCardinality(String),\n        P_COLOR         LowCardinality(String),\n        P_TYPE          LowCardinality(String),\n        P_SIZE          UInt8,\n        P_CONTAINER     LowCardinality(String)\n)\nENGINE = MergeTree ORDER BY P_PARTKEY;\n\nCREATE TABLE supplier\n(\n        S_SUPPKEY       UInt32,\n        S_NAME          String,\n        S_ADDRESS       String,\n        S_CITY          LowCardinality(String),\n        S_NATION        LowCardinality(String),\n        S_REGION        LowCardinality(String),\n        S_PHONE         String\n)\nENGINE = MergeTree ORDER BY S_SUPPKEY;\n")),(0,r.kt)("p",null,"\u5199\u5165\u6570\u636e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-client --query "INSERT INTO customer FORMAT CSV" < customer.tbl\n$ clickhouse-client --query "INSERT INTO part FORMAT CSV" < part.tbl\n$ clickhouse-client --query "INSERT INTO supplier FORMAT CSV" < supplier.tbl\n$ clickhouse-client --query "INSERT INTO lineorder FORMAT CSV" < lineorder.tbl\n')),(0,r.kt)("p",null,"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"star schema"),"\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"flat schema"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_memory_usage = 20000000000;\n\nCREATE TABLE lineorder_flat\nENGINE = MergeTree ORDER BY (LO_ORDERDATE, LO_ORDERKEY)\nAS SELECT\n    l.LO_ORDERKEY AS LO_ORDERKEY,\n    l.LO_LINENUMBER AS LO_LINENUMBER,\n    l.LO_CUSTKEY AS LO_CUSTKEY,\n    l.LO_PARTKEY AS LO_PARTKEY,\n    l.LO_SUPPKEY AS LO_SUPPKEY,\n    l.LO_ORDERDATE AS LO_ORDERDATE,\n    l.LO_ORDERPRIORITY AS LO_ORDERPRIORITY,\n    l.LO_SHIPPRIORITY AS LO_SHIPPRIORITY,\n    l.LO_QUANTITY AS LO_QUANTITY,\n    l.LO_EXTENDEDPRICE AS LO_EXTENDEDPRICE,\n    l.LO_ORDTOTALPRICE AS LO_ORDTOTALPRICE,\n    l.LO_DISCOUNT AS LO_DISCOUNT,\n    l.LO_REVENUE AS LO_REVENUE,\n    l.LO_SUPPLYCOST AS LO_SUPPLYCOST,\n    l.LO_TAX AS LO_TAX,\n    l.LO_COMMITDATE AS LO_COMMITDATE,\n    l.LO_SHIPMODE AS LO_SHIPMODE,\n    c.C_NAME AS C_NAME,\n    c.C_ADDRESS AS C_ADDRESS,\n    c.C_CITY AS C_CITY,\n    c.C_NATION AS C_NATION,\n    c.C_REGION AS C_REGION,\n    c.C_PHONE AS C_PHONE,\n    c.C_MKTSEGMENT AS C_MKTSEGMENT,\n    s.S_NAME AS S_NAME,\n    s.S_ADDRESS AS S_ADDRESS,\n    s.S_CITY AS S_CITY,\n    s.S_NATION AS S_NATION,\n    s.S_REGION AS S_REGION,\n    s.S_PHONE AS S_PHONE,\n    p.P_NAME AS P_NAME,\n    p.P_MFGR AS P_MFGR,\n    p.P_CATEGORY AS P_CATEGORY,\n    p.P_BRAND AS P_BRAND,\n    p.P_COLOR AS P_COLOR,\n    p.P_TYPE AS P_TYPE,\n    p.P_SIZE AS P_SIZE,\n    p.P_CONTAINER AS P_CONTAINER\nFROM lineorder AS l\nINNER JOIN customer AS c ON c.C_CUSTKEY = l.LO_CUSTKEY\nINNER JOIN supplier AS s ON s.S_SUPPKEY = l.LO_SUPPKEY\nINNER JOIN part AS p ON p.P_PARTKEY = l.LO_PARTKEY;\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u67e5\u8be2:"),(0,r.kt)("p",null,"Q1.1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE toYear(LO_ORDERDATE) = 1993 AND LO_DISCOUNT BETWEEN 1 AND 3 AND LO_QUANTITY < 25;\n")),(0,r.kt)("p",null,"Q1.2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE toYYYYMM(LO_ORDERDATE) = 199401 AND LO_DISCOUNT BETWEEN 4 AND 6 AND LO_QUANTITY BETWEEN 26 AND 35;\n")),(0,r.kt)("p",null,"Q1.3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(LO_EXTENDEDPRICE * LO_DISCOUNT) AS revenue\nFROM lineorder_flat\nWHERE toISOWeek(LO_ORDERDATE) = 6 AND toYear(LO_ORDERDATE) = 1994\n  AND LO_DISCOUNT BETWEEN 5 AND 7 AND LO_QUANTITY BETWEEN 26 AND 35;\n")),(0,r.kt)("p",null,"Q2.1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(LO_REVENUE),\n    toYear(LO_ORDERDATE) AS year,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_CATEGORY = 'MFGR#12' AND S_REGION = 'AMERICA'\nGROUP BY\n    year,\n    P_BRAND\nORDER BY\n    year,\n    P_BRAND;\n")),(0,r.kt)("p",null,"Q2.2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(LO_REVENUE),\n    toYear(LO_ORDERDATE) AS year,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND >= 'MFGR#2221' AND P_BRAND <= 'MFGR#2228' AND S_REGION = 'ASIA'\nGROUP BY\n    year,\n    P_BRAND\nORDER BY\n    year,\n    P_BRAND;\n")),(0,r.kt)("p",null,"Q2.3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(LO_REVENUE),\n    toYear(LO_ORDERDATE) AS year,\n    P_BRAND\nFROM lineorder_flat\nWHERE P_BRAND = 'MFGR#2239' AND S_REGION = 'EUROPE'\nGROUP BY\n    year,\n    P_BRAND\nORDER BY\n    year,\n    P_BRAND;\n")),(0,r.kt)("p",null,"Q3.1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_NATION,\n    S_NATION,\n    toYear(LO_ORDERDATE) AS year,\n    sum(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_REGION = 'ASIA' AND S_REGION = 'ASIA' AND year >= 1992 AND year <= 1997\nGROUP BY\n    C_NATION,\n    S_NATION,\n    year\nORDER BY\n    year ASC,\n    revenue DESC;\n")),(0,r.kt)("p",null,"Q3.2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_CITY,\n    S_CITY,\n    toYear(LO_ORDERDATE) AS year,\n    sum(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE C_NATION = 'UNITED STATES' AND S_NATION = 'UNITED STATES' AND year >= 1992 AND year <= 1997\nGROUP BY\n    C_CITY,\n    S_CITY,\n    year\nORDER BY\n    year ASC,\n    revenue DESC;\n")),(0,r.kt)("p",null,"Q3.3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_CITY,\n    S_CITY,\n    toYear(LO_ORDERDATE) AS year,\n    sum(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE (C_CITY = 'UNITED KI1' OR C_CITY = 'UNITED KI5') AND (S_CITY = 'UNITED KI1' OR S_CITY = 'UNITED KI5') AND year >= 1992 AND year <= 1997\nGROUP BY\n    C_CITY,\n    S_CITY,\n    year\nORDER BY\n    year ASC,\n    revenue DESC;\n")),(0,r.kt)("p",null,"Q3.4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    C_CITY,\n    S_CITY,\n    toYear(LO_ORDERDATE) AS year,\n    sum(LO_REVENUE) AS revenue\nFROM lineorder_flat\nWHERE (C_CITY = 'UNITED KI1' OR C_CITY = 'UNITED KI5') AND (S_CITY = 'UNITED KI1' OR S_CITY = 'UNITED KI5') AND toYYYYMM(LO_ORDERDATE) = 199712\nGROUP BY\n    C_CITY,\n    S_CITY,\n    year\nORDER BY\n    year ASC,\n    revenue DESC;\n")),(0,r.kt)("p",null,"Q4.1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toYear(LO_ORDERDATE) AS year,\n    C_NATION,\n    sum(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND (P_MFGR = 'MFGR#1' OR P_MFGR = 'MFGR#2')\nGROUP BY\n    year,\n    C_NATION\nORDER BY\n    year ASC,\n    C_NATION ASC;\n")),(0,r.kt)("p",null,"Q4.2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toYear(LO_ORDERDATE) AS year,\n    S_NATION,\n    P_CATEGORY,\n    sum(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE C_REGION = 'AMERICA' AND S_REGION = 'AMERICA' AND (year = 1997 OR year = 1998) AND (P_MFGR = 'MFGR#1' OR P_MFGR = 'MFGR#2')\nGROUP BY\n    year,\n    S_NATION,\n    P_CATEGORY\nORDER BY\n    year ASC,\n    S_NATION ASC,\n    P_CATEGORY ASC;\n")),(0,r.kt)("p",null,"Q4.3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    toYear(LO_ORDERDATE) AS year,\n    S_CITY,\n    P_BRAND,\n    sum(LO_REVENUE - LO_SUPPLYCOST) AS profit\nFROM lineorder_flat\nWHERE S_NATION = 'UNITED STATES' AND (year = 1997 OR year = 1998) AND P_CATEGORY = 'MFGR#14'\nGROUP BY\n    year,\n    S_CITY,\n    P_BRAND\nORDER BY\n    year ASC,\n    S_CITY ASC,\n    P_BRAND ASC;\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/example_datasets/star_schema/"},"\u539f\u59cb\u6587\u7ae0")," "))}S.isMDXComponent=!0}}]);