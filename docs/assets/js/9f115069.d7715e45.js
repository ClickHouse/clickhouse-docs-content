"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13844],{3905:function(e,r,n){n.d(r,{Zo:function(){return i},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},i=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||l;return n?t.createElement(f,o(o({ref:r},i),{},{components:n})):t.createElement(f,o({ref:r},i))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85335:function(e,r,n){n.r(r),n.d(r,{assets:function(){return i},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var t=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={sidebar_position:114},c="groupArraySample",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/grouparraysample",id:"zh/sql-reference/aggregate-functions/reference/grouparraysample",title:"groupArraySample",description:"grouparraysample}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/grouparraysample.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/grouparraysample",permalink:"/zh/sql-reference/aggregate-functions/reference/grouparraysample",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/aggregate-functions/reference/grouparraysample.md",tags:[],version:"current",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"chinese",previous:{title:"groupArrayMovingAvg",permalink:"/zh/sql-reference/aggregate-functions/reference/grouparraymovingavg"},next:{title:"groupBitAnd",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitand"}},i={},s=[],g={toc:s};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grouparraysample"},"groupArraySample"),(0,l.kt)("p",null,"\u6784\u5efa\u4e00\u4e2a\u53c2\u6570\u503c\u7684\u91c7\u6837\u6570\u7ec4\u3002\n\u7ed3\u679c\u6570\u7ec4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"max_size")," \u4e2a\u5143\u7d20\u3002\u53c2\u6570\u503c\u88ab\u968f\u673a\u9009\u62e9\u5e76\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"groupArraySample(max_size[, seed])(x)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_size")," \u2014 \u7ed3\u679c\u6570\u7ec4\u7684\u6700\u5927\u957f\u5ea6\u3002",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"seed")," \u2014 \u968f\u673a\u6570\u53d1\u751f\u5668\u7684\u79cd\u5b50\u3002\u53ef\u9009\u3002",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),"\u3002\u9ed8\u8ba4\u503c: ",(0,l.kt)("inlineCode",{parentName:"li"},"123456"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u53c2\u6570 (\u5217\u540d \u6216\u8005 \u8868\u8fbe\u5f0f)\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u968f\u673a\u9009\u53d6\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," (\u7684\u503c)\u7ec4\u6210\u7684\u6570\u7ec4\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/array"},"Array"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u6837\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"colors"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500id\u2500\u252c\u2500color\u2500\u2500\u2510\n\u2502  1 \u2502 red    \u2502\n\u2502  2 \u2502 blue   \u2502\n\u2502  3 \u2502 green  \u2502\n\u2502  4 \u2502 white  \u2502\n\u2502  5 \u2502 orange \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u5217\u540d\u505a\u53c2\u6570\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3)(color) as newcolors FROM colors;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['white','blue','green']   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u5217\u540d\u548c\u4e0d\u540c\u7684(\u968f\u673a\u6570)\u79cd\u5b50\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3, 987654321)(color) as newcolors FROM colors;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['red','orange','green']   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u8868\u8fbe\u5f0f\u505a\u53c2\u6570\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArraySample(3)(concat('light-', color)) as newcolors FROM colors;\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500newcolors\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['light-blue','light-orange','light-green'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);