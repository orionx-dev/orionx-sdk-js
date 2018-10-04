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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    mutation createPayment(\n      $acceptedCurrenciesCodes: [ID]\n      $amount: BigInt\n      $callbackURL: String\n      $description: String\n      $mainCurrencyCode: ID\n      $returnURL: String\n      $title: String\n    ) {\n      createPayment(\n        acceptedCurrenciesCodes: $acceptedCurrenciesCodes\n        amount: $amount\n        callbackURL: $callbackURL\n        description: $description\n        mainCurrencyCode: $mainCurrencyCode\n        returnURL: $returnURL\n        title: $title\n      ) {\n        _id\n        amount\n        description\n        mainCurrency {\n          code\n          name\n        }\n        returnURL\n        status\n        title\n      }\n    }\n  '], ['\n    mutation createPayment(\n      $acceptedCurrenciesCodes: [ID]\n      $amount: BigInt\n      $callbackURL: String\n      $description: String\n      $mainCurrencyCode: ID\n      $returnURL: String\n      $title: String\n    ) {\n      createPayment(\n        acceptedCurrenciesCodes: $acceptedCurrenciesCodes\n        amount: $amount\n        callbackURL: $callbackURL\n        description: $description\n        mainCurrencyCode: $mainCurrencyCode\n        returnURL: $returnURL\n        title: $title\n      ) {\n        _id\n        amount\n        description\n        mainCurrency {\n          code\n          name\n        }\n        returnURL\n        status\n        title\n      }\n    }\n  ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(variables) {
    var acceptedCurrenciesCodes, amount, callbackURL, description, mainCurrencyCode, returnURL, title, query, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            acceptedCurrenciesCodes = variables.acceptedCurrenciesCodes, amount = variables.amount, callbackURL = variables.callbackURL, description = variables.description, mainCurrencyCode = variables.mainCurrencyCode, returnURL = variables.returnURL, title = variables.title;
            query = (0, _graphqlTag2.default)(_templateObject);
            _context.next = 4;
            return this.graphql({
              query: query,
              variables: variables
            });

          case 4:
            response = _context.sent;
            return _context.abrupt('return', response.createPayment);

          case 6:
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