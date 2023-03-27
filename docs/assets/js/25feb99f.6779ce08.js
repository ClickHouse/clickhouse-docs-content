"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[15727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/en/sql-reference/data-types/special-data-types/interval",sidebar_position:61,sidebar_label:"Interval"},i="Interval",o={unversionedId:"en/sql-reference/data-types/special-data-types/interval",id:"en/sql-reference/data-types/special-data-types/interval",title:"Interval",description:"The family of data types representing time and date intervals. The resulting types of the INTERVAL operator.",source:"@site/docs/en/sql-reference/data-types/special-data-types/interval.md",sourceDirName:"en/sql-reference/data-types/special-data-types",slug:"/en/sql-reference/data-types/special-data-types/interval",permalink:"/docs/en/sql-reference/data-types/special-data-types/interval",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/special-data-types/interval.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/en/sql-reference/data-types/special-data-types/interval",sidebar_position:61,sidebar_label:"Interval"},sidebar:"sqlreference",previous:{title:"Nothing",permalink:"/docs/en/sql-reference/data-types/special-data-types/nothing"},next:{title:"Domains",permalink:"/docs/en/sql-reference/data-types/domains/"}},p={},s=[{value:"Usage Remarks",id:"usage-remarks",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interval"},"Interval"),(0,r.kt)("p",null,"The family of data types representing time and date intervals. The resulting types of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/operators/#operator-interval"},"INTERVAL")," operator."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Interval")," data type values can\u2019t be stored in tables.")),(0,r.kt)("p",null,"Structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time interval as an unsigned integer value."),(0,r.kt)("li",{parentName:"ul"},"Type of an interval.")),(0,r.kt)("p",null,"Supported interval types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SECOND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MINUTE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOUR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DAY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WEEK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MONTH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QUARTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"YEAR"))),(0,r.kt)("p",null,"For each interval type, there is a separate data type. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," interval corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"IntervalDay")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(INTERVAL 4 DAY)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toIntervalDay(4))\u2500\u2510\n\u2502 IntervalDay                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"usage-remarks"},"Usage Remarks"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Interval"),"-type values in arithmetical operations with ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/date"},"Date")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),"-type values. For example, you can add 4 days to the current time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() as current_date_time, current_date_time + INTERVAL 4 DAY\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(now(), toIntervalDay(4))\u2500\u2510\n\u2502 2019-10-23 10:58:45 \u2502           2019-10-27 10:58:45 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Intervals with different types can\u2019t be combined. You can\u2019t use intervals like ",(0,r.kt)("inlineCode",{parentName:"p"},"4 DAY 1 HOUR"),". Specify intervals in units that are smaller or equal to the smallest unit of the interval, for example, the interval ",(0,r.kt)("inlineCode",{parentName:"p"},"1 day and an hour")," interval can be expressed as ",(0,r.kt)("inlineCode",{parentName:"p"},"25 HOUR")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"90000 SECOND"),"."),(0,r.kt)("p",null,"You can\u2019t perform arithmetical operations with ",(0,r.kt)("inlineCode",{parentName:"p"},"Interval"),"-type values, but you can add intervals of different types consequently to values in ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," data types. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL 4 DAY + INTERVAL 3 HOUR\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2019-10-23 11:16:28 \u2502                                    2019-10-27 14:16:28 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"The following query causes an exception:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select now() AS current_date_time, current_date_time + (INTERVAL 4 DAY + INTERVAL 3 HOUR)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 19.14.1):\nCode: 43. DB::Exception: Received from localhost:9000. DB::Exception: Wrong argument types for function plus: if one argument is Interval, then another must be Date or DateTime..\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/operators/#operator-interval"},"INTERVAL")," operator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#function-tointerval"},"toInterval")," type conversion functions")))}d.isMDXComponent=!0}}]);