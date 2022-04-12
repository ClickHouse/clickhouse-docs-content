"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59232],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,m=g["".concat(c,".").concat(f)]||g[f]||p[f]||i;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},33893:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={},c="Log",u={unversionedId:"zh/engines/table-engines/log-family/log",id:"zh/engines/table-engines/log-family/log",title:"Log",description:"log}",source:"@site/docs/zh/engines/table-engines/log-family/log.md",sourceDirName:"zh/engines/table-engines/log-family",slug:"/zh/engines/table-engines/log-family/log",permalink:"/zh/engines/table-engines/log-family/log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/engines/table-engines/log-family/log.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",permalink:"/zh/engines/table-engines/log-family/"},next:{title:"StripeLog",permalink:"/zh/engines/table-engines/log-family/stripelog"}},s={},p=[],g={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"log"},"Log"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Log")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\xab\u6807\u8bb0\xbb \u7684\u5c0f\u6587\u4ef6\u4e0e\u5217\u6587\u4ef6\u5b58\u5728\u4e00\u8d77\u3002\u8fd9\u4e9b\u6807\u8bb0\u5199\u5728\u6bcf\u4e2a\u6570\u636e\u5757\u4e0a\uff0c\u5e76\u4e14\u5305\u542b\u504f\u79fb\u91cf\uff0c\u8fd9\u4e9b\u504f\u79fb\u91cf\u6307\u793a\u4ece\u54ea\u91cc\u5f00\u59cb\u8bfb\u53d6\u6587\u4ef6\u4ee5\u4fbf\u8df3\u8fc7\u6307\u5b9a\u7684\u884c\u6570\u3002\u8fd9\u4f7f\u5f97\u53ef\u4ee5\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u8bfb\u53d6\u8868\u6570\u636e\u3002\u5bf9\u4e8e\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\uff0c\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u8bfb\u53d6\u64cd\u4f5c\uff0c\u800c\u5199\u5165\u64cd\u4f5c\u5219\u963b\u585e\u8bfb\u53d6\u548c\u5176\u5b83\u5199\u5165\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Log"),"\u5f15\u64ce\u4e0d\u652f\u6301\u7d22\u5f15\u3002\u540c\u6837\uff0c\u5982\u679c\u5199\u5165\u8868\u5931\u8d25\uff0c\u5219\u8be5\u8868\u5c06\u88ab\u7834\u574f\uff0c\u5e76\u4e14\u4ece\u8be5\u8868\u8bfb\u53d6\u5c06\u8fd4\u56de\u9519\u8bef\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Log"),"\u5f15\u64ce\u9002\u7528\u4e8e\u4e34\u65f6\u6570\u636e\uff0cwrite-once \u8868\u4ee5\u53ca\u6d4b\u8bd5\u6216\u6f14\u793a\u76ee\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/table_engines/log/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);