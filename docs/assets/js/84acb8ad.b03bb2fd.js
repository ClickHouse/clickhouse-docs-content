"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[90033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={slug:"/ru/development/build-osx",sidebar_position:66,sidebar_label:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043d\u0430 Mac OS X"},i="\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X",o={unversionedId:"ru/development/build-osx",id:"ru/development/build-osx",title:"\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X",description:"how-to-build-clickhouse-on-mac-os-x}",source:"@site/docs/ru/development/build-osx.md",sourceDirName:"ru/development",slug:"/ru/development/build-osx",permalink:"/docs/ru/development/build-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/development/build-osx.md",tags:[],version:"current",sidebarPosition:66,frontMatter:{slug:"/ru/development/build-osx",sidebar_position:66,sidebar_label:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043d\u0430 Mac OS X"},sidebar:"russia",previous:{title:"Build on Linux",permalink:"/docs/ru/development/build"},next:{title:"Build on Linux for AARCH64 (ARM64)",permalink:"/docs/ru/development/build-cross-arm"}},c={},s=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Homebrew",id:"install-homebrew",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Xcode \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",id:"install-xcode-and-command-line-tools",level:2},{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a",id:"install-required-compilers-tools-and-libraries",level:2},{value:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u043e\u0432 ClickHouse",id:"checkout-clickhouse-sources",level:2},{value:"\u0421\u0431\u043e\u0440\u043a\u0430 ClickHouse",id:"build-clickhouse",level:2},{value:"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f",id:"caveats",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-build-clickhouse-on-mac-os-x"},"\u041a\u0430\u043a \u0441\u043e\u0431\u0440\u0430\u0442\u044c ClickHouse \u043d\u0430 Mac OS X"),(0,r.kt)("admonition",{title:'"\u0412\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c ClickHouse \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e"',type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"}," \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439 ClickHouse, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 [\u0411\u044b\u0441\u0442\u0440\u043e\u043c \u0441\u0442\u0430\u0440\u0442\u0435](https://clickhouse.com/#quick-start).\n \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043f\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0434\u043b\u044f `macOS (Intel)` \u0438\u043b\u0438 `macOS (Apple Silicon)`.\n"))),(0,r.kt)("p",null,"\u0421\u0431\u043e\u0440\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0441 x86_64 (Intel) \u043d\u0430 macOS \u0432\u0435\u0440\u0441\u0438\u0438 10.15 (Catalina) \u0438 \u0432\u044b\u0448\u0435 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 Xcode's native AppleClang, Homebrew's vanilla Clang \u0438\u043b\u0438 \u0432 GCC-\u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430\u0445."),(0,r.kt)("h2",{id:"install-homebrew"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("h2",{id:"install-xcode-and-command-line-tools"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Xcode \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0438\u0437 App Store \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0432\u0435\u0440\u0441\u0438\u044e ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/am/app/xcode/id497799835?mt=12"},"Xcode"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0435\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u043e\u043d\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0417\u0430\u0442\u0435\u043c \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo rm -rf /Library/Developer/CommandLineTools\n$ sudo xcode-select --install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044c."))),(0,r.kt)("h2",{id:"install-required-compilers-tools-and-libraries"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew update\n$ brew install cmake ninja libtool gettext llvm gcc\n")),(0,r.kt)("h2",{id:"checkout-clickhouse-sources"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u043e\u0432 ClickHouse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone --recursive git@github.com:ClickHouse/ClickHouse.git # or https://github.com/ClickHouse/ClickHouse.git\n")),(0,r.kt)("h2",{id:"build-clickhouse"},"\u0421\u0431\u043e\u0440\u043a\u0430 ClickHouse"),(0,r.kt)("p",null,"  \u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0431\u043e\u0440\u043a\u0443 \u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0435 Xcode's native AppleClang:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0431\u043e\u0440\u043a\u0443 \u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0435 Homebrew's vanilla Clang:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix llvm)/bin/clang -DCMAKE_CXX_COMPILER==$(brew --prefix llvm)/bin/clang++ -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix llvm)/bin/clang -DCMAKE_CXX_COMPILER=$(brew --prefix llvm)/bin/clang++ -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430 Homebrew's vanilla GCC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ClickHouse\n$ rm -rf build\n$ mkdir build\n$ cd build\n$ cmake -DCMAKE_C_COMPILER=$(brew --prefix gcc)/bin/gcc-11 -DCMAKE_CXX_COMPILER=$(brew --prefix gcc)/bin/g++-11 -DCMAKE_BUILD_TYPE=RelWithDebInfo -DENABLE_JEMALLOC=OFF ..\n$ cmake --build . --config RelWithDebInfo\n$ cd ..\n")),(0,r.kt)("h2",{id:"caveats"},"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"maxfiles"),"."),(0,r.kt)("admonition",{title:'"Note"',type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"\u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 `sudo`.\n"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},"/Library/LaunchDaemons/limit.maxfiles.plist")," \u0438 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u0432 \u043d\u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>limit.maxfiles</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>launchctl</string>\n      <string>limit</string>\n      <string>maxfiles</string>\n      <string>524288</string>\n      <string>524288</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>ServiceIPC</key>\n    <false/>\n  </dict>\n</plist>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435\u0441\u044c.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u043a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"ulimit -n"),"."))))}m.isMDXComponent=!0}}]);