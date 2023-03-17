"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[58217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),_=r,k=c["".concat(s,".").concat(_)]||c[_]||d[_]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=_;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},65053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/zh/engines/table-engines/integrations/hdfs",sidebar_position:36,sidebar_label:"HDFS"},l="HDFS",o={unversionedId:"zh/engines/table-engines/integrations/hdfs",id:"zh/engines/table-engines/integrations/hdfs",title:"HDFS",description:"table_engines-hdfs}",source:"@site/docs/zh/engines/table-engines/integrations/hdfs.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/hdfs",permalink:"/docs/zh/engines/table-engines/integrations/hdfs",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/hdfs.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{slug:"/zh/engines/table-engines/integrations/hdfs",sidebar_position:36,sidebar_label:"HDFS"},sidebar:"chinese",previous:{title:"ODBC",permalink:"/docs/zh/engines/table-engines/integrations/odbc"},next:{title:"Kafka",permalink:"/docs/zh/engines/table-engines/integrations/kafka"}},s={},p=[{value:"\u7528\u6cd5",id:"usage",level:2},{value:"\u5b9e\u65bd\u7ec6\u8282",id:"implementation-details",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u53ef\u9009\u914d\u7f6e\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u5217\u8868",id:"\u53ef\u9009\u914d\u7f6e\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u5217\u8868",level:3},{value:"libhdfs3 \u652f\u6301\u7684",id:"libhdfs3-\u652f\u6301\u7684",level:4},{value:"ClickHouse \u989d\u5916\u7684\u914d\u7f6e",id:"clickhouse-extras",level:4},{value:"\u9650\u5236",id:"limitations",level:4},{value:"Kerberos \u652f\u6301",id:"kerberos-support",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table_engines-hdfs"},"HDFS"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5f15\u64ce\u63d0\u4f9b\u4e86\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Apache_Hadoop"},"Apache Hadoop")," \u751f\u6001\u7cfb\u7edf\u7684\u96c6\u6210\uff0c\u5141\u8bb8\u901a\u8fc7 ClickHouse \u7ba1\u7406 ",(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS")," \u4e0a\u7684\u6570\u636e\u3002\u8fd9\u4e2a\u5f15\u64ce\u7c7b\u4f3c\u4e8e\n",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/file#table_engines-file"},"\u6587\u4ef6")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/url#table_engines-url"},"URL")," \u5f15\u64ce\uff0c\u4f46\u63d0\u4f9b\u4e86 Hadoop \u7684\u7279\u5b9a\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"usage"},"\u7528\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = HDFS(URI, format)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u53c2\u6570\u662f HDFS \u4e2d\u6574\u4e2a\u6587\u4ef6\u7684 URI\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"format")," \u53c2\u6570\u6307\u5b9a\u4e00\u79cd\u53ef\u7528\u7684\u6587\u4ef6\u683c\u5f0f\u3002 \u6267\u884c\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u65f6\uff0c\u683c\u5f0f\u5fc5\u987b\u652f\u6301\u8f93\u5165\uff0c\u4ee5\u53ca\u6267\u884c\n",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u65f6\uff0c\u683c\u5f0f\u5fc5\u987b\u652f\u6301\u8f93\u51fa. \u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f")," \u7ae0\u8282\u67e5\u770b\u53ef\u7528\u7684\u683c\u5f0f\u3002\n\u8def\u5f84\u90e8\u5206 ",(0,r.kt)("inlineCode",{parentName:"p"},"URI")," \u53ef\u80fd\u5305\u542b glob \u901a\u914d\u7b26\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8868\u5c06\u662f\u53ea\u8bfb\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs_engine_table")," \u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hdfs_engine_table (name String, value UInt32) ENGINE=HDFS('hdfs://hdfs1:9000/other_storage', 'TSV')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," \u586b\u5145\u6587\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hdfs_engine_table VALUES ('one', 1), ('two', 2), ('three', 3)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," \u67e5\u8be2\u6570\u636e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hdfs_engine_table LIMIT 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"implementation-details"},"\u5b9e\u65bd\u7ec6\u8282"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u548c\u5199\u5165\u53ef\u4ee5\u5e76\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ALTER")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," \u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u590d\u5236\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8def\u5f84\u4e2d\u7684\u901a\u914d\u7b26")),(0,r.kt)("p",null,"\u591a\u4e2a\u8def\u5f84\u7ec4\u4ef6\u53ef\u4ee5\u5177\u6709 globs\u3002 \u5bf9\u4e8e\u6b63\u5728\u5904\u7406\u7684\u6587\u4ef6\u5e94\u8be5\u5b58\u5728\u5e76\u5339\u914d\u5230\u6574\u4e2a\u8def\u5f84\u6a21\u5f0f\u3002 \u6587\u4ef6\u5217\u8868\u7684\u786e\u5b9a\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," \u7684\u65f6\u5019\u8fdb\u884c\uff08\u800c\u4e0d\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," \u7684\u65f6\u5019\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*")," \u2014 \u66ff\u4ee3\u4efb\u4f55\u6570\u91cf\u7684\u4efb\u4f55\u5b57\u7b26\uff0c\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," \u4ee5\u53ca\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"?")," \u2014 \u4ee3\u66ff\u4efb\u4f55\u5355\u4e2a\u5b57\u7b26."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{some_string,another_string,yet_another_one}")," \u2014 \u66ff\u4ee3\u4efb\u4f55\u5b57\u7b26\u4e32 ",(0,r.kt)("inlineCode",{parentName:"li"},"'some_string', 'another_string', 'yet_another_one'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{N..M}")," \u2014 \u66ff\u6362 N \u5230 M \u8303\u56f4\u5185\u7684\u4efb\u4f55\u6570\u5b57\uff0c\u5305\u62ec\u4e24\u4e2a\u8fb9\u754c\u7684\u503c.")),(0,r.kt)("p",null,"\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," \u7684\u7ed3\u6784\u7c7b\u4f3c\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/table-functions/remote"},"\u8fdc\u7a0b")," \u8868\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u6211\u4eec\u5728 HDFS \u4e0a\u6709\u51e0\u4e2a TSV \u683c\u5f0f\u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u7684 URI \u5982\u4e0b:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_1\u2019"),(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_2\u2019"),(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/some_dir/some_file_3\u2019"),(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_1\u2019"),(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_2\u2019"),(0,r.kt)("li",{parentName:"ul"},"\u2018hdfs://hdfs1:9000/another_dir/some_file_3\u2019")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u7531\u6240\u6709\u516d\u4e2a\u6587\u4ef6\u7ec4\u6210\u7684\u8868:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_range (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/some_file_{1..3}', 'TSV')\n")),(0,r.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_question_mark (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/some_file_?', 'TSV')\n")),(0,r.kt)("p",null,"\u8868\u7531\u4e24\u4e2a\u76ee\u5f55\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u7ec4\u6210\uff08\u6240\u6709\u6587\u4ef6\u90fd\u5e94\u6ee1\u8db3query\u4e2d\u63cf\u8ff0\u7684\u683c\u5f0f\u548c\u6a21\u5f0f):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_asterisk (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/{some,another}_dir/*', 'TSV')\n")),(0,r.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5982\u679c\u6587\u4ef6\u5217\u8868\u5305\u542b\u5e26\u6709\u524d\u5bfc\u96f6\u7684\u6570\u5b57\u8303\u56f4\uff0c\u8bf7\u5355\u72ec\u4f7f\u7528\u5e26\u6709\u5927\u62ec\u53f7\u7684\u6784\u9020\u6216\u4f7f\u7528 ',(0,r.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u521b\u5efa\u5177\u6709\u540d\u4e3a\u6587\u4ef6\u7684\u8868 ",(0,r.kt)("inlineCode",{parentName:"p"},"file000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"file001"),", \u2026 , ",(0,r.kt)("inlineCode",{parentName:"p"},"file999"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREARE TABLE big_table (name String, value UInt32) ENGINE = HDFS('hdfs://hdfs1:9000/big_dir/file{0..9}{0..9}{0..9}', 'CSV')\n")),(0,r.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e0e GraphiteMergeTree \u7c7b\u4f3c\uff0cHDFS \u5f15\u64ce\u652f\u6301\u4f7f\u7528 ClickHouse \u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u6269\u5c55\u914d\u7f6e\u3002\u6709\u4e24\u4e2a\u914d\u7f6e\u952e\u53ef\u4ee5\u4f7f\u7528\uff1a\u5168\u5c40 (",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs"),") \u548c\u7528\u6237\u7ea7\u522b (",(0,r.kt)("inlineCode",{parentName:"p"},"hdfs_*"),")\u3002\u9996\u5148\u5168\u5c40\u914d\u7f6e\u751f\u6548\uff0c\u7136\u540e\u7528\u6237\u7ea7\u522b\u914d\u7f6e\u751f\u6548 (\u5982\u679c\u7528\u6237\u7ea7\u522b\u914d\u7f6e\u5b58\u5728) \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'  \x3c!-- HDFS \u5f15\u64ce\u7c7b\u578b\u7684\u5168\u5c40\u914d\u7f6e\u9009\u9879 --\x3e\n  <hdfs>\n    <hadoop_kerberos_keytab>/tmp/keytab/clickhouse.keytab</hadoop_kerberos_keytab>\n    <hadoop_kerberos_principal>clickuser@TEST.CLICKHOUSE.TECH</hadoop_kerberos_principal>\n    <hadoop_security_authentication>kerberos</hadoop_security_authentication>\n  </hdfs>\n\n  \x3c!-- \u7528\u6237 "root" \u7684\u6307\u5b9a\u914d\u7f6e --\x3e\n  <hdfs_root>\n    <hadoop_kerberos_principal>root@TEST.CLICKHOUSE.TECH</hadoop_kerberos_principal>\n  </hdfs_root>\n')),(0,r.kt)("h3",{id:"\u53ef\u9009\u914d\u7f6e\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u5217\u8868"},"\u53ef\u9009\u914d\u7f6e\u9009\u9879\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u5217\u8868"),(0,r.kt)("h4",{id:"libhdfs3-\u652f\u6301\u7684"},"libhdfs3 \u652f\u6301\u7684"),(0,r.kt)("p",null,"| ",(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"                                               | ",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"               |\n| rpc","_","client","_","connect","_","tcpnodelay                      | true                    |\n| dfs","_","client","_","read","_","shortcircuit                       | true                    |\n| output","_","replace-datanode-on-failure                   | true                    |\n| input","_","notretry-another-node                          | false                   |\n| input","_","localread","_","mappedfile                          | true                    |\n| dfs","_","client","_","use","_","legacy","_","blockreader","_","local          | false                   |\n| rpc","_","client","_","ping","_","interval                           | 10  ",(0,r.kt)("em",{parentName:"p"}," 1000              |\n| rpc","_","client","_","connect","_","timeout                         | 600 ")," 1000              |\n| rpc","_","client","_","read","_","timeout                            | 3600 ",(0,r.kt)("em",{parentName:"p"}," 1000             |\n| rpc","_","client","_","write","_","timeout                           | 3600 ")," 1000             |\n| rpc","_","client","_","socekt","_","linger","_","timeout                  | -1                      |\n| rpc","_","client","_","connect","_","retry                           | 10                      |\n| rpc","_","client","_","timeout                                  | 3600 ",(0,r.kt)("em",{parentName:"p"}," 1000             |\n| dfs","_","default","_","replica                                 | 3                       |\n| input","_","connect","_","timeout                               | 600 ")," 1000              |\n| input","_","read","_","timeout                                  | 3600 ",(0,r.kt)("em",{parentName:"p"}," 1000             |\n| input","_","write","_","timeout                                 | 3600 ")," 1000             |\n| input","_","localread","_","default","_","buffersize                 | 1 ",(0,r.kt)("em",{parentName:"p"}," 1024 ")," 1024         |\n| dfs","_","prefetchsize                                     | 10                      |\n| input","_","read","_","getblockinfo","_","retry                      | 3                       |\n| input","_","localread","_","blockinfo","_","cachesize                | 1000                    |\n| input","_","read","_","max","_","retry                               | 60                      |\n| output","_","default","_","chunksize                            | 512                     |\n| output","_","default","_","packetsize                           | 64 ",(0,r.kt)("em",{parentName:"p"}," 1024               |\n| output","_","default","_","write","_","retry                         | 10                      |\n| output","_","connect","_","timeout                              | 600 ")," 1000              |\n| output","_","read","_","timeout                                 | 3600 ",(0,r.kt)("em",{parentName:"p"}," 1000             |\n| output","_","write","_","timeout                                | 3600 ")," 1000             |\n| output","_","close","_","timeout                                | 3600 ",(0,r.kt)("em",{parentName:"p"}," 1000             |\n| output","_","packetpool","_","size                              | 1024                    |\n| output","_","heeartbeat","_","interval                          | 10 ")," 1000               |\n| dfs","_","client","_","failover","_","max","_","attempts                  | 15                      |\n| dfs","_","client","_","read","_","shortcircuit","_","streams","_","cache","_","size | 256                     |\n| dfs","_","client","_","socketcache","_","expiryMsec                  | 3000                    |\n| dfs","_","client","_","socketcache","_","capacity                    | 16                      |\n| dfs","_","default","_","blocksize                               | 64 ",(0,r.kt)("em",{parentName:"p"}," 1024 ")," 1024        |\n| dfs","_","default","_",'uri                                     | "hdfs://localhost:9000" |\n| hadoop',"_","security","_",'authentication                      | "simple"                |\n| hadoop',"_","security","_","kerberos","_","ticket","_","cache","_",'path       | ""                      |\n| dfs',"_","client","_","log","_",'severity                            | "INFO"                  |\n| dfs',"_","domain","_","socket","_",'path                             | ""                      |'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hawq.apache.org/docs/userguide/2.3.0.0-incubating/reference/HDFSConfigurationParameterReference.html"},"HDFS \u914d\u7f6e\u53c2\u8003")," \u4e5f\u8bb8\u4f1a\u89e3\u91ca\u4e00\u4e9b\u53c2\u6570\u7684\u542b\u4e49."),(0,r.kt)("h4",{id:"clickhouse-extras"},"ClickHouse \u989d\u5916\u7684\u914d\u7f6e"),(0,r.kt)("p",null,"| ",(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570"),"                                              | ",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u503c"),"               |\n|hadoop","_","kerberos","_",'keytab                               | ""                      |\n|hadoop',"_","kerberos","_",'principal                            | ""                      |\n|hadoop',"_","kerberos","_","kinit","_","command                       | kinit                   |"),(0,r.kt)("h4",{id:"limitations"},"\u9650\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hadoop","_","security","_","kerberos","_","ticket","_","cache","_","path \u53ea\u80fd\u5728\u5168\u5c40\u914d\u7f6e, \u4e0d\u80fd\u6307\u5b9a\u7528\u6237")),(0,r.kt)("h2",{id:"kerberos-support"},"Kerberos \u652f\u6301"),(0,r.kt)("p",null,"\u5982\u679c hadoop","_","security","_","authentication \u53c2\u6570\u7684\u503c\u4e3a 'kerberos' \uff0cClickHouse \u5c06\u901a\u8fc7 Kerberos \u8bbe\u65bd\u8fdb\u884c\u8ba4\u8bc1\u3002\n",(0,r.kt)("a",{parentName:"p",href:"#clickhouse-extras"},"\u8fd9\u91cc\u7684")," \u53c2\u6570\u548c hadoop","_","security","_","kerberos","_","ticket","_","cache","_","path \u4e5f\u8bb8\u4f1a\u6709\u5e2e\u52a9.\n\u6ce8\u610f\uff0c\u7531\u4e8e libhdfs3 \u7684\u9650\u5236\uff0c\u53ea\u652f\u6301\u8001\u5f0f\u7684\u65b9\u6cd5\u3002\n\u6570\u636e\u8282\u70b9\u7684\u5b89\u5168\u901a\u4fe1\u65e0\u6cd5\u7531 SASL \u4fdd\u8bc1 ( HADOOP","_","SECURE","_","DN","_","USER \u662f\u8fd9\u79cd\u5b89\u5168\u65b9\u6cd5\u7684\u4e00\u4e2a\u53ef\u9760\u6307\u6807)\n\u4f7f\u7528 tests/integration/test","_","storage","_","kerberized","_","hdfs/hdfs_configs/bootstrap.sh \u811a\u672c\u4f5c\u4e3a\u53c2\u8003\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86 hadoop","_","kerberos","_","keytab, hadoop","_","kerberos","_","principal \u6216\u8005 hadoop","_","kerberos","_","kinit","_","command \uff0c\u5c06\u4f1a\u8c03\u7528 kinit \u5de5\u5177.\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c hadoop","_","kerberos","_","keytab \u548c hadoop","_","kerberos","_","principal \u53c2\u6570\u662f\u5fc5\u987b\u914d\u7f6e\u7684. kinit \u5de5\u5177\u548c krb5 \u914d\u7f6e\u6587\u4ef6\u662f\u5fc5\u8981\u7684."),(0,r.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_path")," \u2014 \u6587\u4ef6\u8def\u5f84."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_file")," \u2014 \u6587\u4ef6\u540d.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/#table_engines-virtual_columns"},"\u865a\u62df\u5217"))))}d.isMDXComponent=!0}}]);