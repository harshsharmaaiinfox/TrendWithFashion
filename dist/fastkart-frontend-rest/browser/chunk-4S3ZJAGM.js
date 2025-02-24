import{Oc as F,Pc as G,Sc as L,Za as D,p as A,r as c,s as p,u as d,va as l}from"./chunk-CMRSBBFI.js";import{Ac as f,X as s,a as h,b as w,ba as n,ea as i,m as r}from"./chunk-CPQ7MZ6M.js";var T=(()=>{class a{static{this.type="[Notification] Get"}constructor(t){this.payload=t}}return a})(),E=(()=>{class a{static{this.type="[Notification] Mark As Read"}constructor(){}}return a})(),$=(()=>{class a{static{this.type="[Notification] Delete"}constructor(t){this.id=t}}return a})();var y=class j{constructor(o){this.notificationService=o}static notification(o){return o.notification.data}getNotification(o,t){return this.notificationService.getNotifications(t?.payload).pipe(s({next:e=>{o.patchState({notification:{data:e.data,total:e?.total?e?.total:e.data.length}})},error:e=>{throw new Error(e?.error?.message)}}))}markAsRead(o){return this.notificationService.markAsReadNotification().pipe(s({next:t=>{o.patchState({notification:{data:t.data,total:t?.total?t?.total:t.data.length}})},error:t=>{throw new Error(t?.error?.message)}}))}delete(o,{id:t}){return this.notificationService.deleteNotification(t).pipe(s({next:()=>{let e=o.getState(),u=e.notification.data.filter(Y=>Y.id!==t);o.patchState(w(h({},e),{notification:{data:u,total:e.notification.total-1}}))},complete:()=>{this.notificationService.showSuccess("Notification Deleted Successfully.")},error:e=>{throw new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||j)(i(D))}}static{this.\u0275prov=n({token:j,factory:j.\u0275fac})}};r([c(T)],y.prototype,"getNotification",null);r([c(E)],y.prototype,"markAsRead",null);r([c($)],y.prototype,"delete",null);r([d()],y,"notification",null);y=r([p({name:"notification",defaults:{notification:{data:[],total:0}}})],y);var C=(()=>{class a{static{this.type="[Wallet] Transaction Get"}constructor(t){this.payload=t}}return a})();var H=(()=>{class a{constructor(t){this.http=t}getUserTransaction(t){return this.http.get(`${l.URL}/wallet/consumer`,{params:t})}static{this.\u0275fac=function(e){return new(e||a)(i(f))}}static{this.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var R=class b{constructor(o){this.walletService=o}static wallet(o){return o.wallet}getUserTransations(o,{payload:t}){return this.walletService.getUserTransaction(t).pipe(s({next:e=>{o.patchState({wallet:{balance:e?.balance,transactions:{data:e?.transactions?.data,total:e?.transactions?.total?e?.transactions?.total:e?.transactions?.data?.length}}})},error:e=>{throw o.patchState({wallet:{balance:0,transactions:{data:[],total:0}}}),new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||b)(i(H))}}static{this.\u0275prov=n({token:b,factory:b.\u0275fac})}};r([c(C)],R.prototype,"getUserTransations",null);r([d()],R,"wallet",null);R=r([p({name:"wallet",defaults:{wallet:{balance:0,transactions:{data:[],total:0}}}})],R);var W=(()=>{class a{static{this.type="[Payment Details] Get"}}return a})(),q=(()=>{class a{static{this.type="[Payment Details] Post"}constructor(t){this.payload=t}}return a})();var z=(()=>{class a{constructor(t){this.http=t}getPaymentAccount(){return this.http.get(`${l.URL}/paymentAccount`)}updatePaymentAccount(t){return this.http.post(`${l.URL}/paymentAccount`,t)}static{this.\u0275fac=function(e){return new(e||a)(i(f))}}static{this.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var v=class P{constructor(o,t){this.notificationService=o,this.PaymentDetailsService=t}static paymentDetails(o){return o.paymentDetails}getPaymentDetails(o){return this.PaymentDetailsService.getPaymentAccount().pipe(s({next:t=>{o.patchState({paymentDetails:t})},error:t=>{throw new Error(t?.error?.message)}}))}updatePaymentDetails(o,t){return this.PaymentDetailsService.updatePaymentAccount(t.payload).pipe(s({next:e=>{if(typeof e=="object"){let u=o.getState();o.patchState(w(h({},u),{paymentDetails:e}))}},complete:()=>{this.notificationService.showSuccess("Account Details Updated Successfully.")},error:e=>{throw new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||P)(i(D),i(z))}}static{this.\u0275prov=n({token:P,factory:P.\u0275fac})}};r([c(W)],v.prototype,"getPaymentDetails",null);r([c(q)],v.prototype,"updatePaymentDetails",null);r([d()],v,"paymentDetails",null);v=r([p({name:"paymentDetails",defaults:{paymentDetails:null}})],v);var O=(()=>{class a{static{this.type="[Point] Transaction Get"}constructor(t){this.payload=t}}return a})();var V=(()=>{class a{constructor(t){this.http=t}getUserTransaction(t){return this.http.get(`${l.URL}/points/consumer`,{params:t})}static{this.\u0275fac=function(e){return new(e||a)(i(f))}}static{this.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var I=class U{constructor(o){this.pointService=o}static point(o){return o.point}getUserTransaction(o,{payload:t}){return this.pointService.getUserTransaction(t).pipe(s({next:e=>{o.patchState({point:{balance:e?.balance,transactions:{data:e?.transactions?.data,total:e?.transactions?.total?e?.transactions?.total:e?.transactions?.data?.length}}})},error:e=>{throw o.patchState({point:{balance:0,transactions:{data:[],total:0}}}),new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||U)(i(V))}}static{this.\u0275prov=n({token:U,factory:U.\u0275fac})}};r([c(O)],I.prototype,"getUserTransaction",null);r([d()],I,"point",null);I=r([p({name:"point",defaults:{point:{balance:0,transactions:{data:[],total:0}}}})],I);var B=(()=>{class a{constructor(t){this.http=t}getRefunds(t){return this.http.get(`${l.URL}/refund`,{params:t})}sendRefundRequest(t){return this.http.post(`${l.URL}/refund`,t)}updaterefundStatus(t,e){return this.http.put(`${l.URL}/refund/${t}`,{status:e})}static{this.\u0275fac=function(e){return new(e||a)(i(f))}}static{this.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var g=class k{constructor(o,t){this.refundService=o,this.store=t}static refund(o){return o.refund}getRefund(o,t){return this.refundService.getRefunds(t.payload).pipe(s({next:e=>{o.patchState({refund:{data:e.data,total:e?.total?e?.total:e.data?.length}})},error:e=>{throw new Error(e?.error?.message)}}))}sendRefundStatus(o,t){return this.refundService.sendRefundRequest(t.payload).pipe(s({next:e=>{if(typeof e=="object"){let u=o.getState();o.patchState(w(h({},u),{refund:{data:[...u.refund.data,e],total:u.refund.total}})),this.store.dispatch(new L(e.order_number))}},error:e=>{throw new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||k)(i(B),i(A))}}static{this.\u0275prov=n({token:k,factory:k.\u0275fac})}};r([c(F)],g.prototype,"getRefund",null);r([c(G)],g.prototype,"sendRefundStatus",null);r([d()],g,"refund",null);g=r([p({name:"refund",defaults:{refund:{data:[],total:0}}})],g);var J=(()=>{class a{static{this.type="[Download] Get"}constructor(t){this.payload=t}}return a})(),K=(()=>{class a{static{this.type="[Download] Files"}constructor(t){this.id=t}}return a})(),Q=(()=>{class a{static{this.type="[Download] License"}constructor(t){this.id=t}}return a})();var X=(()=>{class a{constructor(t){this.http=t}downloads(t){return this.http.get(`${l.URL}/download`,{params:t})}downloadFiles(t){return this.http.post(`${l.URL}/download/zip/link`,{id:t})}downloadLicense(t){return this.http.post(`${l.URL}/download/key/link`,{id:t})}static{this.\u0275fac=function(e){return new(e||a)(i(f))}}static{this.\u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var S=class N{constructor(o){this.downloadService=o}static download(o){return o.download}downloads(o,t){return this.downloadService.downloads(t.payload).pipe(s({next:e=>{o.patchState({download:{data:e.data,total:e?.total?e?.total:e.data?.length}})},error:e=>{throw new Error(e?.error?.message)}}))}downloadFiles(o,t){return this.downloadService.downloadFiles(t.id).pipe(s({next:e=>{e&&e.download_link&&window.location.assign(e.download_link)},error:e=>{throw new Error(e?.error?.message)}}))}downloadLicense(o,t){return this.downloadService.downloadLicense(t.id).pipe(s({next:e=>{e&&e.download_link&&window.location.assign(e.download_link)},error:e=>{throw new Error(e?.error?.message)}}))}static{this.\u0275fac=function(t){return new(t||N)(i(X))}}static{this.\u0275prov=n({token:N,factory:N.\u0275fac})}};r([c(J)],S.prototype,"downloads",null);r([c(K)],S.prototype,"downloadFiles",null);r([c(Q)],S.prototype,"downloadLicense",null);r([d()],S,"download",null);S=r([p({name:"download",defaults:{download:{data:[],total:0}}})],S);export{T as a,E as b,y as c,C as d,R as e,W as f,q as g,v as h,O as i,I as j,g as k,J as l,K as m,Q as n,S as o};
