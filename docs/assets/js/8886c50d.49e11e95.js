"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={slug:"/en/operations/configuration-files",sidebar_position:50,sidebar_label:"Configuration Files"},o="Configuration Files",s={unversionedId:"en/operations/configuration-files",id:"en/operations/configuration-files",title:"Configuration Files",description:"ClickHouse supports multi-file configuration management. The main server configuration file is /etc/clickhouse-server/config.xml or /etc/clickhouse-server/config.yaml. Other files must be in the /etc/clickhouse-server/config.d directory. Note, that any configuration file can be written either in XML or YAML, but mixing formats in one file is not supported. For example, you can have main configs as config.xml and users.xml and write additional files in config.d and users.d directories in .yaml.",source:"@site/docs/en/operations/configuration-files.md",sourceDirName:"en/operations",slug:"/en/operations/configuration-files",permalink:"/docs/en/operations/configuration-files",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/configuration-files.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{slug:"/en/operations/configuration-files",sidebar_position:50,sidebar_label:"Configuration Files"},sidebar:"english",previous:{title:"Configuration",permalink:"/docs/en/manage/configuration"},next:{title:"Settings",permalink:"/docs/en/operations/settings/"}},l={},u=[{value:"Override",id:"override",level:2},{value:"Substitution",id:"substitution",level:2},{value:"User Settings",id:"user-settings",level:2},{value:"XML example",id:"example",level:2},{value:"YAML examples",id:"example",level:2},{value:"Implementation Details",id:"implementation-details",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-files"},"Configuration Files"),(0,a.kt)("p",null,"ClickHouse supports multi-file configuration management. The main server configuration file is ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.yaml"),". Other files must be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d")," directory. Note, that any configuration file can be written either in XML or YAML, but mixing formats in one file is not supported. For example, you can have main configs as ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"users.xml")," and write additional files in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.d")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"users.d")," directories in ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml"),"."),(0,a.kt)("p",null,"All XML files should have the same root element, usually ",(0,a.kt)("inlineCode",{parentName:"p"},"<clickhouse>"),". As for YAML, ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse:")," should not be present, the parser will insert it automatically."),(0,a.kt)("h2",{id:"override"},"Override"),(0,a.kt)("p",null,"Some settings specified in the main configuration file can be overridden in other configuration files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"replace")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"remove")," attributes can be specified for the elements of these configuration files."),(0,a.kt)("li",{parentName:"ul"},"If neither is specified, it combines the contents of elements recursively, replacing values of duplicate children."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"replace")," is specified, it replaces the entire element with the specified one."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"remove")," is specified, it deletes the element.")),(0,a.kt)("p",null,"You can also declare attributes as coming from environment variables by using ",(0,a.kt)("inlineCode",{parentName:"p"},'from_env="VARIABLE_NAME"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    <macros>\n        <replica from_env="REPLICA" />\n        <layer from_env="LAYER" />\n        <shard from_env="SHARD" />\n    </macros>\n</clickhouse>\n')),(0,a.kt)("h2",{id:"substitution"},"Substitution"),(0,a.kt)("p",null,"The config can also define \u201csubstitutions\u201d. If an element has the ",(0,a.kt)("inlineCode",{parentName:"p"},"incl")," attribute, the corresponding substitution from the file will be used as the value. By default, the path to the file with substitutions is ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/metrika.xml"),". This can be changed in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#server_configuration_parameters-include_from"},"include_from")," element in the server config. The substitution values are specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"/clickhouse/substitution_name")," elements in this file. If a substitution specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"incl")," does not exist, it is recorded in the log. To prevent ClickHouse from logging missing substitutions, specify the ",(0,a.kt)("inlineCode",{parentName:"p"},'optional="true"')," attribute (for example, settings for ",(0,a.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#macros"},"macros"),")."),(0,a.kt)("p",null,"If you want to replace an entire element with a substitution use ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," as the element name."),(0,a.kt)("p",null,"XML substitution example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<clickhouse>\n    \x3c!-- Appends XML subtree found at `/profiles-in-zookeeper` ZK path to `<profiles>` element. --\x3e\n    <profiles from_zk="/profiles-in-zookeeper" />\n\n    <users>\n        \x3c!-- Replaces `include` element with the subtree found at `/users-in-zookeeper` ZK path. --\x3e\n        <include from_zk="/users-in-zookeeper" />\n        <include from_zk="/other-users-in-zookeeper" />\n    </users>\n</clickhouse>\n')),(0,a.kt)("p",null,"Substitutions can also be performed from ZooKeeper. To do this, specify the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},'from_zk = "/path/to/node"'),". The element value is replaced with the contents of the node at ",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/node")," in ZooKeeper. You can also put an entire XML subtree on the ZooKeeper node and it will be fully inserted into the source element."),(0,a.kt)("h2",{id:"user-settings"},"User Settings"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," file can specify a separate config with user settings, profiles, and quotas. The relative path to this config is set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"users_config")," element. By default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"users.xml"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"users_config")," is omitted, the user settings, profiles, and quotas are specified directly in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml"),"."),(0,a.kt)("p",null,"Users configuration can be split into separate files similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"config.xml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.d/"),".\nDirectory name is defined as ",(0,a.kt)("inlineCode",{parentName:"p"},"users_config")," setting without ",(0,a.kt)("inlineCode",{parentName:"p"},".xml")," postfix concatenated with ",(0,a.kt)("inlineCode",{parentName:"p"},".d"),".\nDirectory ",(0,a.kt)("inlineCode",{parentName:"p"},"users.d")," is used by default, as ",(0,a.kt)("inlineCode",{parentName:"p"},"users_config")," defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"users.xml"),"."),(0,a.kt)("p",null,"Note that configuration files are first merged taking into account ",(0,a.kt)("a",{parentName:"p",href:"#override"},"Override")," settings and includes are processed after that."),(0,a.kt)("h2",{id:"example"},"XML example"),(0,a.kt)("p",null,"For example, you can have separate config file for each user like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/clickhouse-server/users.d/alice.xml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <users>\n      <alice>\n          <profile>analytics</profile>\n            <networks>\n                  <ip>::/0</ip>\n            </networks>\n          <password_sha256_hex>...</password_sha256_hex>\n          <quota>analytics</quota>\n      </alice>\n    </users>\n</clickhouse>\n")),(0,a.kt)("h2",{id:"example"},"YAML examples"),(0,a.kt)("p",null,"Here you can see default config written in YAML: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/programs/server/config.yaml.example"},"config.yaml.example"),"."),(0,a.kt)("p",null,"There are some differences between YAML and XML formats in terms of ClickHouse configurations. Here are some tips for writing a configuration in YAML format."),(0,a.kt)("p",null,"You should use a Scalar node to write a key-value pair:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: value\n")),(0,a.kt)("p",null,"To create a node, containing other nodes you should use a Map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"map_key:\n  key1: val1\n  key2: val2\n  key3: val3\n")),(0,a.kt)("p",null,"To create a list of values or nodes assigned to one tag you should use a Sequence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"seq_key:\n  - val1\n  - val2\n  - key1: val3\n  - map:\n      key2: val4\n      key3: val5\n")),(0,a.kt)("p",null,"If you want to write an attribute for a Sequence or Map node, you should use a @ prefix before the attribute key. Note, that @ is reserved by YAML standard, so you should also to wrap it into double quotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'map:\n  "@attr1": value1\n  "@attr2": value2\n  key: 123\n')),(0,a.kt)("p",null,"From that Map we will get these XML nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<map attr1="value1" attr2="value2">\n    <key>123</key>\n</map>\n')),(0,a.kt)("p",null,"You can also set attributes for Sequence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'seq:\n  - "@attr1": value1\n  - "@attr2": value2\n  - 123\n  - abc\n')),(0,a.kt)("p",null,"So, we can get YAML config equal to this XML one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<seq attr1="value1" attr2="value2">123</seq>\n<seq attr1="value1" attr2="value2">abc</seq>\n')),(0,a.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"For each config file, the server also generates ",(0,a.kt)("inlineCode",{parentName:"p"},"file-preprocessed.xml")," files when starting. These files contain all the completed substitutions and overrides, and they are intended for informational use. If ZooKeeper substitutions were used in the config files but ZooKeeper is not available on the server start, the server loads the configuration from the preprocessed file."),(0,a.kt)("p",null,"The server tracks changes in config files, as well as files and ZooKeeper nodes that were used when performing substitutions and overrides, and reloads the settings for users and clusters on the fly. This means that you can modify the cluster, users, and their settings without restarting the server."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/configuration-files/"},"Original article")," "))}c.isMDXComponent=!0}}]);