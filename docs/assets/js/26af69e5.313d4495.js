"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[53423],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=s,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],l={slug:"/ru/operations/system-tables/settings"},o="system.settings",u={unversionedId:"ru/operations/system-tables/settings",id:"ru/operations/system-tables/settings",title:"system.settings",description:"system-tables-system-settings}",source:"@site/docs/ru/operations/system-tables/settings.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/settings",permalink:"/docs/ru/operations/system-tables/settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/settings.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/settings"},sidebar:"russia",previous:{title:"system.session_log",permalink:"/docs/ru/operations/system-tables/session_log"},next:{title:"system.settings_profile_elements",permalink:"/docs/ru/operations/system-tables/settings_profile_elements"}},p={},c=[],m={toc:c};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-tables-system-settings"},"system.settings"),(0,a.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changed")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"min")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/constraints-on-settings#constraints-on-settings"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435"),". \u0415\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/constraints-on-settings#constraints-on-settings"},"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435"),". \u0415\u0441\u043b\u0438 \u043d\u0435\u0442, \u0442\u043e \u043f\u043e\u043b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readonly")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043c\u043e\u0436\u0435\u0442 \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u043a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445, \u0438\u043c\u0435\u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"min_i"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.settings\nWHERE name LIKE '%min_i%'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u252c\u2500changed\u2500\u252c\u2500description\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500min\u2500\u2500\u252c\u2500max\u2500\u2500\u252c\u2500readonly\u2500\u2510\n\u2502 min_insert_block_size_rows                  \u2502 1048576   \u2502       0 \u2502 Squash blocks passed to INSERT query to specified size in rows, if blocks are not big enough.                                                                         \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2502 min_insert_block_size_bytes                 \u2502 268435456 \u2502       0 \u2502 Squash blocks passed to INSERT query to specified size in bytes, if blocks are not big enough.                                                                        \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2502 read_backoff_min_interval_between_events_ms \u2502 1000      \u2502       0 \u2502 Settings to reduce the number of threads in case of slow reads. Do not pay attention to the event, if the previous one has passed less than a certain amount of time. \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502        0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"WHERE changed")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0427\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b\u0438\u0441\u044c \u0438\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f."),(0,a.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u044b\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.settings WHERE changed AND name='load_balancing'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"C\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/#settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/permissions-for-queries#settings_readonly"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/constraints-on-settings"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a")),(0,a.kt)("li",{parentName:"ul"},"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,a.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-settings"},"SHOW SETTINGS"))))}f.isMDXComponent=!0}}]);