"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[33859],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),g=a,m=f["".concat(i,".").concat(g)]||f[g]||p[g]||o;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},67697:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],l={slug:"/zh/sql-reference/aggregate-functions/",sidebar_label:"\u805a\u5408\u51fd\u6570",sidebar_position:33},i="\u805a\u5408\u51fd\u6570",u={unversionedId:"zh/sql-reference/aggregate-functions/index",id:"zh/sql-reference/aggregate-functions/index",title:"\u805a\u5408\u51fd\u6570",description:"aggregate-functions}",source:"@site/docs/zh/sql-reference/aggregate-functions/index.md",sourceDirName:"zh/sql-reference/aggregate-functions",slug:"/zh/sql-reference/aggregate-functions/",permalink:"/docs/zh/sql-reference/aggregate-functions/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/index.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/",sidebar_label:"\u805a\u5408\u51fd\u6570",sidebar_position:33},sidebar:"chinese",previous:{title:"\u4f7f\u7528 Yandex.Metrica \u5b57\u5178\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/ym-dict-functions"},next:{title:"Reference",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/"}},s={},p=[{value:"\u7a7a\u5904\u7406",id:"null-processing",level:2}],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aggregate-functions"},"\u805a\u5408\u51fd\u6570"),(0,o.kt)("p",null,"\u805a\u5408\u51fd\u6570\u5982\u6570\u636e\u5e93\u4e13\u5bb6\u9884\u671f\u7684\u65b9\u5f0f ",(0,o.kt)("a",{parentName:"p",href:"http://www.sql-tutorial.com/sql-aggregate-functions-sql-tutorial"},"\u6b63\u5e38")," \u5de5\u4f5c\u3002"),(0,o.kt)("p",null,"ClickHouse\u8fd8\u652f\u6301:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/parametric-functions#aggregate_functions_parametric"},"\u53c2\u6570\u805a\u5408\u51fd\u6570"),"\uff0c\u5b83\u63a5\u53d7\u9664\u5217\u4e4b\u5916\u7684\u5176\u4ed6\u53c2\u6570\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/combinators#aggregate_functions_combinators"},"\u7ec4\u5408\u5668"),"\uff0c\u8fd9\u6539\u53d8\u4e86\u805a\u5408\u51fd\u6570\u7684\u884c\u4e3a\u3002")),(0,o.kt)("h2",{id:"null-processing"},"\u7a7a\u5904\u7406"),(0,o.kt)("p",null,"\u5728\u805a\u5408\u8fc7\u7a0b\u4e2d\uff0c\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," \u88ab\u8df3\u8fc7\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f8b:")),(0,o.kt)("p",null,"\u8003\u8651\u8fd9\u4e2a\u8868:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502    2 \u2502\n\u2502 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 3 \u2502    2 \u2502\n\u2502 3 \u2502    3 \u2502\n\u2502 3 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u6bd4\u65b9\u8bf4\uff0c\u4f60\u9700\u8981\u8ba1\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," \u5217\u7684\u603b\u6570:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(y) FROM t_null_big\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500sum(y)\u2500\u2510\n\u2502      7 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray")," \u51fd\u6570\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," \u5217\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArray(y) FROM t_null_big\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArray(y)\u2500\u2510\n\u2502 [2,2,3]       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"groupArray")," \u751f\u6210\u7684\u6570\u7ec4\u4e2d\u4e0d\u5305\u62ec ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/agg_functions/"},"\u539f\u59cb\u6587\u7ae0")," "))}g.isMDXComponent=!0}}]);