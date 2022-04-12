"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34455],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64882:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],o={sidebar_position:27,sidebar_label:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"},l="\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",u={unversionedId:"ru/engines/database-engines/index",id:"ru/engines/database-engines/index",title:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",description:"database-engines}",source:"@site/docs/ru/engines/database-engines/index.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/",permalink:"/ru/engines/database-engines/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/database-engines/index.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27,sidebar_label:"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"},sidebar:"russia",previous:{title:"GenerateRandom",permalink:"/ru/engines/table-engines/special/generate"},next:{title:"[experimental] MaterializedMySQL",permalink:"/ru/engines/database-engines/materialized-mysql"}},p={},c=[],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-engines"},"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438."),(0,i.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0434\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/atomic"},"Atomic"),". \u041e\u043d \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/"},"\u0434\u0432\u0438\u0436\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/syntax"},"\u0434\u0438\u0430\u043b\u0435\u043a\u0442 SQL"),"."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/mysql"},"MySQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/materialized-mysql"},"MaterializedMySQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/lazy"},"Lazy"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/postgresql"},"PostgreSQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/ru/engines/database-engines/replicated"},"Replicated")))))}d.isMDXComponent=!0}}]);