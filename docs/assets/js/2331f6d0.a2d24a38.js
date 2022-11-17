"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/ru/sql-reference/statements/detach",sidebar_position:43,sidebar_label:"DETACH"},s="DETACH",o={unversionedId:"ru/sql-reference/statements/detach",id:"ru/sql-reference/statements/detach",title:"DETACH",description:"detach-statement}",source:"@site/docs/ru/sql-reference/statements/detach.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/detach",permalink:"/docs/ru/sql-reference/statements/detach",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/detach.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{slug:"/ru/sql-reference/statements/detach",sidebar_position:43,sidebar_label:"DETACH"},sidebar:"russia",previous:{title:"DESCRIBE TABLE",permalink:"/docs/ru/sql-reference/statements/describe-table"},next:{title:"DROP",permalink:"/docs/ru/sql-reference/statements/drop"}},c={},p=[],i={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"detach-statement"},"DETACH"),(0,a.kt)("p",null,'\u0417\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 "\u0437\u0430\u0431\u044b\u0442\u044c" \u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE|VIEW|DICTIONARY [IF EXISTS] [db.]name [ON CLUSTER cluster] [PERMANENTLY]\n")),(0,a.kt)("p",null,"\u0422\u0430\u043a\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043d\u0438 \u0434\u0430\u043d\u043d\u044b\u0435, \u043d\u0438 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u044f. \u0415\u0441\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u044b\u043c (\u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0435\u0437 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"PERMANENTLY"),"), \u0442\u043e \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0435\u0442 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0441\u043d\u043e\u0432\u0430 \u0443\u0437\u043d\u0430\u0435\u0442 \u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435/\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438/\u0441\u043b\u043e\u0432\u0430\u0440\u0435. \u0415\u0441\u043b\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u043b\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e, \u0442\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442 \u0438\u0445 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,a.kt)("p",null,"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u044b\u043b\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/attach"},"ATTACH"),". \u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 log \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u043d\u043e (\u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, ",(0,a.kt)("inlineCode",{parentName:"p"},"query_log"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"text_log"),' \u0438 \u0434\u0440.). \u0414\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u043d\u043e \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u043d\u043e\u0432\u0430 "\u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442" \u043e\u0431 \u044d\u0442\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445.'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ATTACH MATERIALIZED VIEW")," \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0441 \u043a\u0440\u0430\u0442\u043a\u0438\u043c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u043e\u043c (\u0431\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),"), \u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"ATTACH TABLE"),"."),(0,a.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0443\u0436\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0435\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u0434\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e, \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u043d\u043e\u0432\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0435\u0440\u043c\u0430\u043d\u0435\u043d\u0442\u043d\u043e."),(0,a.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/drop#drop-table"},"DROP")," \u0441 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439 \u0438\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table"},"CREATE TABLE")," \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u0438\u043c\u0435\u043d\u0435\u043c, \u043a\u0430\u043a \u0443 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0449\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0434\u0440\u0443\u0433\u043e\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/rename"},"RENAME TABLE"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test ENGINE = Log AS SELECT * FROM numbers(10);\nSELECT * FROM test;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2502      9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b:"),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DETACH TABLE test;\nSELECT * FROM test;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 21.4.1):\nCode: 60. DB::Exception: Received from localhost:9000. DB::Exception: Table default.test doesn't exist.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/view#materialized"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/"},"\u0421\u043b\u043e\u0432\u0430\u0440\u0438"))))}u.isMDXComponent=!0}}]);