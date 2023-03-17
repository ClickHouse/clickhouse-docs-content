"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[54935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={slug:"/zh/operations/system-tables/role-grants"},o=void 0,s={unversionedId:"zh/operations/system-tables/role-grants",id:"zh/operations/system-tables/role-grants",title:"role-grants",description:"systemtables-rolegrants}",source:"@site/docs/zh/operations/system-tables/role-grants.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/role-grants",permalink:"/docs/zh/operations/system-tables/role-grants",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/role-grants.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/system-tables/role-grants"},sidebar:"chinese",previous:{title:"system.replication_queue",permalink:"/docs/zh/operations/system-tables/replication_queue"},next:{title:"system.roles",permalink:"/docs/zh/operations/system-tables/roles"}},i={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#system.role_grants {#system_tables-role_grants}"),(0,a.kt)("p",null,"\u5305\u542b\u7528\u6237\u548c\u89d2\u8272\u7684\u89d2\u8272\u6388\u4e88. \u5411\u8be5\u8868\u6dfb\u52a0\u9879, \u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GRANT role TO user"),"."),(0,a.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u7528\u6237\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u89d2\u8272\u540d\u79f0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"granted_role_name")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6388\u4e88 ",(0,a.kt)("inlineCode",{parentName:"p"},"role_name")," \u89d2\u8272\u7684\u89d2\u8272\u540d\u79f0. \u8981\u5c06\u4e00\u4e2a\u89d2\u8272\u6388\u4e88\u53e6\u4e00\u4e2a\u89d2\u8272, \u8bf7\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"GRANT role1 TO role2"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"granted_role_is_default")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"granted_role")," \u662f\u5426\u4e3a\u9ed8\u8ba4\u89d2\u8272\u7684\u6807\u5fd7. \u53c2\u8003\u503c:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1 \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"granted_role")," is a default role."),(0,a.kt)("li",{parentName:"ul"},"0 \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"granted_role")," is not a default role."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"with_admin_option")," (",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"granted_role")," \u662f\u5426\u662f\u5177\u6709 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/grant#admin-option-privilege"},"ADMIN OPTION")," \u7279\u6743\u7684\u89d2\u8272\u7684\u6807\u5fd7. \u53c2\u8003\u503c:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"1 \u2014 \u8be5\u89d2\u8272\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," \u6743\u9650."),(0,a.kt)("li",{parentName:"ul"},"0 \u2014 \u8be5\u89d2\u8272\u4e0d\u5177\u6709  ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN OPTION")," \u6743\u9650.")))))}u.isMDXComponent=!0}}]);