"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[60243],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||a;return n?t.createElement(d,c(c({ref:r},u),{},{components:n})):t.createElement(d,c({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},54613:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const a={slug:"/zh/sql-reference/functions/array-join"},c="arrayJoin\u51fd\u6570",i={unversionedId:"zh/sql-reference/functions/array-join",id:"zh/sql-reference/functions/array-join",title:"arrayJoin\u51fd\u6570",description:"functions_arrayjoin}",source:"@site/docs/zh/sql-reference/functions/array-join.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/array-join",permalink:"/docs/zh/sql-reference/functions/array-join",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/array-join.md",tags:[],version:"current",frontMatter:{slug:"/zh/sql-reference/functions/array-join"},sidebar:"chinese",previous:{title:"\u6570\u7ec4\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/array-functions"},next:{title:"\u4f4d\u64cd\u4f5c\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/bit-functions"}},l={},s=[],u={toc:s},p="wrapper";function f(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"functions_arrayjoin"},"arrayJoin\u51fd\u6570"),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u666e\u901a\u51fd\u6570\u4e0d\u4f1a\u66f4\u6539\u7ed3\u679c\u96c6\u7684\u884c\u6570\uff0c\u800c\u53ea\u662f\u8ba1\u7b97\u6bcf\u884c\u4e2d\u7684\u503c\uff08map\uff09\u3002\n\u805a\u5408\u51fd\u6570\u5c06\u591a\u884c\u538b\u7f29\u5230\u4e00\u884c\u4e2d\uff08fold\u6216reduce\uff09\u3002\n\u2019arrayJoin\u2019\u51fd\u6570\u83b7\u53d6\u6bcf\u4e00\u884c\u5e76\u5c06\u4ed6\u4eec\u5c55\u5f00\u5230\u591a\u884c\uff08unfold\uff09\u3002"),(0,o.kt)("p",null,"\u6b64\u51fd\u6570\u5c06\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u5c06\u8be5\u884c\u5728\u7ed3\u679c\u96c6\u4e2d\u590d\u5236\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u3002\n\u9664\u4e86\u5e94\u7528\u6b64\u51fd\u6570\u7684\u5217\u4e2d\u7684\u503c\u4e4b\u5916\uff0c\u7b80\u5355\u5730\u590d\u5236\u5217\u4e2d\u7684\u6240\u6709\u503c;\u5b83\u88ab\u66ff\u6362\u4e3a\u76f8\u5e94\u7684\u6570\u7ec4\u503c\u3002"),(0,o.kt)("p",null,"\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"arrayJoin"),"\u51fd\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8f6c\u6362\u88ab\u6267\u884c\u591a\u6b21\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610fSELECT\u67e5\u8be2\u4e2d\u7684ARRAY JOIN\u8bed\u6cd5\uff0c\u5b83\u63d0\u4f9b\u4e86\u66f4\u5e7f\u6cdb\u7684\u53ef\u80fd\u6027\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayJoin([1, 2, 3] AS src) AS dst, 'Hello', src\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u250c\u2500dst\u2500\u252c\u2500\\'Hello\\'\u2500\u252c\u2500src\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502   1 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   2 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2502   3 \u2502 Hello     \u2502 [1,2,3] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);