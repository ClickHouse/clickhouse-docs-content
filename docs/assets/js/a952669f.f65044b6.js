"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19477],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||l;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={slug:"/zh/engines/table-engines/special/generate",sidebar_position:46,sidebar_label:"\u968f\u673a\u6570\u751f\u6210"},i="\u968f\u673a\u6570\u751f\u6210\u8868\u5f15\u64ce",o={unversionedId:"zh/engines/table-engines/special/generate",id:"zh/engines/table-engines/special/generate",title:"\u968f\u673a\u6570\u751f\u6210\u8868\u5f15\u64ce",description:"table_engines-generate}",source:"@site/docs/zh/engines/table-engines/special/generate.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/generate",permalink:"/docs/zh/engines/table-engines/special/generate",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/generate.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{slug:"/zh/engines/table-engines/special/generate",sidebar_position:46,sidebar_label:"\u968f\u673a\u6570\u751f\u6210"},sidebar:"chinese",previous:{title:"Memory",permalink:"/docs/zh/engines/table-engines/special/memory"},next:{title:"\u7f13\u51b2\u533a",permalink:"/docs/zh/engines/table-engines/special/buffer"}},s={},p=[{value:"CH\u670d\u52a1\u7aef\u7684\u7528\u6cd5",id:"usage-in-clickhouse-server",level:2},{value:"\u793a\u4f8b",id:"example",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"details-of-implementation",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"table_engines-generate"},"\u968f\u673a\u6570\u751f\u6210\u8868\u5f15\u64ce"),(0,a.kt)("p",null,"\u968f\u673a\u6570\u751f\u6210\u8868\u5f15\u64ce\u4e3a\u6307\u5b9a\u7684\u8868\u6a21\u5f0f\u751f\u6210\u968f\u673a\u6570"),(0,a.kt)("p",null,"\u4f7f\u7528\u793a\u4f8b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u65f6\u751f\u6210\u53ef\u590d\u5199\u7684\u5927\u8868"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u590d\u6742\u6d4b\u8bd5\u751f\u6210\u968f\u673a\u8f93\u5165")),(0,a.kt)("h2",{id:"usage-in-clickhouse-server"},"CH\u670d\u52a1\u7aef\u7684\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ENGINE = GenerateRandom(random_seed, max_string_length, max_array_length)\n")),(0,a.kt)("p",null,"\u751f\u6210\u6570\u636e\u65f6\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"max_array_length")," \u8bbe\u7f6earray\u5217\u7684\u6700\u5927\u957f\u5ea6\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"max_string_length"),"\u8bbe\u7f6estring\u6570\u636e\u7684\u6700\u5927\u957f\u5ea6"),(0,a.kt)("p",null,"\u8be5\u5f15\u64ce\u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u8bed\u53e5."),(0,a.kt)("p",null,"\u8be5\u5f15\u64ce\u652f\u6301\u80fd\u5728\u8868\u4e2d\u5b58\u50a8\u7684\u6240\u6709\u6570\u636e\u7c7b\u578b ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/"},"DataTypes")," \uff0c\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"LowCardinality")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"."),(0,a.kt)("h2",{id:"example"},"\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_engine_table")," \u5f15\u64ce\u8868:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE generate_engine_table (name String, value UInt32) ENGINE = GenerateRandom(1, 5, 3)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," \u67e5\u8be2\u6570\u636e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM generate_engine_table LIMIT 3\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 c4xJ \u2502 1412771199 \u2502\n\u2502 r    \u2502 1791099446 \u2502\n\u2502 7#$  \u2502  124312908 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"details-of-implementation"},"\u5b9e\u73b0\u7ec6\u8282"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u7279\u6027\u4e0d\u652f\u6301:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ALTER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SELECT ... SAMPLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INSERT")),(0,a.kt)("li",{parentName:"ul"},"Indices"),(0,a.kt)("li",{parentName:"ul"},"Replication")))))}u.isMDXComponent=!0}}]);