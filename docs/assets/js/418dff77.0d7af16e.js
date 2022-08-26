"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17646],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),i=["components"],a={slug:"/zh/operations/system-tables/merge_tree_settings"},l="system.merge_tree_settings",c={unversionedId:"zh/operations/system-tables/merge_tree_settings",id:"zh/operations/system-tables/merge_tree_settings",title:"system.merge_tree_settings",description:"system-mergetreesettings}",source:"@site/docs/zh/operations/system-tables/merge_tree_settings.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/merge_tree_settings",permalink:"/docs/zh/operations/system-tables/merge_tree_settings",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/merge_tree_settings.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/merge_tree_settings"},sidebar:"chinese",previous:{title:"system.licenses {#system-tables_system.licenses}",permalink:"/docs/zh/operations/system-tables/licenses"},next:{title:"\u7cfb\u7edf\u3002\u5408\u5e76",permalink:"/docs/zh/operations/system-tables/merges"}},p={},m=[],u={toc:m};function g(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-merge_tree_settings"},"system.merge_tree_settings"),(0,o.kt)("p",null,"\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u7684\u8bbe\u7f6e (Setting) \u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u5217:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 \u8bbe\u7f6e\u540d\u79f0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (String) \u2014 \u8bbe\u7f6e\u7684\u503c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (String) \u2014 \u8bbe\u7f6e\u63cf\u8ff0\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"type")," (String) \u2014 \u8bbe\u7f6e\u7c7b\u578b (\u6267\u884c\u7279\u5b9a\u7684\u5b57\u7b26\u4e32\u503c)\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"changed")," (UInt8) \u2014 \u8be5\u8bbe\u7f6e\u662f\u5426\u5728\u914d\u7f6e\u4e2d\u660e\u786e\u5b9a\u4e49\u6216\u662f\u660e\u786e\u6539\u53d8\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.merge_tree_settings LIMIT 4 FORMAT Vertical;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        index_granularity\nvalue:       8192\nchanged:     0\ndescription: How many rows correspond to one primary key value.\ntype:        SettingUInt64\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        min_bytes_for_wide_part\nvalue:       0\nchanged:     0\ndescription: Minimal uncompressed size in bytes to create part in wide format instead of compact\ntype:        SettingUInt64\n\nRow 3:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        min_rows_for_wide_part\nvalue:       0\nchanged:     0\ndescription: Minimal number of rows to create part in wide format instead of compact\ntype:        SettingUInt64\n\nRow 4:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:        merge_max_block_size\nvalue:       8192\nchanged:     0\ndescription: How many rows in blocks should be formed for merge operations.\ntype:        SettingUInt64\n\n4 rows in set. Elapsed: 0.001 sec.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/merge_tree_settings"},"\u539f\u6587")," "))}g.isMDXComponent=!0}}]);