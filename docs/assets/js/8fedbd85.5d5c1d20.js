"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[648],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95230:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={sidebar_position:6},s="any",u={unversionedId:"en/sql-reference/aggregate-functions/reference/any",id:"en/sql-reference/aggregate-functions/reference/any",title:"any",description:"Selects the first encountered value.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/any.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/any",permalink:"/docs/en/sql-reference/aggregate-functions/reference/any",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/any.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"english",previous:{title:"avg",permalink:"/docs/en/sql-reference/aggregate-functions/reference/avg"},next:{title:"stddevPop",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stddevpop"}},l={},f=[],p={toc:f};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"any"},"any"),(0,a.kt)("p",null,"Selects the first encountered value.\nThe query can be executed in any order and even in a different order each time, so the result of this function is indeterminate.\nTo get a determinate result, you can use the \u2018min\u2019 or \u2018max\u2019 function instead of \u2018any\u2019."),(0,a.kt)("p",null,"In some cases, you can rely on the order of execution. This applies to cases when SELECT comes from a subquery that uses ORDER BY."),(0,a.kt)("p",null,"When a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," query has the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause or at least one aggregate function, ClickHouse (in contrast to MySQL) requires that all expressions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HAVING"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clauses be calculated from keys or from aggregate functions. In other words, each column selected from the table must be used either in keys or inside aggregate functions. To get behavior like in MySQL, you can put the other columns in the ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," aggregate function."))}d.isMDXComponent=!0}}]);