"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[53782],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},94003:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],a={slug:"/ru/sql-reference/dictionaries/",sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u0438",sidebar_position:35},s="\u0421\u043b\u043e\u0432\u0430\u0440\u0438",l={unversionedId:"ru/sql-reference/dictionaries/index",id:"ru/sql-reference/dictionaries/index",title:"\u0421\u043b\u043e\u0432\u0430\u0440\u0438",description:"slovari}",source:"@site/docs/ru/sql-reference/dictionaries/index.md",sourceDirName:"ru/sql-reference/dictionaries",slug:"/ru/sql-reference/dictionaries/",permalink:"/docs/ru/sql-reference/dictionaries/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/dictionaries/index.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{slug:"/ru/sql-reference/dictionaries/",sidebar_label:"\u0421\u043b\u043e\u0432\u0430\u0440\u0438",sidebar_position:35},sidebar:"russia",previous:{title:"view",permalink:"/docs/ru/sql-reference/table-functions/view"},next:{title:"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438",permalink:"/docs/ru/sql-reference/dictionaries/external-dictionaries/"}},u={},f=[],p={toc:f};function d(e){var r=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slovari"},"\u0421\u043b\u043e\u0432\u0430\u0440\u0438"),(0,o.kt)("p",null,"\u0421\u043b\u043e\u0432\u0430\u0440\u044c \u2014 \u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (",(0,o.kt)("inlineCode",{parentName:"p"},"\u043a\u043b\u044e\u0447 -> \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b"),"), \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u0434\u043e\u0431\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u043e\u0432."),(0,o.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u044f\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445. \u041f\u0440\u043e\u0449\u0435 \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0432\u0430\u0440\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0447\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438-\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430\u043c\u0438."),(0,o.kt)("p",null,"ClickHouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/internal-dicts#internal_dicts"},"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0438")," \u0441\u043e \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c ",(0,o.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/ext-dict-functions"},"\u043d\u0430\u0431\u043e\u0440\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/external-dictionaries/external-dicts#dicts-external-dicts"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u0435 (\u0432\u043d\u0435\u0448\u043d\u0438\u0435) \u0441\u043b\u043e\u0432\u0430\u0440\u0438")," \u0441 ",(0,o.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/ext-dict-functions"},"\u043d\u0430\u0431\u043e\u0440\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0439"),".")))}d.isMDXComponent=!0}}]);