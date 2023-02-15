"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[86582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(o,".").concat(g)]||p[g]||f[g]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",sidebar_position:208},l="quantileTDigestWeighted",s={unversionedId:"en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",id:"en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",title:"quantileTDigestWeighted",description:"Computes an approximate quantile of a numeric data sequence using the t-digest algorithm. The function takes into account the weight of each sequence member. The maximum error is 1%. Memory consumption is log(n), where n is a number of values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted.md",tags:[],version:"current",sidebarPosition:208,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/quantiletdigestweighted",sidebar_position:208},sidebar:"english",previous:{title:"quantileTDigest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest"},next:{title:"quantileBFloat16",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantilebfloat16"}},o={},u=[],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantiletdigestweighted"},"quantileTDigestWeighted"),(0,a.kt)("p",null,"Computes an approximate ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"quantile")," of a numeric data sequence using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/blob/master/docs/t-digest-paper/histo.pdf"},"t-digest")," algorithm. The function takes into account the weight of each sequence member. The maximum error is 1%. Memory consumption is ",(0,a.kt)("inlineCode",{parentName:"p"},"log(n)"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is a number of values."),(0,a.kt)("p",null,"The performance of the function is lower than performance of ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantile#quantile"},"quantile")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiletiming#quantiletiming"},"quantileTiming"),". In terms of the ratio of State size to precision, this function is much better than ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile"),"."),(0,a.kt)("p",null,"The result depends on the order of running the query, and is nondeterministic."),(0,a.kt)("p",null,"When using multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile*")," functions with different levels in a query, the internal states are not combined (that is, the query works less efficiently than it could). In this case, use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," function."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"quantileTDigestWeighted")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest/issues/167#issuecomment-828650275"},"is not recommended for tiny data sets")," and can lead to significat error. In this case, consider possibility of using ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiletdigest"},(0,a.kt)("inlineCode",{parentName:"a"},"quantileTDigest"))," instead.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"quantileTDigestWeighted(level)(expr, weight)\n")),(0,a.kt)("p",null,"Alias: ",(0,a.kt)("inlineCode",{parentName:"p"},"medianTDigestWeighted"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," \u2014 Level of quantile. Optional parameter. Constant floating-point number from 0 to 1. We recommend using a ",(0,a.kt)("inlineCode",{parentName:"li"},"level")," value in the range of ",(0,a.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". Default value: 0.5. At ",(0,a.kt)("inlineCode",{parentName:"li"},"level=0.5")," the function calculates ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"median"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 Expression over the column values resulting in numeric ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/#data_types"},"data types"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 Column with weights of sequence elements. Weight is a number of value occurrences.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Approximate quantile of the specified level.")),(0,a.kt)("p",null,"Type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64")," for numeric data type input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date")," if input values have the ",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," if input values have the ",(0,a.kt)("inlineCode",{parentName:"li"},"DateTime")," type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantileTDigestWeighted(number, 1) FROM numbers(10)\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantileTDigestWeighted(number, 1)\u2500\u2510\n\u2502                                4.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}f.isMDXComponent=!0}}]);