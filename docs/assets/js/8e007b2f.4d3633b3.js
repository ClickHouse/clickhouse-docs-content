"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8565],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39845:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],a={},c="\u5728 Mac OS X \u4e2d\u7f16\u8bd1 ClickHouse",u={unversionedId:"zh/development/build-osx",id:"zh/development/build-osx",title:"\u5728 Mac OS X \u4e2d\u7f16\u8bd1 ClickHouse",description:"zai-mac-os-x-zhong-bian-yi-clickhouse}",source:"@site/docs/zh/development/build-osx.md",sourceDirName:"zh/development",slug:"/zh/development/build-osx",permalink:"/docs/zh/development/build-osx",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/development/build-osx.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5982\u4f55\u5728Linux\u4e2d\u7f16\u8bd1Mac OS X ClickHouse",permalink:"/docs/zh/development/build-cross-osx"},next:{title:"\u5982\u4f55\u6784\u5efa ClickHouse \u53d1\u5e03\u5305",permalink:"/docs/zh/development/build"}},s={},p=[{value:"\u5b89\u88c5 Homebrew",id:"an-zhuang-homebrew",level:2},{value:"\u5b89\u88c5\u7f16\u8bd1\u5668\uff0c\u5de5\u5177\u5e93",id:"an-zhuang-bian-yi-qi-gong-ju-ku",level:2},{value:"\u62c9\u53d6 ClickHouse \u6e90\u7801",id:"la-qu-clickhouse-yuan-ma",level:2},{value:"\u7f16\u8bd1 ClickHouse",id:"bian-yi-clickhouse",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"zhu-yi-shi-xiang",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"zai-mac-os-x-zhong-bian-yi-clickhouse"},"\u5728 Mac OS X \u4e2d\u7f16\u8bd1 ClickHouse"),(0,l.kt)("p",null,"ClickHouse \u652f\u6301\u5728 Mac OS X 10.12 \u7248\u672c\u4e2d\u7f16\u8bd1\u3002\u82e5\u60a8\u5728\u7528\u66f4\u65e9\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5728\u6307\u4ee4\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Gentoo Prefix")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"clang sl"),".\n\u901a\u8fc7\u9002\u5f53\u7684\u66f4\u6539\uff0c\u5b83\u5e94\u8be5\u53ef\u4ee5\u9002\u7528\u4e8e\u4efb\u4f55\u5176\u4ed6\u7684 Linux \u53d1\u884c\u7248\u3002"),(0,l.kt)("h2",{id:"an-zhuang-homebrew"},"\u5b89\u88c5 Homebrew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("h2",{id:"an-zhuang-bian-yi-qi-gong-ju-ku"},"\u5b89\u88c5\u7f16\u8bd1\u5668\uff0c\u5de5\u5177\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install cmake ninja libtool gettext\n")),(0,l.kt)("h2",{id:"la-qu-clickhouse-yuan-ma"},"\u62c9\u53d6 ClickHouse \u6e90\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive git@github.com:ClickHouse/ClickHouse.git\n# or: git clone --recursive https://github.com/ClickHouse/ClickHouse.git\n\ncd ClickHouse\n")),(0,l.kt)("h2",{id:"bian-yi-clickhouse"},"\u7f16\u8bd1 ClickHouse"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir build\n$ cd build\n$ cmake .. -DCMAKE_CXX_COMPILER=`which clang++` -DCMAKE_C_COMPILER=`which clang`\n$ ninja\n$ cd ..\n")),(0,l.kt)("h2",{id:"zhu-yi-shi-xiang"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u82e5\u4f60\u60f3\u8fd0\u884c clickhouse-server\uff0c\u8bf7\u5148\u786e\u4fdd\u589e\u52a0\u7cfb\u7edf\u7684\u6700\u5927\u6587\u4ef6\u6570\u914d\u7f6e\u3002"),(0,l.kt)("p",null,'!!! \u6ce8\u610f "\u6ce8\u610f"\n\u53ef\u80fd\u9700\u8981\u7528 sudo'),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0c\u8bf7\u521b\u5efa\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,l.kt)("p",null,"/\u8d44\u6e90\u5e93/LaunchDaemons/limit.maxfiles.plist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n        "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>limit.maxfiles</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>launchctl</string>\n      <string>limit</string>\n      <string>maxfiles</string>\n      <string>524288</string>\n      <string>524288</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>ServiceIPC</key>\n    <false/>\n  </dict>\n</plist>\n')),(0,l.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist\n")),(0,l.kt)("p",null,"\u7136\u540e\u91cd\u542f\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ulimit -n")," \u547d\u4ee4\u6765\u68c0\u67e5\u662f\u5426\u751f\u6548\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/build_osx/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);