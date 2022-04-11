"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16513],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5822:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={sidebar_position:32,sidebar_label:"Distributed DDL"},c="\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)",u={unversionedId:"zh/sql-reference/distributed-ddl",id:"zh/sql-reference/distributed-ddl",title:"\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)",description:"distributed-ddl-queries-on-cluster-clause}",source:"@site/docs/zh/sql-reference/distributed-ddl.md",sourceDirName:"zh/sql-reference",slug:"/zh/sql-reference/distributed-ddl",permalink:"/zh/sql-reference/distributed-ddl",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/distributed-ddl.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32,sidebar_label:"Distributed DDL"},sidebar:"chinese",previous:{title:"SQL\u8bed\u6cd5",permalink:"/zh/sql-reference/syntax"},next:{title:"\u51fd\u6570",permalink:"/zh/sql-reference/functions/"}},s={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributed-ddl-queries-on-cluster-clause"},"\u5206\u5e03\u5f0fDDL\u67e5\u8be2(ON CLUSTER\u6761\u4ef6)"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"DROP"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"RENAME"),"\u67e5\u8be2\u4ec5\u5f71\u54cd\u6267\u884c\u5b83\u4eec\u7684\u5f53\u524d\u670d\u52a1\u5668\u3002 \u5728\u96c6\u7fa4\u8bbe\u7f6e\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ON CLUSTER"),"\u5b50\u53e5\u4ee5\u5206\u5e03\u5f0f\u65b9\u5f0f\u8fd0\u884c\u6b64\u7c7b\u67e5\u8be2\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u67e5\u8be2\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"cluster"),"\u4e2d\u7684\u6bcf\u4e2a\u4e3b\u673a\u4e0a\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"all_hits")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Distributed"),"\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u6b63\u786e\u8fd0\u884c\u8fd9\u4e9b\u67e5\u8be2\uff0c\u6bcf\u4e2a\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u96c6\u7fa4\u5b9a\u4e49\uff08\u4e3a\u4e86\u7b80\u5316\u540c\u6b65\u914d\u7f6e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528ZooKeeper\u66ff\u6362\uff09\u3002 \u4ed6\u4eec\u8fd8\u5fc5\u987b\u8fde\u63a5\u5230ZooKeeper\u670d\u52a1\u5668\u3002"),(0,o.kt)("p",null,"\u672c\u5730\u7248\u672c\u7684\u67e5\u8be2\u6700\u7ec8\u4f1a\u5728\u96c6\u7fa4\u4e2d\u7684\u6bcf\u53f0\u4e3b\u673a\u4e0a\u6267\u884c\uff0c\u5373\u4f7f\u67d0\u4e9b\u4e3b\u673a\u5f53\u524d\u4e0d\u53ef\u7528\u3002"),(0,o.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u5728\u5355\u4e2a\u4e3b\u673a\u5185\u6267\u884c\u67e5\u8be2\u7684\u987a\u5e8f\u662f\u6709\u4fdd\u8bc1\u7684\u3002'))}f.isMDXComponent=!0}}]);