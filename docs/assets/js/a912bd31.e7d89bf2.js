"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78232],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],o={sidebar_label:"WHERE"},i="WHERE Clause",c={unversionedId:"en/sql-reference/statements/select/where",id:"en/sql-reference/statements/select/where",title:"WHERE Clause",description:"select-where}",source:"@site/docs/en/sql-reference/statements/select/where.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/where",permalink:"/docs/en/sql-reference/statements/select/where",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/select/where.md",tags:[],version:"current",frontMatter:{sidebar_label:"WHERE"},sidebar:"english",previous:{title:"UNION",permalink:"/docs/en/sql-reference/statements/select/union"},next:{title:"WITH",permalink:"/docs/en/sql-reference/statements/select/with"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"select-where"},"WHERE Clause"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"WHERE")," clause allows to filter the data that is coming from ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/from"},"FROM")," clause of ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,s.kt)("p",null,"If there is a ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, it must contain an expression with the ",(0,s.kt)("inlineCode",{parentName:"p"},"UInt8")," type. This is usually an expression with comparison and logical operators. Rows where this expression evaluates to ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," are excluded from further transformations or result."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"WHERE")," expression is evaluated on the ability to use indexes and partition pruning, if the underlying table engine supports that."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"There is a filtering optimization called ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/prewhere"},"PREWHERE"),"."))),(0,s.kt)("p",null,"If you need to test a value for ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax#null-literal"},"NULL"),", use ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#operator-is-null"},"IS NULL")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#is-not-null"},"IS NOT NULL")," operators or ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/functions-for-nulls#isnull"},"isNull")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/functions-for-nulls#isnotnull"},"isNotNull")," functions.\nOtherwise an expression with ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," never passes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"To find numbers that are multiples of 3 and are greater than 10 execute the following query on the ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/numbers"},"numbers table"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number FROM numbers(20) WHERE (number > 10) AND (number % 3 == 0);\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u2510\n\u2502     12 \u2502\n\u2502     15 \u2502\n\u2502     18 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("p",null,"Queries with ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE=MergeTree() ORDER BY x;\nINSERT INTO t_null VALUES (1, NULL), (2, 3);\n\nSELECT * FROM t_null WHERE y IS NULL;\nSELECT * FROM t_null WHERE y != 0;\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500x\u2500\u252c\u2500y\u2500\u2510\n\u2502 2 \u2502 3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);