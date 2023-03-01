"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[59],{1489:function(e,a,o){o.r(a);var t=o(2057),i=o(2047),r=o(1),n=o(2058),l=o(2059),s=o(2077),c=o(2076),d=o(209),u=o(2),m=o(3),g=o(37),f=(0,n.vU)({heading:{id:"column.migration",defaultMessage:"Account migration"},submit:{id:"migration.submit",defaultMessage:"Move followers"},moveAccountSuccess:{id:"migration.move_account.success",defaultMessage:"Account successfully moved."},moveAccountFail:{id:"migration.move_account.fail",defaultMessage:"Account migration failed."},moveAccountFailCooldownPeriod:{id:"migration.move_account.fail.cooldown_period",defaultMessage:"You have moved your account too recently. Please try again later."},acctFieldLabel:{id:"migration.fields.acct.label",defaultMessage:"Handle of the new account"},acctFieldPlaceholder:{id:"migration.fields.acct.placeholder",defaultMessage:"username@domain"},currentPasswordFieldLabel:{id:"migration.fields.confirm_password.label",defaultMessage:"Current password"}});a.default=function(){var e=(0,l.Z)(),a=(0,m.TL)(),o=(0,m.fz)().pleroma.getIn(["metadata","migration_cooldown_period"]),n=(0,r.useState)(""),v=(0,i.Z)(n,2),h=v[0],w=v[1],p=(0,r.useState)(""),Z=(0,i.Z)(p,2),b=Z[0],M=Z[1],y=(0,r.useState)(!1),x=(0,i.Z)(y,2),F=x[0],k=x[1],A=function(e){"password"===e.target.name?M(e.target.value):w(e.target.value)},P=function(o){return k(!0),a((0,d.tj)(h,b)).then((function(){w(""),M(""),g.Z.success(e.formatMessage(f.moveAccountSuccess))})).catch((function(a){var o,t,i=e.formatMessage(f.moveAccountFail);"You are within cooldown period."===(null===(o=a.response)||void 0===o||null===(t=o.data)||void 0===t?void 0:t.error)&&(i=e.formatMessage(f.moveAccountFailCooldownPeriod)),g.Z.error(i)})).then((function(){k(!1)}))};return(0,t.Z)(u.sg,{label:e.formatMessage(f.heading)},void 0,(0,t.Z)(u.l0,{onSubmit:P},void 0,(0,t.Z)(u.xv,{theme:"muted"},void 0,(0,t.Z)(s.Z,{id:"migration.hint",defaultMessage:"This will move your followers to the new account. No other data will be moved. To perform migration, you need to {link} on your new account first.",values:{link:(0,t.Z)(c.rU,{className:"text-primary-600 hover:text-primary-800 hover:underline dark:text-primary-400 dark:hover:text-primary-500",to:"/settings/aliases"},void 0,(0,t.Z)(s.Z,{id:"migration.hint.link",defaultMessage:"create an account alias"}))}}),!!o&&r.createElement(r.Fragment,null," ",(0,t.Z)(s.Z,{id:"migration.hint.cooldown_period",defaultMessage:"If you migrate your account, you will not be able to migrate your account for {cooldownPeriod, plural, one {one day} other {the next # days}}.",values:{cooldownPeriod:o}}))),(0,t.Z)(u.cw,{labelText:e.formatMessage(f.acctFieldLabel)},void 0,(0,t.Z)(u.II,{name:"targetAccount",placeholder:e.formatMessage(f.acctFieldPlaceholder),onChange:A,value:h,required:!0})),(0,t.Z)(u.cw,{labelText:e.formatMessage(f.currentPasswordFieldLabel)},void 0,(0,t.Z)(u.II,{type:"password",name:"password",onChange:A,value:b,required:!0})),(0,t.Z)(u.iN,{},void 0,(0,t.Z)(u.zx,{theme:"primary",text:e.formatMessage(f.submit),onClick:P,disabled:F}))))}}}]);
//# sourceMappingURL=migration-bdd9054ec6384660b830.chunk.js.map