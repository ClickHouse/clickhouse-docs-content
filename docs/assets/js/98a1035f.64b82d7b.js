"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[62537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,_=c["".concat(l,".").concat(f)]||c[f]||m[f]||s;return n?r.createElement(_,i(i({ref:t},u),{},{components:n})):r.createElement(_,i({ref:t},u))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={slug:"/en/operations/settings/settings-profiles",sidebar_position:61,sidebar_label:"Settings Profiles"},i="Settings Profiles",a={unversionedId:"en/operations/settings/settings-profiles",id:"en/operations/settings/settings-profiles",title:"Settings Profiles",description:"A settings profile is a collection of settings grouped under the same name.",source:"@site/docs/en/operations/settings/settings-profiles.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/settings-profiles",permalink:"/docs/en/operations/settings/settings-profiles",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/settings-profiles.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/en/operations/settings/settings-profiles",sidebar_position:61,sidebar_label:"Settings Profiles"},sidebar:"english",previous:{title:"Restrictions on Query Complexity",permalink:"/docs/en/operations/settings/query-complexity"},next:{title:"Constraints on Settings",permalink:"/docs/en/operations/settings/constraints-on-settings"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"settings-profiles"},"Settings Profiles"),(0,o.kt)("p",null,"A settings profile is a collection of settings grouped under the same name."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"ClickHouse also supports ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#access-control"},"SQL-driven workflow")," for managing settings profiles. We recommend using it.")),(0,o.kt)("p",null,"The profile can have any name. You can specify the same profile for different users. The most important thing you can write in the settings profile is ",(0,o.kt)("inlineCode",{parentName:"p"},"readonly=1"),", which ensures read-only access."),(0,o.kt)("p",null,"Settings profiles can inherit from each other. To use inheritance, indicate one or multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," settings before the other settings that are listed in the profile. In case when one setting is defined in different profiles, the latest defined is used."),(0,o.kt)("p",null,"To apply all the settings in a profile, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," setting."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'web'\n")),(0,o.kt)("p",null,"Settings profiles are declared in the user config file. This is usually ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Settings profiles --\x3e\n<profiles>\n    \x3c!-- Default settings --\x3e\n    <default>\n        \x3c!-- The maximum number of threads when running a single query. --\x3e\n        <max_threads>8</max_threads>\n    </default>\n\n    \x3c!-- Settings for quries from the user interface --\x3e\n    <web>\n        <max_rows_to_read>1000000000</max_rows_to_read>\n        <max_bytes_to_read>100000000000</max_bytes_to_read>\n\n        <max_rows_to_group_by>1000000</max_rows_to_group_by>\n        <group_by_overflow_mode>any</group_by_overflow_mode>\n\n        <max_rows_to_sort>1000000</max_rows_to_sort>\n        <max_bytes_to_sort>1000000000</max_bytes_to_sort>\n\n        <max_result_rows>100000</max_result_rows>\n        <max_result_bytes>100000000</max_result_bytes>\n        <result_overflow_mode>break</result_overflow_mode>\n\n        <max_execution_time>600</max_execution_time>\n        <min_execution_speed>1000000</min_execution_speed>\n        <timeout_before_checking_execution_speed>15</timeout_before_checking_execution_speed>\n\n        <max_columns_to_read>25</max_columns_to_read>\n        <max_temporary_columns>100</max_temporary_columns>\n        <max_temporary_non_const_columns>50</max_temporary_non_const_columns>\n\n        <max_subquery_depth>2</max_subquery_depth>\n        <max_pipeline_depth>25</max_pipeline_depth>\n        <max_ast_depth>50</max_ast_depth>\n        <max_ast_elements>100</max_ast_elements>\n\n        <readonly>1</readonly>\n    </web>\n</profiles>\n")),(0,o.kt)("p",null,"The example specifies two profiles: ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," profile has a special purpose: it must always be present and is applied when starting the server. In other words, the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," profile contains default settings."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"web")," profile is a regular profile that can be set using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET")," query or using a URL parameter in an HTTP query."))}m.isMDXComponent=!0}}]);