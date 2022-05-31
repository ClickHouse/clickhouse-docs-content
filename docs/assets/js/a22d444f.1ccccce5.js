"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92712],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(n),f=a,b=p["".concat(s,".").concat(f)]||p[f]||i[f]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return i}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],c={sidebar_position:51,sidebar_label:"COMMENT"},s="ALTER TABLE \u2026 MODIFY COMMENT",m={unversionedId:"ru/sql-reference/statements/alter/comment",id:"ru/sql-reference/statements/alter/comment",title:"ALTER TABLE \u2026 MODIFY COMMENT",description:"alter-modify-comment}",source:"@site/docs/ru/sql-reference/statements/alter/comment.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/comment",permalink:"/docs/ru/sql-reference/statements/alter/comment",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/alter/comment.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"COMMENT"},sidebar:"russia",previous:{title:"VIEW",permalink:"/docs/ru/sql-reference/statements/alter/view"},next:{title:"SYSTEM",permalink:"/docs/ru/sql-reference/statements/system"}},u={},i=[],p={toc:i};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"alter-modify-comment"},"ALTER TABLE \u2026 MODIFY COMMENT"),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442, \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u0431\u044b\u043b \u043b\u0438 \u043e\u043d \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u0440\u0430\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u043d\u0435\u0442. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f \u043e\u0442\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/operations/system-tables/tables"},"system.tables"),", \u0442\u0430\u043a \u0438 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [db].name [ON CLUSTER cluster] MODIFY COMMENT 'Comment'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u043c (\u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,o.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/create/table#comment-table"},"COMMENT"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_with_comment\n(\n    `k` UInt64,\n    `s` String\n)\nENGINE = Memory()\nCOMMENT 'The temporary table';\n")),(0,o.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_comment MODIFY COMMENT 'new comment on a table';\nSELECT comment FROM system.tables WHERE database = currentDatabase() AND name = 'table_with_comment';\n")),(0,o.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 new comment on a table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_with_comment MODIFY COMMENT '';\nSELECT comment FROM system.tables WHERE database = currentDatabase() AND name = 'table_with_comment';\n")),(0,o.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500comment\u2500\u2510\n\u2502         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);