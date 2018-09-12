"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _generateSignature = _interopRequireDefault(require("./generateSignature"));

var _requestPromise = _interopRequireDefault(require("request-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x) {
  return _ref2.apply(this, arguments);
}

function _ref2() {
  _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var body, credentials, timestamp, signature, response, _JSON$parse, data, errors;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            body = _ref.body, credentials = _ref.credentials;
            timestamp = new Date().getTime() / 1000;
            signature = (0, _generateSignature.default)({
              body: body,
              timestamp: timestamp,
              secretKey: credentials.secretKey
            });
            _context.prev = 3;
            _context.next = 6;
            return (0, _requestPromise.default)({
              uri: credentials.apiUri,
              method: 'POST',
              headers: {
                'X-ORIONX-TIMESTAMP': timestamp,
                'X-ORIONX-APIKEY': credentials.apiKey,
                'X-ORIONX-SIGNATURE': signature
              },
              body: body
            });

          case 6:
            response = _context.sent;
            _JSON$parse = JSON.parse(response), data = _JSON$parse.data, errors = _JSON$parse.errors;

            if (!errors) {
              _context.next = 10;
              break;
            }

            throw Error(errors[0].message);

          case 10:
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            throw _context.t0;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 13]]);
  }));
  return _ref2.apply(this, arguments);
}