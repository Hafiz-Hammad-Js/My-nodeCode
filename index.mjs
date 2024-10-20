import express from "express"
import db from "./db.mjs"
import bodyParser from "body-parser"
import cors from 'cors'
import Router from "./Router/router.mjs"
import dotenv from 'dotenv';
dotenv.config({ path: './Secret/Secret.env' });

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/', Router)

const PROT =process.env.PROT || 3000

app.listen(PROT, () => {

    console.log("express is working on " + PROT+ " prot number....")

})


const jwtSecret = process.env.JWT_SECRET;
console.log("me ",jwtSecret); // Accessed directly


