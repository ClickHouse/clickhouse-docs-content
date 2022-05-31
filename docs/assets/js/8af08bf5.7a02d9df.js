"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80084],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_label:"EXCEPT"},c="EXCEPT Clause",u={unversionedId:"en/sql-reference/statements/select/except",id:"en/sql-reference/statements/select/except",title:"EXCEPT Clause",description:"except-clause}",source:"@site/docs/en/sql-reference/statements/select/except.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/except",permalink:"/docs/en/sql-reference/statements/select/except",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/except.md",tags:[],version:"current",frontMatter:{sidebar_label:"EXCEPT"},sidebar:"english",previous:{title:"DISTINCT",permalink:"/docs/en/sql-reference/statements/select/distinct"},next:{title:"FORMAT",permalink:"/docs/en/sql-reference/statements/select/format"}},i={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"except-clause"},"EXCEPT Clause"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," clause returns only those rows that result from the first query without the second. The queries must match the number of columns, order, and type. The result of ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," can contain duplicate rows."),(0,l.kt)("p",null,"Multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," statements are executed left to right if parenthesis are not specified. The ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT")," operator has the same priority as the ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," clause and lower priority than the ",(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT column1 [, column2 ]\nFROM table1\n[WHERE condition]\n\nEXCEPT\n\nSELECT column1 [, column2 ]\nFROM table2\n[WHERE condition]\n\n")),(0,l.kt)("p",null,"The condition could be any expression based on your requirements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(1,10) EXCEPT SELECT number FROM numbers(3,6);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502      1 \u2502\n\u2502      2 \u2502\n\u2502      9 \u2502\n\u2502     10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1(one String, two String, three String) ENGINE=Memory();\nCREATE TABLE t2(four String, five String, six String) ENGINE=Memory();\n\nINSERT INTO t1 VALUES ('q', 'm', 'b'), ('s', 'd', 'f'), ('l', 'p', 'o'), ('s', 'd', 'f'), ('s', 'd', 'f'), ('k', 't', 'd'), ('l', 'p', 'o');\nINSERT INTO t2 VALUES ('q', 'm', 'b'), ('b', 'd', 'k'), ('s', 'y', 't'), ('s', 'd', 'f'), ('m', 'f', 'o'), ('k', 'k', 'd');\n\nSELECT * FROM t1 EXCEPT SELECT * FROM t2;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500one\u2500\u252c\u2500two\u2500\u252c\u2500three\u2500\u2510\n\u2502 l   \u2502 p   \u2502 o     \u2502\n\u2502 k   \u2502 t   \u2502 d     \u2502\n\u2502 l   \u2502 p   \u2502 o     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/union#union-clause"},"UNION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/intersect#intersect-clause"},"INTERSECT"))))}f.isMDXComponent=!0}}]);