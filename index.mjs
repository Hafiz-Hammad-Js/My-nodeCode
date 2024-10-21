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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT =process.env.PORT || 3000

app.listen(PORT, () => {

    console.log("express is working on " + PORT+ " prot number....")

})




