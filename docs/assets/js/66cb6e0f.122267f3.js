"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[98813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},E=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(n),E=a,v=p["".concat(c,".").concat(E)]||p[E]||u[E]||s;return n?r.createElement(v,i(i({ref:t},m),{},{components:n})):r.createElement(v,i({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=E;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}E.displayName="MDXCreateElement"},19200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/sql-reference/statements/alter/view",sidebar_position:50,sidebar_label:"VIEW"},i="ALTER TABLE \u2026 MODIFY QUERY Statement",o={unversionedId:"en/sql-reference/statements/alter/view",id:"en/sql-reference/statements/alter/view",title:"ALTER TABLE \u2026 MODIFY QUERY Statement",description:"You can modify SELECT query that was specified when a materialized view was created with the ALTER TABLE \u2026 MODIFY QUERY statement without interrupting ingestion process.",source:"@site/docs/en/sql-reference/statements/alter/view.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/view",permalink:"/docs/en/sql-reference/statements/alter/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/alter/view.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/en/sql-reference/statements/alter/view",sidebar_position:50,sidebar_label:"VIEW"},sidebar:"sqlreference",previous:{title:"PROJECTION",permalink:"/docs/en/sql-reference/statements/alter/projection"},next:{title:"COMMENT",permalink:"/docs/en/sql-reference/statements/alter/comment"}},c={},l=[{value:"ALTER LIVE VIEW Statement",id:"alter-live-view-statement",level:2}],m={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-table--modify-query-statement"},"ALTER TABLE \u2026 MODIFY QUERY Statement"),(0,a.kt)("p",null,"You can modify ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," query that was specified when a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#materialized"},"materialized view")," was created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE \u2026 MODIFY QUERY")," statement without interrupting ingestion process. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"allow_experimental_alter_materialized_view_structure")," setting must be enabled. "),(0,a.kt)("p",null,"This command is created to change materialized view created with ",(0,a.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," clause. It does not change the structure of the underling storage table and it does not change the columns' definition of the materialized view, because of this the application of this command is very limited for materialized views are created without ",(0,a.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," clause."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example with TO table")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE events (ts DateTime, event_type String) \nENGINE = MergeTree ORDER BY (event_type, ts);\n\nCREATE TABLE events_by_day (ts DateTime, event_type String, events_cnt UInt64) \nENGINE = SummingMergeTree ORDER BY (event_type, ts);\n\nCREATE MATERIALIZED VIEW mv TO events_by_day AS \nSELECT toStartOfDay(ts) ts, event_type, count() events_cnt\nFROM events\nGROUP BY ts, event_type; \n\nINSERT INTO events \nSELECT Date '2020-01-01' + interval number * 900 second, \n       ['imp', 'click'][number%2+1]\nFROM numbers(100);\n\nSELECT ts, event_type, sum(events_cnt)\nFROM events_by_day\nGROUP BY ts, event_type\nORDER BY ts, event_type;\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500event_type\u2500\u252c\u2500sum(events_cnt)\u2500\u2510\n\u2502 2020-01-01 00:00:00 \u2502 click      \u2502              48 \u2502\n\u2502 2020-01-01 00:00:00 \u2502 imp        \u2502              48 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 click      \u2502               2 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 imp        \u2502               2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- Let's add the new measurment `cost` \n-- and the new dimension `browser`.\n\nALTER TABLE events \n  ADD COLUMN browser String,\n  ADD COLUMN cost Float64;\n\n-- Column do not have to match in a materialized view and TO\n-- (destination table), so the next alter does not break insertion.\n\nALTER TABLE events_by_day \n    ADD COLUMN cost Float64,\n    ADD COLUMN browser String after event_type,\n    MODIFY ORDER BY (event_type, ts, browser);\n\nINSERT INTO events \nSELECT Date '2020-01-02' + interval number * 900 second, \n       ['imp', 'click'][number%2+1],\n       ['firefox', 'safary', 'chrome'][number%3+1],\n       10/(number+1)%33\nFROM numbers(100);\n\n-- New columns `browser` and `cost` are empty because we did not change Materialized View yet.\n\nSELECT ts, event_type, browser, sum(events_cnt) events_cnt, round(sum(cost),2) cost\nFROM events_by_day\nGROUP BY ts, event_type, browser\nORDER BY ts, event_type;\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500event_type\u2500\u252c\u2500browser\u2500\u252c\u2500events_cnt\u2500\u252c\u2500cost\u2500\u2510\n\u2502 2020-01-01 00:00:00 \u2502 click      \u2502         \u2502         48 \u2502    0 \u2502\n\u2502 2020-01-01 00:00:00 \u2502 imp        \u2502         \u2502         48 \u2502    0 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 click      \u2502         \u2502         50 \u2502    0 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 imp        \u2502         \u2502         50 \u2502    0 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 click      \u2502         \u2502          2 \u2502    0 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 imp        \u2502         \u2502          2 \u2502    0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSET allow_experimental_alter_materialized_view_structure=1;\n  \nALTER TABLE mv MODIFY QUERY \n  SELECT toStartOfDay(ts) ts, event_type, browser,\n  count() events_cnt,\n  sum(cost) cost\n  FROM events\n  GROUP BY ts, event_type, browser;\n\nINSERT INTO events \nSELECT Date '2020-01-03' + interval number * 900 second, \n       ['imp', 'click'][number%2+1],\n       ['firefox', 'safary', 'chrome'][number%3+1],\n       10/(number+1)%33\nFROM numbers(100);\n\nSELECT ts, event_type, browser, sum(events_cnt) events_cnt, round(sum(cost),2) cost\nFROM events_by_day\nGROUP BY ts, event_type, browser\nORDER BY ts, event_type;\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500ts\u2500\u252c\u2500event_type\u2500\u252c\u2500browser\u2500\u252c\u2500events_cnt\u2500\u252c\u2500\u2500cost\u2500\u2510\n\u2502 2020-01-01 00:00:00 \u2502 click      \u2502         \u2502         48 \u2502     0 \u2502\n\u2502 2020-01-01 00:00:00 \u2502 imp        \u2502         \u2502         48 \u2502     0 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 click      \u2502         \u2502         50 \u2502     0 \u2502\n\u2502 2020-01-02 00:00:00 \u2502 imp        \u2502         \u2502         50 \u2502     0 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 click      \u2502 firefox \u2502         16 \u2502  6.84 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 click      \u2502         \u2502          2 \u2502     0 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 click      \u2502 safary  \u2502         16 \u2502  9.82 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 click      \u2502 chrome  \u2502         16 \u2502  5.63 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 imp        \u2502         \u2502          2 \u2502     0 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 imp        \u2502 firefox \u2502         16 \u2502 15.14 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 imp        \u2502 safary  \u2502         16 \u2502  6.14 \u2502\n\u2502 2020-01-03 00:00:00 \u2502 imp        \u2502 chrome  \u2502         16 \u2502  7.89 \u2502\n\u2502 2020-01-04 00:00:00 \u2502 click      \u2502 safary  \u2502          1 \u2502   0.1 \u2502\n\u2502 2020-01-04 00:00:00 \u2502 click      \u2502 firefox \u2502          1 \u2502   0.1 \u2502\n\u2502 2020-01-04 00:00:00 \u2502 imp        \u2502 firefox \u2502          1 \u2502   0.1 \u2502\n\u2502 2020-01-04 00:00:00 \u2502 imp        \u2502 chrome  \u2502          1 \u2502   0.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n-- !!! During `MODIFY ORDER BY` PRIMARY KEY was implicitly introduced.\n\nSHOW CREATE TABLE events_by_day FORMAT TSVRaw\n\nCREATE TABLE test.events_by_day\n(\n    `ts` DateTime,\n    `event_type` String,\n    `browser` String,\n    `events_cnt` UInt64,\n    `cost` Float64\n)\nENGINE = SummingMergeTree\nPRIMARY KEY (event_type, ts)\nORDER BY (event_type, ts, browser)\nSETTINGS index_granularity = 8192\n\n-- !!! The columns' definition is unchanged but it does not matter, we are not quering \n-- MATERIALIZED VIEW, we are quering TO (storage) table.\n-- SELECT section is updated.\n\nSHOW CREATE TABLE mv FORMAT TSVRaw;\n\nCREATE MATERIALIZED VIEW test.mv TO test.events_by_day\n(\n    `ts` DateTime,\n    `event_type` String,\n    `events_cnt` UInt64\n) AS\nSELECT\n    toStartOfDay(ts) AS ts,\n    event_type,\n    browser,\n    count() AS events_cnt,\n    sum(cost) AS cost\nFROM test.events\nGROUP BY\n    ts,\n    event_type,\n    browser\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example without TO table")),(0,a.kt)("p",null,"The application is very limited because you can only change the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," section without adding new columns."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE src_table (`a` UInt32) ENGINE = MergeTree ORDER BY a;\nCREATE MATERIALIZED VIEW mv (`a` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT a FROM src_table; \nINSERT INTO src_table (a) VALUES (1), (2);\nSELECT * FROM mv;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"set allow_experimental_alter_materialized_view_structure=1;\nALTER TABLE mv MODIFY QUERY SELECT a * 2 as a FROM src_table;\nINSERT INTO src_table (a) VALUES (3), (4);\nSELECT * FROM mv;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 6 \u2502\n\u2502 8 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"alter-live-view-statement"},"ALTER LIVE VIEW Statement"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALTER LIVE VIEW ... REFRESH")," statement refreshes a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view"},"Live view"),". See ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view#live-view-alter-refresh"},"Force Live View Refresh"),"."))}u.isMDXComponent=!0}}]);