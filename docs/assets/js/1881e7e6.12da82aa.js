"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[49505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>N});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,N=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(N,s(s({ref:t},o),{},{components:n})):r.createElement(N,s({ref:t},o))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/statements/select/distinct",sidebar_label:"DISTINCT"},s="\u0421\u0435\u043a\u0446\u0438\u044f DISTINCT",i={unversionedId:"ru/sql-reference/statements/select/distinct",id:"ru/sql-reference/statements/select/distinct",title:"\u0421\u0435\u043a\u0446\u0438\u044f DISTINCT",description:"select-distinct}",source:"@site/docs/ru/sql-reference/statements/select/distinct.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/distinct",permalink:"/docs/ru/sql-reference/statements/select/distinct",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/distinct.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/distinct",sidebar_label:"DISTINCT"},sidebar:"russia",previous:{title:"ARRAY JOIN",permalink:"/docs/ru/sql-reference/statements/select/array-join"},next:{title:"EXCEPT",permalink:"/docs/ru/sql-reference/statements/select/except"}},c={},p=[{value:"DISTINCT \u0438 ORDER BY",id:"distinct-orderby",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 NULL",id:"null-processing",level:2},{value:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b",id:"alternatives",level:2}],o={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select-distinct"},"\u0421\u0435\u043a\u0446\u0438\u044f DISTINCT"),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT"),", \u0442\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043e\u0441\u0442\u0430\u043d\u0443\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0438\u0437 \u0432\u0441\u0435\u0445 \u043d\u0430\u0431\u043e\u0440\u043e\u0432 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u043e\u043a \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430."),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u0431\u0438\u0440\u0430\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT ON (column1, column2,...)"),". \u0415\u0441\u043b\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b, \u0442\u043e \u043e\u0442\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445. "),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 1 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0431\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT * FROM t1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 1 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT ON (a,b) * FROM t1;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 1 \u2502 1 \u2502\n\u2502 2 \u2502 2 \u2502 2 \u2502\n\u2502 1 \u2502 2 \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"distinct-orderby"},"DISTINCT \u0438 ORDER BY"),(0,a.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0435\u043a\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0421\u0435\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043e \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"."),(0,a.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u2510\n\u2502 2 \u2502 1 \u2502\n\u2502 1 \u2502 2 \u2502\n\u2502 3 \u2502 3 \u2502\n\u2502 2 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT a FROM t1 ORDER BY b ASC"),", \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 2 \u2502\n\u2502 1 \u2502\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043c\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT a FROM t1 ORDER BY b DESC"),", \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 3 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0420\u044f\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"2, 4")," \u0431\u044b\u043b \u0440\u0430\u0437\u0440\u0435\u0437\u0430\u043d \u043f\u0435\u0440\u0435\u0434 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u043e\u0439."),(0,a.kt)("p",null,"\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u0443 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0443 \u043f\u0440\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,a.kt)("h2",{id:"null-processing"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 NULL"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/syntax#null-literal"},"NULL")," \u043a\u0430\u043a-\u0431\u0443\u0434\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u2014 \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL==NULL"),". \u0414\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u0432\u0441\u0442\u0440\u0435\u0442\u044f\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437. \u042d\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u0432."),(0,a.kt)("h2",{id:"alternatives"},"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u044b"),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0432 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/group-by"},"GROUP BY")," \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0436\u0435 \u043d\u0430\u0431\u043e\u0440\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),", \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445-\u043b\u0438\u0431\u043e \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u041d\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u043b\u0438\u0447\u0438\u0439 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DISTINCT")," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 ",(0,a.kt)("inlineCode",{parentName:"li"},"GROUP BY"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041a\u043e\u0433\u0434\u0430 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/order-by"},"ORDER BY")," \u043e\u043f\u0443\u0449\u0435\u043d\u0430, \u0430 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/limit"},"LIMIT")," \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442, \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u0440\u0430\u0437\u0443 \u043f\u043e\u0441\u043b\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0442\u0440\u043e\u043a."),(0,a.kt)("li",{parentName:"ul"},"\u0411\u043b\u043e\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043f\u043e \u043c\u0435\u0440\u0435 \u0438\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043d\u0435 \u0434\u043e\u0436\u0438\u0434\u0430\u044f\u0441\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430.")))}m.isMDXComponent=!0}}]);