"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[19569],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),g=i,m=s["".concat(u,".").concat(g)]||s[g]||f[g]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},25633:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={slug:"/zh/sql-reference/aggregate-functions/reference/uniqcombined",sidebar_position:192},u="uniqCombined",l={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniqcombined",id:"zh/sql-reference/aggregate-functions/reference/uniqcombined",title:"uniqCombined",description:"agg_function-uniqcombined}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniqcombined",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined.md",tags:[],version:"current",sidebarPosition:192,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/uniqcombined",sidebar_position:192},sidebar:"chinese",previous:{title:"uniqExact",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqexact"},next:{title:"uniqCombined64",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined64"}},p={},f=[],s={toc:f};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agg_function-uniqcombined"},"uniqCombined"),(0,a.kt)("p",null,"\u8ba1\u7b97\u4e0d\u540c\u53c2\u6570\u503c\u7684\u8fd1\u4f3c\u6570\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"uniqCombined(HLL_precision)(x[, ...])\n")),(0,a.kt)("p",null,"\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined")," \u51fd\u6570\u662f\u8ba1\u7b97\u4e0d\u540c\u503c\u6570\u91cf\u7684\u4e0d\u9519\u9009\u62e9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u53ef\u53d8\u6570\u91cf\u7684\u53c2\u6570\u3002 \u53c2\u6570\u53ef\u4ee5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\uff0c\u6216\u6570\u5b57\u7c7b\u578b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HLL_precision")," \u662f\u4ee52\u4e3a\u5e95\u7684\u5355\u5143\u683c\u6570\u7684\u5bf9\u6570 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HyperLogLog"},"HyperLogLog"),"\u3002\u53ef\u9009\uff0c\u60a8\u53ef\u4ee5\u5c06\u8be5\u51fd\u6570\u7528\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined(x[, ...])"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"HLL_precision")," \u7684\u9ed8\u8ba4\u503c\u662f17\uff0c\u8fd9\u662f\u6709\u6548\u768496KiB\u7684\u7a7a\u95f4\uff082^17\u4e2a\u5355\u5143\uff0c\u6bcf\u4e2a6\u6bd4\u7279\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),"\u7c7b\u578b\u7684\u6570\u5b57\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u7ec6\u8282")),(0,a.kt)("p",null,"\u529f\u80fd:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e3a\u805a\u5408\u4e2d\u7684\u6240\u6709\u53c2\u6570\u8ba1\u7b97\u54c8\u5e0c\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"\u7c7b\u578b\u752864\u4f4d\u54c8\u5e0c\uff0c\u5176\u4ed632\u4f4d\uff09\uff0c\u7136\u540e\u5728\u8ba1\u7b97\u4e2d\u4f7f\u7528\u5b83\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e09\u79cd\u7b97\u6cd5\u7684\u7ec4\u5408\uff1a\u6570\u7ec4\u3001\u54c8\u5e0c\u8868\u548c\u5305\u542b\u9519\u8bef\u4fee\u6b63\u8868\u7684HyperLogLog\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5c11\u91cf\u7684\u4e0d\u540c\u7684\u503c\uff0c\u4f7f\u7528\u6570\u7ec4\u3002 \u503c\u518d\u591a\u4e00\u4e9b\uff0c\u4f7f\u7528\u54c8\u5e0c\u8868\u3002\u5bf9\u4e8e\u5927\u91cf\u7684\u6570\u636e\u6765\u8bf4\uff0c\u4f7f\u7528HyperLogLog\uff0cHyperLogLog\u5360\u7528\u4e00\u4e2a\u56fa\u5b9a\u7684\u5185\u5b58\u7a7a\u95f4\u3002\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u6027\u5730\u63d0\u4f9b\u7ed3\u679c\uff08\u5b83\u4e0d\u4f9d\u8d56\u4e8e\u67e5\u8be2\u5904\u7406\u987a\u5e8f\uff09\u3002")),(0,a.kt)("p",null,'!!! note "\u6ce8"\n\u7531\u4e8e\u5b83\u5bf9\u975e ',(0,a.kt)("inlineCode",{parentName:"p"},"String")," \u7c7b\u578b\u4f7f\u752832\u4f4d\u54c8\u5e0c\uff0c\u5bf9\u4e8e\u57fa\u6570\u663e\u8457\u5927\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"UINT_MAX")," \uff0c\u7ed3\u679c\u5c06\u6709\u975e\u5e38\u9ad8\u7684\u8bef\u5dee(\u8bef\u5dee\u5c06\u5728\u51e0\u767e\u4ebf\u4e0d\u540c\u503c\u4e4b\u540e\u8fc5\u901f\u63d0\u9ad8), \u56e0\u6b64\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")," \u51fd\u6570, \u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"uniqCombined"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8017\u5185\u5b58\u8981\u5c11\u51e0\u500d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u7cbe\u5ea6\u9ad8\u51fa\u51e0\u500d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u5e38\u5177\u6709\u7565\u4f4e\u7684\u6027\u80fd\u3002 \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b, ",(0,a.kt)("inlineCode",{parentName:"li"},"uniqCombined")," \u53ef\u4ee5\u8868\u73b0\u5f97\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"li"},"uniq")," \u597d\uff0c\u4f8b\u5982\uff0c\u4f7f\u7528\u901a\u8fc7\u7f51\u7edc\u4f20\u8f93\u5927\u91cf\u805a\u5408\u72b6\u6001\u7684\u5206\u5e03\u5f0f\u67e5\u8be2\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}g.isMDXComponent=!0}}]);