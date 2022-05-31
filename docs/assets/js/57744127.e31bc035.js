"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99627],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=s(r),p=i,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||a;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13187:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c=["components"],o={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:40,sidebar_label:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"},l="\u914d\u7f6e\u5916\u90e8\u5b57\u5178",s={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178",description:"dicts-external-dicts-dict}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:40,sidebar_label:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"},sidebar:"chinese",previous:{title:"\u6982\u8ff0",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},d={},u=[],f={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dicts-external-dicts-dict"},"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528xml\u6587\u4ef6\u914d\u7f6e\u5b57\u5178\uff0c\u5219\u6bd4\u5b57\u5178\u914d\u7f6e\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-dictionary-query"},"DDL-\u67e5\u8be2")," \u5177\u6709\u4ee5\u4e0b\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The identifier that can be used to access the dictionary. Use the characters ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90")," \u2014 Source of the dictionary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5e03\u5c40")," \u2014 Dictionary layout in memory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u7ed3\u6784")," \u2014 Structure of the dictionary . A key and attributes that can be retrieved by this key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u4f7f\u7528\u5bff\u547d")," \u2014 Frequency of dictionary updates.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict/"},"\u539f\u59cb\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);