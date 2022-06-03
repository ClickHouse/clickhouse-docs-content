"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73643],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:206},s="quantileDeterministic",u={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiledeterministic",id:"en/sql-reference/aggregate-functions/reference/quantiledeterministic",title:"quantileDeterministic",description:"Computes an approximate quantile of a numeric data sequence.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiledeterministic.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiledeterministic",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiledeterministic",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiledeterministic.md",tags:[],version:"current",sidebarPosition:206,frontMatter:{sidebar_position:206},sidebar:"english",previous:{title:"quantileTimingWeighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletimingweighted"},next:{title:"quantileTDigest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest"}},c={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quantiledeterministic"},"quantileDeterministic"),(0,i.kt)("p",null,"Computes an approximate ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence."),(0,i.kt)("p",null,"This function applies ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reservoir_sampling"},"reservoir sampling")," with a reservoir size up to 8192 and deterministic algorithm of sampling. The result is deterministic. To get an exact quantile, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact")," function."),(0,i.kt)("p",null,"When using multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"quantileDeterministic(level)(expr, determinator)\n")),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"medianDeterministic"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,i.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,i.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,i.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"determinator")," \u2014 Number whose hash is used instead of a random number generator in the reservoir sampling algorithm to make the result of sampling deterministic. As a determinator you can use any deterministic positive number, for example, a user id or an event id. If the same determinator value occures too often, the function works incorrectly.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Approximate quantile of the specified level.")),(0,i.kt)("p",null,"Type:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Input table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileDeterministic(val, 1) FROM t\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileDeterministic(val, 1)\u2500\u2510\n\u2502                           1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}f.isMDXComponent=!0}}]);