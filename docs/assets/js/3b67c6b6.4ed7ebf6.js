"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28432],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=s(t),g=a,y=f["".concat(p,".").concat(g)]||f[g]||u[g]||o;return t?r.createElement(y,l(l({ref:n},i),{},{components:t})):r.createElement(y,l({ref:n},i))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/entropy",sidebar_position:302},l="entropy",c={unversionedId:"en/sql-reference/aggregate-functions/reference/entropy",id:"en/sql-reference/aggregate-functions/reference/entropy",title:"entropy",description:"Calculates Shannon entropy) of a column of values.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/entropy.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/entropy",permalink:"/docs/en/sql-reference/aggregate-functions/reference/entropy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/entropy.md",tags:[],version:"current",sidebarPosition:302,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/entropy",sidebar_position:302},sidebar:"english",previous:{title:"welchTTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/welchttest"},next:{title:"meanZTest",permalink:"/docs/en/sql-reference/aggregate-functions/reference/meanztest"}},p={},s=[],i={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entropy"},"entropy"),(0,a.kt)("p",null,"Calculates ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entropy_(information_theory)"},"Shannon entropy")," of a column of values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"entropy(val)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"val")," \u2014 Column of values of any type.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shannon entropy.")),(0,a.kt)("p",null,"Type: ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/float"},"Float64"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE entropy (`vals` UInt32,`strings` String) ENGINE = Memory;\n\nINSERT INTO entropy VALUES (1, 'A'), (1, 'A'), (1,'A'), (1,'A'), (2,'B'), (2,'B'), (2,'C'), (2,'D');\n\nSELECT entropy(vals), entropy(strings) FROM entropy;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500entropy(vals)\u2500\u252c\u2500entropy(strings)\u2500\u2510\n\u2502             1 \u2502             1.75 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}u.isMDXComponent=!0}}]);