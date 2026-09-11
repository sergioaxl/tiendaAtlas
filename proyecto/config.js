"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONDODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONDODB_URI = exports.MONDODB_URI = process.env.MONDODB_URI || "mongodb://localhost:27017/tiendaweb-mongo";
var PORT = exports.PORT = process.env.PORT || 5000;