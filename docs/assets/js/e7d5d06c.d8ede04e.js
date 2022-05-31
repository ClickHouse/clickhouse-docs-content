"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96866],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24774:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"\u5173\u4e8e\u64cd\u4f5cClickHouse\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u7684\u95ee\u9898",toc_hidden_folder:!0,sidebar_position:3,sidebar_label:"Operations"},s="\u5173\u4e8e\u64cd\u4f5cClickHouse\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u7684\u95ee\u9898",u={unversionedId:"zh/faq/operations/index",id:"zh/faq/operations/index",title:"\u5173\u4e8e\u64cd\u4f5cClickHouse\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u7684\u95ee\u9898",description:"question-about-operating-clickhouse-servers-and-clusters}",source:"@site/docs/zh/faq/operations/index.md",sourceDirName:"zh/faq/operations",slug:"/zh/faq/operations/",permalink:"/docs/zh/faq/operations/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/faq/operations/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u5173\u4e8e\u64cd\u4f5cClickHouse\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u7684\u95ee\u9898",toc_hidden_folder:!0,sidebar_position:3,sidebar_label:"Operations"},sidebar:"chinese",previous:{title:"\u6211\u80fd\u628a ClickHouse \u5f53\u505a\u65f6\u5e8f\u6570\u636e\u5e93\u6765\u4f7f\u7528\u5417?",permalink:"/docs/zh/faq/use-cases/time-series"},next:{title:"Which ClickHouse version to use in production?",permalink:"/docs/zh/faq/operations/production"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"question-about-operating-clickhouse-servers-and-clusters"},"\u5173\u4e8e\u64cd\u4f5cClickHouse\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u7684\u95ee\u9898"),(0,i.kt)("p",null,"\u95ee\u9898:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/faq/operations/production"},"\u5982\u679c\u60f3\u5728\u751f\u4ea7\u73af\u5883\u90e8\u7f72\uff0c\u9700\u8981\u7528\u54ea\u4e2a\u7248\u672c\u7684 ClickHouse \u5462?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/faq/operations/delete-old-data"},"\u662f\u5426\u53ef\u80fd\u4ece ClickHouse \u6570\u636e\u8868\u4e2d\u5220\u9664\u6240\u6709\u65e7\u7684\u6570\u636e\u8bb0\u5f55?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/faq/operations/multi-region-replication"},"ClickHouse\u652f\u6301\u591a\u533a\u57df\u590d\u5236\u5417?"))),(0,i.kt)("p",null,'!!! info "\u6ca1\u770b\u5230\u4f60\u8981\u627e\u7684\u4e1c\u897f\u5417?"\n\u67e5\u770b',(0,i.kt)("a",{parentName:"p",href:"../../faq/"},"\u5176\u4ed6faq\u7c7b\u522b"),"\u6216\u6d4f\u89c8\u5de6\u8fb9\u680f\u4e2d\u7684\u4e3b\u8981\u6587\u6863\u6587\u7ae0\u3002"),(0,i.kt)("p",null,"{## ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/faq/production/"},"\u539f\u6587")," ##}"))}d.isMDXComponent=!0}}]);