"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[13477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},g),{},{components:n})):a.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={slug:"/en/sql-reference/data-types/simpleaggregatefunction"},i="SimpleAggregateFunction",p={unversionedId:"en/sql-reference/data-types/simpleaggregatefunction",id:"en/sql-reference/data-types/simpleaggregatefunction",title:"SimpleAggregateFunction",description:"SimpleAggregateFunction(name, typesofarguments\u2026) data type stores current value of the aggregate function, and does not store its full state as AggregateFunction does. This optimization can be applied to functions for which the following property holds f(S1 UNION ALL S2) = f(f(S1) UNION ALL f(S2)). This property guarantees that partial aggregation results are enough to compute the combined one, so we do not have to store and process any extra data.",source:"@site/docs/en/sql-reference/data-types/simpleaggregatefunction.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/simpleaggregatefunction",permalink:"/docs/en/sql-reference/data-types/simpleaggregatefunction",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/simpleaggregatefunction.md",tags:[],version:"current",frontMatter:{slug:"/en/sql-reference/data-types/simpleaggregatefunction"},sidebar:"english",previous:{title:"Map(key, value)",permalink:"/docs/en/sql-reference/data-types/map"},next:{title:"Operators",permalink:"/docs/en/sql-reference/operators/"}},l={},s=[],g={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simpleaggregatefunction"},"SimpleAggregateFunction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction(name, types_of_arguments\u2026)")," data type stores current value of the aggregate function, and does not store its full state as ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/aggregatefunction"},(0,r.kt)("inlineCode",{parentName:"a"},"AggregateFunction"))," does. This optimization can be applied to functions for which the following property holds: the result of applying a function ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to a row set ",(0,r.kt)("inlineCode",{parentName:"p"},"S1 UNION ALL S2")," can be obtained by applying ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to parts of the row set separately, and then again applying ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," to the results: ",(0,r.kt)("inlineCode",{parentName:"p"},"f(S1 UNION ALL S2) = f(f(S1) UNION ALL f(S2))"),". This property guarantees that partial aggregation results are enough to compute the combined one, so we do not have to store and process any extra data."),(0,r.kt)("p",null,"The common way to produce an aggregate function value is by calling the aggregate function with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/combinators#agg-functions-combinator-simplestate"},"-SimpleState")," suffix."),(0,r.kt)("p",null,"The following aggregate functions are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/any#agg_function-any"},(0,r.kt)("inlineCode",{parentName:"a"},"any"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/anylast#anylastx"},(0,r.kt)("inlineCode",{parentName:"a"},"anyLast"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/min#agg_function-min"},(0,r.kt)("inlineCode",{parentName:"a"},"min"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/max#agg_function-max"},(0,r.kt)("inlineCode",{parentName:"a"},"max"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/sum#agg_function-sum"},(0,r.kt)("inlineCode",{parentName:"a"},"sum"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow#sumwithoverflowx"},(0,r.kt)("inlineCode",{parentName:"a"},"sumWithOverflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitand#groupbitand"},(0,r.kt)("inlineCode",{parentName:"a"},"groupBitAnd"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitor#groupbitor"},(0,r.kt)("inlineCode",{parentName:"a"},"groupBitOr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupbitxor#groupbitxor"},(0,r.kt)("inlineCode",{parentName:"a"},"groupBitXor"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/grouparray#agg_function-grouparray"},(0,r.kt)("inlineCode",{parentName:"a"},"groupArrayArray"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray"},(0,r.kt)("inlineCode",{parentName:"a"},"groupUniqArrayArray"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/summap#agg_functions-summap"},(0,r.kt)("inlineCode",{parentName:"a"},"sumMap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/minmap#agg_functions-minmap"},(0,r.kt)("inlineCode",{parentName:"a"},"minMap"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/maxmap#agg_functions-maxmap"},(0,r.kt)("inlineCode",{parentName:"a"},"maxMap")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction(func, Type)")," look and stored the same way as ",(0,r.kt)("inlineCode",{parentName:"p"},"Type"),", so you do not need to apply functions with ",(0,r.kt)("inlineCode",{parentName:"p"},"-Merge"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"-State")," suffixes."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"SimpleAggregateFunction")," has better performance than ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," with same aggregation function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name of the aggregate function."),(0,r.kt)("li",{parentName:"ul"},"Types of the aggregate function arguments.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE simple (id UInt64, val SimpleAggregateFunction(sum, Double)) ENGINE=AggregatingMergeTree ORDER BY id;\n")))}u.isMDXComponent=!0}}]);