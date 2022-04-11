"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80569],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),g=i,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:205},s="quantileTimingWeighted",u={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletimingweighted",id:"en/sql-reference/aggregate-functions/reference/quantiletimingweighted",title:"quantileTimingWeighted",description:"quantiletimingweighted}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",permalink:"/en/sql-reference/aggregate-functions/reference/quantiletimingweighted",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted.md",tags:[],version:"current",sidebarPosition:205,frontMatter:{sidebar_position:205},sidebar:"english",previous:{title:"quantileTiming",permalink:"/en/sql-reference/aggregate-functions/reference/quantiletiming"},next:{title:"quantileDeterministic",permalink:"/en/sql-reference/aggregate-functions/reference/quantiledeterministic"}},p={},c=[],m={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantiletimingweighted"},"quantileTimingWeighted"),(0,r.kt)("p",null,"With the determined precision computes the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence according to the weight of each sequence member."),(0,r.kt)("p",null,"The result is deterministic (it does not depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response times."),(0,r.kt)("p",null,"When using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTimingWeighted(level)(expr, weight)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"medianTimingWeighted"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," value in the range of ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,r.kt)("inlineCode",{parentName:"p"},"level=0.5")," the function calculates ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Median"},"median"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/syntax#syntax-expressions"},"Expression")," over a column values returning a ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float"},"Float","*"),"-type number."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- If negative values are passed to the function, the behavior is undefined.\n- If the value is greater than 30,000 (a page loading time of more than 30 seconds), it is assumed to be 30,000.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"weight")," \u2014 Column with weights of sequence elements. Weight is a number of value occurrences."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accuracy")),(0,r.kt)("p",null,"The calculation is accurate if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total number of values does not exceed 5670."),(0,r.kt)("li",{parentName:"ul"},"Total number of values exceeds 5670, but the page loading time is less than 1024ms.")),(0,r.kt)("p",null,"Otherwise, the result of the calculation is rounded to the nearest multiple of 16 ms."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For calculating page loading time quantiles, this function is more effective and accurate than ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If no values are passed to the function (when using ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileTimingIf"),"), ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float#data_type-float-nan-inf"},"NaN")," is returned. The purpose of this is to differentiate these cases from cases that result in zero. See ",(0,r.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY clause")," for notes on sorting ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," values."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTimingWeighted(response_time, weight) FROM t\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTimingWeighted(response_time, weight)\u2500\u2510\n\u2502                                           112 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h1",{id:"quantilestimingweighted"},"quantilesTimingWeighted"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileTimingWeighted"),", but accept multiple parameters with quantile levels and return an Array filled with many values of that quantiles."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u252c\u2500weight\u2500\u2510\n\u2502            68 \u2502      1 \u2502\n\u2502           104 \u2502      2 \u2502\n\u2502           112 \u2502      3 \u2502\n\u2502           126 \u2502      2 \u2502\n\u2502           138 \u2502      1 \u2502\n\u2502           162 \u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantilesTimingWeighted(0,5, 0.99)(response_time, weight) FROM t\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantilesTimingWeighted(0.5, 0.99)(response_time, weight)\u2500\u2510\n\u2502 [112,162]                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}g.isMDXComponent=!0}}]);