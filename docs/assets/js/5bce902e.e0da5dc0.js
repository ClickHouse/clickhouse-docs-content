"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34468],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=l(t),g=a,m=s["".concat(u,".").concat(g)]||s[g]||p[g]||i;return t?r.createElement(m,c(c({ref:n},f),{},{components:t})):r.createElement(m,c({ref:n},f))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},14182:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={sidebar_position:191},u="uniqExact",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniqexact",id:"zh/sql-reference/aggregate-functions/reference/uniqexact",title:"uniqExact",description:"agg_function-uniqexact}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniqexact.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniqexact",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqexact",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniqexact.md",tags:[],version:"current",sidebarPosition:191,frontMatter:{sidebar_position:191},sidebar:"chinese",previous:{title:"uniq",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniq"},next:{title:"uniqCombined",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined"}},f={},p=[],s={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_function-uniqexact"},"uniqExact"),(0,i.kt)("p",null,"\u8ba1\u7b97\u4e0d\u540c\u53c2\u6570\u503c\u7684\u51c6\u786e\u6570\u76ee\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"uniqExact(x[, ...])\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7edd\u5bf9\u9700\u8981\u4e00\u4e2a\u786e\u5207\u7684\u7ed3\u679c\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"uniqExact")," \u51fd\u6570\u3002 \u5426\u5219\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," \u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uniqExact")," \u51fd\u6570\u6bd4 ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," \u4f7f\u7528\u66f4\u591a\u7684\u5185\u5b58\uff0c\u56e0\u4e3a\u72b6\u6001\u7684\u5927\u5c0f\u968f\u7740\u4e0d\u540c\u503c\u7684\u6570\u91cf\u7684\u589e\u52a0\u800c\u65e0\u754c\u589e\u957f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u3002 \u53c2\u6570\u53ef\u4ee5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"\uff0c\u6216\u6570\u5b57\u7c7b\u578b\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniqcombined"},"uniqCombined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniqhll12"},"uniqHLL12"))))}g.isMDXComponent=!0}}]);