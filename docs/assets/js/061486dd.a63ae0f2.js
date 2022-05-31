"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[50948],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,f=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return r?t.createElement(f,u(u({ref:n},s),{},{components:r})):t.createElement(f,u({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},78580:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),u=["components"],i={sidebar_position:113},l="groupArrayMovingSum",c={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparraymovingsum",id:"en/sql-reference/aggregate-functions/reference/grouparraymovingsum",title:"groupArrayMovingSum",description:"agg_function-grouparraymovingsum}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum.md",tags:[],version:"current",sidebarPosition:113,frontMatter:{sidebar_position:113},sidebar:"english",previous:{title:"groupArrayInsertAt",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparrayinsertat"},next:{title:"groupArrayMovingAvg",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingavg"}},s={},p=[],g={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-grouparraymovingsum"},"groupArrayMovingSum"),(0,o.kt)("p",null,"Calculates the moving sum of input values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayMovingSum(numbers_for_summing)\ngroupArrayMovingSum(window_size)(numbers_for_summing)\n")),(0,o.kt)("p",null,"The function can take the window size as a parameter. If left unspecified, the function takes the window size equal to the number of rows in the column."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numbers_for_summing")," \u2014 ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in a numeric data type value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"window_size")," \u2014 Size of the calculation window.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array of the same size and type as the input data.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"The sample table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    `int` UInt8,\n    `float` Float32,\n    `dec` Decimal32(2)\n)\nENGINE = TinyLog\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int\u2500\u252c\u2500float\u2500\u252c\u2500\u2500dec\u2500\u2510\n\u2502   1 \u2502   1.1 \u2502 1.10 \u2502\n\u2502   2 \u2502   2.2 \u2502 2.20 \u2502\n\u2502   4 \u2502   4.4 \u2502 4.40 \u2502\n\u2502   7 \u2502  7.77 \u2502 7.77 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"The queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingSum(int) AS I,\n    groupArrayMovingSum(float) AS F,\n    groupArrayMovingSum(dec) AS D\nFROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,3,7,14] \u2502 [1.1,3.3000002,7.7000003,15.47] \u2502 [1.10,3.30,7.70,15.47] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingSum(2)(int) AS I,\n    groupArrayMovingSum(2)(float) AS F,\n    groupArrayMovingSum(2)(dec) AS D\nFROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,3,6,11] \u2502 [1.1,3.3000002,6.6000004,12.17] \u2502 [1.10,3.30,6.60,12.17] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);