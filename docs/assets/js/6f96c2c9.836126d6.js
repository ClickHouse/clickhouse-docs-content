"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[41836],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>b});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),o=s(a),c=l,b=o["".concat(m,".").concat(c)]||o[c]||k[c]||r;return a?n.createElement(b,i(i({ref:e},u),{},{components:a})):n.createElement(b,i({ref:e},u))}));function b(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[o]="string"==typeof t?t:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82540:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={slug:"/en/sql-reference/functions/bitmap-functions",sidebar_position:49,sidebar_label:"Bitmap"},i="Bitmap Functions",p={unversionedId:"en/sql-reference/functions/bitmap-functions",id:"en/sql-reference/functions/bitmap-functions",title:"Bitmap Functions",description:"Bitmap functions work for two bitmaps Object value calculation, it is to return new bitmap or cardinality while using formula calculation, such as and, or, xor, and not, etc.",source:"@site/docs/en/sql-reference/functions/bitmap-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/bitmap-functions",permalink:"/docs/en/sql-reference/functions/bitmap-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/bitmap-functions.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/en/sql-reference/functions/bitmap-functions",sidebar_position:49,sidebar_label:"Bitmap"},sidebar:"english",previous:{title:"Bit",permalink:"/docs/en/sql-reference/functions/bit-functions"},next:{title:"Hash",permalink:"/docs/en/sql-reference/functions/hash-functions"}},m={},s=[{value:"bitmapBuild",id:"bitmapbuild",level:2},{value:"bitmapToArray",id:"bitmaptoarray",level:2},{value:"bitmapSubsetInRange",id:"bitmapsubsetinrange",level:2},{value:"bitmapSubsetLimit",id:"bitmapsubsetlimit",level:2},{value:"subBitmap",id:"subbitmap",level:2},{value:"bitmapContains",id:"bitmapcontains",level:2},{value:"bitmapHasAny",id:"bitmaphasany",level:2},{value:"bitmapHasAll",id:"bitmaphasall",level:2},{value:"bitmapCardinality",id:"bitmapcardinality",level:2},{value:"bitmapMin",id:"bitmapmin",level:2},{value:"bitmapMax",id:"bitmapmax",level:2},{value:"bitmapTransform",id:"bitmaptransform",level:2},{value:"bitmapAnd",id:"bitmapand",level:2},{value:"bitmapOr",id:"bitmapor",level:2},{value:"bitmapXor",id:"bitmapxor",level:2},{value:"bitmapAndnot",id:"bitmapandnot",level:2},{value:"bitmapAndCardinality",id:"bitmapandcardinality",level:2},{value:"bitmapOrCardinality",id:"bitmaporcardinality",level:2},{value:"bitmapXorCardinality",id:"bitmapxorcardinality",level:2},{value:"bitmapAndnotCardinality",id:"bitmapandnotcardinality",level:2}],u={toc:s},o="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(o,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bitmap-functions"},"Bitmap Functions"),(0,l.kt)("p",null,"Bitmap functions work for two bitmaps Object value calculation, it is to return new bitmap or cardinality while using formula calculation, such as and, or, xor, and not, etc."),(0,l.kt)("p",null,"There are 2 kinds of construction methods for Bitmap Object. One is to be constructed by aggregation function groupBitmap with -State, the other is to be constructed by Array Object. It is also to convert Bitmap Object to Array Object."),(0,l.kt)("p",null,"RoaringBitmap is wrapped into a data structure while actual storage of Bitmap objects. When the cardinality is less than or equal to 32, it uses Set objet. When the cardinality is greater than 32, it uses RoaringBitmap object. That is why storage of low cardinality set is faster."),(0,l.kt)("p",null,"For more information on RoaringBitmap, see: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/RoaringBitmap/CRoaring"},"CRoaring"),"."),(0,l.kt)("h2",{id:"bitmapbuild"},"bitmapBuild"),(0,l.kt)("p",null,"Build a bitmap from unsigned integer array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapBuild(array)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"array")," \u2013 Unsigned integer array.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapBuild([1, 2, 3, 4, 5]) AS res, toTypeName(res);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u252c\u2500toTypeName(bitmapBuild([1, 2, 3, 4, 5]))\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     \u2502 AggregateFunction(groupBitmap, UInt8)        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaptoarray"},"bitmapToArray"),(0,l.kt)("p",null,"Convert bitmap to integer array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapToArray(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapsubsetinrange"},"bitmapSubsetInRange"),(0,l.kt)("p",null,"Return subset in specified range (not include the range_end)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapSubsetInRange(bitmap, range_start, range_end)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_start")," \u2013 Range start point. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_end")," \u2013 Range end point (excluded). Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetInRange(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30,31,32,33,100] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapsubsetlimit"},"bitmapSubsetLimit"),(0,l.kt)("p",null,"Creates a subset of bitmap with n elements taken between ",(0,l.kt)("inlineCode",{parentName:"p"},"range_start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"cardinality_limit"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapSubsetLimit(bitmap, range_start, cardinality_limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_start")," \u2013 The subset starting point. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cardinality_limit")," \u2013 The subset cardinality upper limit. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The subset."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetLimit(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30,31,32,33,100,200,500] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"subbitmap"},"subBitmap"),(0,l.kt)("p",null,"Returns the bitmap elements, starting from the ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," position. The number of returned elements is limited by the ",(0,l.kt)("inlineCode",{parentName:"p"},"cardinality_limit")," parameter. Analog of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/string-functions#substring"},"substring"),") string function, but for bitmap."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"subBitmap(bitmap, offset, cardinality_limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 The bitmap. Type: ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offset")," \u2013 The position of the first element of the subset. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cardinality_limit")," \u2013 The maximum number of elements in the subset. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The subset."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(subBitmap(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(10), toUInt32(10))) AS res;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [10,11,12,13,14,15,16,17,18,19] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapcontains"},"bitmapContains"),(0,l.kt)("p",null,"Checks whether the bitmap contains an element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapContains(haystack, needle)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),", where the function searches."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"needle")," \u2013 Value that the function searches. Type: ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 \u2014 If ",(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," does not contain ",(0,l.kt)("inlineCode",{parentName:"li"},"needle"),"."),(0,l.kt)("li",{parentName:"ul"},"1 \u2014 If ",(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," contains ",(0,l.kt)("inlineCode",{parentName:"li"},"needle"),".")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapContains(bitmapBuild([1,5,7,9]), toUInt32(9)) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasany"},"bitmapHasAny"),(0,l.kt)("p",null,"Checks whether two bitmaps have intersection by some elements."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAny(bitmap1, bitmap2)\n")),(0,l.kt)("p",null,"If you are sure that ",(0,l.kt)("inlineCode",{parentName:"p"},"bitmap2")," contains strictly one element, consider using the ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapcontains"},"bitmapContains")," function. It works more efficiently."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap*")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", if ",(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," have one similar element at least."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", otherwise.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAny(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasall"},"bitmapHasAll"),(0,l.kt)("p",null,"Analogous to ",(0,l.kt)("inlineCode",{parentName:"p"},"hasAll(array, array)")," returns 1 if the first bitmap contains all the elements of the second one, 0 otherwise.\nIf the second argument is an empty bitmap then returns 1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAll(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAll(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapcardinality"},"bitmapCardinality"),(0,l.kt)("p",null,"Retrun bitmap cardinality of type UInt64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapCardinality(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapCardinality(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapmin"},"bitmapMin"),(0,l.kt)("p",null,"Retrun the smallest value of type UInt64 in the set, UINT32_MAX if the set is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapMin(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMin(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," \u250c\u2500res\u2500\u2510\n \u2502   1 \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapmax"},"bitmapMax"),(0,l.kt)("p",null,"Retrun the greatest value of type UInt64 in the set, 0 if the set is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapMax(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapMax(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," \u250c\u2500res\u2500\u2510\n \u2502   5 \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaptransform"},"bitmapTransform"),(0,l.kt)("p",null,"Transform an array of values in a bitmap to another array of values, the result is a new bitmap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bitmapTransform(bitmap, from_array, to_array)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"from_array")," \u2013 UInt32 array. For idx in range ","[","0, from_array.size()), if bitmap contains from_array","[","idx","]",", then replace it with to_array","[","idx","]",". Note that the result depends on array ordering if there are common elements between from_array and to_array."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"to_array")," \u2013 UInt32 array, its size shall be the same to from_array.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapTransform(bitmapBuild([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), cast([5,999,2] as Array(UInt32)), cast([2,888,20] as Array(UInt32)))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"}," \u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 [1,3,4,6,7,8,9,10,20] \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapand"},"bitmapAnd"),(0,l.kt)("p",null,"Two bitmap and calculation, the result is a new bitmap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAnd(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAnd(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502 [3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapor"},"bitmapOr"),(0,l.kt)("p",null,"Two bitmap or calculation, the result is a new bitmap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapOr(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapOr(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxor"},"bitmapXor"),(0,l.kt)("p",null,"Two bitmap xor calculation, the result is a new bitmap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapXor(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapXor(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnot"},"bitmapAndnot"),(0,l.kt)("p",null,"Two bitmap andnot calculation, the result is a new bitmap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnot(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAndnot(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2510\n\u2502 [1,2] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandcardinality"},"bitmapAndCardinality"),(0,l.kt)("p",null,"Two bitmap and calculation, return cardinality of type UInt64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaporcardinality"},"bitmapOrCardinality"),(0,l.kt)("p",null,"Two bitmap or calculation, return cardinality of type UInt64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapOrCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapOrCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxorcardinality"},"bitmapXorCardinality"),(0,l.kt)("p",null,"Two bitmap xor calculation, return cardinality of type UInt64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapXorCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapXorCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnotcardinality"},"bitmapAndnotCardinality"),(0,l.kt)("p",null,"Two bitmap andnot calculation, return cardinality of type UInt64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnotCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 Bitmap object.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndnotCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);