(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[50],{1300:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=(t(28),t(5),t(1)),a=t(2064),s=t(2065),i=t(2083),u=t(143),c=t(132),d=t(57),m=t(2),l=t(3),g=t(38),p=t(36),f=t(683),Z=(0,a.vU)({heading:{id:"column.group_blocked_members",defaultMessage:"Blocked members"},unblock:{id:"group.group_mod_unblock",defaultMessage:"Unblock"},unblocked:{id:"group.group_mod_unblock.success",defaultMessage:"Unblocked @{name} from group"}}),h=function(e){var o=e.accountId,t=e.groupId,a=(0,s.Z)(),i=(0,l.TL)(),d=(0,n.useCallback)((0,g.Tm)(),[]),f=(0,l.CG)((function(e){return d(e,o)}));return f?(0,r.Z)(m.Ug,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,(0,r.Z)("div",{className:"w-full"},void 0,(0,r.Z)(c.Z,{account:f,withRelationship:!1})),(0,r.Z)(m.zx,{theme:"danger",size:"sm",text:a.formatMessage(Z.unblock),onClick:function(){return i((0,u.mN)(t,o)).then((function(){p.Z.success(a.formatMessage(Z.unblocked,{name:f.acct}))}))}})):null};o.default=function(e){var o=e.params,t=(0,s.Z)(),a=(0,l.TL)(),c=(null==o?void 0:o.id)||"",p=(0,n.useCallback)((0,g.e6)(),[]),M=(0,l.CG)((function(e){return p(e,c)})),v=(0,l.CG)((function(e){var o;return null===(o=e.user_lists.group_blocks.get(c))||void 0===o?void 0:o.items}));if((0,n.useEffect)((function(){M||a((0,u.yi)(c)),a((0,u.R5)(c))}),[c]),!M||!M.relationship||!v)return(0,r.Z)(m.sg,{label:t.formatMessage(Z.heading)},void 0,(0,r.Z)(m.$j,{}));if(!M.relationship.role||!["admin","moderator"].includes(M.relationship.role))return(0,r.Z)(f.Z,{});var _=(0,r.Z)(i.Z,{id:"empty_column.group_blocks",defaultMessage:"The group hasn't blocked any users yet."});return(0,r.Z)(m.sg,{label:t.formatMessage(Z.heading),backHref:"/groups/".concat(c,"/manage")},void 0,(0,r.Z)(d.Z,{scrollKey:"group_blocks",emptyMessage:_},void 0,v.map((function(e){return(0,r.Z)(h,{accountId:e,groupId:c},e)}))))}},1297:function(e,o,t){"use strict";t.r(o);var r=t(2081),n=t(2063),a=(t(28),t(4),t(5),t(7),t(77)),s=t.n(a),i=t(1),u=t(2064),c=t(2065),d=t(2082),m=t(143),l=t(2074),g=t(132),p=t(57),f=t(2),Z=t(202),h=t(3),M=t(38),v=t(36),_=t(1016),b=(0,u.vU)({adminSubheading:{id:"group.admin_subheading",defaultMessage:"Group administrators"},moderatorSubheading:{id:"group.moderator_subheading",defaultMessage:"Group moderators"},userSubheading:{id:"group.user_subheading",defaultMessage:"Users"},groupModKick:{id:"group.group_mod_kick",defaultMessage:"Kick @{name} from group"},groupModBlock:{id:"group.group_mod_block",defaultMessage:"Block @{name} from group"},groupModPromoteAdmin:{id:"group.group_mod_promote_admin",defaultMessage:"Promote @{name} to group administrator"},groupModPromoteMod:{id:"group.group_mod_promote_mod",defaultMessage:"Promote @{name} to group moderator"},groupModDemote:{id:"group.group_mod_demote",defaultMessage:"Demote @{name}"},kickFromGroupMessage:{id:"confirmations.kick_from_group.message",defaultMessage:"Are you sure you want to kick @{name} from this group?"},kickConfirm:{id:"confirmations.kick_from_group.confirm",defaultMessage:"Kick"},blockFromGroupMessage:{id:"confirmations.block_from_group.message",defaultMessage:"Are you sure you want to block @{name} from interacting with this group?"},blockConfirm:{id:"confirmations.block_from_group.confirm",defaultMessage:"Block"},promoteConfirmMessage:{id:"confirmations.promote_in_group.message",defaultMessage:"Are you sure you want to promote @{name}? You will not be able to demote them."},promoteConfirm:{id:"confirmations.promote_in_group.confirm",defaultMessage:"Promote"},kicked:{id:"group.group_mod_kick.success",defaultMessage:"Kicked @{name} from group"},blocked:{id:"group.group_mod_block.success",defaultMessage:"Blocked @{name} from group"},promotedToAdmin:{id:"group.group_mod_promote_admin.success",defaultMessage:"Promoted @{name} to group administrator"},promotedToMod:{id:"group.group_mod_promote_mod.success",defaultMessage:"Promoted @{name} to group moderator"},demotedToUser:{id:"group.group_mod_demote.success",defaultMessage:"Demoted @{name} to group user"}}),k=function(e){var o=e.accountId,a=e.accountRole,s=e.groupId,u=e.relationship,p=(0,c.Z)(),_=(0,h.TL)(),k=(0,i.useCallback)((0,M.Tm)(),[]),C=(0,h.CG)((function(e){return k(e,o)}));if(!C)return null;var y=function(){_((0,l.h7)("CONFIRM",{message:p.formatMessage(b.kickFromGroupMessage,{name:C.username}),confirm:p.formatMessage(b.kickConfirm),onConfirm:function(){return _((0,m.od)(s,C.id)).then((function(){return v.Z.success(p.formatMessage(b.kicked,{name:C.acct}))}))}}))},w=function(){_((0,l.h7)("CONFIRM",{message:p.formatMessage(b.blockFromGroupMessage,{name:C.username}),confirm:p.formatMessage(b.blockConfirm),onConfirm:function(){return _((0,m.RM)(s,C.id)).then((function(){return v.Z.success(p.formatMessage(b.blocked,{name:C.acct}))}))}}))},x=function(e,o){return o?_((0,l.h7)("CONFIRM",{message:p.formatMessage(b.promoteConfirmMessage,{name:C.username}),confirm:p.formatMessage(b.promoteConfirm),onConfirm:function(){return _((0,m.YK)(s,C.id,e)).then((function(){return v.Z.success(p.formatMessage("admin"===e?b.promotedToAdmin:b.promotedToMod,{name:C.acct}))}))}})):_((0,m.YK)(s,C.id,e)).then((function(){return v.Z.success(p.formatMessage("admin"===e?b.promotedToAdmin:b.promotedToMod,{name:C.acct}))}))},G=function(){x("admin",!0)},N=function(){x("moderator","moderator"===u.role)},I=function(){_((0,m.Cv)(s,C.id,"user")).then((function(){return v.Z.success(p.formatMessage(b.demotedToUser,{name:C.acct}))})).catch((function(){}))},T=function(){var e=[];if(!u||!u.role)return e;if(["admin","moderator"].includes(u.role)&&["moderator","user"].includes(a)&&a!==u.role&&(e.push({text:p.formatMessage(b.groupModKick,{name:C.username}),icon:t(851),action:y}),e.push({text:p.formatMessage(b.groupModBlock,{name:C.username}),icon:t(104),action:w})),"admin"===u.role&&"admin"!==a&&C.acct===C.username)switch(e.push(null),a){case"moderator":e.push({text:p.formatMessage(b.groupModPromoteAdmin,{name:C.username}),icon:t(1499),action:G}),e.push({text:p.formatMessage(b.groupModDemote,{name:C.username}),icon:t(2037),action:I});break;case"user":e.push({text:p.formatMessage(b.groupModPromoteMod,{name:C.username}),icon:t(1499),action:N})}return e}();return(0,n.Z)(f.Ug,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,(0,n.Z)("div",{className:"w-full"},void 0,(0,n.Z)(g.Z,{account:C,withRelationship:!1})),T.length>0&&(0,n.Z)(f.v2,{},void 0,(0,n.Z)(f.j2,{as:f.hU,src:t(196),theme:"outlined",className:"px-2",iconClassName:"h-4 w-4",children:null}),(0,n.Z)(f.qy,{className:"w-56"},void 0,T.map((function(e,o){if(void 0===(null==e?void 0:e.text))return(0,n.Z)(f.R,{},o);var t=e.action?f.sN:f.Uk,a=e.action?{onSelect:e.action}:{to:e.to,as:d.rU,target:e.target||"_self"};return i.createElement(t,(0,r.Z)({key:o},a,{className:"group"}),(0,n.Z)(f.Ug,{space:3,alignItems:"center"},void 0,e.icon&&(0,n.Z)(Z.Z,{src:e.icon,className:"h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"}),(0,n.Z)("div",{className:"truncate"},void 0,e.text)))})))))};o.default=function(e){var o=(0,c.Z)(),t=(0,h.TL)(),r=e.params.id,a=(0,h.CG)((function(e){return e.group_relationships.get(r)})),u=(0,h.CG)((function(e){return e.group_memberships.admin.get(r)})),d=(0,h.CG)((function(e){return e.group_memberships.moderator.get(r)})),l=(0,h.CG)((function(e){return e.group_memberships.user.get(r)})),g=function(e){t((0,m.A4)(r,e))},Z=(0,i.useCallback)(s()((function(){g("admin")}),300,{leading:!0}),[]),M=(0,i.useCallback)(s()((function(){g("moderator")}),300,{leading:!0}),[]),v=(0,i.useCallback)(s()((function(){g("user")}),300,{leading:!0}),[]),C=function(e,t,s){var u,c;if(null!=e&&e.isLoading||null!=e&&e.items.count())return(0,n.Z)(i.Fragment,{},t,(0,n.Z)(f.Ol,{className:"mt-4"},void 0,(0,n.Z)(f.ll,{title:o.formatMessage(b["".concat(t,"Subheading")])})),(0,n.Z)(p.Z,{scrollKey:"group_".concat(t,"s-").concat(r),hasMore:!(null==e||!e.next),onLoadMore:s,isLoading:null==e?void 0:e.isLoading,showLoading:(null==e?void 0:e.isLoading)&&!(null!=e&&null!==(u=e.items)&&void 0!==u&&u.count()),placeholderComponent:_.Z,placeholderCount:3,itemClassName:"pb-4 last:pb-0"},void 0,null==e||null===(c=e.items)||void 0===c?void 0:c.map((function(e){return(0,n.Z)(k,{accountId:e,accountRole:t,groupId:r,relationship:a},e)}))))};return(0,i.useEffect)((function(){t((0,m.yi)(r)),t((0,m.W$)(r,"admin")),t((0,m.W$)(r,"moderator")),t((0,m.W$)(r,"user"))}),[r]),i.createElement(i.Fragment,null,C(u,"admin",Z),C(d,"moderator",M),C(l,"user",v))}},1301:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=(t(28),t(5),t(1)),a=t(2064),s=t(2065),i=t(2083),u=t(143),c=t(132),d=t(57),m=t(2),l=t(3),g=t(38),p=t(36),f=t(683),Z=(0,a.vU)({heading:{id:"column.group_pending_requests",defaultMessage:"Pending requests"},authorize:{id:"group.group_mod_authorize",defaultMessage:"Accept"},authorized:{id:"group.group_mod_authorize.success",defaultMessage:"Accepted @{name} to group"},reject:{id:"group.group_mod_reject",defaultMessage:"Reject"},rejected:{id:"group.group_mod_reject.success",defaultMessage:"Rejected @{name} from group"}}),h=function(e){var o=e.accountId,t=e.groupId,a=(0,s.Z)(),i=(0,l.TL)(),d=(0,n.useCallback)((0,g.Tm)(),[]),f=(0,l.CG)((function(e){return d(e,o)}));return f?(0,r.Z)(m.Ug,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,(0,r.Z)("div",{className:"w-full"},void 0,(0,r.Z)(c.Z,{account:f,withRelationship:!1})),(0,r.Z)(m.Ug,{space:2},void 0,(0,r.Z)(m.zx,{theme:"secondary",size:"sm",text:a.formatMessage(Z.authorize),onClick:function(){return i((0,u.zf)(t,o)).then((function(){p.Z.success(a.formatMessage(Z.authorized,{name:f.acct}))}))}}),(0,r.Z)(m.zx,{theme:"danger",size:"sm",text:a.formatMessage(Z.reject),onClick:function(){return i((0,u.uP)(t,o)).then((function(){p.Z.success(a.formatMessage(Z.rejected,{name:f.acct}))}))}}))):null};o.default=function(e){var o=e.params,t=(0,s.Z)(),a=(0,l.TL)(),c=(null==o?void 0:o.id)||"",p=(0,n.useCallback)((0,g.e6)(),[]),M=(0,l.CG)((function(e){return p(e,c)})),v=(0,l.CG)((function(e){var o;return null===(o=e.user_lists.membership_requests.get(c))||void 0===o?void 0:o.items}));if((0,n.useEffect)((function(){M||a((0,u.yi)(c)),a((0,u.cr)(c))}),[c]),!M||!M.relationship||!v)return(0,r.Z)(m.sg,{label:t.formatMessage(Z.heading)},void 0,(0,r.Z)(m.$j,{}));if(!M.relationship.role||!["admin","moderator"].includes(M.relationship.role))return(0,r.Z)(f.Z,{});var _=(0,r.Z)(i.Z,{id:"empty_column.group_membership_requests",defaultMessage:"There are no pending membership requests for this group."});return(0,r.Z)(m.sg,{label:t.formatMessage(Z.heading),backHref:"/groups/".concat(c,"/manage")},void 0,(0,r.Z)(d.Z,{scrollKey:"group_membership_requests",emptyMessage:_},void 0,v.map((function(e){return(0,r.Z)(h,{accountId:e,groupId:c},e)}))))}},1298:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=t(1),a=t(2083),s=t(2082),i=t(67),u=t(144),c=t(78),d=t(2),m=t(519),l=t(3),g=t(240);o.default=function(e){var o=(0,l.Tr)(),t=(0,l.TL)(),p=e.params.id,f=(0,l.CG)((function(e){return e.group_relationships.get(p)}));return(0,n.useEffect)((function(){t((0,c.F0)(p)),t((0,i.mx)("group:".concat(p),p));var e=t((0,u.iZ)(p));return function(){e()}}),[p]),(0,r.Z)(d.Kq,{space:2},void 0,!!o&&(null==f?void 0:f.member)&&(0,r.Z)("div",{className:"border-b border-solid border-gray-200 px-2 py-4 dark:border-gray-800"},void 0,(0,r.Z)(d.Ug,{alignItems:"start",space:4},void 0,(0,r.Z)(s.rU,{to:"/@".concat(o.acct)},void 0,(0,r.Z)(d.qE,{src:o.avatar,size:46})),(0,r.Z)(m.Z,{id:"group:".concat(p),shouldCondense:!0,autoFocus:!1,group:p}))),(0,r.Z)(g.Z,{scrollKey:"group_timeline",timelineId:"group:".concat(p),onLoadMore:function(e){t((0,c.F0)(p,{maxId:e}))},emptyMessage:(0,r.Z)(a.Z,{id:"empty_column.group",defaultMessage:"There are no posts in this group yet."}),divideType:"border",showGroup:!1}))}},1299:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=(t(28),t(4),t(1)),a=t(2064),s=t(2065),i=t(2056),u=t(143),c=t(2074),d=t(98),m=t(2),l=t(3),g=t(38),p=t(683),f=(0,a.vU)({heading:{id:"column.manage_group",defaultMessage:"Manage group"},editGroup:{id:"manage_group.edit_group",defaultMessage:"Edit group"},pendingRequests:{id:"manage_group.pending_requests",defaultMessage:"Pending requests"},blockedMembers:{id:"manage_group.blocked_members",defaultMessage:"Blocked members"},deleteGroup:{id:"manage_group.delete_group",defaultMessage:"Delete group"},deleteConfirm:{id:"confirmations.delete_group.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete_group.heading",defaultMessage:"Delete group"},deleteMessage:{id:"confirmations.delete_group.message",defaultMessage:"Are you sure you want to delete this group? This is a permanent action that cannot be undone."}});o.default=function(e){var o=e.params,a=(0,i.k6)(),Z=(0,s.Z)(),h=(0,l.TL)(),M=(null==o?void 0:o.id)||"",v=(0,n.useCallback)((0,g.e6)(),[]),_=(0,l.CG)((function(e){return v(e,M)}));return(0,n.useEffect)((function(){_||h((0,u.yi)(M))}),[M]),_&&_.relationship?_.relationship.role&&["admin","moderator"].includes(_.relationship.role)?(0,r.Z)(m.sg,{label:Z.formatMessage(f.heading),backHref:"/groups/".concat(M)},void 0,(0,r.Z)(m.eW,{className:"space-y-4"},void 0,"admin"===_.relationship.role&&(0,r.Z)(d.Z,{},void 0,(0,r.Z)(d.H,{label:Z.formatMessage(f.editGroup),onClick:function(){return h((0,u.Tv)(_))}},void 0,(0,r.Z)("span",{dangerouslySetInnerHTML:{__html:_.display_name_html}}))),(0,r.Z)(d.Z,{},void 0,(0,r.Z)(d.H,{label:Z.formatMessage(f.pendingRequests),onClick:function(){return a.push("/groups/".concat(M,"/manage/requests"))}}),(0,r.Z)(d.H,{label:Z.formatMessage(f.blockedMembers),onClick:function(){return a.push("/groups/".concat(M,"/manage/blocks"))}})),"admin"===_.relationship.role&&(0,r.Z)(d.Z,{},void 0,(0,r.Z)(d.H,{label:Z.formatMessage(f.deleteGroup),onClick:function(){return h((0,c.h7)("CONFIRM",{icon:t(97),heading:Z.formatMessage(f.deleteHeading),message:Z.formatMessage(f.deleteMessage),confirm:Z.formatMessage(f.deleteConfirm),onConfirm:function(){return h((0,u.iE)(M))}}))}})))):(0,r.Z)(p.Z,{}):(0,r.Z)(m.sg,{label:Z.formatMessage(f.heading)},void 0,(0,r.Z)(m.$j,{}))}},1296:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=(t(5),t(2083)),a=t(2082),s=t(2074),i=t(1015),u=t(57),c=t(2),d=t(3),m=t(639),l=t(2121),g=t(1017),p=t(1084),f=function(){return(0,r.Z)(c.Kq,{space:6,alignItems:"center",justifyContent:"center",className:"h-full p-6"},void 0,(0,r.Z)(c.Kq,{space:2,className:"max-w-sm"},void 0,(0,r.Z)(c.xv,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,(0,r.Z)(n.Z,{id:"groups.empty.title",defaultMessage:"No Groups yet"})),(0,r.Z)(c.xv,{size:"sm",theme:"muted",align:"center"},void 0,(0,r.Z)(n.Z,{id:"groups.empty.subtitle",defaultMessage:"Start discovering groups to join or create your own."}))))};o.default=function(){var e=(0,d.TL)(),o=(0,d.hz)(),Z=(0,d.CG)((function(e){return(0,l.Fs)(e,l.RZ)})),h=(0,m.XY)(),M=h.groups,v=h.isLoading;return(0,r.Z)(c.Kq,{space:4},void 0,Z&&(0,r.Z)(c.zx,{className:"sm:w-fit sm:self-end xl:hidden",icon:t(676),onClick:function(){e((0,s.h7)("MANAGE_GROUP"))},theme:"secondary",block:!0},void 0,(0,r.Z)(n.Z,{id:"new_group_panel.action",defaultMessage:"Create Group"})),o.groupsDiscovery&&(0,r.Z)(p.Z,{activeTab:p.l.MY_GROUPS}),(0,r.Z)(u.Z,{scrollKey:"groups",emptyMessage:(0,r.Z)(f,{}),itemClassName:"py-3 first:pt-0 last:pb-0",isLoading:v,showLoading:v&&0===M.length,placeholderComponent:g.Z,placeholderCount:3},void 0,M.map((function(e){return(0,r.Z)(a.rU,{to:"/groups/".concat(e.id)},e.id,(0,r.Z)(i.Z,{group:e}))}))))}},1303:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=t(2053),a=(t(90),t(15),t(5),t(7),t(935)),s=t(1),i=t(2083),u=t(2074),c=t(78),d=t(2),m=t(3),l=t(38),g=t(918);o.default=function(e){var o,t=e.group,p=(0,m.TL)(),f=(0,s.useState)(!0),Z=(0,n.Z)(f,2),h=Z[0],M=Z[1],v=(0,m.CG)((function(e){return t?(0,l.yE)(e,null==t?void 0:t.id):(0,a.List)()})),_=function(e){if("video"===e.type)p((0,u.h7)("VIDEO",{media:e,status:e.status}));else{var o=e.getIn(["status","media_attachments"]),t=o.findIndex((function(o){return o.id===e.id}));p((0,u.h7)("MEDIA",{media:o,index:t,status:e.status,account:e.account}))}};return(0,s.useEffect)((function(){M(!0),t&&p((0,c.gY)(t.id)).then((function(){return M(!1)})).catch((function(){}))}),[null==t?void 0:t.id]),(0,r.Z)(d.$L,{title:(0,r.Z)(i.Z,{id:"media_panel.title",defaultMessage:"Media"})},void 0,t&&(0,r.Z)("div",{className:"w-full"},void 0,h?(0,r.Z)(d.$j,{}):(o=v.slice(0,9)).isEmpty()?(0,r.Z)(d.xv,{size:"sm",theme:"muted"},void 0,(0,r.Z)(i.Z,{id:"media_panel.empty_message",defaultMessage:"No media found."})):(0,r.Z)("div",{className:"grid grid-cols-3 gap-1"},void 0,o.map((function(e,o){return(0,r.Z)(g.Z,{attachment:e,onOpenMedia:_},"".concat(e.getIn(["status","id"]),"+").concat(e.id))})))))}},1302:function(e,o,t){"use strict";t.r(o);var r=t(2063),n=t(2083),a=t(2074),s=t(2),i=t(3),u=t(2121);o.default=function(){var e=(0,i.TL)();return(0,i.CG)((function(e){return(0,u.Fs)(e,u.RZ)}))?(0,r.Z)(s.Kq,{space:2},void 0,(0,r.Z)(s.Kq,{},void 0,(0,r.Z)(s.xv,{size:"lg",weight:"bold"},void 0,(0,r.Z)(n.Z,{id:"new_group_panel.title",defaultMessage:"Create Group"})),(0,r.Z)(s.xv,{theme:"muted",size:"sm"},void 0,(0,r.Z)(n.Z,{id:"new_group_panel.subtitle",defaultMessage:"Can't find what you're looking for? Start your own private or public group."}))),(0,r.Z)(s.zx,{onClick:function(){e((0,a.h7)("MANAGE_GROUP"))},theme:"secondary",block:!0},void 0,(0,r.Z)(n.Z,{id:"new_group_panel.action",defaultMessage:"Create Group"}))):null}},2121:function(e,o,t){"use strict";t.d(o,{Fs:function(){return n},RZ:function(){return r}});var r=1048576,n=function(e,o){var t=e.accounts_meta.get(e.me);if(null==t||!t.role)return!1;var r=t.getIn(["role","permissions"]);return!o||(r&o)===o}},2037:function(e,o,t){"use strict";e.exports=t.p+"packs/icons/arrow-down-circle-679a2be5.svg"},1499:function(e,o,t){"use strict";e.exports=t.p+"packs/icons/arrow-up-circle-a6e57430.svg"},516:function(){}}]);
//# sourceMappingURL=groups-7155d99847841d036197.chunk.js.map