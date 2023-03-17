"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[17203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(d,g(g({ref:t},o),{},{components:n})):r.createElement(d,g({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,g=new Array(i);g[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,g[1]=l;for(var p=2;p<i;p++)g[p]=n[p];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/engines/table-engines/mergetree-family/aggregatingmergetree"},g="AggregatingMergeTree",l={unversionedId:"zh/engines/table-engines/mergetree-family/aggregatingmergetree",id:"zh/engines/table-engines/mergetree-family/aggregatingmergetree",title:"AggregatingMergeTree",description:"aggregatingmergetree}",source:"@site/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree.md",sourceDirName:"zh/engines/table-engines/mergetree-family",slug:"/zh/engines/table-engines/mergetree-family/aggregatingmergetree",permalink:"/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/mergetree-family/aggregatingmergetree"},sidebar:"chinese",previous:{title:"GraphiteMergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/graphitemergetree"},next:{title:"CollapsingMergeTree",permalink:"/docs/zh/engines/table-engines/mergetree-family/collapsingmergetree"}},s={},p=[{value:"\u5efa\u8868",id:"jian-biao",level:2},{value:"SELECT \u548c INSERT",id:"select-he-insert",level:2},{value:"\u805a\u5408\u7269\u5316\u89c6\u56fe\u7684\u793a\u4f8b",id:"ju-he-wu-hua-shi-tu-de-shi-li",level:2}],o={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregatingmergetree"},"AggregatingMergeTree"),(0,a.kt)("p",null,"\u8be5\u5f15\u64ce\u7ee7\u627f\u81ea ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"\uff0c\u5e76\u6539\u53d8\u4e86\u6570\u636e\u7247\u6bb5\u7684\u5408\u5e76\u903b\u8f91\u3002 ClickHouse \u4f1a\u5c06\u4e00\u4e2a\u6570\u636e\u7247\u6bb5\u5185\u6240\u6709\u5177\u6709\u76f8\u540c\u4e3b\u952e\uff08\u51c6\u786e\u7684\u8bf4\u662f ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"\u6392\u5e8f\u952e"),"\uff09\u7684\u884c\u66ff\u6362\u6210\u4e00\u884c\uff0c\u8fd9\u4e00\u884c\u4f1a\u5b58\u50a8\u4e00\u7cfb\u5217\u805a\u5408\u51fd\u6570\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," \u8868\u6765\u505a\u589e\u91cf\u6570\u636e\u7684\u805a\u5408\u7edf\u8ba1\uff0c\u5305\u62ec\u7269\u5316\u89c6\u56fe\u7684\u6570\u636e\u805a\u5408\u3002"),(0,a.kt)("p",null,"\u5f15\u64ce\u4f7f\u7528\u4ee5\u4e0b\u7c7b\u578b\u6765\u5904\u7406\u6240\u6709\u5217\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/aggregatefunction"},"AggregateFunction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/simpleaggregatefunction"},"SimpleAggregateFunction"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," \u9002\u7528\u4e8e\u80fd\u591f\u6309\u7167\u4e00\u5b9a\u7684\u89c4\u5219\u7f29\u51cf\u884c\u6570\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h2",{id:"jian-biao"},"\u5efa\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = AggregatingMergeTree()\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[TTL expr]\n[SETTINGS name=value, ...]\n")),(0,a.kt)("p",null,"\u8bed\u53e5\u53c2\u6570\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-table-query"},"\u5efa\u8868\u8bed\u53e5\u63cf\u8ff0"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b50\u53e5")),(0,a.kt)("p",null,"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," \u8868\u65f6\uff0c\u9700\u7528\u8ddf\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u4e00\u6837\u7684",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"\u5b50\u53e5"),"\u3002"),(0,a.kt)("details",{markdown:"1"},(0,a.kt)("summary",null,"\u5df2\u5f03\u7528\u7684\u5efa\u8868\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u4e0d\u8981\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\u8be5\u65b9\u6cd5\uff0c\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u5c06\u65e7\u9879\u76ee\u5207\u6362\u5230\u4e0a\u8ff0\u65b9\u6cd5\u3002\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] AggregatingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity)\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u6240\u6709\u53c2\u6570\u7684\u542b\u4e49\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u4e2d\u7684\u4e00\u6837\u3002")),(0,a.kt)("h2",{id:"select-he-insert"},"SELECT \u548c INSERT"),(0,a.kt)("p",null,"\u8981\u63d2\u5165\u6570\u636e\uff0c\u9700\u4f7f\u7528\u5e26\u6709 -State- \u805a\u5408\u51fd\u6570\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/insert-into"},"INSERT SELECT")," \u8bed\u53e5\u3002\n\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," \u8868\u4e2d\u67e5\u8be2\u6570\u636e\u65f6\uff0c\u9700\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u5e76\u4e14\u8981\u4f7f\u7528\u4e0e\u63d2\u5165\u65f6\u76f8\u540c\u7684\u805a\u5408\u51fd\u6570\uff0c\u4f46\u540e\u7f00\u8981\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"-Merge")," \u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u7684\u7ed3\u679c\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," \u7c7b\u578b\u7684\u503c\u5bf9 ClickHouse \u7684\u6240\u6709\u8f93\u51fa\u683c\u5f0f\u90fd\u5b9e\u73b0\u4e86\u7279\u5b9a\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u6cd5\u3002\u5728\u8fdb\u884c\u6570\u636e\u8f6c\u50a8\u65f6\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"TabSeparated")," \u683c\u5f0f\u8fdb\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8f6c\u50a8\u6570\u636e\u4e5f\u80fd\u76f4\u63a5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u8bed\u53e5\u5bfc\u56de\u3002"),(0,a.kt)("h2",{id:"ju-he-wu-hua-shi-tu-de-shi-li"},"\u805a\u5408\u7269\u5316\u89c6\u56fe\u7684\u793a\u4f8b"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8ddf\u8e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"test.visits")," \u8868\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," \u7269\u5316\u89c6\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW test.basic\nENGINE = AggregatingMergeTree() PARTITION BY toYYYYMM(StartDate) ORDER BY (CounterID, StartDate)\nAS SELECT\n    CounterID,\n    StartDate,\n    sumState(Sign)    AS Visits,\n    uniqState(UserID) AS Users\nFROM test.visits\nGROUP BY CounterID, StartDate;\n")),(0,a.kt)("p",null,"\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"test.visits")," \u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.visits ...\n")),(0,a.kt)("p",null,"\u6570\u636e\u4f1a\u540c\u65f6\u63d2\u5165\u5230\u8868\u548c\u89c6\u56fe\u4e2d\uff0c\u5e76\u4e14\u89c6\u56fe ",(0,a.kt)("inlineCode",{parentName:"p"},"test.basic")," \u4f1a\u5c06\u91cc\u9762\u7684\u6570\u636e\u805a\u5408\u3002"),(0,a.kt)("p",null,"\u8981\u83b7\u53d6\u805a\u5408\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"test.basic")," \u89c6\u56fe\u4e0a\u6267\u884c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT ... GROUP BY ...")," \u8fd9\u6837\u7684\u67e5\u8be2 \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    StartDate,\n    sumMerge(Visits) AS Visits,\n    uniqMerge(Users) AS Users\nFROM test.basic\nGROUP BY StartDate\nORDER BY StartDate;\n")))}u.isMDXComponent=!0}}]);