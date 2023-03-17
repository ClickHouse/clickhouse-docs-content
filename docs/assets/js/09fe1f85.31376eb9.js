"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[25637,42018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10331:(e,t,r)=>{r.d(t,{ZP:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={toc:[]},i="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(i,(0,o.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,n.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}s.isMDXComponent=!0},79271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),a=r(10331);const i={slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},s=void 0,c={unversionedId:"en/operations/performance-test",id:"en/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages.",source:"@site/docs/en/operations/performance-test.md",sourceDirName:"en/operations",slug:"/en/operations/performance-test",permalink:"/docs/en/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/performance-test.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},sidebar:"docs",previous:{title:"Query Profiling",permalink:"/docs/en/operations/optimizing-performance/sampling-query-profiler"},next:{title:"Utilities",permalink:"/docs/en/operations/utilities/"}},p={},l=[{value:"Automated Run",id:"automated-run",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.ZP,{mdxType:"SelfManaged"}),(0,n.kt)("p",null,"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages."),(0,n.kt)("h2",{id:"automated-run"},"Automated Run"),(0,n.kt)("p",null,"You can run the benchmark with a single script."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the script.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/ClickHouse/ClickBench/main/hardware/hardware.sh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Run the script.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"chmod a+x ./hardware.sh\n./hardware.sh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Copy the output and send it to ",(0,n.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com"))),(0,n.kt)("p",null,"All the results are published here: ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")))}m.isMDXComponent=!0},78734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905)),a=r(79271);const i={slug:"/ru/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},s=void 0,c={unversionedId:"ru/operations/performance-test",id:"ru/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"",source:"@site/docs/ru/operations/performance-test.mdx",sourceDirName:"ru/operations",slug:"/ru/operations/performance-test",permalink:"/docs/ru/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/performance-test.mdx",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/ru/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},sidebar:"russia",previous:{title:"system.zookeeper_log",permalink:"/docs/ru/operations/system-tables/zookeeper_log"},next:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/docs/ru/operations/server-configuration-parameters/"}},p={},l=[],u={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.default,{mdxType:"Content"}))}m.isMDXComponent=!0}}]);