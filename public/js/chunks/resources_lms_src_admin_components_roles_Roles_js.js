"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_lms_src_admin_components_roles_Roles_js"],{

/***/ "./resources/lms/src/admin/components/roles/CreateRole.js":
/*!****************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/CreateRole.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RoleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoleForm */ "./resources/lms/src/admin/components/roles/RoleForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _shared_prepareArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/prepareArray */ "./resources/lms/src/admin/shared/prepareArray.js");
/* harmony import */ var _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/roleAction */ "./resources/lms/src/admin/store/actions/roleAction.js");
/* harmony import */ var _store_actions_permissionAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/permissionAction */ "./resources/lms/src/admin/store/actions/permissionAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var CreateRole = function CreateRole(props) {
  var addRole = props.addRole,
      permissions = props.permissions,
      toggleModal = props.toggleModal,
      fetchPermissions = props.fetchPermissions;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchPermissions();
  }, []);

  var onSaveRole = function onSaveRole(formValues) {
    var copyFormValues = lodash__WEBPACK_IMPORTED_MODULE_3___default().clone(formValues);

    copyFormValues.permissions = copyFormValues.permissionArray;
    delete copyFormValues.permissionArray;
    addRole(copyFormValues);
  };

  var prepareFormOption = {
    onSaveRole: onSaveRole,
    onCancel: toggleModal,
    permissionsArray: permissions
  };

  if (permissions.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, props, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RoleForm__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, prepareFormOption))
  }));
};

CreateRole.propTypes = {
  permissions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  addRole: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  fetchPermissions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};

var mapStateToProps = function mapStateToProps(state) {
  var permissions = state.permissions;
  return {
    permissions: (0,_shared_prepareArray__WEBPACK_IMPORTED_MODULE_6__.preparePermissions)(permissions)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  addRole: _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_7__.addRole,
  fetchPermissions: _store_actions_permissionAction__WEBPACK_IMPORTED_MODULE_8__.fetchPermissions
})(CreateRole));

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/DeleteRole.js":
/*!****************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/DeleteRole.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/DeleteAction */ "./resources/lms/src/shared/action-buttons/DeleteAction.js");
/* harmony import */ var _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/roleAction */ "./resources/lms/src/admin/store/actions/roleAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var DeleteRole = function DeleteRole(props) {
  var roleId = props.roleId,
      deleteRole = props.deleteRole,
      toggleModal = props.toggleModal;

  var onDeleteRole = function onDeleteRole() {
    deleteRole(roleId);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, props, {
    actions: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_action_buttons_DeleteAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onDelete: onDeleteRole,
      onCancel: toggleModal
    })
  }));
};

DeleteRole.propTypes = {
  roleId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  deleteRole: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  deleteRole: _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_5__.deleteRole
})(DeleteRole));

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/EditRole.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/EditRole.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RoleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoleForm */ "./resources/lms/src/admin/components/roles/RoleForm.js");
/* harmony import */ var _shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/Modal */ "./resources/lms/src/shared/components/Modal.js");
/* harmony import */ var _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/roleAction */ "./resources/lms/src/admin/store/actions/roleAction.js");
/* harmony import */ var _store_actions_permissionAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/permissionAction */ "./resources/lms/src/admin/store/actions/permissionAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var EditRole = function EditRole(props) {
  var role = props.role,
      permissions = props.permissions,
      fetchPermissions = props.fetchPermissions,
      editRole = props.editRole,
      toggleModal = props.toggleModal;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchPermissions();
  }, []);

  var onSaveRole = function onSaveRole(formValues) {
    var copyFormValues = lodash__WEBPACK_IMPORTED_MODULE_3___default().clone(formValues);

    copyFormValues.permissions = copyFormValues.permissionArray;
    delete copyFormValues.permissionArray;
    editRole(role.id, copyFormValues);
  };

  var prepareFormOption = {
    onSaveRole: onSaveRole,
    onCancel: toggleModal,
    permissionsArray: permissions,
    initialValues: {
      name: role.name,
      display_name: role.display_name,
      description: role.description
    }
  };

  if (permissions.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, props, {
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RoleForm__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, prepareFormOption))
  }));
};

EditRole.propTypes = {
  role: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  permissions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  editRole: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  fetchPermissions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};

