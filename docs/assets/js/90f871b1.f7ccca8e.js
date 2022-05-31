"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1791],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97611:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),c=["components"],o={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:39,sidebar_label:"\u6982\u8ff0"},l="\u5916\u90e8\u5b57\u5178",s={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts",title:"\u5916\u90e8\u5b57\u5178",description:"dicts-external-dicts}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:39,sidebar_label:"\u6982\u8ff0"},sidebar:"chinese",previous:{title:"\u5185\u90e8\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/internal-dicts"},next:{title:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"}},d={},u=[{value:"\u53e6\u8bf7\u53c2\u9605",id:"ext-dicts-see-also",level:2}],p={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dicts-external-dicts"},"\u5916\u90e8\u5b57\u5178"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u5404\u79cd\u6570\u636e\u6e90\u6dfb\u52a0\u81ea\u5df1\u7684\u5b57\u5178\u3002 \u5b57\u5178\u7684\u6570\u636e\u6e90\u53ef\u4ee5\u662f\u672c\u5730\u6587\u672c\u6216\u53ef\u6267\u884c\u6587\u4ef6\u3001HTTP(s)\u8d44\u6e90\u6216\u5176\u4ed6DBMS\u3002 \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 \u201c",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90"),"\u201d."),(0,a.kt)("p",null,"ClickHouse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u6216\u90e8\u5206\u5b58\u50a8\u5728RAM\u4e2d\u7684\u5b57\u5178\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u671f\u66f4\u65b0\u5b57\u5178\u5e76\u52a8\u6001\u52a0\u8f7d\u7f3a\u5931\u7684\u503c\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u5b57\u5178\u53ef\u4ee5\u52a8\u6001\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u521b\u5efa\u5916\u90e8\u5b57\u5178\u4e0exml\u6587\u4ef6\u6216 ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/create#create-dictionary-query"},"DDL\u67e5\u8be2"),".")),(0,a.kt)("p",null,"\u5916\u90e8\u5b57\u5178\u7684\u914d\u7f6e\u53ef\u4ee5\u4f4d\u4e8e\u4e00\u4e2a\u6216\u591a\u4e2axml\u6587\u4ef6\u4e2d\u3002 \u914d\u7f6e\u7684\u8def\u5f84\u5728\u6307\u5b9a ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-dictionaries_config"},"dictionaries_config")," \u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5b57\u5178\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u542f\u52a8\u6216\u9996\u6b21\u4f7f\u7528\u65f6\u52a0\u8f7d\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-dictionaries_lazy_load"},"dictionaries_lazy_load")," \u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u8be5 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/dictionaries#system_tables-dictionaries"},"\u5b57\u5178")," \u7cfb\u7edf\u8868\u5305\u542b\u6709\u5173\u5728\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u7684\u5b57\u5178\u7684\u4fe1\u606f\u3002 \u5bf9\u4e8e\u6bcf\u4e2a\u5b57\u5178\uff0c\u4f60\u53ef\u4ee5\u5728\u90a3\u91cc\u627e\u5230:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b57\u5178\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5ea6\u91cf\u6307\u6807\uff0c\u5982\u4e3a\u5b57\u5178\u5206\u914d\u7684RAM\u91cf\u6216\u81ea\u6210\u529f\u52a0\u8f7d\u5b57\u5178\u4ee5\u6765\u7684\u67e5\u8be2\u6570\u91cf\u3002")),(0,a.kt)("p",null,"\u5b57\u5178\u914d\u7f6e\u6587\u4ef6\u5177\u6709\u4ee5\u4e0b\u683c\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <comment>An optional element with any content. Ignored by the ClickHouse server.</comment>\n\n    \x3c!--Optional element. File name with substitutions--\x3e\n    <include_from>/etc/metrika.xml</include_from>\n\n\n    <dictionary>\n        \x3c!-- Dictionary configuration. --\x3e\n        \x3c!-- There can be any number of <dictionary> sections in the configuration file. --\x3e\n    </dictionary>\n\n</clickhouse>\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"\u914d\u7f6e")," \u540c\u4e00\u6587\u4ef6\u4e2d\u7684\u4efb\u610f\u6570\u91cf\u7684\u5b57\u5178\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-dictionary-query"},"\u5b57\u5178\u7684DDL\u67e5\u8be2")," \u5728\u670d\u52a1\u5668\u914d\u7f6e\u4e2d\u4e0d\u9700\u8981\u4efb\u4f55\u5176\u4ed6\u8bb0\u5f55\u3002 \u5b83\u4eec\u5141\u8bb8\u4f7f\u7528\u5b57\u5178\u4f5c\u4e3a\u4e00\u6d41\u7684\u5b9e\u4f53\uff0c\u5982\u8868\u6216\u89c6\u56fe\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u4e00\u4e2a\u5c0f\u5b57\u5178\u4e2d\u63cf\u8ff0\u5b83\u6765\u8f6c\u6362\u5c0f\u5b57\u5178\u7684\u503c `SELECT` \u67e5\u8be2\uff08\u89c1 [\u53d8\u6362](/docs/zh/sql-reference/functions/other-functions) \u529f\u80fd\uff09\u3002 \u6b64\u529f\u80fd\u4e0e\u5916\u90e8\u5b57\u5178\u65e0\u5173\u3002\n')),(0,a.kt)("h2",{id:"ext-dicts-see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},"\u914d\u7f6e\u5916\u90e8\u5b57\u5178")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u5b57\u5178\u66f4\u65b0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u5916\u90e8\u5b57\u5178\u7684\u6765\u6e90")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u5b57\u5178\u952e\u548c\u5b57\u6bb5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/ext-dict-functions"},"\u4f7f\u7528\u5916\u90e8\u5b57\u5178\u7684\u51fd\u6570"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);