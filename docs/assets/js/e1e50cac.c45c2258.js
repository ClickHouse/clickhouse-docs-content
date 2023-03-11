"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[75014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/ru/sql-reference/data-types/special-data-types/interval",sidebar_position:61,sidebar_label:"Interval"},i="Interval",p={unversionedId:"ru/sql-reference/data-types/special-data-types/interval",id:"ru/sql-reference/data-types/special-data-types/interval",title:"Interval",description:"data-type-interval}",source:"@site/docs/ru/sql-reference/data-types/special-data-types/interval.md",sourceDirName:"ru/sql-reference/data-types/special-data-types",slug:"/ru/sql-reference/data-types/special-data-types/interval",permalink:"/docs/ru/sql-reference/data-types/special-data-types/interval",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/special-data-types/interval.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/ru/sql-reference/data-types/special-data-types/interval",sidebar_position:61,sidebar_label:"Interval"},sidebar:"russia",previous:{title:"Nothing",permalink:"/docs/ru/sql-reference/data-types/special-data-types/nothing"},next:{title:"\u0414\u043e\u043c\u0435\u043d\u044b",permalink:"/docs/ru/sql-reference/data-types/domains/"}},o={},s=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"data-type-interval-usage-remarks",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"smotrite-takzhe",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-type-interval"},"Interval"),(0,n.kt)("p",null,"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0434\u0430\u0442 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/special-data-types/interval#operator-interval"},"INTERVAL")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,n.kt)("admonition",{title:'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"',type:"danger"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"\u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 `Interval` \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435.\n"))),(0,n.kt)("p",null,"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),(0,n.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430.")),(0,n.kt)("p",null,"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SECOND")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MINUTE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HOUR")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DAY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WEEK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MONTH")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"QUARTER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"YEAR"))),(0,n.kt)("p",null,"\u041a\u0430\u0436\u0434\u043e\u043c\u0443 \u0442\u0438\u043f\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,n.kt)("inlineCode",{parentName:"p"},"IntervalDay")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0443 ",(0,n.kt)("inlineCode",{parentName:"p"},"DAY"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(INTERVAL 4 DAY)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toIntervalDay(4))\u2500\u2510\n\u2502 IntervalDay                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("h2",{id:"data-type-interval-usage-remarks"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"p"},"Interval")," \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/special-data-types/interval"},"Date")," \u0438 ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/special-data-types/interval"},"DateTime"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c 4 \u0434\u043d\u044f \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u0435:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() as current_date_time, current_date_time + INTERVAL 4 DAY\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(now(), toIntervalDay(4))\u2500\u2510\n\u2502 2019-10-23 10:58:45 \u2502           2019-10-27 10:58:45 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0432\u0438\u0434\u0430 ",(0,n.kt)("inlineCode",{parentName:"p"},"4 DAY 1 HOUR"),". \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0430\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 \u043c\u0435\u043d\u044c\u0448\u0438\u0445 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u044b\u0445 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0438\u0446\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \xab1 \u0434\u0435\u043d\u044c \u0438 1 \u0447\u0430\u0441\xbb \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043a\u0430\u043a ",(0,n.kt)("inlineCode",{parentName:"p"},"25 HOUR")," \u0438\u043b\u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"90000 SECOND"),"."),(0,n.kt)("p",null,"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"p"},"Interval")," \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0442\u0438\u043f\u043e\u0432 ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")," \u0438 ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL 4 DAY + INTERVAL 3 HOUR\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2019-10-23 11:16:28 \u2502                                    2019-10-27 14:16:28 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,n.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select now() AS current_date_time, current_date_time + (INTERVAL 4 DAY + INTERVAL 3 HOUR)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 19.14.1):\nCode: 43. DB::Exception: Received from localhost:9000. DB::Exception: Wrong argument types for function plus: if one argument is Interval, then another must be Date or DateTime..\n")),(0,n.kt)("h2",{id:"smotrite-takzhe"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/special-data-types/interval#operator-interval"},"INTERVAL")),(0,n.kt)("li",{parentName:"ul"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/special-data-types/interval#function-tointerval"},"toInterval"))))}d.isMDXComponent=!0}}]);