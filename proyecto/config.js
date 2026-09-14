import { config } from "dotenv";
config();
export var MONDODB_URI = process.env.MONDODB_URI || "mongodb://localhost:27017/tiendaweb-mongo";
export var PORT = process.env.PORT || 5000;