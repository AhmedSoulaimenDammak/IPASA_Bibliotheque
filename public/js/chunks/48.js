(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{g2pn:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("ok1R"),c=n("rhny"),l=n("BLzl"),u=n("/kxI"),s=n("/MKj"),i=n("17x9"),f=n.n(i),b=n("d/v1"),d=n("pJVQ"),m=n("WAKd"),p=n("LWX+"),g=n("BfhE"),E=n("iTU0"),O=n("fg8b");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var k=function(e){var t=e.onSaveBookRequest,n=e.handleSubmit,l=e.initialValues,u=Object(a.createRef)(),s=Object(m.i)(p.l);Object(a.useEffect)((function(){u.current.focus()}),[]);return r.a.createElement(o.a,{className:"animated fadeIn m-3"},r.a.createElement(c.a,{xs:12},r.a.createElement(b.a,{name:"book_name",label:"books.table.book.column",required:!0,inputRef:u,groupText:"book",component:g.a,readOnly:!0})),r.a.createElement(c.a,{xs:12},r.a.createElement(b.a,{name:"isbn",label:"book-request.input.isbn.label",required:!0,groupText:"id-card",component:g.a,readOnly:!0})),r.a.createElement(c.a,{xs:12},r.a.createElement(b.a,{name:"edition",label:"book-request.input.edition.label",required:!0,groupText:"file-text",component:g.a,readOnly:!0})),r.a.createElement(c.a,{xs:12},r.a.createElement(b.a,{name:"format",label:"book-request.select.format.label",required:!0,options:s,placeholder:"book-request.select.format.placeholder",groupText:"wpforms",component:E.a,disabled:!0})),r.a.createElement(c.a,{xs:12},r.a.createElement(b.a,{name:"status",label:"books-circulation.select.status.label",required:!0,options:function(){var e=Object(m.i)(p.s);switch(l.status.id){case p.r.APPROVED:return e.filter((function(e){return e.id!==p.r.PENDING}));case p.r.AVAILABLE:return e.filter((function(e){return e.id!==p.r.PENDING||e.id!==p.r.APPROVED}));case p.r.CANCEL:return e.filter((function(e){return e.id===p.i.CANCEL}));default:return e}}(),groupText:"info-circle",placeholder:"books-circulation.select.status.placeholder",component:E.a})),r.a.createElement(c.a,{xs:12},r.a.createElement(O.a,v({onSave:n((function(e){var n=e.status;t(n.id)}))},e))))};k.propTypes={initialValues:f.a.object,onSaveBookRequest:f.a.func,handleSubmit:f.a.func};var h=Object(d.a)({form:"bookRequestForm",validate:function(e){var t={};return e.first_name||(t.first_name=Object(m.g)("profile.input.first-name.validate.label")),t}})(k),y=n("ndVE"),q=n("o0o1"),R=n.n(q),j=n("q8lI"),x=n("xQOs"),w=n("zzOX"),B=n("gdP5"),A=n("p8CX"),S=(n("4txZ"),n("LvDl")),_=n.n(S),I=n("XHFK");function N(e,t,n,a,r,o,c){try{var l=e[o](c),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(a,r)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function c(e){N(o,a,r,c,l,"next",e)}function l(e){N(o,a,r,c,l,"throw",e)}c(void 0)}))}}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var D=function(e){var t=e.addBookRequest,n={onSaveBookRequest:function(e){t(e)},onCancel:e.toggleModal};return r.a.createElement(y.a,C({},e,{content:r.a.createElement(h,n)}))};D.propTypes={addBookRequest:f.a.func,toggleModal:f.a.func};var P=Object(s.b)(null,{addBookRequest:function(e){return function(){var t=T(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post(I.f.BOOK_REQUEST,e).then((function(e){n({type:p.q.ADD_ADMIN_BOOK_REQUEST,payload:e.data.data}),n(Object(w.a)({text:Object(m.g)("book-request.success.create.message")})),n(Object(B.a)())})).catch((function(e){var t=e.response;n(Object(w.a)({text:t.data.message,type:p.W.ERROR}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(D);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=function(e){var t=e.bookRequest,n=e.editBookRequest,a=e.toggleModal,o=Object(m.i)(p.l),c=Object(m.i)(p.s),l={onSaveBookRequest:function(e){n(t,e)},onCancel:a,initialValues:{book_name:t.book_name,isbn:t.isbn,edition:t.edition,format:o.find((function(e){return e.id===+t.format})),status:c.find((function(e){return e.id===+t.status}))}};return r.a.createElement(y.a,M({},e,{content:r.a.createElement(h,l)}))};L.propTypes={bookRequest:f.a.object,editBookRequest:f.a.func,toggleModal:f.a.func};var K=Object(s.b)(null,{editBookRequest:function(e,t){return function(){var n=T(R.a.mark((function n(a){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.put(I.f.BOOK_REQUEST+"/"+e.id+"/status/"+t,{}).then((function(e){a({type:p.q.EDIT_ADMIN_BOOK_REQUEST,payload:e.data.data}),a(Object(w.a)({text:Object(m.g)("book-request.success.edit.message")})),a(Object(B.a)())})).catch((function(e){var t=e.response;a(Object(w.a)({text:t.data.message,type:p.W.ERROR}))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(L),V=n("unre");function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var U=function(e){var t=e.bookRequestId,n=e.deleteBookRequest,a=e.toggleModal;return r.a.createElement(y.a,Q({},e,{actions:r.a.createElement(V.a,{onDelete:function(){n(t)},onCancel:a})}))};U.propTypes={bookRequestId:f.a.number,deleteBookRequest:f.a.func,toggleModal:f.a.func};var W=Object(s.b)(null,{deleteBookRequest:function(e){return function(){var t=T(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.delete(I.f.BOOK_REQUEST+"/"+e).then((function(){n({type:p.q.DELETE_ADMIN_BOOK_REQUEST,payload:e}),n(Object(w.a)({text:Object(m.g)("book-request.success.delete.message")})),n(Object(B.a)())})).catch((function(e){var t=e.response;n(Object(w.a)({text:t.data.message,type:p.W.ERROR}))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(U),H=n("WOoH"),F=function(e){var t=e.bookRequest,n=e.isCreate,a=e.isEdit,o=e.isDelete,c={bookRequest:t},l={bookRequestId:t?t.id:null},u={modalTitle:Object(m.l)(n,a,o,"book-request.input.new-btn.label","book-request.modal.edit.title","book-request.modal.delete.title"),NewComponent:P,EditComponent:K,DeleteComponent:W,deleteKey:t?t.book_name:null,editConfig:c,delConfig:l,props:e};return r.a.createElement(H.a,u)};F.propTypes={author:f.a.object,isCreate:f.a.bool,isEdit:f.a.bool,isDelete:f.a.bool};var X=F,G=n("PY+g"),z=n("SR2/"),J=n("tgHS"),Y=n("NHeP"),Z=n("xgWS"),$=n("leCq");function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ne=function(e){var t=e.bookRequests,n=e.toggleModal,a=e.totalRecord,s=e.isLoading,i=e.fetchBookRequests,f=ee(Object($.c)(),5),b=f[0],d=f[1],g=f[2],E=f[3],O=f[4],v={bookRequest:E,isCreate:b,isEdit:d,isDelete:g,toggleModal:n},k=Object(m.i)(p.l),h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];O(e,t,a),n()},y=[{name:Object(m.g)("book-request.input.isbn.label"),selector:"isbn",sortable:!0,cell:function(e){return r.a.createElement("span",null,e.isbn)},minWidth:"200px"},{name:Object(m.g)("books.table.book.column"),selector:"book_name",sortable:!0,cell:function(e){return r.a.createElement("span",null,e.book_name)}},{name:Object(m.g)("book-request.input.edition.label"),selector:"edition",sortable:!0,cell:function(e){return r.a.createElement("span",null,e.edition)}},{name:Object(m.g)("book-request.select.format.label"),selector:"format",sortable:!0,cell:function(e){var t=k.find((function(t){return t.id===e.format}));if(t)return t.name}},{name:Object(m.g)("book-request.count.label"),selector:"request_count",sortable:!0,center:!0,cell:function(e){return e.request_count}},{name:Object(m.g)("react-data-table.status.column"),selector:"status",sortable:!0,center:!0,cell:function(e){return r.a.createElement(Z.a,{status:e.status})}},{name:Object(m.g)("react-data-table.action.column"),selector:"id",right:!0,cell:function(e){return q(e)},ignoreRowClick:!0,allowOverflow:!0,button:!0}],q=function(e){switch(e.status){case p.r.APPROVED:case p.r.PENDING:return r.a.createElement(J.a,{onOpenModal:h,item:e,isHideDeleteIcon:!0});case p.r.AVAILABLE:case p.r.CANCEL:default:return""}};return r.a.createElement(o.a,{className:"animated fadeIn"},r.a.createElement(c.a,{sm:12,className:"mb-2"},r.a.createElement(G.a,{title:"Books Request"}),r.a.createElement("h5",{className:"page-heading"},Object(m.g)("book-request.title")),r.a.createElement(Y.a,null)),r.a.createElement(c.a,{sm:12},r.a.createElement("div",{className:"sticky-table-container"},r.a.createElement(l.a,null,r.a.createElement(u.a,null,r.a.createElement(z.a,{items:t,columns:y,loading:s,emptyStateMessageId:"book-request.empty-state.title",emptyNotFoundStateMessageId:"book-request.not-found.empty-state.title",totalRows:a,onChange:function(e){i(e,!0)},icon:I.o.BOOK_REQUEST}),r.a.createElement(X,v))))))};ne.propTypes={adminBookRequests:f.a.array,totalRecord:f.a.number,isLoading:f.a.bool,fetchBookRequests:f.a.func,toggleModal:f.a.func};t.default=Object(s.b)((function(e){return{bookRequests:e.adminBookRequests,isLoading:e.isLoading,totalRecord:e.totalRecord}}),{fetchBookRequests:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=T(R.a.mark((function n(a){var r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t&&a(Object(x.a)(!0)),r=I.f.BOOK_REQUEST,!_.a.isEmpty(e)&&(e.limit||e.order_By||e.search)&&(r+=Object(A.a)(e)),n.next=5,j.a.get(r).then((function(e){a({type:p.q.FETCH_ADMIN_BOOKS_REQUEST,payload:e.data.data}),t&&a(Object(x.a)(!1))})).catch((function(e){var n=e.response;a(Object(w.a)({text:n.data.message,type:p.W.ERROR})),t&&a(Object(x.a)(!1))}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},toggleModal:B.a})(ne)},xgWS:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),c=n.n(o),l=n("XHFK"),u=n("WAKd"),s=function(e){switch(e.status){case l.i.PENDING:return r.a.createElement("span",{className:"text-warning"},r.a.createElement("strong",null,Object(u.g)("book-request.filter.pending.label")));case l.i.APPROVED:return r.a.createElement("span",{className:"text-success"},r.a.createElement("strong",null,Object(u.g)("book-request.filter.approved.label")));case l.i.AVAILABLE:return r.a.createElement("span",{className:"text-info"},r.a.createElement("strong",null,Object(u.g)("book-request.filter.available.label")));default:return r.a.createElement("span",{className:"text-danger"},r.a.createElement("strong",null,Object(u.g)("book-request.filter.cancel.label")))}};s.propTypes={status:c.a.number},t.a=s}}]);