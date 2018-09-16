'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var apiUri = _ref2.apiUri,
        timestamp = _ref2.timestamp,
        apiKey = _ref2.apiKey,
        signature = _ref2.signature,
        body = _ref2.body;

    var response, _JSON$parse, data, errors;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _requestPromise2.default)({
              uri: apiUri,
              method: 'POST',
              headers: {
                'X-ORIONX-TIMESTAMP': timestamp,
                'X-ORIONX-APIKEY': apiKey,
                'X-ORIONX-SIGNATURE': signature
              },
              body: body
            });

          case 3:
            response = _context.sent;

            console.log('make response', response);
            _JSON$parse = JSON.parse(response), data = _JSON$parse.data, errors = _JSON$parse.errors;

            if (!errors) {
              _context.next = 8;
              break;
            }

            throw Error(errors[0].message);

          case 8:
            return _context.abrupt('return', data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);
            throw Error(_context.t0.message);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 11]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();