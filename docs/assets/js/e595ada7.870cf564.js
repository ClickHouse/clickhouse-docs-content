"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[19920],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),u=m(n),N=l,g=u["".concat(d,".").concat(N)]||u[N]||k[N]||r;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},65378:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={slug:"/en/native-protocol/client",sidebar_position:2},i="Client packets",p={unversionedId:"en/native-protocol/client",id:"en/native-protocol/client",title:"Client packets",description:"| value | name              | description            |",source:"@site/docs/en/native-protocol/client.md",sourceDirName:"en/native-protocol",slug:"/en/native-protocol/client",permalink:"/docs/en/native-protocol/client",draft:!1,editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/native-protocol/client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/en/native-protocol/client",sidebar_position:2},sidebar:"english",previous:{title:"Basics",permalink:"/docs/en/native-protocol/basics"},next:{title:"Server packets",permalink:"/docs/en/native-protocol/server"}},d={},m=[{value:"Hello",id:"hello",level:2},{value:"Protocol version",id:"protocol-version",level:3},{value:"Defaults",id:"defaults",level:3},{value:"Query",id:"query",level:2},{value:"Client info",id:"client-info",level:3},{value:"Settings",id:"settings",level:3},{value:"Stage",id:"stage",level:3},{value:"Data",id:"data",level:2},{value:"Column",id:"column",level:3},{value:"Cancel",id:"cancel",level:2},{value:"Ping",id:"ping",level:2}],o={toc:m},u="wrapper";function k(t){let{components:e,...n}=t;return(0,l.kt)(u,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client-packets"},"Client packets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#hello"},"Hello")),(0,l.kt)("td",{parentName:"tr",align:null},"Client handshake start")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#query"},"Query")),(0,l.kt)("td",{parentName:"tr",align:null},"Query request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#data"},"Data")),(0,l.kt)("td",{parentName:"tr",align:null},"Block with data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cancel"},"Cancel")),(0,l.kt)("td",{parentName:"tr",align:null},"Cancel query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ping"},"Ping")),(0,l.kt)("td",{parentName:"tr",align:null},"Ping request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"TableStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Table status request")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Data")," can be compressed."),(0,l.kt)("h2",{id:"hello"},"Hello"),(0,l.kt)("p",null,"For example, we are ",(0,l.kt)("inlineCode",{parentName:"p"},"Go Client")," v1.10 that supports ",(0,l.kt)("inlineCode",{parentName:"p"},"54451")," protocol version and\nwant to connect to ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," database with ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," user and ",(0,l.kt)("inlineCode",{parentName:"p"},"secret")," password."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Go Client"')),(0,l.kt)("td",{parentName:"tr",align:null},"Client implementation name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_major"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Client major version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10")),(0,l.kt)("td",{parentName:"tr",align:null},"Client minor version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_version"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"54451")),(0,l.kt)("td",{parentName:"tr",align:null},"TCP Protocol version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')),(0,l.kt)("td",{parentName:"tr",align:null},"Database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"default"')),(0,l.kt)("td",{parentName:"tr",align:null},"Username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"secret"')),(0,l.kt)("td",{parentName:"tr",align:null},"Password")))),(0,l.kt)("h3",{id:"protocol-version"},"Protocol version"),(0,l.kt)("p",null,"Protocol version is TCP protocol version of client."),(0,l.kt)("p",null,"Usually it is equal to the latest compatible server revision, but\nshould not be confused with it."),(0,l.kt)("h3",{id:"defaults"},"Defaults"),(0,l.kt)("p",null,"All values should be ",(0,l.kt)("strong",{parentName:"p"},"explicitly set"),", there are no defaults on server side.\nOn client side, use ",(0,l.kt)("inlineCode",{parentName:"p"},'"default"')," database, ",(0,l.kt)("inlineCode",{parentName:"p"},'"default"')," username and ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," (blank string)\npassword as defaults."),(0,l.kt)("h2",{id:"query"},"Query"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1ff-a123")),(0,l.kt)("td",{parentName:"tr",align:null},"Query ID, can be UUIDv4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_info"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#client-info"},"ClientInfo")),(0,l.kt)("td",{parentName:"tr",align:null},"See type"),(0,l.kt)("td",{parentName:"tr",align:null},"Data about client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"settings"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#settings"},"Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"See type"),(0,l.kt)("td",{parentName:"tr",align:null},"List of settings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"secret")),(0,l.kt)("td",{parentName:"tr",align:null},"Inter-server secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#stage"},"stage")),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Execute until query stage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compression"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled=0, enabled=1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SELECT 1")),(0,l.kt)("td",{parentName:"tr",align:null},"Query text")))),(0,l.kt)("h3",{id:"client-info"},"Client info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query_kind"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"None=0, Initial=1, Secondary=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_query_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial query id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_address"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_time"),(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP=1, HTTP=2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"os_user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"OS User")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Hostname")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_major"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client major version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_minor"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client minor version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol_version"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client protocol version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quota_key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Quota key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distributed_depth"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Distributed depth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version_patch"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Client patch version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"otel"),(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Trace fields are present")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_id"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedString(16)"),(0,l.kt)("td",{parentName:"tr",align:null},"Trace ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"span_id"),(0,l.kt)("td",{parentName:"tr",align:null},"FixedString(8)"),(0,l.kt)("td",{parentName:"tr",align:null},"Span ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_state"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Tracing state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trace_flags"),(0,l.kt)("td",{parentName:"tr",align:null},"Byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Tracing flags")))),(0,l.kt)("h3",{id:"settings"},"Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"send_logs_level")),(0,l.kt)("td",{parentName:"tr",align:null},"Key of setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trace")),(0,l.kt)("td",{parentName:"tr",align:null},"Value of setting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"important"),(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Can be ignored or not")))),(0,l.kt)("p",null,"Encoded as list, blank key and value denotes end of list."),(0,l.kt)("h3",{id:"stage"},"Stage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FetchColumns"),(0,l.kt)("td",{parentName:"tr",align:null},"Only fetch column types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"WithMergeableState"),(0,l.kt)("td",{parentName:"tr",align:null},"Until mergeable state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete"),(0,l.kt)("td",{parentName:"tr",align:null},"Until full completeness (should be default)")))),(0,l.kt)("h2",{id:"data"},"Data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},"BlockInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Encoded block info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Columns count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"UVarInt"),(0,l.kt)("td",{parentName:"tr",align:null},"Rows count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"columns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#column"},"[]Column")),(0,l.kt)("td",{parentName:"tr",align:null},"Columns with data")))),(0,l.kt)("h3",{id:"column"},"Column"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"field"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"foo")),(0,l.kt)("td",{parentName:"tr",align:null},"Column name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DateTime64(9)")),(0,l.kt)("td",{parentName:"tr",align:null},"Column type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"~"),(0,l.kt)("td",{parentName:"tr",align:null},"Column data")))),(0,l.kt)("h2",{id:"cancel"},"Cancel"),(0,l.kt)("p",null,"No packet body. Server should cancel query."),(0,l.kt)("h2",{id:"ping"},"Ping"),(0,l.kt)("p",null,"No packet body. Server should ",(0,l.kt)("a",{parentName:"p",href:"./server#pong"},"respond with pong"),"."))}k.isMDXComponent=!0}}]);