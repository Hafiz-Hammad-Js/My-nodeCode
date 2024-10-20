import express from 'express'
import headerModel from '../../models/HeaderModel.mjs'


const Router = express.Router()


Router.post('/HeaderPostWork', async (req, res) => {
    try {
        const getdata = await headerModel.create(req.body)
        console.log("data get", getdata)
        res.send({ message: "Your Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/HeaderGetWork", async (req, res) => {
    try {
        const dataFind = await headerModel.find()
        console.log("your data get", dataFind)
        res.send({ message: "your data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await headerModel.findByIdAndUpdate(userId, updateData)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data updated")
        res.send({ message: "data updated", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;