import express from 'express'
import exprienceSchema from '../../models/ExprienceModel.mjs'


const Router = express.Router()


Router.post('/ExpriencePostWork', async (req, res) => {
    try {
        const getdata = await exprienceSchema.create(req.body)
        console.log("data Exprience get", getdata)
        res.send({ message: "Your Exprience Data Save" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.error(error)
    }
})


Router.get("/ExprienceGetWork", async (req, res) => {
    try {
        const dataFind = await exprienceSchema.find()
        console.log("your data Exprience get", dataFind)
        res.send({ message: "your Experience data get", dataFind })
    } catch (error) {
        console.log(error)
    }
})

Router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const updateData = req.body
        const result = await exprienceSchema.findByIdAndUpdate(userId, updateData)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data updated")
        res.send({ message: "Your Experience data updated", result })
    } catch (error) {
        console.error(error)
    }

})

Router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id
        const result = await exprienceSchema.findByIdAndDelete(userId)
        if(!result){
            res.status(404).json({error:"person not found"})
        }
        console.log("data Deleted")
        res.send({ message: "your data has deleted", result })
    } catch (error) {
        console.error(error)
    }

})


export default Router;