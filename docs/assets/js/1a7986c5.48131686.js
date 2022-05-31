"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25973],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,m=f["".concat(l,".").concat(g)]||f[g]||s[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:109},l="topKWeighted",p={unversionedId:"zh/sql-reference/aggregate-functions/reference/topkweighted",id:"zh/sql-reference/aggregate-functions/reference/topkweighted",title:"topKWeighted",description:"topkweighted}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/topkweighted.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/topkweighted",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topkweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/topkweighted.md",tags:[],version:"current",sidebarPosition:109,frontMatter:{sidebar_position:109},sidebar:"chinese",previous:{title:"topK",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/topk"},next:{title:"groupArray",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/grouparray"}},u={},s=[],f={toc:s};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topkweighted"},"topKWeighted"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"topK"),"  \u4f46\u9700\u8981\u4e00\u4e2a\u6574\u6570\u7c7b\u578b\u7684\u9644\u52a0\u53c2\u6570 - ",(0,a.kt)("inlineCode",{parentName:"p"},"weight"),"\u3002 \u6bcf\u4e2a\u8f93\u5165\u90fd\u88ab\u8bb0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"weight")," \u6b21\u9891\u7387\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"topKWeighted(N)(x, weight)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"N")," \u2014 \u8981\u8fd4\u56de\u7684\u5143\u7d20\u6570\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2013 (\u8981\u8ba1\u7b97\u9891\u6b21\u7684)\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 \u6743\u91cd\u3002 ",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),"\u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u8fd4\u56de\u5177\u6709\u6700\u5927\u8fd1\u4f3c\u6743\u91cd\u603b\u548c\u7684\u503c\u6570\u7ec4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT topKWeighted(10)(number, number) FROM numbers(1000)\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500topKWeighted(10)(number, number)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [999,998,997,996,995,994,993,992,991,990] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);