"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[2100,43799],{3905:(e,t,o)=>{o.d(t,{Zo:()=>a,kt:()=>h});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},a=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return o?r.createElement(h,n(n({ref:t},a),{},{components:o})):r.createElement(h,n({ref:t},a))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,n=new Array(s);n[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,n[1]=c;for(var p=2;p<s;p++)n[p]=o[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},54726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));const s={slug:"/en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},n=void 0,c={unversionedId:"en/operations/utilities/clickhouse-compressor",id:"en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor",description:"Simple program for data compression and decompression.",source:"@site/docs/en/operations/utilities/clickhouse-compressor.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-compressor",permalink:"/docs/en/operations/utilities/clickhouse-compressor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/utilities/clickhouse-compressor.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},sidebar:"english",previous:{title:"clickhouse-benchmark",permalink:"/docs/en/operations/utilities/clickhouse-benchmark"},next:{title:"clickhouse-format",permalink:"/docs/en/operations/utilities/clickhouse-format"}},l={},p=[{value:"Examples",id:"examples",level:3}],a={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Simple program for data compression and decompression."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Compress data with LZ4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor < input_file > output_file\n")),(0,i.kt)("p",null,"Decompress data from LZ4 format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --decompress < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with ZSTD at level 5:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'ZSTD(5)' < input_file > output_file\n")),(0,i.kt)("p",null,"Compress data with Delta of four bytes and ZSTD level 10."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./clickhouse-compressor --codec 'Delta(4)' --codec 'ZSTD(10)' < input_file > output_file\n")))}m.isMDXComponent=!0},59783:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var r=o(87462),i=(o(67294),o(3905)),s=o(54726);const n={sidebar_label:"clickhouse-compressor",slug:"/zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},c=void 0,l={unversionedId:"zh/operations/utilities/clickhouse-compressor",id:"zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor",description:"",source:"@site/docs/zh/operations/utilities/clickhouse-compressor.mdx",sourceDirName:"zh/operations/utilities",slug:"/zh/operations/utilities/clickhouse-compressor",permalink:"/docs/zh/operations/utilities/clickhouse-compressor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/utilities/clickhouse-compressor.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"clickhouse-compressor",slug:"/zh/operations/utilities/clickhouse-compressor",title:"clickhouse-compressor"},sidebar:"chinese",previous:{title:"\u6027\u80fd\u6d4b\u8bd5",permalink:"/docs/zh/operations/utilities/clickhouse-benchmark"},next:{title:"clickhouse-copier",permalink:"/docs/zh/operations/utilities/clickhouse-copier"}},p={},a=[],u={toc:a},m="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.default,{mdxType:"Content"}))}d.isMDXComponent=!0}}]);