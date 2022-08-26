"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98231],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=s,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],c={slug:"/zh/sql-reference/statements/set",sidebar_position:50,sidebar_label:"SET"},i="SET \u8bed\u53e5",l={unversionedId:"zh/sql-reference/statements/set",id:"zh/sql-reference/statements/set",title:"SET \u8bed\u53e5",description:"query-set}",source:"@site/docs/zh/sql-reference/statements/set.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/set",permalink:"/docs/zh/sql-reference/statements/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/set.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/zh/sql-reference/statements/set",sidebar_position:50,sidebar_label:"SET"},sidebar:"chinese",previous:{title:"EXCHANGE",permalink:"/docs/zh/sql-reference/statements/exchange"},next:{title:"SET ROLE",permalink:"/docs/zh/sql-reference/statements/set-role"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"query-set"},"SET \u8bed\u53e5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET param = value\n")),(0,o.kt)("p",null,"\u7ed9\u5f53\u524d\u4f1a\u8bdd\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/"},"\u914d\u7f6e\u9879"),"\u8d4b\u503c\u3002\u4f60\u4e0d\u80fd\u7528\u8fd9\u6837\u7684\u65b9\u5f0f\u4fee\u6539",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/"},"\u670d\u52a1\u5668\u76f8\u5173\u8bbe\u7f6e"),"\u3002"),(0,o.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5728\u5355\u4e2a\u67e5\u8be2\u4e2d\u8bbe\u7f6e\u6307\u5b9a\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET profile = 'profile-name-from-the-settings-file'\n")),(0,o.kt)("p",null,"\u66f4\u591a\u8be6\u60c5, \u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings"},"\u914d\u7f6e\u9879"),"."))}m.isMDXComponent=!0}}]);