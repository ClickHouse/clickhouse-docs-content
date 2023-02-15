"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[59429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/sql-reference/data-types/datetime",sidebar_position:48,sidebar_label:"DateTime"},o="DateTime",s={unversionedId:"en/sql-reference/data-types/datetime",id:"en/sql-reference/data-types/datetime",title:"DateTime",description:"Allows to store an instant in time, that can be expressed as a calendar date and a time of a day.",source:"@site/docs/en/sql-reference/data-types/datetime.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/datetime",permalink:"/docs/en/sql-reference/data-types/datetime",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/datetime.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{slug:"/en/sql-reference/data-types/datetime",sidebar_position:48,sidebar_label:"DateTime"},sidebar:"english",previous:{title:"Date32",permalink:"/docs/en/sql-reference/data-types/date32"},next:{title:"DateTime64",permalink:"/docs/en/sql-reference/data-types/datetime64"}},l={},m=[{value:"Usage Remarks",id:"usage-remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Limitations on timezones support",id:"limitations-on-timezones-support",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datetime"},"DateTime"),(0,i.kt)("p",null,"Allows to store an instant in time, that can be expressed as a calendar date and a time of a day."),(0,i.kt)("p",null,"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DateTime([timezone])\n")),(0,i.kt)("p",null,"Supported range of values: ","[","1970-01-01 00:00:00, 2106-02-07 06:28:15","]","."),(0,i.kt)("p",null,"Resolution: 1 second."),(0,i.kt)("h2",{id:"usage-remarks"},"Usage Remarks"),(0,i.kt)("p",null,"The point in time is saved as a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix timestamp"),", regardless of the time zone or daylight saving time. The time zone affects how the values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," type values are displayed in text format and how the values specified as strings are parsed (\u20182020-01-01 05:00:01\u2019)."),(0,i.kt)("p",null,"Timezone agnostic unix timestamp is stored in tables, and the timezone is used to transform it to text format or back during data import/export or to make calendar calculations on the values (example: ",(0,i.kt)("inlineCode",{parentName:"p"},"toDate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toHour")," functions et cetera). The time zone is not stored in the rows of the table (or in resultset), but is stored in the column metadata."),(0,i.kt)("p",null,"A list of supported time zones can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.iana.org/time-zones"},"IANA Time Zone Database")," and also can be queried by ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.time_zones"),". ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"The list")," is also available at Wikipedia."),(0,i.kt)("p",null,"You can explicitly set a time zone for ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),"-type columns when creating a table. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime('UTC')"),". If the time zone isn\u2019t set, ClickHouse uses the value of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"timezone")," parameter in the server settings or the operating system settings at the moment of the ClickHouse server start."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli"},"clickhouse-client")," applies the server time zone by default if a time zone isn\u2019t explicitly set when initializing the data type. To use the client time zone, run ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--use_client_time_zone")," parameter."),(0,i.kt)("p",null,"ClickHouse outputs values depending on the value of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-date_time_output_format"},"date_time_output_format")," setting. ",(0,i.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD hh:mm:ss")," text format by default. Additionaly you can change the output with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/date-time-functions#formatdatetime"},"formatDateTime")," function."),(0,i.kt)("p",null,"When inserting data into ClickHouse, you can use different formats of date and time strings, depending on the value of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-date_time_input_format"},"date_time_input_format")," setting."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Creating a table with a ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),"-type column and inserting data into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` DateTime('Asia/Istanbul'),\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800, 1), ('2019-01-01 00:00:00', 2);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00 \u2502        1 \u2502\n\u2502 2019-01-01 00:00:00 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When inserting datetime as an integer, it is treated as Unix Timestamp (UTC). ",(0,i.kt)("inlineCode",{parentName:"li"},"1546300800")," represents ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," UTC. However, as ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," column has ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," (UTC+3) timezone specified, when outputting as string the value will be shown as ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 03:00:00'")),(0,i.kt)("li",{parentName:"ul"},"When inserting string value as datetime, it is treated as being in column timezone. ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," will be treated as being in ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," timezone and saved as ",(0,i.kt)("inlineCode",{parentName:"li"},"1546290000"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Filtering on ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = toDateTime('2019-01-01 00:00:00', 'Asia/Istanbul')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 00:00:00 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," column values can be filtered using a string value in ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," predicate. It will be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime")," automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = '2019-01-01 00:00:00'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00 \u2502        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," Getting a time zone for a ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),"-type column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime(now(), 'Asia/Istanbul') AS column, toTypeName(column) AS x\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500column\u2500\u252c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-10-16 04:12:04 \u2502 DateTime('Asia/Istanbul') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.")," Timezone conversion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\ntoDateTime(timestamp, 'Europe/London') as lon_time,\ntoDateTime(timestamp, 'Asia/Istanbul') as mos_time\nFROM dt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500lon_time\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mos_time\u2500\u2510\n\u2502 2019-01-01 00:00:00 \u2502 2019-01-01 03:00:00 \u2502\n\u2502 2018-12-31 21:00:00 \u2502 2019-01-01 00:00:00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"As timezone conversion only changes the metadata, the operation has no computation cost."),(0,i.kt)("h2",{id:"limitations-on-timezones-support"},"Limitations on timezones support"),(0,i.kt)("p",null,"Some timezones may not be supported completely. There are a few cases:"),(0,i.kt)("p",null,"If the offset from UTC is not a multiple of 15 minutes, the calculation of hours and minutes can be incorrect. For example, the time zone in Monrovia, Liberia has offset UTC -0:44:30 before 7 Jan 1972. If you are doing calculations on the historical time in Monrovia timezone, the time processing functions may give incorrect results. The results after 7 Jan 1972 will be correct nevertheless."),(0,i.kt)("p",null,"If the time transition (due to daylight saving time or for other reasons) was performed at a point of time that is not a multiple of 15 minutes, you can also get incorrect results at this specific day."),(0,i.kt)("p",null,"Non-monotonic calendar dates. For example, in Happy Valley - Goose Bay, the time was transitioned one hour backwards at 00:01:00 7 Nov 2010 (one minute after midnight). So after 6th Nov has ended, people observed a whole one minute of 7th Nov, then time was changed back to 23:01 6th Nov and after another 59 minutes the 7th Nov started again. ClickHouse does not (yet) support this kind of fun. During these days the results of time processing functions may be slightly incorrect."),(0,i.kt)("p",null,"Similar issue exists for Casey Antarctic station in year 2010. They changed time three hours back at 5 Mar, 02:00. If you are working in antarctic station, please don't afraid to use ClickHouse. Just make sure you set timezone to UTC or be aware of inaccuracies."),(0,i.kt)("p",null,"Time shifts for multiple days. Some pacific islands changed their timezone offset from UTC+14 to UTC-12. That's alright but some inaccuracies may present if you do calculations with their timezone for historical time points at the days of conversion."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions"},"Type conversion functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/date-time-functions"},"Functions for working with dates and times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/array-functions"},"Functions for working with arrays")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-date_time_input_format"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_input_format")," setting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#settings-date_time_output_format"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_output_format")," setting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"timezone")," server configuration parameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/operators/#operators-datetime"},"Operators for working with dates and times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"Date")," data type"))))}c.isMDXComponent=!0}}]);