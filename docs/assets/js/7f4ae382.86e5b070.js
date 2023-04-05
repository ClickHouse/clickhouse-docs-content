"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[11732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,g=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",sidebar_position:204},l="quantileTiming",o={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletiming",id:"en/sql-reference/aggregate-functions/reference/quantiletiming",title:"quantileTiming",description:"With the determined precision computes the quantile of a numeric data sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletiming.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletiming.md",tags:[],version:"current",sidebarPosition:204,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",sidebar_position:204},sidebar:"sqlreference",previous:{title:"quantileApprox",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantileApprox"},next:{title:"quantileTimingWeighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted"}},s={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantiletiming"},"quantileTiming"),(0,a.kt)("p",null,"With the determined precision computes the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,a.kt)("p",null,"The result is deterministic (it does not depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response times."),(0,a.kt)("p",null,"When using multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTiming(level)(expr)\n")),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"medianTiming"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,a.kt)("inlineCode",{parentName:"p"},"level")," value in the range of ",(0,a.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,a.kt)("inlineCode",{parentName:"p"},"level=0.5")," the function calculates ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Median"},"median"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," over a column values returning a ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float","*"),"-type number."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If negative values are passed to the function, the behavior is undefined."),(0,a.kt)("li",{parentName:"ul"},"If the value is greater than 30,000 (a page loading time of more than 30 seconds), it is assumed to be 30,000.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Accuracy")),(0,a.kt)("p",null,"The calculation is accurate if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Total number of values does not exceed 5670."),(0,a.kt)("li",{parentName:"ul"},"Total number of values exceeds 5670, but the page loading time is less than 1024ms.")),(0,a.kt)("p",null,"Otherwise, the result of the calculation is rounded to the nearest multiple of 16 ms."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For calculating page loading time quantiles, this function is more effective and accurate than ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,a.kt)("p",null,"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Float32"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If no values are passed to the function (when using ",(0,a.kt)("inlineCode",{parentName:"p"},"quantileTimingIf"),"), ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#data_type-float-nan-inf"},"NaN")," is returned. The purpose of this is to differentiate these cases from cases that result in zero. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY clause")," for notes on sorting ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN")," values.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Input table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u2510\n\u2502            72 \u2502\n\u2502           112 \u2502\n\u2502           126 \u2502\n\u2502           145 \u2502\n\u2502           104 \u2502\n\u2502           242 \u2502\n\u2502           313 \u2502\n\u2502           168 \u2502\n\u2502           108 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTiming(response_time) FROM t\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTiming(response_time)\u2500\u2510\n\u2502                           126 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);