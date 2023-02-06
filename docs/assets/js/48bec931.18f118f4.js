"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={slug:"/en/operations/opentelemetry",sidebar_position:62,sidebar_label:"Tracing ClickHouse with OpenTelemetry",title:"[experimental] Tracing ClickHouse with OpenTelemetry"},i=void 0,s={unversionedId:"en/operations/opentelemetry",id:"en/operations/opentelemetry",title:"[experimental] Tracing ClickHouse with OpenTelemetry",description:"OpenTelemetry is an open standard for collecting traces and metrics from the distributed application. ClickHouse has some support for OpenTelemetry.",source:"@site/docs/en/operations/opentelemetry.md",sourceDirName:"en/operations",slug:"/en/operations/opentelemetry",permalink:"/docs/en/operations/opentelemetry",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/opentelemetry.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{slug:"/en/operations/opentelemetry",sidebar_position:62,sidebar_label:"Tracing ClickHouse with OpenTelemetry",title:"[experimental] Tracing ClickHouse with OpenTelemetry"},sidebar:"english",previous:{title:"Usage Recommendations",permalink:"/docs/en/operations/tips"},next:{title:"Manage",permalink:"/docs/en/manage"}},l={},p=[{value:"Supplying Trace Context to ClickHouse",id:"supplying-trace-context-to-clickhouse",level:2},{value:"Propagating the Trace Context",id:"propagating-the-trace-context",level:2},{value:"Tracing the ClickHouse Itself",id:"tracing-the-clickhouse-itself",level:2},{value:"Integration with monitoring systems",id:"integration-with-monitoring-systems",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," is an open standard for collecting traces and metrics from the distributed application. ClickHouse has some support for OpenTelemetry."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This is an experimental feature that will change in backwards-incompatible ways in future releases.")),(0,a.kt)("h2",{id:"supplying-trace-context-to-clickhouse"},"Supplying Trace Context to ClickHouse"),(0,a.kt)("p",null,"ClickHouse accepts trace context HTTP headers, as described by the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/trace-context/"},"W3C recommendation"),". It also accepts trace context over a native protocol that is used for communication between ClickHouse servers or between the client and server. For manual testing, trace context headers conforming to the Trace Context recommendation can be supplied to ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"--opentelemetry-traceparent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--opentelemetry-tracestate")," flags."),(0,a.kt)("p",null,"If no parent trace context is supplied or the provided trace context does not comply with W3C standard above, ClickHouse can start a new trace, with probability controlled by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#opentelemetry-start-trace-probability"},"opentelemetry_start_trace_probability")," setting."),(0,a.kt)("h2",{id:"propagating-the-trace-context"},"Propagating the Trace Context"),(0,a.kt)("p",null,"The trace context is propagated to downstream services in the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Queries to remote ClickHouse servers, such as when using ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed")," table engine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/table-functions/url"},"url")," table function. Trace context information is sent in HTTP headers."))),(0,a.kt)("h2",{id:"tracing-the-clickhouse-itself"},"Tracing the ClickHouse Itself"),(0,a.kt)("p",null,"ClickHouse creates ",(0,a.kt)("inlineCode",{parentName:"p"},"trace spans")," for each query and some of the query execution stages, such as query planning or distributed queries."),(0,a.kt)("p",null,"To be useful, the tracing information has to be exported to a monitoring system that supports OpenTelemetry, such as ",(0,a.kt)("a",{parentName:"p",href:"https://jaegertracing.io/"},"Jaeger")," or ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),". ClickHouse avoids a dependency on a particular monitoring system, instead only providing the tracing data through a system table. OpenTelemetry trace span information ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md#span"},"required by the standard")," is stored in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/opentelemetry_span_log"},"system.opentelemetry_span_log")," table."),(0,a.kt)("p",null,"The table must be enabled in the server configuration, see the ",(0,a.kt)("inlineCode",{parentName:"p"},"opentelemetry_span_log")," element in the default config file ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml"),". It is enabled by default."),(0,a.kt)("p",null,"The tags or attributes are saved as two parallel arrays, containing the keys and values. Use ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/array-join"},"ARRAY JOIN")," to work with them."),(0,a.kt)("h2",{id:"integration-with-monitoring-systems"},"Integration with monitoring systems"),(0,a.kt)("p",null,"At the moment, there is no ready tool that can export the tracing data from ClickHouse to a monitoring system."),(0,a.kt)("p",null,"For testing, it is possible to setup the export using a materialized view with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/url"},"URL")," engine over the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/system-tables/opentelemetry_span_log"},"system.opentelemetry_span_log")," table, which would push the arriving log data to an HTTP endpoint of a trace collector. For example, to push the minimal span data to a Zipkin instance running at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9411"),", in Zipkin v2 JSON format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW default.zipkin_spans\nENGINE = URL('http://127.0.0.1:9411/api/v2/spans', 'JSONEachRow')\nSETTINGS output_format_json_named_tuples_as_objects = 1,\n    output_format_json_array_of_rows = 1 AS\nSELECT\n    lower(hex(trace_id)) AS traceId,\n    case when parent_span_id = 0 then '' else lower(hex(parent_span_id)) end AS parentId,\n    lower(hex(span_id)) AS id,\n    operation_name AS name,\n    start_time_us AS timestamp,\n    finish_time_us - start_time_us AS duration,\n    cast(tuple('clickhouse'), 'Tuple(serviceName text)') AS localEndpoint,\n    cast(tuple(\n        attribute.values[indexOf(attribute.names, 'db.statement')]),\n        'Tuple(\"db.statement\" text)') AS tags\nFROM system.opentelemetry_span_log\n")),(0,a.kt)("p",null,"In case of any errors, the part of the log data for which the error has occurred will be silently lost. Check the server log for error messages if the data does not arrive."))}m.isMDXComponent=!0}}]);