"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[90345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={slug:"/zh/development/build-cross-osx"},l="\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse",i={unversionedId:"zh/development/build-cross-osx",id:"zh/development/build-cross-osx",title:"\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse",description:"ru-he-zai-linuxzhong-bian-yi-mac-os-x-clickhouse}",source:"@site/docs/zh/development/build-cross-osx.md",sourceDirName:"zh/development",slug:"/zh/development/build-cross-osx",permalink:"/docs/zh/development/build-cross-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/development/build-cross-osx.md",tags:[],version:"current",frontMatter:{slug:"/zh/development/build-cross-osx"},sidebar:"chinese",previous:{title:"ClickHouse \u67b6\u6784\u6982\u8ff0",permalink:"/docs/zh/development/architecture"},next:{title:"\u5728 Mac OS X \u4e2d\u7f16\u8bd1 ClickHouse",permalink:"/docs/zh/development/build-osx"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ru-he-zai-linuxzhong-bian-yi-mac-os-x-clickhouse"},"\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse"),(0,o.kt)("p",null,"Linux\u673a\u5668\u4e5f\u53ef\u4ee5\u7f16\u8bd1\u8fd0\u884c\u5728OS X\u7cfb\u7edf\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\u4e8c\u8fdb\u5236\u5305\uff0c\u8fd9\u53ef\u4ee5\u7528\u4e8e\u5728Linux\u4e0a\u8dd1\u6301\u7eed\u96c6\u6210\u6d4b\u8bd5\u3002\u5982\u679c\u8981\u5728Mac OS X\u4e0a\u76f4\u63a5\u6784\u5efaClickHouse\uff0c\u8bf7\u53c2\u8003\u53e6\u5916\u4e00\u7bc7\u6307\u5357\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/development/build_osx/"},"https://clickhouse.com/docs/zh/development/build_osx/")),(0,o.kt)("p",null,"Mac OS X\u7684\u4ea4\u53c9\u7f16\u8bd1\u57fa\u4e8e\u4ee5\u4e0b\u6784\u5efa\u8bf4\u660e\uff0c\u8bf7\u9996\u5148\u9075\u5faa\u5b83\u4eec\u3002"),(0,o.kt)("h1",{id:"install-clang-8"},"\u5b89\u88c5Clang-8"),(0,o.kt)("p",null,"\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"https://apt.llvm.org/%E4%B8%AD%E7%9A%84%E8%AF%B4%E6%98%8E%E8%BF%9B%E8%A1%8CUbuntu%E6%88%96Debian%E5%AE%89%E8%A3%85%E3%80%82"},"https://apt.llvm.org/\u4e2d\u7684\u8bf4\u660e\u8fdb\u884cUbuntu\u6216Debian\u5b89\u88c5\u3002"),"\n\u4f8b\u5982\uff0c\u5b89\u88c5Bionic\u7684\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "deb [trusted=yes] http://apt.llvm.org/bionic/ llvm-toolchain-bionic-8 main" >> /etc/apt/sources.list\nsudo apt-get install clang-8\n')),(0,o.kt)("h1",{id:"an-zhuang-jiao-cha-bian-yi-gong-ju-ji"},"\u5b89\u88c5\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u96c6"),(0,o.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"cctools")," \u5728 ${CCTOOLS} \u8def\u5f84\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ${CCTOOLS}\n\ngit clone https://github.com/tpoechtrager/apple-libtapi.git\ncd apple-libtapi\nINSTALLPREFIX=${CCTOOLS} ./build.sh\n./install.sh\ncd ..\n\ngit clone https://github.com/tpoechtrager/cctools-port.git\ncd cctools-port/cctools\n./configure --prefix=${CCTOOLS} --with-libtapi=${CCTOOLS} --target=x86_64-apple-darwin\nmake install\n\ncd ${CCTOOLS}\nwget https://github.com/phracker/MacOSX-SDKs/releases/download/10.15/MacOSX10.15.sdk.tar.xz\ntar xJf MacOSX10.15.sdk.tar.xz\n")),(0,o.kt)("h1",{id:"bian-yi-clickhouse"},"\u7f16\u8bd1 ClickHouse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build-osx\nCC=clang-8 CXX=clang++-8 cmake . -Bbuild-osx -DCMAKE_SYSTEM_NAME=Darwin \\\n    -DCMAKE_AR:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ar \\\n    -DCMAKE_RANLIB:FILEPATH=${CCTOOLS}/bin/x86_64-apple-darwin-ranlib \\\n    -DLINKER_NAME=${CCTOOLS}/bin/x86_64-apple-darwin-ld \\\n    -DSDK_PATH=${CCTOOLS}/MacOSX10.15.sdk\nninja -C build-osx\n")),(0,o.kt)("p",null,"\u751f\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5c06\u5177\u6709Mach-O\u53ef\u6267\u884c\u683c\u5f0f\uff0c\u5e76\u4e14\u4e0d\u80fd\u5728Linux\u4e0a\u8fd0\u884c\u3002"))}u.isMDXComponent=!0}}]);