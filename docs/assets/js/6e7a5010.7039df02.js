"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(r),y=i,d=h["".concat(p,".").concat(y)]||h[y]||s[y]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={slug:"/zh/interfaces/third-party/proxy",sidebar_position:29,sidebar_label:"\u7b2c\u4e09\u65b9\u4ee3\u7406"},a="\u7b2c\u4e09\u65b9\u4ee3\u7406",l={unversionedId:"zh/interfaces/third-party/proxy",id:"zh/interfaces/third-party/proxy",title:"\u7b2c\u4e09\u65b9\u4ee3\u7406",description:"proxy-servers-from-third-party-developers}",source:"@site/docs/zh/interfaces/third-party/proxy.md",sourceDirName:"zh/interfaces/third-party",slug:"/zh/interfaces/third-party/proxy",permalink:"/docs/zh/interfaces/third-party/proxy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/interfaces/third-party/proxy.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{slug:"/zh/interfaces/third-party/proxy",sidebar_position:29,sidebar_label:"\u7b2c\u4e09\u65b9\u4ee3\u7406"},sidebar:"chinese",previous:{title:"\u7b2c\u4e09\u65b9\u96c6\u6210\u5e93",permalink:"/docs/zh/interfaces/third-party/integrations"},next:{title:"\u7b2c\u4e09\u65b9\u5f00\u53d1\u7684\u53ef\u89c6\u5316\u754c\u9762",permalink:"/docs/zh/interfaces/third-party/gui"}},p={},c=[{value:"chproxy",id:"chproxy",level:2},{value:"KittenHouse",id:"kittenhouse",level:2},{value:"ClickHouse-Bulk",id:"clickhouse-bulk",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"proxy-servers-from-third-party-developers"},"\u7b2c\u4e09\u65b9\u4ee3\u7406"),(0,i.kt)("h2",{id:"chproxy"},"chproxy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vertamedia/chproxy"},"chproxy"),", \u662f\u4e00\u4e2a\u7528\u4e8eClickHouse\u6570\u636e\u5e93\u7684HTTP\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,i.kt)("p",null,"\u7279\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u8def\u7531\u548c\u54cd\u5e94\u7f13\u5b58\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u9650\u5236\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u52a8SSL\u8bc1\u4e66\u7eed\u8ba2\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,i.kt)("h2",{id:"kittenhouse"},"KittenHouse"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/VKCOM/kittenhouse"},"KittenHouse"),"\u88ab\u8bbe\u8ba1\u4e3aClickHouse\u548c\u5e94\u7528\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u672c\u5730\u4ee3\u7406\uff0c\u4ee5\u9632\u4e0d\u53ef\u80fd\u6216\u4e0d\u65b9\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f\u7aef\u7f13\u51b2\u63d2\u5165\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u7279\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5185\u5b58\u548c\u78c1\u76d8\u4e0a\u7684\u6570\u636e\u7f13\u51b2\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8868\u8def\u7531\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5e73\u8861\u548c\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,i.kt)("h2",{id:"clickhouse-bulk"},"ClickHouse-Bulk"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nikepan/clickhouse-bulk"},"ClickHouse-Bulk"),"\u662f\u4e00\u4e2a\u7b80\u5355\u7684ClickHouse\u6536\u96c6\u5668\u3002"),(0,i.kt)("p",null,"\u7279\u6027:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6309\u9608\u503c\u6216\u95f4\u9694\u5bf9\u8bf7\u6c42\u8fdb\u884c\u5206\u7ec4\u5e76\u53d1\u9001\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/third-party/proxy/"},"Original article")," "))}s.isMDXComponent=!0}}]);