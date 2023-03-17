"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),o=s(n),m=l,k=o["".concat(p,".").concat(m)]||o[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[o]="string"==typeof e?e:l,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:41,sidebar_label:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178"},i="\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178",c={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",title:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178",description:"dicts-external-dicts-dict-layout}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:41,sidebar_label:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178"},sidebar:"chinese",previous:{title:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},next:{title:"\u5b57\u5178\u66f4\u65b0",permalink:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"}},p={},s=[{value:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178\u7684\u65b9\u6cd5",id:"ways-to-store-dictionaries-in-memory",level:2},{value:"\u5e73",id:"flat",level:3},{value:"\u6563\u5217",id:"dicts-external_dicts_dict_layout-hashed",level:3},{value:"sparse_hashed",id:"dicts-external_dicts_dict_layout-sparse_hashed",level:3},{value:"complex_key_hashed",id:"complex-key-hashed",level:3},{value:"range_hashed",id:"range-hashed",level:3},{value:"\u7f13\u5b58",id:"cache",level:3},{value:"complex_key_cache",id:"complex-key-cache",level:3},{value:"\u76f4\u63a5",id:"direct",level:3},{value:"ip_trie",id:"ip-trie",level:3}],d={toc:s},o="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(o,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dicts-external-dicts-dict-layout"},"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178"),(0,l.kt)("p",null,"\u6709\u591a\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5c06\u5b57\u5178\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae ",(0,l.kt)("a",{parentName:"p",href:"#flat"},"\u5e73"),", ",(0,l.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_layout-hashed"},"\u6563\u5217")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"#complex-key-hashed"},"complex_key_hashed"),". \u5176\u63d0\u4f9b\u6700\u4f73\u7684\u5904\u7406\u901f\u5ea6\u3002"),(0,l.kt)("p",null,"\u4e0d\u5efa\u8bae\u4f7f\u7528\u7f13\u5b58\uff0c\u56e0\u4e3a\u6027\u80fd\u53ef\u80fd\u8f83\u5dee\uff0c\u5e76\u4e14\u96be\u4ee5\u9009\u62e9\u6700\u4f73\u53c2\u6570\u3002 \u9605\u8bfb\u66f4\u591a\u7684\u90e8\u5206 \u201c",(0,l.kt)("a",{parentName:"p",href:"#cache"},"\u7f13\u5b58"),"\u201d."),(0,l.kt)("p",null,"\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u63d0\u9ad8\u5b57\u5178\u6027\u80fd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528\u8be5\u51fd\u6570\u4ee5\u4f7f\u7528\u540e\u7684\u5b57\u5178 ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY"),"."),(0,l.kt)("li",{parentName:"ul"},'\u5c06\u8981\u63d0\u53d6\u7684\u5c5e\u6027\u6807\u8bb0\u4e3a"\u6ce8\u5c04"\u3002 \u5982\u679c\u4e0d\u540c\u7684\u5c5e\u6027\u503c\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684\u952e\uff0c\u5219\u79f0\u4e3a\u6ce8\u5c04\u5c5e\u6027\u3002 \u6240\u4ee5\u5f53 ',(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY")," \u4f7f\u7528\u7531\u952e\u83b7\u53d6\u5c5e\u6027\u503c\u7684\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u4f1a\u81ea\u52a8\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY"),".")),(0,l.kt)("p",null,"ClickHouse\u4e3a\u5b57\u5178\u4e2d\u7684\u9519\u8bef\u751f\u6210\u5f02\u5e38\u3002 \u9519\u8bef\u793a\u4f8b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u52a0\u8f7d\u6b63\u5728\u8bbf\u95ee\u7684\u5b57\u5178\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u9519\u8bef ",(0,l.kt)("inlineCode",{parentName:"li"},"cached")," \u5b57\u5178")),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u67e5\u770b\u5916\u90e8\u5b57\u5178\u7684\u5217\u8868\u53ca\u5176\u72b6\u6001 ",(0,l.kt)("inlineCode",{parentName:"p"},"system.dictionaries")," \u684c\u5b50"),(0,l.kt)("p",null,"\u914d\u7f6e\u5982\u4e0b\u6240\u793a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        ...\n        <layout>\n            <layout_type>\n                \x3c!-- layout settings --\x3e\n            </layout_type>\n        </layout>\n        ...\n    </dictionary>\n</clickhouse>\n")),(0,l.kt)("p",null,"\u76f8\u5e94\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-dictionary-query"},"DDL-\u67e5\u8be2"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (...)\n...\nLAYOUT(LAYOUT_TYPE(param value)) -- layout settings\n...\n")),(0,l.kt)("h2",{id:"ways-to-store-dictionaries-in-memory"},"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178\u7684\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flat"},"\u5e73")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_layout-hashed"},"\u6563\u5217")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_layout-sparse_hashed"},"sparse_hashed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cache"},"\u7f13\u5b58")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#direct"},"\u76f4\u63a5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#range-hashed"},"range_hashed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#complex-key-hashed"},"complex_key_hashed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#complex-key-cache"},"complex_key_cache")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ip-trie"},"ip_trie"))),(0,l.kt)("h3",{id:"flat"},"\u5e73"),(0,l.kt)("p",null,"\u5b57\u5178\u4ee5\u5e73\u9762\u6570\u7ec4\u7684\u5f62\u5f0f\u5b8c\u5168\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002 \u5b57\u5178\u4f7f\u7528\u591a\u5c11\u5185\u5b58\uff1f \u91cf\u4e0e\u6700\u5927\u952e\u7684\u5927\u5c0f\uff08\u5728\u4f7f\u7528\u7684\u7a7a\u95f4\u4e2d\uff09\u6210\u6b63\u6bd4\u3002"),(0,l.kt)("p",null,"\u5b57\u5178\u952e\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u548c\u503c\u9650\u5236\u4e3a500,000\u3002 \u5982\u679c\u5728\u521b\u5efa\u5b57\u5178\u65f6\u53d1\u73b0\u8f83\u5927\u7684\u952e\uff0cClickHouse\u5c06\u5f15\u53d1\u5f02\u5e38\uff0c\u4e0d\u4f1a\u521b\u5efa\u5b57\u5178\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u6240\u6709\u7c7b\u578b\u7684\u6765\u6e90\u3002 \u66f4\u65b0\u65f6\uff0c\u6570\u636e\uff08\u6765\u81ea\u6587\u4ef6\u6216\u8868\uff09\u5c06\u5b8c\u6574\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,"\u6b64\u65b9\u6cd5\u5728\u5b58\u50a8\u5b57\u5178\u7684\u6240\u6709\u53ef\u7528\u65b9\u6cd5\u4e2d\u63d0\u4f9b\u4e86\u6700\u4f73\u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <flat />\n</layout>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(FLAT())\n")),(0,l.kt)("h3",{id:"dicts-external_dicts_dict_layout-hashed"},"\u6563\u5217"),(0,l.kt)("p",null,"\u8be5\u5b57\u5178\u4ee5\u54c8\u5e0c\u8868\u7684\u5f62\u5f0f\u5b8c\u5168\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002 \u5b57\u5178\u4e2d\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684\u5e26\u6709\u4efb\u610f\u6807\u8bc6\u7b26\u7684\u5143\u7d20\uff0c\u5728\u5b9e\u8df5\u4e2d\uff0c\u952e\u7684\u6570\u91cf\u53ef\u4ee5\u8fbe\u5230\u6570\u5343\u4e07\u9879\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u6240\u6709\u7c7b\u578b\u7684\u6765\u6e90\u3002 \u66f4\u65b0\u65f6\uff0c\u6570\u636e\uff08\u6765\u81ea\u6587\u4ef6\u6216\u8868\uff09\u5c06\u5b8c\u6574\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <hashed />\n</layout>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(HASHED())\n")),(0,l.kt)("h3",{id:"dicts-external_dicts_dict_layout-sparse_hashed"},"sparse_hashed"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"hashed"),"\uff0c\u4f46\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u6709\u5229\u4e8e\u66f4\u591a\u7684CPU\u4f7f\u7528\u7387\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <sparse_hashed />\n</layout>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(SPARSE_HASHED())\n")),(0,l.kt)("h3",{id:"complex-key-hashed"},"complex_key_hashed"),(0,l.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\u662f\u7528\u4e8e\u590d\u5408 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u952e"),". \u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"hashed"),"."),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <complex_key_hashed />\n</layout>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(COMPLEX_KEY_HASHED())\n")),(0,l.kt)("h3",{id:"range-hashed"},"range_hashed"),(0,l.kt)("p",null,"\u5b57\u5178\u4ee5\u54c8\u5e0c\u8868\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5e8f\u8303\u56f4\u53ca\u5176\u76f8\u5e94\u503c\u7684\u6570\u7ec4\u3002"),(0,l.kt)("p",null,"\u6b64\u5b58\u50a8\u65b9\u6cd5\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e\u6563\u5217\u65b9\u5f0f\u76f8\u540c\uff0c\u9664\u4e86\u952e\u4e4b\u5916\uff0c\u8fd8\u5141\u8bb8\u4f7f\u7528\u65e5\u671f/\u65f6\u95f4\uff08\u4efb\u610f\u6570\u5b57\u7c7b\u578b\uff09\u8303\u56f4\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a\u8be5\u8868\u683c\u5305\u542b\u6bcf\u4e2a\u5e7f\u544a\u5ba2\u6237\u7684\u6298\u6263\uff0c\u683c\u5f0f\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"+---------|-------------|-------------|------+\n| advertiser id | discount start date | discount end date | amount |\n+===============+=====================+===================+========+\n| 123           | 2015-01-01          | 2015-01-15        | 0.15   |\n+---------|-------------|-------------|------+\n| 123           | 2015-01-16          | 2015-01-31        | 0.25   |\n+---------|-------------|-------------|------+\n| 456           | 2015-01-01          | 2015-01-15        | 0.05   |\n+---------|-------------|-------------|------+\n")),(0,l.kt)("p",null,"\u8981\u5bf9\u65e5\u671f\u8303\u56f4\u4f7f\u7528\u793a\u4f8b\uff0c\u8bf7\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"range_min")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"range_max")," \u4e2d\u7684\u5143\u7d20 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u7ed3\u6784"),". \u8fd9\u4e9b\u5143\u7d20\u5fc5\u987b\u5305\u542b\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u548c",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \uff08\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u5982\u679c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u7c7b\u578b\u5c06\u4f7f\u7528-Date\uff09\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," \u53ef\u4ee5\u662f\u4efb\u4f55\u6570\u5b57\u7c7b\u578b\uff08Date/DateTime/UInt64/Int32/others\uff09\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <id>\n        <name>Id</name>\n    </id>\n    <range_min>\n        <name>first</name>\n        <type>Date</type>\n    </range_min>\n    <range_max>\n        <name>last</name>\n        <type>Date</type>\n    </range_max>\n    ...\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict (\n    id UInt64,\n    first Date,\n    last Date\n)\nPRIMARY KEY id\nLAYOUT(RANGE_HASHED())\nRANGE(MIN first MAX last)\n")),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b57\u5178\uff0c\u60a8\u9700\u8981\u5c06\u9644\u52a0\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"dictGetT")," \u51fd\u6570\uff0c\u4e3a\u5176\u9009\u62e9\u4e00\u4e2a\u8303\u56f4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetT('dict_name', 'attr_name', id, date)\n")),(0,l.kt)("p",null,"\u6b64\u51fd\u6570\u8fd4\u56de\u6307\u5b9a\u7684\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"s\u548c\u5305\u542b\u4f20\u9012\u65e5\u671f\u7684\u65e5\u671f\u8303\u56f4\u3002"),(0,l.kt)("p",null,"\u7b97\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u672a\u627e\u5230\u6216\u8303\u56f4\u672a\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"id"),"\uff0c\u5b83\u8fd4\u56de\u5b57\u5178\u7684\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b58\u5728\u91cd\u53e0\u8303\u56f4\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u8303\u56f4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8303\u56f4\u5206\u9694\u7b26\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," \u6216\u65e0\u6548\u65e5\u671f\uff08\u59821900-01-01\u62162039-01-01\uff09\uff0c\u8303\u56f4\u4fdd\u6301\u6253\u5f00\u72b6\u6001\u3002 \u8303\u56f4\u53ef\u4ee5\u5728\u4e24\u4fa7\u6253\u5f00\u3002")),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n        <dictionary>\n\n                ...\n\n                <layout>\n                        <range_hashed />\n                </layout>\n\n                <structure>\n                        <id>\n                                <name>Abcdef</name>\n                        </id>\n                        <range_min>\n                                <name>StartTimeStamp</name>\n                                <type>UInt64</type>\n                        </range_min>\n                        <range_max>\n                                <name>EndTimeStamp</name>\n                                <type>UInt64</type>\n                        </range_max>\n                        <attribute>\n                                <name>XXXType</name>\n                                <type>String</type>\n                                <null_value />\n                        </attribute>\n                </structure>\n\n        </dictionary>\n</clickhouse>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict(\n    Abcdef UInt64,\n    StartTimeStamp UInt64,\n    EndTimeStamp UInt64,\n    XXXType String DEFAULT ''\n)\nPRIMARY KEY Abcdef\nRANGE(MIN StartTimeStamp MAX EndTimeStamp)\n")),(0,l.kt)("h3",{id:"cache"},"\u7f13\u5b58"),(0,l.kt)("p",null,"\u5b57\u5178\u5b58\u50a8\u5728\u5177\u6709\u56fa\u5b9a\u6570\u91cf\u7684\u5355\u5143\u683c\u7684\u7f13\u5b58\u4e2d\u3002 \u8fd9\u4e9b\u5355\u5143\u683c\u5305\u542b\u7ecf\u5e38\u4f7f\u7528\u7684\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u641c\u7d22\u5b57\u5178\u65f6\uff0c\u9996\u5148\u641c\u7d22\u7f13\u5b58\u3002 \u5bf9\u4e8e\u6bcf\u4e2a\u6570\u636e\u5757\uff0c\u6240\u6709\u5728\u7f13\u5b58\u4e2d\u627e\u4e0d\u5230\u6216\u8fc7\u671f\u7684\u5bc6\u94a5\u90fd\u4ece\u6e90\u8bf7\u6c42\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT attrs... FROM db.table WHERE id IN (k1, k2, ...)"),". \u7136\u540e\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u5199\u5165\u9ad8\u901f\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7f13\u5b58\u5b57\u5178\uff0c\u8fc7\u671f ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u4f7f\u7528\u5bff\u547d")," \u53ef\u4ee5\u8bbe\u7f6e\u9ad8\u901f\u7f13\u5b58\u4e2d\u7684\u6570\u636e\u3002 \u5982\u679c\u66f4\u591a\u7684\u65f6\u95f4\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"lifetime")," \u81ea\u4ece\u5728\u5355\u5143\u683c\u4e2d\u52a0\u8f7d\u6570\u636e\u4ee5\u6765\uff0c\u5355\u5143\u683c\u7684\u503c\u4e0d\u88ab\u4f7f\u7528\uff0c\u5e76\u4e14\u5728\u4e0b\u6b21\u9700\u8981\u4f7f\u7528\u65f6\u91cd\u65b0\u8bf7\u6c42\u5b83\u3002\n\u8fd9\u662f\u5b58\u50a8\u5b57\u5178\u7684\u6240\u6709\u65b9\u6cd5\u4e2d\u6700\u4e0d\u6709\u6548\u7684\u3002 \u7f13\u5b58\u7684\u901f\u5ea6\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u6b63\u786e\u7684\u8bbe\u7f6e\u548c\u4f7f\u7528\u573a\u666f\u3002 \u7f13\u5b58\u7c7b\u578b\u5b57\u5178\u53ea\u6709\u5728\u547d\u4e2d\u7387\u8db3\u591f\u9ad8\uff08\u63a8\u835099%\u6216\u66f4\u9ad8\uff09\u65f6\u624d\u80fd\u8868\u73b0\u826f\u597d\u3002 \u60a8\u53ef\u4ee5\u67e5\u770b\u5e73\u5747\u547d\u4e2d\u7387 ",(0,l.kt)("inlineCode",{parentName:"p"},"system.dictionaries")," \u684c\u5b50"),(0,l.kt)("p",null,"\u8981\u63d0\u9ad8\u7f13\u5b58\u6027\u80fd\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u5b50\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\uff0c\u5e76\u4ece\u5916\u90e8\u8c03\u7528\u5b57\u5178\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90"),":MySQL\u7684,ClickHouse\u7684,\u53ef\u6267\u884c\u6587\u4ef6,HTTP."),(0,l.kt)("p",null,"\u8bbe\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n    <cache>\n        \x3c!-- The size of the cache, in number of cells. Rounded up to a power of two. --\x3e\n        <size_in_cells>1000000000</size_in_cells>\n    </cache>\n</layout>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(CACHE(SIZE_IN_CELLS 1000000000))\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u8db3\u591f\u5927\u7684\u7f13\u5b58\u5927\u5c0f\u3002 \u4f60\u9700\u8981\u5c1d\u8bd5\u9009\u62e9\u7ec6\u80de\u7684\u6570\u91cf:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u4e00\u4e9b\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u67e5\u8be2\uff0c\u76f4\u5230\u7f13\u5b58\u5b8c\u5168\u6ee1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8bc4\u4f30\u5185\u5b58\u6d88\u8017 ",(0,l.kt)("inlineCode",{parentName:"li"},"system.dictionaries")," \u684c\u5b50"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u52a0\u6216\u51cf\u5c11\u5355\u5143\u6570\uff0c\u76f4\u5230\u8fbe\u5230\u6240\u9700\u7684\u5185\u5b58\u6d88\u8017\u3002")),(0,l.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u4e0d\u8981\u4f7f\u7528ClickHouse\u4f5c\u4e3a\u6e90\uff0c\u56e0\u4e3a\u5904\u7406\u968f\u673a\u8bfb\u53d6\u7684\u67e5\u8be2\u901f\u5ea6\u5f88\u6162\u3002'),(0,l.kt)("h3",{id:"complex-key-cache"},"complex_key_cache"),(0,l.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\u662f\u7528\u4e8e\u590d\u5408 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u952e"),". \u7c7b\u4f3c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"cache"),"."),(0,l.kt)("h3",{id:"direct"},"\u76f4\u63a5"),(0,l.kt)("p",null,"\u5b57\u5178\u4e0d\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u5e76\u4e14\u5728\u5904\u7406\u8bf7\u6c42\u671f\u95f4\u76f4\u63a5\u8f6c\u5230\u6e90\u3002"),(0,l.kt)("p",null,"\u5b57\u5178\u952e\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u7c7b\u578b\u7684 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90"),"\uff0c\u9664\u4e86\u672c\u5730\u6587\u4ef6\uff0c\u652f\u6301\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <direct />\n</layout>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(DIRECT())\n")),(0,l.kt)("h3",{id:"ip-trie"},"ip_trie"),(0,l.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\u7528\u4e8e\u5c06\u7f51\u7edc\u524d\u7f00\uff08IP\u5730\u5740\uff09\u6620\u5c04\u5230ASN\u7b49\u5143\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a\u8be5\u8868\u5305\u542b\u7f51\u7edc\u524d\u7f00\u53ca\u5176\u5bf9\u5e94\u7684AS\u53f7\u7801\u548c\u56fd\u5bb6\u4ee3\u7801:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"  +-----------|-----|------+\n  | prefix          | asn   | cca2   |\n  +=================+=======+========+\n  | 202.79.32.0/20  | 17501 | NP     |\n  +-----------|-----|------+\n  | 2620:0:870::/48 | 3856  | US     |\n  +-----------|-----|------+\n  | 2a02:6b8:1::/48 | 13238 | RU     |\n  +-----------|-----|------+\n  | 2001:db8::/32   | 65536 | ZZ     |\n  +-----------|-----|------+\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u6b64\u7c7b\u5e03\u5c40\u65f6\uff0c\u7ed3\u6784\u5fc5\u987b\u5177\u6709\u590d\u5408\u952e\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <key>\n        <attribute>\n            <name>prefix</name>\n            <type>String</type>\n        </attribute>\n    </key>\n    <attribute>\n            <name>asn</name>\n            <type>UInt32</type>\n            <null_value />\n    </attribute>\n    <attribute>\n            <name>cca2</name>\n            <type>String</type>\n            <null_value>??</null_value>\n    </attribute>\n    ...\n</structure>\n<layout>\n    <ip_trie>\n        <access_to_key_from_attributes>true</access_to_key_from_attributes>\n    </ip_trie>\n</layout>\n")),(0,l.kt)("p",null,"\u6216"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict (\n    prefix String,\n    asn UInt32,\n    cca2 String DEFAULT '??'\n)\nPRIMARY KEY prefix\n")),(0,l.kt)("p",null,"\u8be5\u952e\u5fc5\u987b\u53ea\u6709\u4e00\u4e2a\u5305\u542b\u5141\u8bb8\u7684IP\u524d\u7f00\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\u5c5e\u6027\u3002 \u8fd8\u4e0d\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u67e5\u8be2\uff0c\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u51fd\u6570 (",(0,l.kt)("inlineCode",{parentName:"p"},"dictGetT")," \u4e0e\u5143\u7ec4\uff09\u81f3\u4e8e\u5177\u6709\u590d\u5408\u952e\u7684\u5b57\u5178:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetT('dict_name', 'attr_name', tuple(ip))\n")),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u91c7\u7528\u4efb\u4e00 ",(0,l.kt)("inlineCode",{parentName:"p"},"UInt32")," \u5bf9\u4e8eIPv4\uff0c\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," \u788c\u83bd\u7984Ipv6\u62e2IPv6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetString('prefix', 'asn', tuple(IPv6StringToNum('2001:db8::1')))\n")),(0,l.kt)("p",null,"\u8fd8\u4e0d\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u3002 \u8be5\u51fd\u6570\u8fd4\u56de\u4e0e\u6b64IP\u5730\u5740\u5bf9\u5e94\u7684\u524d\u7f00\u7684\u5c5e\u6027\u3002 \u5982\u679c\u6709\u91cd\u53e0\u7684\u524d\u7f00\uff0c\u5219\u8fd4\u56de\u6700\u5177\u4f53\u7684\u524d\u7f00\u3002"),(0,l.kt)("p",null,"\u6570\u636e\u5b58\u50a8\u5728\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"trie"),". \u5b83\u5fc5\u987b\u5b8c\u5168\u9002\u5408RAM\u3002"))}u.isMDXComponent=!0}}]);