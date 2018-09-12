"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _callOrionx = _interopRequireDefault(require("./helpers/callOrionx"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _queries = _interopRequireDefault(require("./queries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["mutation ", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["query ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Orionx = _objectSpread({
  setCredentials: function setCredentials(_ref) {
    var apiKey = _ref.apiKey,
        secretKey = _ref.secretKey,
        apiUri = _ref.apiUri;
    if (!apiUri) apiUri = 'https://api2.orionx.io/graphql';
    if (!apiKey) throw new Error('Missing apiKey');
    if (!secretKey) throw new Error('Missing secretKey');
    this.credentials = {
      apiKey: apiKey,
      secretKey: secretKey,
      apiUri: apiUri
    };
  },
  getCredentials: function getCredentials() {
    return this.credentials;
  },
  graphql: function () {
    var _graphql = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref2) {
      var query, variables, body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _ref2.query, variables = _ref2.variables;

              if (query) {
                _context.next = 3;
                break;
              }

              throw new Error('Missing Query');

            case 3:
              if (variables) {
                _context.next = 5;
                break;
              }

              throw new Error('Missing Variables');

            case 5:
              body = JSON.stringify({
                query: query,
                variables: variables
              });
              _context.next = 8;
              return (0, _callOrionx.default)({
                body: body,
                credentials: this.credentials
              });

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function graphql(_x) {
      return _graphql.apply(this, arguments);
    };
  }(),
  query: function () {
    var _query = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_ref3) {
      var schema, variables, query;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              schema = _ref3.schema, variables = _ref3.variables;
              query = (0, _graphqlTag.default)(_templateObject(), schema);
              _context2.next = 4;
              return this.graphql({
                query: query,
                variables: variables
              });

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function query(_x2) {
      return _query.apply(this, arguments);
    };
  }(),
  mutation: function () {
    var _mutation = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(_ref4) {
      var schema, params, query;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              schema = _ref4.schema, params = _ref4.params;
              query = (0, _graphqlTag.default)(_templateObject2(), schema);
              _context3.next = 4;
              return this.graphql({
                query: query,
                variables: variables
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function mutation(_x3) {
      return _mutation.apply(this, arguments);
    };
  }()
}, _queries.default);

var _default = Orionx;
exports.default = _default;