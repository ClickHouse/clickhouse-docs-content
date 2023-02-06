"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[68269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/theilsu",sidebar_position:353},i="theilsU",s={unversionedId:"en/sql-reference/aggregate-functions/reference/theilsu",id:"en/sql-reference/aggregate-functions/reference/theilsu",title:"theilsU",description:"The theilsU function calculates the Theil's U uncertainty coefficient, a value that measures the association between two columns in a table. Its values range from \u22121.0 (100% negative association, or perfect inversion) to +1.0 (100% positive association, or perfect agreement). A value of 0.0 indicates the absence of association.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/theilsu.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/theilsu",permalink:"/docs/en/sql-reference/aggregate-functions/reference/theilsu",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/theilsu.md",tags:[],version:"current",sidebarPosition:353,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/theilsu",sidebar_position:353},sidebar:"english",previous:{title:"cramersVBiasCorrected",permalink:"/docs/en/sql-reference/aggregate-functions/reference/cramersvbiascorrected"},next:{title:"maxIntersections",permalink:"/docs/en/sql-reference/aggregate-functions/reference/maxintersections"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"theilsu"},"theilsU"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"theilsU")," function calculates the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Contingency_table#Uncertainty_coefficient"},"Theil's U uncertainty coefficient"),", a value that measures the association between two columns in a table. Its values range from \u22121.0 (100% negative association, or perfect inversion) to +1.0 (100% positive association, or perfect agreement). A value of 0.0 indicates the absence of association."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"theilsU(column1, column2)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"column2")," are the columns to be compared")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a value between -1 and 1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return type")," is always ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"The following two columns being compared below have a small association with each other, so the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"theilsU")," is negative:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    theilsU(a ,b)\nFROM\n    (\n        SELECT\n            number % 10 AS a,\n            number % 4 AS b\n        FROM\n            numbers(150)\n    );\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500theilsU(a, b)\u2500\u2510\n\u2502 -0.30195720557678846 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);