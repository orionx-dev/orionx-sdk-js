'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

exports.default = function () {
  _index2.default.setCredentials({
    apiKey: process.env.API_KEY,
    secretKey: process.env.SECRET_KEY
  });
};