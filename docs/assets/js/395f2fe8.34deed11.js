"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32164],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87845:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={sidebar_position:1},u="count",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/count",id:"ru/sql-reference/aggregate-functions/reference/count",title:"count",description:"agg_function-count}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/count.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/count",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/count",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"russia",previous:{title:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/"},next:{title:"min",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/min"}},p={},s=[],m={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-count"},"count"),(0,i.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0438\u043b\u0438 \u043d\u0435 NULL \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,i.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0432\u0438\u0434\u044b \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 \u0434\u043b\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count(expr)")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"COUNT(DISTINCT expr)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"count()")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"COUNT(*)"),". \u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"count()")," \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u043d \u0434\u043b\u044f ClickHouse.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041d\u043e\u043b\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,i.kt)("li",{parentName:"ul"},"\u041e\u0434\u043d\u043e ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u043e\u043d\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a."),(0,i.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u0442\u0441\u044f ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0440\u0430\u0432\u043d\u043e NULL. \u0415\u0441\u043b\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),", \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"count")," \u043d\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"Nullable"),". \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0, \u0435\u0441\u043b\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0432\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u043e\u043a.")),(0,i.kt)("p",null,"\u0412 \u043e\u0431\u043e\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0442\u0438\u043f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438")),(0,i.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT ...)"),". \u041f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#settings-count_distinct_implementation"},"count_distinct_implementation"),". \u041e\u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043a\u0430\u043a\u0430\u044f \u0438\u0437 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq","*")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"),"."),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table")," \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 MergeTree. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0441\u0442\u0440\u043e\u043a, \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#optimize-trivial-count-query"},"optimize_trivial_count_query"),"."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count(nullable_column) FROM table")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns"),". \u041f\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0447\u0438\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434\u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable#finding-null"},"null")," \u0432\u043c\u0435\u0441\u0442\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430. \u0417\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT count(n) FROM table")," \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u043a \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT sum(NOT n.null) FROM table"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM t\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, value FROM system.settings WHERE name = 'count_distinct_implementation'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_distinct_implementation \u2502 uniqExact \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT num) FROM t\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uniqExact(num)\u2500\u2510\n\u2502              3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0447\u0442\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"count(DISTINCT num)")," \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqExact")," \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"count_distinct_implementation"),"."))}f.isMDXComponent=!0}}]);