
import express from 'express'
import WebSchema from '../../models/WebProtfolioModel.mjs'


const Router = express.Router()


Router.post('/WebProtfolioPostWork', async (req, res) => {
    try {
        const getdata = await WebSchema.create(req.body)
        console.log("data Web Protfolio get", getdata)
        res.send({ message: "Your Web Protfolio Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/WebProtfolioGetWork", async (req, res) => {
    try {
        const dataFind = await WebSchema.find()
        console.log("your data Web protfolio get", dataFind)
        res.send({ message: "your Web protfolio data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await WebSchema.findByIdAndUpdate(userId, updateData)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Web Protfolio updated")
        res.send({ message: "Your Web Protfolio data updated", result })
    } catch (error) {
        console.error(error)
    }

})

Router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const result = await WebSchema.findByIdAndDelete(userId)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Web Protfolio Deleted")
        res.send({ message: "your Portfolio data has deleted", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;