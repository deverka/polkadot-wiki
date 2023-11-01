(self.webpackChunk=self.webpackChunk||[]).push([[8139],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(74165),n=a(15861),o=a(67294),s=a(87152),i=a(17145),l=a(67425);function p(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,r.Z)().mark((function e(t,a,n){var o,l,p,d,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return p=new s.U(o),e.next=21,i.G.create({provider:p});case 21:d=e.sent,(u=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,r){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,r);break;case"precise":(0,l.Precise)(e,a,r);break;case"blocksToDays":(0,l.BlocksToDays)(e,r);break;case"erasToDays":(0,l.ErasToDays)(e,r,a);break;case"percentage":(0,l.Percentage)(e,r);break;case"permillToPercent":(0,l.PermillToPercent)(e,r);break;case"arrayLength":(0,l.ArrayLength)(e,r);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,d=(0,o.useState)(""),c=d[0],k=d[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(s.toString(),l,t,k):k(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,k);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(n,l,t,k):k(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",r="statemine",n="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,i){var l=void 0;if(s===t||s===n)l=3;else{if(s!==a&&s!==r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),i((e=Number.isInteger(e/o[s].precision)?e/o[s].precision+" "+o[s].symbol:(e/o[s].precision).toFixed(l)+" "+o[s].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,s){var i=void 0;if(s===t||s===n)i=1;else{if(s!==a&&s!==r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}o((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},60283:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(47940),i=["components"],l={id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},p=void 0,d={unversionedId:"learn/learn-polkadot-opengov-treasury",id:"learn/learn-polkadot-opengov-treasury",title:"Treasury",description:"Polkadot's On-chain Treasury.",source:"@site/../docs/learn/learn-polkadot-opengov-treasury.md",sourceDirName:"learn",slug:"/learn-polkadot-opengov-treasury",permalink:"/docs/learn-polkadot-opengov-treasury",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-polkadot-opengov-treasury.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1698747689,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},sidebar:"docs",previous:{title:"OpenGov Origins",permalink:"/docs/learn-polkadot-opengov-origins"},next:{title:"Tokens and Assets",permalink:"/docs/learn-assets-index"}},u={},c=[{value:"Treasury Inflow and Outflow",id:"treasury-inflow-and-outflow",level:2},{value:"Treasury Tracks",id:"treasury-tracks",level:2}],k={toc:c},m="wrapper";function f(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Treasury is a pot of funds collected through a portion of block production rewards, transaction\nfees, slashing, and ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-inflation"},"staking inefficiencies"),".Treasury funds are held in a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account")," that cannot be controlled by any\nexternal account; only the system internal logic can access it."),(0,o.kt)("admonition",{title:"Creating a Treasury Proposal on Polkadot OpenGov",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to create a treasury proposal on Polkadot OpenGov, follow the instructions\noutlined on ",(0,o.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"this how-to guide"),".")),(0,o.kt)("h2",{id:"treasury-inflow-and-outflow"},"Treasury Inflow and Outflow"),(0,o.kt)("p",null,"Tokens that are deposited into the Treasury (i.e. the inflow) is determined by the following\nmechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transaction fees:")," 80% of the transaction fees of every submitted extrinsic is diverted to the\nTreasury, while 20% is given to the block producers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staking inefficiencies:")," the network knows an exogenously determined parameter called ideal\nstaking rate. The APY for stakers (nominators & validators) decreases whenever the actual staking\nrate is not equal to the ideal staking rate. To keep inflation constant at 10%, the system does\nnot creates less tokens, rather some share of the overall reward for stakers is diverted to the\nTreasury (more information\n",(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"here"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Slashes:")," whenever validators and nominators are slashed, a share of the slashed tokens are\ndiverted to Treasury. They are typically rare and unpredictable events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transfers:")," everyone can send funds to the Treasury directly. This is a rare event and\ntypically due to grantees reimbursing some of the amount they got allocated for various reasons.")),(0,o.kt)("p",null,"The outflow is determined by the following mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Burned tokens:")," at the end of each spend period\n",(0,o.kt)(s.Z,{network:"polkadot",path:"consts.treasury.burn",defaultValue:1e4,filter:"permillToPercent",mdxType:"RPC"}),"","%\nof the available funds are burned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Treasury proposals & Bounties:")," they make up the largest share of outflow tokens to the\ncommunity and need to be approved by governance. Then, payouts occur at the end of a\n",(0,o.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tips:")," smaller payouts directly to grantees that can happen within a\n",(0,o.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),".")),(0,o.kt)("admonition",{title:"Spend Period Schedule",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"On Polkadot-JS UI, navigate to Governance > Treasury to view the status of current\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"preimage-whitelist",src:a(29620).Z,width:"2508",height:"413"}))),(0,o.kt)("h2",{id:"treasury-tracks"},"Treasury Tracks"),(0,o.kt)("p",null,"OpenGov allows for managing funds through six tracks, each with its own\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-origins#origins-and-tracks-info"},"origin and track parameters"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#treasurer"},"Treasurer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#big-spender"},"Big Spender")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#medium-spender"},"Medium Spender")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#small-spender"},"Small Spender")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#big-tipper"},"Big Tipper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov-origins#small-tipper"},"Small Tipper"))),(0,o.kt)("admonition",{title:"How to access Treasury funds?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Access to Treasury funds requires successful enactment of referendum in the respective treasury\ntrack on-chain. Learn how to submit a treasury proposal for referendum\n",(0,o.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"here"),".")))}f.isMDXComponent=!0},29620:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/treasury-spend-period-a4883f21d69a6f05ca497b9893cc89a5.png"},46601:()=>{}}]);