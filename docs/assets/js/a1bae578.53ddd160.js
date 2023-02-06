"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[65917],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,b=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"Table Materializations",sidebar_position:5,slug:"/en/integrations/dbt/dbt-table-model",description:"Table materializations with dbt and ClickHouse"},o=void 0,s={unversionedId:"en/integrations/data-ingestion/etl-tools/dbt/dbt-table-model",id:"en/integrations/data-ingestion/etl-tools/dbt/dbt-table-model",title:"dbt-table-model",description:"Table materializations with dbt and ClickHouse",source:"@site/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-table-model.md",sourceDirName:"en/integrations/data-ingestion/etl-tools/dbt",slug:"/en/integrations/dbt/dbt-table-model",permalink:"/docs/en/integrations/dbt/dbt-table-model",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-ingestion/etl-tools/dbt/dbt-table-model.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Table Materializations",sidebar_position:5,slug:"/en/integrations/dbt/dbt-table-model",description:"Table materializations with dbt and ClickHouse"},sidebar:"english",previous:{title:"View Materializations",permalink:"/docs/en/integrations/dbt/dbt-view-model"},next:{title:"Incremental Materializations",permalink:"/docs/en/integrations/dbt/dbt-incremental-model"}},l={},m=[{value:"Creating a Table Materialization",id:"creating-a-table-materialization",level:2}],d={toc:m},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-a-table-materialization"},"Creating a Table Materialization"),(0,r.kt)("p",null,"In the previous example, our model was materialized as a view. While this might offer sufficient performance for some queries, more complex SELECTs or frequently executed queries may be better materialized as a table.  This materialization is useful for models that will be queried by BI tools to ensure users have a faster experience. This effectively causes the query results to be stored as a new table, with the associated storage overheads - effectively, an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT TO SELECT")," is executed. Note that this table will be reconstructed each time i.e., it is not incremental. Large result sets may therefore result in long execution times - see ",(0,r.kt)("a",{parentName:"p",href:"./dbt-limitations"},"dbt Limitations"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the file ",(0,r.kt)("inlineCode",{parentName:"p"},"actors_summary.sql")," such that the ",(0,r.kt)("inlineCode",{parentName:"p"},"materialized")," parameter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),". Notice how ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," is defined, and notice we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MergeTree")," table engine:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{ config(order_by='(updated_at, id, name)', engine='MergeTree()', materialized='table') }}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("inlineCode",{parentName:"p"},"imdb")," directory execute the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt run"),". This execution may take a little longer to execute - around 10s on most machines."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-user@clickhouse:~/imdb$ dbt run\n15:13:27  Running with dbt=1.1.0\n15:13:27  Found 1 model, 0 tests, 1 snapshot, 0 analyses, 181 macros, 0 operations, 0 seed files, 6 sources, 0 exposures, 0 metrics\n15:13:27\n15:13:28  Concurrency: 1 threads (target='dev')\n15:13:28\n15:13:28  1 of 1 START table model imdb_dbt.actor_summary................................. [RUN]\n15:13:37  1 of 1 OK created table model imdb_dbt.actor_summary............................ [OK in 9.22s]\n15:13:37\n15:13:37  Finished running 1 table model in 10.20s.\n15:13:37\n15:13:37  Completed successfully\n15:13:37\n15:13:37  Done. PASS=1 WARN=0 ERROR=0 SKIP=0 TOTAL=1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the creation of the table ",(0,r.kt)("inlineCode",{parentName:"p"},"imdb_dbt.actor_summary"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE imdb_dbt.actor_summary;\n")),(0,r.kt)("p",{parentName:"li"},"You should the table with the appropriate data types:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+----------------------------------------\n|statement\n+----------------------------------------\n|CREATE TABLE imdb_dbt.actor_summary\n|(\n|`id` UInt32,\n|`first_name` String,\n|`last_name` String,\n|`num_movies` UInt64,\n|`updated_at` DateTime\n|)\n|ENGINE = MergeTree\n|ORDER BY (id, first_name, last_name)\n|SETTINGS index_granularity = 8192\n+----------------------------------------\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the results from this table are consistent with previous responses. Notice an appreciable improvement in the response time now that the model is a table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary ORDER BY num_movies DESC LIMIT 5;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"+------+------------+----------+------------------+------+---------+-------------------+\n|id    |name        |num_movies|avg_rank          |genres|directors|updated_at         |\n+------+------------+----------+------------------+------+---------+-------------------+\n|45332 |Mel Blanc   |832       |6.175853582979779 |18    |84       |2022-04-26 15:26:55|\n|621468|Bess Flowers|659       |5.57727638854796  |19    |293      |2022-04-26 15:26:57|\n|372839|Lee Phelps  |527       |5.032976449684617 |18    |261      |2022-04-26 15:26:56|\n|283127|Tom London  |525       |2.8721716524875673|17    |203      |2022-04-26 15:26:56|\n|356804|Bud Osborne |515       |2.0389507108727773|15    |149      |2022-04-26 15:26:56|\n+------+------------+----------+------------------+------+---------+-------------------+\n")),(0,r.kt)("p",{parentName:"li"},"Feel free to issue other queries against this model. For example, which actors have the highest ranking movies with more than 5 appearances?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM imdb_dbt.actor_summary WHERE num_movies > 5 ORDER BY avg_rank  DESC LIMIT 10;\n")))))}p.isMDXComponent=!0}}]);