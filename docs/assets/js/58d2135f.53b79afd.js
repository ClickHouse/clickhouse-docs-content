"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={},c="functions",l={unversionedId:"en/operations/system-tables/functions",id:"en/operations/system-tables/functions",title:"functions",description:"system-functions}",source:"@site/docs/en/operations/system-tables/functions.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/functions",permalink:"/docs/en/operations/system-tables/functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/functions.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"events",permalink:"/docs/en/operations/system-tables/events"},next:{title:"grants",permalink:"/docs/en/operations/system-tables/grants"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-functions"},"functions"),(0,s.kt)("p",null,"Contains information about normal and aggregate functions."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"String"),") \u2013 The name of the function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_aggregate"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"UInt8"),") \u2014 Whether the function is aggregate.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT * FROM system.functions LIMIT 10;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500is_aggregate\u2500\u252c\u2500case_insensitive\u2500\u252c\u2500alias_to\u2500\u252c\u2500create_query\u2500\u252c\u2500origin\u2500\u2510\n\u2502 logTrace              \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 aes_decrypt_mysql     \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 aes_encrypt_mysql     \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 decrypt               \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 encrypt               \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 toBool                \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 windowID              \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 hopStart              \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 hop                   \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2502 snowflakeToDateTime64 \u2502            0 \u2502                0 \u2502          \u2502              \u2502 System \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.002 sec.\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/functions"},"Original article")," "))}f.isMDXComponent=!0}}]);