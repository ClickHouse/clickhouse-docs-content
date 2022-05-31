"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36180],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64353:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),s=["components"],o={sidebar_position:38,sidebar_label:"SETTING"},i="\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",u={unversionedId:"ru/sql-reference/statements/alter/setting",id:"ru/sql-reference/statements/alter/setting",title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b",description:"tablesettingsmanipulations}",source:"@site/docs/ru/sql-reference/statements/alter/setting.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/setting",permalink:"/docs/ru/sql-reference/statements/alter/setting",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/setting.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"SETTING"},sidebar:"russia",previous:{title:"PARTITION",permalink:"/docs/ru/sql-reference/statements/alter/partition"},next:{title:"DELETE",permalink:"/docs/ru/sql-reference/statements/alter/delete"}},p={},c=[{value:"MODIFY SETTING",id:"alter_modify_setting",level:2},{value:"RESET SETTING",id:"alter_reset_setting",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table_settings_manipulations"},"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442 \u0438\u0445 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0412 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.\n\u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY|RESET SETTING ...\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u042d\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c \u043d\u0430 \u0434\u0432\u0438\u0436\u043a\u0435 [MergeTree](/docs/ru/engines/table-engines/mergetree-family/mergetree).\n:::\n')),(0,l.kt)("h2",{id:"alter_modify_setting"},"MODIFY SETTING"),(0,l.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"MODIFY SETTING setting_name=value [, ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_table (id UInt32, data String) ENGINE=MergeTree() ORDER BY id;\n\nALTER TABLE example_table MODIFY SETTING max_part_loading_threads=8, max_parts_in_total=50000;\n")),(0,l.kt)("h2",{id:"alter_reset_setting"},"RESET SETTING"),(0,l.kt)("p",null,"\u0421\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0443\u0436\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0442\u043e \u043d\u0438\u043a\u0430\u043a\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RESET SETTING setting_name [, ...]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE example_table (id UInt32, data String) ENGINE=MergeTree() ORDER BY id\n    SETTINGS max_part_loading_threads=8;\n\nALTER TABLE example_table RESET SETTING max_part_loading_threads;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/operations/settings/merge-tree-settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 MergeTree \u0442\u0430\u0431\u043b\u0438\u0446"))))}f.isMDXComponent=!0}}]);