"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},I=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),I=s(n),m=r,d=I["".concat(p,".").concat(m)]||I[m]||c[m]||a;return n?i.createElement(d,l(l({ref:t},u),{},{components:n})):i.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=I;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}I.displayName="MDXCreateElement"},4469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={slug:"/en/sql-reference/data-types/int-uint",sidebar_position:40,sidebar_label:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"},l="UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",o={unversionedId:"en/sql-reference/data-types/int-uint",id:"en/sql-reference/data-types/int-uint",title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",description:"Fixed-length integers, with or without a sign.",source:"@site/docs/en/sql-reference/data-types/int-uint.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/int-uint",permalink:"/docs/en/sql-reference/data-types/int-uint",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/int-uint.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{slug:"/en/sql-reference/data-types/int-uint",sidebar_position:40,sidebar_label:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"},sidebar:"english",previous:{title:"Data Types",permalink:"/docs/en/sql-reference/data-types/"},next:{title:"Float32, Float64",permalink:"/docs/en/sql-reference/data-types/float"}},p={},s=[{value:"Int Ranges",id:"int-ranges",level:2},{value:"UInt Ranges",id:"uint-ranges",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uint8-uint16-uint32-uint64-uint128-uint256-int8-int16-int32-int64-int128-int256"},"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256"),(0,r.kt)("p",null,"Fixed-length integers, with or without a sign."),(0,r.kt)("p",null,"When creating tables, numeric parameters for integer numbers can be set (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"TINYINT(8)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SMALLINT(16)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INT(32)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BIGINT(64)"),"), but ClickHouse ignores them."),(0,r.kt)("h2",{id:"int-ranges"},"Int Ranges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int8")," \u2014 ","[","-128 : 127","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int16")," \u2014 ","[","-32768 : 32767","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int32")," \u2014 ","[","-2147483648 : 2147483647","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int64")," \u2014 ","[","-9223372036854775808 : 9223372036854775807","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int128")," \u2014 ","[","-170141183460469231731687303715884105728 : 170141183460469231731687303715884105727","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int256")," \u2014 ","[","-57896044618658097711785492504343953926634992332820282019728792003956564819968 : 57896044618658097711785492504343953926634992332820282019728792003956564819967","]")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int8")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"TINYINT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BOOL"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"BOOLEAN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INT1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int16")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"SMALLINT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INT2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int32")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"INT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INT4"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INTEGER"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int64")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"BIGINT"),".")),(0,r.kt)("h2",{id:"uint-ranges"},"UInt Ranges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt8")," \u2014 ","[","0 : 255","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt16")," \u2014 ","[","0 : 65535","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt32")," \u2014 ","[","0 : 4294967295","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt64")," \u2014 ","[","0 : 18446744073709551615","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt128")," \u2014 ","[","0 : 340282366920938463463374607431768211455","]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UInt256")," \u2014 ","[","0 : 115792089237316195423570985008687907853269984665640564039457584007913129639935","]")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/int_uint/"},"Original article")," "))}c.isMDXComponent=!0}}]);