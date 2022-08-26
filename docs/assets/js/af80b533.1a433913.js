"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[39929],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=l,N=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(N,p(p({ref:n},s),{},{components:t})):a.createElement(N,p({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5576:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),p=["components"],i={slug:"/ru/sql-reference/data-types/nullable",sidebar_position:55,sidebar_label:"Nullable"},u="Nullable(TypeName)",o={unversionedId:"ru/sql-reference/data-types/nullable",id:"ru/sql-reference/data-types/nullable",title:"Nullable(TypeName)",description:"data_type-nullable}",source:"@site/docs/ru/sql-reference/data-types/nullable.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/nullable",permalink:"/docs/ru/sql-reference/data-types/nullable",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/nullable.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{slug:"/ru/sql-reference/data-types/nullable",sidebar_position:55,sidebar_label:"Nullable"},sidebar:"russia",previous:{title:"Tuple(T1, T2, ...)",permalink:"/docs/ru/sql-reference/data-types/tuple"},next:{title:"\u0421\u043b\u0443\u0436\u0435\u0431\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/ru/sql-reference/data-types/special-data-types/"}},s={},c=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",id:"storage-features",level:2},{value:"\u041f\u043e\u0438\u0441\u043a NULL",id:"finding-null",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"usage-example",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-nullable"},"Nullable(TypeName)"),(0,r.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeName")," \u0442\u0430\u043a \u0438 \u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435\u043c \u044d\u0442\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"NULL"),") \u0432 \u043e\u0434\u043d\u043e\u0439 \u0438 \u0442\u043e\u0439 \u0436\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeName"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable(Int8)")," \u043c\u043e\u0436\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8"),", \u0430 \u0432 \u0442\u0435\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445, \u0433\u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u0442, \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeName")," \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array#data-type-array"},"Array")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/tuple"},"Tuple"),". \u0421\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(Nullable(Int8))"),"."),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0435 \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432 \u0438\u043d\u0434\u0435\u043a\u0441\u044b."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),", \u0435\u0441\u043b\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0438\u043d\u043e\u0435."),(0,r.kt)("h2",{id:"storage-features"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0441 \u043c\u0430\u0441\u043a\u0430\u043c\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," (\u0434\u0430\u043b\u0435\u0435 \u043c\u0430\u0441\u043a\u0430)."),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0444\u0430\u0439\u043b \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438.")),(0,r.kt)("p",null,"\u041c\u0430\u0441\u043a\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0447\u0442\u043e \u043b\u0435\u0436\u0438\u0442 \u0432 \u044f\u0447\u0435\u0439\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445: ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,r.kt)("p",null,"\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u043c\u0430\u0441\u043a\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e \u0432 \u044f\u0447\u0435\u0439\u043a\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0432 \u0444\u0430\u0439\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422.\u0435. \u0435\u0441\u043b\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e\u043b\u0435 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable(Int8)"),", \u0442\u043e \u044f\u0447\u0435\u0439\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8"),". \u042d\u0442\u0430 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"Info"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"\u041f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 `Nullable` \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u044d\u0442\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0432\u043e\u0438\u0445 \u0431\u0430\u0437.\n")))),(0,r.kt)("h2",{id:"finding-null"},"\u041f\u043e\u0438\u0441\u043a NULL"),(0,r.kt)("p",null,"\u041d\u0430\u0439\u0442\u0438 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0435\u0441\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f. \u041f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", \u0435\u0441\u043b\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u0435\u0441\u043b\u0438 \u043d\u0435 \u0440\u0430\u0432\u043d\u043e."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nullable (`n` Nullable(UInt32)) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO nullable VALUES (1) (NULL) (2) (NULL);\n\nSELECT n.null FROM nullable;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n.null\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"usage-example"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE TinyLog\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_null VALUES (1, NULL), (2, 3)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x + y from t_null\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(x, y)\u2500\u2510\n\u2502       \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502          5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);