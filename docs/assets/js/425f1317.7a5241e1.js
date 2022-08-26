"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86563],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97691:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={slug:"/zh/operations/update",sidebar_position:47,sidebar_label:"\u66f4\u65b0"},u="\u66f4\u65b0",s={unversionedId:"zh/operations/update",id:"zh/operations/update",title:"\u66f4\u65b0",description:"clickhouse-update}",source:"@site/docs/zh/operations/update.md",sourceDirName:"zh/operations",slug:"/zh/operations/update",permalink:"/docs/zh/operations/update",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/update.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{slug:"/zh/operations/update",sidebar_position:47,sidebar_label:"\u66f4\u65b0"},sidebar:"chinese",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/docs/zh/operations/troubleshooting"},next:{title:"\u8bbf\u95ee\u6743\u9650\u548c\u8d26\u6237\u7ba1\u7406",permalink:"/docs/zh/operations/access-rights"}},p={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse-update"},"\u66f4\u65b0"),(0,i.kt)("p",null,"\u5982\u679c\u4ecedeb\u5305\u5b89\u88c5ClickHouse\uff0c\u8bf7\u5728\u670d\u52a1\u5668\u4e0a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install clickhouse-client clickhouse-server\n$ sudo service clickhouse-server restart\n")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u9664\u63a8\u8350\u7684deb\u5305\u4e4b\u5916\u7684\u5176\u4ed6\u65b9\u5f0f\u5b89\u88c5ClickHouse\uff0c\u8bf7\u4f7f\u7528\u9002\u5f53\u7684\u66f4\u65b0\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"ClickHouse\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\u66f4\u65b0\u3002\u8be5\u64cd\u4f5c\u5e94\u5728\u6bcf\u4e2a\u5355\u72ec\u7684\u670d\u52a1\u5668\u4e0a\u8fde\u7eed\u6267\u884c\u3002\u4e0d\u8981\u540c\u65f6\u66f4\u65b0\u7fa4\u96c6\u4e0a\u7684\u6240\u6709\u670d\u52a1\u5668\uff0c\u5426\u5219\u7fa4\u96c6\u5c06\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u4e0d\u53ef\u7528\u3002"))}f.isMDXComponent=!0}}]);