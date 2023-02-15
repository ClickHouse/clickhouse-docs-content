"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[3348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/operations/system-tables/distribution_queue"},s="system.distribution_queue",o={unversionedId:"zh/operations/system-tables/distribution_queue",id:"zh/operations/system-tables/distribution_queue",title:"system.distribution_queue",description:"systemtables-distributionqueue}",source:"@site/docs/zh/operations/system-tables/distribution_queue.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/distribution_queue",permalink:"/docs/zh/operations/system-tables/distribution_queue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/distribution_queue.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/distribution_queue"},sidebar:"chinese",previous:{title:"system.distributed_ddl_queue",permalink:"/docs/zh/operations/system-tables/distributed_ddl_queue"},next:{title:"system.enabled_roles",permalink:"/docs/zh/operations/system-tables/enabled-roles"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-distribution_queue"},"system.distribution_queue"),(0,a.kt)("p",null,"\u5305\u542b\u5173\u4e8e\u961f\u5217\u4e2d\u8981\u53d1\u9001\u5230\u5206\u7247\u7684\u672c\u5730\u6587\u4ef6\u7684\u4fe1\u606f. \u8fd9\u4e9b\u672c\u5730\u6587\u4ef6\u5305\u542b\u901a\u8fc7\u4ee5\u5f02\u6b65\u6a21\u5f0f\u5c06\u65b0\u6570\u636e\u63d2\u5165\u5230Distributed\u8868\u4e2d\u800c\u521b\u5efa\u7684\u65b0\u90e8\u5206."),(0,a.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5e93\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"table")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8868\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"data_path")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5b58\u653e\u672c\u5730\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u7684\u8def\u5f84.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_blocked")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 Flag\u8868\u793a\u662f\u5426\u963b\u6b62\u5411\u670d\u52a1\u5668\u53d1\u9001\u672c\u5730\u6587\u4ef6.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"error_count")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u9519\u8bef\u603b\u6570.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"data_files")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u6587\u4ef6\u5939\u4e2d\u7684\u672c\u5730\u6587\u4ef6\u6570.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u672c\u5730\u6587\u4ef6\u4e2d\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"broken_data_files")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u88ab\u6807\u8bb0\u4e3a\u635f\u574f\u7684\u6587\u4ef6\u6570\u91cf(\u7531\u4e8e\u9519\u8bef).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"broken_data_compressed_bytes")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7834\u788e\u6587\u4ef6\u4e2d\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"last_exception")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5173\u4e8e\u6700\u8fd1\u53d1\u751f\u7684\u9519\u8bef\u7684\u6587\u672c\u4fe1\u606f(\u5982\u679c\u6709\u7684\u8bdd)."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.distribution_queue LIMIT 1 FORMAT Vertical;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:              default\ntable:                 dist\ndata_path:             ./store/268/268bc070-3aad-4b1a-9cf2-4987580161af/default@127%2E0%2E0%2E2:9000/\nis_blocked:            1\nerror_count:           0\ndata_files:            1\ndata_compressed_bytes: 499\nlast_exception:\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/distributed"},"\u5206\u5e03\u5f0f\u8868\u5f15\u64ce"))))}d.isMDXComponent=!0}}]);