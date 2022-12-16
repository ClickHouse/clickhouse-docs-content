"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64167:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using a dictionary with ClickHouse Cloud please use the DDL query option to create your dictionaries, and create your dictionary as user ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),".\nAlso, verify the list of supported dictionary sources in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/whats-new/cloud-compatibility"},"Cloud Compatibility guide"),"."))))}l.isMDXComponent=!0},62250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(64167);const l={slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",sidebar_position:41,sidebar_label:"Storing Dictionaries in Memory"},s="Storing Dictionaries in Memory",o={unversionedId:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",id:"en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",title:"Storing Dictionaries in Memory",description:"There are a variety of ways to store dictionaries in memory.",source:"@site/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout.md",sourceDirName:"en/sql-reference/dictionaries/external-dictionaries",slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout",sidebar_position:41,sidebar_label:"Storing Dictionaries in Memory"},sidebar:"english",previous:{title:"Configuring a Dictionary",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict"},next:{title:"Dictionary Updates",permalink:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"}},c={},p=[{value:"Ways to Store Dictionaries in Memory",id:"ways-to-store-dictionaries-in-memory",level:2},{value:"flat",id:"flat",level:3},{value:"hashed",id:"hashed",level:3},{value:"sparse_hashed",id:"sparse_hashed",level:3},{value:"complex_key_hashed",id:"complex_key_hashed",level:3},{value:"complex_key_sparse_hashed",id:"complex_key_sparse_hashed",level:3},{value:"hashed_array",id:"hashed_array",level:3},{value:"complex_key_hashed_array",id:"complex_key_hashed_array",level:3},{value:"range_hashed",id:"range_hashed",level:3},{value:"complex_key_range_hashed",id:"complex_key_range_hashed",level:3},{value:"cache",id:"cache",level:3},{value:"complex_key_cache",id:"complex_key_cache",level:3},{value:"ssd_cache",id:"ssd_cache",level:3},{value:"complex_key_ssd_cache",id:"complex_key_ssd_cache",level:3},{value:"direct",id:"direct",level:3},{value:"complex_key_direct",id:"complex_key_direct",level:3},{value:"ip_trie",id:"ip_trie",level:3},{value:"Related Content",id:"related-content",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storing-dictionaries-in-memory"},"Storing Dictionaries in Memory"),(0,i.kt)("p",null,"There are a variety of ways to store dictionaries in memory."),(0,i.kt)("p",null,"We recommend ",(0,i.kt)("a",{parentName:"p",href:"#flat"},"flat"),", ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_layout-hashed"},"hashed")," and ",(0,i.kt)("a",{parentName:"p",href:"#complex-key-hashed"},"complex_key_hashed"),", which provide optimal processing speed."),(0,i.kt)("p",null,"Caching is not recommended because of potentially poor performance and difficulties in selecting optimal parameters. Read more in the section ",(0,i.kt)("a",{parentName:"p",href:"#cache"},"cache"),"."),(0,i.kt)("p",null,"There are several ways to improve dictionary performance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Call the function for working with the dictionary after ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP BY"),"."),(0,i.kt)("li",{parentName:"ul"},"Mark attributes to extract as injective. An attribute is called injective if different attribute values correspond to different keys. So when ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP BY")," uses a function that fetches an attribute value by the key, this function is automatically taken out of ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP BY"),".")),(0,i.kt)("p",null,"ClickHouse generates an exception for errors with dictionaries. Examples of errors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The dictionary being accessed could not be loaded."),(0,i.kt)("li",{parentName:"ul"},"Error querying a ",(0,i.kt)("inlineCode",{parentName:"li"},"cached")," dictionary.")),(0,i.kt)("p",null,"You can view the list of dictionaries and their statuses in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/dictionaries"},"system.dictionaries")," table."),(0,i.kt)(r.ZP,{mdxType:"CloudDetails"}),(0,i.kt)("p",null,"The configuration looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        ...\n        <layout>\n            <layout_type>\n                \x3c!-- layout settings --\x3e\n            </layout_type>\n        </layout>\n        ...\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"Corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/dictionary"},"DDL-query"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY (...)\n...\nLAYOUT(LAYOUT_TYPE(param value)) -- layout settings\n...\n")),(0,i.kt)("p",null,"Dictionaries without word ",(0,i.kt)("inlineCode",{parentName:"p"},"complex-key*")," in a layout have a key with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type, ",(0,i.kt)("inlineCode",{parentName:"p"},"complex-key*")," dictionaries have a composite key (complex, with arbitrary types)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," keys in XML dictionaries are defined with ",(0,i.kt)("inlineCode",{parentName:"p"},"<id>")," tag."),(0,i.kt)("p",null,"Configuration example (column key_column has UInt64 type):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"...\n<structure>\n    <id>\n        <name>key_column</name>\n    </id>\n...\n")),(0,i.kt)("p",null,"Composite ",(0,i.kt)("inlineCode",{parentName:"p"},"complex")," keys XML dictionaries are defined ",(0,i.kt)("inlineCode",{parentName:"p"},"<key>")," tag."),(0,i.kt)("p",null,"Configuration example of a composite key (key has one element with ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String")," type):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"...\n<structure>\n    <key>\n        <attribute>\n            <name>country_code</name>\n            <type>String</type>\n        </attribute>\n    </key>\n...\n")),(0,i.kt)("h2",{id:"ways-to-store-dictionaries-in-memory"},"Ways to Store Dictionaries in Memory"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#flat"},"flat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_layout-hashed"},"hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_layout-sparse_hashed"},"sparse_hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-hashed"},"complex_key_hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-sparse-hashed"},"complex_key_sparse_hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dicts-external_dicts_dict_layout-hashed-array"},"hashed_array")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-hashed-array"},"complex_key_hashed_array")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#range-hashed"},"range_hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-range-hashed"},"complex_key_range_hashed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cache"},"cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-cache"},"complex_key_cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ssd-cache"},"ssd_cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-ssd-cache"},"complex_key_ssd_cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#direct"},"direct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#complex-key-direct"},"complex_key_direct")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ip-trie"},"ip_trie"))),(0,i.kt)("h3",{id:"flat"},"flat"),(0,i.kt)("p",null,"The dictionary is completely stored in memory in the form of flat arrays. How much memory does the dictionary use? The amount is proportional to the size of the largest key (in space used)."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type and the value is limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"max_array_size")," (by default \u2014 500,000). If a larger key is discovered when creating the dictionary, ClickHouse throws an exception and does not create the dictionary. Dictionary flat arrays initial size is controlled by ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_array_size")," setting (by default \u2014 1024)."),(0,i.kt)("p",null,"All types of sources are supported. When updating, data (from a file or from a table) is read in it entirety."),(0,i.kt)("p",null,"This method provides the best performance among all available methods of storing the dictionary."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <flat>\n    <initial_array_size>50000</initial_array_size>\n    <max_array_size>5000000</max_array_size>\n  </flat>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(FLAT(INITIAL_ARRAY_SIZE 50000 MAX_ARRAY_SIZE 5000000))\n")),(0,i.kt)("h3",{id:"hashed"},"hashed"),(0,i.kt)("p",null,"The dictionary is completely stored in memory in the form of a hash table. The dictionary can contain any number of elements with any identifiers In practice, the number of keys can reach tens of millions of items."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"preallocate")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),") the hash table will be preallocated (this will make the dictionary load faster). But note that you should use it only if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The source support an approximate number of elements (for now it is supported only by the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClickHouse")," source)."),(0,i.kt)("li",{parentName:"ul"},"There are no duplicates in the data (otherwise it may increase memory usage for the hashtable).")),(0,i.kt)("p",null,"All types of sources are supported. When updating, data (from a file or from a table) is read in its entirety."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <hashed>\n    <preallocate>0</preallocate>\n  </hashed>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(HASHED(PREALLOCATE 0))\n")),(0,i.kt)("h3",{id:"sparse_hashed"},"sparse_hashed"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"hashed"),", but uses less memory in favor more CPU usage."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("p",null,"It will be also preallocated so as ",(0,i.kt)("inlineCode",{parentName:"p"},"hashed")," (with ",(0,i.kt)("inlineCode",{parentName:"p"},"preallocate")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"), and note that it is even more significant for ",(0,i.kt)("inlineCode",{parentName:"p"},"sparse_hashed"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <sparse_hashed />\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(SPARSE_HASHED([PREALLOCATE 0]))\n")),(0,i.kt)("h3",{id:"complex_key_hashed"},"complex_key_hashed"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"hashed"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <complex_key_hashed />\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(COMPLEX_KEY_HASHED())\n")),(0,i.kt)("h3",{id:"complex_key_sparse_hashed"},"complex_key_sparse_hashed"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_layout-sparse_hashed"},"sparse_hashed"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <complex_key_sparse_hashed />\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(COMPLEX_KEY_SPARSE_HASHED())\n")),(0,i.kt)("h3",{id:"hashed_array"},"hashed_array"),(0,i.kt)("p",null,"The dictionary is completely stored in memory. Each attribute is stored in an array. The key attribute is stored in the form of a hashed table where value is an index in the attributes array. The dictionary can contain any number of elements with any identifiers. In practice, the number of keys can reach tens of millions of items."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("p",null,"All types of sources are supported. When updating, data (from a file or from a table) is read in its entirety."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <hashed_array>\n  </hashed_array>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(HASHED_ARRAY())\n")),(0,i.kt)("h3",{id:"complex_key_hashed_array"},"complex_key_hashed_array"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("a",{parentName:"p",href:"#dicts-external_dicts_dict_layout-hashed-array"},"hashed_array"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <complex_key_hashed_array />\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(COMPLEX_KEY_HASHED_ARRAY())\n")),(0,i.kt)("h3",{id:"range_hashed"},"range_hashed"),(0,i.kt)("p",null,"The dictionary is stored in memory in the form of a hash table with an ordered array of ranges and their corresponding values."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type.\nThis storage method works the same way as hashed and allows using date/time (arbitrary numeric type) ranges in addition to the key."),(0,i.kt)("p",null,"Example: The table contains discounts for each advertiser in the format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"+---------|-------------|-------------|------+\n| advertiser id | discount start date | discount end date | amount |\n+===============+=====================+===================+========+\n| 123           | 2015-01-01          | 2015-01-15        | 0.15   |\n+---------|-------------|-------------|------+\n| 123           | 2015-01-16          | 2015-01-31        | 0.25   |\n+---------|-------------|-------------|------+\n| 456           | 2015-01-01          | 2015-01-15        | 0.05   |\n+---------|-------------|-------------|------+\n")),(0,i.kt)("p",null,"To use a sample for date ranges, define the ",(0,i.kt)("inlineCode",{parentName:"p"},"range_min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"range_max")," elements in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"structure"),". These elements must contain elements ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," (if ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is not specified, the default type will be used - Date). ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," can be any numeric type (Date / DateTime / UInt64 / Int32 / others)."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Values of ",(0,i.kt)("inlineCode",{parentName:"p"},"range_min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"range_max")," should fit in ",(0,i.kt)("inlineCode",{parentName:"p"},"Int64")," type."))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <id>\n        <name>Id</name>\n    </id>\n    <range_min>\n        <name>first</name>\n        <type>Date</type>\n    </range_min>\n    <range_max>\n        <name>last</name>\n        <type>Date</type>\n    </range_max>\n    ...\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict (\n    id UInt64,\n    first Date,\n    last Date,\n    advertiser_id UInt64\n)\nPRIMARY KEY id\nSOURCE(CLICKHOUSE(TABLE 'date_table'))\nLIFETIME(MIN 1 MAX 1000)\nLAYOUT(RANGE_HASHED())\nRANGE(MIN first MAX last)\n")),(0,i.kt)("p",null,"To work with these dictionaries, you need to pass an additional argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dictGet")," function, for which a range is selected:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGet('dict_name', 'attr_name', id, date)\n")),(0,i.kt)("p",null,"Query example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT dictGet('somedict', 'advertiser_id', 1, '2022-10-20 23:20:10.000'::DateTime64::UInt64);\n")),(0,i.kt)("p",null,"This function returns the value for the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s and the date range that includes the passed date."),(0,i.kt)("p",null,"Details of the algorithm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," is not found or a range is not found for the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", it returns the default value for the dictionary."),(0,i.kt)("li",{parentName:"ul"},"If there are overlapping ranges, it returns value for any (random) range."),(0,i.kt)("li",{parentName:"ul"},"If the range delimiter is ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," or an invalid date (such as 1900-01-01), the range is open. The range can be open on both sides.")),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <dictionary>\n        ...\n\n        <layout>\n            <range_hashed />\n        </layout>\n\n        <structure>\n            <id>\n                <name>Abcdef</name>\n            </id>\n            <range_min>\n                <name>StartTimeStamp</name>\n                <type>UInt64</type>\n            </range_min>\n            <range_max>\n                <name>EndTimeStamp</name>\n                <type>UInt64</type>\n            </range_max>\n            <attribute>\n                <name>XXXType</name>\n                <type>String</type>\n                <null_value />\n            </attribute>\n        </structure>\n\n    </dictionary>\n</clickhouse>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict(\n    Abcdef UInt64,\n    StartTimeStamp UInt64,\n    EndTimeStamp UInt64,\n    XXXType String DEFAULT ''\n)\nPRIMARY KEY Abcdef\nRANGE(MIN StartTimeStamp MAX EndTimeStamp)\n")),(0,i.kt)("h3",{id:"complex_key_range_hashed"},"complex_key_range_hashed"),(0,i.kt)("p",null,"The dictionary is stored in memory in the form of a hash table with an ordered array of ranges and their corresponding values (see ",(0,i.kt)("a",{parentName:"p",href:"#range-hashed"},"range_hashed"),"). This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),"."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY range_dictionary\n(\n  CountryID UInt64,\n  CountryKey String,\n  StartDate Date,\n  EndDate Date,\n  Tax Float64 DEFAULT 0.2\n)\nPRIMARY KEY CountryID, CountryKey\nSOURCE(CLICKHOUSE(TABLE 'date_table'))\nLIFETIME(MIN 1 MAX 1000)\nLAYOUT(COMPLEX_KEY_RANGE_HASHED())\nRANGE(MIN StartDate MAX EndDate);\n")),(0,i.kt)("h3",{id:"cache"},"cache"),(0,i.kt)("p",null,"The dictionary is stored in a cache that has a fixed number of cells. These cells contain frequently used elements."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("p",null,"When searching for a dictionary, the cache is searched first. For each block of data, all keys that are not found in the cache or are outdated are requested from the source using ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT attrs... FROM db.table WHERE id IN (k1, k2, ...)"),". The received data is then written to the cache."),(0,i.kt)("p",null,"If keys are not found in dictionary, then update cache task is created and added into update queue. Update queue properties can be controlled with settings ",(0,i.kt)("inlineCode",{parentName:"p"},"max_update_queue_size"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update_queue_push_timeout_milliseconds"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"query_wait_timeout_milliseconds"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max_threads_for_updates"),"."),(0,i.kt)("p",null,"For cache dictionaries, the expiration ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"lifetime")," of data in the cache can be set. If more time than ",(0,i.kt)("inlineCode",{parentName:"p"},"lifetime")," has passed since loading the data in a cell, the cell\u2019s value is not used and key becomes expired. The key is re-requested the next time it needs to be used. This behaviour can be configured with setting ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_read_expired_keys"),"."),(0,i.kt)("p",null,"This is the least effective of all the ways to store dictionaries. The speed of the cache depends strongly on correct settings and the usage scenario. A cache type dictionary performs well only when the hit rates are high enough (recommended 99% and higher). You can view the average hit rate in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/dictionaries"},"system.dictionaries")," table."),(0,i.kt)("p",null,"If setting ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_read_expired_keys")," is set to 1, by default 0. Then dictionary can support asynchronous updates. If a client requests keys and all of them are in cache, but some of them are expired, then dictionary will return expired keys for a client and request them asynchronously from the source."),(0,i.kt)("p",null,"To improve cache performance, use a subquery with ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT"),", and call the function with the dictionary externally."),(0,i.kt)("p",null,"All types of sources are supported."),(0,i.kt)("p",null,"Example of settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n    <cache>\n        \x3c!-- The size of the cache, in number of cells. Rounded up to a power of two. --\x3e\n        <size_in_cells>1000000000</size_in_cells>\n        \x3c!-- Allows to read expired keys. --\x3e\n        <allow_read_expired_keys>0</allow_read_expired_keys>\n        \x3c!-- Max size of update queue. --\x3e\n        <max_update_queue_size>100000</max_update_queue_size>\n        \x3c!-- Max timeout in milliseconds for push update task into queue. --\x3e\n        <update_queue_push_timeout_milliseconds>10</update_queue_push_timeout_milliseconds>\n        \x3c!-- Max wait timeout in milliseconds for update task to complete. --\x3e\n        <query_wait_timeout_milliseconds>60000</query_wait_timeout_milliseconds>\n        \x3c!-- Max threads for cache dictionary update. --\x3e\n        <max_threads_for_updates>4</max_threads_for_updates>\n    </cache>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(CACHE(SIZE_IN_CELLS 1000000000))\n")),(0,i.kt)("p",null,"Set a large enough cache size. You need to experiment to select the number of cells:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set some value."),(0,i.kt)("li",{parentName:"ol"},"Run queries until the cache is completely full."),(0,i.kt)("li",{parentName:"ol"},"Assess memory consumption using the ",(0,i.kt)("inlineCode",{parentName:"li"},"system.dictionaries")," table."),(0,i.kt)("li",{parentName:"ol"},"Increase or decrease the number of cells until the required memory consumption is reached.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not use ClickHouse as a source, because it is slow to process queries with random reads."))),(0,i.kt)("h3",{id:"complex_key_cache"},"complex_key_cache"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),"."),(0,i.kt)("h3",{id:"ssd_cache"},"ssd_cache"),(0,i.kt)("p",null,"Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"cache"),", but stores data on SSD and index in RAM. All cache dictionary settings related to update queue can also be applied to SSD cache dictionaries."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n    <ssd_cache>\n        \x3c!-- Size of elementary read block in bytes. Recommended to be equal to SSD's page size. --\x3e\n        <block_size>4096</block_size>\n        \x3c!-- Max cache file size in bytes. --\x3e\n        <file_size>16777216</file_size>\n        \x3c!-- Size of RAM buffer in bytes for reading elements from SSD. --\x3e\n        <read_buffer_size>131072</read_buffer_size>\n        \x3c!-- Size of RAM buffer in bytes for aggregating elements before flushing to SSD. --\x3e\n        <write_buffer_size>1048576</write_buffer_size>\n        \x3c!-- Path where cache file will be stored. --\x3e\n        <path>/var/lib/clickhouse/user_files/test_dict</path>\n    </ssd_cache>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(SSD_CACHE(BLOCK_SIZE 4096 FILE_SIZE 16777216 READ_BUFFER_SIZE 1048576\n    PATH '/var/lib/clickhouse/user_files/test_dict'))\n")),(0,i.kt)("h3",{id:"complex_key_ssd_cache"},"complex_key_ssd_cache"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"ssd_cache"),"."),(0,i.kt)("h3",{id:"direct"},"direct"),(0,i.kt)("p",null,"The dictionary is not stored in memory and directly goes to the source during the processing of a request."),(0,i.kt)("p",null,"The dictionary key has the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64")," type."),(0,i.kt)("p",null,"All types of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"sources"),", except local files, are supported."),(0,i.kt)("p",null,"Configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<layout>\n  <direct />\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"LAYOUT(DIRECT())\n")),(0,i.kt)("h3",{id:"complex_key_direct"},"complex_key_direct"),(0,i.kt)("p",null,"This type of storage is for use with composite ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"keys"),". Similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"direct"),"."),(0,i.kt)("h3",{id:"ip_trie"},"ip_trie"),(0,i.kt)("p",null,"This type of storage is for mapping network prefixes (IP addresses) to metadata such as ASN."),(0,i.kt)("p",null,"Example: The table contains network prefixes and their corresponding AS number and country code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  +-----------|-----|------+\n  | prefix          | asn   | cca2   |\n  +=================+=======+========+\n  | 202.79.32.0/20  | 17501 | NP     |\n  +-----------|-----|------+\n  | 2620:0:870::/48 | 3856  | US     |\n  +-----------|-----|------+\n  | 2a02:6b8:1::/48 | 13238 | RU     |\n  +-----------|-----|------+\n  | 2001:db8::/32   | 65536 | ZZ     |\n  +-----------|-----|------+\n")),(0,i.kt)("p",null,"When using this type of layout, the structure must have a composite key."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<structure>\n    <key>\n        <attribute>\n            <name>prefix</name>\n            <type>String</type>\n        </attribute>\n    </key>\n    <attribute>\n            <name>asn</name>\n            <type>UInt32</type>\n            <null_value />\n    </attribute>\n    <attribute>\n            <name>cca2</name>\n            <type>String</type>\n            <null_value>??</null_value>\n    </attribute>\n    ...\n</structure>\n<layout>\n    <ip_trie>\n        \x3c!-- Key attribute `prefix` can be retrieved via dictGetString. --\x3e\n        \x3c!-- This option increases memory usage. --\x3e\n        <access_to_key_from_attributes>true</access_to_key_from_attributes>\n    </ip_trie>\n</layout>\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY somedict (\n    prefix String,\n    asn UInt32,\n    cca2 String DEFAULT '??'\n)\nPRIMARY KEY prefix\n")),(0,i.kt)("p",null,"The key must have only one String type attribute that contains an allowed IP prefix. Other types are not supported yet."),(0,i.kt)("p",null,"For queries, you must use the same functions (",(0,i.kt)("inlineCode",{parentName:"p"},"dictGetT")," with a tuple) as for dictionaries with composite keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetT('dict_name', 'attr_name', tuple(ip))\n")),(0,i.kt)("p",null,"The function takes either ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt32")," for IPv4, or ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," for IPv6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"dictGetString('prefix', 'asn', tuple(IPv6StringToNum('2001:db8::1')))\n")),(0,i.kt)("p",null,"Other types are not supported yet. The function returns the attribute for the prefix that corresponds to this IP address. If there are overlapping prefixes, the most specific one is returned."),(0,i.kt)("p",null,"Data must completely fit into RAM."),(0,i.kt)("h2",{id:"related-content"},"Related Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/blog/faster-queries-dictionaries-clickhouse"},"Using dictionaries to accelerate queries"))))}u.isMDXComponent=!0}}]);