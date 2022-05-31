"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9280],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,N=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(N,i(i({ref:t},c),{},{components:n})):a.createElement(N,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:33,sidebar_label:"INSERT INTO"},p=void 0,o={unversionedId:"ru/sql-reference/statements/insert-into",id:"ru/sql-reference/statements/insert-into",title:"insert-into",description:"INSERT INTO",source:"@site/docs/ru/sql-reference/statements/insert-into.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/insert-into",permalink:"/docs/ru/sql-reference/statements/insert-into",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/insert-into.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,sidebar_label:"INSERT INTO"},sidebar:"russia",previous:{title:"WITH",permalink:"/docs/ru/sql-reference/statements/select/with"},next:{title:"CREATE",permalink:"/docs/ru/sql-reference/statements/create/"}},c={},u=[{value:"INSERT INTO",id:"insert",level:2},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f (constraints)",id:"ogranicheniia-constraints",level:3},{value:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 <code>SELECT</code>",id:"insert_query_insert-select",level:3},{value:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430",id:"inserting-data-from-a-file",level:3},{value:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e",id:"inserting-into-table-function",level:3},{value:"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",id:"zamechaniia-o-proizvoditelnosti",level:3}],m={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"insert"},"INSERT INTO"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] VALUES (v11, v12, v13), (v21, v22, v23), ...\n")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"(c1, c2, c3)"),". \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 c\u043e ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/#asterisk"},"\u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u043e\u0439")," \u0438/\u0438\u043b\u0438 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/#apply-modifier"},"APPLY"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/#except-modifier"},"EXCEPT"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/select/#replace-modifier"},"REPLACE"),"."),(0,l.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE insert_select_testtable\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"CREATE TABLE insert_select_testtable\n(\n    `a` Int8,\n    `b` String,\n    `c` Int8\n)\nENGINE = MergeTree()\nORDER BY a\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (*) VALUES (1, 'a', 1)\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u043e \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u0440\u043e\u043c\u0435 'b', \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u0432 \u0441\u043a\u043e\u0431\u043a\u0430\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable (* EXCEPT(b)) Values (2, 2)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM insert_select_testtable\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 2 \u2502   \u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u252c\u2500b\u2500\u252c\u2500c\u2500\u2510\n\u2502 1 \u2502 a \u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0432\u0438\u0434\u0438\u043c, \u0447\u0442\u043e \u0432\u0442\u043e\u0440\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"c"),", \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"b"),", \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"DEFAULT")," \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO insert_select_testtable VALUES (1, DEFAULT, 1) ;\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0442\u043e \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u043c\u044b\u0435 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")," \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0443\u043b\u0438 \u0438 \u043f\u0443\u0441\u0442\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT")," \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b.")),(0,l.kt)("p",null,"\u0412 INSERT \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043b\u044e\u0431\u043e\u0433\u043e ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442\u0430"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ClickHouse. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0432 \u044f\u0432\u043d\u043e\u043c \u0432\u0438\u0434\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT format_name data_set\n")),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u0435\u043d \u0431\u0430\u0437\u043e\u0432\u043e\u043c\u0443 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0443 INSERT \u2026 VALUES:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FORMAT Values (v11, v12, v13), (v21, v22, v23), ...\n")),(0,l.kt)("p",null,"ClickHouse \u043e\u0442\u0441\u0435\u043a\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u043e\u0434\u0438\u043d \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0441\u0442\u0440\u043e\u043a\u0438 (\u0435\u0441\u043b\u0438 \u043e\u043d \u0435\u0441\u0442\u044c) \u043f\u0435\u0440\u0435\u0434 \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u0440\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0441\u043b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u044d\u0442\u043e \u0432\u0430\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432)."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t FORMAT TabSeparated\n11  Hello, world!\n22  Qwerty\n")),(0,l.kt)("p",null,"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438\u043b\u0438 HTTP \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u041a\u0430\u043a \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/#interfaces"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"),"\xbb."),(0,l.kt)("h3",{id:"ogranicheniia-constraints"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f (constraints)"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u044b ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table#constraints"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),", \u0442\u043e \u0438\u0445 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438. \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d."),(0,l.kt)("h3",{id:"insert_query_insert-select"},"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"h3"},"SELECT")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] SELECT ...\n")),(0,l.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0445 \u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 SELECT. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0438\u0445 \u0438\u043c\u0435\u043d\u0430 \u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0438 SELECT \u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0434\u043b\u044f INSERT, \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 CAST."),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0440\u043e\u043c\u0435 Values \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"now()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"1 + 2")," \u0438 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435. \u0424\u043e\u0440\u043c\u0430\u0442 Values \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043d\u043e \u044d\u0442\u043e \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f, \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u043b\u044f \u0438\u0445 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435\u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043a\u043e\u0434\u0430."),(0,l.kt)("p",null,"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u0447\u0430\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"REPLACE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MERGE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT UPDATE"),".\n\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0441\u0442\u0430\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... DROP PARTITION"),"."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/input"},"input()")," \u043f\u043e\u0441\u043b\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c\n\u0441\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"FORMAT"),"."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u043c\u0435\u0441\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," \u0432 \u0441\u0442\u043e\u043b\u0431\u0435\u0446, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#insert_null_as_default"},"insert_null_as_default"),"."),(0,l.kt)("h3",{id:"inserting-data-from-a-file"},"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [db.]table [(c1, c2, c3)] FROM INFILE file_name [COMPRESSION type] FORMAT format_name\n")),(0,l.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u044d\u0442\u043e\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 ",(0,l.kt)("strong",{parentName:"p"},"\u043a\u043b\u0438\u0435\u043d\u0442\u0430"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"file_name")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u043e\u0432. ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/formats"},"\u0424\u043e\u0440\u043c\u0430\u0442")," \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"FORMAT"),". "),(0,l.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0441\u0436\u0430\u0442\u044b\u0435 \u0444\u0430\u0439\u043b\u044b. \u0424\u043e\u0440\u043c\u0430\u0442 \u0441\u0436\u0430\u0442\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044e \u0444\u0430\u0439\u043b\u0430, \u043b\u0438\u0431\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"COMPRESSION"),". \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u044b: ",(0,l.kt)("inlineCode",{parentName:"p"},"'none'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'gzip'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'deflate'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'br'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'xz'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'zstd'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'lz4'"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"'bz2'"),"."),(0,l.kt)("p",null,"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/utilities/clickhouse-local"},"clickhouse-local"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/interfaces/cli"},"\u043a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo 1,A > input.csv ; echo 2,B >> input.csv\nclickhouse-client --query="CREATE TABLE table_from_file (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;"\nclickhouse-client --query="INSERT INTO table_from_file FROM INFILE \'input.csv\' FORMAT CSV;"\nclickhouse-client --query="SELECT * FROM table_from_file FORMAT PrettyCompact;"\n')),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500text\u2500\u2510\n\u2502  1 \u2502 A    \u2502\n\u2502  2 \u2502 B    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"inserting-into-table-function"},"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),(0,l.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/"},"\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [TABLE] FUNCTION table_func ...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/table-functions/#remote"},"remote")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE simple_table (id UInt32, text String) ENGINE=MergeTree() ORDER BY id;\nINSERT INTO TABLE FUNCTION remote('localhost', default.simple_table) \n    VALUES (100, 'inserted via remote()');\nSELECT * FROM simple_table;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500id\u2500\u252c\u2500text\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 100 \u2502 inserted via remote() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h3",{id:"zamechaniia-o-proizvoditelnosti"},"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f \u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443 \u0438 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u043d\u0430 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e, \u0442\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043d\u0438\u0437\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),". \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u043f\u0430\u0447\u043a\u0430\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e 100 000 \u0441\u0442\u0440\u043e\u043a."),(0,l.kt)("li",{parentName:"ul"},"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439 \u0432 ClickHouse.")),(0,l.kt)("p",null,"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043b\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438.")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0432\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u0432\u0441\u0442\u0430\u0432\u043a\u0430\u0445. \u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0442 \u0442\u0430\u043a\u0438\u0445 \u0432\u0441\u0442\u0430\u0432\u043e\u043a \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u0430\u0447\u043a\u0438, \u0430 \u043f\u043e\u0442\u043e\u043c \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#async-insert"},"async_insert"),". \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTP, \u0430 \u0434\u0435\u0434\u0443\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#async-insert"},"async_insert")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#async-insert-threads"},"async_insert_threads")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#wait-for-async-insert"},"wait_for_async_insert")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#wait-for-async-insert-timeout"},"wait_for_async_insert_timeout")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#async-insert-max-data-size"},"async_insert_max_data_size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#async-insert-busy-timeout-ms"},"async_insert_busy_timeout_ms")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/settings#async-insert-stale-timeout-ms"},"async_insert_stale_timeout_ms"))))}k.isMDXComponent=!0}}]);