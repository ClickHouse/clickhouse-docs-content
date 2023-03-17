"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[25691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/data-types/float",sidebar_position:41,sidebar_label:"Float32, Float64"},i="Float32, Float64",o={unversionedId:"en/sql-reference/data-types/float",id:"en/sql-reference/data-types/float",title:"Float32, Float64",description:"If you need accurate calculations, in particular if you work with financial or business data requiring a high precision you should consider using Decimal instead. Floats might lead to inaccurate results as illustrated below:",source:"@site/docs/en/sql-reference/data-types/float.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/float",permalink:"/docs/en/sql-reference/data-types/float",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/float.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/data-types/float",sidebar_position:41,sidebar_label:"Float32, Float64"},sidebar:"sqlreference",previous:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/docs/en/sql-reference/data-types/int-uint"},next:{title:"Decimal",permalink:"/docs/en/sql-reference/data-types/decimal"}},s={},u=[{value:"Using Floating-point Numbers",id:"using-floating-point-numbers",level:2},{value:"NaN and Inf",id:"nan-and-inf",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"float32-float64"},"Float32, Float64"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you need accurate calculations, in particular if you work with financial or business data requiring a high precision you should consider using Decimal instead. Floats might lead to inaccurate results as illustrated below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"CREATE TABLE IF NOT EXISTS float_vs_decimal\n(\n   my_float Float64,\n   my_decimal Decimal64(3)\n)Engine=MergeTree ORDER BY tuple()\n\nINSERT INTO float_vs_decimal SELECT round(canonicalRand(), 3) AS res, res FROM system.numbers LIMIT 1000000; # Generate 1 000 000 random number with 2 decimal places and store them as a float and as a decimal\n\nSELECT sum(my_float), sum(my_decimal) FROM float_vs_decimal;\n> 500279.56300000014    500279.563\n\nSELECT sumKahan(my_float), sumKahan(my_decimal) FROM float_vs_decimal;\n> 500279.563    500279.563\n"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"Floating point numbers"),"."),(0,r.kt)("p",null,"Types are equivalent to types of C:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"double"),".")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"FLOAT"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"DOUBLE"),".")),(0,r.kt)("p",null,"When creating tables, numeric parameters for floating point numbers can be set (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT(12)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT(15, 22)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE(12)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DOUBLE(4, 18)"),"), but ClickHouse ignores them."),(0,r.kt)("h2",{id:"using-floating-point-numbers"},"Using Floating-point Numbers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Computations with floating-point numbers might produce a rounding error.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 1 - 0.9\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500minus(1, 0.9)\u2500\u2510\n\u2502 0.09999999999999998 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The result of the calculation depends on the calculation method (the processor type and architecture of the computer system)."),(0,r.kt)("li",{parentName:"ul"},"Floating-point calculations might result in numbers such as infinity (",(0,r.kt)("inlineCode",{parentName:"li"},"Inf"),") and \u201cnot-a-number\u201d (",(0,r.kt)("inlineCode",{parentName:"li"},"NaN"),"). This should be taken into account when processing the results of calculations."),(0,r.kt)("li",{parentName:"ul"},"When parsing floating-point numbers from text, the result might not be the nearest machine-representable number.")),(0,r.kt)("h2",{id:"nan-and-inf"},"NaN and Inf"),(0,r.kt)("p",null,"In contrast to standard SQL, ClickHouse supports the following categories of floating-point numbers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Inf")," \u2013 Infinity.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0.5 / 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0.5, 0)\u2500\u2510\n\u2502            inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-Inf")," \u2014 Negative infinity.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT -0.5 / 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(-0.5, 0)\u2500\u2510\n\u2502            -inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NaN")," \u2014 Not a number.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0 / 0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0, 0)\u2500\u2510\n\u2502          nan \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"See the rules for ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," sorting in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY clause"),"."))}m.isMDXComponent=!0}}]);