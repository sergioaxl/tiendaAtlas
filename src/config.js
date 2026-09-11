import { config } from "dotenv";

config()

export const MONDODB_URI  = process.env.MONDODB_URI || "mongodb://localhost:27017/tiendaweb-mongo"

export const PORT = process.env.PORT || 5000;
