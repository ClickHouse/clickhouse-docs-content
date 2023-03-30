"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[65597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,d=c["".concat(o,".").concat(m)]||c[m]||f[m]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/en/sql-reference/functions/ulid-functions",sidebar_position:54,sidebar_label:"ULID"},l="Functions for Working with ULID",s={unversionedId:"en/sql-reference/functions/ulid-functions",id:"en/sql-reference/functions/ulid-functions",title:"Functions for Working with ULID",description:"generateULID",source:"@site/docs/en/sql-reference/functions/ulid-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/ulid-functions",permalink:"/docs/en/sql-reference/functions/ulid-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/ulid-functions.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{slug:"/en/sql-reference/functions/ulid-functions",sidebar_position:54,sidebar_label:"ULID"},sidebar:"sqlreference",previous:{title:"UUID",permalink:"/docs/en/sql-reference/functions/uuid-functions"},next:{title:"URLs",permalink:"/docs/en/sql-reference/functions/url-functions"}},o={},u=[{value:"generateULID",id:"generateulid",level:2},{value:"ULIDStringToDateTime",id:"ulidstringtodatetime",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions-for-working-with-ulid"},"Functions for Working with ULID"),(0,a.kt)("h2",{id:"generateulid"},"generateULID"),(0,a.kt)("p",null,"Generates the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ulid/spec"},"ULID"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"generateULID([x])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/syntax#syntax-expressions"},"Expression")," resulting in any of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/#data_types"},"supported data types"),". The resulting value is discarded, but the expression itself if used for bypassing ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/#common-subexpression-elimination"},"common subexpression elimination")," if the function is called multiple times in one query. Optional parameter.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString")," type value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT generateULID()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500generateULID()\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 01GNB2S2FGN2P93QPXDNB4EN2R \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage example if it is needed to generate multiple values in one row")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT generateULID(1), generateULID(2)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500generateULID(1)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500generateULID(2)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 01GNB2SGG4RHKVNT9ZGA4FFMNP \u2502 01GNB2SGG4V0HMQVH4VBVPSSRB \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"ulidstringtodatetime"},"ULIDStringToDateTime"),(0,a.kt)("p",null,"This function extracts the timestamp from a ULID."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Syntax")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ULIDStringToDateTime(ulid[, timezone])\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ulid")," \u2014 Input ULID. ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String")," or ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString(26)"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timezone")," \u2014 ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"Timezone name")," for the returned value (optional). ",(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returned value")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Timestamp with milliseconds precision.")),(0,a.kt)("p",null,"Type: ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/datetime64"},"DateTime64(3)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ULIDStringToDateTime('01GNB2S2FGN2P93QPXDNB4EN2R')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ULIDStringToDateTime('01GNB2S2FGN2P93QPXDNB4EN2R')\u2500\u2510\n\u2502                            2022-12-28 00:40:37.616 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/functions/uuid-functions"},"UUID"))))}f.isMDXComponent=!0}}]);