"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[19425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,l,i=function(e,n){if(null==e)return{};var t,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?l.createElement(k,r(r({ref:n},u),{},{components:t})):l.createElement(k,r({ref:n},u))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<o;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=t(87462),i=(t(67294),t(3905));const o={slug:"/en/development/build-osx",sidebar_position:65,sidebar_label:"Build on macOS",title:"How to Build ClickHouse on macOS",description:"How to build ClickHouse on macOS"},r=void 0,a={unversionedId:"en/development/build-osx",id:"en/development/build-osx",title:"How to Build ClickHouse on macOS",description:"How to build ClickHouse on macOS",source:"@site/docs/en/development/build-osx.md",sourceDirName:"en/development",slug:"/en/development/build-osx",permalink:"/docs/en/development/build-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/build-osx.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{slug:"/en/development/build-osx",sidebar_position:65,sidebar_label:"Build on macOS",title:"How to Build ClickHouse on macOS",description:"How to build ClickHouse on macOS"},sidebar:"english",previous:{title:"Build on Linux",permalink:"/docs/en/development/build"},next:{title:"Build on Linux for macOS",permalink:"/docs/en/development/build-cross-osx"}},s={},c=[{value:"Install Homebrew",id:"install-homebrew",level:2},{value:"For Apple&#39;s Clang (discouraged): Install XCode and Command Line Tools",id:"install-xcode-and-command-line-tools",level:2},{value:"Install Required Compilers, Tools, and Libraries",id:"install-required-compilers-tools-and-libraries",level:2},{value:"Checkout ClickHouse Sources",id:"checkout-clickhouse-sources",level:2},{value:"Build ClickHouse",id:"build-clickhouse",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Running ClickHouse server",id:"running-clickhouse-server",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"You don't have to build ClickHouse yourself!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can install pre-built ClickHouse as described in ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/#quick-start"},"Quick Start"),". Follow ",(0,i.kt)("strong",{parentName:"p"},"macOS (Intel)")," or ",(0,i.kt)("strong",{parentName:"p"},"macOS (Apple silicon)")," installation instructions.")),(0,i.kt)("p",null,"The build works on x86_64 (Intel) and arm64 (Apple Silicon) based on macOS 10.15 (Catalina) or higher with Homebrew's vanilla Clang."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is also possible to compile with Apple's XCode ",(0,i.kt)("inlineCode",{parentName:"p"},"apple-clang")," or Homebrew's ",(0,i.kt)("inlineCode",{parentName:"p"},"gcc"),", but it's strongly discouraged.")),(0,i.kt)("h2",{id:"install-homebrew"},"Install Homebrew"),(0,i.kt)("p",null,"First install ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")),(0,i.kt)("h2",{id:"install-xcode-and-command-line-tools"},"For Apple's Clang (discouraged): Install XCode and Command Line Tools"),(0,i.kt)("p",null,"Install the latest ",(0,i.kt)("a",{parentName:"p",href:"https://apps.apple.com/am/app/xcode/id497799835?mt=12"},"XCode")," from App Store."),(0,i.kt)("p",null,"Open it at least once to accept the end-user license agreement and automatically install the required components."),(0,i.kt)("p",null,"Then, make sure that the latest Command Line Tools are installed and selected in the system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /Library/Developer/CommandLineTools\nsudo xcode-select --install\n")),(0,i.kt)("h2",{id:"install-required-compilers-tools-and-libraries"},"Install Required Compilers, Tools, and Libraries"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew install ccache cmake ninja libtool gettext llvm gcc binutils grep findutils\n")),(0,i.kt)("h2",{id:"checkout-clickhouse-sources"},"Checkout ClickHouse Sources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive git@github.com:ClickHouse/ClickHouse.git\n# ...alternatively, you can use https://github.com/ClickHouse/ClickHouse.git as the repo URL.\n")),(0,i.kt)("h2",{id:"build-clickhouse"},"Build ClickHouse"),(0,i.kt)("p",null,"To build using Homebrew's vanilla Clang compiler (the only ",(0,i.kt)("strong",{parentName:"p"},"recommended")," way):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build\nexport PATH=$(brew --prefix llvm)/bin:$PATH\nexport CC=$(brew --prefix llvm)/bin/clang\nexport CXX=$(brew --prefix llvm)/bin/clang++\ncmake -G Ninja -DCMAKE_BUILD_TYPE=RelWithDebInfo -S . -B build\ncmake --build build\n# The resulting binary will be created at: build/programs/clickhouse\n")),(0,i.kt)("p",null,"To build using XCode native AppleClang compiler in XCode IDE (this option is only for development builds and workflows, and is ",(0,i.kt)("strong",{parentName:"p"},"not recommended")," unless you know what you are doing):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nrm -rf build\nmkdir build\ncd build\nXCODE_IDE=1 ALLOW_APPLECLANG=1 cmake -G Xcode -DCMAKE_BUILD_TYPE=Debug -DENABLE_JEMALLOC=OFF ..\ncmake --open .\n# ...then, in XCode IDE select ALL_BUILD scheme and start the building process.\n# The resulting binary will be created at: ./programs/Debug/clickhouse\n")),(0,i.kt)("p",null,"To build using Homebrew's vanilla GCC compiler (this option is only for development experiments, and is ",(0,i.kt)("strong",{parentName:"p"},"absolutely not recommended")," unless you really know what you are doing):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\nmkdir build\nexport PATH=$(brew --prefix binutils)/bin:$PATH\nexport PATH=$(brew --prefix gcc)/bin:$PATH\nexport CC=$(brew --prefix gcc)/bin/gcc-11\nexport CXX=$(brew --prefix gcc)/bin/g++-11\ncmake -G Ninja -DCMAKE_BUILD_TYPE=RelWithDebInfo -S . -B build\ncmake --build build\n# The resulting binary will be created at: build/programs/clickhouse\n")),(0,i.kt)("h2",{id:"caveats"},"Caveats"),(0,i.kt)("p",null,"If you intend to run ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),", make sure to increase the system\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"maxfiles")," variable."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You\u2019ll need to use sudo.")),(0,i.kt)("p",null,"To do so, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Library/LaunchDaemons/limit.maxfiles.plist")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>limit.maxfiles</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>launchctl</string>\n      <string>limit</string>\n      <string>maxfiles</string>\n      <string>524288</string>\n      <string>524288</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>ServiceIPC</key>\n    <false/>\n  </dict>\n</plist>\n')),(0,i.kt)("p",null,"Give the file correct permissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,i.kt)("p",null,"Validate that the file is correct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"plutil /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,i.kt)("p",null,"Load the file (or reboot):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,i.kt)("p",null,"To check if it\u2019s working, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ulimit -n")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"launchctl limit maxfiles")," commands."),(0,i.kt)("h2",{id:"running-clickhouse-server"},"Running ClickHouse server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ClickHouse\n./build/programs/clickhouse-server --config-file ./programs/server/config.xml\n")))}d.isMDXComponent=!0}}]);