"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67178],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=["components"],a={sidebar_position:18,sidebar_label:"Native Interface (TCP)"},s="Native Interface (TCP)",u={unversionedId:"en/interfaces/tcp",id:"en/interfaces/tcp",title:"Native Interface (TCP)",description:"The native protocol is used in the command-line client, for inter-server communication during distributed query processing, and also in other C++ programs. Unfortunately, native ClickHouse protocol does not have formal specification yet, but it can be reverse-engineered from ClickHouse source code (starting around here) and/or by intercepting and analyzing TCP traffic.",source:"@site/docs/en/interfaces/tcp.md",sourceDirName:"en/interfaces",slug:"/en/interfaces/tcp",permalink:"/docs/en/interfaces/tcp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/tcp.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18,sidebar_label:"Native Interface (TCP)"},sidebar:"english",previous:{title:"Command-Line Client",permalink:"/docs/en/interfaces/cli"},next:{title:"gRPC Interface",permalink:"/docs/en/interfaces/grpc"}},l={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"native-interface-tcp"},"Native Interface (TCP)"),(0,o.kt)("p",null,"The native protocol is used in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli"},"command-line client"),", for inter-server communication during distributed query processing, and also in other C++ programs. Unfortunately, native ClickHouse protocol does not have formal specification yet, but it can be reverse-engineered from ClickHouse source code (starting ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/src/Client"},"around here"),") and/or by intercepting and analyzing TCP traffic."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/tcp/"},"Original article")," "))}d.isMDXComponent=!0}}]);