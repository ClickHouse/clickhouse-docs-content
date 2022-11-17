"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(r),k=a,d=u["".concat(i,".").concat(k)]||u[k]||c[k]||p;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={slug:"/zh/sql-reference/table-functions/remote"},l="remote, remoteSecure",o={unversionedId:"zh/sql-reference/table-functions/remote",id:"zh/sql-reference/table-functions/remote",title:"remote, remoteSecure",description:"remote-remotesecure}",source:"@site/docs/zh/sql-reference/table-functions/remote.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/remote",permalink:"/docs/zh/sql-reference/table-functions/remote",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/remote.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/table-functions/remote"},sidebar:"chinese",previous:{title:"mysql",permalink:"/docs/zh/sql-reference/table-functions/mysql"},next:{title:"\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/"}},i={},s=[],m={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-remotesecure"},"remote, remoteSecure"),(0,a.kt)("p",null,"\u5141\u8bb8\u60a8\u8bbf\u95ee\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u800c\u65e0\u9700\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Distributed")," \u8868\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"remoteSecure")," - \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," \u76f8\u540c\uff0c\u4f46\u662f\u4f1a\u4f7f\u7528\u52a0\u5bc6\u94fe\u63a5\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e24\u4e2a\u51fd\u6570\u90fd\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u4e2d\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"remote('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremote('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db, table[, 'user'[, 'password'], sharding_key])\nremoteSecure('addresses_expr', db.table[, 'user'[, 'password'], sharding_key])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"addresses_expr")," \u2013 \u4ee3\u8868\u8fdc\u7a0b\u670d\u52a1\u5668\u5730\u5740\u7684\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u53ef\u4ee5\u53ea\u662f\u5355\u4e2a\u670d\u52a1\u5668\u5730\u5740\u3002 \u670d\u52a1\u5668\u5730\u5740\u53ef\u4ee5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"host:port")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"host"),"\u3002"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," \u53ef\u4ee5\u6307\u5b9a\u4e3a\u670d\u52a1\u5668\u540d\u79f0\uff0c\u6216\u662fIPV4\u6216IPV6\u5730\u5740\u3002IPv6\u5730\u5740\u5728\u65b9\u62ec\u53f7\u4e2d\u6307\u5b9a\u3002"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," \u662f\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u7684TCP\u7aef\u53e3\u3002 \u5982\u679c\u7701\u7565\u7aef\u53e3\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," \u4f7f\u7528\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," \uff08\u9ed8\u8ba4\u60c5\u51b5\u4e3a\uff0c9000\uff09\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"remoteSecure")," \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," \uff08\u9ed8\u8ba4\u60c5\u51b5\u4e3a\uff0c9440\uff09\u3002"),(0,a.kt)("p",{parentName:"li"},"  IPv6\u5730\u5740\u9700\u8981\u6307\u5b9a\u7aef\u53e3\u3002"),(0,a.kt)("p",{parentName:"li"},"  \u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"db")," \u2014 \u6570\u636e\u5e93\u540d\u3002\u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"table")," \u2014 \u8868\u540d\u3002\u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u2014 \u7528\u6237\u540d\u3002\u5982\u679c\u672a\u6307\u5b9a\u7528\u6237\uff0c\u5219\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," \u3002\u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"password")," \u2014 \u7528\u6237\u5bc6\u7801\u3002\u5982\u679c\u672a\u6307\u5b9a\u5bc6\u7801\uff0c\u5219\u4f7f\u7528\u7a7a\u5bc6\u7801\u3002\u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"sharding_key")," \u2014 \u5206\u7247\u952e\u4ee5\u652f\u6301\u5728\u8282\u70b9\u4e4b\u95f4\u5206\u5e03\u6570\u636e\u3002 \u4f8b\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"insert into remote('127.0.0.1:9000,127.0.0.2', db, table, 'default', rand())"),"\u3002 \u7c7b\u578b: ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),"\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",{parentName:"li"},"\u6765\u81ea\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u6570\u636e\u96c6\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7528\u6cd5")),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," \u8868\u51fd\u6570\u6ca1\u6709\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Distributed")," \u8868\u66f4\u4f18\uff0c\u56e0\u4e3a\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c06\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u91cd\u65b0\u5efa\u7acb\u670d\u52a1\u5668\u8fde\u63a5\u3002\u6b64\u5916\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u4e3b\u673a\u540d\uff0c\u5219\u4f1a\u89e3\u6790\u8fd9\u4e9b\u540d\u79f0\uff0c\u5e76\u4e14\u5728\u4f7f\u7528\u5404\u79cd\u526f\u672c\u65f6\u4e0d\u4f1a\u8ba1\u5165\u9519\u8bef\u3002 \u5728\u5904\u7406\u5927\u91cf\u67e5\u8be2\u65f6\uff0c\u59cb\u7ec8\u4f18\u5148\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Distributed")," \u8868\uff0c\u4e0d\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," \u8868\u51fd\u6570\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"remote")," \u8868\u51fd\u6570\u53ef\u4ee5\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\u662f\u6709\u7528\u7684:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u7279\u5b9a\u670d\u52a1\u5668\u8fdb\u884c\u6570\u636e\u6bd4\u8f83\u3001\u8c03\u8bd5\u548c\u6d4b\u8bd5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u591a\u4e2aClickHouse\u96c6\u7fa4\u4e4b\u95f4\u7684\u7528\u6237\u7814\u7a76\u76ee\u7684\u7684\u67e5\u8be2\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u624b\u52a8\u53d1\u51fa\u7684\u4e0d\u9891\u7e41\u5206\u5e03\u5f0f\u8bf7\u6c42\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u6b21\u91cd\u65b0\u5b9a\u4e49\u670d\u52a1\u5668\u96c6\u7684\u5206\u5e03\u5f0f\u8bf7\u6c42\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5730\u5740")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1\nexample01-01-1:9000\nlocalhost\n127.0.0.1\n[::]:9000\n[2a02:6b8:0:1111::11]:9000\n")),(0,a.kt)("p",null,"\u591a\u4e2a\u5730\u5740\u53ef\u4ee5\u7528\u9017\u53f7\u5206\u9694\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cClickHouse\u5c06\u4f7f\u7528\u5206\u5e03\u5f0f\u5904\u7406\uff0c\u56e0\u6b64\u5b83\u5c06\u5c06\u67e5\u8be2\u53d1\u9001\u5230\u6240\u6709\u6307\u5b9a\u7684\u5730\u5740\uff08\u5982\u5177\u6709\u4e0d\u540c\u6570\u636e\u7684\u5206\u7247\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example01-01-1,example01-02-1\n")),(0,a.kt)("p",null,"\u8868\u8fbe\u5f0f\u7684\u4e00\u90e8\u5206\u53ef\u4ee5\u7528\u5927\u62ec\u53f7\u6307\u5b9a\u3002 \u524d\u9762\u7684\u793a\u4f8b\u53ef\u4ee5\u5199\u6210\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example01-0{1,2}-1\n")),(0,a.kt)("p",null,"\u5927\u62ec\u53f7\u53ef\u4ee5\u5305\u542b\u7531\u4e24\u4e2a\u70b9\uff08\u975e\u8d1f\u6574\u6570\uff09\u5206\u9694\u7684\u6570\u5b57\u8303\u56f4\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8303\u56f4\u5c06\u6269\u5c55\u4e3a\u751f\u6210\u5206\u7247\u5730\u5740\u7684\u4e00\u7ec4\u503c\u3002 \u5982\u679c\u7b2c\u4e00\u4e2a\u6570\u5b57\u4ee5\u96f6\u5f00\u5934\uff0c\u5219\u4f7f\u7528\u76f8\u540c\u7684\u96f6\u5bf9\u9f50\u5f62\u6210\u503c\u3002 \u524d\u9762\u7684\u793a\u4f8b\u53ef\u4ee5\u5199\u6210\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example01-{01..02}-1\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6709\u591a\u5bf9\u5927\u62ec\u53f7\uff0c\u5b83\u4f1a\u751f\u6210\u76f8\u5e94\u96c6\u5408\u7684\u76f4\u63a5\u4e58\u79ef\u3002"),(0,a.kt)("p",null,"\u5927\u62ec\u53f7\u4e2d\u7684\u5730\u5740\u548c\u90e8\u5206\u5730\u5740\u53ef\u4ee5\u7528\u7ba1\u9053\u7b26\u53f7(","|",")\u5206\u9694\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u76f8\u5e94\u7684\u5730\u5740\u96c6\u88ab\u89e3\u91ca\u4e3a\u526f\u672c\uff0c\u5e76\u4e14\u67e5\u8be2\u5c06\u88ab\u53d1\u9001\u5230\u7b2c\u4e00\u4e2a\u6b63\u5e38\u526f\u672c\u3002 \u4f46\u662f\uff0c\u526f\u672c\u5c06\u6309\u7167\u5f53\u524d",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings"},"load_balancing"),"\u8bbe\u7f6e\u7684\u987a\u5e8f\u8fdb\u884c\u8fed\u4ee3\u3002\u6b64\u793a\u4f8b\u6307\u5b9a\u4e24\u4e2a\u5206\u7247\uff0c\u6bcf\u4e2a\u5206\u7247\u90fd\u6709\u4e24\u4e2a\u526f\u672c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"example01-{01..02}-{1|2}\n")),(0,a.kt)("p",null,"\u751f\u6210\u7684\u5730\u5740\u6570\u7531\u5e38\u91cf\u9650\u5236\u3002\u76ee\u524d\u8fd9\u662f1000\u4e2a\u5730\u5740\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u9009\u62e9\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM remote('127.0.0.1', db.remote_engine_table) LIMIT 3;\n")),(0,a.kt)("p",null,"\u5c06\u8fdc\u7a0b\u670d\u52a1\u5668\u4e2d\u7684\u6570\u636e\u63d2\u5165\u8868\u4e2d:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE remote_table (name String, value UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION remote('127.0.0.1', currentDatabase(), 'remote_table') VALUES ('test', 42);\nSELECT * FROM remote_table;\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/remote/"},"\u539f\u59cb\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);