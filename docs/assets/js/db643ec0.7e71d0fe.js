"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[72875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,w=u["".concat(o,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(w,l(l({ref:t},p),{},{components:a})):n.createElement(w,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={slug:"/en/sql-reference/statements/create/view",sidebar_position:37,sidebar_label:"VIEW"},l="CREATE VIEW",s={unversionedId:"en/sql-reference/statements/create/view",id:"en/sql-reference/statements/create/view",title:"CREATE VIEW",description:"Creates a new view. Views can be normal, materialized, live, and window (live view and window view are experimental features).",source:"@site/docs/en/sql-reference/statements/create/view.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/view",permalink:"/docs/en/sql-reference/statements/create/view",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/view.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/en/sql-reference/statements/create/view",sidebar_position:37,sidebar_label:"VIEW"},sidebar:"english",previous:{title:"TABLE",permalink:"/docs/en/sql-reference/statements/create/table"},next:{title:"DICTIONARY",permalink:"/docs/en/sql-reference/statements/create/dictionary"}},o={},d=[{value:"Normal View",id:"normal-view",level:2},{value:"Parameterized View",id:"parameterized-view",level:2},{value:"Materialized View",id:"materialized-view",level:2},{value:"Live View Experimental",id:"live-view-experimental",level:2},{value:"Monitoring Live View Changes",id:"monitoring-live-view-changes",level:3},{value:"Force Live View Refresh",id:"force-live-view-refresh",level:3},{value:"WITH REFRESH Clause",id:"with-refresh-clause",level:3},{value:"Live View Usage",id:"live-view-usage",level:3},{value:"Window View Experimental",id:"window-view-experimental",level:2},{value:"Time Window Functions",id:"time-window-functions",level:3},{value:"TIME ATTRIBUTES",id:"time-attributes",level:3},{value:"Monitoring New Windows",id:"monitoring-new-windows",level:3},{value:"Settings",id:"settings",level:3},{value:"Example",id:"example",level:3},{value:"Window View Usage",id:"window-view-usage",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-view"},"CREATE VIEW"),(0,i.kt)("p",null,"Creates a new view. Views can be ",(0,i.kt)("a",{parentName:"p",href:"#normal-view"},"normal"),", ",(0,i.kt)("a",{parentName:"p",href:"#materialized-view"},"materialized"),", ",(0,i.kt)("a",{parentName:"p",href:"#live-view-experimental"},"live"),", and ",(0,i.kt)("a",{parentName:"p",href:"#window-view-experimental"},"window")," (live view and window view are experimental features)."),(0,i.kt)("h2",{id:"normal-view"},"Normal View"),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE [OR REPLACE] VIEW [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster_name] AS SELECT ...\n")),(0,i.kt)("p",null,"Normal views do not store any data. They just perform a read from another table on each access. In other words, a normal view is nothing more than a saved query. When reading from a view, this saved query is used as a subquery in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/from"},"FROM")," clause."),(0,i.kt)("p",null,"As an example, assume you\u2019ve created a view:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW view AS SELECT ...\n")),(0,i.kt)("p",null,"and written a query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, c FROM view\n")),(0,i.kt)("p",null,"This query is fully equivalent to using the subquery:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, c FROM (SELECT ...)\n")),(0,i.kt)("h2",{id:"parameterized-view"},"Parameterized View"),(0,i.kt)("p",null,"Parametrized views are similar to normal views, but can be created with parameters which are not resolved immediately. These views can be used with table functions, which specify the name of the view as function name and the parameter values as its arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW view AS SELECT * FROM TABLE WHERE Column1={column1:datatype1} and Column2={column2:datatype2} ...\n")),(0,i.kt)("p",null,"The above creates a view for table which can be used as table function by substituting parameters as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM view(column1=value1, column2=value2 ...)\n")),(0,i.kt)("h2",{id:"materialized-view"},"Materialized View"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW [IF NOT EXISTS] [db.]table_name [ON CLUSTER] [TO[db.]name] [ENGINE = engine] [POPULATE] AS SELECT ...\n")),(0,i.kt)("p",null,"Materialized views store data transformed by the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/"},"SELECT")," query."),(0,i.kt)("p",null,"When creating a materialized view without ",(0,i.kt)("inlineCode",{parentName:"p"},"TO [db].[table]"),", you must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ENGINE")," \u2013 the table engine for storing data."),(0,i.kt)("p",null,"When creating a materialized view with ",(0,i.kt)("inlineCode",{parentName:"p"},"TO [db].[table]"),", you must not use ",(0,i.kt)("inlineCode",{parentName:"p"},"POPULATE"),"."),(0,i.kt)("p",null,"A materialized view is implemented as follows: when inserting data to the table specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),", part of the inserted data is converted by this ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, and the result is inserted in the view."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Materialized views in ClickHouse use ",(0,i.kt)("strong",{parentName:"p"},"column names")," instead of column order during insertion into destination table. If some column names are not present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query result, ClickHouse uses a default value, even if the column is not ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),". A safe practice would be to add aliases for every column when using Materialized views."),(0,i.kt)("p",{parentName:"div"},"Materialized views in ClickHouse are implemented more like insert triggers. If there\u2019s some aggregation in the view query, it\u2019s applied only to the batch of freshly inserted data. Any changes to existing data of source table (like update, delete, drop partition, etc.) does not change the materialized view."))),(0,i.kt)("p",null,"If you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"POPULATE"),", the existing table data is inserted into the view when creating it, as if making a ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE ... AS SELECT ...")," . Otherwise, the query contains only the data inserted in the table after creating the view. We ",(0,i.kt)("strong",{parentName:"p"},"do not recommend")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"POPULATE"),", since data inserted in the table during the view creation will not be inserted in it."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query can contain ",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT"),". Note that the corresponding conversions are performed independently on each block of inserted data. For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," is set, data is aggregated during insertion, but only within a single packet of inserted data. The data won\u2019t be further aggregated. The exception is when using an ",(0,i.kt)("inlineCode",{parentName:"p"},"ENGINE")," that independently performs data aggregation, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree"),"."),(0,i.kt)("p",null,"The execution of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/view"},"ALTER")," queries on materialized views has limitations, for example, you can not update the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, so this might be inconvenient. If the materialized view uses the construction ",(0,i.kt)("inlineCode",{parentName:"p"},"TO [db.]name"),", you can ",(0,i.kt)("inlineCode",{parentName:"p"},"DETACH")," the view, run ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER")," for the target table, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"ATTACH")," the previously detached (",(0,i.kt)("inlineCode",{parentName:"p"},"DETACH"),") view."),(0,i.kt)("p",null,"Note that materialized view is influenced by ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize-on-insert"},"optimize_on_insert")," setting. The data is merged before the insertion into a view."),(0,i.kt)("p",null,"Views look the same as normal tables. For example, they are listed in the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," query."),(0,i.kt)("p",null,"To delete a view, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/drop#drop-view"},"DROP VIEW"),". Although ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," works for VIEWs as well."),(0,i.kt)("h2",{id:"live-view-experimental"},"Live View ","[Experimental]"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable usage of live views and ",(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query using ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#allow-experimental-live-view"},"allow_experimental_live_view")," setting. Input the command ",(0,i.kt)("inlineCode",{parentName:"p"},"set allow_experimental_live_view = 1"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW [IF NOT EXISTS] [db.]table_name [WITH [TIMEOUT [value_in_sec] [AND]] [REFRESH [value_in_sec]]] AS SELECT ...\n")),(0,i.kt)("p",null,"Live views store result of the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/"},"SELECT")," query and are updated any time the result of the query changes. Query result as well as partial result needed to combine with new data are stored in memory providing increased performance for repeated queries. Live views can provide push notifications when query result changes using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/watch"},"WATCH")," query."),(0,i.kt)("p",null,"Live views are triggered by insert into the innermost table specified in the query."),(0,i.kt)("p",null,"Live views work similarly to how a query in a distributed table works. But instead of combining partial results from different servers they combine partial result from current data with partial result from the new data. When a live view query includes a subquery then the cached partial result is only stored for the innermost subquery."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/table-functions/"},"Table function")," is not supported as the innermost table."),(0,i.kt)("li",{parentName:"ul"},"Tables that do not have inserts such as a ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/dictionaries/"},"dictionary"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/system-tables/"},"system table"),", a ",(0,i.kt)("a",{parentName:"li",href:"#normal"},"normal view"),", or a ",(0,i.kt)("a",{parentName:"li",href:"#materialized"},"materialized view")," will not trigger a live view."),(0,i.kt)("li",{parentName:"ul"},"Only queries where one can combine partial result from the old data plus partial result from the new data will work. Live view will not work for queries that require the complete data set to compute the final result or aggregations where the state of the aggregation must be preserved."),(0,i.kt)("li",{parentName:"ul"},"Does not work with replicated or distributed tables where inserts are performed on different nodes."),(0,i.kt)("li",{parentName:"ul"},"Can't be triggered by multiple tables.")),(0,i.kt)("p",{parentName:"div"},"See ",(0,i.kt)("a",{parentName:"p",href:"#live-view-with-refresh"},"WITH REFRESH")," to force periodic updates of a live view that in some cases can be used as a workaround."))),(0,i.kt)("h3",{id:"monitoring-live-view-changes"},"Monitoring Live View Changes"),(0,i.kt)("p",null,"You can monitor changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"LIVE VIEW")," query result using ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/watch"},"WATCH")," query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mt (x Int8) Engine = MergeTree ORDER BY x;\nCREATE LIVE VIEW lv AS SELECT sum(x) FROM mt;\n")),(0,i.kt)("p",null,"Watch a live view while doing a parallel insert into the source table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH lv;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500sum(x)\u2500\u252c\u2500_version\u2500\u2510\n\u2502      1 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500sum(x)\u2500\u252c\u2500_version\u2500\u2510\n\u2502      3 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500sum(x)\u2500\u252c\u2500_version\u2500\u2510\n\u2502      6 \u2502        3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mt VALUES (1);\nINSERT INTO mt VALUES (2);\nINSERT INTO mt VALUES (3);\n")),(0,i.kt)("p",null,"Or add ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/watch#events-clause"},"EVENTS")," clause to just get change events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]live_view EVENTS;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH lv EVENTS;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500version\u2500\u2510\n\u2502       1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500version\u2500\u2510\n\u2502       2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500version\u2500\u2510\n\u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"You can execute ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/"},"SELECT")," query on a live view in the same way as for any regular view or a table. If the query result is cached it will return the result immediately without running the stored query on the underlying tables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM [db.]live_view WHERE ...\n")),(0,i.kt)("h3",{id:"force-live-view-refresh"},"Force Live View Refresh"),(0,i.kt)("p",null,"You can force live view refresh using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER LIVE VIEW [db.]table_name REFRESH")," statement."),(0,i.kt)("h3",{id:"with-refresh-clause"},"WITH REFRESH Clause"),(0,i.kt)("p",null,"When a live view is created with a ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH REFRESH")," clause then it will be automatically refreshed after the specified number of seconds elapse since the last refresh or trigger."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW [db.]table_name WITH REFRESH [value_in_sec] AS SELECT ...\n")),(0,i.kt)("p",null,"If the refresh value is not specified then the value specified by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#periodic-live-view-refresh"},"periodic_live_view_refresh")," setting is used."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE LIVE VIEW lv WITH REFRESH 5 AS SELECT now();\nWATCH lv\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 08:47:05 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 08:47:10 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500now()\u2500\u252c\u2500_version\u2500\u2510\n\u2502 2021-02-21 08:47:15 \u2502        3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH lv\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Code: 60. DB::Exception: Received from localhost:9000. DB::Exception: Table default.lv does not exist..\n")),(0,i.kt)("h3",{id:"live-view-usage"},"Live View Usage"),(0,i.kt)("p",null,"Most common uses of live view tables include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Providing push notifications for query result changes to avoid polling."),(0,i.kt)("li",{parentName:"ul"},"Caching results of most frequent queries to provide immediate query results."),(0,i.kt)("li",{parentName:"ul"},"Watching for table changes and triggering a follow-up select queries."),(0,i.kt)("li",{parentName:"ul"},"Watching metrics from system tables using periodic refresh.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/alter/view#alter-live-view"},"ALTER LIVE VIEW"))),(0,i.kt)("h2",{id:"window-view-experimental"},"Window View ","[Experimental]"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is an experimental feature that may change in backwards-incompatible ways in the future releases. Enable usage of window views and ",(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query using ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#allow-experimental-window-view"},"allow_experimental_window_view")," setting. Input the command ",(0,i.kt)("inlineCode",{parentName:"p"},"set allow_experimental_window_view = 1"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW [IF NOT EXISTS] [db.]table_name [TO [db.]table_name] [INNER ENGINE engine] [ENGINE engine] [WATERMARK strategy] [ALLOWED_LATENESS interval_function] [POPULATE] AS SELECT ... GROUP BY time_window_function\n")),(0,i.kt)("p",null,"Window view can aggregate data by time window and output the results when the window is ready to fire. It stores the partial aggregation results in an inner(or specified) table to reduce latency and can push the processing result to a specified table or push notifications using the WATCH query."),(0,i.kt)("p",null,"Creating a window view is similar to creating ",(0,i.kt)("inlineCode",{parentName:"p"},"MATERIALIZED VIEW"),". Window view needs an inner storage engine to store intermediate data. The inner storage can be specified by using ",(0,i.kt)("inlineCode",{parentName:"p"},"INNER ENGINE")," clause, the window view will use ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," as the default inner engine."),(0,i.kt)("p",null,"When creating a window view without ",(0,i.kt)("inlineCode",{parentName:"p"},"TO [db].[table]"),", you must specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ENGINE")," \u2013 the table engine for storing data."),(0,i.kt)("h3",{id:"time-window-functions"},"Time Window Functions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/time-window-functions"},"Time window functions")," are used to get the lower and upper window bound of records. The window view needs to be used with a time window function."),(0,i.kt)("h3",{id:"time-attributes"},"TIME ATTRIBUTES"),(0,i.kt)("p",null,"Window view supports ",(0,i.kt)("strong",{parentName:"p"},"processing time")," and ",(0,i.kt)("strong",{parentName:"p"},"event time")," process."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Processing time")," allows window view to produce results based on the local machine's time and is used by default. It is the most straightforward notion of time but does not provide determinism. The processing time attribute can be defined by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"time_attr")," of the time window function to a table column or using the function ",(0,i.kt)("inlineCode",{parentName:"p"},"now()"),". The following query creates a window view with processing time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW wv AS SELECT count(number), tumbleStart(w_id) as w_start from date GROUP BY tumble(now(), INTERVAL '5' SECOND) as w_id\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Event time")," is the time that each individual event occurred on its producing device. This time is typically embedded within the records when it is generated. Event time processing allows for consistent results even in case of out-of-order events or late events. Window view supports event time processing by using ",(0,i.kt)("inlineCode",{parentName:"p"},"WATERMARK")," syntax."),(0,i.kt)("p",null,"Window view provides three watermark strategies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"STRICTLY_ASCENDING"),": Emits a watermark of the maximum observed timestamp so far. Rows that have a timestamp smaller to the max timestamp are not late."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ASCENDING"),": Emits a watermark of the maximum observed timestamp so far minus 1. Rows that have a timestamp equal and smaller to the max timestamp are not late."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BOUNDED"),": WATERMARK=INTERVAL. Emits watermarks, which are the maximum observed timestamp minus the specified delay.")),(0,i.kt)("p",null,"The following queries are examples of creating a window view with ",(0,i.kt)("inlineCode",{parentName:"p"},"WATERMARK"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW wv WATERMARK=STRICTLY_ASCENDING AS SELECT count(number) FROM date GROUP BY tumble(timestamp, INTERVAL '5' SECOND);\nCREATE WINDOW VIEW wv WATERMARK=ASCENDING AS SELECT count(number) FROM date GROUP BY tumble(timestamp, INTERVAL '5' SECOND);\nCREATE WINDOW VIEW wv WATERMARK=INTERVAL '3' SECOND AS SELECT count(number) FROM date GROUP BY tumble(timestamp, INTERVAL '5' SECOND);\n")),(0,i.kt)("p",null,"By default, the window will be fired when the watermark comes, and elements that arrived behind the watermark will be dropped. Window view supports late event processing by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"ALLOWED_LATENESS=INTERVAL"),". An example of lateness handling is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW test.wv TO test.dst WATERMARK=ASCENDING ALLOWED_LATENESS=INTERVAL '2' SECOND AS SELECT count(a) AS count, tumbleEnd(wid) AS w_end FROM test.mt GROUP BY tumble(timestamp, INTERVAL '5' SECOND) AS wid;\n")),(0,i.kt)("p",null,"Note that elements emitted by a late firing should be treated as updated results of a previous computation. Instead of firing at the end of windows, the window view will fire immediately when the late event arrives. Thus, it will result in multiple outputs for the same window. Users need to take these duplicated results into account or deduplicate them."),(0,i.kt)("p",null,"You can modify ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query that was specified in the window view by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE \u2026 MODIFY QUERY")," statement. The data structure resulting in a new ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query should be the same as the original ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query when with or without ",(0,i.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," clause. Note that the data in the current window will be lost because the intermediate state cannot be reused."),(0,i.kt)("h3",{id:"monitoring-new-windows"},"Monitoring New Windows"),(0,i.kt)("p",null,"Window view supports the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/watch"},"WATCH")," query to monitoring changes, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"TO")," syntax to output the results to a table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH [db.]window_view\n[EVENTS]\n[LIMIT n]\n[FORMAT format]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query acts similar as in ",(0,i.kt)("inlineCode",{parentName:"p"},"LIVE VIEW"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT")," can be specified to set the number of updates to receive before terminating the query. The ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENTS")," clause can be used to obtain a short form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query where instead of the query result you will just get the latest query watermark."),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window_view_clean_interval"),": The clean interval of window view in seconds to free outdated data. The system will retain the windows that have not been fully triggered according to the system time or ",(0,i.kt)("inlineCode",{parentName:"li"},"WATERMARK")," configuration, and the other data will be deleted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window_view_heartbeat_interval"),": The heartbeat interval in seconds to indicate the watch query is alive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wait_for_window_view_fire_signal_timeout"),": Timeout for waiting for window view fire signal in event time processing.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Suppose we need to count the number of click logs per 10 seconds in a log table called ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", and its table structure is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE data ( `id` UInt64, `timestamp` DateTime) ENGINE = Memory;\n")),(0,i.kt)("p",null,"First, we create a window view with tumble window of 10 seconds interval:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW wv as select count(id), tumbleStart(w_id) as window_start from data group by tumble(timestamp, INTERVAL '10' SECOND) as w_id\n")),(0,i.kt)("p",null,"Then, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query to get the results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH wv\n")),(0,i.kt)("p",null,"When logs are inserted into table ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),","),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO data VALUES(1,now())\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WATCH")," query should print the results as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count(id)\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500window_start\u2500\u2510\n\u2502         1 \u2502 2020-01-14 16:56:40 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Alternatively, we can attach the output to another table using ",(0,i.kt)("inlineCode",{parentName:"p"},"TO")," syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE WINDOW VIEW wv TO dst AS SELECT count(id), tumbleStart(w_id) as window_start FROM data GROUP BY tumble(timestamp, INTERVAL '10' SECOND) as w_id\n")),(0,i.kt)("p",null,"Additional examples can be found among stateful tests of ClickHouse (they are named ",(0,i.kt)("inlineCode",{parentName:"p"},"*window_view*")," there)."),(0,i.kt)("h3",{id:"window-view-usage"},"Window View Usage"),(0,i.kt)("p",null,"The window view is useful in the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring"),": Aggregate and calculate the metrics logs by time, and output the results to a target table. The dashboard can use the target table as a source table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Analyzing"),": Automatically aggregate and preprocess data in the time window. This can be useful when analyzing a large number of logs. The preprocessing eliminates repeated calculations in multiple queries and reduces query latency.")))}m.isMDXComponent=!0}}]);