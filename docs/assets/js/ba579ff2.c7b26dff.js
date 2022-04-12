"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97867],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||s;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={},c="licenses",l={unversionedId:"en/operations/system-tables/licenses",id:"en/operations/system-tables/licenses",title:"licenses",description:"\u0421ontains licenses of third-party libraries that are located in the contrib directory of ClickHouse sources.",source:"@site/docs/en/operations/system-tables/licenses.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/licenses",permalink:"/en/operations/system-tables/licenses",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/system-tables/licenses.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"INFORMATION_SCHEMA",permalink:"/en/operations/system-tables/information_schema"},next:{title:"merge_tree_settings",permalink:"/en/operations/system-tables/merge_tree_settings"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"licenses"},"licenses"),(0,s.kt)("p",null,"\u0421ontains licenses of third-party libraries that are located in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/contrib"},"contrib")," directory of ClickHouse sources."),(0,s.kt)("p",null,"Columns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"library_name")," (",(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the library, which is license connected with."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"license_type")," (",(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 License type \u2014 e.g. Apache, MIT."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"license_path")," (",(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Path to the file with the license text."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"license_text")," (",(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 License text.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT library_name, license_type, license_path FROM system.licenses LIMIT 15\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500library_name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500license_type\u2500\u252c\u2500license_path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 FastMemcpy         \u2502 MIT          \u2502 /contrib/FastMemcpy/LICENSE         \u2502\n\u2502 arrow              \u2502 Apache       \u2502 /contrib/arrow/LICENSE.txt          \u2502\n\u2502 avro               \u2502 Apache       \u2502 /contrib/avro/LICENSE.txt           \u2502\n\u2502 aws-c-common       \u2502 Apache       \u2502 /contrib/aws-c-common/LICENSE       \u2502\n\u2502 aws-c-event-stream \u2502 Apache       \u2502 /contrib/aws-c-event-stream/LICENSE \u2502\n\u2502 aws-checksums      \u2502 Apache       \u2502 /contrib/aws-checksums/LICENSE      \u2502\n\u2502 aws                \u2502 Apache       \u2502 /contrib/aws/LICENSE.txt            \u2502\n\u2502 base64             \u2502 BSD 2-clause \u2502 /contrib/base64/LICENSE             \u2502\n\u2502 boost              \u2502 Boost        \u2502 /contrib/boost/LICENSE_1_0.txt      \u2502\n\u2502 brotli             \u2502 MIT          \u2502 /contrib/brotli/LICENSE             \u2502\n\u2502 capnproto          \u2502 MIT          \u2502 /contrib/capnproto/LICENSE          \u2502\n\u2502 cassandra          \u2502 Apache       \u2502 /contrib/cassandra/LICENSE.txt      \u2502\n\u2502 cctz               \u2502 Apache       \u2502 /contrib/cctz/LICENSE.txt           \u2502\n\u2502 cityhash102        \u2502 MIT          \u2502 /contrib/cityhash102/COPYING        \u2502\n\u2502 cppkafka           \u2502 BSD 2-clause \u2502 /contrib/cppkafka/LICENSE           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/licenses"},"Original article")," "))}f.isMDXComponent=!0}}]);