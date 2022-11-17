"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/en/sql-reference/functions/logical-functions",sidebar_position:37,sidebar_label:"Logical"},o="Logical Functions",i={unversionedId:"en/sql-reference/functions/logical-functions",id:"en/sql-reference/functions/logical-functions",title:"Logical Functions",description:"Performs logical operations on arguments of any numeric types, but returns a UInt8 number equal to 0, 1 or NULL in some cases.",source:"@site/docs/en/sql-reference/functions/logical-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/logical-functions",permalink:"/docs/en/sql-reference/functions/logical-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/logical-functions.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{slug:"/en/sql-reference/functions/logical-functions",sidebar_position:37,sidebar_label:"Logical"},sidebar:"english",previous:{title:"Comparison",permalink:"/docs/en/sql-reference/functions/comparison-functions"},next:{title:"Type Conversion",permalink:"/docs/en/sql-reference/functions/type-conversion-functions"}},s={},p=[{value:"and",id:"and",level:2},{value:"or",id:"or",level:2},{value:"not",id:"not",level:2},{value:"xor",id:"xor",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logical-functions"},"Logical Functions"),(0,l.kt)("p",null,"Performs logical operations on arguments of any numeric types, but returns a ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8")," number equal to 0, 1 or ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," in some cases."),(0,l.kt)("p",null,"Zero as an argument is considered ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", while any non-zero value is considered ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h2",{id:"and"},"and"),(0,l.kt)("p",null,"Calculates the result of the logical conjunction between two or more values. Corresponds to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#logical-and-operator"},"Logical AND Operator"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"and(val1, val2...)\n")),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#short-circuit-function-evaluation"},"short_circuit_function_evaluation")," setting to calculate the ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," function according to a short scheme. If this setting is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"vali")," is evaluated only on rows where ",(0,l.kt)("inlineCode",{parentName:"p"},"(val1 AND val2 AND ... AND val{i-1})")," is true. For example, an exception about division by zero is not thrown when executing the query ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT and(number = 2, intDiv(1, number)) FROM numbers(10)"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", if there is at least one zero value argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", if there are no zero values arguments and there is at least one ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", otherwise.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT and(0, 1, -2);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500and(0, 1, -2)\u2500\u2510\n\u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT and(NULL, 1, 10, -2);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500and(NULL, 1, 10, -2)\u2500\u2510\n\u2502                 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"or"},"or"),(0,l.kt)("p",null,"Calculates the result of the logical disjunction between two or more values. Corresponds to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#logical-or-operator"},"Logical OR Operator"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"or(val1, val2...)\n")),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#short-circuit-function-evaluation"},"short_circuit_function_evaluation")," setting to calculate the ",(0,l.kt)("inlineCode",{parentName:"p"},"or")," function according to a short scheme. If this setting is enabled, ",(0,l.kt)("inlineCode",{parentName:"p"},"vali")," is evaluated only on rows where ",(0,l.kt)("inlineCode",{parentName:"p"},"((NOT val1) AND (NOT val2) AND ... AND (NOT val{i-1}))")," is true. For example, an exception about division by zero is not thrown when executing the query ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT or(number = 0, intDiv(1, number) != 0) FROM numbers(10)"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", if there is at least one non-zero value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", if there are only zero values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", if there are only zero values and ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT or(1, 0, 0, 2, NULL);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500or(1, 0, 0, 2, NULL)\u2500\u2510\n\u2502                    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"With ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT or(0, NULL);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500or(0, NULL)\u2500\u2510\n\u2502        \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"not"},"not"),(0,l.kt)("p",null,"Calculates the result of the logical negation of the value. Corresponds to ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#logical-negation-operator"},"Logical Negation Operator"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"not(val);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 The value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", if the ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", if the ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," is a non-zero value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", if the ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," is a ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," value.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT NOT(1);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-test"},"\u250c\u2500not(1)\u2500\u2510\n\u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"xor"},"xor"),(0,l.kt)("p",null,"Calculates the result of the logical exclusive disjunction between two or more values. For more than two values the function works as if it calculates ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," of the first two values and then uses the result with the next value to calculate ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," and so on."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"xor(val1, val2...)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 List of at least two values. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", for two values: if one of the values is zero and other is not."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", for two values: if both values are zero or non-zero at the same time."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", if there is at least one ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," value.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT xor(0, 1, 1);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500xor(0, 1, 1)\u2500\u2510\n\u2502            0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);