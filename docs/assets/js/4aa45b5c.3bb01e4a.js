"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[27925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={date:new Date("2023-03-20T00:00:00.000Z")},s="DB::Exception: Too many parts (600). Merges are processing significantly slower than inserts",i={permalink:"/docs/knowledgebase/exception-too-many-parts",source:"@site/knowledgebase/exception-too-many-parts.md",title:"DB::Exception: Too many parts (600). Merges are processing significantly slower than inserts",description:"The main requirement about inserting into Clickhouse: you should never send too many INSERT statements per second. Ideally - one insert per second / per few seconds.",date:"2023-03-20T00:00:00.000Z",formattedDate:"March 20, 2023",tags:[],readingTime:2.58,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-03-20T00:00:00.000Z"},prevItem:{title:"Code: 279. DB::NetException: All connection tries failed.",permalink:"/docs/knowledgebase/connection_timeout_remote_remoteSecure"},nextItem:{title:"How to import JSON into ClickHouse?",permalink:"/docs/knowledgebase/json-import"}},l={authorsImageUrls:[]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The main requirement about inserting into Clickhouse: you should never send too many ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT")," statements per second. Ideally - one insert per second / per few seconds."),(0,o.kt)("p",null,"So you can insert 100K rows per second but only with one big bulk ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT")," statement. When you send hundreds / thousands insert statements per second to *MergeTree table you will always get some errors, and it can not be changed by adjusting some settings."),(0,o.kt)("p",null,"If you can't combine lot of inserts into one big bulk insert statement outside - then you should create Buffer table before *MergeTree table."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Each insert create a folder in  ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/.../table_name/"),". Inside that folder there are 2 files per each column - one with data (compressed), second with index. Data is physically sorted by primary key inside those files. Those folders are called '",(0,o.kt)("strong",{parentName:"p"},"parts"),"'.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ClickHouse merges those smaller parts to bigger parts in the background. It chooses parts to merge according to some rules. After merging two (or more) parts one bigger part is being created and old parts are queued to be removed. The settings you list allow finetuning the rules of merging parts. The goal of merging process - is to leave one big part for each partition (or few big parts per partition which are not worth to merge because they are too big). Please check also that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yandex/ClickHouse/issues/1661#issuecomment-352739726"},"comment"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you create new parts too fast (for example by doing lot of small inserts) and ClickHouse is not able to merge them with proper speed (so new parts come faster than ClickHouse can merge them) - then you get the exception 'Merges are processing significantly slower than inserts'. You can try to increase the limit but you can get the situation then you get filesystem problems caused by the too big number of files / directories (like inodes limit).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you insert to lot of partitions at once the problem is multiplied by the number of partitions affected by insert.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can try to adjust the behaviour of clickhouse with one of the listed settings, or with max_insert_block_size / max_block_size  / insert_format_max_block_size / max_client_network_bandwidth.  But: the better solution is just to insert data in expected tempo. The expected tempo is: ",(0,o.kt)("strong",{parentName:"p"},"one insert per 1-2 sec, each insert containing 10K-500K rows of data"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'So proper solution to solve "Merges are processing significantly slower than inserts"  is to adjust the number of inserts per second and number of rows in each insert. Use batch insert to combine small inserts into one bigger if data comes row-by-row. Throttle huge inserts if you have too much data to insert at once. Don\'t change clickhouse internals, unless you really understand well what does they it mean.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If your data comes faster than 500K rows per second - most probably you need more servers in the cluster to serve that traffic, not the adjustment of settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The speed of background merges usually depends on storage speed, used compression settings, and mergetree option, i.e. merge algorithm - plain merge / aggregating / summing / collapsing etc. &  used soring key."))))}m.isMDXComponent=!0}}]);