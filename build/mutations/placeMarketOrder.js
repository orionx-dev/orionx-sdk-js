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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {\n      placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {\n        _id\n        type\n        amount\n        createdAt\n        market {\n          code\n        }\n      }\n    }\n  '], ['\n    mutation placeMarketOrder($marketCode: ID, $amount: BigInt, $sell: Boolean) {\n      placeMarketOrder(marketCode: $marketCode, amount: $amount, sell: $sell) {\n        _id\n        type\n        amount\n        createdAt\n        market {\n          code\n        }\n      }\n    }\n  ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var throwParamsError = function throwParamsError(param) {
  throw new Error('Missing ' + param + ', try with Orionx.placeMarketOrder({marketCode: \':marketCode\', amount: :amount, sell: :sell})\n  Remember that the amount must be multiplied by 10^(currency units).\n  ');
};

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var marketCode = _ref2.marketCode,
        amount = _ref2.amount,
        sell = _ref2.sell;
    var query, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!marketCode) throwParamsError('marketCode');
            if (!amount) throwParamsError('amount');
            if (sell == null) throwParamsError('sell');

            query = (0, _graphqlTag2.default)(_templateObject);
            _context.next = 6;
            return this.graphql({
              query: query,
              variables: { marketCode: marketCode, amount: amount, sell: sell }
            });

          case 6:
            response = _context.sent;
            return _context.abrupt('return', response.placeMarketOrder);

          case 8:
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