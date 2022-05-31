"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[55673],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?t.createElement(g,c(c({ref:n},s),{},{components:r})):t.createElement(g,c({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67729:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:143},u="maxMap",l={unversionedId:"en/sql-reference/aggregate-functions/reference/maxmap",id:"en/sql-reference/aggregate-functions/reference/maxmap",title:"maxMap",description:"agg_functions-maxmap}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/maxmap.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/maxmap",permalink:"/docs/en/sql-reference/aggregate-functions/reference/maxmap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/maxmap.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{sidebar_position:143},sidebar:"english",previous:{title:"minMap",permalink:"/docs/en/sql-reference/aggregate-functions/reference/minmap"},next:{title:"sumCount",permalink:"/docs/en/sql-reference/aggregate-functions/reference/sumcount"}},s={},p=[],f={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_functions-maxmap"},"maxMap"),(0,o.kt)("p",null,"Syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"maxMap(key, value)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"maxMap(Tuple(key, value))")),(0,o.kt)("p",null,"Calculates the maximum from ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," array according to the keys specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," array."),(0,o.kt)("p",null,"Passing a tuple of keys and value arrays is identical to passing two arrays of keys and values."),(0,o.kt)("p",null,"The number of elements in ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," must be the same for each row that is totaled."),(0,o.kt)("p",null,"Returns a tuple of two arrays: keys and values calculated for the corresponding keys."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxMap(a, b)\nFROM values('a Array(Int32), b Array(Int64)', ([1, 2], [2, 2]), ([2, 3], [1, 1]))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500maxMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3],[2,2,1]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);