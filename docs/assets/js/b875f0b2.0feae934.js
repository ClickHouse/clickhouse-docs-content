"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11540],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=i(r),m=n,k=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return r?a.createElement(k,c(c({ref:t},u),{},{components:r})):a.createElement(k,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38645:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),c=["components"],s={sidebar_position:54,sidebar_label:"\u6d4b\u8bd5\u786c\u4ef6"},l="\u5982\u4f55\u4f7f\u7528 ClickHouse \u6d4b\u8bd5\u60a8\u7684\u786c\u4ef6",i={unversionedId:"zh/operations/performance-test",id:"zh/operations/performance-test",title:"\u5982\u4f55\u4f7f\u7528 ClickHouse \u6d4b\u8bd5\u60a8\u7684\u786c\u4ef6",description:"how-to-test-your-hardware-with-clickhouse}",source:"@site/docs/zh/operations/performance-test.md",sourceDirName:"zh/operations",slug:"/zh/operations/performance-test",permalink:"/zh/operations/performance-test",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/operations/performance-test.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"\u6d4b\u8bd5\u786c\u4ef6"},sidebar:"chinese",previous:{title:"system.zookeeper_log",permalink:"/zh/operations/system-tables/zookeeper_log"},next:{title:"OpenTelemetry Support",permalink:"/zh/operations/opentelemetry"}},u={},p=[{value:"\u81ea\u52a8\u8fd0\u884c",id:"\u81ea\u52a8\u8fd0\u884c",level:2},{value:"\u4eba\u5de5\u8fd0\u884c",id:"\u4eba\u5de5\u8fd0\u884c",level:2}],h={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-test-your-hardware-with-clickhouse"},"\u5982\u4f55\u4f7f\u7528 ClickHouse \u6d4b\u8bd5\u60a8\u7684\u786c\u4ef6"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u57fa\u672c\u7684 ClickHouse \u6027\u80fd\u6d4b\u8bd5\uff0c\u800c\u65e0\u9700\u5b89\u88c5 ClickHouse \u8f6f\u4ef6\u5305\u3002"),(0,o.kt)("h2",{id:"\u81ea\u52a8\u8fd0\u884c"},"\u81ea\u52a8\u8fd0\u884c"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u811a\u672c\u6765\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u811a\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/hardware.sh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u811a\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod a+x ./hardware.sh\n./hardware.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u590d\u5236\u8f93\u51fa\u7684\u4fe1\u606f\u5e76\u5c06\u5b83\u53d1\u9001\u7ed9 ",(0,o.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com")," ")),(0,o.kt)("p",null,"\u6240\u6709\u7684\u7ed3\u679c\u90fd\u5728\u8fd9\u91cc\u516c\u5e03\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")),(0,o.kt)("h2",{id:"\u4eba\u5de5\u8fd0\u884c"},"\u4eba\u5de5\u8fd0\u884c"),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5b9e\u65bd\u57fa\u51c6\u6d4b\u8bd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# For amd64:\nwget https://builds.clickhouse.com/master/amd64/clickhouse\n# For aarch64:\nwget https://builds.clickhouse.com/master/aarch64/clickhouse\n# For powerpc64le:\nwget https://builds.clickhouse.com/master/powerpc64le/clickhouse\n# For freebsd:\nwget https://builds.clickhouse.com/master/freebsd/clickhouse\n# For freebsd-aarch64:\nwget https://builds.clickhouse.com/master/freebsd-aarch64/clickhouse\n# For freebsd-powerpc64le:\nwget https://builds.clickhouse.com/master/freebsd-powerpc64le/clickhouse\n# For macos:\nwget https://builds.clickhouse.com/master/macos/clickhouse\n# For macos-aarch64:\nwget https://builds.clickhouse.com/master/macos-aarch64/clickhouse\n# Then do:\nchmod a+x clickhouse\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u57fa\u51c6\u6587\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/clickhouse/benchmark-new.sh\nchmod a+x benchmark-new.sh\nwget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/clickhouse/queries.sql\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6839\u636e ",(0,o.kt)("a",{parentName:"li",href:"/zh/getting-started/example-datasets/metrica"},"Yandex.Metrica \u6570\u636e\u96c6")," \u4e2d\u7684\u8bf4\u660e\u4e0b\u8f7d\u6d4b\u8bd5\u6570\u636e\uff08\u201c hits \u201d \u6570\u636e\u8868\u5305\u542b 1 \u4ebf\u884c\u8bb0\u5f55\uff09\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://datasets.clickhouse.com/hits/partitions/hits_100m_obfuscated_v1.tar.xz\ntar xvf hits_100m_obfuscated_v1.tar.xz -C .\nmv hits_100m_obfuscated_v1/* .\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u670d\u52a1\u5668\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse server\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u636e\uff1a\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u4e2d\u901a\u8fc7 ssh \u767b\u9646\u670d\u52a1\u5668")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./clickhouse client --query "SELECT count() FROM hits_100m_obfuscated"\n100000000\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./benchmark-new.sh hits_100m_obfuscated\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6709\u5173\u786c\u4ef6\u914d\u7f6e\u7684\u578b\u53f7\u548c\u4fe1\u606f\u53d1\u9001\u5230 ",(0,o.kt)("a",{parentName:"li",href:"mailto:clickhouse-feedback@yandex-team.com"},"clickhouse-feedback@yandex-team.com"))),(0,o.kt)("p",null,"\u6240\u6709\u7ed3\u679c\u90fd\u5728\u8fd9\u91cc\u516c\u5e03\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")))}m.isMDXComponent=!0}}]);