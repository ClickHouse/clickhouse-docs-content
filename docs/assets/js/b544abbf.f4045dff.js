"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[16190,68179],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(t),p=a,m=g["".concat(l,".").concat(p)]||g[p]||f[p]||o;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[g]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69155:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},c=void 0,i={unversionedId:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"Calculates the value of (P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0))) for each category.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},sidebar:"sqlreference",previous:{title:"stochasticLogisticRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/studentttest"}},l={},s=[],u={toc:s},g="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(g,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calculates the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"(P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0)))")," for each category."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"categoricalInformationValue(category1, category2, ..., tag)\n")),(0,a.kt)("p",null,"The result indicates how a discrete (categorical) feature ",(0,a.kt)("inlineCode",{parentName:"p"},"[category1, category2, ...]")," contribute to a learning model which predicting the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"."))}f.isMDXComponent=!0},48607:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905)),o=t(69155);const c={slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,sidebad_label:"categoricalInformationValue",title:"categoricalInformationValue"},i=void 0,l={unversionedId:"ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue.mdx",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue.mdx",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,sidebad_label:"categoricalInformationValue",title:"categoricalInformationValue"},sidebar:"russia",previous:{title:"stochasticLogisticRegression",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/studentttest"}},s={},u=[],g={toc:u},f="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.default,{mdxType:"Content"}))}p.isMDXComponent=!0}}]);