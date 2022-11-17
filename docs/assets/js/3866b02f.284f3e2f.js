"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[81991],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),k=i,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={slug:"/zh/introduction/history",sidebar_position:4,sidebar_label:"ClickHouse\u5386\u53f2"},o="ClickHouse\u5386\u53f2",l={unversionedId:"zh/introduction/history",id:"zh/introduction/history",title:"ClickHouse\u5386\u53f2",description:"clickhouseli-shi}",source:"@site/docs/zh/introduction/history.md",sourceDirName:"zh/introduction",slug:"/zh/introduction/history",permalink:"/docs/zh/introduction/history",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/introduction/history.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/zh/introduction/history",sidebar_position:4,sidebar_label:"ClickHouse\u5386\u53f2"},sidebar:"chinese",previous:{title:"ClickHouse\u6027\u80fd",permalink:"/docs/zh/introduction/performance"},next:{title:"ClickHouse\u7528\u6237",permalink:"/docs/zh/introduction/adopters"}},c={},u=[{value:"Yandex.Metrica\u4ee5\u53ca\u5176\u4ed6Yandex\u670d\u52a1\u7684\u4f7f\u7528\u6848\u4f8b",id:"yandex-metricayi-ji-qi-ta-yandexfu-wu-de-shi-yong-an-li",level:2},{value:"\u805a\u5408\u4e0e\u975e\u805a\u5408\u6570\u636e",id:"ju-he-yu-fei-ju-he-shu-ju",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clickhouseli-shi"},"ClickHouse\u5386\u53f2"),(0,i.kt)("p",null,"ClickHouse\u6700\u521d\u662f\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://metrica.yandex.com/"},"YandexMetrica")," ",(0,i.kt)("a",{parentName:"p",href:"http://w3techs.com/technologies/overview/traffic_analysis/all"},"\u4e16\u754c\u7b2c\u4e8c\u5927Web\u5206\u6790\u5e73\u53f0")," \u800c\u5f00\u53d1\u7684\u3002\u591a\u5e74\u6765\u4e00\u76f4\u4f5c\u4e3a\u8be5\u7cfb\u7edf\u7684\u6838\u5fc3\u7ec4\u4ef6\u88ab\u8be5\u7cfb\u7edf\u6301\u7eed\u4f7f\u7528\u7740\u3002\u76ee\u524d\u4e3a\u6b62\uff0c\u8be5\u7cfb\u7edf\u5728ClickHouse\u4e2d\u6709\u8d85\u8fc713\u4e07\u4ebf\u6761\u8bb0\u5f55\uff0c\u5e76\u4e14\u6bcf\u5929\u8d85\u8fc7200\u591a\u4ebf\u4e2a\u4e8b\u4ef6\u88ab\u5904\u7406\u3002\u5b83\u5141\u8bb8\u76f4\u63a5\u4ece\u539f\u59cb\u6570\u636e\u4e2d\u52a8\u6001\u67e5\u8be2\u5e76\u751f\u6210\u62a5\u544a\u3002\u672c\u6587\u7b80\u8981\u4ecb\u7ecd\u4e86ClickHouse\u5728\u5176\u65e9\u671f\u53d1\u5c55\u9636\u6bb5\u7684\u76ee\u6807\u3002"),(0,i.kt)("p",null,"Yandex.Metrica\u57fa\u4e8e\u7528\u6237\u5b9a\u4e49\u7684\u5b57\u6bb5\uff0c\u5bf9\u5b9e\u65f6\u8bbf\u95ee\u3001\u8fde\u63a5\u4f1a\u8bdd\uff0c\u751f\u6210\u5b9e\u65f6\u7684\u7edf\u8ba1\u62a5\u8868\u3002\u8fd9\u79cd\u9700\u6c42\u5f80\u5f80\u9700\u8981\u590d\u6742\u805a\u5408\u65b9\u5f0f\uff0c\u6bd4\u5982\u5bf9\u8bbf\u95ee\u7528\u6237\u8fdb\u884c\u53bb\u91cd\u3002\u6784\u5efa\u62a5\u8868\u7684\u6570\u636e\uff0c\u662f\u5b9e\u65f6\u63a5\u6536\u5b58\u50a8\u7684\u65b0\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u622a\u81f32014\u5e744\u6708\uff0cYandex.Metrica\u6bcf\u5929\u8ddf\u8e2a\u5927\u7ea6120\u4ebf\u4e2a\u4e8b\u4ef6\uff08\u7528\u6237\u7684\u70b9\u51fb\u548c\u6d4f\u89c8\uff09\u3002\u4e3a\u4e86\u53ef\u4ee5\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u62a5\u8868\uff0c\u6211\u4eec\u5fc5\u987b\u5b58\u50a8\u5168\u90e8\u8fd9\u4e9b\u4e8b\u4ef6\u3002\u540c\u65f6\uff0c\u8fd9\u4e9b\u67e5\u8be2\u53ef\u80fd\u9700\u8981\u5728\u51e0\u767e\u6beb\u79d2\u5185\u626b\u63cf\u6570\u767e\u4e07\u884c\u7684\u6570\u636e\uff0c\u6216\u5728\u51e0\u79d2\u5185\u626b\u63cf\u6570\u4ebf\u884c\u7684\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"yandex-metricayi-ji-qi-ta-yandexfu-wu-de-shi-yong-an-li"},"Yandex.Metrica\u4ee5\u53ca\u5176\u4ed6Yandex\u670d\u52a1\u7684\u4f7f\u7528\u6848\u4f8b"),(0,i.kt)("p",null,"\u5728Yandex.Metrica\u4e2d\uff0cClickHouse\u88ab\u7528\u4e8e\u591a\u4e2a\u573a\u666f\u4e2d\u3002\n\u5b83\u7684\u4e3b\u8981\u4efb\u52a1\u662f\u4f7f\u7528\u539f\u59cb\u6570\u636e\u5728\u7ebf\u7684\u63d0\u4f9b\u5404\u79cd\u6570\u636e\u62a5\u544a\u3002\u5b83\u4f7f\u7528374\u53f0\u670d\u52a1\u5668\u7684\u96c6\u7fa4\uff0c\u5b58\u50a8\u4e8620.3\u4e07\u4ebf\u884c\u7684\u6570\u636e\u3002\u5728\u53bb\u9664\u91cd\u590d\u4e0e\u526f\u672c\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u538b\u7f29\u540e\u7684\u6570\u636e\u8fbe\u5230\u4e862PB\u3002\u672a\u538b\u7f29\u524d\uff08TSV\u683c\u5f0f\uff09\u5b83\u5927\u6982\u670917PB\u3002"),(0,i.kt)("p",null,"ClickHouse\u8fd8\u88ab\u4f7f\u7528\u5728\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6765\u81eaYandex.Metrica\u7684\u4f1a\u8bdd\u91cd\u653e\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u4e2d\u95f4\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4e0eAnalytics\u4e00\u8d77\u6784\u5efa\u5168\u7403\u62a5\u8868\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u8c03\u8bd5Yandex.Metrica\u5f15\u64ce\u8fd0\u884c\u67e5\u8be2"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u6790\u6765\u81eaAPI\u548c\u7528\u6237\u754c\u9762\u7684\u65e5\u5fd7\u6570\u636e")),(0,i.kt)("p",null,"ClickHouse\u5728\u5176\u4ed6Yandex\u670d\u52a1\u4e2d\u81f3\u5c11\u670912\u4e2a\u5b89\u88c5\uff1asearch verticals, Market, Direct, business analytics, mobile development, AdFox, personal services\u7b49\u3002"),(0,i.kt)("h2",{id:"ju-he-yu-fei-ju-he-shu-ju"},"\u805a\u5408\u4e0e\u975e\u805a\u5408\u6570\u636e"),(0,i.kt)("p",null,"\u6709\u4e00\u79cd\u6d41\u884c\u7684\u89c2\u70b9\u8ba4\u4e3a\uff0c\u60f3\u8981\u6709\u6548\u7684\u8ba1\u7b97\u7edf\u8ba1\u6570\u636e\uff0c\u5fc5\u987b\u8981\u805a\u5408\u6570\u636e\uff0c\u56e0\u4e3a\u805a\u5408\u5c06\u964d\u4f4e\u6570\u636e\u91cf\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u6570\u636e\u805a\u5408\u662f\u4e00\u4e2a\u6709\u8bf8\u591a\u9650\u5236\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u63d0\u524d\u77e5\u9053\u7528\u6237\u5b9a\u4e49\u7684\u62a5\u8868\u7684\u5b57\u6bb5\u5217\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u65e0\u6cd5\u81ea\u5b9a\u4e49\u62a5\u8868"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u805a\u5408\u6761\u4ef6\u8fc7\u591a\u65f6\uff0c\u53ef\u80fd\u4e0d\u4f1a\u51cf\u5c11\u6570\u636e\uff0c\u805a\u5408\u662f\u65e0\u7528\u7684\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5b58\u5728\u5927\u91cf\u62a5\u8868\u65f6\uff0c\u6709\u592a\u591a\u7684\u805a\u5408\u53d8\u5316\uff08\u7ec4\u5408\u7206\u70b8\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u805a\u5408\u6761\u4ef6\u6709\u975e\u5e38\u5927\u7684\u57fa\u6570\u65f6\uff08\u5982\uff1aurl\uff09\uff0c\u6570\u636e\u91cf\u6ca1\u6709\u592a\u5927\u51cf\u5c11\uff08\u5c11\u4e8e\u4e24\u500d\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u805a\u5408\u7684\u6570\u636e\u91cf\u53ef\u80fd\u4f1a\u589e\u957f\u800c\u4e0d\u662f\u6536\u7f29"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u4e0d\u4f1a\u67e5\u770b\u6211\u4eec\u4e3a\u4ed6\u751f\u6210\u7684\u6240\u6709\u62a5\u544a\uff0c\u5927\u90e8\u5206\u8ba1\u7b97\u5c06\u662f\u65e0\u7528\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u5404\u79cd\u805a\u5408\u53ef\u80fd\u8fdd\u80cc\u4e86\u6570\u636e\u7684\u903b\u8f91\u5b8c\u6574\u6027")),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u975e\u805a\u5408\u6570\u636e\u800c\u4e0d\u8fdb\u884c\u4efb\u4f55\u805a\u5408\u65f6\uff0c\u6211\u4eec\u7684\u8ba1\u7b97\u91cf\u53ef\u80fd\u662f\u51cf\u5c11\u7684\u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u76f8\u5bf9\u4e8e\u805a\u5408\u4e2d\u5f88\u5927\u4e00\u90e8\u5206\u5de5\u4f5c\u88ab\u79bb\u7ebf\u5b8c\u6210\uff0c\u5728\u7ebf\u8ba1\u7b97\u9700\u8981\u5c3d\u5feb\u7684\u5b8c\u6210\u8ba1\u7b97\uff0c\u56e0\u4e3a\u7528\u6237\u5728\u7b49\u5f85\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"Yandex.Metrica \u6709\u4e00\u4e2a\u4e13\u95e8\u7528\u4e8e\u805a\u5408\u6570\u636e\u7684\u7cfb\u7edf\uff0c\u79f0\u4e3aMetrage\uff0c\u5b83\u53ef\u4ee5\u7528\u4f5c\u5927\u90e8\u5206\u62a5\u8868\u3002\n\u4ece2009\u5e74\u5f00\u59cb\uff0cYandex.Metrica\u8fd8\u4e3a\u975e\u805a\u5408\u6570\u636e\u4f7f\u7528\u4e13\u95e8\u7684OLAP\u6570\u636e\u5e93\uff0c\u79f0\u4e3aOLAPServer\uff0c\u5b83\u4ee5\u524d\u7528\u4e8e\u62a5\u8868\u6784\u5efa\u7cfb\u7edf\u3002\nOLAPServer\u53ef\u4ee5\u5f88\u597d\u7684\u5de5\u4f5c\u5728\u975e\u805a\u5408\u6570\u636e\u4e0a\uff0c\u4f46\u662f\u5b83\u6709\u8bf8\u591a\u9650\u5236\uff0c\u5bfc\u81f4\u65e0\u6cd5\u6839\u636e\u9700\u8981\u5c06\u5176\u7528\u4e8e\u6240\u6709\u62a5\u8868\u4e2d\u3002\u5982\uff0c\u7f3a\u5c11\u5bf9\u6570\u636e\u7c7b\u578b\u7684\u652f\u6301\uff08\u53ea\u652f\u6301\u6570\u636e\uff09\uff0c\u65e0\u6cd5\u5b9e\u65f6\u589e\u91cf\u7684\u66f4\u65b0\u6570\u636e\uff08\u53ea\u80fd\u901a\u8fc7\u6bcf\u5929\u91cd\u5199\u6570\u636e\u5b8c\u6210\uff09\u3002OLAPServer\u4e0d\u662f\u4e00\u4e2a\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u5b83\u53ea\u662f\u4e00\u4e2a\u6570\u636e\u5e93\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u6d88\u9664OLAPServer\u7684\u8fd9\u4e9b\u5c40\u9650\u6027\uff0c\u89e3\u51b3\u6240\u6709\u62a5\u8868\u4f7f\u7528\u975e\u805a\u5408\u6570\u636e\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5f00\u53d1\u4e86ClickHouse\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/introduction/ya_metrika_task/"},"\u6765\u6e90\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);