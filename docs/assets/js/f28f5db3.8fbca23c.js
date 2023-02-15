"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[36430,59903],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,m=l["".concat(c,".").concat(f)]||l[f]||g[f]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62895:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const o={slug:"/en/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131,title:"groupBitmapXor"},i=void 0,p={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitmapxor",id:"en/sql-reference/aggregate-functions/reference/groupbitmapxor",title:"groupBitmapXor",description:"Calculations the XOR of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return bitmap object.",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitmapxor",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor.md",tags:[],version:"current",sidebarPosition:131,frontMatter:{slug:"/en/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131,title:"groupBitmapXor"},sidebar:"english",previous:{title:"groupBitmapOr",permalink:"/docs/en/sql-reference/aggregate-functions/reference/groupbitmapor"},next:{title:"sumWithOverflow",permalink:"/docs/en/sql-reference/aggregate-functions/reference/sumwithoverflow"}},c={},u=[],s={toc:u},l="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calculations the XOR of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/functions/bitmap-functions"},"bitmap object"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapOr(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,a.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"Value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt64")," type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapXor(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapXor(z)\u2500\u2510\n\u2502              10   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapXorState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapXorState(z)))\u2500\u2510\n\u2502 [1,3,5,6,8,10,11,13,14,15]                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0},34923:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=t(87462),a=(t(67294),t(3905)),o=t(62895);const i={slug:"/ru/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131,sidebar_label:"groupBitmapXor",title:"groupBitmapXor"},p=void 0,c={unversionedId:"ru/sql-reference/aggregate-functions/reference/groupbitmapxor",id:"ru/sql-reference/aggregate-functions/reference/groupbitmapxor",title:"groupBitmapXor",description:"",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapxor.mdx",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/groupbitmapxor",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapxor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapxor.mdx",tags:[],version:"current",sidebarPosition:131,frontMatter:{slug:"/ru/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131,sidebar_label:"groupBitmapXor",title:"groupBitmapXor"},sidebar:"russia",previous:{title:"groupBitmapOr",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapor"},next:{title:"sumWithOverflow",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow"}},u={},s=[],l={toc:s},g="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(g,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(o.default,{mdxType:"Content"}))}f.isMDXComponent=!0}}]);