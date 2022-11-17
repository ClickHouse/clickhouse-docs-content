"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[84695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),y=o,f=u["".concat(p,".").concat(y)]||u[y]||m[y]||s;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const s={slug:"/zh/operations/system-tables/one"},a="system.one",l={unversionedId:"zh/operations/system-tables/one",id:"zh/operations/system-tables/one",title:"system.one",description:"system-one}",source:"@site/docs/zh/operations/system-tables/one.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/one",permalink:"/docs/zh/operations/system-tables/one",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/one.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/one"},sidebar:"chinese",previous:{title:"system.numbers_mt",permalink:"/docs/zh/operations/system-tables/numbers_mt"},next:{title:"system.opentelemetry_span_log",permalink:"/docs/zh/operations/system-tables/opentelemetry_span_log"}},p={},i=[],c={toc:i};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-one"},"system.one"),(0,o.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e00\u884c\u53ea\u6709\u4e00\u4e2a\u503c\u4e3a 0 \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dummy")," UInt8 \u5217\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u6ca1\u6709\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," \u5b50\u53e5\uff0c\u5c31\u4f1a\u4f7f\u7528\u8fd9\u4e2a\u8868\u6765\u67e5\u8be2\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u8868\u7c7b\u4f3c\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf(DMBS)\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"DUAL")," \u8868\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT * FROM system.one LIMIT 10;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500dummy\u2500\u2510\n\u2502     0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.001 sec.\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/one"},"\u539f\u6587")," "))}m.isMDXComponent=!0}}]);