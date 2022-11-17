"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40614],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),g=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=g(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=g(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=r[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75155:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var t=r(87462),a=(r(67294),r(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingavg",sidebar_position:114},i="groupArrayMovingAvg",l={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparraymovingavg",id:"en/sql-reference/aggregate-functions/reference/grouparraymovingavg",title:"groupArrayMovingAvg",description:"Calculates the moving average of input values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingavg",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingavg",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingavg.md",tags:[],version:"current",sidebarPosition:114,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingavg",sidebar_position:114},sidebar:"english",previous:{title:"groupArrayMovingSum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum"},next:{title:"groupArraySample",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraysample"}},u={},g=[],s={toc:g};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grouparraymovingavg"},"groupArrayMovingAvg"),(0,a.kt)("p",null,"Calculates the moving average of input values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayMovingAvg(numbers_for_summing)\ngroupArrayMovingAvg(window_size)(numbers_for_summing)\n")),(0,a.kt)("p",null,"The function can take the window size as a parameter. If left unspecified, the function takes the window size equal to the number of rows in the column."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numbers_for_summing")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in a numeric data type value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window_size")," \u2014 Size of the calculation window.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Array of the same size and type as the input data.")),(0,a.kt)("p",null,"The function uses ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rounding#Rounding_towards_zero"},"rounding towards zero"),". It truncates the decimal places insignificant for the resulting data type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"The sample table ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    `int` UInt8,\n    `float` Float32,\n    `dec` Decimal32(2)\n)\nENGINE = TinyLog\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int\u2500\u252c\u2500float\u2500\u252c\u2500\u2500dec\u2500\u2510\n\u2502   1 \u2502   1.1 \u2502 1.10 \u2502\n\u2502   2 \u2502   2.2 \u2502 2.20 \u2502\n\u2502   4 \u2502   4.4 \u2502 4.40 \u2502\n\u2502   7 \u2502  7.77 \u2502 7.77 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(int) AS I,\n    groupArrayMovingAvg(float) AS F,\n    groupArrayMovingAvg(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,0,1,3] \u2502 [0.275,0.82500005,1.9250001,3.8675] \u2502 [0.27,0.82,1.92,3.86] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingAvg(2)(int) AS I,\n    groupArrayMovingAvg(2)(float) AS F,\n    groupArrayMovingAvg(2)(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [0,1,3,5] \u2502 [0.55,1.6500001,3.3000002,6.085] \u2502 [0.55,1.65,3.30,6.08] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);