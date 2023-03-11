"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[29203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(p,".").concat(d)]||s[d]||g[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/ru/sql-reference/data-types/aggregatefunction",sidebar_position:53,sidebar_label:"AggregateFunction"},o="AggregateFunction",l={unversionedId:"ru/sql-reference/data-types/aggregatefunction",id:"ru/sql-reference/data-types/aggregatefunction",title:"AggregateFunction",description:"data-type-aggregatefunction}",source:"@site/docs/ru/sql-reference/data-types/aggregatefunction.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/aggregatefunction",permalink:"/docs/ru/sql-reference/data-types/aggregatefunction",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/aggregatefunction.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/ru/sql-reference/data-types/aggregatefunction",sidebar_position:53,sidebar_label:"AggregateFunction"},sidebar:"russia",previous:{title:"Array(T)",permalink:"/docs/ru/sql-reference/data-types/array"},next:{title:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/ru/sql-reference/data-types/nested-data-structures/"}},p={},u=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"osobennosti-ispolzovaniia",level:2},{value:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"vstavka-dannykh",level:3},{value:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"vyborka-dannykh",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"primer-ispolzovaniia",level:2}],c={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-type-aggregatefunction"},"AggregateFunction"),(0,a.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u0432 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 AggregateFunction(\u2026), \u0438 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/view"},"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"),". \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043e\u0431\u044b\u0447\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"-State"),". \u0427\u0442\u043e\u0431\u044b \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0435 \u0436\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"-Merge"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction(name, types_of_arguments\u2026)")," \u2014 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0418\u043c\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u0414\u043b\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u0422\u0438\u043f\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    column1 AggregateFunction(uniq, UInt64),\n    column2 AggregateFunction(anyIf, String, UInt8),\n    column3 AggregateFunction(quantiles(0.5, 0.9), UInt64)\n) ENGINE = ...\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/aggregatefunction#agg_function-uniq"},"uniq"),", anyIf (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/aggregatefunction#agg_function-any"},"any"),"+",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/aggregatefunction#agg-functions-combinator-if"},"If"),") \u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/aggregatefunction"},"quantiles")," \u2014 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0435 \u0432 ClickHouse."),(0,a.kt)("h2",{id:"osobennosti-ispolzovaniia"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("h3",{id:"vstavka-dannykh"},"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," \u0441 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u043c\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"-State"),"-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0439")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"uniqState(UserID)\nquantilesState(0.5, 0.9)(SendTiming)\n")),(0,a.kt)("p",null,"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-State"),"-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435. \u0422\u043e \u0435\u0441\u0442\u044c, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction"),"."),(0,a.kt)("p",null,"\u0412 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ClickHouse, \u0432 \u0432\u0438\u0434\u0435 implementation-specific \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0430\u043c\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"TabSeparated"),", \u0442\u043e \u043f\u043e\u0442\u043e\u043c \u044d\u0442\u043e\u0442 \u0434\u0430\u043c\u043f \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),"."),(0,a.kt)("h3",{id:"vyborka-dannykh"},"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u0438 \u0442\u0435 \u0436\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0447\u0442\u043e \u0438 \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u0441 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"-Merge"),"."),(0,a.kt)("p",null,"\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441 \u0441\u0443\u0444\u0444\u0438\u043a\u0441\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"-Merge")," \u0431\u0435\u0440\u0451\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0438\u0445, \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u043b\u043d\u043e\u0439 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM table\n\nSELECT uniqMerge(state) FROM (SELECT uniqState(UserID) AS state FROM table GROUP BY RegionID)\n")),(0,a.kt)("h2",{id:"primer-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("p",null,"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0434\u0432\u0438\u0436\u043a\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree"),"."))}g.isMDXComponent=!0}}]);