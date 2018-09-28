'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query {\n      me {\n        _id\n        name\n        email\n        createdAt\n        wallets {\n          _id\n          balance\n          availableBalance\n          unconfirmedBalance\n          currency {\n            code\n            name\n            symbol\n            format\n          }\n        }\n      }\n    }\n  '], ['\n    query {\n      me {\n        _id\n        name\n        email\n        createdAt\n        wallets {\n          _id\n          balance\n          availableBalance\n          unconfirmedBalance\n          currency {\n            code\n            name\n            symbol\n            format\n          }\n        }\n      }\n    }\n  ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var query, response;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = (0, _graphqlTag2.default)(_templateObject);
          _context.next = 3;
          return this.graphql({ query: query, variables: {} });

        case 3:
          response = _context.sent;
          return _context.abrupt('return', response.me);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));