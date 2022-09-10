"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78060],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68509:function(e,a,t){t.r(a),t.d(a,{assets:function(){return f},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={toc:[]};function l(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To connect to ClickHouse with native TCP you need this information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The HOST and PORT: typically the port is 9440 when using TLS, or 9000 when not using TLS, but these are configurable by your ClickHouse administrator. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The DATABASE NAME: out of the box there is a database named ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", use the name the database that you want to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The USERNAME and PASSWORD: out of the box the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". Use the username appropriate for your use case.  Your ClickHouse administrator will provide the password to use."))))}l.isMDXComponent=!0;var c=["components"],u={sidebar_label:"Grafana",sidebar_position:75,slug:"/en/connect-a-ui/grafana-and-clickhouse",keywords:["clickhouse","grafana","connect","integrate"],description:"With Grafana you can create, explore and share all of your data through dashboards."},p="Connecting Grafana to ClickHouse",d={unversionedId:"en/integrations/data-visualization/grafana-and-clickhouse",id:"en/integrations/data-visualization/grafana-and-clickhouse",title:"Connecting Grafana to ClickHouse",description:"With Grafana you can create, explore and share all of your data through dashboards.",source:"@site/docs/en/integrations/data-visualization/grafana-and-clickhouse.md",sourceDirName:"en/integrations/data-visualization",slug:"/en/connect-a-ui/grafana-and-clickhouse",permalink:"/docs/en/connect-a-ui/grafana-and-clickhouse",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/data-visualization/grafana-and-clickhouse.md",tags:[],version:"current",sidebarPosition:75,frontMatter:{sidebar_label:"Grafana",sidebar_position:75,slug:"/en/connect-a-ui/grafana-and-clickhouse",keywords:["clickhouse","grafana","connect","integrate"],description:"With Grafana you can create, explore and share all of your data through dashboards."},sidebar:"english",previous:{title:"Deepnote",permalink:"/docs/en/integrations/deepnote"},next:{title:"Metabase",permalink:"/docs/en/connect-a-ui/metabase-and-clickhouse"}},f={},g=[{value:"1. Gather your connection details",id:"1-gather-your-connection-details",level:2},{value:"2.  Install the Grafana Plugin for ClickHouse",id:"2--install-the-grafana-plugin-for-clickhouse",level:2},{value:"3. Define a ClickHouse data source",id:"3-define-a-clickhouse-data-source",level:2},{value:"4. Build a dashboard",id:"4-build-a-dashboard",level:2}],k={toc:g};function h(e){var a=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},k,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-grafana-to-clickhouse"},"Connecting Grafana to ClickHouse"),(0,o.kt)("p",null,"With Grafana you can create, explore and share all of your data through dashboards. Grafana requires a plugin to connect to ClickHouse, which is easily installed within their UI."),(0,o.kt)("h2",{id:"1-gather-your-connection-details"},"1. Gather your connection details"),(0,o.kt)(l,{mdxType:"ConnectionDetails"}),(0,o.kt)("h2",{id:"2--install-the-grafana-plugin-for-clickhouse"},"2.  Install the Grafana Plugin for ClickHouse"),(0,o.kt)("p",null,"Before Grafana can talk to ClickHouse, you need to install the appropriate Grafana plugin. Assuming you are logged in to Grafana, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Configuration")," page, select the ",(0,o.kt)("strong",{parentName:"p"},"Plugins")," tab.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search for ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse")," and click on the ",(0,o.kt)("strong",{parentName:"p"},"Signed")," plugin by Grafana Labs:"),(0,o.kt)("img",{src:t(88021).Z,class:"image",alt:"Select the ClickHouse plugin"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the next screen, click the ",(0,o.kt)("strong",{parentName:"p"},"Install")," button:"),(0,o.kt)("img",{src:t(21367).Z,class:"image",alt:"Install the ClickHouse plugin"}))),(0,o.kt)("h2",{id:"3-define-a-clickhouse-data-source"},"3. Define a ClickHouse data source"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the installation is complete, click the ",(0,o.kt)("strong",{parentName:"p"},"Create a ClickHouse data source")," button. (You can also add a data source from the ",(0,o.kt)("strong",{parentName:"p"},"Data sources")," tab on the ",(0,o.kt)("strong",{parentName:"p"},"Configuration")," page.)"),(0,o.kt)("img",{src:t(22985).Z,class:"image",alt:"Create a ClickHouse data source"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Either scroll down and find the ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse")," data source type, or you can search for it in the search bar of the ",(0,o.kt)("strong",{parentName:"p"},"Add data source")," page. Either way, select the ",(0,o.kt)("strong",{parentName:"p"},"ClickHouse")," data source type and the following dialog appears:"),(0,o.kt)("img",{src:t(46850).Z,class:"image",alt:"Add data source"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter your server settings and credentials. The key settings are:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," a Grafana setting - give your data source any name you like"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server address:")," the hostname of your ClickHouse service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server port:")," 9440 for secure, 9000 for unsecure (unless you modified the ClickHouse ports)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username")," and ",(0,o.kt)("strong",{parentName:"li"},"Password"),": enter your ClickHouse user credentials. If you have not configured users, then try ",(0,o.kt)("strong",{parentName:"li"},"default")," for the username."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default database:")," a Grafana setting - you can specify a database that Grafana defaults to when using this data source (this property can be left blank)")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Save & test")," button to verify that Grafana can connect to your ClickHouse service. If successful, you will see a ",(0,o.kt)("strong",{parentName:"p"},"Data source is working")," message:"),(0,o.kt)("img",{src:t(67803).Z,class:"image",alt:"Select Save & test"}))),(0,o.kt)("h2",{id:"4-build-a-dashboard"},"4. Build a dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the left menu, click on the ",(0,o.kt)("strong",{parentName:"p"},"Dashboards")," icon and select ",(0,o.kt)("strong",{parentName:"p"},"Browse"),". Then select the ",(0,o.kt)("strong",{parentName:"p"},"New Dashboard")," button:"),(0,o.kt)("img",{src:t(99033).Z,class:"image",alt:"New Dashboard"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Add a new panel")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From here, you can build a visualization based on a query. From the ",(0,o.kt)("strong",{parentName:"p"},"Data source")," dropdown, select your ClickHouse data source that you defined earlier. Then you can either use the ",(0,o.kt)("strong",{parentName:"p"},"Query Builder")," to build a query visually, or switch to the ",(0,o.kt)("strong",{parentName:"p"},"SQL Editor")," and enter a SQL query (as shown here):"),(0,o.kt)("img",{src:t(47969).Z,class:"image",alt:"Run a SQL Query"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"That's it! You are now ready to ",(0,o.kt)("a",{href:"https://grafana.com/docs/grafana/latest/visualizations/",target:"_blank"},"build visualizations")," and ",(0,o.kt)("a",{href:"https://grafana.com/docs/grafana/latest/dashboards/",target:"_blank"},"dashboards")," in Grafana."))))}h.isMDXComponent=!0},88021:function(e,a,t){a.Z=t.p+"assets/images/grafana_01-521485244a53951cfd0e7480cd62ec26.png"},21367:function(e,a,t){a.Z=t.p+"assets/images/grafana_02-36290d745706634265a902c04316dd9a.png"},22985:function(e,a,t){a.Z=t.p+"assets/images/grafana_03-fcf6b61757cf91d8c080d04add3bb235.png"},46850:function(e,a,t){a.Z=t.p+"assets/images/grafana_04-8084541dcc06398a53298ad31f104b4a.png"},67803:function(e,a,t){a.Z=t.p+"assets/images/grafana_05-e1d5bffa00f4461e8f618efc658a95fe.png"},99033:function(e,a,t){a.Z=t.p+"assets/images/grafana_06-e66931d1a62cf197bb2bf00f2ead93d5.png"},47969:function(e,a,t){a.Z=t.p+"assets/images/grafana_07-492feac22e50d6ae7172f0e69355dab3.png"}}]);