"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42018],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=i(r),m=a,k=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79271:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],c={sidebar_position:54,sidebar_label:"Testing Hardware"},l="How to Test Your Hardware with ClickHouse",i={unversionedId:"en/operations/performance-test",id:"en/operations/performance-test",title:"How to Test Your Hardware with ClickHouse",description:"You can run basic ClickHouse performance test on any server without installation of ClickHouse packages.",source:"@site/docs/en/operations/performance-test.md",sourceDirName:"en/operations",slug:"/en/operations/performance-test",permalink:"/docs/en/operations/performance-test",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/performance-test.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"Testing Hardware"},sidebar:"english",previous:{title:"zookeeper_log",permalink:"/docs/en/operations/system-tables/zookeeper_log"},next:{title:"Server Configuration Parameters",permalink:"/docs/en/operations/server-configuration-parameters/"}},u={},p=[{value:"Automated Run",id:"automated-run",level:2},{value:"Manual Run",id:"manual-run",level:2}],h={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-test-your-hardware-with-clickhouse"},"How to Test Your Hardware with ClickHouse"),(0,o.kt)("p",null,"You can run basic ClickHouse performance test on any server without installation of ClickHouse packages."),(0,o.kt)("h2",{id:"automated-run"},"Automated Run"),(0,o.kt)("p",null,"You can run benchmark with a single script."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/hardware.sh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run the script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"chmod a+x ./hardware.sh\n./hardware.sh\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy the output and send it to ",(0,o.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com"))),(0,o.kt)("p",null,"All the results are published here: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")),(0,o.kt)("h2",{id:"manual-run"},"Manual Run"),(0,o.kt)("p",null,"Alternatively you can perform benchmark in the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ssh to the server and download the binary with wget:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# For amd64:\nwget https://builds.clickhouse.com/master/amd64/clickhouse\n# For aarch64:\nwget https://builds.clickhouse.com/master/aarch64/clickhouse\n# For powerpc64le:\nwget https://builds.clickhouse.com/master/powerpc64le/clickhouse\n# For freebsd:\nwget https://builds.clickhouse.com/master/freebsd/clickhouse\n# For freebsd-aarch64:\nwget https://builds.clickhouse.com/master/freebsd-aarch64/clickhouse\n# For freebsd-powerpc64le:\nwget https://builds.clickhouse.com/master/freebsd-powerpc64le/clickhouse\n# For macos:\nwget https://builds.clickhouse.com/master/macos/clickhouse\n# For macos-aarch64:\nwget https://builds.clickhouse.com/master/macos-aarch64/clickhouse\n# Then do:\nchmod a+x clickhouse\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download benchmark files:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/clickhouse/benchmark-new.sh\nchmod a+x benchmark-new.sh\nwget https://raw.githubusercontent.com/ClickHouse/ClickHouse/master/benchmark/clickhouse/queries.sql\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/getting-started/example-datasets/metrica"},"web analytics dataset")," (\u201chits\u201d table containing 100 million rows).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://datasets.clickhouse.com/hits/partitions/hits_100m_obfuscated_v1.tar.xz\ntar xvf hits_100m_obfuscated_v1.tar.xz -C .\nmv hits_100m_obfuscated_v1/* .\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run the server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./clickhouse server\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Check the data: ssh to the server in another terminal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./clickhouse client --query "SELECT count() FROM hits_100m_obfuscated"\n100000000\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Run the benchmark:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./benchmark-new.sh hits_100m_obfuscated\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Send the numbers and the info about your hardware configuration to ",(0,o.kt)("a",{parentName:"li",href:"mailto:feedback@clickhouse.com"},"feedback@clickhouse.com"))),(0,o.kt)("p",null,"All the results are published here: ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/hardware/"},"https://clickhouse.com/benchmark/hardware/")))}m.isMDXComponent=!0}}]);