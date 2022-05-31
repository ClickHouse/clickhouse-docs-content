"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16755],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],l={sidebar_position:38,sidebar_label:"FUNCTION"},u="CREATE FUNCTION",i={unversionedId:"zh/sql-reference/statements/create/function",id:"zh/sql-reference/statements/create/function",title:"CREATE FUNCTION",description:"create-function}",source:"@site/docs/zh/sql-reference/statements/create/function.md",sourceDirName:"zh/sql-reference/statements/create",slug:"/zh/sql-reference/statements/create/function",permalink:"/docs/zh/sql-reference/statements/create/function",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/create/function.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"FUNCTION"},sidebar:"chinese",previous:{title:"DICTIONARY",permalink:"/docs/zh/sql-reference/statements/create/dictionary"},next:{title:"USER",permalink:"/docs/zh/sql-reference/statements/create/user"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-function"},"CREATE FUNCTION"),(0,o.kt)("p",null,"\u7528\u4e00\u4e2alambda\u8868\u8fbe\u5f0f\u521b\u5efa\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u8be5\u8868\u8fbe\u5f0f\u5fc5\u987b\u7531\u51fd\u6570\u53c2\u6570\u3001\u5e38\u6570\u3001\u8fd0\u7b97\u7b26\u6216\u5176\u4ed6\u51fd\u6570\u8c03\u7528\u7ec4\u6210\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION name AS (parameter0, ...) -> expression\n")),(0,o.kt)("p",null,"\u4e00\u4e2a\u51fd\u6570\u53ef\u4ee5\u6709\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u5b58\u5728\u4e00\u4e9b\u9650\u5236\u5982\u4e0b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51fd\u6570\u540d\u5728\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u548c\u7cfb\u7edf\u51fd\u6570\u4e2d\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9012\u5f52\u51fd\u6570\u662f\u4e0d\u5141\u8bb8\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u51fd\u6570\u6240\u4f7f\u7528\u7684\u6240\u6709\u53d8\u91cf\u5fc5\u987b\u5728\u5176\u53c2\u6570\u5217\u8868\u4e2d\u6307\u5b9a\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u8fdd\u53cd\u4e86\u4efb\u4f55\u9650\u5236\uff0c\u5c31\u4f1a\u4ea7\u751f\u5f02\u5e38\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nSELECT number, linear_equation(number, 2, 1) FROM numbers(3);\n")),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500plus(multiply(2, number), 1)\u2500\u2510\n\u2502      0 \u2502                            1 \u2502\n\u2502      1 \u2502                            3 \u2502\n\u2502      2 \u2502                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u67e5\u8be2\u4e2d\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/conditional-functions"},"conditional function"),"\u5728\u7528\u6237\u81ea\u5b9a\u4e49\u51fd\u6570\u4e2d\u88ab\u8c03\u7528:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION parity_str AS (n) -> if(n % 2, 'odd', 'even');\nSELECT number, parity_str(number) FROM numbers(3);\n")),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500if(modulo(number, 2), 'odd', 'even')\u2500\u2510\n\u2502      0 \u2502 even                                 \u2502\n\u2502      1 \u2502 odd                                  \u2502\n\u2502      2 \u2502 even                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);