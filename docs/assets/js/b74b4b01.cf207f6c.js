"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[71182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={slug:"/en/integrations/dbeaver",sidebar_label:"DBeaver",description:"DBeaver is a multi-platform database tool."},i="Connect DBeaver to ClickHouse",s={unversionedId:"en/integrations/sql-clients/dbeaver",id:"en/integrations/sql-clients/dbeaver",title:"Connect DBeaver to ClickHouse",description:"DBeaver is a multi-platform database tool.",source:"@site/docs/en/integrations/sql-clients/dbeaver.md",sourceDirName:"en/integrations/sql-clients",slug:"/en/integrations/dbeaver",permalink:"/docs/en/integrations/dbeaver",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/sql-clients/dbeaver.md",tags:[],version:"current",frontMatter:{slug:"/en/integrations/dbeaver",sidebar_label:"DBeaver",description:"DBeaver is a multi-platform database tool."},sidebar:"docs",previous:{title:"DataGrip",permalink:"/docs/en/integrations/datagrip"},next:{title:"Jupyter notebooks",permalink:"/docs/en/integrations/jupysql"}},l={},c=[{value:"1. Gather your ClickHouse details",id:"1-gather-your-clickhouse-details",level:2},{value:"2. Download DBeaver",id:"2-download-dbeaver",level:2},{value:"3. Add a database",id:"3-add-a-database",level:2},{value:"4. Query ClickHouse",id:"4-query-clickhouse",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"connect-dbeaver-to-clickhouse"},"Connect DBeaver to ClickHouse"),(0,n.kt)("p",null,"DBeaver is available in multiple offerings.  In this guide ",(0,n.kt)("a",{parentName:"p",href:"https://dbeaver.io/"},"DBeaver Community")," is used.  See the various offerings and capabilities ",(0,n.kt)("a",{parentName:"p",href:"https://dbeaver.com/edition/"},"here"),".  DBeaver will\nconnect to ClickHouse using JDBC."),(0,n.kt)("h2",{id:"1-gather-your-clickhouse-details"},"1. Gather your ClickHouse details"),(0,n.kt)("p",null,"DBeaver uses JDBC over HTTP(S) to connect to ClickHouse; you will need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"endpoint"),(0,n.kt)("li",{parentName:"ul"},"port number"),(0,n.kt)("li",{parentName:"ul"},"username"),(0,n.kt)("li",{parentName:"ul"},"password")),(0,n.kt)("h2",{id:"2-download-dbeaver"},"2. Download DBeaver"),(0,n.kt)("p",null,"DBeaver is available at ",(0,n.kt)("a",{parentName:"p",href:"https://dbeaver.io/download/"},"https://dbeaver.io/download/")),(0,n.kt)("h2",{id:"3-add-a-database"},"3. Add a database"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Either use the ",(0,n.kt)("strong",{parentName:"p"},"Database > New Database Connection")," menu or the ",(0,n.kt)("strong",{parentName:"p"},"New Database Connection")," icon in the ",(0,n.kt)("strong",{parentName:"p"},"Database Navigator")," to bring up the ",(0,n.kt)("strong",{parentName:"p"},"Connect to a database")," dialog:"),(0,n.kt)("img",{src:a(12938).Z,class:"image",alt:"Add a new database"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ClickHouse, this will add the ClickHouse JDBC driver to DBeaver:"),(0,n.kt)("img",{src:a(4182).Z,class:"image",alt:"Select ClickHouse as a new database"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default the ",(0,n.kt)("strong",{parentName:"p"},"Driver properties > SSL")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", if you are connecting to a ClickHouse server that requires SSL on the HTTP port, then set ",(0,n.kt)("strong",{parentName:"p"},"Driver properties > SSL")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,n.kt)("img",{src:a(66119).Z,class:"image",alt:"Set SSL as true or false"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build the JDBC URL. On the ",(0,n.kt)("strong",{parentName:"p"},"Main")," tab set the Host, Port, Username, and Password:"),(0,n.kt)("img",{src:a(73251).Z,class:"image",alt:"Set endpoint, user, password, port"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Test the connection and click ",(0,n.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,n.kt)("h2",{id:"4-query-clickhouse"},"4. Query ClickHouse"),(0,n.kt)("p",null,"Open a query editor and run a query."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Right click on your connection and choose ",(0,n.kt)("strong",{parentName:"p"},"SQL Editor > Open SQL Script")," to open a query editor:"),(0,n.kt)("img",{src:a(2737).Z,class:"image",alt:"Open a SQL Script connected to ClickHouse"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An example query against ",(0,n.kt)("inlineCode",{parentName:"p"},"system.query_log"),":"),(0,n.kt)("img",{src:a(33887).Z,class:"image",alt:"Query the system log"}))),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dbeaver/dbeaver/wiki"},"DBeaver wiki")," to learn about the capabilities of DBeaver, and the ",(0,n.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs"},"ClickHouse documentation")," to learn about the capabilities of ClickHouse."))}u.isMDXComponent=!0},12938:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-add-database-7acf03558d8ad362e1aca18a06a8ab2e.png"},4182:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-connect-to-a-database-fd516b3eb202ea41ad2914398f718234.png"},73251:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-endpoint-details-test-18778be6729e52cf53fd87eb211dcdb4.png"},33887:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-query-log-select-eabd8ab177796726443b3d7c4555a74e.png"},66119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-set-ssl-true-8714033b5fde45692205dea8098b6213.png"},2737:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dbeaver-sql-editor-09261b8b8a01772eb783059060f21ff1.png"}}]);