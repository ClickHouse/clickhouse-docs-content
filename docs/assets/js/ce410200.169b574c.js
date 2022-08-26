"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87717],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={slug:"/zh/operations/system-tables/enabled-roles"},i="system.enabled_roles",c={unversionedId:"zh/operations/system-tables/enabled-roles",id:"zh/operations/system-tables/enabled-roles",title:"system.enabled_roles",description:"systemtables-enabledroles}",source:"@site/docs/zh/operations/system-tables/enabled-roles.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/enabled-roles",permalink:"/docs/zh/operations/system-tables/enabled-roles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/enabled-roles.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/enabled-roles"},sidebar:"chinese",previous:{title:"system.distribution_queue",permalink:"/docs/zh/operations/system-tables/distribution_queue"},next:{title:"system.errors",permalink:"/docs/zh/operations/system-tables/errors"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-enabled_roles"},"system.enabled_roles"),(0,o.kt)("p",null,"\u5305\u542b\u5f53\u524d\u6240\u6709\u6d3b\u52a8\u89d2\u8272, \u5305\u62ec\u5f53\u524d\u7528\u6237\u7684\u5f53\u524d\u89d2\u8272\u548c\u5f53\u524d\u89d2\u8272\u7684\u5df2\u6388\u4e88\u89d2\u8272."),(0,o.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"role_name")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u89d2\u8272\u540d\u79f0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"with_admin_option")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"li"},"enabled_role")," \u662f\u5426\u4e3a\u5177\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," \u6743\u9650\u7684\u89d2\u8272\u7684\u6807\u5fd7."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_current")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a  ",(0,o.kt)("inlineCode",{parentName:"li"},"enabled_role")," \u662f\u5426\u662f\u5f53\u524d\u7528\u6237\u7684\u5f53\u524d\u89d2\u8272\u7684\u6807\u5fd7."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_default")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"li"},"enabled_role")," \u662f\u5426\u4e3a\u9ed8\u8ba4\u89d2\u8272\u7684\u6807\u5fd7.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/enabled-roles"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);