var preparePermissions = function preparePermissions(permissions, selectedPermission) {
  var permissionArray = [];
  permissions.forEach(function (permission) {
    var perm = selectedPermission.find(function (perm) {
      return perm.id === permission.id;
    });
    var selected = false;

    if (perm) {
      selected = true;
    }

    permissionArray.push({
      id: permission.id,
      name: permission.display_name,
      selected: selected,
      isChecked: selected
    });
  });
  return permissionArray;
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var permissions = state.permissions;
  return {
    permissions: preparePermissions(permissions, ownProps.role.permissions)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  editRole: _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_6__.editRole,
  fetchPermissions: _store_actions_permissionAction__WEBPACK_IMPORTED_MODULE_7__.fetchPermissions
})(EditRole));

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/RoleForm.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/RoleForm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/FieldArray.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roleValidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roleValidate */ "./resources/lms/src/admin/components/roles/roleValidate.js");
/* harmony import */ var _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/InputGroup */ "./resources/lms/src/shared/components/InputGroup.js");
/* harmony import */ var _shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/SaveAction */ "./resources/lms/src/shared/action-buttons/SaveAction.js");
/* harmony import */ var _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/TextArea */ "./resources/lms/src/shared/components/TextArea.js");
/* harmony import */ var _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/CheckBox */ "./resources/lms/src/shared/components/CheckBox.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var RoleForm = function RoleForm(props) {
  var permissionsArray = props.permissionsArray,
      handleSubmit = props.handleSubmit,
      onSaveRole = props.onSaveRole;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(permissionsArray),
      _useState2 = _slicedToArray(_useState, 1),
      permissions = _useState2[0];

  var inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    inputRef.current.focus();
    prepareInitialValue();
  }, []);

  var prepareInitialValue = function prepareInitialValue() {
    if (props.initialValues) {
      var _props$initialValues = props.initialValues,
          name = _props$initialValues.name,
          display_name = _props$initialValues.display_name,
          description = _props$initialValues.description;
      props.initialize({
        name: name,
        display_name: display_name,
        description: description,
        permissions: permissions
      });
    } else {
      props.initialize({
        permissions: _toConsumableArray(permissions)
      });
    }
  };

  var onSave = function onSave(formValues) {
    formValues.permissionArray = formValues.permissions.filter(function (perm) {
      return perm.isChecked === true;
    }).map(function (_ref) {
      var id = _ref.id;
      return id;
    });
    onSaveRole(formValues);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "animated fadeIn m-3",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "name",
        label: "roles.input.name.label",
        required: true,
        inputRef: inputRef,
        groupText: "list",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "display_name",
        label: "roles.input.display-name.label",
        required: true,
        groupText: "list-alt",
        component: _shared_components_InputGroup__WEBPACK_IMPORTED_MODULE_3__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "description",
        label: "roles.input.description.label",
        component: _shared_components_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h5", {
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('roles.permissions.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "permissions",
        component: renderPermissionsItems,
        permissions: permissions
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shared_action_buttons_SaveAction__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
        onSave: handleSubmit(onSave)
      }, props))
    })]
  });
};

var renderPermissionsItems = function renderPermissionsItems(_ref2) {
  var fields = _ref2.fields,
      _ref2$meta = _ref2.meta,
      error = _ref2$meta.error,
      submitFailed = _ref2$meta.submitFailed,
      permissions = _ref2.permissions;

  var handleChanged = function handleChanged(index) {
    permissions[index].selected = !permissions[index].selected;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    children: [fields.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: "".concat(item, ".isChecked"),
          checked: permissions[index].selected,
          label: permissions[index].name,
          onChange: function onChange() {
            return handleChanged(index);
          },
          component: _shared_components_CheckBox__WEBPACK_IMPORTED_MODULE_6__["default"]
        })
      }, index);
    }), submitFailed && error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-danger mt-3",
      children: error
    })]
  });
};

RoleForm.propTypes = {
  initialValues: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  permissionsArray: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onSaveRole: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  handleSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_form__WEBPACK_IMPORTED_MODULE_13__["default"])({
  form: 'roleForm',
  validate: _roleValidate__WEBPACK_IMPORTED_MODULE_2__["default"]
})(RoleForm));

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/RoleModal.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/RoleModal.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleModal": () => (/* binding */ RoleModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateRole */ "./resources/lms/src/admin/components/roles/CreateRole.js");
/* harmony import */ var _EditRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditRole */ "./resources/lms/src/admin/components/roles/EditRole.js");
/* harmony import */ var _DeleteRole__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeleteRole */ "./resources/lms/src/admin/components/roles/DeleteRole.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/modal-config/ModalConfig */ "./resources/lms/src/shared/modal-config/ModalConfig.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var RoleModal = function RoleModal(props) {
  var role = props.role,
      isCreate = props.isCreate,
      isEdit = props.isEdit,
      isDelete = props.isDelete;
  var editConfig = {
    role: role
  };
  var delConfig = {
    roleId: role ? role.id : null
  };
  var modalOptions = {
    modalTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getModalTitle)(isCreate, isEdit, isDelete, 'roles.input.new-btn.label', 'roles.modal.edit.title', 'roles.modal.delete.title'),
    NewComponent: _CreateRole__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditComponent: _EditRole__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteComponent: _DeleteRole__WEBPACK_IMPORTED_MODULE_4__["default"],
    deleteKey: role ? role.name : null,
    editConfig: editConfig,
    delConfig: delConfig,
    props: props
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_modal_config_ModalConfig__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, modalOptions));
};
RoleModal.propTypes = {
  role: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isCreate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleModal);

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/RoleTable.js":
/*!***************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/RoleTable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleTable": () => (/* binding */ RoleTable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_sortConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/sortConfig */ "./resources/lms/src/config/sortConfig.js");
/* harmony import */ var _shared_table_header_Tableheader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/table-header/Tableheader */ "./resources/lms/src/shared/table-header/Tableheader.js");
/* harmony import */ var _shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/action-buttons/ModalAction */ "./resources/lms/src/shared/action-buttons/ModalAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var RoleTable = function RoleTable(props) {
  var roles = props.roles,
      onClickModal = props.onClickModal,
      sortAction = props.sortAction,
      sortObject = props.sortObject;
  var headers = [{
    id: 'display_name',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('roles.input.display-name.label')
  }, {
    id: 'name',
    name: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('react-data-table.name.column')
  }];
  var headerProps = {
    sortAction: sortAction,
    sortObject: sortObject,
    sortConfig: _config_sortConfig__WEBPACK_IMPORTED_MODULE_2__.sortConfig,
    headers: headers
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "overflow-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hover: true,
      bordered: true,
      striped: true,
      responsive: true,
      size: "md",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_table_header_Tableheader__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, headerProps))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
        children: roles.map(function (role) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
              children: role.display_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
              children: role.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
              className: "text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_action_buttons_ModalAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
                onOpenModal: onClickModal,
                item: role
              })
            })]
          }, role.id.toString());
        })
      })]
    })
  });
};
RoleTable.propTypes = {
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  roles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClickModal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoleTable);

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/Roles.js":
/*!***********************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/Roles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RoleModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoleModal */ "./resources/lms/src/admin/components/roles/RoleModal.js");
/* harmony import */ var _RoleTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoleTable */ "./resources/lms/src/admin/components/roles/RoleTable.js");
/* harmony import */ var _shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/progress-bar/ProgressBar */ "./resources/lms/src/shared/progress-bar/ProgressBar.js");
/* harmony import */ var _shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/empty-component/EmptyComponent */ "./resources/lms/src/shared/empty-component/EmptyComponent.js");
/* harmony import */ var _shared_components_CustomSearchField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/CustomSearchField */ "./resources/lms/src/shared/components/CustomSearchField.js");
/* harmony import */ var _shared_searchFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/searchFilter */ "./resources/lms/src/shared/searchFilter.js");
/* harmony import */ var _shared_sortFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sortFilter */ "./resources/lms/src/shared/sortFilter.js");
/* harmony import */ var _shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/header-title/HeaderTitle */ "./resources/lms/src/shared/header-title/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/custom-hooks */ "./resources/lms/src/shared/custom-hooks/index.js");
/* harmony import */ var _store_action_sortAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../store/action/sortAction */ "./resources/lms/src/store/action/sortAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/actions/roleAction */ "./resources/lms/src/admin/store/actions/roleAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















