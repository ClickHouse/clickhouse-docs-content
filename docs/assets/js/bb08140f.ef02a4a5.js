"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54980],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),g=a,h=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4514:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={},s="\u5b57\u7b26\u4e32\u62c6\u5206\u5408\u5e76\u51fd\u6570",l={unversionedId:"zh/sql-reference/functions/splitting-merging-functions",id:"zh/sql-reference/functions/splitting-merging-functions",title:"\u5b57\u7b26\u4e32\u62c6\u5206\u5408\u5e76\u51fd\u6570",description:"zi-fu-chuan-chai-fen-he-bing-han-shu}",source:"@site/docs/zh/sql-reference/functions/splitting-merging-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/splitting-merging-functions",permalink:"/docs/zh/sql-reference/functions/splitting-merging-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/splitting-merging-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u53d6\u6574\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/rounding-functions"},next:{title:"\u5b57\u7b26\u4e32\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/string-functions"}},u={},p=[{value:"splitByChar\uff08\u5206\u9694\u7b26\uff0cs)",id:"splitbycharseparator-s",level:2},{value:"splitByString(\u5206\u9694\u7b26\uff0cs)",id:"splitbystringseparator-s",level:2},{value:"arrayStringConcat(arr[,\u5206\u9694\u7b26])",id:"arraystringconcatarr-separator",level:2},{value:"alphaTokens(s)",id:"alphatokenss",level:2}],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zi-fu-chuan-chai-fen-he-bing-han-shu"},"\u5b57\u7b26\u4e32\u62c6\u5206\u5408\u5e76\u51fd\u6570"),(0,i.kt)("h2",{id:"splitbycharseparator-s"},"splitByChar\uff08\u5206\u9694\u7b26\uff0cs)"),(0,i.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u4ee5\u2019separator\u2019\u62c6\u5206\u6210\u591a\u4e2a\u5b50\u4e32\u3002\u2019separator\u2019\u5fc5\u987b\u4e3a\u4ec5\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u5e38\u91cf\u3002\n\u8fd4\u56de\u62c6\u5206\u540e\u7684\u5b50\u4e32\u7684\u6570\u7ec4\u3002 \u5982\u679c\u5206\u9694\u7b26\u51fa\u73b0\u5728\u5b57\u7b26\u4e32\u7684\u5f00\u5934\u6216\u7ed3\u5c3e\uff0c\u6216\u8005\u5982\u679c\u6709\u591a\u4e2a\u8fde\u7eed\u7684\u5206\u9694\u7b26\uff0c\u5219\u5c06\u5728\u5bf9\u5e94\u4f4d\u7f6e\u586b\u5145\u7a7a\u7684\u5b50\u4e32\u3002"),(0,i.kt)("h2",{id:"splitbystringseparator-s"},"splitByString(\u5206\u9694\u7b26\uff0cs)"),(0,i.kt)("p",null,"\u4e0e\u4e0a\u9762\u76f8\u540c\uff0c\u4f46\u5b83\u4f7f\u7528\u591a\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5206\u9694\u7b26\u3002 \u8be5\u5b57\u7b26\u4e32\u5fc5\u987b\u4e3a\u975e\u7a7a\u3002"),(0,i.kt)("h2",{id:"arraystringconcatarr-separator"},"arrayStringConcat(arr","[",",\u5206\u9694\u7b26","]",")"),(0,i.kt)("p",null,"\u4f7f\u7528separator\u5c06\u6570\u7ec4\u4e2d\u5217\u51fa\u7684\u5b57\u7b26\u4e32\u62fc\u63a5\u8d77\u6765\u3002\u2019separator\u2019\u662f\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff1a\u4e00\u4e2a\u5e38\u91cf\u5b57\u7b26\u4e32\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002\n\u8fd4\u56de\u62fc\u63a5\u540e\u7684\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h2",{id:"alphatokenss"},"alphaTokens(s)"),(0,i.kt)("p",null,"\u4ece\u8303\u56f4a-z\u548cA-Z\u4e2d\u9009\u62e9\u8fde\u7eed\u5b57\u8282\u7684\u5b50\u5b57\u7b26\u4e32\u3002\u8fd4\u56de\u5b50\u5b57\u7b26\u4e32\u6570\u7ec4\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT alphaTokens('abca1abc')\n\n\u250c\u2500alphaTokens('abca1abc')\u2500\u2510\n\u2502 ['abca','abc']          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/splitting_merging_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}g.isMDXComponent=!0}}]);