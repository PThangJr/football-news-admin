"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchDeleteNew = exports.fetchNewBySlug = exports.fetchNews = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchNews = (0, _toolkit.createAsyncThunk)('/news', function _callee(payload, thunkAPI) {
  var news, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].getNews(payload));

        case 3:
          news = _context.sent;
          return _context.abrupt("return", news);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context.abrupt("return", rejectWithValue(_context.t0));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchNews = fetchNews;
var fetchNewBySlug = (0, _toolkit.createAsyncThunk)('/newBySlug', function _callee2(payload, thunkAPI) {
  var news, rejectWithValue;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].getNewBySlug(payload));

        case 3:
          news = _context2.sent;
          return _context2.abrupt("return", news);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context2.abrupt("return", rejectWithValue(_context2.t0));

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.fetchNewBySlug = fetchNewBySlug;
var fetchDeleteNew = (0, _toolkit.createAsyncThunk)('/delete-new', function _callee3(payload, thunkAPI) {
  var news, dispatch, rejectWithValue;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].deleteNew(payload));

        case 3:
          news = _context3.sent;
          dispatch = thunkAPI.dispatch;

          if (news) {
            dispatch(deleteNew(payload));
          }

          return _context3.abrupt("return", news);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context3.abrupt("return", rejectWithValue(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
exports.fetchDeleteNew = fetchDeleteNew;
var initialState = {
  data: [],
  isLoading: null,
  errors: {}
};
var newsSlice = (0, _toolkit.createSlice)({
  name: 'news',
  initialState: initialState,
  reducers: {
    deleteNew: function deleteNew(state, action) {
      console.log(state);
      return state.data.filter(function (item) {
        return item.slug !== action.payload;
      });
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchNews.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNews.fulfilled, function (state, action) {
    // console.log(action);
    state.data = action.payload.data;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchNews.rejected, function (state, action) {
    // console.log(action);
    state.errors = action.payload;
  }), _defineProperty(_extraReducers, fetchNewBySlug.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchNewBySlug.fulfilled, function (state, action) {
    // console.log(action);
    state.data = action.payload.data;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchNewBySlug.rejected, function (state, action) {
    console.log(action);
    state.errors = action.payload.data;
  }), _defineProperty(_extraReducers, fetchDeleteNew.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchDeleteNew.fulfilled, function (state, action) {
    console.log(action);
    console.log(state); // state.data = action.payload.data;

    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchDeleteNew.rejected, function (state, action) {
    console.log(action);
    state.errors = action.payload.data;
  }), _extraReducers)
});
var actions = newsSlice.actions,
    reducer = newsSlice.reducer;
var deleteNew = actions.deleteNew;
var _default = reducer;
exports["default"] = _default;