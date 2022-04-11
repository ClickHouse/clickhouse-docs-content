"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8817],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"\u5173\u4e8e\u96c6\u6210ClickHouse\u548c\u5176\u4ed6\u7cfb\u7edf\u7684\u95ee\u9898",toc_hidden_folder:!0,sidebar_position:4,sidebar_label:"Integration"},l=void 0,u={unversionedId:"zh/faq/integration/index",id:"zh/faq/integration/index",title:"\u5173\u4e8e\u96c6\u6210ClickHouse\u548c\u5176\u4ed6\u7cfb\u7edf\u7684\u95ee\u9898",description:"question-about-integrating-clickhouse-and-other-systems}",source:"@site/docs/zh/faq/integration/index.md",sourceDirName:"zh/faq/integration",slug:"/zh/faq/integration/",permalink:"/zh/faq/integration/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/faq/integration/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5173\u4e8e\u96c6\u6210ClickHouse\u548c\u5176\u4ed6\u7cfb\u7edf\u7684\u95ee\u9898",toc_hidden_folder:!0,sidebar_position:4,sidebar_label:"Integration"},sidebar:"chinese",previous:{title:"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?",permalink:"/zh/faq/operations/multi-region-replication"},next:{title:"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?",permalink:"/zh/faq/integration/file-export"}},s={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"question-about-integrating-clickhouse-and-other-systems"},"\u5173\u4e8e\u96c6\u6210ClickHouse\u548c\u5176\u4ed6\u7cfb\u7edf\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u95ee\u9898:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/faq/integration/file-export"},"\u5982\u4f55\u4ece ClickHouse \u5bfc\u51fa\u6570\u636e\u5230\u4e00\u4e2a\u6587\u4ef6?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/faq/integration/json-import"},"\u5982\u4f55\u5bfc\u5165JSON\u5230ClickHouse?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/faq/integration/oracle-odbc"},"\u5982\u679c\u6211\u7528ODBC\u94fe\u63a5Oracle\u6570\u636e\u5e93\u51fa\u73b0\u7f16\u7801\u95ee\u9898\u8be5\u600e\u4e48\u529e?"))),(0,o.kt)("p",null,'!!! info "\u6ca1\u770b\u5230\u4f60\u8981\u627e\u7684\u4e1c\u897f\u5417?"\n\u67e5\u770b',(0,o.kt)("a",{parentName:"p",href:"../../faq/"},"\u5176\u4ed6faq\u7c7b\u522b"),"\u6216\u6d4f\u89c8\u5de6\u8fb9\u680f\u4e2d\u7684\u4e3b\u8981\u6587\u6863\u6587\u7ae0\u3002"),(0,o.kt)("p",null,"{## ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/faq/integration/"},"\u539f\u6587")," ##}"))}d.isMDXComponent=!0}}]);