'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['query ', ''], ['query ', '']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['mutation ', ''], ['mutation ', '']);

var _callOrionx = require('./helpers/callOrionx');

var _callOrionx2 = _interopRequireDefault(_callOrionx);

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var throwCredentialsError = function throwCredentialsError(param) {
  throw new Error('Missing ' + param + ', try with Orionx.setCredentials({apiKey: :apiKey, secretKey: :secretKey, apiUri: :apiUri}) method');
};
var Orionx = (0, _extends3.default)({
  setCredentials: function setCredentials(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiUri = _ref.apiUri;

    if (!apiKey) throwCredentialsError('apiKey');
    if (!secretKey) throwCredentialsError('secretKey');
    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql/';
    this.credentials = { apiKey: apiKey, secretKey: secretKey, apiUri: apiUri };
  },
  getCredentials: function getCredentials() {
    return this.credentials;
  },
  checkCredentials: function checkCredentials() {
    if (!this.credentials) throwCredentialsError('credentials');
    var _credentials = this.credentials,
        apiUri = _credentials.apiUri,
        secretKey = _credentials.secretKey,
        apiKey = _credentials.apiKey;

    if (!apiUri) throwCredentialsError('apiUri');
    if (!apiKey) throwCredentialsError('apiKey');
    if (!secretKey) throwCredentialsError('secretKey');
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
  },
  query: function query(_ref3) {
    var schema = _ref3.schema,
        variables = _ref3.variables;

    var query = gql(_templateObject, schema);
    return this.graphql({ query: query, variables: variables });
  },
  mutation: function mutation(_ref4) {
    var schema = _ref4.schema,
        params = _ref4.params;

    var query = gql(_templateObject2, schema);
    return this.graphql({ query: query, variables: variables });
  }
}, _queries2.default, _mutations2.default);
exports.default = Orionx;