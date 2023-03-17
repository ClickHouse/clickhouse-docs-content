"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[14792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,f=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},42458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",sidebar_position:108,sidebar_title:"exponentialMovingAverage"},l=void 0,o={unversionedId:"en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",id:"en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",title:"exponentialmovingaverage",description:"exponentialMovingAverage",source:"@site/docs/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",permalink:"/docs/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage.md",tags:[],version:"current",sidebarPosition:108,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",sidebar_position:108,sidebar_title:"exponentialMovingAverage"},sidebar:"sqlreference",previous:{title:"corr",permalink:"/docs/en/sql-reference/aggregate-functions/reference/corr"},next:{title:"topK",permalink:"/docs/en/sql-reference/aggregate-functions/reference/topk"}},s={},p=[{value:"exponentialMovingAverage",id:"exponentialmovingaverage",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"exponentialmovingaverage"},"exponentialMovingAverage"),(0,r.kt)("p",null,"\u0421alculates the exponential moving average of values for the determined time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"exponentialMovingAverage(x)(value, timeunit)\n")),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," corresponds to the determinate ",(0,r.kt)("inlineCode",{parentName:"p"},"timeunit"),". The half-life ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the time lag at which the exponential weights decay by one-half. The function returns a weighted average: the older the time point, the less weight the corresponding value is considered to be."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 Value. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeunit")," \u2014 Timeunit. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),". Timeunit is not timestamp (seconds), it's -- an index of the time interval. Can be calculated using ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/arithmetic-functions#intdiva-b"},"intDiv"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Half-life period. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returnes an ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average"},"exponentially smoothed moving average")," of the values for the past ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," time at the latest point of time.")),(0,r.kt)("p",null,"Type: ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500temperature\u2500\u252c\u2500timestamp\u2500\u2500\u2510\n\u2502          95  \u2502         1  \u2502\n\u2502          95  \u2502         2  \u2502\n\u2502          95  \u2502         3  \u2502\n\u2502          96  \u2502         4  \u2502\n\u2502          96  \u2502         5  \u2502\n\u2502          96  \u2502         6  \u2502\n\u2502          96  \u2502         7  \u2502\n\u2502          97  \u2502         8  \u2502\n\u2502          97  \u2502         9  \u2502\n\u2502          97  \u2502        10  \u2502\n\u2502          97  \u2502        11  \u2502\n\u2502          98  \u2502        12  \u2502\n\u2502          98  \u2502        13  \u2502\n\u2502          98  \u2502        14  \u2502\n\u2502          98  \u2502        15  \u2502\n\u2502          99  \u2502        16  \u2502\n\u2502          99  \u2502        17  \u2502\n\u2502          99  \u2502        18  \u2502\n\u2502         100  \u2502        19  \u2502\n\u2502         100  \u2502        20  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT exponentialMovingAverage(5)(temperature, timestamp);\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500exponentialMovingAverage(5)(temperature, timestamp)\u2500\u2500\u2510\n\u2502                                    92.25779635374204  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    value,\n    time,\n    round(exp_smooth, 3),\n    bar(exp_smooth, 0, 1, 50) AS bar\nFROM\n(\n    SELECT\n        (number = 0) OR (number >= 25) AS value,\n        number AS time,\n        exponentialMovingAverage(10)(value, time) OVER (Rows BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS exp_smooth\n    FROM numbers(50)\n)\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500value\u2500\u252c\u2500time\u2500\u252c\u2500round(exp_smooth, 3)\u2500\u252c\u2500bar\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     1 \u2502    0 \u2502                0.067 \u2502 \u2588\u2588\u2588\u258e                                      \u2502\n\u2502     0 \u2502    1 \u2502                0.062 \u2502 \u2588\u2588\u2588                                        \u2502\n\u2502     0 \u2502    2 \u2502                0.058 \u2502 \u2588\u2588\u258a                                       \u2502\n\u2502     0 \u2502    3 \u2502                0.054 \u2502 \u2588\u2588\u258b                                       \u2502\n\u2502     0 \u2502    4 \u2502                0.051 \u2502 \u2588\u2588\u258c                                        \u2502\n\u2502     0 \u2502    5 \u2502                0.047 \u2502 \u2588\u2588\u258e                                       \u2502\n\u2502     0 \u2502    6 \u2502                0.044 \u2502 \u2588\u2588\u258f                                       \u2502\n\u2502     0 \u2502    7 \u2502                0.041 \u2502 \u2588\u2588                                         \u2502\n\u2502     0 \u2502    8 \u2502                0.038 \u2502 \u2588\u258a                                        \u2502\n\u2502     0 \u2502    9 \u2502                0.036 \u2502 \u2588\u258b                                        \u2502\n\u2502     0 \u2502   10 \u2502                0.033 \u2502 \u2588\u258b                                        \u2502\n\u2502     0 \u2502   11 \u2502                0.031 \u2502 \u2588\u258c                                         \u2502\n\u2502     0 \u2502   12 \u2502                0.029 \u2502 \u2588\u258d                                        \u2502\n\u2502     0 \u2502   13 \u2502                0.027 \u2502 \u2588\u258e                                        \u2502\n\u2502     0 \u2502   14 \u2502                0.025 \u2502 \u2588\u258e                                        \u2502\n\u2502     0 \u2502   15 \u2502                0.024 \u2502 \u2588\u258f                                        \u2502\n\u2502     0 \u2502   16 \u2502                0.022 \u2502 \u2588                                          \u2502\n\u2502     0 \u2502   17 \u2502                0.021 \u2502 \u2588                                          \u2502\n\u2502     0 \u2502   18 \u2502                0.019 \u2502 \u258a                                         \u2502\n\u2502     0 \u2502   19 \u2502                0.018 \u2502 \u258a                                         \u2502\n\u2502     0 \u2502   20 \u2502                0.017 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   21 \u2502                0.016 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   22 \u2502                0.015 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   23 \u2502                0.014 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   24 \u2502                0.013 \u2502 \u258b                                         \u2502\n\u2502     1 \u2502   25 \u2502                0.079 \u2502 \u2588\u2588\u2588\u258a                                      \u2502\n\u2502     1 \u2502   26 \u2502                 0.14 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588                                    \u2502\n\u2502     1 \u2502   27 \u2502                0.198 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a                                \u2502\n\u2502     1 \u2502   28 \u2502                0.252 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                              \u2502\n\u2502     1 \u2502   29 \u2502                0.302 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                            \u2502\n\u2502     1 \u2502   30 \u2502                0.349 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d                        \u2502\n\u2502     1 \u2502   31 \u2502                0.392 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                       \u2502\n\u2502     1 \u2502   32 \u2502                0.433 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b                    \u2502\n\u2502     1 \u2502   33 \u2502                0.471 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                   \u2502\n\u2502     1 \u2502   34 \u2502                0.506 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e                \u2502\n\u2502     1 \u2502   35 \u2502                0.539 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a               \u2502\n\u2502     1 \u2502   36 \u2502                 0.57 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c              \u2502\n\u2502     1 \u2502   37 \u2502                0.599 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a            \u2502\n\u2502     1 \u2502   38 \u2502                0.626 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e          \u2502\n\u2502     1 \u2502   39 \u2502                0.651 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c          \u2502\n\u2502     1 \u2502   40 \u2502                0.674 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b        \u2502\n\u2502     1 \u2502   41 \u2502                0.696 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b       \u2502\n\u2502     1 \u2502   42 \u2502                0.716 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b      \u2502\n\u2502     1 \u2502   43 \u2502                0.735 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b     \u2502\n\u2502     1 \u2502   44 \u2502                0.753 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b    \u2502\n\u2502     1 \u2502   45 \u2502                 0.77 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d   \u2502\n\u2502     1 \u2502   46 \u2502                0.785 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e  \u2502\n\u2502     1 \u2502   47 \u2502                  0.8 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  \u2502\n\u2502     1 \u2502   48 \u2502                0.813 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b \u2502\n\u2502     1 \u2502   49 \u2502                0.825 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE data\nENGINE = Memory AS\nSELECT\n    10 AS value,\n    toDateTime('2020-01-01') + (3600 * number) AS time\nFROM numbers_mt(10);\n\n\n-- Calculate timeunit using intDiv\nSELECT\n    value,\n    time,\n    exponentialMovingAverage(1)(value, intDiv(toUInt32(time), 3600)) OVER (ORDER BY time ASC) AS res,\n    intDiv(toUInt32(time), 3600) AS timeunit\nFROM data\nORDER BY time ASC;\n\n\u250c\u2500value\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500res\u2500\u252c\u2500timeunit\u2500\u2510\n\u2502    10 \u2502 2020-01-01 00:00:00 \u2502           5 \u2502   438288 \u2502\n\u2502    10 \u2502 2020-01-01 01:00:00 \u2502         7.5 \u2502   438289 \u2502\n\u2502    10 \u2502 2020-01-01 02:00:00 \u2502        8.75 \u2502   438290 \u2502\n\u2502    10 \u2502 2020-01-01 03:00:00 \u2502       9.375 \u2502   438291 \u2502\n\u2502    10 \u2502 2020-01-01 04:00:00 \u2502      9.6875 \u2502   438292 \u2502\n\u2502    10 \u2502 2020-01-01 05:00:00 \u2502     9.84375 \u2502   438293 \u2502\n\u2502    10 \u2502 2020-01-01 06:00:00 \u2502    9.921875 \u2502   438294 \u2502\n\u2502    10 \u2502 2020-01-01 07:00:00 \u2502   9.9609375 \u2502   438295 \u2502\n\u2502    10 \u2502 2020-01-01 08:00:00 \u2502  9.98046875 \u2502   438296 \u2502\n\u2502    10 \u2502 2020-01-01 09:00:00 \u2502 9.990234375 \u2502   438297 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\n-- Calculate timeunit using toRelativeHourNum\nSELECT\n    value,\n    time,\n    exponentialMovingAverage(1)(value, toRelativeHourNum(time)) OVER (ORDER BY time ASC) AS res,\n    toRelativeHourNum(time) AS timeunit\nFROM data\nORDER BY time ASC;\n\n\u250c\u2500value\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500time\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500res\u2500\u252c\u2500timeunit\u2500\u2510\n\u2502    10 \u2502 2020-01-01 00:00:00 \u2502           5 \u2502   438288 \u2502\n\u2502    10 \u2502 2020-01-01 01:00:00 \u2502         7.5 \u2502   438289 \u2502\n\u2502    10 \u2502 2020-01-01 02:00:00 \u2502        8.75 \u2502   438290 \u2502\n\u2502    10 \u2502 2020-01-01 03:00:00 \u2502       9.375 \u2502   438291 \u2502\n\u2502    10 \u2502 2020-01-01 04:00:00 \u2502      9.6875 \u2502   438292 \u2502\n\u2502    10 \u2502 2020-01-01 05:00:00 \u2502     9.84375 \u2502   438293 \u2502\n\u2502    10 \u2502 2020-01-01 06:00:00 \u2502    9.921875 \u2502   438294 \u2502\n\u2502    10 \u2502 2020-01-01 07:00:00 \u2502   9.9609375 \u2502   438295 \u2502\n\u2502    10 \u2502 2020-01-01 08:00:00 \u2502  9.98046875 \u2502   438296 \u2502\n\u2502    10 \u2502 2020-01-01 09:00:00 \u2502 9.990234375 \u2502   438297 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);