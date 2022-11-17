"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67740:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(87462),i=(n(67294),n(3905));const o={toc:[]};function r(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,i.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,i.kt)("strong",{parentName:"p"},"Connect"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ClickHouse Cloud service connect button",src:n(64872).Z,width:"939",height:"474"})),(0,i.kt)("p",null,"Choose ",(0,i.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:n(33273).Z,width:"586",height:"470"})),(0,i.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}r.isMDXComponent=!0},80576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),o=n(67740);const r={slug:"/en/integrations/sql-clients/arctype",sidebar_label:"ArcType",description:"Arctype is the fast and easy-to-use SQL client for developers and teams."},s="Connect Arctype to ClickHouse",c={unversionedId:"en/integrations/sql-clients/arctype",id:"en/integrations/sql-clients/arctype",title:"Connect Arctype to ClickHouse",description:"Arctype is the fast and easy-to-use SQL client for developers and teams.",source:"@site/docs/en/integrations/sql-clients/arctype.md",sourceDirName:"en/integrations/sql-clients",slug:"/en/integrations/sql-clients/arctype",permalink:"/docs/en/integrations/sql-clients/arctype",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/sql-clients/arctype.md",tags:[],version:"current",frontMatter:{slug:"/en/integrations/sql-clients/arctype",sidebar_label:"ArcType",description:"Arctype is the fast and easy-to-use SQL client for developers and teams."},sidebar:"english",previous:{title:"SQL Clients",permalink:"/docs/en/integrations/sql-clients"},next:{title:"clickhouse-client",permalink:"/docs/en/integrations/sql-clients/cli"}},l={},p=[{value:"1. Gather your connection details",id:"1-gather-your-connection-details",level:2},{value:"2. Add a database",id:"2-add-a-database",level:2},{value:"3. Query ClickHouse",id:"3-query-clickhouse",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connect-arctype-to-clickhouse"},"Connect Arctype to ClickHouse"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Arctype is EOL but existing users can use their local client with ClickHouse."))),(0,i.kt)("p",null,"Arctype has built-in support for ClickHouse, and the configuration is very simple.  If ClickHouse is not shown as one of the database types you will have to update Arctype."),(0,i.kt)("h2",{id:"1-gather-your-connection-details"},"1. Gather your connection details"),(0,i.kt)(o.ZP,{mdxType:"ConnectionDetails"}),(0,i.kt)("h2",{id:"2-add-a-database"},"2. Add a database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start Arctype and click ",(0,i.kt)("strong",{parentName:"p"},"+ Add Connection"),", and select ClickHouse:"),(0,i.kt)("img",{src:n(6798).Z,class:"image",alt:"Add a new database"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Credentials")," tab set the Host, Port, User, Password, and SSL Mode:"),(0,i.kt)("img",{src:n(75923).Z,class:"image",alt:"Set endpoint, user, password, port"}))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In this example the SSL Mode is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"verify-full"),".  If you are not using SSL, or using a self-signed cert you may have to choose a different setting or upload your certificate(s)."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Test the connection and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("h2",{id:"3-query-clickhouse"},"3. Query ClickHouse"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can select databases and then tables by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Tables")," icon in the left navigation, and then selecting the database and table.  You will see a tabular view of the selected table:"),(0,i.kt)("img",{src:n(67107).Z,class:"image",alt:"Select databases and tables"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The next choice in the left navigation is ",(0,i.kt)("strong",{parentName:"p"},"Queries"),".  After choosing Queries you can add a new query with the ",(0,i.kt)("strong",{parentName:"p"},"Add Query")," button, and then type your query in the query pane.  As you type Arctype will provide you with table and column names: "),(0,i.kt)("img",{src:n(39322).Z,class:"image",alt:"Query the ClickHouse database using Arctype type ahead log"}))),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.arctype.com/"},"Arctype documentation")," to learn about the capabilities of Arctype, and the ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs"},"ClickHouse documentation")," to learn about the capabilities of ClickHouse."))}u.isMDXComponent=!0},6798:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arctype-add-database-0035180867b2e3316713686d23b11cdb.png"},39322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arctype-queries-builder-5487b4f50508fe49c516beabac77652f.png"},75923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arctype-set-creds-and-test-018eb942a200b2f94b83286db581263c.png"},67107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/arctype-table-view-317a0236ecf7fda55ba5324e6253903a.png"},64872:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},33273:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);