"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[38728],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/statements/revoke",sidebar_position:40,sidebar_label:"REVOKE"},l="\u6743\u9650\u53d6\u6d88",s={unversionedId:"zh/sql-reference/statements/revoke",id:"zh/sql-reference/statements/revoke",title:"\u6743\u9650\u53d6\u6d88",description:"revoke}",source:"@site/docs/zh/sql-reference/statements/revoke.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/revoke",permalink:"/docs/zh/sql-reference/statements/revoke",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/revoke.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/zh/sql-reference/statements/revoke",sidebar_position:40,sidebar_label:"REVOKE"},sidebar:"chinese",previous:{title:"ATTACH",permalink:"/docs/zh/sql-reference/statements/attach"},next:{title:"CHECK",permalink:"/docs/zh/sql-reference/statements/check-table"}},i={},c=[{value:"\u8bed\u6cd5",id:"revoke-\u8bed\u6cd5",level:2},{value:"\u8bf4\u660e",id:"revoke-description",level:2},{value:"\u53d6\u6d88\u90e8\u5206\u6743\u9650",id:"partial-revokes-dscr",level:3},{value:"\u793a\u4f8b",id:"revoke-example",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"revoke"},"\u6743\u9650\u53d6\u6d88"),(0,a.kt)("p",null,"\u53d6\u6d88\u7528\u6237\u6216\u89d2\u8272\u7684\u6743\u9650"),(0,a.kt)("h2",{id:"revoke-\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u7528\u6237\u7684\u6743\u9650")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] privilege[(column_name [,...])] [,...] ON {db.table|db.*|*.*|table|*} FROM {user | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user | CURRENT_USER} [,...]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53d6\u6d88\u7528\u6237\u7684\u89d2\u8272")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE [ON CLUSTER cluster_name] [ADMIN OPTION FOR] role [,...] FROM {user | role | CURRENT_USER} [,...] | ALL | ALL EXCEPT {user_name | role_name | CURRENT_USER} [,...]\n")),(0,a.kt)("h2",{id:"revoke-description"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u8981\u53d6\u6d88\u67d0\u4e9b\u6743\u9650\uff0c\u53ef\u4f7f\u7528\u6bd4\u8981\u64a4\u56de\u7684\u6743\u9650\u66f4\u5927\u8303\u56f4\u7684\u6743\u9650\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u6709  ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT (x,y)"),"\u6743\u9650\u65f6\uff0c\u7ba1\u7406\u5458\u53ef\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT(x,y) ..."),", \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE SELECT * ..."),", \u751a\u81f3\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"REVOKE ALL PRIVILEGES ..."),"\u6765\u53d6\u6d88\u539f\u6709\u6743\u9650\u3002"),(0,a.kt)("h3",{id:"partial-revokes-dscr"},"\u53d6\u6d88\u90e8\u5206\u6743\u9650"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53d6\u6d88\u90e8\u5206\u6743\u9650\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *.*")," \u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6388\u4e88\u5bf9\u90e8\u5206\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\u6765\u64a4\u56de\u539f\u6709\u6743\u9650\u3002"),(0,a.kt)("h2",{id:"revoke-example"},"\u793a\u4f8b"),(0,a.kt)("p",null,"\u6388\u6743 ",(0,a.kt)("inlineCode",{parentName:"p"},"john"),"\u8d26\u53f7\u80fd\u67e5\u8be2\u6240\u6709\u5e93\u7684\u6240\u6709\u8868\uff0c\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"account"),"\u5e93\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON *.* TO john;\nREVOKE SELECT ON accounts.* FROM john;\n")),(0,a.kt)("p",null,"\u6388\u6743 ",(0,a.kt)("inlineCode",{parentName:"p"},"mira"),"\u8d26\u53f7\u80fd\u67e5\u8be2 ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts.staff"),"\u8868\u7684\u6240\u6709\u5217\uff0c\u9664\u4e86  ",(0,a.kt)("inlineCode",{parentName:"p"},"wage"),"\u8fd9\u4e00\u5217\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON accounts.staff TO mira;\nREVOKE SELECT(wage) ON accounts.staff FROM mira;\n")),(0,a.kt)("p",null,"{## ",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings/"},"\u539f\u59cb\u6587\u6863")," ##}"))}m.isMDXComponent=!0}}]);