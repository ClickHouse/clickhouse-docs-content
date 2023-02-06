"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[4799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={slug:"/zh/sql-reference/statements/select/limit",sidebar_label:"LIMIT"},i="LIMIT",s={unversionedId:"zh/sql-reference/statements/select/limit",id:"zh/sql-reference/statements/select/limit",title:"LIMIT",description:"limit-clause}",source:"@site/docs/zh/sql-reference/statements/select/limit.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/limit",permalink:"/docs/zh/sql-reference/statements/select/limit",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/limit.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/statements/select/limit",sidebar_label:"LIMIT"},sidebar:"chinese",previous:{title:"LIMIT BY",permalink:"/docs/zh/sql-reference/statements/select/limit-by"},next:{title:"OFFSET",permalink:"/docs/zh/sql-reference/statements/select/offset"}},o={},p=[{value:"LIMIT \u2026 WITH TIES \u4fee\u9970\u7b26",id:"limit-with-ties",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"limit-clause"},"LIMIT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT m")," \u5141\u8bb8\u9009\u62e9\u7ed3\u679c\u4e2d\u8d77\u59cb\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n, m")," \u5141\u8bb8\u9009\u62e9\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u4ece\u8df3\u8fc7\u7b2c\u4e00\u4e2a\u7ed3\u679c\u540e\u7684\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u884c\u3002 \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT m OFFSET n")," \u8bed\u6cd5\u662f\u7b49\u6548\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u5fc5\u987b\u662f\u975e\u8d1f\u6574\u6570\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/order-by"},"ORDER BY")," \u5b50\u53e5\u663e\u5f0f\u6392\u5e8f\u7ed3\u679c\uff0c\u7ed3\u679c\u7684\u884c\u9009\u62e9\u53ef\u80fd\u662f\u4efb\u610f\u7684\u548c\u975e\u786e\u5b9a\u6027\u7684\u3002"),(0,l.kt)("h2",{id:"limit-with-ties"},"LIMIT \u2026 WITH TIES \u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u5982\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT n[,m]")," \u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH TIES")," \uff0c\u5e76\u4e14\u58f0\u660e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY expr_list"),", \u9664\u4e86\u5f97\u5230\u65e0\u4fee\u9970\u7b26\u7684\u7ed3\u679c\uff08\u6b63\u5e38\u60c5\u51b5\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit n"),", \u524dn\u884c\u6570\u636e), \u8fd8\u4f1a\u8fd4\u56de\u4e0e\u7b2c",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u884c\u5177\u6709\u76f8\u540c\u6392\u5e8f\u5b57\u6bb5\u7684\u884c(\u5373\u5982\u679c\u7b2cn+1\u884c\u7684\u5b57\u6bb5\u4e0e\u7b2cn\u884c \u62e5\u6709\u76f8\u540c\u7684\u6392\u5e8f\u5b57\u6bb5\uff0c\u540c\u6837\u8fd4\u56de\u8be5\u7ed3\u679c."),(0,l.kt)("p",null,"\u6b64\u4fee\u9970\u7b26\u53ef\u4ee5\u4e0e\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/order-by#orderby-with-fill"},"ORDER BY \u2026 WITH FILL modifier")," \u7ec4\u5408\u4f7f\u7528."),(0,l.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u67e5\u8be2\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM (\n    SELECT number%50 AS n FROM numbers(100)\n) ORDER BY n LIMIT 0,5\n")),(0,l.kt)("p",null,"\u8fd4\u56de"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u2510\n\u2502 0 \u2502\n\u2502 0 \u2502\n\u2502 1 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH TIES")," \u4fee\u9970\u7b26\u540e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM (\n    SELECT number%50 AS n FROM numbers(100)\n) ORDER BY n LIMIT 0,5 WITH TIES\n")),(0,l.kt)("p",null,"\u5219\u8fd4\u56de\u4e86\u4ee5\u4e0b\u7684\u6570\u636e\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u2510\n\u2502 0 \u2502\n\u2502 0 \u2502\n\u2502 1 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u867d\u7136\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT 5"),", \u4f46\u7b2c6\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u5b57\u6bb5\u503c\u4e3a2\uff0c\u4e0e\u7b2c5\u884c\u76f8\u540c\uff0c\u56e0\u6b64\u4e5f\u4f5c\u4e3a\u6ee1\u8db3\u6761\u4ef6\u7684\u8bb0\u5f55\u8fd4\u56de\u3002\n\u7b80\u800c\u8a00\u4e4b\uff0c\u8be5\u4fee\u9970\u7b26\u53ef\u7406\u89e3\u4e3a\u662f\u5426\u589e\u52a0\u201c\u5e76\u5217\u884c\u201d\u7684\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql\uff0c"},"``` sql\n")))}u.isMDXComponent=!0}}]);