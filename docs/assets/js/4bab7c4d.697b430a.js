"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57693],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(n),c=r,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||s;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8299:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],p={slug:"/zh/operations/settings/settings-users",machine_translated:!1,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:63,sidebar_label:"\u7528\u6237\u8bbe\u7f6e"},l="\u7528\u6237\u8bbe\u7f6e",o={unversionedId:"zh/operations/settings/settings-users",id:"zh/operations/settings/settings-users",title:"\u7528\u6237\u8bbe\u7f6e",description:"user-settings}",source:"@site/docs/zh/operations/settings/settings-users.md",sourceDirName:"zh/operations/settings",slug:"/zh/operations/settings/settings-users",permalink:"/docs/zh/operations/settings/settings-users",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/settings/settings-users.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{slug:"/zh/operations/settings/settings-users",machine_translated:!1,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:63,sidebar_label:"\u7528\u6237\u8bbe\u7f6e"},sidebar:"chinese",previous:{title:"\u5bf9\u8bbe\u7f6e\u7684\u9650\u5236",permalink:"/docs/zh/operations/settings/constraints-on-settings"},next:{title:"MergeTree tables settings",permalink:"/docs/zh/operations/settings/merge-tree-settings"}},u={},m=[{value:"user_name/password",id:"user-namepassword",level:3},{value:"access_management",id:"access_management-user-setting",level:3},{value:"user_name/networks",id:"user-namenetworks",level:3},{value:"user_name/profile",id:"user-nameprofile",level:3},{value:"user_name/quota",id:"user-namequota",level:3},{value:"user_name/databases",id:"user-namedatabases",level:3}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"user-settings"},"\u7528\u6237\u8bbe\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"user.xml")," \u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," \u914d\u7f6e\u6bb5\u5305\u542b\u4e86\u7528\u6237\u914d\u7f6e"),(0,s.kt)("p",null,'!!! note "\u63d0\u793a"\nClickHouse\u8fd8\u652f\u6301 ',(0,s.kt)("a",{parentName:"p",href:"/docs/zh/operations/access-rights#access-control"},"SQL\u9a71\u52a8\u7684\u5de5\u4f5c\u6d41")," \u7528\u4e8e\u7ba1\u7406\u7528\u6237\u3002 \u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u5b83\u3002"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"users")," \u914d\u7f6e\u6bb5\u7684\u7ed3\u6784:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<users>\n    \x3c!-- If user name was not specified, \'default\' user is used. --\x3e\n    <user_name>\n        <password></password>\n        \x3c!-- Or --\x3e\n        <password_sha256_hex></password_sha256_hex>\n\n        <access_management>0|1</access_management>\n\n        <networks incl="networks" replace="replace">\n        </networks>\n\n        <profile>profile_name</profile>\n\n        <quota>default</quota>\n\n        <databases>\n            <database_name>\n                <table_name>\n                    <filter>expression</filter>\n                <table_name>\n            </database_name>\n        </databases>\n    </user_name>\n    \x3c!-- Other users settings --\x3e\n</users>\n')),(0,s.kt)("h3",{id:"user-namepassword"},"user_name/password"),(0,s.kt)("p",null,"\u5bc6\u7801\u53ef\u4ee5\u4ee5\u660e\u6587\u6216SHA256\uff08\u5341\u516d\u8fdb\u5236\u683c\u5f0f\uff09\u6307\u5b9a\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4ee5\u660e\u6587\u5f62\u5f0f\u5206\u914d\u5bc6\u7801 (",(0,s.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350"),"\uff09\uff0c\u628a\u5b83\u653e\u5728\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," \u914d\u7f6e\u6bb5\u4e2d\u3002"),(0,s.kt)("p",{parentName:"li"},"\u4f8b\u5982, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password>qwerty</password>"),". \u5bc6\u7801\u53ef\u4ee5\u7559\u7a7a\u3002"))),(0,s.kt)("a",{id:"password_sha256_hex"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u8981\u4f7f\u7528SHA256\u52a0\u5bc6\u540e\u7684\u5bc6\u7801\uff0c\u8bf7\u5c06\u5176\u653e\u7f6e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"password_sha256_hex")," \u914d\u7f6e\u6bb5\u3002"),(0,s.kt)("p",{parentName:"li"},"\u4f8b\u5982, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password_sha256_hex>65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5</password_sha256_hex>"),"."),(0,s.kt)("p",{parentName:"li"},"\u4eceshell\u751f\u6210\u52a0\u5bc6\u5bc6\u7801\u7684\u793a\u4f8b:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},'  PASSWORD=$(base64 < /dev/urandom | head -c8); echo "$PASSWORD"; echo -n "$PASSWORD" | sha256sum | tr -d \'-\'\n')),(0,s.kt)("p",{parentName:"li"},"\u7ed3\u679c\u7684\u7b2c\u4e00\u884c\u662f\u5bc6\u7801\u3002 \u7b2c\u4e8c\u884c\u662f\u76f8\u5e94\u7684SHA256\u54c8\u5e0c\u3002"))),(0,s.kt)("a",{id:"password_double_sha1_hex"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u4e0eMySQL\u5ba2\u6237\u7aef\u517c\u5bb9\uff0c\u5bc6\u7801\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u53ccSHA1\u54c8\u5e0c\u52a0\u5bc6, \u8bf7\u5c06\u5176\u653e\u7f6e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"password_double_sha1_hex")," \u914d\u7f6e\u6bb5\u3002"),(0,s.kt)("p",{parentName:"li"},"\u4f8b\u5982, ",(0,s.kt)("inlineCode",{parentName:"p"},"<password_double_sha1_hex>08b4a0f1de6ad37da17359e592c8d74788a83eb0</password_double_sha1_hex>"),"."),(0,s.kt)("p",{parentName:"li"},"\u4eceshell\u751f\u6210\u5bc6\u7801\u7684\u793a\u4f8b:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"  PASSWORD=$(base64 < /dev/urandom | head -c8); echo \"$PASSWORD\"; echo -n \"$PASSWORD\" | sha1sum | tr -d '-' | xxd -r -p | sha1sum | tr -d '-'\n")),(0,s.kt)("p",{parentName:"li"},"\u7ed3\u679c\u7684\u7b2c\u4e00\u884c\u662f\u5bc6\u7801\u3002 \u7b2c\u4e8c\u884c\u662f\u76f8\u5e94\u7684\u53ccSHA1\u54c8\u5e0c\u3002"))),(0,s.kt)("h3",{id:"access_management-user-setting"},"access_management"),(0,s.kt)("p",null,"\u6b64\u8bbe\u7f6e\u53ef\u4e3a\u7528\u6237\u542f\u7528\u6216\u7981\u7528 SQL-driven ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/operations/access-rights#access-control"},"\u8bbf\u95ee\u63a7\u5236\u548c\u5e10\u6237\u7ba1\u7406")," \u3002"),(0,s.kt)("p",null,"\u53ef\u80fd\u7684\u503c:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"0 \u2014 Disabled."),(0,s.kt)("li",{parentName:"ul"},"1 \u2014 Enabled.")),(0,s.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a0\u3002"),(0,s.kt)("h3",{id:"user-namenetworks"},"user_name/networks"),(0,s.kt)("p",null,"\u7528\u6237\u8bbf\u95ee\u6765\u6e90\u5217\u8868"),(0,s.kt)("p",null,"\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u53ef\u4ee5\u5177\u6709\u4ee5\u4e0b\u5f62\u5f0f\u4e4b\u4e00:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<ip>")," \u2014 IP\u5730\u5740\u6216\u7f51\u7edc\u63a9\u7801"),(0,s.kt)("p",{parentName:"li"},"\u4f8b: ",(0,s.kt)("inlineCode",{parentName:"p"},"213.180.204.3"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"10.0.0.1/8"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"10.0.0.1/255.255.255.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3/64"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"2a02:6b8::3/ffff:ffff:ffff:ffff::"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<host>")," \u2014 \u57df\u540d"),(0,s.kt)("p",{parentName:"li"},"\u793a\u4f8b: ",(0,s.kt)("inlineCode",{parentName:"p"},"example01.host.ru"),"."),(0,s.kt)("p",{parentName:"li"},"\u4e3a\u68c0\u67e5\u8bbf\u95ee\uff0c\u5c06\u6267\u884cDNS\u67e5\u8be2\uff0c\u5e76\u5c06\u6240\u6709\u8fd4\u56de\u7684IP\u5730\u5740\u4e0e\u5bf9\u7aef\u5730\u5740\u8fdb\u884c\u6bd4\u8f83\u3002")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"<host_regexp>")," \u2014 \u57df\u540d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f."),(0,s.kt)("p",{parentName:"li"},"\u793a\u4f8b, ",(0,s.kt)("inlineCode",{parentName:"p"},"^example\\d\\d-\\d\\d-\\d\\.host\\.ru$")),(0,s.kt)("p",{parentName:"li"},"\u4e3a\u68c0\u67e5\u8bbf\u95ee\uff0c",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reverse_DNS_lookup"},"DNS PTR\u67e5\u8be2")," \u5bf9\u5bf9\u7aef\u5730\u5740\u6267\u884c\uff0c\u7136\u540e\u5e94\u7528\u6307\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002 \u7136\u540e\uff0c\u4ee5PTR\u67e5\u8be2\u7684\u7ed3\u679c\u6267\u884c\u53e6\u4e00\u4e2aDNS\u67e5\u8be2\uff0c\u5e76\u5c06\u6240\u6709\u63a5\u6536\u5230\u7684\u5730\u5740\u4e0e\u5bf9\u7aef\u5730\u5740\u8fdb\u884c\u6bd4\u8f83. \u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u6b63\u5219\u8868\u8fbe\u5f0f\u4ee5$\u7ed3\u5c3e."))),(0,s.kt)("p",null,"DNS\u8bf7\u6c42\u7684\u6240\u6709\u7ed3\u679c\u90fd\u5c06\u88ab\u7f13\u5b58\uff0c\u76f4\u5230\u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4f8b")),(0,s.kt)("p",null,"\u8981\u5f00\u542f\u4efb\u610f\u6765\u6e90\u7f51\u7edc\u7684\u8bbf\u95ee, \u8bf7\u6307\u5b9a:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<ip>::/0</ip>\n")),(0,s.kt)("p",null,'!!! warning "\u8b66\u544a"\n\u4ece\u4efb\u4f55\u7f51\u7edc\u5f00\u653e\u8bbf\u95ee\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u9664\u975e\u4f60\u6709\u4e00\u4e2a\u6b63\u786e\u914d\u7f6e\u7684\u9632\u706b\u5899, \u6216\u8005\u670d\u52a1\u5668\u6ca1\u6709\u76f4\u63a5\u8fde\u63a5\u5230\u4e92\u8054\u7f51\u3002'),(0,s.kt)("p",null,"\u82e5\u8981\u9650\u5b9a\u672c\u673a\u8bbf\u95ee, \u8bf7\u6307\u5b9a:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<ip>::1</ip>\n<ip>127.0.0.1</ip>\n")),(0,s.kt)("h3",{id:"user-nameprofile"},"user_name/profile"),(0,s.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u7528\u6237\u5206\u914d\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u3002 \u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," \u4e2d\u6709\u5355\u72ec\u7684\u914d\u7f6e\u6bb5. \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings-profiles"},"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6"),"."),(0,s.kt)("h3",{id:"user-namequota"},"user_name/quota"),(0,s.kt)("p",null,"\u914d\u989d\u5141\u8bb8\u60a8\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u8ddf\u8e2a\u6216\u9650\u5236\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002 \u914d\u989d\u5728",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," \u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"quotas")," \u914d\u7f6e\u6bb5\u4e0b."),(0,s.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u7528\u6237\u5206\u914d\u914d\u989d\u3002 \u6709\u5173\u914d\u989d\u914d\u7f6e\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/operations/quotas#quotas"},"\u914d\u989d"),"."),(0,s.kt)("h3",{id:"user-namedatabases"},"user_name/databases"),(0,s.kt)("p",null,"\u5728\u672c\u914d\u7f6e\u6bb5\u4e2d\uff0c\u60a8\u53ef\u4ee5\u9650\u5236ClickHouse\u4e2d\u7531\u5f53\u524d\u7528\u6237\u8fdb\u884c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u6240\u8fd4\u56de\u7684\u884c\uff0c\u4ece\u800c\u5b9e\u73b0\u57fa\u672c\u7684\u884c\u7ea7\u5b89\u5168\u6027\u3002"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,s.kt)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u4f7f\u7528\u6237 ",(0,s.kt)("inlineCode",{parentName:"p"},"user1")," \u901a\u8fc7SELECT\u67e5\u8be2\u53ea\u80fd\u5f97\u5230table1\u4e2did\u4e3a1000\u7684\u884c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<user1>\n    <databases>\n        <database_name>\n            <table1>\n                <filter>id = 1000</filter>\n            </table1>\n        </database_name>\n    </databases>\n</user1>\n")),(0,s.kt)("p",null,"\u8be5 ",(0,s.kt)("inlineCode",{parentName:"p"},"filter")," \u53ef\u4ee5\u662f",(0,s.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt8"),"\u7f16\u7801\u7684\u4efb\u4f55\u8868\u8fbe\u5f0f\u3002 \u5b83\u901a\u5e38\u5305\u542b\u6bd4\u8f83\u548c\u903b\u8f91\u8fd0\u7b97\u7b26, \u5f53filter\u8fd4\u56de0\u65f6, database_name.table1 \u7684\u8be5\u884c\u7ed3\u679c\u5c06\u4e0d\u4f1a\u8fd4\u56de\u7ed9\u7528\u6237.\u8fc7\u6ee4\u4e0d\u517c\u5bb9 ",(0,s.kt)("inlineCode",{parentName:"p"},"PREWHERE")," \u64cd\u4f5c\u5e76\u7981\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"WHERE\u2192PREWHERE")," \u4f18\u5316\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/settings_users/"},"\u539f\u59cb\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);