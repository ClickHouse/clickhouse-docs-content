"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[42018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10331:(e,t,r)=>{r.d(t,{ZP:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={toc:[]},i="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(i,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page is not applicable to ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/cloud"},"ClickHouse Cloud"),". The feature documented here is not available in ClickHouse Cloud services.\nSee the ClickHouse ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility")," guide for more information.")))}c.isMDXComponent=!0},79271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(10331);const i={slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},c=void 0,s={unversionedId:"en/operations/performance-test",id:"en/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages.",source:"@site/docs/en/operations/performance-test.md",sourceDirName:"en/operations",slug:"/en/operations/performance-test",permalink:"/docs/en/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/performance-test.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/operations/performance-test",sidebar_position:54,sidebar_label:"Testing Hardware",title:"How to Test Your Hardware with ClickHouse"},sidebar:"docs",previous:{title:"Query Profiling",permalink:"/docs/en/operations/optimizing-performance/sampling-query-profiler"},next:{title:"Utilities",permalink:"/docs/en/operations/utilities/"}},l={},p=[{value:"Automated Run",id:"automated-run",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.ZP,{mdxType:"SelfManaged"}),(0,o.kt)("p",null,"You can run a basic ClickHouse performance test on any server without installation of ClickHouse packages."),(0,o.kt)("h2",{id:"automated-run"},"Automated Run"),(0,o.kt)("p",null,"You can run the benchmark with a single script."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/ClickHouse/ClickBench/main/hardware/hardware.sh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod a+x ./hardware.sh\n./hardware.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy the output and send it to ",(0,o.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com"))),(0,o.kt)("p",null,"All the results are published here: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")))}d.isMDXComponent=!0}}]);