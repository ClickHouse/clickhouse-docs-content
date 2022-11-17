"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=u,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:u,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),u=(t(67294),t(3905));const a={slug:"/zh/sql-reference/functions/uuid-functions"},i="UUID\u51fd\u6570",l={unversionedId:"zh/sql-reference/functions/uuid-functions",id:"zh/sql-reference/functions/uuid-functions",title:"UUID\u51fd\u6570",description:"uuidhan-shu}",source:"@site/docs/zh/sql-reference/functions/uuid-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/uuid-functions",permalink:"/docs/zh/sql-reference/functions/uuid-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/uuid-functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/uuid-functions"},sidebar:"chinese",previous:{title:"URL\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/url-functions"},next:{title:"\u4f7f\u7528 Yandex.Metrica \u5b57\u5178\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/ym-dict-functions"}},o={},c=[{value:"generateuidv4",id:"uuid-function-generate",level:2},{value:"toUUID(x)",id:"touuid-x",level:2},{value:"UUIDStringToNum",id:"uuidstringtonum",level:2},{value:"UUIDNumToString",id:"uuidnumtostring",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"ling-qing-can-yue",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,u.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"uuidhan-shu"},"UUID\u51fd\u6570"),(0,u.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u6240\u6709UUID\u7684\u76f8\u5173\u51fd\u6570"),(0,u.kt)("h2",{id:"uuid-function-generate"},"generateuidv4"),(0,u.kt)("p",null,"\u751f\u6210\u4e00\u4e2aUUID\uff08",(0,u.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"\u7248\u672c4"),"\uff09\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"generateUUIDv4()\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,u.kt)("p",null,"UUID\u7c7b\u578b\u7684\u503c\u3002"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,u.kt)("p",null,"\u6b64\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u5728\u8868\u4e2d\u521b\u5efaUUID\u7c7b\u578b\u7684\u5217\uff0c\u5e76\u5bf9\u5176\u5199\u5165\u6570\u636e\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},":) CREATE TABLE t_uuid (x UUID) ENGINE=TinyLog\n\n:) INSERT INTO t_uuid SELECT generateUUIDv4()\n\n:) SELECT * FROM t_uuid\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u2510\n\u2502 f4bf890f-f9dc-4332-ad5c-0c18e73f28e9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"touuid-x"},"toUUID(x)"),(0,u.kt)("p",null,"\u5c06String\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3aUUID\u7c7b\u578b\u7684\u503c\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"toUUID(String)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,u.kt)("p",null,"UUID\u7c7b\u578b\u7684\u503c"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"uuidstringtonum"},"UUIDStringToNum"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u503c\uff0c\u5176\u4e2d\u5305\u542b36\u4e2a\u5b57\u7b26\u4e14\u683c\u5f0f\u4e3a",(0,u.kt)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),"\uff0c\u5c06\u5176\u8f6c\u6362\u4e3aUUID\u7684\u6570\u503c\u5e76\u4ee5",(0,u.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/uuid-functions"},"\u56fa\u5b9a\u5b57\u7b26\u4e32(16)"),"\u5c06\u5176\u8fd4\u56de\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"UUIDStringToNum(String)\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,u.kt)("p",null,"\u56fa\u5b9a\u5b57\u7b26\u4e32(16)"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT\n    '612f3c40-5d3b-217e-707b-6a546a3d7b29' AS uuid,\n    UUIDStringToNum(uuid) AS bytes\n\n\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502 a/<@];!~p{jTj={) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"uuidnumtostring"},"UUIDNumToString"),(0,u.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a",(0,u.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/uuid-functions"},"\u56fa\u5b9a\u5b57\u7b26\u4e32(16)"),"\u7c7b\u578b\u7684\u503c\uff0c\u8fd4\u56de\u5176\u5bf9\u5e94\u7684String\u8868\u73b0\u5f62\u5f0f\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"UUIDNumToString(FixedString(16))\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,u.kt)("p",null,"\u5b57\u7b26\u4e32\u3002"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u793a\u4f8b")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    'a/<@];!~p{jTj={)' AS bytes,\n    UUIDNumToString(toFixedString(bytes, 16)) AS uuid\n\n\u250c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 a/<@];!~p{jTj={) \u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"ling-qing-can-yue"},"\u53e6\u8bf7\u53c2\u9605"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/ext-dict-functions"},"dictgetuid"))),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/uuid_function/"},"\u6765\u6e90\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);