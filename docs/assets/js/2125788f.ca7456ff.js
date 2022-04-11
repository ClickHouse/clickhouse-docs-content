"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75205],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,f=m["".concat(p,".").concat(g)]||m[g]||c[g]||l;return t?n.createElement(f,u(u({ref:r},s),{},{components:t})):n.createElement(f,u({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,u=new Array(l);u[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<l;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11568:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),u=["components"],o={sidebar_position:112},p="groupArrayInsertAt",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/grouparrayinsertat",id:"zh/sql-reference/aggregate-functions/reference/grouparrayinsertat",title:"groupArrayInsertAt",description:"grouparrayinsertat}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/grouparrayinsertat.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/grouparrayinsertat",permalink:"/zh/sql-reference/aggregate-functions/reference/grouparrayinsertat",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/aggregate-functions/reference/grouparrayinsertat.md",tags:[],version:"current",sidebarPosition:112,frontMatter:{sidebar_position:112},sidebar:"chinese",previous:{title:"groupUniqArray",permalink:"/zh/sql-reference/aggregate-functions/reference/groupuniqarray"},next:{title:"groupArrayMovingSum",permalink:"/zh/sql-reference/aggregate-functions/reference/grouparraymovingsum"}},s={},c=[],m={toc:c};function g(e){var r=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"grouparrayinsertat"},"groupArrayInsertAt"),(0,l.kt)("p",null,"\u5728\u6307\u5b9a\u4f4d\u7f6e\u5411\u6570\u7ec4\u4e2d\u63d2\u5165\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"groupArrayInsertAt(default_x, size)(x, pos);\n")),(0,l.kt)("p",null,"\u5982\u679c\u5728\u4e00\u4e2a\u67e5\u8be2\u4e2d\u5c06\u591a\u4e2a\u503c\u63d2\u5165\u5230\u540c\u4e00\u4f4d\u7f6e\uff0c\u5219\u8be5\u51fd\u6570\u7684\u884c\u4e3a\u65b9\u5f0f\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\u6267\u884c\u67e5\u8be2\uff0c\u5219\u4f7f\u7528\u7b2c\u4e00\u4e2a\u63d2\u5165\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u6267\u884c\u67e5\u8be2\uff0c\u5219\u7ed3\u679c\u503c\u662f\u672a\u786e\u5b9a\u7684\u63d2\u5165\u503c\u4e4b\u4e00\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u8981\u63d2\u5165\u7684\u503c\u3002\u751f\u6210\u6240",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"),"(\u6570\u636e)\u7684",(0,l.kt)("a",{parentName:"li",href:"../../../sql-reference/syntax.md#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pos")," \u2014 \u6307\u5b9a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u5c06\u88ab\u63d2\u5165\u7684\u4f4d\u7f6e\u3002 \u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\u7f16\u53f7\u4ece\u96f6\u5f00\u59cb\u3002 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt32"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default_x")," \u2014 \u5728\u7a7a\u4f4d\u7f6e\u66ff\u6362\u7684\u9ed8\u8ba4\u503c\u3002\u53ef\u9009\u53c2\u6570\u3002\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u6570\u636e\u7c7b\u578b (\u6570\u636e) \u7684",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/syntax#syntax-expressions"},"\u8868\u8fbe\u5f0f"),"\u3002  \u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"default_x")," \u672a\u5b9a\u4e49\uff0c\u5219 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/statements/create#create-default-values"},"\u9ed8\u8ba4\u503c")," \u88ab\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),"\u2014 \u7ed3\u679c\u6570\u7ec4\u7684\u957f\u5ea6\u3002\u53ef\u9009\u53c2\u6570\u3002\u5982\u679c\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u5fc5\u987b\u6307\u5b9a\u9ed8\u8ba4\u503c ",(0,l.kt)("inlineCode",{parentName:"li"},"default_x")," \u3002 ",(0,l.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt32"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709\u63d2\u5165\u503c\u7684\u6570\u7ec4\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b: ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/array#data-type-array"},"\u9635\u5217"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(toString(number), number * 2) FROM numbers(5);\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','','1','','2','','3','','4']                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-')(toString(number), number * 2) FROM numbers(5);\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-')(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2','-','3','-','4']                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt('-', 5)(toString(number), number * 2) FROM numbers(5);\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt('-', 5)(toString(number), multiply(number, 2))\u2500\u2510\n\u2502 ['0','-','1','-','2']                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u5728\u4e00\u4e2a\u4f4d\u7f6e\u591a\u7ebf\u7a0b\u63d2\u5165\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupArrayInsertAt(number, 0) FROM numbers_mt(10) SETTINGS max_block_size = 1;\n")),(0,l.kt)("p",null,"\u4f5c\u4e3a\u8fd9\u4e2a\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u4f60\u4f1a\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"[0,9]")," \u8303\u56f4\u7684\u968f\u673a\u6574\u6570\u3002 \u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500groupArrayInsertAt(number, 0)\u2500\u2510\n\u2502 [7]                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);