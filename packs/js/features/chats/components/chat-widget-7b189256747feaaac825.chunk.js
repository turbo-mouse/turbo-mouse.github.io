"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[22],{1405:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var n=t(2063),o=(t(6),t(37),t(2056)),s=t(172),i=t(3),c=t(2053),l=(t(48),t(1)),r=t(2083),d=t(2),u=t(252),g=t(145),m=t(528),h=t(1021),f=t(527),v=t(1020),Z=t(2081),p=t(2076),b=["isOpen","isToggleable","onToggle","secondaryAction","secondaryActionIcon","title","unreadCount"],x=function(e){var a=e.isOpen,o=e.isToggleable,s=void 0===o||o,i=e.onToggle,c=e.secondaryAction,r=e.secondaryActionIcon,u=e.title,g=e.unreadCount,m=(0,p.Z)(e,b),h=s?"button":"div",f={};return s&&(f.onClick=i),l.createElement(d.Ug,(0,Z.Z)({},m,{alignItems:"center",justifyContent:"between",className:"h-16 rounded-t-xl py-3 px-4"}),l.createElement(h,(0,Z.Z)({className:"flex h-16 grow flex-row items-center space-x-1","data-testid":"title"},f),(0,n.Z)(d.xv,{weight:"semibold",tag:"div"},void 0,u),void 0!==g&&g>0&&(0,n.Z)(d.Ug,{alignItems:"center",space:2},void 0,(0,n.Z)(d.xv,{weight:"semibold","data-testid":"unread-count"},void 0,"(",g,")"),(0,n.Z)("div",{className:"h-2.5 w-2.5 rounded-full bg-accent-300"}))),(0,n.Z)(d.Ug,{space:2,alignItems:"center"},void 0,c?(0,n.Z)(d.hU,{onClick:c,src:r,iconClassName:"h-5 w-5 text-gray-600"}):null,(0,n.Z)(d.hU,{onClick:i,src:t(a?663:912),iconClassName:"h-5 w-5 text-gray-600"})))},C=t(2064),y=t(2065),k=t(2082),M=t(166),_=t(134),w=t(526),N=(t(5),t(46)),T=t(2074),I=t(98),U=(0,C.vU)({blockMessage:{id:"chat_settings.block.message",defaultMessage:"Blocking will prevent this profile from direct messaging you and viewing your content. You can unblock later."},blockHeading:{id:"chat_settings.block.heading",defaultMessage:"Block @{acct}"},blockConfirm:{id:"chat_settings.block.confirm",defaultMessage:"Block"},unblockMessage:{id:"chat_settings.unblock.message",defaultMessage:"Unblocking will allow this profile to direct message you and view your content."},unblockHeading:{id:"chat_settings.unblock.heading",defaultMessage:"Unblock @{acct}"},unblockConfirm:{id:"chat_settings.unblock.confirm",defaultMessage:"Unblock"},leaveMessage:{id:"chat_settings.leave.message",defaultMessage:"Are you sure you want to leave this chat? Messages will be deleted for you and this chat will be removed from your inbox."},leaveHeading:{id:"chat_settings.leave.heading",defaultMessage:"Leave Chat"},leaveConfirm:{id:"chat_settings.leave.confirm",defaultMessage:"Leave Chat"},title:{id:"chat_settings.title",defaultMessage:"Chat Details"},blockUser:{id:"chat_settings.options.block_user",defaultMessage:"Block @{acct}"},unblockUser:{id:"chat_settings.options.unblock_user",defaultMessage:"Unblock @{acct}"},leaveChat:{id:"chat_settings.options.leave_chat",defaultMessage:"Leave Chat"},autoDeleteLabel:{id:"chat_settings.auto_delete.label",defaultMessage:"Auto-delete messages"},autoDeleteDays:{id:"chat_settings.auto_delete.days",defaultMessage:"{day, plural, one {# day} other {# days}}"}}),O=function(){var e=(0,i.TL)(),a=(0,y.Z)(),o=(0,i.hz)(),c=(0,s.mx)(),r=c.chat,u=c.changeScreen,m=c.toggleChatPane,h=(0,g.qi)(null==r?void 0:r.id),f=h.deleteChat,v=h.updateChat,Z=(0,i.CG)((function(e){var a;return e.getIn(["relationships",null==r||null===(a=r.account)||void 0===a?void 0:a.id,"blocking"])})),p=function(){u(s.fB.CHAT,null==r?void 0:r.id)};return r?l.createElement(l.Fragment,null,(0,n.Z)(x,{isOpen:!0,isToggleable:!1,onToggle:function(){p(),m()},title:(0,n.Z)(d.Ug,{alignItems:"center",space:2},void 0,(0,n.Z)("button",{onClick:p},void 0,(0,n.Z)(d.JO,{src:t(197),className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),(0,n.Z)(d.xv,{weight:"semibold"},void 0,a.formatMessage(U.title)))}),(0,n.Z)(d.Kq,{space:4,className:"mx-auto w-5/6"},void 0,(0,n.Z)(d.Ug,{alignItems:"center",space:3},void 0,(0,n.Z)(d.qE,{src:r.account.avatar_static,size:50}),(0,n.Z)(d.Kq,{},void 0,(0,n.Z)(d.xv,{weight:"semibold"},void 0,r.account.display_name),(0,n.Z)(d.xv,{size:"sm",theme:"primary"},void 0,"@",r.account.acct))),o.chatsExpiration&&(0,n.Z)(I.Z,{},void 0,(0,n.Z)(I.H,{label:a.formatMessage(U.autoDeleteLabel)},void 0,(0,n.Z)(d.Ph,{defaultValue:r.message_expiration,onChange:function(e){return a=Number(e.target.value),v.mutate({message_expiration:a});var a}},void 0,g.Kl.map((function(e){var t=(0,_.i8)(e);return(0,n.Z)("option",{value:e},e,a.formatMessage(U.autoDeleteDays,{day:t}))}))))),(0,n.Z)(d.Kq,{space:5},void 0,(0,n.Z)("button",{onClick:Z?function(){e((0,T.h7)("CONFIRM",{heading:a.formatMessage(U.unblockHeading,{acct:null==r?void 0:r.account.acct}),message:a.formatMessage(U.unblockMessage),confirm:a.formatMessage(U.unblockConfirm),confirmationTheme:"primary",onConfirm:function(){return e((0,N.k2m)(null==r?void 0:r.account.id))}}))}:function(){e((0,T.h7)("CONFIRM",{heading:a.formatMessage(U.blockHeading,{acct:null==r?void 0:r.account.acct}),message:a.formatMessage(U.blockMessage),confirm:a.formatMessage(U.blockConfirm),confirmationTheme:"primary",onConfirm:function(){return e((0,N.Gy_)(null==r?void 0:r.account.id))}}))},className:"flex w-full items-center space-x-2 text-sm font-bold text-primary-600 dark:text-accent-blue"},void 0,(0,n.Z)(d.JO,{src:t(104),className:"h-5 w-5"}),(0,n.Z)("span",{},void 0,a.formatMessage(Z?U.unblockUser:U.blockUser,{acct:r.account.acct}))),o.chatsDelete&&(0,n.Z)("button",{onClick:function(){e((0,T.h7)("CONFIRM",{heading:a.formatMessage(U.leaveHeading),message:a.formatMessage(U.leaveMessage),confirm:a.formatMessage(U.leaveConfirm),confirmationTheme:"primary",onConfirm:function(){return f.mutate()}}))},className:"flex w-full items-center space-x-2 text-sm font-bold text-danger-600"},void 0,(0,n.Z)(d.JO,{src:t(633),className:"h-5 w-5"}),(0,n.Z)("span",{},void 0,a.formatMessage(U.leaveChat)))))):null},A=(0,C.vU)({autoDeleteMessage:{id:"chat_window.auto_delete_label",defaultMessage:"Auto-delete after {day, plural, one {# day} other {# days}}"},autoDeleteMessageTooltip:{id:"chat_window.auto_delete_tooltip",defaultMessage:"Chat messages are set to auto-delete after {day, plural, one {# day} other {# days}} upon sending."}}),B=function(e){var a=e.enabled,t=e.to,o=e.children;return a?(0,n.Z)(k.rU,{to:t},void 0,o):l.createElement(l.Fragment,null,o)},S=function(){var e=(0,y.Z)(),a=(0,s.mx)(),o=a.chat,i=a.currentChatId,c=a.screen,r=a.changeScreen,u=a.isOpen,g=a.needsAcceptance,m=a.toggleChatPane,h=(0,l.useRef)(null),f=function(){m(),r(s.fB.SEARCH)},v=function(){r(s.fB.CHAT_SETTINGS,i)};return o?c===s.fB.CHAT_SETTINGS?(0,n.Z)(O,{}):l.createElement(l.Fragment,null,(0,n.Z)(x,{title:(0,n.Z)(d.Ug,{alignItems:"center",space:2},void 0,u&&(0,n.Z)("button",{onClick:function(){r(s.fB.INBOX)}},void 0,(0,n.Z)(d.JO,{src:t(197),className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),(0,n.Z)(d.Ug,{alignItems:"center",space:3},void 0,u&&(0,n.Z)(k.rU,{to:"/@".concat(o.account.acct)},void 0,(0,n.Z)(d.qE,{src:o.account.avatar,size:40})),(0,n.Z)(d.Kq,{alignItems:"start"},void 0,(0,n.Z)(B,{enabled:u,to:"/@".concat(o.account.acct)},void 0,(0,n.Z)("div",{className:"flex grow items-center space-x-1"},void 0,(0,n.Z)(d.xv,{size:"sm",weight:"bold",truncate:!0},void 0,o.account.display_name||"@".concat(o.account.acct)),o.account.verified&&(0,n.Z)(M.Z,{}))),o.message_expiration&&(0,n.Z)(d.u,{text:e.formatMessage(A.autoDeleteMessageTooltip,{day:(0,_.i8)(o.message_expiration)})},void 0,(0,n.Z)(d.xv,{size:"sm",weight:"medium",theme:"primary",truncate:!0,className:"cursor-help"},void 0,e.formatMessage(A.autoDeleteMessage,{day:(0,_.i8)(o.message_expiration)})))))),secondaryAction:function(){if(!g)return u?v:f}(),secondaryActionIcon:t(u?577:255),isToggleable:!u,isOpen:u,onToggle:m}),(0,n.Z)(d.Kq,{className:"h-full grow overflow-hidden",space:2},void 0,(0,n.Z)(w.Z,{chat:o,inputRef:h}))):null},H=(0,C.vU)({title:{id:"chat_search.title",defaultMessage:"Messages"}}),E=function(){var e=(0,y.Z)(),a=(0,s.mx)(),o=a.changeScreen,i=a.isOpen,c=a.toggleChatPane;return(0,n.Z)(x,{"data-testid":"pane-header",title:(0,n.Z)(d.Ug,{alignItems:"center",space:2},void 0,(0,n.Z)("button",{onClick:function(){o(s.fB.INBOX)}},void 0,(0,n.Z)(d.JO,{src:t(197),className:"h-6 w-6 text-gray-600 dark:text-gray-400"})),(0,n.Z)(d.xv,{size:"sm",weight:"bold",truncate:!0},void 0,e.formatMessage(H.title))),isOpen:i,isToggleable:!1,onToggle:c})},D=t(661),q=function(e){var a=e.isOpen,t=void 0!==a&&a,o=e.index,s=e.children,i=(e.main,404*o+20);return(0,n.Z)("div",{className:(0,D.default)("fixed bottom-0 right-1 z-[99] flex w-96 flex-col rounded-t-lg bg-white shadow-3xl dark:bg-gray-900",{"h-[550px] max-h-[100vh]":t,"h-16":!t}),style:{right:"".concat(i,"px")},"data-testid":"pane"},void 0,s)},z=(0,C.vU)({title:{id:"chat_search.empty_results_blankslate.title",defaultMessage:"No messages yet"},body:{id:"chat_search.empty_results_blankslate.body",defaultMessage:"Search for someone to chat with."},action:{id:"chat_search.empty_results_blankslate.action",defaultMessage:"Message someone"}}),K=function(e){var a=e.onSearch,t=(0,y.Z)();return(0,n.Z)(d.Kq,{alignItems:"center",justifyContent:"center",className:"h-full grow","data-testid":"chat-pane-blankslate"},void 0,(0,n.Z)(d.Kq,{space:4},void 0,(0,n.Z)(d.Kq,{space:1,className:"mx-auto max-w-[80%]"},void 0,(0,n.Z)(d.xv,{size:"lg",weight:"bold",align:"center"},void 0,t.formatMessage(z.title)),(0,n.Z)(d.xv,{theme:"muted",align:"center"},void 0,t.formatMessage(z.body))),(0,n.Z)("div",{className:"mx-auto"},void 0,(0,n.Z)(d.zx,{theme:"primary",onClick:a},void 0,t.formatMessage(z.action)))))},R=function(){var e=(0,i.hz)(),a=i.Nr,o=(0,u.g)().unreadChatsCount,Z=(0,l.useState)(),p=(0,c.Z)(Z,2),b=p[0],C=p[1],y=a(b,300),k=(0,s.mx)(),M=k.screen,_=k.changeScreen,w=k.isOpen,N=k.toggleChatPane,T=(0,g.PD)(y).chatsQuery,I=T.data,U=T.isLoading,O=Number(null==y?void 0:y.length)>0;return M===s.fB.CHAT||M===s.fB.CHAT_SETTINGS?(0,n.Z)(q,{isOpen:w,index:0,main:!0},void 0,(0,n.Z)(S,{})):M===s.fB.SEARCH?(0,n.Z)(q,{isOpen:w,index:0,main:!0},void 0,(0,n.Z)(E,{}),w?(0,n.Z)(f.Z,{}):null):(0,n.Z)(q,{isOpen:w,index:0,main:!0},void 0,(0,n.Z)(x,{title:(0,n.Z)(r.Z,{id:"column.chats",defaultMessage:"Chats"}),unreadCount:o,isOpen:w,onToggle:N,secondaryAction:function(){_(s.fB.SEARCH),C(void 0),w||N()},secondaryActionIcon:t(255)}),w?O||Number(null==I?void 0:I.length)>0||U?(0,n.Z)(d.Kq,{space:4,className:"h-full grow"},void 0,e.chatsSearch&&(0,n.Z)("div",{className:"px-4"},void 0,(0,n.Z)(h.Z,{value:b||"",onChange:function(e){return C(e.target.value)},onClear:function(){O&&C("")}})),Number(null==I?void 0:I.length)>0||U?(0,n.Z)(m.Z,{searchValue:y,onClickChat:function(e){_(s.fB.CHAT,e.id),C(void 0)}}):(0,n.Z)(v.Z,{})):0===(null==I?void 0:I.length)?(0,n.Z)(K,{onSearch:function(){_(s.fB.SEARCH)}}):void 0:null)},L=function(){var e=(0,i.Tr)(),a=(0,o.k6)().location.pathname,t=Boolean(a.match(/^\/chats/));return null==e||!e.chats_onboarded||t?null:(0,n.Z)(s.aM,{},void 0,(0,n.Z)(R,{}))}}}]);
//# sourceMappingURL=chat-widget-7b189256747feaaac825.chunk.js.map