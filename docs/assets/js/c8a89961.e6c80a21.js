"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49014],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81037:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},l="\u7cfb\u7edf\u3002\u5408\u5e76",m={unversionedId:"zh/operations/system-tables/merges",id:"zh/operations/system-tables/merges",title:"\u7cfb\u7edf\u3002\u5408\u5e76",description:"system-merges}",source:"@site/docs/zh/operations/system-tables/merges.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/merges",permalink:"/docs/zh/operations/system-tables/merges",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/merges.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.merge_tree_settings",permalink:"/docs/zh/operations/system-tables/merge_tree_settings"},next:{title:"\u7cfb\u7edf\u3002metric_log",permalink:"/docs/zh/operations/system-tables/metric_log"}},c={},p=[],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-merges"},"\u7cfb\u7edf\u3002\u5408\u5e76"),(0,o.kt)("p",null,"\u5305\u542b\u6709\u5173MergeTree\u7cfb\u5217\u4e2d\u8868\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u5408\u5e76\u548c\u90e8\u4ef6\u7a81\u53d8\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u5217:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"database")," (String) \u2014 The name of the database the table is in."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"table")," (String) \u2014 Table name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2014 The time elapsed (in seconds) since the merge started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"progress")," (Float64) \u2014 The percentage of completed work from 0 to 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"num_parts")," (UInt64) \u2014 The number of pieces to be merged."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result_part_name")," (String) \u2014 The name of the part that will be formed as the result of merging."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_mutation")," (UInt8)-1\u5982\u679c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u4e00\u4e2a\u90e8\u5206\u7a81\u53d8."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"total_size_bytes_compressed")," (UInt64) \u2014 The total size of the compressed data in the merged chunks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"total_size_marks")," (UInt64) \u2014 The total number of marks in the merged parts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes_read_uncompressed")," (UInt64) \u2014 Number of bytes read, uncompressed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2014 Number of rows read."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes_written_uncompressed")," (UInt64) \u2014 Number of bytes written, uncompressed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows_written")," (UInt64) \u2014 Number of rows written.")))}d.isMDXComponent=!0}}]);