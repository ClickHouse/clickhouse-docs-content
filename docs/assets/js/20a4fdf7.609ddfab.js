"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[78197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/maxintersections",sidebar_position:360,title:"maxIntersections"},i="maxIntersections",s={unversionedId:"en/sql-reference/aggregate-functions/reference/maxintersections",id:"en/sql-reference/aggregate-functions/reference/maxintersections",title:"maxIntersections",description:"Aggregate function that calculates the maximum number of times that a group of intervals intersects each other (if all the intervals intersect at least once).",source:"@site/docs/en/sql-reference/aggregate-functions/reference/maxintersections.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/maxintersections",permalink:"/docs/en/sql-reference/aggregate-functions/reference/maxintersections",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/maxintersections.md",tags:[],version:"current",sidebarPosition:360,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/maxintersections",sidebar_position:360,title:"maxIntersections"},sidebar:"english",previous:{title:"theilsU",permalink:"/docs/en/sql-reference/aggregate-functions/reference/theilsu"},next:{title:"maxIntersectionsPosition",permalink:"/docs/en/sql-reference/aggregate-functions/reference/maxintersectionsposition"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maxintersections"},"maxIntersections"),(0,a.kt)("p",null,"Aggregate function that calculates the maximum number of times that a group of intervals intersects each other (if all the intervals intersect at least once)."),(0,a.kt)("p",null,"The syntax is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"maxIntersections(start_column, end_column)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"start_column")," \u2013 the numeric column that represents the start of each interval. If ",(0,a.kt)("inlineCode",{parentName:"p"},"start_column")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," or 0 then the interval will be skipped.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"end_column")," - the numeric column that represents the end of each interval. If ",(0,a.kt)("inlineCode",{parentName:"p"},"end_column")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," or 0 then the interval will be skipped."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"Returns the maximum number of intersected intervals."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE my_events (\n    start UInt32,\n    end UInt32\n)\nEngine = MergeTree\nORDER BY tuple();\n\nINSERT INTO my_events VALUES\n   (1, 3),\n   (1, 6),\n   (2, 5),\n   (3, 7);\n")),(0,a.kt)("p",null,"The intervals look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"1 - 3\n1 - - - - 6\n  2 - - 5\n    3 - - - 7\n")),(0,a.kt)("p",null,"Three of these intervals have a common value (the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),", but the value that is common is not important, we are measuring the count of the intersections). The intervals ",(0,a.kt)("inlineCode",{parentName:"p"},"(1,3)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"(3,7)")," share an endpoint but are not considered intersecting by the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxIntersections")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxIntersections(start, end) FROM my_events;\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-response"},"3\n")),(0,a.kt)("p",null,"If you have multiple occurrences of the maximum interval, you can use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/maxintersectionsposition"},(0,a.kt)("inlineCode",{parentName:"a"},"maxIntersectionsPosition")," function")," to locate the number and location of those occurrences."))}m.isMDXComponent=!0}}]);