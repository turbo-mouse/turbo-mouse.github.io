"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[77],{1400:function(a,e,t){t.r(e),t.d(e,{default:function(){return Y}});var f=t(2063),o=t(2049),r=t(2053),i=(t(49),t(4),t(7),t(0),t(25),t(48),t(935)),n=t(1),l=t(2064),s=t(2065),c=t(2083),d=t(2056),u=t(88),g=t(958),p=t(98),m=t(2),h=t(1504),b=t(3),v=t(56),Z=t(36),y=(0,l.vU)({ticker:{id:"soapbox_config.crypto_address.meta_fields.ticker_placeholder",defaultMessage:"Ticker"},address:{id:"soapbox_config.crypto_address.meta_fields.address_placeholder",defaultMessage:"Address"},note:{id:"soapbox_config.crypto_address.meta_fields.note_placeholder",defaultMessage:"Note (optional)"}}),_=function(a){var e=a.value,t=a.onChange,o=(0,s.Z)(),r=function(a){return function(f){t(e.set(a,f.currentTarget.value))}};return(0,f.Z)(m.Ug,{space:2,grow:!0},void 0,(0,f.Z)(m.II,{type:"text",outerClassName:"w-1/6 grow",value:e.ticker,onChange:r("ticker"),placeholder:o.formatMessage(y.ticker)}),(0,f.Z)(m.II,{type:"text",outerClassName:"w-3/6 grow",value:e.address,onChange:r("address"),placeholder:o.formatMessage(y.address)}),(0,f.Z)(m.II,{type:"text",outerClassName:"w-2/6 grow",value:e.note,onChange:r("note"),placeholder:o.formatMessage(y.note)}))},w=(0,l.vU)({label:{id:"soapbox_config.home_footer.meta_fields.label_placeholder",defaultMessage:"Label"},url:{id:"soapbox_config.home_footer.meta_fields.url_placeholder",defaultMessage:"URL"}}),x=function(a){var e=a.value,t=a.onChange,o=(0,s.Z)(),r=function(a){return function(f){t(e.set(a,f.currentTarget.value))}};return(0,f.Z)(m.Ug,{space:2,grow:!0},void 0,(0,f.Z)(m.II,{type:"text",outerClassName:"w-full grow",placeholder:o.formatMessage(w.label),value:e.title,onChange:r("title")}),(0,f.Z)(m.II,{type:"text",outerClassName:"w-full grow",placeholder:o.formatMessage(w.url),value:e.url,onChange:r("url")}))},M=t(652),k=t.n(M),C=t(1018),I=(t(12),t(13),t(10),t(20),t(22),t(23),t(9),t(2047)),L=(t(8),t(6),t(18),t(5),t(751),t(752),t(153),t(661)),N=t(2075);function S(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);e&&(f=f.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,f)}return t}function P(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){(0,I.Z)(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}var j=(0,l.vU)({emoji:{id:"icon_button.label",defaultMessage:"Select icon"}}),O=!!N.FX&&{passive:!0},E=function(a){var e=a.icons,t=a.onClose,o=a.onPick,r=a.style,i=(0,s.Z)(),l=(0,n.useRef)(null),d=(0,n.useCallback)((function(a){l.current&&!l.current.contains(a.target)&&t()}),[]);(0,n.useEffect)((function(){return document.addEventListener("click",d,!1),document.addEventListener("touchend",d,O),function(){document.removeEventListener("click",d,!1),document.removeEventListener("touchend",d,O)}}),[]);var u=i.formatMessage(j.emoji);return n.createElement("div",{className:(0,L.default)("absolute z-[101] -my-0.5"),style:P({transform:"translateX(calc(-1 * env(safe-area-inset-right)))"},r),ref:function(a){l.current=a,a&&a.querySelectorAll("button.emoji-mart-emoji > img").forEach((function(a){var e=document.createElement("span");e.innerHTML='<i class="fa fa-'.concat(a.parentNode.getAttribute("title"),' fa-hack"></i>'),a.parentNode.replaceChild(e,a)}))}},(0,f.Z)("div",{className:"h-[270px] overflow-x-hidden overflow-y-scroll rounded bg-white p-1.5 text-gray-900 dark:bg-primary-900 dark:text-gray-100","aria-label":u},void 0,(0,f.Z)(m.xv,{className:"px-1.5 py-1"},void 0,(0,f.Z)(c.Z,{id:"icon_button.icons",defaultMessage:"Icons"})),(0,f.Z)("ul",{className:"grid grid-cols-8"},void 0,Object.values(e).flat().map((function(a){return function(a){var e=a.replace("fa fa-","");return(0,f.Z)("li",{className:"col-span-1 inline-block"},a,(0,f.Z)("button",{className:"flex items-center justify-center rounded-full p-1.5 hover:bg-gray-50 dark:hover:bg-primary-800","aria-label":e,title:e,onClick:function(){return function(a){t(),o(a)}(e)}},void 0,(0,f.Z)("i",{className:(0,L.default)(a,"h-[1.375rem] w-[1.375rem] text-lg leading-[1.15]")})))}(a)})))))},q=(0,l.vU)({emoji:{id:"icon_button.label",defaultMessage:"Select icon"}}),A=function(a){var e=a.value,o=a.onPickIcon,i=(0,s.Z)(),l=(0,n.useState)(!1),c=(0,r.Z)(l,2),d=c[0],u=c[1],g=(0,n.useState)(),p=(0,r.Z)(g,2),m=p[0],h=p[1],b=(0,n.useRef)(null),v=function(){u(!1)},Z=function(a){a.stopPropagation(),a.key&&"Enter"!==a.key||(d?v():function(a){var e=a.target;u(!0);var t=e.getBoundingClientRect().top;h(2*t<innerHeight?"bottom":"top")}(a))},y=i.formatMessage(q.emoji),_=t(1512);return(0,f.Z)("div",{onKeyDown:function(a){"Escape"===a.key&&v()}},void 0,n.createElement("div",{ref:b,className:"flex h-[38px] w-[38px] cursor-pointer items-center justify-center text-lg",title:y,"aria-label":y,"aria-expanded":d,role:"button",onClick:Z,onKeyDown:Z,tabIndex:0},(0,f.Z)(C.Z,{id:e})),(0,f.Z)(k(),{show:d,placement:m,target:b.current},void 0,(0,f.Z)(E,{icons:_,onClose:v,onPick:o})))},D=function(a){var e=a.value,t=a.onChange;return(0,f.Z)("div",{className:"relative mt-1 rounded-md border border-solid border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800"},void 0,(0,f.Z)(A,{value:e,onPickIcon:t}))},H=(0,l.vU)({icon:{id:"soapbox_config.promo_panel.meta_fields.icon_placeholder",defaultMessage:"Icon"},label:{id:"soapbox_config.promo_panel.meta_fields.label_placeholder",defaultMessage:"Label"},url:{id:"soapbox_config.promo_panel.meta_fields.url_placeholder",defaultMessage:"URL"}}),T=function(a){var e=a.value,t=a.onChange,o=(0,s.Z)(),r=function(a){return function(f){t(e.set(a,f.currentTarget.value))}};return(0,f.Z)(m.Ug,{space:2,alignItems:"center",grow:!0},void 0,(0,f.Z)(D,{value:e.icon,onChange:function(a){t(e.set("icon",a))}}),(0,f.Z)(m.II,{type:"text",outerClassName:"w-full grow",placeholder:o.formatMessage(H.label),value:e.text,onChange:r("text")}),(0,f.Z)(m.II,{type:"text",outerClassName:"w-full grow",placeholder:o.formatMessage(H.url),value:e.url,onChange:r("url")}))},R=t(63),F=t(228),J=t(2104),U=t(573),z=function(a){var e=a.soapbox,t=(0,n.useMemo)((function(){return(0,v.lN)(e)}),[e]),o=R.he.mergeDeep(t.defaultSettings).get("themeMode"),r=(0,b.K4)(),i="dark"===o||"system"===o&&"dark"===r,l=(0,L.default)("site-preview","align-center relative flex justify-center text-base","border border-solid border-gray-200 dark:border-gray-600","h-40 overflow-hidden rounded-lg",{"bg-white":!i,"bg-gray-900":i});return(0,f.Z)("div",{className:l},void 0,(0,f.Z)("style",{},void 0,".site-preview {".concat((0,U.Co)(t),"}")),(0,f.Z)(J.Z,{position:"absolute"}),(0,f.Z)("div",{className:"absolute z-20 self-center overflow-hidden rounded-lg bg-accent-500 p-2 text-white"},void 0,(0,f.Z)(c.Z,{id:"site_preview.preview",defaultMessage:"Preview"})),(0,f.Z)("div",{className:(0,L.default)("absolute inset-0 z-10 flex h-12 shadow lg:h-16",{"bg-white":!i,"bg-gray-800":i})},void 0,(0,f.Z)(F.Z,{alt:"Logo",className:"h-5 w-auto self-center px-2 lg:h-6",theme:i?"dark":"light"})))},G=(0,l.vU)({heading:{id:"column.soapbox_config",defaultMessage:"Soapbox config"},saved:{id:"soapbox_config.saved",defaultMessage:"Soapbox config saved!"},copyrightFooterLabel:{id:"soapbox_config.copyright_footer.meta_fields.label_placeholder",defaultMessage:"Copyright footer"},cryptoDonatePanelLimitLabel:{id:"soapbox_config.crypto_donate_panel_limit.meta_fields.limit_placeholder",defaultMessage:"Number of items to display in the crypto homepage widget"},customCssLabel:{id:"soapbox_config.custom_css.meta_fields.url_placeholder",defaultMessage:"URL"},rawJSONLabel:{id:"soapbox_config.raw_json_label",defaultMessage:"Advanced: Edit raw JSON data"},rawJSONHint:{id:"soapbox_config.raw_json_hint",defaultMessage:'Edit the settings data directly. Changes made directly to the JSON file will override the form fields above. Click "Save" to apply your changes.'},rawJSONInvalid:{id:"soapbox_config.raw_json_invalid",defaultMessage:"is invalid"},verifiedCanEditNameLabel:{id:"soapbox_config.verified_can_edit_name_label",defaultMessage:"Allow verified users to edit their own display name."},displayFqnLabel:{id:"soapbox_config.display_fqn_label",defaultMessage:"Display domain (eg @user@domain) for local accounts."},greentextLabel:{id:"soapbox_config.greentext_label",defaultMessage:"Enable greentext support"},promoPanelIconsLink:{id:"soapbox_config.hints.promo_panel_icons.link",defaultMessage:"Soapbox Icons List"},authenticatedProfileLabel:{id:"soapbox_config.authenticated_profile_label",defaultMessage:"Profiles require authentication"},authenticatedProfileHint:{id:"soapbox_config.authenticated_profile_hint",defaultMessage:"Users must be logged-in to view replies and media on user profiles."},displayCtaLabel:{id:"soapbox_config.cta_label",defaultMessage:"Display call to action panels if not authenticated"},mediaPreviewLabel:{id:"soapbox_config.media_preview_label",defaultMessage:"Prefer preview media for thumbnails"},mediaPreviewHint:{id:"soapbox_config.media_preview_hint",defaultMessage:"Some backends provide an optimized version of media for display in timelines. However, these preview images may be too small without additional configuration."},feedInjectionLabel:{id:"soapbox_config.feed_injection_label",defaultMessage:"Feed injection"},feedInjectionHint:{id:"soapbox_config.feed_injection_hint",defaultMessage:"Inject the feed with additional content, such as suggested profiles."},tileServerLabel:{id:"soapbox_config.tile_server_label",defaultMessage:"Map tile server"},tileServerAttributionLabel:{id:"soapbox_config.tile_server_attribution_label",defaultMessage:"Map tiles attribution"},redirectRootNoLoginLabel:{id:"soapbox_config.redirect_root_no_login_label",defaultMessage:"Redirect homepage"},redirectRootNoLoginHint:{id:"soapbox_config.redirect_root_no_login_hint",defaultMessage:"Path to redirect the homepage when a user is not logged in."}}),K={promoPanelItem:(0,i.Map)({icon:"",text:"",url:""}),footerItem:(0,i.Map)({title:"",url:""}),cryptoAddress:(0,i.Map)({ticker:"",address:"",note:""})},Y=function(){var a,e,t=(0,s.Z)(),l=(0,d.k6)(),y=(0,b.TL)(),w=(0,b.hz)(),M=(0,b.CG)((function(a){return a.soapbox})),k=(0,n.useState)(!1),C=(0,r.Z)(k,2),I=C[0],L=C[1],N=(0,n.useState)(M),S=(0,r.Z)(N,2),P=S[0],j=S[1],O=(0,n.useState)(!1),E=(0,r.Z)(O,2),q=E[0],A=E[1],D=(0,n.useState)(JSON.stringify(M,null,2)),H=(0,r.Z)(D,2),R=H[0],F=H[1],J=(0,n.useState)(!0),U=(0,r.Z)(J,2),Y=U[0],B=U[1],V=(0,n.useMemo)((function(){return(0,v.lN)(P)}),[P]),W=function(a,e){var t=P.setIn(a,e);j(t),B(!0)},X=function(a){j(a),B(!0)},Q=function(a,e){return function(t){W(a,e(t))}},$=function(a){return function(e){W(a,(0,i.List)(e))}},aa=function(a,e){return function(){var t=P.getIn(a)||(0,i.List)();W(a,t.push(e))}},ea=function(a){return function(e){var t=P.deleteIn([].concat((0,o.Z)(a),[e]));j(t)}};return(0,n.useEffect)((function(){X(M)}),[M]),(0,n.useEffect)((function(){F(JSON.stringify(P,null,2))}),[P]),(0,n.useEffect)((function(){try{var a=(0,i.fromJS)(JSON.parse(R));X(a)}catch(a){B(!1)}}),[R]),(0,f.Z)(m.sg,{label:t.formatMessage(G.heading)},void 0,(0,f.Z)(m.l0,{onSubmit:function(a){y((0,u.Yl)(P.toJS())).then((function(){L(!1),Z.Z.success(t.formatMessage(G.saved))})).catch((function(){L(!1)})),L(!0),a.preventDefault()}},void 0,(0,f.Z)("fieldset",{className:"space-y-6",disabled:I},void 0,(0,f.Z)(z,{soapbox:V}),(0,f.Z)(m.cw,{labelText:(0,f.Z)(c.Z,{id:"soapbox_config.fields.logo_label",defaultMessage:"Logo"}),hintText:(0,f.Z)(c.Z,{id:"soapbox_config.hints.logo",defaultMessage:"SVG. At most 2 MB. Will be displayed to 50px height, maintaining aspect ratio"})},void 0,(0,f.Z)(m.S2,{onChange:(e=["logo"],function(a){var t,f=new FormData,o=null===(t=a.target.files)||void 0===t?void 0:t.item(0);o&&(f.append("file",o),y((0,g.$i)(f)).then((function(t){var f=t.data;Q(e,(function(){return f.url}))(a)})).catch(console.error))}),accept:"image/svg+xml,image/png"})),(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.theme",defaultMessage:"Theme"})})),(0,f.Z)(p.Z,{},void 0,(0,f.Z)(p.H,{label:(0,f.Z)(c.Z,{id:"soapbox_config.fields.theme_label",defaultMessage:"Default theme"})},void 0,(0,f.Z)(h.Z,{value:V.defaultSettings.get("themeMode"),onChange:function(a){return function(e){W(a,e)}}(["defaultSettings","themeMode"])})),(0,f.Z)(p.H,{label:(0,f.Z)(c.Z,{id:"soapbox_config.fields.edit_theme_label",defaultMessage:"Edit theme"}),onClick:function(){return l.push("/soapbox/admin/theme")}})),(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.options",defaultMessage:"Options"})})),(0,f.Z)(p.Z,{},void 0,(0,f.Z)(p.H,{label:t.formatMessage(G.verifiedCanEditNameLabel)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.verifiedCanEditName,onChange:Q(["verifiedCanEditName"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.displayFqnLabel)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.displayFqn,onChange:Q(["displayFqn"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.greentextLabel)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.greentext,onChange:Q(["greentext"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.feedInjectionLabel),hint:t.formatMessage(G.feedInjectionHint)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.feedInjection,onChange:Q(["feedInjection"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.mediaPreviewLabel),hint:t.formatMessage(G.mediaPreviewHint)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.mediaPreview,onChange:Q(["mediaPreview"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.displayCtaLabel)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.displayCta,onChange:Q(["displayCta"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.authenticatedProfileLabel),hint:t.formatMessage(G.authenticatedProfileHint)},void 0,(0,f.Z)(m.ZD,{checked:!0===V.authenticatedProfile,onChange:Q(["authenticatedProfile"],(function(a){return a.target.checked}))})),(0,f.Z)(p.H,{label:t.formatMessage(G.redirectRootNoLoginLabel),hint:t.formatMessage(G.redirectRootNoLoginHint)},void 0,(0,f.Z)(m.II,{type:"text",placeholder:"/timeline/local",value:String(P.get("redirectRootNoLogin","")),onChange:Q(["redirectRootNoLogin"],(function(a){return a.target.value}))}))),(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.navigation",defaultMessage:"Navigation"})})),(0,f.Z)(m.uc,{label:(0,f.Z)(c.Z,{id:"soapbox_config.fields.promo_panel_fields_label",defaultMessage:"Promo panel items"}),hint:(0,f.Z)(c.Z,{id:"soapbox_config.hints.promo_panel_fields",defaultMessage:"You can have custom defined links displayed on the right panel of the timelines page."}),component:T,values:V.promoPanel.items.toArray(),onChange:$(["promoPanel","items"]),onAddItem:aa(["promoPanel","items"],K.promoPanel),onRemoveItem:ea(["promoPanel","items"])}),(0,f.Z)(m.uc,{label:(0,f.Z)(c.Z,{id:"soapbox_config.fields.home_footer_fields_label",defaultMessage:"Home footer items"}),hint:(0,f.Z)(c.Z,{id:"soapbox_config.hints.home_footer_fields",defaultMessage:"You can have custom defined links displayed on the footer of your static pages"}),component:x,values:(null===(a=V.navlinks.get("homeFooter"))||void 0===a?void 0:a.toArray())||[],onChange:$(["navlinks","homeFooter"]),onAddItem:aa(["navlinks","homeFooter"],K.footerItem),onRemoveItem:ea(["navlinks","homeFooter"])}),(0,f.Z)(m.cw,{labelText:t.formatMessage(G.copyrightFooterLabel)},void 0,(0,f.Z)(m.II,{type:"text",placeholder:t.formatMessage(G.copyrightFooterLabel),value:V.copyright,onChange:Q(["copyright"],(function(a){return a.target.value}))})),w.events&&n.createElement(n.Fragment,null,(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.events",defaultMessage:"Events"})})),(0,f.Z)(m.cw,{labelText:t.formatMessage(G.tileServerLabel)},void 0,(0,f.Z)(m.II,{type:"text",placeholder:t.formatMessage(G.tileServerLabel),value:V.tileServer,onChange:Q(["tileServer"],(function(a){return a.target.value}))})),(0,f.Z)(m.cw,{labelText:t.formatMessage(G.tileServerAttributionLabel)},void 0,(0,f.Z)(m.II,{type:"text",placeholder:t.formatMessage(G.tileServerAttributionLabel),value:V.tileServerAttribution,onChange:Q(["tileServerAttribution"],(function(a){return a.target.value}))}))),(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.cryptocurrency",defaultMessage:"Cryptocurrency"})})),(0,f.Z)(m.uc,{label:(0,f.Z)(c.Z,{id:"soapbox_config.fields.crypto_addresses_label",defaultMessage:"Cryptocurrency addresses"}),hint:(0,f.Z)(c.Z,{id:"soapbox_config.hints.crypto_addresses",defaultMessage:"Add cryptocurrency addresses so users of your site can donate to you. Order matters, and you must use lowercase ticker values."}),component:_,values:V.cryptoAddresses.toArray(),onChange:$(["cryptoAddresses"]),onAddItem:aa(["cryptoAddresses"],K.cryptoAddress),onRemoveItem:ea(["cryptoAddresses"])}),(0,f.Z)(m.cw,{labelText:t.formatMessage(G.cryptoDonatePanelLimitLabel)},void 0,(0,f.Z)(m.II,{type:"number",min:0,pattern:"[0-9]+",placeholder:t.formatMessage(G.cryptoDonatePanelLimitLabel),value:V.cryptoDonatePanel.get("limit"),onChange:Q(["cryptoDonatePanel","limit"],(function(a){return Number(a.target.value)}))})),(0,f.Z)(m.Ol,{},void 0,(0,f.Z)(m.ll,{title:(0,f.Z)(c.Z,{id:"soapbox_config.headings.advanced",defaultMessage:"Advanced"})})),(0,f.Z)(m.UQ,{headline:t.formatMessage(G.rawJSONLabel),expanded:q,onToggle:function(a){return A(a)}},void 0,(0,f.Z)(m.cw,{hintText:t.formatMessage(G.rawJSONHint),errors:Y?void 0:[t.formatMessage(G.rawJSONInvalid)]},void 0,(0,f.Z)(m.gx,{value:R,onChange:function(a){F(a.target.value)},isCodeEditor:!0,rows:12})))),(0,f.Z)(m.iN,{},void 0,(0,f.Z)(m.zx,{type:"submit"},void 0,(0,f.Z)(c.Z,{id:"soapbox_config.save",defaultMessage:"Save"})))))}},1512:function(a){a.exports=JSON.parse('{"Web Application Icons":["fa fa-music","fa fa-search","fa fa-heart","fa fa-star","fa fa-user","fa fa-film","fa fa-check","fa fa-times","fa fa-search-plus","fa fa-search-minus","fa fa-power-off","fa fa-signal","fa fa-cog","fa fa-home","fa fa-road","fa fa-download","fa fa-inbox","fa fa-lock","fa fa-flag","fa fa-headphones","fa fa-volume-off","fa fa-volume-down","fa fa-volume-up","fa fa-qrcode","fa fa-barcode","fa fa-tag","fa fa-tags","fa fa-book","fa fa-bookmark","fa fa-print","fa fa-camera","fa fa-map-marker","fa fa-adjust","fa fa-tint","fa fa-plus-circle","fa fa-minus-circle","fa fa-times-circle","fa fa-check-circle","fa fa-question-circle","fa fa-info-circle","fa fa-crosshairs","fa fa-ban","fa fa-share","fa fa-plus","fa fa-minus","fa fa-asterisk","fa fa-exclamation-circle","fa fa-gift","fa fa-leaf","fa fa-fire","fa fa-eye","fa fa-eye-slash","fa fa-exclamation-triangle","fa fa-plane","fa fa-calendar","fa fa-random","fa fa-comment","fa fa-magnet","fa fa-retweet","fa fa-shopping-cart","fa fa-folder","fa fa-folder-open","fa fa-chart-bar","fa fa-camera-retro","fa fa-key","fa fa-cogs","fa fa-comments","fa fa-star-half","fa fa-thumbtack","fa fa-external-link-alt","fa fa-trophy","fa fa-upload","fa fa-phone","fa fa-phone-square","fa fa-unlock","fa fa-credit-card","fa fa-rss","fa fa-bullhorn","fa fa-certificate","fa fa-globe","fa fa-wrench","fa fa-tasks","fa fa-filter","fa fa-briefcase","fa fa-users","fa fa-cloud","fa fa-flask","fa fa-square","fa fa-bars","fa fa-magic","fa fa-truck","fa fa-sort","fa fa-envelope","fa fa-gavel","fa fa-bolt","fa fa-sitemap","fa fa-umbrella","fa fa-cloud-download-alt","fa fa-cloud-upload-alt","fa fa-suitcase","fa fa-bell","fa fa-coffee","fa fa-fighter-jet","fa fa-beer","fa fa-desktop","fa fa-laptop","fa fa-tablet","fa fa-mobile","fa fa-quote-left","fa fa-quote-right","fa fa-spinner","fa fa-circle","fa fa-reply","fa fa-gamepad","fa fa-flag-checkered","fa fa-terminal","fa fa-code","fa fa-reply-all","fa fa-location-arrow","fa fa-crop","fa fa-question","fa fa-info","fa fa-exclamation","fa fa-puzzle-piece","fa fa-microphone","fa fa-microphone-slash","fa fa-fire-extinguisher","fa fa-rocket","fa fa-anchor","fa fa-unlock-alt","fa fa-bullseye","fa fa-ellipsis-h","fa fa-ellipsis-v","fa fa-rss-square","fa fa-minus-square","fa fa-check-square","fa fa-external-link-square-alt","fa fa-share-square","fa fa-compass","fa fa-thumbs-up","fa fa-thumbs-down","fa fa-female","fa fa-male","fa fa-archive","fa fa-bug","fa fa-wheelchair","fa fa-space-shuttle","fa fa-envelope-square","fa fa-university","fa fa-graduation-cap","fa fa-language","fa fa-fax","fa fa-building","fa fa-child","fa fa-paw","fa fa-cube","fa fa-cubes","fa fa-recycle","fa fa-car","fa fa-taxi","fa fa-tree","fa fa-database","fa fa-life-ring","fa fa-paper-plane","fa fa-history","fa fa-share-alt","fa fa-share-alt-square","fa fa-bomb","fa fa-tty","fa fa-binoculars","fa fa-plug","fa fa-wifi","fa fa-calculator","fa fa-bell-slash","fa fa-trash","fa fa-copyright","fa fa-at","fa fa-paint-brush","fa fa-birthday-cake","fa fa-chart-area","fa fa-chart-pie","fa fa-chart-line","fa fa-toggle-off","fa fa-toggle-on","fa fa-bicycle","fa fa-bus","fa fa-cart-plus","fa fa-cart-arrow-down","fa fa-ship","fa fa-user-secret","fa fa-motorcycle","fa fa-street-view","fa fa-heartbeat","fa fa-server","fa fa-user-plus","fa fa-user-times","fa fa-bed","fa fa-battery-full","fa fa-battery-three-quarters","fa fa-battery-half","fa fa-battery-quarter","fa fa-battery-empty","fa fa-mouse-pointer","fa fa-i-cursor","fa fa-object-group","fa fa-object-ungroup","fa fa-sticky-note","fa fa-clone","fa fa-balance-scale","fa fa-hourglass-start","fa fa-hourglass-half","fa fa-hourglass-end","fa fa-hourglass","fa fa-trademark","fa fa-registered","fa fa-industry","fa fa-map-pin","fa fa-map-signs","fa fa-map","fa fa-shopping-bag","fa fa-shopping-basket","fa fa-hashtag","fa fa-percent","fa fa-universal-access","fa fa-blind","fa fa-audio-description","fa fa-braille","fa fa-assistive-listening-systems","fa fa-american-sign-language-interpreting","fa fa-deaf","fa fa-sign-language","fa fa-low-vision","fa fa-envelope-open","fa fa-address-book","fa fa-address-card","fa fa-user-circle","fa fa-id-badge","fa fa-id-card","fa fa-thermometer-full","fa fa-thermometer-three-quarters","fa fa-thermometer-half","fa fa-thermometer-quarter","fa fa-thermometer-empty","fa fa-shower","fa fa-bath","fa fa-podcast","fa fa-window-maximize","fa fa-window-minimize","fa fa-window-restore","fa fa-window-close","fa fa-microchip","fa fa-spell-check","fa fa-moon","fa fa-sun"],"Text Editor Icons":["fa fa-th-large","fa fa-th","fa fa-th-list","fa fa-list-alt","fa fa-font","fa fa-bold","fa fa-italic","fa fa-text-height","fa fa-text-width","fa fa-align-left","fa fa-align-center","fa fa-align-right","fa fa-align-justify","fa fa-list","fa fa-outdent","fa fa-indent","fa fa-link","fa fa-paperclip","fa fa-list-ul","fa fa-list-ol","fa fa-strikethrough","fa fa-underline","fa fa-table","fa fa-columns","fa fa-undo","fa fa-clipboard","fa fa-superscript","fa fa-subscript","fa fa-eraser","fa fa-file","fa fa-paragraph"],"Directional Icons":["fa fa-chevron-left","fa fa-chevron-right","fa fa-arrow-left","fa fa-arrow-right","fa fa-arrow-up","fa fa-arrow-down","fa fa-chevron-up","fa fa-chevron-down","fa fa-arrow-circle-left","fa fa-arrow-circle-right","fa fa-arrow-circle-up","fa fa-arrow-circle-down","fa fa-caret-down","fa fa-caret-up","fa fa-caret-left","fa fa-caret-right","fa fa-angle-double-left","fa fa-angle-double-right","fa fa-angle-double-up","fa fa-angle-double-down","fa fa-angle-left","fa fa-angle-right","fa fa-angle-up","fa fa-angle-down","fa fa-chevron-circle-left","fa fa-chevron-circle-right","fa fa-chevron-circle-up","fa fa-chevron-circle-down"],"Video Player Icons":["fa fa-step-backward","fa fa-fast-backward","fa fa-backward","fa fa-play","fa fa-pause","fa fa-stop","fa fa-forward","fa fa-fast-forward","fa fa-step-forward","fa fa-eject","fa fa-expand","fa fa-compress","fa fa-arrows-alt","fa fa-play-circle","fa fa-pause-circle","fa fa-stop-circle"],"Medical Icons":["fa fa-user-md","fa fa-stethoscope","fa fa-ambulance","fa fa-medkit","fa fa-h-square","fa fa-plus-square"],"Gender Icons":["fa fa-venus","fa fa-mars","fa fa-mercury","fa fa-transgender","fa fa-transgender-alt","fa fa-venus-double","fa fa-mars-double","fa fa-venus-mars","fa fa-mars-stroke","fa fa-mars-stroke-v","fa fa-mars-stroke-h","fa fa-neuter","fa fa-genderless"],"Transportation Icons":["fa fa-train","fa fa-subway"]}')}}]);
//# sourceMappingURL=soapbox_config-384a53987bb4c2b24a19.chunk.js.map