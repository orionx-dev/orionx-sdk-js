"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jssha = _interopRequireDefault(require("jssha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var body = _ref.body,
      timestamp = _ref.timestamp,
      secretKey = _ref.secretKey;
  var shaObj = new _jssha.default('SHA-512', 'TEXT');
  shaObj.setHMACKey(secretKey, 'TEXT');
  shaObj.update(timestamp + body);
  return shaObj.getHMAC('HEX');
};

exports.default = _default;