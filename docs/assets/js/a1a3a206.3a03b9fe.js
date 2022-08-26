"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87660],{3905:function(e,t,n){n.d(t,{Zo:function(){return x},kt:function(){return f}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},x=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,x=a(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,d=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return n?l.createElement(d,o(o({ref:t},x),{},{components:n})):l.createElement(d,o({ref:t},x))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},56149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var l=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],a={slug:"/zh/sql-reference/functions/math-functions"},u="\u6570\u5b66\u51fd\u6570",c={unversionedId:"zh/sql-reference/functions/math-functions",id:"zh/sql-reference/functions/math-functions",title:"\u6570\u5b66\u51fd\u6570",description:"shu-xue-han-shu}",source:"@site/docs/zh/sql-reference/functions/math-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/math-functions",permalink:"/docs/zh/sql-reference/functions/math-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/math-functions.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/math-functions"},sidebar:"chinese",previous:{title:"\u673a\u5668\u5b66\u4e60\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/machine-learning-functions"},next:{title:"\u5176\u4ed6\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/other-functions"}},x={},p=[{value:"e()",id:"e",level:2},{value:"pi()",id:"pi",level:2},{value:"exp(x)",id:"expx",level:2},{value:"log(x),ln(x)",id:"logx-lnx",level:2},{value:"exp2(x)",id:"exp2x",level:2},{value:"log2(x)",id:"log2x",level:2},{value:"exp10(x)",id:"exp10x",level:2},{value:"log10(x)",id:"log10x",level:2},{value:"sqrt(x)",id:"sqrtx",level:2},{value:"cbrt(x)",id:"cbrtx",level:2},{value:"erf(x)",id:"erfx",level:2},{value:"erfc(x)",id:"erfcx",level:2},{value:"lgamma(x)",id:"lgammax",level:2},{value:"tgamma(x)",id:"tgammax",level:2},{value:"sin(x)",id:"sinx",level:2},{value:"cos(x)",id:"cosx",level:2},{value:"tan(x)",id:"tanx",level:2},{value:"asin(x)",id:"asinx",level:2},{value:"acos(x)",id:"acosx",level:2},{value:"atan(x)",id:"atanx",level:2},{value:"pow(x,y),power(x,y)",id:"powx-y-powerx-y",level:2},{value:"intExp2",id:"intexp2",level:2},{value:"intExp10",id:"intexp10",level:2}],s={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shu-xue-han-shu"},"\u6570\u5b66\u51fd\u6570"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u6240\u6709\u7684\u51fd\u6570\u90fd\u8fd4\u56de\u4e00\u4e2aFloat64\u7c7b\u578b\u7684\u6570\u503c\u3002\u8fd4\u56de\u7ed3\u679c\u603b\u662f\u4ee5\u5c3d\u53ef\u80fd\u6700\u5927\u7cbe\u5ea6\u8fd4\u56de\uff0c\u4f46\u8fd8\u662f\u53ef\u80fd\u4e0e\u673a\u5668\u4e2d\u53ef\u8868\u793a\u6700\u63a5\u8fd1\u8be5\u503c\u7684\u6570\u5b57\u4e0d\u540c\u3002"),(0,i.kt)("h2",{id:"e"},"e()"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u63a5\u8fd1\u6570\u5b66\u5e38\u91cfe\u7684Float64\u6570\u5b57\u3002"),(0,i.kt)("h2",{id:"pi"},"pi()"),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u63a5\u8fd1\u6570\u5b66\u5e38\u91cf\u03c0\u7684Float64\u6570\u5b57\u3002"),(0,i.kt)("h2",{id:"expx"},"exp(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u6307\u6570\u3002"),(0,i.kt)("h2",{id:"logx-lnx"},"log(x),ln(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u81ea\u7136\u5bf9\u6570\u3002"),(0,i.kt)("h2",{id:"exp2x"},"exp2(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u76842\u7684x\u6b21\u5e42\u3002"),(0,i.kt)("h2",{id:"log2x"},"log2(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u5e952\u5bf9\u6570\u3002"),(0,i.kt)("h2",{id:"exp10x"},"exp10(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u768410\u7684x\u6b21\u5e42\u3002"),(0,i.kt)("h2",{id:"log10x"},"log10(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u5e9510\u5bf9\u6570\u3002"),(0,i.kt)("h2",{id:"sqrtx"},"sqrt(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u5e73\u65b9\u6839\u3002"),(0,i.kt)("h2",{id:"cbrtx"},"cbrt(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u7684\u7acb\u65b9\u6839\u3002"),(0,i.kt)("h2",{id:"erfx"},"erf(x)"),(0,i.kt)("p",null,"\u5982\u679c\u2019x\u2019\u662f\u975e\u8d1f\u6570\uff0c\u90a3\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"erf(x / \u03c3\u221a2)"),"\u662f\u5177\u6709\u6b63\u6001\u5206\u5e03\u4e14\u6807\u51c6\u504f\u5dee\u4e3a\xab\u03c3\xbb\u7684\u968f\u673a\u53d8\u91cf\u7684\u503c\u4e0e\u9884\u671f\u503c\u4e4b\u95f4\u7684\u8ddd\u79bb\u5927\u4e8e\xabx\xbb\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b \uff08\u4e09\u897f\u683c\u739b\u51c6\u5219\uff09:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT erf(3 / sqrt(2))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500erf(divide(3, sqrt(2)))\u2500\u2510\n\u2502      0.9973002039367398 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"erfcx"},"erfc(x)"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u53c2\u6570\u5e76\u8fd4\u56de\u4e00\u4e2a\u63a5\u8fd11 - erf(x)\u7684Float64\u6570\u5b57\uff0c\u4f46\u4e0d\u4f1a\u4e22\u5931\u5927\xabx\xbb\u503c\u7684\u7cbe\u5ea6\u3002"),(0,i.kt)("h2",{id:"lgammax"},"lgamma(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u7edd\u5bf9\u503c\u7684\u81ea\u7136\u5bf9\u6570\u7684\u4f3d\u739b\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"tgammax"},"tgamma(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u4f3d\u739b\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"sinx"},"sin(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u4e09\u89d2\u6b63\u5f26\u503c\u3002"),(0,i.kt)("h2",{id:"cosx"},"cos(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u4e09\u89d2\u4f59\u5f26\u503c\u3002"),(0,i.kt)("h2",{id:"tanx"},"tan(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u4e09\u89d2\u6b63\u5207\u503c\u3002"),(0,i.kt)("h2",{id:"asinx"},"asin(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u53cd\u4e09\u89d2\u6b63\u5f26\u503c\u3002"),(0,i.kt)("h2",{id:"acosx"},"acos(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u53cd\u4e09\u89d2\u4f59\u5f26\u503c\u3002"),(0,i.kt)("h2",{id:"atanx"},"atan(x)"),(0,i.kt)("p",null,"\u8fd4\u56dex\u7684\u53cd\u4e09\u89d2\u6b63\u5207\u503c\u3002"),(0,i.kt)("h2",{id:"powx-y-powerx-y"},"pow(x,y),power(x,y)"),(0,i.kt)("p",null,"\u63a5\u53d7x\u548cy\u4e24\u4e2a\u53c2\u6570\u3002\u8fd4\u56dex\u7684y\u6b21\u65b9\u3002"),(0,i.kt)("h2",{id:"intexp2"},"intExp2"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u76842\u7684x\u6b21\u5e42\uff08UInt64\uff09\u3002"),(0,i.kt)("h2",{id:"intexp10"},"intExp10"),(0,i.kt)("p",null,"\u63a5\u53d7\u4e00\u4e2a\u6570\u503c\u7c7b\u578b\u7684\u53c2\u6570\u5e76\u8fd4\u56de\u5b83\u768410\u7684x\u6b21\u5e42\uff08UInt64\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/math_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);