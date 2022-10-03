"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46618],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||g[f]||i;return t?o.createElement(d,a(a({ref:n},u),{},{components:t})):o.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1483:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return g}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_label:"Choosing a Client",sidebar_position:2,keywords:["clickhouse","go","client","golang"],slug:"/en/integrations/go/choosing-a-client",description:"Choosing a low-level or high-level client"},c="Choosing a Client",s={unversionedId:"en/integrations/language-clients/go/choosing-a-client",id:"en/integrations/language-clients/go/choosing-a-client",title:"Choosing a Client",description:"Choosing a low-level or high-level client",source:"@site/docs/en/integrations/language-clients/go/choosing-a-client.md",sourceDirName:"en/integrations/language-clients/go",slug:"/en/integrations/go/choosing-a-client",permalink:"/docs/en/integrations/go/choosing-a-client",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/language-clients/go/choosing-a-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Choosing a Client",sidebar_position:2,keywords:["clickhouse","go","client","golang"],slug:"/en/integrations/go/choosing-a-client",description:"Choosing a low-level or high-level client"},sidebar:"english",previous:{title:"Introduction",permalink:"/docs/en/integrations/go/intro"},next:{title:"High Level Client",permalink:"/docs/en/integrations/go/clickhouse-go"}},u={},g=[],p={toc:g};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"choosing-a-client"},"Choosing a Client"),(0,i.kt)("p",null,"Selecting a client library will depend on your usage patterns and need for optimal performance. For insert heavy use cases, where millions of inserts are required per second, we recommend using the low level client ch-go. This client avoids the associated overhead of pivoting the data from a row-orientated format to columns, as the ClickHouse native format requires. Furthermore, it avoids any reflection or use of the interface{} type to simplify usage."),(0,i.kt)("p",null,"For query workloads focused on aggregations or lower throughput insert workloads, the clickhouse-go provides a familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"database/sql")," interface and more straightforward row semantics. Users can also optionally use HTTP for the transport protocol and take advantage of helper functions to marshall rows to and from structs."))}f.isMDXComponent=!0}}]);