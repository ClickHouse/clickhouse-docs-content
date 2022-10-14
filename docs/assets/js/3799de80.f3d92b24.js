"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[7044],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28636:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={slug:"/zh/getting-started/example-datasets/",sidebar_label:"\u793a\u4f8b\u6570\u636e\u96c6",sidebar_position:12},l="\u793a\u4f8b\u6570\u636e\u96c6",c={unversionedId:"zh/getting-started/example-datasets/index",id:"zh/getting-started/example-datasets/index",title:"\u793a\u4f8b\u6570\u636e\u96c6",description:"example-datasets}",source:"@site/docs/zh/getting-started/example-datasets/index.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/",permalink:"/docs/zh/getting-started/example-datasets/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/index.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{slug:"/zh/getting-started/example-datasets/",sidebar_label:"\u793a\u4f8b\u6570\u636e\u96c6",sidebar_position:12},sidebar:"chinese",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/docs/zh/getting-started/install"},next:{title:"\u82f1\u56fd\u623f\u5730\u4ea7\u652f\u4ed8\u4ef7\u683c",permalink:"/docs/zh/getting-started/example-datasets/uk-price-paid"}},p={},d=[],u={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-datasets"},"\u793a\u4f8b\u6570\u636e\u96c6"),(0,i.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u83b7\u53d6\u793a\u4f8b\u6570\u636e\u96c6\u5e76\u5c06\u5176\u5bfc\u5165ClickHouse\u3002\u5bf9\u4e8e\u67d0\u4e9b\u6570\u636e\u96c6\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528\u793a\u4f8b\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u6570\u636e\u96c6\u793a\u4f8b\u67e5\u8be2\u4e5f\u53ef\u7528\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/metrica"},"Anonymized Yandex.Metrica Dataset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/star-schema"},"Star Schema Benchmark")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/wikistat"},"WikiStat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/criteo"},"Terabyte of Click Logs from Criteo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/amplab-benchmark"},"AMPLab Big Data Benchmark")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/nyc-taxi"},"New York Taxi Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/example-datasets/ontime"},"OnTime"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/example_datasets"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);