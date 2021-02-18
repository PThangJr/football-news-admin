"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = _interopRequireDefault(require("./axiosClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsAPI = {
  getNews: function getNews(config) {
    var tournament = config.tournament,
        pagination = config.pagination;
    var url = "/news/".concat(tournament) || "/";
    return _axiosClient["default"].get(url, pagination);
  },
  getNewById: function getNewById(config) {
    var tournament = config.tournament,
        _id = config._id;
    var url = "/news/".concat(tournament, "/").concat(_id);
    return _axiosClient["default"].get(url);
  },
  getNewBySlug: function getNewBySlug(config) {
    var tournament = config.tournament,
        slug = config.slug;
    tournament = tournament || '';
    var url = "/news".concat(tournament, "/").concat(slug);
    return _axiosClient["default"].get(url);
  },
  createNew: function createNew(data) {
    var url = "/news";
    return _axiosClient["default"].post(url, data);
  },
  deleteNew: function deleteNew(slug) {
    var url = "/news/".concat(slug);
    return _axiosClient["default"]["delete"](url);
  }
};
var _default = newsAPI;
exports["default"] = _default;