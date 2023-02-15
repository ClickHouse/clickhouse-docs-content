"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[64447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(d,s(s({ref:t},i),{},{components:n})):r.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/statements/select/offset",sidebar_label:"OFFSET"},s="\u0421\u0435\u043a\u0446\u0438\u044f OFFSET FETCH",o={unversionedId:"ru/sql-reference/statements/select/offset",id:"ru/sql-reference/statements/select/offset",title:"\u0421\u0435\u043a\u0446\u0438\u044f OFFSET FETCH",description:"offset-fetch}",source:"@site/docs/ru/sql-reference/statements/select/offset.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/offset",permalink:"/docs/ru/sql-reference/statements/select/offset",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/offset.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/offset",sidebar_label:"OFFSET"},sidebar:"russia",previous:{title:"LIMIT",permalink:"/docs/ru/sql-reference/statements/select/limit"},next:{title:"ORDER BY",permalink:"/docs/ru/sql-reference/statements/select/order-by"}},c={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"examples",level:2}],i={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"offset-fetch"},"\u0421\u0435\u043a\u0446\u0438\u044f OFFSET FETCH"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0447\u0430\u0441\u0442\u044f\u043c. \u041e\u043d\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0441\u0442\u0440\u043e\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"OFFSET offset_row_count {ROW | ROWS}] [FETCH {FIRST | NEXT} fetch_row_count {ROW | ROWS} {ONLY | WITH TIES}]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"offset_row_count")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c \u0438\u043b\u0438 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0437\u0430\u0434\u0430\u0435\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count")," \u044f\u0432\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0440\u0430\u0432\u043d\u043e\u0435 1."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0442\u0440\u043e\u043a \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("p",null,"\u041e\u043f\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"ONLY")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0442\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u0441\u0440\u0430\u0437\u0443 \u0436\u0435 \u0437\u0430 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438, \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0435\u043a\u0446\u0438\u0435\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"FETCH")," \u2014 \u044d\u0442\u043e \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/limit"},"LIMIT"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 1 ROW FETCH FIRST 3 ROWS ONLY;\n")),(0,a.kt)("p",null,"\u0438\u0434\u0435\u043d\u0442\u0438\u0447\u0435\u043d \u0437\u0430\u043f\u0440\u043e\u0441\u0443"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a LIMIT 3 OFFSET 1;\n")),(0,a.kt)("p",null,"\u041e\u043f\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH TIES")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_row_count")," \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 5 \u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0435\u0449\u0435 2 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", \u0447\u0442\u043e \u0438 \u0443 \u043f\u044f\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u0442\u043e \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c 7 \u0441\u0442\u0440\u043e\u043a."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0421\u0435\u043a\u0446\u0438\u044f `OFFSET` \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u0434 \u0441\u0435\u043a\u0446\u0438\u0435\u0439 `FETCH`, \u0435\u0441\u043b\u0438 \u043e\u0431\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442.\n:::\n:::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u0430\u043a\u0436\u0435 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 [offset](/docs/ru/operations/settings/settings#offset).\n:::\n')),(0,a.kt)("h2",{id:"examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 1 \u2502 3 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2502 0 \u2502 6 \u2502\n\u2502 5 \u2502 7 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"ONLY"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 3 ROW FETCH FIRST 3 ROWS ONLY;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH TIES"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM test_fetch ORDER BY a OFFSET 3 ROW FETCH FIRST 3 ROWS WITH TIES;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 3 \u2502 4 \u2502\n\u2502 5 \u2502 4 \u2502\n\u2502 5 \u2502 7 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);