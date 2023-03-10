"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[73],{1403:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var o=a(2063),s=a(2053),r=a(1),i=a(2064),n=a(2065),d=a(634),c=a(2),u=a(3),l=(a(0),a(25),a(226),a(4),a(2083)),f=a(2056),m=a(36),p=(0,i.vU)({mfa_setup_disable_button:{id:"column.mfa_disable_button",defaultMessage:"Disable"},disableFail:{id:"security.disable.fail",defaultMessage:"Incorrect password. Try again."},mfaDisableSuccess:{id:"mfa.disable.success_message",defaultMessage:"MFA disabled"},passwordPlaceholder:{id:"mfa.mfa_setup.password_placeholder",defaultMessage:"Password"}}),g=function(){var e=(0,r.useState)(!1),t=(0,s.Z)(e,2),a=t[0],i=t[1],g=(0,r.useState)(""),h=(0,s.Z)(g,2),Z=h[0],v=h[1],b=(0,n.Z)(),y=(0,u.TL)(),w=(0,f.k6)(),M=(0,r.useCallback)((function(){i(!0),y((0,d.B2)("totp",Z)).then((function(){m.Z.success(b.formatMessage(p.mfaDisableSuccess)),w.push("../auth/edit")})).finally((function(){i(!1)})).catch((function(){m.Z.error(b.formatMessage(p.disableFail))}))}),[Z,y,b]);return(0,o.Z)(c.l0,{onSubmit:M},void 0,(0,o.Z)(c.Kq,{},void 0,(0,o.Z)(c.xv,{weight:"medium"},void 0,(0,o.Z)(l.Z,{id:"mfa.otp_enabled_title",defaultMessage:"OTP Enabled"})),(0,o.Z)(c.xv,{theme:"muted"},void 0,(0,o.Z)(l.Z,{id:"mfa.otp_enabled_description",defaultMessage:"You have enabled two-factor authentication via OTP."}))),(0,o.Z)(c.cw,{labelText:b.formatMessage(p.passwordPlaceholder),hintText:(0,o.Z)(l.Z,{id:"mfa.mfa_disable_enter_password",defaultMessage:"Enter your current password to disable two-factor auth."})},void 0,(0,o.Z)(c.II,{type:"password",placeholder:b.formatMessage(p.passwordPlaceholder),name:"password",onChange:function(e){v(e.target.value)},disabled:a,value:Z,required:!0})),(0,o.Z)(c.iN,{},void 0,(0,o.Z)(c.zx,{disabled:a,theme:"danger",type:"submit",text:b.formatMessage(p.mfa_setup_disable_button)})))},h=(a(5),(0,i.vU)({mfaCancelButton:{id:"column.mfa_cancel",defaultMessage:"Cancel"},mfaSetupButton:{id:"column.mfa_setup",defaultMessage:"Proceed to Setup"},codesFail:{id:"security.codes.fail",defaultMessage:"Failed to fetch backup codes"}})),Z=function(e){var t=e.displayOtpForm,a=e.handleSetupProceedClick,i=(0,u.TL)(),p=(0,n.Z)(),g=(0,f.k6)(),Z=(0,r.useState)([]),v=(0,s.Z)(Z,2),b=v[0],y=v[1];return(0,r.useEffect)((function(){i((0,d.uD)()).then((function(e){var t=e.codes;y(t)})).catch((function(){m.Z.error(p.formatMessage(h.codesFail))}))}),[]),(0,o.Z)(c.Kq,{space:4},void 0,(0,o.Z)(c.Kq,{space:4},void 0,(0,o.Z)(c.xv,{theme:"muted"},void 0,(0,o.Z)(l.Z,{id:"mfa.setup_warning",defaultMessage:"Write these codes down or save them somewhere secure - otherwise you won't see them again. If you lose access to your 2FA app and recovery codes you'll be locked out of your account."})),(0,o.Z)("div",{className:"rounded-lg border-2 border-solid border-gray-200 p-4 dark:border-gray-800"},void 0,(0,o.Z)(c.Kq,{space:3},void 0,(0,o.Z)(c.xv,{weight:"medium",align:"center"},void 0,(0,o.Z)(l.Z,{id:"mfa.setup_recoverycodes",defaultMessage:"Recovery codes"})),b.length>0?(0,o.Z)("div",{className:"grid grid-cols-2 gap-3 rounded-lg text-center"},void 0,b.map((function(e,t){return(0,o.Z)(c.xv,{theme:"muted",size:"sm"},t,e)}))):(0,o.Z)(c.$j,{})))),!t&&(0,o.Z)(c.iN,{},void 0,(0,o.Z)(c.zx,{theme:"tertiary",text:p.formatMessage(h.mfaCancelButton),onClick:function(){return g.push("../auth/edit")}}),b.length>0&&(0,o.Z)(c.zx,{theme:"primary",text:p.formatMessage(h.mfaSetupButton),onClick:a})))},v=(a(12),a(13),a(10),a(20),a(8),a(22),a(23),a(9),a(2047)),b=a(1019);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){(0,v.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=(0,i.vU)({mfaCancelButton:{id:"column.mfa_cancel",defaultMessage:"Cancel"},mfaSetupConfirmButton:{id:"column.mfa_confirm_button",defaultMessage:"Confirm"},confirmFail:{id:"security.confirm.fail",defaultMessage:"Incorrect code or password. Try again."},qrFail:{id:"security.qr.fail",defaultMessage:"Failed to fetch setup key"},mfaConfirmSuccess:{id:"mfa.confirm.success_message",defaultMessage:"MFA confirmed"},codePlaceholder:{id:"mfa.mfa_setup.code_placeholder",defaultMessage:"Code"},passwordPlaceholder:{id:"mfa.mfa_setup.password_placeholder",defaultMessage:"Password"}}),_=function(){var e=(0,n.Z)(),t=(0,f.k6)(),a=(0,u.TL)(),i=(0,r.useState)({password:"",isLoading:!1,code:"",qrCodeURI:"",confirmKey:""}),p=(0,s.Z)(i,2),g=p[0],h=p[1];(0,r.useEffect)((function(){a((0,d.oJ)("totp")).then((function(e){h((function(t){return w(w({},t),{},{qrCodeURI:e.provisioning_uri,confirmKey:e.key})}))})).catch((function(){m.Z.error(e.formatMessage(M.qrFail))}))}),[]);var Z=(0,r.useCallback)((function(e){e.persist(),h((function(t){return w(w({},t),{},(0,v.Z)({},e.target.name,e.target.value))}))}),[]);return(0,o.Z)(c.Kq,{space:4},void 0,(0,o.Z)(c.l0,{onSubmit:function(o){h((function(e){return w(w({},e),{},{isLoading:!0})})),a((0,d.iO)("totp",g.code,g.password)).then((function(a){m.Z.success(e.formatMessage(M.mfaConfirmSuccess)),t.push("../auth/edit")})).catch((function(){m.Z.error(e.formatMessage(M.confirmFail)),h((function(e){return w(w({},e),{},{isLoading:!1})}))})),o.preventDefault()}},void 0,(0,o.Z)(c.Kq,{},void 0,(0,o.Z)(c.xv,{weight:"semibold",size:"lg"},void 0,"1. ",(0,o.Z)(l.Z,{id:"mfa.mfa_setup_scan_title",defaultMessage:"Scan"})),(0,o.Z)(c.xv,{theme:"muted"},void 0,(0,o.Z)(l.Z,{id:"mfa.mfa_setup_scan_description",defaultMessage:"Using your two-factor app, scan this QR code or enter the text key."}))),(0,o.Z)(b.Qd,{className:"rounded-lg",value:g.qrCodeURI,includeMargin:!0}),g.confirmKey,(0,o.Z)(c.xv,{weight:"semibold",size:"lg"},void 0,"2. ",(0,o.Z)(l.Z,{id:"mfa.mfa_setup_verify_title",defaultMessage:"Verify"})),(0,o.Z)(c.cw,{labelText:e.formatMessage(M.codePlaceholder),hintText:(0,o.Z)(l.Z,{id:"mfa.mfa_setup.code_hint",defaultMessage:"Enter the code from your two-factor app."})},void 0,(0,o.Z)(c.II,{name:"code",placeholder:e.formatMessage(M.codePlaceholder),onChange:Z,autoComplete:"off",disabled:g.isLoading,value:g.code,type:"text",required:!0})),(0,o.Z)(c.cw,{labelText:e.formatMessage(M.passwordPlaceholder),hintText:(0,o.Z)(l.Z,{id:"mfa.mfa_setup.password_hint",defaultMessage:"Enter your current password to confirm your identity."})},void 0,(0,o.Z)(c.II,{type:"password",name:"password",placeholder:e.formatMessage(M.passwordPlaceholder),onChange:Z,disabled:g.isLoading,value:g.password,required:!0})),(0,o.Z)(c.iN,{},void 0,(0,o.Z)(c.zx,{type:"button",theme:"tertiary",text:e.formatMessage(M.mfaCancelButton),onClick:function(){return t.push("../auth/edit")},disabled:g.isLoading}),(0,o.Z)(c.zx,{type:"submit",theme:"primary",text:e.formatMessage(M.mfaSetupConfirmButton),disabled:g.isLoading}))))},x=(0,i.vU)({heading:{id:"column.mfa",defaultMessage:"Multi-Factor Authentication"}}),C=function(){var e=(0,n.Z)(),t=(0,u.TL)(),a=(0,r.useState)(!1),i=(0,s.Z)(a,2),l=i[0],f=i[1];(0,r.useEffect)((function(){t((0,d.PD)())}),[]);var m=(0,u.CG)((function(e){return e.security.get("mfa")}));return(0,o.Z)(c.sg,{label:e.formatMessage(x.heading),transparent:!0,withHeader:!1},void 0,(0,o.Z)(c.Zb,{variant:"rounded"},void 0,(0,o.Z)(c.Ol,{backHref:"/settings"},void 0,(0,o.Z)(c.ll,{title:e.formatMessage(x.heading)})),(0,o.Z)(c.eW,{},void 0,m.getIn(["settings","totp"])?(0,o.Z)(g,{}):(0,o.Z)(c.Kq,{space:4},void 0,(0,o.Z)(Z,{displayOtpForm:l,handleSetupProceedClick:function(e){e.preventDefault(),f(!0)}}),l&&(0,o.Z)(_,{})))))}}}]);
//# sourceMappingURL=mfa_form-3cce0b5286cc3e55da80.chunk.js.map