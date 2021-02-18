"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authSlice = _interopRequireDefault(require("./slice/authSlice"));

var _newsSlice = _interopRequireDefault(require("./slice/newsSlice"));

var _createNewSlice = _interopRequireDefault(require("./slice/createNewSlice"));

var _deleteNewSlice = _interopRequireDefault(require("./slice/deleteNewSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = {
  account: _authSlice["default"],
  news: _newsSlice["default"],
  newCreated: _createNewSlice["default"] // newDeleted: deleteNewReducer,

};
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = store;
exports["default"] = _default;