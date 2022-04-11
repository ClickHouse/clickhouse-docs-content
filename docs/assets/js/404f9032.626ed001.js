"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18728],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,k=f["".concat(s,".").concat(m)]||f[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={sidebar_position:201},s="quantiles Functions",p={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiles",id:"en/sql-reference/aggregate-functions/reference/quantiles",title:"quantiles Functions",description:"quantiles-functions}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiles.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiles",permalink:"/en/sql-reference/aggregate-functions/reference/quantiles",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/quantiles.md",tags:[],version:"current",sidebarPosition:201,frontMatter:{sidebar_position:201},sidebar:"english",previous:{title:"quantile",permalink:"/en/sql-reference/aggregate-functions/reference/quantile"},next:{title:"quantileExact Functions",permalink:"/en/sql-reference/aggregate-functions/reference/quantileexact"}},o={},c=[{value:"quantiles",id:"quantiles",level:2},{value:"quantilesExactExclusive",id:"quantilesexactexclusive",level:2},{value:"quantilesExactInclusive",id:"quantilesexactinclusive",level:2}],f={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantiles-functions"},"quantiles Functions"),(0,l.kt)("h2",{id:"quantiles"},"quantiles"),(0,l.kt)("p",null,"Syntax: ",(0,l.kt)("inlineCode",{parentName:"p"},"quantiles(level1, level2, \u2026)(x)")),(0,l.kt)("p",null,"All the quantile functions also have corresponding quantiles functions: ",(0,l.kt)("inlineCode",{parentName:"p"},"quantiles"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesDeterministic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTiming"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTimingWeighted"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesExact"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesExactWeighted"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesTDigest"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"quantilesBFloat16"),". These functions calculate all the quantiles of the listed levels in one pass, and return an array of the resulting values."),(0,l.kt)("h2",{id:"quantilesexactexclusive"},"quantilesExactExclusive"),(0,l.kt)("p",null,"Exactly computes the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantiles")," of a numeric data sequence."),(0,l.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Therefore, the function consumes ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," memory, where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a number of values that were passed. However, for a small number of values, the function is very effective."),(0,l.kt)("p",null,"This function is equivalent to ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-exc-function-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba"},"PERCENTILE.EXC")," Excel function, (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"type R6"),")."),(0,l.kt)("p",null,"Works more efficiently with sets of levels than ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexactexclusive"},"quantileExactExclusive"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantilesExactExclusive(level1, level2, ...)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Levels of quantiles. Possible values: (0, 1) \u2014 bounds not included. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/array"},"Array")," of quantiles of the specified levels.")),(0,l.kt)("p",null,"Type of array values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantilesExactExclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesExactExclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x)\u2500\u2510\n\u2502 [249.25,499.5,749.75,899.9,949.9499999999999,989.99,998.999]        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"quantilesexactinclusive"},"quantilesExactInclusive"),(0,l.kt)("p",null,"Exactly computes the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantiles")," of a numeric data sequence."),(0,l.kt)("p",null,"To get exact value, all the passed values \u200b\u200bare combined into an array, which is then partially sorted. Therefore, the function consumes ",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)")," memory, where ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," is a number of values that were passed. However, for a small number of values, the function is very effective."),(0,l.kt)("p",null,"This function is equivalent to ",(0,l.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/percentile-inc-function-680f9539-45eb-410b-9a5e-c1355e5fe2ed"},"PERCENTILE.INC")," Excel function, (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample"},"type R7"),")."),(0,l.kt)("p",null,"Works more efficiently with sets of levels than ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexactinclusive"},"quantileExactInclusive"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantilesExactInclusive(level1, level2, ...)(expr)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Levels of quantiles. Possible values: ","[0, 1]"," \u2014 bounds included. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/array"},"Array")," of quantiles of the specified levels.")),(0,l.kt)("p",null,"Type of array values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE num AS numbers(1000);\n\nSELECT quantilesExactInclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x) FROM (SELECT number AS x FROM num);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesExactInclusive(0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 0.999)(x)\u2500\u2510\n\u2502 [249.75,499.5,749.25,899.1,949.05,989.01,998.001]                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);