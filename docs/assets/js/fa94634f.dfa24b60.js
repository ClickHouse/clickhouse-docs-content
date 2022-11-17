"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,g=m["".concat(u,".").concat(f)]||m[f]||c[f]||s;return n?r.createElement(g,p(p({ref:t},l),{},{components:n})):r.createElement(g,p({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,p=new Array(s);p[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<s;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/zh/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},p="sumMap",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/summap",id:"zh/sql-reference/aggregate-functions/reference/summap",title:"sumMap",description:"agg_functions-summap}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/summap.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/summap",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/summap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/summap.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/summap",sidebar_position:141},sidebar:"chinese",previous:{title:"deltaSumTimestamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/deltasumtimestamp"},next:{title:"minMap",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/minmap"}},u={},i=[],l={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-summap"},"sumMap"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"sumMap(key, value)\n\u6216\nsumMap(Tuple(key, value))\n")),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u952e\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u8fdb\u884c\u6c42\u548c\u3002"),(0,a.kt)("p",null,"\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u7684\u5143\u7ec4\u4e0e\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u4e24\u4e2a\u6570\u7ec4\u662f\u540c\u4e49\u7684\u3002\n\u8981\u603b\u8ba1\u7684\u6bcf\u4e00\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," (\u6570\u7ec4)\u5143\u7d20\u7684\u6570\u91cf\u5fc5\u987b\u76f8\u540c\u3002\n\u8fd4\u56de\u4e24\u4e2a\u6570\u7ec4\u7ec4\u6210\u7684\u4e00\u4e2a\u5143\u7ec4: \u6392\u597d\u5e8f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u4e4b\u548c\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sum_map(\n    date Date,\n    timeslot DateTime,\n    statusMap Nested(\n        status UInt16,\n        requests UInt64\n    ),\n    statusMapTuple Tuple(Array(Int32), Array(Int32))\n) ENGINE = Log;\nINSERT INTO sum_map VALUES\n    ('2000-01-01', '2000-01-01 00:00:00', [1, 2, 3], [10, 10, 10], ([1, 2, 3], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:00:00', [3, 4, 5], [10, 10, 10], ([3, 4, 5], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [4, 5, 6], [10, 10, 10], ([4, 5, 6], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [6, 7, 8], [10, 10, 10], ([6, 7, 8], [10, 10, 10]));\n\nSELECT\n    timeslot,\n    sumMap(statusMap.status, statusMap.requests),\n    sumMap(statusMapTuple)\nFROM sum_map\nGROUP BY timeslot\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timeslot\u2500\u252c\u2500sumMap(statusMap.status, statusMap.requests)\u2500\u252c\u2500sumMap(statusMapTuple)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2000-01-01 00:00:00 \u2502 ([1,2,3,4,5],[10,10,20,10,10])               \u2502 ([1,2,3,4,5],[10,10,20,10,10]) \u2502\n\u2502 2000-01-01 00:01:00 \u2502 ([4,5,6,7,8],[10,10,20,10,10])               \u2502 ([4,5,6,7,8],[10,10,20,10,10]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}c.isMDXComponent=!0}}]);