"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[35419],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),i=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<s;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],p={slug:"/zh/operations/system-tables/grants"},o="system.grants",i={unversionedId:"zh/operations/system-tables/grants",id:"zh/operations/system-tables/grants",title:"system.grants",description:"system_tables-grants}",source:"@site/docs/zh/operations/system-tables/grants.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/grants",permalink:"/docs/zh/operations/system-tables/grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/grants"},sidebar:"chinese",previous:{title:"system.functions",permalink:"/docs/zh/operations/system-tables/functions"},next:{title:"\u7cfb\u7edf\u3002graphite_retentions",permalink:"/docs/zh/operations/system-tables/graphite_retentions"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-grants"},"system.grants"),(0,s.kt)("p",null,"\u6388\u4e88ClickHouse\u7528\u6237\u5e10\u6237\u7684\u6743\u9650."),(0,s.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u7528\u6237\u540d\u79f0.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u5206\u914d\u7ed9\u7528\u6237\u5e10\u53f7\u7684\u89d2\u8272.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/enum"},"Enum8"),") \u2014 ClickHouse\u7528\u6237\u5e10\u53f7\u7684\u63a5\u5165\u53c2\u6570.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"database")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u6570\u636e\u5e93\u540d\u79f0.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u8868\u540d\u79f0.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"column")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u88ab\u6388\u4e88\u8bbf\u95ee\u6743\u9650\u7684\u5217\u7684\u540d\u79f0.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u903b\u8f91\u503c. \u5b83\u663e\u793a\u4e86\u67d0\u4e9b\u7279\u6743\u662f\u5426\u88ab\u53d6\u6d88. \u53ef\u80fd\u7684\u503c:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u2014 \u8be5\u884c\u63cf\u8ff0\u4e86\u90e8\u5206\u64a4\u9500.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u8fd9\u4e00\u884c\u63cf\u8ff0\u4e86\u4e00\u4e2a\u6388\u6743.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u88ab\u6388\u4e88",(0,s.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION")," \u6743\u9650, \u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/grants"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);