"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84815],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:49,sidebar_label:"DateTime64"},s="Datetime64",p={unversionedId:"zh/sql-reference/data-types/datetime64",id:"zh/sql-reference/data-types/datetime64",title:"Datetime64",description:"data_type-datetime64}",source:"@site/docs/zh/sql-reference/data-types/datetime64.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/datetime64",permalink:"/docs/zh/sql-reference/data-types/datetime64",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/datetime64.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:49,sidebar_label:"DateTime64"},sidebar:"chinese",previous:{title:"Date32",permalink:"/docs/zh/sql-reference/data-types/date32"},next:{title:"\u4f4e\u57fa\u6570\u7c7b\u578b",permalink:"/docs/zh/sql-reference/data-types/lowcardinality"}},m={},c=[{value:"\u793a\u4f8b",id:"examples",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data_type-datetime64"},"Datetime64"),(0,i.kt)("p",null,"\u6b64\u7c7b\u578b\u5141\u8bb8\u4ee5\u65e5\u671f\uff08date\uff09\u52a0\u65f6\u95f4\uff08time\uff09\u7684\u5f62\u5f0f\u6765\u5b58\u50a8\u4e00\u4e2a\u65f6\u523b\u7684\u65f6\u95f4\u503c\uff0c\u5177\u6709\u5b9a\u4e49\u7684\u4e9a\u79d2\u7cbe\u5ea6"),(0,i.kt)("p",null,"\u65f6\u95f4\u523b\u5ea6\u5927\u5c0f\uff08\u7cbe\u5ea6\uff09\uff1a10",(0,i.kt)("sup",null,"-\u7cbe\u5ea6")," \u79d2"),(0,i.kt)("p",null,"\u8bed\u6cd5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DateTime64(precision, [timezone])\n")),(0,i.kt)("p",null,"\u5728\u5185\u90e8\uff0c\u6b64\u7c7b\u578b\u4ee5Int64\u7c7b\u578b\u5c06\u6570\u636e\u5b58\u50a8\u4e3a\u81eaLinux\u7eaa\u5143\u5f00\u59cb(1970-01-01 00:00:00UTC)\u7684\u65f6\u95f4\u523b\u5ea6\u6570\uff08ticks\uff09\u3002\u65f6\u95f4\u523b\u5ea6\u7684\u5206\u8fa8\u7387\u7531precision\u53c2\u6570\u786e\u5b9a\u3002\u6b64\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u53ef\u4ee5\u50cf\u5b58\u50a8\u5176\u4ed6\u6570\u636e\u5217\u4e00\u6837\u5b58\u50a8\u65f6\u533a\u4fe1\u606f\uff0c\u65f6\u533a\u4f1a\u5f71\u54cd ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u7684\u503c\u5982\u4f55\u4ee5\u6587\u672c\u683c\u5f0f\u663e\u793a\uff0c\u4ee5\u53ca\u5982\u4f55\u89e3\u6790\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u6307\u5b9a\u7684\u65f6\u95f4\u6570\u636e (\u20182020-01-01 05:00:01.000\u2019)\u3002\u65f6\u533a\u4e0d\u5b58\u50a8\u5728\u8868\u7684\u884c\u4e2d\uff08\u4e5f\u4e0d\u5728resultset\u4e2d\uff09\uff0c\u800c\u662f\u5b58\u50a8\u5728\u5217\u7684\u5143\u6570\u636e\u4e2d\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime")," \u6570\u636e\u7c7b\u578b."),(0,i.kt)("p",null,"\u503c\u7684\u8303\u56f4: ","[","1925-01-01 00:00:00, 2283-11-11 23:59:59.99999999","]"," (\u6ce8\u610f: \u6700\u5927\u503c\u7684\u7cbe\u5ea6\u662f8)\u3002"),(0,i.kt)("h2",{id:"examples"},"\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," \u521b\u5efa\u4e00\u4e2a\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u5217\u7684\u8868\uff0c\u5e76\u5411\u5176\u4e2d\u63d2\u5165\u6570\u636e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` DateTime64(3, 'Asia/Istanbul'),\n    `event_id` UInt8\n)\nENGINE = TinyLog\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800000, 1), ('2019-01-01 00:00:00', 2)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00.000 \u2502        1 \u2502\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u65e5\u671f\u65f6\u95f4\u4f5c\u4e3ainteger\u7c7b\u578b\u63d2\u5165\u65f6\uff0c\u5b83\u4f1a\u88ab\u89c6\u4e3a\u9002\u5f53\u7f29\u653e\u7684Unix\u65f6\u95f4\u6233(UTC)\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"1546300800000")," \uff08\u7cbe\u5ea6\u4e3a3\uff09\u8868\u793a ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," UTC. \u4e0d\u8fc7\uff0c\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," \u5217\u6307\u5b9a\u4e86 ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," \uff08UTC+3\uff09\u7684\u65f6\u533a\uff0c\u5f53\u4f5c\u4e3a\u5b57\u7b26\u4e32\u8f93\u51fa\u65f6\uff0c\u5b83\u5c06\u663e\u793a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 03:00:00'")),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u628a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u65e5\u671f\u65f6\u95f4\u63d2\u5165\u65f6\uff0c\u5b83\u4f1a\u88ab\u8d4b\u4e88\u65f6\u533a\u4fe1\u606f\u3002 ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," \u5c06\u88ab\u8ba4\u4e3a\u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," \u65f6\u533a\u5e76\u88ab\u5b58\u50a8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"1546290000000"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," \u8fc7\u6ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u7684\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = toDateTime64('2019-01-01 00:00:00', 3, 'Asia/Istanbul')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," \u4e0d\u540c, ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u7684\u503c\u4e0d\u4f1a\u81ea\u52a8\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\u7684\u503c\u8f6c\u6362\u8fc7\u6765"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," \u7c7b\u578b\u503c\u7684\u65f6\u533a\u4fe1\u606f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime64(now(), 3, 'Asia/Istanbul') AS column, toTypeName(column) AS x\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500column\u2500\u252c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-10-16 04:12:04.000 \u2502 DateTime64(3, 'Asia/Istanbul') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.")," \u65f6\u533a\u8f6c\u6362"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\ntoDateTime64(timestamp, 3, 'Europe/London') as lon_time,\ntoDateTime64(timestamp, 3, 'Asia/Istanbul') as mos_time\nFROM dt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500lon_time\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mos_time\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502 2019-01-01 03:00:00.000 \u2502\n\u2502 2018-12-31 21:00:00.000 \u2502 2019-01-01 00:00:00.000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/type-conversion-functions"},"\u7c7b\u578b\u8f6c\u6362\u51fd\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/date-time-functions"},"\u7528\u4e8e\u5904\u7406\u65e5\u671f\u548c\u65f6\u95f4\u7684\u51fd\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/array-functions"},"\u7528\u4e8e\u5904\u7406\u6570\u7ec4\u7684\u51fd\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-date_time_input_format"},(0,i.kt)("inlineCode",{parentName:"a"},"date_time_input_format")," \u914d\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/settings#settings-date_time_output_format"},(0,i.kt)("inlineCode",{parentName:"a"},"date_time_output_format")," \u914d\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},(0,i.kt)("inlineCode",{parentName:"a"},"timezone")," \u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/operators/#operators-datetime"},"\u7528\u4e8e\u5904\u7406\u65e5\u671f\u548c\u65f6\u95f4\u7684\u7b97\u5b50")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")," \u6570\u636e\u7c7b\u578b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")," \u6570\u636e\u7c7b\u578b"))))}d.isMDXComponent=!0}}]);