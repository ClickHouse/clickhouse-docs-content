"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[35402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,E=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(E,s(s({ref:t},p),{},{components:n})):r.createElement(E,s({ref:t},p))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/zh/sql-reference/statements/rename",sidebar_position:48,sidebar_label:"RENAME"},s="RENAME\u8bed\u6cd5",o={unversionedId:"zh/sql-reference/statements/rename",id:"zh/sql-reference/statements/rename",title:"RENAME\u8bed\u6cd5",description:"misc_operations-rename}",source:"@site/docs/zh/sql-reference/statements/rename.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/rename",permalink:"/docs/zh/sql-reference/statements/rename",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/rename.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/zh/sql-reference/statements/rename",sidebar_position:48,sidebar_label:"RENAME"},sidebar:"chinese",previous:{title:"OPTIMIZE",permalink:"/docs/zh/sql-reference/statements/optimize"},next:{title:"EXCHANGE",permalink:"/docs/zh/sql-reference/statements/exchange"}},i={},c=[{value:"RENAME DATABASE",id:"misc_operations-rename_database",level:2},{value:"RENAME TABLE",id:"misc_operations-rename_table",level:2},{value:"RENAME DICTIONARY",id:"rename_dictionary",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"misc_operations-rename"},"RENAME\u8bed\u6cd5"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u6570\u636e\u5e93\u3001\u8868\u6216\u5b57\u5178\u3002 \u53ef\u4ee5\u5728\u5355\u4e2a\u67e5\u8be2\u4e2d\u91cd\u547d\u540d\u591a\u4e2a\u5b9e\u4f53\u3002\n\u8bf7\u6ce8\u610f\uff0c\u5177\u6709\u591a\u4e2a\u5b9e\u4f53\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"RENAME"),"\u67e5\u8be2\u662f\u975e\u539f\u5b50\u64cd\u4f5c\u3002 \u8981\u4ee5\u539f\u5b50\u65b9\u5f0f\u4ea4\u6362\u5b9e\u4f53\u540d\u79f0\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/exchange"},"EXCHANGE"),"\u8bed\u6cd5."),(0,a.kt)("p",null,'!!! note "\u6ce8\u610f"\n',(0,a.kt)("inlineCode",{parentName:"p"},"RENAME"),"\u4ec5\u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/database-engines/atomic"},"Atomic"),"\u6570\u636e\u5e93\u5f15\u64ce."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE|TABLE|DICTIONARY name TO new_name [,...] [ON CLUSTER cluster]\n")),(0,a.kt)("h2",{id:"misc_operations-rename_database"},"RENAME DATABASE"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u6570\u636e\u5e93."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE atomic_database1 TO atomic_database2 [,...] [ON CLUSTER cluster]\n")),(0,a.kt)("h2",{id:"misc_operations-rename_table"},"RENAME TABLE"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u4e00\u4e2a\u6216\u591a\u4e2a\u8868"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u8868\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684\u64cd\u4f5c\u3002 \u5982\u679c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TO"),"\u4e4b\u540e\u4f20\u9012\u4e00\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u8be5\u8868\u5c06\u88ab\u79fb\u52a8\u5230\u8fd9\u4e2a\u6570\u636e\u5e93\u3002 \u4f46\u662f\uff0c\u5305\u542b\u6570\u636e\u5e93\u7684\u76ee\u5f55\u5fc5\u987b\u4f4d\u4e8e\u540c\u4e00\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002 \u5426\u5219\uff0c\u8fd4\u56de\u9519\u8bef\u3002\n\u5982\u679c\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u91cd\u547d\u540d\u591a\u4e2a\u8868\uff0c\u5219\u8be5\u64cd\u4f5c\u4e0d\u662f\u539f\u5b50\u64cd\u4f5c\u3002 \u53ef\u80fd\u4f1a\u90e8\u5206\u6267\u884c\uff0c\u5176\u4ed6\u4f1a\u8bdd\u4e2d\u53ef\u80fd\u4f1a\u5f97\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Table ... does not exist ..."),"\u9519\u8bef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE [db1.]name1 TO [db2.]name2 [,...] [ON CLUSTER cluster]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE table_A TO table_A_bak, table_B TO table_B_bak;\n")),(0,a.kt)("h2",{id:"rename_dictionary"},"RENAME DICTIONARY"),(0,a.kt)("p",null,"\u91cd\u547d\u540d\u4e00\u4e2a\u6216\u591a\u4e2a\u8bcd\u5178\u3002 \u6b64\u67e5\u8be2\u53ef\u7528\u4e8e\u5728\u6570\u636e\u5e93\u4e4b\u95f4\u79fb\u52a8\u5b57\u5178\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DICTIONARY [db0.]dict_A TO [db1.]dict_B [,...] [ON CLUSTER cluster]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/"},"Dictionaries"))))}u.isMDXComponent=!0}}]);