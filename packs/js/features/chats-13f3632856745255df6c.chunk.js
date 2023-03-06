"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[21],{1426:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var s=a(2054),n=a(172),i=a(2044),o=a(653),c=a(1),l=a(2047),r=a(2),d=a(3),u=(a(4),a(2055)),g=a(2056),m=a(2073),h=a(46),f=a(2070),v=a(98),p=a(166),Z=a(145),b=a(142),y=a(1283),w=a(2074),M=function(){var e=(0,l.k6)();return(0,s.Z)(r.Kq,{space:6,alignItems:"center",justifyContent:"center",className:"h-full p-6"},void 0,(0,s.Z)(r.Kq,{space:2,className:"max-w-sm"},void 0,(0,s.Z)(r.xv,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate.title",defaultMessage:"No messages yet"})),(0,s.Z)(r.xv,{size:"sm",theme:"muted",align:"center"},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate.subtitle",defaultMessage:"Search for someone to chat with"}))),(0,s.Z)(r.zx,{theme:"primary",onClick:function(){e.push("/chats/new")}},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate.new_chat",defaultMessage:"Message someone"})))},_=function(){var e=(0,l.k6)();return(0,s.Z)(r.Kq,{space:6,alignItems:"center",justifyContent:"center",className:"h-full p-6"},void 0,(0,s.Z)(r.Kq,{space:2,className:"max-w-sm"},void 0,(0,s.Z)(r.xv,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate_with_chats.title",defaultMessage:"Select a chat"})),(0,s.Z)(r.xv,{size:"sm",theme:"muted",align:"center"},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate_with_chats.subtitle",defaultMessage:"Select from one of your open chats or create a new message."}))),(0,s.Z)(r.zx,{theme:"primary",onClick:function(){e.push("/chats/new")}},void 0,(0,s.Z)(w.Z,{id:"chats.main.blankslate.new_chat",defaultMessage:"Message someone"})))},k=(0,u.vU)({blockMessage:{id:"chat_settings.block.message",defaultMessage:"Blocking will prevent this profile from direct messaging you and viewing your content. You can unblock later."},blockHeading:{id:"chat_settings.block.heading",defaultMessage:"Block @{acct}"},blockConfirm:{id:"chat_settings.block.confirm",defaultMessage:"Block"},unblockMessage:{id:"chat_settings.unblock.message",defaultMessage:"Unblocking will allow this profile to direct message you and view your content."},unblockHeading:{id:"chat_settings.unblock.heading",defaultMessage:"Unblock @{acct}"},unblockConfirm:{id:"chat_settings.unblock.confirm",defaultMessage:"Unblock"},leaveMessage:{id:"chat_settings.leave.message",defaultMessage:"Are you sure you want to leave this chat? Messages will be deleted for you and this chat will be removed from your inbox."},leaveHeading:{id:"chat_settings.leave.heading",defaultMessage:"Leave Chat"},leaveConfirm:{id:"chat_settings.leave.confirm",defaultMessage:"Leave Chat"},blockUser:{id:"chat_settings.options.block_user",defaultMessage:"Block @{acct}"},unblockUser:{id:"chat_settings.options.unblock_user",defaultMessage:"Unblock @{acct}"},reportUser:{id:"chat_settings.options.report_user",defaultMessage:"Report @{acct}"},leaveChat:{id:"chat_settings.options.leave_chat",defaultMessage:"Leave Chat"},autoDeleteLabel:{id:"chat_settings.auto_delete.label",defaultMessage:"Auto-delete messages"},autoDeleteHint:{id:"chat_settings.auto_delete.hint",defaultMessage:"Sent messages will auto-delete after the time period selected"},autoDelete2Minutes:{id:"chat_settings.auto_delete.2minutes",defaultMessage:"2 minutes"},autoDelete7Days:{id:"chat_settings.auto_delete.7days",defaultMessage:"7 days"},autoDelete14Days:{id:"chat_settings.auto_delete.14days",defaultMessage:"14 days"},autoDelete30Days:{id:"chat_settings.auto_delete.30days",defaultMessage:"30 days"},autoDelete90Days:{id:"chat_settings.auto_delete.90days",defaultMessage:"90 days"},autoDeleteMessage:{id:"chat_window.auto_delete_label",defaultMessage:"Auto-delete after {day, plural, one {# day} other {# days}}"},autoDeleteMessageTooltip:{id:"chat_window.auto_delete_tooltip",defaultMessage:"Chat messages are set to auto-delete after {day, plural, one {# day} other {# days}} upon sending."}}),x=function(){var e=(0,d.TL)(),t=(0,g.Z)(),i=(0,d.hz)(),o=(0,l.k6)(),u=(0,l.UO)().chatId,w=(0,Z.RJ)(u).data,x=(0,n.mx)().currentChatId,N=(0,Z.PD)().chatsQuery,C=N.data,O=N.isLoading,U=(0,c.useRef)(null),D=(0,Z.qi)(null==w?void 0:w.id),S=D.deleteChat,j=D.updateChat,I=function(e){return j.mutate({message_expiration:e})},q=(0,d.CG)((function(e){var t;return e.getIn(["relationships",null==w||null===(t=w.account)||void 0===t?void 0:t.id,"blocking"])}));return O?null:!x&&C&&C.length>0?(0,s.Z)(_,{}):x?w?(0,s.Z)(r.Kq,{className:"h-full overflow-hidden"},void 0,(0,s.Z)(r.Ug,{alignItems:"center",justifyContent:"between",space:2,className:"w-full p-4"},void 0,(0,s.Z)(r.Ug,{alignItems:"center",space:2,className:"overflow-hidden"},void 0,(0,s.Z)(r.Ug,{alignItems:"center"},void 0,(0,s.Z)(r.hU,{src:a(204),className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",onClick:function(){return o.push("/chats")}}),(0,s.Z)(m.rU,{to:"/@".concat(w.account.acct)},void 0,(0,s.Z)(r.qE,{src:w.account.avatar,size:40,className:"flex-none"}))),(0,s.Z)(r.Kq,{alignItems:"start",className:"h-11 overflow-hidden"},void 0,(0,s.Z)("div",{className:"flex w-full grow items-center space-x-1"},void 0,(0,s.Z)(m.rU,{to:"/@".concat(w.account.acct)},void 0,(0,s.Z)(r.xv,{weight:"bold",size:"sm",align:"left",truncate:!0},void 0,w.account.display_name||"@".concat(w.account.username))),w.account.verified&&(0,s.Z)(p.Z,{})),w.message_expiration&&(0,s.Z)(r.u,{text:t.formatMessage(k.autoDeleteMessageTooltip,{day:(0,b.i8)(w.message_expiration)})},void 0,(0,s.Z)(r.xv,{align:"left",size:"sm",weight:"medium",theme:"primary",truncate:!0,className:"w-full cursor-help"},void 0,t.formatMessage(k.autoDeleteMessage,{day:(0,b.i8)(w.message_expiration)}))))),(0,s.Z)(r.v2,{},void 0,(0,s.Z)(r.j2,{as:r.hU,src:a(529),iconClassName:"h-5 w-5 text-gray-600",children:null}),(0,s.Z)(r.qy,{className:"w-80"},void 0,(0,s.Z)(r.Kq,{space:4,className:"px-6 py-5"},void 0,(0,s.Z)(r.Ug,{alignItems:"center",space:3},void 0,(0,s.Z)(r.qE,{src:w.account.avatar_static,size:50}),(0,s.Z)(r.Kq,{},void 0,(0,s.Z)(r.xv,{weight:"semibold"},void 0,w.account.display_name),(0,s.Z)(r.xv,{size:"sm",theme:"primary"},void 0,"@",w.account.acct))),i.chatsExpiration&&(0,s.Z)(v.Z,{},void 0,(0,s.Z)(v.H,{label:t.formatMessage(k.autoDeleteLabel),hint:t.formatMessage(k.autoDeleteHint)}),(0,s.Z)(v.H,{label:t.formatMessage(k.autoDelete7Days),onSelect:function(){return I(Z.Uu.SEVEN)},isSelected:w.message_expiration===Z.Uu.SEVEN}),(0,s.Z)(v.H,{label:t.formatMessage(k.autoDelete14Days),onSelect:function(){return I(Z.Uu.FOURTEEN)},isSelected:w.message_expiration===Z.Uu.FOURTEEN}),(0,s.Z)(v.H,{label:t.formatMessage(k.autoDelete30Days),onSelect:function(){return I(Z.Uu.THIRTY)},isSelected:w.message_expiration===Z.Uu.THIRTY}),(0,s.Z)(v.H,{label:t.formatMessage(k.autoDelete90Days),onSelect:function(){return I(Z.Uu.NINETY)},isSelected:w.message_expiration===Z.Uu.NINETY})),(0,s.Z)(r.Kq,{space:2},void 0,(0,s.Z)(r.sN,{as:"button",onSelect:q?function(){e((0,f.h7)("CONFIRM",{heading:t.formatMessage(k.unblockHeading,{acct:null==w?void 0:w.account.acct}),message:t.formatMessage(k.unblockMessage),confirm:t.formatMessage(k.unblockConfirm),confirmationTheme:"primary",onConfirm:function(){return e((0,h.k2m)(null==w?void 0:w.account.id))}}))}:function(){e((0,f.h7)("CONFIRM",{heading:t.formatMessage(k.blockHeading,{acct:null==w?void 0:w.account.acct}),message:t.formatMessage(k.blockMessage),confirm:t.formatMessage(k.blockConfirm),confirmationTheme:"primary",onConfirm:function(){return e((0,h.Gy_)(null==w?void 0:w.account.id))}}))},className:"!px-0 hover:!bg-transparent"},void 0,(0,s.Z)("div",{className:"flex w-full items-center space-x-2 text-sm font-bold text-primary-500 dark:text-accent-blue"},void 0,(0,s.Z)(r.JO,{src:a(104),className:"h-5 w-5"}),(0,s.Z)("span",{},void 0,t.formatMessage(q?k.unblockUser:k.blockUser,{acct:w.account.acct})))),i.chatsDelete&&(0,s.Z)(r.sN,{as:"button",onSelect:function(){e((0,f.h7)("CONFIRM",{heading:t.formatMessage(k.leaveHeading),message:t.formatMessage(k.leaveMessage),confirm:t.formatMessage(k.leaveConfirm),confirmationTheme:"primary",onConfirm:function(){S.mutate(void 0,{onSuccess:function(){o.push("/chats")}})}}))},className:"!px-0 hover:!bg-transparent"},void 0,(0,s.Z)("div",{className:"flex w-full items-center space-x-2 text-sm font-bold text-danger-600 dark:text-danger-500"},void 0,(0,s.Z)(r.JO,{src:a(578),className:"h-5 w-5"}),(0,s.Z)("span",{},void 0,t.formatMessage(k.leaveChat))))))))),(0,s.Z)("div",{className:"h-full overflow-hidden"},void 0,(0,s.Z)(y.Z,{className:"h-full",chat:w,inputRef:U}))):null:(0,s.Z)(M,{})},N=a(1284),C=(0,u.vU)({title:{id:"chat.new_message.title",defaultMessage:"New Message"}}),O=function(){var e=(0,g.Z)(),t=(0,l.k6)();return(0,s.Z)(r.Kq,{className:"h-full space-y-4"},void 0,(0,s.Z)(r.Kq,{className:"grow px-4 pt-6 sm:px-6"},void 0,(0,s.Z)(r.Ug,{alignItems:"center"},void 0,(0,s.Z)(r.hU,{src:a(204),className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",onClick:function(){return t.push("/chats")}}),(0,s.Z)(r.ll,{title:e.formatMessage(C.title)}))),(0,s.Z)(N.Z,{isMainPage:!0}))},U=a(2038),D=(a(12),a(13),a(10),a(0),a(21),a(8),a(22),a(23),a(9),a(63)),S=a(849),j=a(812);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){(0,U.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=(0,u.vU)({title:{id:"chat.page_settings.title",defaultMessage:"Message Settings"},preferences:{id:"chat.page_settings.preferences",defaultMessage:"Preferences"},privacy:{id:"chat.page_settings.privacy",defaultMessage:"Privacy"},acceptingMessageLabel:{id:"chat.page_settings.accepting_messages.label",defaultMessage:"Allow users to start a new chat with you"},playSoundsLabel:{id:"chat.page_settings.play_sounds.label",defaultMessage:"Play a sound when you receive a message"},submit:{id:"chat.page_settings.submit",defaultMessage:"Save"}}),P=function(){var e=(0,d.Tr)(),t=(0,g.Z)(),n=(0,l.k6)(),o=(0,d.TL)(),u=(0,d.rV)(),m=(0,j.H)(),h=(0,c.useState)({chats_onboarded:!0,accepts_chat_messages:null==e?void 0:e.accepts_chat_messages}),f=(0,i.Z)(h,2),p=f[0],Z=f[1];return(0,s.Z)(r.Kq,{className:"h-full space-y-8 py-6 px-4 sm:p-6"},void 0,(0,s.Z)(r.Ug,{alignItems:"center"},void 0,(0,s.Z)(r.hU,{src:a(204),className:"mr-2 h-7 w-7 sm:mr-0 sm:hidden",onClick:function(){return n.push("/chats")}}),(0,s.Z)(r.ll,{title:t.formatMessage(E.title)})),(0,s.Z)(r.l0,{onSubmit:function(e){e.preventDefault(),m.mutate(p)}},void 0,(0,s.Z)(r.ll,{title:t.formatMessage(E.preferences)}),(0,s.Z)(v.Z,{},void 0,(0,s.Z)(v.H,{label:t.formatMessage(E.playSoundsLabel)},void 0,(0,s.Z)(S.Z,{settings:u,settingPath:["chats","sound"],onChange:function(e,t){o((0,D.oz)(e,t,{showAlert:!0}))}}))),(0,s.Z)(r.ll,{title:t.formatMessage(E.privacy)}),(0,s.Z)(r.eW,{},void 0,(0,s.Z)(v.Z,{},void 0,(0,s.Z)(v.H,{label:t.formatMessage(E.acceptingMessageLabel)},void 0,(0,s.Z)(r.ZD,{checked:p.accepts_chat_messages,onChange:function(e){return Z((function(t){return q(q({},t),{},{accepts_chat_messages:e.target.checked})}))}})))),(0,s.Z)(r.zx,{type:"submit",theme:"primary",disabled:m.isLoading},void 0,t.formatMessage(E.submit))))},H=a(1285),L=a(1300),z=(0,u.vU)({title:{id:"column.chats",defaultMessage:"Messages"}}),K=function(){var e=(0,g.Z)(),t=(0,l.k6)(),n=(0,d.hz)(),o=(0,c.useState)(""),u=(0,i.Z)(o,2),m=u[0],h=u[1],f=(0,d.Nr)(m,300);return(0,s.Z)(r.Kq,{space:4,className:"h-full"},void 0,(0,s.Z)(r.Kq,{space:4,className:"px-4 pt-6"},void 0,(0,s.Z)(r.Ug,{alignItems:"center",justifyContent:"between"},void 0,(0,s.Z)(r.ll,{title:e.formatMessage(z.title)}),(0,s.Z)(r.Ug,{space:1},void 0,(0,s.Z)(r.hU,{src:a(606),iconClassName:"h-5 w-5 text-gray-600",onClick:function(){t.push("/chats/settings")}}),(0,s.Z)(r.hU,{src:a(253),iconClassName:"h-5 w-5 text-gray-600",onClick:function(){t.push("/chats/new")}}))),n.chatsSearch&&(0,s.Z)(L.Z,{value:m,onChange:function(e){return h(e.target.value)},onClear:function(){return h("")}})),(0,s.Z)(r.Kq,{className:"h-full grow"},void 0,(0,s.Z)(H.Z,{onClickChat:function(e){t.push("/chats/".concat(e.id))},searchValue:f})))};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){(0,U.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=(0,u.vU)({title:{id:"chat.welcome.title",defaultMessage:"Welcome to {br} Chats!"},subtitle:{id:"chat.welcome.subtitle",defaultMessage:"Exchange direct messages with other users."},acceptingMessageLabel:{id:"chat.welcome.accepting_messages.label",defaultMessage:"Allow users to start a new chat with you"},notice:{id:"chat.welcome.notice",defaultMessage:"You can change these settings later."},submit:{id:"chat.welcome.submit",defaultMessage:"Save & Continue"}}),W=function(){var e=(0,d.Tr)(),t=(0,g.Z)(),a=(0,j.H)(),n=(0,c.useState)({chats_onboarded:!0,accepts_chat_messages:null==e?void 0:e.accepts_chat_messages}),o=(0,i.Z)(n,2),l=o[0],u=o[1];return(0,s.Z)(r.Kq,{className:"h-full overflow-y-auto py-20 px-4 sm:px-0","data-testid":"chats-welcome"},void 0,(0,s.Z)("div",{className:"mx-auto mb-2.5 w-full sm:w-3/5 xl:w-2/5"},void 0,(0,s.Z)(r.xv,{align:"center",weight:"bold",className:"mb-6 text-2xl leading-8 md:text-3xl"},void 0,t.formatMessage(A.title,{br:(0,s.Z)("br",{})})),(0,s.Z)(r.xv,{align:"center",theme:"muted"},void 0,t.formatMessage(A.subtitle))),(0,s.Z)(r.l0,{onSubmit:function(e){e.preventDefault(),a.mutate(l)},className:"w-full space-y-8 sm:mx-auto sm:w-2/3 lg:w-3/5"},void 0,(0,s.Z)(r.Kq,{space:2},void 0,(0,s.Z)(r.ll,{title:(0,s.Z)(w.Z,{id:"chat.page_settings.privacy",defaultMessage:"Privacy"})}),(0,s.Z)(r.eW,{},void 0,(0,s.Z)(v.Z,{},void 0,(0,s.Z)(v.H,{label:t.formatMessage(A.acceptingMessageLabel)},void 0,(0,s.Z)(r.ZD,{checked:l.accepts_chat_messages,onChange:function(e){return u((function(t){return R(R({},t),{},{accepts_chat_messages:e.target.checked})}))}}))))),(0,s.Z)(r.xv,{align:"center",theme:"muted"},void 0,t.formatMessage(A.notice)),(0,s.Z)(r.zx,{type:"submit",theme:"primary",block:!0,size:"lg",disabled:a.isLoading},void 0,t.formatMessage(A.submit))))},Y=function(e){e.chatId;var t=(0,d.Tr)(),a=(0,l.k6)(),n=null==t?void 0:t.chats_onboarded,u=a.location.pathname,g=(0,l.LX)(u,{path:["/chats/settings","/chats/new","/chats/:chatId"],exact:!0}),m=(0,c.useRef)(null),h=(0,c.useState)("100%"),f=(0,i.Z)(h,2),v=f[0],p=f[1],Z=function(){if(!m.current)return null;var e=m.current.getBoundingClientRect().top,t=document.body.offsetHeight,a=document.body.clientWidth<976?-61:0;p(t-e+a)};return(0,c.useLayoutEffect)((function(){Z()}),[m.current]),(0,c.useEffect)((function(){return window.addEventListener("resize",Z),function(){window.removeEventListener("resize",Z)}}),[]),c.createElement("div",{ref:m,style:{height:v},className:"h-screen overflow-hidden bg-white text-gray-900 shadow-lg dark:bg-primary-900 dark:text-gray-100 dark:shadow-none sm:rounded-t-xl"},n?(0,s.Z)("div",{className:"grid h-full grid-cols-9 overflow-hidden dark:divide-x-2 dark:divide-solid dark:divide-gray-800","data-testid":"chat-page"},void 0,(0,s.Z)(r.Kq,{className:(0,o.default)("dark:inset col-span-9 overflow-hidden bg-gradient-to-r from-white to-gray-100 dark:bg-gray-900 dark:bg-none sm:col-span-3",{"hidden sm:block":g})},void 0,(0,s.Z)(K,{})),(0,s.Z)(r.Kq,{className:(0,o.default)("col-span-9 h-full overflow-hidden sm:col-span-6",{"hidden sm:block":!g})},void 0,(0,s.Z)(l.rs,{},void 0,(0,s.Z)(l.AW,{path:"/chats/new"},void 0,(0,s.Z)(O,{})),(0,s.Z)(l.AW,{path:"/chats/settings"},void 0,(0,s.Z)(P,{})),(0,s.Z)(l.AW,{},void 0,(0,s.Z)(x,{}))))):(0,s.Z)(W,{}))},B=function(e){var t=e.params;return(0,s.Z)(n.aM,{},void 0,(0,s.Z)(Y,{chatId:null==t?void 0:t.chatId}))}}}]);
//# sourceMappingURL=chats-13f3632856745255df6c.chunk.js.map