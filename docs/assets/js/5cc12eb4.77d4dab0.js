"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74089],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2759:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_position:66,sidebar_label:"Build on Linux for Mac OS X"},c="How to Build ClickHouse on Linux for Mac OS X",s={unversionedId:"en/development/build-cross-osx",id:"en/development/build-cross-osx",title:"How to Build ClickHouse on Linux for Mac OS X",description:"This is for the case when you have a Linux machine and want to use it to build clickhouse binary that will run on OS X.",source:"@site/docs/en/development/build-cross-osx.md",sourceDirName:"en/development",slug:"/en/development/build-cross-osx",permalink:"/en/development/build-cross-osx",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/development/build-cross-osx.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{sidebar_position:66,sidebar_label:"Build on Linux for Mac OS X"},sidebar:"english",previous:{title:"Build on Mac OS X",permalink:"/en/development/build-osx"},next:{title:"Build on Linux for AARCH64 (ARM64)",permalink:"/en/development/build-cross-arm"}},u={},p=[{value:"Install Clang-13",id:"install-clang-13",level:2},{value:"Install Cross-Compilation Toolset",id:"install-cross-compilation-toolset",level:2},{value:"Build ClickHouse",id:"build-clickhouse",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-build-clickhouse-on-linux-for-mac-os-x"},"How to Build ClickHouse on Linux for Mac OS X"),(0,i.kt)("p",null,"This is for the case when you have a Linux machine and want to use it to build ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary that will run on OS X.\nThis is intended for continuous integration checks that run on Linux servers. If you want to build ClickHouse directly on Mac OS X, then proceed with ",(0,i.kt)("a",{parentName:"p",href:"/en/development/build-osx"},"another instruction"),"."),(0,i.kt)("p",null,"The cross-build for Mac OS X is based on the ",(0,i.kt)("a",{parentName:"p",href:"/en/development/build"},"Build instructions"),", follow them first."),(0,i.kt)("h2",{id:"install-clang-13"},"Install Clang-13"),(0,i.kt)("p",null,"Follow the instructions from ",(0,i.kt)("a",{parentName:"p",href:"https://apt.llvm.org/"},"https://apt.llvm.org/")," for your Ubuntu or Debian setup.\nFor example the commands for Bionic are like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-13 main" >> /etc/apt/sources.list\nsudo apt-get install clang-13\n')),(0,i.kt)("h2",{id:"install-cross-compilation-toolset"},"Install Cross-Compilation Toolset"),(0,i.kt)("p",null,"Let\u2019s remember the path where we install ",(0,i.kt)("inlineCode",{parentName:"p"},"cctools")," as ${CCTOOLS}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ${CCTOOLS}\ncd ${CCTOOLS}\n\ngit clone https://github.com/tpoechtrager/apple-libtapi.git\ncd apple-libtapi\nINSTALLPREFIX=${CCTOOLS} ./build.sh\n./install.sh\ncd ..\n\ngit clone https://github.com/tpoechtrager/cctools-port.git\ncd cctools-port/cctools\n./configure --prefix=$(readlink -f ${CCTOOLS}) --with-libtapi=$(readlink -f ${CCTOOLS}) --target=x86_64-apple-darwin\nmake install\n")),(0,i.kt)("p",null,"Also, we need to download macOS X SDK into the working tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nwget 'https://github.com/phracker/MacOSX-SDKs/releases/download/10.15/MacOSX10.15.sdk.tar.xz'\nmkdir -p build-darwin/cmake/toolchain/darwin-x86_64\ntar xJf MacOSX10.15.sdk.tar.xz -C build-darwin/cmake/toolchain/darwin-x86_64 --strip-components=1\n")),(0,i.kt)("h2",{id:"build-clickhouse"},"Build ClickHouse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-darwin\ncd build-darwin\nCC=clang-13 CXX=clang++-13 cmake -DCMAKE_AR:FILEPATH=${CCTOOLS}/bin/aarch64-apple-darwin-ar -DCMAKE_INSTALL_NAME_TOOL=${CCTOOLS}/bin/aarch64-apple-darwin-install_name_tool -DCMAKE_RANLIB:FILEPATH=${CCTOOLS}/bin/aarch64-apple-darwin-ranlib -DLINKER_NAME=${CCTOOLS}/bin/aarch64-apple-darwin-ld -DCMAKE_TOOLCHAIN_FILE=cmake/darwin/toolchain-x86_64.cmake ..\nninja\n")),(0,i.kt)("p",null,"The resulting binary will have a Mach-O executable format and can\u2019t be run on Linux."))}m.isMDXComponent=!0}}]);