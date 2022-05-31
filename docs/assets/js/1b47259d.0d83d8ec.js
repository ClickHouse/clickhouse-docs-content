"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41238],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13400:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:3,sidebar_label:"Distributed DDL"},l="Distributed DDL Queries (ON CLUSTER Clause)",u={unversionedId:"en/sql-reference/distributed-ddl",id:"en/sql-reference/distributed-ddl",title:"Distributed DDL Queries (ON CLUSTER Clause)",description:"distributed-ddl-queries-on-cluster-clause}",source:"@site/docs/en/sql-reference/distributed-ddl.md",sourceDirName:"en/sql-reference",slug:"/en/sql-reference/distributed-ddl",permalink:"/docs/en/sql-reference/distributed-ddl",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/distributed-ddl.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Distributed DDL"},sidebar:"english",previous:{title:"Syntax",permalink:"/docs/en/sql-reference/syntax"},next:{title:"Functions",permalink:"/docs/en/sql-reference/functions/"}},c={},d=[],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"distributed-ddl-queries-on-cluster-clause"},"Distributed DDL Queries (ON CLUSTER Clause)"),(0,a.kt)("p",null,"By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DROP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"RENAME")," queries affect only the current server where they are executed. In a cluster setup, it is possible to run such queries in a distributed manner with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," clause."),(0,a.kt)("p",null,"For example, the following query creates the ",(0,a.kt)("inlineCode",{parentName:"p"},"all_hits")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Distributed")," table on each host in ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS all_hits ON CLUSTER cluster (p Date, i Int32) ENGINE = Distributed(cluster, default, hits)\n")),(0,a.kt)("p",null,"In order to run these queries correctly, each host must have the same cluster definition (to simplify syncing configs, you can use substitutions from ZooKeeper). They must also connect to the ZooKeeper servers."),(0,a.kt)("p",null,"The local version of the query will eventually be executed on each host in the cluster, even if some hosts are currently not available."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The order for executing queries within a single host is guaranteed."))))}f.isMDXComponent=!0}}]);