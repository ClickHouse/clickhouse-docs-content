"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17564],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(86010),l=a(72389),o=a(67392),s=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a,l=e.lazy,m=e.block,d=e.defaultValue,k=e.values,h=e.groupId,f=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,C=v.setTabGroupChoices,T=(0,r.useState)(b),E=T[0],I=T[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var H=w[h];null!=H&&H!==E&&g.some((function(e){return e.value===H}))&&I(H)}var S=function(e){var t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==E&&(O(t),I(n),null!=h&&C(h,String(n)))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=x.indexOf(e.currentTarget)+1;a=null!=(n=x[r])?n:x[0];break;case"ArrowLeft":var i,l=x.indexOf(e.currentTarget)-1;a=null!=(i=x[l])?i:x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:R,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(N.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},94537:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(65488),o=a(85162),s=["components"],u={sidebar_label:"Quick Start",sidebar_position:2,keywords:["clickhouse","install","getting started","quick start"]},c="Quick Start",p={unversionedId:"en/quick-start",id:"en/quick-start",title:"Quick Start",description:"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture. Follow these steps",source:"@site/docs/en/quick-start.mdx",sourceDirName:"en",slug:"/en/quick-start",permalink:"/docs/en/quick-start",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/quick-start.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quick Start",sidebar_position:2,keywords:["clickhouse","install","getting started","quick start"]},sidebar:"english",previous:{title:"What is ClickHouse?",permalink:"/docs/en/intro"},next:{title:"Tutorial",permalink:"/docs/en/tutorial"}},m={},d=[{value:"1. Start ClickHouse",id:"1-start-clickhouse",level:2},{value:"2. Connect to ClickHouse",id:"2-connect-to-clickhouse",level:2},{value:"Use the Built-in UI",id:"use-the-built-in-ui",level:3},{value:"Use the ClickHouse Client",id:"use-the-clickhouse-client",level:3},{value:"3. Create a Table",id:"3-create-a-table",level:2},{value:"A Brief Intro to Primary Keys",id:"a-brief-intro-to-primary-keys",level:3},{value:"4. Insert Data",id:"4-insert-data",level:2},{value:"5. Insert a CSV file",id:"5-insert-a-csv-file",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],k={toc:d};function h(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture. Follow these steps\nto get up and running with ClickHouse."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your OS is not supported or for other install options, view the ",(0,i.kt)("a",{parentName:"p",href:"/en/getting-started/install/"},"installation details in the technical reference guide"),"."))),(0,i.kt)("h2",{id:"1-start-clickhouse"},"1. Start ClickHouse"),(0,i.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The simplest way to download ClickHouse locally is to run the following command. If your operating system is supported, an appropriate ClickHouse binary will be downloaded and made executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"install")," command, which defines a collection of useful symlinks along with the files and folders used by ClickHouse - all of which you can see in the output of the install script:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./clickhouse install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At the end of the install script, you are prompted for a password for the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," user. Feel free to enter a password, or you can optionally leave it blank:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Creating log directory /var/log/clickhouse-server.\nCreating data directory /var/lib/clickhouse.\nCreating pid directory /var/run/clickhouse-server.\n chown -R clickhouse:clickhouse '/var/log/clickhouse-server'\n chown -R clickhouse:clickhouse '/var/run/clickhouse-server'\n chown  clickhouse:clickhouse '/var/lib/clickhouse'\nEnter password for default user:\n")),(0,i.kt)("p",{parentName:"li"},"You should see the following output:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"ClickHouse has been successfully installed.\n\nStart clickhouse-server with:\n sudo clickhouse start\n\nStart clickhouse-client with:\n clickhouse-client\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to start the ClickHouse server:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo clickhouse start\n"))))),(0,i.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The simplest way to download ClickHouse locally is to run the following command. If your operating system is supported, an appropriate ClickHouse binary will be downloaded and made executable:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://clickhouse.com/ | sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following command to start the ClickHouse server. A user named ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," with no password is created on the initial startup:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse server\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The examples throughout the documentation use the Linux commands for running the ClickHouse client (",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),")."),(0,i.kt)("p",{parentName:"div"},"To run the ClickHouse server and client on a Mac, use ",(0,i.kt)("inlineCode",{parentName:"p"},"./clickhouse server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./clickhouse client"),", respectively."))))))),(0,i.kt)("h2",{id:"2-connect-to-clickhouse"},"2. Connect to ClickHouse"),(0,i.kt)("p",null,"You can connect to ClickHouse by using the built-in UI or the ClickHouse client."),(0,i.kt)("h3",{id:"use-the-built-in-ui"},"Use the Built-in UI"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ClickHouse server listens for HTTP clients on port 8123 by default. There is a built-in UI for running SQL queries at ",(0,i.kt)("a",{href:"http://127.0.0.1:8123/play",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:8123/play"},"http://127.0.0.1:8123/play"))," (change the hostname accordingly)."),(0,i.kt)("img",{src:a(75557).Z,class:"image",alt:"The Play UI"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Notice in your Play UI that the username was populated with ",(0,i.kt)("strong",{parentName:"p"},"default")," and the password text field was left empty. If you assigned a password to the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," user, enter it into the password field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Try running a query. For example, the following returns the names of the predefined databases:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW databases\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"RUN")," button and the response is displayed in the lower portion of the Play UI:"),(0,i.kt)("img",{src:a(47464).Z,class:"image",alt:"View the results"}))),(0,i.kt)("h3",{id:"use-the-clickhouse-client"},"Use the ClickHouse Client"),(0,i.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"You can also connect to your ClickHouse server using a command-line tool named ",(0,i.kt)("strong",{parentName:"p"},"clickhouse-client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client\n"))),(0,i.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,i.kt)("p",null,"You can also connect to your ClickHouse server using a command-line tool named ",(0,i.kt)("strong",{parentName:"p"},"clickhouse-client"),". Open a new terminal and change directories to where you downloaded the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary in step 1 above, then run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse client\n")))),(0,i.kt)("p",null,"If you get the smiley face prompt, you are ready to run queries!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},":)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give it a try by running the following query:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\n")),(0,i.kt)("p",{parentName:"li"},"Notice the response comes back in a nice table format:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp ASC\n\nQuery id: f7a33012-bc8c-4f0f-9641-260ee1ffe4b8\n\n\u250c\u2500user_id\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500\u2500metric\u2500\u2510\n\u2502     102 \u2502 Insert a lot of rows per batch                     \u2502 2022-03-21 00:00:00 \u2502 1.41421 \u2502\n\u2502     102 \u2502 Sort your data based on your commonly-used queries \u2502 2022-03-22 00:00:00 \u2502   2.718 \u2502\n\u2502     101 \u2502 Hello, ClickHouse!                                 \u2502 2022-03-22 14:04:09 \u2502      -1 \u2502\n\u2502     101 \u2502 Granules are the smallest chunks of data read      \u2502 2022-03-22 14:04:14 \u2502 3.14159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.008 sec.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"FORMAT")," clause to specify one of the ",(0,i.kt)("a",{parentName:"p",href:"/en/interfaces/formats/"},"many supported output formats of ClickHouse"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp\nFORMAT TabSeparated\n")),(0,i.kt)("p",{parentName:"li"},"In the above query, the output is returned as tab-separated:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 3604df1c-acfd-4117-9c56-f86c69721121\n\n102 Insert a lot of rows per batch  2022-03-21 00:00:00 1.41421\n102 Sort your data based on your commonly-used queries  2022-03-22 00:00:00 2.718\n101 Hello, ClickHouse!  2022-03-22 14:04:09 -1\n101 Granules are the smallest chunks of data read   2022-03-22 14:04:14 3.14159\n\n4 rows in set. Elapsed: 0.005 sec.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To exit the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", enter the ",(0,i.kt)("strong",{parentName:"p"},"exit")," command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},":) exit\nBye.\n")))),(0,i.kt)("h2",{id:"3-create-a-table"},"3. Create a Table"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As in most databases management systems, ClickHouse logically groups tables into ",(0,i.kt)("strong",{parentName:"p"},"databases"),". Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," command to create a new database in ClickHouse:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS helloworld\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Even the simplest of tables in ClickHouse must specify a ",(0,i.kt)("strong",{parentName:"p"},"table engine"),". The engine determines details about the table like:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"how and where the data is stored,"),(0,i.kt)("li",{parentName:"ul"},"which queries are supported, and"),(0,i.kt)("li",{parentName:"ul"},"whether or not the data is replicated.")),(0,i.kt)("p",{parentName:"li"},"There are many engines to choose from, but for a simple table on a single-node ClickHouse server,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," is your likely choice. Run the following command to create a table named ",(0,i.kt)("inlineCode",{parentName:"p"},"my_first_table")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld")," database:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE helloworld.my_first_table\n(\n    user_id UInt32,\n    message String,\n    timestamp DateTime,\n    metric Float32\n)\nENGINE = MergeTree()\nPRIMARY KEY (user_id, timestamp)\n")))),(0,i.kt)("h3",{id:"a-brief-intro-to-primary-keys"},"A Brief Intro to Primary Keys"),(0,i.kt)("p",null,"Before you go any further, it is important to understand how primary keys work in ClickHouse (the implementation\nof primary keys might seem unexpected!):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"primary keys in ClickHouse are ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"not unique"))," for each row in a table")),(0,i.kt)("p",null,"The primary key of a ClickHouse table determines how the data is sorted when written to disk. Every 8,192 rows or 10MB of\ndata (referred to as the ",(0,i.kt)("strong",{parentName:"p"},"index granularity"),") creates an entry in the primary key index file. This granularity concept\ncreates a ",(0,i.kt)("strong",{parentName:"p"},"sparse index")," that can easily fit in memory, and the granules represent a stripe of the smallest amount of\ncolumn data that gets processed during ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries."),(0,i.kt)("p",null,"The primary key can be defined using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," command. If you define a table without a ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY")," specified,\nthen the key becomes the tuple specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. If you specify both a ",(0,i.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY ")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY"),", the primary key must be a subset of the sort order."),(0,i.kt)("p",null,"In the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"my_first_table")," is a MergeTree table with four columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_id"),":  a 32-bit unsigned integer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message"),": a String data type, which replaces types like VARCHAR, BLOB, CLOB and others from other database systems"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),": a DateTime value, which represents an instant in time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metric"),": a 32-bit floating point number")),(0,i.kt)("p",null,"The primary key is also the sorting key, which is a tuple of ",(0,i.kt)("inlineCode",{parentName:"p"},"(user_id, timestamp)"),".  Therefore, the data stored in each\ncolumn file will be sorted by ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,i.kt)("h2",{id:"4-insert-data"},"4. Insert Data"),(0,i.kt)("p",null,"You can use the familiar ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO TABLE")," command with ClickHouse, but it is important to understand that each insert into a ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table causes a ",(0,i.kt)("strong",{parentName:"p"},"part")," to be created in storage."),(0,i.kt)("p",null,"The best practice with ClickHouse is to insert a large number of rows per batch - tens of thousands or even millions of\nrows at once. (Don't worry - ClickHouse can easily handle that type of volume!)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Even for a simple example, let's insert more than one row at a time:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO helloworld.my_first_table (user_id, message, timestamp, metric) VALUES\n    (101, 'Hello, ClickHouse!',                                 now(),       -1.0    ),\n    (102, 'Insert a lot of rows per batch',                     yesterday(), 1.41421 ),\n    (102, 'Sort your data based on your commonly-used queries', today(),     2.718   ),\n    (101, 'Granules are the smallest chunks of data read',      now() + 5,   3.14159 )\n")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," column is populated using various ",(0,i.kt)("strong",{parentName:"p"},"Date")," and ",(0,i.kt)("strong",{parentName:"p"},"DateTime")," functions. ClickHouse has hundreds of useful\nfunctions that you can ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/"},"view in the ",(0,i.kt)("strong",{parentName:"a"},"Functions")," section"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Let's verify it worked:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM helloworld.my_first_table\n")),(0,i.kt)("p",{parentName:"li"},"You should see the four rows of data that were inserted:"),(0,i.kt)("img",{src:a(22600).Z,class:"image",alt:"New rows inserted"}))),(0,i.kt)("h2",{id:"5-insert-a-csv-file"},"5. Insert a CSV file"),(0,i.kt)("p",null,"A common task when getting started with a database is to insert some data that you already have in files. We have some\nsample data online that you can insert that represents clickstream data - it includes a user ID, a URL that was visited, and\nthe timestamp of the event."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Suppose we have the following text in a CSV file named ",(0,i.kt)("inlineCode",{parentName:"p"},"data.csv"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"102,This is data in a file,2022-02-22 10:43:28,123.45\n101,It is comma-separated,2022-02-23 00:00:00,456.78\n103,Use FORMAT to specify the format,2022-02-21 10:43:30,678.90\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The following command inserts the data into ",(0,i.kt)("inlineCode",{parentName:"p"},"my_first_table"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client \\\n--query='INSERT INTO helloworld.my_first_table FORMAT CSV' < data.csv\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the following query to validate the insertion:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\n   FROM helloworld.my_first_table\n   ORDER BY timestamp ASC\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"SELECT *\nFROM helloworld.my_first_table\nORDER BY timestamp ASC\n\nQuery id: d7216864-2b85-4ad2-9073-6c0bef7ed0c6\n\n\u250c\u2500user_id\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500\u2500metric\u2500\u2510\n\u2502     103 \u2502 Use FORMAT to specify the format                   \u2502 2022-02-21 10:43:30 \u2502   678.9 \u2502\n\u2502     102 \u2502 This is data in a file                             \u2502 2022-02-22 10:43:28 \u2502  123.45 \u2502\n\u2502     101 \u2502 It is comma-separated                              \u2502 2022-02-23 00:00:00 \u2502  456.78 \u2502\n\u2502     102 \u2502 Insert a lot of rows per batch                     \u2502 2022-07-15 00:00:00 \u2502 1.41421 \u2502\n\u2502     102 \u2502 Sort your data based on your commonly-used queries \u2502 2022-07-16 00:00:00 \u2502   2.718 \u2502\n\u2502     101 \u2502 Hello, ClickHouse!                                 \u2502 2022-07-16 00:19:30 \u2502      -1 \u2502\n\u2502     101 \u2502 Granules are the smallest chunks of data read      \u2502 2022-07-16 00:19:35 \u2502 3.14159 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/tutorial"},"Tutorial")," has you insert 2 million rows into a table and write some analytical queries"),(0,i.kt)("li",{parentName:"ul"},"We have a list of ",(0,i.kt)("a",{parentName:"li",href:"/en/getting-started/example-datasets/"},"example datasets")," with instructions on how to insert them"),(0,i.kt)("li",{parentName:"ul"},"Check out our 25-minute video on ",(0,i.kt)("a",{parentName:"li",href:"https://clickhouse.com/company/events/getting-started-with-clickhouse/"},"Getting Started with ClickHouse")),(0,i.kt)("li",{parentName:"ul"},"If your data is coming from an external source, view our ",(0,i.kt)("a",{parentName:"li",href:"/en/integrations/"},"collection of integration guides")," for connecting to message queues, databases, pipelines and more"),(0,i.kt)("li",{parentName:"ul"},"If you are using a UI/BI visualization tool, view the ",(0,i.kt)("a",{parentName:"li",href:"/en/connect-a-ui/"},"user guides for connecting a UI to ClickHouse")),(0,i.kt)("li",{parentName:"ul"},"The user guide on ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/guides/improving-query-performance/sparse-primary-indexes/sparse-primary-indexes-intro"},"primary keys")," is everything you need to know about primary keys and how to define them")))}h.isMDXComponent=!0},75557:function(e,t,a){t.Z=a.p+"assets/images/quickstart_01-a6d0b81717fcc498112f333cb8ff772a.png"},47464:function(e,t,a){t.Z=a.p+"assets/images/quickstart_02-1a2d7f59f32aefc9abdbb87333a6184f.png"},22600:function(e,t,a){t.Z=a.p+"assets/images/quickstart_03-ffbccfd01792a92b047f697d2d15f02f.png"}}]);