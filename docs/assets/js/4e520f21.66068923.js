"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84695],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,f=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={slug:"/zh/operations/system-tables/one"},l="system.one",c={unversionedId:"zh/operations/system-tables/one",id:"zh/operations/system-tables/one",title:"system.one",description:"system-one}",source:"@site/docs/zh/operations/system-tables/one.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/one",permalink:"/docs/zh/operations/system-tables/one",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/one.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/one"},sidebar:"chinese",previous:{title:"system.numbers_mt",permalink:"/docs/zh/operations/system-tables/numbers_mt"},next:{title:"system.opentelemetry_span_log",permalink:"/docs/zh/operations/system-tables/opentelemetry_span_log"}},p={},u=[],m={toc:u};function y(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-one"},"system.one"),(0,s.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e00\u884c\u53ea\u6709\u4e00\u4e2a\u503c\u4e3a 0 \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"dummy")," UInt8 \u5217\u7684\u6570\u636e\u3002"),(0,s.kt)("p",null,"\u5982\u679c ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u6ca1\u6709\u6307\u5b9a ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM")," \u5b50\u53e5\uff0c\u5c31\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u8868\u6765\u67e5\u8be2\u3002"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u8868\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf(DMBS)\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"DUAL")," \u8868\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.one LIMIT 10;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dummy\u2500\u2510\n\u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.001 sec.\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/one"},"\u539f\u6587")," "))}y.isMDXComponent=!0}}]);