"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97121],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(t),p=o,m=g["".concat(l,".").concat(p)]||g[p]||f[p]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},16678:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={slug:"/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250},l="categoricalInformationValue",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"categoricalinformationvalue}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250},sidebar:"chinese",previous:{title:"stochasticLogisticRegression",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/studentttest"}},s={},f=[],g={toc:f};function p(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"categoricalinformationvalue"},"categoricalInformationValue"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u7c7b\u522b\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"(P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0)))")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"categoricalInformationValue(category1, category2, ..., tag)\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u6307\u793a\u79bb\u6563\uff08\u5206\u7c7b\uff09\u8981\u7d20\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[category1, category2, ...]")," \u6709\u52a9\u4e8e\u4f7f\u7528\u5b66\u4e60\u6a21\u578b\u9884\u6d4b",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"\u7684\u503c\u3002"))}p.isMDXComponent=!0}}]);