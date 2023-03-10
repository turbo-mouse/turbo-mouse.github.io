"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[38],{1424:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var s=n(2063),a=n(1),i=n(2064),o=n(2065),d=n(2083),r=n(141),l=n(2074),u=n(2),c=n(3),v=n(2053),Z=(n(7),n(5),n(2082)),f=n(686),g=n(849),m=n(38),p=n(2094),b=function(){var e=(0,p.lv)(5,25),t=(0,p.lv)(5,15);return(0,s.Z)("div",{className:"relative w-full animate-pulse overflow-hidden rounded-lg bg-gray-100 text-primary-50 dark:bg-primary-800 dark:text-primary-800"},void 0,(0,s.Z)("div",{className:"h-40 bg-primary-200 dark:bg-gray-600"}),(0,s.Z)(u.Kq,{className:"p-2.5",space:2},void 0,(0,s.Z)(u.xv,{weight:"semibold"},void 0,(0,p._4)(e)),(0,s.Z)("div",{className:"flex flex-wrap gap-y-1 gap-x-2 text-gray-700 dark:text-gray-600"},void 0,(0,s.Z)("span",{},void 0,(0,p._4)(t)),(0,s.Z)("span",{},void 0,(0,p._4)(t)),(0,s.Z)("span",{},void 0,(0,p._4)(t)))))},h=function(e){var t=e.id,n=(0,a.useCallback)((0,m.TE)(),[]),i=(0,c.CG)((function(e){return n(e,{id:t})}));return i?(0,s.Z)(Z.rU,{className:"w-full px-1",to:"/@".concat(i.getIn(["account","acct"]),"/events/").concat(i.id)},void 0,(0,s.Z)(g.Z,{status:i,floatingAction:!1})):null},y=function(e){var t=e.statusIds,i=e.isLoading,o=e.emptyMessage,d=(0,a.useState)(0),r=(0,v.Z)(d,2),l=r[0],c=r[1],Z=function(e){c(e%t.size)};return 0===t.size?i?(0,s.Z)(b,{}):(0,s.Z)(u.Zb,{variant:"rounded",size:"lg"},void 0,o):(0,s.Z)("div",{className:"relative -mx-1"},void 0,0!==l&&(0,s.Z)("div",{className:"absolute left-3 top-1/2 z-10 -mt-4"},void 0,(0,s.Z)("button",{onClick:function(){return Z(l-1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,(0,s.Z)(u.JO,{src:n(574),className:"h-6 w-6 text-black dark:text-white"}))),(0,s.Z)(f.ZP,{animateHeight:!0,index:l,onChangeIndex:Z},void 0,t.map((function(e){return(0,s.Z)(h,{id:e},e)}))),l!==t.size-1&&(0,s.Z)("div",{className:"absolute right-3 top-1/2 z-10 -mt-4"},void 0,(0,s.Z)("button",{onClick:function(){return Z(l+1)},className:"flex h-8 w-8 items-center justify-center rounded-full bg-white/50 backdrop-blur dark:bg-gray-900/50"},void 0,(0,s.Z)(u.JO,{src:n(251),className:"h-6 w-6 text-black dark:text-white"}))))},x=(0,i.vU)({title:{id:"column.events",defaultMessage:"Events"}}),_=function(){var e=(0,o.Z)(),t=(0,c.TL)(),n=(0,c.CG)((function(e){return e.status_lists.get("recent_events").items})),i=(0,c.CG)((function(e){return e.status_lists.get("recent_events").isLoading})),v=(0,c.CG)((function(e){return e.status_lists.get("joined_events").items})),Z=(0,c.CG)((function(e){return e.status_lists.get("joined_events").isLoading}));return(0,a.useEffect)((function(){t((0,r.E4)()),t((0,r.qV)())}),[]),(0,s.Z)(u.sg,{label:e.formatMessage(x.title)},void 0,(0,s.Z)(u.Ug,{className:"mb-4",space:2,justifyContent:"between"},void 0,(0,s.Z)(u.ll,{title:(0,s.Z)(d.Z,{id:"events.recent_events",defaultMessage:"Recent events"})}),(0,s.Z)(u.zx,{className:"ml-auto xl:hidden",theme:"primary",size:"sm",onClick:function(){t((0,l.h7)("COMPOSE_EVENT"))}},void 0,(0,s.Z)(d.Z,{id:"events.create_event",defaultMessage:"Create event"}))),(0,s.Z)(u.eW,{className:"mb-2"},void 0,(0,s.Z)(y,{statusIds:n,isLoading:i,emptyMessage:(0,s.Z)(d.Z,{id:"events.recent_events.empty",defaultMessage:"There are no public events yet."})})),(0,s.Z)(u.Ol,{},void 0,(0,s.Z)(u.ll,{title:(0,s.Z)(d.Z,{id:"events.joined_events",defaultMessage:"Joined events"})})),(0,s.Z)(u.eW,{},void 0,(0,s.Z)(y,{statusIds:v,isLoading:Z,emptyMessage:(0,s.Z)(d.Z,{id:"events.joined_events.empty",defaultMessage:"You haven't joined any event yet."})})))}},1304:function(e,t,n){n.r(t);var s=n(2063),a=n(2083),i=n(2074),o=n(2),d=n(3);t.default=function(){var e=(0,d.TL)();return(0,s.Z)(o.Kq,{space:2},void 0,(0,s.Z)(o.Kq,{},void 0,(0,s.Z)(o.xv,{size:"lg",weight:"bold"},void 0,(0,s.Z)(a.Z,{id:"new_event_panel.title",defaultMessage:"Create New Event"})),(0,s.Z)(o.xv,{theme:"muted",size:"sm"},void 0,(0,s.Z)(a.Z,{id:"new_event_panel.subtitle",defaultMessage:"Can't find what you're looking for? Schedule your own event."}))),(0,s.Z)(o.zx,{icon:n(650),onClick:function(){e((0,i.h7)("COMPOSE_EVENT"))},theme:"secondary",block:!0},void 0,(0,s.Z)(a.Z,{id:"new_event_panel.action",defaultMessage:"Create event"})))}}}]);
//# sourceMappingURL=events-92a1090db8776d6d410e.chunk.js.map