var Roles = function Roles(props) {
  var roles = props.roles,
      fetchRoles = props.fetchRoles,
      sortAction = props.sortAction,
      sortObject = props.sortObject,
      toggleModal = props.toggleModal,
      searchText = props.searchText;

  var _openModal = (0,_shared_custom_hooks__WEBPACK_IMPORTED_MODULE_12__.openModal)(),
      _openModal2 = _slicedToArray(_openModal, 5),
      isCreate = _openModal2[0],
      isEdit = _openModal2[1],
      isDelete = _openModal2[2],
      role = _openModal2[3],
      onOpenModal = _openModal2[4];

  var cardModalProps = {
    role: role,
    isCreate: isCreate,
    isEdit: isEdit,
    isDelete: isDelete,
    toggleModal: toggleModal
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchRoles(true);
  }, []);

  var onClickModal = function onClickModal(isEdit) {
    var role = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isDelete = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onOpenModal(isEdit, role, isDelete);
    toggleModal();
  };

  var cardBodyProps = {
    sortAction: sortAction,
    sortObject: sortObject,
    roles: roles,
    onClickModal: onClickModal
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: "animated fadeIn",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sm: 12,
      className: "mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_progress_bar_ProgressBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_header_title_HeaderTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Roles"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h5", {
        className: "page-heading",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('roles.title')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "d-flex justify-content-end",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
          onClick: function onClick() {
            return onClickModal(false);
          },
          size: "md",
          color: "primary ml-2 text-white",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('roles.input.new-btn.label')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_19__["default"], {
      sm: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "sticky-table-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_22__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              className: "d-flex justify-content-end mb-2",
              children: roles.length > 0 || searchText ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_components_CustomSearchField__WEBPACK_IMPORTED_MODULE_7__["default"], {}) : null
            }), roles.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_RoleTable__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, cardBodyProps)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_empty_component_EmptyComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
              icon: _constants__WEBPACK_IMPORTED_MODULE_16__.icon.ROLE,
              title: searchText ? (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('roles.not-found.empty-state.title') : (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_11__.getFormattedMessage)('roles.empty-state.title')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_RoleModal__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, cardModalProps))]
          })
        })
      })
    })]
  });
};

Roles.propTypes = {
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  roles: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  searchText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  fetchRoles: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  toggleModal: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};

var mapStateToProps = function mapStateToProps(state) {
  var roles = state.roles,
      searchText = state.searchText,
      sortObject = state.sortObject;
  var rolesArray = Object.values(roles);

  if (searchText) {
    var filterKeys = ['name', 'display_name'];
    rolesArray = (0,_shared_searchFilter__WEBPACK_IMPORTED_MODULE_8__["default"])(rolesArray, searchText, filterKeys);
  }

  if (sortObject) {
    rolesArray = (0,_shared_sortFilter__WEBPACK_IMPORTED_MODULE_9__["default"])(rolesArray, sortObject);
  }

  return {
    roles: rolesArray,
    sortObject: sortObject,
    searchText: searchText
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchRoles: _store_actions_roleAction__WEBPACK_IMPORTED_MODULE_15__.fetchRoles,
  sortAction: _store_action_sortAction__WEBPACK_IMPORTED_MODULE_13__.sortAction,
  toggleModal: _store_action_modalAction__WEBPACK_IMPORTED_MODULE_14__.toggleModal
})(Roles));

