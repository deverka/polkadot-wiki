"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"learn-xcm-docs-testing",title:"Testing",sidebar_label:"Testing",description:"Testing XCM-powered Solutions.",keywords:["xcm","cross-consensus messaging","config"],slug:"./testing"},l="Testing",c={unversionedId:"learn/xcm/learn-xcm-docs-testing",id:"learn/xcm/learn-xcm-docs-testing",title:"Testing",description:"Testing XCM-powered Solutions.",source:"@site/../docs/learn/xcm/testing.md",sourceDirName:"learn/xcm",slug:"/learn/xcm/testing",permalink:"/docs/learn/xcm/testing",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/testing.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"learn-xcm-docs-testing",title:"Testing",sidebar_label:"Testing",description:"Testing XCM-powered Solutions.",keywords:["xcm","cross-consensus messaging","config"],slug:"./testing"},sidebar:"docs",previous:{title:"Executor Configuration",permalink:"/docs/learn/xcm/config-deep-dive"},next:{title:"References",permalink:"/docs/learn/xcm/references"}},u={},m=[{value:"XCM Simulator",id:"xcm-simulator",level:2},{value:"XCM Emulator",id:"xcm-emulator",level:2},{value:"End-to-End testing",id:"end-to-end-testing",level:2}],p={toc:m},d="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Before deploying your XCM-powered solution to production, it's paramount to test it thoroughly.\nThere are different levels for testing, which should be tackled sequentially:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message: Making sure your message works properly, according to the XCVM spec."),(0,a.kt)("li",{parentName:"ul"},"Configuration: Making sure your executor's configuration is as expected."),(0,a.kt)("li",{parentName:"ul"},"End-to-end: Making sure the whole flow works, in an environment as similar to production as\npossible.")),(0,a.kt)("p",null,"We'll discuss tools and best practices for each of these levels."),(0,a.kt)("h2",{id:"xcm-simulator"},"XCM Simulator"),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-simulator"},"xcm-simulator"),"\nis a tool to quickly test the execution of various XCM instructions against the ",(0,a.kt)("inlineCode",{parentName:"p"},"xcm-executor"),". The\nexamples in this documentation use the xcm-simulator. The simulator mocks the Downward Message\nPassing pallet, enabling us to get the XCMs that a parachain receives from the relay chain using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"received_dmp")," getter. The simulator should be used as a XCM playground. For testing the XCM\nconfiguration of your parachain and the integration with other chains, you can use the xcm-emulator."),(0,a.kt)("h2",{id:"xcm-emulator"},"XCM Emulator"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus/xcm/xcm-emulator"},"xcm-emulator"),"\nis a tool to emulate XCM program execution using pre-configured runtimes, including those used to\nrun on live networks, such as Kusama, Polkadot, Statemine, etc. This allows for testing cross-chain\nmessage passing and verifying outcomes, weights, and side-effects."),(0,a.kt)("p",null,"An example of how the emulator is used for testing common good parachains can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus/parachains/integration-tests/emulated"},"here"),"."),(0,a.kt)("p",null,"The xcm-emulator uses the transport layer pallets. However, the messages do not utilize the same\nmessaging infrastructure as live networks, as the transport mechanism is being mocked out. Also,\nconsensus related events are not tested, like disputes, staking and iamonline events. To test for\nthese events, parachains can use E2E tests."),(0,a.kt)("h2",{id:"end-to-end-testing"},"End-to-End testing"),(0,a.kt)("p",null,"There are two frameworks being used in the ecosystem to do e2e testing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/zombienet"},"Zombienet"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopsticks"),".")))}g.isMDXComponent=!0}}]);