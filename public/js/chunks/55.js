(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{DWdX:function(e,a,t){"use strict";var r=t("WAKd");a.a=function(e){var a={};e.email||(a.email=Object(r.g)("profile.input.email-required.validate.label"));return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email),e.password||(a.password=Object(r.g)("profile.input.password-required.validate.label")),e.password&&e.password.length<6&&(a.password=Object(r.g)("profile.input.password-invalid.validate.label")),e.confirm_password!==e.password&&(a.confirm_password=Object(r.g)("profile.input.confirm-password.validate.label")),a}},UE5n:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),n=t("/MKj"),s=t("d/v1"),o=t("pJVQ"),c=t("55Ip"),i=t("17x9"),d=t.n(i),p=t("1Yj4"),m=t("ok1R"),u=t("rhny"),b=t("BLzl"),w=t("/kxI"),f=t("uBiN"),E=t("sOKU"),g=t("DWdX"),j=t("XHFK"),v=t("PY+g"),O=t("KPdR"),h=t("WAKd"),y=t("dpIg"),k=function(e){var a=e.handleSubmit,t=e.invalid,r=e.history,n=e.location,o=e.resetPassword,i=new URLSearchParams(n.search);return l.a.createElement("div",{className:"c-app flex-row align-items-center"},l.a.createElement(v.a,{title:"Reset Password"}),l.a.createElement(p.a,null,l.a.createElement(m.a,{className:"justify-content-center"},l.a.createElement(u.a,{md:"4"},l.a.createElement(b.a,{className:"p-3"},l.a.createElement(w.a,null,l.a.createElement(f.a,{onSubmit:a((function(e){delete e.confirm_password,e.token=i.get("token"),o(e,r)}))},l.a.createElement("h1",null,Object(h.g)("reset-password.title")),l.a.createElement("p",{className:"text-muted"},Object(h.g)("reset-password.note")),l.a.createElement(s.a,{name:"password",type:"password",placeholder:"profile.input.password.label",groupText:"icon-lock",component:O.a}),l.a.createElement(s.a,{name:"confirm_password",type:"password",placeholder:"profile.input.confirm-password.label",groupText:"icon-lock",component:O.a}),l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"mt-2 d-flex justify-content-end"},l.a.createElement(E.a,{color:"primary",disabled:t,className:"px-4"},Object(h.g)("global.input.reset-btn.label")),l.a.createElement(c.b,{to:j.d.MEMBER_FORGOT_PASSWORD,className:"btn btn-secondary ml-2"},Object(h.g)("global.input.back-btn.label")))))))))))};k.propTypes={location:d.a.object,history:d.a.object,invalid:d.a.bool,resetPassword:d.a.func,handleSubmit:d.a.func};var P=Object(o.a)({form:"resetPasswordForm",validate:g.a})(k);a.default=Object(n.b)(null,{resetPassword:y.d})(P)}}]);