/***/ }),

/***/ "./resources/lms/src/admin/components/roles/roleValidate.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/admin/components/roles/roleValidate.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (formValues) {
  var errors = {};

  if (!formValues.name) {
    errors.name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('roles.input.name.validate.label');
  }

  if (!formValues.display_name) {
    errors.display_name = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_0__.getFormattedMessage)('roles.input.display-name.validate.label');
  }

  if (!formValues.permissions || !formValues.permissions.length) {
    errors.permissions = {
      _error: 'At least one permission must be required.'
    };
  }

  var permissionsArrayErrors = [];

  if (formValues.permissions && formValues.permissions.length) {
    var selectedArray = formValues.permissions.map(function (_ref) {
      var isChecked = _ref.isChecked;
      return isChecked;
    });
    var array = selectedArray.filter(function (selected) {
      return selected === true;
    });
    var permissionErrors = {};

    if (array.length === 0) {
      permissionErrors.isChecked = 'Required';
      permissionsArrayErrors.push(permissionErrors);
    }

    if (permissionsArrayErrors.length) {
      errors.permissions = permissionsArrayErrors;
    }
  }

  return errors;
});

/***/ }),

/***/ "./resources/lms/src/admin/shared/prepareArray.js":
/*!********************************************************!*\
  !*** ./resources/lms/src/admin/shared/prepareArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareRoles": () => (/* binding */ prepareRoles),
/* harmony export */   "prepareBookLanguage": () => (/* binding */ prepareBookLanguage),
/* harmony export */   "prepareCreatableObject": () => (/* binding */ prepareCreatableObject),
/* harmony export */   "prepareImportedBookObject": () => (/* binding */ prepareImportedBookObject),
/* harmony export */   "preparePermissions": () => (/* binding */ preparePermissions)
/* harmony export */ });
var prepareRoles = function prepareRoles(roles) {
  var rolesArray = [];
  roles.forEach(function (role) {
    return rolesArray.push({
      id: role.id,
      name: role.display_name
    });
  });
  return rolesArray;
};
var prepareBookLanguage = function prepareBookLanguage(bookLanguages) {
  var bookLanguageArray = [];
  bookLanguages.forEach(function (author) {
    return bookLanguageArray.push({
      id: author.id,
      name: author.language_name
    });
  });
  return bookLanguageArray;
};
var prepareCreatableObject = function prepareCreatableObject(objectArray) {
  var labelKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'name';
  var newObjectArray = [];
  objectArray.forEach(function (item) {
    return newObjectArray.push({
      value: item.id,
      label: item[labelKey]
    });
  });
  return newObjectArray;
};
var prepareImportedBookObject = function prepareImportedBookObject(objectArray) {
  var newObjectArray = [];
  objectArray.forEach(function (item) {
    return newObjectArray.push({
      value: item,
      label: item
    });
  });
  return newObjectArray;
};
var preparePermissions = function preparePermissions(permissions) {
  var permissionArray = [];
  permissions.forEach(function (permission) {
    permissionArray.push({
      id: permission.id,
      name: permission.display_name
    });
  });
  return permissionArray;
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/permissionAction.js":
/*!*******************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/permissionAction.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPermissions": () => (/* binding */ fetchPermissions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var fetchPermissions = function fetchPermissions() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__.apiBaseURL.PERMISSION).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.permissionActionType.FETCH_PERMISSIONS,
                  payload: response.data.data
                });
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
                }));
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/admin/store/actions/roleAction.js":
/*!*************************************************************!*\
  !*** ./resources/lms/src/admin/store/actions/roleAction.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchRoles": () => (/* binding */ fetchRoles),
