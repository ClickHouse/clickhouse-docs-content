"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17680],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,d=c["".concat(o,".").concat(f)]||c[f]||p[f]||i;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10870:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],s={sidebar_position:141},o="deltaSumTimestamp",u={unversionedId:"en/sql-reference/aggregate-functions/reference/deltasumtimestamp",id:"en/sql-reference/aggregate-functions/reference/deltasumtimestamp",title:"deltaSumTimestamp",description:"agg_functions-deltasumtimestamp}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",permalink:"/en/sql-reference/aggregate-functions/reference/deltasumtimestamp",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"english",previous:{title:"deltaSum",permalink:"/en/sql-reference/aggregate-functions/reference/deltasum"},next:{title:"sumMap",permalink:"/en/sql-reference/aggregate-functions/reference/summap"}},m={},p=[],c={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agg_functions-deltasumtimestamp"},"deltaSumTimestamp"),(0,i.kt)("p",null,"Adds the difference between consecutive rows. If the difference is negative, it is ignored."),(0,i.kt)("p",null,"This function is primarily for ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/view#materialized"},"materialized views")," that are ordered by some time bucket-aligned timestamp, for example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"toStartOfMinute"),' bucket. Because the rows in such a materialized view will all have the same timestamp, it is impossible for them to be merged in the "right" order. This function keeps track of the ',(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," of the values it's seen, so it's possible to order the states correctly during merging."),(0,i.kt)("p",null,"To calculate the delta sum across an ordered collection you can simply use the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/aggregate-functions/reference/deltasum#agg_functions-deltasum"},"deltaSum")," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"deltaSumTimestamp(value, timestamp)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," \u2014 Input values, must be some ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer")," type or ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float")," type or a ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," \u2014 The parameter for order values, must be some ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer")," type or ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float")," type or a ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},"DateTime"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accumulated differences between consecutive values, ordered by the ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," parameter.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"Integer")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float"},"Float")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/date"},"Date")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT deltaSumTimestamp(value, timestamp)\nFROM (SELECT number AS timestamp, [0, 4, 8, 3, 0, 0, 0, 1, 3, 5][number] AS value FROM numbers(1, 10));\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500deltaSumTimestamp(value, timestamp)\u2500\u2510\n\u2502                                  13 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);