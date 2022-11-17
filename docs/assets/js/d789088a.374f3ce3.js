"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,g=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/engines/table-engines/mergetree-family/custom-partitioning-key"},l="\u81ea\u5b9a\u4e49\u5206\u533a\u952e",o={unversionedId:"zh/engines/table-engines/mergetree-family/custom-partitioning-key",id:"zh/engines/table-engines/mergetree-family/custom-partitioning-key",title:"\u81ea\u5b9a\u4e49\u5206\u533a\u952e",description:"zi-ding-yi-fen-qu-jian}",source:"@site/docs/zh/engines/table-engines/mergetree-family/custom-partitioning-key.md",sourceDirName:"zh/engines/table-engines/mergetree-family",slug:"/zh/engines/table-engines/mergetree-family/custom-partitioning-key",permalink:"/docs/zh/engines/table-engines/mergetree-family/custom-partitioning-key",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/mergetree-family/custom-partitioning-key.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/mergetree-family/custom-partitioning-key"},sidebar:"chinese",previous:{title:"CollapsingMergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/collapsingmergetree"},next:{title:"MergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/mergetree"}},p={},s=[],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zi-ding-yi-fen-qu-jian"},"\u81ea\u5b9a\u4e49\u5206\u533a\u952e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u7cfb\u5217\u7684\u8868\uff08\u5305\u62ec ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/replication"},"\u53ef\u590d\u5236\u8868")," \uff09\u53ef\u4ee5\u4f7f\u7528\u5206\u533a\u3002\u57fa\u4e8e MergeTree \u8868\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/materializedview#materializedview"},"\u7269\u5316\u89c6\u56fe")," \u4e5f\u652f\u6301\u5206\u533a\u3002"),(0,a.kt)("p",null,"\u5206\u533a\u662f\u5728\u4e00\u4e2a\u8868\u4e2d\u901a\u8fc7\u6307\u5b9a\u7684\u89c4\u5219\u5212\u5206\u800c\u6210\u7684\u903b\u8f91\u6570\u636e\u96c6\u3002\u53ef\u4ee5\u6309\u4efb\u610f\u6807\u51c6\u8fdb\u884c\u5206\u533a\uff0c\u5982\u6309\u6708\uff0c\u6309\u65e5\u6216\u6309\u4e8b\u4ef6\u7c7b\u578b\u3002\u4e3a\u4e86\u51cf\u5c11\u9700\u8981\u64cd\u4f5c\u7684\u6570\u636e\uff0c\u6bcf\u4e2a\u5206\u533a\u90fd\u662f\u5206\u5f00\u5b58\u50a8\u7684\u3002\u8bbf\u95ee\u6570\u636e\u65f6\uff0cClickHouse \u5c3d\u91cf\u4f7f\u7528\u8fd9\u4e9b\u5206\u533a\u7684\u6700\u5c0f\u5b50\u96c6\u3002"),(0,a.kt)("p",null,"\u5206\u533a\u662f\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u5efa\u8868")," \u65f6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"PARTITION BY expr")," \u5b50\u53e5\u6307\u5b9a\u7684\u3002\u5206\u533a\u952e\u53ef\u4ee5\u662f\u8868\u4e2d\u5217\u7684\u4efb\u610f\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff0c\u6307\u5b9a\u6309\u6708\u5206\u533a\uff0c\u8868\u8fbe\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"toYYYYMM(date_column)"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE visits\n(\n    VisitDate Date,\n    Hour UInt8,\n    ClientID UUID\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(VisitDate)\nORDER BY Hour;\n")),(0,a.kt)("p",null,"\u5206\u533a\u952e\u4e5f\u53ef\u4ee5\u662f\u8868\u8fbe\u5f0f\u5143\u7ec4\uff08\u7c7b\u4f3c ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#primary-keys-and-indexes-in-queries"},"\u4e3b\u952e")," \uff09\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = ReplicatedCollapsingMergeTree('/clickhouse/tables/name', 'replica1', Sign)\nPARTITION BY (toMonday(StartDate), EventType)\nORDER BY (CounterID, StartDate, intHash32(UserID));\n")),(0,a.kt)("p",null,"\u4e0a\u4f8b\u4e2d\uff0c\u6211\u4eec\u8bbe\u7f6e\u6309\u4e00\u5468\u5185\u7684\u4e8b\u4ef6\u7c7b\u578b\u5206\u533a\u3002"),(0,a.kt)("p",null,"\u65b0\u6570\u636e\u63d2\u5165\u5230\u8868\u4e2d\u65f6\uff0c\u8fd9\u4e9b\u6570\u636e\u4f1a\u5b58\u50a8\u4e3a\u6309\u4e3b\u952e\u6392\u5e8f\u7684\u65b0\u7247\u6bb5\uff08\u5757\uff09\u3002\u63d2\u5165\u540e 10-15 \u5206\u949f\uff0c\u540c\u4e00\u5206\u533a\u7684\u5404\u4e2a\u7247\u6bb5\u4f1a\u5408\u5e76\u4e3a\u4e00\u6574\u4e2a\u7247\u6bb5\u3002"),(0,a.kt)("p",null,'!!! info "\u6ce8\u610f"\n\u90a3\u4e9b\u6709\u76f8\u540c\u5206\u533a\u8868\u8fbe\u5f0f\u503c\u7684\u6570\u636e\u7247\u6bb5\u624d\u4f1a\u5408\u5e76\u3002\u8fd9\u610f\u5473\u7740 ',(0,a.kt)("strong",{parentName:"p"},"\u4f60\u4e0d\u5e94\u8be5\u7528\u592a\u7cbe\u7ec6\u7684\u5206\u533a\u65b9\u6848"),"\uff08\u8d85\u8fc7\u4e00\u5343\u4e2a\u5206\u533a\uff09\u3002\u5426\u5219\uff0c\u4f1a\u56e0\u4e3a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6587\u4ef6\u6570\u91cf\u8fc7\u591a\u548c\u9700\u8981\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u8fc7\u591a\uff0c\u5bfc\u81f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u6548\u7387\u4e0d\u4f73\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/custom-partitioning-key#system_tables-parts"},"system.parts")," \u8868\u67e5\u770b\u8868\u7247\u6bb5\u548c\u5206\u533a\u4fe1\u606f\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"visits")," \u8868\uff0c\u6309\u6708\u5206\u533a\u3002\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"system.parts")," \u8868\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    partition,\n    name,\n    active\nFROM system.parts\nWHERE table = 'visits'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1   \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2   \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0   \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0   \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1   \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0 \u2502      1 \u2502\n\u2502 201902    \u2502 201902_11_11_0 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"partition")," \u5217\u5b58\u50a8\u5206\u533a\u7684\u540d\u79f0\u3002\u6b64\u793a\u4f8b\u4e2d\u6709\u4e24\u4e2a\u5206\u533a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"201901")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"201902"),"\u3002\u5728 ",(0,a.kt)("a",{parentName:"p",href:"#alter_manipulations-with-partitions"},"ALTER \u2026 PARTITION")," \u8bed\u53e5\u4e2d\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u5217\u503c\u6765\u6307\u5b9a\u5206\u533a\u540d\u79f0\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u5217\u4e3a\u5206\u533a\u4e2d\u6570\u636e\u7247\u6bb5\u7684\u540d\u79f0\u3002\u5728 ",(0,a.kt)("a",{parentName:"p",href:"#alter_attach-partition"},"ALTER ATTACH PART")," \u8bed\u53e5\u4e2d\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u5217\u503c\u4e2d\u6765\u6307\u5b9a\u7247\u6bb5\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u62c6\u89e3\u4e0b\u7b2c\u4e00\u4e2a\u6570\u636e\u7247\u6bb5\u7684\u540d\u79f0\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"201901_1_3_1"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"201901")," \u662f\u5206\u533a\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u662f\u6570\u636e\u5757\u7684\u6700\u5c0f\u7f16\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3")," \u662f\u6570\u636e\u5757\u7684\u6700\u5927\u7f16\u53f7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u662f\u5757\u7ea7\u522b\uff08\u5373\u5728\u7531\u5757\u7ec4\u6210\u7684\u5408\u5e76\u6811\u4e2d\uff0c\u8be5\u5757\u5728\u6811\u4e2d\u7684\u6df1\u5ea6\uff09\u3002")),(0,a.kt)("p",null,'!!! info "\u6ce8\u610f"\n\u65e7\u7c7b\u578b\u8868\u7684\u7247\u6bb5\u540d\u79f0\u4e3a\uff1a',(0,a.kt)("inlineCode",{parentName:"p"},"20190117_20190123_2_2_0"),"\uff08\u6700\u5c0f\u65e5\u671f - \u6700\u5927\u65e5\u671f - \u6700\u5c0f\u5757\u7f16\u53f7 - \u6700\u5927\u5757\u7f16\u53f7 - \u5757\u7ea7\u522b\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"active")," \u5217\u4e3a\u7247\u6bb5\u72b6\u6001\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u4ee3\u8868\u6fc0\u6d3b\u72b6\u6001\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u4ee3\u8868\u975e\u6fc0\u6d3b\u72b6\u6001\u3002\u975e\u6fc0\u6d3b\u7247\u6bb5\u662f\u90a3\u4e9b\u5728\u5408\u5e76\u5230\u8f83\u5927\u7247\u6bb5\u4e4b\u540e\u5269\u4f59\u7684\u6e90\u6570\u636e\u7247\u6bb5\u3002\u635f\u574f\u7684\u6570\u636e\u7247\u6bb5\u4e5f\u8868\u793a\u4e3a\u975e\u6d3b\u52a8\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u6b63\u5982\u5728\u793a\u4f8b\u4e2d\u6240\u770b\u5230\u7684\uff0c\u540c\u4e00\u5206\u533a\u4e2d\u6709\u51e0\u4e2a\u72ec\u7acb\u7684\u7247\u6bb5\uff08\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"201901_1_3_1"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"201901_1_9_2"),"\uff09\u3002\u8fd9\u610f\u5473\u7740\u8fd9\u4e9b\u7247\u6bb5\u5c1a\u672a\u5408\u5e76\u3002ClickHouse \u4f1a\u5b9a\u671f\u7684\u5bf9\u63d2\u5165\u7684\u6570\u636e\u7247\u6bb5\u8fdb\u884c\u5408\u5e76\uff0c\u5927\u7ea6\u662f\u5728\u63d2\u5165\u540e15\u5206\u949f\u5de6\u53f3\u3002\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/misc#misc_operations-optimize"},"OPTIMIZE")," \u8bed\u53e5\u53d1\u8d77\u4e00\u4e2a\u8ba1\u5212\u5916\u7684\u5408\u5e76\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE visits PARTITION 201902;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500partition\u2500\u252c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500active\u2500\u2510\n\u2502 201901    \u2502 201901_1_3_1   \u2502      0 \u2502\n\u2502 201901    \u2502 201901_1_9_2   \u2502      1 \u2502\n\u2502 201901    \u2502 201901_8_8_0   \u2502      0 \u2502\n\u2502 201901    \u2502 201901_9_9_0   \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_6_1   \u2502      0 \u2502\n\u2502 201902    \u2502 201902_4_11_2  \u2502      1 \u2502\n\u2502 201902    \u2502 201902_10_10_0 \u2502      0 \u2502\n\u2502 201902    \u2502 201902_11_11_0 \u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u975e\u6fc0\u6d3b\u7247\u6bb5\u4f1a\u5728\u5408\u5e76\u540e\u768410\u5206\u949f\u5de6\u53f3\u88ab\u5220\u9664\u3002"),(0,a.kt)("p",null,"\u67e5\u770b\u7247\u6bb5\u548c\u5206\u533a\u4fe1\u606f\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u8fdb\u5165\u8868\u7684\u76ee\u5f55\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/<database>/<table>/"),"\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/var/lib/clickhouse/data/default/visits$ ls -l\ntotal 40\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 201901_1_3_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201901_1_9_2\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_8_8_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 15:52 201901_9_9_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_10_10_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:17 201902_11_11_0\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 16:19 201902_4_11_2\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  5 12:09 201902_4_6_1\ndrwxr-xr-x 2 clickhouse clickhouse 4096 Feb  1 16:48 detached\n")),(0,a.kt)("p",null,"\u2018201901_1_1_0\u2019\uff0c\u2018201901_1_7_1\u2019 \u7b49\u6587\u4ef6\u5939\u662f\u6570\u636e\u7247\u6bb5\u7684\u76ee\u5f55\u3002\u6bcf\u4e2a\u7247\u6bb5\u90fd\u4e0e\u4e00\u4e2a\u5bf9\u5e94\u7684\u5206\u533a\u76f8\u5173\uff0c\u5e76\u4e14\u53ea\u5305\u542b\u8fd9\u4e2a\u6708\u7684\u6570\u636e\uff08\u672c\u4f8b\u4e2d\u7684\u8868\u6309\u6708\u5206\u533a\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"detached")," \u76ee\u5f55\u5b58\u653e\u7740\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter#alter_detach-partition"},"DETACH")," \u8bed\u53e5\u4ece\u8868\u4e2d\u5378\u8f7d\u7684\u7247\u6bb5\u3002\u635f\u574f\u7684\u7247\u6bb5\u4e0d\u4f1a\u88ab\u5220\u9664\u800c\u662f\u4e5f\u4f1a\u79fb\u5230\u8be5\u76ee\u5f55\u4e0b\u3002\u670d\u52a1\u5668\u4e0d\u4f1a\u53bb\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"detached"),"\u76ee\u5f55\u4e2d\u7684\u6570\u636e\u7247\u6bb5\u3002\u56e0\u6b64\u4f60\u53ef\u4ee5\u968f\u65f6\u6dfb\u52a0\uff0c\u5220\u9664\u6216\u4fee\u6539\u6b64\u76ee\u5f55\u4e2d\u7684\u6570\u636e \u2013 \u5728\u8fd0\u884c ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter#alter_attach-partition"},"ATTACH")," \u8bed\u53e5\u524d\uff0c\u670d\u52a1\u5668\u4e0d\u4f1a\u611f\u77e5\u5230\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5728\u64cd\u4f5c\u670d\u52a1\u5668\u65f6\uff0c\u4f60\u4e0d\u80fd\u624b\u52a8\u66f4\u6539\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u7247\u6bb5\u96c6\u6216\u5176\u6570\u636e\uff0c\u56e0\u4e3a\u670d\u52a1\u5668\u4e0d\u4f1a\u611f\u77e5\u5230\u8fd9\u4e9b\u4fee\u6539\u3002\u5bf9\u4e8e\u975e\u590d\u5236\u8868\uff0c\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u505c\u6b62\u65f6\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u4f46\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\u3002\u5bf9\u4e8e\u590d\u5236\u8868\uff0c\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4e0d\u8981\u66f4\u6539\u7247\u6bb5\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"ClickHouse \u652f\u6301\u5bf9\u5206\u533a\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c\uff1a\u5220\u9664\u5206\u533a\uff0c\u5c06\u5206\u533a\u4ece\u4e00\u4e2a\u8868\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u8868\uff0c\u6216\u521b\u5efa\u5907\u4efd\u3002\u4e86\u89e3\u5206\u533a\u7684\u6240\u6709\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter#alter_manipulations-with-partitions"},"\u5206\u533a\u548c\u7247\u6bb5\u7684\u64cd\u4f5c")," \u4e00\u8282\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/custom_partitioning_key/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);