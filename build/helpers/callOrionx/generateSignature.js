'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jssha = require('jssha');

var _jssha2 = _interopRequireDefault(_jssha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Generates a valid HMAC-SHA512 signature
exports.default = function (_ref) {
  var body = _ref.body,
      timestamp = _ref.timestamp,
      secretKey = _ref.secretKey;

  var shaObj = new _jssha2.default('SHA-512', 'TEXT');
  shaObj.setHMACKey(secretKey, 'TEXT');
  shaObj.update(timestamp + body);
  return shaObj.getHMAC('HEX');
};