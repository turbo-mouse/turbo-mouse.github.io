"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[38],{773:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(2057),o=s(2058),a=s(2059),r=s(2056),u=(s(54),s(34),s(0),s(4),s(5),s(42),s(17),s(14),s(117),s(16),s(102),s(36)),i=s(61),c=s(37),l=(0,o.vU)({blocksSuccess:{id:"export_data.success.blocks",defaultMessage:"Blocks exported successfully"},followersSuccess:{id:"export_data.success.followers",defaultMessage:"Followers exported successfully"},mutesSuccess:{id:"export_data.success.mutes",defaultMessage:"Mutes exported successfully"}});function d(e,t){var s=document.createElement("a");s.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURIComponent(e)),s.setAttribute("download",t),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}var f=function(e){return function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(s){var n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=s.data,o=[],a=(0,u.rx)(s).refs.find((function(e){return"next"===e.rel}));case 3:if(!a){t.next=11;break}return t.next=6,(0,u.ZP)(e).get(a.uri);case 6:s=t.sent,a=(0,u.rx)(s).refs.find((function(e){return"next"===e.rel})),Array.prototype.push.apply(n,s.data),t.next=3;break;case 11:return o=n.map((function(e){return(0,i.WT)(e).fqn})),t.abrupt("return",Array.from(new Set(o)));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(e,t){e({type:"EXPORT_FOLLOWS_REQUEST"});var s=t().me;return(0,u.ZP)(t).get("/api/v1/accounts/".concat(s,"/following?limit=40")).then(f(t)).then((function(t){(t=t.map((function(e){return e+",true"}))).unshift("Account address,Show boosts"),d(t.join("\n"),"export_followings.csv"),c.Z.success(l.followersSuccess),e({type:"EXPORT_FOLLOWS_SUCCESS"})})).catch((function(t){e({type:"EXPORT_FOLLOWS_FAIL",error:t})}))}},_=function(){return function(e,t){return e({type:"EXPORT_BLOCKS_REQUEST"}),(0,u.ZP)(t).get("/api/v1/blocks?limit=40").then(f(t)).then((function(t){d(t.join("\n"),"export_block.csv"),c.Z.success(l.blocksSuccess),e({type:"EXPORT_BLOCKS_SUCCESS"})})).catch((function(t){e({type:"EXPORT_BLOCKS_FAIL",error:t})}))}},m=function(){return function(e,t){return e({type:"EXPORT_MUTES_REQUEST"}),(0,u.ZP)(t).get("/api/v1/mutes?limit=40").then(f(t)).then((function(t){d(t.join("\n"),"export_mutes.csv"),c.Z.success(l.mutesSuccess),e({type:"EXPORT_MUTES_SUCCESS"})})).catch((function(t){e({type:"EXPORT_MUTES_FAIL",error:t})}))}},x=s(2),b=s(2047),g=s(1),h=s(3),S=function(e){var t=e.messages,s=e.action,o=(0,h.TL)(),r=(0,a.Z)(),u=(0,g.useState)(!1),i=(0,b.Z)(u,2),c=i[0],l=i[1];return(0,n.Z)(x.l0,{},void 0,(0,n.Z)(x.xv,{size:"xl",weight:"bold"},void 0,r.formatMessage(t.input_label)),(0,n.Z)(x.xv,{theme:"muted"},void 0,r.formatMessage(t.input_hint)),(0,n.Z)(x.iN,{},void 0,(0,n.Z)(x.zx,{theme:"primary",onClick:function(e){l(!0),o(s()).then((function(){l(!1)})).catch((function(){l(!1)}))},disabled:c},void 0,r.formatMessage(t.submit))))},v=(0,o.vU)({heading:{id:"column.export_data",defaultMessage:"Export data"},submit:{id:"export_data.actions.export",defaultMessage:"Export"}}),E=(0,o.vU)({input_label:{id:"export_data.follows_label",defaultMessage:"Follows"},input_hint:{id:"export_data.hints.follows",defaultMessage:"Get a CSV file containing a list of followed accounts"},submit:{id:"export_data.actions.export_follows",defaultMessage:"Export follows"}}),M=(0,o.vU)({input_label:{id:"export_data.blocks_label",defaultMessage:"Blocks"},input_hint:{id:"export_data.hints.blocks",defaultMessage:"Get a CSV file containing a list of blocked accounts"},submit:{id:"export_data.actions.export_blocks",defaultMessage:"Export blocks"}}),y=(0,o.vU)({input_label:{id:"export_data.mutes_label",defaultMessage:"Mutes"},input_hint:{id:"export_data.hints.mutes",defaultMessage:"Get a CSV file containing a list of muted accounts"},submit:{id:"export_data.actions.export_mutes",defaultMessage:"Export mutes"}}),k=function(){var e=(0,a.Z)();return(0,n.Z)(x.sg,{label:e.formatMessage(v.heading)},void 0,(0,n.Z)(S,{action:p,messages:E}),(0,n.Z)(S,{action:_,messages:M}),(0,n.Z)(S,{action:m,messages:y}))}}}]);
//# sourceMappingURL=export_data-c58e9d5773e75e974e1f.chunk.js.map