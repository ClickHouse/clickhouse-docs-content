"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[21097],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=s(n),m=a,f=i["".concat(c,".").concat(m)]||i[m]||g[m]||l;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[i]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85448:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var t=n(87462),a=(n(67294),n(3905));const l={slug:"/ru/sql-reference/aggregate-functions/reference/grouparraysample",sidebar_position:114},o="groupArraySample",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/grouparraysample",id:"ru/sql-reference/aggregate-functions/reference/grouparraysample",title:"groupArraySample",description:"grouparraysample}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/grouparraysample.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/grouparraysample",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraysample",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/grouparraysample.md",tags:[],version:"current",sidebarPosition:114,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/grouparraysample",sidebar_position:114},sidebar:"russia",previous:{title:"groupArrayMovingAvg",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/grouparraymovingavg"},next:{title:"groupBitAnd",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitand"}},c={},s=[],u={toc:s},i="wrapper";function g(e){let{components:r,...n}=e;return(0,a.kt)(i,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grouparraysample"},"groupArraySample"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"max_size"),". \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupArraySample(max_size[, seed])(x)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_size")," \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435. ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed")," \u2014 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440. ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,a.kt)("inlineCode",{parentName:"li"},"123456"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 (\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041c\u0430\u0441\u0441\u0438\u0432 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),".")),(0,a.kt)("p",null,"\u0422\u0438\u043f: ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"\u041c\u0430\u0441\u0441\u0438\u0432"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"colors"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500color\u2500\u2500\u2510\n\u2502  1 \u2502 red    \u2502\n\u2502  2 \u2502 blue   \u2502\n\u2502  3 \u2502 green  \u2502\n\u2502  4 \u2502 white  \u2502\n\u2502  5 \u2502 orange \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3)(color) as newcolors FROM colors;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['white','blue','green']   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3, 987654321)(color) as newcolors FROM colors;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['red','orange','green']              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3)(concat('light-', color)) as newcolors FROM colors;\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['light-blue','light-orange','light-green'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);