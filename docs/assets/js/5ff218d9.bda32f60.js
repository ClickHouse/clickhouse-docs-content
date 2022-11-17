"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(o,".").concat(f)]||m[f]||u[f]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={slug:"/en/sql-reference/aggregate-functions/reference/mannwhitneyutest",sidebar_position:310,sidebar_label:"mannWhitneyUTest"},i="mannWhitneyUTest",s={unversionedId:"en/sql-reference/aggregate-functions/reference/mannwhitneyutest",id:"en/sql-reference/aggregate-functions/reference/mannwhitneyutest",title:"mannWhitneyUTest",description:"Applies the Mann-Whitney rank test to samples from two populations.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/mannwhitneyutest.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/mannwhitneyutest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/mannwhitneyutest",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/mannwhitneyutest.md",tags:[],version:"current",sidebarPosition:310,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/mannwhitneyutest",sidebar_position:310,sidebar_label:"mannWhitneyUTest"},sidebar:"english",previous:{title:"meanZTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/meanztest"},next:{title:"sparkbar",permalink:"/docs/en/sql-reference/aggregate-functions/reference/sparkbar"}},o={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mannwhitneyutest"},"mannWhitneyUTest"),(0,r.kt)("p",null,"Applies the Mann-Whitney rank test to samples from two populations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mannWhitneyUTest[(alternative[, continuity_correction])](sample_data, sample_index)\n")),(0,r.kt)("p",null,"Values of both samples are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_data")," column. If ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_index")," equals to 0 then the value in that row belongs to the sample from the first population. Otherwise it belongs to the sample from the second population.\nThe null hypothesis is that two populations are stochastically equal. Also one-sided hypothesises can be tested. This test does not assume that data have normal distribution."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 sample data. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 sample index. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"Integer"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alternative")," \u2014 alternative hypothesis. (Optional, default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),".) ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'greater'"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'less'"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"continuity_correction")," \u2014 if not 0 then continuity correction in the normal approximation for the p-value is applied. (Optional, default: 1.) ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returned values")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple")," with two elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"calculated U-statistic. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,r.kt)("li",{parentName:"ul"},"calculated p-value. ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Input table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502          10 \u2502            0 \u2502\n\u2502          11 \u2502            0 \u2502\n\u2502          12 \u2502            0 \u2502\n\u2502           1 \u2502            1 \u2502\n\u2502           2 \u2502            1 \u2502\n\u2502           3 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT mannWhitneyUTest('greater')(sample_data, sample_index) FROM mww_ttest;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500mannWhitneyUTest('greater')(sample_data, sample_index)\u2500\u2510\n\u2502 (9,0.04042779918503192)                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test"},"Mann\u2013Whitney U test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stochastic_ordering"},"Stochastic ordering"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/aggregate-functions/reference/mannwhitneyutest/"},"Original article")," "))}u.isMDXComponent=!0}}]);