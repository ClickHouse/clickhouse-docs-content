"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),y=i,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={slug:"/en/sql-reference/data-types/lowcardinality",sidebar_position:51,sidebar_label:"LowCardinality"},l="LowCardinality Data Type",o={unversionedId:"en/sql-reference/data-types/lowcardinality",id:"en/sql-reference/data-types/lowcardinality",title:"LowCardinality Data Type",description:"Changes the internal representation of other data types to be dictionary-encoded.",source:"@site/docs/en/sql-reference/data-types/lowcardinality.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/lowcardinality",permalink:"/docs/en/sql-reference/data-types/lowcardinality",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/lowcardinality.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{slug:"/en/sql-reference/data-types/lowcardinality",sidebar_position:51,sidebar_label:"LowCardinality"},sidebar:"english",previous:{title:"Enum",permalink:"/docs/en/sql-reference/data-types/enum"},next:{title:"Array(T)",permalink:"/docs/en/sql-reference/data-types/array"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Related Settings and Functions",id:"related-settings-and-functions",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lowcardinality-data-type"},"LowCardinality Data Type"),(0,i.kt)("p",null,"Changes the internal representation of other data types to be dictionary-encoded."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LowCardinality(data_type)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_type")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/date"},"Date"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/datetime"},"DateTime"),", and numbers excepting ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/decimal"},"Decimal"),". ",(0,i.kt)("inlineCode",{parentName:"li"},"LowCardinality")," is not efficient for some data types, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types")," setting description.")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," is a superstructure that changes a data storage method and rules of data processing. ClickHouse applies ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dictionary_coder"},"dictionary coding")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality"),"-columns. Operating with dictionary encoded data significantly increases performance of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/"},"SELECT")," queries for many applications."),(0,i.kt)("p",null,"The efficiency of using ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," data type depends on data diversity. If a dictionary contains less than 10,000 distinct values, then ClickHouse mostly shows higher efficiency of data reading and storing. If a dictionary contains more than 100,000 distinct values, then ClickHouse can perform worse in comparison with using ordinary data types."),(0,i.kt)("p",null,"Consider using ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," instead of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/enum"},"Enum")," when working with strings. ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality")," provides more flexibility in use and often reveals the same or higher efficiency."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Create a table with a ",(0,i.kt)("inlineCode",{parentName:"p"},"LowCardinality"),"-column:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE lc_t\n(\n    `id` UInt16,\n    `strings` LowCardinality(String)\n)\nENGINE = MergeTree()\nORDER BY id\n")),(0,i.kt)("h2",{id:"related-settings-and-functions"},"Related Settings and Functions"),(0,i.kt)("p",null,"Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#low_cardinality_max_dictionary_size"},"low_cardinality_max_dictionary_size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#low_cardinality_use_single_dictionary_for_part"},"low_cardinality_use_single_dictionary_for_part")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#low_cardinality_allow_in_native_format"},"low_cardinality_allow_in_native_format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#allow_suspicious_low_cardinality_types"},"allow_suspicious_low_cardinality_types")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/operations/settings/settings#output-format-arrow-low-cardinality-as-dictionary"},"output_format_arrow_low_cardinality_as_dictionary"))),(0,i.kt)("p",null,"Functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/type-conversion-functions#tolowcardinality"},"toLowCardinality"))),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.instana.com/blog/reducing-clickhouse-storage-cost-with-the-low-cardinality-type-lessons-from-an-instana-engineer/"},"Reducing ClickHouse Storage Cost with the Low Cardinality Type \u2013 Lessons from an Instana Engineer"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/rqf-ILRgBdY?list=PL0Z2YDlm0b3iwXCpEFiOOYmwXzVmjJfEt"},"String Optimization (video presentation in Russian)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/clickhouse-presentations/raw/master/meetup19/string_optimization.pdf"},"Slides in English"),".")))}d.isMDXComponent=!0}}]);