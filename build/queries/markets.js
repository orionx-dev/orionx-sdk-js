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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query {\n      markets {\n        code\n        name\n        mainCurrency {\n          code\n          name\n          units\n        }\n        secondaryCurrency {\n          code\n          name\n          units\n        }\n      }\n    }\n  '], ['\n    query {\n      markets {\n        code\n        name\n        mainCurrency {\n          code\n          name\n          units\n        }\n        secondaryCurrency {\n          code\n          name\n          units\n        }\n      }\n    }\n  ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
<<<<<<< HEAD
  var query, response;
=======
  var query;
>>>>>>> 75632a256e507d46eb41d88181aba24c05e773f2
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = (0, _graphqlTag2.default)(_templateObject);
          _context.next = 3;
          return this.graphql({ query: query, variables: {} });

        case 3:
<<<<<<< HEAD
          response = _context.sent;
          return _context.abrupt('return', response.markets);

        case 5:
=======
          return _context.abrupt('return', _context.sent);

        case 4:
>>>>>>> 75632a256e507d46eb41d88181aba24c05e773f2
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));