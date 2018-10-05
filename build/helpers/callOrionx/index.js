'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _generateSignature = require('./generateSignature');

var _generateSignature2 = _interopRequireDefault(_generateSignature);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var body = _ref2.body,
        credentials = _ref2.credentials;

    var timestamp, signature, response, _JSON$parse, data, errors;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timestamp = new Date().getTime() / 1000;
            signature = (0, _generateSignature2.default)({ body: body, timestamp: timestamp, secretKey: credentials.secretKey });
            _context.prev = 2;
            _context.next = 5;
            return (0, _requestPromise2.default)({
              uri: credentials.apiUri,
              method: 'POST',
              headers: {
                'X-ORIONX-TIMESTAMP': timestamp,
                'X-ORIONX-APIKEY': credentials.apiKey,
                'X-ORIONX-SIGNATURE': signature
              },
              body: body
            });

          case 5:
            response = _context.sent;
            _JSON$parse = JSON.parse(response), data = _JSON$parse.data, errors = _JSON$parse.errors;

            if (!errors) {
              _context.next = 9;
              break;
            }

            throw Error(errors[0].message);

          case 9:
            return _context.abrupt('return', data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](2);
            throw Error(_context.t0.message);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 12]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();