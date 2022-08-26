"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67831],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={slug:"/zh/sql-reference/statements/alter/setting",sidebar_position:38,sidebar_label:"SETTING"},o="\u8868\u8bbe\u7f6e\u64cd\u4f5c",c={unversionedId:"zh/sql-reference/statements/alter/setting",id:"zh/sql-reference/statements/alter/setting",title:"\u8868\u8bbe\u7f6e\u64cd\u4f5c",description:"tablesettingsmanipulations}",source:"@site/docs/zh/sql-reference/statements/alter/setting.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/setting",permalink:"/docs/zh/sql-reference/statements/alter/setting",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/alter/setting.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{slug:"/zh/sql-reference/statements/alter/setting",sidebar_position:38,sidebar_label:"SETTING"},sidebar:"chinese",previous:{title:"PARTITION",permalink:"/docs/zh/sql-reference/statements/alter/partition"},next:{title:"DELETE",permalink:"/docs/zh/sql-reference/statements/alter/delete"}},p={},u=[{value:"\u4fee\u6539\u8bbe\u7f6e",id:"alter_modify_setting",level:2},{value:"\u91cd\u7f6e\u8bbe\u7f6e",id:"alter_reset_setting",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table_settings_manipulations"},"\u8868\u8bbe\u7f6e\u64cd\u4f5c"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u7ec4\u66f4\u6539\u8868\u8bbe\u7f6e\u7684\u64cd\u4f5c\u3002\u4f60\u53ef\u4ee5\u4fee\u6539\u8bbe\u7f6e\u6216\u5c06\u5176\u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u3002\u5355\u4e2a\u67e5\u8be2\u53ef\u4ee5\u540c\u65f6\u66f4\u6539\u591a\u4e2a\u8bbe\u7f6e\u3002 \u5982\u679c\u6307\u5b9a\u540d\u79f0\u7684\u8bbe\u7f6e\u4e0d\u5b58\u5728\uff0c\u5219\u67e5\u8be2\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY|RESET SETTING ...\n")),(0,l.kt)("p",null,'!!! note "\u6ce8\u610f"\n\u8fd9\u4e9b\u67e5\u8be2\u53ea\u80fd\u5e94\u7528\u4e8e ',(0,l.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u8868\u3002"),(0,l.kt)("h2",{id:"alter_modify_setting"},"\u4fee\u6539\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u66f4\u6539\u8868\u8bbe\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MODIFY SETTING setting_name=value [, ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_table (id UInt32, data String) ENGINE=MergeTree() ORDER BY id;\nALTER TABLE example_table MODIFY SETTING max_part_loading_threads=8, max_parts_in_total=50000;\n")),(0,l.kt)("h2",{id:"alter_reset_setting"},"\u91cd\u7f6e\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u91cd\u7f6e\u8868\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u3002\u5982\u679c\u8bbe\u7f6e\u5904\u4e8e\u9ed8\u8ba4\u72b6\u6001\uff0c\u5219\u4e0d\u91c7\u53d6\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RESET SETTING setting_name [, ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_table (id UInt32, data String) ENGINE=MergeTree() ORDER BY id\n    SETTINGS max_part_loading_threads=8;\nALTER TABLE example_table RESET SETTING max_part_loading_threads;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/operations/settings/merge-tree-settings"},"MergeTree settings"))))}f.isMDXComponent=!0}}]);