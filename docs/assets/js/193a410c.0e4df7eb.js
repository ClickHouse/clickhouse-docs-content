"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[92006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=s,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},g),{},{components:r})):n.createElement(m,a({ref:t},g))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const i={slug:"/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",sidebar_position:222},a="stochasticLogisticRegression",o={unversionedId:"zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",id:"zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",title:"stochasticLogisticRegression",description:"agg_functions-stochasticlogisticregression}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression.md",tags:[],version:"current",sidebarPosition:222,frontMatter:{slug:"/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression",sidebar_position:222},sidebar:"chinese",previous:{title:"stochasticLinearRegression",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression"},next:{title:"categoricalInformationValue",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue"}},c={},l=[{value:"\u53c2\u6570",id:"agg_functions-stochasticlogisticregression-parameters",level:3}],g={toc:l};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"agg_functions-stochasticlogisticregression"},"stochasticLogisticRegression"),(0,s.kt)("p",null,"\u8be5\u51fd\u6570\u5b9e\u73b0\u968f\u673a\u903b\u8f91\u56de\u5f52\u3002 \u5b83\u53ef\u4ee5\u7528\u4e8e\u4e8c\u8fdb\u5236\u5206\u7c7b\u95ee\u9898\uff0c\u652f\u6301\u4e0estochasticLinearRegression\u76f8\u540c\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u5e76\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u5de5\u4f5c\u3002"),(0,s.kt)("h3",{id:"agg_functions-stochasticlogisticregression-parameters"},"\u53c2\u6570"),(0,s.kt)("p",null,"\u53c2\u6570\u4e0estochasticLinearRegression\u4e2d\u7684\u53c2\u6570\u5b8c\u5168\u76f8\u540c:\n",(0,s.kt)("inlineCode",{parentName:"p"},"learning rate"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"l2 regularization coefficient"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"mini-batch size"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"method for updating weights"),".\n\u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53c2\u89c1 ","[\u53c2\u6570]"," (#agg_functions-stochasticlinearregression-parameters)."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"stochasticLogisticRegression(1.0, 1.0, 10, 'SGD')\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"1.")," \u62df\u5408"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u53c2\u8003[stochasticLinearRegression](#stochasticlinearregression-usage-fitting)  `\u62df\u5408` \u7ae0\u8282\u6587\u6863\u3002\n\n\u9884\u6d4b\u6807\u7b7e\u7684\u53d6\u503c\u8303\u56f4\u4e3a\\[-1, 1\\]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"2.")," \u9884\u6d4b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u4f7f\u7528\u5df2\u7ecf\u4fdd\u5b58\u7684state\u6211\u4eec\u53ef\u4ee5\u9884\u6d4b\u6807\u7b7e\u4e3a `1` \u7684\u5bf9\u8c61\u7684\u6982\u7387\u3002\n``` sql\nWITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) FROM test_data\n```\n\n\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u4e00\u4e2a\u5217\u7684\u6982\u7387\u3002\u6ce8\u610f `evalMLMethod` \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f `AggregateFunctionState` \u5bf9\u8c61\uff0c\u63a5\u4e0b\u6765\u7684\u53c2\u6570\u662f\u5217\u7684\u7279\u6027\u3002\n\n\u6211\u4eec\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6982\u7387\u7684\u8303\u56f4\uff0c \u8fd9\u6837\u9700\u8981\u7ed9\u5143\u7d20\u6307\u5b9a\u4e0d\u540c\u7684\u6807\u7b7e\u3002\n\n``` sql\nSELECT ans < 1.1 AND ans > 0.5 FROM\n(WITH (SELECT state FROM your_model) AS model SELECT\nevalMLMethod(model, param1, param2) AS ans FROM test_data)\n```\n\n  \u7ed3\u679c\u662f\u6807\u7b7e\u3002\n\n`test_data` \u662f\u4e00\u4e2a\u50cf `train_data` \u4e00\u6837\u7684\u8868\uff0c\u4f46\u662f\u4e0d\u5305\u542b\u76ee\u6807\u503c\u3002\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/aggregate-functions/reference/stochasticlinearregression#agg_functions-stochasticlinearregression"},"\u968f\u673a\u6307\u6807\u7ebf\u6027\u56de\u5f52")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/12146914/what-is-the-difference-between-linear-regression-and-logistic-regression"},"\u7ebf\u6027\u56de\u5f52\u548c\u903b\u8f91\u56de\u5f52\u4e4b\u95f4\u7684\u5dee\u5f02"))))}p.isMDXComponent=!0}}]);