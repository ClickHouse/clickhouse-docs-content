"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[37362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),y=s,b=u["".concat(i,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(b,c(c({ref:t},p),{},{components:n})):r.createElement(b,c({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97414:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),c=["components"],o={slug:"/zh/operations/system-tables/licenses"},i="system.licenses {#system-tables_system.licenses}",l={unversionedId:"zh/operations/system-tables/licenses",id:"zh/operations/system-tables/licenses",title:"system.licenses {#system-tables_system.licenses}",description:"system-tables_system.licenses}",source:"@site/docs/zh/operations/system-tables/licenses.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/licenses",permalink:"/docs/zh/operations/system-tables/licenses",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/licenses.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/licenses"},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002graphite_retentions",permalink:"/docs/zh/operations/system-tables/graphite_retentions"},next:{title:"system.merge_tree_settings",permalink:"/docs/zh/operations/system-tables/merge_tree_settings"}},p={},m=[],u={toc:m};function y(e){var t=e.components,n=(0,s.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"systemlicenses-system-tables_systemlicenses"},"system.licenses {#system-tables_system.licenses}"),(0,a.kt)("p",null,"\u5305\u542b\u4f4d\u4e8e ClickHouse \u6e90\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/contrib"},"contrib")," \u76ee\u5f55\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\u7684\u8bb8\u53ef\u8bc1."),(0,a.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"library_name")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5e93\u7684\u540d\u79f0, \u5b83\u662f\u4e0e\u4e4b\u8fde\u63a5\u7684\u8bb8\u53ef\u8bc1."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_type")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8bb8\u53ef\u7c7b\u578b-\u4f8b\u5982Apache, MIT."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_path")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u5e26\u6709\u8bb8\u53ef\u6587\u672c\u7684\u6587\u4ef6\u7684\u8def\u5f84."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"license_text")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u8bb8\u53ef\u534f\u8bae\u6587\u672c.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT library_name, license_type, license_path FROM system.licenses LIMIT 15\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500library_name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500license_type\u2500\u252c\u2500license_path\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 FastMemcpy         \u2502 MIT          \u2502 /contrib/FastMemcpy/LICENSE         \u2502\n\u2502 arrow              \u2502 Apache       \u2502 /contrib/arrow/LICENSE.txt          \u2502\n\u2502 avro               \u2502 Apache       \u2502 /contrib/avro/LICENSE.txt           \u2502\n\u2502 aws-c-common       \u2502 Apache       \u2502 /contrib/aws-c-common/LICENSE       \u2502\n\u2502 aws-c-event-stream \u2502 Apache       \u2502 /contrib/aws-c-event-stream/LICENSE \u2502\n\u2502 aws-checksums      \u2502 Apache       \u2502 /contrib/aws-checksums/LICENSE      \u2502\n\u2502 aws                \u2502 Apache       \u2502 /contrib/aws/LICENSE.txt            \u2502\n\u2502 base64             \u2502 BSD 2-clause \u2502 /contrib/base64/LICENSE             \u2502\n\u2502 boost              \u2502 Boost        \u2502 /contrib/boost/LICENSE_1_0.txt      \u2502\n\u2502 brotli             \u2502 MIT          \u2502 /contrib/brotli/LICENSE             \u2502\n\u2502 capnproto          \u2502 MIT          \u2502 /contrib/capnproto/LICENSE          \u2502\n\u2502 cassandra          \u2502 Apache       \u2502 /contrib/cassandra/LICENSE.txt      \u2502\n\u2502 cctz               \u2502 Apache       \u2502 /contrib/cctz/LICENSE.txt           \u2502\n\u2502 cityhash102        \u2502 MIT          \u2502 /contrib/cityhash102/COPYING        \u2502\n\u2502 cppkafka           \u2502 BSD 2-clause \u2502 /contrib/cppkafka/LICENSE           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/licenses"},"\u539f\u59cb\u6587\u7ae0")," "))}y.isMDXComponent=!0}}]);