"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[90678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),p=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?s.createElement(f,i(i({ref:t},c),{},{components:n})):s.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const a={slug:"/zh/operations/system-tables/settings"},i="system.settings",l={unversionedId:"zh/operations/system-tables/settings",id:"zh/operations/system-tables/settings",title:"system.settings",description:"system-tables-system-settings}",source:"@site/docs/zh/operations/system-tables/settings.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/settings",permalink:"/docs/zh/operations/system-tables/settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/settings.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/settings"},sidebar:"chinese",previous:{title:"system.row_policies",permalink:"/docs/zh/operations/system-tables/row_policies"},next:{title:"system.settings_profile_elements",permalink:"/docs/zh/operations/system-tables/settings_profile_elements"}},o={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-tables-system-settings"},"system.settings"),(0,r.kt)("p",null,"\u5305\u542b\u5f53\u524d\u7528\u6237\u4f1a\u8bdd\u8bbe\u7f6e\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5217:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u8bbe\u7f6e\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u8bbe\u7f6e\u7684\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"changed")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a\u8be5\u8bbe\u7f6e\u662f\u5426\u4ece\u5176\u9ed8\u8ba4\u503c\u4fee\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u8be5\u8bbe\u7f6e\u7684\u7b80\u8981\u63cf\u8ff0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),")) \u2014 \u8be5\u8bbe\u7f6e\u7684\u6700\u5c0f\u503c\uff0c\u5982\u679c\u6709\u6700\u5c0f\u503c\uff0c\u5219\u662f\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/constraints-on-settings#constraints-on-settings"},"\u7ea6\u675f"),"\u8bbe\u7f6e\u7684\u3002\u5982\u679c\u8be5\u8bbe\u7f6e\u6ca1\u6709\u6700\u5c0f\u503c\uff0c\u5219\u5305\u542b ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"(",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),")) \u2014 \u8be5\u8bbe\u7f6e\u7684\u6700\u5927\u503c, \u5982\u679c\u6709\u6700\u5927\u503c\uff0c\u5219\u662f\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/constraints-on-settings#constraints-on-settings"},"\u7ea6\u675f"),"\u8bbe\u7f6e\u7684\u3002\u5982\u679c\u8be5\u8bbe\u7f6e\u6ca1\u6709\u6700\u5927\u503c\uff0c\u5219\u5305\u542b ",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"readonly")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u5f53\u524d\u7528\u6237\u662f\u5426\u53ef\u4ee5\u4fee\u6539\u8be5\u8bbe\u7f6e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u5f53\u524d\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u6b64\u8bbe\u7f6e."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u5f53\u524d\u7528\u6237\u4e0d\u80fd\u4fee\u6539\u6b64\u8bbe\u7f6e.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u663e\u793a\u4e86\u5982\u4f55\u83b7\u5f97\u8bbe\u7f6e\u540d\u79f0\u4e2d\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"min_i"),"\u7684\u8bbe\u7f6e\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.settings\nWHERE name LIKE '%min_i%'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u252c\u2500changed\u2500\u252c\u2500description\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500min\u2500\u2500\u252c\u2500max\u2500\u2500\u252c\u2500readonly\u2500\u2510\n\u2502 min_insert_block_size_rows                  \u2502 1048576   \u2502       0 \u2502 Squash blocks passed to INSERT query to specified size in rows, if blocks are not big enough.                                                                         \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2502 min_insert_block_size_bytes                 \u2502 268435456 \u2502       0 \u2502 Squash blocks passed to INSERT query to specified size in bytes, if blocks are not big enough.                                                                        \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2502 read_backoff_min_interval_between_events_ms \u2502 1000      \u2502       0 \u2502 Settings to reduce the number of threads in case of slow reads. Do not pay attention to the event, if the previous one has passed less than a certain amount of time. \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u5f53\u4f60\u60f3\u8981\u68c0\u67e5\u4ee5\u4e0b\u60c5\u51b5\u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE changed")," \u4f1a\u5f88\u6709\u7528:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8bbe\u7f6e\u662f\u5426\u6b63\u786e\u52a0\u8f7d\uff0c\u5e76\u6b63\u5728\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5f53\u524d\u4f1a\u8bdd\u4e2d\u66f4\u6539\u8fc7\u7684\u8bbe\u7f6e\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.settings WHERE changed AND name='load_balancing'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/#session-settings-intro"},"\u8bbe\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/permissions-for-queries#settings_readonly"},"\u67e5\u8be2\u6743\u9650")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/constraints-on-settings"},"\u5bf9\u8bbe\u7f6e\u7684\u7ea6\u675f"))))}u.isMDXComponent=!0}}]);