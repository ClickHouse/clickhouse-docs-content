"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[50948],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||g[m]||o;return n?t.createElement(f,u(u({ref:r},c),{},{components:n})):t.createElement(f,u({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78580:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",sidebar_position:113},u="groupArrayMovingSum",i={unversionedId:"en/sql-reference/aggregate-functions/reference/grouparraymovingsum",id:"en/sql-reference/aggregate-functions/reference/grouparraymovingsum",title:"groupArrayMovingSum",description:"Calculates the moving sum of input values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingsum.md",tags:[],version:"current",sidebarPosition:113,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/grouparraymovingsum",sidebar_position:113},sidebar:"english",previous:{title:"groupArrayInsertAt",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparrayinsertat"},next:{title:"groupArrayMovingAvg",permalink:"/docs/en/sql-reference/aggregate-functions/reference/grouparraymovingavg"}},l={},s=[],c={toc:s},p="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grouparraymovingsum"},"groupArrayMovingSum"),(0,a.kt)("p",null,"Calculates the moving sum of input values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayMovingSum(numbers_for_summing)\ngroupArrayMovingSum(window_size)(numbers_for_summing)\n")),(0,a.kt)("p",null,"The function can take the window size as a parameter. If left unspecified, the function takes the window size equal to the number of rows in the column."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numbers_for_summing")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in a numeric data type value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window_size")," \u2014 Size of the calculation window.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Array of the same size and type as the input data.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"The sample table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t\n(\n    `int` UInt8,\n    `float` Float32,\n    `dec` Decimal32(2)\n)\nENGINE = TinyLog\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int\u2500\u252c\u2500float\u2500\u252c\u2500\u2500dec\u2500\u2510\n\u2502   1 \u2502   1.1 \u2502 1.10 \u2502\n\u2502   2 \u2502   2.2 \u2502 2.20 \u2502\n\u2502   4 \u2502   4.4 \u2502 4.40 \u2502\n\u2502   7 \u2502  7.77 \u2502 7.77 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"The queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingSum(int) AS I,\n    groupArrayMovingSum(float) AS F,\n    groupArrayMovingSum(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,3,7,14] \u2502 [1.1,3.3000002,7.7000003,15.47] \u2502 [1.10,3.30,7.70,15.47] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    groupArrayMovingSum(2)(int) AS I,\n    groupArrayMovingSum(2)(float) AS F,\n    groupArrayMovingSum(2)(dec) AS D\nFROM t\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500I\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500F\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,3,6,11] \u2502 [1.1,3.3000002,6.6000004,12.17] \u2502 [1.10,3.30,6.60,12.17] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);