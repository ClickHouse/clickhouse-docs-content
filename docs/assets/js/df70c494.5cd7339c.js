"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93411],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={sidebar_label:"INTERSECT"},c="INTERSECT Clause",i={unversionedId:"en/sql-reference/statements/select/intersect",id:"en/sql-reference/statements/select/intersect",title:"INTERSECT Clause",description:"intersect-clause}",source:"@site/docs/en/sql-reference/statements/select/intersect.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/intersect",permalink:"/docs/en/sql-reference/statements/select/intersect",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/intersect.md",tags:[],version:"current",frontMatter:{sidebar_label:"INTERSECT"},sidebar:"english",previous:{title:"HAVING",permalink:"/docs/en/sql-reference/statements/select/having"},next:{title:"INTO OUTFILE",permalink:"/docs/en/sql-reference/statements/select/into-outfile"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"intersect-clause"},"INTERSECT Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," clause returns only those rows that result from both the first and the second queries. The queries must match the number of columns, order, and type. The result of ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," can contain duplicate rows."),(0,l.kt)("p",null,"Multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," statements are executes left to right if parenthesis are not specified. The ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," operator has a higher priority than the ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1 [, column2 ]\nFROM table1\n[WHERE condition]\n\nINTERSECT\n\nSELECT column1 [, column2 ]\nFROM table2\n[WHERE condition]\n\n")),(0,l.kt)("p",null,"The condition could be any expression based on your requirements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(1,10) INTERSECT SELECT number FROM numbers(3,6);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      3 \u2502\n\u2502      4 \u2502\n\u2502      5 \u2502\n\u2502      6 \u2502\n\u2502      7 \u2502\n\u2502      8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1(one String, two String, three String) ENGINE=Memory();\nCREATE TABLE t2(four String, five String, six String) ENGINE=Memory();\n\nINSERT INTO t1 VALUES ('q', 'm', 'b'), ('s', 'd', 'f'), ('l', 'p', 'o'), ('s', 'd', 'f'), ('s', 'd', 'f'), ('k', 't', 'd'), ('l', 'p', 'o');\nINSERT INTO t2 VALUES ('q', 'm', 'b'), ('b', 'd', 'k'), ('s', 'y', 't'), ('s', 'd', 'f'), ('m', 'f', 'o'), ('k', 'k', 'd');\n\nSELECT * FROM t1 INTERSECT SELECT * FROM t2;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500one\u2500\u252c\u2500two\u2500\u252c\u2500three\u2500\u2510\n\u2502 q   \u2502 m   \u2502 b     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2502 s   \u2502 d   \u2502 f     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/union#union-clause"},"UNION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/except#except-clause"},"EXCEPT"))))}f.isMDXComponent=!0}}]);