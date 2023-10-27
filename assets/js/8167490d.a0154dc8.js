"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},c=void 0,i={unversionedId:"learn/learn-controller",id:"learn/learn-controller",title:"Controller Accounts",description:"Controller Accounts used in Staking.",source:"@site/../docs/learn/learn-controller.md",sourceDirName:"learn",slug:"/learn-controller",permalink:"/docs/learn-controller",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-controller.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1691393601,formattedLastUpdatedAt:"Aug 7, 2023",frontMatter:{id:"learn-controller",title:"Controller Accounts",sidebar_label:"Controller Accounts",description:"Controller Accounts used in Staking.",keywords:["nominated proof of stake","staking","controller"],slug:"../learn-controller"},sidebar:"docs",previous:{title:"Redenomination of DOT",permalink:"/docs/learn-redenomination"},next:{title:"Builder's Guides",permalink:"/docs/build-index"}},d={},u=[{value:"Stash as Controller",id:"stash-as-controller",level:2},{value:"Stash not as Controller",id:"stash-not-as-controller",level:2}],p={toc:u},h="wrapper";function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,a.kt)(h,(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Controller accounts are deprecated",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Controller accounts are deprecated. For more information, see\n",(0,a.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),".")),(0,a.kt)("p",null,'Controller accounts were used for staking and were a "less-powerful" version of staking proxies.\nControllers could only sign for unbonding and rebonding funds, nominating and changing the reward\ndestination. The stash account was still used to bond more funds and change the controller.\nController accounts became redundant and added unnecessary complexity to the staking mechanics.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"controller-accounts",src:n(2203).Z,width:"1920",height:"800"})),(0,a.kt)("p",null,"With the setup shown above, the stash account was not entirely isolated. More complicated designs to\nfully isolate the stash account included having both controller and staking proxies (see below)."),(0,a.kt)("h2",{id:"stash-as-controller"},"Stash as Controller"),(0,a.kt)("p",null,"It was unnecessary to have a controller if you had a staking proxy. In this case the stash was also\nset to be the controller, and the account security would not have been compromised. The staking\nproxy was used to sign all staking-relate transactions. Note that you needed to sign with the stash\nto change the staking proxy."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stash-as-controller",src:n(55602).Z,width:"1920",height:"800"})),(0,a.kt)("p",null,'This past situation was similar to the present setup, except that now there is no option to set the\nstash as controller and that the action of "changing the controller" is missing. From a practical\nperspective, we need to use only one account and remember one password to sign for all\nstaking-related transactions. From a security perspective, who controls the staking proxy controls\nour staking actions.'),(0,a.kt)("h2",{id:"stash-not-as-controller"},"Stash not as Controller"),(0,a.kt)("p",null,"If the stash and controller were different accounts, the staking proxy was used to bond more funds\nand change the controller. Thus the staking proxy was used to sign for those transactions that were\nused less often and usually signed by the stash."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stash-not-as-controller",src:n(62776).Z,width:"1920",height:"800"})),(0,a.kt)("p",null,"From a practical perspective, there were two accounts, and we needed to remember two passwords. From\na security perspective, the party who wanted to control our staking actions was required to control\ntwo accounts."))}m.isMDXComponent=!0},55602:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/stash-as-controller-b9840d38c845fce713390da24c60e4a4.png"},2203:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/stash-controller-978875461a51b1f2689c22bdadfde1e4.png"},62776:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/stash-not-as-controller-8a6c27ea620379446da133a42f860029.png"}}]);