/* harmony export */   "addRole": () => (/* binding */ addRole),
/* harmony export */   "editRole": () => (/* binding */ editRole),
/* harmony export */   "deleteRole": () => (/* binding */ deleteRole)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/admin/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/lms/src/admin/config/apiConfig.js");
/* harmony import */ var _store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/action/progressBarAction */ "./resources/lms/src/store/action/progressBarAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/action/toastAction */ "./resources/lms/src/store/action/toastAction.js");
/* harmony import */ var _store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/action/modalAction */ "./resources/lms/src/store/action/modalAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var fetchRoles = function fetchRoles() {
  var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true)) : null;
              _context.next = 3;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_7__.apiBaseURL.ROLE).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.roleActionType.FETCH_ROLES,
                  payload: response.data.data
                });
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              })["catch"](function (_ref2) {
                var response = _ref2.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
                }));
                isLoading ? dispatch((0,_store_action_progressBarAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false)) : null;
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var addRole = function addRole(role) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_7__.apiBaseURL.ROLE, role).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.roleActionType.ADD_ROLE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('roles.success.create.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
                }));
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var editRole = function editRole(roleId, role) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_7__.apiBaseURL.ROLE + '/' + roleId, role).then(function (response) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.roleActionType.EDIT_ROLE,
                  payload: response.data.data
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('roles.success.edit.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
              })["catch"](function (_ref6) {
                var response = _ref6.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
                }));
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var deleteRole = function deleteRole(roleId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_7__.apiBaseURL.ROLE + '/' + roleId).then(function () {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.roleActionType.DELETE_ROLE,
                  payload: roleId
                });
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)('roles.success.delete.message')
                }));
                dispatch((0,_store_action_modalAction__WEBPACK_IMPORTED_MODULE_5__.toggleModal)());
              })["catch"](function (_ref8) {
                var response = _ref8.response;
                dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_4__.addToast)({
                  text: response.data.message,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
                }));
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/shared/components/CheckBox.js":
/*!*********************************************************!*\
  !*** ./resources/lms/src/shared/components/CheckBox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.scss */ "./resources/lms/src/shared/components/Component.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CheckBox = function CheckBox(props) {
  var input = props.input,
      label = props.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
    className: "control control--checkbox",
    children: [label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", _objectSpread({
      type: "checkbox",
      checked: !!input.value,
      onChange: function onChange(e, _ref) {
        var checked = _ref.checked;
        return input.onChange(checked);
      }
    }, input)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "control__indicator"
    })]
  });
};

CheckBox.propTypes = {
  input: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);

/***/ }),

/***/ "./resources/lms/src/shared/components/CustomSearchField.js":
/*!******************************************************************!*\
  !*** ./resources/lms/src/shared/components/CustomSearchField.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/Field.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/reduxForm.js");
/* harmony import */ var _store_action_searchAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action/searchAction */ "./resources/lms/src/store/action/searchAction.js");
/* harmony import */ var _CustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomInput */ "./resources/lms/src/shared/components/CustomInput.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var CustomSearchField = function CustomSearchField(props) {
  var searchFilter = props.searchFilter;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    searchFilter('');
  }, []);

  var searchRecords = function searchRecords(event) {
    searchFilter(event.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(redux_form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "search-text",
    type: "search",
    placeholder: "global.input.search-btn.label",
    groupText: "search",
    isCustom: true,
    onChange: searchRecords,
    component: _CustomInput__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
};

CustomSearchField.propTypes = {
  searchFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
var form = (0,redux_form__WEBPACK_IMPORTED_MODULE_7__["default"])({
  form: 'searchForm'
})(CustomSearchField);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, {
  searchFilter: _store_action_searchAction__WEBPACK_IMPORTED_MODULE_3__.searchFilter
})(form));

/***/ }),

/***/ "./resources/lms/src/shared/searchFilter.js":
/*!**************************************************!*\
  !*** ./resources/lms/src/shared/searchFilter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var filterKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (searchText && filterKeys.length > 0) {
    var resultArray = [];
    items.forEach(function (obj) {
      filterKeys.some(function (property) {
        if (obj[property] && obj[property].toString().toLowerCase().includes(searchText.toLowerCase())) {
          resultArray.push(obj);
          return true;
        }
      });
    });
    return resultArray;
  } else if (searchText) {
    return items.filter(function (item) {
      return JSON.stringify(item).toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
    });
  } else {
    return items;
  }
});

/***/ }),

/***/ "./resources/lms/src/shared/sortFilter.js":
/*!************************************************!*\
  !*** ./resources/lms/src/shared/sortFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sortObject = arguments.length > 1 ? arguments[1] : undefined;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default().orderBy(data, function (item) {
    return item[sortObject.orderBy];
  }, sortObject.order);
});

/***/ }),

/***/ "./resources/lms/src/shared/table-header/Tableheader.js":
/*!**************************************************************!*\
  !*** ./resources/lms/src/shared/table-header/Tableheader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tableheader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tableheader.scss */ "./resources/lms/src/shared/table-header/Tableheader.scss");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedMethod */ "./resources/lms/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var TableHeader = function TableHeader(props) {
  var headers = props.headers,
      sortObject = props.sortObject,
      staticField = props.staticField,
      sortConfig = props.sortConfig,
      sortAction = props.sortAction,
      _props$isAction = props.isAction,
      isAction = _props$isAction === void 0 ? true : _props$isAction,
      isStatusField = props.isStatusField;

  var sort = function sort(header) {
    sortAction({
      orderBy: header,
      order: sortObject.order === 'asc' ? 'desc' : 'asc'
    });
  };

  var sortIcon = function sortIcon(header) {
    return sortConfig(header, sortObject);
  };

  var renderActionColumn = function renderActionColumn() {
    if (isAction) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
        className: "table-header__action table-header__responsive",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('react-data-table.action.column')
      });
    }
  };

  var renderStaticColumn = function renderStaticColumn() {
    if (staticField) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
        className: "table-header__responsive",
        children: staticField
      });
    }
  };

  var renderStatusColumn = function renderStatusColumn() {
    if (isStatusField) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
        className: "table-header__status table-header__responsive",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('react-data-table.status.column')
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
    className: "table-header",
    children: [renderStaticColumn(), headers.map(function (header) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
        onClick: function onClick() {
          return sort(header.id);
        },
        className: "table-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "d-flex justify-content-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            children: header.name
          }), " ", sortIcon(header.id)]
        })
      }, header.id);
    }), renderStatusColumn(), renderActionColumn()]
  });
};

