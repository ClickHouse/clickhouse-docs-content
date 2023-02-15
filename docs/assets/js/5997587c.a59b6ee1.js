"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[53524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/zh/operations/system-tables/graphite_retentions",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},o="\u7cfb\u7edf\u3002graphite_retentions",s={unversionedId:"zh/operations/system-tables/graphite_retentions",id:"zh/operations/system-tables/graphite_retentions",title:"\u7cfb\u7edf\u3002graphite_retentions",description:"system-graphite-retentions}",source:"@site/docs/zh/operations/system-tables/graphite_retentions.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/graphite_retentions",permalink:"/docs/zh/operations/system-tables/graphite_retentions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/graphite_retentions.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/graphite_retentions",machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.grants",permalink:"/docs/zh/operations/system-tables/grants"},next:{title:"system.licenses {#system-tables_system.licenses}",permalink:"/docs/zh/operations/system-tables/licenses"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-graphite-retentions"},"\u7cfb\u7edf\u3002graphite_retentions"),(0,a.kt)("p",null,"\u5305\u542b\u6709\u5173\u53c2\u6570\u7684\u4fe1\u606f ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-graphite"},"graphite_rollup")," \u8fd9\u662f\u5728\u8868\u4e2d\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/graphitemergetree"},"*","GraphiteMergeTree")," \u5f15\u64ce"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_name")," (\u5b57\u7b26\u4e32) - ",(0,a.kt)("inlineCode",{parentName:"li"},"graphite_rollup")," \u53c2\u6570\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regexp")," (String)-\u6307\u6807\u540d\u79f0\u7684\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function")," (String)-\u805a\u5408\u51fd\u6570\u7684\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"age")," (UInt64)-\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u6570\u636e\u7684\u6700\u5c0f\u671f\u9650\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"precision")," \uff08UInt64\uff09-\u5982\u4f55\u7cbe\u786e\u5730\u5b9a\u4e49\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u6570\u636e\u7684\u5e74\u9f84\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"priority")," (UInt16)-\u6a21\u5f0f\u4f18\u5148\u7ea7\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_default")," (UInt8)-\u6a21\u5f0f\u662f\u5426\u4e3a\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tables.database")," (Array(String))-\u4f7f\u7528\u6570\u636e\u5e93\u8868\u540d\u79f0\u7684\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"li"},"config_name")," \u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tables.table")," (Array(String))-\u4f7f\u7528\u8868\u540d\u79f0\u7684\u6570\u7ec4 ",(0,a.kt)("inlineCode",{parentName:"li"},"config_name")," \u53c2\u6570\u3002")))}u.isMDXComponent=!0}}]);