"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[95405],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},17667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/zh/engines/table-engines/special/merge"},l="\u5408\u5e76",p={unversionedId:"zh/engines/table-engines/special/merge",id:"zh/engines/table-engines/special/merge",title:"\u5408\u5e76",description:"merge}",source:"@site/docs/zh/engines/table-engines/special/merge.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/merge",permalink:"/docs/zh/engines/table-engines/special/merge",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/merge.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/special/merge"},sidebar:"chinese",previous:{title:"MaterializedView",permalink:"/docs/zh/engines/table-engines/special/materializedview"},next:{title:"Null",permalink:"/docs/zh/engines/table-engines/special/null"}},o={},c=[{value:"\u865a\u62df\u5217",id:"xu-ni-lie",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merge"},"\u5408\u5e76"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u5f15\u64ce (\u4e0d\u8981\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u5f15\u64ce\u6df7\u6dc6) \u672c\u8eab\u4e0d\u5b58\u50a8\u6570\u636e\uff0c\u4f46\u53ef\u7528\u4e8e\u540c\u65f6\u4ece\u4efb\u610f\u591a\u4e2a\u5176\u4ed6\u7684\u8868\u4e2d\u8bfb\u53d6\u6570\u636e\u3002\n\u8bfb\u662f\u81ea\u52a8\u5e76\u884c\u7684\uff0c\u4e0d\u652f\u6301\u5199\u5165\u3002\u8bfb\u53d6\u65f6\uff0c\u90a3\u4e9b\u88ab\u771f\u6b63\u8bfb\u53d6\u5230\u6570\u636e\u7684\u8868\u7684\u7d22\u5f15\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u4f1a\u88ab\u4f7f\u7528\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u5f15\u64ce\u7684\u53c2\u6570\uff1a\u4e00\u4e2a\u6570\u636e\u5e93\u540d\u548c\u4e00\u4e2a\u7528\u4e8e\u5339\u914d\u8868\u540d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Merge(hits, '^WatchLog')\n")),(0,a.kt)("p",null,"\u6570\u636e\u4f1a\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"hits")," \u6570\u636e\u5e93\u4e2d\u8868\u540d\u5339\u914d\u6b63\u5219 \u2018",(0,a.kt)("inlineCode",{parentName:"p"},"^WatchLog"),"\u2019 \u7684\u8868\u4e2d\u8bfb\u53d6\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u6570\u636e\u5e93\u540d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7528\u4e00\u4e2a\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5e38\u91cf\u8868\u8fbe\u5f0f\u3002\u4f8b\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"currentDatabase()")," \u3002"),(0,a.kt)("p",null,"\u6b63\u5219\u8868\u8fbe\u5f0f \u2014 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/re2"},"re2")," (\u652f\u6301 PCRE \u4e00\u4e2a\u5b50\u96c6\u7684\u529f\u80fd)\uff0c\u5927\u5c0f\u5199\u654f\u611f\u3002\n\u4e86\u89e3\u5173\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u8f6c\u4e49\u5b57\u7b26\u7684\u8bf4\u660e\u53ef\u53c2\u770b \xabmatch\xbb \u4e00\u8282\u3002"),(0,a.kt)("p",null,"\u5f53\u9009\u62e9\u9700\u8981\u8bfb\u7684\u8868\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u8868\u672c\u8eab\u4f1a\u88ab\u6392\u9664\uff0c\u5373\u4f7f\u5b83\u5339\u914d\u4e0a\u4e86\u8be5\u6b63\u5219\u3002\u8fd9\u6837\u8bbe\u8ba1\u4e3a\u4e86\u907f\u514d\u5faa\u73af\u3002\n\u5f53\u7136\uff0c\u662f\u80fd\u591f\u521b\u5efa\u4e24\u4e2a\u76f8\u4e92\u65e0\u9650\u9012\u5f52\u8bfb\u53d6\u5bf9\u65b9\u6570\u636e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u8868\u7684\uff0c\u4f46\u8fd9\u5e76\u6ca1\u6709\u4ec0\u4e48\u610f\u4e49\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u5f15\u64ce\u7684\u4e00\u4e2a\u5178\u578b\u5e94\u7528\u662f\u53ef\u4ee5\u50cf\u4f7f\u7528\u4e00\u5f20\u8868\u4e00\u6837\u4f7f\u7528\u5927\u91cf\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u8868\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 2 \uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u5047\u5b9a\u4f60\u6709\u4e00\u4e2a\u65e7\u8868\uff08WatchLog_old\uff09\uff0c\u4f60\u60f3\u6539\u53d8\u6570\u636e\u5206\u533a\u4e86\uff0c\u4f46\u53c8\u4e0d\u60f3\u628a\u65e7\u6570\u636e\u8f6c\u79fb\u5230\u65b0\u8868\uff08WatchLog_new\uff09\u91cc\uff0c\u5e76\u4e14\u4f60\u9700\u8981\u540c\u65f6\u80fd\u770b\u5230\u8fd9\u4e24\u4e2a\u8868\u7684\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE WatchLog_old(date Date, UserId Int64, EventType String, Cnt UInt64)\nENGINE=MergeTree(date, (UserId, EventType), 8192);\nINSERT INTO WatchLog_old VALUES ('2018-01-01', 1, 'hit', 3);\n\nCREATE TABLE WatchLog_new(date Date, UserId Int64, EventType String, Cnt UInt64)\nENGINE=MergeTree PARTITION BY date ORDER BY (UserId, EventType) SETTINGS index_granularity=8192;\nINSERT INTO WatchLog_new VALUES ('2018-01-02', 2, 'hit', 3);\n\nCREATE TABLE WatchLog as WatchLog_old ENGINE=Merge(currentDatabase(), '^WatchLog');\n\nSELECT *\nFROM WatchLog\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500date\u2500\u252c\u2500UserId\u2500\u252c\u2500EventType\u2500\u252c\u2500Cnt\u2500\u2510\n\u2502 2018-01-01 \u2502      1 \u2502 hit       \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500date\u2500\u252c\u2500UserId\u2500\u252c\u2500EventType\u2500\u252c\u2500Cnt\u2500\u2510\n\u2502 2018-01-02 \u2502      2 \u2502 hit       \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"xu-ni-lie"},"\u865a\u62df\u5217"),(0,a.kt)("p",null,"\u865a\u62df\u5217\u662f\u4e00\u79cd\u7531\u8868\u5f15\u64ce\u63d0\u4f9b\u800c\u4e0d\u662f\u5728\u8868\u5b9a\u4e49\u4e2d\u7684\u5217\u3002\u6362\u79cd\u8bf4\u6cd5\u5c31\u662f\uff0c\u8fd9\u4e9b\u5217\u5e76\u6ca1\u6709\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u4e2d\u6307\u5b9a\uff0c\u4f46\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u865a\u62df\u5217\u8ddf\u666e\u901a\u5217\u7684\u4e0d\u540c\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u5217\u4e0d\u5728\u8868\u7ed3\u6784\u5b9a\u4e49\u91cc\u6307\u5b9a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"INSERT")," \u5411\u865a\u62df\u5217\u5199\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0d\u6307\u5b9a\u5217\u540d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"INSERT")," \u8bed\u53e5\u65f6\uff0c\u865a\u62df\u5217\u8981\u4f1a\u88ab\u5ffd\u7565\u6389\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u661f\u53f7\u901a\u914d\u7b26\uff08 ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT *")," \uff09\u65f6\u865a\u62df\u5217\u4e0d\u4f1a\u5305\u542b\u5728\u91cc\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62df\u5217\u4e0d\u4f1a\u51fa\u73b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOW CREATE TABLE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"DESC TABLE")," \u7684\u67e5\u8be2\u7ed3\u679c\u91cc\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Merge")," \u7c7b\u578b\u7684\u8868\u5305\u62ec\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"_table")," \u865a\u62df\u5217\u3002\uff08\u5982\u679c\u8be5\u8868\u672c\u6765\u5df2\u6709\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"_table")," \u7684\u5217\uff0c\u90a3\u8fd9\u4e2a\u865a\u62df\u5217\u4f1a\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"_table1")," \uff1b\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"_table1")," \u4e5f\u672c\u5c31\u5b58\u5728\u4e86\uff0c\u90a3\u8fd9\u4e2a\u865a\u62df\u5217\u4f1a\u88ab\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"_table2")," \uff0c\u4f9d\u6b64\u7c7b\u63a8\uff09\u8be5\u5217\u5305\u542b\u88ab\u8bfb\u6570\u636e\u7684\u8868\u540d\u3002"),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE/PREWHERE")," \u5b50\u53e5\u5305\u542b\u4e86\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"_table")," \u7684\u6761\u4ef6\uff0c\u5e76\u4e14\u6ca1\u6709\u4f9d\u8d56\u5176\u4ed6\u7684\u5217\uff08\u5982\u4f5c\u4e3a\u8868\u8fbe\u5f0f\u8c13\u8bcd\u94fe\u63a5\u7684\u4e00\u4e2a\u5b50\u9879\u6216\u4f5c\u4e3a\u6574\u4e2a\u7684\u8868\u8fbe\u5f0f\uff09\uff0c\u8fd9\u4e9b\u6761\u4ef6\u7684\u4f5c\u7528\u4f1a\u50cf\u7d22\u5f15\u4e00\u6837\u3002\u8fd9\u4e9b\u6761\u4ef6\u4f1a\u5728\u90a3\u4e9b\u53ef\u80fd\u88ab\u8bfb\u6570\u636e\u7684\u8868\u7684\u8868\u540d\u4e0a\u6267\u884c\uff0c\u5e76\u4e14\u8bfb\u64cd\u4f5c\u53ea\u4f1a\u5728\u90a3\u4e9b\u6ee1\u8db3\u4e86\u8be5\u6761\u4ef6\u7684\u8868\u4e0a\u53bb\u6267\u884c\u3002"))}d.isMDXComponent=!0}}]);