"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,b=f["".concat(o,".").concat(g)]||f[g]||u[g]||s;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=f;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={slug:"/zh/engines/table-engines/special/set"},l="\u96c6\u5408",a={unversionedId:"zh/engines/table-engines/special/set",id:"zh/engines/table-engines/special/set",title:"\u96c6\u5408",description:"set}",source:"@site/docs/zh/engines/table-engines/special/set.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/set",permalink:"/docs/zh/engines/table-engines/special/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/set.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/special/set"},sidebar:"chinese",previous:{title:"Null",permalink:"/docs/zh/engines/table-engines/special/null"},next:{title:"URL(URL,\u683c\u5f0f)",permalink:"/docs/zh/engines/table-engines/special/url"}},o={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set"},"\u96c6\u5408"),(0,i.kt)("p",null,"\u59cb\u7ec8\u5b58\u5728\u4e8e RAM \u4e2d\u7684\u6570\u636e\u96c6\u3002\u5b83\u9002\u7528\u4e8eIN\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\uff08\u8bf7\u53c2\u89c1 \xabIN\u8fd0\u7b97\u7b26\xbb \u90e8\u5206\uff09\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 INSERT \u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\u3002\u65b0\u5143\u7d20\u5c06\u6dfb\u52a0\u5230\u6570\u636e\u96c6\u4e2d\uff0c\u800c\u91cd\u590d\u9879\u5c06\u88ab\u5ffd\u7565\u3002\u4f46\u662f\u4e0d\u80fd\u5bf9\u6b64\u7c7b\u578b\u8868\u6267\u884c SELECT \u8bed\u53e5\u3002\u68c0\u7d22\u6570\u636e\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u5728 IN \u8fd0\u7b97\u7b26\u7684\u53f3\u534a\u90e8\u5206\u4f7f\u7528\u5b83\u3002"),(0,i.kt)("p",null,"\u6570\u636e\u59cb\u7ec8\u5b58\u5728\u4e8e RAM \u4e2d\u3002\u5bf9\u4e8e INSERT\uff0c\u63d2\u5165\u6570\u636e\u5757\u4e5f\u4f1a\u5199\u5165\u78c1\u76d8\u4e0a\u7684\u8868\u76ee\u5f55\u3002\u542f\u52a8\u670d\u52a1\u5668\u65f6\uff0c\u6b64\u6570\u636e\u5c06\u52a0\u8f7d\u5230 RAM\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u91cd\u65b0\u542f\u52a8\u540e\uff0c\u6570\u636e\u4ecd\u7136\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5f3a\u5236\u670d\u52a1\u5668\u91cd\u542f\uff0c\u78c1\u76d8\u4e0a\u7684\u6570\u636e\u5757\u53ef\u80fd\u4f1a\u4e22\u5931\u6216\u635f\u574f\u3002\u5728\u6570\u636e\u5757\u635f\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u5220\u9664\u5305\u542b\u635f\u574f\u6570\u636e\u7684\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/set/"},"\u539f\u59cb\u6587\u7ae0")," "))}u.isMDXComponent=!0}}]);