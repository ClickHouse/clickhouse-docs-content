"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70292],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(r),m=l,d=f["".concat(u,".").concat(m)]||f[m]||i[m]||s;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,a=new Array(s);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var o=2;o<s;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return i}});var n=r(87462),l=r(63366),s=(r(67294),r(3905)),a=["components"],c={slug:"/ru/sql-reference/statements/select/where",sidebar_label:"WHERE"},u="\u0421\u0435\u043a\u0446\u0438\u044f WHERE",o={unversionedId:"ru/sql-reference/statements/select/where",id:"ru/sql-reference/statements/select/where",title:"\u0421\u0435\u043a\u0446\u0438\u044f WHERE",description:"select-where}",source:"@site/docs/ru/sql-reference/statements/select/where.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/where",permalink:"/docs/ru/sql-reference/statements/select/where",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/where.md",tags:[],version:"current",frontMatter:{slug:"/ru/sql-reference/statements/select/where",sidebar_label:"WHERE"},sidebar:"russia",previous:{title:"UNION",permalink:"/docs/ru/sql-reference/statements/select/union"},next:{title:"WITH",permalink:"/docs/ru/sql-reference/statements/select/with"}},p={},i=[],f={toc:i};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"select-where"},"\u0421\u0435\u043a\u0446\u0438\u044f WHERE"),(0,s.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u0434 \u0432\u0441\u0435\u043c\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043c\u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a\u0440\u043e\u043c\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445\u0441\u044f \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/prewhere#prewhere-clause"},"PREWHERE"),". \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438."),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f ",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,s.kt)("p",null,"ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u044b, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/"},"\u0434\u0432\u0438\u0436\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c [PREWHERE](/docs/ru/sql-reference/statements/select/prewhere).\n:::\n')),(0,s.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/syntax#null-literal"},"NULL"),", \u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/operators/#operator-is-null"},"IS NULL")," \u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/operators/#is-not-null"},"IS NOT NULL"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/functions-for-nulls#isnull"},"isNull")," \u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/functions-for-nulls#isnotnull"},"isNotNull"),". \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u0447\u0438\u0441\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u0440\u0430\u0442\u043d\u044b 3 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 10, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043a ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/numbers"},"\u0442\u0430\u0431\u043b\u0438\u0446\u0435 numbers"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(20) WHERE (number > 10) AND (number % 3 == 0);\n")),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502     12 \u2502\n\u2502     15 \u2502\n\u2502     18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE=MergeTree() ORDER BY x;\nINSERT INTO t_null VALUES (1, NULL), (2, 3);\n\nSELECT * FROM t_null WHERE y IS NULL;\nSELECT * FROM t_null WHERE y != 0;\n")),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500x\u2500\u252c\u2500y\u2500\u2510\n\u2502 2 \u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);