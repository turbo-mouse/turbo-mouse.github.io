"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[42],{1441:function(e,t,i){i.r(t);var r=i(2057),a=i(2047),s=(i(4),i(5),i(1)),o=i(2058),l=i(2059),n=i(2077),d=i(912),u=i(98),f=i(57),c=i(2),h=i(3),m=i(37),g=(0,o.vU)({heading:{id:"column.filters",defaultMessage:"Muted words"},subheading_add_new:{id:"column.filters.subheading_add_new",defaultMessage:"Add New Filter"},keyword:{id:"column.filters.keyword",defaultMessage:"Keyword or phrase"},expires:{id:"column.filters.expires",defaultMessage:"Expire after"},expires_hint:{id:"column.filters.expires_hint",defaultMessage:"Expiration dates are not currently supported"},home_timeline:{id:"column.filters.home_timeline",defaultMessage:"Home timeline"},public_timeline:{id:"column.filters.public_timeline",defaultMessage:"Public timeline"},notifications:{id:"column.filters.notifications",defaultMessage:"Notifications"},conversations:{id:"column.filters.conversations",defaultMessage:"Conversations"},drop_header:{id:"column.filters.drop_header",defaultMessage:"Drop instead of hide"},drop_hint:{id:"column.filters.drop_hint",defaultMessage:"Filtered posts will disappear irreversibly, even if filter is later removed"},whole_word_header:{id:"column.filters.whole_word_header",defaultMessage:"Whole word"},whole_word_hint:{id:"column.filters.whole_word_hint",defaultMessage:"When the keyword or phrase is alphanumeric only, it will only be applied if it matches the whole word"},add_new:{id:"column.filters.add_new",defaultMessage:"Add New Filter"},create_error:{id:"column.filters.create_error",defaultMessage:"Error adding filter"},delete_error:{id:"column.filters.delete_error",defaultMessage:"Error deleting filter"},subheading_filters:{id:"column.filters.subheading_filters",defaultMessage:"Current Filters"},delete:{id:"column.filters.delete",defaultMessage:"Delete"}}),Z={home:g.home_timeline,public:g.public_timeline,notifications:g.notifications,thread:g.conversations};t.default=function(){var e=(0,l.Z)(),t=(0,h.TL)(),o=(0,h.CG)((function(e){return e.filters})),v=(0,s.useState)(""),_=(0,a.Z)(v,2),p=_[0],w=_[1],M=(0,s.useState)(""),b=(0,a.Z)(M,1)[0],x=(0,s.useState)(!0),k=(0,a.Z)(x,2),y=k[0],C=k[1],D=(0,s.useState)(!1),S=(0,a.Z)(D,2),H=S[0],N=S[1],F=(0,s.useState)(!1),E=(0,a.Z)(F,2),K=E[0],U=E[1],j=(0,s.useState)(!1),q=(0,a.Z)(j,2),z=q[0],O=q[1],W=(0,s.useState)(!1),$=(0,a.Z)(W,2),A=$[0],I=$[1],T=(0,s.useState)(!0),G=(0,a.Z)(T,2),L=G[0],P=G[1];(0,s.useEffect)((function(){t((0,d.a$)())}),[]);var Y=(0,r.Z)(n.Z,{id:"empty_column.filters",defaultMessage:"You haven't created any muted words yet."});return(0,r.Z)(c.sg,{className:"filter-settings-panel",label:e.formatMessage(g.heading)},void 0,(0,r.Z)(c.Ol,{},void 0,(0,r.Z)(c.ll,{title:e.formatMessage(g.subheading_add_new)})),(0,r.Z)(c.l0,{onSubmit:function(i){i.preventDefault();var r=[];y&&r.push("home"),H&&r.push("public"),K&&r.push("notifications"),z&&r.push("thread"),t((0,d.cj)(p,b,r,L,A)).then((function(){return t((0,d.a$)())})).catch((function(t){m.Z.error(e.formatMessage(g.create_error))}))}},void 0,(0,r.Z)(c.cw,{labelText:e.formatMessage(g.keyword)},void 0,(0,r.Z)(c.II,{required:!0,type:"text",name:"phrase",onChange:function(e){var t=e.target;return w(t.value)}})),(0,r.Z)(c.Kq,{},void 0,(0,r.Z)(c.xv,{size:"sm",weight:"medium"},void 0,(0,r.Z)(n.Z,{id:"filters.context_header",defaultMessage:"Filter contexts"})),(0,r.Z)(c.xv,{size:"xs",theme:"muted"},void 0,(0,r.Z)(n.Z,{id:"filters.context_hint",defaultMessage:"One or multiple contexts where the filter should apply"}))),(0,r.Z)(u.Z,{},void 0,(0,r.Z)(u.H,{label:e.formatMessage(g.home_timeline)},void 0,(0,r.Z)(c.ZD,{name:"home_timeline",checked:y,onChange:function(e){var t=e.target;return C(t.checked)}})),(0,r.Z)(u.H,{label:e.formatMessage(g.public_timeline)},void 0,(0,r.Z)(c.ZD,{name:"public_timeline",checked:H,onChange:function(e){var t=e.target;return N(t.checked)}})),(0,r.Z)(u.H,{label:e.formatMessage(g.notifications)},void 0,(0,r.Z)(c.ZD,{name:"notifications",checked:K,onChange:function(e){var t=e.target;return U(t.checked)}})),(0,r.Z)(u.H,{label:e.formatMessage(g.conversations)},void 0,(0,r.Z)(c.ZD,{name:"conversations",checked:z,onChange:function(e){var t=e.target;return O(t.checked)}}))),(0,r.Z)(u.Z,{},void 0,(0,r.Z)(u.H,{label:e.formatMessage(g.drop_header),hint:e.formatMessage(g.drop_hint)},void 0,(0,r.Z)(c.ZD,{name:"irreversible",checked:A,onChange:function(e){var t=e.target;return I(t.checked)}})),(0,r.Z)(u.H,{label:e.formatMessage(g.whole_word_header),hint:e.formatMessage(g.whole_word_hint)},void 0,(0,r.Z)(c.ZD,{name:"whole_word",checked:L,onChange:function(e){var t=e.target;return P(t.checked)}}))),(0,r.Z)(c.iN,{},void 0,(0,r.Z)(c.zx,{type:"submit",theme:"primary"},void 0,e.formatMessage(g.add_new)))),(0,r.Z)(c.Ol,{},void 0,(0,r.Z)(c.ll,{title:e.formatMessage(g.subheading_filters)})),(0,r.Z)(f.Z,{scrollKey:"filters",emptyMessage:Y,itemClassName:"pb-4 last:pb-0"},void 0,o.map((function(a,s){return(0,r.Z)(c.Ug,{space:1,justifyContent:"between"},void 0,(0,r.Z)(c.Kq,{space:1},void 0,(0,r.Z)(c.xv,{weight:"medium"},void 0,(0,r.Z)(n.Z,{id:"filters.filters_list_phrase_label",defaultMessage:"Keyword or phrase:"})," ",(0,r.Z)(c.xv,{theme:"muted",tag:"span"},void 0,a.phrase)),(0,r.Z)(c.xv,{weight:"medium"},void 0,(0,r.Z)(n.Z,{id:"filters.filters_list_context_label",defaultMessage:"Filter contexts:"})," ",(0,r.Z)(c.xv,{theme:"muted",tag:"span"},void 0,a.context.map((function(t){return Z[t]?e.formatMessage(Z[t]):t})).join(", "))),(0,r.Z)(c.Ug,{space:4},void 0,(0,r.Z)(c.xv,{weight:"medium"},void 0,a.irreversible?(0,r.Z)(n.Z,{id:"filters.filters_list_drop",defaultMessage:"Drop"}):(0,r.Z)(n.Z,{id:"filters.filters_list_hide",defaultMessage:"Hide"})),a.whole_word&&(0,r.Z)(c.xv,{weight:"medium"},void 0,(0,r.Z)(n.Z,{id:"filters.filters_list_whole-word",defaultMessage:"Whole word"})))),(0,r.Z)(c.hU,{iconClassName:"h-5 w-5 text-gray-700 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-500",src:i(97),onClick:(o=a.id,function(){t((0,d.kh)(o)).then((function(){return t((0,d.a$)())})).catch((function(){m.Z.error(e.formatMessage(g.delete_error))}))}),title:e.formatMessage(g.delete)}));var o}))))}}}]);
//# sourceMappingURL=filters-b2609d61cf833e7038dc.chunk.js.map