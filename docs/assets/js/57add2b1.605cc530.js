"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18228],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=u(t),m=a,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},98013:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131},c="groupBitmapXor",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitmapxor",id:"zh/sql-reference/aggregate-functions/reference/groupbitmapxor",title:"groupBitmapXor",description:"groupbitmapxor}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapxor.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapxor",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapxor",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapxor.md",tags:[],version:"current",sidebarPosition:131,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapxor",sidebar_position:131},sidebar:"chinese",previous:{title:"groupBitmapOr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapor"},next:{title:"sumWithOverflow",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/sumwithoverflow"}},l={},s=[],g={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmapxor"},"groupBitmapXor"),(0,o.kt)("p",null,"\u8ba1\u7b97\u4f4d\u56fe\u5217\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"XOR")," \uff0c\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u57fa\u6570\uff0c\u5982\u679c\u6dfb\u52a0\u540e\u7f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," \uff0c\u5219\u8fd4\u56de ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/bitmap-functions"},"\u4f4d\u56fe\u5bf9\u8c61"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapXor(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapXor(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapXor(z)\u2500\u2510\n\u2502              10   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapXorState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapXorState(z)))\u2500\u2510\n\u2502 [1,3,5,6,8,10,11,13,14,15]                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);