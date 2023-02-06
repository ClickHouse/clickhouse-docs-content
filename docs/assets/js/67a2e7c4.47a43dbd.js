"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[56443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},T=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),T=a,d=m["".concat(i,".").concat(T)]||m[T]||u[T]||l;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=T;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}T.displayName="MDXCreateElement"},63269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/zh/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},s="\u8868\u7684 TTL \u64cd\u4f5c",o={unversionedId:"zh/sql-reference/statements/alter/ttl",id:"zh/sql-reference/statements/alter/ttl",title:"\u8868\u7684 TTL \u64cd\u4f5c",description:"manipulations-with-table-ttl}",source:"@site/docs/zh/sql-reference/statements/alter/ttl.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/ttl",permalink:"/docs/zh/sql-reference/statements/alter/ttl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/ttl.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{slug:"/zh/sql-reference/statements/alter/ttl",sidebar_position:44,sidebar_label:"TTL"},sidebar:"chinese",previous:{title:"\u7ea6\u675f",permalink:"/docs/zh/sql-reference/statements/alter/constraint"},next:{title:"USER",permalink:"/docs/zh/sql-reference/statements/alter/user"}},i={},p=[{value:"\u4fee\u6539 MODIFY TTL",id:"modify-ttl",level:2},{value:"\u79fb\u9664 REMOVE TTL",id:"remove-ttl",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manipulations-with-table-ttl"},"\u8868\u7684 TTL \u64cd\u4f5c"),(0,a.kt)("h2",{id:"modify-ttl"},"\u4fee\u6539 MODIFY TTL"),(0,a.kt)("p",null,"\u4f60\u80fd\u4fee\u6539 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree#mergetree-table-ttl"},"\u8868 TTL")," \uff0c\u547d\u4ee4\u8bed\u6cd5\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name MODIFY TTL ttl_expression;\n")),(0,a.kt)("h2",{id:"remove-ttl"},"\u79fb\u9664 REMOVE TTL"),(0,a.kt)("p",null,"TTL \u5c5e\u6027\u53ef\u4ee5\u7528\u4e0b\u5217\u547d\u4ee4\u4ece\u8868\u4e2d\u79fb\u9664:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name REMOVE TTL\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8868\uff0c\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," \u5c5e\u6027\u5982\u4e0b\u6240\u793a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_ttl\n(\n    event_time DateTime,\n    UserID UInt64,\n    Comment String\n)\nENGINE MergeTree()\nORDER BY tuple()\nTTL event_time + INTERVAL 3 MONTH;\nSETTINGS min_bytes_for_wide_part = 0;\n\nINSERT INTO table_with_ttl VALUES (now(), 1, 'username1');\n\nINSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u5f3a\u5236\u6e05\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"OPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u884c\u8bb0\u5f55\u88ab\u4ece\u8868\u4e2d\u5220\u9664\u6389\u4e86."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u73b0\u5728\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u628a\u8868\u7684  ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," \u79fb\u9664\u6389:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_ttl REMOVE TTL;\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u63d2\u5165\u4e0a\u9762\u7684\u6570\u636e\uff0c\u5e76\u5c1d\u8bd5\u518d\u6b21\u8fd0\u884c  ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMIZE")," \u547d\u4ee4\u6e05\u7406   ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," \u5c5e\u6027  :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_with_ttl VALUES (now() - INTERVAL 4 MONTH, 2, 'username2');\nOPTIMIZE TABLE table_with_ttl FINAL;\nSELECT * FROM table_with_ttl FORMAT PrettyCompact;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5f97\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"TTL")," \u8fd9\u4e2a\u5c5e\u6027\u5df2\u7ecf\u6ca1\u4e86\uff0c\u5e76\u4e14\u53ef\u4ee5\u770b\u5f97\u5230\u7b2c\u4e8c\u884c\u8bb0\u5f55\u5e76\u6ca1\u6709\u88ab\u5220\u9664:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500event_time\u2500\u2500\u2500\u2500\u252c\u2500\u2500UserID\u2500\u252c\u2500\u2500\u2500\u2500\u2500Comment\u2500\u2500\u2510\n\u2502   2020-12-11 12:44:57 \u2502       1 \u2502    username1 \u2502\n\u2502   2020-08-11 12:44:57 \u2502       2 \u2502    username2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u66f4\u591a\u53c2\u8003")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create/table#ttl-expression"},"TTL \u8868\u8fbe\u5f0f"),"."),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5217 ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/alter/column#alter_modify-column"},"with TTL"),".")))}u.isMDXComponent=!0}}]);