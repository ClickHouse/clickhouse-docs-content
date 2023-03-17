"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[63126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/en/sql-reference/statements/create/row-policy",sidebar_position:41,sidebar_label:"ROW POLICY",title:"CREATE ROW POLICY"},l=void 0,i={unversionedId:"en/sql-reference/statements/create/row-policy",id:"en/sql-reference/statements/create/row-policy",title:"CREATE ROW POLICY",description:"Creates a row policy, i.e. a filter used to determine which rows a user can read from a table.",source:"@site/docs/en/sql-reference/statements/create/row-policy.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/row-policy",permalink:"/docs/en/sql-reference/statements/create/row-policy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/row-policy.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{slug:"/en/sql-reference/statements/create/row-policy",sidebar_position:41,sidebar_label:"ROW POLICY",title:"CREATE ROW POLICY"},sidebar:"sqlreference",previous:{title:"ROLE",permalink:"/docs/en/sql-reference/statements/create/role"},next:{title:"QUOTA",permalink:"/docs/en/sql-reference/statements/create/quota"}},s={},p=[{value:"USING Clause",id:"using-clause",level:2},{value:"TO Clause",id:"to-clause",level:2},{value:"AS Clause",id:"as-clause",level:2},{value:"ON CLUSTER Clause",id:"on-cluster-clause",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creates a ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/access-rights#row-policy-management"},"row policy"),", i.e. a filter used to determine which rows a user can read from a table."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Row policies makes sense only for users with readonly access. If user can modify table or copy partitions between tables, it defeats the restrictions of row policies.")),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE [ROW] POLICY [IF NOT EXISTS | OR REPLACE] policy_name1 [ON CLUSTER cluster_name1] ON [db1.]table1\n        [, policy_name2 [ON CLUSTER cluster_name2] ON [db2.]table2 ...]\n    [FOR SELECT] USING condition\n    [AS {PERMISSIVE | RESTRICTIVE}]\n    [TO {role1 [, role2 ...] | ALL | ALL EXCEPT role1 [, role2 ...]}]\n")),(0,o.kt)("h2",{id:"using-clause"},"USING Clause"),(0,o.kt)("p",null,"Allows to specify a condition to filter rows. An user will see a row if the condition is calculated to non-zero for the row."),(0,o.kt)("h2",{id:"to-clause"},"TO Clause"),(0,o.kt)("p",null,"In the section ",(0,o.kt)("inlineCode",{parentName:"p"},"TO")," you can provide a list of users and roles this policy should work for. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY ... TO accountant, john@localhost"),"."),(0,o.kt)("p",null,"Keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL")," means all the ClickHouse users including current user. Keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL EXCEPT")," allow to exclude some users from the all users list, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY ... TO ALL EXCEPT accountant, john@localhost")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If there are no row policies defined for a table then any user can ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," all the row from the table. Defining one or more row policies for the table makes the access to the table depending on the row policies no matter if those row policies are defined for the current user or not. For example, the following policy"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter")),(0,o.kt)("p",{parentName:"admonition"},"forbids the users ",(0,o.kt)("inlineCode",{parentName:"p"},"mira")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see the rows with ",(0,o.kt)("inlineCode",{parentName:"p"},"b != 1"),", and any non-mentioned user (e.g., the user ",(0,o.kt)("inlineCode",{parentName:"p"},"paul"),") will see no rows from ",(0,o.kt)("inlineCode",{parentName:"p"},"mydb.table1")," at all."),(0,o.kt)("p",{parentName:"admonition"},"If that's not desirable it can't be fixed by adding one more row policy, like the following:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY pol2 ON mydb.table1 USING 1 TO ALL EXCEPT mira, peter"))),(0,o.kt)("h2",{id:"as-clause"},"AS Clause"),(0,o.kt)("p",null,"It's allowed to have more than one policy enabled on the same table for the same user at the one time. So we need a way to combine the conditions from multiple policies."),(0,o.kt)("p",null,"By default policies are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator. For example, the following policies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter\nCREATE ROW POLICY pol2 ON mydb.table1 USING c=2 TO peter, antonio\n")),(0,o.kt)("p",null,"enables the user ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see rows with either ",(0,o.kt)("inlineCode",{parentName:"p"},"b=1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"c=2"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AS")," clause specifies how policies should be combined with other policies. Policies can be either permissive or restrictive. By default policies are permissive, which means they are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," operator."),(0,o.kt)("p",null,"A policy can be defined as restrictive as an alternative. Restrictive policies are combined using the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," operator."),(0,o.kt)("p",null,"Here is the general formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"row_is_visible = (one or more of the permissive policies' conditions are non-zero) AND\n                 (all of the restrictive policies's conditions are non-zero)\n")),(0,o.kt)("p",null,"For example, the following policies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROW POLICY pol1 ON mydb.table1 USING b=1 TO mira, peter\nCREATE ROW POLICY pol2 ON mydb.table1 USING c=2 AS RESTRICTIVE TO peter, antonio\n")),(0,o.kt)("p",null,"enables the user ",(0,o.kt)("inlineCode",{parentName:"p"},"peter")," to see rows only if both ",(0,o.kt)("inlineCode",{parentName:"p"},"b=1")," AND ",(0,o.kt)("inlineCode",{parentName:"p"},"c=2"),"."),(0,o.kt)("h2",{id:"on-cluster-clause"},"ON CLUSTER Clause"),(0,o.kt)("p",null,"Allows creating row policies on a cluster, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter1 ON mydb.mytable USING a<1000 TO accountant, john@localhost")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter2 ON mydb.mytable USING a<1000 AND b=5 TO ALL EXCEPT mira")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CREATE ROW POLICY filter3 ON mydb.mytable USING 1 TO admin")))}u.isMDXComponent=!0}}]);