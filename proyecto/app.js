import express from "express";
import indexRoutes from './routes/indexRoutes.js';
import exphbs from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(indexRoutes);
app.use(express["static"](path.join(__dirname, "frontend")));
export default app;