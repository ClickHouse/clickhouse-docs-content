"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[47012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},i="\u0421\u0435\u043a\u0446\u0438\u044f LIMIT BY",s={unversionedId:"ru/sql-reference/statements/select/limit-by",id:"ru/sql-reference/statements/select/limit-by",title:"\u0421\u0435\u043a\u0446\u0438\u044f LIMIT BY",description:"limit-by-clause}",source:"@site/docs/ru/sql-reference/statements/select/limit-by.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/limit-by",permalink:"/docs/ru/sql-reference/statements/select/limit-by",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/limit-by.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/limit-by",sidebar_label:"LIMIT BY"},sidebar:"russia",previous:{title:"JOIN",permalink:"/docs/ru/sql-reference/statements/select/join"},next:{title:"LIMIT",permalink:"/docs/ru/sql-reference/statements/select/limit"}},o={},p=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limit-by-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f LIMIT BY"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u0441\u0435\u043a\u0446\u0438\u0435\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions")," \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u0441\u0442\u0440\u043e\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),". \u041a\u043b\u044e\u0447 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439"),"."),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT [offset_value, ]n BY expressions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LIMIT n OFFSET offset_value BY expressions"))),(0,a.kt)("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, ClickHouse \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438. \u041a\u043b\u044e\u0447 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u044f\u0432\u043d\u043e \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY")," \u0438\u043b\u0438 \u043d\u0435\u044f\u0432\u043d\u043e \u0432 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u0434\u0432\u0438\u0436\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0441\u0442\u0440\u043e\u043a \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY"),", \u0432 \u0438\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u043b\u043e\u043a\u0438 \u0441\u0442\u0440\u043e\u043a \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u044b \u0438\u0437-\u0437\u0430 \u043c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438). \u0417\u0430\u0442\u0435\u043c ClickHouse \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY expressions")," \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),". \u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET"),", \u0442\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"expressions"),", ClickHouse \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_value")," \u0441\u0442\u0440\u043e\u043a \u043e\u0442 \u043d\u0430\u0447\u0430\u043b\u0430 \u0431\u043b\u043e\u043a\u0430 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),". \u0415\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"offset_value")," \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u0431\u043b\u043e\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, ClickHouse \u043d\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u0430 \u0441 \u0441\u0435\u043a\u0446\u0438\u0435\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),". \u0418\u0445 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT BY")," \u043d\u043e\u043c\u0435\u0440\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439, \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#enable-positional-arguments"},"enable_positional_arguments"),".\t"),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0437\u0435\u0446 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE limit_by(id Int, val Int) ENGINE = Memory;\nINSERT INTO limit_by values(1, 10), (1, 11), (1, 12), (2, 20), (2, 21);\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 BY id\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  10 \u2502\n\u2502  1 \u2502  11 \u2502\n\u2502  2 \u2502  20 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 1, 2 BY id\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500val\u2500\u2510\n\u2502  1 \u2502  11 \u2502\n\u2502  1 \u2502  12 \u2502\n\u2502  2 \u2502  21 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT * FROM limit_by ORDER BY id, val LIMIT 2 OFFSET 1 BY id")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,a.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u043e\u043f 5 \u0440\u0435\u0444\u0435\u0440\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"domain, device_type"),", \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0442\u0440\u043e\u043a (",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY + LIMIT"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    domainWithoutWWW(URL) AS domain,\n    domainWithoutWWW(REFERRER_URL) AS referrer,\n    device_type,\n    count() cnt\nFROM hits\nGROUP BY domain, referrer, device_type\nORDER BY cnt DESC\nLIMIT 5 BY domain, device_type\nLIMIT 100\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0442\u043e\u043f 5 \u0440\u0435\u0444\u0435\u0440\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"domain, device_type"),", \u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0442\u0440\u043e\u043a (",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY + LIMIT"),")."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT n BY")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/syntax#null-literal"},"NULL")," \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u0442\u043e \u0431\u044b\u043b\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u0422.\u0435. \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0432\u0441\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0435\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"BY"),"."))}m.isMDXComponent=!0}}]);