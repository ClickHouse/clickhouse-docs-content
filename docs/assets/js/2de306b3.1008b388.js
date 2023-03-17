"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[20211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=p(n),d=r,g=i["".concat(c,".").concat(d)]||i[d]||m[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/ru/sql-reference/functions/introspection",sidebar_position:65,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438"},o="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438",s={unversionedId:"ru/sql-reference/functions/introspection",id:"ru/sql-reference/functions/introspection",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438",description:"introspection-functions}",source:"@site/docs/ru/sql-reference/functions/introspection.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/introspection",permalink:"/docs/ru/sql-reference/functions/introspection",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/functions/introspection.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/ru/sql-reference/functions/introspection",sidebar_position:65,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",permalink:"/docs/ru/sql-reference/functions/machine-learning-functions"},next:{title:"\u041f\u0440\u043e\u0447\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/docs/ru/sql-reference/functions/other-functions"}},c={},p=[{value:"addressToLine",id:"addresstoline",level:2},{value:"addressToSymbol",id:"addresstosymbol",level:2},{value:"demangle",id:"demangle",level:2},{value:"tid",id:"tid",level:2},{value:"logTrace",id:"logtrace",level:2}],u={toc:p},i="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introspection-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438"),(0,r.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format"},"ELF")," \u0438 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DWARF"},"DWARF")," \u0432 \u0446\u0435\u043b\u044f\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,r.kt)("admonition",{title:'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"',type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"\u042d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u044f\u043c \u0432 \u043f\u043b\u0430\u043d\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.\n"))),(0,r.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0438\u043d\u0442\u0440\u043e\u0441\u043f\u0435\u043a\u0446\u0438\u0438:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0430\u043a\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings#settings-allow_introspection_functions"},"allow_introspection_functions")," \u0432 1."))),(0,r.kt)("p",null,"\u0418\u0437 \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,r.kt)("p",null,"ClickHouse \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u043e\u0442\u0447\u0435\u0442\u044b \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0432 ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/trace_log#system_tables-trace_log"},"\u0436\u0443\u0440\u043d\u0430\u043b \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0438")," \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."),(0,r.kt)("h2",{id:"addresstoline"},"addressToLine"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse \u0432 \u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u0438 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 ClickHouse."),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b ClickHouse, \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0430\u043a\u0435\u0442\u044b: ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"addressToLine(address_of_binary_instruction)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address_of_binary_instruction")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/introspection"},"\u0422\u0438\u043f UInt64"),")- \u0410\u0434\u0440\u0435\u0441 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0418\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0438 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u044d\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0434\u0432\u043e\u0435\u0442\u043e\u0447\u0438\u0435\u043c."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, `/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199`, \u0433\u0434\u0435 `199` \u2014 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u0440\u043e\u043a\u0438.\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u0418\u043c\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430, \u0435\u0441\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0439\u0442\u0438 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0441\u043b\u0438 \u0430\u0434\u0440\u0435\u0441 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c."))),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/introspection"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1;\n")),(0,r.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace_log")," \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:              2019-11-19\nevent_time:              2019-11-19 18:57:23\nrevision:                54429\ntimer_type:              Real\nthread_number:           48\nquery_id:                421b6855-1858-45a5-8f37-f383409d6d72\ntrace:                   [140658411141617,94784174532828,94784076370703,94784076372094,94784076361020,94784175007680,140658411116251,140658403895439]\n")),(0,r.kt)("p",null,"\u0422\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0444\u0430\u0439\u043b\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0438 \u043d\u043e\u043c\u0435\u0440\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addressToLine(94784076370703) \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\naddressToLine(94784076370703): /build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u0441\u0442\u0435\u043a\u0442\u0440\u0435\u0439\u0441\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> addressToLine(x), trace), '\\n') AS trace_source_code_lines\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,r.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/array-functions#array-map"},"arrayMap")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"addressToLine"),". \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u044d\u0442\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u0432 \u0432\u0438\u0434\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace_source_code_lines")," \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_source_code_lines: /lib/x86_64-linux-gnu/libpthread-2.27.so\n/usr/lib/debug/usr/bin/clickhouse\n/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.cpp:199\n/build/obj-x86_64-linux-gnu/../src/Common/ThreadPool.h:155\n/usr/include/c++/9/bits/atomic_base.h:551\n/usr/lib/debug/usr/bin/clickhouse\n/lib/x86_64-linux-gnu/libpthread-2.27.so\n/build/glibc-OTsEL5/glibc-2.27/misc/../sysdeps/unix/sysv/linux/x86_64/clone.S:97\n")),(0,r.kt)("h2",{id:"addresstosymbol"},"addressToSymbol"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 ClickHouse \u0432 \u0441\u0438\u043c\u0432\u043e\u043b \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 ClickHouse."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"addressToSymbol(address_of_binary_instruction)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address_of_binary_instruction")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/introspection"},"\u0422\u0438\u043f uint64"),") \u2014 \u0430\u0434\u0440\u0435\u0441 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0421\u0438\u043c\u0432\u043e\u043b \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 ClickHouse."),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0441\u043b\u0438 \u0430\u0434\u0440\u0435\u0441 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/introspection"},"String"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1;\n")),(0,r.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace_log")," \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:    2019-11-20\nevent_time:    2019-11-20 16:57:59\nrevision:      54429\ntimer_type:    Real\nthread_number: 48\nquery_id:      724028bf-f550-45aa-910d-2af6212b94ac\ntrace:         [94138803686098,94138815010911,94138815096522,94138815101224,94138815102091,94138814222988,94138806823642,94138814457211,94138806823642,94138814457211,94138806823642,94138806795179,94138806796144,94138753770094,94138753771646,94138753760572,94138852407232,140399185266395,140399178045583]\n")),(0,r.kt)("p",null,"\u0422\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addressToSymbol(94138803686098) \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\naddressToSymbol(94138803686098): _ZNK2DB24IAggregateFunctionHelperINS_20AggregateFunctionSumImmNS_24AggregateFunctionSumDataImEEEEE19addBatchSinglePlaceEmPcPPKNS_7IColumnEPNS_5ArenaE\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e \u0432\u0441\u0435\u0439 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0435 \u0441\u0442\u0435\u043a\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> addressToSymbol(x), trace), '\\n') AS trace_symbols\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,r.kt)("p",null,"\u0422\u043e ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/array-functions#array-map"},"arrayMap")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e \u0442\u0438\u043f\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"addressToSymbols")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u044d\u0442\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u0432 \u0432\u0438\u0434\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace_symbols")," \u043a\u043e\u043b\u043e\u043d\u043a\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_symbols: _ZNK2DB24IAggregateFunctionHelperINS_20AggregateFunctionSumImmNS_24AggregateFunctionSumDataImEEEEE19addBatchSinglePlaceEmPcPPKNS_7IColumnEPNS_5ArenaE\n_ZNK2DB10Aggregator21executeWithoutKeyImplERPcmPNS0_28AggregateFunctionInstructionEPNS_5ArenaE\n_ZN2DB10Aggregator14executeOnBlockESt6vectorIN3COWINS_7IColumnEE13immutable_ptrIS3_EESaIS6_EEmRNS_22AggregatedDataVariantsERS1_IPKS3_SaISC_EERS1_ISE_SaISE_EERb\n_ZN2DB10Aggregator14executeOnBlockERKNS_5BlockERNS_22AggregatedDataVariantsERSt6vectorIPKNS_7IColumnESaIS9_EERS6_ISB_SaISB_EERb\n_ZN2DB10Aggregator7executeERKSt10shared_ptrINS_17IBlockInputStreamEERNS_22AggregatedDataVariantsE\n_ZN2DB27AggregatingBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB26ExpressionBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB26ExpressionBlockInputStream8readImplEv\n_ZN2DB17IBlockInputStream4readEv\n_ZN2DB28AsynchronousBlockInputStream9calculateEv\n_ZNSt17_Function_handlerIFvvEZN2DB28AsynchronousBlockInputStream4nextEvEUlvE_E9_M_invokeERKSt9_Any_data\n_ZN14ThreadPoolImplI20ThreadFromGlobalPoolE6workerESt14_List_iteratorIS0_E\n_ZZN20ThreadFromGlobalPoolC4IZN14ThreadPoolImplIS_E12scheduleImplIvEET_St8functionIFvvEEiSt8optionalImEEUlvE1_JEEEOS4_DpOT0_ENKUlvE_clEv\n_ZN14ThreadPoolImplISt6threadE6workerESt14_List_iteratorIS0_E\nexecute_native_thread_routine\nstart_thread\nclone\n")),(0,r.kt)("h2",{id:"demangle"},"demangle"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0441\u0438\u043c\u0432\u043e\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,r.kt)("a",{parentName:"p",href:"#addresstosymbol"},"addressstosymbol")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 C++."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"demangle(symbol)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," (",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/introspection"},"\u0421\u0442\u0440\u043e\u043a\u0430"),") - \u0441\u0438\u043c\u0432\u043e\u043b \u0438\u0437 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 C++."),(0,r.kt)("li",{parentName:"ul"},"\u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0441\u043b\u0438 \u0441\u0438\u043c\u0432\u043e\u043b \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c.")),(0,r.kt)("p",null,"\u0422\u0438\u043f: ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/introspection"},"\u0421\u0442\u0440\u043e\u043a\u0430"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions=1;\n")),(0,r.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace_log")," \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:    2019-11-20\nevent_time:    2019-11-20 16:57:59\nrevision:      54429\ntimer_type:    Real\nthread_number: 48\nquery_id:      724028bf-f550-45aa-910d-2af6212b94ac\ntrace:         [94138803686098,94138815010911,94138815096522,94138815101224,94138815102091,94138814222988,94138806823642,94138814457211,94138806823642,94138814457211,94138806823642,94138806795179,94138806796144,94138753770094,94138753771646,94138753760572,94138852407232,140399185266395,140399178045583]\n")),(0,r.kt)("p",null,"\u0422\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u0431\u043e\u0440\u043a\u0438."),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u043d\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT demangle(addressToSymbol(94138803686098)) \\G;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndemangle(addressToSymbol(94138803686098)): DB::IAggregateFunctionHelper<DB::AggregateFunctionSum<unsigned long, unsigned long, DB::AggregateFunctionSumData<unsigned long> > >::addBatchSinglePlace(unsigned long, char*, DB::IColumn const**, DB::Arena*) const\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e \u0432\u0441\u0435\u043c\u0443 \u0441\u0442\u0435\u043a\u0442\u0440\u0435\u0439\u0441\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    arrayStringConcat(arrayMap(x -> demangle(addressToSymbol(x)), trace), '\\n') AS trace_functions\nFROM system.trace_log\nLIMIT 1\n\\G\n")),(0,r.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,r.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/array-functions#array-map"},"arrayMap")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"demangle"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntrace_functions: DB::IAggregateFunctionHelper<DB::AggregateFunctionSum<unsigned long, unsigned long, DB::AggregateFunctionSumData<unsigned long> > >::addBatchSinglePlace(unsigned long, char*, DB::IColumn const**, DB::Arena*) const\nDB::Aggregator::executeWithoutKeyImpl(char*&, unsigned long, DB::Aggregator::AggregateFunctionInstruction*, DB::Arena*) const\nDB::Aggregator::executeOnBlock(std::vector<COW<DB::IColumn>::immutable_ptr<DB::IColumn>, std::allocator<COW<DB::IColumn>::immutable_ptr<DB::IColumn> > >, unsigned long, DB::AggregatedDataVariants&, std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >&, std::vector<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >, std::allocator<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> > > >&, bool&)\nDB::Aggregator::executeOnBlock(DB::Block const&, DB::AggregatedDataVariants&, std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >&, std::vector<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> >, std::allocator<std::vector<DB::IColumn const*, std::allocator<DB::IColumn const*> > > >&, bool&)\nDB::Aggregator::execute(std::shared_ptr<DB::IBlockInputStream> const&, DB::AggregatedDataVariants&)\nDB::AggregatingBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::ExpressionBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::ExpressionBlockInputStream::readImpl()\nDB::IBlockInputStream::read()\nDB::AsynchronousBlockInputStream::calculate()\nstd::_Function_handler<void (), DB::AsynchronousBlockInputStream::next()::{lambda()#1}>::_M_invoke(std::_Any_data const&)\nThreadPoolImpl<ThreadFromGlobalPool>::worker(std::_List_iterator<ThreadFromGlobalPool>)\nThreadFromGlobalPool::ThreadFromGlobalPool<ThreadPoolImpl<ThreadFromGlobalPool>::scheduleImpl<void>(std::function<void ()>, int, std::optional<unsigned long>)::{lambda()#3}>(ThreadPoolImpl<ThreadFromGlobalPool>::scheduleImpl<void>(std::function<void ()>, int, std::optional<unsigned long>)::{lambda()#3}&&)::{lambda()#1}::operator()() const\nThreadPoolImpl<std::thread>::worker(std::_List_iterator<std::thread>)\nexecute_native_thread_routine\nstart_thread\nclone\n")),(0,r.kt)("h2",{id:"tid"},"tid"),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 id \u043f\u043e\u0442\u043e\u043a\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0435\u043a\u0443\u0449\u0438\u0439 ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/development/architecture/#block"},"Block"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"tid()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Id \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u0430. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"Uint64"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tid();\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tid()\u2500\u2510\n\u2502  3878 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"logtrace"},"logTrace"),(0,r.kt)("p",null," \u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u043b\u043e\u0433 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/ru/development/architecture/#block"},"Block"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"logTrace('message')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," \u2014 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433. ",(0,r.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string#string"},"String"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 0.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT logTrace('logTrace message');\n")),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500logTrace('logTrace message')\u2500\u2510\n\u2502                            0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);