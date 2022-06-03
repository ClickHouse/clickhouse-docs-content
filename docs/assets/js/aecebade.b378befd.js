"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[51947],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},s="Optional secured communication between ClickHouse and Zookeeper",c={unversionedId:"en/operations/ssl-zookeeper",id:"en/operations/ssl-zookeeper",title:"Optional secured communication between ClickHouse and Zookeeper",description:"You should specify ssl.keyStore.location, ssl.keyStore.password and ssl.trustStore.location, ssl.trustStore.password for communication with ClickHouse client over SSL. These options are available from Zookeeper version 3.5.2.",source:"@site/docs/en/operations/ssl-zookeeper.md",sourceDirName:"en/operations",slug:"/en/operations/ssl-zookeeper",permalink:"/docs/en/operations/ssl-zookeeper",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/ssl-zookeeper.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"Secured Communication with Zookeeper"},sidebar:"english",previous:{title:"Monitoring",permalink:"/docs/en/operations/monitoring"},next:{title:"Troubleshooting",permalink:"/docs/en/operations/troubleshooting"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optional-secured-communication-between-clickhouse-and-zookeeper"},"Optional secured communication between ClickHouse and Zookeeper"),(0,i.kt)("p",null,"You should specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.keyStore.password")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.location"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl.trustStore.password")," for communication with ClickHouse client over SSL. These options are available from Zookeeper version 3.5.2."),(0,i.kt)("p",null,"You can add ",(0,i.kt)("inlineCode",{parentName:"p"},"zookeeper.crt")," to trusted certificates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp zookeeper.crt /usr/local/share/ca-certificates/zookeeper.crt\nsudo update-ca-certificates\n")),(0,i.kt)("p",null,"Client section in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<client>\n    <certificateFile>/etc/clickhouse-server/client.crt</certificateFile>\n    <privateKeyFile>/etc/clickhouse-server/client.key</privateKeyFile>\n    <loadDefaultCAFile>true</loadDefaultCAFile>\n    <cacheSessions>true</cacheSessions>\n    <disableProtocols>sslv2,sslv3</disableProtocols>\n    <preferServerCiphers>true</preferServerCiphers>\n    <invalidCertificateHandler>\n        <name>RejectCertificateHandler</name>\n    </invalidCertificateHandler>\n</client>\n")),(0,i.kt)("p",null,"Add Zookeeper to ClickHouse config with some cluster and macros:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <zookeeper>\n        <node>\n            <host>localhost</host>\n            <port>2281</port>\n            <secure>1</secure>\n        </node>\n    </zookeeper>\n</clickhouse>\n")),(0,i.kt)("p",null,"Start ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),". In logs you should see:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"<Trace> ZooKeeper: initialized, hosts: secure://localhost:2281\n")),(0,i.kt)("p",null,"Prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"secure://")," indicates that connection is secured by SSL."),(0,i.kt)("p",null,"To ensure traffic is encrypted run ",(0,i.kt)("inlineCode",{parentName:"p"},"tcpdump")," on secured port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tcpdump -i any dst port 2281 -nnXS\n")),(0,i.kt)("p",null,"And query in ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper WHERE path = '/';\n")),(0,i.kt)("p",null,"On unencrypted connection you will see in ",(0,i.kt)("inlineCode",{parentName:"p"},"tcpdump")," output something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"..../zookeeper/quota.\n")),(0,i.kt)("p",null,"On encrypted connection you should not see this."))}m.isMDXComponent=!0}}]);