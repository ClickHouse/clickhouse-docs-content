"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[30523],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return _}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),_=o,f=m["".concat(l,".").concat(_)]||m[_]||c[_]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={sidebar_position:61,sidebar_label:"\u8bbe\u7f6e\u914d\u7f6e"},l="\u8bbe\u7f6e\u914d\u7f6e",p={unversionedId:"zh/operations/settings/settings-profiles",id:"zh/operations/settings/settings-profiles",title:"\u8bbe\u7f6e\u914d\u7f6e",description:"settings-profiles}",source:"@site/docs/zh/operations/settings/settings-profiles.md",sourceDirName:"zh/operations/settings",slug:"/zh/operations/settings/settings-profiles",permalink:"/zh/operations/settings/settings-profiles",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/settings/settings-profiles.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"\u8bbe\u7f6e\u914d\u7f6e"},sidebar:"chinese",previous:{title:"\u67e5\u8be2\u6743\u9650",permalink:"/zh/operations/settings/permissions-for-queries"},next:{title:"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236",permalink:"/zh/operations/settings/constraints-on-settings"}},u={},c=[],m={toc:c};function _(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"settings-profiles"},"\u8bbe\u7f6e\u914d\u7f6e"),(0,s.kt)("p",null,"\u8bbe\u7f6e\u914d\u7f6e\u662f\u8bbe\u7f6e\u7684\u96c6\u5408\uff0c\u5e76\u6309\u7167\u76f8\u540c\u7684\u540d\u79f0\u8fdb\u884c\u5206\u7ec4\u3002"),(0,s.kt)("p",null,'!!! note "\u4fe1\u606f"\nClickHouse \u8fd8\u652f\u6301\u7528 ',(0,s.kt)("a",{parentName:"p",href:"/zh/operations/access-rights#access-control"},"SQL\u9a71\u52a8\u7684\u5de5\u4f5c\u6d41")," \u7ba1\u7406\u8bbe\u7f6e\u914d\u7f6e\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5b83\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6e\u914d\u7f6e\u53ef\u4ee5\u4efb\u610f\u547d\u540d\u3002\u4f60\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u7528\u6237\u6307\u5b9a\u76f8\u540c\u7684\u8bbe\u7f6e\u914d\u7f6e\u3002\u60a8\u53ef\u4ee5\u5728\u8bbe\u7f6e\u914d\u7f6e\u4e2d\u5199\u5165\u7684\u6700\u91cd\u8981\u7684\u5185\u5bb9\u662f ",(0,s.kt)("inlineCode",{parentName:"p"},"readonly=1"),"\uff0c\u8fd9\u5c06\u786e\u4fdd\u53ea\u8bfb\u8bbf\u95ee\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6e\u914d\u7f6e\u53ef\u4ee5\u5f7c\u6b64\u7ee7\u627f\u3002\u8981\u4f7f\u7528\u7ee7\u627f\uff0c\u8bf7\u5728\u6587\u4ef6\u4e2d\u5217\u4e3e\u7684\u5176\u4ed6\u8bbe\u7f6e\u4e4b\u524d\uff0c\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"profile")," \u8bbe\u7f6e\u3002\u5982\u679c\u5728\u4e0d\u540c\u7684\u8bbe\u7f6e\u914d\u7f6e\u4e2d\u5b9a\u4e49\u4e86\u540c\u4e00\u4e2a\u8bbe\u7f6e\uff0c\u5219\u4f7f\u7528\u6700\u65b0\u7684\u5b9a\u4e49\u3002"),(0,s.kt)("p",null,"\u8981\u5e94\u7528\u8bbe\u7f6e\u914d\u7f6e\u4e2d\u7684\u6240\u6709\u8bbe\u7f6e\uff0c\u8bf7\u8bbe\u5b9a ",(0,s.kt)("inlineCode",{parentName:"p"},"profile")," \u8bbe\u7f6e\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("p",null,"\u6dfb\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"web")," \u914d\u7f6e\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'web'\n")),(0,s.kt)("p",null,"\u8bbe\u7f6e\u914d\u7f6e\u5728\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u4e2d\u58f0\u660e\u3002\u8fd9\u901a\u5e38\u662f\u6307 ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml"),"."),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Settings profiles --\x3e\n<profiles>\n    \x3c!-- Default settings --\x3e\n    <default>\n        \x3c!-- The maximum number of threads when running a single query. --\x3e\n        <max_threads>8</max_threads>\n    </default>\n\n    \x3c!-- Settings for quries from the user interface --\x3e\n    <web>\n        <max_rows_to_read>1000000000</max_rows_to_read>\n        <max_bytes_to_read>100000000000</max_bytes_to_read>\n\n        <max_rows_to_group_by>1000000</max_rows_to_group_by>\n        <group_by_overflow_mode>any</group_by_overflow_mode>\n\n        <max_rows_to_sort>1000000</max_rows_to_sort>\n        <max_bytes_to_sort>1000000000</max_bytes_to_sort>\n\n        <max_result_rows>100000</max_result_rows>\n        <max_result_bytes>100000000</max_result_bytes>\n        <result_overflow_mode>break</result_overflow_mode>\n\n        <max_execution_time>600</max_execution_time>\n        <min_execution_speed>1000000</min_execution_speed>\n        <timeout_before_checking_execution_speed>15</timeout_before_checking_execution_speed>\n\n        <max_columns_to_read>25</max_columns_to_read>\n        <max_temporary_columns>100</max_temporary_columns>\n        <max_temporary_non_const_columns>50</max_temporary_non_const_columns>\n\n        <max_subquery_depth>2</max_subquery_depth>\n        <max_pipeline_depth>25</max_pipeline_depth>\n        <max_ast_depth>50</max_ast_depth>\n        <max_ast_elements>100</max_ast_elements>\n\n        <readonly>1</readonly>\n    </web>\n</profiles>\n")),(0,s.kt)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u6307\u5b9a\u4e86\u4e24\u4e2a\u914d\u7f6e\uff1a ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"web")," \u3002"),(0,s.kt)("p",null,"\u8fd9\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," \u914d\u7f6e\u6709\u4e00\u4e2a\u7279\u6b8a\u7528\u9014\uff1a\u5b83\u5fc5\u987b\u59cb\u7ec8\u5b58\u5728\u5e76\u5728\u542f\u52a8\u670d\u52a1\u65f6\u5e94\u7528\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," \u914d\u7f6e\u5305\u542b\u9ed8\u8ba4\u8bbe\u7f6e\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"web")," \u914d\u7f6e\u662f\u4e00\u4e2a\u5e38\u89c4\u7684\u914d\u7f6e\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"SET")," \u67e5\u8be2\u8fdb\u884c\u8bbe\u5b9a\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728HTTP\u67e5\u8be2\u4e2d\u4f7f\u7528URL\u53c2\u6570\u8fdb\u884c\u8bbe\u5b9a\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings_profiles/"},"\u539f\u59cb\u6587\u7ae0")," "))}_.isMDXComponent=!0}}]);