"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[7],{1166:function(e,a,t){t.r(a);var n=t(2054),o=t(2044),s=(t(0),t(25),t(53),t(4),t(5),t(914)),i=t(1),r=t(2055),d=t(2056),c=t(2047),l=t(88),u=t(2),m=t(80),p=t(3),v=t(2089),g=(0,r.vU)({title:{id:"admin.latest_accounts_panel.title",defaultMessage:"Latest Accounts"},expand:{id:"admin.latest_accounts_panel.more",defaultMessage:"Click to see {count, plural, one {# account} other {# accounts}}"}});a.default=function(e){var a=e.limit,t=void 0===a?5:a,r=(0,d.Z)(),f=(0,c.k6)(),Z=(0,p.TL)(),h=(0,p.CG)((function(e){return e.admin.get("latestUsers").take(t)})),b=(0,p.CG)((function(e){return h.every((function(a){return!!e.accounts.getIn([a,"created_at"])}))})),_=(0,i.useState)(h.size),M=(0,o.Z)(_,2),x=M[0],w=M[1];(0,i.useEffect)((function(){Z((0,l.uh)(["local","active"],1,null,t)).then((function(e){w(e.count)})).catch((function(){}))}),[]);var y=h.sort(v.W).reverse();return b&&(0,s.is)(h,y)&&h&&!h.isEmpty()?(0,n.Z)(u.$L,{title:r.formatMessage(g.title),onActionClick:function(){f.push("/soapbox/admin/users")},actionTitle:r.formatMessage(g.expand,{count:x})},void 0,h.take(t).map((function(e){return(0,n.Z)(m.Z,{id:e,withRelationship:!1,withDate:!0},e)}))):null}},1428:function(e,a,t){t.r(a),t.d(a,{default:function(){return Y}});var n=t(2054),o=t(2055),s=t(2056),i=t(2047),r=t(2),d=t(3),c=(0,o.vU)({dashboard:{id:"admin_nav.dashboard",defaultMessage:"Dashboard"},reports:{id:"admin_nav.reports",defaultMessage:"Reports"},waitlist:{id:"admin_nav.awaiting_approval",defaultMessage:"Waitlist"}}),l=function(){var e=(0,s.Z)(),a=(0,i.$B)(),t=(0,d.CG)((function(e){return e.admin.awaitingApproval.count()})),o=(0,d.CG)((function(e){return e.admin.openReports.count()})),l=[{name:"/soapbox/admin",text:e.formatMessage(c.dashboard),to:"/soapbox/admin"},{name:"/soapbox/admin/reports",text:e.formatMessage(c.reports),to:"/soapbox/admin/reports",count:o},{name:"/soapbox/admin/approval",text:e.formatMessage(c.waitlist),to:"/soapbox/admin/approval",count:t}];return(0,n.Z)(r.mQ,{items:l,activeItem:a.path})},u=t(2044),m=(t(5),t(1)),p=t(88),v=t(56),g=t(500),f=t(38),Z=t(36),h=(0,o.vU)({approved:{id:"admin.awaiting_approval.approved_message",defaultMessage:"{acct} was approved!"},rejected:{id:"admin.awaiting_approval.rejected_message",defaultMessage:"{acct} was rejected."}}),b=function(e){var a=e.accountId,o=(0,s.Z)(),i=(0,d.TL)(),c=(0,m.useCallback)((0,f.Tm)(),[]),l=(0,d.CG)((function(e){return c(e,a)})),u=(0,d.CG)((function(e){return e.admin.users.get(a)}));return l?(0,n.Z)(r.Ug,{space:4,justifyContent:"between"},void 0,(0,n.Z)(r.Kq,{space:1},void 0,(0,n.Z)(r.xv,{weight:"semibold"},void 0,"@",l.get("acct")),(0,n.Z)(r.xv,{tag:"blockquote",size:"sm"},void 0,(null==u?void 0:u.invite_request)||"")),(0,n.Z)(r.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(r.hU,{src:t(183),onClick:function(){i((0,p.Yh)([l.id])).then((function(){var e=o.formatMessage(h.approved,{acct:"@".concat(l.acct)});Z.Z.success(e)})).catch((function(){}))},theme:"outlined",iconClassName:"p-1 text-gray-600 dark:text-gray-400"}),(0,n.Z)(r.hU,{src:t(78),onClick:function(){i((0,g.FI)(o,l.id,(function(){var e=o.formatMessage(h.rejected,{acct:"@".concat(l.acct)});Z.Z.info(e)})))},theme:"outlined",iconClassName:"p-1 text-gray-600 dark:text-gray-400"}))):null},_=(0,o.vU)({heading:{id:"column.admin.awaiting_approval",defaultMessage:"Awaiting Approval"},emptyMessage:{id:"admin.awaiting_approval.empty_message",defaultMessage:"There is nobody waiting for approval. When a new user signs up, you can review them here."}}),M=function(){var e=(0,s.Z)(),a=(0,d.TL)(),t=(0,d.CG)((function(e){return e.admin.awaitingApproval})),o=(0,m.useState)(!0),i=(0,u.Z)(o,2),r=i[0],c=i[1];(0,m.useEffect)((function(){a((0,p.uh)(["local","need_approval"])).then((function(){return c(!1)})).catch((function(){}))}),[]);var l=r&&0===t.count();return(0,n.Z)(v.Z,{isLoading:r,showLoading:l,scrollKey:"awaiting-approval",emptyMessage:e.formatMessage(_.emptyMessage),className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800"},void 0,t.map((function(e){return(0,n.Z)("div",{className:"py-4 px-5"},e,(0,n.Z)(b,{accountId:e}))})))},x=(t(4),t(7),t(2074)),w=t(35),y=t(98),C=t(227),k=t.n(C),U=t(813),N=t(87),L=t(2073),I=t(142),T=function(e){var a=e.count,t=e.label,s=e.to,i=void 0===s?"#":s,d=e.percent,c=void 0!==d&&d;return(0,I.hj)(a)?(0,n.Z)(L.rU,{className:"flex cursor-pointer flex-col items-center space-y-2 rounded bg-gray-200 p-4 transition-transform hover:-translate-y-1 dark:bg-gray-800",to:i},void 0,(0,n.Z)(r.xv,{align:"center",size:"2xl",weight:"medium"},void 0,(0,n.Z)(o.BK,{value:a,style:c?"unit":void 0,unit:c?"percent":void 0})),(0,n.Z)(r.xv,{align:"center"},void 0,t)):null},q=function(e){var a=e.children;return(0,n.Z)("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"},void 0,a)},A=function(e){var a=e.onChange,t=e.children,o=m.Children.map(t,(function(e){return m.cloneElement(e,{onChange:a})}));return(0,n.Z)(y.Z,{},void 0,o)},S=function(e){var a=e.label,t=e.hint,o=e.checked,s=void 0!==o&&o,i=e.onChange,r=e.value;return(0,n.Z)(y.H,{label:a,hint:t},void 0,(0,n.Z)("input",{type:"radio",checked:s,onChange:i,value:r,className:"h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"}))},H=(0,o.vU)({saved:{id:"admin.dashboard.settings_saved",defaultMessage:"Settings saved!"}}),R=function(){var e,a=(0,s.Z)(),t=(0,d.TL)(),o=(e=(0,d.fz)()).approval_required&&e.registrations?"approval":e.registrations?"open":"closed";return(0,n.Z)(A,{onChange:function(e){var n=function(e){return[{group:":pleroma",key:":instance",value:{open:[{tuple:[":registrations_open",!0]},{tuple:[":account_approval_required",!1]}],approval:[{tuple:[":registrations_open",!0]},{tuple:[":account_approval_required",!0]}],closed:[{tuple:[":registrations_open",!1]}]}[e]}]}(e.target.value);t((0,p.rF)(n)).then((function(){Z.Z.success(a.formatMessage(H.saved))})).catch((function(){}))}},void 0,(0,n.Z)(S,{label:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.open_label",defaultMessage:"Open"}),hint:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.open_hint",defaultMessage:"Anyone can join."}),checked:"open"===o,value:"open"}),(0,n.Z)(S,{label:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.approval_label",defaultMessage:"Approval Required"}),hint:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.approval_hint",defaultMessage:"Users can sign up, but their account only gets activated when an admin approves it."}),checked:"approval"===o,value:"approval"}),(0,n.Z)(S,{label:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.closed_label",defaultMessage:"Closed"}),hint:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode.closed_hint",defaultMessage:"Nobody can sign up. You can still invite people."}),checked:"closed"===o,value:"closed"}))},D=function(){var e=(0,d.TL)(),a=(0,i.k6)(),o=(0,d.fz)(),s=(0,d.hz)(),c=(0,d.Tr)(),l=(0,N.wy)(o.version),u=o.stats.get("user_count"),p=o.stats.get("status_count"),v=o.stats.get("domain_count"),g=o.pleroma.getIn(["stats","mau"]),f=u&&g?Math.round(g/u*100):void 0;return c?(0,n.Z)(r.Kq,{space:6,className:"mt-4"},void 0,(0,n.Z)(q,{},void 0,(0,n.Z)(T,{count:g,label:(0,n.Z)(x.Z,{id:"admin.dashcounters.mau_label",defaultMessage:"monthly active users"})}),(0,n.Z)(T,{to:"/soapbox/admin/users",count:u,label:(0,n.Z)(x.Z,{id:"admin.dashcounters.user_count_label",defaultMessage:"total users"})}),(0,n.Z)(T,{count:f,label:(0,n.Z)(x.Z,{id:"admin.dashcounters.retention_label",defaultMessage:"user retention"}),percent:!0}),(0,n.Z)(T,{to:"/timeline/local",count:p,label:(0,n.Z)(x.Z,{id:"admin.dashcounters.status_count_label",defaultMessage:"posts"})}),(0,n.Z)(T,{count:v,label:(0,n.Z)(x.Z,{id:"admin.dashcounters.domain_count_label",defaultMessage:"peers"})})),(0,n.Z)(y.Z,{},void 0,c.admin&&(0,n.Z)(y.H,{onClick:function(){return a.push("/soapbox/config")},label:(0,n.Z)(x.Z,{id:"navigation_bar.soapbox_config",defaultMessage:"Soapbox config"})}),(0,n.Z)(y.H,{onClick:function(){return a.push("/soapbox/admin/log")},label:(0,n.Z)(x.Z,{id:"column.admin.moderation_log",defaultMessage:"Moderation Log"})}),s.announcements&&(0,n.Z)(y.H,{onClick:function(){return a.push("/soapbox/admin/announcements")},label:(0,n.Z)(x.Z,{id:"column.admin.announcements",defaultMessage:"Announcements"})})),c.admin&&m.createElement(m.Fragment,null,(0,n.Z)(r.ll,{title:(0,n.Z)(x.Z,{id:"admin.dashboard.registration_mode_label",defaultMessage:"Registrations"})}),(0,n.Z)(R,{})),(0,n.Z)(r.ll,{title:(0,n.Z)(x.Z,{id:"admin.dashwidgets.software_header",defaultMessage:"Software"})}),(0,n.Z)(y.Z,{},void 0,(0,n.Z)(y.H,{label:(0,n.Z)(x.Z,{id:"admin.software.frontend",defaultMessage:"Frontend"})},void 0,(0,n.Z)("a",{href:k().ref?"".concat(k().url,"/tree/").concat(k().ref):k().url,className:"flex items-center space-x-1 truncate",target:"_blank"},void 0,(0,n.Z)("span",{},void 0,k().displayName," ",k().version),(0,n.Z)(r.JO,{className:"h-4 w-4",src:t(209)}))),(0,n.Z)(y.H,{label:(0,n.Z)(x.Z,{id:"admin.software.backend",defaultMessage:"Backend"})},void 0,(0,n.Z)("span",{},void 0,l.software+(l.build?"+".concat(l.build):"")," ",l.version))),s.emailList&&c.admin&&m.createElement(m.Fragment,null,(0,n.Z)(r.ll,{title:(0,n.Z)(x.Z,{id:"admin.dashwidgets.email_list_header",defaultMessage:"Email list"})}),(0,n.Z)(y.Z,{},void 0,(0,n.Z)(y.H,{label:"subscribers.csv"},void 0,(0,n.Z)(r.hU,{src:t(609),onClick:function(a){e((function(e,a){return(0,w.ZP)(a).get("/api/v1/pleroma/admin/email_list/subscribers.csv")})).then((function(e){var a=e.data;(0,U.L)(a,"subscribers.csv")})).catch((function(){})),a.preventDefault()},iconClassName:"h-5 w-5"})),(0,n.Z)(y.H,{label:"unsubscribers.csv"},void 0,(0,n.Z)(r.hU,{src:t(609),onClick:function(a){e((function(e,a){return(0,w.ZP)(a).get("/api/v1/pleroma/admin/email_list/unsubscribers.csv")})).then((function(e){var a=e.data;(0,U.L)(a,"unsubscribers.csv")})).catch((function(){})),a.preventDefault()},iconClassName:"h-5 w-5"})),(0,n.Z)(y.H,{label:"combined.csv"},void 0,(0,n.Z)(r.hU,{src:t(609),onClick:function(a){e((function(e,a){return(0,w.ZP)(a).get("/api/v1/pleroma/admin/email_list/combined.csv")})).then((function(e){var a=e.data;(0,U.L)(a,"combined.csv")})).catch((function(){})),a.preventDefault()},iconClassName:"h-5 w-5"}))))):null},E=t(325),G=t(592),K=t(327),j=t(595),z=(0,o.vU)({viewStatus:{id:"admin.reports.actions.view_status",defaultMessage:"View post"},deleteStatus:{id:"admin.statuses.actions.delete_status",defaultMessage:"Delete post"}}),F=function(e){var a,o=e.status,i=(0,s.Z)(),c=(0,d.TL)(),l=(a=o.getIn(["account","acct"]),[{text:i.formatMessage(z.viewStatus,{acct:"@".concat(a)}),to:"/@".concat(a,"/posts/").concat(o.id),icon:t(499)},{text:i.formatMessage(z.deleteStatus,{acct:"@".concat(a)}),action:function(){c((0,g.Uj)(i,o.id))},icon:t(97),destructive:!0}]);return(0,n.Z)(r.Ug,{space:2,alignItems:"start"},void 0,(0,n.Z)(r.Kq,{space:2,className:"overflow-hidden",grow:!0},void 0,(0,n.Z)(K.Z,{status:o}),(0,n.Z)(j.Z,{status:o})),(0,n.Z)("div",{className:"flex-none"},void 0,(0,n.Z)(E.Z,{items:l,src:t(656)})))},P=(0,o.vU)({reportClosed:{id:"admin.reports.report_closed_message",defaultMessage:"Report on @{name} was closed"},deactivateUser:{id:"admin.users.actions.deactivate_user",defaultMessage:"Deactivate @{name}"},deleteUser:{id:"admin.users.actions.delete_user",defaultMessage:"Delete @{name}"}}),W=function(e){var a=e.id,o=(0,s.Z)(),i=(0,d.TL)(),c=(0,m.useCallback)((0,f.Fg)(),[]),l=(0,d.CG)((function(e){return c(e,a)})),v=(0,m.useState)(!1),h=(0,u.Z)(v,2),b=h[0],_=h[1];if(!l)return null;var M=l.account,w=l.target_account,y=function(){i((0,p.DI)([l.id])).then((function(){var e=o.formatMessage(P.reportClosed,{name:w.username});Z.Z.success(e)})).catch((function(){}))},C=[{text:o.formatMessage(P.deactivateUser,{name:w.username}),action:function(){var e=w.id;i((0,g.yM)(o,e,(function(){return y()})))},icon:t(1509)},{text:o.formatMessage(P.deleteUser,{name:w.username}),action:function(){var e=w.id;i((0,g.rx)(o,e,(function(){return y()})))},icon:t(97),destructive:!0}],k=l.statuses,U=k.count(),N=w.acct,I=M.acct;return(0,n.Z)(r.Ug,{space:3,className:"p-3"},l.id,(0,n.Z)(G.ZP,{accountId:w.id,inline:!0},void 0,(0,n.Z)(L.rU,{to:"/@".concat(N),title:N},void 0,(0,n.Z)(r.qE,{src:w.avatar,size:32,className:"overflow-hidden"}))),(0,n.Z)(r.Kq,{space:3,className:"overflow-hidden",grow:!0},void 0,(0,n.Z)(r.xv,{tag:"h4",weight:"bold"},void 0,(0,n.Z)(x.Z,{id:"admin.reports.report_title",defaultMessage:"Report on {acct}",values:{acct:(0,n.Z)(G.ZP,{accountId:w.id,inline:!0},void 0,(0,n.Z)(L.rU,{to:"/@".concat(N),title:N},void 0,"@",N))}})),U>0&&(0,n.Z)(r.UQ,{headline:"Reported posts (".concat(U,")"),expanded:b,onToggle:function(e){_(e)}},void 0,(0,n.Z)(r.Kq,{space:4},void 0,k.map((function(e){return(0,n.Z)(F,{report:l,status:e},e.id)})))),(0,n.Z)(r.Kq,{},void 0,(l.comment||"").length>0&&(0,n.Z)(r.xv,{tag:"blockquote",dangerouslySetInnerHTML:{__html:l.comment}}),(0,n.Z)(r.Ug,{space:1},void 0,(0,n.Z)(r.xv,{theme:"muted",tag:"span"},void 0,"—"),(0,n.Z)(G.ZP,{accountId:M.id,inline:!0},void 0,(0,n.Z)(L.rU,{to:"/@".concat(I),title:I,className:"text-primary-600 hover:underline dark:text-accent-blue"},void 0,"@",I))))),(0,n.Z)(r.Ug,{space:2,alignItems:"start",className:"flex-none"},void 0,(0,n.Z)(r.zx,{onClick:y},void 0,(0,n.Z)(x.Z,{id:"admin.reports.actions.close",defaultMessage:"Close"})),(0,n.Z)(E.Z,{items:C,src:t(656)})))},B=(0,o.vU)({heading:{id:"column.admin.reports",defaultMessage:"Reports"},modlog:{id:"column.admin.reports.menu.moderation_log",defaultMessage:"Moderation Log"},emptyMessage:{id:"admin.reports.empty_message",defaultMessage:"There are no open reports. If a user gets reported, they will show up here."}}),O=function(){var e=(0,s.Z)(),a=(0,d.TL)(),t=(0,m.useState)(!0),o=(0,u.Z)(t,2),i=o[0],r=o[1],c=(0,d.CG)((function(e){return e.admin.openReports.toList()}));(0,m.useEffect)((function(){a((0,p.RC)()).then((function(){return r(!1)})).catch((function(){}))}),[]);var l=i&&0===c.count();return(0,n.Z)(v.Z,{isLoading:i,showLoading:l,scrollKey:"admin-reports",emptyMessage:e.formatMessage(B.emptyMessage),className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800"},void 0,c.map((function(e){return e&&(0,n.Z)(W,{id:e},e)})))},Q=(0,o.vU)({heading:{id:"column.admin.dashboard",defaultMessage:"Dashboard"}}),Y=function(){var e=(0,s.Z)();return(0,d.Tr)()?(0,n.Z)(r.sg,{label:e.formatMessage(Q.heading),withHeader:!1},void 0,(0,n.Z)(l,{}),(0,n.Z)(i.rs,{},void 0,(0,n.Z)(i.AW,{path:"/soapbox/admin",exact:!0,component:D}),(0,n.Z)(i.AW,{path:"/soapbox/admin/reports",exact:!0,component:O}),(0,n.Z)(i.AW,{path:"/soapbox/admin/approval",exact:!0,component:M}))):null}},1509:function(e,a,t){e.exports=t.p+"packs/icons/hourglass-empty-1fc2d2b9.svg"}}]);
//# sourceMappingURL=admin-8d94018791d8c9e9d932.chunk.js.map