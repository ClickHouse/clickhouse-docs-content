"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[10052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),g=a,m=s["".concat(o,".").concat(g)]||s[g]||f[g]||i;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const i={slug:"/zh/sql-reference/aggregate-functions/reference/uniq",sidebar_position:190},c="uniq",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniq",id:"zh/sql-reference/aggregate-functions/reference/uniq",title:"uniq",description:"agg_function-uniq}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniq.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniq",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniq",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniq.md",tags:[],version:"current",sidebarPosition:190,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/uniq",sidebar_position:190},sidebar:"chinese",previous:{title:"kurtSamp",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/kurtsamp"},next:{title:"uniqExact",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqexact"}},o={},u=[],p={toc:u},s="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-uniq"},"uniq"),(0,a.kt)("p",null,"\u8ba1\u7b97\u53c2\u6570\u7684\u4e0d\u540c\u503c\u7684\u8fd1\u4f3c\u6570\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"uniq(x[, ...])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u3002 \u53c2\u6570\u53ef\u4ee5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", \u6216\u6570\u5b57\u7c7b\u578b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64")," \u7c7b\u578b\u6570\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u7ec6\u8282")),(0,a.kt)("p",null,"\u529f\u80fd:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8ba1\u7b97\u805a\u5408\u4e2d\u6240\u6709\u53c2\u6570\u7684\u54c8\u5e0c\u503c\uff0c\u7136\u540e\u5728\u8ba1\u7b97\u4e2d\u4f7f\u7528\u5b83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u81ea\u9002\u5e94\u91c7\u6837\u7b97\u6cd5\u3002 \u5bf9\u4e8e\u8ba1\u7b97\u72b6\u6001\uff0c\u8be5\u51fd\u6570\u4f7f\u7528\u6700\u591a65536\u4e2a\u5143\u7d20\u54c8\u5e0c\u503c\u7684\u6837\u672c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u7b97\u6cd5\u662f\u975e\u5e38\u7cbe\u786e\u7684\uff0c\u5e76\u4e14\u5bf9\u4e8eCPU\u6765\u8bf4\u975e\u5e38\u9ad8\u6548\u3002\u5982\u679c\u67e5\u8be2\u5305\u542b\u4e00\u4e9b\u8fd9\u6837\u7684\u51fd\u6570\uff0c\u90a3\u548c\u5176\u4ed6\u805a\u5408\u51fd\u6570\u76f8\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniq")," \u5c06\u662f\u51e0\u4e4e\u4e00\u6837\u5feb\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u786e\u5b9a\u6027\u5730\u63d0\u4f9b\u7ed3\u679c\uff08\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u67e5\u8be2\u5904\u7406\u987a\u5e8f\uff09\u3002"))),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728\u51e0\u4e4e\u6240\u6709\u60c5\u51b5\u4e0b\u4f7f\u7528\u6b64\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}f.isMDXComponent=!0}}]);