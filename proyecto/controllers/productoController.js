"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductos = exports.statusProductos = exports.renderProductos = exports.renderEditProducto = exports.deleteProductos = exports.createProductos = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Productos = _interopRequireDefault(require("../models/Productos.js"));
var renderProductos = exports.renderProductos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var productos;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return _Productos["default"].find().lean();
        case 1:
          productos = _context.sent;
          res.render("index", {
            productos: productos
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function renderProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createProductos = exports.createProductos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var productos, _t;
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          productos = (0, _Productos["default"])(req.body);
          _context2.next = 1;
          return productos.save();
        case 1:
          res.redirect("/");
          _context2.next = 3;
          break;
        case 2:
          _context2.prev = 2;
          _t = _context2["catch"](0);
          console.log(_t);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function createProductos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var renderEditProducto = exports.renderEditProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var productos, _t2;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 1;
          return _Productos["default"].findById(req.params.id).lean();
        case 1:
          productos = _context3.sent;
          res.render("editar", {
            productos: productos
          });
          _context3.next = 3;
          break;
        case 2:
          _context3.prev = 2;
          _t2 = _context3["catch"](0);
          console.log(_t2.message);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function renderEditProducto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateProductos = exports.updateProductos = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 1;
          return _Productos["default"].findByIdAndUpdate(id, req.body);
        case 1:
          res.redirect("/");
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateProductos(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteProductos = exports.deleteProductos = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function (_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 1;
          return _Productos["default"].findByIdAndDelete(id);
        case 1:
          res.redirect("/");
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function deleteProductos(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();
var statusProductos = exports.statusProductos = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, productos;
    return _regenerator["default"].wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 1;
          return _Productos["default"].findById(id);
        case 1:
          productos = _context6.sent;
          productos.opcion = !productos.opcion;
          _context6.next = 2;
          return productos.save();
        case 2:
          res.redirect("/");
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function statusProductos(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();