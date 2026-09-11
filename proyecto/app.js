"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _indexRoutes = _interopRequireDefault(require("./routes/indexRoutes.js"));
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _morgan = _interopRequireDefault(require("morgan"));
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var app = (0, _express["default"])();
app.set("views", _path["default"].join(_dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars["default"])({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_indexRoutes["default"]);
app.use(_express["default"]["static"](_path["default"].join(_dirname, "frontend")));
var _default = exports["default"] = app;