TableHeader.propTypes = {
  sortObject: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  headers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  staticField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isStatusField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  sortConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  sortAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableHeader);

/***/ }),

/***/ "./resources/lms/src/store/action/searchAction.js":
/*!********************************************************!*\
  !*** ./resources/lms/src/store/action/searchAction.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchFilter": () => (/* binding */ searchFilter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var searchFilter = function searchFilter(searchTerm) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.constants.SEARCH_ACTION,
                payload: searchTerm
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./resources/lms/src/store/action/sortAction.js":
/*!******************************************************!*\
  !*** ./resources/lms/src/store/action/sortAction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortAction": () => (/* binding */ sortAction)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/lms/src/constants/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var sortAction = function sortAction(sortObject) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.constants.SORT_ACTION,
                payload: sortObject
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/table-header/Tableheader.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/table-header/Tableheader.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-header th {\n  cursor: pointer;\n  min-width: 200px;\n}\n.table-header__status, .table-header__action {\n  cursor: default !important;\n  width: 110px;\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/lms/src/shared/table-header/Tableheader.scss":
/*!****************************************************************!*\
  !*** ./resources/lms/src/shared/table-header/Tableheader.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./Tableheader.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/lms/src/shared/table-header/Tableheader.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_Tableheader_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/reactstrap/es/Table.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Table.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");


var _excluded = ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"];




var propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  bordered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  borderless: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  striped: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  dark: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  hover: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  responsiveTag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)])
};
var defaultProps = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./node_modules/redux-form/es/ConnectedFieldArray.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-form/es/ConnectedFieldArray.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createConnectedFieldArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _createFieldArrayProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createFieldArrayProps */ "./node_modules/redux-form/es/createFieldArrayProps.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");
/* harmony import */ var _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/validateComponentProp */ "./node_modules/redux-form/es/util/validateComponentProp.js");











