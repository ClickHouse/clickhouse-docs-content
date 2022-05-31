"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[56814],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,y=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(y,c(c({ref:n},s),{},{components:t})):r.createElement(y,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63639:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={sidebar_position:103},l="anyHeavy",u={unversionedId:"en/sql-reference/aggregate-functions/reference/anyheavy",id:"en/sql-reference/aggregate-functions/reference/anyheavy",title:"anyHeavy",description:"anyheavyx}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/anyheavy.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/anyheavy",permalink:"/docs/en/sql-reference/aggregate-functions/reference/anyheavy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/anyheavy.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"english",previous:{title:"covarSamp",permalink:"/docs/en/sql-reference/aggregate-functions/reference/covarsamp"},next:{title:"anylast",permalink:"/docs/en/sql-reference/aggregate-functions/reference/anylast"}},s={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anyheavyx"},"anyHeavy"),(0,o.kt)("p",null,"Selects a frequently occurring value using the ",(0,o.kt)("a",{parentName:"p",href:"http://www.cs.umd.edu/~samir/498/karp.pdf"},"heavy hitters")," algorithm. If there is a value that occurs more than in half the cases in each of the query\u2019s execution threads, this value is returned. Normally, the result is nondeterministic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"anyHeavy(column)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"column")," \u2013 The column name.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Take the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/getting-started/example-datasets/ontime"},"OnTime")," data set and select any frequently occurring value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AirlineID")," column."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT anyHeavy(AirlineID) AS res\nFROM ontime\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500res\u2500\u2510\n\u2502 19690 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);