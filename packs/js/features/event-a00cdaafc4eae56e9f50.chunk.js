"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[36],{832:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(2075),o=a(2057),s=(a(4),a(28),a(5),a(1103)),i=a(1),r=a(2058),u=a(2059),c=a(2077),d=a(2076),l=a(2050),m=a(43),f=a(228),v=a(69),g=a(115),p=a(158),Z=a(2073),h=a(308),b=a(249),M=a(199),k=a(94),x=a(55),y=a(205),_=a(2),w=a(204),I=a(159),C=a(3),N=a(106),S=a(2094),U=a(1009),E=a(118),q=a(2091),D=function(){var e=(0,q.lv)(5,25),t=(0,q.lv)(5,30),a=(0,q.lv)(5,30),n=(0,q.lv)(5,30);return(0,o.Z)(_.Kq,{className:"animate-pulse text-primary-50 dark:text-primary-800",space:2},void 0,(0,o.Z)("p",{className:"text-lg"},void 0,(0,q._4)(e)),(0,o.Z)(_.Kq,{space:1},void 0,(0,o.Z)("p",{},void 0,(0,q._4)(t)),(0,o.Z)("p",{},void 0,(0,q._4)(a)),(0,o.Z)("p",{},void 0,(0,q._4)(n))))},O=a(1143),R=a(1144),T=(0,r.vU)({bannerHeader:{id:"event.banner",defaultMessage:"Event banner"},exportIcs:{id:"event.export_ics",defaultMessage:"Export to your calendar"},copy:{id:"event.copy",defaultMessage:"Copy link to event"},external:{id:"event.external",defaultMessage:"View event on {domain}"},bookmark:{id:"status.bookmark",defaultMessage:"Bookmark"},unbookmark:{id:"status.unbookmark",defaultMessage:"Remove bookmark"},quotePost:{id:"event.quote",defaultMessage:"Quote event"},reblog:{id:"event.reblog",defaultMessage:"Repost event"},unreblog:{id:"event.unreblog",defaultMessage:"Un-repost event"},pin:{id:"status.pin",defaultMessage:"Pin on profile"},unpin:{id:"status.unpin",defaultMessage:"Unpin from profile"},delete:{id:"status.delete",defaultMessage:"Delete"},mention:{id:"status.mention",defaultMessage:"Mention @{name}"},chat:{id:"status.chat",defaultMessage:"Chat with @{name}"},direct:{id:"status.direct",defaultMessage:"Direct message @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},report:{id:"status.report",defaultMessage:"Report @{name}"},adminAccount:{id:"status.admin_account",defaultMessage:"Moderate @{name}"},adminStatus:{id:"status.admin_status",defaultMessage:"Open this post in the moderation interface"},markStatusSensitive:{id:"admin.statuses.actions.mark_status_sensitive",defaultMessage:"Mark post sensitive"},markStatusNotSensitive:{id:"admin.statuses.actions.mark_status_not_sensitive",defaultMessage:"Mark post not sensitive"},deleteStatus:{id:"admin.statuses.actions.delete_status",defaultMessage:"Delete post"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},blockAndReport:{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"},deleteConfirm:{id:"confirmations.delete_event.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete_event.heading",defaultMessage:"Delete event"},deleteMessage:{id:"confirmations.delete_event.message",defaultMessage:"Are you sure you want to delete this event?"}}),A=function(e){var t=e.status,r=(0,u.Z)(),q=(0,C.TL)(),A=(0,l.k6)(),z=(0,C.hz)(),K=(0,C.rV)(),F=(0,C.Tr)(),L=!!F&&F.staff,P=!!F&&F.admin;if(!t||!t.event)return i.createElement(i.Fragment,null,(0,o.Z)("div",{className:"-mx-4 -mt-4"},void 0,(0,o.Z)("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"})),(0,o.Z)(D,{}));var B,V,H=t.account,G=t.event,J=G.banner,j=H.username;return i.createElement(i.Fragment,null,(0,o.Z)("div",{className:"-mx-4 -mt-4"},void 0,(0,o.Z)("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"},void 0,J&&(0,o.Z)("a",{href:J.url,onClick:function(e){e.preventDefault(),e.stopPropagation(),q((0,Z.h7)("MEDIA",{media:(0,s.List)([G.banner])}))},target:"_blank"},void 0,(0,o.Z)(y.Z,{src:J.url,alt:r.formatMessage(T.bannerHeader),className:"absolute inset-0 h-full object-cover md:rounded-t-xl"})))),(0,o.Z)(_.Kq,{space:2},void 0,(0,o.Z)(_.Ug,{className:"w-full",alignItems:"start",space:2},void 0,(0,o.Z)(_.xv,{className:"grow",size:"lg",weight:"bold"},void 0,G.name),(0,o.Z)(_.v2,{},void 0,(0,o.Z)(_.j2,{as:_.hU,src:a(198),theme:"outlined",className:"h-[30px] px-2",iconClassName:"h-4 w-4",children:null}),(0,o.Z)(_.qy,{},void 0,(B=H.fqn.split("@")[1],V=[{text:r.formatMessage(T.exportIcs),action:function(){q((0,g.Of)(t.id)).then((function(e){var t=e.data;(0,U.L)(t,"calendar.ics")})).catch((function(){}))},icon:a(2025)},{text:r.formatMessage(T.copy),action:function(){var e=t.uri;(0,S.Z)(e)},icon:a(898)}],z.federating&&(0,N.Q1)(H)&&V.push({text:r.formatMessage(T.external,{domain:B}),action:function(){window.open(t.uri,"_blank")},icon:a(211)}),F?(z.bookmarks&&V.push({text:r.formatMessage(t.bookmarked?T.unbookmark:T.bookmark),action:function(){q((0,p.yR)(t))},icon:t.bookmarked?a(1060):a(910)}),["public","unlisted"].includes(t.visibility)&&(V.push({text:r.formatMessage(t.reblogged?T.unreblog:T.reblog),action:function(){var e=function(){return q((0,p.bb)(t))};K.get("boostModal")?q((0,Z.h7)("BOOST",{status:t,onReblog:e})):e()},icon:a(200)}),z.quotePosts&&V.push({text:r.formatMessage(T.quotePost),action:function(){q((0,v.vp)(t))},icon:a(1061)})),V.push(null),F.id===H.id?(["public","unlisted"].includes(t.visibility)&&V.push({text:r.formatMessage(t.pinned?T.unpin:T.pin),action:function(){q((0,p.aB)(t))},icon:t.pinned?a(968):a(969)}),V.push({text:r.formatMessage(T.delete),action:function(){q((0,Z.h7)("CONFIRM",{icon:a(97),heading:r.formatMessage(T.deleteHeading),message:r.formatMessage(T.deleteMessage),confirm:r.formatMessage(T.deleteConfirm),onConfirm:function(){return q((0,k.Vx)(t.id))}}))},icon:a(97),destructive:!0})):(V.push({text:r.formatMessage(T.mention,{name:j}),action:function(){q((0,v.Ck)(H))},icon:a(248)}),!0===t.getIn(["account","pleroma","accepts_chat_messages"])?V.push({text:r.formatMessage(T.chat,{name:j}),action:function(){q((0,f.aU)(H.id,A))},icon:a(251)}):z.privacyScopes&&V.push({text:r.formatMessage(T.direct,{name:j}),action:function(){q((0,v.kS)(H))},icon:a(213)}),V.push(null),V.push({text:r.formatMessage(T.mute,{name:j}),action:function(){q((0,b.A0)(H))},icon:a(210)}),V.push({text:r.formatMessage(T.block,{name:j}),action:function(){q((0,Z.h7)("CONFIRM",{icon:a(105),heading:(0,o.Z)(c.Z,{id:"confirmations.block.heading",defaultMessage:"Block @{name}",values:{name:H.acct}}),message:(0,o.Z)(c.Z,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:(0,o.Z)("strong",{},void 0,"@",H.acct)}}),confirm:r.formatMessage(T.blockConfirm),onConfirm:function(){return q((0,m.Gy_)(H.id))},secondary:r.formatMessage(T.blockAndReport),onSecondary:function(){q((0,m.Gy_)(H.id)),q((0,M.UQ)(H,{status:t}))}}))},icon:a(105)}),V.push({text:r.formatMessage(T.report,{name:j}),action:function(){q((0,M.UQ)(H,{status:t}))},icon:a(432)})),L&&(V.push(null),V.push({text:r.formatMessage(T.adminAccount,{name:H.username}),action:function(){q((0,Z.h7)("ACCOUNT_MODERATION",{accountId:H.id}))},icon:a(395)}),P&&V.push({text:r.formatMessage(T.adminStatus),action:function(){window.open("/pleroma/admin/#/statuses/".concat(t.id,"/"),"_blank")},icon:a(307)}),V.push({text:r.formatMessage(!1===t.sensitive?T.markStatusSensitive:T.markStatusNotSensitive),action:function(){q((0,h.SO)(r,t.id,t.sensitive))},icon:a(899)}),H.id!==(null==F?void 0:F.id)&&V.push({text:r.formatMessage(T.deleteStatus),action:function(){q((0,h.Uj)(r,t.id))},icon:a(97),destructive:!0})),V):V).map((function(e,t){if(void 0===(null==e?void 0:e.text))return(0,o.Z)(_.R,{},t);var a=e.action?_.sN:_.Uk,s=e.action?{onSelect:e.action}:{to:e.to,as:d.rU,target:e.target||"_self"};return i.createElement(a,(0,n.Z)({key:t},s,{className:"group"}),(0,o.Z)("div",{className:"flex items-center"},void 0,e.icon&&(0,o.Z)(w.Z,{src:e.icon,className:"mr-3 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"}),(0,o.Z)("div",{className:"truncate"},void 0,e.text)))})))),H.id===(null==F?void 0:F.id)?(0,o.Z)(_.zx,{size:"sm",theme:"secondary",onClick:function(e){e.stopPropagation(),q((0,g.UB)(t.id))}},void 0,(0,o.Z)(c.Z,{id:"event.manage",defaultMessage:"Manage"})):(0,o.Z)(O.Z,{status:t})),(0,o.Z)(_.Kq,{space:1},void 0,(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(2026)}),(0,o.Z)("span",{},void 0,(0,o.Z)(c.Z,{id:"event.organized_by",defaultMessage:"Organized by {name}",values:{name:(0,o.Z)(d.rU,{className:"mention inline-block",to:"/@".concat(H.acct)},void 0,(0,o.Z)(_.Ug,{space:1,alignItems:"center",grow:!0},void 0,(0,o.Z)("span",{dangerouslySetInnerHTML:{__html:H.display_name_html}}),H.verified&&(0,o.Z)(I.Z,{})))}}))),(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(973)}),(0,o.Z)("a",{href:"#",className:"hover:underline",onClick:function(e){e.preventDefault(),e.stopPropagation(),q(F?(0,Z.h7)("EVENT_PARTICIPANTS",{statusId:t.id}):(0,Z.h7)("UNAUTHORIZED"))}},void 0,(0,o.Z)("span",{},void 0,(0,o.Z)(c.Z,{id:"event.participants",defaultMessage:"{count} {rawCount, plural, one {person} other {people}} going",values:{rawCount:G.participants_count||0,count:(0,E.w8)(G.participants_count||0)}})))),(0,o.Z)(R.Z,{status:t}),G.location&&(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(884)}),(0,o.Z)("span",{},void 0,G.location.get("name"))))))}},1506:function(e,t,a){a.r(t);var n=a(2043),o=a(2057),s=a(2056),i=a(2047),r=(a(19),a(6),a(18),a(5),a(113),a(78),a(4),a(0),a(24),a(54),a(1103)),u=a(79),c=a.n(u),d=a(1),l=a(2077),m=a(69),f=a(94),v=a(153),g=a(57),p=a(1421),Z=a(2),h=a(887),b=a(571),M=a(3),k=a(38),x=a(539),y=a(740),_=a(1422);t.default=function(e){var t=(0,M.TL)(),a=(0,d.useCallback)((0,k.TE)(),[]),u=(0,M.CG)((function(t){return a(t,{id:e.params.statusId})})),w=(0,M.CG)((function(e){return e.me})),I=(0,M.CG)((function(e){var t=(0,r.OrderedSet)();if(u){var a=u.id;t=(t=(0,y.getDescendantsIds)(e,a)).delete(a)}return t})),C=(0,d.useState)(!!u),N=(0,i.Z)(C,2),S=N[0],U=N[1],E=(0,d.useState)(),q=(0,i.Z)(E,2),D=q[0],O=q[1],R=(0,d.useRef)(null),T=(0,d.useRef)(null),A=function(){var a=(0,s.Z)(regeneratorRuntime.mark((function a(){var n,o,s,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.params,o=n.statusId,a.next=4,t((0,f.wE)(o));case 4:s=a.sent,i=s.next,O(i);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();(0,d.useEffect)((function(){A().then((function(){U(!0)})).catch((function(){U(!0)}))}),[e.params.statusId]),(0,d.useEffect)((function(){S&&w&&t((0,m.By)("reply:".concat(e.params.statusId),u))}),[S,w]);var z=function(e){var t=(0,r.List)(I).indexOf(e);F(t-1)},K=function(e){var t=(0,r.List)(I).indexOf(e);F(t+1)},F=function(e){var t;null===(t=T.current)||void 0===t||t.scrollIntoView({index:e,behavior:"smooth",done:function(){var t=document.querySelector('#thread [data-index="'.concat(e,'"] .focusable'));t&&t.focus()}})},L=(0,d.useCallback)(c()((function(){D&&u&&t((0,f.TA)(u.id,D)).then((function(e){var t=e.next;O(t)})).catch((function(){}))}),300,{leading:!0}),[D,u]),P=I.size>0;if(!u&&S)return(0,o.Z)(v.Z,{});if(!u)return(0,o.Z)(h.Z,{});var B,V=[];return P&&V.push.apply(V,(0,n.Z)((B=I,B.map((function(e){return e.endsWith("-tombstone")?function(e){return(0,o.Z)("div",{className:"py-4 pb-8"},void 0,(0,o.Z)(p.Z,{id:e,onMoveUp:z,onMoveDown:K},e))}(e):e.startsWith("末pending-")?function(e){var t=e.replace(/^末pending-/,"");return(0,o.Z)(b.Z,{idempotencyKey:t,thread:!0},e)}(e):function(e){return(0,o.Z)(_.Z,{id:e,focusedStatusId:u.id,onMoveUp:z,onMoveDown:K},e)}(e)}))).toArray())),(0,o.Z)(Z.Kq,{space:2},void 0,w&&(0,o.Z)("div",{className:"border-b border-solid border-gray-200 p-2 pt-0 dark:border-gray-800"},void 0,(0,o.Z)(x.Z,{id:"reply:".concat(u.id),autoFocus:!1,event:u.id})),d.createElement("div",{ref:R,className:"thread p-0 shadow-none sm:p-2"},d.createElement(g.Z,{id:"thread",ref:T,hasMore:!!D,onLoadMore:L,placeholderComponent:function(){return(0,o.Z)(h.Z,{thread:!0})},initialTopMostItemIndex:0,emptyMessage:(0,o.Z)(l.Z,{id:"event.discussion.empty",defaultMessage:"No one has commented this event yet. When someone does, they will appear here."})},V)))}},1505:function(e,t,a){a.r(t);var n=a(2057),o=a(2047),s=(a(63),a(9),a(0),a(5),a(6),a(18),a(1)),i=a(2077),r=a(2058),u=a(2073),c=a(94),d=a(153),l=a(212),m=a(897),f=a(948),v=a(2),g=a(908),p=a(3),Z=a(38),h=a(881);t.default=function(e){var t=e.params,b=(0,p.TL)(),M=(0,s.useCallback)((0,Z.TE)(),[]),k=(0,p.CG)((function(e){return M(e,{id:t.statusId})})),x=(0,p.Dn)().tileServer,y=(0,p.rV)().get("displayMedia"),_=(0,s.useState)(!!k),w=(0,o.Z)(_,2),I=w[0],C=w[1],N=(0,s.useState)((0,h.qI)(k,y)),S=(0,o.Z)(N,2),U=S[0],E=S[1];(0,s.useEffect)((function(){b((0,c.UK)(t.statusId)).then((function(){C(!0)})).catch((function(){C(!0)})),E((0,h.qI)(k,y))}),[t.statusId]);var q=function(e){e.preventDefault(),b((0,u.h7)("EVENT_MAP",{statusId:k.id}))},D=(0,s.useCallback)((function(){var e,t=k.event;return t.location&&(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.location",defaultMessage:"Location"})),(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(884)}),(0,n.Z)(v.xv,{},void 0,t.location.get("name"),(0,n.Z)("br",{}),!(null===(e=t.location.get("street"))||void 0===e||!e.trim())&&s.createElement(s.Fragment,null,t.location.get("street"),(0,n.Z)("br",{})),[t.location.get("postalCode"),t.location.get("locality"),t.location.get("country")].filter((function(e){return e})).join(", "),x&&t.location.get("latitude")&&s.createElement(s.Fragment,null,(0,n.Z)("br",{}),(0,n.Z)("a",{href:"#",className:"text-primary-600 hover:underline dark:text-accent-blue",onClick:q},void 0,(0,n.Z)(i.Z,{id:"event.show_on_map",defaultMessage:"Show on map"}))))))}),[k]),O=(0,s.useCallback)((function(){var e=k.event;if(!e.start_time)return null;var t=new Date(e.start_time),o=e.end_time&&new Date(e.end_time),u=o&&t.getDate()===o.getDate()&&t.getMonth()===o.getMonth()&&t.getFullYear()===o.getFullYear();return(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.date",defaultMessage:"Date"})),(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(909)}),(0,n.Z)(v.xv,{},void 0,(0,n.Z)(r.Ji,{value:t,year:"numeric",month:"long",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),o&&s.createElement(s.Fragment,null," - ",(0,n.Z)(r.Ji,{value:o,year:u?void 0:"numeric",month:u?void 0:"long",day:u?void 0:"2-digit",weekday:u?void 0:"long",hour:"2-digit",minute:"2-digit"})))))}),[k]),R=(0,s.useCallback)((function(){var e;return null!==(e=k.event)&&void 0!==e&&e.links.size?(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.website",defaultMessage:"External links"})),k.event.links.map((function(e){return(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(898)}),(0,n.Z)("a",{href:e.remote_url||e.url,className:"text-primary-600 hover:underline dark:text-accent-blue",target:"_blank"},void 0,(e.remote_url||e.url).replace(/^https?:\/\//,"")))}))):null}),[k]);return!k&&I?(0,n.Z)(d.Z,{}):k?(0,n.Z)(v.Kq,{className:"mt-4 sm:p-2",space:2},void 0,!!k.contentHtml.trim()&&(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.description",defaultMessage:"Description"})),(0,n.Z)(l.Z,{status:k,collapsable:!1,translatable:!0}),(0,n.Z)(f.Z,{status:k})),(0,n.Z)(m.Z,{status:k,showMedia:U,onToggleVisibility:function(){E(!U)}}),k.quote&&k.pleroma.get("quote_visible",!0)&&(0,n.Z)(g.Z,{statusId:k.quote}),D(),O(),R()):null}},2025:function(e,t,a){e.exports=a.p+"packs/icons/calendar-plus-928f3bdf.svg"},2026:function(e,t,a){e.exports=a.p+"packs/icons/flag-3-62f2778c.svg"}}]);
//# sourceMappingURL=event-a00cdaafc4eae56e9f50.chunk.js.map