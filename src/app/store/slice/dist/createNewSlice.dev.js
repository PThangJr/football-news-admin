"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchCreateNew = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _newsAPI = _interopRequireDefault(require("../../../api/newsAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchCreateNew = (0, _toolkit.createAsyncThunk)('/create-new', function _callee(payload, thunkAPI) {
  var news, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_newsAPI["default"].createNew(payload));

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
exports.fetchCreateNew = fetchCreateNew;
var initialState = {
  newCreated: [],
  isLoading: null,
  errors: {}
};
var newsSlice = (0, _toolkit.createSlice)({
  name: 'create-new',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchCreateNew.pending, function (state, action) {
    state.isLoading = true;
  }), _defineProperty(_extraReducers, fetchCreateNew.fulfilled, function (state, action) {
    // console.log(action);
    state.newCreated = action.payload.data;
    state.isLoading = false;
  }), _defineProperty(_extraReducers, fetchCreateNew.rejected, function (state, action) {
    // console.log(action);
    state.errors = action.payload;
  }), _extraReducers)
});
var reducer = newsSlice.reducer;
var _default = reducer;
exports["default"] = _default;