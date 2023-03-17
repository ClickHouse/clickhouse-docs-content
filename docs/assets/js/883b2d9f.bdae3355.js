"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[42003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=o(a),k=r,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/zh/operations/system-tables/tables"},i="system.tables",p={unversionedId:"zh/operations/system-tables/tables",id:"zh/operations/system-tables/tables",title:"system.tables",description:"system-tables}",source:"@site/docs/zh/operations/system-tables/tables.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/tables",permalink:"/docs/zh/operations/system-tables/tables",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/tables.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/tables"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u8868_engines",permalink:"/docs/zh/operations/system-tables/table_engines"},next:{title:"\u7cfb\u7edf\u3002text_log",permalink:"/docs/zh/operations/system-tables/text_log"}},s={},o=[],m={toc:o},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-tables"},"system.tables"),(0,r.kt)("p",null,"\u5305\u542b\u670d\u52a1\u5668\u77e5\u9053\u7684\u6bcf\u4e2a\u8868\u7684\u5143\u6570\u636e\u3002 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/detach"},"\u5206\u79bb\u7684"),"\u8868\u4e0d\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"system.tables")," \u663e\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create/table#temporary-tables"},"\u4e34\u65f6\u8868"),"\u53ea\u5728\u521b\u5efa\u5b83\u4eec\u7684\u4f1a\u8bdd\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"system.tables")," \u4e2d\u624d\u53ef\u89c1\u3002\u5b83\u4eec\u7684\u6570\u636e\u5e93\u5b57\u6bb5\u663e\u793a\u4e3a\u7a7a\uff0c\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"is_temporary")," \u6807\u5fd7\u663e\u793a\u4e3a\u5f00\u542f\u3002"),(0,r.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4ee5\u4e0b\u5217 (\u5217\u7c7b\u578b\u663e\u793a\u5728\u62ec\u53f7\u4e2d):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"database")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u540d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u540d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u5f15\u64ce\u540d (\u4e0d\u5305\u542b\u53c2\u6570)\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"is_temporary")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") - \u6307\u793a\u8868\u662f\u5426\u662f\u4e34\u65f6\u7684\u6807\u5fd7\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data_path")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u6570\u636e\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u8def\u5f84\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"metadata_path")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u5143\u6570\u636e\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u8def\u5f84\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"metadata_modification_time")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),") - \u8868\u5143\u6570\u636e\u7684\u6700\u65b0\u4fee\u6539\u65f6\u95f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dependencies_database")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) - \u6570\u636e\u5e93\u4f9d\u8d56\u5173\u7cfb\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dependencies_table")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) - \u8868\u4f9d\u8d56\u5173\u7cfb (\u57fa\u4e8e\u5f53\u524d\u8868\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/materializedview"},"\u7269\u5316\u89c6\u56fe")," \u8868) \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"create_table_query")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u7528\u4e8e\u521b\u5efa\u8868\u7684 SQL \u8bed\u53e5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"engine_full")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u5f15\u64ce\u7684\u53c2\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"as_select")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u89c6\u56fe\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"partition_key")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u4e2d\u6307\u5b9a\u7684\u5206\u533a\u952e\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sorting_key")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u4e2d\u6307\u5b9a\u7684\u6392\u5e8f\u952e\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"primary_key")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u4e2d\u6307\u5b9a\u7684\u4e3b\u952e\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sampling_key")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u4e2d\u6307\u5b9a\u7684\u91c7\u6837\u952e\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"storage_policy")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u5b58\u50a8\u7b56\u7565:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-multiple-volumes"},"MergeTree")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/distributed#distributed"},"Distributed")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"total_rows")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) - \u603b\u884c\u6570\uff0c\u5982\u679c\u65e0\u6cd5\u5feb\u901f\u786e\u5b9a\u8868\u4e2d\u7684\u786e\u5207\u884c\u6570\uff0c\u5219\u884c\u6570\u8fd4\u56de\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," (\u5305\u62ec\u5e95\u5c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," \u8868) \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"total_bytes")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) - \u603b\u5b57\u8282\u6570\uff0c\u5982\u679c\u65e0\u6cd5\u5feb\u901f\u786e\u5b9a\u5b58\u50a8\u8868\u7684\u786e\u5207\u5b57\u8282\u6570\uff0c\u5219\u5b57\u8282\u6570\u8fd4\u56de\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," ( ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d")," \u5305\u62ec\u4efb\u4f55\u5e95\u5c42\u5b58\u50a8) \u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u5c06\u6570\u636e\u5b58\u5728\u78c1\u76d8\u4e0a\uff0c\u8fd4\u56de\u5b9e\u9645\u4f7f\u7528\u7684\u78c1\u76d8\u7a7a\u95f4 (\u538b\u7f29\u540e) \u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u6570\u636e\uff0c\u8fd4\u56de\u5728\u5185\u5b58\u4e2d\u4f7f\u7528\u7684\u8fd1\u4f3c\u5b57\u8282\u6570\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lifetime_rows")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) - \u670d\u52a1\u542f\u52a8\u540e\u63d2\u5165\u7684\u603b\u884c\u6570(\u53ea\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")," \u8868) \u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lifetime_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) - \u670d\u52a1\u542f\u52a8\u540e\u63d2\u5165\u7684\u603b\u5b57\u8282\u6570(\u53ea\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Buffer")," \u8868) \u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"comment")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") - \u8868\u7684\u6ce8\u91ca\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"has_own_data")," (",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u6807\u5fd7\uff0c\u8868\u793a\u8868\u672c\u8eab\u662f\u5426\u5728\u78c1\u76d8\u4e0a\u5b58\u50a8\u6570\u636e\uff0c\u6216\u8005\u8bbf\u95ee\u5176\u4ed6\u6765\u6e90\u3002 "))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"system.tables")," \u8868\u88ab\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u7684\u67e5\u8be2\u5b9e\u73b0\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.tables LIMIT 2 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                   base\nname:                       t1\nuuid:                       81b1c20a-b7c6-4116-a2ce-7583fb6b6736\nengine:                     MergeTree\nis_temporary:               0\ndata_paths:                 ['/var/lib/clickhouse/store/81b/81b1c20a-b7c6-4116-a2ce-7583fb6b6736/']\nmetadata_path:              /var/lib/clickhouse/store/461/461cf698-fd0b-406d-8c01-5d8fd5748a91/t1.sql\nmetadata_modification_time: 2021-01-25 19:14:32\ndependencies_database:      []\ndependencies_table:         []\ncreate_table_query:         CREATE TABLE base.t1 (`n` UInt64) ENGINE = MergeTree ORDER BY n SETTINGS index_granularity = 8192\nengine_full:                MergeTree ORDER BY n SETTINGS index_granularity = 8192\nas_select:                  SELECT database AS table_catalog\npartition_key:\nsorting_key:                n\nprimary_key:                n\nsampling_key:\nstorage_policy:             default\ntotal_rows:                 1\ntotal_bytes:                99\nlifetime_rows:              \u1d3a\u1d41\u1d38\u1d38\nlifetime_bytes:             \u1d3a\u1d41\u1d38\u1d38\ncomment:\nhas_own_data:               0\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:                   default\nname:                       53r93yleapyears\nuuid:                       00000000-0000-0000-0000-000000000000\nengine:                     MergeTree\nis_temporary:               0\ndata_paths:                 ['/var/lib/clickhouse/data/default/53r93yleapyears/']\nmetadata_path:              /var/lib/clickhouse/metadata/default/53r93yleapyears.sql\nmetadata_modification_time: 2020-09-23 09:05:36\ndependencies_database:      []\ndependencies_table:         []\ncreate_table_query:         CREATE TABLE default.`53r93yleapyears` (`id` Int8, `febdays` Int8) ENGINE = MergeTree ORDER BY id SETTINGS index_granularity = 8192\nengine_full:                MergeTree ORDER BY id SETTINGS index_granularity = 8192\nas_select:                  SELECT name AS catalog_name\npartition_key:\nsorting_key:                id\nprimary_key:                id\nsampling_key:\nstorage_policy:             default\ntotal_rows:                 2\ntotal_bytes:                155\nlifetime_rows:              \u1d3a\u1d41\u1d38\u1d38\nlifetime_bytes:             \u1d3a\u1d41\u1d38\u1d38\ncomment:\nhas_own_data:               0\n")))}c.isMDXComponent=!0}}]);