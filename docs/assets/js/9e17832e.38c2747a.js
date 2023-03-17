"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[77946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),d=a,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const s={slug:"/ru/operations/system-tables/grants"},l="system.grants",p={unversionedId:"ru/operations/system-tables/grants",id:"ru/operations/system-tables/grants",title:"system.grants",description:"system_tables-grants}",source:"@site/docs/ru/operations/system-tables/grants.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/grants",permalink:"/docs/ru/operations/system-tables/grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/system-tables/grants"},sidebar:"russia",previous:{title:"system.functions",permalink:"/docs/ru/operations/system-tables/functions"},next:{title:"system.graphite_retentions",permalink:"/docs/ru/operations/system-tables/graphite_retentions"}},o={},i=[],u={toc:i},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-grants"},"system.grants"),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432 ClickHouse."),(0,a.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0420\u043e\u043b\u044c, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0434\u043b\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"table")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"column")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0431\u044b\u043b\u0438 \u043b\u0438 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u043d\u0442.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441 \u043e\u043f\u0446\u0438\u0435\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. ",(0,a.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))))}m.isMDXComponent=!0}}]);