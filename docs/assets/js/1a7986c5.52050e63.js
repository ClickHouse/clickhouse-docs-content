"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[25973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||g[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/zh/sql-reference/aggregate-functions/reference/topkweighted",sidebar_position:109},i="topKWeighted",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/topkweighted",id:"zh/sql-reference/aggregate-functions/reference/topkweighted",title:"topKWeighted",description:"topkweighted}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/topkweighted.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/topkweighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topkweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/topkweighted.md",tags:[],version:"current",sidebarPosition:109,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/topkweighted",sidebar_position:109},sidebar:"chinese",previous:{title:"topK",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topk"},next:{title:"groupArray",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/grouparray"}},p={},c=[],s={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topkweighted"},"topKWeighted"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"topK"),"  \u4f46\u9700\u8981\u4e00\u4e2a\u6574\u6570\u7c7b\u578b\u7684\u9644\u52a0\u53c2\u6570 - ",(0,a.kt)("inlineCode",{parentName:"p"},"weight"),"\u3002 \u6bcf\u4e2a\u8f93\u5165\u90fd\u88ab\u8bb0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"weight")," \u6b21\u9891\u7387\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"topKWeighted(N)(x, weight)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"N")," \u2014 \u8981\u8fd4\u56de\u7684\u5143\u7d20\u6570\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2013 (\u8981\u8ba1\u7b97\u9891\u6b21\u7684)\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 \u6743\u91cd\u3002 ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),"\u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u8fd4\u56de\u5177\u6709\u6700\u5927\u8fd1\u4f3c\u6743\u91cd\u603b\u548c\u7684\u503c\u6570\u7ec4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT topKWeighted(10)(number, number) FROM numbers(1000)\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500topKWeighted(10)(number, number)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [999,998,997,996,995,994,993,992,991,990] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);