"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67864],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70153:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={sidebar_position:1},s="count",u={unversionedId:"en/sql-reference/aggregate-functions/reference/count",id:"en/sql-reference/aggregate-functions/reference/count",title:"count",description:"agg_function-count}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/count.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/count",permalink:"/docs/en/sql-reference/aggregate-functions/reference/count",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/count.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"english",previous:{title:"List of Aggregate Functions",permalink:"/docs/en/sql-reference/aggregate-functions/reference/"},next:{title:"min",permalink:"/docs/en/sql-reference/aggregate-functions/reference/min"}},c={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-count"},"count"),(0,o.kt)("p",null,"Counts the number of rows or not-NULL values."),(0,o.kt)("p",null,"ClickHouse supports the following syntaxes for ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"count(expr)")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"COUNT(DISTINCT expr)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"count()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"COUNT(*)"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"count()")," syntax is ClickHouse-specific.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,"The function can take:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zero parameters."),(0,o.kt)("li",{parentName:"ul"},"One ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"expression"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the function is called without parameters it counts the number of rows."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"expression")," is passed, then the function counts how many times this expression returned not null. If the expression returns a ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"-type value, then the result of ",(0,o.kt)("inlineCode",{parentName:"li"},"count")," stays not ",(0,o.kt)("inlineCode",{parentName:"li"},"Nullable"),". The function returns 0 if the expression returned ",(0,o.kt)("inlineCode",{parentName:"li"},"NULL")," for all the rows.")),(0,o.kt)("p",null,"In both cases the type of the returned value is ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Details")),(0,o.kt)("p",null,"ClickHouse supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT ...)")," syntax. The behavior of this construction depends on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-count_distinct_implementation"},"count_distinct_implementation")," setting. It defines which of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq","*")," functions is used to perform the operation. The default is the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact")," function."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM table")," query is optimized by default using metadata from MergeTree. If you need to use row-level security, disable optimization using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize-trivial-count-query"},"optimize_trivial_count_query")," setting."),(0,o.kt)("p",null,"However ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count(nullable_column) FROM table")," query can be optimized by enabling the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#optimize-functions-to-subcolumns"},"optimize_functions_to_subcolumns")," setting. With ",(0,o.kt)("inlineCode",{parentName:"p"},"optimize_functions_to_subcolumns = 1")," the function reads only ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable#finding-null"},"null")," subcolumn instead of reading and processing the whole column data. The query ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT count(n) FROM table")," transforms to ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT sum(NOT n.null) FROM table"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("p",null,"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, value FROM system.settings WHERE name = 'count_distinct_implementation'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_distinct_implementation \u2502 uniqExact \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT num) FROM t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uniqExact(num)\u2500\u2510\n\u2502              3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"This example shows that ",(0,o.kt)("inlineCode",{parentName:"p"},"count(DISTINCT num)")," is performed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"uniqExact")," function according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"count_distinct_implementation")," setting value."))}m.isMDXComponent=!0}}]);