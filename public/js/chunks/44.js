(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{IGTe:function(e,t,a){var n=a("cHJw");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,o);n.locals&&(e.exports=n.locals)},cHJw:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".book-history-detail__modal {\n  max-width: 700px;\n}\n.book-history-detail__item-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item-container {\n    width: 100%;\n    flex-flow: column;\n  }\n}\n.book-history-detail__item {\n  display: flex;\n  margin-bottom: 25px;\n  width: 40%;\n  margin-right: 20px;\n}\n@media (max-width: 660px) {\n  .book-history-detail__item {\n    width: 100%;\n  }\n}\n.book-history-detail__item-heading {\n  width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-name {\n  display: flex;\n  margin-bottom: 25px;\n  width: 100%;\n}\n.book-history-detail__item-name-heading {\n  min-width: 120px;\n  font-weight: 700;\n}\n.book-history-detail__item-note {\n  display: flex;\n  margin-bottom: 25px;\n}",""])},"z+ok":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("/MKj"),i=a("55Ip"),r=a("ok1R"),s=a("rhny"),c=a("sOKU"),m=a("BLzl"),d=a("/kxI"),u=a("17x9"),b=a.n(u),_=(a("IGTe"),a("8ouV")),h=a("WAKd");function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.bookHistory,a=e.isToggle,n=e.toggleModal;if(a){var l={toggleModal:n,className:"book-history-detail__modal",title:Object(h.g)("books-circulation.modal.edit.title")};return o.a.createElement(_.a,g({},l,{bookCirculation:t}))}return null};p.propTypes={bookHistory:b.a.object,isToggle:b.a.bool,toggleModal:b.a.func};var k=p,y=a("LWX+"),E=a("XHFK"),f=a("NHeP"),v=a("iAtM"),N=a("PY+g"),j=a("gOPr"),O=a("gdP5");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,o,l=[],i=!0,r=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var S=function(e){var t=e.bookHistory,a=e.fetchBookCirculation,l=e.toggleModal,u=e.history,b=e.match,_=x(Object(n.useState)(!1),2),g=_[0],p=_[1],j=Object(h.i)(y.l);if(Object(n.useEffect)((function(){a(+b.params.id)}),[]),!t)return o.a.createElement(f.a,null);var O={isToggle:g,toggleModal:l,bookHistory:t},M=t.book_item,S=M.book,I=j.find((function(e){return e.id===+M.format}));return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(N.a,{title:"Book Circulation Details"}),o.a.createElement(r.a,null,o.a.createElement(s.a,{sm:12,className:"mb-2 d-block d-sm-flex justify-content-between"},o.a.createElement("h5",{className:"page-heading w-100"},Object(h.g)("book-circulation-details.title")),o.a.createElement("div",{className:"d-block d-sm-flex"},o.a.createElement(c.a,{className:"mr-2",color:"primary text-white",onClick:function(){return p(!0),void l()}},Object(h.g)("books-circulation.modal.edit.title")),o.a.createElement(c.a,{className:"float-right",onClick:function(){u.goBack()}},Object(h.g)("global.input.back-btn.label")))),o.a.createElement(s.a,{sm:12},o.a.createElement("div",{className:"sticky-table-container"},o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement(r.a,{className:"no-gutters"},o.a.createElement("div",{className:"book-history-detail"},o.a.createElement("div",{className:"book-history-detail__item-container"},o.a.createElement("div",{className:"book-history-detail__item-name"},o.a.createElement("span",{className:"book-history-detail__item-name-heading"},Object(h.g)("books-circulation.select.book.label")),o.a.createElement("span",null,o.a.createElement(i.b,{to:"".concat(E.d.BOOKS+S.id,"/details")},S.name)))),o.a.createElement("div",{className:"book-history-detail__item-container"},o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books.items.input.book-code.label")),o.a.createElement("span",null,M.book_code)),o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.select.member.label")),o.a.createElement("span",null,o.a.createElement(i.b,{to:"".concat(E.d.MEMBERS+t.member_id,"/details")},t.member.first_name+" "+t.member.last_name))),M.language?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books.items.select.language.label")),o.a.createElement("span",null,M.language.language_name)):null,M.publisher?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books.items.select.publisher.label")),o.a.createElement("span",null,M.publisher.name)):null,o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books.items.select.format.label")),o.a.createElement("span",null,I?I.name:null)),o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books.items.input.edition.label")),o.a.createElement("span",null,M.edition)),o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.select.status.label")),o.a.createElement("span",null," ",function(e){var t={status:e.status,item:e};return o.a.createElement(v.a,w({},t,{item:e}))}(t))),t.issuer_name?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.issuer.column")),o.a.createElement("span",null,o.a.createElement(i.b,{to:"".concat(E.d.USERS+t.issuer_id,"/details")},t.issuer_name))):null,t.returner_name?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.returner.column")),o.a.createElement("span",null,o.a.createElement(i.b,{to:"".concat(E.d.USERS+t.returner_id,"/details")},t.returner_name))):null,t.issued_on?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.issue-date.column")),o.a.createElement("span",null,Object(h.c)(t.issued_on))):null,t.issue_due_date?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.issue-due-date.column")),o.a.createElement("span",null,Object(h.c)(t.issue_due_date))):null,t.return_date?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.return-date.column")),o.a.createElement("span",null,Object(h.c)(t.return_date))):null,t.return_due_date?o.a.createElement("div",{className:"book-history-detail__item"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.table.return-due-date.column")),o.a.createElement("span",null,Object(h.c)(t.return_due_date))):null,t.note?o.a.createElement("div",{className:"book-history-detail__item-note"},o.a.createElement("span",{className:"book-history-detail__item-heading"},Object(h.g)("books-circulation.input.note.label")),o.a.createElement("span",null,t.note)):null))),o.a.createElement(k,O)))))))};S.propTypes={bookHistory:b.a.object,history:b.a.object,match:b.a.object,fetchBookCirculation:b.a.func,toggleModal:b.a.func};t.default=Object(l.b)((function(e,t){return{bookHistory:e.booksCirculation.find((function(e){return e.id===+t.match.params.id}))}}),{fetchBookCirculation:j.f,toggleModal:O.a})(S)}}]);