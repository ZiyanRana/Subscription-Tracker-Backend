import mongoose, { mongo } from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI) {
    throw new Error("DB_URI not found in the env file");
}

const connectToDb = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to Database in the ${NODE_ENV} mode.`);
    } 
    catch (error) {
        console.error("Error connecting to DB: ", error);
        process.exit(1);
    }
} 

export default connectToDb;