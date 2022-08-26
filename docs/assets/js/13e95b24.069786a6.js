"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38134],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,m=p["".concat(u,".").concat(g)]||p[g]||f[g]||c;return n?t.createElement(m,a(a({ref:r},l),{},{components:n})):t.createElement(m,a({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5754:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var t=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={slug:"/zh/sql-reference/aggregate-functions/reference/corr",sidebar_position:107},u="corr",s={unversionedId:"zh/sql-reference/aggregate-functions/reference/corr",id:"zh/sql-reference/aggregate-functions/reference/corr",title:"corr",description:"corrx-y}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/corr.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/corr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/corr",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/corr.md",tags:[],version:"current",sidebarPosition:107,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/corr",sidebar_position:107},sidebar:"chinese",previous:{title:"avgWeighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/avgweighted"},next:{title:"topK",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topk"}},l={},f=[],p={toc:f};function g(e){var r=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"corrx-y"},"corr"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"`corr(x, y)`\n")),(0,c.kt)("p",null,"\u8ba1\u7b97Pearson\u76f8\u5173\u7cfb\u6570: ",(0,c.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / sqrt(\u03a3((x - x\u0305)^2) * \u03a3((y - y\u0305)^2))"),"\u3002"),(0,c.kt)("p",null,'!!! note "\u6ce8"\n\u8be5\u51fd\u6570\u4f7f\u7528\u6570\u503c\u4e0d\u7a33\u5b9a\u7684\u7b97\u6cd5\u3002 \u5982\u679c\u4f60\u9700\u8981 ',(0,c.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"\u6570\u503c\u7a33\u5b9a\u6027")," \u5728\u8ba1\u7b97\u4e2d\uff0c\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"corrStable")," \u51fd\u6570\u3002 \u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u8f83\u6162\uff0c\u4f46\u63d0\u4f9b\u8f83\u4f4e\u7684\u8ba1\u7b97\u9519\u8bef\u3002"))}g.isMDXComponent=!0}}]);