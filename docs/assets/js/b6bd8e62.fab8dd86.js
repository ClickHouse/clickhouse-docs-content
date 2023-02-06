"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[32059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const s={slug:"/en/operations/system-tables/grants"},l="grants",o={unversionedId:"en/operations/system-tables/grants",id:"en/operations/system-tables/grants",title:"grants",description:"Privileges granted to ClickHouse user accounts.",source:"@site/docs/en/operations/system-tables/grants.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/grants",permalink:"/docs/en/operations/system-tables/grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/system-tables/grants"},sidebar:"english",previous:{title:"functions",permalink:"/docs/en/operations/system-tables/functions"},next:{title:"graphite_retentions",permalink:"/docs/en/operations/system-tables/graphite_retentions"}},p={},i=[],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grants"},"grants"),(0,a.kt)("p",null,"Privileges granted to ClickHouse user accounts."),(0,a.kt)("p",null,"Columns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 User name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Role assigned to user account.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/enum"},"Enum8"),") \u2014 Access parameters for ClickHouse user account.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a database.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"table")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a table.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"column")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")) \u2014 Name of a column to which access is granted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Logical value. It shows whether some privileges have been revoked. Possible values:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u2014 The row describes a partial revoke.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u2014 The row describes a grant.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Permission is granted ",(0,a.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", see ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))))}m.isMDXComponent=!0}}]);