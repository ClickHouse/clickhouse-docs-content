"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27666],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},I=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),I=c(t),m=a,g=I["".concat(s,".").concat(m)]||I[m]||u[m]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=I;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}I.displayName="MDXCreateElement"},57757:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:12,sidebar_label:"\u4f7f\u7528\u6559\u7a0b"},s="ClickHouse\u6559\u7a0b",c={unversionedId:"zh/getting-started/tutorial",id:"zh/getting-started/tutorial",title:"ClickHouse\u6559\u7a0b",description:"clickhouse-tutorial}",source:"@site/docs/zh/getting-started/tutorial.md",sourceDirName:"zh/getting-started",slug:"/zh/getting-started/tutorial",permalink:"/zh/getting-started/tutorial",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/getting-started/tutorial.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"\u4f7f\u7528\u6559\u7a0b"},sidebar:"chinese",previous:{title:"UK Property Price Paid",permalink:"/zh/getting-started/example-datasets/uk-price-paid"},next:{title:"\u4f53\u9a8c\u5e73\u53f0",permalink:"/zh/getting-started/playground"}},p={},u=[{value:"\u4ece\u672c\u6559\u7a0b\u4e2d\u53ef\u4ee5\u83b7\u5f97\u4ec0\u4e48\uff1f",id:"what-to-expect-from-this-tutorial",level:2},{value:"\u5355\u8282\u70b9\u8bbe\u7f6e",id:"single-node-setup",level:2},{value:"\u5bfc\u5165\u793a\u4f8b\u6570\u636e\u96c6",id:"import-sample-dataset",level:2},{value:"\u4e0b\u8f7d\u5e76\u63d0\u53d6\u8868\u6570\u636e",id:"download-and-extract-table-data",level:3},{value:"\u521b\u5efa\u8868",id:"create-tables",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"import-data",level:3},{value:"\u67e5\u8be2\u793a\u4f8b",id:"example-queries",level:2},{value:"\u96c6\u7fa4\u90e8\u7f72",id:"cluster-deployment",level:2}],I={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouse-tutorial"},"ClickHouse\u6559\u7a0b"),(0,i.kt)("h2",{id:"what-to-expect-from-this-tutorial"},"\u4ece\u672c\u6559\u7a0b\u4e2d\u53ef\u4ee5\u83b7\u5f97\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u901a\u8fc7\u5b66\u4e60\u672c\u6559\u7a0b\uff0c\u60a8\u5c06\u4e86\u89e3\u5982\u4f55\u8bbe\u7f6e\u4e00\u4e2a\u7b80\u5355\u7684ClickHouse\u96c6\u7fa4\u3002\u5b83\u4f1a\u5f88\u5c0f\uff0c\u4f46\u662f\u53ef\u4ee5\u5bb9\u9519\u548c\u6269\u5c55\u3002\u7136\u540e\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2a\u793a\u4f8b\u6570\u636e\u96c6\u6765\u586b\u5145\u6570\u636e\u5e76\u6267\u884c\u4e00\u4e9b\u6f14\u793a\u67e5\u8be2\u3002"),(0,i.kt)("h2",{id:"single-node-setup"},"\u5355\u8282\u70b9\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5ef6\u8fdf\u6f14\u793a\u5206\u5e03\u5f0f\u73af\u5883\u7684\u590d\u6742\u6027\uff0c\u6211\u4eec\u5c06\u9996\u5148\u5728\u5355\u4e2a\u670d\u52a1\u5668\u6216\u865a\u62df\u673a\u4e0a\u90e8\u7f72ClickHouse\u3002ClickHouse\u901a\u5e38\u662f\u4ece",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/install#install-from-deb-packages"},"deb"),"\u6216",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/install#from-rpm-packages"},"rpm"),"\u5305\u5b89\u88c5\uff0c\u4f46\u5bf9\u4e8e\u4e0d\u652f\u6301\u5b83\u4eec\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u6709",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/install#from-docker-image"},"\u5176\u4ed6\u65b9\u6cd5"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u60a8\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"deb"),"\u5b89\u88c5\u5305\uff0c\u6267\u884c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{% include 'install/deb.sh' %}\n")),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u5b89\u88c5\u7684\u8f6f\u4ef6\u4e2d\u5305\u542b\u8fd9\u4e9b\u5305:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-client")," \u5305\uff0c\u5305\u542b",(0,i.kt)("a",{parentName:"li",href:"/zh/interfaces/cli"},"clickhouse-client"),"\u5ba2\u6237\u7aef\uff0c\u5b83\u662f\u4ea4\u4e92\u5f0fClickHouse\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-common")," \u5305\uff0c\u5305\u542b\u4e00\u4e2aClickHouse\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clickhouse-server")," \u5305\uff0c\u5305\u542b\u8981\u4f5c\u4e3a\u670d\u52a1\u7aef\u8fd0\u884c\u7684ClickHouse\u914d\u7f6e\u6587\u4ef6\u3002")),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/"),"\u3002\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u6ce8\u610f",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"<path>"),"\u5143\u7d20\u3002\u5b83\u51b3\u5b9a\u4e86\u6570\u636e\u5b58\u50a8\u7684\u4f4d\u7f6e\uff0c\u56e0\u6b64\u5b83\u5e94\u8be5\u4f4d\u4e8e\u78c1\u76d8\u5bb9\u91cf\u7684\u5377\u4e0a;\u9ed8\u8ba4\u503c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/"),"\u3002\u5982\u679c\u4f60\u60f3\u8c03\u6574\u914d\u7f6e\uff0c\u76f4\u63a5\u7f16\u8f91config\u662f\u4e0d\u65b9\u4fbf\u7684\u3002\u8003\u8651\u5230\u5b83\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u7684\u5305\u66f4\u65b0\u4e2d\u88ab\u91cd\u5199\u3002\u5efa\u8bae\u91cd\u5199\u914d\u7f6e\u5143\u7d20\u7684\u65b9\u6cd5\u662f\u5728\u914d\u7f6e\u4e2d\u521b\u5efa",(0,i.kt)("a",{parentName:"p",href:"/zh/operations/configuration-files"},"config.d\u6587\u4ef6\u5939"),"\uff0c\u4f5c\u4e3aconfig.xml\u7684\u91cd\u5199\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86,",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"\u5b89\u88c5\u540e\u4e0d\u4f1a\u81ea\u52a8\u542f\u52a8\u3002 \u5b83\u4e5f\u4e0d\u4f1a\u5728\u66f4\u65b0\u540e\u81ea\u52a8\u91cd\u65b0\u542f\u52a8\u3002 \u60a8\u542f\u52a8\u670d\u52a1\u7aef\u7684\u65b9\u5f0f\u53d6\u51b3\u4e8e\u60a8\u7684\u521d\u59cb\u7cfb\u7edf\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u662f\u8fd9\u6837:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service clickhouse-server start\n")),(0,i.kt)("p",null,"\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/init.d/clickhouse-server start\n")),(0,i.kt)("p",null,"\u670d\u52a1\u7aef\u65e5\u5fd7\u7684\u9ed8\u8ba4\u4f4d\u7f6e\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/"),"\u3002\u5f53\u670d\u52a1\u7aef\u5728\u65e5\u5fd7\u4e2d\u8bb0\u5f55",(0,i.kt)("inlineCode",{parentName:"p"},"Ready for connections"),"\u6d88\u606f\uff0c\u5373\u8868\u793a\u670d\u52a1\u7aef\u5df2\u51c6\u5907\u597d\u5904\u7406\u5ba2\u6237\u7aef\u8fde\u63a5\u3002"),(0,i.kt)("p",null,"\u4e00\u65e6",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"\u542f\u52a8\u5e76\u8fd0\u884c\uff0c\u6211\u4eec\u53ef\u4ee5\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u8fde\u63a5\u5230\u670d\u52a1\u7aef\uff0c\u5e76\u8fd0\u884c\u4e00\u4e9b\u6d4b\u8bd5\u67e5\u8be2\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},'SELECT "Hello, world!";'),"."),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"Clickhouse-client\u7684\u5feb\u901f\u63d0\u793a"),(0,i.kt)("p",null,"\u4ea4\u4e92\u6a21\u5f0f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client\nclickhouse-client --host=... --port=... --user=... --password=...\n")),(0,i.kt)("p",null,"\u542f\u7528\u591a\u884c\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client -m\nclickhouse-client --multiline\n")),(0,i.kt)("p",null,"\u4ee5\u6279\u5904\u7406\u6a21\u5f0f\u8fd0\u884c\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --query='SELECT 1'\necho 'SELECT 1' | clickhouse-client\nclickhouse-client <<< 'SELECT 1'\n")),(0,i.kt)("p",null,"\u4ece\u6307\u5b9a\u683c\u5f0f\u7684\u6587\u4ef6\u4e2d\u63d2\u5165\u6570\u636e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-client --query='INSERT INTO table VALUES' < data.txt\nclickhouse-client --query='INSERT INTO table FORMAT TabSeparated' < data.tsv\n"))),(0,i.kt)("h2",{id:"import-sample-dataset"},"\u5bfc\u5165\u793a\u4f8b\u6570\u636e\u96c6"),(0,i.kt)("p",null,"\u73b0\u5728\u662f\u65f6\u5019\u7528\u4e00\u4e9b\u793a\u4f8b\u6570\u636e\u586b\u5145\u6211\u4eec\u7684ClickHouse\u670d\u52a1\u7aef\u3002 \u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Yandex.Metrica\u7684\u533f\u540d\u6570\u636e\uff0c\u5b83\u662f\u5728ClickHouse\u6210\u4e3a\u5f00\u6e90\u4e4b\u524d\u4f5c\u4e3a\u751f\u4ea7\u73af\u5883\u8fd0\u884c\u7684\u7b2c\u4e00\u4e2a\u670d\u52a1\uff08\u5173\u4e8e\u8fd9\u4e00\u70b9\u7684\u66f4\u591a\u5185\u5bb9\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/introduction/history"},"ClickHouse\u5386\u53f2"),")\u3002",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/example-datasets/metrica"},"\u591a\u79cd\u5bfc\u5165Yandex.Metrica\u6570\u636e\u96c6\u65b9\u6cd5"),"\uff0c\u4e3a\u4e86\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u6700\u73b0\u5b9e\u7684\u4e00\u4e2a\u3002"),(0,i.kt)("h3",{id:"download-and-extract-table-data"},"\u4e0b\u8f7d\u5e76\u63d0\u53d6\u8868\u6570\u636e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz | unxz --threads=`nproc` > hits_v1.tsv\ncurl https://datasets.clickhouse.com/visits/tsv/visits_v1.tsv.xz | unxz --threads=`nproc` > visits_v1.tsv\n")),(0,i.kt)("p",null,"\u63d0\u53d6\u7684\u6587\u4ef6\u5927\u5c0f\u7ea6\u4e3a10GB\u3002"),(0,i.kt)("h3",{id:"create-tables"},"\u521b\u5efa\u8868"),(0,i.kt)("p",null,"\u4e0e\u5927\u591a\u6570\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e00\u6837\uff0cClickHouse\u5728\u903b\u8f91\u4e0a\u5c06\u8868\u5206\u7ec4\u4e3a\u6570\u636e\u5e93\u3002\u5305\u542b\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"\u6570\u636e\u5e93\uff0c\u4f46\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u5e93",(0,i.kt)("inlineCode",{parentName:"p"},"tutorial"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "CREATE DATABASE IF NOT EXISTS tutorial"\n')),(0,i.kt)("p",null,"\u4e0e\u521b\u5efa\u6570\u636e\u5e93\u76f8\u6bd4\uff0c\u521b\u5efa\u8868\u7684\u8bed\u6cd5\u8981\u590d\u6742\u5f97\u591a\uff08\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create"},"\u53c2\u8003\u8d44\u6599"),". \u4e00\u822c",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u58f0\u660e\u5fc5\u987b\u6307\u5b9a\u4e09\u4e2a\u5173\u952e\u7684\u4e8b\u60c5:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8981\u521b\u5efa\u7684\u8868\u7684\u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8868\u7ed3\u6784\uff0c\u4f8b\u5982\uff1a\u5217\u540d\u548c\u5bf9\u5e94\u7684",(0,i.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/"},"\u6570\u636e\u7c7b\u578b"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/"},"\u8868\u5f15\u64ce"),"\u53ca\u5176\u8bbe\u7f6e\uff0c\u8fd9\u51b3\u5b9a\u4e86\u5bf9\u6b64\u8868\u7684\u67e5\u8be2\u64cd\u4f5c\u662f\u5982\u4f55\u5728\u7269\u7406\u5c42\u9762\u6267\u884c\u7684\u6240\u6709\u7ec6\u8282\u3002")),(0,i.kt)("p",null,"Yandex.Metrica\u662f\u4e00\u4e2a\u7f51\u7edc\u5206\u6790\u670d\u52a1\uff0c\u6837\u672c\u6570\u636e\u96c6\u4e0d\u5305\u62ec\u5176\u5168\u90e8\u529f\u80fd\uff0c\u56e0\u6b64\u53ea\u6709\u4e24\u4e2a\u8868\u53ef\u4ee5\u521b\u5efa:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hits")," \u8868\u5305\u542b\u6240\u6709\u7528\u6237\u5728\u670d\u52a1\u6240\u6db5\u76d6\u7684\u6240\u6709\u7f51\u7ad9\u4e0a\u5b8c\u6210\u7684\u6bcf\u4e2a\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visits")," \u8868\u5305\u542b\u9884\u5148\u6784\u5efa\u7684\u4f1a\u8bdd\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5e76\u6267\u884c\u8fd9\u4e9b\u8868\u7684\u5b9e\u9645\u521b\u5efa\u8868\u67e5\u8be2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial.hits_v1\n(\n    `WatchID` UInt64,\n    `JavaEnable` UInt8,\n    `Title` String,\n    `GoodEvent` Int16,\n    `EventTime` DateTime,\n    `EventDate` Date,\n    `CounterID` UInt32,\n    `ClientIP` UInt32,\n    `ClientIP6` FixedString(16),\n    `RegionID` UInt32,\n    `UserID` UInt64,\n    `CounterClass` Int8,\n    `OS` UInt8,\n    `UserAgent` UInt8,\n    `URL` String,\n    `Referer` String,\n    `URLDomain` String,\n    `RefererDomain` String,\n    `Refresh` UInt8,\n    `IsRobot` UInt8,\n    `RefererCategories` Array(UInt16),\n    `URLCategories` Array(UInt16),\n    `URLRegions` Array(UInt32),\n    `RefererRegions` Array(UInt32),\n    `ResolutionWidth` UInt16,\n    `ResolutionHeight` UInt16,\n    `ResolutionDepth` UInt8,\n    `FlashMajor` UInt8,\n    `FlashMinor` UInt8,\n    `FlashMinor2` String,\n    `NetMajor` UInt8,\n    `NetMinor` UInt8,\n    `UserAgentMajor` UInt16,\n    `UserAgentMinor` FixedString(2),\n    `CookieEnable` UInt8,\n    `JavascriptEnable` UInt8,\n    `IsMobile` UInt8,\n    `MobilePhone` UInt8,\n    `MobilePhoneModel` String,\n    `Params` String,\n    `IPNetworkID` UInt32,\n    `TraficSourceID` Int8,\n    `SearchEngineID` UInt16,\n    `SearchPhrase` String,\n    `AdvEngineID` UInt8,\n    `IsArtifical` UInt8,\n    `WindowClientWidth` UInt16,\n    `WindowClientHeight` UInt16,\n    `ClientTimeZone` Int16,\n    `ClientEventTime` DateTime,\n    `SilverlightVersion1` UInt8,\n    `SilverlightVersion2` UInt8,\n    `SilverlightVersion3` UInt32,\n    `SilverlightVersion4` UInt16,\n    `PageCharset` String,\n    `CodeVersion` UInt32,\n    `IsLink` UInt8,\n    `IsDownload` UInt8,\n    `IsNotBounce` UInt8,\n    `FUniqID` UInt64,\n    `HID` UInt32,\n    `IsOldCounter` UInt8,\n    `IsEvent` UInt8,\n    `IsParameter` UInt8,\n    `DontCountHits` UInt8,\n    `WithHash` UInt8,\n    `HitColor` FixedString(1),\n    `UTCEventTime` DateTime,\n    `Age` UInt8,\n    `Sex` UInt8,\n    `Income` UInt8,\n    `Interests` UInt16,\n    `Robotness` UInt8,\n    `GeneralInterests` Array(UInt16),\n    `RemoteIP` UInt32,\n    `RemoteIP6` FixedString(16),\n    `WindowName` Int32,\n    `OpenerName` Int32,\n    `HistoryLength` Int16,\n    `BrowserLanguage` FixedString(2),\n    `BrowserCountry` FixedString(2),\n    `SocialNetwork` String,\n    `SocialAction` String,\n    `HTTPError` UInt16,\n    `SendTiming` Int32,\n    `DNSTiming` Int32,\n    `ConnectTiming` Int32,\n    `ResponseStartTiming` Int32,\n    `ResponseEndTiming` Int32,\n    `FetchTiming` Int32,\n    `RedirectTiming` Int32,\n    `DOMInteractiveTiming` Int32,\n    `DOMContentLoadedTiming` Int32,\n    `DOMCompleteTiming` Int32,\n    `LoadEventStartTiming` Int32,\n    `LoadEventEndTiming` Int32,\n    `NSToDOMContentLoadedTiming` Int32,\n    `FirstPaintTiming` Int32,\n    `RedirectCount` Int8,\n    `SocialSourceNetworkID` UInt8,\n    `SocialSourcePage` String,\n    `ParamPrice` Int64,\n    `ParamOrderID` String,\n    `ParamCurrency` FixedString(3),\n    `ParamCurrencyID` UInt16,\n    `GoalsReached` Array(UInt32),\n    `OpenstatServiceName` String,\n    `OpenstatCampaignID` String,\n    `OpenstatAdID` String,\n    `OpenstatSourceID` String,\n    `UTMSource` String,\n    `UTMMedium` String,\n    `UTMCampaign` String,\n    `UTMContent` String,\n    `UTMTerm` String,\n    `FromTag` String,\n    `HasGCLID` UInt8,\n    `RefererHash` UInt64,\n    `URLHash` UInt64,\n    `CLID` UInt32,\n    `YCLID` UInt64,\n    `ShareService` String,\n    `ShareURL` String,\n    `ShareTitle` String,\n    `ParsedParams` Nested(\n        Key1 String,\n        Key2 String,\n        Key3 String,\n        Key4 String,\n        Key5 String,\n        ValueDouble Float64),\n    `IslandID` FixedString(16),\n    `RequestNum` UInt32,\n    `RequestTry` UInt8\n)\nENGINE = MergeTree()\nPARTITION BY toYYYYMM(EventDate)\nORDER BY (CounterID, EventDate, intHash32(UserID))\nSAMPLE BY intHash32(UserID)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial.visits_v1\n(\n    `CounterID` UInt32,\n    `StartDate` Date,\n    `Sign` Int8,\n    `IsNew` UInt8,\n    `VisitID` UInt64,\n    `UserID` UInt64,\n    `StartTime` DateTime,\n    `Duration` UInt32,\n    `UTCStartTime` DateTime,\n    `PageViews` Int32,\n    `Hits` Int32,\n    `IsBounce` UInt8,\n    `Referer` String,\n    `StartURL` String,\n    `RefererDomain` String,\n    `StartURLDomain` String,\n    `EndURL` String,\n    `LinkURL` String,\n    `IsDownload` UInt8,\n    `TraficSourceID` Int8,\n    `SearchEngineID` UInt16,\n    `SearchPhrase` String,\n    `AdvEngineID` UInt8,\n    `PlaceID` Int32,\n    `RefererCategories` Array(UInt16),\n    `URLCategories` Array(UInt16),\n    `URLRegions` Array(UInt32),\n    `RefererRegions` Array(UInt32),\n    `IsYandex` UInt8,\n    `GoalReachesDepth` Int32,\n    `GoalReachesURL` Int32,\n    `GoalReachesAny` Int32,\n    `SocialSourceNetworkID` UInt8,\n    `SocialSourcePage` String,\n    `MobilePhoneModel` String,\n    `ClientEventTime` DateTime,\n    `RegionID` UInt32,\n    `ClientIP` UInt32,\n    `ClientIP6` FixedString(16),\n    `RemoteIP` UInt32,\n    `RemoteIP6` FixedString(16),\n    `IPNetworkID` UInt32,\n    `SilverlightVersion3` UInt32,\n    `CodeVersion` UInt32,\n    `ResolutionWidth` UInt16,\n    `ResolutionHeight` UInt16,\n    `UserAgentMajor` UInt16,\n    `UserAgentMinor` UInt16,\n    `WindowClientWidth` UInt16,\n    `WindowClientHeight` UInt16,\n    `SilverlightVersion2` UInt8,\n    `SilverlightVersion4` UInt16,\n    `FlashVersion3` UInt16,\n    `FlashVersion4` UInt16,\n    `ClientTimeZone` Int16,\n    `OS` UInt8,\n    `UserAgent` UInt8,\n    `ResolutionDepth` UInt8,\n    `FlashMajor` UInt8,\n    `FlashMinor` UInt8,\n    `NetMajor` UInt8,\n    `NetMinor` UInt8,\n    `MobilePhone` UInt8,\n    `SilverlightVersion1` UInt8,\n    `Age` UInt8,\n    `Sex` UInt8,\n    `Income` UInt8,\n    `JavaEnable` UInt8,\n    `CookieEnable` UInt8,\n    `JavascriptEnable` UInt8,\n    `IsMobile` UInt8,\n    `BrowserLanguage` UInt16,\n    `BrowserCountry` UInt16,\n    `Interests` UInt16,\n    `Robotness` UInt8,\n    `GeneralInterests` Array(UInt16),\n    `Params` Array(String),\n    `Goals` Nested(\n        ID UInt32,\n        Serial UInt32,\n        EventTime DateTime,\n        Price Int64,\n        OrderID String,\n        CurrencyID UInt32),\n    `WatchIDs` Array(UInt64),\n    `ParamSumPrice` Int64,\n    `ParamCurrency` FixedString(3),\n    `ParamCurrencyID` UInt16,\n    `ClickLogID` UInt64,\n    `ClickEventID` Int32,\n    `ClickGoodEvent` Int32,\n    `ClickEventTime` DateTime,\n    `ClickPriorityID` Int32,\n    `ClickPhraseID` Int32,\n    `ClickPageID` Int32,\n    `ClickPlaceID` Int32,\n    `ClickTypeID` Int32,\n    `ClickResourceID` Int32,\n    `ClickCost` UInt32,\n    `ClickClientIP` UInt32,\n    `ClickDomainID` UInt32,\n    `ClickURL` String,\n    `ClickAttempt` UInt8,\n    `ClickOrderID` UInt32,\n    `ClickBannerID` UInt32,\n    `ClickMarketCategoryID` UInt32,\n    `ClickMarketPP` UInt32,\n    `ClickMarketCategoryName` String,\n    `ClickMarketPPName` String,\n    `ClickAWAPSCampaignName` String,\n    `ClickPageName` String,\n    `ClickTargetType` UInt16,\n    `ClickTargetPhraseID` UInt64,\n    `ClickContextType` UInt8,\n    `ClickSelectType` Int8,\n    `ClickOptions` String,\n    `ClickGroupBannerID` Int32,\n    `OpenstatServiceName` String,\n    `OpenstatCampaignID` String,\n    `OpenstatAdID` String,\n    `OpenstatSourceID` String,\n    `UTMSource` String,\n    `UTMMedium` String,\n    `UTMCampaign` String,\n    `UTMContent` String,\n    `UTMTerm` String,\n    `FromTag` String,\n    `HasGCLID` UInt8,\n    `FirstVisit` DateTime,\n    `PredLastVisit` Date,\n    `LastVisit` Date,\n    `TotalVisits` UInt32,\n    `TraficSource` Nested(\n        ID Int8,\n        SearchEngineID UInt16,\n        AdvEngineID UInt8,\n        PlaceID UInt16,\n        SocialSourceNetworkID UInt8,\n        Domain String,\n        SearchPhrase String,\n        SocialSourcePage String),\n    `Attendance` FixedString(16),\n    `CLID` UInt32,\n    `YCLID` UInt64,\n    `NormalizedRefererHash` UInt64,\n    `SearchPhraseHash` UInt64,\n    `RefererDomainHash` UInt64,\n    `NormalizedStartURLHash` UInt64,\n    `StartURLDomainHash` UInt64,\n    `NormalizedEndURLHash` UInt64,\n    `TopLevelDomain` UInt64,\n    `URLScheme` UInt64,\n    `OpenstatServiceNameHash` UInt64,\n    `OpenstatCampaignIDHash` UInt64,\n    `OpenstatAdIDHash` UInt64,\n    `OpenstatSourceIDHash` UInt64,\n    `UTMSourceHash` UInt64,\n    `UTMMediumHash` UInt64,\n    `UTMCampaignHash` UInt64,\n    `UTMContentHash` UInt64,\n    `UTMTermHash` UInt64,\n    `FromHash` UInt64,\n    `WebVisorEnabled` UInt8,\n    `WebVisorActivity` UInt32,\n    `ParsedParams` Nested(\n        Key1 String,\n        Key2 String,\n        Key3 String,\n        Key4 String,\n        Key5 String,\n        ValueDouble Float64),\n    `Market` Nested(\n        Type UInt8,\n        GoalID UInt32,\n        OrderID String,\n        OrderPrice Int64,\n        PP UInt32,\n        DirectPlaceID UInt32,\n        DirectOrderID UInt32,\n        DirectBannerID UInt32,\n        GoodID String,\n        GoodName String,\n        GoodQuantity Int32,\n        GoodPrice Int64),\n    `IslandID` FixedString(16)\n)\nENGINE = CollapsingMergeTree(Sign)\nPARTITION BY toYYYYMM(StartDate)\nORDER BY (CounterID, StartDate, intHash32(UserID), VisitID)\nSAMPLE BY intHash32(UserID)\n")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\u7684\u4ea4\u4e92\u6a21\u5f0f\u6267\u884c\u8fd9\u4e9b\u67e5\u8be2\uff08\u53ea\u9700\u5728\u7ec8\u7aef\u4e2d\u542f\u52a8\u5b83\uff0c\u800c\u4e0d\u9700\u8981\u63d0\u524d\u6307\u5b9a\u67e5\u8be2\uff09\u3002\u6216\u8005\u5982\u679c\u4f60\u613f\u610f\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e9b",(0,i.kt)("a",{parentName:"p",href:"/zh/interfaces/"},"\u66ff\u4ee3\u63a5\u53e3"),"\u3002"),(0,i.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u6240\u770b\u5230\u7684, ",(0,i.kt)("inlineCode",{parentName:"p"},"hits_v1"),"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree\u5f15\u64ce"),"\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"visits_v1"),"\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/collapsingmergetree"},"Collapsing"),"\u5f15\u64ce\u3002"),(0,i.kt)("h3",{id:"import-data"},"\u5bfc\u5165\u6570\u636e"),(0,i.kt)("p",null,"\u6570\u636e\u5bfc\u5165\u5230ClickHouse\u662f\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/insert-into"},"INSERT INTO"),"\u65b9\u5f0f\u5b8c\u6210\u7684\uff0c\u67e5\u8be2\u7c7b\u4f3c\u8bb8\u591aSQL\u6570\u636e\u5e93\u3002\u7136\u800c\uff0c\u6570\u636e\u901a\u5e38\u662f\u5728\u4e00\u4e2a\u63d0\u4f9b",(0,i.kt)("a",{parentName:"p",href:"/zh/interfaces/formats"},"\u652f\u6301\u5e8f\u5217\u5316\u683c\u5f0f"),"\u800c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"VALUES"),"\u5b50\u53e5\uff08\u4e5f\u652f\u6301\uff09\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4e4b\u524d\u4e0b\u8f7d\u7684\u6587\u4ef6\u662f\u4ee5\u5236\u8868\u7b26\u5206\u9694\u7684\u683c\u5f0f\uff0c\u6240\u4ee5\u8fd9\u91cc\u662f\u5982\u4f55\u901a\u8fc7\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\u5bfc\u5165\u5b83\u4eec:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "INSERT INTO tutorial.hits_v1 FORMAT TSV" --max_insert_block_size=100000 < hits_v1.tsv\nclickhouse-client --query "INSERT INTO tutorial.visits_v1 FORMAT TSV" --max_insert_block_size=100000 < visits_v1.tsv\n')),(0,i.kt)("p",null,"ClickHouse\u6709\u5f88\u591a",(0,i.kt)("a",{parentName:"p",href:"/zh/operations/settings/"},"\u8981\u8c03\u6574\u7684\u8bbe\u7f6e"),"\u5728\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\u4e2d\u6307\u5b9a\u5b83\u4eec\u7684\u4e00\u79cd\u65b9\u6cd5\u662f\u901a\u8fc7\u53c2\u6570\uff0c\u5c31\u50cf\u6211\u4eec\u770b\u5230\u4e0a\u9762\u8bed\u53e5\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"--max_insert_block_size"),"\u3002\u627e\u51fa\u53ef\u7528\u7684\u8bbe\u7f6e\u3001\u542b\u4e49\u53ca\u5176\u9ed8\u8ba4\u503c\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u67e5\u8be2",(0,i.kt)("inlineCode",{parentName:"p"},"system.settings")," \u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, value, changed, description\nFROM system.settings\nWHERE name LIKE '%max_insert_b%'\nFORMAT TSV\n\nmax_insert_block_size    1048576    0    \"The maximum block size for insertion, if we control the creation of blocks for insertion.\"\n")),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/misc#misc_operations-optimize"},"OPTIMIZE"),"\u5bfc\u5165\u540e\u7684\u8868\u3002\u4f7f\u7528MergeTree-family\u5f15\u64ce\u914d\u7f6e\u7684\u8868\u603b\u662f\u5728\u540e\u53f0\u5408\u5e76\u6570\u636e\u90e8\u5206\u4ee5\u4f18\u5316\u6570\u636e\u5b58\u50a8\uff08\u6216\u81f3\u5c11\u68c0\u67e5\u662f\u5426\u6709\u610f\u4e49\uff09\u3002 \u8fd9\u4e9b\u67e5\u8be2\u5f3a\u5236\u8868\u5f15\u64ce\u7acb\u5373\u8fdb\u884c\u5b58\u50a8\u4f18\u5316\uff0c\u800c\u4e0d\u662f\u7a0d\u540e\u4e00\u6bb5\u65f6\u95f4\u6267\u884c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "OPTIMIZE TABLE tutorial.hits_v1 FINAL"\nclickhouse-client --query "OPTIMIZE TABLE tutorial.visits_v1 FINAL"\n')),(0,i.kt)("p",null,"\u8fd9\u4e9b\u67e5\u8be2\u5f00\u59cbI/O\u548cCPU\u5bc6\u96c6\u578b\u64cd\u4f5c\uff0c\u6240\u4ee5\u5982\u679c\u8868\u4e00\u76f4\u63a5\u6536\u5230\u65b0\u6570\u636e\uff0c\u6700\u597d\u4e0d\u8981\u7ba1\u5b83\uff0c\u8ba9\u5408\u5e76\u5728\u540e\u53f0\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u8868\u5bfc\u5165\u662f\u5426\u6210\u529f:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'clickhouse-client --query "SELECT COUNT(*) FROM tutorial.hits_v1"\nclickhouse-client --query "SELECT COUNT(*) FROM tutorial.visits_v1"\n')),(0,i.kt)("h2",{id:"example-queries"},"\u67e5\u8be2\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    StartURL AS URL,\n    AVG(Duration) AS AvgDuration\nFROM tutorial.visits_v1\nWHERE StartDate BETWEEN '2014-03-23' AND '2014-03-30'\nGROUP BY URL\nORDER BY AvgDuration DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    sum(Sign) AS visits,\n    sumIf(Sign, has(Goals.ID, 1105530)) AS goal_visits,\n    (100. * goal_visits) / visits AS goal_percent\nFROM tutorial.visits_v1\nWHERE (CounterID = 912887) AND (toYYYYMM(StartDate) = 201403) AND (domain(StartURL) = 'yandex.ru')\n")),(0,i.kt)("h2",{id:"cluster-deployment"},"\u96c6\u7fa4\u90e8\u7f72"),(0,i.kt)("p",null,"ClickHouse\u96c6\u7fa4\u662f\u4e00\u4e2a\u540c\u8d28\u96c6\u7fa4\u3002 \u8bbe\u7f6e\u6b65\u9aa4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u7fa4\u96c6\u7684\u6240\u6709\u673a\u5668\u4e0a\u5b89\u88c5ClickHouse\u670d\u52a1\u7aef"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u96c6\u7fa4\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u6bcf\u4e2a\u5b9e\u4f8b\u4e0a\u521b\u5efa\u672c\u5730\u8868"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/distributed"},"\u5206\u5e03\u5f0f\u8868"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/special/distributed"},"\u5206\u5e03\u5f0f\u8868"),"\u5b9e\u9645\u4e0a\u662f\u4e00\u79cd",(0,i.kt)("inlineCode",{parentName:"p"},"view"),"\uff0c\u6620\u5c04\u5230ClickHouse\u96c6\u7fa4\u7684\u672c\u5730\u8868\u3002 \u4ece\u5206\u5e03\u5f0f\u8868\u4e2d\u6267\u884c",(0,i.kt)("strong",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u4f1a\u4f7f\u7528\u96c6\u7fa4\u6240\u6709\u5206\u7247\u7684\u8d44\u6e90\u3002 \u60a8\u53ef\u4ee5\u4e3a\u591a\u4e2a\u96c6\u7fa4\u6307\u5b9aconfigs\uff0c\u5e76\u521b\u5efa\u591a\u4e2a\u5206\u5e03\u5f0f\u8868\uff0c\u4e3a\u4e0d\u540c\u7684\u96c6\u7fa4\u63d0\u4f9b\u89c6\u56fe\u3002"),(0,i.kt)("p",null,"\u5177\u6709\u4e09\u4e2a\u5206\u7247\uff0c\u6bcf\u4e2a\u5206\u7247\u4e00\u4e2a\u526f\u672c\u7684\u96c6\u7fa4\u7684\u793a\u4f8b\u914d\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<remote_servers>\n    <perftest_3shards_1replicas>\n        <shard>\n            <replica>\n                <host>example-perftest01j.yandex.ru</host>\n                <port>9000</port>\n            </replica>\n        </shard>\n        <shard>\n            <replica>\n                <host>example-perftest02j.yandex.ru</host>\n                <port>9000</port>\n            </replica>\n        </shard>\n        <shard>\n            <replica>\n                <host>example-perftest03j.yandex.ru</host>\n                <port>9000</port>\n            </replica>\n        </shard>\n    </perftest_3shards_1replicas>\n</remote_servers>\n")),(0,i.kt)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u6f14\u793a\uff0c\u8ba9\u6211\u4eec\u4f7f\u7528\u548c\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"hits_v1"),"\u8868\u76f8\u540c\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),"\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u672c\u5730\u8868\uff0c\u4f46\u8868\u540d\u4e0d\u540c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial.hits_local (...) ENGINE = MergeTree() ...\n")),(0,i.kt)("p",null,"\u521b\u5efa\u63d0\u4f9b\u96c6\u7fa4\u672c\u5730\u8868\u89c6\u56fe\u7684\u5206\u5e03\u5f0f\u8868:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial.hits_all AS tutorial.hits_local\nENGINE = Distributed(perftest_3shards_1replicas, tutorial, hits_local, rand());\n")),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u5728\u96c6\u7fa4\u7684\u6240\u6709\u8ba1\u7b97\u673a\u4e0a\u521b\u5efa\u7c7b\u4f3c\u7684\u5206\u5e03\u5f0f\u8868\u3002 \u5b83\u5141\u8bb8\u5728\u7fa4\u96c6\u7684\u4efb\u4f55\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u5206\u5e03\u5f0f\u67e5\u8be2\u3002 \u8fd8\u6709\u4e00\u4e2a\u66ff\u4ee3\u9009\u9879\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e3a\u7ed9\u5b9a\u7684SELECT\u67e5\u8be2\u521b\u5efa\u4e34\u65f6\u5206\u5e03\u5f0f\u8868",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/table-functions/remote"},"\u8fdc\u7a0b"),"\u8868\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u8fd0\u884c",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/insert-into"},"INSERT SELECT"),"\u5c06\u8be5\u8868\u4f20\u64ad\u5230\u591a\u4e2a\u670d\u52a1\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tutorial.hits_all SELECT * FROM tutorial.hits_v1;\n")),(0,i.kt)("p",null,'!!! warning "\u6ce8\u610f:"\n\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u9002\u5408\u5927\u578b\u8868\u7684\u5206\u7247\u3002 \u6709\u4e00\u4e2a\u5355\u72ec\u7684\u5de5\u5177 ',(0,i.kt)("a",{parentName:"p",href:"/zh/operations/utilities/clickhouse-copier"},"clickhouse-copier")," \u8fd9\u53ef\u4ee5\u91cd\u65b0\u5206\u7247\u4efb\u610f\u5927\u8868\u3002"),(0,i.kt)("p",null,"\u6b63\u5982\u60a8\u6240\u671f\u671b\u7684\u90a3\u6837\uff0c\u5982\u679c\u8ba1\u7b97\u91cf\u5927\u7684\u67e5\u8be2\u4f7f\u75283\u53f0\u670d\u52a1\u5668\u800c\u4e0d\u662f\u4e00\u4e2a\uff0c\u5219\u8fd0\u884c\u901f\u5ea6\u5febN\u500d\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u5177\u67093\u4e2a\u5206\u7247\u7684\u96c6\u7fa4\uff0c\u6bcf\u4e2a\u5206\u7247\u90fd\u5305\u542b\u4e00\u4e2a\u526f\u672c\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u63d0\u4f9b\u5f39\u6027\uff0c\u6211\u4eec\u5efa\u8bae\u6bcf\u4e2a\u5206\u7247\u5e94\u5305\u542b\u5206\u5e03\u5728\u591a\u4e2a\u53ef\u7528\u533a\u6216\u6570\u636e\u4e2d\u5fc3\uff08\u6216\u81f3\u5c11\u673a\u67b6\uff09\u4e4b\u95f4\u76842-3\u4e2a\u526f\u672c\u3002 \u8bf7\u6ce8\u610f\uff0cClickHouse\u652f\u6301\u65e0\u9650\u6570\u91cf\u7684\u526f\u672c\u3002"),(0,i.kt)("p",null,"\u5305\u542b\u4e09\u4e2a\u526f\u672c\u7684\u4e00\u4e2a\u5206\u7247\u96c6\u7fa4\u7684\u793a\u4f8b\u914d\u7f6e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<remote_servers>\n    ...\n    <perftest_1shards_3replicas>\n        <shard>\n            <replica>\n                <host>example-perftest01j.yandex.ru</host>\n                <port>9000</port>\n             </replica>\n             <replica>\n                <host>example-perftest02j.yandex.ru</host>\n                <port>9000</port>\n             </replica>\n             <replica>\n                <host>example-perftest03j.yandex.ru</host>\n                <port>9000</port>\n             </replica>\n        </shard>\n    </perftest_1shards_3replicas>\n</remote_servers>\n")),(0,i.kt)("p",null,"\u542f\u7528\u672c\u673a\u590d\u5236",(0,i.kt)("a",{parentName:"p",href:"http://zookeeper.apache.org/"},"Zookeeper"),"\u662f\u5fc5\u9700\u7684\u3002 ClickHouse\u8d1f\u8d23\u6240\u6709\u526f\u672c\u7684\u6570\u636e\u4e00\u81f4\u6027\uff0c\u5e76\u5728\u5931\u8d25\u540e\u81ea\u52a8\u8fd0\u884c\u6062\u590d\u8fc7\u7a0b\u3002\u5efa\u8bae\u5c06ZooKeeper\u96c6\u7fa4\u90e8\u7f72\u5728\u5355\u72ec\u7684\u670d\u52a1\u5668\u4e0a\uff08\u5176\u4e2d\u6ca1\u6709\u5176\u4ed6\u8fdb\u7a0b\uff0c\u5305\u62ec\u8fd0\u884c\u7684ClickHouse\uff09\u3002"),(0,i.kt)("p",null,'!!! note "\u6ce8\u610f"\nZooKeeper\u4e0d\u662f\u4e00\u4e2a\u4e25\u683c\u7684\u8981\u6c42\uff1a\u5728\u67d0\u4e9b\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u6570\u636e\u5199\u5165\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u7684\u6240\u6709\u526f\u672c\u6765\u590d\u5236\u6570\u636e\u3002 \u8fd9\u79cd\u65b9\u6cd5\u662f',(0,i.kt)("strong",{parentName:"p"},"\u4e0d"),"\u5efa\u8bae\u7684\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cClickHouse\u5c06\u65e0\u6cd5\u4fdd\u8bc1\u6240\u6709\u526f\u672c\u4e0a\u7684\u6570\u636e\u4e00\u81f4\u6027\u3002 \u56e0\u6b64\u9700\u8981\u7531\u60a8\u7684\u5e94\u7528\u6765\u4fdd\u8bc1\u8fd9\u4e00\u70b9\u3002"),(0,i.kt)("p",null,"ZooKeeper\u4f4d\u7f6e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<zookeeper>\n    <node>\n        <host>zoo01.yandex.ru</host>\n        <port>2181</port>\n    </node>\n    <node>\n        <host>zoo02.yandex.ru</host>\n        <port>2181</port>\n    </node>\n    <node>\n        <host>zoo03.yandex.ru</host>\n        <port>2181</port>\n    </node>\n</zookeeper>\n")),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u5b8f\u6765\u8bc6\u522b\u6bcf\u4e2a\u7528\u4e8e\u521b\u5efa\u8868\u7684\u5206\u7247\u548c\u526f\u672c:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<macros>\n    <shard>01</shard>\n    <replica>01</replica>\n</macros>\n")),(0,i.kt)("p",null,"\u5982\u679c\u5728\u521b\u5efa\u590d\u5236\u8868\u65f6\u6ca1\u6709\u526f\u672c\uff0c\u5219\u4f1a\u5b9e\u4f8b\u5316\u65b0\u7684\u7b2c\u4e00\u4e2a\u526f\u672c\u3002 \u5982\u679c\u5df2\u6709\u5b9e\u65f6\u526f\u672c\uff0c\u5219\u65b0\u526f\u672c\u5c06\u514b\u9686\u73b0\u6709\u526f\u672c\u4e2d\u7684\u6570\u636e\u3002 \u60a8\u53ef\u4ee5\u9009\u62e9\u9996\u5148\u521b\u5efa\u6240\u6709\u590d\u5236\u7684\u8868\uff0c\u7136\u540e\u5411\u5176\u4e2d\u63d2\u5165\u6570\u636e\u3002 \u53e6\u4e00\u79cd\u9009\u62e9\u662f\u521b\u5efa\u4e00\u4e9b\u526f\u672c\uff0c\u5e76\u5728\u6570\u636e\u63d2\u5165\u4e4b\u540e\u6216\u671f\u95f4\u6dfb\u52a0\u5176\u4ed6\u526f\u672c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tutorial.hits_replica (...)\nENGINE = ReplcatedMergeTree(\n    '/clickhouse_perftest/tables/{shard}/hits',\n    '{replica}'\n)\n...\n")),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/replication"},"ReplicatedMergeTree"),"\u8868\u5f15\u64ce\u3002 \u5728\u53c2\u6570\u4e2d\uff0c\u6211\u4eec\u6307\u5b9a\u5305\u542b\u5206\u7247\u548c\u526f\u672c\u6807\u8bc6\u7b26\u7684ZooKeeper\u8def\u5f84\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO tutorial.hits_replica SELECT * FROM tutorial.hits_local;\n")),(0,i.kt)("p",null,"\u590d\u5236\u5728\u591a\u4e3b\u673a\u6a21\u5f0f\u4e0b\u8fd0\u884c\u3002\u6570\u636e\u53ef\u4ee5\u52a0\u8f7d\u5230\u4efb\u4f55\u526f\u672c\u4e2d\uff0c\u7136\u540e\u7cfb\u7edf\u81ea\u52a8\u5c06\u5176\u4e0e\u5176\u4ed6\u5b9e\u4f8b\u540c\u6b65\u3002\u590d\u5236\u662f\u5f02\u6b65\u7684\uff0c\u56e0\u6b64\u5728\u7ed9\u5b9a\u65f6\u523b\uff0c\u5e76\u975e\u6240\u6709\u526f\u672c\u90fd\u53ef\u80fd\u5305\u542b\u6700\u8fd1\u63d2\u5165\u7684\u6570\u636e\u3002\u81f3\u5c11\u5e94\u8be5\u6709\u4e00\u4e2a\u526f\u672c\u5141\u8bb8\u6570\u636e\u6444\u5165\u3002\u53e6\u4e00\u4e9b\u5219\u4f1a\u5728\u91cd\u65b0\u6fc0\u6d3b\u540e\u540c\u6b65\u6570\u636e\u5e76\u4fee\u590d\u4e00\u81f4\u6027\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u6700\u8fd1\u63d2\u5165\u7684\u6570\u636e\u4e22\u5931\u7684\u53ef\u80fd\u6027\u5f88\u4f4e\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/getting_started/tutorial/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);