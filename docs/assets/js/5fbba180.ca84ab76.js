"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,k=d["".concat(r,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={sidebar_label:"Install",keywords:["clickhouse","install","getting started","quick start"],slug:"/en/install"},l="Installing ClickHouse",i={unversionedId:"en/getting-started/install",id:"en/getting-started/install",title:"Installing ClickHouse",description:"You have two options for getting up and running with ClickHouse:",source:"@site/docs/en/getting-started/install.md",sourceDirName:"en/getting-started",slug:"/en/install",permalink:"/docs/en/install",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/getting-started/install.md",tags:[],version:"current",frontMatter:{sidebar_label:"Install",keywords:["clickhouse","install","getting started","quick start"],slug:"/en/install"},sidebar:"english",previous:{title:"Integrations",permalink:"/docs/en/integrations/"},next:{title:"cloud-index",permalink:"/docs/en/cloud/overview"}},r={},c=[{value:"ClickHouse Cloud",id:"clickhouse-cloud",level:2},{value:"Self-Managed Requirements",id:"self-managed-requirements",level:2},{value:"CPU Architecture",id:"cpu-architecture",level:3},{value:"RAM",id:"ram",level:3},{value:"Swap File",id:"swap-file",level:3},{value:"Storage Subsystem",id:"storage-subsystem",level:3},{value:"Network",id:"network",level:3},{value:"Software",id:"software",level:3},{value:"Self-Managed Install",id:"self-managed-install",level:2},{value:"Available Installation Options",id:"available-installation-options",level:2},{value:"From DEB Packages",id:"install-from-deb-packages",level:3},{value:"Packages",id:"packages",level:4},{value:"From RPM Packages",id:"from-rpm-packages",level:3},{value:"From Tgz Archives",id:"from-tgz-archives",level:3},{value:"From Docker Image",id:"from-docker-image",level:3},{value:"Single Binary",id:"from-single-binary",level:3},{value:"From Precompiled Binaries for Non-Standard Environments",id:"from-binaries-non-linux",level:3},{value:"From Sources",id:"from-sources",level:3},{value:"Launch",id:"launch",level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-clickhouse"},"Installing ClickHouse"),(0,o.kt)("p",null,"You have two options for getting up and running with ClickHouse:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://clickhouse.com/cloud/"},"ClickHouse Cloud"),":")," the official ClickHouse as a service, - built by, maintained, and supported by the creators of ClickHouse"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Self-managed ClickHouse:")," ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture")),(0,o.kt)("h2",{id:"clickhouse-cloud"},"ClickHouse Cloud"),(0,o.kt)("p",null,"The quickest and easiest way to get up and running with ClickHouse is to create a new service in ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.cloud/"},"ClickHouse Cloud"),":"),(0,o.kt)("div",{class:"eighty-percent"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a ClickHouse Cloud service",src:a(65828).Z,width:"1024",height:"1008"}))),(0,o.kt)("p",null,"Once your Cloud service is provisioned, you will be able to ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/connect-a-client"},"connect to it")," and start ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/integrations/data-ingestion"},"inserting data"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/getting-started/quick-start"},"Quick Start")," walks through the steps to get a ClickHouse Cloud service up and running, connecting to it, and inserting data."))),(0,o.kt)("h2",{id:"self-managed-requirements"},"Self-Managed Requirements"),(0,o.kt)("h3",{id:"cpu-architecture"},"CPU Architecture"),(0,o.kt)("p",null,"ClickHouse can run on any Linux, FreeBSD, or Mac OS X with x86_64, AArch64, or PowerPC64LE CPU architecture."),(0,o.kt)("p",null,"Official pre-built binaries are typically compiled for x86_64 and leverage SSE 4.2 instruction set, so unless otherwise stated usage of CPU that supports it becomes an additional system requirement. Here\u2019s the command to check if current CPU has support for SSE 4.2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ grep -q sse4_2 /proc/cpuinfo && echo "SSE 4.2 supported" || echo "SSE 4.2 not supported"\n')),(0,o.kt)("p",null,"To run ClickHouse on processors that do not support SSE 4.2 or have AArch64 or PowerPC64LE architecture, you should ",(0,o.kt)("a",{parentName:"p",href:"#from-sources"},"build ClickHouse from sources")," with proper configuration adjustments."),(0,o.kt)("p",null,"ClickHouse implements parallel data processing and uses all the hardware resources available. When choosing a processor, take into account that ClickHouse works more efficiently at configurations with a large number of cores but a lower clock rate than at configurations with fewer cores and a higher clock rate. For example, 16 cores with 2600 MHz is preferable to 8 cores with 3600 MHz."),(0,o.kt)("p",null,"It is recommended to use ",(0,o.kt)("strong",{parentName:"p"},"Turbo Boost")," and ",(0,o.kt)("strong",{parentName:"p"},"hyper-threading")," technologies. It significantly improves performance with a typical workload."),(0,o.kt)("h3",{id:"ram"},"RAM"),(0,o.kt)("p",null,"We recommend using a minimum of 4GB of RAM to perform non-trivial queries. The ClickHouse server can run with a much smaller amount of RAM, but it requires memory for processing queries."),(0,o.kt)("p",null,"The required volume of RAM depends on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The complexity of queries."),(0,o.kt)("li",{parentName:"ul"},"The amount of data that is processed in queries.")),(0,o.kt)("p",null,"To calculate the required volume of RAM, you should estimate the size of temporary data for ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-clause"},"GROUP BY"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/distinct#select-distinct"},"DISTINCT"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join#select-join"},"JOIN")," and other operations you use."),(0,o.kt)("p",null,"ClickHouse can use external memory for temporary data. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-in-external-memory"},"GROUP BY in External Memory")," for details."),(0,o.kt)("h3",{id:"swap-file"},"Swap File"),(0,o.kt)("p",null,"Disable the swap file for production environments."),(0,o.kt)("h3",{id:"storage-subsystem"},"Storage Subsystem"),(0,o.kt)("p",null,"You need to have 2GB of free disk space to install ClickHouse."),(0,o.kt)("p",null,"The volume of storage required for your data should be calculated separately. Assessment should include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Estimation of the data volume."),(0,o.kt)("p",{parentName:"li"},"You can take a sample of the data and get the average size of a row from it. Then multiply the value by the number of rows you plan to store.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The data compression coefficient."),(0,o.kt)("p",{parentName:"li"},"To estimate the data compression coefficient, load a sample of your data into ClickHouse, and compare the actual size of the data with the size of the table stored. For example, clickstream data is usually compressed by 6-10 times."))),(0,o.kt)("p",null,"To calculate the final volume of data to be stored, apply the compression coefficient to the estimated data volume. If you plan to store data in several replicas, then multiply the estimated volume by the number of replicas."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"If possible, use networks of 10G or higher class."),(0,o.kt)("p",null,"The network bandwidth is critical for processing distributed queries with a large amount of intermediate data. Besides, network speed affects replication processes."),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("p",null,"ClickHouse is developed primarily for the Linux family of operating systems. The recommended Linux distribution is Ubuntu. The ",(0,o.kt)("inlineCode",{parentName:"p"},"tzdata")," package should be installed in the system."),(0,o.kt)("h2",{id:"self-managed-install"},"Self-Managed Install"),(0,o.kt)("h2",{id:"available-installation-options"},"Available Installation Options"),(0,o.kt)("h3",{id:"install-from-deb-packages"},"From DEB Packages"),(0,o.kt)("p",null,"It is recommended to use official pre-compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"deb")," packages for Debian or Ubuntu. Run these commands to install packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install -y apt-transport-https ca-certificates dirmngr\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754\n\necho "deb https://packages.clickhouse.com/deb stable main" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you\'ve set up a password.\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Deprecated Method for installing deb-packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get install apt-transport-https ca-certificates dirmngr\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv E0C56BD4\n\necho "deb https://repo.clickhouse.com/deb/stable/ main/" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Migration Method for installing the deb-packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-key del E0C56BD4\nsudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 8919F6BD2B48D754\necho "deb https://packages.clickhouse.com/deb stable main" | sudo tee \\\n    /etc/apt/sources.list.d/clickhouse.list\nsudo apt-get update\n\nsudo apt-get install -y clickhouse-server clickhouse-client\n\nsudo service clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n'))),(0,o.kt)("p",null,"You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"stable")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"lts")," to use different ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/faq/operations/production"},"release kinds")," based on your needs."),(0,o.kt)("p",null,"You can also download and install packages manually from ",(0,o.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/deb/pool/main/c/"},"here"),"."),(0,o.kt)("h4",{id:"packages"},"Packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-common-static")," \u2014 Installs ClickHouse compiled binary files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-server")," \u2014 Creates a symbolic link for ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-server")," and installs the default server configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u2014 Creates a symbolic link for ",(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," and other client-related tools. and installs client configuration files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clickhouse-common-static-dbg")," \u2014 Installs ClickHouse compiled binary files with debug info.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need to install specific version of ClickHouse you have to install all packages with the same version:\n",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt-get install clickhouse-server=21.8.5.7 clickhouse-client=21.8.5.7 clickhouse-common-static=21.8.5.7")))),(0,o.kt)("h3",{id:"from-rpm-packages"},"From RPM Packages"),(0,o.kt)("p",null,"It is recommended to use official pre-compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm")," packages for CentOS, RedHat, and all other rpm-based Linux distributions."),(0,o.kt)("p",null,"First, you need to add the official repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://packages.clickhouse.com/rpm/clickhouse.repo\nsudo yum install -y clickhouse-server clickhouse-client\n\nsudo /etc/init.d/clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n')),(0,o.kt)("details",{markdown:"1"},(0,o.kt)("summary",null,"Deprecated Method for installing rpm-packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo yum install yum-utils\nsudo rpm --import https://repo.clickhouse.com/CLICKHOUSE-KEY.GPG\nsudo yum-config-manager --add-repo https://repo.clickhouse.com/rpm/clickhouse.repo\nsudo yum install clickhouse-server clickhouse-client\n\nsudo /etc/init.d/clickhouse-server start\nclickhouse-client # or "clickhouse-client --password" if you set up a password.\n'))),(0,o.kt)("p",null,"You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"stable")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"lts")," to use different ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/faq/operations/production"},"release kinds")," based on your needs."),(0,o.kt)("p",null,"Then run these commands to install packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install clickhouse-server clickhouse-client\n")),(0,o.kt)("p",null,"You can also download and install packages manually from ",(0,o.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/rpm/stable"},"here"),"."),(0,o.kt)("h3",{id:"from-tgz-archives"},"From Tgz Archives"),(0,o.kt)("p",null,"It is recommended to use official pre-compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"tgz")," archives for all Linux distributions, where installation of ",(0,o.kt)("inlineCode",{parentName:"p"},"deb")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rpm")," packages is not possible."),(0,o.kt)("p",null,"The required version can be downloaded with ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"wget")," from repository ",(0,o.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/tgz/"},"https://packages.clickhouse.com/tgz/"),".\nAfter that downloaded archives should be unpacked and installed with installation scripts. Example for the latest stable version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'LATEST_VERSION=$(curl -s https://packages.clickhouse.com/tgz/stable/ | \\\n    grep -Eo \'[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\' | sort -V -r | head -n 1)\nexport LATEST_VERSION\n\ncase $(uname -m) in\n  x86_64) ARCH=amd64 ;;\n  aarch64) ARCH=arm64 ;;\n  *) echo "Unknown architecture $(uname -m)"; exit 1 ;;\nesac\n\nfor PKG in clickhouse-common-static clickhouse-common-static-dbg clickhouse-server clickhouse-client\ndo\n  curl -fO "https://packages.clickhouse.com/tgz/stable/$PKG-$LATEST_VERSION-${ARCH}.tgz" \\\n    || curl -fO "https://packages.clickhouse.com/tgz/stable/$PKG-$LATEST_VERSION.tgz"\ndone\n\ntar -xzvf "clickhouse-common-static-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-common-static-$LATEST_VERSION.tgz"\nsudo "clickhouse-common-static-$LATEST_VERSION/install/doinst.sh"\n\ntar -xzvf "clickhouse-common-static-dbg-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-common-static-dbg-$LATEST_VERSION.tgz"\nsudo "clickhouse-common-static-dbg-$LATEST_VERSION/install/doinst.sh"\n\ntar -xzvf "clickhouse-server-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-server-$LATEST_VERSION.tgz"\nsudo "clickhouse-server-$LATEST_VERSION/install/doinst.sh" configure\nsudo /etc/init.d/clickhouse-server start\n\ntar -xzvf "clickhouse-client-$LATEST_VERSION-${ARCH}.tgz" \\\n  || tar -xzvf "clickhouse-client-$LATEST_VERSION.tgz"\nsudo "clickhouse-client-$LATEST_VERSION/install/doinst.sh"\n')),(0,o.kt)("details",{markdown:"1"},(0,o.kt)("summary",null,"Deprecated Method for installing tgz archives"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export LATEST_VERSION=$(curl -s https://repo.clickhouse.com/tgz/stable/ | \\\n    grep -Eo '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' | sort -V -r | head -n 1)\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-common-static-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-common-static-dbg-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-server-$LATEST_VERSION.tgz\ncurl -O https://repo.clickhouse.com/tgz/stable/clickhouse-client-$LATEST_VERSION.tgz\n\ntar -xzvf clickhouse-common-static-$LATEST_VERSION.tgz\nsudo clickhouse-common-static-$LATEST_VERSION/install/doinst.sh\n\ntar -xzvf clickhouse-common-static-dbg-$LATEST_VERSION.tgz\nsudo clickhouse-common-static-dbg-$LATEST_VERSION/install/doinst.sh\n\ntar -xzvf clickhouse-server-$LATEST_VERSION.tgz\nsudo clickhouse-server-$LATEST_VERSION/install/doinst.sh\nsudo /etc/init.d/clickhouse-server start\n\ntar -xzvf clickhouse-client-$LATEST_VERSION.tgz\nsudo clickhouse-client-$LATEST_VERSION/install/doinst.sh\n"))),(0,o.kt)("p",null,"For production environments, it\u2019s recommended to use the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),"-version. You can find its number on GitHub page ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tags"},"https://github.com/ClickHouse/ClickHouse/tags")," with postfix ",(0,o.kt)("inlineCode",{parentName:"p"},"-stable"),"."),(0,o.kt)("h3",{id:"from-docker-image"},"From Docker Image"),(0,o.kt)("p",null,"To run ClickHouse inside Docker follow the guide on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/clickhouse/clickhouse-server/"},"Docker Hub"),". Those images use official ",(0,o.kt)("inlineCode",{parentName:"p"},"deb")," packages inside."),(0,o.kt)("h3",{id:"from-single-binary"},"Single Binary"),(0,o.kt)("p",null,"You can install ClickHouse on Linux using a single portable binary from the latest commit of the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch: ","[https://builds.clickhouse.com/master/amd64/clickhouse]","."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/amd64/clickhouse' && chmod a+x clickhouse\nsudo ./clickhouse install\n")),(0,o.kt)("h3",{id:"from-binaries-non-linux"},"From Precompiled Binaries for Non-Standard Environments"),(0,o.kt)("p",null,"For non-Linux operating systems and for AArch64 CPU architecture, ClickHouse builds are provided as a cross-compiled binary from the latest commit of the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch (with a few hours delay)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/macos/clickhouse"},"MacOS x86_64"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/macos/clickhouse' && chmod a+x ./clickhouse\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/macos-aarch64/clickhouse"},"MacOS Aarch64 (Apple Silicon)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/macos-aarch64/clickhouse' && chmod a+x ./clickhouse\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/freebsd/clickhouse"},"FreeBSD x86_64"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/freebsd/clickhouse' && chmod a+x ./clickhouse\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://builds.clickhouse.com/master/aarch64/clickhouse"},"Linux AArch64"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O 'https://builds.clickhouse.com/master/aarch64/clickhouse' && chmod a+x ./clickhouse\n")))),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo ./clickhouse install")," to install ClickHouse system-wide (also with needed configuration files, configuring users etc.). Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo clickhouse start")," commands to start the clickhouse-server and ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," to connect to it."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse client")," to connect to the server, or ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse local")," to process local data."),(0,o.kt)("h3",{id:"from-sources"},"From Sources"),(0,o.kt)("p",null,"To manually compile ClickHouse, follow the instructions for ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/development/build"},"Linux")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/development/build-osx"},"Mac OS X"),"."),(0,o.kt)("p",null,"You can compile packages and install them or use programs without installing packages. Also by building manually you can disable SSE 4.2 requirement or build for AArch64 CPUs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  Client: programs/clickhouse-client\n  Server: programs/clickhouse-server\n")),(0,o.kt)("p",null,"You\u2019ll need to create a data and metadata folders and ",(0,o.kt)("inlineCode",{parentName:"p"},"chown")," them for the desired user. Their paths can be changed in server config (src/programs/server/config.xml), by default they are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  /var/lib/clickhouse/data/default/\n  /var/lib/clickhouse/metadata/default/\n")),(0,o.kt)("p",null,"On Gentoo, you can just use ",(0,o.kt)("inlineCode",{parentName:"p"},"emerge clickhouse")," to install ClickHouse from sources."),(0,o.kt)("h2",{id:"launch"},"Launch"),(0,o.kt)("p",null,"To start the server as a daemon, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo clickhouse start\n")),(0,o.kt)("p",null,"There are also other ways to run ClickHouse:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server start\n")),(0,o.kt)("p",null,"If you do not have ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," command, run as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo /etc/init.d/clickhouse-server start\n")),(0,o.kt)("p",null,"If you have ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," command, run as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl start clickhouse-server.service\n")),(0,o.kt)("p",null,"See the logs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/")," directory."),(0,o.kt)("p",null,"If the server does not start, check the configurations in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),"."),(0,o.kt)("p",null,"You can also manually launch the server from the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-server --config-file=/etc/clickhouse-server/config.xml\n")),(0,o.kt)("p",null,"In this case, the log will be printed to the console, which is convenient during development.\nIf the configuration file is in the current directory, you do not need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config-file")," parameter. By default, it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"./config.xml"),"."),(0,o.kt)("p",null,"ClickHouse supports access restriction settings. They are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"users.xml")," file (next to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.xml"),").\nBy default, access is allowed from anywhere for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," user, without a password. See ",(0,o.kt)("inlineCode",{parentName:"p"},"user/default/networks"),".\nFor more information, see the section ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/operations/configuration-files"},"\u201cConfiguration Files\u201d"),"."),(0,o.kt)("p",null,"After launching server, you can use the command-line client to connect to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse-client\n")),(0,o.kt)("p",null,"By default, it connects to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9000")," on behalf of the user ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," without a password. It can also be used to connect to a remote server using ",(0,o.kt)("inlineCode",{parentName:"p"},"--host")," argument."),(0,o.kt)("p",null,"The terminal must use UTF-8 encoding.\nFor more information, see the section ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/interfaces/cli"},"\u201cCommand-line client\u201d"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./clickhouse-client\nClickHouse client version 0.0.18749.\nConnecting to localhost:9000.\nConnected to ClickHouse server version 0.0.18749.\n\n:) SELECT 1\n\nSELECT 1\n\n\u250c\u25001\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.003 sec.\n\n:)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations, the system works!")),(0,o.kt)("p",null,"To continue experimenting, you can download one of the test data sets or go through ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/tutorial"},"tutorial"),"."))}p.isMDXComponent=!0},65828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createservice1-56a8ed87acd09e5798e7d1da32379c0f.png"}}]);