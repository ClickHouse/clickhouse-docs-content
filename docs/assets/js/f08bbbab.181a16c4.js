"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=a,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||o;return r?n.createElement(m,c(c({ref:t},g),{},{components:r})):n.createElement(m,c({ref:t},g))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},c=void 0,i={unversionedId:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"Calculates the value of (P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0))) for each category.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/categoricalinformationvalue",sidebar_position:250,title:"categoricalInformationValue"},sidebar:"english",previous:{title:"stochasticLogisticRegression",permalink:"/docs/en/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/studentttest"}},l={},s=[],g={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calculates the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"(P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0)))")," for each category."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"categoricalInformationValue(category1, category2, ..., tag)\n")),(0,a.kt)("p",null,"The result indicates how a discrete (categorical) feature ",(0,a.kt)("inlineCode",{parentName:"p"},"[category1, category2, ...]")," contribute to a learning model which predicting the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"."))}u.isMDXComponent=!0}}]);