"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[51845],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,g=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?t.createElement(g,c(c({ref:n},s),{},{components:r})):t.createElement(g,c({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75772:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},c="maxMap",p={unversionedId:"zh/sql-reference/aggregate-functions/reference/maxmap",id:"zh/sql-reference/aggregate-functions/reference/maxmap",title:"maxMap",description:"agg_functions-maxmap}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/maxmap.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/maxmap",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/maxmap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/maxmap.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/maxmap",sidebar_position:143},sidebar:"chinese",previous:{title:"minMap",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/minmap"},next:{title:"sumCount",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/sumcount"}},i={},l=[],s={toc:l},u="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_functions-maxmap"},"maxMap"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"maxMap(key, value)\n \u6216\nmaxMap(Tuple(key, value))\n")),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u952e\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u8ba1\u7b97\u6700\u5927\u503c\u3002"),(0,a.kt)("p",null,"\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u7684\u5143\u7ec4\u4e0e\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u4e24\u4e2a\u6570\u7ec4\u662f\u540c\u4e49\u7684\u3002\n\u8981\u603b\u8ba1\u7684\u6bcf\u4e00\u884c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," (\u6570\u7ec4)\u5143\u7d20\u7684\u6570\u91cf\u5fc5\u987b\u76f8\u540c\u3002\n\u8fd4\u56de\u4e24\u4e2a\u6570\u7ec4\u7ec4\u6210\u7684\u5143\u7ec4: \u6392\u597d\u5e8f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u548c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u8ba1\u7b97\u503c(\u6700\u5927\u503c)\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxMap(a, b)\nFROM values('a Array(Int32), b Array(Int64)', ([1, 2], [2, 2]), ([2, 3], [1, 1]))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500maxMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3],[2,2,1]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);