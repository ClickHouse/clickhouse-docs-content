"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64832],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},h=Object.keys(e);for(a=0;a<h.length;a++)t=h[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(a=0;a<h.length;a++)t=h[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,h=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||h;return t?a.createElement(f,s(s({ref:n},o),{},{components:t})):a.createElement(f,s({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var h=t.length,s=new Array(h);s[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<h;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},16739:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=t(87462),r=t(63366),h=(t(67294),t(3905)),s=["components"],i={},u="Hash\u51fd\u6570",l={unversionedId:"zh/sql-reference/functions/hash-functions",id:"zh/sql-reference/functions/hash-functions",title:"Hash\u51fd\u6570",description:"hashhan-shu}",source:"@site/docs/zh/sql-reference/functions/hash-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/hash-functions",permalink:"/docs/zh/sql-reference/functions/hash-functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/functions/hash-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"GEO\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/geo"},next:{title:"\u9ad8\u9636\u51fd\u6570",permalink:"/docs/zh/sql-reference/functions/higher-order-functions"}},o={},p=[{value:"halfMD5",id:"halfmd5",level:2},{value:"MD5",id:"md5",level:2},{value:"sipHash64",id:"siphash64",level:2},{value:"sipHash128",id:"hash_functions-siphash128",level:2},{value:"cityHash64",id:"cityhash64",level:2},{value:"intHash32",id:"inthash32",level:2},{value:"intHash64",id:"inthash64",level:2},{value:"SHA1",id:"sha1",level:2},{value:"SHA224",id:"sha224",level:2},{value:"SHA256",id:"sha256",level:2},{value:"URLHash(url[,N])",id:"urlhashurl-n",level:2},{value:"farmHash64",id:"farmhash64",level:2},{value:"javaHash",id:"hash_functions-javahash",level:2},{value:"hiveHash",id:"hivehash",level:2},{value:"metroHash64",id:"metrohash64",level:2},{value:"jumpConsistentHash",id:"jumpconsistenthash",level:2},{value:"murmurHash2_32,murmurHash2_64",id:"murmurhash2-32-murmurhash2-64",level:2},{value:"murmurHash3_32,murmurHash3_64,murmurHash3_128",id:"murmurhash3-32-murmurhash3-64-murmurhash3-128",level:2},{value:"xxHash32,xxHash64",id:"xxhash32-xxhash64",level:2}],c={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,h.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,h.kt)("h1",{id:"hashhan-shu"},"Hash\u51fd\u6570"),(0,h.kt)("p",null,"Hash\u51fd\u6570\u53ef\u4ee5\u7528\u4e8e\u5c06\u5143\u7d20\u4e0d\u53ef\u9006\u7684\u4f2a\u968f\u673a\u6253\u4e71\u3002"),(0,h.kt)("h2",{id:"halfmd5"},"halfMD5"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684MD5\u3002\u7136\u540e\u83b7\u53d6\u7ed3\u679c\u7684\u524d8\u4e2a\u5b57\u8282\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3aUInt64\uff08\u5927\u7aef\uff09\u8fd4\u56de\u3002\n\u6b64\u51fd\u6570\u76f8\u5f53\u4f4e\u6548\uff08500\u4e07\u4e2a\u77ed\u5b57\u7b26\u4e32/\u79d2/\u6838\u5fc3\uff09\u3002\n\u5982\u679c\u60a8\u4e0d\u9700\u8981\u4e00\u5b9a\u4f7f\u7528MD5\uff0c\u8bf7\u4f7f\u7528\u2019sipHash64\u2019\u51fd\u6570\u3002"),(0,h.kt)("h2",{id:"md5"},"MD5"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684MD5\u5e76\u5c06\u7ed3\u679c\u653e\u5165FixedString(16)\u4e2d\u8fd4\u56de\u3002\n\u5982\u679c\u60a8\u53ea\u662f\u9700\u8981\u4e00\u4e2a128\u4f4d\u7684hash\uff0c\u540c\u65f6\u4e0d\u9700\u8981\u4e00\u5b9a\u4f7f\u7528MD5\uff0c\u8bf7\u4f7f\u7528\u2019sipHash128\u2019\u51fd\u6570\u3002\n\u5982\u679c\u60a8\u8981\u83b7\u5f97\u4e0emd5sum\u7a0b\u5e8f\u76f8\u540c\u7684\u8f93\u51fa\u7ed3\u679c\uff0c\u8bf7\u4f7f\u7528lower(hex(MD5(s)))\u3002"),(0,h.kt)("h2",{id:"siphash64"},"sipHash64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684SipHash\u3002\n\u63a5\u53d7String\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u8fd4\u56deUInt64\u3002\nSipHash\u662f\u4e00\u79cd\u52a0\u5bc6\u54c8\u5e0c\u51fd\u6570\u3002\u5b83\u7684\u5904\u7406\u6027\u80fd\u81f3\u5c11\u6bd4MD5\u5feb\u4e09\u500d\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"https://131002.net/siphash/"},"https://131002.net/siphash/")),(0,h.kt)("h2",{id:"hash_functions-siphash128"},"sipHash128"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684SipHash\u3002\n\u63a5\u53d7String\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u8fd4\u56deFixedString(16)\u3002\n\u4e0esipHash64\u51fd\u6570\u7684\u4e0d\u540c\u5728\u4e8e\u5b83\u7684\u6700\u7ec8\u8ba1\u7b97\u7ed3\u679c\u4e3a128\u4f4d\u3002"),(0,h.kt)("h2",{id:"cityhash64"},"cityHash64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u4efb\u610f\u6570\u91cf\u5b57\u7b26\u4e32\u7684CityHash64\u6216\u4f7f\u7528\u7279\u5b9a\u5b9e\u73b0\u7684Hash\u51fd\u6570\u8ba1\u7b97\u4efb\u610f\u6570\u91cf\u5176\u4ed6\u7c7b\u578b\u7684Hash\u3002\n\u5bf9\u4e8e\u5b57\u7b26\u4e32\uff0c\u4f7f\u7528CityHash\u7b97\u6cd5\u3002 \u8fd9\u662f\u4e00\u4e2a\u5feb\u901f\u7684\u975e\u52a0\u5bc6\u54c8\u5e0c\u51fd\u6570\uff0c\u7528\u4e8e\u5b57\u7b26\u4e32\u3002\n\u5bf9\u4e8e\u5176\u4ed6\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u4f7f\u7528\u7279\u5b9a\u5b9e\u73b0\u7684Hash\u51fd\u6570\uff0c\u8fd9\u662f\u4e00\u79cd\u5feb\u901f\u7684\u975e\u52a0\u5bc6\u7684\u6563\u5217\u51fd\u6570\u3002\n\u5982\u679c\u4f20\u9012\u4e86\u591a\u4e2a\u53c2\u6570\uff0c\u5219\u4f7f\u7528CityHash\u7ec4\u5408\u8fd9\u4e9b\u53c2\u6570\u7684Hash\u7ed3\u679c\u3002\n\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u8ba1\u7b97\u6574\u4e2a\u8868\u7684checksum\uff0c\u5176\u7ed3\u679c\u53d6\u51b3\u4e8e\u884c\u7684\u987a\u5e8f\uff1a",(0,h.kt)("inlineCode",{parentName:"p"},"SELECT sum(cityHash64(*)) FROM table"),"\u3002"),(0,h.kt)("h2",{id:"inthash32"},"intHash32"),(0,h.kt)("p",null,"\u4e3a\u4efb\u4f55\u7c7b\u578b\u7684\u6574\u6570\u8ba1\u7b9732\u4f4d\u7684\u54c8\u5e0c\u3002\n\u8fd9\u662f\u76f8\u5bf9\u9ad8\u6548\u7684\u975e\u52a0\u5bc6Hash\u51fd\u6570\u3002"),(0,h.kt)("h2",{id:"inthash64"},"intHash64"),(0,h.kt)("p",null,"\u4ece\u4efb\u4f55\u7c7b\u578b\u7684\u6574\u6570\u8ba1\u7b9764\u4f4d\u54c8\u5e0c\u7801\u3002\n\u5b83\u7684\u5de5\u4f5c\u901f\u5ea6\u6bd4intHash32\u51fd\u6570\u5feb\u3002"),(0,h.kt)("h2",{id:"sha1"},"SHA1"),(0,h.kt)("h2",{id:"sha224"},"SHA224"),(0,h.kt)("h2",{id:"sha256"},"SHA256"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684SHA-1\uff0cSHA-224\u6216SHA-256\uff0c\u5e76\u5c06\u7ed3\u679c\u5b57\u8282\u96c6\u8fd4\u56de\u4e3aFixedString(20)\uff0cFixedString(28)\u6216FixedString(32)\u3002\n\u8be5\u51fd\u6570\u76f8\u5f53\u4f4e\u6548\uff08SHA-1\u5927\u7ea6500\u4e07\u4e2a\u77ed\u5b57\u7b26\u4e32/\u79d2/\u6838\u5fc3\uff0c\u800cSHA-224\u548cSHA-256\u5927\u7ea6220\u4e07\u4e2a\u77ed\u5b57\u7b26\u4e32/\u79d2/\u6838\u5fc3\uff09\u3002\n\u6211\u4eec\u5efa\u8bae\u4ec5\u5728\u5fc5\u987b\u4f7f\u7528\u8fd9\u4e9bHash\u51fd\u6570\u4e14\u65e0\u6cd5\u66f4\u6539\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u51fd\u6570\u3002\n\u5373\u4f7f\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4ecd\u5efa\u8bae\u5c06\u51fd\u6570\u91c7\u7528\u5728\u5199\u5165\u6570\u636e\u65f6\u4f7f\u7528\u9884\u8ba1\u7b97\u7684\u65b9\u5f0f\u5c06\u5176\u8ba1\u7b97\u5b8c\u6bd5\u3002\u800c\u4e0d\u662f\u5728SELECT\u4e2d\u8ba1\u7b97\u5b83\u4eec\u3002"),(0,h.kt)("h2",{id:"urlhashurl-n"},"URLHash(url","[",",N","]",")"),(0,h.kt)("p",null,"\u4e00\u79cd\u5feb\u901f\u7684\u975e\u52a0\u5bc6\u54c8\u5e0c\u51fd\u6570\uff0c\u7528\u4e8e\u89c4\u8303\u5316\u7684\u4eceURL\u83b7\u5f97\u7684\u5b57\u7b26\u4e32\u3002\n",(0,h.kt)("inlineCode",{parentName:"p"},"URLHash(s)")," - \u4ece\u4e00\u4e2a\u5b57\u7b26\u4e32\u8ba1\u7b97\u4e00\u4e2a\u54c8\u5e0c\uff0c\u5982\u679c\u7ed3\u5c3e\u5b58\u5728\u5c3e\u968f\u7b26\u53f7",(0,h.kt)("inlineCode",{parentName:"p"},"/"),"\uff0c",(0,h.kt)("inlineCode",{parentName:"p"},"\uff1f"),"\u6216",(0,h.kt)("inlineCode",{parentName:"p"},"#"),"\u5219\u5ffd\u7565\u3002\n",(0,h.kt)("inlineCode",{parentName:"p"},"URLHash\uff08s\uff0cN\uff09")," - \u8ba1\u7b97URL\u5c42\u6b21\u7ed3\u6784\u4e2d\u5b57\u7b26\u4e32\u5230N\u7ea7\u522b\u7684\u54c8\u5e0c\u503c\uff0c\u5982\u679c\u672b\u5c3e\u5b58\u5728\u5c3e\u968f\u7b26\u53f7",(0,h.kt)("inlineCode",{parentName:"p"},"/"),"\uff0c",(0,h.kt)("inlineCode",{parentName:"p"},"\uff1f"),"\u6216",(0,h.kt)("inlineCode",{parentName:"p"},"#"),"\u5219\u5ffd\u7565\u3002\nURL\u7684\u5c42\u7ea7\u4e0eURLHierarchy\u4e2d\u7684\u5c42\u7ea7\u76f8\u540c\u3002 \u6b64\u51fd\u6570\u88ab\u7528\u4e8eYandex.Metrica\u3002"),(0,h.kt)("h2",{id:"farmhash64"},"farmHash64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684FarmHash64\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deUInt64\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"https://github.com/google/farmhash"},"FarmHash64")),(0,h.kt)("h2",{id:"hash_functions-javahash"},"javaHash"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684JavaHash\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deInt32\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"http://hg.openjdk.java.net/jdk8u/jdk8u/jdk/file/478a4add975b/src/share/classes/java/lang/String.java#l1452"},"JavaHash")),(0,h.kt)("h2",{id:"hivehash"},"hiveHash"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684HiveHash\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deInt32\u3002\n\u4e0e",(0,h.kt)("a",{parentName:"p",href:"#hash_functions-javahash"},"JavaHash"),"\u76f8\u540c\uff0c\u4f46\u4e0d\u4f1a\u8fd4\u56de\u8d1f\u6570\u3002"),(0,h.kt)("h2",{id:"metrohash64"},"metroHash64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684MetroHash\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deUInt64\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"http://www.jandrewrogers.com/2015/05/27/metrohash/"},"MetroHash64")),(0,h.kt)("h2",{id:"jumpconsistenthash"},"jumpConsistentHash"),(0,h.kt)("p",null,"\u8ba1\u7b97UInt64\u7684JumpConsistentHash\u3002\n\u63a5\u53d7UInt64\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deInt32\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1406.2294.pdf"},"JumpConsistentHash")),(0,h.kt)("h2",{id:"murmurhash2-32-murmurhash2-64"},"murmurHash2_32,murmurHash2_64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684MurmurHash2\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deUInt64\u6216UInt32\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"https://github.com/aappleby/smhasher"},"MurmurHash2")),(0,h.kt)("h2",{id:"murmurhash3-32-murmurhash3-64-murmurhash3-128"},"murmurHash3_32,murmurHash3_64,murmurHash3_128"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684MurmurHash3\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deUInt64\u6216UInt32\u6216FixedString(16)\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"https://github.com/aappleby/smhasher"},"MurmurHash3")),(0,h.kt)("h2",{id:"xxhash32-xxhash64"},"xxHash32,xxHash64"),(0,h.kt)("p",null,"\u8ba1\u7b97\u5b57\u7b26\u4e32\u7684xxHash\u3002\n\u63a5\u53d7\u4e00\u4e2aString\u7c7b\u578b\u7684\u53c2\u6570\u3002\u8fd4\u56deUInt64\u6216UInt32\u3002\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u94fe\u63a5\uff1a",(0,h.kt)("a",{parentName:"p",href:"http://cyan4973.github.io/xxHash/"},"xxHash")),(0,h.kt)("p",null,(0,h.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/hash_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);