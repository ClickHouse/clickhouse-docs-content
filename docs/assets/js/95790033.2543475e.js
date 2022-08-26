"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38241],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=u(n),m=a,f=g["".concat(c,".").concat(m)]||g[m]||s[m]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],i={slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapand",sidebar_position:129},c="groupBitmapAnd",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitmapand",id:"zh/sql-reference/aggregate-functions/reference/groupbitmapand",title:"groupBitmapAnd",description:"groupbitmapand}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapand.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapand",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapand",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapand.md",tags:[],version:"current",sidebarPosition:129,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/groupbitmapand",sidebar_position:129},sidebar:"chinese",previous:{title:"groupBitmap",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmap"},next:{title:"groupBitmapOr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/groupbitmapor"}},l={},s=[],g={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmapand"},"groupBitmapAnd"),(0,o.kt)("p",null,"\u8ba1\u7b97\u4f4d\u56fe\u5217\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," \uff0c\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u57fa\u6570\uff0c\u5982\u679c\u6dfb\u52a0\u540e\u7f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," \uff0c\u5219\u8fd4\u56de ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/bitmap-functions"},"\u4f4d\u56fe\u5bf9\u8c61"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapAnd(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," \u7c7b\u578b\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapAnd(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapAnd(z)\u2500\u2510\n\u2502               3   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapAndState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapAndState(z)))\u2500\u2510\n\u2502 [6,8,10]                                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);