"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41270],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),k=i,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||s;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},982:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const s={slug:"/en/operations/backup"},r="Backup and Restore",o={unversionedId:"en/operations/backup",id:"en/operations/backup",title:"Backup and Restore",description:"- Backup to a local disk",source:"@site/docs/en/operations/backup.md",sourceDirName:"en/operations",slug:"/en/operations/backup",permalink:"/docs/en/operations/backup",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/backup.md",tags:[],version:"current",frontMatter:{slug:"/en/operations/backup"},sidebar:"english",previous:{title:"Manage",permalink:"/docs/en/manage"},next:{title:"Self-managed Upgrade",permalink:"/docs/en/operations/update"}},l={},p=[{value:"Command summary",id:"command-summary",level:2},{value:"Background",id:"background",level:2},{value:"Backup to a local disk",id:"backup-to-a-local-disk",level:2},{value:"Configure a backup destination",id:"configure-a-backup-destination",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Usage examples",id:"usage-examples",level:3},{value:"Incremental backups",id:"incremental-backups",level:3},{value:"Assign a password to the backup",id:"assign-a-password-to-the-backup",level:3},{value:"Compression settings",id:"compression-settings",level:3},{value:"Restore specific partitions",id:"restore-specific-partitions",level:3},{value:"Check the status of backups",id:"check-the-status-of-backups",level:3},{value:"Configuring BACKUP/RESTORE to use an S3 Endpoint",id:"configuring-backuprestore-to-use-an-s3-endpoint",level:2},{value:"Create a base (initial) backup",id:"create-a-base-initial-backup",level:3},{value:"Add more data",id:"add-more-data",level:3},{value:"Take an incremental backup",id:"take-an-incremental-backup",level:3},{value:"Restore from the incremental backup",id:"restore-from-the-incremental-backup",level:3},{value:"Verify the count",id:"verify-the-count",level:3},{value:"Verify the content",id:"verify-the-content",level:3},{value:"BACKUP/RESTORE Using an S3 Disk",id:"backuprestore-using-an-s3-disk",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"Duplicating Source Data Somewhere Else",id:"duplicating-source-data-somewhere-else",level:3},{value:"Filesystem Snapshots",id:"filesystem-snapshots",level:3},{value:"clickhouse-copier",id:"clickhouse-copier",level:3},{value:"Manipulations with Parts",id:"manipulations-with-parts",level:3}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backup-and-restore"},"Backup and Restore"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#backup-to-a-local-disk"},"Backup to a local disk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-backuprestore-to-use-an-s3-endpoint"},"Configuring backup/restore to use an S3 endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#backuprestore-using-an-s3-disk"},"Backup/restore using an S3 disk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alternatives"},"Alternatives"))),(0,i.kt)("h2",{id:"command-summary"},"Command summary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," BACKUP|RESTORE\n  TABLE [db.]table_name [AS [db.]table_name_in_backup]\n    [PARTITION[S] partition_expr [,...]] |\n  DICTIONARY [db.]dictionary_name [AS [db.]name_in_backup] |\n  DATABASE database_name [AS database_name_in_backup]\n    [EXCEPT TABLES ...] |\n  TEMPORARY TABLE table_name [AS table_name_in_backup] |\n  VIEW view_name [AS view_name_in_backup]\n  ALL TEMPORARY TABLES [EXCEPT ...] |\n  ALL DATABASES [EXCEPT ...] } [,...]\n  [ON CLUSTER 'cluster_name']\n  TO|FROM File('<path>/<filename>') | Disk('<disk_name>', '<path>/') | S3('<S3 endpoint>/<path>', '<Access key ID>', '<Secret access key>')\n  [SETTINGS base_backup = File('<path>/<filename>') | Disk(...) | S3('<S3 endpoint>/<path>', '<Access key ID>', '<Secret access key>')]\n\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"ALL")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ALL")," is only applicable to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTORE")," command."))),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"While ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replication")," provides protection from hardware failures, it does not protect against human errors: accidental deletion of data, deletion of the wrong table or a table on the wrong cluster, and software bugs that result in incorrect data processing or data corruption. In many cases mistakes like these will affect all replicas. ClickHouse has built-in safeguards to prevent some types of mistakes \u2014 for example, by default ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#max-table-size-to-drop"},"you can\u2019t just drop tables with a MergeTree-like engine containing more than 50 Gb of data"),". However, these safeguards do not cover all possible cases and can be circumvented."),(0,i.kt)("p",null,"In order to effectively mitigate possible human errors, you should carefully prepare a strategy for backing up and restoring your data ",(0,i.kt)("strong",{parentName:"p"},"in advance"),"."),(0,i.kt)("p",null,"Each company has different resources available and business requirements, so there\u2019s no universal solution for ClickHouse backups and restores that will fit every situation. What works for one gigabyte of data likely won\u2019t work for tens of petabytes. There are a variety of possible approaches with their own pros and cons, which will be discussed below. It is a good idea to use several approaches instead of just one in order to compensate for their various shortcomings."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Keep in mind that if you backed something up and never tried to restore it, chances are that restore will not work properly when you actually need it (or at least it will take longer than business can tolerate). So whatever backup approach you choose, make sure to automate the restore process as well, and practice it on a spare ClickHouse cluster regularly."))),(0,i.kt)("h2",{id:"backup-to-a-local-disk"},"Backup to a local disk"),(0,i.kt)("h3",{id:"configure-a-backup-destination"},"Configure a backup destination"),(0,i.kt)("p",null,"In the examples below you will see the backup destination specified like ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk('backups', '1.zip')"),".  To prepare the destination add a file to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/backup_disk.xml")," specifying the backup destination.  For example, this file defines disk named ",(0,i.kt)("inlineCode",{parentName:"p"},"backups")," and then adds that disk to the ",(0,i.kt)("strong",{parentName:"p"},"backups > allowed_disk")," list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n\x3c!--highlight-next-line --\x3e\n            <backups>\n                <type>local</type>\n                <path>/backups/</path>\n            </backups>\n        </disks>\n    </storage_configuration>\n\x3c!--highlight-start --\x3e\n    <backups>\n        <allowed_disk>backups</allowed_disk>\n        <allowed_path>/backups/</allowed_path>\n    </backups>\n\x3c!--highlight-end --\x3e\n</clickhouse>\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Backups can be either full or incremental, and can include tables (including materialized views, projections, and dictionaries), and databases.  Backups can be synchronous (default) or asynchronous.  They can be compressed.  Backups can be password protected."),(0,i.kt)("p",null,"The BACKUP and RESTORE statements take a list of DATABASE and TABLE names, a destination (or source), options and settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The destination for the backup, or the source for the restore.  This is based on the disk defined earlier.  For example ",(0,i.kt)("inlineCode",{parentName:"li"},"Disk('backups', 'filename.zip')")),(0,i.kt)("li",{parentName:"ul"},"ASYNC: backup or restore asynchronously"),(0,i.kt)("li",{parentName:"ul"},"PARTITIONS: a list of partitions to restore"),(0,i.kt)("li",{parentName:"ul"},"SETTINGS:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"en/sql-reference/statements/create/table/#column-compression-codecs"},(0,i.kt)("inlineCode",{parentName:"a"},"compression_method"))," and compression_level"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," for the file on disk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_backup"),": the destination of the previous backup of this source.  For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"Disk('backups', '1.zip')"))))),(0,i.kt)("h3",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"Backup and then restore a table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table TO Disk('backups', '1.zip')\n")),(0,i.kt)("p",null,"Corresponding restore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table FROM Disk('backups', '1.zip')\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The above RESTORE would fail if the table ",(0,i.kt)("inlineCode",{parentName:"p"},"test.table")," contains data, you would have to drop the table in order to test the RESTORE, or use the setting ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_non_empty_tables=true"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table FROM Disk('backups', '1.zip')\nSETTINGS allow_non_empty_tables=true\n")))),(0,i.kt)("p",null,"Tables can be restored, or backed up, with new names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table AS test.table2 FROM Disk('backups', '1.zip')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table3 AS test.table4 TO Disk('backups', '2.zip')\n")),(0,i.kt)("h3",{id:"incremental-backups"},"Incremental backups"),(0,i.kt)("p",null,"Incremental backups can be taken by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"base_backup"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Incremental backups depend on the base backup.  The base backup must be kept available in order to be able to restore from an incremental backup."))),(0,i.kt)("p",null,"Incrementally store new data. The setting ",(0,i.kt)("inlineCode",{parentName:"p"},"base_backup")," causes data since a previous backup to ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk('backups', 'd.zip')")," to be stored to ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk('backups', 'incremental-a.zip')"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table TO Disk('backups', 'incremental-a.zip')\n  SETTINGS base_backup = Disk('backups', 'd.zip')\n")),(0,i.kt)("p",null,"Restore all data from the incremental backup and the base_backup into a new table ",(0,i.kt)("inlineCode",{parentName:"p"},"test.table2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table AS test.table2\n  FROM Disk('backups', 'incremental-a.zip');\n")),(0,i.kt)("h3",{id:"assign-a-password-to-the-backup"},"Assign a password to the backup"),(0,i.kt)("p",null,"Backups written to disk can have a password applied to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table\n  TO Disk('backups', 'password-protected.zip')\n  SETTINGS password='qwerty'\n")),(0,i.kt)("p",null,"Restore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table\n  FROM Disk('backups', 'password-protected.zip')\n  SETTINGS password='qwerty'\n")),(0,i.kt)("h3",{id:"compression-settings"},"Compression settings"),(0,i.kt)("p",null,"If you would like to specify the compression method or level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"BACKUP TABLE test.table\n  TO Disk('backups', 'filename.zip')\n  SETTINGS compression_method='lzma', compression_level=3\n")),(0,i.kt)("h3",{id:"restore-specific-partitions"},"Restore specific partitions"),(0,i.kt)("p",null,"If specific partitions associated with a table need to be restored these can be specified.  To restore partitions 1 and 4 from backup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"RESTORE TABLE test.table PARTITIONS '2', '3'\n  FROM Disk('backups', 'filename.zip')\n")),(0,i.kt)("h3",{id:"check-the-status-of-backups"},"Check the status of backups"),(0,i.kt)("p",null,"The backup command returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),", and that ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," can be used to get the status of the backup.  This is very useful to check the progress of long ASYNC backups.  The example below shows a failure that happened when trying to overwrite an existing backup file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP TABLE helloworld.my_first_table TO Disk('backups', '1.zip') ASYNC\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500status\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 7678b0b3-f519-4e6e-811f-5a0781a4eb52 \u2502 CREATING_BACKUP \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set. Elapsed: 0.001 sec.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SELECT\n    *\nFROM system.backups\nwhere id='7678b0b3-f519-4e6e-811f-5a0781a4eb52'\nFORMAT Vertical\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nid:                7678b0b3-f519-4e6e-811f-5a0781a4eb52\nname:              Disk('backups', '1.zip')\n#highlight-next-line\nstatus:            BACKUP_FAILED\nnum_files:         0\nuncompressed_size: 0\ncompressed_size:   0\n#highlight-next-line\nerror:             Code: 598. DB::Exception: Backup Disk('backups', '1.zip') already exists. (BACKUP_ALREADY_EXISTS) (version 22.8.2.11 (official build))\nstart_time:        2022-08-30 09:21:46\nend_time:          2022-08-30 09:21:46\n\n1 row in set. Elapsed: 0.002 sec.\n")),(0,i.kt)("h2",{id:"configuring-backuprestore-to-use-an-s3-endpoint"},"Configuring BACKUP/RESTORE to use an S3 Endpoint"),(0,i.kt)("p",null,"To write backups to an S3 bucket you need three pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"S3 endpoint,\nfor example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://mars-doc-test.s3.amazonaws.com/backup-S3/")),(0,i.kt)("li",{parentName:"ul"},"Access key ID,\nfor example ",(0,i.kt)("inlineCode",{parentName:"li"},"ABC123")),(0,i.kt)("li",{parentName:"ul"},"Secret access key,\nfor example ",(0,i.kt)("inlineCode",{parentName:"li"},"Abc+123"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Creating an S3 bucket is covered in ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/guides/sre/configuring-s3-for-clickhouse-use"},"Use S3 Object Storage as a ClickHouse disk"),", just come back to this doc after saving the policy, there is no need to configure ClickHouse to use the S3 bucket."))),(0,i.kt)("p",null,"The destination for a backup will be specified like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"S3('<S3 endpoint>/<directory>', '<Access key ID>', '<Secret access key>)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE data\n(\n    `key` Int,\n    `value` String,\n    `array` Array(String)\n)\nENGINE = MergeTree\nORDER BY tuple()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO data SELECT *\nFROM generateRandom('key Int, value String, array Array(String)')\nLIMIT 1000\n")),(0,i.kt)("h3",{id:"create-a-base-initial-backup"},"Create a base (initial) backup"),(0,i.kt)("p",null,"Incremental backups require a ",(0,i.kt)("em",{parentName:"p"},"base")," backup to start from, this example will be used\nlater as the base backup.  The first parameter of the S3 destination is the S3 endpoint followed by the directory within the bucket to use for this backup.  In this example the directory is named ",(0,i.kt)("inlineCode",{parentName:"p"},"my_backup"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP TABLE data TO S3('https://mars-doc-test.s3.amazonaws.com/backup-S3/my_backup', 'ABC123', 'Abc+123')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500status\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 de442b75-a66c-4a3c-a193-f76f278c70f3 \u2502 BACKUP_CREATED \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"add-more-data"},"Add more data"),(0,i.kt)("p",null,"Incremental backups are populated with the difference between the base backup and the current content of the table being backed up.  Add more data before taking the incremental backup:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO data SELECT *\nFROM generateRandom('key Int, value String, array Array(String)')\nLIMIT 100\n")),(0,i.kt)("h3",{id:"take-an-incremental-backup"},"Take an incremental backup"),(0,i.kt)("p",null,"This backup command is similar to the base backup, but adds ",(0,i.kt)("inlineCode",{parentName:"p"},"SETTINGS base_backup")," and the location of the base backup.  Note that the destination for the incremental backup is not the same directory as the base, it is the same endpoint with a different target directory within the bucket.  The base backup is in ",(0,i.kt)("inlineCode",{parentName:"p"},"my_backup"),", and the incremental will be written to ",(0,i.kt)("inlineCode",{parentName:"p"},"my_incremental"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP TABLE data TO S3('https://mars-doc-test.s3.amazonaws.com/backup-S3/my_incremental', 'ABC123', 'Abc+123') SETTINGS base_backup = S3('https://mars-doc-test.s3.amazonaws.com/backup-S3/my_backup', 'ABC123', 'Abc+123')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500status\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 f6cd3900-850f-41c9-94f1-0c4df33ea528 \u2502 BACKUP_CREATED \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"restore-from-the-incremental-backup"},"Restore from the incremental backup"),(0,i.kt)("p",null,"This command restores the incremental backup into a new table, ",(0,i.kt)("inlineCode",{parentName:"p"},"data3"),".  Note that when an incremental backup is restored, the base backup is also included.  Specify only the incremental backup when restoring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"RESTORE TABLE data AS data3 FROM S3('https://mars-doc-test.s3.amazonaws.com/backup-S3/my_incremental', 'ABC123', 'Abc+123')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500id\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500status\u2500\u2500\u2500\u2510\n\u2502 ff0c8c39-7dff-4324-a241-000796de11ca \u2502 RESTORED \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"verify-the-count"},"Verify the count"),(0,i.kt)("p",null,"There were two inserts into the original table ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", one with 1,000 rows and one with 100 rows, for a total of 1,100. Verify that the restored table has 1,100 rows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count()\nFROM data3\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-response"},"\u250c\u2500count()\u2500\u2510\n\u2502    1100 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h3",{id:"verify-the-content"},"Verify the content"),(0,i.kt)("p",null,"This compares the content of the original table, ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," with the restored table ",(0,i.kt)("inlineCode",{parentName:"p"},"data3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT throwIf((\n        SELECT groupArray(tuple(*))\n        FROM data\n    ) != (\n        SELECT groupArray(tuple(*))\n        FROM data3\n    ), 'Data does not match after BACKUP/RESTORE')\n")),(0,i.kt)("h2",{id:"backuprestore-using-an-s3-disk"},"BACKUP/RESTORE Using an S3 Disk"),(0,i.kt)("p",null,"It is also possible to ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKUP"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"RESTORE")," to S3 by configuring an S3 disk in the ClickHouse storage configuration.  Configure the disk like this by adding a file to ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <storage_configuration>\n        <disks>\n            <s3_plain>\n                <type>s3_plain</type>\n                <endpoint></endpoint>\n                <access_key_id></access_key_id>\n                <secret_access_key></secret_access_key>\n            </s3_plain>\n        </disks>\n        <policies>\n            <s3>\n                <volumes>\n                    <main>\n                        <disk>s3</disk>\n                    </main>\n                </volumes>\n            </s3>\n        </policies>\n    </storage_configuration>\n\n    <backups>\n        <allowed_disk>s3_plain</allowed_disk>\n    </backups>\n</clickhouse>\n")),(0,i.kt)("p",null,"And then ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKUP"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"RESTORE")," as usual:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"BACKUP TABLE data TO Disk('s3_plain', 'cloud_backup');\nRESTORE TABLE data AS data_restored FROM Disk('s3_plain', 'cloud_backup');\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"But keep in mind that:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"This disk should not be used for ",(0,i.kt)("inlineCode",{parentName:"li"},"MergeTree")," itself, only for ",(0,i.kt)("inlineCode",{parentName:"li"},"BACKUP"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"RESTORE")),(0,i.kt)("li",{parentName:"ul"},"It has excessive API calls")))),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"ClickHouse stores data on disk, and there are many ways to backup disks.  These are some alternatives that have been used in the past, and that may fit in well in your environment."),(0,i.kt)("h3",{id:"duplicating-source-data-somewhere-else"},"Duplicating Source Data Somewhere Else"),(0,i.kt)("p",null,"Often data that is ingested into ClickHouse is delivered through some sort of persistent queue, such as ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka"),". In this case it is possible to configure an additional set of subscribers that will read the same data stream while it is being written to ClickHouse and store it in cold storage somewhere. Most companies already have some default recommended cold storage, which could be an object store or a distributed filesystem like ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"},"HDFS"),"."),(0,i.kt)("h3",{id:"filesystem-snapshots"},"Filesystem Snapshots"),(0,i.kt)("p",null,"Some local filesystems provide snapshot functionality (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ZFS"},"ZFS"),"), but they might not be the best choice for serving live queries. A possible solution is to create additional replicas with this kind of filesystem and exclude them from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"Distributed")," tables that are used for ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries. Snapshots on such replicas will be out of reach of any queries that modify data. As a bonus, these replicas might have special hardware configurations with more disks attached per server, which would be cost-effective."),(0,i.kt)("h3",{id:"clickhouse-copier"},"clickhouse-copier"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/utilities/clickhouse-copier"},"clickhouse-copier")," is a versatile tool that was initially created to re-shard petabyte-sized tables. It can also be used for backup and restore purposes because it reliably copies data between ClickHouse tables and clusters."),(0,i.kt)("p",null,"For smaller volumes of data, a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO ... SELECT ...")," to remote tables might work as well."),(0,i.kt)("h3",{id:"manipulations-with-parts"},"Manipulations with Parts"),(0,i.kt)("p",null,"ClickHouse allows using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... FREEZE PARTITION ...")," query to create a local copy of table partitions. This is implemented using hardlinks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/shadow/")," folder, so it usually does not consume extra disk space for old data. The created copies of files are not handled by ClickHouse server, so you can just leave them there: you will have a simple backup that does not require any additional external system, but it will still be prone to hardware issues. For this reason, it\u2019s better to remotely copy them to another location and then remove the local copies. Distributed filesystems and object stores are still a good options for this, but normal attached file servers with a large enough capacity might work as well (in this case the transfer will occur via the network filesystem or maybe ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rsync"},"rsync"),").\nData can be restored from backup using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... ATTACH PARTITION ...")),(0,i.kt)("p",null,"For more information about queries related to partition manipulations, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/alter/partition#alter_manipulations-with-partitions"},"ALTER documentation"),"."),(0,i.kt)("p",null,"A third-party tool is available to automate this approach: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AlexAkulov/clickhouse-backup"},"clickhouse-backup"),"."))}d.isMDXComponent=!0}}]);