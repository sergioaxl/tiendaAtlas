import { connect } from "mongoose";
import {MONDODB_URI} from "./config.js"

(async () => {
    try {
        const db = await connect(MONDODB_URI)
        console.log("Database connected to", db.connection.name)
    } catch (error) {
        console.error(error)
        
    }
})()