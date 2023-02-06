"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[79608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/zh/faq/integration/json-import",title:"How to import JSON into ClickHouse?",toc_hidden:!0,sidebar_position:11},i="How to Import JSON Into ClickHouse?",s={unversionedId:"zh/faq/integration/json-import",id:"zh/faq/integration/json-import",title:"How to import JSON into ClickHouse?",description:"how-to-import-json-into-clickhouse}",source:"@site/docs/zh/faq/integration/json-import.md",sourceDirName:"zh/faq/integration",slug:"/zh/faq/integration/json-import",permalink:"/docs/zh/faq/integration/json-import",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/integration/json-import.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{slug:"/zh/faq/integration/json-import",title:"How to import JSON into ClickHouse?",toc_hidden:!0,sidebar_position:11},sidebar:"chinese",previous:{title:"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",permalink:"/docs/zh/faq/integration/file-export"},next:{title:"What if I have a problem with encodings when using Oracle via ODBC?",permalink:"/docs/zh/faq/integration/oracle-odbc"}},l={},c=[{value:"Examples",id:"examples",level:2},{value:"Useful Settings",id:"useful-settings",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-import-json-into-clickhouse"},"How to Import JSON Into ClickHouse?"),(0,o.kt)("p",null,"ClickHouse supports a wide range of ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/formats/"},"data formats for input and output"),". There are multiple JSON variations among them, but the most commonly used for data ingestion is ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/formats/#jsoneachrow"},"JSONEachRow"),". It expects one JSON object per row, each object separated by a newline."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/http/"},"HTTP interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo '{\"foo\":\"bar\"}' | curl 'http://localhost:8123/?query=INSERT%20INTO%20test%20FORMAT%20JSONEachRow' --data-binary @-\n")),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/cli/"},"CLI interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo \'{"foo":"bar"}\'  | clickhouse-client --query="INSERT INTO test FORMAT JSONEachRow"\n')),(0,o.kt)("p",null,"Instead of inserting data manually, you might consider to use one of ",(0,o.kt)("a",{parentName:"p",href:"../../interfaces/"},"client libraries")," instead."),(0,o.kt)("h2",{id:"useful-settings"},"Useful Settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input_format_skip_unknown_fields")," allows to insert JSON even if there were additional fields not present in table schema (by discarding them)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"input_format_import_nested_json")," allows to insert nested JSON objects into columns of ",(0,o.kt)("a",{parentName:"li",href:"../../sql-reference/data-types/nested-data-structures/nested/"},"Nested")," type.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Settings are specified as ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameters for the HTTP interface or as additional command-line arguments prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLI")," interface.")))}f.isMDXComponent=!0}}]);