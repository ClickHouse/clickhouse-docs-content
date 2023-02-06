"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[44907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,b=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},43788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/engines/table-engines/special/set",sidebar_position:60,sidebar_label:"Set"},s="Set Table Engine",o={unversionedId:"en/engines/table-engines/special/set",id:"en/engines/table-engines/special/set",title:"Set Table Engine",description:"A data set that is always in RAM. It is intended for use on the right side of the IN operator (see the section \u201cIN operators\u201d).",source:"@site/docs/en/engines/table-engines/special/set.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/set",permalink:"/docs/en/engines/table-engines/special/set",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/set.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{slug:"/en/engines/table-engines/special/set",sidebar_position:60,sidebar_label:"Set"},sidebar:"english",previous:{title:"Null",permalink:"/docs/en/engines/table-engines/special/null"},next:{title:"Join",permalink:"/docs/en/engines/table-engines/special/join"}},l={},p=[{value:"Limitations and Settings",id:"join-limitations-and-settings",level:3},{value:"persistent",id:"persistent",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-table-engine"},"Set Table Engine"),(0,a.kt)("p",null,"A data set that is always in RAM. It is intended for use on the right side of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator (see the section \u201cIN operators\u201d)."),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT")," to insert data in the table. New elements will be added to the data set, while duplicates will be ignored.\nBut you can\u2019t perform ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," from the table. The only way to retrieve data is by using it in the right half of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IN")," operator."),(0,a.kt)("p",null,"Data is always located in RAM. For ",(0,a.kt)("inlineCode",{parentName:"p"},"INSERT"),", the blocks of inserted data are also written to the directory of tables on the disk. When starting the server, this data is loaded to RAM. In other words, after restarting, the data remains in place."),(0,a.kt)("p",null,"For a rough server restart, the block of data on the disk might be lost or damaged. In the latter case, you may need to manually delete the file with damaged data."),(0,a.kt)("h3",{id:"join-limitations-and-settings"},"Limitations and Settings"),(0,a.kt)("p",null,"When creating a table, the following settings are applied:"),(0,a.kt)("h4",{id:"persistent"},"persistent"),(0,a.kt)("p",null,"Disables persistency for the Set and ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/join/#join"},"Join")," table engines."),(0,a.kt)("p",null,"Reduces the I/O overhead. Suitable for scenarios that pursue performance and do not require persistence."),(0,a.kt)("p",null,"Possible values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 \u2014 Enabled."),(0,a.kt)("li",{parentName:"ul"},"0 \u2014 Disabled.")),(0,a.kt)("p",null,"Default value: ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."))}d.isMDXComponent=!0}}]);