var propsToNotUpdateFor = ['_reduxForm', 'value'];
function createConnectedFieldArray(structure) {
  var deepEqual = structure.deepEqual,
      getIn = structure.getIn,
      size = structure.size,
      equals = structure.equals,
      orderChanged = structure.orderChanged;

  var getSyncError = function getSyncError(syncErrors, name) {
    // For an array, the error can _ONLY_ be under _error.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return _structure_plain__WEBPACK_IMPORTED_MODULE_7__["default"].getIn(syncErrors, name + "._error");
  };

  var getSyncWarning = function getSyncWarning(syncWarnings, name) {
    // For an array, the warning can _ONLY_ be under _warning.
    // This is why this getSyncError is not the same as the
    // one in Field.
    return getIn(syncWarnings, name + "._warning");
  };

  var ConnectedFieldArray = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ConnectedFieldArray, _Component);

    function ConnectedFieldArray() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      _this.ref = react__WEBPACK_IMPORTED_MODULE_4__.createRef();

      _this.getValue = function (index) {
        return _this.props.value && getIn(_this.props.value, String(index));
      };

      return _this;
    }

    var _proto = ConnectedFieldArray.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      // Update if the elements of the value array was updated.
      var thisValue = this.props.value;
      var nextValue = nextProps.value;

      if (thisValue && nextValue) {
        var nextValueItemsSame = equals(nextValue, thisValue); //.every(val => ~thisValue.indexOf(val))

        var nextValueItemsOrderChanged = orderChanged(thisValue, nextValue);
        var thisValueLength = thisValue.length || thisValue.size;
        var nextValueLength = nextValue.length || nextValue.size;

        if (thisValueLength !== nextValueLength || nextValueItemsSame && nextValueItemsOrderChanged || nextProps.rerenderOnEveryChange && thisValue.some(function (val, index) {
          return !deepEqual(val, nextValue[index]);
        })) {
          return true;
        }
      }

      var nextPropsKeys = Object.keys(nextProps);
      var thisPropsKeys = Object.keys(this.props); // if we have children, we MUST update in React 16
      // https://twitter.com/erikras/status/915866544558788608

      return !!(this.props.children || nextProps.children || nextPropsKeys.length !== thisPropsKeys.length || nextPropsKeys.some(function (prop) {
        // useful to debug rerenders
        // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
        //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
        // }
        return !~propsToNotUpdateFor.indexOf(prop) && !deepEqual(_this2.props[prop], nextProps[prop]);
      }));
    };

    _proto.getRenderedComponent = function getRenderedComponent() {
      return this.ref.current;
    };

    _proto.render = function render() {
      var _this$props = this.props,
          component = _this$props.component,
          forwardRef = _this$props.forwardRef,
          name = _this$props.name,
          _reduxForm = _this$props._reduxForm,
          validate = _this$props.validate,
          warn = _this$props.warn,
          rerenderOnEveryChange = _this$props.rerenderOnEveryChange,
          rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "forwardRef", "name", "_reduxForm", "validate", "warn", "rerenderOnEveryChange"]);

      var props = (0,_createFieldArrayProps__WEBPACK_IMPORTED_MODULE_8__["default"])(structure, name, _reduxForm.form, _reduxForm.sectionPrefix, this.getValue, rest);

      if (forwardRef) {
        props.ref = this.ref;
      }

      return (0,react__WEBPACK_IMPORTED_MODULE_4__.createElement)(component, props);
    };

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ConnectedFieldArray, [{
      key: "dirty",
      get: function get() {
        return this.props.dirty;
      }
    }, {
      key: "pristine",
      get: function get() {
        return this.props.pristine;
      }
    }, {
      key: "value",
      get: function get() {
        return this.props.value;
      }
    }]);

    return ConnectedFieldArray;
  }(react__WEBPACK_IMPORTED_MODULE_4__.Component);

  ConnectedFieldArray.propTypes = {
    component: _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_9__["default"],
    props: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
    rerenderOnEveryChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
  };
  ConnectedFieldArray.defaultProps = {
    rerenderOnEveryChange: false
  };
  var connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(function (state, ownProps) {
    var name = ownProps.name,
        _ownProps$_reduxForm = ownProps._reduxForm,
        initialValues = _ownProps$_reduxForm.initialValues,
        getFormState = _ownProps$_reduxForm.getFormState;
    var formState = getFormState(state);
    var initial = getIn(formState, "initial." + name) || initialValues && getIn(initialValues, name);
    var value = getIn(formState, "values." + name);
    var submitting = getIn(formState, 'submitting');
    var syncError = getSyncError(getIn(formState, 'syncErrors'), name);
    var syncWarning = getSyncWarning(getIn(formState, 'syncWarnings'), name);
    var pristine = deepEqual(value, initial);
    return {
      asyncError: getIn(formState, "asyncErrors." + name + "._error"),
      dirty: !pristine,
      pristine: pristine,
      state: getIn(formState, "fields." + name),
      submitError: getIn(formState, "submitErrors." + name + "._error"),
      submitFailed: getIn(formState, 'submitFailed'),
      submitting: submitting,
      syncError: syncError,
      syncWarning: syncWarning,
      value: value,
      length: size(value)
    };
  }, function (dispatch, ownProps) {
    var name = ownProps.name,
        _reduxForm = ownProps._reduxForm;
    var arrayInsert = _reduxForm.arrayInsert,
        arrayMove = _reduxForm.arrayMove,
        arrayPop = _reduxForm.arrayPop,
        arrayPush = _reduxForm.arrayPush,
        arrayRemove = _reduxForm.arrayRemove,
        arrayRemoveAll = _reduxForm.arrayRemoveAll,
        arrayShift = _reduxForm.arrayShift,
        arraySplice = _reduxForm.arraySplice,
        arraySwap = _reduxForm.arraySwap,
        arrayUnshift = _reduxForm.arrayUnshift;
    return lodash_mapValues__WEBPACK_IMPORTED_MODULE_3___default()({
      arrayInsert: arrayInsert,
      arrayMove: arrayMove,
      arrayPop: arrayPop,
      arrayPush: arrayPush,
      arrayRemove: arrayRemove,
      arrayRemoveAll: arrayRemoveAll,
      arrayShift: arrayShift,
      arraySplice: arraySplice,
      arraySwap: arraySwap,
      arrayUnshift: arrayUnshift
    }, function (actionCreator) {
      return (0,redux__WEBPACK_IMPORTED_MODULE_10__.bindActionCreators)(actionCreator.bind(null, name), dispatch);
    });
  }, undefined, {
    forwardRef: true
  });
  return connector(ConnectedFieldArray);
}

/***/ }),

/***/ "./node_modules/redux-form/es/FieldArray.js":
/*!**************************************************!*\
  !*** ./node_modules/redux-form/es/FieldArray.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createFieldArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFieldArray */ "./node_modules/redux-form/es/createFieldArray.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/redux-form/es/structure/plain/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createFieldArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/redux-form/es/createFieldArray.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-form/es/createFieldArray.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFieldArray)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ConnectedFieldArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConnectedFieldArray */ "./node_modules/redux-form/es/ConnectedFieldArray.js");
/* harmony import */ var _util_prefixName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/prefixName */ "./node_modules/redux-form/es/util/prefixName.js");
/* harmony import */ var _ReduxFormContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReduxFormContext */ "./node_modules/redux-form/es/ReduxFormContext.js");
/* harmony import */ var _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/validateComponentProp */ "./node_modules/redux-form/es/util/validateComponentProp.js");











var toArray = function toArray(value) {
  return Array.isArray(value) ? value : [value];
};

var wrapError = function wrapError(fn, key) {
  return fn && function () {
    var validators = toArray(fn);

    for (var i = 0; i < validators.length; i++) {
      var result = validators[i].apply(validators, arguments);

      if (result) {
        var _ref;

        return _ref = {}, _ref[key] = result, _ref;
      }
    }
  };
};

