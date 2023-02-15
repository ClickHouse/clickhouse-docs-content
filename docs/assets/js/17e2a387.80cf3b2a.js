"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[97315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=s,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={slug:"/zh/operations/system-tables/functions"},a="system.functions",i={unversionedId:"zh/operations/system-tables/functions",id:"zh/operations/system-tables/functions",title:"system.functions",description:"system-functions}",source:"@site/docs/zh/operations/system-tables/functions.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/functions",permalink:"/docs/zh/operations/system-tables/functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/functions"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u6d3b\u52a8",permalink:"/docs/zh/operations/system-tables/events"},next:{title:"system.grants",permalink:"/docs/zh/operations/system-tables/grants"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-functions"},"system.functions"),(0,s.kt)("p",null,"\u5305\u542b\u6709\u5173\u5e38\u89c4\u51fd\u6570\u548c\u805a\u5408\u51fd\u6570\u7684\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u5217:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"String"),") \u2013 The name of the function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_aggregate"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"UInt8"),") \u2014 Whether the function is aggregate.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e3e\u4f8b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," SELECT * FROM system.functions LIMIT 10;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500is_aggregate\u2500\u252c\u2500case_insensitive\u2500\u252c\u2500alias_to\u2500\u2510\n\u2502 sumburConsistentHash     \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 kostikConsistentHash     \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 demangle                 \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 addressToLine            \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractRaw           \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractKeysAndValues \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtract              \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractString        \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractFloat         \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractInt           \u2502            0 \u2502                0 \u2502          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.002 sec.\n")))}m.isMDXComponent=!0}}]);