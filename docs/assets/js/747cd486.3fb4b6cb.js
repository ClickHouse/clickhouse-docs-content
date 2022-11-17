"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/zh/operations/system-tables/quota_usage"},s="system.quota_usage",i={unversionedId:"zh/operations/system-tables/quota_usage",id:"zh/operations/system-tables/quota_usage",title:"system.quota_usage",description:"systemtables-quotausage}",source:"@site/docs/zh/operations/system-tables/quota_usage.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/quota_usage",permalink:"/docs/zh/operations/system-tables/quota_usage",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/quota_usage.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/quota_usage"},sidebar:"chinese",previous:{title:"system.quota_limits",permalink:"/docs/zh/operations/system-tables/quota_limits"},next:{title:"system.quotas",permalink:"/docs/zh/operations/system-tables/quotas"}},o={},p=[{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-quota_usage"},"system.quota_usage"),(0,n.kt)("p",null,"\u5f53\u524d\u7528\u6237\u7684\u914d\u989d\u4f7f\u7528\u60c5\u51b5: \u4f7f\u7528\u4e86\u591a\u5c11, \u8fd8\u5269\u591a\u5c11."),(0,n.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u540d\u79f0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"quota_key"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u6570\u503c. \u6bd4\u5982, if keys = ","[",(0,n.kt)("inlineCode",{parentName:"li"},"ip address"),"]",", ",(0,n.kt)("inlineCode",{parentName:"li"},"quota_key")," \u53ef\u80fd\u6709\u4e00\u4e2a\u503c \u2018192.168.1.1\u2019."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_time"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u5f00\u59cb\u65f6\u95f4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"end_time"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u7ed3\u675f\u65f6\u95f4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u65f6\u95f4\u95f4\u9694\u957f\u5ea6, \u5355\u4f4d\u4e3a\u79d2."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"queries")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u7684\u8bf7\u6c42\u603b\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_selects")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u67e5\u8be2\u8bf7\u6c42\u7684\u603b\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query_inserts")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u63d2\u5165\u8bf7\u6c42\u7684\u603b\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u8bf7\u6c42\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"errors")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u629b\u51fa\u5f02\u5e38\u7684\u67e5\u8be2\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u9519\u8bef\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7ed3\u679c\u7ed9\u51fa\u7684\u603b\u884c\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u7ed3\u679c\u884c\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684RAM\u5bb9\u91cf(\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684\u6700\u5927RAM\u5bb9\u91cf\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of source rows read from tables for running the query on all remote servers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u884c\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u603b\u5b57\u8282\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u5b57\u8282\u6570."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execution_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),")) \u2014 \u603b\u67e5\u8be2\u6267\u884c\u65f6\u95f4, \u4ee5\u79d2\u4e3a\u5355\u4f4d(\u6302\u5899\u65f6\u95f4)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),")) \u2014 \u67e5\u8be2\u6700\u5927\u6267\u884c\u65f6\u95f4.")),(0,n.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-quota-statement"},"\u67e5\u770b\u914d\u989d\u4fe1\u606f"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quota_usage"},"\u539f\u59cb\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);