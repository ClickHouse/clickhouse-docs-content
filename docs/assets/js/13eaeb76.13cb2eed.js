"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[70578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(o,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={slug:"/zh/sql-reference/aggregate-functions/reference/quantile",sidebar_position:200},i="quantile",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/quantile",id:"zh/sql-reference/aggregate-functions/reference/quantile",title:"quantile",description:"quantile}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/quantile.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/quantile",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantile",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/quantile.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/quantile",sidebar_position:200},sidebar:"chinese",previous:{title:"uniqTheta",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch"},next:{title:"quantiles",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantiles"}},o={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantile"},"quantile"),(0,a.kt)("p",null,"\u8ba1\u7b97\u6570\u5b57\u5e8f\u5217\u7684\u8fd1\u4f3c",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Quantile"},"\u5206\u4f4d\u6570"),"\u3002\n\u6b64\u51fd\u6570\u5e94\u7528","[\u6c34\u5858\u62bd\u6837][reservoir sampling]"," (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reservoir_sampling)%EF%BC%8C%E4%BD%BF%E7%94%A8%E9%AB%98%E8%BE%BE8192%E7%9A%84%E6%B0%B4%E5%A1%98%E5%A4%A7%E5%B0%8F%E5%92%8C%E9%9A%8F%E6%9C%BA%E6%95%B0%E5%8F%91%E7%94%9F%E5%99%A8%E9%87%87%E6%A0%B7%E3%80%82"},"https://en.wikipedia.org/wiki/Reservoir_sampling)\uff0c\u4f7f\u7528\u9ad8\u8fbe8192\u7684\u6c34\u5858\u5927\u5c0f\u548c\u968f\u673a\u6570\u53d1\u751f\u5668\u91c7\u6837\u3002"),"\n\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002\u8981\u83b7\u5f97\u7cbe\u786e\u7684\u5206\u4f4d\u6570\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantileexact#quantileexact"},"quantileExact")," \u51fd\u6570\u3002\n\u5f53\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u4f7f\u7528\u591a\u4e2a\u4e0d\u540c\u5c42\u6b21\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"quantile*")," \u65f6\uff0c\u5185\u90e8\u72b6\u6001\u4e0d\u4f1a\u88ab\u7ec4\u5408\uff08\u5373\u67e5\u8be2\u7684\u5de5\u4f5c\u6548\u7387\u4f4e\u4e8e\u7ec4\u5408\u60c5\u51b5\uff09\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"quantile(level)(expr)\n")),(0,a.kt)("p",null,"\u522b\u540d: ",(0,a.kt)("inlineCode",{parentName:"p"},"median"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u5206\u4f4d\u6570\u5c42\u6b21\u3002\u53ef\u9009\u53c2\u6570\u3002\u4ece0\u52301\u7684\u4e00\u4e2afloat\u7c7b\u578b\u7684\u5e38\u91cf\u3002\u6211\u4eec\u63a8\u8350 ",(0,a.kt)("inlineCode",{parentName:"li"},"level")," \u503c\u7684\u8303\u56f4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),"\u3002\u9ed8\u8ba4\u503c\uff1a0.5\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u65f6\uff0c\u8be5\u51fd\u6570\u8ba1\u7b97 ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Median"},"\u4e2d\u4f4d\u6570"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expr"),"  \u2014 \u6c42\u503c\u8868\u8fbe\u5f0f\uff0c\u7c7b\u578b\u4e3a\u6570\u503c\u7c7b\u578b",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/#data_types"},"data types"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date")," \u6216 ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u5c42\u6b21\u7684\u5206\u4f4d\u6570\u3002")),(0,a.kt)("p",null,"\u7c7b\u578b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64")," \u7528\u4e8e\u6570\u5b57\u6570\u636e\u7c7b\u578b\u8f93\u5165\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/date"},"Date")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," \u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/datetime"},"DateTime")," \u5982\u679c\u8f93\u5165\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"DateTime")," \u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u8f93\u5165\u8868:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantile(val) FROM t\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantile(val)\u2500\u2510\n\u2502           1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/median#median"},"\u4e2d\u4f4d\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"\u5206\u4f4d\u6570"))))}f.isMDXComponent=!0}}]);