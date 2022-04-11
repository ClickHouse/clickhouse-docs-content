"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90345],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(h,c(c({ref:n},s),{},{components:t})):r.createElement(h,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57303:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={},l="\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse",u={unversionedId:"zh/development/build-cross-osx",id:"zh/development/build-cross-osx",title:"\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse",description:"ru-he-zai-linuxzhong-bian-yi-mac-os-x-clickhouse}",source:"@site/docs/zh/development/build-cross-osx.md",sourceDirName:"zh/development",slug:"/zh/development/build-cross-osx",permalink:"/zh/development/build-cross-osx",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/development/build-cross-osx.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"ClickHouse \u67b6\u6784\u6982\u8ff0",permalink:"/zh/development/architecture"},next:{title:"\u5728 Mac OS X \u4e2d\u7f16\u8bd1 ClickHouse",permalink:"/zh/development/build-osx"}},s={},p=[],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ru-he-zai-linuxzhong-bian-yi-mac-os-x-clickhouse"},"\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse"),(0,i.kt)("p",null,"Linux\u673a\u5668\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u8fd0\u884c\u5728OS X\u7cfb\u7edf\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\u4e8c\u8fdb\u5236\u5305\uff0c\u8fd9\u53ef\u4ee5\u7528\u4e8e\u5728Linux\u4e0a\u8dd1\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u3002\u5982\u679c\u8981\u5728Mac OS X\u4e0a\u76f4\u63a5\u6784\u5efaClickHouse\uff0c\u8bf7\u53c2\u8003\u53e6\u5916\u4e00\u7bc7\u6307\u5357\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/development/build_osx/"},"https://clickhouse.com/docs/zh/development/build_osx/")),(0,i.kt)("p",null,"Mac OS X\u7684\u4ea4\u53c9\u7f16\u8bd1\u57fa\u4e8e\u4ee5\u4e0b\u6784\u5efa\u8bf4\u660e\uff0c\u8bf7\u9996\u5148\u9075\u5faa\u5b83\u4eec\u3002"),(0,i.kt)("h1",{id:"install-clang-8"},"\u5b89\u88c5Clang-8"),(0,i.kt)("p",null,"\u6309\u7167",(0,i.kt)("a",{parentName:"p",href:"https://apt.llvm.org/%E4%B8%AD%E7%9A%84%E8%AF%B4%E6%98%8E%E8%BF%9B%E8%A1%8CUbuntu%E6%88%96Debian%E5%AE%89%E8%A3%85%E3%80%82"},"https://apt.llvm.org/\u4e2d\u7684\u8bf4\u660e\u8fdb\u884cUbuntu\u6216Debian\u5b89\u88c5\u3002"),"\n\u4f8b\u5982\uff0c\u5b89\u88c5Bionic\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-8 main" >> /etc/apt/sources.list\nsudo apt-get install clang-8\n')),(0,i.kt)("h1",{id:"an-zhuang-jiao-cha-bian-yi-gong-ju-ji"},"\u5b89\u88c5\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u96c6"),(0,i.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"cctools")," \u5728 ${CCTOOLS} \u8def\u5f84\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ${CCTOOLS}\n\ngit clone https://github.com/tpoechtrager/apple-libtapi.git\ncd apple-libtapi\nINSTALLPREFIX=${CCTOOLS} ./build.sh\n./install.sh\ncd ..\n\ngit clone https://github.com/tpoechtrager/cctools-port.git\ncd cctools-port/cctools\n./configure --prefix=${CCTOOLS} --with-libtapi=${CCTOOLS} --target=x86_64-apple-darwin\nmake install\n\ncd ${CCTOOLS}\nwget https://github.com/phracker/MacOSX-SDKs/releases/download/10.15/MacOSX10.15.sdk.tar.xz\ntar xJf MacOSX10.15.sdk.tar.xz\n")),(0,i.kt)("h1",{id:"bian-yi-clickhouse"},"\u7f16\u8bd1 ClickHouse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-osx\nCC=clang-8 CXX=clang++-8 cmake . -Bbuild-osx -DCMAKE_SYSTEM_NAME=Darwin \\\n    -DCMAKE_AR:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ar \\\n    -DCMAKE_RANLIB:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ranlib \\\n    -DLINKER_NAME=${CCTOOLS}/bin/x86_64-apple-darwin-ld \\\n    -DSDK_PATH=${CCTOOLS}/MacOSX10.15.sdk\nninja -C build-osx\n")),(0,i.kt)("p",null,"\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5c06\u5177\u6709Mach-O\u53ef\u6267\u884c\u683c\u5f0f\uff0c\u5e76\u4e14\u4e0d\u80fd\u5728Linux\u4e0a\u8fd0\u884c\u3002"))}m.isMDXComponent=!0}}]);