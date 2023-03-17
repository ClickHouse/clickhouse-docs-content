"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[40623],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),u=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(m.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,i=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),o=u(a),d=l,c=o["".concat(m,".").concat(d)]||o[d]||k[d]||i;return a?n.createElement(c,r(r({ref:e},s),{},{components:a})):n.createElement(c,r({ref:e},s))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=a.length,r=new Array(i);r[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[o]="string"==typeof t?t:l,r[1]=p;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80810:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const i={slug:"/ru/sql-reference/functions/bitmap-functions",sidebar_position:49,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u0438\u0442\u043c\u0430\u043f\u043e\u0432"},r="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u043e\u043a",p={unversionedId:"ru/sql-reference/functions/bitmap-functions",id:"ru/sql-reference/functions/bitmap-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u043e\u043a",description:"bitmap-functions}",source:"@site/docs/ru/sql-reference/functions/bitmap-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/bitmap-functions",permalink:"/docs/ru/sql-reference/functions/bitmap-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/bitmap-functions.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{slug:"/ru/sql-reference/functions/bitmap-functions",sidebar_position:49,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u0438\u0442\u043c\u0430\u043f\u043e\u0432"},sidebar:"russia",previous:{title:"\u0411\u0438\u0442\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/docs/ru/sql-reference/functions/bit-functions"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0445\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/docs/ru/sql-reference/functions/hash-functions"}},m={},u=[{value:"bitmapBuild",id:"bitmap_functions-bitmapbuild",level:2},{value:"bitmapToArray",id:"bitmaptoarray",level:2},{value:"bitmapSubsetLimit",id:"bitmapsubsetlimit",level:2},{value:"subBitmap",id:"subbitmap",level:2},{value:"bitmapContains",id:"bitmap_functions-bitmapcontains",level:2},{value:"bitmapHasAny",id:"bitmaphasany",level:2},{value:"bitmapHasAll",id:"bitmaphasall",level:2},{value:"bitmapAnd",id:"bitmapand",level:2},{value:"bitmapOr",id:"bitmapor",level:2},{value:"bitmapXor",id:"bitmapxor",level:2},{value:"bitmapAndnot",id:"bitmapandnot",level:2},{value:"bitmapCardinality",id:"bitmapcardinality",level:2},{value:"bitmapAndCardinality",id:"bitmapandcardinality",level:2},{value:"bitmapOrCardinality",id:"bitmaporcardinality",level:2},{value:"bitmapXorCardinality",id:"bitmapxorcardinality",level:2},{value:"bitmapAndnotCardinality",id:"bitmapandnotcardinality",level:2}],s={toc:u},o="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(o,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bitmap-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u043e\u043a"),(0,l.kt)("h2",{id:"bitmap_functions-bitmapbuild"},"bitmapBuild"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapBuild(array)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"array")," \u2013 \u043c\u0430\u0441\u0441\u0438\u0432 \u0442\u0438\u043f\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"UInt*"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapBuild([1, 2, 3, 4, 5]) AS res, toTypeName(res);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u252c\u2500toTypeName(bitmapBuild([1, 2, 3, 4, 5]))\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     \u2502 AggregateFunction(groupBitmap, UInt8)        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaptoarray"},"bitmapToArray"),(0,l.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapToArray(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapsubsetlimit"},"bitmapSubsetLimit"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0442\u043c\u0430\u043f\u0430 \u0441 n \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"range_start")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"cardinality_limit"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapSubsetLimit(bitmap, range_start, cardinality_limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043c\u0430\u043f. ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range_start")," \u2013 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/bitmap-functions#bitmap-functions"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cardinality_limit")," \u2013 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u043f\u0440\u0435\u0434\u0435\u043b \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/bitmap-functions#bitmap-functions"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u041f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0442\u043c\u0430\u043f\u0430."),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapSubsetLimit(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(30), toUInt32(200))) AS res;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [30,31,32,33,100,200,500] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"subbitmap"},"subBitmap"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u0438\u0442\u043c\u0430\u043f\u0430, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"offset"),". \u0427\u0438\u0441\u043b\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"cardinality_limit"),". \u0410\u043d\u0430\u043b\u043e\u0433 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/string-functions#substring"},"substring"),"), \u043d\u043e \u0434\u043b\u044f \u0431\u0438\u0442\u043c\u0430\u043f\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"subBitmap(bitmap, offset, cardinality_limit)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043c\u0430\u043f. \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offset")," \u2013 \u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430. \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cardinality_limit")," \u2013 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430. \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u041f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u0442\u043c\u0430\u043f\u0430."),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapbuild"},"Bitmap object"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(subBitmap(bitmapBuild([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,100,200,500]), toUInt32(10), toUInt32(10))) AS res;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [10,11,12,13,14,15,16,17,18,19] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmap_functions-bitmapcontains"},"bitmapContains"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapContains(haystack, needle)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," \u2013 ",(0,l.kt)("a",{parentName:"li",href:"#bitmap_functions-bitmapbuild"},"\u043e\u0431\u044a\u0435\u043a\u0442 Bitmap"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0449\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"needle")," \u2013 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0449\u0435\u0442. \u0422\u0438\u043f \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 \u2014 \u0435\u0441\u043b\u0438 \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," \u043d\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"needle"),"."),(0,l.kt)("li",{parentName:"ul"},"1 \u2014 \u0435\u0441\u043b\u0438 \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"haystack")," \u0435\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"needle"),".")),(0,l.kt)("p",null,"\u0422\u0438\u043f \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapContains(bitmapBuild([1,5,7,9]), toUInt32(9)) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasany"},"bitmapHasAny"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0438\u043c\u0435\u044e\u0442 \u043b\u0438 \u0434\u0432\u0430 \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043e\u0431\u0449\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAny(bitmap1, bitmap2)\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"bitmap2")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0442\u0440\u043e\u0433\u043e \u043e\u0434\u0438\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"#bitmap_functions-bitmapcontains"},"bitmapContains"),". \u041e\u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap*")," \u2013 \u043c\u0430\u0441\u0441\u0438\u0432 \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0441 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bitmap1")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bitmap2")," \u0438\u043c\u0435\u044e\u0442 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAny(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  1  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaphasall"},"bitmapHasAll"),(0,l.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"hasAll(array, array)")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 1 \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432\u0442\u043e\u0440\u043e\u0433\u043e, 0 \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435.\n\u0415\u0441\u043b\u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c \u0431\u0438\u0442\u043e\u0432\u044b\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapHasAll(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapHasAll(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502  0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapand"},"bitmapAnd"),(0,l.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u2014 \u043d\u043e\u0432\u044b\u0439 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAnd(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAnd(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502 [3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapor"},"bitmapOr"),(0,l.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u2014 \u043d\u043e\u0432\u044b\u0439 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapOr(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapOr(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,3,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxor"},"bitmapXor"),(0,l.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0435 \u0418\u041b\u0418 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u2014 \u043d\u043e\u0432\u044b\u0439 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapXor(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapXor(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [1,2,4,5] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnot"},"bitmapAndnot"),(0,l.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435 \u0418 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0431\u0438\u0442\u043e\u0432\u044b\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u2014 \u043d\u043e\u0432\u044b\u0439 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnot(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapToArray(bitmapAndnot(bitmapBuild([1,2,3]),bitmapBuild([3,4,5]))) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2510\n\u2502 [1,2] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapcardinality"},"bitmapCardinality"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0431\u0438\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0432\u0438\u0434\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapCardinality(bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapCardinality(bitmapBuild([1, 2, 3, 4, 5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandcardinality"},"bitmapAndCardinality"),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c (",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64"),") \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0431\u0438\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmaporcardinality"},"bitmapOrCardinality"),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c (",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64"),") \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0431\u0438\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapOrCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapOrCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapxorcardinality"},"bitmapXorCardinality"),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0435 \u0418\u041b\u0418 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c (",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64"),") \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0431\u0438\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapXorCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapXorCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"bitmapandnotcardinality"},"bitmapAndnotCardinality"),(0,l.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435 \u0418 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c (",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64"),") \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0433\u043e \u0431\u0438\u0442\u043e\u0432\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"bitmapAndnotCardinality(bitmap,bitmap)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bitmap")," \u2013 \u0431\u0438\u0442\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT bitmapAndnotCardinality(bitmapBuild([1,2,3]),bitmapBuild([3,4,5])) AS res;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2510\n\u2502   2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")))}k.isMDXComponent=!0}}]);