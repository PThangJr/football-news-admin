"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fetchAuth = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authAPI = _interopRequireDefault(require("../../../api/authAPI"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchAuth = (0, _toolkit.createAsyncThunk)('/admin', function _callee(payload, thunkAPI) {
  var account, rejectWithValue;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_authAPI["default"].login(payload));

        case 3:
          account = _context.sent;
          console.log(account);
          localStorage.setItem('access_token', account.access_token);
          localStorage.setItem('username', account.username);
          return _context.abrupt("return", account);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          rejectWithValue = thunkAPI.rejectWithValue;
          return _context.abrupt("return", rejectWithValue(_context.t0.data));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
exports.fetchAuth = fetchAuth;
var initialState = {
  access_token: '',
  account: {},
  errors: {}
};
var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchAuth.fulfilled, function (state, action) {
    // console.log(action);
    var _action$payload = action.payload,
        access_token = _action$payload.access_token,
        username = _action$payload.username; // return (state.access_token = access_token);

    state.access_token = access_token;
    state.account = username;
  }), _defineProperty(_extraReducers, fetchAuth.rejected, function (state, action) {
    // console.log(action);
    state.errors = action.payload;
  }), _extraReducers)
});
var reducer = authSlice.reducer;
var _default = reducer;
exports["default"] = _default;