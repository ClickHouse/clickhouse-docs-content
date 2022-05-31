"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97424],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),k=s(r),h=a,d=k["".concat(c,".").concat(h)]||k[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},66848:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={sidebar_position:49,sidebar_label:"\u6570\u636e\u5907\u4efd"},c="\u6570\u636e\u5907\u4efd",s={unversionedId:"zh/operations/backup",id:"zh/operations/backup",title:"\u6570\u636e\u5907\u4efd",description:"data-backup}",source:"@site/docs/zh/operations/backup.md",sourceDirName:"zh/operations",slug:"/zh/operations/backup",permalink:"/docs/zh/operations/backup",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/backup.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"\u6570\u636e\u5907\u4efd"},sidebar:"chinese",previous:{title:"SSL X.509 certificate authentication",permalink:"/docs/zh/operations/external-authenticators/ssl-x509"},next:{title:"\u8bbe\u7f6e",permalink:"/docs/zh/operations/settings/"}},l={},u=[{value:"\u5c06\u6e90\u6570\u636e\u590d\u5236\u5230\u5176\u5b83\u5730\u65b9",id:"duplicating-source-data-somewhere-else",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf\u5feb\u7167",id:"filesystem-snapshots",level:2},{value:"clickhouse-copier",id:"clickhouse-copier",level:2},{value:"part\u64cd\u4f5c",id:"manipulations-with-parts",level:2}],k={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-backup"},"\u6570\u636e\u5907\u4efd"),(0,o.kt)("p",null,"\u5c3d\u7ba1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/replication"},"\u526f\u672c")," \u53ef\u4ee5\u63d0\u4f9b\u9488\u5bf9\u786c\u4ef6\u7684\u9519\u8bef\u9632\u62a4, \u4f46\u662f\u5b83\u4e0d\u80fd\u9884\u9632\u4eba\u4e3a\u64cd\u4f5c\u5931\u8bef: \u6570\u636e\u7684\u610f\u5916\u5220\u9664, \u9519\u8bef\u8868\u7684\u5220\u9664\u6216\u8005\u9519\u8bef\u96c6\u7fa4\u4e0a\u8868\u7684\u5220\u9664, \u4ee5\u53ca\u5bfc\u81f4\u9519\u8bef\u6570\u636e\u5904\u7406\u6216\u8005\u6570\u636e\u635f\u574f\u7684\u8f6f\u4ef6bug. \u5728\u5f88\u591a\u6848\u4f8b\u4e2d\uff0c\u8fd9\u7c7b\u610f\u5916\u53ef\u80fd\u4f1a\u5f71\u54cd\u6240\u6709\u7684\u526f\u672c. ClickHouse \u6709\u5185\u7f6e\u7684\u4fdd\u62a4\u63aa\u65bd\u53ef\u4ee5\u9884\u9632\u4e00\u4e9b\u9519\u8bef \u2014 \u4f8b\u5982, \u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#max-table-size-to-drop"},"\u4e0d\u80fd\u4eba\u5de5\u5220\u9664\u4f7f\u7528\u5e26\u6709MergeTree\u5f15\u64ce\u4e14\u5305\u542b\u8d85\u8fc750Gb\u6570\u636e\u7684\u8868"),". \u4f46\u662f\uff0c\u8fd9\u4e9b\u4fdd\u62a4\u63aa\u65bd\u4e0d\u80fd\u8986\u76d6\u6240\u6709\u53ef\u80fd\u60c5\u51b5\uff0c\u5e76\u4e14\u8fd9\u4e9b\u63aa\u65bd\u53ef\u4ee5\u88ab\u7ed5\u8fc7\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u6709\u6548\u5730\u51cf\u5c11\u53ef\u80fd\u7684\u4eba\u4e3a\u9519\u8bef\uff0c\u60a8\u5e94\u8be5 ",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u524d")," \u4ed4\u7ec6\u7684\u51c6\u5907\u5907\u4efd\u548c\u6570\u636e\u8fd8\u539f\u7684\u7b56\u7565."),(0,o.kt)("p",null,"\u4e0d\u540c\u516c\u53f8\u6709\u4e0d\u540c\u7684\u53ef\u7528\u8d44\u6e90\u548c\u4e1a\u52a1\u9700\u6c42\uff0c\u56e0\u6b64\u4e0d\u5b58\u5728\u4e00\u4e2a\u901a\u7528\u7684\u89e3\u51b3\u65b9\u6848\u53ef\u4ee5\u5e94\u5bf9\u5404\u79cd\u60c5\u51b5\u4e0b\u7684ClickHouse\u5907\u4efd\u548c\u6062\u590d\u3002 \u9002\u7528\u4e8e 1GB \u6570\u636e\u7684\u65b9\u6848\u53ef\u80fd\u5e76\u4e0d\u9002\u7528\u4e8e\u51e0\u5341 PB \u6570\u636e\u7684\u60c5\u51b5\u3002 \u6709\u591a\u79cd\u5177\u5907\u5404\u81ea\u4f18\u7f3a\u70b9\u7684\u53ef\u80fd\u65b9\u6cd5\uff0c\u5c06\u5728\u4e0b\u9762\u5bf9\u5176\u8fdb\u884c\u8ba8\u8bba\u3002\u6700\u597d\u4f7f\u7528\u51e0\u79cd\u65b9\u6cd5\u800c\u4e0d\u662f\u4ec5\u4ec5\u4f7f\u7528\u4e00\u79cd\u65b9\u6cd5\u6765\u5f25\u8865\u5b83\u4eec\u7684\u5404\u79cd\u7f3a\u70b9\u3002\u3002"),(0,o.kt)("p",null,'!!! note "\u6ce8"\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u60a8\u5907\u4efd\u4e86\u67d0\u4e9b\u5185\u5bb9\u5e76\u4e14\u4ece\u672a\u5c1d\u8bd5\u8fc7\u8fd8\u539f\u5b83\uff0c\u90a3\u4e48\u5f53\u60a8\u5b9e\u9645\u9700\u8981\u5b83\u65f6\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u6062\u590d\uff08\u6216\u8005\u81f3\u5c11\u9700\u8981\u7684\u65f6\u95f4\u6bd4\u4e1a\u52a1\u80fd\u591f\u5bb9\u5fcd\u7684\u65f6\u95f4\u66f4\u957f\uff09\u3002 \u56e0\u6b64\uff0c\u65e0\u8bba\u60a8\u9009\u62e9\u54ea\u79cd\u5907\u4efd\u65b9\u6cd5\uff0c\u8bf7\u786e\u4fdd\u81ea\u52a8\u8fd8\u539f\u8fc7\u7a0b\uff0c\u5e76\u5b9a\u671f\u5728\u5907\u7528ClickHouse\u7fa4\u96c6\u4e0a\u6f14\u7ec3\u3002'),(0,o.kt)("h2",{id:"duplicating-source-data-somewhere-else"},"\u5c06\u6e90\u6570\u636e\u590d\u5236\u5230\u5176\u5b83\u5730\u65b9"),(0,o.kt)("p",null,"\u901a\u5e38\u6444\u5165\u5230ClickHouse\u7684\u6570\u636e\u662f\u901a\u8fc7\u67d0\u79cd\u6301\u4e45\u961f\u5217\u4f20\u9012\u7684\uff0c\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka"),". \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e00\u7ec4\u989d\u5916\u7684\u8ba2\u9605\u670d\u52a1\u5668\uff0c\u8fd9\u4e9b\u8ba2\u9605\u670d\u52a1\u5668\u5c06\u5728\u5199\u5165ClickHouse\u65f6\u8bfb\u53d6\u76f8\u540c\u7684\u6570\u636e\u6d41\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728\u51b7\u5b58\u50a8\u4e2d\u3002 \u5927\u591a\u6570\u516c\u53f8\u5df2\u7ecf\u6709\u4e00\u4e9b\u9ed8\u8ba4\u63a8\u8350\u7684\u51b7\u5b58\u50a8\uff0c\u53ef\u80fd\u662f\u5bf9\u8c61\u5b58\u50a8\u6216\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff0c\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),"."),(0,o.kt)("h2",{id:"filesystem-snapshots"},"\u6587\u4ef6\u7cfb\u7edf\u5feb\u7167"),(0,o.kt)("p",null,"\u67d0\u4e9b\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u63d0\u4f9b\u5feb\u7167\u529f\u80fd\uff08\u4f8b\u5982, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS"),"\uff09\uff0c\u4f46\u5b83\u4eec\u53ef\u80fd\u4e0d\u662f\u63d0\u4f9b\u5b9e\u65f6\u67e5\u8be2\u7684\u6700\u4f73\u9009\u62e9\u3002 \u4e00\u4e2a\u53ef\u80fd\u7684\u89e3\u51b3\u65b9\u6848\u662f\u4f7f\u7528\u8fd9\u79cd\u6587\u4ef6\u7cfb\u7edf\u521b\u5efa\u989d\u5916\u7684\u526f\u672c\uff0c\u5e76\u5c06\u5b83\u4eec\u4e0e\u7528\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/distributed"},"\u5206\u5e03\u5f0f")," \u8868\u5206\u79bb\u3002 \u4efb\u4f55\u4fee\u6539\u6570\u636e\u7684\u67e5\u8be2\u90fd\u65e0\u6cd5\u8bbf\u95ee\u6b64\u7c7b\u526f\u672c\u4e0a\u7684\u5feb\u7167\u3002 \u4f5c\u4e3a\u56de\u62a5\uff0c\u8fd9\u4e9b\u526f\u672c\u53ef\u80fd\u5177\u6709\u7279\u6b8a\u7684\u786c\u4ef6\u914d\u7f6e\uff0c\u6bcf\u4e2a\u670d\u52a1\u5668\u9644\u52a0\u66f4\u591a\u7684\u78c1\u76d8\uff0c\u8fd9\u5c06\u662f\u7ecf\u6d4e\u9ad8\u6548\u7684\u3002"),(0,o.kt)("h2",{id:"clickhouse-copier"},"clickhouse-copier"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/utilities/clickhouse-copier"},"clickhouse-copier")," \u662f\u4e00\u4e2a\u591a\u529f\u80fd\u5de5\u5177\uff0c\u6700\u521d\u521b\u5efa\u5b83\u662f\u4e3a\u4e86\u7528\u4e8e\u91cd\u65b0\u5207\u5206pb\u5927\u5c0f\u7684\u8868\u3002 \u56e0\u4e3a\u5b83\u80fd\u591f\u5728ClickHouse\u8868\u548c\u96c6\u7fa4\u4e4b\u95f4\u53ef\u9760\u5730\u590d\u5236\u6570\u636e\uff0c\u6240\u4ee5\u5b83\u4e5f\u53ef\u7528\u4e8e\u5907\u4efd\u548c\u8fd8\u539f\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8f83\u5c0f\u7684\u6570\u636e\u91cf\uff0c\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT ...")," \u5230\u8fdc\u7a0b\u8868\u4e5f\u53ef\u4ee5\u5de5\u4f5c\u3002"),(0,o.kt)("h2",{id:"manipulations-with-parts"},"part\u64cd\u4f5c"),(0,o.kt)("p",null,"ClickHouse\u5141\u8bb8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... FREEZE PARTITION ...")," \u67e5\u8be2\u4ee5\u521b\u5efa\u8868\u5206\u533a\u7684\u672c\u5730\u526f\u672c\u3002 \u8fd9\u662f\u5229\u7528\u786c\u94fe\u63a5(hardlink)\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/")," \u6587\u4ef6\u5939\u4e2d\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u5b83\u901a\u5e38\u4e0d\u4f1a\u56e0\u4e3a\u65e7\u6570\u636e\u800c\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\u3002 \u521b\u5efa\u7684\u6587\u4ef6\u526f\u672c\u4e0d\u7531ClickHouse\u670d\u52a1\u5668\u5904\u7406\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u628a\u5b83\u4eec\u7559\u5728\u90a3\u91cc\uff1a\u4f60\u5c06\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u5907\u4efd\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u989d\u5916\u7684\u5916\u90e8\u7cfb\u7edf\uff0c\u4f46\u5b83\u4ecd\u7136\u5bb9\u6613\u51fa\u73b0\u786c\u4ef6\u95ee\u9898\u3002 \u51fa\u4e8e\u8fd9\u4e2a\u539f\u56e0\uff0c\u6700\u597d\u5c06\u5b83\u4eec\u8fdc\u7a0b\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7136\u540e\u5220\u9664\u672c\u5730\u526f\u672c\u3002 \u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u548c\u5bf9\u8c61\u5b58\u50a8\u4ecd\u7136\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\uff0c\u4f46\u662f\u5177\u6709\u8db3\u591f\u5927\u5bb9\u91cf\u7684\u6b63\u5e38\u9644\u52a0\u6587\u4ef6\u670d\u52a1\u5668\u4e5f\u53ef\u4ee5\u5de5\u4f5c\uff08\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f20\u8f93\u5c06\u901a\u8fc7\u7f51\u7edc\u6587\u4ef6\u7cfb\u7edf\u6216\u8005\u4e5f\u8bb8\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rsync"},"rsync")," \u6765\u8fdb\u884c)."),(0,o.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... ATTACH PARTITION ...")," \u4ece\u5907\u4efd\u4e2d\u6062\u590d\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u4e0e\u5206\u533a\u64cd\u4f5c\u76f8\u5173\u7684\u67e5\u8be2\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/alter#alter_manipulations-with-partitions"},"\u66f4\u6539\u6587\u6863"),"."),(0,o.kt)("p",null,"\u7b2c\u4e09\u65b9\u5de5\u5177\u53ef\u7528\u4e8e\u81ea\u52a8\u5316\u6b64\u65b9\u6cd5: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AlexAkulov/clickhouse-backup"},"clickhouse-backup"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/backup/"},"\u539f\u59cb\u6587\u7ae0")," "))}h.isMDXComponent=!0}}]);