"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62935],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),N=p(t),m=a,d=N["".concat(s,".").concat(m)]||N[m]||c[m]||l;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=N;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},60283:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={slug:"/ru/sql-reference/statements/select/union",sidebar_label:"UNION"},o="\u0421\u0435\u043a\u0446\u0438\u044f UNION",i={unversionedId:"ru/sql-reference/statements/select/union",id:"ru/sql-reference/statements/select/union",title:"\u0421\u0435\u043a\u0446\u0438\u044f UNION",description:"union-clause}",source:"@site/docs/ru/sql-reference/statements/select/union.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/union",permalink:"/docs/ru/sql-reference/statements/select/union",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/union.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/union",sidebar_label:"UNION"},sidebar:"russia",previous:{title:"SAMPLE",permalink:"/docs/ru/sql-reference/statements/select/sample"},next:{title:"WHERE",permalink:"/docs/ru/sql-reference/statements/select/where"}},s={},p=[],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"union-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f UNION"),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0432 \u0434\u0432\u0443\u0445 \u0440\u0435\u0436\u0438\u043c\u0430\u0445: ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),"."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", \u0442\u043e \u0435\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"union_default_mode"),". \u0420\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT")," \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u044f\u0432\u043d\u043e\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f. \u042d\u0442\u043e \u0440\u0430\u0432\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT DISTINCT")," \u0438\u0437 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0433\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION ALL"),"."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0443\u0442\u0435\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),". \u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CounterID, 1 AS table, toInt64(count()) AS c\n    FROM test.hits\n    GROUP BY CounterID\n\nUNION ALL\n\nSELECT CounterID, 2 AS table, sum(Sign) AS c\n    FROM test.visits\n    GROUP BY CounterID\n    HAVING c > 0\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0438\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u0443 (\u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"). \u0415\u0441\u043b\u0438 \u0438\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442, \u0442\u043e \u0438\u043c\u0435\u043d\u0430 \u0434\u043b\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0434\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u043c\u0435\u044e\u0442 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u043f\u043e\u043b\u0435 \u0441 \u043d\u0435-",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable")," \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable")," \u0442\u0438\u043f."),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION"),", \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438. ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/order-by"},"ORDER BY")," \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/limit"},"LIMIT")," \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c, \u0430 \u043d\u0435 \u043a \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/from"},"FROM"),"."),(0,a.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0431\u0435\u0437 \u044f\u0432\u043d\u043e\u0433\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION DISTINCT"),", \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#union-default-mode"},"union_default_mode"),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. \u041e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION")," \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"union_default_mode"),", \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u0445 \u043f\u0440\u043e\u0434\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'DISTINCT';\nSELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 2;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SET union_default_mode = 'ALL';\nSELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 2;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u25001\u2500\u2510\n\u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"UNION/UNION ALL/UNION DISTINCT"),", \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e, \u0438 \u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043c\u0435\u0448\u0430\u043d\u044b \u0432\u043c\u0435\u0441\u0442\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#insert_null_as_default"},"insert_null_as_default"),"."),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#union-default-mode"},"union_default_mode"),".")))}c.isMDXComponent=!0}}]);