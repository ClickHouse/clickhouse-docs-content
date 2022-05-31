"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54197],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||l[f]||s;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={},c="system.one",u={unversionedId:"ru/operations/system-tables/one",id:"ru/operations/system-tables/one",title:"system.one",description:"system-one}",source:"@site/docs/ru/operations/system-tables/one.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/one",permalink:"/docs/ru/operations/system-tables/one",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/one.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.numbers_mt",permalink:"/docs/ru/operations/system-tables/numbers_mt"},next:{title:"system.opentelemetry_span_log",permalink:"/docs/ru/operations/system-tables/opentelemetry_span_log"}},p={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-one"},"system.one"),(0,s.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u043e\u0434\u043d\u0438\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c ",(0,s.kt)("inlineCode",{parentName:"p"},"dummy")," \u0442\u0438\u043f\u0430 UInt8, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 0.\n\u042d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0432 ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0441\u0435\u043a\u0446\u0438\u044f ",(0,s.kt)("inlineCode",{parentName:"p"},"FROM"),".\n\u0422\u043e \u0435\u0441\u0442\u044c, \u044d\u0442\u043e - \u0430\u043d\u0430\u043b\u043e\u0433 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,s.kt)("inlineCode",{parentName:"p"},"DUAL"),", \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0421\u0423\u0411\u0414."))}f.isMDXComponent=!0}}]);