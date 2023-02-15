"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[81037],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var o=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},a="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),a=u(t),f=i,d=a["".concat(l,".").concat(f)]||a[f]||m[f]||n;return t?o.createElement(d,s(s({ref:r},p),{},{components:t})):o.createElement(d,s({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[a]="string"==typeof e?e:i,s[1]=c;for(var u=2;u<n;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var o=t(87462),i=(t(67294),t(3905));const n={slug:"/ru/operations/utilities/clickhouse-compressor"},s=void 0,c={unversionedId:"ru/operations/utilities/clickhouse-compressor",id:"ru/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor",description:"ClickHouse compressor",source:"@site/docs/ru/operations/utilities/clickhouse-compressor.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-compressor",permalink:"/docs/ru/operations/utilities/clickhouse-compressor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/utilities/clickhouse-compressor.md",tags:[],version:"current",frontMatter:{slug:"/ru/operations/utilities/clickhouse-compressor"},sidebar:"russia",previous:{title:"clickhouse-format",permalink:"/docs/ru/operations/utilities/clickhouse-format"},next:{title:"\u041e\u0431\u0444\u0443\u0441\u043a\u0430\u0442\u043e\u0440 ClickHouse",permalink:"/docs/ru/operations/utilities/clickhouse-obfuscator"}},l={},u=[{value:"ClickHouse compressor",id:"clickhouse-compressor",level:2},{value:"Examples",id:"examples",level:3}],p={toc:u},a="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(a,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clickhouse-compressor"},"ClickHouse compressor"),(0,i.kt)("p",null,"Simple program for data compression and decompression in ClickHouse way."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Compress data with LZ4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor < input_file > output_file\n")),(0,i.kt)("p",null,"Decompress data from LZ4 format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --decompress < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with ZSTD at level 5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'ZSTD(5)' < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with Delta of four bytes and ZSTD level 10."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'Delta(4)' --codec 'ZSTD(10)' < input_file > output_file\n")))}m.isMDXComponent=!0}}]);