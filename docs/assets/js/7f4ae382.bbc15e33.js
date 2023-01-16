"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",sidebar_position:204},l="quantileTiming",o={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletiming",id:"en/sql-reference/aggregate-functions/reference/quantiletiming",title:"quantileTiming",description:"With the determined precision computes the quantile of a numeric data sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletiming.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletiming.md",tags:[],version:"current",sidebarPosition:204,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantiletiming",sidebar_position:204},sidebar:"english",previous:{title:"quantileInterpolatedWeighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantileInterpolatedWeighted"},next:{title:"quantileTimingWeighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantiletiming"},"quantileTiming"),(0,r.kt)("p",null,"With the determined precision computes the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,r.kt)("p",null,"The result is deterministic (it does not depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response times."),(0,r.kt)("p",null,"When using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTiming(level)(expr)\n")),(0,r.kt)("p",null,"Alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"medianTiming"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,r.kt)("inlineCode",{parentName:"p"},"level")," value in the range of ",(0,r.kt)("inlineCode",{parentName:"p"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,r.kt)("inlineCode",{parentName:"p"},"level=0.5")," the function calculates ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Median"},"median"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"expr")," \u2014 ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," over a column values returning a ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float","*"),"-type number."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If negative values are passed to the function, the behavior is undefined."),(0,r.kt)("li",{parentName:"ul"},"If the value is greater than 30,000 (a page loading time of more than 30 seconds), it is assumed to be 30,000.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Accuracy")),(0,r.kt)("p",null,"The calculation is accurate if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Total number of values does not exceed 5670."),(0,r.kt)("li",{parentName:"ul"},"Total number of values exceeds 5670, but the page loading time is less than 1024ms.")),(0,r.kt)("p",null,"Otherwise, the result of the calculation is rounded to the nearest multiple of 16 ms."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For calculating page loading time quantiles, this function is more effective and accurate than ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quantile of the specified level.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Float32"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If no values are passed to the function (when using ",(0,r.kt)("inlineCode",{parentName:"p"},"quantileTimingIf"),"), ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#data_type-float-nan-inf"},"NaN")," is returned. The purpose of this is to differentiate these cases from cases that result in zero. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by#select-order-by"},"ORDER BY clause")," for notes on sorting ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," values."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500response_time\u2500\u2510\n\u2502            72 \u2502\n\u2502           112 \u2502\n\u2502           126 \u2502\n\u2502           145 \u2502\n\u2502           104 \u2502\n\u2502           242 \u2502\n\u2502           313 \u2502\n\u2502           168 \u2502\n\u2502           108 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTiming(response_time) FROM t\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTiming(response_time)\u2500\u2510\n\u2502                           126 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}u.isMDXComponent=!0}}]);