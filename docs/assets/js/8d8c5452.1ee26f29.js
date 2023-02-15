"use strict";(self.webpackChunkclickhouse_docs_2_3_0=self.webpackChunkclickhouse_docs_2_3_0||[]).push([[352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(k,s(s({ref:n},c),{},{components:t})):r.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={slug:"/zh/operations/tips"},s="\u4f7f\u7528\u5efa\u8bae",i={unversionedId:"zh/operations/tips",id:"zh/operations/tips",title:"\u4f7f\u7528\u5efa\u8bae",description:"usage-recommendations}",source:"@site/docs/zh/operations/tips.md",sourceDirName:"zh/operations",slug:"/zh/operations/tips",permalink:"/docs/zh/operations/tips",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/tips.md",tags:[],version:"current",frontMatter:{slug:"/zh/operations/tips"},sidebar:"chinese",previous:{title:"\u670d\u52a1\u5668\u8bbe\u7f6e",permalink:"/docs/zh/operations/server-configuration-parameters/settings"},next:{title:"\u5b9e\u7528\u5de5\u5177",permalink:"/docs/zh/operations/utilities/"}},l={},p=[{value:"CPU\u9891\u7387\u8c03\u8282\u5668",id:"cpu-scaling-governor",level:2},{value:"CPU\u9650\u5236",id:"cpu-limitations",level:2},{value:"RAM",id:"ram",level:2},{value:"\u5927\u9875(Huge Pages)",id:"huge-pages",level:2},{value:"\u5b58\u50a8\u5b50\u7cfb\u7edf",id:"storage-subsystem",level:2},{value:"RAID",id:"raid",level:2},{value:"\u6587\u4ef6\u7cfb\u7edf",id:"file-system",level:2},{value:"Linux\u5185\u6838",id:"linux-kernel",level:2},{value:"\u7f51\u7edc",id:"network",level:2},{value:"\u865a\u62df\u673a\u76d1\u89c6\u5668(Hypervisor)\u914d\u7f6e",id:"\u865a\u62df\u673a\u76d1\u89c6\u5668hypervisor\u914d\u7f6e",level:2},{value:"Zookeeper",id:"zookeeper",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage-recommendations"},"\u4f7f\u7528\u5efa\u8bae"),(0,o.kt)("h2",{id:"cpu-scaling-governor"},"CPU\u9891\u7387\u8c03\u8282\u5668"),(0,o.kt)("p",null,"\u59cb\u7ec8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"performance")," \u9891\u7387\u8c03\u8282\u5668\u3002  ",(0,o.kt)("inlineCode",{parentName:"p"},"on-demand")," \u9891\u7387\u8c03\u8282\u5668\u5728\u6301\u7eed\u9ad8\u9700\u6c42\u7684\u60c5\u51b5\u4e0b\uff0c\u6548\u679c\u66f4\u5dee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'performance' | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor\n")),(0,o.kt)("h2",{id:"cpu-limitations"},"CPU\u9650\u5236"),(0,o.kt)("p",null,"\u5904\u7406\u5668\u53ef\u80fd\u4f1a\u8fc7\u70ed\u3002 \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"dmesg")," \u67e5\u770bCPU\u7684\u65f6\u949f\u901f\u7387\u662f\u5426\u7531\u4e8e\u8fc7\u70ed\u800c\u53d7\u5230\u9650\u5236\u3002\n\u8be5\u9650\u5236\u4e5f\u53ef\u4ee5\u5728\u6570\u636e\u4e2d\u5fc3\u7ea7\u522b\u5916\u90e8\u8bbe\u7f6e\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"turbostat")," \u5728\u8d1f\u8f7d\u4e0b\u5bf9\u5176\u8fdb\u884c\u76d1\u63a7\u3002"),(0,o.kt)("h2",{id:"ram"},"RAM"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5c11\u91cf\u6570\u636e\uff08\u538b\u7f29\u540e\u7ea6200GB\uff09\uff0c\u6700\u597d\u4f7f\u7528\u4e0e\u6570\u636e\u91cf\u4e00\u6837\u591a\u7684\u5185\u5b58\u3002\n\u5bf9\u4e8e\u5927\u91cf\u6570\u636e\uff0c\u4ee5\u53ca\u5728\u5904\u7406\u4ea4\u4e92\u5f0f\uff08\u5728\u7ebf\uff09\u67e5\u8be2\u65f6\uff0c\u5e94\u4f7f\u7528\u5408\u7406\u6570\u91cf\u7684RAM\uff08128GB\u6216\u66f4\u591a\uff09\uff0c\u4ee5\u4fbf\u70ed\u6570\u636e\u5b50\u96c6\u9002\u5408\u9875\u9762\u7f13\u5b58\u3002\n\u5373\u4f7f\u5bf9\u4e8e\u6bcf\u53f0\u670d\u52a1\u5668\u7ea650TB\u7684\u6570\u636e\u91cf\uff0c\u4e0e64GB\u76f8\u6bd4\uff0c\u4f7f\u7528128GB\u7684RAM\u4e5f\u53ef\u4ee5\u663e\u7740\u63d0\u9ad8\u67e5\u8be2\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u4e0d\u8981\u7981\u7528 overcommit\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"cat /proc/sys/vm/overcommit_memory")," \u7684\u503c\u5e94\u8be5\u4e3a0\u62161\u3002\u8fd0\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 0 | sudo tee /proc/sys/vm/overcommit_memory\n")),(0,o.kt)("h2",{id:"huge-pages"},"\u5927\u9875(Huge Pages)"),(0,o.kt)("p",null,"\u59cb\u7ec8\u7981\u7528\u900f\u660e\u5927\u9875(transparent huge pages)\u3002 \u5b83\u4f1a\u5e72\u6270\u5185\u5b58\u5206\u914d\u5668\uff0c\u4ece\u800c\u5bfc\u81f4\u663e\u7740\u7684\u6027\u80fd\u4e0b\u964d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'never' | sudo tee /sys/kernel/mm/transparent_hugepage/enabled\n")),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"perf top")," \u6765\u67e5\u770b\u5185\u6838\u5728\u5185\u5b58\u7ba1\u7406\u4e0a\u82b1\u8d39\u7684\u65f6\u95f4\u3002\n\u6c38\u4e45\u5927\u9875(permanent huge pages)\u4e5f\u4e0d\u9700\u8981\u88ab\u5206\u914d\u3002"),(0,o.kt)("h2",{id:"storage-subsystem"},"\u5b58\u50a8\u5b50\u7cfb\u7edf"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u7684\u9884\u7b97\u5141\u8bb8\u60a8\u4f7f\u7528SSD\uff0c\u8bf7\u4f7f\u7528SSD\u3002\n\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u4f7f\u7528\u786c\u76d8\u3002 SATA\u786c\u76d87200\u8f6c\u5c31\u884c\u4e86\u3002"),(0,o.kt)("p",null,"\u4f18\u5148\u9009\u62e9\u8bb8\u591a\u5e26\u6709\u672c\u5730\u786c\u76d8\u9a71\u52a8\u5668\u7684\u670d\u52a1\u5668\uff0c\u800c\u4e0d\u662f\u5c11\u91cf\u5e26\u6709\u9644\u52a0\u78c1\u76d8\u67b6\u7684\u670d\u52a1\u5668\u3002\n\u4f46\u662f\u5bf9\u4e8e\u5b58\u50a8\u6781\u5c11\u67e5\u8be2\u7684\u6863\u6848\uff0c\u67b6\u5b50\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"raid"},"RAID"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u786c\u76d8\uff0c\u4f60\u53ef\u4ee5\u7ed3\u5408\u4ed6\u4eec\u7684RAID-10\uff0cRAID-5\uff0cRAID-6\u6216RAID-50\u3002\n\u5bf9\u4e8eLinux\uff0c\u8f6f\u4ef6RAID\u66f4\u597d\uff08\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mdadm"),"). \u6211\u4eec\u4e0d\u5efa\u8bae\u4f7f\u7528LVM\u3002\n\u5f53\u521b\u5efaRAID-10\uff0c\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"far")," \u5e03\u5c40\u3002\n\u5982\u679c\u60a8\u7684\u9884\u7b97\u5141\u8bb8\uff0c\u8bf7\u9009\u62e9RAID-10\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u67094\u4e2a\u4ee5\u4e0a\u7684\u78c1\u76d8\uff0c\u8bf7\u4f7f\u7528RAID-6\uff08\u9996\u9009\uff09\u6216RAID-50\uff0c\u800c\u4e0d\u662fRAID-5\u3002\n\u5f53\u4f7f\u7528RAID-5\u3001RAID-6\u6216RAID-50\u65f6\uff0c\u59cb\u7ec8\u589e\u52a0stripe_cache_size\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u503c\u901a\u5e38\u4e0d\u662f\u6700\u4f73\u9009\u62e9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo 4096 | sudo tee /sys/block/md2/md/stripe_cache_size\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u516c\u5f0f\u4ece\u8bbe\u5907\u6570\u91cf\u548c\u5757\u5927\u5c0f\u4e2d\u8ba1\u7b97\u51fa\u786e\u5207\u7684\u6570\u91cf: ",(0,o.kt)("inlineCode",{parentName:"p"},"2 * num_devices * chunk_size_in_bytes / 4096"),"\u3002"),(0,o.kt)("p",null,"1024KB\u7684\u5757\u5927\u5c0f\u8db3\u4ee5\u6ee1\u8db3\u6240\u6709RAID\u914d\u7f6e\u3002\n\u5207\u52ff\u5c06\u5757\u5927\u5c0f\u8bbe\u7f6e\u5f97\u592a\u5c0f\u6216\u592a\u5927\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728SSD\u4e0a\u4f7f\u7528RAID-0\u3002\n\u65e0\u8bba\u4f7f\u7528\u54ea\u79cdRAID\uff0c\u59cb\u7ec8\u4f7f\u7528\u590d\u5236\u6765\u4fdd\u8bc1\u6570\u636e\u5b89\u5168\u3002"),(0,o.kt)("p",null,"\u542f\u7528\u6709\u957f\u961f\u5217\u7684NCQ\u3002 \u5bf9\u4e8eHDD\uff0c\u9009\u62e9CFQ\u8c03\u5ea6\u7a0b\u5e8f\uff0c\u5bf9\u4e8eSSD\uff0c\u9009\u62e9noop\u3002 \u4e0d\u8981\u51cf\u5c11 \u2018readahead\u2019 \u8bbe\u7f6e\u3002\n\u5bf9\u4e8eHDD\uff0c\u542f\u7528\u5199\u5165\u7f13\u5b58\u3002"),(0,o.kt)("h2",{id:"file-system"},"\u6587\u4ef6\u7cfb\u7edf"),(0,o.kt)("p",null,"Ext4\u662f\u6700\u53ef\u9760\u7684\u9009\u62e9\u3002 \u8bbe\u7f6e\u6302\u8f7d\u9009\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},"noatime"),".\nXFS\u4e5f\u662f\u5408\u9002\u7684\uff0c\u4f46\u5b83\u8fd8\u6ca1\u6709\u7ecf\u8fc7ClickHouse\u7684\u5168\u9762\u6d4b\u8bd5\u3002\n\u5927\u591a\u6570\u5176\u4ed6\u6587\u4ef6\u7cfb\u7edf\u4e5f\u5e94\u8be5\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002 \u5177\u6709\u5ef6\u8fdf\u5206\u914d\u7684\u6587\u4ef6\u7cfb\u7edf\u5de5\u4f5c\u5f97\u66f4\u597d\u3002"),(0,o.kt)("h2",{id:"linux-kernel"},"Linux\u5185\u6838"),(0,o.kt)("p",null,"\u4e0d\u8981\u4f7f\u7528\u8fc7\u65f6\u7684Linux\u5185\u6838\u3002"),(0,o.kt)("h2",{id:"network"},"\u7f51\u7edc"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684\u662fIPv6\uff0c\u8bf7\u589e\u52a0\u8def\u7531\u7f13\u5b58\u7684\u5927\u5c0f\u3002\n3.2\u4e4b\u524d\u7684Linux\u5185\u6838\u5728IPv6\u5b9e\u73b0\u65b9\u9762\u5b58\u5728\u8bb8\u591a\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u81f3\u5c11\u4f7f\u752810GB\u7684\u7f51\u7edc\u30021GB\u4e5f\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u5bf9\u4e8e\u4f7f\u7528\u6570\u5341TB\u7684\u6570\u636e\u4fee\u8865\u526f\u672c\u6216\u5904\u7406\u5177\u6709\u5927\u91cf\u4e2d\u95f4\u6570\u636e\u7684\u5206\u5e03\u5f0f\u67e5\u8be2\uff0c\u60c5\u51b5\u4f1a\u66f4\u7cdf\u3002"),(0,o.kt)("h2",{id:"\u865a\u62df\u673a\u76d1\u89c6\u5668hypervisor\u914d\u7f6e"},"\u865a\u62df\u673a\u76d1\u89c6\u5668(Hypervisor)\u914d\u7f6e"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fOpenStack\uff0c\u8bf7\u5728nova.conf\u4e2d\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cpu_mode=host-passthrough\n")),(0,o.kt)("p",null,"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662flibvirt\uff0c\u8bf7\u5728XML\u914d\u7f6e\u4e2d\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<cpu mode='host-passthrough'/>\n")),(0,o.kt)("p",null,"\u3002"),(0,o.kt)("p",null,"\u8fd9\u5bf9\u4e8eClickHouse\u80fd\u591f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"cpuid")," \u6307\u4ee4\u83b7\u53d6\u6b63\u786e\u7684\u4fe1\u606f\u975e\u5e38\u91cd\u8981\u3002\n\u5426\u5219\uff0c\u5f53\u5728\u65e7\u7684CPU\u578b\u53f7\u4e0a\u8fd0\u884c\u865a\u62df\u673a\u76d1\u89c6\u5668\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"Illegal instruction")," \u5d29\u6e83\u3002"),(0,o.kt)("h2",{id:"zookeeper"},"Zookeeper"),(0,o.kt)("p",null,"\u60a8\u53ef\u80fd\u5df2\u7ecf\u5c06ZooKeeper\u7528\u4e8e\u5176\u4ed6\u76ee\u7684\u3002 \u5982\u679c\u5b83\u8fd8\u6ca1\u6709\u8d85\u8f7d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684zookeeper\u3002"),(0,o.kt)("p",null,"\u6700\u597d\u4f7f\u7528\u65b0\u7248\u672c\u7684Zookeeper \u2013 3.4.9 \u6216\u66f4\u9ad8\u7684\u7248\u672c. \u7a33\u5b9a\u7684Liunx\u53d1\u884c\u7248\u4e2d\u7684Zookeeper\u7248\u672c\u53ef\u80fd\u5df2\u8fc7\u65f6\u3002"),(0,o.kt)("p",null,"\u4f60\u6c38\u8fdc\u4e0d\u8981\u4f7f\u7528\u624b\u52a8\u7f16\u5199\u7684\u811a\u672c\u5728\u4e0d\u540c\u7684Zookeeper\u96c6\u7fa4\u4e4b\u95f4\u4f20\u8f93\u6570\u636e, \u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e8f\u5217\u8282\u70b9\u7684\u6570\u636e\u4e0d\u6b63\u786e\u3002\u51fa\u4e8e\u76f8\u540c\u7684\u539f\u56e0\uff0c\u6c38\u8fdc\u4e0d\u8981\u4f7f\u7528 zkcopy \u5de5\u5177: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ksprojects/zkcopy/issues/15"},"https://github.com/ksprojects/zkcopy/issues/15")),(0,o.kt)("p",null,"\u5982\u679c\u8981\u5c06\u73b0\u6709\u7684ZooKeeper\u96c6\u7fa4\u5206\u4e3a\u4e24\u4e2a\uff0c\u6b63\u786e\u7684\u65b9\u6cd5\u662f\u589e\u52a0\u5176\u526f\u672c\u7684\u6570\u91cf\uff0c\u7136\u540e\u5c06\u5176\u91cd\u65b0\u914d\u7f6e\u4e3a\u4e24\u4e2a\u72ec\u7acb\u7684\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u4e0d\u8981\u5728ClickHouse\u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a\u8fd0\u884cZooKeeper\u3002 \u56e0\u4e3aZooKeeper\u5bf9\u5ef6\u8fdf\u975e\u5e38\u654f\u611f\uff0c\u800cClickHouse\u53ef\u80fd\u4f1a\u5360\u7528\u6240\u6709\u53ef\u7528\u7684\u7cfb\u7edf\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u8bbe\u7f6e\u4e0b\uff0cZooKeeper \u5c31\u50cf\u662f\u4e00\u4e2a\u5b9a\u65f6\u70b8\u5f39:"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u65f6\uff0cZooKeeper\u670d\u52a1\u5668\u4e0d\u4f1a\u4ece\u65e7\u7684\u5feb\u7167\u548c\u65e5\u5fd7\u4e2d\u5220\u9664\u6587\u4ef6\uff08\u8bf7\u53c2\u9605autopurge\uff09\uff0c\u8fd9\u662f\u64cd\u4f5c\u5458\u7684\u8d23\u4efb\u3002"),(0,o.kt)("p",null,"\u5fc5\u987b\u62c6\u9664\u70b8\u5f39\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684ZooKeeper\uff083.5.1\uff09\u914d\u7f6e\u5728 Yandex.Metrica \u7684\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u622a\u81f32017\u5e745\u670820\u65e5:"),(0,o.kt)("p",null,"zoo.cfg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# http://hadoop.apache.org/zookeeper/docs/current/zookeeperAdmin.html\n\n# The number of milliseconds of each tick\ntickTime=2000\n# The number of ticks that the initial\n# synchronization phase can take\ninitLimit=30000\n# The number of ticks that can pass between\n# sending a request and getting an acknowledgement\nsyncLimit=10\n\nmaxClientCnxns=2000\n\nmaxSessionTimeout=60000000\n# the directory where the snapshot is stored.\ndataDir=/opt/zookeeper/{{ '{{' }} cluster['name'] {{ '}}' }}/data\n# Place the dataLogDir to a separate physical disc for better performance\ndataLogDir=/opt/zookeeper/{{ '{{' }} cluster['name'] {{ '}}' }}/logs\n\nautopurge.snapRetainCount=10\nautopurge.purgeInterval=1\n\n\n# To avoid seeks ZooKeeper allocates space in the transaction log file in\n# blocks of preAllocSize kilobytes. The default block size is 64M. One reason\n# for changing the size of the blocks is to reduce the block size if snapshots\n# are taken more often. (Also, see snapCount).\npreAllocSize=131072\n\n# Clients can submit requests faster than ZooKeeper can process them,\n# especially if there are a lot of clients. To prevent ZooKeeper from running\n# out of memory due to queued requests, ZooKeeper will throttle clients so that\n# there is no more than globalOutstandingLimit outstanding requests in the\n# system. The default limit is 1,000.ZooKeeper logs transactions to a\n# transaction log. After snapCount transactions are written to a log file a\n# snapshot is started and a new transaction log file is started. The default\n# snapCount is 10,000.\nsnapCount=3000000\n\n# If this option is defined, requests will be will logged to a trace file named\n# traceFile.year.month.day.\n#traceFile=\n\n# Leader accepts client connections. Default value is \"yes\". The leader machine\n# coordinates updates. For higher update throughput at thes slight expense of\n# read throughput the leader can be configured to not accept clients and focus\n# on coordination.\nleaderServes=yes\n\nstandaloneEnabled=false\ndynamicConfigFile=/etc/zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }}/conf/zoo.cfg.dynamic\n")),(0,o.kt)("p",null,"Java\u7248\u672c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Java(TM) SE Runtime Environment (build 1.8.0_25-b17)\nJava HotSpot(TM) 64-Bit Server VM (build 25.25-b02, mixed mode)\n")),(0,o.kt)("p",null,"JVM\u53c2\u6570:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"NAME=zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }}\nZOOCFGDIR=/etc/$NAME/conf\n\n# TODO this is really ugly\n# How to find out, which jars are needed?\n# seems, that log4j requires the log4j.properties file to be in the classpath\nCLASSPATH=\"$ZOOCFGDIR:/usr/build/classes:/usr/build/lib/*.jar:/usr/share/zookeeper/zookeeper-3.5.1-metrika.jar:/usr/share/zookeeper/slf4j-log4j12-1.7.5.jar:/usr/share/zookeeper/slf4j-api-1.7.5.jar:/usr/share/zookeeper/servlet-api-2.5-20081211.jar:/usr/share/zookeeper/netty-3.7.0.Final.jar:/usr/share/zookeeper/log4j-1.2.16.jar:/usr/share/zookeeper/jline-2.11.jar:/usr/share/zookeeper/jetty-util-6.1.26.jar:/usr/share/zookeeper/jetty-6.1.26.jar:/usr/share/zookeeper/javacc.jar:/usr/share/zookeeper/jackson-mapper-asl-1.9.11.jar:/usr/share/zookeeper/jackson-core-asl-1.9.11.jar:/usr/share/zookeeper/commons-cli-1.2.jar:/usr/src/java/lib/*.jar:/usr/etc/zookeeper\"\n\nZOOCFG=\"$ZOOCFGDIR/zoo.cfg\"\nZOO_LOG_DIR=/var/log/$NAME\nUSER=zookeeper\nGROUP=zookeeper\nPIDDIR=/var/run/$NAME\nPIDFILE=$PIDDIR/$NAME.pid\nSCRIPTNAME=/etc/init.d/$NAME\nJAVA=/usr/bin/java\nZOOMAIN=\"org.apache.zookeeper.server.quorum.QuorumPeerMain\"\nZOO_LOG4J_PROP=\"INFO,ROLLINGFILE\"\nJMXLOCALONLY=false\nJAVA_OPTS=\"-Xms{{ '{{' }} cluster.get('xms','128M') {{ '}}' }} \\\n    -Xmx{{ '{{' }} cluster.get('xmx','1G') {{ '}}' }} \\\n    -Xloggc:/var/log/$NAME/zookeeper-gc.log \\\n    -XX:+UseGCLogFileRotation \\\n    -XX:NumberOfGCLogFiles=16 \\\n    -XX:GCLogFileSize=16M \\\n    -verbose:gc \\\n    -XX:+PrintGCTimeStamps \\\n    -XX:+PrintGCDateStamps \\\n    -XX:+PrintGCDetails\n    -XX:+PrintTenuringDistribution \\\n    -XX:+PrintGCApplicationStoppedTime \\\n    -XX:+PrintGCApplicationConcurrentTime \\\n    -XX:+PrintSafepointStatistics \\\n    -XX:+UseParNewGC \\\n    -XX:+UseConcMarkSweepGC \\\n-XX:+CMSParallelRemarkEnabled\"\n")),(0,o.kt)("p",null,"\u521d\u59cb\u5316:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"description \"zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }} centralized coordination service\"\n\nstart on runlevel [2345]\nstop on runlevel [!2345]\n\nrespawn\n\nlimit nofile 8192 8192\n\npre-start script\n    [ -r \"/etc/zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }}/conf/environment\" ] || exit 0\n    . /etc/zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }}/conf/environment\n    [ -d $ZOO_LOG_DIR ] || mkdir -p $ZOO_LOG_DIR\n    chown $USER:$GROUP $ZOO_LOG_DIR\nend script\n\nscript\n    . /etc/zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }}/conf/environment\n    [ -r /etc/default/zookeeper ] && . /etc/default/zookeeper\n    if [ -z \"$JMXDISABLE\" ]; then\n        JAVA_OPTS=\"$JAVA_OPTS -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.local.only=$JMXLOCALONLY\"\n    fi\n    exec start-stop-daemon --start -c $USER --exec $JAVA --name zookeeper-{{ '{{' }} cluster['name'] {{ '}}' }} \\\n        -- -cp $CLASSPATH $JAVA_OPTS -Dzookeeper.log.dir=${ZOO_LOG_DIR} \\\n        -Dzookeeper.root.logger=${ZOO_LOG4J_PROP} $ZOOMAIN $ZOOCFG\nend script\n")))}m.isMDXComponent=!0}}]);