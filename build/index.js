'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _callOrionx = require('./helpers/callOrionx');

var _callOrionx2 = _interopRequireDefault(_callOrionx);

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Orionx = (0, _extends3.default)({
  setCredentials: function setCredentials(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiUri = _ref.apiUri;

    if (!apiKey) throw new Error('Missing apiKey, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method');
    if (!secretKey) throw new Error('Missing secretKey, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method');
    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql/';
    this.credentials = { apiKey: apiKey, secretKey: secretKey, apiUri: apiUri };
  },
  getCredentials: function getCredentials() {
    return this.credentials;
  },
  checkCredentials: function checkCredentials() {
    var errorMsg = 'Missing credentials, try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method';
    if (!this.credentials) throw new Error(errorMsg);
    var _credentials = this.credentials,
        apiUri = _credentials.apiUri,
        secretKey = _credentials.secretKey,
        apiKey = _credentials.apiKey;

    if (!apiUri || !apiKey || !secretKey) throw new Error(errorMsg);
  },
  graphql: function graphql(_ref2) {
    var _this = this;

    var query = _ref2.query,
        variables = _ref2.variables;
    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var body;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.checkCredentials();

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
              body = JSON.stringify({ query: query, variables: variables });
              _context.next = 8;
              return (0, _callOrionx2.default)({ body: body, credentials: _this.credentials });

            case 8:
              return _context.abrupt('return', _context.sent);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
}, _queries2.default);
exports.default = Orionx;