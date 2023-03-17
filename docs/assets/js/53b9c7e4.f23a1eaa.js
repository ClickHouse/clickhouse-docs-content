"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[47622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={slug:"/en/sql-reference/functions/time-window-functions",sidebar_position:68,sidebar_label:"Time Window"},o="Time Window Functions",l={unversionedId:"en/sql-reference/functions/time-window-functions",id:"en/sql-reference/functions/time-window-functions",title:"Time Window Functions",description:"Time window functions return the inclusive lower and exclusive upper bound of the corresponding window. The functions for working with WindowView are listed below:",source:"@site/docs/en/sql-reference/functions/time-window-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/time-window-functions",permalink:"/docs/en/sql-reference/functions/time-window-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/time-window-functions.md",tags:[],version:"current",sidebarPosition:68,frontMatter:{slug:"/en/sql-reference/functions/time-window-functions",sidebar_position:68,sidebar_label:"Time Window"},sidebar:"sqlreference",previous:{title:"Other",permalink:"/docs/en/sql-reference/functions/other-functions"},next:{title:"Distance functions",permalink:"/docs/en/sql-reference/functions/distance-functions"}},p={},u=[{value:"tumble",id:"tumble",level:2},{value:"hop",id:"hop",level:2},{value:"tumbleStart",id:"tumblestart",level:2},{value:"tumbleEnd",id:"tumbleend",level:2},{value:"hopStart",id:"hopstart",level:2},{value:"hopEnd",id:"hopend",level:2},{value:"Related content",id:"related-content",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-window-functions"},"Time Window Functions"),(0,i.kt)("p",null,"Time window functions return the inclusive lower and exclusive upper bound of the corresponding window. The functions for working with WindowView are listed below:"),(0,i.kt)("h2",{id:"tumble"},"tumble"),(0,i.kt)("p",null,"A tumbling time window assigns records to non-overlapping, continuous windows with a fixed duration (",(0,i.kt)("inlineCode",{parentName:"p"},"interval"),"). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"tumble(time_attr, interval [, timezone])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_attr")," - Date and time. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," data type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interval")," - Window interval in ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timezone")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"Timezone name")," (optional). ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The inclusive lower and exclusive upper bound of the corresponding tumbling window.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple(DateTime, DateTime)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tumble(now(), toIntervalDay('1'))\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500tumble(now(), toIntervalDay('1'))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['2020-01-01 00:00:00','2020-01-02 00:00:00'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"hop"},"hop"),(0,i.kt)("p",null,"A hopping time window has a fixed duration (",(0,i.kt)("inlineCode",{parentName:"p"},"window_interval"),") and hops by a specified hop interval (",(0,i.kt)("inlineCode",{parentName:"p"},"hop_interval"),"). If the ",(0,i.kt)("inlineCode",{parentName:"p"},"hop_interval")," is smaller than the ",(0,i.kt)("inlineCode",{parentName:"p"},"window_interval"),", hopping windows are overlapping. Thus, records can be assigned to multiple windows. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"hop(time_attr, hop_interval, window_interval [, timezone])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time_attr")," - Date and time. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime")," data type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hop_interval")," - Hop interval in ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type. Should be a positive number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window_interval")," - Window interval in ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/special-data-types/interval"},"Interval")," data type. Should be a positive number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timezone")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"Timezone name")," (optional). ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned values")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The inclusive lower and exclusive upper bound of the corresponding hopping window. Since one record can be assigned to multiple hop windows, the function only returns the bound of the ",(0,i.kt)("strong",{parentName:"li"},"first")," window when hop function is used ",(0,i.kt)("strong",{parentName:"li"},"without")," ",(0,i.kt)("inlineCode",{parentName:"li"},"WINDOW VIEW"),".")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple(DateTime, DateTime)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT hop(now(), INTERVAL '1' SECOND, INTERVAL '2' SECOND)\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hop(now(), toIntervalSecond('1'), toIntervalSecond('2'))\u2500\u2500\u2510\n\u2502 ('2020-01-14 16:58:22','2020-01-14 16:58:24')             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"tumblestart"},"tumbleStart"),(0,i.kt)("p",null,"Returns the inclusive lower bound of the corresponding tumbling window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"tumbleStart(bounds_tuple);\ntumbleStart(time_attr, interval [, timezone]);\n")),(0,i.kt)("h2",{id:"tumbleend"},"tumbleEnd"),(0,i.kt)("p",null,"Returns the exclusive upper bound of the corresponding tumbling window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"tumbleEnd(bounds_tuple);\ntumbleEnd(time_attr, interval [, timezone]);\n")),(0,i.kt)("h2",{id:"hopstart"},"hopStart"),(0,i.kt)("p",null,"Returns the inclusive lower bound of the corresponding hopping window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"hopStart(bounds_tuple);\nhopStart(time_attr, hop_interval, window_interval [, timezone]);\n")),(0,i.kt)("h2",{id:"hopend"},"hopEnd"),(0,i.kt)("p",null,"Returns the exclusive upper bound of the corresponding hopping window."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"hopEnd(bounds_tuple);\nhopEnd(time_attr, hop_interval, window_interval [, timezone]);\n")),(0,i.kt)("h2",{id:"related-content"},"Related content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blog: ",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/working-with-time-series-data-and-functions-ClickHouse"},"Working with time series data in ClickHouse"))))}c.isMDXComponent=!0}}]);