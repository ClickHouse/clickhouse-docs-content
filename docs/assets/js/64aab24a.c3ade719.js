"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[64389],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>I});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),l=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):c(c({},n),t)),e},p=function(t){var n=l(t.components);return r.createElement(s.Provider,{value:n},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=l(e),g=a,I=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return e?r.createElement(I,c(c({ref:n},p),{},{components:e})):r.createElement(I,c({ref:n},p))}));function I(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,c=new Array(i);c[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=t,o[u]="string"==typeof t?t:a,c[1]=o;for(var l=2;l<i;l++)c[l]=e[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},3589:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=e(87462),a=(e(67294),e(3905));const i={slug:"/en/getting-started/example-datasets/criteo",sidebar_label:"Terabyte Click Logs from Criteo"},c="Terabyte of Click Logs from Criteo",o={unversionedId:"en/getting-started/example-datasets/criteo",id:"en/getting-started/example-datasets/criteo",title:"Terabyte of Click Logs from Criteo",description:"Download the data from http://labs.criteo.com/downloads/download-terabyte-click-logs/",source:"@site/docs/en/getting-started/example-datasets/criteo.md",sourceDirName:"en/getting-started/example-datasets",slug:"/en/getting-started/example-datasets/criteo",permalink:"/docs/en/getting-started/example-datasets/criteo",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/example-datasets/criteo.md",tags:[],version:"current",frontMatter:{slug:"/en/getting-started/example-datasets/criteo",sidebar_label:"Terabyte Click Logs from Criteo"},sidebar:"docs",previous:{title:"Brown University Benchmark",permalink:"/docs/en/getting-started/example-datasets/brown-benchmark"},next:{title:"GitHub Events",permalink:"/docs/en/getting-started/example-datasets/github-events"}},s={},l=[],p={toc:l},u="wrapper";function d(t){let{components:n,...e}=t;return(0,a.kt)(u,(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terabyte-of-click-logs-from-criteo"},"Terabyte of Click Logs from Criteo"),(0,a.kt)("p",null,"Download the data from ",(0,a.kt)("a",{parentName:"p",href:"http://labs.criteo.com/downloads/download-terabyte-click-logs/"},"http://labs.criteo.com/downloads/download-terabyte-click-logs/")),(0,a.kt)("p",null,"Create a table to import the log to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE criteo_log (\n    date Date,\n    clicked UInt8,\n    int1 Int32,\n    int2 Int32,\n    int3 Int32,\n    int4 Int32,\n    int5 Int32,\n    int6 Int32,\n    int7 Int32,\n    int8 Int32,\n    int9 Int32,\n    int10 Int32,\n    int11 Int32,\n    int12 Int32,\n    int13 Int32,\n    cat1 String,\n    cat2 String,\n    cat3 String,\n    cat4 String,\n    cat5 String,\n    cat6 String,\n    cat7 String,\n    cat8 String,\n    cat9 String,\n    cat10 String,\n    cat11 String,\n    cat12 String,\n    cat13 String,\n    cat14 String,\n    cat15 String,\n    cat16 String,\n    cat17 String,\n    cat18 String,\n    cat19 String,\n    cat20 String,\n    cat21 String,\n    cat22 String,\n    cat23 String,\n    cat24 String,\n    cat25 String,\n    cat26 String\n) ENGINE = Log;\n")),(0,a.kt)("p",null,"Download the data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ for i in {00..23}; do echo $i; zcat datasets/criteo/day_${i#0}.gz | sed -r 's/^/2000-01-'${i/00/24}'\\t/' | clickhouse-client --host=example-perftest01j --query=\"INSERT INTO criteo_log FORMAT TabSeparated\"; done\n")),(0,a.kt)("p",null,"Create a table for the converted data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE criteo\n(\n    date Date,\n    clicked UInt8,\n    int1 Int32,\n    int2 Int32,\n    int3 Int32,\n    int4 Int32,\n    int5 Int32,\n    int6 Int32,\n    int7 Int32,\n    int8 Int32,\n    int9 Int32,\n    int10 Int32,\n    int11 Int32,\n    int12 Int32,\n    int13 Int32,\n    icat1 UInt32,\n    icat2 UInt32,\n    icat3 UInt32,\n    icat4 UInt32,\n    icat5 UInt32,\n    icat6 UInt32,\n    icat7 UInt32,\n    icat8 UInt32,\n    icat9 UInt32,\n    icat10 UInt32,\n    icat11 UInt32,\n    icat12 UInt32,\n    icat13 UInt32,\n    icat14 UInt32,\n    icat15 UInt32,\n    icat16 UInt32,\n    icat17 UInt32,\n    icat18 UInt32,\n    icat19 UInt32,\n    icat20 UInt32,\n    icat21 UInt32,\n    icat22 UInt32,\n    icat23 UInt32,\n    icat24 UInt32,\n    icat25 UInt32,\n    icat26 UInt32\n) ENGINE = MergeTree()\nPARTITION BY toYYYYMM(date)\nORDER BY (date, icat1)\n")),(0,a.kt)("p",null,"Transform data from the raw log and put it in the second table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO\n    criteo\nSELECT\n    date,\n    clicked,\n    int1,\n    int2,\n    int3,\n    int4,\n    int5,\n    int6,\n    int7,\n    int8,\n    int9,\n    int10,\n    int11,\n    int12,\n    int13,\n    reinterpretAsUInt32(unhex(cat1)) AS icat1,\n    reinterpretAsUInt32(unhex(cat2)) AS icat2,\n    reinterpretAsUInt32(unhex(cat3)) AS icat3,\n    reinterpretAsUInt32(unhex(cat4)) AS icat4,\n    reinterpretAsUInt32(unhex(cat5)) AS icat5,\n    reinterpretAsUInt32(unhex(cat6)) AS icat6,\n    reinterpretAsUInt32(unhex(cat7)) AS icat7,\n    reinterpretAsUInt32(unhex(cat8)) AS icat8,\n    reinterpretAsUInt32(unhex(cat9)) AS icat9,\n    reinterpretAsUInt32(unhex(cat10)) AS icat10,\n    reinterpretAsUInt32(unhex(cat11)) AS icat11,\n    reinterpretAsUInt32(unhex(cat12)) AS icat12,\n    reinterpretAsUInt32(unhex(cat13)) AS icat13,\n    reinterpretAsUInt32(unhex(cat14)) AS icat14,\n    reinterpretAsUInt32(unhex(cat15)) AS icat15,\n    reinterpretAsUInt32(unhex(cat16)) AS icat16,\n    reinterpretAsUInt32(unhex(cat17)) AS icat17,\n    reinterpretAsUInt32(unhex(cat18)) AS icat18,\n    reinterpretAsUInt32(unhex(cat19)) AS icat19,\n    reinterpretAsUInt32(unhex(cat20)) AS icat20,\n    reinterpretAsUInt32(unhex(cat21)) AS icat21,\n    reinterpretAsUInt32(unhex(cat22)) AS icat22,\n    reinterpretAsUInt32(unhex(cat23)) AS icat23,\n    reinterpretAsUInt32(unhex(cat24)) AS icat24,\n    reinterpretAsUInt32(unhex(cat25)) AS icat25,\n    reinterpretAsUInt32(unhex(cat26)) AS icat26\nFROM\n    criteo_log;\n\nDROP TABLE criteo_log;\n")))}d.isMDXComponent=!0}}]);