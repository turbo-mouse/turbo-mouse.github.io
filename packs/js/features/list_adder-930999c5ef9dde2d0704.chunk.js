"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[56],{1396:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=s(2063),n=(s(55),s(10),s(0),s(5),s(1)),o=s(2064),r=s(2065),a=s(2083),l=s(225),u=s(173),d=s(2),c=s(80),f=s(3),Z=s(1069),m=(s(28),s(33),s(53)),v=s(184),g=(0,o.vU)({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),C=function(t){var e,n=t.listId,o=(0,r.Z)(),a=(0,f.TL)(),l=(0,f.CG)((function(t){return t.lists.get(n)})),d=(0,f.CG)((function(t){return t.listAdder.lists.items.includes(n)}));return l?(e=d?(0,i.Z)(v.Z,{iconClassName:"h-5 w-5",src:s(76),title:o.formatMessage(g.remove),onClick:function(){return a((0,u.JH)(n))}}):(0,i.Z)(v.Z,{iconClassName:"h-5 w-5",src:s(163),title:o.formatMessage(g.add),onClick:function(){return a((0,u.oC)(n))}}),(0,i.Z)("div",{className:"flex items-center gap-1.5 px-2 py-4 text-black dark:text-white"},void 0,(0,i.Z)(m.Z,{src:s(630)}),(0,i.Z)("span",{className:"grow"},void 0,l.title),e)):null},h=(0,o.vU)({close:{id:"lightbox.close",defaultMessage:"Close"},subheading:{id:"lists.subheading",defaultMessage:"Your lists"},add:{id:"lists.new.create",defaultMessage:"Add List"}}),p=(0,l.P1)([function(t){return t.lists}],(function(t){return t?t.toList().filter((function(t){return!!t})).sort((function(t,e){return t.title.localeCompare(e.title)})):t})),b=function(t){var e=t.accountId,s=t.onClose,o=(0,r.Z)(),l=(0,f.TL)(),m=(0,f.CG)((function(t){return p(t).map((function(t){return t.id}))}));return(0,n.useEffect)((function(){return l((0,u.EG)(e)),function(){l((0,u.Zk)())}}),[]),(0,i.Z)(d.u_,{title:(0,i.Z)(a.Z,{id:"list_adder.header_title",defaultMessage:"Add or Remove from Lists"}),onClose:function(){s("LIST_ADDER")}},void 0,(0,i.Z)(c.Z,{id:e,withRelationship:!1}),(0,i.Z)("br",{}),(0,i.Z)(d.Ol,{},void 0,(0,i.Z)(d.ll,{title:o.formatMessage(h.add)})),(0,i.Z)(Z.Z,{}),(0,i.Z)("br",{}),(0,i.Z)(d.Ol,{},void 0,(0,i.Z)(d.ll,{title:o.formatMessage(h.subheading)})),(0,i.Z)("div",{},void 0,m.map((function(t){return(0,i.Z)(C,{listId:t},t)}))))}}}]);
//# sourceMappingURL=list_adder-930999c5ef9dde2d0704.chunk.js.map