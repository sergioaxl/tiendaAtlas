"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var productoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    requiered: true,
    unique: true,
    trim: true
  },
  descripcion: {
    type: String,
    requiered: true
  },
  precio: {
    type: String,
    requiered: true
  },
  opcion: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)("Producto", productoEsquema);