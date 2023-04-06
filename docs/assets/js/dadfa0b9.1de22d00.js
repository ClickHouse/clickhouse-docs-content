"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[85267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=i.createContext({}),s=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(r.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,k=p["".concat(r,".").concat(d)]||p[d]||h[d]||l;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const l={sidebar_position:20,slug:"/en/integrations/sql-clients/clickhouse-client-local",sidebar_label:"clickhouse-client (CLI)",title:"Download clickhouse-client and clickhouse-local"},a="clickhouse client and clickhouse local",c={unversionedId:"en/integrations/clickhouse-client-local",id:"en/integrations/clickhouse-client-local",title:"Download clickhouse-client and clickhouse-local",description:"clickhouse client is a client application that is used to connect to ClickHouse from the command line. clickhouse local is a client application that is used to query files on disk and across the network.  Many of the guides in the ClickHouse documentation will have you examine the schema of a file (CSV, TSV, Parquet, etc.) with clickhouse local, query the file, and even manipulate the data from the file in order to prepare it for insertion into ClickHouse.  We will often have you query a file with clickhouse local and pipe the output to clickhouse client to stream the data into ClickHouse.  There are example datasets that use both clickhouse client and clickhouse local in the Next Steps section at the end of this document.",source:"@site/docs/en/integrations/clickhouse-client-local.md",sourceDirName:"en/integrations",slug:"/en/integrations/sql-clients/clickhouse-client-local",permalink:"/docs/en/integrations/sql-clients/clickhouse-client-local",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/clickhouse-client-local.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,slug:"/en/integrations/sql-clients/clickhouse-client-local",sidebar_label:"clickhouse-client (CLI)",title:"Download clickhouse-client and clickhouse-local"},sidebar:"docs",previous:{title:"View all formats...",permalink:"/docs/en/interfaces/formats"},next:{title:"clickhouse-local",permalink:"/docs/en/operations/utilities/clickhouse-local"}},r={},s=[{value:"Prerequisite for Microsoft Windows",id:"prerequisite-for-microsoft-windows",level:2},{value:"Open a shell in WSL 2:",id:"open-a-shell-in-wsl-2",level:4},{value:"Download ClickHouse",id:"download-clickhouse",level:2},{value:"Verify <code>clickhouse client</code>",id:"verify-clickhouse-client",level:2},{value:"Verify <code>clickhouse local</code>",id:"verify-clickhouse-local",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:s},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clickhouse-client-and-clickhouse-local"},"clickhouse client and clickhouse local"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," is a client application that is used to connect to ClickHouse from the command line. ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local")," is a client application that is used to query files on disk and across the network.  Many of the guides in the ClickHouse documentation will have you examine the schema of a file (CSV, TSV, Parquet, etc.) with ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local"),", query the file, and even manipulate the data from the file in order to prepare it for insertion into ClickHouse.  We will often have you query a file with ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local")," and pipe the output to ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," to stream the data into ClickHouse.  There are example datasets that use both ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local")," in the Next Steps section at the end of this document."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you have already installed ClickHouse server locally you may have ",(0,o.kt)("strong",{parentName:"p"},"clickhouse client")," and ",(0,o.kt)("strong",{parentName:"p"},"clickhouse local")," installed.  Check by running ",(0,o.kt)("strong",{parentName:"p"},"clickhouse client")," and ",(0,o.kt)("strong",{parentName:"p"},"clickhouse local")," at the commandline.  Otherwise, follow the instructions for your operating system.")),(0,o.kt)("h2",{id:"prerequisite-for-microsoft-windows"},"Prerequisite for Microsoft Windows"),(0,o.kt)("p",null,"In Microsoft Windows 10 or 11 with the Windows Subsystem for Linux (WSL) version 2 (WSL 2) you can run Ubuntu Linux, and then run ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local"),"."),(0,o.kt)("p",null,"Install WSL by following Microsoft's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL documentation"),"."),(0,o.kt)("h4",{id:"open-a-shell-in-wsl-2"},"Open a shell in WSL 2:"),(0,o.kt)("p",null,"By running the ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," command from your terminal you will enter WSL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash\n")),(0,o.kt)("h2",{id:"download-clickhouse"},"Download ClickHouse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://clickhouse.com/ | sh\n")),(0,o.kt)("h2",{id:"verify-clickhouse-client"},"Verify ",(0,o.kt)("inlineCode",{parentName:"h2"},"clickhouse client")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse client\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," will try to connect to a local ClickHouse server instance, if you do not have one running it will timeout.  See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/sql-clients/cli"},(0,o.kt)("inlineCode",{parentName:"a"},"clickhouse-client"))," docs for examples.")),(0,o.kt)("h2",{id:"verify-clickhouse-local"},"Verify ",(0,o.kt)("inlineCode",{parentName:"h2"},"clickhouse local")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse local\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/getting-started/example-datasets/nypd_complaint_data"},"NYPD Complaint dataset")," for example use of both ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-local"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/sql-clients/cli"},(0,o.kt)("inlineCode",{parentName:"a"},"clickhouse-client"))," docs."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-local"},(0,o.kt)("inlineCode",{parentName:"a"},"clickhouse-local"))," docs."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/install"},"ClickHouse install")," docs."))}h.isMDXComponent=!0}}]);