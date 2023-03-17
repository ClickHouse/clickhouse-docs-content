"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=g(n),f=r,d=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var g=2;g<i;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/data-types/aggregatefunction",sidebar_position:53,sidebar_label:"AggregateFunction"},o="AggregateFunction",s={unversionedId:"en/sql-reference/data-types/aggregatefunction",id:"en/sql-reference/data-types/aggregatefunction",title:"AggregateFunction",description:"Aggregate functions can have an implementation-defined intermediate state that can be serialized to an AggregateFunction(\u2026) data type and stored in a table, usually, by means of a materialized view. The common way to produce an aggregate function state is by calling the aggregate function with the -State suffix. To get the final result of aggregation in the future, you must use the same aggregate function with the -Mergesuffix.",source:"@site/docs/en/sql-reference/data-types/aggregatefunction.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/aggregatefunction",permalink:"/docs/en/sql-reference/data-types/aggregatefunction",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/aggregatefunction.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{slug:"/en/sql-reference/data-types/aggregatefunction",sidebar_position:53,sidebar_label:"AggregateFunction"},sidebar:"sqlreference",previous:{title:"Array(T)",permalink:"/docs/en/sql-reference/data-types/array"},next:{title:"JSON",permalink:"/docs/en/sql-reference/data-types/json"}},l={},g=[{value:"Usage",id:"usage",level:2},{value:"Data Insertion",id:"data-insertion",level:3},{value:"Data Selection",id:"data-selection",level:3},{value:"Usage Example",id:"usage-example",level:2}],u={toc:g},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aggregatefunction"},"AggregateFunction"),(0,r.kt)("p",null,"Aggregate functions can have an implementation-defined intermediate state that can be serialized to an ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction(\u2026)")," data type and stored in a table, usually, by means of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/view"},"a materialized view"),". The common way to produce an aggregate function state is by calling the aggregate function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-State")," suffix. To get the final result of aggregation in the future, you must use the same aggregate function with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Merge"),"suffix."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction(name, types_of_arguments\u2026)")," \u2014 parametric data type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name of the aggregate function. If the function is parametric, specify its parameters too.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Types of the aggregate function arguments."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    column1 AggregateFunction(uniq, UInt64),\n    column2 AggregateFunction(anyIf, String, UInt8),\n    column3 AggregateFunction(quantiles(0.5, 0.9), UInt64)\n) ENGINE = ...\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq"),", anyIf (",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/any#agg_function-any"},"any"),"+",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/combinators#agg-functions-combinator-if"},"If"),") and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," are the aggregate functions supported in ClickHouse."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"data-insertion"},"Data Insertion"),(0,r.kt)("p",null,"To insert data, use ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," with aggregate ",(0,r.kt)("inlineCode",{parentName:"p"},"-State"),"- functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"uniqState(UserID)\nquantilesState(0.5, 0.9)(SendTiming)\n")),(0,r.kt)("p",null,"In contrast to the corresponding functions ",(0,r.kt)("inlineCode",{parentName:"p"},"uniq")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-State"),"- functions return the state, instead of the final value. In other words, they return a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," type."),(0,r.kt)("p",null,"In the results of ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," type have implementation-specific binary representation for all of the ClickHouse output formats. If dump data into, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"TabSeparated")," format with ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, then this dump can be loaded back using ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query."),(0,r.kt)("h3",{id:"data-selection"},"Data Selection"),(0,r.kt)("p",null,"When selecting data from ",(0,r.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," table, use ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and the same aggregate functions as when inserting data, but using ",(0,r.kt)("inlineCode",{parentName:"p"},"-Merge"),"suffix."),(0,r.kt)("p",null,"An aggregate function with ",(0,r.kt)("inlineCode",{parentName:"p"},"-Merge")," suffix takes a set of states, combines them, and returns the result of complete data aggregation."),(0,r.kt)("p",null,"For example, the following two queries return the same result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uniq(UserID) FROM table\n\nSELECT uniqMerge(state) FROM (SELECT uniqState(UserID) AS state FROM table GROUP BY RegionID)\n")),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," engine description."))}p.isMDXComponent=!0}}]);