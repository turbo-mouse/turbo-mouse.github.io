(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[68],{1188:function(e,t,n){"use strict";n.r(t);var s=n(2054),o=n(2053),u=(n(51),n(914)),r=n(186),a=n(1),i=n(2055),c=n(2056),f=n(2074),d=n(2047),l=n(939),p=n(1289),g=n(2),h=n(3),m=(0,i.vU)({heading:{id:"column.quotes",defaultMessage:"Post quotes"}}),b=(0,r.debounce)((function(e,t){return t((0,l.Fg)(e))}),300,{leading:!0});t.default=function(){var e=(0,h.TL)(),t=(0,c.Z)(),n=(0,d.UO)().statusId,r=(0,h.CG)((function(e){return e.status_lists.getIn(["quotes:".concat(n),"items"],(0,u.OrderedSet)())})),i=(0,h.CG)((function(e){return e.status_lists.getIn(["quotes:".concat(n),"isLoading"],!0)})),q=(0,h.CG)((function(e){return!!e.status_lists.getIn(["quotes:".concat(n),"next"])}));a.useEffect((function(){e((0,l.ms)(n))}),[n]);var v=function(){var t=(0,o.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e((0,l.ms)(n));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=(0,s.Z)(f.Z,{id:"empty_column.quotes",defaultMessage:"This post has not been quoted yet."});return(0,s.Z)(g.sg,{label:t.formatMessage(m.heading),transparent:!0},void 0,(0,s.Z)(p.Z,{statusIds:r,scrollKey:"quotes:".concat(n),hasMore:q,isLoading:"boolean"!=typeof i||i,onLoadMore:function(){return b(n,e)},onRefresh:v,emptyMessage:y,divideType:"space"}))}},492:function(){}}]);
//# sourceMappingURL=quotes-d14ccba5fa4840e3f05e.chunk.js.map