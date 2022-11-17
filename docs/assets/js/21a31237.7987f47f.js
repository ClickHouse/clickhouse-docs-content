"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12018],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=o(t),m=l,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(b,i(i({ref:n},f),{},{components:t})):r.createElement(b,i({ref:n},f))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=t(87462),l=(t(67294),t(3905));const a={slug:"/zh/engines/table-engines/special/buffer"},i="\u7f13\u51b2\u533a",s={unversionedId:"zh/engines/table-engines/special/buffer",id:"zh/engines/table-engines/special/buffer",title:"\u7f13\u51b2\u533a",description:"buffer}",source:"@site/docs/zh/engines/table-engines/special/buffer.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/buffer",permalink:"/docs/zh/engines/table-engines/special/buffer",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/buffer.md",tags:[],version:"current",frontMatter:{slug:"/zh/engines/table-engines/special/buffer"},sidebar:"chinese",previous:{title:"\u968f\u673a\u6570\u751f\u6210",permalink:"/docs/zh/engines/table-engines/special/generate"},next:{title:"\u5b57\u5178",permalink:"/docs/zh/engines/table-engines/special/dictionary"}},u={},o=[],f={toc:o};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buffer"},"\u7f13\u51b2\u533a"),(0,l.kt)("p",null,"\u7f13\u51b2\u6570\u636e\u5199\u5165 RAM \u4e2d\uff0c\u5468\u671f\u6027\u5730\u5c06\u6570\u636e\u5237\u65b0\u5230\u53e6\u4e00\u4e2a\u8868\u3002\u5728\u8bfb\u53d6\u64cd\u4f5c\u65f6\uff0c\u540c\u65f6\u4ece\u7f13\u51b2\u533a\u548c\u53e6\u4e00\u4e2a\u8868\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Buffer(database, table, num_layers, min_time, max_time, min_rows, max_rows, min_bytes, max_bytes)\n")),(0,l.kt)("p",null,"\u5f15\u64ce\u7684\u53c2\u6570\uff1adatabase\uff0ctable - \u8981\u5237\u65b0\u6570\u636e\u7684\u8868\u3002\u53ef\u4ee5\u4f7f\u7528\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5e38\u91cf\u8868\u8fbe\u5f0f\u800c\u4e0d\u662f\u6570\u636e\u5e93\u540d\u79f0\u3002 num_layers - \u5e76\u884c\u5c42\u6570\u3002\u5728\u7269\u7406\u4e0a\uff0c\u8be5\u8868\u5c06\u8868\u793a\u4e3a num_layers \u4e2a\u72ec\u7acb\u7f13\u51b2\u533a\u3002\u5efa\u8bae\u503c\u4e3a16\u3002min_time\uff0cmax_time\uff0cmin_rows\uff0cmax_rows\uff0cmin_bytes\uff0cmax_bytes - \u4ece\u7f13\u51b2\u533a\u5237\u65b0\u6570\u636e\u7684\u6761\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6ee1\u8db3\u6240\u6709 \xabmin\xbb \u6761\u4ef6\u6216\u81f3\u5c11\u4e00\u4e2a \xabmax\xbb \u6761\u4ef6\uff0c\u5219\u4ece\u7f13\u51b2\u533a\u5237\u65b0\u6570\u636e\u5e76\u5c06\u5176\u5199\u5165\u76ee\u6807\u8868\u3002min_time\uff0cmax_time \u2014 \u4ece\u7b2c\u4e00\u6b21\u5199\u5165\u7f13\u51b2\u533a\u65f6\u8d77\u4ee5\u79d2\u4e3a\u5355\u4f4d\u7684\u65f6\u95f4\u6761\u4ef6\u3002min_rows\uff0cmax_rows - \u7f13\u51b2\u533a\u4e2d\u884c\u6570\u7684\u6761\u4ef6\u3002min_bytes\uff0cmax_bytes - \u7f13\u51b2\u533a\u4e2d\u5b57\u8282\u6570\u7684\u6761\u4ef6\u3002"),(0,l.kt)("p",null,"\u5199\u5165\u65f6\uff0c\u6570\u636e\u4ece num_layers \u4e2a\u7f13\u51b2\u533a\u4e2d\u968f\u673a\u63d2\u5165\u3002\u6216\u8005\uff0c\u5982\u679c\u63d2\u5165\u6570\u636e\u7684\u5927\u5c0f\u8db3\u591f\u5927\uff08\u5927\u4e8e max_rows \u6216 max_bytes \uff09\uff0c\u5219\u4f1a\u7ed5\u8fc7\u7f13\u51b2\u533a\u5c06\u5176\u5199\u5165\u76ee\u6807\u8868\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a \xabnum_layers\xbb \u7f13\u51b2\u533a\u5237\u65b0\u6570\u636e\u7684\u6761\u4ef6\u662f\u5206\u522b\u8ba1\u7b97\u3002\u4f8b\u5982\uff0c\u5982\u679c num_layers = 16 \u4e14 max_bytes = 100000000\uff0c\u5219\u6700\u5927RAM\u6d88\u8017\u5c06\u4e3a1.6 GB\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE merge.hits_buffer AS merge.hits ENGINE = Buffer(merge, hits, 16, 10, 100, 10000, 1000000, 10000000, 100000000)\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a \xabmerge.hits_buffer\xbb \u8868\uff0c\u5176\u7ed3\u6784\u4e0e \xabmerge.hits\xbb \u76f8\u540c\uff0c\u5e76\u4f7f\u7528 Buffer \u5f15\u64ce\u3002\u5199\u5165\u6b64\u8868\u65f6\uff0c\u6570\u636e\u7f13\u51b2\u5728 RAM \u4e2d\uff0c\u7136\u540e\u5199\u5165 \xabmerge.hits\xbb \u8868\u3002\u521b\u5efa\u4e8616\u4e2a\u7f13\u51b2\u533a\u3002\u5982\u679c\u5df2\u7ecf\u8fc7\u4e86100\u79d2\uff0c\u6216\u8005\u5df2\u5199\u5165100\u4e07\u884c\uff0c\u6216\u8005\u5df2\u5199\u5165100 MB\u6570\u636e\uff0c\u5219\u5237\u65b0\u6bcf\u4e2a\u7f13\u51b2\u533a\u7684\u6570\u636e\uff1b\u6216\u8005\u5982\u679c\u540c\u65f6\u5df2\u7ecf\u8fc7\u4e8610\u79d2\u5e76\u4e14\u5df2\u7ecf\u5199\u5165\u4e8610,000\u884c\u548c10 MB\u7684\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5982\u679c\u53ea\u5199\u4e86\u4e00\u884c\uff0c\u90a3\u4e48\u5728100\u79d2\u4e4b\u540e\uff0c\u90fd\u4f1a\u88ab\u5237\u65b0\u3002\u4f46\u662f\u5982\u679c\u5199\u4e86\u5f88\u591a\u884c\uff0c\u6570\u636e\u5c06\u4f1a\u66f4\u5feb\u5730\u5237\u65b0\u3002"),(0,l.kt)("p",null,"\u5f53\u670d\u52a1\u5668\u505c\u6b62\u65f6\uff0c\u4f7f\u7528 DROP TABLE \u6216 DETACH TABLE\uff0c\u7f13\u51b2\u533a\u6570\u636e\u4e5f\u4f1a\u5237\u65b0\u5230\u76ee\u6807\u8868\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e3a\u6570\u636e\u5e93\u548c\u8868\u540d\u5728\u5355\u4e2a\u5f15\u53f7\u4e2d\u8bbe\u7f6e\u7a7a\u5b57\u7b26\u4e32\u3002\u8fd9\u8868\u793a\u6ca1\u6709\u76ee\u7684\u5730\u8868\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f53\u8fbe\u5230\u6570\u636e\u5237\u65b0\u6761\u4ef6\u65f6\uff0c\u7f13\u51b2\u5668\u88ab\u7b80\u5355\u5730\u6e05\u9664\u3002\u8fd9\u53ef\u80fd\u5bf9\u4e8e\u4fdd\u6301\u6570\u636e\u7a97\u53e3\u5728\u5185\u5b58\u4e2d\u662f\u6709\u7528\u7684\u3002"),(0,l.kt)("p",null,"\u4ece Buffer \u8868\u8bfb\u53d6\u65f6\uff0c\u5c06\u4ece\u7f13\u51b2\u533a\u548c\u76ee\u6807\u8868\uff08\u5982\u679c\u6709\uff09\u5904\u7406\u6570\u636e\u3002\n\u8bf7\u6ce8\u610f\uff0cBuffer \u8868\u4e0d\u652f\u6301\u7d22\u5f15\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u88ab\u5b8c\u5168\u626b\u63cf\uff0c\u5bf9\u4e8e\u5927\u7f13\u51b2\u533a\u6765\u8bf4\u53ef\u80fd\u5f88\u6162\u3002\uff08\u5bf9\u4e8e\u76ee\u6807\u8868\u4e2d\u7684\u6570\u636e\uff0c\u5c06\u4f7f\u7528\u5b83\u652f\u6301\u7684\u7d22\u5f15\u3002\uff09"),(0,l.kt)("p",null,"\u5982\u679c Buffer \u8868\u4e2d\u7684\u5217\u96c6\u4e0e\u76ee\u6807\u8868\u4e2d\u7684\u5217\u96c6\u4e0d\u5339\u914d\uff0c\u5219\u4f1a\u63d2\u5165\u4e24\u4e2a\u8868\u4e2d\u5b58\u5728\u7684\u5217\u7684\u5b50\u96c6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7c7b\u578b\u4e0e Buffer \u8868\u548c\u76ee\u6807\u8868\u4e2d\u7684\u67d0\u5217\u4e0d\u5339\u914d\uff0c\u5219\u4f1a\u5728\u670d\u52a1\u5668\u65e5\u5fd7\u4e2d\u8f93\u5165\u9519\u8bef\u6d88\u606f\u5e76\u6e05\u9664\u7f13\u51b2\u533a\u3002\n\u5982\u679c\u5728\u5237\u65b0\u7f13\u51b2\u533a\u65f6\u76ee\u6807\u8868\u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u53d1\u751f\u540c\u6837\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e3a\u76ee\u6807\u8868\u548c Buffer \u8868\u8fd0\u884c ALTER\uff0c\u6211\u4eec\u5efa\u8bae\u5148\u5220\u9664 Buffer \u8868\uff0c\u4e3a\u76ee\u6807\u8868\u8fd0\u884c ALTER\uff0c\u7136\u540e\u518d\u6b21\u521b\u5efa Buffer \u8868\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u5f02\u5e38\u91cd\u542f\uff0c\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u5c06\u4e22\u5931\u3002"),(0,l.kt)("p",null,"PREWHERE\uff0cFINAL \u548c SAMPLE \u5bf9\u7f13\u51b2\u8868\u4e0d\u8d77\u4f5c\u7528\u3002\u8fd9\u4e9b\u6761\u4ef6\u5c06\u4f20\u9012\u5230\u76ee\u6807\u8868\uff0c\u4f46\u4e0d\u7528\u4e8e\u5904\u7406\u7f13\u51b2\u533a\u4e2d\u7684\u6570\u636e\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u53ea\u4f7f\u7528Buffer\u8868\u8fdb\u884c\u5199\u5165\uff0c\u540c\u65f6\u4ece\u76ee\u6807\u8868\u8fdb\u884c\u8bfb\u53d6\u3002"),(0,l.kt)("p",null,"\u5c06\u6570\u636e\u6dfb\u52a0\u5230\u7f13\u51b2\u533a\u65f6\uff0c\u5176\u4e2d\u4e00\u4e2a\u7f13\u51b2\u533a\u88ab\u9501\u5b9a\u3002\u5982\u679c\u540c\u65f6\u4ece\u8868\u6267\u884c\u8bfb\u64cd\u4f5c\uff0c\u5219\u4f1a\u5bfc\u81f4\u5ef6\u8fdf\u3002"),(0,l.kt)("p",null,"\u63d2\u5165\u5230 Buffer \u8868\u4e2d\u7684\u6570\u636e\u53ef\u80fd\u4ee5\u4e0d\u540c\u7684\u987a\u5e8f\u548c\u4e0d\u540c\u7684\u5757\u5199\u5165\u76ee\u6807\u8868\u4e2d\u3002\u56e0\u6b64\uff0cBuffer \u8868\u5f88\u96be\u7528\u4e8e\u6b63\u786e\u5199\u5165 CollapsingMergeTree\u3002\u4e3a\u907f\u514d\u51fa\u73b0\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u5c06 \xabnum_layers\xbb \u8bbe\u7f6e\u4e3a1\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u76ee\u6807\u8868\u662f\u590d\u5236\u8868\uff0c\u5219\u5728\u5199\u5165 Buffer \u8868\u65f6\u4f1a\u4e22\u5931\u590d\u5236\u8868\u7684\u67d0\u4e9b\u9884\u671f\u7279\u5f81\u3002\u6570\u636e\u90e8\u5206\u7684\u884c\u6b21\u5e8f\u548c\u5927\u5c0f\u7684\u968f\u673a\u53d8\u5316\u5bfc\u81f4\u6570\u636e\u4e0d\u80fd\u53bb\u91cd\uff0c\u8fd9\u610f\u5473\u7740\u65e0\u6cd5\u5bf9\u590d\u5236\u8868\u8fdb\u884c\u53ef\u9760\u7684 \xabexactly once\xbb \u5199\u5165\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e9b\u7f3a\u70b9\uff0c\u6211\u4eec\u53ea\u5efa\u8bae\u5728\u6781\u5c11\u6570\u60c5\u51b5\u4e0b\u4f7f\u7528 Buffer \u8868\u3002"),(0,l.kt)("p",null,"\u5f53\u5728\u5355\u4f4d\u65f6\u95f4\u5185\u4ece\u5927\u91cf\u670d\u52a1\u5668\u63a5\u6536\u5230\u592a\u591a INSERTs \u5e76\u4e14\u5728\u63d2\u5165\u4e4b\u524d\u65e0\u6cd5\u7f13\u51b2\u6570\u636e\u65f6\u4f7f\u7528 Buffer \u8868\uff0c\u8fd9\u610f\u5473\u7740\u8fd9\u4e9b INSERTs \u4e0d\u80fd\u8db3\u591f\u5feb\u5730\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4e00\u6b21\u63d2\u5165\u4e00\u884c\u6570\u636e\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff0c\u5373\u4f7f\u5bf9\u4e8e Buffer \u8868\u4e5f\u662f\u5982\u6b64\u3002\u8fd9\u5c06\u53ea\u4ea7\u751f\u6bcf\u79d2\u51e0\u5343\u884c\u7684\u901f\u5ea6\uff0c\u800c\u63d2\u5165\u66f4\u5927\u7684\u6570\u636e\u5757\u6bcf\u79d2\u53ef\u4ee5\u4ea7\u751f\u8d85\u8fc7\u4e00\u767e\u4e07\u884c\uff08\u53c2\u89c1 \xab\u6027\u80fd\xbb \u90e8\u5206\uff09\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/table_engines/buffer/"},"\u539f\u59cb\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);