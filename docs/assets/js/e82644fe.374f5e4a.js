"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[47681,73617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=a,h=f["".concat(o,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},c=void 0,s={unversionedId:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",id:"en/sql-reference/aggregate-functions/reference/uniqthetasketch",title:"uniqTheta",description:"Calculates the approximate number of different argument values, using the Theta Sketch Framework.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/uniqthetasketch.md",tags:[],version:"current",sidebarPosition:195,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},sidebar:"english",previous:{title:"uniqHLL12",permalink:"/docs/en/sql-reference/aggregate-functions/reference/uniqhll12"},next:{title:"quantile",permalink:"/docs/en/sql-reference/aggregate-functions/reference/quantile"}},o={},l=[],u={toc:l},f="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calculates the approximate number of different argument values, using the ",(0,a.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaSketchFramework.html"},"Theta Sketch Framework"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"uniqTheta(x[, ...])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,"The function takes a variable number of parameters. Parameters can be ",(0,a.kt)("inlineCode",{parentName:"p"},"Tuple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", or numeric types."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),"-type number.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementation details")),(0,a.kt)("p",null,"Function:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Calculates a hash for all parameters in the aggregate, then uses it in calculations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Uses the ",(0,a.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/InverseEstimate.html"},"KMV")," algorithm to approximate the number of different argument values."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"4096(2^12) 64-bit sketch are used. The size of the state is about 41 KB.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The relative error is 3.125% (95% confidence), see the ",(0,a.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Theta/ThetaErrorTable.html"},"relative error table")," for detail."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Also")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniq#agg_function-uniq"},"uniq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined#agg_function-uniqcombined"},"uniqCombined")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqcombined64#agg_function-uniqcombined64"},"uniqCombined64")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqhll12#agg_function-uniqhll12"},"uniqHLL12")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/aggregate-functions/reference/uniqexact#agg_function-uniqexact"},"uniqExact"))))}p.isMDXComponent=!0},21965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(4331);const c={slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},s=void 0,o={unversionedId:"zh/sql-reference/aggregate-functions/reference/uniqthetasketch",id:"zh/sql-reference/aggregate-functions/reference/uniqthetasketch",title:"uniqTheta",description:"",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch.mdx",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/uniqthetasketch.mdx",tags:[],version:"current",sidebarPosition:195,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/uniqthetasketch",sidebar_position:195,title:"uniqTheta"},sidebar:"chinese",previous:{title:"uniqHLL12",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/uniqhll12"},next:{title:"quantile",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/quantile"}},l={},u=[],f={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.default,{mdxType:"Content"}))}g.isMDXComponent=!0}}]);