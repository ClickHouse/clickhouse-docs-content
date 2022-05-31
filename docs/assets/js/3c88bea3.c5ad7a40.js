"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22423],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={},s="\u5982\u4f55\u5c06\u6d4b\u8bd5\u67e5\u8be2\u6dfb\u52a0\u5230 ClickHouse CI",u={unversionedId:"zh/development/adding_test_queries",id:"zh/development/adding_test_queries",title:"\u5982\u4f55\u5c06\u6d4b\u8bd5\u67e5\u8be2\u6dfb\u52a0\u5230 ClickHouse CI",description:"ClickHouse\u6709\u6570\u767e\u4e2a\uff08\u751a\u81f3\u6570\u5343\u4e2a\uff09\u529f\u80fd\u3002 \u6bcf\u4e2a\u63d0\u4ea4\u90fd\u7531\u5305\u542b\u6570\u5343\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u7ec4\u590d\u6742\u6d4b\u8bd5\u8fdb\u884c\u68c0\u67e5\u3002",source:"@site/docs/zh/development/adding_test_queries.md",sourceDirName:"zh/development",slug:"/zh/development/adding_test_queries",permalink:"/docs/zh/development/adding_test_queries",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/development/adding_test_queries.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5982\u4f55\u5728Linux\u4e0a\u6784\u5efaClickHouse for AARCH64\uff08ARM64)",permalink:"/docs/zh/development/build-cross-arm"},next:{title:"ClickHouse \u67b6\u6784\u6982\u8ff0",permalink:"/docs/zh/development/architecture"}},p={},c=[{value:"\u4e3a\u4ec0\u4e48\u8981\u6dfb\u52a0\u6d4b\u8bd5",id:"\u4e3a\u4ec0\u4e48\u8981\u6dfb\u52a0\u6d4b\u8bd5",level:2},{value:"\u8981\u505a\u7684\u6b65\u9aa4",id:"\u8981\u505a\u7684\u6b65\u9aa4",level:3},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:4},{value:"\u51c6\u5907",id:"\u51c6\u5907",level:4},{value:"\u6d4b\u8bd5\u7684\u65b0\u5206\u652f",id:"\u6d4b\u8bd5\u7684\u65b0\u5206\u652f",level:4},{value:"\u5b89\u88c5\u5e76\u8fd0\u884c clickhouse",id:"\u5b89\u88c5\u5e76\u8fd0\u884c-clickhouse",level:4},{value:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6",id:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6",level:4},{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u597d\u7684\u6d4b\u8bd5",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u597d\u7684\u6d4b\u8bd5",level:4},{value:"\u6d4b\u8bd5\u547d\u540d\u89c4\u5219",id:"\u6d4b\u8bd5\u547d\u540d\u89c4\u5219",level:4},{value:"Commit / push / \u521b\u5efaPR.",id:"commit--push--\u521b\u5efapr",level:4}],m={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5982\u4f55\u5c06\u6d4b\u8bd5\u67e5\u8be2\u6dfb\u52a0\u5230-clickhouse-ci"},"\u5982\u4f55\u5c06\u6d4b\u8bd5\u67e5\u8be2\u6dfb\u52a0\u5230 ClickHouse CI"),(0,a.kt)("p",null,"ClickHouse\u6709\u6570\u767e\u4e2a\uff08\u751a\u81f3\u6570\u5343\u4e2a\uff09\u529f\u80fd\u3002 \u6bcf\u4e2a\u63d0\u4ea4\u90fd\u7531\u5305\u542b\u6570\u5343\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u7684\u4e00\u7ec4\u590d\u6742\u6d4b\u8bd5\u8fdb\u884c\u68c0\u67e5\u3002"),(0,a.kt)("p",null,"\u6838\u5fc3\u529f\u80fd\u7ecf\u8fc7\u4e86\u5f88\u591a\u7684\u6d4b\u8bd5\uff0c\u4f46\u662fClickHouse CI\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e9b\u6781\u7aef\u60c5\u51b5\u548c\u4e0d\u540c\u7684\u529f\u80fd\u7ec4\u5408\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u770b\u5230\u7684\u5927\u591a\u6570\u9519\u8bef/\u56de\u5f52\u90fd\u53d1\u751f\u5728\u6d4b\u8bd5\u8986\u76d6\u7387\u8f83\u5dee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u7070\u8272\u533a\u57df"),"\u4e2d\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u6709\u5174\u8da3\u901a\u8fc7\u6d4b\u8bd5\u6db5\u76d6\u5b9e\u73b0\u751f\u6d3b\u4e2d\u4f7f\u7528\u7684\u5927\u591a\u6570\u53ef\u80fd\u7684\u573a\u666f\u548c\u529f\u80fd\u7ec4\u5408\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u6dfb\u52a0\u6d4b\u8bd5"},"\u4e3a\u4ec0\u4e48\u8981\u6dfb\u52a0\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u4e3a\u4ec0\u4e48/\u4f55\u65f6\u5e94\u5c06\u6d4b\u8bd5\u7528\u4f8b\u6dfb\u52a0\u5230ClickHouse\u4ee3\u7801\u4e2d\uff1a\n1) \u60a8\u4f7f\u7528\u4e86\u4e00\u4e9b\u590d\u6742\u7684\u573a\u666f/\u529f\u80fd\u7ec4\u5408/\u60a8\u6709\u4e00\u4e9b\u53ef\u80fd\u672a\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u60c5\u51b5\n2) \u60a8\u4f1a\u770b\u5230\u66f4\u6539\u65e5\u5fd7\u4e2d\u6ca1\u6709\u901a\u77e5\u7684\u7248\u672c\u4e4b\u95f4\u7684\u67d0\u4e9b\u884c\u4e3a\u53d1\u751f\u4e86\u53d8\u5316\n3) \u60a8\u53ea\u662f\u60f3\u5e2e\u52a9\u63d0\u9ad8ClickHouse\u7684\u8d28\u91cf\u5e76\u786e\u4fdd\u60a8\u4f7f\u7528\u7684\u529f\u80fd\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\u4e0d\u4f1a\u88ab\u7834\u574f\n4) \u4e00\u65e6\u6d4b\u8bd5\u88ab\u6dfb\u52a0/\u63a5\u53d7\uff0c\u60a8\u53ef\u4ee5\u786e\u4fdd\u60a8\u68c0\u67e5\u7684\u89d2\u843d\u6848\u4f8b\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u610f\u5916\u635f\u574f\u3002\n5) \u4f60\u5c06\u6210\u4e3a\u4f1f\u5927\u7684\u5f00\u6e90\u793e\u533a\u7684\u4e00\u4efd\u5b50\n6) \u60a8\u7684\u540d\u5b57\u5c06\u51fa\u73b0\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"system.contributors"),"\u8868\u4e2d\uff01\n7) \u4f60\u4f1a\u8ba9\u4e16\u754c\u53d8\u5f97\u66f4\u597d\u3002"),(0,a.kt)("h3",{id:"\u8981\u505a\u7684\u6b65\u9aa4"},"\u8981\u505a\u7684\u6b65\u9aa4"),(0,a.kt)("h4",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("p",null,"\u6211\u5047\u8bbe\u4f60\u8fd0\u884c\u4e00\u4e9bLinux\u673a\u5668\uff08\u4f60\u53ef\u4ee5\u5728\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u4f7f\u7528 docker/\u865a\u62df\u673a\uff09\u548c\u4efb\u4f55\u73b0\u4ee3\u6d4f\u89c8\u5668/\u4e92\u8054\u7f51\u8fde\u63a5\uff0c\u5e76\u4e14\u4f60\u6709\u4e00\u4e9b\u57fa\u672c\u7684Linux\u548cSQL\u6280\u80fd\u3002"),(0,a.kt)("p",null,"\u4e0d\u9700\u8981\u4efb\u4f55\u9ad8\u5ea6\u4e13\u4e1a\u5316\u7684\u77e5\u8bc6\uff08\u56e0\u6b64\u60a8\u4e0d\u9700\u8981\u4e86\u89e3 C++ \u6216\u4e86\u89e3ClickHouse CI\u7684\u5de5\u4f5c\u539f\u7406\uff09\u3002"),(0,a.kt)("h4",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,a.kt)("p",null,"1) ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/join"},"create GitHub account")," (\u5982\u679c\u4f60\u8fd8\u6ca1\u6709)\n2) ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/set-up-git"},"setup git")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# for Ubuntu\nsudo apt-get update\nsudo apt-get install git\n\ngit config --global user.name "John Doe" # fill with your name\ngit config --global user.email "email@example.com" # fill with your email\n\n')),(0,a.kt)("p",null,"3) ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo"},"fork ClickHouse project")," - \u6253\u5f00 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"https://github.com/ClickHouse/ClickHouse")," and press fork button in the top right corner:\n",(0,a.kt)("img",{parentName:"p",src:"https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png",alt:"fork repo"})),(0,a.kt)("p",null,"4) \u4f8b\u5982\uff0c\u5c06\u4ee3\u7801fork\u514b\u9686\u5230PC\u4e0a\u7684\u67d0\u4e2a\u6587\u4ef6\u5939, ",(0,a.kt)("inlineCode",{parentName:"p"},"~/workspace/ClickHouse")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ~/workspace && cd ~/workspace\ngit clone https://github.com/< your GitHub username>/ClickHouse\ncd ClickHouse\ngit remote add upstream https://github.com/ClickHouse/ClickHouse\n")),(0,a.kt)("h4",{id:"\u6d4b\u8bd5\u7684\u65b0\u5206\u652f"},"\u6d4b\u8bd5\u7684\u65b0\u5206\u652f"),(0,a.kt)("p",null,"1) \u4ece\u6700\u65b0\u7684clickhouse master\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/workspace/ClickHouse\ngit fetch upstream\ngit checkout -b name_for_a_branch_with_my_test upstream/master\n")),(0,a.kt)("h4",{id:"\u5b89\u88c5\u5e76\u8fd0\u884c-clickhouse"},"\u5b89\u88c5\u5e76\u8fd0\u884c clickhouse"),(0,a.kt)("p",null,"1) \u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," (\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting-started/install/"},"\u79bb\u7ebf\u6587\u6863"),")\n2) \u5b89\u88c5\u6d4b\u8bd5\u914d\u7f6e\uff08\u5b83\u5c06\u4f7f\u7528Zookeeper\u6a21\u62df\u5b9e\u73b0\u5e76\u8c03\u6574\u4e00\u4e9b\u8bbe\u7f6e\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~/workspace/ClickHouse/tests/config\nsudo ./install.sh\n")),(0,a.kt)("p",null,"3) \u8fd0\u884cclickhouse-server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart clickhouse-server\n")),(0,a.kt)("h4",{id:"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6"},"\u521b\u5efa\u6d4b\u8bd5\u6587\u4ef6"),(0,a.kt)("p",null,"1) \u627e\u5230\u6d4b\u8bd5\u7684\u7f16\u53f7 - \u5728",(0,a.kt)("inlineCode",{parentName:"p"},"tests/queries/0_stateless/"),"\u4e2d\u627e\u5230\u7f16\u53f7\u6700\u5927\u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ~/workspace/ClickHouse\n$ ls tests/queries/0_stateless/[0-9]*.reference | tail -n 1\ntests/queries/0_stateless/01520_client_print_query_id.reference\n")),(0,a.kt)("p",null,"\u76ee\u524d\uff0c\u6d4b\u8bd5\u7684\u6700\u540e\u4e00\u4e2a\u6570\u5b57\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"01520"),"\uff0c\u6240\u4ee5\u6211\u7684\u6d4b\u8bd5\u5c06\u6709\u6570\u5b57",(0,a.kt)("inlineCode",{parentName:"p"},"01521")),(0,a.kt)("p",null,"2) \u4f7f\u7528\u60a8\u6d4b\u8bd5\u7684\u529f\u80fd\u7684\u4e0b\u4e00\u4e2a\u7f16\u53f7\u548c\u540d\u79f0\u521b\u5efa\u4e00\u4e2aSQL\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"touch tests/queries/0_stateless/01521_dummy_test.sql\n")),(0,a.kt)("p",null,"3) \u4f7f\u7528\u60a8\u6700\u559c\u6b22\u7684\u7f16\u8f91\u5668\u7f16\u8f91SQL\u6587\u4ef6\uff08\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u521b\u5efa\u6d4b\u8bd5\u63d0\u793a\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vim tests/queries/0_stateless/01521_dummy_test.sql\n")),(0,a.kt)("p",null,"4) \u8fd0\u884c\u6d4b\u8bd5\uff0c\u5e76\u5c06\u5176\u7ed3\u679c\u653e\u5165\u53c2\u8003\u6587\u4ef6\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clickhouse-client -nmT < tests/queries/0_stateless/01521_dummy_test.sql | tee tests/queries/0_stateless/01521_dummy_test.reference\n")),(0,a.kt)("p",null,"5) \u786e\u4fdd\u4e00\u5207\u6b63\u786e\uff0c\u5982\u679c\u6d4b\u8bd5\u8f93\u51fa\u4e0d\u6b63\u786e\uff08\u4f8b\u5982\u7531\u4e8e\u67d0\u4e9b\u9519\u8bef\uff09\uff0c\u8bf7\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u8c03\u6574\u53c2\u8003\u6587\u4ef6\u3002"),(0,a.kt)("h4",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u597d\u7684\u6d4b\u8bd5"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u597d\u7684\u6d4b\u8bd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u5e94\u8be5\u662f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u5c0f - \u4ec5\u521b\u5efa\u4e0e\u6d4b\u8bd5\u529f\u80fd\u76f8\u5173\u7684\u8868\uff0c\u5220\u9664\u4e0d\u76f8\u5173\u7684\u5217\u548c\u90e8\u5206\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u901f - \u4e0d\u5e94\u8d85\u8fc7\u51e0\u79d2\u949f\uff08\u66f4\u597d\u7684\u4e9a\u79d2\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6b63\u786e - \u5931\u8d25\u5219\u529f\u80fd\u4e0d\u8d77\u4f5c\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u6027\u7684"))),(0,a.kt)("li",{parentName:"ul"},"\u9694\u79bb/\u65e0\u72b6\u6001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f9d\u8d56\u4e00\u4e9b\u73af\u5883\u7684\u4e1c\u897f"),(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u4e0d\u8981\u4f9d\u8d56\u65f6\u95f4"))))),(0,a.kt)("li",{parentName:"ul"},"\u5c1d\u8bd5\u8986\u76d6\u6781\u7aef\u60c5\u51b5(zeros / Nulls / empty sets / throwing exceptions)"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6d4b\u8bd5\u8be5\u67e5\u8be2\u8fd4\u56de\u9519\u8bef\uff0c\u60a8\u53ef\u4ee5\u5728\u67e5\u8be2\u540e\u6dfb\u52a0\u7279\u6b8a\u6ce8\u91ca\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"-- { serverError 60 }"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"-- { clientError 20 }")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5207\u6362\u6570\u636e\u5e93\uff08\u9664\u975e\u5fc5\u8981\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\uff0c\u60a8\u53ef\u4ee5\u5728\u540c\u4e00\u8282\u70b9\u4e0a\u521b\u5efa\u591a\u4e2a\u8868\u526f\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u5728\u9700\u8981\u65f6\u4f7f\u7528\u6d4b\u8bd5\u96c6\u7fa4\u5b9a\u4e49\u4e4b\u4e00\uff08\u8bf7\u53c2\u9605 system.clusters\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"numbers_mt")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"zeros")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"zeros_mt"),"\u548c\u7c7b\u4f3c\u7684\u67e5\u8be2\u8981\u5728\u9002\u7528\u65f6\u521d\u59cb\u5316\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6d4b\u8bd5\u4e4b\u540e\u548c\u6d4b\u8bd5\u4e4b\u524d\u6e05\u7406\u521b\u5efa\u7684\u5bf9\u8c61\uff08DROP IF EXISTS\uff09 - \u5728\u6709\u4e00\u4e9b\u810f\u72b6\u6001\u7684\u60c5\u51b5\u4e0b"),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u5148\u9009\u62e9\u540c\u6b65\u64cd\u4f5c\u6a21\u5f0f (mutations, merges)"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"0_stateless"),"\u6587\u4ef6\u5939\u4e2d\u7684\u5176\u4ed6SQL\u6587\u4ef6\u4e3a\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u60a8\u60f3\u8981\u6d4b\u8bd5\u7684\u7279\u6027/\u7279\u6027\u7ec4\u5408\u5c1a\u672a\u88ab\u73b0\u6709\u6d4b\u8bd5\u8986\u76d6")),(0,a.kt)("h4",{id:"\u6d4b\u8bd5\u547d\u540d\u89c4\u5219"},"\u6d4b\u8bd5\u547d\u540d\u89c4\u5219"),(0,a.kt)("p",null,"\u6b63\u786e\u5730\u547d\u540d\u6d4b\u8bd5\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728clickhouse-test\u8c03\u7528\u4e2d\u5173\u95ed\u4e00\u4e9b\u6d4b\u8bd5\u5b50\u96c6\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tester flag"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u540d\u79f0\u4e2d\u5e94\u8be5\u5305\u542b\u4ec0\u4e48"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u6dfb\u52a0\u6807\u5fd7"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--[no-]zookeeper")),(0,a.kt)("td",{parentName:"tr",align:null},'"zookeeper"\u6216"replica"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u4f7f\u7528\u6765\u81eaReplicatedMergeTree\u5bb6\u65cf\u7684\u8868"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--[no-]shard")),(0,a.kt)("td",{parentName:"tr",align:null},'"shard"\u6216"distributed"\u6216"global"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5230127.0.0.2\u6216\u7c7b\u4f3c\u7684\u8fde\u63a5\u8fdb\u884c\u6d4b\u8bd5"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--[no-]long")),(0,a.kt)("td",{parentName:"tr",align:null},'"long"\u6216"deadlock"\u6216"race"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u8fd0\u884c\u65f6\u95f4\u8d85\u8fc760\u79d2"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"commit--push--\u521b\u5efapr"},"Commit / push / \u521b\u5efaPR."),(0,a.kt)("p",null,"1) commit & push\u60a8\u7684\u4fee\u6539"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/workspace/ClickHouse\ngit add tests/queries/0_stateless/01521_dummy_test.sql\ngit add tests/queries/0_stateless/01521_dummy_test.reference\ngit commit # use some nice commit message when possible\ngit push origin HEAD\n")),(0,a.kt)("p",null,"2) \u4f7f\u7528\u4e00\u4e2a\u5728\u63a8\u9001\u8fc7\u7a0b\u4e2d\u663e\u793a\u7684\u94fe\u63a5\uff0c\u521b\u5efa\u4e00\u4e2a\u5230master\u7684PR\n3) \u8c03\u6574PR\u6807\u9898\u548c\u5185\u5bb9\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Changelog category (leave one)"),"\u4e2d\u4fdd\u7559\n",(0,a.kt)("inlineCode",{parentName:"p"},"Build/Testing/Packaging Improvement"),"\uff0c\u5982\u679c\u9700\u8981\uff0c\u8bf7\u586b\u5199\u5176\u4f59\u5b57\u6bb5\u3002"))}k.isMDXComponent=!0}}]);