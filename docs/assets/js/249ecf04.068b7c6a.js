"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52381],{3905:(e,n,r)=>{r.d(n,{Zo:()=>g,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return r?t.createElement(u,o(o({ref:n},g),{},{components:r})):t.createElement(u,o({ref:n},g))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26172:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const i={slug:"/en/engines/table-engines/mergetree-family/",sidebar_position:10,sidebar_label:"MergeTree Family"},o="MergeTree Engine Family",s={unversionedId:"en/engines/table-engines/mergetree-family/index",id:"en/engines/table-engines/mergetree-family/index",title:"MergeTree Engine Family",description:"Table engines from the MergeTree family are the core of ClickHouse data storage capabilities. They provide most features for resilience and high-performance data retrieval: columnar storage, custom partitioning, sparse primary index, secondary data-skipping indexes, etc.",source:"@site/docs/en/engines/table-engines/mergetree-family/index.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/",permalink:"/docs/en/engines/table-engines/mergetree-family/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"/en/engines/table-engines/mergetree-family/",sidebar_position:10,sidebar_label:"MergeTree Family"},sidebar:"english",previous:{title:"Table Engines",permalink:"/docs/en/engines/table-engines/"},next:{title:"MergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/mergetree"}},l={},c=[],g={toc:c};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mergetree-engine-family"},"MergeTree Engine Family"),(0,a.kt)("p",null,"Table engines from the MergeTree family are the core of ClickHouse data storage capabilities. They provide most features for resilience and high-performance data retrieval: columnar storage, custom partitioning, sparse primary index, secondary data-skipping indexes, etc."),(0,a.kt)("p",null,"Base ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," table engine can be considered the default table engine for single-node ClickHouse instances because it is versatile and practical for a wide range of use cases."),(0,a.kt)("p",null,"For production usage ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree")," is the way to go, because it adds high-availability to all features of regular MergeTree engine. A bonus is automatic data deduplication on data ingestion, so the software can safely retry if there was some network issue during insert."),(0,a.kt)("p",null,"All other engines of MergeTree family add extra functionality for some specific use cases. Usually, it\u2019s implemented as additional data manipulation in background."),(0,a.kt)("p",null,"The main downside of MergeTree engines is that they are rather heavy-weight. So the typical pattern is to have not so many of them. If you need many small tables, for example for temporary data, consider ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/log-family/"},"Log engine family"),"."))}m.isMDXComponent=!0}}]);