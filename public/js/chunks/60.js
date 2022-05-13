(window.webpackJsonp = window.webpackJsonp || []).push([
    [60], {
        qeS9: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a("q1tI"),
                r = a.n(n),
                l = a("ok1R"),
                o = a("rhny"),
                c = a("sOKU"),
                i = a("BLzl"),
                s = a("/kxI"),
                u = a("/MKj"),
                d = a("17x9"),
                m = a.n(d),
                f = a("IqYA"),
                p = a("61R4"),
                b = a("ndVE"),
                g = a("O8kF"),
                v = a("XHFK");

            function h() {
                return (h = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var y = function (e) {
                var t = e.addUser,
                    a = {
                        initialValues: {
                            is_active: !0,
                            isCreate: !0
                        },
                        onSaveUser: function (e) {
                            t(Object(p.a)(e), v.b.OBJ)
                        },
                        onCancel: e.toggleModal
                    };
                return r.a.createElement(b.a, h({}, e, {
                    content: r.a.createElement(f.a, a)
                }))
            };
            y.propTypes = {
                addUser: m.a.func,
                toggleModal: m.a.func
            };
            var E = Object(u.b)(null, {
                    addUser: g.b
                })(y),
                O = a("CKDh"),
                j = a("unre");

            function w() {
                return (w = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var C = function (e) {
                var t = e.userId,
                    a = e.deleteUser,
                    n = e.toggleModal;
                return r.a.createElement(b.a, w({}, e, {
                    actions: r.a.createElement(j.a, {
                        onDelete: function () {
                            a(t)
                        },
                        onCancel: n
                    })
                }))
            };
            C.propTypes = {
                userId: m.a.number,
                deleteUser: m.a.func,
                toggleModal: m.a.func
            };
            var _ = Object(u.b)(null, {
                    deleteUser: g.c
                })(C),
                I = a("WAKd"),
                U = a("WOoH"),
                M = function (e) {
                    var t = e.user,
                        a = e.isCreate,
                        n = e.isEdit,
                        l = e.isDelete,
                        o = {
                            user: t
                        },
                        c = {
                            userId: t ? t.id : null
                        },
                        i = {
                            modalTitle: Object(I.l)(a, n, l, "users.modal.add.title", "users.modal.edit.title", "users.modal.delete.title"),
                            NewComponent: E,
                            EditComponent: O.a,
                            DeleteComponent: _,
                            deleteKey: t ? t.first_name + " " + t.last_name : null,
                            editConfig: o,
                            delConfig: c,
                            isWide: !0,
                            props: e
                        };
                    return r.a.createElement(U.a, i)
                };
            M.propTypes = {
                user: m.a.object,
                isCreate: m.a.bool,
                isEdit: m.a.bool,
                isDelete: m.a.bool
            };
            var R = M,
                S = a("d/v1"),
                k = a("pJVQ"),
                A = (a("hwMP"), a("pWWL"), a("tgHS")),
                D = a("4r/a"),
                N = a("SR2/"),
                L = a("I2lu"),
                T = a("zzOX"),
                x = function (e) {
                    var t = e.users,
                        a = e.onClickModal,
                        n = e.setActiveInactive,
                        l = e.history,
                        o = e.isLoading,
                        c = e.totalRecord,
                        i = e.onChangeData,
                        s = e.user,
                        u = [{
                            name: Object(I.g)("profile.title"),
                            selector: "image",
                            width: "90px",
                            cell: function (e) {
                                var t = e.image_path ? e.image_path : null;
                                return t ? r.a.createElement("img", {
                                    src: t,
                                    className: "user-table-row__profile-img",
                                    alt: t
                                }) : r.a.createElement("div", {
                                    className: "user__avatar"
                                }, r.a.createElement("span", null, Object(I.e)(e.first_name + " " + e.last_name)))
                            }
                        }, {
                            name: Object(I.g)("react-data-table.name.column"),
                            selector: "first_name",
                            sortable: !0,
                            cell: function (e) {
                                return r.a.createElement("span", null, e.first_name + " " + e.last_name)
                            }
                        }, {
                            name: Object(I.g)("profile.input.email.label"),
                            selector: "email",
                            sortable: !0
                        }, {
                            name: Object(I.g)("profile.input.phone.label"),
                            selector: "phone",
                            cell: function (e) {
                                return r.a.createElement("span", null, e.phone ? e.phone : "N/A")
                            },
                            sortable: !0
                        }, {
                            name: Object(I.g)("users.select.role.label"),
                            selector: "role_name",
                            sortable: !0,
                            cell: function (e) {
                                return e.roles && (e.role_name = e.roles[0].display_name), r.a.createElement("span", null, e.role_name)
                            }
                        }, {
                            name: Object(I.g)("react-data-table.status.column"),
                            selector: "status",
                            width: "90px",
                            center: !0,
                            cell: function (e) {
                                return Object(L.d)().id !== e.id ? r.a.createElement("div", {
                                    className: "user-form__switch"
                                }, r.a.createElement(S.a, {
                                    name: "is_active",
                                    checked: e.is_active,
                                    component: D.a,
                                    onChange: function () {
                                        return d(e)
                                    }
                                })) : null
                            }
                        }, {
                            name: Object(I.g)("react-data-table.action.column"),
                            selector: "id",
                            ignoreRowClick: !0,
                            allowOverflow: !0,
                            button: !0,
                            center: !0,
                            width: "150px",
                            cell: function (e) {
                                return r.a.createElement(A.a, {
                                    onOpenModal: a,
                                    isHideDetailIcon: !1,
                                    goToDetailScreen: m,
                                    item: e,
                                    isHideDeleteIcon: s.id === e.id
                                })
                            }
                        }],
                        d = function (e) {
                            n(e.id, e.is_active)
                        },
                        m = function (e) {
                            l.push("".concat(v.d.USERS + e, "/details"))
                        };
                    return r.a.createElement(N.a, {
                        items: t,
                        columns: u,
                        emptyStateMessageId: "users.empty-state.title",
                        emptyNotFoundStateMessageId: "users.not-found.empty-state.title",
                        loading: o,
                        totalRows: c,
                        onChange: i,
                        icon: v.o.USERS
                    })
                };
            x.propTypes = {
                user: m.a.object,
                history: m.a.object,
                users: m.a.array,
                totalRecord: m.a.number,
                isLoading: m.a.bool,
                onChangeData: m.a.func,
                onClickModal: m.a.func,
                setActiveInactive: m.a.func
            };
            var H = Object(k.a)({
                    form: "userForm"
                })(x),
                K = Object(u.b)((function (e) {
                    return {
                        user: e.profile
                    }
                }), {
                    addToast: T.a
                })(H),
                P = a("NHeP"),
                F = a("PY+g"),
                W = a("leCq"),
                q = a("gdP5"),
                z = a("YF1e");

            function J(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, l = [],
                        o = !0,
                        c = !1;
                    try {
                        for (a = a.call(e); !(o = (n = a.next()).done) && (l.push(n.value), !t || l.length !== t); o = !0);
                    } catch (e) {
                        c = !0, r = e
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (c) throw r
                        }
                    }
                    return l
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return V(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }
            var Y = function (e) {
                var t = e.users,
                    a = e.fetchUsers,
                    n = e.toggleModal,
                    u = e.history,
                    d = e.isLoading,
                    m = e.totalRecord,
                    f = e.activeInactiveUser,
                    p = J(Object(W.c)(), 5),
                    b = p[0],
                    g = p[1],
                    v = p[2],
                    h = p[3],
                    y = p[4],
                    E = {
                        user: h,
                        isCreate: b,
                        isEdit: g,
                        isDelete: v,
                        toggleModal: n
                    },
                    O = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        y(e, t, a), n()
                    },
                    j = {
                        users: t,
                        setActiveInactive: function (e, t) {
                            e && f(e, t)
                        },
                        onClickModal: O,
                        history: u,
                        isLoading: d,
                        totalRecord: m,
                        onChangeData: function (e) {
                            a(e, !0)
                        }
                    };
                return r.a.createElement(l.a, {
                    className: "animated fadeIn"
                }, r.a.createElement(o.a, {
                    sm: 12,
                    className: "mb-2"
                }, r.a.createElement(F.a, {
                    title: "Users"
                }), r.a.createElement(P.a, null), r.a.createElement("h5", {
                    className: "page-heading"
                }, Object(I.g)("users.title")), r.a.createElement("div", {
                    className: "d-flex justify-content-end"
                }, r.a.createElement(c.a, {
                    onClick: function () {
                        return O(!1)
                    },
                    size: "md",
                    color: "primary ml-2 text-white"
                }, Object(I.g)("users.modal.add.title")))), r.a.createElement(o.a, {
                    sm: 12
                }, r.a.createElement("div", {
                    className: "sticky-table-container"
                }, r.a.createElement(i.a, null, r.a.createElement(s.a, null, r.a.createElement(K, j), r.a.createElement(R, E))))))
            };
            Y.propTypes = {
                history: m.a.object,
                users: m.a.array,
                totalRecord: m.a.number,
                isLoading: m.a.bool,
                fetchUsers: m.a.func,
                activeInactiveUser: m.a.func,
                fetchRoles: m.a.func,
                toggleModal: m.a.func
            };
            t.default = Object(u.b)((function (e) {
                return {
                    users: e.users,
                    isLoading: e.isLoading,
                    totalRecord: e.totalRecord
                }
            }), {
                fetchUsers: g.f,
                activeInactiveUser: g.a,
                fetchRoles: z.d,
                toggleModal: q.a
            })(Y)
        }
    }
]);
