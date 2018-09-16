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

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _queries = require('./queries');

var _queries2 = _interopRequireDefault(_queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Orionx = (0, _extends3.default)({
  setCredentials: function setCredentials(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiUri = _ref.apiUri;

    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql/';
    if (!apiKey) throw new Error('Missing apiKey');
    if (!secretKey) throw new Error('Missing secretKey');
    this.credentials = { apiKey: apiKey, secretKey: secretKey, apiUri: apiUri };
  },
  getCredentials: function getCredentials() {
    return this.credentials;
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
              if (query) {
                _context.next = 2;
                break;
              }

              throw new Error('Missing Query');

            case 2:
              if (variables) {
                _context.next = 4;
                break;
              }

              throw new Error('Missing Variables');

            case 4:
              body = JSON.stringify({ query: query, variables: variables });
              _context.next = 7;
              return (0, _callOrionx2.default)({ body: body, credentials: _this.credentials });

            case 7:
              return _context.abrupt('return', _context.sent);

            case 8:
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

    var query = (0, _graphqlTag2.default)(_templateObject, schema);
    return this.graphql({ query: query, variables: variables });
  },
  mutation: function mutation(_ref4) {
    var schema = _ref4.schema,
        params = _ref4.params;

    var query = (0, _graphqlTag2.default)(_templateObject2, schema);
    return this.graphql({ query: query, variables: variables });
  }
}, _queries2.default);
exports.default = Orionx;