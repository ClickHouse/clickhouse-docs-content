"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96939],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37256:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],i={},o="system.quota_usage",u={unversionedId:"zh/operations/system-tables/quota_usage",id:"zh/operations/system-tables/quota_usage",title:"system.quota_usage",description:"systemtables-quotausage}",source:"@site/docs/zh/operations/system-tables/quota_usage.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/quota_usage",permalink:"/docs/zh/operations/system-tables/quota_usage",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/quota_usage.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.quota_limits",permalink:"/docs/zh/operations/system-tables/quota_limits"},next:{title:"system.quotas",permalink:"/docs/zh/operations/system-tables/quotas"}},p={},c=[{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-quota_usage"},"system.quota_usage"),(0,l.kt)("p",null,"\u5f53\u524d\u7528\u6237\u7684\u914d\u989d\u4f7f\u7528\u60c5\u51b5: \u4f7f\u7528\u4e86\u591a\u5c11, \u8fd8\u5269\u591a\u5c11."),(0,l.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u540d\u79f0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_key"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u6570\u503c. \u6bd4\u5982, if keys = ","[",(0,l.kt)("inlineCode",{parentName:"li"},"ip address"),"]",", ",(0,l.kt)("inlineCode",{parentName:"li"},"quota_key")," \u53ef\u80fd\u6709\u4e00\u4e2a\u503c \u2018192.168.1.1\u2019."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start_time"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u5f00\u59cb\u65f6\u95f4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_time"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u7ed3\u675f\u65f6\u95f4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u65f6\u95f4\u95f4\u9694\u957f\u5ea6, \u5355\u4f4d\u4e3a\u79d2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"queries")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u7684\u8bf7\u6c42\u603b\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u67e5\u8be2\u8bf7\u6c42\u7684\u603b\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5728\u6b64\u95f4\u9694\u5185\u63d2\u5165\u8bf7\u6c42\u7684\u603b\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u8bf7\u6c42\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"errors")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u629b\u51fa\u5f02\u5e38\u7684\u67e5\u8be2\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u9519\u8bef\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7ed3\u679c\u7ed9\u51fa\u7684\u603b\u884c\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u7ed3\u679c\u884c\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684RAM\u5bb9\u91cf(\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684\u6700\u5927RAM\u5bb9\u91cf\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 The total number of source rows read from tables for running the query on all remote servers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u884c\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u603b\u5b57\u8282\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u5b57\u8282\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),")) \u2014 \u603b\u67e5\u8be2\u6267\u884c\u65f6\u95f4, \u4ee5\u79d2\u4e3a\u5355\u4f4d(\u6302\u5899\u65f6\u95f4)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),")) \u2014 \u67e5\u8be2\u6700\u5927\u6267\u884c\u65f6\u95f4.")),(0,l.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/show#show-quota-statement"},"\u67e5\u770b\u914d\u989d\u4fe1\u606f"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quota_usage"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);