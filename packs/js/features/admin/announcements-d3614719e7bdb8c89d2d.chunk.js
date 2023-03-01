"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[7],{1518:function(e,n,a){a.r(n);var t=a(2057),i=(a(5),a(1)),d=a(2058),o=a(2059),s=a(2077),m=a(87),r=a(2073),l=a(57),u=a(2),c=a(3),f=(0,d.vU)({heading:{id:"column.admin.announcements",defaultMessage:"Announcements"},deleteConfirm:{id:"confirmations.admin.delete_announcement.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.admin.delete_announcement.heading",defaultMessage:"Delete announcement"},deleteMessage:{id:"confirmations.admin.delete_announcement.message",defaultMessage:"Are you sure you want to delete the announcement?"}}),g=function(e){var n,a=e.announcement,i=(0,o.Z)(),l=(0,c.TL)();return(0,t.Z)("div",{className:"rounded-lg bg-gray-100 p-4 dark:bg-primary-800"},a.id,(0,t.Z)(u.Kq,{space:2},void 0,(0,t.Z)(u.xv,{dangerouslySetInnerHTML:{__html:a.contentHtml}}),(a.starts_at||a.ends_at||a.all_day)&&(0,t.Z)(u.Ug,{space:2,wrap:!0},void 0,a.starts_at&&(0,t.Z)(u.xv,{size:"sm"},void 0,(0,t.Z)(u.xv,{tag:"span",size:"sm",weight:"medium"},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.starts_at",defaultMessage:"Starts at:"}))," ",(0,t.Z)(d.Ji,{value:a.starts_at,year:"2-digit",month:"short",day:"2-digit",weekday:"short"})),a.ends_at&&(0,t.Z)(u.xv,{size:"sm"},void 0,(0,t.Z)(u.xv,{tag:"span",size:"sm",weight:"medium"},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.ends_at",defaultMessage:"Ends at:"}))," ",(0,t.Z)(d.Ji,{value:a.ends_at,year:"2-digit",month:"short",day:"2-digit",weekday:"short"})),a.all_day&&(0,t.Z)(u.xv,{weight:"medium",size:"sm"},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.all_day",defaultMessage:"All day"}))),(0,t.Z)(u.Ug,{justifyContent:"end",space:2},void 0,(0,t.Z)(u.zx,{theme:"primary",onClick:function(e){return function(){l((0,m.mB)(e))}}(a)},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.edit",defaultMessage:"Edit"})),(0,t.Z)(u.zx,{theme:"primary",onClick:(n=a.id,function(){l((0,r.h7)("CONFIRM",{heading:i.formatMessage(f.deleteHeading),message:i.formatMessage(f.deleteMessage),confirm:i.formatMessage(f.deleteConfirm),onConfirm:function(){return l((0,m._5)(n))}}))})},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.delete",defaultMessage:"Delete"})))))};n.default=function(){var e=(0,o.Z)(),n=(0,c.TL)(),d=(0,c.CG)((function(e){return e.admin_announcements.items})),r=(0,c.CG)((function(e){return e.admin_announcements.isLoading}));(0,i.useEffect)((function(){n((0,m.Np)())}),[]);var Z=(0,t.Z)(s.Z,{id:"empty_column.admin.announcements",defaultMessage:"There are no announcements yet."});return(0,t.Z)(u.sg,{label:e.formatMessage(f.heading)},void 0,(0,t.Z)(u.Kq,{className:"gap-4"},void 0,(0,t.Z)(u.zx,{className:"sm:w-fit sm:self-end",icon:a(152),onClick:function(){n((0,m.mB)())},theme:"secondary",block:!0},void 0,(0,t.Z)(s.Z,{id:"admin.announcements.action",defaultMessage:"Create announcement"})),(0,t.Z)(l.Z,{scrollKey:"announcements",emptyMessage:Z,itemClassName:"py-3 first:pt-0 last:pb-0",isLoading:r,showLoading:r&&!d.count()},void 0,d.map((function(e){return(0,t.Z)(g,{announcement:e},e.id)})))))}},1519:function(e,n,a){a.r(n);var t=a(2057),i=a(2058),d=a(2059),o=a(2077),s=a(87),m=a(2073),r=a(2),l=a(93),u=a(83),c=a(3),f=(0,i.vU)({save:{id:"admin.edit_announcement.save",defaultMessage:"Save"},announcementContentPlaceholder:{id:"admin.edit_announcement.fields.content_placeholder",defaultMessage:"Announcement content"},announcementStartTimePlaceholder:{id:"admin.edit_announcement.fields.start_time_placeholder",defaultMessage:"Announcement starts on…"},announcementEndTimePlaceholder:{id:"admin.edit_announcement.fields.end_time_placeholder",defaultMessage:"Announcement ends on…"}});n.default=function(e){var n=e.onClose,a=(0,c.TL)(),i=(0,d.Z)(),g=(0,c.CG)((function(e){return e.admin_announcements.form.id})),Z=(0,c.CG)((function(e){return e.admin_announcements.form.content})),h=(0,c.CG)((function(e){return e.admin_announcements.form.starts_at})),_=(0,c.CG)((function(e){return e.admin_announcements.form.ends_at})),v=(0,c.CG)((function(e){return e.admin_announcements.form.all_day})),M=function(e){return a((0,s.yM)(e))},p=function(e){return a((0,s.aX)(e))};return(0,t.Z)(r.u_,{onClose:function(){n("EDIT_ANNOUNCEMENT")},title:g?(0,t.Z)(o.Z,{id:"column.admin.edit_announcement",defaultMessage:"Edit announcement"}):(0,t.Z)(o.Z,{id:"column.admin.create_announcement",defaultMessage:"Create announcement"}),confirmationAction:function(){return a((0,s.A8)()).then((function(){return a((0,m.Mr)("EDIT_ANNOUNCEMENT"))}))},confirmationText:i.formatMessage(f.save)},void 0,(0,t.Z)(r.l0,{},void 0,(0,t.Z)(r.cw,{labelText:(0,t.Z)(o.Z,{id:"admin.edit_announcement.fields.content_label",defaultMessage:"Content"})},void 0,(0,t.Z)(r.gx,{autoComplete:"off",placeholder:i.formatMessage(f.announcementContentPlaceholder),value:Z,onChange:function(e){var n=e.target;return a((0,s.ZT)(n.value))}})),(0,t.Z)(r.cw,{labelText:(0,t.Z)(o.Z,{id:"admin.edit_announcement.fields.start_time_label",defaultMessage:"Start date"})},void 0,(0,t.Z)(l.Z,{fetchComponent:u.Mt},void 0,(function(e){return(0,t.Z)(e,{showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",timeIntervals:15,wrapperClassName:"react-datepicker-wrapper",placeholderText:i.formatMessage(f.announcementStartTimePlaceholder),selected:h,onChange:M,isClearable:!0})}))),(0,t.Z)(r.cw,{labelText:(0,t.Z)(o.Z,{id:"admin.edit_announcement.fields.end_time_label",defaultMessage:"End date"})},void 0,(0,t.Z)(l.Z,{fetchComponent:u.Mt},void 0,(function(e){return(0,t.Z)(e,{showTimeSelect:!0,dateFormat:"MMMM d, yyyy h:mm aa",timeIntervals:15,wrapperClassName:"react-datepicker-wrapper",placeholderText:i.formatMessage(f.announcementEndTimePlaceholder),selected:_,onChange:p,isClearable:!0})}))),(0,t.Z)(r.Ug,{alignItems:"center",space:2},void 0,(0,t.Z)(r.ZD,{icons:!1,checked:v,onChange:function(e){var n=e.target;return a((0,s.qD)(n.checked))}}),(0,t.Z)(r.Kq,{},void 0,(0,t.Z)(r.xv,{tag:"span",theme:"muted"},void 0,(0,t.Z)(o.Z,{id:"admin.edit_announcement.fields.all_day_label",defaultMessage:"All-day event"})),(0,t.Z)(r.xv,{size:"xs",tag:"span",theme:"muted"},void 0,(0,t.Z)(o.Z,{id:"admin.edit_announcement.fields.all_day_hint",defaultMessage:"When checked, only the dates of the time range will be displayed"}))))))}}}]);
//# sourceMappingURL=announcements-d3614719e7bdb8c89d2d.chunk.js.map