(this["webpackJsonpnear-billboard"]=this["webpackJsonpnear-billboard"]||[]).push([[0],{166:function(e,t){},176:function(e,t){},194:function(e,t){},225:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(48),s=n.n(r),o=n(20),i=n(39),l=n(7),j=n(241),d=n(245),u=Object({NODE_ENV:"production",PUBLIC_URL:"/near-billboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"nearbillboard.brandonleong.testnet";var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:u,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:u,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},x=n(60),m=n(70),O=b("testnet");function p(){return(p=Object(i.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.connect)(Object.assign({deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}},O));case 2:t=e.sent,window.walletConnection=new x.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new x.Contract(window.walletConnection.account(),O.contractName,{viewMethods:["getPromise","getPromises"],changeMethods:["releaseDeposit","createPromise"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){window.walletConnection.requestSignIn(O.contractName)}function w(){window.walletConnection.signOut(),window.location.reload()}var v=n(243),N=n(238),y=n(248),C=n(1),k=function(e){var t=e.address,n=e.amount,c=e.symbol,a=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(v.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(C.jsxs)(C.Fragment,{children:[n," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(C.jsx)(N.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(v.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(v.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(v.a.Divider,{}),Object(C.jsxs)(v.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},S=n(62),T=(n(224),function(){return Object(C.jsx)(S.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),P=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},I=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},A={text:""};P.defaultProps=A,I.defaultProps=A;var F=n(2),E=n(152),D=n(242),B=n(244),U=n(154),_=function(e){var t=e.save,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),j=i[0],d=i[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],m=b[1],O=Object(c.useState)(0),p=Object(l.a)(O,2),h=p[0],f=p[1],g=Object(c.useState)(!1),w=Object(l.a)(g,2),v=w[0],N=w[1],y=function(){return N(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E.a,{onClick:function(){return N(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(C.jsx)("i",{class:"bi bi-plus"})}),Object(C.jsxs)(D.a,{show:v,onHide:y,centered:!0,children:[Object(C.jsx)(D.a.Header,{closeButton:!0,children:Object(C.jsx)(D.a.Title,{children:"Promise Information"})}),Object(C.jsx)(B.a,{children:Object(C.jsxs)(D.a.Body,{children:[Object(C.jsx)(U.a,{controlId:"inputTitle",label:"Promise Title",className:"mb-3",children:Object(C.jsx)(B.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter Title of The Promise"})}),Object(C.jsx)(U.a,{controlId:"inputMessage",label:"Content",className:"mb-3",children:Object(C.jsx)(B.a.Control,{as:"textarea",placeholder:"message",style:{height:"80px"},onChange:function(e){d(e.target.value)}})}),Object(C.jsx)(U.a,{controlId:"inputTo",label:"To",className:"mb-3",children:Object(C.jsx)(B.a.Control,{type:"text",placeholder:"To",onChange:function(e){m(e.target.value)}})}),Object(C.jsx)(U.a,{controlId:"inputDepositAmount",label:"Deposit Amount",className:"mb-3",children:Object(C.jsx)(B.a.Control,{type:"text",placeholder:"Deposit Amount",onChange:function(e){f(e.target.value)}})})]})}),Object(C.jsxs)(D.a.Footer,{children:[Object(C.jsx)(E.a,{variant:"outline-secondary",onClick:y,children:"Close"}),Object(C.jsx)(E.a,{variant:"dark",disabled:!(r&&j&&x&&h),onClick:function(){t({title:r,message:j,to:x,depositAmount:h}),y()},children:"Make a Promise"})]})]})]})},R=n(153),M=n(247),H=n(239),L=n.p+"static/media/handshake.c190260f.jpg",W=function(e){var t=e.promise,n=e.release,c=t.id,a=t.title,r=t.message,s=t.from,o=t.to,i=t.depositAmount,l=t.status,j=(t.blockTimestamp,"d-none");return"created"==l&&(j="w-100 py-3"),Object(C.jsx)(R.a,{children:Object(C.jsxs)(M.a,{className:" h-100",children:[Object(C.jsx)(M.a.Header,{children:Object(C.jsxs)(y.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:s}),Object(C.jsxs)(H.a,{bg:"secondary",className:"ms-auto",children:["Status: ",l]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:L,alt:a,style:{objectFit:"cover"}})}),Object(C.jsxs)(M.a.Body,{className:"d-flex  flex-column text-center",children:[Object(C.jsx)(M.a.Title,{children:a}),Object(C.jsx)(M.a.Text,{className:"flex-grow-1 ",children:r}),Object(C.jsxs)(M.a.Text,{className:"text-secondary",children:[Object(C.jsxs)("span",{children:["from: ",s]}),Object(C.jsx)("br",{}),Object(C.jsxs)("span",{children:["to: ",o]})]}),Object(C.jsxs)(M.a.Text,{className:"flex-grow-1 ",children:["Deposit Amount: ",x.utils.format.formatNearAmount(i)," NEAR"]}),Object(C.jsx)(E.a,{variant:"outline-dark",onClick:function(){n(c)},className:j,children:"Release Deposit"})]})]})},c)},K=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)(N.a,{animation:"border",role:"status",className:"opacity-25",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},z=n(240),J=n(246),q=1e14;function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.id=Object(J.a)(),t.depositAmount=Object(m.parseNearAmount)(t.depositAmount+""),e.next=4,window.contract.createPromise({promise:t},q,t.depositAmount);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){var t=e.id;return window.contract.releaseDeposit({promiseId:t},q)}var Q=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),j=s[0],d=s[1],u=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,window.contract.getPromises();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,V(t).then((function(e){u()}));case 4:Object(S.b)(Object(C.jsx)(P,{text:"Promise added successfully."})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log({error:e.t0}),Object(S.b)(Object(C.jsx)(I,{text:"Failed to create a promise."}));case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G({id:t}).then((function(e){return u()}));case 3:Object(S.b)(Object(C.jsx)(P,{text:"Release deposit successfully."})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(S.b)(Object(C.jsx)(I,{text:"Failed to release deposit. You are not the promise recevier."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(C.jsx)(C.Fragment,{children:j?Object(C.jsx)(K,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Near Billboard - Make Promises with Smart Contract"}),Object(C.jsx)(_,{save:b})]}),Object(C.jsx)(z.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(C.jsx)(W,{promise:Object(F.a)({},e),release:x})}))})]})})},X=function(e){var t=e.name,n=e.login,c=e.coverImg;return c?Object(C.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(C.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(C.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(C.jsx)("img",{src:c,alt:""})}),Object(C.jsx)("h1",{children:t}),Object(C.jsx)("p",{children:"Please connect your wallet to continue."}),Object(C.jsx)(E.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(C.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};X.defaultProps={name:""};var Z=X,$=(n(225),function(){var e=window.walletConnection.account(),t=Object(c.useState)("0"),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useCallback)(Object(i.a)(Object(o.a)().mark((function t(){return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,h();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(c.useEffect)((function(){s()}),[s]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T,{}),e.accountId?Object(C.jsxs)(j.a,{fluid:"md",children:[Object(C.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(C.jsx)(d.a.Item,{children:Object(C.jsx)(k,{address:e.accountId,amount:a,symbol:"NEAR",destroy:w})})}),Object(C.jsx)("main",{children:Object(C.jsx)(Q,{})})]}):Object(C.jsx)(Z,{name:"Near Billboard - Make Promises with Smart Contract",login:g,coverImg:L})]})}),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(231),n(228),n(229);window.nearInitPromise=function(){return p.apply(this,arguments)}().then((function(){s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)($,{})}),document.getElementById("root"))})).catch(console.error),ee()}},[[230,1,2]]]);
//# sourceMappingURL=main.91f8386b.chunk.js.map