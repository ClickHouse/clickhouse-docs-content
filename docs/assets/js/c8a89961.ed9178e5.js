"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49014],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},l="\u7cfb\u7edf\u3002\u5408\u5e76",m={unversionedId:"zh/operations/system-tables/merges",id:"zh/operations/system-tables/merges",title:"\u7cfb\u7edf\u3002\u5408\u5e76",description:"system-merges}",source:"@site/docs/zh/operations/system-tables/merges.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/merges",permalink:"/zh/operations/system-tables/merges",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/merges.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.merge_tree_settings",permalink:"/zh/operations/system-tables/merge_tree_settings"},next:{title:"\u7cfb\u7edf\u3002metric_log",permalink:"/zh/operations/system-tables/metric_log"}},c={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-merges"},"\u7cfb\u7edf\u3002\u5408\u5e76"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173MergeTree\u7cfb\u5217\u4e2d\u8868\u5f53\u524d\u6b63\u5728\u8fdb\u884c\u7684\u5408\u5e76\u548c\u90e8\u4ef6\u7a81\u53d8\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (String) \u2014 The name of the database the table is in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (String) \u2014 Table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2014 The time elapsed (in seconds) since the merge started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"progress")," (Float64) \u2014 The percentage of completed work from 0 to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_parts")," (UInt64) \u2014 The number of pieces to be merged."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result_part_name")," (String) \u2014 The name of the part that will be formed as the result of merging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_mutation")," (UInt8)-1\u5982\u679c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u4e00\u4e2a\u90e8\u5206\u7a81\u53d8."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_bytes_compressed")," (UInt64) \u2014 The total size of the compressed data in the merged chunks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total_size_marks")," (UInt64) \u2014 The total number of marks in the merged parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_read_uncompressed")," (UInt64) \u2014 Number of bytes read, uncompressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2014 Number of rows read."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bytes_written_uncompressed")," (UInt64) \u2014 Number of bytes written, uncompressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rows_written")," (UInt64) \u2014 Number of rows written.")))}d.isMDXComponent=!0}}]);