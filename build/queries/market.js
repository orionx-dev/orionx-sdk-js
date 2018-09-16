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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query getMarket($code: ID) {\n      market(code: $code) {\n        name\n        code\n        lastTrade {\n          price\n        }\n        mainCurrency {\n          code\n          units\n          format\n          symbol\n        }\n        secondaryCurrency {\n          code\n          units\n          format\n          symbol\n        }\n      }\n    }\n  '], ['\n    query getMarket($code: ID) {\n      market(code: $code) {\n        name\n        code\n        lastTrade {\n          price\n        }\n        mainCurrency {\n          code\n          units\n          format\n          symbol\n        }\n        secondaryCurrency {\n          code\n          units\n          format\n          symbol\n        }\n      }\n    }\n  ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var code = _ref2.code;
    var query;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = (0, _graphqlTag2.default)(_templateObject);
            _context.next = 3;
            return this.graphql({ query: query, variables: { code: code } });

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();