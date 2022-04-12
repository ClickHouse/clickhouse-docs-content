"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85203],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,k=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35738:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:311,sidebar_label:"sparkbar"},p=void 0,s={unversionedId:"en/sql-reference/aggregate-functions/reference/sparkbar",id:"en/sql-reference/aggregate-functions/reference/sparkbar",title:"sparkbar",description:"sparkbar}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/sparkbar.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/sparkbar",permalink:"/en/sql-reference/aggregate-functions/reference/sparkbar",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/aggregate-functions/reference/sparkbar.md",tags:[],version:"current",sidebarPosition:311,frontMatter:{sidebar_position:311,sidebar_label:"sparkbar"},sidebar:"english",previous:{title:"mannWhitneyUTest",permalink:"/en/sql-reference/aggregate-functions/reference/mannwhitneyutest"},next:{title:"Combinators",permalink:"/en/sql-reference/aggregate-functions/combinators"}},c={},u=[],f={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sparkbar"},"sparkbar"),(0,i.kt)("p",null,"The function plots a frequency histogram for values ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and the repetition rate ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," of these values over the interval ",(0,i.kt)("inlineCode",{parentName:"p"},"[min_x, max_x]"),"."),(0,i.kt)("p",null,"If no interval is specified, then the minimum ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is used as the interval start, and the maximum ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," \u2014 as the interval end. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"sparkbar(width[, min_x, max_x])(x, y)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," \u2014 The number of segments. Type: ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_x")," \u2014 The interval start. Optional parameter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_x")," \u2014 The interval end. Optional parameter.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 The field with values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," \u2014 The field with the frequency of values.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The frequency histogram.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE spark_bar_data (`cnt` UInt64,`event_date` Date) ENGINE = MergeTree ORDER BY event_date SETTINGS index_granularity = 8192;\n \nINSERT INTO spark_bar_data VALUES(1,'2020-01-01'),(4,'2020-01-02'),(5,'2020-01-03'),(2,'2020-01-04'),(3,'2020-01-05'),(7,'2020-01-06'),(6,'2020-01-07'),(8,'2020-01-08'),(2,'2020-01-11');\n\nSELECT sparkbar(9)(event_date,cnt) FROM spark_bar_data;\n\nSELECT sparkbar(9,toDate('2020-01-01'),toDate('2020-01-10'))(event_date,cnt) FROM spark_bar_data;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\n\u250c\u2500sparkbar(9)(event_date, cnt)\u2500\u2510\n\u2502                              \u2502\n\u2502 \u2581\u2585\u2584\u2583\u2588\u2588\u2585 \u2581                   \u2502\n\u2502                              \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500sparkbar(9, toDate('2020-01-01'), toDate('2020-01-10'))(event_date, cnt)\u2500\u2510\n\u2502                                                                          \u2502\n\u2502\u2581\u2584\u2584\u2582\u2585\u2587\u2588\u2581                                                                 \u2502\n\u2502                                                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);