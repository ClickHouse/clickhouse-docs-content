"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[70301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||r;return n?s.createElement(d,a(a({ref:t},p),{},{components:n})):s.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(87462),i=(n(67294),n(3905));const r={sidebar_label:"Settings Overview",sidebar_position:1,slug:"/en/operations/settings/",pagination_next:"en/operations/settings/settings"},a="Settings Overview",o={unversionedId:"en/operations/settings/index",id:"en/operations/settings/index",title:"Settings Overview",description:"There are multiple ways to define ClickHouse settings. Settings are configured in layers, and each subsequent layer redefines the previous values of a setting.",source:"@site/docs/en/operations/settings/index.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/",permalink:"/docs/en/operations/settings/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Settings Overview",sidebar_position:1,slug:"/en/operations/settings/",pagination_next:"en/operations/settings/settings"},sidebar:"docs",previous:{title:"SSL X.509 certificate authentication",permalink:"/docs/en/operations/external-authenticators/ssl-x509"},next:{title:"Core Settings",permalink:"/docs/en/operations/settings/settings"}},l={},u=[{value:"Converting a Setting to its Default Value",id:"converting-a-setting-to-its-default-value",level:2},{value:"Custom Settings",id:"custom_settings",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"settings-overview"},"Settings Overview"),(0,i.kt)("p",null,"There are multiple ways to define ClickHouse settings. Settings are configured in layers, and each subsequent layer redefines the previous values of a setting."),(0,i.kt)("p",null,"The order of priority for defining a setting is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Settings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"users.xml")," server configuration file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set in the element ",(0,i.kt)("inlineCode",{parentName:"li"},"<profiles>"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Session settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send ",(0,i.kt)("inlineCode",{parentName:"li"},"SET setting=value")," from the ClickHouse console client in interactive mode.\nSimilarly, you can use ClickHouse sessions in the HTTP protocol. To do this, you need to specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"session_id")," HTTP parameter."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Query settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When starting the ClickHouse console client in non-interactive mode, set the startup parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"--setting=value"),"."),(0,i.kt)("li",{parentName:"ul"},"When using the HTTP API, pass CGI parameters (",(0,i.kt)("inlineCode",{parentName:"li"},"URL?setting_1=value&setting_2=value..."),")."),(0,i.kt)("li",{parentName:"ul"},"Define settings in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/#settings-in-select-query"},"SETTINGS")," clause of the SELECT query. The setting value is applied only to that query and is reset to the default or previous value after the query is executed.")))),(0,i.kt)("p",null,"View the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings"},"Settings")," page for a description of the ClickHouse settings."),(0,i.kt)("h2",{id:"converting-a-setting-to-its-default-value"},"Converting a Setting to its Default Value"),(0,i.kt)("p",null,"If you change a setting and would like to revert it back to its default value, set the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT"),". The syntax looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET setting_name = DEFAULT\n")),(0,i.kt)("p",null,"For example, the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"max_insert_block_size")," is 1048449. Suppose you change its value to 100000:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_insert_block_size=100000;\n\nSELECT value FROM system.settings where name='max_insert_block_size';\n")),(0,i.kt)("p",null,"The response is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500value\u2500\u2500\u2510\n\u2502 100000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"The following command sets its value back to 1048449:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_insert_block_size=DEFAULT;\n\nSELECT value FROM system.settings where name='max_insert_block_size';\n")),(0,i.kt)("p",null,"The setting is now back to its default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500value\u2500\u2500\u2500\u2510\n\u2502 1048449 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"custom_settings"},"Custom Settings"),(0,i.kt)("p",null,"In addition to the common ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings"},"settings"),", users can define custom settings."),(0,i.kt)("p",null,"A custom setting name must begin with one of predefined prefixes. The list of these prefixes must be declared in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#custom_settings_prefixes"},"custom_settings_prefixes")," parameter in the server configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<custom_settings_prefixes>custom_</custom_settings_prefixes>\n")),(0,i.kt)("p",null,"To define a custom setting use ",(0,i.kt)("inlineCode",{parentName:"p"},"SET")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SET custom_a = 123;\n")),(0,i.kt)("p",null,"To get the current value of a custom setting use ",(0,i.kt)("inlineCode",{parentName:"p"},"getSetting()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT getSetting('custom_a');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings"},"Server Configuration Settings"))))}g.isMDXComponent=!0}}]);