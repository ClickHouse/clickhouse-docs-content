"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[82270],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>U});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var I=i.createContext({}),l=function(t){var e=i.useContext(I),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=l(t.components);return i.createElement(I.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,I=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),g=l(n),U=r,m=g["".concat(I,".").concat(U)]||g[U]||d[U]||a;return n?i.createElement(m,s(s({ref:e},c),{},{components:n})):i.createElement(m,s({ref:e},c))}));function U(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var I in e)hasOwnProperty.call(e,I)&&(o[I]=e[I]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},84946:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>I,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={slug:"/zh/getting-started/example-datasets/metrica",sidebar_position:15,sidebar_label:"Yandex.Metrica Data"},s="Anonymized Yandex.Metrica Data",o={unversionedId:"zh/getting-started/example-datasets/metrica",id:"zh/getting-started/example-datasets/metrica",title:"Anonymized Yandex.Metrica Data",description:"anonymized-yandex-metrica-data}",source:"@site/docs/zh/getting-started/example-datasets/metrica.md",sourceDirName:"zh/getting-started/example-datasets",slug:"/zh/getting-started/example-datasets/metrica",permalink:"/docs/zh/getting-started/example-datasets/metrica",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/getting-started/example-datasets/metrica.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{slug:"/zh/getting-started/example-datasets/metrica",sidebar_position:15,sidebar_label:"Yandex.Metrica Data"},sidebar:"chinese",previous:{title:"GitHub \u4e8b\u4ef6\u6570\u636e\u96c6",permalink:"/docs/zh/getting-started/example-datasets/github-events"},next:{title:"Star Schema Benchmark",permalink:"/docs/zh/getting-started/example-datasets/star-schema"}},I={},l=[{value:"\u4ece\u51c6\u5907\u597d\u7684\u5206\u533a\u83b7\u53d6\u8868",id:"obtaining-tables-from-prepared-partitions",level:2},{value:"\u4eceTSV\u538b\u7f29\u6587\u4ef6\u83b7\u53d6\u8868",id:"obtaining-tables-from-compressed-tsv-file",level:2},{value:"\u67e5\u8be2\u793a\u4f8b",id:"example-queries",level:2}],c={toc:l};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anonymized-yandex-metrica-data"},"Anonymized Yandex.Metrica Data"),(0,r.kt)("p",null,"\u6570\u636e\u96c6\u7531\u4e24\u4e2a\u8868\u7ec4\u6210\uff0c\u5305\u542b\u5173\u4e8eYandex.Metrica\u7684hits(",(0,r.kt)("inlineCode",{parentName:"p"},"hits_v1"),")\u548cvisit(",(0,r.kt)("inlineCode",{parentName:"p"},"visits_v1"),")\u7684\u533f\u540d\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u9605\u8bfb\u66f4\u591a\u5173\u4e8eYandex\u7684\u4fe1\u606f\u3002\u5728",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/introduction/history"},"ClickHouse\u5386\u53f2"),"\u7684Metrica\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u6570\u636e\u96c6\u7531\u4e24\u4e2a\u8868\u7ec4\u6210\uff0c\u4ed6\u4eec\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u90fd\u53ef\u4ee5\u4e0b\u8f7d\u4f5c\u4e3a\u4e00\u4e2a\u538b\u7f29",(0,r.kt)("inlineCode",{parentName:"p"},"tsv.xz"),"\u7684\u6587\u4ef6\u6216\u51c6\u5907\u7684\u5206\u533a\u3002\u9664\u6b64\u4e4b\u5916,\u4e00\u4e2a\u6269\u5c55\u7248\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"hits"),"\u8868\u5305\u542b1\u4ebf\u884cTSV\u5728",(0,r.kt)("a",{parentName:"p",href:"https://datasets.clickhouse.com/hits/tsv/hits_100m_obfuscated_v1.tsv.xz%EF%BC%8C%E5%87%86%E5%A4%87%E5%88%86%E5%8C%BA%E5%9C%A8https://datasets.clickhouse.com/hits/partitions/hits_100m_obfuscated_v1.tar.xz%E3%80%82"},"https://datasets.clickhouse.com/hits/tsv/hits_100m_obfuscated_v1.tsv.xz\uff0c\u51c6\u5907\u5206\u533a\u5728https://datasets.clickhouse.com/hits/partitions/hits_100m_obfuscated_v1.tar.xz\u3002")),(0,r.kt)("h2",{id:"obtaining-tables-from-prepared-partitions"},"\u4ece\u51c6\u5907\u597d\u7684\u5206\u533a\u83b7\u53d6\u8868"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u548c\u5bfc\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"hits"),"\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -O https://datasets.clickhouse.com/hits/partitions/hits_v1.tar\ntar xvf hits_v1.tar -C /var/lib/clickhouse # path to ClickHouse data directory\n# check permissions on unpacked data, fix if required\nsudo service clickhouse-server restart\nclickhouse-client --query "SELECT COUNT(*) FROM datasets.hits_v1"\n')),(0,r.kt)("p",null,"\u4e0b\u8f7d\u548c\u5bfc\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"visits"),"\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -O https://datasets.clickhouse.com/visits/partitions/visits_v1.tar\ntar xvf visits_v1.tar -C /var/lib/clickhouse # path to ClickHouse data directory\n# check permissions on unpacked data, fix if required\nsudo service clickhouse-server restart\nclickhouse-client --query "SELECT COUNT(*) FROM datasets.visits_v1"\n')),(0,r.kt)("h2",{id:"obtaining-tables-from-compressed-tsv-file"},"\u4eceTSV\u538b\u7f29\u6587\u4ef6\u83b7\u53d6\u8868"),(0,r.kt)("p",null,"\u4eceTSV\u538b\u7f29\u6587\u4ef6\u4e0b\u8f7d\u5e76\u5bfc\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"hits"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz | unxz --threads=`nproc` > hits_v1.tsv\n# now create table\nclickhouse-client --query "CREATE DATABASE IF NOT EXISTS datasets"\nclickhouse-client --query "CREATE TABLE datasets.hits_v1 ( WatchID UInt64,  JavaEnable UInt8,  Title String,  GoodEvent Int16,  EventTime DateTime,  EventDate Date,  CounterID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RegionID UInt32,  UserID UInt64,  CounterClass Int8,  OS UInt8,  UserAgent UInt8,  URL String,  Referer String,  URLDomain String,  RefererDomain String,  Refresh UInt8,  IsRobot UInt8,  RefererCategories Array(UInt16),  URLCategories Array(UInt16), URLRegions Array(UInt32),  RefererRegions Array(UInt32),  ResolutionWidth UInt16,  ResolutionHeight UInt16,  ResolutionDepth UInt8,  FlashMajor UInt8, FlashMinor UInt8,  FlashMinor2 String,  NetMajor UInt8,  NetMinor UInt8, UserAgentMajor UInt16,  UserAgentMinor FixedString(2),  CookieEnable UInt8, JavascriptEnable UInt8,  IsMobile UInt8,  MobilePhone UInt8,  MobilePhoneModel String,  Params String,  IPNetworkID UInt32,  TraficSourceID Int8, SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  IsArtifical UInt8,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  ClientTimeZone Int16,  ClientEventTime DateTime,  SilverlightVersion1 UInt8, SilverlightVersion2 UInt8,  SilverlightVersion3 UInt32,  SilverlightVersion4 UInt16,  PageCharset String,  CodeVersion UInt32,  IsLink UInt8,  IsDownload UInt8,  IsNotBounce UInt8,  FUniqID UInt64,  HID UInt32,  IsOldCounter UInt8, IsEvent UInt8,  IsParameter UInt8,  DontCountHits UInt8,  WithHash UInt8, HitColor FixedString(1),  UTCEventTime DateTime,  Age UInt8,  Sex UInt8,  Income UInt8,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16), RemoteIP UInt32,  RemoteIP6 FixedString(16),  WindowName Int32,  OpenerName Int32,  HistoryLength Int16,  BrowserLanguage FixedString(2),  BrowserCountry FixedString(2),  SocialNetwork String,  SocialAction String,  HTTPError UInt16, SendTiming Int32,  DNSTiming Int32,  ConnectTiming Int32,  ResponseStartTiming Int32,  ResponseEndTiming Int32,  FetchTiming Int32,  RedirectTiming Int32, DOMInteractiveTiming Int32,  DOMContentLoadedTiming Int32,  DOMCompleteTiming Int32,  LoadEventStartTiming Int32,  LoadEventEndTiming Int32, NSToDOMContentLoadedTiming Int32,  FirstPaintTiming Int32,  RedirectCount Int8, SocialSourceNetworkID UInt8,  SocialSourcePage String,  ParamPrice Int64, ParamOrderID String,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16, GoalsReached Array(UInt32),  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String, UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String, FromTag String,  HasGCLID UInt8,  RefererHash UInt64,  URLHash UInt64,  CLID UInt32,  YCLID UInt64,  ShareService String,  ShareURL String,  ShareTitle String,  ParsedParams Nested(Key1 String,  Key2 String, Key3 String, Key4 String, Key5 String,  ValueDouble Float64),  IslandID FixedString(16),  RequestNum UInt32,  RequestTry UInt8) ENGINE = MergeTree() PARTITION BY toYYYYMM(EventDate) ORDER BY (CounterID, EventDate, intHash32(UserID)) SAMPLE BY intHash32(UserID) SETTINGS index_granularity = 8192"\n# import data\ncat hits_v1.tsv | clickhouse-client --query "INSERT INTO datasets.hits_v1 FORMAT TSV" --max_insert_block_size=100000\n# optionally you can optimize table\nclickhouse-client --query "OPTIMIZE TABLE datasets.hits_v1 FINAL"\nclickhouse-client --query "SELECT COUNT(*) FROM datasets.hits_v1"\n')),(0,r.kt)("p",null,"\u4ece\u538b\u7f29tsv\u6587\u4ef6\u4e0b\u8f7d\u548c\u5bfc\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"visits"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://datasets.clickhouse.com/visits/tsv/visits_v1.tsv.xz | unxz --threads=`nproc` > visits_v1.tsv\n# now create table\nclickhouse-client --query "CREATE DATABASE IF NOT EXISTS datasets"\nclickhouse-client --query "CREATE TABLE datasets.visits_v1 ( CounterID UInt32,  StartDate Date,  Sign Int8,  IsNew UInt8,  VisitID UInt64,  UserID UInt64,  StartTime DateTime,  Duration UInt32,  UTCStartTime DateTime,  PageViews Int32,  Hits Int32,  IsBounce UInt8,  Referer String,  StartURL String,  RefererDomain String,  StartURLDomain String,  EndURL String,  LinkURL String,  IsDownload UInt8,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  PlaceID Int32,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  IsYandex UInt8,  GoalReachesDepth Int32,  GoalReachesURL Int32,  GoalReachesAny Int32,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  MobilePhoneModel String,  ClientEventTime DateTime,  RegionID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  IPNetworkID UInt32,  SilverlightVersion3 UInt32,  CodeVersion UInt32,  ResolutionWidth UInt16,  ResolutionHeight UInt16,  UserAgentMajor UInt16,  UserAgentMinor UInt16,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  SilverlightVersion2 UInt8,  SilverlightVersion4 UInt16,  FlashVersion3 UInt16,  FlashVersion4 UInt16,  ClientTimeZone Int16,  OS UInt8,  UserAgent UInt8,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  NetMajor UInt8,  NetMinor UInt8,  MobilePhone UInt8,  SilverlightVersion1 UInt8,  Age UInt8,  Sex UInt8,  Income UInt8,  JavaEnable UInt8,  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  BrowserLanguage UInt16,  BrowserCountry UInt16,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  Params Array(String),  Goals Nested(ID UInt32, Serial UInt32, EventTime DateTime,  Price Int64,  OrderID String, CurrencyID UInt32),  WatchIDs Array(UInt64),  ParamSumPrice Int64,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  ClickLogID UInt64,  ClickEventID Int32,  ClickGoodEvent Int32,  ClickEventTime DateTime,  ClickPriorityID Int32,  ClickPhraseID Int32,  ClickPageID Int32,  ClickPlaceID Int32,  ClickTypeID Int32,  ClickResourceID Int32,  ClickCost UInt32,  ClickClientIP UInt32,  ClickDomainID UInt32,  ClickURL String,  ClickAttempt UInt8,  ClickOrderID UInt32,  ClickBannerID UInt32,  ClickMarketCategoryID UInt32,  ClickMarketPP UInt32,  ClickMarketCategoryName String,  ClickMarketPPName String,  ClickAWAPSCampaignName String,  ClickPageName String,  ClickTargetType UInt16,  ClickTargetPhraseID UInt64,  ClickContextType UInt8,  ClickSelectType Int8,  ClickOptions String,  ClickGroupBannerID Int32,  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  FirstVisit DateTime,  PredLastVisit Date,  LastVisit Date,  TotalVisits UInt32,  TraficSource    Nested(ID Int8,  SearchEngineID UInt16, AdvEngineID UInt8, PlaceID UInt16, SocialSourceNetworkID UInt8, Domain String, SearchPhrase String, SocialSourcePage String),  Attendance FixedString(16),  CLID UInt32,  YCLID UInt64,  NormalizedRefererHash UInt64,  SearchPhraseHash UInt64,  RefererDomainHash UInt64,  NormalizedStartURLHash UInt64,  StartURLDomainHash UInt64,  NormalizedEndURLHash UInt64,  TopLevelDomain UInt64,  URLScheme UInt64,  OpenstatServiceNameHash UInt64,  OpenstatCampaignIDHash UInt64,  OpenstatAdIDHash UInt64,  OpenstatSourceIDHash UInt64,  UTMSourceHash UInt64,  UTMMediumHash UInt64,  UTMCampaignHash UInt64,  UTMContentHash UInt64,  UTMTermHash UInt64,  FromHash UInt64,  WebVisorEnabled UInt8,  WebVisorActivity UInt32,  ParsedParams    Nested(Key1 String,  Key2 String,  Key3 String,  Key4 String, Key5 String, ValueDouble    Float64),  Market Nested(Type UInt8, GoalID UInt32, OrderID String,  OrderPrice Int64,  PP UInt32,  DirectPlaceID UInt32,  DirectOrderID  UInt32,  DirectBannerID UInt32,  GoodID String, GoodName String, GoodQuantity Int32,  GoodPrice Int64),  IslandID FixedString(16)) ENGINE = CollapsingMergeTree(Sign) PARTITION BY toYYYYMM(StartDate) ORDER BY (CounterID, StartDate, intHash32(UserID), VisitID) SAMPLE BY intHash32(UserID) SETTINGS index_granularity = 8192"\n# import data\ncat visits_v1.tsv | clickhouse-client --query "INSERT INTO datasets.visits_v1 FORMAT TSV" --max_insert_block_size=100000\n# optionally you can optimize table\nclickhouse-client --query "OPTIMIZE TABLE datasets.visits_v1 FINAL"\nclickhouse-client --query "SELECT COUNT(*) FROM datasets.visits_v1"\n')),(0,r.kt)("h2",{id:"example-queries"},"\u67e5\u8be2\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/zh/getting-started/tutorial"},"\u4f7f\u7528\u6559\u7a0b"),"\u662f\u4ee5Yandex.Metrica\u6570\u636e\u96c6\u5f00\u59cb\u6559\u7a0b\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728ClickHouse\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/tree/master/tests/queries/1_stateful"},"stateful tests")," \u4e2d\u627e\u5230\u5bf9\u8fd9\u4e9b\u8868\u7684\u67e5\u8be2\u7684\u5176\u4ed6\u793a\u4f8b(\u5b83\u4eec\u88ab\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"test.hists"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"test.visits"),")\u3002"))}d.isMDXComponent=!0}}]);