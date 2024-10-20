import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: './Secret/Secret.env' });

// const DataBaseUrl = "mongodb://127.0.0.1:27017/myProtfolioDatabase"
const hostDataBase =process.env.DB_Url
mongoose.connect(hostDataBase)

const db = mongoose.connection

db.on("connected", () => {
    console.log("You have connected in DataBase MongoDB")
})

db.on("disconnected", () => {
    console.log("You are disconnecting")
})

db.on("error", (error) => {
    console.log("You are facing some Error", error)
})

export default db;