"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[16662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=o(a),m=r,g=k["".concat(i,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(g,p(p({ref:t},u),{},{components:a})):n.createElement(g,p({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:r,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/ru/sql-reference/functions/splitting-merging-functions",sidebar_position:47,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"},p="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432",s={unversionedId:"ru/sql-reference/functions/splitting-merging-functions",id:"ru/sql-reference/functions/splitting-merging-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432",description:"funktsii-razbieniia-i-sliianiia-strok-i-massivov}",source:"@site/docs/ru/sql-reference/functions/splitting-merging-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/splitting-merging-functions",permalink:"/docs/ru/sql-reference/functions/splitting-merging-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/splitting-merging-functions.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/ru/sql-reference/functions/splitting-merging-functions",sidebar_position:47,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"},sidebar:"russia",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430\u043c\u0438 map",permalink:"/docs/ru/sql-reference/functions/tuple-map-functions"},next:{title:"\u0411\u0438\u0442\u043e\u0432\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/docs/ru/sql-reference/functions/bit-functions"}},i={},o=[{value:"splitByChar(separator, s)",id:"splitbycharseparator-s",level:2},{value:"splitByString(separator, s)",id:"splitbystringseparator-s",level:2},{value:"splitByRegexp(regexp, s)",id:"splitbyregexpseparator-s",level:2},{value:"splitByWhitespace(s)",id:"splitbywhitespaceseparator-s",level:2},{value:"splitByNonAlpha(s)",id:"splitbynonalphaseparator-s",level:2},{value:"arrayStringConcat(arr[, separator])",id:"arraystringconcatarr-separator",level:2},{value:"alphaTokens(s)",id:"alphatokenss",level:2},{value:"ngrams",id:"ngrams",level:2},{value:"tokens",id:"tokens",level:2}],u={toc:o},k="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funktsii-razbieniia-i-sliianiia-strok-i-massivov"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u044f \u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432"),(0,r.kt)("h2",{id:"splitbycharseparator-s"},"splitByChar(separator, s)"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"separator"),".\nseparator \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0438\u0437 \u0440\u043e\u0432\u043d\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a. \u041c\u043e\u0433\u0443\u0442 \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u0435 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0435\u0441\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0438\u0434\u0451\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u043b\u0438 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0438\u043b\u0438 \u0435\u0441\u043b\u0438 \u0438\u0434\u0451\u0442 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u043f\u043e\u0434\u0440\u044f\u0434."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"splitByChar(separator, s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"separator")," \u2014 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a. \u041f\u0443\u0441\u0442\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430, \u043a\u043e\u0433\u0434\u0430:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u043b\u0438 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438;"),(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u0434\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439;"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u043f\u0443\u0441\u0442\u0430.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByChar(',', '1,2,3,abcde');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByChar(',', '1,2,3,abcde')\u2500\u2510\n\u2502 ['1','2','3','abcde']           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"splitbystringseparator-s"},"splitByString(separator, s)"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u043e\u0439. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"separator"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u0415\u0441\u043b\u0438 \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"separator")," \u043f\u0443\u0441\u0442\u0430, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"splitByString(separator, s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"separator")," \u2014 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a. \u041f\u0443\u0441\u0442\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430, \u043a\u043e\u0433\u0434\u0430:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u043b\u0438 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438;"),(0,r.kt)("li",{parentName:"ul"},"\u0417\u0430\u0434\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439;"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u043f\u0443\u0441\u0442\u0430.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByString(', ', '1, 2 3, 4,5, abcde');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByString(', ', '1, 2 3, 4,5, abcde')\u2500\u2510\n\u2502 ['1','2 3','4,5','abcde']                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByString('', 'abcde');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByString('', 'abcde')\u2500\u2510\n\u2502 ['a','b','c','d','e']      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"splitbyregexpseparator-s"},"splitByRegexp(regexp, s)"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"regexp"),". \u0415\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"regexp")," \u043f\u0443\u0441\u0442\u0430\u044f, \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u0415\u0441\u043b\u0438 \u0434\u043b\u044f \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0442\u0430."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"splitByRegexp(regexp, s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regexp")," \u2014 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String")," \u0438\u043b\u0438 ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a. \u041f\u0443\u0441\u0442\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430, \u0435\u0441\u043b\u0438:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041d\u0435\u043f\u0443\u0441\u0442\u043e\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0435 \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u043b\u0438 \u043a\u043e\u043d\u0446\u0435 \u0441\u0442\u0440\u043e\u043a\u0438;"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 c \u043d\u0435\u043f\u0443\u0441\u0442\u044b\u043c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c;"),(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u0445\u043e\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u043f\u0443\u0441\u0442\u0430, \u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u0443\u0441\u0442\u043e\u0435.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByRegexp('\\\\d+', 'a12bc23de345f');\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByRegexp('\\\\d+', 'a12bc23de345f')\u2500\u2510\n\u2502 ['a','bc','de','f']                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByRegexp('', 'abcde');\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByRegexp('', 'abcde')\u2500\u2510\n\u2502 ['a','b','c','d','e']      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"splitbywhitespaceseparator-s"},"splitByWhitespace(s)"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"splitByWhitespace(s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a."),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByWhitespace('  1!  a,  b.  ');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByWhitespace('  1!  a,  b.  ')\u2500\u2510\n\u2502 ['1!','a,','b.']                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"splitbynonalphaseparator-s"},"splitByNonAlpha(s)"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u0443\u043d\u043a\u0442\u0443\u0430\u0446\u0438\u0438."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"splitByNonAlpha(s)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," \u2014 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a."),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT splitByNonAlpha('  1!  a,  b.  ');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500splitByNonAlpha('  1!  a,  b.  ')\u2500\u2510\n\u2502 ['1','a','b']                     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"arraystringconcatarr-separator"},"arrayStringConcat(arr","[",", separator","]",")"),(0,r.kt)("p",null,"\u0421\u043a\u043b\u0435\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"separator"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"separator")," - \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0440\u0430\u0432\u0435\u043d \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,r.kt)("h2",{id:"alphatokenss"},"alphaTokens(s)"),(0,r.kt)("p",null,"\u0412\u044b\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u043f\u043e\u0434\u0440\u044f\u0434 \u0438\u0434\u0443\u0449\u0438\u0445 \u0431\u0430\u0439\u0442 \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u043e\u0432 a-z \u0438 A-Z.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT alphaTokens('abca1abc');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500alphaTokens('abca1abc')\u2500\u2510\n\u2502 ['abca','abc']          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ngrams"},"ngrams"),(0,r.kt)("p",null,"\u0412\u044b\u0434\u0435\u043b\u044f\u0435\u0442 \u0438\u0437 UTF-8 \u0441\u0442\u0440\u043e\u043a\u0438 \u043e\u0442\u0440\u0435\u0437\u043a\u0438 (n-\u0433\u0440\u0430\u043c\u043c\u044b) \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"ngramsize")," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ngrams(string, ngramsize)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")," \u2014 \u0441\u0442\u0440\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ngramsize")," \u2014 \u0440\u0430\u0437\u043c\u0435\u0440 n-\u0433\u0440\u0430\u043c\u043c. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0441\u0438\u0432 \u0441 n-\u0433\u0440\u0430\u043c\u043c\u0430\u043c\u0438.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ngrams('ClickHouse', 3);\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ngrams('ClickHouse', 3)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['Cli','lic','ick','ckH','kHo','Hou','ous','use'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"tokens"},"tokens"),(0,r.kt)("p",null,"\u0420\u0430\u0437\u0431\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430  \u0442\u043e\u043a\u0435\u043d\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439 \u043d\u0435 \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b ASCII."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_string")," \u2014 \u043d\u0430\u0431\u043e\u0440 \u0431\u0430\u0439\u0442\u043e\u0432. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0442\u043e\u043a\u0435\u043d\u043e\u0432."),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tokens('test1,;\\\\ test2,;\\\\ test3,;\\\\   test4') AS tokens;\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tokens\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['test1','test2','test3','test4'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);