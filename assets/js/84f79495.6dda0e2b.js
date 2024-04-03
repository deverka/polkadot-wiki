"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2078],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),h=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=h(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(t),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=t[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96709:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"learn-parathreads",title:"Parathreads",sidebar_label:"Parathreads",description:"An Introductory Guide to Parathreads.",keywords:["parathreads","slots"],slug:"../learn-parathreads"},l=void 0,h={unversionedId:"learn/learn-parathreads",id:"learn/learn-parathreads",title:"Parathreads",description:"An Introductory Guide to Parathreads.",source:"@site/../docs/learn/learn-parathreads.md",sourceDirName:"learn",slug:"/learn-parathreads",permalink:"/docs/learn-parathreads",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-parathreads.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"learn-parathreads",title:"Parathreads",sidebar_label:"Parathreads",description:"An Introductory Guide to Parathreads.",keywords:["parathreads","slots"],slug:"../learn-parathreads"},sidebar:"docs",previous:{title:"SPREE",permalink:"/docs/learn-spree"},next:{title:"Elastic Scaling",permalink:"/docs/learn-elastic-scaling"}},c={},d=[{value:"Origin",id:"origin",level:2},{value:"How do Parathreads Operate?",id:"how-do-parathreads-operate",level:2},{value:"Parachain vs. Parathread",id:"parachain-vs-parathread",level:2},{value:"Parathread Economics",id:"parathread-economics",level:2},{value:"Parachain Slot Swaps",id:"parachain-slot-swaps",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d},u="wrapper";function m(e){var a=e.components,t=(0,n.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Parathreads are an idea for parachains to temporarily participate (on a block by block basis) in\nPolkadot security without needing to lease a\ndedicated parachain slot. This is done through economically sharing the scarce resource of a\n",(0,o.kt)("em",{parentName:"p"},"parachain slot")," among several competing resources (parathreads). Chains that otherwise would not be\nable to acquire a full parachain slot or do not find it economically sensible to do so, are enabled\nto participate in Polkadot's shared security\n","\u2014"," albeit with an associated fee per executed block. It also offers a graceful off-ramp to\nparachains that no longer require a dedicated parachain slot, but would like to continue using the\nRelay Chain."),(0,o.kt)("h2",{id:"origin"},"Origin"),(0,o.kt)("p",null,"According to ",(0,o.kt)("a",{parentName:"p",href:"https://v.douyu.com/show/a4Jj7llO5q47Dk01"},"this talk")," in Chengdu, the origin of the\nidea came from similar notions in the limited resource of memory on early personal computers of the\nlate '80s and '90s. Since computers have a limited amount of physical memory, when an application\nneeds more, the computer can create virtual memory by using ",(0,o.kt)("em",{parentName:"p"},"swap space")," on a hard disk. Swap space\nallows the capacity of a computer's memory to expand and for more processes to run concurrently with\nthe trade-off that some processes will take longer to progress."),(0,o.kt)("h2",{id:"how-do-parathreads-operate"},"How do Parathreads Operate?"),(0,o.kt)("p",null,"A portion of the parachain slots on the Relay Chain will be designated as part of the parathread\npool. In other words, some parachain slots will have no parachain attached to them and rather will\nbe used as a space for which the winner(s) of the block-by-block parathread fee auction can have\ntheir block candidate included."),(0,o.kt)("p",null,"Collators will offer a bid designated in DOT  for\ninclusion of a parathread block candidate. The Relay Chain block author is able to select from these\nbids to include a parathread block. The obvious incentive is for them to accept the block candidate\nwith the highest bid, which would bring them the most profit. The tokens from the parathread bids\nwill likely be split 80-20, meaning that 80% goes into\nPolkadot treasury and 20% goes to the block\nauthor. This is the same split that applies also to transaction fees and, like many other parameters\nin Polkadot, can be changed through a\ngovernance mechanism."),(0,o.kt)("h2",{id:"parachain-vs-parathread"},"Parachain vs. Parathread"),(0,o.kt)("p",null,"Parachains and parathreads are very similar from a development perspective. One can imagine that a\nchain developed with Substrate can at different points in its lifetime assume one of three states:\nan independent chain with secured bridge, a parachain, or a parathread. It can switch between these\nlast two states with relatively minimal effort since the difference is more of an economic\ndistinction than a technological one."),(0,o.kt)("p",null,"Parathreads have the exact same benefits for connecting to Polkadot\nthat a full parachain has. Namely, it is able to send messages to other\npara-objects through ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm###XCMP"},"XCMP")," and it is secured under the full economic security\nof Polkadot 's validator set."),(0,o.kt)("p",null,"The difference between parachains and parathreads is economic. Parachains must be registered through\na normal means of Polkadot, i.e. governance\nproposal or parachain slot auction. Parathreads have a fixed fee for registration that would\nrealistically be much lower than the cost of acquiring a parachain slot. Similar to how\nDOT  are locked for the duration of parachain\nslots and then returned to the winner of the auction, the deposit for a parathread will be returned\nto the parathread after the conclusion of its term."),(0,o.kt)("p",null,"Registration of the parathread does not guarantee anything more than the registration of the\nparathread code to the Polkadot Relay Chain.\nWhen a parathread progresses by producing a new block, there is a fee that must be paid in order to\nparticipate in a per-block auction for inclusion in the verification of the next Relay Chain block.\nAll parathreads that are registered are competing in this auction for their parathread to be\nincluded for progression."),(0,o.kt)("p",null,"There are two interesting observations to make about parathreads. Since they compete on a per-block\nbasis, it is similar to how transactions are included in Bitcoin or Ethereum. A similar fee market\nwill likely develop, which means that busier times will drive the price of parathread inclusion up,\nwhile times of low activity will require lower fees. Two, this mechanism is markedly different from\nthe parachain mechanism, which guarantees inclusion as long as a parachain slot is held; parathread\nregistration grants no such right to the parathread."),(0,o.kt)("h2",{id:"parathread-economics"},"Parathread Economics"),(0,o.kt)("p",null,"There are two sources of compensation for collators:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assuming a parathread has its own local token system, it pays the collators from the transaction\nfees in its local token. If the parathread does not implement a local token, or its local token\nhas no value (e.g. it is used only for governance), then it can use DOT\nto incentivize collators."),(0,o.kt)("li",{parentName:"ol"},"Parathread protocol subsidy. A parathread can mint new tokens in order to provide additional\nincentives for the collator. Probably, the amount of local tokens to mint for the parathread\nwould be a function of time, the more time that passes between parathread blocks that are\nincluded in the Relay Chain, the more tokens the parathread is willing to subsidize in order to\nbe considered for inclusion. The exact implementation of this minting process could be through\nlocal parathread inflation or via a stockpile of funds like a treasury.")),(0,o.kt)("p",null,"Collators may be paid in local parathread currency. However, the Relay Chain transacts with the\nPolkadot native currency only. Collators must\nthen submit block candidates with an associated bid in DOT.\n"),(0,o.kt)("h2",{id:"parachain-slot-swaps"},"Parachain Slot Swaps"),(0,o.kt)("p",null,'It will be possible for a parachain that holds a parachain slot to swap this slot with a parathread\nso that the parathread "upgrades" to a full parachain and the parachain becomes a parathread. The\nchain can also stop being a chain and continue as a thread without swapping the slot. The slot, if\nunoccupied, would be auctioned off in the next ',(0,o.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction period"),"."),(0,o.kt)("p",null,"This provides a graceful off-ramp for parachains that have reached the end of their lease and do not\nhave sufficient usage to justify renewal; they can remain registered on the Relay Chain but only\nproduce new blocks when they need to."),(0,o.kt)("p",null,"Parathreads help ease the sharp stop of the parachain slot term by allowing parachains that are\nstill doing something useful to produce blocks, even if it is no longer economically viable to rent\na parachain slot."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06"},"Parathreads: Pay-as-you-go Parachains"))))}m.isMDXComponent=!0}}]);