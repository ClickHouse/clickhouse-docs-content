"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[30810],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),i=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),y=a,g=p["".concat(s,".").concat(y)]||p[y]||f[y]||o;return r?t.createElement(g,c(c({ref:n},u),{},{components:r})):t.createElement(g,c({ref:n},u))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var t=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/anyheavy",sidebar_position:103},c="anyHeavy",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/anyheavy",id:"zh/sql-reference/aggregate-functions/reference/anyheavy",title:"anyHeavy",description:"anyheavyx}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/anyheavy.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/anyheavy",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/anyheavy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/anyheavy.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/anyheavy",sidebar_position:103},sidebar:"chinese",previous:{title:"covarSamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/covarsamp"},next:{title:"anylast",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/anylast"}},s={},i=[],u={toc:i},p="wrapper";function f(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anyheavyx"},"anyHeavy"),(0,a.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u9891\u7e41\u51fa\u73b0\u7684\u503c\uff0c\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://doi.org/10.1145/762471.762473"},"heavy hitters")," \u7b97\u6cd5\u3002 \u5982\u679c\u67d0\u4e2a\u503c\u5728\u67e5\u8be2\u7684\u6bcf\u4e2a\u6267\u884c\u7ebf\u7a0b\u4e2d\u51fa\u73b0\u7684\u60c5\u51b5\u8d85\u8fc7\u4e00\u534a\uff0c\u5219\u8fd4\u56de\u6b64\u503c\u3002 \u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"anyHeavy(column)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column")," \u2013 The column name\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/getting-started/example-datasets/ontime"},"OnTime")," \u6570\u636e\u96c6\uff0c\u5e76\u9009\u62e9\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"AirlineID")," \u5217\u4efb\u4f55\u9891\u7e41\u51fa\u73b0\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT anyHeavy(AirlineID) AS res\nFROM ontime;\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500res\u2500\u2510\n\u2502 19690 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);