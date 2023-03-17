"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[36027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),b=o,h=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},67740:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,o.kt)(i,(0,n.Z)({},r,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to ClickHouse with HTTP(S) you need this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The HOST and PORT: typically, the port is 8443 when using TLS or 8123 when not using TLS.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box, there is a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", use the name of the database that you want to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box, the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case."))),(0,o.kt)("p",null,"The details for your ClickHouse Cloud service are available in the ClickHouse Cloud console.  Select the service that you will connect to and click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud service connect button",src:a(64872).Z,width:"939",height:"474"})),(0,o.kt)("p",null,"Choose ",(0,o.kt)("strong",{parentName:"p"},"HTTPS"),", and the details are available in an example ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ClickHouse Cloud HTTPS connection details",src:a(33273).Z,width:"586",height:"470"})),(0,o.kt)("p",null,"If you are using self-managed ClickHouse, the connection details are set by your ClickHouse administrator."))}s.isMDXComponent=!0},12616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(67740);const r={sidebar_label:"Rocket BI",sidebar_position:131,slug:"/en/integrations/rocketbi",keywords:["clickhouse","rocketbi","connect","integrate","ui"],description:"RocketBI is a self-service business intelligence platform that helps you quickly analyze data, build drag-n-drop visualizations and collaborate with colleagues right on your web browser."},i="GOAL: BUILD YOUR 1ST DASHBOARD",s={unversionedId:"en/integrations/data-visualization/rocketbi-and-clickhouse",id:"en/integrations/data-visualization/rocketbi-and-clickhouse",title:"GOAL: BUILD YOUR 1ST DASHBOARD",description:"RocketBI is a self-service business intelligence platform that helps you quickly analyze data, build drag-n-drop visualizations and collaborate with colleagues right on your web browser.",source:"@site/docs/en/integrations/data-visualization/rocketbi-and-clickhouse.md",sourceDirName:"en/integrations/data-visualization",slug:"/en/integrations/rocketbi",permalink:"/docs/en/integrations/rocketbi",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-visualization/rocketbi-and-clickhouse.md",tags:[],version:"current",sidebarPosition:131,frontMatter:{sidebar_label:"Rocket BI",sidebar_position:131,slug:"/en/integrations/rocketbi",keywords:["clickhouse","rocketbi","connect","integrate","ui"],description:"RocketBI is a self-service business intelligence platform that helps you quickly analyze data, build drag-n-drop visualizations and collaborate with colleagues right on your web browser."},sidebar:"docs",previous:{title:"Metabase",permalink:"/docs/en/integrations/metabase"},next:{title:"Superset",permalink:"/docs/en/integrations/superset"}},l={},c=[{value:"INSTALL",id:"install",level:2},{value:"LET&#39;S BUILD THE DASHBOARD",id:"lets-build-the-dashboard",level:2},{value:"Build the Chart Controls",id:"build-the-chart-controls",level:3},{value:"Create a Metrics Control",id:"create-a-metrics-control",level:4},{value:"Create a Date Type Control",id:"create-a-date-type-control",level:4},{value:"Now, let build the Charts",id:"now-let-build-the-charts",level:3},{value:"Pie Chart: Sales Metrics by Regions",id:"pie-chart-sales-metrics-by-regions",level:4},{value:"Use Date Control in a Time-series Chart",id:"use-date-control-in-a-time-series-chart",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"goal-build-your-1st-dashboard"},"GOAL: BUILD YOUR 1ST DASHBOARD"),(0,o.kt)("p",null,"In this guide, you will install and build a simple dashboard using Rocket.BI .\nThis is the dashboard:"),(0,o.kt)("img",{width:"800",alt:"github_rocketbi2",src:a(42001).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can checkout ",(0,o.kt)("a",{parentName:"p",href:"https://demo.rocket.bi/dashboard/sales-dashboard-7?token=7eecf750-cbde-4c53-8fa8-8b905fec667e"},"the Dashboard via this link.")),(0,o.kt)("h2",{id:"install"},"INSTALL"),(0,o.kt)("p",null,"Start RocketBI with our pre-built docker images."),(0,o.kt)("p",null,"Get docker-compose.yml and configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/datainsider-co/rocket-bi/main/docker/docker-compose.yml\nwget https://raw.githubusercontent.com/datainsider-co/rocket-bi/main/docker/.clickhouse.env\n")),(0,o.kt)("p",null,"Edit .clickhouse.env, add clickhouse server information."),(0,o.kt)("p",null,"Start RocketBI by run command: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up -d .")),(0,o.kt)("p",null,"Open browser, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:5050"),", login with this account: ",(0,o.kt)("inlineCode",{parentName:"p"},"hello@gmail.com/123456")),(0,o.kt)("p",null,"To build from source or advanced configuration you could check it here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datainsider-co/rocket-bi/blob/main/README.md"},"Rocket.BI Readme")),(0,o.kt)("h2",{id:"lets-build-the-dashboard"},"LET'S BUILD THE DASHBOARD"),(0,o.kt)("p",null,"In Dashboard, you will find your reportings, start visualization by clicking ",(0,o.kt)("strong",{parentName:"p"},"+New"),"\nYou can build ",(0,o.kt)("strong",{parentName:"p"},"unlimited dashboards")," & draw ",(0,o.kt)("strong",{parentName:"p"},"unlimited charts")," in a dashboard."),(0,o.kt)("img",{width:"800",alt:"rocketbi_create_chart",src:a(30455).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"See hi-res tutorial on Youtube: ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=TMkdMHHfvqY"},"https://www.youtube.com/watch?v=TMkdMHHfvqY")),(0,o.kt)("h3",{id:"build-the-chart-controls"},"Build the Chart Controls"),(0,o.kt)("h4",{id:"create-a-metrics-control"},"Create a Metrics Control"),(0,o.kt)("p",null,"In the Tab filter, select metric fields you want to use. Make sure to keep check on aggregation setting."),(0,o.kt)("img",{width:"650",alt:"rocketbi_chart_6",src:a(44063).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Rename filters & Save Control to Dashboard"),(0,o.kt)("img",{width:"400",alt:"Metrics Control",src:a(69115).Z}),(0,o.kt)("h4",{id:"create-a-date-type-control"},"Create a Date Type Control"),(0,o.kt)("p",null,"Choose a Date field as Main Date column:"),(0,o.kt)("img",{width:"650",alt:"rocketbi_chart_4",src:a(74386).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Add duplicate variants with different lookup ranges. For example, Year, Monthly, Daily date or Day of Week."),(0,o.kt)("img",{width:"650",alt:"rocketbi_chart_5",src:a(21974).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Rename filters & Save Control to Dashboard"),(0,o.kt)("img",{width:"200",alt:"Date Range Control",src:a(33134).Z}),(0,o.kt)("h3",{id:"now-let-build-the-charts"},"Now, let build the Charts"),(0,o.kt)("h4",{id:"pie-chart-sales-metrics-by-regions"},"Pie Chart: Sales Metrics by Regions"),(0,o.kt)("p",null,"Choose Adding new chart, then Select Pie Chart"),(0,o.kt)("img",{width:"650",alt:"Add Pie Chart",src:a(63204).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,'First Drag & Drop the column "Region" from the Dataset to Lengend Field'),(0,o.kt)("img",{width:"650",alt:"Drag-n-drop Column to Chart",src:a(24753).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Then, change to Chart Control Tab"),(0,o.kt)("img",{width:"650",alt:"Navigate to Chart Control in Visualization",src:a(38517).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Drag & Drop the Metrics Control into Value Field"),(0,o.kt)("img",{width:"650",alt:"Use Metrics Control in Chart",src:a(59778).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"(you can also use Metrics Control as Sorting)"),(0,o.kt)("p",null,"Navigate to Chart Setting for further customization"),(0,o.kt)("img",{width:"650",alt:"Custom the Chart with Setting",src:a(14223).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"For example, change Data label to Percentage"),(0,o.kt)("img",{width:"650",alt:"Chart Customization Example",src:a(54720).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Save & Add the Chart to Dashboard"),(0,o.kt)("img",{width:"650",alt:"Overview Dashboard with Pie Chart",src:a(5691).Z}),(0,o.kt)("h4",{id:"use-date-control-in-a-time-series-chart"},"Use Date Control in a Time-series Chart"),(0,o.kt)("p",null,"Let Use a Stacked Column Chart"),(0,o.kt)("img",{width:"650",alt:"Create a Time-series chart with Tab Control",src:a(41506).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"In Chart Control, use Metrics Control as Y-axis & Date Range as X-axis"),(0,o.kt)("img",{width:"650",alt:"Use Date Range as Controller",src:a(67549).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Add Region column in to Breakdown"),(0,o.kt)("img",{width:"650",alt:"Add Region into Breakdown",src:a(19015).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Adding Number Chart as KPIs & glare-up the Dashboard"),(0,o.kt)("img",{width:"800",alt:"Screenshot 2022-11-17 at 10 43 29",src:a(3413).Z}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now, you had successfully build your 1st dashboard with rocket.BI"))}p.isMDXComponent=!0},42001:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_01-7187cf887c5c8ca06851da87bbe1c6ea.gif"},30455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_02-9e1cef470914f0a6762527bb8ead538a.gif"},44063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_03-a6fc7ef1ffc918b2274e93d2f62e9c75.png"},69115:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_04-a7697acc36ee76c44c40c0ec1f8ba9d7.png"},74386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_05-83dae20a3f0b67be7a07df19fd082dce.png"},21974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_06-db9760d7058c7975430577cd585e9792.png"},33134:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_07-621ec05b91788918579c04fe516cb56e.png"},63204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_08-dce79f00bb162f16bf3c1eed6ce5948d.png"},24753:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_09-b8457ddb706ace6e4aeb8c535a99c112.png"},38517:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_10-c84170b54f32e708bc1f8a636ee950f4.png"},59778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_11-613184b1e36518c91abea132eee3dab8.png"},14223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_12-8f6f070c3b18893d44e5ed00393538af.png"},54720:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_13-51661df1081e6665f148f86b2316507b.png"},5691:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_14-5aa0ee7124ccf9d23317b243ac0b6f41.png"},41506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_15-9125dc054d8f8468d15e5363d1c9989f.png"},67549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_16-fc311beb4b13de76d32879c9c1a8c466.png"},19015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_17-bd6945d802e6e9bebf327c60fb42c436.png"},3413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rocketbi_18-eed9641c35810e527dace1887fabe227.png"},64872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-connect-button-e2247559831d9d3549387ddfb0deee9b.png"},33273:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connection-details-https-6ceceb667ac0b41ab35a2ad390b7e2dc.png"}}]);