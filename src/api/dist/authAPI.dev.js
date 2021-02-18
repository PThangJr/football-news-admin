"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authAPI = {
  login: function login(data) {
    var url = '/admin';
    return _axiosClient["default"].post(url, data);
  }
};
var _default = authAPI;
exports["default"] = _default;