"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
var _config = require("./config.js");
(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db, _t;
  return _regenerator["default"].wrap(function (_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 1;
        return (0, _mongoose.connect)(_config.MONDODB_URI);
      case 1:
        db = _context.sent;
        console.log("Database connected to", db.connection.name);
        _context.next = 3;
        break;
      case 2:
        _context.prev = 2;
        _t = _context["catch"](0);
        console.error(_t);
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 2]]);
}))();