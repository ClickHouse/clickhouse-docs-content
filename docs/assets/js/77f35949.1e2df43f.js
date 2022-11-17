"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33619],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(i),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return i?r.createElement(f,s(s({ref:t},u),{},{components:i})):r.createElement(f,s({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},12532:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={slug:"/en/operations/utilities/",sidebar_position:56,sidebar_label:"Overview",pagination_next:"en/operations/utilities/clickhouse-copier"},s="ClickHouse Utilities",a={unversionedId:"en/operations/utilities/index",id:"en/operations/utilities/index",title:"ClickHouse Utilities",description:"-   clickhouse-local \u2014 Allows running SQL queries on data without starting the ClickHouse server, similar to how awk does this.",source:"@site/docs/en/operations/utilities/index.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/",permalink:"/docs/en/operations/utilities/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/index.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{slug:"/en/operations/utilities/",sidebar_position:56,sidebar_label:"Overview",pagination_next:"en/operations/utilities/clickhouse-copier"},sidebar:"english",previous:{title:"Server Settings",permalink:"/docs/en/operations/server-configuration-parameters/settings"},next:{title:"clickhouse-copier",permalink:"/docs/en/operations/utilities/clickhouse-copier"}},l={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"clickhouse-utilities"},"ClickHouse Utilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-local"},"clickhouse-local")," \u2014 Allows running SQL queries on data without starting the ClickHouse server, similar to how ",(0,n.kt)("inlineCode",{parentName:"li"},"awk")," does this."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-copier"},"clickhouse-copier")," \u2014 Copies (and reshards) data from one cluster to another cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-benchmark"},"clickhouse-benchmark")," \u2014 Loads server with the custom queries and settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-format"},"clickhouse-format")," \u2014 Enables formatting input queries."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-obfuscator"},"ClickHouse obfuscator")," \u2014 Obfuscates data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/clickhouse-compressor"},"ClickHouse compressor")," \u2014 Compresses and decompresses data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/en/operations/utilities/odbc-bridge"},"clickhouse-odbc-bridge")," \u2014 A proxy server for ODBC driver.")))}p.isMDXComponent=!0}}]);