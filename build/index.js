"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _callOrionx = _interopRequireDefault(require("./helpers/callOrionx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Orionx = {
  credentials: {
    apiKey: '',
    secretApiKey: '',
    apiUrl: 'https://api2.orionx.io/graphql'
  },
  config: function config(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiUrl = _ref.apiUrl;

    if (!apiKey) {
      throw new Error('Missing apiKey');
    }

    if (!secretKey) {
      throw new Error('Missing secretApiKey');
    }

    this.credentials.apiKey = apiKey;
    this.credentials.secretKey = secretKey;

    if (apiUrl) {
      this.apiUrl = apiUrl;
    }
  },
  send: function () {
    var _send = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref2) {
      var query, variables, body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref2.query, variables = _ref2.variables;

              if (query) {
                _context.next = 3;
                break;
              }

              throw new Error('Missing Query');

            case 3:
              if (variables) {
                _context.next = 5;
                break;
              }

              throw new Error('Missing Variables');

            case 5:
              body = {
                query: query,
                variables: variables
              };
              _context.next = 8;
              return (0, _callOrionx.default)({
                body: body,
                credentials: this.credentials
              });

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function send(_x) {
      return _send.apply(this, arguments);
    };
  }()
};
var _default = Orionx;
exports.default = _default;