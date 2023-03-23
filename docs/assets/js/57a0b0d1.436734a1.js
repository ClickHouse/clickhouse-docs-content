"use strict";(self.webpackChunknew_nav_docusaurus_2_2=self.webpackChunknew_nav_docusaurus_2_2||[]).push([[5770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={slug:"/en/development/developer-instruction",sidebar_position:61,sidebar_label:"Getting Started",description:"Prerequisites and an overview of how to build ClickHouse"},a="Getting Started Guide for Building ClickHouse",l={unversionedId:"en/development/developer-instruction",id:"en/development/developer-instruction",title:"Getting Started Guide for Building ClickHouse",description:"Prerequisites and an overview of how to build ClickHouse",source:"@site/docs/en/development/developer-instruction.md",sourceDirName:"en/development",slug:"/en/development/developer-instruction",permalink:"/docs/en/development/developer-instruction",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/development/developer-instruction.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{slug:"/en/development/developer-instruction",sidebar_position:61,sidebar_label:"Getting Started",description:"Prerequisites and an overview of how to build ClickHouse"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/en/whats-new/roadmap"},next:{title:"Architecture Overview",permalink:"/docs/en/development/architecture"}},s={},u=[{value:"Creating a Repository on GitHub",id:"creating-a-repository-on-github",level:2},{value:"Cloning a Repository to Your Development Machine",id:"cloning-a-repository-to-your-development-machine",level:2},{value:"Working with Submodules",id:"working-with-submodules",level:3},{value:"Build System",id:"build-system",level:2},{value:"C++ Compiler",id:"c-compiler",level:2},{value:"The Building Process",id:"the-building-process",level:2},{value:"Running the Built Executable of ClickHouse",id:"running-the-built-executable-of-clickhouse",level:2},{value:"IDE (Integrated Development Environment)",id:"ide-integrated-development-environment",level:2},{value:"Writing Code",id:"writing-code",level:2},{value:"Test Data",id:"test-data",level:2},{value:"Creating Pull Request",id:"creating-pull-request",level:2},{value:"Browse ClickHouse Source Code",id:"browse-clickhouse-source-code",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-guide-for-building-clickhouse"},"Getting Started Guide for Building ClickHouse"),(0,r.kt)("p",null,"The building of ClickHouse is supported on Linux, FreeBSD and macOS."),(0,r.kt)("p",null,"If you use Windows, you need to create a virtual machine with Ubuntu. To start working with a virtual machine please install VirtualBox. You can download Ubuntu from the website: ",(0,r.kt)("a",{parentName:"p",href:"https://www.ubuntu.com/#download"},"https://www.ubuntu.com/#download"),". Please create a virtual machine from the downloaded image (you should reserve at least 4GB of RAM for it). To run a command-line terminal in Ubuntu, please locate a program containing the word \u201cterminal\u201d in its name (gnome-terminal, konsole etc.) or just press Ctrl+Alt+T."),(0,r.kt)("p",null,"ClickHouse cannot work or build on a 32-bit system. You should acquire access to a 64-bit system and you can continue reading."),(0,r.kt)("h2",{id:"creating-a-repository-on-github"},"Creating a Repository on GitHub"),(0,r.kt)("p",null,"To start working with ClickHouse repository you will need a GitHub account."),(0,r.kt)("p",null,"You probably already have one, but if you do not, please register at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com."},"https://github.com.")," In case you do not have SSH keys, you should generate them and then upload them on GitHub. It is required for sending over your patches. It is also possible to use the same SSH keys that you use with any other SSH servers - probably you already have those."),(0,r.kt)("p",null,"Create a fork of ClickHouse repository. To do that please click on the \u201cfork\u201d button in the upper right corner at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"https://github.com/ClickHouse/ClickHouse"),". It will fork your own copy of ClickHouse/ClickHouse to your account."),(0,r.kt)("p",null,"The development process consists of first committing the intended changes into your fork of ClickHouse and then creating a \u201cpull request\u201d for these changes to be accepted into the main repository (ClickHouse/ClickHouse)."),(0,r.kt)("p",null,"To work with git repositories, please install ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"."),(0,r.kt)("p",null,"To do that in Ubuntu you would run in the command line terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install git\n")),(0,r.kt)("p",null,"A brief manual on using Git can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://education.github.com/git-cheat-sheet-education.pdf"},"https://education.github.com/git-cheat-sheet-education.pdf"),".\nFor a detailed manual on Git see ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2"},"https://git-scm.com/book/en/v2"),"."),(0,r.kt)("h2",{id:"cloning-a-repository-to-your-development-machine"},"Cloning a Repository to Your Development Machine"),(0,r.kt)("p",null,"Next, you need to download the source files onto your working machine. This is called \u201cto clone a repository\u201d because it creates a local copy of the repository on your working machine."),(0,r.kt)("p",null,"In the command line terminal run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone --recursive --shallow-submodules git@github.com:your_github_username/ClickHouse.git\ncd ClickHouse\n")),(0,r.kt)("p",null,"Note: please, substitute ",(0,r.kt)("em",{parentName:"p"},"your_github_username")," with what is appropriate!"),(0,r.kt)("p",null,"This command will create a directory ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," containing the working copy of the project."),(0,r.kt)("p",null,"It is important that the path to the working directory contains no whitespaces as it may lead to problems with running the build system."),(0,r.kt)("p",null,"Please note that ClickHouse repository uses ",(0,r.kt)("inlineCode",{parentName:"p"},"submodules"),". That is what the references to additional repositories are called (i.e.\xa0external libraries on which the project depends). It means that when cloning the repository you need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive")," flag as in the example above. If the repository has been cloned without submodules, to download them you need to run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git submodule init\ngit submodule update\n")),(0,r.kt)("p",null,"You can check the status with the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"git submodule status"),"."),(0,r.kt)("p",null,"If you get the following error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,r.kt)("p",null,"It generally means that the SSH keys for connecting to GitHub are missing. These keys are normally located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh"),". For SSH keys to be accepted you need to upload them in the settings section of GitHub UI."),(0,r.kt)("p",null,"You can also clone the repository via https protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone --recursive --shallow-submodules https://github.com/ClickHouse/ClickHouse.git\n")),(0,r.kt)("p",null,"This, however, will not let you send your changes to the server. You can still use it temporarily and add the SSH keys later replacing the remote address of the repository with ",(0,r.kt)("inlineCode",{parentName:"p"},"git remote")," command."),(0,r.kt)("p",null,"You can also add original ClickHouse repo address to your local repository to pull updates from there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git remote add upstream git@github.com:ClickHouse/ClickHouse.git\n")),(0,r.kt)("p",null,"After successfully running this command you will be able to pull updates from the main ClickHouse repo by running ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull upstream master"),"."),(0,r.kt)("h3",{id:"working-with-submodules"},"Working with Submodules"),(0,r.kt)("p",null,"Working with submodules in git could be painful. Next commands will help to manage it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ! each command accepts\n# Update remote URLs for submodules. Barely rare case\ngit submodule sync\n# Add new submodules\ngit submodule init\n# Update existing submodules to the current state\ngit submodule update\n# Two last commands could be merged together\ngit submodule update --init\n")),(0,r.kt)("p",null,"The next commands would help you to reset all submodules to the initial state (!WARNING! - any changes inside will be deleted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Synchronizes submodules' remote URL with .gitmodules\ngit submodule sync\n# Update the registered submodules with initialize not yet initialized\ngit submodule update --init\n# Reset all changes done after HEAD\ngit submodule foreach git reset --hard\n# Clean files from .gitignore\ngit submodule foreach git clean -xfd\n# Repeat last 4 commands for all submodule\ngit submodule foreach git submodule sync\ngit submodule foreach git submodule update --init\ngit submodule foreach git submodule foreach git reset --hard\ngit submodule foreach git submodule foreach git clean -xfd\n")),(0,r.kt)("h2",{id:"build-system"},"Build System"),(0,r.kt)("p",null,"ClickHouse uses CMake and Ninja for building."),(0,r.kt)("p",null,"CMake - a meta-build system that can generate Ninja files (build tasks).\nNinja - a smaller build system with a focus on the speed used to execute those cmake generated tasks."),(0,r.kt)("p",null,"To install on Ubuntu, Debian or Mint run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt install cmake ninja-build"),"."),(0,r.kt)("p",null,"On CentOS, RedHat run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo yum install cmake ninja-build"),"."),(0,r.kt)("p",null,"If you use Arch or Gentoo, you probably know it yourself how to install CMake."),(0,r.kt)("h2",{id:"c-compiler"},"C++ Compiler"),(0,r.kt)("p",null,"Compilers Clang starting from version 15 is supported for building ClickHouse."),(0,r.kt)("p",null,"Clang should be used instead of gcc. Though, our continuous integration (CI) platform runs checks for about a dozen of build combinations."),(0,r.kt)("p",null,"On Ubuntu/Debian you can use the automatic installation script (check ",(0,r.kt)("a",{parentName:"p",href:"https://apt.llvm.org/"},"official webpage"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"\n')),(0,r.kt)("h2",{id:"the-building-process"},"The Building Process"),(0,r.kt)("p",null,"Now that you are ready to build ClickHouse we recommend you to create a separate directory ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse")," that will contain all of the build artefacts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir build\ncd build\n")),(0,r.kt)("p",null,"You can have several different directories (build_release, build_debug, etc.) for different types of build."),(0,r.kt)("p",null,"While inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory, configure your build by running CMake. Before the first run, you need to define environment variables that specify compiler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export CC=clang CXX=clang++\ncmake ..\n")),(0,r.kt)("p",null,"If you installed clang using the automatic installation script above, also specify the version of clang installed in the first command, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"export CC=clang-15 CXX=clang++-15"),". The clang version will be in the script output."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CC")," variable specifies the compiler for C (short for C Compiler), and ",(0,r.kt)("inlineCode",{parentName:"p"},"CXX")," variable instructs which C++ compiler is to be used for building."),(0,r.kt)("p",null,"For a faster build, you can resort to the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," build type - a build with no optimizations. For that supply the following parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-D CMAKE_BUILD_TYPE=Debug"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cmake -D CMAKE_BUILD_TYPE=Debug ..\n")),(0,r.kt)("p",null,"You can change the type of build by running this command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory."),(0,r.kt)("p",null,"Run ninja to build:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ninja clickhouse-server clickhouse-client\n")),(0,r.kt)("p",null,"Only the required binaries are going to be built in this example."),(0,r.kt)("p",null,"If you require to build all the binaries (utilities and tests), you should run ninja with no parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ninja\n")),(0,r.kt)("p",null,"Full build requires about 30GB of free disk space or 15GB to build the main binaries."),(0,r.kt)("p",null,"When a large amount of RAM is available on build machine you should limit the number of build tasks run in parallel with ",(0,r.kt)("inlineCode",{parentName:"p"},"-j")," parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ninja -j 1 clickhouse-server clickhouse-client\n")),(0,r.kt)("p",null,"On machines with 4GB of RAM, it is recommended to specify 1, for 8GB of RAM ",(0,r.kt)("inlineCode",{parentName:"p"},"-j 2")," is recommended."),(0,r.kt)("p",null,"If you get the message: ",(0,r.kt)("inlineCode",{parentName:"p"},"ninja: error: loading 'build.ninja': No such file or directory"),", it means that generating a build configuration has failed and you need to inspect the message above."),(0,r.kt)("p",null,"Upon the successful start of the building process, you\u2019ll see the build progress - the number of processed tasks and the total number of tasks."),(0,r.kt)("p",null,"While building messages about LLVM library may show up. They affect nothing and are safe to be ignored."),(0,r.kt)("p",null,"Upon successful build you get an executable file ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse/<build_dir>/programs/clickhouse"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls -l programs/clickhouse\n")),(0,r.kt)("h2",{id:"running-the-built-executable-of-clickhouse"},"Running the Built Executable of ClickHouse"),(0,r.kt)("p",null,"To run the server under the current user you need to navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse/programs/server/")," (located outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),") and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"../../build/programs/clickhouse server\n")),(0,r.kt)("p",null,"In this case, ClickHouse will use config files located in the current directory. You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse server")," from any directory specifying the path to a config file as a command-line parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-file"),"."),(0,r.kt)("p",null,"To connect to ClickHouse with clickhouse-client in another terminal navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"ClickHouse/build/programs/")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"./clickhouse client"),"."),(0,r.kt)("p",null,"If you get ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection refused")," message on macOS or FreeBSD, try specifying host address 127.0.0.1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"clickhouse client --host 127.0.0.1\n")),(0,r.kt)("p",null,"You can replace the production version of ClickHouse binary installed in your system with your custom-built ClickHouse binary. To do that install ClickHouse on your machine following the instructions from the official website. Next, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo service clickhouse-server stop\nsudo cp ClickHouse/build/programs/clickhouse /usr/bin/\nsudo service clickhouse-server start\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," and others are symlinks to the commonly shared ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse")," binary."),(0,r.kt)("p",null,"You can also run your custom-built ClickHouse binary with the config file from the ClickHouse package installed on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo service clickhouse-server stop\nsudo -u clickhouse ClickHouse/build/programs/clickhouse server --config-file /etc/clickhouse-server/config.xml\n")),(0,r.kt)("h2",{id:"ide-integrated-development-environment"},"IDE (Integrated Development Environment)"),(0,r.kt)("p",null,"If you do not know which IDE to use, we recommend that you use CLion. CLion is commercial software, but it offers 30 days free trial period. It is also free of charge for students. CLion can be used both on Linux and on macOS."),(0,r.kt)("p",null,"KDevelop and QTCreator are other great alternatives of an IDE for developing ClickHouse. KDevelop comes in as a very handy IDE although unstable. If KDevelop crashes after a while upon opening project, you should click \u201cStop All\u201d button as soon as it has opened the list of project\u2019s files. After doing so KDevelop should be fine to work with."),(0,r.kt)("p",null,"As simple code editors, you can use Sublime Text or Visual Studio Code, or Kate (all of which are available on Linux)."),(0,r.kt)("p",null,"Just in case, it is worth mentioning that CLion creates ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," path on its own, it also on its own selects ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," for build type, for configuration it uses a version of CMake that is defined in CLion and not the one installed by you, and finally, CLion will use ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," to run build tasks instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ninja"),". This is normal behaviour, just keep that in mind to avoid confusion."),(0,r.kt)("h2",{id:"writing-code"},"Writing Code"),(0,r.kt)("p",null,"The description of ClickHouse architecture can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/architecture/"},"https://clickhouse.com/docs/en/development/architecture/")),(0,r.kt)("p",null,"The Code Style Guide: ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/style/"},"https://clickhouse.com/docs/en/development/style/")),(0,r.kt)("p",null,"Adding third-party libraries: ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/contrib/#adding-third-party-libraries"},"https://clickhouse.com/docs/en/development/contrib/#adding-third-party-libraries")),(0,r.kt)("p",null,"Writing tests: ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/development/tests/"},"https://clickhouse.com/docs/en/development/tests/")),(0,r.kt)("p",null,"List of tasks: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest"},"https://github.com/ClickHouse/ClickHouse/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest")),(0,r.kt)("h2",{id:"test-data"},"Test Data"),(0,r.kt)("p",null,"Developing ClickHouse often requires loading realistic datasets. It is particularly important for performance testing. We have a specially prepared set of anonymized data of web analytics. It requires additionally some 3GB of free disk space. Note that this data is not required to accomplish most of the development tasks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'sudo apt install wget xz-utils\n\nwget https://datasets.clickhouse.com/hits/tsv/hits_v1.tsv.xz\nwget https://datasets.clickhouse.com/visits/tsv/visits_v1.tsv.xz\n\nxz -v -d hits_v1.tsv.xz\nxz -v -d visits_v1.tsv.xz\n\nclickhouse-client\n\nCREATE DATABASE IF NOT EXISTS test\n\nCREATE TABLE test.hits ( WatchID UInt64,  JavaEnable UInt8,  Title String,  GoodEvent Int16,  EventTime DateTime,  EventDate Date,  CounterID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RegionID UInt32,  UserID UInt64,  CounterClass Int8,  OS UInt8,  UserAgent UInt8,  URL String,  Referer String,  URLDomain String,  RefererDomain String,  Refresh UInt8,  IsRobot UInt8,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  ResolutionWidth UInt16,  ResolutionHeight UInt16,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  FlashMinor2 String,  NetMajor UInt8,  NetMinor UInt8,  UserAgentMajor UInt16,  UserAgentMinor FixedString(2),  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  MobilePhone UInt8,  MobilePhoneModel String,  Params String,  IPNetworkID UInt32,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  IsArtifical UInt8,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  ClientTimeZone Int16,  ClientEventTime DateTime,  SilverlightVersion1 UInt8,  SilverlightVersion2 UInt8,  SilverlightVersion3 UInt32,  SilverlightVersion4 UInt16,  PageCharset String,  CodeVersion UInt32,  IsLink UInt8,  IsDownload UInt8,  IsNotBounce UInt8,  FUniqID UInt64,  HID UInt32,  IsOldCounter UInt8,  IsEvent UInt8,  IsParameter UInt8,  DontCountHits UInt8,  WithHash UInt8,  HitColor FixedString(1),  UTCEventTime DateTime,  Age UInt8,  Sex UInt8,  Income UInt8,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  WindowName Int32,  OpenerName Int32,  HistoryLength Int16,  BrowserLanguage FixedString(2),  BrowserCountry FixedString(2),  SocialNetwork String,  SocialAction String,  HTTPError UInt16,  SendTiming Int32,  DNSTiming Int32,  ConnectTiming Int32,  ResponseStartTiming Int32,  ResponseEndTiming Int32,  FetchTiming Int32,  RedirectTiming Int32,  DOMInteractiveTiming Int32,  DOMContentLoadedTiming Int32,  DOMCompleteTiming Int32,  LoadEventStartTiming Int32,  LoadEventEndTiming Int32,  NSToDOMContentLoadedTiming Int32,  FirstPaintTiming Int32,  RedirectCount Int8,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  ParamPrice Int64,  ParamOrderID String,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  GoalsReached Array(UInt32),  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  RefererHash UInt64,  URLHash UInt64,  CLID UInt32,  YCLID UInt64,  ShareService String,  ShareURL String,  ShareTitle String,  `ParsedParams.Key1` Array(String),  `ParsedParams.Key2` Array(String),  `ParsedParams.Key3` Array(String),  `ParsedParams.Key4` Array(String),  `ParsedParams.Key5` Array(String),  `ParsedParams.ValueDouble` Array(Float64),  IslandID FixedString(16),  RequestNum UInt32,  RequestTry UInt8) ENGINE = MergeTree PARTITION BY toYYYYMM(EventDate) SAMPLE BY intHash32(UserID) ORDER BY (CounterID, EventDate, intHash32(UserID), EventTime);\n\nCREATE TABLE test.visits ( CounterID UInt32,  StartDate Date,  Sign Int8,  IsNew UInt8,  VisitID UInt64,  UserID UInt64,  StartTime DateTime,  Duration UInt32,  UTCStartTime DateTime,  PageViews Int32,  Hits Int32,  IsBounce UInt8,  Referer String,  StartURL String,  RefererDomain String,  StartURLDomain String,  EndURL String,  LinkURL String,  IsDownload UInt8,  TraficSourceID Int8,  SearchEngineID UInt16,  SearchPhrase String,  AdvEngineID UInt8,  PlaceID Int32,  RefererCategories Array(UInt16),  URLCategories Array(UInt16),  URLRegions Array(UInt32),  RefererRegions Array(UInt32),  IsYandex UInt8,  GoalReachesDepth Int32,  GoalReachesURL Int32,  GoalReachesAny Int32,  SocialSourceNetworkID UInt8,  SocialSourcePage String,  MobilePhoneModel String,  ClientEventTime DateTime,  RegionID UInt32,  ClientIP UInt32,  ClientIP6 FixedString(16),  RemoteIP UInt32,  RemoteIP6 FixedString(16),  IPNetworkID UInt32,  SilverlightVersion3 UInt32,  CodeVersion UInt32,  ResolutionWidth UInt16,  ResolutionHeight UInt16,  UserAgentMajor UInt16,  UserAgentMinor UInt16,  WindowClientWidth UInt16,  WindowClientHeight UInt16,  SilverlightVersion2 UInt8,  SilverlightVersion4 UInt16,  FlashVersion3 UInt16,  FlashVersion4 UInt16,  ClientTimeZone Int16,  OS UInt8,  UserAgent UInt8,  ResolutionDepth UInt8,  FlashMajor UInt8,  FlashMinor UInt8,  NetMajor UInt8,  NetMinor UInt8,  MobilePhone UInt8,  SilverlightVersion1 UInt8,  Age UInt8,  Sex UInt8,  Income UInt8,  JavaEnable UInt8,  CookieEnable UInt8,  JavascriptEnable UInt8,  IsMobile UInt8,  BrowserLanguage UInt16,  BrowserCountry UInt16,  Interests UInt16,  Robotness UInt8,  GeneralInterests Array(UInt16),  Params Array(String),  `Goals.ID` Array(UInt32),  `Goals.Serial` Array(UInt32),  `Goals.EventTime` Array(DateTime),  `Goals.Price` Array(Int64),  `Goals.OrderID` Array(String),  `Goals.CurrencyID` Array(UInt32),  WatchIDs Array(UInt64),  ParamSumPrice Int64,  ParamCurrency FixedString(3),  ParamCurrencyID UInt16,  ClickLogID UInt64,  ClickEventID Int32,  ClickGoodEvent Int32,  ClickEventTime DateTime,  ClickPriorityID Int32,  ClickPhraseID Int32,  ClickPageID Int32,  ClickPlaceID Int32,  ClickTypeID Int32,  ClickResourceID Int32,  ClickCost UInt32,  ClickClientIP UInt32,  ClickDomainID UInt32,  ClickURL String,  ClickAttempt UInt8,  ClickOrderID UInt32,  ClickBannerID UInt32,  ClickMarketCategoryID UInt32,  ClickMarketPP UInt32,  ClickMarketCategoryName String,  ClickMarketPPName String,  ClickAWAPSCampaignName String,  ClickPageName String,  ClickTargetType UInt16,  ClickTargetPhraseID UInt64,  ClickContextType UInt8,  ClickSelectType Int8,  ClickOptions String,  ClickGroupBannerID Int32,  OpenstatServiceName String,  OpenstatCampaignID String,  OpenstatAdID String,  OpenstatSourceID String,  UTMSource String,  UTMMedium String,  UTMCampaign String,  UTMContent String,  UTMTerm String,  FromTag String,  HasGCLID UInt8,  FirstVisit DateTime,  PredLastVisit Date,  LastVisit Date,  TotalVisits UInt32,  `TraficSource.ID` Array(Int8),  `TraficSource.SearchEngineID` Array(UInt16),  `TraficSource.AdvEngineID` Array(UInt8),  `TraficSource.PlaceID` Array(UInt16),  `TraficSource.SocialSourceNetworkID` Array(UInt8),  `TraficSource.Domain` Array(String),  `TraficSource.SearchPhrase` Array(String),  `TraficSource.SocialSourcePage` Array(String),  Attendance FixedString(16),  CLID UInt32,  YCLID UInt64,  NormalizedRefererHash UInt64,  SearchPhraseHash UInt64,  RefererDomainHash UInt64,  NormalizedStartURLHash UInt64,  StartURLDomainHash UInt64,  NormalizedEndURLHash UInt64,  TopLevelDomain UInt64,  URLScheme UInt64,  OpenstatServiceNameHash UInt64,  OpenstatCampaignIDHash UInt64,  OpenstatAdIDHash UInt64,  OpenstatSourceIDHash UInt64,  UTMSourceHash UInt64,  UTMMediumHash UInt64,  UTMCampaignHash UInt64,  UTMContentHash UInt64,  UTMTermHash UInt64,  FromHash UInt64,  WebVisorEnabled UInt8,  WebVisorActivity UInt32,  `ParsedParams.Key1` Array(String),  `ParsedParams.Key2` Array(String),  `ParsedParams.Key3` Array(String),  `ParsedParams.Key4` Array(String),  `ParsedParams.Key5` Array(String),  `ParsedParams.ValueDouble` Array(Float64),  `Market.Type` Array(UInt8),  `Market.GoalID` Array(UInt32),  `Market.OrderID` Array(String),  `Market.OrderPrice` Array(Int64),  `Market.PP` Array(UInt32),  `Market.DirectPlaceID` Array(UInt32),  `Market.DirectOrderID` Array(UInt32),  `Market.DirectBannerID` Array(UInt32),  `Market.GoodID` Array(String),  `Market.GoodName` Array(String),  `Market.GoodQuantity` Array(Int32),  `Market.GoodPrice` Array(Int64),  IslandID FixedString(16)) ENGINE = CollapsingMergeTree(Sign) PARTITION BY toYYYYMM(StartDate) SAMPLE BY intHash32(UserID) ORDER BY (CounterID, StartDate, intHash32(UserID), VisitID);\n\nclickhouse-client --max_insert_block_size 100000 --query "INSERT INTO test.hits FORMAT TSV" < hits_v1.tsv\nclickhouse-client --max_insert_block_size 100000 --query "INSERT INTO test.visits FORMAT TSV" < visits_v1.tsv\n')),(0,r.kt)("h2",{id:"creating-pull-request"},"Creating Pull Request"),(0,r.kt)("p",null,"Navigate to your fork repository in GitHub\u2019s UI. If you have been developing in a branch, you need to select that branch. There will be a \u201cPull request\u201d button located on the screen. In essence, this means \u201ccreate a request for accepting my changes into the main repository\u201d."),(0,r.kt)("p",null,"A pull request can be created even if the work is not completed yet. In this case please put the word \u201cWIP\u201d (work in progress) at the beginning of the title, it can be changed later. This is useful for cooperative reviewing and discussion of changes as well as for running all of the available tests. It is important that you provide a brief description of your changes, it will later be used for generating release changelog."),(0,r.kt)("p",null,"Testing will commence as soon as ClickHouse employees label your PR with a tag \u201ccan be tested\u201d. The results of some first checks (e.g.\xa0code style) will come in within several minutes. Build check results will arrive within half an hour. And the main set of tests will report itself within an hour."),(0,r.kt)("p",null,"The system will prepare ClickHouse binary builds for your pull request individually. To retrieve these builds click the \u201cDetails\u201d link next to \u201cClickHouse build check\u201d entry in the list of checks. There you will find direct links to the built .deb packages of ClickHouse which you can deploy even on your production servers (if you have no fear)."),(0,r.kt)("p",null,"Most probably some of the builds will fail at first times. This is due to the fact that we check builds both with gcc as well as with clang, with almost all of existing warnings (always with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-Werror")," flag) enabled for clang. On that same page, you can find all of the build logs so that you do not have to build ClickHouse in all of the possible ways."),(0,r.kt)("h2",{id:"browse-clickhouse-source-code"},"Browse ClickHouse Source Code"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"Woboq")," online code browser available ",(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/codebrowser/ClickHouse/src/index.html"},"here"),". It provides code navigation, semantic highlighting, search and indexing. The code snapshot is updated daily."),(0,r.kt)("p",null,"You can use GitHub integrated code browser ",(0,r.kt)("a",{parentName:"p",href:"https://github.dev/ClickHouse/ClickHouse"},"here"),"."),(0,r.kt)("p",null,"Also, you can browse sources on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"GitHub")," as usual."),(0,r.kt)("p",null,"If you are not interested in functionality provided by third-party libraries, you can further speed up the build using ",(0,r.kt)("inlineCode",{parentName:"p"},"cmake")," options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-DENABLE_LIBRARIES=0 -DENABLE_EMBEDDED_COMPILER=0\n")),(0,r.kt)("p",null,"In case of problems with any of the development options, you are on your own!"))}p.isMDXComponent=!0}}]);