"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[32297],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},p="\u6ca1\u4ec0\u4e48",s={unversionedId:"zh/sql-reference/data-types/special-data-types/nothing",id:"zh/sql-reference/data-types/special-data-types/nothing",title:"\u6ca1\u4ec0\u4e48",description:"nothing}",source:"@site/docs/zh/sql-reference/data-types/special-data-types/nothing.md",sourceDirName:"zh/sql-reference/data-types/special-data-types",slug:"/zh/sql-reference/data-types/special-data-types/nothing",permalink:"/docs/zh/sql-reference/data-types/special-data-types/nothing",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/special-data-types/nothing.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u8868\u8fbe\u5f0f",permalink:"/docs/zh/sql-reference/data-types/special-data-types/expression"},next:{title:"\u96c6\u5408",permalink:"/docs/zh/sql-reference/data-types/special-data-types/set"}},l={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nothing"},"\u6ca1\u4ec0\u4e48"),(0,o.kt)("p",null,"\u6b64\u6570\u636e\u7c7b\u578b\u7684\u552f\u4e00\u76ee\u7684\u662f\u8868\u793a\u4e0d\u662f\u671f\u671b\u503c\u7684\u60c5\u51b5\u3002 \u6240\u4ee5\u4e0d\u80fd\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," \u7c7b\u578b\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5b57\u9762\u91cf ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/syntax#null-literal"},"NULL")," \u7684\u7c7b\u578b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Nullable(Nothing)"),"\u3002\u8be6\u60c5\u8bf7\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," \u7c7b\u578b\u4e5f\u53ef\u4ee5\u7528\u6765\u8868\u793a\u7a7a\u6570\u7ec4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},":) SELECT toTypeName(array())\n\nSELECT toTypeName([])\n\n\u250c\u2500toTypeName(array())\u2500\u2510\n\u2502 Array(Nothing)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.062 sec.\n")))}d.isMDXComponent=!0}}]);