function createFieldArray(structure) {
  var ConnectedFieldArray = (0,_ConnectedFieldArray__WEBPACK_IMPORTED_MODULE_6__["default"])(structure);

  var FieldArray = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(FieldArray, _Component);

    function FieldArray(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.ref = react__WEBPACK_IMPORTED_MODULE_3__.createRef();

      if (!props._reduxForm) {
        throw new Error('FieldArray must be inside a component decorated with reduxForm()');
      }

      return _this;
    }

    var _proto = FieldArray.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.props._reduxForm.register(this.name, 'FieldArray', function () {
        return wrapError(_this2.props.validate, '_error');
      }, function () {
        return wrapError(_this2.props.warn, '_warning');
      });
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      var oldName = (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props, this.props.name);
      var newName = (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(nextProps, nextProps.name);

      if (oldName !== newName) {
        // unregister old name
        this.props._reduxForm.unregister(oldName); // register new name


        this.props._reduxForm.register(newName, 'FieldArray');
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.props._reduxForm.unregister(this.name);
    };

    _proto.getRenderedComponent = function getRenderedComponent() {
      invariant__WEBPACK_IMPORTED_MODULE_5___default()(this.props.forwardRef, 'If you want to access getRenderedComponent(), ' + 'you must specify a forwardRef prop to FieldArray');
      return this.ref && this.ref.current.getRenderedComponent();
    };

    _proto.render = function render() {
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(ConnectedFieldArray, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        name: this.name,
        ref: this.ref
      }));
    };

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FieldArray, [{
      key: "name",
      get: function get() {
        return (0,_util_prefixName__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props, this.props.name);
      }
    }, {
      key: "dirty",
      get: function get() {
        return !this.ref || this.ref.current.dirty;
      }
    }, {
      key: "pristine",
      get: function get() {
        return !!(this.ref && this.ref.current.pristine);
      }
    }, {
      key: "value",
      get: function get() {
        return this.ref ? this.ref.current.value : undefined;
      }
    }]);

    return FieldArray;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  FieldArray.propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    component: _util_validateComponentProp__WEBPACK_IMPORTED_MODULE_8__["default"],
    props: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
    validate: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func))]),
    warn: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().func))]),
    forwardRef: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    _reduxForm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
  };
  return (0,_ReduxFormContext__WEBPACK_IMPORTED_MODULE_9__.withReduxForm)(FieldArray);
}

/***/ }),

/***/ "./node_modules/redux-form/es/createFieldArrayProps.js":
/*!*************************************************************!*\
  !*** ./node_modules/redux-form/es/createFieldArrayProps.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFieldArrayProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");


function createFieldArrayProps(_ref, name, form, sectionPrefix, getValue, _ref2) {
  var getIn = _ref.getIn;

  var arrayInsert = _ref2.arrayInsert,
      arrayMove = _ref2.arrayMove,
      arrayPop = _ref2.arrayPop,
      arrayPush = _ref2.arrayPush,
      arrayRemove = _ref2.arrayRemove,
      arrayRemoveAll = _ref2.arrayRemoveAll,
      arrayShift = _ref2.arrayShift,
      arraySplice = _ref2.arraySplice,
      arraySwap = _ref2.arraySwap,
      arrayUnshift = _ref2.arrayUnshift,
      asyncError = _ref2.asyncError,
      dirty = _ref2.dirty,
      length = _ref2.length,
      pristine = _ref2.pristine,
      submitError = _ref2.submitError,
      state = _ref2.state,
      submitFailed = _ref2.submitFailed,
      submitting = _ref2.submitting,
      syncError = _ref2.syncError,
      syncWarning = _ref2.syncWarning,
      value = _ref2.value,
      props = _ref2.props,
      rest = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["arrayInsert", "arrayMove", "arrayPop", "arrayPush", "arrayRemove", "arrayRemoveAll", "arrayShift", "arraySplice", "arraySwap", "arrayUnshift", "asyncError", "dirty", "length", "pristine", "submitError", "state", "submitFailed", "submitting", "syncError", "syncWarning", "value", "props"]);

  var error = syncError || asyncError || submitError;
  var warning = syncWarning;
  var fieldName = sectionPrefix ? name.replace(sectionPrefix + ".", '') : name;

  var finalProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fields: {
      _isFieldArray: true,
      forEach: function forEach(callback) {
        return (value || []).forEach(function (item, index) {
          return callback(fieldName + "[" + index + "]", index, finalProps.fields);
        });
      },
      get: getValue,
      getAll: function getAll() {
        return value;
      },
      insert: arrayInsert,
      length: length,
      map: function map(callback) {
        return (value || []).map(function (item, index) {
          return callback(fieldName + "[" + index + "]", index, finalProps.fields);
        });
      },
      move: arrayMove,
      name: name,
      pop: function pop() {
        arrayPop();
        return getIn(value, String(length - 1));
      },
      push: arrayPush,
      reduce: function reduce(callback, initial) {
        return (value || []).reduce(function (accumulator, item, index) {
          return callback(accumulator, fieldName + "[" + index + "]", index, finalProps.fields);
        }, initial);
      },
      remove: arrayRemove,
      removeAll: arrayRemoveAll,
      shift: function shift() {
        arrayShift();
        return getIn(value, '0');
      },
      splice: arraySplice,
      swap: arraySwap,
      unshift: arrayUnshift
    },
    meta: {
      dirty: dirty,
      error: error,
      form: form,
      warning: warning,
      invalid: !!error,
      pristine: pristine,
      submitting: submitting,
      submitFailed: submitFailed,
      valid: !error
    }
  }, props, {}, rest);

  return finalProps;
}

/***/ })

}]);