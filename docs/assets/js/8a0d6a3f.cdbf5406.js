"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[89960],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),g=a,m=l["".concat(u,".").concat(g)]||l[g]||f[g]||o;return n?t.createElement(m,i(i({ref:r},s),{},{components:n})):t.createElement(m,i({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},96006:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:111},u="groupUniqArray",p={unversionedId:"en/sql-reference/aggregate-functions/reference/groupuniqarray",id:"en/sql-reference/aggregate-functions/reference/groupuniqarray",title:"groupUniqArray",description:"groupuniqarray}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupuniqarray",permalink:"/en/sql-reference/aggregate-functions/reference/groupuniqarray",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/groupuniqarray.md",tags:[],version:"current",sidebarPosition:111,frontMatter:{sidebar_position:111},sidebar:"english",previous:{title:"groupArray",permalink:"/en/sql-reference/aggregate-functions/reference/grouparray"},next:{title:"groupArrayInsertAt",permalink:"/en/sql-reference/aggregate-functions/reference/grouparrayinsertat"}},s={},f=[],l={toc:f};function g(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupuniqarray"},"groupUniqArray"),(0,o.kt)("p",null,"Syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"groupUniqArray(x)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"groupUniqArray(max_size)(x)")),(0,o.kt)("p",null,"Creates an array from different argument values. Memory consumption is the same as for the ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/uniqexact"},"uniqExact")," function."),(0,o.kt)("p",null,"The second version (with the ",(0,o.kt)("inlineCode",{parentName:"p"},"max_size")," parameter) limits the size of the resulting array to ",(0,o.kt)("inlineCode",{parentName:"p"},"max_size")," elements.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"groupUniqArray(1)(x)")," is equivalent to ",(0,o.kt)("inlineCode",{parentName:"p"},"[any(x)]"),"."))}g.isMDXComponent=!0}}]);