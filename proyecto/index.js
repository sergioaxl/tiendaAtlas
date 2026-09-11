"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
require("./database.js");
var _config = require("./config.js");
_app["default"].listen(_config.PORT);
console.log("Servidor en el puerto", 3000);