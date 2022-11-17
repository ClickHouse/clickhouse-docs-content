"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[80422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={slug:"/ru/operations/system-tables/quotas"},l="system.quotas",i={unversionedId:"ru/operations/system-tables/quotas",id:"ru/operations/system-tables/quotas",title:"system.quotas",description:"system_tables-quotas}",source:"@site/docs/ru/operations/system-tables/quotas.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/quotas",permalink:"/docs/ru/operations/system-tables/quotas",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/quotas.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/quotas"},sidebar:"russia",previous:{title:"system.quota_usage",permalink:"/docs/ru/operations/system-tables/quota_usage"},next:{title:"system.quotas_usage",permalink:"/docs/ru/operations/system-tables/quotas_usage"}},o={},p=[{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system_tables-quotas"},"system.quotas"),(0,n.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e ",(0,n.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/quotas"},"\u043a\u0432\u043e\u0442\u0430\u0445"),"."),(0,n.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u043c\u044f \u043a\u0432\u043e\u0442\u044b."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/uuid"},"UUID"),") \u2014 ID \u043a\u0432\u043e\u0442\u044b."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"storage"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),') \u2014 \u0425\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u0432\u043e\u0442. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: "users.xml", \u0435\u0441\u043b\u0438 \u043a\u0432\u043e\u0442\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u0432 \u0444\u0430\u0439\u043b\u0435 users.xml, "disk" \u2014 \u0435\u0441\u043b\u0438 \u043a\u0432\u043e\u0442\u0430 \u0437\u0430\u0434\u0430\u043d\u0430 \u0432 SQL-\u0437\u0430\u043f\u0440\u043e\u0441\u0435.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"keys")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),")) \u2014 \u041a\u043b\u044e\u0447 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0432\u043e\u0442\u044b. \u0415\u0441\u043b\u0438 \u0434\u0432\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443, \u043e\u043d\u0438 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u043e\u0431\u044a\u0435\u043c \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[]")," \u2014 \u0412\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"['user_name']")," \u2014 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"['ip_address']")," \u2014 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c IP-\u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"['client_key']")," \u2014 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443. \u041a\u043b\u044e\u0447 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u044f\u0432\u043d\u043e \u0437\u0430\u0434\u0430\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c. \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 ",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/interfaces/cli"},"clickhouse-client"),", \u043f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,n.kt)("inlineCode",{parentName:"li"},"--quota_key"),", \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,n.kt)("inlineCode",{parentName:"li"},"quota_key")," \u0444\u0430\u0439\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f HTTP \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a ",(0,n.kt)("inlineCode",{parentName:"li"},"X-ClickHouse-Quota"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"['user_name', 'client_key']")," \u2014 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443. \u0415\u0441\u043b\u0438 \u043a\u043b\u044e\u0447 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c, \u0442\u043e \u043a\u0432\u043e\u0442\u0430 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,n.kt)("inlineCode",{parentName:"li"},"user_name"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"['client_key', 'ip_address']")," \u2014 \u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u043a\u0432\u043e\u0442\u0443. \u0415\u0441\u043b\u0438 \u043a\u043b\u044e\u0447 \u043d\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c, \u0442\u043e \u043a\u0432\u043e\u0442\u0430 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,n.kt)("inlineCode",{parentName:"li"},"ip_address"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"durations")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0414\u043b\u0438\u043d\u044b \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apply_to_all")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u043d \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a \u043a\u0430\u043a\u0438\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u0432\u043e\u0442\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u041a\u0432\u043e\u0442\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 ",(0,n.kt)("inlineCode",{parentName:"li"},"apply_to_list"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u041a\u0432\u043e\u0442\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u0445, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 ",(0,n.kt)("inlineCode",{parentName:"li"},"apply_to_except"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apply_to_list")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0421\u043f\u0438\u0441\u043e\u043a \u0438\u043c\u0435\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439/",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/operations/access-rights#role-management"},"\u0440\u043e\u043b\u0435\u0439")," \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u0432\u043e\u0442\u0430."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apply_to_except")," (",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0421\u043f\u0438\u0441\u043e\u043a \u0438\u043c\u0435\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439/\u0440\u043e\u043b\u0435\u0439 \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043a\u0432\u043e\u0442\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430.")),(0,n.kt)("h2",{id:"see-also"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show#show-quotas-statement"},"SHOW QUOTAS"))))}m.isMDXComponent=!0}}]);