"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[214],{1419:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(2054),o=n(1),u=n(2074),i=n(2070),a=n(810),s=n(2044),l=function(e){var t=e.className,n=e.sandbox,r=e.title,u=e.html,i=(0,o.useRef)(null),a=(0,o.useState)(void 0),l=(0,s.Z)(a,2),d=l[0],c=l[1],v=(0,o.useCallback)((function(e){var t,n;"setHeight"===(null===(t=e.data)||void 0===t?void 0:t.type)&&c(null===(n=e.data)||void 0===n?void 0:n.height)}),[]);return(0,o.useEffect)((function(){var e,t,n=null===(e=i.current)||void 0===e||null===(t=e.contentWindow)||void 0===t?void 0:t.document;if(n&&u){var r,o;n.open(),n.write(u),n.close(),n.body.style.margin="0",null===(r=i.current)||void 0===r||null===(o=r.contentWindow)||void 0===o||o.addEventListener("message",v);var a=n.querySelector("iframe");a&&(a.width="100%")}return function(){var e,t;null===(e=i.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.removeEventListener("message",v)}}),[i.current,u]),o.createElement("iframe",{ref:i,className:t,sandbox:n,height:d,title:r})},d=n(2),c=n(3),v=n(2053),f=(n(51),n(767)),m=function(e){var t=e.url,n=e.onError,s=(0,c.TL)(),m=function(e){var t=(0,c.h_)(),n=function(){var n=(0,v.Z)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get("/api/oembed",{params:{url:e}});case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,f.useQuery)(["embed",e],n)}(t),p=m.data,b=m.error,h=m.isError;return(0,o.useEffect)((function(){b&&h&&n(b)}),[h]),(0,r.Z)(d.u_,{title:(0,r.Z)(u.Z,{id:"status.embed",defaultMessage:"Embed post"}),onClose:function(){s((0,i.Mr)("EMBED"))}},void 0,(0,r.Z)(d.Kq,{space:4},void 0,(0,r.Z)(d.xv,{theme:"muted"},void 0,(0,r.Z)(u.Z,{id:"embed.instructions",defaultMessage:"Embed this post on your website by copying the code below."})),(0,r.Z)(a.Z,{value:(null==p?void 0:p.html)||""})),(0,r.Z)("div",{className:"py-9"},void 0,(0,r.Z)(d.iz,{})),(0,r.Z)(l,{className:"w-full overflow-hidden rounded-xl",sandbox:"allow-same-origin allow-scripts",title:"embedded-status",html:null==p?void 0:p.html}))}}}]);
//# sourceMappingURL=embed_modal-94689f8cc633c4f0dadd.chunk.js.map