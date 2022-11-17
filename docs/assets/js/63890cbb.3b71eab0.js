"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||s;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={slug:"/zh/operations/system-tables/data_skipping_indices"},i="system.data_skipping_indices",l={unversionedId:"zh/operations/system-tables/data_skipping_indices",id:"zh/operations/system-tables/data_skipping_indices",title:"system.data_skipping_indices",description:"system-data-skipping-indices}",source:"@site/docs/zh/operations/system-tables/data_skipping_indices.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/data_skipping_indices",permalink:"/docs/zh/operations/system-tables/data_skipping_indices",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/data_skipping_indices.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/data_skipping_indices"},sidebar:"chinese",previous:{title:"system.current_roles",permalink:"/docs/zh/operations/system-tables/current-roles"},next:{title:"system.data_type_families",permalink:"/docs/zh/operations/system-tables/data_type_families"}},p={},o=[],c={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-data-skipping-indices"},"system.data_skipping_indices"),(0,r.kt)("p",null,"\u5305\u542b\u6709\u5173\u6240\u6709\u8868\u4e2d\u73b0\u6709\u6570\u636e\u8df3\u8fc7\u7d22\u5f15\u7684\u4fe1\u606f."),(0,r.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5e93\u540d\u79f0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u8868\u540d\u79f0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u540d\u79f0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u7c7b\u578b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expr")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u8ba1\u7b97\u8868\u8fbe\u5f0f."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"granularity")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u5757\u4e2d\u9897\u7c92\u7684\u6570\u91cf."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u89e3\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u6807\u8bb0\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.data_skipping_indices LIMIT 2 FORMAT Vertical;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       user_actions\nname:        clicks_idx\ntype:        minmax\nexpr:        clicks\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       users\nname:        contacts_null_idx\ntype:        minmax\nexpr:        assumeNotNull(contacts_null)\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n")))}d.isMDXComponent=!0}}]);