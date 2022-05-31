"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25691],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:41,sidebar_label:"Float32, Float64"},s="Float32, Float64",p={unversionedId:"en/sql-reference/data-types/float",id:"en/sql-reference/data-types/float",title:"Float32, Float64",description:"float32-float64}",source:"@site/docs/en/sql-reference/data-types/float.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/float",permalink:"/docs/en/sql-reference/data-types/float",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/float.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"Float32, Float64"},sidebar:"english",previous:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/docs/en/sql-reference/data-types/int-uint"},next:{title:"Decimal",permalink:"/docs/en/sql-reference/data-types/decimal"}},u={},c=[{value:"Using Floating-point Numbers",id:"using-floating-point-numbers",level:2},{value:"NaN and Inf",id:"data_type-float-nan-inf",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"float32-float64"},"Float32, Float64"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_754"},"Floating point numbers"),"."),(0,l.kt)("p",null,"Types are equivalent to types of C:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"float"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"double"),".")),(0,l.kt)("p",null,"We recommend that you store data in integer form whenever possible. For example, convert fixed precision numbers to integer values, such as monetary amounts or page load times in milliseconds."),(0,l.kt)("p",null,"Aliases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float32")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"FLOAT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Float64")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"DOUBLE"),".")),(0,l.kt)("p",null,"When creating tables, numeric parameters for floating point numbers can be set (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FLOAT(15, 22)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(12)"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DOUBLE(4, 18)"),"), but ClickHouse ignores them."),(0,l.kt)("h2",{id:"using-floating-point-numbers"},"Using Floating-point Numbers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Computations with floating-point numbers might produce a rounding error.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 1 - 0.9\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500minus(1, 0.9)\u2500\u2510\n\u2502 0.09999999999999998 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The result of the calculation depends on the calculation method (the processor type and architecture of the computer system)."),(0,l.kt)("li",{parentName:"ul"},"Floating-point calculations might result in numbers such as infinity (",(0,l.kt)("inlineCode",{parentName:"li"},"Inf"),") and \u201cnot-a-number\u201d (",(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"). This should be taken into account when processing the results of calculations."),(0,l.kt)("li",{parentName:"ul"},"When parsing floating-point numbers from text, the result might not be the nearest machine-representable number.")),(0,l.kt)("h2",{id:"data_type-float-nan-inf"},"NaN and Inf"),(0,l.kt)("p",null,"In contrast to standard SQL, ClickHouse supports the following categories of floating-point numbers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Inf")," \u2013 Infinity.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0.5 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0.5, 0)\u2500\u2510\n\u2502            inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-Inf")," \u2014 Negative infinity.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT -0.5 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(-0.5, 0)\u2500\u2510\n\u2502            -inf \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NaN")," \u2014 Not a number.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT 0 / 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500divide(0, 0)\u2500\u2510\n\u2502          nan \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"See the rules for ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," sorting in the section ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/order-by"},"ORDER BY clause"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/float/"},"Original article")," "))}f.isMDXComponent=!0}}]);