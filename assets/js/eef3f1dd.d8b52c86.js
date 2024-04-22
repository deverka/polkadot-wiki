(self.webpackChunk=self.webpackChunk||[]).push([[4097],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(74165),o=a(15861),i=a(67294),r=a(87152),s=a(9712),l=a(67425);function p(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var i,l,p,d,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(i),e.next=21,s.G.create({provider:p});case 21:d=e.sent,(u=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),c=d[0],h=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",n="statemine",o="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,s){var l=void 0;if(r===t||r===o)l=3;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/i[r].precision)?e/i[r].precision+" "+i[r].symbol:(e/i[r].precision).toFixed(l)+" "+i[r].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,r){var s=void 0;if(r===t||r===o)s=1;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}i((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},7522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=a(47940),s=["components"],l={id:"learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",sidebar_label:"Treasury Guides",description:"Polkadot-JS Guides about the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],slug:"../learn-guides-treasury"},p=void 0,d={unversionedId:"learn/learn-guides-treasury",id:"learn/learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",description:"Polkadot-JS Guides about the Polkadot Treasury.",source:"@site/../docs/learn/learn-guides-treasury.md",sourceDirName:"learn",slug:"/learn-guides-treasury",permalink:"/docs/learn-guides-treasury",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-treasury.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1713771917,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{id:"learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",sidebar_label:"Treasury Guides",description:"Polkadot-JS Guides about the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],slug:"../learn-guides-treasury"},sidebar:"docs",previous:{title:"OpenGov Guides",permalink:"/docs/learn-guides-polkadot-opengov"},next:{title:"Bounty Guides",permalink:"/docs/learn-guides-bounties"}},u={},c=[{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",level:2},{value:"Announcing the Proposal",id:"announcing-the-proposal",level:3},{value:"Creating a Treasury Proposal - Spend Local",id:"creating-a-treasury-proposal---spend-local",level:2},{value:"Submit Treasury Proposal Preimage",id:"submit-treasury-proposal-preimage",level:3},{value:"Submit a Treasury Track Referendum",id:"submit-a-treasury-track-referendum",level:3},{value:"Place a Decision Deposit for the Treasury Track Referendum",id:"place-a-decision-deposit-for-the-treasury-track-referendum",level:3},{value:"Creating a USDT Treasury Proposal - Spend (with AssetHub)",id:"creating-a-usdt-treasury-proposal---spend-with-assethub",level:2},{value:"Creating a Preimage",id:"creating-a-preimage",level:3},{value:"Specifying Asset Kind",id:"specifying-asset-kind",level:3},{value:"Specifying the Amount",id:"specifying-the-amount",level:3},{value:"Specifying the Beneficiary",id:"specifying-the-beneficiary",level:3},{value:"Specifying <code>validFrom</code> (optional)",id:"specifying-validfrom-optional",level:3},{value:"Summary: Final Call",id:"summary-final-call",level:3},{value:"Creating a Staged Proposal with <code>validFrom</code>",id:"creating-a-staged-proposal-with-validfrom",level:2},{value:"Using <code>batchAll</code> for Multi-Spend Proposals",id:"using-batchall-for-multi-spend-proposals",level:3},{value:"Using <code>validFrom</code> for a Milestone-Based Proposal",id:"using-validfrom-for-a-milestone-based-proposal",level:3},{value:"Manually Claiming Payouts",id:"manually-claiming-payouts",level:3},{value:"Proposing a &quot;Void&quot; for a Staged Proposal",id:"proposing-a-void-for-a-staged-proposal",level:3},{value:"Submit Treasury Proposal via Polkassembly",id:"submit-treasury-proposal-via-polkassembly",level:2},{value:"Requesting Tips from the Treasury",id:"requesting-tips-from-the-treasury",level:2}],h={toc:c},m="wrapper";function k(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)(m,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"sticky",style:{zIndex:1}},(0,i.kt)("br",null),(0,i.kt)("p",null,"Polkadot-JS is for developers and power users only. If you need help using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS UI"),", you can contact the\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"Polkadot Support Team"),". For more user-friendly tools\nsee the ",(0,i.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,i.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and ",(0,i.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"this page")," to learn about the Polkadot Treasury."),(0,i.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,i.kt)("p",null,"Your proposal should address a problem, outline a goal, give a detailed account of how you will\nreach that goal, and include any ongoing maintenance needs. As much as possible, you should itemize\nthe tasks to be completed so fees can be evaluated and milestones can be followed. You can check the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1IZykdp2cyQavcRyZd_dgNj5DcgxgZR6kAqGdcNARu1w"},"guidelines for a successful proposal"),"","\nand fill out the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1O_84mXYFERCavmnJyxbIPKFkG0bVBySRjCVy-d-VKcc"},"Treasury proposal template"),"\nprovided."),(0,i.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,i.kt)("p",null,"To minimize storage on-chain, proposals don't contain contextual information. When a user submits a\nproposal, they will need to find an off-chain way to explain the proposal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the\n",(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#polkadot-watercooler:web3.foundation"},"Polkadot Watercooler")," and\n",(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction room"),".\n",""),(0,i.kt)("li",{parentName:"ul"},"Use platforms like ",(0,i.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," and\n",(0,i.kt)("a",{parentName:"li",href:"https://www.subsquare.io/"},"SubSquare")," to initiate discussion with the community. They also offer\na gauge poll to capture the community sentiment before submitting an on-chain referendum.")),(0,i.kt)("p",null,"Spreading the word about the proposal's explanation to the community is ultimately up to the\nproposer."),(0,i.kt)("admonition",{title:"Use Accounts with Verified On-Chain Identity for Treasury Proposals",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To ensure legitimacy, it is required that the account linked to the Treasury proposal has an\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"identity set"),"\nand is\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"verified by an on-chain registrar"),".")),(0,i.kt)("h2",{id:"creating-a-treasury-proposal---spend-local"},"Creating a Treasury Proposal - Spend Local"),(0,i.kt)("admonition",{title:'"Spend" vs. "Spend Local"',type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may notice that the Treasury pallet contains two extrinsics - ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spend")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal")," (formally called ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spend"),") refers to a spend of\nDOT that is locally available, i.e., DOT from the Relay Chain's treasury account. ",(0,i.kt)("inlineCode",{parentName:"p"},"spend")," actually\nallows the caller to specify an asset other than DOT, or even assets in other locations, e.g.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#asset-hub"},"Asset Hub"),"."),(0,i.kt)("p",{parentName:"admonition"},"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spend")," is ",(0,i.kt)("strong",{parentName:"p"},"not")," bound by a spend period, and must be\nclaimed manually via the ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.payout")," extrinsic. ",(0,i.kt)("inlineCode",{parentName:"p"},"treasuy.spendLocal")," behavior remains\nunchanged.")),(0,i.kt)("h3",{id:"submit-treasury-proposal-preimage"},"Submit Treasury Proposal Preimage"),(0,i.kt)("p",null,"The example below shows how to create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#preimage"},"preimage")," for a\ntransaction that requests 100 DOT from Treasury."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Preimages"),"\nand then click on Add Preimage."),(0,i.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the preimage."),(0,i.kt)("li",{parentName:"ul"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"treasury"),' pallet in the "propose" dropdown and the ',(0,i.kt)("inlineCode",{parentName:"li"},"spendLocal(amount, beneficiary)"),"call"),(0,i.kt)("li",{parentName:"ul"},"Enter the DOT amount."),(0,i.kt)("li",{parentName:"ul"},"Enter the AccountID of the beneficiary (which has a verified on-chain identity)."),(0,i.kt)("li",{parentName:"ul"},"Submit preimage"),(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction by paying the specified transaction fees.")),(0,i.kt)("admonition",{title:"Preimage Submission Deposit",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around\n41 DOT. Ensure you have enough account\nbalance to pay for the submission deposit and the transaction fees.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Treasury Preimage",src:a(95773).Z,width:"1188",height:"655"})),(0,i.kt)("p",null,"After successful submission of the preimage, it is displayed on Polkadot-JS UI > Governance >\nPreimages page. Every preimage is associated with a unique preimage hash (highlighted in a box in\nthe image below). Take a note of this preimage hash, which is required to submit a referendum."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Treasury Preimage Hash",src:a(83601).Z,width:"2879",height:"453"})),(0,i.kt)("h3",{id:"submit-a-treasury-track-referendum"},"Submit a Treasury Track Referendum"),(0,i.kt)("p",null,"The example below shows how to submit a Treasury track referendum."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),"\nand then click on Submit proposal."),(0,i.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the proposal."),(0,i.kt)("li",{parentName:"ul"},"Choose the appropriate submission track (The example below selected Small Spender track)."),(0,i.kt)("li",{parentName:"ul"},"Enter the preimage hash of the treasury spend transaction.(If the preimage exists on-chain, the\npreimage length box is automatically populated)"),(0,i.kt)("li",{parentName:"ul"},"Click on Submit proposal."),(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Submit Treasury Proposal",src:a(67847).Z,width:"2141",height:"1238"})),(0,i.kt)("p",null,"Once your submission is executed, your referendum will appear under your chosen track on the\nPolkadot-JS UI ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"referenda page"),"."),(0,i.kt)("h3",{id:"place-a-decision-deposit-for-the-treasury-track-referendum"},"Place a Decision Deposit for the Treasury Track Referendum"),(0,i.kt)("p",null,"For the referendum to move from preparing phase to the deciding phase, a decision deposit needs to\nbe placed. The decision deposit values for each individual\n",(0,i.kt)("a",{parentName:"p",href:"./learn-polkadot-opengov-treasury#treasury-tracks"},"Treasury Tracks")," are listed in a section above\nin this document."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Submit Treasury Proposal Decision Deposit",src:a(49431).Z,width:"2133",height:"168"})),(0,i.kt)("p",null,"The preimage and decision deposits\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"can be claimed once the referendum ends"),"."),(0,i.kt)("h2",{id:"creating-a-usdt-treasury-proposal---spend-with-assethub"},"Creating a USDT Treasury Proposal - Spend (with AssetHub)"),(0,i.kt)("p",null,"The following tutorial mostly goes over how to utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"spend")," extrinsic, which, unlike\n",(0,i.kt)("inlineCode",{parentName:"p"},"spendLocal"),", is able to specify assets besides the native asset in other locations, such as\n",(0,i.kt)("a",{parentName:"p",href:"/docs/glossary#asset-hub"},"Asset Hub"),"."),(0,i.kt)("h3",{id:"creating-a-preimage"},"Creating a Preimage"),(0,i.kt)("p",null,"The example below shows how to create a ",(0,i.kt)("a",{parentName:"p",href:"../general/glossary#preimage"},"preimage")," for a transaction\nthat requests 100 USDT from AssetHub."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Referenda"),"\nand then click on Add Preimage."),(0,i.kt)("li",{parentName:"ul"},"Select the account to submit the preimage."),(0,i.kt)("li",{parentName:"ul"},"Choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"treasury"),' pallet in the "propose" dropdown and the\n',(0,i.kt)("inlineCode",{parentName:"li"},"spend(assetKind, amount, beneficiary, validFrom)")," call.")),(0,i.kt)("p",null,"Now, let's go through each field one-by-one and fill them in accordingly:"),(0,i.kt)("h3",{id:"specifying-asset-kind"},"Specifying Asset Kind"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assetKind")," refers to the asset to be used, specified via XCM. In short, we need to be able to find:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The relative location of the asset, and"),(0,i.kt)("li",{parentName:"ul"},"How it is identified within this location.")),(0,i.kt)("p",null,"For this example, we are using USDT, which from the perspective of the Relay Chain would be:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parachain 1000 (AssetHub) > AssetId (Concrete) > PalletInstance 50 > General Index 1984")),(0,i.kt)("p",null,"First, we specify the location - in this case, Asset Hub (parachain 1,000). ",(0,i.kt)("inlineCode",{parentName:"p"},"PalletInstance 50"),"\nrefers to the Assets pallet instance on Asset Hub. The general index is ",(0,i.kt)("inlineCode",{parentName:"p"},"1984"),", which is the ID of\nUSDT in this instance of the Assets pallet."),(0,i.kt)("p",null,"Here is how the final ",(0,i.kt)("inlineCode",{parentName:"p"},"assetKind")," field should look:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset Kind",src:a(16182).Z,width:"1564",height:"1310"})),(0,i.kt)("h3",{id:"specifying-the-amount"},"Specifying the Amount"),(0,i.kt)("p",null,"The amount should be simply the amount of USDT, where each ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," USDT is ",(0,i.kt)("inlineCode",{parentName:"p"},"1000000"),". Because we are\nasking for 100 USDT, we put ",(0,i.kt)("inlineCode",{parentName:"p"},"100000000")," as the input for the amount."),(0,i.kt)("h3",{id:"specifying-the-beneficiary"},"Specifying the Beneficiary"),(0,i.kt)("p",null,"The beneficiary account will be one on Asset Hub. For this reason, the XCM junction must be\nspecified as follows, with one junction (",(0,i.kt)("inlineCode",{parentName:"p"},"X1"),") and the beneficiary account (",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId32"),"), which is\nan account address on the chain."),(0,i.kt)("h3",{id:"specifying-validfrom-optional"},"Specifying ",(0,i.kt)("inlineCode",{parentName:"h3"},"validFrom")," (optional)"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"validFrom")," field is optional, and refers to the block height of the Relay Chain upon which the\npayout can be issued. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"validFrom")," parameter is not set, the spend can be paid out immediately\nafter approval. For more information on this field, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"#creating-a-staged-proposal-with-validfrom"},"guide below"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset Value, Beneficiary and ValidFrom",src:a(44246).Z,width:"1591",height:"1279"})),(0,i.kt)("h3",{id:"summary-final-call"},"Summary: Final Call"),(0,i.kt)("p",null,"The final call should look like the following, where we:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Specify our asset as ",(0,i.kt)("strong",{parentName:"li"},"USDT")," on ",(0,i.kt)("strong",{parentName:"li"},"Asset Hub"),"."),(0,i.kt)("li",{parentName:"ul"},"Specify the ",(0,i.kt)("strong",{parentName:"li"},"amount")," of ",(0,i.kt)("strong",{parentName:"li"},"USDT")," (100)."),(0,i.kt)("li",{parentName:"ul"},"Specify the beneficiary address."),(0,i.kt)("li",{parentName:"ul"},"If applicable, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"validFrom")," field to specify a block number upon which the payout becomes\nvalid.")),(0,i.kt)("p",null,"The next steps are to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the preimage (and its length)"),(0,i.kt)("li",{parentName:"ul"},"Sign and submit the preimage")),(0,i.kt)("p",null,"Once this is finished, one may submit a proposal\n",(0,i.kt)("a",{parentName:"p",href:"#submit-a-treasury-track-referendum"},"as stated above"),". Keep in mind one will also need to\n",(0,i.kt)("a",{parentName:"p",href:"#place-a-decision-deposit-for-the-treasury-track-referendum"},"provide the decision deposit as well"),"."),(0,i.kt)("h2",{id:"creating-a-staged-proposal-with-validfrom"},"Creating a Staged Proposal with ",(0,i.kt)("inlineCode",{parentName:"h2"},"validFrom")),(0,i.kt)("p",null,"Staged proposals are similar to a tranche or milestone-based funding model; instead of all spends\nbeing paid simultaneously, each portion is redeemable at a certain block height. This is done by\nspecifying each milestone, set at its respective amount and block height at which it becomes\nredeemable."),(0,i.kt)("p",null,'For example, take the following "staged" proposal, which has three milestones, each at 100 DOT, and\nis redeemable at the following block heights. Usually, block heights correspond to a date in the\nfuture:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"100 DOT paid out at block height 1000"),(0,i.kt)("li",{parentName:"ul"},"200 DOT paid out at block height 2000"),(0,i.kt)("li",{parentName:"ul"},"500 DOT paid out at block height 4000")),(0,i.kt)("p",null,"Governance can also propose to ",(0,i.kt)("strong",{parentName:"p"},"void")," a staged proposal before it has completed all of its\npayouts."),(0,i.kt)("admonition",{title:"Calculating dates from block heights",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Although not the most accurate form of measurement, block heights can be used to correspond to\ncertain dates in the future.")),(0,i.kt)("h3",{id:"using-batchall-for-multi-spend-proposals"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"batchAll")," for Multi-Spend Proposals"),(0,i.kt)("p",null,"Using the Utility pallet, one can batch multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.spend")," calls together. Each of these\ncalls can have its own ",(0,i.kt)("inlineCode",{parentName:"p"},"validFrom")," block height, which allows for scenarios such as the above to be\npossible."),(0,i.kt)("h3",{id:"using-validfrom-for-a-milestone-based-proposal"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"validFrom")," for a Milestone-Based Proposal"),(0,i.kt)("p",null,"Once each spend is defined within the batched call, the ",(0,i.kt)("inlineCode",{parentName:"p"},"validFrom"),' field can be utilized to specify\nthe "date", or block height, at which each spend will be executed.'),(0,i.kt)("h3",{id:"manually-claiming-payouts"},"Manually Claiming Payouts"),(0,i.kt)("admonition",{title:"Spends can expire!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that once the ",(0,i.kt)("inlineCode",{parentName:"p"},"validFrom")," block height has been reached, you will have to claim the\nspend within 30 days.")),(0,i.kt)("p",null,"In order to claim the spend, you must manually call the ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.payout")," extrinsic via a ",(0,i.kt)("inlineCode",{parentName:"p"},"Signed"),"\norigin. The ID used is the one found in\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Treasury"),", where the ID of the proposal\nin question would be available:"),(0,i.kt)("h3",{id:"proposing-a-void-for-a-staged-proposal"},'Proposing a "Void" for a Staged Proposal'),(0,i.kt)("p",null,"If a proposal that hasn't completed all of its spends needs to be voided, the ",(0,i.kt)("inlineCode",{parentName:"p"},"treasury.voidSpend"),"\nextrinsic can be utilized via a governance proposal."),(0,i.kt)("h2",{id:"submit-treasury-proposal-via-polkassembly"},"Submit Treasury Proposal via Polkassembly"),(0,i.kt)("p",null,"To submit a treasury track referendum via ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/opengov"},"Polkassembly"),"\nclick on the FAB button in the bottom right corner. Then,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Click on "Create Treasury Proposal" and choose an address for the proposer.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After choosing an address, you will enter a three-stage guideline:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Write a proposal: you can add a detailed description for the proposal, which will be stored on\nPolkassembly. Alternatively, you can link an existing discussion post.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"polkassembly-write-proposal",src:a(90348).Z,width:"2130",height:"1596"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a preimage: an existing preimage can be linked, or a new one can be created. To create a\npreimage, add the beneficiary address and the\nDOT amount. The track will be auto-selected\nand the user can proceed with the creation of a preimage.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"polkassembly-create-preimage",src:a(76869).Z,width:"2154",height:"1598"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a proposal: final confirmation about the proposal creation. The description of the\nproposal and the preimage are automatically linked to the proposal.")))),(0,i.kt)("h2",{id:"requesting-tips-from-the-treasury"},"Requesting Tips from the Treasury"),(0,i.kt)("p",null,"To request a tip funded by the treasury, you can follow the above steps for\n",(0,i.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"creating a treasury proposal")," but instead of submitting the proposal\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"32 / Small Spender")," track, you will need to submit it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"30 / Small Tipper")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"31 / Big Tipper")," tracks depending on the number of tokens to be requested."),(0,i.kt)("p",null,"Briefly, you will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a preimage using the ",(0,i.kt)("inlineCode",{parentName:"li"},"treasury.spendLocal")," extrinsic and specifying the number of tokens\nand the beneficiary of the tip"),(0,i.kt)("li",{parentName:"ul"},"Submit a proposal to the right track (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"30")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"31"),") using the preimage hash"),(0,i.kt)("li",{parentName:"ul"},"Once you started the referendum go to ",(0,i.kt)("a",{parentName:"li",href:"https://polkassembly.io/"},"Polkassembly"),", log in with the\nproposer account and edit the referendum details"),(0,i.kt)("li",{parentName:"ul"},"Notify the\n",(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction Element Channel"),"","\nabout your referendum"),(0,i.kt)("li",{parentName:"ul"},"Place the decision deposit before the\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\ntimeout"),(0,i.kt)("li",{parentName:"ul"},"Once the referendum ends you can\n",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"claim the preimage and decision deposits back"))))}k.isMDXComponent=!0},44246:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spend-amount-account-validfrom-69e09fd1808dc22b53335000542d7ed8.png"},16182:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spend-usdt-assethub-2a1acb14f9e00c23b4122db0e31031f2.png"},76869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkassembly-create-preimage-7396a8ce796d0f0dcad30d3edced8618.png"},90348:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkassembly-write-proposal-a3ce8ab9303111f6003ac8103ba29507.png"},67847:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-proposal-treasury-3948a231c4f3162a8680ad052af9e903.png"},83601:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-preimage-hash-05bb427d21d3ecf7d5e38418a0a0f4ed.png"},95773:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-preimage-24f67df8dba06111635d87a19ee0ce15.png"},49431:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-proposal-decision-deposit-849d27481ba0134acf743f7474d8f6a4.png"},46601:()=>{}}]);