"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91391],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||l;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={sidebar_position:301,sidebar_label:"welchTTest"},c="welchTTest",i={unversionedId:"en/sql-reference/aggregate-functions/reference/welchttest",id:"en/sql-reference/aggregate-functions/reference/welchttest",title:"welchTTest",description:"welchttest}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/welchttest.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/welchttest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/welchttest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/welchttest.md",tags:[],version:"current",sidebarPosition:301,frontMatter:{sidebar_position:301,sidebar_label:"welchTTest"},sidebar:"english",previous:{title:"studentTTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/studentttest"},next:{title:"entropy",permalink:"/docs/en/sql-reference/aggregate-functions/reference/entropy"}},p={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welchttest"},"welchTTest"),(0,l.kt)("p",null,"Applies Welch's t-test to samples from two populations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"welchTTest([confidence_level])(sample_data, sample_index)\n")),(0,l.kt)("p",null,"Values of both samples are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data")," column. If ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," equals to 0 then the value in that row belongs to the sample from the first population. Otherwise it belongs to the sample from the second population.\nThe null hypothesis is that means of populations are equal. Normal distribution is assumed. Populations may have unequal variance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 Sample data. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 Sample index. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"confidence_level")," \u2014 Confidence level in order to calculate confidence intervals. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple")," with two or four elements (if the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"confidence_level")," is specified)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"calculated t-statistic. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"calculated p-value. ",(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"[calculated confidence-interval-low.][Float64]","(/docs/en/sql-reference/data-types/float)."),(0,l.kt)("li",{parentName:"ul"},"[calculated confidence-interval-high.][Float64]","(/docs/en/sql-reference/data-types/float).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        22.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            0 \u2502\n\u2502        18.9 \u2502            1 \u2502\n\u2502        20.3 \u2502            1 \u2502\n\u2502          19 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500welchTTest(sample_data, sample_index)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (2.7988719532211235,0.051807360348581945) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Welch%27s_t-test"},"Welch's t-test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/studentttest#studentttest"},"studentTTest function"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/aggregate-functions/reference/welchTTest/"},"Original article")," "))}m.isMDXComponent=!0}}]);