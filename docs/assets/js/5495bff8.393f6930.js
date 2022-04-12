"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:51,sidebar_label:"TRUNCATE"},c="TRUNCATE",l={unversionedId:"ru/sql-reference/statements/truncate",id:"ru/sql-reference/statements/truncate",title:"TRUNCATE",description:"truncate-statement}",source:"@site/docs/ru/sql-reference/statements/truncate.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/truncate",permalink:"/ru/sql-reference/statements/truncate",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/truncate.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"TRUNCATE"},sidebar:"russia",previous:{title:"SET ROLE",permalink:"/ru/sql-reference/statements/set-role"},next:{title:"USE",permalink:"/ru/sql-reference/statements/use"}},p={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"truncate-statement"},"TRUNCATE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"TRUNCATE TABLE [IF EXISTS] [db.]name [ON CLUSTER cluster]\n")),(0,i.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"IF EXISTS")," \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e, \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u0435\u0440\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0435\u0441\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0432\u0438\u0436\u043a\u043e\u0432: ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/view"},"View"),", ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/file"},"File"),", ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/url"},"URL"),", ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/buffer"},"Buffer")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/null"},"Null"),"."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430 \u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/settings/#replication-alter-partitions-sync"},"replication_alter_partitions_sync"),"."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f (\u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445) \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," \u0434\u043b\u044f \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0440\u0435\u043f\u043b\u0438\u043a \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/settings/#replication-wait-for-inactive-replica-timeout"},"replication_wait_for_inactive_replica_timeout"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 `replication_alter_partitions_sync` \u0440\u0430\u0432\u043d\u043e `2` \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0435\u043f\u043b\u0438\u043a\u0438 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 `replication_wait_for_inactive_replica_timeout`, \u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 `UNFINISHED`.\n")))))}f.isMDXComponent=!0}}]);