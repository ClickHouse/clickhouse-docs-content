"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[39185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,c=m["".concat(o,".").concat(d)]||m[d]||k[d]||l;return n?r.createElement(c,a(a({ref:t},u),{},{components:n})):r.createElement(c,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={slug:"/zh/guides/improving-query-performance/skipping-indexes",sidebar_label:"Data Skipping Indexes",sidebar_position:2},a="\u6df1\u5165\u7406\u89e3ClickHouse\u8df3\u6570\u7d22\u5f15",p={unversionedId:"zh/guides/improving-query-performance/skipping-indexes",id:"zh/guides/improving-query-performance/skipping-indexes",title:"\u6df1\u5165\u7406\u89e3ClickHouse\u8df3\u6570\u7d22\u5f15",description:"\u8df3\u6570\u7d22\u5f15",source:"@site/docs/zh/guides/improving-query-performance/skipping-indexes.md",sourceDirName:"zh/guides/improving-query-performance",slug:"/zh/guides/improving-query-performance/skipping-indexes",permalink:"/docs/zh/guides/improving-query-performance/skipping-indexes",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/guides/improving-query-performance/skipping-indexes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/zh/guides/improving-query-performance/skipping-indexes",sidebar_label:"Data Skipping Indexes",sidebar_position:2},sidebar:"chinese",previous:{title:"\u4f18\u5316\u67e5\u8be2\u6027\u80fd",permalink:"/docs/zh/guides/improving-query-performance"},next:{title:"Sparse Primary Indexes",permalink:"/docs/zh/guides/improving-query-performance/sparse-primary-indexes"}},o={},s=[{value:"\u8df3\u6570\u7d22\u5f15",id:"\u8df3\u6570\u7d22\u5f15",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u8df3\u6570\u7d22\u5f15\u7c7b\u578b",id:"\u8df3\u6570\u7d22\u5f15\u7c7b\u578b",level:3},{value:"minmax",id:"minmax",level:4},{value:"set",id:"set",level:4},{value:"Bloom Filter Types",id:"bloom-filter-types",level:4},{value:"\u8df3\u6570\u7d22\u5f15\u51fd\u6570",id:"\u8df3\u6570\u7d22\u5f15\u51fd\u6570",level:3},{value:"\u8df3\u6570\u7d22\u5f15\u7684\u914d\u7f6e",id:"\u8df3\u6570\u7d22\u5f15\u7684\u914d\u7f6e",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3}],u={toc:s};function k(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6df1\u5165\u7406\u89e3clickhouse\u8df3\u6570\u7d22\u5f15"},"\u6df1\u5165\u7406\u89e3ClickHouse\u8df3\u6570\u7d22\u5f15"),(0,i.kt)("h3",{id:"\u8df3\u6570\u7d22\u5f15"},"\u8df3\u6570\u7d22\u5f15"),(0,i.kt)("p",null,"\u5f71\u54cdClickHouse\u67e5\u8be2\u6027\u80fd\u7684\u56e0\u7d20\u5f88\u591a\u3002\u5728\u5927\u591a\u6570\u573a\u666f\u4e2d\uff0c\u5173\u952e\u56e0\u7d20\u662fClickHouse\u5728\u8ba1\u7b97\u67e5\u8be2WHERE\u5b50\u53e5\u6761\u4ef6\u65f6\u662f\u5426\u53ef\u4ee5\u4f7f\u7528\u4e3b\u952e\u3002\u56e0\u6b64\uff0c\u9009\u62e9\u9002\u7528\u4e8e\u6700\u5e38\u89c1\u67e5\u8be2\u6a21\u5f0f\u7684\u4e3b\u952e\u5bf9\u4e8e\u8868\u7684\u8bbe\u8ba1\u81f3\u5173\u91cd\u8981\u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u65e0\u8bba\u5982\u4f55\u4ed4\u7ec6\u5730\u8c03\u4f18\u4e3b\u952e\uff0c\u4e0d\u53ef\u907f\u514d\u5730\u4f1a\u51fa\u73b0\u4e0d\u80fd\u6709\u6548\u4f7f\u7528\u5b83\u7684\u67e5\u8be2\u7528\u4f8b\u3002\u7528\u6237\u901a\u5e38\u4f9d\u8d56\u4e8eClickHouse\u83b7\u5f97\u65f6\u95f4\u5e8f\u5217\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4f46\u4ed6\u4eec\u901a\u5e38\u5e0c\u671b\u6839\u636e\u5176\u4ed6\u4e1a\u52a1\u7ef4\u5ea6(\u5982\u5ba2\u6237id\u3001\u7f51\u7ad9URL\u6216\u4ea7\u54c1\u7f16\u53f7)\u5206\u6790\u540c\u4e00\u6279\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u67e5\u8be2\u6027\u80fd\u53ef\u80fd\u4f1a\u76f8\u5f53\u5dee\uff0c\u56e0\u4e3a\u5e94\u7528WHERE\u5b50\u53e5\u6761\u4ef6\u53ef\u80fd\u9700\u8981\u5bf9\u6bcf\u4e2a\u5217\u503c\u8fdb\u884c\u5b8c\u6574\u626b\u63cf\u3002\u867d\u7136ClickHouse\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\u4ecd\u7136\u76f8\u5bf9\u8f83\u5feb\uff0c\u4f46\u8ba1\u7b97\u6570\u767e\u4e07\u6216\u6570\u5341\u4ebf\u4e2a\u5355\u72ec\u7684\u503c\u5c06\u5bfc\u81f4\u201c\u975e\u7d22\u5f15\u201d\u67e5\u8be2\u7684\u6267\u884c\u901f\u5ea6\u6bd4\u57fa\u4e8e\u4e3b\u952e\u7684\u67e5\u8be2\u6162\u5f97\u591a\u3002"),(0,i.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\uff0c\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a\u201c\u4e8c\u7ea7\u201d\u7d22\u5f15\u9644\u52a0\u5230\u8868\u4e0a\u3002\u8fd9\u662f\u4e00\u4e2ab-\u6811\u7ed3\u6784\uff0c\u5141\u8bb8\u6570\u636e\u5e93\u5728O(log(n))\u65f6\u95f4\u5185\u627e\u5230\u78c1\u76d8\u4e0a\u6240\u6709\u5339\u914d\u7684\u884c\uff0c\u800c\u4e0d\u662fO(n)\u65f6\u95f4(\u4e00\u6b21\u8868\u626b\u63cf)\uff0c\u5176\u4e2dn\u662f\u884c\u6570\u3002\u4f46\u662f\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684\u4e8c\u7ea7\u7d22\u5f15\u4e0d\u9002\u7528\u4e8eClickHouse(\u6216\u5176\u4ed6\u9762\u5411\u5217\u7684\u6570\u636e\u5e93)\uff0c\u56e0\u4e3a\u78c1\u76d8\u4e0a\u6ca1\u6709\u5355\u72ec\u7684\u884c\u53ef\u4ee5\u6dfb\u52a0\u5230\u7d22\u5f15\u4e2d\u3002"),(0,i.kt)("p",null,"\u76f8\u53cd\uff0cClickHouse\u63d0\u4f9b\u4e86\u4e00\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u7d22\u5f15\uff0c\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u67e5\u8be2\u901f\u5ea6\u3002\u8fd9\u4e9b\u7ed3\u6784\u88ab\u6807\u8bb0\u4e3a\u8df3\u6570\u7d22\u5f15\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f7fClickHouse\u80fd\u591f\u8df3\u8fc7\u4fdd\u8bc1\u6ca1\u6709\u5339\u914d\u503c\u7684\u6570\u636e\u5757\u3002"),(0,i.kt)("h3",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,i.kt)("p",null,"\u7528\u6237\u53ea\u80fd\u5728MergeTree\u8868\u5f15\u64ce\u4e0a\u4f7f\u7528\u6570\u636e\u8df3\u6570\u7d22\u5f15\u3002\u6bcf\u4e2a\u8df3\u6570\u7d22\u5f15\u90fd\u6709\u56db\u4e2a\u4e3b\u8981\u53c2\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u540d\u79f0\u3002\u7d22\u5f15\u540d\u7528\u4e8e\u5728\u6bcf\u4e2a\u5206\u533a\u4e2d\u521b\u5efa\u7d22\u5f15\u6587\u4ef6\u3002\u6b64\u5916\uff0c\u5728\u5220\u9664\u6216\u5177\u4f53\u5316\u7d22\u5f15\u65f6\u9700\u8981\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7684\u8868\u8fbe\u5f0f\u3002\u7d22\u5f15\u8868\u8fbe\u5f0f\u7528\u4e8e\u8ba1\u7b97\u5b58\u50a8\u5728\u7d22\u5f15\u4e2d\u7684\u503c\u96c6\u3002\u5b83\u53ef\u4ee5\u662f\u5217\u3001\u7b80\u5355\u64cd\u4f5c\u7b26\u3001\u51fd\u6570\u7684\u5b50\u96c6\u7684\u7ec4\u5408\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u3002\u7d22\u5f15\u7684\u7c7b\u578b\u63a7\u5236\u8ba1\u7b97\uff0c\u8be5\u8ba1\u7b97\u51b3\u5b9a\u662f\u5426\u53ef\u4ee5\u8df3\u8fc7\u8bfb\u53d6\u548c\u8ba1\u7b97\u6bcf\u4e2a\u7d22\u5f15\u5757\u3002"),(0,i.kt)("li",{parentName:"ul"},"GRANULARITY\u3002\u6bcf\u4e2a\u7d22\u5f15\u5757\u7531\u9897\u7c92\uff08granule\uff09\u7ec4\u6210\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e3b\u8868\u7d22\u5f15\u7c92\u5ea6\u4e3a8192\u884c\uff0cGRANULARITY\u4e3a4\uff0c\u5219\u6bcf\u4e2a\u7d22\u5f15\u201c\u5757\u201d\u5c06\u4e3a32768\u884c\u3002")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u521b\u5efa\u6570\u636e\u8df3\u6570\u7d22\u5f15\u65f6\uff0c\u8868\u7684\u6bcf\u4e2a\u6570\u636e\u90e8\u5206\u76ee\u5f55\u4e2d\u5c06\u6709\u4e24\u4e2a\u989d\u5916\u7684\u6587\u4ef6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"skp",(0,i.kt)("em",{parentName:"li"},"idx"),"{index_name}.idx\uff1a\u5305\u542b\u6392\u5e8f\u7684\u8868\u8fbe\u5f0f\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"skp",(0,i.kt)("em",{parentName:"li"},"idx"),"{index_name}.mrk2\uff1a\u5305\u542b\u5173\u8054\u6570\u636e\u5217\u6587\u4ef6\u4e2d\u7684\u76f8\u5e94\u504f\u79fb\u91cf\u3002")),(0,i.kt)("p",null,"\u5982\u679c\u5728\u6267\u884c\u67e5\u8be2\u5e76\u8bfb\u53d6\u76f8\u5173\u5217\u6587\u4ef6\u65f6\uff0cWHERE\u5b50\u53e5\u8fc7\u6ee4\u6761\u4ef6\u7684\u67d0\u4e9b\u90e8\u5206\u4e0e\u8df3\u6570\u7d22\u5f15\u8868\u8fbe\u5f0f\u5339\u914d\uff0cClickHouse\u5c06\u4f7f\u7528\u7d22\u5f15\u6587\u4ef6\u6570\u636e\u6765\u786e\u5b9a\u6bcf\u4e2a\u76f8\u5173\u7684\u6570\u636e\u5757\u662f\u5fc5\u987b\u88ab\u5904\u7406\u8fd8\u662f\u53ef\u4ee5\u88ab\u7ed5\u8fc7(\u5047\u8bbe\u5757\u8fd8\u6ca1\u6709\u901a\u8fc7\u5e94\u7528\u4e3b\u952e\u7d22\u5f15\u88ab\u6392\u9664)\u3002\u8fd9\u91cc\u7528\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u793a\u4f8b\uff1a\u8003\u8651\u4ee5\u4e0b\u52a0\u8f7d\u4e86\u53ef\u9884\u6d4b\u6570\u636e\u7684\u8868\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE skip_table\n(\n  my_key UInt64,\n  my_value UInt64\n)\nENGINE MergeTree primary key my_key\nSETTINGS index_granularity=8192;\n\nINSERT INTO skip_table SELECT number, intDiv(number,4096) FROM numbers(100000000);\n")),(0,i.kt)("p",null,"\u5f53\u6267\u884c\u4e00\u4e2a\u4e0d\u4f7f\u7528\u4e3b\u952e\u7684\u7b80\u5355\u67e5\u8be2\u65f6\uff0c\u5c06\u626b\u63cfmy_value\u5217\u6240\u6709\u7684\u4e00\u4ebf\u6761\u8bb0\u5f55\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT * FROM skip_table WHERE my_value IN (125, 700)\n\n\u250c\u2500my_key\u2500\u252c\u2500my_value\u2500\u2510\n\u2502 512000 \u2502      125 \u2502\n\u2502 512001 \u2502      125 \u2502\n\u2502    ... |      ... |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n8192 rows in set. Elapsed: 0.079 sec. Processed 100.00 million rows, 800.10 MB (1.26 billion rows/s., 10.10 GB/s.\n")),(0,i.kt)("p",null,"\u589e\u52a0\u4e00\u4e2a\u57fa\u672c\u7684\u8df3\u6570\u7d22\u5f15\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ALTER TABLE skip_table ADD INDEX vix my_value TYPE set(100) GRANULARITY 2;\n")),(0,i.kt)("p",null,"\u901a\u5e38\uff0c\u8df3\u6570\u7d22\u5f15\u53ea\u5e94\u7528\u4e8e\u65b0\u63d2\u5165\u7684\u6570\u636e\uff0c\u6240\u4ee5\u4ec5\u4ec5\u6dfb\u52a0\u7d22\u5f15\u4e0d\u4f1a\u5f71\u54cd\u4e0a\u8ff0\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u8981\u4f7f\u5df2\u7ecf\u5b58\u5728\u7684\u6570\u636e\u751f\u6548\uff0c\u90a3\u6267\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ALTER TABLE skip_table MATERIALIZE INDEX vix;\n")),(0,i.kt)("p",null,"\u91cd\u8dd1SQL\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT * FROM skip_table WHERE my_value IN (125, 700)\n\n\u250c\u2500my_key\u2500\u252c\u2500my_value\u2500\u2510\n\u2502 512000 \u2502      125 \u2502\n\u2502 512001 \u2502      125 \u2502\n\u2502    ... |      ... |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n8192 rows in set. Elapsed: 0.051 sec. Processed 32.77 thousand rows, 360.45 KB (643.75 thousand rows/s., 7.08 MB/s.)\n")),(0,i.kt)("p",null,"\u8fd9\u6b21\u6ca1\u6709\u518d\u53bb\u5904\u74061\u4ebf\u884c800MB\u7684\u6570\u636e\uff0cClickHouse\u53ea\u8bfb\u53d6\u548c\u5206\u679032768\u884c360KB\u7684\u6570\u636e\u20144\u4e2agranule\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u4e0b\u56fe\u662f\u66f4\u76f4\u89c2\u7684\u5c55\u793a\uff0c\u8fd9\u5c31\u662f\u5982\u4f55\u8bfb\u53d6\u548c\u9009\u62e9my_value\u4e3a125\u76844096\u884c\uff0c\u4ee5\u53ca\u5982\u4f55\u8df3\u8fc7\u4ee5\u4e0b\u884c\u800c\u4e0d\u4ece\u78c1\u76d8\u8bfb\u53d6:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simple Skip",src:n(12555).Z,width:"595",height:"518"})),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u6267\u884c\u67e5\u8be2\u65f6\u542f\u7528\u8ddf\u8e2a\uff0c\u7528\u6237\u53ef\u4ee5\u770b\u5230\u5173\u4e8e\u8df3\u6570\u7d22\u5f15\u4f7f\u7528\u60c5\u51b5\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u5728clickhouse-client\u4e2d\u8bbe\u7f6esend_logs_level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET send_logs_level='trace';\n")),(0,i.kt)("p",null,"\u8fd9\u5c06\u5728\u5c1d\u8bd5\u8c03\u4f18\u67e5\u8be2SQL\u548c\u8868\u7d22\u5f15\u65f6\u63d0\u4f9b\u6709\u7528\u7684\u8c03\u8bd5\u4fe1\u606f\u3002\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u8c03\u8bd5\u65e5\u5fd7\u663e\u793a\u8df3\u6570\u7d22\u5f15\u8fc7\u6ee4\u4e86\u5927\u90e8\u5206granule\uff0c\u53ea\u8bfb\u53d6\u4e86\u4e24\u4e2a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Debug> default.skip_table (933d4b2c-8cea-4bf9-8c93-c56e900eefd1) (SelectExecutor): Index `vix` has dropped 6102/6104 granules.\n")),(0,i.kt)("h3",{id:"\u8df3\u6570\u7d22\u5f15\u7c7b\u578b"},"\u8df3\u6570\u7d22\u5f15\u7c7b\u578b"),(0,i.kt)("h4",{id:"minmax"},"minmax"),(0,i.kt)("p",null,"\u8fd9\u79cd\u8f7b\u91cf\u7ea7\u7d22\u5f15\u7c7b\u578b\u4e0d\u9700\u8981\u53c2\u6570\u3002\u5b83\u5b58\u50a8\u6bcf\u4e2a\u5757\u7684\u7d22\u5f15\u8868\u8fbe\u5f0f\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c(\u5982\u679c\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u5143\u7ec4\uff0c\u5b83\u5206\u522b\u5b58\u50a8\u5143\u7ec4\u5143\u7d20\u7684\u6bcf\u4e2a\u6210\u5458\u7684\u503c)\u3002\u5bf9\u4e8e\u503e\u5411\u4e8e\u6309\u503c\u677e\u6563\u6392\u5e8f\u7684\u5217\uff0c\u8fd9\u79cd\u7c7b\u578b\u975e\u5e38\u7406\u60f3\u3002\u5728\u67e5\u8be2\u5904\u7406\u671f\u95f4\uff0c\u8fd9\u79cd\u7d22\u5f15\u7c7b\u578b\u7684\u5f00\u9500\u901a\u5e38\u662f\u6700\u5c0f\u7684\u3002"),(0,i.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684\u7d22\u5f15\u53ea\u9002\u7528\u4e8e\u6807\u91cf\u6216\u5143\u7ec4\u8868\u8fbe\u5f0f\u2014\u2014\u7d22\u5f15\u6c38\u8fdc\u4e0d\u9002\u7528\u4e8e\u8fd4\u56de\u6570\u7ec4\u6216map\u6570\u636e\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("h4",{id:"set"},"set"),(0,i.kt)("p",null,"\u8fd9\u79cd\u8f7b\u91cf\u7ea7\u7d22\u5f15\u7c7b\u578b\u63a5\u53d7\u5355\u4e2a\u53c2\u6570max_size\uff0c\u5373\u6bcf\u4e2a\u5757\u7684\u503c\u96c6(0\u5141\u8bb8\u65e0\u9650\u6570\u91cf\u7684\u79bb\u6563\u503c)\u3002\u8fd9\u4e2a\u96c6\u5408\u5305\u542b\u5757\u4e2d\u7684\u6240\u6709\u503c(\u5982\u679c\u503c\u7684\u6570\u91cf\u8d85\u8fc7max_size\u5219\u4e3a\u7a7a)\u3002\u8fd9\u79cd\u7d22\u5f15\u7c7b\u578b\u9002\u7528\u4e8e\u6bcf\u7ec4\u9897\u7c92\u4e2d\u57fa\u6570\u8f83\u4f4e(\u672c\u8d28\u4e0a\u662f\u201c\u805a\u96c6\u5728\u4e00\u8d77\u201d)\u4f46\u603b\u4f53\u57fa\u6570\u8f83\u9ad8\u7684\u5217\u3002"),(0,i.kt)("p",null,"\u8be5\u7d22\u5f15\u7684\u6210\u672c\u3001\u6027\u80fd\u548c\u6709\u6548\u6027\u53d6\u51b3\u4e8e\u5757\u4e2d\u7684\u57fa\u6570\u3002\u5982\u679c\u6bcf\u4e2a\u5757\u5305\u542b\u5927\u91cf\u60df\u4e00\u503c\uff0c\u90a3\u4e48\u9488\u5bf9\u5927\u578b\u7d22\u5f15\u96c6\u8ba1\u7b97\u67e5\u8be2\u6761\u4ef6\u5c06\u975e\u5e38\u6602\u8d35\uff0c\u6216\u8005\u7531\u4e8e\u7d22\u5f15\u8d85\u8fc7max_size\u800c\u4e3a\u7a7a\uff0c\u56e0\u6b64\u7d22\u5f15\u5c06\u4e0d\u5e94\u7528\u3002"),(0,i.kt)("h4",{id:"bloom-filter-types"},"Bloom Filter Types"),(0,i.kt)("p",null,"Bloom filter\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u5141\u8bb8\u5bf9\u96c6\u5408\u6210\u5458\u8fdb\u884c\u9ad8\u6548\u7684\u662f\u5426\u5b58\u5728\u6d4b\u8bd5\uff0c\u4f46\u4ee3\u4ef7\u662f\u6709\u8f7b\u5fae\u7684\u8bef\u62a5\u3002\u5728\u8df3\u6570\u7d22\u5f15\u7684\u4f7f\u7528\u573a\u666f\uff0c\u5047\u9633\u6027\u4e0d\u662f\u4e00\u4e2a\u5927\u95ee\u9898\uff0c\u56e0\u4e3a\u60df\u4e00\u7684\u95ee\u9898\u53ea\u662f\u8bfb\u53d6\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u5757\u3002\u6f5c\u5728\u7684\u5047\u9633\u6027\u610f\u5473\u7740\u7d22\u5f15\u8868\u8fbe\u5f0f\u5e94\u8be5\u4e3a\u771f\uff0c\u5426\u5219\u6709\u6548\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u88ab\u8df3\u8fc7\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3aBloom filter\u53ef\u4ee5\u66f4\u6709\u6548\u5730\u5904\u7406\u5927\u91cf\u79bb\u6563\u503c\u7684\u6d4b\u8bd5\uff0c\u6240\u4ee5\u5b83\u4eec\u53ef\u4ee5\u9002\u7528\u4e8e\u5927\u91cf\u6761\u4ef6\u8868\u8fbe\u5f0f\u5224\u65ad\u7684\u573a\u666f\u3002\u7279\u522b\u7684\u662fBloom filter\u7d22\u5f15\u53ef\u4ee5\u5e94\u7528\u4e8e\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u503c\u90fd\u88ab\u6d4b\u8bd5\uff0c\u4e5f\u53ef\u4ee5\u5e94\u7528\u4e8emap\uff0c\u901a\u8fc7\u4f7f\u7528mapKeys\u6216mapValues\u51fd\u6570\u5c06\u952e\u6216\u503c\u8f6c\u6362\u4e3a\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u6709\u4e09\u79cd\u57fa\u4e8eBloom\u8fc7\u6ee4\u5668\u7684\u6570\u636e\u8df3\u6570\u7d22\u5f15\u7c7b\u578b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u672c\u7684",(0,i.kt)("strong",{parentName:"p"},"bloom_filter"),"\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u8868\u793a\u57280\u52301\u4e4b\u95f4\u5141\u8bb8\u7684\u201c\u5047\u9633\u6027\u201d\u7387(\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u4f7f\u7528.025)\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u66f4\u4e13\u4e1a\u7684",(0,i.kt)("strong",{parentName:"p"},"tokenbf_v1"),"\u3002\u9700\u8981\u4e09\u4e2a\u53c2\u6570\uff0c\u7528\u6765\u4f18\u5316\u5e03\u9686\u8fc7\u6ee4\u5668\uff1a\uff081\uff09\u8fc7\u6ee4\u5668\u7684\u5927\u5c0f\u5b57\u8282(\u5927\u8fc7\u6ee4\u5668\u6709\u66f4\u5c11\u7684\u5047\u9633\u6027\uff0c\u6709\u66f4\u9ad8\u7684\u5b58\u50a8\u6210\u672c)\uff0c\uff082\uff09\u54c8\u5e0c\u51fd\u6570\u7684\u4e2a\u6570(\u66f4\u591a\u7684\u6563\u5217\u51fd\u6570\u53ef\u4ee5\u51cf\u5c11\u5047\u9633\u6027)\u3002\uff083\uff09\u5e03\u9686\u8fc7\u6ee4\u5668\u54c8\u5e0c\u51fd\u6570\u7684\u79cd\u5b50\u3002\u6709\u5173\u8fd9\u4e9b\u53c2\u6570\u5982\u4f55\u5f71\u54cd\u5e03\u9686\u8fc7\u6ee4\u5668\u529f\u80fd\u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u9605  ",(0,i.kt)("a",{parentName:"p",href:"https://hur.st/bloomfilter/"},"\u8fd9\u91cc"),"  \u3002\u6b64\u7d22\u5f15\u4ec5\u9002\u7528\u4e8eString\u3001FixedString\u548cMap\u7c7b\u578b\u7684\u6570\u636e\u3002\u8f93\u5165\u8868\u8fbe\u5f0f\u88ab\u5206\u5272\u4e3a\u7531\u975e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u5206\u9694\u7684\u5b57\u7b26\u5e8f\u5217\u3002\u4f8b\u5982\uff0c\u5217\u503c",(0,i.kt)("inlineCode",{parentName:"p"},'This is a candidate for a "full text" search'),"\u5c06\u88ab\u5206\u5272\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"This")," ",(0,i.kt)("inlineCode",{parentName:"p"},"is")," ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," ",(0,i.kt)("inlineCode",{parentName:"p"},"candidate")," ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," ",(0,i.kt)("inlineCode",{parentName:"p"},"full")," ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," ",(0,i.kt)("inlineCode",{parentName:"p"},"search"),"\u3002\u5b83\u7528\u4e8eLIKE\u3001EQUALS\u3001in\u3001hasToken()\u548c\u7c7b\u4f3c\u7684\u957f\u5b57\u7b26\u4e32\u4e2d\u5355\u8bcd\u548c\u5176\u4ed6\u503c\u7684\u641c\u7d22\u3002\u4f8b\u5982\uff0c\u4e00\u79cd\u53ef\u80fd\u7684\u7528\u9014\u662f\u5728\u975e\u7ed3\u6784\u7684\u5e94\u7528\u7a0b\u5e8f\u65e5\u5fd7\u884c\u5217\u4e2d\u641c\u7d22\u5c11\u91cf\u7684\u7c7b\u540d\u6216\u884c\u53f7\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u66f4\u4e13\u4e1a\u7684",(0,i.kt)("strong",{parentName:"p"},"ngrambf_v1"),"\u3002\u8be5\u7d22\u5f15\u7684\u529f\u80fd\u4e0etokenbf_v1\u76f8\u540c\u3002\u5728Bloom filter\u8bbe\u7f6e\u4e4b\u524d\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684\u53c2\u6570\uff0c\u5373\u8981\u7d22\u5f15\u7684ngram\u7684\u5927\u5c0f\u3002\u4e00\u4e2angram\u662f\u957f\u5ea6\u4e3an\u7684\u4efb\u4f55\u5b57\u7b26\u4e32\uff0c\u6bd4\u5982\u5982\u679cn\u662f4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"A short string"),"\u4f1a\u88ab\u5206\u5272\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"A sh`` sho"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"shor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hort"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ort s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"or st"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"r str"),", ",(0,i.kt)("inlineCode",{parentName:"p"}," stri"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"trin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ring"),"\u3002\u8fd9\u4e2a\u7d22\u5f15\u5bf9\u4e8e\u6587\u672c\u641c\u7d22\u4e5f\u5f88\u6709\u7528\uff0c\u7279\u522b\u662f\u6ca1\u6709\u5355\u8bcd\u95f4\u65ad\u7684\u8bed\u8a00\uff0c\u6bd4\u5982\u4e2d\u6587\u3002"))),(0,i.kt)("h3",{id:"\u8df3\u6570\u7d22\u5f15\u51fd\u6570"},"\u8df3\u6570\u7d22\u5f15\u51fd\u6570"),(0,i.kt)("p",null,"\u8df3\u6570\u7d22\u5f15\u6838\u5fc3\u76ee\u7684\u662f\u9650\u5236\u6d41\u884c\u67e5\u8be2\u5206\u6790\u7684\u6570\u636e\u91cf\u3002\u9274\u4e8eClickHouse\u6570\u636e\u7684\u5206\u6790\u7279\u6027\uff0c\u8fd9\u4e9b\u67e5\u8be2\u7684\u6a21\u5f0f\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u5305\u542b\u51fd\u6570\u8868\u8fbe\u5f0f\u3002\u56e0\u6b64\uff0c\u8df3\u6570\u7d22\u5f15\u5fc5\u987b\u4e0e\u5e38\u7528\u51fd\u6570\u6b63\u786e\u4ea4\u4e92\u624d\u80fd\u63d0\u9ad8\u6548\u7387\u3002\u8fd9\u79cd\u60c5\u51b5\u53ef\u80fd\u53d1\u751f\u5728:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u63d2\u5165\u6570\u636e\u5e76\u5c06\u7d22\u5f15\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f(\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u5b58\u50a8\u5728\u7d22\u5f15\u6587\u4ef6\u4e2d)\u6216\u8005"),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u67e5\u8be2\uff0c\u5e76\u5c06\u8868\u8fbe\u5f0f\u5e94\u7528\u4e8e\u5b58\u50a8\u7684\u7d22\u5f15\u503c\uff0c\u4ee5\u786e\u5b9a\u662f\u5426\u6392\u9664\u6570\u636e\u5757\u3002")),(0,i.kt)("p",null,"\u6bcf\u79cd\u7c7b\u578b\u7684\u8df3\u6570\u7d22\u5f15\u652f\u6301\u7684\u51fd\u6570\u5217\u8868\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#functions-support"},"\u8fd9\u91cc")," \u3002\u901a\u5e38\uff0c\u96c6\u5408\u7d22\u5f15\u548c\u57fa\u4e8eBloom filter\u7684\u7d22\u5f15(\u53e6\u4e00\u79cd\u7c7b\u578b\u7684\u96c6\u5408\u7d22\u5f15)\u90fd\u662f\u65e0\u5e8f\u7684\uff0c\u56e0\u6b64\u4e0d\u80fd\u7528\u4e8e\u8303\u56f4\u3002\u76f8\u53cd\uff0c\u6700\u5927\u6700\u5c0f\u503c\u7d22\u5f15\u5728\u8303\u56f4\u4e2d\u5de5\u4f5c\u5f97\u7279\u522b\u597d\uff0c\u56e0\u4e3a\u786e\u5b9a\u8303\u56f4\u662f\u5426\u76f8\u4ea4\u975e\u5e38\u5feb\u3002\u90e8\u5206\u5339\u914d\u51fd\u6570LIKE\u3001startsWith\u3001endsWith\u548chasToken\u7684\u6709\u6548\u6027\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684\u7d22\u5f15\u7c7b\u578b\u3001\u7d22\u5f15\u8868\u8fbe\u5f0f\u548c\u6570\u636e\u7684\u7279\u5b9a\u5f62\u72b6\u3002"),(0,i.kt)("h3",{id:"\u8df3\u6570\u7d22\u5f15\u7684\u914d\u7f6e"},"\u8df3\u6570\u7d22\u5f15\u7684\u914d\u7f6e"),(0,i.kt)("p",null,"\u6709\u4e24\u4e2a\u53ef\u7528\u7684\u8bbe\u7f6e\u53ef\u5e94\u7528\u4e8e\u8df3\u6570\u7d22\u5f15\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"use_skip_indexes")," (0\u62161\uff0c\u9ed8\u8ba4\u4e3a1)\u3002\u4e0d\u662f\u6240\u6709\u67e5\u8be2\u90fd\u53ef\u4ee5\u6709\u6548\u5730\u4f7f\u7528\u8df3\u8fc7\u7d22\u5f15\u3002\u5982\u679c\u4e00\u4e2a\u7279\u5b9a\u7684\u8fc7\u6ee4\u6761\u4ef6\u53ef\u80fd\u5305\u542b\u5f88\u591a\u9897\u7c92\uff0c\u90a3\u4e48\u5e94\u7528\u6570\u636e\u8df3\u8fc7\u7d22\u5f15\u5c06\u5bfc\u81f4\u4e0d\u5fc5\u8981\u7684\u3001\u6709\u65f6\u751a\u81f3\u662f\u975e\u5e38\u5927\u7684\u6210\u672c\u3002\u5bf9\u4e8e\u4e0d\u592a\u53ef\u80fd\u4ece\u4efb\u4f55\u8df3\u8fc7\u7d22\u5f15\u4e2d\u83b7\u76ca\u7684\u67e5\u8be2\uff0c\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"force_data_skipping_indexes")," (\u4ee5\u9017\u53f7\u5206\u9694\u7684\u7d22\u5f15\u540d\u5217\u8868)\u3002\u6b64\u8bbe\u7f6e\u53ef\u7528\u4e8e\u9632\u6b62\u67d0\u4e9b\u7c7b\u578b\u7684\u4f4e\u6548\u67e5\u8be2\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u9664\u975e\u4f7f\u7528\u8df3\u8fc7\u7d22\u5f15\uff0c\u5426\u5219\u67e5\u8be2\u8868\u7684\u5f00\u9500\u592a\u5927\uff0c\u5982\u679c\u5c06\u6b64\u8bbe\u7f6e\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a\u7d22\u5f15\u540d\u4e00\u8d77\u4f7f\u7528\uff0c\u5219\u5bf9\u4e8e\u4efb\u4f55\u6ca1\u6709\u4f7f\u7528\u6240\u5217\u7d22\u5f15\u7684\u67e5\u8be2\u5c06\u8fd4\u56de\u4e00\u4e2a\u5f02\u5e38\u3002\u8fd9\u5c06\u9632\u6b62\u7f16\u5199\u7cdf\u7cd5\u7684\u67e5\u8be2\u6d88\u8017\u670d\u52a1\u5668\u8d44\u6e90\u3002")),(0,i.kt)("h3",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,i.kt)("p",null,"\u8df3\u6570\u7d22\u5f15\u5e76\u4e0d\u76f4\u89c2\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u6765\u81eaRDMS\u9886\u57df\u5e76\u4e14\u4e60\u60ef\u4e8c\u7ea7\u884c\u7d22\u5f15\u6216\u6765\u81ea\u6587\u6863\u5b58\u50a8\u7684\u53cd\u5411\u7d22\u5f15\u7684\u7528\u6237\u6765\u8bf4\u3002\u8981\u83b7\u5f97\u4efb\u4f55\u4f18\u5316\uff0c\u5e94\u7528ClickHouse\u6570\u636e\u8df3\u6570\u7d22\u5f15\u5fc5\u987b\u907f\u514d\u8db3\u591f\u591a\u7684\u9897\u7c92\u8bfb\u53d6\uff0c\u4ee5\u62b5\u6d88\u8ba1\u7b97\u7d22\u5f15\u7684\u6210\u672c\u3002\u5173\u952e\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u503c\u5728\u4e00\u4e2a\u7d22\u5f15\u5757\u4e2d\u53ea\u51fa\u73b0\u4e00\u6b21\uff0c\u5c31\u610f\u5473\u7740\u6574\u4e2a\u5757\u5fc5\u987b\u8bfb\u5165\u5185\u5b58\u5e76\u8ba1\u7b97\uff0c\u800c\u7d22\u5f15\u5f00\u9500\u662f\u4e0d\u5fc5\u8981\u7684\u3002"),(0,i.kt)("p",null,"\u8003\u8651\u4ee5\u4e0b\u6570\u636e\u5206\u5e03\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bad Skip!",src:n(91862).Z,width:"726",height:"517"})),(0,i.kt)("p",null,"\u5047\u8bbe\u4e3b\u952e/\u987a\u5e8f\u662f\u65f6\u95f4\u6233\uff0c\u5e76\u4e14\u5728visitor_id\u4e0a\u6709\u4e00\u4e2a\u7d22\u5f15\u3002\u8003\u8651\u4e0b\u9762\u7684\u67e5\u8be2:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT timestamp, url FROM table WHERE visitor_id = 1001")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u79cd\u6570\u636e\u5206\u5e03\uff0c\u4f20\u7edf\u7684\u4e8c\u7ea7\u7d22\u5f15\u975e\u5e38\u6709\u5229\u3002\u4e0d\u662f\u8bfb\u53d6\u6240\u6709\u768432678\u884c\u6765\u67e5\u627e\u5177\u6709\u8bf7\u6c42\u7684visitor_id\u76845\u884c\uff0c\u800c\u662f\u4e8c\u7ea7\u7d22\u5f15\u53ea\u5305\u542b5\u884c\u4f4d\u7f6e\uff0c\u5e76\u4e14\u53ea\u4ece\u78c1\u76d8\u8bfb\u53d6\u8fd95\u884c\u3002ClickHouse\u6570\u636e\u8df3\u8fc7\u7d22\u5f15\u7684\u60c5\u51b5\u6b63\u597d\u76f8\u53cd\u3002\u65e0\u8bba\u8df3\u8f6c\u7d22\u5f15\u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff0cvisitor_id\u5217\u4e2d\u7684\u6240\u670932678\u503c\u90fd\u5c06\u88ab\u6d4b\u8bd5\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u8bd5\u56fe\u901a\u8fc7\u7b80\u5355\u5730\u5411\u952e\u5217\u6dfb\u52a0\u7d22\u5f15\u6765\u52a0\u901fClickHouse\u67e5\u8be2\u7684\u51b2\u52a8\u901a\u5e38\u662f\u4e0d\u6b63\u786e\u7684\u3002\u53ea\u6709\u5728\u7814\u7a76\u4e86\u5176\u4ed6\u66ff\u4ee3\u65b9\u6cd5\u4e4b\u540e\uff0c\u624d\u5e94\u8be5\u4f7f\u7528\u6b64\u9ad8\u7ea7\u529f\u80fd\uff0c\u4f8b\u5982\u4fee\u6539\u4e3b\u952e(\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/guides/improving-query-performance/sparse-primary-indexes"},"\u5982\u4f55\u9009\u62e9\u4e3b\u952e"),")\u3001\u4f7f\u7528\u6295\u5f71\u6216\u4f7f\u7528\u5b9e\u4f53\u5316\u89c6\u56fe\u3002\u5373\u4f7f\u8df3\u6570\u7d22\u5f15\u662f\u5408\u9002\u7684\uff0c\u4e5f\u7ecf\u5e38\u9700\u8981\u5bf9\u7d22\u5f15\u548c\u8868\u8fdb\u884c\u4ed4\u7ec6\u7684\u8c03\u4f18\u3002"),(0,i.kt)("p",null,"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u6709\u7528\u7684\u8df3\u6570\u7d22\u5f15\u9700\u8981\u4e3b\u952e\u548c\u76ee\u6807\u7684\u975e\u4e3b\u5217/\u8868\u8fbe\u5f0f\u4e4b\u95f4\u5177\u6709\u5f88\u5f3a\u7684\u76f8\u5173\u6027\u3002\u5982\u679c\u6ca1\u6709\u76f8\u5173\u6027(\u5982\u4e0a\u56fe\u6240\u793a)\uff0c\u90a3\u4e48\u5728\u5305\u542b\u6570\u5343\u4e2a\u503c\u7684\u5757\u4e2d\uff0c\u81f3\u5c11\u6709\u4e00\u884c\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684\u53ef\u80fd\u6027\u5f88\u9ad8\uff0c\u5e76\u4e14\u53ea\u6709\u51e0\u4e2a\u5757\u4f1a\u88ab\u8df3\u8fc7\u3002\u76f8\u53cd\uff0c\u5982\u679c\u4e3b\u952e\u7684\u503c\u8303\u56f4(\u5982\u4e00\u5929\u4e2d\u7684\u65f6\u95f4)\u4e0e\u6f5c\u5728\u7d22\u5f15\u5217\u4e2d\u7684\u503c\u5f3a\u76f8\u5173(\u5982\u7535\u89c6\u89c2\u4f17\u5e74\u9f84)\uff0c\u5219\u6700\u5c0f\u503c\u7c7b\u578b\u7684\u7d22\u5f15\u53ef\u80fd\u662f\u6709\u76ca\u7684\u3002\u6ce8\u610f\uff0c\u5728\u63d2\u5165\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u589e\u52a0\u8fd9\u79cd\u76f8\u5173\u6027\uff0c\u65b9\u6cd5\u662f\u5728sort /ORDER by\u952e\u4e2d\u5305\u542b\u989d\u5916\u7684\u5217\uff0c\u6216\u8005\u4ee5\u5728\u63d2\u5165\u65f6\u5bf9\u4e0e\u4e3b\u952e\u5173\u8054\u7684\u503c\u8fdb\u884c\u5206\u7ec4\u7684\u65b9\u5f0f\u5bf9\u63d2\u5165\u8fdb\u884c\u6279\u5904\u7406\u3002\u4f8b\u5982\uff0c\u5373\u4f7f\u4e3b\u952e\u662f\u4e00\u4e2a\u5305\u542b\u5927\u91cf\u7ad9\u70b9\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\uff0c\u7279\u5b9asite_id\u7684\u6240\u6709\u4e8b\u4ef6\u4e5f\u90fd\u53ef\u4ee5\u88ab\u5206\u7ec4\u5e76\u7531\u5199\u5165\u8fdb\u7a0b\u63d2\u5165\u5230\u4e00\u8d77\uff0c\u8fd9\u5c06\u5bfc\u81f4\u8bb8\u591a\u53ea\u5305\u542b\u5c11\u91cf\u7ad9\u70b9id\u7684\u9897\u7c92\uff0c\u56e0\u6b64\u5f53\u6839\u636e\u7279\u5b9a\u7684site_id\u503c\u641c\u7d22\u65f6\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8bb8\u591a\u5757\u3002"),(0,i.kt)("p",null,"\u8df3\u6570\u7d22\u5f15\u7684\u53e6\u4e00\u4e2a\u5019\u9009\u8005\u662f\u9ad8\u57fa\u6570\u8868\u8fbe\u5f0f\uff0c\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u503c\u5728\u6570\u636e\u4e2d\u90fd\u76f8\u5bf9\u7a00\u758f\u3002\u4e00\u4e2a\u53ef\u80fd\u7684\u4f8b\u5b50\u662f\u8ddf\u8e2aAPI\u8bf7\u6c42\u4e2d\u7684\u9519\u8bef\u4ee3\u7801\u7684\u53ef\u89c2\u5bdf\u6027\u5e73\u53f0\u3002\u67d0\u4e9b\u9519\u8bef\u4ee3\u7801\u867d\u7136\u5728\u6570\u636e\u4e2d\u5f88\u5c11\u51fa\u73b0\uff0c\u4f46\u5bf9\u641c\u7d22\u6765\u8bf4\u53ef\u80fd\u7279\u522b\u91cd\u8981\u3002error_code\u5217\u4e0a\u7684set skip\u7d22\u5f15\u5c06\u5141\u8bb8\u7ed5\u8fc7\u7edd\u5927\u591a\u6570\u4e0d\u5305\u542b\u9519\u8bef\u7684\u5757\uff0c\u4ece\u800c\u663e\u8457\u6539\u5584\u9488\u5bf9\u9519\u8bef\u7684\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u6700\u540e\uff0c\u5173\u952e\u7684\u6700\u4f73\u5b9e\u8df5\u662f\u6d4b\u8bd5\u3001\u6d4b\u8bd5\u3001\u518d\u6d4b\u8bd5\u3002\u540c\u6837\uff0c\u4e0e\u7528\u4e8e\u641c\u7d22\u6587\u6863\u7684b-\u6811\u4e8c\u7ea7\u7d22\u5f15\u6216\u5012\u6392\u7d22\u5f15\u4e0d\u540c\uff0c\u8df3\u6570\u7d22\u5f15\u884c\u4e3a\u662f\u4e0d\u5bb9\u6613\u9884\u6d4b\u7684\u3002\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u8868\u4e2d\u4f1a\u5728\u6570\u636e\u6444\u53d6\u548c\u67e5\u8be2\u65b9\u9762\u4ea7\u751f\u5f88\u5927\u7684\u6210\u672c\uff0c\u8fd9\u4e9b\u67e5\u8be2\u7531\u4e8e\u5404\u79cd\u539f\u56e0\u4e0d\u80fd\u4ece\u7d22\u5f15\u4e2d\u53d7\u76ca\u3002\u5b83\u4eec\u5e94\u8be5\u603b\u662f\u5728\u771f\u5b9e\u4e16\u754c\u7684\u6570\u636e\u7c7b\u578b\u4e0a\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u5e94\u8be5\u5305\u62ec\u7c7b\u578b\u3001\u7c92\u5ea6\u5927\u5c0f\u548c\u5176\u4ed6\u53c2\u6570\u7684\u53d8\u5316\u3002\u6d4b\u8bd5\u901a\u5e38\u4f1a\u66b4\u9732\u4ec5\u4ec5\u901a\u8fc7\u601d\u8003\u4e0d\u80fd\u53d1\u73b0\u7684\u9677\u9631\u3002"))}k.isMDXComponent=!0},91862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bad_skip_1-43ca5929727f9e32bf386d7687525d1b.svg"},12555:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/simple_skip-52c0988d126255fdb7aa8ad94036b1f7.svg"}}]);